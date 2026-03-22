import { Link } from '../../../i18n/navigation';
import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];
const SLUGS = { ro:'sisteme-nzeb', en:'nzeb-systems', de:'nzeb-systeme', fr:'systemes-nzeb', es:'sistemas-nzeb', it:'sistemi-nzeb' };

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil' },
};

const PAGE_UI = {
  ro: { label:'Sisteme nZEB · Neofort BIZ', title:'Sisteme Izolare nZEB Ferestre | Precadre Blaugelb & Warm Edge | Neofort BIZ', h1:'Sisteme nZEB', sub:'Soluții complete de izolare perimetrală și geam termoizolator pentru certificare energetică nZEB și Passive House.', desc:'Precadre Blaugelb, benzi etanșare RAL, Warm Edge și geam Saint-Gobain pentru clădiri nZEB. Montaj certificat București.', btn_detail:'Detalii' },
  en: { label:'nZEB Systems · Neofort BIZ', title:'nZEB Window Insulation Systems | Blaugelb Precasings & Warm Edge | Neofort BIZ', h1:'nZEB Systems', sub:'Complete perimeter insulation and thermal glazing solutions for nZEB and Passive House energy certification.', desc:'Blaugelb precasings, RAL sealing tapes, Warm Edge and Saint-Gobain glass for nZEB buildings. Certified installation Bucharest.', btn_detail:'Details' },
  de: { label:'nZEB-Systeme · Neofort BIZ', title:'nZEB Fensterdämmsysteme | Blaugelb Vorfenster & Warm Edge | Neofort BIZ', h1:'nZEB-Systeme', sub:'Vollständige Perimeterdämmungs- und Wärmeschutzverglasung für nZEB- und Passivhaus-Energiezertifizierung.', desc:'Blaugelb Vorfenster, RAL-Dichtbänder, Warm Edge und Saint-Gobain Glas für nZEB-Gebäude. Zertifizierter Einbau Bukarest.', btn_detail:'Details' },
  fr: { label:'Systèmes nZEB · Neofort BIZ', title:'Systèmes Isolation nZEB Fenêtres | Précadres Blaugelb & Warm Edge | Neofort BIZ', h1:'Systèmes nZEB', sub:'Solutions complètes d\'isolation périphérique et de vitrage thermique pour la certification énergétique nZEB et Maison Passive.', desc:'Précadres Blaugelb, rubans RAL, Warm Edge et verre Saint-Gobain pour bâtiments nZEB. Pose certifiée Bucarest.', btn_detail:'Détails' },
  es: { label:'Sistemas nZEB · Neofort BIZ', title:'Sistemas Aislamiento nZEB Ventanas | Premarcos Blaugelb & Warm Edge | Neofort BIZ', h1:'Sistemas nZEB', sub:'Soluciones completas de aislamiento perimetral y acristalamiento térmico para certificación energética nZEB y Casa Pasiva.', desc:'Premarcos Blaugelb, cintas RAL, Warm Edge y vidrio Saint-Gobain para edificios nZEB. Instalación certificada Bucarest.', btn_detail:'Detalles' },
  it: { label:'Sistemi nZEB · Neofort BIZ', title:'Sistemi Isolamento nZEB Finestre | Pre-telai Blaugelb & Warm Edge | Neofort BIZ', h1:'Sistemi nZEB', sub:'Soluzioni complete di isolamento perimetrale e vetro termoisolante per la certificazione energetica nZEB e Passive House.', desc:'Pre-telai Blaugelb, nastri RAL, Warm Edge e vetro Saint-Gobain per edifici nZEB. Posa certificata Bucarest.', btn_detail:'Dettagli' },
};

const A = [
  { slug:'precadre-blaugelb-triotherm', img:'/accessories/precadre-blaugelb.avif', color:'#4a7c59',
    cat:{ ro:'Izolare perimetrală', en:'Perimeter Insulation', de:'Perimeterdämmung', fr:'Isolation périphérique', es:'Aislamiento perimetral', it:'Isolamento perimetrale' },
    name:{ ro:'Precadre Blaugelb Triotherm+', en:'Blaugelb Triotherm+ Precasings', de:'Blaugelb Triotherm+ Vorfenster', fr:'Précadres Blaugelb Triotherm+', es:'Premarcos Blaugelb Triotherm+', it:'Precontrotelaio Blaugelb Triotherm+' },
    specs:{ ro:[['Reciclabilitate','100% reciclabilă'],['Fără','HCFC, HFC, HBCD'],['Polistiren','Dens (expandat)'],['Transfer termic','0,040 W/m²K'],['Sistem','Clipsare'],['Montaj','Pe orice lungime'],['Utilizare','Conformă nZEB']], en:[['Recyclability','100% recyclable'],['Free of','HCFC, HFC, HBCD'],['Polystyrene','Dense (expanded)'],['Thermal transfer','0.040 W/m²K'],['System','Clip-on'],['Installation','Any length'],['Compliance','nZEB certified']], de:[['Recycelbarkeit','100% recycelbar'],['Ohne','HCFC, HFC, HBCD'],['Polystyrol','Dicht (expandiert)'],['Wärmedurchgang','0,040 W/m²K'],['System','Clips'],['Montage','Jede Länge'],['Einsatz','nZEB-konform']], fr:[['Recyclabilité','100% recyclable'],['Sans','HCFC, HFC, HBCD'],['Polystyrène','Dense (expansé)'],['Transfert thermique','0,040 W/m²K'],['Système','Clipsage'],['Pose','Toute longueur'],['Utilisation','Conforme nZEB']], es:[['Reciclabilidad','100% reciclable'],['Sin','HCFC, HFC, HBCD'],['Poliestireno','Denso (expandido)'],['Transferencia térmica','0,040 W/m²K'],['Sistema','Enganche'],['Instalación','Cualquier longitud'],['Uso','Conforme nZEB']], it:[['Riciclabilità','100% riciclabile'],['Privo di','HCFC, HFC, HBCD'],['Polistirene','Denso (espanso)'],['Trasferimento termico','0,040 W/m²K'],['Sistema','A clip'],['Posa','Qualsiasi lunghezza'],['Utilizzo','Conforme nZEB']] },
    desc:{ ro:'Sistem avansat de izolare perimetrală. Previne punțile termice la montaj și asigură etanșeitate completă. Soluția de referință pentru construcții nZEB.', en:'Advanced perimeter insulation system. Prevents thermal bridges during installation and ensures complete sealing. The reference solution for nZEB buildings.', de:'Fortschrittliches Perimeterdämmsystem. Verhindert Wärmebrücken bei der Montage. Die Referenzlösung für nZEB-Gebäude.', fr:'Système d\'isolation périphérique avancé. Prévient les ponts thermiques lors de la pose. La solution de référence pour les bâtiments nZEB.', es:'Sistema avanzado de aislamiento perimetral. Previene los puentes térmicos durante la instalación. La solución de referencia para edificios nZEB.', it:'Sistema avanzato di isolamento perimetrale. Previene i ponti termici durante la posa. La soluzione di riferimento per gli edifici nZEB.' },
  },
  { slug:'banda-precomprimata-butil', img:'/accessories/banda-butilic.avif', color:'#4a7c59',
    cat:{ ro:'Izolare perimetrală', en:'Perimeter Insulation', de:'Perimeterdämmung', fr:'Isolation périphérique', es:'Aislamiento perimetral', it:'Isolamento perimetrale' },
    name:{ ro:'Bandă Precomprimată Butil', en:'Butyl Sealing Tape', de:'Butyl-Dichtband', fr:'Bande Précomprimée Butyle', es:'Cinta Butílica de Sellado', it:'Nastro sigillante in butile' },
    specs:{ ro:[['Expandare','Până la 50mm'],['Etanșare','Prin lipire autoadeziv'],['Lățimi','Până la 20mm'],['Rezistență','Până la intemperii 600 Pa'],['Protecție UV','Da'],['Fonicitate','Până la 47 dB'],['Rezistență incendiu','B1']], en:[['Expansion','Up to 50mm'],['Sealing','Self-adhesive bonding'],['Widths','Up to 20mm'],['Weather resistance','600 Pa'],['UV protection','Yes'],['Sound insulation','Up to 47 dB'],['Fire resistance','B1']], de:[['Ausdehnung','Bis 50mm'],['Abdichtung','Selbstklebend'],['Breiten','Bis 20mm'],['Witterungsbeständigkeit','600 Pa'],['UV-Schutz','Ja'],['Schalldämmung','Bis 47 dB'],['Brandwiderstand','B1']], fr:[['Expansion','Jusqu\'à 50mm'],['Étanchéité','Autoadhésif'],['Largeurs','Jusqu\'à 20mm'],['Résistance intempéries','600 Pa'],['Protection UV','Oui'],['Isolation phonique','Jusqu\'à 47 dB'],['Résistance feu','B1']], es:[['Expansión','Hasta 50mm'],['Sellado','Autoadherente'],['Anchuras','Hasta 20mm'],['Resistencia intemperie','600 Pa'],['Protección UV','Sí'],['Aislamiento acústico','Hasta 47 dB'],['Resistencia al fuego','B1']], it:[['Espansione','Fino a 50mm'],['Tenuta','Autoadesivo'],['Larghezze','Fino a 20mm'],['Resistenza intemperie','600 Pa'],['Protezione UV','Sì'],['Isolamento acustico','Fino a 47 dB'],['Resistenza fuoco','B1']] },
    desc:{ ro:'Bandă butilică precomprimată pentru etanșare exterioară la perete. Rezistentă la UV și apă, certificată B1 la foc. Standard de referință pentru montajul profesional RAL.', en:'Pre-compressed butyl tape for external wall sealing. UV and water resistant, B1 fire certified. Reference standard for professional RAL installation.', de:'Vorkomprimiertes Butyl-Dichtband für außenseitige Wandabdichtung. UV- und wasserbeständig, B1-brandgeprüft. Referenzstandard für professionelle RAL-Montage.', fr:'Bande butyle précomprimée pour étanchéité extérieure. Résistante UV et eau, certifiée B1 feu. Standard de référence pour pose professionnelle RAL.', es:'Cinta de butilo precomprimida para sellado exterior. Resistente a UV y agua, certificada B1 fuego. Estándar de referencia para instalación profesional RAL.', it:'Nastro in butile precompresso per tenuta esterna a parete. Resistente a UV e acqua, certificato B1 al fuoco. Standard di riferimento per posa professionale RAL.' },
  },
  { slug:'banda-etansare-antivapori', img:'/accessories/banda-antivapori.avif', color:'#4a7c59',
    cat:{ ro:'Izolare perimetrală', en:'Perimeter Insulation', de:'Perimeterdämmung', fr:'Isolation périphérique', es:'Aislamiento perimetral', it:'Isolamento perimetrale' },
    name:{ ro:'Bandă etanșare antivapori', en:'Vapour Sealing Tapes', de:'Dampfsperrband', fr:'Bandes d\'étanchéité vapeur', es:'Cintas de sellado de vapor', it:'Nastri sigillanti al vapore' },
    specs:{ ro:[['Elasticitate','Ridicată'],['Etanșare','Prin lipire autoadeziv'],['Lățimi','Până la 90mm'],['Rezistență','1050 Pa'],['Protecție UV','Da'],['Barieră antivapori','Da'],['Aderență','La vopsea și tencuială']], en:[['Elasticity','High'],['Sealing','Self-adhesive bonding'],['Widths','Up to 90mm'],['Weather resistance','1050 Pa'],['UV protection','Yes'],['Vapour barrier','Yes'],['Adhesion','On paint and plaster']], de:[['Elastizität','Hoch'],['Abdichtung','Selbstklebend'],['Breiten','Bis 90mm'],['Witterungsbeständigkeit','1050 Pa'],['UV-Schutz','Ja'],['Dampfsperre','Ja'],['Haftung','Auf Farbe und Putz']], fr:[['Élasticité','Élevée'],['Étanchéité','Autoadhésif'],['Largeurs','Jusqu\'à 90mm'],['Résistance intempéries','1050 Pa'],['Protection UV','Oui'],['Pare-vapeur','Oui'],['Adhérence','Sur peinture et enduit']], es:[['Elasticidad','Alta'],['Sellado','Autoadherente'],['Anchuras','Hasta 90mm'],['Resistencia intemperie','1050 Pa'],['Protección UV','Sí'],['Barrera de vapor','Sí'],['Adherencia','En pintura y yeso']], it:[['Elasticità','Elevata'],['Tenuta','Autoadesivo'],['Larghezze','Fino a 90mm'],['Resistenza intemperie','1050 Pa'],['Protezione UV','Sì'],['Barriera al vapore','Sì'],['Adesione','Su vernice e intonaco']] },
    desc:{ ro:'Folie autoadezivă pentru etanșarea interioară la vapori de apă. Elimină riscul de condens la rost. Aderență excelentă pe tencuială, beton și vopsea.', en:'Self-adhesive vapour barrier foil for interior joint sealing. Eliminates condensation risk. Excellent adhesion on plaster, concrete and paint.', de:'Selbstklebendes Dampfsperrband für innenseitige Fugenabdichtung. Eliminiert Kondensationsrisiko. Ausgezeichnete Haftung auf Putz, Beton und Farbe.', fr:'Film autoadhésif pour étanchéité intérieure aux vapeurs. Élimine le risque de condensation. Excellente adhérence sur enduit, béton et peinture.', es:'Lámina autoadhesiva para sellado interior al vapor. Elimina el riesgo de condensación. Excelente adherencia sobre yeso, hormigón y pintura.', it:'Foglio autoadesivo per tenuta interna ai vapori. Elimina il rischio di condensa. Eccellente adesione su intonaco, calcestruzzo e vernice.' },
  },
  { slug:'bagheta-warm-edge-thermo', img:'/accessories/bagheta-warm-edge.avif', color:'#2d5a8e',
    cat:{ ro:'Geam termoizolator', en:'Thermal Glazing', de:'Wärmeschutzverglasung', fr:'Vitrage thermique', es:'Acristalamiento térmico', it:'Vetro termoisolante' },
    name:{ ro:'Baghetă Warm EDGE Thermo', en:'Warm Edge Spacers', de:'Warm Edge Abstandhalter', fr:'Baguettes Warm Edge', es:'Intercalario Warm Edge', it:'Distanziatore Warm Edge' },
    specs:{ ro:[['Profil','Distanțier termoplastic'],['Gama de culori','Largă'],['Adâncime','7,5–19,5 mm'],['Transfer termic','0,035 W/m²K'],['Compatibilitate','Toate tipurile geam'],['Rezistență','De durată'],['Gamă','Flexibilă și rigidă']], en:[['Profile','Thermoplastic spacer'],['Colour range','Wide'],['Depth','7.5–19.5 mm'],['Thermal transfer','0.035 W/m²K'],['Compatibility','All glass types'],['Durability','Long-lasting'],['Range','Flexible and rigid']], de:[['Profil','Thermoplastischer Abstandhalter'],['Farbpalette','Breit'],['Tiefe','7,5–19,5 mm'],['Wärmedurchgang','0,035 W/m²K'],['Kompatibilität','Alle Glastypen'],['Beständigkeit','Langlebig'],['Sortiment','Flexibel und starr']], fr:[['Profil','Espaceur thermoplastique'],['Gamme couleurs','Large'],['Profondeur','7,5–19,5 mm'],['Transfert thermique','0,035 W/m²K'],['Compatibilité','Tous types de verre'],['Durabilité','Longue durée'],['Gamme','Flexible et rigide']], es:[['Perfil','Espaciador termoplástico'],['Gama colores','Amplia'],['Profundidad','7,5–19,5 mm'],['Transferencia térmica','0,035 W/m²K'],['Compatibilidad','Todos los tipos de vidrio'],['Durabilidad','Larga duración'],['Gama','Flexible y rígida']], it:[['Profilo','Distanziatore termoplastico'],['Gamma colori','Ampia'],['Profondità','7,5–19,5 mm'],['Trasferimento termico','0,035 W/m²K'],['Compatibilità','Tutti i tipi di vetro'],['Durabilità','Lunga durata'],['Gamma','Flessibile e rigida']] },
    desc:{ ro:'Înlocuiește distanțierul metalic clasic. Elimină condensul marginal și îmbunătățește eficiența geamului termoizolator. Transfer termic de 0,035 W/m²K față de 0,170 al aluminiului.', en:'Replaces the classic metal spacer. Eliminates edge condensation and improves insulating glass efficiency. Thermal transfer 0.035 W/m²K vs 0.170 W/m²K of aluminium.', de:'Ersetzt klassischen Metallabstandhalter. Eliminiert Randkondensation. Wärmedurchgang 0,035 W/m²K gegenüber 0,170 W/m²K von Aluminium.', fr:'Remplace l\'espaceur métallique. Élimine la condensation en bordure. Transfert thermique 0,035 W/m²K contre 0,170 W/m²K de l\'aluminium.', es:'Sustituye al espaciador metálico. Elimina la condensación en el borde. Transferencia térmica 0,035 W/m²K frente a 0,170 W/m²K del aluminio.', it:'Sostituisce il distanziatore metallico. Elimina la condensa perimetrale. Trasferimento termico 0,035 W/m²K contro 0,170 W/m²K dell\'alluminio.' },
  },
  { slug:'geamuri-termopan-saint-gobain', img:'/accessories/geam-termopan-saint-gobain.avif', color:'#2d5a8e',
    cat:{ ro:'Geam termoizolator', en:'Thermal Glazing', de:'Wärmeschutzverglasung', fr:'Vitrage thermique', es:'Acristalamiento térmico', it:'Vetro termoisolante' },
    name:{ ro:'Geamuri Termopan Saint Gobain', en:'Thermal Glass Saint Gobain', de:'Isolierglas Saint Gobain', fr:'Verre isolant Saint Gobain', es:'Vidrio aislante Saint Gobain', it:'Vetro termoisolante Saint Gobain' },
    specs:{ ro:[['Planitherm XN','Low-e coating'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 Anotimpuri (4S)'],['Planistar SUN','Control solar'],['Stadip SILENCE','Fonoizolant'],['Protecție termică și fonică','Da'],['Utilizare conformă nZEB','Da']], en:[['Planitherm XN','Low-e coating'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 Seasons (4S)'],['Planistar SUN','Solar control'],['Stadip SILENCE','Sound insulation'],['Thermal & sound protection','Yes'],['nZEB compliant','Yes']], de:[['Planitherm XN','Low-e-Beschichtung'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 Jahreszeiten (4S)'],['Planistar SUN','Sonnenschutzkontrolle'],['Stadip SILENCE','Schalldämmung'],['Wärme- und Schallschutz','Ja'],['nZEB-konform','Ja']], fr:[['Planitherm XN','Revêtement low-e'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 Seasons (4S)'],['Planistar SUN','Contrôle solaire'],['Stadip SILENCE','Isolation phonique'],['Protection thermique et phonique','Oui'],['Conforme nZEB','Oui']], es:[['Planitherm XN','Revestimiento low-e'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 Estaciones (4S)'],['Planistar SUN','Control solar'],['Stadip SILENCE','Aislamiento acústico'],['Protección térmica y acústica','Sí'],['Conforme nZEB','Sí']], it:[['Planitherm XN','Rivestimento low-e'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 Stagioni (4S)'],['Planistar SUN','Controllo solare'],['Stadip SILENCE','Isolamento acustico'],['Protezione termica e acustica','Sì'],['Conforme nZEB','Sì']] },
    desc:{ ro:'Pachete de sticlă termoizolantă Saint-Gobain SGG. Gamă completă de soluții low-e, control solar și fonoizolare. Compatibile cu profilele PVC Salamander și aluminiu Alumil.', en:'Saint-Gobain SGG thermal insulating glass packages. Complete range of low-e, solar control and sound insulation solutions. Compatible with Salamander PVC and Alumil aluminium profiles.', de:'Wärmeschutzisolierglas Saint-Gobain SGG. Komplettes Sortiment mit Low-e, Sonnenschutzkontrolle und Schalldämmung. Kompatibel mit Salamander PVC- und Alumil-Aluminiumprofilen.', fr:'Packages vitrage isolant Saint-Gobain SGG. Gamme complète low-e, contrôle solaire et phonique. Compatibles avec profils PVC Salamander et aluminium Alumil.', es:'Paquetes vidrio aislante Saint-Gobain SGG. Gama completa low-e, control solar y acústico. Compatibles con perfiles PVC Salamander y aluminio Alumil.', it:'Pacchetti vetro termoisolante Saint-Gobain SGG. Gamma completa low-e, controllo solare e acustico. Compatibili con profili PVC Salamander e alluminio Alumil.' },
  }
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const ui = PAGE_UI[locale] || PAGE_UI.ro;
  const slug = SLUGS[locale] || SLUGS.ro;
  return {
    title: ui.title,
    description: ui.desc,
    keywords: locale === 'ro' ? 'sisteme nZEB, precadre Blaugelb Triotherm, banda butilic, warm edge, geam saint gobain' : locale === 'en' ? 'nZEB systems, Blaugelb Triotherm precasings, butyl tape, warm edge, Saint Gobain glass' : locale === 'de' ? 'nZEB Systeme, Blaugelb Triotherm Vorfenster, Butylband, Warm Edge, Saint Gobain Glas' : locale === 'fr' ? 'systèmes nZEB, précadres Blaugelb Triotherm, bande butyle, warm edge, verre Saint Gobain' : locale === 'es' ? 'sistemas nZEB, premarcos Blaugelb Triotherm, cinta butílica, warm edge, vidrio Saint Gobain' : 'sistemi nZEB, pre-telai Blaugelb Triotherm, nastro butilico, warm edge, vetro Saint Gobain',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: Object.fromEntries([...LOCALES.map(l => [l, `${BASE}/${l}/${SLUGS[l]}`]), ['x-default', `${BASE}/ro/${SLUGS.ro}`]]),
    },
    openGraph: { type:'website', url:`${BASE}/${locale}/${slug}`, siteName:'Neofort BIZ', title: ui.title, description: ui.desc, images: [{ url:`${BASE}/og/nZEB.avif`, width:1200, height:630, alt: locale==='ro' ? 'Sisteme nZEB — ferestre pentru clădiri cu consum de energie aproape zero' : locale==='en' ? 'nZEB systems — windows for nearly zero energy buildings' : locale==='de' ? 'nZEB-Systeme — Fenster für Niedrigstenergiegebäude' : locale==='fr' ? 'Systèmes nZEB — fenêtres pour bâtiments à énergie quasi nulle' : locale==='es' ? 'Sistemas nZEB — ventanas para edificios de consumo casi nulo' : 'Sistemi nZEB — finestre per edifici a energia quasi zero', type:'image/avif' }] },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: ui.title, description: ui.desc, images:[`${BASE}/og/nZEB.avif`] },
};
}

export default async function Page({ params }) {
  const { locale } = await params;
  const ui  = PAGE_UI[locale]    || PAGE_UI.ro;
  const cta = CTA_LABELS[locale] || CTA_LABELS.ro;

  const schema = {
    '@context':'https://schema.org', '@type':'ItemList', 'name': ui.h1,
    'url': `${BASE}/${locale}/${SLUGS[locale] || SLUGS.ro}`,
    'itemListElement': A.map((a, i) => ({
      '@type':'ListItem', 'position': i + 1,
      'item': { '@type':'Product', 'name': a.name[locale]||a.name.ro, 'description': a.desc[locale]||a.desc.ro,
        'image': `${BASE}${a.img}`, 'brand': { '@type':'Brand','name':'Neofort BIZ' },
        'offers': { '@type':'Offer','availability':'https://schema.org/InStock','priceCurrency':'RON','price':'0','priceValidUntil': new Date(new Date().setFullYear(new Date().getFullYear()+1)).toISOString().split('T')[0],'seller':{'@type':'Organization','name':'Neofort BIZ SRL'} },'aggregateRating':{'@type':'AggregateRating','ratingValue':'4.9','reviewCount':'46','bestRating':'5','worstRating':'1'},
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Neofort BIZ', 'item': 'https://www.neofort-biz.ro/' + locale },
      { '@type': 'ListItem', 'position': 2, 'name': ui.h1, 'item': 'https://www.neofort-biz.ro/' + locale + '/' + (SLUGS[locale] || SLUGS.ro) },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': ({'ro': [['Ce sunt precadrele Blaugelb Triotherm+ și de ce sunt obligatorii pentru nZEB?', 'Precadrele Blaugelb Triotherm+ sunt sistemul de montaj termic cu 3 zone de izolare XPS care elimină complet puntea termică de montaj — responsabilă pentru mucegaiul din jurul ramei. Sunt obligatorii pentru certificarea energetică A și A+ (nZEB) conform standardelor europene.'], ['Care este diferența dintre banda butilică și banda antivapori?', 'Banda butilică (exterior): impermeabilă la apă, permeabilă la vapori — respinge ploaia din exterior. Banda antivapori (interior): Sd > 10 m — blochează vaporii calzi din cameră să migreze în structura peretelui. Ambele sunt necesare pentru sistemul complet RAL 3 straturi.'], ['Ce înseamnă Warm Edge la geamul termoizolator?', 'Warm Edge este distanțierul termoplastic (λ = 0,035 W/mK) care înlocuiește distanțierul clasic de aluminiu (λ = 160 W/mK). Reduce puntea termică la marginea geamului cu 60%, crește temperatura marginii cu 4-6°C și elimină condensul vizibil pe geam lângă ramă.']], 'en': [['What are Blaugelb Triotherm+ precasings and why are they mandatory for nZEB?', 'Blaugelb Triotherm+ precasings are the thermal mounting system with 3 XPS insulation zones that completely eliminate the installation thermal bridge — responsible for mould around the frame. They are mandatory for A and A+ energy certification (nZEB) under European standards.'], ['What is the difference between butyl tape and vapour barrier tape?', 'Butyl tape (exterior): waterproof, vapour permeable — repels rain from outside. Vapour barrier tape (interior): Sd > 10 m — blocks warm indoor vapour from migrating into the wall structure. Both are needed for the complete RAL 3-layer system.'], ['What does Warm Edge mean in insulating glass?', 'Warm Edge is the thermoplastic spacer (λ = 0.035 W/mK) that replaces the classic aluminium spacer (λ = 160 W/mK). It reduces the glass edge thermal bridge by 60%, raises the edge temperature by 4-6°C and eliminates visible condensation on the glass near the frame.']]})[locale]?.map(([q,a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    })) || {'ro': [['Ce sunt precadrele Blaugelb Triotherm+ și de ce sunt obligatorii pentru nZEB?', 'Precadrele Blaugelb Triotherm+ sunt sistemul de montaj termic cu 3 zone de izolare XPS care elimină complet puntea termică de montaj — responsabilă pentru mucegaiul din jurul ramei. Sunt obligatorii pentru certificarea energetică A și A+ (nZEB) conform standardelor europene.'], ['Care este diferența dintre banda butilică și banda antivapori?', 'Banda butilică (exterior): impermeabilă la apă, permeabilă la vapori — respinge ploaia din exterior. Banda antivapori (interior): Sd > 10 m — blochează vaporii calzi din cameră să migreze în structura peretelui. Ambele sunt necesare pentru sistemul complet RAL 3 straturi.'], ['Ce înseamnă Warm Edge la geamul termoizolator?', 'Warm Edge este distanțierul termoplastic (λ = 0,035 W/mK) care înlocuiește distanțierul clasic de aluminiu (λ = 160 W/mK). Reduce puntea termică la marginea geamului cu 60%, crește temperatura marginii cu 4-6°C și elimină condensul vizibil pe geam lângă ramă.']], 'en': [['What are Blaugelb Triotherm+ precasings and why are they mandatory for nZEB?', 'Blaugelb Triotherm+ precasings are the thermal mounting system with 3 XPS insulation zones that completely eliminate the installation thermal bridge — responsible for mould around the frame. They are mandatory for A and A+ energy certification (nZEB) under European standards.'], ['What is the difference between butyl tape and vapour barrier tape?', 'Butyl tape (exterior): waterproof, vapour permeable — repels rain from outside. Vapour barrier tape (interior): Sd > 10 m — blocks warm indoor vapour from migrating into the wall structure. Both are needed for the complete RAL 3-layer system.'], ['What does Warm Edge mean in insulating glass?', 'Warm Edge is the thermoplastic spacer (λ = 0.035 W/mK) that replaces the classic aluminium spacer (λ = 160 W/mK). It reduces the glass edge thermal bridge by 60%, raises the edge temperature by 4-6°C and eliminates visible condensation on the glass near the frame.']]}['ro'].map(([q,a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <style>{`
        .acc-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; background:#fff; }
        .acc-card { background:#fff; display:flex; flex-direction:column; border:1px solid #e8e8e4; }
        .acc-img  { width:100%; aspect-ratio:4/3; object-fit:cover; object-position:center; display:block; background:#f5f5f3; }
        .acc-body { padding:18px 18px 20px; display:flex; flex-direction:column; flex:1; }
        .acc-cat  { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:.54rem; letter-spacing:.2em; text-transform:uppercase; margin-bottom:8px; display:block; }
        .acc-name { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:1rem; color:#1a1a1a; line-height:1.2; margin:0 0 12px; }
        .acc-specs { list-style:none; padding:0; margin:0 0 12px; }
        .acc-specs li { font-size:.72rem; color:#767676; padding:3px 0; border-bottom:1px solid #f0f0ee; line-height:1.4; }
        .acc-specs li:last-child { border-bottom:none; }
        .acc-specs strong { color:#1a1a1a; font-weight:600; }
        .acc-desc { font-size:.76rem; color:#888; line-height:1.6; margin:0 0 16px; flex:1; }
        .acc-btn  { font-family:'Barlow Condensed',sans-serif; font-size:.58rem; font-weight:600; letter-spacing:.16em; text-transform:uppercase; text-decoration:none; border:1px solid #e8e8e4; padding:8px 16px; text-align:center; color:#1a1a1a; transition:all .18s; display:block; margin-top:auto; }
        .acc-btn:hover { background:#1a1a1a; color:#fff; border-color:#1a1a1a; }
        @media(max-width:1100px){ .acc-grid{ grid-template-columns:repeat(3,1fr); } }
        @media(max-width:720px) { .acc-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:480px) { .acc-grid{ grid-template-columns:1fr; } }
      `}</style>

      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">{ui.sub}</p>
        </div>
      </div>

      <section style={{padding:'48px 0 80px', background:'#fff'}}>
        <div className="container mx-auto px-6">
          <div className="acc-grid">
            {A.map(a => {
              const name  = a.name[locale]  || a.name.ro;
              const cat   = a.cat[locale]   || a.cat.ro;
              const desc  = a.desc[locale]  || a.desc.ro;
              const specs = a.specs[locale] || a.specs.ro;
              return (
                <div key={a.slug} className="acc-card">
                  <img src={a.img} alt={name} className="acc-img" loading="lazy"/>
                  <div className="acc-body">
                    <span className="acc-cat" style={{color: a.color}}>{cat}</span>
                    <h2 className="acc-name">{name}</h2>
                    <ul className="acc-specs">
                      {specs.map(([k, v]) => (
                        <li key={k + v}>· <strong>{k}:</strong> {v}</li>
                      ))}
                    </ul>
                    <p className="acc-desc">{desc}</p>
                    <Link href={`/sisteme-nzeb/${a.slug}`} className="acc-btn">{ui.btn_detail}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-label={cta.tag} style={{background:'#111',padding:'0'}}>
        <div className="container" style={{paddingTop:'32px',paddingBottom:'32px',borderTop:'1px solid #1e1e1e'}}>
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#444',marginBottom:'0',textAlign:'center'}}>
            {cta.h2a}{' '}
            <span style={{textDecoration:'underline'}}>{cta.h2b}</span>
            {' '}{cta.h2c}
          </p>
        </div>
      </section>
    </>
  );
}
