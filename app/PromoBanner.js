'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { promos } from '../lib/promos';

const INTERVAL = 6000;

export default function PromoBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const go = useCallback((next) => {
    setIndex(((next % promos.length) + promos.length) % promos.length);
  }, []);

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || paused) return undefined;

    timer.current = setInterval(() => setIndex((i) => (i + 1) % promos.length), INTERVAL);
    return () => clearInterval(timer.current);
  }, [paused]);

  const slide = promos[index];

  return (
    <section
      className="promo"
      style={{ '--tone': slide.tone }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Current offers"
    >
      <button className="promo-arrow left" onClick={() => go(index - 1)} aria-label="Previous offer">
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path d="M11.5 3 5.5 9l6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>

      <div className="promo-stage">
        {promos.map((p, i) => (
          <div
            key={p.id}
            className={`promo-slide${i === index ? ' is-active' : ''}`}
            aria-hidden={i !== index}
          >
            <p className="promo-eyebrow">{p.eyebrow}</p>
            <h2 className="promo-headline">{p.headline}</h2>
            <p className="promo-note">{p.note}</p>
            <Link href={p.cta.href} className="promo-cta" tabIndex={i === index ? 0 : -1}>
              {p.cta.label}
            </Link>
          </div>
        ))}
      </div>

      <button className="promo-arrow right" onClick={() => go(index + 1)} aria-label="Next offer">
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path d="M6.5 3l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>

      <div className="promo-dots">
        {promos.map((p, i) => (
          <button
            key={p.id}
            className={`promo-dot${i === index ? ' is-active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Offer ${i + 1} of ${promos.length}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </section>
  );
}
