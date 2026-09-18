# Deploying Alexons

This runbook takes the site from this folder to live on **alexon.in**. It uses
Vercel (Next.js-native, free tier is enough) and Resend for the contact form.

Before you start you need accounts at:
- **Vercel** — https://vercel.com (GitHub sign-in is easiest)
- **Resend** — https://resend.com (email delivery for the contact form)
- Your domain **alexon.in** registered somewhere with DNS control

---

## 1. Push the code to GitHub

The folder is not a git repo yet.

```bash
cd "D:\Alexons Website"
git init
git add -A
git commit -m "Alexons site: pages, brand, contact form, icons"
```

Create an empty repo at https://github.com/alexon-labs (e.g. `alexon.in`), then:

```bash
git remote add origin https://github.com/alexon-labs/alexon.in.git
git branch -M main
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `.next`, `.env*`, and the QA
screenshots, so nothing sensitive is committed. Don't commit `.env.local`.

---

## 2. Import into Vercel

1. vercel.com → **Add New… → Project** → pick the new repo.
2. Framework preset: **Next.js** (auto-detected). No build overrides needed.
3. **Environment Variables** (Project Settings → Environment Variables, add for
   Production and Preview):

   | Name          | Value                                                        |
   | ------------- | ------------------------------------------------------------ |
   | `RESEND_API_KEY` | from resend.com/api-keys                                 |
   | `RESEND_FROM` | `"Alexons <hello@alexon.in>"`                                |
   | `CONTACT_TO`  | `alexonlabsofficial@gmail.com`                               |

4. Deploy. Vercel gives you a temporary `*.vercel.app` URL — the form and all
   six routes work there immediately.

---

## 3. Configure Resend

1. resend.com → **Domains → Add** → enter `alexon.in`, follow region choice.
2. Add the DNS records Resend shows you (TXT, and the DKIM/DMARC records) at
   your domain registrar.
3. Wait ~10 min and hit **Verify** in Resend — status goes green.
4. The sender `hello@alexon.in` is now usable; you don't need a mail account
   to *send* from it — replies from the form go to the visitor's address
   (`replyTo`), not to `hello@alexon.in`.

> **Before the domain is verified** you can only send as
> `onboarding@resend.dev`, which is restricted. Don't rely on it live.

---

## 4. Point alexon.in at Vercel

1. In Vercel, open the project → **Settings → Domains** → add `alexon.in`.
2. Vercel shows nameserver assignments — change your registrar's nameservers
   for `alexon.in` to those four values.
3. DNS propagates over minutes to hours. Vercel marks the domain **Valid**
   and serves HTTPS automatically (it also handles `www.alexon.in` if you add
   it as a redirect domain).

---

## 5. Verify after launch

```bash
npm run build && npm run start   # local smoke test first
```

On the live site, check:

- [ ] `https://alexon.in` loads; `https://alexon.in/sitemap.xml` and
      `robots.txt` resolve and point at `alexon.in`
- [ ] Nav stays on all 5 inner pages; mobile menu works; dark sections invert
      the nav
- [ ] Submit the contact form with a throwaway email → you receive it at
      `alexonlabsofficial@gmail.com`, the form clears and shows the thanks
      message
- [ ] Browser console: no errors (open DevTools on desktop + mobile)
- [ ] Google Search Console: add the property `alexon.in`, submit the sitemap

---

## Limits & notes

- **Next 15 audit advisories** — `npm audit` reports moderate (`next`) and
  high (`postcss`) production issues fixed only by major upgrades. Deploy is
  fine; schedule the Next 16 upgrade as its own task and re-run this runbook's
  checks after.
- **Content** — `lib/projects.ts` rows and `components/CareersIndex.tsx` roles
  are placeholders. Replace before pointing anyone at `/work` or `/careers`.
- **Elsewhere** — if you prefer not to use Vercel, the app is a standard Next.js
  build; Netlify/Fly.io work the same way (same env vars, same Resend setup).