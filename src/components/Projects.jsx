const projects = [
    'Programa de inclusión digital accesible.',
    'Programa de fortalecimiento económico para familias con discapacidad.',
    'Programa de apoyo a mujeres con discapacidad.',
    'Programa de empleabilidad para personas con discapacidad.',
    'Línea de producción textil inclusiva.',
    'Adiestramiento de perros de asistencia.',
    'Brigadas médicas inclusivas comunitarias.',
    'Observatorio de discapacidad y movilidad humana.',
    'Escuela de formación para gobiernos locales.'
];

export default function Projects() {
    return (
        <section id="proyectos" className="py-24 bg-white dark:bg-dark-950 transition-colors duration-300" aria-labelledby="projects-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
                        Proyectos Prioritarios
                    </p>
                    <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-4">
                        Iniciativas estratégicas
                    </h2>
                    <p className="text-dark-500 dark:text-dark-300 text-lg">
                        Fundación Arupo busca impulsar proyectos estratégicos con el apoyo de cooperación internacional en:
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex items-start gap-4 p-5 rounded-xl bg-dark-50 dark:bg-dark-900 border border-dark-100 dark:border-dark-800 transition-all duration-300 hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800"
                        >
                            <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 flex items-center justify-center">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-dark-800 dark:text-dark-200 font-medium leading-snug">
                                {project}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
