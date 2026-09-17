import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '../lib/catalog';

export const metadata = {
  title: 'FabNiche — Home, Fitness, Electronics, Auto, Pets',
  description: 'FabNiche online store — curated home, fitness, electronics, automotive, pet and kids products.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="utility-bar">
          <span>Deliver to United Arab Emirates</span>
          <span className="utility-sep">•</span>
          <span>Free delivery over AED 200</span>
          <span className="utility-right">English · AED</span>
        </div>

        <header className="masthead">
          <Link href="/" className="brand" aria-label="FabNiche home">
            <Image src="/logo-fabniche-white.png" alt="FabNiche" width={170} height={28} priority />
          </Link>

          <form className="searchbar" action="/search" method="get">
            <input type="text" name="q" placeholder="What are you looking for?" aria-label="Search products" />
            <button type="submit" aria-label="Search">Search</button>
          </form>

          <div className="masthead-actions">
            <Link href="/products" className="action">
              <span className="action-sub">Browse</span>
              <span className="action-main">All products</span>
            </Link>
            <Link href="/" className="action">
              <span className="action-sub">Your</span>
              <span className="action-main">Account</span>
            </Link>
            <Link href="/" className="action cart">
              <span className="action-sub">Cart</span>
              <span className="action-main">0</span>
            </Link>
          </div>
        </header>

        <nav className="catnav" aria-label="Categories">
          <Link href="/products" className="catnav-all">All categories</Link>
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`}>{c.name}</Link>
          ))}
        </nav>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="footer-cols">
            <div>
              <h4>Shop</h4>
              {categories.slice(0, 4).map((c) => (
                <Link key={c.slug} href={`/category/${c.slug}`}>{c.name}</Link>
              ))}
            </div>
            <div>
              <h4>More</h4>
              {categories.slice(4).map((c) => (
                <Link key={c.slug} href={`/category/${c.slug}`}>{c.name}</Link>
              ))}
              <Link href="/products">All products</Link>
            </div>
            <div>
              <h4>Help</h4>
              <span>Shipping &amp; delivery</span>
              <span>Returns</span>
              <span>Contact us</span>
            </div>
          </div>
          <p className="footer-legal">© {new Date().getFullYear()} FabNiche. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
