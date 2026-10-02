import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

// Bloque "Estamos aquí para ayudarte": canales de contacto + tarjeta con el QR.
// Lo comparten la portada (Fundación Arupo) y el Centro Terapéutico; `tone`
// cambia los colores y cada página pasa su texto, su QR y su logo.

const PHONE = '+593 99 676 8228';
const PHONE_HREF = 'tel:+593996768228';
const WHATSAPP_HREF = 'https://wa.me/593996768228';
const EMAIL = 'rrpparupocti@gmail.com';

const THEMES = {
    primary: {
        accent: 'text-arupo',
        eyebrow: '',
        icon: '',
        link: 'hover:text-primary-600 dark:hover:text-primary-400',
        band: 'from-primary-500 via-primary-600 to-[#a13d6d]',
        corner: 'border-primary-500',
        button: 'from-primary-500 to-[#a13d6d] shadow-primary-600/30',
        pill: 'bg-primary-50 text-primary-700 ring-primary-200/80 dark:bg-primary-500/10 dark:text-primary-300 dark:ring-primary-500/25',
    },
    cti: {
        accent: 'text-cti',
        eyebrow: 'is-cti',
        icon: 'is-cti',
        link: 'hover:text-therapeutic-600 dark:hover:text-therapeutic-300',
        band: 'from-[#0072BC] via-therapeutic-600 to-therapeutic-800',
        corner: 'border-[#0072BC]',
        button: 'from-[#0072BC] to-therapeutic-600 shadow-[#0072BC]/30',
        pill: 'bg-sky-50 text-[#005a96] ring-sky-200/80 dark:bg-sky-500/10 dark:text-sky-300 dark:ring-sky-500/25',
    },
};

const Icon = ({ d, className = 'w-6 h-6' }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d} />
    </svg>
);

const ICONS = {
    clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    phone: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    arrow: 'M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25',
};

function WhatsAppIcon({ className = 'w-6 h-6' }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.111-.352-.148-.973-.397-1.943-1.272-1.084-.979-1.815-2.185-2.025-2.54-.21-.355-.022-.547.155-.724.161-.161.353-.414.53-.621.174-.207.234-.355.352-.591.118-.236.059-.443-.03-.621-.088-.178-.778-1.879-1.066-2.571-.274-.658-.553-.568-.778-.578-.207-.008-.445-.011-.682-.011-.237 0-.621.089-.947.443-.326.355-1.244 1.214-1.244 2.959s1.274 3.433 1.451 3.67c.178.237 2.493 3.823 6.035 5.356 2.308.995 3.109.845 3.626.702.597-.165 1.839-.751 2.097-1.477.258-.726.258-1.348.181-1.477-.077-.13-.279-.207-.633-.385z" />
        </svg>
    );
}

const WHATSAPP_ICON_BG = '!bg-gradient-to-br from-emerald-400 via-green-500 to-green-700 !shadow-[0_12px_24px_-12px_rgba(22,163,74,0.7)]';

export default function ContactPanel({ tone = 'primary', intro, qr, qrAlt, qrUrl, qrCaption, logo, logoAlt }) {
    const t = THEMES[tone] || THEMES.primary;

    const channels = [
        {
            title: 'Llámanos',
            sub: 'Central telefónica',
            icon: <Icon d={ICONS.phone} />,
            value: <a href={PHONE_HREF} className={`transition-colors ${t.link}`}>{PHONE}</a>,
        },
        {
            title: 'WhatsApp Directo',
            sub: 'Atención rápida por chat',
            icon: <WhatsAppIcon />,
            iconClass: WHATSAPP_ICON_BG,
            value: <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-green-600 dark:hover:text-green-400">{PHONE}</a>,
        },
        {
            title: 'Escríbenos',
            sub: 'Correo electrónico',
            icon: <Icon d={ICONS.mail} />,
            value: <a href={`mailto:${EMAIL}`} className={`break-all transition-colors ${t.link}`}>{EMAIL}</a>,
        },
    ];

    return (
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* ── Canales ─────────────────────────────────────────── */}
            <div className="lg:col-span-7">
                <Reveal width="100%">
                    <p className={`arupo-eyebrow ${t.eyebrow} mb-5`}>Contacto</p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-dark-900 dark:text-white tracking-tight leading-[1.08] text-balance mb-5">
                        Estamos aquí para <span className={t.accent}>ayudarte</span>
                    </h2>
                    <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed max-w-xl">{intro}</p>

                    <div className="flex flex-wrap gap-3 mt-8">
                        <a
                            href={WHATSAPP_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-600/30 transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            <WhatsAppIcon className="w-5 h-5" />
                            Escríbenos por WhatsApp
                        </a>
                        <a
                            href={PHONE_HREF}
                            className="inline-flex items-center gap-2.5 rounded-full bg-white dark:bg-white/[0.06] px-6 py-3.5 font-bold text-dark-900 dark:text-white ring-1 ring-dark-200 dark:ring-white/15 transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            <Icon className="w-5 h-5" d={ICONS.phone} />
                            Llamar ahora
                        </a>
                    </div>
                </Reveal>

                <Stagger className="grid sm:grid-cols-2 gap-4 mt-10" stagger={0.08}>
                    {/* Horario: ocupa todo el ancho y muestra los dos turnos */}
                    <StaggerItem variant="up" className="sm:col-span-2 arupo-card petal flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 p-5">
                        <div className={`arupo-icon ${t.icon} w-12 h-12`}>
                            <Icon d={ICONS.clock} />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-dark-900 dark:text-white text-lg leading-tight">Horario de Atención</h3>
                            <p className="text-dark-500 dark:text-dark-400 text-sm mt-0.5">Lunes a Viernes</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['08:00 - 12:45', '14:15 - 18:00'].map((h) => (
                                <span key={h} className={`rounded-full px-3.5 py-1.5 text-sm font-bold tabular-nums ring-1 ${t.pill}`}>{h}</span>
                            ))}
                        </div>
                    </StaggerItem>

                    {channels.map((c, i) => (
                        <StaggerItem
                            key={c.title}
                            variant="up"
                            className={`arupo-card arupo-card-hover ${i % 2 ? 'petal-alt' : 'petal'} flex items-start gap-4 p-5 ${i === channels.length - 1 ? 'sm:col-span-2' : ''}`}
                        >
                            <div className={`arupo-icon ${c.iconClass || t.icon} w-12 h-12`}>
                                {c.icon}
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-dark-900 dark:text-white text-lg leading-tight">{c.title}</h3>
                                <p className="text-dark-500 dark:text-dark-400 text-sm mt-0.5 mb-1.5">{c.sub}</p>
                                <p className="font-semibold text-dark-800 dark:text-dark-100">{c.value}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>

            {/* ── Tarjeta QR ──────────────────────────────────────── */}
            <Reveal width="100%" delay={0.15} className="lg:col-span-5">
                <aside className="relative mx-auto max-w-sm overflow-hidden petal-lg bg-white shadow-2xl shadow-dark-900/20 ring-1 ring-dark-900/5" aria-labelledby={`qr-title-${tone}`}>
                    {/* Franja de color con el título */}
                    <div className={`relative bg-gradient-to-br ${t.band} px-8 pt-8 pb-20 text-center text-white`}>
                        <div aria-hidden="true" className="arupo-dots absolute inset-0 text-white/20" />
                        <p className="relative text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/80 mb-1.5">Escanea con tu celular</p>
                        <h3 id={`qr-title-${tone}`} className="relative text-2xl font-extrabold tracking-tight">Conecta al instante</h3>
                    </div>

                    {/* QR con marco de escaneo */}
                    <div className="relative -mt-14 flex justify-center">
                        <div className="relative p-3">
                            {/* Esquinas de escaneo: blancas sobre la franja, de color sobre el blanco */}
                            {[
                                'top-0 left-0 border-t-4 border-l-4 rounded-tl-2xl border-white/90',
                                'top-0 right-0 border-t-4 border-r-4 rounded-tr-2xl border-white/90',
                                `bottom-0 left-0 border-b-4 border-l-4 rounded-bl-2xl ${t.corner}`,
                                `bottom-0 right-0 border-b-4 border-r-4 rounded-br-2xl ${t.corner}`,
                            ].map((pos) => (
                                <span key={pos} aria-hidden="true" className={`absolute w-9 h-9 ${pos}`} />
                            ))}
                            <div className="bg-white p-3 rounded-[1.5rem] shadow-xl ring-1 ring-dark-900/10 w-52 h-52 sm:w-56 sm:h-56">
                                <img src={qr} alt={qrAlt} className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>

                    <div className="px-8 pt-6 pb-8 text-center">
                        <p className="text-sm font-medium text-dark-500 leading-relaxed max-w-[17rem] mx-auto">{qrCaption}</p>

                        <a
                            href={qrUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r ${t.button} px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5`}
                        >
                            <span className="sm:hidden">Abrir enlace directo</span>
                            <span className="hidden sm:inline">¿Estás en el celular? Ábrelo aquí</span>
                            <Icon className="w-4 h-4" d={ICONS.arrow} />
                        </a>

                        {logo && (
                            <div className="mt-7 pt-6 border-t-2 border-dashed border-dark-100">
                                <img src={logo} alt={logoAlt} className="h-16 w-auto mx-auto object-contain" loading="lazy" />
                            </div>
                        )}
                    </div>
                </aside>
            </Reveal>
        </div>
    );
}
