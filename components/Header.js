'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

const LOCALES = ['ro','en','de','fr','es','it'];

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (l) => {
    const parts = pathname.split('/');
    parts[1] = l;
    return parts.join('/');
  };

  const links = [
    { href: `/${locale}`,                    label: t('home') },
    { href: `/${locale}/tamplarie-pvc`,      label: t('pvc') },
    { href: `/${locale}/tamplarie-aluminiu`, label: t('aluminiu') },
    { href: `/${locale}/accesorii`,          label: t('accesorii') },
    { href: `/${locale}/servicii`,           label: t('servicii') },
    { href: `/${locale}/despre`,             label: t('despre') },
    { href: `/${locale}/blog`,               label: t('blog') },
    { href: `/${locale}/contact`,            label: t('contact') },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo */}
        <Link href={`/${locale}`} className="site-logo">
          <img src="/Neofort.avif" alt="Neofort BIZ — Tâmplărie PVC Salamander și Aluminiu Alumil București" className="site-logo-img"/>
          <span style={{position:'absolute',width:'1px',height:'1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap'}}>Neofort BIZ — Tâmplărie PVC Salamander și Aluminiu Alumil</span>
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
