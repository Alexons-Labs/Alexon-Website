const VALUES = [
  {
    n: "01",
    title: "Ambitious Problems",
    body: "We take on the difficult work first. It is where the real problems live and where the real impact is made.",
  },
  {
    n: "02",
    title: "Execution Over Ideas",
    body: "Ideas are cheap. Building, testing and shipping — that is what moves the world forward.",
  },
  {
    n: "03",
    title: "Craft & Clarity",
    body: "Sharp, considered and honest in everything we ship. Good work explains itself.",
  },
  {
    n: "04",
    title: "Technology That Serves",
    body: "Tools exist to make something possible that was not possible before — never for their own sake.",
  },
] as const;

export default function Values() {
  return (
    <section className="band border-t border-line bg-off">
      <div className="shell">
        <p className="eyebrow reveal text-mid">What We Value</p>

        <ul className="mt-14 md:mt-20">
          {VALUES.map((v, i) => (
            <li
              key={v.n}
              className="reveal"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="grid items-baseline gap-x-10 gap-y-5 border-t border-line py-10 md:grid-cols-12 md:py-12">
                <span className="numeral text-sm text-mid md:col-span-1">
                  {v.n}
                </span>
                <h2 className="display text-2xl md:col-span-5 md:text-[2rem]">
                  {v.title}
                </h2>
                <p className="max-w-[42ch] text-dark md:col-span-6">
                  {v.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="rule" />
      </div>
    </section>
  );
}