const groups = [
    {
        place: 'Ibarra',
        items: [
            'Ordenanza para la Igualdad e Inclusión de Personas con Discapacidad, impulsada mediante un proceso de construcción participativa.',
            'Construcción del reglamento a la ordenanza para el cantón.',
        ],
    },
    {
        place: 'Otavalo',
        items: [
            'Construcción de la ordenanza para personas con discapacidad en el cantón.',
            'Capacitación y fortalecimiento en el sistema de protección de derechos.',
        ],
    },
    {
        place: 'Quito',
        items: [
            'Construcción y validación de rutas y protocolos de atención para personas con discapacidad en el Distrito Metropolitano.',
        ],
    },
    {
        place: 'A nivel nacional',
        items: [
            'Reforma a la Ley Orgánica de Discapacidad, mesas técnicas — Asamblea Nacional.',
            'Mesas técnicas nacionales para movilidad humana — Cancillería.',
            'Participación en el GTRM y en las mesas técnicas de Movilidad Humana.',
            'Facilitador en la Escuela de Formación Ciudadana y Derechos Humanos (7.ª promoción).',
        ],
    },
];

export default function PolicyAchievements() {
    return (
        <section id="incidencia" className="py-24 bg-white dark:bg-dark-950 transition-colors duration-300" aria-labelledby="policy-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
                        Incidencia y política pública
                    </p>
                    <h2 id="policy-heading" className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-4">
                        Avances y menciones destacadas
                    </h2>
                    <p className="text-dark-500 dark:text-dark-300 text-lg">
                        Como actor de incidencia, Fundación Arupo tiene un rol activo en los Consejos Cantonales de Protección de Derechos de Ibarra, Otavalo, Cotacachi, Urcuquí, Antonio Ante y Pimampiro, y en las redes de protección de derechos a nivel local, provincial y nacional.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {groups.map((group) => (
                        <article
                            key={group.place}
                            className="bg-dark-50 dark:bg-dark-900 rounded-3xl border border-dark-100 dark:border-dark-800 p-7 flex flex-col"
                        >
                            <div className="flex items-center gap-2.5 mb-5">
                                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <h3 className="text-lg font-bold text-dark-900 dark:text-white">{group.place}</h3>
                            </div>
                            <ul className="space-y-3">
                                {group.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" aria-hidden="true" />
                                        <span className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                {/* Highlight: legal wins */}
                <div className="flex items-start gap-5 rounded-3xl border border-primary-200 dark:border-primary-800/50 bg-primary-50 dark:bg-primary-900/10 p-8">
                    <div className="hidden sm:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-2xl bg-primary-600 text-white">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l8.485 4.243v5.514c0 4.09-3.03 7.61-8.485 8.243C6.545 20.61 3.515 17.09 3.515 13V7.243L12 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75l2.25 2.25L15 9.75" />
                        </svg>
                    </div>
                    <p className="text-dark-700 dark:text-dark-200 leading-relaxed">
                        Fundación Arupo ha logrado la <strong className="text-dark-900 dark:text-white">apelación favorable de dos negaciones de visa</strong> para personas con discapacidad y ha acompañado <strong className="text-dark-900 dark:text-white">dos procesos judiciales de acción de protección</strong> en defensa de los derechos de personas en movilidad humana.
                    </p>
                </div>
            </div>
        </section>
    );
}
