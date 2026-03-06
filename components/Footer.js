'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const LOCALES = [['ro','RO'],['en','EN'],['de','DE'],['fr','FR'],['es','ES'],['it','IT']];

export default function Footer() {
  const locale = useLocale();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <span className="footer-logo">NEOFORT</span>
            <span className="footer-logo-sub">Tâmplărie PVC · Aluminiu Alumil</span>
            <p className="footer-desc">
              Furnizăm tâmplărie PVC Salamander și aluminiu Alumil cu geam termopan, certificată nZEB. Montaj profesional și livrare în toată Europa.
            </p>
            <span className="footer-osim">Marcă înregistrată O.S.I.M. nr. M 2014 05130</span>
            <div className="footer-social">
              {[['https://www.facebook.com/neofortconstructii','FB'],['https://www.linkedin.com/company/neofort-biz','LI'],['https://x.com/NeofortBIZ','X'],['https://wa.me/40752443435','WA'],['https://t.me/+w0I7TX9cnl03YTFk','TG']].map(([h,l])=>(
                <a key={l} href={h} target="_blank" rel="noopener noreferrer">{l}</a>
              ))}
            </div>
          </div>

          {/* Produse */}
          <div>
            <div className="footer-col-title">Produse</div>
            <ul className="footer-links">
              {[[`/${locale}/tamplarie-pvc`,'PVC Salamander'],[`/${locale}/tamplarie-aluminiu`,'Aluminiu Alumil'],[`/${locale}/accesorii`,'Accesorii']].map(([h,l])=>(
                <li key={h}><Link href={h}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <div className="footer-col-title">Info</div>
            <ul className="footer-links">
              {[[`/${locale}/servicii`,'Servicii'],[`/${locale}/despre`,'Despre'],[`/${locale}/blog`,'Blog'],[`/${locale}/gdpr`,'GDPR']].map(([h,l])=>(
                <li key={h}><Link href={h}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contact</div>
            <p style={{fontSize:'0.75rem', fontWeight:300, color:'#555', marginBottom:'12px', lineHeight:1.6}}>
              Str. Theodor Aman 11<br/>Sector 1, București 010776
            </p>
            <div>
              {[['Oferte','+40 752 443 435','tel:+40752443435'],['Export','+40 752 443 439','tel:+40752443439'],['E-mail','oferte@neofort-biz.ro','mailto:oferte@neofort-biz.ro']].map(([label,val,href])=>(
                <div key={label} className="footer-contact-row">
                  <span className="footer-contact-label">{label}</span>
                  <a href={href} className="footer-contact-val">{val}</a>
                </div>
              ))}
            </div>
            <div className="footer-langs">
              {LOCALES.map(([code,label])=>(
                <a key={code} href={`/${code}`} className={`footer-lang ${locale===code?'active':''}`}>{label}</a>
              ))}
            </div>
          </div>

        </div>
        <div className="footer-bottom">
          <span>© 2025 Neofort BIZ · neofort-biz.ro</span>
          <span>Tâmplărie PVC Salamander · Aluminiu Alumil · Geam Termopan · Europa</span>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Neofort BIZ","url":"https://www.neofort-biz.ro","telephone":"+40215280661","email":"oferte@neofort-biz.ro","description":"Furnizor tâmplărie PVC Salamander și aluminiu Alumil cu geam termopan nZEB.","address":{"@type":"PostalAddress","streetAddress":"Strada Theodor Aman Pictor 11","addressLocality":"București","postalCode":"010776","addressCountry":"RO"}})}}/>
    </footer>
  );
}
