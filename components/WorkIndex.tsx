import Link from "next/link";

export default function WorkIndex() {
  return (
    <section className="band border-t border-line">
      <div className="shell">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <p className="eyebrow reveal text-mid">Selected Work</p>
          <p className="eyebrow reveal text-mid">
            Case studies being prepared
          </p>
        </div>

        <div className="reveal border-t border-line pt-16 md:pt-24">
          <h2 className="display display-md max-w-[18ch]">
            We&rsquo;re Building
            <br />
            In Public.
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg text-dark">
            The first products are in active development and the case studies
            will land right here as they ship — the problems each one solves,
            the decisions, and the results. Until then, the conversations are
            the work.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn btn-solid group">
              Start a conversation
              <span className="arrow arrow-ne">&#8599;</span>
            </Link>
          </div>
        </div>

        <div className="rule" />
      </div>
    </section>
  );
}