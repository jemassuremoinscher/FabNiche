import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '../lib/catalog';

export const metadata = {
  metadataBase: new URL('https://fabniche.com'),
  title: {
    default: 'FabNiche — Pets, Fitness, Home',
    template: '%s — FabNiche',
  },
  description:
    'A short, curated range for pets, home training and the kitchen. Delivered across the UAE.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="announce">
          <span>Free delivery across the UAE over AED 200</span>
          <span className="announce-alt">Returns within 14 days</span>
        </div>

        <header className="masthead">
          <div className="masthead-inner">
            <Link href="/" className="brand" aria-label="FabNiche, home">
              <Image src="/logo-fabniche.png" alt="FabNiche" width={148} height={24} priority />
            </Link>

            <form className="find" action="/search" method="get" role="search">
              <input type="search" name="q" placeholder="Search the range" aria-label="Search the range" />
              <button type="submit">Search</button>
            </form>

            <div className="masthead-links">
              <Link href="/products">Everything</Link>
              <Link href="/">Account</Link>
              <Link href="/" className="bag">Bag<span>0</span></Link>
            </div>
          </div>

          <nav className="departments" aria-label="Departments">
            {categories.map((c) => (
              <Link key={c.slug} href={`/category/${c.slug}`}>{c.name}</Link>
            ))}
            <Link href="/products" className="departments-all">Everything</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="foot">
          <div className="foot-inner">
            <div className="foot-brand">
              <Image src="/logo-fabniche-white.png" alt="FabNiche" width={132} height={21} />
              <p>Three departments, kept short on purpose.</p>
            </div>
            <div className="foot-col">
              <h3>Shop</h3>
              {categories.map((c) => (
                <Link key={c.slug} href={`/category/${c.slug}`}>{c.name}</Link>
              ))}
              <Link href="/products">Everything</Link>
            </div>
            <div className="foot-col">
              <h3>Help</h3>
              <span>Delivery</span>
              <span>Returns</span>
              <span>Contact</span>
            </div>
          </div>
          <p className="foot-legal">© {new Date().getFullYear()} FabNiche</p>
        </footer>
      </body>
    </html>
  );
}
