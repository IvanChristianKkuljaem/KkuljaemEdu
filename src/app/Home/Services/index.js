"use client";
import { useEffect, useState } from "react";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import serviceData from "@/utils/service.json";

export default function Services() {
  const [services, setServices] = useState(serviceData);

  // useEffect(() => {
  //   fetch(serviceData)
  //     .then((response) => response.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <section className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHead
              title="We Offer Six Different Services for Scholarship Preparation"
              desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
            />
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6 col-12" key={service.id}>
              <ServiceCard
                id={service.id}
                icon={service.icon}
                title={service.title}
                desc={service.desc}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
