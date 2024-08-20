import SectionHead from '@/components/SectionHead';
import TeamCard from '@/components/TeamCard';

import SectionImg from '../../../../public/img/section-img2.png';

import TeamImg1 from '../../../../public/img/kkuljaem/hanni.jpg';
import TeamImg2 from '../../../../public/img/kkuljaem/haerin.jpg';
import TeamImg3 from '../../../../public/img/kkuljaem/minji.jpg';
import TeamImg4 from '../../../../public/img/kkuljaem/danielle.jpg';
import TeamImg5 from '../../../../public/img/kkuljaem/hyein.jpg';

export default function Team() {
  return (
    <section id="team" className="team section overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHead img={SectionImg} title="We Have Specialist Mentors To Solve Your Problems" desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts" />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <TeamCard image={TeamImg1} name="Collis Molate" designation="Neurosurgeon" />
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <TeamCard image={TeamImg2} name="Domani Plavon" designation="Neurosurgeon" />
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <TeamCard image={TeamImg3} name="John Mard" designation="Dental Surgeon" />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <TeamCard image={TeamImg4} name="Amanal Frond" designation="Neurosurgeon" />
          </div>
        </div> */}
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <TeamCard tilt="tilt-disable" image={TeamImg1} name="Hanni Pham" desgination="Ditto" />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <TeamCard tilt="tilt-disable" image={TeamImg2} name="Kang Haerin" desgination="Supernatural" />
          </div>
          {/* <div className="col-lg-4 col-md-6 col-12">
            <TeamCard tilt="tilt-disable" image={TeamImg3} name="Kim Minji" desgination="Super Shy" />
          </div> */}
          <div className="col-lg-4 col-md-6 col-12">
            <TeamCard tilt="tilt-disable" image={TeamImg4} name="Danielle Marsh" desgination="How Sweet" />
          </div>
          {/* <div className="col-lg-4 col-md-6 col-12">
            <TeamCard tilt="tilt-disable" image={TeamImg5} name="Lee Hyein" desgination="Hype Boy" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
