import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CareersIndex from "@/components/CareersIndex";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles and internships at Alexons — for people who want to build, experiment and solve problems that matter.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build The Future
            <br />
            With Us.
          </>
        }
        lede="We're looking for people who want to build, experiment and solve problems that matter."
        image={{
          src: "/images/careers.jpg",
          alt: "Alexons Engineering Studio & Team Workspace",
        }}
      />
      <CareersIndex />
    </>
  );
}