import './globals.css';
import { Baloo_2 } from 'next/font/google';

const baloo = Baloo_2({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--font-baloo' });

export const metadata = {
  title: 'FabNiche',
  description: 'FabNiche — boutique en ligne',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={baloo.variable}>
      <body>
        <header className="site-header">
          <div className="logo">FabNiche<span className="dot">.</span></div>
          <nav>
            <a href="/">Accueil</a>
            <a href="/produits">Produits</a>
            <a href="/admin">Backoffice</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} FabNiche</p>
        </footer>
      </body>
    </html>
  );
}
