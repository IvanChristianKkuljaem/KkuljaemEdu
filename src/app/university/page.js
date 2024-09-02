"use client";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";
import UniversityCard from "@/components/UniversityCard";
import universityData from "@/utils/university.json";

export default function University() {
  const [univData, setUnivData] = useState(universityData);

  //   useEffect(() => {
  //     fetch(universityData)
  //       .then((response) => response.json())
  //       .then((data) => setUnivData(data))
  //       .catch((error) =>
  //         console.error("Error fetching the univeristy data:", error)
  //       );
  //   }, []);

  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs
        title="Our University Partners"
        breadcrumbItems={[
          { href: "/", text: "Home" },
          { href: "/university", text: "University" },
        ]}
      />

      <section id="team" className="team section single-page">
        <div className="container">
          <div className="row">
            {univData.map((univ, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <UniversityCard
                  tilt="tilt-disable"
                  id={univ.id}
                  image={univ.image}
                  name={univ.name}
                  designation={univ.designation}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
