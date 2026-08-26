import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Workspace from "@/components/Workspace";
import DemoBuilds from "@/components/DemoBuilds";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";

export default function Home() {
  return (
    <>
      <Grain />
      <Nav />
      <main>
        <Hero />
        <Pain />
        <Workspace />
        <DemoBuilds />
        <Services />
        <Process />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
