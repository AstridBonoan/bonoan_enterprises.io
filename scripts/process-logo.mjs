// Generates theme-aware variants of the Bonoan Enterprises logo.
//
// Reads `public/logo.png` (the source: bright "BE" mark + white "Bonoan Enterprises"
// wordmark on a solid black canvas) and writes two transparent PNGs:
//
//   - public/logo-dark.png  -> transparent bg + white wordmark   (use on dark UIs)
//   - public/logo-light.png -> transparent bg + slate wordmark   (use on light UIs)
//
// The colored "B" mark is preserved in both because we only recolor near-grayscale
// pixels (the wordmark) and only drop the near-black background to alpha 0.
//
// Run with: `node scripts/process-logo.mjs`

import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const sourcePath = path.join(projectRoot, 'public', 'logo.png');
const lightOutPath = path.join(projectRoot, 'public', 'logo-light.png');
const darkOutPath = path.join(projectRoot, 'public', 'logo-dark.png');
const markLightOutPath = path.join(projectRoot, 'public', 'logo-mark-light.png');
const markDarkOutPath = path.join(projectRoot, 'public', 'logo-mark-dark.png');

// Pixels darker than this luminance are treated as pure background and removed.
const BG_LUMA_CUTOFF = 18;
// Pixels with luminance up to this value are softly faded out (anti-aliased edges).
const BG_LUMA_FADE_END = 60;
// Saturation (max-min channel) below this means the pixel is grayscale-ish.
// The "B" mark uses saturated blue/green, so only the wordmark + bg are grayscale.
const GRAYSCALE_SAT = 30;
// In the light variant, the wordmark gets remapped to this slate color so it
// reads cleanly on a white page (matches Tailwind's slate-900).
const WORDMARK_LIGHT = { r: 15, g: 23, b: 42 };

const luma = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

const { data, info } = await sharp(sourcePath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

if (info.channels !== 4) {
  throw new Error(`Expected 4 channels (RGBA), got ${info.channels}`);
}

const lightBuf = Buffer.alloc(data.length);
const darkBuf = Buffer.alloc(data.length);

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];
  const l = luma(r, g, b);
  const sat = Math.max(r, g, b) - Math.min(r, g, b);

  // Default: copy source pixel unchanged into both buffers.
  lightBuf[i] = r;
  lightBuf[i + 1] = g;
  lightBuf[i + 2] = b;
  lightBuf[i + 3] = a;
  darkBuf[i] = r;
  darkBuf[i + 1] = g;
  darkBuf[i + 2] = b;
  darkBuf[i + 3] = a;

  if (l <= BG_LUMA_CUTOFF) {
    // Pure black background -> fully transparent.
    lightBuf[i + 3] = 0;
    darkBuf[i + 3] = 0;
    continue;
  }

  if (l < BG_LUMA_FADE_END && sat < GRAYSCALE_SAT) {
    // Dark grayscale pixels (mostly anti-aliased edges of the wordmark/bg).
    // Fade them out smoothly to avoid a hard halo against the page color.
    const t = (l - BG_LUMA_CUTOFF) / (BG_LUMA_FADE_END - BG_LUMA_CUTOFF);
    const faded = Math.round(255 * t);
    lightBuf[i + 3] = Math.min(a, faded);
    darkBuf[i + 3] = Math.min(a, faded);
    continue;
  }

  if (sat < GRAYSCALE_SAT && l >= BG_LUMA_FADE_END) {
    // Bright grayscale pixel -> the white "Bonoan Enterprises" wordmark.
    // Dark variant: keep it white (already correct).
    // Light variant: remap to a dark slate so it reads on white pages,
    // preserving the original alpha for nice anti-aliasing.
    lightBuf[i] = WORDMARK_LIGHT.r;
    lightBuf[i + 1] = WORDMARK_LIGHT.g;
    lightBuf[i + 2] = WORDMARK_LIGHT.b;
    // alpha already copied above
  }
  // Saturated pixels (the colored "B" mark) are preserved as-is in both variants.
}

const baseInfo = {
  raw: { width: info.width, height: info.height, channels: 4 },
};

// Trim the surrounding transparent padding so the logo fills the bounding box
// tightly. This keeps the navbar/footer rendering crisp without large empty
// whitespace around the mark.
const trimOpts = { background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 1 };

await sharp(lightBuf, baseInfo)
  .trim(trimOpts)
  .png({ compressionLevel: 9 })
  .toFile(lightOutPath);
await sharp(darkBuf, baseInfo)
  .trim(trimOpts)
  .png({ compressionLevel: 9 })
  .toFile(darkOutPath);

// Find the first all-transparent row after the "B" mark. The lockup has the
// mark at the top and the wordmark beneath, separated by a thin transparent
// band. The light and dark buffers share the same alpha channel, so we scan
// either one. We crop rows [0, markCropHeight) for the mark-only variant.
function findGapAfterMark(buf, width, height) {
  let sawPixel = false;
  for (let y = 0; y < height; y++) {
    let rowHasPixel = false;
    for (let x = 0; x < width; x++) {
      if (buf[(y * width + x) * 4 + 3] > 0) {
        rowHasPixel = true;
        break;
      }
    }
    if (rowHasPixel) {
      sawPixel = true;
    } else if (sawPixel) {
      return y;
    }
  }
  return height;
}

const markCropHeight = Math.max(1, findGapAfterMark(lightBuf, info.width, info.height));

// Extract just the top "B" mark portion of each variant and then trim the
// surrounding transparent padding. We round-trip through PNG buffers between
// the extract and trim steps because chaining them on a single pipeline can
// fail in some sharp versions.
const lightPng = await sharp(lightBuf, baseInfo).png().toBuffer();
const darkPng = await sharp(darkBuf, baseInfo).png().toBuffer();

const lightMarkPng = await sharp(lightPng)
  .extract({ left: 0, top: 0, width: info.width, height: markCropHeight })
  .png()
  .toBuffer();
const darkMarkPng = await sharp(darkPng)
  .extract({ left: 0, top: 0, width: info.width, height: markCropHeight })
  .png()
  .toBuffer();

await sharp(lightMarkPng).trim(trimOpts).png({ compressionLevel: 9 }).toFile(markLightOutPath);
await sharp(darkMarkPng).trim(trimOpts).png({ compressionLevel: 9 }).toFile(markDarkOutPath);

console.log(`Wrote ${path.relative(projectRoot, lightOutPath)} (light, full lockup)`);
console.log(`Wrote ${path.relative(projectRoot, darkOutPath)} (dark, full lockup)`);
console.log(`Wrote ${path.relative(projectRoot, markLightOutPath)} (light, mark only)`);
console.log(`Wrote ${path.relative(projectRoot, markDarkOutPath)} (dark, mark only)`);
