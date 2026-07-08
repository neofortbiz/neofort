// v202: Pagini de categorie blog crawlabile — hub-uri tematice (topic clusters).
// URL-uri localizate via i18n/routing.js; conținut 100% server-rendered (zero JS client).
import { ARTICLES } from '../../../../../data/blog.js';
import { BASE, LOCALES } from '../../../../../lib/constants.js';
import { THEMES, THEME_LABELS, THEME_DESC, CAT_PATHS, getThemeArticles } from '../../../../../lib/blogCategories.js';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

const UI = {
  ro: { home:'Acasă', blog:'Blog', all:'Toate articolele', count:['articol','articole'], read:'Citește →' },
  en: { home:'Home', blog:'Blog', all:'All articles', count:['article','articles'], read:'Read →' },
  de: { home:'Startseite', blog:'Blog', all:'Alle Artikel', count:['Artikel','Artikel'], read:'Lesen →' },
  fr: { home:'Accueil', blog:'Blog', all:'Tous les articles', count:['article','articles'], read:'Lire →' },
  es: { home:'Inicio', blog:'Blog', all:'Todos los artículos', count:['artículo','artículos'], read:'Leer →' },
  it: { home:'Home', blog:'Blog', all:'Tutti gli articoli', count:['articolo','articoli'], read:'Leggi →' },
};

export function generateStaticParams() {
  const params = [];
  LOCALES.forEach(locale => THEMES.forEach(cat => params.push({ locale, cat })));
  return params;
}

export async function generateMetadata({ params }) {
  const { locale, cat } = await params;
  if (!THEMES.includes(cat)) return {};
  const label = THEME_LABELS[locale]?.[cat] || THEME_LABELS.ro[cat];
  const desc  = THEME_DESC[locale]?.[cat] || THEME_DESC.ro[cat];
  const title = `${label} — Blog Neofort BIZ`;
  const canonical = `${BASE}/${locale}${CAT_PATHS[cat][locale]}`;
  return {
    title, description: desc,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}${CAT_PATHS[cat][l]}`])),
        'x-default': `${BASE}/ro${CAT_PATHS[cat].ro}`,
      },
    },
    openGraph: {
      type: 'website', title, description: desc, url: canonical,
      images: [{ url: `${BASE}/og/BLOG.jpg`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function CategoryPage({ params }) {
  const { locale, cat } = await params;
  if (!THEMES.includes(cat)) notFound();

  const t = UI[locale] || UI.ro;
  const label = THEME_LABELS[locale]?.[cat] || THEME_LABELS.ro[cat];
  const desc  = THEME_DESC[locale]?.[cat] || THEME_DESC.ro[cat];
  const items = getThemeArticles(ARTICLES, cat);
  const url = `${BASE}/${locale}${CAT_PATHS[cat][locale]}`;

  const collectionSchema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    "name": label, "description": desc, "url": url, "inLanguage": locale,
    "isPartOf": { "@type": "Blog", "@id": `${BASE}/${locale}/blog#blog` },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": items.length,
      "itemListElement": items.map((a, i) => ({
        "@type": "ListItem", "position": i + 1,
        "url": `${BASE}/${locale}/blog/${a.slugs[locale] || a.slugs.ro}`,
        "name": a.title?.[locale] || a.title?.ro,
      })),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type":"ListItem", "position":1, "name": t.home, "item": `${BASE}/${locale}` },
      { "@type":"ListItem", "position":2, "name": t.blog, "item": `${BASE}/${locale}/blog` },
      { "@type":"ListItem", "position":3, "name": label, "item": url },
    ],
  };

  return (
    <main style={{ maxWidth: 1180, margin: '0 auto', padding: '110px 20px 80px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb vizibil */}
      <nav aria-label="breadcrumb" style={{ fontSize: '.75rem', letterSpacing: '.08em', textTransform: 'uppercase', color: '#999', marginBottom: 24 }}>
        <a href={`/${locale}`} style={{ color: '#999', textDecoration: 'none' }}>{t.home}</a>
        <span style={{ margin: '0 8px' }}>/</span>
        <a href={`/${locale}/blog`} style={{ color: '#999', textDecoration: 'none' }}>{t.blog}</a>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: '#1a1a1a' }}>{label}</span>
      </nav>

      <h1 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 500, fontSize: '2.2rem', color: '#1a1a1a', margin: '0 0 10px', letterSpacing: '.01em' }}>
        {label}
      </h1>
      <p style={{ fontSize: '.95rem', lineHeight: 1.65, color: '#595959', maxWidth: 720, margin: '0 0 12px' }}>{desc}</p>
      <div style={{ fontSize: '.78rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#999', marginBottom: 40 }}>
        {items.length} {items.length === 1 ? t.count[0] : t.count[1]}
      </div>

      {/* Grid articole — server-rendered, crawlabil */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }} role="list">
        {items.map(a => {
          const slug = a.slugs[locale] || a.slugs.ro;
          const title = a.title?.[locale] || a.title?.ro;
          const excerpt = a.excerpt?.[locale] || a.excerpt?.ro;
          const img = a.image?.[locale] || a.image?.ro;
          const date = a.dateDisplay?.[locale] || a.dateDisplay?.ro;
          const rt = a.readTime?.[locale] || a.readTime?.ro;
          return (
            <a key={a.slugs.ro} href={`/${locale}/blog/${slug}`} role="listitem" aria-label={title}
               style={{ display: 'block', background: '#fff', border: '1px solid #eee', borderRadius: 2, overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: a.imageBg || '#1a1a1a' }}>
                {img && (
                  <img src={img} alt={a.imageLabel || title} loading="lazy" decoding="async"
                       style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} />
                )}
              </div>
              <div style={{ padding: '18px 20px 22px' }}>
                <div style={{ fontSize: '.68rem', letterSpacing: '.12em', textTransform: 'uppercase', color: a.accentColor || '#e8721c', marginBottom: 8 }}>
                  {a.category?.[locale] || a.category?.ro} · {date} · {rt}
                </div>
                <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 500, fontSize: '1.12rem', lineHeight: 1.3, color: '#1a1a1a', margin: '0 0 8px' }}>{title}</h2>
                <p style={{ fontSize: '.83rem', lineHeight: 1.55, color: '#595959', margin: '0 0 10px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{excerpt}</p>
                <span style={{ fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase', color: '#1a1a1a', fontWeight: 600 }}>{t.read}</span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Link inapoi la toate articolele */}
      <div style={{ marginTop: 48 }}>
        <a href={`/${locale}/blog`} style={{ fontSize: '.78rem', letterSpacing: '.14em', textTransform: 'uppercase', color: '#e8721c', textDecoration: 'none', fontWeight: 600 }}>
          ← {t.all}
        </a>
      </div>
    </main>
  );
}
