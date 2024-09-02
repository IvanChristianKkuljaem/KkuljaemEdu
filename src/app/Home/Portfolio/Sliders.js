"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import PortfolioImg1 from "../../../../public/img/event/View1.gif";
import PortfolioImg2 from "../../../../public/img/event/View2.gif";
import PortfolioImg3 from "../../../../public/img/event/View3.gif";
import PortfolioImg4 from "../../../../public/img/event/View4.gif";
import PortfolioImg5 from "../../../../public/img/event/event5.jpg";

export default function Sliders() {
  const [portfolioSlider, setportfolioSlider] = useState([
    {
      id: "slider1",
      img: PortfolioImg1,
    },
    {
      id: "slider2",
      img: PortfolioImg2,
    },
    {
      id: "slider3",
      img: PortfolioImg3,
    },
    {
      id: "slider4",
      img: PortfolioImg4,
    },
    {
      id: "slider5",
      img: PortfolioImg5,
    },
  ]);

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={15}
      loop={true}
      autoplay={{ delay: 4000 }}
      modules={[Autoplay]}
      className="portfolio-slider"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        360: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {portfolioSlider.map((singleSlider) => (
        <SwiperSlide
          className="single-pf"
          key={singleSlider.id}
          style={{ borderRadius: "24px" }}
        >
          <Image
            src={singleSlider.img}
            alt="#"
            width={320}
            height="auto"
            style={{
              minWidth: "320px",
              minHeight: "292px",
              borderRadius: "24px",
            }}
          />
          <Link href="/portfolio-details" className="btn">
            View Details
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
