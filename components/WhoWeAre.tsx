export default function WhoWeAre() {
  return (
    <section className="band border-t border-line">
      <div className="shell grid gap-y-14 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-8">
          <p className="eyebrow reveal text-mid">Who We Are</p>

          <h2 className="display display-lg reveal mt-8" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            Technology Should
            <br />
            Create Possibilities.
          </h2>

          <p
            className="reveal mt-10 max-w-[52ch] text-lg leading-relaxed text-dark"
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            Alexons is a technology-driven company focused on building products,
            platforms, and intelligent solutions that address meaningful problems
            and create measurable impact.
          </p>
        </div>

        <aside
          className="reveal self-end border-t border-line pt-8 lg:col-span-4 lg:col-start-9"
          style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
        >
          <p className="numeral text-5xl">01</p>
          <p className="eyebrow mt-5 text-mid">Vision</p>
          <p className="mt-4 max-w-[26ch] text-dark">
            Build technology that moves people and businesses forward.
          </p>
        </aside>
      </div>
    </section>
  );
}
