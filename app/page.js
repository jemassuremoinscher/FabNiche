import Link from 'next/link';
import { produits } from '../lib/products';

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>FabNiche</h1>
        <p>La marque est en cours de repositionnement — squelette technique en place, niche produit à finaliser.</p>
        <Link href="/produits" className="btn-primary">Voir les produits</Link>
      </section>
      <section className="section">
        <h2>Sélection (démo)</h2>
        <div className="grid">
          {produits.slice(0, 3).map((p) => (
            <div className="card" key={p.id}>
              <h3>{p.nom}</h3>
              <p>{p.description}</p>
              <strong>{p.prix.toFixed(2)} €</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
