import Link from "next/link";

export default function Newsletter() {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-footer">
        <h2>Join Our Community</h2>
        <p>
          Dapatkan Informasi, panduan, kegiatan terupdate dan teman berjuang
          untuk kuliah di Korea Selatan
        </p>
        {/* <form action="mail/mail.php" method="get" className="newsletter-inner">
          <input
            name="email"
            placeholder="Email Address"
            className="common-input"
            // onfocus="this.placeholder = ''"
            // onblur="this.placeholder = 'Your email address'"
            required=""
            type="email"
          /> */}
        <button
          className="btn"
          style={{ marginTop: 20, backgroundColor: "white" }}
        >
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=6287818140362&text&app_absent=0"
            }
            style={{ color: "var(--primary-color)" }}
          >
            Click Here
          </Link>
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}
