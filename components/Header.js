'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const LOCALES = ['ro','en','de','fr','es','it'];

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (l) => {
    const parts = pathname.split('/');
    parts[1] = l;
    return parts.join('/');
  };

  const links = [
    { href: `/${locale}`,                    label: 'Acasă' },
    { href: `/${locale}/tamplarie-pvc`,      label: 'Tâmplărie PVC' },
    { href: `/${locale}/tamplarie-aluminiu`, label: 'Tâmplărie Aluminiu' },
    { href: `/${locale}/accesorii`,          label: 'Accesorii' },
    { href: `/${locale}/servicii`,           label: 'Servicii' },
    { href: `/${locale}/despre`,             label: 'Despre' },
    { href: `/${locale}/contact`,            label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo */}
        <Link href={`/${locale}`} className="site-logo">
          <span className="logo-main">NEOFORT</span>
          <span className="logo-sub">Tâmplărie PVC · Aluminiu</span>
        </Link>

        {/* Desktop nav */}
        <nav className="site-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="site-nav-link">
              {l.label}
            </Link>
          ))}
          <div className="nav-langs">
            {LOCALES.map(l => (
              <a key={l} href={switchLocale(l)}
                className={`nav-lang ${locale === l ? 'active' : ''}`}>
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </nav>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="mobile-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="mobile-langs">
            {LOCALES.map(l => (
              <a key={l} href={switchLocale(l)} className={`nav-lang ${locale === l ? 'active' : ''}`}>
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
