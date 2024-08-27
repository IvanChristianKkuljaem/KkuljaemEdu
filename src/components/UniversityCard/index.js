"use client";

import Image from "next/image";
import Link from "next/link";
import { Tilt } from "react-tilt";
import TeamImg1 from "../../../public/img/team1.jpg";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 2000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export default function UniversityCard({ id, tilt, image, name, designation }) {
  return (
    <Tilt options={defaultOptions} className={tilt ? tilt : ""}>
      <div className="single-team">
        <div className="t-head">
          <Image
            src={image ? image : TeamImg1}
            alt={name}
            width={558}
            height={450}
            style={{ minHeight: 450, maxHeight: 450 }}
          />
          <div className="t-icon">
            <Link href="/university-details">Details</Link>
          </div>
        </div>
        <div className="t-bottom">
          <p>{designation}</p>
          <h2>
            <Link href="/university-details">{name}</Link>
          </h2>
        </div>
      </div>
    </Tilt>
  );
}
