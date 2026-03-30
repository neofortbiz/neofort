import { Link } from '../../../i18n/navigation';
import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];
const SLUGS = { ro:'umbrire', en:'shading-systems', de:'beschattungssysteme', fr:'systemes-occultation', es:'sistemas-sombreado', it:'sistemi-oscuramento' };

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil' },
};

const PAGE_UI = {
  ro: { label:'Sisteme Umbrire · Neofort BIZ', title:'Rulouri Exterioare & Jaluzele Raffstore | Neofort BIZ', h1:'Sisteme de Umbrire', sub:'Rulouri exterioare din aluminiu și jaluzele venețiene Raffstore pentru protecție solară maximă și control precis al luminii.', desc:'Rulouri exterioare aluminiu Somfy, jaluzele venețiene Raffstore și Zipscreen — protecție solară până la 95%, rezistență vânt Clasa 6. Montaj București și toată Europa.', btn_detail:'Detalii' },
  en: { label:'Shading Systems · Neofort BIZ', title:'Roller Shutters & Raffstore Blinds | Neofort BIZ', h1:'Shading Systems', sub:'Exterior aluminium roller shutters and Raffstore venetian blinds for maximum solar protection and precise light control.', desc:'Aluminium roller shutters, Raffstore venetian blinds and Zipscreen — up to 95% solar protection, Class 6 wind resistance. Installation Bucharest and across Europe.', btn_detail:'Details' },
  de: { label:'Beschattungssysteme · Neofort BIZ', title:'Außenrollladen & Raffstore Jalousien | Neofort BIZ', h1:'Beschattungssysteme', sub:'Außenrollladen aus Aluminium und Raffstore-Jalousien für maximalen Sonnenschutz und präzise Lichtkontrolle.', desc:'Aluminiumrollläden, Raffstore-Jalousien und Zipscreen — bis 95% Sonnenschutz, Windlastwiderstand Klasse 6. Montage Bukarest und ganz Europa.', btn_detail:'Details' },
  fr: { label:'Systèmes d\'Occultation · Neofort BIZ', title:'Volets Roulants & Stores Raffstore | Neofort BIZ', h1:'Systèmes d\'Occultation', sub:'Volets roulants extérieurs en aluminium et stores vénitiens Raffstore pour une protection solaire maximale et un contrôle précis de la lumière.', desc:'Volets aluminium et stores Raffstore pour protection solaire et thermique. Livraison et pose Bucarest et Europe.', btn_detail:'Détails' },
  es: { label:'Sistemas de Sombreado · Neofort BIZ', title:'Persianas Exteriores & Stores Raffstore | Neofort BIZ', h1:'Sistemas de Sombreado', sub:'Persianas exteriores de aluminio y venecianas Raffstore para máxima protección solar y control preciso de la luz.', desc:'Persianas aluminio y Raffstore para protección solar y térmica. Entrega e instalación Bucarest y Europa.', btn_detail:'Detalles' },
  it: { label:'Sistemi di Oscuramento · Neofort BIZ', title:'Tapparelle Esterne & Raffstore | Neofort BIZ', h1:'Sistemi di Oscuramento', sub:'Tapparelle esterne in alluminio e veneziane Raffstore per la massima protezione solare e il controllo preciso della luce.', desc:'Tapparelle alluminio e Raffstore per protezione solare e termica. Consegna e installazione Bucarest e Europa.', btn_detail:'Dettagli' },
};

const A = [
  { slug:'rulouri-exterioare-aluminiu', img:'/accessories/rulouri-exterioare.avif', color:'#e8721c',
    cat:{ ro:'Protecție solară', en:'Solar Protection', de:'Sonnenschutz', fr:'Protection solaire', es:'Protección solar', it:'Protezione solare' },
    name:{ ro:'Rulouri exterioare Aluminiu', en:'Aluminium External Shutters', de:'Außenrollläden aus Aluminium', fr:'Volets roulants en aluminium', es:'Persianas exteriores de aluminio', it:'Tapparelle esterne in alluminio' },
    specs:{ ro:[['Lamele','Aluminiu izolate'],['Acționare','Manual / motor Somfy'],['Vopsire','Vopsire anodizată'],['Casetă','Aplicată sau suprapusă'],['Rezistență vânt','Până la 600 Pa'],['Telecomandă','Cu sau fără întrerupător']], en:[['Slats','Insulated aluminium'],['Drive','Manual / Somfy motor'],['Finish','Anodized coating'],['Box','Surface or built-in'],['Wind resistance','Up to 600 Pa'],['Remote','With or without switch']], de:[['Lamellen','Isoliertes Aluminium'],['Antrieb','Manuell / Somfy-Motor'],['Beschichtung','Eloxiert'],['Kasten','Aufgesetzt oder integriert'],['Windwiderstand','Bis 600 Pa'],['Fernbedienung','Mit oder ohne Schalter']], fr:[['Lames','Aluminium isolé'],['Commande','Manuel / moteur Somfy'],['Finition','Laquage anodisé'],['Caisson','Appliqué ou intégré'],['Résistance vent','Jusqu\'à 600 Pa'],['Télécommande','Avec ou sans interrupteur']], es:[['Lamas','Aluminio aislado'],['Accionamiento','Manual / motor Somfy'],['Acabado','Lacado anodizado'],['Cajón','Aplicado o integrado'],['Resistencia viento','Hasta 600 Pa'],['Mando a distancia','Con o sin interruptor']], it:[['Stecche','Alluminio isolato'],['Azionamento','Manuale / motore Somfy'],['Finitura','Verniciatura anodizzata'],['Cassonetto','Applicato o integrato'],['Resistenza vento','Fino a 600 Pa'],['Telecomando','Con o senza interruttore']] },
    desc:{ ro:'Rulouri aluminiu integrate sau aplicate. Protecție solară, termică și fonică. Acționare manuală sau electrică cu motor Somfy. Gamă completă de culori RAL.', en:'Integrated or surface-mounted aluminium shutters. Solar, thermal and acoustic protection. Manual or electric drive with Somfy motor. Full RAL colour range.', de:'Integrierte oder aufgesetzte Aluminiumrollläden. Sonnen-, Wärme- und Schallschutz. Manuelle oder elektrische Bedienung mit Somfy-Motor. Komplette RAL-Farbpalette.', fr:'Volets roulants aluminium intégrés ou appliqués. Protection solaire, thermique et phonique. Commande manuelle ou électrique avec moteur Somfy. Gamme complète RAL.', es:'Persianas de aluminio integradas o aplicadas. Protección solar, térmica y acústica. Accionamiento manual o eléctrico con motor Somfy. Gama completa de colores RAL.', it:'Tapparelle in alluminio integrate o applicate. Protezione solare, termica e acustica. Azionamento manuale o elettrico con motore Somfy. Gamma completa colori RAL.' },
  },
  { slug:'jaluzele-venetiene-raffstore', img:'/accessories/jaluzele-raffstore.avif', color:'#e8721c',
    cat:{ ro:'Protecție solară', en:'Solar Protection', de:'Sonnenschutz', fr:'Protection solaire', es:'Protección solar', it:'Protezione solare' },
    name:{ ro:'Jaluzele Venețiene Raffstore', en:'Venetian Raffstore Blinds', de:'Raffstore Jalousien', fr:'Persiennes Vénitiennes Raffstore', es:'Persianas Venecianas Raffstore', it:'Veneziane Raffstore' },
    specs:{ ro:[['Lamele','Aluminiu'],['Acționare','Electric · Automatizare'],['Culori','Gamă completă RAL'],['Casetă','Aparentă sau încastrată'],['Rezistență vânt','Până la 600 Pa'],['Telecomandă','Cu sau fără întrerupător']], en:[['Slats','Aluminium'],['Drive','Electric · Home automation'],['Colours','Full RAL range'],['Box','Visible or recessed'],['Wind resistance','Up to 600 Pa'],['Remote','With or without switch']], de:[['Lamellen','Aluminium'],['Antrieb','Elektrisch · Hausautomation'],['Farben','Komplette RAL-Palette'],['Kasten','Sichtbar oder eingelassen'],['Windwiderstand','Bis 600 Pa'],['Fernbedienung','Mit oder ohne Schalter']], fr:[['Lames','Aluminium'],['Commande','Électrique · Domotique'],['Couleurs','Gamme RAL complète'],['Caisson','Apparent ou encastré'],['Résistance vent','Jusqu\'à 600 Pa'],['Télécommande','Avec ou sans interrupteur']], es:[['Lamas','Aluminio'],['Accionamiento','Eléctrico · Domótica'],['Colores','Gama RAL completa'],['Cajón','Visto o empotrado'],['Resistencia viento','Hasta 600 Pa'],['Mando','Con o sin interruptor']], it:[['Stecche','Alluminio'],['Azionamento','Elettrico · Domotica'],['Colori','Gamma RAL completa'],['Cassonetto','A vista o incassato'],['Resistenza vento','Fino a 600 Pa'],['Telecomando','Con o senza interruttore']] },
    desc:{ ro:'Raffstore este categoria de jaluzele venețiene exterioare de înaltă performanță. Lamelele au o curbură specială și pot fi orientate la orice unghi — de la lumină maximă la întuneric complet.', en:'Raffstore high-performance exterior venetian blinds. Special curved slats oriented at any angle — from maximum light to complete darkness.', de:'Raffstore hochwertige Außenjalousien. Spezielle gekrümmte Lamellen in jedem Winkel ausrichtbar — von maximalem Licht bis völliger Dunkelheit.', fr:'Raffstore stores vénitiens extérieurs haute performance. Lames à courbure spéciale orientables à tout angle — de la lumière maximale à l\'obscurité totale.', es:'Raffstore persianas venecianas exteriores de alto rendimiento. Lamas de curvatura especial orientables a cualquier ángulo — de luz máxima a oscuridad total.', it:'Raffstore veneziane esterne ad alte prestazioni. Stecche a curvatura speciale orientabili a qualsiasi angolo — dalla luce massima al buio completo.' },
  },
  { slug:'zipscreen', img:'/accessories/zipscreen.avif', color:'#e8721c',
    cat:{ ro:'Protecție solară', en:'Solar Protection', de:'Sonnenschutz', fr:'Protection solaire', es:'Protección solar', it:'Protezione solare' },
    name:{ ro:'Zipscreen — Rulou Textil Exterior ZIP', en:'Zipscreen — Exterior ZIP Blind', de:'Zipscreen — Außenrollo ZIP', fr:'Zipscreen — Store Extérieur ZIP', es:'Zipscreen — Toldo Exterior ZIP', it:'Zipscreen — Tenda Esterna ZIP' },
    specs:{ ro:[['Material','Blackout · Screen · Perforat'],['Ghidare','Fermoar ZIP aluminiu'],['Acționare','Electric Somfy · Manual'],['Dimensiuni','până la 5000×5000 mm'],['Suprafață max','16 m²'],['Rezistență vânt','Clasa 6 · 88 km/h']], en:[['Fabric','Blackout · Screen · Perforated'],['Guide','Aluminium ZIP channel'],['Drive','Electric Somfy · Manual'],['Dimensions','up to 5000×5000 mm'],['Max area','16 m²'],['Wind resistance','Class 6 · 88 km/h']], de:[['Gewebe','Blackout · Screen · Perforiert'],['Führung','Aluminium-ZIP-Profil'],['Antrieb','Elektrisch Somfy · Manuell'],['Abmessungen','bis 5000×5000 mm'],['Max. Fläche','16 m²'],['Windwiderstand','Klasse 6 · 88 km/h']], fr:[['Tissu','Blackout · Screen · Perforé'],['Guidage','Profilé ZIP aluminium'],['Commande','Électrique Somfy · Manuel'],['Dimensions','jusqu\'à 5000×5000 mm'],['Surface max','16 m²'],['Résistance vent','Classe 6 · 88 km/h']], es:[['Tejido','Blackout · Screen · Perforado'],['Guía','Perfil ZIP aluminio'],['Accionamiento','Eléctrico Somfy · Manual'],['Dimensiones','hasta 5000×5000 mm'],['Superficie máx','16 m²'],['Resistencia viento','Clase 6 · 88 km/h']], it:[['Tessuto','Blackout · Screen · Perforato'],['Guida','Profilo ZIP alluminio'],['Azionamento','Elettrico Somfy · Manuale'],['Dimensioni','fino a 5000×5000 mm'],['Superficie max','16 m²'],['Resistenza vento','Classe 6 · 88 km/h']] },
    desc:{ ro:'Zipscreen cu fermoar ZIP menține materialul textil perfect tensionat la vânt — disponibil blackout sau screen. Acoperire până la 16 m², motor Somfy silențios, vopsire RAL completă.', en:'Zipscreen with ZIP fastener keeps textile perfectly tensioned in wind — available blackout or screen. Coverage up to 16 m², silent Somfy motor, full RAL coating.', de:'Zipscreen mit ZIP-Reißverschluss hält Textil windbeständig gespannt — Blackout oder Screen. Bis 16 m², leiser Somfy-Motor, vollständige RAL-Lackierung.', fr:'Zipscreen avec fermeture ZIP maintient le tissu tendu par vent — disponible blackout ou screen. Jusqu\'à 16 m², moteur Somfy silencieux, laquage RAL complet.', es:'Zipscreen con cierre ZIP mantiene el tejido tensado con viento — disponible blackout o screen. Hasta 16 m², motor Somfy silencioso, lacado RAL completo.', it:'Zipscreen con chiusura ZIP mantiene il tessuto teso con il vento — disponibile blackout o screen. Fino a 16 m², motore Somfy silenzioso, verniciatura RAL completa.' },
  },
  { slug:'pergole-automate-somfy', img:'/accessories/pergole-automate-somfy.avif', color:'#d4001a',
    cat:{ ro:'Automatizare & Umbrire', en:'Automation & Shading', de:'Automatisierung & Beschattung', fr:'Automatisation & Occultation', es:'Automatización & Sombreado', it:'Automazione & Oscuramento' },
    name:{ ro:'Pergole Automate Somfy', en:'Somfy Automatic Pergolas', de:'Somfy Automatische Pergolen', fr:'Pergolas Automatiques Somfy', es:'Pérgolas Automáticas Somfy', it:'Pergole Automatiche Somfy' },
    specs:{ ro:[['Motor','Somfy Pergola 50/60 RGS io'],['Deschidere max.','5 m lățime'],['Protecție vânt','Auto > 50 km/h'],['Smart Home','TaHoma — Alexa, Google'],['Pânză','Impermeabilă UPF 50+'],['Garanție','5 ani motor Somfy']], en:[['Motor','Somfy Pergola 50/60 RGS io'],['Max. opening','5 m width'],['Wind protection','Auto > 50 km/h'],['Smart Home','TaHoma — Alexa, Google'],['Fabric','Waterproof UPF 50+'],['Warranty','5 year Somfy motor']], de:[['Motor','Somfy Pergola 50/60 RGS io'],['Max. Öffnung','5 m Breite'],['Windschutz','Auto > 50 km/h'],['Smart Home','TaHoma — Alexa, Google'],['Tuch','Wasserdicht UPF 50+'],['Garantie','5 Jahre Somfy Motor']], fr:[['Moteur','Somfy Pergola 50/60 RGS io'],['Ouverture max.','5 m largeur'],['Prot. vent','Auto > 50 km/h'],['Smart Home','TaHoma — Alexa, Google'],['Toile','Imperméable UPF 50+'],['Garantie','5 ans moteur Somfy']], es:[['Motor','Somfy Pergola 50/60 RGS io'],['Apertura máx.','5 m ancho'],['Prot. viento','Auto > 50 km/h'],['Smart Home','TaHoma — Alexa, Google'],['Tela','Impermeable UPF 50+'],['Garantía','5 años motor Somfy']], it:[['Motore','Somfy Pergola 50/60 RGS io'],['Apertura max.','5 m larghezza'],['Prot. vento','Auto > 50 km/h'],['Smart Home','TaHoma — Alexa, Google'],['Telo','Impermeabile UPF 50+'],['Garanzia','5 anni motore Somfy']] },
    desc:{ ro:'Pergolă motoricizată Somfy cu retragere automată la vânt > 50 km/h. Motor Pergola RGS io silențios, pânză impermeabilă UPF 50+, integrare TaHoma Smart Home. Montaj profesional București.', en:'Somfy motorised pergola with automatic retraction at wind > 50 km/h. Silent Pergola RGS io motor, UPF 50+ waterproof fabric, TaHoma Smart Home integration. Professional installation Bucharest.', de:'Somfy motorisierte Pergola mit automatischer Einfahrt bei Wind > 50 km/h. Leiser Pergola RGS io Motor, UPF 50+ wasserdichtes Tuch, TaHoma Smart Home Integration. Professionelle Montage Bukarest.', fr:'Pergola motorisée Somfy avec retrait automatique au vent > 50 km/h. Moteur Pergola RGS io silencieux, toile imperméable UPF 50+, intégration TaHoma Smart Home. Pose professionnelle Bucarest.', es:'Pérgola motorizada Somfy con retracción automática al viento > 50 km/h. Motor Pergola RGS io silencioso, tela impermeable UPF 50+, integración TaHoma Smart Home. Instalación profesional Bucarest.', it:'Pergola motorizzata Somfy con ritiro automatico al vento > 50 km/h. Motore Pergola RGS io silenzioso, telo impermeabile UPF 50+, integrazione TaHoma Smart Home. Installazione professionale Bucarest.' },
  }
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const ui = PAGE_UI[locale] || PAGE_UI.ro;
  const slug = SLUGS[locale] || SLUGS.ro;
  return {
    title: ui.title,
    description: ui.desc,
    keywords: locale === 'ro' ? 'rulouri exterioare aluminiu, rulouri exterioare aluminiu bucuresti, jaluzele venetiene raffstore, jaluzele raffstore pret, zipscreen terasa, sisteme umbrire ferestre, protectie solara somfy, rulouri aluminiu somfy, umbrire terasa bucuresti, zipscreen bucuresti' : locale === 'en' ? 'aluminium roller shutters, aluminium roller shutters Bucharest, Raffstore venetian blinds, Raffstore blinds price, zipscreen terrace, shading systems windows, solar protection Somfy, zipscreen Bucharest' : locale === 'de' ? 'Aluminium Rollläden, Raffstore Jalousien, Beschattungssysteme, Sonnenschutz Somfy' : locale === 'fr' ? 'volets roulants aluminium, stores Raffstore, systèmes occultation, protection solaire' : locale === 'es' ? 'persianas exteriores aluminio, persianas Raffstore, sombreado, protección solar' : 'tapparelle alluminio, veneziane Raffstore, sistemi oscuramento, protezione solare',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: Object.fromEntries([...LOCALES.map(l => [l, `${BASE}/${l}/${SLUGS[l]}`]), ['x-default', `${BASE}/ro/${SLUGS.ro}`]]),
    },
    openGraph: { type:'website', url:`${BASE}/${locale}/${slug}`, siteName:'Neofort BIZ', title: ui.title, description: ui.desc, images: [{ url:`${BASE}/og/Sisteme_de_umbrire__rulouri_exterioare__jaluzele_raffstore__jaluzele_venetiene.jpg`, width:1200, height:630, alt: locale==='ro' ? 'Sisteme de umbrire: rulouri exterioare aluminiu și jaluzele Raffstore — Neofort BIZ' : locale==='en' ? 'Shading systems: aluminium roller shutters and Raffstore blinds — Neofort BIZ' : locale==='de' ? 'Beschattungssysteme: Aluminiumrollladen und Raffstore-Jalousien — Neofort BIZ' : locale==='fr' ? 'Systèmes occultation: volets roulants aluminium et stores Raffstore — Neofort BIZ' : locale==='es' ? 'Sistemas sombreado: persianas aluminio y estores Raffstore — Neofort BIZ' : 'Sistemi schermatura: tapparelle alluminio e tende Raffstore — Neofort BIZ', type:'image/jpeg' }] },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: ui.title, description: ui.desc, images:[`${BASE}/og/Sisteme_de_umbrire__rulouri_exterioare__jaluzele_raffstore__jaluzele_venetiene.jpg`] },
};
}

export default async function Page({ params }) {
  const { locale } = await params;
  const ui  = PAGE_UI[locale]    || PAGE_UI.ro;
  const cta = CTA_LABELS[locale] || CTA_LABELS.ro;

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
    'mainEntity': ({'ro': [['Ce este mai bun: rulouri aluminiu sau jaluzele Raffstore?', 'Rulourile asigură protecție maximă la efracție (RC3) și izolare termică nocturnă. Raffstore oferă control solar de precizie cu vedere păstrată. Dacă prioritatea e securitatea și izolarea termică — rulouri. Dacă e controlul luminii — Raffstore.'], ['Rulourile exterioare din aluminiu se pot monta pe ferestre deja instalate?', 'Da, rulourile aluminiu se montează ca sistem aplicat sau suprapus direct pe tâmplăria existentă, fără modificări structurale, atât pe PVC cât și pe aluminiu.'], ['Ce reducere solară oferă jaluzelele Raffstore față de rulourile clasice?', 'Raffstore reduce câștigul solar cu până la 85% (față de 70% la rulouri), cu avantajul unic că menține vederea spre exterior la orice poziție intermediară a lamelelor.']], 'en': [['What is better: aluminium roller shutters or Raffstore blinds?', "Shutters offer maximum RC3 burglary protection and night thermal insulation. Raffstore provides precision solar control with maintained exterior view. If priority is security and insulation — shutters. If it's light control — Raffstore."], ['Can exterior aluminium shutters be fitted to already installed windows?', 'Yes, aluminium shutters are installed as a surface-mounted or overlay system directly on existing joinery, without structural modifications, on both PVC and aluminium frames.'], ['What solar reduction do Raffstore blinds offer vs. classic shutters?', 'Raffstore reduces solar heat gain by up to 85% (vs. 70% for shutters), with the unique advantage of maintaining exterior view at any intermediate slat position.']]})[locale]?.map(([q,a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    })) || {'ro': [['Ce este mai bun: rulouri aluminiu sau jaluzele Raffstore?', 'Rulourile asigură protecție maximă la efracție (RC3) și izolare termică nocturnă. Raffstore oferă control solar de precizie cu vedere păstrată. Dacă prioritatea e securitatea și izolarea termică — rulouri. Dacă e controlul luminii — Raffstore.'], ['Rulourile exterioare din aluminiu se pot monta pe ferestre deja instalate?', 'Da, rulourile aluminiu se montează ca sistem aplicat sau suprapus direct pe tâmplăria existentă, fără modificări structurale, atât pe PVC cât și pe aluminiu.'], ['Ce reducere solară oferă jaluzelele Raffstore față de rulourile clasice?', 'Raffstore reduce câștigul solar cu până la 85% (față de 70% la rulouri), cu avantajul unic că menține vederea spre exterior la orice poziție intermediară a lamelelor.']], 'en': [['What is better: aluminium roller shutters or Raffstore blinds?', "Shutters offer maximum RC3 burglary protection and night thermal insulation. Raffstore provides precision solar control with maintained exterior view. If priority is security and insulation — shutters. If it's light control — Raffstore."], ['Can exterior aluminium shutters be fitted to already installed windows?', 'Yes, aluminium shutters are installed as a surface-mounted or overlay system directly on existing joinery, without structural modifications, on both PVC and aluminium frames.'], ['What solar reduction do Raffstore blinds offer vs. classic shutters?', 'Raffstore reduces solar heat gain by up to 85% (vs. 70% for shutters), with the unique advantage of maintaining exterior view at any intermediate slat position.']]}['ro'].map(([q,a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    }))
  };


  const PILLAR_SLUGS = {
    ro: 'umbrire/ghid-complet-sisteme-umbrire',
    en: 'shading-systems/complete-guide',
    de: 'beschattungssysteme/kompletter-ratgeber',
    fr: 'systemes-occultation/guide-complet',
    es: 'sistemas-sombreado/guia-completa',
    it: 'sistemi-oscuramento/guida-completa',
  };
  const PILLAR_LABELS = {
    ro: 'Ghid Complet Sisteme Umbrire 2026 — Zipscreen, Raffstore, Rulouri',
    en: 'Complete Shading Guide 2026 — Zipscreen, Raffstore, Roller Shutters',
    de: 'Beschattungsratgeber 2026 — Zipscreen, Raffstore, Aussenrollladen',
    fr: 'Guide occultation 2026 — Zipscreen, Raffstore, Volets roulants',
    es: 'Guia sombreado 2026 — Zipscreen, Raffstore, Persianas aluminio',
    it: 'Guida oscuramento 2026 — Zipscreen, Raffstore, Tapparelle',
  };
  const PILLAR_CTA = {
    ro: 'Citeste Ghidul Complet',
    en: 'Read the Complete Guide',
    de: 'Kompletten Ratgeber lesen',
    fr: 'Lire le guide complet',
    es: 'Leer la guia completa',
    it: 'Leggi la guida completa',
  };
  const pillarSlug = PILLAR_SLUGS[locale] || PILLAR_SLUGS.ro;
  const pillarLabel = PILLAR_LABELS[locale] || PILLAR_LABELS.ro;
  const pillarCta = PILLAR_CTA[locale] || PILLAR_CTA.ro;

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
        .acc-specs li { font-size:.72rem; color:#636363; padding:3px 0; border-bottom:1px solid #f0f0ee; line-height:1.4; }
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
                    <Link href={`/umbrire/${a.slug}`} className="acc-btn">{ui.btn_detail}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PILLAR GUIDE LINK ── */}
      <section style={{background:'#f7f7f5',padding:'0'}}>
        <div className="container" style={{paddingTop:'24px',paddingBottom:'24px',borderTop:'1px solid #e8e8e4'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'12px'}}>
            <div>
              <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.65rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#888',marginBottom:'4px'}}>Ghid & Resurse</div>
              <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.92rem',fontWeight:600,letterSpacing:'.04em',color:'#1a2a3a'}}>{pillarLabel}</div>
            </div>
            <Link href={`/${pillarSlug}`} style={{display:'inline-block',background:'#1a2a3a',color:'#fff',fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'.72rem',letterSpacing:'.18em',textTransform:'uppercase',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>
              {pillarCta} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
