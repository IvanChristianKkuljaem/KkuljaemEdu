import HeaderTwo from "@/components/Header/HeaderTwo";
import Hero from "../Home/Hero";
import Features from "../Home/Features";
import Funfact from "../Home/Funfact";
import WhyChoose from "../Home/WhyChoose";
import CallAction from "../Home/CallAction";
import Portfolio from "../Home/Portfolio";
import Services from "../Home/Services";
import Testimonial from "../Home/Testimonials";
import Departments from "../Home/Departments";
import Pricing from "../Home/Pricing";
import Team from "../Home/Mentor";
import Blog from "../Home/News";
import Clients from "../Home/Clients";
import Preloader from "@/components/Preloader";

export default function HomeTwo() {
  return (
    <>
      <Preloader />
      <HeaderTwo />
      <Hero sectionName="slider index2" />
      <Features sectionName="Features index2 section" />
      <Funfact />
      <WhyChoose />
      <CallAction />
      <Portfolio />
      <Services />
      <Testimonial />
      <Departments />
      <Pricing />
      <Team />
      <Blog />
      <Clients />
    </>
  );
}
