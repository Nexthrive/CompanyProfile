import { Card } from "../card/TiltedCard";

export default function TeamSection() {
  return (
    <div>
      <div className="text-container">
        <div className="text-wrapper flex flex-col gap-8">
          <div className="text flex justify-between gap-[16.375rem]">
            <h3 className="text-h3 ">Meet Our Team</h3>
            <h5 className="text-h5 w-[41.9375rem] text-justify2">
              Experts with diverse strengths, aligned under one vision
              delivering excellence.
            </h5>
          </div>
          <div className="card mt-[5rem] shadow shadow-lg">
            <Card imgSrc="/nadra.png" height={448} width={400} name="Nadra" altText="" />
          </div>
        </div>
      </div>
    </div>
  );
}
