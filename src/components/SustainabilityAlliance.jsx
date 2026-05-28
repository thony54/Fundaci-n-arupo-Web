import { motion } from 'framer-motion';
import connexoIso from '../assets/CONNEXO ISO O.png';

export default function SustainabilityAlliance() {
    return (
        <section className="relative py-32 bg-dark-50 dark:bg-dark-950 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Visual Side: Orbital Synergy with Logo */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex justify-center relative order-2 lg:order-1"
                    >
                        <a
                            href="https://www.connexo.tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block group"
                        >
                            {/* Abstract glowing rings */}
                            <div className="absolute inset-0 border border-primary-500/20 rounded-full scale-[1.5] group-hover:scale-[1.6] group-hover:border-primary-500/40 transition-all duration-700" />
                            <div className="absolute inset-0 border border-accent-500/10 rounded-full scale-[2] group-hover:scale-[2.2] group-hover:border-accent-500/30 transition-all duration-1000" />
                            
                            <img
                                src={connexoIso}
                                alt="Connexo"
                                className="relative z-10 w-64 md:w-80 h-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                            />
                        </a>
                    </motion.div>

                    {/* Text Side */}
                    <div className="space-y-10 order-1 lg:order-2">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 flex items-center gap-3">
                                <span className="w-8 h-px bg-primary-600 dark:bg-primary-400"></span>
                                Sostenibilidad
                            </p>
                            <h3 className="text-5xl sm:text-6xl font-black text-dark-900 dark:text-white leading-[1.1] tracking-tight">
                                Alianza para el <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500 italic">impacto social</span>
                            </h3>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 text-lg text-dark-600 dark:text-dark-300 leading-relaxed font-light"
                        >
                            <p>
                                Nuestra alianza con <strong className="font-bold text-dark-900 dark:text-white">Connexo</strong> es un pilar fundamental para garantizar la sostenibilidad en el tiempo.
                            </p>
                            <div className="p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-100 dark:border-dark-800 shadow-xl shadow-dark-900/5">
                                <p className="text-dark-800 dark:text-dark-200">
                                    Un aporte solidario del <span className="text-primary-600 dark:text-primary-400 font-bold text-xl">10%</span> de cada plan contratado se destina directamente al fortalecimiento de nuestros programas sociales y al Centro Terapéutico Integral.
                                </p>
                            </div>
                            <p className="pt-4">
                                Tú también puedes ser parte de este proyecto y sumar tu apoyo.
                            </p>
                            <a 
                                href="https://www.connexo.tech/ec" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-dark-900 dark:bg-white text-white dark:text-dark-900 font-bold hover:scale-105 transition-transform duration-300"
                            >
                                Conoce más y únete
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
