import Link from 'next/link';
import ProductCard from '../ProductCard';
import { products, categories } from '../../lib/catalog';

export const metadata = { title: 'All products — FabNiche' };

export default function AllProducts() {
  return (
    <div className="wrap">
      <p className="breadcrumb"><Link href="/">Home</Link> / All products</p>
      <div className="section-head">
        <h2>All products ({products.length})</h2>
      </div>
      <div className="chips">
        {categories.map((c) => (
          <Link key={c.slug} href={`/category/${c.slug}`} className="chip">{c.name}</Link>
        ))}
      </div>
      <div className="products">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
