import { getTranslations } from 'next-intl/server';
import { Link } from '../../../i18n/navigation';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_SERVICII = {'ro':'servicii', 'en':'services', 'de':'dienstleistungen', 'fr':'services', 'es':'servicios', 'it':'servizi'};

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil', btn:'Cerere Ofertă' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows', btn:'Request Quote' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an', btn:'Angebot anfragen' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil', btn:'Demander un devis' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil', btn:'Pedir presupuesto' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil', btn:'Richiedi preventivo' },
};

const PAGE_UI = {
  ro: { label:'Neofort BIZ', h1:'Servicii', sub:'Consultanță. Măsurători. Transport. Montaj. Service. — Un serviciu complet, de la primul contact până la garanție.', why_label:'De ce să alegi Neofort?', why_h2:'Suntem pe piață de 21 ani cu activitate neîntreruptă', why_desc:'Peste 50% din comenzi vin din recomandări sau de la clienți care revin constant. Implementăm cele mai noi și performante soluții tehnice. Executăm lucrări cu grad mare de complexitate și îmbunătățim permanent raportul calitate–utilitate–preț.', incl_label:'Ce includem', proc_label:'Procedura de lucru', proc_h2:'Pași clari de la contact la livrare' },
  en: { label:'Neofort BIZ', h1:'Services', sub:'Consulting. Measurements. Transport. Installation. After-sales. — A complete service, from first contact to warranty.', why_label:'Why choose Neofort?', why_h2:'21 years of uninterrupted activity on the market', why_desc:'Over 50% of orders come from recommendations or returning clients. We implement the latest and most performant technical solutions, executing complex projects while continuously improving the quality-utility-price ratio.', incl_label:'What we include', proc_label:'Work procedure', proc_h2:'Clear steps from contact to delivery' },
  de: { label:'Neofort BIZ', h1:'Leistungen', sub:'Beratung. Aufmaß. Transport. Einbau. Service. — Komplettleistung vom ersten Kontakt bis zur Garantie.', why_label:'Warum Neofort wählen?', why_h2:'21 Jahre ununterbrochene Marktpräsenz', why_desc:'Über 50% der Aufträge kommen von Empfehlungen oder Stammkunden. Wir setzen die neuesten technischen Lösungen ein und verbessern kontinuierlich das Qualitäts-Nutzen-Preis-Verhältnis.', incl_label:'Unser Leistungsumfang', proc_label:'Arbeitsablauf', proc_h2:'Klare Schritte vom Kontakt bis zur Lieferung' },
  fr: { label:'Neofort BIZ', h1:'Services', sub:'Conseil. Métrés. Transport. Pose. SAV. — Un service complet du premier contact jusqu\'à la garantie.', why_label:'Pourquoi choisir Neofort ?', why_h2:'21 ans de présence continue sur le marché', why_desc:'Plus de 50 % des commandes proviennent de recommandations ou de clients fidèles. Nous mettons en œuvre les solutions techniques les plus récentes et améliorons en permanence le rapport qualité-utilité-prix.', incl_label:'Ce que nous incluons', proc_label:'Procédure de travail', proc_h2:'Étapes claires du contact à la livraison' },
  es: { label:'Neofort BIZ', h1:'Servicios', sub:'Asesoría. Mediciones. Transporte. Instalación. Servicio post-venta. — Un servicio completo desde el primer contacto hasta la garantía.', why_label:'¿Por qué elegir Neofort?', why_h2:'21 años de actividad ininterrumpida en el mercado', why_desc:'Más del 50% de los pedidos provienen de recomendaciones o clientes recurrentes. Implementamos las soluciones técnicas más nuevas y mejoramos continuamente la relación calidad-utilidad-precio.', incl_label:'Qué incluimos', proc_label:'Procedimiento de trabajo', proc_h2:'Pasos claros desde el contacto hasta la entrega' },
  it: { label:'Neofort BIZ', h1:'Servizi', sub:'Consulenza. Rilievi. Trasporto. Posa. Post-vendita. — Un servizio completo dal primo contatto alla garanzia.', why_label:'Perché scegliere Neofort?', why_h2:'21 anni di attività ininterrotta sul mercato', why_desc:'Oltre il 50% degli ordini proviene da raccomandazioni o clienti abituali. Implementiamo le soluzioni tecniche più recenti e miglioriamo continuamente il rapporto qualità-utilità-prezzo.', incl_label:'Cosa includiamo', proc_label:'Procedura di lavoro', proc_h2:'Passi chiari dal contatto alla consegna' },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'servicii' });
  const slug = SLUGS_SERVICII[locale] || SLUGS_SERVICII.ro;
  return {
    title: t('title'),
    description: t('description'),
    keywords: locale === 'ro' ? 'servicii montaj tamplarie PVC aluminiu, masuratori ferestre Bucuresti, transport Europa' : locale === 'en' ? 'PVC aluminium window installation services, window measurement Bucharest, EU transport' : locale === 'de' ? 'PVC Aluminiumfenster Montage, Fensteraufmaß Bukarest, Transport Europa' : locale === 'fr' ? 'services pose fenêtres PVC aluminium, métrage Bucarest, transport Europe' : locale === 'es' ? 'servicios instalación carpintería PVC aluminio, medición Bucarest, transporte Europa' : 'servizi installazione infissi PVC alluminio, rilievo Bucarest, trasporto Europa',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: {
        'ro': `${BASE}/ro/${SLUGS_SERVICII.ro}`,
        'en': `${BASE}/en/${SLUGS_SERVICII.en}`,
        'de': `${BASE}/de/${SLUGS_SERVICII.de}`,
        'fr': `${BASE}/fr/${SLUGS_SERVICII.fr}`,
        'es': `${BASE}/es/${SLUGS_SERVICII.es}`,
        'it': `${BASE}/it/${SLUGS_SERVICII.it}`,
        'x-default': `${BASE}/ro/${SLUGS_SERVICII.ro}`,
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

const SERVICII = [
  {
    id:'01', slug:'consultanta', color:'#4a7c59',
    title:'Consultanță tehnică',
    short:'Analiză personalizată a nevoilor și recomandare soluție optimă.',
    desc:'Specialiștii noștri analizează cerințele specifice ale fiecărui proiect și recomandă cea mai potrivită soluție de tâmplărie — profil, geam, accesorii, culori, sisteme de deschidere. Consultanța este inclusă în procesul de ofertare.',
    specs:[
      ['Disponibilitate','Luni – Vineri, 08:00 – 18:00'],
      ['Canal','Telefon · E-mail · WhatsApp'],
      ['Limbă','RO · EN · DE · FR · ES · IT'],
      ['Durată','30 – 60 min per proiect'],
    ],
  },
  {
    id:'02', slug:'masuratori', color:'#2d5a8e',
    title:'Măsurători',
    short:'Măsurători la față de tencuială sau la față de glaf, cu protocol scris.',
    desc:'Echipa noastră realizează măsurătorile necesare pentru fabricarea exactă a tâmplăriei. Protocoalele de măsurătoare sunt transmise în scris și includ detalii despre sistemul de montaj, izolarea perimetrală și accesorii.',
    specs:[
      ['Tip','La față de tencuială / glaf'],
      ['Documentație','Protocol scris inclus'],
      ['Zonă','București, Ilfov + împrejurimi'],
      ['Programare','Telefon +40 758 990 048'],
    ],
  },
  {
    id:'03', slug:'transport', color:'#e8721c',
    title:'Transport',
    short:'Livrare internă și internațională în toată Comunitatea Europeană.',
    desc:'Livrăm produsele noastre în toată Comunitatea Europeană rapid și în siguranță. Asigurăm ambalarea și paletizarea profesională. Toate transporturile beneficiază de asigurare internațională pe durata tranzitului.',
    specs:[
      ['Acoperire','România + toată UE'],
      ['Ambalare','Profesională, antișoc'],
      ['Asigurare','Internațională inclus'],
      ['Termen','2–4 săptămâni de la contract'],
    ],
  },
  {
    id:'04', slug:'montaj', color:'#4a7c59',
    title:'Montaj profesional',
    short:'Echipe specializate cu experiență de peste 21 ani. Garanție completă.',
    desc:'Executăm montaje cu profesioniști cu vastă experiență în domeniu. Garantăm calitatea montajelor de tâmplărie la orice nivel de complexitate. Montajul include izolarea perimetrală cu bandă precomprimată, precadre și folii antivapori.',
    specs:[
      ['Experiență','20+ ani echipe specializate'],
      ['Izolare','Bandă precomprimată · Precadre · Folii'],
      ['Garanție','Completă pe produs și manoperă'],
      ['Zona','București · Ilfov · național'],
    ],
  },
  {
    id:'05', slug:'service', color:'#2d5a8e',
    title:'Service post-vânzare',
    short:'Intervenții rapide, reglaje și remedieri. Suport tehnic continuu.',
    desc:'Asigurăm service post-vânzare rapid și eficient. Echipa de service intervine pentru reglaje de feronerie, remedieri și înlocuiri de componente. Contactul se face direct la numărul de service dedicat.',
    specs:[
      ['Contact service','+40 752 443 432'],
      ['Reglaje','Feronerie, etanșeizare'],
      ['Intervenție','În limita zonei de acoperire'],
      ['Garanție','Confirmată prin certificat'],
    ],
  },
];

export default async function ServiciiPage({ params }) {
  const { locale } = await params;
  const ui = PAGE_UI[locale] || PAGE_UI.ro;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': locale === 'ro' ? 'Servicii Montaj Tâmplărie PVC și Aluminiu' : locale === 'en' ? 'PVC and Aluminium Window Installation Services' : locale === 'de' ? 'PVC und Aluminium Fenstermontageservice' : locale === 'fr' ? 'Services de pose de menuiseries PVC et aluminium' : locale === 'es' ? 'Servicios de instalación de carpintería PVC y aluminio' : 'Servizi di installazione infissi PVC e alluminio',
    'provider': {
      '@type': 'LocalBusiness',
      '@id': 'https://www.neofort-biz.ro/#localbusiness',
      'name': 'Neofort BIZ',
      'url': 'https://www.neofort-biz.ro',
      'telephone': '+40752443435',
      'address': { '@type': 'PostalAddress', 'addressLocality': 'București', 'addressCountry': 'RO' }
    },
    'areaServed': { '@type': 'Place', 'name': 'Europe' },
    'serviceType': locale === 'ro' ? 'Montaj tâmplărie PVC și aluminiu' : 'PVC and aluminium window installation',
  };

  const howtoSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': locale === 'ro' ? 'Cum comandați tâmplărie PVC sau aluminiu de la Neofort BIZ'
          : locale === 'en' ? 'How to order PVC or aluminium windows from Neofort BIZ'
          : locale === 'de' ? 'Wie bestellen Sie Fenster bei Neofort BIZ'
          : locale === 'fr' ? 'Comment commander des fenêtres chez Neofort BIZ'
          : locale === 'es' ? 'Cómo encargar ventanas a Neofort BIZ'
          : 'Come ordinare infissi da Neofort BIZ',
    'totalTime': 'P28D',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': locale === 'ro' ? 'Elaborare ofertă' : locale === 'en' ? 'Quote preparation' : locale === 'de' ? 'Angebotserstellung' : locale === 'fr' ? 'Élaboration devis' : locale === 'es' ? 'Elaboración presupuesto' : 'Elaborazione preventivo',
        'text': locale === 'ro' ? 'Transmiteți cererea prin formularul de contact, e-mail sau WhatsApp +40752443435. Răspundem în maxim 2 zile lucrătoare.'
              : 'Send your request via contact form, email or WhatsApp +40752443435. We respond within 2 business days.',
        'url': 'https://www.neofort-biz.ro/' + locale + '/contact',
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': locale === 'ro' ? 'Consultare & Măsurătoare' : locale === 'en' ? 'Consultation & Measurement' : locale === 'de' ? 'Beratung & Aufmaß' : locale === 'fr' ? 'Conseil & Métrage' : locale === 'es' ? 'Consulta & Medición' : 'Consulenza & Rilievo',
        'text': locale === 'ro' ? 'Stabilim configurația, tipul de profil, culoare, geam și accesorii. Programăm măsurătorile și elaborăm oferta finală.'
              : 'We define configuration, profile type, colour, glass and accessories. We schedule measurements and finalise the offer.',
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': locale === 'ro' ? 'Transport & Montaj' : locale === 'en' ? 'Transport & Installation' : locale === 'de' ? 'Transport & Montage' : locale === 'fr' ? 'Transport & Pose' : locale === 'es' ? 'Transporte & Instalación' : 'Trasporto & Posa',
        'text': locale === 'ro' ? 'Fabricare 2–4 săptămâni, transport asigurat în toată UE, montaj profesional cu izolare perimetrală și certificat de garanție.'
              : 'Manufacturing 2–4 weeks, guaranteed EU transport, professional installation with perimeter insulation and warranty certificate.',
      },
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }}/>
      {/* Page header */}
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">{ui.sub}</p>
        </div>
      </div>

      {/* De ce Neofort — band */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="sec-label">{ui.why_label}</span>
              <h2 className="font-condensed text-3xl font-semibold text-primary mb-4">{ui.why_h2}</h2>
              <p className="text-[0.88rem] text-muted leading-relaxed">{ui.why_desc}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 border border-border">
              {[['EXPERTIZĂ','Consultanță'],['PRECIZIE','Măsurători'],['RAPIDITATE','Transport'],['CALITATE','Montaj'],['PROMPTITUDINE','Service'],['GARANȚIE','Completă']].map(([top,bot],i)=>(
                <div key={i} className={`p-5 text-center ${i%3!==2?'border-r border-border':''} ${i<3?'border-b border-border':''}`}>
                  <div className="font-condensed text-[0.65rem] tracking-[0.18em] font-semibold text-primary mb-1">{top}</div>
                  <div className="text-[0.72rem] text-muted">{bot}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cards servicii */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.incl_label}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {SERVICII.map(s=>(
              <div key={s.id} className="prod-card group">
                {/* color bar top */}
                <div className="h-1 w-full" style={{background: s.color}}/>
                <div className="card-body">
                  <div className="text-[0.62rem] tracking-[0.2em] uppercase font-semibold font-condensed mb-3" style={{color: s.color}}>
                    {s.id}
                  </div>
                  <h3 className="font-condensed text-[1.3rem] font-semibold text-primary mb-2">{s.title}</h3>
                  <p className="text-[0.8rem] text-muted mb-4 leading-relaxed">{s.short}</p>
                  <ul className="card-specs">
                    {s.specs.map(([k,v])=>(
                      <li key={k}><strong>{k}:</strong> {v}</li>
                    ))}
                  </ul>
                  <p className="text-[0.8rem] text-muted leading-relaxed mb-5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedura de lucru */}
      <section className="py-20 bg-light border-b border-border">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.proc_label}</span>
          <h2 className="font-condensed text-3xl font-semibold text-primary mb-12">{ui.proc_h2}</h2>
          <div className="space-y-0 border border-border">
            {[
              { n:'1', title:'Contact inițial',           desc:'Examinați detaliile produselor noastre sau trimiteți o solicitare prin formularul de contact, e-mail sau telefon & WhatsApp.' },
              { n:'2', title:'Consultare personalizată',  desc:'Un reprezentant vă contactează pentru a stabili, telefonic sau prin e-mail, cea mai potrivită soluție de tâmplărie în funcție de nevoile dvs.' },
              { n:'3', title:'Cerere de ofertă',          desc:'Transmiteți cererea cu schița tabloului de tâmplărie: tip profil, culoare, tip geam termoizolator, accesorii.' },
              { n:'4', title:'Elaborare ofertă',          desc:'Pe baza informațiilor complete, elaborăm oferta și vă comunicăm prețul total pentru marfă și serviciile comandate.' },
              { n:'5', title:'Contract & avans',          desc:'Contractul se semnează la sediul nostru sau online. Se emite factura de avans (fără TVA pentru exporturi EUID intracomunitar).' },
              { n:'6', title:'Fabricare & livrare',       desc:'Comanda este fabricată și livrată în 2–4 săptămâni. Toate transporturile beneficiază de asigurare internațională.' },
              { n:'7', title:'Finalizare',                desc:'Se emit: factura pentru rest de plată, certificatul de garanție și certificările pentru tâmplărie cu geam termoizolator.' },
            ].map((step,i)=>(
              <div key={i} className={`flex gap-6 p-6 bg-white items-start ${i<6?'border-b border-border':''}`}>
                <div className="font-condensed text-[0.65rem] tracking-[0.15em] font-semibold text-muted shrink-0 w-5 pt-0.5">{step.n}.</div>
                <div>
                  <h3 className="font-condensed text-[1rem] font-semibold text-primary mb-1">{step.title}</h3>
                  <p className="text-[0.82rem] text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
