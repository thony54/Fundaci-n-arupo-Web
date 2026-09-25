import { Link } from 'react-router-dom';
import { galleryTags } from '../data/gallery';

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
        <section className="py-20 bg-dark-950 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dark-700" />
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Nuestra Labor en Imágenes</h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dark-700" />
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
                            className="relative w-64 h-48 mr-4 flex-shrink-0 group overflow-hidden rounded-xl bg-dark-900 border border-dark-800"
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

            <div className="mt-10 text-center">
                <Link
                    to="/galeria"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors"
                >
                    Ver galería completa
                    <span aria-hidden="true">→</span>
                </Link>
            </div>
        </section>
    );
}
