import Link from 'next/link';
import ProductCard from '../ProductCard';
import { searchProducts, categories } from '../../lib/catalog';

export const metadata = { title: 'Search' };

export default function SearchPage({ searchParams }) {
  const q = (searchParams?.q || '').trim();
  const results = searchProducts(q);

  return (
    <div className="max">
      <p className="crumb"><Link href="/">Home</Link> › Search</p>
      <div className="pagehead">
        <h1>{q ? `Results for “${q}”` : 'Search'}</h1>
        <p>
          {q
            ? `${results.length} ${results.length === 1 ? 'product' : 'products'} found`
            : 'Search by product name or department.'}
        </p>
      </div>

      {q && results.length === 0 ? (
        <div className="blank">
          <p>No products match “{q}”.</p>
          <p>
            Browse{' '}
            {categories.map((c, i) => (
              <span key={c.slug}>
                <Link href={`/category/${c.slug}`}>{c.name}</Link>
                {i < categories.length - 1 ? ', ' : ''}
              </span>
            ))}{' '}
            or <Link href="/products">all departments</Link>.
          </p>
        </div>
      ) : (
        <div className="pgrid">
          {results.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
