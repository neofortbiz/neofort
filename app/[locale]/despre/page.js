import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function DesprePage({ params: { locale } }) {
  const t = useTranslations('nav');

  return (
    <>
      <Header locale={locale} />
      <main>
        <section style={{ background: 'var(--primary)' }} className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '2.5rem' }}>{t('about')}</h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
              {[
                { nr: '20+', label: 'Ani de experiență' },
                { nr: '50%+', label: 'Clienți care revin' },
                { nr: '6', label: 'Limbi de suport' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <div style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '3rem', fontWeight: 700 }}>{item.nr}</div>
                  <div className="text-gray-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '1.8rem' }} className="mb-6">Povestea Neofort</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>De aproape două decenii, Neofort BIZ este un nume de referință pe piața tâmplăriei PVC și Aluminiu din România. Fondat cu scopul de a aduce pe piața locală cele mai performante sisteme de ferestre și uși europene, compania a crescut constant, devenind un partener de încredere atât pentru clienți individuali cât și pentru companii de construcții.</p>
              <p>Lucrăm exclusiv cu mărci premium: <strong>Salamander</strong> (Germania) pentru tâmplăria PVC și <strong>Alumil</strong> pentru sistemele din aluminiu. Această alegere reflectă angajamentul nostru față de calitate și durabilitate.</p>
              <p>Producem în una dintre cele mai moderne fabrici de termopane din România, pe linii de producție automatizate, garantând precizie și calitate pentru fiecare comandă. Livrăm în toată România și în Comunitatea Europeană.</p>
            </div>

            <div style={{ background: 'var(--light)', borderLeft: '4px solid var(--primary)' }} className="p-6 rounded mt-10">
              <p className="text-gray-700 italic">"Prioritatea noastră principală este înțelegerea nevoilor și cerințelor clientului, iar cel mai bun răspuns vine din partea unor specialiști bine pregătiți."</p>
            </div>

            <div className="text-center mt-12">
              <Link href={`/${locale}/contact`}
                style={{ background: 'var(--primary)', color: '#fff' }}
                className="inline-block px-10 py-4 rounded font-semibold hover:opacity-90 transition-opacity">
                Contactează-ne
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
