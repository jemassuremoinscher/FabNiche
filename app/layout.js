import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '../lib/catalog';
import { network } from '../lib/network';

export const metadata = {
  metadataBase: new URL('https://fabniche.com'),
  title: { default: 'FabNiche — Pets, Fitness & Home', template: '%s | FabNiche' },
  description: 'Pet, fitness and home essentials delivered across the UAE.',
};

function Icon({ d }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="strip">
          <div className="strip-in">
            <span>Deliver to United Arab Emirates</span>
            <div className="strip-right">
              <span>Track your order</span>
              <span>Help</span>
              <span>English · AED</span>
            </div>
          </div>
        </div>

        <header className="hdr">
          <div className="hdr-in">
            <Link href="/" className="logo" aria-label="FabNiche, home">
              <Image src="/logo-fabniche.png" alt="FabNiche" width={160} height={26} priority />
            </Link>

            <form className="search" action="/search" method="get" role="search">
              <input type="search" name="q" placeholder="Search for products and departments" aria-label="Search products" />
              <button type="submit">Search</button>
            </form>

            <div className="hdr-links">
              <Link href="/" className="hlink">Account</Link>
              <Link href="/" className="hlink">Orders</Link>
              <Link href="/" className="bag-btn">
                <Icon d="M6 7h12l-1 13H7L6 7Zm3 0a3 3 0 0 1 6 0" />
                Bag
                <span className="bag-count">0</span>
              </Link>
            </div>
          </div>

          <nav className="deptbar" aria-label="Departments">
            <div className="deptbar-in">
              <Link href="/products">All departments</Link>
              {categories.map((c) => (
                <Link key={c.slug} href={`/category/${c.slug}`}>{c.name}</Link>
              ))}
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="ftr">
          <div className="ftr-in">
            <div className="ftr-brand">
              <Image src="/logo-fabniche.png" alt="FabNiche" width={150} height={24} />
              <p>Pet, fitness and home essentials, delivered across the Emirates.</p>
            </div>

            <div>
              <h4>Shop</h4>
              {categories.map((c) => (
                <Link key={c.slug} href={`/category/${c.slug}`}>{c.name}</Link>
              ))}
              <Link href="/products">All products</Link>
            </div>

            <div>
              <h4>Customer service</h4>
              <ul>
                <li>Delivery information</li>
                <li>Returns &amp; refunds</li>
                <li>Track an order</li>
                <li>Contact us</li>
              </ul>
              <Link href="/about">About FabNiche</Link>
            </div>

            <div className="ftr-net">
              <h4>Also from our founders</h4>
              {network.map((s) => (
                <a key={s.domain} href={s.url} rel="noopener">
                  <b>{s.name}</b>
                  <span>{s.short}</span>
                </a>
              ))}
            </div>
          </div>
          <p className="ftr-base">© {new Date().getFullYear()} FabNiche</p>
        </footer>

        <nav className="tabbar" aria-label="Main">
          <Link href="/"><span className="pill"><Icon d="M4 11 12 4l8 7v9H4v-9Z" /></span>Home</Link>
          <Link href="/products"><span className="pill"><Icon d="M4 6h16M4 12h16M4 18h16" /></span>Shop</Link>
          <Link href="/search"><span className="pill"><Icon d="m20 20-4.5-4.5M17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" /></span>Search</Link>
          <Link href="/"><span className="pill"><Icon d="M6 7h12l-1 13H7L6 7Zm3 0a3 3 0 0 1 6 0" /></span>Bag</Link>
        </nav>
      </body>
    </html>
  );
}
