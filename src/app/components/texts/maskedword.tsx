import FluidBackground from "@/app/components/FluidBackground";

interface MaskedWordProps {
  text: string;
}

export default function MaskedWord({ text }: MaskedWordProps) {
  return (
    <div className="relative inline-block mx-2">
      {/* LAYER 1: The Mask (Black Text) */}
      {/* The text MUST be Black (#000) for the blend mode to 'catch' it. */}
      <span className="relative z-0 block text-black leading-none pb-2">
        {text}
      </span>

      {/* LAYER 2: The Fluid (Sits on Top) */}
      {/* mix-blend-screen math:
          - Fluid + White Background = Invisible (White)
          - Fluid + Black Text = Visible Fluid
          - pointer-events-none = Lets you select the text underneath
      */}
      <div className="absolute inset-0 z-10 mix-blend-screen pointer-events-none">
        <FluidBackground />
      </div>
    </div>
  );
}
