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
export const paymentMethods = [
    {
        id: 'card',
        label: 'Tarjeta',
        description: 'Débito o crédito — Visa, Mastercard, Amex.',
    },
    {
        id: 'paypal',
        label: 'PayPal',
        description: 'Paga con tu cuenta o saldo de PayPal.',
    },
    {
        id: 'transfer',
        label: 'Transferencia / Depósito',
        description: 'Recibe los datos bancarios de la Fundación.',
    },
];

// Formatea un monto con el símbolo de la moneda seleccionada.
export function formatAmount(amount, currencyCode) {
    const currency = currencies.find((c) => c.code === currencyCode) || currencies[0];
    return `${currency.symbol}${amount}`;
}
