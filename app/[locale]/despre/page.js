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
  ro: { label:'Neofort BIZ', h1:'Despre noi', sub:'21 ani de experiență neîntreruptă în tâmplărie PVC și aluminiu.', who_label:'Cine suntem', who_h2:'Specialiști în tâmplărie PVC Salamander și aluminiu Alumil', who_p1:'Neofort BIZ este unul dintre furnizorii de referință de tâmplărie PVC și aluminiu din România, cu o activitate neîntreruptă de 21 ani. Furnizăm tâmplărie din gamele premium ale mărcilor <strong>Salamander</strong> și <strong>Alumil</strong>, executată pe linii de producție automatizate.', who_p2:'Produsele și serviciile noastre au ajuns în toată UE și sunt recunoscute pentru calitatea lor ireproșabilă și prețurile competitive. Cu Neofort, aveți garanția unui raport excelent între calitate, utilitate și preț.', who_p3:'Marca Neofort este înregistrată la O.S.I.M. sub nr. <strong>M 2014 05130</strong>.', values_label:'Valorile noastre', stats:[['21+','Ani pe piață'],['50%+','Clienți fideli'],['UE','Livrare europeană'],['6','Limbi suport']], values:[{title:'Prețuri competitive',desc:'Lucrăm permanent la raportul calitate–preț–utilitate.'},{title:'Consultanță inovatoare',desc:'Cele mai noi și performante soluții tehnice din domeniu.'},{title:'Calitate garantată',desc:'Garanție completă pe produse și montaj, fără compromisuri.'},{title:'Experiență dovedită',desc:'21 ani de activitate neîntreruptă pe piața tâmplăriei premium.'}] },
  en: { label:'Neofort BIZ', h1:'About us', sub:'21 years of uninterrupted experience in PVC and aluminium windows.', who_label:'Who we are', who_h2:'Specialists in Salamander PVC and Alumil aluminium windows', who_p1:'Neofort BIZ is one of the leading suppliers of PVC and aluminium windows in Romania, with 21 years of uninterrupted activity. We supply windows from the premium ranges of <strong>Salamander</strong> and <strong>Alumil</strong>, manufactured on automated production lines.', who_p2:'Our products and services have reached customers across the EU and are recognised for their impeccable quality and competitive prices. With Neofort, you have the guarantee of an excellent quality-utility-price ratio.', who_p3:'The Neofort trademark is registered with O.S.I.M. under no. <strong>M 2014 05130</strong>.', values_label:'Our values', stats:[['21+','Years on market'],['50%+','Loyal clients'],['EU','European delivery'],['6','Languages support']], values:[{title:'Competitive prices',desc:'We continually work on the quality-price-utility ratio.'},{title:'Innovative consulting',desc:'The latest and most performant technical solutions available.'},{title:'Guaranteed quality',desc:'Full warranty on products and installation, no compromises.'},{title:'Proven experience',desc:'21 years of uninterrupted activity in premium window supply.'}] },
  de: { label:'Neofort BIZ', h1:'Über uns', sub:'21 Jahre ununterbrochene Erfahrung in PVC- und Aluminiumfenstern.', who_label:'Wer wir sind', who_h2:'Spezialisten für Salamander PVC- und Alumil Aluminiumfenster', who_p1:'Neofort BIZ ist einer der führenden Lieferanten von PVC- und Aluminiumfenstern in Rumänien mit 21 Jahren ununterbrochener Tätigkeit. Wir liefern Fenster aus den Premium-Sortimenten von <strong>Salamander</strong> und <strong>Alumil</strong>, gefertigt auf automatisierten Produktionslinien.', who_p2:'Unsere Produkte und Dienstleistungen haben Kunden in der gesamten EU erreicht und sind für ihre einwandfreie Qualität und wettbewerbsfähigen Preise bekannt.', who_p3:'Die Marke Neofort ist beim O.S.I.M. unter Nr. <strong>M 2014 05130</strong> eingetragen.', values_label:'Unsere Werte', stats:[['21+','Jahre Marktpräsenz'],['50%+','Treue Kunden'],['EU','Europaweite Lieferung'],['6','Sprachunterstützung']], values:[{title:'Wettbewerbsfähige Preise',desc:'Wir arbeiten kontinuierlich am Qualitäts-Preis-Nutzen-Verhältnis.'},{title:'Innovative Beratung',desc:'Die neuesten und leistungsfähigsten technischen Lösungen.'},{title:'Garantierte Qualität',desc:'Vollständige Garantie auf Produkte und Einbau.'},{title:'Nachgewiesene Erfahrung',desc:'21 Jahre ununterbrochene Tätigkeit im Premium-Fensterbereich.'}] },
  fr: { label:'Neofort BIZ', h1:'À propos', sub:'21 ans d\'expérience ininterrompue dans les menuiseries PVC et aluminium.', who_label:'Qui nous sommes', who_h2:'Spécialistes en menuiserie PVC Salamander et aluminium Alumil', who_p1:'Neofort BIZ est l\'un des principaux fournisseurs de menuiseries PVC et aluminium en Roumanie, avec 21 ans d\'activité ininterrompue. Nous fournissons des menuiseries issues des gammes premium de <strong>Salamander</strong> et <strong>Alumil</strong>, fabriquées sur lignes de production automatisées.', who_p2:'Nos produits et services ont atteint toute l\'UE et sont reconnus pour leur qualité irréprochable et leurs prix compétitifs.', who_p3:'La marque Neofort est déposée à l\'O.S.I.M. sous le n° <strong>M 2014 05130</strong>.', values_label:'Nos valeurs', stats:[['21+','Ans sur le marché'],['50%+','Clients fidèles'],['UE','Livraison européenne'],['6','Langues de support']], values:[{title:'Prix compétitifs',desc:'Nous travaillons en permanence sur le rapport qualité-prix-utilité.'},{title:'Conseil innovant',desc:'Les solutions techniques les plus récentes et performantes.'},{title:'Qualité garantie',desc:'Garantie complète sur les produits et la pose.'},{title:'Expérience éprouvée',desc:'21 ans d\'activité ininterrompue dans la menuiserie premium.'}] },
  es: { label:'Neofort BIZ', h1:'Sobre nosotros', sub:'21 años de experiencia ininterrumpida en carpintería PVC y aluminio.', who_label:'Quiénes somos', who_h2:'Especialistas en carpintería PVC Salamander y aluminio Alumil', who_p1:'Neofort BIZ es uno de los principales proveedores de carpintería PVC y aluminio en Rumanía, con 21 años de actividad ininterrumpida. Suministramos carpintería de las gamas premium de <strong>Salamander</strong> y <strong>Alumil</strong>, fabricada en líneas de producción automatizadas.', who_p2:'Nuestros productos y servicios han llegado a toda la UE y son reconocidos por su calidad impecable y precios competitivos.', who_p3:'La marca Neofort está registrada en la O.S.I.M. bajo el n.° <strong>M 2014 05130</strong>.', values_label:'Nuestros valores', stats:[['21+','Años en el mercado'],['50%+','Clientes fieles'],['UE','Entrega europea'],['6','Idiomas de soporte']], values:[{title:'Precios competitivos',desc:'Trabajamos continuamente en la relación calidad-precio-utilidad.'},{title:'Consultoría innovadora',desc:'Las soluciones técnicas más nuevas y eficientes.'},{title:'Calidad garantizada',desc:'Garantía completa en productos e instalación.'},{title:'Experiencia probada',desc:'21 años de actividad ininterrumpida en carpintería premium.'}] },
  it: { label:'Neofort BIZ', h1:'Chi siamo', sub:'21 anni di esperienza ininterrotta in infissi PVC e alluminio.', who_label:'Chi siamo', who_h2:'Specialisti in infissi PVC Salamander e alluminio Alumil', who_p1:'Neofort BIZ è uno dei principali fornitori di infissi PVC e alluminio in Romania, con 21 anni di attività ininterrotta. Forniamo infissi dalle gamme premium di <strong>Salamander</strong> e <strong>Alumil</strong>, prodotti su linee di produzione automatizzate.', who_p2:'I nostri prodotti e servizi hanno raggiunto tutta l\'UE e sono riconosciuti per la loro qualità irreprensibile e i prezzi competitivi.', who_p3:'Il marchio Neofort è registrato presso l\'O.S.I.M. con n. <strong>M 2014 05130</strong>.', values_label:'I nostri valori', stats:[['21+','Anni sul mercato'],['50%+','Clienti fedeli'],['UE','Consegna europea'],['6','Lingue di supporto']], values:[{title:'Prezzi competitivi',desc:'Lavoriamo continuamente sul rapporto qualità-prezzo-utilità.'},{title:'Consulenza innovativa',desc:'Le soluzioni tecniche più recenti e performanti.'},{title:'Qualità garantita',desc:'Garanzia completa su prodotti e posa.'},{title:'Esperienza comprovata',desc:'21 anni di attività ininterrotta nella fornitura di infissi premium.'}] },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'despre' });
  const slug = SLUGS_DESPRE[locale] || SLUGS_DESPRE.ro;
  return {
    title: t('title'),
    description: t('description'),
    keywords: locale === 'ro' ? 'despre Neofort BIZ, producator tamplarie PVC aluminiu Bucuresti, 21 ani experienta' : locale === 'en' ? 'about Neofort BIZ, PVC aluminium window manufacturer Bucharest, 21 years experience' : locale === 'de' ? 'über Neofort BIZ, PVC Aluminiumfenster Hersteller Bukarest, 21 Jahre Erfahrung' : locale === 'fr' ? 'à propos Neofort BIZ, fabricant menuiseries PVC aluminium Bucarest, 21 ans' : locale === 'es' ? 'sobre Neofort BIZ, fabricante carpintería PVC aluminio Bucarest, 21 años' : 'chi siamo Neofort BIZ, produttore infissi PVC alluminio Bucarest, 21 anni',
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
      images: [{ url: `${BASE}/og-neofort.jpg`, width: 1200, height: 630 }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: t('title'), description: t('description'), images:[`${BASE}/og-neofort.jpg`] },
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
        'name': 'Neofort BIZ',
        'url': BASE,
        'logo': { '@type': 'ImageObject', 'url': `${BASE}/Neofort.avif` },
        'address': { '@type': 'PostalAddress', 'streetAddress': 'Str. Theodor Aman Pictor 11', 'addressLocality': 'București', 'postalCode': '010776', 'addressCountry': 'RO' },
        'telephone': '+40215280661',
        'email': 'oferte@neofort-biz.ro',
        'foundingDate': '2004',
        'numberOfEmployees': { '@type': 'QuantitativeValue', 'value': 10 },
        'areaServed': ['RO', 'DE', 'AT', 'IT', 'FR', 'ES', 'BE', 'NL'],
        'sameAs': ['https://www.facebook.com/neofortconstructii','https://www.linkedin.com/company/neofort-biz','https://x.com/NeofortBIZ'],
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
              {ui.stats.map(([n,l])=>(
                <div key={l} className="border border-border p-8 flex flex-col justify-center">
                  <div className="font-condensed text-4xl font-semibold text-primary">{n}</div>
                  <div className="text-[0.7rem] tracking-[0.15em] text-muted uppercase mt-2">{l}</div>
                </div>
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
