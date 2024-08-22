'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import ClientImg1 from '../../../../public/img/kkuljaem/01. SKKU.png';
import ClientImg2 from '../../../../public/img/kkuljaem/02. Hanyang.png';
import ClientImg3 from '../../../../public/img/kkuljaem/03. Hankuk.png';
import ClientImg4 from '../../../../public/img/kkuljaem/04 Kyung Hee.png';
import ClientImg5 from '../../../../public/img/kkuljaem/05. Sunchon.png';
import ClientImg6 from '../../../../public/img/kkuljaem/06. Ajou.png';
import ClientImg7 from '../../../../public/img/kkuljaem/07. Sangmyung.png';
import ClientImg8 from '../../../../public/img/kkuljaem/08. Wonkwang.png';
import ClientImg9 from '../../../../public/img/kkuljaem/09. Solbridge.png';
import ClientImg10 from '../../../../public/img/kkuljaem/10. Dankook.png';
import ClientImg11 from '../../../../public/img/kkuljaem/11. Hong Ik.png';
import ClientImg12 from '../../../../public/img/kkuljaem/12. Mokpo.png';

export default function Sliders() {
  const [clientSliders, setclientSliders] = useState([
    {
      id: 'slider1',
      img: ClientImg1,
    },
    {
      id: 'slider2',
      img: ClientImg2,
    },
    {
      id: 'slider3',
      img: ClientImg3,
    },
    {
      id: 'slider4',
      img: ClientImg4,
    },
    {
      id: 'slider5',
      img: ClientImg5,
    },
    {
      id: 'slider6',
      img: ClientImg6,
    },
    {
      id: 'slider7',
      img: ClientImg7,
    },
    {
      id: 'slider8',
      img: ClientImg8,
    },
    {
      id: 'slider9',
      img: ClientImg9,
    },
    {
      id: 'slider10',
      img: ClientImg10,
    },
    {
      id: 'slider11',
      img: ClientImg11,
    },
    {
      id: 'slider12',
      img: ClientImg12,
    },
  ]);

  return (
    <Swiper
      loop={true}
      slidesPerView={5}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]}
      className="clients-slider"
      breakpoints={{
        360: {
          slidesPerView: 2,
          loop: false,
        },
        576: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {clientSliders.map((singleSlider) => (
        <SwiperSlide className="single-clients" key={singleSlider.id}>
          <Image src={singleSlider.img} alt="#" width={216} height={56} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
