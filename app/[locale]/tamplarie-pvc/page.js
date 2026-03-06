import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pvc' });
  return { title: t('title'), description: t('description') };
}

export default function TamplariePvcPage() {
  const t = useTranslations('pvc');
  const products = t.raw('products');

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-accent text-xs font-bold tracking-widest mb-3">SALAMANDER PREMIUM</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero_title')}</h1>
          <p className="text-xl text-gray-300 mb-8">{t('hero_subtitle')}</p>
          <Link href="../contact" className="bg-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors">
            Cerere Ofertă PVC
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article key={product.slug} className="bg-light rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent flex flex-col">
                <div className="bg-gradient-to-br from-blue-900 to-primary h-48 flex items-center justify-center text-white">
                  <div className="text-center p-4">
                    <div className="text-accent text-xs font-bold mb-2">SALAMANDER PVC</div>
                    <div className="text-xl font-bold">{product.name}</div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-primary mb-4">{product.name}</h2>
                  <ul className="space-y-1 flex-1">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`../../${product.slug}`} className="mt-6 block text-center bg-primary text-white px-4 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                    Detalii {product.name}
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
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="../contact" className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors text-center">Contact / Info</Link>
            <a href="tel:+40752443435" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-white transition-colors text-center">📱 +40 752 443 435</a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Tâmplărie PVC Salamander - Neofort",
        "description": t('description'),
        "itemListElement": products.map((p, i) => ({
          "@type": "ListItem", "position": i + 1, "name": p.name,
          "url": `https://www.neofort-biz.ro/ro/${p.slug}`
        }))
      })}} />
    </>
  );
}
