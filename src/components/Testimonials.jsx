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
        <section className="py-24 bg-white dark:bg-dark-950 transition-colors duration-300" aria-labelledby="testimonials-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
                        Testimonios
                    </p>
                    <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white">
                        Historias de resiliencia y esperanza
                    </h2>
                    <p className="mt-4 text-dark-500 dark:text-dark-300 text-lg">
                        Las voces de quienes acompañamos son nuestra mayor motivación para seguir
                        construyendo un mundo más justo.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <article
                            key={t.name}
                            className="group relative bg-dark-50 dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 p-8 transition-all duration-300 hover:shadow-xl hover:border-primary-200 hover:-translate-y-1"
                        >
                            {/* Quote icon */}
                            <svg
                                className="h-8 w-8 text-primary-200 mb-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                            </svg>

                            <blockquote>
                                <p className="text-dark-600 dark:text-dark-300 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                            </blockquote>

                            <div className="mt-6 flex items-center gap-3">
                                <div
                                    className={`inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br ${t.color} text-white font-bold text-sm`}
                                    aria-hidden="true"
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-dark-800 dark:text-white text-sm">{t.name}</p>
                                    <p className="text-dark-400 dark:text-dark-400 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
