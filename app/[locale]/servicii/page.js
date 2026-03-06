import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'servicii' });
  return { title: t('title'), description: t('description') };
}

export default function ServiciiPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Servicii Montaj Tâmplărie</h1>
          <p className="text-gray-300">Montaj profesional PVC & Aluminiu</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '📐', title: 'Măsurători gratuite', desc: 'Echipa noastră vine la fața locului pentru măsurători precise, gratuit.' },
              { icon: '🔧', title: 'Montaj profesional', desc: 'Montaj executat de echipe specializate cu experiență de peste 20 ani.' },
              { icon: '🏗️', title: 'Izolare perimetrală', desc: 'Izolare completă cu bandă precomprimată, precadre și folii antivapori.' },
              { icon: '✅', title: 'Garanție', desc: 'Garantăm calitatea montajului și a produselor noastre.' },
              { icon: '🚛', title: 'Transport', desc: 'Transport și livrare în toată România și Europa.' },
              { icon: '🔄', title: 'Service', desc: 'Service post-vânzare rapid și eficient.' },
            ].map((item, i) => (
              <div key={i} className="bg-light rounded-xl p-6 flex gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="../contact" className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors">
              Solicită montaj
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
