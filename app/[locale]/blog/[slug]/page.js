import { Link } from '../../../../i18n/navigation';
import { ARTICLES, getArticle, getSlugForLocale, getAllLocaleSlugPairs } from '../../../../data/blog.js';
import { notFound } from 'next/navigation';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

export function generateStaticParams() {
  return getAllLocaleSlugPairs();
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const title = a.title[locale] || a.title.ro;
  const desc  = a.metaDesc?.[locale] || a.excerpt[locale] || a.excerpt.ro;
  const mySlug = a.slugs[locale] || a.slugs.ro;
  return {
    title: `${title} | Neofort BIZ`,
    description: desc,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
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
      images: [{ url: `${BASE}/og-neofort.jpg`, width: 1200, height: 630 }],
    },
  };
}

// Renderer Markdown → React simplu
function renderMarkdown(md) {
  const lines = md.split('\n');
  const elements = [];
  let i = 0;
  let key = 0;

  const inlineFormat = (text) => {
    const parts = [];
    let remaining = text;
    let k = 0;
    while (remaining.length > 0) {
      const boldMatch = remaining.match(/^(.*?)\*\*(.+?)\*\*(.*)/s);
      if (boldMatch) {
        if (boldMatch[1]) parts.push(boldMatch[1]);
        parts.push(<strong key={k++}>{boldMatch[2]}</strong>);
        remaining = boldMatch[3];
      } else {
        parts.push(remaining);
        break;
      }
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
      // Tabel
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!lines[i].match(/^\|[-\s|]+\|$/)) {
          const cells = lines[i].split('|').filter((c,idx,arr) => idx>0 && idx<arr.length-1).map(c=>c.trim());
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
    } else if (line.trim() === '') {
      // skip blank lines
    } else if (line.trim()) {
      elements.push(<p key={key++} style={{fontSize:'.87rem',color:'#555',lineHeight:1.8,margin:'.75rem 0'}}>{inlineFormat(line)}</p>);
    }
    i++;
  }
  return elements;
}

export default async function BlogArticlePage({ params }) {
  const { locale, slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const title   = a.title[locale]   || a.title.ro;
  const excerpt = a.excerpt[locale] || a.excerpt.ro;
  const cat     = a.category[locale]|| a.category.ro;
  const rt      = a.readTime[locale]|| a.readTime.ro;
  const date    = a.dateDisplay[locale]||a.dateDisplay.ro;
  const content = a.content[locale] || a.content.ro;
  const mySlug  = a.slugs[locale]   || a.slugs.ro;

  const elements = renderMarkdown(content);

  const schema = {
    "@context":"https://schema.org",
    "@type":"BlogPosting",
    "headline": title,
    "description": a.metaDesc?.[locale] || excerpt,
    "url": `${BASE}/${locale}/blog/${mySlug}`,
    "datePublished": a.date,
    "dateModified": a.date,
    "inLanguage": locale,
    "author": { "@type":"Organization","name":"Neofort BIZ","url":BASE },
    "publisher": { "@type":"Organization","name":"Neofort BIZ","url":BASE,"logo":{"@type":"ImageObject","url":`${BASE}/Neofort.avif`} },
    "image": { "@type":"ImageObject","url":`${BASE}/og-neofort.jpg`,"width":1200,"height":630 },
    "mainEntityOfPage": { "@type":"WebPage","@id":`${BASE}/${locale}/blog/${mySlug}` },
  };

  const related = ARTICLES.filter(r => r.slugs.ro !== a.slugs.ro).slice(0,3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>

      {/* BREADCRUMB */}
      <div style={{background:'#f7f7f5',borderBottom:'1px solid #e8e8e8',padding:'10px 0'}}>
        <div className="container">
          <nav aria-label="breadcrumb" style={{display:'flex',alignItems:'center',gap:'6px',flexWrap:'wrap'}}>
            <Link href="/" style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.1em',color:'#bbb',textDecoration:'none'}}>Acasă</Link>
            <span style={{color:'#ddd',fontSize:'.7rem'}}>›</span>
            <Link href="/blog" style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.1em',color:'#bbb',textDecoration:'none'}}>Blog</Link>
            <span style={{color:'#ddd',fontSize:'.7rem'}}>›</span>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.1em',color:'#999'}}>{cat}</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <div style={{background: a.imageBg || '#1a1a1a', padding:'56px 0 48px'}}>
        <div className="container" style={{maxWidth:'780px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'16px',flexWrap:'wrap'}}>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.62rem',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,0.5)',background:'rgba(255,255,255,0.1)',padding:'4px 10px',borderRadius:'2px'}}>{cat}</span>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.1em',color:'rgba(255,255,255,0.4)'}}>{date}</span>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.1em',color:'rgba(255,255,255,0.4)'}}>{rt}</span>
          </div>
          <h1 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.5rem,4vw,2.1rem)',color:'#fff',lineHeight:1.25,letterSpacing:'.01em',marginBottom:'20px'}}>{title}</h1>
          <p style={{fontSize:'.9rem',color:'rgba(255,255,255,0.7)',lineHeight:1.7,maxWidth:'640px'}}>{excerpt}</p>
        </div>
      </div>

      {/* CONȚINUT */}
      <div style={{background:'#fff',padding:'48px 0 64px'}}>
        <div style={{maxWidth:'780px',margin:'0 auto',padding:'0 24px'}}>

          {/* Hreflang notice pentru alte limbi */}
          <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'32px',padding:'12px 16px',background:'#f7f7f5',borderLeft:`3px solid ${a.accentColor}`}}>
            {LOCALES.filter(l=>l!==locale).map(l=>(
              <Link key={l} href={`/blog/${a.slugs[l] || a.slugs.ro}`} locale={l}
                style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.12em',textTransform:'uppercase',color:'#888',textDecoration:'none',padding:'3px 8px',border:'1px solid #e0e0e0',background:'#fff'}}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>

          {elements}

          {/* CTA */}
          <div style={{background:'#1a1a1a',padding:'32px',marginTop:'48px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'20px'}}>
            <div>
              <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.05rem',color:'#fff',marginBottom:'4px',letterSpacing:'.02em'}}>Neofort BIZ — Consultanță gratuită</p>
              <p style={{fontSize:'.75rem',color:'#888',marginBottom:0}}>Răspuns în 48 ore · Ofertă personalizată</p>
            </div>
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
              <Link href="/contact" className="btn btn-green" style={{fontSize:'.64rem'}}>SOLICITĂ OFERTĂ</Link>
              <a href="https://wa.me/40752443435" target="_blank" rel="noopener" className="btn" style={{fontSize:'.64rem',borderColor:'#555',color:'#555'}}>WHATSAPP</a>
            </div>
          </div>

          {/* Articole related */}
          {related.length > 0 && (
            <div style={{marginTop:'56px'}}>
              <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.65rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#aaa',marginBottom:'24px'}}>Articole similare</h3>
              <div style={{display:'grid',gap:'16px'}}>
                {related.map(r=>{
                  const rt2 = r.title[locale] || r.title.ro;
                  const rc  = r.category[locale] || r.category.ro;
                  const rSlug = r.slugs[locale] || r.slugs.ro;
                  return (
                    <Link key={r.slugs.ro} href={`/blog/${rSlug}`}
                      style={{textDecoration:'none',display:'block',padding:'16px',border:'1px solid #f0f0f0',background:'#fafafa'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.15em',textTransform:'uppercase',color:r.accentColor,display:'block',marginBottom:'4px'}}>{rc}</span>
                      <span style={{fontSize:'.85rem',color:'#1a1a1a',fontWeight:500}}>{rt2}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Contact sidebar */}
          <div style={{marginTop:'48px',padding:'24px',background:'#f7f7f5',borderTop:`3px solid ${a.accentColor}`}}>
            <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.6rem',letterSpacing:'.15em',textTransform:'uppercase',color:'#aaa',marginBottom:'12px'}}>Contact direct</p>
            <a href="tel:+40752443435" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'1.05rem',color:'#fff',textDecoration:'none',display:'block',marginBottom:'4px',letterSpacing:'.04em',color:'#1a1a1a'}}>+40 752 443 435</a>
            <p style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.65rem',letterSpacing:'.08em',color:'#aaa',marginBottom:'4px'}}>Luni–Vineri · 10:00–18:00</p>
            <a href="mailto:oferte@neofort-biz.ro" style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.7rem',color:'#888',textDecoration:'none',display:'block',marginTop:'8px'}}>oferte@neofort-biz.ro</a>
          </div>

        </div>
      </div>
    </>
  );
}
