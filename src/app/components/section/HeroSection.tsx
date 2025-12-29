"use client";
import HeroWord from "@/app/components/texts/HeroWord";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLenis, handleSmoothScroll } from "@/app/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
      delay: 1.2,
    },
  },
};

export default function HomeSection() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    // Check if loading is complete
    const checkLoading = () => {
      const loadingComplete = sessionStorage.getItem("loadingComplete");
      if (loadingComplete === "true") {
        setShouldAnimate(true);
      } else {
        // Check again after a delay
        setTimeout(checkLoading, 100);
      }
    };
    checkLoading();
  }, []);

  return (
    <section className="relative w-full h-svh flex items-center px-4 md:px-8 lg:px-[4.6rem]">
      {/* Background Logo - Animated */}
      <motion.div
        className="absolute inset-0 flex items-center justify-start md:justify-start px-4 md:px-8 lg:px-[4.6rem] z-0 pointer-events-none overflow-hidden"
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        variants={logoVariants}
      >
        <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[752px] lg:h-[752px] opacity-40 md:opacity-100">
          <Image
            src="/LogoN.png"
            alt="Background N"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Hero Content - Animated */}
      <motion.div
        className="relative z-10 space-y-4 md:space-y-6 max-w-full"
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Row 1 */}
        <motion.div
          className="flex flex-wrap items-center gap-2 md:gap-3"
          variants={itemVariants}
        >
          <span className="text-h1">Your</span>
          <HeroWord text="Vision." />
          <span className="text-h1">Our</span>
          <HeroWord text="Code." />
        </motion.div>

        {/* Row 2 */}
        <motion.div className="flex" variants={itemVariants}>
          <div className="flex flex-wrap items-center gap-2 md:gap-3 glow">
            <span className="text-h1">Limitless</span>
            <HeroWord text="Possibilities." />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 md:mt-16 lg:mt-[8rem] flex items-center gap-3 md:gap-5"
          variants={itemVariants}
        >
          <span className="text-h5 md:text-lg lg:text-h5 underline cursor-pointer hover:opacity-70 transition">
            <a
              href="#Projects"
              onClick={(e) => {
                handleSmoothScroll(e, "#Projects", lenis);
              }}
            >
              View Our Work
            </a>
          </span>
          <a
            href="#Projects"
            onClick={(e) => {
              handleSmoothScroll(e, "#Projects", lenis);
            }}
          >
            <Image
              src="/Vector.png"
              alt="Arrow Right"
              width={32}
              height={20}
              className="md:w-[40px] md:h-[24px] cursor-pointer hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
