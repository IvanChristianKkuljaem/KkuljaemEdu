import Link from "next/link";

export default function Schedule() {
  return (
    <>
      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 ">
                {/* <!-- single-schedule --> */}
                <div className="single-schedule first">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-university"></i>
                    </div>
                    <div className="single-content">
                      <span>Scholarship Program</span>
                      <h4>MENTORING</h4>
                      <p>
                        Bimbingan persiapan beasiswa ke luar negeri dengan
                        Awardee scholarship
                      </p>
                      <Link href="/service">
                        LEARN MORE<i className="fa fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* <!-- single-schedule --> */}
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-teacher"></i>
                    </div>
                    <div className="single-content">
                      <span>Kkuljaem Edu</span>
                      <h4>SERVICES</h4>
                      <p>
                        Konsultasi dengan Edu Consultant Expert dan pihak
                        Universitas di Korea
                      </p>
                      <Link href="/pricing">
                        LEARN MORE<i className="fa fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                {/* <!-- single-schedule --> */}
                <div className="single-schedule last">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-prescription"></i>
                    </div>
                    <div className="single-content">
                      <span>Document Management</span>
                      <h4>PACKAGE</h4>
                      <p>Layanan penerjemah dan apostille dokumen terpercaya</p>
                      <Link href="/workshops">
                        LEARN MORE<i className="fa fa-long-arrow-right"></i>
                      </Link>
                    </div>
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
