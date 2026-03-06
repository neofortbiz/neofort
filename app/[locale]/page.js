import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HomePage({ params }) {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden" style={{minHeight: '500px'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-dark opacity-90"></div>
        <div className="relative container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">TERMOPANE NEOFORT</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            {t('home.hero_title')}
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl">{t('home.hero_subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="contact" className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg">
              {t('home.hero_cta1')}
            </Link>
            <Link href="tamplarie-pvc" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors">
              {t('home.hero_cta2')}
            </Link>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 w-full max-w-2xl">
            <div className="text-center">
              <div className="text-accent text-3xl font-bold">20+</div>
              <div className="text-gray-300 text-sm mt-1">Ani experiență</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-3xl font-bold">6</div>
              <div className="text-gray-300 text-sm mt-1">Limbi</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-3xl font-bold">EU</div>
              <div className="text-gray-300 text-sm mt-1">Livrare Europa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products - PVC & Aluminium (PRINCIPALE) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('home.products_title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('home.products_subtitle')}</p>
          </div>

          {/* 2 Main Products - large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* PVC */}
            <div className="group bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent">
              <div className="bg-gradient-to-br from-primary to-dark p-8 text-white text-center">
                <div className="text-accent text-xs font-bold tracking-widest mb-2">PRINCIPAL</div>
                <h3 className="text-2xl font-bold mb-2">{t('home.prod1_title').split('&')[0]}</h3>
                <div className="text-accent font-semibold">SALAMANDER</div>
                <div className="mt-4 text-sm text-gray-300">BluEvolution 92 • GreenEvolution 76</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{t('home.prod1_desc')}</p>
                <Link href="tamplarie-pvc" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                  {t('cta.detalii')} →
                </Link>
              </div>
            </div>

            {/* Aluminiu */}
            <div className="group bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent">
              <div className="bg-gradient-to-br from-dark to-primary p-8 text-white text-center">
                <div className="text-accent text-xs font-bold tracking-widest mb-2">PRINCIPAL</div>
                <h3 className="text-2xl font-bold mb-2">{t('home.prod1_title').split('&')[1] || 'Tâmplărie Aluminiu'}</h3>
                <div className="text-accent font-semibold">ALUMIL</div>
                <div className="mt-4 text-sm text-gray-300">S77 Supreme • S67 Smartia • S700</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{t('home.prod1_desc')}</p>
                <Link href="tamplarie-aluminiu" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                  {t('cta.detalii')} →
                </Link>
              </div>
            </div>
          </div>

          {/* 3 Secondary services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="text-accent text-2xl mb-3">🔒</div>
              <h3 className="font-bold text-primary mb-2">{t('home.prod2_title')}</h3>
              <p className="text-gray-600 text-sm">{t('home.prod2_desc')}</p>
              <Link href="accesorii" className="inline-block mt-4 text-accent font-semibold text-sm hover:underline">{t('cta.detalii')} →</Link>
            </div>
            <div className="bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="text-accent text-2xl mb-3">🔧</div>
              <h3 className="font-bold text-primary mb-2">{t('home.prod3_title')}</h3>
              <p className="text-gray-600 text-sm">{t('home.prod3_desc')}</p>
              <Link href="servicii" className="inline-block mt-4 text-accent font-semibold text-sm hover:underline">{t('cta.detalii')} →</Link>
            </div>
            <div className="bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="text-accent text-2xl mb-3">🚚</div>
              <h3 className="font-bold text-primary mb-2">{t('home.prod5_title')}</h3>
              <p className="text-gray-600 text-sm">{t('home.prod5_desc')}</p>
              <Link href="contact" className="inline-block mt-4 text-accent font-semibold text-sm hover:underline">{t('cta.detalii')} →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('home.steps_title')}</h2>
            <p className="text-gray-300">{t('home.steps_subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { num: '01', title: t('home.step1_title'), desc: t('home.step1_desc'), icon: '📋' },
              { num: '02', title: t('home.step2_title'), desc: t('home.step2_desc'), icon: '📐' },
              { num: '03', title: t('home.step3_title'), desc: t('home.step3_desc'), icon: '🚛' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-accent text-5xl font-black opacity-30 mb-2">{step.num}</div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('home.why_title')}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('home.why_desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('home.why1_title'), desc: t('home.why1_desc'), icon: '💰' },
              { title: t('home.why2_title'), desc: t('home.why2_desc'), icon: '💡' },
              { title: t('home.why3_title'), desc: t('home.why3_desc'), icon: '⭐' },
              { title: t('home.why4_title'), desc: t('home.why4_desc'), icon: '🏆' },
            ].map((item, i) => (
              <div key={i} className="bg-light rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-primary mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Solicitați o ofertă gratuită!</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Contactați-ne pentru o consultanță gratuită și o ofertă personalizată pentru tâmplărie PVC sau aluminiu.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="contact" className="bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              {t('cta.oferta')}
            </Link>
            <a href="tel:+40752443435" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-accent transition-colors">
              📱 +40 752 443 435
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
