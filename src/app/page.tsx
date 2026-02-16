import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import About from "@/components/About";
import CoreFunctions from "@/components/CoreFunctions";
import CloudBox from "@/components/CloudBox";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientMarquee />
      <About />
      <CoreFunctions />
      <CloudBox />
      <Projects />
      <WhyUs />
      <CTA />
    </main>
  );
}
