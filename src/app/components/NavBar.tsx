import Image from "next/image";
export default function NavBar() {
  return (
    <nav className="flex justify-between px-12 py-6 border-black/20 bg-[#fafafa] w-full">
      <div className="font-bold font-sans font-semibold items-center flex ">
        <Image src="/Logo.png" alt="Logo N" width={212} height={100} />
      </div>
      <div className="flex items-center gap-[4rem]">
        <a href="#" className="text-base font-normal">
          Home
        </a>
        <a href="#" className="text-base font-normal">
          About
        </a>
        <a href="#" className="text-base font-normal">
          Services
        </a>
        <a href="#" className="text-base font-normal">
          Work
        </a>
        <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-black/30 bg-[#eaf1f2] text-base font-medium transition hover:bg-[#e0e7ea]">
          Start Project
          <span className="text-lg">»</span>
        </button>
      </div>
    </nav>
  );
}
