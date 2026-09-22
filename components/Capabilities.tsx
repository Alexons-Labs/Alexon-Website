import Link from "next/link";

const CAPABILITIES = [
  {
    n: "01",
    title: "Artificial Intelligence",
    body: "Intelligent systems designed to automate, analyse and accelerate real-world workflows.",
  },
  {
    n: "02",
    title: "Software & Digital Products",
    body: "Scalable digital experiences and products built around users and business outcomes.",
  },
  {
    n: "03",
    title: "Automation",
    body: "Connecting technology, data and processes to eliminate repetitive work.",
  },
  {
    n: "04",
    title: "Experimentation",
    body: "Turning emerging technologies into practical products and opportunities.",
  },
  {
    n: "05",
    title: "Video Editing",
    body: "Cutting raw footage into finished, watchable stories - shaping pacing, captions, motion and sound so every second earns attention.",
  },
] as const;

export default function Capabilities() {
  return (
    <section id="capabilities" className="band border-t border-line">
      <div className="shell">
        <p className="eyebrow reveal text-mid">Our Capabilities</p>

        <ul className="mt-14 md:mt-20">
          {CAPABILITIES.map((item, i) => (
            <li key={item.n} className="reveal" style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
              <Link
                href="/solutions"
                className="group grid items-start gap-x-10 gap-y-5 border-t border-line py-10 md:grid-cols-12 md:py-12"
              >
                <span className="numeral text-sm text-mid md:col-span-1">{item.n}</span>

                <h3 className="display text-2xl md:col-span-5 md:text-[2rem]">
                  {item.title}
                </h3>

                <p className="max-w-[42ch] text-dark md:col-span-5">{item.body}</p>

                <span
                  aria-hidden
                  className="arrow arrow-x justify-self-start text-2xl md:col-span-1 md:justify-self-end"
                >
                  &#8594;
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="rule" />
      </div>
    </section>
  );
}
