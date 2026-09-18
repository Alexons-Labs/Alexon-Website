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
            <a
              href={`mailto:${EMAIL}`}
              className="link-sweep mt-8 inline-block text-lg text-white/80"
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
            <ul className="space-y-4">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="eyebrow link-sweep group inline-flex items-center gap-2"
                  >
                    {s.label}
                    <span className="arrow arrow-ne">&#8599;</span>
                  </a>
                </li>
              ))}
            </ul>
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

      {/* The mark, oversized and cropped by the bottom edge — a watermark that
          closes the page with the same shape that opened it. */}
      <Logo
        className="pointer-events-none absolute -bottom-[22%] left-1/2 z-0 h-auto w-[150%] max-w-none -translate-x-1/2 text-white/[0.055] md:w-[85%]"
        title=""
      />
    </footer>
  );
}
