import type { ReactNode } from "react";
import Image from "next/image";

/**
 * Shared opener for inner pages: eyebrow, title, optional lede, and optional visual image.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  status,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  status?: string;
  image?: { src: string; alt: string };
}) {
  return (
    <section className="flex min-h-[50svh] items-center overflow-hidden pt-24 pb-14 md:pt-36 md:pb-24">
      <div className="shell w-full">
        <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
          <div className={image ? "lg:col-span-7" : "lg:col-span-12"}>
            <div className="flex flex-wrap items-baseline justify-between gap-4 sm:gap-6">
              <p className="eyebrow reveal text-mid">{eyebrow}</p>
              {status && <p className="eyebrow reveal text-xs text-mid">{status}</p>}
            </div>

            <h1 className="display display-lg reveal mt-6 max-w-[18ch] sm:mt-8">{title}</h1>

            {lede && (
              <p
                className="lede reveal mt-6 text-dark sm:mt-8"
                style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
              >
                {lede}
              </p>
            )}
          </div>

          {image && (
            <div
              className="reveal flex items-center justify-center lg:col-span-5"
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-off shadow-sm">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover grayscale transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}