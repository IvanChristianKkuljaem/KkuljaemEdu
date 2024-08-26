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
                      <h4>Preparation</h4>
                      <p>Konsultasi Unlimited dengan Edu Consultant Expert</p>
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
                      <i className="icofont-prescription"></i>
                    </div>
                    <div className="single-content">
                      <span>Kkuljaem Edu</span>
                      <h4>Services</h4>
                      <p>Konsultasi via zoom dengan pihak Universitas Korea</p>
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
                      <i className="icofont-ui-clock"></i>
                    </div>
                    <div className="single-content">
                      <span>Schedule</span>
                      <h4>Opening Hours</h4>
                      <ul className="time-sidual">
                        <li className="day">
                          Monday - Friday <span>10.00-18.00</span>
                        </li>
                        <li className="day">
                          Saturday, Sunday <span>Closed</span>
                        </li>
                        {/* <li className="day">
                          Sunday <span>Closed</span>
                        </li> */}
                      </ul>
                      <Link href="/contact">
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
