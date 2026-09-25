import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PageTransition from '../components/motion/PageTransition';
import Reveal from '../components/motion/Reveal';
import { gallerySections } from '../data/gallery';

// Las fotos salen de galeria-originales/ → `npm run galeria` → src/assets/galeria/.
// Ver src/data/gallery.js.

function Lightbox({ items, index, onClose, onNavigate }) {
    const item = items[index];
    const prev = useCallback(() => onNavigate((index - 1 + items.length) % items.length), [index, items.length, onNavigate]);
    const next = useCallback(() => onNavigate((index + 1) % items.length), [index, items.length, onNavigate]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowLeft') prev();
            else if (e.key === 'ArrowRight') next();
        };
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = overflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [onClose, prev, next]);

    const navBtn = 'absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center backdrop-blur transition-colors';

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-dark-950/95 flex items-center justify-center p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
        >
            <figure className="max-w-6xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                <motion.img
                    key={item.id}
                    src={item.src}
                    alt={item.title}
                    className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                />
                <figcaption className="mt-5 text-center">
                    {item.category && (
                        <span className="text-[10px] font-bold tracking-widest uppercase text-accent-400">{item.category}</span>
                    )}
                    <p className="text-white text-lg font-semibold">{item.title}</p>
                    <p className="text-dark-400 text-xs mt-1">{index + 1} / {items.length}</p>
                </figcaption>
            </figure>

            {items.length > 1 && (
                <>
                    <button type="button" aria-label="Foto anterior" className={`${navBtn} left-2 sm:left-6`} onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
                    <button type="button" aria-label="Foto siguiente" className={`${navBtn} right-2 sm:right-6`} onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
                </>
            )}
            <button
                type="button"
                aria-label="Cerrar"
                autoFocus
                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-colors"
                onClick={onClose}
            >
                ×
            </button>
        </motion.div>
    );
}

export default function Gallery() {
    const [activeSection, setActiveSection] = useState('All');
    const [open, setOpen] = useState(null); // { items, index }

    const visible = gallerySections.filter((s) => activeSection === 'All' || activeSection === s.title);

    return (
        <PageTransition>
            <section className="pt-32 pb-24 bg-white dark:bg-dark-950 min-h-screen">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <header className="mb-16 text-center">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                                Portafolio Institucional
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-900 dark:text-white mb-6 tracking-tight">
                                Galería de Impacto
                            </h1>
                            <p className="text-xl text-dark-500 dark:text-dark-400 max-w-3xl mx-auto font-light leading-relaxed">
                                Conoce de cerca los rostros, los talleres y los hitos que construyen una sociedad más inclusiva en Ecuador.
                            </p>
                        </header>
                    </Reveal>

                    {gallerySections.length > 1 && (
                        <div className="flex flex-wrap justify-center gap-3 mb-16">
                            {['All', ...gallerySections.map((s) => s.title)].map((section) => (
                                <button
                                    key={section}
                                    type="button"
                                    onClick={() => setActiveSection(section)}
                                    aria-pressed={activeSection === section}
                                    className={`px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeSection === section
                                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
                                        : 'bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200'
                                        }`}
                                >
                                    {section === 'All' ? 'Ver Todo' : section}
                                </button>
                            ))}
                        </div>
                    )}

                    {visible.map(({ title: sectionTitle, items }) => (
                        <div key={sectionTitle} className="mb-24">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dark-200 dark:to-dark-800" />
                                <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-white px-2 tracking-tight text-center">{sectionTitle}</h2>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dark-200 dark:to-dark-800" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                                {items.map((item, index) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => setOpen({ items, index })}
                                        className="group relative text-left overflow-hidden rounded-[2rem] bg-white dark:bg-dark-900 shadow-sm hover:shadow-2xl transition-all duration-500 border border-dark-100 dark:border-dark-800 h-full flex flex-col focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/50"
                                    >
                                        <div className="aspect-[4/5] w-full relative overflow-hidden flex-shrink-0 bg-dark-100 dark:bg-dark-950">
                                            <img
                                                src={item.thumb}
                                                alt={item.title}
                                                loading={index < 4 ? 'eager' : 'lazy'}
                                                decoding="async"
                                                width="640"
                                                height="800"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                            />
                                            {item.category && (
                                                <div className="absolute top-5 left-5">
                                                    <span className="bg-white/90 dark:bg-dark-900/90 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-dark-900 dark:text-white px-4 py-2 rounded-full shadow-sm">
                                                        {item.category}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6 lg:p-8 flex-grow">
                                            <h3 className="text-lg lg:text-xl font-bold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
                                                {item.title}
                                            </h3>
                                            <div className="mt-4 flex items-center gap-3">
                                                <div className="w-10 h-px bg-dark-200 dark:bg-dark-700 transition-all group-hover:w-16 group-hover:bg-primary-500" />
                                                <span className="text-xs text-dark-400 font-semibold tracking-widest uppercase">
                                                    Ver foto
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {createPortal(
                <AnimatePresence>
                    {open && (
                        <Lightbox
                            items={open.items}
                            index={open.index}
                            onClose={() => setOpen(null)}
                            onNavigate={(i) => setOpen((o) => ({ ...o, index: i }))}
                        />
                    )}
                </AnimatePresence>,
                document.body
            )}
        </PageTransition>
    );
}
