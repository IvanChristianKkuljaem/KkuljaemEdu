import Link from 'next/link';

export default function Newsletter() {
  return (
    <section className="newsletter section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="subscribe-text">
              <h6>Join Our Community</h6>
              <p className="">Dapatkan Informasi, panduan, kegiatan terupdate dan teman berjuang untuk kuliah di Korea Selatan</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="subscribe-form">
              {/* <form action="../mail.php" method="get" className="newsletter-inner">
                <input name="EMAIL" placeholder="Your email address" className="common-input" required="" type="email" /> */}
              <button className="btn">
                <Link href={'https://api.whatsapp.com/send/?phone=6287818140362&text&app_absent=0'}>Click Here</Link>
              </button>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
