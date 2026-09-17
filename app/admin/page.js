import Link from 'next/link';
import { products, categories } from '../../lib/catalog';

export const metadata = { title: 'Backoffice — FabNiche', robots: { index: false, follow: false } };

export default function AdminDashboard() {
  const sansPrix = products.filter((p) => !p.price).length;

  return (
    <div className="admin">
      <h1>Backoffice FabNiche</h1>
      <p className="admin-note">Accès direct par URL — aucun lien depuis le site public.</p>
      <nav className="admin-nav">
        <Link href="/admin">Tableau de bord</Link>
        <Link href="/admin/orders">Commandes</Link>
        <Link href="/">Voir le site</Link>
      </nav>

      <div className="stat-row">
        <div className="stat"><b>{products.length}</b><span>Produits au catalogue</span></div>
        <div className="stat"><b>{categories.length}</b><span>Catégories</span></div>
        <div className="stat"><b>{sansPrix}</b><span>Produits sans prix</span></div>
        <div className="stat"><b>0</b><span>Commandes réelles</span></div>
      </div>

      <h3>À brancher, dans l&apos;ordre</h3>
      <ol>
        <li>Prix de vente sur les {sansPrix} produits sans tarif (absents de la source Drive)</li>
        <li>Base de données Postgres (produits, commandes, clients) à la place du fichier statique</li>
        <li>Authentification sur /admin — actuellement accessible à quiconque connaît l&apos;URL</li>
        <li>Paiement Stripe (checkout + webhooks)</li>
        <li>Clés API fournisseurs en variables d&apos;environnement Vercel</li>
      </ol>
    </div>
  );
}
