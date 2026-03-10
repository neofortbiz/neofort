import { Link } from '../../../i18n/navigation';
import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_ACCESORII = {'ro':'accesorii', 'en':'accessories', 'de':'zubehoer', 'fr':'accessoires', 'es':'accesorios', 'it':'accessori'};

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil', btn:'Cerere Ofertă' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows', btn:'Request Quote' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an', btn:'Angebot anfragen' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil', btn:'Demander un devis' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil', btn:'Pedir presupuesto' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil', btn:'Richiedi preventivo' },
};

const PAGE_UI = {
  ro: { label:'Accesorii · Neofort BIZ', h1:'Accesorii pentru tâmplărie', sub:'Soluții complete de izolare perimetrală, protecție solară, geam termoizolator și finisare pentru tâmplărie PVC și aluminiu.', btn_detail:'Detalii' },
  en: { label:'Accessories · Neofort BIZ', h1:'Window & Door Accessories', sub:'Complete solutions for perimeter insulation, solar protection, thermal glazing and finishing for PVC and aluminium windows.', btn_detail:'Details' },
  de: { label:'Zubehör · Neofort BIZ', h1:'Fenster- und Türzubehör', sub:'Komplettlösungen für Perimeterdämmung, Sonnenschutz, Wärmeschutzverglasung und Oberflächenveredelung für PVC- und Aluminiumfenster.', btn_detail:'Details' },
  fr: { label:'Accessoires · Neofort BIZ', h1:'Accessoires pour menuiseries', sub:'Solutions complètes d'isolation périphérique, protection solaire, vitrage thermique et finition pour fenêtres PVC et aluminium.', btn_detail:'Détails' },
  es: { label:'Accesorios · Neofort BIZ', h1:'Accesorios para carpintería', sub:'Soluciones completas de aislamiento perimetral, protección solar, acristalamiento térmico y acabado para ventanas PVC y aluminio.', btn_detail:'Detalles' },
  it: { label:'Accessori · Neofort BIZ', h1:'Accessori per infissi', sub:'Soluzioni complete di isolamento perimetrale, protezione solare, vetro termoisolante e finitura per infissi PVC e alluminio.', btn_detail:'Dettagli' },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'accesorii' });
  const slug = SLUGS_ACCESORII[locale] || SLUGS_ACCESORII.ro;
  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: {
        'ro': `${BASE}/ro/${SLUGS_ACCESORII.ro}`,
        'en': `${BASE}/en/${SLUGS_ACCESORII.en}`,
        'de': `${BASE}/de/${SLUGS_ACCESORII.de}`,
        'fr': `${BASE}/fr/${SLUGS_ACCESORII.fr}`,
        'es': `${BASE}/es/${SLUGS_ACCESORII.es}`,
        'it': `${BASE}/it/${SLUGS_ACCESORII.it}`,
        'x-default': `${BASE}/ro/${SLUGS_ACCESORII.ro}`,
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

const ACCESORII = [
  { slug:'rulouri-exterioare-aluminiu', color:'#e8721c', cat:'Protecție solară',
    name:'Rulouri exterioare aluminiu',
    specs:[['Material','Aluminiu extrudat'],['Acționare','Manual · Electric · Domotică'],['Culori','RAL · anodizat'],['Certificare','CE'],],
    desc:'Rulouri aluminiu integrate sau aplicate. Protecție solară, termică și fonică. Acționare manuală sau electrică.' },
  { slug:'jaluzele-venetiene-raffstore', color:'#e8721c', cat:'Protecție solară',
    name:'Jaluzele Raffstore',
    specs:[['Tip','Raffstore veneționane'],['Acționare','Electric · Domotică'],['Orientare','Lamelă orientabilă'],['Materiale','Aluminiu'],],
    desc:'Jaluzele cu lamelă orientabilă pentru control precis al luminii și protecție termică superioară.' },
  { slug:'blaugelb-triotherm', color:'#4a7c59', cat:'Izolare perimetrală',
    name:'Precadre Blaugelb Triotherm+',
    specs:[['Tip','Precadru de montaj'],['Izolare','Triotherm+ · VAP'],['Compatibilitate','PVC · Aluminiu'],['Certificare','RAL · DIBT'],],
    desc:'Sistem avansat de izolare perimetrală. Previne punțile termice la montaj și asigură etanșeitate completă.' },
  { slug:'banda-butilica-precomprimata', color:'#4a7c59', cat:'Izolare perimetrală',
    name:'Bandă butilică precomprimată',
    specs:[['Tip','Bandă precomprimată'],['Dilatare','10x – 20x'],['Rezistență','UV · apă · ciuperci'],['Culori','Antracit · gri'],],
    desc:'Etanșare exterioară la perete. Rezistentă la UV și apă, certificată pentru montaj profesional.' },
  { slug:'banda-antivapori', color:'#4a7c59', cat:'Izolare perimetrală',
    name:'Bandă antivapori interior',
    specs:[['Tip','Folie antivapori'],['Aplicare','Interior rostuire'],['Funcție','Stop condens · etanșare'],['Standard','RAL montaj'],],
    desc:'Folie autoadezivă pentru etanșarea interioară la vapori de apă. Elimină riscul de condens la rost.' },
  { slug:'bagheta-warm-edge', color:'#2d5a8e', cat:'Geam termoizolator',
    name:'Baghetă Warm Edge',
    specs:[['Tip','Distanțier termoizolant'],['Material','Compozit TPS · Superspacer'],['Efect','Elimină condens marginal'],['Îmbunătățire','Ug cu 8–12%'],],
    desc:'Înlocuiește distanțierul metalic clasic. Elimină condensul marginal și îmbunătățește eficiența geamului cu până la 12%.' },
  { slug:'toc-renovare', color:'#2d5a8e', cat:'Montaj renovare',
    name:'Toc de renovare',
    specs:[['Tip','Profil acoperire'],['Compatibilitate','PVC · Aluminiu'],['Funcție','Acoperire toc vechi'],['Avantaj','Fără demontare pervaz'],],
    desc:'Soluție pentru renovare fără demontarea tocului existent. Economie de timp și cost la înlocuirea ferestrelor.' },
  { slug:'pervazuri-glafuri', color:'#2d5a8e', cat:'Finisare',
    name:'Pervazuri & Glafuri PVC',
    specs:[['Material','PVC rigid'],['Culori','Alb · Antracit · Stejar'],['Aplicare','Interior · exterior'],['Finisaj','Mat · lucios'],],
    desc:'Pervazuri și glafuri PVC pentru finisare elegantă. Rezistente la umiditate, ușor de întreținut.' },
  { slug:'grila-aerisire', color:'#777', cat:'Ventilație',
    name:'Grilă aerisire feronerie',
    specs:[['Tip','Grilă înglobată în profil'],['Funcție','Ventilație naturală'],['Compatibilitate','PVC · Aluminiu'],['Estetic','Discretă, invizibilă'],],
    desc:'Grilă de aerisire integrată discret în profilele de fereastră. Asigură ventilație controlată fără pierderi termice majore.' },
  { slug:'geam-termopan-saint-gobain', color:'#2d5a8e', cat:'Geam termoizolator',
    name:'Geam termopan Saint Gobain',
    specs:[['Producător','Saint-Gobain SGG'],['Tip','Dublu · Triplu izolator'],['Emisivitate','Scăzută coating'],['Gaz','Argon · Kripton'],],
    desc:'Pachete de sticlă termoizolantă SGG CLIMATOP. Emisivitate scăzută și umplere cu argon pentru performanță maximă.' },
];

export default async function AccesoriiPage({ params }) {
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

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ACCESORII.map(a=>(
              <div key={a.slug} className="prod-card group">
                <div className="h-1 w-full" style={{background: a.color}}/>
                <div className="card-body">
                  <p className="text-[0.62rem] tracking-[0.2em] uppercase font-semibold font-condensed mb-3" style={{color: a.color}}>{a.cat}</p>
                  <h3 className="font-condensed text-[1.05rem] font-semibold text-primary mb-3 leading-snug">{a.name}</h3>
                  <ul className="card-specs">
                    {a.specs.map(([k,v])=>(
                      <li key={k}>· <strong>{k}:</strong> {v}</li>
                    ))}
                  </ul>
                  <p className="text-[0.78rem] text-muted leading-relaxed mb-4">{a.desc}</p>
                  <Link href="/contact" className="card-btn" style={{'--hover-bg': a.color}}>{ui.btn_detail}</Link>
                </div>
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
