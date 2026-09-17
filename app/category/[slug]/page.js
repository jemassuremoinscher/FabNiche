import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '../../ProductCard';
import { categories, getCategory, productsByCategory, subcategoriesOf } from '../../../lib/catalog';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCategory(params.slug);
  return c ? { title: c.name, description: c.lede } : {};
}

const SORTS = [
  { key: 'featured', label: 'Featured' },
  { key: 'price-asc', label: 'Price: low to high' },
  { key: 'price-desc', label: 'Price: high to low' },
  { key: 'name', label: 'A–Z' },
];

function sortItems(items, key) {
  const copy = [...items];
  if (key === 'name') return copy.sort((a, b) => a.name.localeCompare(b.name));
  if (key === 'price-asc') return copy.sort((a, b) => (a.price ?? 1e9) - (b.price ?? 1e9));
  if (key === 'price-desc') return copy.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
  return copy;
}

export default function CategoryPage({ params, searchParams }) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const all = productsByCategory(category.slug);
  const subs = subcategoriesOf(category.slug);

  const activeSub = searchParams?.sub || null;
  const priced = searchParams?.priced === '1';
  const sort = searchParams?.sort || 'featured';

  let items = all;
  if (activeSub) items = items.filter((p) => p.sub === activeSub);
  if (priced) items = items.filter((p) => p.price);
  items = sortItems(items, sort);

  const base = `/category/${category.slug}`;
  const link = (over) => {
    const q = new URLSearchParams();
    const sub = 'sub' in over ? over.sub : activeSub;
    const pr = 'priced' in over ? over.priced : priced;
    const so = 'sort' in over ? over.sort : sort;
    if (sub) q.set('sub', sub);
    if (pr) q.set('priced', '1');
    if (so && so !== 'featured') q.set('sort', so);
    const s = q.toString();
    return s ? `${base}?${s}` : base;
  };

  return (
    <>
      <div className="cathead">
        <div className="max">
          <h1>{category.name}</h1>
          <p>{category.lede}</p>
        </div>
      </div>

      <div className="max">
        <p className="crumb">
          <Link href="/">Home</Link> › <Link href="/products">All departments</Link> › {category.name}
          {activeSub ? ` › ${activeSub}` : ''}
        </p>

        <div className="cat">
          <aside className="facets" aria-label="Filters">
            <div className="facet">
              <h3>Category</h3>
              <Link href={link({ sub: null })} className={!activeSub ? 'on' : ''}>
                All {category.name} <i>{all.length}</i>
              </Link>
              {subs.map((s) => (
                <Link key={s} href={link({ sub: s })} className={activeSub === s ? 'on' : ''}>
                  {s} <i>{all.filter((p) => p.sub === s).length}</i>
                </Link>
              ))}
            </div>

            <div className="facet">
              <h3>Availability</h3>
              <Link href={link({ priced: !priced })} className={priced ? 'on' : ''}>
                Buyable now <i>{all.filter((p) => p.price).length}</i>
              </Link>
            </div>

            <div className="facet">
              <h3>Other departments</h3>
              {categories
                .filter((c) => c.slug !== category.slug)
                .map((c) => (
                  <Link key={c.slug} href={`/category/${c.slug}`}>{c.name}</Link>
                ))}
            </div>
          </aside>

          <div>
            <div className="toolbar">
              <span className="count">
                {items.length} {items.length === 1 ? 'product' : 'products'}
                {activeSub ? ` in ${activeSub}` : ''}
              </span>
              <div className="sorts">
                <span>Sort</span>
                {SORTS.map((s) => (
                  <Link key={s.key} href={link({ sort: s.key })} className={sort === s.key ? 'on' : ''}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {items.length === 0 ? (
              <div className="blank">
                No products match these filters. <Link href={base}>Clear filters</Link>
              </div>
            ) : (
              <div className="pgrid">
                {items.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
