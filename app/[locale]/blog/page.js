import { Link } from '../../../i18n/navigation';
import { ARTICLES } from '../../../data/blog.js';

const BASE    = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

const META = {
  ro: { title:'Blog Tâmplărie PVC & Aluminiu — Ghiduri Tehnice | Neofort BIZ', desc:'Ghiduri tehnice, comparații și sfaturi despre tâmplărie PVC Salamander, aluminiu Alumil, izolare nZEB, precadre Blaugelb și sisteme de umbrire Raffstore.' },
  en: { title:'PVC & Aluminium Windows Blog — Technical Guides | Neofort BIZ', desc:'Technical guides, comparisons and tips about Salamander PVC windows, Alumil aluminium, nZEB insulation and Raffstore shading systems.' },
  de: { title:'PVC & Aluminiumfenster Blog — Technische Leitfäden | Neofort BIZ', desc:'Technische Leitfäden, Vergleiche und Tipps zu Salamander PVC-Fenstern, Alumil-Aluminium, nZEB-Dämmung und Raffstore.' },
  fr: { title:'Blog Menuiserie PVC & Aluminium — Guides Techniques | Neofort BIZ', desc:'Guides techniques, comparaisons et conseils sur la menuiserie PVC Salamander, aluminium Alumil, isolation nZEB et stores Raffstore.' },
  es: { title:'Blog Carpintería PVC & Aluminio — Guías Técnicas | Neofort BIZ', desc:'Guías técnicas, comparaciones y consejos sobre carpintería PVC Salamander, aluminio Alumil, aislamiento nZEB y persianas Raffstore.' },
  it: { title:'Blog Serramenti PVC & Alluminio — Guide Tecniche | Neofort BIZ', desc:'Guide tecniche, confronti e consigli su serramenti PVC Salamander, alluminio Alumil, isolamento nZEB e veneziane Raffstore.' },
};

// Hero text per limbă — optimizat SEO pe tema tâmplărie, ferestre, izolare termică
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
    sub: 'Comparatifs de profils, conseils de pose, normes nZEB et tout ce qu\'il faut savoir avant de choisir vos fenêtres ou portes.',
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
    alternates: {
      canonical: `${BASE}/${locale}/blog`,
      languages: Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/blog`])),
    },
    openGraph: { type:'website', url:`${BASE}/${locale}/blog`, title:m.title, description:m.desc, siteName:'Neofort BIZ', images:[{ url:`${BASE}/og/BLOG.avif`, width:1200, height:630, type:'image/avif' }] },
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const hero = HERO[locale] || HERO.ro;
  const read = UI[locale]   || UI.ro;

  // Sortare FIFO descrescător — cel mai nou articol primul
  const articles = [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));

  const schema = {
    "@context":"https://schema.org","@type":"Blog",
    "name": META[locale]?.title || META.ro.title,
    "description": META[locale]?.desc || META.ro.desc,
    "url":`${BASE}/${locale}/blog`,
    "publisher":{"@type":"Organization","name":"Neofort BIZ","url":BASE,
      "logo":{"@type":"ImageObject","url":`${BASE}/Neofort.avif`}},
    "blogPost": articles.map(a => ({
      "@type":"BlogPosting",
      "headline": a.title[locale] || a.title.ro,
      "url":`${BASE}/${locale}/blog/${a.slugs?.[locale] || a.slugs?.ro}`,
      "datePublished": a.date,
      "description": a.excerpt[locale] || a.excerpt.ro,
      "author":{"@type":"Organization","name":"Neofort BIZ"},
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          background: #fff;
          margin-top: 56px;
        }
        .blog-card {
          background: #fff;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          border: 1px solid #efefed;
          transition: border-color .18s, box-shadow .18s;
        }
        .blog-card:hover { border-color: #d8d8d4; box-shadow: 0 4px 20px rgba(0,0,0,.05); }
        @media (max-width: 860px) {
          .blog-grid { grid-template-columns: 1fr 1fr; margin-top: 40px; }
        }
        @media (max-width: 520px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO EDITORIAL ── */}
      <div style={{
        position:'relative',
        background:'linear-gradient(135deg, #111a13 0%, #1a2e1e 50%, #0f1a11 100%)',
        overflow:'hidden',
        minHeight:'340px',
        display:'flex', flexDirection:'column', justifyContent:'flex-end',
      }}>
        {/* Imagine de fundal */}
        <img
          src="/blog-hero.avif"
          alt="Blog tâmplărie PVC aluminiu Neofort BIZ"
          fetchpriority="high"
          decoding="async"
          style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.18,display:'block'}}
        />
        {/* Grilă decorativă subtilă */}
        <div style={{position:'absolute',inset:0,
          backgroundImage:'linear-gradient(rgba(74,124,89,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,89,.06) 1px, transparent 1px)',
          backgroundSize:'60px 60px',
        }}/>
        {/* Accent line stânga */}
        <div style={{position:'absolute',left:0,top:0,bottom:0,width:'3px',background:'#4a7c59'}}/>
        {/* Conținut */}
        <div style={{position:'relative',zIndex:2,padding:'56px 0 48px'}}>
          <div className="container" style={{maxWidth:'1100px'}}>
            <span style={{
              fontFamily:'Barlow Condensed,sans-serif', fontWeight:400,
              fontSize:'.58rem', letterSpacing:'.22em', textTransform:'uppercase',
              color:'#4a7c59', display:'block', marginBottom:'16px',
            }}>{hero.label}</span>
            <h1 style={{
              fontFamily:'Barlow Condensed,sans-serif', fontWeight:600,
              fontSize:'clamp(1.6rem,4vw,2.6rem)',
              color:'#fff', lineHeight:1.15, letterSpacing:'.01em',
              maxWidth:'700px', margin:'0 0 16px',
            }}>{hero.h1}</h1>
            <p style={{
              fontSize:'.88rem', color:'rgba(255,255,255,.5)',
              lineHeight:1.7, maxWidth:'580px', margin:0,
            }}>{hero.sub}</p>
          </div>
        </div>
      </div>

      {/* ── GRID ARTICOLE — toate egale, FIFO descrescător ── */}
      <div style={{background:'#fff', padding:'0 0 80px'}}>
        <div className="container" style={{maxWidth:'1100px'}}>
          <div className="blog-grid">
            {articles.map(a => {
              const title   = a.title[locale]    || a.title.ro;
              const excerpt = a.excerpt[locale]  || a.excerpt.ro;
              const cat     = a.category[locale] || a.category.ro;
              const date    = a.dateDisplay[locale] || a.dateDisplay.ro;
              const rt      = a.readTime[locale] || a.readTime.ro;
              const slug    = a.slugs?.[locale]  || a.slugs?.ro;
              const img     = a.image?.[locale]  || a.image?.ro;

              return (
                <Link key={a.slugs.ro} href={`/blog/${slug}`} className="blog-card">
                  {/* Imagine sau gradient */}
                  {img ? (
                    <div style={{width:'100%',aspectRatio:'1/1',overflow:'hidden',background:a.imageBg||'#1a1a1a',flexShrink:0}}>
                      <img src={img} alt={title}
                        style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                    </div>
                  ) : (
                    <div style={{width:'100%',aspectRatio:'1/1',background:a.imageBg||'#1a1a1a',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'2.2rem',fontWeight:300,color:'rgba(255,255,255,.12)',letterSpacing:'.1em'}}>{a.imageLabel}</span>
                    </div>
                  )}

                  {/* Corp card */}
                  <div style={{padding:'20px 22px 24px',flex:1,display:'flex',flexDirection:'column'}}>
                    {/* Meta */}
                    <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'10px',flexWrap:'wrap'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'.54rem',letterSpacing:'.18em',textTransform:'uppercase',color:a.accentColor||'#4a7c59'}}>{cat}</span>
                      <span style={{color:'#e0e0e0',fontSize:'.4rem'}}>◆</span>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',letterSpacing:'.06em',color:'#bbb'}}>{date}</span>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.56rem',letterSpacing:'.06em',color:'#ccc',marginLeft:'auto'}}>{rt}</span>
                    </div>
                    {/* Titlu */}
                    <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'1rem',color:'#1a1a1a',lineHeight:1.25,letterSpacing:'.01em',margin:'0 0 10px'}}>{title}</h2>
                    {/* Excerpt */}
                    <p style={{fontSize:'.78rem',color:'#999',lineHeight:1.65,margin:'0 0 16px',flex:1}}>{excerpt.slice(0,110)}…</p>
                    {/* CTA */}
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.56rem',letterSpacing:'.14em',textTransform:'uppercase',color:a.accentColor||'#4a7c59'}}>{read}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
