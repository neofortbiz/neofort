'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

const LOCALES = ['ro','en','de','fr','es','it'];

// Slug-uri traduse per limbă — identice cu SLUG_MAP din next.config.js
const SLUGS = {
  ro: { pvc:'tamplarie-pvc', aluminiu:'tamplarie-aluminiu', accesorii:'accesorii', servicii:'servicii', despre:'despre', contact:'contact', gdpr:'gdpr' },
  en: { pvc:'pvc-windows', aluminiu:'aluminium-windows', accesorii:'accessories', servicii:'services', despre:'about', contact:'contact', gdpr:'privacy-policy' },
  de: { pvc:'kunststofffenster-pvc', aluminiu:'aluminiumfenster', accesorii:'zubehoer', servicii:'dienstleistungen', despre:'ueber-uns', contact:'kontakt', gdpr:'datenschutz' },
  fr: { pvc:'menuiserie-pvc', aluminiu:'menuiserie-aluminium', accesorii:'accessoires', servicii:'services', despre:'a-propos', contact:'contact', gdpr:'politique-confidentialite' },
  es: { pvc:'carpinteria-pvc', aluminiu:'carpinteria-aluminio', accesorii:'accesorios', servicii:'servicios', despre:'sobre-nosotros', contact:'contacto', gdpr:'politica-privacidad' },
  it: { pvc:'infissi-pvc', aluminiu:'infissi-alluminio', accesorii:'accessori', servicii:'servizi', despre:'chi-siamo', contact:'contatti', gdpr:'informativa-privacy' },
};

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const s = SLUGS[locale] || SLUGS.ro;

  const switchLocale = (l) => {
    const parts = pathname.split('/');
    parts[1] = l;
    // Înlocuiește slug-ul curent cu echivalentul din noua limbă
    if (parts[2]) {
      const currentSlug = parts[2];
      const currentSlugs = SLUGS[locale] || SLUGS.ro;
      const newSlugs = SLUGS[l] || SLUGS.ro;
      const key = Object.keys(currentSlugs).find(k => currentSlugs[k] === currentSlug);
      if (key && newSlugs[key]) parts[2] = newSlugs[key];
    }
    return parts.join('/');
  };

  const links = [
    { href: `/${locale}`,              label: t('home') },
    { href: `/${locale}/${s.pvc}`,     label: t('pvc') },
    { href: `/${locale}/${s.aluminiu}`,label: t('aluminiu') },
    { href: `/${locale}/${s.accesorii}`,label: t('accesorii') },
    { href: `/${locale}/${s.servicii}`,label: t('servicii') },
    { href: `/${locale}/${s.despre}`,  label: t('despre') },
    { href: `/${locale}/blog`,         label: t('blog') },
    { href: `/${locale}/${s.contact}`, label: t('contact') },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href={`/${locale}`} className="site-logo">
          <img src="/Neofort.avif" alt="Neofort BIZ — Tâmplărie PVC Salamander și Aluminiu Alumil București" className="site-logo-img"/>
          <span style={{position:'absolute',width:'1px',height:'1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap'}}>Neofort BIZ — Tâmplărie PVC Salamander și Aluminiu Alumil</span>
        </Link>
        <nav className="site-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="site-nav-link">{l.label}</Link>
          ))}
          <div className="nav-langs">
            {LOCALES.map(l => (
              <a key={l} href={switchLocale(l)} className={`nav-lang ${locale === l ? 'active' : ''}`}>
                {l.toUpperCase()}
              </a>
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
            <Link key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <div className="mobile-langs">
            {LOCALES.map(l => (
              <a key={l} href={switchLocale(l)} className={`nav-lang ${locale === l ? 'active' : ''}`}>{l.toUpperCase()}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
