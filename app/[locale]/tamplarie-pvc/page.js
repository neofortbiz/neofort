import { getTranslations } from 'next-intl/server';
import { Link } from '../../../i18n/navigation';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_TAMPLARIE_PVC = {'ro':'tamplarie-pvc', 'en':'pvc-windows', 'de':'kunststofffenster-pvc', 'fr':'menuiserie-pvc', 'es':'carpinteria-pvc', 'it':'infissi-pvc'};
const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil', btn:'Cerere Ofertă' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows', btn:'Request Quote' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an', btn:'Angebot anfragen' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil', btn:'Demander un devis' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil', btn:'Pedir presupuesto' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil', btn:'Richiedi preventivo' },
};

const PAGE_UI = {
  ro: { label:'Tâmplărie PVC · Salamander', h1:'Profile PVC Salamander', sub:'Tehnologie germană. 6 sisteme — de la eficiența maximă BluEvolution 92 la soluții economice GreenEvolution 76.', exp_label:'Expertiza Neofort BIZ în PVC', exp1:'Integrăm tehnologia de vârf cu designul minimalist pentru a oferi <strong>tâmplărie PVC Salamander</strong> cu bariere termice de neegalat. Profilele noastre sunt certificate <strong>nZEB</strong>, asigurând economii reale la costurile de încălzire.', exp2:'Fie că optați pentru robustețea sistemului <strong>BluEvolution 92</strong> sau pentru versatilitatea gamei GreenEvolution, echipa Neofort BIZ asigură consultanță tehnică și montaj profesional în toată zona București–Ilfov.', btn:'Cerere ofertă', btn_detail:'Detalii', cross_alu:'Tâmplărie Aluminiu Alumil', cross_acc:'Accesorii & Izolare Perimetrală' },
  en: { label:'PVC Windows · Salamander', h1:'Salamander PVC Profiles', sub:'German technology. 6 systems — from maximum efficiency BluEvolution 92 to economical GreenEvolution 76.', exp_label:'Neofort BIZ PVC Expertise', exp1:'We integrate cutting-edge technology with minimalist design to deliver <strong>Salamander PVC windows</strong> with unmatched thermal barriers. Our profiles are <strong>nZEB</strong> certified, ensuring real savings on heating costs.', exp2:'Whether you choose the robustness of <strong>BluEvolution 92</strong> or the versatility of GreenEvolution, Neofort BIZ provides dedicated technical consulting and professional installation across Bucharest.', btn:'Request quote', btn_detail:'Details', cross_alu:'Aluminium Alumil Windows', cross_acc:'Accessories & Perimeter Insulation' },
  de: { label:'PVC-Fenster · Salamander', h1:'Salamander PVC-Profile', sub:'Deutsche Technologie. 6 Systeme — von maximaler Effizienz BluEvolution 92 bis wirtschaftlichem GreenEvolution 76.', exp_label:'Neofort BIZ PVC-Expertise', exp1:'Wir verbinden modernste Technologie mit minimalistischem Design für <strong>Salamander PVC-Fenster</strong> mit unübertroffenen Wärmedämmwerten. Unsere Profile sind <strong>nZEB</strong>-zertifiziert.', exp2:'Ob Sie die Robustheit von <strong>BluEvolution 92</strong> oder die Vielseitigkeit der GreenEvolution-Reihe bevorzugen — Neofort BIZ bietet technische Beratung und Facheinbau in ganz Bukarest.', btn:'Angebot anfragen', btn_detail:'Details', cross_alu:'Fenêtres Aluminium Alumil', cross_acc:'Accessoires & Isolation Périphérique' },
  fr: { label:'Fenêtres PVC · Salamander', h1:'Profils PVC Salamander', sub:'Technologie allemande. 6 systèmes — de l\'efficacité maximale BluEvolution 92 aux solutions économiques GreenEvolution 76.', exp_label:'Expertise Neofort BIZ en PVC', exp1:'Nous intégrons la technologie de pointe au design minimaliste pour offrir des <strong>fenêtres PVC Salamander</strong> aux performances thermiques inégalées. Nos profils sont certifiés <strong>nZEB</strong>.', exp2:'Que vous optiez pour la robustesse du <strong>BluEvolution 92</strong> ou la polyvalence de la gamme GreenEvolution, Neofort BIZ assure conseil technique et pose professionnelle.', btn:'Demander un devis', btn_detail:'Détails', cross_alu:'Menuiserie Aluminium Alumil', cross_acc:'Accessoires & Isolation Périphérique' },
  es: { label:'Ventanas PVC · Salamander', h1:'Perfiles PVC Salamander', sub:'Tecnología alemana. 6 sistemas — desde la máxima eficiencia BluEvolution 92 hasta soluciones económicas GreenEvolution 76.', exp_label:'Experiencia Neofort BIZ en PVC', exp1:'Integramos tecnología punta con diseño minimalista para ofrecer <strong>ventanas PVC Salamander</strong> con barreras térmicas insuperables. Nuestros perfiles están certificados <strong>nZEB</strong>.', exp2:'Ya sea que opte por la robustez del <strong>BluEvolution 92</strong> o la versatilidad de la gama GreenEvolution, Neofort BIZ garantiza asesoría técnica e instalación profesional.', btn:'Pedir presupuesto', btn_detail:'Detalles', cross_alu:'Ventanas Aluminio Alumil', cross_acc:'Accesorios & Aislamiento Perimetral' },
  it: { label:'Infissi PVC · Salamander', h1:'Profili PVC Salamander', sub:'Tecnologia tedesca. 6 sistemi — dalla massima efficienza BluEvolution 92 alle soluzioni economiche GreenEvolution 76.', exp_label:'Competenza Neofort BIZ in PVC', exp1:'Integriamo tecnologia all\'avanguardia con design minimalista per offrire <strong>infissi PVC Salamander</strong> con barriere termiche insuperabili. I nostri profili sono certificati <strong>nZEB</strong>.', exp2:'Che scegliate la robustezza del <strong>BluEvolution 92</strong> o la versatilità della gamma GreenEvolution, Neofort BIZ garantisce consulenza tecnica e posa professionale.', btn:'Richiedi preventivo', btn_detail:'Dettagli', cross_alu:'Finestre Alluminio Alumil', cross_acc:'Accessori & Isolamento Perimetrale' },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pvc' });
  const slug = SLUGS_TAMPLARIE_PVC[locale] || SLUGS_TAMPLARIE_PVC.ro;
  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: {
        'ro': `${BASE}/ro/${SLUGS_TAMPLARIE_PVC.ro}`,
        'en': `${BASE}/en/${SLUGS_TAMPLARIE_PVC.en}`,
        'de': `${BASE}/de/${SLUGS_TAMPLARIE_PVC.de}`,
        'fr': `${BASE}/fr/${SLUGS_TAMPLARIE_PVC.fr}`,
        'es': `${BASE}/es/${SLUGS_TAMPLARIE_PVC.es}`,
        'it': `${BASE}/it/${SLUGS_TAMPLARIE_PVC.it}`,
        'x-default': `${BASE}/ro/${SLUGS_TAMPLARIE_PVC.ro}`,
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

const PVC_PRODUCTS = [
  {
    slug:'bluevolution92-placat',
    name:'Salamander BluEvolution 92',
    sub:'Profil PVC placat — 6 camere',
    specs:[
      ['Camere profil','6'],
      ['Adâncime construcție','92 mm'],
      ['Transfer termic Uw','0.70 W/m²K'],
      ['Protecție fonică','până la 47 dB'],
      ['Standard','nZEB · Pasivhaus'],
      ['Culori','Alb · Antracit · Stejar · 20+ folii'],
    ],
    desc:'Cel mai performant profil PVC Salamander. Geometrie asimetrică brevetată pentru izolare termică maximă. Certificat pentru construcții pasive.',
  },
  {
    slug:'bluevolution92-flex',
    name:'Salamander BluEvolution 92 Flex',
    sub:'Profil PVC flexibil — 6 camere',
    specs:[
      ['Camere profil','6'],
      ['Adâncime construcție','92 mm'],
      ['Transfer termic Uw','0.73 W/m²K'],
      ['Protecție fonică','până la 45 dB'],
      ['Standard','nZEB'],
      ['Culori','Alb · Antracit · Stejar · 20+ folii'],
    ],
    desc:'Profil flexibil pentru forme complexe și ferestre cu curburi. Aceeași performanță termică ca BluEvolution 92 standard.',
  },
  {
    slug:'bluevolution92-round',
    name:'Salamander BluEvolution 92 Round',
    sub:'Profil PVC rotunjit — 6 camere',
    specs:[
      ['Camere profil','6'],
      ['Adâncime construcție','92 mm'],
      ['Transfer termic Uw','0.73 W/m²K'],
      ['Protecție fonică','până la 45 dB'],
      ['Standard','nZEB'],
      ['Culori','Alb · Antracit · Stejar · 20+ folii'],
    ],
    desc:'Design cu muchii rotunjite, aspect modern și ergonomic. Ideal pentru proiecte rezidențiale contemporane.',
  },
  {
    slug:'greenevolution76-mdround',
    name:'Salamander GreenEvolution 76 MD Round',
    sub:'Profil PVC mediu — 5 camere',
    specs:[
      ['Camere profil','5'],
      ['Adâncime construcție','76 mm'],
      ['Transfer termic Uw','1.1 W/m²K'],
      ['Protecție fonică','până la 44 dB'],
      ['Standard','Reabilitare termică'],
      ['Culori','Alb · Antracit · Stejar'],
    ],
    desc:'Raport optim calitate–preț pentru renovări și reabilitări termice. Muchii rotunjite, aspect contemporan.',
  },
  {
    slug:'greenevolution76-mdflex',
    name:'Salamander GreenEvolution 76 MD Flex',
    sub:'Profil PVC mediu flexibil — 5 camere',
    specs:[
      ['Camere profil','5'],
      ['Adâncime construcție','76 mm'],
      ['Transfer termic Uw','1.1 W/m²K'],
      ['Protecție fonică','până la 43 dB'],
      ['Standard','Reabilitare termică'],
      ['Culori','Alb · Antracit · Stejar'],
    ],
    desc:'Flexibilitate pentru deschideri nestandard și renovări cu geometrii complexe.',
  },
  {
    slug:'greenevolution76-adflex',
    name:'Salamander GreenEvolution 76 AD Flex',
    sub:'Profil PVC economic — 5 camere',
    specs:[
      ['Camere profil','5'],
      ['Adâncime construcție','76 mm'],
      ['Transfer termic Uw','1.2 W/m²K'],
      ['Protecție fonică','până la 42 dB'],
      ['Standard','Standard'],
      ['Culori','Alb · Mahon · Stejar'],
    ],
    desc:'Soluție economică pentru proiecte cu buget controlat, fără a compromite calitatea Salamander.',
  },
];

export default async function TamplariePVCPage({ params }) {
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
            {PVC_PRODUCTS.map(p=>(
              <div key={p.slug} className="prod-card group">
                {/* placeholder imagine */}
                <div className="card-img">
                  <div className="text-center">
                    <div className="text-[0.6rem] tracking-[0.2em] uppercase font-condensed font-semibold text-pvc mb-1">Salamander</div>
                    <div className="font-condensed text-[0.72rem] font-semibold text-muted">{p.sub}</div>
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="font-condensed text-[1.1rem] font-semibold text-primary mb-1">{p.name}</h3>
                  <p className="text-[0.72rem] text-pvc font-semibold font-condensed tracking-wide mb-3">{p.sub}</p>
                  <ul className="card-specs">
                    {p.specs.map(([k,v])=>(
                      <li key={k}>· <strong>{k}:</strong> {v}</li>
                    ))}
                  </ul>
                  <p className="text-[0.78rem] text-muted leading-relaxed mb-4">{p.desc}</p>
                  <Link href="/contact" className="card-btn hover:bg-pvc hover:border-pvc hover:text-white">{ui.btn_detail}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertiza */}
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
            <Link href="/tamplarie-aluminiu" className="flex items-center justify-between border border-border bg-white px-5 py-4 hover:border-primary transition-colors duration-200 group">
              <div>
                <span className="font-condensed text-[0.58rem] tracking-[0.2em] uppercase font-semibold text-aluminiu block mb-1">Neofort BIZ</span>
                <span className="font-condensed text-[0.9rem] font-semibold text-primary group-hover:text-aluminiu transition-colors">{ui.cross_alu || 'Tâmplărie Aluminiu Alumil'}</span>
              </div>
              <span className="text-muted group-hover:text-aluminiu transition-colors">→</span>
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
