"use client";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import Clients from "../Home/Clients";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";
import serviceData from "@/utils/service.json";

export default function Service() {
  const [services, setServices] = useState(serviceData);

  // useEffect(() => {
  //   fetch(serviceData)
  //     .then((response) => response.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs
        title="Service"
        breadcrumbItems={[
          { href: "/", text: "Home" },
          { href: "/service", text: "Service" },
        ]}
      />

      <section className="services section">
        <div className="container">
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

      <Clients />
    </>
  );
}
