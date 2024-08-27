"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="main-menu">
      <nav className="navigation">
        <ul className="nav menu">
          <li>
            <Link href="/">
              Home
              {/* <i className="icofont-rounded-down"></i> */}
            </Link>
            {/* <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/" ? "active" : ""}`}
                    href="/"
                  >
                    Home Page 1
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/home-2" ? "active" : ""}`}
                    href="/home-2"
                  >
                    Home Page 2
                  </Link>
                </li>
              </ul> */}
          </li>
          <li>
            <Link
              className={` ${pathname === "/about" ? "active" : ""}`}
              href="/about"
            >
              About Us
            </Link>
          </li>
          {/* <li>
            <Link
              className={` ${pathname === "/mentors" ? "active" : ""}`}
              href="/mentors"
            >
              Mentors
              <i className="icofont-rounded-down"></i>
            </Link>
            <ul className="dropdown">
              <li>
                <Link
                  className={` ${pathname === "/mentors" ? "active" : ""}`}
                  href="/mentors"
                >
                  Mentor
                </Link>
              </li>
              <li>
                <Link
                  className={` ${
                    pathname === "/mentor-details" ? "active" : ""
                  }`}
                  href="/mentor-details"
                >
                  Mentor Details
                </Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link
              // className={` ${pathname === "/service" ? "active" : ""}`}
              href="#"
            >
              Services
              <i className="icofont-rounded-down"></i>
            </Link>
            <ul className="dropdown">
              <li>
                <Link
                  className={` ${pathname === "/service" ? "active" : ""}`}
                  href="/service"
                >
                  Package
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/mentors" ? "active" : ""}`}
                  href="/mentors"
                >
                  Mentors
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/university" ? "active" : ""}`}
                  href="/university"
                >
                  University
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/testimonials" ? "active" : ""}`}
                  href="/testimonials"
                >
                  Testimonial
                </Link>
              </li>
            </ul>
            {/* <ul className="dropdown">
              <li>
                <Link
                  className={` ${pathname === "/service" ? "active" : ""}`}
                  href="/service"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  className={` ${
                    pathname === "/service-details" ? "active" : ""
                  }`}
                  href="/service-details"
                >
                  Service Details
                </Link>
              </li>
            </ul> */}
          </li>
          <li>
            <Link
              className={` ${pathname === "/pricing" ? "active" : ""}`}
              href="/pricing"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className={` ${pathname === "/news" ? "active" : ""}`}
              href="/news"
            >
              News
            </Link>
          </li>
          {/* <li>
            <Link href="#">
              Pages <i className="icofont-rounded-down"></i>
            </Link>
            <ul className="dropdown">
              <li>
                <Link
                  className={` ${pathname === "/about" ? "active" : ""}`}
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/appointment" ? "active" : ""}`}
                  href="/appointment"
                >
                  Appointment
                </Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/time-table" ? "active" : ""}`}
                  href="/time-table"
                >
                  Time Table
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/testimonials" ? "active" : ""}`}
                  href="/testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/pricing" ? "active" : ""}`}
                  href="/pricing"
                >
                  Our Pricing
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/register" ? "active" : ""}`}
                  href="/register"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/login" ? "active" : ""}`}
                  href="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/faq" ? "active" : ""}`}
                  href="/faq"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/mail-success" ? "active" : ""}`}
                  href="/mail-success"
                >
                  Mail Success
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/404" ? "active" : ""}`}
                  href="/404"
                >
                  404 Error
                </Link>
              </li>
            </ul>
          </li> */}
          {/* <li>
            <Link href="#">
              Blogs <i className="icofont-rounded-down"></i>
            </Link>
            <ul className="dropdown">
              <li>
                <Link
                  className={` ${pathname === "/news" ? "active" : ""}`}
                  href="/news"
                >
                  Blog Grid
                </Link>
              </li>
              <li>
                <Link
                  className={` ${pathname === "/news-details" ? "active" : ""}`}
                  href="/news-details"
                >
                  Blog Details
                </Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link
              className={` ${pathname === "/faq" ? "active" : ""}`}
              href="/faq"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              className={` ${pathname === "/contact" ? "active" : ""}`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
