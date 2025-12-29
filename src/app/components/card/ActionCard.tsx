import FluidBackground from "../FluidBackground";

export default function ActionCard() {
  return (
    <div className="relative rounded-[32px] overflow-hidden w-full min-h-[340px] md:min-h-[420px] flex items-center justify-center">
      {/* Fluid background */}
      <FluidBackground />
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 z-10">
        <h2 className="text-white text-h3 font-semibold  mb-8 leading-tight drop-shadow-lg">
          Building modern solutions for
          <br />
          forward-thinking companies.
          <br />
          Start your project now.
        </h2>
        <button className="mt-2 px-6 py-3 border-2 border-white rounded-full text-white text-lg font-medium bg-transparent hover:bg-white hover:text-black transition-colors flex items-center gap-2">
          Start Project
          <span className="ml-2">&raquo;</span>
        </button>
      </div>
    </div>
  );
}
