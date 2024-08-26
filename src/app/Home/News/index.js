import SectionHead from "@/components/SectionHead";
import NewsCard from "@/components/NewsCard";
import newsData from "@/utils/news.json";

export default function News() {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHead
              title="Keep up with Our Most Recent Education News"
              desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
            />
          </div>
        </div>
        <div className="row">
          {newsData.slice(0, 3).map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-12">
              <NewsCard
                image={item.image}
                date={item.date}
                title={item.title}
                desc={item.desc}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
