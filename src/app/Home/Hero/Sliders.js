"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import HeroBg1 from "../../../../public/img/kkuljaem/Slider1.jpg";
import HeroBg2 from "../../../../public/img/kkuljaem/Slider2.jpg";
import HeroBg3 from "../../../../public/img/kkuljaem/Slider3.jpg";

// import HeroBg1 from "../../../../public/img/slider.jpg";
// import HeroBg2 from "../../../../public/img/slider2.jpg";
// import HeroBg3 from "../../../../public/img/slider3.jpg";

export default function Sliders(props) {
  const { sectionName } = props;

  const [heroSliders, setheroSliders] = useState([
    {
      id: "slider1",
      bgImg: HeroBg1,
      title: "Why Study in <span>South Korea?</span>",
      subTitle:
        "Korea Selatan menawarkan pendidikan berkualitas tinggi dengan universitas top seperti <span>Seoul National University, KAIST, Sung Kyun Kwan University, Hanyang University</span> dan <span>Yonsei University</span>, yang semuanya menduduki peringkat tinggi dalam QS World Rankings. Ini <span>memberikan peluang besar dalam bidang penelitian, teknologi, dan inovasi.</span>",
      button: {
        text: "Get Consultation",
        link: "/appoinment",
      },
      button2: {
        text: "Learn More",
        link: "/about",
      },
    },
    {
      id: "slider2",
      bgImg: HeroBg2,
      title: "Why Study in <span>South Korea?</span>",
      subTitle:
        "Tidak hanya peluang kuliah, namun juga peluang beasiswa seperti GKS, siswa internasional bisa mengeksplorasi budaya Korea sambil mendapatkan pendidikan kelas dunia. Universitas-universitas di Korea Selatan juga menawarkan lingkungan kampus yang dinamis dan kesempatan untuk membangun jaringan internasional.",
      button: {
        text: "Get Consultation",
        link: "/appoinment",
      },
      button2: {
        text: "About Us",
        link: "/about",
      },
    },
    {
      id: "slider3",
      bgImg: HeroBg3,
      title:
        "We Provide <span>Consultation</span> Services <br/> That You Can <span>Trust!</span>",
      subTitle:
        "Kami telah berhasil membantu banyak siswa untuk berangkat dan belajar di Korea Selatan, dan terus mewujudkan komitmen kami untuk mewujudkan mimpi siswa untuk studi ke Korea Selatan. ",
      button: {
        text: "Get Consultation",
        link: "/appoinment",
      },
      button2: {
        text: "Contact Now",
        link: "/contact",
      },
    },
  ]);

  return (
    <>
      {/* <!-- Slider Area --> */}
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
                backgroundImage: `url(${singleSlider.bgImg.src})`,
                // backgroundSize: "100% 100%",
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
