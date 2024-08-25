'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header/Header';
import Preloader from '@/components/Preloader';
import newsData from '@/utils/news.json';
import NewsSidebar from '@/components/NewsSidebar';

export default function News() {
  const [news, setNews] = useState(newsData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredNews = newsData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setNews(filteredNews);
  }, [searchTerm]);

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
                {news.length > 0 ? (
                  news.map((item) => (
                    <div key={item.id} className="col-lg-6 col-md-6 col-12">
                      <BlogCard image={item.image} date={item.date} title={item.title} desc={item.desc} />
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <p className="news-not-found" style={{ fontSize: '16px', marginTop: '70px', padding: '10px' }}>
                      No News Found
                    </p>
                  </div>
                )}
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
              <NewsSidebar setSearchTerm={setSearchTerm} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
