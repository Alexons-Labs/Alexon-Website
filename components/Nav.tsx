"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/nav";

type Mode = "top" | "light" | "dark";

/**
 * Three states, per the brand rules: transparent at the top of the page, white
 * with a hairline once scrolled, and inverted while a black section sits under
 * the bar.
 *
 * The dark state is resolved by hit-testing the point under the bar for a
 * `[data-theme="dark"]` ancestor rather than by tracking section offsets — that
 * keeps it correct through sticky elements and layout changes without the nav
 * needing to know anything about the page it sits on.
 */
export default function Nav() {
  const [mode, setMode] = useState<Mode>("top");
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLElement | null>(null);
  const frame = useRef(0);

  const measure = useCallback(() => {
    const bar = barRef.current;
    if (!bar) return;

    const y = bar.getBoundingClientRect().bottom - 8;
    const probe = document
      .elementsFromPoint(24, Math.max(y, 1))
      .find((el) => el.closest('[data-theme="dark"]') && !bar.contains(el));

    if (probe) setMode("dark");
    else setMode(window.scrollY > 24 ? "light" : "top");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [measure]);

  // Lock the page behind the mobile overlay.
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const inverted = mode === "dark" || open;

  return (
    <>
      <header
        ref={barRef}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          inverted
            ? "on-dark bg-ink text-paper"
            : mode === "light"
              ? "border-b border-line bg-paper text-ink"
              : "border-b border-transparent bg-transparent text-ink"
        }`}
        style={{ transitionTimingFunction: "var(--ease-out-quint)" }}
      >
        <div className="shell flex h-[72px] items-center justify-between gap-8 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <Logo className="h-7 w-auto" title="Alexons" />
            <span className="font-[family-name:var(--font-display)] text-[0.9rem] font-bold uppercase tracking-[0.3em]">
              Alexons
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <Link key={link.href} href={link.href} className="eyebrow link-sweep">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="eyebrow link-sweep group hidden items-center gap-2 sm:inline-flex"
            >
              Let&rsquo;s Talk
              <span className="arrow arrow-ne">&#8599;</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="eyebrow flex min-h-[44px] min-w-[44px] items-center justify-center p-2 lg:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Full-bleed overlay rather than a dropdown — the desktop bar stays a
          single uninterrupted line, and the menu gets the same huge type as
          the rest of the site. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="on-dark fixed inset-0 z-40 bg-ink text-paper lg:hidden"
      >
        <nav
          className="shell flex h-full flex-col justify-center gap-2 overflow-y-auto pt-24 pb-12"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="display display-md group flex items-baseline justify-between border-b border-white/15 py-5"
            >
              {link.label}
              <span className="numeral text-sm text-mid">
                0{i + 1}
                <span className="arrow arrow-ne ml-3 inline-block">&#8599;</span>
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
