import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const titles = {
    ro: 'Tâmplărie PVC Salamander & Aluminiu Alumil | Geam Termopan nZEB | Neofort BIZ București',
    en: 'PVC Salamander & Alumil Aluminium Joinery | nZEB Thermal Glass | Neofort BIZ Bucharest',
    de: 'PVC Salamander & Aluminium Alumil Fenster | nZEB Wärmeschutzverglasung | Neofort BIZ Bukarest',
    fr: 'Menuiserie PVC Salamander & Aluminium Alumil | Vitrage Thermique nZEB | Neofort BIZ Bucarest',
    es: 'Carpintería PVC Salamander & Aluminio Alumil | Vidrio Térmico nZEB | Neofort BIZ Bucarest',
    it: 'Serramenti PVC Salamander & Alluminio Alumil | Vetro Termico nZEB | Neofort BIZ Bucarest',
  };
  const descs = {
    ro: 'Neofort BIZ — producător tâmplărie PVC Salamander BluEvolution 92, aluminiu Alumil, geam termoizolator 2 și 3 foi, precadre Blaugelb Triotherm+, jaluzele Raffstore, rulouri aluminiu. Montaj profesional, livrare Europa. 21 ani experiență.',
    en: 'Neofort BIZ — PVC Salamander BluEvolution 92 and Alumil aluminium joinery. nZEB thermal glass, Blaugelb precasings, Raffstore blinds. Professional installation, EU delivery. 21 years experience.',
    de: 'Neofort BIZ — Hersteller PVC Salamander BluEvolution 92 und Alumil Aluminiumfenster. nZEB Verglasung, Blaugelb Vorfenstermontage, Raffstore. Professionelle Montage, EU-Lieferung. 21 Jahre Erfahrung.',
    fr: 'Neofort BIZ — fabricant menuiserie PVC Salamander BluEvolution 92 et aluminium Alumil. Vitrage nZEB, précadres Blaugelb, stores Raffstore. Montage professionnel, livraison Europe. 21 ans.',
    es: 'Neofort BIZ — fabricante carpintería PVC Salamander BluEvolution 92 y aluminio Alumil. Vidrio nZEB, premarcos Blaugelb, persianas Raffstore. Montaje profesional, entrega Europa. 21 años.',
    it: 'Neofort BIZ — produttore serramenti PVC Salamander BluEvolution 92 e alluminio Alumil. Vetro nZEB, precassonetti Blaugelb, persiane Raffstore. Montaggio professionale, consegna Europa. 21 anni.',
  };
  return {
    title: titles[locale] || titles.ro,
    description: descs[locale] || descs.ro,
    keywords: 'tamplarie PVC Salamander, tamplarie aluminiu Alumil, geam termopan, geam termoizolator 3 foi, geam termoizolator 2 foi, ferestre PVC, nZEB, BluEvolution 92, precadre Blaugelb Triotherm, baghete warm-edge, banda butilica, jaluzele Raffstore, rulouri aluminiu, sisteme glisante, usi intrare premium, usi garaj, profile renovare, pervazuri, montaj tamplarie Bucuresti, Neofort BIZ',
    authors: [{ name: 'Neofort BIZ' }],
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
    alternates: {
      canonical: `https://www.neofort-biz.ro/${locale}`,
      languages: { ro:'https://www.neofort-biz.ro/ro', en:'https://www.neofort-biz.ro/en', de:'https://www.neofort-biz.ro/de', fr:'https://www.neofort-biz.ro/fr', es:'https://www.neofort-biz.ro/es', it:'https://www.neofort-biz.ro/it' },
    },
    openGraph: {
      type: 'website', url: `https://www.neofort-biz.ro/${locale}`,
      title: titles[locale] || titles.ro, description: descs[locale] || descs.ro,
      images: [{ url: 'https://www.neofort-biz.ro/og-image.jpg', width: 1200, height: 630, alt: 'Neofort BIZ — Tâmplărie PVC Salamander și Aluminiu Alumil' }],
      siteName: 'Neofort BIZ',
    },
    twitter: { card: 'summary_large_image', site: '@NeofortBIZ', title: titles[locale] || titles.ro, description: descs[locale] || descs.ro, images: ['https://www.neofort-biz.ro/og-image.jpg'] },
  };
}

const schema = {"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.neofort-biz.ro/#business","name":"Neofort BIZ","url":"https://www.neofort-biz.ro","description":"Producător tâmplărie PVC Salamander, aluminiu Alumil, geam termoizolator nZEB. Montaj profesional și livrare Europa. 21 ani experiență.","foundingDate":"2003","telephone":["+40215280661","+40752443435"],"email":"oferte@neofort-biz.ro","address":{"@type":"PostalAddress","streetAddress":"Strada Theodor Aman Pictor 11","addressLocality":"București","postalCode":"010776","addressCountry":"RO"},"geo":{"@type":"GeoCoordinates","latitude":44.4475,"longitude":26.0837},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"08:00","closes":"17:00"}],"sameAs":["https://www.facebook.com/neofortconstructii","https://www.linkedin.com/company/neofort-biz","https://x.com/NeofortBIZ"],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"127","bestRating":"5"}},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Ce tipuri de tâmplărie PVC Salamander furnizați?","acceptedAnswer":{"@type":"Answer","text":"Furnizăm tâmplărie PVC Salamander din gamele BluEvolution 92 (6 camere, Uw 0.70 W/m²K) și GreenEvolution 76, certificate nZEB."}},{"@type":"Question","name":"Livrați și montați în afara României?","acceptedAnswer":{"@type":"Answer","text":"Da, Neofort BIZ livrează și montează în toată Europa — Germania, Austria, Italia, Franța, Spania și alte țări UE."}}]}]};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
      <h1 style={{position:'absolute',width:'1px',height:'1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap'}}>
        Tâmplărie PVC Salamander și Aluminiu Alumil — Neofort BIZ București
      </h1>

      {/* ── HERO ── */}
      <section style={{padding:'40px 0 48px', borderBottom:'1px solid #e8e8e8'}}>
        <div className="container">
          <div className="hero-grid">
            <Link href="tamplarie-pvc" className="hero-card">
              <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:300,fontSize:'.62rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#bbb'}}>Tehnologie Germană</span>
              <div>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.62rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#4a7c59',display:'block',marginBottom:'14px'}}>Profile PVC Salamander</span>
                <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'2.6rem',color:'#1a1a1a',lineHeight:1.08,marginBottom:'18px'}}>Tâmplărie<br/><strong style={{fontWeight:600}}>PVC Salamander</strong></h2>
                <p style={{fontSize:'.8rem',fontWeight:300,color:'#999',lineHeight:1.75,marginBottom:'32px',textAlign:'justify'}}>Eficiență energetică nZEB și design atemporal pentru proiecte rezidențiale de top. BluEvolution 92 · GreenEvolution 76 · 6 camere.</p>
                <span className="btn btn-pvc">VEZI PROFILE</span>
              </div>
            </Link>
            <Link href="tamplarie-aluminiu" className="hero-card">
              <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:300,fontSize:'.62rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#bbb'}}>Arhitectură Modernă</span>
              <div>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.62rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#2d5a8e',display:'block',marginBottom:'14px'}}>Profile Aluminiu Alumil</span>
                <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'2.6rem',color:'#1a1a1a',lineHeight:1.08,marginBottom:'18px'}}>Tâmplărie<br/><strong style={{fontWeight:600}}>Aluminiu Alumil</strong></h2>
                <p style={{fontSize:'.8rem',fontWeight:300,color:'#999',lineHeight:1.75,marginBottom:'32px',textAlign:'justify'}}>Suprafețe vitrate mari și durabilitate extremă pentru arhitectura contemporană. S77 Supreme · S67 Smartia · SF85.</p>
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
              <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.9rem',color:'#1a1a1a',lineHeight:1.2,marginBottom:'0',letterSpacing:'.01em'}}>Tâmplărie PVC Salamander<br/>și Aluminiu Alumil</h2>
            </div>
            <div/>
          </div>
          <div className="intro-grid-texts">
            <p style={{fontSize:'.82rem',fontWeight:300,color:'#999',lineHeight:1.75,textAlign:'justify'}}>
              Alegerea între <strong style={{color:'#1a1a1a',fontWeight:500}}>tâmplărie PVC Salamander</strong> și <strong style={{color:'#1a1a1a',fontWeight:500}}>tâmplărie aluminiu Alumil</strong> este definitorie pentru eficiența energetică a oricărei construcții moderne. La Neofort BIZ integrăm tehnologia de vârf cu designul minimalist pentru bariere termice de neegalat. Profilele noastre sunt certificate <strong style={{color:'#1a1a1a',fontWeight:500}}>nZEB (Nearly Zero Energy Building)</strong>, asigurând o economie reală la costurile de încălzire. Completăm fiecare instalare cu <strong style={{color:'#1a1a1a',fontWeight:500}}>precadre Blaugelb Triotherm+</strong>, <strong style={{color:'#1a1a1a',fontWeight:500}}>bandă butilică etanșare</strong>, <strong style={{color:'#1a1a1a',fontWeight:500}}>benzi etanșare vapori</strong> și <strong style={{color:'#1a1a1a',fontWeight:500}}>baghete warm-edge</strong> pentru un sistem termoizolator complet și durabil, conform standardelor europene.
            </p>
            <p style={{fontSize:'.82rem',fontWeight:300,color:'#999',lineHeight:1.75,textAlign:'justify'}}>
              Fie că optați pentru robustețea sistemelor de <strong style={{color:'#1a1a1a',fontWeight:500}}>aluminiu Alumil cu barieră termică</strong> sau pentru izolarea fonică superioară a <strong style={{color:'#1a1a1a',fontWeight:500}}>ferestrelor PVC Salamander</strong>, echipa noastră oferă consultanță tehnică dedicată și montaj profesional. Gama noastră include <strong style={{color:'#1a1a1a',fontWeight:500}}>geam termoizolator 2 foi</strong> și <strong style={{color:'#1a1a1a',fontWeight:500}}>geam termoizolator 3 foi</strong>, <strong style={{color:'#1a1a1a',fontWeight:500}}>profile de renovare</strong>, <strong style={{color:'#1a1a1a',fontWeight:500}}>pervazuri de interior și exterior</strong>, <strong style={{color:'#1a1a1a',fontWeight:500}}>jaluzele venețiene Raffstore</strong>, <strong style={{color:'#1a1a1a',fontWeight:500}}>rulouri exterioare aluminiu</strong>, <strong style={{color:'#1a1a1a',fontWeight:500}}>sisteme glisante</strong>, <strong style={{color:'#1a1a1a',fontWeight:500}}>uși de intrare premium</strong> și <strong style={{color:'#1a1a1a',fontWeight:500}}>uși de garaj</strong> — tot ce aveți nevoie pentru o locuință modernă, eficientă energetic și conformă cu cele mai exigente standarde de confort termic și fonic.
            </p>
          </div>
          <div className="stats-grid">
            {[['21+','Ani activitate neîntreruptă'],['nZEB','Certificate conformitate'],['50%+','Clienți recurenți'],['UE','Livrare Europa']].map(([n,l],i)=>(
              <div key={l} style={{padding:'24px 20px',textAlign:'center',borderRight:i<3?'1px solid #e8e8e8':'none'}}>
                <div style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.6rem',color:'#1a1a1a',lineHeight:1}}>{n}</div>
                <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#ccc',marginTop:'5px',lineHeight:1.3}}>{l}</div>
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
              {href:'tamplarie-pvc',topColor:'#4a7c59',tagColor:'#4a7c59',tag:'Tâmplărie PVC Salamander',title:'Profile PVC Salamander',desc:'Furnizăm tâmplărie PVC Salamander BluEvolution 92 și GreenEvolution 76 din gamele premium, executată pe linii automatizate și certificată nZEB.',btn:'card-btn card-btn-pvc'},
              {href:'tamplarie-aluminiu',topColor:'#2d5a8e',tagColor:'#2d5a8e',tag:'Tâmplărie Aluminiu Alumil',title:'Sisteme Aluminiu Alumil',desc:'Furnizăm aluminiu Alumil Supreme și Smartia — sisteme cu barieră termică pentru ferestre, uși, lifturi glisante și pereți cortină, certificate nZEB.',btn:'card-btn card-btn-aluminiu'},
              {href:'accesorii',topColor:'#e8721c',tagColor:'#e8721c',tag:'Accesorii pentru Tâmplărie',title:'Izolare Perimetrală',desc:'Bandă butilică, precadre Blaugelb Triotherm+, folie anticondens, rulouri aluminiu, jaluzele Raffstore, geam termopan Saint Gobain warm-edge.',btn:'card-btn card-btn-accesorii'},
            ].map(p=>(
              <Link key={p.href} href={p.href} className="prod-card" style={{borderTop:`3px solid ${p.topColor}`,textDecoration:'none'}}>
                <div style={{padding:'22px 22px 24px',display:'flex',flexDirection:'column',flex:1}}>
                  <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:p.tagColor,display:'block',marginBottom:'9px'}}>{p.tag}</span>
                  <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.95rem',color:'#1a1a1a',marginBottom:'9px',letterSpacing:'.02em'}}>{p.title}</h3>
                  <p style={{fontSize:'.76rem',fontWeight:300,color:'#999',lineHeight:1.7,flex:1,textAlign:'justify',marginBottom:'18px'}}>{p.desc}</p>
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
              <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'2rem',color:'#1a1a1a'}}>Etapele colaborării</h2>
            </div>
            <p style={{fontSize:'.78rem',fontWeight:300,color:'#bbb',maxWidth:'220px',textAlign:'right',lineHeight:1.6}}>Claritate în 3 pași. Specialiștii noștri vă însoțesc în fiecare etapă.</p>
          </div>
          <div className="steps-grid-home">
            {[
              {n:'01',title:'Elaborare ofertă',desc:'Transmiteți cererea prin formularul de contact, e-mail sau telefon & WhatsApp. Răspundem în aceeași zi lucrătoare.'},
              {n:'02',title:'Consultare & Măsurătoare',desc:'Stabilim configurația, tipul de profil, culoare, geam și accesorii. Programăm măsurătorile și elaborăm oferta finală.'},
              {n:'03',title:'Transport & Montaj',desc:'Fabricare 2–4 săptămâni, transport asigurat în toată UE, montaj profesional cu izolare perimetrală și certificat de garanție.'},
            ].map((s,i)=>(
              <div key={s.n} className="step-item" style={{padding:'36px 32px',borderRight:i<2?'1px solid #e8e8e8':'none'}}>
                <div style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:300,fontSize:'2.4rem',color:'#ebebeb',lineHeight:1,marginBottom:'20px'}}>{s.n}</div>
                <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.95rem',color:'#1a1a1a',marginBottom:'10px'}}>{s.title}</h3>
                <p style={{fontSize:'.78rem',fontWeight:300,color:'#999',lineHeight:1.7,textAlign:'justify'}}>{s.desc}</p>
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
              <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'2.2rem',color:'#1a1a1a',lineHeight:1.2}}>Calitate și angajamente<br/>fără compromisuri</h2>
            </div>
            <div className="why-cards-grid">
              {[
                {title:'Prețuri accesibile',desc:'Lucrăm permanent la raportul calitate–preț–utilitate și venim cu oferte câștigătoare.'},
                {title:'Soluții inovatoare',desc:'Profile Salamander, sisteme Alumil, soluții nZEB și izolare perimetrală avansată.'},
                {title:'Calitate garantată',desc:'Peste 50% din comenzi vin din recomandări sau de la clienți care revin constant.'},
                {title:'21 ani experiență',desc:'De peste două decenii activi în piața tâmplăriei PVC Salamander și aluminiu Alumil.'},
              ].map((item,i)=>(
                <div key={i} className="why-card-item" style={{padding:'20px 18px',borderTop:'1px solid #e8e8e8',borderRight:i%2===0?'1px solid #e8e8e8':'none'}}>
                  <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.8rem',letterSpacing:'.06em',textTransform:'uppercase',color:'#1a1a1a',marginBottom:'7px'}}>{item.title}</h3>
                  <p style={{fontSize:'.76rem',fontWeight:300,color:'#999',lineHeight:1.7,textAlign:'justify'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" style={{padding:'64px 0',background:'#111'}}>
        <div className="container">
          <div className="cta-inner-home">
            <div>
              <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#555',display:'block',marginBottom:'8px'}}>Contactați-ne</span>
              <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.7rem',color:'#fff',lineHeight:1.2}}>Solicitați o ofertă gratuită<br/>pentru tâmplărie PVC sau aluminiu</h2>
            </div>
            <div className="cta-btns-home">
              <Link href="contact" className="btn btn-green">CERERE OFERTĂ</Link>
              <a href="tel:+40752443435" className="btn btn-white">+40 752 443 435</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
