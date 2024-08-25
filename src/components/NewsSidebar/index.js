'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import newsData from '@/utils/news.json';

export default function NewsSidebar({ setSearchTerm }) {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setSearchTerm(search);
  };

  return (
    <div className="main-sidebar">
      <div className="single-widget search">
        <div className="form">
          <input type="text" placeholder="Search Here..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className="button" onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div className="single-widget category">
        <h3 className="title">News Categories</h3>
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
        {newsData.slice(0, 3).map((item) => (
          <div key={item.id} className="single-post">
            <div className="image">
              <Image src={item.image} alt={item.title} width={200} height={200} />
            </div>
            <div className="content">
              <h5>
                <Link href="#">{item.title}</Link>
              </h5>
              <ul className="comment">
                <li>
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  {item.date}
                </li>
              </ul>
            </div>
          </div>
        ))}
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
  );
}
