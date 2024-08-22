import SectionHead from "@/components/SectionHead";
import BlogCard from "@/components/BlogCard";

import BlogImg1 from "../../../../public/img/event/beasiswa.jpg";
import BlogImg2 from "../../../../public/img/kkuljaem/Event1.jpg";
import BlogImg3 from "../../../../public/img/event/istilah.jpg";

export default function Blog() {
  return (
    <>
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
            <div className="col-lg-4 col-md-6 col-12">
              <BlogCard
                image={BlogImg1}
                date="22 Aug, 2024"
                title="Pengumuman Beasiswa KGSP Graduate 2024"
                // desc="Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <BlogCard
                image={BlogImg2}
                date="15 Jul, 2024"
                title="Kuliah jurusan seni di Korea selatan dengan beasiswa KARTS 2024"
                // desc="Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <BlogCard
                image={BlogImg3}
                date="05 Jan, 2024"
                title="50+ Istilah Ini Dapat Mempercepat Persiapan Berkas Pendaftaran Beasiswa Kamu"
                // desc="Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
