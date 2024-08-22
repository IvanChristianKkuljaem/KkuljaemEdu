import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <section className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHead
              title="We Offer Six Different Services for Scholarship Preparation"
              desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Private Mentoring Preparation Basic"
              desc="<ul>
                      <li>Program pendampingan study di Korea mulai dari persiapan diri, persiapan dokumen, pendafataran beasiswa dan universitas yang dapat membantu kamu untuk bisa mendaftar secara tepat dan efisien.</li>
                    </ul>"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Private Mentoring Preparation Pro"
              desc="<ul>
                      <li>Program pendampingan study di Korea mulai dari persiapan diri, persiapan dokumen, pendafataran beasiswa dan universitas yang dapat membantu kamu untuk bisa mendaftar secara tepat dan efisien.</li>
                    </ul>"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Mentoring and TOPIK Preparation"
              desc="<ul>
                      <li>Program pendampingan study di Korea mulai dari persiapan diri, persiapan dokumen, pendafataran beasiswa dan universitas yang dapat membantu kamu untuk bisa mendaftar secara tepat dan efisien.</li>
                    </ul>"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Mentoring and Preparation Group"
              desc="<ul>
                      <li>Program pendampingan study di Korea mulai dari persiapan diri, persiapan dokumen, pendafataran beasiswa dan universitas yang dapat membantu kamu untuk bisa mendaftar secara tepat dan efisien.</li>
                    </ul>"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Private Mentoring Preparation"
              desc="<ul>
                      <li>Program pendampingan study di Korea mulai dari persiapan diri, persiapan dokumen, pendafataran beasiswa dan universitas yang dapat membantu kamu untuk bisa mendaftar secara tepat dan efisien.</li>
                    </ul>"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Group Mentoring Preparation"
              desc="<ul>
                      <li>Program pendampingan study di Korea mulai dari persiapan diri, persiapan dokumen, pendafataran beasiswa dan universitas yang dapat membantu kamu untuk bisa mendaftar secara tepat dan efisien.</li>
                    </ul>"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
