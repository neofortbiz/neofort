import { Link } from '../../../i18n/navigation';
import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_TAMPLARIE_ALUMINIU = {'ro':'tamplarie-aluminiu', 'en':'aluminium-windows', 'de':'aluminiumfenster', 'fr':'menuiserie-aluminium', 'es':'carpinteria-aluminio', 'it':'infissi-alluminio'};

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil', btn:'Cerere Ofertă' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows', btn:'Request Quote' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an', btn:'Angebot anfragen' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil', btn:'Demander un devis' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil', btn:'Pedir presupuesto' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil', btn:'Richiedi preventivo' },
};

const PAGE_UI = {
  ro: { label:'Tâmplărie Aluminiu · Alumil', h1:'Profile Aluminiu Alumil', sub:'Arhitectură modernă. 6 sisteme — de la ferestre și uși premium până la pereți cortină pentru fațade mari.', exp_label:'Expertiza Neofort BIZ în Aluminiu', exp1:'Furnizăm <strong>tâmplărie aluminiu Alumil</strong> din gamele premium, executată pe linii de producție automatizate. Fie că optați pentru sistemele <strong>Alumil Supreme</strong> sau pentru versatilitatea Smartia, asigurăm consultanță tehnică și montaj profesional.', exp2:'Profilele de aluminiu Alumil cu barieră termică sunt certificate pentru standardele <strong>nZEB</strong>. Suprafețe vitrate mari, durabilitate extremă și design contemporan pentru orice tip de proiect — rezidențial, comercial sau industrial.', btn_detail:'Detalii', cross_pvc:'Tâmplărie PVC Salamander', cross_acc:'Accesorii & Izolare Perimetrală' },
  en: { label:'Aluminium Windows · Alumil', h1:'Alumil Aluminium Profiles', sub:'Modern architecture. 6 systems — from premium windows and doors to curtain walls for large facades.', exp_label:'Neofort BIZ Aluminium Expertise', exp1:'We supply <strong>Alumil aluminium windows</strong> from premium ranges, manufactured on automated production lines. Whether you choose <strong>Alumil Supreme</strong> systems or the versatile Smartia range, we provide technical advice and professional installation.', exp2:'Alumil aluminium profiles with thermal barrier are <strong>nZEB</strong> certified. Large glazed surfaces, extreme durability and contemporary design for any project type — residential, commercial or industrial.', btn_detail:'Details', cross_pvc:'Salamander PVC Windows', cross_acc:'Accessories & Perimeter Insulation' },
  de: { label:'Aluminiumfenster · Alumil', h1:'Alumil Aluminium-Profile', sub:'Moderne Architektur. 6 Systeme — von Premium-Fenstern und -Türen bis hin zu Vorhangfassaden für große Fassaden.', exp_label:'Neofort BIZ Aluminium-Expertise', exp1:'Wir liefern <strong>Alumil Aluminiumfenster</strong> aus Premium-Sortimenten, gefertigt auf automatisierten Produktionslinien. Ob <strong>Alumil Supreme</strong>-Systeme oder die vielseitige Smartia-Reihe — wir bieten Fachberatung und professionellen Einbau.', exp2:'Alumil-Aluminiumprofile mit Wärmedämmbrücke sind <strong>nZEB</strong>-zertifiziert. Große Glasflächen, extreme Langlebigkeit und zeitgemäßes Design für jede Projektart.', btn_detail:'Details', cross_pvc:'Fenêtres PVC Salamander', cross_acc:'Accessoires & Isolation Périphérique' },
  fr: { label:'Menuiserie Aluminium · Alumil', h1:'Profils Aluminium Alumil', sub:'Architecture moderne. 6 systèmes — des fenêtres et portes premium aux murs-rideaux pour grandes façades.', exp_label:'Expertise Neofort BIZ en Aluminium', exp1:'Nous fournissons des <strong>menuiseries aluminium Alumil</strong> des gammes premium, fabriquées sur lignes de production automatisées. Systèmes <strong>Alumil Supreme</strong> ou gamme Smartia — conseil technique et pose professionnelle assurés.', exp2:'Les profils aluminium Alumil à rupture de pont thermique sont certifiés <strong>nZEB</strong>. Grandes surfaces vitrées, durabilité extrême et design contemporain pour tout type de projet.', btn_detail:'Détails', cross_pvc:'Menuiserie PVC Salamander', cross_acc:'Accessoires & Isolation' },
  es: { label:'Carpintería Aluminio · Alumil', h1:'Perfiles Aluminio Alumil', sub:'Arquitectura moderna. 6 sistemas — desde ventanas y puertas premium hasta muros cortina para grandes fachadas.', exp_label:'Experiencia Neofort BIZ en Aluminio', exp1:'Suministramos <strong>carpintería aluminio Alumil</strong> de gamas premium, fabricada en líneas de producción automatizadas. Sistemas <strong>Alumil Supreme</strong> o gama Smartia — asesoría técnica e instalación profesional garantizadas.', exp2:'Los perfiles de aluminio Alumil con rotura de puente térmico están certificados <strong>nZEB</strong>. Grandes superficies acristaladas, durabilidad extrema y diseño contemporáneo para todo tipo de proyecto.', btn_detail:'Detalles', cross_pvc:'Ventanas PVC Salamander', cross_acc:'Accesorios & Aislamiento Perimetral' },
  it: { label:'Infissi Alluminio · Alumil', h1:'Profili Alluminio Alumil', sub:'Architettura moderna. 6 sistemi — da finestre e porte premium a facciate continue per grandi edifici.', exp_label:'Competenza Neofort BIZ in Alluminio', exp1:'Forniamo <strong>infissi alluminio Alumil</strong> delle gamme premium, prodotti su linee di produzione automatizzate. Sistemi <strong>Alumil Supreme</strong> o gamma Smartia — consulenza tecnica e posa professionale garantite.', exp2:'I profili in alluminio Alumil con taglio termico sono certificati <strong>nZEB</strong>. Grandi superfici vetrate, estrema durabilità e design contemporaneo per ogni tipo di progetto.', btn_detail:'Dettagli', cross_pvc:'Finestre PVC Salamander', cross_acc:'Accessori & Isolamento Perimetrale' },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aluminiu' });
  const slug = SLUGS_TAMPLARIE_ALUMINIU[locale] || SLUGS_TAMPLARIE_ALUMINIU.ro;
  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: {
        'ro': `${BASE}/ro/${SLUGS_TAMPLARIE_ALUMINIU.ro}`,
        'en': `${BASE}/en/${SLUGS_TAMPLARIE_ALUMINIU.en}`,
        'de': `${BASE}/de/${SLUGS_TAMPLARIE_ALUMINIU.de}`,
        'fr': `${BASE}/fr/${SLUGS_TAMPLARIE_ALUMINIU.fr}`,
        'es': `${BASE}/es/${SLUGS_TAMPLARIE_ALUMINIU.es}`,
        'it': `${BASE}/it/${SLUGS_TAMPLARIE_ALUMINIU.it}`,
        'x-default': `${BASE}/ro/${SLUGS_TAMPLARIE_ALUMINIU.ro}`,
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
  };
}

const ALU_PRODUCTS = [
  {
    slug:'s77',
    name:'Alumil S77 Supreme',
    sub:'Ferestre și uși · aluminiu',
    specs:[
      ['Sistem','Ferestre și uși aluminiu'],
      ['Barieră termică','40 mm'],
      ['Transfer Uw','0.85 W/m²K'],
      ['Protecție fonică','42 dB'],
      ['Standard','nZEB'],
      ['Culori','RAL standard · pudrat'],
    ],
    desc:'Cel mai performant sistem de ferestre și uși din aluminiu Alumil. Barieră termică 40 mm, performanțe superioare pentru proiecte premium.',
  },
  {
    slug:'s67',
    name:'Alumil S67 Smartia',
    sub:'Ferestre și uși · aluminiu',
    specs:[
      ['Sistem','Ferestre și uși aluminiu'],
      ['Barieră termică','30 mm'],
      ['Transfer Uw','1.1 W/m²K'],
      ['Protecție fonică','45 dB'],
      ['Standard','nZEB'],
      ['Culori','RAL standard · pudrat'],
    ],
    desc:'Sistem versatil pentru ferestre și uși cu izolare fonică superioară de 45 dB. Ideal pentru medii urbane cu zgomot ridicat.',
  },
  {
    slug:'s700',
    name:'Alumil S700 Supreme',
    sub:'Lifturi glisante · aluminiu',
    specs:[
      ['Sistem','Lifturi glisante aluminiu'],
      ['Barieră termică','Kooltherm'],
      ['Etanșare','Perii tri-fin'],
      ['Transfer','1.1 W/m²K'],
      ['Deschidere','Glisare ușoară'],
      ['Dimensiuni','Foi mari posibile'],
    ],
    desc:'Sisteme de glisare cu foi mari de sticlă, barieră termică Kooltherm și etanșare tri-fin. Acces facil la terase și grădini.',
  },
  {
    slug:'s350',
    name:'Alumil S350',
    sub:'Uși de intrare · aluminiu',
    specs:[
      ['Sistem','Uși de intrare aluminiu'],
      ['Construcție','Profil robust 70 mm'],
      ['Securitate','Nivel înalt'],
      ['Finisaj','Pudrat sau anodizat'],
      ['Accesorii','Feronerie premium'],
      ['Culori','Orice RAL'],
    ],
    desc:'Uși de intrare cu profil robust și nivel înalt de securitate. Design contemporan, finisaje premium anodizate sau pudrate.',
  },
  {
    slug:'sf85',
    name:'Alumil SF85',
    sub:'Ferestre și uși · performanță înaltă',
    specs:[
      ['Sistem','Ferestre + uși aluminiu'],
      ['Adâncime','85 mm'],
      ['Transfer Uw','0.75 W/m²K'],
      ['Protecție fonică','până la 47 dB'],
      ['Standard','Pasivhaus · nZEB'],
      ['Culori','Orice RAL · anodizat'],
    ],
    desc:'Sistem cu adâncime 85 mm pentru performanțe Pasivhaus. Cel mai bun transfer termic din gama Alumil.',
  },
  {
    slug:'m19800',
    name:'Alumil M19800',
    sub:'Pereți cortină · aluminiu',
    specs:[
      ['Sistem','Pereți cortină · fațade'],
      ['Tip','Structural · semi-structural'],
      ['Aplicații','Clădiri comerciale · birouri'],
      ['Finisaj','Anodizat · pudrat · PVDF'],
      ['Certificare','CE · EN 13830'],
      ['Proiecte','Mari dimensiuni'],
    ],
    desc:'Sistem de pereți cortină pentru fațade de mari dimensiuni. Aplicabil la clădiri de birouri, comerciale și rezidențiale înalte.',
  },
];

export default async function TamplaieAluminiuPage({ params }) {
  const { locale } = await params;
  const ui = PAGE_UI[locale] || PAGE_UI.ro;
  return (
    <>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">{ui.sub}</p>
        </div>
      </div>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ALU_PRODUCTS.map(p=>(
              <div key={p.slug} className="prod-card group">
                <div className="card-img">
                  <div className="text-center">
                    <div className="text-[0.6rem] tracking-[0.2em] uppercase font-condensed font-semibold text-aluminiu mb-1">Alumil</div>
                    <div className="font-condensed text-[0.72rem] font-semibold text-muted">{p.sub}</div>
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="font-condensed text-[1.1rem] font-semibold text-primary mb-1">{p.name}</h3>
                  <p className="text-[0.72rem] text-aluminiu font-semibold font-condensed tracking-wide mb-3">{p.sub}</p>
                  <ul className="card-specs">
                    {p.specs.map(([k,v])=>(
                      <li key={k}>· <strong>{k}:</strong> {v}</li>
                    ))}
                  </ul>
                  <p className="text-[0.78rem] text-muted leading-relaxed mb-4">{p.desc}</p>
                  <Link href="/contact" className="card-btn hover:bg-aluminiu hover:border-aluminiu hover:text-white">{ui.btn_detail}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="sec-label">{ui.exp_label}</span>
              <p className="text-[0.88rem] text-muted leading-relaxed" dangerouslySetInnerHTML={{__html: ui.exp1}}/>
            </div>
            <div>
              <p className="text-[0.88rem] text-muted leading-relaxed" dangerouslySetInnerHTML={{__html: ui.exp2}}/>
            </div>
          </div>
        </div>
      </section>


      {/* ── CROSS-LINKS ── */}
      <section className="py-10 border-b border-border bg-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/tamplarie-pvc" className="flex items-center justify-between border border-border bg-white px-5 py-4 hover:border-primary transition-colors duration-200 group">
              <div>
                <span className="font-condensed text-[0.58rem] tracking-[0.2em] uppercase font-semibold text-pvc block mb-1">Neofort BIZ</span>
                <span className="font-condensed text-[0.9rem] font-semibold text-primary group-hover:text-pvc transition-colors">{ui.cross_pvc || 'Tâmplărie PVC Salamander'}</span>
              </div>
              <span className="text-muted group-hover:text-pvc transition-colors">→</span>
            </Link>
            <Link href="/accesorii" className="flex items-center justify-between border border-border bg-white px-5 py-4 hover:border-primary transition-colors duration-200 group">
              <div>
                <span className="font-condensed text-[0.58rem] tracking-[0.2em] uppercase font-semibold text-accesorii block mb-1">Neofort BIZ</span>
                <span className="font-condensed text-[0.9rem] font-semibold text-primary group-hover:text-accesorii transition-colors">{ui.cross_acc || 'Accesorii & Izolare'}</span>
              </div>
              <span className="text-muted group-hover:text-accesorii transition-colors">→</span>
            </Link>
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
