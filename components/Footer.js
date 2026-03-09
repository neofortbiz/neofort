'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const LOCALES = [['ro','RO'],['en','EN'],['de','DE'],['fr','FR'],['es','ES'],['it','IT']];

const PRODUSE = [
  'Tâmplărie PVC Salamander','Tâmplărie Aluminiu Alumil','Geam Termoizolator 2 Foi',
  'Geam Termoizolator 3 Foi','Precadre Blaugelb Triotherm+','Baghete Warm Edge',
  'Bandă Butilică Etanșare','Benzi Etanșare Vapori','Profile de Renovare',
  'Pervazuri de Interior','Pervazuri de Exterior','Jaluzele Venețiene Raffstore',
  'Rulouri Exterioare Aluminiu','Sisteme Ventilație','Sisteme Culisante',
  'Uși de Intrare Premium','Uși de Garaj'
];

export default function Footer() {
  const locale = useLocale();
  const pathname = usePathname();
  const switchLocale = (l) => { const p = pathname.split('/'); p[1] = l; return p.join('/'); };

  const [files, setFiles] = useState([]);
  const [gdpr, setGdpr] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleFiles = (e) => {
    const selected = Array.from(e.target.files).slice(0, 7);
    setFiles(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gdpr) {
      alert('Vă rugăm să acceptați Politica de Confidențialitate.');
      return;
    }
    setStatus('sending');
    const form = e.target;
    const fd = new FormData();
    fd.append('nume', form.nume.value);
    fd.append('telefon', form.telefon.value);
    fd.append('email', form.email.value);
    fd.append('comanda', form.comanda.value);
    fd.append('adresa', form.adresa.value);
    // Checkboxuri produse
    PRODUSE.forEach((item, i) => {
      const cb = form.querySelector(`#cb${i}`);
      if (cb && cb.checked) fd.append('produse', item);
    });
    // Fișiere atașate
    files.forEach(f => fd.append('files', f));

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
        setFiles([]);
        setGdpr(false);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Informații companie Neofort BIZ">

      {/* ── FORMULAR CONTACT ── */}
      <div style={{background:'#111',borderTop:'1px solid #222',padding:'72px 0 0'}}>
        <div className="footer-inner">
          <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:300,fontSize:'2rem',letterSpacing:'.32em',textTransform:'uppercase',color:'#fff',textAlign:'center',marginBottom:'56px'}}>
            Solicită Ofertă Tehnică
          </h2>

          {status === 'success' ? (
            <div style={{border:'1px solid #2a2a2a',padding:'64px 32px',textAlign:'center'}}>
              <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'1.2rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#fff',marginBottom:'12px'}}>
                Solicitarea a fost trimisă!
              </div>
              <p style={{fontFamily:'Barlow,sans-serif',fontSize:'.84rem',fontWeight:300,color:'#888',marginBottom:'32px'}}>
                Vă vom contacta în maxim 2 zile lucrătoare.
              </p>
              <button onClick={() => setStatus('idle')} style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.68rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#fff',background:'transparent',border:'1px solid #333',padding:'12px 32px',cursor:'pointer'}}>
                Trimite altă solicitare
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{border:'1px solid #2a2a2a'}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1.6fr 1.4fr'}}>

                  {/* Col 1 - Departamente */}
                  <div style={{padding:'36px 32px',borderRight:'1px solid #2a2a2a'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.6rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#fff',display:'block',paddingBottom:'14px',borderBottom:'1px solid #2a2a2a',marginBottom:'24px'}}>Departamente</span>
                    {[['Office','+40 21 528 06 61','tel:+40215280661'],['Oferte','+40 752 443 435','tel:+40752443435'],['Export','+40 752 443 439','tel:+40752443439'],['Tehnic','+40 752 443 431','tel:+40752443431'],['Service','+40 752 443 432','tel:+40752443432'],['Programări','+40 758 990 048','tel:+40758990048']].map(([l,v,h])=>(
                      <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #1e1e1e'}}>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.72rem',fontWeight:300,color:'#888'}}>{l}</span>
                        <a href={h} style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.72rem',fontWeight:400,color:'#ccc',textDecoration:'none'}}>{v}</a>
                      </div>
                    ))}
                    <div style={{marginTop:'20px'}}>
                      {[['E-mail Oferte','mailto:oferte@neofort-biz.ro'],['E-mail Comenzi','mailto:comenzi@neofort-biz.ro'],['E-mail Service','mailto:service@neofort-biz.ro']].map(([l,h])=>(
                        <a key={l} href={h} style={{display:'flex',alignItems:'center',gap:'8px',fontFamily:'Barlow Condensed,sans-serif',fontSize:'.67rem',fontWeight:300,color:'#888',textDecoration:'none',letterSpacing:'.08em',textTransform:'uppercase',padding:'8px 0',borderBottom:'1px solid #1e1e1e'}}>{l}</a>
                      ))}
                    </div>
                  </div>

                  {/* Col 2 - Date Client */}
                  <div style={{padding:'36px 32px',borderRight:'1px solid #2a2a2a'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.6rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#fff',display:'block',paddingBottom:'14px',borderBottom:'1px solid #2a2a2a',marginBottom:'24px'}}>Date Client</span>
                    {[['text','Nume Complet *','nume'],['tel','Telefon *','telefon'],['email','E-mail *','email']].map(([type,ph,name])=>(
                      <div key={name} style={{marginBottom:'16px'}}>
                        <input type={type} name={name} placeholder={ph} required={ph.includes('*')} style={{width:'100%',background:'transparent',border:'none',borderBottom:'1px solid #333',padding:'10px 0',fontFamily:'Barlow,sans-serif',fontSize:'.82rem',fontWeight:300,color:'#ddd',outline:'none',boxSizing:'border-box'}}/>
                      </div>
                    ))}
                    <div style={{marginBottom:'16px'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.57rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#666',display:'block',marginBottom:'5px'}}>Comanda să fie cu:</span>
                      <select name="comanda" style={{width:'100%',background:'#111',border:'none',borderBottom:'1px solid #333',padding:'10px 0',fontFamily:'Barlow Condensed,sans-serif',fontSize:'.67rem',letterSpacing:'.1em',textTransform:'uppercase',color:'#ddd',outline:'none',appearance:'none',boxSizing:'border-box'}}>
                        <option>Măsurătoare, Transport și Montaj</option>
                        <option>Transport și Montaj</option>
                        <option>Coletare și Transport Intern</option>
                        <option>Coletare și Transport Export</option>
                        <option>Coletare / Ridicare din Depozit</option>
                      </select>
                    </div>
                    <div style={{marginBottom:'16px'}}>
                      <input type="text" name="adresa" placeholder="Adresă de Livrare *" required style={{width:'100%',background:'transparent',border:'none',borderBottom:'1px solid #333',padding:'10px 0',fontFamily:'Barlow,sans-serif',fontSize:'.82rem',fontWeight:300,color:'#ddd',outline:'none',boxSizing:'border-box'}}/>
                    </div>
                    <div style={{marginTop:'20px'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.57rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#666',display:'block',marginBottom:'8px'}}>Atașați schițe (max 7):</span>
                      <input type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.dwg" onChange={handleFiles} style={{fontFamily:'Barlow,sans-serif',fontSize:'.74rem',fontWeight:300,color:'#777'}}/>
                      {files.length > 0 && <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',color:'#666',display:'block',marginTop:'4px'}}>{files.length} fișier(e) selectate</span>}
                    </div>
                  </div>

                  {/* Col 3 - Checkboxuri */}
                  <div style={{padding:'36px 32px'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.6rem',letterSpacing:'.18em',textTransform:'uppercase',color:'#fff',display:'block',paddingBottom:'14px',borderBottom:'1px solid #2a2a2a',marginBottom:'12px'}}>Cererea va conține:</span>
                    {PRODUSE.map((item,i)=>(
                      <div key={i} style={{display:'flex',alignItems:'center',gap:'10px',padding:'5px 0',borderBottom:'1px solid #1e1e1e'}}>
                        <input type="checkbox" id={`cb${i}`} style={{width:'13px',height:'13px',accentColor:'#fff',flexShrink:0,cursor:'pointer'}}/>
                        <label htmlFor={`cb${i}`} style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.67rem',fontWeight:300,letterSpacing:'.07em',textTransform:'uppercase',color:'#aaa',cursor:'pointer'}}>{item}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GDPR */}
                <div style={{padding:'20px 32px',borderTop:'1px solid #2a2a2a',display:'flex',alignItems:'flex-start',gap:'12px'}}>
                  <input type="checkbox" id="gdpr-cb" checked={gdpr} onChange={e=>setGdpr(e.target.checked)} style={{width:'13px',height:'13px',accentColor:'#fff',flexShrink:0,marginTop:'3px',cursor:'pointer'}}/>
                  <label htmlFor="gdpr-cb" style={{fontFamily:'Barlow,sans-serif',fontSize:'.76rem',fontWeight:300,color:'#888',lineHeight:1.6}}>
                    Am citit și sunt de acord cu <Link href={`/${locale}/gdpr`} style={{color:'#bbb',textDecoration:'underline'}}>Politica de Confidențialitate</Link> și <Link href={`/${locale}/gdpr`} style={{color:'#bbb',textDecoration:'underline'}}>Politica de Cookies</Link> a Neofort BIZ. *
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{width:'100%',fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.76rem',letterSpacing:'.25em',textTransform:'uppercase',color:'#fff',background: status === 'sending' ? '#222' : '#1a1a1a',border:'none',borderTop:'1px solid #2a2a2a',padding:'22px 48px',cursor: status === 'sending' ? 'not-allowed' : 'pointer',display:'block',transition:'background .2s'}}>
                  {status === 'sending' ? 'Se trimite...' : status === 'error' ? 'Eroare — Încearcă din nou' : 'Trimite Solicitarea'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ── FOOTER GRID ── */}
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
            {['Sâmbătă','Duminică'].map(z=>(
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
