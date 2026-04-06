const areas = [
    {
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
        ),
        title: 'Inclusión y Discapacidad',
        description:
            'Promovemos la plena participación de personas con discapacidad en la vida social, laboral y comunitaria, eliminando barreras y fortaleciendo capacidades.',
        color: 'from-primary-500 to-primary-600',
    },
    {
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
        title: 'Movilidad Humana y Migración',
        description:
            'Acompañamos a personas migrantes y refugiadas en su proceso de integración, brindando orientación legal, apoyo psicosocial y acceso a servicios esenciales.',
        color: 'from-blue-500 to-blue-600',
    },
    {
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
        title: 'Accesibilidad Digital',
        description:
            'Desarrollamos soluciones tecnológicas accesibles que permiten a todas las personas participar en el mundo digital sin barreras, con diseño universal e inclusivo.',
        color: 'from-violet-500 to-violet-600',
    },
    {
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        ),
        title: 'Educación y Sensibilización',
        description:
            'Implementamos programas educativos y campañas de sensibilización sobre derechos humanos, diversidad, género e interculturalidad en comunidades y centros educativos.',
        color: 'from-amber-500 to-amber-600',
    },
    {
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
        title: 'Comunicación y Producción Audiovisual',
        description:
            'Producimos contenido audiovisual con enfoque social que visibiliza realidades, transforma narrativas y amplifica las voces de las comunidades que acompañamos.',
        color: 'from-rose-500 to-rose-600',
    },
];

export default function Areas() {
    return (
        <section id="areas" className="py-24 bg-dark-50 dark:bg-dark-900 transition-colors duration-300" aria-labelledby="areas-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
                        Nuestras Áreas
                    </p>
                    <h2 id="areas-heading" className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white">
                        Líneas de acción para el cambio social
                    </h2>
                    <p className="mt-4 text-dark-500 dark:text-dark-300 text-lg">
                        Trabajamos de forma integral en cinco ejes estratégicos que abordan las
                        necesidades más urgentes de las comunidades que acompañamos.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((area) => (
                        <article
                            key={area.title}
                            className="group relative bg-white dark:bg-dark-950 rounded-2xl border border-dark-100 dark:border-dark-800 p-8 transition-all duration-300 hover:shadow-xl hover:border-transparent hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Gradient top bar */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} aria-hidden="true" />

                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${area.color} text-white mb-5 shadow-lg`}>
                                {area.icon}
                            </div>
                            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">{area.title}</h3>
                            <p className="text-dark-500 dark:text-dark-400 leading-relaxed">{area.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
