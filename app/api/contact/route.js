import { BASE } from '../../../lib/constants.js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Texte email confirmare client, pe 6 limbi — v217 ────────────────────────
// Anterior emailul era integral in romana pentru toti clientii, indiferent de
// limba de pe care trimiteau formularul.
const EMAIL_TEXTS = {
  ro: {
    subject: "Solicitarea dvs. a fost înregistrată — Neofort BIZ",
    tagline: "Tâmplărie PVC Salamander · Aluminiu Alumil",
    thanks: (n) => `Vă mulțumim, ${n}!`,
    intro: (t) => `Solicitarea dvs. de ofertă a fost înregistrată cu succes și va fi procesată în maxim <strong style="color:#1a1a1a;">2 zile lucrătoare</strong>. Un specialist Neofort BIZ vă va contacta la numărul <strong style="color:#1a1a1a;">${t}</strong>.`,
    summary: "Rezumatul solicitării", rowType: "Tip comandă", rowAddr: "Adresă livrare",
    products: "Produse și servicii solicitate:", btnSite: "Vizitați site-ul",
    urgent: `Dacă aveți întrebări urgente, ne puteți contacta direct la <a href="mailto:oferte@neofort-biz.ro" style="color:#1a1a1a;">oferte@neofort-biz.ro</a> sau telefonic la <a href="tel:+40752443435" style="color:#1a1a1a;">+40 752 443 435</a>.`,
    addr: "Str. Theodor Aman 11, Sector 1, București 010776", hours: "Luni — Vineri: 10:00 — 18:00",
    legal: "Marcă înregistrată O.S.I.M. nr. M 2014 05130 · Acest email a fost generat automat ca urmare a solicitării dvs.",
  },
  en: {
    subject: "Your request has been received — Neofort BIZ",
    tagline: "Salamander PVC Windows · Alumil Aluminium",
    thanks: (n) => `Thank you, ${n}!`,
    intro: (t) => `Your quote request has been received and will be processed within <strong style="color:#1a1a1a;">2 working days</strong>. A Neofort BIZ specialist will contact you on <strong style="color:#1a1a1a;">${t}</strong>.`,
    summary: "Request summary", rowType: "Order type", rowAddr: "Delivery address",
    products: "Products and services requested:", btnSite: "Visit the website",
    urgent: `If you have any urgent questions, you can reach us directly at <a href="mailto:oferte@neofort-biz.ro" style="color:#1a1a1a;">oferte@neofort-biz.ro</a> or by phone on <a href="tel:+40752443435" style="color:#1a1a1a;">+40 752 443 435</a>.`,
    addr: "11 Theodor Aman St., Sector 1, Bucharest 010776, Romania", hours: "Monday — Friday: 10:00 — 18:00",
    legal: "OSIM registered trademark no. M 2014 05130 · This email was generated automatically in response to your request.",
  },
  de: {
    subject: "Ihre Anfrage ist bei uns eingegangen — Neofort BIZ",
    tagline: "Salamander Kunststofffenster · Alumil Aluminium",
    thanks: (n) => `Vielen Dank, ${n}!`,
    intro: (t) => `Ihre Angebotsanfrage ist bei uns eingegangen und wird innerhalb von <strong style="color:#1a1a1a;">2 Werktagen</strong> bearbeitet. Ein Neofort BIZ Mitarbeiter meldet sich bei Ihnen unter <strong style="color:#1a1a1a;">${t}</strong>.`,
    summary: "Zusammenfassung der Anfrage", rowType: "Art der Bestellung", rowAddr: "Lieferadresse",
    products: "Angefragte Produkte und Leistungen:", btnSite: "Zur Website",
    urgent: `Bei dringenden Fragen erreichen Sie uns direkt unter <a href="mailto:oferte@neofort-biz.ro" style="color:#1a1a1a;">oferte@neofort-biz.ro</a> oder telefonisch unter <a href="tel:+40752443435" style="color:#1a1a1a;">+40 752 443 435</a>.`,
    addr: "Str. Theodor Aman 11, Sektor 1, Bukarest 010776, Rumänien", hours: "Montag — Freitag: 10:00 — 18:00",
    legal: "OSIM eingetragene Marke Nr. M 2014 05130 · Diese E-Mail wurde automatisch als Antwort auf Ihre Anfrage erstellt.",
  },
  fr: {
    subject: "Votre demande a bien été enregistrée — Neofort BIZ",
    tagline: "Menuiserie PVC Salamander · Aluminium Alumil",
    thanks: (n) => `Merci, ${n} !`,
    intro: (t) => `Votre demande de devis a bien été enregistrée et sera traitée sous <strong style="color:#1a1a1a;">2 jours ouvrés</strong>. Un spécialiste Neofort BIZ vous contactera au <strong style="color:#1a1a1a;">${t}</strong>.`,
    summary: "Récapitulatif de la demande", rowType: "Type de commande", rowAddr: "Adresse de livraison",
    products: "Produits et services demandés :", btnSite: "Visiter le site",
    urgent: `Pour toute question urgente, vous pouvez nous joindre directement à <a href="mailto:oferte@neofort-biz.ro" style="color:#1a1a1a;">oferte@neofort-biz.ro</a> ou par téléphone au <a href="tel:+40752443435" style="color:#1a1a1a;">+40 752 443 435</a>.`,
    addr: "11 rue Theodor Aman, Secteur 1, Bucarest 010776, Roumanie", hours: "Lundi — Vendredi : 10h00 — 18h00",
    legal: "Marque déposée OSIM n° M 2014 05130 · Cet e-mail a été généré automatiquement suite à votre demande.",
  },
  es: {
    subject: "Hemos recibido su solicitud — Neofort BIZ",
    tagline: "Carpintería PVC Salamander · Aluminio Alumil",
    thanks: (n) => `¡Gracias, ${n}!`,
    intro: (t) => `Su solicitud de presupuesto se ha registrado correctamente y se procesará en un plazo máximo de <strong style="color:#1a1a1a;">2 días laborables</strong>. Un especialista de Neofort BIZ se pondrá en contacto con usted en el <strong style="color:#1a1a1a;">${t}</strong>.`,
    summary: "Resumen de la solicitud", rowType: "Tipo de pedido", rowAddr: "Dirección de entrega",
    products: "Productos y servicios solicitados:", btnSite: "Visitar el sitio web",
    urgent: `Si tiene alguna consulta urgente, puede escribirnos directamente a <a href="mailto:oferte@neofort-biz.ro" style="color:#1a1a1a;">oferte@neofort-biz.ro</a> o llamarnos al <a href="tel:+40752443435" style="color:#1a1a1a;">+40 752 443 435</a>.`,
    addr: "C/ Theodor Aman 11, Sector 1, Bucarest 010776, Rumanía", hours: "Lunes — Viernes: 10:00 — 18:00",
    legal: "Marca registrada OSIM n.º M 2014 05130 · Este correo se ha generado automáticamente como respuesta a su solicitud.",
  },
  it: {
    subject: "Abbiamo ricevuto la vostra richiesta — Neofort BIZ",
    tagline: "Infissi PVC Salamander · Alluminio Alumil",
    thanks: (n) => `Grazie, ${n}!`,
    intro: (t) => `La vostra richiesta di preventivo è stata registrata e verrà elaborata entro <strong style="color:#1a1a1a;">2 giorni lavorativi</strong>. Un specialista Neofort BIZ vi contatterà al numero <strong style="color:#1a1a1a;">${t}</strong>.`,
    summary: "Riepilogo della richiesta", rowType: "Tipo di ordine", rowAddr: "Indirizzo di consegna",
    products: "Prodotti e servizi richiesti:", btnSite: "Visita il sito",
    urgent: `Per domande urgenti potete contattarci direttamente a <a href="mailto:oferte@neofort-biz.ro" style="color:#1a1a1a;">oferte@neofort-biz.ro</a> oppure telefonicamente al <a href="tel:+40752443435" style="color:#1a1a1a;">+40 752 443 435</a>.`,
    addr: "Str. Theodor Aman 11, Settore 1, Bucarest 010776, Romania", hours: "Lunedì — Venerdì: 10:00 — 18:00",
    legal: "Marchio registrato OSIM n. M 2014 05130 · Questa email è stata generata automaticamente in seguito alla vostra richiesta.",
  },
};

export async function POST(request) {
  try {
    const formData = await request.formData();

    const nume = formData.get('nume') || '';
    const telefon = formData.get('telefon') || '';
    const email = formData.get('email') || '';
    const comanda = formData.get('comanda') || '';
    const adresa = formData.get('adresa') || '';
    const produse = formData.getAll('produse');
    const files = formData.getAll('files');
    const locale = String(formData.get('locale') || 'ro');
    const T = EMAIL_TEXTS[locale] || EMAIL_TEXTS.ro;

    // Produse HTML pentru emailuri
    const produseHTML = produse.length > 0
      ? produse.map(p => `<li style="padding:4px 0;border-bottom:1px solid #eee;font-size:.85rem;color:#1a1a1a;">${p}</li>`).join('')
      : '<li style="color:#404040;font-size:.85rem;">Niciun produs selectat</li>';

    // Procesează atașamentele
    const attachments = [];
    for (const file of files) {
      if (file && file.size > 0) {
        const buffer = await file.arrayBuffer();
        const base64 = Buffer.from(buffer).toString('base64');
        attachments.push({ filename: file.name, content: base64 });
      }
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
            <h1 style="font-family:sans-serif;font-weight:300;font-size:1.1rem;letter-spacing:.3em;text-transform:uppercase;color:#fff;margin:0;">
              NEOFORT BIZ — Solicitare Ofertă
            </h1>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#404040;width:140px;text-transform:uppercase;letter-spacing:.1em;">Nume</td>
                <td style="padding:10px 0;font-size:.9rem;color:#1a1a1a;font-weight:500;">${nume}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#404040;text-transform:uppercase;letter-spacing:.1em;">Telefon</td>
                <td style="padding:10px 0;font-size:.9rem;color:#1a1a1a;">${telefon}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#404040;text-transform:uppercase;letter-spacing:.1em;">E-mail</td>
                <td style="padding:10px 0;font-size:.9rem;color:#1a1a1a;">${email}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#404040;text-transform:uppercase;letter-spacing:.1em;">Comandă cu</td>
                <td style="padding:10px 0;font-size:.9rem;color:#1a1a1a;">${comanda}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#404040;text-transform:uppercase;letter-spacing:.1em;">Adresă livrare</td>
                <td style="padding:10px 0;font-size:.9rem;color:#1a1a1a;">${adresa}</td>
              </tr>
            </table>
            <div style="margin-bottom:24px;">
              <div style="font-size:.8rem;color:#404040;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">Produse solicitate:</div>
              <ul style="margin:0;padding-left:16px;">${produseHTML}</ul>
            </div>
            ${attachments.length > 0 ? `
            <div style="background:#f7f7f5;padding:12px 16px;font-size:.8rem;color:#404040;">
              📎 ${attachments.length} fișier(e) atașate: ${attachments.map(a => a.filename).join(', ')}
            </div>` : ''}
          </div>
          <div style="background:#f7f7f5;padding:16px 32px;font-size:.75rem;color:#404040;border-top:1px solid #eee;">
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
            <div style="font-family:sans-serif;font-weight:300;font-size:1.1rem;letter-spacing:.35em;text-transform:uppercase;color:#fff;">
              NEOFORT BIZ
            </div>
            <div style="font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:#404040;margin-top:4px;">
              ${T.tagline}
            </div>
          </div>

          <!-- Body -->
          <div style="padding:40px 32px;">
            <h2 style="font-family:sans-serif;font-weight:400;font-size:1.3rem;color:#1a1a1a;margin:0 0 8px;">
              ${T.thanks(nume)}
            </h2>
            <p style="font-size:.88rem;color:#404040;line-height:1.7;margin:0 0 32px;">
              ${T.intro(telefon)}
            </p>

            <!-- Rezumat -->
            <div style="background:#f7f7f5;padding:24px;margin-bottom:32px;">
              <div style="font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:#404040;margin-bottom:16px;">
                ${T.summary}
              </div>
              <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
                <tr style="border-bottom:1px solid #eee;">
                  <td style="padding:8px 0;font-size:.78rem;color:#404040;width:130px;">${T.rowType}</td>
                  <td style="padding:8px 0;font-size:.82rem;color:#1a1a1a;">${comanda}</td>
                </tr>
                <tr style="border-bottom:1px solid #eee;">
                  <td style="padding:8px 0;font-size:.78rem;color:#404040;">${T.rowAddr}</td>
                  <td style="padding:8px 0;font-size:.82rem;color:#1a1a1a;">${adresa}</td>
                </tr>
              </table>
              ${produse.length > 0 ? `
              <div style="font-size:.78rem;color:#404040;margin-bottom:8px;">${T.products}</div>
              <ul style="margin:0;padding-left:16px;">${produseHTML}</ul>
              ` : ''}
            </div>

            <!-- Butoane -->
            <div style="display:flex;gap:12px;margin-bottom:32px;">
              <a href="${BASE}" style="display:inline-block;background:#1a1a1a;color:#fff;font-family:sans-serif;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;padding:14px 28px;text-decoration:none;">
                ${T.btnSite}
              </a>
              <a href="tel:+40752443435" style="display:inline-block;background:transparent;color:#1a1a1a;font-family:sans-serif;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;padding:14px 28px;text-decoration:none;border:1px solid #1a1a1a;">
                +40 752 443 435
              </a>
            </div>

            <p style="font-size:.78rem;color:#595959;line-height:1.6;border-top:1px solid #eee;padding-top:24px;margin:0;">
              ${T.urgent}
            </p>
          </div>

          <!-- Footer -->
          <div style="background:#111;padding:20px 32px;font-size:.72rem;color:#404040;line-height:1.8;">
            <div style="color:#fff;letter-spacing:.2em;text-transform:uppercase;font-size:.65rem;margin-bottom:6px;">NEOFORT BIZ SRL</div>
            ${T.addr}<br/>
            ${T.hours}<br/>
            <a href="${BASE}" style="color:#404040;text-decoration:none;">www.neofort-biz.ro</a>
            <div style="margin-top:12px;font-size:.65rem;color:#555;">
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
