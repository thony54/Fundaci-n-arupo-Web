import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PageTransition from '../components/motion/PageTransition';
import Reveal from '../components/motion/Reveal';
import { galleryAlbums, galleryPhotoCount, galleryTags } from '../data/gallery';
import SectionDecor from '../components/ui/Decor';

// Las fotos salen de galeria-originales/ → `npm run galeria` → src/assets/galeria/.
// Ver src/data/gallery.js.

const PinIcon = (props) => (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
        <path fillRule="evenodd" d="M9.69 18.933l.003.001a.75.75 0 00.614 0l.003-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
    </svg>
);

const PhotosIcon = (props) => (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
        <path fillRule="evenodd" d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
    </svg>
);

function Lightbox({ album, index, onClose, onNavigate }) {
    const { photos } = album;
    const photo = photos[index];
    const touchX = useRef(null);
    const stripRef = useRef(null);
    const prev = useCallback(() => onNavigate((index - 1 + photos.length) % photos.length), [index, photos.length, onNavigate]);
    const next = useCallback(() => onNavigate((index + 1) % photos.length), [index, photos.length, onNavigate]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowLeft') prev();
            else if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose, prev, next]);

    useEffect(() => {
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = overflow; };
    }, []);

    // Precarga la siguiente foto y mantiene visible la miniatura activa
    useEffect(() => {
        if (photos.length > 1) new Image().src = photos[(index + 1) % photos.length].src;
        stripRef.current?.children[index]?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }, [index, photos]);

    const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
    };

    const navBtn = 'absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl leading-none flex items-center justify-center backdrop-blur transition-colors';

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-dark-950/95 backdrop-blur-sm flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={album.title}
        >
            <header className="flex items-start justify-between gap-4 px-4 sm:px-8 pt-4 sm:pt-6">
                <div className="min-w-0">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-accent-400">{album.tag}</span>
                    <h2 className="text-white text-base sm:text-lg font-semibold leading-snug">{album.title}</h2>
                    {album.location && (
                        <p className="flex items-center gap-1 text-dark-400 text-sm mt-0.5">
                            <PinIcon className="w-3.5 h-3.5 flex-shrink-0" />{album.location}
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                    {photos.length > 1 && <span className="text-dark-400 text-sm tabular-nums">{index + 1} / {photos.length}</span>}
                    <button
                        type="button"
                        aria-label="Cerrar"
                        autoFocus
                        className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-colors"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>
            </header>

            <div
                className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20 py-4"
                onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <motion.img
                    key={photo.id}
                    src={photo.src}
                    alt={`${album.title} — foto ${index + 1} de ${photos.length}`}
                    className="max-h-full max-w-full rounded-xl object-contain shadow-2xl select-none"
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    draggable={false}
                />
                {photos.length > 1 && (
                    <>
                        <button type="button" aria-label="Foto anterior" className={`${navBtn} left-2 sm:left-6`} onClick={prev}>‹</button>
                        <button type="button" aria-label="Foto siguiente" className={`${navBtn} right-2 sm:right-6`} onClick={next}>›</button>
                    </>
                )}
            </div>

            {photos.length > 1 && (
                <div ref={stripRef} className="flex gap-2 overflow-x-auto px-4 sm:px-8 pb-4 sm:pb-6 justify-start sm:justify-center">
                    {photos.map((p, i) => (
                        <button
                            key={p.id}
                            type="button"
                            onClick={() => onNavigate(i)}
                            aria-label={`Ver foto ${i + 1}`}
                            aria-current={i === index || undefined}
                            className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${i === index ? 'border-accent-400 opacity-100' : 'border-transparent opacity-50 hover:opacity-90'}`}
                        >
                            <img src={p.thumb} alt="" loading="lazy" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </motion.div>
    );
}

function AlbumCard({ album, onOpen, eager, index = 0 }) {
    const count = album.photos.length;
    return (
        <button
            type="button"
            onClick={onOpen}
            className={`group arupo-card arupo-card-hover ${index % 2 ? 'petal-alt' : 'petal-lg'} w-full h-full text-left flex flex-col overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/50`}
        >
            <div className="aspect-[4/3] w-full relative overflow-hidden flex-shrink-0 bg-dark-100 dark:bg-dark-950">
                <img
                    src={album.cover.thumb}
                    alt={album.title}
                    loading={eager ? 'eager' : 'lazy'}
                    decoding="async"
                    width="640"
                    height="480"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/55 via-transparent to-transparent" />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-arupo-purple/0 group-hover:from-primary-500/15 group-hover:to-arupo-purple/20 transition-colors duration-500" />
                <span className="absolute top-4 left-4 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-dark-900 dark:text-white px-3 py-1.5 rounded-full shadow-sm">
                    {album.tag}
                </span>
                {count > 1 && (
                    <span className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-gradient-to-r from-primary-500/90 to-[#a13d6d]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                        <PhotosIcon className="w-3.5 h-3.5" />{count} fotos
                    </span>
                )}
            </div>
            <div className="p-5 lg:p-6 flex-grow flex flex-col gap-2">
                <h3 className="text-base lg:text-lg font-bold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug line-clamp-3">
                    {album.title}
                </h3>
                {album.location && (
                    <p className="mt-auto flex items-center gap-1.5 text-sm text-dark-500 dark:text-dark-400">
                        <PinIcon className="w-4 h-4 flex-shrink-0 text-primary-500" />
                        <span className="truncate">{album.location}</span>
                    </p>
                )}
            </div>
        </button>
    );
}

export default function Gallery() {
    const [activeTag, setActiveTag] = useState('All');
    const [searchParams, setSearchParams] = useSearchParams();
    const [photoIndex, setPhotoIndex] = useState(0);

    // El álbum abierto vive en la URL (?album=...) para poder compartirlo y para
    // que el carrusel de la portada abra directamente un álbum.
    const openAlbum = galleryAlbums.find((a) => a.id === searchParams.get('album')) ?? null;

    const open = (album) => {
        setPhotoIndex(0);
        setSearchParams({ album: album.id }, { replace: true });
    };
    const close = useCallback(() => setSearchParams({}, { replace: true }), [setSearchParams]);

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

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {albums.map((album, i) => (
                                    <AlbumCard
                                        key={album.id}
                                        album={album}
                                        eager={tagIndex === 0 && i < 3}
                                        index={i}
                                        onOpen={() => open(album)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {createPortal(
                <AnimatePresence>
                    {openAlbum && (
                        <Lightbox
                            album={openAlbum}
                            index={Math.min(photoIndex, openAlbum.photos.length - 1)}
                            onClose={close}
                            onNavigate={setPhotoIndex}
                        />
                    )}
                </AnimatePresence>,
                document.body
            )}
        </PageTransition>
    );
}
