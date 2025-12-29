import LiquidChrome from "@/app/components/LiquidChrome";
import FluidBackground from "../FluidBackground";

interface HeroWordProps {
  text: string;
}

// components/texts/HeroWord.tsx

export default function HeroWord({ text }: HeroWordProps) {
  return (
    <span className="relative inline-block px-2 py-0 whitespace-nowrap">
      {/* Liquid background — exactly ONE instance */}
      <div className="absolute inset-0 rounded-lg overflow-hidden z-0">
        <FluidBackground />
      </div>

      {/* Text above liquid */}
      <span className="relative z-10 text-h1 text-white leading-none">
        {text}
      </span>
    </span>
  );
}
