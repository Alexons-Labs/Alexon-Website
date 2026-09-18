import Logo from "./Logo";

export default function AboutStory() {
  return (
    <section className="band border-t border-line">
      <div className="shell grid items-center gap-y-16 lg:grid-cols-12 lg:gap-x-16">
        <div className="reveal lg:col-span-5">
          <Logo className="h-auto w-[62%] max-w-[360px] min-w-[180px] text-ink" />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow reveal text-mid">Our Story</p>

          <p
            className="display display-md reveal mt-8 normal-case"
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
          >
            Built around one simple idea: ambitious problems deserve ambitious
            technology.
          </p>

          <p
            className="reveal mt-8 max-w-[46ch] text-lg leading-relaxed text-dark"
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            Alexons is a technology-focused company building products, platforms
            and intelligent solutions that address meaningful problems and
            create measurable impact.
          </p>

          <p
            className="reveal mt-6 max-w-[46ch] text-lg leading-relaxed text-dark"
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            From artificial intelligence to software, automation and
            experimentation, we bring technology, creativity and execution
            together to build for a rapidly changing world.
          </p>
        </div>
      </div>
    </section>
  );
}