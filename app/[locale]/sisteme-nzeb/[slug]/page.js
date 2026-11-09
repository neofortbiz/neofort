import { notFound } from 'next/navigation';
import { Link } from '../../../../i18n/navigation';
import FaqAccordion from '../../../../components/FaqAccordion';

import { BASE, LOCALES } from '../../../../lib/constants.js';
import { PRODUCT_META, PRODUCT_BRAND } from '../../../../data/productMeta.js';
import { PRODUCT_FAQ } from '../../../../data/productFaq.js';
const NZEB_SEG = {ro:'sisteme-nzeb',en:'nzeb-systems',de:'nzeb-systeme',fr:'systemes-nzeb',es:'sistemas-nzeb',it:'sistemi-nzeb'};

const SLUG_MAP = {
  'precadre-blaugelb-triotherm': {
    ro:'precadre-blaugelb-triotherm-plus',       en:'blaugelb-triotherm-plus-precasings',
    de:'blaugelb-triotherm-plus-vorfenster',      fr:'precadres-blaugelb-triotherm-plus',
    es:'premarcos-blaugelb-triotherm-plus',       it:'pre-telai-blaugelb-triotherm-plus',
  },
  'banda-precomprimata-butil': {
    ro:'banda-precomprimata-butilic',             en:'pre-compressed-butyl-sealing-tape',
    de:'vorkomprimiertes-butyl-dichtband',        fr:'bande-precomprimee-butyle',
    es:'cinta-precomprimida-butilica',            it:'nastro-precompresso-butilico',
  },
  'banda-etansare-antivapori': {
    ro:'banda-etansare-antivapori-interior',      en:'interior-vapour-barrier-sealing-tape',
    de:'innen-dampfsperrband',                    fr:'ruban-etancheite-pare-vapeur-interieur',
    es:'banda-sellado-barrera-vapor-interior',    it:'nastro-tenuta-barriera-vapore-interno',
  },
  'bagheta-warm-edge-thermo': {
    ro:'bagheta-warm-edge-distantier-termic',     en:'warm-edge-thermo-spacer-insulating-glass',
    de:'warm-edge-thermo-abstandhalter-isolierglas', fr:'espaceur-warm-edge-thermo-vitrage',
    es:'separador-warm-edge-thermo-vidrio-aislante', it:'distanziale-warm-edge-thermo-vetro-isolante',
  },
  'geamuri-termopan-saint-gobain': {
    ro:'geamuri-termopan-saint-gobain-sgg',       en:'saint-gobain-sgg-thermal-insulating-glass',
    de:'saint-gobain-sgg-waermeschutzisolierglas', fr:'vitrage-isolant-saint-gobain-sgg',
    es:'vidrio-aislante-saint-gobain-sgg',        it:'vetro-termoisolante-saint-gobain-sgg',
  },
};

const REVERSE = {};
for (const [c, slugs] of Object.entries(SLUG_MAP))
  for (const s of Object.values(slugs)) REVERSE[s] = c;

const PRODUCTS = {

  'precadre-blaugelb-triotherm': {
    img: '/accessories/precadre-blaugelb.avif',
    color: '#2b4834',
    category: { ro:'Sisteme nZEB', en:'nZEB Systems', de:'nZEB-Systeme', fr:'Systèmes nZEB', es:'Sistemas nZEB', it:'Sistemi nZEB' },
    serie: { ro:'Izolare Perimetrală', en:'Perimeter Insulation', de:'Perimeterdämmung', fr:'Isolation Périmétrique', es:'Aislamiento Perimetral', it:'Isolamento Perimetrale' },
    breadcrumb_parent_href: '/sisteme-nzeb',
    breadcrumb_parent: { ro:'Sisteme nZEB', en:'nZEB Systems', de:'nZEB-Systeme', fr:'Systèmes nZEB', es:'Sistemas nZEB', it:'Sistemi nZEB' },
    name: {
      ro:'Precadre Blaugelb Triotherm+ – Montaj Termic în Planul Izolației',
      en:'Blaugelb Triotherm+ Precasings – Thermal Installation in the Insulation Layer',
      de:'Blaugelb Triotherm+ Vorblendrahmen – Vorwandmontage in der Dämmebene',
      fr:'Précadres Blaugelb Triotherm+ – Pose Thermique dans le Plan de l’Isolant',
      es:'Premarcos Blaugelb Triotherm+ – Montaje Térmico en el Plano del Aislamiento',
      it:'Controtelai Blaugelb Triotherm+ – Posa Termica nel Piano dell’Isolamento',
    },
    tagline: {
      ro:'Profile din EPS de înaltă densitate care aduc fereastra în stratul de izolație al fațadei și reduc puntea termică de montaj. Sistem certificat de Passive House Institute.',
      en:'High-density EPS profiles that bring the window into the facade insulation layer and reduce the installation thermal bridge. System certified by the Passive House Institute.',
      de:'Profile aus hochdichtem EPS, die das Fenster in die Dämmebene der Fassade bringen und die Montage-Wärmebrücke verringern. Vom Passivhaus Institut zertifiziertes System.',
      fr:'Profilés en EPS haute densité qui placent la fenêtre dans la couche isolante de la façade et réduisent le pont thermique de pose. Système certifié par le Passive House Institute.',
      es:'Perfiles de EPS de alta densidad que llevan la ventana a la capa de aislamiento de la fachada y reducen el puente térmico de montaje. Sistema certificado por el Passive House Institute.',
      it:'Profili in EPS ad alta densità che portano la finestra nello strato isolante della facciata e riducono il ponte termico di posa. Sistema certificato dal Passive House Institute.',
    },
    specs: {
      ro:[['Material','EPS de înaltă densitate, gri'],['Conductivitate termică λD','0,040 W/mK (EN 12667)'],['Lățimi profil','70 / 100 / 120 / 160 mm'],['Secțiune și lungime','înălțime 85 mm, bare de 1175 mm'],['Preluare sarcină','peste 200 kg'],['Rezistență la compresiune (10%)','≥ 2.500 kPa'],['Absorbție de apă (28 de zile)','≤ 1,5% vol.'],['Reacție la foc','clasa E (EN 13501-1)'],['Fixare','lipit și fixat mecanic pe zidărie, îmbinare în coadă de rândunică'],['Reciclabilitate','100%, fără HCFC, HFC, HBCD']],
      en:[['Material','High-density EPS, grey'],['Thermal conductivity λD','0.040 W/mK (EN 12667)'],['Profile widths','70 / 100 / 120 / 160 mm'],['Section and length','85 mm high, 1175 mm bars'],['Load transfer','over 200 kg'],['Compressive stress (10%)','≥ 2,500 kPa'],['Water absorption (28 days)','≤ 1.5% vol.'],['Reaction to fire','class E (EN 13501-1)'],['Fixing','bonded and mechanically fixed to the masonry, dovetail joints'],['Recyclability','100%, free of HCFC, HFC, HBCD']],
      de:[['Material','Hochdichtes EPS, grau'],['Wärmeleitfähigkeit λD','0,040 W/mK (EN 12667)'],['Profilbreiten','70 / 100 / 120 / 160 mm'],['Querschnitt und Länge','85 mm hoch, Stäbe zu 1175 mm'],['Lastabtragung','über 200 kg'],['Druckspannung (10 %)','≥ 2.500 kPa'],['Wasseraufnahme (28 Tage)','≤ 1,5 Vol.-%'],['Brandverhalten','Klasse E (EN 13501-1)'],['Befestigung','verklebt und mechanisch am Mauerwerk befestigt, Schwalbenschwanzverbindung'],['Recycelbarkeit','100 %, frei von HFCKW, HFKW, HBCD']],
      fr:[['Matériau','EPS haute densité, gris'],['Conductivité thermique λD','0,040 W/mK (EN 12667)'],['Largeurs de profilé','70 / 100 / 120 / 160 mm'],['Section et longueur','85 mm de haut, barres de 1175 mm'],['Reprise de charge','plus de 200 kg'],['Contrainte en compression (10 %)','≥ 2 500 kPa'],['Absorption d’eau (28 jours)','≤ 1,5 % vol.'],['Réaction au feu','classe E (EN 13501-1)'],['Fixation','collé et fixé mécaniquement sur la maçonnerie, assemblage en queue d’aronde'],['Recyclabilité','100 %, sans HCFC, HFC, HBCD']],
      es:[['Material','EPS de alta densidad, gris'],['Conductividad térmica λD','0,040 W/mK (EN 12667)'],['Anchos de perfil','70 / 100 / 120 / 160 mm'],['Sección y longitud','85 mm de alto, barras de 1175 mm'],['Transmisión de carga','más de 200 kg'],['Tensión de compresión (10 %)','≥ 2.500 kPa'],['Absorción de agua (28 días)','≤ 1,5 % vol.'],['Reacción al fuego','clase E (EN 13501-1)'],['Fijación','pegado y fijado mecánicamente a la fábrica, unión en cola de milano'],['Reciclabilidad','100 %, sin HCFC, HFC, HBCD']],
      it:[['Materiale','EPS ad alta densità, grigio'],['Conducibilità termica λD','0,040 W/mK (EN 12667)'],['Larghezze profilo','70 / 100 / 120 / 160 mm'],['Sezione e lunghezza','altezza 85 mm, barre da 1175 mm'],['Trasmissione del carico','oltre 200 kg'],['Resistenza a compressione (10%)','≥ 2.500 kPa'],['Assorbimento d’acqua (28 giorni)','≤ 1,5% vol.'],['Reazione al fuoco','classe E (EN 13501-1)'],['Fissaggio','incollato e fissato meccanicamente alla muratura, giunzione a coda di rondine'],['Riciclabilità','100%, senza HCFC, HFC, HBCD']],
    },
    perf: {
      ro:[['Certificare','Passive House Institute, sistem de montaj (2017)'],['Conductivitate efectivă a sistemului','0,042 W/mK, cu pierderile prin șuruburi'],['Etanșare','benzi pe 3 niveluri, conform Ghidului RAL'],['Stabilitate dimensională','foarte ridicată, inclusiv la intemperii'],['Fixarea ferestrei','reversibilă, fără pregăurire']],
      en:[['Certification','Passive House Institute, mounting system (2017)'],['Effective system conductivity','0.042 W/mK, including screw losses'],['Sealing','three-level tapes, per the RAL guideline'],['Dimensional stability','very high, including outdoor weathering'],['Window fixing','reversible, no pre-drilling']],
      de:[['Zertifizierung','Passivhaus Institut, Montagesystem (2017)'],['Effektive Wärmeleitfähigkeit des Systems','0,042 W/mK, inkl. Schraubenverluste'],['Abdichtung','Bänder in 3 Ebenen nach RAL-Leitfaden'],['Dimensionsstabilität','sehr hoch, auch bei Bewitterung'],['Fensterbefestigung','reversibel, ohne Vorbohren']],
      fr:[['Certification','Passive House Institute, système de pose (2017)'],['Conductivité effective du système','0,042 W/mK, pertes des vis incluses'],['Étanchéité','bandes sur 3 niveaux, selon le guide RAL'],['Stabilité dimensionnelle','très élevée, y compris aux intempéries'],['Fixation de la fenêtre','réversible, sans pré-perçage']],
      es:[['Certificación','Passive House Institute, sistema de montaje (2017)'],['Conductividad efectiva del sistema','0,042 W/mK, con las pérdidas de los tornillos'],['Sellado','cintas en 3 niveles, según la guía RAL'],['Estabilidad dimensional','muy alta, también a la intemperie'],['Fijación de la ventana','reversible, sin pretaladrar']],
      it:[['Certificazione','Passive House Institute, sistema di posa (2017)'],['Conducibilità effettiva del sistema','0,042 W/mK, perdite delle viti incluse'],['Tenuta','nastri su 3 livelli, secondo la guida RAL'],['Stabilità dimensionale','molto alta, anche alle intemperie'],['Fissaggio della finestra','reversibile, senza preforatura']],
    },
    advantages: {
      ro:['Fereastra se montează în stratul de izolație al fațadei: rama iese din zona rece a zidului, iar puntea termică de la rost scade mult față de montajul în golul de zidărie','Sistem certificat de Passive House Institute, cu o conductivitate efectivă de 0,042 W/mK în care sunt incluse și pierderile prin șuruburi','Poartă greutatea ferestrei: preia peste 200 kg și rezistă la compresiune de minimum 2.500 kPa, fără console metalice care să facă punte termică','Oferă o suprafață plană și stabilă pentru benzi, așa că etanșarea pe 3 niveluri (bandă exterioară, spumă, barieră de vapori interioară) se face corect','Nu se degradează la umezeală: absoarbe sub 1,5% apă în 28 de zile, nu mucegăiește și nu putrezește','Se folosește la ferestre din PVC, aluminiu și lemn; profilele se îmbină în coadă de rândunică pe orice lungime, iar fereastra se poate demonta la renovare'],
      en:['The window is fitted in the facade insulation layer: the frame leaves the cold zone of the wall and the joint thermal bridge drops sharply compared with fitting inside the masonry opening','System certified by the Passive House Institute, with an effective conductivity of 0.042 W/mK that already includes the screw losses','It carries the weight of the window: over 200 kg of load transfer and compressive stress of at least 2,500 kPa, with no metal brackets to create a thermal bridge','It gives the tapes a flat, stable surface, so the three-level sealing (outer tape, foam, inner vapour barrier) is done properly','It does not degrade with moisture: water absorption below 1.5% in 28 days, no mould and no rot','It works with PVC, aluminium and timber windows; the profiles join with dovetails to any length, and the window can be removed again during renovation'],
      de:['Das Fenster sitzt in der Dämmebene der Fassade: Der Rahmen verlässt die kalte Zone der Wand, und die Wärmebrücke an der Fuge sinkt deutlich gegenüber dem Einbau in der Maueröffnung','Vom Passivhaus Institut zertifiziertes System mit einer effektiven Wärmeleitfähigkeit von 0,042 W/mK, in der die Verluste über die Schrauben schon enthalten sind','Trägt das Fenstergewicht: Lastabtragung über 200 kg und Druckspannung von mindestens 2.500 kPa, ohne Metallkonsolen, die eine Wärmebrücke bilden','Bietet den Bändern eine ebene, stabile Fläche, sodass die Abdichtung in drei Ebenen (Außenband, Schaum, innere Dampfbremse) sauber gelingt','Unempfindlich gegen Feuchte: Wasseraufnahme unter 1,5 % in 28 Tagen, kein Schimmel, keine Fäulnis','Für Fenster aus PVC, Aluminium und Holz; die Profile werden per Schwalbenschwanz beliebig verlängert, und das Fenster lässt sich bei einer Sanierung wieder ausbauen'],
      fr:['La fenêtre est posée dans la couche isolante de la façade : le dormant sort de la zone froide du mur et le pont thermique au joint baisse nettement par rapport à une pose dans la baie maçonnée','Système certifié par le Passive House Institute, avec une conductivité effective de 0,042 W/mK qui intègre déjà les pertes par les vis','Il porte le poids de la fenêtre : reprise de charge supérieure à 200 kg et contrainte en compression d’au moins 2 500 kPa, sans consoles métalliques formant pont thermique','Il offre aux bandes une surface plane et stable, si bien que l’étanchéité sur trois niveaux (bande extérieure, mousse, pare-vapeur intérieur) est réalisée correctement','Il ne craint pas l’humidité : absorption d’eau inférieure à 1,5 % en 28 jours, ni moisissure ni pourriture','Il convient aux fenêtres PVC, aluminium et bois ; les profilés s’assemblent en queue d’aronde sur toute longueur et la fenêtre peut être déposée lors d’une rénovation'],
      es:['La ventana se monta en la capa de aislamiento de la fachada: el marco sale de la zona fría del muro y el puente térmico de la junta baja mucho frente al montaje dentro del hueco de obra','Sistema certificado por el Passive House Institute, con una conductividad efectiva de 0,042 W/mK que ya incluye las pérdidas por los tornillos','Soporta el peso de la ventana: más de 200 kg de carga y una tensión de compresión de al menos 2.500 kPa, sin escuadras metálicas que creen puente térmico','Ofrece a las cintas una superficie plana y estable, de modo que el sellado en tres niveles (cinta exterior, espuma, barrera de vapor interior) se hace bien','No se degrada con la humedad: absorbe menos del 1,5 % de agua en 28 días, no enmohece y no se pudre','Sirve para ventanas de PVC, aluminio y madera; los perfiles se unen en cola de milano en cualquier longitud y la ventana se puede desmontar en una renovación'],
      it:['La finestra si posa nello strato isolante della facciata: il telaio esce dalla zona fredda del muro e il ponte termico al giunto cala molto rispetto alla posa nel vano in muratura','Sistema certificato dal Passive House Institute, con una conducibilità effettiva di 0,042 W/mK che comprende già le perdite attraverso le viti','Regge il peso della finestra: oltre 200 kg di carico e resistenza a compressione di almeno 2.500 kPa, senza staffe metalliche che creano ponte termico','Offre ai nastri una superficie piana e stabile, così la tenuta su tre livelli (nastro esterno, schiuma, barriera al vapore interna) viene eseguita correttamente','Non teme l’umidità: assorbe meno dell’1,5% di acqua in 28 giorni, non ammuffisce e non marcisce','Va bene per finestre in PVC, alluminio e legno; i profili si uniscono a coda di rondine in qualsiasi lunghezza e la finestra si può smontare in caso di ristrutturazione'],
    },
    seo_text: {
      ro:'Precadrele Blaugelb Triotherm+ sunt profile din EPS de înaltă densitate (λD = 0,040 W/mK) care se fixează pe zidărie, în stratul de izolație al fațadei, înaintea ferestrei. Fereastra se montează apoi pe profil, nu în golul de zidărie: rama ajunge în planul izolației, iar puntea termică de la rost, care la montajul clasic aduce condens și mucegai pe glaf și în colțuri, scade mult. Profilele preiau peste 200 kg și rezistă la o compresiune de minimum 2.500 kPa, așa că nu mai sunt necesare console metalice. Sistemul Blaugelb Triotherm+ este certificat de Passive House Institute ca sistem de montaj, cu o conductivitate efectivă de 0,042 W/mK care include și pierderile prin șuruburi. Pe profil se aplică benzile de etanșare conform Ghidului RAL de montaj: bandă precomprimată la exterior, spumă la mijloc și barieră de vapori la interior. Normele nZEB nu cer explicit precadre, dar punțile termice intră în calculul energetic al clădirii, iar precadrul este soluția recomandată când fereastra se montează în izolația fațadei. Neofort BIZ montează precadre Blaugelb Triotherm+ în București și Ilfov; costul suplimentar este de 25–50 EUR pe metru liniar de perimetru la ferestrele din PVC și de 30–60 EUR la cele din aluminiu, fără TVA.',
      en:'Blaugelb Triotherm+ precasings are high-density EPS profiles (λD = 0.040 W/mK) fixed to the masonry, in the facade insulation layer, before the window goes in. The window is then mounted on the profile rather than inside the masonry opening: the frame sits in the insulation plane, and the joint thermal bridge, which with conventional fitting brings condensation and mould to the reveal and the corners, drops sharply. The profiles carry over 200 kg and withstand compressive stress of at least 2,500 kPa, so metal brackets are no longer needed. The Blaugelb Triotherm+ system is certified by the Passive House Institute as a mounting system, with an effective conductivity of 0.042 W/mK that also covers the screw losses. The sealing tapes go onto the profile according to the RAL installation guideline: pre-compressed tape outside, foam in the middle and a vapour barrier inside. The nZEB rules do not require precasings by name, but thermal bridges count in the building energy calculation, and a precasing is the recommended solution whenever the window is fitted in the facade insulation. Neofort BIZ installs Blaugelb Triotherm+ precasings in Bucharest and Ilfov; the extra cost is 25–50 EUR per linear metre of perimeter for PVC windows and 30–60 EUR for aluminium windows, excluding VAT.',
      de:'Blaugelb Triotherm+ Vorblendrahmen sind Profile aus hochdichtem EPS (λD = 0,040 W/mK), die vor dem Fenster am Mauerwerk in der Dämmebene der Fassade befestigt werden. Das Fenster wird anschließend auf das Profil montiert statt in die Maueröffnung: Der Rahmen liegt in der Dämmebene, und die Wärmebrücke an der Fuge, die beim herkömmlichen Einbau Kondensat und Schimmel an Laibung und Ecken verursacht, sinkt deutlich. Die Profile tragen über 200 kg und halten einer Druckspannung von mindestens 2.500 kPa stand, Metallkonsolen sind daher nicht mehr nötig. Das System Blaugelb Triotherm+ ist vom Passivhaus Institut als Montagesystem zertifiziert, mit einer effektiven Wärmeleitfähigkeit von 0,042 W/mK, in der auch die Schraubenverluste stecken. Die Dichtbänder werden nach dem RAL-Leitfaden zur Montage auf das Profil aufgebracht: vorkomprimiertes Band außen, Schaum in der Mitte und Dampfbremse innen. Die nZEB-Vorschriften nennen Vorblendrahmen nicht ausdrücklich, doch Wärmebrücken gehen in die Energieberechnung des Gebäudes ein, und der Vorblendrahmen ist die empfohlene Lösung, wenn das Fenster in der Fassadendämmung sitzt. Neofort BIZ montiert Blaugelb Triotherm+ Vorblendrahmen in Bukarest und Ilfov; die Mehrkosten liegen bei 25–50 EUR pro laufendem Meter Umfang für PVC-Fenster und bei 30–60 EUR für Aluminiumfenster, ohne MwSt.',
      fr:'Les précadres Blaugelb Triotherm+ sont des profilés en EPS haute densité (λD = 0,040 W/mK) fixés sur la maçonnerie, dans la couche isolante de la façade, avant la pose de la fenêtre. La fenêtre se monte ensuite sur le profilé et non dans la baie maçonnée : le dormant se trouve dans le plan de l’isolant, et le pont thermique au joint, qui en pose classique amène condensation et moisissures sur le tableau et dans les angles, baisse nettement. Les profilés reprennent plus de 200 kg et résistent à une contrainte en compression d’au moins 2 500 kPa, ce qui rend les consoles métalliques inutiles. Le système Blaugelb Triotherm+ est certifié par le Passive House Institute comme système de pose, avec une conductivité effective de 0,042 W/mK qui inclut aussi les pertes par les vis. Les bandes d’étanchéité s’appliquent sur le profilé selon le guide de pose RAL : bande précomprimée à l’extérieur, mousse au milieu et pare-vapeur à l’intérieur. Les règles nZEB n’exigent pas nommément de précadres, mais les ponts thermiques entrent dans le calcul énergétique du bâtiment, et le précadre est la solution recommandée dès que la fenêtre est posée dans l’isolant de façade. Neofort BIZ pose des précadres Blaugelb Triotherm+ à Bucarest et en Ilfov ; le surcoût est de 25 à 50 EUR par mètre linéaire de périmètre pour les fenêtres PVC et de 30 à 60 EUR pour les fenêtres aluminium, hors TVA.',
      es:'Los premarcos Blaugelb Triotherm+ son perfiles de EPS de alta densidad (λD = 0,040 W/mK) que se fijan a la fábrica, en la capa de aislamiento de la fachada, antes de la ventana. Después la ventana se monta sobre el perfil y no dentro del hueco de obra: el marco queda en el plano del aislamiento y el puente térmico de la junta, que en el montaje clásico trae condensación y moho a la jamba y a las esquinas, baja mucho. Los perfiles soportan más de 200 kg y resisten una tensión de compresión de al menos 2.500 kPa, así que ya no hacen falta escuadras metálicas. El sistema Blaugelb Triotherm+ está certificado por el Passive House Institute como sistema de montaje, con una conductividad efectiva de 0,042 W/mK que incluye también las pérdidas por los tornillos. Las cintas de sellado se aplican sobre el perfil según la guía de montaje RAL: cinta precomprimida por fuera, espuma en el centro y barrera de vapor por dentro. Las normas nZEB no exigen premarcos de forma expresa, pero los puentes térmicos entran en el cálculo energético del edificio y el premarco es la solución recomendada cuando la ventana se monta en el aislamiento de la fachada. Neofort BIZ instala premarcos Blaugelb Triotherm+ en Bucarest e Ilfov; el coste adicional es de 25–50 EUR por metro lineal de perímetro en ventanas de PVC y de 30–60 EUR en ventanas de aluminio, sin IVA.',
      it:'I controtelai Blaugelb Triotherm+ sono profili in EPS ad alta densità (λD = 0,040 W/mK) che si fissano alla muratura, nello strato isolante della facciata, prima della finestra. La finestra si monta poi sul profilo e non nel vano in muratura: il telaio si trova nel piano dell’isolamento e il ponte termico al giunto, che nella posa classica porta condensa e muffa sulla spalletta e negli angoli, cala molto. I profili reggono oltre 200 kg e resistono a una compressione di almeno 2.500 kPa, quindi non servono più staffe metalliche. Il sistema Blaugelb Triotherm+ è certificato dal Passive House Institute come sistema di posa, con una conducibilità effettiva di 0,042 W/mK che comprende anche le perdite attraverso le viti. I nastri di tenuta si applicano sul profilo secondo la guida di posa RAL: nastro precompresso all’esterno, schiuma al centro e barriera al vapore all’interno. Le norme nZEB non richiedono espressamente i controtelai, ma i ponti termici entrano nel calcolo energetico dell’edificio e il controtelaio è la soluzione consigliata quando la finestra si posa nell’isolamento della facciata. Neofort BIZ posa controtelai Blaugelb Triotherm+ a Bucarest e Ilfov; il costo aggiuntivo è di 25–50 EUR per metro lineare di perimetro per le finestre in PVC e di 30–60 EUR per quelle in alluminio, IVA esclusa.',
    },
  },

  'banda-precomprimata-butil': {
    img: '/accessories/banda-butilic.avif',
    color: '#2b4834',
    category: { ro:'Sisteme nZEB', en:'nZEB Systems', de:'nZEB-Systeme', fr:'Systèmes nZEB', es:'Sistemas nZEB', it:'Sistemi nZEB' },
    serie: { ro:'Etanșare Exterioară', en:'Exterior Sealing', de:'Außenabdichtung', fr:'Étanchéité Extérieure', es:'Sellado Exterior', it:'Tenuta Esterna' },
    breadcrumb_parent_href: '/sisteme-nzeb',
    breadcrumb_parent: { ro:'Sisteme nZEB', en:'nZEB Systems', de:'nZEB-Systeme', fr:'Systèmes nZEB', es:'Sistemas nZEB', it:'Sistemi nZEB' },
    name: {
      ro:'Bandă Precomprimată Butilică – Etanșare Exterioară Impermeabilă RAL, Strat Exterior',
      en:'Pre-compressed Butyl Tape – Waterproof Exterior RAL Sealing, Outer Layer',
      de:'Vorkomprimiertes Butylband – Wasserabweisende Außenabdichtung RAL, Außenschicht',
      fr:'Ruban Précomprimé Butylique – Étanchéité Extérieure Imperméable RAL, Couche Extérieure',
      es:'Cinta Precomprimida Butílica – Sellado Exterior Impermeable RAL, Capa Exterior',
      it:'Nastro Precompresso Butilico – Tenuta Esterna Impermeabile RAL, Strato Esterno',
    },
    tagline: {
      ro:'Componenta exterioară a sistemului RAL 3 straturi — respinge apa, permeabilă la vapori, se dilată după montaj. Sd < 0,1 m, alungire > 300%, rezistentă UV.',
      en:'Exterior component of the RAL 3-layer system — repels water, vapour permeable, expands after installation. Sd < 0.1 m, elongation > 300%, UV resistant.',
      de:'Außenkomponente des RAL 3-Schicht-Systems — weist Wasser ab, dampfdurchlässig, dehnt sich nach Montage aus. Sd < 0,1 m, Dehnung > 300%, UV-beständig.',
      fr:'Composant extérieur du système RAL 3 couches — repousse l\'eau, perméable à la vapeur, se dilate après pose. Sd < 0,1 m, allongement > 300%, résistant UV.',
      es:'Componente exterior del sistema RAL 3 capas — repele el agua, permeable al vapor, se dilata después del montaje. Sd < 0,1 m, alargamiento > 300%, resistente UV.',
      it:'Componente esterno del sistema RAL 3 strati — respinge l\'acqua, permeabile al vapore, si espande dopo il montaggio. Sd < 0,1 m, allungamento > 300%, resistente UV.',
    },
    specs: {
      ro:[['Material','Spumă PUR impregnată bitum/acrilic'],['Lățimi disponibile','10 – 60 mm'],['Grosimi comprimate','2 – 20 mm'],['Stare la montaj','Precomprimată (se dilată după)'],['Rezistență UV','Da — rezistentă la intemperii'],['Alungire la rupere','> 300%'],['Temperaturi aplicare','-5°C … +40°C'],['Sistemul RAL','Strat exterior (permeabil)'],['Variantă','Butilică (ext.) / Acrilică (int.)'],],
      en:[['Material','Bitumen/acrylic impregnated PUR foam'],['Available widths','10 – 60 mm'],['Compressed thicknesses','2 – 20 mm'],['State at installation','Pre-compressed (expands after)'],['UV resistance','Yes — weatherproof'],['Elongation at break','> 300%'],['Application temperature','-5°C … +40°C'],['RAL system','Outer layer (permeable)'],['Variant','Butyl (ext.) / Acrylic (int.)'],],
      de:[['Material','Bitumen/Acryl imprägnierter PUR-Schaum'],['Verfügbare Breiten','10 – 60 mm'],['Komprimierte Dicken','2 – 20 mm'],['Zustand bei Montage','Vorkomprimiert (dehnt sich aus)'],['UV-Beständigkeit','Ja — witterungsbeständig'],['Bruchdehnung','> 300%'],['Anwendungstemperatur','-5°C … +40°C'],['RAL-System','Außenschicht (durchlässig)'],['Variante','Butyl (außen) / Acryl (innen)'],],
      fr:[['Matériau','Mousse PUR imprégnée bitume/acrylique'],['Largeurs disponibles','10 – 60 mm'],['Épaisseurs comprm.','2 – 20 mm'],['État à la pose','Précomprimé (se dilate)'],['Résistance UV','Oui — résistant intempéries'],['Allongement rupture','> 300%'],['Temp. application','-5°C … +40°C'],['Système RAL','Couche ext. (perméable)'],['Variante','Butyle (ext.) / Acrylique (int.)'],],
      es:[['Material','Espuma PUR impregnada betún/acrílico'],['Anchos disponibles','10 – 60 mm'],['Espesores compr.','2 – 20 mm'],['Estado al instalar','Precomprimida (se dilata)'],['Resistencia UV','Sí — resistente intemperies'],['Alargamiento rotura','> 300%'],['Temp. aplicación','-5°C … +40°C'],['Sistema RAL','Capa ext. (permeable)'],['Variante','Butílica (ext.) / Acrílica (int.)'],],
      it:[['Materiale','Schiuma PUR impregnata bitume/acrilico'],['Larghezze disponibili','10 – 60 mm'],['Spessori compressi','2 – 20 mm'],['Stato al montaggio','Precompresso (si espande)'],['Resistenza UV','Sì — resistente alle intemperie'],['Allungamento rottura','> 300%'],['Temp. applicazione','-5°C … +40°C'],['Sistema RAL','Strato est. (permeabile)'],['Variante','Butilico (est.) / Acrilico (int.)'],],
    },
    perf: {
      ro:[['Etanșeitate la apă','Clasa W2 – W3'],['Permeabilitate vapori Sd','< 0,1 m (permeabilă — lasă vapor să iasă)'],['Alungire la rupere','> 300%'],['Rezistență UV','Da — nu îmbătrânește la soare'],['Durabilitate','> 25 ani'],['Rol în sistemul RAL','Strat exterior — respinge apa, permeabil la vapori'],],
      en:[['Water tightness','Class W2 – W3'],['Vapour permeability Sd','< 0.1 m (permeable — lets vapour out)'],['Elongation at break','> 300%'],['UV resistance','Yes — does not age in sun'],['Durability','> 25 years'],['Role in RAL system','Outer layer — repels water, vapour permeable'],],
      de:[['Wasserdichtheit','Klasse W2 – W3'],['Dampfdurchlässigkeit Sd','< 0,1 m (durchlässig — lässt Dampf raus)'],['Bruchdehnung','> 300%'],['UV-Beständigkeit','Ja — altert nicht in der Sonne'],['Haltbarkeit','> 25 Jahre'],['Funktion RAL-System','Außenschicht — weist Wasser ab, dampfdurchlässig'],],
      fr:[['Étanchéité à l\'eau','Classe W2 – W3'],['Perméabilité vapeur Sd','< 0,1 m (perméable — laisse sortir vapeur)'],['Allongement rupture','> 300%'],['Résistance UV','Oui — ne vieillit pas au soleil'],['Durabilité','> 25 ans'],['Rôle système RAL','Couche ext. — repousse eau, perméable vapeur'],],
      es:[['Hermeticidad agua','Clase W2 – W3'],['Permeabilidad vapor Sd','< 0,1 m (permeable — deja salir vapor)'],['Alargamiento rotura','> 300%'],['Resistencia UV','Sí — no envejece al sol'],['Durabilidad','> 25 años'],['Rol sistema RAL','Capa ext. — repele agua, permeable vapor'],],
      it:[['Tenuta acqua','Classe W2 – W3'],['Permeabilità vapore Sd','< 0,1 m (permeabile — lascia uscire vapore)'],['Allungamento rottura','> 300%'],['Resistenza UV','Sì — non invecchia al sole'],['Durata','> 25 anni'],['Ruolo sistema RAL','Strato est. — respinge acqua, permeabile vapore'],],
    },
    advantages: {
      ro:['Respinge apa de ploaie W2–W3 — etanșeitate exterioară completă la vânt lateral și ploaie torențială fără silicon sau masă de șpaclu','Permeabilă la vapori Sd < 0,1 m — permite umidității din rost să se evapore în exterior, eliminând condensul și mucegaiul','Precomprimată — se dilată progresiv după montaj, umplând perfect neregularitățile dintre toc și zid fără presiune manuală','Alungire > 300% — rezistă la mișcările termice sezoniere ale tocului și zidului fără fisurare','Fără pistol de silicon — montaj rapid, curat, repetabil, fără scurgeri sau urme','Componenta obligatorie stratul exterior RAL — necesară pentru orice certificare energetică a montajului'],
      en:['Repels rain water W2–W3 — complete exterior waterproofing at lateral wind and heavy rain without silicone or filler','Vapour permeable Sd < 0.1 m — allows moisture from joint to evaporate outward, eliminating condensation and mould','Pre-compressed — progressively expands after installation, perfectly filling irregularities between frame and wall without manual pressure','Elongation > 300% — resists seasonal thermal movements of frame and wall without cracking','No silicone gun — fast, clean, repeatable installation without drips or marks','Mandatory outer layer RAL component — required for any installation energy certification'],
      de:['Weist Regenwasser W2–W3 ab — vollständige Außenabdichtung bei Seitenwind und Starkregen ohne Silikon oder Spachtelmasse','Dampfdurchlässig Sd < 0,1 m — ermöglicht Feuchtigkeit aus der Fuge nach außen zu verdunsten, Kondensat und Schimmel beseitigt','Vorkomprimiert — dehnt sich nach Montage progressiv aus, füllt Unebenheiten zwischen Rahmen und Wand perfekt ohne manuellen Druck','Dehnung > 300% — widersteht saisonalen Wärmebewegungen von Rahmen und Wand ohne Risse','Kein Silikonpistole — schnelle, saubere, wiederholbare Montage ohne Tropfen oder Flecken','Pflicht-Außenschicht-RAL-Bauteil — für jede Montage-Energiezertifizierung erforderlich'],
      fr:['Repousse eau de pluie W2–W3 — étanchéité extérieure complète au vent latéral et pluie torrentielle sans silicone ni enduit','Perméable vapeur Sd < 0,1 m — permet à l\'humidité du joint de s\'évaporer vers l\'extérieur, condensation et moisissure éliminées','Précomprimé — se dilate progressivement après pose, remplissant parfaitement les irrégularités sans pression manuelle','Allongement > 300% — résiste aux mouvements thermiques saisonniers du cadre et du mur sans fissures','Pas de pistolet silicone — pose rapide, propre, reproductible sans coulures ni traces','Composant RAL couche extérieure obligatoire — requis pour toute certification énergétique de pose'],
      es:['Repele agua de lluvia W2–W3 — impermeabilización exterior completa al viento lateral y lluvia torrencial sin silicona ni masilla','Permeable al vapor Sd < 0,1 m — permite que la humedad de la junta se evapore hacia el exterior, condensación y moho eliminados','Precomprimida — se expande progresivamente después del montaje, rellenando perfectamente las irregularidades sin presión manual','Alargamiento > 300% — resiste los movimientos térmicos estacionales del marco y el muro sin fisuras','Sin pistola de silicona — instalación rápida, limpia, repetible sin goteos ni marcas','Componente RAL capa exterior obligatorio — requerido para cualquier certificación energética del montaje'],
      it:['Respinge acqua piovana W2–W3 — impermeabilizzazione esterna completa al vento laterale e pioggia torrenziale senza silicone o stucco','Permeabile al vapore Sd < 0,1 m — consente all\'umidità del giunto di evaporare verso l\'esterno, condensa e muffa eliminati','Precompresso — si espande progressivamente dopo il montaggio, riempiendo perfettamente le irregolarità senza pressione manuale','Allungamento > 300% — resiste ai movimenti termici stagionali del telaio e del muro senza fessurazioni','Senza pistola al silicone — installazione rapida, pulita, ripetibile senza colature o tracce','Componente RAL strato esterno obbligatorio — richiesto per qualsiasi certificazione energetica del montaggio'],
    },
    seo_text: {
      ro:'Banda precomprimată butilică este componenta externă a sistemului de etanșare în 3 straturi conform RAL Montajeleitfaden — standardul german de referință pentru montajul certificat al ferestrelor. Fabricată din spumă poliuretanică impregnată cu bitum sau acrilic, banda se livrează în stare precomprimată și se dilată progresiv după montaj, umplând perfect toate neregularitățile dintre toc și zid fără presiune manuală și fără silicon. Proprietatea esențială care o face indispensabilă este combinația unică: impermeabilă la apă (W2–W3) dar permeabilă la vapori (Sd < 0,1 m) — apa de ploaie nu poate penetra din exterior, dar vaporia de apă din rost poate ieși spre exterior, eliminând condensul și mucegaiul în structura peretelui. Alungirea la rupere de peste 300% garantează integritatea etanșării pe toată durata de viață a ferestrei, inclusiv în condiții de dilatații termice sezoniere semnificative. Neofort BIZ utilizează banda precomprimată butilică în toate pachetele de montaj premium certificate RAL și o recomandă ca prim pas în orice instalare de fereastră performantă.',
      en:'Pre-compressed butyl tape is the external component of the 3-layer sealing system according to RAL Montajeleitfaden — the German reference standard for certified window installation. Made from polyurethane foam impregnated with bitumen or acrylic, the tape is delivered in a pre-compressed state and progressively expands after installation, perfectly filling all irregularities between frame and wall without manual pressure and without silicone. The essential property that makes it indispensable is the unique combination: waterproof (W2–W3) but vapour permeable (Sd < 0.1 m) — rain water cannot penetrate from outside, but water vapour from the joint can exit outward, eliminating condensation and mould in the wall structure. Elongation at break of over 300% guarantees sealing integrity over the entire window lifetime, including under significant seasonal thermal expansion conditions. Neofort BIZ uses pre-compressed butyl tape in all RAL-certified premium installation packages and recommends it as the first step in any high-performance window installation.',
      de:'Vorkomprimiertes Butylband ist die Außenkomponente des 3-Schicht-Dichtsystems gemäß RAL Montageleitfaden — dem deutschen Referenzstandard für die zertifizierte Fenstermontage. Aus bitumen- oder acrylimprägnierten Polyurethanschaum hergestellt, wird das Band im vorkomprimierten Zustand geliefert und dehnt sich nach der Montage progressiv aus, füllt alle Unebenheiten zwischen Rahmen und Wand perfekt ohne manuellen Druck und ohne Silikon. Die wesentliche Eigenschaft, die es unverzichtbar macht, ist die einzigartige Kombination: wasserabweisend (W2–W3) aber dampfdurchlässig (Sd < 0,1 m) — Regenwasser kann von außen nicht eindringen, aber Wasserdampf aus der Fuge kann nach außen entweichen, Kondensat und Schimmel in der Wandstruktur beseitigt. Bruchdehnung über 300% garantiert die Dichtungsintegrität über die gesamte Lebensdauer des Fensters, auch unter erheblichen saisonalen Wärmedehnungsbedingungen. Neofort BIZ verwendet vorkomprimiertes Butylband in allen RAL-zertifizierten Premium-Montage-Paketen und empfiehlt es als ersten Schritt bei jeder hochwertigen Fenstermontage.',
      fr:'Le ruban précomprimé butylique est le composant extérieur du système d\'étanchéité à 3 couches selon le RAL Montageleitfaden — la norme de référence allemande pour la pose certifiée des fenêtres. Fabriqué à partir de mousse polyuréthane imprégnée de bitume ou d\'acrylique, le ruban est livré à l\'état précomprimé et se dilate progressivement après la pose, remplissant parfaitement toutes les irrégularités entre le cadre et le mur sans pression manuelle et sans silicone. La propriété essentielle qui le rend indispensable est la combinaison unique : imperméable à l\'eau (W2–W3) mais perméable à la vapeur (Sd < 0,1 m) — l\'eau de pluie ne peut pas pénétrer de l\'extérieur, mais la vapeur d\'eau du joint peut sortir vers l\'extérieur, condensation et moisissure dans la structure murale éliminées. L\'allongement à la rupture de plus de 300% garantit l\'intégrité de l\'étanchéité sur toute la durée de vie de la fenêtre, y compris dans des conditions de dilatation thermique saisonnière significative. Neofort BIZ utilise le ruban précomprimé butylique dans tous les packages d\'installation premium certifiés RAL et le recommande comme première étape dans toute installation de fenêtre haute performance.',
      es:'La cinta precomprimida butílica es el componente exterior del sistema de sellado de 3 capas según el RAL Montajeleitfaden — la norma de referencia alemana para la instalación certificada de ventanas. Fabricada con espuma de poliuretano impregnada con betún o acrílico, la cinta se entrega en estado precomprimido y se expande progresivamente después de la instalación, rellenando perfectamente todas las irregularidades entre el marco y el muro sin presión manual y sin silicona. La propiedad esencial que la hace indispensable es la combinación única: impermeable al agua (W2–W3) pero permeable al vapor (Sd < 0,1 m) — el agua de lluvia no puede penetrar desde el exterior, pero el vapor de agua de la junta puede salir hacia el exterior, eliminando la condensación y el moho en la estructura del muro. El alargamiento a la rotura de más del 300% garantiza la integridad del sellado durante toda la vida útil de la ventana, incluso en condiciones de dilatación térmica estacional significativa. Neofort BIZ utiliza la cinta precomprimida butílica en todos los paquetes de instalación premium certificados RAL y la recomienda como primer paso en cualquier instalación de ventana de alto rendimiento.',
      it:'Il nastro precompresso butilico è il componente esterno del sistema di sigillatura a 3 strati secondo il RAL Montageleitfaden — lo standard di riferimento tedesco per l\'installazione certificata delle finestre. Prodotto con schiuma poliuretanica impregnata di bitume o acrilico, il nastro viene consegnato in stato precompresso e si espande progressivamente dopo il montaggio, riempiendo perfettamente tutte le irregolarità tra il telaio e il muro senza pressione manuale e senza silicone. La proprietà essenziale che lo rende indispensabile è la combinazione unica: impermeabile all\'acqua (W2–W3) ma permeabile al vapore (Sd < 0,1 m) — l\'acqua piovana non può penetrare dall\'esterno, ma il vapore acqueo dal giunto può uscire verso l\'esterno, eliminando condensa e muffa nella struttura del muro. L\'allungamento a rottura di oltre il 300% garantisce l\'integrità della tenuta per tutta la durata di vita della finestra, anche in condizioni di significativa dilatazione termica stagionale. Neofort BIZ utilizza il nastro precompresso butilico in tutti i pacchetti di installazione premium certificati RAL e lo raccomanda come primo passo in qualsiasi installazione di finestra ad alte prestazioni.',
    },
  },

  'banda-etansare-antivapori': {
    img: '/accessories/banda-antivapori.avif',
    color: '#2b4834',
    category: { ro:'Sisteme nZEB', en:'nZEB Systems', de:'nZEB-Systeme', fr:'Systèmes nZEB', es:'Sistemas nZEB', it:'Sistemi nZEB' },
    serie: { ro:'Etanșare Interioară', en:'Interior Sealing', de:'Innenabdichtung', fr:'Étanchéité Intérieure', es:'Sellado Interior', it:'Tenuta Interna' },
    breadcrumb_parent_href: '/sisteme-nzeb',
    breadcrumb_parent: { ro:'Sisteme nZEB', en:'nZEB Systems', de:'nZEB-Systeme', fr:'Systèmes nZEB', es:'Sistemas nZEB', it:'Sistemi nZEB' },
    name: {
      ro:'Bandă Etanșare Antivapori Interior – Barieră Vapori Sd > 10 m, Strat Interior RAL',
      en:'Interior Vapour Barrier Sealing Tape – Vapour Barrier Sd > 10 m, RAL Inner Layer',
      de:'Innen-Dampfsperrband – Dampfsperre Sd > 10 m, RAL Innenschicht',
      fr:'Ruban Étanchéité Pare-Vapeur Intérieur – Barrière Vapeur Sd > 10 m, Couche Intérieure RAL',
      es:'Cinta Sellado Barrera de Vapor Interior – Barrera Vapor Sd > 10 m, Capa Interior RAL',
      it:'Nastro Tenuta Barriera al Vapore Interno – Barriera Vapore Sd > 10 m, Strato Interno RAL',
    },
    tagline: {
      ro:'Componenta interioară a sistemului RAL 3 straturi — barieră veritabilă la vapori Sd > 10 m. Blochează vaporii din interior să intre în structura peretelui, elimină condensul și mucegaiul.',
      en:'Interior component of the RAL 3-layer system — true vapour barrier Sd > 10 m. Blocks indoor vapour from entering wall structure, eliminates condensation and mould.',
      de:'Innenkomponente des RAL 3-Schicht-Systems — echte Dampfsperre Sd > 10 m. Blockiert Raumluftdampf vor dem Eindringen in die Wandstruktur, Kondensat und Schimmel beseitigt.',
      fr:'Composant intérieur du système RAL 3 couches — vraie barrière vapeur Sd > 10 m. Bloque la vapeur intérieure de pénétrer dans la structure murale, condensation et moisissure éliminées.',
      es:'Componente interior del sistema RAL 3 capas — barrera de vapor real Sd > 10 m. Bloquea el vapor interior de penetrar en la estructura del muro, condensación y moho eliminados.',
      it:'Componente interno del sistema RAL 3 strati — vera barriera al vapore Sd > 10 m. Blocca il vapore interno dal penetrare nella struttura del muro, condensa e muffa eliminati.',
    },
    specs: {
      ro:[['Material','PE / Aluminiu laminat'],['Rezistență vapori Sd','> 10 m (barieră veritabilă)'],['Lățimi disponibile','50 / 75 / 100 mm'],['Tip aderare','Autoadeziv (lipire directă pe toc)'],['Rezistență la sfâșiere','> 40 N/50 mm'],['Temperaturi aplicare','+5°C … +40°C'],['Durabilitate','> 25 ani'],['Sistemul RAL','Strat interior (barieră vapori)'],],
      en:[['Material','PE / Laminated aluminium'],['Vapour resistance Sd','> 10 m (true barrier)'],['Available widths','50 / 75 / 100 mm'],['Adhesion type','Self-adhesive (direct on frame)'],['Tear resistance','> 40 N/50 mm'],['Application temperature','+5°C … +40°C'],['Durability','> 25 years'],['RAL system','Inner layer (vapour barrier)'],],
      de:[['Material','PE / Laminiertes Aluminium'],['Dampfdiffusion Sd','> 10 m (echte Sperre)'],['Verfügbare Breiten','50 / 75 / 100 mm'],['Haftungstyp','Selbstklebend (direkt auf Rahmen)'],['Weiterreißfest.','> 40 N/50 mm'],['Anwendungstemperatur','+5°C … +40°C'],['Haltbarkeit','> 25 Jahre'],['RAL-System','Innenschicht (Dampfsperre)'],],
      fr:[['Matériau','PE / Aluminium laminé'],['Résistance vapeur Sd','> 10 m (vraie barrière)'],['Largeurs disponibles','50 / 75 / 100 mm'],['Type adhésion','Autoadhésif (direct sur cadre)'],['Résistance déchirement','> 40 N/50 mm'],['Temp. application','+5°C … +40°C'],['Durabilité','> 25 ans'],['Système RAL','Couche int. (pare-vapeur)'],],
      es:[['Material','PE / Aluminio laminado'],['Resist. vapor Sd','> 10 m (barrera real)'],['Anchos disponibles','50 / 75 / 100 mm'],['Tipo adhesión','Autoadhesivo (directo en marco)'],['Resist. desgarro','> 40 N/50 mm'],['Temp. aplicación','+5°C … +40°C'],['Durabilidad','> 25 años'],['Sistema RAL','Capa int. (barrera vapor)'],],
      it:[['Materiale','PE / Alluminio laminato'],['Resist. vapore Sd','> 10 m (vera barriera)'],['Larghezze disponibili','50 / 75 / 100 mm'],['Tipo adesione','Autoadesivo (diretto su telaio)'],['Resist. lacerazione','> 40 N/50 mm'],['Temp. applicazione','+5°C … +40°C'],['Durata','> 25 anni'],['Sistema RAL','Strato int. (barriera vapore)'],],
    },
    perf: {
      ro:[['Barieră vapori Sd','> 10 m (barieră — nu frână)'],['Etanșeitate aer sistem complet','Clasa 4 (cu banda ext.)'],['Durabilitate','> 25 ani'],['Compatibil nZEB','Da'],['Rol în sistemul RAL','Strat interior — blochează vaporii din interior'],],
      en:[['Vapour barrier Sd','> 10 m (barrier — not retarder)'],['Full system air tightness','Class 4 (with outer tape)'],['Durability','> 25 years'],['nZEB compatible','Yes'],['Role in RAL system','Inner layer — blocks indoor vapour'],],
      de:[['Dampfsperre Sd','> 10 m (Sperre — nicht Bremse)'],['Gesamtsystem Luftdichtheit','Klasse 4 (mit Außenband)'],['Haltbarkeit','> 25 Jahre'],['nZEB-kompatibel','Ja'],['Funktion RAL-System','Innenschicht — blockiert Raumluftdampf'],],
      fr:[['Barrière vapeur Sd','> 10 m (barrière — pas frein)'],['Étanchéité air complète','Classe 4 (avec ruban ext.)'],['Durabilité','> 25 ans'],['Compatible nZEB','Oui'],['Rôle système RAL','Couche int. — bloque vapeur intérieure'],],
      es:[['Barrera vapor Sd','> 10 m (barrera — no freno)'],['Hermeticidad completa','Clase 4 (con cinta ext.)'],['Durabilidad','> 25 años'],['Compatible nZEB','Sí'],['Rol sistema RAL','Capa int. — bloquea vapor interior'],],
      it:[['Barriera vapore Sd','> 10 m (barriera — non freno)'],['Ermeticità completa','Classe 4 (con nastro est.)'],['Durata','> 25 anni'],['Compatible nZEB','Sì'],['Ruolo sistema RAL','Strato int. — blocca vapore interno'],],
    },
    advantages: {
      ro:['Sd > 10 m — barieră veritabilă față de simpla frână la vapori (Sd 1–5 m): blochează complet migrarea vaporilor din cameră spre rost','Elimină condensul invizibil din structura peretelui — fără antivapori, umiditatea interioară condensează pe suprafața rece a zidului cauzând mucegai ascuns','Autoadezivă, fără grund special — lipire directă pe PVC, aluminiu, beton sau tencuială, prindere imediată','Durabilitate > 25 ani — nu se usucă, nu se fisurează, nu degajă substanțe chimice în timp','Componenta interioară obligatorie RAL — fără aceasta sistemul nu atinge Clasa 4 de etanșeitate','Lățimi 50–100 mm — se alege în funcție de adâncimea rostului și suprafața de acoperit'],
      en:['Sd > 10 m — true barrier vs. simple vapour retarder (Sd 1–5 m): completely blocks vapour migration from room to joint','Eliminates invisible condensation in wall structure — without vapour barrier, indoor moisture condenses on cold wall surface causing hidden mould','Self-adhesive, no special primer — direct adhesion on PVC, aluminium, concrete or plaster, immediate grip','Durability > 25 years — does not dry, does not crack, does not emit chemicals over time','Mandatory RAL inner component — without it the system does not achieve Class 4 air tightness','Widths 50–100 mm — chosen according to joint depth and area to cover'],
      de:['Sd > 10 m — echte Dampfsperre ggü. einfacher Dampfbremse (Sd 1–5 m): blockiert vollständig Dampfmigration vom Raum zur Fuge','Eliminiert unsichtbares Kondensat in der Wandstruktur — ohne Dampfsperre kondensiert Raumfeuchtigkeit auf kalter Wandoberfläche und verursacht versteckten Schimmel','Selbstklebend, kein Spezialgrundierung — direkte Haftung auf PVC, Aluminium, Beton oder Putz, sofortiger Halt','Haltbarkeit > 25 Jahre — trocknet nicht, reißt nicht, gibt keine Chemikalien über Zeit ab','Pflicht-RAL-Innenkomponente — ohne sie erreicht das System nicht Luftdichtheit Klasse 4','Breiten 50–100 mm — je nach Fugenbreite und abzudeckender Fläche gewählt'],
      fr:['Sd > 10 m — vraie barrière vs. simple frein-vapeur (Sd 1–5 m): bloque complètement la migration de vapeur depuis la pièce vers le joint','Élimine la condensation invisible dans la structure murale — sans pare-vapeur, l\'humidité intérieure condense sur la surface froide du mur causant de la moisissure cachée','Autoadhésif, pas d\'apprêt spécial — adhésion directe sur PVC, aluminium, béton ou enduit, prise immédiate','Durabilité > 25 ans — ne sèche pas, ne se fissure pas, n\'émet pas de produits chimiques dans le temps','Composant RAL intérieur obligatoire — sans lui le système n\'atteint pas la Classe 4 d\'étanchéité','Largeurs 50–100 mm — choisies selon la profondeur du joint et la surface à couvrir'],
      es:['Sd > 10 m — barrera real vs. simple freno de vapor (Sd 1–5 m): bloquea completamente la migración de vapor desde la habitación hasta la junta','Elimina la condensación invisible en la estructura del muro — sin barrera de vapor, la humedad interior condensa en la superficie fría del muro causando moho oculto','Autoadhesivo, sin imprimación especial — adhesión directa en PVC, aluminio, hormigón o revoque, agarre inmediato','Durabilidad > 25 años — no se seca, no se fisura, no emite productos químicos con el tiempo','Componente RAL interior obligatorio — sin él el sistema no alcanza la Clase 4 de hermeticidad','Anchos 50–100 mm — elegidos según la profundidad de la junta y la superficie a cubrir'],
      it:['Sd > 10 m — vera barriera vs. semplice freno al vapore (Sd 1–5 m): blocca completamente la migrazione del vapore dalla stanza al giunto','Elimina la condensa invisibile nella struttura del muro — senza barriera al vapore, l\'umidità interna condensa sulla superficie fredda del muro causando muffa nascosta','Autoadesivo, senza primer speciale — adesione diretta su PVC, alluminio, calcestruzzo o intonaco, presa immediata','Durata > 25 anni — non si secca, non si fessura, non emette sostanze chimiche nel tempo','Componente RAL interno obbligatorio — senza di esso il sistema non raggiunge la Classe 4 di ermeticità','Larghezze 50–100 mm — scelte in base alla profondità del giunto e alla superficie da coprire'],
    },
    seo_text: {
      ro:'Banda de etanșare antivapori interioară este componenta cu Sd > 10 m a sistemului RAL 3 straturi, plasată pe fața interioară a rostului pentru a împiedica vaporii calzi din cameră să migreze spre zid și să condenseze în zona de izolare. Diferența esențială față de o simplă frână la vapori (Sd 1–5 m) este că bariera cu Sd > 10 m blochează complet migrarea vaporilor — nu o reduce, o elimină — asigurând că nicio umiditate din interiorul locuinței nu poate ajunge în structura peretelui prin rostul ferestrei. Aceasta este direct legată de absența mucegaiului negru din colțurile ferestrelor, problema care afectează milioane de locuințe românești și care se datorează nu ferestrei în sine, ci lipsei etanșării corecte a rostului de montaj. Materialul PE sau aluminiu laminat cu Sd > 10 m este certificat pentru durabilitate > 25 ani, nu îmbătrânește și nu degajă substanțe chimice. Neofort BIZ utilizează banda antivapori în toate montajele premium și recomandă sistemul complet 3 straturi: bandă butilică exterior + spumă PUR + bandă antivapori interior — singurul sistem care garantează Clasa 4 de etanșeitate la aer conform RAL.',
      en:'The interior vapour barrier sealing tape is the Sd > 10 m component of the RAL 3-layer system, placed on the interior face of the joint to prevent warm indoor vapour from migrating toward the wall and condensing in the insulation zone. The essential difference from a simple vapour retarder (Sd 1–5 m) is that the Sd > 10 m barrier completely blocks vapour migration — it does not reduce it, it eliminates it — ensuring that no moisture from inside the home can reach the wall structure through the window installation joint. This is directly linked to the absence of black mould in window corners, the problem affecting millions of Romanian homes, which is caused not by the window itself, but by the lack of correct sealing of the installation joint. PE or laminated aluminium material with Sd > 10 m is certified for durability > 25 years, does not age and does not emit chemicals. Neofort BIZ uses vapour barrier tape in all premium installations and recommends the complete 3-layer system: butyl tape exterior + PUR foam + vapour barrier tape interior — the only system that guarantees Class 4 air tightness according to RAL.',
      de:'Das Innen-Dampfsperrband ist die Sd > 10 m Komponente des RAL 3-Schicht-Systems, die auf der Innenseite der Fuge platziert wird, um zu verhindern, dass warmer Raumluftdampf zur Wand wandert und in der Dämmzone kondensiert. Der wesentliche Unterschied zu einer einfachen Dampfbremse (Sd 1–5 m) besteht darin, dass die Sd > 10 m Sperre die Dampfmigration vollständig blockiert — sie reduziert sie nicht, sie eliminiert sie — und stellt sicher, dass keine Feuchtigkeit aus dem Inneren des Hauses durch die Fenstermontagefuge zur Wandstruktur gelangen kann. Dies ist direkt mit dem Fehlen von schwarzem Schimmel in Fensterecken verbunden, dem Problem, das Millionen rumänischer Häuser betrifft und das nicht durch das Fenster selbst, sondern durch das Fehlen einer korrekten Abdichtung der Montagefuge verursacht wird. PE- oder laminiertes Aluminiummaterial mit Sd > 10 m ist für Haltbarkeit > 25 Jahre zertifiziert, altert nicht und gibt keine Chemikalien ab. Neofort BIZ verwendet Dampfsperrband in allen Premium-Montagen und empfiehlt das vollständige 3-Schicht-System: Butylband außen + PUR-Schaum + Dampfsperrband innen — das einzige System, das Luftdichtheit Klasse 4 gemäß RAL garantiert.',
      fr:'Le ruban intérieur pare-vapeur est le composant Sd > 10 m du système RAL à 3 couches, placé sur la face intérieure du joint pour empêcher la vapeur chaude intérieure de migrer vers le mur et de condenser dans la zone d\'isolation. La différence essentielle avec un simple frein-vapeur (Sd 1–5 m) est que la barrière à Sd > 10 m bloque complètement la migration de vapeur — elle ne la réduit pas, elle l\'élimine — garantissant qu\'aucune humidité de l\'intérieur de la maison ne peut atteindre la structure murale par le joint de montage de la fenêtre. Cela est directement lié à l\'absence de moisissure noire dans les coins des fenêtres, le problème qui affecte des millions de maisons roumaines et qui est causé non pas par la fenêtre elle-même, mais par l\'absence d\'étanchéification correcte du joint de montage. Le matériau PE ou aluminium laminé avec Sd > 10 m est certifié pour une durabilité > 25 ans, ne vieillit pas et n\'émet pas de produits chimiques. Neofort BIZ utilise le ruban pare-vapeur dans toutes les poses premium et recommande le système complet à 3 couches : ruban butylique extérieur + mousse PUR + ruban pare-vapeur intérieur — le seul système qui garantit la Classe 4 d\'étanchéité à l\'air selon RAL.',
      es:'La cinta de sellado barrera de vapor interior es el componente Sd > 10 m del sistema RAL de 3 capas, colocada en la cara interior de la junta para impedir que el vapor cálido interior migre hacia el muro y condense en la zona de aislamiento. La diferencia esencial con un simple freno de vapor (Sd 1–5 m) es que la barrera con Sd > 10 m bloquea completamente la migración de vapor — no la reduce, la elimina — garantizando que ninguna humedad del interior de la vivienda pueda llegar a la estructura del muro a través de la junta de instalación de la ventana. Esto está directamente relacionado con la ausencia de moho negro en las esquinas de las ventanas, el problema que afecta a millones de hogares rumanos y que es causado no por la ventana en sí, sino por la falta de un sellado correcto de la junta de instalación. El material PE o aluminio laminado con Sd > 10 m está certificado para una durabilidad > 25 años, no envejece y no emite productos químicos. Neofort BIZ utiliza la cinta barrera de vapor en todas las instalaciones premium y recomienda el sistema completo de 3 capas: cinta butílica exterior + espuma PUR + cinta barrera de vapor interior — el único sistema que garantiza la Clase 4 de hermeticidad según RAL.',
      it:'Il nastro di tenuta barriera al vapore interno è il componente Sd > 10 m del sistema RAL a 3 strati, posizionato sulla faccia interna del giunto per impedire al vapore caldo interno di migrare verso il muro e condensare nella zona di isolamento. La differenza essenziale rispetto a un semplice freno al vapore (Sd 1–5 m) è che la barriera con Sd > 10 m blocca completamente la migrazione del vapore — non la riduce, la elimina — garantendo che nessuna umidità dall\'interno dell\'abitazione possa raggiungere la struttura del muro attraverso il giunto di installazione della finestra. Questo è direttamente legato all\'assenza di muffa nera negli angoli delle finestre, il problema che affligge milioni di abitazioni rumene e che è causato non dalla finestra stessa, ma dalla mancanza di una corretta sigillatura del giunto di installazione. Il materiale PE o alluminio laminato con Sd > 10 m è certificato per una durata > 25 anni, non invecchia e non emette sostanze chimiche. Neofort BIZ utilizza il nastro barriera al vapore in tutte le installazioni premium e raccomanda il sistema completo a 3 strati: nastro butilico esterno + schiuma PUR + nastro barriera al vapore interno — l\'unico sistema che garantisce la Classe 4 di ermeticità secondo RAL.',
    },
  },

  'bagheta-warm-edge-thermo': {
    img: '/accessories/bagheta-warm-edge.avif',
    color: '#162d47',
    category: { ro:'Sisteme nZEB', en:'nZEB Systems', de:'nZEB-Systeme', fr:'Systèmes nZEB', es:'Sistemas nZEB', it:'Sistemi nZEB' },
    serie: { ro:'Geam Termoizolator', en:'Thermal Glazing', de:'Wärmeschutzverglasung', fr:'Vitrage Thermique', es:'Vidrio Térmico', it:'Vetro Termoisolante' },
    breadcrumb_parent_href: '/sisteme-nzeb',
    breadcrumb_parent: { ro:'Sisteme nZEB', en:'nZEB Systems', de:'nZEB-Systeme', fr:'Systèmes nZEB', es:'Sistemas nZEB', it:'Sistemi nZEB' },
    name: {
      ro:'Baghetă Warm Edge Thermo – Distanțier Termic Geam, λ = 0,14 W/mK, Certificat Passive House',
      en:'Warm Edge Thermo Spacer – Glass Thermal Spacer, λ = 0.14 W/mK, Passive House Certified',
      de:'Warm Edge Thermo Abstandhalter – Glas-Wärmedämmabstandhalter, λ = 0,14 W/mK, Passivhaus-zertifiziert',
      fr:'Espaceur Warm Edge Thermo – Espaceur Thermique Vitrage, λ = 0,14 W/mK, Certifié Maison Passive',
      es:'Separador Warm Edge Thermo – Separador Térmico Vidrio, λ = 0,14 W/mK, Certificado Casa Pasiva',
      it:'Distanziale Warm Edge Thermo – Distanziale Termico Vetro, λ = 0,14 W/mK, Certificato Passive House',
    },
    tagline: {
      ro:'Distanțierul termic cu λ = 0,14 W/mK reduce puntea termică la marginea geamului cu 60% față de aluminiu clasic (λ = 160 W/mK). Temperatura marginii geamului +4–6°C mai mare — fără condens lângă ramă.',
      en:'Thermal spacer with λ = 0.14 W/mK reduces glass edge thermal bridge by 60% vs. classic aluminium (λ = 160 W/mK). Glass edge temperature +4–6°C higher — no condensation near frame.',
      de:'Wärmedämmabstandhalter mit λ = 0,14 W/mK reduziert Glas-Randwärmebrücke um 60% ggü. klassischem Aluminium (λ = 160 W/mK). Glasrandtemperatur +4–6°C höher — kein Kondensat nahe Rahmen.',
      fr:'Espaceur thermique λ = 0,14 W/mK réduit le pont thermique au bord du verre de 60% vs. aluminium classique (λ = 160 W/mK). Température bord verre +4–6°C plus haute — pas de condensation près du cadre.',
      es:'Separador térmico λ = 0,14 W/mK reduce el puente térmico al borde del vidrio en 60% vs. aluminio clásico (λ = 160 W/mK). Temperatura borde vidrio +4–6°C más alta — sin condensación cerca del marco.',
      it:'Distanziale termico λ = 0,14 W/mK riduce il ponte termico al bordo del vetro del 60% vs. alluminio classico (λ = 160 W/mK). Temperatura bordo vetro +4–6°C più alta — nessuna condensa vicino al telaio.',
    },
    specs: {
      ro:[['Material','Compozit cu fibră de sticlă (Swisspacer) / TGI / Thermix'],['Conductivitate termică λ','0,14 W/mK (Swisspacer Ultimate)'],['Comparativ aluminiu','λ = 160 W/mK — de 1000× mai mare'],['Grosimi disponibile','6 – 32 mm'],['Culori','Argintiu, negru mat, bronz, alb'],['Standard','EN 1279 — geam termoizolator'],['Certificare','Passive House Institut Darmstadt'],['Compatibil','Geam dublu și triplu'],['Aplicare','În fabricarea geamului termoizolator'],],
      en:[['Material','Glass-fibre composite (Swisspacer) / TGI / Thermix'],['Thermal conductivity λ','0.14 W/mK (Swisspacer Ultimate)'],['vs. aluminium','λ = 160 W/mK — 1000× higher'],['Available thicknesses','6 – 32 mm'],['Colours','Silver, matt black, bronze, white'],['Standard','EN 1279 — insulating glass'],['Certification','Passive House Institut Darmstadt'],['Compatible','Double and triple glazing'],['Application','In insulating glass manufacturing'],],
      de:[['Material','Glasfaserverbund (Swisspacer) / TGI / Thermix'],['Wärmeleitfähigkeit λ','0,14 W/mK (Swisspacer Ultimate)'],['vs. Aluminium','λ = 160 W/mK — 1000× höher'],['Verfügbare Dicken','6 – 32 mm'],['Farben','Silber, mattschwarz, bronze, weiß'],['Norm','EN 1279 — Isolierglas'],['Zertifizierung','Passivhaus Institut Darmstadt'],['Kompatibel','Zwei- und Dreifachverglasung'],['Anwendung','In der Isolierglasherstellung'],],
      fr:[['Matériau','Composite fibre de verre (Swisspacer) / TGI / Thermix'],['Conductivité thermique λ','0,14 W/mK (Swisspacer Ultimate)'],['vs. aluminium','λ = 160 W/mK — 1000× plus élevé'],['Épaisseurs dispo.','6 – 32 mm'],['Couleurs','Argent, noir mat, bronze, blanc'],['Norme','EN 1279 — vitrage isolant'],['Certification','Passivhaus Institut Darmstadt'],['Compatible','Double et triple vitrage'],['Application','Dans la fabrication du verre isolant'],],
      es:[['Material','Composite con fibra de vidrio (Swisspacer) / TGI / Thermix'],['Conductividad térmica λ','0,14 W/mK (Swisspacer Ultimate)'],['vs. aluminio','λ = 160 W/mK — 1000× más alto'],['Espesores disponibles','6 – 32 mm'],['Colores','Plata, negro mate, bronce, blanco'],['Norma','EN 1279 — vidrio aislante'],['Certificación','Passivhaus Institut Darmstadt'],['Compatible','Doble y triple vidrio'],['Aplicación','En la fabricación del vidrio aislante'],],
      it:[['Materiale','Composito in fibra di vetro (Swisspacer) / TGI / Thermix'],['Conducibilità termica λ','0,14 W/mK (Swisspacer Ultimate)'],['vs. alluminio','λ = 160 W/mK — 1000× più alto'],['Spessori disponibili','6 – 32 mm'],['Colori','Argento, nero opaco, bronzo, bianco'],['Norma','EN 1279 — vetro isolante'],['Certificazione','Passivhaus Institut Darmstadt'],['Compatibile','Vetro doppio e triplo'],['Applicazione','Nella produzione del vetro isolante'],],
    },
    perf: {
      ro:[['Conductivitate λ','0,14 W/mK (vs. alu 160 W/mK)'],['Reducere punte termică bord','≥ 60% față de distanțierul clasic'],['Temperatura marginii geamului','+4–6°C față de distanțier aluminiu'],['Pragul de apariție a condensului','Deplasat cu 4–6°C mai jos'],['Certificare Passive House','Da — obligatoriu pentru PH'],['Standard','EN 1279 · EN 673'],],
      en:[['Conductivity λ','0.14 W/mK (vs. alu 160 W/mK)'],['Edge thermal bridge reduction','≥ 60% vs. classic spacer'],['Glass edge temperature','+4–6°C vs. aluminium spacer'],['Condensation onset threshold','Shifted 4–6°C lower'],['Passive House certified','Yes — mandatory for PH'],['Standard','EN 1279 · EN 673'],],
      de:[['Leitfähigkeit λ','0,14 W/mK (vs. Alu 160 W/mK)'],['Randwärmebrückenreduktion','≥ 60% ggü. klassischem Abstandhalter'],['Glasrandtemperatur','+4–6°C ggü. Aluminiumabstandhalter'],['Kondensationsschwellenwert','Um 4–6°C verschoben'],['Passivhaus-zertifiziert','Ja — Pflicht für PH'],['Norm','EN 1279 · EN 673'],],
      fr:[['Conductivité λ','0,14 W/mK (vs. alu 160 W/mK)'],['Réduction pont bord','≥ 60% vs. espaceur classique'],['Temp. bord verre','+4–6°C vs. espaceur alu'],['Seuil condensation','Décalé de 4–6°C vers le bas'],['Certifié Maison Passive','Oui — obligatoire pour MHP'],['Norme','EN 1279 · EN 673'],],
      es:[['Conductividad λ','0,14 W/mK (vs. alu 160 W/mK)'],['Reducción puente borde','≥ 60% vs. separador clásico'],['Temp. borde vidrio','+4–6°C vs. separador alu'],['Umbral condensación','Desplazado 4–6°C hacia abajo'],['Certificado Casa Pasiva','Sí — obligatorio para CP'],['Norma','EN 1279 · EN 673'],],
      it:[['Conducibilità λ','0,14 W/mK (vs. alu 160 W/mK)'],['Riduzione ponte bordo','≥ 60% vs. distanziale classico'],['Temp. bordo vetro','+4–6°C vs. distanziale alu'],['Soglia condensa','Spostata di 4–6°C verso il basso'],['Certificato Passive House','Sì — obbligatorio per PH'],['Norma','EN 1279 · EN 673'],],
    },
    advantages: {
      ro:['Reduce puntea termică la marginea geamului cu ≥ 60% — elimină condensul vizibil pe geam lângă ramă, problema estetică și igienică cea mai frecventă','Temperatura marginii geamului +4–6°C mai mare — condensul apare la temperaturi exterioare cu 4–6°C mai scăzute, deci practic dispare în climatul românesc','Obligatoriu pentru certificarea Passive House — fără Warm Edge, fereastra nu poate fi certificată Passive House indiferent de profilul utilizat','Disponibil în negru mat — se asortează perfect cu feroneria neagră și profilul antracit, aspectul dorit în arhitectura contemporană','Ψ ≈ 0,03 W/mK la marginea geamului cu Swisspacer Ultimate, față de circa 0,08 W/mK cu distanțier din aluminiu (ramă PVC, geam dublu)','Opțiune la cerere, cu cost separat în ofertă — circa 90% dintre clienții Neofort BIZ aleg geamul cu Warm Edge'],
      en:['Reduces glass edge thermal bridge by ≥ 60% — eliminates visible condensation on glass near frame, the most common aesthetic and hygienic issue','Glass edge temperature +4–6°C higher — condensation appears at outdoor temperatures 4–6°C lower, practically disappearing in Romanian climate','Mandatory for Passive House certification — without Warm Edge, window cannot be Passive House certified regardless of profile used','Available in matt black — perfectly matches black hardware and anthracite profile, the look desired in contemporary architecture','Ψ ≈ 0.03 W/mK at the glass edge with Swisspacer Ultimate, versus about 0.08 W/mK with an aluminium spacer (PVC frame, double glazing)','Optional on request, priced separately in the quote — about 90% of Neofort BIZ customers choose Warm Edge glazing'],
      de:['Reduziert Glas-Randwärmebrücke um ≥ 60% — eliminiert sichtbares Kondensat am Glas nahe Rahmen, das häufigste ästhetische und hygienische Problem','Glasrandtemperatur +4–6°C höher — Kondensat tritt bei Außentemperaturen 4–6°C niedriger auf, praktisch verschwunden im rumänischen Klima','Pflicht für Passivhauseinstufung — ohne Warm Edge kann das Fenster unabhängig vom verwendeten Profil nicht als Passivhaus eingestuft werden','In Mattschwarz erhältlich — passt perfekt zu schwarzen Beschlägen und Anthrazit-Profil, das in zeitgenössischer Architektur gewünschte Aussehen','Ψ ≈ 0,03 W/mK am Glasrand mit Swisspacer Ultimate, gegenüber etwa 0,08 W/mK mit Aluminium-Abstandhalter (PVC-Rahmen, Zweifachverglasung)','Option auf Anfrage, im Angebot separat berechnet — etwa 90 % der Neofort BIZ Kunden wählen Glas mit Warm Edge'],
      fr:['Réduit le pont thermique au bord du verre de ≥ 60% — élimine la condensation visible sur le verre près du cadre, le problème esthétique et hygiénique le plus fréquent','Température du bord du verre +4–6°C plus haute — la condensation apparaît à des températures extérieures 4–6°C plus basses, pratiquement disparue dans le climat roumain','Obligatoire pour la certification Maison Passive — sans Warm Edge, la fenêtre ne peut pas être certifiée Maison Passive quel que soit le profil utilisé','Disponible en noir mat — s\'assortit parfaitement aux ferrures noires et au profil anthracite, l\'aspect désiré en architecture contemporaine','Ψ ≈ 0,03 W/mK en bord de vitrage avec Swisspacer Ultimate, contre environ 0,08 W/mK avec un intercalaire en aluminium (cadre PVC, double vitrage)','Option sur demande, chiffrée à part dans le devis — environ 90 % des clients Neofort BIZ choisissent le vitrage Warm Edge'],
      es:['Reduce el puente térmico al borde del vidrio en ≥ 60% — elimina la condensación visible en el vidrio cerca del marco, el problema estético e higiénico más frecuente','Temperatura del borde del vidrio +4–6°C más alta — la condensación aparece a temperaturas exteriores 4–6°C más bajas, prácticamente desaparecida en el clima rumano','Obligatorio para la certificación Casa Pasiva — sin Warm Edge, la ventana no puede certificarse como Casa Pasiva independientemente del perfil usado','Disponible en negro mate — combina perfectamente con herraje negro y perfil antracita, el aspecto deseado en arquitectura contemporánea','Ψ ≈ 0,03 W/mK en el borde del vidrio con Swisspacer Ultimate, frente a unos 0,08 W/mK con separador de aluminio (marco PVC, doble vidrio)','Opción bajo pedido, presupuestada aparte — alrededor del 90 % de los clientes de Neofort BIZ eligen vidrio con Warm Edge'],
      it:['Riduce il ponte termico al bordo del vetro di ≥ 60% — elimina la condensa visibile sul vetro vicino al telaio, il problema estetico e igienico più frequente','Temperatura del bordo del vetro +4–6°C più alta — la condensa appare a temperature esterne 4–6°C più basse, praticamente scomparsa nel clima rumeno','Obbligatorio per la certificazione Passive House — senza Warm Edge, la finestra non può essere certificata Passive House indipendentemente dal profilo usato','Disponibile in nero opaco — si abbina perfettamente alla ferramenta nera e al profilo antracite, l\'aspetto desiderato nell\'architettura contemporanea','Ψ ≈ 0,03 W/mK sul bordo del vetro con Swisspacer Ultimate, contro circa 0,08 W/mK con distanziale in alluminio (telaio PVC, vetro doppio)','Opzione su richiesta, quotata a parte nel preventivo — circa il 90% dei clienti Neofort BIZ sceglie il vetro con Warm Edge'],
    },
    seo_text: {
      ro:'Bagheta Warm Edge este componenta internă a pachetului termoizolator al geamului, responsabilă de izolarea termică a cavității marginale dintre foile de sticlă — zona cea mai vulnerabilă la punți termice în ansamblul ferestrei. Distanțierul clasic din aluminiu are conductivitate termică λ = 160 W/mK, de circa 1000 de ori mai mare decât un distanțier Swisspacer Ultimate (λ = 0,14 W/mK). Consecința directă și vizibilă este că temperatura marginii interioare a geamului crește cu 4–6°C față de geamul cu distanțier clasic, deplasând pragul de condens cu câteva grade sub zero și eliminând banda de condens vizibilă lângă ramă în nopțile de iarnă. Geamul cu Warm Edge este obligatoriu pentru certificarea Passive House — Passivhaus Institut Darmstadt certifică distanțierele ca componente separate — și recomandat pentru orice fereastră cu profil BluEvolution 92, Alumil Supreme sau orice alt sistem premium. Neofort BIZ montează exclusiv geam termoizolator SGG Planitherm cu distanțier Warm Edge la alegere — Swisspacer Ultimate, TGI sau Thermix TX.N — la cerere, cu cost separat în ofertă; circa 90% dintre clienți aleg această soluție.',
      en:'The Warm Edge spacer is the internal component of the insulating glass package, responsible for the thermal insulation of the marginal cavity between the glass panes — the most vulnerable zone to thermal bridges in the window assembly. The classic aluminium spacer has thermal conductivity λ = 160 W/mK, approximately 1000 times greater than a Swisspacer Ultimate spacer (λ = 0.14 W/mK). The direct and visible consequence is that the inner edge temperature of the glass increases by 4–6°C compared to glass with a classic spacer, shifting the condensation threshold several degrees below zero and eliminating the visible condensation strip near the frame on winter nights. Warm Edge glass is mandatory for Passive House certification — Passivhaus Institut Darmstadt certifies spacers as separate components — and recommended for any window with BluEvolution 92, Alumil Supreme or any other premium system profile. Neofort BIZ exclusively installs SGG Planitherm insulating glass with Warm Edge spacer of choice — Swisspacer Ultimate, TGI or Thermix TX.N — on request, priced separately in the quote; about 90% of customers choose this solution.',
      de:'Der Warm Edge Abstandhalter ist das innere Bauteil des Isolierglaspakets, das für die Wärmedämmung des marginalen Hohlraums zwischen den Glasscheiben verantwortlich ist — die anfälligste Zone für Wärmebrücken im Fensteraufbau. Der klassische Aluminiumabstandhalter hat eine Wärmeleitfähigkeit λ = 160 W/mK, etwa 1000-mal größer als ein Swisspacer-Ultimate-Abstandhalter (λ = 0,14 W/mK). Die direkte und sichtbare Folge ist, dass die Innenrandtemperatur des Glases um 4–6°C gegenüber Glas mit klassischem Abstandhalter steigt, den Kondensationsschwellenwert um mehrere Grad unter Null verschiebt und den sichtbaren Kondensatstreifen nahe dem Rahmen an Winternächten eliminiert. Warm Edge-Glas ist für die Passivhauszertifizierung obligatorisch — das Passivhaus Institut Darmstadt zertifiziert Abstandhalter als eigene Komponenten — und für jedes Fenster mit BluEvolution 92, Alumil Supreme oder einem anderen Premium-Systemprofil empfohlen. Neofort BIZ montiert ausschließlich SGG Planitherm Isolierglas mit Warm Edge-Abstandhalter nach Wahl — Swisspacer Ultimate, TGI oder Thermix TX.N — auf Anfrage, im Angebot separat berechnet; etwa 90 % der Kunden entscheiden sich dafür.',
      fr:'L\'espaceur Warm Edge est le composant interne du package de vitrage isolant, responsable de l\'isolation thermique de la cavité marginale entre les vitres — la zone la plus vulnérable aux ponts thermiques dans l\'ensemble de la fenêtre. L\'espaceur aluminium classique a une conductivité thermique λ = 160 W/mK, environ 1000 fois supérieure à un espaceur Swisspacer Ultimate (λ = 0,14 W/mK). La conséquence directe et visible est que la température du bord intérieur du verre augmente de 4–6°C par rapport au verre avec espaceur classique, déplaçant le seuil de condensation de plusieurs degrés sous zéro et éliminant la bande de condensation visible près du cadre les nuits d\'hiver. Le verre Warm Edge est obligatoire pour la certification Maison Passive — le Passivhaus Institut Darmstadt certifie les espaceurs comme composants à part — et recommandé pour toute fenêtre avec profil BluEvolution 92, Alumil Supreme ou tout autre système premium. Neofort BIZ installe exclusivement du vitrage isolant SGG Planitherm avec espaceur Warm Edge au choix — Swisspacer Ultimate, TGI ou Thermix TX.N — sur demande, chiffré à part dans le devis ; environ 90 % des clients choisissent cette solution.',
      es:'El separador Warm Edge es el componente interno del paquete de vidrio aislante, responsable del aislamiento térmico de la cavidad marginal entre los vidrios — la zona más vulnerable a los puentes térmicos en el conjunto de la ventana. El separador de aluminio clásico tiene conductividad térmica λ = 160 W/mK, aproximadamente 1000 veces mayor que un separador Swisspacer Ultimate (λ = 0,14 W/mK). La consecuencia directa y visible es que la temperatura del borde interior del vidrio aumenta 4–6°C en comparación con el vidrio con separador clásico, desplazando el umbral de condensación varios grados por debajo de cero y eliminando la banda de condensación visible cerca del marco en las noches de invierno. El vidrio Warm Edge es obligatorio para la certificación Casa Pasiva — el Passivhaus Institut Darmstadt certifica los separadores como componentes propios — y recomendado para cualquier ventana con perfil BluEvolution 92, Alumil Supreme o cualquier otro sistema premium. Neofort BIZ instala exclusivamente vidrio aislante SGG Planitherm con separador Warm Edge a elegir — Swisspacer Ultimate, TGI o Thermix TX.N — bajo pedido, presupuestado aparte; alrededor del 90 % de los clientes elige esta solución.',
      it:'Il distanziale Warm Edge è il componente interno del pacchetto di vetro isolante, responsabile dell\'isolamento termico della cavità marginale tra i vetri — la zona più vulnerabile ai ponti termici nell\'insieme della finestra. Il distanziale in alluminio classico ha conducibilità termica λ = 160 W/mK, circa 1000 volte maggiore di un distanziale Swisspacer Ultimate (λ = 0,14 W/mK). La conseguenza diretta e visibile è che la temperatura del bordo interno del vetro aumenta di 4–6°C rispetto al vetro con distanziale classico, spostando la soglia di condensa di diversi gradi sotto zero ed eliminando la banda di condensa visibile vicino al telaio nelle notti invernali. Il vetro Warm Edge è obbligatorio per la certificazione Passive House — il Passivhaus Institut Darmstadt certifica i distanziali come componenti a sé — e raccomandato per qualsiasi finestra con profilo BluEvolution 92, Alumil Supreme o qualsiasi altro sistema premium. Neofort BIZ installa esclusivamente vetro isolante SGG Planitherm con distanziale Warm Edge a scelta — Swisspacer Ultimate, TGI o Thermix TX.N — su richiesta, quotato a parte nel preventivo; circa il 90% dei clienti sceglie questa soluzione.',
    },
  },

  'geamuri-termopan-saint-gobain': {
    img: '/accessories/geam-termopan-saint-gobain.avif',
    color: '#162d47',
    category: { ro:'Sisteme nZEB', en:'nZEB Systems', de:'nZEB-Systeme', fr:'Systèmes nZEB', es:'Sistemas nZEB', it:'Sistemi nZEB' },
    serie: { ro:'Geam Saint-Gobain SGG', en:'Saint-Gobain SGG Glass', de:'Saint-Gobain SGG Glas', fr:'Verre Saint-Gobain SGG', es:'Vidrio Saint-Gobain SGG', it:'Vetro Saint-Gobain SGG' },
    breadcrumb_parent_href: '/sisteme-nzeb',
    breadcrumb_parent: { ro:'Sisteme nZEB', en:'nZEB Systems', de:'nZEB-Systeme', fr:'Systèmes nZEB', es:'Sistemas nZEB', it:'Sistemi nZEB' },
    name: {
      ro:'Geamuri Termopan Saint-Gobain SGG – Planitherm, Planistar SUN, Stadip SILENCE',
      en:'Saint-Gobain SGG Thermal Glass – Planitherm, Planistar SUN, Stadip SILENCE',
      de:'Saint-Gobain SGG Wärmeschutzisolierglas – Planitherm, Planistar SUN, Stadip SILENCE',
      fr:'Vitrage Isolant Saint-Gobain SGG – Planitherm, Planistar SUN, Stadip SILENCE',
      es:'Vidrio Aislante Saint-Gobain SGG – Planitherm, Planistar SUN, Stadip SILENCE',
      it:'Vetro Termoisolante Saint-Gobain SGG – Planitherm, Planistar SUN, Stadip SILENCE',
    },
    tagline: {
      ro:'Gamă completă geam termoizolator Saint-Gobain SGG — Planitherm pentru nZEB, Planistar SUN pentru control solar, Stadip SILENCE pentru fonoizolare. Ug până la 0,5 W/m²K.',
      en:'Complete Saint-Gobain SGG insulating glass range — Planitherm for nZEB, Planistar SUN for solar control, Stadip SILENCE for sound insulation. Ug down to 0.5 W/m²K.',
      de:'Komplette Saint-Gobain SGG Isolierglas-Reihe — Planitherm für nZEB, Planistar SUN für Sonnenschutz, Stadip SILENCE für Schalldämmung. Ug bis 0,5 W/m²K.',
      fr:'Gamme complète de vitrage isolant Saint-Gobain SGG — Planitherm pour nZEB, Planistar SUN pour contrôle solaire, Stadip SILENCE pour isolation phonique. Ug jusqu\'à 0,5 W/m²K.',
      es:'Gama completa de vidrio aislante Saint-Gobain SGG — Planitherm para nZEB, Planistar SUN para control solar, Stadip SILENCE para aislamiento acústico. Ug hasta 0,5 W/m²K.',
      it:'Gamma completa di vetro isolante Saint-Gobain SGG — Planitherm per nZEB, Planistar SUN per controllo solare, Stadip SILENCE per isolamento acustico. Ug fino a 0,5 W/m²K.',
    },
    specs: {
      ro:[['Planitherm XN','Low-e standard · Ug = 1,0 W/m²K (dublu)'],['Planitherm ONE','Ultra low-e · Ug = 0,7 W/m²K (triplu)'],['Planitherm 4S Evolution','4 Anotimpuri (4S) · Ug = 0,5 W/m²K (triplu)'],['Planistar SUN','Control solar + termoproptecție · g = 0,27–0,60'],['Stadip SILENCE','Fonoizolant laminat · Rw = 44–52 dB'],['Gyproc SGG Securit','Securit (călite) · impact rezistentă'],['Compatibil cu','Profile PVC și Aluminiu Neofort BIZ'],['Standard fabricare','EN 1279 · EN 673 · EN 12150'],],
      en:[['Planitherm XN','Standard low-e · Ug = 1.0 W/m²K (double)'],['Planitherm ONE','Ultra low-e · Ug = 0.7 W/m²K (triple)'],['Planitherm 4S Evolution','4 Seasons (4S) · Ug = 0.5 W/m²K (triple)'],['Planistar SUN','Solar control + thermal · g = 0.27–0.60'],['Stadip SILENCE','Laminated sound insulation · Rw = 44–52 dB'],['SGG Securit','Toughened · impact resistant'],['Compatible with','Neofort BIZ PVC and Aluminium profiles'],['Manufacturing standard','EN 1279 · EN 673 · EN 12150'],],
      de:[['Planitherm XN','Standard low-e · Ug = 1,0 W/m²K (zweifach)'],['Planitherm ONE','Ultra low-e · Ug = 0,7 W/m²K (dreifach)'],['Planitherm 4S Evolution','4 Jahreszeiten (4S) · Ug = 0,5 W/m²K (dreifach)'],['Planistar SUN','Sonnenschutzkontrolle · g = 0,27–0,60'],['Stadip SILENCE','Schallschutzlaminat · Rw = 44–52 dB'],['SGG Securit','Einscheibensicherheitsglas · schlagfest'],['Kompatibel mit','Neofort BIZ PVC und Aluminium'],['Fertigungsnorm','EN 1279 · EN 673 · EN 12150'],],
      fr:[['Planitherm XN','Low-e standard · Ug = 1,0 W/m²K (double)'],['Planitherm ONE','Ultra low-e · Ug = 0,7 W/m²K (triple)'],['Planitherm 4S Evolution','4 Saisons (4S) · Ug = 0,5 W/m²K (triple)'],['Planistar SUN','Contrôle solaire · g = 0,27–0,60'],['Stadip SILENCE','Phonique laminé · Rw = 44–52 dB'],['SGG Securit','Trempé · résistant aux impacts'],['Compatible avec','Profils PVC et Aluminium Neofort BIZ'],['Norme fabrication','EN 1279 · EN 673 · EN 12150'],],
      es:[['Planitherm XN','Low-e estándar · Ug = 1,0 W/m²K (doble)'],['Planitherm ONE','Ultra low-e · Ug = 0,7 W/m²K (triple)'],['Planitherm 4S Evolution','4 Estaciones (4S) · Ug = 0,5 W/m²K (triple)'],['Planistar SUN','Control solar · g = 0,27–0,60'],['Stadip SILENCE','Fonoaislante laminado · Rw = 44–52 dB'],['SGG Securit','Templado · resistente impactos'],['Compatible con','Perfiles PVC y Aluminio Neofort BIZ'],['Norma fabricación','EN 1279 · EN 673 · EN 12150'],],
      it:[['Planitherm XN','Low-e standard · Ug = 1,0 W/m²K (doppio)'],['Planitherm ONE','Ultra low-e · Ug = 0,7 W/m²K (triplo)'],['Planitherm 4S Evolution','4 Stagioni (4S) · Ug = 0,5 W/m²K (triplo)'],['Planistar SUN','Controllo solare · g = 0,27–0,60'],['Stadip SILENCE','Fonoisolante laminato · Rw = 44–52 dB'],['SGG Securit','Temperato · resistente impatti'],['Compatibile con','Profili PVC e Alluminio Neofort BIZ'],['Norma produzione','EN 1279 · EN 673 · EN 12150'],],
    },
    perf: {
      ro:[['Ug minim (Planitherm 4S — 4 Anotimpuri)','0,5 W/m²K (triplu + Warm Edge)'],['Ug standard nZEB (Planitherm ONE)','0,7 W/m²K (triplu)'],['Ug economic (Planitherm XN dublu)','1,0 W/m²K'],['Control solar g Planistar SUN','0,27 – 0,60 (în funcție de nuanță)'],['Fonoizolare Stadip SILENCE','Rw = 44 – 52 dB'],['Compatibil nZEB','Da — obligatoriu Ug ≤ 0,7 W/m²K'],],
      en:[['Min Ug (Planitherm 4S — 4 Seasons)','0.5 W/m²K (triple + Warm Edge)'],['Standard nZEB Ug (Planitherm ONE)','0.7 W/m²K (triple)'],['Economic Ug (Planitherm XN double)','1.0 W/m²K'],['Solar control g Planistar SUN','0.27 – 0.60 (depending on tint)'],['Sound insulation Stadip SILENCE','Rw = 44 – 52 dB'],['nZEB compatible','Yes — required Ug ≤ 0.7 W/m²K'],],
      de:[['Min. Ug (Planitherm 4S — 4 Jahreszeiten)','0,5 W/m²K (dreifach + Warm Edge)'],['Standard-nZEB-Ug (Planitherm ONE)','0,7 W/m²K (dreifach)'],['Wirtschaftlicher Ug (Planitherm XN)','1,0 W/m²K (zweifach)'],['Sonnenschutz g Planistar SUN','0,27 – 0,60 (je nach Tönung)'],['Schalldämmung Stadip SILENCE','Rw = 44 – 52 dB'],['nZEB-kompatibel','Ja — Pflicht Ug ≤ 0,7 W/m²K'],],
      fr:[['Ug min (Planitherm 4S — 4 Saisons)','0,5 W/m²K (triple + Warm Edge)'],['Ug nZEB standard (Planitherm ONE)','0,7 W/m²K (triple)'],['Ug économique (Planitherm XN)','1,0 W/m²K (double)'],['Contrôle solaire g Planistar SUN','0,27 – 0,60 (selon teinte)'],['Phonique Stadip SILENCE','Rw = 44 – 52 dB'],['Compatible nZEB','Oui — requis Ug ≤ 0,7 W/m²K'],],
      es:[['Ug mín (Planitherm 4S — 4 Estaciones)','0,5 W/m²K (triple + Warm Edge)'],['Ug nZEB est. (Planitherm ONE)','0,7 W/m²K (triple)'],['Ug económico (Planitherm XN)','1,0 W/m²K (doble)'],['Control solar g Planistar SUN','0,27 – 0,60 (según tono)'],['Acústico Stadip SILENCE','Rw = 44 – 52 dB'],['Compatible nZEB','Sí — requi. Ug ≤ 0,7 W/m²K'],],
      it:[['Ug min (Planitherm 4S — 4 Stagioni)','0,5 W/m²K (triplo + Warm Edge)'],['Ug nZEB standard (Planitherm ONE)','0,7 W/m²K (triplo)'],['Ug economico (Planitherm XN)','1,0 W/m²K (doppio)'],['Controllo solare g Planistar SUN','0,27 – 0,60 (a seconda tonalità)'],['Acustico Stadip SILENCE','Rw = 44 – 52 dB'],['Compatible nZEB','Sì — richiesto Ug ≤ 0,7 W/m²K'],],
    },
    advantages: {
      ro:['Planitherm 4S Evolution — Ug = 0,5 W/m²K (4 Anotimpuri, Four Seasons), cel mai performant geam termoizolator din gama SGG, depășind standardele Passive House','Planistar SUN — combină protecția termică (Ug = 1,0 W/m²K dublu) cu controlul solar (g = 0,27–0,60) pentru fațadele sud/vest expuse la supraîncălzire vara','Stadip SILENCE — geam laminat cu folie acustică PVB, Rw = 44–52 dB, soluția pentru locuințele expuse la trafic urban, căi ferate sau zone industriale','Gamă completă SGG — un singur furnizor pentru toate cerințele: termic, solar, fonic, securitate, compatibil cu orice profil','Produs francez Saint-Gobain — unul din cei mai mari producători mondiali de sticlă, standarde EN 1279, garanție de producție','Warm Edge la cerere — distanțierul cald se ofertează separat, iar circa 90% dintre clienții Neofort BIZ îl aleg'],
      en:['Planitherm 4S Evolution — Ug = 0.5 W/m²K, 4 Seasons (4S) — the highest-performance insulating glass in the SGG range, exceeding Passive House standards','Planistar SUN — combines thermal protection (Ug = 1.0 W/m²K double) with solar control (g = 0.27–0.60) for south/west facades exposed to summer overheating','Stadip SILENCE — laminated glass with acoustic PVB film, Rw = 44–52 dB, the solution for homes exposed to urban traffic, railways or industrial areas','Complete SGG range — single supplier for all requirements: thermal, solar, acoustic, security, compatible with any profile','French product Saint-Gobain — one of the world\'s largest glass manufacturers, EN 1279 standards, production warranty','Warm Edge on request — the warm spacer is quoted separately, and about 90% of Neofort BIZ customers choose it'],
      de:['Planitherm 4S Evolution — Ug = 0,5 W/m²K (Four Seasons, 4 Low-e-Beschichtungen), das leistungsfähigste Isolierglas der SGG-Reihe, übertrifft Passivhaus-Standards','Planistar SUN — kombiniert Wärmeschutz (Ug = 1,0 W/m²K zweifach) mit Sonnenschutz (g = 0,27–0,60) für Süd-/Westfassaden mit sommerlicher Überhitzung','Stadip SILENCE — Verbundglas mit Schallschutz-PVB-Folie, Rw = 44–52 dB, die Lösung für Häuser mit Stadtverkehr, Eisenbahnen oder Industriegebieten','Komplette SGG-Reihe — ein einziger Lieferant für alle Anforderungen: thermisch, solar, akustisch, Sicherheit, kompatibel mit jedem Profil','Französisches Produkt Saint-Gobain — einer der weltweit größten Glashersteller, EN 1279 Standards, Produktionsgarantie','Warm Edge auf Anfrage — der warme Abstandhalter wird separat angeboten, etwa 90 % der Neofort BIZ Kunden wählen ihn'],
      fr:['Planitherm 4S Evolution — Ug = 0,5 W/m²K (Four Seasons, 4 revêtements Low-e), le vitrage isolant le plus performant de la gamme SGG, dépassant les normes Maison Passive','Planistar SUN — combine protection thermique (Ug = 1,0 W/m²K double) avec contrôle solaire (g = 0,27–0,60) pour façades sud/ouest exposées à la surchauffe estivale','Stadip SILENCE — vitrage feuilleté avec film acoustique PVB, Rw = 44–52 dB, la solution pour logements exposés au trafic urbain, voies ferrées ou zones industrielles','Gamme SGG complète — fournisseur unique pour toutes les exigences : thermique, solaire, phonique, sécurité, compatible tout profil','Produit français Saint-Gobain — l\'un des plus grands fabricants mondiaux de verre, normes EN 1279, garantie de production','Warm Edge sur demande — l’intercalaire chaud est chiffré à part, et environ 90 % des clients Neofort BIZ le choisissent'],
      es:['Planitherm 4S Evolution — Ug = 0,5 W/m²K (Four Seasons, 4 recubrimientos Low-e), el vidrio aislante más eficiente de la gama SGG, superando los estándares Casa Pasiva','Planistar SUN — combina protección térmica (Ug = 1,0 W/m²K doble) con control solar (g = 0,27–0,60) para fachadas sur/oeste expuestas a sobrecalentamiento estival','Stadip SILENCE — vidrio laminado con película acústica PVB, Rw = 44–52 dB, la solución para viviendas expuestas al tráfico urbano, ferrocarriles o zonas industriales','Gama SGG completa — proveedor único para todos los requisitos: térmico, solar, acústico, seguridad, compatible con cualquier perfil','Producto francés Saint-Gobain — uno de los mayores fabricantes mundiales de vidrio, normas EN 1279, garantía de producción','Warm Edge bajo pedido — el separador cálido se presupuesta aparte y alrededor del 90 % de los clientes de Neofort BIZ lo elige'],
      it:['Planitherm 4S Evolution — Ug = 0,5 W/m²K (Four Seasons, 4 rivestimenti Low-e), il vetro isolante più performante della gamma SGG, superando gli standard Passive House','Planistar SUN — combina protezione termica (Ug = 1,0 W/m²K doppio) con controllo solare (g = 0,27–0,60) per facciate sud/ovest esposte al surriscaldamento estivo','Stadip SILENCE — vetro laminato con film acustico PVB, Rw = 44–52 dB, la soluzione per abitazioni esposte al traffico urbano, ferrovie o zone industriali','Gamma SGG completa — fornitore unico per tutti i requisiti: termico, solare, acustico, sicurezza, compatibile con qualsiasi profilo','Prodotto francese Saint-Gobain — uno dei maggiori produttori mondiali di vetro, standard EN 1279, garanzia di produzione','Warm Edge su richiesta — il distanziale caldo si quota a parte e circa il 90% dei clienti Neofort BIZ lo sceglie'],
    },
    seo_text: {
      ro:'Geamurile termoizolante Saint-Gobain SGG reprezintă standardul de calitate pe care Neofort BIZ îl utilizează în toate ferestrele livrate, acoperind întreaga gamă de cerințe termice, solare și fonice. Gama Planitherm este structurată pe 3 niveluri de performanță: Planitherm XN (Ug = 1,0 W/m²K, geam dublu, soluție economică), Planitherm ONE (Ug = 0,7 W/m²K, geam triplu, standard nZEB) și Planitherm 4S Evolution (Ug = 0,5 W/m²K, 4 Anotimpuri, standard Passive House). Planistar SUN combină funcția termică cu controlul solar, oferind factori de transparență g de la 0,27 (protecție solară maximă, ideal pentru fațade sudice) la 0,60 (transparență ridicată cu izolare termică), și este recomandat pentru orice fereastră cu orientare sudică sau vestică unde supraîncălzirea vara poate reduce confortul termic. Stadip SILENCE cu folie PVB acustică specială atinge Rw = 44–52 dB, depășind semnificativ un geam standard (Rw ≈ 28–32 dB) și este esențial pentru locuințele situate în zone cu nivel ridicat de zgomot. Toate geamurile SGG sunt produse conform EN 1279, cu gaz argon; distanțierul Warm Edge se montează la cerere, cu cost separat, și îl aleg circa 90% dintre clienții Neofort BIZ.',
      en:'Saint-Gobain SGG insulating glass represents the quality standard that Neofort BIZ uses in all delivered windows, covering the full range of thermal, solar and acoustic requirements. The Planitherm range is structured in 3 performance levels: Planitherm XN (Ug = 1.0 W/m²K, double glazing, economic solution), Planitherm ONE (Ug = 0.7 W/m²K, triple glazing, nZEB standard) and Planitherm 4S Evolution (Ug = 0.5 W/m²K, 4 Seasons, Passive House standard). Planistar SUN combines the thermal function with solar control, offering transparency factors g from 0.27 (maximum solar protection, ideal for south facades) to 0.60 (high transparency with thermal insulation), and is recommended for any window with south or west orientation where summer overheating can reduce thermal comfort. Stadip SILENCE with special acoustic PVB film achieves Rw = 44–52 dB, significantly exceeding a standard glass (Rw ≈ 28–32 dB) and is essential for homes located in high noise areas. All SGG glass is produced according to EN 1279 with argon gas; the Warm Edge spacer is fitted on request at a separate cost, and about 90% of Neofort BIZ customers choose it.',
      de:'Saint-Gobain SGG Isolierglas ist der Qualitätsstandard, den Neofort BIZ in allen gelieferten Fenstern verwendet und die gesamte Palette an Wärme-, Solar- und Schallanforderungen abdeckt. Die Planitherm-Reihe ist in 3 Leistungsstufen gegliedert: Planitherm XN (Ug = 1,0 W/m²K, Zweifachverglasung, wirtschaftliche Lösung), Planitherm ONE (Ug = 0,7 W/m²K, Dreifachverglasung, nZEB-Standard) und Planitherm 4S Evolution (Ug = 0,5 W/m²K, 4 Jahreszeiten, Passivhaus-Standard). Planistar SUN kombiniert die Wärmefunktion mit Sonnenschutzkontrolle und bietet Transparenzfaktoren g von 0,27 (maximaler Sonnenschutz, ideal für Südfassaden) bis 0,60 (hohe Transparenz mit Wärmedämmung) und wird für jedes Fenster mit Süd- oder Westausrichtung empfohlen, wo sommerliche Überhitzung den thermischen Komfort verringern kann. Stadip SILENCE mit spezieller Schallschutz-PVB-Folie erreicht Rw = 44–52 dB, deutlich überlegen gegenüber Standard-Glas (Rw ≈ 28–32 dB) und ist wesentlich für Häuser in lärmbelasteten Gebieten. Alle SGG-Gläser werden nach EN 1279 mit Argongas hergestellt; der Warm-Edge-Abstandhalter wird auf Anfrage gegen Aufpreis eingesetzt, und etwa 90 % der Neofort BIZ Kunden wählen ihn.',
      fr:'Le vitrage isolant Saint-Gobain SGG représente le standard de qualité que Neofort BIZ utilise dans toutes les fenêtres livrées, couvrant la gamme complète des exigences thermiques, solaires et acoustiques. La gamme Planitherm est structurée en 3 niveaux de performance: Planitherm XN (Ug = 1,0 W/m²K, double vitrage, solution économique), Planitherm ONE (Ug = 0,7 W/m²K, triple vitrage, standard nZEB) et Planitherm 4S Evolution (Ug = 0,5 W/m²K, 4 Saisons, standard Maison Passive). Planistar SUN combine la fonction thermique avec le contrôle solaire, offrant des facteurs de transparence g de 0,27 (protection solaire maximale, idéal pour façades sud) à 0,60 (haute transparence avec isolation thermique) et est recommandé pour toute fenêtre avec orientation sud ou ouest où la surchauffe estivale peut réduire le confort thermique. Stadip SILENCE avec film PVB acoustique spécial atteint Rw = 44–52 dB, dépassant significativement un verre standard (Rw ≈ 28–32 dB) et est essentiel pour les logements situés dans des zones à niveau de bruit élevé. Tous les verres SGG sont produits selon EN 1279 avec gaz argon ; l’espaceur Warm Edge est posé sur demande, avec un coût séparé, et environ 90 % des clients Neofort BIZ le choisissent.',
      es:'El vidrio aislante Saint-Gobain SGG representa el estándar de calidad que Neofort BIZ utiliza en todas las ventanas entregadas, cubriendo toda la gama de requisitos térmicos, solares y acústicos. La gama Planitherm está estructurada en 3 niveles de rendimiento: Planitherm XN (Ug = 1,0 W/m²K, doble vidrio, solución económica), Planitherm ONE (Ug = 0,7 W/m²K, triple vidrio, estándar nZEB) y Planitherm 4S Evolution (Ug = 0,5 W/m²K, 4 Estaciones, estándar Casa Pasiva). Planistar SUN combina la función térmica con el control solar, ofreciendo factores de transparencia g desde 0,27 (protección solar máxima, ideal para fachadas sur) hasta 0,60 (alta transparencia con aislamiento térmico) y se recomienda para cualquier ventana con orientación sur u oeste donde el sobrecalentamiento estival puede reducir el confort térmico. Stadip SILENCE con película PVB acústica especial alcanza Rw = 44–52 dB, superando significativamente un vidrio estándar (Rw ≈ 28–32 dB) y es esencial para las viviendas situadas en zonas con alto nivel de ruido. Todos los vidrios SGG se producen según EN 1279 con gas argón; el separador Warm Edge se monta bajo pedido, con coste aparte, y alrededor del 90 % de los clientes de Neofort BIZ lo elige.',
      it:'Il vetro isolante Saint-Gobain SGG rappresenta lo standard di qualità che Neofort BIZ utilizza in tutte le finestre consegnate, coprendo l\'intera gamma di requisiti termici, solari e acustici. La gamma Planitherm è strutturata in 3 livelli di prestazione: Planitherm XN (Ug = 1,0 W/m²K, doppio vetro, soluzione economica), Planitherm ONE (Ug = 0,7 W/m²K, triplo vetro, standard nZEB) e Planitherm 4S Evolution (Ug = 0,5 W/m²K, 4 Stagioni, standard Passive House). Planistar SUN combina la funzione termica con il controllo solare, offrendo fattori di trasparenza g da 0,27 (protezione solare massima, ideale per facciate sud) a 0,60 (alta trasparenza con isolamento termico) ed è raccomandato per qualsiasi finestra con orientamento sud o ovest dove il surriscaldamento estivo può ridurre il comfort termico. Stadip SILENCE con film PVB acustico speciale raggiunge Rw = 44–52 dB, superando significativamente un vetro standard (Rw ≈ 28–32 dB) ed è essenziale per le abitazioni situate in zone ad alto livello di rumore. Tutti i vetri SGG sono prodotti secondo EN 1279 con gas argon; il distanziale Warm Edge si monta su richiesta, con costo a parte, e circa il 90% dei clienti Neofort BIZ lo sceglie.',
    },
  },
};

const UI = {
  ro: { specs_title:'Specificații tehnice', perf_title:'Performanțe certificate', adv_title:'Avantaje principale', faq_title:'Întrebări frecvente', cta_h:'Solicitați ofertă pentru', cta_sub:'Consultanți disponibili Luni–Vineri, 10:00–18:00', cta_btn:'Cerere ofertă', cta_call:'Sună acum' },
  en: { specs_title:'Technical specifications', perf_title:'Certified performance', adv_title:'Key advantages', faq_title:'Frequently asked questions', cta_h:'Request quote for', cta_sub:'Consultants available Mon–Fri, 10:00–18:00', cta_btn:'Request quote', cta_call:'Call now' },
  de: { specs_title:'Technische Daten', perf_title:'Zertifizierte Leistungen', adv_title:'Hauptvorteile', faq_title:'Häufig gestellte Fragen', cta_h:'Angebot anfordern für', cta_sub:'Berater verfügbar Mo–Fr, 10:00–18:00', cta_btn:'Angebot anfordern', cta_call:'Anrufen' },
  fr: { specs_title:'Caractéristiques techniques', perf_title:'Performances certifiées', adv_title:'Avantages clés', faq_title:'Questions fréquentes', cta_h:'Demander un devis pour', cta_sub:'Conseillers disponibles Lun–Ven, 10h–18h', cta_btn:'Demander un devis', cta_call:'Appeler' },
  es: { specs_title:'Especificaciones técnicas', perf_title:'Rendimiento certificado', adv_title:'Ventajas clave', faq_title:'Preguntas frecuentes', cta_h:'Solicitar presupuesto para', cta_sub:'Consultores disponibles Lun–Vie, 10:00–18:00', cta_btn:'Pedir presupuesto', cta_call:'Llamar' },
  it: { specs_title:'Specifiche tecniche', perf_title:'Prestazioni certificate', adv_title:'Vantaggi principali', faq_title:'Domande frequenti', cta_h:'Richiedi preventivo per', cta_sub:'Consulenti disponibili Lun–Ven, 10:00–18:00', cta_btn:'Richiedi preventivo', cta_call:'Chiama ora' },
};

export async function generateStaticParams() {
  // v308: pe langa slug-ul tradus, se pregatesc la build si cheia interna
  // (canonical) si slug-ul RO pentru fiecare limba. next-intl rescrie adresa
  // tradusa catre cheia din i18n/routing.js, deci aceea e pagina ceruta efectiv.
  // Accesul direct la aceste forme ramane redirectionat 301 de middleware.
  const params = [];
  const seen = new Set();
  for (const locale of LOCALES)
    for (const [canonical, slugs] of Object.entries(SLUG_MAP))
      for (const slug of [slugs[locale] || canonical, canonical, slugs.ro || canonical]) {
        const k = locale + '|' + slug;
        if (!seen.has(k)) { seen.add(k); params.push({ locale, slug }); }
      }
  return params;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const canonical = REVERSE[slug] || slug;
  const product   = PRODUCTS[canonical];
  if (!product) return { title: 'Produs · Neofort BIZ' };
  const name      = product.name[locale] || product.name.ro;
  // v270: titlu <= 60 car. si descriere <= 150 car., fraza completa, din data/productMeta.js.
  const meta      = PRODUCT_META[canonical];
  const title     = meta?.title?.[locale] || `${name} · Neofort BIZ`;
  const desc      = meta?.desc?.[locale]  || (product.seo_text[locale] || product.seo_text.ro).slice(0, 160);
  const localSlug = SLUG_MAP[canonical]?.[locale] || slug;
  const altSlug   = (l) => SLUG_MAP[canonical]?.[l] || canonical;
  return {
    title,
    description: desc,
    keywords: `${name} · Neofort BIZ · tâmplărie PVC Salamander · aluminiu Alumil · București`,
    robots: { index:true, follow:true, googleBot:{ index:true, follow:true, 'max-image-preview':'large', 'max-snippet':-1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${(NZEB_SEG[locale]||'sisteme-nzeb')}/${localSlug}`,
      languages: Object.fromEntries([
        ...LOCALES.map(l => [l, `${BASE}/${l}/${(NZEB_SEG[l]||'sisteme-nzeb')}/${altSlug(l)}`]),
        ['x-default', `${BASE}/ro/${(NZEB_SEG['ro']||'sisteme-nzeb')}/${altSlug('ro')}`],
      ]),
    },
    openGraph: {
      type:'website', url:`${BASE}/${locale}/${(NZEB_SEG[locale]||'sisteme-nzeb')}/${localSlug}`,
      siteName:'Neofort BIZ', title, description: desc,
      images:[{ url:`${BASE}${product.img.replace('.avif','.jpg')}`, width:800, height:600, alt:name, type:'image/jpeg' }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title, description: desc, images:[{ url:`${BASE}${product.img.replace('.avif','.jpg')}`, width:800, height:600 }] },
  }
}

export default async function NzebProductPage({ params }) {
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

  // v273 — punctul 7 din audit: tabelul de performanta (perf) era vizibil pe pagina
  // dar nu intra deloc in structured data. Acum intra, dedus dupa nume: ce exista
  // deja in specs nu se repeta, iar la nume comun cu valoare diferita castiga specs.
  const perfExtra = perf.filter(([pn]) => !specs.some(([sn]) => sn === pn));
  // v272 — identitate de entitate pentru Product (punctul 4 din audit).
  // Pana acum Product nu avea @id, url, category sau inLanguage, iar `seller` era
  // un nod Organization duplicat, fara @id — deci nu se lega de nodul LocalBusiness
  // definit in app/[locale]/page.js la ${BASE}/#localbusiness, unde stau vatID, geo,
  // areaServed, aggregateRating si knowsAbout. Un crawler LLM vedea doua firme fara
  // legatura. Acum seller e o REFERINTA prin @id catre acel nod unic.
  const pageUrl = `${BASE}/${locale}/${(NZEB_SEG[locale]||'sisteme-nzeb')}/${SLUG_MAP[canonical]?.[locale] || slug}`;
  // isSimilarTo: celelalte produse din aceeasi familie — ancoreaza comparatiile LLM
  const siblings = Object.keys(PRODUCTS).filter(k => k !== canonical).map(k => ({
    '@type':'Product',
    name: PRODUCTS[k].name[locale] || PRODUCTS[k].name.ro,
    url: `${BASE}/${locale}/${(NZEB_SEG[locale]||'sisteme-nzeb')}/${SLUG_MAP[k]?.[locale] || k}`,
  }));
  // v274b — FAQ pe paginile de produs (punctul 3 din audit).
  const faqItems = PRODUCT_FAQ[canonical]?.[locale] || PRODUCT_FAQ[canonical]?.ro || [];
  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    'mainEntity': faqItems.map(([q, a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a },
    })),
  } : null;
  const schema = {
    '@context':'https://schema.org', '@type':'Product',
    '@id': `${pageUrl}#product`,
    url: pageUrl,
    category: cat,
    inLanguage: locale,
    name, description: seotxt, image: `${BASE}${product.img}`,
    brand: { '@type':'Brand', name: (PRODUCT_BRAND[canonical]?.brand || 'Neofort BIZ') },
    ...(PRODUCT_BRAND[canonical] ? { manufacturer: { '@type':'Organization', name: PRODUCT_BRAND[canonical].manufacturer, addressCountry: PRODUCT_BRAND[canonical].country } } : {}),
    seller: { '@id': `${BASE}/#localbusiness` },
    additionalProperty: [...specs, ...perfExtra].map(([n,v]) => ({ '@type':'PropertyValue', name:n, value:v })),
    isSimilarTo: siblings,
  };

  // ── BreadcrumbList ──
  const parentSeg_nzeb = {'ro': 'sisteme-nzeb', 'en': 'nzeb-systems', 'de': 'nzeb-systeme', 'fr': 'systemes-nzeb', 'es': 'sistemas-nzeb', 'it': 'sistemi-nzeb'};
  const parentLabel_nzeb = {'ro': 'Sisteme nZEB', 'en': 'nZEB Systems', 'de': 'nZEB-Systeme', 'fr': 'Systèmes nZEB', 'es': 'Sistemas nZEB', 'it': 'Sistemi nZEB'};
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    'itemListElement': [
      { '@type':'ListItem', 'position':1, 'name':'Neofort BIZ', 'item': BASE },
      { '@type':'ListItem', 'position':2, 'name': parentLabel_nzeb[locale]||'Neofort BIZ', 'item': `${BASE}/${locale}/${parentSeg_nzeb[locale]}` },
      { '@type':'ListItem', 'position':3, 'name': name, 'item': `${BASE}/${locale}/${(NZEB_SEG[locale]||'sisteme-nzeb')}/${SLUG_MAP[canonical]?.[locale]||slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>}
      <style>{`
        .prd-bc{font-size:.76rem;letter-spacing:.12em;text-transform:uppercase;color:#141414;display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:24px}
        .prd-bc a{color:#141414;text-decoration:none}.prd-bc a:hover{color:#151515}.prd-bc span{color:#141414}
        .prd-hero{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
        .prd-img-wrap{position:relative;background:#f8f8f6;border:1px solid #e8e8e4;display:flex;align-items:center;justify-content:center;padding:32px;min-height:320px}
        .prd-img{max-width:100%;max-height:340px;width:auto;height:auto;object-fit:contain;display:block}
        .prd-badge{position:absolute;top:12px;left:12px;font-family:'Barlow Condensed',sans-serif;font-size:.52rem;letter-spacing:.2em;text-transform:uppercase;font-weight:700;padding:4px 10px}
        .prd-cat{font-family:'Barlow Condensed',sans-serif;font-size:.57rem;letter-spacing:.2em;text-transform:uppercase;font-weight:600;margin-bottom:10px}
        .prd-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:clamp(1.4rem,3vw,2rem);color:#151515;line-height:1.15;margin:0 0 14px}
        .prd-tagline{font-size:.88rem;color:#2a2a2a;line-height:1.6;margin:0 0 28px;border-left:3px solid;padding-left:14px}
        .prd-sec{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.74rem;letter-spacing:.22em;text-transform:uppercase;color:#151515;margin:0 0 14px}
        .prd-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#e8e8e4;border:1px solid #e8e8e4;margin-bottom:28px}
        .prd-row{background:#fff;display:flex;justify-content:space-between;gap:8px;padding:7px 10px;font-size:.73rem}
        .prd-row strong{color:#151515;font-weight:600;flex-shrink:0}.prd-row span{color:#2a2a2a;text-align:right}
        .prd-perf{width:100%;border-collapse:collapse;margin-bottom:28px;font-size:.73rem}
        .prd-perf tr{border-bottom:1px solid #f0f0ee}.prd-perf td{padding:7px 8px;font-size:.82rem}
        .prd-perf td:first-child{color:#151515;width:55%;font-weight:400}.prd-perf td:last-child{font-weight:700;color:#151515;text-align:right}
        .prd-adv{list-style:none;padding:0;margin:0 0 28px}
        .prd-adv li{font-size:.8rem;color:#181818;padding:8px 0 8px 20px;border-bottom:1px solid #f5f5f3;position:relative;line-height:1.5}
        .prd-adv li:last-child{border-bottom:none}
        .prd-cta-box{background:#111;padding:24px;position:sticky;top:100px}
        .prd-cta-hl{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.74rem;letter-spacing:.2em;text-transform:uppercase;color:#151515;margin-bottom:8px}
        .prd-cta-nm{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.05rem;color:#fff;margin-bottom:16px;line-height:1.2}
        .prd-cta-sub{font-size:.84rem;color:#151515;margin-bottom:20px}
        .prd-cta-a{display:block;width:100%;padding:12px;text-align:center;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;margin-bottom:10px;transition:all .18s}
        .prd-cta-pri{color:#0e0e0e;background:#fff}.prd-cta-pri:hover{background:#f0f0f0}
        .prd-cta-sec{color:#fff;border:1px solid #333}.prd-cta-sec:hover{border-color:#404040}
        .prd-seo{font-size:.82rem;color:#1e1e1e;line-height:1.8;padding:32px 0;border-top:1px solid #e8e8e4;margin-top:8px}
        .prd-lower{display:grid;grid-template-columns:1fr 260px;gap:48px;align-items:start;margin-top:48px}
        .prd-mob{display:none;position:fixed;bottom:0;left:0;right:0;background:#111;padding:12px 16px;z-index:100;gap:10px;border-top:1px solid #222}
        .prd-mob a{flex:1;padding:11px 8px;text-align:center;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;transition:all .18s}
        .prd-mob-pri{background:#fff;color:#0e0e0e}.prd-mob-sec{border:1px solid #333;color:#fff}
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
          <span style={{color:'#151515'}}>{serie}</span>
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
            <FaqAccordion items={faqItems} title={ui.faq_title} />
          </div>
          <div className="prd-cta-box">
            <p className="prd-cta-hl">{ui.cta_h}</p>
            <p className="prd-cta-nm">{name}</p>
            <p className="prd-cta-sub">{ui.cta_sub}</p>
            <Link href="/contact" className="prd-cta-a prd-cta-pri">{ui.cta_btn}</Link>
            <a href="tel:+40752443435" className="prd-cta-a prd-cta-sec" style={{fontSize:'.6rem',whiteSpace:'nowrap'}}>{ui.cta_call} +40 752 443 435</a>
          </div>
        </div>
      </div>
    </>
  );
}
