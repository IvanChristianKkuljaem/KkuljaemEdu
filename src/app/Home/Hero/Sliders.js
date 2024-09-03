"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import path from "path";
import heroData from "@/utils/hero.json";

export default function Sliders(props) {
  const { sectionName } = props;
  const [heroSliders, setHeroSliders] = useState(heroData);

  // useEffect(() => {
  //   fetch("/utils/hero.json")
  //     .then((response) => response.json())
  //     .then((data) => setHeroSliders(data))
  //     .catch((error) => console.error("Error fetching slider data:", error));
  // }, []);

  return (
    <>
      <section className={sectionName ? sectionName : "slider"}>
        <Swiper
          autoplay={{ delay: 4000 }}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="hero-slider"
        >
          {heroSliders.map((singleSlider) => (
            <SwiperSlide
              className="single-slider"
              style={{
                backgroundImage: `url(${singleSlider.bgImg})`,
              }}
              key={singleSlider.id}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-12">
                    <div className="text">
                      <h1
                        dangerouslySetInnerHTML={{
                          __html: singleSlider.title,
                        }}
                      ></h1>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: singleSlider.subTitle,
                        }}
                      ></p>
                      {/* <!-- Slider Button --> */}
                      <div className="button">
                        <a href={singleSlider?.button.link} className="btn">
                          {singleSlider?.button.text}
                        </a>
                        <a
                          href={singleSlider?.button2.link}
                          className="btn primary"
                        >
                          {singleSlider?.button2.text}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </section>
    </>
  );
}
