import SectionHeading from './SectionHeading';
import MeshGradient from './motion/MeshGradient';
import Parallax from './motion/Parallax';
import { Stagger, StaggerItem } from './motion/Stagger';
import SectionDecor from './ui/Decor';

const impactos = [
    'Procesos de atención terapéutica a personas con discapacidad.',
    'Acompañamiento a familias en situación de vulnerabilidad.',
    'Capacitación a funcionarios públicos en derechos e inclusión.',
    'Incidencia para la construcción de políticas públicas inclusivas.',
    'Articulación con redes de protección de derechos.',
    'Programas de sensibilización comunitaria.',
    'Apoyo a población en movilidad humana con discapacidad.'
];

const coberturas = [
    'Imbabura', 'Carchi', 'Pichincha', 'Manabí', 'Esmeraldas', 
    'Orellana', 'Sucumbios', 'Santo Domingo de los Tsáchilas', 
    'Tungurahua', 'Guayas'
];

export default function Impact() {
    return (
        <section id="impacto" className="on-dark relative py-24 lg:py-32 overflow-hidden bg-night-950" aria-labelledby="impact-heading">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-night-900 via-night-950 to-primary-900/80" aria-hidden="true" />
            <div className="absolute inset-0 opacity-40" aria-hidden="true">
                <MeshGradient />
            </div>
            <SectionDecor variant="dark" />
            <Parallax speed={0.25} className="absolute inset-0">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
            </Parallax>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Impacto Logrado Section */}
                <div className="mb-28">
                    <SectionHeading
                        eyebrow="Impacto Logrado"
                        title="Resultados que transforman realidades"
                        titleId="impact-heading"
                        accent={1}
                        tone="dark"
                        subtitle="Fundación Arupo ha desarrollado acciones en diferentes territorios del Ecuador, participando activamente en espacios interinstitucionales de toma de decisiones y redes de protección de derechos a nivel local y provincial."
                    />

                    <Stagger className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto" stagger={0.1}>
                        {impactos.map((item, index) => (
                            <StaggerItem
                                key={index}
                                variant="card"
                                className={`group arupo-glass arupo-glass-hover ${index % 2 ? 'petal-alt' : 'petal'} flex items-center gap-4 p-5 pr-6 w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)]`}
                            >
                                <div className="arupo-icon w-11 h-11">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-white font-medium text-sm leading-relaxed">
                                    {item}
                                </p>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>

                {/* Cobertura Territorial Section */}
                <div className="relative text-center max-w-5xl mx-auto arupo-glass petal-lg px-6 py-14 sm:px-12">
                    <SectionHeading
                        eyebrow="Cobertura Territorial"
                        title="Presencia a nivel nacional"
                        accent={2}
                        tone="dark"
                        subtitle="Fundación Arupo desarrolla sus acciones principalmente en la región norte del Ecuador. El trabajo territorial se realiza mediante alianzas con gobiernos locales, organizaciones sociales y redes comunitarias."
                        className="mb-10"
                    />

                    <Stagger className="flex flex-wrap justify-center gap-3" stagger={0.05}>
                        {coberturas.map((provincia) => (
                            <StaggerItem key={provincia} variant="scale" className="group inline-flex items-center gap-2 pl-3 pr-5 py-2.5 rounded-full bg-white/[0.06] ring-1 ring-white/10 text-white font-medium hover:bg-primary-500/20 hover:ring-primary-400/50 transition-colors duration-300">
                                <svg aria-hidden="true" className="w-4 h-4 text-primary-400 transition-transform duration-300 group-hover:-translate-y-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.69 18.933l.003.001a.75.75 0 00.614 0l.003-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                                </svg>
                                {provincia}
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </div>
        </section>
    );
}
