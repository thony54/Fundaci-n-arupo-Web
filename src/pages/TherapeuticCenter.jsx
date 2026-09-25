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
import SectionDecor, { ArupoFlower } from '../components/ui/Decor';

const SOFT = 'bg-[#f6f4fb] dark:bg-night-900';

export default function TherapeuticCenter() {
    const [activeSection, setActiveSection] = useState(null); // 'medica' or 'terapeutica'

    const medicalServices = [
        { name: 'Neuropediatría', icon: '🧠' },
        { name: 'Neurología', icon: '⚕️' },
        { name: 'Otorrinolaringología', icon: '👂' },
        { name: 'Fonoaudiología', icon: '🗣️' },
        { name: 'Psicología Clínica', icon: '🛋️' },
    ];

    const therapeuticServices = [
        { name: 'Neuropsicología', icon: '🧩' },
        { name: 'Psicología Familiar', icon: '🫂' },
        { name: 'Terapia Ocupacional', icon: '👐' },
        { name: 'Terapia Física', icon: '🏃' },
        { name: 'Terapia de Lenguaje', icon: '💬' },
    ];

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
                    <ArupoFlower className="-top-14 -left-14 w-56 h-56 text-therapeutic-500/10 dark:text-therapeutic-300/10" />
                    <ArupoFlower className="-bottom-16 -right-12 w-48 h-48 text-[#0072BC]/10 dark:text-sky-300/10" />
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
                <section id="servicios" className={`arupo-sheet overflow-hidden py-24 lg:py-28 ${SOFT}`}>
                    <SectionDecor variant="cool" />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-5 text-dark-900 dark:text-white tracking-tight text-balance">
                                Áreas de Atención <span className="text-cti">Especializada</span>
                            </h2>
                            <p className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
                                Descubre nuestro enfoque integral, estructurado en áreas especializadas para brindar el acompañamiento más completo y humano.
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-[500px]">
                            {/* Área Médica Panel */}
                            <motion.div
                                layout
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                onClick={() => setActiveSection(activeSection === 'medica' ? null : 'medica')}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveSection(activeSection === 'medica' ? null : 'medica'); } }}
                                role="button"
                                tabIndex={0}
                                className={`group cursor-pointer petal-lg border transition-colors duration-500 flex flex-col p-8 sm:p-10 overflow-hidden relative
                                    ${activeSection === 'medica' ? 'lg:flex-[2.5] bg-white dark:bg-dark-900 border-[#0072BC] shadow-[0_20px_50px_rgba(0,114,188,0.15)] z-10' :
                                        activeSection === 'terapeutica' ? 'lg:flex-[0.5] opacity-40 bg-white/40 dark:bg-dark-900/40 border-transparent hover:opacity-100 grayscale-[0.5] hover:grayscale-0' :
                                            'lg:flex-1 bg-white dark:bg-dark-900 border-dark-100 dark:border-dark-800 hover:border-[#0072BC] shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-transform'}`}
                            >
                                <motion.div layout className="flex flex-col items-start gap-5 relative z-10">
                                    <div className={`w-16 h-16 blob flex items-center justify-center transition-all duration-500
                                        ${activeSection === 'medica' ? 'bg-gradient-to-br from-[#0072BC] to-[#005a96] text-white shadow-lg shadow-[#0072BC]/40 scale-110' : 'bg-blue-50 dark:bg-blue-900/30 text-[#0072BC] group-hover:scale-110'}`}>
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    </div>
                                    <motion.h3 layout className={`font-black tracking-tight transition-all duration-500 ${activeSection === 'medica' ? 'text-4xl text-[#0072BC] dark:text-white' : 'text-2xl text-dark-800 dark:text-white'}`}>
                                        Área Médica
                                    </motion.h3>
                                </motion.div>

                                <AnimatePresence mode="wait">
                                    {activeSection === 'medica' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                                            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                                            className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 relative z-10"
                                        >
                                            {medicalServices.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.3 + idx * 0.08, type: "spring", stiffness: 300 }}
                                                    className={`flex items-center gap-4 p-5 ${idx % 2 ? 'petal-alt' : 'petal'} bg-[#f7fbff] dark:bg-dark-950 border border-sky-100 dark:border-dark-800 hover:border-[#0072BC] hover:shadow-[0_16px_32px_-18px_rgba(0,114,188,0.5)] transition-all hover:-translate-y-1 group/item`}
                                                >
                                                    <span className="w-12 h-12 shrink-0 blob bg-white dark:bg-dark-900 shadow-sm flex items-center justify-center text-2xl group-hover/item:scale-110 transition-transform duration-300">{item.icon}</span>
                                                    <span className="text-sm md:text-base font-bold text-dark-700 dark:text-dark-200">{item.name}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                
                                {/* Background Decorative Circle */}
                                {activeSection === 'medica' && (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0072BC]/5 rounded-full blur-3xl z-0 pointer-events-none"
                                    />
                                )}
                            </motion.div>

                            {/* Área Terapéutica Panel */}
                            <motion.div
                                layout
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                onClick={() => setActiveSection(activeSection === 'terapeutica' ? null : 'terapeutica')}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveSection(activeSection === 'terapeutica' ? null : 'terapeutica'); } }}
                                role="button"
                                tabIndex={0}
                                className={`group cursor-pointer petal-alt border transition-colors duration-500 flex flex-col p-8 sm:p-10 overflow-hidden relative
                                    ${activeSection === 'terapeutica' ? 'lg:flex-[2.5] bg-white dark:bg-dark-900 border-[#82368C] shadow-[0_20px_50px_rgba(130,54,140,0.15)] z-10' :
                                        activeSection === 'medica' ? 'lg:flex-[0.5] opacity-40 bg-white/40 dark:bg-dark-900/40 border-transparent hover:opacity-100 grayscale-[0.5] hover:grayscale-0' :
                                            'lg:flex-1 bg-white dark:bg-dark-900 border-dark-100 dark:border-dark-800 hover:border-[#82368C] shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-transform'}`}
                            >
                                <motion.div layout className="flex flex-col items-start gap-5 relative z-10">
                                    <div className={`w-16 h-16 blob flex items-center justify-center transition-all duration-500
                                        ${activeSection === 'terapeutica' ? 'bg-gradient-to-br from-[#82368C] to-[#581c87] text-white shadow-lg shadow-[#82368C]/40 scale-110' : 'bg-purple-50 dark:bg-purple-900/30 text-[#82368C] group-hover:scale-110'}`}>
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <motion.h3 layout className={`font-black tracking-tight transition-all duration-500 ${activeSection === 'terapeutica' ? 'text-4xl text-[#82368C] dark:text-white' : 'text-2xl text-dark-800 dark:text-white'}`}>
                                        Área Terapéutica
                                    </motion.h3>
                                </motion.div>

                                <AnimatePresence mode="wait">
                                    {activeSection === 'terapeutica' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                                            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                                            className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 relative z-10"
                                        >
                                            {therapeuticServices.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.3 + idx * 0.08, type: "spring", stiffness: 300 }}
                                                    className={`flex items-center gap-4 p-5 ${idx % 2 ? 'petal-alt' : 'petal'} bg-[#fbf7fd] dark:bg-dark-950 border border-purple-100 dark:border-dark-800 hover:border-[#82368C] hover:shadow-[0_16px_32px_-18px_rgba(130,54,140,0.5)] transition-all hover:-translate-y-1 group/item`}
                                                >
                                                    <span className="w-12 h-12 shrink-0 blob bg-white dark:bg-dark-900 shadow-sm flex items-center justify-center text-2xl group-hover/item:scale-110 transition-transform duration-300">{item.icon}</span>
                                                    <span className="text-sm md:text-base font-bold text-dark-700 dark:text-dark-200">{item.name}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                
                                {/* Background Decorative Circle */}
                                {activeSection === 'terapeutica' && (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#82368C]/5 rounded-full blur-3xl z-0 pointer-events-none"
                                    />
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 5. ¿A QUIÉNES ATENDEMOS? */}
                <section className="arupo-sheet overflow-hidden py-24 lg:py-28 bg-white dark:bg-dark-950">
                    <SectionDecor variant="soft" />
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-14">
                        <div className="md:w-1/2 w-full relative p-3 sm:p-5">
                            <div aria-hidden="true" className="arupo-deco inset-0 blob bg-gradient-to-br from-sky-300 via-[#0072BC] to-therapeutic-600 opacity-80 -rotate-6" />
                            <ArupoFlower className="-bottom-8 -right-6 w-32 h-32 text-therapeutic-500/40" strokeWidth={2.2} />
                            <img
                                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop"
                                alt="Atención inclusiva"
                                className="relative petal-lg shadow-2xl w-full object-cover aspect-[4/3] ring-4 ring-white dark:ring-dark-900"
                            />
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
                        { name: "Paola Sarabia", role: "Psicóloga Clínica", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1887&auto=format&fit=crop" },
                        { name: "Clara Peñafiel", role: "Psicóloga", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" },
                        { name: "Maria Narvaez", role: "Psicóloga", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop" },
                        { name: "Anshi Rodriguez", role: "Terapia del lenguaje", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
                        { name: "Byron Pergueza", role: "Terapia del lenguaje", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" },
                        { name: "Antonio Monar", role: "Psicólogo", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" },
                        { name: "Andres Ortega", role: "Fisioterapeuta", image: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=1887&auto=format&fit=crop" },
                    ]}
                />
                </div>

                {/* INFORMACIÓN DE CONTACTO Y HORARIOS (PREMIUM REDESIGN) */}
                <section className="arupo-sheet overflow-hidden py-28 lg:py-32 bg-white dark:bg-dark-950 px-4 sm:px-6 lg:px-8">
                    <SectionDecor variant="cool" />
                    <div className="relative z-10 max-w-6xl mx-auto arupo-card petal-lg overflow-hidden p-8 sm:p-10 md:p-16 flex flex-col md:flex-row gap-14 md:gap-16 items-center">
                        <div aria-hidden="true" className="arupo-halo -top-32 -left-24 w-96 h-96" style={{ background: 'radial-gradient(circle, rgba(0,114,188,0.22), transparent 70%)' }} />
                        <div aria-hidden="true" className="arupo-halo -bottom-32 right-0 w-96 h-96" style={{ background: 'radial-gradient(circle, rgba(130,61,131,0.22), transparent 70%)' }} />
                        <div className="relative md:w-1/2 space-y-10">
                            <div>
                                <h2 className="text-4xl sm:text-[2.75rem] font-extrabold text-dark-900 dark:text-white tracking-tight leading-[1.1] text-balance mb-4">Estamos aquí para <span className="text-cti">ayudarte</span></h2>
                                <p className="text-lg text-dark-500 dark:text-dark-400 font-light leading-relaxed">Ponte en contacto con nuestro equipo para agendar una cita o conocer más sobre nuestros servicios terapéuticos.</p>
                            </div>

                            <div className="space-y-3">
                                {/* Horario */}
                                <div className="group flex items-center gap-5 p-3 -mx-3 petal transition-colors duration-300 hover:bg-[#f6f4fb] dark:hover:bg-white/[0.04]">
                                    <div className="arupo-icon is-cti w-12 h-12">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-900 dark:text-white text-lg">Horario de Atención</h4>
                                        <p className="text-dark-500 dark:text-dark-400 mt-1">Lunes a Viernes</p>
                                        <p className="text-dark-800 dark:text-dark-200 font-medium">08:00 - 12:45 | 14:15 - 18:00</p>
                                    </div>
                                </div>

                                {/* Teléfono */}
                                <div className="group flex items-center gap-5 p-3 -mx-3 petal transition-colors duration-300 hover:bg-[#f6f4fb] dark:hover:bg-white/[0.04]">
                                    <div className="arupo-icon w-12 h-12">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-900 dark:text-white text-lg">Llámanos</h4>
                                        <p className="text-dark-500 dark:text-dark-400 mt-1">Central telefónica</p>
                                        <a href="tel:+593996768228" className="text-dark-800 dark:text-dark-200 font-medium hover:text-therapeutic-600 transition-colors">+593 99 676 8228</a>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="group flex items-center gap-5 p-3 -mx-3 petal transition-colors duration-300 hover:bg-[#f6f4fb] dark:hover:bg-white/[0.04]">
                                    <div className="arupo-icon w-12 h-12 !bg-gradient-to-br from-emerald-400 via-green-500 to-green-700 !shadow-[0_12px_24px_-12px_rgba(22,163,74,0.7)]">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.111-.352-.148-.973-.397-1.943-1.272-1.084-.979-1.815-2.185-2.025-2.54-.21-.355-.022-.547.155-.724.161-.161.353-.414.53-.621.174-.207.234-.355.352-.591.118-.236.059-.443-.03-.621-.088-.178-.778-1.879-1.066-2.571-.274-.658-.553-.568-.778-.578-.207-.008-.445-.011-.682-.011-.237 0-.621.089-.947.443-.326.355-1.244 1.214-1.244 2.959s1.274 3.433 1.451 3.67c.178.237 2.493 3.823 6.035 5.356 2.308.995 3.109.845 3.626.702.597-.165 1.839-.751 2.097-1.477.258-.726.258-1.348.181-1.477-.077-.13-.279-.207-.633-.385z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-900 dark:text-white text-lg">WhatsApp Directo</h4>
                                        <p className="text-dark-500 dark:text-dark-400 mt-1">Atención rápida por chat</p>
                                        <a href="https://wa.me/593996768228" target="_blank" rel="noopener noreferrer" className="text-dark-800 dark:text-dark-200 font-medium hover:text-green-600 transition-colors">+593 99 676 8228</a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="group flex items-center gap-5 p-3 -mx-3 petal transition-colors duration-300 hover:bg-[#f6f4fb] dark:hover:bg-white/[0.04]">
                                    <div className="arupo-icon is-cti w-12 h-12">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-900 dark:text-white text-lg">Escríbenos</h4>
                                        <p className="text-dark-500 dark:text-dark-400 mt-1">Correo electrónico</p>
                                        <a href="mailto:rrpparupocti@gmail.com" className="text-dark-800 dark:text-dark-200 font-medium hover:text-therapeutic-600 transition-colors break-all">rrpparupocti@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* QR Code Section */}
                        <div className="relative md:w-1/2 flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 text-center">Conecta al instante</h3>
                            <div className="relative mb-8 group">
                                <div aria-hidden="true" className="arupo-deco inset-0 petal-lg bg-gradient-to-br from-sky-400 via-[#0072BC] to-therapeutic-600 rotate-6 scale-105 transition-transform duration-500 group-hover:rotate-12" />
                                <ArupoFlower className="-top-10 -right-10 w-24 h-24 text-therapeutic-500/40" strokeWidth={2.4} />
                                <div className="relative bg-white p-4 petal-lg shadow-2xl flex items-center justify-center w-64 h-64">
                                    <img src={qrCentro} alt="Código QR Centro Terapéutico" className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105" />
                                </div>
                            </div>
                            <p className="text-sm font-medium text-dark-500 dark:text-dark-400 text-center max-w-xs">
                                Escanea este código para enviarnos un mensaje directo y agendar tu cita
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. CTA HUMANO Y DIRECTO - Buttons moved to Hero */}
            </div>
        </PageTransition>
    );
}
