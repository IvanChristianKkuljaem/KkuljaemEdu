import Link from "next/link";
import Sliders from "./Sliders";

export default function Clients() {
  return (
    <>
      <div className="clients overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <Link href={"/university"}>
                <Sliders />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
