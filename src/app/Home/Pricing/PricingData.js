import Link from "next/link";

const Data = [
  {
    title: "Document Package",
    icon: "icofont-law-document",
    price: 8,
    features: [
      { name: "Documents Preparation", status: true },
      { name: "Apostile", status: true },
      { name: "Translate", status: true },
      { name: "Donec ultricies metus", status: false },
      // { name: "Pellentesque eget nibh", status: false },
    ],
  },
  {
    title: "Visa Package",
    icon: "icofont-visa",
    price: 8,
    features: [
      { name: "Visa Processing", status: true },
      { name: "Visa Fee", status: true },
      { name: "Visa", status: true },
      { name: "Donec ultricies metus", status: false },
      // { name: "Pellentesque eget nibh", status: false },
    ],
  },
  {
    title: "Consultation Package",
    icon: "icofont-package",
    price: 5,
    features: [
      { name: "University and Major Consultation", status: true },
      { name: "Online Application", status: true },
      { name: "Contact with University", status: true },
      { name: "Contact other legal documents", status: true },
      // { name: "Pellentesque eget nibh", status: true },
    ],
  },
];

export default function PricingData() {
  return (
    <>
      {Data.map((pricing, index) => (
        <div key={index} className="col-lg-4 col-md-12 col-12">
          <div className="single-table" style={{ minHeight: "525px" }}>
            <div className="table-head">
              <div className="icon">
                <i className={`icofont ${pricing.icon}`}></i>
              </div>
              <h4 className="title">{pricing.title}</h4>
              <div className="price">
                <p className="amount">
                  Rp {pricing.price} juta
                  <span>/ Per Package</span>
                </p>
              </div>
            </div>
            <ul className="table-list">
              {pricing.features.map((feature, index) => (
                <li key={index} className={feature.status ? "" : "cross"}>
                  {feature.status ? (
                    <i className="icofont icofont-ui-check"></i>
                  ) : (
                    <i className="icofont icofont-ui-close"></i>
                  )}
                  {feature.name}
                </li>
              ))}
            </ul>
            <div className="table-bottom">
              <Link className="btn" href="#">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
