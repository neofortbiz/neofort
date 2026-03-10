import { Link } from '../../../../i18n/navigation';
import { ARTICLES, getArticle, getSlugForLocale, getAllLocaleSlugPairs } from '../../../../data/blog.js';
import { notFound } from 'next/navigation';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

// Traduceri UI per limbă
const UI = {
  ro: { breadcrumb_home:'Acasă', related:'Articole similare', read_more:'Citește articolul →', read_short:'Citește →', lang_notice:'Acest articol este disponibil în:' },
  en: { breadcrumb_home:'Home', related:'Related articles', read_more:'Read article →', read_short:'Read →', lang_notice:'This article is available in:' },
  de: { breadcrumb_home:'Startseite', related:'Ähnliche Artikel', read_more:'Artikel lesen →', read_short:'Lesen →', lang_notice:'Dieser Artikel ist verfügbar auf:' },
  fr: { breadcrumb_home:'Accueil', related:'Articles similaires', read_more:"Lire l'article →", read_short:'Lire →', lang_notice:'Cet article est disponible en :' },
  es: { breadcrumb_home:'Inicio', related:'Artículos relacionados', read_more:'Leer artículo →', read_short:'Leer →', lang_notice:'Este artículo está disponible en:' },
  it: { breadcrumb_home:'Home', related:'Articoli correlati', read_more:"Leggi l'articolo →", read_short:'Leggi →', lang_notice:"Questo articolo è disponibile in:" },
};

export function generateStaticParams() {
  return getAllLocaleSlugPairs();
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const title  = a.title[locale]  || a.title.ro;
  const desc   = a.metaDesc?.[locale] || a.excerpt[locale] || a.excerpt.ro;
  const mySlug = a.slugs[locale]  || a.slugs.ro;
  return {
    title: `${title} | Neofort BIZ`,
    description: desc,
    keywords: a.keywords || '',
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
      canonical: `${BASE}/${locale}/blog/${mySlug}`,
      languages: Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/blog/${a.slugs[l] || a.slugs.ro}`])),
    },
    openGraph: {
      type: 'article',
      url: `${BASE}/${locale}/blog/${mySlug}`,
      siteName: 'Neofort BIZ',
      title: `${title} | Neofort BIZ`,
      description: desc,
      images: [{ url: `${BASE}/og-neofort.jpg`, width: 1200, height: 630, alt: title }],
      publishedTime: a.date,
      modifiedTime: a.date,
      locale: locale,
    },
  };
}

// ── Renderer Markdown → React ──────────────────────────────────────────────
function renderMarkdown(md) {
  const lines = md.split('\n');
  const elements = [];
  let i = 0, key = 0;

  const inlineFormat = (text) => {
    const parts = [];
    let remaining = text, k = 0;
    while (remaining.length > 0) {
      const boldMatch = remaining.match(/^(.*?)\*\*(.+?)\*\*(.*)/s);
      if (boldMatch) {
        if (boldMatch[1]) parts.push(boldMatch[1]);
        parts.push(<strong key={k++}>{boldMatch[2]}</strong>);
        remaining = boldMatch[3];
      } else { parts.push(remaining); break; }
    }
    return parts;
  };

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.35rem',color:'#1a1a1a',marginTop:'2.5rem',marginBottom:'1rem',letterSpacing:'.01em'}}>{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.05rem',color:'#1a1a1a',marginTop:'1.75rem',marginBottom:'.6rem',letterSpacing:'.01em'}}>{line.slice(4)}</h3>);
    } else if (line.startsWith('---')) {
      elements.push(<hr key={key++} style={{border:'none',borderTop:'1px solid #e8e8e8',margin:'2rem 0'}}/>);
    } else if (line.startsWith('| ')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!lines[i].match(/^\|[-\s|]+\|$/)) {
          const cells = lines[i].split('|').filter((c,idx,arr)=>idx>0&&idx<arr.length-1).map(c=>c.trim());
          rows.push(cells);
        }
        i++;
      }
      elements.push(
        <div key={key++} style={{overflowX:'auto',margin:'1.5rem 0'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'.82rem'}}>
            <thead>
              <tr>{rows[0]?.map((c,j)=>(<th key={j} style={{textAlign:'left',padding:'8px 12px',background:'#f5f5f3',borderBottom:'2px solid #e0e0e0',fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.78rem',letterSpacing:'.05em',textTransform:'uppercase',color:'#555'}}>{c}</th>))}</tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row,ri)=>(
                <tr key={ri} style={{borderBottom:'1px solid #f0f0f0'}}>
                  {row.map((c,j)=>(<td key={j} style={{padding:'8px 12px',color:'#555',verticalAlign:'top'}} dangerouslySetInnerHTML={{__html:c.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}}/>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.match(/^[-✅⚠️]/) || line.match(/^\d+\. /)) {
      const listItems = [];
      while (i < lines.length && (lines[i].match(/^[-✅⚠️]/) || lines[i].match(/^\d+\. /))) {
        const text = lines[i].replace(/^[-✅⚠️]\s*/, '').replace(/^\d+\.\s*/, '');
        const prefix = lines[i].match(/^(✅|⚠️)/) ? lines[i].match(/^(✅|⚠️)/)[1]+' ' : '';
        listItems.push(<li key={i} style={{marginBottom:'.4rem'}}>{prefix}{inlineFormat(text)}</li>);
        i++;
      }
      elements.push(<ul key={key++} style={{margin:'1rem 0 1rem 1.2rem',padding:0,color:'#555',fontSize:'.87rem',lineHeight:1.7}}>{listItems}</ul>);
      continue;
    } else if (line.startsWith('**') && line.endsWith('**') && !line.slice(2,-2).includes('**')) {
      elements.push(<p key={key++} style={{fontWeight:600,color:'#1a1a1a',fontSize:'.87rem',margin:'.75rem 0 .25rem'}}>{line.slice(2,-2)}</p>);
    } else if (line.trim()) {
      elements.push(<p key={key++} style={{fontSize:'.87rem',color:'#555',lineHeight:1.8,margin:'.75rem 0'}}>{inlineFormat(line)}</p>);
    }
    i++;
  }
  return elements;
}

// ── Componenta principală ──────────────────────────────────────────────────
export default async function BlogArticlePage({ params }) {
  const { locale, slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const ui      = UI[locale] || UI.ro;
  const title   = a.title[locale]   || a.title.ro;
  const excerpt = a.excerpt[locale] || a.excerpt.ro;
  const cat     = a.category[locale]|| a.category.ro;
  const rt      = a.readTime[locale]|| a.readTime.ro;
  const date    = a.dateDisplay[locale] || a.dateDisplay.ro;
  const content = a.content[locale] || a.content.ro;
  const mySlug  = a.slugs[locale]   || a.slugs.ro;

  const elements = renderMarkdown(content);
  const related  = ARTICLES.filter(r => r.slugs.ro !== a.slugs.ro).slice(0, 3);

  // Schema.org BlogPosting + BreadcrumbList
  const articleSchema = {
    "@context":"https://schema.org",
    "@type":"BlogPosting",
    "headline": title,
    "description": a.metaDesc?.[locale] || excerpt,
    "keywords": a.keywords || '',
    "url": `${BASE}/${locale}/blog/${mySlug}`,
    "datePublished": a.date,
    "dateModified": a.date,
    "inLanguage": locale,
    "articleSection": cat,
    "author": { "@type":"Organization","name":"Neofort BIZ","url":BASE },
    "publisher": {
      "@type":"Organization","name":"Neofort BIZ","url":BASE,
      "logo":{"@type":"ImageObject","url":`${BASE}/Neofort.avif`,"width":200,"height":60}
    },
    "image": {"@type":"ImageObject","url":`${BASE}/og-neofort.jpg`,"width":1200,"height":630},
    "mainEntityOfPage": {"@type":"WebPage","@id":`${BASE}/${locale}/blog/${mySlug}`},
  };

  const breadcrumbSchema = {
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Neofort BIZ","item":`${BASE}/${locale}`},
      {"@type":"ListItem","position":2,"name":"Blog","item":`${BASE}/${locale}/blog`},
      {"@type":"ListItem","position":3,"name":title,"item":`${BASE}/${locale}/blog/${mySlug}`},
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>

      {/* BREADCRUMB */}
      <div style={{background:'#f7f7f5',borderBottom:'1px solid #e8e8e8',padding:'10px 0'}}>
        <div className="container">
          <nav aria-label="breadcrumb" style={{display:'flex',alignItems:'center',gap:'6px',flexWrap:'wrap'}}>
            <Link href="/" style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.1em',color:'#bbb',textDecoration:'none'}}>{ui.breadcrumb_home}</Link>
            <span style={{color:'#ddd',fontSize:'.7rem'}}>›</span>
            <Link href="/blog" style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.1em',color:'#bbb',textDecoration:'none'}}>Blog</Link>
            <span style={{color:'#ddd',fontSize:'.7rem'}}>›</span>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.1em',color:'#999'}}>{cat}</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <div style={{background: a.imageBg || '#1a1a1a', padding:'56px 0 48px'}}>
        <div className="container" style={{maxWidth:'900px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'16px',flexWrap:'wrap'}}>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.62rem',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,0.5)',background:'rgba(255,255,255,0.1)',padding:'4px 10px',borderRadius:'2px'}}>{cat}</span>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.1em',color:'rgba(255,255,255,0.4)'}}>{date}</span>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.1em',color:'rgba(255,255,255,0.4)'}}>{rt}</span>
          </div>
          <h1 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.5rem,4vw,2.1rem)',color:'#fff',lineHeight:1.25,letterSpacing:'.01em',marginBottom:'20px'}}>{title}</h1>
          <p style={{fontSize:'.9rem',color:'rgba(255,255,255,0.7)',lineHeight:1.7,maxWidth:'680px'}}>{excerpt}</p>
        </div>
      </div>

      {/* LAYOUT 2 COLOANE: conținut principal + sidebar */}
      <div style={{background:'#fff',padding:'48px 0 64px'}}>
        <div className="container blog-2col" style={{maxWidth:'1100px',display:'grid',gridTemplateColumns:'1fr 280px',gap:'48px',alignItems:'start'}}>

          {/* ── COLOANA PRINCIPALĂ ── */}
          <main>
            {/* Hreflang notice */}
            <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'32px',padding:'12px 16px',background:'#f7f7f5',borderLeft:`3px solid ${a.accentColor}`}}>
              <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.12em',textTransform:'uppercase',color:'#aaa',marginRight:'4px',alignSelf:'center'}}>{ui.lang_notice}</span>
              {LOCALES.filter(l=>l!==locale).map(l=>(
                <Link key={l} href={`/blog/${a.slugs[l] || a.slugs.ro}`} locale={l}
                  style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.12em',textTransform:'uppercase',color:'#888',textDecoration:'none',padding:'3px 8px',border:'1px solid #e0e0e0',background:'#fff'}}>
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* Conținut articol */}
            {elements}

            {/* Articole similare */}
            {related.length > 0 && (
              <div style={{marginTop:'56px',paddingTop:'40px',borderTop:'1px solid #f0f0f0'}}>
                <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.65rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#aaa',marginBottom:'24px'}}>{ui.related}</h3>
                <div style={{display:'grid',gap:'16px',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}>
                  {related.map(r=>{
                    const rt2   = r.title[locale]    || r.title.ro;
                    const rc    = r.category[locale] || r.category.ro;
                    const rex   = r.excerpt[locale]  || r.excerpt.ro;
                    const rSlug = r.slugs[locale]    || r.slugs.ro;
                    return (
                      <Link key={r.slugs.ro} href={`/blog/${rSlug}`}
                        style={{textDecoration:'none',display:'block',padding:'20px',border:'1px solid #f0f0f0',background:'#fafafa',transition:'border-color .15s'}}>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.15em',textTransform:'uppercase',color:r.accentColor,display:'block',marginBottom:'6px'}}>{rc}</span>
                        <span style={{fontSize:'.85rem',color:'#1a1a1a',fontWeight:500,display:'block',marginBottom:'8px',lineHeight:1.4}}>{rt2}</span>
                        <p style={{fontSize:'.75rem',color:'#888',lineHeight:1.6,margin:0}}>{rex.slice(0,100)}…</p>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.12em',textTransform:'uppercase',color:r.accentColor,display:'block',marginTop:'12px'}}>{ui.read_more}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </main>

          {/* ── SIDEBAR ── */}
          <aside className="blog-sidebar" style={{position:'sticky',top:'80px'}}>

            {/* Card: Toate limbile disponibile */}
            <div style={{padding:'20px',background:'#f7f7f5',marginBottom:'16px',borderTop:`3px solid ${a.accentColor}`}}>
              <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.6rem',letterSpacing:'.15em',textTransform:'uppercase',color:'#aaa',marginBottom:'12px'}}>{ui.lang_notice}</p>
              {LOCALES.map(l=>{
                const lSlug = a.slugs[l] || a.slugs.ro;
                const isActive = l === locale;
                return (
                  <Link key={l} href={`/blog/${lSlug}`} locale={l}
                    style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:'1px solid #ebebeb',textDecoration:'none'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.67rem',letterSpacing:'.1em',textTransform:'uppercase',color: isActive ? '#1a1a1a' : '#888',fontWeight: isActive ? 500 : 300}}>{l.toUpperCase()}</span>
                    {isActive && <span style={{fontSize:'.55rem',color:a.accentColor,letterSpacing:'.08em'}}>●</span>}
                  </Link>
                );
              })}
            </div>

            {/* Card: Alte articole */}
            {related.length > 0 && (
              <div style={{padding:'20px',background:'#f7f7f5',marginBottom:'16px',borderTop:'3px solid #e0e0e0'}}>
                <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.6rem',letterSpacing:'.15em',textTransform:'uppercase',color:'#aaa',marginBottom:'12px'}}>{ui.related}</p>
                {related.map(r=>{
                  const rt2   = r.title[locale]    || r.title.ro;
                  const rSlug = r.slugs[locale]    || r.slugs.ro;
                  return (
                    <Link key={r.slugs.ro} href={`/blog/${rSlug}`}
                      style={{display:'block',padding:'10px 0',borderBottom:'1px solid #ebebeb',textDecoration:'none'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.1em',textTransform:'uppercase',color:r.accentColor,display:'block',marginBottom:'3px'}}>{r.category[locale]||r.category.ro}</span>
                      <span style={{fontSize:'.78rem',color:'#1a1a1a',fontWeight:400,lineHeight:1.4}}>{rt2}</span>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',letterSpacing:'.1em',color:r.accentColor,display:'block',marginTop:'4px'}}>{ui.read_short}</span>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Card: Servicii interne — linkuri SEO relevante */}
            <div style={{padding:'20px',background:'#1a1a1a',marginBottom:'16px'}}>
              <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.6rem',letterSpacing:'.15em',textTransform:'uppercase',color:'#555',marginBottom:'12px'}}>Neofort BIZ</p>
              {[
                {href:'/tamplarie-pvc',label:{ro:'Tâmplărie PVC Salamander',en:'PVC Windows Salamander',de:'Kunststofffenster Salamander',fr:'Menuiserie PVC Salamander',es:'Carpintería PVC Salamander',it:'Infissi PVC Salamander'}},
                {href:'/tamplarie-aluminiu',label:{ro:'Tâmplărie Aluminiu Alumil',en:'Aluminium Windows Alumil',de:'Aluminiumfenster Alumil',fr:'Menuiserie Aluminium Alumil',es:'Carpintería Aluminio Alumil',it:'Infissi Alluminio Alumil'}},
                {href:'/accesorii',label:{ro:'Accesorii Tâmplărie',en:'Window Accessories',de:'Fensterzubehör',fr:'Accessoires menuiserie',es:'Accesorios carpintería',it:'Accessori infissi'}},
                {href:'/servicii',label:{ro:'Servicii Montaj',en:'Installation Services',de:'Montagedienstleistungen',fr:'Services de pose',es:'Servicios instalación',it:'Servizi installazione'}},
              ].map(item=>(
                <Link key={item.href} href={item.href}
                  style={{display:'block',padding:'9px 0',borderBottom:'1px solid #252525',textDecoration:'none',fontFamily:'Barlow Condensed,sans-serif',fontSize:'.67rem',letterSpacing:'.08em',textTransform:'uppercase',color:'#888',transition:'color .15s'}}>
                  {item.label[locale] || item.label.ro}
                </Link>
              ))}
              <Link href="/contact"
                style={{display:'block',marginTop:'16px',fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.64rem',letterSpacing:'.18em',textTransform:'uppercase',color:'#fff',textDecoration:'none',padding:'10px 0',borderTop:'1px solid #333',textAlign:'center'}}>
                {{'ro':'SOLICITĂ OFERTĂ','en':'REQUEST QUOTE','de':'ANGEBOT ANFRAGEN','fr':'DEMANDER DEVIS','es':'PEDIR PRESUPUESTO','it':'RICHIEDI PREVENTIVO'}[locale] || 'SOLICITĂ OFERTĂ'} →
              </Link>
            </div>

          </aside>
        </div>
      </div>

      {/* CSS responsive pentru layout 2 coloane */}
      <style>{`
        @media (max-width: 768px) {
          .blog-article-grid {
            grid-template-columns: 1fr !important;
          }
          .blog-article-sidebar {
            position: static !important;
          }
        }
      `}</style>
    </>
  );
}
