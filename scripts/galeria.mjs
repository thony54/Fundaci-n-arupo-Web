// Optimiza las fotos de la galería.
//
// Estructura de galeria-originales/ (no se sube a GitHub):
//   galeria-originales/<Etiqueta>/<Nombre del evento - Ubicación>/<1.jpg, 2.jpg, ...>
// La foto con el número más bajo es la portada del álbum. Un prefijo numérico en la
// etiqueta ("1 Ferias") define el orden y no se muestra en la web.
//
// Ejecuta  npm run galeria  y por cada foto se generan en src/assets/galeria/<misma ruta>/:
//   <n>.webp        → 1600px, para verla en grande
//   <n>.thumb.webp  → 640px, para tarjetas y carrusel
// Las fotos ya procesadas se saltan; las que ya no existen en originales se eliminan.
import { readdir, mkdir, stat, rm } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'galeria-originales');
const OUT = path.join(ROOT, 'src/assets/galeria');
const EXTS = /\.(jpe?g|png|webp|tiff?|avif)$/i;
const SIZES = [
    { suffix: '.webp', width: 1600, quality: 78 },
    { suffix: '.thumb.webp', width: 640, quality: 72 },
];

async function exists(p) {
    try { return await stat(p); } catch { return null; }
}

async function dirs(p) {
    return (await readdir(p, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name);
}

async function removeEmptyDirs(dir) {
    for (const sub of await dirs(dir)) await removeEmptyDirs(path.join(dir, sub));
    if (dir !== OUT && (await readdir(dir)).length === 0) await rm(dir, { recursive: true });
}

async function main() {
    if (!(await exists(SRC))) {
        console.error(`No existe la carpeta ${path.relative(ROOT, SRC)}/`);
        process.exit(1);
    }

    const expected = new Set();
    let created = 0, skipped = 0, before = 0, after = 0, albums = 0;

    for (const tag of await dirs(SRC)) {
        const loose = (await readdir(path.join(SRC, tag))).filter((f) => EXTS.test(f));
        if (loose.length) console.warn(`  ⚠ ${tag}/ tiene ${loose.length} foto(s) sueltas; deben ir dentro de una carpeta de álbum. Se omiten.`);

        for (const album of await dirs(path.join(SRC, tag))) {
            const inDir = path.join(SRC, tag, album);
            const outDir = path.join(OUT, tag, album);
            await mkdir(outDir, { recursive: true });
            albums++;

            for (const file of await readdir(inDir)) {
                if (!EXTS.test(file)) {
                    if (!file.startsWith('.')) console.warn(`  ⚠ formato no soportado, se omite: ${tag}/${album}/${file} (usa JPG o PNG)`);
                    continue;
                }
                const input = path.join(inDir, file);
                const base = file.replace(EXTS, '');
                const inStat = await stat(input);

                for (const { suffix, width, quality } of SIZES) {
                    const output = path.join(outDir, base + suffix);
                    expected.add(output);
                    const outStat = await exists(output);
                    if (outStat && outStat.mtimeMs >= inStat.mtimeMs) { skipped++; continue; }

                    const info = await sharp(input)
                        .rotate() // respeta la orientación EXIF del celular
                        .resize({ width, withoutEnlargement: true })
                        .webp({ quality })
                        .toFile(output);
                    created++;
                    if (suffix === '.webp') {
                        before += inStat.size;
                        after += info.size;
                    }
                }
            }
            console.log(`  ✓ ${tag} / ${album}`);
        }
    }

    // Borra versiones optimizadas cuyas fotos originales ya no existen
    let removed = 0;
    if (await exists(OUT)) {
        for (const entry of await readdir(OUT, { recursive: true, withFileTypes: true })) {
            if (!entry.isFile()) continue;
            const p = path.join(entry.parentPath, entry.name);
            if (!expected.has(p)) { await rm(p); removed++; }
        }
        await removeEmptyDirs(OUT);
    }

    console.log(`\nListo: ${albums} álbumes, ${created} archivos generados, ${skipped} sin cambios, ${removed} eliminados.`);
    if (before) console.log(`Peso de las fotos nuevas: ${(before / 1e6).toFixed(1)} MB → ${(after / 1e6).toFixed(2)} MB`);
}

main().catch((err) => { console.error(err); process.exit(1); });
