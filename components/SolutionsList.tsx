const SOLUTIONS = [
  {
    n: "01",
    title: "Artificial Intelligence",
    lead: "Intelligent systems designed to automate, analyse and accelerate real-world workflows.",
    points: [
      "Turn raw data into decisions",
      "Automate repetitive work into done",
      "Personalise products at scale",
    ],
  },
  {
    n: "02",
    title: "Software & Digital Products",
    lead: "Scalable digital experiences and products built around users and business outcomes.",
    points: [
      "Web, mobile and internal products",
      "Platforms that grow with the business",
      "Design-led, outcome-first delivery",
    ],
  },
  {
    n: "03",
    title: "Automation",
    lead: "Connecting technology, data and processes to eliminate repetitive work.",
    points: [
      "Workflow automation across teams",
      "Data pipelines that run themselves",
      "Systems that talk to each other",
    ],
  },
  {
    n: "04",
    title: "Experimentation",
    lead: "Turning emerging technologies into practical products and opportunities.",
    points: [
      "Rapid prototyping and pilots",
      "Measured adoption of new technology",
      "Ideas pressure-tested before investment",
    ],
  },
  {
    n: "05",
    title: "Video Editing",
    lead: "Cutting raw footage into finished, watchable stories — shaping pacing, captions, motion and sound so every second earns attention.",
    points: [
      "High-retention storytelling and pacing",
      "Dynamic captions, sound design and motion",
      "Multi-platform video assets tailored for engagement",
    ],
  },
] as const;

export default function SolutionsList() {
  return (
    <section className="band border-t border-line">
      <div className="shell">
        <p className="eyebrow reveal text-mid">What We Do</p>

        <ul className="mt-14 md:mt-20">
          {SOLUTIONS.map((s, i) => (
            <li
              key={s.n}
              className="reveal"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="grid items-start gap-x-10 gap-y-6 border-t border-line py-12 md:grid-cols-12 md:py-14">
                <span className="numeral text-sm text-mid md:col-span-1">
                  {s.n}
                </span>

                <div className="md:col-span-5">
                  <h2 className="display text-2xl md:text-[2rem]">{s.title}</h2>
                  <p className="mt-5 max-w-[44ch] text-dark">{s.lead}</p>
                </div>

                <ul className="space-y-3 md:col-span-5 md:col-start-8">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-baseline gap-3 text-dark">
                      <span aria-hidden className="arrow text-sm text-mid">
                        &#8594;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <div className="rule" />
      </div>
    </section>
  );
}