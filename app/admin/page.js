import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <section className="section">
      <h1>Backoffice FabNiche</h1>
      <nav className="admin-nav">
        <Link href="/admin">Tableau de bord</Link>
        <Link href="/admin/commandes">Commandes</Link>
      </nav>
      <p style={{ marginTop: '1.5rem' }}>
        Squelette du backoffice. Prochaines briques à brancher : base de données (Postgres),
        authentification admin, paiement (Stripe), et vraies clés API fournisseur.
      </p>
    </section>
  );
}
