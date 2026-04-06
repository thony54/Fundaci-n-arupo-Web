const pillars = [
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        label: 'Inclusión',
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        label: 'Derechos Humanos',
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        label: 'Innovación Social',
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
        label: 'Accesibilidad Digital',
    },
];

export default function About() {
    return (
        <section id="nosotros" className="py-24 bg-white dark:bg-dark-950 transition-colors duration-300" aria-labelledby="about-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
                            Quiénes Somos
                        </p>
                        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white leading-tight">
                            Transformamos realidades a través de la{' '}
                            <span className="text-primary-600">inclusión</span> y la{' '}
                            <span className="text-primary-600">innovación</span>
                        </h2>
                        <p className="mt-6 text-dark-600 dark:text-dark-300 leading-relaxed text-lg">
                            Fundación Arupo es una organización de la sociedad civil, comprometidos con la inclusión, la justicia social y la defensa de los derechos humanos. Nacimos del deseo de transformar realidades y acompañar a personas en situación de discapacidad, movilidad humana y vulnerabilidad social. Trabajamos desde el corazón de Ecuador con enfoque comunitario, intercultural y con perspectiva de género.
                            Nuestra labor ha sido reconocida a nivel nacional e internacional gracias a la participación activa en redes, alianzas estratégicas y espacios de incidencia.

                        </p>
                        <p className="mt-4 text-dark-600 dark:text-dark-300 leading-relaxed">
                            Integramos tecnología, comunicación y accesibilidad como herramientas
                            de transformación social. Nuestra visión es construir una sociedad donde
                            la diversidad sea celebrada y los derechos sean garantizados para todas
                            las personas, sin distinción.
                        </p>
                        <p className="mt-4 text-dark-600 dark:text-dark-300 leading-relaxed">
                            Promovemos procesos de inclusión social, educativa y terapéutica. Brindamos atención integral a niños, niñas, adolescentes, personas con discapacidad y sus familias, a través de programas de acompañamiento psicosocial, terapias, formación, arte y voluntariado.
                            También impulsamos acciones de activismo, campañas de sensibilización, formación en derechos humanos y accesibilidad digital, generando espacios seguros, diversos y transformadores.
                        </p>
                    </div>

                    {/* Pillars */}
                    <div className="grid grid-cols-2 gap-4">
                        {pillars.map((pillar) => (
                            <div
                                key={pillar.label}
                                className="group relative overflow-hidden rounded-2xl bg-dark-50 dark:bg-dark-900 border border-dark-100 dark:border-dark-800 p-6 transition-all duration-300 hover:shadow-lg hover:border-primary-200 hover:-translate-y-1"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-50 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="font-semibold text-dark-800 dark:text-white text-lg">{pillar.label}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
