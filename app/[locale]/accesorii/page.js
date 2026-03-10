import { Link } from '../../../i18n/navigation';
import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];
const SLUGS = { ro:'accesorii', en:'accessories', de:'zubehoer', fr:'accessoires', es:'accesorios', it:'accessori' };

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil' },
};

const PAGE_UI = {
  ro: { label:'Accesorii · Neofort BIZ', h1:'Accesorii pentru Tâmplărie', sub:'Soluții complete de izolare perimetrală, protecție solară, geam termoizolator și finisare pentru tâmplărie PVC și aluminiu.', btn_detail:'Detalii' },
  en: { label:'Accessories · Neofort BIZ', h1:'Window & Door Accessories', sub:'Complete solutions for perimeter insulation, solar protection, thermal glazing and finishing for PVC and aluminium windows.', btn_detail:'Details' },
  de: { label:'Zubehör · Neofort BIZ', h1:'Fenster- und Türzubehör', sub:'Komplettlösungen für Perimeterdämmung, Sonnenschutz, Wärmeschutzverglasung und Oberflächenveredelung für PVC- und Aluminiumfenster.', btn_detail:'Details' },
  fr: { label:'Accessoires · Neofort BIZ', h1:'Accessoires pour menuiseries', sub:'Solutions complètes d\'isolation périphérique, protection solaire, vitrage thermique et finition pour fenêtres PVC et aluminium.', btn_detail:'Détails' },
  es: { label:'Accesorios · Neofort BIZ', h1:'Accesorios para carpintería', sub:'Soluciones completas de aislamiento perimetral, protección solar, acristalamiento térmico y acabado para ventanas PVC y aluminio.', btn_detail:'Detalles' },
  it: { label:'Accessori · Neofort BIZ', h1:'Accessori per infissi', sub:'Soluzioni complete di isolamento perimetrale, protezione solare, vetro termoisolante e finitura per infissi PVC e alluminio.', btn_detail:'Dettagli' },
};

const A = [
  { slug:'rulouri-exterioare-aluminiu', img:'/accessories/rulouri-exterioare.avif', color:'#e8721c',
    cat:{ ro:'Protecție solară', en:'Solar Protection', de:'Sonnenschutz', fr:'Protection solaire', es:'Protección solar', it:'Protezione solare' },
    name:{ ro:'Rulouri exterioare Aluminiu', en:'Aluminium External Shutters', de:'Außenrollläden aus Aluminium', fr:'Volets roulants en aluminium', es:'Persianas exteriores de aluminio', it:'Tapparelle esterne in alluminio' },
    specs:{ ro:[['Lamele','Aluminiu izolate'],['Acționare','Manual / motor Somfy'],['Vopsire','Vopsire anodizată'],['Casetă','Aplicată sau suprapusă'],['Rezistență vânt','Până la 600 Pa'],['Telecomandă','Cu sau fără întrerupător']], en:[['Slats','Insulated aluminium'],['Drive','Manual / Somfy motor'],['Finish','Anodized coating'],['Box','Surface or built-in'],['Wind resistance','Up to 600 Pa'],['Remote','With or without switch']], de:[['Lamellen','Isoliertes Aluminium'],['Antrieb','Manuell / Somfy-Motor'],['Beschichtung','Eloxiert'],['Kasten','Aufgesetzt oder integriert'],['Windwiderstand','Bis 600 Pa'],['Fernbedienung','Mit oder ohne Schalter']], fr:[['Lames','Aluminium isolé'],['Commande','Manuel / moteur Somfy'],['Finition','Laquage anodisé'],['Caisson','Appliqué ou intégré'],['Résistance vent','Jusqu\'à 600 Pa'],['Télécommande','Avec ou sans interrupteur']], es:[['Lamas','Aluminio aislado'],['Accionamiento','Manual / motor Somfy'],['Acabado','Lacado anodizado'],['Cajón','Aplicado o integrado'],['Resistencia viento','Hasta 600 Pa'],['Mando a distancia','Con o sin interruptor']], it:[['Stecche','Alluminio isolato'],['Azionamento','Manuale / motore Somfy'],['Finitura','Verniciatura anodizzata'],['Cassonetto','Applicato o integrato'],['Resistenza vento','Fino a 600 Pa'],['Telecomando','Con o senza interruttore']] },
    desc:{ ro:'Rulouri aluminiu integrate sau aplicate. Protecție solară, termică și fonică. Acționare manuală sau electrică cu motor Somfy. Gamă completă de culori RAL.', en:'Integrated or surface-mounted aluminium shutters. Solar, thermal and acoustic protection. Manual or electric drive with Somfy motor. Full RAL colour range.', de:'Integrierte oder aufgesetzte Aluminiumrollläden. Sonnen-, Wärme- und Schallschutz. Manuelle oder elektrische Bedienung mit Somfy-Motor. Komplette RAL-Farbpalette.', fr:'Volets roulants aluminium intégrés ou appliqués. Protection solaire, thermique et phonique. Commande manuelle ou électrique avec moteur Somfy. Gamme complète RAL.', es:'Persianas de aluminio integradas o aplicadas. Protección solar, térmica y acústica. Accionamiento manual o eléctrico con motor Somfy. Gama completa de colores RAL.', it:'Tapparelle in alluminio integrate o applicate. Protezione solare, termica e acustica. Azionamento manuale o elettrico con motore Somfy. Gamma completa colori RAL.' },
  },
  { slug:'jaluzele-venetiene-raffstore', img:'/accessories/jaluzele-raffstore.avif', color:'#e8721c',
    cat:{ ro:'Protecție solară', en:'Solar Protection', de:'Sonnenschutz', fr:'Protection solaire', es:'Protección solar', it:'Protezione solare' },
    name:{ ro:'Jaluzele Venețiene Raffstore', en:'Venetian Raffstore Blinds', de:'Raffstore Jalousien', fr:'Persiennes Vénitiennes Raffstore', es:'Persianas Venecianas Raffstore', it:'Veneziane Raffstore' },
    specs:{ ro:[['Lamele','Aluminiu'],['Acționare','Electric · Domotică'],['Culori','Gamă completă RAL'],['Casetă','Aparentă sau încastrată'],['Rezistență vânt','Până la 600 Pa'],['Telecomandă','Cu sau fără întrerupător']], en:[['Slats','Aluminium'],['Drive','Electric · Home automation'],['Colours','Full RAL range'],['Box','Visible or recessed'],['Wind resistance','Up to 600 Pa'],['Remote','With or without switch']], de:[['Lamellen','Aluminium'],['Antrieb','Elektrisch · Hausautomation'],['Farben','Komplette RAL-Palette'],['Kasten','Sichtbar oder eingelassen'],['Windwiderstand','Bis 600 Pa'],['Fernbedienung','Mit oder ohne Schalter']], fr:[['Lames','Aluminium'],['Commande','Électrique · Domotique'],['Couleurs','Gamme RAL complète'],['Caisson','Apparent ou encastré'],['Résistance vent','Jusqu\'à 600 Pa'],['Télécommande','Avec ou sans interrupteur']], es:[['Lamas','Aluminio'],['Accionamiento','Eléctrico · Domótica'],['Colores','Gama RAL completa'],['Cajón','Visto o empotrado'],['Resistencia viento','Hasta 600 Pa'],['Mando','Con o sin interruptor']], it:[['Stecche','Alluminio'],['Azionamento','Elettrico · Domotica'],['Colori','Gamma RAL completa'],['Cassonetto','A vista o incassato'],['Resistenza vento','Fino a 600 Pa'],['Telecomando','Con o senza interruttore']] },
    desc:{ ro:'Raffstore este categoria de jaluzele venețiene exterioare de înaltă performanță. Lamelele au o curbură specială și pot fi orientate la orice unghi — de la lumină maximă la întuneric complet.', en:'Raffstore high-performance exterior venetian blinds. Special curved slats oriented at any angle — from maximum light to complete darkness.', de:'Raffstore hochwertige Außenjalousien. Spezielle gekrümmte Lamellen in jedem Winkel ausrichtbar — von maximalem Licht bis völliger Dunkelheit.', fr:'Raffstore stores vénitiens extérieurs haute performance. Lames à courbure spéciale orientables à tout angle — de la lumière maximale à l\'obscurité totale.', es:'Raffstore persianas venecianas exteriores de alto rendimiento. Lamas de curvatura especial orientables a cualquier ángulo — de luz máxima a oscuridad total.', it:'Raffstore veneziane esterne ad alte prestazioni. Stecche a curvatura speciale orientabili a qualsiasi angolo — dalla luce massima al buio completo.' },
  },
  { slug:'precadre-blaugelb-triotherm', img:'/accessories/precadre-blaugelb.avif', color:'#4a7c59',
    cat:{ ro:'Izolare perimetrală', en:'Perimeter Insulation', de:'Perimeterdämmung', fr:'Isolation périphérique', es:'Aislamiento perimetral', it:'Isolamento perimetrale' },
    name:{ ro:'Precadre Blaugelb Triotherm+', en:'Blaugelb Triotherm+ Precasings', de:'Blaugelb Triotherm+ Vorfenster', fr:'Précadres Blaugelb Triotherm+', es:'Premarcos Blaugelb Triotherm+', it:'Pre-parete Blaugelb Triotherm+' },
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
  { slug:'toc-de-renovare', img:'/accessories/toc-renovare.avif', color:'#2d5a8e',
    cat:{ ro:'Montaj & Renovare', en:'Installation & Renovation', de:'Montage & Renovierung', fr:'Pose & Rénovation', es:'Montaje & Renovación', it:'Posa & Ristrutturazione' },
    name:{ ro:'Toc de renovare', en:'Renovation Profiles', de:'Renovierungsprofile', fr:'Profils de rénovation', es:'Marco de renovación', it:'Telaio di ristrutturazione' },
    specs:{ ro:[['Aripă renovare','35 mm'],['Aripă renovare','60 mm'],['Adâncime','76 mm'],['Transfer termic Uw','0,73 W/m²K'],['Vitraj','Până la 48 mm'],['Protecție fonică','Până la 47 dB'],['Anti-efracție','Până la RC 3']], en:[['Renovation wing','35 mm'],['Renovation wing','60 mm'],['Depth','76 mm'],['Thermal transfer Uw','0.73 W/m²K'],['Glazing','Up to 48 mm'],['Sound insulation','Up to 47 dB'],['Burglary resistance','Up to RC 3']], de:[['Renovierungsflügel','35 mm'],['Renovierungsflügel','60 mm'],['Tiefe','76 mm'],['Wärmedurchgang Uw','0,73 W/m²K'],['Verglasung','Bis 48 mm'],['Schalldämmung','Bis 47 dB'],['Einbruchschutz','Bis RC 3']], fr:[['Aile de rénovation','35 mm'],['Aile de rénovation','60 mm'],['Profondeur','76 mm'],['Transfert thermique Uw','0,73 W/m²K'],['Vitrage','Jusqu\'à 48 mm'],['Isolation phonique','Jusqu\'à 47 dB'],['Anti-effraction','Jusqu\'à RC 3']], es:[['Ala de renovación','35 mm'],['Ala de renovación','60 mm'],['Profundidad','76 mm'],['Transferencia térmica Uw','0,73 W/m²K'],['Acristalamiento','Hasta 48 mm'],['Aislamiento acústico','Hasta 47 dB'],['Resistencia al robo','Hasta RC 3']], it:[['Ala di ristrutturazione','35 mm'],['Ala di ristrutturazione','60 mm'],['Profondità','76 mm'],['Trasferimento termico Uw','0,73 W/m²K'],['Vetro','Fino a 48 mm'],['Isolamento acustico','Fino a 47 dB'],['Anti-effrazione','Fino a RC 3']] },
    desc:{ ro:'Soluție pentru renovare fără demontarea tocului existent. Reduce semnificativ timpul și costul de montaj. Compatibil cu profile PVC și aluminiu, vitraj până la 48mm.', en:'Renovation solution without removing the existing frame. Significantly reduces installation time and cost. Compatible with PVC and aluminium profiles, glazing up to 48mm.', de:'Renovierungslösung ohne Demontage des vorhandenen Rahmens. Reduziert Montagezeit erheblich. Kompatibel mit PVC- und Aluminiumprofilen, Verglasung bis 48mm.', fr:'Solution de rénovation sans dépose du dormant existant. Réduit considérablement le temps de pose. Compatible profils PVC et aluminium, vitrage jusqu\'à 48mm.', es:'Solución de renovación sin retirar el marco existente. Reduce significativamente el tiempo de instalación. Compatible con perfiles PVC y aluminio, acristalamiento hasta 48mm.', it:'Soluzione di ristrutturazione senza rimozione del telaio. Riduce tempi di posa. Compatibile con profili PVC e alluminio, vetro fino a 48mm.' },
  },
  { slug:'pervazuri-interior-pvc-exterior-al', img:'/accessories/pervazuri-glafuri.avif', color:'#2d5a8e',
    cat:{ ro:'Finisare', en:'Finishing', de:'Oberflächenveredelung', fr:'Finition', es:'Acabado', it:'Finitura' },
    name:{ ro:'Pervazuri interior PVC / exterior AL', en:'Interior Windowsills & Exterior Windowsills', de:'Innenfensterbänke & Außenfensterbänke', fr:'Appuis de fenêtre intérieurs & extérieurs', es:'Alféizares interiores & exteriores', it:'Davanzali interni & esterni' },
    specs:{ ro:[['Culori RAL','9016, 8019, 8003, 7016'],['Anodizat','E6/EV1, E6/C32, E6/C33'],['Adâncime interior','20mm – 400mm'],['Capace','Aluminiu clips-on'],['Rezistență','La intemperii'],['Cuplare','90° · 135° · 180°'],['Etanșare','Garnitură EPDM']], en:[['RAL colours','9016, 8019, 8003, 7016'],['Anodized','E6/EV1, E6/C32, E6/C33'],['Interior depth','20mm – 400mm'],['Caps','Aluminium clip-on'],['Resistance','Weather-resistant'],['Coupling','90° · 135° · 180°'],['Sealing','EPDM gasket']], de:[['RAL-Farben','9016, 8019, 8003, 7016'],['Eloxiert','E6/EV1, E6/C32, E6/C33'],['Innentiefe','20mm – 400mm'],['Kappen','Aluminium Clips'],['Widerstand','Witterungsbeständig'],['Kupplung','90° · 135° · 180°'],['Abdichtung','EPDM-Dichtung']], fr:[['Couleurs RAL','9016, 8019, 8003, 7016'],['Anodisé','E6/EV1, E6/C32, E6/C33'],['Profondeur intérieure','20mm – 400mm'],['Embouts','Aluminium clips'],['Résistance','Aux intempéries'],['Couplage','90° · 135° · 180°'],['Étanchéité','Joint EPDM']], es:[['Colores RAL','9016, 8019, 8003, 7016'],['Anodizado','E6/EV1, E6/C32, E6/C33'],['Profundidad interior','20mm – 400mm'],['Tapas','Aluminio clips-on'],['Resistencia','A intemperie'],['Acoplamiento','90° · 135° · 180°'],['Sellado','Junta EPDM']], it:[['Colori RAL','9016, 8019, 8003, 7016'],['Anodizzato','E6/EV1, E6/C32, E6/C33'],['Profondità interna','20mm – 400mm'],['Tappi','Alluminio clip-on'],['Resistenza','Alle intemperie'],['Accoppiamento','90° · 135° · 180°'],['Tenuta','Guarnizione EPDM']] },
    desc:{ ro:'Pervazuri interioare PVC și glafuri exterioare din aluminiu. Gamă largă de culori RAL și finisaje anodizate. Rezistente la intemperii, etanșate cu garnitură EPDM.', en:'Interior PVC windowsills and exterior aluminium sills. Wide range of RAL colours and anodized finishes. Weather-resistant with EPDM gasket.', de:'Innenfensterbänke PVC und Außenfensterbänke Aluminium. Breite RAL-Farbauswahl. Witterungsbeständig mit EPDM-Dichtung.', fr:'Appuis intérieurs PVC et extérieurs aluminium. Large gamme RAL et finitions anodisées. Résistants aux intempéries avec joint EPDM.', es:'Alféizares interiores PVC y exteriores aluminio. Amplia gama RAL y acabados anodizados. Resistentes a la intemperie con junta EPDM.', it:'Davanzali interni PVC ed esterni alluminio. Ampia gamma RAL e finiture anodizzate. Resistenti alle intemperie con guarnizione EPDM.' },
  },
  { slug:'grila-higroreglabila-aereco', img:'/accessories/grila-aereco.avif', color:'#767676',
    cat:{ ro:'Ventilație', en:'Ventilation', de:'Lüftung', fr:'Ventilation', es:'Ventilación', it:'Ventilazione' },
    name:{ ro:'Grilă higroreglabilă Aereco', en:'Ventilation Systems', de:'Lüftungssysteme', fr:'Systèmes d\'aération', es:'Sistemas de ventilación', it:'Sistemi di ventilazione' },
    specs:{ ro:[['Debit aer','5–35 m³/h'],['Atenuare acustică','33 dB'],['Higroreglabilă','Da'],['Protecție','Antiinsecte'],['Autolimitantă','Da'],['Protecție externă','Plată'],['Culoare','Alb, brun, stejar auriu']], en:[['Air flow','5–35 m³/h'],['Sound attenuation','33 dB'],['Hygro-adjustable','Yes'],['Protection','Anti-insect'],['Self-limiting','Yes'],['External protection','Flat'],['Colour','White, brown, golden oak']], de:[['Luftstrom','5–35 m³/h'],['Schalldämpfung','33 dB'],['Hygroregelbar','Ja'],['Schutz','Insektenschutz'],['Selbstbegrenzend','Ja'],['Außenschutz','Flach'],['Farbe','Weiß, braun, goldene Eiche']], fr:[['Débit d\'air','5–35 m³/h'],['Atténuation acoustique','33 dB'],['Hygroréglable','Oui'],['Protection','Anti-insectes'],['Autolimitante','Oui'],['Protection extérieure','Plate'],['Couleur','Blanc, brun, chêne doré']], es:[['Caudal de aire','5–35 m³/h'],['Atenuación acústica','33 dB'],['Higrorreglable','Sí'],['Protección','Anti-insectos'],['Autolimitante','Sí'],['Protección exterior','Plana'],['Color','Blanco, marrón, roble dorado']], it:[['Portata aria','5–35 m³/h'],['Attenuazione acustica','33 dB'],['Igroregolab.','Sì'],['Protezione','Anti-insetti'],['Autolimitante','Sì'],['Protezione esterna','Piatta'],['Colore','Bianco, marrone, rovere dorato']] },
    desc:{ ro:'Grilă higroreglabilă Aereco integrată în tâmplărie. Reglează automat debitul de aer în funcție de umiditate. Ventilație controlată fără pierderi termice semnificative.', en:'Aereco hygro-adjustable grille integrated in windows. Automatically adjusts airflow based on humidity. Controlled ventilation without significant heat loss.', de:'Aereco hygroregelbare Lüftungsgitter integriert in Fenster. Regelt Luftstrom automatisch. Kontrollierte Belüftung ohne nennenswerte Wärmeverluste.', fr:'Grille hygroréglable Aereco intégrée dans la menuiserie. Régule automatiquement le débit d\'air. Ventilation contrôlée sans pertes thermiques significatives.', es:'Rejilla higrorreglable Aereco integrada. Regula automáticamente el caudal de aire según la humedad. Ventilación controlada sin pérdidas térmicas significativas.', it:'Griglia igroregolab. Aereco integrata. Regola automaticamente il flusso d\'aria. Ventilazione controllata senza perdite termiche significative.' },
  },
  { slug:'geamuri-termopan-saint-gobain', img:'/accessories/geam-termopan-saint-gobain.avif', color:'#2d5a8e',
    cat:{ ro:'Geam termoizolator', en:'Thermal Glazing', de:'Wärmeschutzverglasung', fr:'Vitrage thermique', es:'Acristalamiento térmico', it:'Vetro termoisolante' },
    name:{ ro:'Geamuri Termopan Saint Gobain', en:'Thermal Glass Saint Gobain', de:'Isolierglas Saint Gobain', fr:'Verre isolant Saint Gobain', es:'Vidrio aislante Saint Gobain', it:'Vetro termoisolante Saint Gobain' },
    specs:{ ro:[['Planitherm XN','Low-e coating'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 suprafețe'],['Planistar SUN','Control solar'],['Stadip SILENCE','Fonoizolant'],['Protecție termică și fonică','Da'],['Utilizare conformă nZEB','Da']], en:[['Planitherm XN','Low-e coating'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 surfaces'],['Planistar SUN','Solar control'],['Stadip SILENCE','Sound insulation'],['Thermal & sound protection','Yes'],['nZEB compliant','Yes']], de:[['Planitherm XN','Low-e-Beschichtung'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 Oberflächen'],['Planistar SUN','Sonnenschutzkontrolle'],['Stadip SILENCE','Schalldämmung'],['Wärme- und Schallschutz','Ja'],['nZEB-konform','Ja']], fr:[['Planitherm XN','Revêtement low-e'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 surfaces'],['Planistar SUN','Contrôle solaire'],['Stadip SILENCE','Isolation phonique'],['Protection thermique et phonique','Oui'],['Conforme nZEB','Oui']], es:[['Planitherm XN','Revestimiento low-e'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 superficies'],['Planistar SUN','Control solar'],['Stadip SILENCE','Aislamiento acústico'],['Protección térmica y acústica','Sí'],['Conforme nZEB','Sí']], it:[['Planitherm XN','Rivestimento low-e'],['Planitherm ONE','Ultra low-e'],['Planitherm 4S Evolution','4 superfici'],['Planistar SUN','Controllo solare'],['Stadip SILENCE','Isolamento acustico'],['Protezione termica e acustica','Sì'],['Conforme nZEB','Sì']] },
    desc:{ ro:'Pachete de sticlă termoizolantă Saint-Gobain SGG. Gamă completă de soluții low-e, control solar și fonoizolare. Compatibile cu profilele PVC Salamander și aluminiu Alumil.', en:'Saint-Gobain SGG thermal insulating glass packages. Complete range of low-e, solar control and sound insulation solutions. Compatible with Salamander PVC and Alumil aluminium profiles.', de:'Wärmeschutzisolierglas Saint-Gobain SGG. Komplettes Sortiment mit Low-e, Sonnenschutzkontrolle und Schalldämmung. Kompatibel mit Salamander PVC- und Alumil-Aluminiumprofilen.', fr:'Packages vitrage isolant Saint-Gobain SGG. Gamme complète low-e, contrôle solaire et phonique. Compatibles avec profils PVC Salamander et aluminium Alumil.', es:'Paquetes vidrio aislante Saint-Gobain SGG. Gama completa low-e, control solar y acústico. Compatibles con perfiles PVC Salamander y aluminio Alumil.', it:'Pacchetti vetro termoisolante Saint-Gobain SGG. Gamma completa low-e, controllo solare e acustico. Compatibili con profili PVC Salamander e alluminio Alumil.' },
  },
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'accesorii' });
  const slug = SLUGS[locale] || SLUGS.ro;
  return {
    title: t('title'), description: t('description'),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: Object.fromEntries([...LOCALES.map(l => [l, `${BASE}/${l}/${SLUGS[l]}`]), ['x-default', `${BASE}/ro/${SLUGS.ro}`]]),
    },
    openGraph: { type:'website', url:`${BASE}/${locale}/${slug}`, siteName:'Neofort BIZ', title:t('title'), description:t('description'), images:[{ url:`${BASE}/og-neofort.jpg`, width:1200, height:630 }] },
  };
}

export default async function AccesoriiPage({ params }) {
  const { locale } = await params;
  const ui  = PAGE_UI[locale]     || PAGE_UI.ro;
  const cta = CTA_LABELS[locale]  || CTA_LABELS.ro;

  const schema = {
    '@context':'https://schema.org', '@type':'ItemList', 'name': ui.h1,
    'url': `${BASE}/${locale}/${SLUGS[locale] || SLUGS.ro}`,
    'itemListElement': A.map((a, i) => ({
      '@type':'ListItem', 'position': i + 1,
      'item': { '@type':'Product', 'name': a.name[locale]||a.name.ro, 'description': a.desc[locale]||a.desc.ro,
        'image': `${BASE}${a.img}`, 'brand': { '@type':'Brand','name':'Neofort BIZ' },
        'offers': { '@type':'Offer','availability':'https://schema.org/InStock','priceCurrency':'RON','seller':{'@type':'Organization','name':'Neofort BIZ'} },
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <style>{`
        .acc-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:#e8e8e4; border:1px solid #e8e8e4; }
        .acc-card { background:#fff; display:flex; flex-direction:column; }
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
        @media(max-width:420px) { .acc-grid{ grid-template-columns:1fr; } }
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
                    <Link href="/contact" className="acc-btn">{ui.btn_detail}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-label={cta.tag} style={{background:'#111', padding:'0'}}>
        <div className="container" style={{paddingTop:'32px', paddingBottom:'32px', borderTop:'1px solid #1e1e1e'}}>
          <p style={{fontFamily:'Barlow Condensed,sans-serif', fontSize:'.6rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#444', marginBottom:'0', textAlign:'center'}}>
            {cta.h2a}{' '}<span style={{textDecoration:'underline'}}>{cta.h2b}</span>{' '}{cta.h2c}
          </p>
        </div>
      </section>
    </>
  );
}
