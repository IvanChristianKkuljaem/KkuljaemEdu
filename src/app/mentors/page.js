"use client";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";
import TeamCard from "@/components/TeamCard";
import mentorJson from "@/utils/mentor.json";

export default function Mentors() {
  const [mentorData, setMentorData] = useState(mentorJson);

  // useEffect(() => {
  //   fetch(mentorJson)
  //     .then((response) => response.json())
  //     .then((data) => setMentorData(data))
  //     .catch((error) => console.error("Error fetching mentors data:", error));
  // }, []);

  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs
        title="Meet Our Qualified Mentors"
        breadcrumbItems={[
          { href: "/", text: "Home" },
          { href: "/mentors", text: "Mentors" },
        ]}
      />

      <section id="team" className="team section single-page">
        <div className="container">
          <div className="row">
            {mentorData.map((mentor, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <TeamCard
                  tilt="tilt-disable"
                  id={mentor.id}
                  image={mentor.image}
                  name={mentor.name}
                  designation={mentor.designation}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
