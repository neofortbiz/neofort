export const dynamic = 'force-static';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

const PAGE_SLUGS = {
  ro: { pvc:'tamplarie-pvc', aluminiu:'tamplarie-aluminiu', accesorii:'accesorii', servicii:'servicii', contact:'contact', despre:'despre', gdpr:'gdpr' },
  en: { pvc:'pvc-windows', aluminiu:'aluminium-windows', accesorii:'accessories', servicii:'services', contact:'contact', despre:'about', gdpr:'privacy-policy' },
  de: { pvc:'kunststofffenster-pvc', aluminiu:'aluminiumfenster', accesorii:'zubehoer', servicii:'dienstleistungen', contact:'kontakt', despre:'ueber-uns', gdpr:'datenschutz' },
  fr: { pvc:'menuiserie-pvc', aluminiu:'menuiserie-aluminium', accesorii:'accessoires', servicii:'services', contact:'contact', despre:'a-propos', gdpr:'politique-confidentialite' },
  es: { pvc:'carpinteria-pvc', aluminiu:'carpinteria-aluminio', accesorii:'accesorios', servicii:'servicios', contact:'contacto', despre:'sobre-nosotros', gdpr:'politica-privacidad' },
  it: { pvc:'infissi-pvc', aluminiu:'infissi-alluminio', accesorii:'accessori', servicii:'servizi', contact:'contatti', despre:'chi-siamo', gdpr:'informativa-privacy' },
};

const BLOG_SLUGS = [
  {
    ro: 'bluevolution-92-vs-greenevolution-76',
    en: 'bluevolution-92-vs-greenevolution-76-guide',
    de: 'bluevolution-92-vs-greenevolution-76-leitfaden',
    fr: 'bluevolution-92-vs-greenevolution-76-guide',
    es: 'bluevolution-92-vs-greenevolution-76-guia',
    it: 'bluevolution-92-vs-greenevolution-76-guida',
  },
  {
    ro: 'montaj-precadre-blaugelb-nzeb',
    en: 'blaugelb-triotherm-precasing-installation-nzeb',
    de: 'blaugelb-triotherm-vorfenster-montage-nzeb',
    fr: 'precadres-blaugelb-triotherm-pose-nzeb',
    es: 'instalacion-premarcos-blaugelb-triotherm-nzeb',
    it: 'installazione-precassonetti-blaugelb-triotherm-nzeb',
  },
  {
    ro: 'jaluzele-raffstore-vs-rulouri-aluminiu',
    en: 'raffstore-blinds-vs-aluminium-shutters',
    de: 'raffstore-jalousien-vs-aluminiumrolllaeden',
    fr: 'stores-raffstore-vs-volets-roulants-aluminium',
    es: 'persianas-raffstore-vs-cierres-enrollables-aluminio',
    it: 'veneziane-raffstore-vs-tapparelle-alluminio',
  },
  {
    ro: 'export-tamplarie-germania',
    en: 'export-windows-germany-romania',
    de: 'fensterexport-rumaenien-deutschland',
    fr: 'export-menuiseries-roumanie-allemagne',
    es: 'exportacion-carpinteria-rumania-alemania',
    it: 'esportazione-serramenti-romania-germania',
  },
];

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

function pageSlug(locale, key) {
  if (!key) return '';
  if (key === 'blog') return '/blog';
  return '/' + (PAGE_SLUGS[locale]?.[key] || PAGE_SLUGS.ro[key]);
}

export default function sitemap() {
  const now = new Date().toISOString();
  const urls = [];

  LOCALES.forEach(locale => {
    // Pagini principale
    pages.forEach(p => {
      const path = pageSlug(locale, p.key);
      urls.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: now,
        priority: p.priority,
        changeFrequency: p.freq,
        alternates: {
          languages: Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}${pageSlug(l, p.key)}`])),
        },
      });
    });

    // Articole blog — slug tradus per limbă
    BLOG_SLUGS.forEach(slugs => {
      const mySlug = slugs[locale] || slugs.ro;
      urls.push({
        url: `${BASE}/${locale}/blog/${mySlug}`,
        lastModified: now,
        priority: 0.8,
        changeFrequency: 'monthly',
        alternates: {
          languages: Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/blog/${slugs[l] || slugs.ro}`])),
        },
      });
    });
  });

  return urls;
}
