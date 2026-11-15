import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechMarquee } from "@/components/TechMarquee";
import { ProjectsBento } from "@/components/ProjectsBento";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#050507] text-zinc-100">
      {/* Subtle Framer-style background grid & ambient radial glows */}
      <div
        className="bg-grid-framer pointer-events-none fixed inset-0 z-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed -top-40 left-1/2 z-0 h-[520px] w-[780px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-1/2 -right-40 z-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <TechMarquee />
          <ProjectsBento />
          <ExperienceTimeline />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
