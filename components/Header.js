'use client';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '../i18n/navigation';

const LOCALES = ['ro','en','de','fr','es','it'];

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cu pathnames în next-intl, Link folosește pathname intern
  // și generează automat URL-ul tradus per limbă
  const links = [
    { href: '/',                   label: t('home') },
    { href: '/tamplarie-pvc',      label: t('pvc') },
    { href: '/tamplarie-aluminiu', label: t('aluminiu') },
    { href: '/accesorii',          label: t('accesorii') },
    { href: '/servicii',           label: t('servicii') },
    { href: '/despre',             label: t('despre') },
    { href: '/blog',               label: t('blog') },
    { href: '/contact',            label: t('contact') },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-logo">
          <img src="/Neofort.avif" alt="Neofort BIZ — Tâmplărie PVC Salamander și Aluminiu Alumil București" className="site-logo-img"/>
          <span style={{position:'absolute',width:'1px',height:'1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap'}}>Neofort BIZ</span>
        </Link>

        <nav className="site-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="site-nav-link">{l.label}</Link>
          ))}
          <div className="nav-langs">
            {LOCALES.map(l => (
              <Link
                key={l}
                href={pathname}
                locale={l}
                className={`nav-lang ${locale === l ? 'active' : ''}`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>

      {open && (
        <nav className="mobile-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="mobile-langs">
            {LOCALES.map(l => (
              <Link key={l} href={pathname} locale={l} className={`nav-lang ${locale === l ? 'active' : ''}`}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
