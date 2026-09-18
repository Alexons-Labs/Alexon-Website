import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

export default function Work() {
  return (
    <section className="band">
      <div className="shell">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <p className="eyebrow reveal text-mid">Selected Work</p>
          <Link href="/work" className="eyebrow link-sweep group reveal">
            All work <span className="arrow arrow-x inline-block">&#8594;</span>
          </Link>
        </div>

        <ul className="mt-14 md:mt-20">
          {PROJECTS.map((p, i) => (
            <li key={p.n} className="reveal" style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
              <Link
                href={p.href}
                className="group relative block border-t border-line py-12 md:py-16"
              >
                {/* Black wash on hover: the row inverts rather than lifting or
                    shadowing, which keeps the page flat and typographic. Full
                    bleed to both viewport edges — inset to the content column
                    it read as a floating bar rather than an inversion. */}
                <span
                  aria-hidden
                  className="absolute top-0 left-1/2 -z-10 h-full w-screen -translate-x-1/2 origin-bottom scale-y-0 bg-ink transition-transform duration-[600ms] group-hover:scale-y-100"
                  style={{ transitionTimingFunction: "var(--ease-out-quint)" }}
                />

                <div className="grid items-baseline gap-x-10 gap-y-4 transition-colors duration-[600ms] group-hover:text-paper md:grid-cols-12">
                  <span className="numeral text-sm text-mid transition-all duration-[600ms] group-hover:text-3xl group-hover:text-paper md:col-span-1">
                    {p.n}
                  </span>

                  <h3 className="display text-4xl md:col-span-6 md:text-[3.25rem]">
                    {p.name}
                  </h3>

                  <div className="md:col-span-4">
                    <p className="eyebrow text-mid transition-colors duration-[600ms] group-hover:text-white/60">
                      {p.tags}
                    </p>
                    <p className="mt-3 max-w-[34ch] text-dark transition-colors duration-[600ms] group-hover:text-white/70">
                      {p.body}
                    </p>
                  </div>

                  <span className="eyebrow flex items-center gap-2 md:col-span-1 md:justify-self-end">
                    View <span className="arrow arrow-x">&#8594;</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="rule" />
      </div>
    </section>
  );
}
