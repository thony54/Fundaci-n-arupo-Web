const keyStats = [
    { value: '80%', desc: 'de las personas con discapacidad están en los quintiles de pobreza y pobreza extrema.' },
    { value: '87%', desc: 'de los hogares con una persona con discapacidad están encabezados por madres solas.' },
    { value: '85%', desc: 'de las personas con discapacidad no cuentan con un empleo estable.' },
];

export default function Problem() {
    return (
        <section id="problema" className="py-24 bg-white dark:bg-dark-950 transition-colors duration-300" aria-labelledby="problem-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Narrative */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
                            El desafío
                        </p>
                        <h2 id="problem-heading" className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white leading-tight">
                            Problema que abordamos
                        </h2>
                        <div className="mt-6 space-y-4 text-dark-600 dark:text-dark-300 leading-relaxed">
                            <p>
                                La discapacidad en Ecuador requiere ser comprendida desde una visión distinta, que reconozca su relación directa con la pobreza estructural, la desigualdad y las limitadas oportunidades de inclusión económica y social.
                            </p>
                            <p>
                                Esta realidad impacta profundamente a las familias, especialmente a las mujeres, quienes asumen el cuidado permanente y ven reducidas sus posibilidades de acceder a empleo formal, formación técnica y generación de ingresos sostenibles. La falta de empleo estable incrementa la dependencia económica y profundiza los ciclos de pobreza intergeneracional.
                            </p>
                        </div>
                    </div>

                    {/* Key stats */}
                    <div className="space-y-4">
                        {keyStats.map((stat) => (
                            <div
                                key={stat.value}
                                className="flex items-center gap-6 p-6 rounded-2xl bg-dark-50 dark:bg-dark-900 border border-dark-100 dark:border-dark-800"
                            >
                                <span className="text-4xl sm:text-5xl font-black text-primary-600 dark:text-primary-400 shrink-0 w-24 text-center">
                                    {stat.value}
                                </span>
                                <p className="text-dark-700 dark:text-dark-300 text-sm leading-snug">
                                    {stat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Shift statement */}
                <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 sm:p-12">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
                    <div className="relative max-w-3xl">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            De un enfoque asistencialista a un modelo basado en capacidades
                        </h3>
                        <p className="text-primary-50 leading-relaxed">
                            Fundación Arupo promueve una visión distinta de la discapacidad, basada en el reconocimiento de las destrezas, habilidades y potencialidades de cada persona. Impulsamos modelos de inclusión productiva mediante emprendimientos adaptados, formación práctica y acompañamiento técnico, fortaleciendo la autonomía, la dignidad y la independencia económica, con decisiones sustentadas en evidencia y alineadas a la realidad de los territorios.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
