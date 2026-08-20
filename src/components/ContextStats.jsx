const ecuadorStats = [
    { value: '87%', desc: 'Mujeres solas, cabeza de hogar.' },
    { value: '75%', desc: 'En los quintiles de pobreza y pobreza extrema.' },
    { value: '85%', desc: 'No tiene un empleo estable.' },
    { value: '80%', desc: 'No accede a servicios de salud con especialistas.' },
    { value: '<1%', desc: 'De las personas con discapacidad están inmersas en el sistema educativo.' },
];

const movilidadStats = [
    { value: '80%', desc: 'En los quintiles de pobreza y pobreza extrema.' },
    { value: '100%', desc: 'No puede acceder a ayudas técnicas.' },
    { value: '89%', desc: 'Inseguridad alimentaria.' },
    { value: '12,1%', desc: 'Son hogares con necesidades específicas.' },
    { value: '67%', desc: 'Duerme a la intemperie.' },
    { value: '70%', desc: 'Situación migratoria regular.' },
];

function StatCard({ value, desc, accent }) {
    return (
        <div className="bg-white dark:bg-dark-950 rounded-2xl border border-dark-100 dark:border-dark-800 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <p className={`text-4xl font-black ${accent} mb-2`}>{value}</p>
            <p className="text-dark-600 dark:text-dark-300 text-sm leading-snug">{desc}</p>
        </div>
    );
}

export default function ContextStats() {
    return (
        <section id="contexto" className="py-24 bg-dark-50 dark:bg-dark-900 transition-colors duration-300" aria-labelledby="context-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
                        Por nuestros derechos, aquí estamos
                    </p>
                    <h2 id="context-heading" className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white">
                        El contexto de la discapacidad en cifras
                    </h2>
                    <p className="mt-4 text-dark-500 dark:text-dark-300 text-lg">
                        Las personas con discapacidad atraviesan una grave crisis por la falta de medicinas, ayudas técnicas y empleos adecuados, que limita su autonomía y profundiza la exclusión.
                    </p>
                </div>

                {/* Ecuador */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-500" aria-hidden="true" />
                        Discapacidad en Ecuador
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {ecuadorStats.map((s) => (
                            <StatCard key={s.desc} value={s.value} desc={s.desc} accent="text-primary-600 dark:text-primary-400" />
                        ))}
                    </div>
                    <p className="mt-4 text-sm text-dark-500 dark:text-dark-400 italic">
                        No existe data real de feminicidios en mujeres con discapacidad y violencia basada en género.
                    </p>
                </div>

                {/* Movilidad humana */}
                <div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-500" aria-hidden="true" />
                        Discapacidad en movilidad humana
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {movilidadStats.map((s) => (
                            <StatCard key={s.desc} value={s.value} desc={s.desc} accent="text-accent-600 dark:text-accent-400" />
                        ))}
                    </div>
                    <p className="mt-4 text-sm text-dark-500 dark:text-dark-400 italic">
                        Una crisis de derechos humanos silenciosa: esta población enfrenta una doble exclusión estructural al combinar las barreras de la discapacidad con la irregularidad migratoria y la pobreza extrema.
                    </p>
                </div>
            </div>
        </section>
    );
}
