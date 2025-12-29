export default function Footer() {
  return (
    <footer className="w-full pt-10 pb-10 px-4 md:px-16 overflow-hidden">
      {/* GRID LAYOUT EXPLAINED:
         - grid-cols-4 divides the width into 4 equal chunks (25% each).
         - We place items explicitly into specific chunks to match your red lines.
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 w-full text-sm md:text-base gap-y-10">
        {/* CHUNK 1: Leftmost Column */}
        <div className="md:col-span-1">
          <span className="font-semibold uppercase">©NEXSTUDIO 2025</span>
        </div>

        <div className="md:col-start-3 flex gap-[8.0625rem]">
          <div className=" flex flex-col gap-y-[2.5rem] ">
            <span className="cursor-pointer hover:opacity-50 w-fit text-bodyB">
              Home
            </span>
            <span className="cursor-pointer hover:opacity-50 w-fit text-bodyB">
              About
            </span>
            <span className="cursor-pointer hover:opacity-50 w-fit text-bodyB">
              Services
            </span>
            <span className="cursor-pointer hover:opacity-50 w-fit text-bodyB">
              Work
            </span>
          </div>
          {/* CHUNK 4: Socials - Starts at the 75% mark (Right quarter) */}
          <div className="flex flex-col gap-y-[2.5rem] underline">
            <a href="#" className="hover:opacity-50 w-fit text-bodyB">
              Instagram
            </a>
            <a href="#" className="hover:opacity-50 w-fit text-bodyB">
              Linkedin
            </a>
            <a
              href="mailto:nexthrivestudios@gmail.com"
              className="hover:opacity-50 w-fit text-bodyB"
            >
              nexthrivestudios@gmail.com
            </a>
            <a
              href="tel:+6285943626853"
              className="hover:opacity-50 w-fit text-bodyB"
            >
              +6285943626853
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Large Brand Text */}
      <div className="w-full mt-16 md:mt-24 ">
        <span className="block font-black leading-none title tracking-tighter -ml-1">
          NEXSTUDIO.
        </span>
      </div>
    </footer>
  );
}
