import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function AccesoriiPage({ params: { locale } }) {
  const t = useTranslations('nav');

  const accessories = [
    { name: 'Bandă Butilică', desc: 'Etanșare de înaltă performanță la exterior. Impermeabilă și rezistentă UV.' },
    { name: 'Precadre Blaugelb Triotherm+', desc: 'Cel mai performant sistem de izolare perimetrală disponibil pe piață.' },
    { name: 'Folie Anticondens', desc: 'Folie de interior și exterior pentru prevenirea condensului și mucegaiului.' },
    { name: 'Baghete Warm Edge', desc: 'Distanțiere warm edge pentru geam termoizolator cu eficiență energetică îmbunătățită.' },
    { name: 'Pervazuri Interior', desc: 'Pervazuri PVC și aluminiu pentru interior în multiple culori și dimensiuni.' },
    { name: 'Pervazuri Exterior', desc: 'Pervazuri rezistente la intemperii pentru exterior, etanșe și durabile.' },
    { name: 'Jaluzele Venetiene Raffstore', desc: 'Jaluzele exterioare premium cu lamele orientabile pentru control lumină și intimitate.' },
    { name: 'Rulouri Exterioare Aluminiu', desc: 'Sisteme rulouri exterioare din aluminiu pentru protecție termică, fonică și securitate.' },
    { name: 'Profile de Renovare', desc: 'Profile speciale pentru montaj fără demontarea tâmplăriei vechi. Soluție rapidă și curată.' },
    { name: 'Sisteme Ventilație', desc: 'Sisteme de ventilație integrată pentru calitate aer interior optimă fără pierderi de căldură.' },
  ];

  return (
    <>
      <Header locale={locale} />
      <main>
        <section style={{ background: 'var(--primary)' }} className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '2.5rem' }}>{t('accessories')}</h1>
            <p className="text-gray-300 mt-3">Accesorii premium pentru tâmplărie PVC și Aluminiu</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessories.map((item) => (
                <div key={item.name} className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div style={{ color: 'var(--accent)', fontSize: '1.5rem' }} className="mb-3">⬡</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }} className="text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href={`/${locale}/contact`}
                style={{ background: 'var(--primary)', color: '#fff' }}
                className="inline-block px-10 py-4 rounded font-semibold hover:opacity-90 transition-opacity">
                Solicită Ofertă cu Accesorii
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
