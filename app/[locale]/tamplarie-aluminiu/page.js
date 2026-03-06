import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function AluminiuPage({ params: { locale } }) {
  const t = useTranslations('nav');

  const products = [
    { name: 'Ferestre Aluminiu Alumil', desc: 'Profile premium Alumil cu izolare termică superioară. Disponibile în multiple configurații și culori RAL.', specs: ['Rupere de punte termică', 'Sticlă triplu strat', 'Certificare CE'] },
    { name: 'Uși Aluminiu', desc: 'Uși de intrare și interior din aluminiu. Rezistente, elegante, cu multiple sisteme de blocare.', specs: ['Anti-efracție', 'Izolare fonică', 'Design personalizabil'] },
    { name: 'Pereți Cortină', desc: 'Sisteme de pereți cortină pentru clădiri comerciale și rezidențiale. Soluții arhitecturale moderne.', specs: ['Structură ușoară', 'Suprafețe mari vitrate', 'Certificare la vânt'] },
    { name: 'Sisteme Culisante', desc: 'Uși și ferestre culisante pentru terase, balcoane și spații comerciale.', specs: ['Glisare ușoară', 'Etanșeitate ridicată', 'Format mare disponibil'] },
  ];

  return (
    <>
      <Header locale={locale} />
      <main>
        <section style={{ background: 'var(--primary)' }} className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-sm text-gray-400 mb-2">
              <Link href={`/${locale}`} className="hover:text-white">Acasă</Link> / {t('aluminium')}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '2.5rem' }}>{t('aluminium')}</h1>
            <p className="text-gray-300 mt-3 max-w-xl">Sisteme premium din alumin Alumil — soluții pentru orice tip de construcție rezidențială sau comercială.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Brand highlight */}
            <div style={{ background: 'var(--light)', borderLeft: '4px solid var(--accent)' }} className="p-6 rounded mb-12">
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }} className="text-xl mb-2">Partener oficial Alumil</h2>
              <p className="text-gray-600 text-sm">Furnizăm exclusiv profile Alumil — lider european în producția de sisteme din aluminiu pentru construcții.</p>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((p) => (
                <div key={p.name} className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '1.2rem' }} className="mb-3">{p.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <ul className="space-y-1">
                    {p.specs.map(s => (
                      <li key={s} className="text-sm text-gray-500 flex items-center gap-2">
                        <span style={{ color: 'var(--accent)' }}>✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href={`/${locale}/contact`}
                style={{ background: 'var(--primary)', color: '#fff' }}
                className="inline-block px-10 py-4 rounded font-semibold hover:opacity-90 transition-opacity">
                Solicită Ofertă Aluminiu
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
