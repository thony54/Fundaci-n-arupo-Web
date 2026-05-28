const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

const DIRS = [
    path.join(__dirname, 'src', 'assets', 'Convenios'),
    path.join(__dirname, 'src', 'assets', 'Reconocimientos')
];

async function splitImage(filePath, outputDir) {
    try {
        const image = await Jimp.read(filePath);
        const { width, height } = image.bitmap;
        
        // Find empty columns to split horizontally.
        // We look for a column where all pixels are either white or transparent.
        let isColumnEmpty = new Array(width).fill(true);
        
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                const color = image.getPixelColor(x, y);
                const rgba = Jimp.intToRGBA(color);
                
                // If pixel is not white and not transparent, column is not empty
                const isWhite = rgba.r > 240 && rgba.g > 240 && rgba.b > 240;
                const isTransparent = rgba.a < 10;
                if (!isWhite && !isTransparent) {
                    isColumnEmpty[x] = false;
                    break;
                }
            }
        }
        
        // Find segments of non-empty columns
        const segments = [];
        let start = -1;
        for (let x = 0; x < width; x++) {
            if (!isColumnEmpty[x] && start === -1) {
                start = x;
            } else if (isColumnEmpty[x] && start !== -1) {
                if (x - start > 20) {
                    segments.push({ start, end: x });
                }
                start = -1;
            }
        }
        if (start !== -1 && width - start > 20) {
            segments.push({ start, end: width });
        }
        
        const ext = path.extname(filePath);
        const baseName = path.basename(filePath, ext);
        
        if (segments.length > 1) {
            console.log(`Splitting ${baseName}${ext} into ${segments.length} parts`);
            
            for (let i = 0; i < segments.length; i++) {
                const seg = segments[i];
                let cropStart = Math.max(0, seg.start - 10);
                let cropEnd = Math.min(width, seg.end + 10);
                let cropWidth = cropEnd - cropStart;
                
                const cloned = image.clone();
                cloned.crop(cropStart, 0, cropWidth, height);
                
                const newPath = path.join(outputDir, `${baseName}_part${i + 1}${ext}`);
                await cloned.writeAsync(newPath);
            }
            
            // Delete original file
            fs.unlinkSync(filePath);
        } else {
            console.log(`${baseName}${ext} does not need splitting.`);
        }
        
    } catch (e) {
        console.error(`Error processing ${filePath}:`, e.message);
    }
}

async function run() {
    for (const dir of DIRS) {
        if (!fs.existsSync(dir)) continue;
        const files = fs.readdirSync(dir);
        for (const file of files) {
            if (!file.match(/\.(png|jpg|jpeg)$/i)) continue; // Jimp supports png, jpeg, bmp
            if (file.includes('_part')) continue;
            
            const filePath = path.join(dir, file);
            await splitImage(filePath, dir);
        }
    }
}

run();
