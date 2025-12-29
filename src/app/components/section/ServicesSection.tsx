"use client";
import ServiceCard, { ServiceItem } from "@/app/components/card/ServiceCard";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
    },
  },
};

export default function ServicesSection() {
  return (
    <section>
      <div className="flex flex-col gap-12 md:gap-16 py-12 md:py-16 lg:py-20">
        {/* Header - Animated */}
        <motion.div 
          className="space-y-2 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-2xl md:text-3xl lg:text-h4 font-medium tracking-tight leading-tight">
            See how we&lsquo;ve turned ideas into reality. Dive into the stories
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-h4 font-medium tracking-tight opacity-40 leading-tight">
            of successful product designs that make a difference.
          </h2>
        </motion.div>

        {/* Services List - Alternating Layout */}
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
