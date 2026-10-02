import SectionHeading from './SectionHeading';
import SectionDecor from './ui/Decor';
import { Stagger, StaggerItem } from './motion/Stagger';
import Reveal from './motion/Reveal';
import { motion } from 'framer-motion';

const groups = [
    {
        place: 'Ibarra',
        scope: 'Cantonal',
        items: [
            'Ordenanza para la Igualdad e Inclusión de Personas con Discapacidad, impulsada mediante un proceso de construcción participativa.',
            'Construcción del reglamento a la ordenanza para el cantón.',
        ],
    },
    {
        place: 'Otavalo',
        scope: 'Cantonal',
        items: [
            'Construcción de la ordenanza para personas con discapacidad en el cantón.',
            'Capacitación y fortalecimiento en el sistema de protección de derechos.',
        ],
    },
    {
        place: 'Quito',
        scope: 'Distrito Metropolitano',
        items: [
            'Construcción y validación de rutas y protocolos de atención para personas con discapacidad en el Distrito Metropolitano.',
        ],
    },
    {
        place: 'A nivel nacional',
        scope: 'Nacional',
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
        <section id="incidencia" className="relative py-24 lg:py-28 bg-white dark:bg-dark-950 transition-colors duration-300 overflow-hidden" aria-labelledby="policy-heading">
            <SectionDecor variant="soft" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Incidencia y política pública"
                    title="Avances y menciones destacadas"
                    titleId="policy-heading"
                    accent={2}
                    subtitle="Como actor de incidencia, Fundación Arupo tiene un rol activo en los Consejos Cantonales de Protección de Derechos de Ibarra, Otavalo, Cotacachi, Urcuquí, Antonio Ante y Pimampiro, y en las redes de protección de derechos a nivel local, provincial y nacional."
                    className="max-w-4xl"
                />

                {/* Ruta de incidencia: del cantón al país. La línea une los cuatro
                    territorios y avanza en el mismo sentido que crece su alcance. */}
                <div className="relative mb-14">
                    <div className="hidden lg:flex items-center justify-between gap-4 mb-6 text-xs font-bold uppercase tracking-[0.18em] text-dark-500 dark:text-dark-400">
                        <span>Incidencia local</span>
                        <span aria-hidden="true" className="flex-1 h-px bg-gradient-to-r from-dark-200 via-primary-300 to-dark-200 dark:from-dark-800 dark:via-primary-800 dark:to-dark-800" />
                        <span>Incidencia nacional</span>
                    </div>

                    <div className="relative">
                        {/* Riel: va del centro de la primera parada al de la última (a media altura de los números) */}
                        <div aria-hidden="true" className="hidden lg:block absolute top-[1.625rem] left-[calc((100%-4.5rem)/8)] right-[calc((100%-4.5rem)/8)] h-1 rounded-full bg-primary-100 dark:bg-primary-950/60 overflow-hidden">
                            <motion.div
                                className="h-full origin-left rounded-full bg-gradient-to-r from-accent-400 via-primary-500 to-primary-700"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>

                        <Stagger as="ol" className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10" stagger={0.12}>
                            {groups.map((group, i) => (
                                <StaggerItem
                                    key={group.place}
                                    as="li"
                                    variant="up"
                                    className="flex flex-col items-center"
                                >
                                    {/* En celular (una columna) la ruta sigue hacia abajo */}
                                    {i > 0 && (
                                        <span aria-hidden="true" className="sm:hidden -mt-8 mb-2 h-8 w-1 rounded-full bg-gradient-to-b from-primary-100 to-primary-400 dark:from-primary-950 dark:to-primary-600" />
                                    )}
                                    <div className="relative z-10 arupo-icon w-14 h-14 text-lg font-black ring-[6px] ring-white dark:ring-dark-950">
                                        {i + 1}
                                    </div>
                                    <span className="mt-3 mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary-700 dark:text-primary-300 ring-1 ring-primary-200/80 dark:ring-primary-500/25">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        {group.scope}
                                    </span>
                                    <article className={`w-full flex-1 arupo-card arupo-card-hover is-warm ${i % 2 ? 'petal-alt' : 'petal'} px-7 pt-7 pb-8`}>
                                        <h3 className="text-lg font-bold text-dark-900 dark:text-white text-center mb-5">{group.place}</h3>
                                        <ul className="space-y-3">
                                            {group.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <span aria-hidden="true" className="mt-[0.45rem] w-2 h-2 shrink-0 petal bg-gradient-to-br from-accent-400 to-primary-600" />
                                                    <span className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </div>

                {/* Highlight: legal wins */}
                <Reveal width="100%">
                    <div className="relative overflow-hidden flex items-start gap-6 petal-lg p-8 sm:p-10 bg-gradient-to-r from-primary-50 via-cream-50 to-[#fbeef6] dark:from-primary-900/20 dark:via-dark-900 dark:to-therapeutic-900/20 ring-1 ring-primary-200/70 dark:ring-primary-800/40">
                        <div aria-hidden="true" className="arupo-halo -right-16 -top-20 w-72 h-72" style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.35), transparent 70%)' }} />
                        <div className="relative hidden sm:flex arupo-icon w-16 h-16">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l8.485 4.243v5.514c0 4.09-3.03 7.61-8.485 8.243C6.545 20.61 3.515 17.09 3.515 13V7.243L12 3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75l2.25 2.25L15 9.75" />
                            </svg>
                        </div>
                        <p className="relative text-dark-700 dark:text-dark-200 leading-relaxed text-[1.05rem] self-center">
                            Fundación Arupo ha logrado la <strong className="text-dark-900 dark:text-white">apelación favorable de dos negaciones de visa</strong> para personas con discapacidad y ha acompañado <strong className="text-dark-900 dark:text-white">dos procesos judiciales de acción de protección</strong> en defensa de los derechos de personas en movilidad humana.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
