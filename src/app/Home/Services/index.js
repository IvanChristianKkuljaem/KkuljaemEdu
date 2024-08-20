import SectionHead from '@/components/SectionHead';
import ServiceCard from '@/components/ServiceCard';

export default function Services() {
  return (
    <section className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHead title="We Offer Six Different Services for Scholarship Preparation" desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Private Mentoring Preparation Basic"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                luctus dictum eros ut imperdiet."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Private Mentoring Preparation Pro"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  luctus dictum eros ut imperdiet."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Mentoring and TOPIK Preparation"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  luctus dictum eros ut imperdiet."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Mentoring and Preparation Group"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  luctus dictum eros ut imperdiet."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Private Mentoring Preparation"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  luctus dictum eros ut imperdiet."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ServiceCard
              icon="icofont icofont-prescription"
              title="GKS Group Mentoring Preparation"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  luctus dictum eros ut imperdiet."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
