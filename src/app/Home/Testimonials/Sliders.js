'use client';

import Image from 'next/image';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import TestimonialImg1 from '../../../../public/img/kkuljaem/Hanni-Circle.png';
import TestimonialImg2 from '../../../../public/img/kkuljaem/Haerin-Circle.png';
import TestimonialImg3 from '../../../../public/img/kkuljaem/Danielle-Circle.png';
import TestimonialImg4 from '../../../../public/img/kkuljaem/Minji-Circle.png';
import TestimonialImg5 from '../../../../public/img/kkuljaem/Hyein-Circle.png';

export default function Sliders() {
  const [testimonialSlider, settestimonialSlider] = useState([
    {
      id: 'slider1',
      img: TestimonialImg1,
      desc: "Stay in the middle. Like you a little. Don't wanna riddle",
      name: 'Pham Hanni',
    },
    {
      id: 'slider2',
      img: TestimonialImg2,
      desc: "We can go wherever you like. Baby say the words then i'm down",
      name: 'Kang Haerin',
    },
    {
      id: 'slider3',
      img: TestimonialImg3,
      desc: "Cause i'm not gonna be the one who get hurt",
      name: 'Danielle Marsh',
    },
    {
      id: 'slider4',
      img: TestimonialImg4,
      desc: "And don't you know how sweet it taste. How sweet it taste",
      name: 'Kim Minji',
    },
    {
      id: 'slider5',
      img: TestimonialImg5,
      desc: "I'm super shy super shy but wait a minute while I make you mine",
      name: 'Lee Hyein',
    },
  ]);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 4000 }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className="testimonial-slider"
        breakpoints={{
          360: {
            slidesPerView: 1,
            loop: false,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1170: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonialSlider.map((singleSlider) => (
          <SwiperSlide className="single-testimonial" key={singleSlider.id}>
            <Image src={singleSlider.img} alt="#" width={53} height={53} />
            <p>{singleSlider.desc}</p>
            <h4 className="name">{singleSlider.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
