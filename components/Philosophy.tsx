import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="band border-t border-line bg-off">
      <div className="shell grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-14">
        {/* Left Manifesto Column */}
        <div className="lg:col-span-7">
          <p className="eyebrow reveal text-mid">Philosophy</p>

          <h2 className="display display-lg mt-8">
            {["Think", "Different.", "Build", "Better."].map((word, i) => (
              <span
                key={word + i}
                className="reveal-line"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <span>{word}</span>
              </span>
            ))}
          </h2>

          <p
            className="reveal mt-10 max-w-[50ch] text-lg leading-relaxed text-dark"
            style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
          >
            We believe the best technology isn&rsquo;t technology for its own
            sake. It is technology that makes something possible that
            wasn&rsquo;t possible before.
          </p>

          <div
            className="reveal mt-8 flex items-center gap-4 text-xs text-mid"
            style={{ "--reveal-delay": "500ms" } as React.CSSProperties}
          >
            <span className="h-px w-8 bg-line" />
            <span className="eyebrow tracking-widest uppercase">
              Form follows intention &middot; Engineering follows discipline
            </span>
          </div>
        </div>

        {/* Right Sculpture Column */}
        <div
          className="reveal lg:col-span-5"
          style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
        >
          <div className="group relative overflow-hidden rounded-xl border border-line bg-paper p-2.5 transition-all duration-500 hover:border-ink">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/philosophy.jpg"
                alt="Alexons Monolithic Architecture & Engineering Ethos"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            <div className="mt-3 flex items-center justify-between px-2 pb-1 text-[11px] text-mid">
              <span className="eyebrow uppercase tracking-wider">Structure &amp; Craft</span>
              <span className="numeral font-mono text-[10px]">PHILOSOPHY // 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
