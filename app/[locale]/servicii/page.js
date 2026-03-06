import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ServiciiPage({ params: { locale } }) {
  const t = useTranslations('nav');
  const steps = useTranslations('steps');

  return (
    <>
      <Header locale={locale} />
      <main>
        <section style={{ background: 'var(--primary)' }} className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '2.5rem' }}>{t('services')}</h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '2rem' }} className="mb-3 text-center">{steps('title')}</h2>
            <p className="text-center text-gray-500 mb-14">{steps('subtitle')}</p>

            <div className="space-y-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex gap-6 items-start">
                  <div style={{ background: 'var(--primary)', color: '#fff', minWidth: '3.5rem', height: '3.5rem', borderRadius: '50%', fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700 }}
                    className="flex items-center justify-center flex-shrink-0">
                    {n}
                  </div>
                  <div style={{ background: 'var(--light)' }} className="p-6 rounded-lg flex-1">
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }} className="text-lg mb-2">{steps(`step${n}.title`)}</h3>
                    <p className="text-gray-600">{steps(`step${n}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '1.8rem' }} className="mb-8">Serviciile noastre complete</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Montaj profesional', desc: 'Echipe specializate cu experiență vastă în montaj tâmplărie PVC și Aluminiu la orice nivel de complexitate.' },
                  { title: 'Măsurători gratuite', desc: 'Venim la locația dumneavoastră pentru măsurători precise și consultanță tehnică fără costuri suplimentare.' },
                  { title: 'Transport și ambalare', desc: 'Ambalare profesională și transport sigur în toată România și Comunitatea Europeană.' },
                  { title: 'Service post-vânzare', desc: 'Suport tehnic și service după instalare. Garanție pentru toate produsele și lucrările executate.' },
                ].map(item => (
                  <div key={item.title} className="border border-gray-100 rounded-lg p-6">
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }} className="text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href={`/${locale}/contact`}
                style={{ background: 'var(--primary)', color: '#fff' }}
                className="inline-block px-10 py-4 rounded font-semibold hover:opacity-90 transition-opacity">
                Solicită Ofertă
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
