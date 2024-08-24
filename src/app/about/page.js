import Breadcrumbs from '@/components/Breadcrumbs';
import AboutSection from './AboutSection';
import Vission from './Vission';
import Mission from './Mission';
import Header from '@/components/Header/Header';
import Funfact from '../Home/Funfact';
import Preloader from '@/components/Preloader';

export default function About() {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumbs title="About Us" menuText="About Us" />
      <AboutSection />
      <Vission />
      <Funfact />
      <Mission />
    </>
  );
}
