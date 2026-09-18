export default function Philosophy() {
  return (
    <section className="band border-t border-line bg-off">
      <div className="shell grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
        <p className="eyebrow reveal text-mid lg:col-span-3">Philosophy</p>

        <div className="lg:col-span-9">
          <h2 className="display display-lg">
            {["Think", "Different.", "Build", "Better."].map((word, i) => (
              <span
                key={word + i}
                className="reveal-line"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <span>{word}</span>
              </span>
            ))}
          </h2>

          <p
            className="reveal mt-12 max-w-[54ch] text-lg leading-relaxed text-dark"
            style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
          >
            We believe the best technology isn&rsquo;t technology for its own
            sake. It is technology that makes something possible that
            wasn&rsquo;t possible before.
          </p>
        </div>
      </div>
    </section>
  );
}
