import Link from "next/link";
import Logo from "./Logo";
import { EMAIL, NAV_LINKS, SOCIALS } from "@/lib/nav";

export default function Footer() {
  return (
    <footer data-theme="dark" className="on-dark relative overflow-hidden bg-ink text-paper">
      <div className="shell relative z-10 pt-20 pb-14 md:pt-28">
        <div className="grid gap-y-14 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-5">
            <Link href="/#top" className="inline-flex items-center gap-3">
              <Logo className="h-8 w-auto" title="Alexons" />
              <span className="font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-[0.3em]">
                Alexons
              </span>
            </Link>
            <p className="eyebrow mt-6 text-white/50">Technology &#215; Innovation</p>

            <ul className="mt-5 flex items-center gap-6">
              <li>
                <Link href="/terms-and-conditions" className="eyebrow link-sweep text-white/60 hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="eyebrow link-sweep text-white/60 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  title={s.label}
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {s.label === "Instagram" && (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )}
                  {s.label === "LinkedIn" && (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                  {s.label === "GitHub" && (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="link-sweep mt-6 inline-block break-all text-base text-white/80 sm:break-normal sm:text-lg"
            >
              {EMAIL}
            </a>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="eyebrow link-sweep">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 md:col-start-9">
            <p className="eyebrow text-white/50">Direct Inquiries</p>
            <p className="mt-3 text-sm text-white/70">
              Tell us what you want to build or discuss opportunities.
            </p>
            <Link href="/contact" className="btn btn-solid group mt-6">
              Get In Touch
              <span className="arrow arrow-ne">&#8599;</span>
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-8">
          <p className="eyebrow text-white/50">
            &copy; {new Date().getFullYear()} Alexons. All rights reserved.
          </p>
          <a href="#top" className="eyebrow link-sweep group inline-flex items-center gap-2">
            Back to top
            <span className="arrow inline-block transition-transform duration-500 group-hover:-translate-y-1">
              &#8593;
            </span>
          </a>
        </div>
      </div>

      {/* Full watermark logo — clearly visible and fully framed without cutoff */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <Logo
          className="h-[82%] max-h-[480px] w-auto text-white/[0.11] transition-opacity duration-500 md:h-[90%]"
          title=""
        />
      </div>
    </footer>
  );
}
