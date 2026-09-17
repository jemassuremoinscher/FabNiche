import Link from 'next/link';
import ProductCard from './ProductCard';
import { categories, productsByCategory, countByCategory } from '../lib/catalog';

export default function Home() {
  return (
    <div className="wrap">
      <section className="hero">
        <h1>Everything for home, fitness, tech, car and pets</h1>
        <p>
          A curated selection across seven departments — delivered across the UAE. Browse by category
          or search for exactly what you need.
        </p>
        <Link href="/products" className="hero-cta">Shop all products</Link>
      </section>

      <div className="section-head">
        <h2>Shop by category</h2>
        <Link href="/products">See everything</Link>
      </div>
      <div className="tiles">
        {categories.map((c) => (
          <Link key={c.slug} href={`/category/${c.slug}`} className="tile">
            <div className="tile-swatch" style={{ background: c.accent }} />
            <h3>{c.name}</h3>
            <p>{c.tagline}</p>
            <span className="tile-count">{countByCategory(c.slug)} products</span>
          </Link>
        ))}
      </div>

      {categories.map((c) => {
        const items = productsByCategory(c.slug).slice(0, 6);
        if (items.length === 0) return null;
        return (
          <section key={c.slug} className="stack">
            <div className="section-head">
              <h2>{c.name}</h2>
              <Link href={`/category/${c.slug}`}>View all {countByCategory(c.slug)}</Link>
            </div>
            <div className="products">
              {items.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
