import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '../../ProductCard';
import { categories, getCategory, productsByCategory, subcategoriesOf } from '../../../lib/catalog';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCategory(params.slug);
  return { title: c ? `${c.name} — FabNiche` : 'FabNiche' };
}

export default function CategoryPage({ params }) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const items = productsByCategory(category.slug);
  const subs = subcategoriesOf(category.slug);

  return (
    <div className="wrap">
      <section className="cat-header" style={{ background: category.accent }}>
        <h1>{category.name}</h1>
        <p>{category.tagline} — {items.length} products</p>
      </section>

      <p className="breadcrumb"><Link href="/">Home</Link> / {category.name}</p>

      <div className="chips">
        {subs.map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>

      {subs.map((sub) => (
        <section key={sub}>
          <h3 className="subsection-title">{sub}</h3>
          <div className="products">
            {items
              .filter((p) => p.sub === sub)
              .map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
