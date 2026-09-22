const FOUNDERS = [
  {
    n: "01",
    name: "M S Arul",
    role: "Founder & CEO",
    phone: "8838577150",
    email: "msarul2005@gmail.com",
    body: "Founded Alexons and leads the company direction, choosing the problems worth solving and the vision behind them.",
  },
  {
    n: "02",
    name: "Kishore Kumar R",
    role: "Co-Founder & CTO",
    phone: "8122034711",
    email: "kishorekumar26124@gmail.com",
    body: "Co-founded Alexons and leads engineering, turning ambitious ideas into shipped, working technology.",
  },
] as const;

/**
 * The people behind the mark. Emails are the primary channel; phones are
 * exposed behind `tel:` links (never as raw text) so they stay clickable but
 * don't get scraped into spam lists as easily.
 */
export default function FoundersList() {
  return (
    <section className="band border-t border-line">
      <div className="shell grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
        <p className="eyebrow reveal text-mid lg:col-span-3">The Founders</p>

        <ul className="lg:col-span-9">
          {FOUNDERS.map((f, i) => (
            <li
              key={f.n}
              className="reveal grid items-start gap-x-10 gap-y-4 border-b border-line py-12 md:grid-cols-12 md:py-14"
              style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
            >
              <div className="flex items-baseline gap-6 md:col-span-4">
                <span className="numeral text-sm text-mid">{f.n}</span>
                <h2 className="display whitespace-nowrap text-3xl md:text-4xl">{f.name}</h2>
              </div>

              <p className="eyebrow self-baseline text-mid md:col-span-4 md:pt-2">
                {f.role}
              </p>

              <div className="md:col-span-6">
                <p className="max-w-[40ch] text-dark">{f.body}</p>
                <p className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a href={`mailto:${f.email}`} className="eyebrow link-sweep text-mid hover:text-ink">
                    {f.email}
                  </a>
                  <a href={`tel:+91${f.phone}`} className="eyebrow link-sweep text-mid hover:text-ink">
                    {f.phone}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}