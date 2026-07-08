import { ARTICLES } from '../data/blog.js';
import { routing } from '../i18n/routing.js';

export const dynamic = 'force-static';

import { BASE, LOCALES } from '../lib/constants.js';
import { THEMES, CAT_PATHS } from '../lib/blogCategories.js';
const PAGE_SLUGS = {
  ro: { pvc:'tamplarie-pvc', aluminiu:'tamplarie-aluminiu', accesorii:'accesorii', servicii:'servicii', contact:'contact', despre:'despre', gdpr:'gdpr', cookies:'cookies', umbrire:'umbrire', nzeb:'sisteme-nzeb' },
  en: { pvc:'pvc-windows', aluminiu:'aluminium-windows', accesorii:'accessories', servicii:'services', contact:'contact', despre:'about', gdpr:'privacy-policy', cookies:'cookie-policy', umbrire:'shading-systems', nzeb:'nzeb-systems' },
  de: { pvc:'kunststofffenster-pvc', aluminiu:'aluminiumfenster', accesorii:'zubehoer', servicii:'dienstleistungen', contact:'kontakt', despre:'ueber-uns', gdpr:'datenschutz', cookies:'cookie-richtlinie', umbrire:'beschattungssysteme', nzeb:'nzeb-systeme' },
  fr: { pvc:'menuiserie-pvc', aluminiu:'menuiserie-aluminium', accesorii:'accessoires', servicii:'services', contact:'contact', despre:'a-propos', gdpr:'politique-confidentialite', cookies:'politique-cookies', umbrire:'systemes-occultation', nzeb:'systemes-nzeb' },
  es: { pvc:'carpinteria-pvc', aluminiu:'carpinteria-aluminio', accesorii:'accesorios', servicii:'servicios', contact:'contacto', despre:'sobre-nosotros', gdpr:'politica-privacidad', cookies:'politica-cookies', umbrire:'sistemas-sombreado', nzeb:'sistemas-nzeb' },
  it: { pvc:'infissi-pvc', aluminiu:'infissi-alluminio', accesorii:'accessori', servicii:'servizi', contact:'contatti', despre:'chi-siamo', gdpr:'informativa-privacy', cookies:'politica-cookie', umbrire:'sistemi-oscuramento', nzeb:'sistemi-nzeb' },
};

// v199: transportă și data reală (dateModified || date) pentru lastModified corect per articol
const BLOG_SLUGS = ARTICLES.map(a => ({ slugs: a.slugs, lastmod: a.dateModified || a.date })); // sincronizat automat cu data/blog.js

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
    { key:'cookies',    priority:0.2, freq:'yearly'  },
  { key:'umbrire',    priority:0.8, freq:'monthly' },
  { key:'nzeb',       priority:0.8, freq:'monthly' },
];

function pageSlug(locale, key) {
  if (!key) return '';
  if (key === 'blog') return '/blog';
  return '/' + (PAGE_SLUGS[locale]?.[key] || PAGE_SLUGS.ro[key]);
}

export default function sitemap() {
  const now = new Date().toISOString();
  const urls = [];

  // (Segmentele folder traduse per limbă au fost eliminate în v190 — generarea produselor
  //  citește acum direct din routing.pathnames, deci nu mai sunt necesare.)

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
    BLOG_SLUGS.forEach(({ slugs, lastmod }) => {
      const mySlug = slugs[locale] || slugs.ro;
      urls.push({
        url: `${BASE}/${locale}/blog/${mySlug}`,
        lastModified: lastmod,
        priority: 0.8,
        changeFrequency: 'monthly',
        alternates: {
          languages: Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/blog/${slugs[l] || slugs.ro}`])),
        },
      });
    });

    // v202: Pagini categorie blog — hub-uri tematice (sincron cu lib/blogCategories.js)
    THEMES.forEach(theme => {
      urls.push({
        url: `${BASE}/${locale}${CAT_PATHS[theme][locale]}`,
        lastModified: now,
        priority: 0.75,
        changeFrequency: 'weekly',
        alternates: {
          languages: Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}${CAT_PATHS[theme][l]}`])),
        },
      });
    });
  });

  // ── Pagini SEO PVC (preturi + bucuresti) — NOUT v74
  const PVC_SEO = {
    preturi:   { ro:'tamplarie-pvc/preturi', en:'pvc-windows/prices', de:'kunststofffenster-pvc/preise', fr:'menuiserie-pvc/prix', es:'carpinteria-pvc/precios', it:'infissi-pvc/prezzi' },
    bucuresti: { ro:'tamplarie-pvc/bucuresti', en:'pvc-windows/bucharest', de:'kunststofffenster-pvc/bukarest', fr:'menuiserie-pvc/bucarest', es:'carpinteria-pvc/bucarest', it:'infissi-pvc/bucarest' },
  };
  LOCALES.forEach(locale => {
    Object.values(PVC_SEO).forEach(slugs => {
      urls.push({ url:`${BASE}/${locale}/${slugs[locale]||slugs.ro}`, lastModified:now, priority:0.88, changeFrequency:'monthly',
        alternates:{ languages: Object.fromEntries(LOCALES.map(l=>[l,`${BASE}/${l}/${slugs[l]||slugs.ro}`])) } });
    });
  });

  // ── Produse individuale (toate categoriile) — generat DINAMIC din i18n/routing.js (v190)
  // Sursă unică de adevăr: elimină listele hardcodate (anterior 22 produse, lipseau zipscreen,
  // pergole-somfy, automatizari-somfy ×2). Acum orice produs nou din routing apare automat.
  const PROD_PRIORITY = { 'produse':0.85, 'produse-aluminiu':0.85, 'umbrire':0.82, 'sisteme-nzeb':0.82, 'accesorii':0.80 };
  const EXCLUDE_NON_PRODUCT = /(ghid-complet|preturi|bucuresti)/;
  const productKeys = Object.keys(routing.pathnames).filter(k =>
    /^\/(produse|produse-aluminiu|umbrire|sisteme-nzeb|accesorii)\/[a-z0-9-]+$/.test(k) &&
    !EXCLUDE_NON_PRODUCT.test(k)
  );
  // Dedup pe slug RO final: unele chei sunt alias-uri interne care produc același URL public
  // (ex: '/accesorii/automatizari-somfy' → același slug ca '/accesorii/automatizari-somfy-rulouri-pergole').
  const seenRoPaths = new Set();
  const uniqueProductKeys = productKeys.filter(key => {
    const roPath = routing.pathnames[key]?.ro || key;
    if (seenRoPaths.has(roPath)) return false;
    seenRoPaths.add(roPath);
    return true;
  });
  LOCALES.forEach(locale => {
    uniqueProductKeys.forEach(key => {
      const category = key.split('/')[1];
      const localizedPath = routing.pathnames[key]?.[locale] || routing.pathnames[key]?.ro || key;
      urls.push({
        url: `${BASE}/${locale}${localizedPath}`,
        lastModified: now,
        priority: PROD_PRIORITY[category] || 0.8,
        changeFrequency: 'monthly',
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map(l => [l, `${BASE}/${l}${routing.pathnames[key]?.[l] || routing.pathnames[key]?.ro || key}`])
          ),
        },
      });
    });
  });

  // llms.txt — pentru LLM crawlers
  urls.push({
    url: `${BASE}/llms.txt`,
    lastModified: now,
    priority: 0.9,
    changeFrequency: 'monthly',
  });

  return urls;
}
