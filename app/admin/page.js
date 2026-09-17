import Link from 'next/link';
import { products, categories, archived } from '../../lib/catalog';

export const metadata = { title: 'Backoffice', robots: { index: false, follow: false } };

export default function AdminDashboard() {
  const sansPrix = products.filter((p) => !p.price).length;

  return (
    <div className="admin">
      <h1>Backoffice</h1>
      <p className="admin-note">Accès par URL uniquement — aucun lien depuis le site public.</p>

      <nav className="admin-nav">
        <Link href="/admin">Tableau de bord</Link>
        <Link href="/admin/orders">Commandes</Link>
        <Link href="/">Voir le site</Link>
      </nav>

      <div className="figures">
        <div className="figure"><b>{products.length}</b><span>Produits en ligne</span></div>
        <div className="figure"><b>{categories.length}</b><span>Départements</span></div>
        <div className="figure"><b>{archived.length}</b><span>Produits archivés</span></div>
        <div className="figure"><b>{sansPrix}</b><span>Sans prix</span></div>
        <div className="figure"><b>0</b><span>Commandes réelles</span></div>
      </div>

      <h2>Bandeau promo</h2>
      <p className="admin-note">
        Les diapos du bandeau d&apos;accueil se modifient dans <code>lib/promos.js</code> —
        une entrée par promo, rotation automatique toutes les 6 secondes.
      </p>

      <h2>Reste à faire, dans l&apos;ordre</h2>
      <ol>
        <li>Prix sur les {sansPrix} produits sans tarif</li>
        <li>Photos produits — les vignettes sont vides aujourd&apos;hui</li>
        <li>Base Postgres à la place du fichier statique</li>
        <li>Authentification sur /admin — accessible à quiconque connaît l&apos;URL</li>
        <li>Paiement Stripe</li>
        <li>Clés API fournisseurs en variables d&apos;environnement Vercel</li>
      </ol>
    </div>
  );
}
