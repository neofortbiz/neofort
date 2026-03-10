import { getTranslations } from 'next-intl/server';
import { Link } from '../../../i18n/navigation';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_DESPRE = {'ro':'despre', 'en':'about', 'de':'ueber-uns', 'fr':'a-propos', 'es':'sobre-nosotros', 'it':'chi-siamo'};

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
  const t = await getTranslations({ locale, namespace: 'despre' });
  const slug = SLUGS_DESPRE[locale] || SLUGS_DESPRE.ro;
  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: {
        'ro': `${BASE}/ro/${SLUGS_DESPRE.ro}`,
        'en': `${BASE}/en/${SLUGS_DESPRE.en}`,
        'de': `${BASE}/de/${SLUGS_DESPRE.de}`,
        'fr': `${BASE}/fr/${SLUGS_DESPRE.fr}`,
        'es': `${BASE}/es/${SLUGS_DESPRE.es}`,
        'it': `${BASE}/it/${SLUGS_DESPRE.it}`,
        'x-default': `${BASE}/ro/${SLUGS_DESPRE.ro}`,
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

export default async function DesprePage({ params }) {
  const { locale } = await params;
  return (
    <>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">Neofort BIZ</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">Despre noi</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">21 ani de experiență neîntreruptă în tâmplărie PVC și aluminiu.</p>
        </div>
      </div>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="sec-label">Cine suntem</span>
              <h2 className="font-condensed text-3xl font-semibold text-primary mb-6">Specialiști în tâmplărie PVC Salamander și aluminiu Alumil</h2>
              <p className="text-[0.88rem] text-muted leading-relaxed mb-4">
                Neofort BIZ este unul dintre furnizorii de referință de tâmplărie PVC și aluminiu din România, cu o activitate neîntreruptă de aproape două decenii. Furnizăm tâmplărie Aluminiu și PVC din gamele premium ale mărcilor <strong className="text-primary font-medium">Salamander</strong> și <strong className="text-primary font-medium">Alumil</strong>, executată pe linii de producție automatizate.
              </p>
              <p className="text-[0.88rem] text-muted leading-relaxed mb-4">
                Produsele și serviciile noastre au ajuns în toată UE și sunt recunoscute pentru calitatea lor ireproșabilă și prețurile competitive. Cu Neofort, aveți garanția unui raport excelent între calitate, utilitate și preț.
              </p>
              <p className="text-[0.88rem] text-muted leading-relaxed">
                Marca Neofort este înregistrată la O.S.I.M. sub nr. <strong className="text-primary font-medium">M 2014 05130</strong>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { n:'20+', l:'Ani pe piață' },
                { n:'50%+', l:'Clienți fideli' },
                { n:'UE',   l:'Livrare europeană' },
                { n:'6',    l:'Limbi suport' },
              ].map(({n,l})=>(
                <div key={l} className="border border-border p-8 flex flex-col justify-center">
                  <div className="font-condensed text-4xl font-semibold text-primary">{n}</div>
                  <div className="text-[0.7rem] tracking-[0.15em] text-muted uppercase mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light border-b border-border">
        <div className="container mx-auto px-6">
          <span className="sec-label">Valorile noastre</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-4">
            {[
              { title:'Prețuri competitive',    desc:'Lucrăm permanent la raportul calitate–preț–utilitate.' },
              { title:'Consultanță inovatoare', desc:'Cele mai noi și performante soluții tehnice din domeniu.' },
              { title:'Calitate garantată',     desc:'Garanție completă pe produse și montaj, fără compromisuri.' },
              { title:'Experiență dovedită',    desc:'De aproape două decenii prezent pe piața tâmplăriei premium.' },
            ].map((item,i)=>(
              <div key={i} className="bg-white border border-border p-7">
                <h3 className="font-condensed text-[1rem] font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-[0.8rem] text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
