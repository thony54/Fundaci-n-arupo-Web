import Reveal from './motion/Reveal';
import connexoIso from '../assets/CONNEXO ISO O.png';

export default function SustainabilityAlliance() {
    return (
        <section className="py-24 bg-white dark:bg-dark-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side: Orbital Synergy with Logo */}
                    <Reveal>
                        <div className="flex justify-center lg:justify-start">
                            <a
                                href="https://www.connexo.tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block transition-all duration-500 hover:scale-105 active:scale-95 group"
                            >
                                {/* Logo Symbol (ISO) */}
                                <img
                                    src={connexoIso}
                                    alt="Visitar sitio web de Connexo"
                                    className="w-80 h-auto object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(231,117,18,0.4)]"
                                />

                                {/* Very subtle glow indicator */}
                                <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 rounded-full blur-3xl transition-colors duration-500 -z-10" />
                            </a>
                        </div>
                    </Reveal>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <Reveal delay={0.2}>
                            <div className="space-y-4">
                                <h2 className="text-sm font-bold text-primary-500 uppercase tracking-widest">Compromiso por la Sostenibilidad</h2>
                                <h3 className="text-4xl sm:text-5xl font-black text-dark-900 dark:text-white leading-tight">
                                    Una alianza para el <br />
                                    <span className="text-primary-500 uppercase italic text-3xl">impacto social</span>
                                </h3>
                                <div className="w-20 h-1.5 bg-primary-500 rounded-full" />
                            </div>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className="space-y-6 text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                                <p>
                                    Nuestra alianza con <strong className="font-bold text-dark-900 dark:text-white">Connexo</strong> es un pilar de sostenibilidad.
                                    Un aporte solidario del <span className="text-primary-500 font-bold">10% de cada plan</span> se destina directamente al fortalecimiento de nuestros programas sociales y al Centro Terapéutico Integral.
                                </p>
                                <p className="mt-4">
                                    Tú también puedes ser parte de este proyecto y sumar tu apoyo. <br />
                                    <a href="https://www.connexo.tech/ec" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 font-bold underline inline-flex items-center gap-1 mt-2">
                                        Conoce más y únete aquí
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </a>
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-dark-100 dark:border-dark-800">
                                {['Centro Terapéutico', 'Inclusión Social', 'Impacto'].map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-dark-50 dark:bg-dark-900 rounded-lg text-xs font-bold uppercase tracking-wider text-dark-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
