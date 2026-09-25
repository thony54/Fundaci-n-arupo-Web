import SectionHeading from './SectionHeading';
import SectionDecor from './ui/Decor';
import { Stagger, StaggerItem } from './motion/Stagger';

const areasCooperacion = [
    'Inclusión de personas con discapacidad.',
    'Movilidad humana y protección.',
    'Desarrollo económico inclusivo.',
    'Fortalecimiento institucional.',
    'Políticas públicas inclusivas.',
    'Igualdad de género y discapacidad.',
    'Acción humanitaria comunitaria.',
    'Inclusión educativa.',
    'Accesibilidad y tecnología inclusiva.',
];

const queBuscamos = [
    'Cofinanciamiento de iniciativas territoriales.',
    'Financiamiento de proyectos piloto.',
    'Fortalecimiento institucional.',
    'Equipamiento terapéutico.',
    'Asistencia técnica especializada.',
    'Intercambio de experiencias internacionales.',
    'Formación técnica especializada.',
    'Investigación aplicada.',
    'Desarrollo de modelos replicables.',
    'Programas binacionales.',
];

export default function Cooperation() {
    return (
        <section id="cooperacion" className="on-dark relative py-24 lg:py-32 overflow-hidden bg-night-950" aria-labelledby="coop-heading">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-bl from-night-900 via-night-950 to-[#3b1530]" aria-hidden="true" />
            <SectionDecor variant="dark" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Oportunidades de cooperación"
                    title="Construyamos alianzas que transformen realidades"
                    titleId="coop-heading"
                    accent={2}
                    tone="dark"
                    subtitle="La cooperación internacional es un aliado estratégico para ampliar el impacto territorial, fortalecer capacidades locales y construir soluciones sostenibles. Proponemos desarrollar alianzas con embajadas y cooperación internacional."
                />

                <Stagger className="grid lg:grid-cols-2 gap-6 lg:gap-8" stagger={0.15}>
                    {/* Áreas de cooperación */}
                    <StaggerItem variant="card" className="group arupo-glass petal-lg p-8 sm:p-10">
                        <div className="flex items-center gap-4 mb-7">
                            <div className="arupo-icon w-12 h-12">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Áreas de cooperación</h3>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                            {areasCooperacion.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <svg className="mt-0.5 w-5 h-5 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-dark-200 text-sm leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </StaggerItem>

                    {/* Qué buscamos */}
                    <StaggerItem variant="card" className="group arupo-glass petal-alt p-8 sm:p-10 lg:translate-y-10">
                        <div className="flex items-center gap-4 mb-7">
                            <div className="arupo-icon w-12 h-12">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Qué buscamos</h3>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                            {queBuscamos.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <span aria-hidden="true" className="mt-[0.4rem] w-2 h-2 shrink-0 petal bg-gradient-to-br from-accent-300 to-primary-500" />
                                    <span className="text-dark-200 text-sm leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </StaggerItem>
                </Stagger>

                <div className="mt-16 lg:mt-24 text-center">
                    <a
                        href="#contacto"
                        className="group relative inline-flex items-center px-9 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-primary-500 via-primary-600 to-[#a13d6d] text-white transition-all duration-300 shadow-[0_18px_40px_-14px_rgba(234,88,12,0.7)] hover:shadow-[0_22px_50px_-12px_rgba(234,88,12,0.85)] hover:scale-105"
                    >
                        Conversemos sobre una alianza
                        <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
