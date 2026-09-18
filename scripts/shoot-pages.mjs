import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

import { join } from "node:path";

const EXE =
  process.env.PW_CHROME ??
  join(process.env.LOCALAPPDATA, "ms-playwright", "chromium-1234", "chrome-win64", "chrome.exe");
const BASE = process.env.BASE ?? "http://localhost:3210";
const OUT = "scripts/shots/pages";
mkdirSync(OUT, { recursive: true });

const ROUTES = ["/", "/about", "/solutions", "/work", "/careers", "/contact"];

const browser = await chromium.launch({ executablePath: EXE });
const errors = [];

async function shoot(name, route, { width, height, full = true }) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[${name}] console: ${m.text()}`);
  });
  page.on("pageerror", (e) => errors.push(`[${name}] pageerror: ${e.message}`));
  page.on("requestfailed", (req) =>
    errors.push(`[${name}] requestfailed: ${req.url()} ${req.failure()?.errorText}`),
  );

  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });

  if (full) {
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = "auto";
      const step = window.innerHeight * 0.7;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 2200));
    });
  }
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: full });
  await ctx.close();
  console.log("shot", name);
}

for (const route of ROUTES) {
  const slug = route === "/" ? "home" : route.replace(/^\//, "");
  await shoot(`desktop-${slug}`, route, { width: 1440, height: 900 });
  await shoot(`mobile-${slug}`, route, { width: 390, height: 844 });
}

await browser.close();

if (errors.length) {
  console.log("\n--- BROWSER ERRORS ---");
  errors.forEach((e) => console.log(e));
} else {
  console.log("\nno console/page errors");
}