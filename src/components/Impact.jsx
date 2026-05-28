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
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Impacto Logrado Section */}
                <div className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary-400 mb-3">
                            Impacto Logrado
                        </p>
                        <h2 id="impact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Resultados que transforman realidades
                        </h2>
                        <p className="text-dark-300 text-lg leading-relaxed">
                            Fundación Arupo ha desarrollado acciones en diferentes territorios del Ecuador, generando impacto en: La organización ha participado activamente en espacios interinstitucionales de toma de decisiones y redes de protección de derechos a nivel local y provincial.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {impactos.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-white font-medium text-sm leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cobertura Territorial Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <p className="text-sm font-semibold uppercase tracking-widest text-accent-400 mb-3">
                        Cobertura Territorial
                    </p>
                    <h3 className="text-3xl font-bold text-white mb-6">
                        Presencia a nivel nacional
                    </h3>
                    <p className="text-dark-300 text-lg leading-relaxed mb-12">
                        Fundación Arupo desarrolla sus acciones principalmente en la región norte del Ecuador, con intervenciones en: El trabajo territorial se realiza mediante alianzas con gobiernos locales, organizaciones sociales y redes comunitarias.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        {coberturas.map((provincia) => (
                            <div key={provincia} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-primary-600/20 hover:border-primary-500/50 transition-colors duration-300">
                                {provincia}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
