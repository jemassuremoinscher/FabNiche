import { produits } from '../../lib/products';

export default function Produits() {
  return (
    <section className="section">
      <h1>Nos produits</h1>
      <p>Catalogue de démonstration — à remplacer une fois la niche validée.</p>
      <div className="grid">
        {produits.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.nom}</h3>
            <p>{p.description}</p>
            <strong>{p.prix.toFixed(2)} €</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
