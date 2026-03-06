'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const LOCALES = [['ro','RO'],['en','EN'],['de','DE'],['fr','FR'],['es','ES'],['it','IT']];

export default function Footer() {
  const locale = useLocale();
  return (
    <footer style={{background:'#111', color:'#666'}}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12" style={{borderBottom:'1px solid #222'}}>

          {/* Brand */}
          <div className="md:col-span-4">
            <div className="font-condensed font-semibold tracking-widest uppercase text-white mb-1" style={{fontSize:'1rem', letterSpacing:'0.15em'}}>NEOFORT</div>
            <div className="font-condensed tracking-wider uppercase mb-5" style={{fontSize:'0.6rem', color:'#555', letterSpacing:'0.12em'}}>Tâmplărie PVC · Aluminiu Alumil</div>
            <p className="text-[0.78rem] leading-relaxed mb-6" style={{color:'#555', maxWidth:'280px'}}>
              Furnizăm tâmplărie PVC Salamander și aluminiu Alumil cu geam termopan, certificată nZEB. Montaj profesional și livrare în toată Europa.
            </p>
            <p className="text-[0.68rem]" style={{color:'#444'}}>Marcă înregistrată O.S.I.M. nr. M 2014 05130</p>
            <div className="flex gap-4 mt-5">
              {[
                ['https://www.facebook.com/neofortconstructii','FB'],
                ['https://www.linkedin.com/company/neofort-biz','LI'],
                ['https://x.com/NeofortBIZ','X'],
                ['https://wa.me/40752443435','WA'],
                ['https://t.me/+w0I7TX9cnl03YTFk','TG'],
              ].map(([h,l])=>(
                <a key={l} href={h} target="_blank" rel="noopener noreferrer"
                  className="font-condensed font-semibold transition-colors duration-150 hover:text-white"
                  style={{fontSize:'0.62rem', letterSpacing:'0.1em', color:'#555'}}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Produse */}
          <div className="md:col-span-2">
            <div className="font-condensed font-semibold tracking-widest uppercase mb-5" style={{fontSize:'0.62rem', letterSpacing:'0.18em', color:'#444'}}>Produse</div>
            <ul className="space-y-3">
              {[
                [`/${locale}/tamplarie-pvc`,'PVC Salamander'],
                [`/${locale}/tamplarie-aluminiu`,'Aluminiu Alumil'],
                [`/${locale}/accesorii`,'Accesorii'],
              ].map(([h,l])=>(
                <li key={h}>
                  <Link href={h} className="text-[0.78rem] transition-colors duration-150 hover:text-white" style={{color:'#666'}}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <div className="font-condensed font-semibold tracking-widest uppercase mb-5" style={{fontSize:'0.62rem', letterSpacing:'0.18em', color:'#444'}}>Info</div>
            <ul className="space-y-3">
              {[
                [`/${locale}/servicii`,'Servicii'],
                [`/${locale}/despre`,'Despre Neofort'],
                [`/${locale}/blog`,'Blog'],
                [`/${locale}/gdpr`,'GDPR'],
              ].map(([h,l])=>(
                <li key={h}>
                  <Link href={h} className="text-[0.78rem] transition-colors duration-150 hover:text-white" style={{color:'#666'}}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="font-condensed font-semibold tracking-widest uppercase mb-5" style={{fontSize:'0.62rem', letterSpacing:'0.18em', color:'#444'}}>Contact</div>
            <p className="text-[0.78rem] mb-4 leading-relaxed" style={{color:'#555'}}>
              Str. Theodor Aman 11<br/>Sector 1, București 010776
            </p>
            {/* Contact table — elegant */}
            <div className="space-y-0">
              {[
                ['Oferte & Comenzi','+40 752 443 435','tel:+40752443435'],
                ['Export','+40 752 443 439','tel:+40752443439'],
                ['E-mail','oferte@neofort-biz.ro','mailto:oferte@neofort-biz.ro'],
              ].map(([label, val, href])=>(
                <div key={label} className="flex justify-between items-center py-2" style={{borderBottom:'1px solid #1e1e1e'}}>
                  <span className="font-condensed font-semibold tracking-widest uppercase" style={{fontSize:'0.6rem', color:'#444', letterSpacing:'0.15em'}}>{label}</span>
                  <a href={href} className="text-[0.76rem] transition-colors duration-150 hover:text-white" style={{color:'#666'}}>{val}</a>
                </div>
              ))}
            </div>
            {/* Limbi */}
            <div className="flex gap-3 mt-6">
              {LOCALES.map(([code, label])=>(
                <a key={code} href={`/${code}`}
                  className="font-condensed font-semibold transition-colors duration-150 hover:text-white"
                  style={{fontSize:'0.62rem', letterSpacing:'0.1em', color:'#444'}}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6">
          <span className="text-[0.72rem]" style={{color:'#3a3a3a'}}>© 2025 Neofort BIZ · neofort-biz.ro</span>
          <span className="text-[0.72rem]" style={{color:'#3a3a3a'}}>Tâmplărie PVC Salamander · Aluminiu Alumil · Geam Termopan · Europa</span>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context":"https://schema.org","@type":"LocalBusiness",
        "name":"Neofort BIZ","url":"https://www.neofort-biz.ro",
        "telephone":"+40215280661","email":"oferte@neofort-biz.ro",
        "description":"Furnizor tâmplărie PVC Salamander și aluminiu Alumil cu geam termopan nZEB. Montaj profesional, livrare Europa.",
        "address":{"@type":"PostalAddress","streetAddress":"Strada Theodor Aman Pictor 11","addressLocality":"București","postalCode":"010776","addressCountry":"RO"}
      })}}/>
    </footer>
  );
}
