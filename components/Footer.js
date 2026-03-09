'use client';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
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

const EMPTY_ERR = { nume:'', telefon:'', email:'', comanda:'', adresa:'', gdpr:'' };

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('form');
  const pathname = usePathname();
  const switchLocale = (l) => { const p = pathname.split('/'); p[1] = l; return p.join('/'); };

  const [files, setFiles] = useState([]);
  const [gdpr, setGdpr] = useState(false);
  const [status, setStatus] = useState('idle');
  const [err, setErr] = useState(EMPTY_ERR);

  const handleFiles = (e) => setFiles(Array.from(e.target.files).slice(0, 7));

  const validate = (form) => {
    const e = { ...EMPTY_ERR };
    const nume    = form.nume.value.trim();
    const telefon = form.telefon.value.trim();
    const email   = form.email.value.trim();
    const comanda = form.comanda.value;
    const adresa  = form.adresa.value.trim();

    if (!nume)    e.nume = t('err_nume');
    if (!telefon) {
      e.telefon = t('err_telefon_gol');
    } else if (!/^[0-9\s\+\-\(\)]{7,20}$/.test(telefon)) {
      e.telefon = t('err_telefon_invalid');
    }
    if (!email) {
      e.email = t('err_email_gol');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = t('err_email_invalid');
    }
    if (!comanda) e.comanda = t('err_comanda');
    if (!adresa)  e.adresa  = t('err_adresa');
    if (!gdpr)    e.gdpr    = t('err_gdpr');
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const errs = validate(form);
    setErr(errs);
    if (Object.values(errs).some(v => v !== '')) {
      const firstKey = Object.keys(errs).find(k => errs[k] !== '');
      const el = firstKey === 'gdpr' ? document.getElementById('gdpr-cb') : form[firstKey];
      if (el) el.scrollIntoView({ behavior:'smooth', block:'center' });
      return;
    }
    setStatus('sending');
    const fd = new FormData();
    fd.append('nume',    form.nume.value.trim());
    fd.append('telefon', form.telefon.value.trim());
    fd.append('email',   form.email.value.trim());
    fd.append('comanda', form.comanda.value);
    fd.append('adresa',  form.adresa.value.trim());
    PRODUSE.forEach((item,i) => {
      const cb = form.querySelector(`#cb${i}`);
      if (cb && cb.checked) fd.append('produse', item);
    });
    files.forEach(f => fd.append('files', f));
    try {
      const res  = await fetch('/api/contact', { method:'POST', body:fd });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
        setFiles([]);
        setGdpr(false);
        setErr(EMPTY_ERR);
      } else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  // Stiluri
  const iBase = { width:'100%', background:'transparent', border:'none', padding:'10px 0', fontFamily:'Barlow,sans-serif', fontSize:'.82rem', fontWeight:300, color:'#ddd', outline:'none', boxSizing:'border-box' };
  const iStyle = (field) => ({ ...iBase, borderBottom: err[field] ? '1px solid #e05252' : '1px solid #333' });
  const ErrMsg = ({ field }) => err[field]
    ? <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.08em',color:'#e05252',display:'block',marginTop:'4px'}}>{err[field]}</span>
    : null;

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Informații companie Neofort BIZ">

      {/* ── FORMULAR CONTACT ── */}
      <div style={{background:'#111',borderTop:'1px solid #222',padding:'20px 0 0'}}>
        <div className="footer-inner">
          <div style={{textAlign:'center',marginBottom:'16px'}}>
            <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#bbb',display:'block',marginBottom:'6px'}}>
              Contactați-ne
            </span>
            <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.4rem, 3.5vw, 2.0rem)',color:'#fff',lineHeight:1.25}}>
              Solicitați o ofertă de preț<br/>
              pentru Tâmplărie PVC sau Tâmplărie aluminiu
            </h2>
          </div>

          {status === 'success' ? (
            <div style={{border:'1px solid #2a2a2a',padding:'64px 32px',textAlign:'center'}}>
              <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'1.2rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#fff',marginBottom:'12px'}}>
                {t('success_title')}
              </div>
              <p style={{fontFamily:'Barlow,sans-serif',fontSize:'.84rem',fontWeight:300,color:'#888',marginBottom:'32px'}}>
                {t('success_desc')}
              </p>
              <button onClick={()=>setStatus('idle')} style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.68rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#fff',background:'transparent',border:'1px solid #333',padding:'12px 32px',cursor:'pointer'}}>
                {t('success_btn')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{border:'1px solid #2a2a2a'}}>
                <div className="form-grid">

                  {/* Col 1 — Departamente (doar desktop) */}
                  <div className="form-col form-col-dept form-col-dept-desktop" style={{padding:'36px 32px',borderRight:'1px solid #2a2a2a'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.6rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#fff',display:'block',paddingBottom:'14px',borderBottom:'1px solid #2a2a2a',marginBottom:'24px'}}>Departamente</span>
                    {[
                      ['Office','+40 21 528 06 61','tel:+40215280661'],
                      ['Oferte','+40 752 443 435','tel:+40752443435'],
                      ['Export','+40 752 443 439','tel:+40752443439'],
                      ['Tehnic','+40 752 443 431','tel:+40752443431'],
                      ['Service','+40 752 443 432','tel:+40752443432'],
                      ['Programări','+40 758 990 048','tel:+40758990048'],
                    ].map(([l,v,h])=>(
                      <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #1e1e1e'}}>
                        <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.72rem',fontWeight:300,color:'#888'}}>{l}</span>
                        <a href={h} style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.72rem',fontWeight:400,color:'#ccc',textDecoration:'none'}}>{v}</a>
                      </div>
                    ))}
                    <div style={{marginTop:'20px'}}>
                      {[
                        ['E-mail Oferte','mailto:oferte@neofort-biz.ro'],
                        ['E-mail Comenzi','mailto:comenzi@neofort-biz.ro'],
                        ['E-mail Service','mailto:service@neofort-biz.ro'],
                      ].map(([l,h])=>(
                        <a key={l} href={h} style={{display:'flex',alignItems:'center',gap:'8px',fontFamily:'Barlow Condensed,sans-serif',fontSize:'.67rem',fontWeight:300,color:'#888',textDecoration:'none',letterSpacing:'.08em',textTransform:'uppercase',padding:'8px 0',borderBottom:'1px solid #1e1e1e'}}>{l}</a>
                      ))}
                    </div>
                  </div>

                  {/* Col 2 — Date Client */}
                  <div className="form-col form-col-client" style={{padding:'36px 32px',borderRight:'1px solid #2a2a2a'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.6rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#fff',display:'block',paddingBottom:'14px',borderBottom:'1px solid #2a2a2a',marginBottom:'24px'}}>Formular de contact</span>

                    <div style={{marginBottom:'16px'}}>
                      <input type="text" name="nume" placeholder="Nume Complet *" style={iStyle('nume')} onChange={()=>err.nume&&setErr(p=>({...p,nume:''}))}/>
                      <ErrMsg field="nume"/>
                    </div>

                    <div style={{marginBottom:'16px'}}>
                      <input type="tel" name="telefon" placeholder="Telefon *" style={iStyle('telefon')} onChange={()=>err.telefon&&setErr(p=>({...p,telefon:''}))}/>
                      <ErrMsg field="telefon"/>
                    </div>

                    <div style={{marginBottom:'16px'}}>
                      <input type="email" name="email" placeholder="E-mail *" style={iStyle('email')} onChange={()=>err.email&&setErr(p=>({...p,email:''}))}/>
                      <ErrMsg field="email"/>
                    </div>

                    <div style={{marginBottom:'16px'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.57rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#666',display:'block',marginBottom:'5px'}}>Comanda să fie cu: *</span>
                      <select name="comanda" defaultValue="" onChange={()=>err.comanda&&setErr(p=>({...p,comanda:''}))}
                        style={{width:'100%',background:'#111',border:'none',borderBottom: err.comanda ? '1px solid #e05252' : '1px solid #333',padding:'10px 0',fontFamily:'Barlow Condensed,sans-serif',fontSize:'.67rem',letterSpacing:'.1em',textTransform:'uppercase',color:'#ddd',outline:'none',appearance:'none',boxSizing:'border-box'}}>
                        <option value="" disabled>Selectați opțiunea *</option>
                        <option>Măsurătoare, Transport și Montaj</option>
                        <option>Transport și Montaj</option>
                        <option>Coletare și Transport Intern</option>
                        <option>Coletare și Transport Export</option>
                        <option>Coletare / Ridicare din Depozit</option>
                      </select>
                      <ErrMsg field="comanda"/>
                    </div>

                    <div style={{marginBottom:'16px'}}>
                      <input type="text" name="adresa" placeholder="Adresă de Livrare *" style={iStyle('adresa')} onChange={()=>err.adresa&&setErr(p=>({...p,adresa:''}))}/>
                      <ErrMsg field="adresa"/>
                    </div>

                    <div style={{marginTop:'20px'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.57rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#666',display:'block',marginBottom:'8px'}}>Atașați schițe (max 7):</span>
                      <input type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.dwg" onChange={handleFiles} style={{fontFamily:'Barlow,sans-serif',fontSize:'.74rem',fontWeight:300,color:'#777'}}/>
                      {files.length > 0 && <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',color:'#666',display:'block',marginTop:'4px'}}>{files.length} fișier(e) selectate</span>}
                    </div>
                  </div>

                  {/* Col 3 — Checkboxuri produse */}
                  <div className="form-col form-col-produse" style={{padding:'36px 32px'}}>
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
                <div style={{padding:'20px 32px',borderTop:'1px solid #2a2a2a'}}>
                  <div style={{display:'flex',alignItems:'flex-start',gap:'12px'}}>
                    <input type="checkbox" id="gdpr-cb" checked={gdpr}
                      onChange={e=>{ setGdpr(e.target.checked); if(e.target.checked) setErr(p=>({...p,gdpr:''})); }}
                      style={{width:'13px',height:'13px',accentColor:'#fff',flexShrink:0,marginTop:'3px',cursor:'pointer',outline: err.gdpr ? '1px solid #e05252' : 'none'}}
                    />
                    <label htmlFor="gdpr-cb" style={{fontFamily:'Barlow,sans-serif',fontSize:'.76rem',fontWeight:300,color: err.gdpr ? '#e05252' : '#888',lineHeight:1.6,cursor:'pointer'}}>
                      Am citit și sunt de acord cu{' '}
                      <Link href={`/${locale}/gdpr`} style={{color: err.gdpr ? '#e05252' : '#bbb',textDecoration:'underline'}}>Politica de Confidențialitate</Link>
                      {' '}și{' '}
                      <Link href={`/${locale}/gdpr`} style={{color: err.gdpr ? '#e05252' : '#bbb',textDecoration:'underline'}}>Politica de Cookies</Link>
                      {' '}a Neofort BIZ. *
                    </label>
                  </div>
                  <ErrMsg field="gdpr"/>
                </div>

                {/* Submit */}
                <button type="submit" disabled={status==='sending'}
                  style={{width:'100%',fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.76rem',letterSpacing:'.25em',textTransform:'uppercase',color:'#fff',background: status==='sending' ? '#222' : '#1a1a1a',border:'none',borderTop:'1px solid #2a2a2a',padding:'22px 48px',cursor: status==='sending' ? 'not-allowed' : 'pointer',display:'block',transition:'background .2s'}}>
                  {status==='sending' ? t('sending') : status==='error' ? t('error') : t('submit')}
                </button>

                {/* Departamente — doar mobil, după Submit */}
                <div className="form-col-dept-mobile" style={{padding:'36px 32px',borderTop:'1px solid #2a2a2a'}}>
                  <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.6rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#fff',display:'block',paddingBottom:'14px',borderBottom:'1px solid #2a2a2a',marginBottom:'24px'}}>Departamente</span>
                  {[
                    ['Office','+40 21 528 06 61','tel:+40215280661'],
                    ['Oferte','+40 752 443 435','tel:+40752443435'],
                    ['Export','+40 752 443 439','tel:+40752443439'],
                    ['Tehnic','+40 752 443 431','tel:+40752443431'],
                    ['Service','+40 752 443 432','tel:+40752443432'],
                    ['Programări','+40 758 990 048','tel:+40758990048'],
                  ].map(([l,v,h])=>(
                    <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #1e1e1e'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.72rem',fontWeight:300,color:'#888'}}>{l}</span>
                      <a href={h} style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.72rem',fontWeight:400,color:'#ccc',textDecoration:'none'}}>{v}</a>
                    </div>
                  ))}
                  <div style={{marginTop:'20px'}}>
                    {[
                      ['E-mail Oferte','mailto:oferte@neofort-biz.ro'],
                      ['E-mail Comenzi','mailto:comenzi@neofort-biz.ro'],
                      ['E-mail Service','mailto:service@neofort-biz.ro'],
                    ].map(([l,h])=>(
                      <a key={l} href={h} style={{display:'flex',alignItems:'center',gap:'8px',fontFamily:'Barlow Condensed,sans-serif',fontSize:'.67rem',fontWeight:300,color:'#888',textDecoration:'none',letterSpacing:'.08em',textTransform:'uppercase',padding:'8px 0',borderBottom:'1px solid #1e1e1e'}}>{l}</a>
                    ))}
                  </div>
                </div>

              </div>
            </form>
          )}
        </div>
      </div>

      {/* ── FOOTER GRID ── */}
      <div className="footer-inner">
        <div className="footer-grid-logo">
          <div style={{padding:'32px 32px 12px 0'}}>
            <span className="footer-logo">NEOFORT</span>
          </div>
          <div></div><div></div><div></div>
        </div>
        <div className="footer-grid-cols" style={{padding:'0 0 36px',borderBottom:'1px solid #1e1e1e',alignItems:'start'}}>
          <div className="footer-col-1">
            <div className="footer-col-title">Tâmplărie PVC · Aluminiu</div>
            <p className="footer-desc">Furnizăm tâmplărie PVC Salamander și aluminiu Alumil cu geam termopan certificat nZEB. Precadre Blaugelb Triotherm+, jaluzele Raffstore, rulouri aluminiu. Montaj profesional și livrare în toată Europa.</p>
            <div className="footer-social">
              {[
                ['https://www.facebook.com/neofortconstructii','Facebook'],
                ['https://www.linkedin.com/company/neofort-biz','LinkedIn'],
                ['https://x.com/NeofortBIZ','X'],
                ['https://wa.me/40752443435','WhatsApp'],
                ['https://t.me/+w0I7TX9cnl03YTFk','Telegram'],
              ].map(([h,l])=>(
                <a key={l} href={h} target="_blank" rel="noopener noreferrer" aria-label={l}>{l.split(' ')[0]}</a>
              ))}
            </div>
          </div>
          <div className="footer-col-2" style={{borderLeft:'1px solid #1e1e1e'}}>
            <div className="footer-col-title">Produse</div>
            <ul className="footer-links">
              <li><Link href={`/${locale}/tamplarie-pvc`}>Tâmplărie PVC Salamander</Link></li>
              <li><Link href={`/${locale}/tamplarie-aluminiu`}>Tâmplărie Aluminiu Alumil</Link></li>
              <li><Link href={`/${locale}/accesorii`}>Accesorii pentru Tâmplărie</Link></li>
            </ul>
          </div>
          <div className="footer-col-3" style={{borderLeft:'1px solid #1e1e1e'}}>
            <div className="footer-col-title">Info</div>
            <ul className="footer-links">
              <li><Link href={`/${locale}/servicii`}>Servicii</Link></li>
              <li><Link href={`/${locale}/despre`}>Despre</Link></li>
              <li><Link href={`/${locale}/blog`}>Blog</Link></li>
              <li><Link href={`/${locale}/gdpr`}>Politica GDPR</Link></li>
              <li><Link href={`/${locale}/gdpr`}>Politica Cookies</Link></li>
            </ul>
          </div>
          <div className="footer-col-4" style={{borderLeft:'1px solid #1e1e1e'}}>
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
