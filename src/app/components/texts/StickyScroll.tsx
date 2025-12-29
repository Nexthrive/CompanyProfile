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

  return (
    <div className="flex justify-between w-full px-4 pb-40">
      <div className="w-1/3 flex flex-col pt-[30vh]">
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

      <div className=" sticky top-0 h-screen flex items-center justify-end">
        {" "}
        {/* justify-end aligns image inside box to right */}
        <div className="relative w-[50rem] h-[30rem] rounded-xl overflow-hidden shadow-2xl bg-gray-900">
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
          animate={{ color: isActive ? "#000000" : "#9ca3af" }} // Adjusted for white bg context (black text)
          className="text-3xl font-bold transition-colors cursor-pointer"
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
