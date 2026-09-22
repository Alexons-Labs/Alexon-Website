import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { EMAIL } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions governing the use of Alexons services and website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Terms &amp; Conditions.</>}
        lede="Guidelines and agreements governing our digital services, software products, and website."
      />

      <section className="band border-t border-line">
        <div className="shell grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-3">
            <p className="eyebrow text-mid">Last Updated: September 2026</p>
          </div>

          <div className="space-y-12 text-dark lg:col-span-8">
            <div>
              <h2 className="display text-2xl md:text-3xl">1. Acceptance of Terms</h2>
              <p className="mt-4 leading-relaxed">
                By accessing or using the Alexons website (alexons.com / alexon.in) and associated digital
                platforms, products, or services, you agree to comply with and be bound by these Terms
                and Conditions. If you do not agree to these terms, please discontinue use immediately.
              </p>
            </div>

            <div>
              <h2 className="display text-2xl md:text-3xl">2. Intellectual Property</h2>
              <p className="mt-4 leading-relaxed">
                All software, code, designs, typography, brand marks, logos, and written content displayed
                on this website are the proprietary property of Alexons and are protected under copyright,
                trademark, and intellectual property laws. Unauthorized reproduction, modification, or
                distribution is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="display text-2xl md:text-3xl">3. Use of Services &amp; Products</h2>
              <p className="mt-4 leading-relaxed">
                Our technology, AI solutions, digital platforms, and automation workflows must be utilized
                solely for lawful purposes. You agree not to disrupt, compromise, or reverse-engineer any
                part of our infrastructure or digital assets.
              </p>
            </div>

            <div>
              <h2 className="display text-2xl md:text-3xl">4. Limitation of Liability</h2>
              <p className="mt-4 leading-relaxed">
                Alexons provides website content and digital prototypes on an &ldquo;as is&rdquo; basis.
                While we maintain rigorous engineering standards, we do not guarantee uninterrupted or
                error-free availability and shall not be liable for any indirect or consequential damages.
              </p>
            </div>

            <div>
              <h2 className="display text-2xl md:text-3xl">5. Inquiries &amp; Contact</h2>
              <p className="mt-4 leading-relaxed">
                For questions regarding these Terms &amp; Conditions, please email us directly at{" "}
                <a href={`mailto:${EMAIL}`} className="link-sweep font-medium text-ink">
                  {EMAIL}
                </a>
                .
              </p>
            </div>

            <div className="pt-6">
              <Link href="/" className="btn btn-ghost group">
                Return to Home
                <span className="arrow arrow-x">&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
