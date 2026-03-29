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

// ── Etichete filtre per limbă ────────────────────────────────────────────────
const FILTERS_LABELS = {
  ro: {
    all:          'Toate articolele',
    pvc:          'Tâmplărie PVC',
    aluminiu:     'Tâmplărie Aluminiu',
    umbrire:      'Sisteme Umbrire',
    nzeb:         'nZEB & Izolare',
    automatizare: 'Automatizare',
    proiecte:     'Proiecte & Lucrări',
  },
  en: {
    all:          'All articles',
    pvc:          'PVC Windows',
    aluminiu:     'Aluminium Windows',
    umbrire:      'Shading Systems',
    nzeb:         'nZEB & Insulation',
    automatizare: 'Automation',
    proiecte:     'Projects & Works',
  },
  de: {
    all:          'Alle Artikel',
    pvc:          'Kunststofffenster PVC',
    aluminiu:     'Aluminiumfenster',
    umbrire:      'Beschattungssysteme',
    nzeb:         'nZEB & Dämmung',
    automatizare: 'Automatisierung',
    proiecte:     'Projekte & Arbeiten',
  },
  fr: {
    all:          'Tous les articles',
    pvc:          'Menuiserie PVC',
    aluminiu:     'Menuiserie Aluminium',
    umbrire:      'Systèmes d\'occultation',
    nzeb:         'nZEB & Isolation',
    automatizare: 'Automatisation',
    proiecte:     'Projets & Chantiers',
  },
  es: {
    all:          'Todos los artículos',
    pvc:          'Carpintería PVC',
    aluminiu:     'Carpintería Aluminio',
    umbrire:      'Sistemas de sombreado',
    nzeb:         'nZEB & Aislamiento',
    automatizare: 'Automatización',
    proiecte:     'Proyectos & Obras',
  },
  it: {
    all:          'Tutti gli articoli',
    pvc:          'Infissi PVC',
    aluminiu:     'Infissi Alluminio',
    umbrire:      'Sistemi di oscuramento',
    nzeb:         'nZEB & Isolamento',
    automatizare: 'Automazione',
    proiecte:     'Progetti & Lavori',
  },
};

const SEARCH_PLACEHOLDER = {
  ro: 'Caută în articole…',
  en: 'Search articles…',
  de: 'Artikel suchen…',
  fr: 'Rechercher…',
  es: 'Buscar artículos…',
  it: 'Cerca articoli…',
};

const NO_RESULTS = {
  ro: 'Niciun articol găsit.',
  en: 'No articles found.',
  de: 'Keine Artikel gefunden.',
  fr: 'Aucun article trouvé.',
  es: 'No se encontraron artículos.',
  it: 'Nessun articolo trovato.',
};

const FILTER_KEYS = ['all', 'pvc', 'aluminiu', 'umbrire', 'nzeb', 'automatizare', 'proiecte'];

// ── Accent colors per temă ───────────────────────────────────────────────────
const THEME_COLOR = {
  all:          '#4a7c59',
  pvc:          '#2d5a8e',
  aluminiu:     '#3a6a9e',
  umbrire:      '#6a4a2e',
  nzeb:         '#4a7c59',
  automatizare: '#d4001a',
  proiecte:     '#555',
};

export default function BlogGrid({ articles, locale, read }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery]   = useState('');
  const [mounted, setMounted]           = useState(false);

  const labels = FILTERS_LABELS[locale] || FILTERS_LABELS.ro;
  const placeholder = SEARCH_PLACEHOLDER[locale] || SEARCH_PLACEHOLDER.ro;
  const noResults   = NO_RESULTS[locale] || NO_RESULTS.ro;

  // ── Citim hash din URL la mount ──────────────────────────────────────────
  useEffect(() => {
    setMounted(true);
    const hash = window.location.hash.replace('#', '');
    if (FILTER_KEYS.includes(hash)) setActiveFilter(hash);
  }, []);

  // ── Actualizam hash la schimbarea filtrului ──────────────────────────────
  const handleFilter = useCallback((key) => {
    setActiveFilter(key);
    setSearchQuery('');
    if (key === 'all') {
      history.replaceState(null, '', window.location.pathname);
    } else {
      history.replaceState(null, '', `${window.location.pathname}#${key}`);
    }
    // Scroll smooth la grid
    document.getElementById('blog-grid-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // ── Filtrare articole ────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let result = articles;

    // 1. Filtru temă
    if (activeFilter !== 'all') {
      result = result.filter(a => {
        const catRo = a.category?.ro || '';
        return CATEGORY_THEME[catRo] === activeFilter;
      });
    }

    // 2. Search — titlu + excerpt în limba curentă
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

  // Număr articole per temă — pentru badge-uri
  const counts = useMemo(() => {
    const c = { all: articles.length };
    FILTER_KEYS.slice(1).forEach(key => {
      c[key] = articles.filter(a => CATEGORY_THEME[a.category?.ro] === key).length;
    });
    return c;
  }, [articles]);

  const accentColor = THEME_COLOR[activeFilter] || '#4a7c59';

  return (
    <>
      <style>{`
        .bg-filters {
          background: #fff;
          border-bottom: 1px solid #efefed;
          position: sticky;
          top: 0;
          z-index: 40;
        }
        .bg-filters-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 0;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          flex-wrap: nowrap;
        }
        .bg-filters-inner::-webkit-scrollbar { display: none; }

        .bg-pill {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 14px 14px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 500;
          font-size: .62rem;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #999;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: color .15s, border-color .15s;
          white-space: nowrap;
          line-height: 1;
        }
        .bg-pill:hover { color: #333; }
        .bg-pill.active { color: #1a1a1a; border-bottom-color: currentColor; }
        .bg-pill-count {
          font-size: .5rem;
          background: #f0f0ee;
          color: #999;
          padding: 1px 5px;
          border-radius: 10px;
          font-weight: 600;
          letter-spacing: 0;
        }
        .bg-pill.active .bg-pill-count {
          background: currentColor;
          color: #fff;
        }

        .bg-search-wrap {
          margin-left: auto;
          flex-shrink: 0;
          padding: 8px 0 8px 16px;
          border-left: 1px solid #f0f0ee;
        }
        .bg-search {
          display: flex;
          align-items: center;
          gap: 7px;
          background: #f7f7f5;
          border: 1px solid #e8e8e4;
          padding: 7px 12px;
          width: 200px;
          transition: border-color .15s, width .2s;
        }
        .bg-search:focus-within {
          border-color: #bbb;
          width: 240px;
        }
        .bg-search svg { flex-shrink: 0; color: #bbb; }
        .bg-search input {
          border: none;
          background: transparent;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: .72rem;
          letter-spacing: .04em;
          color: #1a1a1a;
          width: 100%;
          outline: none;
        }
        .bg-search input::placeholder { color: #bbb; }
        .bg-search-clear {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: #bbb;
          line-height: 1;
          flex-shrink: 0;
        }
        .bg-search-clear:hover { color: #555; }

        .bg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          background: #fff;
          margin-top: 48px;
        }
        .bg-card {
          background: #fff;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          border: 1px solid #efefed;
          transition: border-color .18s, box-shadow .18s;
        }
        .bg-card:hover { border-color: #d8d8d4; box-shadow: 0 4px 20px rgba(0,0,0,.05); }

        .bg-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 80px 24px;
          color: #bbb;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1rem;
          letter-spacing: .05em;
        }

        .bg-status {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: .58rem;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #bbb;
          margin-top: 32px;
        }

        @media (max-width: 860px) {
          .bg-grid { grid-template-columns: 1fr 1fr; margin-top: 32px; }
          .bg-search { width: 160px; }
          .bg-search:focus-within { width: 180px; }
        }
        @media (max-width: 600px) {
          .bg-grid { grid-template-columns: 1fr; }
          .bg-pill { padding: 12px 10px; font-size: .58rem; }
          .bg-search-wrap { display: none; }
        }
        @media (max-width: 600px) {
          .bg-mobile-search {
            display: block;
            padding: 12px 24px;
            border-bottom: 1px solid #efefed;
          }
          .bg-mobile-search .bg-search {
            width: 100%;
          }
          .bg-mobile-search .bg-search:focus-within {
            width: 100%;
          }
        }
        @media (min-width: 601px) {
          .bg-mobile-search { display: none; }
        }
      `}</style>

      {/* ── BARA FILTRE + SEARCH (sticky) ── */}
      <div className="bg-filters" role="navigation" aria-label={labels.all}>
        <div className="bg-filters-inner">
          {FILTER_KEYS.map(key => (
            <button
              key={key}
              className={`bg-pill${activeFilter === key ? ' active' : ''}`}
              style={activeFilter === key ? { color: THEME_COLOR[key] } : {}}
              onClick={() => handleFilter(key)}
              aria-pressed={activeFilter === key}
              aria-label={`${labels[key]} (${counts[key]})`}
            >
              {labels[key]}
              <span className="bg-pill-count">{counts[key]}</span>
            </button>
          ))}

          {/* Search — desktop */}
          <div className="bg-search-wrap">
            <div className="bg-search" role="search">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={placeholder}
                aria-label={placeholder}
                autoComplete="off"
                spellCheck="false"
              />
              {searchQuery && (
                <button className="bg-search-clear" onClick={() => setSearchQuery('')} aria-label="Șterge căutarea">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search — mobil (sub pills) */}
        <div className="bg-mobile-search">
          <div className="bg-search" role="search">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="search"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={placeholder}
              aria-label={placeholder}
              autoComplete="off"
              spellCheck="false"
            />
            {searchQuery && (
              <button className="bg-search-clear" onClick={() => setSearchQuery('')} aria-label="Șterge căutarea">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── GRID ARTICOLE ── */}
      <div style={{ background: '#fff', padding: '0 0 80px' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>

          {/* Anchor pentru scroll */}
          <div id="blog-grid-anchor" style={{ marginTop: '-80px', paddingTop: '80px' }} aria-hidden="true" />

          {/* Status results */}
          {(searchQuery.trim().length >= 2 || activeFilter !== 'all') && mounted && (
            <p className="bg-status" aria-live="polite" aria-atomic="true">
              {filtered.length} {filtered.length === 1
                ? (locale === 'ro' ? 'articol' : locale === 'en' ? 'article' : locale === 'de' ? 'Artikel' : locale === 'fr' ? 'article' : locale === 'es' ? 'artículo' : 'articolo')
                : (locale === 'ro' ? 'articole' : locale === 'en' ? 'articles' : locale === 'de' ? 'Artikel' : locale === 'fr' ? 'articles' : locale === 'es' ? 'artículos' : 'articoli')
              }
              {searchQuery.trim().length >= 2 && ` — "${searchQuery.trim()}"`}
            </p>
          )}

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
                  <Link
                    key={a.slugs?.ro}
                    href={`/blog/${slug}`}
                    className="bg-card"
                    role="listitem"
                    aria-label={title}
                  >
                    {/* Imagine */}
                    {img ? (
                      <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: a.imageBg || '#1a1a1a', flexShrink: 0 }}>
                        <img
                          src={img}
                          alt={title}
                          loading="lazy"
                          decoding="async"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                    ) : (
                      <div style={{ width: '100%', aspectRatio: '16/9', background: a.imageBg || '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '1.8rem', fontWeight: 300, color: 'rgba(255,255,255,.12)', letterSpacing: '.1em' }}>{a.imageLabel}</span>
                      </div>
                    )}

                    {/* Corp card */}
                    <div style={{ padding: '18px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '9px', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.54rem', letterSpacing: '.18em', textTransform: 'uppercase', color: accent }}>{cat}</span>
                        <span style={{ color: '#e0e0e0', fontSize: '.4rem' }}>◆</span>
                        <span style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '.58rem', letterSpacing: '.06em', color: '#bbb' }}>{date}</span>
                        <span style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '.56rem', letterSpacing: '.06em', color: '#ccc', marginLeft: 'auto' }}>{rt}</span>
                      </div>
                      <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '1rem', color: '#1a1a1a', lineHeight: 1.25, letterSpacing: '.01em', margin: '0 0 9px' }}>{title}</h2>
                      <p style={{ fontSize: '.78rem', color: '#999', lineHeight: 1.65, margin: '0 0 14px', flex: 1 }}>{excerpt.slice(0, 110)}…</p>
                      <span style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '.56rem', letterSpacing: '.14em', textTransform: 'uppercase', color: accent }}>{read}</span>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
