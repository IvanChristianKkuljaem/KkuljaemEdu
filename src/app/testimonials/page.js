import Breadcrumbs from "@/components/Breadcrumbs";
import Features from "../Home/Features";
import Testimonial from "../Home/Testimonials";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";

export default function Testimonials() {
  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs
        title="Testimonials"
        breadcrumbItems={[
          { href: "/", text: "Home" },
          { href: "/testimonals", text: "Testimonials" },
        ]}
      />

      <Features sectionName="Features testimonial-page section" />

      {/* <Funfact /> */}

      {/* <Services /> */}

      <Testimonial />
    </>
  );
}
