import { Link } from '../../../../i18n/navigation';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

const SLUGS = {
  ro: 'umbrire/preturi-sisteme-umbrire',
  en: 'shading-systems/shading-prices',
  de: 'beschattungssysteme/beschattung-preise',
  fr: 'systemes-occultation/prix-occultation',
  es: 'sistemas-sombreado/precios-sombreado',
  it: 'sistemi-oscuramento/prezzi-oscuramento',
};

const PARENT_SLUGS = {
  ro: 'umbrire', en: 'shading-systems',
  de: 'beschattungssysteme', fr: 'systemes-occultation',
  es: 'sistemas-sombreado', it: 'sistemi-oscuramento',
};

const UI = {
  "ro": {
    "h1": "Preturi Sisteme Umbrire 2026 — Zipscreen, Raffstore, Rulouri Aluminiu",
    "sub": "Preturi orientative 2026 pentru sisteme de umbrire exterioara: zipscreen, jaluzele raffstore, rulouri aluminiu si plase plisse. Oferta personalizata in Bucuresti si Ilfov.",
    "parent_label": "Sisteme Umbrire",
    "breadcrumb": "Preturi 2026",
    "intro": "Pretul unui sistem de umbrire exterioara depinde de tipul produsului, dimensiuni, tipul de actionare si complexitatea montajului. Neofort BIZ furnizeaza si monteaza sisteme de umbrire premium in Bucuresti si Ilfov.",
    "h2_factors": "Factori care influenteaza pretul sistemelor de umbrire",
    "factors": [
      "Tipul sistemului — Zipscreen (roul exterior cu ghidaje laterale) are un cost mai ridicat decat un rulou exterior standard datorita sistemului de ghidare care ofera rezistenta la vant.",
      "Dimensiunile golului — pretul creste proportional cu latimea si inaltimea golului. Sistemele mari necesita motorizare obligatorie.",
      "Tipul de actionare — manuala (manivela sau curea) vs electrica (motor Somfy/Nice) vs Smart Home (KNX, io-homecontrol).",
      "Tesatura — ecran solar standard vs blackout total vs tesaturi speciale antireflex sau cu factor de protectie SPF 50+.",
      "Culoarea si finisajul — casetele si ghidajele din aluminiu pot fi vopsite in orice culoare RAL pentru a se armoniza cu tamplaria.",
      "Montajul — ancoraj in zidarie, in toc de tamplarie sau pe perete. Montajul pe tamplarie existenta Salamander sau Alumil este posibil si recomandat."
    ],
    "h2_products": "Sisteme de umbrire disponibile la Neofort BIZ",
    "products": [
      {
        "name": "Zipscreen exterior",
        "desc": "Rulou exterior cu ghidaje laterale — rezistenta la vant pana la clasa 5 Beaufort. Ideal pentru terase si ferestre mari. Permite ventilatie cu ruloul coborat.",
        "link": "/umbrire/zipscreen",
        "cta": "Detalii Zipscreen"
      },
      {
        "name": "Raffstore — jaluzele exterioare",
        "desc": "Jaluzele cu lamele din aluminiu orientabile — control fin al luminii si protectie solara. Uf solar pana la 90%. Motorizare Somfy inclusa.",
        "link": "/umbrire/jaluzele-venetiene-raffstore",
        "cta": "Detalii Raffstore"
      },
      {
        "name": "Rulouri exterioare aluminiu",
        "desc": "Rulouri cu lamele din aluminiu umplute cu spuma poliuretanica — izolare termica si fonica, securitate. Caseta integrala sau aplicata.",
        "link": "/umbrire/rulouri-exterioare-aluminiu",
        "cta": "Detalii Rulouri"
      }
    ],
    "h2_cta": "Solicitati oferta personalizata",
    "cta_desc": "Echipa Neofort BIZ va efectueaza masuratori gratuite si va ofera oferta detaliata pentru sistemul de umbrire potrivit. Montaj profesional in Bucuresti si Ilfov.",
    "cta_btn": "Cerere Oferta Umbrire",
    "guide_link": "Citeste Ghidul Complet Sisteme Umbrire",
    "guide_slug": "umbrire/ghid-complet-sisteme-umbrire"
  },
  "en": {
    "h1": "Shading System Prices 2026 — Zipscreen, Raffstore, Aluminium Roller Shutters",
    "sub": "2026 indicative prices for exterior shading systems: zipscreen, raffstore venetian blinds, aluminium roller shutters and pleated screens. Personalised quote in Bucharest and Ilfov.",
    "parent_label": "Shading Systems",
    "breadcrumb": "Prices 2026",
    "intro": "The price of an exterior shading system depends on the product type, dimensions, actuation type and installation complexity. Neofort BIZ supplies and installs premium shading systems in Bucharest and Ilfov.",
    "h2_factors": "Factors Affecting Shading System Prices",
    "factors": [
      "System type — Zipscreen (exterior blind with side channels) costs more than a standard roller shutter due to its wind-resistant guide system.",
      "Opening dimensions — price increases proportionally with width and height. Large systems require motorisation.",
      "Actuation type — manual (crank or strap) vs electric (Somfy/Nice motor) vs Smart Home (KNX, io-homecontrol).",
      "Fabric — standard solar screen vs total blackout vs special anti-glare or SPF 50+ protection fabrics.",
      "Colour and finish — aluminium casings and guides can be powder-coated in any RAL colour to match the joinery.",
      "Installation — anchored into masonry, into the window frame or on the wall. Installation on existing Salamander or Alumil joinery is possible and recommended."
    ],
    "h2_products": "Shading Systems Available at Neofort BIZ",
    "products": [
      {
        "name": "Zipscreen Exterior",
        "desc": "Exterior blind with side channels — wind resistance up to Beaufort class 5. Ideal for terraces and large windows. Allows ventilation with blind lowered.",
        "link": "/shading-systems/zipscreen-exterior-blind",
        "cta": "Zipscreen Details"
      },
      {
        "name": "Raffstore — Exterior Venetian Blinds",
        "desc": "Adjustable aluminium slat blinds — fine light control and solar protection. Up to 90% solar factor. Somfy motorisation included.",
        "link": "/shading-systems/raffstore-venetian-blinds",
        "cta": "Raffstore Details"
      },
      {
        "name": "Aluminium Roller Shutters",
        "desc": "Shutters with polyurethane foam-filled aluminium slats — thermal and acoustic insulation, security. Integral or surface-mounted casing.",
        "link": "/shading-systems/aluminium-external-roller-shutters",
        "cta": "Roller Shutter Details"
      }
    ],
    "h2_cta": "Request a Personalised Quote",
    "cta_desc": "The Neofort BIZ team will carry out free measurements and provide a detailed quote for the right shading system. Professional installation in Bucharest and Ilfov.",
    "cta_btn": "Request Shading Quote",
    "guide_link": "Read the Complete Shading Systems Guide",
    "guide_slug": "shading-systems/complete-guide"
  },
  "de": {
    "h1": "Beschattungssysteme Preise 2026 — Zipscreen, Raffstore, Aussenrollladen",
    "sub": "Orientierungspreise 2026 fur Aussenbeschattungssysteme: Zipscreen, Raffstore-Aussenjalousien, Aluminium-Aussenrollladen und Plissee-Insektenschutz. Personalisiertes Angebot in Bukarest und Ilfov.",
    "parent_label": "Beschattungssysteme",
    "breadcrumb": "Preise 2026",
    "intro": "Der Preis eines Aussenbeschattungssystems hangt vom Produkttyp, den Abmessungen, der Antriebsart und der Montagegeschwindigkeit ab.",
    "h2_factors": "Faktoren die den Preis beeinflussen",
    "factors": [
      "Systemtyp — Zipscreen (Aussenrollo mit Seitenfuhrungen) kostet mehr als ein Standard-Aussenrollladen.",
      "Offnungsabmessungen — der Preis steigt proportional mit Breite und Hohe. Grosse Systeme erfordern Motorisierung.",
      "Antriebsart — manuell (Kurbel oder Gurt) vs elektrisch (Somfy/Nice Motor) vs Smart Home (KNX).",
      "Gewebe — Standard-Sonnenschutzgewebe vs Blackout vs spezielle UV-Schutzgewebe.",
      "Farbe und Finish — Aluminium-Kassetten und Fuhrungen konnen in jeder RAL-Farbe beschichtet werden.",
      "Montage — Verankerung im Mauerwerk, im Fensterrahmen oder an der Wand."
    ],
    "h2_products": "Beschattungssysteme bei Neofort BIZ",
    "products": [
      {
        "name": "Zipscreen Aussenrollo",
        "desc": "Aussenrollo mit Seitenfuhrungen — Windwiderstand bis Beaufort-Klasse 5. Ideal fur Terrassen und grosse Fenster.",
        "link": "/beschattungssysteme/zipscreen-aussenrollo",
        "cta": "Zipscreen Details"
      },
      {
        "name": "Raffstore Aussenjalousien",
        "desc": "Verstellbare Aluminium-Lamellenjalousien — feiner Lichtsteuerung und Sonnenschutz. Bis 90% Sonnenschutzfaktor.",
        "link": "/beschattungssysteme/raffstore-aussenjalousien",
        "cta": "Raffstore Details"
      },
      {
        "name": "Aluminium Aussenrollladen",
        "desc": "Rolladen mit PU-schaumgefullten Aluminiumlamellen — Warme- und Schalldammung, Sicherheit.",
        "link": "/beschattungssysteme/aluminium-aussenrollladen",
        "cta": "Rollladen Details"
      }
    ],
    "h2_cta": "Personalisiertes Angebot anfordern",
    "cta_desc": "Das Neofort BIZ-Team fuhrt kostenlose Aufmasse durch und erstellt ein detailliertes Angebot fur das richtige Beschattungssystem.",
    "cta_btn": "Beschattungsangebot anfordern",
    "guide_link": "Kompletten Beschattungsratgeber lesen",
    "guide_slug": "beschattungssysteme/kompletter-ratgeber"
  },
  "fr": {
    "h1": "Prix systemes occultation 2026 — Zipscreen, Raffstore, Volets roulants",
    "sub": "Prix indicatifs 2026 pour les systemes occultation exterieure: stores bannes zipscreen, persiennes raffstore, volets roulants aluminium. Devis personnalise a Bucarest et Ilfov.",
    "parent_label": "Systemes d'occultation",
    "breadcrumb": "Prix 2026",
    "intro": "Le prix d'un systeme d'occultation exterieure depend du type de produit, des dimensions, du type de commande et de la complexite de la pose.",
    "h2_factors": "Facteurs influencant le prix",
    "factors": [
      "Type de systeme — le store banne zipscreen (avec glissieres laterales) coute plus qu'un volet roulant standard.",
      "Dimensions de l'ouverture — le prix augmente proportionnellement avec la largeur et la hauteur.",
      "Type de commande — manuel (manivelle) vs electrique (moteur Somfy/Nice) vs domotique (KNX).",
      "Toile — ecran solaire standard vs occultation totale vs toiles anti-reflet SPF 50+.",
      "Couleur et finition — coffres et glissieres aluminium laquables en toute couleur RAL.",
      "Pose — ancrage en maconnerie, dans le dormant ou en applique sur mur."
    ],
    "h2_products": "Systemes d'occultation chez Neofort BIZ",
    "products": [
      {
        "name": "Store Zipscreen exterieur",
        "desc": "Store banne avec glissieres laterales — resistance au vent jusqu'a la classe 5 Beaufort. Ideal pour terrasses et grandes fenetres.",
        "link": "/systemes-occultation/zipscreen-store-exterieur",
        "cta": "Details Zipscreen"
      },
      {
        "name": "Raffstore — Stores venitiens",
        "desc": "Stores a lames aluminium orientables — controle fin de la lumiere et protection solaire. Facteur solaire jusqu'a 90%.",
        "link": "/systemes-occultation/stores-venitiens-raffstore",
        "cta": "Details Raffstore"
      },
      {
        "name": "Volets roulants aluminium",
        "desc": "Volets a lames aluminium remplies de mousse polyurethane — isolation thermique et acoustique, securite.",
        "link": "/systemes-occultation/volets-roulants-aluminium-exterieurs",
        "cta": "Details Volets roulants"
      }
    ],
    "h2_cta": "Demander un devis personnalise",
    "cta_desc": "L'equipe Neofort BIZ effectue des prises de cotes gratuites et vous fournit un devis detaille pour le systeme d'occultation adapte.",
    "cta_btn": "Demander un devis occultation",
    "guide_link": "Lire le Guide Complet Systemes d'Occultation",
    "guide_slug": "systemes-occultation/guide-complet"
  },
  "es": {
    "h1": "Precios sistemas de sombreado 2026 — Zipscreen, Raffstore, Persianas aluminio",
    "sub": "Precios orientativos 2026 para sistemas de sombreado exterior: toldos zipscreen, persianas venecianas raffstore, persianas de aluminio. Presupuesto personalizado en Bucarest e Ilfov.",
    "parent_label": "Sistemas de sombreado",
    "breadcrumb": "Precios 2026",
    "intro": "El precio de un sistema de sombreado exterior depende del tipo de producto, las dimensiones, el tipo de accionamiento y la complejidad de la instalacion.",
    "h2_factors": "Factores que influyen en el precio",
    "factors": [
      "Tipo de sistema — el toldo zipscreen (con guias laterales) cuesta mas que una persiana enrollable estandar.",
      "Dimensiones del hueco — el precio aumenta proporcionalmente con el ancho y la altura.",
      "Tipo de accionamiento — manual (manivela) vs electrico (motor Somfy/Nice) vs domótica (KNX).",
      "Tejido — pantalla solar estandar vs oscurecimiento total vs tejidos especiales SPF 50+.",
      "Color y acabado — cajones y guias de aluminio lacables en cualquier color RAL.",
      "Instalacion — anclaje en mamposteria, en el marco o en pared."
    ],
    "h2_products": "Sistemas de sombreado en Neofort BIZ",
    "products": [
      {
        "name": "Toldo Zipscreen exterior",
        "desc": "Toldo exterior con guias laterales — resistencia al viento hasta clase 5 Beaufort. Ideal para terrazas y ventanas grandes.",
        "link": "/sistemas-sombreado/zipscreen-toldo-exterior",
        "cta": "Detalles Zipscreen"
      },
      {
        "name": "Raffstore — Persianas venecianas",
        "desc": "Persianas de laminas de aluminio orientables — control fino de la luz y proteccion solar. Factor solar hasta el 90%.",
        "link": "/sistemas-sombreado/persianas-venecianas-raffstore",
        "cta": "Detalles Raffstore"
      },
      {
        "name": "Persianas de aluminio exteriores",
        "desc": "Persianas con laminas de aluminio rellenas de espuma de PU — aislamiento termico y acustico, seguridad.",
        "link": "/sistemas-sombreado/persianas-exteriores-aluminio",
        "cta": "Detalles Persianas"
      }
    ],
    "h2_cta": "Solicitar presupuesto personalizado",
    "cta_desc": "El equipo de Neofort BIZ realizara mediciones gratuitas y le proporcionara un presupuesto detallado para el sistema de sombreado adecuado.",
    "cta_btn": "Solicitar presupuesto sombreado",
    "guide_link": "Leer la Guia Completa de Sistemas de Sombreado",
    "guide_slug": "sistemas-sombreado/guia-completa"
  },
  "it": {
    "h1": "Prezzi sistemi di oscuramento 2026 — Zipscreen, Raffstore, Tapparelle alluminio",
    "sub": "Prezzi indicativi 2026 per sistemi di oscuramento esterno: tende zipscreen, veneziane raffstore, tapparelle in alluminio. Preventivo personalizzato a Bucarest e Ilfov.",
    "parent_label": "Sistemi di oscuramento",
    "breadcrumb": "Prezzi 2026",
    "intro": "Il prezzo di un sistema di oscuramento esterno dipende dal tipo di prodotto, dalle dimensioni, dal tipo di azionamento e dalla complessita dell'installazione.",
    "h2_factors": "Fattori che influenzano il prezzo",
    "factors": [
      "Tipo di sistema — la tenda zipscreen (con guide laterali) costa di piu di una tapparella standard.",
      "Dimensioni dell'apertura — il prezzo aumenta proporzionalmente con larghezza e altezza.",
      "Tipo di azionamento — manuale (manovella) vs elettrico (motore Somfy/Nice) vs domotica (KNX).",
      "Tessuto — schermo solare standard vs oscuramento totale vs tessuti speciali SPF 50+.",
      "Colore e finitura — cassonetti e guide in alluminio verniciabili in qualsiasi colore RAL.",
      "Installazione — ancoraggio in muratura, nel telaio o a parete."
    ],
    "h2_products": "Sistemi di oscuramento da Neofort BIZ",
    "products": [
      {
        "name": "Tenda Zipscreen esterna",
        "desc": "Tenda esterna con guide laterali — resistenza al vento fino alla classe 5 Beaufort. Ideale per terrazze e grandi finestre.",
        "link": "/sistemi-oscuramento/zipscreen-tenda-esterna",
        "cta": "Dettagli Zipscreen"
      },
      {
        "name": "Raffstore — Veneziane esterne",
        "desc": "Veneziane con lamelle in alluminio orientabili — controllo fine della luce e protezione solare. Fattore solare fino al 90%.",
        "link": "/sistemi-oscuramento/veneziane-raffstore",
        "cta": "Dettagli Raffstore"
      },
      {
        "name": "Tapparelle esterne in alluminio",
        "desc": "Tapparelle con lamelle in alluminio riempite di schiuma PU — isolamento termico e acustico, sicurezza.",
        "link": "/sistemi-oscuramento/tapparelle-esterne-alluminio",
        "cta": "Dettagli Tapparelle"
      }
    ],
    "h2_cta": "Richiedi un preventivo personalizzato",
    "cta_desc": "Il team Neofort BIZ effettuera misurazioni gratuite e fornira un preventivo dettagliato per il sistema di oscuramento adeguato.",
    "cta_btn": "Richiedi preventivo oscuramento",
    "guide_link": "Leggi la Guida Completa Sistemi di Oscuramento",
    "guide_slug": "sistemi-oscuramento/guida-completa"
  }
};


const WA_URLS = {
  ro: 'https://wa.me/40752443435?text=Buna%20ziua%21%20Doresc%20o%20oferta%20pentru%20sisteme%20de%20umbrire.',
  en: 'https://wa.me/40752443435?text=Hello%21%20Quote%20for%20shading%20systems.',
  de: 'https://wa.me/40752443435?text=Hallo%21%20Angebot%20fur%20Beschattungssysteme.',
  fr: 'https://wa.me/40752443435?text=Bonjour%21%20Devis%20systemes%20occultation.',
  es: 'https://wa.me/40752443435?text=Hola%21%20Presupuesto%20sistemas%20sombreado.',
  it: 'https://wa.me/40752443435?text=Buongiorno%21%20Preventivo%20sistemi%20oscuramento.',
};
const WA_LABELS = {
  ro: 'WhatsApp',
  en: 'WhatsApp',
  de: 'WhatsApp',
  fr: 'WhatsApp',
  es: 'WhatsApp',
  it: 'WhatsApp',
};
const MID_TITLES = {
  ro: 'Solicitati oferta gratuita — raspundem in 2 ore',
  en: 'Request your free quote — we reply within 2 hours',
  de: 'Kostenloses Angebot anfordern — Antwort in 2 Stunden',
  fr: 'Demandez votre devis gratuit — reponse en 2 heures',
  es: 'Solicite su presupuesto gratuito — respondemos en 2 horas',
  it: 'Richiedi il tuo preventivo gratuito — rispondiamo in 2 ore',
};
const MID_DESCS = {
  ro: 'Masuratori gratuite in Bucuresti si Ilfov. Oferta in 24h. 46 recenzii Google 4.9/5.',
  en: 'Free measurements in Bucharest and Ilfov. Quote in 24h. 46 Google reviews 4.9/5.',
  de: 'Kostenlose Aufmasse in Bukarest. Angebot in 24h. 46 Google-Bewertungen 4.9/5.',
  fr: 'Prises de cotes gratuites a Bucarest. Devis en 24h. 46 avis Google 4.9/5.',
  es: 'Mediciones gratuitas en Bucarest. Presupuesto en 24h. 46 resenas Google 4.9/5.',
  it: 'Misurazioni gratuite a Bucarest. Preventivo in 24h. 46 recensioni Google 4.9/5.',
};

export async function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const ui = UI[locale] || UI.ro;
  const slug = SLUGS[locale] || SLUGS.ro;
  const canonical = `${BASE}/${locale}/${slug}`;
  return {
    title: `${ui.h1} | Neofort BIZ`,
    description: ui.sub,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/${SLUGS[l]}`])),
        'x-default': `${BASE}/ro/${SLUGS.ro}`,
      },
    },
    openGraph: { type: 'article', url: canonical, title: ui.h1, description: ui.sub, siteName: 'Neofort BIZ', images: [{ url: `${BASE}/og/Sisteme_de_umbrire__rulouri_exterioare__jaluzele_raffstore__jaluzele_venetiene.jpg`, width: 1200, height: 630, type: 'image/avif' }] },
    twitter: { card: 'summary_large_image', site: '@NeofortBIZ', title: ui.h1, description: ui.sub, images: [`${BASE}/og/Sisteme_de_umbrire__rulouri_exterioare__jaluzele_raffstore__jaluzele_venetiene.jpg`] },
  };
}

export default async function UmbrirePreturiPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const waUrl = WA_URLS[locale] || WA_URLS.ro;
  const waLabel = WA_LABELS[locale] || WA_LABELS.ro;
  const midTitle = MID_TITLES[locale] || MID_TITLES.ro;
  const midDesc = MID_DESCS[locale] || MID_DESCS.ro;
  const parentSlug = PARENT_SLUGS[locale] || PARENT_SLUGS.ro;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ui.factors.map((f, i) => ({
      '@type': 'Question',
      name: `Factor ${i+1}`,
      acceptedAnswer: { '@type': 'Answer', text: f },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ background: 'linear-gradient(135deg,#2d1a3a 0%,#5a2d6e 60%,#8a4a9e 100%)', padding: '72px 24px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginBottom: '12px' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Neofort BIZ</Link>
            {' '}&rsaquo;{' '}
            <Link href={`/${parentSlug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{ui.parent_label}</Link>
            {' '}&rsaquo; {ui.breadcrumb}
          </div>
          <h1 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.6rem,4vw,2.6rem)', letterSpacing: '.04em', textTransform: 'uppercase', color: '#fff', margin: '0 0 16px', lineHeight: 1.15 }}>
            {ui.h1}
          </h1>
          <p style={{ fontSize: 'clamp(.85rem,2vw,1rem)', color: 'rgba(255,255,255,.75)', lineHeight: 1.65, maxWidth: '700px', margin: '0 auto 28px' }}>
            {ui.sub}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#e8a020', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none' }}>
            {ui.cta_btn}
          </Link>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25d366', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {waLabel}
          </a>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 24px' }}>
        <p style={{ fontSize: '1.05rem', color: '#3a3a3a', lineHeight: 1.75, marginBottom: '48px', borderLeft: '3px solid #6a2d9e', paddingLeft: '20px' }}>
          {ui.intro}
        </p>

        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#1a2a3a', marginBottom: '20px' }}>
          {ui.h2_factors}
        </h2>
        <ul style={{ marginBottom: '48px', paddingLeft: '0', listStyle: 'none' }}>
          {ui.factors.map((f, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, width: '24px', height: '24px', background: '#6a2d9e', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px', marginTop: '2px' }}>{i+1}</span>
              <span style={{ fontSize: '.92rem', color: '#4a4a4a', lineHeight: 1.65 }}>{f}</span>
            </li>
          ))}
        </ul>

        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#1a2a3a', marginBottom: '24px' }}>
          {ui.h2_products}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: '20px', marginBottom: '56px' }}>
          {ui.products.map((prod, i) => (
            <div key={i} style={{ border: '1px solid #e8e8e4', padding: '24px', background: '#fafaf8' }}>
              <div style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '.9rem', letterSpacing: '.08em', textTransform: 'uppercase', color: '#1a2a3a', marginBottom: '10px' }}>{prod.name}</div>
              <div style={{ fontSize: '.82rem', color: '#5a5a5a', lineHeight: 1.65, marginBottom: '16px' }}>{prod.desc}</div>
              <Link href={`/${prod.link}`} style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#6a2d9e', textDecoration: 'none', fontWeight: 600 }}>
                {prod.cta} &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div style={{ background: '#2d1a3a', padding: '40px 32px', textAlign: 'center', borderRadius: '2px' }}>
          <h3 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
            {ui.h2_cta}
          </h3>
          <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.6, marginBottom: '24px', maxWidth: '520px', margin: '0 auto 24px' }}>
            {ui.cta_desc}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', background: '#e8a020', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '16px 32px', textDecoration: 'none' }}>
              {ui.cta_btn}
            </Link>
            <Link href={`/${ui.guide_slug}`} style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 500, fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '16px 32px', textDecoration: 'none', border: '1px solid rgba(255,255,255,.4)' }}>
              {ui.guide_link}
            </Link>
          </div>
        </div>
      </main>

      {/* STICKY WA — MOBILE */}
      <a href={waUrl} target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999, display: 'flex', alignItems: 'center', gap: '8px', background: '#25d366', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '11px 18px', borderRadius: '0', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37,211,102,.45)' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        {waLabel}
      </a>

    </>
  );
}