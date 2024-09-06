"use client";

import { useState } from "react";

export default function Vission() {
  const [vissionData, setvissionData] = useState([
    {
      id: "item1",
      icon: "icofont-tick-mark",
      title: "Our Mission",
      desc: "Memberikan Konsultasi Terbaik : Menyediakan layanan konsultasi pendidikan yang komprehensif dan terpercaya untuk siswa yang ingin melanjutkan studi di Korea Selatan, dengan pendekatan yang terpersonalisasi untuk memenuhi kebutuhan masing-masing individu.",
    },
    {
      id: "item2",
      icon: "icofont-tick-mark",
      title: "Our Planning",
      desc: "Kkuljaem Education akan terus berkembang dan berkomitmen guna mewujudkan mimpi siswa melanjutkan pendidikan ke Korea Selatan.",
    },
    {
      id: "item3",
      icon: "icofont-tick-mark",
      title: "Our Vision",
      desc: "Menjadi pelopor utama dalam pendidikan global dengan memfasilitasi akses ke pendidikan berkualitas di Korea Selatan, dan memberdayakan siswa untuk mencapai potensi maksimal mereka dalam lingkungan internasional yang dinamis.",
    },
  ]);

  return (
    <>
      <section className="our-vision-area ptb-100 pt-0">
        <div className="container">
          <div className="row">
            {vissionData.map((items) => (
              <div className="col-lg-4 col-md-6 col-12" key={items.id}>
                <div className="single-vision-box">
                  <div className="icon">
                    <i className={items.icon}></i>
                  </div>
                  <h3>{items.title}</h3>
                  <p>{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
