import SectionHeading from './SectionHeading';
import SectionDecor, { ArupoFlower } from './ui/Decor';
import { Stagger, StaggerItem } from './motion/Stagger';
import Reveal from './motion/Reveal';

const keyStats = [
    { value: '80%', desc: 'de las personas con discapacidad están en los quintiles de pobreza y pobreza extrema.' },
    { value: '87%', desc: 'de los hogares con una persona con discapacidad están encabezados por madres solas.' },
    { value: '85%', desc: 'de las personas con discapacidad no cuentan con un empleo estable.' },
];

export default function Problem() {
    return (
        <section id="problema" className="relative py-24 lg:py-28 bg-white dark:bg-dark-950 transition-colors duration-300 overflow-hidden" aria-labelledby="problem-heading">
            <SectionDecor variant="soft" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Narrative */}
                    <div>
                        <SectionHeading
                            eyebrow="El desafío"
                            title="Problema que abordamos"
                            titleId="problem-heading"
                            align="left"
                            accent={1}
                            className="mb-6"
                        />
                        <div className="space-y-4 text-dark-600 dark:text-dark-300 leading-relaxed text-[1.02rem] border-l-2 border-primary-200 dark:border-primary-800/60 pl-6">
                            <p>
                                La discapacidad en Ecuador requiere ser comprendida desde una visión distinta, que reconozca su relación directa con la pobreza estructural, la desigualdad y las limitadas oportunidades de inclusión económica y social.
                            </p>
                            <p>
                                Esta realidad impacta profundamente a las familias, especialmente a las mujeres, quienes asumen el cuidado permanente y ven reducidas sus posibilidades de acceder a empleo formal, formación técnica y generación de ingresos sostenibles. La falta de empleo estable incrementa la dependencia económica y profundiza los ciclos de pobreza intergeneracional.
                            </p>
                        </div>
                    </div>

                    {/* Key stats */}
                    <Stagger className="relative space-y-4" stagger={0.12}>
                        {keyStats.map((stat, i) => (
                            <StaggerItem
                                key={stat.value}
                                className={`group arupo-card arupo-card-hover is-warm ${i % 2 ? 'petal-alt lg:ml-10' : 'petal lg:mr-10'} flex items-center gap-4 sm:gap-6 p-5 sm:p-7`}
                            >
                                <span className="text-arupo text-4xl sm:text-6xl font-black tracking-tight shrink-0 min-w-[5.5rem] sm:min-w-[10rem] text-center pr-1">
                                    {stat.value}
                                </span>
                                <span aria-hidden="true" className="self-stretch w-px bg-gradient-to-b from-transparent via-primary-300 to-transparent dark:via-primary-700" />
                                <p className="text-dark-700 dark:text-dark-200 text-sm sm:text-[0.95rem] leading-snug font-medium">
                                    {stat.desc}
                                </p>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>

                {/* Shift statement */}
                <Reveal width="100%">
                    <div className="mt-20 relative overflow-hidden petal-lg bg-gradient-to-br from-primary-500 via-primary-700 to-[#7a2c55] p-8 sm:p-14 shadow-2xl shadow-primary-700/30">
                        <div aria-hidden="true" className="arupo-halo -top-24 -right-10 w-96 h-96" style={{ background: 'radial-gradient(circle, rgba(252,211,77,0.45), transparent 70%)' }} />
                        <ArupoFlower className="-right-16 -bottom-24 w-[22rem] h-[22rem] text-white/15" strokeWidth={1.4} />
                        <div aria-hidden="true" className="arupo-deco left-0 top-0 h-full w-2 bg-gradient-to-b from-accent-300 via-white/60 to-transparent" />
                        <div className="relative max-w-3xl">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                                De un enfoque asistencialista a un modelo basado en capacidades
                            </h3>
                            <p className="text-primary-50 leading-relaxed text-[1.02rem]">
                                Fundación Arupo promueve una visión distinta de la discapacidad, basada en el reconocimiento de las destrezas, habilidades y potencialidades de cada persona. Impulsamos modelos de inclusión productiva mediante emprendimientos adaptados, formación práctica y acompañamiento técnico, fortaleciendo la autonomía, la dignidad y la independencia económica, con decisiones sustentadas en evidencia y alineadas a la realidad de los territorios.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
