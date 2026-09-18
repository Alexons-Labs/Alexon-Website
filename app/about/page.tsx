import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutStory from "@/components/AboutStory";
import Values from "@/components/Values";
import VisionBand from "@/components/VisionBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, vision and values behind Alexons — ambitious problems deserve ambitious technology.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Ambitious Problems
            <br />
            Deserve Ambitious
            <br />
            Technology.
          </>
        }
        lede="Alexons is a technology company building products, platforms and intelligent solutions that turn ambitious ideas into real-world impact."
      />
      <AboutStory />
      <Values />
      <VisionBand
        eyebrow="Vision"
        title={
          <>
            Technology Should
            <br />
            Create Possibilities.
          </>
        }
        body="We believe the best technology isn't technology for its own sake. It is technology that makes something possible that wasn't possible before."
      />
    </>
  );
}