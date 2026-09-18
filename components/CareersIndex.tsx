import { EMAIL } from "@/lib/nav";

const PILLARS = [
  {
    n: "01",
    title: "Build",
    body: "Real things, shipped. We judge each other on what is out in the world, not what was planned in a document.",
  },
  {
    n: "02",
    title: "Experiment",
    body: "Try fast, learn faster. Every idea gets its chance to prove or disprove itself quickly.",
  },
  {
    n: "03",
    title: "Solve",
    body: "Problems that matter, worked on seriously. If it is easy, someone else should do it.",
  },
] as const;

const ROLES = [
  {
    title: "AI Engineer",
    tag: "Engineering / AI",
    body: "Build intelligent systems that automate, analyse and accelerate real workflows.",
  },
  {
    title: "Product Engineer",
    tag: "Engineering / Product",
    body: "Own products end to end — from the first sketch to the shipped feature.",
  },
  {
    title: "Automation Specialist",
    tag: "Engineering / Automation",
    body: "Connect technology, data and processes so the repetitive work disappears.",
  },
] as const;

export default function CareersIndex() {
  return (
    <>
      <section className="band border-t border-line">
        <div className="shell grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <p className="eyebrow reveal text-mid lg:col-span-3">
            What We Look For
          </p>

          <div className="grid gap-y-14 md:grid-cols-3 md:gap-x-10 lg:col-span-9">
            {PILLARS.map((p, i) => (
              <div
                key={p.n}
                className="reveal"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <p className="numeral text-sm text-mid">{p.n}</p>
                <h2 className="display mt-5 text-2xl">{p.title}</h2>
                <p className="mt-4 max-w-[30ch] text-dark">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band border-t border-line bg-off">
        <div className="shell">
          <div className="flex flex-wrap items-baseline justify-between gap-6">
            <p className="eyebrow reveal text-mid">Open Roles</p>
            <p className="eyebrow reveal text-mid">Applications via email</p>
          </div>

          <ul className="mt-14 md:mt-20">
            {ROLES.map((role, i) => (
              <li
                key={role.title}
                className="reveal"
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                    `Application — ${role.title}`,
                  )}`}
                  className="group relative block border-t border-line py-10 md:py-12"
                >
                  <div className="grid items-baseline gap-x-10 gap-y-4 md:grid-cols-12">
                    <span className="numeral text-sm text-mid md:col-span-1">
                      0{i + 1}
                    </span>

                    <h3 className="display text-3xl md:col-span-6 md:text-4xl">
                      {role.title}
                    </h3>

                    <div className="md:col-span-4">
                      <p className="eyebrow text-mid">{role.tag}</p>
                      <p className="mt-3 max-w-[42ch] text-dark">{role.body}</p>
                    </div>

                    <span className="eyebrow flex items-center gap-2 md:col-span-1 md:justify-self-end">
                      Apply <span className="arrow arrow-ne">&#8599;</span>
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className="rule" />

          <p className="eyebrow reveal mt-14 text-mid">
            Don&rsquo;t see your role? Email us at {EMAIL} and tell us what you
            want to build.
          </p>
        </div>
      </section>
    </>
  );
}