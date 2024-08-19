import FunfactCard from "@/components/FunfactCard";

export default function Funfact() {
  return (
    <>
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-home"
                number="138"
                desc="University Partners"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-user-alt-3"
                number="62"
                desc="Specialist Mentors"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont-simple-smile"
                number="179"
                desc="Graduated Students"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-table"
                number="4"
                desc="Years of Experience"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
