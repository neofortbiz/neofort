import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  return { title: t('title'), description: t('description') };
}

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero — două coloane, ca site-ul de referință */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
        {/* PVC */}
        <Link href="tamplarie-pvc" className="group relative overflow-hidden bg-light flex flex-col justify-end p-12 md:p-16 border-r border-border min-h-64 hover:bg-pvc/5 transition-colors duration-500">
          <div className="absolute top-8 left-8 text-xs tracking-widest uppercase text-muted group-hover:text-pvc transition-colors duration-300">Tehnologie Germană</div>
          <div>
            <p className="text-xs tracking-widest uppercase text-pvc mb-3 font-medium">Salamander</p>
            <h2 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-4 group-hover:text-pvc transition-colors duration-300">
              Tâmplărie<br/><span className="font-light">PVC</span>
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-8 max-w-sm">
              Eficiență energetică nZEB și design atemporal pentru proiecte rezidențiale de top.
            </p>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-pvc border border-pvc px-6 py-3 group-hover:bg-pvc group-hover:text-white transition-all duration-300">
              Vezi Profile →
            </span>
          </div>
        </Link>

        {/* Aluminiu */}
        <Link href="tamplarie-aluminiu" className="group relative overflow-hidden bg-white flex flex-col justify-end p-12 md:p-16 min-h-64 hover:bg-aluminiu/5 transition-colors duration-500">
          <div className="absolute top-8 left-8 text-xs tracking-widest uppercase text-muted group-hover:text-aluminiu transition-colors duration-300">Arhitectură Modernă</div>
          <div>
            <p className="text-xs tracking-widest uppercase text-aluminiu mb-3 font-medium">Alumil</p>
            <h2 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-4 group-hover:text-aluminiu transition-colors duration-300">
              Tâmplărie<br/><span className="font-light">Aluminiu</span>
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-8 max-w-sm">
              Suprafețe vitrate mari și durabilitate extremă pentru arhitectura contemporană.
            </p>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-aluminiu border border-aluminiu px-6 py-3 group-hover:bg-aluminiu group-hover:text-white transition-all duration-300">
              Vezi Sisteme →
            </span>
          </div>
        </Link>
      </section>

      {/* Intro text — ca site-ul de referință */}
      <section className="py-20 border-t border-b border-border bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted mb-4">Excelență în Tâmplărie Termoizolantă</p>
              <h2 className="font-condensed text-3xl md:text-4xl font-semibold text-primary mb-6 leading-tight">
                Alegerea definitivă pentru<br/>eficiență energetică
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                La Neofort BIZ, integrăm tehnologia de vârf cu designul minimalist pentru a oferi bariere termice de neegalat. Profilele noastre sunt certificate pentru standardele <strong className="text-primary font-medium">nZEB</strong>, asigurând o economie reală la costurile de încălzire.
              </p>
            </div>
            <div>
              <p className="text-sm text-muted leading-relaxed">
                Fie că optezi pentru robustețea sistemelor <strong className="text-primary font-medium">Alumil Supreme</strong> sau pentru izolarea fonică superioară a <strong className="text-primary font-medium">PVC Salamander</strong>, echipa Neofort BIZ asigură consultanță tehnică dedicată și montaj profesional în toată zona București-Ilfov.
              </p>
              <div className="flex gap-8 mt-10 pt-8 border-t border-border">
                <div>
                  <div className="font-condensed text-3xl font-semibold text-primary">20+</div>
                  <div className="text-xs tracking-widest text-muted uppercase mt-1">Ani experiență</div>
                </div>
                <div>
                  <div className="font-condensed text-3xl font-semibold text-primary">6</div>
                  <div className="text-xs tracking-widest text-muted uppercase mt-1">Limbi</div>
                </div>
                <div>
                  <div className="font-condensed text-3xl font-semibold text-primary">EU</div>
                  <div className="text-xs tracking-widest text-muted uppercase mt-1">Livrare Europa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accesorii + Servicii — grid 3 col */}
      <section className="py-20 bg-light border-b border-border">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-muted mb-12">Servicii complete</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { href: 'accesorii', color: 'accesorii', label: 'Accesorii', title: 'Izolare & Accesorii Premium', desc: 'Rulouri aluminiu · Jaluzele Raffstore · Precadre Blaugelb · Geam Saint Gobain · Warm Edge' },
              { href: 'servicii', color: 'primary', label: 'Servicii', title: 'Montaj Profesional', desc: 'Măsurători gratuite · Montaj specializat · Izolare perimetrală · Garanție' },
              { href: 'contact', color: 'primary', label: 'Livrare', title: 'Transport European', desc: 'Livrare în toată UE · Ambalare profesională · Paletizare · Export' },
            ].map((item, i) => (
              <Link key={i} href={item.href}
                className={`group bg-white p-8 border border-border hover:border-${item.color} hover:shadow-lg transition-all duration-300 card-hover`}>
                <p className={`text-xs tracking-widest uppercase text-${item.color} mb-4 font-medium`}>{item.label}</p>
                <h3 className="font-condensed text-xl font-semibold text-primary mb-3 group-hover:text-primary">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                <div className={`mt-6 text-xs tracking-widest uppercase font-medium text-muted group-hover:text-${item.color} transition-colors duration-300`}>
                  Detalii →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-muted mb-12">{t('home.steps_title')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
            {[
              { n: '01', title: t('home.step1_title'), desc: t('home.step1_desc') },
              { n: '02', title: t('home.step2_title'), desc: t('home.step2_desc') },
              { n: '03', title: t('home.step3_title'), desc: t('home.step3_desc') },
            ].map((s, i) => (
              <div key={s.n} className={`p-8 md:p-10 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-border' : ''}`}>
                <div className="font-condensed text-5xl font-light text-border mb-6">{s.n}</div>
                <h3 className="font-condensed text-xl font-semibold text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">Contact</p>
            <h2 className="font-condensed text-3xl md:text-4xl font-semibold">Solicitați o ofertă gratuită</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="contact"
              className="bg-pvc text-white px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-green-700 transition-colors duration-300">
              Cerere Ofertă
            </Link>
            <a href="tel:+40752443435"
              className="border border-gray-600 text-gray-300 px-8 py-4 text-xs tracking-widest uppercase font-medium hover:border-white hover:text-white transition-all duration-300">
              +40 752 443 435
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
