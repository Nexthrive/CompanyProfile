"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
    },
  },
};

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center ${
        isEven ? "" : "lg:grid-flow-dense"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      {/* Image Container */}
      <div
        className={`relative h-[250px] sm:h-[300px] lg:h-[380px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl group lg:col-span-5 ${
          isEven ? "lg:col-start-1" : "lg:col-start-8"
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Container */}
      <div
        className={`flex flex-col gap-4 md:gap-6 lg:col-span-7 ${
          isEven ? "lg:col-start-6" : "lg:col-start-1"
        }`}
      >
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
              0{index + 1}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
            {service.title}
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-black text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <Check size={14} className="md:w-4 md:h-4 text-white" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export type { ServiceItem };
export default ServiceCard;
