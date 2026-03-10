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
