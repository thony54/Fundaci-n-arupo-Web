import { useParams, Navigate, Link } from 'react-router-dom';
import PageTransition from '../components/motion/PageTransition';
import Reveal from '../components/motion/Reveal';
import { territories } from '../data/territories';

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
                <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary-500 to-transparent" />

                    <div className="max-w-4xl mx-auto text-center">
                        <Reveal>
                            <h2 className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-4">La Realidad Local</h2>
                            <p className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold text-dark-900 dark:text-white mb-10">
                                {territory.context.text}
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="flex flex-wrap justify-center gap-4">
                                {territory.context.focus.map(focus => (
                                    <div key={focus} className="group relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-500" />
                                        <span className="relative px-6 py-2.5 rounded-full bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 text-dark-700 dark:text-dark-200 font-bold text-sm inline-block">
                                            {focus}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* PROYECTOS EN ACCIÓN */}
                <section className="py-24 bg-dark-50/50 dark:bg-dark-900/50 backdrop-blur-sm relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <div className="flex items-center gap-4 mb-16">
                                <h2 className="text-4xl font-black uppercase italic text-dark-900 dark:text-white">Proyectos <span className="text-primary-500">en Acción</span></h2>
                                <div className="h-px flex-1 bg-dark-200 dark:bg-dark-800" />
                            </div>
                        </Reveal>

                        <div className="grid md:grid-cols-2 gap-10">
                            {territory.projects.map((project, index) => (
                                <Reveal key={index} delay={index * 0.1}>
                                    <article className="group relative bg-white dark:bg-dark-950 p-10 rounded-3xl border border-dark-100 dark:border-dark-800 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all">
                                            <svg className="w-12 h-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2L1 21h22L12 2zm0 4.1L19.4 19H4.6L12 6.1z" />
                                            </svg>
                                        </div>

                                        <h3 className="text-3xl font-black mb-4 text-dark-900 dark:text-white group-hover:text-primary-500 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-xl font-medium text-dark-700 dark:text-dark-200 mb-8 border-l-4 border-primary-500 pl-4">
                                            {project.objective}
                                        </p>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 rounded-2xl bg-dark-50 dark:bg-dark-900">
                                                <p className="text-xs uppercase tracking-widest text-dark-400 mb-1">Población</p>
                                                <p className="font-bold text-dark-800 dark:text-dark-100">{project.population}</p>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-dark-50 dark:bg-dark-900">
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
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-900/5 -z-10" />
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative">
                            <div className="absolute -top-12 -left-12 text-[12rem] font-black text-primary-500/10 leading-none select-none">“</div>

                            <Reveal>
                                <article className="relative z-10 text-center">
                                    <h2 className="text-sm font-bold text-primary-500 uppercase tracking-[0.3em] mb-12">Historias de Vida</h2>
                                    <blockquote className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-dark-900 dark:text-white leading-tight mb-12">
                                        {territory.community.quote}
                                    </blockquote>

                                    <div className="max-w-2xl mx-auto">
                                        <p className="text-lg sm:text-xl text-dark-600 dark:text-dark-400 mb-8 leading-relaxed">
                                            {territory.community.story}
                                        </p>
                                        <footer className="flex flex-col items-center">
                                            <div className="w-16 h-px bg-primary-500 mb-4" />
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
                <section className="py-24 border-y border-dark-100 dark:border-dark-800/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-20">
                            <Reveal>
                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-3xl font-black uppercase italic mb-2">Alianzas <span className="text-primary-500 text-2xl not-italic">—</span></h3>
                                        <p className="text-dark-500 dark:text-dark-400 text-sm">Instituciones que confían en nuestra labor territorial.</p>
                                    </div>
                                    <div className="space-y-4">
                                        {territory.alliances.map((ally, idx) => (
                                            <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-dark-950 border border-dark-100 dark:border-dark-800 hover:translate-x-2 transition-transform shadow-sm">
                                                <div className="w-16 h-16 rounded-2xl bg-primary-500 text-white flex items-center justify-center text-2xl font-black">
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
                                        <h3 className="text-3xl font-black uppercase italic mb-2">Impacto <span className="text-accent-500 text-2xl not-italic">—</span></h3>
                                        <p className="text-dark-500 dark:text-dark-400 text-sm">Resultados tangibles de nuestra presencia en {territory.name}.</p>
                                    </div>
                                    <div className="grid gap-4">
                                        {territory.microImpact.map((impact, idx) => (
                                            <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-dark-50 dark:bg-dark-900 border border-transparent hover:border-accent-500/30 transition-all">
                                                <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center shrink-0">
                                                    <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <section className="py-32 bg-dark-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500 via-transparent to-transparent" />
                    </div>

                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <Reveal>
                            <h2 className="text-5xl sm:text-6xl font-black mb-8 tracking-tighter uppercase italic">
                                SÉ PARTE DE <br /><span className="text-primary-500">ESTA HISTORIA</span>
                            </h2>
                            <p className="text-xl text-dark-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Tu aporte directo permite que sigamos transformando vidas en {territory.name} y construyendo una sociedad más inclusiva.
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link
                                    to={territory.cta.link}
                                    className="px-10 py-5 text-lg font-black rounded-full bg-primary-500 text-white hover:bg-primary-400 transition-all shadow-xl shadow-primary-500/20 hover:scale-105 active:scale-95 uppercase tracking-widest"
                                >
                                    {territory.cta.text}
                                </Link>
                                <Link
                                    to="/impacto"
                                    className="px-10 py-5 text-lg font-black rounded-full border-2 border-white/20 text-white hover:bg-white hover:text-dark-900 transition-all active:scale-95 uppercase tracking-widest"
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
