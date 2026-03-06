import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const posts = [
  { slug: 'cum-alegi-tamplaria-pvc', title: 'Cum alegi tâmplăria PVC potrivită', date: '2024-11-10', excerpt: 'Ghid complet pentru alegerea celei mai bune tâmplării PVC: număr camere, geam, culori și sisteme de deschidere.' },
  { slug: 'aluminiu-vs-pvc', title: 'Aluminiu vs PVC — care e mai bun?', date: '2024-10-22', excerpt: 'Comparație detaliată între tâmplăria din aluminiu și cea din PVC: preț, izolare, estetică și durabilitate.' },
  { slug: 'geam-termoizolator-2-3-foi', title: 'Geam termoizolator 2 sau 3 foi?', date: '2024-09-15', excerpt: 'Diferențele dintre geamul dublu și triplu strat: costuri, beneficii energetice și când merită investiția.' },
  { slug: 'montaj-profesional-termopane', title: 'De ce contează montajul profesional', date: '2024-08-30', excerpt: 'Un produs premium montat greșit = pierderi de căldură, condens și costuri suplimentare. Iată de ce montajul contează.' },
];

export default function BlogPage({ params: { locale } }) {
  const t = useTranslations('nav');

  return (
    <>
      <Header locale={locale} />
      <main>
        <section style={{ background: 'var(--primary)' }} className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '2.5rem' }}>{t('blog')}</h1>
            <p className="text-gray-300 mt-3">Articole și ghiduri despre tâmplărie PVC și Aluminiu</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div style={{ background: 'var(--light)' }} className="h-40 flex items-center justify-center">
                    <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)', fontSize: '3rem', opacity: 0.15 }}>N</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                    <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '1.2rem' }} className="mb-3">{post.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <Link href={`/${locale}/blog/${post.slug}`}
                      style={{ color: 'var(--primary)' }}
                      className="text-sm font-semibold hover:underline">
                      Citește mai mult →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
