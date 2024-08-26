'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header/Header';
import Preloader from '@/components/Preloader';
import newsData from '@/utils/news.json';
import Link from 'next/link';

export default function NewsDetails() {
  const [news, setNews] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchNewsDetails = () => {
      try {
        const newsItem = newsData.find((item) => item.id === parseInt(id));
        setNews(newsItem);
      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    };

    if (id) {
      fetchNewsDetails();
    }
  }, [id]);

  if (!news) {
    return <div>No News Found</div>;
  }

  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumbs title="News Details" breadcrumbItems={[{ href: '/', text: 'Home' }, { href: '/news', text: 'News' }, { text: 'News Details' }]} />

      <section className="news-single section">
        <div className="container">
          <div className="single-main">
            <div className="news-head">
              <Image src={news.image} alt={news.title} width={557} height={373} />
            </div>

            <h1 className="news-title">{news.title}</h1>

            <div className="meta">
              <div className="meta-left">
                <span className="author">
                  <Image src={news.author_image} alt="author" width={455} height={455} />
                  {news.author}
                </span>
                <span className="date">
                  <i className="fa fa-clock-o"></i>
                  {news.date}
                </span>
              </div>
            </div>

            <div className="news-text">
              <p>{news.desc}</p>
              <div className="image-gallery">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-image">
                      <Image src={news.sub_image} alt="Sub Image 1" width={557} height={373} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-image">
                      <Image src={news.sub_image2} alt="Sub Image 2" width={557} height={373} />
                    </div>
                  </div>
                </div>
              </div>
              <blockquote className="overlay" style={{ fontStyle: 'italic' }}>
                <p>{news.quote}</p>
              </blockquote>
              <p>{news.desc2}</p>
            </div>
            <div className="blog-bottom">
              <ul className="social-share">
                <li className="facebook">
                  <Link href="#">
                    <i className="fa fa-facebook"></i>
                    <span>Facebook</span>
                  </Link>
                </li>
                <li className="twitter">
                  <Link href="#">
                    <i className="fa fa-twitter"></i>
                    <span>Twitter</span>
                  </Link>
                </li>
                <li className="google-plus">
                  <Link href="#">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </li>
                <li className="linkedin">
                  <Link href="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
                <li className="pinterest">
                  <Link href="#">
                    <i className="fa fa-pinterest"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
