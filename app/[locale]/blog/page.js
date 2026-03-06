import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  return { title: t('title'), description: t('description') };
}

const ARTICLES = [
  { slug:'diferenta-pvc-aluminiu', date:'Ianuarie 2025', cat:'Ghid tehnic', title:'Diferența dintre tâmplăria PVC și aluminiu', excerpt:'Cum alegi între PVC Salamander și aluminiu Alumil? Comparație completă pe criterii de izolare, estetică, durabilitate și preț.' },
  { slug:'nzeb-eficienta-energetica', date:'Februarie 2025', cat:'Eficiență energetică', title:'nZEB — ce înseamnă și de ce contează', excerpt:'Nearly Zero Energy Building este standardul obligatoriu pentru construcțiile noi. Cum influențează tâmplăria termoizolantă conformitatea nZEB.' },
  { slug:'izolare-perimetala-blaugelb', date:'Martie 2025', cat:'Montaj', title:'Izolarea perimetrală cu precadre Blaugelb Triotherm+', excerpt:'De ce banda precomprimată și precadrele Blaugelb sunt esențiale pentru un montaj corect și o izolare completă la pervazuri.' },
  { slug:'geam-termopan-saint-gobain', date:'Aprilie 2025', cat:'Produse', title:'Geam termopan Saint Gobain — tipuri și performanțe', excerpt:'Geamul termoizolator dublu și triplu, pachete SGG CLIMATOP, emisivitate scăzută și gaz argon. Ce alegeți în funcție de climă.' },
  { slug:'salamander-bluevolution-92', date:'Mai 2025', cat:'Profile PVC', title:'BluEvolution 92 — profilul cu 6 camere Salamander', excerpt:'Cel mai performant profil PVC Salamander, cu 6 camere, Uw până la 0.70 W/m²K și design atemporal pentru proiecte premium.' },
  { slug:'alumil-s77-supreme', date:'Iunie 2025', cat:'Profile Aluminiu', title:'Alumil S77 Supreme — feronerie de înaltă performanță', excerpt:'Sistem de aluminiu cu barieră termică premium, suprafețe vitrate de mari dimensiuni, protecție fonică 42 dB.' },
];

export default function BlogPage() {
  return (
    <>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">Neofort BIZ</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">Blog Termopane</h1>
          <p className="text-[0.9rem] text-muted max-w-lg">Ghiduri tehnice, comparații și noutăți despre tâmplărie PVC, aluminiu și izolare termoizolantă.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARTICLES.map(a=>(
              <article key={a.slug} className="prod-card group">
                <div className="card-body">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[0.62rem] tracking-[0.18em] uppercase font-semibold font-condensed text-muted">{a.cat}</span>
                    <span className="text-[0.68rem] text-muted">{a.date}</span>
                  </div>
                  <h3 className="font-condensed text-[1.15rem] font-semibold text-primary mb-3 leading-snug group-hover:text-pvc transition-colors duration-200">
                    {a.title}
                  </h3>
                  <p className="text-[0.8rem] text-muted leading-relaxed flex-1">{a.excerpt}</p>
                  <div className="mt-5 text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted group-hover:text-pvc transition-colors duration-200">
                    Citește →
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
