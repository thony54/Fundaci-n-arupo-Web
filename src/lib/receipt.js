// ============================================================
//  Generador de comprobante de donación (PDF) — Fundación Arupo
//  Se ejecuta 100% en el navegador con jsPDF (sin backend).
// ============================================================
import { jsPDF } from 'jspdf';
import { currencies } from '../data/donation';

// Datos de contacto de la Fundación (coinciden con la sección Contacto).
const FUNDACION = {
    name: 'Fundación Arupo',
    tagline: 'Inclusión · Derechos Humanos · Innovación Social',
    phone: '+593 99 676 8228',
    email: 'rrpparupocti@gmail.com',
    web: 'fundacionarupo.org',
};

// Paleta (coincide con el sitio).
const PRIMARY = [231, 117, 18]; // #e77512
const DARK = [15, 23, 42]; // dark-900
const MUTED = [100, 116, 139]; // dark-500

// Genera un código único de referencia para la donación.
export function generateDonationCode() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
    return `ARUPO-${y}${m}${d}-${rand}`;
}

// Carga una imagen del sitio y la devuelve como dataURL (para incrustarla).
async function loadImageDataURL(src) {
    try {
        const res = await fetch(src);
        const blob = await res.blob();
        return await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch {
        return null;
    }
}

function currencyLabel(code) {
    const c = currencies.find((x) => x.code === code);
    return c ? `${c.symbol} ${c.code}` : code;
}

// Construye el documento del comprobante y lo devuelve (jsPDF).
export async function buildReceiptDoc(donation) {
    const {
        code,
        amount,
        currency,
        frequency,
        method,
        donor = {},
        date = new Date(),
    } = donation;

    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 48;
    let y = 56;

    // ---- Encabezado con logo ----
    const logo = await loadImageDataURL('/logo-color.png');
    if (logo) {
        try {
            doc.addImage(logo, 'PNG', margin, y - 8, 52, 52);
        } catch {
            /* si el formato no es PNG válido, seguimos sin logo */
        }
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(...DARK);
    doc.text(FUNDACION.name, margin + (logo ? 66 : 0), y + 14);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...MUTED);
    doc.text(FUNDACION.tagline, margin + (logo ? 66 : 0), y + 30);

    // Título a la derecha
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...PRIMARY);
    doc.text('COMPROBANTE DE DONACIÓN', pageW - margin, y + 6, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...MUTED);
    doc.text(
        date.toLocaleDateString('es-EC', { day: '2-digit', month: 'long', year: 'numeric' }),
        pageW - margin,
        y + 22,
        { align: 'right' }
    );

    y += 60;
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, y, pageW - margin, y);
    y += 28;

    // ---- Código único (destacado) ----
    doc.setFillColor(255, 247, 237); // primary-50
    doc.roundedRect(margin, y, pageW - margin * 2, 54, 8, 8, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...MUTED);
    doc.text('CÓDIGO ÚNICO DE DONACIÓN', margin + 18, y + 20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(...PRIMARY);
    doc.text(code, margin + 18, y + 42);
    y += 84;

    // ---- Detalle de la donación ----
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...DARK);
    doc.text('Detalle de la donación', margin, y);
    y += 8;

    const methodLabels = { card: 'Tarjeta', paypal: 'PayPal', transfer: 'Transferencia / Depósito' };
    const detailRows = [
        ['Monto', `${currencyLabel(currency).split(' ')[0]}${amount}`],
        ['Moneda', currencyLabel(currency)],
        ['Frecuencia', frequency === 'monthly' ? 'Mensual' : 'Única'],
        ['Método de pago', methodLabels[method] || method],
    ];
    y = drawTable(doc, margin, y + 12, pageW - margin * 2, detailRows);

    // ---- Datos del donante ----
    y += 20;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...DARK);
    doc.text('Datos del donante', margin, y);

    const donorRows = [
        ['Nombre', `${donor.firstName || ''} ${donor.lastName || ''}`.trim() || '—'],
        ['Correo', donor.email || '—'],
        ['País', donor.country || '—'],
        ['Teléfono', donor.phone || '—'],
        ['Cédula / ID', donor.idNumber || '—'],
    ];
    y = drawTable(doc, margin, y + 12, pageW - margin * 2, donorRows);

    // ---- Pie ----
    const footerY = doc.internal.pageSize.getHeight() - 90;
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, footerY, pageW - margin, footerY);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...DARK);
    doc.text('¡Gracias por tu aporte!', margin, footerY + 22);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...MUTED);
    doc.text(
        'Tu donación sostiene el trabajo por un Ecuador inclusivo, accesible y libre de discriminación.',
        margin,
        footerY + 38
    );
    doc.text(
        `${FUNDACION.phone}   ·   ${FUNDACION.email}   ·   ${FUNDACION.web}`,
        margin,
        footerY + 56
    );

    return doc;
}

// Dibuja una tabla simple de dos columnas (etiqueta / valor).
function drawTable(doc, x, y, width, rows) {
    const rowH = 26;
    rows.forEach((row, i) => {
        if (i % 2 === 0) {
            doc.setFillColor(248, 250, 252); // dark-50
            doc.rect(x, y + i * rowH, width, rowH, 'F');
        }
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(...MUTED);
        doc.text(row[0], x + 12, y + i * rowH + 17);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...DARK);
        doc.text(String(row[1]), x + width - 12, y + i * rowH + 17, { align: 'right' });
    });
    return y + rows.length * rowH;
}

// Genera y descarga el comprobante en PDF.
export async function downloadReceipt(donation) {
    const doc = await buildReceiptDoc(donation);
    doc.save(`Comprobante-${donation.code}.pdf`);
}

// Devuelve el comprobante en base64 (para enviarlo por correo desde el backend).
export async function receiptToBase64(donation) {
    const doc = await buildReceiptDoc(donation);
    // dataURL: "data:application/pdf;base64,XXXX" -> devolvemos solo XXXX
    return doc.output('datauristring').split(',')[1];
}
