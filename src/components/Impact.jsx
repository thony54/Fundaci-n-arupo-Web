import { motion } from 'framer-motion';

const impactos = [
    { num: '01', title: 'Atención Terapéutica', text: 'Procesos de atención a personas con discapacidad.' },
    { num: '02', title: 'Apoyo Familiar', text: 'Acompañamiento en situación de vulnerabilidad.' },
    { num: '03', title: 'Capacitación', text: 'A funcionarios públicos en derechos e inclusión.' },
    { num: '04', title: 'Incidencia', text: 'Para la construcción de políticas públicas.' },
    { num: '05', title: 'Articulación', text: 'Con redes de protección de derechos.' },
    { num: '06', title: 'Sensibilización', text: 'Programas de concienciación comunitaria.' },
    { num: '07', title: 'Movilidad Humana', text: 'Apoyo a población refugiada con discapacidad.' }
];

const coberturas = [
    'Imbabura', 'Carchi', 'Pichincha', 'Manabí', 'Esmeraldas', 
    'Orellana', 'Sucumbios', 'Santo Domingo', 'Tungurahua', 'Guayas'
];

export default function Impact() {
    return (
        <section id="impacto" className="relative py-32 overflow-hidden bg-dark-950" aria-labelledby="impact-heading">
            {/* Deep Space Background Elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
            <div className="absolute -top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary-600/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-600/10 rounded-full blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-24 border-b border-white/10 pb-16">
                    <div className="max-w-2xl">
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary-400 font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3"
                        >
                            <span className="w-12 h-px bg-primary-400"></span>
                            Impacto Logrado
                        </motion.p>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            id="impact-heading" 
                            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
                        >
                            Resultados que <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-300 italic pr-4">transforman</span>
                        </motion.h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-dark-300 text-lg md:text-xl font-light leading-relaxed max-w-md"
                    >
                        Fundación Arupo ha desarrollado acciones en diferentes territorios del Ecuador, participando activamente en espacios interinstitucionales de toma de decisiones.
                    </motion.p>
                </div>

                {/* Staggered Horizontal Scroll Layout for Desktop, Grid for Mobile */}
                <div className="flex overflow-x-auto pb-16 pt-4 gap-6 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                    {impactos.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="min-w-[280px] sm:min-w-[320px] snap-center bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group"
                        >
                            <div className="text-5xl font-black text-white/10 mb-6 group-hover:text-primary-400/20 transition-colors">
                                {item.num}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-dark-300 leading-relaxed font-light">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Cobertura Territorial - Interactive Word Cloud Style */}
                <div className="mt-20 pt-20 border-t border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-accent-400 font-bold tracking-[0.2em] uppercase mb-4">Cobertura Territorial</p>
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Presencia a nivel nacional</h3>
                        <p className="text-dark-400 font-light text-lg">
                            Desarrollamos nuestras acciones principalmente en la región norte del Ecuador, mediante sólidas alianzas con gobiernos locales y organizaciones sociales.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {coberturas.map((provincia, idx) => (
                            <motion.div 
                                key={provincia}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, type: "spring", stiffness: 100 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="px-6 py-3 rounded-full bg-dark-800/50 backdrop-blur-sm border border-dark-700 text-white font-medium hover:bg-primary-600 hover:border-primary-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all duration-300 cursor-default"
                            >
                                {provincia}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
            
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
