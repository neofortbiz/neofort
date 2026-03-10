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
  return (
    <>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">Tâmplărie Aluminiu · Alumil</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">Profile Aluminiu Alumil</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">
            Arhitectură modernă. 6 sisteme disponibile — de la ferestre și uși premium la pereți cortină pentru fațade de mari dimensiuni.
          </p>
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
                  <Link href="/contact" className="card-btn hover:bg-aluminiu hover:border-aluminiu hover:text-white">
                    DETALII
                  </Link>
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
              <span className="sec-label">Expertiza Neofort BIZ în Aluminiu</span>
              <p className="text-[0.88rem] text-muted leading-relaxed">
                Furnizăm <strong className="text-primary font-medium">tâmplărie aluminiu Alumil</strong> din gamele premium, executată pe linii de producție automatizate. Fie că optați pentru sistemele <strong className="text-primary font-medium">Alumil Supreme</strong> sau pentru versatilitatea Smartia, asigurăm consultanță tehnică și montaj profesional.
              </p>
            </div>
            <div>
              <p className="text-[0.88rem] text-muted leading-relaxed">
                Profilele de aluminiu Alumil cu barieră termică sunt certificate pentru standardele <strong className="text-primary font-medium">nZEB</strong>. Suprafețe vitrate mari, durabilitate extremă și design contemporan pentru orice tip de proiect — rezidențial, comercial sau industrial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO BRIDGE ── */}
      <section aria-label={CTA_LABELS[locale]?.tag || CTA_LABELS.ro.tag} style={{background:'#111',padding:'0'}}>
        <div className="container" style={{paddingTop:'32px',paddingBottom:'32px',borderTop:'1px solid #1e1e1e'}}>
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#444',marginBottom:'0',textAlign:'center'}}>
            {CTA_LABELS[locale]?.h2a || CTA_LABELS.ro.h2a}{' '}
            <Link href="/contact" style={{color:'#555',textDecoration:'underline'}}>{CTA_LABELS[locale]?.h2b || CTA_LABELS.ro.h2b}</Link>
            {' '}{CTA_LABELS[locale]?.h2c || CTA_LABELS.ro.h2c}
          </p>
        </div>
      </section>
    </>
  );
}
