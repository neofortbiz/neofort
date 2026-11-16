// v317: date structurate schema.org pentru paginile de prețuri.
//
// Construiește un OfferCatalog din exact aceleași rânduri afișate în tabelul
// paginii (sursă unică — dacă prețul se schimbă în tabel, se schimbă și aici).
// Fiecare rând devine un Offer pentru un Service, cu UnitPriceSpecification:
// interval min–max, EUR, fără TVA (valueAddedTaxIncluded: false), pe m² sau pe bucată.
//
// Intenționat Service + OfferCatalog, nu Product: Product ar cere în Search Console
// imagine, livrare, politică de retur (fișe de magazin online), iar aici e vorba
// de lucrări la comandă, cu preț orientativ.

// Separatori de mii: punct (RO/DE/IT/ES), virgulă (EN), spațiu sau spațiu îngust (FR: „6 000 €”).
const NUM = '(\\d{1,3}(?:[.,\\u0020\\u00a0\\u202f]\\d{3})+|\\d+)';
const RANGE = `${NUM}(?:\\s*[–-]\\s*${NUM})?`;
const UNIT = '(?:\\s*\\/\\s*([^\\s·,;)]+))?';
// Doar numerele lipite de monedă: „€150–200/m²” sau „140–200 EUR/m²”, „225–300 €/mp”, „6.000 €”.
const RE_PRE = new RegExp(`€\\s*${RANGE}${UNIT}`);
const RE_POST = new RegExp(`${RANGE}\\s*(?:EUR|€)${UNIT}`);

const toNum = (s) => Number(String(s).replace(/[.,\u0020\u00a0\u202f](?=\d{3}(?!\d))/g, ''));

const UNIT_AREA = ['mp', 'm²', 'm2'];

// Întoarce { min, max, unitCode, unitText } sau null dacă textul nu conține un preț în EUR.
export function parsePrice(text) {
  const t = String(text || '');
  const a = t.match(RE_PRE), b = t.match(RE_POST);
  const m = a && b ? (a.index <= b.index ? a : b) : (a || b);
  if (!m) return null;
  const min = toNum(m[1]);
  const max = m[2] ? toNum(m[2]) : min;
  if (!Number.isFinite(min) || !Number.isFinite(max) || min <= 0 || max < min) return null;
  const u = (m[3] || '').toLowerCase();
  const area = UNIT_AREA.includes(u);
  const unit = area ? { unitCode: 'MTK', unitText: 'm²' } : (u ? { unitCode: 'H87', unitText: m[3] } : {});
  return { min, max, ...unit };
}

const spec = (p, description) => {
  const s = {
    '@type': 'UnitPriceSpecification',
    priceCurrency: 'EUR',
    valueAddedTaxIncluded: false,
  };
  if (p.min === p.max) s.price = p.min; else { s.minPrice = p.min; s.maxPrice = p.max; }
  if (p.unitCode) { s.unitCode = p.unitCode; s.unitText = p.unitText; }
  if (description) s.description = description;
  return s;
};

// v327: conditia pretului, in limba paginii. Un agent care citeste doar JSON-LD
// nu vede nota de sub tabel; fara conditie ar lua intervalul drept pret ferm,
// cu TVA. Textul e acelasi cu nota afisata si cu llms.txt.
export const PRICE_CONDITION = {
  ro: 'Preț orientativ, în EUR, fără TVA (TVA 21% se adaugă la facturare), cu montaj standard în București și Ilfov. Prețul ferm este cel din oferta scrisă.',
  en: 'Indicative price, in EUR, without VAT (21% VAT is added on the invoice), with standard installation in Bucharest and Ilfov. The binding price is the one in the written offer.',
  de: 'Richtpreis in EUR, ohne MwSt. (21 % MwSt. kommen auf der Rechnung hinzu), mit Standardmontage in Bukarest und Ilfov. Verbindlich ist der Preis im schriftlichen Angebot.',
  fr: 'Prix indicatif, en EUR, hors TVA (TVA de 21 % ajoutée sur la facture), avec pose standard à Bucarest et en Ilfov. Le prix ferme est celui du devis écrit.',
  es: 'Precio orientativo, en EUR, sin IVA (el IVA del 21 % se añade en la factura), con instalación estándar en Bucarest e Ilfov. El precio en firme es el del presupuesto escrito.',
  it: 'Prezzo indicativo, in EUR, IVA esclusa (l\'IVA del 21% si aggiunge in fattura), con posa standard a Bucarest e Ilfov. Il prezzo definitivo è quello del preventivo scritto.',
};

// items: [{ name, description, prices: [ 'text cu preț', ... ] }]
// Rândurile fără niciun preț recunoscut sunt sărite (nu se inventează nimic).
export function offerCatalogSchema({ base, url, name, items, locale }) {
  const condition = PRICE_CONDITION[locale] || PRICE_CONDITION.ro;
  const offers = items.map((it) => {
    const specs = (it.prices || [])
      .map((txt) => { const p = parsePrice(txt); return p ? spec(p, it.prices.length > 1 ? String(txt).trim() : undefined) : null; })
      .filter(Boolean);
    if (!specs.length) return null;
    return {
      '@type': 'Offer',
      description: condition,
      itemOffered: {
        '@type': 'Service',
        name: it.name,
        ...(it.description ? { description: it.description } : {}),
        provider: { '@id': `${base}/#localbusiness` },
        areaServed: [{ '@type': 'City', name: 'București' }, { '@type': 'AdministrativeArea', name: 'Ilfov' }],
      },
      priceSpecification: specs.length === 1 ? specs[0] : specs,
      seller: { '@id': `${base}/#localbusiness` },
    };
  }).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': `${url}#prices`,
    name,
    url,
    numberOfItems: offers.length,
    itemListElement: offers,
  };
}
