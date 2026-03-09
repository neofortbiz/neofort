import Link from 'next/link';
import { ARTICLES } from '../../../data/blog.js';

const BASE = 'https://www.neofort-biz.ro';

const META = {
  ro: { title:'Blog Tâmplărie PVC & Aluminiu — Ghiduri Tehnice | Neofort BIZ', desc:'Ghiduri tehnice, comparații și sfaturi despre tâmplărie PVC Salamander, aluminiu Alumil, izolare nZEB, precadre Blaugelb și sisteme de umbrire Raffstore. Expert Neofort BIZ București.' },
  en: { title:'PVC & Aluminium Windows Blog — Technical Guides | Neofort BIZ', desc:'Technical guides, comparisons and tips about Salamander PVC, Alumil aluminium, nZEB insulation, Blaugelb precasings and Raffstore shading systems.' },
  de: { title:'PVC & Aluminiumfenster Blog — Technische Leitfäden | Neofort BIZ', desc:'Technische Leitfäden, Vergleiche und Tipps zu Salamander PVC, Alumil-Aluminium, nZEB-Dämmung, Blaugelb-Vorfenstern und Raffstore.' },
  fr: { title:'Blog Menuiserie PVC & Aluminium — Guides Techniques | Neofort BIZ', desc:'Guides techniques, comparaisons et conseils sur menuiseries PVC Salamander, aluminium Alumil, isolation nZEB, précadres Blaugelb et stores Raffstore.' },
  es: { title:'Blog Carpintería PVC & Aluminio — Guías Técnicas | Neofort BIZ', desc:'Guías técnicas, comparaciones y consejos sobre carpintería PVC Salamander, aluminio Alumil, aislamiento nZEB, premarcos Blaugelb y persianas Raffstore.' },
  it: { title:'Blog Serramenti PVC & Alluminio — Guide Tecniche | Neofort BIZ', desc:'Guide tecniche, confronti e consigli su serramenti PVC Salamander, alluminio Alumil, isolamento nZEB, precassonetti Blaugelb e veneziane Raffstore.' },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>

      {/* PAGE HEADER */}
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

      {/* ARTICOLE GRID */}
      <section style={{padding:'64px 0 88px'}}>
        <div className="container">

          {/* ARTICOL FEATURED — primul articol mare */}
          {ARTICLES.slice(0, 1).map(a => {
            const title   = a.title[locale]   || a.title.ro;
            const excerpt = a.excerpt[locale] || a.excerpt.ro;
            const cat     = a.category[locale]|| a.category.ro;
            const rt      = a.readTime[locale]|| a.readTime.ro;
            const date    = a.dateDisplay[locale]||a.dateDisplay.ro;
            return (
              <Link key={a.slug} href={`/${locale}/blog/${a.slug}`} style={{textDecoration:'none',display:'block',marginBottom:'28px'}}>
                <article style={{display:'grid',gridTemplateColumns:'1fr 1fr',border:'1px solid #e8e8e8',background:'#fff',transition:'border-color .2s,box-shadow .2s'}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='#c8c8c8';e.currentTarget.style.boxShadow='0 4px 24px rgba(0,0,0,.07)'}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='#e8e8e8';e.currentTarget.style.boxShadow='none'}}>
                  {/* Imagine */}
                  <div style={{background:a.imageBg,minHeight:'300px',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'3.5rem',fontWeight:300,color:'rgba(255,255,255,.18)',letterSpacing:'.08em',textAlign:'center',padding:'0 32px',lineHeight:1.2}}>{a.imageLabel}</span>
                    <div style={{position:'absolute',bottom:'20px',left:'24px'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.5)',background:'rgba(0,0,0,.3)',padding:'4px 10px'}}>{cat}</span>
                    </div>
                  </div>
                  {/* Text */}
                  <div style={{padding:'40px 40px 36px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <div>
                      <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'18px'}}>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.18em',textTransform:'uppercase',color:a.accentColor,fontWeight:500}}>{cat}</span>
                        <span style={{width:'3px',height:'3px',borderRadius:'50%',background:'#ddd',display:'inline-block'}}/>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.1em',color:'#bbb'}}>{rt}</span>
                      </div>
                      <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.25rem,2.5vw,1.65rem)',color:'#1a1a1a',lineHeight:1.25,marginBottom:'16px'}}>{title}</h2>
                      <p style={{fontSize:'0.85rem',fontWeight:300,color:'#767676',lineHeight:1.75,marginBottom:'32px'}}>{excerpt}</p>
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.1em',color:'#bbb'}}>{date}</span>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.65rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#1a1a1a',fontWeight:500,borderBottom:'1px solid #1a1a1a',paddingBottom:'2px'}}>Citește articolul →</span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}

          {/* RESTUL ARTICOLELOR — grid 3 coloane */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
            {ARTICLES.slice(1).map(a => {
              const title   = a.title[locale]   || a.title.ro;
              const excerpt = a.excerpt[locale] || a.excerpt.ro;
              const cat     = a.category[locale]|| a.category.ro;
              const rt      = a.readTime[locale]|| a.readTime.ro;
              const date    = a.dateDisplay[locale]||a.dateDisplay.ro;
              return (
                <Link key={a.slug} href={`/${locale}/blog/${a.slug}`} style={{textDecoration:'none',display:'flex',flexDirection:'column'}}>
                  <article className="prod-card" style={{flex:1,display:'flex',flexDirection:'column'}}>
                    {/* Imagine card */}
                    <div style={{background:a.imageBg,height:'160px',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',flexShrink:0}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'2.2rem',fontWeight:300,color:'rgba(255,255,255,.18)',letterSpacing:'.08em'}}>{a.imageLabel}</span>
                    </div>
                    {/* Body */}
                    <div style={{padding:'22px 22px 24px',flex:1,display:'flex',flexDirection:'column'}}>
                      <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'10px'}}>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',letterSpacing:'.18em',textTransform:'uppercase',color:a.accentColor,fontWeight:500}}>{cat}</span>
                        <span style={{width:'3px',height:'3px',borderRadius:'50%',background:'#e0e0e0',display:'inline-block',flexShrink:0}}/>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',color:'#bbb'}}>{rt}</span>
                      </div>
                      <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.05rem',color:'#1a1a1a',lineHeight:1.3,marginBottom:'10px'}}>{title}</h2>
                      <p style={{fontSize:'0.8rem',fontWeight:300,color:'#767676',lineHeight:1.7,flex:1,marginBottom:'18px'}}>{excerpt}</p>
                      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'1px solid #f0f0f0',paddingTop:'14px',marginTop:'auto'}}>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',color:'#bbb'}}>{date}</span>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#555',fontWeight:500}}>Citește →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Mobile responsive styles */}
      <style>{`
        @media(max-width:860px){
          .blog-featured-grid{grid-template-columns:1fr!important}
          .blog-featured-grid>div:first-child{min-height:220px!important}
          .blog-sub-grid{grid-template-columns:1fr!important}
        }
        @media(max-width:640px){
          .blog-sub-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </>
  );
}
