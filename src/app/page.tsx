import HeroSection from "@/app/components/section/HeroSection";
import ProjectSection from "./components/section/ProjectSection";
import ServicesSection from "./components/section/ServicesSection";
import AboutSection from "./components/section/AboutSection";
import ActionCard from "./components/card/ActionCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="px-[4.6rem] flex flex-col">
        <section id="Hero w-full h-screen flex items-center ">
          <HeroSection />
        </section>
        <section id="Projects" className="relative z-10">
          <ProjectSection />
        </section>
        <section id="Services" className="">
          <ServicesSection />
        </section>
        <section id="About" className="mt-[25.625rem] mb-[22.9375rem]">
          <AboutSection />
        </section>
        <ActionCard />
      </main>
    </div>
  );
}
