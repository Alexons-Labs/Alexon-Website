const TERMS = ["AI", "Software", "Automation", "Data", "Innovation"] as const;

export default function Execution() {
  // Duplicated once so the -50% keyframe loops seamlessly.
  const lane = [...TERMS, ...TERMS];

  return (
    <section data-theme="dark" className="on-dark overflow-hidden bg-ink text-paper">
      <div className="shell band">
        <h2 className="display display-lg reveal">
          <span className="reveal-line">
            <span>Ideas</span>
          </span>
          <span className="reveal-line" style={{ "--reveal-delay": "110ms" } as React.CSSProperties}>
            <span>Need</span>
          </span>
          <span className="reveal-line" style={{ "--reveal-delay": "220ms" } as React.CSSProperties}>
            <span>Execution.</span>
          </span>
        </h2>

        <p
          className="reveal mt-10 max-w-[44ch] text-lg text-white/70"
          style={{ "--reveal-delay": "340ms" } as React.CSSProperties}
        >
          We don&rsquo;t stop at concepts. We build, test, iterate and launch.
        </p>
      </div>

      <div className="border-y border-white/15 py-7" aria-hidden>
        <div className="marquee">
          {lane.map((term, i) => (
            <span key={i} className="display flex items-center text-2xl whitespace-nowrap md:text-4xl">
              {term}
              <span className="mx-8 text-white/35 md:mx-12">&#215;</span>
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Areas of work: {TERMS.join(", ")}.
      </p>
    </section>
  );
}
