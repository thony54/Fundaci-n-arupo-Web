// ============================================================
//  Endpoint serverless (Vercel) — envía la factura de la donación
//  por correo DESDE la Fundación, con el PDF adjunto.
//
//  Para activarlo en producción, define estas variables de entorno
//  en Vercel (Project → Settings → Environment Variables):
//    RESEND_API_KEY   → API key de https://resend.com
//    RECEIPT_FROM     → remitente verificado, p. ej.
//                       "Fundación Arupo <donaciones@fundacionarupo.org>"
//    RECEIPT_BCC      → (opcional) copia interna, p. ej. el correo
//                       administrativo de la Fundación.
//
//  Sin RESEND_API_KEY el endpoint responde 200 { sent:false } para
//  no romper el flujo (el donante igual recibe código + PDF descargado).
// ============================================================

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RECEIPT_FROM || 'Fundación Arupo <onboarding@resend.dev>';
    const bcc = process.env.RECEIPT_BCC;

    try {
        const { donation, pdfBase64 } = req.body || {};
        const donor = donation?.donor || {};
        if (!donor.email) {
            return res.status(400).json({ error: 'Falta el correo del donante' });
        }

        // Si aún no hay clave configurada, no fallamos: el flujo del
        // cliente ya entregó código + PDF descargado.
        if (!apiKey) {
            return res.status(200).json({ sent: false, reason: 'email-no-configurado' });
        }

        const symbol = { USD: '$', EUR: '€', GBP: '£', CAD: 'C$', COP: '$' }[donation.currency] || '';
        const freq = donation.frequency === 'monthly' ? 'mensual' : 'única';
        const html = `
            <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:auto;color:#0f172a">
              <h2 style="color:#e77512;margin-bottom:4px">¡Gracias por tu donación, ${escapeHtml(donor.firstName || '')}!</h2>
              <p style="color:#64748b">Fundación Arupo · Inclusión, Derechos Humanos e Innovación Social</p>
              <div style="background:#fff7ed;border-radius:12px;padding:16px 20px;margin:18px 0">
                <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase">Código único de tu donación</p>
                <p style="margin:4px 0 0;font-size:20px;font-weight:bold;color:#e77512">${escapeHtml(donation.code)}</p>
              </div>
              <p>Registramos tu aporte <strong>${freq}</strong> de <strong>${symbol}${donation.amount}</strong>.
                 Adjuntamos tu comprobante en PDF.</p>
              <p>Tu apoyo sostiene el trabajo por un Ecuador inclusivo, accesible y libre de discriminación.</p>
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0">
              <p style="font-size:12px;color:#94a3b8">
                Fundación Arupo · +593 99 676 8228 · rrpparupocti@gmail.com
              </p>
            </div>`;

        const attachments = pdfBase64
            ? [{ filename: `Comprobante-${donation.code}.pdf`, content: pdfBase64 }]
            : [];

        const resp = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from,
                to: [donor.email],
                ...(bcc ? { bcc: [bcc] } : {}),
                subject: `Comprobante de tu donación · ${donation.code}`,
                html,
                attachments,
            }),
        });

        if (!resp.ok) {
            const detail = await resp.text();
            return res.status(502).json({ sent: false, error: detail });
        }

        return res.status(200).json({ sent: true });
    } catch (err) {
        return res.status(500).json({ sent: false, error: String(err) });
    }
}

function escapeHtml(str = '') {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
