import Link from 'next/link';
import { placeSupplierOrder, SUPPLIERS, SUPPLIER_LABELS } from '../../../lib/suppliers';

export const metadata = { title: 'Commandes — FabNiche', robots: { index: false, follow: false } };

// Commandes de démonstration — à remplacer par la table "orders" en base.
const demoOrders = [
  { id: 'FN-1001', client: 'Client démo A', produit: 'Electric Can Opener', fournisseur: SUPPLIERS.CJ_DROPSHIPPING },
  { id: 'FN-1002', client: 'Client démo B', produit: 'Rhinestone Dog Collar', fournisseur: SUPPLIERS.QK_SOURCE },
];

export default async function Orders() {
  const rows = await Promise.all(
    demoOrders.map(async (o) => ({ ...o, resultat: await placeSupplierOrder(o.fournisseur, o) }))
  );

  return (
    <div className="admin">
      <h1>Commandes</h1>
      <p className="admin-note">
        Chaque commande tente l&apos;API fournisseur. Si la clé est absente ou l&apos;appel échoue,
        elle bascule en « Manuel » — à passer à la main chez le fournisseur.
      </p>
      <nav className="admin-nav">
        <Link href="/admin">Tableau de bord</Link>
        <Link href="/admin/orders">Commandes</Link>
        <Link href="/">Voir le site</Link>
      </nav>

      <table>
        <thead>
          <tr><th>Réf.</th><th>Client</th><th>Produit</th><th>Fournisseur</th><th>Statut</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.client}</td>
              <td>{r.produit}</td>
              <td>{SUPPLIER_LABELS[r.fournisseur]}</td>
              <td>
                <span className={`badge ${r.resultat.status === 'auto' ? 'auto' : 'manuel'}`}>
                  {r.resultat.status === 'auto' ? 'Automatique' : 'Manuel'}
                </span>
                {r.resultat.raison && <div className="reason">{r.resultat.raison}</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
