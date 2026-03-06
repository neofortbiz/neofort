import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pvc' });
  return { title: t('title'), description: t('description') };
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

export default function TamplariePVCPage() {
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
                  <a href="../contact" className="card-btn hover:bg-pvc hover:border-pvc hover:text-white">
                    DETALII
                  </a>
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
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="font-condensed text-2xl md:text-3xl font-semibold text-white">Cereți ofertă pentru tâmplărie PVC</h2>
          <a href="../contact" className="bg-pvc text-white font-condensed text-[0.7rem] tracking-[0.18em] uppercase font-semibold px-8 py-4 hover:bg-green-700 transition-colors duration-200 shrink-0">
            Cerere Ofertă
          </a>
        </div>
      </section>
    </>
  );
}
