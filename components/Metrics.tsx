/**
 * Not wired into the homepage. Numbers should be real before this section
 * exists — drop it into app/page.tsx once they are.
 */
const METRICS = [
  { value: "01+", label: "Products" },
  { value: "10+", label: "Projects" },
  { value: "05+", label: "Domains" },
] as const;

export default function Metrics() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="shell grid gap-y-12 sm:grid-cols-3">
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className="reveal"
            style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
          >
            <p className="numeral text-6xl md:text-7xl">{m.value}</p>
            <p className="eyebrow mt-5 text-mid">{m.label}</p>
          </div>
        ))}
      </div>
      <div className="shell mt-14">
        <div className="rule" />
      </div>
    </section>
  );
}
