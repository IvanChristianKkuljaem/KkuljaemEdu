"use client";

import SectionHead from "@/components/SectionHead";
import TeamCard from "@/components/TeamCard";
import mentorJson from "@/utils/mentor.json";
import SectionImg from "../../../../public/img/section-img2.png";

export default function Mentor() {
  const mentorsToShow = mentorJson.slice(2, 5);

  return (
    <section id="team" className="team section overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHead
              img={SectionImg}
              title="We Have Specialist Mentors To Solve Your Problems"
              desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
            />
          </div>
        </div>
        <div className="row">
          {mentorsToShow.map((mentor, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <TeamCard
                tilt="tilt-disable"
                image={mentor.image}
                name={mentor.name}
                // designation={mentor.designation}
                id={mentor.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
