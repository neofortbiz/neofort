'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

const LOCALES = [['ro','RO'],['en','EN'],['de','DE'],['fr','FR'],['es','ES'],['it','IT']];

export default function Footer() {
  const locale = useLocale();
  const pathname = usePathname();
  const switchLocale = (l) => { const p = pathname.split('/'); p[1] = l; return p.join('/'); };

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Informații companie Neofort BIZ">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <span className="footer-logo">NEOFORT</span>
            <span className="footer-logo-sub">Tâmplărie PVC · Aluminiu</span>
            <p className="footer-desc">Furnizăm tâmplărie PVC Salamander și aluminiu Alumil cu geam termopan certificat nZEB. Precadre Blaugelb Triotherm+, jaluzele Raffstore, rulouri aluminiu. Montaj profesional și livrare în toată Europa.</p>
            <span className="footer-osim">Marcă înregistrată O.S.I.M. nr. M 2014 05130</span>
            <div className="footer-social">
              {[['https://www.facebook.com/neofortconstructii','Facebook'],['https://www.linkedin.com/company/neofort-biz','LinkedIn'],['https://x.com/NeofortBIZ','X / Twitter'],['https://wa.me/40752443435','WhatsApp'],['https://t.me/+w0I7TX9cnl03YTFk','Telegram']].map(([h,l])=>(
                <a key={l} href={h} target="_blank" rel="noopener noreferrer" aria-label={l}>{l.split(' ')[0]}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Produse</div>
            <ul className="footer-links">
              <li><Link href={`/${locale}/tamplarie-pvc`}>Tâmplărie PVC Salamander</Link></li>
              <li><Link href={`/${locale}/tamplarie-aluminiu`}>Tâmplărie Aluminiu Alumil</Link></li>
              <li><Link href={`/${locale}/accesorii`}>Accesorii pentru Tâmplărie</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Info</div>
            <ul className="footer-links">
              <li><Link href={`/${locale}/servicii`}>Servicii</Link></li>
              <li><Link href={`/${locale}/despre`}>Despre</Link></li>
              <li><Link href={`/${locale}/blog`}>Blog</Link></li>
              <li><Link href={`/${locale}/gdpr`}>GDPR</Link></li>
            </ul>
          </div>

          <div className="footer-col-contact">
            <div className="footer-col-title">Contact</div>
            <p style={{fontSize:'.73rem',fontWeight:300,color:'#555',marginBottom:'10px',lineHeight:1.6}}>
              Str. Theodor Aman 11<br/>Sector 1, București 010776
            </p>
            {[['Oferte','+40 752 443 435','tel:+40752443435'],['Export','+40 752 443 439','tel:+40752443439'],['E-mail','oferte@neofort-biz.ro','mailto:oferte@neofort-biz.ro']].map(([label,val,href])=>(
              <div key={label} className="footer-contact-row">
                <span className="footer-contact-label">{label}</span>
                <a href={href} className="footer-contact-val">{val}</a>
              </div>
            ))}
            <div className="footer-langs">
              {LOCALES.map(([code,label])=>(
                <a key={code} href={switchLocale(code)} className={`footer-lang ${locale===code?'active':''}`}>{label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Neofort BIZ · neofort-biz.ro</span>
          <span>Tâmplărie PVC Salamander · Aluminiu Alumil · Geam Termopan · Europa</span>
        </div>
      </div>
    </footer>
  );
}
