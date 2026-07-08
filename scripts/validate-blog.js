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

console.log(`\n=== Rezultat: ${errors} erori, ${warnings} avertismente ===`);
if (errors) { console.log('NU face commit — repara erorile intai.\n'); process.exit(1); }
console.log(errors === 0 && warnings === 0 ? 'Totul perfect. Safe de commit.\n' : 'Fara erori blocante. Safe de commit (verifica avertismentele).\n');
