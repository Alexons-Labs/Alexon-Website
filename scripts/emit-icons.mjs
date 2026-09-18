import sharp from "sharp";
import { MARK } from "../lib/logo.ts";

// Padded viewBox so the mark has breathing room and is never clipped.
const PADDED = "53 38 520 480";

const svg = (fill, bg) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${PADDED}">` +
  (bg ? `<rect x="53" y="38" width="520" height="480" fill="${bg}"/>` : "") +
  `<path d="${MARK}" fill="${fill}"/></svg>`;

// Transparent, black mark — standard favicon and Apple touch icon.
await sharp(Buffer.from(svg("#000")))
  .resize(512, 512)
  .png()
  .toFile("public/icon.png");
await sharp(Buffer.from(svg("#000")))
  .resize(180, 180)
  .png()
  .toFile("public/apple-icon.png");

// Full-bleed white-on-black, safe zone inside the circle — Android maskable.
await sharp(Buffer.from(svg("#fff", "#000")))
  .resize(512, 512)
  .png()
  .toFile("public/icon-maskable.png");

console.log("wrote public/icon.png, public/apple-icon.png, public/icon-maskable.png");