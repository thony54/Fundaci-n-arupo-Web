import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/motion/PageTransition';
import { BorderBeam } from '../components/magicui/BorderBeam';
import {
    frequencies,
    currencies,
    defaultCurrency,
    tiers,
    paymentMethods,
    formatAmount,
    bankAccounts,
    global66,
    proofContact,
} from '../data/donation';
import {
    generateDonationCode,
    downloadReceipt,
    receiptToBase64,
} from '../lib/receipt';

// Intenta enviar el comprobante por correo desde la Fundación.
// Requiere el endpoint /api/send-receipt configurado (ver README).
// Si no está disponible (local sin backend / sin clave), falla en
// silencio y el flujo continúa con código + PDF.
async function sendReceiptEmail(donation) {
    try {
        const pdfBase64 = await receiptToBase64(donation);
        const res = await fetch('/api/send-receipt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ donation, pdfBase64 }),
        });
        return res.ok;
    } catch {
        return false;
    }
}

// Pasos del asistente de donación.
const STEPS = [
    { id: 'amount', label: 'Aporte' },
    { id: 'details', label: 'Tus datos' },
    { id: 'payment', label: 'Pago' },
];

const stepVariants = {
    enter: { opacity: 0, x: 24 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
};

export default function Donate() {
    const [searchParams] = useSearchParams();
    const territory = searchParams.get('territorio');

    const [step, setStep] = useState(0);
    const [done, setDone] = useState(false);
    const [receipt, setReceipt] = useState(null); // donación finalizada (con código)
    const [emailSent, setEmailSent] = useState(false);
    // Código de referencia estable para toda la sesión de donación
    // (para transferencia / Global66 el donante lo usa como concepto).
    const [refCode] = useState(() => generateDonationCode());

    // Paso 1 — Aporte
    const [frequency, setFrequency] = useState('monthly');
    const [currency, setCurrency] = useState(defaultCurrency);
    const [selectedTier, setSelectedTier] = useState(tiers[1].amount);
    const [customAmount, setCustomAmount] = useState('');
    const [isCustom, setIsCustom] = useState(false);

    // Paso 2 — Datos personales
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: 'Ecuador',
        phone: '',
        idNumber: '',
        subscribe: true,
    });

    // Paso 3 — Pago
    const [method, setMethod] = useState('card');

    const amount = isCustom ? Number(customAmount) || 0 : selectedTier;
    const activeCurrency = currencies.find((c) => c.code === currency) || currencies[0];

    const selectedImpact = useMemo(() => {
        const tier = tiers.find((t) => t.amount === amount);
        return tier?.impact;
    }, [amount]);

    const canContinueAmount = amount > 0;
    const canContinueDetails =
        details.firstName.trim() &&
        details.lastName.trim() &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email);

    function updateDetail(key, value) {
        setDetails((d) => ({ ...d, [key]: value }));
    }

    function goNext() {
        setStep((s) => Math.min(s + 1, STEPS.length - 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function goBack() {
        setStep((s) => Math.max(s - 1, 0));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function handleSubmit() {
        // ────────────────────────────────────────────────────────
        // PUNTO DE INTEGRACIÓN DE PASARELA DE PAGO
        // Aquí se conecta Stripe / PayPal con las credenciales de la
        // Fundación. Por ahora registramos la intención, generamos el
        // código único, descargamos el comprobante y (si el backend
        // está configurado) enviamos el correo con la factura.
        // ────────────────────────────────────────────────────────
        const donation = {
            code: refCode,
            date: new Date(),
            frequency,
            currency,
            amount,
            method,
            territory,
            donor: details,
        };

        setReceipt(donation);
        setDone(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Descarga automática del comprobante en PDF.
        downloadReceipt(donation).catch(() => {});

        // Envío del correo con la factura (no bloquea la confirmación).
        sendReceiptEmail(donation).then((ok) => setEmailSent(ok));
    }

    if (done && receipt) {
        return (
            <ThankYou
                donation={receipt}
                emailSent={emailSent}
                onDownload={() => downloadReceipt(receipt).catch(() => {})}
            />
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-dark-50 dark:bg-dark-950 pt-24 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
                <div className="mx-auto max-w-3xl">
                    {/* Encabezado */}
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-1.5 text-sm font-semibold text-primary-600 dark:text-primary-300 mb-4">
                            <HeartIcon className="w-4 h-4" /> Tu apoyo transforma vidas
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark-900 dark:text-white tracking-tight">
                            Haz tu donación
                        </h1>
                        <p className="mt-3 text-dark-500 dark:text-dark-400 max-w-xl mx-auto">
                            Cada aporte sostiene el trabajo de la Fundación Arupo por un Ecuador
                            inclusivo, accesible y libre de discriminación.
                            {territory && (
                                <>
                                    {' '}
                                    <span className="font-semibold text-primary-600 dark:text-primary-300 capitalize">
                                        Territorio: {territory}.
                                    </span>
                                </>
                            )}
                        </p>
                    </div>

                    {/* Progreso */}
                    <Stepper step={step} />

                    {/* Contenido de pasos */}
                    <div className="relative mt-8 rounded-[2rem] bg-white dark:bg-dark-900 border border-dark-100 dark:border-dark-800 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-none p-6 sm:p-9 overflow-hidden">
                        <BorderBeam duration={8} />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                variants={stepVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                                {step === 0 && (
                                    <StepAmount
                                        frequency={frequency}
                                        setFrequency={setFrequency}
                                        currency={currency}
                                        setCurrency={setCurrency}
                                        selectedTier={selectedTier}
                                        setSelectedTier={setSelectedTier}
                                        isCustom={isCustom}
                                        setIsCustom={setIsCustom}
                                        customAmount={customAmount}
                                        setCustomAmount={setCustomAmount}
                                        activeCurrency={activeCurrency}
                                    />
                                )}
                                {step === 1 && (
                                    <StepDetails details={details} updateDetail={updateDetail} />
                                )}
                                {step === 2 && (
                                    <StepPayment
                                        method={method}
                                        setMethod={setMethod}
                                        amount={amount}
                                        currency={currency}
                                        frequency={frequency}
                                        refCode={refCode}
                                        donor={details}
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Resumen + navegación */}
                    <div className="mt-6 flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-4 justify-between">
                        {step > 0 ? (
                            <button
                                onClick={goBack}
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                            >
                                <ArrowIcon className="w-4 h-4 rotate-180" /> Atrás
                            </button>
                        ) : (
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-dark-500 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                            >
                                <ArrowIcon className="w-4 h-4 rotate-180" /> Volver al inicio
                            </Link>
                        )}

                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-xs text-dark-400 uppercase tracking-wide">Tu aporte</p>
                                <p className="text-xl font-extrabold text-dark-900 dark:text-white">
                                    {formatAmount(amount || 0, currency)}{' '}
                                    <span className="text-sm font-medium text-dark-400">
                                        {frequency === 'monthly' ? '/ mes' : 'única vez'}
                                    </span>
                                </p>
                            </div>

                            {step < STEPS.length - 1 ? (
                                <button
                                    onClick={goNext}
                                    disabled={step === 0 ? !canContinueAmount : !canContinueDetails}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25 hover:from-primary-400 hover:to-primary-500 hover:scale-105 transition-all disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
                                >
                                    Continuar <ArrowIcon className="w-4 h-4" />
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25 hover:from-primary-400 hover:to-primary-500 hover:scale-105 transition-all"
                                >
                                    <HeartIcon className="w-4 h-4" />
                                    {method === 'card' ? 'Donar de forma segura' : 'Ya realicé mi donación'}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Impacto seleccionado */}
                    {step === 0 && selectedImpact && !isCustom && (
                        <p className="mt-5 text-center text-sm text-dark-500 dark:text-dark-400">
                            <span className="font-semibold text-primary-600 dark:text-primary-300">
                                {formatAmount(amount, currency)}:
                            </span>{' '}
                            {selectedImpact}
                        </p>
                    )}

                    {/* Nota de seguridad */}
                    <p className="mt-8 flex items-center justify-center gap-2 text-xs text-dark-400">
                        <LockIcon className="w-3.5 h-3.5" />
                        Donación segura. Tus datos se tratan con confidencialidad.
                    </p>
                </div>
            </div>
        </PageTransition>
    );
}

/* ============================ Stepper ============================ */
function Stepper({ step }) {
    return (
        <div className="flex items-center justify-center gap-2 sm:gap-4">
            {STEPS.map((s, i) => {
                const active = i === step;
                const complete = i < step;
                return (
                    <div key={s.id} className="flex items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2">
                            <div
                                className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-all ${
                                    complete
                                        ? 'bg-primary-500 text-white'
                                        : active
                                        ? 'bg-primary-500 text-white ring-4 ring-primary-500/20'
                                        : 'bg-dark-100 dark:bg-dark-800 text-dark-400'
                                }`}
                            >
                                {complete ? <CheckIcon className="w-4 h-4" /> : i + 1}
                            </div>
                            <span
                                className={`hidden sm:inline text-sm font-medium ${
                                    active
                                        ? 'text-dark-900 dark:text-white'
                                        : 'text-dark-400'
                                }`}
                            >
                                {s.label}
                            </span>
                        </div>
                        {i < STEPS.length - 1 && (
                            <div
                                className={`h-0.5 w-6 sm:w-12 rounded-full ${
                                    complete ? 'bg-primary-500' : 'bg-dark-200 dark:bg-dark-700'
                                }`}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

/* ========================= Paso 1: Aporte ========================= */
function StepAmount({
    frequency,
    setFrequency,
    currency,
    setCurrency,
    selectedTier,
    setSelectedTier,
    isCustom,
    setIsCustom,
    customAmount,
    setCustomAmount,
    activeCurrency,
}) {
    return (
        <div className="space-y-8">
            {/* Frecuencia */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="inline-flex p-1 rounded-full bg-dark-100 dark:bg-dark-800">
                    {frequencies.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => setFrequency(f.id)}
                            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                                frequency === f.id
                                    ? 'bg-white dark:bg-dark-950 text-dark-900 dark:text-white shadow'
                                    : 'text-dark-500 dark:text-dark-400'
                            }`}
                        >
                            {f.label}
                            {f.badge && frequency === f.id && (
                                <span className="ml-2 hidden sm:inline text-[10px] font-bold uppercase text-primary-600 dark:text-primary-300">
                                    {f.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Moneda */}
                <label className="flex items-center gap-2 text-sm">
                    <span className="text-dark-500 dark:text-dark-400 font-medium">Moneda</span>
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-950 px-3 py-2 text-sm font-semibold text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                        {currencies.map((c) => (
                            <option key={c.code} value={c.code}>
                                {c.code} ({c.symbol})
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            {/* Montos con impacto */}
            <div className="grid sm:grid-cols-2 gap-3">
                {tiers.map((tier) => {
                    const active = !isCustom && selectedTier === tier.amount;
                    return (
                        <button
                            key={tier.amount}
                            onClick={() => {
                                setIsCustom(false);
                                setSelectedTier(tier.amount);
                            }}
                            className={`text-left p-4 rounded-2xl border-2 transition-all ${
                                active
                                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                    : 'border-dark-100 dark:border-dark-800 hover:border-primary-300 dark:hover:border-primary-700'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-extrabold text-dark-900 dark:text-white">
                                    {activeCurrency.symbol}
                                    {tier.amount}
                                </span>
                                {tier.highlighted && (
                                    <span className="text-[10px] font-bold uppercase text-primary-600 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/40 px-2 py-0.5 rounded-full">
                                        Popular
                                    </span>
                                )}
                                {active && !tier.highlighted && (
                                    <CheckIcon className="w-5 h-5 text-primary-500" />
                                )}
                            </div>
                            <p className="mt-1.5 text-sm text-dark-500 dark:text-dark-400 leading-snug">
                                {tier.impact}
                            </p>
                        </button>
                    );
                })}
            </div>

            {/* Monto personalizado */}
            <div>
                <button
                    onClick={() => setIsCustom(true)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                        isCustom
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                            : 'border-dashed border-dark-200 dark:border-dark-700 hover:border-primary-300'
                    }`}
                >
                    <span className="text-sm font-semibold text-dark-700 dark:text-dark-200">
                        Prefiero elegir mi propio monto
                    </span>
                    {isCustom && (
                        <div className="mt-3 flex items-center gap-2">
                            <span className="text-2xl font-extrabold text-dark-400">
                                {activeCurrency.symbol}
                            </span>
                            <input
                                type="number"
                                min="1"
                                autoFocus
                                value={customAmount}
                                onChange={(e) => setCustomAmount(e.target.value)}
                                placeholder="Ej. 50"
                                className="w-40 bg-transparent text-2xl font-extrabold text-dark-900 dark:text-white border-b-2 border-primary-500 focus:outline-none"
                            />
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}

/* ========================= Paso 2: Datos ========================= */
function StepDetails({ details, updateDetail }) {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold text-dark-900 dark:text-white">Tus datos</h2>
                <p className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                    Necesarios para emitir tu comprobante de donación y contactarte.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <Field
                    label="Nombre"
                    required
                    value={details.firstName}
                    onChange={(v) => updateDetail('firstName', v)}
                    placeholder="María"
                />
                <Field
                    label="Apellido"
                    required
                    value={details.lastName}
                    onChange={(v) => updateDetail('lastName', v)}
                    placeholder="Pérez"
                />
                <Field
                    label="Correo electrónico"
                    required
                    type="email"
                    value={details.email}
                    onChange={(v) => updateDetail('email', v)}
                    placeholder="maria@correo.com"
                    className="sm:col-span-2"
                />
                <Field
                    label="País"
                    value={details.country}
                    onChange={(v) => updateDetail('country', v)}
                    placeholder="Ecuador"
                />
                <Field
                    label="Teléfono (opcional)"
                    type="tel"
                    value={details.phone}
                    onChange={(v) => updateDetail('phone', v)}
                    placeholder="+593 ..."
                />
                <Field
                    label="Cédula / ID (opcional, para comprobante)"
                    value={details.idNumber}
                    onChange={(v) => updateDetail('idNumber', v)}
                    placeholder="Para recibo deducible"
                    className="sm:col-span-2"
                />
            </div>

            {/* Suscripción */}
            <label className="flex items-start gap-3 p-4 rounded-2xl bg-dark-50 dark:bg-dark-800/50 cursor-pointer border border-dark-100 dark:border-dark-800">
                <input
                    type="checkbox"
                    checked={details.subscribe}
                    onChange={(e) => updateDetail('subscribe', e.target.checked)}
                    className="mt-0.5 h-5 w-5 rounded accent-primary-500 shrink-0"
                />
                <span className="text-sm text-dark-600 dark:text-dark-300">
                    <span className="font-semibold text-dark-900 dark:text-white">
                        Quiero recibir las publicaciones mensuales
                    </span>{' '}
                    de la Fundación Arupo para conocer el impacto de mi aporte. Puedo darme de baja
                    cuando quiera.
                </span>
            </label>
        </div>
    );
}

/* ========================= Paso 3: Pago ========================= */
function StepPayment({ method, setMethod, amount, currency, frequency, refCode, donor }) {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold text-dark-900 dark:text-white">Método de pago</h2>
                <p className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                    Elige cómo quieres completar tu donación de{' '}
                    <span className="font-semibold text-primary-600 dark:text-primary-300">
                        {formatAmount(amount, currency)} {frequency === 'monthly' ? '/ mes' : ''}
                    </span>
                    .
                </p>
            </div>

            {/* Selección de método */}
            <div className="grid gap-3">
                {paymentMethods.map((m) => (
                    <button
                        key={m.id}
                        onClick={() => setMethod(m.id)}
                        className={`flex items-center gap-4 text-left p-4 rounded-2xl border-2 transition-all ${
                            method === m.id
                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                : 'border-dark-100 dark:border-dark-800 hover:border-primary-300'
                        }`}
                    >
                        <div className="w-11 h-11 rounded-xl bg-white dark:bg-dark-950 border border-dark-100 dark:border-dark-800 flex items-center justify-center text-primary-600 shrink-0">
                            <MethodIcon id={m.id} />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-dark-900 dark:text-white">{m.label}</p>
                            <p className="text-sm text-dark-500 dark:text-dark-400">{m.description}</p>
                        </div>
                        <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                method === m.id
                                    ? 'border-primary-500 bg-primary-500'
                                    : 'border-dark-300 dark:border-dark-600'
                            }`}
                        >
                            {method === m.id && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                    </button>
                ))}
            </div>

            {/* Panel del método seleccionado */}
            <div className="rounded-2xl bg-dark-50 dark:bg-dark-800/40 border border-dark-100 dark:border-dark-800 p-5">
                {method === 'card' && <CardForm />}
                {method === 'global66' && (
                    <Global66Panel
                        refCode={refCode}
                        amount={amount}
                        currency={currency}
                        frequency={frequency}
                        donor={donor}
                    />
                )}
                {method === 'transfer' && (
                    <TransferPanel
                        refCode={refCode}
                        amount={amount}
                        currency={currency}
                        frequency={frequency}
                        donor={donor}
                    />
                )}
            </div>

            {/* Aviso según el método */}
            {method === 'card' ? (
                <div className="flex items-start gap-2 text-xs text-dark-400 bg-amber-50 dark:bg-amber-900/10 border border-amber-200/60 dark:border-amber-800/40 rounded-xl p-3">
                    <InfoIcon className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                    <span>
                        El cobro real de tarjeta (pago único y débito mensual) se activa al conectar
                        la pasarela Datafast con las credenciales de la Fundación.
                    </span>
                </div>
            ) : (
                <div className="flex items-start gap-2 text-xs text-dark-500 dark:text-dark-400 bg-primary-50 dark:bg-primary-900/10 border border-primary-200/60 dark:border-primary-800/40 rounded-xl p-3">
                    <InfoIcon className="w-4 h-4 shrink-0 mt-0.5 text-primary-500" />
                    <span>
                        Realiza tu pago usando el código de referencia y envíanos el comprobante.
                        La Fundación confirmará tu donación al recibirlo.
                    </span>
                </div>
            )}
        </div>
    );
}

/* ---- Panel: Global66 ---- */
function Global66Panel({ refCode, amount, currency, frequency, donor }) {
    return (
        <div className="space-y-4">
            <p className="text-sm font-semibold text-dark-900 dark:text-white">Pagar con Global66</p>
            {global66.paymentLink ? (
                <a
                    href={global66.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white bg-dark-900 dark:bg-white dark:text-dark-900 hover:scale-105 transition-all"
                >
                    Abrir enlace de pago <ArrowIcon className="w-4 h-4" />
                </a>
            ) : (
                <p className="text-sm text-dark-500 dark:text-dark-400">
                    El enlace de pago de Global66 estará disponible muy pronto. Mientras tanto,
                    puedes transferir a nuestra Cuenta Global:
                </p>
            )}
            <DataTable
                rows={[
                    ['Titular', global66.account.holder],
                    ['Cuenta Global', global66.account.detail],
                ]}
            />
            <ReferenceBox refCode={refCode} />
            <ProofActions refCode={refCode} amount={amount} currency={currency} frequency={frequency} donor={donor} method="Global66" />
        </div>
    );
}

/* ---- Panel: Transferencia / Depósito ---- */
function TransferPanel({ refCode, amount, currency, frequency, donor }) {
    return (
        <div className="space-y-4">
            <p className="text-sm font-semibold text-dark-900 dark:text-white">
                Datos para transferencia o depósito
            </p>
            {bankAccounts.map((acc, i) => (
                <DataTable
                    key={i}
                    rows={[
                        ['Banco', acc.bank],
                        ['Tipo', acc.type],
                        ['Cuenta', acc.number],
                        ['Titular', acc.holder],
                        ['Identificación', acc.id],
                    ]}
                />
            ))}
            <ReferenceBox refCode={refCode} />
            <ProofActions refCode={refCode} amount={amount} currency={currency} frequency={frequency} donor={donor} method="Transferencia" />
        </div>
    );
}

/* ---- Caja del código de referencia (con copiar) ---- */
function ReferenceBox({ refCode }) {
    return (
        <div className="flex items-center justify-between gap-3 rounded-xl bg-white dark:bg-dark-950 border border-primary-200 dark:border-primary-800/50 px-4 py-3">
            <div>
                <p className="text-[11px] uppercase tracking-wide text-dark-400">
                    Usa este código como concepto / referencia
                </p>
                <p className="text-lg font-extrabold text-primary-600 dark:text-primary-300 tracking-wide">
                    {refCode}
                </p>
            </div>
            <CopyButton value={refCode} />
        </div>
    );
}

/* ---- Botones para enviar el comprobante ---- */
function ProofActions({ refCode, amount, currency, frequency, donor, method }) {
    const summary =
        `Hola, realicé una donación a Fundación Arupo.\n` +
        `Código: ${refCode}\n` +
        `Monto: ${formatAmount(amount, currency)} (${frequency === 'monthly' ? 'mensual' : 'única'})\n` +
        `Método: ${method}\n` +
        `Nombre: ${(donor?.firstName || '') + ' ' + (donor?.lastName || '')}`.trim() +
        `\nAdjunto el comprobante.`;
    const wa = `https://wa.me/${proofContact.whatsapp}?text=${encodeURIComponent(summary)}`;
    const mail =
        `mailto:${proofContact.email}` +
        `?subject=${encodeURIComponent('Comprobante de donación ' + refCode)}` +
        `&body=${encodeURIComponent(summary)}`;
    return (
        <div>
            <p className="text-xs text-dark-400 mb-2">
                Cuando completes el pago, envíanos tu comprobante:
            </p>
            <div className="flex flex-wrap gap-2">
                <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-green-600 hover:bg-green-500 transition-colors"
                >
                    <WhatsAppIcon className="w-4 h-4" /> Enviar por WhatsApp
                </a>
                <a
                    href={mail}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-dark-700 dark:text-dark-200 border border-dark-200 dark:border-dark-700 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                >
                    <MailIcon className="w-4 h-4" /> Enviar por correo
                </a>
            </div>
        </div>
    );
}

/* ---- Tabla simple de datos ---- */
function DataTable({ rows }) {
    return (
        <div className="rounded-xl overflow-hidden border border-dark-100 dark:border-dark-800">
            {rows.map(([label, value], i) => (
                <div
                    key={label}
                    className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm ${
                        i % 2 === 0 ? 'bg-white dark:bg-dark-950' : 'bg-dark-50 dark:bg-dark-900'
                    }`}
                >
                    <span className="text-dark-400">{label}</span>
                    <span className="font-semibold text-dark-900 dark:text-white text-right break-all">
                        {value}
                    </span>
                </div>
            ))}
        </div>
    );
}

/* ---- Botón copiar al portapapeles ---- */
function CopyButton({ value }) {
    const [copied, setCopied] = useState(false);
    function copy() {
        try {
            navigator.clipboard.writeText(value).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1800);
            });
        } catch {
            /* portapapeles no disponible */
        }
    }
    return (
        <button
            onClick={copy}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-primary-600 dark:text-primary-300 border border-primary-300/60 dark:border-primary-700/60 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors shrink-0"
            aria-label="Copiar código"
        >
            {copied ? <CheckIcon className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}
            {copied ? 'Copiado' : 'Copiar'}
        </button>
    );
}

// Formulario de tarjeta (maqueta de UI — se reemplaza por el widget de
// Datafast (Dataweb 2.0 / COPYandPAY) al conectar la pasarela real).
function CardForm() {
    return (
        <div className="space-y-3">
            <Field label="Número de tarjeta" placeholder="1234 5678 9012 3456" onChange={() => {}} />
            <div className="grid grid-cols-2 gap-3">
                <Field label="Vencimiento" placeholder="MM / AA" onChange={() => {}} />
                <Field label="CVC" placeholder="123" onChange={() => {}} />
            </div>
            <Field label="Nombre en la tarjeta" placeholder="Como aparece en la tarjeta" onChange={() => {}} />
        </div>
    );
}

/* ========================= Confirmación ========================= */
function ThankYou({ donation, emailSent, onDownload }) {
    const { code, amount, currency, frequency, donor } = donation;
    return (
        <PageTransition>
            <div className="min-h-screen bg-dark-50 dark:bg-dark-950 pt-28 pb-24 px-4 flex items-center justify-center transition-colors duration-300">
                <div className="max-w-lg w-full text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-xl shadow-primary-500/30 mb-6"
                    >
                        <CheckIcon className="w-10 h-10" />
                    </motion.div>
                    <h1 className="text-3xl font-extrabold text-dark-900 dark:text-white">
                        ¡Gracias, {donor.firstName || 'de corazón'}!
                    </h1>
                    <p className="mt-3 text-dark-500 dark:text-dark-400">
                        Registramos tu donación de{' '}
                        <span className="font-semibold text-primary-600 dark:text-primary-300">
                            {formatAmount(amount, currency)}
                            {frequency === 'monthly' ? ' cada mes' : ''}
                        </span>
                        . Tu apoyo hace posible un Ecuador más inclusivo.
                    </p>

                    {/* Código único */}
                    <div className="mt-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-100 dark:border-dark-800 p-5">
                        <p className="text-xs uppercase tracking-wide text-dark-400">
                            Código único de tu donación
                        </p>
                        <p className="mt-1 text-2xl font-extrabold text-primary-600 dark:text-primary-300 tracking-wide">
                            {code}
                        </p>
                        <p className="mt-1 text-xs text-dark-400">
                            Guárdalo como referencia de tu aporte.
                        </p>
                    </div>

                    {/* Estado del correo */}
                    <p className="mt-4 text-sm text-dark-500 dark:text-dark-400 flex items-center justify-center gap-2">
                        {emailSent ? (
                            <>
                                <CheckIcon className="w-4 h-4 text-green-500" />
                                Enviamos tu factura a{' '}
                                <span className="font-semibold">{donor.email}</span>.
                            </>
                        ) : (
                            <>Descargamos tu comprobante en PDF automáticamente.</>
                        )}
                    </p>
                    {donor.subscribe && (
                        <p className="mt-1 text-sm text-dark-400">
                            Te suscribimos a las publicaciones mensuales de la Fundación.
                        </p>
                    )}

                    {/* Acciones */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                            onClick={onDownload}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-primary-600 dark:text-primary-300 border-2 border-primary-500/40 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
                        >
                            <DownloadIcon className="w-4 h-4" /> Descargar comprobante
                        </button>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25 hover:scale-105 transition-all"
                        >
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}

/* ========================= UI helpers ========================= */
function Field({ label, value, onChange, placeholder, type = 'text', required, className = '' }) {
    return (
        <label className={`block ${className}`}>
            <span className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                {label} {required && <span className="text-primary-500">*</span>}
            </span>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-950 px-4 py-2.5 text-dark-900 dark:text-white placeholder-dark-300 dark:placeholder-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
        </label>
    );
}

/* ========================= Iconos ========================= */
function HeartIcon({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
    );
}
function ArrowIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    );
}
function CheckIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}
function LockIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
    );
}
function DownloadIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
        </svg>
    );
}
function InfoIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
function MethodIcon({ id }) {
    if (id === 'card') {
        return (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path strokeLinecap="round" d="M2 10h20" />
            </svg>
        );
    }
    if (id === 'global66') {
        return (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 12h17M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
            </svg>
        );
    }
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 10l9-6 9 6M5 10v9m14-9v9M9 19v-5h6v5" />
        </svg>
    );
}
function WhatsAppIcon({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.111-.352-.148-.973-.397-1.943-1.272-1.084-.979-1.815-2.185-2.025-2.54-.21-.355-.022-.547.155-.724.161-.161.353-.414.53-.621.174-.207.234-.355.352-.591.118-.236.059-.443-.03-.621-.088-.178-.778-1.879-1.066-2.571-.274-.658-.553-.568-.778-.578-.207-.008-.445-.011-.682-.011-.237 0-.621.089-.947.443-.326.355-1.244 1.214-1.244 2.959s1.274 3.433 1.451 3.67c.178.237 2.493 3.823 6.035 5.356 2.308.995 3.109.845 3.626.702.597-.165 1.839-.751 2.097-1.477.258-.726.258-1.348.181-1.477-.077-.13-.279-.207-.633-.385z" />
        </svg>
    );
}
function MailIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}
function CopyIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
    );
}
