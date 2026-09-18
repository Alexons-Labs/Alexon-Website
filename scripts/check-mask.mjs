import { writeFileSync } from "node:fs";
import sharp from "sharp";
import { MARK, PEAK, SWEEP, FLOURISH, LOGO_VIEWBOX } from "../lib/logo.ts";

const W = Number(process.argv[2] ?? 52);

// Red = mark. Black = mark actually revealed by the mask at 100% draw.
// Any red pixel left over is a part of the logo the animation would never show.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${LOGO_VIEWBOX}" width="1080" height="960">
<defs>
  <mask id="m" maskUnits="userSpaceOnUse" x="100" y="85" width="426" height="386">
    <g fill="none" stroke="#fff" stroke-width="${W}" stroke-linecap="round" stroke-linejoin="round">
      <path d="${PEAK}"/><path d="${SWEEP}"/><path d="${FLOURISH}"/>
    </g>
  </mask>
</defs>
<rect x="133" y="118" width="360" height="320" fill="white"/>
<path d="${MARK}" fill="#ff0000"/>
<path d="${MARK}" fill="#000000" mask="url(#m)"/>
</svg>`;

writeFileSync("scripts/check-mask.svg", svg);
const { data, info } = await sharp(Buffer.from(svg))
  .raw()
  .toBuffer({ resolveWithObject: true });

let red = 0;
let black = 0;
for (let i = 0; i < data.length; i += info.channels) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  if (r > 180 && g < 90 && b < 90) red++;
  else if (r < 80 && g < 80 && b < 80) black++;
}
await sharp(Buffer.from(svg)).png().toFile("scripts/check-mask.png");
console.log(`stroke-width ${W} -> uncovered ${red}px of ${red + black}px (${((red / (red + black)) * 100).toFixed(2)}%)`);
