import { EMAIL, EMAIL_SECONDARY, PHONE, PHONE_DISPLAY } from "@/lib/nav";

export default function Team() {
  return (
    <section className="band border-t border-line">
      <div className="shell grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
        <p className="eyebrow reveal text-mid lg:col-span-3">Direct Contact</p>

        <div className="reveal lg:col-span-9" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <div className="border-b border-line pb-12 md:pb-14">
            <h2 className="display text-3xl md:text-5xl">
              Get In Touch With Alexons.
            </h2>
            <p className="mt-6 max-w-[55ch] text-base text-dark sm:text-lg">
              For technology inquiries, partnership discussions, or engineering consultation, connect with us directly.
            </p>

            <div className="mt-10 flex flex-wrap items-start gap-x-14 gap-y-8">
              <div>
                <span className="eyebrow block text-mid">Phone</span>
                <a
                  href={`tel:+91${PHONE}`}
                  className="display link-sweep mt-2 inline-block text-xl text-ink md:text-2xl"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div>
                <span className="eyebrow block text-mid">Email</span>
                <div className="mt-2 space-y-1.5">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="display link-sweep block text-xl text-ink md:text-2xl"
                  >
                    {EMAIL}
                  </a>
                  <a
                    href={`mailto:${EMAIL_SECONDARY}`}
                    className="display link-sweep block text-xl text-ink md:text-2xl"
                  >
                    {EMAIL_SECONDARY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}