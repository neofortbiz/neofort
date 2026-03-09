export const dynamic = 'force-static';

const BASE = 'https://www.neofort-biz.ro';
const locales = ['ro','en','de','fr','es','it'];

const pages = [
  { path:'',                    priority:1.0, freq:'weekly'  },
  { path:'/tamplarie-pvc',      priority:0.9, freq:'monthly' },
  { path:'/tamplarie-aluminiu', priority:0.9, freq:'monthly' },
  { path:'/accesorii',          priority:0.8, freq:'monthly' },
  { path:'/servicii',           priority:0.8, freq:'monthly' },
  { path:'/contact',            priority:0.8, freq:'monthly' },
  { path:'/blog',               priority:0.7, freq:'weekly'  },
  { path:'/despre',             priority:0.5, freq:'yearly'  },
  { path:'/gdpr',               priority:0.2, freq:'yearly'  },
];

const blogSlugs = [
  'bluevolution-92-vs-greenevolution-76',
  'montaj-precadre-blaugelb-nzeb',
  'jaluzele-raffstore-vs-rulouri-aluminiu',
  'export-tamplarie-germania',
];

export default function sitemap() {
  const now = new Date().toISOString();
  const urls = [];

  locales.forEach(locale => {
    // Pagini principale
    pages.forEach(p => urls.push({
      url: `${BASE}/${locale}${p.path}`,
      lastModified: now,
      priority: p.priority,
      changeFrequency: p.freq,
      alternates: { languages: Object.fromEntries(locales.map(l=>[l,`${BASE}/${l}${p.path}`])) },
    }));
    // Articole blog
    blogSlugs.forEach(slug => urls.push({
      url: `${BASE}/${locale}/blog/${slug}`,
      lastModified: now,
      priority: 0.8,
      changeFrequency: 'monthly',
      alternates: { languages: Object.fromEntries(locales.map(l=>[l,`${BASE}/${l}/blog/${slug}`])) },
    }));
  });

  return urls;
}
