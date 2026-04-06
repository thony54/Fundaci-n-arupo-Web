export default function CTA() {
    return (
        <section
            id="dona"
            className="relative py-24 overflow-hidden"
            aria-labelledby="cta-heading"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-primary-900 to-dark-900" aria-hidden="true" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary-300 mb-4">
                    Sé parte del cambio
                </p>
                <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                    Juntos podemos construir un Ecuador{' '}
                    <span className="bg-gradient-to-r from-primary-300 to-accent-400 bg-clip-text text-transparent">
                        más justo e inclusivo
                    </span>
                </h2>
                <p className="mt-6 text-lg text-dark-300 max-w-2xl mx-auto leading-relaxed">
                    Tu apoyo transforma vidas. Cada donación, alianza o acción de voluntariado
                    contribuye directamente al bienestar de miles de personas en situación de
                    vulnerabilidad.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#contacto"
                        className="inline-flex items-center px-8 py-4 text-base font-bold rounded-full bg-gradient-to-r from-accent-400 to-accent-500 text-dark-900 hover:from-accent-300 hover:to-accent-400 transition-all duration-300 shadow-xl shadow-accent-500/25 hover:shadow-accent-400/40 hover:scale-105"
                        aria-label="Realizar una donación"
                    >
                        Donar
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </a>
                    <a
                        href="#contacto"
                        className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        aria-label="Crear una alianza con Fundación Arupo"
                    >
                        Aliarse
                    </a>
                    <a
                        href="#voluntariado"
                        className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-200 hover:bg-primary-500/30 transition-all duration-300 hover:scale-105"
                        aria-label="Participar como voluntario"
                    >
                        Participar
                    </a>
                </div>

                {/* QR Code Section */}
                <div className="mt-20 flex flex-col items-center justify-center pt-12 border-t border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-8">Conecta con nosotros al instante</h3>
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-white p-4 rounded-2xl shadow-lg border border-dark-100 flex items-center justify-center aspect-square w-48 mb-4 relative group">
                            <img src="/QR/Fundación Arupo QR.png" alt="Código QR Fundación Arupo" className="w-full h-full object-contain opacity-50 filter blur-sm group-hover:blur-none transition-all" />
                            <div className="absolute inset-0 flex items-center justify-center text-center font-bold text-dark-800 opacity-100 group-hover:opacity-0 transition-opacity">
                                [ Escanear QR ]
                            </div>
                        </div>
                        <p className="text-sm font-medium text-primary-200 text-center">Escanea para contactarnos directo por WhatsApp</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
