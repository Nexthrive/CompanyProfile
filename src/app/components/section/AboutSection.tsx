import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Side - Text Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-h3 font-semibold tracking-tight leading-tight">
              About Our Journey
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-black to-gray-400 rounded-full"></div>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Our journey began with a simple spark of curiosity—just five
            friends forming a coding team to build experimental projects for
            the sheer fun of it. What started as a casual hobby quickly
            matured into professional dedication, transforming our small
            collective into a fully established IT company. Today, we carry
            that same passion for innovation into every solution we build,
            proving that great things truly have humble beginnings.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-4">
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold">7</h3>
              <p className="text-xs md:text-sm text-gray-600">Team Members</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold">10</h3>
              <p className="text-xs md:text-sm text-gray-600">Projects Done</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full aspect-video lg:h-[450px] xl:h-[500px] lg:aspect-auto overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl group">
          <Image
            src={"/About.png"}
            fill
            alt="About our journey"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
}
