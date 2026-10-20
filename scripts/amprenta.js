#!/usr/bin/env node
// === Amprenta build-ului — v284 ============================================
//
// Regula 3 din contextul proiectului, sectiunea 11.1: „Compara build-ul cu
// precedentul, nu doar cu asteptarile." Era singurul instrument din lista care
// nu exista.
//
// De ce e nevoie de el: validate-blog.js are 17 garzi, si fiecare prinde exact
// ce a fost scrisa sa prinda. Nicio garda nu prinde ce nu ne-am gandit sa
// intrebam. Amprenta nu intreaba nimic — masoara starea calculata a fiecarei
// pagini si o compara cu masuratoarea precedenta. Orice s-a schimbat apare,
// inclusiv ce nu stiam ca trebuie verificat.
//
// Ce masoara, pentru fiecare pagina si fiecare limba:
//   - titlul si meta-descrierea, rezultate din generateMetadata() EXECUTAT
//   - canonical, setul de hreflang, directiva robots
//   - tipurile de schema JSON-LD emise efectiv de componenta randata
//   - linkurile interne
//   - lungimea si amprenta textului vizibil
//
// Nu citeste sursa cu regex. Importa modulul si il ruleaza — regula 2. Ca sa
// fie posibil pe fisiere JSX fara node_modules, scripts/amprenta-loader.mjs
// transpileaza JSX si furnizeaza stuburi pentru next/*, next-intl si react.
// Traducerile vin din messages/<limba>.json reale, deci textele masurate sunt
// cele adevarate.
//
// FOLOSIRE
//   node scripts/amprenta.js snapshot [fisier.json]     masoara starea curenta
//   node scripts/amprenta.js compara vechi.json nou.json   raporteaza diferentele
//   node scripts/amprenta.js verifica vechi.json        masoara acum si compara
//
// FLUX TIPIC, in jurul unei modificari:
//   node scripts/amprenta.js snapshot .amprenta/inainte.json
//   ... modificarile ...
//   node scripts/amprenta.js verifica .amprenta/inainte.json
//
// Cod de iesire: 0 daca nu sunt diferente, 1 daca sunt. Diferentele NU sunt
// erori — sunt lucruri de confirmat ca intentionate.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');

const ROOT = path.join(__dirname, '..');
const LOADER = path.join(__dirname, 'amprenta-loader.mjs');

// ─────────────────────────── utilitare ─────────────────────────────────────

const hash = (s) => crypto.createHash('sha1').update(s, 'utf8').digest('hex').slice(0, 12);
const uniqSort = (a) => [...new Set(a)].sort();

function paginiDinApp() {
  const out = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === 'page.js') out.push(p);
    }
  };
  walk(path.join(ROOT, 'app'));
  return out.sort();
}

/** 'app/[locale]/produse/[slug]/page.js' -> ['locale','slug'] */
function segmenteDinamice(rutaRel) {
  return [...rutaRel.matchAll(/\[(?:\.\.\.)?([^\]]+)\]/g)].map((m) => m[1]);
}

/** Cheie stabila pentru o pagina + parametrii ei. Nu depinde de canonical,
 *  ca o schimbare de canonical sa apara ca diferenta de camp, nu ca pagina
 *  stearsa plus pagina noua. */
function cheie(rutaRel, params) {
  const p = Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join(',');
  return p ? `${rutaRel}|${p}` : rutaRel;
}

// ─────────────────── parcurgerea arborelui de elemente ─────────────────────
//
// Stubul de JSX produce noduri { __amprentaEl, type, props }. Parcurgem
// arborele, apeland componentele-functie (si asteptandu-le, daca sunt async),
// exact cum ar face randarea pe server.

const MAX_NODURI = 300000;
const MAX_ADANCIME = 300;

async function parcurge(nod, acc, adancime = 0) {
  if (nod == null || nod === false || nod === true) return;
  if (acc.noduri > MAX_NODURI || adancime > MAX_ADANCIME) { acc.trunchiat = true; return; }

  if (Array.isArray(nod)) {
    for (const n of nod) await parcurge(n, acc, adancime + 1);
    return;
  }

  if (typeof nod === 'string' || typeof nod === 'number') {
    const s = String(nod).trim();
    if (s) acc.text.push(s);
    return;
  }

  if (typeof nod !== 'object' || !nod.__amprentaEl) return;
  acc.noduri++;

  const { type, props = {} } = nod;

  // Componenta-functie: o apelam si continuam cu ce returneaza.
  if (typeof type === 'function') {
    let rezultat;
    try {
      rezultat = type(props);
      if (rezultat && typeof rezultat.then === 'function') rezultat = await rezultat;
    } catch (e) {
      acc.componenteEsuate.push(`${type.name || 'anonima'}: ${String(e.message).slice(0, 60)}`);
      return;
    }
    await parcurge(rezultat, acc, adancime + 1);
    return;
  }

  // JSON-LD: tipurile de schema emise efectiv.
  if (type === 'script' && props.type === 'application/ld+json') {
    const brut = props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html;
    if (brut) {
      try {
        const obiect = JSON.parse(brut);
        for (const item of Array.isArray(obiect) ? obiect : (obiect['@graph'] || [obiect])) {
          const t = item && item['@type'];
          if (Array.isArray(t)) acc.scheme.push(...t);
          else if (t) acc.scheme.push(String(t));
        }
      } catch {
        acc.scheme.push('!JSON-LD-INVALID');
      }
    }
  }

  // Orice href de tip string, indiferent de componenta care il poarta.
  if (typeof props.href === 'string') {
    const h = props.href;
    if (h.startsWith('/')) acc.linkuri.push(h);
    else if (h.startsWith('https://www.neofort-biz.ro')) acc.linkuri.push(h.replace('https://www.neofort-biz.ro', ''));
  }

  // Text injectat prin dangerouslySetInnerHTML, in afara JSON-LD.
  if (props.dangerouslySetInnerHTML && props.type !== 'application/ld+json' && type !== 'script') {
    const h = props.dangerouslySetInnerHTML.__html;
    if (typeof h === 'string') acc.text.push(h.replace(/<[^>]+>/g, ' ').trim());
  }

  await parcurge(props.children, acc, adancime + 1);
}

// ───────────────────────── masurarea unei pagini ───────────────────────────

async function masoara(mod, rutaRel, params) {
  const inreg = { ruta: rutaRel, params, stare: 'ok' };

  globalThis.__AMPRENTA_LOCALE = params.locale || 'ro';
  const arg = { params: Promise.resolve(params) };

  if (typeof mod.generateMetadata === 'function') {
    try {
      const m = await mod.generateMetadata(arg);
      inreg.titlu = typeof m.title === 'string' ? m.title : (m.title && m.title.absolute) || null;
      inreg.descriere = m.description || null;
      inreg.canonical = (m.alternates && m.alternates.canonical) || null;
      const lang = (m.alternates && m.alternates.languages) || {};
      inreg.hreflang = Object.keys(lang).sort().map((k) => `${k}=${lang[k]}`);
      if (m.robots) {
        inreg.robots = typeof m.robots === 'string'
          ? m.robots
          : `index=${m.robots.index} follow=${m.robots.follow}`;
      }
      inreg.og = m.openGraph ? `${m.openGraph.title || ''}|${(m.openGraph.images && m.openGraph.images.length) || 0}` : null;
    } catch (e) {
      inreg.stare = 'metadata-esuat';
      inreg.eroare = String(e.message).slice(0, 160);
    }
  }

  if (typeof mod.default === 'function') {
    const acc = { text: [], scheme: [], linkuri: [], noduri: 0, componenteEsuate: [], trunchiat: false };
    try {
      let arbore = mod.default(arg);
      if (arbore && typeof arbore.then === 'function') arbore = await arbore;
      await parcurge(arbore, acc);

      inreg.scheme = acc.scheme.sort();
      inreg.linkuri = uniqSort(acc.linkuri);
      const text = acc.text.join(' ').replace(/\s+/g, ' ').trim();
      inreg.textLungime = text.length;
      inreg.textAmprenta = hash(text);
      inreg.noduri = acc.noduri;
      if (acc.trunchiat) inreg.trunchiat = true;
      if (acc.componenteEsuate.length) inreg.componenteEsuate = uniqSort(acc.componenteEsuate);
    } catch (e) {
      if (e && e.__notFound) { inreg.stare = 'notFound'; }
      else {
        inreg.stare = inreg.stare === 'ok' ? 'randare-esuata' : inreg.stare;
        inreg.eroare = (inreg.eroare ? inreg.eroare + ' | ' : '') + String(e.message).slice(0, 160);
      }
    }
  }

  return inreg;
}

// ──────────────────────────── snapshot ─────────────────────────────────────

async function snapshot() {
  const { register } = require('module');
  process.env.AMPRENTA_ROOT = ROOT;
  register(pathToFileURL(LOADER).href, pathToFileURL(path.join(ROOT, '/')).href);

  const { LOCALES } = await import(pathToFileURL(path.join(ROOT, 'lib/constants.js')).href);

  const pagini = paginiDinApp();
  const inregistrari = {};
  const probleme = [];
  let nr = 0;

  for (const fisier of pagini) {
    const rutaRel = path.relative(ROOT, fisier).replace(/\\/g, '/').replace(/\/page\.js$/, '');
    let mod;
    try {
      mod = await import(pathToFileURL(fisier).href);
    } catch (e) {
      probleme.push(`${rutaRel}: nu se poate importa — ${String(e.message).slice(0, 120)}`);
      inregistrari[rutaRel] = { ruta: rutaRel, stare: 'import-esuat', eroare: String(e.message).slice(0, 160) };
      continue;
    }

    // Lista de parametri: din generateStaticParams daca exista (sursa unica de
    // adevar, aceeasi pe care o foloseste si Next), altfel din segmentele
    // dinamice ale caii. Niciodata din memorie.
    let listaParams;
    if (typeof mod.generateStaticParams === 'function') {
      try {
        listaParams = await mod.generateStaticParams();
      } catch (e) {
        probleme.push(`${rutaRel}: generateStaticParams a esuat — ${String(e.message).slice(0, 100)}`);
        listaParams = null;
      }
    }
    if (!Array.isArray(listaParams) || !listaParams.length) {
      const dinamice = segmenteDinamice(rutaRel);
      listaParams = dinamice.length === 1 && dinamice[0] === 'locale'
        ? LOCALES.map((locale) => ({ locale }))
        : (dinamice.length === 0 ? [{}] : null);
      if (!listaParams) {
        probleme.push(`${rutaRel}: segmente dinamice ${JSON.stringify(dinamice)} fara generateStaticParams — pagina nu poate fi enumerata`);
        continue;
      }
    }
    // O pagina sub [locale] fara locale in params se enumera pe toate limbile.
    const extins = [];
    for (const p of listaParams) {
      if (segmenteDinamice(rutaRel).includes('locale') && !p.locale) {
        for (const locale of LOCALES) extins.push({ ...p, locale });
      } else extins.push(p);
    }

    for (const params of extins) {
      const inreg = await masoara(mod, rutaRel, params);
      inregistrari[cheie(rutaRel, params)] = inreg;
      nr++;
      if (nr % 100 === 0) process.stdout.write(`  ...${nr} pagini masurate\r`);
    }
  }

  return {
    versiune: 1,
    generat: new Date().toISOString(),
    nrPagini: nr,
    probleme,
    pagini: inregistrari,
  };
}

// ──────────────────────────── comparatie ───────────────────────────────────

const CAMPURI = ['titlu', 'descriere', 'canonical', 'hreflang', 'robots', 'og',
  'scheme', 'linkuri', 'textLungime', 'textAmprenta', 'stare', 'eroare',
  'componenteEsuate', 'trunchiat'];

function egale(a, b) {
  if (Array.isArray(a) || Array.isArray(b)) return JSON.stringify(a || []) === JSON.stringify(b || []);
  return (a === undefined ? null : a) === (b === undefined ? null : b);
}

function scurt(v) {
  if (v === undefined || v === null) return '(lipsa)';
  if (Array.isArray(v)) return v.length <= 4 ? JSON.stringify(v) : `[${v.length} elemente] ${JSON.stringify(v.slice(0, 3))}…`;
  const s = String(v);
  return s.length > 110 ? s.slice(0, 110) + '…' : s;
}

function compara(vechi, nou) {
  const cheiVechi = Object.keys(vechi.pagini);
  const cheiNoi = Object.keys(nou.pagini);
  const sterse = cheiVechi.filter((k) => !(k in nou.pagini));
  const adaugate = cheiNoi.filter((k) => !(k in vechi.pagini));
  const comune = cheiVechi.filter((k) => k in nou.pagini);

  const schimbate = [];
  for (const k of comune) {
    const a = vechi.pagini[k], b = nou.pagini[k];
    const dif = CAMPURI.filter((c) => !egale(a[c], b[c])).map((c) => ({ camp: c, inainte: a[c], dupa: b[c] }));
    if (dif.length) schimbate.push({ cheie: k, dif });
  }

  console.log(`\n=== Amprenta: ${path.basename(process.argv[3] || 'vechi')} → ${path.basename(process.argv[4] || 'acum')} ===`);
  console.log(`    ${vechi.nrPagini} pagini  →  ${nou.nrPagini} pagini\n`);

  if (sterse.length) {
    console.log(`  ✗ ${sterse.length} pagini DISPARUTE:`);
    sterse.forEach((k) => console.log(`      ${k}`));
    console.log();
  }
  if (adaugate.length) {
    console.log(`  + ${adaugate.length} pagini NOI:`);
    adaugate.forEach((k) => console.log(`      ${k}`));
    console.log();
  }

  if (schimbate.length) {
    // Grupam pe forma diferentei: 336 de pagini cu aceeasi schimbare sunt un
    // singur lucru de confirmat, nu 336.
    const grupuri = new Map();
    for (const s of schimbate) {
      const semnatura = s.dif.map((d) => d.camp).join('+');
      if (!grupuri.has(semnatura)) grupuri.set(semnatura, []);
      grupuri.get(semnatura).push(s);
    }
    console.log(`  ~ ${schimbate.length} pagini MODIFICATE, in ${grupuri.size} tipare:\n`);
    for (const [semnatura, lista] of [...grupuri].sort((a, b) => b[1].length - a[1].length)) {
      console.log(`    ── ${semnatura}  (${lista.length} pagini)`);
      for (const d of lista[0].dif) {
        console.log(`         ${d.camp}:`);
        console.log(`           inainte: ${scurt(d.inainte)}`);
        console.log(`           dupa   : ${scurt(d.dupa)}`);
      }
      const exemple = lista.slice(0, 3).map((s) => s.cheie);
      console.log(`         exemple: ${exemple.join(' · ')}${lista.length > 3 ? ` … si inca ${lista.length - 3}` : ''}`);
      console.log();
    }
  }

  const total = sterse.length + adaugate.length + schimbate.length;
  if (!total) {
    console.log('  Nicio diferenta. Starea calculata a celor ' + nou.nrPagini + ' pagini e identica.\n');
  } else {
    console.log(`  TOTAL: ${total} pagini difera. Diferentele nu sunt erori —`);
    console.log('  sunt lucruri de confirmat ca intentionate.\n');
  }
  if (nou.probleme.length) {
    console.log(`  Probleme de masurare (${nou.probleme.length}):`);
    nou.probleme.forEach((p) => console.log(`      ${p}`));
    console.log();
  }
  return total;
}

// ──────────────────────────────── main ─────────────────────────────────────

async function main() {
  const [, , comanda, a, b] = process.argv;

  if (!comanda || comanda === '--help' || comanda === '-h') {
    console.log(`
Amprenta build-ului — compara starea calculata a site-ului intre doua momente.

  node scripts/amprenta.js snapshot [fisier.json]
      Masoara toate paginile si scrie amprenta. Implicit: .amprenta/curent.json

  node scripts/amprenta.js compara vechi.json nou.json
      Raporteaza diferentele intre doua amprente deja salvate.

  node scripts/amprenta.js verifica vechi.json
      Masoara acum si compara direct cu amprenta data.

Cod de iesire: 0 fara diferente, 1 cu diferente.
`);
    process.exit(0);
  }

  if (comanda === 'snapshot') {
    const dest = a || path.join(ROOT, '.amprenta/curent.json');
    console.log('Masor starea calculata a paginilor...');
    const amp = await snapshot();
    fs.mkdirSync(path.dirname(path.resolve(dest)), { recursive: true });
    fs.writeFileSync(path.resolve(dest), JSON.stringify(amp, null, 1));
    console.log(`\n  ${amp.nrPagini} pagini masurate → ${dest}`);
    if (amp.probleme.length) {
      console.log(`\n  Probleme de masurare (${amp.probleme.length}):`);
      amp.probleme.forEach((p) => console.log(`      ${p}`));
    }
    const esuate = Object.values(amp.pagini).filter((p) => p.stare !== 'ok');
    if (esuate.length) console.log(`\n  ${esuate.length} pagini cu stare != ok (vezi campul "stare" in fisier)`);
    process.exit(0);
  }

  if (comanda === 'compara') {
    if (!a || !b) { console.error('Lipsesc cele doua fisiere. Vezi --help.'); process.exit(2); }
    const vechi = JSON.parse(fs.readFileSync(path.resolve(a), 'utf8'));
    const nou = JSON.parse(fs.readFileSync(path.resolve(b), 'utf8'));
    process.exit(compara(vechi, nou) ? 1 : 0);
  }

  if (comanda === 'verifica') {
    if (!a) { console.error('Lipseste amprenta de referinta. Vezi --help.'); process.exit(2); }
    const vechi = JSON.parse(fs.readFileSync(path.resolve(a), 'utf8'));
    console.log('Masor starea curenta...');
    const nou = await snapshot();
    process.exit(compara(vechi, nou) ? 1 : 0);
  }

  console.error(`Comanda necunoscuta: ${comanda}. Vezi --help.`);
  process.exit(2);
}

main().catch((e) => { console.error('\namprenta: ', e); process.exit(2); });
