import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

import { join } from "node:path";

const EXE =
  process.env.PW_CHROME ??
  join(process.env.LOCALAPPDATA, "ms-playwright", "chromium-1234", "chrome-win64", "chrome.exe");
const BASE = process.env.BASE ?? "http://localhost:3210";
const OUT = "scripts/shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ executablePath: EXE });

const errors = [];

async function shoot(name, { path: url = "/", width, height, full = true, wait = 2600, prep }) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[${name}] console: ${m.text()}`);
  });
  page.on("pageerror", (e) => errors.push(`[${name}] pageerror: ${e.message}`));

  await page.goto(`${BASE}${url}`, { waitUntil: "networkidle" });
  if (prep) await prep(page);

  // Walk the page so every IntersectionObserver reveal has actually fired;
  // a fullPage screenshot alone captures past the viewport without scrolling.
  if (full) {
    await page.evaluate(async () => {
      // The site sets `scroll-behavior: smooth`, so a scrollTo animates and
      // never lands within the step budget — the walk would stall part way
      // down and later reveals would never fire.
      const prior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      const step = window.innerHeight * 0.7;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 140));
      }
      window.scrollTo(0, 0);
      // Reveals run a 0.9s transition plus up to 0.42s of stagger delay and
      // keep running after we scroll past, so settle well clear of that.
      await new Promise((r) => setTimeout(r, 2400));
      document.documentElement.style.scrollBehavior = prior;
    });
  }
  await page.waitForTimeout(wait);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: full });
  await ctx.close();
  console.log("shot", name);
}

// Desktop 1440 — the reference width from the brief.
await shoot("desktop-full", { width: 1440, height: 900 });
await shoot("desktop-hero", { width: 1440, height: 900, full: false });

// Mobile 390 — the second reference width.
await shoot("mobile-full", { width: 390, height: 844 });
await shoot("mobile-hero", { width: 390, height: 844, full: false });

// The intro, caught mid-draw.
await shoot("intro-mid", {
  width: 1440,
  height: 900,
  full: false,
  wait: 0,
  prep: (page) => page.waitForTimeout(1150),
});

await browser.close();

if (errors.length) {
  console.log("\n--- BROWSER ERRORS ---");
  errors.forEach((e) => console.log(e));
} else {
  console.log("\nno console/page errors");
}
