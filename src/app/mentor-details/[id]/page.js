"use client";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

import mentorData from "@/utils/mentor.json";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function MentorDetails() {
  const [mentor, setMentor] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchMentorDetails = () => {
      try {
        const mentorItem = mentorData.find((item) => item.id === parseInt(id));
        setMentor(mentorItem);
      } catch (error) {
        console.error("Error fetching mentor details:", error);
      }
    };

    if (id) {
      fetchMentorDetails();
    }
  }, [id]);

  if (!mentor) {
    return <p>No Mentors Found</p>;
  }

  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs
        title="Mentor Details"
        breadcrumbItems={[
          { href: "/", text: "Home" },
          { href: "/mentors", text: "Mentors" },
          { href: "/mentor-details", text: "Mentor Details" },
        ]}
      />

      <div className="doctor-details-area section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={479}
                  height={551}
                />
                <div className="doctor-details-contact">
                  <h3>Contact info</h3>
                  <ul className="basic-info">
                    <li>
                      <i className="icofont-ui-call"></i>
                      Call : {mentor.contactInfo.phone}
                    </li>
                    <li>
                      <i className="icofont-ui-message"></i>
                      {mentor.contactInfo.email}
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      {mentor.contactInfo.address}
                    </li>
                  </ul>

                  <ul className="social">
                    <li>
                      <Link href={mentor.socialLinks.facebook}>
                        <i className="icofont-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href={mentor.socialLinks.googlePlus}>
                        <i className="icofont-google-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href={mentor.socialLinks.twitter}>
                        <i className="icofont-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href={mentor.socialLinks.vimeo}>
                        <i className="icofont-vimeo"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href={mentor.socialLinks.pinterest}>
                        <i className="icofont-pinterest"></i>
                      </Link>
                    </li>
                  </ul>

                  <div className="doctor-details-work">
                    <h3>Working hours</h3>
                    <ul className="time-sidual">
                      {mentor.workingHours.map((item, index) => (
                        <li className="day" key={index}>
                          {item.day} <span>{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-name">
                    <h3 className="name">{mentor.name}</h3>
                    <p className="deg">{mentor.designation}</p>
                    <p className="degree">Singer</p>
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Biography</h3>
                    <p>{mentor.biography}</p>
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Education</h3>
                    <ul>
                      {mentor.education.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
