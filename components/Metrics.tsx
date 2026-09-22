const METRICS = [
  { value: "05+", label: "Specialized Capabilities", detail: "AI, Platforms, Automation, Media, FinTech" },
  { value: "10+", label: "Shipped Projects & Pilots", detail: "Turning ambitious ideas into functioning software" },
  { value: "100%", label: "Code & Craft Quality", detail: "Zero shortcuts, rigorous testing & engineering standards" },
] as const;

export default function Metrics() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="shell grid gap-y-12 sm:grid-cols-3 sm:gap-x-12">
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className="reveal"
            style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
          >
            <p className="numeral text-6xl md:text-7xl">{m.value}</p>
            <p className="eyebrow mt-4 text-ink">{m.label}</p>
            <p className="mt-2 text-sm text-mid">{m.detail}</p>
          </div>
        ))}
      </div>
      <div className="shell mt-14">
        <div className="rule" />
      </div>
    </section>
  );
}
