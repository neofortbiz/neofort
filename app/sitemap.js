export const dynamic = 'force-static';

const BASE = 'https://www.neofort-biz.ro';
const locales = ['ro','en','de','fr','es','it'];

// Slug-uri traduse — identice cu routing.js pathnames
const SLUGS = {
  ro: { pvc:'tamplarie-pvc', aluminiu:'tamplarie-aluminiu', accesorii:'accesorii', servicii:'servicii', contact:'contact', despre:'despre', gdpr:'gdpr' },
  en: { pvc:'pvc-windows', aluminiu:'aluminium-windows', accesorii:'accessories', servicii:'services', contact:'contact', despre:'about', gdpr:'privacy-policy' },
  de: { pvc:'kunststofffenster-pvc', aluminiu:'aluminiumfenster', accesorii:'zubehoer', servicii:'dienstleistungen', contact:'kontakt', despre:'ueber-uns', gdpr:'datenschutz' },
  fr: { pvc:'menuiserie-pvc', aluminiu:'menuiserie-aluminium', accesorii:'accessoires', servicii:'services', contact:'contact', despre:'a-propos', gdpr:'politique-confidentialite' },
  es: { pvc:'carpinteria-pvc', aluminiu:'carpinteria-aluminio', accesorii:'accesorios', servicii:'servicios', contact:'contacto', despre:'sobre-nosotros', gdpr:'politica-privacidad' },
  it: { pvc:'infissi-pvc', aluminiu:'infissi-alluminio', accesorii:'accessori', servicii:'servizi', contact:'contatti', despre:'chi-siamo', gdpr:'informativa-privacy' },
};

// Pagini cu prioritate — key = slug intern
const pages = [
  { key:'',          priority:1.0, freq:'weekly'  },
  { key:'pvc',       priority:0.9, freq:'monthly' },
  { key:'aluminiu',  priority:0.9, freq:'monthly' },
  { key:'accesorii', priority:0.8, freq:'monthly' },
  { key:'servicii',  priority:0.8, freq:'monthly' },
  { key:'contact',   priority:0.8, freq:'monthly' },
  { key:'blog',      priority:0.7, freq:'weekly'  },
  { key:'despre',    priority:0.5, freq:'yearly'  },
  { key:'gdpr',      priority:0.2, freq:'yearly'  },
];

const blogSlugs = [
  'bluevolution-92-vs-greenevolution-76',
  'montaj-precadre-blaugelb-nzeb',
  'jaluzele-raffstore-vs-rulouri-aluminiu',
  'export-tamplarie-germania',
];

// Returnează slug-ul tradus per limbă pentru o cheie dată
function slug(locale, key) {
  if (!key) return '';
  if (key === 'blog') return '/blog';
  return '/' + (SLUGS[locale]?.[key] || SLUGS.ro[key]);
}

export default function sitemap() {
  const now = new Date().toISOString();
  const urls = [];

  locales.forEach(locale => {
    // Pagini principale — URL tradus per limbă
    pages.forEach(p => {
      const path = slug(locale, p.key);
      urls.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: now,
        priority: p.priority,
        changeFrequency: p.freq,
        // alternates hreflang cu URL-urile traduse per limbă
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${BASE}/${l}${slug(l, p.key)}`])
          ),
        },
      });
    });

    // Articole blog — slug unic (nu are traduceri separate)
    blogSlugs.forEach(s => urls.push({
      url: `${BASE}/${locale}/blog/${s}`,
      lastModified: now,
      priority: 0.8,
      changeFrequency: 'monthly',
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [l, `${BASE}/${l}/blog/${s}`])
        ),
      },
    }));
  });

  return urls;
}
