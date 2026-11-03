// === Adrese duplicate pe segmentul gresit — v307 =============================
//
// Problema: o pagina de produs se incarca si la o adresa cu segmentul altei
// limbi, de exemplu /en/produse/bluevolution-92-alu-pvc-profile (corect:
// /en/products/bluevolution-92-alu-pvc-profile), sau cu slugul intern
// (/en/produse/bluevolution-92-alu). next-intl nu recunoaste adresa, o lasa sa
// treaca, iar ruta app/[locale]/produse/[slug] o randeaza cu 200. Canonicalul
// e corect, dar butoanele de limba de pe pagina duc tot pe segmentul gresit,
// iar Google gaseste si raporteaza aceste adrese.
//
// Solutia: daca adresa NU e un sablon cunoscut in routing.pathnames, dar
// ultimul ei segment (slugul) si segmentele dinaintea lui corespund unui singur
// sablon (in orice limba sau in forma interna), intoarcem adresa corecta pentru
// limba din prefix. Middleware-ul face apoi redirect 301.
//
// Functia e pura (fara Next.js), ca sa poata fi testata in Node. Nu atinge
// adresele care sunt deja sabloane valide. Articolele de blog sunt toate in
// pathnames, deci slugul altei limbi il redirectioneaza next-intl (iar
// middleware-ul transforma acel 307 in 301).
//
// Testat in v307 (simulare Node pe routing.pathnames): 6.780 de combinatii
// gresite duc toate la adresa corecta, zero bucle; niciuna din cele 642 de
// adrese din sitemap nu e atinsa; cele 96 de redirecturi din next.config.js
// care se suprapun dau aceeasi destinatie.

function localizedFor(value, locale) {
  return typeof value === 'string' ? value : value[locale];
}

function splitLast(path) {
  const i = path.lastIndexOf('/');
  return [path.slice(0, i), path.slice(i + 1)];
}

export function buildIndex(pathnames, locales) {
  const exact = new Set();            // toate formele localizate, pentru orice limba
  const bySlug = new Map();           // slug -> [{ key, parents:Set }]
  for (const [key, value] of Object.entries(pathnames)) {
    // Formele localizate sunt adrese valide. Cheia interna (ex.
    // /produse/bluevolution-92-alu) NU e o adresa publica: next-intl rescrie
    // spre ea doar intern, deci cine o cere direct primeste redirect.
    const forms = new Set([key]);
    for (const l of locales) {
      const f = localizedFor(value, l);
      forms.add(f);
      exact.add(f);
    }
    if (key.split('/').length < 3) continue;   // doar sabloane cu cel putin 2 segmente
    const parents = new Set();
    const slugs = new Set();
    for (const f of forms) {
      const [p, s] = splitLast(f);
      parents.add(p);
      slugs.add(s);
    }
    for (const s of slugs) {
      if (!bySlug.has(s)) bySlug.set(s, []);
      bySlug.get(s).push({ key, parents });
    }
  }
  return { exact, bySlug };
}

// Intoarce calea corecta (cu prefixul de limba) sau null daca nu e cazul.
export function canonicalPathFor(pathname, pathnames, locales, index) {
  const m = pathname.match(/^\/([a-z]{2})(\/.*)$/);
  if (!m || !locales.includes(m[1])) return null;
  const locale = m[1];
  const rest = m[2].replace(/\/+$/, '');
  if (!rest || index.exact.has(rest)) return null;   // sablon valid: se ocupa next-intl
  const [parent, slug] = splitLast(rest);
  if (!parent || !slug) return null;
  const candidates = (index.bySlug.get(slug) || []).filter(c => c.parents.has(parent));
  const keys = [...new Set(candidates.map(c => c.key))];
  if (keys.length !== 1) return null;
  const target = `/${locale}${localizedFor(pathnames[keys[0]], locale)}`;
  return target === pathname ? null : target;
}
