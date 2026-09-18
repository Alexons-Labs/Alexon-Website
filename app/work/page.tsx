import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WorkIndex from "@/components/WorkIndex";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected products, projects and case studies built by Alexons across AI, software and automation.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={<>Things We&rsquo;ve Built.</>}
        lede="Selected products, projects and case studies from across AI, software and automation."
        status="Case studies being prepared"
      />
      <WorkIndex />
    </>
  );
}