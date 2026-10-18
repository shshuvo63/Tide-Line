import { useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';

const links = [['Trips', '#trips'], ['Services', '#services'], ['How it works', '#process'], ['Offers', '#offers'], ['FAQ', '#faq'], ['Contact', '#contact']];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <nav aria-label="Main">
      <div className="wrap">
        <a className="logo" href="#top">Tideline</a>
        <ul id="nav-links" className={open ? 'open' : ''}>
          {links.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a className="btn" href="#contact">Plan my trip</a>
          <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="nav-links"
            aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
