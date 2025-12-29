"use client";
import ServiceCard, { ServiceItem } from "@/app/components/card/ServiceCard";

const SERVICES: ServiceItem[] = [
  {
    title: "Brand Identity",
    description:
      "We help founders shape how their brand looks, sounds, and feels. From logo to typography to colors, we craft a system that's distinct, aligned, and built to grow with your business.",
    image: "/services/Brand.png",
    tags: ["Mockup", "Color Palette", "Logo"],
  },
  {
    title: "UI/UX Design",
    description:
      "We create intuitive, scalable interfaces that not only look good but actually guide users and drive results. Whether it's for mobile apps, websites, or SaaS platforms — we design products people love to use.",
    image: "/services/UIUX.png",
    tags: [
      "User Flow",
      "Wireframing",
      "Prototyping",
      "Hi-Fi UI Design",
      "Design System",
    ],
  },
  {
    title: "Development",
    description:
      "We build custom websites using powerful no-code tools — meaning you get beautiful, fast, and functional builds without the dev lag. Ideal for marketing sites, portfolios, landing pages, or simple platforms.",
    image: "/services/Development.png",
    tags: [
      "Optimization",
      "Responsive",
      "Domain Setup",
      "Animation & Interaction",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section>
      <div className="flex flex-col gap-12 py-20 ">
        {/* Header */}
        <div className="space-y-1">
          <h2 className="text-h4 font-medium tracking-tight">
            See how we&lsquo;ve turned ideas into reality. Dive into the stories
          </h2>
          <h2 className="text-h4 font-medium tracking-tight opacity-40">
            of successful product designs that make a difference.
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-8 justify-center items-center">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
