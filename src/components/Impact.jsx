import SectionHeading from './SectionHeading';
import MeshGradient from './motion/MeshGradient';
import Parallax from './motion/Parallax';
import { Stagger, StaggerItem } from './motion/Stagger';

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
        <section id="impacto" className="relative py-24 overflow-hidden" aria-labelledby="impact-heading">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-primary-900" aria-hidden="true" />
            <div className="absolute inset-0 opacity-40" aria-hidden="true">
                <MeshGradient />
            </div>
            <Parallax speed={0.25} className="absolute inset-0">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl" aria-hidden="true" />
            </Parallax>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Impacto Logrado Section */}
                <div className="mb-24">
                    <SectionHeading
                        eyebrow="Impacto Logrado"
                        title="Resultados que transforman realidades"
                        titleId="impact-heading"
                        subtitle="Fundación Arupo ha desarrollado acciones en diferentes territorios del Ecuador, participando activamente en espacios interinstitucionales de toma de decisiones y redes de protección de derechos a nivel local y provincial."
                        eyebrowColor="text-primary-400"
                        titleClassName="text-3xl sm:text-4xl font-bold text-white"
                    />

                    <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" stagger={0.1}>
                        {impactos.map((item, index) => (
                            <StaggerItem key={index} variant="card" className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <div className="text-center max-w-4xl mx-auto">
                    <SectionHeading
                        eyebrow="Cobertura Territorial"
                        title="Presencia a nivel nacional"
                        subtitle="Fundación Arupo desarrolla sus acciones principalmente en la región norte del Ecuador. El trabajo territorial se realiza mediante alianzas con gobiernos locales, organizaciones sociales y redes comunitarias."
                        eyebrowColor="text-accent-400"
                        titleClassName="text-3xl font-bold text-white"
                        className="mb-12"
                    />

                    <Stagger className="flex flex-wrap justify-center gap-4" stagger={0.05}>
                        {coberturas.map((provincia) => (
                            <StaggerItem key={provincia} variant="scale" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-primary-600/20 hover:border-primary-500/50 transition-colors duration-300">
                                {provincia}
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </div>
        </section>
    );
}
