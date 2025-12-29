import StickyScroll from "../texts/StickyScroll";

export default function ProjectSection() {
  return (
      <div className="flex flex-col gap-8 md:gap-12">
        <h2 className="text-h3 font-semibold leading-tight max-w-4xl">
         A showcase of the projects we proudly build.
        </h2>
        <StickyScroll />
      </div>
  );
}
