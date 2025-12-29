"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

// 1. Setup your data (5 items as requested)
const content = [
  {
    id: 1,
    title: "Nex Text",
    desc: "Website built for Texting Your friends with Modern UI.",
    src: "/website/NextText.png",
  },
  {
    id: 2,
    title: "Nex Habit",
    desc: "Website built for Habit Tracker, Simple and User Friendly.",
    src: "/website/NexHabbit.png",
  },
  {
    id: 3,
    title: "NexAdemy",
    desc: "Website built for Education Platform for school with Modern Design.",
    src: "/website/NexAdemy.png",
  },
];
export default function StickyScrollJustified() {
  const [activeCard, setActiveCard] = useState(0);

  const nextSlide = () => {
    setActiveCard((prev) => (prev + 1) % content.length);
  };

  const prevSlide = () => {
    setActiveCard((prev) => (prev - 1 + content.length) % content.length);
  };

  return (
    <div className="w-full">
      {/* Mobile Layout - Carousel */}
      <div className="lg:hidden pb-16">
        <div className="relative">
          {/* Image Carousel */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={content[activeCard].src}
                  alt={content[activeCard].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition z-10"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition z-10"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeCard ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text Content Below */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">{content[activeCard].title}</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {content[activeCard].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Sticky scroll */}
      <div className="hidden lg:flex justify-between w-full pb-40">
        <div className="w-2/5 xl:w-1/3 flex flex-col pt-[30vh]">
          {content.map((item, index) => (
            <TextBlock
              key={item.id}
              item={item}
              index={index}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
          <div className="h-[20vh]" />
        </div>

        <div className="sticky top-20 h-screen flex items-center justify-end">
          <div className="relative w-[45rem] xl:w-[50rem] h-[27rem] xl:h-[30rem] rounded-xl overflow-hidden shadow-2xl bg-gray-900">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={content[activeCard].src}
                  alt={content[activeCard].title}
                  fill
                  className="object-cover"
                  priority={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reuse the same TextBlock component from before
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TextBlock({ item, index, activeCard, setActiveCard }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveCard(index);
    }
  }, [isInView, index, setActiveCard]);

  const isActive = activeCard === index;

  return (
    <div ref={ref} className="h-[50vh] flex flex-col justify-center relative">
      <motion.div
        animate={{ y: isActive ? -20 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.h2
          animate={{ color: isActive ? "#000000" : "#9ca3af" }}
          className="text-2xl xl:text-3xl font-bold transition-colors cursor-pointer"
        >
          {item.title}
        </motion.h2>

        <div className="relative overflow-hidden h-24 mt-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 20,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-lg text-gray-600 leading-relaxed absolute top-0 left-0" // Darker text for white bg
          >
            {item.desc}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
