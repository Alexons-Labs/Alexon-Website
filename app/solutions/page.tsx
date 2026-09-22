import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionsList from "@/components/SolutionsList";
import Approach from "@/components/Approach";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Artificial intelligence, software & digital products, automation and experimentation — the capabilities Alexons builds around.",
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>What We Do.</>}
        lede="Four capabilities, one way of working: understand the problem, build the right thing, and ship it properly."
        image={{
          src: "/images/solutions.jpg",
          alt: "Alexons Intelligent AI Systems & Digital Solutions",
        }}
      />
      <SolutionsList />
      <Approach />
    </>
  );
}