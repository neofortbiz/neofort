import { BASE } from '../../../lib/constants.js';
import { Resend } from 'resend';
import { validatePhone } from '../../../lib/countryCodes.js';
import { rateLimit, clientIp } from '../../../lib/rateLimit.js';

const resend = new Resend(process.env.RESEND_API_KEY);

// ── v281: limite de securitate pe endpoint ──────────────────────────────────
//
// Problema reparata: al doilea email (confirmarea) pleaca spre adresa scrisa
// in formular, cu from: no-reply@neofort-biz.ro. Campurile nume, adresa,
// comanda si produse erau interpolate NEESCAPATE in HTML-ul lui. Oricine
// trecea de honeypot putea deci trimite catre orice adresa un email cu
// antetul si domeniul nostru, continand HTML la alegere — linkuri, butoane,
// un text care imita o notificare oficiala. Un instrument de phishing gata
// facut, semnat Neofort BIZ.
//
// Reparatia are trei straturi: (1) destinatarul e validat, (2) fiecare
// valoare e taiata ca lungime, curatata de CR/LF si escapata la HTML,
// (3) un IP nu poate trimite mai mult de MAX_PER_HOUR formulare pe ora.

const MAX_PER_HOUR = 5;          // formulare / IP / ora
const MAX_FILES = 5;             // atasamente per solicitare
const MAX_FILE_BYTES = 5 * 1024 * 1024;    // 5 MB per fisier
const MAX_TOTAL_BYTES = 15 * 1024 * 1024;  // 15 MB in total

// Extensii acceptate: fotografii, schite si documente de deviz. Fara arhive
// si fara executabile — atasamentele ajung in casuta oferte@, nu vrem sa fie
// un canal prin care cineva livreaza fisiere arbitrare acolo.
const ALLOWED_EXT = new Set([
  'pdf', 'jpg', 'jpeg', 'png', 'webp', 'avif', 'heic', 'heif', 'gif',
  'doc', 'docx', 'xls', 'xlsx', 'odt', 'ods', 'txt', 'dwg', 'dxf',
]);

// Deliberat strict: fara spatii, fara ghilimele, fara < > , ; — caractere
// folosite in injectarea de anteturi si in adrese formatate ("Nume <a@b>").
const EMAIL_RE = /^[^\s@<>"',;]{1,64}@[^\s@<>"',;.]{1,63}(\.[^\s@<>"',;.]{1,63})+$/;

/** Scoate CR/LF/TAB si taie la lungimea maxima. */
const clean = (v, max) => String(v ?? '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);

/** Escapare HTML — se aplica la TOT ce provine din formular. */
const esc = (v) => String(v ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

/** Nume de fisier sigur pentru antetul atasamentului. */
const safeName = (name) => {
  const base = String(name ?? 'fisier').replace(/[\r\n]/g, '').split(/[\\/]/).pop() || 'fisier';
  return base.replace(/[^\w.\- ()]/g, '_').slice(0, 120);
};

// ── Texte email confirmare client, pe 6 limbi — v217 ────────────────────────
// Anterior emailul era integral in romana pentru toti clientii, indiferent de
// limba de pe care trimiteau formularul.
const EMAIL_TEXTS = {
  ro: {
    subject: "Solicitarea dvs. a fost înregistrată — Neofort BIZ",
    tagline: "Tâmplărie PVC Salamander · Aluminiu Alumil",
    thanks: (n) => `Vă mulțumim, ${n}!`,
    intro: (t) => `Solicitarea dvs. de ofertă a fost înregistrată cu succes și va fi procesată în maxim <strong style="color:#151515;">2 zile lucrătoare</strong>. Un specialist Neofort BIZ vă va contacta la numărul <strong style="color:#151515;">${t}</strong>.`,
    summary: "Rezumatul solicitării", rowType: "Tip comandă", rowAddr: "Adresă livrare",
    products: "Produse și servicii solicitate:", btnSite: "Vizitați site-ul",
    urgent: `Dacă aveți întrebări urgente, ne puteți contacta direct la <a href="mailto:oferte@neofort-biz.ro" style="color:#151515;">oferte@neofort-biz.ro</a> sau telefonic la <a href="tel:+40752443435" style="color:#151515;">+40 752 443 435</a>.`,
    addr: "Str. Theodor Aman 11, Sector 1, București 010776", hours: "Luni — Vineri: 10:00 — 18:00",
    legal: "Marcă înregistrată O.S.I.M. nr. M 2014 05130 · Acest email a fost generat automat ca urmare a solicitării dvs.",
  },
  en: {
    subject: "Your request has been received — Neofort BIZ",
    tagline: "Salamander PVC Windows · Alumil Aluminium",
    thanks: (n) => `Thank you, ${n}!`,
    intro: (t) => `Your quote request has been received and will be processed within <strong style="color:#151515;">2 working days</strong>. A Neofort BIZ specialist will contact you on <strong style="color:#151515;">${t}</strong>.`,
    summary: "Request summary", rowType: "Order type", rowAddr: "Delivery address",
    products: "Products and services requested:", btnSite: "Visit the website",
    urgent: `If you have any urgent questions, you can reach us directly at <a href="mailto:oferte@neofort-biz.ro" style="color:#151515;">oferte@neofort-biz.ro</a> or by phone on <a href="tel:+40752443435" style="color:#151515;">+40 752 443 435</a>.`,
    addr: "11 Theodor Aman St., Sector 1, Bucharest 010776, Romania", hours: "Monday — Friday: 10:00 — 18:00",
    legal: "OSIM registered trademark no. M 2014 05130 · This email was generated automatically in response to your request.",
  },
  de: {
    subject: "Ihre Anfrage ist bei uns eingegangen — Neofort BIZ",
    tagline: "Salamander Kunststofffenster · Alumil Aluminium",
    thanks: (n) => `Vielen Dank, ${n}!`,
    intro: (t) => `Ihre Angebotsanfrage ist bei uns eingegangen und wird innerhalb von <strong style="color:#151515;">2 Werktagen</strong> bearbeitet. Ein Neofort BIZ Mitarbeiter meldet sich bei Ihnen unter <strong style="color:#151515;">${t}</strong>.`,
    summary: "Zusammenfassung der Anfrage", rowType: "Art der Bestellung", rowAddr: "Lieferadresse",
    products: "Angefragte Produkte und Leistungen:", btnSite: "Zur Website",
    urgent: `Bei dringenden Fragen erreichen Sie uns direkt unter <a href="mailto:oferte@neofort-biz.ro" style="color:#151515;">oferte@neofort-biz.ro</a> oder telefonisch unter <a href="tel:+40752443435" style="color:#151515;">+40 752 443 435</a>.`,
    addr: "Str. Theodor Aman 11, Sektor 1, Bukarest 010776, Rumänien", hours: "Montag — Freitag: 10:00 — 18:00",
    legal: "OSIM eingetragene Marke Nr. M 2014 05130 · Diese E-Mail wurde automatisch als Antwort auf Ihre Anfrage erstellt.",
  },
  fr: {
    subject: "Votre demande a bien été enregistrée — Neofort BIZ",
    tagline: "Menuiserie PVC Salamander · Aluminium Alumil",
    thanks: (n) => `Merci, ${n} !`,
    intro: (t) => `Votre demande de devis a bien été enregistrée et sera traitée sous <strong style="color:#151515;">2 jours ouvrés</strong>. Un spécialiste Neofort BIZ vous contactera au <strong style="color:#151515;">${t}</strong>.`,
    summary: "Récapitulatif de la demande", rowType: "Type de commande", rowAddr: "Adresse de livraison",
    products: "Produits et services demandés :", btnSite: "Visiter le site",
    urgent: `Pour toute question urgente, vous pouvez nous joindre directement à <a href="mailto:oferte@neofort-biz.ro" style="color:#151515;">oferte@neofort-biz.ro</a> ou par téléphone au <a href="tel:+40752443435" style="color:#151515;">+40 752 443 435</a>.`,
    addr: "11 rue Theodor Aman, Secteur 1, Bucarest 010776, Roumanie", hours: "Lundi — Vendredi : 10h00 — 18h00",
    legal: "Marque déposée OSIM n° M 2014 05130 · Cet e-mail a été généré automatiquement suite à votre demande.",
  },
  es: {
    subject: "Hemos recibido su solicitud — Neofort BIZ",
    tagline: "Carpintería PVC Salamander · Aluminio Alumil",
    thanks: (n) => `¡Gracias, ${n}!`,
    intro: (t) => `Su solicitud de presupuesto se ha registrado correctamente y se procesará en un plazo máximo de <strong style="color:#151515;">2 días laborables</strong>. Un especialista de Neofort BIZ se pondrá en contacto con usted en el <strong style="color:#151515;">${t}</strong>.`,
    summary: "Resumen de la solicitud", rowType: "Tipo de pedido", rowAddr: "Dirección de entrega",
    products: "Productos y servicios solicitados:", btnSite: "Visitar el sitio web",
    urgent: `Si tiene alguna consulta urgente, puede escribirnos directamente a <a href="mailto:oferte@neofort-biz.ro" style="color:#151515;">oferte@neofort-biz.ro</a> o llamarnos al <a href="tel:+40752443435" style="color:#151515;">+40 752 443 435</a>.`,
    addr: "C/ Theodor Aman 11, Sector 1, Bucarest 010776, Rumanía", hours: "Lunes — Viernes: 10:00 — 18:00",
    legal: "Marca registrada OSIM n.º M 2014 05130 · Este correo se ha generado automáticamente como respuesta a su solicitud.",
  },
  it: {
    subject: "Abbiamo ricevuto la vostra richiesta — Neofort BIZ",
    tagline: "Infissi PVC Salamander · Alluminio Alumil",
    thanks: (n) => `Grazie, ${n}!`,
    intro: (t) => `La vostra richiesta di preventivo è stata registrata e verrà elaborata entro <strong style="color:#151515;">2 giorni lavorativi</strong>. Un specialista Neofort BIZ vi contatterà al numero <strong style="color:#151515;">${t}</strong>.`,
    summary: "Riepilogo della richiesta", rowType: "Tipo di ordine", rowAddr: "Indirizzo di consegna",
    products: "Prodotti e servizi richiesti:", btnSite: "Visita il sito",
    urgent: `Per domande urgenti potete contattarci direttamente a <a href="mailto:oferte@neofort-biz.ro" style="color:#151515;">oferte@neofort-biz.ro</a> oppure telefonicamente al <a href="tel:+40752443435" style="color:#151515;">+40 752 443 435</a>.`,
    addr: "Str. Theodor Aman 11, Settore 1, Bucarest 010776, Romania", hours: "Lunedì — Venerdì: 10:00 — 18:00",
    legal: "Marchio registrato OSIM n. M 2014 05130 · Questa email è stata generata automaticamente in seguito alla vostra richiesta.",
  },
};

export async function POST(request) {
  try {
    const formData = await request.formData();

    // ── ANTI-SPAM (v259) ───────────────────────────────────────────────────
    // 1. Honeypot: campul "website" e ascuns in afara ecranului, cu
    //    aria-hidden si tabIndex -1. Un om nu-l vede si nu-l completeaza.
    //    Botii completeaza toate campurile pe care le gasesc in HTML.
    // 2. Capcana de timp: formularul trimite in "t" milisecundele scurse de
    //    la incarcarea paginii pana la trimitere. Sub 3 secunde = bot. Campul
    //    lipsa = bot care posteaza direct pe endpoint, fara sa ruleze JS.
    // In ambele cazuri raspundem success:true FARA sa trimitem vreun email —
    // botul crede ca a reusit si nu reincearca cu alte variante.
    const honeypot = String(formData.get('website') || '').trim();
    const elapsed  = Number(formData.get('t'));
    if (honeypot !== '' || !Number.isFinite(elapsed) || elapsed < 3000) {
      console.warn('[contact] respins ca spam:', JSON.stringify({ honeypot: honeypot !== '', elapsed }));
      return Response.json({ success: true, id: null });
    }

    // ── LIMITA PE IP (v281) ────────────────────────────────────────────────
    // Verificata DUPA honeypot: botii simpli cad mai devreme, fara sa
    // consume o comanda Upstash. Fail-open — daca Upstash nu raspunde,
    // cererea trece, ca sa nu pierdem clienti reali.
    const ip = clientIp(request);
    const limit = await rateLimit(`contact:${ip}`, MAX_PER_HOUR, 3600);
    if (!limit.ok) {
      console.warn('[contact] respins — limita pe IP:', JSON.stringify({ ip, count: limit.count }));
      return Response.json({ success: true, id: null });
    }

    // ── VALIDARE TELEFON (v260) ────────────────────────────────────────────
    // Aceeasi functie ca in browser, din lib/countryCodes.js — o singura
    // implementare, deci cele doua nu pot ajunge sa difere in timp.
    // Botul care posteaza direct pe endpoint nu ruleaza validarea din browser,
    // deci asta e singura care conteaza.
    const prefix = String(formData.get('prefix') || '');
    const phone  = validatePhone(prefix, formData.get('telefon') || '');
    if (!phone.ok) {
      console.warn('[contact] respins — telefon invalid:', JSON.stringify({ prefix, reason: phone.reason }));
      return Response.json({ success: true, id: null });
    }

    // ── CAMPURI: lungime limitata, fara CR/LF (v281) ───────────────────────
    const nume = clean(formData.get('nume'), 100);
    const telefon = phone.e164;
    const emailRaw = clean(formData.get('email'), 150);
    // Un destinatar care nu trece validarea nu primeste confirmare. Internul
    // pleaca oricum, ca sa nu pierdem solicitarea — adresa gresita apare in
    // el ca text escapat, si echipa suna pe telefon.
    const email = EMAIL_RE.test(emailRaw) ? emailRaw : '';
    const comanda = clean(formData.get('comanda'), 100);
    const adresa = clean(formData.get('adresa'), 250);
    const produse = formData.getAll('produse').slice(0, 40).map((p) => clean(p, 120));
    const files = formData.getAll('files').slice(0, MAX_FILES);
    const locale = String(formData.get('locale') || 'ro');
    const T = EMAIL_TEXTS[locale] || EMAIL_TEXTS.ro;

    // Produse HTML pentru emailuri — escapat, intra in ambele sabloane
    const produseHTML = produse.length > 0
      ? produse.map(p => `<li style="padding:4px 0;border-bottom:1px solid #eee;font-size:.85rem;color:#151515;">${esc(p)}</li>`).join('')
      : '<li style="color:#141414;font-size:.85rem;">Niciun produs selectat</li>';

    // ── ATASAMENTE: numar, tip si dimensiune limitate (v281) ───────────────
    // Merg DOAR catre oferte@neofort-biz.ro, niciodata catre adresa din
    // formular. Limitele protejeaza casuta interna si memoria functiei.
    const attachments = [];
    const respinse = [];
    let totalBytes = 0;
    for (const file of files) {
      if (!file || typeof file.arrayBuffer !== 'function' || !(file.size > 0)) continue;

      const name = safeName(file.name);
      const ext = (name.split('.').pop() || '').toLowerCase();

      if (!ALLOWED_EXT.has(ext)) { respinse.push(`${name} (tip neacceptat)`); continue; }
      if (file.size > MAX_FILE_BYTES) { respinse.push(`${name} (peste 5 MB)`); continue; }
      if (totalBytes + file.size > MAX_TOTAL_BYTES) { respinse.push(`${name} (depaseste totalul de 15 MB)`); continue; }

      const buffer = await file.arrayBuffer();
      totalBytes += file.size;
      attachments.push({ filename: name, content: Buffer.from(buffer).toString('base64') });
    }

    // ── EMAIL 1: către Neofort (intern) ──
    const emailIntern = resend.emails.send({
      from: 'no-reply@neofort-biz.ro',
      to: 'oferte@neofort-biz.ro',
      replyTo: email || undefined,
      subject: `Solicitare ofertă — ${nume} — ${telefon}`,
      attachments,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;">
          <div style="background:#111;padding:24px 32px;">
            <h1 style="font-family:sans-serif;font-weight:400;font-size:1.1rem;letter-spacing:.3em;text-transform:uppercase;color:#fff;margin:0;">
              NEOFORT BIZ — Solicitare Ofertă
            </h1>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#141414;width:140px;text-transform:uppercase;letter-spacing:.1em;">Nume</td>
                <td style="padding:10px 0;font-size:.9rem;color:#151515;font-weight:500;">${esc(nume)}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#141414;text-transform:uppercase;letter-spacing:.1em;">Telefon</td>
                <td style="padding:10px 0;font-size:.9rem;color:#151515;">${esc(telefon)}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#141414;text-transform:uppercase;letter-spacing:.1em;">E-mail</td>
                <td style="padding:10px 0;font-size:.9rem;color:#151515;">${esc(emailRaw)}${email ? '' : ' <strong style="color:#b00;">(adresă invalidă — fără confirmare automată)</strong>'}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#141414;text-transform:uppercase;letter-spacing:.1em;">Comandă cu</td>
                <td style="padding:10px 0;font-size:.9rem;color:#151515;">${esc(comanda)}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#141414;text-transform:uppercase;letter-spacing:.1em;">Adresă livrare</td>
                <td style="padding:10px 0;font-size:.9rem;color:#151515;">${esc(adresa)}</td>
              </tr>
            </table>
            <div style="margin-bottom:24px;">
              <div style="font-size:.8rem;color:#141414;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">Produse solicitate:</div>
              <ul style="margin:0;padding-left:16px;">${produseHTML}</ul>
            </div>
            ${attachments.length > 0 ? `
            <div style="background:#f7f7f5;padding:12px 16px;font-size:.8rem;color:#141414;">
              📎 ${attachments.length} fișier(e) atașate: ${esc(attachments.map(a => a.filename).join(', '))}
            </div>` : ''}
            ${respinse.length > 0 ? `
            <div style="background:#fff4f4;padding:12px 16px;font-size:.8rem;color:#b00;margin-top:8px;">
              ⚠ ${respinse.length} fișier(e) respinse: ${esc(respinse.join(', '))}
            </div>` : ''}
          </div>
          <div style="background:#f7f7f5;padding:16px 32px;font-size:.75rem;color:#141414;border-top:1px solid #eee;">
            Neofort BIZ · Str. Theodor Aman 11, Sector 1, București 010776 · oferte@neofort-biz.ro
          </div>
        </div>
      `,
    });

    // ── EMAIL 2: confirmare către client ──
    const emailClient = email ? resend.emails.send({
      from: 'no-reply@neofort-biz.ro',
      to: email,
      subject: T.subject,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;">

          <!-- Header -->
          <div style="background:#111;padding:28px 32px;">
            <div style="font-family:sans-serif;font-weight:400;font-size:1.1rem;letter-spacing:.35em;text-transform:uppercase;color:#fff;">
              NEOFORT BIZ
            </div>
            <div style="font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:#141414;margin-top:4px;">
              ${T.tagline}
            </div>
          </div>

          <!-- Body -->
          <div style="padding:40px 32px;">
            <h2 style="font-family:sans-serif;font-weight:400;font-size:1.3rem;color:#151515;margin:0 0 8px;">
              ${T.thanks(esc(nume))}
            </h2>
            <p style="font-size:.88rem;color:#141414;line-height:1.7;margin:0 0 32px;">
              ${T.intro(esc(telefon))}
            </p>

            <!-- Rezumat -->
            <div style="background:#f7f7f5;padding:24px;margin-bottom:32px;">
              <div style="font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:#141414;margin-bottom:16px;">
                ${T.summary}
              </div>
              <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
                <tr style="border-bottom:1px solid #eee;">
                  <td style="padding:8px 0;font-size:.78rem;color:#141414;width:130px;">${T.rowType}</td>
                  <td style="padding:8px 0;font-size:.82rem;color:#151515;">${esc(comanda)}</td>
                </tr>
                <tr style="border-bottom:1px solid #eee;">
                  <td style="padding:8px 0;font-size:.78rem;color:#141414;">${T.rowAddr}</td>
                  <td style="padding:8px 0;font-size:.82rem;color:#151515;">${esc(adresa)}</td>
                </tr>
              </table>
              ${produse.length > 0 ? `
              <div style="font-size:.78rem;color:#141414;margin-bottom:8px;">${T.products}</div>
              <ul style="margin:0;padding-left:16px;">${produseHTML}</ul>
              ` : ''}
            </div>

            <!-- Butoane -->
            <div style="display:flex;gap:12px;margin-bottom:32px;">
              <a href="${BASE}" style="display:inline-block;background:#1a1a1a;color:#fff;font-family:sans-serif;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;padding:14px 28px;text-decoration:none;">
                ${T.btnSite}
              </a>
              <a href="tel:+40752443435" style="display:inline-block;background:transparent;color:#151515;font-family:sans-serif;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;padding:14px 28px;text-decoration:none;border:1px solid #1a1a1a;">
                +40 752 443 435
              </a>
            </div>

            <p style="font-size:.78rem;color:#2d2d2d;line-height:1.6;border-top:1px solid #eee;padding-top:24px;margin:0;">
              ${T.urgent}
            </p>
          </div>

          <!-- Footer -->
          <div style="background:#111;padding:20px 32px;font-size:.72rem;color:#7c7c7c;line-height:1.8;">
            <div style="color:#fff;letter-spacing:.2em;text-transform:uppercase;font-size:.65rem;margin-bottom:6px;">NEOFORT BIZ SRL</div>
            ${T.addr}<br/>
            ${T.hours}<br/>
            <a href="${BASE}" style="color:#7c7c7c;text-decoration:none;">www.neofort-biz.ro</a>
            <div style="margin-top:12px;font-size:.65rem;color:#7c7c7c;">
              ${T.legal}
            </div>
          </div>

        </div>
      `,
    }) : Promise.resolve({ data: null, error: null });

    // Trimite ambele emailuri simultan
    const [internResult, clientResult] = await Promise.all([emailIntern, emailClient]);

    if (internResult.error) {
      console.error('Resend intern error:', internResult.error);
      return Response.json({ success: false, error: internResult.error.message }, { status: 500 });
    }

    return Response.json({ success: true, id: internResult.data?.id });

  } catch (err) {
    console.error('API contact error:', err);
    return Response.json({ success: false, error: 'Eroare server' }, { status: 500 });
  }
}
