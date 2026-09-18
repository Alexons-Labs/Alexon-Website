import { chromium } from "playwright-core";
import { join } from "node:path";

const EXE = join(process.env.LOCALAPPDATA, "ms-playwright", "chromium-1234", "chrome-win64", "chrome.exe");
const BASE = process.env.BASE ?? "http://localhost:3212";
const browser = await chromium.launch({ executablePath: EXE });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  javaScriptEnabled: false,
  deviceScaleFactor: 1,
});
const p = await ctx.newPage();
await p.goto(BASE, { waitUntil: "load" });
await p.waitForTimeout(800);

const audit = await p.evaluate(() => {
  const check = (sel, label) => {
    const el = document.querySelector(sel);
    if (!el) return `${label}: MISSING`;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return `${label}: opacity=${cs.opacity} transform=${cs.transform === "none" ? "none" : "shifted"} size=${Math.round(r.width)}x${Math.round(r.height)}`;
  };
  return [
    check("h1", "hero h1"),
    check(".reveal", "first .reveal"),
    check(".reveal-line > span", "first reveal-line span"),
    check(".preloader", "preloader"),
    `body text length: ${document.body.innerText.trim().length}`,
    `html classes: "${document.documentElement.className}"`,
  ].join("\n");
});
console.log(audit);
await p.screenshot({ path: "scripts/shots/nojs-full.png", fullPage: true });
await browser.close();
