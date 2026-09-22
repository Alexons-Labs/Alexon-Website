import Link from "next/link";
import LogoDraw from "./LogoDraw";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="shell grid w-full items-center gap-y-12 lg:grid-cols-12 lg:gap-x-12">
        <div className="intro-stagger lg:col-span-7">
          <div
            className="flex items-center gap-3.5"
            style={{ "--stagger": "0ms" } as React.CSSProperties}
          >
            <span className="signature text-3xl leading-none text-ink md:text-4xl">Alexons</span>
            <span className="text-line text-lg font-light">/</span>
            <p className="eyebrow text-mid">Technology &#215; Innovation</p>
          </div>

          <h1
            className="display display-xl mt-7"
            style={{ "--stagger": "120ms" } as React.CSSProperties}
          >
            We Build
            <br />
            What&rsquo;s Next.
          </h1>

          <p
            className="lede mt-8 text-dark"
            style={{ "--stagger": "260ms" } as React.CSSProperties}
          >
            We create intelligent technology, digital products, and solutions
            that turn ambitious ideas into real-world impact.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4"
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

        {/* The brand mark — fully framed, beautifully scaled, and centered in the right column */}
        <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
          <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px]">
            <LogoDraw
              id="hero"
              className="h-auto w-full text-ink"
              title="Alexons"
            />
          </div>
        </div>
      </div>

      <span
        aria-hidden
        className="eyebrow absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-mid md:block"
      >
        Scroll
      </span>
    </section>
  );
}
