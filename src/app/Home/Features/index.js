import FeatureCard from "@/components/FeatureCard";
import SectionHead from "@/components/SectionHead";

export default function Features(props) {
  const { sectionName } = props;

  return (
    <>
      <section className={sectionName ? sectionName : "Features section"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="We Are Always Ready to Help You Achieve Your Dream University"
                desc="Konsultasi dengan konsultan expert yang berpengalaman"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-google-talk"
                title="Consult With Us"
                desc="Konsultasi dengan konsultan expert yang berpengalaman"
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-university"
                title="Apply to Your Dream University"
                desc="Memiliki banyak pilihan dan rekomendasi universitas di Korea Selatan
"
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features last"
                icon="icofont icofont-certificate-alt-1"
                title="100% Guaranteed Acceptance"
                desc="Bekerjasama dengan berbagai universitas ternama di Korea, Kkuljaem Education tawarkan jaminan 100% lolos
"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
