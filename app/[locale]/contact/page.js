import { useTranslations } from 'next-intl';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ContactPage({ params: { locale } }) {
  const t = useTranslations('contact');

  return (
    <>
      <Header locale={locale} />
      <main>
        {/* Page Header */}
        <section style={{ background: 'var(--primary)' }} className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '2.5rem' }}>{t('title')}</h1>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Contact Info */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '1.8rem' }} className="mb-8">
                  Informații Contact
                </h2>
                <div className="space-y-4">
                  {[
                    { label: t('office'), value: '+40 21 528 0661' },
                    { label: t('offers'), value: '+40 752 443 435' },
                    { label: t('export'), value: '+40 752 443 439' },
                    { label: 'Tehnic', value: '+40 752 443 431' },
                    { label: 'Service', value: '+40 752 443 432' },
                  ].map(item => (
                    <div key={item.label} className="flex gap-4 items-center border-b pb-3">
                      <span className="text-sm font-semibold text-gray-500 w-28">{item.label}</span>
                      <a href={`tel:${item.value.replace(/\s/g, '')}`}
                        style={{ color: 'var(--primary)' }}
                        className="font-semibold hover:underline">
                        {item.value}
                      </a>
                    </div>
                  ))}
                  <div className="flex gap-4 items-center border-b pb-3">
                    <span className="text-sm font-semibold text-gray-500 w-28">Email oferte</span>
                    <a href="mailto:oferte@neofort-biz.ro" style={{ color: 'var(--primary)' }} className="hover:underline">oferte@neofort-biz.ro</a>
                  </div>
                  <div className="flex gap-4 items-start pt-2">
                    <span className="text-sm font-semibold text-gray-500 w-28">Adresă</span>
                    <p className="text-gray-700">Str. Theodor Aman Pictor 11,<br/>Sector 1, București, 010776</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div style={{ background: 'var(--light)' }} className="rounded-lg p-8">
                <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '1.8rem' }} className="mb-6">
                  Cerere de Ofertă
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-1">{t('name')} *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-1">{t('phone')} *</label>
                    <input type="tel" required className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-1">{t('email')} *</label>
                    <input type="email" required className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-1">{t('message')}</label>
                    <textarea rows={5} className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500"></textarea>
                  </div>
                  <button type="submit"
                    style={{ background: 'var(--primary)', color: '#fff' }}
                    className="w-full py-3 rounded font-semibold hover:opacity-90 transition-opacity">
                    {t('send')}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
