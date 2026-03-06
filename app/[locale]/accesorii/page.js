import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'accesorii' });
  return { title: t('title'), description: t('description') };
}

export default function AccesoriiPage() {
  const t = useTranslations('accesorii');
  const products = t.raw('products');

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero_title')}</h1>
          <p className="text-xl text-gray-300">{t('hero_subtitle')}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article key={product.slug} className="bg-light rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent flex flex-col">
                <div className="bg-gradient-to-br from-gray-700 to-primary h-40 flex items-center justify-center text-white">
                  <div className="text-center p-4">
                    <div className="text-xl font-bold">{product.name}</div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-lg font-bold text-primary mb-4">{product.name}</h2>
                  <ul className="space-y-1 flex-1">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`../../${product.slug}`} className="mt-6 block text-center bg-primary text-white px-4 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                    Detalii
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-700 leading-relaxed text-lg">{t('desc')}</p>
          <div className="mt-8">
            <Link href="../contact" className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors">Contact / Info</Link>
          </div>
        </div>
      </section>
    </>
  );
}
