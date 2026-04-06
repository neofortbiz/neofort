import { Link } from '../../../i18n/navigation';
import { ARTICLES } from '../../../data/blog.js';
import BlogGrid from './BlogGrid';

const BASE    = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

const META = {
  ro: { title:'Blog Tâmplărie PVC & Aluminiu | Neofort BIZ', desc:'Ghiduri tehnice, comparații și sfaturi despre tâmplărie PVC Salamander, aluminiu Alumil, izolare nZEB, precadre Blaugelb și sisteme de umbrire Raffstore.' },
  en: { title:'PVC & Aluminium Blog | Neofort BIZ', desc:'Technical guides, comparisons and tips about Salamander PVC windows, Alumil aluminium, nZEB insulation and Raffstore shading systems.' },
  de: { title:'PVC & Aluminiumfenster Blog | Neofort BIZ', desc:'Technische Leitfäden, Vergleiche und Tipps zu Salamander PVC-Fenstern, Alumil-Aluminium, nZEB-Dämmung und Raffstore.' },
  fr: { title:'Blog Menuiserie PVC & Aluminium | Neofort BIZ', desc:'Guides techniques, comparaisons et conseils sur la menuiserie PVC Salamander, aluminium Alumil, isolation nZEB et stores Raffstore.' },
  es: { title:'Blog Carpintería PVC & Aluminio | Neofort BIZ', desc:'Guías técnicas, comparaciones y consejos sobre carpintería PVC Salamander, aluminio Alumil, aislamiento nZEB y persianas Raffstore.' },
  it: { title:'Blog Serramenti PVC & Alluminio | Neofort BIZ', desc:'Guide tecniche, confronti e consigli su serramenti PVC Salamander, alluminio Alumil, isolamento nZEB e veneziane Raffstore.' },
};

const HERO = {
  ro: {
    label: 'Cunoaștere tehnică · Neofort BIZ',
    h1: 'Ghiduri tehnice despre tâmplărie PVC & aluminiu',
    sub: 'Comparații de profile, sfaturi de montaj, standarde nZEB și tot ce trebuie să știi înainte să alegi ferestre sau uși pentru casa ta.',
  },
  en: {
    label: 'Technical knowledge · Neofort BIZ',
    h1: 'Technical guides on PVC & aluminium windows',
    sub: 'Profile comparisons, installation tips, nZEB standards and everything you need to know before choosing windows or doors for your home.',
  },
  de: {
    label: 'Technisches Wissen · Neofort BIZ',
    h1: 'Technische Leitfäden zu Kunststoff- & Aluminiumfenstern',
    sub: 'Profilvergleiche, Montagetipps, nZEB-Normen und alles, was Sie vor der Wahl von Fenstern oder Türen wissen müssen.',
  },
  fr: {
    label: 'Expertise technique · Neofort BIZ',
    h1: 'Guides techniques sur les menuiseries PVC & aluminium',
    sub: "Comparatifs de profils, conseils de pose, normes nZEB et tout ce qu'il faut savoir avant de choisir vos fenêtres ou portes.",
  },
  es: {
    label: 'Conocimiento técnico · Neofort BIZ',
    h1: 'Guías técnicas sobre carpintería PVC & aluminio',
    sub: 'Comparativas de perfiles, consejos de instalación, normas nZEB y todo lo que necesitas saber antes de elegir ventanas o puertas.',
  },
  it: {
    label: 'Conoscenza tecnica · Neofort BIZ',
    h1: 'Guide tecniche su infissi PVC & alluminio',
    sub: 'Confronto profili, consigli di posa, standard nZEB e tutto ciò che devi sapere prima di scegliere finestre o porte per la tua casa.',
  },
};

const UI = {
  ro: 'Citește →',
  en: 'Read →',
  de: 'Lesen →',
  fr: 'Lire →',
  es: 'Leer →',
  it: 'Leggi →',
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.ro;
  return {
    title: m.title, description: m.desc,
    robots: { index:true, follow:true, googleBot:{ index:true, follow:true, 'max-image-preview':'large', 'max-snippet':-1 } },
    alternates: {
      canonical: `${BASE}/${locale}/blog/`,
      languages: { ...Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/blog`])), 'x-default': `${BASE}/ro/blog/` },
    },
    openGraph: { type:'website', url:`${BASE}/${locale}/blog`, title:m.title, description:m.desc, siteName:'Neofort BIZ', images:[{ url:`${BASE}/og/BLOG.jpg`, width:1200, height:630, type:'image/jpeg' }] },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title:m.title, description:m.desc, images:[`${BASE}/og/BLOG.jpg`] },
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const hero = HERO[locale] || HERO.ro;
  const read = UI[locale]   || UI.ro;

  // Sortare FIFO descrescător — cel mai nou articol primul
  const articles = [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Schema JSON-LD — TOATE articolele indexate (filtrele sunt client-side, nu afecteaza SEO)
  const schema = {
    "@context":"https://schema.org","@type":"Blog",
    "name": META[locale]?.title || META.ro.title,
    "description": META[locale]?.desc || META.ro.desc,
    "url":`${BASE}/${locale}/blog`,
    "publisher":{"@type":"Organization","name":"Neofort BIZ","url":BASE,
      "logo":{"@type":"ImageObject","url":`${BASE}/Neofort.jpg`}},
    "blogPost": articles.map(a => ({
      "@type":"BlogPosting",
      "headline": a.title[locale] || a.title.ro,
      "url":`${BASE}/${locale}/blog/${a.slugs?.[locale] || a.slugs?.ro}/`,
      "datePublished": a.date,
      "description": a.excerpt[locale] || a.excerpt.ro,
      "author":{"@type":"Organization","name":"Neofort BIZ"},
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>

      {/* ── HERO EDITORIAL — Server Component, SEO maxim ── */}
      <div style={{
        position:'relative',
        background:'linear-gradient(135deg, #111a13 0%, #1a2e1e 50%, #0f1a11 100%)',
        overflow:'hidden',
        minHeight:'300px',
        display:'flex', flexDirection:'column', justifyContent:'flex-end',
      }}>
        <img
          src="/blog-hero.avif"
          alt={hero.h1}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.18,display:'block'}}
        />
        <div style={{position:'absolute',inset:0,
          backgroundImage:'linear-gradient(rgba(74,124,89,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,89,.06) 1px, transparent 1px)',
          backgroundSize:'60px 60px',
        }}/>
        <div style={{position:'absolute',left:0,top:0,bottom:0,width:'3px',background:'#4a7c59'}}/>
        <div style={{position:'relative',zIndex:2,padding:'48px 0 40px'}}>
          <div className="container" style={{maxWidth:'1100px'}}>
            <span style={{
              fontFamily:'Barlow Condensed,sans-serif', fontWeight:400,
              fontSize:'.58rem', letterSpacing:'.22em', textTransform:'uppercase',
              color:'#4a7c59', display:'block', marginBottom:'14px',
            }}>{hero.label}</span>
            <h1 style={{
              fontFamily:'Barlow Condensed,sans-serif', fontWeight:600,
              fontSize:'clamp(1.5rem,4vw,2.4rem)',
              color:'#fff', lineHeight:1.15, letterSpacing:'.01em',
              maxWidth:'700px', margin:'0 0 14px',
            }}>{hero.h1}</h1>
            <p style={{
              fontSize:'.86rem', color:'rgba(255,255,255,.5)',
              lineHeight:1.7, maxWidth:'560px', margin:0,
            }}>{hero.sub}</p>
          </div>
        </div>
      </div>

      {/* ── FILTRE + GRID — Client Component ── */}
      {/* 
        IMPORTANT SEO: Toate articolele sunt in schema JSON-LD de mai sus (server-side).
        Client Component-ul filtreaza doar vizual — crawlerele vad tot continutul.
      */}
      <BlogGrid articles={articles} locale={locale} read={read} />
    </>
  );
}
