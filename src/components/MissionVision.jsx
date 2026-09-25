import SectionHeading from './SectionHeading';
import SectionDecor from './ui/Decor';
import { Stagger, StaggerItem } from './motion/Stagger';

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
        <section id="mision-vision" className="relative py-24 lg:py-28 bg-cream-50 dark:bg-night-900 transition-colors duration-300 overflow-hidden" aria-labelledby="mv-heading">
            <SectionDecor variant="cool" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Nuestro Propósito" title="Misión y Visión" titleId="mv-heading" accent={1} />

                <Stagger className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch" stagger={0.15}>
                    {items.map((item, i) => {
                        const featured = i === 0;
                        return (
                            <StaggerItem
                                key={item.label}
                                as="article"
                                variant="card"
                                className={`group relative overflow-hidden p-8 sm:p-11 ${featured
                                    ? 'petal-lg on-dark bg-gradient-to-br from-night-900 via-[#1c1530] to-primary-900 text-white shadow-2xl shadow-primary-900/25 md:translate-y-6'
                                    : 'petal-lg arupo-card md:-translate-y-2'}`}
                            >
                                {/* Icono gigante como marca de agua */}
                                <div aria-hidden="true" className={`arupo-deco -right-10 -bottom-12 w-64 h-64 [&_svg]:w-full [&_svg]:h-full transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105 ${featured ? 'text-white/[0.06]' : 'text-primary-500/[0.07] dark:text-primary-400/[0.08]'}`}>
                                    {item.icon}
                                </div>
                                {featured && (
                                    <div aria-hidden="true" className="arupo-halo -top-20 -left-16 w-72 h-72" style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.45), transparent 70%)' }} />
                                )}

                                <div className="relative">
                                    <div className="arupo-icon w-16 h-16 mb-7">
                                        {item.icon}
                                    </div>
                                    <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 ${featured ? 'text-white' : 'text-dark-900 dark:text-white'}`}>
                                        {item.label}
                                    </h3>
                                    <span aria-hidden="true" className="block w-12 h-1 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 mb-6" />
                                    <p className={`leading-relaxed text-[1.02rem] ${featured ? 'text-dark-200' : 'text-dark-600 dark:text-dark-300'}`}>
                                        {item.text}
                                    </p>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </Stagger>
            </div>
        </section>
    );
}
