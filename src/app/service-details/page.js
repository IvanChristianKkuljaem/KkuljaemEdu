"use client";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";
import serviceData from "@/utils/service.json";

export default function ServiceDetails() {
  const service = serviceData[0];

  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs
        title="Service Details"
        breadcrumbItems={[
          { href: "/", text: "Home" },
          { href: "/service", text: "Service" },
          { href: "/service-details", text: service.title },
        ]}
      />

      <div className="service-details-area section">
        <div className="container">
          <div className="services-details-img">
            <Image
              src={service.image}
              alt={service.title}
              width={1920}
              height={1000}
            />
            <h2>{service.title}</h2>
            <p>{service.details.overview}</p>
            <blockquote>
              <i className="icofont-quote-left"></i>
              {service.details.additionalInfo}
            </blockquote>
            <ul>
              {service.details.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <div dangerouslySetInnerHTML={{ __html: service.desc }} />
          </div>
        </div>
      </div>
    </>
  );
}
