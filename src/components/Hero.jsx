import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import InclusionNetwork from './InclusionNetwork';
import MeshGradient from './motion/MeshGradient';
import WordReveal from './motion/WordReveal';
import CountUp from './motion/CountUp';

const stats = [
    { number: <CountUp to={33568} duration={2} />, label: 'Atenciones' },
    { number: <CountUp to={10} duration={1.5} />, label: 'Provincias alcanzadas' },
    { number: <CountUp to={509} duration={1.5} />, label: 'Pasantías' },
    { number: <CountUp to={2563} duration={2} />, label: 'Funcionarios capacitados' },
];

const headline = [
    { text: 'Transformamos' },
    { text: 'realidades' },
    { text: 'con' },
    { text: 'accesibilidad,', className: 'bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400 bg-clip-text text-transparent' },
    { text: 'tecnología' },
    { text: 'y' },
    { text: 'acción' },
    { text: 'social' },
];

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    // Layered parallax: content drifts up and fades; background layers move slower.
    const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
    const yMesh = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
    const yBlobFar = useTransform(scrollYProgress, [0, 1], ['0%', '55%']);
    const scaleMesh = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    return (
        <section
            ref={ref}
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900" />
                <motion.div style={{ y: yMesh, scale: scaleMesh }} className="absolute inset-0">
                    <MeshGradient />
                </motion.div>
                <InclusionNetwork />
                {/* Decorative parallax shapes */}
                <motion.div style={{ y: yBlobFar }} className="absolute inset-0">
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-therapeutic-600/10 rounded-full blur-3xl" />
                </motion.div>
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
                aria-hidden="true"
            />

            {/* Content */}
            <motion.div
                style={{ y: yContent, opacity }}
                className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-8 backdrop-blur-sm"
                >
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-400 animate-pulse" aria-hidden="true" />
                    Innovación Social desde Ecuador
                </motion.div>

                <WordReveal
                    as="h1"
                    segments={headline}
                    delay={0.15}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight max-w-5xl mx-auto"
                />

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="mt-6 text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed"
                >
                    En Fundación Arupo acompañamos a personas con discapacidad y grupos de atención prioritaria mediante procesos terapéuticos, formación técnica y programas de inclusión que generan autonomía y oportunidades reales.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.85 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#contacto"
                        className="arupo-sheen inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 transition-all duration-300 shadow-xl shadow-primary-500/25 hover:shadow-primary-400/40 hover:scale-105"
                        aria-label="Ir a contacto"
                    >
                        Dona ahora
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </a>
                    <a
                        href="https://enketo.unhcr.org/x/Eo942fQl"
                        className="inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-full border-2 border-dark-500 text-white hover:border-primary-400 hover:text-primary-300 transition-all duration-300 hover:scale-105"
                        aria-label="Información sobre voluntariado"
                    >
                        Sé voluntario/a
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>

                {/* Stats bar — assembles in with a stagger */}
                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 1 } } }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
                            }}
                        >
                            <p className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</p>
                            <p className="mt-1 text-sm text-dark-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                aria-hidden="true"
            >
                <span className="text-[11px] uppercase tracking-[0.2em] text-dark-400">Descubre</span>
                <div className="w-6 h-10 rounded-full border-2 border-dark-500/70 flex justify-center pt-2">
                    <span className="block w-1 h-2 rounded-full bg-primary-400" style={{ animation: 'arupo-scroll-cue 1.6s ease-in-out infinite' }} />
                </div>
            </motion.div>
        </section>
    );
}
