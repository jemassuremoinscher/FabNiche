import Link from 'next/link';
import ProductCard from '../ProductCard';
import { products, categories } from '../../lib/catalog';

export const metadata = { title: 'All departments' };

const SORTS = [
  { key: 'featured', label: 'Featured' },
  { key: 'price-asc', label: 'Price: low to high' },
  { key: 'name', label: 'A–Z' },
];

export default function AllProducts({ searchParams }) {
  const sort = searchParams?.sort || 'featured';
  let items = [...products];
  if (sort === 'name') items.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === 'price-asc') items.sort((a, b) => (a.price ?? 1e9) - (b.price ?? 1e9));

  return (
    <div className="max">
      <p className="crumb"><Link href="/">Home</Link> › All departments</p>
      <div className="pagehead">
        <h1>All departments</h1>
        <p>{products.length} products across {categories.length} departments.</p>
      </div>

      <div className="toolbar">
        <span className="count">{items.length} products</span>
        <div className="sorts">
          <span>Sort</span>
          {SORTS.map((s) => (
            <Link
              key={s.key}
              href={s.key === 'featured' ? '/products' : `/products?sort=${s.key}`}
              className={sort === s.key ? 'on' : ''}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="pgrid">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
