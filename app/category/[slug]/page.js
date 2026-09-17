import Link from 'next/link';
import { notFound } from 'next/navigation';
import Item from '../../Item';
import { categories, getCategory, productsByCategory, subcategoriesOf } from '../../../lib/catalog';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCategory(params.slug);
  return c ? { title: c.name, description: c.lede } : {};
}

const anchor = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function CategoryPage({ params }) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const items = productsByCategory(category.slug);
  const subs = subcategoriesOf(category.slug);

  return (
    <>
      <div className="cat-hero" style={{ '--tone': category.tone }}>
        <div className="shell">
          <h1>{category.name}</h1>
          <p>{category.lede}</p>
        </div>
      </div>

      <div className="shell">
        <p className="crumbs"><Link href="/">Home</Link> / {category.name} / {items.length} products</p>

        <nav className="sub-jump" aria-label="Within this department">
          {subs.map((s) => (
            <a key={s} href={`#${anchor(s)}`}>{s}</a>
          ))}
        </nav>

        {subs.map((sub) => (
          <section key={sub} id={anchor(sub)} className="sub-block">
            <h2>{sub}</h2>
            <div className="grid">
              {items.filter((p) => p.sub === sub).map((p) => (
                <Item key={p.slug} product={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
