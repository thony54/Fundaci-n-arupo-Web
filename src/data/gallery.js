// Galería generada automáticamente desde src/assets/galeria/<Sección>/<Título - Categoría>.webp
// (esos archivos los crea `npm run galeria` a partir de galeria-originales/).
// Un prefijo numérico opcional ("01 ", "2. ") en carpetas o archivos sirve para ordenar y no se muestra.

const full = import.meta.glob('../assets/galeria/*/*.webp', { eager: true, import: 'default', query: '?url' });

const stripOrder = (s) => s.replace(/^\d+[\s._-]+/, '');

const bySection = new Map();

for (const [path, src] of Object.entries(full)) {
    if (path.endsWith('.thumb.webp')) continue;
    const [, sectionDir, file] = path.match(/galeria\/([^/]+)\/(.+)\.webp$/);
    const parts = stripOrder(file).split(' - ');
    const category = parts.length > 1 ? parts.pop() : '';
    const title = parts.join(' - ');
    const thumb = full[path.replace(/\.webp$/, '.thumb.webp')] ?? src;

    if (!bySection.has(sectionDir)) bySection.set(sectionDir, []);
    bySection.get(sectionDir).push({ id: path, sortKey: file, title, category, src, thumb });
}

const collator = new Intl.Collator('es', { numeric: true });

export const gallerySections = [...bySection.entries()]
    .sort(([a], [b]) => collator.compare(a, b))
    .map(([dir, items]) => ({
        title: stripOrder(dir),
        items: items.sort((a, b) => collator.compare(a.sortKey, b.sortKey)),
    }));

export const galleryImages = gallerySections.flatMap((s) => s.items);
