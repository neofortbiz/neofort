import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: t('title'), description: t('description') };
}

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-gray-300">Tâmplărie PVC Salamander & Aluminiu Alumil</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Date de contact</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="text-accent text-2xl">📍</div>
                  <div>
                    <div className="font-semibold text-primary">Adresă</div>
                    <div className="text-gray-600">{t('address')}</div>
                    <a href="https://maps.app.goo.gl/YcaANuqcmnzy14i1A" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">Vezi pe Google Maps →</a>
                  </div>
                </div>

                {[
                  { label: 'Office', value: t('phone_office'), href: `tel:${t('phone_office')}` },
                  { label: 'Oferte', value: t('phone_oferte'), href: `tel:${t('phone_oferte')}` },
                  { label: 'Export', value: t('phone_export'), href: `tel:${t('phone_export')}` },
                  { label: 'Tehnic', value: t('phone_tehnic'), href: `tel:${t('phone_tehnic')}` },
                  { label: 'Service', value: t('phone_service'), href: `tel:${t('phone_service')}` },
                  { label: 'Programări', value: t('phone_programari'), href: `tel:${t('phone_programari')}` },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-center">
                    <div className="text-accent text-xl">📞</div>
                    <div>
                      <span className="text-gray-500 text-sm">{item.label}: </span>
                      <a href={item.href} className="font-semibold text-primary hover:text-accent">{item.value}</a>
                    </div>
                  </div>
                ))}

                {[
                  { label: 'Oferte', value: t('email_oferte') },
                  { label: 'Comenzi', value: t('email_comenzi') },
                  { label: 'Service', value: t('email_service') },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-center">
                    <div className="text-accent text-xl">✉️</div>
                    <div>
                      <span className="text-gray-500 text-sm">{item.label}: </span>
                      <a href={`mailto:${item.value}`} className="font-semibold text-primary hover:text-accent">{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Request Form */}
            <div className="bg-light rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Cerere de Ofertă</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Nume *</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent" placeholder="Numele dvs." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Telefon *</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent" placeholder="+40 7xx xxx xxx" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent" placeholder="email@exemplu.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Solicit ofertă pentru *</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent">
                    <option>Tâmplărie PVC Salamander</option>
                    <option>Tâmplărie Aluminiu Alumil</option>
                    <option>Accesorii</option>
                    <option>Servicii montaj</option>
                    <option>Export</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Mesaj</label>
                  <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent" placeholder="Descrieți cererea dvs..."></textarea>
                </div>
                <button className="w-full bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors">
                  Trimite cererea
                </button>
                <p className="text-xs text-gray-400">* Câmpuri obligatorii. Prin trimiterea formularului sunteți de acord cu politica GDPR.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8!2d26.0885!3d44.4429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI2JzM0LjYiTiAyNsKwMDUnMTguNiJF!5e0!3m2!1sro!2sro!4v1234567890"
          width="100%"
          height="100%"
          style={{border: 0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Neofort - Str. Theodor Aman 11, București"
        />
      </section>
    </>
  );
}
