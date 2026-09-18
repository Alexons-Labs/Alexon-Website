import Link from "next/link";
import Logo from "./Logo";

export default function AboutIntro() {
  return (
    <section className="band border-t border-line">
      <div className="shell grid items-center gap-y-14 lg:grid-cols-12 lg:gap-x-16">
        <div className="reveal lg:col-span-5">
          <Logo className="h-auto w-[62%] max-w-[360px] min-w-[180px] text-ink" />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow reveal text-mid">About Alexons</p>

          <p
            className="display display-md reveal mt-8 normal-case"
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
          >
            Alexons is built around one simple idea: ambitious problems deserve
            ambitious technology.
          </p>

          <p
            className="reveal mt-8 max-w-[46ch] text-lg leading-relaxed text-dark"
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            We bring together technology, creativity and execution to build
            solutions for a rapidly changing world.
          </p>

          <Link
            href="/about"
            className="btn btn-ghost group reveal mt-10"
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
          >
            More about us
            <span className="arrow arrow-x">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
