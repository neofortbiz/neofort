'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';

// ── Mapare categorie RO → temă internă ──────────────────────────────────────
const CATEGORY_THEME = {
  'Ghid tehnic': 'pvc',
  'Comparație produse': 'pvc',
  'Prețuri & Comparație': 'pvc',
  'Ghiduri & Sfaturi': 'pvc',
  'Tâmplărie Aluminiu': 'aluminiu',
  'Pereți Cortină': 'aluminiu',
  'Pereți Cortină & Birouri': 'aluminiu',
  'Vitrine & Geamuri Mari': 'aluminiu',
  'Sisteme Umbrire': 'umbrire',
  'Sisteme de Umbrire': 'umbrire',
  'Montaj & Izolare': 'nzeb',
  'Prețuri & Ghid': 'nzeb',
  'Renovare & Ghid': 'nzeb',
  'Automatizare & Smart Home': 'automatizare',
  'Smart Home & Automatizare': 'automatizare',
  'Case Individuale & Export': 'proiecte',
  'Case Noi & Smart Home': 'proiecte',
  'Export & Europa': 'proiecte',
  'Export & Case Munte': 'proiecte',
  'Export & Livrare': 'proiecte',
  'Lucrări București': 'proiecte',
  'Construcții Noi & Blocuri': 'proiecte',
  'Montaj Specializat': 'proiecte',
  'Proiecte realizate': 'proiecte',
};

const FILTERS_LABELS = {
  ro: { all:'Toate', pvc:'Tâmplărie PVC', aluminiu:'Aluminiu', umbrire:'Umbrire', nzeb:'nZEB', automatizare:'Automatizare', proiecte:'Proiecte' },
  en: { all:'All', pvc:'PVC Windows', aluminiu:'Aluminium', umbrire:'Shading', nzeb:'nZEB', automatizare:'Automation', proiecte:'Projects' },
  de: { all:'Alle', pvc:'PVC-Fenster', aluminiu:'Aluminiu', umbrire:'Beschattung', nzeb:'nZEB', automatizare:'Automation', proiecte:'Projekte' },
  fr: { all:'Tous', pvc:'Menuiserie PVC', aluminiu:'Aluminium', umbrire:'Occultation', nzeb:'nZEB', automatizare:'Automatisation', proiecte:'Projets' },
  es: { all:'Todos', pvc:'Carpintería PVC', aluminiu:'Aluminio', umbrire:'Sombreado', nzeb:'nZEB', automatizare:'Automatización', proiecte:'Proyectos' },
  it: { all:'Tutti', pvc:'Infissi PVC', aluminiu:'Alluminio', umbrire:'Oscuramento', nzeb:'nZEB', automatizare:'Automazione', proiecte:'Progetti' },
};

const SEARCH_PLACEHOLDER = {
  ro:'Caută în articole…', en:'Search articles…', de:'Artikel suchen…',
  fr:'Rechercher…', es:'Buscar artículos…', it:'Cerca articoli…',
};
const NO_RESULTS = {
  ro:'Niciun articol găsit.', en:'No articles found.', de:'Keine Artikel gefunden.',
  fr:'Aucun article trouvé.', es:'No se encontraron artículos.', it:'Nessun articolo trovato.',
};
const RESULTS_LABEL = {
  ro:['articol','articole'], en:['article','articles'], de:['Artikel','Artikel'],
  fr:['article','articles'], es:['artículo','artículos'], it:['articolo','articoli'],
};

const FILTER_KEYS = ['all','pvc','aluminiu','umbrire','nzeb','automatizare','proiecte'];

const THEME_COLOR = {
  all:'#4a7c59', pvc:'#2d5a8e', aluminiu:'#3a6a9e',
  umbrire:'#6a4a2e', nzeb:'#4a7c59', automatizare:'#d4001a', proiecte:'#555',
};

export default function BlogGrid({ articles, locale, read }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery]   = useState('');
  const [mounted, setMounted]           = useState(false);
  const [viewCounts, setViewCounts]     = useState({});

  const labels      = FILTERS_LABELS[locale]     || FILTERS_LABELS.ro;
  const placeholder = SEARCH_PLACEHOLDER[locale]  || SEARCH_PLACEHOLDER.ro;
  const noResults   = NO_RESULTS[locale]          || NO_RESULTS.ro;
  const resLabel    = RESULTS_LABEL[locale]       || RESULTS_LABEL.ro;

  useEffect(() => {
    setMounted(true);
    const hash = window.location.hash.replace('#', '');
    if (FILTER_KEYS.includes(hash)) setActiveFilter(hash);
    // Fetch views pentru toate articolele
    const slugs = articles.map(a => a.slugs?.ro).filter(Boolean);
    Promise.all(
      slugs.map(slug =>
        fetch(`/api/views/${slug}`)
          .then(r => r.json())
          .then(d => ({ slug, views: d.views || 0 }))
          .catch(() => ({ slug, views: 0 }))
      )
    ).then(results => {
      const counts = {};
      results.forEach(({ slug, views }) => { counts[slug] = views; });
      setViewCounts(counts);
    });
  }, [articles]);

  const handleFilter = useCallback((key) => {
    setActiveFilter(key);
    setSearchQuery('');
    if (key === 'all') {
      history.replaceState(null, '', window.location.pathname);
    } else {
      history.replaceState(null, '', window.location.pathname + '#' + key);
    }
  }, []);

  const filtered = useMemo(() => {
    let result = articles;
    if (activeFilter !== 'all') {
      result = result.filter(a => CATEGORY_THEME[a.category?.ro] === activeFilter);
    }
    const q = searchQuery.trim().toLowerCase();
    if (q.length >= 2) {
      result = result.filter(a => {
        const title   = (a.title?.[locale]   || a.title?.ro   || '').toLowerCase();
        const excerpt = (a.excerpt?.[locale]  || a.excerpt?.ro || '').toLowerCase();
        const cat     = (a.category?.[locale] || a.category?.ro || '').toLowerCase();
        return title.includes(q) || excerpt.includes(q) || cat.includes(q);
      });
    }
    return result;
  }, [articles, activeFilter, searchQuery, locale]);

  const counts = useMemo(() => {
    const c = { all: articles.length };
    FILTER_KEYS.slice(1).forEach(k => {
      c[k] = articles.filter(a => CATEGORY_THEME[a.category?.ro] === k).length;
    });
    return c;
  }, [articles]);

  const isFiltering = searchQuery.trim().length >= 2 || activeFilter !== 'all';

  return (
    <>
      <style>{`
        /* ── STICKY FILTER BAR ── */
        .bg-bar {
          background: #fff;
          border-bottom: 1px solid #efefed;
          position: sticky;
          top: 0;
          z-index: 40;
        }
        .bg-bar-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: stretch;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .bg-bar-inner::-webkit-scrollbar { display: none; }

        .bg-pill {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 13px 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 500;
          font-size: .6rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #aaa;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: color .15s, border-color .15s;
          white-space: nowrap;
          line-height: 1;
        }
        .bg-pill:hover { color: #444; }
        .bg-pill.active { color: #1a1a1a; border-bottom-color: currentColor; }
        .bg-count {
          font-size: .46rem;
          background: #f0f0ee;
          color: #595959;
          padding: 1px 4px;
          border-radius: 8px;
          font-weight: 700;
          letter-spacing: 0;
        }
        .bg-pill.active .bg-count { background: currentColor; color: #fff; }

        /* ── SEARCH + STATUS ── */
        .bg-toolbar {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 24px 0;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .bg-search {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f7f7f5;
          border: 1px solid #e8e8e4;
          padding: 9px 14px;
          width: 260px;
          flex-shrink: 0;
          transition: border-color .15s, width .2s;
        }
        .bg-search:focus-within { border-color: #595959; width: 320px; }
        .bg-search svg { flex-shrink: 0; color: #595959; }
        .bg-search input {
          border: none; background: transparent;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: .74rem; letter-spacing: .04em; color: #1a1a1a;
          width: 100%; outline: none;
        }
        .bg-search input::placeholder { color: #595959; }
        .bg-search-clear {
          background: none; border: none; padding: 0;
          cursor: pointer; color: #595959; line-height: 1; flex-shrink: 0;
        }
        .bg-search-clear:hover { color: #555; }
        .bg-status {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: .58rem; letter-spacing: .12em;
          text-transform: uppercase; color: #595959;
          margin-left: auto;
        }

        /* ── GRID ── */
        .bg-grid {
          max-width: 1100px; margin: 0 auto;
          padding: 24px 24px 80px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .bg-card {
          background: #fff; text-decoration: none;
          display: flex; flex-direction: column;
          border: 1px solid #efefed;
          transition: border-color .18s, box-shadow .18s;
        }
        .bg-card:hover { border-color: #d8d8d4; box-shadow: 0 4px 20px rgba(0,0,0,.05); }
        .bg-empty {
          grid-column: 1/-1; text-align: center;
          padding: 80px 0; color: #595959;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1rem; letter-spacing: .08em;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .bg-grid { grid-template-columns: 1fr 1fr; }
          .bg-search { width: 200px; }
          .bg-search:focus-within { width: 240px; }
        }
        @media (max-width: 600px) {
          .bg-grid { grid-template-columns: 1fr; padding: 16px 16px 60px; }
          .bg-toolbar { flex-direction: column; align-items: stretch; padding: 14px 16px 0; gap: 10px; }
          .bg-search { width: 100%; }
          .bg-search:focus-within { width: 100%; }
          .bg-status { margin-left: 0; }
          .bg-pill { padding: 11px 10px; font-size: .57rem; }
          .bg-bar-inner { padding: 0 16px; }
        }
      `}</style>

      {/* ── STICKY: DOAR PILLS ── */}
      <nav className="bg-bar" aria-label={labels.all}>
        <div className="bg-bar-inner">
          {FILTER_KEYS.map(key => (
            <button
              key={key}
              className={`bg-pill${activeFilter === key ? ' active' : ''}`}
              style={activeFilter === key ? { color: THEME_COLOR[key] } : {}}
              onClick={() => handleFilter(key)}
              aria-pressed={activeFilter === key}
            >
              {labels[key]}
              <span className="bg-count">{counts[key]}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ── SEARCH + COUNTER (deasupra gridului, nu sticky) ── */}
      <div style={{ background: '#fff' }}>
        <div className="bg-toolbar">
          <div className="bg-search" role="search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={placeholder}
              aria-label={placeholder}
              autoComplete="off"
              spellCheck="false"
            />
            {searchQuery && (
              <button className="bg-search-clear" onClick={() => setSearchQuery('')} aria-label="Șterge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            )}
          </div>

          {mounted && (
            <p className="bg-status" aria-live="polite" aria-atomic="true">
              {filtered.length} {filtered.length === 1 ? resLabel[0] : resLabel[1]}
              {searchQuery.trim().length >= 2 && <> — <em style={{fontStyle:'normal',color:'#6b6b6b'}}>"{searchQuery.trim()}"</em></>}
            </p>
          )}
        </div>
      </div>

      {/* ── GRID ARTICOLE ── */}
      <div style={{ background: '#fff' }}>
        <div className="bg-grid" role="list" aria-label={labels[activeFilter]}>
          {filtered.length === 0 ? (
            <div className="bg-empty" role="listitem">{noResults}</div>
          ) : (
            filtered.map(a => {
              const title   = a.title?.[locale]    || a.title?.ro    || '';
              const excerpt = a.excerpt?.[locale]  || a.excerpt?.ro  || '';
              const cat     = a.category?.[locale] || a.category?.ro || '';
              const date    = a.dateDisplay?.[locale] || a.dateDisplay?.ro || '';
              const rt      = a.readTime?.[locale] || a.readTime?.ro || '';
              const slug    = a.slugs?.[locale]    || a.slugs?.ro    || '';
              const img     = a.image?.[locale]    || a.image?.ro;
              const accent  = a.accentColor || '#4a7c59';

              return (
                <Link key={a.slugs?.ro} href={`/blog/${slug}`} className="bg-card" role="listitem" aria-label={title}>
                  {img ? (
                    <div style={{ width:'100%', aspectRatio:'16/9', overflow:'hidden', background:a.imageBg||'#1a1a1a', flexShrink:0 }}>
                      <img src={img} alt={title} loading="lazy" decoding="async"
                        style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
                    </div>
                  ) : (
                    <div style={{ width:'100%', aspectRatio:'16/9', background:a.imageBg||'#1a1a1a', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <span style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:'1.8rem', fontWeight:300, color:'rgba(255,255,255,.12)', letterSpacing:'.1em' }}>{a.imageLabel}</span>
                    </div>
                  )}
                  <div style={{ padding:'18px 20px 22px', flex:1, display:'flex', flexDirection:'column' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'9px', flexWrap:'wrap' }}>
                      <span style={{ fontFamily:'Barlow Condensed,sans-serif', fontWeight:600, fontSize:'.54rem', letterSpacing:'.18em', textTransform:'uppercase', color:accent }}>{cat}</span>
                      <span style={{ color:'#e0e0e0', fontSize:'.4rem' }}>◆</span>
                      <span style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:'.58rem', letterSpacing:'.06em', color:'#595959' }}>{date}</span>
                      <span style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:'.56rem', letterSpacing:'.06em', color:'#595959', marginLeft:'auto' }}>{rt}</span>
                      {viewCounts[a.slugs?.ro] > 0 && (
                        <span style={{ display:'inline-flex', alignItems:'center', gap:'3px', fontFamily:'Barlow Condensed,sans-serif', fontSize:'.56rem', letterSpacing:'.06em', color:'#595959' }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                          {viewCounts[a.slugs?.ro].toLocaleString()}
                        </span>
                      )}
                    </div>
                    <h2 style={{ fontFamily:'Barlow Condensed,sans-serif', fontWeight:600, fontSize:'1rem', color:'#1a1a1a', lineHeight:1.25, letterSpacing:'.01em', margin:'0 0 9px' }}>{title}</h2>
                    <p style={{ fontSize:'.78rem', color:'#6b6b6b', lineHeight:1.65, margin:'0 0 14px', flex:1 }}>{excerpt.slice(0,110)}…</p>
                    <span style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:'.56rem', letterSpacing:'.14em', textTransform:'uppercase', color:accent }}>{read}</span>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
