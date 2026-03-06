import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: 'Tâmplărie PVC Salamander & Aluminiu Alumil | Termopane Neofort București',
    description: 'Neofort BIZ — tâmplărie PVC Salamander BluEvolution și aluminiu Alumil. Geam termopan nZEB, montaj profesional, livrare Europa. 21 ani experiență.',
  };
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'88vh', borderBottom:'1px solid #e8e8e8'}}>
        {/* PVC */}
        <Link href="tamplarie-pvc" className="group"
          style={{display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'56px 64px', background:'#f7f7f5', borderRight:'1px solid #e8e8e8', textDecoration:'none'}}>
          <span className="label">Tehnologie Germană</span>
          <div>
            <span className="label label-pvc">Profile PVC Salamander</span>
            <h2 style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:500, fontSize:'clamp(2.4rem,4.5vw,3.6rem)', color:'#1a1a1a', lineHeight:1.05, marginBottom:'20px', letterSpacing:'0.01em'}}>
              Tâmplărie<br/><strong style={{fontWeight:600}}>PVC Salamander</strong>
            </h2>
            <p style={{fontSize:'0.82rem', fontWeight:300, color:'#888', lineHeight:1.7, maxWidth:'320px', marginBottom:'36px', textAlign:'justify'}}>
              Eficiență energetică nZEB și design atemporal pentru proiecte rezidențiale de top. BluEvolution 92 · GreenEvolution 76 · 6 camere · Uw 0.70 W/m²K.
            </p>
            <span className="btn btn-pvc">VEZI PROFILE</span>
          </div>
        </Link>

        {/* Aluminiu */}
        <Link href="tamplarie-aluminiu" className="group"
          style={{display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'56px 64px', background:'#fff', textDecoration:'none'}}>
          <span className="label">Arhitectură Modernă</span>
          <div>
            <span className="label label-aluminiu">Profile Aluminiu Alumil</span>
            <h2 style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:500, fontSize:'clamp(2.4rem,4.5vw,3.6rem)', color:'#1a1a1a', lineHeight:1.05, marginBottom:'20px', letterSpacing:'0.01em'}}>
              Tâmplărie<br/><strong style={{fontWeight:600}}>Aluminiu Alumil</strong>
            </h2>
            <p style={{fontSize:'0.82rem', fontWeight:300, color:'#888', lineHeight:1.7, maxWidth:'320px', marginBottom:'36px', textAlign:'justify'}}>
              Suprafețe vitrate mari și durabilitate extremă pentru arhitectura contemporană. S77 Supreme · S67 Smartia · S700 · SF85 · sisteme glisante.
            </p>
            <span className="btn btn-aluminiu">VEZI SISTEME</span>
          </div>
        </Link>
      </section>

      {/* ── INTRO ── */}
      <section style={{padding:'80px 0', borderBottom:'1px solid #e8e8e8'}}>
        <div className="container">
          <span className="sec-label">Excelență în Tâmplărie Termoizolantă</span>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', marginTop:'8px'}}>
            <div>
              <h2 style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:500, fontSize:'2.2rem', color:'#1a1a1a', lineHeight:1.2, marginBottom:'20px', letterSpacing:'0.01em'}}>
                Tâmplărie PVC Salamander<br/>și Aluminiu Alumil
              </h2>
              <p style={{fontSize:'0.84rem', fontWeight:300, color:'#888', lineHeight:1.75, textAlign:'justify'}}>
                Alegerea între <strong style={{color:'#1a1a1a', fontWeight:500}}>tâmplărie PVC Salamander</strong> și <strong style={{color:'#1a1a1a', fontWeight:500}}>tâmplărie aluminiu Alumil</strong> este definitorie pentru eficiența energetică a oricărei construcții moderne. La Neofort BIZ integrăm tehnologia de vârf cu designul minimalist pentru bariere termice de neegalat. Profilele noastre sunt certificate <strong style={{color:'#1a1a1a', fontWeight:500}}>nZEB (Nearly Zero Energy Building)</strong>.
              </p>
            </div>
            <div>
              <p style={{fontSize:'0.84rem', fontWeight:300, color:'#888', lineHeight:1.75, textAlign:'justify'}}>
                Fie că optați pentru robustețea sistemelor de <strong style={{color:'#1a1a1a', fontWeight:500}}>aluminiu Alumil cu barieră termică</strong> sau pentru izolarea fonică superioară a <strong style={{color:'#1a1a1a', fontWeight:500}}>ferestrelor PVC Salamander</strong>, echipa noastră oferă consultanță tehnică dedicată și montaj profesional. Ne concentrăm pe detalii esențiale precum <strong style={{color:'#1a1a1a', fontWeight:500}}>bagheta warm-edge</strong> și pachete de sticlă tripan cu emisivitate scăzută.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', border:'1px solid #e8e8e8', marginTop:'56px'}}>
            {[['21+','Ani activitate neîntreruptă'],['nZEB','Certificate conformitate'],['50%+','Clienți recurenți'],['UE','Livrare Europa']].map(([n,l],i)=>(
              <div key={l} style={{padding:'28px 24px', textAlign:'center', borderRight: i<3 ? '1px solid #e8e8e8' : 'none'}}>
                <div style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:500, fontSize:'1.8rem', color:'#1a1a1a', lineHeight:1}}>{n}</div>
                <div style={{fontFamily:'Barlow Condensed, sans-serif', fontSize:'0.6rem', letterSpacing:'0.14em', textTransform:'uppercase', color:'#bbb', marginTop:'6px', lineHeight:1.3}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUSE ── */}
      <section style={{padding:'80px 0', background:'#f7f7f5', borderBottom:'1px solid #e8e8e8'}}>
        <div className="container">
          <span className="sec-label">Produse & Servicii</span>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px', marginTop:'8px'}}>
            <SmallCard href="tamplarie-pvc" topColor="#4a7c59" tagColor="#4a7c59"
              tag="Tâmplărie PVC Salamander"
              title="Profile PVC Salamander"
              desc="Furnizăm tâmplărie PVC Salamander BluEvolution 92 și GreenEvolution 76 din gamele premium, executată pe linii automatizate, certificată nZEB."
              btnClass="card-btn card-btn-pvc" />
            <SmallCard href="tamplarie-aluminiu" topColor="#2d5a8e" tagColor="#2d5a8e"
              tag="Tâmplărie Aluminiu Alumil"
              title="Sisteme Aluminiu Alumil"
              desc="Furnizăm aluminiu Alumil Supreme și Smartia — sisteme cu barieră termică pentru ferestre, uși, lifturi glisante și pereți cortină, certificate nZEB."
              btnClass="card-btn card-btn-aluminiu" />
            <SmallCard href="accesorii" topColor="#e8721c" tagColor="#e8721c"
              tag="Accesorii & Izolare"
              title="Izolare Perimetrală"
              desc="Bandă butilică, precadre Blaugelb Triotherm+, folie anticondens, rulouri aluminiu, jaluzele Raffstore, geam termopan Saint Gobain warm-edge."
              btnClass="card-btn card-btn-accesorii" />
          </div>
        </div>
      </section>

      {/* ── ETAPE ── */}
      <section style={{padding:'80px 0', borderBottom:'1px solid #e8e8e8'}}>
        <div className="container">
          <span className="sec-label">Cum lucrăm</span>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'40px'}}>
            <h2 style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:500, fontSize:'2rem', color:'#1a1a1a', letterSpacing:'0.01em'}}>Etapele colaborării</h2>
            <p style={{fontSize:'0.8rem', fontWeight:300, color:'#aaa', maxWidth:'240px', textAlign:'right', lineHeight:1.6}}>Claritate în 3 pași simpli. Specialiștii noștri vă însoțesc în fiecare etapă.</p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #e8e8e8'}}>
            {[
              {n:'01', title:'Elaborare ofertă', desc:'Transmiteți cererea prin formularul de contact, e-mail sau telefon & WhatsApp. Răspundem în aceeași zi lucrătoare.'},
              {n:'02', title:'Consultare & Măsurătoare', desc:'Stabilim configurația, tipul de profil, culoare, geam și accesorii. Programăm măsurătorile la locație și elaborăm oferta finală.'},
              {n:'03', title:'Transport & Montaj', desc:'Fabricare 2–4 săptămâni, transport asigurat în toată UE, montaj profesional cu izolare perimetrală și certificat de garanție.'},
            ].map((s,i)=>(
              <div key={s.n} style={{padding:'40px 36px', borderRight: i<2 ? '1px solid #e8e8e8' : 'none'}}>
                <div style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:300, fontSize:'2.8rem', color:'#ebebeb', lineHeight:1, marginBottom:'24px'}}>{s.n}</div>
                <h3 style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:500, fontSize:'1.05rem', color:'#1a1a1a', letterSpacing:'0.02em', marginBottom:'12px'}}>{s.title}</h3>
                <p style={{fontSize:'0.8rem', fontWeight:300, color:'#888', lineHeight:1.7, textAlign:'justify'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DE CE NOI ── */}
      <section style={{padding:'80px 0', borderBottom:'1px solid #e8e8e8'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'start'}}>
            <div>
              <span className="sec-label">De ce Neofort BIZ</span>
              <h2 style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:500, fontSize:'2.2rem', color:'#1a1a1a', lineHeight:1.2, letterSpacing:'0.01em'}}>
                Calitate și angajamente<br/>fără compromisuri
              </h2>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0'}}>
              {[
                {title:'Prețuri accesibile', desc:'Lucrăm permanent la raportul calitate–preț–utilitate pentru tâmplărie PVC și aluminiu.'},
                {title:'Soluții inovatoare', desc:'Profile Salamander, sisteme Alumil, soluții nZEB și izolare perimetrală avansată.'},
                {title:'Calitate garantată', desc:'Peste 50% din comenzi vin din recomandări sau de la clienți care revin constant.'},
                {title:'21 ani experiență', desc:'De peste două decenii activi în piața tâmplăriei PVC Salamander și aluminiu Alumil.'},
              ].map((item,i)=>(
                <div key={i} style={{padding:'24px 20px', borderTop:'1px solid #e8e8e8', borderRight: i%2===0 ? '1px solid #e8e8e8' : 'none'}}>
                  <h3 style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:500, fontSize:'0.88rem', letterSpacing:'0.04em', color:'#1a1a1a', marginBottom:'8px', textTransform:'uppercase'}}>{item.title}</h3>
                  <p style={{fontSize:'0.78rem', fontWeight:300, color:'#888', lineHeight:1.7, textAlign:'justify'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{padding:'72px 0', background:'#111'}}>
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'40px', flexWrap:'wrap'}}>
          <div>
            <span style={{fontFamily:'Barlow Condensed, sans-serif', fontSize:'0.62rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#555', display:'block', marginBottom:'10px'}}>Contactați-ne</span>
            <h2 style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:500, fontSize:'1.9rem', color:'#fff', lineHeight:1.2}}>
              Solicitați o ofertă gratuită<br/>pentru tâmplărie PVC sau aluminiu
            </h2>
          </div>
          <div style={{display:'flex', gap:'12px', flexShrink:0}}>
            <Link href="contact" className="btn btn-green">CERERE OFERTĂ</Link>
            <a href="tel:+40752443435" className="btn btn-white">+40 752 443 435</a>
          </div>
        </div>
      </section>
    </>
  );
}

function SmallCard({href, topColor, tagColor, tag, title, desc, btnClass}) {
  return (
    <Link href={href} style={{
      display:'flex', flexDirection:'column',
      background:'#fff',
      border:'1px solid #e8e8e8',
      borderTop:`3px solid ${topColor}`,
      textDecoration:'none',
      transition:'border-color 0.2s, box-shadow 0.2s',
    }}
    className="prod-card">
      <div style={{padding:'24px 24px 28px', display:'flex', flexDirection:'column', flex:1}}>
        <span style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:400, fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:tagColor, display:'block', marginBottom:'10px'}}>{tag}</span>
        <h3 style={{fontFamily:'Barlow Condensed, sans-serif', fontWeight:500, fontSize:'1rem', color:'#1a1a1a', marginBottom:'10px', letterSpacing:'0.02em'}}>{title}</h3>
        <p style={{fontSize:'0.78rem', fontWeight:300, color:'#888', lineHeight:1.7, flex:1, textAlign:'justify', marginBottom:'20px'}}>{desc}</p>
        <span className={btnClass}>DETALII →</span>
      </div>
    </Link>
  );
}
