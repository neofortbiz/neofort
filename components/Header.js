'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

const LOCALES = ['RO','EN','DE','FR','ES','IT'];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = (l) => {
    const segs = pathname.split('/');
    segs[1] = l.toLowerCase();
    return segs.join('/');
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex gap-6 text-xs text-muted tracking-wide">
            <a href="tel:+40215280661" className="hover:text-primary transition-colors duration-300">+40 21 528 0661</a>
            <a href="tel:+40752443435" className="hover:text-primary transition-colors duration-300 hidden md:block">+40 752 443 435</a>
            <a href="tel:+40752443439" className="hover:text-primary transition-colors duration-300 hidden lg:block">Export: +40 752 443 439</a>
          </div>
          <div className="flex gap-4 text-xs tracking-widest">
            {LOCALES.map(l => (
              <a key={l} href={switchLocale(l)}
                className={`transition-colors duration-300 ${locale.toUpperCase() === l ? 'text-primary' : 'text-muted hover:text-primary'}`}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="flex flex-col leading-none">
          <span className="font-display text-2xl font-light tracking-wide text-primary">NEOFORT</span>
          <span className="text-xs tracking-widest text-muted uppercase font-light">Tâmplărie PVC · Aluminiu</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-xs tracking-widest uppercase">
          {/* PVC — verde */}
          <Link href={`/${locale}/tamplarie-pvc`}
            className="text-muted hover:text-pvc transition-colors duration-300">
            {t('pvc')}
          </Link>
          {/* Aluminiu — albastru */}
          <Link href={`/${locale}/tamplarie-aluminiu`}
            className="text-muted hover:text-aluminiu transition-colors duration-300">
            {t('aluminiu')}
          </Link>
          {/* Accesorii — portocaliu */}
          <Link href={`/${locale}/accesorii`}
            className="text-muted hover:text-accesorii transition-colors duration-300">
            {t('accesorii')}
          </Link>
          <Link href={`/${locale}/servicii`} className="text-muted hover:text-primary transition-colors duration-300">{t('servicii')}</Link>
          <Link href={`/${locale}/despre`} className="text-muted hover:text-primary transition-colors duration-300">{t('despre')}</Link>
          <Link href={`/${locale}/contact`} className="text-muted hover:text-primary transition-colors duration-300">{t('contact')}</Link>
          <Link href={`/${locale}/blog`} className="text-muted hover:text-primary transition-colors duration-300">{t('blog')}</Link>
          <Link href={`/${locale}/contact`}
            className="ml-2 border border-primary text-primary px-5 py-2 hover:bg-primary hover:text-white transition-all duration-300">
            {t('oferta')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`block w-6 h-px bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-px bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-px bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-white px-6 py-6 flex flex-col gap-5 text-xs tracking-widest uppercase">
          <Link href={`/${locale}/tamplarie-pvc`} onClick={() => setMenuOpen(false)} className="text-muted hover:text-pvc transition-colors">{t('pvc')}</Link>
          <Link href={`/${locale}/tamplarie-aluminiu`} onClick={() => setMenuOpen(false)} className="text-muted hover:text-aluminiu transition-colors">{t('aluminiu')}</Link>
          <Link href={`/${locale}/accesorii`} onClick={() => setMenuOpen(false)} className="text-muted hover:text-accesorii transition-colors">{t('accesorii')}</Link>
          <Link href={`/${locale}/servicii`} onClick={() => setMenuOpen(false)} className="text-muted hover:text-primary transition-colors">{t('servicii')}</Link>
          <Link href={`/${locale}/despre`} onClick={() => setMenuOpen(false)} className="text-muted hover:text-primary transition-colors">{t('despre')}</Link>
          <Link href={`/${locale}/contact`} onClick={() => setMenuOpen(false)} className="text-muted hover:text-primary transition-colors">{t('contact')}</Link>
          <Link href={`/${locale}/blog`} onClick={() => setMenuOpen(false)} className="text-muted hover:text-primary transition-colors">{t('blog')}</Link>
          <Link href={`/${locale}/contact`} onClick={() => setMenuOpen(false)}
            className="border border-primary text-primary px-5 py-3 text-center hover:bg-primary hover:text-white transition-all duration-300 mt-2">
            {t('oferta')}
          </Link>
        </div>
      )}
    </header>
  );
}
