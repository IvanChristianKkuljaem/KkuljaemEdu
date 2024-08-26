import Breadcrumbs from "@/components/Breadcrumbs";
import FaqMain from "./FaqMain";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";

export default function Faq() {
  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs
        title="Frequently Asked Questions"
        breadcrumbItems={[
          { href: "/", text: "Home" },
          { href: "/faq", text: "FAQ" },
        ]}
      />

      <FaqMain />
    </>
  );
}
