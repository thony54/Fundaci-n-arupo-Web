import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/motion/PageTransition';
import Reveal from '../components/motion/Reveal';
import CountUp from '../components/motion/CountUp';
import Conventions from '../components/Conventions';
import Team from '../components/Team'; // Added Team component import
import InclusionNetwork from '../components/InclusionNetwork'; // Using the same network background
import qrCentro from '../assets/QRs/QR Centro Terapéutico Integral Arupo.png';
import arupoctiLogo from '../assets/ARUPOCTI LOGO.png';
import SectionDecor, { PhotoBackdrop } from '../components/ui/Decor';
import ContactPanel from '../components/ContactPanel';

const SOFT = 'bg-[#f6f4fb] dark:bg-night-900';

export default function TherapeuticCenter() {
    const [activeArea, setActiveArea] = useState('medica');

    const medicalServices = [
        { name: 'Neuropediatría', icon: '🧠' },
        { name: 'Neurología', icon: '⚕️' },
        { name: 'Otorrinolaringología', icon: '👂' },
        { name: 'Fonoaudiología', icon: '🗣️' },
        { name: 'Psicología Clínica', icon: '🛋️' },
    ];

    const therapeuticServices = [
        { name: 'Neuropsicología', icon: '🧩' },
        { name: 'Psicología Familiar', icon: '👪' },
        { name: 'Terapia Ocupacional', icon: '👐' },
        { name: 'Terapia Física', icon: '🏃' },
        { name: 'Terapia de Lenguaje', icon: '💬' },
    ];

    // Áreas de atención: pestaña activa + sus especialidades
    const areas = {
        medica: {
            label: 'Área Médica',
            services: medicalServices,
            pill: 'from-[#0072BC] to-[#005a96] shadow-[#0072BC]/30',
            tile: 'bg-sky-50 dark:bg-sky-500/10',
            hover: 'hover:border-[#0072BC]/50',
            iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
        },
        terapeutica: {
            label: 'Área Terapéutica',
            services: therapeuticServices,
            pill: 'from-[#82368C] to-[#581c87] shadow-[#82368C]/30',
            tile: 'bg-purple-50 dark:bg-purple-500/10',
            hover: 'hover:border-[#82368C]/50',
            iconPath: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        },
    };
    const area = areas[activeArea];

    return (
        <PageTransition>
            <div className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white transition-colors duration-300">
                {/* 1. HERO AL ESTILO FUNDACIÓN ARUPO */}
                <section
                    id="inicio"
                    className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-therapeutic-900" />
                        <InclusionNetwork />
                        {/* Decorative shapes using therapeutic colors */}
                        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-therapeutic-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-therapeutic-400/10 rounded-full blur-3xl" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-therapeutic-600/5 rounded-full blur-3xl" />
                    </div>

                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03] z-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                        }}
                        aria-hidden="true"
                    />

                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-8 text-center mt-auto flex flex-col items-center">
                        {/* Logo */}
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 }}
                            src={arupoctiLogo} 
                            alt="Centro Terapéutico Integral Arupo" 
                            className="h-32 sm:h-40 md:h-48 mb-8 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500" 
                        />

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.2] tracking-tight max-w-5xl mx-auto">
                            Somos un espacio especializado y multidisciplinario que brinda atención integral a{' '}
                            <span className="bg-gradient-to-r from-[#0072BC] via-[#82368C] to-[#E6007E] bg-clip-text text-transparent drop-shadow-sm">
                                niños, adolescentes, personas adultas y sus familias.
                            </span>
                        </h1>

                        <p className="mt-8 text-lg md:text-xl text-dark-300 max-w-4xl mx-auto leading-relaxed font-light">
                            Nuestro enfoque se centra en el desarrollo de habilidades para la vida, la inclusión educativa y la participación activa en la comunidad, mediante procesos terapéuticos personalizados, acompañamiento familiar y estrategias accesibles.
                        </p>

                        {/* CTAs */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                            className="mt-10 flex flex-col sm:flex-row justify-center gap-5 w-full max-w-md mx-auto sm:max-w-none"
                        >
                            <Link
                                to="/#contacto"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-[#0072BC] to-[#82368C] text-white hover:from-[#005a96] hover:to-[#6b2c73] transition-all shadow-xl hover:scale-105 hover:shadow-[#0072BC]/40 ring-2 ring-transparent hover:ring-white/20"
                            >
                                Solicitar Información
                            </Link>
                            <Link
                                to="/donar"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full border-2 border-white/80 text-white backdrop-blur-sm hover:bg-white hover:text-dark-900 transition-all shadow-lg hover:scale-105"
                            >
                                Quiero apoyar
                            </Link>
                        </motion.div>
                    </div>
                    
                    {/* Stats bar */}
                    <div className="relative z-10 mt-auto w-full pb-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto border-t border-white/10 pt-10 px-4">
                            {[
                                { number: <><CountUp to={80} duration={2} />+</>, label: 'Personas atendidas' },
                                { number: 'Continua', label: 'Atención integral' },
                                { number: 'Humano', label: 'Enfoque biopsicosocial' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <p className="text-2xl sm:text-3xl font-bold text-white h-10 flex items-center justify-center">{stat.number}</p>
                                    <p className="mt-2 text-sm text-dark-400 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Conventions variant="therapeutic" /> {/* Added Conventions Section */}

                {/* 3. ¿QUÉ ES EL CENTRO TERAPÉUTICO ARUPO? */}
                <section className="relative py-20 lg:py-24 bg-white dark:bg-dark-950 overflow-hidden">
                    <SectionDecor variant="cool" />
                    <Reveal width="100%">
                    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative arupo-card petal-lg overflow-hidden p-8 sm:p-14 text-center">
                    <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight text-balance mb-8 text-dark-900 dark:text-white">¿Qué es el <span className="text-cti">Centro Terapéutico Arupo?</span></h2>
                    <p className="relative text-lg sm:text-xl leading-relaxed text-dark-600 dark:text-dark-300">
                        Somos una institución sin fines de lucro, prestadora de servicios terapéuticos integrales comprometida con la promoción, prevención, evaluación, diagnostico e intervención, orientada a optimizar las habilidades motoras, comunicativas, conductuales y sociales, a personas que tengan alteración en las diferentes áreas del desarrollo neurológico, beneficiándolos en la adaptación e integración social y escolar.
                        Te presentamos a continuación los servicios que dispone el Centro Terapéutico Arupo
                    </p>
                    </div>
                    </div>
                    </Reveal>
                </section>

                {/* 4. NUESTROS SERVICIOS ESPECIALIZADOS */}
                <section id="servicios" className={`arupo-sheet overflow-hidden pt-24 lg:pt-28 pb-32 lg:pb-40 ${SOFT}`}>
                    <SectionDecor variant="cool" />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-5 text-dark-900 dark:text-white tracking-tight text-balance">
                                Áreas de Atención <span className="text-cti">Especializada</span>
                            </h2>
                            <p className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
                                Descubre nuestro enfoque integral, estructurado en áreas especializadas para brindar el acompañamiento más completo y humano.
                            </p>
                        </div>

                        {/* Selector de área: la píldora de color se desliza a la pestaña activa */}
                        <div className="flex justify-center mb-10">
                            <div role="tablist" aria-label="Áreas de atención" className="inline-flex gap-1 p-1.5 rounded-full bg-white dark:bg-dark-900 ring-1 ring-dark-100 dark:ring-dark-800 shadow-lg shadow-therapeutic-900/5">
                                {Object.entries(areas).map(([key, a]) => {
                                    const selected = activeArea === key;
                                    return (
                                        <button
                                            key={key}
                                            id={`tab-${key}`}
                                            role="tab"
                                            type="button"
                                            aria-selected={selected}
                                            aria-controls="panel-areas"
                                            onClick={() => setActiveArea(key)}
                                            className={`relative inline-flex items-center gap-2 sm:gap-2.5 rounded-full px-4 sm:px-7 py-3 text-sm sm:text-base font-bold transition-colors duration-300 ${selected ? 'text-white' : 'text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white'}`}
                                        >
                                            {selected && (
                                                <motion.span
                                                    layoutId="area-pill"
                                                    aria-hidden="true"
                                                    className={`absolute inset-0 rounded-full bg-gradient-to-r shadow-lg ${a.pill}`}
                                                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                                />
                                            )}
                                            <svg className="relative w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={a.iconPath} />
                                            </svg>
                                            <span className="relative">{a.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Especialidades del área activa: aparecen con un fundido suave y escalonado */}
                        <div id="panel-areas" role="tabpanel" aria-labelledby={`tab-${activeArea}`}>
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.ul
                                    key={activeArea}
                                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={{
                                        hidden: {},
                                        visible: { transition: { staggerChildren: 0.06 } },
                                        exit: { opacity: 0, transition: { duration: 0.15 } },
                                    }}
                                >
                                    {area.services.map((item, idx) => (
                                        <motion.li
                                            key={item.name}
                                            variants={{
                                                hidden: { opacity: 0, y: 14 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
                                            }}
                                            className={`arupo-card ${idx % 2 ? 'petal-alt' : 'petal'} ${area.hover} flex flex-col items-center text-center gap-4 px-4 py-7 transition-colors duration-300 ${idx === area.services.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
                                        >
                                            <span aria-hidden="true" className={`w-14 h-14 blob flex items-center justify-center text-2xl ${area.tile}`}>{item.icon}</span>
                                            <span className="text-sm sm:text-base font-bold text-dark-800 dark:text-dark-100 leading-snug">{item.name}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* 5. ¿A QUIÉNES ATENDEMOS? */}
                <section className="arupo-sheet overflow-hidden py-24 lg:py-28 bg-white dark:bg-dark-950">
                    <SectionDecor variant="soft" />
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-14">
                        <div className="md:w-1/2 w-full">
                            <div className="relative mx-3 sm:mx-6 my-6">
                                <PhotoBackdrop tone="cti" />
                                <img
                                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop"
                                    alt="Atención inclusiva"
                                    className="relative z-10 petal-lg shadow-2xl w-full object-cover aspect-[4/3] ring-1 ring-white/50 dark:ring-white/10"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">¿A quiénes <span className="text-cti">atendemos?</span></h2>
                            <ul className="space-y-3">
                                {[
                                    'Niñas y niños con discapacidad',
                                    'Personas con discapacidad',
                                    'Familias y cuidadores',
                                    'Personas en contextos de vulnerabilidad'
                                ].map((item, idx) => (
                                    <li key={idx} className={`group arupo-card arupo-card-hover ${idx % 2 ? 'petal-alt' : 'petal'} flex items-center gap-4 p-3.5 pr-5 text-lg font-medium text-dark-700 dark:text-dark-200`}>
                                        <span className="arupo-icon is-cti w-10 h-10">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 6. METODOLOGÍA DE TRABAJO */}
                <section className={`arupo-sheet overflow-hidden py-24 lg:py-28 ${SOFT}`}>
                    <SectionDecor variant="cool" />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-16 text-center">Metodología de <span className="text-cti">Trabajo</span></h2>
                        <div className="relative lg:pb-10">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden lg:block absolute top-[2.75rem] left-[10%] w-[80%] h-1 rounded-full bg-gradient-to-r from-sky-300 via-therapeutic-400 to-therapeutic-600 opacity-60 z-0" />

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10">
                                {[
                                    { step: '1', title: 'Evaluación Integral' },
                                    { step: '2', title: 'Plan de Acompañamiento' },
                                    { step: '3', title: 'Trabajo Terapéutico' },
                                    { step: '4', title: 'Apoyo Familiar' },
                                    { step: '5', title: 'Seguimiento' },
                                ].map((phase, idx) => (
                                    <div key={idx} className={`group flex flex-col items-center ${idx % 2 ? 'lg:translate-y-10' : ''}`}>
                                        <div className="relative z-10 arupo-icon is-cti w-[5.5rem] h-[5.5rem] text-3xl font-black border-[6px] border-[#f6f4fb] dark:border-night-900">
                                            {phase.step}
                                        </div>
                                        <div className={`-mt-6 w-full arupo-card arupo-card-hover ${idx % 2 ? 'petal-alt' : 'petal'} px-5 pt-10 pb-6 text-center`}>
                                            <h3 className="font-bold text-dark-800 dark:text-white">{phase.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. ARTICULACIÓN & 8. ACCESIBILIDAD */}
                <section className="arupo-sheet overflow-hidden py-24 lg:py-28 bg-white dark:bg-dark-950">
                    <SectionDecor variant="soft" />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-10 lg:pb-8">
                    <div className="group relative overflow-hidden arupo-card arupo-card-hover petal-lg p-8 sm:p-10">
                        <h3 className="text-2xl font-bold mb-5 flex items-center gap-4">
                            <span className="arupo-icon is-cti w-14 h-14">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            </span>
                            Articulación Institucional
                        </h3>
                        <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                            El Centro Terapéutico no trabaja de forma aislada. Se articula estrechamente con otros proyectos sociales de Fundación Arupo y forma parte activa de redes institucionales y comunitarias para garantizar una atención completa.
                        </p>
                    </div>
                    <div className="group relative overflow-hidden arupo-card arupo-card-hover petal-alt p-8 sm:p-10 lg:translate-y-8">
                        <h3 className="text-2xl font-bold mb-5 flex items-center gap-4">
                            <span className="arupo-icon is-cti w-14 h-14">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            </span>
                            Accesibilidad Real
                        </h3>
                        <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                            Contamos con espacios físicamente adaptados, comunicación accesible y un compromiso inquebrantable con la atención digna, realizando los ajustes razonables necesarios para cada persona.
                        </p>
                    </div>
                    </div>
                </section>

                <div className="arupo-sheet overflow-hidden">
                <Team
                    variant="therapeutic"
                    surface={SOFT}
                    members={[
                        { name: "Paola Arboleda", role: "Psicóloga Clínica", image: "/TeamCTI/Paola%20Arboleda.webp" },
                        { name: "Clara Peñafiel", role: "Psicóloga", image: "/TeamCTI/Clara%20Penafiel.webp" },
                        { name: "Antonio Monar", role: "Psicólogo", image: "/TeamCTI/Antonio%20Monar.webp" },
                        { name: "Anshi Rodriguez", role: "Terapia del lenguaje", image: "/TeamCTI/Anshi%20Rodriguez.webp" },
                        { name: "Byron Pergueza", role: "Terapia del lenguaje", image: "/TeamCTI/Byron%20Pergueza.webp" },
                        // Sin foto todavía (se muestran sus iniciales)
                        { name: "Maria Narvaez", role: "Psicóloga" },
                        { name: "Andres Ortega", role: "Fisioterapeuta" },
                    ]}
                />
                </div>

                {/* INFORMACIÓN DE CONTACTO Y HORARIOS (PREMIUM REDESIGN) */}
                <section className="arupo-sheet overflow-hidden py-28 lg:py-32 bg-white dark:bg-dark-950 px-4 sm:px-6 lg:px-8">
                    <SectionDecor variant="cool" />
                    <ContactPanel
                        tone="cti"
                        intro="Ponte en contacto con nuestro equipo para agendar una cita o conocer más sobre nuestros servicios terapéuticos."
                        qr={qrCentro}
                        qrAlt="Código QR Centro Terapéutico"
                        qrUrl="https://www.connexoapp.com/Centro%20Terap%C3%A9utico%20Integral%20Arupo"
                        qrCaption="Escanea este código para enviarnos un mensaje directo y agendar tu cita"
                        logo={arupoctiLogo}
                        logoAlt="Centro Terapéutico Integral Arupo"
                    />
                </section>

                {/* 9. CTA HUMANO Y DIRECTO - Buttons moved to Hero */}
            </div>
        </PageTransition>
    );
}
