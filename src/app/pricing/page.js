import Breadcrumbs from "@/components/Breadcrumbs";
import PricingData from "../Home/Pricing/PricingData";
import Clients from "../Home/Clients";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";

export default function Pricing() {
  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs
        title="Our Pricing"
        breadcrumbItems={[
          { href: "/", text: "Home" },
          { href: "/pricing", text: "Our Pricing" },
        ]}
      />

      <section className="pricing-table section">
        <div className="container">
          <div className="row">
            <PricingData />
          </div>
        </div>
      </section>

      <Clients />
    </>
  );
}
