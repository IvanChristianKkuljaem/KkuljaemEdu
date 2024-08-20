import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import Clients from '../Home/Clients';
import Appoinment from '../Home/Appoinment';
import Header from '@/components/Header/Header';

export default function Service() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Service" menuText="Service" />

      <section className="services section">
        <div className="container">
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

      <Clients />

      <Appoinment />
    </>
  );
}
