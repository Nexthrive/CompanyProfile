import FluidBackground from "../FluidBackground";

export default function ActionCard() {
  return (
    <div className="relative rounded-2xl md:rounded-3xl lg:rounded-[32px] overflow-hidden w-full min-h-[350px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[480px] flex items-center justify-center">
      {/* Fluid background */}
      <FluidBackground />
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-5 sm:px-8 md:px-12 lg:px-16 py-8 z-10">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-h3 font-semibold mb-5 sm:mb-6 md:mb-8 leading-tight drop-shadow-lg max-w-full lg:max-w-3xl">
          Building modern solutions for forward-thinking companies. Start your project now.
        </h2>
        <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-white rounded-full text-white text-sm sm:text-base md:text-lg font-medium bg-transparent hover:bg-white hover:text-black transition-colors flex items-center gap-2 whitespace-nowrap">
          Start Project
          <span>&raquo;</span>
        </button>
      </div>
    </div>
  );
}
