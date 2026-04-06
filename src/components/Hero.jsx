import InclusionNetwork from './InclusionNetwork';

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900" />
                <InclusionNetwork />
                {/* Decorative shapes */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl" />
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
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-8">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-400 animate-pulse" aria-hidden="true" />
                    Innovación Social desde Ecuador
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight max-w-5xl mx-auto">
                    Construimos un mundo{' '}
                    <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400 bg-clip-text text-transparent">
                        más inclusivo
                    </span>{' '}
                    con tecnología y derechos humanos
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed">
                    Acompañamos a personas en movilidad humana, comunidades LGBTIQ+,
                    personas con discapacidad y jóvenes en situación de vulnerabilidad
                    hacia una vida digna y plena.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#dona"
                        className="inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 transition-all duration-300 shadow-xl shadow-primary-500/25 hover:shadow-primary-400/40 hover:scale-105"
                        aria-label="Realizar una donación"
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
                </div>

                {/* Stats bar */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
                    {[
                        { number: '55,000+', label: 'Atenciones' },
                        { number: '50+', label: 'Alianzas estratégicas' },
                        { number: '20+', label: 'Provincias alcanzadas' },
                        { number: '1', label: 'Centro de atención' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</p>
                            <p className="mt-1 text-sm text-dark-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
        </section>
    );
}
