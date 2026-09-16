// ============================================================
//  Configuración de Donaciones — Fundación Arupo
//  Este archivo centraliza montos, impactos y monedas para que
//  sea fácil editarlos más adelante (cuando llegue el contexto
//  real de "qué financia cada donación").
//  Los textos de impacto de abajo son PLACEHOLDERS editables.
// ============================================================

// Frecuencia de la donación
export const frequencies = [
    {
        id: 'monthly',
        label: 'Mensual',
        badge: 'Mayor impacto',
        description: 'Un apoyo constante que sostiene los programas todo el año.',
    },
    {
        id: 'once',
        label: 'Única',
        description: 'Un aporte puntual, cuando tú quieras.',
    },
];

// Monedas soportadas (Ecuador usa USD, por eso es la predeterminada).
// La conversión real de divisas la realiza la pasarela de pago.
export const currencies = [
    { code: 'USD', symbol: '$', label: 'Dólar estadounidense' },
    { code: 'EUR', symbol: '€', label: 'Euro' },
    { code: 'GBP', symbol: '£', label: 'Libra esterlina' },
    { code: 'CAD', symbol: 'C$', label: 'Dólar canadiense' },
    { code: 'COP', symbol: '$', label: 'Peso colombiano' },
];

export const defaultCurrency = 'USD';

// Montos sugeridos con su impacto. `amount` es el número base.
// TODO(contexto): reemplazar estos textos con el impacto real que
// nos comparta la Fundación.
export const tiers = [
    {
        amount: 15,
        impact: 'Facilitas una sesión de terapia para una persona con discapacidad.',
    },
    {
        amount: 30,
        impact: 'Entregas material de apoyo y accesibilidad a una familia.',
        highlighted: true,
    },
    {
        amount: 60,
        impact: 'Sostienes el acompañamiento psicosocial de una persona durante un mes.',
    },
    {
        amount: 120,
        impact: 'Impulsas un taller inclusivo completo para todo un grupo.',
    },
];

// Métodos de pago que se ofrecerán en el último paso.
// (PayPal se reemplazó por Global66 según el plan de cobro; se puede
//  volver a añadir en cualquier momento.)
export const paymentMethods = [
    {
        id: 'card',
        label: 'Tarjeta',
        description: 'Débito o crédito — Visa, Mastercard, Amex.',
    },
    {
        id: 'global66',
        label: 'Global66',
        description: 'Paga con tu enlace o cuenta Global66.',
    },
    {
        id: 'transfer',
        label: 'Transferencia / Depósito',
        description: 'Banco Internacional u otras cuentas.',
    },
];

// ────────────────────────────────────────────────────────────
//  DATOS DE COBRO — PLACEHOLDERS
//  Reemplaza estos valores con los datos reales de la Fundación.
// ────────────────────────────────────────────────────────────

// Cuentas bancarias para transferencia / depósito.
export const bankAccounts = [
    {
        bank: 'Banco Internacional',
        type: 'Cuenta Corriente', // TODO: confirmar
        number: '0000000000', // TODO: número de cuenta real
        holder: 'Fundación Arupo', // TODO: titular exacto
        id: 'RUC 0000000000000', // TODO: RUC / cédula del titular
    },
];

// Global66: enlace de cobro y/o datos de la Cuenta Global.
export const global66 = {
    // Pega aquí el "link de pago / recaudo" generado desde la app de
    // Global66. Si queda vacío, se muestra un aviso de "próximamente".
    paymentLink: '', // TODO: https://... (link de cobro Global66)
    account: {
        holder: 'Fundación Arupo', // TODO
        detail: 'Cuenta Global / correo asociado', // TODO
    },
};

// A dónde envía el donante su comprobante de pago.
export const proofContact = {
    whatsapp: '593996768228', // sin '+' ni espacios (formato wa.me)
    email: 'rrpparupocti@gmail.com',
};

// Formatea un monto con el símbolo de la moneda seleccionada.
export function formatAmount(amount, currencyCode) {
    const currency = currencies.find((c) => c.code === currencyCode) || currencies[0];
    return `${currency.symbol}${amount}`;
}
