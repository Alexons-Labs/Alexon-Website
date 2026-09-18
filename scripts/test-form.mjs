import { chromium } from "playwright-core";
import { join } from "node:path";

const EXE = join(process.env.LOCALAPPDATA, "ms-playwright", "chromium-1234", "chrome-win64", "chrome.exe");
const BASE = process.env.BASE ?? "http://localhost:3212";
const browser = await chromium.launch({ executablePath: EXE });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const p = await ctx.newPage();
const errors = [];
p.on("pageerror", (e) => errors.push(e.message));

await p.goto(`${BASE}/contact`, { waitUntil: "networkidle" });
await p.waitForTimeout(2200);

// Happy path.
await p.fill("#name", "Ada Lovelace");
await p.fill("#email", "ada@example.com");
await p.fill("#brief", "An analytical engine for the web.");
await p.click('button[type="submit"]');
await p.waitForTimeout(1400);
const ok = await p.locator('[role="status"]').textContent();
console.log("valid submit  ->", JSON.stringify(ok));
const cleared = await p.inputValue("#name");
console.log("form reset    ->", cleared === "" ? "yes" : `no ("${cleared}")`);

// Server-side rejection: bypass the browser's own email validation.
const bad = await p.evaluate(async () => {
  const r = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "x", email: "not-an-email", brief: "y" }),
  });
  return { status: r.status, body: await r.json() };
});
console.log("bad email     ->", bad.status, JSON.stringify(bad.body));

const empty = await p.evaluate(async () => {
  const r = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "", email: "a@b.co", brief: "" }),
  });
  return { status: r.status, body: await r.json() };
});
console.log("empty fields  ->", empty.status, JSON.stringify(empty.body));

await p.screenshot({ path: "scripts/shots/contact-sent.png" });
await browser.close();
console.log(errors.length ? "ERRORS: " + errors.join("; ") : "no page errors");
