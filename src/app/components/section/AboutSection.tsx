import Image from "next/image";

export default function AboutSection() {
  return (
    <div>
      <div className="text-container">
        <div className="text-wrapper flex flex-col gap-8">
          <div className="text flex justify-between gap-[16.375rem]">
            <h3 className="text-h3 ">About Our Journey</h3>
            <p className="text-body w-[41.9375rem] text-justify2">
              Our journey began with a simple spark of curiosity—just five
              friends forming a coding team to build experimental projects for
              the sheer fun of it. What started as a casual hobby quickly
              matured into professional dedication, transforming our small
              collective into a fully established IT company. Today, we carry
              that same passion for innovation into every solution we build,
              proving that great things truly have humble beginnings.
            </p>
          </div>
          <div className="image mt-[5rem] flex justify-center">
            <Image src={"/About.png"} width={1595} height={840} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
}
