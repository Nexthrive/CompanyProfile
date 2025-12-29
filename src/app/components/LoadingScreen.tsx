"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Set loading complete flag
    sessionStorage.setItem("loadingComplete", "false");
    
    let loadComplete = false;
    let progressInterval: NodeJS.Timeout;
    const startTime = Date.now();
    const MIN_LOADING_TIME = 2500; // Minimum 2.5 seconds

    // Simulate progress
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90 && !loadComplete) {
          return prev; // Wait at 90% until actual loading is done
        }
        return Math.min(prev + Math.random() * 15, 100);
      });
    }, 200);

    // Wait for actual page load
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);
      
      loadComplete = true;
      
      // Wait for minimum loading time
      setTimeout(() => {
        setProgress(100);
        
        // Wait a bit after 100% before hiding
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("loadingComplete", "true");
          clearInterval(progressInterval);
        }, 500);
      }, remainingTime);
    };

    // Check if already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback timeout (max 5 seconds + min time)
    const fallbackTimer = setTimeout(() => {
      handleLoad();
    }, 5000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallbackTimer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fafafa]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <motion.div
            className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
          >
            <Image
              src="/LogoN.png"
              alt="NEXSTUDIO Loading"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Loading Progress Bar */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[200px] md:w-[300px] h-1 bg-gray-200 rounded-full overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div
              className="h-full bg-black rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </motion.div>
          
          {/* Loading Percentage */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm md:text-base font-medium text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
