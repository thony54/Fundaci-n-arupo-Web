// Galería generada automáticamente desde
//   src/assets/galeria/<Etiqueta>/<Nombre del evento - Ubicación>/<n>.webp
// (esos archivos los crea `npm run galeria` a partir de galeria-originales/).
// Un prefijo numérico en la etiqueta ("1 Ferias") sirve para ordenar y no se muestra.

const files = import.meta.glob('../assets/galeria/*/*/*.webp', { eager: true, import: 'default', query: '?url' });

const stripOrder = (s) => s.replace(/^\d+[\s._-]+/, '');
const collator = new Intl.Collator('es', { numeric: true });

const albumsByKey = new Map();

for (const [path, src] of Object.entries(files)) {
    if (path.endsWith('.thumb.webp')) continue;
    const [, tagDir, albumDir, file] = path.match(/galeria\/([^/]+)\/([^/]+)\/(.+)\.webp$/);
    const key = `${tagDir}/${albumDir}`;

    if (!albumsByKey.has(key)) {
        const parts = albumDir.split(' - ');
        const location = parts.length > 1 ? parts.pop() : '';
        albumsByKey.set(key, {
            id: key,
            tagKey: tagDir,
            tag: stripOrder(tagDir),
            title: parts.join(' - '),
            location,
            photos: [],
        });
    }
    albumsByKey.get(key).photos.push({
        id: path,
        sortKey: file,
        src,
        thumb: files[path.replace(/\.webp$/, '.thumb.webp')] ?? src,
    });
}

for (const album of albumsByKey.values()) {
    album.photos.sort((a, b) => collator.compare(a.sortKey, b.sortKey));
    album.cover = album.photos[0];
}

// Etiquetas ordenadas; dentro de cada una, primero los álbumes con más fotos.
export const galleryTags = [...new Set([...albumsByKey.values()].map((a) => a.tagKey))]
    .sort(collator.compare)
    .map((tagKey) => {
        const albums = [...albumsByKey.values()]
            .filter((a) => a.tagKey === tagKey)
            .sort((a, b) => b.photos.length - a.photos.length || collator.compare(a.title, b.title));
        return { title: stripOrder(tagKey), albums };
    });

export const galleryAlbums = galleryTags.flatMap((t) => t.albums);

export const galleryPhotoCount = galleryAlbums.reduce((n, a) => n + a.photos.length, 0);
