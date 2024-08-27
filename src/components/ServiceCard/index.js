import Link from "next/link";

export default function ServiceCard(props) {
  const { id, icon, title, desc } = props;

  return (
    <div className="single-service">
      <i
        className={icon ? icon : "icofont icofont-prescription"}
        style={{ marginTop: 6 }}
      ></i>
      <h4>
        <Link href={`/service-details/${id}`}>{title}</Link>
      </h4>
      <div
        dangerouslySetInnerHTML={{
          __html: desc,
        }}
      />
    </div>
  );
}
