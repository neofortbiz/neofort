'use client';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const LOCALES = [
  { code: 'ro', label: 'RO' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
];

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-white border-t border-border mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-2xl font-light text-primary mb-1">NEOFORT</div>
            <div className="text-xs tracking-widest text-muted uppercase mb-6">Tâmplărie PVC · Aluminiu</div>
            <p className="text-xs text-muted leading-relaxed">
              Marcă înregistrată O.S.I.M.<br/>nr. M 2014 05130
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/neofortconstructii" target="_blank" rel="noopener noreferrer"
                className="text-xs text-muted hover:text-primary transition-colors duration-300 tracking-wide">FB</a>
              <a href="https://www.linkedin.com/company/neofort-biz" target="_blank" rel="noopener noreferrer"
                className="text-xs text-muted hover:text-primary transition-colors duration-300 tracking-wide">LI</a>
              <a href="https://x.com/NeofortBIZ" target="_blank" rel="noopener noreferrer"
                className="text-xs text-muted hover:text-primary transition-colors duration-300 tracking-wide">X</a>
              <a href="https://wa.me/40752443435" target="_blank" rel="noopener noreferrer"
                className="text-xs text-muted hover:text-primary transition-colors duration-300 tracking-wide">WA</a>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="text-xs tracking-widest uppercase text-muted mb-6">Produse</div>
            <ul className="space-y-3">
              <li><Link href={`/${locale}/tamplarie-aluminiu`} className="text-sm text-muted hover:text-primary transition-colors duration-300">Tâmplărie Aluminiu Alumil</Link></li>
              <li><Link href={`/${locale}/tamplarie-pvc`} className="text-sm text-muted hover:text-primary transition-colors duration-300">Tâmplărie PVC Salamander</Link></li>
              <li><Link href={`/${locale}/accesorii`} className="text-sm text-muted hover:text-primary transition-colors duration-300">Accesorii</Link></li>
              <li><Link href={`/${locale}/servicii`} className="text-sm text-muted hover:text-primary transition-colors duration-300">Servicii & Montaj</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs tracking-widest uppercase text-muted mb-6">Contact</div>
            <ul className="space-y-3 text-sm text-muted">
              <li>Str. Theodor Aman 11<br/>Sector 1, București 010776</li>
              <li><a href="tel:+40215280661" className="hover:text-primary transition-colors duration-300">+40 21 528 0661</a></li>
              <li><a href="tel:+40752443435" className="hover:text-primary transition-colors duration-300">+40 752 443 435</a></li>
              <li><a href="mailto:oferte@neofort-biz.ro" className="hover:text-primary transition-colors duration-300">oferte@neofort-biz.ro</a></li>
            </ul>
          </div>

          {/* Languages + Links */}
          <div>
            <div className="text-xs tracking-widest uppercase text-muted mb-6">Limbi</div>
            <div className="flex flex-wrap gap-3 mb-8">
              {LOCALES.map(l => (
                <a key={l.code} href={`/${l.code}`}
                  className={`text-xs tracking-widest transition-colors duration-300 ${locale === l.code ? 'text-primary' : 'text-muted hover:text-primary'}`}>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="text-xs tracking-widest uppercase text-muted mb-4">Info</div>
            <ul className="space-y-3">
              <li><Link href={`/${locale}/despre`} className="text-sm text-muted hover:text-primary transition-colors duration-300">Despre Neofort</Link></li>
              <li><Link href={`/${locale}/blog`} className="text-sm text-muted hover:text-primary transition-colors duration-300">Blog</Link></li>
              <li><Link href={`/${locale}/gdpr`} className="text-sm text-muted hover:text-primary transition-colors duration-300">GDPR</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">© 2025 Neofort BIZ · neofort-biz.ro</p>
          <p className="text-xs text-muted">PVC Salamander · Aluminiu Alumil · Geam Termopan · Europa</p>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness","Store"],
        "name": "Neofort BIZ",
        "url": "https://www.neofort-biz.ro",
        "telephone": "+40215280661",
        "email": "oferte@neofort-biz.ro",
        "address": { "@type": "PostalAddress", "streetAddress": "Strada Theodor Aman Pictor 11", "addressLocality": "București", "postalCode": "010776", "addressCountry": "RO" },
        "sameAs": ["https://www.facebook.com/neofortconstructii","https://www.linkedin.com/company/neofort-biz"]
      })}} />
    </footer>
  );
}
