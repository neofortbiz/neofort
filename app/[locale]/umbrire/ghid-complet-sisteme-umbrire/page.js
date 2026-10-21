import { Link } from '../../../../i18n/navigation';

import { BASE, LOCALES } from '../../../../lib/constants.js';
import { getGoogleRating } from '../../../../lib/googleRating.js';
const SLUGS = {
  ro: 'umbrire/ghid-complet-sisteme-umbrire',
  en: 'shading-systems/complete-guide',
  de: 'beschattungssysteme/kompletter-ratgeber',
  fr: 'systemes-occultation/guide-complet',
  es: 'sistemas-sombreado/guia-completa',
  it: 'sistemi-oscuramento/guida-completa',
};

const PARENT_SLUGS = {
  ro: 'umbrire', en: 'shading-systems',
  de: 'beschattungssysteme', fr: 'systemes-occultation',
  es: 'sistemas-sombreado', it: 'sistemi-oscuramento',
};

const PRICES_SLUGS = {
  ro: 'umbrire/preturi-sisteme-umbrire', en: 'shading-systems/shading-prices',
  de: 'beschattungssysteme/beschattung-preise', fr: 'systemes-occultation/prix-occultation',
  es: 'sistemas-sombreado/precios-sombreado', it: 'sistemi-oscuramento/prezzi-oscuramento',
};

const UI = {
  ro: {
    h1: 'Ghid Complet Sisteme Umbrire 2026 — Zipscreen, Raffstore, Rulouri și Pergole',
    sub: 'Ghid complet al sistemelor de umbrire exterioară: Zipscreen, Raffstore, rulouri din aluminiu și pergole Somfy — cum alegi, rezistența la vânt și montajul.',
    breadcrumb: 'Ghid Complet',
    parent_label: 'Sisteme Umbrire',
    intro: 'Umbrirea exterioară este singura care oprește căldura înainte ca aceasta să treacă prin geam. O jaluzea sau o draperie montată în interior primește radiația solară după ce a intrat deja în încăpere, deci o transformă în căldură chiar lângă tine. Neofort BIZ furnizează și montează patru familii de sisteme exterioare în București și Ilfov, toate compatibile cu tâmplăria Salamander și Alumil.',
    section1_h2: 'De ce umbrirea exterioară bate orice soluție montată în interior',
    section1: 'Radiația solară care ajunge la geam se împarte în trei: o parte se reflectă, o parte este absorbită de sticlă, iar restul trece în cameră. Un sistem montat în exterior intervine în primul pas și blochează radiația înainte de geam. Un sistem interior intervine după ce energia a intrat deja, deci poate doar să o redistribuie. Diferența se vede direct în temperatura camerei în iulie și în consumul instalației de răcire. Iar umbrirea exterioară nu înseamnă neapărat întuneric: un Zipscreen cu țesătură screen rămâne transparent, iar lamelele Raffstore se orientează oricând între 0° și 90°.',
    systems_h2: 'Sistemele de umbrire disponibile la Neofort BIZ',
    systems: [
      { name: 'Zipscreen — rulou textil exterior', uw: 'Rezistență la vânt: clasa 6 (88 km/h)', chambers: 'Ghidaje laterale ZIP, țesătură fixată', ideal: 'Terase, ferestre mari și fațade. Țesătură blackout, screen sau perforată; varianta screen rămâne transparentă și filtrează 98% din radiația UV.', link: '/umbrire/zipscreen' },
      { name: 'Raffstore — jaluzele venețiene exterioare', uw: 'Rezistență la vânt: clasa 5, EN 13561', chambers: 'Lamele din aluminiu laminat, 0°–90°', ideal: 'Birouri, livinguri și fațade vitrate. Control fin al luminii fără a închide fereastra; senzorul de vânt ridică automat jaluzeaua.', link: '/umbrire/jaluzele-venetiene-raffstore' },
      { name: 'Rulouri exterioare din aluminiu', uw: 'Antiefracție RC3', chambers: 'Lamele 7,5–19,5 mm, aluminiu extrudat izolat', ideal: 'Dormitoare și parter. Izolare termică nocturnă și izolare fonică, ghidaje securizate, timer și senzor de vânt.', link: '/umbrire/rulouri-exterioare-aluminiu' },
      { name: 'Pergole automate Somfy', uw: 'Retragere automată la vânt peste 50 km/h', chambers: 'Motor Somfy Pergola RGS io, senzor Sunis', ideal: 'Terase și grădini. Structură din aluminiu și oțel inox, pânză impermeabilă, control din telefon prin TaHoma.', link: '/umbrire/pergole-automate-somfy' },
    ],
    glass_h2: 'Țesătura și lamela — alegerea care decide rezultatul',
    glass: 'La sistemele textile, totul ține de țesătură. Zipscreen-ul se livrează cu țesătură screen, blackout sau perforată. Varianta screen rămâne transparentă și filtrează 98% din radiația UV, potrivită pentru living și birou; varianta blackout oprește lumina complet și e alegerea pentru dormitor. La sistemele cu lamele, materialul diferă după produs: rulourile au lamele din aluminiu extrudat izolat, de 7,5 până la 19,5 mm, iar jaluzelele Raffstore au lamele din aluminiu laminat, orientabile între 0° și 90°. De aici vine și diferența de rol: ruloul închide și izolează, Raffstore-ul dozează lumina.',
    montaj_h2: 'Montajul — ancoraj, ghidaje și compatibilitate cu tâmplăria',
    montaj: 'Un sistem de umbrire se ancorează în zidărie, în tocul tâmplăriei sau direct pe perete, în funcție de situația de la fața locului. Montajul pe tâmplărie Salamander sau Alumil deja instalată este posibil și recomandat. Dimensiunile maxime diferă de la un sistem la altul: rulourile ajung la 4500 mm lățime și 3000 mm înălțime, iar jaluzelele Raffstore la 5000 mm lățime. Peste aceste limite, golul se împarte în câmpuri, fiecare cu sistemul lui.',
    nzeb_h2: 'Umbrirea exterioară și performanța energetică nZEB',
    nzeb: 'În clădirile nZEB, atenția s-a mutat de la încălzire către echilibrul dintre iarnă și vară. O casă foarte bine izolată, cu triplu geam, se încălzește ușor din soare și cedează greu căldura, deci riscul de supraîncălzire estivală crește exact acolo unde izolația e mai bună. Umbrirea exterioară este cea mai directă măsură care reduce aportul solar de vară fără să atingă performanța de iarnă: vara oprește radiația înainte de geam, iarna se ridică și lasă soarele să intre. Automatizarea cu senzor de vânt și programare orară face ca sistemul să lucreze și când nu sunteți acasă.',
    faq_h2: 'Întrebări frecvente — sisteme de umbrire',
    faq: [
      { q: 'Care este diferența între Zipscreen și un rulou exterior obișnuit?', a: 'Zipscreen-ul are pânză textilă fixată în ghidaje laterale ZIP, deci nu flutură și are rezistență la vânt clasa 6 (88 km/h); cu țesătură screen, prin ea se vede în continuare afară. Ruloul exterior are lamele rigide din aluminiu: oferă izolare termică nocturnă, izolare fonică și antiefracție RC3, dar închide complet vederea.' },
      { q: 'Jaluzelele Raffstore se pot folosi și iarna?', a: 'Da. Lamelele se orientează între 0° și 90°, deci iarna pot fi deschise complet ca să lase soarele să intre, sau înclinate ca să dirijeze lumina spre tavan fără orbire. La viteze periculoase ale vântului, senzorul le ridică automat, indiferent de sezon.' },
      { q: 'Ce întreținere cer sistemele de umbrire exterioară?', a: 'Puțină. Țesătura și lamelele se spală cu apă și detergent neutru, iar ghidajele se verifică să fie libere de frunze sau praf. Recomandarea noastră este o verificare anuală a prinderilor și a automatizării.' },
      { q: 'Umbrirea exterioară întunecă prea mult camera?', a: 'Depinde de sistemul ales, și tocmai de aceea contează alegerea. Un Zipscreen cu țesătură screen taie căldura și păstrează vederea spre exterior. Un Raffstore reglează continuu, de la lumină plină la umbră. Doar țesătura blackout și ruloul din aluminiu închid lumina complet.' },
    ],
    cta_h: 'Solicitați oferta personalizată',
    cta_desc: 'Echipa Neofort BIZ vă pregătește o ofertă pentru sistemul de umbrire potrivit golurilor dumneavoastră, în București și Ilfov. Măsurătorile la fața locului se fac după semnarea contractului.',
    cta_btn: 'Cerere ofertă',
    prices_link: 'Vezi prețuri sisteme umbrire 2026',
    related_h2: 'Articole utile despre sisteme de umbrire',
  },
  en: {
    h1: 'Complete Shading Systems Guide 2026 — Zipscreen, Raffstore, Roller Shutters',
    sub: 'Complete guide to exterior shading: Zipscreen, Raffstore, aluminium roller shutters and Somfy pergolas — how to choose, wind resistance and installation.',
    breadcrumb: 'Complete Guide',
    parent_label: 'Shading Systems',
    intro: 'Exterior shading is the only kind that stops heat before it passes through the glass. A blind or curtain fitted indoors receives solar radiation after it has already entered the room, so it turns it into heat right next to you. Neofort BIZ supplies and installs four families of exterior systems in Bucharest and Ilfov, all compatible with Salamander and Alumil windows.',
    section1_h2: 'Why exterior shading beats any indoor solution',
    section1: 'Solar radiation reaching the glass splits three ways: part is reflected, part is absorbed by the glass, and the rest passes into the room. An exterior system acts at the first step and blocks the radiation before it reaches the glass. An indoor system acts once the energy is already inside, so it can only redistribute it. The difference shows directly in room temperature in July and in what the cooling system consumes. And exterior shading does not have to mean darkness: a Zipscreen with screen fabric stays transparent, and Raffstore slats can be tilted anywhere between 0° and 90°.',
    systems_h2: 'Shading Systems Available at Neofort BIZ',
    systems: [
      { name: 'Zipscreen — exterior fabric blind', uw: 'Wind resistance: class 6 (88 km/h)', chambers: 'ZIP side guides, fabric held in place', ideal: 'Terraces, large windows and facades. Blackout, screen or perforated fabric; the screen version stays transparent and filters 98% of UV radiation.', link: '/shading-systems/zipscreen-exterior-blind' },
      { name: 'Raffstore — exterior venetian blinds', uw: 'Wind resistance: class 5, EN 13561', chambers: 'Rolled aluminium slats, 0°–90°', ideal: 'Offices, living rooms and glazed facades. Fine light control without closing the window; the wind sensor raises the blind automatically.', link: '/shading-systems/raffstore-venetian-blinds' },
      { name: 'Aluminium roller shutters', uw: 'RC3 burglar resistance', chambers: '7.5–19.5 mm slats, insulated extruded aluminium', ideal: 'Bedrooms and ground floors. Night-time thermal insulation and sound insulation, secured guides, timer and wind sensor.', link: '/shading-systems/aluminium-external-roller-shutters' },
      { name: 'Somfy automatic pergolas', uw: 'Automatic retraction in wind above 50 km/h', chambers: 'Somfy Pergola RGS io motor, Sunis sensor', ideal: 'Terraces and gardens. Aluminium and stainless steel structure, waterproof fabric, smartphone control via TaHoma.', link: '/shading-systems/somfy-automatic-pergolas' },
    ],
    glass_h2: 'Fabric and slats — the choice that decides the result',
    glass: 'With fabric systems, everything comes down to the fabric. Zipscreen comes with screen, blackout or perforated fabric. The screen version stays transparent and filters 98% of UV radiation, which suits living rooms and offices; the blackout version stops light completely and is the choice for bedrooms. With slatted systems, the material depends on the product: roller shutters use insulated extruded aluminium slats of 7.5 to 19.5 mm, while Raffstore blinds use rolled aluminium slats that tilt between 0° and 90°. That is where the difference in role comes from: a roller shutter closes and insulates, a Raffstore blind meters the light.',
    montaj_h2: 'Installation — anchoring, guides and compatibility with your windows',
    montaj: 'A shading system is anchored into the masonry, into the window frame or directly onto the wall, depending on the situation on site. Fitting to Salamander or Alumil windows that are already installed is possible and recommended. Maximum dimensions vary from system to system: roller shutters reach 4500 mm wide and 3000 mm high, Raffstore blinds up to 5000 mm wide. Beyond these limits the opening is split into sections, each with its own system.',
    nzeb_h2: 'Exterior shading and nZEB energy performance',
    nzeb: 'In nZEB buildings the focus has shifted from heating to the balance between winter and summer. A very well insulated house with triple glazing warms up easily from the sun and loses heat slowly, so the risk of summer overheating grows exactly where the insulation is better. Exterior shading is the most direct measure for cutting summer solar gain without affecting winter performance: in summer it stops radiation before the glass, in winter it is raised and lets the sun in. Automation with a wind sensor and time scheduling keeps the system working even when you are not at home.',
    faq_h2: 'Frequently Asked Questions — Shading Systems',
    faq: [
      { q: 'What is the difference between a Zipscreen and an ordinary roller shutter?', a: 'A Zipscreen has fabric held in ZIP side guides, so it does not flap and has class 6 wind resistance (88 km/h); with screen fabric you can still see outside through it. A roller shutter has rigid aluminium slats: it provides night-time thermal insulation, sound insulation and RC3 burglar resistance, but it closes off the view completely.' },
      { q: 'Can Raffstore blinds be used in winter too?', a: 'Yes. The slats tilt between 0° and 90°, so in winter they can be fully opened to let the sun in, or angled to direct light towards the ceiling without glare. When the wind reaches dangerous speeds, the sensor raises them automatically, whatever the season.' },
      { q: 'What maintenance do exterior shading systems need?', a: 'Very little. Fabric and slats are washed with water and a neutral detergent, and the guides are checked to make sure they are free of leaves and dust. We recommend an annual check of the fixings and the automation.' },
      { q: 'Does exterior shading make the room too dark?', a: 'It depends on the system, which is exactly why the choice matters. A Zipscreen with screen fabric cuts heat while keeping the view outside. A Raffstore blind adjusts continuously, from full light to shade. Only blackout fabric and aluminium roller shutters shut out light completely.' },
    ],
    cta_h: 'Request a Personalised Quote',
    cta_desc: 'The Neofort BIZ team will prepare a quote for the shading system that suits your openings, in Bucharest and Ilfov. On-site measurements are taken after the contract is signed.',
    cta_btn: 'Request Quote',
    prices_link: 'See 2026 Shading System Prices',
    related_h2: 'Useful Articles About Shading Systems',
  },
  de: {
    h1: 'Kompletter Beschattungsratgeber 2026 — Zipscreen, Raffstore, Außenrollladen',
    sub: 'Kompletter Ratgeber zur Außenbeschattung: Zipscreen, Raffstore, Aluminium-Rollladen und Somfy-Pergolen — Auswahl, Windwiderstand und Montage.',
    breadcrumb: 'Kompletter Ratgeber',
    parent_label: 'Beschattungssysteme',
    intro: 'Außenbeschattung ist die einzige, die Wärme stoppt, bevor sie durch das Glas gelangt. Eine innen montierte Jalousie oder ein Vorhang erhält die Sonnenstrahlung erst, nachdem sie bereits in den Raum eingedrungen ist, und verwandelt sie so direkt neben Ihnen in Wärme. Neofort BIZ liefert und montiert in Bukarest und Ilfov vier Familien von Außensystemen, alle kompatibel mit Salamander- und Alumil-Fenstern.',
    section1_h2: 'Warum Außenbeschattung jeder innenliegenden Lösung überlegen ist',
    section1: 'Die Sonnenstrahlung, die auf das Glas trifft, teilt sich in drei Teile: Ein Teil wird reflektiert, ein Teil vom Glas absorbiert, der Rest gelangt in den Raum. Ein außenliegendes System greift beim ersten Schritt ein und blockiert die Strahlung vor dem Glas. Ein innenliegendes System greift erst ein, wenn die Energie bereits im Raum ist, und kann sie nur noch umverteilen. Der Unterschied zeigt sich direkt an der Raumtemperatur im Juli und am Verbrauch der Klimaanlage. Und Außenbeschattung bedeutet nicht zwangsläufig Dunkelheit: Ein Zipscreen mit Screen-Gewebe bleibt durchsichtig, und Raffstore-Lamellen lassen sich jederzeit zwischen 0° und 90° neigen.',
    systems_h2: 'Beschattungssysteme bei Neofort BIZ',
    systems: [
      { name: 'Zipscreen — textiles Außenrollo', uw: 'Windwiderstand: Klasse 6 (88 km/h)', chambers: 'Seitliche ZIP-Führungen, Gewebe fixiert', ideal: 'Terrassen, große Fenster und Fassaden. Gewebe Blackout, Screen oder perforiert; die Screen-Variante bleibt durchsichtig und filtert 98 % der UV-Strahlung.', link: '/beschattungssysteme/zipscreen-aussenrollo' },
      { name: 'Raffstore — Außenjalousien', uw: 'Windlast: Klasse 5, EN 13561', chambers: 'Lamellen aus gewalztem Aluminium, 0°–90°', ideal: 'Büros, Wohnzimmer und verglaste Fassaden. Feine Lichtsteuerung, ohne das Fenster zu schließen; der Windsensor fährt die Jalousie automatisch hoch.', link: '/beschattungssysteme/raffstore-aussenjalousien' },
      { name: 'Aluminium-Außenrollladen', uw: 'Einbruchschutz RC3', chambers: 'Lamellen 7,5–19,5 mm, isoliertes stranggepresstes Aluminium', ideal: 'Schlafzimmer und Erdgeschoss. Nächtliche Wärmedämmung und Schalldämmung, gesicherte Führungen, Timer und Windsensor.', link: '/beschattungssysteme/aluminium-aussenrollladen' },
      { name: 'Somfy automatische Pergolen', uw: 'Automatisches Einfahren bei Wind über 50 km/h', chambers: 'Motor Somfy Pergola RGS io, Sunis-Sensor', ideal: 'Terrassen und Gärten. Struktur aus Aluminium und Edelstahl, wasserdichtes Gewebe, Steuerung per Smartphone über TaHoma.', link: '/beschattungssysteme/somfy-automatische-pergolen' },
    ],
    glass_h2: 'Gewebe und Lamelle — die Wahl, die über das Ergebnis entscheidet',
    glass: 'Bei textilen Systemen hängt alles vom Gewebe ab. Der Zipscreen ist mit Screen-, Blackout- oder perforiertem Gewebe erhältlich. Die Screen-Variante bleibt durchsichtig und filtert 98 % der UV-Strahlung, ideal für Wohnzimmer und Büro; die Blackout-Variante hält das Licht vollständig ab und ist die Wahl fürs Schlafzimmer. Bei Lamellensystemen hängt das Material vom Produkt ab: Rollladen haben Lamellen aus isoliertem stranggepresstem Aluminium von 7,5 bis 19,5 mm, Raffstore-Jalousien Lamellen aus gewalztem Aluminium, die sich zwischen 0° und 90° neigen lassen. Daraus ergibt sich der unterschiedliche Zweck: Der Rollladen schließt und dämmt, der Raffstore dosiert das Licht.',
    montaj_h2: 'Montage — Verankerung, Führungen und Kompatibilität mit den Fenstern',
    montaj: 'Ein Beschattungssystem wird je nach Gegebenheit vor Ort im Mauerwerk, im Fensterrahmen oder direkt an der Wand verankert. Die Montage an bereits eingebauten Salamander- oder Alumil-Fenstern ist möglich und empfehlenswert. Die maximalen Abmessungen unterscheiden sich je nach System: Rollladen erreichen 4500 mm Breite und 3000 mm Höhe, Raffstore-Jalousien bis zu 5000 mm Breite. Über diese Grenzen hinaus wird die Öffnung in Felder aufgeteilt, jedes mit eigenem System.',
    nzeb_h2: 'Außenbeschattung und nZEB-Energieeffizienz',
    nzeb: 'In nZEB-Gebäuden hat sich der Fokus von der Heizung auf das Gleichgewicht zwischen Winter und Sommer verlagert. Ein sehr gut gedämmtes Haus mit Dreifachverglasung erwärmt sich leicht durch die Sonne und gibt Wärme nur langsam ab, sodass das Risiko sommerlicher Überhitzung gerade dort steigt, wo die Dämmung besser ist. Außenbeschattung ist die direkteste Maßnahme, um den sommerlichen Solareintrag zu senken, ohne die Winterleistung zu beeinträchtigen: Im Sommer stoppt sie die Strahlung vor dem Glas, im Winter wird sie hochgefahren und lässt die Sonne herein. Die Automatisierung mit Windsensor und Zeitsteuerung sorgt dafür, dass das System auch arbeitet, wenn Sie nicht zu Hause sind.',
    faq_h2: 'Häufige Fragen — Beschattungssysteme',
    faq: [
      { q: 'Was ist der Unterschied zwischen einem Zipscreen und einem normalen Rollladen?', a: 'Beim Zipscreen ist das Gewebe in seitlichen ZIP-Führungen fixiert, es flattert also nicht und hat Windwiderstandsklasse 6 (88 km/h); mit Screen-Gewebe sieht man weiterhin nach draußen. Der Rollladen hat starre Aluminiumlamellen: Er bietet nächtliche Wärmedämmung, Schalldämmung und Einbruchschutz RC3, verschließt aber die Sicht vollständig.' },
      { q: 'Kann man Raffstore-Jalousien auch im Winter nutzen?', a: 'Ja. Die Lamellen lassen sich zwischen 0° und 90° neigen, im Winter also ganz öffnen, damit die Sonne hereinkommt, oder so stellen, dass sie das Licht blendfrei zur Decke lenken. Bei gefährlichen Windgeschwindigkeiten fährt der Sensor sie automatisch hoch, unabhängig von der Jahreszeit.' },
      { q: 'Welche Wartung brauchen Außenbeschattungssysteme?', a: 'Wenig. Gewebe und Lamellen werden mit Wasser und Neutralreiniger gewaschen, die Führungen auf Laub und Staub kontrolliert. Wir empfehlen eine jährliche Prüfung der Befestigungen und der Automatik.' },
      { q: 'Macht Außenbeschattung den Raum zu dunkel?', a: 'Das hängt vom gewählten System ab, und genau deshalb ist die Wahl wichtig. Ein Zipscreen mit Screen-Gewebe hält die Wärme ab und erhält die Sicht nach draußen. Ein Raffstore regelt stufenlos von vollem Licht bis Schatten. Nur Blackout-Gewebe und Aluminium-Rollladen schließen das Licht vollständig aus.' },
    ],
    cta_h: 'Personalisiertes Angebot anfordern',
    cta_desc: 'Das Team von Neofort BIZ erstellt Ihnen ein Angebot für das passende Beschattungssystem für Ihre Öffnungen, in Bukarest und Ilfov. Das Aufmaß vor Ort erfolgt nach Vertragsabschluss.',
    cta_btn: 'Angebot anfordern',
    prices_link: 'Beschattungspreise 2026 ansehen',
    related_h2: 'Nützliche Artikel über Beschattungssysteme',
  },
  fr: {
    h1: 'Guide complet systèmes d\'occultation 2026 — Zipscreen, Raffstore, Volets roulants',
    sub: 'Guide complet de l\'occultation extérieure : Zipscreen, Raffstore, volets roulants aluminium et pergolas Somfy — choix, résistance au vent et pose.',
    breadcrumb: 'Guide complet',
    parent_label: 'Systèmes d\'occultation',
    intro: 'L\'occultation extérieure est la seule qui arrête la chaleur avant qu\'elle ne traverse le vitrage. Un store ou un rideau posé à l\'intérieur reçoit le rayonnement solaire une fois qu\'il est déjà entré dans la pièce, et le transforme donc en chaleur juste à côté de vous. Neofort BIZ fournit et pose quatre familles de systèmes extérieurs à Bucarest et Ilfov, tous compatibles avec les menuiseries Salamander et Alumil.',
    section1_h2: 'Pourquoi l\'occultation extérieure surpasse toute solution intérieure',
    section1: 'Le rayonnement solaire qui atteint le vitrage se répartit en trois : une partie est réfléchie, une partie est absorbée par le verre et le reste pénètre dans la pièce. Un système extérieur intervient dès la première étape et bloque le rayonnement avant le vitrage. Un système intérieur intervient une fois l\'énergie déjà entrée, il ne peut donc que la redistribuer. La différence se voit directement sur la température de la pièce en juillet et sur la consommation de la climatisation. Et occulter par l\'extérieur ne veut pas forcément dire faire le noir : un Zipscreen à toile screen reste transparent, et les lames Raffstore s\'orientent à tout moment entre 0° et 90°.',
    systems_h2: 'Les systèmes d\'occultation disponibles chez Neofort BIZ',
    systems: [
      { name: 'Zipscreen — store toile extérieur', uw: 'Résistance au vent : classe 6 (88 km/h)', chambers: 'Coulisses latérales ZIP, toile maintenue', ideal: 'Terrasses, grandes baies et façades. Toile blackout, screen ou perforée ; la version screen reste transparente et filtre 98 % des UV.', link: '/systemes-occultation/zipscreen-store-exterieur' },
      { name: 'Raffstore — brise-soleil orientable', uw: 'Résistance au vent : classe 5, EN 13561', chambers: 'Lames en aluminium laminé, 0°–90°', ideal: 'Bureaux, séjours et façades vitrées. Réglage fin de la lumière sans fermer la fenêtre ; le capteur de vent remonte automatiquement le store.', link: '/systemes-occultation/stores-venitiens-raffstore' },
      { name: 'Volets roulants en aluminium', uw: 'Anti-effraction RC3', chambers: 'Lames 7,5–19,5 mm, aluminium extrudé isolé', ideal: 'Chambres et rez-de-chaussée. Isolation thermique nocturne et isolation acoustique, guides sécurisés, minuterie et détecteur de vent.', link: '/systemes-occultation/volets-roulants-aluminium-exterieurs' },
      { name: 'Pergolas automatiques Somfy', uw: 'Repli automatique au vent au-delà de 50 km/h', chambers: 'Moteur Somfy Pergola RGS io, capteur Sunis', ideal: 'Terrasses et jardins. Structure en aluminium et inox, toile imperméable, pilotage depuis le smartphone via TaHoma.', link: '/systemes-occultation/pergolas-automatiques-somfy' },
    ],
    glass_h2: 'Toile et lame — le choix qui détermine le résultat',
    glass: 'Pour les systèmes textiles, tout dépend de la toile. Le Zipscreen existe en toile screen, blackout ou perforée. La version screen reste transparente et filtre 98 % des UV, idéale pour le séjour et le bureau ; la version blackout arrête complètement la lumière et convient à la chambre. Pour les systèmes à lames, le matériau dépend du produit : les volets roulants ont des lames en aluminium extrudé isolé de 7,5 à 19,5 mm, les brise-soleil Raffstore des lames en aluminium laminé orientables entre 0° et 90°. D\'où la différence de rôle : le volet roulant ferme et isole, le Raffstore dose la lumière.',
    montaj_h2: 'La pose — ancrage, coulisses et compatibilité avec les menuiseries',
    montaj: 'Un système d\'occultation s\'ancre dans la maçonnerie, dans le dormant ou directement sur le mur, selon la configuration sur site. La pose sur des menuiseries Salamander ou Alumil déjà installées est possible et recommandée. Les dimensions maximales varient d\'un système à l\'autre : les volets roulants atteignent 4500 mm de largeur et 3000 mm de hauteur, les brise-soleil Raffstore jusqu\'à 5000 mm de largeur. Au-delà, la baie est divisée en sections, chacune avec son propre système.',
    nzeb_h2: 'Occultation extérieure et performance énergétique nZEB',
    nzeb: 'Dans les bâtiments nZEB, l\'attention s\'est déplacée du chauffage vers l\'équilibre entre l\'hiver et l\'été. Une maison très bien isolée, en triple vitrage, se réchauffe facilement au soleil et perd lentement sa chaleur : le risque de surchauffe estivale augmente donc précisément là où l\'isolation est la meilleure. L\'occultation extérieure est la mesure la plus directe pour réduire les apports solaires d\'été sans toucher à la performance d\'hiver : l\'été, elle arrête le rayonnement avant le vitrage ; l\'hiver, on la remonte et elle laisse entrer le soleil. L\'automatisation avec capteur de vent et programmation horaire fait fonctionner le système même en votre absence.',
    faq_h2: 'Questions fréquentes — systèmes d\'occultation',
    faq: [
      { q: 'Quelle est la différence entre un Zipscreen et un volet roulant classique ?', a: 'Le Zipscreen a une toile maintenue dans des coulisses latérales ZIP : elle ne flotte pas et offre une résistance au vent de classe 6 (88 km/h) ; avec une toile screen, on voit toujours dehors. Le volet roulant a des lames rigides en aluminium : il apporte une isolation thermique nocturne, une isolation acoustique et une protection anti-effraction RC3, mais il masque complètement la vue.' },
      { q: 'Les brise-soleil Raffstore s\'utilisent-ils aussi en hiver ?', a: 'Oui. Les lames s\'orientent entre 0° et 90° : en hiver, on peut les ouvrir entièrement pour laisser entrer le soleil, ou les incliner pour renvoyer la lumière vers le plafond sans éblouissement. Lorsque le vent atteint des vitesses dangereuses, le capteur les remonte automatiquement, quelle que soit la saison.' },
      { q: 'Quel entretien demandent les systèmes d\'occultation extérieure ?', a: 'Très peu. La toile et les lames se lavent à l\'eau avec un détergent neutre, et l\'on vérifie que les coulisses sont libres de feuilles et de poussière. Nous recommandons une vérification annuelle des fixations et de l\'automatisme.' },
      { q: 'L\'occultation extérieure assombrit-elle trop la pièce ?', a: 'Cela dépend du système choisi, et c\'est justement pour cela que le choix compte. Un Zipscreen à toile screen coupe la chaleur tout en préservant la vue vers l\'extérieur. Un Raffstore règle en continu, de la pleine lumière à l\'ombre. Seuls la toile blackout et le volet roulant en aluminium font le noir complet.' },
    ],
    cta_h: 'Demander un devis personnalisé',
    cta_desc: 'L\'équipe Neofort BIZ vous prépare un devis pour le système d\'occultation adapté à vos baies, à Bucarest et Ilfov. La prise de mesures sur site intervient après la signature du contrat.',
    cta_btn: 'Demander un devis',
    prices_link: 'Voir les prix des systèmes d\'occultation 2026',
    related_h2: 'Articles utiles sur les systèmes d\'occultation',
  },
  es: {
    h1: 'Guía completa sistemas de sombreado 2026 — Zipscreen, Raffstore, Persianas aluminio',
    sub: 'Guía completa del sombreado exterior: Zipscreen, Raffstore, persianas de aluminio y pérgolas Somfy — cómo elegir, resistencia al viento e instalación.',
    breadcrumb: 'Guía completa',
    parent_label: 'Sistemas de sombreado',
    intro: 'El sombreado exterior es el único que detiene el calor antes de que atraviese el vidrio. Una persiana o una cortina instalada en el interior recibe la radiación solar cuando ya ha entrado en la habitación, así que la convierte en calor justo a su lado. Neofort BIZ suministra e instala cuatro familias de sistemas exteriores en Bucarest e Ilfov, todos compatibles con la carpintería Salamander y Alumil.',
    section1_h2: 'Por qué el sombreado exterior supera cualquier solución interior',
    section1: 'La radiación solar que llega al vidrio se reparte en tres: una parte se refleja, otra la absorbe el vidrio y el resto entra en la habitación. Un sistema exterior actúa en el primer paso y bloquea la radiación antes del vidrio. Un sistema interior actúa cuando la energía ya ha entrado, de modo que solo puede redistribuirla. La diferencia se nota directamente en la temperatura de la habitación en julio y en el consumo del aire acondicionado. Y sombrear por fuera no significa necesariamente oscuridad: un Zipscreen con tejido screen sigue siendo transparente, y las lamas Raffstore se orientan en cualquier momento entre 0° y 90°.',
    systems_h2: 'Sistemas de sombreado disponibles en Neofort BIZ',
    systems: [
      { name: 'Zipscreen — toldo vertical exterior', uw: 'Resistencia al viento: clase 6 (88 km/h)', chambers: 'Guías laterales ZIP, tejido sujeto', ideal: 'Terrazas, ventanales y fachadas. Tejido blackout, screen o perforado; la versión screen sigue siendo transparente y filtra el 98 % de la radiación UV.', link: '/sistemas-sombreado/zipscreen-toldo-exterior' },
      { name: 'Raffstore — persianas venecianas exteriores', uw: 'Resistencia al viento: clase 5, EN 13561', chambers: 'Lamas de aluminio laminado, 0°–90°', ideal: 'Oficinas, salones y fachadas acristaladas. Control preciso de la luz sin cerrar la ventana; el sensor de viento sube la persiana automáticamente.', link: '/sistemas-sombreado/persianas-venecianas-raffstore' },
      { name: 'Persianas exteriores de aluminio', uw: 'Antirrobo RC3', chambers: 'Lamas de 7,5–19,5 mm, aluminio extruido aislado', ideal: 'Dormitorios y plantas bajas. Aislamiento térmico nocturno y aislamiento acústico, guías seguras, temporizador y sensor de viento.', link: '/sistemas-sombreado/persianas-exteriores-aluminio' },
      { name: 'Pérgolas automáticas Somfy', uw: 'Repliegue automático con viento superior a 50 km/h', chambers: 'Motor Somfy Pergola RGS io, sensor Sunis', ideal: 'Terrazas y jardines. Estructura de aluminio y acero inoxidable, lona impermeable, control desde el móvil con TaHoma.', link: '/sistemas-sombreado/pergolas-automaticas-somfy' },
    ],
    glass_h2: 'Tejido y lama: la elección que decide el resultado',
    glass: 'En los sistemas textiles, todo depende del tejido. El Zipscreen se ofrece con tejido screen, blackout o perforado. La versión screen sigue siendo transparente y filtra el 98 % de la radiación UV, adecuada para salón y oficina; la versión blackout bloquea la luz por completo y es la opción para el dormitorio. En los sistemas de lamas, el material depende del producto: las persianas enrollables llevan lamas de aluminio extruido aislado de 7,5 a 19,5 mm, y las venecianas Raffstore, lamas de aluminio laminado orientables entre 0° y 90°. De ahí la diferencia de función: la persiana enrollable cierra y aísla; la Raffstore dosifica la luz.',
    montaj_h2: 'La instalación: anclaje, guías y compatibilidad con la carpintería',
    montaj: 'Un sistema de sombreado se ancla en la obra, en el marco de la ventana o directamente en la pared, según la situación en el lugar. El montaje sobre carpintería Salamander o Alumil ya instalada es posible y recomendable. Las dimensiones máximas varían según el sistema: las persianas enrollables alcanzan 4500 mm de ancho y 3000 mm de alto, y las venecianas Raffstore, hasta 5000 mm de ancho. Por encima de estos límites, el hueco se divide en tramos, cada uno con su propio sistema.',
    nzeb_h2: 'Sombreado exterior y eficiencia energética nZEB',
    nzeb: 'En los edificios nZEB, la atención ha pasado de la calefacción al equilibrio entre invierno y verano. Una casa muy bien aislada y con triple acristalamiento se calienta fácilmente con el sol y pierde el calor despacio, así que el riesgo de sobrecalentamiento en verano aumenta precisamente donde el aislamiento es mejor. El sombreado exterior es la medida más directa para reducir la ganancia solar en verano sin afectar al rendimiento en invierno: en verano detiene la radiación antes del vidrio; en invierno se recoge y deja entrar el sol. La automatización con sensor de viento y programación horaria hace que el sistema funcione aunque usted no esté en casa.',
    faq_h2: 'Preguntas frecuentes: sistemas de sombreado',
    faq: [
      { q: '¿Qué diferencia hay entre un Zipscreen y una persiana enrollable normal?', a: 'El Zipscreen tiene el tejido sujeto en guías laterales ZIP, así que no ondea y ofrece resistencia al viento de clase 6 (88 km/h); con tejido screen se sigue viendo el exterior. La persiana enrollable tiene lamas rígidas de aluminio: aporta aislamiento térmico nocturno, aislamiento acústico y protección antirrobo RC3, pero cierra la vista por completo.' },
      { q: '¿Las venecianas Raffstore también se usan en invierno?', a: 'Sí. Las lamas se orientan entre 0° y 90°, así que en invierno pueden abrirse del todo para dejar entrar el sol o inclinarse para dirigir la luz hacia el techo sin deslumbrar. Cuando el viento alcanza velocidades peligrosas, el sensor las sube automáticamente, sea cual sea la estación.' },
      { q: '¿Qué mantenimiento necesitan los sistemas de sombreado exterior?', a: 'Muy poco. El tejido y las lamas se lavan con agua y detergente neutro, y se comprueba que las guías estén libres de hojas y polvo. Recomendamos una revisión anual de las fijaciones y de la automatización.' },
      { q: '¿El sombreado exterior oscurece demasiado la habitación?', a: 'Depende del sistema elegido, y precisamente por eso importa la elección. Un Zipscreen con tejido screen corta el calor y mantiene la vista al exterior. Una Raffstore regula de forma continua, de la luz plena a la sombra. Solo el tejido blackout y la persiana de aluminio oscurecen por completo.' },
    ],
    cta_h: 'Solicitar presupuesto personalizado',
    cta_desc: 'El equipo de Neofort BIZ le prepara un presupuesto para el sistema de sombreado adecuado a sus huecos, en Bucarest e Ilfov. La medición en obra se realiza tras la firma del contrato.',
    cta_btn: 'Solicitar presupuesto',
    prices_link: 'Ver precios de sistemas de sombreado 2026',
    related_h2: 'Artículos útiles sobre sistemas de sombreado',
  },
  it: {
    h1: 'Guida completa sistemi di oscuramento 2026 — Zipscreen, Raffstore, Tapparelle',
    sub: 'Guida completa all\'oscuramento esterno: Zipscreen, Raffstore, tapparelle in alluminio e pergole Somfy — come scegliere, resistenza al vento e posa.',
    breadcrumb: 'Guida completa',
    parent_label: 'Sistemi di oscuramento',
    intro: 'L\'oscuramento esterno è l\'unico che ferma il calore prima che attraversi il vetro. Una tenda o una veneziana montata all\'interno riceve la radiazione solare quando è già entrata nella stanza, e quindi la trasforma in calore proprio accanto a voi. Neofort BIZ fornisce e installa quattro famiglie di sistemi esterni a Bucarest e Ilfov, tutti compatibili con gli infissi Salamander e Alumil.',
    section1_h2: 'Perché l\'oscuramento esterno batte qualsiasi soluzione interna',
    section1: 'La radiazione solare che arriva sul vetro si divide in tre: una parte viene riflessa, una parte è assorbita dal vetro e il resto entra nella stanza. Un sistema esterno interviene al primo passaggio e blocca la radiazione prima del vetro. Un sistema interno interviene quando l\'energia è già entrata, quindi può solo ridistribuirla. La differenza si vede direttamente nella temperatura della stanza a luglio e nei consumi del climatizzatore. E oscurare dall\'esterno non significa per forza fare buio: uno Zipscreen con tessuto screen resta trasparente, e le lamelle Raffstore si orientano in qualsiasi momento tra 0° e 90°.',
    systems_h2: 'I sistemi di oscuramento disponibili da Neofort BIZ',
    systems: [
      { name: 'Zipscreen — tenda tecnica esterna', uw: 'Resistenza al vento: classe 6 (88 km/h)', chambers: 'Guide laterali ZIP, tessuto trattenuto', ideal: 'Terrazze, grandi vetrate e facciate. Tessuto blackout, screen o perforato; la versione screen resta trasparente e filtra il 98% dei raggi UV.', link: '/sistemi-oscuramento/zipscreen-tenda-esterna' },
      { name: 'Raffstore — frangisole orientabile', uw: 'Resistenza al vento: classe 5, EN 13561', chambers: 'Lamelle in alluminio laminato, 0°–90°', ideal: 'Uffici, soggiorni e facciate vetrate. Controllo fine della luce senza chiudere la finestra; il sensore vento solleva automaticamente la veneziana.', link: '/sistemi-oscuramento/veneziane-raffstore' },
      { name: 'Tapparelle esterne in alluminio', uw: 'Antieffrazione RC3', chambers: 'Lamelle 7,5–19,5 mm, alluminio estruso isolato', ideal: 'Camere e piano terra. Isolamento termico notturno e isolamento acustico, guide sicure, timer e sensore vento.', link: '/sistemi-oscuramento/tapparelle-esterne-alluminio' },
      { name: 'Pergole automatiche Somfy', uw: 'Rientro automatico con vento oltre 50 km/h', chambers: 'Motore Somfy Pergola RGS io, sensore Sunis', ideal: 'Terrazze e giardini. Struttura in alluminio e acciaio inox, telo impermeabile, controllo da smartphone con TaHoma.', link: '/sistemi-oscuramento/pergole-automatiche-somfy' },
    ],
    glass_h2: 'Tessuto e lamella: la scelta che decide il risultato',
    glass: 'Nei sistemi tessili tutto dipende dal tessuto. Lo Zipscreen è disponibile con tessuto screen, blackout o perforato. La versione screen resta trasparente e filtra il 98% dei raggi UV, adatta a soggiorno e ufficio; la versione blackout blocca completamente la luce ed è la scelta per la camera. Nei sistemi a lamelle il materiale dipende dal prodotto: le tapparelle hanno lamelle in alluminio estruso isolato da 7,5 a 19,5 mm, i frangisole Raffstore lamelle in alluminio laminato orientabili tra 0° e 90°. Da qui la differenza di ruolo: la tapparella chiude e isola, il Raffstore dosa la luce.',
    montaj_h2: 'La posa: ancoraggio, guide e compatibilità con gli infissi',
    montaj: 'Un sistema di oscuramento si ancora nella muratura, nel telaio della finestra o direttamente a parete, a seconda della situazione in cantiere. La posa su infissi Salamander o Alumil già installati è possibile e consigliata. Le dimensioni massime variano da sistema a sistema: le tapparelle arrivano a 4500 mm di larghezza e 3000 mm di altezza, i frangisole Raffstore fino a 5000 mm di larghezza. Oltre questi limiti il vano si divide in campate, ognuna con il proprio sistema.',
    nzeb_h2: 'Oscuramento esterno e prestazioni energetiche nZEB',
    nzeb: 'Negli edifici nZEB l\'attenzione si è spostata dal riscaldamento all\'equilibrio tra inverno ed estate. Una casa molto ben isolata, con triplo vetro, si scalda facilmente al sole e cede lentamente il calore, quindi il rischio di surriscaldamento estivo cresce proprio dove l\'isolamento è migliore. L\'oscuramento esterno è la misura più diretta per ridurre gli apporti solari estivi senza intaccare le prestazioni invernali: d\'estate ferma la radiazione prima del vetro, d\'inverno si alza e lascia entrare il sole. L\'automazione con sensore vento e programmazione oraria fa lavorare il sistema anche quando non siete in casa.',
    faq_h2: 'Domande frequenti — sistemi di oscuramento',
    faq: [
      { q: 'Che differenza c\'è tra uno Zipscreen e una tapparella tradizionale?', a: 'Lo Zipscreen ha il tessuto trattenuto in guide laterali ZIP, quindi non sbatte e ha una resistenza al vento di classe 6 (88 km/h); con il tessuto screen si continua a vedere fuori. La tapparella ha lamelle rigide in alluminio: offre isolamento termico notturno, isolamento acustico e protezione antieffrazione RC3, ma chiude completamente la vista.' },
      { q: 'I frangisole Raffstore si usano anche d\'inverno?', a: 'Sì. Le lamelle si orientano tra 0° e 90°, quindi d\'inverno si possono aprire del tutto per far entrare il sole, oppure inclinare per indirizzare la luce verso il soffitto senza abbagliamento. Quando il vento raggiunge velocità pericolose, il sensore le solleva automaticamente, in qualsiasi stagione.' },
      { q: 'Che manutenzione richiedono i sistemi di oscuramento esterno?', a: 'Poca. Tessuto e lamelle si lavano con acqua e detergente neutro, e si controlla che le guide siano libere da foglie e polvere. Consigliamo una verifica annuale degli ancoraggi e dell\'automazione.' },
      { q: 'L\'oscuramento esterno rende la stanza troppo buia?', a: 'Dipende dal sistema scelto, ed è proprio per questo che la scelta conta. Uno Zipscreen con tessuto screen taglia il calore e mantiene la vista verso l\'esterno. Un Raffstore regola in modo continuo, dalla piena luce all\'ombra. Solo il tessuto blackout e la tapparella in alluminio fanno buio completo.' },
    ],
    cta_h: 'Richiedi un preventivo personalizzato',
    cta_desc: 'Il team Neofort BIZ vi prepara un preventivo per il sistema di oscuramento adatto ai vostri vani, a Bucarest e Ilfov. Il rilievo in loco avviene dopo la firma del contratto.',
    cta_btn: 'Richiedi preventivo',
    prices_link: 'Vedi prezzi sistemi di oscuramento 2026',
    related_h2: 'Articoli utili sui sistemi di oscuramento',
  },
};

const BLOG_LINKS = {
  ro: [
    { slug: 'zipscreen-umbrire-terasa-ghid-complet', label: 'Zipscreen — ghid complet 2026: blackout vs screen, prețuri și comparație cu rulouri exterioare' },
    { slug: 'jaluzele-raffstore-vs-rulouri-aluminiu', label: 'Jaluzele Raffstore vs Rulouri exterioare aluminiu — ce sistem de umbrire alegi?' },
    { slug: 'rulouri-zipscreen-blackout-sau-transparent-cum-alegi', label: 'Zipscreen Blackout sau Transparent? Cum alegi țesătura potrivită pentru terasa sau fereastra ta' },
    { slug: 'usa-culisanta-pvc-salamander-evolutiondrive-plus-plasa-plisse', label: 'Ușă Culisantă PVC Salamander evolutionDrive Plus+ cu Plasă Plissé Culisantă — Ghid complet' },
  ],
  en: [
    { slug: 'zipscreen-terrace-shading-complete-guide', label: 'Zipscreen — complete guide 2026: blackout vs screen, prices and comparison with roller shutters' },
    { slug: 'raffstore-blinds-vs-aluminium-shutters', label: 'Raffstore Blinds vs Aluminium Exterior Shutters — Which Shading System to Choose?' },
    { slug: 'zipscreen-blinds-blackout-or-transparent-how-to-choose', label: 'Zipscreen Blackout or Transparent? How to choose the right fabric for your terrace or window' },
    { slug: 'salamander-evolutiondrive-plus-sliding-door-plisse-screen', label: 'Salamander evolutionDrive Plus+ Sliding PVC Door with Plissé Screen — Complete Guide' },
  ],
  de: [
    { slug: 'zipscreen-terrassenbeschattung-komplettleitfaden', label: 'Zipscreen — Komplettleitfaden 2026: Blackout vs Screen, Preise und Vergleich mit Rollläden' },
    { slug: 'raffstore-jalousien-vs-aluminiumrolllaeden', label: 'Raffstore-Jalousien vs. Aluminiumrollläden — welches Beschattungssystem wählen?' },
    { slug: 'zipscreen-rollos-blackout-oder-transparent-wie-waehlen', label: 'Zipscreen Blackout oder Transparent? Wie Sie das richtige Gewebe für Ihre Terrasse oder Ihr Fenster wählen' },
    { slug: 'salamander-evolutiondrive-plus-schiebetuer-plissee', label: 'Salamander evolutionDrive Plus+ Schiebetür PVC mit Plissee-Insektenschutz — Vollständiger Leitfaden' },
  ],
  fr: [
    { slug: 'zipscreen-ombriere-terrasse-guide-complet', label: 'Zipscreen — guide complet 2026 : blackout vs screen, prix et comparaison avec volets roulants' },
    { slug: 'stores-raffstore-vs-volets-roulants-aluminium', label: 'Stores Raffstore vs volets roulants aluminium — quel système d\'ombrage choisir ?' },
    { slug: 'stores-zipscreen-occultant-ou-transparent-comment-choisir', label: 'Zipscreen occultant ou transparent ? Comment choisir le bon tissu pour votre terrasse ou fenêtre' },
    { slug: 'porte-coulissante-pvc-salamander-evolutiondrive-plus-moustiquaire-plisse', label: 'Porte coulissante PVC Salamander evolutionDrive Plus+ avec moustiquaire plissée — Guide complet' },
  ],
  es: [
    { slug: 'zipscreen-sombreado-terraza-guia-completa', label: 'Zipscreen — guía completa 2026: blackout vs screen, precios y comparación con persianas enrollables' },
    { slug: 'persianas-raffstore-vs-cierres-enrollables-aluminio', label: 'Persianas Raffstore vs cierres enrollables aluminio — ¿qué sistema de sombreado elegir?' },
    { slug: 'persianas-zipscreen-blackout-o-transparente-como-elegir', label: '¿Zipscreen blackout o transparente? Cómo elegir el tejido adecuado para tu terraza o ventana' },
    { slug: 'puerta-corredera-pvc-salamander-evolutiondrive-plus-mosquitera-plise', label: 'Puerta corredera PVC Salamander evolutionDrive Plus+ con mosquitera plisada — Guía completa' },
  ],
  it: [
    { slug: 'zipscreen-ombreggiatura-terrazza-guida-completa', label: 'Zipscreen — guida completa 2026: blackout vs screen, prezzi e confronto con tapparelle' },
    { slug: 'veneziane-raffstore-vs-tapparelle-alluminio', label: 'Veneziane Raffstore vs tapparelle alluminio — quale sistema di ombreggiamento scegliere?' },
    { slug: 'tende-zipscreen-oscuranti-o-trasparenti-come-scegliere', label: 'Zipscreen oscurante o trasparente? Come scegliere il tessuto giusto per la tua terrazza o finestra' },
    { slug: 'porta-scorrevole-pvc-salamander-evolutiondrive-plus-zanzariera-plisse', label: 'Porta scorrevole PVC Salamander evolutionDrive Plus+ con zanzariera plissé — Guida completa' },
  ],
};

const WA_URLS = {
  ro: 'https://wa.me/40752443435?text=Buna%20ziua%21%20Doresc%20o%20oferta%20pentru%20sisteme%20de%20umbrire.',
  en: 'https://wa.me/40752443435?text=Hello%21%20Quote%20for%20shading%20systems.',
  de: 'https://wa.me/40752443435?text=Hallo%21%20Angebot%20fur%20Beschattungssysteme.',
  fr: 'https://wa.me/40752443435?text=Bonjour%21%20Devis%20systemes%20occultation.',
  es: 'https://wa.me/40752443435?text=Hola%21%20Presupuesto%20sistemas%20sombreado.',
  it: 'https://wa.me/40752443435?text=Buongiorno%21%20Preventivo%20sistemi%20oscuramento.',
};
const WA_LABELS = {
  ro: 'WhatsApp',
  en: 'WhatsApp',
  de: 'WhatsApp',
  fr: 'WhatsApp',
  es: 'WhatsApp',
  it: 'WhatsApp',
};
const MID_TITLES = {
  ro: 'Solicitați oferta personalizată — răspundem în 2 ore',
  en: 'Request your personalised quote — we reply within 2 hours',
  de: 'Persönliches Angebot anfordern — Antwort in 2 Stunden',
  fr: 'Demandez votre devis personnalisé — réponse en 2 heures',
  es: 'Solicite su presupuesto personalizado — respondemos en 2 horas',
  it: 'Richiedi il tuo preventivo personalizzato — rispondiamo in 2 ore',
};
const MID_DESCS = {
  // v286: nu mai sunt siruri, ci functii de { rating, count }. Numarul de
  // recenzii venea hardcodat aici si trebuia corectat de mana la fiecare
  // schimbare — exact ce s-a intamplat in v283, pe 64 de locuri.
  ro: (r) => `Montaj în București și Ilfov. Ofertă în 48h. ${r.count} recenzii Google ${r.rating.toFixed(1)}/5.`,
  en: (r) => `Installation in Bucharest and Ilfov. Quote in 48h. ${r.count} Google reviews ${r.rating.toFixed(1)}/5.`,
  de: (r) => `Montage in Bukarest und Ilfov. Angebot in 48h. ${r.count} Google-Bewertungen ${r.rating.toFixed(1)}/5.`,
  fr: (r) => `Pose à Bucarest et Ilfov. Devis en 48h. ${r.count} avis Google ${r.rating.toFixed(1)}/5.`,
  es: (r) => `Instalación en Bucarest e Ilfov. Presupuesto en 48h. ${r.count} reseñas Google ${r.rating.toFixed(1)}/5.`,
  it: (r) => `Posa a Bucarest e Ilfov. Preventivo in 48h. ${r.count} recensioni Google ${r.rating.toFixed(1)}/5.`,
};

export async function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const ui = UI[locale] || UI.ro;
  const slug = SLUGS[locale] || SLUGS.ro;
  const canonical = `${BASE}/${locale}/${slug}`;
  return {
    title: `${ui.h1} | Neofort BIZ`,
    description: ui.sub,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/${SLUGS[l]}`])),
        'x-default': `${BASE}/ro/${SLUGS.ro}`,
      },
    },
    openGraph: { type: 'article', url: canonical, title: ui.h1, description: ui.sub, siteName: 'Neofort BIZ', images: [{ url: `${BASE}/og/Sisteme_Umbrire.jpg`, width: 1200, height: 630, type:'image/jpeg' }] },
    twitter: { card: 'summary_large_image', site: '@NeofortBIZ', title: ui.h1, description: ui.sub, images: [`${BASE}/og/Sisteme_Umbrire.jpg`] },
  };
}

export default async function UmbrireGhidPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const waUrl = WA_URLS[locale] || WA_URLS.ro;
  const waLabel = WA_LABELS[locale] || WA_LABELS.ro;
  const midTitle = MID_TITLES[locale] || MID_TITLES.ro;
  const googleRating = await getGoogleRating();
  const midDesc = (MID_DESCS[locale] || MID_DESCS.ro)(googleRating);
  const parentSlug = PARENT_SLUGS[locale] || PARENT_SLUGS.ro;
  const pricesSlug = PRICES_SLUGS[locale] || PRICES_SLUGS.ro;
  const blogLinks = BLOG_LINKS[locale] || BLOG_LINKS.ro;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: ui.h1,
    description: ui.sub,
    author: { '@type': 'Organization', name: 'Neofort BIZ', url: BASE },
    publisher: { '@type': 'Organization', name: 'Neofort BIZ', url: BASE },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/${locale}/${SLUGS[locale] || SLUGS.ro}` },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ui.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const iBase = { width: '100%', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '.04em' };


  // v278: BreadcrumbList lipsea pe aceasta pagina, desi exista pe restul sitului.
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    '@id': `${BASE}/${locale}/${SLUGS[locale] || SLUGS.ro}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: {ro:'Acasă',en:'Home',de:'Startseite',fr:'Accueil',es:'Inicio',it:'Home'}[locale] || 'Acasă', item: `${BASE}/${locale}` },
      { '@type': 'ListItem', position: 2, name: ui.parent_label, item: `${BASE}/${locale}/${parentSlug}` },
      { '@type': 'ListItem', position: 3, name: ui.h1, item: `${BASE}/${locale}/${SLUGS[locale] || SLUGS.ro}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#2d1a3a 0%,#5a2d6e 60%,#8a4a9e 100%)', padding: '72px 24px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginBottom: '12px' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Neofort BIZ</Link>
            {' '}&rsaquo;{' '}
            <Link href={`/${parentSlug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{ui.parent_label}</Link>
            {' '}&rsaquo; {ui.breadcrumb}
          </div>
          <h1 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.6rem,4vw,2.6rem)', letterSpacing: '.04em', textTransform: 'uppercase', color: '#fff', margin: '0 0 16px', lineHeight: 1.15 }}>
            {ui.h1}
          </h1>
          <p style={{ fontSize: 'clamp(.85rem,2vw,1rem)', color: 'rgba(255,255,255,.75)', lineHeight: 1.65, maxWidth: '700px', margin: '0 auto 28px' }}>
            {ui.sub}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', background: '#9e6d16', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none' }}>
              {ui.cta_btn}
            </Link>
            <Link href={`/${pricesSlug}`} style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 500, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', border: '1px solid rgba(255,255,255,.4)' }}>
              {ui.prices_link}
            </Link>

            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#188842', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {waLabel}
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 24px' }}>

        {/* INTRO */}
        <p style={{ fontSize: '1.05rem', color: '#0d0d0d', lineHeight: 1.75, marginBottom: '48px', borderLeft: '3px solid #6a2d9e', paddingLeft: '20px' }}>
          {ui.intro}
        </p>

        {/* SECTIUNEA 1 */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '16px' }}>
          {ui.section1_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#1e1e1e', lineHeight: 1.75, marginBottom: '48px' }}>
          {ui.section1}
        </p>

        {/* SISTEME */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '24px' }}>
          {ui.systems_h2}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(270px,1fr))', gap: '16px', marginBottom: '48px' }}>
          {ui.systems.map((sys, i) => (
            <Link key={i} href={sys.link} style={{ textDecoration: 'none' }}>
              <div style={{ border: '1px solid #e8e8e4', padding: '20px', background: '#fafaf8', transition: 'border-color .2s', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '.85rem', letterSpacing: '.08em', textTransform: 'uppercase', color: '#15222e', marginBottom: '8px' }}>{sys.name}</div>
                <div style={{ fontSize: '.78rem', color: '#2f1446', fontWeight: 600, marginBottom: '4px' }}>{sys.uw}</div>
                <div style={{ fontSize: '.75rem', color: '#555555', marginBottom: '8px' }}>{sys.chambers}</div>
                <div style={{ fontSize: '.78rem', color: '#1e1e1e', lineHeight: 1.5 }}>{sys.ideal}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* GEAM */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '16px' }}>
          {ui.glass_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#1e1e1e', lineHeight: 1.75, marginBottom: '48px' }}>{ui.glass}</p>

        {/* MONTAJ */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '16px' }}>
          {ui.montaj_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#1e1e1e', lineHeight: 1.75, marginBottom: '48px' }}>{ui.montaj}</p>

        {/* nZEB */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '16px' }}>
          {ui.nzeb_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#1e1e1e', lineHeight: 1.75, marginBottom: '48px' }}>{ui.nzeb}</p>

{/* MID-PAGE WA CTA */}
        <div style={{background:'linear-gradient(135deg,#075e54 0%,#128c7e 100%)',padding:'28px 24px',borderRadius:'4px',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',gap:'10px',margin:'0 0 48px'}}>
          <div style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700,fontSize:'clamp(1rem,3vw,1.3rem)',letterSpacing:'.05em',textTransform:'uppercase',color:'#fff',lineHeight:1.2}}>
            {midTitle}
          </div>
          <div style={{fontSize:'.8rem',color:'rgba(255,255,255,.8)',lineHeight:1.5,maxWidth:'480px'}}>
            {midDesc}
          </div>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            style={{display:'inline-flex',alignItems:'center',gap:'10px',background:'#188842',color:'#fff',fontFamily:'Barlow Condensed,sans-serif',fontWeight:700,fontSize:'.78rem',letterSpacing:'.15em',textTransform:'uppercase',padding:'12px 24px',textDecoration:'none',borderRadius:'0',marginTop:'4px'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {waLabel}
          </a>
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '24px' }}>
          {ui.faq_h2}
        </h2>
        <div style={{ marginBottom: '48px' }}>
          {ui.faq.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid #eee', padding: '20px 0' }}>
              <div style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.95rem', letterSpacing: '.05em', color: '#15222e', marginBottom: '8px' }}>{item.q}</div>
              <div style={{ fontSize: '.88rem', color: '#2e2e2e', lineHeight: 1.65 }}>{item.a}</div>
            </div>
          ))}
        </div>

        {/* ARTICOLE CORELATE */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '20px' }}>
          {ui.related_h2}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '12px', marginBottom: '56px' }}>
          {blogLinks.map((art, i) => (
            <Link key={i} href={`/blog/${art.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '16px', border: '1px solid #e8e8e4', background: '#fafaf8', fontSize: '.8rem', fontFamily: 'Barlow Condensed,sans-serif', letterSpacing: '.05em', color: '#2f1446', lineHeight: 1.4 }}>
              {art.label} &rarr;
            </Link>
          ))}
        </div>

        {/* CTA FINAL */}
        <div style={{ background: '#2d1a3a', padding: '40px 32px', textAlign: 'center', borderRadius: '2px' }}>
          <h3 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
            {ui.cta_h}
          </h3>
          <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.6, marginBottom: '24px', maxWidth: '520px', margin: '0 auto 24px' }}>
            {ui.cta_desc}
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#9e6d16', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '16px 40px', textDecoration: 'none' }}>
            {ui.cta_btn}
          </Link>
        </div>

      </main>

    </>
  );
}