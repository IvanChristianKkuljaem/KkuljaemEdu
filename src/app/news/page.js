'use client';
import { useState } from 'react';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import BlogSidebar from '@/components/BlogSidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header/Header';
import Preloader from '@/components/Preloader';
import newsData from '@/utils/news.json';

export default function News() {
  const [news, setNews] = useState(newsData);

  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs title="News" menuText="News" />

      <section className="blog grid section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="row">
                {news.map((item) => (
                  <div key={item.id} className="col-lg-6 col-md-6 col-12">
                    <BlogCard image={item.image} date={item.date} title={item.title} desc={item.desc} />
                  </div>
                ))}
                <div className="col-12">
                  <div className="pagination">
                    <ul className="pagination-list">
                      <li>
                        <Link href="#">
                          <i className="icofont-rounded-left"></i>
                        </Link>
                      </li>
                      <li className="active">
                        <Link href="#">1</Link>
                      </li>
                      <li>
                        <Link href="#">2</Link>
                      </li>
                      <li>
                        <Link href="#">3</Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="icofont-rounded-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
