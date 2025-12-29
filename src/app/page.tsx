import HeroSection from "@/app/components/section/HeroSection";
import ProjectSection from "./components/section/ProjectSection";
import ServicesSection from "./components/section/ServicesSection";
import AboutSection from "./components/section/AboutSection";
import ActionCard from "./components/card/ActionCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col">
        {/* Hero - full width with own padding */}
        <section id="Hero" className="w-full">
          <HeroSection />
        </section>
        
        {/* Content sections with responsive padding */}
        <div className="px-4 md:px-8 lg:px-[4.6rem] flex flex-col">
          <section id="Projects" className="relative z-10">
            <ProjectSection />
          </section>
          <section id="Services" className="">
            <ServicesSection />
          </section>
          <section id="About" className="mt-32 md:mt-48 lg:mt-[25.625rem] mb-32 md:mb-48 lg:mb-[22.9375rem]">
            <AboutSection />
          </section>
          <ActionCard />
        </div>
      </main>
    </div>
  );
}
