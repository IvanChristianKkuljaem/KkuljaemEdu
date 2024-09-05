"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import portfolioData from "@/utils/portofolio.json";
import Image from "next/image";

export default function Sliders() {
  const [detailsSlider, setdetailsSlider] = useState(portfolioData);
  console.log("IMAGE::: ", detailsSlider[1].sliders[1].img);

  return (
    <>
      <section className="slider">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="pf-details-slider"
        >
          {detailsSlider.map((singlePortfolio) =>
            singlePortfolio.sliders.map((singleSlider) => (
              <SwiperSlide key={singleSlider.sliders_id}>
                <Image
                  src={singleSlider.img}
                  alt={`Slider ${singleSlider.sliders_id}`}
                  width={2560}
                  height={600}
                  // style={{ maxHeight: 600, minHeight: 600 }}
                  priority={true}
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </section>
    </>
  );
}
