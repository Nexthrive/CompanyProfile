"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLenis, handleSmoothScroll } from "@/app/utils";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay: 0.2,
      }}
    >
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 py-3 md:py-4 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo N"
            width={150}
            height={70}
            className="md:w-45 lg:w-53 h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-16">
          <a
            href="#"
            className="text-base font-normal hover:opacity-70 transition"
            onClick={(e) => handleSmoothScroll(e, "#", lenis)}
          >
            Home
          </a>
          <a
            href="#Projects"
            className="text-base font-normal hover:opacity-70 transition"
            onClick={(e) => handleSmoothScroll(e, "#Projects", lenis)}
          >
            Work
          </a>
          {/* <a
            href="#About"
            className="text-base font-normal hover:opacity-70 transition"
            onClick={(e) => handleSmoothScroll(e, "#About")}
          >
            About
          </a> */}
          <a
            href="#Services"
            className="text-base font-normal hover:opacity-70 transition"
            onClick={(e) => handleSmoothScroll(e, "#Services", lenis)}
          >
            Services
          </a>

          <button className="flex items-center gap-2 px-6 xl:px-8 py-3 rounded-full border border-black/30 bg-[#eaf1f2] text-base font-medium transition hover:bg-[#e0e7ea]">
            Start Project
            <span className="text-lg">»</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-black/5 rounded-lg transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="lg:hidden border-t border-black/10 bg-[#fafafa]"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col px-4 py-6 gap-4">
            <a
              href="#"
              className="text-base font-normal py-2 hover:bg-black/5 px-4 rounded-lg transition"
              onClick={(e) => {
                handleSmoothScroll(e, "#", lenis);
                setIsOpen(false);
              }}
            >
              Home
            </a>
            <a
              href="#Projects"
              className="text-base font-normal py-2 hover:bg-black/5 px-4 rounded-lg transition"
              onClick={(e) => {
                handleSmoothScroll(e, "#Projects", lenis);
                setIsOpen(false);
              }}
            >
              Work
            </a>
            {/* <a
              href="#About"
              className="text-base font-normal py-2 hover:bg-black/5 px-4 rounded-lg transition"
              onClick={(e) => {
                handleSmoothScroll(e, "#About", lenis);
                setIsOpen(false);
              }}
            >
              About
            </a> */}
            <a
              href="#Services"
              className="text-base font-normal py-2 hover:bg-black/5 px-4 rounded-lg transition"
              onClick={(e) => {
                handleSmoothScroll(e, "#Services", lenis);
                setIsOpen(false);
              }}
            >
              Services
            </a>
            
            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-black/30 bg-[#eaf1f2] text-base font-medium transition hover:bg-[#e0e7ea] mt-2">
              Start Project
              <span className="text-lg">»</span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
