import Link from "next/link";

export default function About() {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-footer">
        <h2>About Us</h2>
        <p>
          Kkuljaem Edu adalah lembaga konsultasi studi ke Korea Selatan yang
          didirikan oleh Han Jongdae (Bandung Oppa) di tahun 2022.
        </p>

        <ul className="social">
          <li>
            <Link href="https://www.instagram.com/kkuljaem_edu/">
              <i className="icofont-instagram"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@kkuljaemkorean7823">
              <i className="icofont-youtube"></i>
            </Link>
          </li>
          <li>
            <Link href="https://x.com/kkuljaemkorean">
              <i className="icofont-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/kkuljaemedu/">
              <i className="icofont-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link href="https://api.whatsapp.com/send/?phone=6287818140362&text&app_absent=0">
              <i className="icofont-whatsapp"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
