import { Link } from 'react-router-dom';
import CountUp from '../components/motion/CountUp';


const stats = [
    {
        number: <><CountUp to={55000} duration={2} />+</>,
        label: 'Personas Beneficiadas',
        description: 'Migrantes, personas con discapacidad, comunidades LGBTIQ+ y jóvenes atendidos directamente.',
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
    {
        number: <><CountUp to={50} duration={1.5} />+</>,
        label: 'Alianzas Estratégicas',
        description: 'Colaboramos con ACNUR, GTRM, Prefectura de Imbabura y organizaciones nacionales e internacionales.',
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.026a.387.387 0 01-.573.342l-1.82-.962a1.575 1.575 0 00-2.228 2.228l.962 1.82a.387.387 0 01-.342.573H0a1.575 1.575 0 000 3.15h3.026c.152 0 .272.136.342.342l-.962 1.82a1.575 1.575 0 102.228 2.228l1.82-.962a.387.387 0 01.573.342v3.026a1.575 1.575 0 003.15 0v-3.026c0-.152.136-.272.342-.342l1.82.962a1.575 1.575 0 102.228-2.228l-.962-1.82a.387.387 0 01.342-.573h3.026a1.575 1.575 0 000-3.15h-3.026a.387.387 0 01-.342-.342l.962-1.82a1.575 1.575 0 10-2.228-2.228l-1.82.962a.387.387 0 01-.573-.342V4.575z" />
            </svg>
        ),
    },
    {
        number: <CountUp to={9} duration={1.5} />,
        label: 'Provincias de Acción',
        description: 'Presencia activa en Imbabura, Pichincha, Carchi y otras provincias del Ecuador.',
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
    },
    {
        number: <><CountUp to={20} duration={2} />+</>,
        label: 'Proyectos Ejecutados',
        description: 'Campañas de sensibilización, intervenciones comunitarias, producción audiovisual y más.',
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
        ),
    },
];

export default function Impact() {
    return (
        <section id="impacto" className="relative py-24 overflow-hidden" aria-labelledby="impact-heading">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-primary-900" aria-hidden="true" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-400 mb-3">
                        Nuestro Impacto
                    </p>
                    <h2 id="impact-heading" className="text-3xl sm:text-4xl font-bold text-white">
                        Resultados que transforman vidas
                    </h2>
                    <p className="mt-4 text-dark-300 text-lg">
                        Cada número representa historias de resiliencia, dignidad y esperanza.
                        Nuestro compromiso se refleja en resultados concretos.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/10 hover:border-primary-400/30 hover:-translate-y-1"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-500/10 text-primary-400 mb-5 group-hover:bg-primary-500/20 transition-colors duration-300">
                                {stat.icon}
                            </div>
                            <p className="text-4xl font-black text-white mb-2">{stat.number}</p>
                            <p className="text-lg font-semibold text-primary-300 mb-2">{stat.label}</p>
                            <p className="text-sm text-dark-400 leading-relaxed">{stat.description}</p>
                        </div>
                    ))}
                </div>

                {/* Territory Navigation */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-white mb-8">Explora nuestros territorios de impacto</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            to="/impacto/imbabura"
                            className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 w-64 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h4 className="text-xl font-bold text-white mb-2 relative z-10">Imbabura</h4>
                            <p className="text-sm text-primary-200 relative z-10">Movilidad Humana e Inclusión</p>
                        </Link>
                        <Link
                            to="/impacto/pichincha"
                            className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 w-64 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h4 className="text-xl font-bold text-white mb-2 relative z-10">Pichincha</h4>
                            <p className="text-sm text-primary-200 relative z-10">Innovación Social y Política</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
