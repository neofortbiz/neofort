// v200: Validator integritate blog — ruleaza inainte de commit dupa orice modificare la
// data/blog.js sau i18n/routing.js:   node scripts/validate-blog.js
// Codifica verificarile facute manual la fiecare livrare (istoricul incidentelor:
// virgula dubla v187, ruta inserata gresit v197b, imagini lipsa v197).
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const { ARTICLES } = require(path.join(ROOT, 'data/blog.js'));
const routing = fs.readFileSync(path.join(ROOT, 'i18n/routing.js'), 'utf8');

const LANGS = ['ro', 'en', 'de', 'fr', 'es', 'it'];
let errors = 0, warnings = 0;
const err  = (m) => { errors++;   console.log('  ✗ EROARE:', m); };
const warn = (m) => { warnings++; console.log('  ⚠ Atentie:', m); };

console.log(`\n=== Validare blog.js — ${ARTICLES.length} articole ===\n`);

// 1. Null/undefined (virgule duble la injectare)
const nulls = ARTICLES.filter(a => !a || !a.slugs);
if (nulls.length) err(`${nulls.length} elemente null/undefined in ARTICLES (virgula dubla?)`);

// 2. Slug-uri duplicate (eroare doar intre articole DIFERITE; in acelasi articol = avertisment)
const slugOwner = new Map();
ARTICLES.forEach((a, idx) => LANGS.forEach(l => {
  const s = a?.slugs?.[l];
  if (!s) return;
  if (slugOwner.has(s)) {
    if (slugOwner.get(s) !== idx) err(`Slug duplicat intre articole diferite: ${s}`);
    else warn(`Slug identic pe 2 limbi in acelasi articol: ${s} (functioneaza, dar suboptimal SEO)`);
  }
  slugOwner.set(s, idx);
}));

ARTICLES.forEach((a, i) => {
  if (!a || !a.slugs) return;
  const id = a.slugs.ro || `#${i}`;

  // 3. Campuri obligatorii
  ['date', 'author', 'image', 'imageOg', 'title', 'excerpt', 'content', 'category', 'dateDisplay'].forEach(f => {
    if (!a[f]) err(`[${id}] camp lipsa: ${f}`);
  });

  // 4. Toate 6 limbile complete
  LANGS.forEach(l => {
    if (!a.slugs[l])            err(`[${id}] slug lipsa limba: ${l}`);
    if (!a.title?.[l])          err(`[${id}] title lipsa limba: ${l}`);
    if (!a.content?.[l])        err(`[${id}] content lipsa limba: ${l}`);
    else if (a.content[l].length < 1500) warn(`[${id}] content foarte scurt in ${l} (${a.content[l].length} chars)`);
  });

  // 5. Structura FAQ per limba. Doua stiluri valide (page.js extrage FAQ din ## si ### cu "?"):
  //    - stil NOU (v197+): exact 5 intrebari "### ?", zero H2 cu "?"
  //    - stil VECHI: FAQ direct in H2 cu "?" (fara ### ?) — valid, schema functioneaza
  //    EROARE doar cand se AMESTECA (### ? prezent SI H2 cu ? — H2-urile ar polua FAQ-ul intentionat)
  LANGS.forEach(l => {
    const c = a.content?.[l] || '';
    const h2q = c.split('\n').filter(x => x.startsWith('## ') && x.includes('?')).length;
    const faq = c.split('\n').filter(x => x.startsWith('### ') && x.includes('?')).length;
    if (faq > 0 && h2q > 0) warn(`[${id}][${l}] stil mixt: ${faq} FAQ "### ?" + ${h2q} H2 cu "?" (schema functioneaza; de curatat editorial)`);
    if (faq === 0 && h2q === 0) warn(`[${id}][${l}] zero intrebari cu "?" — articolul nu genereaza FAQPage schema`);
    if (faq > 0 && faq !== 5) warn(`[${id}][${l}] ${faq} intrebari FAQ "### ?" (standardul nou: 5)`);
  });

  // 6. Ruta exista in routing.js pentru toate limbile
  LANGS.forEach(l => {
    const s = a.slugs[l];
    if (s && !routing.includes(`'/blog/${s}'`)) err(`[${id}] ruta lipsa in routing.js pentru ${l}: /blog/${s}`);
  });

  // 7. Imaginile referite exista fizic
  const img = a.image?.ro;
  if (img && !fs.existsSync(path.join(ROOT, 'public', img))) err(`[${id}] imagine lipsa pe disc: ${img}`);
  if (a.imageOg && !fs.existsSync(path.join(ROOT, 'public', a.imageOg))) err(`[${id}] OG lipsa pe disc: ${a.imageOg}`);

  // 8. Linkuri interne din content -> rute valide
  LANGS.forEach(l => {
    const c = a.content?.[l] || '';
    [...c.matchAll(/\]\((\/[a-z]{2}\/[^)]+)\)/g)].forEach(m => {
      const link = m[1];
      const mm = link.match(/^\/([a-z]{2})(\/.+)$/);
      if (!mm) return;
      const p = mm[2];
      const pillarOk = /^\/(contact|kontakt|contacto|contatti)$/.test(p);
      if (!pillarOk && !routing.includes(`'${p}'`)) err(`[${id}][${l}] link intern rupt: ${link}`);
    });
  });

  // 9. dateModified (daca exista) e >= date
  if (a.dateModified && new Date(a.dateModified) < new Date(a.date)) {
    warn(`[${id}] dateModified (${a.dateModified}) e inainte de date (${a.date})`);
  }
});

// 10. v275: URL-urile din PRODUCT_URL (data/productMeta.js) trebuie sa existe ca rute.
// Harta e generata din SLUG_MAP; daca un slug se schimba si harta nu e regenerata,
// llms-full.txt ar publica URL-uri moarte. Citesc fisierul ca text, nu prin require,
// pentru ca productMeta.js e modul ESM.
try {
  const metaSrc = fs.readFileSync(path.join(ROOT, 'data/productMeta.js'), 'utf8');
  const block = metaSrc.split('export const PRODUCT_URL')[1];
  if (!block) {
    warn('PRODUCT_URL lipseste din data/productMeta.js (llms-full.txt nu va avea URL-uri de produs)');
  } else {
    const urls = block.match(/https:\/\/www\.neofort-biz\.ro\/[a-z]{2}\/[^']+/g) || [];
    let broken = 0;
    urls.forEach(u => {
      const p = u.replace('https://www.neofort-biz.ro', '').replace(/^\/[a-z]{2}/, '');
      if (!routing.includes(`'${p}'`)) { broken++; err(`PRODUCT_URL contine o ruta inexistenta: ${u}`); }
    });
    console.log(`  PRODUCT_URL: ${urls.length} URL-uri de produs, ${broken} rupte`);
  }
} catch (e) {
  warn(`nu am putut verifica PRODUCT_URL: ${e.message}`);
}

// 11. v277: vechimea firmei. 336 din cele ~440 de aparitii vin acum din
// lib/companyAge.js si se recalculeaza la build. Restul sunt incastrate in fraze
// si nu pot fi centralizate fara sa rescriu textele.
// Garda verifica DOAR frazele care vorbesc despre firma (contin "Neofort").
// Nu atinge vechimea individuala a membrilor echipei (19, 20 ani) si nici
// duratele de viata ale produselor ("15-20 ani", "20-25 ani"), care sunt alte lucruri.
{
  const FOUNDED = 2005;
  const expected = new Date().getFullYear() - FOUNDED;
  const RX = /\b(\d{2}) (ani|years|Jahre|ans|años|anni)\b/;
  const scan = [
    'data/blog.js', 'public/llms.txt',
    'app/[locale]/page.js', 'app/[locale]/despre/page.js', 'app/[locale]/servicii/page.js',
    'app/[locale]/tamplarie-pvc/page.js', 'app/[locale]/tamplarie-pvc/bucuresti/page.js',
    'app/[locale]/tamplarie-aluminiu/page.js', 'app/[locale]/tamplarie-aluminiu/bucuresti/page.js',
  ];
  let stale = 0, ok = 0;
  scan.forEach(rel => {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) return;
    const txt = fs.readFileSync(abs, 'utf8');
    const seen = new Set();
    txt.split(/[.\n]/).forEach(sentence => {
      if (!/Neofort/i.test(sentence)) return;      // doar afirmatii despre firma
      const m = sentence.match(RX);
      if (!m) return;
      const n = parseInt(m[1], 10);
      if (n < 15 || n > 40) return;
      if (n === expected) { ok++; return; }
      const key = rel + '|' + n;
      if (!seen.has(key)) { seen.add(key); stale++;
        err(`${rel}: "${n} ${m[2]}" intr-o fraza despre Neofort, dar vechimea din ${FOUNDED} e ${expected} — actualizeaza textul`);
      }
    });
  });
  console.log(`  Vechime firma: ${expected} ani (din ${FOUNDED}) · ${ok} mentiuni corecte, ${stale} invechite`);
}

// ── 12. FAQ de categorie: cele 5 hub-uri trebuie sa aiba fiecare 5 intrebari × 6 limbi ──
// Motiv (v277): tamplarie-pvc si tamplarie-aluminiu aveau FAQPage, celelalte 3 hub-uri nu —
// asimetrie invizibila pana la un audit manual. Acum sursa e data/hubFaq.js si garda de aici
// pica daca cineva adauga un hub fara FAQ, sterge o limba sau lasa un raspuns gol.
try {
  const hubSrc = fs.readFileSync(path.join(ROOT, 'data/hubFaq.js'), 'utf8');
  const HUBS = ['tamplarie-pvc', 'tamplarie-aluminiu', 'umbrire', 'accesorii', 'sisteme-nzeb'];
  const LOCS = ['ro', 'en', 'de', 'fr', 'es', 'it'];
  let pairs = 0;
  HUBS.forEach(h => {
    // decupez blocul hub-ului: de la "'<hub>': {" pana la urmatorul hub sau final
    const start = hubSrc.indexOf(`'${h}': {`);
    if (start === -1) { err(`HUB_FAQ: lipseste hub-ul '${h}' din data/hubFaq.js`); return; }
    const nextIdx = HUBS.map(o => hubSrc.indexOf(`'${o}': {`)).filter(i => i > start);
    const block = hubSrc.slice(start, nextIdx.length ? Math.min(...nextIdx) : hubSrc.indexOf('export const HUB_FAQ_LABEL'));
    LOCS.forEach(l => {
      const lm = block.match(new RegExp(`\\n    ${l}: \\[([\\s\\S]*?)\\n    \\],`));
      if (!lm) { err(`HUB_FAQ[${h}]: lipseste limba '${l}'`); return; }
      const n = (lm[1].match(/\n      \[`/g) || []).length;
      if (n !== 5) err(`HUB_FAQ[${h}][${l}]: ${n} intrebari, trebuie exact 5`);
      pairs += n;
    });
    // fiecare pagina de hub trebuie sa si foloseasca sursa comuna
    const pageSrc = fs.readFileSync(path.join(ROOT, `app/[locale]/${h}/page.js`), 'utf8');
    if (!pageSrc.includes(`hubFaq('${h}'`)) err(`app/[locale]/${h}/page.js nu citeste din data/hubFaq.js`);
    if (!pageSrc.includes('<FaqAccordion')) err(`app/[locale]/${h}/page.js nu randeaza acordeonul FAQ`);
    if (!pageSrc.includes('faqSchema')) err(`app/[locale]/${h}/page.js nu emite FAQPage in JSON-LD`);
  });
  console.log(`  FAQ hub-uri: ${HUBS.length} hub-uri × 6 limbi × 5 intrebari = ${pairs} perechi`);
} catch (e) {
  warn(`nu am putut verifica HUB_FAQ: ${e.message}`);
}

// ── 13. meta-descrieri: maxim 150 de caractere (v278) ──
try {
  let over = 0, maxLen = 0;
  ARTICLES.forEach(a => LANGS.forEach(l => {
    const d = a.metaDesc?.[l];
    if (!d) { err(`metaDesc lipseste: ${a.slugs.ro} [${l}]`); return; }
    if (d.length > maxLen) maxLen = d.length;
    if (d.length > 150) { over++; err(`metaDesc ${d.length} car (max 150): ${a.slugs.ro} [${l}]`); }
  }));
  console.log(`  Meta-descrieri: ${ARTICLES.length * LANGS.length} verificate, ${over} peste 150 car (cea mai lunga ${maxLen})`);
} catch (e) { warn(`nu am putut verifica metaDesc: ${e.message}`); }

// ── 14. articole orfane: fiecare articol trebuie sa primeasca macar un link intern (v278) ──
// Motiv: doua articole erau legate doar in romana; versiunile EN/DE/FR/ES/IT nu primeau
// niciun link, pentru ca linkul se pierduse la traducere. Invizibil fara verificare.
try {
  let orphans = 0;
  LANGS.forEach(l => {
    const inbound = new Map(ARTICLES.map(a => [a.slugs[l] || a.slugs.ro, 0]));
    ARTICLES.forEach(a => {
      const t = a.content?.[l]; if (!t) return;
      const self = a.slugs[l] || a.slugs.ro;
      for (const m of t.matchAll(/\]\(\/([a-z]{2})\/blog\/([^)\s#]+)\)/g)) {
        if (m[1] !== l) continue;
        if (inbound.has(m[2]) && m[2] !== self) inbound.set(m[2], inbound.get(m[2]) + 1);
      }
    });
    [...inbound].filter(([, n]) => n === 0).forEach(([slug]) => {
      orphans++; err(`articol fara niciun link intern primit: /${l}/blog/${slug}`);
    });
  });
  console.log(`  Articole orfane: ${orphans} (din ${ARTICLES.length * LANGS.length} combinatii articol x limba)`);
} catch (e) { warn(`nu am putut verifica articolele orfane: ${e.message}`); }

// ── 15. BreadcrumbList pe fiecare tip de pagina, mai putin homepage (v278) ──
try {
  const walk = (d, acc = []) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p, acc);
      else if (e.name === 'page.js') acc.push(p);
    }
    return acc;
  };
  const pages = walk(path.join(ROOT, 'app'));
  const missing = pages.filter(p => {
    if (p.endsWith(path.join('app', '[locale]', 'page.js'))) return false; // radacina: breadcrumb de un element nu are sens
    return !fs.readFileSync(p, 'utf8').includes('BreadcrumbList');
  });
  missing.forEach(p => err(`BreadcrumbList lipseste: ${path.relative(ROOT, p)}`));
  console.log(`  BreadcrumbList: ${pages.length - 1 - missing.length}/${pages.length - 1} tipuri de pagina (homepage exclusa)`);
} catch (e) { warn(`nu am putut verifica BreadcrumbList: ${e.message}`); }

// ── 16. feed RSS per limba (v279) ──
// Motiv: exista un singur feed, in romana, pentru un site cu 6 limbi. Garda verifica
// atat ruta cat si link-urile de descoperire din layout — daca dispare oricare, pica.
try {
  const feedRoute = path.join(ROOT, 'app/[locale]/feed.xml/route.js');
  if (!fs.existsSync(feedRoute)) {
    err('ruta app/[locale]/feed.xml/route.js lipseste (feed RSS per limba)');
  } else {
    const src = fs.readFileSync(feedRoute, 'utf8');
    LANGS.forEach(l => {
      if (!new RegExp(`\\b${l}\\s*:`).test(src)) err(`feed RSS: lipseste limba '${l}' din CHANNEL/LANG_TAG`);
    });
    if (!src.includes('generateStaticParams')) err('feed RSS: lipseste generateStaticParams — feed-urile nu se prerandeaza');
    const layout = fs.readFileSync(path.join(ROOT, 'app/[locale]/layout.js'), 'utf8');
    if (!layout.includes('application/rss+xml')) err('layout: lipseste <link rel="alternate" type="application/rss+xml"> — feed-urile nu sunt descoperibile');
    console.log(`  Feed RSS: 1 global + ${LANGS.length} pe limbi, link-uri de descoperire in layout`);
  }
} catch (e) { warn(`nu am putut verifica feed-urile RSS: ${e.message}`); }

// ── 17. HUB_SLUG + FAQ de categorie in llms-full.txt (v280) ──
// Motiv: cele 150 de intrebari de categorie scrise in v277 existau doar ca FAQPage in
// pagina; fisierul citit de pipeline-urile LLM nu le continea deloc. Garda verifica si
// ca slug-urile din HUB_SLUG corespund constantelor SLUGS din paginile de hub.
try {
  const hubSrc = fs.readFileSync(path.join(ROOT, 'data/hubFaq.js'), 'utf8');
  const HUBS = ['tamplarie-pvc', 'tamplarie-aluminiu', 'umbrire', 'accesorii', 'sisteme-nzeb'];
  if (!hubSrc.includes('export const HUB_SLUG')) {
    err('HUB_SLUG lipseste din data/hubFaq.js');
  } else {
    const block = hubSrc.split('export const HUB_SLUG')[1].split('};')[0];
    let checked = 0;
    HUBS.forEach(h => {
      const line = block.split('\n').find(l => l.includes(`'${h}'`));
      if (!line) { err(`HUB_SLUG: lipseste hub-ul '${h}'`); return; }
      const page = fs.readFileSync(path.join(ROOT, `app/[locale]/${h}/page.js`), 'utf8');
      const m = page.match(/^const SLUGS(?:_[A-Z_]+)? = (\{[^}]*\});/m);
      if (!m) { warn(`nu am gasit constanta SLUGS in app/[locale]/${h}/page.js`); return; }
      LANGS.forEach(l => {
        const want = (m[1].match(new RegExp(`['"]?${l}['"]?\\s*:\\s*['"]([^'"]+)['"]`)) || [])[1];
        const got  = (line.match(new RegExp(`${l}\\s*:\\s*'([^']+)'`)) || [])[1];
        if (want && got && want !== got) err(`HUB_SLUG[${h}][${l}] = '${got}', dar pagina foloseste '${want}'`);
        else checked++;
      });
    });
    console.log(`  HUB_SLUG: ${checked} slug-uri verificate contra paginilor de hub`);
  }
  const route = fs.readFileSync(path.join(ROOT, 'app/llms-full.txt/route.js'), 'utf8');
  if (!route.includes('HUB_FAQ')) err('llms-full.txt nu include FAQ-ul de categorie (HUB_FAQ)');
} catch (e) { warn(`nu am putut verifica HUB_SLUG: ${e.message}`); }

console.log(`\n=== Rezultat: ${errors} erori, ${warnings} avertismente ===`);
if (errors) { console.log('NU face commit — repara erorile intai.\n'); process.exit(1); }
console.log(errors === 0 && warnings === 0 ? 'Totul perfect. Safe de commit.\n' : 'Fara erori blocante. Safe de commit (verifica avertismentele).\n');
