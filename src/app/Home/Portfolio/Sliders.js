"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import portofolioData from "@/utils/portofolio.json";
export default function Sliders() {
  const [portfolioSlider, setportfolioSlider] = useState(portofolioData);

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
            src={singleSlider.image}
            alt="#"
            width={320}
            height={292}
            style={{
              minWidth: "320px",
              minHeight: "292px",
              borderRadius: "24px",
            }}
          />
          <Link href={`/portfolio-details/${singleSlider.id}`} className="btn">
            View Details
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
