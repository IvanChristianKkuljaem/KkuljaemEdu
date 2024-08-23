import Link from "next/link";

export default function Links() {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-footer f-link">
        <h2>Quick Links</h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <ul>
              <li>
                <Link href="/">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/mentors">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  Mentors
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <ul>
              <li>
                <Link href="/testimonials">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  T&C
                </Link>
              </li>
              <li>
                <Link href="/policy">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
