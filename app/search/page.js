import Link from 'next/link';
import Item from '../Item';
import { searchProducts } from '../../lib/catalog';

export const metadata = { title: 'Search' };

export default function SearchPage({ searchParams }) {
  const q = (searchParams?.q || '').trim();
  const results = searchProducts(q);

  return (
    <div className="shell">
      <p className="crumbs"><Link href="/">Home</Link> / Search</p>
      <div className="page-head">
        <h1>{q ? `“${q}”` : 'Search'}</h1>
        <p>{q ? `${results.length} matching products` : 'Type a product or a department above.'}</p>
      </div>

      {q && results.length === 0 ? (
        <div className="nothing">
          Nothing matches that. Try a broader word, or browse{' '}
          <Link href="/products">everything</Link>.
        </div>
      ) : (
        <div className="grid">
          {results.map((p) => (
            <Item key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
