import SectionHead from "@/components/SectionHead";

import Video from "./Video";

export default function WhyChoose() {
  return (
    <>
      <section className="why-choose section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="We Offer Different Services To Improve Your Health"
                desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="choose-left">
                <h3>Who We Are</h3>
                <p>
                  Kkuljaem Edu adalah lembaga konsultasi studi ke Korea Selatan
                  yang didirikan oleh Han Jongdae (Bandung Oppa) di tahun 2022.
                  Hingga saat ini, kami telah berhasil membantu banyak siswa
                  untuk berangkat dan belajar di Korea Selatan, dan terus
                  mewujudkan komitmen kami untuk mewujudkan mimpi siswa untuk
                  studi ke Korea Selatan.
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
    </>
  );
}
