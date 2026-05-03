import { getTranslations } from 'next-intl/server';
import { Link } from '../../../i18n/navigation';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_DESPRE = {'ro':'despre', 'en':'about', 'de':'ueber-uns', 'fr':'a-propos', 'es':'sobre-nosotros', 'it':'chi-siamo'};

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil', btn:'Cerere Ofertă' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows', btn:'Request Quote' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an', btn:'Angebot anfragen' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil', btn:'Demander un devis' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil', btn:'Pedir presupuesto' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil', btn:'Richiedi preventivo' },
};

const PAGE_UI = {
  ro: { label:'Neofort BIZ', h1:'Despre noi', sub:'21 ani de experiență neîntreruptă în tâmplărie PVC și aluminiu.', who_label:'Cine suntem', who_h2:'Specialiști în tâmplărie PVC Salamander și aluminiu Alumil', who_p1:'Neofort BIZ este unul dintre furnizorii de referință de tâmplărie PVC și aluminiu din România, cu o activitate neîntreruptă de 21 ani. Furnizăm tâmplărie din gamele premium ale mărcilor <strong>Salamander</strong> și <strong>Alumil</strong>, executată pe linii de producție automatizate.', who_p2:'Produsele și serviciile noastre au ajuns în toată UE și sunt recunoscute pentru calitatea lor ireproșabilă și prețurile competitive. Cu Neofort, aveți garanția unui raport excelent între calitate, utilitate și preț.', who_p3:'<strong>NEOFORT BIZ SRL</strong> · CUI: RO30324211 · Reg. Com.: J40/6928/2012 · EUID: ROONRC.J40/6928/2012 · Str. Theodor Aman Pictor nr.11, Sector 1, București 010776 · Marcă înregistrată OSIM nr. <strong>M 2014 05130</strong>.', values_label:'Valorile noastre', stats:[['21+','Ani pe piață'],['50%+','Clienți fideli'],['4.9★','46 Recenzii Google'],['6','Limbi suport']], values:[{title:'Prețuri competitive',desc:'Lucrăm permanent la raportul calitate–preț–utilitate.'},{title:'Consultanță inovatoare',desc:'Cele mai noi și performante soluții tehnice din domeniu.'},{title:'Calitate garantată',desc:'Garanție completă pe produse și montaj, fără compromisuri.'},{title:'Experiență dovedită',desc:'21 ani de activitate neîntreruptă pe piața tâmplăriei premium.'}], team_label:'Echipa noastră', team_sub:'Oamenii care stau în spatele fiecărui proiect Neofort BIZ.' },
  en: { label:'Neofort BIZ', h1:'About us', sub:'21 years of uninterrupted experience in PVC and aluminium windows.', who_label:'Who we are', who_h2:'Specialists in Salamander PVC and Alumil aluminium windows', who_p1:'Neofort BIZ is one of the leading suppliers of PVC and aluminium windows in Romania, with 21 years of uninterrupted activity. We supply windows from the premium ranges of <strong>Salamander</strong> and <strong>Alumil</strong>, manufactured on automated production lines.', who_p2:'Our products and services have reached customers across the EU and are recognised for their impeccable quality and competitive prices. With Neofort, you have the guarantee of an excellent quality-utility-price ratio.', who_p3:'<strong>NEOFORT BIZ SRL</strong> · VAT: RO30324211 · Reg.: J40/6928/2012 · EUID: ROONRC.J40/6928/2012 · 11 Theodor Aman Pictor St., Sector 1, Bucharest 010776 · OSIM trademark no. <strong>M 2014 05130</strong>.', values_label:'Our values', stats:[['21+','Years on market'],['50%+','Loyal clients'],['4.9★','46 Google Reviews'],['6','Languages support']], values:[{title:'Competitive prices',desc:'We continually work on the quality-price-utility ratio.'},{title:'Innovative consulting',desc:'The latest and most performant technical solutions available.'},{title:'Guaranteed quality',desc:'Full warranty on products and installation, no compromises.'},{title:'Proven experience',desc:'21 years of uninterrupted activity in premium window supply.'}], team_label:'Our team', team_sub:'The people behind every Neofort BIZ project.' },
  de: { label:'Neofort BIZ', h1:'Über uns', sub:'21 Jahre ununterbrochene Erfahrung in PVC- und Aluminiumfenstern.', who_label:'Wer wir sind', who_h2:'Spezialisten für Salamander PVC- und Alumil Aluminiumfenster', who_p1:'Neofort BIZ ist einer der führenden Lieferanten von PVC- und Aluminiumfenstern in Rumänien mit 21 Jahren ununterbrochener Tätigkeit. Wir liefern Fenster aus den Premium-Sortimenten von <strong>Salamander</strong> und <strong>Alumil</strong>, gefertigt auf automatisierten Produktionslinien.', who_p2:'Unsere Produkte und Dienstleistungen haben Kunden in der gesamten EU erreicht und sind für ihre einwandfreie Qualität und wettbewerbsfähigen Preise bekannt.', who_p3:'<strong>NEOFORT BIZ SRL</strong> · USt-ID: RO30324211 · HR-Nr.: J40/6928/2012 · EUID: ROONRC.J40/6928/2012 · Str. Theodor Aman Pictor 11, Sektor 1, Bukarest 010776 · Marke OSIM Nr. <strong>M 2014 05130</strong>.', values_label:'Unsere Werte', stats:[['21+','Jahre Marktpräsenz'],['50%+','Treue Kunden'],['4.9★','46 Google-Bewertungen'],['6','Sprachunterstützung']], values:[{title:'Wettbewerbsfähige Preise',desc:'Wir arbeiten kontinuierlich am Qualitäts-Preis-Nutzen-Verhältnis.'},{title:'Innovative Beratung',desc:'Die neuesten und leistungsfähigsten technischen Lösungen.'},{title:'Garantierte Qualität',desc:'Vollständige Garantie auf Produkte und Einbau.'},{title:'Nachgewiesene Erfahrung',desc:'21 Jahre ununterbrochene Tätigkeit im Premium-Fensterbereich.'}], team_label:'Unser Team', team_sub:'Die Menschen hinter jedem Neofort BIZ Projekt.' },
  fr: { label:'Neofort BIZ', h1:'À propos', sub:'21 ans d\'expérience ininterrompue dans les menuiseries PVC et aluminium.', who_label:'Qui nous sommes', who_h2:'Spécialistes en menuiserie PVC Salamander et aluminium Alumil', who_p1:'Neofort BIZ est l\'un des principaux fournisseurs de menuiseries PVC et aluminium en Roumanie, avec 21 ans d\'activité ininterrompue. Nous fournissons des menuiseries issues des gammes premium de <strong>Salamander</strong> et <strong>Alumil</strong>, fabriquées sur lignes de production automatisées.', who_p2:'Nos produits et services ont atteint toute l\'UE et sont reconnus pour leur qualité irréprochable et leurs prix compétitifs.', who_p3:'<strong>NEOFORT BIZ SRL</strong> · TVA: RO30324211 · RC: J40/6928/2012 · EUID: ROONRC.J40/6928/2012 · 11 rue Theodor Aman Pictor, Secteur 1, Bucarest 010776 · Marque OSIM n° <strong>M 2014 05130</strong>.', values_label:'Nos valeurs', stats:[['21+','Ans sur le marché'],['50%+','Clients fidèles'],['4.9★','46 Avis Google'],['6','Langues de support']], values:[{title:'Prix compétitifs',desc:'Nous travaillons en permanence sur le rapport qualité-prix-utilité.'},{title:'Conseil innovant',desc:'Les solutions techniques les plus récentes et performantes.'},{title:'Qualité garantie',desc:'Garantie complète sur les produits et la pose.'},{title:'Expérience éprouvée',desc:'21 ans d\'activité ininterrompue dans la menuiserie premium.'}], team_label:'Notre équipe', team_sub:'Les personnes derrière chaque projet Neofort BIZ.' },
  es: { label:'Neofort BIZ', h1:'Sobre nosotros', sub:'21 años de experiencia ininterrumpida en carpintería PVC y aluminio.', who_label:'Quiénes somos', who_h2:'Especialistas en carpintería PVC Salamander y aluminio Alumil', who_p1:'Neofort BIZ es uno de los principales proveedores de carpintería PVC y aluminio en Rumanía, con 21 años de actividad ininterrumpida. Suministramos carpintería de las gamas premium de <strong>Salamander</strong> y <strong>Alumil</strong>, fabricada en líneas de producción automatizadas.', who_p2:'Nuestros productos y servicios han llegado a toda la UE y son reconocidos por su calidad impecable y precios competitivos.', who_p3:'<strong>NEOFORT BIZ SRL</strong> · CIF: RO30324211 · Reg.: J40/6928/2012 · EUID: ROONRC.J40/6928/2012 · C/ Theodor Aman Pictor 11, Sector 1, Bucarest 010776 · Marca OSIM n.° <strong>M 2014 05130</strong>.', values_label:'Nuestros valores', stats:[['21+','Años en el mercado'],['50%+','Clientes fieles'],['4.9★','46 Reseñas Google'],['6','Idiomas de soporte']], values:[{title:'Precios competitivos',desc:'Trabajamos continuamente en la relación calidad-precio-utilidad.'},{title:'Consultoría innovadora',desc:'Las soluciones técnicas más nuevas y eficientes.'},{title:'Calidad garantizada',desc:'Garantía completa en productos e instalación.'},{title:'Experiencia probada',desc:'21 años de actividad ininterrumpida en carpintería premium.'}], team_label:'Nuestro equipo', team_sub:'Las personas detrás de cada proyecto Neofort BIZ.' },
  it: { label:'Neofort BIZ', h1:'Chi siamo', sub:'21 anni di esperienza ininterrotta in infissi PVC e alluminio.', who_label:'Chi siamo', who_h2:'Specialisti in infissi PVC Salamander e alluminio Alumil', who_p1:'Neofort BIZ è uno dei principali fornitori di infissi PVC e alluminio in Romania, con 21 anni di attività ininterrotta. Forniamo infissi dalle gamme premium di <strong>Salamander</strong> e <strong>Alumil</strong>, prodotti su linee di produzione automatizzate.', who_p2:'I nostri prodotti e servizi hanno raggiunto tutta l\'UE e sono riconosciuti per la loro qualità irreprensibile e i prezzi competitivi.', who_p3:'<strong>NEOFORT BIZ SRL</strong> · P.IVA: RO30324211 · Reg.: J40/6928/2012 · EUID: ROONRC.J40/6928/2012 · Via Theodor Aman Pictor 11, Settore 1, Bucarest 010776 · Marchio OSIM n. <strong>M 2014 05130</strong>.', values_label:'I nostri valori', stats:[['21+','Anni sul mercato'],['50%+','Clienti fedeli'],['4.9★','46 Recensioni Google'],['6','Lingue di supporto']], values:[{title:'Prezzi competitivi',desc:'Lavoriamo continuamente sul rapporto qualità-prezzo-utilità.'},{title:'Consulenza innovativa',desc:'Le soluzioni tecniche più recenti e performanti.'},{title:'Qualità garantita',desc:'Garanzia completa su prodotti e posa.'},{title:'Esperienza comprovata',desc:'21 anni di attività ininterrotta nella fornitura di infissi premium.'}], team_label:'Il nostro team', team_sub:'Le persone dietro ogni progetto Neofort BIZ.' },
};


// ─── DATE ECHIPĂ (pentru E-E-A-T) ─────────────────────────────────────────
const TEAM_DESPRE = [
  {
    name: 'George PALANCEAN',
    photo: '/team/george-palancean.avif',
    role: { ro:'Manager Vânzări', en:'Sales Manager', de:'Vertriebsleiter', fr:'Responsable des ventes', es:'Director de ventas', it:'Responsabile vendite' },
    bio: {
      ro: 'Coordonează echipa de vânzări Neofort BIZ cu focus pe proiecte rezidențiale și comerciale în București, Ilfov și piața de export UE.',
      en: 'Coordinates the Neofort BIZ sales team with focus on residential and commercial projects in Bucharest, Ilfov and the EU export market.',
      de: 'Koordiniert das Vertriebsteam von Neofort BIZ mit Schwerpunkt auf Wohn- und Gewerbeprojekte in Bukarest, Ilfov und dem EU-Exportmarkt.',
      fr: "Coordonne l'équipe commerciale de Neofort BIZ avec un focus sur les projets résidentiels et commerciaux à Bucarest, Ilfov et le marché export UE.",
      es: 'Coordina el equipo de ventas de Neofort BIZ con foco en proyectos residenciales y comerciales en Bucarest, Ilfov y el mercado de exportación UE.',
      it: 'Coordina il team vendite di Neofort BIZ con focus su progetti residenziali e commerciali a Bucarest, Ilfov e il mercato export UE.',
    },
    color: '#2d5a8e',
    initials: 'GP',
  },
  {
    name: 'Olga OPREA',
    photo: '/team/olga-oprea.avif',
    role: { ro:'Reprezentant Vânzări', en:'Sales Representative', de:'Vertriebsmitarbeiterin', fr:'Représentante commerciale', es:'Representante de ventas', it:'Rappresentante vendite' },
    bio: {
      ro: 'Specialist în consultanță pentru clienți rezidențiali — ferestre PVC Salamander, jaluzele exterioare și sisteme nZEB. Asigură ofertele personalizate în 24 ore.',
      en: 'Specialist in consulting for residential clients — Salamander PVC windows, exterior blinds and nZEB systems. Provides personalised quotes within 24 hours.',
      de: 'Spezialistin für die Beratung von Privatkunden — Salamander PVC-Fenster, Außenjalousien und nZEB-Systeme. Erstellt individuelle Angebote innerhalb von 24 Stunden.',
      fr: "Spécialiste en conseil pour les clients résidentiels — fenêtres PVC Salamander, stores extérieurs et systèmes nZEB. Fournit des devis personnalisés en 24 heures.",
      es: 'Especialista en asesoramiento para clientes residenciales — ventanas PVC Salamander, persianas exteriores y sistemas nZEB. Proporciona presupuestos personalizados en 24 horas.',
      it: `Specialista in consulenza per clienti residenziali — finestre PVC Salamander, veneziane esterne e sistemi nZEB. Fornisce preventivi personalizzati entro 24 ore.`,
    },
    color: '#4a7c59',
    initials: 'OO',
  },
  {
    name: 'Cristian CIOROIU',
    photo: '/team/cristian-cioroiu.avif',
    role: { ro:'Reprezentant Export', en:'Export Representative', de:'Exportmitarbeiter', fr:'Représentant export', es:'Representante de exportación', it:'Rappresentante export' },
    bio: {
      ro: 'Gestionează comenzile de export pentru clienți din Germania, Austria, Italia, Franța și Spania. Asigură livrarea și montajul în toată Europa.',
      en: 'Manages export orders for clients in Germany, Austria, Italy, France and Spain. Ensures delivery and installation throughout Europe.',
      de: 'Verwaltet Exportaufträge für Kunden in Deutschland, Österreich, Italien, Frankreich und Spanien. Sorgt für Lieferung und Montage in ganz Europa.',
      fr: "Gère les commandes export pour les clients en Allemagne, Autriche, Italie, France et Espagne. Assure la livraison et la pose dans toute l'Europe.",
      es: 'Gestiona los pedidos de exportación para clientes en Alemania, Austria, Italia, Francia y España. Garantiza la entrega e instalación en toda Europa.',
      it: 'Gestisce gli ordini export per clienti in Germania, Austria, Italia, Francia e Spagna. Garantisce consegna e installazione in tutta Europa.',
    },
    color: '#e8721c',
    initials: 'CC',
  },
  {
    name: 'Mihai DĂNĂLACHE',
    photo: '/team/mihai-danalache.avif',
    role: { ro:'Consultant Tehnic Senior', en:'Senior Technical Consultant', de:'Leitender technischer Berater', fr:'Consultant technique senior', es:'Asesor técnico senior', it:'Consulente tecnico senior' },
    bio: {
      ro: 'Consultant tehnic cu 21 de ani de experiență în tâmplărie PVC și aluminiu. Specialist certificat în sisteme Salamander bluEvolution și montaj nZEB. A coordonat sute de proiecte rezidențiale și comerciale în București, Ilfov și Europa. Autor al ghidurilor tehnice din blogul Neofort BIZ.',
      en: 'Technical consultant with 21 years of experience in PVC and aluminium windows. Certified specialist in Salamander bluEvolution systems and nZEB installation. Has coordinated hundreds of residential and commercial projects in Bucharest, Ilfov and Europe. Author of the technical guides on the Neofort BIZ blog.',
      de: 'Technischer Berater mit 21 Jahren Erfahrung in PVC- und Aluminiumfenstern. Zertifizierter Spezialist für Salamander bluEvolution Systeme und nZEB-Montage. Hat Hunderte von Projekten in Bukarest, Ilfov und Europa koordiniert. Autor der technischen Leitfäden im Neofort BIZ Blog.',
      fr: "Consultant technique avec 21 ans d'expérience en menuiserie PVC et aluminium. Spécialiste certifié des systèmes Salamander bluEvolution et de la pose nZEB. A coordonné des centaines de projets à Bucarest, Ilfov et en Europe. Auteur des guides techniques du blog Neofort BIZ.",
      es: 'Consultor técnico con 21 años de experiencia en carpintería PVC y aluminio. Especialista certificado en sistemas Salamander bluEvolution e instalación nZEB. Ha coordinado cientos de proyectos en Bucarest, Ilfov y Europa. Autor de las guías técnicas del blog Neofort BIZ.',
      it: `Consulente tecnico con 21 anni di esperienza in infissi PVC e alluminio. Specialista certificato nei sistemi Salamander bluEvolution e installazione nZEB. Ha coordinato centinaia di progetti a Bucarest, Ilfov e in Europa. Autore delle guide tecniche del blog Neofort BIZ.`,
    },
    color: '#1a4a8a',
    initials: 'MD',
  },
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'despre' });
  const slug = SLUGS_DESPRE[locale] || SLUGS_DESPRE.ro;
  return {
    title: t('title'),
    description: t('description'),
    keywords: locale === 'ro' ? 'despre Neofort BIZ, furnizor tamplarie PVC aluminiu Bucuresti, 21 ani experienta' : locale === 'en' ? 'about Neofort BIZ, PVC aluminium window manufacturer Bucharest, 21 years experience' : locale === 'de' ? 'über Neofort BIZ, PVC Aluminiumfenster Hersteller Bukarest, 21 Jahre Erfahrung' : locale === 'fr' ? 'à propos Neofort BIZ, fabricant menuiseries PVC aluminium Bucarest, 21 ans' : locale === 'es' ? 'sobre Neofort BIZ, fabricante carpintería PVC aluminio Bucarest, 21 años' : 'chi siamo Neofort BIZ, produttore infissi PVC alluminio Bucarest, 21 anni',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: {
        'ro': `${BASE}/ro/${SLUGS_DESPRE.ro}`,
        'en': `${BASE}/en/${SLUGS_DESPRE.en}`,
        'de': `${BASE}/de/${SLUGS_DESPRE.de}`,
        'fr': `${BASE}/fr/${SLUGS_DESPRE.fr}`,
        'es': `${BASE}/es/${SLUGS_DESPRE.es}`,
        'it': `${BASE}/it/${SLUGS_DESPRE.it}`,
        'x-default': `${BASE}/ro/${SLUGS_DESPRE.ro}`,
      },
    },
    openGraph: {
      type: 'website',
      url: `${BASE}/${locale}/${slug}`,
      siteName: 'Neofort BIZ',
      title: t('title'),
      description: t('description'),
      images: [{ url:`${BASE}/og/Despre_noi.avif`, width:1200, height:630, alt: locale==='ro' ? 'Despre Neofort BIZ — 21 ani experiență tâmplărie PVC Salamander și aluminiu Alumil' : locale==='en' ? 'About Neofort BIZ — 21 years PVC Salamander and Alumil aluminium window experience' : locale==='de' ? 'Über Neofort BIZ — 21 Jahre Erfahrung mit Salamander PVC- und Alumil Aluminiumfenstern' : locale==='fr' ? 'À propos Neofort BIZ — 21 ans expérience menuiseries PVC Salamander et aluminium Alumil' : locale==='es' ? 'Sobre Neofort BIZ — 21 años experiencia carpintería PVC Salamander y aluminio Alumil' : 'Chi siamo Neofort BIZ — 21 anni esperienza infissi PVC Salamander e alluminio Alumil', type:'image/avif' }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: t('title'), description: t('description'), images:[`${BASE}/og/Despre_noi.avif`] },
  };
}

export default async function DesprePage({ params }) {
  const { locale } = await params;
  const ui = PAGE_UI[locale] || PAGE_UI.ro;

  const schemaDespre = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BASE}/#organization`,
        'name': 'Neofort BIZ SRL',
        'legalName': 'NEOFORT BIZ SRL',
        'url': BASE,
        'logo': { '@type': 'ImageObject', 'url': `${BASE}/Neofort.avif`, 'width': 200, 'height': 74 },
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Str. Theodor Aman Pictor nr.11',
          'addressLocality': 'București',
          'addressRegion': 'Sector 1',
          'postalCode': '010776',
          'addressCountry': 'RO',
        },
        'geo': { '@type': 'GeoCoordinates', 'latitude': 44.4268, 'longitude': 26.0994 },
        'telephone': '+40752443435',
        'faxNumber': '+40215280661',
        'email': 'oferte@neofort-biz.ro',
        'vatID': 'RO30324211',
        'taxID': 'RO30324211',
        'leiCode': 'J40/6928/2012','identifier': {'@type': 'PropertyValue','name': 'EUID','value': 'ROONRC.J40/6928/2012'},
        'foundingDate': '2012',
        'numberOfEmployees': { '@type': 'QuantitativeValue', 'minValue': 5, 'maxValue': 15 },
        'areaServed': [
          { '@type': 'Country', 'name': 'Romania' },
          { '@type': 'Country', 'name': 'Germany' },
          { '@type': 'Country', 'name': 'France' },
          { '@type': 'Country', 'name': 'Italy' },
          { '@type': 'Country', 'name': 'Spain' },
          { '@type': 'Country', 'name': 'Austria' },
          { '@type': 'Country', 'name': 'Belgium' },
          { '@type': 'Country', 'name': 'Netherlands' },
        ],
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount':'46',
          'bestRating': '5',
          'worstRating': '1',
        },
        'hasMap': 'https://maps.app.goo.gl/dvbPRmMwAroCPfSC8',
        'openingHoursSpecification': [
          { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday'], 'opens': '10:00', 'closes': '18:00' },
        ],
        'contactPoint': [
          { '@type': 'ContactPoint', 'telephone': '+40752443435', 'contactType': 'sales', 'areaServed': 'RO', 'availableLanguage': ['Romanian','English','German','French','Spanish','Italian'] },
          { '@type': 'ContactPoint', 'telephone': '+40752443439', 'contactType': 'customer support', 'areaServed': 'EU', 'availableLanguage': ['Romanian','English','German','French'] },
        ],
        'sameAs': [
          'https://www.facebook.com/neofortconstructii',
          'https://www.linkedin.com/company/neofort-biz',
          'https://x.com/NeofortBIZ',
          'https://maps.app.goo.gl/dvbPRmMwAroCPfSC8',
          'https://onrc.ro/index.php/ro/component/onrcservicii/?option=com_onrcservicii',
        ],
        'knowsAbout': ['PVC windows', 'Aluminium windows', 'nZEB buildings', 'Thermal insulation', 'Salamander profiles', 'Alumil systems'],
        'slogan': { 'ro': 'Tâmplărie PVC Salamander și Aluminiu Alumil — 21 ani experiență', 'en': 'Salamander PVC and Alumil Aluminium Windows — 21 years experience' }[locale] || 'Tâmplărie PVC Salamander și Aluminiu Alumil — 21 ani experiență',
      },
      {
        '@type': 'WebPage',
        'url': `${BASE}/${locale}/${SLUGS_DESPRE[locale] || SLUGS_DESPRE.ro}`,
        'name': PAGE_UI[locale]?.h1 || PAGE_UI.ro.h1,
        'description': PAGE_UI[locale]?.sub || PAGE_UI.ro.sub,
        'inLanguage': locale,
        'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Neofort BIZ', 'item': `${BASE}/${locale}` },
          { '@type': 'ListItem', 'position': 2, 'name': PAGE_UI[locale]?.h1 || 'Despre', 'item': `${BASE}/${locale}/${SLUGS_DESPRE[locale] || SLUGS_DESPRE.ro}` },
        ]},
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDespre) }}/>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">{ui.sub}</p>
        </div>
      </div>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="sec-label">{ui.who_label}</span>
              <h2 className="font-condensed text-3xl font-semibold text-primary mb-6">{ui.who_h2}</h2>
              <p className="text-[0.88rem] text-muted leading-relaxed mb-4" dangerouslySetInnerHTML={{__html: ui.who_p1}}/>
              <p className="text-[0.88rem] text-muted leading-relaxed mb-4">{ui.who_p2}</p>
              <p className="text-[0.88rem] text-muted leading-relaxed" dangerouslySetInnerHTML={{__html: ui.who_p3}}/>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {ui.stats.map(([n,l],i)=>(
                i===2 ? (
                  <a key={l} href="https://maps.app.goo.gl/dvbPRmMwAroCPfSC8" target="_blank" rel="noopener noreferrer"
                    className="border border-border p-8 flex flex-col items-center justify-center text-center no-underline">
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.6625rem',color:'#f5a623',lineHeight:1}}>{n}</span>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.6425rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#767676',marginTop:'5px',lineHeight:1.3}}>{l}</span>
                  </a>
                ) : (
                  <div key={l} className="border border-border p-8 flex flex-col justify-center">
                    <div className="font-condensed text-4xl font-semibold text-primary">{n}</div>
                    <div className="text-[0.7rem] tracking-[0.15em] text-muted uppercase mt-2">{l}</div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light border-b border-border">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.values_label}</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-4">
            {ui.values.map((item,i)=>(
              <div key={i} className="bg-white border border-border p-7">
                <h3 className="font-condensed text-[1rem] font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-[0.8rem] text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO BRIDGE ── */}

      {/* ── Secțiune Echipă ─────────────────────────────────────── */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.team_label}</span>
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'1rem',color:'#595959',marginTop:'8px',marginBottom:'36px'}}>{ui.team_sub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM_DESPRE.map((m,i)=>(
              <div key={i} style={{background:'#fff',border:'1px solid #e5e7eb',borderTop:`3px solid ${m.color}`,padding:'24px',display:'flex',flexDirection:'column',gap:'12px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                  <div style={{width:'56px',height:'56px',borderRadius:'50%',background:m.color,color:'#fff',fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'1.1rem',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,overflow:'hidden'}}>
                    <img src={m.photo} alt={m.name} width={56} height={56} loading="lazy" style={{width:'56px',height:'56px',objectFit:'cover'}}/>
                  </div>
                  <div>
                    <div style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'0.9rem',color:'#1a1a1a',lineHeight:1.2}}>{m.name}</div>
                    <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.72rem',color:m.color,letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'2px'}}>{m.role[locale]||m.role.ro}</div>
                  </div>
                </div>
                <p style={{fontFamily:'Barlow,sans-serif',fontSize:'0.78rem',color:'#595959',lineHeight:1.6,margin:0}}>{m.bio[locale]||m.bio.ro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label={CTA_LABELS[locale]?.tag || CTA_LABELS.ro.tag} style={{background:'#111',padding:'0'}}>
        <div className="container" style={{paddingTop:'32px',paddingBottom:'32px',borderTop:'1px solid #1e1e1e'}}>
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#444',marginBottom:'0',textAlign:'center'}}>
            {CTA_LABELS[locale]?.h2a || CTA_LABELS.ro.h2a}{' '}
            <span style={{textDecoration:'underline'}}>{CTA_LABELS[locale]?.h2b || CTA_LABELS.ro.h2b}</span>
            {' '}{CTA_LABELS[locale]?.h2c || CTA_LABELS.ro.h2c}
          </p>
        </div>
      </section>
    </>
  );
}
