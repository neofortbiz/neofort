import { getTranslations } from 'next-intl/server';
import { Link } from '../../../i18n/navigation';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_CONTACT = {'ro':'contact','en':'contact','de':'kontakt','fr':'contact','es':'contacto','it':'contatti'};

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil', btn:'Cerere Ofertă' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows', btn:'Request Quote' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an', btn:'Angebot anfragen' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil', btn:'Demander un devis' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil', btn:'Pedir presupuesto' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil', btn:'Richiedi preventivo' },
};

// ─── TRADUCERI COMPLETE ────────────────────────────────────────────────────
const UI = {
  ro: {
    h1: 'Contactați echipa noastră',
    sub: 'Specialiști în tâmplărie PVC Salamander și aluminiu Alumil — răspundem în maxim 2 zile lucrătoare.',
    team_label: 'Echipa Neofort BIZ',
    team_title: 'Contactați echipa noastră',
    map_label: 'Sediu & Locație',
    map_title: 'Contact',
    address_label: 'Adresă',
    address: 'Str. Theodor Aman Pictor 11\nSector 1, București 010776\nRomânia',
    maps_btn: 'Deschide în Google Maps →',
    schedule_label: 'Program de lucru',
    schedule_days: 'Luni – Vineri',
    schedule_hours: '10:00 – 18:00',
    schedule_weekend: 'Sâmbătă – Duminică: Închis',
    dept_office: 'Office',
    dept_quotes: 'Oferte',
    dept_export: 'Export',
    dept_tech: 'Tehnic',
    dept_service: 'Service',
    dept_schedule: 'Programări',
    email_section: 'E-mail',
    whatsapp: 'WhatsApp',
  },
  en: {
    h1: 'Contact our team',
    sub: 'Specialists in Salamander PVC and Alumil aluminium windows — we reply within 2 business days.',
    team_label: 'Neofort BIZ Team',
    team_title: 'Contact our team',
    map_label: 'Office & Location',
    map_title: 'Contact',
    address_label: 'Address',
    address: 'Str. Theodor Aman Pictor 11\nSector 1, Bucharest 010776\nRomania',
    maps_btn: 'Open in Google Maps →',
    schedule_label: 'Opening hours',
    schedule_days: 'Monday – Friday',
    schedule_hours: '10:00 – 18:00',
    schedule_weekend: 'Saturday – Sunday: Closed',
    dept_office: 'Office',
    dept_quotes: 'Quotes',
    dept_export: 'Export',
    dept_tech: 'Technical',
    dept_service: 'Service',
    dept_schedule: 'Appointments',
    email_section: 'E-mail',
    whatsapp: 'WhatsApp',
  },
  de: {
    h1: 'Kontaktieren Sie unser Team',
    sub: 'Spezialisten für Salamander Kunststoff- und Alumil Aluminiumfenster — wir antworten innerhalb von 2 Werktagen.',
    team_label: 'Team Neofort BIZ',
    team_title: 'Kontaktieren Sie unser Team',
    map_label: 'Büro & Standort',
    map_title: 'Contact',
    address_label: 'Adresse',
    address: 'Str. Theodor Aman Pictor 11\nSektor 1, Bukarest 010776\nRumänien',
    maps_btn: 'In Google Maps öffnen →',
    schedule_label: 'Öffnungszeiten',
    schedule_days: 'Montag – Freitag',
    schedule_hours: '10:00 – 18:00',
    schedule_weekend: 'Samstag – Sonntag: Geschlossen',
    dept_office: 'Büro',
    dept_quotes: 'Angebote',
    dept_export: 'Export',
    dept_tech: 'Technik',
    dept_service: 'Service',
    dept_schedule: 'Termine',
    email_section: 'E-Mail',
    whatsapp: 'WhatsApp',
  },
  fr: {
    h1: 'Contactez notre équipe',
    sub: 'Spécialistes en menuiserie PVC Salamander et aluminium Alumil — nous répondons sous 2 jours ouvrables.',
    team_label: 'Équipe Neofort BIZ',
    team_title: 'Contactez notre équipe',
    map_label: 'Bureau & Localisation',
    map_title: 'Contact',
    address_label: 'Adresse',
    address: 'Str. Theodor Aman Pictor 11\nSecteur 1, Bucarest 010776\nRoumanie',
    maps_btn: 'Ouvrir dans Google Maps →',
    schedule_label: 'Horaires d\'ouverture',
    schedule_days: 'Lundi – Vendredi',
    schedule_hours: '10:00 – 18:00',
    schedule_weekend: 'Samedi – Dimanche : Fermé',
    dept_office: 'Bureau',
    dept_quotes: 'Devis',
    dept_export: 'Export',
    dept_tech: 'Technique',
    dept_service: 'Service',
    dept_schedule: 'Rendez-vous',
    email_section: 'E-mail',
    whatsapp: 'WhatsApp',
  },
  es: {
    h1: 'Contacte a nuestro equipo',
    sub: 'Especialistas en carpintería PVC Salamander y aluminio Alumil — respondemos en 2 días hábiles.',
    team_label: 'Equipo Neofort BIZ',
    team_title: 'Contacte a nuestro equipo',
    map_label: 'Oficina & Ubicación',
    map_title: 'Contact',
    address_label: 'Dirección',
    address: 'Str. Theodor Aman Pictor 11\nSector 1, Bucarest 010776\nRumanía',
    maps_btn: 'Abrir en Google Maps →',
    schedule_label: 'Horario de atención',
    schedule_days: 'Lunes – Viernes',
    schedule_hours: '10:00 – 18:00',
    schedule_weekend: 'Sábado – Domingo: Cerrado',
    dept_office: 'Oficina',
    dept_quotes: 'Presupuestos',
    dept_export: 'Exportación',
    dept_tech: 'Técnico',
    dept_service: 'Servicio',
    dept_schedule: 'Citas',
    email_section: 'E-mail',
    whatsapp: 'WhatsApp',
  },
  it: {
    h1: 'Contattate il nostro team',
    sub: 'Specialisti in infissi PVC Salamander e alluminio Alumil — rispondiamo entro 2 giorni lavorativi.',
    team_label: 'Team Neofort BIZ',
    team_title: 'Contattate il nostro team',
    map_label: 'Ufficio & Posizione',
    map_title: 'Contact',
    address_label: 'Indirizzo',
    address: 'Str. Theodor Aman Pictor 11\nSettore 1, Bucarest 010776\nRomania',
    maps_btn: 'Apri in Google Maps →',
    schedule_label: 'Orari di apertura',
    schedule_days: 'Lunedì – Venerdì',
    schedule_hours: '10:00 – 18:00',
    schedule_weekend: 'Sabato – Domenica: Chiuso',
    dept_office: 'Ufficio',
    dept_quotes: 'Preventivi',
    dept_export: 'Esportazione',
    dept_tech: 'Tecnico',
    dept_service: 'Servizio',
    dept_schedule: 'Appuntamenti',
    email_section: 'E-mail',
    whatsapp: 'WhatsApp',
  },
};

// ─── DATE ECHIPĂ ──────────────────────────────────────────────────────────
const TEAM = [
  {
    name: 'George PALANCEAN',
    photo: '/team/george-palancean.avif',
    role: { ro:'Manager Vânzări', en:'Sales Manager', de:'Vertriebsleiter', fr:'Responsable des ventes', es:'Director de ventas', it:'Responsabile vendite' },
    phone: '+40 752 443 430',
    href: 'tel:+40752443430',
    email: 'oferte@neofort-biz.ro',
    initials: 'GP',
    color: '#2d5a8e',
  },
  {
    name: 'Olga OPREA',
    photo: '/team/olga-oprea.avif',
    role: { ro:'Reprezentant Vânzări', en:'Sales Representative', de:'Vertriebsmitarbeiterin', fr:'Représentante commerciale', es:'Representante de ventas', it:'Rappresentante vendite' },
    phone: '+40 752 443 435',
    href: 'tel:+40752443435',
    email: 'oferte@neofort-biz.ro',
    initials: 'OO',
    color: '#4a7c59',
  },
  {
    name: 'Cristian CIOROIU',
    photo: '/team/cristian-cioroiu.avif',
    role: { ro:'Reprezentant Export', en:'Export Representative', de:'Exportmitarbeiter', fr:'Représentant export', es:'Representante de exportación', it:'Rappresentante export' },
    phone: '+40 752 443 439',
    href: 'tel:+40752443439',
    email: 'comenzi@neofort-biz.ro',
    initials: 'CC',
    color: '#e8721c',
  },
  {
    name: 'Mihai DANALACHE',
    photo: '/team/mihai-danalache.avif',
    role: { ro:'Consultant Tehnic', en:'Technical Consultant', de:'Technischer Berater', fr:'Consultant technique', es:'Asesor técnico', it:'Consulente tecnico' },
    phone: '+40 752 443 431',
    href: 'tel:+40752443431',
    email: 'service@neofort-biz.ro',
    initials: 'MD',
    color: '#555',
  },
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  const slug = SLUGS_CONTACT[locale] || SLUGS_CONTACT.ro;
  return {
    title: t('title'),
    description: t('description'),
    keywords: locale === 'ro' ? 'contact Neofort BIZ, oferta tamplarie PVC aluminiu Bucuresti, cerere oferta ferestre' : locale === 'en' ? 'contact Neofort BIZ, PVC aluminium window quote Bucharest, window quote request' : locale === 'de' ? 'Kontakt Neofort BIZ, PVC Aluminiumfenster Angebot Bukarest' : locale === 'fr' ? 'contact Neofort BIZ, devis menuiserie PVC aluminium Bucarest' : locale === 'es' ? 'contacto Neofort BIZ, presupuesto carpintería PVC aluminio Bucarest' : 'contatto Neofort BIZ, preventivo infissi PVC alluminio Bucarest',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}/`,
      languages: {
        'ro': `${BASE}/ro/${SLUGS_CONTACT.ro}/`,
        'en': `${BASE}/en/${SLUGS_CONTACT.en}/`,
        'de': `${BASE}/de/${SLUGS_CONTACT.de}/`,
        'fr': `${BASE}/fr/${SLUGS_CONTACT.fr}/`,
        'es': `${BASE}/es/${SLUGS_CONTACT.es}/`,
        'it': `${BASE}/it/${SLUGS_CONTACT.it}/`,
        'x-default': `${BASE}/ro/${SLUGS_CONTACT.ro}/`,
      },
    },
    openGraph: {
      type: 'website',
      url: `${BASE}/${locale}/${slug}/`,
      siteName: 'Neofort BIZ',
      title: t('title'),
      description: t('description'),
      images: [{ url:`${BASE}/og/Contact_Neofort.jpg`, width:1200, height:630, alt: locale==='ro' ? 'Contact Neofort BIZ — solicitați ofertă tâmplărie PVC și aluminiu, București' : locale==='en' ? 'Contact Neofort BIZ — request quote for PVC and aluminium windows, Bucharest' : locale==='de' ? 'Kontakt Neofort BIZ — Angebot PVC- und Aluminiumfenster, Bukarest' : locale==='fr' ? 'Contact Neofort BIZ — demandez devis menuiseries PVC et aluminium, Bucarest' : locale==='es' ? 'Contacto Neofort BIZ — solicite presupuesto carpintería PVC y aluminio, Bucarest' : 'Contatti Neofort BIZ — preventivo infissi PVC e alluminio, Bucarest', type:'image/jpeg' }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: t('title'), description: t('description'), images:[`${BASE}/og/Contact_Neofort.jpg`] },
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;

  // Schema.org ContactPage + LocalBusiness
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${BASE}/${locale}/${SLUGS_CONTACT[locale]}/#contactpage`,
        "url": `${BASE}/${locale}/${SLUGS_CONTACT[locale]}/`,
        "name": ui.h1,
        "inLanguage": locale,
        "isPartOf": { "@id": `${BASE}/#website` },
      },
      {
        "@type": ["LocalBusiness","HomeAndConstructionBusiness"],
        "@id": `${BASE}/#localbusiness`,
        "name": "NEOFORT BIZ SRL",
        "alternateName": "Neofort BIZ",
        "url": BASE,
        "telephone": ["+40215280661","+40752443435","+40752443439"],
        "email": "oferte@neofort-biz.ro",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Strada Theodor Aman Pictor 11",
          "addressLocality": "București",
          "addressRegion": "Sector 1",
          "postalCode": "010776",
          "addressCountry": "RO",
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 44.4429398, "longitude": 26.0859381 },
        "hasMap": "https://maps.app.goo.gl/YcaANuqcmnzy14i1A",
        "openingHoursSpecification": [{
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "10:00",
          "closes": "18:00",
        }],
        "contactPoint": [
          { "@type":"ContactPoint","telephone":"+40752443435","contactType":"sales","availableLanguage":["Romanian","English","German","French","Spanish","Italian"] },
          { "@type":"ContactPoint","telephone":"+40752443439","contactType":"sales","name":"Export" },
          { "@type":"ContactPoint","telephone":"+40752443432","contactType":"customer service","name":"Service" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>

      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.team_label}</span>
          <h1 className="font-condensed text-2xl md:text-3xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">{ui.sub}</p>
        </div>
      </div>

      {/* ── ECHIPĂ ── */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {TEAM.map(m => (
              <div key={m.name} className="flex flex-col items-center text-center border border-border p-4 md:p-6">
                {/* Avatar rotund — 90px mobil, 80px desktop */}
                <div className="w-[90px] h-[90px] md:w-[80px] md:h-[80px]" style={{
                  borderRadius:'50%',
                  marginBottom:'14px', flexShrink:0,
                  overflow:'hidden',
                  background: m.color,
                  border:'1px solid #e8e8e4',
                  boxSizing:'border-box',
                }}>
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      width={432}
                      height={434}
                      style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }}
                    />
                  ) : (
                    <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <span style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 600, fontSize: '1.5rem', letterSpacing: '.06em', color: '#fff',
                      }}>{m.initials}</span>
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="flex flex-col flex-1 w-full">
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(0.7rem, 2.5vw, 0.88rem)',
                    lineHeight: 1.2,
                    color: '#1a1a1a',
                    marginBottom: '4px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>{m.name}</h3>
                  <p className="text-[0.68rem] text-muted mb-4 leading-snug flex-1">{m.role[locale] || m.role.ro}</p>
                  {/* Butoane */}
                  <a href={m.href}
                    className="w-full text-center font-condensed font-semibold tracking-[0.04em] uppercase text-primary border border-border px-1 py-2 mb-2 hover:border-primary hover:bg-primary hover:text-white transition-all duration-200 block"
                    style={{ fontSize:'clamp(0.48rem, 1.6vw, 0.6rem)', lineHeight:1.3 }}>
                    {m.phone}
                  </a>
                  <a href={`mailto:${m.email}`}
                    className="w-full text-center font-condensed font-semibold text-[0.6rem] tracking-[0.12em] uppercase text-muted border border-border px-2 py-2 hover:border-primary hover:text-primary transition-all duration-200 block">
                    E-mail
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HARTĂ + DATE CONTACT ── */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          {/* items-stretch + harta flex col → iframe umple toată înălțimea coloanei drepte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

            {/* Hartă Google Maps embed — flex col, iframe flex-1 */}
            <div className="flex flex-col">
              <span className="sec-label">{ui.map_label}</span>
              <h2 className="font-condensed text-xl font-semibold text-primary mb-4">{ui.map_title}</h2>
              {/* min-h pe mobil, flex-1 pe desktop = umple restul coloanei */}
              <div className="border border-border overflow-hidden flex-1" style={{ minHeight: '320px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.3!2d26.0859381!3d44.4429398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b1%3A0xa9d64b2f9d9b0f2a!2sStrada%20Theodor%20Aman%2011%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', minHeight: '320px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Neofort BIZ — Str. Theodor Aman Pictor 11, Sector 1, București"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/YcaANuqcmnzy14i1A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 font-condensed text-[0.68rem] tracking-[0.15em] uppercase font-semibold text-muted hover:text-primary transition-colors duration-200"
              >
                {ui.maps_btn}
              </a>
            </div>

            {/* Date contact + program — compact, fără space-y mare */}
            <div className="flex flex-col gap-6">

              {/* Adresă */}
              <div>
                <span className="sec-label" style={{display:"block",marginBottom:"8px"}}>{ui.address_label}</span>
                <address className="not-italic text-[0.88rem] text-primary leading-relaxed font-medium">
                  {ui.address.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < 2 && <br/>}</span>
                  ))}
                </address>
              </div>

              {/* Telefoane */}
              <div>
                <p className="font-condensed text-[0.62rem] tracking-[0.2em] uppercase font-semibold text-muted mb-2">Telefon</p>
                <div className="border border-border">
                  {[
                    { label: ui.dept_office,   phone: '+40 21 528 06 61', href: 'tel:+40215280661' },
                    { label: ui.dept_quotes,   phone: '+40 752 443 435',  href: 'tel:+40752443435' },
                    { label: ui.dept_export,   phone: '+40 752 443 439',  href: 'tel:+40752443439' },
                    { label: ui.dept_tech,     phone: '+40 752 443 431',  href: 'tel:+40752443431' },
                    { label: ui.dept_service,  phone: '+40 752 443 432',  href: 'tel:+40752443432' },
                    { label: ui.dept_schedule, phone: '+40 758 990 048',  href: 'tel:+40758990048' },
                  ].map((item, i, arr) => (
                    <a key={item.label} href={item.href}
                      className={`flex justify-between items-center px-4 py-2.5 hover:bg-light transition-colors duration-150 ${i < arr.length-1 ? 'border-b border-border' : ''}`}>
                      <span className="font-condensed text-[0.62rem] tracking-[0.14em] uppercase font-semibold text-muted">{item.label}</span>
                      <span className="font-condensed text-[0.8rem] font-medium text-primary">{item.phone}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* E-mail — butoane mailto fără adresă vizibilă în HTML */}
              <div>
                <p className="font-condensed text-[0.62rem] tracking-[0.2em] uppercase font-semibold text-muted mb-2">{ui.email_section}</p>
                <div className="border border-border">
                  {[
                    { href: 'mailto:oferte@neofort-biz.ro',  label: ui.dept_quotes },
                    { href: 'mailto:comenzi@neofort-biz.ro', label: locale==='ro'?'Comenzi':locale==='en'?'Orders':locale==='de'?'Bestellungen':locale==='fr'?'Commandes':locale==='es'?'Pedidos':'Ordini' },
                    { href: 'mailto:service@neofort-biz.ro', label: ui.dept_service },
                  ].map((e, i, arr) => (
                    <a key={e.label} href={e.href}
                      className={`flex justify-between items-center px-4 py-2.5 hover:bg-light transition-colors duration-150 group ${i < arr.length-1 ? 'border-b border-border' : ''}`}>
                      <span className="font-condensed text-[0.62rem] tracking-[0.14em] uppercase font-semibold text-muted group-hover:text-primary transition-colors">{e.label}</span>
                      <span className="font-condensed text-[0.62rem] tracking-[0.12em] uppercase text-muted group-hover:text-primary transition-colors">
                        {ui.email_section} →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Program + WhatsApp — side by side pe desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Program */}
                <div>
                  <p className="font-condensed text-[0.62rem] tracking-[0.2em] uppercase font-semibold text-muted mb-2">{ui.schedule_label}</p>
                  <div className="border border-border">
                    <div className="flex justify-between items-center px-4 py-2.5 border-b border-border">
                      <span className="font-condensed text-[0.68rem] font-semibold text-primary">{ui.schedule_days}</span>
                      <span className="font-condensed text-[0.68rem] font-semibold text-pvc">{ui.schedule_hours}</span>
                    </div>
                    <div className="flex justify-between items-center px-4 py-2.5">
                      <span className="font-condensed text-[0.68rem] text-muted">{ui.schedule_weekend.split(':')[0]}</span>
                      <span className="font-condensed text-[0.68rem] text-muted">{ui.schedule_weekend.split(':')[1]?.trim()}</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <p className="font-condensed text-[0.62rem] tracking-[0.2em] uppercase font-semibold text-muted mb-2">{ui.whatsapp}</p>
                  <a href="https://wa.me/40752443435" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-border px-4 py-2.5 hover:border-[#25D366] transition-all duration-200 group h-[calc(100%-1.5rem)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" className="shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <div>
                      <span className="font-condensed text-[0.82rem] font-medium text-primary block">+40 752 443 435</span>
                      <span className="font-condensed text-[0.6rem] tracking-[0.1em] uppercase text-muted group-hover:text-[#25D366] transition-colors">Chat →</span>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
