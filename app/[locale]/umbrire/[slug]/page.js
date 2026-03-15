import { notFound } from 'next/navigation';
import { Link } from '../../../../i18n/navigation';

const BASE    = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

const SLUG_MAP = {
  'rulouri-exterioare-aluminiu': {
    ro:'rulouri-exterioare-aluminiu',      en:'aluminium-external-roller-shutters',
    de:'aluminium-aussenrollladen',        fr:'volets-roulants-aluminium-exterieurs',
    es:'persianas-exteriores-aluminio',    it:'tapparelle-esterne-alluminio',
  },
  'jaluzele-venetiene-raffstore': {
    ro:'jaluzele-venetiene-raffstore',     en:'raffstore-venetian-blinds',
    de:'raffstore-aussenjalousien',        fr:'stores-venitiens-raffstore',
    es:'persianas-venecianas-raffstore',   it:'veneziane-raffstore',
  },
  'zipscreen': {
    ro:'zipscreen',                        en:'zipscreen-exterior-blind',
    de:'zipscreen-aussenrollo',            fr:'zipscreen-store-exterieur',
    es:'zipscreen-toldo-exterior',         it:'zipscreen-tenda-esterna',
  },
};

const REVERSE = {};
for (const [c, slugs] of Object.entries(SLUG_MAP))
  for (const s of Object.values(slugs)) REVERSE[s] = c;

const PRODUCTS = {

  'rulouri-exterioare-aluminiu': {
    img: '/accessories/rulouri-exterioare.avif',
    color: '#e8721c',
    category: { ro:'Sisteme Umbrire', en:'Shading Systems', de:'Beschattungssysteme', fr:'Systèmes d\'occultation', es:'Sistemas de sombreado', it:'Sistemi di oscuramento' },
    serie: { ro:'Rulouri Exterioare', en:'Roller Shutters', de:'Außenrollladen', fr:'Volets roulants', es:'Persianas exteriores', it:'Tapparelle esterne' },
    breadcrumb_parent_href: '/umbrire',
    breadcrumb_parent: { ro:'Sisteme Umbrire', en:'Shading Systems', de:'Beschattung', fr:'Occultation', es:'Sombreado', it:'Oscuramento' },
    name: {
      ro:'Rulouri Exterioare din Aluminiu – Protecție Solară, Termică și Antiefracție',
      en:'Aluminium Exterior Roller Shutters – Solar, Thermal and Burglar Protection',
      de:'Außenrollladen aus Aluminium – Sonnen-, Wärme- und Einbruchschutz',
      fr:'Volets Roulants Extérieurs en Aluminium – Protection Solaire, Thermique et Anti-effraction',
      es:'Persianas Exteriores de Aluminio – Protección Solar, Térmica y Antirrobo',
      it:'Tapparelle Esterne in Alluminio – Protezione Solare, Termica e Antieffrazione',
    },
    tagline: {
      ro:'Rulouri exterioare din aluminiu cu acționare electrică Somfy — reducere până la 70% aport solar, izolare termică nocturnă, antiefracție RC3.',
      en:'Exterior aluminium roller shutters with Somfy electric drive — up to 70% solar gain reduction, night thermal insulation, RC3 anti-burglary.',
      de:'Außenrollladen aus Aluminium mit Somfy-Elektroantrieb — bis zu 70% Solargewinnreduzierung, Nacht-Wärmedämmung, Einbruchschutz RC3.',
      fr:'Volets roulants extérieurs en aluminium avec commande électrique Somfy — réduction jusqu\'à 70% des apports solaires, isolation thermique nocturne, anti-effraction RC3.',
      es:'Persianas exteriores de aluminio con accionamiento eléctrico Somfy — reducción hasta 70% ganancia solar, aislamiento térmico nocturno, antirrobo RC3.',
      it:'Tapparelle esterne in alluminio con azionamento elettrico Somfy — riduzione fino al 70% del guadagno solare, isolamento termico notturno, antieffrazione RC3.',
    },
    specs: {
      ro:[['Material lamele','Aluminiu extrudat izolat'],['Grosime lamelă','7,5 – 19,5 mm'],['Acționare','Electrică (motor Somfy) / Manuală'],['Casetă','Aplicată sau suprapusă / Încastrată'],['Ghidaje','PVC sau aluminiu'],['Lățime maximă','4500 mm'],['Înălțime maximă','3000 mm'],['Culori','Gamă completă RAL + texturi lemn'],['Automatizare','Timer, senzor vânt, automatizare smart home'],['Antiefracție','RC3 (ghidaje securizate)'],],
      en:[['Slat material','Insulated extruded aluminium'],['Slat thickness','7.5 – 19.5 mm'],['Drive','Electric (Somfy motor) / Manual'],['Box','Surface or recessed'],['Guides','PVC or aluminium'],['Maximum width','4500 mm'],['Maximum height','3000 mm'],['Colours','Full RAL range + wood textures'],['Automation','Timer, wind sensor, home automation'],['Anti-burglary','RC3 (secured guides)'],],
      de:[['Lamellenmaterial','Isoliertes stranggepresstes Aluminium'],['Lamellendicke','7,5 – 19,5 mm'],['Antrieb','Elektrisch (Somfy-Motor) / Manuell'],['Kasten','Aufgesetzt oder eingelassen'],['Führungen','PVC oder Aluminium'],['Max. Breite','4500 mm'],['Max. Höhe','3000 mm'],['Farben','Komplette RAL-Palette + Holzoptik'],['Automatisierung','Timer, Windsensor, Smart Home'],['Einbruchschutz','RC3 (gesicherte Führungen)'],],
      fr:[['Matériau lame','Aluminium extrudé isolé'],['Épaisseur lame','7,5 – 19,5 mm'],['Commande','Électrique (moteur Somfy) / Manuelle'],['Caisson','Appliqué ou encastré'],['Guides','PVC ou aluminium'],['Largeur max.','4500 mm'],['Hauteur max.','3000 mm'],['Couleurs','Gamme RAL complète + bois'],['Automatisation','Minuterie, détecteur vent, domotique'],['Anti-effraction','RC3 (guides sécurisés)'],],
      es:[['Material lama','Aluminio extruido aislado'],['Grosor lama','7,5 – 19,5 mm'],['Accionamiento','Eléctrico (motor Somfy) / Manual'],['Cajón','Aplicado o empotrado'],['Guías','PVC o aluminio'],['Ancho máx.','4500 mm'],['Alto máx.','3000 mm'],['Colores','Gama RAL completa + madera'],['Automatización','Temporizador, sensor viento, domótica'],['Antirrobo','RC3 (guías seguras)'],],
      it:[['Materiale lamella','Alluminio estruso isolato'],['Spessore lamella','7,5 – 19,5 mm'],['Azionamento','Elettrico (motore Somfy) / Manuale'],['Cassonetto','Applicato o incassato'],['Guide','PVC o alluminio'],['Largh. max.','4500 mm'],['Alt. max.','3000 mm'],['Colori','Gamma RAL completa + legno'],['Automazione','Timer, sensore vento, automatizare smart home'],['Antieffrazione','RC3 (guide sicure)'],],
    },
    perf: {
      ro:[['Reducere aport solar','până la 70%'],['Izolare termică nocturnă','ΔU ≈ 0,3 W/m²K suplimentar'],['Izolare fonică','+ 3–5 dB față de fereastră singură'],['Rezistență vânt','până la 1050 Pa'],['Antiefracție RC3','variante cu ghidaje securizate'],['Compatibilitate','orice fereastră PVC sau aluminiu'],],
      en:[['Solar gain reduction','up to 70%'],['Night thermal insulation','ΔU ≈ 0.3 W/m²K additional'],['Sound insulation','+ 3–5 dB vs. window alone'],['Wind resistance','up to 1050 Pa'],['RC3 anti-burglary','versions with secured guides'],['Compatibility','any PVC or aluminium window'],],
      de:[['Solargewinnreduktion','bis 70%'],['Nacht-Wärmedämmung','ΔU ≈ 0,3 W/m²K zusätzlich'],['Schalldämmung','+ 3–5 dB ggü. Fenster allein'],['Windlast','bis 1050 Pa'],['Einbruchschutz RC3','Varianten mit gesicherten Führungen'],['Kompatibilität','jedes PVC- oder Aluminiumfenster'],],
      fr:[['Réduction apports solaires','jusqu\'à 70%'],['Isolation thermique nocturne','ΔU ≈ 0,3 W/m²K supplémentaire'],['Isolation phonique','+ 3–5 dB vs. fenêtre seule'],['Résistance vent','jusqu\'à 1050 Pa'],['Anti-effraction RC3','variantes guides sécurisés'],['Compatibilité','toute fenêtre PVC ou aluminium'],],
      es:[['Reducción ganancia solar','hasta 70%'],['Aislamiento nocturno','ΔU ≈ 0,3 W/m²K adicional'],['Aislamiento acústico','+ 3–5 dB vs. ventana sola'],['Resistencia viento','hasta 1050 Pa'],['Antirrobo RC3','variantes guías seguras'],['Compatibilidad','cualquier ventana PVC o aluminio'],],
      it:[['Riduzione guadagno solare','fino al 70%'],['Isolamento termico notturno','ΔU ≈ 0,3 W/m²K aggiuntivo'],['Isolamento acustico','+ 3–5 dB vs. finestra sola'],['Resistenza vento','fino a 1050 Pa'],['Antieffrazione RC3','versioni con guide sicure'],['Compatibilità','qualsiasi finestra PVC o alluminio'],],
    },
    advantages: {
      ro:['Reducere până la 70% a aportului solar vara — temperatura interioară cu 4–8°C mai scăzută fără aer condiționat','Izolare termică nocturnă ΔU ≈ 0,3 W/m²K — ruloul coborât noaptea reduce semnificativ pierderile de căldură prin fereastră','Antiefracție RC3 — variante cu ghidaje securizate certificate, superioare grilajelor interioare care blochează vederea','Automatizare completă Somfy — motor tubular silent cu timer, senzor vânt, telecomandă, integrare KNX / Zigbee / WiFi','Lamele 7,5–19,5 mm aluminiu extrudat — rezistență superioară lamelelor din plastic, durabilitate ≥ 25 ani','Compatibil cu orice fereastră deja montată — PVC, aluminiu, lemn, fără modificări structurale'],
      en:['Up to 70% solar gain reduction in summer — indoor temperature 4–8°C lower without air conditioning','Night thermal insulation ΔU ≈ 0.3 W/m²K — lowered shutter at night significantly reduces heat loss through window','RC3 anti-burglary — certified versions with secured guides, superior to interior bars that block the view','Full Somfy automation — silent tubular motor with timer, wind sensor, remote control, KNX / Zigbee / WiFi integration','7.5–19.5 mm extruded aluminium slats — superior strength to plastic slats, durability ≥ 25 years','Compatible with any already installed window — PVC, aluminium, wood, no structural modifications'],
      de:['Bis zu 70% Solargewinnreduktion im Sommer — Innentemperatur 4–8°C niedriger ohne Klimaanlage','Nacht-Wärmedämmung ΔU ≈ 0,3 W/m²K — heruntergelassener Rollladen nachts reduziert Wärmeverluste durch Fenster deutlich','Einbruchschutz RC3 — zertifizierte Varianten mit gesicherten Führungen, überlegen gegenüber Innengittern','Vollautomatisierung Somfy — leiser Rohrmotor mit Timer, Windsensor, Fernbedienung, KNX / Zigbee / WiFi','7,5–19,5 mm stranggepresste Aluminiumlamellen — überlegene Festigkeit gegenüber Kunststofflamellen, Haltbarkeit ≥ 25 Jahre','Kompatibel mit jedem bereits montierten Fenster — PVC, Aluminium, Holz, keine Strukturänderungen'],
      fr:['Jusqu\'à 70% de réduction des apports solaires en été — température intérieure 4–8°C plus basse sans climatisation','Isolation thermique nocturne ΔU ≈ 0,3 W/m²K — volet baissé la nuit réduit significativement les pertes de chaleur','Anti-effraction RC3 — variantes certifiées avec guides sécurisés, supérieur aux barreaux intérieurs','Automatisation complète Somfy — moteur tubulaire silencieux avec minuterie, détecteur vent, télécommande, KNX / Zigbee / WiFi','Lames aluminium extrudé 7,5–19,5 mm — résistance supérieure aux lames plastique, durabilité ≥ 25 ans','Compatible avec toute fenêtre déjà installée — PVC, aluminium, bois, sans modifications structurelles'],
      es:['Reducción hasta 70% de la ganancia solar en verano — temperatura interior 4–8°C más baja sin aire acondicionado','Aislamiento térmico nocturno ΔU ≈ 0,3 W/m²K — persiana bajada de noche reduce significativamente las pérdidas de calor','Antirrobo RC3 — variantes certificadas con guías seguras, superior a las rejas interiores que bloquean la vista','Automatización completa Somfy — motor tubular silencioso con temporizador, sensor viento, mando, KNX / Zigbee / WiFi','Lamas aluminio extruido 7,5–19,5 mm — resistencia superior a las lamas de plástico, durabilidad ≥ 25 años','Compatible con cualquier ventana ya instalada — PVC, aluminio, madera, sin modificaciones estructurales'],
      it:['Riduzione fino al 70% del guadagno solare in estate — temperatura interna 4–8°C più bassa senza aria condizionata','Isolamento termico notturno ΔU ≈ 0,3 W/m²K — tapparella abbassata di notte riduce significativamente le perdite di calore','Antieffrazione RC3 — versioni certificate con guide sicure, superiore alle sbarre interne che bloccano la vista','Automazione completa Somfy — motore tubolare silenzioso con timer, sensore vento, telecomando, KNX / Zigbee / WiFi','Lamelle alluminio estruso 7,5–19,5 mm — resistenza superiore alle lamelle in plastica, durata ≥ 25 anni','Compatibile con qualsiasi finestra già installata — PVC, alluminio, legno, senza modifiche strutturali'],
    },
    seo_text: {
      ro:'Rulourile exterioare din aluminiu reprezintă cel mai eficient sistem de protecție solară activă pentru ferestre, reducând aportul solar în lunile de vară cu până la 70% și menținând temperatura interioară semnificativ mai scăzută fără a pune presiune suplimentară pe sistemul de aer condiționat. Lamelele extrudate din aluminiu izolat, disponibile în grosimi de 7,5 mm până la 19,5 mm, asigură atât o rigiditate structurală superioară față de lamelele din plastic, cât și o rezistență la efracție certificată până la RC3 în variantele cu ghidaje securizate — performanță imposibilă cu rulourile din PVC sau aluminiu neizolat. Coborât complet noaptea, ruloul adaugă un strat suplimentar de izolare de ΔU ≈ 0,3 W/m²K, reducând pierderile de căldură prin fereastră cu până la 20% pe timp de noapte de iarnă. Sistemul este compatibil cu orice fereastră PVC sau aluminiu deja montată, poate fi integrat în automatizare smart home prin motor tubular Somfy cu control WiFi, Zigbee sau KNX, și este disponibil în toată paleta RAL plus texturi imitație lemn. Neofort BIZ furnizează și montează rulouri exterioare din aluminiu în București și toată Europa, cu consultanță gratuită și calcul al dimensionării înainte de comandă.',
      en:'Exterior aluminium roller shutters represent the most effective active solar protection system for windows, reducing solar gain in summer months by up to 70% and maintaining indoor temperature significantly lower without putting additional pressure on the air conditioning system. Insulated extruded aluminium slats, available in thicknesses from 7.5 mm to 19.5 mm, provide both superior structural rigidity compared to plastic slats and certified burglary resistance up to RC3 in versions with secured guides — performance impossible with PVC or non-insulated aluminium shutters. Fully lowered at night, the shutter adds an additional insulation layer of ΔU ≈ 0.3 W/m²K, reducing heat loss through the window by up to 20% on winter nights. The system is compatible with any already installed PVC or aluminium window, can be integrated into home automation via Somfy tubular motor with WiFi, Zigbee or KNX control, and is available in the full RAL palette plus wood-effect textures. Neofort BIZ supplies and installs exterior aluminium roller shutters in Bucharest and throughout Europe, with free consultancy and dimensioning calculation before order.',
      de:'Außenrollladen aus Aluminium stellen das effektivste aktive Sonnenschutzsystem für Fenster dar, das den Solargewinn in den Sommermonaten um bis zu 70% reduziert und die Innentemperatur deutlich niedriger hält, ohne das Klimaanlagensystem zusätzlich zu belasten. Stranggepresste Aluminiumlamellen mit Isolierung, erhältlich in Dicken von 7,5 mm bis 19,5 mm, bieten sowohl überlegene strukturelle Steifigkeit gegenüber Kunststofflamellen als auch zertifizierten Einbruchschutz bis RC3 in Versionen mit gesicherten Führungen — eine Leistung, die mit PVC- oder nicht isolierten Aluminiumrollläden unmöglich ist. Nachts vollständig heruntergelassen, fügt der Rollladen eine zusätzliche Dämmschicht von ΔU ≈ 0,3 W/m²K hinzu, was den Wärmeverlust durch das Fenster an Winternächten um bis zu 20% reduziert. Das System ist mit jedem bereits montierten PVC- oder Aluminiumfenster kompatibel, kann über einen Somfy-Rohrmotor mit WiFi-, Zigbee- oder KNX-Steuerung in die Hausautomation integriert werden und ist in der gesamten RAL-Palette plus Holzoptik erhältlich. Neofort BIZ liefert und montiert Außenrollladen aus Aluminium in Bukarest und ganz Europa mit kostenloser Beratung und Dimensionierungsberechnung vor der Bestellung.',
      fr:'Les volets roulants extérieurs en aluminium représentent le système de protection solaire active le plus efficace pour les fenêtres, réduisant les apports solaires durant les mois d\'été jusqu\'à 70% et maintenant la température intérieure significativement plus basse sans mettre de pression supplémentaire sur le système de climatisation. Les lames en aluminium extrudé isolé, disponibles en épaisseurs de 7,5 mm à 19,5 mm, offrent à la fois une rigidité structurelle supérieure aux lames en plastique et une résistance à l\'effraction certifiée jusqu\'à RC3 dans les versions avec guides sécurisés — performance impossible avec les volets en PVC ou en aluminium non isolé. Complètement baissé la nuit, le volet ajoute une couche d\'isolation supplémentaire de ΔU ≈ 0,3 W/m²K, réduisant les pertes de chaleur par la fenêtre jusqu\'à 20% les nuits d\'hiver. Le système est compatible avec toute fenêtre PVC ou aluminium déjà installée, peut être intégré dans la domotique via un moteur tubulaire Somfy à contrôle WiFi, Zigbee ou KNX, et est disponible dans toute la palette RAL plus des textures effet bois. Neofort BIZ fournit et installe des volets roulants extérieurs en aluminium à Bucarest et dans toute l\'Europe, avec consultation gratuite et calcul de dimensionnement avant commande.',
      es:'Las persianas exteriores de aluminio representan el sistema de protección solar activa más eficaz para ventanas, reduciendo la ganancia solar en los meses de verano hasta un 70% y manteniendo la temperatura interior significativamente más baja sin poner presión adicional en el sistema de aire acondicionado. Las lamas de aluminio extruido aislado, disponibles en grosores de 7,5 mm a 19,5 mm, proporcionan tanto una rigidez estructural superior a las lamas de plástico como una resistencia al robo certificada hasta RC3 en versiones con guías seguras — rendimiento imposible con persianas de PVC o de aluminio no aislado. Completamente bajada por la noche, la persiana añade una capa de aislamiento adicional de ΔU ≈ 0,3 W/m²K, reduciendo las pérdidas de calor a través de la ventana hasta un 20% en las noches de invierno. El sistema es compatible con cualquier ventana de PVC o aluminio ya instalada, puede integrarse en la domótica a través de un motor tubular Somfy con control WiFi, Zigbee o KNX, y está disponible en toda la paleta RAL más texturas efecto madera. Neofort BIZ suministra e instala persianas exteriores de aluminio en Bucarest y en toda Europa, con asesoría gratuita y cálculo de dimensionamiento antes del pedido.',
      it:'Le tapparelle esterne in alluminio rappresentano il sistema di protezione solare attiva più efficace per le finestre, riducendo il guadagno solare nei mesi estivi fino al 70% e mantenendo la temperatura interna significativamente più bassa senza mettere ulteriore pressione sul sistema di aria condizionata. Le lamelle in alluminio estruso isolato, disponibili in spessori da 7,5 mm a 19,5 mm, forniscono sia una rigidità strutturale superiore rispetto alle lamelle in plastica che una resistenza al furto certificata fino a RC3 nelle versioni con guide sicure — prestazioni impossibili con tapparelle in PVC o in alluminio non isolato. Completamente abbassata di notte, la tapparella aggiunge uno strato di isolamento aggiuntivo di ΔU ≈ 0,3 W/m²K, riducendo le perdite di calore attraverso la finestra fino al 20% nelle notti invernali. Il sistema è compatibile con qualsiasi finestra PVC o alluminio già installata, può essere integrata nella automatizare smart home tramite motore tubolare Somfy con controllo WiFi, Zigbee o KNX, ed è disponibile nell\'intera palette RAL più texture effetto legno. Neofort BIZ fornisce e installa tapparelle esterne in alluminio a Bucarest e in tutta Europa, con consulenza gratuita e calcolo del dimensionamento prima dell\'ordine.',
    },
  },

  'jaluzele-venetiene-raffstore': {
    img: '/accessories/jaluzele-raffstore.avif',
    color: '#e8721c',
    category: { ro:'Sisteme Umbrire', en:'Shading Systems', de:'Beschattungssysteme', fr:'Systèmes d\'occultation', es:'Sistemas de sombreado', it:'Sistemi di oscuramento' },
    serie: { ro:'Jaluzele Raffstore', en:'Raffstore Blinds', de:'Raffstore Jalousien', fr:'Stores Raffstore', es:'Persianas Raffstore', it:'Veneziane Raffstore' },
    breadcrumb_parent_href: '/umbrire',
    breadcrumb_parent: { ro:'Sisteme Umbrire', en:'Shading Systems', de:'Beschattung', fr:'Occultation', es:'Sombreado', it:'Oscuramento' },
    name: {
      ro:'Jaluzele Venețiene Exterioare Raffstore – Control Solar de Precizie 0°–90°',
      en:'Raffstore Exterior Venetian Blinds – Precision Solar Control 0°–90°',
      de:'Raffstore Außenjalousien – Präziser Sonnenschutz 0°–90°',
      fr:'Stores Vénitiens Extérieurs Raffstore – Contrôle Solaire de Précision 0°–90°',
      es:'Persianas Venecianas Exteriores Raffstore – Control Solar de Precisión 0°–90°',
      it:'Veneziane Esterne Raffstore – Controllo Solare di Precisione 0°–90°',
    },
    tagline: {
      ro:'Jaluzele exterioare cu lamele orientabile 0°–90° — control total al luminii naturale fără pierderea vederii exterioare. Reducere solară până la 85%, certificat EN 13561.',
      en:'Exterior blinds with 0°–90° tiltable slats — total natural light control without losing exterior view. Up to 85% solar reduction, EN 13561 certified.',
      de:'Außenjalousien mit 0°–90° schwenkbaren Lamellen — totale Lichtkontrolle ohne Verlust der Außenansicht. Bis 85% Solarreduktion, EN 13561 zertifiziert.',
      fr:'Stores extérieurs à lames orientables 0°–90° — contrôle total de la lumière naturelle sans perdre la vue extérieure. Réduction solaire jusqu\'à 85%, certifié EN 13561.',
      es:'Persianas exteriores con lamas orientables 0°–90° — control total de la luz natural sin perder la vista exterior. Reducción solar hasta 85%, certificado EN 13561.',
      it:'Veneziane esterne con lamelle orientabili 0°–90° — controllo totale della luce naturale senza perdere la vista esterna. Riduzione solare fino all\'85%, certificato EN 13561.',
    },
    specs: {
      ro:[['Material lamele','Aluminiu laminat'],['Lățime lamelă','80 mm standard'],['Orientare lamele','0° – 90° (electric sau manual)'],['Acționare','Motor tubular / Curea'],['Lățime maximă','5000 mm'],['Culori disponibile','> 200 culori RAL'],['Casetă','Aparentă sau încastrată'],['Automatizare','KNX, Zigbee, WiFi, Somfy'],['Standard european','EN 13561'],['Rezistență vânt','Clasa 5 · 1200 Pa'],],
      en:[['Slat material','Laminated aluminium'],['Slat width','80 mm standard'],['Slat tilt','0° – 90° (electric or manual)'],['Drive','Tubular motor / Belt'],['Maximum width','5000 mm'],['Colours','> 200 RAL colours'],['Box','Visible or recessed'],['Automation','KNX, Zigbee, WiFi, Somfy'],['European standard','EN 13561'],['Wind resistance','Class 5 · 1200 Pa'],],
      de:[['Lamellenmaterial','Laminiertes Aluminium'],['Lamellenbreite','80 mm Standard'],['Lamellenneigung','0° – 90° (elektrisch/manuell)'],['Antrieb','Rohrmotor / Gurt'],['Max. Breite','5000 mm'],['Farben','> 200 RAL-Farben'],['Kasten','Sichtbar oder eingelassen'],['Automatisierung','KNX, Zigbee, WiFi, Somfy'],['EU-Norm','EN 13561'],['Windlast','Klasse 5 · 1200 Pa'],],
      fr:[['Matériau lame','Aluminium laminé'],['Largeur lame','80 mm standard'],['Inclinaison','0° – 90° (électr./manuel)'],['Commande','Moteur tubulaire / Sangle'],['Largeur max.','5000 mm'],['Couleurs','> 200 RAL'],['Caisson','Apparent ou encastré'],['Automatisation','KNX, Zigbee, WiFi, Somfy'],['Norme','EN 13561'],['Résistance vent','Classe 5 · 1200 Pa'],],
      es:[['Material lama','Aluminio laminado'],['Ancho lama','80 mm estándar'],['Inclinación','0° – 90° (eléct./manual)'],['Accionamiento','Motor tubular / Correa'],['Ancho máx.','5000 mm'],['Colores','> 200 RAL'],['Cajón','Visto o empotrado'],['Automatización','KNX, Zigbee, WiFi, Somfy'],['Norma','EN 13561'],['Resistencia viento','Clase 5 · 1200 Pa'],],
      it:[['Materiale lamella','Alluminio laminato'],['Larghezza lamella','80 mm standard'],['Inclinazione','0° – 90° (elettrico/manuale)'],['Azionamento','Motore tubolare / Cinghia'],['Largh. max.','5000 mm'],['Colori','> 200 RAL'],['Cassonetto','A vista o incassato'],['Automazione','KNX, Zigbee, WiFi, Somfy'],['Norma','EN 13561'],['Resistenza vento','Classe 5 · 1200 Pa'],],
    },
    perf: {
      ro:[['Reducere aport solar','până la 85%'],['Control luminos','0 – 100% (orientare lamele)'],['Lumină difuză cu vedere păstrată','Da — la orice poziție intermediară'],['Rezistență vânt','Clasa 5 · 1200 Pa'],['Standard european','EN 13561'],['Compatibil automatizare smart home BMS','KNX, Zigbee, WiFi'],],
      en:[['Solar gain reduction','up to 85%'],['Light control','0 – 100% (slat orientation)'],['Diffuse light with view preserved','Yes — at any intermediate position'],['Wind resistance','Class 5 · 1200 Pa'],['European standard','EN 13561'],['BMS home automation','KNX, Zigbee, WiFi'],],
      de:[['Solargewinnreduktion','bis 85%'],['Lichtkontrolle','0 – 100% (Lamellenneigung)'],['Diffuslicht mit Sichterhalt','Ja — bei jeder Zwischenposition'],['Windlast','Klasse 5 · 1200 Pa'],['EU-Norm','EN 13561'],['BMS-Automatisierung','KNX, Zigbee, WiFi'],],
      fr:[['Réduction apports solaires','jusqu\'à 85%'],['Contrôle lumière','0 – 100% (orientation lames)'],['Lumière diffuse + vue préservée','Oui — à toute position interméd.'],['Résistance vent','Classe 5 · 1200 Pa'],['Norme','EN 13561'],['Automatisation BMS','KNX, Zigbee, WiFi'],],
      es:[['Reducción solar','hasta 85%'],['Control luz','0 – 100% (orientación lamas)'],['Luz difusa + vista preservada','Sí — en cualquier posición inter.'],['Resistencia viento','Clase 5 · 1200 Pa'],['Norma','EN 13561'],['Domótica BMS','KNX, Zigbee, WiFi'],],
      it:[['Riduzione solare','fino all\'85%'],['Controllo luce','0 – 100% (orientazione lamelle)'],['Luce diffusa + vista preservata','Sì — in qualsiasi posizione inter.'],['Resistenza vento','Classe 5 · 1200 Pa'],['Norma','EN 13561'],['Automazione BMS','KNX, Zigbee, WiFi'],],
    },
    advantages: {
      ro:['Control solar de precizie — lamele orientabile 0°–90° permit dozarea exactă a luminii naturale fără perdea sau stor opac, mențin vederea spre exterior','Reducere aport solar până la 85% — superior rulourilor opace la lumina directă, ideal pentru birouri și locuințe cu fațade suice sau vestice','Vedere păstrată la orice poziție — spre deosebire de rulouri, Raffstore permite exterior vizibil chiar cu jaluzeaua coborâtă complet','Rezistență vânt Clasa 5 · 1200 Pa — certificat EN 13561, cel mai înalt standard european pentru jaluzele exterioare','Compatibil cu automatizare smart home și BMS — KNX, Zigbee, WiFi, Somfy TaHoma, control de pe telefon sau integrat în sistemul clădirii','Lățime totală până la 5000 mm — o singură jaluzeală poate acoperi o fereastră mare sau o ușă culisantă în întregime'],
      en:['Precision solar control — 0°–90° tiltable slats allow exact dosing of natural light without curtain or opaque blind, exterior view maintained','Solar gain reduction up to 85% — superior to opaque shutters at direct sunlight, ideal for offices and homes with south or west facades','View preserved at any position — unlike shutters, Raffstore allows outside view even with blind fully lowered','Wind resistance Class 5 · 1200 Pa — EN 13561 certified, the highest European standard for exterior blinds','Compatible with home automation and BMS — KNX, Zigbee, WiFi, Somfy TaHoma, phone control or integrated into building system','Total width up to 5000 mm — one blind can cover a large window or sliding door entirely'],
      de:['Präziser Sonnenschutz — 0°–90° schwenkbare Lamellen ermöglichen exakte Dosierung des natürlichen Lichts ohne Vorhang, Außensicht erhalten','Solargewinnreduktion bis 85% — überlegen gegenüber opaken Rollläden bei direktem Sonnenlicht, ideal für Büros und Häuser mit Süd- oder Westfassaden','Außensicht bei jeder Position — anders als Rollläden erlaubt Raffstore Außensicht auch bei vollständig heruntergelassener Jalousie','Windlastwiderstand Klasse 5 · 1200 Pa — EN 13561 zertifiziert, höchster europäischer Standard für Außenjalousien','Kompatibel mit Smart Home und BMS — KNX, Zigbee, WiFi, Somfy TaHoma, Telefonsteuerung oder in Gebäudesystem integriert','Gesamtbreite bis 5000 mm — eine Jalousie kann ein großes Fenster oder eine Schiebetür vollständig abdecken'],
      fr:['Contrôle solaire de précision — lames orientables 0°–90° permettent un dosage exact de la lumière naturelle sans rideau, vue extérieure maintenue','Réduction des apports solaires jusqu\'à 85% — supérieur aux volets opaques, idéal pour bureaux et logements avec façades sud ou ouest','Vue préservée à toute position — contrairement aux volets, Raffstore permet de voir l\'extérieur même store complètement baissé','Résistance au vent Classe 5 · 1200 Pa — certifié EN 13561, la plus haute norme européenne pour stores extérieurs','Compatible domotique et BMS — KNX, Zigbee, WiFi, Somfy TaHoma, contrôle téléphone ou intégré au système du bâtiment','Largeur totale jusqu\'à 5000 mm — un seul store peut couvrir entièrement une grande fenêtre ou porte coulissante'],
      es:['Control solar de precisión — lamas orientables 0°–90° permiten la dosificación exacta de la luz natural sin cortina, vista exterior mantenida','Reducción ganancia solar hasta 85% — superior a las persianas opacas, ideal para oficinas y viviendas con fachadas sur u oeste','Vista preservada en cualquier posición — a diferencia de las persianas, Raffstore permite ver el exterior incluso con la persiana completamente bajada','Resistencia al viento Clase 5 · 1200 Pa — certificado EN 13561, el más alto estándar europeo para persianas exteriores','Compatible domótica y BMS — KNX, Zigbee, WiFi, Somfy TaHoma, control por teléfono o integrado en sistema del edificio','Ancho total hasta 5000 mm — una sola persiana puede cubrir completamente una ventana grande o puerta corredera'],
      it:['Controllo solare di precisione — lamelle orientabili 0°–90° consentono il dosaggio esatto della luce naturale senza tenda, vista esterna mantenuta','Riduzione guadagno solare fino all\'85% — superiore alle tapparelle opache, ideale per uffici e abitazioni con facciate sud o ovest','Vista preservata in qualsiasi posizione — a differenza delle tapparelle, Raffstore consente di vedere l\'esterno anche con la veneziana completamente abbassata','Resistenza al vento Classe 5 · 1200 Pa — certificato EN 13561, il più alto standard europeo per veneziane esterne','Compatibile automatizare smart home e BMS — KNX, Zigbee, WiFi, Somfy TaHoma, controllo telefono o integrato nel sistema edificio','Larghezza totale fino a 5000 mm — una sola veneziana può coprire completamente una grande finestra o porta scorrevole'],
    },
    seo_text: {
      ro:'Jaluzelele venețiene exterioare Raffstore reprezintă soluția optimă pentru controlul solar de precizie în clădirile cu fațade vitrare mari, permițând ajustarea independentă a poziției lamelelor (0°–90°) față de ridicarea/coborârea completă — capacitate imposibilă cu rulourile exterioare clasice. Lamelele cu curbură specială, orientabile electric sau manual de la orizontal (blocare maximă radiație solară) la vertical (vedere maximă și ventilație), permit utilizatorului să doze exact lumina naturală în funcție de ora zilei și orientarea solară, menținând în permanență contactul vizual cu exteriorul. Reducerea aportului solar de până la 85% — certificată conform EN 13561, cel mai înalt standard european — face din Raffstore soluția preferată pentru birouri, spații HoReCa premium și locuințe cu orientare sudică sau vestică unde supraîncălzirea vara este o problemă majoră. Rezistența la vânt de Clasa 5 · 1200 Pa garantează stabilitatea în condiții meteo severe, iar compatibilitatea cu KNX, Zigbee, WiFi și Somfy TaHoma permite integrarea completă în sistemele BMS și Smart Home. Neofort BIZ furnizează și montează jaluzele Raffstore în toate dimensiunile, cu motor tubular silent și consultanță gratuită privind dimensionarea și programarea automatizărilor.',
      en:'Raffstore exterior venetian blinds represent the optimal solution for precision solar control in buildings with large glazed facades, allowing independent adjustment of slat position (0°–90°) versus full raising/lowering — a capability impossible with classic exterior roller shutters. The specially curved slats, adjustable electrically or manually from horizontal (maximum solar radiation blocking) to vertical (maximum view and ventilation), allow the user to precisely dose natural light according to the time of day and solar orientation, while permanently maintaining visual contact with the exterior. Solar gain reduction of up to 85% — certified according to EN 13561, the highest European standard — makes Raffstore the preferred solution for offices, premium HoReCa spaces and homes with south or west orientation where summer overheating is a major problem. Wind resistance Class 5 · 1200 Pa guarantees stability in severe weather conditions, and compatibility with KNX, Zigbee, WiFi and Somfy TaHoma allows complete integration into BMS and Smart Home systems. Neofort BIZ supplies and installs Raffstore blinds in all sizes, with silent tubular motor and free consultancy on sizing and automation programming.',
      de:'Raffstore Außenjalousien sind die optimale Lösung für präzisen Sonnenschutz in Gebäuden mit großen Glasfassaden, da sie die unabhängige Einstellung der Lamellenposition (0°–90°) gegenüber vollständigem Hoch- und Herunterfahren ermöglichen — eine Fähigkeit, die mit klassischen Außenrollläden unmöglich ist. Die speziell gebogenen Lamellen, elektrisch oder manuell von horizontal (maximale Sonneneinstrahlung sperren) bis vertikal (maximale Sicht und Belüftung) einstellbar, ermöglichen dem Benutzer die präzise Dosierung des natürlichen Lichts je nach Tageszeit und Sonnenausrichtung, während der Sichtkontakt nach außen ständig erhalten bleibt. Solargewinnreduktion von bis zu 85% — zertifiziert nach EN 13561, dem höchsten europäischen Standard — macht Raffstore zur bevorzugten Lösung für Büros, Premium-HoReCa-Räume und Häuser mit Süd- oder Westausrichtung, wo sommerliche Überhitzung ein großes Problem darstellt. Windlastwiderstand Klasse 5 · 1200 Pa garantiert Stabilität bei starkem Wind, und die Kompatibilität mit KNX, Zigbee, WiFi und Somfy TaHoma ermöglicht die vollständige Integration in BMS- und Smart-Home-Systeme. Neofort BIZ liefert und montiert Raffstore-Jalousien in allen Größen mit leisem Rohrmotor und kostenloser Beratung zur Dimensionierung und Automatisierungsprogrammierung.',
      fr:'Les stores vénitiens extérieurs Raffstore représentent la solution optimale pour le contrôle solaire de précision dans les bâtiments à grandes façades vitrées, permettant le réglage indépendant de la position des lames (0°–90°) par rapport au levé/baissé complet — une capacité impossible avec les volets roulants extérieurs classiques. Les lames à courbure spéciale, réglables électriquement ou manuellement de horizontal (blocage maximal du rayonnement solaire) à vertical (vue et ventilation maximales), permettent à l\'utilisateur de doser précisément la lumière naturelle en fonction de l\'heure de la journée et de l\'orientation solaire, tout en maintenant en permanence le contact visuel avec l\'extérieur. La réduction des apports solaires jusqu\'à 85% — certifiée selon EN 13561, le plus haut standard européen — fait du Raffstore la solution préférée pour les bureaux, les espaces HoReCa premium et les logements orientés sud ou ouest où la surchauffe estivale est un problème majeur. La résistance au vent Classe 5 · 1200 Pa garantit la stabilité par temps sévère, et la compatibilité avec KNX, Zigbee, WiFi et Somfy TaHoma permet une intégration complète dans les systèmes BMS et domotique. Neofort BIZ fournit et installe des stores Raffstore dans toutes les dimensions avec moteur tubulaire silencieux et conseil gratuit sur le dimensionnement et la programmation des automatismes.',
      es:'Las persianas venecianas exteriores Raffstore representan la solución óptima para el control solar de precisión en edificios con grandes fachadas acristaladas, permitiendo el ajuste independiente de la posición de las lamas (0°–90°) frente a la subida/bajada completa — una capacidad imposible con las persianas exteriores clásicas. Las lamas de curvatura especial, ajustables eléctricamente o manualmente de horizontal (bloqueo máximo de radiación solar) a vertical (máxima visión y ventilación), permiten al usuario dosificar con precisión la luz natural según la hora del día y la orientación solar, manteniendo permanentemente el contacto visual con el exterior. La reducción de la ganancia solar de hasta el 85% — certificada según EN 13561, el más alto estándar europeo — convierte al Raffstore en la solución preferida para oficinas, espacios HoReCa premium y viviendas con orientación sur u oeste donde el sobrecalentamiento estival es un problema importante. La resistencia al viento Clase 5 · 1200 Pa garantiza la estabilidad en condiciones meteorológicas severas, y la compatibilidad con KNX, Zigbee, WiFi y Somfy TaHoma permite la integración completa en sistemas BMS y Smart Home. Neofort BIZ suministra e instala persianas Raffstore en todos los tamaños con motor tubular silencioso y asesoría gratuita sobre dimensionamiento y programación de automatizaciones.',
      it:'Le veneziane esterne Raffstore rappresentano la soluzione ottimale per il controllo solare di precisione negli edifici con grandi facciate vetrate, consentendo la regolazione indipendente della posizione delle lamelle (0°–90°) rispetto al sollevamento/abbassamento completo — una capacità impossibile con le classiche tapparelle esterne. Le lamelle a curvatura speciale, regolabili elettricamente o manualmente da orizzontale (blocco massimo della radiazione solare) a verticale (massima visione e ventilazione), consentono all\'utente di dosare con precisione la luce naturale in base all\'ora del giorno e all\'orientamento solare, mantenendo permanentemente il contatto visivo con l\'esterno. La riduzione del guadagno solare fino all\'85% — certificata secondo EN 13561, il più alto standard europeo — rende il Raffstore la soluzione preferita per uffici, spazi HoReCa premium e abitazioni con orientamento sud o ovest dove il surriscaldamento estivo è un problema importante. La resistenza al vento Classe 5 · 1200 Pa garantisce la stabilità in condizioni meteorologiche severe, e la compatibilità con KNX, Zigbee, WiFi e Somfy TaHoma consente l\'integrazione completa nei sistemi BMS e Smart Home. Neofort BIZ fornisce e installa veneziane Raffstore in tutte le dimensioni con motore tubolare silenzioso e consulenza gratuita sul dimensionamento e la programmazione delle automazioni.',
    },
  },

  'zipscreen': {
    img: '/accessories/zipscreen.avif',
    color: '#e8721c',
    breadcrumb_parent_href: '/umbrire',
    breadcrumb_parent: { ro:'Sisteme Umbrire', en:'Shading Systems', de:'Beschattung', fr:'Occultation', es:'Sombreado', it:'Oscuramento' },
    category: { ro:'Sisteme Umbrire', en:'Shading Systems', de:'Beschattungssysteme', fr:"Systèmes d'occultation", es:'Sistemas de sombreado', it:'Sistemi di oscuramento' },
    serie: { ro:'Zipscreen', en:'Zipscreen', de:'Zipscreen', fr:'Zipscreen', es:'Zipscreen', it:'Zipscreen' },
    name: {
      ro:'Zipscreen — Rulou Textil Exterior cu Fermoar ZIP pentru Terase și Fațade',
      en:'Zipscreen — Exterior ZIP Blind for Terraces and Facades',
      de:'Zipscreen — Außenrollo mit ZIP-Führung für Terrassen und Fassaden',
      fr:'Zipscreen — Store Extérieur à Glissière ZIP pour Terrasses et Façades',
      es:'Zipscreen — Toldo Exterior con Guía ZIP para Terrazas y Fachadas',
      it:'Zipscreen — Tenda Esterna con Guida ZIP per Terrazze e Facciate',
    },
    tagline: {
      ro:'Rulou textil exterior cu ghidaje ZIP — rezistență vânt Clasa 6, 88 km/h, materiale blackout sau screen, acționare Somfy. Suprafețe până la 16 m².',
      en:'Exterior textile blind with ZIP guides — wind resistance Class 6, 88 km/h, blackout or screen fabrics, Somfy drive. Areas up to 16 m².',
      de:'Textiles Außenrollo mit ZIP-Führungen — Windwiderstand Klasse 6, 88 km/h, Blackout oder Screen, Somfy-Antrieb. Flächen bis 16 m².',
      fr:"Store textile extérieur avec guides ZIP — résistance vent Classe 6, 88 km/h, tissus blackout ou screen, motorisation Somfy. Jusqu'à 16 m².",
      es:'Toldo textil exterior con guías ZIP — resistencia viento Clase 6, 88 km/h, tejidos blackout o screen, Somfy. Hasta 16 m².',
      it:'Tenda tessile esterna con guide ZIP — resistenza vento Classe 6, 88 km/h, tessuti blackout o screen, Somfy. Fino a 16 m².',
    },
    specs: {
      ro:[['Sistem ghidare','Fermoar ZIP aluminiu extrudat'],['Materiale','Blackout · Screen · Perforat'],['Acționare','Electrică Somfy · Manuală'],['Dimensiuni max','5.000 x 5.000 mm'],['Suprafață max','16 m² / unitate'],['Rezistență vânt','Clasa 6 · 88 km/h'],['Culori profil','RAL standard + orice RAL'],['Automatizare','Somfy TaHoma · WiFi · KNX']],
      en:[['Guide system','Extruded aluminium ZIP'],['Fabrics','Blackout · Screen · Perforated'],['Drive','Electric Somfy · Manual'],['Max dimensions','5,000 x 5,000 mm'],['Max area','16 m² / unit'],['Wind resistance','Class 6 · 88 km/h'],['Profile colours','Standard RAL + any RAL'],['Automation','Somfy TaHoma · WiFi · KNX']],
      de:[['Führungssystem','Aluminium-ZIP extrudiert'],['Gewebe','Blackout · Screen · Perforiert'],['Antrieb','Elektrisch Somfy · Manuell'],['Max. Abmessungen','5.000 x 5.000 mm'],['Max. Fläche','16 m² / Einheit'],['Windwiderstand','Klasse 6 · 88 km/h'],['Profilfarben','Standard-RAL + jede RAL'],['Automatisierung','Somfy TaHoma · WiFi · KNX']],
      fr:[['Système guidage','ZIP aluminium extrudé'],['Tissus','Blackout · Screen · Perforé'],['Commande','Électrique Somfy · Manuel'],['Dimensions max','5.000 x 5.000 mm'],['Surface max','16 m² / unité'],['Résistance vent','Classe 6 · 88 km/h'],['Couleurs profil','RAL standard + tout RAL'],['Automatisation','Somfy TaHoma · WiFi · KNX']],
      es:[['Sistema guía','ZIP aluminio extruido'],['Tejidos','Blackout · Screen · Perforado'],['Accionamiento','Eléctrico Somfy · Manual'],['Dimensiones máx','5.000 x 5.000 mm'],['Superficie máx','16 m² / unidad'],['Resistencia viento','Clase 6 · 88 km/h'],['Colores perfil','RAL estándar + cualquier RAL'],['Automatización','Somfy TaHoma · WiFi · KNX']],
      it:[['Sistema guida','ZIP alluminio estruso'],['Tessuti','Blackout · Screen · Perforato'],['Azionamento','Elettrico Somfy · Manuale'],['Dimensioni max','5.000 x 5.000 mm'],['Superficie max','16 m² / unità'],['Resistenza vento','Classe 6 · 88 km/h'],['Colori profilo','RAL standard + qualsiasi RAL'],['Automatizzazione','Somfy TaHoma · WiFi · KNX']],
    },
    perf: {
      ro:[['Blocare UV','98%'],['Reducere aport solar','95% blackout'],['Reducere temperatură','15–20°C'],['Rezistență vânt','Clasa 6 · 88 km/h'],['Durata material','15–20 ani'],['Garanție','5 ani']],
      en:[['UV blocking','98%'],['Solar gain reduction','95% blackout'],['Temp reduction','15–20°C'],['Wind resistance','Class 6 · 88 km/h'],['Fabric lifespan','15–20 years'],['Warranty','5 years']],
      de:[['UV-Blockierung','98%'],['Solargewinnreduktion','95% Blackout'],['Temperaturreduktion','15–20°C'],['Windwiderstand','Klasse 6 · 88 km/h'],['Lebensdauer','15–20 Jahre'],['Garantie','5 Jahre']],
      fr:[['Blocage UV','98%'],['Réduction solaire','95% blackout'],['Réduction temp.','15–20°C'],['Résistance vent','Classe 6 · 88 km/h'],['Durée tissu','15–20 ans'],['Garantie','5 ans']],
      es:[['Bloqueo UV','98%'],['Reducción solar','95% blackout'],['Reducción temp.','15–20°C'],['Resistencia viento','Clase 6 · 88 km/h'],['Vida tejido','15–20 años'],['Garantía','5 años']],
      it:[['Blocco UV','98%'],['Riduzione solare','95% blackout'],['Riduzione temp.','15–20°C'],['Resistenza vento','Classe 6 · 88 km/h'],['Durata tessuto','15–20 anni'],['Garanzia','5 anni']],
    },
    advantages: {
      ro:['Fermoar ZIP — material perfect tensionat indiferent de vânt, fără fluturare specifică rulourilor clasice','Blackout sau screen — opac pentru intimitate totală și temperaturi reduse cu 20°C, transparent cu filtrare UV 98%','Rezistență vânt Clasa 6 · 88 km/h — testat Beaufort, cel mai robust sistem textil de umbrire exterior','Suprafețe până la 16 m² per unitate — terase mari fără coloane intermediare','Automatizare Somfy — telecomandă, app, senzor solar și vânt, integrare KNX / smart home','Vopsire RAL completă — profil aluminiu în orice culoare RAL inclusiv imitație lemn'],
      en:['ZIP fastener — fabric perfectly tensioned regardless of wind, no flutter like classic shutters','Blackout or screen — opaque for total privacy and 20°C temperature reduction, transparent with 98% UV filtering','Wind resistance Class 6 · 88 km/h — Beaufort tested, most robust exterior textile shading system','Areas up to 16 m² per unit — large terraces without intermediate columns','Somfy automation — remote, app, solar and wind sensor, KNX / smart home integration','Full RAL coating — aluminium profile in any RAL colour including wood effect'],
      de:['ZIP-Reißverschluss — Gewebe windunabhängig gespannt, kein Flattern wie bei klassischen Rollläden','Blackout oder Screen — opak für totale Privatsphäre und 20°C Temperaturreduktion, transparent mit 98% UV-Filterung','Windwiderstand Klasse 6 · 88 km/h — Beaufort-geprüft, robustestes textiles Außenbeschattungssystem','Flächen bis 16 m² pro Einheit — große Terrassen ohne Zwischensäulen','Somfy-Automatisierung — Fernbedienung, App, Sonnen- und Windsensor, KNX / Smart Home','Vollständige RAL-Lackierung — Aluminiumprofil in jeder RAL-Farbe inkl. Holzoptik'],
      fr:["Fermeture ZIP — tissu parfaitement tendu quel que soit le vent, sans claquement des stores classiques","Blackout ou screen — opaque pour intimité totale et réduction de 20°C, transparent avec filtrage UV 98%","Résistance vent Classe 6 · 88 km/h — testé Beaufort, système d'occultation textile extérieure le plus robuste","Surfaces jusqu'à 16 m² par unité — grandes terrasses sans colonnes intermédiaires","Automatisation Somfy — télécommande, app, capteur solaire et vent, intégration KNX / maison intelligente","Laquage RAL complet — profilé aluminium en toute couleur RAL inclus imitation bois"],
      es:['Cierre ZIP — tejido perfectamente tensado con viento, sin aleteo de persianas clásicas','Blackout o screen — opaco para privacidad total y reducción de 20°C, transparente con filtrado UV 98%','Resistencia viento Clase 6 · 88 km/h — probado Beaufort, sistema textil de sombreado exterior más robusto','Superficies hasta 16 m² por unidad — terrazas grandes sin columnas intermedias','Automatización Somfy — mando, app, sensor solar y viento, integración KNX / domótica','Lacado RAL completo — perfil aluminio en cualquier color RAL incluso imitación madera'],
      it:['Cerniera ZIP — tessuto perfettamente teso con il vento, senza svolazzamento delle tende classiche','Blackout o screen — opaco per privacy totale e riduzione di 20°C, trasparente con filtraggio UV 98%','Resistenza vento Classe 6 · 88 km/h — testato Beaufort, sistema di oscuramento tessile esterno più robusto','Superfici fino a 16 m² per unità — terrazze grandi senza colonne intermedie','Automazione Somfy — telecomando, app, sensore solare e vento, integrazione KNX / smart home','Verniciatura RAL completa — profilo alluminio in qualsiasi colore RAL inclusa imitazione legno'],
    },
    seo_text: {
      ro:'Zipscreen este soluția de umbrire textilă exterioară cu cea mai bună rezistență la vânt din categoria sa. Sistemul de ghidare cu fermoar ZIP menține materialul perfect tensionat indiferent de intensitatea vântului, eliminând fluturarea specifică rulourilor clasice. Disponibil în variante blackout (opac, temperaturi reduse cu până la 20°C) și screen (transparent, filtrare UV 98%), Zipscreen se adaptează oricărei nevoi — de la intimitate totală la vizibilitate păstrată. Structura din aluminiu extrudat rezistă la vânt Clasa 6 (88 km/h conform Beaufort), acoperă suprafețe de până la 16 m² per unitate și se vopsește în orice culoare RAL. Acționarea electrică Somfy include senzor de vânt automat și integrare smart home KNX. Neofort BIZ furnizează și montează sisteme Zipscreen în București și toată Europa.',
      en:'Zipscreen is the exterior textile shading solution with the best wind resistance in its category. The ZIP guide system keeps the fabric perfectly tensioned regardless of wind intensity, eliminating flutter typical of classic shutters. Available in blackout (opaque, temperatures reduced by up to 20°C) and screen (transparent, 98% UV filtering) variants, Zipscreen adapts to any need. Extruded aluminium structure withstands Class 6 wind (88 km/h Beaufort), covers up to 16 m² per unit and is available in any RAL colour. Somfy electric drive includes automatic wind sensor and KNX smart home integration. Neofort BIZ supplies and installs Zipscreen systems in Bucharest and throughout Europe.',
      de:'Zipscreen ist die textile Außenbeschattungslösung mit der besten Windbeständigkeit seiner Kategorie. Das ZIP-Führungssystem hält das Gewebe windunabhängig gespannt und verhindert Flattern. Erhältlich in Blackout (opak, Temperaturen um bis zu 20°C reduziert) und Screen (transparent, 98% UV-Filterung). Aluminiumstruktur hält Windlast Klasse 6 (88 km/h), deckt bis 16 m² pro Einheit, jede RAL-Farbe verfügbar. Somfy-Antrieb mit automatischem Windsensor und KNX Smart Home. Neofort BIZ liefert und montiert Zipscreen in Bukarest und ganz Europa.',
      fr:"Zipscreen est la solution d'occultation textile extérieure avec la meilleure résistance au vent de sa catégorie. Le système de guidage ZIP maintient le tissu parfaitement tendu. Disponible en blackout (opaque, températures réduites de 20°C) et screen (transparent, filtrage UV 98%). Structure aluminium résistance vent Classe 6 (88 km/h), jusqu'à 16 m² par unité, toute couleur RAL. Motorisation Somfy avec capteur vent automatique et intégration KNX. Neofort BIZ fournit et installe Zipscreen à Bucarest et en Europe.",
      es:'Zipscreen es la solución de sombreado textil exterior con la mejor resistencia al viento de su categoría. El sistema de guía ZIP mantiene el tejido perfectamente tensado. Disponible en blackout (opaco, temperaturas reducidas 20°C) y screen (transparente, filtrado UV 98%). Estructura aluminio resistencia viento Clase 6 (88 km/h), hasta 16 m² por unidad, cualquier color RAL. Motorización Somfy con sensor de viento automático e integración KNX. Neofort BIZ suministra e instala Zipscreen en Bucarest y en Europa.',
      it:"Zipscreen è la soluzione di oscuramento tessile esterno con la migliore resistenza al vento della sua categoria. Il sistema di guida ZIP mantiene il tessuto perfettamente teso. Disponibile in blackout (opaco, temperature ridotte di 20°C) e screen (trasparente, filtraggio UV 98%). Struttura in alluminio resistenza vento Classe 6 (88 km/h), fino a 16 m² per unità, qualsiasi colore RAL. Motorizzazione Somfy con sensore vento automatico e integrazione KNX. Neofort BIZ fornisce e installa Zipscreen a Bucarest e in tutta Europa.",
    },
  },
};

const UI = {
  ro: { specs_title:'Specificații tehnice', perf_title:'Performanțe certificate', adv_title:'Avantaje principale', faq_title:'Întrebări frecvente', cta_h:'Solicitați ofertă pentru', cta_sub:'Consultanți disponibili Luni–Vineri, 10:00–18:00', cta_btn:'Cerere ofertă', cta_call:'Sună acum' },
  en: { specs_title:'Technical specifications', perf_title:'Certified performance', adv_title:'Key advantages', faq_title:'Frequently asked questions', cta_h:'Request quote for', cta_sub:'Consultants available Mon–Fri, 10:00–18:00', cta_btn:'Request quote', cta_call:'Call now' },
  de: { specs_title:'Technische Daten', perf_title:'Zertifizierte Leistungen', adv_title:'Hauptvorteile', faq_title:'Häufig gestellte Fragen', cta_h:'Angebot anfordern für', cta_sub:'Berater verfügbar Mo–Fr, 10:00–18:00', cta_btn:'Angebot anfordern', cta_call:'Jetzt anrufen' },
  fr: { specs_title:'Caractéristiques techniques', perf_title:'Performances certifiées', adv_title:'Avantages clés', faq_title:'Questions fréquentes', cta_h:'Demander un devis pour', cta_sub:'Conseillers disponibles Lun–Ven, 10h–18h', cta_btn:'Demander un devis', cta_call:'Appeler maintenant' },
  es: { specs_title:'Especificaciones técnicas', perf_title:'Rendimiento certificado', adv_title:'Ventajas clave', faq_title:'Preguntas frecuentes', cta_h:'Solicitar presupuesto para', cta_sub:'Consultores disponibles Lun–Vie, 10:00–18:00', cta_btn:'Pedir presupuesto', cta_call:'Llamar ahora' },
  it: { specs_title:'Specifiche tecniche', perf_title:'Prestazioni certificate', adv_title:'Vantaggi principali', faq_title:'Domande frequenti', cta_h:'Richiedi preventivo per', cta_sub:'Consulenti disponibili Lun–Ven, 10:00–18:00', cta_btn:'Richiedi preventivo', cta_call:'Chiama ora' },
};

export async function generateStaticParams() {
  const params = [];
  for (const locale of LOCALES)
    for (const [canonical, slugs] of Object.entries(SLUG_MAP))
      params.push({ locale, slug: slugs[locale] || canonical });
  return params;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const canonical = REVERSE[slug] || slug;
  const product   = PRODUCTS[canonical];
  if (!product) return { title: 'Produs · Neofort BIZ' };
  const name      = product.name[locale] || product.name.ro;
  const seoFull    = product.seo_text[locale] || product.seo_text.ro;
  const desc       = canonical === 'rulouri-exterioare-aluminiu'
    ? (locale === 'ro' ? 'Rulouri exterioare aluminiu cu motor Somfy — reducere 70% aport solar, izolare termică nocturnă, antiefracție RC3. Montaj București. Solicită ofertă gratuită.'
      : 'Aluminium roller shutters with Somfy motor — 70% solar gain reduction, night insulation, RC3 anti-burglary. Installation Bucharest. Request free quote.')
    : canonical === 'jaluzele-venetiene-raffstore'
    ? (locale === 'ro' ? 'Jaluzele Raffstore cu lamele orientabile 0°–90° — reducere solară 85%, rezistență vânt Clasa 5, automatizare Somfy. Montaj București și Europa. Ofertă gratuită.'
      : 'Raffstore blinds with 0°–90° tiltable slats — 85% solar reduction, Class 5 wind resistance, Somfy automation. Installation Bucharest and Europe.')
    : canonical === 'zipscreen'
    ? (locale === 'ro' ? 'Zipscreen rulou textil exterior ZIP — blackout sau screen, rezistență vânt Clasa 6 (88 km/h), suprafețe până la 16 m², motor Somfy. Montaj terase București.'
      : 'Zipscreen ZIP textile exterior blind — blackout or screen, Class 6 wind resistance (88 km/h), areas up to 16 m², Somfy motor. Terrace installation Bucharest.')
    : seoFull.slice(0, 160);
  const localSlug = SLUG_MAP[canonical]?.[locale] || slug;
  const altSlug   = (l) => SLUG_MAP[canonical]?.[l] || canonical;
  return {
    title: canonical === 'rulouri-exterioare-aluminiu'
             ? (locale === 'ro' ? 'Rulouri Exterioare Aluminiu Somfy — Prețuri, Sisteme, Montaj București | Neofort BIZ'
               : locale === 'en' ? 'Aluminium External Roller Shutters Somfy — Prices, Systems, Installation Bucharest | Neofort BIZ'
               : locale === 'de' ? 'Außenrollladen Aluminium Somfy — Preise, Systeme, Montage Bukarest | Neofort BIZ'
               : locale === 'fr' ? 'Volets Roulants Aluminium Somfy — Prix, Systèmes, Installation Bucarest | Neofort BIZ'
               : locale === 'es' ? 'Persianas Exteriores Aluminio Somfy — Precios, Sistemas, Instalación Bucarest | Neofort BIZ'
               : 'Tapparelle Esterne Alluminio Somfy — Prezzi, Sistemi, Installazione Bucarest | Neofort BIZ')
             : canonical === 'jaluzele-venetiene-raffstore'
             ? (locale === 'ro' ? 'Jaluzele Venețiene Raffstore — Prețuri, Sisteme, Montaj București | Neofort BIZ'
               : locale === 'en' ? 'Raffstore Venetian Blinds — Prices, Systems, Installation Bucharest | Neofort BIZ'
               : locale === 'de' ? 'Raffstore Außenjalousien — Preise, Systeme, Montage Bukarest | Neofort BIZ'
               : locale === 'fr' ? 'Stores Vénitiens Raffstore — Prix, Systèmes, Installation Bucarest | Neofort BIZ'
               : locale === 'es' ? 'Persianas Venecianas Raffstore — Precios, Sistemas, Instalación Bucarest | Neofort BIZ'
               : 'Veneziane Raffstore — Prezzi, Sistemi, Installazione Bucarest | Neofort BIZ')
             : canonical === 'zipscreen'
             ? (locale === 'ro' ? 'Zipscreen Terase — Rulou Textil ZIP, Blackout & Screen, Montaj București | Neofort BIZ'
               : locale === 'en' ? 'Zipscreen Terraces — ZIP Textile Blind, Blackout & Screen, Installation Bucharest | Neofort BIZ'
               : locale === 'de' ? 'Zipscreen Terrassen — ZIP-Rollo, Blackout & Screen, Montage Bukarest | Neofort BIZ'
               : locale === 'fr' ? 'Zipscreen Terrasses — Store ZIP, Blackout & Screen, Installation Bucarest | Neofort BIZ'
               : locale === 'es' ? 'Zipscreen Terrazas — Toldo ZIP, Blackout & Screen, Instalación Bucarest | Neofort BIZ'
               : 'Zipscreen Terrazze — Tenda ZIP, Blackout & Screen, Installazione Bucarest | Neofort BIZ')
             : `${name} · Neofort BIZ`,
    description: desc,
    keywords: canonical === 'rulouri-exterioare-aluminiu'
             ? (locale === 'ro' ? 'rulouri exterioare aluminiu, rulouri aluminiu pret, rulouri exterioare aluminiu bucuresti, rulouri aluminiu somfy, rulouri exterioare electric, rulouri aluminiu cu motor, protectie solara ferestre, umbrire ferestre bucuresti'
               : 'aluminium roller shutters, aluminium shutters price, roller shutters Bucharest, Somfy roller shutters, electric roller shutters')
             : canonical === 'jaluzele-venetiene-raffstore'
             ? (locale === 'ro' ? 'jaluzele venetiene raffstore, jaluzele raffstore pret, jaluzele exterioare aluminiu, jaluzele raffstore bucuresti, jaluzele venetiene exterioare somfy, protectie solara jaluzele, umbrire ferestre raffsore'
               : 'Raffstore blinds price, venetian blinds exterior, Raffstore Bucharest, exterior venetian blinds Somfy')
             : canonical === 'zipscreen'
             ? (locale === 'ro' ? 'zipscreen, zipscreen pret, zipscreen terasa, zipscreen bucuresti, rulou textil exterior zip, zipscreen blackout, zipscreen screen transparent, zipscreen somfy, zipscreen pergola, umbrire terasa zipscreen'
               : 'zipscreen price, zipscreen terrace, zipscreen Bucharest, zipscreen blackout, zipscreen screen')
             : `${name} Neofort BIZ București`,
    robots: { index:true, follow:true, googleBot:{ index:true, follow:true, 'max-image-preview':'large', 'max-snippet':-1 } },
    alternates: {
      canonical: `${BASE}/${locale}/umbrire/${localSlug}`,
      languages: Object.fromEntries([
        ...LOCALES.map(l => [l, `${BASE}/${l}/umbrire/${altSlug(l)}`]),
        ['x-default', `${BASE}/ro/umbrire/${altSlug('ro')}`],
      ]),
    },
    openGraph: {
      type:'website', url:`${BASE}/${locale}/umbrire/${localSlug}`,
      siteName:'Neofort BIZ', title:`${name} · Neofort BIZ`, description: desc,
      images:[{ url:`${BASE}${product.img}`, width:800, height:600, alt:name }],
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: `${name} · Neofort BIZ`, description: desc, images:[`${BASE}${product.img}`] },
    },
  }
}

export default async function UmbrireProductPage({ params }) {
  const { locale, slug } = await params;
  const canonical = REVERSE[slug] || slug;
  const product   = PRODUCTS[canonical];
  if (!product) notFound();

  const ui      = UI[locale]    || UI.ro;
  const name    = product.name[locale]       || product.name.ro;
  const tagline = product.tagline[locale]    || product.tagline.ro;
  const cat     = product.category[locale]   || product.category.ro;
  const serie   = product.serie[locale]      || product.serie.ro;
  const specs   = product.specs[locale]      || product.specs.ro;
  const perf    = product.perf[locale]       || product.perf.ro;
  const adv     = product.advantages[locale] || product.advantages.ro;
  const seotxt  = product.seo_text[locale]   || product.seo_text.ro;
  const bpLabel = product.breadcrumb_parent[locale] || product.breadcrumb_parent.ro;
  const c       = product.color;

  const FAQ_DATA = {
    'rulouri-exterioare-aluminiu': {
      ro:[
        ['Cât costă rulourile exterioare din aluminiu?','Prețul rulourilor exterioare din aluminiu pornește de la 85–120 EUR/mp pentru varianta manuală și ajunge la 150–220 EUR/mp pentru varianta cu motor Somfy, inclusiv montaj. Prețul final depinde de dimensiuni, culoare RAL și tipul de acționare.'],
        ['Care e diferența dintre rulouri aluminiu și rulouri PVC?','Rulourile din aluminiu au lamele extrudate mai rigide, rezistență mai bună la vânt (până la 600 Pa), durabilitate 25–30 ani și pot atinge antiefracție RC3. Rulourile PVC sunt mai ieftine dar se deformează la căldură și au durată de viață mai scurtă.'],
        ['Se poate monta ruloul exterior pe o fereastră deja instalată?','Da, rulourile exterioare se pot monta aplicat (pe tocul ferestrei sau pe perete) fără a demonta tâmplăria existentă. Sistemul aplicat se potrivește pe orice fereastră PVC sau aluminiu deja montată.'],
        ['Motorului Somfy merită față de acționarea manuală?','Da — motorul Somfy adaugă senzor de vânt (protejează ruloul automat), senzor solar (coboară automat la soare puternic) și control prin aplicație mobilă. Diferența de preț este de 80–150 EUR per rulou.'],
      ],
      en:[
        ['How much do aluminium roller shutters cost?','Aluminium roller shutters start from 85–120 EUR/m² for manual and 150–220 EUR/m² for Somfy motor version, including installation. Final price depends on dimensions, RAL colour and drive type.'],
        ['What is the difference between aluminium and PVC shutters?','Aluminium shutters have more rigid extruded slats, better wind resistance (up to 600 Pa), 25–30 year lifespan and can achieve RC3 burglar resistance. PVC shutters are cheaper but deform in heat and have shorter lifespan.'],
        ['Can roller shutters be fitted to an already installed window?','Yes, roller shutters can be surface-mounted (on the frame or wall) without removing existing joinery. The surface system fits any PVC or aluminium window already installed.'],
        ['Is Somfy motor worth it vs manual operation?','Yes — Somfy motor adds wind sensor (auto-protects shutter), solar sensor (auto-lowers in strong sun) and mobile app control. Price difference is 80–150 EUR per shutter.'],
      ],
    },
    'jaluzele-venetiene-raffstore': {
      ro:[
        ['Cât costă jaluzelele Raffstore?','Prețul jaluzelelor Raffstore pornește de la 150–200 EUR/mp pentru varianta electrică standard, ajungând la 250–400 EUR/mp pentru sisteme cu automatizare KNX sau integrate în smart home. Prețul include livrare și montaj.'],
        ['Care e diferența dintre Raffstore și rulourile exterioare?','Raffstore are lamele orientabile 0°–90° — poți doza exact lumina fără să pierzi vederea spre exterior. Rulourile blochează total lumina când sunt coborâte. Raffstore reduce aportul solar cu până la 85%, superior rulourilor opace la lumina directă.'],
        ['Jaluzelele Raffstore rezistă la vânt?','Da — Raffstore este certificat EN 13561 Clasa 5, rezistând la presiuni de 1200 Pa. Motorul Somfy cu senzor de vânt ridică automat jaluzeaua la viteze periculoase, protejând lamelele de deformare.'],
        ['Se pot monta Raffstore pe orice fereastră?','Raffstore se montează pe ferestre PVC, aluminiu sau lemn, atât în ghidaje laterale (variantă standard) cât și cu sistem de cabluri pentru fațade mari. Lățimea maximă per unitate este de 5000 mm.'],
      ],
      en:[
        ['How much do Raffstore blinds cost?','Raffstore blinds start from 150–200 EUR/m² for standard electric version, up to 250–400 EUR/m² for KNX automation or smart home integration. Price includes delivery and installation.'],
        ['What is the difference between Raffstore and roller shutters?','Raffstore has 0°–90° tiltable slats — you can dose light precisely without losing the exterior view. Shutters block all light when lowered. Raffstore reduces solar gain up to 85%, superior to opaque shutters at direct sunlight.'],
        ['Are Raffstore blinds wind resistant?','Yes — Raffstore is EN 13561 Class 5 certified, withstanding 1200 Pa pressure. Somfy wind sensor motor automatically raises the blind at dangerous speeds, protecting slats from deformation.'],
        ['Can Raffstore be installed on any window?','Raffstore fits PVC, aluminium or wood windows, in lateral guides (standard) or cable system for large facades. Maximum width per unit is 5000 mm.'],
      ],
    },
    'zipscreen': {
      ro:[
        ['Cât costă un Zipscreen?','Prețul unui Zipscreen pornește de la 225–300 EUR/mp pentru varianta manuală și ajunge la 350–450 EUR/mp pentru varianta cu motor Somfy, inclusiv montaj. O unitate standard de 3×2,5 m cu motor costă 900–1.200 EUR.'],
        ['Care e diferența dintre Zipscreen blackout și screen?','Blackout blochează 100% lumina directă și reduce temperatura cu 15–20°C — ideal pentru intimitate totală. Screen are microperforații (3–10% deschidere vizuală), filtrează 95–98% UV dar păstrează vederea spre exterior — ideal pentru terase unde vrei umbra fără izolare.'],
        ['Zipscreen rezistă la vânt mai bine decât un rulou clasic?','Da. Fermoarul ZIP menține materialul tensionat în ghidajele din aluminiu indiferent de vânt — sistemul este testat Clasa 6 Beaufort, până la 88 km/h. Rulourile clasice fluturează și ies din ghidaje la vânt puternic.'],
        ['Zipscreen se poate monta și pe pergolă?','Da, aceasta este cea mai frecventă aplicație. Zipscreen se montează pe laturile pergolei retractabile pentru a o transforma într-un spațiu complet protejat. O singură unitate acoperă până la 16 m², fără coloană intermediară.'],
      ],
      en:[
        ['How much does a Zipscreen cost?','Zipscreen starts from 225–300 EUR/m² for manual and 350–450 EUR/m² for Somfy motor version, including installation. A standard 3×2.5m unit with motor costs 900–1,200 EUR.'],
        ['What is the difference between Zipscreen blackout and screen?','Blackout blocks 100% direct light and reduces temperature by 15–20°C — ideal for total privacy. Screen has microperforations (3–10% visual openness), filters 95–98% UV while maintaining exterior view — ideal for terraces wanting shade without isolation.'],
        ['Does Zipscreen resist wind better than a classic roller?','Yes. The ZIP fastener keeps fabric tensioned in aluminium guides regardless of wind — system tested Class 6 Beaufort, up to 88 km/h. Classic rollers flutter and exit guides in strong wind.'],
        ['Can Zipscreen be installed on a pergola?','Yes, this is the most common application. Zipscreen mounts on the sides of a retractable pergola to transform it into a fully protected space. One unit covers up to 16 m² without an intermediate column.'],
      ],
    },
  };

  const faqItems = FAQ_DATA[canonical]?.[locale] || FAQ_DATA[canonical]?.ro || [];
  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map(([q, a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a },
    })),
  } : null;

  const schema = {
    '@context':'https://schema.org', '@type':'Product',
    name, description: seotxt, image: `${BASE}${product.img}`,
    brand: { '@type':'Brand', name:'Neofort BIZ' },
    seller: { '@type':'Organization', name:'Neofort BIZ SRL', url:BASE },
    offers: { '@type':'Offer', availability:'https://schema.org/InStock', priceCurrency:'RON', seller:{'@type':'Organization',name:'Neofort BIZ'} },
    additionalProperty: specs.map(([n,v]) => ({ '@type':'PropertyValue', name:n, value:v })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org',
        '@type':'BreadcrumbList',
        'itemListElement':[
          {'@type':'ListItem','position':1,'name':'Neofort BIZ','item':BASE},
          {'@type':'ListItem','position':2,'name':bpLabel,'item':`${BASE}/${locale}/umbrire`},
          {'@type':'ListItem','position':3,'name':name,'item':`${BASE}/${locale}/${SLUG_MAP[canonical]?.[locale] || canonical}`},
        ]
      })}}/>
      <style>{`
        .prd-bc{font-size:.65rem;letter-spacing:.12em;text-transform:uppercase;color:#999;display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:24px}
        .prd-bc a{color:#999;text-decoration:none}.prd-bc a:hover{color:#1a1a1a}.prd-bc span{color:#ccc}
        .prd-hero{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
        .prd-img-wrap{position:relative;background:#f8f8f6;border:1px solid #e8e8e4;display:flex;align-items:center;justify-content:center;padding:32px;min-height:320px}
        .prd-img{max-width:100%;max-height:340px;width:auto;height:auto;object-fit:contain;display:block}
        .prd-badge{position:absolute;top:12px;left:12px;font-family:'Barlow Condensed',sans-serif;font-size:.52rem;letter-spacing:.2em;text-transform:uppercase;font-weight:700;padding:4px 10px}
        .prd-cat{font-family:'Barlow Condensed',sans-serif;font-size:.57rem;letter-spacing:.2em;text-transform:uppercase;font-weight:600;margin-bottom:10px}
        .prd-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:clamp(1.4rem,3vw,2rem);color:#1a1a1a;line-height:1.15;margin:0 0 14px}
        .prd-tagline{font-size:.88rem;color:#555;line-height:1.6;margin:0 0 28px;border-left:3px solid;padding-left:14px}
        .prd-sec{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.6rem;letter-spacing:.22em;text-transform:uppercase;color:#999;margin:0 0 12px}
        .prd-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#e8e8e4;border:1px solid #e8e8e4;margin-bottom:28px}
        .prd-row{background:#fff;display:flex;justify-content:space-between;gap:8px;padding:7px 10px;font-size:.73rem}
        .prd-row strong{color:#1a1a1a;font-weight:600;flex-shrink:0}.prd-row span{color:#555;text-align:right}
        .prd-perf{width:100%;border-collapse:collapse;margin-bottom:28px;font-size:.73rem}
        .prd-perf tr{border-bottom:1px solid #f0f0ee}.prd-perf td{padding:6px 8px}
        .prd-perf td:first-child{color:#767676;width:55%}.prd-perf td:last-child{font-weight:700;color:#1a1a1a;text-align:right}
        .prd-adv{list-style:none;padding:0;margin:0 0 28px}
        .prd-adv li{font-size:.8rem;color:#444;padding:8px 0 8px 20px;border-bottom:1px solid #f5f5f3;position:relative;line-height:1.5}
        .prd-adv li:last-child{border-bottom:none}
        .prd-cta-box{background:#111;padding:24px;position:sticky;top:100px}
        .prd-cta-hl{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:#666;margin-bottom:8px}
        .prd-cta-nm{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.05rem;color:#fff;margin-bottom:16px;line-height:1.2}
        .prd-cta-sub{font-size:.68rem;color:#555;margin-bottom:20px}
        .prd-cta-a{display:block;width:100%;padding:12px;text-align:center;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;margin-bottom:10px;transition:all .18s}
        .prd-cta-pri{color:#111;background:#fff}.prd-cta-pri:hover{background:#f0f0f0}
        .prd-cta-sec{color:#fff;border:1px solid #333}.prd-cta-sec:hover{border-color:#666}
        .prd-seo{font-size:.82rem;color:#767676;line-height:1.8;padding:32px 0;border-top:1px solid #e8e8e4;margin-top:8px}
        .prd-lower{display:grid;grid-template-columns:1fr 260px;gap:48px;align-items:start;margin-top:48px}
        .prd-mob{display:none;position:fixed;bottom:0;left:0;right:0;background:#111;padding:12px 16px;z-index:100;gap:10px;border-top:1px solid #222}
        .prd-mob a{flex:1;padding:11px 8px;text-align:center;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;transition:all .18s}
        .prd-mob-pri{background:#fff;color:#111}.prd-mob-sec{border:1px solid #333;color:#fff}
        @media(max-width:900px){.prd-hero{grid-template-columns:1fr;gap:24px}.prd-lower{grid-template-columns:1fr}.prd-cta-box{display:none}.prd-grid{grid-template-columns:1fr}.prd-mob{display:flex}body{padding-bottom:70px}}
        @media(max-width:600px){.prd-title{font-size:1.4rem}.prd-img-wrap{min-height:220px;padding:16px}}
      `}</style>

      <div className="prd-mob">
        <Link href="/contact" className="prd-mob-pri">{ui.cta_btn}</Link>
        <a href="tel:+40752443435" className="prd-mob-sec">{ui.cta_call}</a>
      </div>

      <div className="container mx-auto px-6" style={{paddingTop:'40px',paddingBottom:'80px'}}>
        <nav className="prd-bc" aria-label="breadcrumb">
          <Link href="/">Neofort BIZ</Link>
          <span>·</span>
          <Link href={product.breadcrumb_parent_href}>{bpLabel}</Link>
          <span>·</span>
          <span style={{color:'#1a1a1a'}}>{serie}</span>
        </nav>

        <div className="prd-hero">
          <div className="prd-img-wrap">
            <img src={product.img} alt={name} className="prd-img" loading="eager"/>
            <span className="prd-badge" style={{color:c,background:`${c}18`,border:`1px solid ${c}30`}}>{serie}</span>
          </div>
          <div>
            <p className="prd-cat" style={{color:c}}>{cat}</p>
            <h1 className="prd-title">{name}</h1>
            <p className="prd-tagline" style={{borderColor:c}}>{tagline}</p>
            <p className="prd-sec">{ui.specs_title}</p>
            <div className="prd-grid">
              {specs.map(([k,v]) => (
                <div key={k} className="prd-row"><strong>{k}</strong><span>{v}</span></div>
              ))}
            </div>
          </div>
        </div>

        <div className="prd-lower">
          <div>
            <p className="prd-sec" style={{marginTop:0}}>{ui.perf_title}</p>
            <table className="prd-perf">
              <tbody>
                {perf.map(([k,v]) => (
                  <tr key={k}><td>{k}</td><td style={{color:c}}>{v}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="prd-sec">{ui.adv_title}</p>
            <ul className="prd-adv">
              {adv.map((a,i) => (
                <li key={i}>
                  <span style={{position:'absolute',left:0,top:'14px',width:'8px',height:'2px',background:c,display:'block'}}/>
                  {a}
                </li>
              ))}
            </ul>
            <div className="prd-seo"><p>{seotxt}</p></div>
          </div>
          <div className="prd-cta-box">
            <p className="prd-cta-hl">{ui.cta_h}</p>
            <p className="prd-cta-nm">{name}</p>
            <p className="prd-cta-sub">{ui.cta_sub}</p>
            <Link href="/contact" className="prd-cta-a prd-cta-pri">{ui.cta_btn}</Link>
            <a href="tel:+40752443435" className="prd-cta-a prd-cta-sec">{ui.cta_call} +40 752 443 435</a>
          </div>
        </div>
      </div>
    </>
  );
}
