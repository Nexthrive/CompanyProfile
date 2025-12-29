"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
        autoResize: true,
      });
      setLenis(lenisRef.current);
    }
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      // Optionally clean up
    };
  }, []);

  return lenis;
}

function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  id: string,
  lenis: Lenis | null
) {
  e.preventDefault();
  const el =
    id === "#" ? document.body : document.getElementById(id.replace("#", ""));
  if (el) {
    if (lenis) {
      lenis.scrollTo(el, { offset: 0 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}
export { useLenis, handleSmoothScroll };
