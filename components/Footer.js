'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const LOCALES = [{code:'ro',label:'RO'},{code:'en',label:'EN'},{code:'de',label:'DE'},{code:'fr',label:'FR'},{code:'es',label:'ES'},{code:'it',label:'IT'}];

export default function Footer() {
  const loc = useLocale();
  return (
    <footer className="bg-[#111] text-gray-400">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="font-condensed text-white text-[1.1rem] font-semibold tracking-[0.16em] uppercase mb-1">Neofort</div>
            <div className="text-[0.6rem] tracking-[0.2em] text-gray-600 uppercase mb-5">Tâmplărie PVC · Aluminiu</div>
            <p className="text-[0.7rem] text-gray-600 leading-relaxed mb-5">Marcă înregistrată O.S.I.M.<br/>nr. M 2014 05130</p>
            <div className="flex gap-4 text-[0.68rem] tracking-[0.15em]">
              {[['https://www.facebook.com/neofortconstructii','FB'],['https://www.linkedin.com/company/neofort-biz','LI'],['https://x.com/NeofortBIZ','X'],['https://wa.me/40752443435','WA'],['https://t.me/+w0I7TX9cnl03YTFk','TG']].map(([href,lbl])=>(
                <a key={lbl} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">{lbl}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gray-600 mb-5 font-semibold font-condensed">Produse</div>
            <ul className="space-y-3 text-sm">
              <li><Link href={`/${loc}/tamplarie-pvc`}      className="hover:text-pvc transition-colors duration-200">Tâmplărie PVC Salamander</Link></li>
              <li><Link href={`/${loc}/tamplarie-aluminiu`} className="hover:text-aluminiu transition-colors duration-200">Tâmplărie Aluminiu Alumil</Link></li>
              <li><Link href={`/${loc}/accesorii`}          className="hover:text-accesorii transition-colors duration-200">Accesorii</Link></li>
              <li><Link href={`/${loc}/servicii`}           className="hover:text-white transition-colors duration-200">Servicii & Montaj</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gray-600 mb-5 font-semibold font-condensed">Contact</div>
            <ul className="space-y-2.5 text-[0.82rem]">
              <li className="text-gray-600 leading-relaxed">Str. Theodor Aman 11, Sector 1<br/>București 010776</li>
              <li><a href="tel:+40215280661"         className="hover:text-white transition-colors duration-200">Office: +40 21 528 0661</a></li>
              <li><a href="tel:+40752443435"         className="hover:text-white transition-colors duration-200">Oferte: +40 752 443 435</a></li>
              <li><a href="tel:+40752443439"         className="hover:text-white transition-colors duration-200">Export: +40 752 443 439</a></li>
              <li><a href="tel:+40752443431"         className="hover:text-white transition-colors duration-200">Tehnic: +40 752 443 431</a></li>
              <li><a href="tel:+40752443432"         className="hover:text-white transition-colors duration-200">Service: +40 752 443 432</a></li>
              <li><a href="mailto:oferte@neofort-biz.ro" className="hover:text-white transition-colors duration-200">oferte@neofort-biz.ro</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gray-600 mb-5 font-semibold font-condensed">Limbi</div>
            <div className="flex flex-wrap gap-3 mb-8">
              {LOCALES.map(l=>(
                <a key={l.code} href={`/${l.code}`}
                  className={`text-[0.68rem] tracking-[0.15em] transition-colors duration-200 ${loc===l.code?'text-white font-semibold':'text-gray-500 hover:text-white'}`}>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gray-600 mb-4 font-semibold font-condensed">Info</div>
            <ul className="space-y-2.5 text-[0.82rem]">
              <li><Link href={`/${loc}/despre`} className="hover:text-white transition-colors duration-200">Despre Neofort</Link></li>
              <li><Link href={`/${loc}/blog`}   className="hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link href={`/${loc}/gdpr`}   className="hover:text-white transition-colors duration-200">GDPR</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-[0.7rem] text-gray-600">
          <span>© 2025 Neofort BIZ · neofort-biz.ro</span>
          <span>PVC Salamander · Aluminiu Alumil · Geam Termopan · Europa</span>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context":"https://schema.org","@type":["LocalBusiness","Store"],"name":"Neofort BIZ",
        "url":"https://www.neofort-biz.ro","telephone":"+40215280661","email":"oferte@neofort-biz.ro",
        "address":{"@type":"PostalAddress","streetAddress":"Strada Theodor Aman Pictor 11","addressLocality":"București","postalCode":"010776","addressCountry":"RO"},
        "sameAs":["https://www.facebook.com/neofortconstructii","https://www.linkedin.com/company/neofort-biz"]
      })}}/>
    </footer>
  );
}
