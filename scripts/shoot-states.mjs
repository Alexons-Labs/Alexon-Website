import { chromium } from "playwright-core";
import { join } from "node:path";
import { mkdirSync } from "node:fs";

const EXE = join(process.env.LOCALAPPDATA, "ms-playwright", "chromium-1234", "chrome-win64", "chrome.exe");
const BASE = process.env.BASE ?? "http://localhost:3212";
const OUT = "scripts/shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ executablePath: EXE });
const errors = [];

async function page(width, height) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  p.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  p.on("console", (m) => m.type() === "error" && errors.push(`console: ${m.text()}`));
  await p.goto(BASE, { waitUntil: "networkidle" });
  await p.evaluate(() => { document.documentElement.style.scrollBehavior = "auto"; });
  await p.waitForTimeout(2400);
  return [p, ctx];
}

// 1. Nav sitting over the black "IDEAS NEED EXECUTION" section.
{
  const [p, ctx] = await page(1440, 900);
  await p.evaluate(() => {
    const s = document.querySelector('[data-theme="dark"]');
    window.scrollTo(0, s.getBoundingClientRect().top + window.scrollY + 60);
  });
  await p.waitForTimeout(900);
  await p.screenshot({ path: `${OUT}/nav-over-dark.png` });
  const mode = await p.evaluate(() => {
    const h = document.querySelector("header");
    return { classes: h.className, bg: getComputedStyle(h).backgroundColor, color: getComputedStyle(h).color };
  });
  console.log("nav over dark:", mode.bg, mode.color, mode.classes.includes("on-dark") ? "(inverted)" : "(NOT inverted)");
  await ctx.close();
}

// 2. Nav scrolled over a light section.
{
  const [p, ctx] = await page(1440, 900);
  await p.evaluate(() => window.scrollTo(0, 1200));
  await p.waitForTimeout(900);
  await p.screenshot({ path: `${OUT}/nav-light.png`, clip: { x: 0, y: 0, width: 1440, height: 200 } });
  const bg = await p.evaluate(() => getComputedStyle(document.querySelector("header")).backgroundColor);
  console.log("nav over light:", bg);
  await ctx.close();
}

// 3. Selected Work row, hovered.
{
  const [p, ctx] = await page(1440, 900);
  const row = p.locator("h3", { hasText: "Project Name" }).first();
  await row.scrollIntoViewIfNeeded();
  await p.waitForTimeout(700);
  await row.hover();
  await p.waitForTimeout(900);
  await p.screenshot({ path: `${OUT}/work-hover.png` });
  await ctx.close();
}

// 4. Mobile menu overlay.
{
  const [p, ctx] = await page(390, 844);
  await p.getByRole("button", { name: "Menu" }).click();
  await p.waitForTimeout(700);
  await p.screenshot({ path: `${OUT}/mobile-menu.png` });
  await ctx.close();
}

await browser.close();
console.log(errors.length ? "\nERRORS:\n" + errors.join("\n") : "\nno console/page errors");
