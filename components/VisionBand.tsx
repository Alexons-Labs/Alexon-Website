import type { ReactNode } from "react";

/**
 * A black statement band — vision on /about, could serve any inner page.
 * Needs both `data-theme="dark"` (for the nav to invert) and `on-dark`
 * (to flip the shared component styles).
 */
export default function VisionBand({
  eyebrow = "Vision",
  title,
  body,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
}) {
  return (
    <section data-theme="dark" className="on-dark overflow-hidden bg-ink text-paper">
      <div className="shell band grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
        <p className="eyebrow reveal self-start text-white/50 lg:col-span-3">
          {eyebrow}
        </p>

        <div className="lg:col-span-8 lg:col-start-5">
          <h2 className="display display-lg reveal">{title}</h2>
          {body && (
            <p
              className="reveal mt-10 max-w-[54ch] text-lg leading-relaxed text-white/70"
              style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            >
              {body}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}