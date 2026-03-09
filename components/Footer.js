'use client';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link, usePathname } from '../i18n/navigation';

const LOCALES = [['ro','RO'],['en','EN'],['de','DE'],['fr','FR'],['es','ES'],['it','IT']];

const EMPTY_ERR = { nume:'', telefon:'', email:'', comanda:'', adresa:'', gdpr:'' };

export default function Footer() {
  const locale = useLocale();
  const t  = useTranslations('form');
  const tf = useTranslations('footer');
  const tn = useTranslations('nav');
  const pathname = usePathname();

  const [files, setFiles] = useState([]);
  const [gdpr, setGdpr] = useState(false);
  const [status, setStatus] = useState('idle');
  const [err, setErr] = useState(EMPTY_ERR);

  // Lista produse per limbă din messages
  const PRODUSE_RAW = {
    ro: ['Tâmplărie PVC Salamander','Tâmplărie Aluminiu Alumil','Geam Termoizolator 2 Foi','Geam Termoizolator 3 Foi','Precadre Blaugelb Triotherm+','Baghete Warm Edge','Bandă Butilică Etanșare','Benzi Etanșare Vapori','Profile de Renovare','Pervazuri de Interior','Pervazuri de Exterior','Jaluzele Venețiene Raffstore','Rulouri Exterioare Aluminiu','Sisteme Ventilație','Sisteme Culisante','Uși de Intrare Premium','Uși de Garaj'],
    en: ['PVC Salamander Windows','Aluminium Alumil Windows','Thermal Glass 2 Panes','Thermal Glass 3 Panes','Blaugelb Triotherm+ Precasings','Warm Edge Spacers','Butyl Sealing Tape','Vapour Sealing Tapes','Renovation Profiles','Interior Windowsills','Exterior Windowsills','Venetian Raffstore Blinds','Aluminium External Shutters','Ventilation Systems','Sliding Systems','Premium Entrance Doors','Garage Doors'],
    de: ['Kunststofffenster Salamander','Aluminiumfenster Alumil','Isolierglas 2 Scheiben','Isolierglas 3 Scheiben','Blaugelb Triotherm+ Vorfenster','Warm Edge Abstandhalter','Butyl-Dichtband','Dampfsperrband','Renovierungsprofile','Innenfensterbänke','Außenfensterbänke','Raffstore Jalousien','Außenrollläden aus Aluminium','Lüftungssysteme','Schiebesysteme','Premium Eingangstüren','Garagentore'],
    fr: ['Menuiserie PVC Salamander','Menuiserie Aluminium Alumil','Verre isolant 2 feuilles','Verre isolant 3 feuilles','Précadres Blaugelb Triotherm+','Baguettes Warm Edge','Bande d\'étanchéité en butyle','Bandes d\'étanchéité vapeur','Profils de rénovation','Appuis de fenêtre intérieurs','Appuis de fenêtre extérieurs','Persiennes Vénitiennes Raffstore','Volets roulants en aluminium','Systèmes d\'aération','Systèmes coulissants','Portes d\'entrée premium','Portes de garage'],
    es: ['Carpintería PVC Salamander','Carpintería Aluminio Alumil','Vidrio aislante doble hoja','Vidrio aislante triple hoja','Premarcos Blaugelb Triotherm+','Intercalario Warm Edge','Cinta Butílica de Sellado','Cintas de sellado de vapor','Marco de renovación','Alféizares interiores','Alféizares exteriores','Persianas Venecianas Raffstore','Persianas exteriores de aluminio','Sistemas de ventilación','Sistemas corredera/elevable','Puertas de entrada premium','Puertas de garaje'],
    it: ['Infissi Salamander in PVC','Infissi Alluminio Alumil','Vetro termoisolante 2 lastre','Vetro termoisolante 3 lastre','Pre-parete Blaugelb Triotherm+','Distanziatore Warm Edge','Nastro sigillante in butile','Nastri sigillanti al vapore','Telaio di ristrutturazione','Davanzali interni','Davanzali esterni','Veneziane Raffstore','Tapparelle esterne in alluminio','Sistemi di ventilazione','Sistemi scorrevoli','Porte d\'ingresso premium','Porte da garage'],
  };
  const PRODUSE = PRODUSE_RAW[locale] || PRODUSE_RAW.ro;

  // Opțiuni select per limbă
  const SELECT_OPTS = {
    ro: ['Măsurătoare, Transport și Montaj','Transport și Montaj','Coletare și Transport Intern','Coletare și Transport Export','Coletare / Ridicare din Depozit'],
    en: ['Measurement, Transport & Installation','Transport & Installation','Collection & Domestic Transport','Collection & Export Transport','Collection / Pickup from Warehouse'],
    de: ['Aufmaß, Transport & Montage','Transport & Montage','Abholung & Inlandstransport','Abholung & Exporttransport','Abholung / Selbstabholung aus Lager'],
    fr: ['Métrage, Transport & Pose','Transport & Pose','Enlèvement & Transport national','Enlèvement & Transport export','Enlèvement / Retrait en dépôt'],
    es: ['Medición, Transporte & Instalación','Transporte & Instalación','Recogida & Transporte nacional','Recogida & Transporte de exportación','Recogida / Retiro en almacén'],
    it: ['Rilievo, Trasporto & Installazione','Trasporto & Installazione','Ritiro & Trasporto nazionale','Ritiro & Trasporto export','Ritiro / Prelievo dal magazzino'],
  };
  const opts = SELECT_OPTS[locale] || SELECT_OPTS.ro;

  // Zile săptămână per limbă
  const SCHEDULE = {
    ro: { days:['Luni','Marți','Miercuri','Joi','Vineri'], weekend:['Sâmbătă','Duminică'], closed:'Închis' },
    en: { days:['Monday','Tuesday','Wednesday','Thursday','Friday'], weekend:['Saturday','Sunday'], closed:'Closed' },
    de: { days:['Montag','Dienstag','Mittwoch','Donnerstag','Freitag'], weekend:['Samstag','Sonntag'], closed:'Geschlossen' },
    fr: { days:['Lundi','Mardi','Mercredi','Jeudi','Vendredi'], weekend:['Samedi','Dimanche'], closed:'Fermé' },
    es: { days:['Lunes','Martes','Miércoles','Jueves','Viernes'], weekend:['Sábado','Domingo'], closed:'Cerrado' },
    it: { days:['Lunedì','Martedì','Mercoledì','Giovedì','Venerdì'], weekend:['Sabato','Domenica'], closed:'Chiuso' },
  };
  const sch = SCHEDULE[locale] || SCHEDULE.ro;

  // Texte footer columns per limbă
  const COL_TEXTS = {
    ro: { products:'Produse', info:'Info', brand:'Tâmplărie PVC · Aluminiu', schedule:'Program de Lucru', maps:'Vezi pe Google Maps', gdpr:'Politica GDPR', cookies:'Politica Cookies', servicii:'Servicii', despre:'Despre', blog:'Blog', pvc:'Tâmplărie PVC Salamander', aluminiu:'Tâmplărie Aluminiu Alumil', accesorii:'Accesorii pentru Tâmplărie', brand_desc:'Furnizăm tâmplărie PVC Salamander și aluminiu Alumil cu geam termopan certificat nZEB. Precadre Blaugelb Triotherm+, jaluzele Raffstore, rulouri aluminiu. Montaj profesional și livrare în toată Europa.' },
    en: { products:'Products', info:'Info', brand:'PVC · Aluminium Windows', schedule:'Opening Hours', maps:'View on Google Maps', gdpr:'GDPR Policy', cookies:'Cookie Policy', servicii:'Services', despre:'About', blog:'Blog', pvc:'PVC Salamander Windows', aluminiu:'Aluminium Alumil Windows', accesorii:'Window Accessories', brand_desc:'We supply Salamander PVC and Alumil aluminium windows with nZEB-certified thermal glass. Blaugelb Triotherm+ precasings, Raffstore blinds, aluminium shutters. Professional installation and EU delivery.' },
    de: { products:'Produkte', info:'Info', brand:'Kunststoff- · Aluminiumfenster', schedule:'Öffnungszeiten', maps:'Auf Google Maps anzeigen', gdpr:'Datenschutzrichtlinie', cookies:'Cookie-Richtlinie', servicii:'Dienstleistungen', despre:'Über uns', blog:'Blog', pvc:'Kunststofffenster Salamander', aluminiu:'Aluminiumfenster Alumil', accesorii:'Fensterzubehör', brand_desc:'Wir liefern Salamander Kunststoff- und Alumil Aluminiumfenster mit nZEB-zertifiziertem Isolierglas. Blaugelb Triotherm+ Vorfenster, Raffstore Jalousien, Aluminiumrollläden. Professionelle Montage und EU-Lieferung.' },
    fr: { products:'Produits', info:'Info', brand:'Menuiserie PVC · Aluminium', schedule:'Horaires d\'ouverture', maps:'Voir sur Google Maps', gdpr:'Politique RGPD', cookies:'Politique de cookies', servicii:'Services', despre:'À propos', blog:'Blog', pvc:'Menuiserie PVC Salamander', aluminiu:'Menuiserie Aluminium Alumil', accesorii:'Accessoires menuiserie', brand_desc:'Nous fournissons des menuiseries PVC Salamander et aluminium Alumil avec vitrage isolant certifié nZEB. Précadres Blaugelb Triotherm+, stores Raffstore, volets roulants aluminium. Pose professionnelle et livraison en Europe.' },
    es: { products:'Productos', info:'Info', brand:'Carpintería PVC · Aluminio', schedule:'Horario de atención', maps:'Ver en Google Maps', gdpr:'Política GDPR', cookies:'Política de cookies', servicii:'Servicios', despre:'Sobre nosotros', blog:'Blog', pvc:'Carpintería PVC Salamander', aluminiu:'Carpintería Aluminio Alumil', accesorii:'Accesorios carpintería', brand_desc:'Suministramos carpintería PVC Salamander y aluminio Alumil con vidrio aislante certificado nZEB. Premarcos Blaugelb Triotherm+, persianas Raffstore, cierres enrollables aluminio. Instalación profesional y entrega en Europa.' },
    it: { products:'Prodotti', info:'Info', brand:'Infissi PVC · Alluminio', schedule:'Orari di apertura', maps:'Vedi su Google Maps', gdpr:'Politica GDPR', cookies:'Politica cookie', servicii:'Servizi', despre:'Chi siamo', blog:'Blog', pvc:'Infissi in PVC Salamander', aluminiu:'Infissi in Alluminio Alumil', accesorii:'Accessori infissi', brand_desc:'Forniamo infissi PVC Salamander e alluminio Alumil con vetro termoisolante certificato nZEB. Pre-pareti Blaugelb Triotherm+, veneziane Raffstore, tapparelle in alluminio. Installazione professionale e consegna in Europa.' },
  };
  const col = COL_TEXTS[locale] || COL_TEXTS.ro;

  // Texte formular per limbă
  const FORM_TEXTS = {
    ro: { title_label:'Contactați-ne', title_h2:'Solicitați o ofertă de preț\npentru Tâmplărie PVC sau Tâmplărie aluminiu', col_dept:'Departamente', col_form:'Formular de contact', col_prod:'Cererea va conține:', p_name:'Nume Complet *', p_phone:'Telefon *', p_email:'E-mail *', p_addr:'Adresă de Livrare *', lbl_cmd:'Comanda să fie cu: *', sel_ph:'Selectați opțiunea *', lbl_files:'Atașați schițe (max 7):', gdpr_text:'Am citit și sunt de acord cu', gdpr_priv:'Politica de Confidențialitate', gdpr_and:'și', gdpr_cook:'Politica de Cookies', gdpr_of:'a Neofort BIZ. *', files_sel:'fișier(e) selectate' },
    en: { title_label:'Contact us', title_h2:'Request a price quote\nfor PVC or Aluminium Windows', col_dept:'Departments', col_form:'Contact form', col_prod:'The offer will contain:', p_name:'Full Name *', p_phone:'Phone *', p_email:'E-mail *', p_addr:'Delivery Address *', lbl_cmd:'The order must be with: *', sel_ph:'Select option *', lbl_files:'Attach sketches (max 7):', gdpr_text:'I have read and agree to the', gdpr_priv:'Privacy Policy', gdpr_and:'and', gdpr_cook:'Cookie Policy', gdpr_of:'of Neofort BIZ. *', files_sel:'file(s) selected' },
    de: { title_label:'Kontaktieren Sie uns', title_h2:'Fordern Sie ein Preisangebot an\nfür Kunststoff- oder Aluminiumfenster', col_dept:'Abteilungen', col_form:'Kontaktformular', col_prod:'Das Angebot wird enthalten:', p_name:'Vollständiger Name *', p_phone:'Telefon *', p_email:'E-Mail *', p_addr:'Lieferadresse *', lbl_cmd:'Die Bestellung sollte enthalten: *', sel_ph:'Option auswählen *', lbl_files:'Skizzen anhängen (max. 7):', gdpr_text:'Ich habe gelesen und stimme zu', gdpr_priv:'Datenschutzrichtlinie', gdpr_and:'und', gdpr_cook:'Cookie-Richtlinie', gdpr_of:'von Neofort BIZ. *', files_sel:'Datei(en) ausgewählt' },
    fr: { title_label:'Contactez-nous', title_h2:'Demandez un devis\npour menuiserie PVC ou Aluminium', col_dept:'Départements', col_form:'Formulaire de contact', col_prod:'La demande d\'offre contiendra :', p_name:'Nom complet *', p_phone:'Téléphone *', p_email:'E-mail *', p_addr:'Adresse de livraison *', lbl_cmd:'La commande doit être avec : *', sel_ph:'Sélectionnez une option *', lbl_files:'Joindre des croquis (max 7) :', gdpr_text:'J\'ai lu et j\'accepte la', gdpr_priv:'Politique de confidentialité', gdpr_and:'et la', gdpr_cook:'Politique de cookies', gdpr_of:'de Neofort BIZ. *', files_sel:'fichier(s) sélectionné(s)' },
    es: { title_label:'Contáctenos', title_h2:'Solicite un presupuesto\npara carpintería PVC o Aluminio', col_dept:'Departamentos', col_form:'Formulario de contacto', col_prod:'La oferta contendrá:', p_name:'Nombre completo *', p_phone:'Teléfono *', p_email:'Correo electrónico *', p_addr:'Dirección de entrega *', lbl_cmd:'El pedido debe ser con: *', sel_ph:'Seleccione una opción *', lbl_files:'Adjuntar bocetos (máx. 7):', gdpr_text:'He leído y acepto la', gdpr_priv:'Política de privacidad', gdpr_and:'y la', gdpr_cook:'Política de cookies', gdpr_of:'de Neofort BIZ. *', files_sel:'archivo(s) seleccionado(s)' },
    it: { title_label:'Contattateci', title_h2:'Richiedete un preventivo\nper infissi in PVC o Alluminio', col_dept:'Reparti', col_form:'Modulo di contatto', col_prod:'La richiesta di offerta conterrà:', p_name:'Nome completo *', p_phone:'Telefono *', p_email:'E-mail *', p_addr:'Indirizzo di consegna *', lbl_cmd:"L'ordine deve essere con: *", sel_ph:"Seleziona un'opzione *", lbl_files:'Allega schizzi (max 7):', gdpr_text:'Ho letto e accetto la', gdpr_priv:'Informativa sulla privacy', gdpr_and:'e la', gdpr_cook:'Politica sui cookie', gdpr_of:'di Neofort BIZ. *', files_sel:'file selezionato/i' },
  };
  const ft = FORM_TEXTS[locale] || FORM_TEXTS.ro;

  const handleFiles = (e) => setFiles(Array.from(e.target.files).slice(0, 7));

  const validate = (form) => {
    const e = { ...EMPTY_ERR };
    const nume    = form.nume.value.trim();
    const telefon = form.telefon.value.trim();
    const email   = form.email.value.trim();
    const comanda = form.comanda.value;
    const adresa  = form.adresa.value.trim();
    if (!nume)    e.nume = t('err_nume');
    if (!telefon) { e.telefon = t('err_telefon_gol'); }
    else if (!/^[0-9\s\+\-\(\)]{7,20}$/.test(telefon)) { e.telefon = t('err_telefon_invalid'); }
    if (!email) { e.email = t('err_email_gol'); }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { e.email = t('err_email_invalid'); }
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
      if (json.success) { setStatus('success'); form.reset(); setFiles([]); setGdpr(false); setErr(EMPTY_ERR); }
      else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

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
              {ft.title_label}
            </span>
            <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.4rem, 3.5vw, 2.0rem)',color:'#fff',lineHeight:1.25}}>
              {ft.title_h2.split('\n')[0]}<br/>
              {ft.title_h2.split('\n')[1]}
            </h2>
          </div>

          {status === 'success' ? (
            <div style={{border:'1px solid #2a2a2a',padding:'64px 32px',textAlign:'center'}}>
              <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'1.2rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#fff',marginBottom:'12px'}}>
                {t('success_title')}
              </div>
              <p style={{fontFamily:'Barlow',fontSize:'.82rem',fontWeight:300,color:'#888',marginBottom:'24px'}}>{t('success_desc')}</p>
              <button onClick={()=>setStatus('idle')} style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.68rem',letterSpacing:'.18em',textTransform:'uppercase',color:'#fff',background:'transparent',border:'1px solid #444',padding:'12px 32px',cursor:'pointer'}}>
                {t('success_btn')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{border:'1px solid #2a2a2a'}}>
                <div className="form-grid">

                  {/* Col 1 — Departamente (desktop) */}
                  <div className="form-col form-col-dept form-col-dept-desktop" style={{padding:'36px 32px',borderRight:'1px solid #2a2a2a'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.6rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#fff',display:'block',paddingBottom:'14px',borderBottom:'1px solid #2a2a2a',marginBottom:'24px'}}>{ft.col_dept}</span>
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

                  {/* Col 2 — Formular */}
                  <div className="form-col form-col-client" style={{padding:'36px 32px',borderRight:'1px solid #2a2a2a'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.6rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#fff',display:'block',paddingBottom:'14px',borderBottom:'1px solid #2a2a2a',marginBottom:'24px'}}>{ft.col_form}</span>

                    <div style={{marginBottom:'16px'}}>
                      <input type="text" name="nume" placeholder={ft.p_name} style={iStyle('nume')} onChange={()=>err.nume&&setErr(p=>({...p,nume:''}))}/>
                      <ErrMsg field="nume"/>
                    </div>
                    <div style={{marginBottom:'16px'}}>
                      <input type="tel" name="telefon" placeholder={ft.p_phone} style={iStyle('telefon')} onChange={()=>err.telefon&&setErr(p=>({...p,telefon:''}))}/>
                      <ErrMsg field="telefon"/>
                    </div>
                    <div style={{marginBottom:'16px'}}>
                      <input type="email" name="email" placeholder={ft.p_email} style={iStyle('email')} onChange={()=>err.email&&setErr(p=>({...p,email:''}))}/>
                      <ErrMsg field="email"/>
                    </div>
                    <div style={{marginBottom:'16px'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.57rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#666',display:'block',marginBottom:'5px'}}>{ft.lbl_cmd}</span>
                      <select name="comanda" defaultValue="" onChange={()=>err.comanda&&setErr(p=>({...p,comanda:''}))}
                        style={{width:'100%',background:'#111',border:'none',borderBottom: err.comanda ? '1px solid #e05252' : '1px solid #333',padding:'10px 0',fontFamily:'Barlow Condensed,sans-serif',fontSize:'.67rem',letterSpacing:'.1em',textTransform:'uppercase',color:'#ddd',outline:'none',appearance:'none',boxSizing:'border-box'}}>
                        <option value="" disabled>{ft.sel_ph}</option>
                        {opts.map(o => <option key={o}>{o}</option>)}
                      </select>
                      <ErrMsg field="comanda"/>
                    </div>
                    <div style={{marginBottom:'16px'}}>
                      <input type="text" name="adresa" placeholder={ft.p_addr} style={iStyle('adresa')} onChange={()=>err.adresa&&setErr(p=>({...p,adresa:''}))}/>
                      <ErrMsg field="adresa"/>
                    </div>
                    <div style={{marginTop:'20px'}}>
                      <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.57rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#666',display:'block',marginBottom:'8px'}}>{ft.lbl_files}</span>
                      <input type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.dwg" onChange={handleFiles} style={{fontFamily:'Barlow,sans-serif',fontSize:'.74rem',fontWeight:300,color:'#777'}}/>
                      {files.length > 0 && <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',color:'#666',display:'block',marginTop:'4px'}}>{files.length} {ft.files_sel}</span>}
                    </div>
                  </div>

                  {/* Col 3 — Checkboxuri */}
                  <div className="form-col form-col-produse" style={{padding:'36px 32px'}}>
                    <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.6rem',letterSpacing:'.18em',textTransform:'uppercase',color:'#fff',display:'block',paddingBottom:'14px',borderBottom:'1px solid #2a2a2a',marginBottom:'12px'}}>{ft.col_prod}</span>
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
                      {ft.gdpr_text}{' '}
                      <Link href="/gdpr" style={{color: err.gdpr ? '#e05252' : '#bbb',textDecoration:'underline'}}>{ft.gdpr_priv}</Link>
                      {' '}{ft.gdpr_and}{' '}
                      <Link href="/gdpr" style={{color: err.gdpr ? '#e05252' : '#bbb',textDecoration:'underline'}}>{ft.gdpr_cook}</Link>
                      {' '}{ft.gdpr_of}
                    </label>
                  </div>
                  <ErrMsg field="gdpr"/>
                </div>

                {/* Submit */}
                <button type="submit" disabled={status==='sending'}
                  style={{width:'100%',fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.76rem',letterSpacing:'.25em',textTransform:'uppercase',color:'#fff',background: status==='sending' ? '#222' : '#1a1a1a',border:'none',borderTop:'1px solid #2a2a2a',padding:'22px 48px',cursor: status==='sending' ? 'not-allowed' : 'pointer',display:'block',transition:'background .2s'}}>
                  {status==='sending' ? t('sending') : status==='error' ? t('error') : t('submit')}
                </button>

                {/* Departamente — mobil după Submit */}
                <div className="form-col-dept-mobile" style={{padding:'36px 32px',borderTop:'1px solid #2a2a2a'}}>
                  <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'.6rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#fff',display:'block',paddingBottom:'14px',borderBottom:'1px solid #2a2a2a',marginBottom:'24px'}}>{ft.col_dept}</span>
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
            <div className="footer-col-title">{col.brand}</div>
            <p className="footer-desc">{col.brand_desc}</p>
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
            <div className="footer-col-title">{col.products}</div>
            <ul className="footer-links">
              <li><Link href="/tamplarie-pvc">{col.pvc}</Link></li>
              <li><Link href="/tamplarie-aluminiu">{col.aluminiu}</Link></li>
              <li><Link href="/accesorii">{col.accesorii}</Link></li>
            </ul>
          </div>
          <div className="footer-col-3" style={{borderLeft:'1px solid #1e1e1e'}}>
            <div className="footer-col-title">{col.info}</div>
            <ul className="footer-links">
              <li><Link href="/servicii">{col.servicii}</Link></li>
              <li><Link href="/despre">{col.despre}</Link></li>
              <li><Link href="/blog">{col.blog}</Link></li>
              <li><Link href="/gdpr">{col.gdpr}</Link></li>
              <li><Link href="/gdpr">{col.cookies}</Link></li>
            </ul>
          </div>
          <div className="footer-col-4" style={{borderLeft:'1px solid #1e1e1e'}}>
            <div className="footer-col-title">{col.schedule}</div>
            {sch.days.map(z=>(
              <div key={z} className="schedule-row">
                <span className="schedule-day">{z}</span>
                <span className="schedule-hours">10:00 — 18:00</span>
              </div>
            ))}
            {sch.weekend.map(z=>(
              <div key={z} className="schedule-row">
                <span className="schedule-day">{z}</span>
                <span className="schedule-closed">{sch.closed}</span>
              </div>
            ))}
            <a href="https://maps.app.goo.gl/aujfwVBEKvfhnsdS6" target="_blank" rel="noopener noreferrer" className="maps-link">{col.maps}</a>
            <div className="footer-langs" style={{marginTop:'20px'}}>
              {LOCALES.map(([code,label])=>(
                <Link key={code} href={pathname} locale={code} className={`footer-lang ${locale===code?'active':''}`}>{label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          {(() => {
            const reg = { ro:'Marcă înregistrată', en:'Registered Trademark', de:'Eingetragene Marke', fr:'Marque déposée', es:'Marca registrada', it:'Marchio registrato' };
            return <span>© 2025 Neofort BIZ · neofort-biz.ro · {reg[locale]||reg.ro} O.S.I.M. nr. M 2014 05130</span>;
          })()}
          <span>{col.pvc} · {col.aluminiu}</span>
        </div>
      </div>
    </footer>
  );
}
