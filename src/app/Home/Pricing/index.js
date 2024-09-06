import SectionHead from "@/components/SectionHead";
import PricingData from "./PricingData";

export default function Pricing() {
  return (
    <>
      <section className="pricing-table section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="We Provide You The Best Service In Reasonable Price"
                desc="One-stop Solution untuk melanjutkan pendidikan ke Korea Selatan dengan kualitas terbaik  dan harga terjangkau."
              />
            </div>
          </div>
          <div className="row">
            <PricingData />
          </div>
        </div>
      </section>
    </>
  );
}
