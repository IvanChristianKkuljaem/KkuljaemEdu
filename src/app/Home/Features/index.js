import FeatureCard from "@/components/FeatureCard";
import SectionHead from "@/components/SectionHead";

export default function Features(props) {
  const { sectionName } = props;

  return (
    <>
      <section className={sectionName ? sectionName : "Feautes section"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="We Are Always Ready to Help You Achieve Your Dream University"
                desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-google-talk"
                title="Consult With Us"
                desc="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-university"
                title="Apply to Your Dream University"
                desc="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate."
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features last"
                icon="icofont icofont-certificate-alt-1"
                title="100% Guaranteed Acceptance"
                desc="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
