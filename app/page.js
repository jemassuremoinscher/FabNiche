import Link from 'next/link';
import PromoBanner from './PromoBanner';
import Item from './Item';
import { categories, productsByCategory, countByCategory } from '../lib/catalog';

export default function Home() {
  return (
    <>
      <PromoBanner />

      <div className="shell">
        <div className="depts">
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="dept">
              <h3>{c.name}</h3>
              <p>{c.lede}</p>
              <span className="dept-count">{countByCategory(c.slug)} products</span>
            </Link>
          ))}
        </div>

        {categories.map((c) => (
          <section key={c.slug} className="rail">
            <div className="rail-head">
              <h2>{c.name}</h2>
              <Link href={`/category/${c.slug}`}>See all {countByCategory(c.slug)}</Link>
            </div>
            <div className="grid">
              {productsByCategory(c.slug).slice(0, 5).map((p) => (
                <Item key={p.slug} product={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
