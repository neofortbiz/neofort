'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

const LOCALES = ['RO','EN','DE','FR','ES','IT'];

export default function Header() {
  const t   = useTranslations('nav');
  const loc = useLocale();
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const sw = (l) => { const s = path.split('/'); s[1] = l.toLowerCase(); return s.join('/'); };

  const links = [
    { href:`/${loc}/tamplarie-pvc`,      label:t('pvc'),       active:'pvc' },
    { href:`/${loc}/tamplarie-aluminiu`, label:t('aluminiu'),  active:'aluminiu' },
    { href:`/${loc}/accesorii`,          label:t('accesorii'), active:'accesorii' },
    { href:`/${loc}/servicii`,           label:t('servicii'),  active:null },
    { href:`/${loc}/despre`,             label:t('despre'),    active:null },
    { href:`/${loc}/contact`,            label:t('contact'),   active:null },
  ];

  const hoverColor = (a) => {
    if (a==='pvc')       return 'hover:text-pvc hover:border-pvc';
    if (a==='aluminiu')  return 'hover:text-aluminiu hover:border-aluminiu';
    if (a==='accesorii') return 'hover:text-accesorii hover:border-accesorii';
    return 'hover:text-primary hover:border-primary';
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-[0_1px_0_#e5e5e5]">
      {/* topbar */}
      <div className="bg-[#111]">
        <div className="container mx-auto px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5 text-[0.68rem] text-gray-400 tracking-wide">
            <a href="tel:+40215280661"  className="hover:text-white transition-colors duration-200">+40 21 528 0661</a>
            <a href="tel:+40752443435"  className="hover:text-white transition-colors duration-200 hidden sm:block">Oferte: +40 752 443 435</a>
            <a href="tel:+40752443439"  className="hover:text-white transition-colors duration-200 hidden lg:block">Export: +40 752 443 439</a>
          </div>
          <div className="flex items-center gap-3">
            {LOCALES.map(l=>(
              <a key={l} href={sw(l)}
                className={`text-[0.68rem] tracking-[0.15em] transition-colors duration-200 ${loc.toUpperCase()===l ? 'text-white font-semibold' : 'text-gray-500 hover:text-white'}`}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* nav */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[60px]">
          <Link href={`/${loc}`} className="flex flex-col leading-none">
            <span className="font-condensed text-[1.3rem] font-semibold tracking-[0.14em] text-primary uppercase">Neofort</span>
            <span className="text-[0.58rem] tracking-[0.22em] text-muted uppercase font-normal mt-0.5">Tâmplărie PVC · Aluminiu</span>
          </Link>

          <nav className="hidden lg:flex items-stretch h-[60px]">
            {links.map(l=>(
              <Link key={l.href} href={l.href}
                className={`flex items-center px-4 text-[0.7rem] tracking-[0.14em] uppercase font-semibold font-condensed text-muted border-b-2 border-transparent transition-all duration-200 ${hoverColor(l.active)}`}>
                {l.label}
              </Link>
            ))}
            <div className="flex items-center ml-5">
              <Link href={`/${loc}/contact`}
                className="bg-primary text-white font-condensed text-[0.7rem] tracking-[0.14em] uppercase font-semibold px-5 py-2.5 hover:bg-pvc transition-colors duration-200">
                {t('oferta')}
              </Link>
            </div>
          </nav>

          <button className="lg:hidden p-2 flex flex-col gap-[5px]" onClick={()=>setOpen(!open)}>
            <span className={`block w-5 h-px bg-primary transition-all duration-200 ${open?'rotate-45 translate-y-[6px]':''}`}/>
            <span className={`block w-5 h-px bg-primary transition-opacity duration-200 ${open?'opacity-0':''}`}/>
            <span className={`block w-5 h-px bg-primary transition-all duration-200 ${open?'-rotate-45 -translate-y-[6px]':''}`}/>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container mx-auto px-6 py-3 flex flex-col">
            {links.map(l=>(
              <Link key={l.href} href={l.href} onClick={()=>setOpen(false)}
                className="py-3 font-condensed text-[0.72rem] tracking-[0.14em] uppercase font-semibold text-muted border-b border-border last:border-0 hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href={`/${loc}/contact`} onClick={()=>setOpen(false)}
              className="mt-4 bg-primary text-white font-condensed text-[0.7rem] tracking-[0.14em] uppercase font-semibold px-5 py-3 text-center hover:bg-pvc transition-colors duration-200">
              {t('oferta')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
