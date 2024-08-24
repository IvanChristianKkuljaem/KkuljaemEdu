import Header from '@/components/Header/Header';
import TermsConditions from './TermsConditions';
import Breadcrumbs from '@/components/Breadcrumbs';
import Preloader from '@/components/Preloader';

export default function Terms() {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumbs title="Terms & Conditions" menuText="Terms & Conditions" />
      <TermsConditions />
    </>
  );
}
