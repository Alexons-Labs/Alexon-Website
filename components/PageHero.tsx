import type { ReactNode } from "react";

/**
 * Shared opener for the inner pages: eyebrow, a display statement and an
 * optional lede, with an optional status note pinned top-right (used by /work).
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  status,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  status?: string;
}) {
  return (
    <section className="flex min-h-[70svh] items-end overflow-hidden pt-32 pb-16 md:pb-24">
      <div className="shell w-full">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <p className="eyebrow reveal text-mid">{eyebrow}</p>
          {status && <p className="eyebrow reveal text-mid">{status}</p>}
        </div>

        <h1 className="display display-lg reveal mt-10 max-w-[18ch]">{title}</h1>

        {lede && (
          <p
            className="lede reveal mt-10 text-dark"
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}