// Şəkil optimallaşdırması: public/images altındakı JPG/PNG faylları WebP-yə çevrilir, orijinal silinir.
// İstifadə: npm run optimize:images
// `optimizeImage` ayrıca funksiyadır ki, gələcəkdə admin panel (yükləmə axını) eyni məntiqi istifadə edə bilsin.
import { readdirSync, statSync, unlinkSync } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = fileURLToPath(new URL("../public/images/", import.meta.url));
const MAX_WIDTH = 2000; // ondan geniş şəkillər kiçildilir (böyüdülmür)

/** Bir şəkli WebP-yə çevirir. Loqolar (PNG) yüksək keyfiyyətlə, fotolar 80 ilə saxlanır. */
export async function optimizeImage(input, output, { quality = 80 } = {}) {
  await sharp(input)
    .rotate() // EXIF istiqamətini tətbiq edir
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(output);
}

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else yield p;
  }
}

let before = 0;
let after = 0;
for (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
  const out = file.slice(0, -ext.length) + ".webp";
  await optimizeImage(file, out, { quality: ext === ".png" ? 92 : 80 });
  before += statSync(file).size;
  after += statSync(out).size;
  unlinkSync(file);
  console.log(`${file.replace(ROOT, "")} -> .webp`);
}
if (before) console.log(`\n${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`);
else console.log("Çevriləcək JPG/PNG yoxdur.");
