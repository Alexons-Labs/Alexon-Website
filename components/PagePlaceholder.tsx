import Link from "next/link";

/**
 * Holding page for the five inner routes. Real content lands here next; until
 * then the nav never dead-ends, and the visual language is already correct.
 */
export default function PagePlaceholder({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
}) {
  return (
    <section className="flex min-h-[100svh] items-center pt-32 pb-24">
      <div className="shell grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-8">
          <p className="eyebrow text-mid">{eyebrow}</p>
          <h1 className="display display-lg mt-8">{title}</h1>
          <p className="mt-10 max-w-[46ch] text-lg leading-relaxed text-dark">{body}</p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-solid group">
              Start a conversation
              <span className="arrow arrow-ne">&#8599;</span>
            </Link>
            <Link href="/" className="btn btn-ghost group">
              Back to home
              <span className="arrow arrow-x">&#8594;</span>
            </Link>
          </div>
        </div>

        <p className="eyebrow self-end text-mid lg:col-span-3 lg:col-start-10 lg:text-right">
          In progress
        </p>
      </div>
    </section>
  );
}
