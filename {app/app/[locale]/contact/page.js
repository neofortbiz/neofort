import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: t('title'), description: t('description') };
}

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">Neofort BIZ</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">Contact</h1>
          <p className="text-[0.9rem] text-muted">Răspundem în aceeași zi lucrătoare.</p>
        </div>
      </div>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <span className="sec-label">Cerere ofertă</span>
              <ContactForm />
            </div>

            {/* Date contact */}
            <div>
              <span className="sec-label">Date de contact</span>
              <div className="space-y-6">
                {[
                  { label:'Office',      val:'+40 21 528 0661',        href:'tel:+40215280661' },
                  { label:'Oferte',      val:'+40 752 443 435',        href:'tel:+40752443435' },
                  { label:'Export',      val:'+40 752 443 439',        href:'tel:+40752443439' },
                  { label:'Tehnic',      val:'+40 752 443 431',        href:'tel:+40752443431' },
                  { label:'Service',     val:'+40 752 443 432',        href:'tel:+40752443432' },
                  { label:'Programări',  val:'+40 758 990 048',        href:'tel:+40758990048' },
                ].map(c=>(
                  <div key={c.label} className="flex justify-between items-center border-b border-border pb-4">
                    <span className="text-[0.7rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted">{c.label}</span>
                    <a href={c.href} className="text-[0.88rem] text-primary hover:text-pvc transition-colors duration-200 font-medium">{c.val}</a>
                  </div>
                ))}
                <div className="border-t border-border pt-4 space-y-2">
                  {[
                    ['oferte@neofort-biz.ro','mailto:oferte@neofort-biz.ro'],
                    ['comenzi@neofort-biz.ro','mailto:comenzi@neofort-biz.ro'],
                    ['service@neofort-biz.ro','mailto:service@neofort-biz.ro'],
                  ].map(([v,h])=>(
                    <div key={v}><a href={h} className="text-[0.82rem] text-muted hover:text-primary transition-colors duration-200">{v}</a></div>
                  ))}
                </div>
                <div className="border-t border-border pt-5">
                  <p className="text-[0.75rem] tracking-[0.12em] uppercase font-semibold font-condensed text-muted mb-2">Adresă</p>
                  <p className="text-[0.85rem] text-primary leading-relaxed">
                    Str. Theodor Aman Pictor 11<br/>
                    Sector 1, București 010776<br/>Romania
                  </p>
                  <a href="https://maps.app.goo.gl/YcaANuqcmnzy14i1A" target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-4 text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted hover:text-primary transition-colors duration-200">
                    Deschide în Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harta */}
      <section className="border-b border-border">
        <div className="w-full h-80 bg-light flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.6!2d26.0799!3d44.4396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b1%3A0x954e4d33051c823d!2sStrada%20Theodor%20Aman%2011%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1"
            width="100%" height="320" style={{border:0}} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Neofort BIZ locație"
          />
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form className="space-y-5" action="mailto:oferte@neofort-biz.ro" method="get" encType="text/plain">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted mb-2">Nume *</label>
          <input type="text" name="Nume" required
            className="w-full border border-border px-4 py-3 text-[0.88rem] text-primary bg-white focus:border-primary focus:outline-none transition-colors duration-200"
            placeholder="Numele dvs."/>
        </div>
        <div>
          <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted mb-2">Telefon *</label>
          <input type="tel" name="Telefon" required
            className="w-full border border-border px-4 py-3 text-[0.88rem] text-primary bg-white focus:border-primary focus:outline-none transition-colors duration-200"
            placeholder="+40 7xx xxx xxx"/>
        </div>
      </div>
      <div>
        <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted mb-2">E-mail</label>
        <input type="email" name="Email"
          className="w-full border border-border px-4 py-3 text-[0.88rem] text-primary bg-white focus:border-primary focus:outline-none transition-colors duration-200"
          placeholder="email@exemplu.ro"/>
      </div>
      <div>
        <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted mb-2">Tip produs</label>
        <select name="Produs"
          className="w-full border border-border px-4 py-3 text-[0.88rem] text-primary bg-white focus:border-primary focus:outline-none transition-colors duration-200 appearance-none">
          <option value="">Selectați...</option>
          <option>Tâmplărie PVC Salamander</option>
          <option>Tâmplărie Aluminiu Alumil</option>
          <option>Accesorii</option>
          <option>Montaj / Service</option>
        </select>
      </div>
      <div>
        <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted mb-2">Mesaj / Detalii cerere</label>
        <textarea name="Mesaj" rows={5}
          className="w-full border border-border px-4 py-3 text-[0.88rem] text-primary bg-white focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
          placeholder="Descrieți pe scurt necesarul de tâmplărie (dimensiuni aproximative, sistem, culoare etc.)"/>
      </div>
      <button type="submit" className="btn-primary">
        Trimite cererea →
      </button>
      <p className="text-[0.72rem] text-muted">
        Sau contactați-ne direct: <a href="tel:+40752443435" className="text-primary hover:text-pvc transition-colors">+40 752 443 435</a> · <a href="mailto:oferte@neofort-biz.ro" className="text-primary hover:text-pvc transition-colors">oferte@neofort-biz.ro</a>
      </p>
    </form>
  );
}
