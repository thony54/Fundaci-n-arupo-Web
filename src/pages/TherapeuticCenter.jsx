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
                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center mt-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-therapeutic-500/10 border border-therapeutic-500/20 text-therapeutic-300 text-sm font-semibold mb-8 uppercase tracking-widest">
                            <span className="inline-block w-2 h-2 rounded-full bg-therapeutic-400 animate-pulse" aria-hidden="true" />
                            Centro Terapéutico Arupo
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.2] tracking-tight max-w-5xl mx-auto">
                            Somos un espacio especializado y multidisciplinario que brinda atención integral a{' '}
                            <span className="bg-gradient-to-r from-[#0072BC] via-[#82368C] to-[#E6007E] bg-clip-text text-transparent">
                                niños, adolescentes, personas adultas y sus familias.
                            </span>
                        </h1>

                        <p className="mt-8 text-lg md:text-xl text-dark-300 max-w-4xl mx-auto leading-relaxed font-light">
                            Nuestro enfoque se centra en el desarrollo de habilidades para la vida, la inclusión educativa y la participación activa en la comunidad, mediante procesos terapéuticos personalizados, acompañamiento familiar y estrategias accesibles.
                        </p>
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
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-dark-900 dark:text-white">¿Qué es el Centro Terapéutico Arupo?</h2>
                    <p className="text-xl leading-relaxed text-dark-600 dark:text-dark-300">
                        Somos una institución sin fines de lucro, prestadora de servicios terapéuticos integrales comprometida con la promoción, prevención, evaluación, diagnostico e intervención, orientada a optimizar las habilidades motoras, comunicativas, conductuales y sociales, a personas que tengan alteración en las diferentes áreas del desarrollo neurológico, beneficiándolos en la adaptación e integración social y escolar.
                        Te presentamos a continuación los servicios que dispone el Centro Terapéutico Arupo
                    </p>
                </section>

                {/* 4. NUESTROS SERVICIOS ESPECIALIZADOS */}
                <section id="servicios" className="py-24 bg-dark-50 dark:bg-dark-950 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-white tracking-tight">
                                Áreas de Atención Especializada
                            </h2>
                            <p className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
                                Descubre nuestro enfoque integral, estructurado en áreas especializadas para brindar el acompañamiento más completo y humano.
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-[450px]">
                            {/* Área Médica Panel */}
                            <motion.div
                                layout
                                onClick={() => setActiveSection(activeSection === 'medica' ? null : 'medica')}
                                className={`group cursor-pointer rounded-2xl border transition-all duration-500 flex flex-col p-8
                                    ${activeSection === 'medica' ? 'lg:flex-[2] bg-white dark:bg-dark-900 border-therapeutic-500 shadow-xl' :
                                        activeSection === 'terapeutica' ? 'lg:flex-[0.5] opacity-60 bg-white/60 dark:bg-dark-900/40 border-transparent hover:opacity-100 hover:bg-white dark:hover:bg-dark-900' :
                                            'lg:flex-1 bg-white dark:bg-dark-900 border-dark-100 dark:border-dark-800 hover:border-therapeutic-200 shadow-md'}`}
                            >
                                <motion.div layout className="flex flex-col items-start gap-4">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500
                                        ${activeSection === 'medica' ? 'bg-therapeutic-600 text-white shadow-md' : 'bg-therapeutic-50 dark:bg-therapeutic-900/30 text-therapeutic-600'}`}>
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    </div>
                                    <motion.h3 layout className={`font-bold transition-all duration-500 ${activeSection === 'medica' ? 'text-3xl text-dark-900 dark:text-white' : 'text-xl text-dark-800 dark:text-white'}`}>
                                        Área Médica
                                    </motion.h3>
                                </motion.div>

                                <AnimatePresence>
                                    {activeSection === 'medica' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                                        >
                                            {medicalServices.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className="flex items-center gap-3 p-4 rounded-xl bg-dark-50 dark:bg-dark-950 border border-dark-100 dark:border-dark-800"
                                                >
                                                    <span className="text-xl">{item.icon}</span>
                                                    <span className="text-sm font-semibold text-dark-700 dark:text-dark-200">{item.name}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Área Terapéutica Panel */}
                            <motion.div
                                layout
                                onClick={() => setActiveSection(activeSection === 'terapeutica' ? null : 'terapeutica')}
                                className={`group cursor-pointer rounded-2xl border transition-all duration-500 flex flex-col p-8
                                    ${activeSection === 'terapeutica' ? 'lg:flex-[2] bg-white dark:bg-dark-900 border-therapeutic-500 shadow-xl' :
                                        activeSection === 'medica' ? 'lg:flex-[0.5] opacity-60 bg-white/60 dark:bg-dark-900/40 border-transparent hover:opacity-100 hover:bg-white dark:hover:bg-dark-900' :
                                            'lg:flex-1 bg-white dark:bg-dark-900 border-dark-100 dark:border-dark-800 hover:border-therapeutic-200 shadow-md'}`}
                            >
                                <motion.div layout className="flex flex-col items-start gap-4">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500
                                        ${activeSection === 'terapeutica' ? 'bg-therapeutic-600 text-white shadow-md' : 'bg-therapeutic-50 dark:bg-therapeutic-900/30 text-therapeutic-600'}`}>
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <motion.h3 layout className={`font-bold transition-all duration-500 ${activeSection === 'terapeutica' ? 'text-3xl text-dark-900 dark:text-white' : 'text-xl text-dark-800 dark:text-white'}`}>
                                        Área Terapéutica
                                    </motion.h3>
                                </motion.div>

                                <AnimatePresence>
                                    {activeSection === 'terapeutica' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                                        >
                                            {therapeuticServices.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className="flex items-center gap-3 p-4 rounded-xl bg-dark-50 dark:bg-dark-950 border border-dark-100 dark:border-dark-800"
                                                >
                                                    <span className="text-xl">{item.icon}</span>
                                                    <span className="text-sm font-semibold text-dark-700 dark:text-dark-200">{item.name}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 5. ¿A QUIÉNES ATENDEMOS? */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop"
                                alt="Atención inclusiva"
                                className="rounded-2xl shadow-xl w-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-8">¿A quiénes atendemos?</h2>
                            <ul className="space-y-4">
                                {[
                                    'Niñas y niños con discapacidad',
                                    'Personas con discapacidad',
                                    'Familias y cuidadores',
                                    'Personas en contextos de vulnerabilidad'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-dark-700 dark:text-dark-200">
                                        <svg className="w-6 h-6 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 6. METODOLOGÍA DE TRABAJO */}
                <section className="py-20 bg-therapeutic-50 dark:bg-dark-900/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-16 text-center">Metodología de Trabajo</h2>
                        <div className="relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-therapeutic-200 dark:bg-therapeutic-900 -translate-y-1/2 z-0" />

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                                {[
                                    { step: '1', title: 'Evaluación Integral' },
                                    { step: '2', title: 'Plan de Acompañamiento' },
                                    { step: '3', title: 'Trabajo Terapéutico' },
                                    { step: '4', title: 'Apoyo Familiar' },
                                    { step: '5', title: 'Seguimiento' },
                                ].map((phase, idx) => (
                                    <div key={idx} className="bg-white dark:bg-dark-950 p-6 rounded-xl border border-therapeutic-100 dark:border-therapeutic-900/50 text-center shadow-lg">
                                        <div className="w-10 h-10 mx-auto mb-4 bg-therapeutic-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                            {phase.step}
                                        </div>
                                        <h3 className="font-bold text-dark-800 dark:text-white">{phase.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. ARTICULACIÓN & 8. ACCESIBILIDAD */}
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
                    <div className="bg-dark-50 dark:bg-dark-900 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <svg className="w-8 h-8 text-therapeutic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            Articulación Institucional
                        </h3>
                        <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                            El Centro Terapéutico no trabaja de forma aislada. Se articula estrechamente con otros proyectos sociales de Fundación Arupo y forma parte activa de redes institucionales y comunitarias para garantizar una atención completa.
                        </p>
                    </div>
                    <div className="bg-dark-50 dark:bg-dark-900 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <svg className="w-8 h-8 text-therapeutic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            Accesibilidad Real
                        </h3>
                        <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                            Contamos con espacios físicamente adaptados, comunicación accesible y un compromiso inquebrantable con la atención digna, realizando los ajustes razonables necesarios para cada persona.
                        </p>
                    </div>
                </section>

                <Team
                    variant="therapeutic"
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

                {/* INFORMACIÓN DE CONTACTO Y HORARIOS (PREMIUM REDESIGN) */}
                <section className="py-28 bg-white dark:bg-dark-950 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto bg-white dark:bg-dark-900 rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none border border-dark-100 dark:border-dark-800 flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2 space-y-10">
                            <div>
                                <h2 className="text-4xl font-extrabold text-dark-900 dark:text-white tracking-tight mb-4">Estamos aquí para ayudarte</h2>
                                <p className="text-lg text-dark-500 dark:text-dark-400 font-light leading-relaxed">Ponte en contacto con nuestro equipo para agendar una cita o conocer más sobre nuestros servicios terapéuticos.</p>
                            </div>

                            <div className="space-y-8">
                                {/* Horario */}
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-therapeutic-50 dark:bg-therapeutic-900/20 flex items-center justify-center text-therapeutic-600 shrink-0">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-900 dark:text-white text-lg">Horario de Atención</h4>
                                        <p className="text-dark-500 dark:text-dark-400 mt-1">Lunes a Viernes</p>
                                        <p className="text-dark-800 dark:text-dark-200 font-medium">08:00 - 12:45 | 14:15 - 18:00</p>
                                    </div>
                                </div>

                                {/* Teléfono */}
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 shrink-0">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-900 dark:text-white text-lg">Llámanos</h4>
                                        <p className="text-dark-500 dark:text-dark-400 mt-1">Central telefónica</p>
                                        <p className="text-dark-800 dark:text-dark-200 font-medium">(02) 234-5678</p>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 shrink-0">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.111-.352-.148-.973-.397-1.943-1.272-1.084-.979-1.815-2.185-2.025-2.54-.21-.355-.022-.547.155-.724.161-.161.353-.414.53-.621.174-.207.234-.355.352-.591.118-.236.059-.443-.03-.621-.088-.178-.778-1.879-1.066-2.571-.274-.658-.553-.568-.778-.578-.207-.008-.445-.011-.682-.011-.237 0-.621.089-.947.443-.326.355-1.244 1.214-1.244 2.959s1.274 3.433 1.451 3.67c.178.237 2.493 3.823 6.035 5.356 2.308.995 3.109.845 3.626.702.597-.165 1.839-.751 2.097-1.477.258-.726.258-1.348.181-1.477-.077-.13-.279-.207-.633-.385z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-900 dark:text-white text-lg">WhatsApp Directo</h4>
                                        <p className="text-dark-500 dark:text-dark-400 mt-1">Atención rápida por chat</p>
                                        <p className="text-dark-800 dark:text-dark-200 font-medium">+593 99 999 9999</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* QR Code Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 text-center">Conecta al instante</h3>
                            <div className="bg-white p-4 rounded-3xl shadow-xl border border-dark-100 flex items-center justify-center w-64 h-64 mb-6 relative group hover:border-primary-300 transition-all">
                                <img src={qrCentro} alt="Código QR Centro Terapéutico" className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105" />
                            </div>
                            <p className="text-sm font-medium text-dark-500 dark:text-dark-400 text-center max-w-xs">
                                Escanea este código para enviarnos un mensaje directo y agendar tu cita
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. CTA HUMANO Y DIRECTO */}
                <section className="py-24 text-center px-4 bg-gradient-to-b from-white to-therapeutic-50 dark:from-dark-950 dark:to-dark-900">
                    <h2 className="text-4xl font-bold mb-6">Estamos aquí para acompañarte</h2>
                    <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto mb-10">
                        Si necesitas orientación o quieres conocer más sobre nuestro proceso de atención, no dudes en contactarnos.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/#contacto"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-therapeutic-600 text-white hover:bg-therapeutic-700 transition-all shadow-lg hover:scale-105"
                        >
                            Solicitar Información
                        </Link>
                        <Link
                            to="/#voluntariado"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full border-2 border-therapeutic-600 text-therapeutic-600 dark:text-therapeutic-400 dark:border-therapeutic-400 hover:bg-therapeutic-50 dark:hover:bg-therapeutic-900/30 transition-all hover:scale-105"
                        >
                            Quiero apoyar
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
