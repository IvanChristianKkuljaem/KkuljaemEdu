import Header from '@/components/Header/Header';
import CallAction from './Home/CallAction';
import Clients from './Home/Clients';
import Departments from './Home/Departments';
import Features from './Home/Features';
import Funfact from './Home/Funfact';
import Hero from './Home/Hero';
import Portfolio from './Home/Portfolio';
import Pricing from './Home/Pricing';
import Schedule from './Home/Schedule';
import Services from './Home/Services';
import Team from './Home/Team';
import Testimonial from './Home/Testimonials';
import WhyChoose from './Home/WhyChoose';
import Preloader from '@/components/Preloader';
import News from './Home/News';

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <Schedule />
      <Features />
      <Funfact />
      <WhyChoose />
      <CallAction />
      <Portfolio />
      <Services />
      <Testimonial />
      <Departments />
      <Team />
      <Pricing />
      <Clients />
      <News />
      {/* <Appoinment /> */}
    </>
  );
}
