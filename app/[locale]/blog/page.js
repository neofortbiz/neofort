import { Link } from '../../../i18n/navigation';
import { ARTICLES } from '../../../data/blog.js';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

const META = {
  ro: { title:'Blog Tâmplărie PVC & Aluminiu — Ghiduri Tehnice | Neofort BIZ', desc:'Ghiduri tehnice, comparații și sfaturi despre tâmplărie PVC Salamander, aluminiu Alumil, izolare nZEB, precadre Blaugelb și sisteme de umbrire Raffstore.' },
  en: { title:'PVC & Aluminium Windows Blog — Technical Guides | Neofort BIZ', desc:'Technical guides, comparisons and tips about Salamander PVC windows, Alumil aluminium, nZEB insulation and Raffstore shading systems.' },
  de: { title:'PVC & Aluminiumfenster Blog — Technische Leitfäden | Neofort BIZ', desc:'Technische Leitfäden, Vergleiche und Tipps zu Salamander PVC-Fenstern, Alumil-Aluminium, nZEB-Dämmung und Raffstore.' },
  fr: { title:'Blog Menuiserie PVC & Aluminium — Guides Techniques | Neofort BIZ', desc:'Guides techniques, comparaisons et conseils sur la menuiserie PVC Salamander, aluminium Alumil, isolation nZEB et stores Raffstore.' },
  es: { title:'Blog Carpintería PVC & Aluminio — Guías Técnicas | Neofort BIZ', desc:'Guías técnicas, comparaciones y consejos sobre carpintería PVC Salamander, aluminio Alumil, aislamiento nZEB y persianas Raffstore.' },
  it: { title:'Blog Serramenti PVC & Alluminio — Guide Tecniche | Neofort BIZ', desc:'Guide tecniche, confronti e consigli su serramenti PVC Salamander, alluminio Alumil, isolamento nZEB e veneziane Raffstore.' },
};

const UI = {
  ro: { label:'Ghiduri & Analize', h1:'Tâmplărie PVC & Aluminiu', sub:'Ghiduri tehnice, comparații și sfaturi de specialitate.', read:'Citește →' },
  en: { label:'Guides & Analysis', h1:'PVC & Aluminium Windows', sub:'Technical guides, comparisons and specialist advice.', read:'Read →' },
  de: { label:'Leitfäden & Analysen', h1:'Kunststoff- & Aluminiumfenster', sub:'Technische Leitfäden, Vergleiche und Fachberatung.', read:'Lesen →' },
  fr: { label:'Guides & Analyses', h1:'Menuiserie PVC & Aluminium', sub:'Guides techniques, comparaisons et conseils spécialisés.', read:'Lire →' },
  es: { label:'Guías & Análisis', h1:'Carpintería PVC & Aluminio', sub:'Guías técnicas, comparaciones y consejos especializados.', read:'Leer →' },
  it: { label:'Guide & Analisi', h1:'Infissi PVC & Alluminio', sub:'Guide tecniche, confronti e consigli specializzati.', read:'Leggi →' },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.ro;
  return {
    title: m.title, description: m.desc,
    alternates: {
      canonical: `${BASE}/${locale}/blog`,
      languages: Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/blog`])),
    },
    openGraph: { type:'website', url:`${BASE}/${locale}/blog`, title:m.title, description:m.desc, siteName:'Neofort BIZ', images:[{ url:`${BASE}/og-neofort.jpg`, width:1200, height:630 }] },
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const [featured, ...rest] = ARTICLES;

  const schema = {
    "@context":"https://schema.org","@type":"Blog",
    "name":"Blog Neofort BIZ","url":`${BASE}/${locale}/blog`,
    "publisher":{"@type":"Organization","name":"Neofort BIZ","url":BASE},
    "blogPost": ARTICLES.map(a => ({
      "@type":"BlogPosting",
      "headline": a.title[locale] || a.title.ro,
      "url":`${BASE}/${locale}/blog/${a.slugs?.[locale] || a.slugs?.ro}`,
      "datePublished": a.date,
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>

      <style>{`
        .blog-hero-img {
          width: 100%;
          aspect-ratio: 16 / 8;
          object-fit: cover;
          display: block;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #e8e8e8;
          border: 1px solid #e8e8e8;
        }
        .blog-card {
          background: #fff;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: background .18s;
        }
        .blog-card:hover { background: #fafaf8; }
        .blog-card-img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          display: block;
          background: #f0f0ee;
        }
        @media (max-width: 860px) {
          .blog-grid { grid-template-columns: 1fr 1fr; }
          .blog-hero-img { aspect-ratio: 16 / 9; }
        }
        @media (max-width: 540px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <span className="sec-label">{ui.label}</span>
          <h1 className="page-title">{ui.h1}</h1>
          <p className="page-sub">{ui.sub}</p>
        </div>
      </div>

      <div style={{background:'#fff', padding:'0 0 80px'}}>
        <div className="container" style={{maxWidth:'1100px'}}>

          {/* ── ARTICOL FEATURED ── */}
          {featured && (() => {
            const title   = featured.title[locale]    || featured.title.ro;
            const excerpt = featured.excerpt[locale]  || featured.excerpt.ro;
            const cat     = featured.category[locale] || featured.category.ro;
            const date    = featured.dateDisplay[locale] || featured.dateDisplay.ro;
            const rt      = featured.readTime[locale] || featured.readTime.ro;
            const slug    = featured.slugs?.[locale]  || featured.slugs?.ro;
            const img     = featured.image?.[locale]  || featured.image?.ro;
            return (
              <Link href={`/blog/${slug}`}
                style={{display:'block', textDecoration:'none', borderBottom:'1px solid #e8e8e8', marginBottom:'56px'}}>
                {/* Imagine mare */}
                {img ? (
                  <div style={{width:'100%', aspectRatio:'16/7', overflow:'hidden', position:'relative', background: featured.imageBg}}>
                    <img src={img} alt={title}
                      style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block'}}/>
                  </div>
                ) : (
                  <div style={{width:'100%', aspectRatio:'16/7', background: featured.imageBg, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif', fontSize:'4rem', fontWeight:300, color:'rgba(255,255,255,.12)', letterSpacing:'.1em'}}>{featured.imageLabel}</span>
                  </div>
                )}
                {/* Text sub imagine */}
                <div style={{padding:'28px 0 32px', display:'grid', gridTemplateColumns:'1fr auto', gap:'24px', alignItems:'start'}}>
                  <div>
                    <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px', flexWrap:'wrap'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif', fontWeight:600, fontSize:'.56rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#fff', background: featured.accentColor, padding:'3px 10px'}}>{cat}</span>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif', fontSize:'.6rem', letterSpacing:'.1em', color:'#bbb'}}>{date}</span>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif', fontSize:'.6rem', letterSpacing:'.1em', color:'#bbb'}}>{rt}</span>
                    </div>
                    <h2 style={{fontFamily:'Barlow Condensed,sans-serif', fontWeight:600, fontSize:'clamp(1.3rem,3vw,1.9rem)', color:'#1a1a1a', lineHeight:1.2, letterSpacing:'.01em', margin:'0 0 12px'}}>{title}</h2>
                    <p style={{fontSize:'.88rem', color:'#888', lineHeight:1.7, margin:0, maxWidth:'700px'}}>{excerpt}</p>
                  </div>
                  <span style={{fontFamily:'Barlow Condensed,sans-serif', fontSize:'.62rem', letterSpacing:'.14em', textTransform:'uppercase', color: featured.accentColor, whiteSpace:'nowrap', paddingTop:'4px'}}>{ui.read}</span>
                </div>
              </Link>
            );
          })()}

          {/* ── GRID RESTUL ARTICOLELOR ── */}
          {rest.length > 0 && (
            <div className="blog-grid">
              {rest.map(a => {
                const title   = a.title[locale]    || a.title.ro;
                const excerpt = a.excerpt[locale]  || a.excerpt.ro;
                const cat     = a.category[locale] || a.category.ro;
                const date    = a.dateDisplay[locale] || a.dateDisplay.ro;
                const rt      = a.readTime[locale] || a.readTime.ro;
                const slug    = a.slugs?.[locale]  || a.slugs?.ro;
                const img     = a.image?.[locale]  || a.image?.ro;
                return (
                  <Link key={a.slugs.ro} href={`/blog/${slug}`} className="blog-card">
                    {/* Imagine card */}
                    {img ? (
                      <div style={{width:'100%', aspectRatio:'16/9', overflow:'hidden', background: a.imageBg}}>
                        <img src={img} alt={title} className="blog-card-img"/>
                      </div>
                    ) : (
                      <div className="blog-card-img" style={{background: a.imageBg, display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif', fontSize:'2rem', fontWeight:300, color:'rgba(255,255,255,.15)', letterSpacing:'.08em'}}>{a.imageLabel}</span>
                      </div>
                    )}
                    {/* Text card */}
                    <div style={{padding:'20px 22px 24px', flex:1, display:'flex', flexDirection:'column'}}>
                      <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'10px', flexWrap:'wrap'}}>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif', fontWeight:600, fontSize:'.54rem', letterSpacing:'.18em', textTransform:'uppercase', color: a.accentColor}}>{cat}</span>
                        <span style={{color:'#ddd', fontSize:'.5rem'}}>◆</span>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif', fontSize:'.58rem', letterSpacing:'.08em', color:'#bbb'}}>{date}</span>
                      </div>
                      <h3 style={{fontFamily:'Barlow Condensed,sans-serif', fontWeight:600, fontSize:'1rem', color:'#1a1a1a', lineHeight:1.25, letterSpacing:'.01em', margin:'0 0 10px'}}>{title}</h3>
                      <p style={{fontSize:'.78rem', color:'#999', lineHeight:1.65, margin:'0 0 16px', flex:1}}>{excerpt.slice(0,110)}…</p>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif', fontSize:'.56rem', letterSpacing:'.14em', textTransform:'uppercase', color: a.accentColor, marginTop:'auto'}}>{ui.read}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
