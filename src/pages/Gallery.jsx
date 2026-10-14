import { useState } from 'react';
import PageTransition from '../components/motion/PageTransition';
import Reveal from '../components/motion/Reveal';
import { galleryAlbums, galleryPhotoCount, galleryTags } from '../data/gallery';
import SectionDecor from '../components/ui/Decor';
import AlbumGrid from '../components/AlbumGrid';

// Las fotos salen de galeria-originales/ → `npm run galeria` → src/assets/galeria/.
// Ver src/data/gallery.js. El visor de álbumes está en components/AlbumGrid.jsx.

export default function Gallery() {
    const [activeTag, setActiveTag] = useState('All');

    const visibleTags = galleryTags.filter((t) => activeTag === 'All' || activeTag === t.title);

    return (
        <PageTransition>
            <section className="relative pt-32 pb-28 bg-cream-50 dark:bg-night-900 min-h-screen overflow-hidden">
                <SectionDecor variant="warm" />
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <header className="mb-14 text-center">
                            <span className="arupo-eyebrow mb-5">
                                Portafolio Institucional
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-900 dark:text-white mb-6 tracking-tight">
                                Galería de <span className="text-arupo">Impacto</span>
                            </h1>
                            <p className="text-xl text-dark-500 dark:text-dark-400 max-w-3xl mx-auto font-light leading-relaxed">
                                Conoce de cerca los rostros, los talleres y los hitos que construyen una sociedad más inclusiva en Ecuador.
                            </p>
                            <p className="mt-6 text-sm font-semibold text-dark-400 dark:text-dark-500 tracking-wide">
                                {galleryAlbums.length} actividades · {galleryPhotoCount} fotografías
                            </p>
                        </header>
                    </Reveal>

                    <div className="flex gap-2 sm:gap-3 mb-12 sm:mb-16 -mx-4 px-4 overflow-x-auto sm:overflow-visible sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center [scrollbar-width:none]" role="group" aria-label="Filtrar por etiqueta">
                        {['All', ...galleryTags.map((t) => t.title)].map((tag) => {
                            const count = tag === 'All' ? galleryAlbums.length : galleryTags.find((t) => t.title === tag).albums.length;
                            const active = activeTag === tag;
                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => setActiveTag(tag)}
                                    aria-pressed={active}
                                    className={`flex-shrink-0 whitespace-nowrap inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${active
                                        ? 'bg-gradient-to-r from-primary-500 via-primary-600 to-[#a13d6d] text-white shadow-[0_12px_28px_-12px_rgba(234,88,12,0.7)]'
                                        : 'bg-white dark:bg-dark-900 ring-1 ring-primary-100 dark:ring-dark-800 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:ring-primary-300 shadow-sm'
                                        }`}
                                >
                                    {tag === 'All' ? 'Ver todo' : tag}
                                    <span className={`text-xs tabular-nums ${active ? 'text-white/70' : 'text-dark-400'}`}>{count}</span>
                                </button>
                            );
                        })}
                    </div>

                    {visibleTags.map(({ title, albums }, tagIndex) => (
                        <div key={title} className="mb-20">
                            <div className="flex items-center gap-4 sm:gap-6 mb-10">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-200 to-primary-400/70 dark:via-primary-900 dark:to-primary-700/70" />
                                <h2 className="inline-flex items-center gap-3 text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-white tracking-tight text-center">
                                    <span aria-hidden="true" className="w-3 h-3 petal bg-gradient-to-br from-primary-400 to-arupo-purple" />
                                    {title}
                                </h2>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary-200 to-primary-400/70 dark:via-primary-900 dark:to-primary-700/70" />
                            </div>

                            <AlbumGrid albums={albums} eagerCount={tagIndex === 0 ? 3 : 0} />
                        </div>
                    ))}
                </div>
            </section>
        </PageTransition>
    );
}
