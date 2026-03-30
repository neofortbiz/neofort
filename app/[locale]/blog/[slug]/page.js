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
      languages: { ...Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/blog/${a.slugs[l] || a.slugs.ro}`])), 'x-default': `${BASE}/ro/blog/${a.slugs.ro}` },
    },
    openGraph: {
      type: 'article',
      url: `${BASE}/${locale}/blog/${mySlug}`,
      siteName: 'Neofort BIZ',
      title: `${title} | Neofort BIZ`,
      description: desc,
      images: [{ url: a.image?.[locale] ? `${BASE}${a.image[locale]}` : `${BASE}/og/BLOG.jpg`, width: 1200, height: 630, alt: title, type: a.image?.[locale] ? (a.image[locale].endsWith('.jpg') ? 'image/jpeg' : 'image/avif') : 'image/jpeg' }],
      publishedTime: a.date,
      modifiedTime: a.date,
      locale: locale,
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: title, description: desc, images:[a.image?.[locale] ? `${BASE}${a.image[locale]}` : `${BASE}/og/BLOG.jpg`] },
  };
}

// renderMarkdown → HTML string (compatibil Server Components Next.js 14)
function renderMarkdown(md) {
  const esc = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const bold = (s) => esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
  const links = (s) => bold(s).replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_,text,url) => {
    const isExternal = url.startsWith('http');
    return `<a href="${url}"${isExternal?' target="_blank" rel="noopener"':''} style="color:#e8721c;text-decoration:underline;text-underline-offset:2px">${text}</a>`;
  });

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
        html += `<li style="margin-bottom:.5rem;padding-left:.2rem">${pre}${links(text)}</li>`;
        i++;
      }
      html += '</ul>';
      continue;
    } else if (line.startsWith('**') && line.endsWith('**') && !line.slice(2,-2).includes('**')) {
      html += `<p style="font-weight:600;color:#1a1a1a;font-size:.87rem;margin:1rem 0 .3rem">${esc(line.slice(2,-2))}</p>`;
    } else if (line.trim()) {
      html += `<p style="font-size:.88rem;color:#555;line-height:1.85;margin:.8rem 0">${links(line)}</p>`;
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
  // Related articles: aceeasi categorie intai, apoi altele
  const sameCat = ARTICLES.filter(r => r.slugs.ro !== a.slugs.ro && r.category?.ro === a.category?.ro);
  const otherCat = ARTICLES.filter(r => r.slugs.ro !== a.slugs.ro && r.category?.ro !== a.category?.ro);
  const related = [...sameCat, ...otherCat].slice(0, 3);

  // ── PILLAR LINK ── detectam pagina pillar dupa slug RO
  const PILLAR_MAP = {
    // PVC
    'ghid-complet-tamplarie-pvc-salamander-bluevolution-greenevolution': 'pvc',
    'tamplarie-pvc-osciloculisanta-dubla-salamander': 'pvc',
    'montaj-tamplarie-precadru-blaugelb-triotherm-plus-nzeb': 'nzeb',
    'geam-termopan-warm-edge-distantier-termic-saint-gobain-sgg': 'nzeb',
    'banda-precomprimata-butilic-etansare-ferestre-nzeb': 'nzeb',
    'montaj-tamplarie-salamander-evolutiondrive-plus-culisanta-alumil-m19800-armonice': 'pvc',
    // Aluminiu
    'ghid-tamplarie-aluminiu-alumil-s77-supreme-s67-smartia-bucuresti': 'aluminiu',
    'tamplarie-aluminiu-vs-pvc-diferente-performante-pret-2024': 'aluminiu',
    'vitrine-panoramice-aluminiu-sticla-securizata-geam-mare-dimensiuni-bucuresti': 'aluminiu',
    // Umbrire
    'ghid-complet-zipscreen-umbrire-terasa-bucuresti': 'umbrire',
    'jaluzele-raffstore-vs-tapparelle-aluminiu-sistem-umbrire': 'umbrire',
    'plase-insecte-plisse-culisante-mari-dimensiuni-terasa': 'umbrire',
  };
  const PILLAR_SLUGS_BLOG = {
    pvc: {
      ro: 'tamplarie-pvc/ghid-complet', en: 'pvc-windows/complete-guide',
      de: 'kunststofffenster-pvc/kompletter-ratgeber', fr: 'menuiserie-pvc/guide-complet',
      es: 'carpinteria-pvc/guia-completa', it: 'infissi-pvc/guida-completa',
    },
    aluminiu: {
      ro: 'tamplarie-aluminiu/ghid-complet', en: 'aluminium-windows/complete-guide',
      de: 'aluminiumfenster/kompletter-ratgeber', fr: 'menuiserie-aluminium/guide-complet',
      es: 'carpinteria-aluminio/guia-completa', it: 'infissi-alluminio/guida-completa',
    },
    umbrire: {
      ro: 'umbrire/ghid-complet-sisteme-umbrire', en: 'shading-systems/complete-guide',
      de: 'beschattungssysteme/kompletter-ratgeber', fr: 'systemes-occultation/guide-complet',
      es: 'sistemas-sombreado/guia-completa', it: 'sistemi-oscuramento/guida-completa',
    },
    nzeb: {
      ro: 'sisteme-nzeb/ghid-complet-nzeb', en: 'nzeb-systems/complete-guide',
      de: 'nzeb-systeme/kompletter-ratgeber', fr: 'systemes-nzeb/guide-complet',
      es: 'sistemas-nzeb/guia-completa', it: 'sistemi-nzeb/guida-completa',
    },
  };
  const PILLAR_LABELS_BLOG = {
    pvc: { ro: 'Ghid Complet Tamplarie PVC', en: 'Complete PVC Guide', de: 'PVC Ratgeber', fr: 'Guide PVC complet', es: 'Guia PVC completa', it: 'Guida PVC completa' },
    aluminiu: { ro: 'Ghid Complet Tamplarie Aluminiu', en: 'Complete Aluminium Guide', de: 'Aluminiumfenster Ratgeber', fr: 'Guide aluminium complet', es: 'Guia aluminio completa', it: 'Guida alluminio completa' },
    umbrire: { ro: 'Ghid Complet Sisteme Umbrire', en: 'Complete Shading Guide', de: 'Beschattungsratgeber', fr: 'Guide occultation complet', es: 'Guia sombreado completa', it: 'Guida oscuramento completa' },
    nzeb: { ro: 'Ghid Complet Sisteme nZEB', en: 'Complete nZEB Guide', de: 'nZEB Ratgeber', fr: 'Guide nZEB complet', es: 'Guia nZEB completa', it: 'Guida nZEB completa' },
  };
  const PILLAR_READ_BLOG = {
    ro: 'Citeste ghidul complet', en: 'Read the complete guide',
    de: 'Kompletten Ratgeber lesen', fr: 'Lire le guide complet',
    es: 'Leer la guia completa', it: 'Leggi la guida completa',
  };
  const articleSlugRo = a.slugs?.ro || '';
  const pillarCat = PILLAR_MAP[articleSlugRo] || null;
  const pillarSlugBlog = pillarCat ? (PILLAR_SLUGS_BLOG[pillarCat]?.[locale] || PILLAR_SLUGS_BLOG[pillarCat]?.ro) : null;
  const pillarLabelBlog = pillarCat ? (PILLAR_LABELS_BLOG[pillarCat]?.[locale] || PILLAR_LABELS_BLOG[pillarCat]?.ro) : null;
  const pillarReadBlog = PILLAR_READ_BLOG[locale] || PILLAR_READ_BLOG.ro;

  // Schema VideoObject pentru articolele cu video
  const videoSchema = a.video?.embed ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": a.metaDesc?.[locale] || excerpt,
    "embedUrl": a.video.embed.match(/src="([^"]+)"/)?.[1] || '',
    "thumbnailUrl": a.image?.[locale] ? `${BASE}${a.image[locale]}` : `${BASE}/og/BLOG.jpg`,
    "uploadDate": a.date,
    "publisher": {"@type":"Organization","name":"Neofort BIZ","url":BASE},
  } : null;

  const articleSchema = {
    "@context":"https://schema.org","@type":"BlogPosting",
    "headline": title,"description": a.metaDesc?.[locale] || excerpt,
    "keywords": a.keywords || '',"url": `${BASE}/${locale}/blog/${mySlug}`,
    "datePublished": a.date,"dateModified": a.date,"inLanguage": locale,
    "articleSection": cat,
    "author": {"@type":"Organization","name":"Neofort BIZ","url":BASE},
    "publisher": {"@type":"Organization","name":"Neofort BIZ","url":BASE,
      "logo":{"@type":"ImageObject","url":`${BASE}/Neofort.jpg`,"width":200,"height":60}},
    "image": {"@type":"ImageObject","url": a.image?.[locale] ? `${BASE}${a.image[locale]}` : `${BASE}/og/BLOG.jpg`,"width":1200,"height":630},
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

  // FAQPage schema — extrage H2/H3 din continut ca perechi intrebare/raspuns
  const faqEntries = (() => {
    const lines = content.split('\n');
    const pairs = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if ((line.startsWith('## ') || line.startsWith('### ')) && line.includes('?')) {
        const q = line.replace(/^#{2,3}\s+/, '').trim();
        const answerLines = [];
        for (let j = i + 1; j < Math.min(i + 8, lines.length); j++) {
          if (lines[j].startsWith('#')) break;
          if (lines[j].trim()) answerLines.push(lines[j].replace(/\*\*/g,'').trim());
          if (answerLines.length >= 3) break;
        }
        if (answerLines.length > 0) pairs.push({ q, a: answerLines.join(' ').slice(0, 300) });
      }
    }
    return pairs.slice(0, 8);
  })();

  const faqSchema = faqEntries.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqEntries.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  } : null;

  // Author Person schema pentru E-E-A-T
  const articleWithAuthor = {
    ...articleSchema,
    "author": {
      "@type": "Person",
      "name": "Neofort BIZ",
      "url": BASE,
      "sameAs": ["https://www.linkedin.com/company/neofort-biz", "https://www.facebook.com/neofortconstructii"]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleWithAuthor) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      {videoSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}/>}
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>}

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
            <Link href="/" style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'clamp(0.75rem, 2vw, .6rem)',letterSpacing:'.1em',color:'#bbb',textDecoration:'none'}}>{ui.breadcrumb_home}</Link>
            <span style={{color:'#ddd',fontSize:'clamp(0.8rem, 2vw, .65rem)'}}>›</span>
            <Link href="/blog" style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'clamp(0.75rem, 2vw, .6rem)',letterSpacing:'.1em',color:'#bbb',textDecoration:'none'}}>Blog</Link>
            <span style={{color:'#ddd',fontSize:'clamp(0.8rem, 2vw, .65rem)'}}>›</span>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'clamp(0.75rem, 2vw, .6rem)',letterSpacing:'.1em',color:'#999'}}>{cat}</span>
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
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 24px'}}>
          <p style={{fontSize:'clamp(0.9rem, 2.5vw, .88rem)',color:'#636363',lineHeight:1.75,fontStyle:'italic',margin:0,paddingLeft:'14px',borderLeft:`3px solid ${a.accentColor}`}}>{excerpt}</p>
        </div>
      </div>

      {/* CORP + SIDEBAR */}
      <div style={{background:'#fff',padding:'48px 0 72px'}}>
        <div className="article-grid">

          <main style={{minWidth:0}}>
            {/* Video embed — YouTube Short */}
            {a.video?.embed && (
              <div style={{width:'100%',margin:'0 0 40px'}}>
                <div style={{width:'100%'}} dangerouslySetInnerHTML={{__html: a.video.embed}} />
              </div>
            )}
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
          
            {/* PILLAR LINK BANNER */}
            {pillarSlugBlog && (
              <div style={{marginTop:'40px',padding:'20px 24px',background:'#f0f4f8',borderLeft:'3px solid #2d5a8e',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'16px',flexWrap:'wrap'}}>
                <div>
                  <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#888',marginBottom:'4px'}}>Resursa recomandata</div>
                  <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.9rem',fontWeight:600,color:'#1a2a3a'}}>{pillarLabelBlog}</div>
                </div>
                <Link href={`/${pillarSlugBlog}`} style={{display:'inline-block',background:'#2d5a8e',color:'#fff',fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'.7rem',letterSpacing:'.15em',textTransform:'uppercase',padding:'10px 20px',textDecoration:'none',whiteSpace:'nowrap'}}>
                  {pillarReadBlog} →
                </Link>
              </div>
            )}

          </main>

          <aside className="article-sidebar">

            {/* 1. Articole similare — primul, cel mai util SEO */}
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

            {/* 2. CTA dark — al doilea */}
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

            {/* 3. Card WhatsApp — contact rapid */}
            <div className="sidebar-card" style={{background:'#f0faf3',borderTopColor:'#25D366'}}>
              <span className="sidebar-label" style={{color:'#25D366'}}>
                {{'ro':'Contact rapid','en':'Quick contact','de':'Schnellkontakt','fr':'Contact rapide','es':'Contacto rápido','it':'Contatto rapido'}[locale]}
              </span>
              <p style={{fontSize:'.72rem',color:'#333',lineHeight:1.5,marginBottom:'12px'}}>
                {{'ro':'Răspundem în 2 ore pe WhatsApp. Ofertă gratuită pentru orice proiect.','en':'We reply within 2 hours on WhatsApp. Free quote for any project.','de':'Antwort innerhalb 2 Stunden. Kostenloses Angebot für jedes Projekt.','fr':'Réponse en 2 heures sur WhatsApp. Devis gratuit pour tout projet.','es':'Respuesta en 2 horas en WhatsApp. Presupuesto gratuito.','it':'Risposta in 2 ore su WhatsApp. Preventivo gratuito per qualsiasi progetto.'}[locale]}
              </p>
              <a href="https://wa.me/40752443435" target="_blank" rel="noopener noreferrer"
                style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',background:'#25D366',color:'#fff',textDecoration:'none',padding:'10px 0',fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'.6rem',letterSpacing:'.18em',textTransform:'uppercase'}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>

            {/* 4. Limbi — ultimul */}
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

          </aside>
        </div>
      </div>
    </>
  );
}
