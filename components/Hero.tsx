import Link from "next/link";
import LogoDraw from "./LogoDraw";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pt-32 pb-16 md:pb-24">
      <div className="shell grid w-full gap-y-14 lg:grid-cols-12 lg:items-end lg:gap-x-10">
        <div className="intro-stagger lg:col-span-8">
          <p className="eyebrow text-mid" style={{ "--stagger": "0ms" } as React.CSSProperties}>
            Alexons — Technology / Innovation
          </p>

          <h1
            className="display display-xl mt-8"
            style={{ "--stagger": "120ms" } as React.CSSProperties}
          >
            We Build
            <br />
            What&rsquo;s Next.
          </h1>

          <p
            className="lede mt-9 text-dark"
            style={{ "--stagger": "260ms" } as React.CSSProperties}
          >
            We create intelligent technology, digital products, and solutions
            that turn ambitious ideas into real-world impact.
          </p>

          <div
            className="mt-11 flex flex-wrap items-center gap-4"
            style={{ "--stagger": "380ms" } as React.CSSProperties}
          >
            <Link href="/solutions" className="btn btn-solid group">
              Explore Alexons
              <span className="arrow arrow-x">&#8594;</span>
            </Link>
            <Link href="/contact" className="btn btn-ghost group">
              Start a conversation
              <span className="arrow arrow-ne">&#8599;</span>
            </Link>
          </div>
        </div>

        {/* The mark at a scale that makes it a graphic element, not a badge.
            From lg it leaves the grid and anchors to the section edge, so the
            bleed is a fixed slice of the viewport rather than whatever falls
            out of the column maths; the loop runs off the page, the sharp
            ascent stays whole. */}
        <div className="pointer-events-none lg:absolute lg:right-[-4vw] lg:bottom-[9vh] lg:col-span-4">
          <LogoDraw
            id="hero"
            className="ml-auto h-auto w-[72%] max-w-[520px] min-w-[210px] translate-x-[6%] text-ink sm:w-[54%] lg:h-[58svh] lg:w-auto lg:max-w-none lg:translate-x-0"
            title="Alexons"
          />
        </div>
      </div>

      <span
        aria-hidden
        className="eyebrow absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-mid md:block"
      >
        Scroll
      </span>
    </section>
  );
}
