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

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0}}>
          <div style={{padding:'32px 32px 12px 0'}}>
            <span className="footer-logo">NEOFORT</span>
          </div>
          <div></div><div></div><div></div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,padding:'0 0 36px',borderBottom:'1px solid #1e1e1e',alignItems:'start'}}>
          <div style={{padding:'0 32px 32px 0'}}>
            <div className="footer-col-title">Tâmplărie PVC · Aluminiu</div>
            <p className="footer-desc">Furnizăm tâmplărie PVC Salamander și aluminiu Alumil cu geam termopan certificat nZEB. Precadre Blaugelb Triotherm+, jaluzele Raffstore, rulouri aluminiu. Montaj profesional și livrare în toată Europa.</p>
            <div className="footer-social">
              {[['https://www.facebook.com/neofortconstructii','Facebook'],['https://www.linkedin.com/company/neofort-biz','LinkedIn'],['https://x.com/NeofortBIZ','X'],['https://wa.me/40752443435','WhatsApp'],['https://t.me/+w0I7TX9cnl03YTFk','Telegram']].map(([h,l])=>(
                <a key={l} href={h} target="_blank" rel="noopener noreferrer" aria-label={l}>{l.split(' ')[0]}</a>
              ))}
            </div>
          </div>

          <div style={{padding:'0 32px 32px 32px',borderLeft:'1px solid #1e1e1e'}}>
            <div className="footer-col-title">Produse</div>
            <ul className="footer-links">
              <li><Link href={`/${locale}/tamplarie-pvc`}>Tâmplărie PVC Salamander</Link></li>
              <li><Link href={`/${locale}/tamplarie-aluminiu`}>Tâmplărie Aluminiu Alumil</Link></li>
              <li><Link href={`/${locale}/accesorii`}>Accesorii pentru Tâmplărie</Link></li>
            </ul>
          </div>

          <div style={{padding:'0 32px 32px 32px',borderLeft:'1px solid #1e1e1e'}}>
            <div className="footer-col-title">Info</div>
            <ul className="footer-links">
              <li><Link href={`/${locale}/servicii`}>Servicii</Link></li>
              <li><Link href={`/${locale}/despre`}>Despre</Link></li>
              <li><Link href={`/${locale}/blog`}>Blog</Link></li>
              <li><Link href={`/${locale}/gdpr`}>Politica GDPR</Link></li>
              <li><Link href={`/${locale}/gdpr`}>Politica Cookies</Link></li>
            </ul>
          </div>

          <div style={{padding:'0 0 32px 32px',borderLeft:'1px solid #1e1e1e'}}>
            <div className="footer-col-title">Program de Lucru</div>
            {[['Luni','10:00 — 18:00'],['Marți','10:00 — 18:00'],['Miercuri','10:00 — 18:00'],['Joi','10:00 — 18:00'],['Vineri','10:00 — 18:00']].map(([z,h])=>(
              <div key={z} className="schedule-row">
                <span className="schedule-day">{z}</span>
                <span className="schedule-hours">{h}</span>
              </div>
            ))}
            {[['Sâmbătă','Închis'],['Duminică','Închis']].map(([z])=>(
              <div key={z} className="schedule-row">
                <span className="schedule-day">{z}</span>
                <span className="schedule-closed">Închis</span>
              </div>
            ))}
            <a href="https://maps.google.com/?q=Strada+Theodor+Aman+11,+București" target="_blank" rel="noopener noreferrer" className="maps-link">Vezi pe Google Maps</a>
            <div className="footer-langs" style={{marginTop:'20px'}}>
              {LOCALES.map(([code,label])=>(
                <a key={code} href={switchLocale(code)} className={`footer-lang ${locale===code?'active':''}`}>{label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Neofort BIZ · neofort-biz.ro · Marcă înregistrată O.S.I.M. nr. M 2014 05130</span>
          <span>Tâmplărie PVC Salamander · Aluminiu Alumil · Geam Termopan · Europa</span>
        </div>
      </div>
    </footer>
  );
}
