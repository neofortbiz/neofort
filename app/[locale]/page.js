import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: 'Tâmplărie PVC Salamander & Aluminiu Alumil | Termopane Neofort București',
    description: 'Neofort BIZ — producător tâmplărie PVC Salamander BluEvolution și tâmplărie aluminiu Alumil. Geam termopan nZEB, montaj profesional, livrare în toată Europa. 21 ani experiență. Ofertă gratuită!',
    keywords: 'tamplarie PVC, tamplarie PVC Salamander, tamplarie aluminiu Alumil, termopane, ferestre PVC, ferestre aluminiu, nZEB, BluEvolution 92, geam termopan, montaj tamplarie, Neofort, Bucuresti',
  };
}

export default function HomePage() {
  return (
    <>
      {/* HERO — split 2 col */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{minHeight:'88vh', borderBottom:'1px solid #e5e5e5'}}>
        <Link href="tamplarie-pvc"
          className="group relative flex flex-col justify-between p-14 md:p-20 border-r border-[#e5e5e5]"
          style={{background:'#f7f7f5'}}>
          <span className="text-[0.62rem] tracking-[0.22em] uppercase" style={{color:'#aaa'}}>
            Tehnologie Germană · Salamander
          </span>
          <div>
            <p className="font-condensed font-semibold mb-4" style={{fontSize:'0.62rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'#4a7c59'}}>
              Profile PVC Salamander
            </p>
            <h2 className="font-condensed font-semibold leading-none mb-5 group-hover:text-pvc transition-colors duration-200" style={{fontSize:'clamp(2.6rem,5vw,3.8rem)', color:'#1a1a1a'}}>
              Tâmplărie<br/>PVC Salamander
            </h2>
            <p className="text-[0.82rem] leading-relaxed mb-8 max-w-xs text-justify" style={{color:'#888'}}>
              Eficiență energetică nZEB și design atemporal pentru proiecte rezidențiale de top. BluEvolution 92 · GreenEvolution 76 · 6 camere · Uw 0.70 W/m²K.
            </p>
            <span className="btn-outline" style={{borderColor:'#4a7c59', color:'#4a7c59'}}>
              VEZI PROFILE →
            </span>
          </div>
        </Link>

        <Link href="tamplarie-aluminiu"
          className="group relative flex flex-col justify-between p-14 md:p-20"
          style={{background:'#fff'}}>
          <span className="text-[0.62rem] tracking-[0.22em] uppercase" style={{color:'#aaa'}}>
            Arhitectură Modernă · Alumil
          </span>
          <div>
            <p className="font-condensed font-semibold mb-4" style={{fontSize:'0.62rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'#2d5a8e'}}>
              Profile Aluminiu Alumil
            </p>
            <h2 className="font-condensed font-semibold leading-none mb-5 group-hover:text-aluminiu transition-colors duration-200" style={{fontSize:'clamp(2.6rem,5vw,3.8rem)', color:'#1a1a1a'}}>
              Tâmplărie<br/>Aluminiu Alumil
            </h2>
            <p className="text-[0.82rem] leading-relaxed mb-8 max-w-xs text-justify" style={{color:'#888'}}>
              Suprafețe vitrate mari și durabilitate extremă pentru arhitectura contemporană. S77 Supreme · S67 Smartia · S700 · SF85 · sisteme glisante.
            </p>
            <span className="btn-outline" style={{borderColor:'#2d5a8e', color:'#2d5a8e'}}>
              VEZI SISTEME →
            </span>
          </div>
        </Link>
      </section>

      {/* INTRO — SEO rich */}
      <section className="py-20 border-b border-[#e5e5e5]">
        <div className="container mx-auto px-6">
          <span className="sec-label">Excelență în Tâmplărie Termoizolantă</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6">
            <div>
              <h2 className="font-condensed text-4xl font-semibold text-primary mb-6 leading-tight">
                Tâmplărie PVC Salamander<br/>și Aluminiu Alumil
              </h2>
              <p className="text-[0.88rem] leading-relaxed text-justify" style={{color:'#888'}}>
                Alegerea între <strong style={{color:'#1a1a1a', fontWeight:500}}>tâmplărie PVC Salamander</strong> și <strong style={{color:'#1a1a1a', fontWeight:500}}>tâmplărie aluminiu Alumil</strong> este definitorie pentru eficiența energetică a oricărei construcții moderne. La Neofort BIZ integrăm tehnologia de vârf cu designul minimalist pentru a oferi bariere termice de neegalat. Profilele noastre sunt certificate pentru standardele <strong style={{color:'#1a1a1a', fontWeight:500}}>nZEB (Nearly Zero Energy Building)</strong>, asigurând o economie reală la costurile de încălzire.
              </p>
            </div>
            <div>
              <p className="text-[0.88rem] leading-relaxed text-justify" style={{color:'#888'}}>
                Fie că optați pentru robustețea sistemelor de <strong style={{color:'#1a1a1a', fontWeight:500}}>aluminiu Alumil cu barieră termică</strong> sau pentru izolarea fonică superioară a <strong style={{color:'#1a1a1a', fontWeight:500}}>ferestrelor PVC Salamander</strong>, echipa noastră oferă consultanță tehnică dedicată și montaj profesional cu izolare perimetrală completă. Ne concentrăm pe detalii esențiale precum <strong style={{color:'#1a1a1a', fontWeight:500}}>bagheta warm-edge</strong> și pachete de sticlă tripan cu emisivitate scăzută pentru un confort termic impecabil.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-[#e5e5e5] divide-x divide-[#e5e5e5] mt-14">
            {[
              ['21+', 'Ani de activitate neîntreruptă'],
              ['nZEB', 'Certificate conformitate energetică'],
              ['50%+', 'Comenzi din recomandări clienți'],
              ['UE', 'Livrare și export Europa'],
            ].map(([n, l]) => (
              <div key={l} className="p-7 text-center">
                <div className="font-condensed text-3xl font-semibold text-primary mb-1">{n}</div>
                <div className="text-[0.62rem] tracking-[0.12em] uppercase leading-tight" style={{color:'#aaa'}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUSE CARDS */}
      <section className="py-20 border-b border-[#e5e5e5]" style={{background:'#f7f7f5'}}>
        <div className="container mx-auto px-6">
          <span className="sec-label">Produse & Servicii</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <ProductCard
              href="tamplarie-pvc"
              topColor="#4a7c59"
              tagColor="#4a7c59"
              tag="Tâmplărie PVC Salamander"
              title="Profile PVC Salamander"
              desc="Furnizăm tâmplărie PVC Salamander BluEvolution 92 și GreenEvolution 76 din gamele premium, executată pe linii de producție automatizate și certificată nZEB."
              btnClass="prod-card-btn-pvc"
            />
            <ProductCard
              href="tamplarie-aluminiu"
              topColor="#2d5a8e"
              tagColor="#2d5a8e"
              tag="Tâmplărie Aluminiu Alumil"
              title="Sisteme Aluminiu Alumil"
              desc="Furnizăm tâmplărie aluminiu Alumil Supreme și Smartia. Sisteme cu barieră termică pentru ferestre, uși, lifturi glisante și pereți cortină, certificate nZEB."
              btnClass="prod-card-btn-aluminiu"
            />
            <ProductCard
              href="accesorii"
              topColor="#e8721c"
              tagColor="#e8721c"
              tag="Accesorii & Izolare"
              title="Izolare Perimetrală Premium"
              desc="Bandă butilică, precadre Blaugelb Triotherm+, folie anticondens, rulouri aluminiu, jaluzele Raffstore, geam termopan Saint Gobain warm-edge."
              btnClass="prod-card-btn-accesorii"
            />
          </div>
        </div>
      </section>

      {/* ETAPE */}
      <section className="py-20 border-b border-[#e5e5e5]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="sec-label">Procedura de lucru</span>
              <h2 className="font-condensed text-4xl font-semibold text-primary">Etapele colaborării</h2>
            </div>
            <p className="text-[0.85rem] max-w-xs text-right" style={{color:'#888'}}>Claritate în 3 pași simpli. Specialiștii noștri vă însoțesc în fiecare etapă.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#e5e5e5]">
            {[
              { n:'01', title:'Elaborare ofertă', desc:'Transmiteți cererea prin formularul de contact, e-mail sau telefon & WhatsApp. Unul din reprezentanții noștri vă contactează pentru consultanță personalizată.' },
              { n:'02', title:'Consultare & Măsurătoare', desc:'Stabilim configurația, tipul de profil, culoare, geam și accesorii. Programăm măsurătorile la locație și elaborăm oferta finală detaliată.' },
              { n:'03', title:'Transport & Montaj', desc:'Fabricare 2–4 săptămâni, transport asigurat în toată UE, montaj profesional cu izolare perimetrală completă și certificat de garanție.' },
            ].map((s, i) => (
              <div key={s.n} className={`p-10 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-[#e5e5e5]' : ''}`}>
                <div className="font-condensed text-[3rem] font-light leading-none mb-6 select-none" style={{color:'#e5e5e5'}}>{s.n}</div>
                <h3 className="font-condensed text-xl font-semibold text-primary mb-3">{s.title}</h3>
                <p className="text-[0.84rem] leading-relaxed text-justify" style={{color:'#888'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DE CE NEOFORT */}
      <section className="py-20 border-b border-[#e5e5e5]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="sec-label">De ce Neofort BIZ</span>
              <h2 className="font-condensed text-4xl md:text-5xl font-semibold text-primary leading-tight">
                Calitate și angajamente<br/>fără compromisuri
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title:'Prețuri și condiții accesibile', desc:'Lucrăm permanent la raportul calitate–preț–utilitate pentru tâmplărie PVC și aluminiu și venim cu oferte câștigătoare.' },
                { title:'Consultanță și soluții inovatoare', desc:'Aducem pe piață cele mai noi produse: profile Salamander, sisteme Alumil, soluții nZEB și izolare perimetrală avansată.' },
                { title:'Calitate garantată, clienți fideli', desc:'Peste 50% din comenzi vin din recomandări sau de la clienți care revin. Garanție completă pe produse și montaj.' },
                { title:'21 ani experiență neîntreruptă', desc:'De peste două decenii Neofort BIZ este prezent activ în piața tâmplăriei PVC Salamander și aluminiu Alumil.' },
              ].map((item, i) => (
                <div key={i} className="border-t border-[#e5e5e5] pt-5">
                  <h3 className="font-condensed text-base font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-[0.8rem] leading-relaxed text-justify" style={{color:'#888'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{background:'#111'}}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="font-condensed font-semibold tracking-widest uppercase" style={{fontSize:'0.62rem', color:'#555'}}>Contactați-ne</span>
            <h2 className="font-condensed text-3xl md:text-4xl font-semibold text-white mt-2">
              Solicitați o ofertă gratuită<br/>pentru tâmplărie PVC sau aluminiu
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="contact"
              className="font-condensed font-semibold text-center transition-colors duration-200 hover:opacity-90"
              style={{fontSize:'0.68rem', letterSpacing:'0.18em', textTransform:'uppercase', background:'#4a7c59', color:'#fff', border:'1px solid #4a7c59', padding:'14px 32px'}}>
              CERERE OFERTĂ
            </Link>
            <a href="tel:+40752443435"
              className="font-condensed font-semibold text-center transition-all duration-200 hover:border-white hover:text-white"
              style={{fontSize:'0.68rem', letterSpacing:'0.18em', textTransform:'uppercase', border:'1px solid #333', color:'#888', padding:'14px 32px'}}>
              +40 752 443 435
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ href, topColor, tagColor, tag, title, desc, btnClass }) {
  return (
    <Link href={href} className="block bg-white flex flex-col transition-all duration-200 hover:shadow-md hover:border-[#ccc]"
      style={{border:`1px solid #e5e5e5`, borderTop:`3px solid ${topColor}`}}>
      <div className="p-7 flex flex-col flex-1">
        <p className="font-condensed font-semibold mb-3" style={{fontSize:'0.62rem', letterSpacing:'0.2em', textTransform:'uppercase', color:tagColor}}>{tag}</p>
        <h3 className="font-condensed text-xl font-semibold text-primary mb-3">{title}</h3>
        <p className="text-[0.8rem] leading-relaxed flex-1 text-justify" style={{color:'#888'}}>{desc}</p>
        <div className="mt-6">
          <span className={`prod-card-btn ${btnClass}`}>DETALII →</span>
        </div>
      </div>
    </Link>
  );
}
