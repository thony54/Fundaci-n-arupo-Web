import Reveal from './motion/Reveal';
import SectionDecor from './ui/Decor';
import connexoIso from '../assets/CONNEXO ISO O.png';

export default function SustainabilityAlliance() {
    return (
        <section className="relative py-24 lg:py-28 bg-white dark:bg-dark-950 overflow-hidden">
            <SectionDecor variant="soft" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side: Orbital Synergy with Logo */}
                    <Reveal>
                        <div className="flex justify-center">
                            <div className="relative w-[19rem] h-[19rem] sm:w-[26rem] sm:h-[26rem] flex items-center justify-center">
                                {/* Órbitas decorativas alrededor del logo */}
                                <div aria-hidden="true" className="arupo-deco inset-0 rounded-full bg-gradient-to-br from-primary-50 via-cream-100 to-[#fbeef6] dark:from-primary-500/10 dark:via-dark-900 dark:to-therapeutic-500/10" />
                                <div aria-hidden="true" className="arupo-deco inset-6 rounded-full border border-primary-200 dark:border-primary-800/60" />
                                <div aria-hidden="true" className="arupo-deco inset-0 arupo-orbit">
                                    <span className="absolute left-1/2 -top-1.5 -ml-1.5 w-3 h-3 rounded-full bg-primary-500 shadow-[0_0_14px_rgba(234,88,12,0.8)]" />
                                </div>
                                <div aria-hidden="true" className="arupo-deco inset-14 rounded-full border-2 border-dashed border-accent-300/70 dark:border-accent-500/30" />
                                <div aria-hidden="true" className="arupo-deco inset-14 arupo-orbit is-reverse">
                                    <span className="absolute top-1/2 -right-2 -mt-2 w-4 h-4 rounded-full bg-gradient-to-br from-accent-300 to-arupo-purple" />
                                </div>
                                <a
                                    href="https://www.connexo.tech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 block w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-white dark:bg-dark-900 shadow-[0_24px_60px_-20px_rgba(234,88,12,0.45)] ring-1 ring-primary-100 dark:ring-primary-900/60 p-8 sm:p-10 transition-all duration-500 hover:scale-105 active:scale-95 group"
                                >
                                    {/* Logo Symbol (ISO) */}
                                    <img
                                        src={connexoIso}
                                        alt="Visitar sitio web de Connexo"
                                        className="w-full h-full object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(231,117,18,0.4)]"
                                    />
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <Reveal delay={0.2}>
                            <div className="space-y-4">
                                <h2 className="arupo-eyebrow">Compromiso por la Sostenibilidad</h2>
                                <h3 className="text-4xl sm:text-5xl font-black text-dark-900 dark:text-white leading-tight">
                                    Una alianza para el <br />
                                    <span className="text-arupo uppercase italic text-3xl sm:text-4xl">impacto social</span>
                                </h3>
                                <div aria-hidden="true" className="w-20 h-1.5 bg-gradient-to-r from-primary-500 via-accent-400 to-arupo-purple rounded-full" />
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
                            <div className="flex flex-wrap gap-3 pt-6 border-t border-dark-100 dark:border-dark-800">
                                {['Centro Terapéutico', 'Inclusión Social', 'Impacto'].map((tag) => (
                                    <span key={tag} className="px-4 py-2 rounded-full bg-cream-50 dark:bg-dark-900 ring-1 ring-primary-200/70 dark:ring-primary-800/50 text-xs font-bold uppercase tracking-wider text-primary-700 dark:text-primary-300">
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
