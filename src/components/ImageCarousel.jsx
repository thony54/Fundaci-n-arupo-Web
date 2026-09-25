import { Link } from 'react-router-dom';
import { galleryTags } from '../data/gallery';
import SectionDecor from './ui/Decor';

// Una portada por álbum, alternando etiquetas para que el carrusel se vea variado.
const maxPerTag = Math.max(0, ...galleryTags.map((t) => t.albums.length));
const covers = Array.from({ length: maxPerTag }, (_, i) => galleryTags.map((t) => t.albums[i]).filter(Boolean)).flat();

// Repite las portadas hasta cubrir pantallas anchas,
// y luego duplica la tira completa para que el bucle (-50%) sea continuo.
const MIN_ITEMS = 10;
const strip = covers.length
    ? Array.from({ length: Math.ceil(MIN_ITEMS / covers.length) }, () => covers).flat()
    : [];
const marqueeImages = [...strip, ...strip];

export default function ImageCarousel() {
    if (!strip.length) return null;

    return (
        <section className="on-dark relative py-24 bg-night-950 overflow-hidden">
            <SectionDecor variant="dark" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14">
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-500/40 to-primary-400/70" />
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">Nuestra Labor en <span className="text-arupo">Imágenes</span></h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary-500/40 to-primary-400/70" />
                </div>
            </div>

            <div className="gallery-marquee relative [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                <div
                    className="gallery-marquee-track flex w-max"
                    style={{ '--marquee-duration': `${strip.length * 3.5}s` }}
                >
                    {marqueeImages.map((album, index) => (
                        <Link
                            key={index}
                            to={`/galeria?album=${encodeURIComponent(album.id)}`}
                            aria-hidden={index >= strip.length || undefined}
                            tabIndex={index >= strip.length ? -1 : undefined}
                            className={`relative w-64 h-48 mr-5 flex-shrink-0 group overflow-hidden ${index % 2 ? 'petal-alt' : 'petal'} bg-dark-900 ring-1 ring-white/10 hover:ring-primary-400/60 transition-shadow duration-500 hover:shadow-[0_20px_40px_-18px_rgba(251,146,60,0.6)]`}
                        >
                            <img
                                src={album.cover.thumb}
                                alt={index >= strip.length ? '' : album.title}
                                loading="lazy"
                                decoding="async"
                                width="256"
                                height="192"
                                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <div>
                                    <span className="block text-[10px] font-bold tracking-widest uppercase text-accent-400">{album.tag}</span>
                                    <span className="block text-sm font-semibold text-white leading-snug line-clamp-2">{album.title}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="relative z-10 mt-12 text-center">
                <Link
                    to="/galeria"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] ring-1 ring-white/15 text-sm font-semibold text-accent-300 hover:text-white hover:bg-primary-500/25 hover:ring-primary-400/50 transition-colors"
                >
                    Ver galería completa
                    <span aria-hidden="true">→</span>
                </Link>
            </div>
        </section>
    );
}
