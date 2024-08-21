import Header from "@/components/Header/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Policy() {
  return (
    <>
      <Header />
      <Breadcrumbs title="Privacy Policy" menuText="Privacy Policy" />
      <PrivacyPolicy />
    </>
  );
}
