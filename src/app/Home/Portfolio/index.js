import SectionHead from "@/components/SectionHead";
import Sliders from "./Sliders";

export default function Portfolio() {
  return (
    <section className="portfolio section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHead
              title="We Make Events To Share Exclusive Information On Education In South Korea"
              desc="These are our past educational events for students"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-12">
            <Sliders />
          </div>
        </div>
      </div>
    </section>
  );
}
