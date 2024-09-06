"use client";

import { useState } from "react";

export default function Mission() {
  const [missionData, setmissionData] = useState([
    {
      id: "item1",
      icon: "icofont-business-man",
      title: "Professional Mentor",
      desc: "Program mentoring beasiswa terbaik dengan mentor yang berpengalaman",
    },
    {
      id: "item2",
      icon: "icofont-businesswoman",
      title: "Best Counselor",
      desc: "Program konsultasi dengan konsultan expert yang memiliki berbagai informasi eksklusif seputar pendidikan di Korea Selatan",
    },
    {
      id: "item3",
      icon: "icofont-university",
      title: "Dream University",
      desc: "Kkuljaem Education bekerjasama dengan beberapa universitas ternama di Korea Selatan dan memiliki banyak pilihan universitas",
    },
    {
      id: "item4",
      icon: "icofont-sale-discount",
      title: "Package Deals",
      desc: "Tersedia berbagai paket menarik dari program-program unggulan Kkuljaem Edu yang sesuai dengan kebutuhan",
    },
  ]);

  return (
    <>
      <section className="our-mission-area ptb-100 pt-0">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="our-mission-content">
                <span className="sub-title">Our Mission & Vision</span>
                <h2>Better Information, Better Education</h2>
                <p>
                  Memiliki mentor profesional dan konselor berpengalaman,
                  Kkuljaem Education menawarkan program unggulan dengan
                  informasi eksklusif dan terpercaya mengenai Korea Selatan.
                </p>
                <ul>
                  {missionData.map((items) => (
                    <li key={items.id}>
                      <div className="icon">
                        <i className={items.icon}></i>
                      </div>
                      <span>{items.title}</span>
                      {items.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pt-5 pb-5">
              <div className="our-mission-image"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
