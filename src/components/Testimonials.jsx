import SectionHeading from './SectionHeading';
import SectionDecor from './ui/Decor';
import { Stagger, StaggerItem } from './motion/Stagger';

const testimonials = [
    {
        quote:
            'Llegué a Ecuador sin conocer a nadie. Fundación Arupo me brindó orientación, apoyo emocional y las herramientas para reconstruir mi vida. Hoy soy parte activa de mi comunidad.',
        name: 'María Fernanda R.',
        role: 'Beneficiaria – Programa de Movilidad Humana',
        initials: 'MR',
        color: 'from-primary-400 to-primary-600',
    },
    {
        quote:
            'Gracias al Centro Terapéutico Integral, mi hijo recibe la atención especializada que necesita. El equipo nos ha acompañado con humanidad y profesionalismo en cada paso.',
        name: 'Carlos Andrés M.',
        role: 'Padre de familia – Centro Terapéutico',
        initials: 'CM',
        color: 'from-blue-400 to-blue-600',
    },
    {
        quote:
            'Como persona LGBTIQ+, encontrar un espacio seguro y respetuoso fue transformador. Arupo no solo defiende derechos, sino que construye comunidad desde la empatía.',
        name: 'Valentina S.',
        role: 'Voluntaria y activista comunitaria',
        initials: 'VS',
        color: 'from-violet-400 to-violet-600',
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-24 lg:py-28 bg-white dark:bg-dark-950 transition-colors duration-300 overflow-hidden" aria-labelledby="testimonials-heading">
            <SectionDecor variant="cool" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <SectionHeading
                    eyebrow="Testimonios"
                    title="Historias de resiliencia y esperanza"
                    titleId="testimonials-heading"
                    accent={1}
                    subtitle="Las voces de quienes acompañamos son nuestra mayor motivación para seguir construyendo un mundo más justo."
                />

                {/* Cards */}
                <Stagger className="grid md:grid-cols-3 gap-8 md:pb-12" stagger={0.14}>
                    {testimonials.map((t, i) => (
                        <StaggerItem
                            key={t.name}
                            as="article"
                            variant="up"
                            className={`group flex flex-col ${i === 1 ? 'md:translate-y-12' : ''}`}
                        >
                            {/* Burbuja */}
                            <div className={`relative arupo-card arupo-card-hover is-warm ${i % 2 ? 'petal-alt' : 'petal-lg'} p-8 pt-10 flex-1`}>
                                <svg
                                    className="absolute -top-5 left-8 h-11 w-11 drop-shadow-[0_8px_16px_rgba(234,88,12,0.35)]"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <linearGradient id={`q-${i}`} x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0" stopColor="#fb923c" />
                                            <stop offset="1" stopColor="#a13d6d" />
                                        </linearGradient>
                                    </defs>
                                    <path fill={`url(#q-${i})`} d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                                </svg>

                                <blockquote>
                                    <p className="text-dark-700 dark:text-dark-200 leading-relaxed italic text-[1.02rem]">&ldquo;{t.quote}&rdquo;</p>
                                </blockquote>

                                {/* Cola de la burbuja */}
                                <span aria-hidden="true" className="absolute -bottom-3 left-12 w-6 h-6 rotate-45 rounded-br-md bg-[#fffaf4] dark:bg-[#111a2e] shadow-[3px_3px_0_-2px_rgba(234,88,12,0.18)]" />
                            </div>

                            <div className="mt-7 ml-6 flex items-center gap-3">
                                <div
                                    className={`inline-flex items-center justify-center w-12 h-12 blob bg-gradient-to-br ${t.color} text-white font-bold text-sm shadow-lg ring-4 ring-white dark:ring-dark-950`}
                                    aria-hidden="true"
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-dark-900 dark:text-white text-sm">{t.name}</p>
                                    <p className="text-dark-500 dark:text-dark-400 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
