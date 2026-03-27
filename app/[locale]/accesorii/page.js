import { Link } from '../../../i18n/navigation';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];
const SLUGS = { ro:'accesorii', en:'accessories', de:'zubehoer', fr:'accessoires', es:'accesorios', it:'accessori' };

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil' },
};

const PAGE_UI = {
  ro: { label:'Accesorii · Neofort BIZ', title:'Accesorii Tâmplărie PVC & Aluminiu | Neofort BIZ', h1:'Accesorii', sub:'Tocuri de renovare, pervazuri interior PVC și exterior aluminiu, grile de ventilație higroreglabilă Aereco.', desc:'Accesorii montaj și finisare tâmplărie PVC și aluminiu. Toc renovare, pervazuri RAL, grile Aereco. Livrare și montaj București.', btn_detail:'Detalii' },
  en: { label:'Accessories · Neofort BIZ', title:'PVC & Aluminium Window Accessories | Neofort BIZ', h1:'Accessories', sub:'Renovation frames, interior PVC and exterior aluminium windowsills, Aereco hygro-adjustable ventilation grilles.', desc:'Installation and finishing accessories for PVC and aluminium windows. Renovation frames, RAL sills, Aereco grilles. Bucharest delivery.', btn_detail:'Details' },
  de: { label:'Zubehör · Neofort BIZ', title:'PVC & Aluminium Fensterzubehör | Neofort BIZ', h1:'Zubehör', sub:'Renovierungsrahmen, Innenfensterbänke PVC und Außenfensterbänke Aluminium, Aereco hygro-regelbare Lüftungsgitter.', desc:'Montage- und Veredelungszubehör für PVC- und Aluminiumfenster. Renovierungsrahmen, RAL Fensterbänke, Aereco Gitter. Bukarest Lieferung.', btn_detail:'Details' },
  fr: { label:'Accessoires · Neofort BIZ', title:'Accessoires Fenêtres PVC & Aluminium | Neofort BIZ', h1:'Accessoires', sub:'Cadres de rénovation, appuis intérieurs PVC et extérieurs aluminium, grilles de ventilation hygroréglables Aereco.', desc:'Accessoires de pose et finition pour menuiseries PVC et aluminium. Cadres rénovation, appuis RAL, grilles Aereco. Livraison Bucarest.', btn_detail:'Détails' },
  es: { label:'Accesorios · Neofort BIZ', title:'Accesorios Ventanas PVC & Aluminio | Neofort BIZ', h1:'Accesorios', sub:'Marcos de renovación, alféizares interiores PVC y exteriores aluminio, rejillas de ventilación higrorreglables Aereco.', desc:'Accesorios de instalación y acabado para ventanas PVC y aluminio. Marcos renovación, alféizares RAL, rejillas Aereco. Entrega Bucarest.', btn_detail:'Detalles' },
  it: { label:'Accessori · Neofort BIZ', title:'Accessori Finestre PVC & Alluminio | Neofort BIZ', h1:'Accessori', sub:'Telai di ristrutturazione, davanzali interni PVC ed esterni alluminio, griglie di ventilazione igroregolab. Aereco.', desc:'Accessori di posa e finitura per infissi PVC e alluminio. Telai ristrutturazione, davanzali RAL, griglie Aereco. Consegna Bucarest.', btn_detail:'Dettagli' },
};


const A = [
  { slug:'toc-de-renovare', img:'/accessories/toc-renovare.avif', color:'#2d5a8e',
    cat:{ ro:'Montaj & Renovare', en:'Installation & Renovation', de:'Montage & Renovierung', fr:'Pose & Rénovation', es:'Montaje & Renovación', it:'Posa & Ristrutturazione' },
    name:{ ro:'Toc de renovare', en:'Renovation Profiles', de:'Renovierungsprofile', fr:'Profils de rénovation', es:'Marco de renovación', it:'Telaio di ristrutturazione' },
    specs:{ ro:[['Aripă renovare','35 mm'],['Aripă renovare','60 mm'],['Adâncime','76 mm'],['Transfer termic Uw','0,73 W/m²K'],['Vitraj','Până la 48 mm'],['Protecție fonică','Până la 47 dB'],['Anti-efracție','Până la RC 3']], en:[['Renovation wing','35 mm'],['Renovation wing','60 mm'],['Depth','76 mm'],['Thermal transfer Uw','0.73 W/m²K'],['Glazing','Up to 48 mm'],['Sound insulation','Up to 47 dB'],['Burglary resistance','Up to RC 3']], de:[['Renovierungsflügel','35 mm'],['Renovierungsflügel','60 mm'],['Tiefe','76 mm'],['Wärmedurchgang Uw','0,73 W/m²K'],['Verglasung','Bis 48 mm'],['Schalldämmung','Bis 47 dB'],['Einbruchschutz','Bis RC 3']], fr:[['Aile de rénovation','35 mm'],['Aile de rénovation','60 mm'],['Profondeur','76 mm'],['Transfert thermique Uw','0,73 W/m²K'],['Vitrage','Jusqu\'à 48 mm'],['Isolation phonique','Jusqu\'à 47 dB'],['Anti-effraction','Jusqu\'à RC 3']], es:[['Ala de renovación','35 mm'],['Ala de renovación','60 mm'],['Profundidad','76 mm'],['Transferencia térmica Uw','0,73 W/m²K'],['Acristalamiento','Hasta 48 mm'],['Aislamiento acústico','Hasta 47 dB'],['Resistencia al robo','Hasta RC 3']], it:[['Ala di ristrutturazione','35 mm'],['Ala di ristrutturazione','60 mm'],['Profondità','76 mm'],['Trasferimento termico Uw','0,73 W/m²K'],['Vetro','Fino a 48 mm'],['Isolamento acustico','Fino a 47 dB'],['Anti-effrazione','Fino a RC 3']] },
    desc:{ ro:'Soluție pentru renovare fără demontarea tocului existent. Reduce semnificativ timpul și costul de montaj. Compatibil cu profile PVC și aluminiu, vitraj până la 48mm.', en:'Renovation solution without removing the existing frame. Significantly reduces installation time and cost. Compatible with PVC and aluminium profiles, glazing up to 48mm.', de:'Renovierungslösung ohne Demontage des vorhandenen Rahmens. Reduziert Montagezeit erheblich. Kompatibel mit PVC- und Aluminiumprofilen, Verglasung bis 48mm.', fr:'Solution de rénovation sans dépose du dormant existant. Réduit considérablement le temps de pose. Compatible profils PVC et aluminium, vitrage jusqu\'à 48mm.', es:'Solución de renovación sin retirar el marco existente. Reduce significativamente el tiempo de instalación. Compatible con perfiles PVC y aluminio, acristalamiento hasta 48mm.', it:'Soluzione di ristrutturazione senza rimozione del telaio. Riduce tempi di posa. Compatibile con profili PVC e alluminio, vetro fino a 48mm.' },
  },
  { slug:'pervazuri-interior-pvc-exterior-al', img:'/accessories/pervazuri-glafuri.avif', color:'#2d5a8e',
    cat:{ ro:'Finisare', en:'Finishing', de:'Oberflächenveredelung', fr:'Finition', es:'Acabado', it:'Finitura' },
    name:{ ro:'Pervazuri interior PVC / exterior AL', en:'Interior Windowsills & Exterior Windowsills', de:'Innenfensterbänke & Außenfensterbänke', fr:'Appuis de fenêtre intérieurs & extérieurs', es:'Alféizares interiores & exteriores', it:'Davanzali interni & esterni' },
    specs:{ ro:[['Culori RAL','9016, 8019, 8003, 7016'],['Anodizat','E6/EV1, E6/C32, E6/C33'],['Adâncime interior','20mm – 400mm'],['Capace','Aluminiu clips-on'],['Rezistență','La intemperii'],['Cuplare','90° · 135° · 180°'],['Etanșare','Garnitură EPDM']], en:[['RAL colours','9016, 8019, 8003, 7016'],['Anodized','E6/EV1, E6/C32, E6/C33'],['Interior depth','20mm – 400mm'],['Caps','Aluminium clip-on'],['Resistance','Weather-resistant'],['Coupling','90° · 135° · 180°'],['Sealing','EPDM gasket']], de:[['RAL-Farben','9016, 8019, 8003, 7016'],['Eloxiert','E6/EV1, E6/C32, E6/C33'],['Innentiefe','20mm – 400mm'],['Kappen','Aluminium Clips'],['Widerstand','Witterungsbeständig'],['Kupplung','90° · 135° · 180°'],['Abdichtung','EPDM-Dichtung']], fr:[['Couleurs RAL','9016, 8019, 8003, 7016'],['Anodisé','E6/EV1, E6/C32, E6/C33'],['Profondeur intérieure','20mm – 400mm'],['Embouts','Aluminium clips'],['Résistance','Aux intempéries'],['Couplage','90° · 135° · 180°'],['Étanchéité','Joint EPDM']], es:[['Colores RAL','9016, 8019, 8003, 7016'],['Anodizado','E6/EV1, E6/C32, E6/C33'],['Profundidad interior','20mm – 400mm'],['Tapas','Aluminio clips-on'],['Resistencia','A intemperie'],['Acoplamiento','90° · 135° · 180°'],['Sellado','Junta EPDM']], it:[['Colori RAL','9016, 8019, 8003, 7016'],['Anodizzato','E6/EV1, E6/C32, E6/C33'],['Profondità interna','20mm – 400mm'],['Tappi','Alluminio clip-on'],['Resistenza','Alle intemperie'],['Accoppiamento','90° · 135° · 180°'],['Tenuta','Guarnizione EPDM']] },
    desc:{ ro:'Pervazuri interioare PVC și glafuri exterioare din aluminiu. Gamă largă de culori RAL și finisaje anodizate. Rezistente la intemperii, etanșate cu garnitură EPDM.', en:'Interior PVC windowsills and exterior aluminium sills. Wide range of RAL colours and anodized finishes. Weather-resistant with EPDM gasket.', de:'Innenfensterbänke PVC und Außenfensterbänke Aluminium. Breite RAL-Farbauswahl. Witterungsbeständig mit EPDM-Dichtung.', fr:'Appuis intérieurs PVC et extérieurs aluminium. Large gamme RAL et finitions anodisées. Résistants aux intempéries avec joint EPDM.', es:'Alféizares interiores PVC y exteriores aluminio. Amplia gama RAL y acabados anodizados. Resistentes a la intemperie con junta EPDM.', it:'Davanzali interni PVC ed esterni alluminio. Ampia gamma RAL e finiture anodizzate. Resistenti alle intemperie con guarnizione EPDM.' },
  },
  { slug:'grila-higroreglabila-aereco', img:'/accessories/grila-aereco.avif', color:'#767676',
    cat:{ ro:'Ventilație', en:'Ventilation', de:'Lüftung', fr:'Ventilation', es:'Ventilación', it:'Ventilazione' },
    name:{ ro:'Grilă higroreglabilă Aereco', en:'Ventilation Systems', de:'Lüftungssysteme', fr:'Systèmes d\'aération', es:'Sistemas de ventilación', it:'Sistemi di ventilazione' },
    specs:{ ro:[['Debit aer','5–35 m³/h'],['Atenuare acustică','33 dB'],['Higroreglabilă','Da'],['Protecție','Antiinsecte'],['Autolimitantă','Da'],['Protecție externă','Plată'],['Culoare','Alb, brun, stejar auriu']], en:[['Air flow','5–35 m³/h'],['Sound attenuation','33 dB'],['Hygro-adjustable','Yes'],['Protection','Anti-insect'],['Self-limiting','Yes'],['External protection','Flat'],['Colour','White, brown, golden oak']], de:[['Luftstrom','5–35 m³/h'],['Schalldämpfung','33 dB'],['Hygroregelbar','Ja'],['Schutz','Insektenschutz'],['Selbstbegrenzend','Ja'],['Außenschutz','Flach'],['Farbe','Weiß, braun, goldene Eiche']], fr:[['Débit d\'air','5–35 m³/h'],['Atténuation acoustique','33 dB'],['Hygroréglable','Oui'],['Protection','Anti-insectes'],['Autolimitante','Oui'],['Protection extérieure','Plate'],['Couleur','Blanc, brun, chêne doré']], es:[['Caudal de aire','5–35 m³/h'],['Atenuación acústica','33 dB'],['Higrorreglable','Sí'],['Protección','Anti-insectos'],['Autolimitante','Sí'],['Protección exterior','Plana'],['Color','Blanco, marrón, roble dorado']], it:[['Portata aria','5–35 m³/h'],['Attenuazione acustica','33 dB'],['Igroregolab.','Sì'],['Protezione','Anti-insetti'],['Autolimitante','Sì'],['Protezione esterna','Piatta'],['Colore','Bianco, marrone, rovere dorato']] },
    desc:{ ro:'Grilă higroreglabilă Aereco integrată în tâmplărie. Reglează automat debitul de aer în funcție de umiditate. Ventilație controlată fără pierderi termice semnificative.', en:'Aereco hygro-adjustable grille integrated in windows. Automatically adjusts airflow based on humidity. Controlled ventilation without significant heat loss.', de:'Aereco hygroregelbare Lüftungsgitter integriert in Fenster. Regelt Luftstrom automatisch. Kontrollierte Belüftung ohne nennenswerte Wärmeverluste.', fr:'Grille hygroréglable Aereco intégrée dans la menuiserie. Régule automatiquement le débit d\'air. Ventilation contrôlée sans pertes thermiques significatives.', es:'Rejilla higrorreglable Aereco integrada. Regula automáticamente el caudal de aire según la humedad. Ventilación controlada sin pérdidas térmicas significativas.', it:'Griglia igroregolab. Aereco integrata. Regola automaticamente il flusso d\'aria. Ventilazione controllata senza perdite termiche significative.' },
  }
  { slug:'automatizari-somfy', img:'/accessories/automatizari-somfy.avif', color:'#d4001a',
    cat:{ ro:'Automatizare & Smart Home', en:'Automation & Smart Home', de:'Automatisierung & Smart Home', fr:'Automatisation & Maison Connectée', es:'Automatización & Smart Home', it:'Automazione & Casa Intelligente' },
    name:{ ro:'Automatizări Somfy', en:'Somfy Automation', de:'Somfy Automatisierung', fr:'Automatisation Somfy', es:'Automatización Somfy', it:'Automazione Somfy' },
    specs:{ ro:[['Motor rulouri','Somfy Oximo io / RS100 io'],['Compatibil TaHoma','Da — control smartphone'],['Telecomandă','Situo 5 io / Telis 4 RTS'],['Motor pergolă','Pergola 50/60 RGS io'],['Variantă solar','RS100 io Solar'],['Garanție','5 ani motor Somfy'],['Preț orientativ','de la 250 EUR / motor montat']], en:[['Shutter motor','Somfy Oximo io / RS100 io'],['TaHoma compatible','Yes — smartphone control'],['Remote control','Situo 5 io / Telis 4 RTS'],['Pergola motor','Pergola 50/60 RGS io'],['Solar variant','RS100 io Solar'],['Warranty','5 years Somfy motor'],['Indicative price','from 250 EUR / installed motor']], de:[['Rollladen-Motor','Somfy Oximo io / RS100 io'],['TaHoma-kompatibel','Ja — Smartphone-Steuerung'],['Fernbedienung','Situo 5 io / Telis 4 RTS'],['Pergola-Motor','Pergola 50/60 RGS io'],['Solar-Variante','RS100 io Solar'],['Garantie','5 Jahre Somfy-Motor'],['Richtpreis','ab 250 EUR / montierter Motor']], fr:[['Moteur volet','Somfy Oximo io / RS100 io'],['Compatible TaHoma','Oui — contrôle smartphone'],['Télécommande','Situo 5 io / Telis 4 RTS'],['Moteur pergola','Pergola 50/60 RGS io'],['Version solaire','RS100 io Solar'],['Garantie','5 ans moteur Somfy'],['Prix indicatif','à partir de 250 EUR / moteur posé']], es:[['Motor persiana','Somfy Oximo io / RS100 io'],['Compatible TaHoma','Sí — control smartphone'],['Mando','Situo 5 io / Telis 4 RTS'],['Motor pérgola','Pergola 50/60 RGS io'],['Variante solar','RS100 io Solar'],['Garantía','5 años motor Somfy'],['Precio orientativo','desde 250 EUR / motor instalado']], it:[['Motore tapparella','Somfy Oximo io / RS100 io'],['Compatibile TaHoma','Sì — controllo smartphone'],['Telecomando','Situo 5 io / Telis 4 RTS'],['Motore pergola','Pergola 50/60 RGS io'],['Variante solare','RS100 io Solar'],['Garanzia','5 anni motore Somfy'],['Prezzo indicativo','da 250 EUR / motore installato']] },
    desc:{ ro:'Motor Somfy Oximo io pentru rulouri exterioare — silențios, cu autoreglare, compatibil TaHoma. Telecomandă radio, scenarii automate și control vocal Alexa/Google. Montaj profesional în București și Ilfov.', en:'Somfy Oximo io motor for exterior shutters — silent, self-adjusting, TaHoma compatible. Radio remote, automatic scenarios and Alexa/Google voice control. Professional installation in Bucharest and Ilfov.', de:'Somfy Oximo io Motor für Außenrollläden — leise, selbstjustierend, TaHoma-kompatibel. Funkfernbedienung, automatische Szenarien und Alexa/Google-Sprachsteuerung. Professionelle Montage in Bukarest und Ilfov.', fr:'Moteur Somfy Oximo io pour volets roulants — silencieux, autoréglable, compatible TaHoma. Télécommande radio, scénarios automatiques et contrôle vocal Alexa/Google. Pose professionnelle à Bucarest et Ilfov.', es:'Motor Somfy Oximo io para persianas exteriores — silencioso, autoajustable, compatible TaHoma. Mando radio, escenarios automáticos y control vocal Alexa/Google. Instalación profesional en Bucarest e Ilfov.', it:'Motore Somfy Oximo io per tapparelle esterne — silenzioso, autoregolante, compatibile TaHoma. Telecomando radio, scenari automatici e controllo vocale Alexa/Google. Installazione professionale a Bucarest e Ilfov.' },
  },
];


export async function generateMetadata({ params }) {
  const { locale } = await params;
  const ui = PAGE_UI[locale] || PAGE_UI.ro;
  const slug = SLUGS[locale] || SLUGS.ro;
  return {
    title: ui.title, description: ui.desc,
    keywords: locale === 'ro' ? 'accesorii tamplarie PVC, toc renovare, pervazuri PVC, grila aereco, ventilatie' : locale === 'en' ? 'PVC window accessories, renovation frame, PVC windowsills, Aereco grille' : locale === 'de' ? 'PVC Fensterzubehör, Renovierungsrahmen, Innenfensterbänke, Aereco Lüftungsgitter' : locale === 'fr' ? 'accessoires fenêtres PVC, cadre rénovation, appuis intérieurs, grille Aereco' : locale === 'es' ? 'accesorios ventanas PVC, marco renovación, alféizares interiores, rejilla Aereco' : 'accessori finestre PVC, telaio ristrutturazione, davanzali interni, griglia Aereco',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: Object.fromEntries([...LOCALES.map(l => [l, `${BASE}/${l}/${SLUGS[l]}`]), ['x-default', `${BASE}/ro/${SLUGS.ro}`]]),
    },
    openGraph: { type:'website', url:`${BASE}/${locale}/${slug}`, siteName:'Neofort BIZ', title: ui.title, description: ui.desc, images: [{ url:`${BASE}/og/Accesorii_Neofort.avif`, width:1200, height:630, alt: locale==='ro' ? 'Accesorii tâmplărie: precadre Blaugelb, benzi etanșare, Warm Edge — Neofort BIZ' : locale==='en' ? 'Window accessories: Blaugelb precasings, sealing tapes, Warm Edge — Neofort BIZ' : locale==='de' ? 'Fensterzubehör: Blaugelb Vorfenster, Dichtbänder, Warm Edge — Neofort BIZ' : locale==='fr' ? 'Accessoires menuiserie: précadres Blaugelb, rubans étanchéité, Warm Edge — Neofort BIZ' : locale==='es' ? 'Accesorios carpintería: premarcos Blaugelb, cintas sellado, Warm Edge — Neofort BIZ' : 'Accessori infissi: pre-telai Blaugelb, nastri tenuta, Warm Edge — Neofort BIZ', type:'image/avif' }] },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: ui.title, description: ui.desc, images:[`${BASE}/og/Accesorii_Neofort.avif`] },
};
}

export default async function AccesoriiPage({ params }) {
  const { locale } = await params;
  const ui  = PAGE_UI[locale]     || PAGE_UI.ro;
  const cta = CTA_LABELS[locale]  || CTA_LABELS.ro;

  const schema = {
    '@context':'https://schema.org', '@type':'ItemList', 'name': ui.h1,
    'url': `${BASE}/${locale}/${SLUGS[locale] || SLUGS.ro}`,
    'itemListElement': A.map((a, i) => ({
      '@type':'ListItem', 'position': i + 1,
      'item': { '@type':'Product', 'name': a.name[locale]||a.name.ro, 'description': a.desc[locale]||a.desc.ro,
        'image': `${BASE}${a.img}`, 'brand': { '@type':'Brand','name':'Neofort BIZ' },
        'offers': { '@type':'Offer','availability':'https://schema.org/InStock','priceCurrency':'RON','price':'0','priceValidUntil': new Date(new Date().setFullYear(new Date().getFullYear()+1)).toISOString().split('T')[0],'seller':{'@type':'Organization','name':'Neofort BIZ SRL'} },'aggregateRating':{'@type':'AggregateRating','ratingValue':'4.9','reviewCount':'46','bestRating':'5','worstRating':'1'},
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Neofort BIZ', 'item': 'https://www.neofort-biz.ro/' + locale },
      { '@type': 'ListItem', 'position': 2, 'name': ui.h1, 'item': 'https://www.neofort-biz.ro/' + locale + '/' + (SLUGS[locale] || SLUGS.ro) },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': ({'ro': [['Ce este un toc de renovare și când se folosește?', 'Tocul de renovare PVC se montează direct peste tocul vechi (lemn, PVC degradat, aluminiu) fără a sparge tencuiala. Reduce timpul de montaj cu 50% și elimină costurile de reparare finisaje. Ideal pentru blocuri și clădiri istorice.'], ['Grila Aereco consumă energie electrică?', 'Nu. Grila higroreglabilă Aereco este complet pasivă — reglează debitul de aer (5-35 m³/h) automat în funcție de umiditatea din cameră, fără motor sau consum electric, fără zgomot mecanic.'], ['Unde se montează pervazul interior față de glaf exterior?', 'Pervazul interior PVC se montează pe față interioară a zidului sub fereastră. Glaf exterior din aluminiu anodizat se montează pe fața exterioară cu pantă de scurgere. Etanșarea cu garnitură EPDM la baza glafului exterior previne infiltrațiile.']], 'en': [['What is a renovation frame and when is it used?', 'The PVC renovation frame is installed directly over the old frame (wood, degraded PVC, aluminium) without breaking plasterwork. Reduces installation time by 50% and eliminates finish repair costs. Ideal for apartment blocks and historic buildings.'], ['Does the Aereco grille consume electricity?', 'No. The Aereco hygro-adjustable grille is completely passive — it automatically regulates airflow (5-35 m³/h) based on room humidity, without motor or electricity consumption, without mechanical noise.'], ['Where is the interior windowsill installed vs. exterior sill?', 'The interior PVC sill is installed on the interior face of the wall below the window. The exterior anodised aluminium sill is installed on the exterior face with drainage slope. EPDM gasket sealing at the base of the exterior sill prevents infiltrations.']]})[locale]?.map(([q,a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    })) || {'ro': [['Ce este un toc de renovare și când se folosește?', 'Tocul de renovare PVC se montează direct peste tocul vechi (lemn, PVC degradat, aluminiu) fără a sparge tencuiala. Reduce timpul de montaj cu 50% și elimină costurile de reparare finisaje. Ideal pentru blocuri și clădiri istorice.'], ['Grila Aereco consumă energie electrică?', 'Nu. Grila higroreglabilă Aereco este complet pasivă — reglează debitul de aer (5-35 m³/h) automat în funcție de umiditatea din cameră, fără motor sau consum electric, fără zgomot mecanic.'], ['Unde se montează pervazul interior față de glaf exterior?', 'Pervazul interior PVC se montează pe față interioară a zidului sub fereastră. Glaf exterior din aluminiu anodizat se montează pe fața exterioară cu pantă de scurgere. Etanșarea cu garnitură EPDM la baza glafului exterior previne infiltrațiile.']], 'en': [['What is a renovation frame and when is it used?', 'The PVC renovation frame is installed directly over the old frame (wood, degraded PVC, aluminium) without breaking plasterwork. Reduces installation time by 50% and eliminates finish repair costs. Ideal for apartment blocks and historic buildings.'], ['Does the Aereco grille consume electricity?', 'No. The Aereco hygro-adjustable grille is completely passive — it automatically regulates airflow (5-35 m³/h) based on room humidity, without motor or electricity consumption, without mechanical noise.'], ['Where is the interior windowsill installed vs. exterior sill?', 'The interior PVC sill is installed on the interior face of the wall below the window. The exterior anodised aluminium sill is installed on the exterior face with drainage slope. EPDM gasket sealing at the base of the exterior sill prevents infiltrations.']]}['ro'].map(([q,a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <style>{`
        .acc-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; background:#fff; }
        .acc-card { background:#fff; display:flex; flex-direction:column; border:1px solid #e8e8e4; }
        .acc-img  { width:100%; aspect-ratio:4/3; object-fit:cover; object-position:center; display:block; background:#f5f5f3; }
        .acc-body { padding:18px 18px 20px; display:flex; flex-direction:column; flex:1; }
        .acc-cat  { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:.54rem; letter-spacing:.2em; text-transform:uppercase; margin-bottom:8px; display:block; }
        .acc-name { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:1rem; color:#1a1a1a; line-height:1.2; margin:0 0 12px; }
        .acc-specs { list-style:none; padding:0; margin:0 0 12px; }
        .acc-specs li { font-size:.72rem; color:#767676; padding:3px 0; border-bottom:1px solid #f0f0ee; line-height:1.4; }
        .acc-specs li:last-child { border-bottom:none; }
        .acc-specs strong { color:#1a1a1a; font-weight:600; }
        .acc-desc { font-size:.76rem; color:#888; line-height:1.6; margin:0 0 16px; flex:1; }
        .acc-btn  { font-family:'Barlow Condensed',sans-serif; font-size:.58rem; font-weight:600; letter-spacing:.16em; text-transform:uppercase; text-decoration:none; border:1px solid #e8e8e4; padding:8px 16px; text-align:center; color:#1a1a1a; transition:all .18s; display:block; margin-top:auto; }
        .acc-btn:hover { background:#1a1a1a; color:#fff; border-color:#1a1a1a; }
        @media(max-width:1100px){ .acc-grid{ grid-template-columns:repeat(3,1fr); } }
        @media(max-width:720px) { .acc-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:480px) { .acc-grid{ grid-template-columns:1fr; } }
      `}</style>

      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">{ui.sub}</p>
        </div>
      </div>

      <section style={{padding:'48px 0 80px', background:'#fff'}}>
        <div className="container mx-auto px-6">
          <div className="acc-grid">
            {A.map(a => {
              const name  = a.name[locale]  || a.name.ro;
              const cat   = a.cat[locale]   || a.cat.ro;
              const desc  = a.desc[locale]  || a.desc.ro;
              const specs = a.specs[locale] || a.specs.ro;
              return (
                <div key={a.slug} className="acc-card">
                  <img src={a.img} alt={name} className="acc-img" loading="lazy"/>
                  <div className="acc-body">
                    <span className="acc-cat" style={{color: a.color}}>{cat}</span>
                    <h2 className="acc-name">{name}</h2>
                    <ul className="acc-specs">
                      {specs.map(([k, v]) => (
                        <li key={k + v}>· <strong>{k}:</strong> {v}</li>
                      ))}
                    </ul>
                    <p className="acc-desc">{desc}</p>
                    <Link href={`/accesorii/${a.slug}`} className="acc-btn">{ui.btn_detail}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-label={cta.tag} style={{background:'#111', padding:'0'}}>
        <div className="container" style={{paddingTop:'32px', paddingBottom:'32px', borderTop:'1px solid #1e1e1e'}}>
          <p style={{fontFamily:'Barlow Condensed,sans-serif', fontSize:'.6rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#444', marginBottom:'0', textAlign:'center'}}>
            {cta.h2a}{' '}<span style={{textDecoration:'underline'}}>{cta.h2b}</span>{' '}{cta.h2c}
          </p>
        </div>
      </section>
    </>
  );
}
