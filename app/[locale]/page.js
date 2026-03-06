import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  return { title: t('title'), description: t('description') };
}

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center border-b border-border">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-xs tracking-widest uppercase text-muted mb-8">Termopane Neofort — București</p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-primary leading-none mb-8">
              Tâmplărie<br/>
              <span className="italic text-muted">PVC & Aluminiu</span>
            </h1>
            <p className="text-base text-muted font-light max-w-lg leading-relaxed mb-12">
              Producător autorizat Salamander & Alumil. Geam termopan, montaj profesional, livrare în toată Europa. Peste 20 de ani de experiență.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="contact"
                className="inline-block border border-primary text-primary px-8 py-4 text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300">
                {t('home.hero_cta1')}
              </Link>
              <Link href="tamplarie-pvc"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs tracking-widest uppercase text-muted hover:text-pvc transition-colors duration-300">
                {t('home.hero_cta2')} →
              </Link>
            </div>
          </div>

          <div className="flex gap-12 mt-20 pt-12 border-t border-border">
            <div>
              <div className="font-display text-4xl font-light">20+</div>
              <div className="text-xs tracking-widest text-muted uppercase mt-1">Ani experiență</div>
            </div>
            <div>
              <div className="font-display text-4xl font-light">6</div>
              <div className="text-xs tracking-widest text-muted uppercase mt-1">Limbi</div>
            </div>
            <div>
              <div className="font-display text-4xl font-light">EU</div>
              <div className="text-xs tracking-widest text-muted uppercase mt-1">Livrare Europa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products — culori din logo la hover */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted mb-3">Colecție</p>
              <h2 className="font-display text-4xl md:text-5xl font-light">{t('home.products_title')}</h2>
            </div>
          </div>

          {/* Cele 2 principale */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">

            {/* PVC — verde la hover */}
            <Link href="tamplarie-pvc" className="group bg-white p-12 transition-colors duration-300 hover:bg-pvc/5 block">
              <div className="flex justify-between items-start mb-16">
                <span className="text-xs tracking-widest uppercase text-muted">01</span>
                <span className="text-xs tracking-widest uppercase text-muted group-hover:text-pvc transition-colors duration-300">PVC →</span>
              </div>
              <div className="w-8 h-px bg-border group-hover:bg-pvc transition-colors duration-300 mb-8"></div>
              <h3 className="font-display text-3xl md:text-4xl font-light mb-2 group-hover:text-pvc transition-colors duration-300">Tâmplărie PVC</h3>
              <p className="text-xs tracking-widest text-muted mb-6">SALAMANDER</p>
              <p className="text-sm text-muted leading-relaxed mb-10">BluEvolution 92 · GreenEvolution 76<br/>6 camere · Uw 0.70 W/m²K · nZEB</p>
              <div className="text-xs tracking-widest uppercase text-muted group-hover:text-pvc transition-colors duration-300">
                Descoperă sistemul →
              </div>
            </Link>

            {/* Aluminiu — albastru la hover */}
            <Link href="tamplarie-aluminiu" className="group bg-white p-12 transition-colors duration-300 hover:bg-aluminiu/5 block">
              <div className="flex justify-between items-start mb-16">
                <span className="text-xs tracking-widest uppercase text-muted">02</span>
                <span className="text-xs tracking-widest uppercase text-muted group-hover:text-aluminiu transition-colors duration-300">Aluminiu →</span>
              </div>
              <div className="w-8 h-px bg-border group-hover:bg-aluminiu transition-colors duration-300 mb-8"></div>
              <h3 className="font-display text-3xl md:text-4xl font-light mb-2 group-hover:text-aluminiu transition-colors duration-300">Tâmplărie Aluminiu</h3>
              <p className="text-xs tracking-widest text-muted mb-6">ALUMIL</p>
              <p className="text-sm text-muted leading-relaxed mb-10">S77 Supreme · S67 Smartia · S700<br/>Glisante · Armonice · nZEB</p>
              <div className="text-xs tracking-widest uppercase text-muted group-hover:text-aluminiu transition-colors duration-300">
                Descoperă sistemul →
              </div>
            </Link>
          </div>

          {/* 3 secundare */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mt-px">

            {/* Accesorii — portocaliu */}
            <Link href="accesorii" className="group bg-white p-8 transition-colors duration-300 hover:bg-accesorii/5 block">
              <span className="text-xs tracking-widest text-muted mb-8 block">03</span>
              <div className="w-6 h-px bg-border group-hover:bg-accesorii transition-colors duration-300 mb-6"></div>
              <h3 className="font-display text-xl font-light mb-2 group-hover:text-accesorii transition-colors duration-300">Accesorii</h3>
              <p className="text-xs text-muted mb-6">Izolare · Rulouri · Geamuri Saint Gobain</p>
              <div className="text-xs tracking-widest uppercase text-muted group-hover:text-accesorii transition-colors duration-300">Info →</div>
            </Link>

            {/* Montaj — neutru */}
            <Link href="servicii" className="group bg-white p-8 transition-colors duration-300 hover:bg-light block">
              <span className="text-xs tracking-widest text-muted mb-8 block">04</span>
              <div className="w-6 h-px bg-border group-hover:bg-primary transition-colors duration-300 mb-6"></div>
              <h3 className="font-display text-xl font-light mb-2 group-hover:text-primary transition-colors duration-300">Montaj profesional</h3>
              <p className="text-xs text-muted mb-6">Echipe specializate · Garanție</p>
              <div className="text-xs tracking-widest uppercase text-muted group-hover:text-primary transition-colors duration-300">Info →</div>
            </Link>

            {/* Transport — neutru */}
            <Link href="contact" className="group bg-white p-8 transition-colors duration-300 hover:bg-light block">
              <span className="text-xs tracking-widest text-muted mb-8 block">05</span>
              <div className="w-6 h-px bg-border group-hover:bg-primary transition-colors duration-300 mb-6"></div>
              <h3 className="font-display text-xl font-light mb-2 group-hover:text-primary transition-colors duration-300">Transport European</h3>
              <p className="text-xs text-muted mb-6">Livrare UE · Ambalare · Paletizare</p>
              <div className="text-xs tracking-widest uppercase text-muted group-hover:text-primary transition-colors duration-300">Info →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-muted mb-16">{t('home.steps_title')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { n: '01', title: t('home.step1_title'), desc: t('home.step1_desc') },
              { n: '02', title: t('home.step2_title'), desc: t('home.step2_desc') },
              { n: '03', title: t('home.step3_title'), desc: t('home.step3_desc') },
            ].map(s => (
              <div key={s.n}>
                <div className="font-display text-6xl font-light text-border mb-6">{s.n}</div>
                <h3 className="font-display text-2xl font-light mb-4">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted mb-4">De ce Neofort</p>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">{t('home.why_title')}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: t('home.why1_title'), desc: t('home.why1_desc') },
                { title: t('home.why2_title'), desc: t('home.why2_desc') },
                { title: t('home.why3_title'), desc: t('home.why3_desc') },
                { title: t('home.why4_title'), desc: t('home.why4_desc') },
              ].map((item, i) => (
                <div key={i} className="border-t border-border pt-6">
                  <h3 className="text-sm font-medium text-primary mb-3">{item.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs tracking-widest uppercase text-muted mb-6">Contact</p>
          <h2 className="font-display text-4xl md:text-6xl font-light mb-8">Solicitați o ofertă</h2>
          <p className="text-sm text-muted max-w-md mx-auto mb-12 leading-relaxed">
            Consultanță gratuită și ofertă personalizată pentru tâmplărie PVC sau aluminiu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="contact"
              className="border border-primary text-primary px-10 py-4 text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300">
              Cerere ofertă
            </Link>
            <a href="tel:+40752443435"
              className="border border-border text-muted px-10 py-4 text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300">
              +40 752 443 435
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
