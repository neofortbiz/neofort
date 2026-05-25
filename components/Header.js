'use client';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '../i18n/navigation';

const LOCALES = ['ro','it','de','fr','es','en'];

const WA_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TEL_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

const MAIL_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const BLOG_SVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
  </svg>
);

export default function Header() {
  const locale   = useLocale();
  const t        = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/',                   label: t('home') },
    { href: '/tamplarie-pvc',      label: t('pvc') },
    { href: '/tamplarie-aluminiu', label: t('aluminiu') },
    { href: '/umbrire',            label: t('umbrire') },
    { href: '/sisteme-nzeb',       label: t('nzeb') },
    { href: '/accesorii',          label: t('accesorii') },
    { href: '/servicii',           label: t('servicii') },
    { href: '/despre',             label: t('despre') },
    { href: '/blog',               label: t('blog') },
    { href: '/contact',            label: t('contact') },
  ];

  const isActive = (href) =>
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(href + '/');

  // ── Butoane contact header ─────────────────────────────────────────────────
  const contactBtns = (
    <div className="header-contact-btns">
      <a href="tel:+40752443435" className="hdr-btn hdr-btn-tel" aria-label="Telefon">
        {TEL_SVG}
      </a>
      <a href="https://wa.me/40752443435?text=Bun%C4%83%20ziua%2C%20Neofort%20BIZ!%20Sunt%20interesat%20de%20produsele%2Fserviciile%20dvs.%20%C8%99i%20a%C8%99%20dori%20o%20ofert%C4%83.%20Mul%C8%9Bumesc!" target="_blank" rel="noopener noreferrer"
        className="hdr-btn hdr-btn-wa" aria-label="WhatsApp">
        {WA_SVG}
      </a>
      <a href="mailto:oferte@neofort-biz.ro?subject=Solicitare%20ofert%C4%83%20de%20pre%C8%9B%20%E2%80%93%20Neofort%20BIZ&body=Bun%C4%83%20ziua%2C%20v%C4%83%20contactez%20pentru%20a%20solicita%20o%20ofert%C4%83%20de%20pre%C8%9B%20pentru%20produsele%2Fserviciile%20Neofort%20BIZ.%20V%C4%83%20rog%20s%C4%83%20m%C4%83%20contacta%C8%9Bi%20pentru%20detalii.%20Mul%C8%9Bumesc!" className="hdr-btn hdr-btn-mail" aria-label="Email">
        {MAIL_SVG}
      </a>
    </div>
  );

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="site-logo">
            <img src="/Neofort.avif" alt="Neofort BIZ — Tâmplărie PVC Salamander și Aluminiu Alumil București"
              className="site-logo-img" width="128" height="93" fetchpriority="high"/>
            <span style={{position:'absolute',width:'1px',height:'1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap'}}>Neofort BIZ</span>
          </Link>

          {/* Nav desktop */}
          <nav className="site-nav">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={'site-nav-link' + (isActive(l.href) ? ' active' : '')}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Dreapta desktop: contact + limbi */}
          <div className="header-right">
            {contactBtns}
            <div className="nav-langs">
              {LOCALES.map(l => (
                <Link key={l} href={pathname} locale={l}
                  className={`nav-lang ${locale === l ? 'active' : ''}`}>
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobil: contact icoane + hamburger */}
          <div className="header-mobile-right">
            {contactBtns}
            <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
              <span className={open ? 'open' : ''} />
              <span className={open ? 'open' : ''} />
              <span className={open ? 'open' : ''} />
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {open && (
          <nav className="mobile-nav">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="mobile-nav-link"
                onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="mobile-langs">
              {LOCALES.map(l => (
                <Link key={l} href={pathname} locale={l}
                  className={`nav-lang ${locale === l ? 'active' : ''}`}>
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* ── Floating WhatsApp desktop (stânga) ─────────────────────────────── */}
      <a href="https://wa.me/40752443435?text=Bun%C4%83%20ziua%2C%20Neofort%20BIZ!%20Sunt%20interesat%20de%20produsele%2Fserviciile%20dvs.%20%C8%99i%20a%C8%99%20dori%20o%20ofert%C4%83.%20Mul%C8%9Bumesc!" target="_blank" rel="noopener noreferrer"
        className="wa-float" aria-label="WhatsApp Neofort BIZ">
        {WA_SVG}
      </a>

      {/* ── Bara bottom mobil ───────────────────────────────────────────────── */}
      <nav className="mobile-bottom-bar" aria-label="Contact rapid">
        <a href="tel:+40752443435" className="mbb-btn">
          {TEL_SVG}
          <span>Sună</span>
        </a>
        <a href="https://wa.me/40752443435?text=Bun%C4%83%20ziua%2C%20Neofort%20BIZ!%20Sunt%20interesat%20de%20produsele%2Fserviciile%20dvs.%20%C8%99i%20a%C8%99%20dori%20o%20ofert%C4%83.%20Mul%C8%9Bumesc!" target="_blank" rel="noopener noreferrer"
          className="mbb-btn mbb-wa">
          {WA_SVG}
          <span>WhatsApp</span>
        </a>
        <a href="mailto:oferte@neofort-biz.ro?subject=Solicitare%20ofert%C4%83%20de%20pre%C8%9B%20%E2%80%93%20Neofort%20BIZ&body=Bun%C4%83%20ziua%2C%20v%C4%83%20contactez%20pentru%20a%20solicita%20o%20ofert%C4%83%20de%20pre%C8%9B%20pentru%20produsele%2Fserviciile%20Neofort%20BIZ.%20V%C4%83%20rog%20s%C4%83%20m%C4%83%20contacta%C8%9Bi%20pentru%20detalii.%20Mul%C8%9Bumesc!" className="mbb-btn">
          {MAIL_SVG}
          <span>Email</span>
        </a>
        <Link href="/blog" className="mbb-btn">
          {BLOG_SVG}
          <span>Blog</span>
        </Link>
      </nav>
    </>
  );
}
