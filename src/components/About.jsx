import { motion } from 'framer-motion';

const enfoques = [
    'Enfoque de derechos humanos',
    'Enfoque de discapacidad e inclusión',
    'Perspectiva de género',
    'Interculturalidad',
    'Desarrollo comunitario',
    'Participación ciudadana',
    'Inclusión económica',
    'Acción humanitaria territorial'
];

export default function About() {
    return (
        <section id="nosotros" className="relative py-32 bg-dark-50 dark:bg-dark-950 transition-colors duration-300 overflow-hidden" aria-labelledby="about-heading">
            {/* Background Abstract Shapes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-0">
                    
                    {/* Left: Large Editorial Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-7/12 relative z-10"
                    >
                        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-dark-900/20 group">
                            <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                            <img 
                                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80" 
                                alt="Trabajo comunitario de Fundación Arupo" 
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                            />
                            
                            {/* Floating Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl z-20"
                            >
                                <p className="text-white font-medium text-lg leading-snug">
                                    Construimos una sociedad donde la diversidad es celebrada y los derechos garantizados.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Overlapping Glass Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-6/12 relative z-20 mt-[-100px] lg:mt-0 lg:ml-[-10%]"
                    >
                        <div className="bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl border border-white/40 dark:border-dark-700/50 p-10 md:p-14 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] dark:shadow-none">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-primary-600 dark:bg-primary-400"></span>
                                Quiénes Somos
                            </p>
                            <h2 id="about-heading" className="text-4xl sm:text-5xl font-black text-dark-900 dark:text-white leading-[1.1] mb-8 tracking-tight">
                                Transformamos realidades con <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">enfoque humano</span>
                            </h2>
                            <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed mb-10 font-light">
                                Nuestro trabajo se basa en pilares fundamentales para acompañar a personas en situación de discapacidad, movilidad humana y vulnerabilidad social:
                            </p>
                            
                            {/* Dynamic Pills */}
                            <div className="flex flex-wrap gap-3">
                                {enfoques.map((enfoque, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-5 py-2.5 rounded-full bg-dark-100/50 dark:bg-dark-800/50 border border-dark-200/50 dark:border-dark-700/50 text-dark-800 dark:text-dark-200 text-sm font-medium hover:border-primary-300 hover:bg-primary-50 dark:hover:border-primary-700 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-default"
                                    >
                                        {enfoque}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
