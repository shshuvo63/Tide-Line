import { useEffect, useState } from 'react';
import { HERO_SLIDES, HERO_WIDTHS } from '../data/destinationImages.js';

const INTERVAL = 5000;
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Arrow = ({ dir }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
  </svg>
);

export default function HeroCarousel() {
  const [failed, setFailed] = useState([]);           // slides whose image could not load are skipped
  const slides = HERO_SLIDES.filter((s) => !failed.includes(s.id));
  const n = slides.length;
  const [index, setIndex] = useState(0);
  const [visited, setVisited] = useState([HERO_SLIDES[0].id]);
  const [canAutoplay] = useState(() => !prefersReducedMotion());
  const [playing, setPlaying] = useState(canAutoplay);
  const [held, setHeld] = useState(false);            // pointer or keyboard focus on the controls

  const active = n ? index % n : 0;
  const go = (step) => setIndex((i) => (i + step + n) % n);

  // Only fetch a slide once it is current, next, or already shown
  useEffect(() => {
    const id = slides[active]?.id;
    if (id) setVisited((v) => (v.includes(id) ? v : [...v, id]));
  }, [active, n]); // eslint-disable-line react-hooks/exhaustive-deps

  // Re-armed after every change, so manual navigation restarts the 5s timer
  useEffect(() => {
    if (!playing || held || n < 2) return undefined;
    const timer = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(timer);
  }, [playing, held, index, n]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!n) return null;

  const hold = {
    onMouseEnter: () => setHeld(true), onMouseLeave: () => setHeld(false),
    onFocus: () => setHeld(true), onBlur: () => setHeld(false),
  };
  const nextId = slides[(active + 1) % n].id;

  return (
    <div className="hero-carousel" role="region" aria-roledescription="carousel" aria-label="Featured destinations">
      <div className="hero-slides">
        {slides.map((s, i) => {
          const isActive = i === active;
          const render = visited.includes(s.id) || s.id === nextId;
          return (
            <div key={s.id} className={`hero-slide${isActive ? ' is-active' : ''}`} style={{ '--origin': s.origin }}
              role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${n}: ${s.label}`} aria-hidden={!isActive}>
              {render && (
                <img
                  src={s.url(1920)}
                  srcSet={HERO_WIDTHS.map((w) => `${s.url(w)} ${w}w`).join(', ')}
                  sizes="100vw"
                  alt={isActive ? s.alt : ''}
                  width="1920" height="1080"
                  style={{ objectPosition: s.position }}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchpriority={i === 0 ? 'high' : 'auto'}
                  decoding="async"
                  onError={() => setFailed((f) => [...f, s.id])}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="hero-overlay" />

      {n > 1 && (
        <>
          <button type="button" className="hero-arrow prev" aria-label="Previous slide" onClick={() => go(-1)} {...hold}><Arrow dir="prev" /></button>
          <button type="button" className="hero-arrow next" aria-label="Next slide" onClick={() => go(1)} {...hold}><Arrow dir="next" /></button>
        </>
      )}

      <div className="hero-controls" {...hold}>
        <p className="hero-label">{slides[active].label}</p>
        {n > 1 && (
          <div className="hero-bar">
            <div className="hero-dots">
              {slides.map((s, i) => (
                <button key={s.id} type="button" className={i === active ? 'active' : ''}
                  aria-label={`Show ${s.label}`} aria-current={i === active ? 'true' : undefined} onClick={() => setIndex(i)} />
              ))}
            </div>
            {canAutoplay && (
              <button type="button" className="hero-pause" aria-label={playing ? 'Pause slideshow' : 'Play slideshow'} onClick={() => setPlaying((p) => !p)}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  {playing ? <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /> : <path d="M8 5l11 7-11 7z" />}
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
