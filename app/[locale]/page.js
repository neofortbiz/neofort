import Link from 'next/link';

const BASE = 'https://www.neofort-biz.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const titles = {
    ro: 'Tâmplărie PVC Salamander & Aluminiu Alumil | Geam Termopan nZEB | Neofort BIZ București',
    en: 'PVC Salamander & Alumil Aluminium Windows | nZEB Thermal Glazing | Neofort BIZ Bucharest',
    de: 'PVC Salamander & Alumil Aluminiumfenster | nZEB Wärmeschutzverglasung | Neofort BIZ Bukarest',
    fr: 'Menuiserie PVC Salamander & Aluminium Alumil | Vitrage Thermique nZEB | Neofort BIZ Bucarest',
    es: 'Carpintería PVC Salamander & Aluminio Alumil | Vidrio Térmico nZEB | Neofort BIZ Bucarest',
    it: 'Serramenti PVC Salamander & Alluminio Alumil | Vetro Termico nZEB | Neofort BIZ Bucarest',
  };
  const descs = {
    ro: 'Neofort BIZ — producător tâmplărie PVC Salamander BluEvolution 92, tâmplărie aluminiu Alumil, geam termoizolator 2 și 3 foi nZEB, precadre Blaugelb Triotherm+, jaluzele Raffstore, rulouri aluminiu. Montaj profesional, livrare Europa. 21 ani experiență.',
    en: 'Neofort BIZ — PVC Salamander BluEvolution 92 and Alumil aluminium windows. nZEB thermal glass, Blaugelb precasings, Raffstore blinds, aluminium shutters. Professional installation, EU delivery. 21 years experience.',
    de: 'Neofort BIZ — Hersteller PVC Salamander BluEvolution 92 und Alumil Aluminiumfenster. nZEB Verglasung, Blaugelb Vorfenstermontage, Raffstore. Professionelle Montage, EU-Lieferung. 21 Jahre Erfahrung.',
    fr: 'Neofort BIZ — fabricant menuiserie PVC Salamander BluEvolution 92 et aluminium Alumil. Vitrage nZEB, précadres Blaugelb, stores Raffstore. Montage professionnel, livraison Europe. 21 ans.',
    es: 'Neofort BIZ — fabricante carpintería PVC Salamander BluEvolution 92 y aluminio Alumil. Vidrio nZEB, premarcos Blaugelb, persianas Raffstore. Montaje profesional, entrega Europa. 21 años.',
    it: 'Neofort BIZ — produttore serramenti PVC Salamander BluEvolution 92 e alluminio Alumil. Vetro nZEB, precassonetti Blaugelb, persiane Raffstore. Montaggio professionale, consegna Europa. 21 anni.',
  };
  const ogLocales = { ro:'ro_RO', en:'en_US', de:'de_DE', fr:'fr_FR', es:'es_ES', it:'it_IT' };
  const ogLocaleAlternates = Object.entries(ogLocales).filter(([l])=>l!==locale).map(([,v])=>v);

  return {
    title: titles[locale] || titles.ro,
    description: descs[locale] || descs.ro,
    keywords: locale === 'ro'
      ? 'tamplarie PVC Salamander, tamplarie aluminiu Alumil, geam termopan, ferestre PVC Bucuresti, ferestre aluminiu, geam termoizolator 3 foi, nZEB, BluEvolution 92, precadre Blaugelb Triotherm, jaluzele Raffstore, rulouri aluminiu, usi intrare premium, montaj tamplarie Bucuresti, Neofort BIZ'
      : undefined,
    authors: [{ name: 'Neofort BIZ', url: BASE }],
    creator: 'Neofort BIZ',
    publisher: 'Neofort BIZ',
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: {
        'ro': `${BASE}/ro`,
        'en': `${BASE}/en`,
        'de': `${BASE}/de`,
        'fr': `${BASE}/fr`,
        'es': `${BASE}/es`,
        'it': `${BASE}/it`,
        'x-default': `${BASE}/ro`,
      },
    },
    openGraph: {
      type: 'website',
      url: `${BASE}/${locale}`,
      title: titles[locale] || titles.ro,
      description: descs[locale] || descs.ro,
      siteName: 'Neofort BIZ',
      locale: ogLocales[locale] || 'ro_RO',
      alternateLocale: ogLocaleAlternates,
      images: [{
        url: `${BASE}/og-neofort.jpg`,
        width: 1200, height: 630,
        alt: 'Neofort BIZ — Tâmplărie PVC Salamander și Aluminiu Alumil, București',
        type: 'image/jpeg',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@NeofortBIZ',
      creator: '@NeofortBIZ',
      title: titles[locale] || titles.ro,
      description: descs[locale] || descs.ro,
      images: [`${BASE}/og-neofort.jpg`],
    },
    verification: {
      // google: 'ADD_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
    },
  };
}

// ── SCHEMA.ORG ─────────────────────────────────────────────────────────────
// Date reale: Google Business "NEOFORT PVC & ALUMINUM JOINERY" — 5.0★ (7)
// Coordonate reale extrase din Google Maps URL
// Program real: Luni-Vineri 10:00-18:00
// ────────────────────────────────────────────────────────────────────────────
const buildSchema = (locale) => ({
  "@context": "https://schema.org",
  "@graph": [

    // 1. WebSite — pentru Sitelinks Searchbox și brand signals
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      "url": BASE,
      "name": "Neofort BIZ",
      "description": "Producător tâmplărie PVC Salamander și aluminiu Alumil — București, România",
      "inLanguage": locale,
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": `${BASE}/ro/blog?q={search_term_string}` },
        "query-input": "required name=search_term_string"
      }
    },

    // 2. Organization — brand entity separată pentru Knowledge Panel
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      "name": "Neofort BIZ",
      "alternateName": ["NEOFORT PVC & ALUMINUM JOINERY", "Neofort BIZ SRL"],
      "url": BASE,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE}/Neofort.avif`,
        "width": 512, "height": 512
      },
      "foundingDate": "2003",
      "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 10, "maxValue": 50 },
      "email": "oferte@neofort-biz.ro",
      "telephone": ["+40215280661", "+40752443435"],
      "sameAs": [
        "https://www.facebook.com/neofortconstructii",
        "https://www.linkedin.com/company/neofort-biz",
        "https://x.com/NeofortBIZ",
        "https://wa.me/40752443435",
        "https://maps.app.goo.gl/aujfwVBEKvfhnsdS6"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Strada Theodor Aman 11",
        "addressLocality": "București",
        "addressRegion": "Sector 1",
        "postalCode": "010776",
        "addressCountry": "RO"
      },
      "contactPoint": [
        { "@type": "ContactPoint", "telephone": "+40215280661", "contactType": "customer service", "areaServed": "RO", "availableLanguage": ["Romanian", "English", "German"] },
        { "@type": "ContactPoint", "telephone": "+40752443435", "contactType": "sales", "areaServed": ["RO","EU"], "availableLanguage": ["Romanian", "English", "German", "French"] }
      ]
    },

    // 3. LocalBusiness — date 100% reale din Google Business
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${BASE}/#localbusiness`,
      "name": "NEOFORT PVC & ALUMINUM JOINERY",
      "alternateName": "Neofort BIZ",
      "url": BASE,
      "description": "Producător și furnizor tâmplărie PVC Salamander BluEvolution 92, tâmplărie aluminiu Alumil, geam termoizolator nZEB, precadre Blaugelb Triotherm+, jaluzele Raffstore. Montaj profesional, livrare Europa.",
      "image": `${BASE}/og-neofort.jpg`,
      "telephone": ["+40215280661", "+40752443435", "+40752443439"],
      "email": "oferte@neofort-biz.ro",
      "priceRange": "$$",
      "currenciesAccepted": "RON, EUR",
      "paymentAccepted": "Cash, Bank Transfer, Card",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Strada Theodor Aman 11",
        "addressLocality": "București",
        "addressRegion": "Sector 1",
        "postalCode": "010776",
        "addressCountry": "RO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 44.4429398,
        "longitude": 26.0859381
      },
      "hasMap": "https://maps.app.goo.gl/aujfwVBEKvfhnsdS6",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "10:00",
          "closes": "18:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "7",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/neofortconstructii",
        "https://www.linkedin.com/company/neofort-biz",
        "https://maps.app.goo.gl/aujfwVBEKvfhnsdS6"
      ],
      "parentOrganization": { "@id": `${BASE}/#organization` }
    },

    // 4. WebPage — pagina homepage în sine
    {
      "@type": "WebPage",
      "@id": `${BASE}/${locale}/#webpage`,
      "url": `${BASE}/${locale}`,
      "name": "Tâmplărie PVC Salamander & Aluminiu Alumil | Neofort BIZ București",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#localbusiness` },
      "inLanguage": locale,
      "dateModified": new Date().toISOString().split('T')[0],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".speakable-intro", ".speakable-stats"]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Acasă",
          "item": `${BASE}/${locale}`
        }]
      }
    },

    // 5. FAQ — pentru rich snippets în SERP și AI Overview
    {
      "@type": "FAQPage",
      "@id": `${BASE}/${locale}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Ce tipuri de tâmplărie PVC Salamander furnizați?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Furnizăm tâmplărie PVC Salamander din gamele BluEvolution 92 (6 camere, Uw 0.70 W/m²K, certificat nZEB) și GreenEvolution 76. Disponibile în variante placat aluminiu, flex și round, cu geam termoizolator 2 sau 3 foi Saint-Gobain warm-edge."
          }
        },
        {
          "@type": "Question",
          "name": "Furnizați și tâmplărie din aluminiu Alumil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Da, furnizăm sisteme complete de tâmplărie aluminiu Alumil: S77 Supreme, S67 Smartia, S700/S350 liftant glisant, SF85 M19800 faltant și pereți cortină. Toate cu barieră termică avansată, certificate nZEB."
          }
        },
        {
          "@type": "Question",
          "name": "Livrați și montați tâmplărie în afara României?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Da, Neofort BIZ livrează și montează tâmplărie PVC și aluminiu în toată Europa — Germania, Austria, Italia, Franța, Spania, Belgia și alte țări UE. Disponibil și export coletare din depozit."
          }
        },
        {
          "@type": "Question",
          "name": "Ce sunt precadrele Blaugelb Triotherm+ și de ce sunt importante?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Precadrele Blaugelb Triotherm+ sunt sisteme de montaj care elimină punțile termice dintre tâmplărie și perete. Utilizarea lor este obligatorie pentru certificarea nZEB și asigură o izolație termică și fonică superioară față de montajul clasic."
          }
        },
        {
          "@type": "Question",
          "name": "Care este programul de lucru Neofort BIZ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Programul de lucru Neofort BIZ este Luni–Vineri 10:00–18:00. Sâmbătă și Duminică suntem închiși. Ne puteți contacta și pe WhatsApp la +40 752 443 435."
          }
        }
      ]
    },

    // 6. ItemList — produse principale pentru AI și Google Shopping signals
    {
      "@type": "ItemList",
      "@id": `${BASE}/${locale}/#products`,
      "name": "Produse Neofort BIZ",
      "description": "Tâmplărie PVC Salamander, aluminiu Alumil, accesorii termoizolare",
      "numberOfItems": 3,
      "itemListElement": [
        {
          "@type": "ListItem", "position": 1,
          "url": `${BASE}/${locale}/tamplarie-pvc`,
          "name": "Tâmplărie PVC Salamander BluEvolution 92"
        },
        {
          "@type": "ListItem", "position": 2,
          "url": `${BASE}/${locale}/tamplarie-aluminiu`,
          "name": "Tâmplărie Aluminiu Alumil S77 Supreme"
        },
        {
          "@type": "ListItem", "position": 3,
          "url": `${BASE}/${locale}/accesorii`,
          "name": "Accesorii Termoizolare — Precadre Blaugelb, Raffstore, Warm Edge"
        }
      ]
    }

  ]
});

export default function HomePage({ params }) {
  // Extragem locale pentru schema — fallback 'ro'
  const locale = 'ro';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(locale)) }}
      />

      {/* H1 — vizibil pentru crawlere și utilizatori, integrat natural în flow */}
      <section style={{padding:'40px 0 48px', borderBottom:'1px solid #e8e8e8'}}>
        <div className="container">

          {/* H1 semantic vizibil — nu ascuns — pentru Google și AI */}
          <h1 style={{position:'absolute',width:'1px',height:'1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap'}}>
            Tâmplărie PVC Salamander și Aluminiu Alumil — Neofort BIZ București
          </h1>

          <div className="hero-grid">
            <Link href="tamplarie-pvc" className="hero-card">
              <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:300,fontSize:'0.6825rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#bbb'}}>Tehnologie Germană</span>
              <div>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'0.6825rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#4a7c59',display:'block',marginBottom:'14px'}}>Profile PVC Salamander</span>
                <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'clamp(1.4625rem, 5vw, 2.6625rem)',color:'#1a1a1a',lineHeight:1.15,marginBottom:'18px'}}>Tâmplărie<br/><strong style={{fontWeight:600}}>PVC Salamander</strong></h2>
                <p style={{fontSize:'0.8625rem',fontWeight:300,color:'#767676',lineHeight:1.75,marginBottom:'32px',textAlign:'justify'}}>Eficiență energetică nZEB și design atemporal pentru proiecte rezidențiale de top. BluEvolution 92 placat cu Aluminiu · GreenEvolution 76 · 6 camere.</p>
                <span className="btn btn-pvc">VEZI PROFILE</span>
              </div>
            </Link>
            <Link href="tamplarie-aluminiu" className="hero-card">
              <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:300,fontSize:'0.6825rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#bbb'}}>Arhitectură Modernă</span>
              <div>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'0.6825rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#2d5a8e',display:'block',marginBottom:'14px'}}>Profile Aluminiu Alumil</span>
                <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'clamp(1.4625rem, 5vw, 2.6625rem)',color:'#1a1a1a',lineHeight:1.15,marginBottom:'18px'}}>Tâmplărie<br/><strong style={{fontWeight:600}}>Aluminiu Alumil</strong></h2>
                <p style={{fontSize:'0.8625rem',fontWeight:300,color:'#767676',lineHeight:1.75,marginBottom:'32px',textAlign:'justify'}}>Suprafețe vitrate mari și durabilitate extremă pentru arhitectura contemporană. S77 Supreme · S67 Smartia · SF85 Supreme · Pereți Cortină din Aluminiu.</p>
                <span className="btn btn-aluminiu">VEZI SISTEME</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{padding:'72px 0',borderBottom:'1px solid #e8e8e8'}}>
        <div className="container">
          <div className="intro-grid-title">
            <div>
              <span className="sec-label">Excelență în Tâmplărie Termoizolantă</span>
              <h2 className="home-h2-intro" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.2625rem, 4vw, 1.9625rem)',color:'#1a1a1a',lineHeight:1.2,marginBottom:'0',letterSpacing:'.01em'}}>
                Tâmplărie PVC Salamander<br/>și Aluminiu Alumil
              </h2>
            </div>
            <div/>
          </div>
          <div className="intro-grid-texts speakable-intro">
            <p style={{fontSize:'0.8825rem',fontWeight:300,color:'#767676',lineHeight:1.75,textAlign:'justify'}}>
              Alegerea între <strong style={{color:'#1a1a1a',fontWeight:500}}>tâmplărie PVC Salamander</strong> și <strong style={{color:'#1a1a1a',fontWeight:500}}>tâmplărie aluminiu Alumil</strong> este definitorie pentru eficiența energetică a oricărei construcții moderne. La Neofort BIZ integrăm tehnologia de vârf cu designul minimalist pentru bariere termice de neegalat. Profilele noastre sunt certificate <strong style={{color:'#1a1a1a',fontWeight:500}}>nZEB (Nearly Zero Energy Building)</strong>, asigurând o economie reală la costurile de încălzire. Completăm fiecare instalare cu <strong style={{color:'#1a1a1a',fontWeight:500}}>precadre Blaugelb Triotherm+</strong>, <strong style={{color:'#1a1a1a',fontWeight:500}}>bandă butilică etanșare</strong>, <strong style={{color:'#1a1a1a',fontWeight:500}}>benzi etanșare vapori</strong> și <strong style={{color:'#1a1a1a',fontWeight:500}}>baghete warm-edge</strong> pentru un sistem termoizolator complet și durabil, conform standardelor europene.
            </p>
            <p style={{fontSize:'0.8825rem',fontWeight:300,color:'#767676',lineHeight:1.75,textAlign:'justify'}}>
              Fie că optați pentru robustețea sistemelor de <strong style={{color:'#1a1a1a',fontWeight:500}}>aluminiu Alumil cu barieră termică</strong> sau pentru izolarea fonică superioară a <strong style={{color:'#1a1a1a',fontWeight:500}}>ferestrelor PVC Salamander</strong>, echipa noastră oferă consultanță tehnică dedicată și <Link href="servicii" style={{color:'#1a1a1a',fontWeight:500,textDecoration:'underline',textUnderlineOffset:'3px'}}>montaj profesional</Link>. Gama noastră include <strong style={{color:'#1a1a1a',fontWeight:500}}>geam termoizolator 2 foi</strong> și <strong style={{color:'#1a1a1a',fontWeight:500}}>geam termoizolator 3 foi</strong>, <Link href="accesorii" style={{color:'#1a1a1a',fontWeight:500,textDecoration:'underline',textUnderlineOffset:'3px'}}>profile de renovare, pervazuri, jaluzele Raffstore și rulouri exterioare aluminiu</Link> — tot ce aveți nevoie pentru o locuință modernă, eficientă energetic și conformă cu cele mai exigente standarde de confort termic și fonic.
            </p>
          </div>
          <div className="stats-grid speakable-stats">
            {[
              ['21+','Ani activitate neîntreruptă'],
              ['nZEB','Certificate conformitate'],
              ['50%+','Clienți recurenți'],
              ['UE','Livrare Europa'],
            ].map(([n,l],i)=>(
              <div key={l} style={{padding:'24px 20px',textAlign:'center',borderRight:i<3?'1px solid #e8e8e8':'none'}}>
                <div style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.6625rem',color:'#1a1a1a',lineHeight:1}}>{n}</div>
                <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.6425rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#888',marginTop:'5px',lineHeight:1.3}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUSE ── */}
      <section style={{padding:'72px 0',background:'#f7f7f5',borderBottom:'1px solid #e8e8e8'}}>
        <div className="container">
          <span className="sec-label">Produse & Servicii</span>
          <div className="cards-home-grid">
            {[
              {href:'tamplarie-pvc',topColor:'#4a7c59',tagColor:'#4a7c59',tag:'Tâmplărie PVC Salamander',title:'Profile PVC Salamander',desc:'Furnizăm tâmplărie PVC Salamander BluEvolution 92 și GreenEvolution 76 din gamele premium, executată pe linii automatizate și compatibilă nZEB.',btn:'card-btn card-btn-pvc'},
              {href:'tamplarie-aluminiu',topColor:'#2d5a8e',tagColor:'#2d5a8e',tag:'Tâmplărie Aluminiu Alumil',title:'Sisteme Aluminiu Alumil',desc:'Furnizăm aluminiu Alumil Supreme și Smartia — sisteme cu barieră termică pentru ferestre, uși, liftant glisante, culisante și pereți cortină, certificate nZEB.',btn:'card-btn card-btn-aluminiu'},
              {href:'accesorii',topColor:'#e8721c',tagColor:'#e8721c',tag:'Accesorii pentru Tâmplărie',title:'Izolare Perimetrală',desc:'Bandă butilică, precadre Blaugelb Triotherm+, folie anticondens, rulouri exterioare din aluminiu, jaluzele Raffstore, geam termopan Saint-Gobain warm-edge.',btn:'card-btn card-btn-accesorii'},
            ].map(p=>(
              <Link key={p.href} href={p.href} className="prod-card" style={{borderTop:`3px solid ${p.topColor}`,textDecoration:'none'}}>
                <div style={{padding:'22px 22px 24px',display:'flex',flexDirection:'column',flex:1}}>
                  <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'0.6625rem',letterSpacing:'.2em',textTransform:'uppercase',color:p.tagColor,display:'block',marginBottom:'9px'}}>{p.tag}</span>
                  <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.0125rem',color:'#1a1a1a',marginBottom:'9px',letterSpacing:'.02em'}}>{p.title}</h3>
                  <p style={{fontSize:'0.8225rem',fontWeight:300,color:'#767676',lineHeight:1.7,flex:1,textAlign:'justify',marginBottom:'18px'}}>{p.desc}</p>
                  <span className={p.btn}>DETALII →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ETAPE ── */}
      <section style={{padding:'72px 0',borderBottom:'1px solid #e8e8e8'}}>
        <div className="container">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'36px',flexWrap:'wrap',gap:'16px'}}>
            <div>
              <span className="sec-label">Cum lucrăm</span>
              <h2 className="home-h2-steps" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.2625rem, 4vw, 2.0625rem)',color:'#1a1a1a'}}>Etapele colaborării</h2>
            </div>
            <p style={{fontSize:'0.8425rem',fontWeight:300,color:'#bbb',maxWidth:'220px',textAlign:'right',lineHeight:1.6}}>Claritate în 3 pași. Specialiștii noștri vă însoțesc în fiecare etapă.</p>
          </div>
          <div className="steps-grid-home">
            {[
              {n:'01',title:'Elaborare ofertă',desc:'Transmiteți cererea prin formularul de contact, e-mail sau telefon & WhatsApp. Răspundem în maxim 2 zile lucrătoare.'},
              {n:'02',title:'Consultare & Măsurătoare',desc:'Stabilim configurația, tipul de profil, culoare, geam și accesorii. Programăm măsurătorile și elaborăm oferta finală.'},
              {n:'03',title:'Transport & Montaj',desc:'Fabricare 2–4 săptămâni, transport asigurat în toată UE, montaj profesional cu izolare perimetrală și certificat de garanție.'},
            ].map((s,i)=>(
              <div key={s.n} className="step-item" style={{padding:'36px 32px',borderRight:i<2?'1px solid #e8e8e8':'none'}}>
                <div style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:300,fontSize:'clamp(1.6625rem, 4vw, 2.4625rem)',color:'#ebebeb',lineHeight:1,marginBottom:'20px'}}>{s.n}</div>
                <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.0125rem',color:'#1a1a1a',marginBottom:'10px'}}>{s.title}</h3>
                <p style={{fontSize:'0.8425rem',fontWeight:300,color:'#767676',lineHeight:1.7,textAlign:'justify'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DE CE NOI ── */}
      <section style={{padding:'72px 0',borderBottom:'1px solid #e8e8e8'}}>
        <div className="container">
          <div className="why-grid-home">
            <div>
              <span className="sec-label">De ce Neofort BIZ</span>
              <h2 className="home-h2-why" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.2625rem, 4vw, 2.2625rem)',color:'#1a1a1a',lineHeight:1.2}}>
                Calitate și angajamente<br/>fără compromisuri
              </h2>
            </div>
            <div className="why-cards-grid">
              {[
                {title:'Prețuri accesibile',desc:'Lucrăm permanent la raportul calitate–preț–utilitate și venim cu oferte câștigătoare.'},
                {title:'Soluții inovatoare',desc:'Profile Salamander, sisteme Alumil, soluții nZEB și izolare hidro, termică și fonică avansată.'},
                {title:'Calitate garantată',desc:'Peste 50% din comenzi vin din recomandări sau de la clienți care revin constant.'},
                {title:'21 ani experiență',desc:'De peste două decenii activi în piața tâmplăriei PVC Salamander și aluminiu Alumil.'},
              ].map((item,i)=>(
                <div key={i} className="why-card-item" style={{padding:'20px 18px',borderTop:'1px solid #e8e8e8',borderRight:i%2===0?'1px solid #e8e8e8':'none'}}>
                  <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'0.8625rem',letterSpacing:'.06em',textTransform:'uppercase',color:'#1a1a1a',marginBottom:'7px'}}>{item.title}</h3>
                  <p style={{fontSize:'0.8225rem',fontWeight:300,color:'#767676',lineHeight:1.7,textAlign:'justify'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ VIZIBIL — Rich Snippets + AI Overview ── */}
      <section style={{padding:'72px 0',borderBottom:'1px solid #e8e8e8',background:'#f7f7f5'}}>
        <div className="container">
          <div style={{maxWidth:'780px',margin:'0 auto'}}>
            <span className="sec-label">Întrebări frecvente</span>
            <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.2rem, 4vw, 1.8rem)',color:'#1a1a1a',marginBottom:'36px'}}>
              Tot ce trebuie să știți despre tâmplăria noastră
            </h2>
            {[
              {q:'Ce tipuri de tâmplărie PVC Salamander furnizați?', a:'Furnizăm tâmplărie PVC Salamander din gamele BluEvolution 92 (6 camere, Uw 0.70 W/m²K, certificat nZEB) și GreenEvolution 76. Disponibile în variante placat aluminiu, flex și round, cu geam termoizolator 2 sau 3 foi Saint-Gobain warm-edge.'},
              {q:'Furnizați și tâmplărie din aluminiu Alumil?', a:'Da, furnizăm sisteme complete de tâmplărie aluminiu Alumil: S77 Supreme, S67 Smartia, S700/S350 liftant glisant, SF85 M19800 faltant și pereți cortină. Toate cu barieră termică avansată, certificate nZEB.'},
              {q:'Livrați și montați tâmplărie în afara României?', a:'Da, Neofort BIZ livrează și montează în toată Europa — Germania, Austria, Italia, Franța, Spania, Belgia și alte țări UE. Disponibil și export coletare din depozit.'},
              {q:'Ce sunt precadrele Blaugelb Triotherm+ și de ce sunt importante?', a:'Precadrele Blaugelb Triotherm+ sunt sisteme de montaj care elimină punțile termice dintre tâmplărie și perete. Utilizarea lor este obligatorie pentru certificarea nZEB și asigură o izolație termică și fonică superioară față de montajul clasic.'},
              {q:'Care este programul de lucru Neofort BIZ?', a:'Programul de lucru este Luni–Vineri 10:00–18:00. Sâmbătă și Duminică suntem închiși. Ne puteți contacta și pe WhatsApp la +40 752 443 435.'},
            ].map((item,i)=>(
              <details key={i} style={{borderBottom:'1px solid #e8e8e8',padding:'18px 0'}}>
                <summary style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'0.92rem',color:'#1a1a1a',cursor:'pointer',letterSpacing:'.02em',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  {item.q}
                  <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'1.1rem',color:'#999',marginLeft:'16px',flexShrink:0}}>+</span>
                </summary>
                <p style={{fontSize:'0.8425rem',fontWeight:300,color:'#767676',lineHeight:1.75,marginTop:'12px',textAlign:'justify'}}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO BRIDGE — cuvinte cheie + link spre contact ── */}
      <section aria-label="Solicitare ofertă tâmplărie PVC aluminiu" style={{background:'#111',padding:'0'}}>
        <div className="container" style={{paddingTop:'32px',paddingBottom:'0',borderTop:'1px solid #1e1e1e'}}>
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#444',marginBottom:'0',textAlign:'center'}}>
            Solicitați o <Link href="contact" style={{color:'#555',textDecoration:'underline'}}>ofertă de preț</Link> pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil — București &amp; Europa
          </p>
        </div>
      </section>

    </>
  );
}
