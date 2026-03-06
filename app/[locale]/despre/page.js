import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'despre' });
  return { title: t('title'), description: t('description') };
}

export default function DesprePage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Despre Neofort</h1>
          <p className="text-gray-300">20 ani de excelență în tâmplărie PVC & Aluminiu</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-4">Cine suntem</h2>
            <p className="text-gray-700 mb-6">Neofort BIZ este un producător și distribuitor autorizat de tâmplărie PVC Salamander și tâmplărie Aluminiu Alumil, cu sediul în București, România. Cu o experiență de peste 20 de ani pe piață, am furnizat produse premium clienților din România și din toată Europa.</p>
            <h2 className="text-2xl font-bold text-primary mb-4">De ce Neofort</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { title: '20+ ani experiență', desc: 'Prezență neîntreruptă pe piața tâmplăriei PVC și aluminiu din România.' },
                { title: 'Marcă înregistrată OSIM', desc: 'Neofort BIZ - marcă înregistrată O.S.I.M. nr. M 2014 05130.' },
                { title: 'Producător autorizat', desc: 'Tâmplărie produsă pe linii de producție automatizate de ultimă generație.' },
                { title: 'Export European', desc: 'Livrăm în toată Comunitatea Europeană cu ambalare și paletizare profesională.' },
              ].map((item, i) => (
                <div key={i} className="bg-light rounded-xl p-6">
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="../contact" className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors">
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
