"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import pricingData from "@/utils/pricing.json";

export default function PricingData() {
  const [packageData, setPackageData] = useState(pricingData);

  // useEffect(() => {
  //   fetch("/pricing.json")
  //     .then((response) => response.json())
  //     .then((data) => setPackageData(data));
  // }, []);

  const handleButtonClick = (pricingTitle) => {
    const message = `Halo, Saya Ingin Membeli ${pricingTitle} dari Kkuljaem Education, Apakah Bisa Dibantu?`;
    const url = `https://wa.me/6287818140362?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {packageData.map((pricing, index) => (
        <div key={index} className="col-lg-4 col-md-12 col-12">
          <div className="single-table" style={{ minHeight: "525px" }}>
            <div className="table-head">
              <div className="icon">
                <i className={`icofont ${pricing.icon}`}></i>
              </div>
              <h4 className="title">{pricing.title}</h4>
              <div className="price">
                <p className="amount">
                  Rp {pricing.price} juta
                  <span>/ Per Package</span>
                </p>
              </div>
            </div>
            <ul className="table-list" style={{ minHeight: 175 }}>
              {pricing.features.map((feature, index) => (
                <li key={index} className={feature.status ? "" : "cross"}>
                  {feature.status ? (
                    <i className="icofont icofont-ui-check"></i>
                  ) : (
                    <i className="icofont icofont-ui-close"></i>
                  )}
                  {feature.name}
                </li>
              ))}
            </ul>
            <div className="table-bottom">
              <button
                className="btn"
                onClick={() => handleButtonClick(pricing.title)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
