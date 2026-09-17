import Link from 'next/link';
import Item from '../Item';
import { products, categories } from '../../lib/catalog';

export const metadata = { title: 'Everything' };

export default function Everything() {
  return (
    <div className="shell">
      <p className="crumbs"><Link href="/">Home</Link> / Everything</p>
      <div className="page-head">
        <h1>Everything</h1>
        <p>{products.length} products across {categories.length} departments.</p>
      </div>
      <div className="grid">
        {products.map((p) => (
          <Item key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
