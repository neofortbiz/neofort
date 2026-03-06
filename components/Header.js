'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const LOCALES = ['RO','EN','DE','FR','ES','IT'];

const NAV = [
  { key: 'acasa',             color: null },
  { key: 'tamplarie-pvc',     color: '#4a7c59' },
  { key: 'tamplarie-aluminiu',color: '#2d5a8e' },
  { key: 'accesorii',         color: '#e8721c' },
  { key: 'servicii',          color: null },
  { key: 'despre',            color: null },
  { key: 'contact',           color: null },
  { key: 'blog',              color: null },
];

const LABELS = {
  acasa: 'Acasă',
  'tamplarie-pvc': 'Tâmplărie PVC',
  'tamplarie-aluminiu': 'Tâmplărie Aluminiu',
  accesorii: 'Accesorii',
  servicii: 'Servicii',
  despre: 'Despre',
  contact: 'Contact',
  blog: 'Blog',
};

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const href = (key) => key === 'acasa' ? `/${locale}` : `/${locale}/${key}`;
  const switchLocale = (l) => {
    const parts = pathname.split('/');
    parts[1] = l.toLowerCase();
    return parts.join('/');
  };

  return (
    <header style={{background:'#fff', boxShadow:'0 1px 0 #e5e5e5', position:'sticky', top:0, zIndex:50}}>
      <div className="container mx-auto px-6 flex justify-between items-stretch" style={{height:'60px'}}>

        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 flex-shrink-0">
          <div>
            <div className="font-condensed font-semibold tracking-widest uppercase leading-none" style={{fontSize:'1.1rem', color:'#1a1a1a', letterSpacing:'0.15em'}}>
              NEOFORT
            </div>
            <div className="font-condensed tracking-wider uppercase leading-none mt-0.5" style={{fontSize:'0.6rem', color:'#999', letterSpacing:'0.12em'}}>
              Tâmplărie PVC · Aluminiu
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-stretch gap-0">
          {NAV.map(({ key, color }) => (
            <NavLink key={key} href={href(key)} label={LABELS[key]} color={color} />
          ))}
          {/* Lang switcher */}
          <div className="flex items-center gap-3 pl-6 ml-4 border-l border-[#e5e5e5]">
            {LOCALES.map(l => (
              <a key={l} href={switchLocale(l)}
                className="font-condensed font-semibold transition-colors duration-150"
                style={{
                  fontSize:'0.62rem',
                  letterSpacing:'0.12em',
                  color: locale.toUpperCase() === l ? '#1a1a1a' : '#bbb',
                }}>
                {l}
              </a>
            ))}
          </div>
        </nav>

        {/* Hamburger */}
        <button className="lg:hidden flex flex-col justify-center gap-1.5 p-2" onClick={() => setOpen(!open)}>
          <span className={`block w-5 h-px bg-primary transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`} style={{background:'#1a1a1a'}}/>
          <span className={`block w-5 h-px transition-opacity ${open ? 'opacity-0' : ''}`} style={{background:'#1a1a1a'}}/>
          <span className={`block w-5 h-px transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} style={{background:'#1a1a1a'}}/>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#e5e5e5] px-6 py-4 flex flex-col gap-0 bg-white">
          {NAV.map(({ key, color }) => (
            <Link key={key} href={href(key)} onClick={() => setOpen(false)}
              className="py-3 border-b border-[#f0f0f0] font-condensed font-semibold tracking-widest uppercase transition-colors duration-150"
              style={{fontSize:'0.72rem', color:'#888', letterSpacing:'0.15em'}}>
              {LABELS[key]}
            </Link>
          ))}
          <div className="flex gap-4 pt-4">
            {LOCALES.map(l => (
              <a key={l} href={switchLocale(l)}
                className="font-condensed font-semibold"
                style={{fontSize:'0.62rem', letterSpacing:'0.12em', color: locale.toUpperCase()===l ? '#1a1a1a' : '#bbb'}}>
                {l}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label, color }) {
  const hoverColor = color || '#1a1a1a';
  return (
    <Link href={href} className="nav-link" style={{'--nav-hover': hoverColor}}>
      {label}
    </Link>
  );
}
