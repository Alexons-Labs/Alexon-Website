import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WorkIndex from "@/components/WorkIndex";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected products, projects and case studies built by Alexons across AI, software and automation.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={<>Things We&rsquo;ve Built.</>}
        lede="Selected client platforms, commercial web applications, and in-house technology products engineered by Alexons."
        status="6 Active Projects &amp; Deployments"
        image={{
          src: "/images/work_hero.jpg",
          alt: "Alexons Digital Products & Software Engineering Laboratory",
        }}
      />
      <WorkIndex />
    </>
  );
}