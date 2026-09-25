import { useParams, Navigate, Link } from 'react-router-dom';
import PageTransition from '../components/motion/PageTransition';
import Reveal from '../components/motion/Reveal';
import { territories } from '../data/territories';
import SectionDecor, { ArupoFlower } from '../components/ui/Decor';

export default function TerritoryStory() {
    const { id } = useParams();
    const territory = territories.find(t => t.id === id);

    if (!territory) {
        return <Navigate to="/impacto" replace />;
    }

    return (
        <PageTransition>
            <div className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white transition-colors duration-300">
                {/* HERO NARRATIVO */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-dark-900/20 z-10" />

                    <div className={`absolute inset-0 z-0 ${territory.hero.image ? '' : 'bg-gradient-to-br from-primary-900 to-dark-900 animate-pulse'}`}>
                        {territory.hero.image && (
                            <img
                                src={territory.hero.image}
                                alt={`Paisaje de ${territory.name}`}
                                className="w-full h-full object-cover scale-105"
                            />
                        )}
                    </div>

                    <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                        <Reveal>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-primary-500/20 backdrop-blur-md border border-primary-500/30 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                                Impacto en Territorio
                            </span>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
                                {territory.name}
                            </h1>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto font-serif italic">
                                "{territory.hero.subtitle}"
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* CONTEXTO TERRITORIAL */}
                <section className="relative py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <SectionDecor variant="warm" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary-500 to-transparent" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <Reveal>
                            <h2 className="arupo-eyebrow mb-6">La Realidad Local</h2>
                            <p className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold tracking-tight text-balance text-dark-900 dark:text-white mb-10">
                                {territory.context.text}
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="flex flex-wrap justify-center gap-4">
                                {territory.context.focus.map(focus => (
                                    <div key={focus} className="group relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 via-accent-400 to-arupo-purple rounded-full blur opacity-25 group-hover:opacity-80 transition duration-500" />
                                        <span className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full arupo-card text-dark-700 dark:text-dark-200 font-bold text-sm">
                                            <span aria-hidden="true" className="w-2 h-2 petal bg-gradient-to-br from-primary-400 to-arupo-purple" />
                                            {focus}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* PROYECTOS EN ACCIÓN */}
                <section className="arupo-sheet overflow-hidden py-24 lg:py-28 bg-cream-50 dark:bg-night-900">
                    <SectionDecor variant="cool" />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <div className="flex items-center gap-4 mb-16">
                                <h2 className="text-4xl font-black uppercase italic tracking-tight text-dark-900 dark:text-white">Proyectos <span className="text-arupo pr-1">en Acción</span></h2>
                                <div className="h-px flex-1 bg-gradient-to-r from-primary-300 to-transparent dark:from-primary-800" />
                            </div>
                        </Reveal>

                        <div className="grid md:grid-cols-2 gap-10 md:pb-10">
                            {territory.projects.map((project, index) => (
                                <Reveal key={index} delay={index * 0.1}>
                                    <article className={`group relative overflow-hidden arupo-card arupo-card-hover ${index % 2 ? 'petal-alt md:translate-y-10' : 'petal-lg'} p-8 sm:p-10`}>
                                        <ArupoFlower className="-top-10 -right-10 w-40 h-40 text-primary-500/10 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110" strokeWidth={2} />

                                        <h3 className="relative text-3xl font-black tracking-tight mb-4 text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="relative text-xl font-medium text-dark-700 dark:text-dark-200 mb-8 border-l-4 border-primary-500 pl-4">
                                            {project.objective}
                                        </p>

                                        <div className="relative grid grid-cols-2 gap-4">
                                            <div className="p-4 petal bg-cream-100/70 dark:bg-white/[0.04]">
                                                <p className="text-xs uppercase tracking-widest text-dark-400 mb-1">Población</p>
                                                <p className="font-bold text-dark-800 dark:text-dark-100">{project.population}</p>
                                            </div>
                                            <div className="p-4 petal-alt bg-cream-100/70 dark:bg-white/[0.04]">
                                                <p className="text-xs uppercase tracking-widest text-dark-400 mb-1">Nuestro Rol</p>
                                                <p className="font-bold text-dark-800 dark:text-dark-100">{project.role}</p>
                                            </div>
                                        </div>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* COMUNIDAD: LA VOZ HUMANA */}
                <section className="arupo-sheet overflow-hidden py-28 lg:py-32 bg-white dark:bg-dark-950">
                    <SectionDecor variant="warm" />
                    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative arupo-card petal-lg overflow-hidden px-6 py-14 sm:px-14 sm:py-16">
                            <div aria-hidden="true" className="absolute -top-6 left-6 sm:left-10 text-[12rem] font-black leading-none select-none text-arupo opacity-30">“</div>
                            <div aria-hidden="true" className="arupo-halo -bottom-24 -right-16 w-80 h-80" style={{ background: 'radial-gradient(circle, rgba(130,61,131,0.2), transparent 70%)' }} />

                            <Reveal>
                                <article className="relative z-10 text-center">
                                    <h2 className="arupo-eyebrow mb-12">Historias de Vida</h2>
                                    <blockquote className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-dark-900 dark:text-white leading-tight mb-12">
                                        {territory.community.quote}
                                    </blockquote>

                                    <div className="max-w-2xl mx-auto">
                                        <p className="text-lg sm:text-xl text-dark-600 dark:text-dark-400 mb-8 leading-relaxed">
                                            {territory.community.story}
                                        </p>
                                        <footer className="flex flex-col items-center">
                                            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-400 to-arupo-purple mb-4" />
                                            <cite className="not-italic font-black text-lg uppercase tracking-widest text-dark-900 dark:text-white">
                                                {territory.community.author}
                                            </cite>
                                            <span className="text-sm text-primary-500 font-bold uppercase mt-1">{territory.name}</span>
                                        </footer>
                                    </div>
                                </article>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* ALIANZAS Y MICRO-IMPACTO */}
                <section className="arupo-sheet overflow-hidden py-24 lg:py-28 bg-cream-50 dark:bg-night-900">
                    <SectionDecor variant="soft" />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-20">
                            <Reveal>
                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-3xl font-black uppercase italic tracking-tight mb-2">Alianzas <span className="text-primary-500 text-2xl not-italic">—</span></h3>
                                        <p className="text-dark-500 dark:text-dark-400 text-sm">Instituciones que confían en nuestra labor territorial.</p>
                                    </div>
                                    <div className="space-y-4">
                                        {territory.alliances.map((ally, idx) => (
                                            <div key={idx} className={`group flex items-center gap-6 p-5 sm:p-6 arupo-card ${idx % 2 ? 'petal-alt' : 'petal'} hover:translate-x-2 transition-transform`}>
                                                <div className="arupo-icon w-16 h-16 text-2xl font-black">
                                                    {ally.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-xl text-dark-900 dark:text-white tracking-tight">{ally.name}</h4>
                                                    <p className="text-primary-600 dark:text-primary-400 text-sm font-bold uppercase">{ally.role}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-3xl font-black uppercase italic tracking-tight mb-2">Impacto <span className="text-accent-500 text-2xl not-italic">—</span></h3>
                                        <p className="text-dark-500 dark:text-dark-400 text-sm">Resultados tangibles de nuestra presencia en {territory.name}.</p>
                                    </div>
                                    <div className="grid gap-4">
                                        {territory.microImpact.map((impact, idx) => (
                                            <div key={idx} className={`group flex items-center gap-4 p-5 arupo-card arupo-card-hover is-warm ${idx % 2 ? 'petal' : 'petal-alt'}`}>
                                                <div className="arupo-icon w-11 h-11 !bg-gradient-to-br from-accent-300 via-accent-500 to-primary-600">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="font-bold text-lg tracking-tight text-dark-800 dark:text-dark-100">{impact}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="on-dark arupo-sheet overflow-hidden py-32 lg:py-36 bg-gradient-to-br from-night-900 via-night-950 to-[#3b1530] text-white">
                    <SectionDecor variant="dark" />
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500 via-transparent to-transparent" />
                    </div>

                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <Reveal>
                            <h2 className="text-5xl sm:text-6xl font-black mb-8 tracking-tighter uppercase italic">
                                SÉ PARTE DE <br /><span className="text-arupo pr-2">ESTA HISTORIA</span>
                            </h2>
                            <p className="text-xl text-dark-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Tu aporte directo permite que sigamos transformando vidas en {territory.name} y construyendo una sociedad más inclusiva.
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link
                                    to={territory.cta.link}
                                    className="px-10 py-5 text-lg font-black rounded-full bg-gradient-to-r from-primary-500 via-primary-600 to-[#a13d6d] text-white transition-all shadow-[0_18px_40px_-14px_rgba(234,88,12,0.7)] hover:shadow-[0_22px_50px_-12px_rgba(234,88,12,0.85)] hover:scale-105 active:scale-95 uppercase tracking-widest"
                                >
                                    {territory.cta.text}
                                </Link>
                                <Link
                                    to="/impacto"
                                    className="px-10 py-5 text-lg font-black rounded-full border-2 border-white/20 bg-white/[0.04] backdrop-blur text-white hover:bg-white hover:text-dark-900 transition-all active:scale-95 uppercase tracking-widest"
                                >
                                    Ver otros territorios
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
