import { notFound } from 'next/navigation';
import { Link } from '../../../../i18n/navigation';

const BASE    = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

const SLUG_MAP = {
  'toc-de-renovare': {
    ro:'toc-de-renovare-pvc',                    en:'pvc-renovation-frame',
    de:'pvc-renovierungsrahmen',                  fr:'cadre-renovation-pvc',
    es:'marco-renovacion-pvc',                    it:'telaio-ristrutturazione-pvc',
  },
  'pervazuri-interior-pvc-exterior-al': {
    ro:'pervazuri-interior-pvc-glafuri-exterior-aluminiu', en:'interior-pvc-windowsills-exterior-aluminium-sills',
    de:'innenfensterbaenke-pvc-aussenfensterbaenke-aluminium', fr:'appuis-fenetre-interieurs-pvc-exterieurs-aluminium',
    es:'alfeizares-interiores-pvc-exteriores-aluminio', it:'davanzali-interni-pvc-esterni-alluminio',
  },
  'grila-higroreglabila-aereco': {
    ro:'grila-higroreglabila-aereco-ventilatie',  en:'aereco-hygro-adjustable-ventilation-grille',
    de:'aereco-hygroregelbare-lueftungsgitter',    fr:'grille-hygroreglable-aereco-ventilation',
    es:'rejilla-higrorreglable-aereco-ventilacion', it:'griglia-igroregolab-aereco-ventilazione',
  },
};

const REVERSE = {};
for (const [c, slugs] of Object.entries(SLUG_MAP))
  for (const s of Object.values(slugs)) REVERSE[s] = c;

const PRODUCTS = {

  'toc-de-renovare': {
    img: '/accessories/toc-renovare.avif',
    color: '#2d5a8e',
    category: { ro:'Montaj & Renovare', en:'Installation & Renovation', de:'Montage & Renovierung', fr:'Pose & Rénovation', es:'Montaje & Renovación', it:'Posa & Ristrutturazione' },
    serie: { ro:'Toc Renovare', en:'Renovation Frame', de:'Renovierungsrahmen', fr:'Cadre Rénovation', es:'Marco Renovación', it:'Telaio Ristrutturazione' },
    breadcrumb_parent_href: '/accesorii',
    breadcrumb_parent: { ro:'Accesorii', en:'Accessories', de:'Zubehör', fr:'Accessoires', es:'Accesorios', it:'Accessori' },
    name: {
      ro:'Toc de Renovare PVC – Înlocuire Fereastră fără Demontarea Tocului Vechi',
      en:'PVC Renovation Frame – Window Replacement Without Removing the Old Frame',
      de:'PVC Renovierungsrahmen – Fensterwechsel ohne Entfernung des alten Rahmens',
      fr:'Cadre de Rénovation PVC – Remplacement Fenêtre sans Démontage du Cadre Ancien',
      es:'Marco de Renovación PVC – Sustitución de Ventana sin Desmontar el Marco Antiguo',
      it:'Telaio di Ristrutturazione PVC – Sostituzione Finestra senza Rimozione del Vecchio Telaio',
    },
    tagline: {
      ro:'Montaj direct peste tocul vechi — fără spargerea tencuielii, 50% timp mai puțin, cost total redus. Compatibil cu orice tâmplărie PVC sau aluminiu.',
      en:'Direct installation over old frame — no plasterwork damage, 50% less time, reduced total cost. Compatible with any PVC or aluminium joinery.',
      de:'Direkte Montage über altem Rahmen — keine Putzschäden, 50% weniger Zeit, reduzierte Gesamtkosten. Kompatibel mit jeder PVC- oder Aluminiumtischler.',
      fr:'Pose directe sur l\'ancien cadre — pas de dommages au crépissage, 50% moins de temps, coût total réduit. Compatible avec toute menuiserie PVC ou aluminium.',
      es:'Instalación directa sobre el marco antiguo — sin daños en el revoque, 50% menos tiempo, coste total reducido. Compatible con cualquier carpintería PVC o aluminio.',
      it:'Installazione diretta sopra il vecchio telaio — nessun danno all\'intonaco, 50% meno tempo, costo totale ridotto. Compatibile con qualsiasi infisso PVC o alluminio.',
    },
    specs: {
      ro:[['Material','PVC Clasa A'],['Aripă renovare disponibilă','35 mm / 60 mm'],['Adâncime profil','76 mm'],['Transfer termic Uw','0,73 W/m²K'],['Geam compatibil','până la 48 mm'],['Izolare fonică','până la 47 dB'],['Antiefracție','până la RC3'],['Culori','Alb, gri antracit, bicolor'],['Compatibilitate','Orice toc existent PVC, Al, lemn'],['Montaj','Direct peste toc, fără demolare'],],
      en:[['Material','Class A PVC'],['Renovation wing available','35 mm / 60 mm'],['Profile depth','76 mm'],['Thermal transfer Uw','0.73 W/m²K'],['Compatible glass','up to 48 mm'],['Sound insulation','up to 47 dB'],['Anti-burglary','up to RC3'],['Colours','White, anthracite grey, bicolour'],['Compatibility','Any existing PVC, Al, wood frame'],['Installation','Direct over frame, no demolition'],],
      de:[['Material','PVC Klasse A'],['Renovierungsflügel verfügbar','35 mm / 60 mm'],['Profiltiefe','76 mm'],['Wärmedurchgang Uw','0,73 W/m²K'],['Verglasung','bis 48 mm'],['Schalldämmung','bis 47 dB'],['Einbruchschutz','bis RC3'],['Farben','Weiß, Anthrazitgrau, zweifarbig'],['Kompatibilität','Jeder vorhandene PVC-, Al-, Holzrahmen'],['Montage','Direkt über Rahmen, keine Demontage'],],
      fr:[['Matériau','PVC Classe A'],['Aile de rénovation','35 mm / 60 mm'],['Profondeur profil','76 mm'],['Transfert thermique Uw','0,73 W/m²K'],['Vitrage','jusqu\'à 48 mm'],['Isolation phonique','jusqu\'à 47 dB'],['Anti-effraction','jusqu\'à RC3'],['Couleurs','Blanc, anthracite, bicolore'],['Compatibilité','Tout cadre existant PVC, Al, bois'],['Pose','Directe sur cadre, sans démolition'],],
      es:[['Material','PVC Clase A'],['Ala renovación disponible','35 mm / 60 mm'],['Prof. perfil','76 mm'],['Transf. térmica Uw','0,73 W/m²K'],['Vidrio','hasta 48 mm'],['Aislamiento acústico','hasta 47 dB'],['Antirrobo','hasta RC3'],['Colores','Blanco, antracita, bicolor'],['Compatibilidad','Cualquier marco PVC, Al, madera'],['Instalación','Directa sobre marco, sin demolición'],],
      it:[['Materiale','PVC Classe A'],['Ala ristrutturazione','35 mm / 60 mm'],['Profondità profilo','76 mm'],['Trasferimento termico Uw','0,73 W/m²K'],['Vetro','fino a 48 mm'],['Isolamento acustico','fino a 47 dB'],['Antieffrazione','fino a RC3'],['Colori','Bianco, antracite, bicolore'],['Compatibilità','Qualsiasi telaio PVC, Al, legno'],['Installazione','Diretta su telaio, senza demolizione'],],
    },
    perf: {
      ro:[['Reducere timp montaj','50% față de înlocuire totală'],['Murdărie șantier','Minimă — fără spargere tencuială'],['Transfer termic Uw','0,73 W/m²K (profil 76 mm)'],['Izolare fonică','până la 47 dB'],['Antiefracție','RC3 opțional'],['Compatibil','Clădiri istorice, blocuri, renovări'],],
      en:[['Installation time reduction','50% vs. full replacement'],['Site mess','Minimal — no plasterwork breaking'],['Thermal transfer Uw','0.73 W/m²K (76 mm profile)'],['Sound insulation','up to 47 dB'],['Anti-burglary','RC3 optional'],['Compatible','Historic buildings, blocks, renovations'],],
      de:[['Zeitersparnis Montage','50% ggü. Vollersatz'],['Baustellen-Schmutz','Minimal — kein Putzaufbrechen'],['Wärmedurchgang Uw','0,73 W/m²K (76 mm Profil)'],['Schalldämmung','bis 47 dB'],['Einbruchschutz','RC3 optional'],['Kompatibel','Hist. Gebäude, Blöcke, Sanierungen'],],
      fr:[['Réduction temps pose','50% vs. remplacement complet'],['Chantier','Minimal — sans casser crépissage'],['Transfert thermique Uw','0,73 W/m²K (profil 76 mm)'],['Isolation phonique','jusqu\'à 47 dB'],['Anti-effraction','RC3 optionnel'],['Compatible','Bâtiments hist., immeubles, rénovations'],],
      es:[['Reducción tiempo instalación','50% vs. sustitución completa'],['Suciedad obra','Mínima — sin romper revoque'],['Transf. térmica Uw','0,73 W/m²K (perfil 76 mm)'],['Aislamiento acústico','hasta 47 dB'],['Antirrobo','RC3 opcional'],['Compatible','Edificios hist., bloques, renovaciones'],],
      it:[['Riduzione tempo installazione','50% vs. sostituzione completa'],['Polvere cantiere','Minima — senza rompere intonaco'],['Trasf. termico Uw','0,73 W/m²K (profilo 76 mm)'],['Isolamento acustico','fino a 47 dB'],['Antieffrazione','RC3 opzionale'],['Compatibile','Edifici storici, condomini, ristrutturazioni'],],
    },
    advantages: {
      ro:['Fără spargerea tencuielii — tocul de renovare se clipează direct peste tocul vechi în câteva ore, fără ciocan, fără praf, fără reparații ulterioare','50% mai rapid față de înlocuirea completă — un apartament cu 5 ferestre se finalizează în aceeași zi','Ideal pentru blocuri și clădiri istorice — nu necesită autorizații suplimentare, fără modificări ale structurii sau finisajelor','Suprafața vitrată se reduce cu 5–15% — singurul compromis față de înlocuirea totală, acceptabil în raport cu economiile de timp și cost','Disponibil în alb, antracit și bicolor interior/exterior — finisaj estetic perfect, fără pervazuri noi necesare','Cost total mai mic — elimină cheltuielile de reparare tencuială, zugrăvire și igienizare post-montaj'],
      en:['No plasterwork breaking — renovation frame clips directly over old frame in a few hours, no hammer, no dust, no subsequent repairs','50% faster than complete replacement — an apartment with 5 windows is completed in the same day','Ideal for apartment blocks and historic buildings — no additional permits required, no changes to structure or finishes','Glazed area reduced by 5–15% — the only compromise vs. total replacement, acceptable relative to time and cost savings','Available in white, anthracite and interior/exterior bicolour — perfect aesthetic finish, no new sills needed','Lower total cost — eliminates plaster repair, painting and post-installation cleaning expenses'],
      de:['Kein Putzaufbrechen — Renovierungsrahmen wird in wenigen Stunden direkt über altem Rahmen geklipst, kein Hammer, kein Staub, keine Folgereparaturen','50% schneller als Vollersatz — eine Wohnung mit 5 Fenstern wird am gleichen Tag fertiggestellt','Ideal für Mehrfamilienhäuser und historische Gebäude — keine zusätzlichen Genehmigungen, keine Struktur- oder Oberflächenänderungen','Glasfläche um 5–15% reduziert — der einzige Kompromiss ggü. Vollersatz, akzeptabel im Verhältnis zu Zeit- und Kosteneinsparungen','In Weiß, Anthrazit und Innen/Außen-Zweifarbig erhältlich — perfekte Oberfläche, keine neuen Fensterbänke nötig','Niedrigere Gesamtkosten — eliminiert Putzreparatur, Malerarbeiten und Reinigung nach der Montage'],
      fr:['Pas de casse du crépissage — le cadre de rénovation se clippe directement sur l\'ancien cadre en quelques heures, sans marteau, sans poussière, sans réparations','50% plus rapide que le remplacement complet — un appartement avec 5 fenêtres est finalisé le même jour','Idéal pour immeubles et bâtiments historiques — sans permis supplémentaires, sans modifications de structure ou de finitions','Surface vitrée réduite de 5–15% — le seul compromis vs. remplacement total, acceptable au regard des économies de temps et de coût','Disponible en blanc, anthracite et bicolore int./ext. — finition parfaite, pas de nouveaux appuis nécessaires','Coût total inférieur — élimine réparation crépissage, peinture et nettoyage post-installation'],
      es:['Sin romper el revoque — el marco de renovación se engancha directamente sobre el marco antiguo en pocas horas, sin martillo, sin polvo, sin reparaciones','50% más rápido que la sustitución completa — un apartamento con 5 ventanas se finaliza el mismo día','Ideal para bloques y edificios históricos — sin permisos adicionales, sin modificaciones de estructura ni acabados','Superficie acristalada reducida un 5–15% — el único compromiso frente a la sustitución total, aceptable en relación con el ahorro de tiempo y coste','Disponible en blanco, antracita y bicolor interior/exterior — acabado estético perfecto, sin nuevos alféizares','Coste total menor — elimina reparación de revoque, pintura y limpieza post-instalación'],
      it:['Senza rompere l\'intonaco — il telaio di ristrutturazione si aggancia direttamente sul vecchio telaio in poche ore, senza martello, senza polvere, senza riparazioni','50% più veloce della sostituzione completa — un appartamento con 5 finestre viene completato nello stesso giorno','Ideale per condomini ed edifici storici — senza permessi aggiuntivi, senza modifiche alla struttura o alle finiture','Superficie vetrata ridotta del 5–15% — l\'unico compromesso vs. sostituzione totale, accettabile rispetto ai risparmi di tempo e costo','Disponibile in bianco, antracite e bicolore interno/esterno — finitura estetica perfetta, senza nuovi davanzali','Costo totale inferiore — elimina riparazione intonaco, verniciatura e pulizia post-installazione'],
    },
    seo_text: {
      ro:'Tocul de renovare PVC este soluția optimă pentru înlocuirea ferestrelor vechi din lemn, PVC degradat sau aluminiu uzat fără a recurge la lucrările costisitoare și deranjante specifice unei înlocuiri complete: spargerea tencuielii, repararea zidariei, zugrăvirea și igienizarea. Sistemul funcționează prin clipsarea unui profil PVC special de renovare direct peste tocul existent, creând o suprafață nouă de montaj pe care se fixează noua fereastră. Profilul de renovare este disponibil cu aripă de 35 mm (pentru toc existent subțire) sau 60 mm (pentru toc mai masiv), ambele variante asigurând un Uw = 0,73 W/m²K și compatibilitate cu geam termoizolator triplu până la 48 mm. Reducerea suprafeței vitrate cu 5–15% față de înlocuirea totală este singurul compromis al metodei, în schimbul unui timp de execuție de 50% mai scurt și al eliminării complete a costurilor de reparare a finisajelor. Metoda este ideală pentru ansambluri rezidențiale, blocuri, clădiri de birouri și construcții istorice unde lucrările invazive sunt restricționate sau nedorite. Neofort BIZ oferă montaj cu toc de renovare PVC în toată România, cu consultanță gratuită privind alegerea aripii de renovare potrivite.',
      en:'The PVC renovation frame is the optimal solution for replacing old wooden, degraded PVC or worn aluminium windows without resorting to the costly and disruptive works typical of a complete replacement: breaking plasterwork, repairing masonry, painting and cleaning up. The system works by clipping a special PVC renovation profile directly over the existing frame, creating a new installation surface on which the new window is fixed. The renovation profile is available with a 35 mm wing (for thin existing frame) or 60 mm wing (for more massive frame), both variants ensuring Uw = 0.73 W/m²K and compatibility with triple thermal glazing up to 48 mm. The 5–15% reduction in glazed area compared to total replacement is the only compromise of the method, in exchange for 50% shorter execution time and complete elimination of finish repair costs. The method is ideal for residential complexes, apartment blocks, office buildings and historic structures where invasive works are restricted or unwanted. Neofort BIZ offers PVC renovation frame installation throughout Romania, with free consultancy on choosing the right renovation wing.',
      de:'Der PVC-Renovierungsrahmen ist die optimale Lösung für den Austausch alter Holz-, degradierter PVC- oder verschlissener Aluminiumfenster, ohne auf die kostspieligen und störenden Arbeiten eines Vollaustauschs zurückgreifen zu müssen: Putzaufbrechen, Mauerwerkreparatur, Malerarbeiten und Reinigung. Das System funktioniert durch Aufklipsen eines speziellen PVC-Renovierungsprofils direkt über dem vorhandenen Rahmen, wodurch eine neue Montagefläche für das neue Fenster entsteht. Das Renovierungsprofil ist mit einem 35-mm-Flügel (für dünnen vorhandenen Rahmen) oder 60-mm-Flügel (für massiveren Rahmen) erhältlich, beide Varianten gewährleisten Uw = 0,73 W/m²K und Kompatibilität mit Dreifach-Wärmeschutzverglasung bis 48 mm. Die 5–15%ige Reduzierung der Glasfläche gegenüber dem Vollersatz ist der einzige Kompromiss der Methode, im Austausch gegen 50% kürzere Ausführungszeit und vollständige Eliminierung der Oberflächenreparaturkosten. Die Methode eignet sich ideal für Wohnanlagen, Mehrfamilienhäuser, Bürogebäude und historische Gebäude, wo invasive Arbeiten eingeschränkt oder unerwünscht sind. Neofort BIZ bietet PVC-Renovierungsrahmen-Montage in ganz Rumänien mit kostenloser Beratung bei der Wahl des richtigen Renovierungsflügels.',
      fr:'Le cadre de rénovation PVC est la solution optimale pour remplacer les anciennes fenêtres en bois, en PVC dégradé ou en aluminium usé sans recourir aux travaux coûteux et perturbateurs d\'un remplacement complet : casse du crépissage, réparation de la maçonnerie, peinture et nettoyage. Le système fonctionne en clipsant un profil PVC de rénovation spécial directement sur le cadre existant, créant une nouvelle surface de pose sur laquelle la nouvelle fenêtre est fixée. Le profil de rénovation est disponible avec une aile de 35 mm (pour cadre existant fin) ou 60 mm (pour cadre plus massif), les deux variantes assurant Uw = 0,73 W/m²K et compatibilité avec le triple vitrage thermique jusqu\'à 48 mm. La réduction de 5 à 15% de la surface vitrée par rapport au remplacement total est le seul compromis de la méthode, en échange d\'un délai d\'exécution 50% plus court et de l\'élimination complète des coûts de réparation des finitions. La méthode est idéale pour les ensembles résidentiels, les immeubles d\'appartements, les bureaux et les bâtiments historiques où les travaux invasifs sont restreints ou indésirables. Neofort BIZ propose la pose de cadre de rénovation PVC dans toute la Roumanie, avec conseil gratuit sur le choix de l\'aile de rénovation adaptée.',
      es:'El marco de renovación PVC es la solución óptima para sustituir ventanas antiguas de madera, PVC degradado o aluminio desgastado sin recurrir a los costosos y molestos trabajos propios de una sustitución completa: rotura del revoque, reparación de la mampostería, pintura y limpieza. El sistema funciona enganchando un perfil PVC especial de renovación directamente sobre el marco existente, creando una nueva superficie de instalación sobre la que se fija la nueva ventana. El perfil de renovación está disponible con un ala de 35 mm (para marco existente delgado) o 60 mm (para marco más macizo), ambas variantes asegurando Uw = 0,73 W/m²K y compatibilidad con triple vidrio térmico hasta 48 mm. La reducción del 5-15% de la superficie acristalada en comparación con la sustitución total es el único compromiso del método, a cambio de un tiempo de ejecución un 50% más corto y la eliminación completa de los costes de reparación de acabados. El método es ideal para complejos residenciales, bloques de pisos, edificios de oficinas y construcciones históricas donde los trabajos invasivos están restringidos o no son deseables. Neofort BIZ ofrece instalación de marcos de renovación PVC en toda Rumanía, con asesoría gratuita sobre la elección del ala de renovación adecuada.',
      it:'Il telaio di ristrutturazione PVC è la soluzione ottimale per sostituire le vecchie finestre in legno, PVC degradato o alluminio usurato senza ricorrere ai costosi e perturbanti lavori tipici di una sostituzione completa: rottura dell\'intonaco, riparazione della muratura, pittura e pulizia. Il sistema funziona agganciando un profilo PVC speciale di ristrutturazione direttamente sul telaio esistente, creando una nuova superficie di installazione su cui viene fissata la nuova finestra. Il profilo di ristrutturazione è disponibile con un\'ala da 35 mm (per telaio esistente sottile) o 60 mm (per telaio più massiccio), entrambe le varianti garantendo Uw = 0,73 W/m²K e compatibilità con triplo vetro termoisolante fino a 48 mm. La riduzione del 5-15% della superficie vetrata rispetto alla sostituzione totale è il solo compromesso del metodo, in cambio di un tempo di esecuzione del 50% più breve e l\'eliminazione completa dei costi di riparazione delle finiture. Il metodo è ideale per complessi residenziali, condomini, edifici per uffici e costruzioni storiche dove i lavori invasivi sono limitati o indesiderati. Neofort BIZ offre installazione di telai di ristrutturazione PVC in tutta la Romania, con consulenza gratuita sulla scelta dell\'ala di ristrutturazione adeguata.',
    },
  },

  'pervazuri-interior-pvc-exterior-al': {
    img: '/accessories/pervazuri-glafuri.avif',
    color: '#2d5a8e',
    category: { ro:'Finisare Tâmplărie', en:'Window Finishing', de:'Fensterveredelung', fr:'Finition Menuiserie', es:'Acabado Carpintería', it:'Finitura Infissi' },
    serie: { ro:'Pervazuri & Glafuri', en:'Windowsills & Sills', de:'Fensterbänke', fr:'Appuis de Fenêtre', es:'Alféizares', it:'Davanzali' },
    breadcrumb_parent_href: '/accesorii',
    breadcrumb_parent: { ro:'Accesorii', en:'Accessories', de:'Zubehör', fr:'Accessoires', es:'Accesorios', it:'Accessori' },
    name: {
      ro:'Pervazuri Interior PVC și Glafuri Exterior Aluminiu – Finisare Completă Fereastră',
      en:'Interior PVC Windowsills and Exterior Aluminium Sills – Complete Window Finishing',
      de:'Innenfensterbänke PVC und Außenfensterbänke Aluminium – Vollständige Fensterveredelung',
      fr:'Appuis de Fenêtre Intérieurs PVC et Extérieurs Aluminium – Finition Complète Fenêtre',
      es:'Alféizares Interiores PVC y Exteriores Aluminio – Acabado Completo de Ventana',
      it:'Davanzali Interni PVC e Esterni Alluminio – Finitura Completa della Finestra',
    },
    tagline: {
      ro:'Pervazuri interioare PVC în gama completă de culori RAL și glafuri exterioare din aluminiu anodizat — rezistente la intemperii, etanșate cu garnitură EPDM, cuplare 90°–180°.',
      en:'Interior PVC windowsills in full RAL colour range and exterior anodised aluminium sills — weather-resistant, sealed with EPDM gasket, coupling 90°–180°.',
      de:'Innenfensterbänke PVC in kompletter RAL-Farbpalette und Außenfensterbänke aus Eloxal-Aluminium — witterungsbeständig, EPDM-gedichtet, Kupplung 90°–180°.',
      fr:'Appuis intérieurs PVC en gamme complète de couleurs RAL et appuis extérieurs en aluminium anodisé — résistants aux intempéries, joints EPDM, raccordement 90°–180°.',
      es:'Alféizares interiores PVC en gama completa de colores RAL y exteriores de aluminio anodizado — resistentes a intemperie, sellados con EPDM, acoplamiento 90°–180°.',
      it:'Davanzali interni PVC in gamma completa di colori RAL e davanzali esterni in alluminio anodizzato — resistenti alle intemperie, sigillati con EPDM, accoppiamento 90°–180°.',
    },
    specs: {
      ro:[['Pervaz interior','PVC Clasa A'],['Culori RAL interior','9016 (alb), 8019, 8003, 7016'],['Adâncime interior','20 – 400 mm (pe comandă)'],['Glaf exterior','Aluminiu anodizat'],['Finisaj exterior','E6/EV1 (argintiu), E6/C32 (bronz), E6/C33 (auriu)'],['Capace aluminiu','Clips-on, la colțuri și capete'],['Etanșare','Garnitură EPDM integrată'],['Cuplare colț','90° · 135° · 180°'],['Rezistență','Intemperii, UV, impact'],['Compatibil','Orice profil PVC sau aluminiu'],],
      en:[['Interior sill','Class A PVC'],['RAL colours interior','9016 (white), 8019, 8003, 7016'],['Interior depth','20 – 400 mm (custom)'],['Exterior sill','Anodised aluminium'],['Exterior finish','E6/EV1 (silver), E6/C32 (bronze), E6/C33 (gold)'],['Aluminium caps','Clip-on, at corners and ends'],['Sealing','Integrated EPDM gasket'],['Corner coupling','90° · 135° · 180°'],['Resistance','Weatherproof, UV, impact'],['Compatible','Any PVC or aluminium profile'],],
      de:[['Innenbank','PVC Klasse A'],['RAL-Farben innen','9016 (weiß), 8019, 8003, 7016'],['Innenbreite','20 – 400 mm (nach Maß)'],['Außenbank','Eloxiertes Aluminium'],['Außenoberfläche','E6/EV1 (silber), E6/C32 (bronze), E6/C33 (gold)'],['Alu-Kappen','Clips, an Ecken und Enden'],['Abdichtung','Integrierte EPDM-Dichtung'],['Eckkupplung','90° · 135° · 180°'],['Beständigkeit','Witterung, UV, Stoß'],['Kompatibel','Jedes PVC- oder Aluminiumprofil'],],
      fr:[['Appui intérieur','PVC Classe A'],['Couleurs RAL int.','9016 (blanc), 8019, 8003, 7016'],['Profondeur int.','20 – 400 mm (sur mesure)'],['Appui extérieur','Aluminium anodisé'],['Finition ext.','E6/EV1 (argent), E6/C32 (bronze), E6/C33 (or)'],['Embouts aluminium','Clips, aux angles et extrémités'],['Étanchéité','Joint EPDM intégré'],['Raccordement','90° · 135° · 180°'],['Résistance','Intempéries, UV, impact'],['Compatible','Tout profil PVC ou aluminium'],],
      es:[['Alféizar interior','PVC Clase A'],['Colores RAL int.','9016 (blanco), 8019, 8003, 7016'],['Prof. interior','20 – 400 mm (a medida)'],['Alféizar exterior','Aluminio anodizado'],['Acabado ext.','E6/EV1 (plata), E6/C32 (bronce), E6/C33 (oro)'],['Tapas aluminio','Clip, en esquinas y extremos'],['Sellado','Junta EPDM integrada'],['Acoplamiento','90° · 135° · 180°'],['Resistencia','Intemperie, UV, impacto'],['Compatible','Cualquier perfil PVC o aluminio'],],
      it:[['Davanzale interno','PVC Classe A'],['Colori RAL int.','9016 (bianco), 8019, 8003, 7016'],['Profondità int.','20 – 400 mm (su misura)'],['Davanzale esterno','Alluminio anodizzato'],['Finitura est.','E6/EV1 (argento), E6/C32 (bronzo), E6/C33 (oro)'],['Tappi alluminio','Clip, agli angoli e estremità'],['Tenuta','Guarnizione EPDM integrata'],['Accoppiamento','90° · 135° · 180°'],['Resistenza','Intemperie, UV, impatto'],['Compatibile','Qualsiasi profilo PVC o alluminio'],],
    },
    perf: {
      ro:[['Rezistență UV','Da — nu îngălbenește, nu se fisurează'],['Etanșeitate','Garnitură EPDM perimetrală'],['Durabilitate','≥ 25 ani'],['Rezistență termică','–30°C … +80°C'],['Finisaje disponibile','RAL + anodizat argintiu, bronz, auriu, negru'],['Compatibil nZEB','Da — finisaj standard recomandat'],],
      en:[['UV resistance','Yes — does not yellow, does not crack'],['Sealing','Perimeter EPDM gasket'],['Durability','≥ 25 years'],['Thermal resistance','–30°C … +80°C'],['Available finishes','RAL + anodised silver, bronze, gold, black'],['nZEB compatible','Yes — recommended standard finish'],],
      de:[['UV-Beständigkeit','Ja — vergilbt nicht, reißt nicht'],['Abdichtung','Perimetrische EPDM-Dichtung'],['Haltbarkeit','≥ 25 Jahre'],['Wärmebeständigkeit','–30°C … +80°C'],['Verfügbare Oberflächen','RAL + eloxiert silber, bronze, gold, schwarz'],['nZEB-kompatibel','Ja — empfohlener Standardabschluss'],],
      fr:[['Résistance UV','Oui — ne jaunit pas, ne se fissure pas'],['Étanchéité','Joint EPDM périmétrique'],['Durabilité','≥ 25 ans'],['Résistance thermique','–30°C … +80°C'],['Finitions disponibles','RAL + anodisé argent, bronze, or, noir'],['Compatible nZEB','Oui — finition standard recommandée'],],
      es:[['Resistencia UV','Sí — no amarillea, no se fisura'],['Sellado','Junta EPDM perimetral'],['Durabilidad','≥ 25 años'],['Resistencia térmica','–30°C … +80°C'],['Acabados disponibles','RAL + anodizado plata, bronce, oro, negro'],['Compatible nZEB','Sí — acabado estándar recomendado'],],
      it:[['Resistenza UV','Sì — non ingiallisce, non si fessura'],['Tenuta','Guarnizione EPDM perimetrale'],['Durata','≥ 25 anni'],['Resistenza termica','–30°C … +80°C'],['Finiture disponibili','RAL + anodizzato argento, bronzo, oro, nero'],['Compatible nZEB','Sì — finitura standard raccomandata'],],
    },
    advantages: {
      ro:['Pervaz interior PVC — rezistent la umiditate, căldură și impact, nu se deformează, disponibil în adâncimi de la 20 mm la 400 mm pentru orice grosime de perete','Glaf exterior aluminiu anodizat — rezistență la coroziune, UV și intemperii superioară PVC-ului exterior, durabilitate ≥ 25 ani fără vopsire suplimentară','Garnitură EPDM integrată — etanșare perfectă la baza glafului exterior, eliminare infiltrații apă la averse oblice','Cuplare universală 90°–180° — pentru ferestre de colț, trapezoidale sau la unghi, fără vizibilitate a îmbinărilor','Capace aluminiu clips-on — capete și colțuri curate, montaj rapid, aspectul unui profil continuu','Gamă completă cromatică — 4 culori RAL standard + 3 finisaje anodizate, asortate cu profilele PVC și aluminiu Neofort BIZ'],
      en:['Interior PVC sill — resistant to moisture, heat and impact, does not deform, available in depths from 20 mm to 400 mm for any wall thickness','Exterior anodised aluminium sill — corrosion, UV and weather resistance superior to exterior PVC, durability ≥ 25 years without additional painting','Integrated EPDM gasket — perfect sealing at base of exterior sill, eliminates water infiltration at oblique rain','Universal coupling 90°–180° — for corner windows, trapezoidal or angled, without visible joints','Aluminium clip-on caps — clean ends and corners, fast installation, appearance of a continuous profile','Full colour range — 4 standard RAL colours + 3 anodised finishes, matched with Neofort BIZ PVC and aluminium profiles'],
      de:['Innen-PVC-Fensterbank — beständig gegen Feuchtigkeit, Wärme und Stöße, verformt sich nicht, in Breiten von 20 mm bis 400 mm für jede Wandstärke erhältlich','Außen-Eloxal-Fensterbank — Korrosions-, UV- und Witterungsbeständigkeit überlegen gegenüber Außen-PVC, Haltbarkeit ≥ 25 Jahre ohne Nachlackierung','Integrierte EPDM-Dichtung — perfekte Abdichtung am Fuß der Außenbank, eliminiert Wasserinfiltration bei schrägem Regen','Universalkupplung 90°–180° — für Eckfenster, trapezförmige oder abgewinkelte, ohne sichtbare Verbindungen','Aluminium-Clip-Kappen — saubere Enden und Ecken, schnelle Montage, Aussehen eines durchgehenden Profils','Komplette Farbpalette — 4 Standard-RAL-Farben + 3 Eloxal-Oberflächen, abgestimmt auf Neofort BIZ PVC- und Aluminiumprofile'],
      fr:['Appui intérieur PVC — résistant à l\'humidité, la chaleur et les chocs, ne se déforme pas, disponible en profondeurs de 20 mm à 400 mm pour toute épaisseur de mur','Appui extérieur aluminium anodisé — résistance à la corrosion, UV et intempéries supérieure au PVC extérieur, durabilité ≥ 25 ans sans peinture supplémentaire','Joint EPDM intégré — étanchéité parfaite à la base de l\'appui extérieur, élimine les infiltrations d\'eau par pluie oblique','Raccordement universel 90°–180° — pour fenêtres d\'angle, trapézoïdales ou en biais, sans jonctions visibles','Embouts aluminium clips — extrémités et angles propres, pose rapide, apparence d\'un profil continu','Gamme chromatique complète — 4 couleurs RAL standard + 3 finitions anodisées, assorties aux profils PVC et aluminium Neofort BIZ'],
      es:['Alféizar interior PVC — resistente a la humedad, el calor y los impactos, no se deforma, disponible en profundidades de 20 mm a 400 mm para cualquier grosor de pared','Alféizar exterior de aluminio anodizado — resistencia a la corrosión, UV e intemperie superior al PVC exterior, durabilidad ≥ 25 años sin pintura adicional','Junta EPDM integrada — sellado perfecto en la base del alféizar exterior, elimina infiltraciones de agua en lluvia oblicua','Acoplamiento universal 90°–180° — para ventanas de esquina, trapezoidales o en ángulo, sin juntas visibles','Tapas de aluminio clip — extremos y esquinas limpios, instalación rápida, aspecto de perfil continuo','Gama cromática completa — 4 colores RAL estándar + 3 acabados anodizados, combinados con los perfiles PVC y aluminio de Neofort BIZ'],
      it:['Davanzale interno PVC — resistente all\'umidità, al calore e agli impatti, non si deforma, disponibile in profondità da 20 mm a 400 mm per qualsiasi spessore di parete','Davanzale esterno in alluminio anodizzato — resistenza alla corrosione, UV e intemperie superiore al PVC esterno, durata ≥ 25 anni senza verniciatura aggiuntiva','Guarnizione EPDM integrata — tenuta perfetta alla base del davanzale esterno, elimina infiltrazioni d\'acqua per pioggia obliqua','Accoppiamento universale 90°–180° — per finestre angolari, trapezoidali o inclinate, senza giunzioni visibili','Tappi alluminio clip — estremità e angoli puliti, installazione rapida, aspetto di profilo continuo','Gamma cromatica completa — 4 colori RAL standard + 3 finiture anodizzate, abbinate ai profili PVC e alluminio Neofort BIZ'],
    },
    seo_text: {
      ro:'Pervazurile interioare din PVC și glafurile exterioare din aluminiu anodizat reprezintă finisajul standard pentru orice fereastră montată profesional, asigurând atât protecția termică și impermeabilă a zonei de sub fereastră, cât și un aspect estetic îngrijit și durabil. Pervazul interior PVC Clasa A este disponibil în adâncimi de la 20 mm la 400 mm pe comandă, acoperind orice grosime de perete de la pereții subțiri ai apartamentelor la pereții groși ai caselor cu izolație exterioară sau ai clădirilor istorice cu zidărie masivă. Rezistența la umiditate, căldură și impact face din PVC-ul de Clasa A soluția superioară față de marmorile sau MDF-ul laminat, fără riscul de umflare sau fisurare. Glafurile exterioare din aluminiu anodizat sunt superioare celor din PVC exterior prin rezistența la UV (nu devin fragile după 5–10 ani) și la coroziune cauzată de apă de ploaie cu poluanți. Sistemul de cuplare universală 90°–135°–180° permite montarea în orice configurație arhitecturală — ferestre drepte, de colț sau trapezoidale — fără îmbinări vizibile. Neofort BIZ furnizează pervazuri și glafuri în toate combinațiile de culori RAL și finisaje anodizate, livrare garantată în București.',
      en:'Interior PVC windowsills and exterior anodised aluminium sills represent the standard finish for any professionally installed window, providing both thermal and waterproof protection of the area below the window and a clean, durable aesthetic appearance. Class A PVC interior sill is available in depths from 20 mm to 400 mm on request, covering any wall thickness from thin apartment walls to the thick walls of externally insulated houses or historic buildings with massive masonry. Resistance to moisture, heat and impact makes Class A PVC the superior solution over marble or laminated MDF, without the risk of swelling or cracking. Exterior anodised aluminium sills are superior to exterior PVC ones in UV resistance (do not become brittle after 5–10 years) and corrosion resistance caused by rainwater with pollutants. The universal coupling system 90°–135°–180° allows installation in any architectural configuration — straight, corner or trapezoidal windows — without visible joints. Neofort BIZ supplies sills in all RAL colour and anodised finish combinations, guaranteed delivery in Bucharest.',
      de:'Innenfensterbänke aus PVC und Außenfensterbänke aus eloxiertem Aluminium stellen den Standardabschluss für jedes professionell montierte Fenster dar und bieten sowohl Wärme- und Wasserschutz für den Bereich unter dem Fenster als auch ein sauberes, langlebiges ästhetisches Erscheinungsbild. Die Innenbank aus PVC Klasse A ist in Breiten von 20 mm bis 400 mm auf Bestellung erhältlich und deckt jede Wandstärke ab, von dünnen Wohnungswänden bis zu den dicken Wänden außengedämmter Häuser oder historischer Gebäude mit massivem Mauerwerk. Beständigkeit gegen Feuchtigkeit, Wärme und Stöße macht PVC der Klasse A zur überlegenen Lösung gegenüber Marmor oder laminiertem MDF, ohne Quell- oder Rissrisiko. Außeneloxal-Fensterbänke sind Außen-PVC-Bänken in UV-Beständigkeit (werden nach 5–10 Jahren nicht spröde) und Korrosionsbeständigkeit durch Regenwasser mit Schadstoffen überlegen. Das universelle Kupplungssystem 90°–135°–180° ermöglicht die Montage in jeder Architekturkonfiguration — gerade, Eck- oder trapezförmige Fenster — ohne sichtbare Verbindungen. Neofort BIZ liefert Fensterbänke in allen RAL-Farb- und Eloxal-Oberflächenkombinationen, garantierte Lieferung in Bukarest.',
      fr:'Les appuis de fenêtre intérieurs en PVC et les appuis extérieurs en aluminium anodisé représentent la finition standard pour toute fenêtre posée professionnellement, assurant à la fois la protection thermique et imperméable de la zone sous la fenêtre et un aspect esthétique soigné et durable. L\'appui intérieur PVC Classe A est disponible en profondeurs de 20 mm à 400 mm sur commande, couvrant toute épaisseur de mur, des murs minces d\'appartements aux murs épais des maisons à isolation extérieure ou des bâtiments historiques à maçonnerie massive. La résistance à l\'humidité, la chaleur et les chocs fait du PVC Classe A la solution supérieure au marbre ou au MDF laminé, sans risque de gonflement ou de fissuration. Les appuis extérieurs en aluminium anodisé sont supérieurs aux appuis extérieurs en PVC en résistance UV (ne deviennent pas fragiles après 5–10 ans) et en résistance à la corrosion causée par l\'eau de pluie polluée. Le système de raccordement universel 90°–135°–180° permet la pose dans toute configuration architecturale — fenêtres droites, d\'angle ou trapézoïdales — sans jonctions visibles. Neofort BIZ fournit des appuis dans toutes les combinaisons de couleurs RAL et de finitions anodisées, livraison garantie à Bucarest.',
      es:'Los alféizares interiores de PVC y los exteriores de aluminio anodizado representan el acabado estándar para cualquier ventana instalada profesionalmente, proporcionando tanto la protección térmica e impermeable de la zona bajo la ventana como un aspecto estético cuidado y duradero. El alféizar interior de PVC Clase A está disponible en profundidades de 20 mm a 400 mm por encargo, cubriendo cualquier grosor de pared, desde las paredes delgadas de los apartamentos hasta las paredes gruesas de las casas con aislamiento exterior o los edificios históricos con mampostería maciza. La resistencia a la humedad, el calor y los impactos hace del PVC Clase A la solución superior al mármol o al MDF laminado, sin riesgo de hinchamiento o fisuración. Los alféizares exteriores de aluminio anodizado son superiores a los exteriores de PVC en resistencia UV (no se vuelven frágiles después de 5–10 años) y resistencia a la corrosión causada por el agua de lluvia con contaminantes. El sistema de acoplamiento universal 90°–135°–180° permite la instalación en cualquier configuración arquitectónica — ventanas rectas, de esquina o trapezoidales — sin juntas visibles. Neofort BIZ suministra alféizares en todas las combinaciones de colores RAL y acabados anodizados, entrega garantizada en Bucarest.',
      it:'I davanzali interni in PVC e i davanzali esterni in alluminio anodizzato rappresentano la finitura standard per qualsiasi finestra installata professionalmente, garantendo sia la protezione termica e impermeabile della zona sotto la finestra che un aspetto estetico curato e durevole. Il davanzale interno in PVC Classe A è disponibile in profondità da 20 mm a 400 mm su ordinazione, coprendo qualsiasi spessore di parete, dalle pareti sottili degli appartamenti alle pareti spesse delle case con isolamento esterno o degli edifici storici con muratura massiccia. La resistenza all\'umidità, al calore e agli impatti rende il PVC Classe A la soluzione superiore rispetto al marmo o all\'MDF laminato, senza rischio di rigonfiamento o fessurazione. I davanzali esterni in alluminio anodizzato sono superiori ai davanzali esterni in PVC nella resistenza UV (non diventano fragili dopo 5–10 anni) e nella resistenza alla corrosione causata dall\'acqua piovana con inquinanti. Il sistema di accoppiamento universale 90°–135°–180° consente l\'installazione in qualsiasi configurazione architettonica — finestre dritte, angolari o trapezoidali — senza giunzioni visibili. Neofort BIZ fornisce davanzali in tutte le combinazioni di colori RAL e finiture anodizzate, consegna garantita a Bucarest.',
    },
  },

  'grila-higroreglabila-aereco': {
    img: '/accessories/grila-aereco.avif',
    color: '#555',
    category: { ro:'Ventilație Controlată', en:'Controlled Ventilation', de:'Kontrollierte Lüftung', fr:'Ventilation Contrôlée', es:'Ventilación Controlada', it:'Ventilazione Controllata' },
    serie: { ro:'Aereco', en:'Aereco', de:'Aereco', fr:'Aereco', es:'Aereco', it:'Aereco' },
    breadcrumb_parent_href: '/accesorii',
    breadcrumb_parent: { ro:'Accesorii', en:'Accessories', de:'Zubehör', fr:'Accessoires', es:'Accesorios', it:'Accessori' },
    name: {
      ro:'Grilă Higroreglabilă Aereco – Ventilație Naturală Controlată prin Umiditate',
      en:'Aereco Hygro-adjustable Ventilation Grille – Natural Ventilation Controlled by Humidity',
      de:'Aereco Hygroregelbare Lüftungsgitter – Natürliche Lüftung durch Feuchtigkeitssteuerung',
      fr:'Grille Hygroréglable Aereco – Ventilation Naturelle Contrôlée par l\'Humidité',
      es:'Rejilla Higrorreglable Aereco – Ventilación Natural Controlada por Humedad',
      it:'Griglia Igroregolab. Aereco – Ventilazione Naturale Controllata dall\'Umidità',
    },
    tagline: {
      ro:'Grilă de ventilație integrată în tâmplărie care reglează automat debitul de aer în funcție de umiditatea din cameră — 5–35 m³/h, atenuare acustică 33 dB, fără curent de aer, fără pierderi termice semnificative.',
      en:'Ventilation grille integrated in window joinery that automatically adjusts airflow based on room humidity — 5–35 m³/h, 33 dB sound attenuation, no draught, no significant heat loss.',
      de:'In den Fensterrahmen integriertes Lüftungsgitter, das den Luftstrom automatisch nach Raumfeuchte reguliert — 5–35 m³/h, 33 dB Schalldämpfung, kein Zug, kein wesentlicher Wärmeverlust.',
      fr:'Grille de ventilation intégrée dans la menuiserie qui régule automatiquement le débit d\'air en fonction de l\'humidité de la pièce — 5–35 m³/h, atténuation acoustique 33 dB, sans courant d\'air, sans pertes thermiques significatives.',
      es:'Rejilla de ventilación integrada en la carpintería que regula automáticamente el caudal de aire según la humedad de la habitación — 5–35 m³/h, atenuación acústica 33 dB, sin corriente de aire, sin pérdidas térmicas significativas.',
      it:'Griglia di ventilazione integrata negli infissi che regola automaticamente la portata d\'aria in base all\'umidità della stanza — 5–35 m³/h, attenuazione acustica 33 dB, senza corrente d\'aria, senza perdite termiche significative.',
    },
    specs: {
      ro:[['Debit aer reglabil','5 – 35 m³/h'],['Mod reglare','Higroreglabil — automat după umiditate'],['Atenuare acustică','33 dB'],['Protecție externă antiinsecte','Da'],['Tip protecție externă','Plată / Autolimitantă'],['Culori disponibile','Alb, brun, stejar auriu'],['Montaj','Integrat în profil PVC sau aluminiu'],['Dimensiuni','Variable — se decupează în profil'],['Funcționare','Pasivă — fără motor, fără curent'],],
      en:[['Adjustable airflow','5 – 35 m³/h'],['Adjustment mode','Hygro-adjustable — auto by humidity'],['Sound attenuation','33 dB'],['External insect protection','Yes'],['External protection type','Flat / Self-limiting'],['Available colours','White, brown, golden oak'],['Installation','Integrated in PVC or aluminium profile'],['Dimensions','Variable — cut into profile'],['Operation','Passive — no motor, no electricity'],],
      de:[['Regelbarer Luftstrom','5 – 35 m³/h'],['Regelungsart','Hygroregelbar — automatisch nach Feuchte'],['Schalldämpfung','33 dB'],['Außen-Insektenschutz','Ja'],['Außenschutztyp','Flach / Selbstbegrenzend'],['Verfügbare Farben','Weiß, braun, goldene Eiche'],['Montage','Integriert in PVC- oder Aluprofil'],['Abmessungen','Variabel — ins Profil einschneiden'],['Betrieb','Passiv — kein Motor, kein Strom'],],
      fr:[['Débit d\'air réglable','5 – 35 m³/h'],['Mode réglage','Hygroréglable — auto par humidité'],['Atténuation acoustique','33 dB'],['Protection ext. anti-insectes','Oui'],['Type protection ext.','Plate / Autolimitante'],['Couleurs disponibles','Blanc, brun, chêne doré'],['Pose','Intégré dans profil PVC ou aluminium'],['Dimensions','Variables — découpe dans profil'],['Fonctionnement','Passif — sans moteur, sans courant'],],
      es:[['Caudal aire regulable','5 – 35 m³/h'],['Modo regulación','Higrorreglable — auto por humedad'],['Atenuación acústica','33 dB'],['Protección ext. antiinsectos','Sí'],['Tipo protección ext.','Plana / Autolimitante'],['Colores disponibles','Blanco, marrón, roble dorado'],['Instalación','Integrado en perfil PVC o aluminio'],['Dimensiones','Variables — corte en perfil'],['Funcionamiento','Pasivo — sin motor, sin corriente'],],
      it:[['Portata aria regolabile','5 – 35 m³/h'],['Modalità regolazione','Igroregolab. — auto per umidità'],['Attenuazione acustica','33 dB'],['Protezione est. anti-insetti','Sì'],['Tipo protezione est.','Piatta / Autolimitante'],['Colori disponibili','Bianco, marrone, rovere dorato'],['Installazione','Integrato nel profilo PVC o alluminio'],['Dimensioni','Variabili — intaglio nel profilo'],['Funzionamento','Passivo — senza motore, senza corrente'],],
    },
    perf: {
      ro:[['Debit minim','5 m³/h (umiditate scăzută)'],['Debit maxim','35 m³/h (umiditate ridicată)'],['Atenuare acustică','33 dB'],['Consum electric','0 W — ventilație complet pasivă'],['Pierdere termică','Neglijabilă față de fereastră etanșă'],['Durabilitate','> 15 ani — fără piese mobile active'],],
      en:[['Minimum airflow','5 m³/h (low humidity)'],['Maximum airflow','35 m³/h (high humidity)'],['Sound attenuation','33 dB'],['Electricity consumption','0 W — completely passive ventilation'],['Heat loss','Negligible vs. airtight window'],['Durability','> 15 years — no active moving parts'],],
      de:[['Minimaler Luftstrom','5 m³/h (niedrige Feuchte)'],['Maximaler Luftstrom','35 m³/h (hohe Feuchte)'],['Schalldämpfung','33 dB'],['Stromverbrauch','0 W — vollständig passive Lüftung'],['Wärmeverlust','Vernachlässigbar ggü. dichtem Fenster'],['Haltbarkeit','> 15 Jahre — keine aktiven Bewegteile'],],
      fr:[['Débit minimal','5 m³/h (faible humidité)'],['Débit maximal','35 m³/h (humidité élevée)'],['Atténuation acoustique','33 dB'],['Consommation électrique','0 W — ventilation entièrement passive'],['Perte thermique','Négligeable vs. fenêtre étanche'],['Durabilité','> 15 ans — sans pièces mobiles actives'],],
      es:[['Caudal mínimo','5 m³/h (humedad baja)'],['Caudal máximo','35 m³/h (humedad alta)'],['Atenuación acústica','33 dB'],['Consumo eléctrico','0 W — ventilación totalmente pasiva'],['Pérdida térmica','Insignificante vs. ventana hermética'],['Durabilidad','> 15 años — sin piezas móviles activas'],],
      it:[['Portata minima','5 m³/h (umidità bassa)'],['Portata massima','35 m³/h (umidità alta)'],['Attenuazione acustica','33 dB'],['Consumo elettrico','0 W — ventilazione completamente passiva'],['Perdita termica','Trascurabile vs. finestra ermetica'],['Durata','> 15 anni — senza parti mobili attive'],],
    },
    advantages: {
      ro:['Reglare automată după umiditate — când umiditatea din cameră crește (gătit, duș, persoane), grila se deschide mai mult; când scade, se închide, fără intervenție manuală','0 wați — ventilație complet pasivă fără motor, fără consum electric, fără zgomot mecanic, fără întreținere pe toată durata de viață','Atenuare fonică 33 dB — grila filtrează zgomotul exterior, performanță similară cu a unui geam standard','Fără curent de aer — deschiderea maximă de 35 m³/h este distribuită pe toată lungimea grilei, fără jet concentrat care să deranjeze','Compatibil cu reglementările nZEB — ventilația naturală controlată higroreglabil este acceptată ca soluție de ventilație în clădirile cu consum de energie aproape zero','Integrat în profil — montajul se face prin decupare în profilul PVC sau aluminiu, fără modificare a ferestrei sau a tâmplăriei'],
      en:['Automatic humidity regulation — when room humidity rises (cooking, shower, people), the grille opens more; when it falls, it closes, without manual intervention','0 watts — completely passive ventilation without motor, no electricity consumption, no mechanical noise, no maintenance throughout lifetime','33 dB sound attenuation — the grille filters exterior noise, performance similar to a standard glass','No draught — maximum opening of 35 m³/h is distributed along the entire grille length, without concentrated jet that could disturb','Compatible with nZEB regulations — hygro-adjustable natural ventilation is accepted as a ventilation solution in nearly zero energy buildings','Integrated in profile — installation is done by cutting in the PVC or aluminium profile, without modification of the window or joinery'],
      de:['Automatische Feuchtigkeitsregelung — wenn die Raumfeuchtigkeit steigt (Kochen, Duschen, Personen), öffnet sich das Gitter mehr; wenn sie sinkt, schließt es sich, ohne manuellen Eingriff','0 Watt — vollständig passive Belüftung ohne Motor, kein Stromverbrauch, kein mechanisches Geräusch, keine Wartung während der gesamten Lebensdauer','33 dB Schalldämpfung — das Gitter filtert Außenlärm, ähnliche Leistung wie eine Standard-Glasscheibe','Kein Zug — maximale Öffnung von 35 m³/h ist über die gesamte Gitterlänge verteilt, ohne konzentrierten Luftstrahl','nZEB-konform — hygroregelbare natürliche Belüftung ist als Belüftungslösung in Niedrigstenergiegebäuden akzeptiert','In Profil integriert — Montage durch Einschnitt in das PVC- oder Aluminiumprofil, ohne Änderung des Fensters'],
      fr:['Régulation automatique par humidité — quand l\'humidité de la pièce monte (cuisine, douche, personnes), la grille s\'ouvre davantage ; quand elle baisse, elle se ferme, sans intervention manuelle','0 watt — ventilation entièrement passive sans moteur, pas de consommation électrique, pas de bruit mécanique, pas d\'entretien sur toute la durée de vie','Atténuation phonique 33 dB — la grille filtre le bruit extérieur, performance similaire à un vitrage standard','Pas de courant d\'air — ouverture maximale de 35 m³/h répartie sur toute la longueur de la grille, sans jet concentré','Compatible réglementation nZEB — la ventilation naturelle hygroréglable est acceptée comme solution de ventilation dans les bâtiments à énergie quasi nulle','Intégrée dans le profil — pose par découpe dans le profil PVC ou aluminium, sans modification de la fenêtre'],
      es:['Regulación automática por humedad — cuando la humedad de la habitación sube (cocinar, ducha, personas), la rejilla se abre más; cuando baja, se cierra, sin intervención manual','0 vatios — ventilación totalmente pasiva sin motor, sin consumo eléctrico, sin ruido mecánico, sin mantenimiento durante toda la vida útil','Atenuación acústica 33 dB — la rejilla filtra el ruido exterior, rendimiento similar al de un vidrio estándar','Sin corriente de aire — la apertura máxima de 35 m³/h se distribuye a lo largo de toda la rejilla, sin chorro concentrado','Compatible con normativa nZEB — la ventilación natural higrorreglable es aceptada como solución de ventilación en edificios de consumo casi nulo','Integrada en el perfil — la instalación se realiza mediante corte en el perfil PVC o aluminio, sin modificación de la ventana'],
      it:['Regolazione automatica per umidità — quando l\'umidità della stanza aumenta (cottura, doccia, persone), la griglia si apre di più; quando scende, si chiude, senza intervento manuale','0 watt — ventilazione completamente passiva senza motore, nessun consumo elettrico, nessun rumore meccanico, nessuna manutenzione per tutta la durata','Attenuazione acustica 33 dB — la griglia filtra il rumore esterno, prestazioni simili a un vetro standard','Nessuna corrente d\'aria — l\'apertura massima di 35 m³/h è distribuita lungo tutta la lunghezza della griglia, senza getto concentrato','Compatibile con normativa nZEB — la ventilazione naturale igroregolab. è accettata come soluzione di ventilazione negli edifici a energia quasi zero','Integrata nel profilo — l\'installazione avviene mediante intaglio nel profilo PVC o alluminio, senza modifiche alla finestra'],
    },
    seo_text: {
      ro:'Grila higroreglabilă Aereco este soluția de ventilație naturală controlată recomandată pentru tâmplăria modernă etanșă, rezolvând paradoxul clădirilor bine izolate: ferestrele din PVC sau aluminiu cu garnituri triple elimină curenții de aer nedoriți dar blochează și reînnoirea naturală a aerului, ducând la acumulare de CO₂ și umiditate excesivă. Spre deosebire de grilele de ventilație cu debit fix sau de sistemele VMC cu motor care consumă energie, Aereco funcționează complet pasiv — o lamă higroscopică din poliamidă care se deformează proporțional cu umiditatea relativă din cameră, deschizând sau închizând secțiunea de trecere fără nicio intervenție. Debitul reglabil automat de 5–35 m³/h asigură că aerul se reînnoiește exact atunci când este nevoie — mai mult când gătești sau faci duș, mai puțin când camera este goală și uscată — reducând pierderile de căldură la minimum. Atenuarea acustică de 33 dB face ca grila să nu afecteze performanța fonică a ferestrei. Montajul se realizează prin decupare simplă în profilul PVC sau aluminiu, fără modificarea ferestrei, cu protecție antiinsecte inclusă. Neofort BIZ montează grile Aereco la comandă în orice fereastră livrată, cu sau fără comandă prealabilă.',
      en:'The Aereco hygro-adjustable grille is the recommended controlled natural ventilation solution for modern airtight joinery, solving the paradox of well-insulated buildings: PVC or aluminium windows with triple gaskets eliminate unwanted draughts but also block natural air renewal, leading to CO₂ accumulation and excessive humidity. Unlike fixed-flow ventilation grilles or motor-driven VMC systems that consume energy, Aereco works completely passively — a hygroscopic polyamide blade that deforms proportionally to the relative humidity in the room, opening or closing the passage section without any intervention. The automatically adjustable airflow of 5–35 m³/h ensures that air is renewed exactly when needed — more when cooking or showering, less when the room is empty and dry — minimising heat losses. The 33 dB sound attenuation means the grille does not affect the window\'s acoustic performance. Installation is carried out by simple cutting in the PVC or aluminium profile, without modification of the window, with insect protection included. Neofort BIZ installs Aereco grilles on request in any delivered window, with or without prior order.',
      de:'Das Aereco hygroregelbare Lüftungsgitter ist die empfohlene kontrollierte natürliche Lüftungslösung für moderne dichte Fenster und löst das Paradoxon gut gedämmter Gebäude: PVC- oder Aluminiumfenster mit Dreifachdichtungen eliminieren unerwünschte Zugluft, blockieren aber auch die natürliche Lufterneuerung, was zu CO₂-Akkumulation und übermäßiger Feuchte führt. Anders als Lüftungsgitter mit festem Durchfluss oder motorgetriebene VMC-Systeme, die Energie verbrauchen, arbeitet Aereco vollständig passiv — eine hygroskopische Polyamid-Lamelle, die sich proportional zur relativen Raumfeuchte verformt, ohne jeglichen Eingriff. Der automatisch einstellbare Luftstrom von 5–35 m³/h sorgt dafür, dass die Luft genau dann erneuert wird, wenn es nötig ist — mehr beim Kochen oder Duschen, weniger wenn der Raum leer und trocken ist — und minimiert Wärmeverluste. Die 33 dB Schalldämpfung bedeutet, dass das Gitter die akustische Leistung des Fensters nicht beeinträchtigt. Die Montage erfolgt durch einfaches Einschneiden in das PVC- oder Aluminiumprofil, ohne Modifikation des Fensters, mit Insektenschutz inklusive. Neofort BIZ montiert Aereco-Gitter auf Anfrage in jedem gelieferten Fenster, mit oder ohne Vorbestellung.',
      fr:'La grille hygroréglable Aereco est la solution de ventilation naturelle contrôlée recommandée pour la menuiserie moderne étanche, résolvant le paradoxe des bâtiments bien isolés : les fenêtres PVC ou aluminium à triple joints éliminent les courants d\'air indésirables mais bloquent aussi le renouvellement naturel de l\'air, conduisant à une accumulation de CO₂ et à une humidité excessive. Contrairement aux grilles de ventilation à débit fixe ou aux systèmes VMC à moteur qui consomment de l\'énergie, Aereco fonctionne entièrement passivement — une lame hygroscopique en polyamide qui se déforme proportionnellement à l\'humidité relative de la pièce, ouvrant ou fermant la section de passage sans aucune intervention. Le débit automatiquement réglable de 5–35 m³/h garantit que l\'air est renouvelé exactement quand nécessaire — plus lors de la cuisson ou de la douche, moins quand la pièce est vide et sèche — minimisant les pertes de chaleur. L\'atténuation acoustique de 33 dB signifie que la grille n\'affecte pas les performances acoustiques de la fenêtre. La pose s\'effectue par simple découpe dans le profil PVC ou aluminium, sans modification de la fenêtre, avec protection anti-insectes incluse. Neofort BIZ monte des grilles Aereco sur demande dans toute fenêtre livrée, avec ou sans commande préalable.',
      es:'La rejilla higrorreglable Aereco es la solución de ventilación natural controlada recomendada para la carpintería moderna hermética, resolviendo la paradoja de los edificios bien aislados: las ventanas de PVC o aluminio con triple junta eliminan las corrientes de aire no deseadas pero también bloquean la renovación natural del aire, llevando a la acumulación de CO₂ y exceso de humedad. A diferencia de las rejillas de ventilación de caudal fijo o los sistemas VMC con motor que consumen energía, Aereco funciona de forma completamente pasiva — una lámina higroscópica de poliamida que se deforma proporcionalmente a la humedad relativa de la habitación, abriendo o cerrando la sección de paso sin ninguna intervención. El caudal de aire automáticamente ajustable de 5–35 m³/h garantiza que el aire se renueve exactamente cuando es necesario — más al cocinar o ducharse, menos cuando la habitación está vacía y seca — minimizando las pérdidas de calor. La atenuación acústica de 33 dB significa que la rejilla no afecta al rendimiento acústico de la ventana. La instalación se realiza mediante corte simple en el perfil PVC o aluminio, sin modificación de la ventana, con protección antiinsectos incluida. Neofort BIZ instala rejillas Aereco a pedido en cualquier ventana entregada, con o sin pedido previo.',
      it:'La griglia igroregolab. Aereco è la soluzione di ventilazione naturale controllata raccomandata per gli infissi moderni ermetici, risolvendo il paradosso degli edifici ben isolati: le finestre PVC o alluminio con guarnizioni triple eliminano le correnti d\'aria indesiderate ma bloccano anche il rinnovo naturale dell\'aria, portando ad accumulo di CO₂ e umidità eccessiva. A differenza delle griglie di ventilazione a portata fissa o dei sistemi VMC a motore che consumano energia, Aereco funziona completamente in modo passivo — una lamella igroscopica in poliammide che si deforma proporzionalmente all\'umidità relativa della stanza, aprendo o chiudendo la sezione di passaggio senza alcun intervento. La portata d\'aria automaticamente regolabile di 5–35 m³/h garantisce che l\'aria venga rinnovata esattamente quando necessario — di più durante la cottura o la doccia, di meno quando la stanza è vuota e asciutta — minimizzando le perdite di calore. L\'attenuazione acustica di 33 dB significa che la griglia non influisce sulle prestazioni acustiche della finestra. L\'installazione avviene mediante semplice intaglio nel profilo PVC o alluminio, senza modifica della finestra, con protezione anti-insetti inclusa. Neofort BIZ monta griglie Aereco su richiesta in qualsiasi finestra consegnata, con o senza ordine preventivo.',
    },
  },
};

const UI = {
  ro: { specs_title:'Specificații tehnice', perf_title:'Performanțe certificate', adv_title:'Avantaje principale', cta_h:'Solicitați ofertă pentru', cta_sub:'Consultanți disponibili Luni–Vineri, 10:00–18:00', cta_btn:'Cerere ofertă', cta_call:'Sună acum' },
  en: { specs_title:'Technical specifications', perf_title:'Certified performance', adv_title:'Key advantages', cta_h:'Request quote for', cta_sub:'Consultants available Mon–Fri, 10:00–18:00', cta_btn:'Request quote', cta_call:'Call now' },
  de: { specs_title:'Technische Daten', perf_title:'Zertifizierte Leistungen', adv_title:'Hauptvorteile', cta_h:'Angebot anfordern für', cta_sub:'Berater verfügbar Mo–Fr, 10:00–18:00', cta_btn:'Angebot anfordern', cta_call:'Jetzt anrufen' },
  fr: { specs_title:'Caractéristiques techniques', perf_title:'Performances certifiées', adv_title:'Avantages clés', cta_h:'Demander un devis pour', cta_sub:'Conseillers disponibles Lun–Ven, 10h–18h', cta_btn:'Demander un devis', cta_call:'Appeler maintenant' },
  es: { specs_title:'Especificaciones técnicas', perf_title:'Rendimiento certificado', adv_title:'Ventajas clave', cta_h:'Solicitar presupuesto para', cta_sub:'Consultores disponibles Lun–Vie, 10:00–18:00', cta_btn:'Pedir presupuesto', cta_call:'Llamar ahora' },
  it: { specs_title:'Specifiche tecniche', perf_title:'Prestazioni certificate', adv_title:'Vantaggi principali', cta_h:'Richiedi preventivo per', cta_sub:'Consulenti disponibili Lun–Ven, 10:00–18:00', cta_btn:'Richiedi preventivo', cta_call:'Chiama ora' },
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
  const desc      = (product.seo_text[locale] || product.seo_text.ro).slice(0, 160);
  const localSlug = SLUG_MAP[canonical]?.[locale] || slug;
  const altSlug   = (l) => SLUG_MAP[canonical]?.[l] || canonical;
  return {
    title: `${name} · Neofort BIZ`,
    description: desc,
    keywords: `${name} · Neofort BIZ · tâmplărie PVC Salamander · aluminiu Alumil · București`,
    robots: { index:true, follow:true, googleBot:{ index:true, follow:true, 'max-image-preview':'large', 'max-snippet':-1 } },
    alternates: {
      canonical: `${BASE}/${locale}/accesorii/${localSlug}`,
      languages: Object.fromEntries([
        ...LOCALES.map(l => [l, `${BASE}/${l}/accesorii/${altSlug(l)}`]),
        ['x-default', `${BASE}/ro/accesorii/${altSlug('ro')}`],
      ]),
    },
    openGraph: {
      type:'website', url:`${BASE}/${locale}/accesorii/${localSlug}`,
      siteName:'Neofort BIZ', title:`${name} · Neofort BIZ`, description: desc,
      images:[{ url:`${BASE}${product.img}`, width:800, height:600, alt:name }],
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: `${name} · Neofort BIZ`, description: desc, images:[`${BASE}${product.img}`] },
    },
  }
}

export default async function AccesorieProductPage({ params }) {
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
