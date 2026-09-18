import Link from "next/link";

export default function Careers() {
  return (
    <section data-theme="dark" className="on-dark bg-ink text-paper">
      <div className="shell band grid gap-y-12 lg:grid-cols-12 lg:items-end lg:gap-x-10">
        <div className="lg:col-span-7">
          <p className="eyebrow reveal text-white/50">Careers</p>

          <h2 className="display display-lg mt-8">
            <span className="reveal-line">
              <span>Build The</span>
            </span>
            <span className="reveal-line" style={{ "--reveal-delay": "110ms" } as React.CSSProperties}>
              <span>Future With Us.</span>
            </span>
          </h2>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <p
            className="reveal max-w-[38ch] text-lg text-white/70"
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            We&rsquo;re looking for people who want to build, experiment and
            solve problems that matter.
          </p>

          <Link
            href="/careers"
            className="btn btn-solid group reveal mt-9"
            style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
          >
            View Opportunities
            <span className="arrow arrow-x">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
