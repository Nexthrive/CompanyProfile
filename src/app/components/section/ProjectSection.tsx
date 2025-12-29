import StickyScroll from "../texts/StickyScroll";
export default function ProjectSection() {
  return (
    <section id="Projects" className="mt-20 relative z-10">
      <div className="text-container  flex flex-col">
        <div className="text-wrapper">
          <h3 className="text-h3">
            {" "}
            Join our team and shape the future <br /> with innovative solutions.
          </h3>
          <StickyScroll />
        </div>
      </div>
    </section>
  );
}
