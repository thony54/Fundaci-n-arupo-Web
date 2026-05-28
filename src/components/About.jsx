const enfoques = [
    'Enfoque de derechos humanos.',
    'Enfoque de discapacidad e inclusión.',
    'Perspectiva de género.',
    'Interculturalidad.',
    'Desarrollo comunitario.',
    'Participación ciudadana.',
    'Inclusión económica.',
    'Acción humanitaria territorial.'
];

export default function About() {
    return (
        <section id="nosotros" className="py-24 bg-white dark:bg-dark-950 transition-colors duration-300" aria-labelledby="about-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
                            Quiénes Somos
                        </p>
                        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white leading-tight">
                            Enfoque Institucional
                        </h2>
                        <p className="mt-6 text-dark-600 dark:text-dark-300 leading-relaxed text-lg mb-8">
                            Nuestro trabajo se basa en los siguientes enfoques para transformar realidades y acompañar a personas en situación de discapacidad, movilidad humana y vulnerabilidad social:
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {enfoques.map((enfoque, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-dark-800 dark:text-dark-200 font-medium text-sm leading-snug">
                                        {enfoque}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image / Visual */}
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/40 to-accent-500/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                        <img 
                            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80" 
                            alt="Trabajo comunitario" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/90 p-8 z-20">
                            <p className="text-white font-medium text-lg">
                                Construimos una sociedad donde la diversidad sea celebrada y los derechos garantizados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
