import SectionDecor, { ArupoFlower } from './ui/Decor';

export default function Volunteer() {
    return (
        <section id="voluntariado" className="relative py-24 lg:py-28 bg-cream-50 dark:bg-night-900 transition-colors duration-300 overflow-hidden" aria-labelledby="volunteer-heading">
            <SectionDecor variant="warm" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 lg:pr-8">
                        <p className="arupo-eyebrow mb-6">
                            Voluntariado
                        </p>
                        <h2
                            id="volunteer-heading"
                            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-dark-900 dark:text-white leading-[1.05] mb-6"
                        >
                            Tu tiempo puede <br />
                            <span className="text-arupo">cambiar vidas</span>
                        </h2>
                        <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 leading-relaxed max-w-xl">
                            Únete a nuestra red de voluntariado. No importa tu edad, profesión u
                            origen – lo que importa es tu compromiso con los derechos humanos y la inclusión.
                        </p>
                        
                        <div className="space-y-4 mb-10 max-w-md">
                             {[
                                { title: 'Voluntariado Local', desc: 'Acciones directas e impacto en comunidades en Ecuador.' },
                                { title: 'Voluntariado Internacional', desc: 'Oportunidades globales de colaboración con aliados.' },
                            ].map((item) => (
                                <div key={item.title} className="group arupo-card arupo-card-hover petal flex gap-4 items-center p-4 pr-6">
                                    <div className="arupo-icon w-12 h-12">
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
                            className="group inline-flex items-center px-9 py-4 text-base font-bold rounded-full bg-gradient-to-r from-dark-900 to-[#2a1a3a] dark:from-white dark:to-cream-100 text-white dark:text-dark-900 hover:scale-105 transition-transform duration-300 shadow-[0_18px_40px_-16px_rgba(15,23,42,0.6)] ring-1 ring-primary-500/30"
                            aria-label="Postularse como voluntario"
                        >
                            Únete Ahora
                            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                    
                    <div className="flex-1 w-full relative p-3 sm:p-6">
                        {/* Capas orgánicas detrás de la imagen */}
                        <div aria-hidden="true" className="arupo-deco inset-2 blob bg-gradient-to-br from-accent-300 via-primary-400 to-arupo-purple opacity-60 rotate-6" />
                        <ArupoFlower className="-top-8 -right-6 w-36 h-36 text-primary-500/40" strokeWidth={2.2} />
                        <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square petal-lg overflow-hidden shadow-2xl ring-4 ring-white/70 dark:ring-dark-900">
                            {/* Abstract vibrant gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-600 to-accent-600 dark:from-primary-600 dark:via-primary-800 dark:to-accent-800 mix-blend-multiply dark:mix-blend-color-burn opacity-90" />
                            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1593113565214-80afcb4a45d7?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-50 dark:opacity-40" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />
                            
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 petal p-6 text-white transform transition-transform hover:-translate-y-1 duration-300">
                                    <p className="font-medium text-lg italic">"El voluntariado en Arupo me enseñó el verdadero significado de la empatía y la transformación comunitaria."</p>
                                    <p className="mt-3 text-primary-200 text-sm font-semibold tracking-wide uppercase">— Testimonio Voluntariado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
