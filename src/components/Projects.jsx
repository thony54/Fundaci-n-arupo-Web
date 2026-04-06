const projects = [
    {
        title: 'Centro Terapéutico Integral',
        description:
            'Espacio multidisciplinario de atención psicológica, fisioterapéutica y ocupacional para personas con discapacidad, migrantes y comunidades vulnerables. Un modelo innovador de rehabilitación integral.',
        tag: 'Salud y Bienestar',
        gradient: 'from-primary-500 to-teal-600',
    },
    {
        title: 'Campañas de Voluntariado',
        description:
            'Movilizamos a jóvenes y profesionales diversos en acciones de impacto comunitario: brigadas de salud, jornadas educativas, acompañamiento a personas en movilidad humana y proyectos de integración social.',
        tag: 'Participación Ciudadana',
        gradient: 'from-blue-500 to-indigo-600',
    },
    {
        title: 'Producción Audiovisual Social',
        description:
            'Creamos documentales, cápsulas informativas y contenido multimedia que visibiliza las realidades de las comunidades que acompañamos, transformando narrativas y generando conciencia social.',
        tag: 'Comunicación',
        gradient: 'from-rose-500 to-pink-600',
    },
    {
        title: 'Educación y Accesibilidad Digital',
        description:
            'Desarrollamos plataformas y contenidos digitales accesibles, talleres de alfabetización digital y herramientas tecnológicas que empoderan a personas con discapacidad y comunidades en contexto de movilidad.',
        tag: 'Tecnología',
        gradient: 'from-violet-500 to-purple-600',
    },
];

export default function Projects() {
    return (
        <section id="proyectos" className="py-24 bg-white dark:bg-dark-950 transition-colors duration-300" aria-labelledby="projects-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
                        Proyectos Destacados
                    </p>
                    <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white">
                        Iniciativas que construyen futuro
                    </h2>
                    <p className="mt-4 text-dark-500 dark:text-dark-300 text-lg">
                        Cada proyecto nace de un compromiso profundo con la transformación social
                        y la dignidad humana.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group relative bg-dark-50 dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-transparent hover:-translate-y-1"
                        >
                            {/* Gradient header */}
                            <div className={`h-2 bg-gradient-to-r ${project.gradient}`} aria-hidden="true" />
                            <div className="p-8">
                                <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white mb-4`}>
                                    {project.tag}
                                </span>
                                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-700 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-dark-500 dark:text-dark-300 leading-relaxed">{project.description}</p>
                                <div className="mt-6">
                                    <span className="inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-500 transition-colors duration-300">
                                        Conocer más
                                        <svg className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
