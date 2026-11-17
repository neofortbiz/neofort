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
// v331 (deciziile lui Dan, 17.11.2026): preturile pe mp sunt de PORNIRE, pentru configuratia
// de baza, si NU includ montajul (se oferteaza separat). Nu se publica preturi pe bucata
// de fereastra (depind de dimensiuni, geam, feronerie, culoare, optimizarea debitarii).
// Montaj: Bucuresti si Ilfov si, la cerere, oriunde in Romania si in UE.
// Aceste trei texte sunt SURSA UNICA: paginile le importa, iar garda 33 din
// validate-blog.js verifica llms.txt, SKILL.md, serverul MCP si Footer fata de ele.
export const PRICE_CONDITION = {
  ro: 'Preț orientativ de pornire, în EUR, fără TVA (TVA 21% se adaugă la facturare), pentru configurația de bază, fără montaj. Montajul se ofertează separat. Prețul ferm este cel din oferta scrisă.',
  en: 'Indicative starting price, in EUR, without VAT (21% VAT is added on the invoice), for the basic configuration, without installation. Installation is quoted separately. The binding price is the one in the written offer.',
  de: 'Richtpreis ab, in EUR, ohne MwSt. (21 % MwSt. kommen auf der Rechnung hinzu), für die Grundkonfiguration, ohne Montage. Die Montage wird separat angeboten. Verbindlich ist der Preis im schriftlichen Angebot.',
  fr: 'Prix indicatif de départ, en EUR, hors TVA (TVA de 21 % ajoutée sur la facture), pour la configuration de base, hors pose. La pose fait l\'objet d\'un devis séparé. Le prix ferme est celui du devis écrit.',
  es: 'Precio orientativo de partida, en EUR, sin IVA (el IVA del 21 % se añade en la factura), para la configuración básica, sin instalación. La instalación se presupuesta aparte. El precio en firme es el del presupuesto escrito.',
  it: 'Prezzo indicativo di partenza, in EUR, IVA esclusa (l\'IVA del 21% si aggiunge in fattura), per la configurazione base, posa esclusa. La posa si quota a parte. Il prezzo definitivo è quello del preventivo scritto.',
};

export const PRICE_FACTORS = {
  ro: 'Prețul unei ferestre concrete depinde de dimensiuni, de configurația geamului (dublu sau triplu, Low-E, de siguranță), de feronerie, de culoarea profilului (standard sau extrastandard, la comandă specială) și de optimizarea debitării. De aceea nu publicăm prețuri pe bucată: prețul exact îl primiți în oferta scrisă, în 48h.',
  en: 'The price of a specific window depends on its size, the glazing configuration (double or triple, Low-E, safety glass), the hardware, the profile colour (standard or non-standard, made to special order) and cutting optimisation. That is why we do not publish per-unit prices: you get the exact price in the written quote, within 48h.',
  de: 'Der Preis eines konkreten Fensters hängt von den Maßen, der Verglasung (Zweifach oder Dreifach, Low-E, Sicherheitsglas), den Beschlägen, der Profilfarbe (Standard oder Sonderfarbe auf Sonderbestellung) und der Zuschnittoptimierung ab. Deshalb veröffentlichen wir keine Stückpreise: Den genauen Preis erhalten Sie im schriftlichen Angebot innerhalb von 48h.',
  fr: 'Le prix d\'une fenêtre donnée dépend de ses dimensions, de la composition du vitrage (double ou triple, Low-E, sécurité), de la quincaillerie, de la couleur du profilé (standard ou hors standard, sur commande spéciale) et de l\'optimisation de la découpe. C\'est pourquoi nous ne publions pas de prix à l\'unité : le prix exact figure dans le devis écrit, sous 48h.',
  es: 'El precio de una ventana concreta depende de sus medidas, de la configuración del vidrio (doble o triple, Low-E, de seguridad), de los herrajes, del color del perfil (estándar o no estándar, por pedido especial) y de la optimización del corte. Por eso no publicamos precios por unidad: el precio exacto lo recibe en la oferta escrita, en 48h.',
  it: 'Il prezzo di una finestra concreta dipende dalle dimensioni, dalla composizione del vetro (doppio o triplo, Low-E, di sicurezza), dalla ferramenta, dal colore del profilo (standard o fuori standard, su ordine speciale) e dall\'ottimizzazione del taglio. Per questo non pubblichiamo prezzi a pezzo: il prezzo esatto lo ricevete nell\'offerta scritta, entro 48h.',
};

export const MONTAJ_SCOPE = {
  ro: 'Montaj profesional în București și Ilfov și, la cerere, oriunde în România și în UE; montajul se ofertează separat. Livrare în toată UE.',
  en: 'Professional installation in Bucharest and Ilfov and, on request, anywhere in Romania and the EU; installation is quoted separately. Delivery across the EU.',
  de: 'Fachmontage in Bukarest und Ilfov und auf Anfrage überall in Rumänien und in der EU; die Montage wird separat angeboten. Lieferung in die gesamte EU.',
  fr: 'Pose professionnelle à Bucarest et Ilfov et, sur demande, partout en Roumanie et dans l\'UE ; la pose fait l\'objet d\'un devis séparé. Livraison dans toute l\'UE.',
  es: 'Instalación profesional en Bucarest e Ilfov y, bajo pedido, en cualquier lugar de Rumanía y de la UE; la instalación se presupuesta aparte. Entrega en toda la UE.',
  it: 'Posa professionale a Bucarest e Ilfov e, su richiesta, ovunque in Romania e nell\'UE; la posa si quota a parte. Consegna in tutta l\'UE.',
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
