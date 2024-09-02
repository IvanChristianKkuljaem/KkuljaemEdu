"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Sliders from "./Sliders";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";
import portofolioData from "@/utils/portofolio.json";

export default function PortfolioDetails() {
  // Select the first portfolio item from the JSON data
  const [portfolioDetails] = useState(portofolioData.portfolioItems[0]);

  if (!portfolioDetails) {
    return <Preloader />;
  }

  const breadcrumbItems = [
    { href: "/", text: "Home" },
    { href: "/portfolio-details", text: "Portfolio Details" },
  ];

  return (
    <>
      <Header />

      <Breadcrumbs
        title="Portfolio Details"
        breadcrumbItems={breadcrumbItems}
      />

      <section className="pf-details section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-content">
                <div className="image-slider">
                  <Sliders sliders={portfolioDetails.sliders} />
                </div>
                <div className="date">
                  <ul>
                    <li>
                      <span>Category :</span> {portfolioDetails.category}
                    </li>
                    <li>
                      <span>Date :</span> {portfolioDetails.date}
                    </li>
                    <li>
                      <span>Partner :</span> {portfolioDetails.partner}
                    </li>
                    <li>
                      <span>Location :</span> {portfolioDetails.location}
                    </li>
                  </ul>
                </div>
                <div className="body-text">
                  <h3>Here is the name of this project here</h3>
                  {portfolioDetails.description?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <div className="share">
                    <h4>Share Now -</h4>
                    <ul>
                      {portfolioDetails.socialLinks?.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href}>
                            <i
                              className={`fa ${link.iconClass}`}
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
