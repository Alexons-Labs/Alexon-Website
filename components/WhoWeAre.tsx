import Link from "next/link";

const PILLARS = [
  {
    n: "01",
    tag: "Vision",
    title: "Move Forward",
    desc: "Build technology that unlocks new possibilities and accelerates what comes next.",
  },
  {
    n: "02",
    tag: "Mission",
    title: "Ship Reality",
    desc: "Turn applied AI, automation, and digital platforms into dependable production systems.",
  },
  {
    n: "03",
    tag: "Standard",
    title: "Real Impact",
    desc: "Zero bloat. High performance, reliable engineering, and measurable business outcomes.",
  },
] as const;

export default function WhoWeAre() {
  return (
    <section className="band border-t border-line">
      <div className="shell grid items-start gap-y-12 lg:grid-cols-12 lg:gap-x-14">
        {/* Left Column — Concise Statement */}
        <div className="lg:col-span-6">
          <p className="eyebrow reveal text-mid">Who We Are</p>

          <h2
            className="display display-lg reveal mt-6"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            Technology Should
            <br />
            Create Possibilities.
          </h2>

          <p
            className="reveal mt-6 max-w-[44ch] text-lg leading-relaxed text-dark"
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            Alexons is a technology company building products, platforms, and
            intelligent solutions that turn ambitious ideas into real-world impact.
          </p>

          <div
            className="reveal mt-8"
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            <Link href="/about" className="btn btn-solid group">
              About Alexons
              <span className="arrow arrow-x">&#8594;</span>
            </Link>
          </div>
        </div>

        {/* Right Column — Compact, Sleek 3-Pillar Stack */}
        <div className="space-y-4 lg:col-span-6">
          {PILLARS.map((p, i) => (
            <div
              key={p.n}
              className="reveal rounded-xl border border-line bg-paper p-6 transition-all duration-300 hover:border-ink"
              style={{ "--reveal-delay": `${140 + i * 80}ms` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className="numeral text-2xl font-bold text-ink">{p.n}</span>
                <span className="eyebrow text-xs text-mid">{p.tag}</span>
              </div>
              <h3 className="display mt-2.5 text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mid">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
