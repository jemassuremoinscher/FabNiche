'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { promos } from '../lib/promos';

const INTERVAL = 5500;

export default function Carousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n) => setI(((n % promos.length) + promos.length) % promos.length), []);

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || paused) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % promos.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Offers"
    >
      <div className="carousel-track">
        {promos.map((p, n) => (
          <div
            key={p.id}
            className={`cslide${n === i ? ' on' : ''}`}
            style={{ background: p.tone }}
            aria-hidden={n !== i}
          >
            <div>
              <span className="cflag">{p.flag}</span>
              <h2>{p.headline}</h2>
              <p>{p.note}</p>
              <Link href={p.href} className="cbtn" tabIndex={n === i ? 0 : -1}>
                {p.cta}
              </Link>
            </div>
          </div>
        ))}

        <button className="carr prev" onClick={() => go(i - 1)} aria-label="Previous offer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 5-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="carr next" onClick={() => go(i + 1)} aria-label="Next offer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="cdots">
          {promos.map((p, n) => (
            <button
              key={p.id}
              className={`cdot${n === i ? ' on' : ''}`}
              onClick={() => go(n)}
              aria-label={`Offer ${n + 1} of ${promos.length}`}
              aria-current={n === i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
