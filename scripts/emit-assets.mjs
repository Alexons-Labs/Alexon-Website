import { writeFileSync } from "node:fs";
import { LOGO_VIEWBOX, MARK } from "../lib/logo.ts";

// Tight-cropped standalone mark: favicon, social, anywhere outside React.
writeFileSync(
  "public/logo.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${LOGO_VIEWBOX}" fill="none"><path d="${MARK}" fill="currentColor"/></svg>\n`,
);

// Same mark on black, padded — used for the maskable/apple icon.
writeFileSync(
  "public/logo-mark-dark.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="53 38 520 480"><rect x="53" y="38" width="520" height="480" fill="#000"/><path d="${MARK}" fill="#fff"/></svg>\n`,
);

console.log("wrote public/logo.svg, public/logo-mark-dark.svg");
