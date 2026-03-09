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

    // Construiește lista de produse selectate
    const produseHTML = produse.length > 0
      ? `<ul style="margin:8px 0;padding-left:20px;">${produse.map(p => `<li>${p}</li>`).join('')}</ul>`
      : '<p style="color:#999;">Niciun produs selectat</p>';

    // Procesează atașamentele
    const attachments = [];
    for (const file of files) {
      if (file && file.size > 0) {
        const buffer = await file.arrayBuffer();
        const base64 = Buffer.from(buffer).toString('base64');
        attachments.push({
          filename: file.name,
          content: base64,
        });
      }
    }

    const { data, error } = await resend.emails.send({
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
                <td style="padding:10px 0;font-size:.8rem;color:#999;width:140px;text-transform:uppercase;letter-spacing:.1em;">Nume</td>
                <td style="padding:10px 0;font-size:.9rem;color:#1a1a1a;font-weight:500;">${nume}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#999;text-transform:uppercase;letter-spacing:.1em;">Telefon</td>
                <td style="padding:10px 0;font-size:.9rem;color:#1a1a1a;">${telefon}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#999;text-transform:uppercase;letter-spacing:.1em;">E-mail</td>
                <td style="padding:10px 0;font-size:.9rem;color:#1a1a1a;">${email}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#999;text-transform:uppercase;letter-spacing:.1em;">Comandă cu</td>
                <td style="padding:10px 0;font-size:.9rem;color:#1a1a1a;">${comanda}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 0;font-size:.8rem;color:#999;text-transform:uppercase;letter-spacing:.1em;">Adresă livrare</td>
                <td style="padding:10px 0;font-size:.9rem;color:#1a1a1a;">${adresa}</td>
              </tr>
            </table>
            <div style="margin-bottom:24px;">
              <div style="font-size:.8rem;color:#999;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">Produse solicitate:</div>
              <div style="font-size:.9rem;color:#1a1a1a;">${produseHTML}</div>
            </div>
            ${attachments.length > 0 ? `
            <div style="background:#f7f7f5;padding:12px 16px;border-radius:4px;font-size:.8rem;color:#666;">
              📎 ${attachments.length} fișier(e) atașate: ${attachments.map(a => a.filename).join(', ')}
            </div>` : ''}
          </div>
          <div style="background:#f7f7f5;padding:16px 32px;font-size:.75rem;color:#999;border-top:1px solid #eee;">
            Neofort BIZ · Str. Theodor Aman 11, Sector 1, București 010776 · oferte@neofort-biz.ro
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ success: false, error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });

  } catch (err) {
    console.error('API contact error:', err);
    return Response.json({ success: false, error: 'Eroare server' }, { status: 500 });
  }
}
