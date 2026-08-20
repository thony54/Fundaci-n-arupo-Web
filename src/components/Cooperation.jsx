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
        <section id="cooperacion" className="relative py-24 overflow-hidden" aria-labelledby="coop-heading">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-primary-900" aria-hidden="true" />
            <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-400 mb-3">
                        Oportunidades de cooperación
                    </p>
                    <h2 id="coop-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Construyamos alianzas que transformen realidades
                    </h2>
                    <p className="text-dark-300 text-lg leading-relaxed">
                        La cooperación internacional es un aliado estratégico para ampliar el impacto territorial, fortalecer capacidades locales y construir soluciones sostenibles. Proponemos desarrollar alianzas con embajadas y cooperación internacional.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Áreas de cooperación */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                        <h3 className="text-xl font-bold text-white mb-6">Áreas de cooperación</h3>
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                            {areasCooperacion.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <svg className="mt-0.5 w-5 h-5 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-dark-200 text-sm leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Qué buscamos */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                        <h3 className="text-xl font-bold text-white mb-6">Qué buscamos</h3>
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                            {queBuscamos.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" aria-hidden="true" />
                                    <span className="text-dark-200 text-sm leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#contacto"
                        className="inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 transition-all duration-300 shadow-xl shadow-primary-500/25 hover:shadow-primary-400/40 hover:scale-105"
                    >
                        Conversemos sobre una alianza
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
