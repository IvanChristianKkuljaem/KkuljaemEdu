import Header from "@/components/Header/Header";
import TermsConditions from "./TermsConditions";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Terms() {
  return (
    <>
      <Header />
      <Breadcrumbs title="Terms & Conditions" menuText="Terms & Conditions" />
      <TermsConditions />
    </>
  );
}
