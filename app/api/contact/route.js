import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
      subject: `Solicitarea dvs. a fost înregistrată — Neofort BIZ`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;">

          <!-- Header -->
          <div style="background:#111;padding:28px 32px;">
            <div style="font-family:sans-serif;font-weight:300;font-size:1.1rem;letter-spacing:.35em;text-transform:uppercase;color:#fff;">
              NEOFORT BIZ
            </div>
            <div style="font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:#404040;margin-top:4px;">
              Tâmplărie PVC Salamander · Aluminiu Alumil
            </div>
          </div>

          <!-- Body -->
          <div style="padding:40px 32px;">
            <h2 style="font-family:sans-serif;font-weight:400;font-size:1.3rem;color:#1a1a1a;margin:0 0 8px;">
              Vă mulțumim, ${nume}!
            </h2>
            <p style="font-size:.88rem;color:#404040;line-height:1.7;margin:0 0 32px;">
              Solicitarea dvs. de ofertă a fost înregistrată cu succes și va fi procesată în maxim <strong style="color:#1a1a1a;">2 zile lucrătoare</strong>. Un specialist Neofort BIZ vă va contacta la numărul <strong style="color:#1a1a1a;">${telefon}</strong>.
            </p>

            <!-- Rezumat -->
            <div style="background:#f7f7f5;padding:24px;margin-bottom:32px;">
              <div style="font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:#404040;margin-bottom:16px;">
                Rezumatul solicitării
              </div>
              <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
                <tr style="border-bottom:1px solid #eee;">
                  <td style="padding:8px 0;font-size:.78rem;color:#404040;width:130px;">Tip comandă</td>
                  <td style="padding:8px 0;font-size:.82rem;color:#1a1a1a;">${comanda}</td>
                </tr>
                <tr style="border-bottom:1px solid #eee;">
                  <td style="padding:8px 0;font-size:.78rem;color:#404040;">Adresă livrare</td>
                  <td style="padding:8px 0;font-size:.82rem;color:#1a1a1a;">${adresa}</td>
                </tr>
              </table>
              ${produse.length > 0 ? `
              <div style="font-size:.78rem;color:#404040;margin-bottom:8px;">Produse și servicii solicitate:</div>
              <ul style="margin:0;padding-left:16px;">${produseHTML}</ul>
              ` : ''}
            </div>

            <!-- Butoane -->
            <div style="display:flex;gap:12px;margin-bottom:32px;">
              <a href="https://www.neofort-biz.ro" style="display:inline-block;background:#1a1a1a;color:#fff;font-family:sans-serif;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;padding:14px 28px;text-decoration:none;">
                Vizitați site-ul
              </a>
              <a href="tel:+40752443435" style="display:inline-block;background:transparent;color:#1a1a1a;font-family:sans-serif;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;padding:14px 28px;text-decoration:none;border:1px solid #1a1a1a;">
                +40 752 443 435
              </a>
            </div>

            <p style="font-size:.78rem;color:#595959;line-height:1.6;border-top:1px solid #eee;padding-top:24px;margin:0;">
              Dacă aveți întrebări urgente, ne puteți contacta direct la <a href="mailto:oferte@neofort-biz.ro" style="color:#1a1a1a;">oferte@neofort-biz.ro</a> sau telefonic la <a href="tel:+40752443435" style="color:#1a1a1a;">+40 752 443 435</a>.
            </p>
          </div>

          <!-- Footer -->
          <div style="background:#111;padding:20px 32px;font-size:.72rem;color:#404040;line-height:1.8;">
            <div style="color:#fff;letter-spacing:.2em;text-transform:uppercase;font-size:.65rem;margin-bottom:6px;">NEOFORT BIZ SRL</div>
            Str. Theodor Aman 11, Sector 1, București 010776<br/>
            Luni — Vineri: 10:00 — 18:00<br/>
            <a href="https://www.neofort-biz.ro" style="color:#404040;text-decoration:none;">www.neofort-biz.ro</a>
            <div style="margin-top:12px;font-size:.65rem;color:#555;">
              Marcă înregistrată O.S.I.M. nr. M 2014 05130 · Acest email a fost generat automat ca urmare a solicitării dvs.
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
