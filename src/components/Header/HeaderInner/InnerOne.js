"use client";

import Link from "next/link";
import useStickyHeader from "./useStickyHeader";

import Logo from "../Logo";
import Navbar from "../Navbar";
import MobileOffcanvas from "@/components/MobileOffcanvas";

export default function HeaderInner() {
  const { isSticky } = useStickyHeader();

  return (
    <div className={`header-inner ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="inner">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12 mobile-menu-sticky">
              <Logo />
              <MobileOffcanvas />
            </div>
            <div className="col-lg-7 col-md-9 col-12">
              <Navbar />
            </div>
            <div className="col-lg-2 col-12">
              <div className="get-quote">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScU7cRBQOJN5epKWXc82Wjngm0G1MRVkjarUgalQvI_m8eqwA/viewform"
                  className="btn"
                >
                  Consult Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
