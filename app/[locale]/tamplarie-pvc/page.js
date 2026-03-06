import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function PVCPage({ params: { locale } }) {
  const t = useTranslations('nav');

  const products = [
    { name: 'Ferestre PVC Salamander', desc: 'Profile Salamander cu 5, 6 sau 7 camere de izolare. Eficiență energetică maximă și durabilitate pe termen lung.', specs: ['5-7 camere de izolare', 'Clasa A energetică', 'Garanție 10 ani'] },
    { name: 'Uși PVC', desc: 'Uși de intrare și interior din PVC cu toc integrat. Rezistente la UV, intemperii și efracție.', specs: ['Rezistente UV', 'Multiple culori', 'Sisteme anti-efracție'] },
    { name: 'Ferestre cu Geam Triplu', desc: 'Soluția optimă pentru izolare termică și fonică. Recomandate pentru zone cu trafic intens sau climă rece.', specs: ['Ug = 0.5 W/m²K', 'Izolare fonică 45dB', 'Condensare redusă'] },
    { name: 'Ferestre de Mansardă', desc: 'Ferestre speciale pentru spații mansardate. Etanșeitate superioară și rezistență la ploaie.', specs: ['Unghi 15-90°', 'Etanșeitate sporită', 'Deschidere dublă'] },
  ];

  return (
    <>
      <Header locale={locale} />
      <main>
        <section style={{ background: 'var(--primary)' }} className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-sm text-gray-400 mb-2">
              <Link href={`/${locale}`} className="hover:text-white">Acasă</Link> / {t('pvc')}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '2.5rem' }}>{t('pvc')}</h1>
            <p className="text-gray-300 mt-3 max-w-xl">Profile Salamander premium — cel mai apreciat sistem PVC pe piața europeană.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div style={{ background: 'var(--light)', borderLeft: '4px solid var(--accent)' }} className="p-6 rounded mb-12">
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }} className="text-xl mb-2">Partener oficial Salamander</h2>
              <p className="text-gray-600 text-sm">Utilizăm exclusiv profile Salamander fabricate în Germania — standardul european de calitate în tâmplăria PVC.</p>
            </div>

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
                Solicită Ofertă PVC
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
