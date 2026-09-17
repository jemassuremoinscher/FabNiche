import { placeSupplierOrder, SUPPLIERS } from '../../../lib/suppliers';

// Commandes de démonstration — à remplacer par la vraie table "commandes" en base de données.
const commandesDemo = [
  { id: 101, client: 'Client démo A', produit: 'Produit démo 1', fournisseur: SUPPLIERS.CJ_DROPSHIPPING },
  { id: 102, client: 'Client démo B', produit: 'Produit démo 2', fournisseur: SUPPLIERS.BIGBUY },
];

export default async function Commandes() {
  const resultats = await Promise.all(
    commandesDemo.map(async (c) => ({
      ...c,
      resultat: await placeSupplierOrder(c.fournisseur, c),
    }))
  );

  return (
    <section className="section">
      <h1>Commandes</h1>
      <p>
        Chaque commande tente l'API fournisseur ; si elle échoue (ou si aucun compte n'est
        encore configuré), elle bascule automatiquement en statut « à traiter manuellement ».
      </p>
      <table>
        <thead>
          <tr><th>ID</th><th>Client</th><th>Produit</th><th>Fournisseur</th><th>Statut</th></tr>
        </thead>
        <tbody>
          {resultats.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.client}</td>
              <td>{r.produit}</td>
              <td>{r.fournisseur}</td>
              <td>
                <span className={`badge ${r.resultat.status === 'auto' ? 'auto' : 'manuel'}`}>
                  {r.resultat.status === 'auto' ? 'Automatique' : 'Manuel'}
                </span>
                {r.resultat.raison && (
                  <div style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.3rem' }}>{r.resultat.raison}</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
