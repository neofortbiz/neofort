import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_GDPR = {ro:'gdpr',en:'privacy-policy',de:'datenschutz',fr:'politique-confidentialite',es:'politica-privacidad',it:'informativa-privacy'};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const slug = SLUGS_GDPR[locale] || SLUGS_GDPR.ro;
  return {
    title: 'GDPR · Neofort BIZ',
    description: 'Politica de confidențialitate și prelucrarea datelor cu caracter personal.',
    robots: { index: false, follow: false },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: Object.fromEntries(Object.entries(SLUGS_GDPR).map(([l,s])=>[l,`${BASE}/${l}/${s}`])),
    },
  };
}

export default function GdprPage() {
  return (
    <>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">Neofort BIZ</span>
          <h1 className="font-condensed text-4xl font-semibold text-primary mb-3">Politica GDPR</h1>
          <p className="text-[0.9rem] text-muted">Prelucrarea datelor cu caracter personal conform Regulamentului UE 2016/679.</p>
        </div>
      </div>
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-sm max-w-none space-y-8 text-[0.88rem] text-muted leading-relaxed">
            <div>
              <h2 className="font-condensed text-xl font-semibold text-primary mb-3">1. Operator de date</h2>
              <p>Neofort BIZ, Str. Theodor Aman Pictor 11, Sector 1, București 010776, România. E-mail: oferte@neofort-biz.ro</p>
            </div>
            <div>
              <h2 className="font-condensed text-xl font-semibold text-primary mb-3">2. Date colectate</h2>
              <p>Colectăm datele furnizate voluntar prin formularul de contact: nume, telefon, adresă de e-mail, detalii cerere. Nu colectăm date sensibile.</p>
            </div>
            <div>
              <h2 className="font-condensed text-xl font-semibold text-primary mb-3">3. Scopul prelucrării</h2>
              <p>Datele sunt utilizate exclusiv pentru elaborarea ofertelor solicitate, comunicarea comercială aferentă și executarea contractelor.</p>
            </div>
            <div>
              <h2 className="font-condensed text-xl font-semibold text-primary mb-3">4. Drepturile persoanei vizate</h2>
              <p>Aveți dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție. Cererea se transmite la oferte@neofort-biz.ro.</p>
            </div>
            <div>
              <h2 className="font-condensed text-xl font-semibold text-primary mb-3">5. Stocare și securitate</h2>
              <p>Datele sunt stocate pe servere securizate în UE și nu sunt transferate către terți în afara UE fără consimțământul explicit al persoanei vizate.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
