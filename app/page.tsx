import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PaylocityPlatformSimulator from "../components/PaylocityPlatformSimulator";
import HighLevelDesign from "../components/HighLevelDesign";
import LowLevelDesign from "../components/LowLevelDesign";
import DsaWorkbench from "../components/DsaWorkbench";
import Experience from "../components/Experience";
import PaylocityCoreValues from "../components/PaylocityCoreValues";
import Roadmap90Day from "../components/Roadmap90Day";
import MultiplierImpact from "../components/MultiplierImpact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070D18] text-slate-100 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <PaylocityPlatformSimulator />
      <HighLevelDesign />
      <LowLevelDesign />
      <DsaWorkbench />
      <Experience />
      <PaylocityCoreValues />
      <Roadmap90Day />
      <MultiplierImpact />
      <Footer />
    </main>
  );
}
