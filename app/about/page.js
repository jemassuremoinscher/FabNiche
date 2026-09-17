import Link from 'next/link';
import { network } from '../../lib/network';
import { products, categories } from '../../lib/catalog';

export const metadata = {
  title: 'About',
  description:
    'FabNiche is a UAE online store for pet, fitness and home essentials, run by the founders of Mammouth AI, Mayo, EFFL and J’assure moins cher.',
};

export default function About() {
  return (
    <div className="max about">
      <p className="crumb"><Link href="/">Home</Link> › About</p>

      <div className="pagehead">
        <h1>About FabNiche</h1>
      </div>

      <p className="about-lede">
        FabNiche is an online store for pets, home training and the kitchen, delivering across the
        United Arab Emirates. We keep the range deliberately short — {products.length} products
        across {categories.length} departments — because a shorter list is easier to stand behind
        than a catalogue of everything.
      </p>

      <h2>How we choose what to sell</h2>
      <p>
        Every product has to solve a specific problem rather than simply exist. We source through
        established suppliers, check the delivery window before a product goes live, and drop
        anything that does not hold up.
      </p>

      <h2>The people behind it</h2>
      <p>
        FabNiche is run by the same founders as several other independent businesses. If one of them
        is closer to what you need, go straight there.
      </p>

      <div className="sisters">
        {network.map((s) => (
          <a key={s.domain} className="sister" href={s.url} rel="noopener">
            <h3>{s.name}</h3>
            <span className="dom">{s.domain}</span>
            <p>{s.blurb}</p>
          </a>
        ))}
      </div>

      <div className="about-note">
        These are separate businesses with separate teams and separate terms. An order placed with
        FabNiche is handled by FabNiche alone.
      </div>
    </div>
  );
}
