import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header/Header';
import Preloader from '@/components/Preloader';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs title="Contact Us" menuText="Contact Us" />

      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                  <div id="myMap">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=-6.187220943694921,106.70331609329935&t=&z=16&ie=UTF8&iwloc=&output=embed"></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Contact With Us</h2>
                  <p>If you have any questions please fell free to contact with us.</p>

                  <form className="form" method="post" action="/mail.php">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name="name" placeholder="Name" required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="email" name="email" placeholder="Email" required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name="phone" placeholder="Phone" required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name="subject" placeholder="Subject" required />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea name="message" placeholder="Your Message" required></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <Link href="/mail-success">
                            <button className="btn" type="submit">
                              Send
                            </button>
                          </Link>
                        </div>
                        {/* <div className="checkbox">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                              Do you want to subscribe to our Newsletter?
                            </label>
                          </div>
                        </div> */}
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
