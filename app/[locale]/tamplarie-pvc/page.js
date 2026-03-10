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
  return (
    <>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">Tâmplărie PVC · Salamander</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">Profile PVC Salamander</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">
            Tehnologie germană. 6 sisteme disponibile — de la eficiența maximă BluEvolution 92 la soluții economice GreenEvolution 76.
          </p>
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
                  <Link href="/contact" className="card-btn hover:bg-pvc hover:border-pvc hover:text-white">
                    DETALII
                  </Link>
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
              <span className="sec-label">Expertiza Neofort BIZ în PVC</span>
              <p className="text-[0.88rem] text-muted leading-relaxed">
                Integrăm tehnologia de vârf cu designul minimalist pentru a oferi <strong className="text-primary font-medium">tâmplărie PVC Salamander</strong> cu bariere termice de neegalat. Profilele noastre sunt certificate pentru standardele <strong className="text-primary font-medium">nZEB</strong>, asigurând o economie reală la costurile de încălzire.
              </p>
            </div>
            <div>
              <p className="text-[0.88rem] text-muted leading-relaxed">
                Fie că optați pentru robustețea sistemului <strong className="text-primary font-medium">BluEvolution 92</strong> sau pentru versatilitatea gamei GreenEvolution, echipa Neofort BIZ asigură consultanță tehnică dedicată și montaj profesional în toată zona București–Ilfov.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#111]">
        <div className="container mx-auto px-6 flex flex-col items-center text-center gap-4 md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-condensed text-[0.6rem] tracking-[0.2em] uppercase text-gray-600 mb-2">{CTA_LABELS[locale]?.tag || CTA_LABELS.ro.tag}</p>
            <h2 className="font-condensed text-2xl md:text-3xl font-semibold text-white leading-tight">
              {CTA_LABELS[locale]?.h2a || CTA_LABELS.ro.h2a}{' '}
              <span className="underline decoration-1 underline-offset-4">{CTA_LABELS[locale]?.h2b || CTA_LABELS.ro.h2b}</span>{' '}
              {CTA_LABELS[locale]?.h2c || CTA_LABELS.ro.h2c}
            </h2>
          </div>
          <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-3 shrink-0">
            <Link href="/contact" className="bg-pvc text-white font-condensed text-[0.7rem] tracking-[0.18em] uppercase font-semibold px-8 py-4 hover:bg-green-700 transition-colors duration-200 text-center">
              {CTA_LABELS[locale]?.btn || CTA_LABELS.ro.btn}
            </Link>
            <a href="tel:+40752443435" className="border border-gray-700 text-gray-400 font-condensed text-[0.7rem] tracking-[0.18em] uppercase font-semibold px-8 py-4 hover:border-white hover:text-white transition-all duration-200 text-center">
              +40 752 443 435
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
