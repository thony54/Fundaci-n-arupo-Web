import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/motion/PageTransition';
import Reveal from '../components/motion/Reveal';
import CountUp from '../components/motion/CountUp';
import Conventions from '../components/Conventions';
import Team from '../components/Team'; // Added Team component import

export default function TherapeuticCenter() {
    const [activeSection, setActiveSection] = useState(null); // 'medica' or 'terapeutica'

    const medicalServices = [
        { name: 'Neumología', icon: '🫁' },
        { name: 'Fonoaudiología', icon: '🗣️' },
        { name: 'Geriatría', icon: '🧓' },
        { name: 'Medicina General', icon: '🩺' },
        { name: 'Otorrinolaringología', icon: '👂' },
        { name: 'Psiquiatría', icon: '🧠' },
        { name: 'Pediatría', icon: '👶' },
        { name: 'Ginecología', icon: '♀️' },
        { name: 'Odontología', icon: '🦷' },
        { name: 'Examen Audiológico', icon: '🎧' },
    ];

    const therapeuticServices = [
        { name: 'Evaluación Integral', icon: '📋' },
        { name: 'Neuropsicología', icon: '🧩' },
        { name: 'Terapia de Lenguaje', icon: '💬' },
        { name: 'Terapia Física', icon: '🏃' },
        { name: 'Estimulación Temprana', icon: '🧸' },
        { name: 'Fisioterapia Acuática', icon: '🏊' },
        { name: 'Psicología', icon: '🛋️' },
        { name: 'Nutrición', icon: '🥗' },
        { name: 'Terapia Familiar', icon: '🫂' },
        { name: 'Psicoterapia Arte', icon: '🎨' },
        { name: 'Psicopedagogía', icon: '📚' },
        { name: 'Est. Multisensorial', icon: '✨' },
        { name: 'Escuela Padres', icon: '🏫' },
        { name: 'Cuidado Especial', icon: '🤲' },
        { name: 'Eval. ADIR/ADOS', icon: '📊' },
        { name: 'Capacitación', icon: '🎓' },
    ];

    return (
        <PageTransition>
            <div className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white transition-colors duration-300">
                {/* 1. HERO SOBRIO Y CLARO */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-dark-900/60 z-10" />
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/PORTADA ARUPO.jpg"
                            alt="Sesión de terapia inclusiva"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Centro Terapéutico
                        </h1>
                        <p className="text-xl sm:text-2xl text-therapeutic-100 font-light leading-relaxed max-w-3xl mx-auto">
                            Atención integral para personas con discapacidad y sus familias.
                        </p>
                    </div>
                </section>

                {/* 2. EL CENTRO TERAPÉUTICO EN CIFRAS */}
                <section className="py-16 bg-therapeutic-600 dark:bg-therapeutic-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
                            <div className="p-6">
                                <p className="text-5xl font-black mb-2">
                                    +<CountUp to={80} duration={2} />
                                </p>
                                <p className="text-lg font-medium opacity-90">Niñas, niños y personas atendidas</p>
                            </div>
                            <div className="p-6 border-y md:border-y-0 md:border-x border-therapeutic-500/30">
                                <p className="text-2xl font-bold mb-2 h-12 flex items-center justify-center">Atención Continua</p>
                                <p className="text-sm opacity-80">Procesos sostenidos en el tiempo</p>
                            </div>
                            <div className="p-6">
                                <p className="text-2xl font-bold mb-2 h-12 flex items-center justify-center">Enfoque Integral</p>
                                <p className="text-sm opacity-80">Mirada biopsicosocial y humana</p>
                            </div>
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

                {/* 4. NUESTROS SERVICIOS ESPECIALIZADOS (FUTURISTIC INTERACTIVE REDESIGN) */}
                <section id="servicios" className="py-24 bg-dark-950 relative overflow-hidden transition-colors duration-300">
                    {/* Futuristic Background Grids and Glows */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
                    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16 text-white">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Nuestras Áreas de Atención
                            </h2>
                            <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light leading-relaxed mb-4">
                                Explora nuestros servicios. Selecciona un área para descubrir nuestro enfoque especializado.
                            </p>
                            {/* Desktop Hint */}
                            <p className="text-sm text-cyan-400/80 animate-pulse hidden md:block uppercase tracking-widest font-bold">
                                [ HAZ CLIC EN LOS PANELES ]
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]">
                            {/* Área Médica Panel */}
                            <motion.div
                                layout
                                onClick={() => setActiveSection(activeSection === 'medica' ? null : 'medica')}
                                className={`group relative cursor-pointer rounded-[2rem] border transition-all duration-500 overflow-hidden flex flex-col items-center justify-start p-8 lg:p-12
                                    ${activeSection === 'medica' ? 'lg:flex-[2] bg-white/10 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.2)]' :
                                        activeSection === 'terapeutica' ? 'lg:flex-[0.5] opacity-50 bg-white/5 border-white/10 hover:opacity-100 hover:bg-white/10' :
                                            'lg:flex-1 bg-white/5 border-white/10 hover:border-cyan-500/50 hover:bg-white/10'}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <motion.div layout className="flex flex-col items-center gap-4 text-center z-10 relative">
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500
                                        ${activeSection === 'medica' ? 'bg-cyan-500 shadow-cyan-500/50 scale-110' : 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 ring-1 ring-cyan-500/30 group-hover:bg-cyan-500/50'}`}>
                                        <svg className={`w-10 h-10 ${activeSection === 'medica' ? 'text-white' : 'text-cyan-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    </div>
                                    <motion.h3 layout className={`font-bold transition-all duration-500 ${activeSection === 'medica' ? 'text-4xl text-cyan-300' : 'text-3xl text-white'}`}>
                                        Área Médica
                                    </motion.h3>
                                </motion.div>

                                <AnimatePresence>
                                    {activeSection === 'medica' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            className="w-full mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10"
                                        >
                                            {medicalServices.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-dark-900/50 border border-cyan-500/20 backdrop-blur-md hover:bg-cyan-500/10 hover:border-cyan-400 transition-all text-center gap-2 group/card"
                                                >
                                                    <span className="text-3xl drop-shadow-md group-hover/card:scale-110 transition-transform">{item.icon}</span>
                                                    <span className="text-sm font-medium text-cyan-50">{item.name}</span>
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
                                className={`group relative cursor-pointer rounded-[2rem] border transition-all duration-500 overflow-hidden flex flex-col items-center justify-start p-8 lg:p-12
                                    ${activeSection === 'terapeutica' ? 'lg:flex-[2] bg-white/10 border-purple-400 shadow-[0_0_40px_rgba(192,132,252,0.2)]' :
                                        activeSection === 'medica' ? 'lg:flex-[0.5] opacity-50 bg-white/5 border-white/10 hover:opacity-100 hover:bg-white/10' :
                                            'lg:flex-1 bg-white/5 border-white/10 hover:border-purple-500/50 hover:bg-white/10'}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <motion.div layout className="flex flex-col items-center gap-4 text-center z-10 relative">
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500
                                        ${activeSection === 'terapeutica' ? 'bg-purple-500 shadow-purple-500/50 scale-110' : 'bg-gradient-to-br from-purple-500/20 to-pink-600/20 ring-1 ring-purple-500/30 group-hover:bg-purple-500/50'}`}>
                                        <svg className={`w-10 h-10 ${activeSection === 'terapeutica' ? 'text-white' : 'text-purple-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <motion.h3 layout className={`font-bold transition-all duration-500 ${activeSection === 'terapeutica' ? 'text-4xl text-purple-300' : 'text-3xl text-white'}`}>
                                        Área Terapéutica
                                    </motion.h3>
                                </motion.div>

                                <AnimatePresence>
                                    {activeSection === 'terapeutica' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            className="w-full mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative z-10"
                                        >
                                            {therapeuticServices.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.03 }}
                                                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-dark-900/50 border border-purple-500/20 backdrop-blur-md hover:bg-purple-500/10 hover:border-purple-400 transition-all text-center gap-2 group/card"
                                                >
                                                    <span className="text-3xl drop-shadow-md group-hover/card:scale-110 transition-transform">{item.icon}</span>
                                                    <span className="text-xs font-medium text-purple-50">{item.name}</span>
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
                        { name: "Nombre Apellido", role: "Psicóloga Clínica", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1887&auto=format&fit=crop" },
                        { name: "Nombre Apellido", role: "Fisioterapeuta", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" },
                        { name: "Nombre Apellido", role: "Terapeuta de Lenguaje", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop" },
                        { name: "Nombre Apellido", role: "Psicopedagoga", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
                        { name: "Nombre Apellido", role: "Neuropsicólogo", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" },
                        { name: "Nombre Apellido", role: "Nutricionista", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" },
                        { name: "Nombre Apellido", role: "Trabajadora Social", image: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=1887&auto=format&fit=crop" },
                        { name: "Nombre Apellido", role: "Terapeuta Ocupacional", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop" },
                    ]}
                /> {/* Updated to show 8 therapists as requested */}

                {/* INFORMACIÓN DE CONTACTO Y HORARIOS (NUEVO) */}
                <section className="py-24 bg-white dark:bg-dark-950 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto bg-dark-50 dark:bg-dark-900 rounded-3xl p-8 md:p-12 shadow-xl border border-dark-100 dark:border-dark-800 flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-2/3 space-y-6">
                            <h2 className="text-3xl font-bold text-dark-900 dark:text-white">Información y Citas</h2>

                            <div className="space-y-4">
                                {/* Horario */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-900 dark:text-white">Horario de Atención</h4>
                                        <p className="text-dark-600 dark:text-dark-300">Lunes a viernes</p>
                                        <p className="text-dark-600 dark:text-dark-300 font-medium">08h00 am a 12h45 | 14h15 a 18h00</p>
                                    </div>
                                </div>

                                {/* Teléfono */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-600 shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-900 dark:text-white">Llámanos</h4>
                                        <p className="text-dark-600 dark:text-dark-300">(02) 234-5678</p>
                                    </div>
                                </div>

                                {/* Redes y WhatsApp */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 shrink-0">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.111-.352-.148-.973-.397-1.943-1.272-1.084-.979-1.815-2.185-2.025-2.54-.21-.355-.022-.547.155-.724.161-.161.353-.414.53-.621.174-.207.234-.355.352-.591.118-.236.059-.443-.03-.621-.088-.178-.778-1.879-1.066-2.571-.274-.658-.553-.568-.778-.578-.207-.008-.445-.011-.682-.011-.237 0-.621.089-.947.443-.326.355-1.244 1.214-1.244 2.959s1.274 3.433 1.451 3.67c.178.237 2.493 3.823 6.035 5.356 2.308.995 3.109.845 3.626.702.597-.165 1.839-.751 2.097-1.477.258-.726.258-1.348.181-1.477-.077-.13-.279-.207-.633-.385z" /></svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-dark-900 dark:text-white">WhatsApp & Redes</h4>
                                        <p className="text-dark-600 dark:text-dark-300 mb-2">+593 99 999 9999</p>
                                        <div className="flex gap-3">
                                            <a href="#" className="w-8 h-8 rounded-full bg-dark-200 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-400 hover:bg-primary-500 hover:text-white transition-all"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a>
                                            <a href="#" className="w-8 h-8 rounded-full bg-dark-200 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-400 hover:bg-primary-500 hover:text-white transition-all"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                                            <a href="#" className="w-8 h-8 rounded-full bg-dark-200 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-400 hover:bg-primary-500 hover:text-white transition-all"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="md:w-1/3 flex flex-col items-center justify-center">
                            <div className="bg-white p-4 rounded-2xl shadow-lg border border-dark-100 flex items-center justify-center aspect-square w-48 mb-4 relative group">
                                <img src="/vite.svg" alt="Código QR temporal" className="w-full h-full object-contain opacity-50 filter blur-sm group-hover:blur-none transition-all" />
                                <div className="absolute inset-0 flex items-center justify-center text-center font-bold text-dark-800 opacity-100 group-hover:opacity-0 transition-opacity">
                                    [ Tu Código QR Aquí ]
                                </div>
                            </div>
                            <p className="text-sm font-medium text-dark-500 text-center">Escanea para contactarnos directo por WhatsApp</p>
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
