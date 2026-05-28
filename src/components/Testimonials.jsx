import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: 'Llegué a Ecuador sin conocer a nadie. Fundación Arupo me brindó orientación, apoyo emocional y las herramientas para reconstruir mi vida. Hoy soy parte activa de mi comunidad.',
        name: 'María Fernanda R.',
        role: 'Beneficiaria – Programa de Movilidad Humana',
        initials: 'MR',
        color: 'from-primary-400 to-primary-600',
    },
    {
        quote: 'Gracias al Centro Terapéutico Integral, mi hijo recibe la atención especializada que necesita. El equipo nos ha acompañado con humanidad y profesionalismo en cada paso.',
        name: 'Carlos Andrés M.',
        role: 'Padre de familia – Centro Terapéutico',
        initials: 'CM',
        color: 'from-accent-400 to-accent-600',
    },
    {
        quote: 'Como persona LGBTIQ+, encontrar un espacio seguro y respetuoso fue transformador. Arupo no solo defiende derechos, sino que construye comunidad desde la empatía.',
        name: 'Valentina S.',
        role: 'Voluntaria y activista comunitaria',
        initials: 'VS',
        color: 'from-dark-600 to-dark-800',
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-dark-50 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden" aria-labelledby="testimonials-heading">
            {/* Soft background meshes */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-4 inline-flex items-center gap-3">
                        <span className="w-8 h-px bg-primary-600 dark:bg-primary-400"></span>
                        Testimonios
                        <span className="w-8 h-px bg-primary-600 dark:bg-primary-400"></span>
                    </p>
                    <h2 id="testimonials-heading" className="text-4xl sm:text-5xl font-black text-dark-900 dark:text-white tracking-tight leading-[1.1]">
                        Historias de resiliencia <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500 italic font-medium">y esperanza</span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                    {testimonials.map((t, idx) => (
                        <motion.article
                            key={t.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                            className="group relative bg-white dark:bg-dark-950 rounded-[2.5rem] p-10 lg:p-12 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-dark-900/5 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col justify-between border border-dark-100 dark:border-dark-800"
                        >
                            {/* Giant subtle quote mark */}
                            <div className="absolute top-6 right-8 text-8xl font-serif leading-none text-dark-100 dark:text-dark-800/50 group-hover:text-primary-100 dark:group-hover:text-primary-900/20 transition-colors duration-500 pointer-events-none">
                                "
                            </div>

                            <blockquote className="relative z-10 mb-10">
                                <p className="text-dark-700 dark:text-dark-300 leading-loose text-lg font-light">&ldquo;{t.quote}&rdquo;</p>
                            </blockquote>

                            <div className="mt-auto flex items-center gap-4 relative z-10 pt-6 border-t border-dark-100 dark:border-dark-800">
                                <div
                                    className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${t.color} text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    aria-hidden="true"
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-dark-900 dark:text-white">{t.name}</p>
                                    <p className="text-dark-500 dark:text-dark-400 text-sm mt-0.5 font-medium">{t.role}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
