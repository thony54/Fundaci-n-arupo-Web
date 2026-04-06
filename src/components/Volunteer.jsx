export default function Volunteer() {
    return (
        <section id="voluntariado" className="py-24 bg-dark-50 dark:bg-dark-900 transition-colors duration-300" aria-labelledby="volunteer-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-dark-900 p-10 sm:p-16">
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-300/10 rounded-full blur-3xl" aria-hidden="true" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-primary-200 mb-3">
                                Voluntariado
                            </p>
                            <h2
                                id="volunteer-heading"
                                className="text-3xl sm:text-4xl font-bold text-white leading-tight"
                            >
                                Tu tiempo puede cambiar la vida de alguien
                            </h2>
                            <p className="mt-6 text-primary-100/90 text-lg leading-relaxed">
                                Únete a nuestra red de voluntarias y voluntarios que, desde la diversidad,
                                construyen una sociedad más justa. No importa tu edad, profesión u
                                origen – lo que importa es tu compromiso con los derechos humanos.
                            </p>
                            <p className="mt-4 text-primary-100/80 leading-relaxed">
                                Ofrecemos oportunidades de voluntariado local e internacional en
                                acompañamiento comunitario, producción audiovisual, accesibilidad digital,
                                educación y campañas de sensibilización.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="#contacto"
                                    className="inline-flex items-center px-7 py-3.5 text-base font-semibold rounded-full bg-white text-primary-700 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                    aria-label="Postularse como voluntario"
                                >
                                    Postularse ahora
                                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                                <a
                                    href="#proyectos"
                                    className="inline-flex items-center px-7 py-3.5 text-base font-semibold rounded-full border-2 border-white/30 text-white hover:border-white/60 transition-all duration-300"
                                    aria-label="Ver proyectos actuales"
                                >
                                    Ver proyectos
                                </a>
                            </div>
                        </div>

                        {/* Feature points */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { title: 'Voluntariado local', desc: 'Acciones directas en Imbabura y Ecuador' },
                                { title: 'Internacional', desc: 'Oportunidades con ACNUR y aliados globales' },
                                { title: 'Jóvenes diversos', desc: 'Espacios seguros para todas las identidades' },
                                { title: 'Impacto real', desc: 'Proyectos con resultados medibles y sostenibles' },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors duration-300"
                                >
                                    <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                                    <p className="text-primary-200 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
