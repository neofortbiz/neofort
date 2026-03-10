import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_CONTACT = {'ro':'contact', 'en':'contact', 'de':'kontakt', 'fr':'contact', 'es':'contacto', 'it':'contatti'};

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
  const t = await getTranslations({ locale, namespace: 'contact' });
  const slug = SLUGS_CONTACT[locale] || SLUGS_CONTACT.ro;
  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: {
        'ro': `${BASE}/ro/${SLUGS_CONTACT.ro}`,
        'en': `${BASE}/en/${SLUGS_CONTACT.en}`,
        'de': `${BASE}/de/${SLUGS_CONTACT.de}`,
        'fr': `${BASE}/fr/${SLUGS_CONTACT.fr}`,
        'es': `${BASE}/es/${SLUGS_CONTACT.es}`,
        'it': `${BASE}/it/${SLUGS_CONTACT.it}`,
        'x-default': `${BASE}/ro/${SLUGS_CONTACT.ro}`,
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

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">Neofort BIZ</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">Contact</h1>
          <p className="text-[0.9rem] text-muted">Răspundem în maxim 2 zile lucrătoare.</p>
        </div>
      </div>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <span className="sec-label">Cerere ofertă</span>
              <form className="space-y-5" action="mailto:oferte@neofort-biz.ro" method="get" encType="text/plain">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted mb-2">Nume *</label>
                    <input type="text" name="Nume" required className="w-full border border-border px-4 py-3 text-[0.88rem] text-primary bg-white focus:border-primary focus:outline-none transition-colors duration-200" placeholder="Numele dvs."/>
                  </div>
                  <div>
                    <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted mb-2">Telefon *</label>
                    <input type="tel" name="Telefon" required className="w-full border border-border px-4 py-3 text-[0.88rem] text-primary bg-white focus:border-primary focus:outline-none transition-colors duration-200" placeholder="+40 7xx xxx xxx"/>
                  </div>
                </div>
                <div>
                  <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted mb-2">E-mail</label>
                  <input type="email" name="Email" className="w-full border border-border px-4 py-3 text-[0.88rem] text-primary bg-white focus:border-primary focus:outline-none transition-colors duration-200" placeholder="email@exemplu.ro"/>
                </div>
                <div>
                  <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted mb-2">Tip produs</label>
                  <select name="Produs" className="w-full border border-border px-4 py-3 text-[0.88rem] text-primary bg-white focus:border-primary focus:outline-none transition-colors duration-200 appearance-none">
                    <option value="">Selectați...</option>
                    <option>Tâmplărie PVC Salamander</option>
                    <option>Tâmplărie Aluminiu Alumil</option>
                    <option>Accesorii</option>
                    <option>Montaj / Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted mb-2">Mesaj / Detalii cerere</label>
                  <textarea name="Mesaj" rows={5} className="w-full border border-border px-4 py-3 text-[0.88rem] text-primary bg-white focus:border-primary focus:outline-none transition-colors duration-200 resize-none" placeholder="Descrieți pe scurt necesarul de tâmplărie"/>
                </div>
                <button type="submit" className="btn-primary">Trimite cererea →</button>
              </form>
            </div>
            <div>
              <span className="sec-label">Date de contact</span>
              <div className="space-y-6">
                {[
                  { label:'Office', val:'+40 21 528 0661', href:'tel:+40215280661' },
                  { label:'Oferte', val:'+40 752 443 435', href:'tel:+40752443435' },
                  { label:'Export', val:'+40 752 443 439', href:'tel:+40752443439' },
                  { label:'Tehnic', val:'+40 752 443 431', href:'tel:+40752443431' },
                  { label:'Service', val:'+40 752 443 432', href:'tel:+40752443432' },
                  { label:'Programări', val:'+40 758 990 048', href:'tel:+40758990048' },
                ].map(c=>(
                  <div key={c.label} className="flex justify-between items-center border-b border-border pb-4">
                    <span className="text-[0.7rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted">{c.label}</span>
                    <a href={c.href} className="text-[0.88rem] text-primary hover:text-pvc transition-colors duration-200 font-medium">{c.val}</a>
                  </div>
                ))}
                <div className="border-t border-border pt-4 space-y-2">
                  {[['oferte@neofort-biz.ro','mailto:oferte@neofort-biz.ro'],['comenzi@neofort-biz.ro','mailto:comenzi@neofort-biz.ro'],['service@neofort-biz.ro','mailto:service@neofort-biz.ro']].map(([v,h])=>(
                    <div key={v}><a href={h} className="text-[0.82rem] text-muted hover:text-primary transition-colors duration-200">{v}</a></div>
                  ))}
                </div>
                <div className="border-t border-border pt-5">
                  <p className="text-[0.75rem] tracking-[0.12em] uppercase font-semibold font-condensed text-muted mb-2">Adresă</p>
                  <p className="text-[0.85rem] text-primary leading-relaxed">Str. Theodor Aman Pictor 11<br/>Sector 1, București 010776<br/>Romania</p>
                  <a href="https://maps.app.goo.gl/YcaANuqcmnzy14i1A" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted hover:text-primary transition-colors duration-200">Deschide în Maps →</a>
                </div>
              </div>
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
