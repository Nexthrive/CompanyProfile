"use client";
import Image from "next/image";
import { Check } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="flex flex-col justify-center items-center h-[37.25rem] w-[66.1875rem] md:flex-row bg-[#F8F8F8] border border-[#171717] rounded-[2.5rem] overflow-hidden p-6 gap-8 items-center shadow-md">
      {/* Image Container */}
      <div className="w-full  relative aspect-square w-[31.25rem] h-[31.25rem] rounded-2xl overflow-hidden shadow-inner">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="w-full md:w-[37.25rem] flex flex-col justify-between py-4">
        <div>
          <h3 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            {service.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-[#171717] text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              <Check size={16} className="text-white" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export type { ServiceItem };
export default ServiceCard;
