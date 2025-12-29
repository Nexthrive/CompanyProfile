import StickyScroll from "../texts/StickyScroll";

export default function ProjectSection() {
  return (
    <section id="Projects" className="mt-12 md:mt-16 lg:mt-20 relative z-10">
      <div className="flex flex-col gap-8 md:gap-12">
        <h2 className="text-2xl md:text-3xl lg:text-h3 font-semibold leading-tight max-w-4xl">
          Join our team and shape the future with innovative solutions.
        </h2>
        <StickyScroll />
      </div>
    </section>
  );
}
