import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Capabilities from "@/components/Capabilities";
import Execution from "@/components/Execution";
import Work from "@/components/Work";
import Philosophy from "@/components/Philosophy";
import AboutIntro from "@/components/AboutIntro";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Capabilities />
      <Execution />
      <Work />
      {/* <Metrics /> — add once the numbers are real. */}
      <Philosophy />
      <AboutIntro />
      <Careers />
      <Contact />
    </>
  );
}
