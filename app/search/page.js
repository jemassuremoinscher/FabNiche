import Link from 'next/link';
import ProductCard from '../ProductCard';
import { searchProducts } from '../../lib/catalog';

export const metadata = { title: 'Search — FabNiche' };

export default function SearchPage({ searchParams }) {
  const q = (searchParams?.q || '').trim();
  const results = searchProducts(q);

  return (
    <div className="wrap">
      <p className="breadcrumb"><Link href="/">Home</Link> / Search</p>
      <div className="section-head">
        <h2>{q ? `Results for "${q}" (${results.length})` : 'Search'}</h2>
      </div>
      {q && results.length === 0 ? (
        <div className="empty">No product matches that search. Try a category from the top menu.</div>
      ) : (
        <div className="products">
          {results.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
