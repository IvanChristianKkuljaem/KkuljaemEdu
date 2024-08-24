import Header from '@/components/Header/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import PrivacyPolicy from './PrivacyPolicy';
import Preloader from '@/components/Preloader';

export default function Policy() {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumbs title="Privacy Policy" menuText="Privacy Policy" />
      <PrivacyPolicy />
    </>
  );
}
