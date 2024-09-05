import Header from "@/components/Header/Header";
import Clients from "./Home/Clients";
import Departments from "./Home/Departments";
import Features from "./Home/Features";
import Funfact from "./Home/Funfact";
import Hero from "./Home/Hero";
import Portfolio from "./Home/Portfolio";
import Pricing from "./Home/Pricing";
import Schedule from "./Home/Schedule";
import Services from "./Home/Services";
import Testimonial from "./Home/Testimonials";
import WhyChoose from "./Home/WhyChoose";
import Preloader from "@/components/Preloader";
import Mentor from "./Home/Mentor";

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
      <Clients />
      <Portfolio />
      <Services />
      <Testimonial />
      <Departments />
      <Mentor />
      <Pricing />
    </>
  );
}
