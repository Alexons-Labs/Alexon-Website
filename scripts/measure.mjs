import { chromium } from "playwright-core";
import { join } from "node:path";

const EXE = join(process.env.LOCALAPPDATA, "ms-playwright", "chromium-1234", "chrome-win64", "chrome.exe");
const browser = await chromium.launch({ executablePath: EXE });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3210/", { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

const out = await page.evaluate(() => {
  const h1 = document.querySelector("h1");
  const probe = document.createElement("span");
  const cs = getComputedStyle(h1);
  probe.style.cssText = `position:absolute;visibility:hidden;white-space:nowrap;font-family:${cs.fontFamily};font-weight:${cs.fontWeight};letter-spacing:${cs.letterSpacing};text-transform:uppercase;font-size:100px;`;
  probe.textContent = "WHAT'S NEXT.";
  document.body.appendChild(probe);
  const emWidth = probe.getBoundingClientRect().width / 100; // width per 1px of font-size
  probe.textContent = "WE BUILD";
  const emWidth2 = probe.getBoundingClientRect().width / 100;
  probe.remove();

  const shell = document.querySelector(".shell");
  return {
    viewport: window.innerWidth,
    shellInner: shell.clientWidth - parseFloat(getComputedStyle(shell).paddingLeft) * 2,
    h1Width: h1.getBoundingClientRect().width,
    h1FontPx: parseFloat(cs.fontSize),
    ratioLongest: emWidth,
    ratioFirst: emWidth2,
  };
});

console.log(out);
console.log(`\n"WHAT'S NEXT." needs width = fontSize * ${out.ratioLongest.toFixed(3)}`);
for (const cols of [7, 8, 9, 12]) {
  const w = (out.shellInner - (12 - cols) * 0) * (cols / 12) - (cols < 12 ? 40 : 0);
  console.log(`  ${cols}/12 col = ${w.toFixed(0)}px -> max font ${(w / out.ratioLongest).toFixed(0)}px (${((w / out.ratioLongest / out.viewport) * 100).toFixed(2)}vw)`);
}
await browser.close();
