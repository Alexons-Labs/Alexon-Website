# Alexons

Marketing site for Alexons. Next.js App Router, TypeScript, Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## The design system

Black and white, sharp typography against smooth curves — the contrast that is
already in the mark. Everything lives in `app/globals.css`:

- **Tokens** — `@theme` block: `ink`, `paper`, `off`, `line`, `mid`, `dark`, the
  two font families, and two easing curves. Use `bg-ink`, `text-mid`, and so on.
- **Type** — `.display` plus `.display-xl` / `-lg` / `-md` for headlines,
  `.eyebrow` for the wide-tracked all-caps labels, `.numeral` for figures,
  `.lede` for the standfirst paragraph.
- **Layout** — `.shell` (max 1440px, fluid gutters) and `.band` (section
  rhythm). Sections are 12-column grids from `lg` and stack below it.
- **Components** — `.btn` / `.btn-solid` / `.btn-ghost`, `.link-sweep`, `.rule`.

### Dark sections

Put `data-theme="dark"` and `on-dark` on any black section. `data-theme` is what
the nav hit-tests to invert itself; `on-dark` flips the shared component styles
(buttons, rules, selection). Both are needed.

### Motion

No animation library — CSS transitions plus one `IntersectionObserver`.

- Add `.reveal` to fade-and-rise an element on scroll, or `.reveal-line` (with an
  inner `<span>`) to wipe a headline line up from its baseline. Stagger with
  `style={{ "--reveal-delay": "120ms" }}`.
- `components/RevealProvider.tsx` mounts the single observer, so sections stay
  server components.
- Every hide-then-show rule is scoped to `html.js`, set by the head script in
  `app/layout.tsx` before first paint. With scripting off nothing is hidden and
  the page reads as ordinary flowing content.

## The mark

`Frame 2.jpg.jpeg` was traced once into `lib/logo.ts`; the build never touches
the JPEG.

- `MARK` — the filled outline, two subpaths: the sharp-to-smooth sweep and the
  flourish.
- `PEAK` / `SWEEP` / `FLOURISH` — centrelines of the same three gestures. They
  are never painted. `components/LogoDraw.tsx` strokes them inside an SVG mask
  and unrolls each with `stroke-dashoffset`, so the mark draws in the order a
  pen would make it while keeping its calligraphic weight. `<Logo />` is the
  plain static version; both inherit `currentColor`.

```bash
npm run logo:trace     # re-trace the JPEG (only if the artwork changes)
npm run logo:assets    # regenerate public/logo.svg
npm run logo:icons     # rasterise icon.png / apple-icon.png / icon-maskable.png
npm run logo:verify 38 # assert the mask covers every pixel of the mark
```

`logo:verify` matters: the mask stroke must be wide enough to reveal the whole
fill. 30 is the minimum, 38 is what ships. Narrower leaves slivers of the logo
permanently invisible.

## Contact form

`components/Contact.tsx` posts to `app/api/contact/route.ts`, which validates
and then delivers via **Resend**. Configure it first:

```bash
# copy to .env.local (or set in your host's env panel)
RESEND_API_KEY=re_...
RESEND_FROM="Alexons <hello@alexon.in>"   # domain verified in Resend, else onboarding@resend.dev
CONTACT_TO=alexonlabsofficial@gmail.com     # defaults to this anyway
```

Without `RESEND_API_KEY` the route responds `503` and tells the visitor to
email directly, so the form degrades honestly.

## Still to come

- Real case studies in `lib/projects.ts` (shared by the homepage's upcoming
  Selected Work section and `/work`). The list is intentionally empty for now;
  `/work` renders an honest "building in public" state until the first
  products ship.
- Real open roles in `components/CareersIndex.tsx`.
- `components/Metrics.tsx` is built but deliberately not on the homepage;
  add it once the numbers are real.
- Only GitHub is linked in `lib/nav.ts` — add LinkedIn/Instagram once the
  accounts exist.
- The founders (M S Arul, Kishore Kumar R) live in `components/Team.tsx` on
  `/about`, with email and `tel:` links.

## QA

`npm run shots` drives a local Chromium over the running production build and
writes desktop, mobile and intro captures to `scripts/shots/`. Requires
`npm run build && npm start` first, and `BASE` set if not on port 3210.
