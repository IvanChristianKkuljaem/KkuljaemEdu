import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";
import universityData from "@/utils/university.json";

export default function UniversityDetails() {
  const univ = universityData[0];

  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs
        title="University Details"
        breadcrumbItems={[
          { href: "/", text: "Home" },
          { href: "/university", text: "University" },
          { href: "/university-details", text: "University Details" },
        ]}
      />

      <div className="doctor-details-area section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <Image
                  src={univ.image}
                  alt={univ.name}
                  width={479}
                  height={551}
                />
                <div className="doctor-details-contact">
                  <h3>Contact Info</h3>
                  <ul className="basic-info">
                    <li>
                      <i className="icofont-ui-call"></i>
                      Call: {univ.details.contact.phone}
                    </li>
                    <li>
                      <i className="icofont-ui-message"></i>
                      {univ.details.contact.email}
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      {univ.details.contact.address}
                    </li>
                  </ul>

                  <div className="doctor-details-work">
                    <h3>Opening hours</h3>
                    <ul className="time-sidual">
                      {univ.details.hours.map((hours, index) => {
                        const [day, time] = hours.split(": ");
                        return (
                          <li className="day" key={index}>
                            {day}: <span>{time}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-name">
                    <h3 className="name">{univ.name}</h3>
                    <p className="deg">{univ.designation}</p>
                    <p className="degree">South Korea</p>
                  </div>
                  <div className="doctor-details-biography">
                    <h3>About</h3>
                    <p>{univ.details.about}</p>
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Scholarship</h3>
                    <ul>
                      {univ.details.scholarships.map((scholarship, index) => (
                        <li key={index}>
                          {index + 1}. {scholarship}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Top Programs</h3>
                    <ul>
                      {univ.details.programs.map((program, index) => (
                        <li key={index}>
                          {index + 1}. {program}
                        </li>
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
