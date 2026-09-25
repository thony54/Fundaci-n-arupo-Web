// Optimiza las fotos de la galería.
//
// Uso: coloca las fotos originales en  galeria-originales/<Sección>/<Título - Categoría>.jpg
//      y ejecuta  npm run galeria
//
// Por cada foto genera en src/assets/galeria/<Sección>/ dos versiones .webp:
//   <nombre>.webp        → 1600px, para verla en grande
//   <nombre>.thumb.webp  → 640px, para tarjetas y carrusel
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

async function main() {
    if (!(await exists(SRC))) {
        console.error(`No existe la carpeta ${path.relative(ROOT, SRC)}/`);
        process.exit(1);
    }

    const expected = new Set();
    let created = 0, skipped = 0, before = 0, after = 0;

    for (const section of await readdir(SRC, { withFileTypes: true })) {
        if (!section.isDirectory()) continue;
        const inDir = path.join(SRC, section.name);
        const outDir = path.join(OUT, section.name);
        await mkdir(outDir, { recursive: true });

        for (const file of await readdir(inDir)) {
            if (!EXTS.test(file)) {
                if (!file.startsWith('.')) console.warn(`  ⚠ formato no soportado, se omite: ${section.name}/${file} (usa JPG o PNG)`);
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
                    console.log(`  ✓ ${section.name}/${base}  ${(inStat.size / 1e6).toFixed(1)} MB → ${(info.size / 1e3).toFixed(0)} KB`);
                }
            }
        }
    }

    // Borra versiones optimizadas cuyas fotos originales ya no existen
    let removed = 0;
    if (await exists(OUT)) {
        for (const section of await readdir(OUT, { withFileTypes: true })) {
            if (!section.isDirectory()) continue;
            const dir = path.join(OUT, section.name);
            for (const file of await readdir(dir)) {
                const p = path.join(dir, file);
                if (!expected.has(p)) { await rm(p); removed++; }
            }
            if ((await readdir(dir)).length === 0) await rm(dir, { recursive: true });
        }
    }

    console.log(`\nListo: ${created} generadas, ${skipped} sin cambios, ${removed} eliminadas.`);
    if (before) console.log(`Peso: ${(before / 1e6).toFixed(1)} MB → ${(after / 1e6).toFixed(2)} MB`);
}

main().catch((err) => { console.error(err); process.exit(1); });
