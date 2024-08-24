import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import Clients from '../Home/Clients';
import Header from '@/components/Header/Header';
import Preloader from '@/components/Preloader';

export default function Service() {
  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs title="Service" menuText="Service" />

      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-prescription"
                title="GKS Private Mentoring Preparation Basic"
                desc="<ul>
                      <li>Kelas Bahasa Korea Private Basic 1 dan 2/Menengah 1 dan 2 (24x Pertemuan) (Private Class)</li>
                      <li>Mentoring session 4x (1on1 Mentor)</li>
                      <li>Buku Kkuljaem Korean</li>
                      <li>GKS Application Guide and Tips</li>
                      <li>Consultation for Mentee’s Uni and Track</li>
                      <li>Personal Statement Preparation</li>
                      <li>Choosing Universities and Track</li>
                      <li>Filling Application Form</li>
                      <li>Essay Quick Check</li>
                      <li>Personal Statement and Essay Review</li>
                      <li>Following up Preparation</li>
                      <li>Interview Preparation</li>
                      <li>Final QnA</li>
                      <li>Final Feedback</li>
                      <li>Essay Review (Study Plan dan Personal Statement)</li>
                    </ul>"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-prescription"
                title="GKS Private Mentoring Preparation Pro"
                desc="<ul>
                      <li>Kelas Bahasa Korea Private Basic 1-2, Private Menengah 1-2, Private TOPIK (56x Pertemuan) (Private Class)</li>
                      <li>Mentoring session 4x (1on1 Mentor)</li>
                      <li>Buku Kkuljaem Korean</li>
                      <li>GKS Application Guide and Tips</li>
                      <li>Consultation for Mentee’s Uni and Track</li>
                      <li>Personal Statement Preparation</li>
                      <li>Choosing Universities and Track</li>
                      <li>Filling Application Form</li>
                      <li>Essay Quick Check</li>
                      <li>Personal Statement and Essay Review</li>
                      <li>Following up Preparation</li>
                      <li>Interview Preparation</li>
                      <li>Final QnA</li>
                      <li>Final Feedback</li>
                      <li>Essay Review (Study Plan dan Personal Statement)</li>
                    </ul>
                    "
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-prescription"
                title="GKS Mentoring and TOPIK Preparation"
                desc="<ul>
                      <li>Kelas Private Intensif TOPIK</li>
                      <li>Mentoring session 4x (1on1 Mentor)</li>
                      <li>GKS Application Guide and Tips</li>
                      <li>Consultation for Mentee’s Uni and Track</li>
                      <li>Personal Statement Preparation</li>
                      <li>Choosing Universities and Track</li>
                      <li>Filling Application Form</li>
                      <li>Essay Quick Check</li>
                      <li>Personal Statement and Essay Review</li>
                      <li>Following up Preparation</li>
                      <li>Interview Preparation</li>
                      <li>Final QnA</li>
                      <li>Final Feedback</li>
                      <li>Essay Review (Study Plan dan Personal Statement)</li>
                    </ul>
                    "
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-prescription"
                title="GKS Mentoring and Preparation Group"
                desc="<ul>
                      <li>Kelas Private Intensif TOPIK</li>
                      <li>Mentoring session 4x (1on1 Mentor)</li>
                      <li>GKS Application Guide and Tips</li>
                      <li>Consultation for Mentee’s Uni and Track</li>
                      <li>Personal Statement Preparation</li>
                      <li>Choosing Universities and Track</li>
                      <li>Filling Application Form</li>
                      <li>Essay Quick Check</li>
                      <li>Personal Statement and Essay Review</li>
                      <li>Following up Preparation</li>
                      <li>Interview Preparation</li>
                      <li>Final QnA</li>
                      <li>Final Feedback</li>
                      <li>Essay Review (Study Plan dan Personal Statement)</li>
                    </ul>
                    "
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-prescription"
                title="GKS Private Mentoring Preparation"
                desc="<ul>
                      <li>Mentoring session 4x (1on1 Mentor)</li>
                      <li>GKS Application Guide and Tips</li>
                      <li>Consultation for Mentee’s Uni and Track</li>
                      <li>Personal Statement Preparation</li>
                      <li>Choosing Universities and Track</li>
                      <li>Filling Application Form</li>
                      <li>Essay Quick Check</li>
                      <li>Personal Statement and Essay Review</li>
                      <li>Following up Preparation</li>
                      <li>Interview Preparation</li>
                      <li>Final QnA</li>
                      <li>Final Feedback</li>
                    </ul>
                    "
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-prescription"
                title="GKS Group Mentoring Preparation"
                desc="<ul>
                      <li>GKS Form</li>
                      <li>Application Guidebook</li>
                      <li>University Tips</li>
                      <li>Application Date, Etc</li>
                      <li>Tips and Guide for Personal Statement</li>
                      <li>Tips and Guide for Study Plan</li>
                      <li>Mock Interview</li>
                      <li>Document preparation detail</li>
                    </ul>
                    "
              />
            </div>
          </div>
        </div>
      </section>

      <Clients />

      {/* <Appoinment /> */}
    </>
  );
}
