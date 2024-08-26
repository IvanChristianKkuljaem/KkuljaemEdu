import Link from 'next/link';

export default function Breadcrumbs({ title, breadcrumbItems = [] }) {
  return (
    <div className="breadcrumbs overlay">
      <div className="container">
        <div className="bread-inner">
          <div className="row">
            <div className="col-12">
              <h2>{title ? title : 'Meet Our Qualified Mentors'}</h2>
              <ul className="bread-list">
                {breadcrumbItems.map((item, index) => (
                  <li key={index}>
                    {item.href ? <Link href={item.href}>{item.text}</Link> : <span>{item.text}</span>}
                    {index < breadcrumbItems.length - 1 && <i className="icofont-simple-right"></i>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
