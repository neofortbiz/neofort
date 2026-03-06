import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HomePage({ params: { locale } }) {
  const t = useTranslations('hero');
  const s = useTranslations('services');
  const steps = useTranslations('steps');
  const why = useTranslations('why');

  const services = [
    { key: 'aluminiu', icon: '🪟' },
    { key: 'izolare', icon: '🛡️' },
    { key: 'montaj', icon: '🔧' },
    { key: 'transport', icon: '🚚' },
  ];

  const whyItems = [
    { key: 'price', icon: '💶' },
    { key: 'consulting', icon: '💡' },
    { key: 'quality', icon: '🏆' },
    { key: 'experience', icon: '📅' },
  ];

  return (
    <>
      <Header locale={locale} />
      <main>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%)', minHeight: '90vh' }}
          className="flex items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
            <div className="max-w-2xl animate-fadeInUp">
              <div style={{ color: 'var(--accent)', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', letterSpacing: '0.2em' }}
                className="uppercase font-semibold mb-4">
                Termopane Neofort
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', lineHeight: 1.1 }}
                className="mb-6">
                {t('title')}
              </h1>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">{t('subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/contact`}
                  style={{ background: 'var(--accent)', color: 'var(--dark)', fontWeight: 700, fontFamily: 'var(--font-sans)' }}
                  className="px-8 py-4 rounded text-center hover:opacity-90 transition-opacity">
                  {t('cta')}
                </Link>
                <Link href={`/${locale}/tamplarie-aluminiu`}
                  className="px-8 py-4 rounded text-center border border-white border-opacity-40 text-white hover:bg-white hover:bg-opacity-10 transition-all">
                  {t('cta2')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20" style={{ background: 'var(--light)' }}>
          <div className="max-w-7xl mx-auto px-4">
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '2rem' }}
              className="text-center mb-14">
              {s('title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(({ key, icon }, i) => (
                <div key={key}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '1.1rem' }}
                    className="mb-3">
                    {s(`${key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s(`${key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '2rem' }}
              className="text-center mb-3">
              {steps('title')}
            </h2>
            <p className="text-center text-gray-500 mb-14">{steps('subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[1, 2, 3].map((n) => (
                <div key={n} className="text-center relative">
                  <div style={{ background: 'var(--primary)', color: '#fff', width: '3.5rem', height: '3.5rem', borderRadius: '50%', fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}
                    className="mx-auto flex items-center justify-center mb-5">
                    {n}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }} className="text-lg mb-3">
                    {steps(`step${n}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{steps(`step${n}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-20" style={{ background: 'var(--primary)' }}>
          <div className="max-w-7xl mx-auto px-4">
            <h2 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '2rem' }}
              className="text-center mb-14">
              {why('title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyItems.map(({ key, icon }) => (
                <div key={key} className="text-center p-6">
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1rem' }}
                    className="mb-3">
                    {why(`${key}.title`)}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{why(`${key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '2rem' }} className="mb-4">
              Solicită o ofertă gratuită
            </h2>
            <p className="text-gray-600 mb-8">Contactează-ne astăzi pentru consultanță și prețuri personalizate.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}
                style={{ background: 'var(--primary)', color: '#fff' }}
                className="px-8 py-4 rounded font-semibold hover:opacity-90 transition-opacity">
                Formular Ofertă
              </Link>
              <a href="tel:+40752443435"
                style={{ background: 'var(--accent)', color: 'var(--dark)' }}
                className="px-8 py-4 rounded font-semibold hover:opacity-90 transition-opacity">
                📞 +40 752 443 435
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer locale={locale} />
    </>
  );
}
