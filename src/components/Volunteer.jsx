export default function Volunteer() {
    return (
        <section id="voluntariado" className="py-24 bg-white dark:bg-dark-950 transition-colors duration-300" aria-labelledby="volunteer-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 lg:pr-8">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-4">
                            Voluntariado
                        </p>
                        <h2
                            id="volunteer-heading"
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark-900 dark:text-white leading-tight mb-6"
                        >
                            Tu tiempo puede <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">cambiar vidas</span>
                        </h2>
                        <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 leading-relaxed max-w-xl">
                            Únete a nuestra red de voluntariado. No importa tu edad, profesión u
                            origen – lo que importa es tu compromiso con los derechos humanos y la inclusión.
                        </p>
                        
                        <div className="space-y-6 mb-10 max-w-md">
                             {[
                                { title: 'Voluntariado Local', desc: 'Acciones directas e impacto en comunidades en Ecuador.' },
                                { title: 'Voluntariado Internacional', desc: 'Oportunidades globales de colaboración con aliados.' },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 items-start">
                                    <div className="mt-1 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-dark-900 dark:text-white">{item.title}</h3>
                                        <p className="text-dark-600 dark:text-dark-400 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://enketo.unhcr.org/x/Eo942fQl"
                            className="inline-flex items-center px-8 py-4 text-base font-bold rounded-full bg-dark-900 dark:bg-white text-white dark:text-dark-900 hover:scale-105 transition-transform duration-300 shadow-xl"
                            aria-label="Postularse como voluntario"
                        >
                            Únete Ahora
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                    
                    <div className="flex-1 w-full relative">
                        <div className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden relative shadow-2xl">
                            {/* Abstract vibrant gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-600 to-accent-600 dark:from-primary-600 dark:via-primary-800 dark:to-accent-800 mix-blend-multiply dark:mix-blend-color-burn opacity-90" />
                            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1593113565214-80afcb4a45d7?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-50 dark:opacity-40" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />
                            
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white transform transition-transform hover:-translate-y-1 duration-300">
                                    <p className="font-medium text-lg italic">"El voluntariado en Arupo me enseñó el verdadero significado de la empatía y la transformación comunitaria."</p>
                                    <p className="mt-3 text-primary-200 text-sm font-semibold tracking-wide uppercase">— Testimonio Voluntariado</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative blobs */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
