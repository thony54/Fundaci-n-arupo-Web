import SectionHeading from './SectionHeading';
import SectionDecor from './ui/Decor';
import { Stagger, StaggerItem } from './motion/Stagger';

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
        <section id="proyectos" className="relative py-24 lg:py-28 bg-cream-50 dark:bg-night-900 transition-colors duration-300 overflow-hidden" aria-labelledby="projects-heading">
            <SectionDecor variant="warm" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <SectionHeading
                    eyebrow="Proyectos Prioritarios"
                    title="Iniciativas estratégicas"
                    titleId="projects-heading"
                    accent={1}
                    subtitle="Fundación Arupo busca impulsar proyectos estratégicos con el apoyo de cooperación internacional en:"
                />

                {/* Grid */}
                <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:pb-8" stagger={0.07}>
                    {projects.map((project, index) => (
                        <StaggerItem
                            key={index}
                            variant="up"
                            className={`group arupo-card arupo-card-hover ${index % 2 ? 'petal-alt' : 'petal'} relative overflow-hidden flex items-center gap-4 p-5 pr-6 ${index % 3 === 1 ? 'lg:translate-y-8' : ''}`}
                        >
                            <span aria-hidden="true" className="arupo-deco inset-0 bg-gradient-to-br from-primary-50 via-transparent to-[#fbeef6] dark:from-primary-500/10 dark:to-therapeutic-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="relative arupo-icon is-soft w-11 h-11">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="relative text-dark-800 dark:text-dark-100 font-semibold leading-snug">
                                {project}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
