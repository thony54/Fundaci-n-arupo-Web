import SectionDecor, { PhotoBackdrop } from './ui/Decor';
import fotoVoluntariado from '../assets/secciones/voluntariado.webp';

export default function Volunteer() {
    return (
        <section id="voluntariado" className="relative py-24 lg:py-28 bg-cream-50 dark:bg-night-900 transition-colors duration-300 overflow-hidden" aria-labelledby="volunteer-heading">
            <SectionDecor variant="warm" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 lg:pr-8">
                        <p className="arupo-eyebrow mb-6">
                            Voluntariado
                        </p>
                        <h2
                            id="volunteer-heading"
                            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-dark-900 dark:text-white leading-[1.05] mb-6"
                        >
                            Tu tiempo puede <br />
                            <span className="text-arupo">cambiar vidas</span>
                        </h2>
                        <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 leading-relaxed max-w-xl">
                            Únete a nuestra red de voluntariado. No importa tu edad, profesión u
                            origen – lo que importa es tu compromiso con los derechos humanos y la inclusión.
                        </p>
                        
                        <div className="space-y-4 mb-10 max-w-md">
                             {[
                                { title: 'Voluntariado Local', desc: 'Acciones directas e impacto en comunidades en Ecuador.' },
                                { title: 'Voluntariado Internacional', desc: 'Oportunidades globales de colaboración con aliados.' },
                            ].map((item) => (
                                <div key={item.title} className="group arupo-card arupo-card-hover petal flex gap-4 items-center p-4 pr-6">
                                    <div className="arupo-icon w-12 h-12">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-dark-900 dark:text-white">{item.title}</h3>
                                        <p className="text-dark-600 dark:text-dark-400 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://enketo.unhcr.org/x/Eo942fQl"
                            className="group inline-flex items-center px-9 py-4 text-base font-bold rounded-full bg-gradient-to-r from-dark-900 to-[#2a1a3a] dark:from-white dark:to-cream-100 text-white dark:text-dark-900 hover:scale-105 transition-transform duration-300 shadow-[0_18px_40px_-16px_rgba(15,23,42,0.6)] ring-1 ring-primary-500/30"
                            aria-label="Postularse como voluntario"
                        >
                            Únete Ahora
                            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                    
                    <div className="flex-1 w-full">
                        <figure className="relative mx-3 sm:mx-6 my-6">
                            <PhotoBackdrop />
                            <div className="relative z-10 aspect-[3/2] petal-lg overflow-hidden shadow-2xl shadow-primary-900/20 ring-1 ring-white/50 dark:ring-white/10">
                                <img
                                    src={fotoVoluntariado}
                                    alt="Voluntarias y voluntarios con el equipo de Fundación Arupo frente a las letras de Zuleta"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </figure>
                        {/* Testimonio en tarjeta superpuesta, para no tapar la foto */}
                        <blockquote className="relative z-20 -mt-14 sm:-mt-16 ml-6 sm:ml-14 mr-2 sm:mr-16 arupo-card petal p-5 sm:p-6">
                            <svg aria-hidden="true" className="absolute -top-4 right-6 w-9 h-9 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                            </svg>
                            <p className="font-medium text-base sm:text-lg italic text-dark-800 dark:text-dark-100 leading-relaxed">"El voluntariado en Arupo me enseñó el verdadero significado de la empatía y la transformación comunitaria."</p>
                            <footer className="mt-3 text-primary-600 dark:text-primary-300 text-sm font-semibold tracking-wide uppercase">— Testimonio Voluntariado</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
