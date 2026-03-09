import { Link } from '../../../i18n/navigation';
import { ARTICLES } from '../../../data/blog.js';

const BASE = 'https://www.neofort-biz.ro';

const META = {
  ro: { title:'Blog Tâmplărie PVC & Aluminiu — Ghiduri Tehnice | Neofort BIZ', desc:'Ghiduri tehnice, comparații și sfaturi despre tâmplărie PVC Salamander, aluminiu Alumil, izolare nZEB, precadre Blaugelb și sisteme de umbrire Raffstore.' },
  en: { title:'PVC & Aluminium Windows Blog — Technical Guides | Neofort BIZ', desc:'Technical guides, comparisons and tips about Salamander PVC windows, Alumil aluminium, nZEB insulation and Raffstore shading systems.' },
  de: { title:'PVC & Aluminiumfenster Blog — Technische Leitfäden | Neofort BIZ', desc:'Technische Leitfäden, Vergleiche und Tipps zu Salamander PVC-Fenstern, Alumil-Aluminium, nZEB-Dämmung und Raffstore.' },
  fr: { title:'Blog Menuiserie PVC & Aluminium — Guides Techniques | Neofort BIZ', desc:'Guides techniques, comparaisons et conseils sur la menuiserie PVC Salamander, aluminium Alumil, isolation nZEB et stores Raffstore.' },
  es: { title:'Blog Carpintería PVC & Aluminio — Guías Técnicas | Neofort BIZ', desc:'Guías técnicas, comparaciones y consejos sobre carpintería PVC Salamander, aluminio Alumil, aislamiento nZEB y persianas Raffstore.' },
  it: { title:'Blog Serramenti PVC & Alluminio — Guide Tecniche | Neofort BIZ', desc:'Guide tecniche, confronti e consigli su serramenti PVC Salamander, alluminio Alumil, isolamento nZEB e veneziane Raffstore.' },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.ro;
  return {
    title: m.title, description: m.desc,
    alternates: {
      canonical: `${BASE}/${locale}/blog`,
      languages: Object.fromEntries(['ro','en','de','fr','es','it'].map(l => [l, `${BASE}/${l}/blog`])),
    },
    openGraph: { type:'website', url:`${BASE}/${locale}/blog`, title:m.title, description:m.desc, siteName:'Neofort BIZ', images:[{ url:`${BASE}/og-neofort.jpg`, width:1200, height:630 }] },
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.ro;

  const schema = {
    "@context":"https://schema.org","@type":"Blog",
    "name":"Blog Neofort BIZ — Tâmplărie PVC & Aluminiu",
    "description": m.desc,
    "url":`${BASE}/${locale}/blog`,
    "publisher":{"@type":"Organization","name":"Neofort BIZ","url":BASE,"logo":{"@type":"ImageObject","url":`${BASE}/Neofort.avif`}},
    "blogPost": ARTICLES.map(a => ({
      "@type":"BlogPosting",
      "headline": a.title[locale] || a.title.ro,
      "url":`${BASE}/${locale}/blog/${a.slug}`,
      "datePublished": a.date,
      "description": a.excerpt[locale] || a.excerpt.ro,
      "author":{"@type":"Organization","name":"Neofort BIZ"},
    }))
  };

  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>

      {/* ── RESPONSIVE CSS ── */}
      <style>{`
        /* Blog featured card */
        .blog-featured {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid #e8e8e8;
          background: #fff;
          margin-bottom: 24px;
          transition: border-color .2s, box-shadow .2s;
          text-decoration: none;
        }
        .blog-featured:hover {
          border-color: #c8c8c8;
          box-shadow: 0 4px 24px rgba(0,0,0,.07);
        }
        .blog-featured-img {
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .blog-featured-body {
          padding: 40px 40px 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        /* Blog grid pentru restul articolelor */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .blog-card {
          border: 1px solid #e8e8e8;
          background: #fff;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .blog-card:hover {
          border-color: #c8c8c8;
          box-shadow: 0 4px 20px rgba(0,0,0,.06);
        }
        .blog-card-img {
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }
        .blog-card-body {
          padding: 22px 22px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .blog-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f0f0f0;
          padding-top: 14px;
          margin-top: auto;
        }

        /* ── TABLET ── */
        @media (max-width: 860px) {
          .blog-featured {
            grid-template-columns: 1fr;
          }
          .blog-featured-img {
            min-height: 200px;
          }
          .blog-featured-body {
            padding: 28px 28px 28px;
          }
          .blog-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* ── MOBIL ── */
        @media (max-width: 560px) {
          .blog-featured-body {
            padding: 22px 20px 22px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .blog-card-img {
            height: 130px;
          }
        }
      `}</style>

      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="container">
          <span className="sec-label">Neofort BIZ</span>
          <h1 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.6rem,5vw,2.4rem)',color:'#1a1a1a',marginBottom:'12px',lineHeight:1.15}}>
            Ghiduri tehnice — Tâmplărie PVC & Aluminiu
          </h1>
          <p style={{fontSize:'0.875rem',fontWeight:300,color:'#767676',maxWidth:'560px',lineHeight:1.75}}>
            Comparații, ghiduri de montaj și sfaturi tehnice despre tâmplărie PVC Salamander,
            aluminiu Alumil, izolare nZEB și sisteme de protecție solară.
          </p>
        </div>
      </div>

      {/* ── ARTICOLE ── */}
      <section style={{padding:'56px 0 80px'}}>
        <div className="container">

          {/* FEATURED — primul articol */}
          <Link href={`/blog/${featured.slug}`} className="blog-featured">
            {/* Imagine */}
            <div className="blog-featured-img" style={{background: featured.imageBg}}>
              <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'3.5rem',fontWeight:300,color:'rgba(255,255,255,.15)',letterSpacing:'.06em',textAlign:'center',padding:'0 32px',lineHeight:1.2,userSelect:'none'}}>
                {featured.imageLabel}
              </span>
              <div style={{position:'absolute',bottom:'20px',left:'24px'}}>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.57rem',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.5)',background:'rgba(0,0,0,.35)',padding:'4px 10px'}}>
                  {featured.category[locale] || featured.category.ro}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="blog-featured-body">
              <div>
                <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'16px'}}>
                  <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.18em',textTransform:'uppercase',color:featured.accentColor,fontWeight:500}}>
                    {featured.category[locale] || featured.category.ro}
                  </span>
                  <span style={{width:'3px',height:'3px',borderRadius:'50%',background:'#ddd',display:'inline-block'}}/>
                  <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.1em',color:'#bbb'}}>
                    {featured.readTime[locale] || featured.readTime.ro}
                  </span>
                </div>
                <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.2rem,2.5vw,1.6rem)',color:'#1a1a1a',lineHeight:1.25,marginBottom:'14px'}}>
                  {featured.title[locale] || featured.title.ro}
                </h2>
                <p style={{fontSize:'0.85rem',fontWeight:300,color:'#767676',lineHeight:1.75,marginBottom:'28px'}}>
                  {featured.excerpt[locale] || featured.excerpt.ro}
                </p>
              </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.1em',color:'#bbb'}}>
                  {featured.dateDisplay[locale] || featured.dateDisplay.ro}
                </span>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.65rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#1a1a1a',fontWeight:500,borderBottom:'1px solid #1a1a1a',paddingBottom:'2px'}}>
                  Citește articolul →
                </span>
              </div>
            </div>
          </Link>

          {/* GRID restul articolelor */}
          <div className="blog-grid">
            {rest.map(a => {
              const title   = a.title[locale]    || a.title.ro;
              const excerpt = a.excerpt[locale]  || a.excerpt.ro;
              const cat     = a.category[locale] || a.category.ro;
              const rt      = a.readTime[locale] || a.readTime.ro;
              const date    = a.dateDisplay[locale] || a.dateDisplay.ro;
              return (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="blog-card">
                  <div className="blog-card-img" style={{background: a.imageBg}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'2rem',fontWeight:300,color:'rgba(255,255,255,.15)',letterSpacing:'.06em',userSelect:'none'}}>
                      {a.imageLabel}
                    </span>
                  </div>
                  <div className="blog-card-body">
                    <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'10px'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',letterSpacing:'.16em',textTransform:'uppercase',color:a.accentColor,fontWeight:500}}>{cat}</span>
                      <span style={{width:'3px',height:'3px',borderRadius:'50%',background:'#e0e0e0',display:'inline-block',flexShrink:0}}/>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',color:'#bbb'}}>{rt}</span>
                    </div>
                    <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.05rem',color:'#1a1a1a',lineHeight:1.3,marginBottom:'10px'}}>
                      {title}
                    </h2>
                    <p style={{fontSize:'0.8rem',fontWeight:300,color:'#767676',lineHeight:1.7,flex:1,marginBottom:'16px'}}>
                      {excerpt}
                    </p>
                    <div className="blog-card-footer">
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',color:'#bbb'}}>{date}</span>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#555',fontWeight:500}}>Citește →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
