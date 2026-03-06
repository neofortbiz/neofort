'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const locales = [
  { code: 'ro', label: 'RO' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
];

export default function Header({ locale }) {
  const t = useTranslations('nav');
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/tamplarie-aluminiu`, label: t('aluminium') },
    { href: `/${locale}/tamplarie-pvc`, label: t('pvc') },
    { href: `/${locale}/accesorii`, label: t('accessories') },
    { href: `/${locale}/servicii`, label: t('services') },
    { href: `/${locale}/despre`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
    { href: `/${locale}/blog`, label: t('blog') },
  ];

  return (
    <header style={{ background: 'var(--primary)' }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1.3rem', fontWeight: 700 }}>
            NEOFORT
          </span>
          <span className="text-white text-xs font-light hidden sm:block">Tâmplărie PVC & Aluminiu</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm px-3 py-2 rounded hover:bg-white hover:bg-opacity-10 transition-all"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language switcher */}
        <div className="hidden lg:flex items-center gap-1 ml-4">
          {locales.map((loc) => {
            const segments = pathname.split('/');
            segments[1] = loc.code;
            const newPath = segments.join('/');
            return (
              <Link
                key={loc.code}
                href={newPath}
                className={`text-xs px-2 py-1 rounded font-semibold transition-all ${
                  locale === loc.code
                    ? 'text-white border border-white'
                    : 'text-white opacity-50 hover:opacity-100'
                }`}
              >
                {loc.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'var(--dark)' }} className="lg:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white py-2 border-b border-white border-opacity-10 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-3">
            {locales.map((loc) => {
              const segments = pathname.split('/');
              segments[1] = loc.code;
              const newPath = segments.join('/');
              return (
                <Link
                  key={loc.code}
                  href={newPath}
                  className={`text-xs px-2 py-1 rounded font-semibold ${
                    locale === loc.code ? 'bg-white text-blue-900' : 'text-white opacity-60'
                  }`}
                >
                  {loc.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
