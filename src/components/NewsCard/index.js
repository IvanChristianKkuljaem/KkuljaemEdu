import Image from "next/image";
import Link from "next/link";

export default function NewsCard(props) {
  const { id, image, date, title, desc } = props;

  return (
    <div className="single-news">
      <div className="news-head">
        <Image src={image} alt="#" width={557} height={373} />
      </div>
      <div className="news-body">
        <div className="news-content">
          <div className="date">{date}</div>
          <h2>
            <Link href={`/news-details/${id}`}>
              {title ? title : "Pengumuman Kkuljaem Education"}
            </Link>
          </h2>
          <p className="text">
            {desc ? desc : "Pengumuman beasiswa dari Kkuljaem Education"}
          </p>
        </div>
      </div>
    </div>
  );
}
