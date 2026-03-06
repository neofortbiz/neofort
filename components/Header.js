'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

const locales = [
  { code: 'ro', label: 'RO' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLocalePath = (newLocale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="bg-dark text-xs py-1 px-4 flex justify-between items-center">
        <div className="flex gap-4">
          <a href="tel:+40215280661" className="hover:text-accent transition-colors">📞 +40 21 528 0661</a>
          <a href="tel:+40752443435" className="hover:text-accent transition-colors hidden md:block">📱 +40 752 443 435</a>
          <a href="tel:+40752443439" className="hover:text-accent transition-colors hidden lg:block">🌍 Export: +40 752 443 439</a>
        </div>
        <div className="flex gap-1">
          {locales.map((l) => (
            <a key={l.code} href={getLocalePath(l.code)}
              className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${locale === l.code ? 'bg-accent text-white' : 'hover:text-accent'}`}>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="bg-white rounded p-1.5">
            <div className="text-primary font-black text-xs leading-tight">
              <div>NEO</div><div className="text-accent">FORT</div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-sm">TERMOPANE NEOFORT</div>
            <div className="text-accent text-xs">Tâmplărie PVC • Aluminiu • Pereti Cortina</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1 text-sm">
          <Link href={`/${locale}`} className="px-3 py-2 hover:text-accent transition-colors">{t('home')}</Link>
          <Link href={`/${locale}/tamplarie-aluminiu`} className="px-3 py-2 hover:text-accent font-semibold transition-colors">{t('aluminiu')}</Link>
          <Link href={`/${locale}/tamplarie-pvc`} className="px-3 py-2 hover:text-accent font-semibold transition-colors">{t('pvc')}</Link>
          <Link href={`/${locale}/accesorii`} className="px-3 py-2 hover:text-accent transition-colors">{t('accesorii')}</Link>
          <Link href={`/${locale}/servicii`} className="px-3 py-2 hover:text-accent transition-colors">{t('servicii')}</Link>
          <Link href={`/${locale}/despre`} className="px-3 py-2 hover:text-accent transition-colors">{t('despre')}</Link>
          <Link href={`/${locale}/contact`} className="px-3 py-2 hover:text-accent transition-colors">{t('contact')}</Link>
          <Link href={`/${locale}/blog`} className="px-3 py-2 hover:text-accent transition-colors">{t('blog')}</Link>
          <Link href={`/${locale}/contact`} className="ml-2 bg-accent px-4 py-2 rounded font-bold hover:bg-yellow-500 transition-colors">{t('oferta')}</Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-dark px-4 pb-4 flex flex-col gap-1 text-sm">
          <Link href={`/${locale}`} className="py-2 hover:text-accent" onClick={() => setMenuOpen(false)}>{t('home')}</Link>
          <Link href={`/${locale}/tamplarie-aluminiu`} className="py-2 hover:text-accent font-semibold" onClick={() => setMenuOpen(false)}>{t('aluminiu')}</Link>
          <Link href={`/${locale}/tamplarie-pvc`} className="py-2 hover:text-accent font-semibold" onClick={() => setMenuOpen(false)}>{t('pvc')}</Link>
          <Link href={`/${locale}/accesorii`} className="py-2 hover:text-accent" onClick={() => setMenuOpen(false)}>{t('accesorii')}</Link>
          <Link href={`/${locale}/servicii`} className="py-2 hover:text-accent" onClick={() => setMenuOpen(false)}>{t('servicii')}</Link>
          <Link href={`/${locale}/despre`} className="py-2 hover:text-accent" onClick={() => setMenuOpen(false)}>{t('despre')}</Link>
          <Link href={`/${locale}/contact`} className="py-2 hover:text-accent" onClick={() => setMenuOpen(false)}>{t('contact')}</Link>
          <Link href={`/${locale}/blog`} className="py-2 hover:text-accent" onClick={() => setMenuOpen(false)}>{t('blog')}</Link>
          <Link href={`/${locale}/contact`} className="mt-2 bg-accent px-4 py-2 rounded font-bold text-center" onClick={() => setMenuOpen(false)}>{t('oferta')}</Link>
        </div>
      )}
    </header>
  );
}
