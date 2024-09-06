'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import Sliders from './Sliders';
import Header from '@/components/Header/Header';
import Preloader from '@/components/Preloader';
import portofolioData from '@/utils/portofolio.json';
import { useParams } from 'next/navigation';

export default function PortfolioDetails() {
  const [portfolio, setPortfolio] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchPortfolioDetails = () => {
      try {
        const portfolioItem = portofolioData.find((item) => item.id === parseInt(id));
        setPortfolio(portfolioItem);
        console.log('Fetched Portfolio:', portfolioItem);
      } catch (error) {
        console.error('Error fetching portfolio details:', error);
      }
    };

    if (id) {
      fetchPortfolioDetails();
    }
  }, [id]);

  if (!portfolio) {
    return <Preloader />;
  }

  const breadcrumbItems = [
    { href: '/', text: 'Home' },
    { href: '/portfolio-details', text: 'Event Details' },
  ];

  return (
    <>
      <Preloader />
      <Header />

      <Breadcrumbs title="Event Details" breadcrumbItems={breadcrumbItems} />

      <section className="pf-details section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-content">
                <div className="body-text">
                  <h3
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {portfolio.title}
                  </h3>
                </div>
                <br />
                <br />
                <div className="image-slider">
                  <Sliders sliders={portfolio.sliders} />
                </div>
                <div className="date">
                  <ul>
                    <li>
                      <span>Category :</span> {portfolio.category}
                    </li>
                    <li>
                      <span>Date :</span> {portfolio.date}
                    </li>
                    <li>
                      <span>Partner :</span> {portfolio.partner}
                    </li>
                    <li>
                      <span>Location :</span> {portfolio.location}
                    </li>
                  </ul>
                </div>
                <div className="body-text">
                  {portfolio.description?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <div className="share">
                    <h4>Share Now -</h4>
                    <ul>
                      {portfolio.socialLinks?.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href}>
                            <i className={`fa ${link.iconClass}`} aria-hidden="true"></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
