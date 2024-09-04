import Link from "next/link";

export default function ServiceCard(props) {
  const { id, icon, title, desc, link } = props;

  return (
    <div className="single-service">
      <i
        className={icon ? icon : "icofont icofont-prescription"}
        style={{ marginTop: 6 }}
      ></i>
      <h4>
        <Link href={link} target="_blank">
          {title}
        </Link>
      </h4>
      <div
        dangerouslySetInnerHTML={{
          __html: desc,
        }}
      />
      <br></br>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href={link} target="_blank">
          <button className="btn" style={{ width: "300px" }}>
            Click Here
          </button>
        </Link>
      </div>
    </div>
  );
}
