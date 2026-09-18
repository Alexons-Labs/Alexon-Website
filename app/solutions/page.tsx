import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionsList from "@/components/SolutionsList";
import Approach from "@/components/Approach";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Artificial intelligence, software & digital products, automation and experimentation — the capabilities Alexons builds around.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>What We Do.</>}
        lede="Four capabilities, one way of working: understand the problem, build the right thing, and ship it properly."
      />
      <SolutionsList />
      <Approach />
    </>
  );
}