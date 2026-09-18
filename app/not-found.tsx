import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center pt-32 pb-24">
      <div className="shell">
        <p className="eyebrow text-mid">404</p>
        <h1 className="display display-lg mt-8">
          This Page
          <br />
          Doesn&rsquo;t Exist Yet.
        </h1>
        <p className="mt-10 max-w-[42ch] text-lg text-dark">
          The link may be old, or the page may still be on its way.
        </p>
        <Link href="/" className="btn btn-solid group mt-12">
          Back to home
          <span className="arrow arrow-x">&#8594;</span>
        </Link>
      </div>
    </section>
  );
}
