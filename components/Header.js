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
      {/* Topbar */}
      <div className="bg-dark text-white">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex gap-6 text-xs font-light tracking-wide">
            <a href="tel:+40215280661" className="hover:text-pvc transition-colors duration-300">+40 21 528 0661</a>
            <a href="tel:+40752443435" className="hover:text-pvc transition-colors duration-300 hidden md:block">Oferte: +40 752 443 435</a>
            <a href="tel:+40752443439" className="hover:text-aluminiu transition-colors duration-300 hidden lg:block">Export: +40 752 443 439</a>
          </div>
          <div className="flex gap-4 text-xs tracking-widest">
            {LOCALES.map(l => (
              <a key={l} href={switchLocale(l)}
                className={`transition-colors duration-300 ${locale.toUpperCase() === l
                  ? 'text-white font-medium'
                  : 'text-gray-400 hover:text-white'}`}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-6 py-0 flex justify-between items-center">
        <Link href={`/${locale}`} className="py-4 flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span className="font-condensed text-xl font-semibold tracking-widest text-primary uppercase">Neofort</span>
            <span className="text-xs text-muted tracking-widest uppercase font-light">Tâmplărie PVC · Aluminiu</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-stretch text-xs tracking-widest uppercase font-medium h-full">
          <Link href={`/${locale}/tamplarie-pvc`}
            className="flex items-center px-4 py-5 text-muted border-b-2 border-transparent hover:border-pvc hover:text-pvc transition-all duration-300">
            {t('pvc')}
          </Link>
          <Link href={`/${locale}/tamplarie-aluminiu`}
            className="flex items-center px-4 py-5 text-muted border-b-2 border-transparent hover:border-aluminiu hover:text-aluminiu transition-all duration-300">
            {t('aluminiu')}
          </Link>
          <Link href={`/${locale}/accesorii`}
            className="flex items-center px-4 py-5 text-muted border-b-2 border-transparent hover:border-accesorii hover:text-accesorii transition-all duration-300">
            {t('accesorii')}
          </Link>
          <Link href={`/${locale}/servicii`}
            className="flex items-center px-4 py-5 text-muted border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-300">
            {t('servicii')}
          </Link>
          <Link href={`/${locale}/despre`}
            className="flex items-center px-4 py-5 text-muted border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-300">
            {t('despre')}
          </Link>
          <Link href={`/${locale}/contact`}
            className="flex items-center px-4 py-5 text-muted border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-300">
            {t('contact')}
          </Link>
          <Link href={`/${locale}/contact`}
            className="flex items-center ml-4 my-3 px-6 bg-primary text-white text-xs tracking-widest uppercase font-medium hover:bg-pvc transition-colors duration-300">
            {t('oferta')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-primary ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-1 text-xs tracking-widest uppercase">
          <Link href={`/${locale}/tamplarie-pvc`} onClick={() => setMenuOpen(false)} className="py-3 text-muted hover:text-pvc border-b border-border">{t('pvc')}</Link>
          <Link href={`/${locale}/tamplarie-aluminiu`} onClick={() => setMenuOpen(false)} className="py-3 text-muted hover:text-aluminiu border-b border-border">{t('aluminiu')}</Link>
          <Link href={`/${locale}/accesorii`} onClick={() => setMenuOpen(false)} className="py-3 text-muted hover:text-accesorii border-b border-border">{t('accesorii')}</Link>
          <Link href={`/${locale}/servicii`} onClick={() => setMenuOpen(false)} className="py-3 text-muted hover:text-primary border-b border-border">{t('servicii')}</Link>
          <Link href={`/${locale}/despre`} onClick={() => setMenuOpen(false)} className="py-3 text-muted hover:text-primary border-b border-border">{t('despre')}</Link>
          <Link href={`/${locale}/contact`} onClick={() => setMenuOpen(false)} className="py-3 text-muted hover:text-primary border-b border-border">{t('contact')}</Link>
          <Link href={`/${locale}/contact`} onClick={() => setMenuOpen(false)}
            className="mt-3 bg-primary text-white px-6 py-3 text-center hover:bg-pvc transition-colors duration-300">
            {t('oferta')}
          </Link>
        </div>
      )}
    </header>
  );
}
