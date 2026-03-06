import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  return { title: t('title'), description: t('description') };
}

export default function HomePage() {
  return (
    <>
      {/* HERO — split 2 col */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border" style={{minHeight:'86vh'}}>
        <Link href="tamplarie-pvc"
          className="group relative flex flex-col justify-between p-12 md:p-16 bg-light border-r border-border hover:bg-pvc/[0.04] transition-colors duration-300">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-muted group-hover:text-pvc transition-colors duration-200">
            Tehnologie Germană · Salamander
          </span>
          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-pvc font-semibold font-condensed mb-3">Profile PVC</p>
            <h2 className="font-condensed text-5xl md:text-[3.5rem] font-semibold text-primary leading-none mb-4 group-hover:text-pvc transition-colors duration-300">
              Tâmplărie<br/>PVC
            </h2>
            <p className="text-[0.85rem] text-muted leading-relaxed mb-8 max-w-xs">
              Eficiență energetică nZEB și design atemporal. BluEvolution 92 · GreenEvolution 76 · 6 camere · Uw 0.70 W/m²K.
            </p>
            <span className="btn-outline border-pvc text-pvc group-hover:bg-pvc group-hover:text-white group-hover:border-pvc">
              Vezi Profile →
            </span>
          </div>
        </Link>

        <Link href="tamplarie-aluminiu"
          className="group relative flex flex-col justify-between p-12 md:p-16 bg-white hover:bg-aluminiu/[0.04] transition-colors duration-300">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-muted group-hover:text-aluminiu transition-colors duration-200">
            Arhitectură Modernă · Alumil
          </span>
          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-aluminiu font-semibold font-condensed mb-3">Profile Aluminiu</p>
            <h2 className="font-condensed text-5xl md:text-[3.5rem] font-semibold text-primary leading-none mb-4 group-hover:text-aluminiu transition-colors duration-300">
              Tâmplărie<br/>Aluminiu
            </h2>
            <p className="text-[0.85rem] text-muted leading-relaxed mb-8 max-w-xs">
              Suprafețe vitrate mari, durabilitate extremă. S77 Supreme · S67 Smartia · S700 · SF85 · sisteme glisante.
            </p>
            <span className="btn-outline border-aluminiu text-aluminiu group-hover:bg-aluminiu group-hover:text-white group-hover:border-aluminiu">
              Vezi Sisteme →
            </span>
          </div>
        </Link>
      </section>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="sec-label">Excelență în Tâmplărie Termoizolantă</span>
              <h2 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
                20 ani de experiență<br/>neîntreruptă
              </h2>
              <p className="text-[0.9rem] text-muted leading-relaxed">
                Integrăm tehnologia de vârf cu designul minimalist pentru a oferi bariere termice de neegalat. Profilele noastre sunt certificate pentru standardele <strong className="text-primary font-medium">nZEB</strong>, asigurând o economie reală la costurile de încălzire.
              </p>
            </div>
            <div>
              <p className="text-[0.9rem] text-muted leading-relaxed mb-8">
                Fie că optezi pentru robustețea sistemelor <strong className="text-primary font-medium">Alumil Supreme</strong> sau pentru izolarea fonică superioară a profilelor <strong className="text-primary font-medium">PVC Salamander</strong>, echipa Neofort BIZ asigură consultanță tehnică dedicată și montaj profesional. Peste 50% din comenzi vin din recomandări sau de la clienți fideli.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                {[['20+','Ani experiență'],['6','Limbi'],['UE','Livrare']].map(([n,l])=>(
                  <div key={l}>
                    <div className="font-condensed text-3xl font-semibold text-primary">{n}</div>
                    <div className="text-[0.65rem] tracking-[0.15em] text-muted uppercase mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICII SUMAR */}
      <section className="py-20 bg-light border-b border-border">
        <div className="container mx-auto px-6">
          <span className="sec-label">Servicii complete</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            {[
              { href:'accesorii', color:'accesorii', tag:'Accesorii',        title:'Izolare & Accesorii',    desc:'Rulouri aluminiu · Jaluzele Raffstore · Precadre Blaugelb Triotherm+ · Geam Saint Gobain · Warm Edge · Bandă butilică' },
              { href:'servicii',  color:'primary',   tag:'Servicii',          title:'Consultanță & Montaj',   desc:'Consultanță tehnică · Măsurători · Transport · Montaj profesional · Service post-vânzare · Garanție' },
              { href:'contact',   color:'primary',   tag:'Export',            title:'Livrare Europeană',       desc:'Livrare în toată UE · Ambalare profesională · Paletizare · Asigurare internațională transport' },
            ].map(item=>(
              <Link key={item.href} href={item.href}
                className={`group bg-white border border-border p-8 hover:border-${item.color} hover:shadow-md transition-all duration-250 flex flex-col`}>
                <p className={`text-[0.65rem] tracking-[0.2em] uppercase font-semibold font-condensed text-${item.color} mb-3`}>{item.tag}</p>
                <h3 className="font-condensed text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-[0.8rem] text-muted leading-relaxed flex-1">{item.desc}</p>
                <div className={`mt-6 text-[0.68rem] tracking-[0.15em] uppercase font-semibold font-condensed text-muted group-hover:text-${item.color} transition-colors duration-200`}>
                  Detalii →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ETAPE */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="sec-label">Cum lucrăm</span>
              <h2 className="font-condensed text-4xl font-semibold text-primary">Etapele colaborării</h2>
            </div>
            <p className="text-[0.85rem] text-muted max-w-xs">Claritate în 3 pași simpli. Specialiștii noștri vă însoțesc în fiecare etapă.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-border">
            {[
              { n:'01', title:'Elaborare ofertă',        desc:'Transmiteți cererea de ofertă prin formularul de contact, e-mail sau telefon & WhatsApp. Răspundem în aceeași zi.' },
              { n:'02', title:'Consultare & Măsurătoare', desc:'Stabilim detaliile configurației și componenței comenzii. Consultanță tehnică personalizată și programare măsurători.' },
              { n:'03', title:'Transport & Montaj',        desc:'Confirmare detalii locație și termen livrare. Transport asigurat, montaj profesional și punere în funcțiune.' },
            ].map((s,i)=>(
              <div key={s.n} className={`p-10 ${i<2?'border-b md:border-b-0 md:border-r border-border':''}`}>
                <div className="font-condensed text-[3rem] font-light text-border mb-5 select-none leading-none">{s.n}</div>
                <h3 className="font-condensed text-xl font-semibold text-primary mb-3">{s.title}</h3>
                <p className="text-[0.85rem] text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DE CE NOI */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="sec-label">De ce Neofort</span>
              <h2 className="font-condensed text-4xl md:text-5xl font-semibold text-primary leading-tight">
                Calitate și angajamente<br/>fără compromisuri
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title:'Prețuri competitive',    desc:'Lucrăm permanent la raportul calitate–preț–utilitate și venim cu oferte câștigătoare.' },
                { title:'Consultanță inovatoare', desc:'Aducem pe piață cele mai noi și mai performante produse și soluții tehnice.' },
                { title:'Calitate garantată',     desc:'Peste 50% din clienți revin sau ne recomandă. Garanție completă pe produse și montaj.' },
                { title:'20 ani experiență',      desc:'De aproape două decenii, Neofort BIZ este prezent în piața tâmplăriei PVC și aluminiu.' },
              ].map((item,i)=>(
                <div key={i} className="border-t border-border pt-5">
                  <h3 className="font-condensed text-[1rem] font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-[0.8rem] text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="sec-label" style={{color:'#555'}}>Contactați-ne</span>
            <h2 className="font-condensed text-3xl md:text-4xl font-semibold text-white">Solicitați o ofertă</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="contact" className="bg-pvc text-white font-condensed text-[0.7rem] tracking-[0.18em] uppercase font-semibold px-8 py-4 hover:bg-green-700 transition-colors duration-200 text-center">
              Cerere Ofertă
            </Link>
            <a href="tel:+40752443435" className="border border-gray-700 text-gray-400 font-condensed text-[0.7rem] tracking-[0.18em] uppercase font-semibold px-8 py-4 hover:border-white hover:text-white transition-all duration-200 text-center">
              +40 752 443 435
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
