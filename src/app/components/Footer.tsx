"use client";
import { useEffect, useRef } from "react";

export default function Footer() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const adjustFontSize = () => {
      const title = titleRef.current;
      if (!title) return;

      const container = title.parentElement;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      // Start with a large font size and scale down
      let fontSize = 500;
      title.style.fontSize = fontSize + "px";

      while (title.scrollWidth > containerWidth && fontSize > 10) {
        fontSize -= 1;
        title.style.fontSize = fontSize + "px";
      }
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
    return () => window.removeEventListener("resize", adjustFontSize);
  }, []);

  return (
    <footer className="w-full pt-8 md:pt-10 pb-8 md:pb-10 overflow-hidden">
      {/* Top Section - Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full text-sm md:text-base gap-y-8 md:gap-y-10 gap-x-6">
        {/* Copyright */}
        <div className="lg:col-span-1">
          <span className="font-semibold uppercase text-xs md:text-sm">©NEXSTUDIO 2025</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-y-2 md:gap-y-4 lg:col-start-3">
          <a href="#" className="cursor-pointer hover:opacity-50 w-fit text-sm md:text-base transition">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:opacity-50 w-fit text-sm md:text-base transition">
            About
          </a>
          <a href="#Services" className="cursor-pointer hover:opacity-50 w-fit text-sm md:text-base transition">
            Services
          </a>
          <a href="#Projects" className="cursor-pointer hover:opacity-50 w-fit text-sm md:text-base transition">
            Work
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-y-2 md:gap-y-4 underline">
          <a href="#" className="hover:opacity-50 w-fit text-sm md:text-base transition">
            Instagram
          </a>
          <a href="#" className="hover:opacity-50 w-fit text-sm md:text-base transition">
            Linkedin
          </a>
          <a
            href="mailto:nexthrivestudios@gmail.com"
            className="hover:opacity-50 w-fit text-sm md:text-base transition break-all sm:break-normal"
          >
            nexthrivestudios@gmail.com
          </a>
          <a
            href="tel:+6285943626853"
            className="hover:opacity-50 w-fit text-sm md:text-base transition"
          >
            +6285943626853
          </a>
        </div>
      </div>

      {/* BOTTOM SECTION: Large Brand Text */}
      <div className="w-full mt-12 md:mt-16 lg:mt-24 overflow-hidden">
        <h1 
          ref={titleRef}
          className="block font-black leading-none tracking-tighter whitespace-nowrap" 
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            fontSize: '200px'
          }}
        >
          NEXSTUDIO.
        </h1>
      </div>
    </footer>
  );
}
