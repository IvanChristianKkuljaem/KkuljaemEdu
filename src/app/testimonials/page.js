import Breadcrumbs from '@/components/Breadcrumbs';
import Features from '../Home/Features';
import Testimonial from '../Home/Testimonials';
import Header from '@/components/Header/Header';
import Preloader from '@/components/Preloader';

export default function Testimonials() {
  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs title="Testimonials" menuText="Testimonials" />

      <Features sectionName="Feautes testimonial-page section" />

      {/* <Funfact /> */}

      {/* <Services /> */}

      <Testimonial />
    </>
  );
}
