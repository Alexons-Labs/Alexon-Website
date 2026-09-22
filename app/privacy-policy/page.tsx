import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { EMAIL } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy regarding user data, inquiries, and communication at Alexons.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy Policy.</>}
        lede="How we protect your privacy, handle project briefs, and manage communications."
      />

      <section className="band border-t border-line">
        <div className="shell grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-3">
            <p className="eyebrow text-mid">Last Updated: September 2026</p>
          </div>

          <div className="space-y-12 text-dark lg:col-span-8">
            <div>
              <h2 className="display text-2xl md:text-3xl">1. Information We Collect</h2>
              <p className="mt-4 leading-relaxed">
                We collect personal information that you voluntarily provide when submitting a project brief,
                contact inquiry, or career application. This may include your name, email address, phone number,
                company details, project specifications, and resume attachments.
              </p>
            </div>

            <div>
              <h2 className="display text-2xl md:text-3xl">2. How We Use Your Data</h2>
              <p className="mt-4 leading-relaxed">
                Collected information is strictly utilized to communicate with you regarding your inquiries,
                evaluate potential project collaborations, process job applications, and refine our service
                delivery. We never sell, rent, or trade your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="display text-2xl md:text-3xl">3. Data Security &amp; Retention</h2>
              <p className="mt-4 leading-relaxed">
                We implement industry-standard encryption, serverless protection, and strict access controls
                to ensure your information remains secure. Information is retained only as long as necessary
                to fulfill project consultations or recruitment assessments.
              </p>
            </div>

            <div>
              <h2 className="display text-2xl md:text-3xl">4. Your Rights</h2>
              <p className="mt-4 leading-relaxed">
                You have the right to request access to the personal data we hold about you, request corrections,
                or request complete deletion of your records at any time.
              </p>
            </div>

            <div>
              <h2 className="display text-2xl md:text-3xl">5. Contact Our Privacy Team</h2>
              <p className="mt-4 leading-relaxed">
                If you have inquiries or requests regarding our privacy practices, reach us directly at{" "}
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
