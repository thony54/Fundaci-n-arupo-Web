const items = [
    {
        label: 'Misión',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10.5a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.75v3.75l2.25 1.5" />
            </svg>
        ),
        text: 'La Fundación Arupo trabaja por la defensa, promoción y restitución de los derechos de las personas con discapacidad y grupos de atención prioritaria, a través de procesos terapéuticos, programas de inclusión social, acciones afirmativas y capacitación técnica. Nuestro compromiso es contribuir a una sociedad justa, accesible y equitativa, en cumplimiento de la Ley Orgánica de Discapacidad, los instrumentos internacionales de derechos humanos y los Objetivos de Desarrollo Sostenible.',
    },
    {
        label: 'Visión',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        text: 'Somos reconocidos a nivel nacional e internacional como referente en la construcción de un Ecuador inclusivo, accesible y libre de discriminación, donde las personas con discapacidad ejerzan plenamente sus derechos, participen en igualdad de condiciones y contribuyan activamente al desarrollo sostenible.',
    },
];

export default function MissionVision() {
    return (
        <section id="mision-vision" className="py-24 bg-dark-50 dark:bg-dark-900 transition-colors duration-300" aria-labelledby="mv-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
                        Nuestro Propósito
                    </p>
                    <h2 id="mv-heading" className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white">
                        Misión y Visión
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {items.map((item) => (
                        <article
                            key={item.label}
                            className="relative bg-white dark:bg-dark-950 rounded-3xl border border-dark-100 dark:border-dark-800 p-8 sm:p-10 transition-all duration-300 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-50 to-transparent dark:from-primary-900/10 rounded-bl-full" aria-hidden="true" />
                            <div className="relative">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6 shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                                    {item.label}
                                </h3>
                                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
