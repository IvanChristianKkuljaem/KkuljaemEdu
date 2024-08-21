import Breadcrumbs from '@/components/Breadcrumbs';
import TeamCard from '@/components/TeamCard';

import TeamImg1 from '../../../public/img/kkuljaem/hanni.jpg';
import TeamImg2 from '../../../public/img/kkuljaem/haerin.jpg';
import TeamImg3 from '../../../public/img/kkuljaem/minji.jpg';
import TeamImg4 from '../../../public/img/kkuljaem/danielle.jpg';
import TeamImg5 from '../../../public/img/kkuljaem/hyein.jpg';
import TeamImg6 from '../../../public/img/kkuljaem/tooki.jpg';
import Header from '@/components/Header/Header';

export default function Mentors() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Meet Our Qualified Mentors" menuText="Mentors" />

      <section id="team" className="team section single-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard tilt="tilt-disable" image={TeamImg1} name="Pham Hanni" desgination="Ditto" />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard tilt="tilt-disable" image={TeamImg2} name="Kang Haerin" desgination="Supernatural" />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard tilt="tilt-disable" image={TeamImg3} name="Kim Minji" desgination="Super Shy" />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard tilt="tilt-disable" image={TeamImg4} name="Danielle Marsh" desgination="How Sweet" />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard tilt="tilt-disable" image={TeamImg5} name="Lee Hyein" desgination="Hype Boy" />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard tilt="tilt-disable" image={TeamImg6} name="Tokki" desgination="Attention" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
