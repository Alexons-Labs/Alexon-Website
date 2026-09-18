const STEPS = [
  {
    n: "01",
    title: "Explore",
    body: "Understand the problem, the people and the constraints before anything is built.",
  },
  {
    n: "02",
    title: "Build",
    body: "Prototype fast, test with real users, iterate until it holds up.",
  },
  {
    n: "03",
    title: "Launch",
    body: "Ship it, measure it, and keep improving with real-world feedback.",
  },
] as const;

export default function Approach() {
  return (
    <section data-theme="dark" className="on-dark bg-ink text-paper">
      <div className="shell band">
        <p className="eyebrow reveal text-white/50">How We Work</p>

        <div className="mt-16 grid gap-y-14 md:grid-cols-3 md:gap-x-10">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="reveal"
              style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
            >
              <p className="numeral text-4xl">{s.n}</p>
              <h3 className="display mt-6 text-2xl">{s.title}</h3>
              <p className="mt-4 max-w-[30ch] text-white/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}