/**
 * One-time: trace the source JPEG of the Alexons mark into clean vector paths.
 * Run with `node scripts/trace-logo.mjs`. Output lands in public/ and is
 * committed, so the JPEG is never needed at build time.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import potrace from "potrace";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "Frame 2.jpg.jpeg");

const params = {
  threshold: 160,
  color: "#000000",
  background: "transparent",
  turdSize: 4,
  alphaMax: 1.0,
  optCurve: true,
  optTolerance: 0.15,
  turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY,
};

potrace.trace(readFileSync(src), params, (err, svg) => {
  if (err) throw err;

  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1];
  const paths = [...svg.matchAll(/ d="([^"]+)"/g)].map((m) => m[1]);

  writeFileSync(join(root, "public", "logo-traced.svg"), svg, "utf8");
  writeFileSync(
    join(root, "scripts", "logo-paths.json"),
    JSON.stringify({ viewBox, count: paths.length, paths }, null, 2),
    "utf8",
  );

  console.log("viewBox:", viewBox);
  console.log("paths:", paths.length);
  paths.forEach((d, i) => console.log(`  [${i}] ${d.length} chars`));
});
