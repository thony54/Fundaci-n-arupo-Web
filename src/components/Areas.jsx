import { motion } from 'framer-motion';

const areas = [
    {
        title: 'Inclusión y discapacidad',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        items: [
            'Atención terapéutica integral',
            'Rehabilitación comunitaria',
            'Accesibilidad educativa',
            'Gestión de ayudas técnicas',
            'Programas de autonomía'
        ],
        span: 'md:col-span-2 md:row-span-2',
        color: 'bg-primary-600 dark:bg-primary-600',
        textColor: 'text-white',
        itemClass: 'text-white/90 border-white/20'
    },
    {
        title: 'Movilidad humana',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        items: ['Atención a refugiados', 'Protección de derechos', 'Integración comunitaria', 'Apoyo psicosocial'],
        span: 'md:col-span-1 md:row-span-1',
        color: 'bg-dark-100 dark:bg-dark-900',
        textColor: 'text-dark-900 dark:text-white',
        itemClass: 'text-dark-600 dark:text-dark-300 border-dark-200 dark:border-dark-800'
    },
    {
        title: 'Incidencia y políticas',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        items: ['Asesoría a gobiernos', 'Ordenanzas inclusivas', 'Capacitación a servidores'],
        span: 'md:col-span-1 md:row-span-2',
        color: 'bg-dark-900 dark:bg-dark-950',
        textColor: 'text-white',
        itemClass: 'text-dark-300 border-dark-700'
    },
    {
        title: 'Desarrollo económico',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        items: ['Emprendimientos', 'Empleabilidad', 'Formación técnica'],
        span: 'md:col-span-1 md:row-span-1',
        color: 'bg-accent-400 dark:bg-accent-500',
        textColor: 'text-dark-950',
        itemClass: 'text-dark-800 border-dark-900/10'
    },
    {
        title: 'Acción humanitaria',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        items: ['Brigadas comunitarias', 'Emergencias sociales', 'Sensibilización'],
        span: 'md:col-span-2 md:row-span-1',
        color: 'bg-white dark:bg-dark-900',
        textColor: 'text-dark-900 dark:text-white',
        itemClass: 'text-dark-600 dark:text-dark-300 border-dark-100 dark:border-dark-800 border border-dark-100 dark:border-dark-800 shadow-sm'
    }
];

export default function Areas() {
    return (
        <section id="areas" className="py-32 bg-white dark:bg-dark-950 transition-colors duration-300" aria-labelledby="areas-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-4 flex items-center gap-3">
                            <span className="w-8 h-px bg-primary-600 dark:bg-primary-400"></span>
                            Líneas de Trabajo
                        </p>
                        <h2 id="areas-heading" className="text-4xl sm:text-5xl font-black text-dark-900 dark:text-white tracking-tight leading-[1.1]">
                            5 pilares para el <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-400 to-dark-800 dark:from-dark-200 dark:to-dark-500">desarrollo integral</span>
                        </h2>
                    </div>
                    <p className="text-dark-500 dark:text-dark-400 max-w-md text-lg font-light leading-relaxed">
                        Fundación Arupo desarrolla sus acciones de manera estratégica a través de enfoques programáticos especializados y adaptados a las necesidades reales del territorio.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(250px,auto)] gap-4 sm:gap-6">
                    {areas.map((area, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                            className={`group relative rounded-[2rem] p-8 sm:p-10 transition-transform duration-500 hover:scale-[1.02] flex flex-col justify-between overflow-hidden ${area.span} ${area.color}`}
                        >
                            {/* Decorative gradient orb for dark cards */}
                            {(area.color.includes('bg-dark-900') || area.color.includes('bg-primary-600')) && (
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-1000" />
                            )}
                            
                            <div className="relative z-10 flex justify-between items-start mb-8">
                                <div className={`inline-flex items-center justify-center ${area.span.includes('col-span-2') ? 'w-16 h-16' : 'w-12 h-12'} rounded-2xl bg-white/10 backdrop-blur-sm ${area.textColor} group-hover:scale-110 transition-transform duration-500`}>
                                    {area.icon}
                                </div>
                                {area.span.includes('col-span-2') && (
                                    <div className="hidden sm:flex flex-wrap justify-end gap-2 max-w-[60%]">
                                        {area.items.slice(0, 3).map((item, i) => (
                                            <span key={i} className={`text-xs font-medium px-3 py-1.5 rounded-full border ${area.itemClass} bg-white/5 backdrop-blur-sm`}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            <div className="relative z-10 mt-auto">
                                <h3 className={`font-black ${area.span.includes('col-span-2') ? 'text-3xl sm:text-4xl' : 'text-2xl'} ${area.textColor} mb-4 tracking-tight`}>
                                    {area.title}
                                </h3>
                                
                                {(!area.span.includes('col-span-2') || area.span === 'md:col-span-2 md:row-span-1') && (
                                    <ul className="space-y-2.5">
                                        {area.items.map((item, i) => (
                                            <li key={i} className={`flex items-center gap-3 text-sm font-medium ${area.itemClass} border-none`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
