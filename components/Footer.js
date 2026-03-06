import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer({ locale }) {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer style={{ background: 'var(--dark)', color: '#fff' }} className="pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white border-opacity-10">

          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1.5rem' }}>
              NEOFORT
            </h3>
            <p className="text-sm text-gray-400 mt-2">Tâmplărie PVC & Aluminiu</p>
            <p className="text-xs text-gray-500 mt-3">{t('brand')}</p>
            <p className="text-xs text-gray-500">nr. înregistrare M 2014 05130</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Pagini</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: `/${locale}/tamplarie-aluminiu`, label: nav('aluminium') },
                { href: `/${locale}/tamplarie-pvc`, label: nav('pvc') },
                { href: `/${locale}/accesorii`, label: nav('accessories') },
                { href: `/${locale}/servicii`, label: nav('services') },
                { href: `/${locale}/despre`, label: nav('about') },
                { href: `/${locale}/blog`, label: nav('blog') },
              ].map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <p>📞 Office: +40 21 528 0661</p>
              <p>📞 Oferte: +40 752 443 435</p>
              <p>📞 Export: +40 752 443 439</p>
              <p>✉️ oferte@neofort-biz.ro</p>
              <p>📍 Str. Theodor Aman Pictor 11,<br/>Sector 1, București</p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Neofort BIZ. {t('rights')}.</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/neofortconstructii" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-xs">Facebook</a>
            <a href="https://www.linkedin.com/company/neofort-biz" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-xs">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
