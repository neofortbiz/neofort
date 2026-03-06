import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'servicii' });
  return { title: t('title'), description: t('description') };
}

const SERVICII = [
  {
    id:'01', slug:'consultanta', color:'#4a7c59',
    title:'Consultanță tehnică',
    short:'Analiză personalizată a nevoilor și recomandare soluție optimă.',
    desc:'Specialiștii noștri analizează cerințele specifice ale fiecărui proiect și recomandă cea mai potrivită soluție de tâmplărie — profil, geam, accesorii, culori, sisteme de deschidere. Consultanța este inclusă în procesul de ofertare.',
    specs:[
      ['Disponibilitate','Luni – Vineri, 08:00 – 18:00'],
      ['Canal','Telefon · E-mail · WhatsApp'],
      ['Limbă','RO · EN · DE · FR · ES · IT'],
      ['Durată','30 – 60 min per proiect'],
    ],
  },
  {
    id:'02', slug:'masuratori', color:'#2d5a8e',
    title:'Măsurători',
    short:'Măsurători la față de tencuială sau la față de glaf, cu protocol scris.',
    desc:'Echipa noastră realizează măsurătorile necesare pentru fabricarea exactă a tâmplăriei. Protocoalele de măsurătoare sunt transmise în scris și includ detalii despre sistemul de montaj, izolarea perimetrală și accesorii.',
    specs:[
      ['Tip','La față de tencuială / glaf'],
      ['Documentație','Protocol scris inclus'],
      ['Zonă','București, Ilfov + împrejurimi'],
      ['Programare','Telefon +40 758 990 048'],
    ],
  },
  {
    id:'03', slug:'transport', color:'#e8721c',
    title:'Transport',
    short:'Livrare internă și internațională în toată Comunitatea Europeană.',
    desc:'Livrăm produsele noastre în toată Comunitatea Europeană rapid și în siguranță. Asigurăm ambalarea și paletizarea profesională. Toate transporturile beneficiază de asigurare internațională pe durata tranzitului.',
    specs:[
      ['Acoperire','România + toată UE'],
      ['Ambalare','Profesională, antișoc'],
      ['Asigurare','Internațională inclus'],
      ['Termen','2–4 săptămâni de la contract'],
    ],
  },
  {
    id:'04', slug:'montaj', color:'#4a7c59',
    title:'Montaj profesional',
    short:'Echipe specializate cu experiență de peste 20 ani. Garanție completă.',
    desc:'Executăm montaje cu profesioniști cu vastă experiență în domeniu. Garantăm calitatea montajelor de tâmplărie la orice nivel de complexitate. Montajul include izolarea perimetrală cu bandă precomprimată, precadre și folii antivapori.',
    specs:[
      ['Experiență','20+ ani echipe specializate'],
      ['Izolare','Bandă precomprimată · Precadre · Folii'],
      ['Garanție','Completă pe produs și manoperă'],
      ['Zona','București · Ilfov · național'],
    ],
  },
  {
    id:'05', slug:'service', color:'#2d5a8e',
    title:'Service post-vânzare',
    short:'Intervenții rapide, reglaje și remedieri. Suport tehnic continuu.',
    desc:'Asigurăm service post-vânzare rapid și eficient. Echipa de service intervine pentru reglaje de feronerie, remedieri și înlocuiri de componente. Contactul se face direct la numărul de service dedicat.',
    specs:[
      ['Contact service','+40 752 443 432'],
      ['Reglaje','Feronerie, etanșeizare'],
      ['Intervenție','În limita zonei de acoperire'],
      ['Garanție','Confirmată prin certificat'],
    ],
  },
];

export default function ServiciiPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">Neofort BIZ</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">Servicii</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">
            Consultanță. Măsurători. Transport. Montaj. Service. — Un serviciu complet, de la primul contact până la garanție.
          </p>
        </div>
      </div>

      {/* De ce Neofort — band */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="sec-label">De ce să alegi Neofort?</span>
              <h2 className="font-condensed text-3xl font-semibold text-primary mb-4">Suntem pe piață de 20 ani cu activitate neîntreruptă</h2>
              <p className="text-[0.88rem] text-muted leading-relaxed">
                Peste 50% din comenzi vin din recomandări sau de la clienți care revin constant. Implementăm cele mai noi și performante soluții tehnice. Executăm lucrări cu grad mare de complexitate și îmbunătățim permanent raportul calitate–utilitate–preț.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 border border-border">
              {[['EXPERTIZĂ','Consultanță'],['PRECIZIE','Măsurători'],['RAPIDITATE','Transport'],['CALITATE','Montaj'],['PROMPTITUDINE','Service'],['GARANȚIE','Completă']].map(([top,bot],i)=>(
                <div key={i} className={`p-5 text-center ${i%3!==2?'border-r border-border':''} ${i<3?'border-b border-border':''}`}>
                  <div className="font-condensed text-[0.65rem] tracking-[0.18em] font-semibold text-primary mb-1">{top}</div>
                  <div className="text-[0.72rem] text-muted">{bot}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cards servicii */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <span className="sec-label">Ce includem</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {SERVICII.map(s=>(
              <div key={s.id} className="prod-card group">
                {/* color bar top */}
                <div className="h-1 w-full" style={{background: s.color}}/>
                <div className="card-body">
                  <div className="text-[0.62rem] tracking-[0.2em] uppercase font-semibold font-condensed mb-3" style={{color: s.color}}>
                    {s.id}
                  </div>
                  <h3 className="font-condensed text-[1.3rem] font-semibold text-primary mb-2">{s.title}</h3>
                  <p className="text-[0.8rem] text-muted mb-4 leading-relaxed">{s.short}</p>
                  <ul className="card-specs">
                    {s.specs.map(([k,v])=>(
                      <li key={k}><strong>{k}:</strong> {v}</li>
                    ))}
                  </ul>
                  <p className="text-[0.8rem] text-muted leading-relaxed mb-5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedura de lucru */}
      <section className="py-20 bg-light border-b border-border">
        <div className="container mx-auto px-6">
          <span className="sec-label">Procedura de lucru</span>
          <h2 className="font-condensed text-3xl font-semibold text-primary mb-12">Pași clari de la contact la livrare</h2>
          <div className="space-y-0 border border-border">
            {[
              { n:'1', title:'Contact inițial',           desc:'Examinați detaliile produselor noastre sau trimiteți o solicitare prin formularul de contact, e-mail sau telefon & WhatsApp.' },
              { n:'2', title:'Consultare personalizată',  desc:'Un reprezentant vă contactează pentru a stabili, telefonic sau prin e-mail, cea mai potrivită soluție de tâmplărie în funcție de nevoile dvs.' },
              { n:'3', title:'Cerere de ofertă',          desc:'Transmiteți cererea cu schița tabloului de tâmplărie: tip profil, culoare, tip geam termoizolator, accesorii.' },
              { n:'4', title:'Elaborare ofertă',          desc:'Pe baza informațiilor complete, elaborăm oferta și vă comunicăm prețul total pentru marfă și serviciile comandate.' },
              { n:'5', title:'Contract & avans',          desc:'Contractul se semnează la sediul nostru sau online. Se emite factura de avans (fără TVA pentru exporturi EUID intracomunitar).' },
              { n:'6', title:'Fabricare & livrare',       desc:'Comanda este fabricată și livrată în 2–4 săptămâni. Toate transporturile beneficiază de asigurare internațională.' },
              { n:'7', title:'Finalizare',                desc:'Se emit: factura pentru rest de plată, certificatul de garanție și certificările pentru tâmplărie cu geam termoizolator.' },
            ].map((step,i)=>(
              <div key={i} className={`flex gap-6 p-6 bg-white items-start ${i<6?'border-b border-border':''}`}>
                <div className="font-condensed text-[0.65rem] tracking-[0.15em] font-semibold text-muted shrink-0 w-5 pt-0.5">{step.n}.</div>
                <div>
                  <h3 className="font-condensed text-[1rem] font-semibold text-primary mb-1">{step.title}</h3>
                  <p className="text-[0.82rem] text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="font-condensed text-2xl md:text-3xl font-semibold text-white">Solicitați o ofertă</h2>
            <p className="text-[0.82rem] text-gray-500 mt-1">Consultanță gratuită · Răspuns în aceeași zi</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="../contact" className="bg-pvc text-white font-condensed text-[0.7rem] tracking-[0.18em] uppercase font-semibold px-8 py-4 hover:bg-green-700 transition-colors duration-200 text-center">
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
