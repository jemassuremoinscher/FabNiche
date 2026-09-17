import Link from 'next/link';
import Carousel from './Carousel';
import ProductCard from './ProductCard';
import { categories, productsByCategory, countByCategory } from '../lib/catalog';

export default function Home() {
  return (
    <>
      <Carousel />

      <div className="trust">
        <div><b>Free delivery over AED 200</b><span>Across the UAE</span></div>
        <div><b>14-day returns</b><span>On unopened items</span></div>
        <div><b>Secure checkout</b><span>Card and Apple Pay</span></div>
        <div><b>Support 9am–6pm</b><span>Sunday to Thursday</span></div>
      </div>

      <div className="max">
        <div className="deptgrid">
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="deptcard">
              <h3>{c.name}</h3>
              <p>{c.lede}</p>
              <em>Shop {countByCategory(c.slug)} products</em>
            </Link>
          ))}
        </div>

        {categories.map((c) => (
          <section key={c.slug} className="band">
            <div className="band-hd">
              <h2>{c.name}</h2>
              <Link href={`/category/${c.slug}`}>See all {countByCategory(c.slug)}</Link>
            </div>
            <div className="pgrid">
              {productsByCategory(c.slug).slice(0, 6).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
