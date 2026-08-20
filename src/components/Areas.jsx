import SectionHeading from './SectionHeading';
import TiltCard from './motion/TiltCard';
import { Stagger, StaggerItem } from './motion/Stagger';

const areas = [
    {
        title: 'Inclusión y discapacidad',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        items: [
            'Atención terapéutica integral',
            'Procesos de rehabilitación comunitaria',
            'Accesibilidad e inclusión educativa',
            'Entrega y gestión de ayudas técnicas',
            'Programas de autonomía e independencia'
        ]
    },
    {
        title: 'Movilidad humana y protección',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        items: [
            'Atención a personas refugiadas con discapacidad',
            'Protección de derechos en contextos migratorios',
            'Integración comunitaria',
            'Apoyo psicosocial a familias',
            'Acceso a servicios básicos'
        ]
    },
    {
        title: 'Incidencia y políticas públicas',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        items: [
            'Asesoría a gobiernos locales',
            'Construcción de ordenanzas inclusivas',
            'Fortalecimiento de Consejos de Protección de Derechos',
            'Capacitación a servidores públicos',
            'Elaboración de rutas de atención'
        ]
    },
    {
        title: 'Desarrollo económico inclusivo',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        items: [
            'Emprendimientos inclusivos',
            'Empleabilidad para personas con discapacidad',
            'Formación técnica y ocupacional',
            'Economía social y solidaria',
            'Proyectos productivos comunitarios'
        ]
    },
    {
        title: 'Acción humanitaria y territorio',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        items: [
            'Brigadas comunitarias inclusivas.',
            'Asistencia a población en pobreza extrema.',
            'Campañas de sensibilización.',
            'Atención en emergencias sociales.',
            'Actividades comunitarias inclusivas.'
        ]
    }
];

export default function Areas() {
    return (
        <section id="areas" className="py-24 bg-dark-50 dark:bg-dark-900 transition-colors duration-300" aria-labelledby="areas-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <SectionHeading
                    eyebrow="Líneas de Trabajo"
                    title="Fundación Arupo desarrolla sus acciones a través de cinco líneas programáticas"
                    titleId="areas-heading"
                />

                {/* Cards Grid */}
                <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
                    {areas.map((area, idx) => (
                        <StaggerItem key={idx} variant="card" className="group h-full" style={{ transformStyle: 'preserve-3d' }}>
                            <TiltCard className="group rounded-3xl h-full" max={6}>
                                <article
                                    className="arupo-sheen relative bg-white dark:bg-dark-950 rounded-3xl border border-dark-100 dark:border-dark-800 p-8 transition-colors duration-300 group-hover:border-primary-200 dark:group-hover:border-primary-800 shadow-sm group-hover:shadow-2xl overflow-hidden flex flex-col h-full"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-50 to-transparent dark:from-primary-900/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                        {area.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {area.title}
                                    </h3>

                                    <ul className="flex-1 space-y-3">
                                        {area.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                                                <span className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </TiltCard>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
