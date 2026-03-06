import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-dark text-gray-300 mt-16">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary rounded p-1.5">
              <div className="text-white font-black text-xs leading-tight">
                <div>NEO</div><div className="text-accent">FORT</div>
              </div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">TERMOPANE NEOFORT</div>
              <div className="text-accent text-xs">{t('footer.pvc')}</div>
              <div className="text-accent text-xs">{t('footer.aluminiu')}</div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">{t('footer.marca')}</p>
          {/* Social links */}
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/neofortconstructii" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/NeofortBIZ" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="X/Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/neofort-biz" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://t.me/+w0I7TX9cnl03YTFk" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="Telegram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="https://wa.me/40752443435" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Produse Principale</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href={`/${locale}/tamplarie-aluminiu`} className="hover:text-accent transition-colors">Tâmplărie Aluminiu Alumil</Link></li>
            <li><Link href={`/${locale}/tamplarie-aluminiu`} className="hover:text-accent transition-colors text-xs text-gray-400">› S77 Supreme | S67 Smartia</Link></li>
            <li><Link href={`/${locale}/tamplarie-aluminiu`} className="hover:text-accent transition-colors text-xs text-gray-400">› S700 Supreme | SF85 Supreme</Link></li>
            <li className="mt-2"><Link href={`/${locale}/tamplarie-pvc`} className="hover:text-accent transition-colors">Tâmplărie PVC Salamander</Link></li>
            <li><Link href={`/${locale}/tamplarie-pvc`} className="hover:text-accent transition-colors text-xs text-gray-400">› BluEvolution 92 ALU/FLEX/ROUND</Link></li>
            <li><Link href={`/${locale}/tamplarie-pvc`} className="hover:text-accent transition-colors text-xs text-gray-400">› GreenEvolution 76 MD/AD</Link></li>
            <li className="mt-2"><Link href={`/${locale}/accesorii`} className="hover:text-accent transition-colors">Accesorii</Link></li>
            <li><Link href={`/${locale}/servicii`} className="hover:text-accent transition-colors">Servicii & Montaj</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><span className="text-accent">📍</span><span>Str. Theodor Aman Pictor 11, sector 1, București, 010776</span></li>
            <li className="flex gap-2"><span className="text-accent">📞</span><a href="tel:+40215280661" className="hover:text-accent">Office: +40 21 528 0661</a></li>
            <li className="flex gap-2"><span className="text-accent">📱</span><a href="tel:+40752443435" className="hover:text-accent">Oferte: +40 752 443 435</a></li>
            <li className="flex gap-2"><span className="text-accent">🌍</span><a href="tel:+40752443439" className="hover:text-accent">Export: +40 752 443 439</a></li>
            <li className="flex gap-2"><span className="text-accent">🔧</span><a href="tel:+40752443431" className="hover:text-accent">Tehnic: +40 752 443 431</a></li>
            <li className="flex gap-2"><span className="text-accent">✉️</span><a href="mailto:oferte@neofort-biz.ro" className="hover:text-accent">oferte@neofort-biz.ro</a></li>
            <li className="flex gap-2"><span className="text-accent">✉️</span><a href="mailto:comenzi@neofort-biz.ro" className="hover:text-accent">comenzi@neofort-biz.ro</a></li>
          </ul>
        </div>

        {/* Languages & Info */}
        <div>
          <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Limbi disponibile</h3>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {locales.map((l) => (
              <a key={l.code} href={`/${l.code}`}
                className={`text-center py-1 rounded text-xs font-bold border transition-colors ${locale === l.code ? 'border-accent text-accent' : 'border-gray-600 hover:border-accent hover:text-accent'}`}>
                {l.label}
              </a>
            ))}
          </div>
          <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-wide">Info</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href={`/${locale}/despre`} className="hover:text-accent">Despre Neofort</Link></li>
            <li><Link href={`/${locale}/blog`} className="hover:text-accent">Blog Termopane</Link></li>
            <li><Link href={`/${locale}/gdpr`} className="hover:text-accent">Politică GDPR</Link></li>
            <li><a href="https://g.page/r/CT2C3AUzzk2VEBE/review" target="_blank" rel="noopener noreferrer" className="hover:text-accent">⭐ Lasă o recenzie</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 px-4 text-center text-xs text-gray-500">
        <p>Neofort BIZ © Marcă înregistrată O.S.I.M. nr. M 2014 05130 | <a href="http://www.neofort-biz.ro" className="hover:text-accent">neofort-biz.ro</a></p>
        <p className="mt-1">Geam termopan · Tâmplărie PVC Salamander · Tâmplărie Aluminiu Alumil · Montaj · Livrare Europa</p>
      </div>

      {/* Schema.org LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "Store"],
            "name": "Neofort BIZ - Tâmplărie PVC & Aluminiu",
            "image": "https://www.neofort-biz.ro/logo.jpg",
            "url": "https://www.neofort-biz.ro",
            "telephone": ["+40215280661", "+40752443435"],
            "email": "oferte@neofort-biz.ro",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Strada Theodor Aman Pictor 11",
              "addressLocality": "București",
              "addressRegion": "Sector 1",
              "postalCode": "010776",
              "addressCountry": "RO"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 44.442936,
              "longitude": 26.088513
            },
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" }
            ],
            "priceRange": "$$",
            "currenciesAccepted": "RON, EUR",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "areaServed": ["România", "Europa", "EU"],
            "hasMap": "https://maps.app.goo.gl/YcaANuqcmnzy14i1A",
            "sameAs": [
              "https://www.facebook.com/neofortconstructii",
              "https://www.linkedin.com/company/neofort-biz",
              "https://x.com/NeofortBIZ"
            ]
          })
        }}
      />
    </footer>
  );
}
