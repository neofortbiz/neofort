import { Link } from '../../../../i18n/navigation';
import { ARTICLES, getArticle, getSlugForLocale, getAllLocaleSlugPairs } from '../../../../data/blog.js';
import { notFound } from 'next/navigation';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

const UI = {
  ro: { breadcrumb_home:'Acasă', related:'Articole similare', read_more:'Citește →', read_short:'Citește →', lang_notice:'Disponibil în:' },
  en: { breadcrumb_home:'Home', related:'Related articles', read_more:'Read →', read_short:'Read →', lang_notice:'Available in:' },
  de: { breadcrumb_home:'Startseite', related:'Ähnliche Artikel', read_more:'Lesen →', read_short:'Lesen →', lang_notice:'Verfügbar in:' },
  fr: { breadcrumb_home:'Accueil', related:'Articles similaires', read_more:'Lire →', read_short:'Lire →', lang_notice:'Disponible en :' },
  es: { breadcrumb_home:'Inicio', related:'Artículos relacionados', read_more:'Leer →', read_short:'Leer →', lang_notice:'Disponible en:' },
  it: { breadcrumb_home:'Home', related:'Articoli correlati', read_more:'Leggi →', read_short:'Leggi →', lang_notice:'Disponibile in:' },
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
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: 'Neofort BIZ', description: 'Tâmplărie PVC Salamander și Aluminiu Alumil', images:[`${BASE}/og-neofort.jpg`] },
  };
}

// renderMarkdown → HTML string (compatibil Server Components Next.js 14)
function renderMarkdown(md) {
  const esc = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const bold = (s) => esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');

  const lines = md.split('\n');
  let html = '';
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      html += `<h2 style="font-family:Barlow Condensed,sans-serif;font-weight:500;font-size:1.3rem;color:#1a1a1a;margin-top:2.8rem;margin-bottom:1rem;letter-spacing:.01em;padding-bottom:.5rem;border-bottom:1px solid #f0f0f0">${esc(line.slice(3))}</h2>`;
    } else if (line.startsWith('### ')) {
      html += `<h3 style="font-family:Barlow Condensed,sans-serif;font-weight:500;font-size:1.05rem;color:#1a1a1a;margin-top:1.75rem;margin-bottom:.6rem;letter-spacing:.01em">${esc(line.slice(4))}</h3>`;
    } else if (line.startsWith('---')) {
      html += '<hr style="border:none;border-top:1px solid #efefed;margin:2.5rem 0"/>';
    } else if (line.startsWith('| ')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!lines[i].match(/^\|[-\s|]+\|$/)) {
          const cells = lines[i].split('|').filter((c,idx,arr)=>idx>0&&idx<arr.length-1).map(c=>c.trim());
          rows.push(cells);
        }
        i++;
      }
      if (rows.length > 0) {
        html += '<div style="overflow-x:auto;margin:1.8rem 0"><table style="width:100%;border-collapse:collapse;font-size:.82rem"><thead><tr>';
        rows[0].forEach(c => { html += `<th style="text-align:left;padding:10px 14px;background:#f7f7f5;border-bottom:2px solid #e8e8e8;font-family:Barlow Condensed,sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:#888">${esc(c)}</th>`; });
        html += '</tr></thead><tbody>';
        rows.slice(1).forEach(row => {
          html += '<tr style="border-bottom:1px solid #f5f5f5">';
          row.forEach(c => { html += `<td style="padding:9px 14px;color:#555;vertical-align:top;font-size:.83rem">${bold(c)}</td>`; });
          html += '</tr>';
        });
        html += '</tbody></table></div>';
      }
      continue;
    } else if (line.match(/^[-✅⚠️]/) || line.match(/^\d+\. /)) {
      html += '<ul style="margin:1.2rem 0 1.2rem 1.4rem;padding:0;color:#555;font-size:.87rem;line-height:1.75">';
      while (i < lines.length && (lines[i].match(/^[-✅⚠️]/) || lines[i].match(/^\d+\. /))) {
        const text = lines[i].replace(/^[-✅⚠️]\s*/,'').replace(/^\d+\.\s*/,'');
        const pre  = lines[i].match(/^(✅|⚠️)/) ? lines[i].match(/^(✅|⚠️)/)[1]+' ' : '';
        html += `<li style="margin-bottom:.5rem;padding-left:.2rem">${pre}${bold(text)}</li>`;
        i++;
      }
      html += '</ul>';
      continue;
    } else if (line.startsWith('**') && line.endsWith('**') && !line.slice(2,-2).includes('**')) {
      html += `<p style="font-weight:600;color:#1a1a1a;font-size:.87rem;margin:1rem 0 .3rem">${esc(line.slice(2,-2))}</p>`;
    } else if (line.trim()) {
      html += `<p style="font-size:.88rem;color:#555;line-height:1.85;margin:.8rem 0">${bold(line)}</p>`;
    }
    i++;
  }
  return html;
}

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

  const contentHtml = renderMarkdown(content);
  const related  = ARTICLES.filter(r => r.slugs.ro !== a.slugs.ro).slice(0, 3);

  const articleSchema = {
    "@context":"https://schema.org","@type":"BlogPosting",
    "headline": title,"description": a.metaDesc?.[locale] || excerpt,
    "keywords": a.keywords || '',"url": `${BASE}/${locale}/blog/${mySlug}`,
    "datePublished": a.date,"dateModified": a.date,"inLanguage": locale,
    "articleSection": cat,
    "author": {"@type":"Organization","name":"Neofort BIZ","url":BASE},
    "publisher": {"@type":"Organization","name":"Neofort BIZ","url":BASE,
      "logo":{"@type":"ImageObject","url":`${BASE}/Neofort.avif`,"width":200,"height":60}},
    "image": {"@type":"ImageObject","url":`${BASE}/og-neofort.jpg`,"width":1200,"height":630},
    "mainEntityOfPage": {"@type":"WebPage","@id":`${BASE}/${locale}/blog/${mySlug}`},
  };

  const breadcrumbSchema = {
    "@context":"https://schema.org","@type":"BreadcrumbList",
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

      <style>{`
        .article-grid {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 56px;
          align-items: start;
        }
        .article-sidebar { position: sticky; top: 88px; }
        .sidebar-card { background:#f7f7f5; border-top:2px solid ${a.accentColor}; padding:20px; margin-bottom:14px; }
        .sidebar-card-dark { background:#111; border-top:2px solid ${a.accentColor}; padding:20px; margin-bottom:14px; }
        .sidebar-label { font-family:'Barlow Condensed',sans-serif; font-size:.58rem; letter-spacing:.18em; text-transform:uppercase; color:#aaa; margin-bottom:14px; display:block; }
        @media (max-width: 800px) {
          .article-grid { grid-template-columns:1fr; gap:0; }
          .article-sidebar { position:static; margin-top:40px; padding-top:32px; border-top:1px solid #efefed; }
        }
      `}</style>

      {/* BREADCRUMB */}
      <div style={{background:'#f7f7f5',borderBottom:'1px solid #e8e8e8',padding:'10px 0'}}>
        <div className="container">
          <nav aria-label="breadcrumb" style={{display:'flex',alignItems:'center',gap:'6px',flexWrap:'wrap'}}>
            <Link href="/" style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.1em',color:'#bbb',textDecoration:'none'}}>{ui.breadcrumb_home}</Link>
            <span style={{color:'#ddd',fontSize:'.65rem'}}>›</span>
            <Link href="/blog" style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.1em',color:'#bbb',textDecoration:'none'}}>Blog</Link>
            <span style={{color:'#ddd',fontSize:'.65rem'}}>›</span>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.1em',color:'#999'}}>{cat}</span>
          </nav>
        </div>
      </div>

      {/* HERO — compact, max 40vh */}
      <div style={{position:'relative',background:a.imageBg||'#1a1a1a',overflow:'hidden',maxHeight:'40vh',minHeight:'220px',display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
        {(a.image?.[locale] || a.image?.ro) && (
          <img
            src={a.image[locale] || a.image.ro}
            alt={title}
            style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 20%',display:'block',opacity:0.38}}
          />
        )}
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(0,0,0,.6) 0%, transparent 65%)',zIndex:1}}/>
        {/* Badge categorie sus-stânga */}
        <div style={{position:'absolute',top:'20px',left:'24px',zIndex:2}}>
          <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'.56rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#fff',background:a.accentColor,padding:'4px 11px'}}>{cat}</span>
        </div>
        {/* Titlu jos */}
        <div style={{position:'relative',zIndex:2,padding:'0 24px 28px',maxWidth:'1100px',margin:'0 auto',width:'100%',boxSizing:'border-box'}}>
          <div style={{display:'flex',gap:'14px',alignItems:'center',marginBottom:'8px',flexWrap:'wrap'}}>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',letterSpacing:'.12em',color:'rgba(255,255,255,.5)'}}>{date}</span>
            <span style={{color:'rgba(255,255,255,.2)'}}>·</span>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',letterSpacing:'.12em',color:'rgba(255,255,255,.5)'}}>{rt}</span>
          </div>
          <h1 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'clamp(1.2rem,3vw,1.8rem)',color:'#fff',lineHeight:1.2,letterSpacing:'.01em',maxWidth:'780px',margin:0,textShadow:'0 1px 10px rgba(0,0,0,.4)'}}>{title}</h1>
        </div>
      </div>

      {/* EXCERPT — bandă albă sub hero */}
      <div style={{background:'#fff',borderBottom:'1px solid #efefed',padding:'18px 0'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 24px',display:'grid',gridTemplateColumns:'1fr 260px',gap:'56px'}}>
          <p style={{fontSize:'.88rem',color:'#999',lineHeight:1.7,fontStyle:'italic',margin:0,paddingLeft:'14px',borderLeft:`3px solid ${a.accentColor}`}}>{excerpt}</p>
          <div/>
        </div>
      </div>

      {/* CORP + SIDEBAR */}
      <div style={{background:'#fff',padding:'48px 0 72px'}}>
        <div className="article-grid">

          <main style={{minWidth:0}}>
            <div dangerouslySetInnerHTML={{__html: contentHtml}} />

            {/* Articole similare jos în conținut */}
            {related.length > 0 && (
              <div style={{marginTop:'64px',paddingTop:'36px',borderTop:'1px solid #efefed'}}>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#bbb',display:'block',marginBottom:'20px'}}>{ui.related}</span>
                <div style={{display:'grid',gap:'14px',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))'}}>
                  {related.map(r => {
                    const rt2   = r.title[locale]    || r.title.ro;
                    const rc    = r.category[locale] || r.category.ro;
                    const rex   = r.excerpt[locale]  || r.excerpt.ro;
                    const rSlug = r.slugs[locale]    || r.slugs.ro;
                    return (
                      <Link key={r.slugs.ro} href={`/blog/${rSlug}`}
                        style={{textDecoration:'none',display:'block',padding:'18px',border:'1px solid #efefed',background:'#fafaf8'}}>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.54rem',letterSpacing:'.16em',textTransform:'uppercase',color:r.accentColor,display:'block',marginBottom:'7px'}}>{rc}</span>
                        <span style={{fontSize:'.82rem',color:'#1a1a1a',fontWeight:500,display:'block',marginBottom:'8px',lineHeight:1.4}}>{rt2}</span>
                        <p style={{fontSize:'.74rem',color:'#aaa',lineHeight:1.6,margin:'0 0 10px'}}>{rex.slice(0,90)}…</p>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.56rem',letterSpacing:'.12em',textTransform:'uppercase',color:r.accentColor}}>{ui.read_more}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </main>

          <aside className="article-sidebar">

            {/* Limbi — o singură dată, doar în sidebar */}
            <div className="sidebar-card">
              <span className="sidebar-label">{ui.lang_notice}</span>
              {LOCALES.map(l => {
                const lSlug   = a.slugs[l] || a.slugs.ro;
                const isActive = l === locale;
                return (
                  <Link key={l} href={`/blog/${lSlug}`} locale={l}
                    style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:'1px solid #e8e8e8',textDecoration:'none'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.64rem',letterSpacing:'.1em',textTransform:'uppercase',color:isActive?'#1a1a1a':'#bbb',fontWeight:isActive?600:300}}>{l.toUpperCase()}</span>
                    {isActive && <span style={{width:'5px',height:'5px',borderRadius:'50%',background:a.accentColor,display:'inline-block'}}/>}
                  </Link>
                );
              })}
            </div>

            {/* Articole similare în sidebar */}
            {related.length > 0 && (
              <div className="sidebar-card">
                <span className="sidebar-label">{ui.related}</span>
                {related.map(r => {
                  const rt2   = r.title[locale] || r.title.ro;
                  const rSlug = r.slugs[locale] || r.slugs.ro;
                  return (
                    <Link key={r.slugs.ro} href={`/blog/${rSlug}`}
                      style={{display:'block',padding:'10px 0',borderBottom:'1px solid #e8e8e8',textDecoration:'none'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.54rem',letterSpacing:'.12em',textTransform:'uppercase',color:r.accentColor,display:'block',marginBottom:'4px'}}>{r.category[locale]||r.category.ro}</span>
                      <span style={{fontSize:'.76rem',color:'#1a1a1a',lineHeight:1.4,display:'block',marginBottom:'4px'}}>{rt2}</span>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.54rem',letterSpacing:'.1em',textTransform:'uppercase',color:r.accentColor}}>{ui.read_short}</span>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* CTA dark */}
            <div className="sidebar-card-dark">
              <span className="sidebar-label" style={{color:'#444'}}>Neofort BIZ</span>
              {[
                {href:'/tamplarie-pvc',    label:{ro:'Tâmplărie PVC Salamander',en:'PVC Windows Salamander',de:'Kunststofffenster Salamander',fr:'Menuiserie PVC Salamander',es:'Carpintería PVC Salamander',it:'Infissi PVC Salamander'}},
                {href:'/tamplarie-aluminiu',label:{ro:'Tâmplărie Aluminiu Alumil',en:'Aluminium Windows Alumil',de:'Aluminiumfenster Alumil',fr:'Menuiserie Aluminium Alumil',es:'Carpintería Aluminio Alumil',it:'Infissi Alluminio Alumil'}},
                {href:'/accesorii',        label:{ro:'Accesorii Tâmplărie',en:'Window Accessories',de:'Fensterzubehör',fr:'Accessoires menuiserie',es:'Accesorios carpintería',it:'Accessori infissi'}},
                {href:'/servicii',         label:{ro:'Servicii Montaj',en:'Installation Services',de:'Montagedienstleistungen',fr:'Services de pose',es:'Servicios instalación',it:'Servizi installazione'}},
              ].map(item => (
                <Link key={item.href} href={item.href}
                  style={{display:'block',padding:'9px 0',borderBottom:'1px solid #1e1e1e',textDecoration:'none',fontFamily:'Barlow Condensed,sans-serif',fontSize:'.62rem',letterSpacing:'.08em',textTransform:'uppercase',color:'#666'}}>
                  {item.label[locale] || item.label.ro}
                </Link>
              ))}
              <Link href="/contact"
                style={{display:'block',marginTop:'14px',textAlign:'center',fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'.58rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#fff',textDecoration:'none',padding:'11px 0',background:a.accentColor}}>
                {{'ro':'SOLICITĂ OFERTĂ','en':'REQUEST QUOTE','de':'ANGEBOT ANFRAGEN','fr':'DEMANDER DEVIS','es':'PEDIR PRESUPUESTO','it':'RICHIEDI PREVENTIVO'}[locale]||'SOLICITĂ OFERTĂ'} →
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </>
  );
}
