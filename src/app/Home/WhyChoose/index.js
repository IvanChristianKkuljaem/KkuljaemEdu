import SectionHead from "@/components/SectionHead";

import Video from "./Video";

export default function WhyChoose() {
  return (
    <section className="why-choose section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHead
              title="We Offer Different Services To Help You Achieve Your Dream University"
              desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="choose-left">
              <h3>Who We Are</h3>
              <p>
                Kkuljaem Edu is an education consultancy specializing in higher
                education in South Korea, founded by Bandung Oppa (Han Jongdae)
                and his partner in 2022.
              </p>
              <p>
                Currently, we have successfully assisted and supported
                Indonesian students in achieving their dreams of enrolling and
                continuing their higher studies in South Korea. We are committed
                to becoming a better platform and bridge between Indonesian
                students, educational institutions, and universities in South
                Korea.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list">
                    <li>
                      <i className="fa fa-caret-right"></i>One-Stop Solution
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Gratis Konsultasi
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Dijamin 100% Lolos
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list">
                    <li>
                      <i className="fa fa-caret-right"></i>Universitas Tujuan
                      Lengkap
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Konselor Lulusan
                      Korea Selatan
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Kantor di Korea dan
                      Indonesia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="choose-right">
              <div className="video-image">
                <div className="promo-video">
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
                <Video />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
