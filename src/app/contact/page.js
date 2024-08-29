"use client";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    currentEducation: "",
    schoolUniversity: "",
    targetLevel: "",
    targetUniversity: "",
    desiredMajor: "",
    programType: "",
    intake: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "+6287818140362";

    const message = `
Halo, Saya Tertarik untuk Konsultasi dengan Kkuljaem Education,

Nama: ${formData.name}
Kelas/Pendidikan saat ini: ${formData.currentEducation}
Sekolah/Universitas: ${formData.schoolUniversity}
Jenjang yg akan diapply (Sekolah Bahasa, S1/S2/S3): ${formData.targetLevel}
Universitas Tujuan: ${formData.targetUniversity}
Jurusan yang akan diambil: ${formData.desiredMajor}
Program Beasiswa/Non Beasiswa: ${formData.programType}
Intake: ${formData.intake}

Message: ${formData.message}

감사합니다-Terima Kasih!`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message.replace(/\n/g, "\n")
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs
        title="Contact Us"
        breadcrumbItems={[
          { href: "/", text: "Home" },
          { href: "/contact", text: "Contact Us" },
        ]}
      />

      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                  <div id="myMap">
                    <iframe
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=-6.187220943694921,106.70331609329935&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Contact With Us</h2>
                  <p>
                    If you have any questions please feel free to contact with
                    us.
                  </p>

                  <form className="form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Nama"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="currentEducation"
                            placeholder="Kelas/Pendidikan saat ini"
                            value={formData.currentEducation}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="schoolUniversity"
                            placeholder="Sekolah/Universitas"
                            value={formData.schoolUniversity}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="targetLevel"
                            placeholder="Jenjang yg akan diapply (Sekolah Bahasa, S1/S2/S3)"
                            value={formData.targetLevel}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="targetUniversity"
                            placeholder="Universitas Tujuan"
                            value={formData.targetUniversity}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="desiredMajor"
                            placeholder="Jurusan yang akan diambil"
                            value={formData.desiredMajor}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="programType"
                            placeholder="Program Beasiswa/Non Beasiswa"
                            value={formData.programType}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="intake"
                            placeholder="Intake"
                            value={formData.intake}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button className="btn" type="submit">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="row">
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-ui-call"></i>
                  <div className="content">
                    <h3>+628 7818 140362</h3>
                    <p>education@kkuljaemkorean.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Jl. Green Lake City Boulevard No.7</h3>
                    <p>Tangerang, Banten</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-wall-clock"></i>
                  <div className="content">
                    <h3>Mon - Sat: 10am - 6pm</h3>
                    <p>Saturday, Sunday Closed</p>
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
