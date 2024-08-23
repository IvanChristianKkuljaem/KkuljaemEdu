import Image from "next/image";
import Link from "next/link";

// import BlogImg1 from "../../../public/img/blog-sidebar1.jpg";
// import BlogImg2 from "../../../public/img/blog-sidebar2.jpg";
// import BlogImg3 from "../../../public/img/blog-sidebar3.jpg";
import BlogImg1 from "../../../public/img/event/beasiswa.jpg";
import BlogImg2 from "../../../public/img/blog/Blog2.jpg";
import BlogImg3 from "../../../public/img/event/istilah.jpg";

export default function BlogSidebar() {
  return (
    <>
      <div className="main-sidebar">
        <div className="single-widget search">
          <div className="form">
            <input type="email" placeholder="Search Here..." />
            <Link className="button" href="#">
              <i className="fa fa-search"></i>
            </Link>
          </div>
        </div>

        <div className="single-widget category">
          <h3 className="title">Blog Categories</h3>
          <ul className="categor-list">
            <li>
              <Link href="#">Beasiswa Korea</Link>
            </li>
            <li>
              <Link href="#">Study Abroad</Link>
            </li>
            <li>
              <Link href="#">Seminar Offline</Link>
            </li>
            <li>
              <Link href="#">Webinar</Link>
            </li>
            <li>
              <Link href="#">Consultation</Link>
            </li>
          </ul>
        </div>

        <div className="single-widget recent-post">
          <h3 className="title">Recent post</h3>

          <div className="single-post">
            <div className="image">
              <Image src={BlogImg1} alt="#" width={200} height={200} />
            </div>
            <div className="content">
              <h5>
                <Link href="#">Pengumuman Beasiswa KGSP Graduate 2024</Link>
              </h5>
              <ul className="comment">
                <li>
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  22 Aug, 2024
                </li>
                {/* <li>
                  <i className="fa fa-commenting-o" aria-hidden="true"></i>
                  35
                </li> */}
              </ul>
            </div>
          </div>

          <div className="single-post">
            <div className="image">
              <Image src={BlogImg2} alt="#" width={200} height={200} />
            </div>
            <div className="content">
              <h5>
                <Link href="#">
                  Kuliah jurusan seni di Korea selatan dengan beasiswa KARTS
                  2024
                </Link>
              </h5>
              <ul className="comment">
                <li>
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  15 Jul, 2024
                </li>
                {/* <li>
                  <i className="fa fa-commenting-o" aria-hidden="true"></i>
                  59
                </li> */}
              </ul>
            </div>
          </div>

          <div className="single-post">
            <div className="image">
              <Image src={BlogImg3} alt="#" width={200} height={200} />
            </div>
            <div className="content">
              <h5>
                <Link href="#">
                  50+ Istilah Ini Dapat Mempercepat Persiapan Berkas Pendaftaran
                  Beasiswa Kamu
                </Link>
              </h5>
              <ul className="comment">
                <li>
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  05 Jan, 2024
                </li>
                {/* <li>
                  <i className="fa fa-commenting-o" aria-hidden="true"></i>
                  44
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="single-widget side-tags">
          <h3 className="title">Tags</h3>
          <ul className="tag">
            <li>
              <Link href="#">kkuljaem</Link>
            </li>
            <li>
              <Link href="#">education</Link>
            </li>
            <li>
              <Link href="#">beasiswa</Link>
            </li>
            <li>
              <Link href="#">korea</Link>
            </li>
            <li>
              <Link href="#">mentoring</Link>
            </li>
            <li>
              <Link href="#">kuliah</Link>
            </li>
            <li>
              <Link href="#">belajar</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
