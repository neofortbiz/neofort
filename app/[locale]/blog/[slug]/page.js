import { Link } from '../../../../i18n/navigation';
import { ARTICLES, getArticle, getAllSlugs } from '../../../../data/blog.js';
import { notFound } from 'next/navigation';

const BASE = 'https://www.neofort-biz.ro';

export async function generateStaticParams() {
  const locales = ['ro','en','de','fr','es','it'];
  const slugs = getAllSlugs();
  return locales.flatMap(locale => slugs.map(slug => ({ locale, slug })));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const title = a.title[locale] || a.title.ro;
  const desc  = a.metaDesc?.[locale] || a.metaDesc?.ro || (a.excerpt[locale] || a.excerpt.ro);
  return {
    title: `${title} | Neofort BIZ`,
    description: desc,
    keywords: a.keywords || '',
    alternates: {
      canonical: `${BASE}/${locale}/blog/${slug}`,
      languages: Object.fromEntries(['ro','en','de','fr','es','it'].map(l=>[l,`${BASE}/${l}/blog/${slug}`])),
    },
    openGraph: {
      type:'article', url:`${BASE}/${locale}/blog/${slug}`,
      title:`${title} | Neofort BIZ`, description: desc,
      publishedTime: a.date, authors:['https://www.neofort-biz.ro'],
      siteName:'Neofort BIZ',
      images:[{ url:`${BASE}/og-neofort.jpg`, width:1200, height:630 }],
    },
  };
}

// ── Renderer Markdown simplu (fără dependențe externe) ────────────────────
function renderMarkdown(md) {
  if (!md) return [];
  const lines = md.trim().split('\n');
  const elements = [];
  let i = 0;

  const inlineFormat = (text) => {
    // Bold **text**
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#1a1a1a;font-weight:500">$1</strong>');
    // Links [text](url) — not needed here but safe
    return text;
  };

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith('## ')) {
      elements.push({ type:'h2', text: line.slice(3) });
      i++; continue;
    }
    // H3
    if (line.startsWith('### ')) {
      elements.push({ type:'h3', text: line.slice(4) });
      i++; continue;
    }
    // HR
    if (line.trim() === '---') {
      elements.push({ type:'hr' });
      i++; continue;
    }
    // Table (detectare simplă)
    if (line.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        const row = lines[i].split('|').filter((c,idx,arr)=>idx>0&&idx<arr.length-1).map(c=>c.trim());
        if (!row.join('').match(/^[-: ]+$/)) rows.push(row);
        i++;
      }
      elements.push({ type:'table', rows });
      continue;
    }
    // List item ✅ ⚠️ sau -
    if (line.match(/^[✅⚠️\-\*] /)) {
      const items = [];
      while (i < lines.length && lines[i].match(/^[✅⚠️\-\*] /)) {
        items.push({ text: lines[i].slice(2), icon: lines[i][0] });
        i++;
      }
      elements.push({ type:'list', items });
      continue;
    }
    // Numbered list
    if (line.match(/^\d+\. /)) {
      const items = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        items.push(lines[i].replace(/^\d+\. /,''));
        i++;
      }
      elements.push({ type:'numlist', items });
      continue;
    }
    // Empty line
    if (line.trim() === '') { i++; continue; }
    // Paragraph
    const paraLines = [];
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('#') && !lines[i].startsWith('|') && lines[i].trim() !== '---') {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length) elements.push({ type:'p', text: paraLines.join(' ') });
  }
  return elements;
}

function ContentBlock({ elements }) {
  return elements.map((el, idx) => {
    if (el.type === 'h2') return (
      <h2 key={idx} style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.15rem,3vw,1.5rem)',color:'#1a1a1a',marginTop:'48px',marginBottom:'16px',lineHeight:1.25,paddingBottom:'10px',borderBottom:'1px solid #e8e8e8'}}>
        {el.text}
      </h2>
    );
    if (el.type === 'h3') return (
      <h3 key={idx} style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.0rem',color:'#1a1a1a',marginTop:'28px',marginBottom:'10px',letterSpacing:'.03em'}}>
        {el.text}
      </h3>
    );
    if (el.type === 'hr') return (
      <hr key={idx} style={{border:'none',borderTop:'1px solid #e8e8e8',margin:'36px 0'}}/>
    );
    if (el.type === 'p') return (
      <p key={idx} style={{fontSize:'0.875rem',fontWeight:300,color:'#767676',lineHeight:1.8,marginBottom:'16px',textAlign:'justify'}}
        dangerouslySetInnerHTML={{ __html: el.text.replace(/\*\*(.+?)\*\*/g,'<strong style="color:#1a1a1a;font-weight:500">$1</strong>') }}
      />
    );
    if (el.type === 'list') return (
      <ul key={idx} style={{listStyle:'none',padding:0,marginBottom:'16px'}}>
        {el.items.map((item,j) => (
          <li key={j} style={{display:'flex',alignItems:'flex-start',gap:'8px',fontSize:'0.85rem',fontWeight:300,color:'#767676',lineHeight:1.7,padding:'4px 0',borderBottom:'1px solid #f5f5f5'}}>
            <span style={{flexShrink:0,marginTop:'1px'}}>{item.icon}</span>
            <span dangerouslySetInnerHTML={{ __html: item.text.replace(/\*\*(.+?)\*\*/g,'<strong style="color:#1a1a1a;font-weight:500">$1</strong>') }}/>
          </li>
        ))}
      </ul>
    );
    if (el.type === 'numlist') return (
      <ol key={idx} style={{listStyle:'none',padding:0,marginBottom:'16px',counterReset:'neolist'}}>
        {el.items.map((item,j) => (
          <li key={j} style={{display:'flex',alignItems:'flex-start',gap:'14px',fontSize:'0.85rem',fontWeight:300,color:'#767676',lineHeight:1.7,padding:'8px 0',borderBottom:'1px solid #f5f5f5'}}>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'0.9rem',color:'#1a1a1a',flexShrink:0,minWidth:'20px'}}>{j+1}.</span>
            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g,'<strong style="color:#1a1a1a;font-weight:500">$1</strong>') }}/>
          </li>
        ))}
      </ol>
    );
    if (el.type === 'table') return (
      <div key={idx} style={{overflowX:'auto',marginBottom:'24px'}}>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.8rem'}}>
          <thead>
            <tr>
              {el.rows[0]?.map((cell,j) => (
                <th key={j} style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'0.72rem',letterSpacing:'.1em',textTransform:'uppercase',color:'#1a1a1a',padding:'10px 14px',borderBottom:'2px solid #1a1a1a',textAlign:'left',whiteSpace:'nowrap',background:'#f7f7f5'}}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {el.rows.slice(1).map((row,ri) => (
              <tr key={ri} style={{borderBottom:'1px solid #ebebeb',background:ri%2===0?'#fff':'#fafafa'}}>
                {row.map((cell,ci) => (
                  <td key={ci} style={{padding:'9px 14px',fontWeight:ci===0?400:300,color:ci===0?'#1a1a1a':'#767676',verticalAlign:'middle'}}
                    dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.+?)\*\*/g,'<strong style="color:#1a1a1a;font-weight:500">$1</strong>') }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    return null;
  });
}

export default async function ArticlePage({ params }) {
  const { locale, slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const title   = a.title[locale]   || a.title.ro;
  const excerpt = a.excerpt[locale] || a.excerpt.ro;
  const cat     = a.category[locale]|| a.category.ro;
  const rt      = a.readTime[locale]|| a.readTime.ro;
  const date    = a.dateDisplay[locale]||a.dateDisplay.ro;
  const content = a.content_ro; // tot conținutul e RO, viitor: a.content?.[locale] || a.content_ro
  const elements = renderMarkdown(content);

  // Schema Article pentru Google
  const schema = {
    "@context":"https://schema.org",
    "@type":"Article",
    "headline": title,
    "description": a.metaDesc?.[locale] || a.metaDesc?.ro || excerpt,
    "url": `${BASE}/${locale}/blog/${slug}`,
    "datePublished": a.date,
    "dateModified": a.date,
    "author":{"@type":"Organization","name":"Neofort BIZ","url":BASE},
    "publisher":{"@type":"Organization","name":"Neofort BIZ","url":BASE,"logo":{"@type":"ImageObject","url":`${BASE}/Neofort.avif`}},
    "image":{"@type":"ImageObject","url":`${BASE}/og-neofort.jpg`,"width":1200,"height":630},
    "keywords": a.keywords,
    "inLanguage": locale,
    "isPartOf":{"@type":"Blog","url":`${BASE}/${locale}/blog`},
    "breadcrumb":{"@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"Acasă","item":`${BASE}/${locale}`},
      {"@type":"ListItem","position":2,"name":"Blog","item":`${BASE}/${locale}/blog`},
      {"@type":"ListItem","position":3,"name":title,"item":`${BASE}/${locale}/blog/${slug}`},
    ]},
  };

  // Articole recomandate (celelalte 3)
  const related = ARTICLES.filter(x => x.slug !== slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>

      {/* ── BREADCRUMB ── */}
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

      {/* ── ARTICLE HEADER ── */}
      <div style={{background:a.imageBg,padding:'56px 0 52px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.45)'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'18px'}}>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:a.accentColor,fontWeight:500,background:'rgba(255,255,255,.07)',padding:'4px 10px',border:`1px solid ${a.accentColor}40`}}>{cat}</span>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',color:'rgba(255,255,255,.45)',letterSpacing:'.1em'}}>{rt}</span>
            <span style={{width:'3px',height:'3px',borderRadius:'50%',background:'rgba(255,255,255,.2)',display:'inline-block'}}/>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',color:'rgba(255,255,255,.45)',letterSpacing:'.1em'}}>{date}</span>
          </div>
          <h1 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.5rem,4.5vw,2.4rem)',color:'#fff',lineHeight:1.2,maxWidth:'760px',marginBottom:'18px'}}>
            {title}
          </h1>
          <p style={{fontSize:'0.9rem',fontWeight:300,color:'rgba(255,255,255,.7)',maxWidth:'600px',lineHeight:1.7}}>
            {excerpt}
          </p>
        </div>
      </div>

      {/* ── CONTENT + SIDEBAR ── */}
      <div className="container" style={{padding:'0 40px'}}>
        <div className="article-layout" style={{display:'grid',gridTemplateColumns:'1fr 300px',gap:'60px',alignItems:'start',padding:'56px 0 80px'}}>

          {/* ARTICOL CONTENT */}
          <article>
            <ContentBlock elements={elements} />

            {/* CTA inline */}
            <div style={{marginTop:'48px',padding:'32px 36px',background:'#f7f7f5',borderLeft:'3px solid #1a1a1a'}}>
              <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.05rem',color:'#1a1a1a',marginBottom:'8px'}}>
                Aveți întrebări despre acest subiect?
              </h3>
              <p style={{fontSize:'0.83rem',fontWeight:300,color:'#767676',lineHeight:1.7,marginBottom:'18px'}}>
                Echipa Neofort BIZ oferă consultanță tehnică gratuită. Contactați-ne pentru o ofertă personalizată.
              </p>
              <div className="article-cta-btns" style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                <Link href="/contact" className="btn btn-green" style={{fontSize:'.64rem'}}>SOLICITĂ OFERTĂ</Link>
                <a href="https://wa.me/40752443435" target="_blank" rel="noopener" className="btn" style={{fontSize:'.64rem',borderColor:'#555',color:'#555'}}>WHATSAPP</a>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="article-sidebar">
            {/* Info card */}
            <div style={{background:'#f7f7f5',border:'1px solid #e8e8e8',padding:'24px 22px',marginBottom:'20px'}}>
              <span className="sec-label" style={{marginBottom:'16px'}}>Neofort BIZ</span>
              <p style={{fontSize:'0.8rem',fontWeight:300,color:'#767676',lineHeight:1.7,marginBottom:'16px'}}>
                Producător tâmplărie PVC Salamander și aluminiu Alumil. 21 ani experiență, livrare Europa.
              </p>
              <Link href="/contact" className="btn btn-green" style={{fontSize:'.62rem',display:'block',textAlign:'center'}}>SOLICITĂ OFERTĂ</Link>
            </div>

            {/* Articole recomandate */}
            <div style={{border:'1px solid #e8e8e8',padding:'20px 20px 8px'}}>
              <span className="sec-label" style={{marginBottom:'14px'}}>Mai citește</span>
              {related.map(r => {
                const rt2 = r.title[locale] || r.title.ro;
                const rc  = r.category[locale] || r.category.ro;
                return (
                  <Link key={r.slug} href={`/blog/${r.slug}`} style={{textDecoration:'none',display:'block',marginBottom:'14px',paddingBottom:'14px',borderBottom:'1px solid #f0f0f0'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.57rem',letterSpacing:'.16em',textTransform:'uppercase',color:r.accentColor,display:'block',marginBottom:'4px'}}>{rc}</span>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.9rem',color:'#1a1a1a',lineHeight:1.3,display:'block'}}>{rt2}</span>
                  </Link>
                );
              })}
            </div>

            {/* Contact rapid */}
            <div style={{background:'#111',padding:'22px',marginTop:'20px'}}>
              <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',letterSpacing:'.18em',textTransform:'uppercase',color:'#666',display:'block',marginBottom:'10px'}}>Contact rapid</span>
              <a href="tel:+40752443435" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'1.05rem',color:'#fff',textDecoration:'none',display:'block',marginBottom:'4px',letterSpacing:'.04em'}}>+40 752 443 435</a>
              <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',color:'#555',letterSpacing:'.1em'}}>Oferte — Luni–Vineri 10–18</span>
              <a href="mailto:oferte@neofort-biz.ro" style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.7rem',color:'#888',textDecoration:'none',display:'block',marginTop:'8px'}}>oferte@neofort-biz.ro</a>
            </div>
          </aside>

        </div>
      </div>

      {/* ── RESPONSIVE ── */}
      <style>{`
        /* Layout articol */
        .article-layout {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 60px;
          align-items: start;
          padding: 56px 0 80px;
        }
        /* Tabel scroll pe mobil */
        .article-layout table { width: 100%; }

        @media (max-width: 900px) {
          .article-layout {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            padding: 36px 0 60px !important;
          }
          .article-sidebar { display: none !important; }
        }

        @media (max-width: 600px) {
          .article-layout {
            padding: 28px 0 48px !important;
          }
          /* Breadcrumb mai mic */
          .article-layout nav { font-size: .58rem; }
          /* CTA bloc */
          .article-cta-btns { flex-direction: column !important; }
          .article-cta-btns a { text-align: center !important; }
          /* Tabel orizontal scroll */
          .article-layout div[style*="overflow"] { margin: 0 -20px; }
        }
      `}</style>
    </>
  );
}
