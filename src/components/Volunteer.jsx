import { motion } from 'framer-motion';

export default function Volunteer() {
    return (
        <section id="voluntariado" className="relative py-32 lg:py-48 bg-dark-950 overflow-hidden" aria-labelledby="volunteer-heading">
            {/* Full Bleed Background Image with Parallax effect simulation */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1593113565214-80afcb4a45d7?auto=format&fit=crop&q=80" 
                    alt="Voluntariado" 
                    className="w-full h-full object-cover object-center opacity-40 dark:opacity-30 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-900/80 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-white/10 dark:bg-dark-900/40 backdrop-blur-2xl border border-white/20 p-10 sm:p-14 rounded-[3rem] shadow-2xl"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-400 mb-4 flex items-center gap-3">
                            <span className="w-8 h-px bg-primary-400"></span>
                            Programa de Voluntariado
                        </p>
                        
                        <h2 id="volunteer-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                            Tu tiempo puede <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 italic">cambiar vidas</span>
                        </h2>
                        
                        <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
                            Únete a nuestra red global y local de voluntariado. No importa tu edad, profesión u
                            origen – lo que importa es tu compromiso con los derechos humanos, la empatía y la inclusión real.
                        </p>
                        
                        <div className="space-y-6 mb-12">
                             {[
                                { title: 'Local', desc: 'Acciones e impacto directo en comunidades de Ecuador.' },
                                { title: 'Internacional', desc: 'Oportunidades globales de colaboración remota.' },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white tracking-wide">{item.title}</h3>
                                        <p className="text-white/60 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://enketo.unhcr.org/x/Eo942fQl"
                            className="inline-flex items-center px-10 py-5 text-lg font-black rounded-full bg-primary-600 text-white hover:bg-primary-500 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.4)]"
                            aria-label="Postularse como voluntario"
                        >
                            Postúlate Ahora
                            <svg className="ml-3 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
