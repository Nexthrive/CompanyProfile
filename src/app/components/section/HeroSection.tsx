import HeroWord from "@/app/components/texts/HeroWord";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section className="w-full h-screen flex items-center ">
      <div className="absolute inset-0 flex items-center px-[4.6rem] z-0 pointer-events-none">
        <Image src="/LogoN.png" alt="Background N" width={752} height={752} />
      </div>
      <div className="space-y-4">
        {/* TODO 1: Row utama */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-h1">Your</span>
          <HeroWord text="Vision." />
          <span className="text-h1">Our</span>
          <HeroWord text="Code." />
        </div>

        {/* TODO 2: Row kedua */}
        <div className="flex">
          <div className="flex flex-wrap items-center gap-2 glow">
            <span className="text-h1">Limitless</span>
            <HeroWord text="Possibilities." />
          </div>
        </div>

        <div className=" mt-[8rem] flex items-center gap-5 ">
          <span className="text-h5 underline cursor-pointer">
            View Our Work
          </span>{" "}
          <Image
            src="/Vector.png"
            alt="Arrow Right"
            width={40}
            height={24}
            className="inline-block ml-2 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
