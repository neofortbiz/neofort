import { Link } from '../../../../i18n/navigation';

import { BASE, LOCALES } from '../../../../lib/constants.js';
import { getGoogleRating } from '../../../../lib/googleRating.js';
const SLUGS = {
  ro: 'sisteme-nzeb/ghid-complet-nzeb',
  en: 'nzeb-systems/complete-guide',
  de: 'nzeb-systeme/kompletter-ratgeber',
  fr: 'systemes-nzeb/guide-complet',
  es: 'sistemas-nzeb/guia-completa',
  it: 'sistemi-nzeb/guida-completa',
};

const PARENT_SLUGS = {
  ro: 'sisteme-nzeb', en: 'nzeb-systems',
  de: 'nzeb-systeme', fr: 'systemes-nzeb',
  es: 'sistemas-nzeb', it: 'sistemi-nzeb',
};

const PRICES_SLUGS = {
  ro: 'contact', en: 'contact',
  de: 'kontakt', fr: 'contact',
  es: 'contacto', it: 'contatti',
};

const UI = {
  ro: {
    h1: 'Ghid Complet Sisteme nZEB 2026 — Ferestre eficiente energetic pentru case cu consum aproape zero',
    sub: 'Ghid nZEB pentru ferestre: profilul BluEvolution 92, geam tripan Saint-Gobain, distanțier Warm Edge, precadre Blaugelb și montaj RAL în trei straturi.',
    breadcrumb: 'Ghid complet',
    parent_label: 'Sisteme nZEB',
    intro: 'O casă nZEB pierde foarte puțină energie, iar ferestrele sunt de obicei punctul cel mai slab al anvelopei. Contează trei lucruri deodată: profilul, geamul și felul în care fereastra este legată de perete. Neofort BIZ livrează în București și Ilfov întregul sistem — de la profilul Salamander BluEvolution 92 până la precadrele Blaugelb și benzile de etanșare RAL.',
    section1_h2: 'Ce înseamnă nZEB pentru ferestre',
    section1: 'nZEB (Nearly Zero Energy Building) desemnează clădirile cu consum de energie aproape zero. Pentru ferestre, normativul din România stabilește valori maxime ale coeficientului Uw, diferențiate pe zone climatice; pentru o casă nZEB în București se urmăresc valori sub 1,0 W/m²K. Valoarea din catalog a ferestrei nu este însă suficientă: dacă rostul dintre toc și zid rămâne o punte termică sau lasă aerul să treacă, performanța reală a casei scade. De aceea, un sistem nZEB tratează împreună fereastra și montajul ei.',
    systems_h2: 'Componentele sistemului nZEB de la Neofort BIZ',
    systems: [
      { name: 'Precadre Blaugelb Triotherm+', uw: 'Punte termică de montaj redusă cu peste 90%', chambers: 'XPS, 3 zone de izolare, certificat RAL', ideal: 'Case nZEB și pasive: fereastra se fixează pe un precadru izolant, nu direct pe zidărie.', link: '/sisteme-nzeb/precadre-blaugelb-triotherm-plus' },
      { name: 'Bandă precomprimată butilică', uw: 'Sd sub 0,1 m — permeabilă la vapori', chambers: 'Stratul exterior RAL, lățimi 10–60 mm', ideal: 'Etanșarea exterioară a rostului: oprește apa și vântul, lasă vaporii să iasă.', link: '/sisteme-nzeb/banda-precomprimata-butilic' },
      { name: 'Bandă de etanșare antivapori', uw: 'Sd peste 10 m — barieră de vapori', chambers: 'Stratul interior RAL, PE cu aluminiu', ideal: 'Împiedică vaporii din casă să pătrundă în rost, unde ar condensa.', link: '/sisteme-nzeb/banda-etansare-antivapori-interior' },
      { name: 'Baghetă Warm Edge', uw: 'λ 0,035 W/mK (aluminiu: 160 W/mK)', chambers: 'Distanțier termic, certificat Passive House', ideal: 'Marginea geamului rămâne cu 4–6°C mai caldă, fără condens lângă ramă.', link: '/sisteme-nzeb/bagheta-warm-edge-distantier-termic' },
      { name: 'Geam termoizolant Saint-Gobain SGG', uw: 'Ug de la 0,5 W/m²K (tripan)', chambers: 'Planitherm, Planistar SUN, Stadip SILENCE', ideal: 'Izolare termică, control solar sau fonoizolare, după fațadă.', link: '/sisteme-nzeb/geamuri-termopan-saint-gobain-sgg' },
      { name: 'Profil Salamander BluEvolution 92 FLEX', uw: 'Uw de la 0,70 W/m²K', chambers: '6 camere, adâncime 92 mm', ideal: 'Profilul PVC pe care îl recomandăm pentru casele nZEB.', link: '/produse/profil-pvc-bluevolution-92-flex' },
    ],
    glass_h2: 'Geamul și distanțierul — pe unde pierde căldură sticla',
    glass: 'Geamul ocupă cea mai mare parte din suprafața ferestrei. Pentru casele nZEB recomandăm geam tripan Saint-Gobain Planitherm, cu Ug de la 0,5 W/m²K. Pe fațadele însorite, Planistar SUN limitează aportul solar (factor g între 0,27 și 0,60), iar lângă străzi aglomerate Stadip SILENCE oferă fonoizolare Rw de 44–52 dB. Marginea geamului este a doua zonă critică: un distanțier clasic din aluminiu conduce căldura (λ = 160 W/mK), pe când bagheta Warm Edge are λ = 0,035 W/mK și ține marginea geamului cu 4–6°C mai caldă.',
    montaj_h2: 'Montajul RAL în trei straturi — legătura dintre fereastră și perete',
    montaj: 'Rostul dintre toc și zid se etanșează după principiul RAL: mai etanș la interior decât la exterior. La exterior, banda precomprimată butilică (Sd sub 0,1 m) oprește apa și vântul, dar lasă vaporii să iasă. La mijloc, spuma PU izolează termic. La interior, banda antivapori (Sd peste 10 m) împiedică vaporii din casă să pătrundă în rost, unde ar condensa. Pentru casele nZEB și pasive, fereastra se montează pe precadre Blaugelb Triotherm+ din XPS, cu trei zone de izolare, care reduc puntea termică de montaj cu peste 90%.',
    nzeb_h2: 'Cum alegi fereastra pentru o casă nZEB',
    nzeb: 'Pornește de la valoarea Uw cerută de proiectant pentru zona climatică a casei, apoi alege profilul: BluEvolution 92, cu 6 camere și Uw de la 0,70 W/m²K, este profilul PVC pe care îl recomandăm pentru nZEB. Geamul tripan, distanțierul Warm Edge și montajul pe precadre fac diferența dintre valoarea din catalog și cea obținută pe șantier. Neofort BIZ livrează sistemul complet și oferă consultanță tehnică pentru proiectele nZEB din București și Ilfov.',
    faq_h2: 'Întrebări frecvente — sisteme nZEB',
    faq: [
      { q: 'Ce este un precadru și de ce îl folosesc casele nZEB?', a: 'Precadrul este un cadru izolant, fixat pe zidărie, pe care se montează apoi fereastra. Precadrele Blaugelb Triotherm+ sunt din XPS, au trei zone de izolare și reduc puntea termică de montaj cu peste 90% față de prinderea directă a tocului în zid.' },
      { q: 'Ce înseamnă montajul RAL?', a: 'Este etanșarea rostului în trei straturi: bandă precomprimată butilică la exterior, spumă PU la mijloc și bandă antivapori la interior. Rostul rămâne etanș la apă și aer, iar umezeala din el se poate elimina spre exterior.' },
      { q: 'Este suficient geamul dublu pentru o casă nZEB?', a: 'Depinde de valoarea Uw cerută pentru zona climatică și de profilul ales. Pentru casele nZEB recomandăm geam tripan Low-E Saint-Gobain, cu Ug de la 0,5 W/m²K; geamul dublu rămâne soluția standard pentru renovări.' },
      { q: 'Ce este distanțierul Warm Edge?', a: 'Este bagheta care separă foile de sticlă din geamul termoizolant. Varianta Warm Edge are λ = 0,035 W/mK, față de 160 W/mK la aluminiu, așa că marginea geamului rămâne cu 4–6°C mai caldă și nu apare condens lângă ramă.' },
    ],
    cta_h: 'Solicitați oferta personalizată',
    cta_desc: 'Echipa Neofort BIZ vă pregătește o ofertă pentru sistemul nZEB complet — profil, geam și montaj — în București și Ilfov. Măsurătorile la fața locului se fac după semnarea contractului.',
    cta_btn: 'Cerere ofertă',
    prices_link: 'Solicită oferta nZEB',
    related_h2: 'Articole utile despre sistemele nZEB',
  },
  en: {
    h1: 'Complete nZEB Systems Guide 2026 — Energy Efficient Windows for Nearly Zero Energy Buildings',
    sub: 'nZEB window guide: BluEvolution 92 profile, Saint-Gobain triple glazing, Warm Edge spacer, Blaugelb precasings and three-layer RAL installation.',
    breadcrumb: 'Complete Guide',
    parent_label: 'nZEB Systems',
    intro: 'An nZEB home loses very little energy, and the windows are usually the weakest point of the building envelope. Three things matter at once: the profile, the glass and the way the window is joined to the wall. Neofort BIZ supplies the whole system in Bucharest and Ilfov — from the Salamander BluEvolution 92 profile to Blaugelb precasings and RAL sealing tapes.',
    section1_h2: 'What nZEB means for windows',
    section1: 'nZEB (Nearly Zero Energy Building) refers to buildings with nearly zero energy consumption. For windows, Romania\'s regulation sets maximum Uw values that differ by climate zone; for an nZEB home in Bucharest the target is below 1.0 W/m²K. The catalogue value of the window is not enough, though: if the joint between frame and wall remains a thermal bridge or lets air through, the real performance of the house drops. That is why an nZEB system treats the window and its installation together.',
    systems_h2: 'Components of the Neofort BIZ nZEB system',
    systems: [
      { name: 'Blaugelb Triotherm+ precasings', uw: 'Installation thermal bridge cut by over 90%', chambers: 'XPS, 3 insulation zones, RAL certified', ideal: 'nZEB and passive homes: the window is fixed to an insulating precasing, not directly to the masonry.', link: '/nzeb-systems/blaugelb-triotherm-plus-precasings' },
      { name: 'Pre-compressed butyl tape', uw: 'Sd below 0.1 m — vapour-open', chambers: 'Outer RAL layer, widths 10–60 mm', ideal: 'Outer joint seal: keeps out water and wind, lets vapour escape.', link: '/nzeb-systems/pre-compressed-butyl-sealing-tape' },
      { name: 'Interior vapour barrier tape', uw: 'Sd above 10 m — vapour barrier', chambers: 'Inner RAL layer, aluminium-laminated PE', ideal: 'Stops indoor vapour from entering the joint, where it would condense.', link: '/nzeb-systems/interior-vapour-barrier-sealing-tape' },
      { name: 'Warm Edge spacer', uw: 'λ 0.035 W/mK (aluminium: 160 W/mK)', chambers: 'Thermal spacer, Passive House certified', ideal: 'The glass edge stays 4–6°C warmer, with no condensation by the frame.', link: '/nzeb-systems/warm-edge-thermo-spacer-insulating-glass' },
      { name: 'Saint-Gobain SGG insulating glass', uw: 'Ug from 0.5 W/m²K (triple)', chambers: 'Planitherm, Planistar SUN, Stadip SILENCE', ideal: 'Thermal insulation, solar control or sound insulation, depending on the facade.', link: '/nzeb-systems/saint-gobain-sgg-thermal-insulating-glass' },
      { name: 'Salamander BluEvolution 92 FLEX profile', uw: 'Uw from 0.70 W/m²K', chambers: '6 chambers, 92 mm depth', ideal: 'The PVC profile we recommend for nZEB homes.', link: '/products/bluevolution-92-flex-pvc-profile' },
    ],
    glass_h2: 'Glass and spacer — where heat escapes through the glazing',
    glass: 'Glass covers most of the window surface. For nZEB homes we recommend Saint-Gobain Planitherm triple glazing, with a Ug from 0.5 W/m²K. On sunny facades, Planistar SUN limits solar gain (g-value between 0.27 and 0.60), and next to busy streets Stadip SILENCE provides Rw 44–52 dB sound insulation. The edge of the glass is the second critical area: a conventional aluminium spacer conducts heat (λ = 160 W/mK), whereas the Warm Edge spacer has λ = 0.035 W/mK and keeps the glass edge 4–6°C warmer.',
    montaj_h2: 'Three-layer RAL installation — the link between window and wall',
    montaj: 'The joint between frame and wall is sealed on the RAL principle: tighter on the inside than on the outside. On the outside, pre-compressed butyl tape (Sd below 0.1 m) keeps out water and wind but lets vapour escape. In the middle, PU foam provides thermal insulation. On the inside, the vapour barrier tape (Sd above 10 m) stops indoor vapour from entering the joint, where it would condense. For nZEB and passive homes, the window is installed on XPS Blaugelb Triotherm+ precasings with three insulation zones, which cut the installation thermal bridge by over 90%.',
    nzeb_h2: 'How to choose windows for an nZEB home',
    nzeb: 'Start from the Uw value the designer requires for the climate zone, then choose the profile: BluEvolution 92, with 6 chambers and a Uw from 0.70 W/m²K, is the PVC profile we recommend for nZEB. Triple glazing, the Warm Edge spacer and installation on precasings make the difference between the catalogue value and the value achieved on site. Neofort BIZ supplies the complete system and provides technical consultancy for nZEB projects in Bucharest and Ilfov.',
    faq_h2: 'Frequently Asked Questions — nZEB Systems',
    faq: [
      { q: 'What is a precasing and why do nZEB homes use it?', a: 'A precasing is an insulating frame fixed to the masonry, onto which the window is then installed. Blaugelb Triotherm+ precasings are made of XPS, have three insulation zones and cut the installation thermal bridge by over 90% compared with fixing the frame directly to the wall.' },
      { q: 'What does RAL installation mean?', a: 'It is a three-layer joint seal: pre-compressed butyl tape on the outside, PU foam in the middle and vapour barrier tape on the inside. The joint stays watertight and airtight, while any moisture in it can escape to the outside.' },
      { q: 'Is double glazing enough for an nZEB home?', a: 'It depends on the Uw value required for the climate zone and on the profile chosen. For nZEB homes we recommend Saint-Gobain triple Low-E glazing, with a Ug from 0.5 W/m²K; double glazing remains the standard solution for renovations.' },
      { q: 'What is a Warm Edge spacer?', a: 'It is the bar that separates the panes in an insulating glass unit. The Warm Edge version has λ = 0.035 W/mK, compared with 160 W/mK for aluminium, so the glass edge stays 4–6°C warmer and no condensation forms by the frame.' },
    ],
    cta_h: 'Request a Personalised Quote',
    cta_desc: 'The Neofort BIZ team will prepare a quote for the complete nZEB system — profile, glass and installation — in Bucharest and Ilfov. On-site measurements are taken after the contract is signed.',
    cta_btn: 'Request Quote',
    prices_link: 'Request nZEB Quote',
    related_h2: 'Useful Articles About nZEB Systems',
  },
  de: {
    h1: 'Kompletter nZEB-Ratgeber 2026 — Energieeffiziente Fenster für Niedrigstenergiehäuser',
    sub: 'nZEB-Ratgeber für Fenster: Profil BluEvolution 92, Saint-Gobain Dreifachverglasung, Warm-Edge-Abstandhalter, Blaugelb-Montagerahmen und RAL-Montage.',
    breadcrumb: 'Kompletter Ratgeber',
    parent_label: 'nZEB-Systeme',
    intro: 'Ein nZEB-Haus verliert sehr wenig Energie, und die Fenster sind meist die schwächste Stelle der Gebäudehülle. Drei Dinge zählen gleichzeitig: das Profil, das Glas und die Art, wie das Fenster mit der Wand verbunden ist. Neofort BIZ liefert in Bukarest und Ilfov das gesamte System — vom Salamander-Profil BluEvolution 92 bis zu den Blaugelb-Montagerahmen und den RAL-Dichtbändern.',
    section1_h2: 'Was nZEB für Fenster bedeutet',
    section1: 'nZEB (Nearly Zero Energy Building) bezeichnet Niedrigstenergiegebäude. Für Fenster legt die rumänische Vorschrift Höchstwerte für Uw fest, die je nach Klimazone unterschiedlich sind; für ein nZEB-Haus in Bukarest wird ein Wert unter 1,0 W/m²K angestrebt. Der Katalogwert des Fensters reicht allerdings nicht aus: Bleibt die Fuge zwischen Rahmen und Wand eine Wärmebrücke oder lässt sie Luft durch, sinkt die tatsächliche Leistung des Hauses. Deshalb betrachtet ein nZEB-System Fenster und Montage gemeinsam.',
    systems_h2: 'Die Komponenten des nZEB-Systems von Neofort BIZ',
    systems: [
      { name: 'Blaugelb Triotherm+ Montagerahmen', uw: 'Montage-Wärmebrücke um über 90 % reduziert', chambers: 'XPS, 3 Dämmzonen, RAL-zertifiziert', ideal: 'nZEB- und Passivhäuser: Das Fenster wird auf einem dämmenden Rahmen befestigt, nicht direkt am Mauerwerk.', link: '/nzeb-systeme/blaugelb-triotherm-plus-vorfenster' },
      { name: 'Vorkomprimiertes Butyl-Dichtband', uw: 'Sd unter 0,1 m — diffusionsoffen', chambers: 'Äußere RAL-Ebene, Breiten 10–60 mm', ideal: 'Äußere Fugenabdichtung: hält Wasser und Wind ab, lässt Dampf entweichen.', link: '/nzeb-systeme/vorkomprimiertes-butyl-dichtband' },
      { name: 'Innen-Dampfsperrband', uw: 'Sd über 10 m — Dampfsperre', chambers: 'Innere RAL-Ebene, aluminiumkaschiertes PE', ideal: 'Verhindert, dass Raumfeuchte in die Fuge eindringt und dort kondensiert.', link: '/nzeb-systeme/innen-dampfsperrband' },
      { name: 'Warm-Edge-Abstandhalter', uw: 'λ 0,035 W/mK (Aluminium: 160 W/mK)', chambers: 'Thermischer Abstandhalter, Passivhaus-zertifiziert', ideal: 'Der Glasrand bleibt 4–6 °C wärmer, ohne Kondensat am Rahmen.', link: '/nzeb-systeme/warm-edge-thermo-abstandhalter-isolierglas' },
      { name: 'Saint-Gobain SGG Wärmeschutzglas', uw: 'Ug ab 0,5 W/m²K (Dreifach)', chambers: 'Planitherm, Planistar SUN, Stadip SILENCE', ideal: 'Wärmedämmung, Sonnenschutz oder Schallschutz, je nach Fassade.', link: '/nzeb-systeme/saint-gobain-sgg-waermeschutzisolierglas' },
      { name: 'Salamander-Profil BluEvolution 92 FLEX', uw: 'Uw ab 0,70 W/m²K', chambers: '6 Kammern, 92 mm Bautiefe', ideal: 'Das PVC-Profil, das wir für nZEB-Häuser empfehlen.', link: '/produkte/bluevolution-92-flex-pvc-profil' },
    ],
    glass_h2: 'Glas und Abstandhalter — wo die Verglasung Wärme verliert',
    glass: 'Das Glas nimmt den größten Teil der Fensterfläche ein. Für nZEB-Häuser empfehlen wir Saint-Gobain Planitherm Dreifachverglasung mit einem Ug ab 0,5 W/m²K. An sonnigen Fassaden begrenzt Planistar SUN den Solareintrag (g-Wert zwischen 0,27 und 0,60), an verkehrsreichen Straßen bietet Stadip SILENCE einen Schallschutz von Rw 44–52 dB. Der Glasrand ist die zweite kritische Zone: Ein herkömmlicher Aluminium-Abstandhalter leitet Wärme (λ = 160 W/mK), der Warm-Edge-Abstandhalter dagegen hat λ = 0,035 W/mK und hält den Glasrand 4–6 °C wärmer.',
    montaj_h2: 'RAL-Montage in drei Ebenen — die Verbindung zwischen Fenster und Wand',
    montaj: 'Die Fuge zwischen Rahmen und Wand wird nach dem RAL-Prinzip abgedichtet: innen dichter als außen. Außen hält das vorkomprimierte Butylband (Sd unter 0,1 m) Wasser und Wind ab, lässt aber Dampf entweichen. In der Mitte dämmt PU-Schaum. Innen verhindert das Dampfsperrband (Sd über 10 m), dass Raumfeuchte in die Fuge eindringt und dort kondensiert. Bei nZEB- und Passivhäusern wird das Fenster auf Blaugelb Triotherm+ Montagerahmen aus XPS mit drei Dämmzonen montiert, die die Montage-Wärmebrücke um über 90 % reduzieren.',
    nzeb_h2: 'So wählen Sie Fenster für ein nZEB-Haus',
    nzeb: 'Gehen Sie vom Uw-Wert aus, den der Planer für die Klimazone des Hauses vorgibt, und wählen Sie dann das Profil: BluEvolution 92 mit 6 Kammern und einem Uw ab 0,70 W/m²K ist das PVC-Profil, das wir für nZEB empfehlen. Dreifachverglasung, Warm-Edge-Abstandhalter und Montage auf Montagerahmen machen den Unterschied zwischen Katalogwert und dem auf der Baustelle erreichten Wert. Neofort BIZ liefert das komplette System und berät technisch bei nZEB-Projekten in Bukarest und Ilfov.',
    faq_h2: 'Häufige Fragen — nZEB-Systeme',
    faq: [
      { q: 'Was ist ein Montagerahmen und warum nutzen nZEB-Häuser ihn?', a: 'Ein Montagerahmen ist ein dämmender Rahmen, der am Mauerwerk befestigt wird und auf dem anschließend das Fenster montiert wird. Blaugelb Triotherm+ Montagerahmen bestehen aus XPS, haben drei Dämmzonen und reduzieren die Montage-Wärmebrücke um über 90 % gegenüber der direkten Befestigung des Rahmens in der Wand.' },
      { q: 'Was bedeutet RAL-Montage?', a: 'Es ist eine Fugenabdichtung in drei Ebenen: vorkomprimiertes Butylband außen, PU-Schaum in der Mitte und Dampfsperrband innen. Die Fuge bleibt wasser- und luftdicht, während Feuchtigkeit nach außen entweichen kann.' },
      { q: 'Reicht Zweifachverglasung für ein nZEB-Haus?', a: 'Das hängt vom geforderten Uw-Wert für die Klimazone und vom gewählten Profil ab. Für nZEB-Häuser empfehlen wir Saint-Gobain Dreifach-Low-E-Verglasung mit einem Ug ab 0,5 W/m²K; Zweifachverglasung bleibt die Standardlösung für Renovierungen.' },
      { q: 'Was ist ein Warm-Edge-Abstandhalter?', a: 'Es ist das Profil, das die Glasscheiben im Isolierglas trennt. Die Warm-Edge-Ausführung hat λ = 0,035 W/mK gegenüber 160 W/mK bei Aluminium, sodass der Glasrand 4–6 °C wärmer bleibt und sich am Rahmen kein Kondensat bildet.' },
    ],
    cta_h: 'Personalisiertes Angebot anfordern',
    cta_desc: 'Das Team von Neofort BIZ erstellt Ihnen ein Angebot für das komplette nZEB-System — Profil, Glas und Montage — in Bukarest und Ilfov. Das Aufmaß vor Ort erfolgt nach Vertragsabschluss.',
    cta_btn: 'Angebot anfordern',
    prices_link: 'nZEB-Angebot anfordern',
    related_h2: 'Nützliche Artikel über nZEB-Systeme',
  },
  fr: {
    h1: 'Guide complet systèmes nZEB 2026 — Menuiseries pour bâtiments à énergie quasi nulle',
    sub: 'Guide nZEB des fenêtres : profilé BluEvolution 92, triple vitrage Saint-Gobain, intercalaire Warm Edge, précadres Blaugelb et pose RAL en trois couches.',
    breadcrumb: 'Guide complet',
    parent_label: 'Systèmes nZEB',
    intro: 'Une maison nZEB perd très peu d\'énergie, et les fenêtres sont généralement le point faible de l\'enveloppe. Trois éléments comptent en même temps : le profilé, le vitrage et la façon dont la fenêtre est reliée au mur. Neofort BIZ fournit l\'ensemble du système à Bucarest et Ilfov — du profilé Salamander BluEvolution 92 aux précadres Blaugelb et aux bandes d\'étanchéité RAL.',
    section1_h2: 'Ce que nZEB signifie pour les fenêtres',
    section1: 'nZEB (Nearly Zero Energy Building) désigne les bâtiments à consommation d\'énergie quasi nulle. Pour les fenêtres, la réglementation roumaine fixe des valeurs Uw maximales qui varient selon la zone climatique ; pour une maison nZEB à Bucarest, on vise moins de 1,0 W/m²K. La valeur catalogue de la fenêtre ne suffit pas pour autant : si le joint entre le dormant et le mur reste un pont thermique ou laisse passer l\'air, la performance réelle de la maison baisse. C\'est pourquoi un système nZEB traite ensemble la fenêtre et sa pose.',
    systems_h2: 'Les composants du système nZEB de Neofort BIZ',
    systems: [
      { name: 'Précadres Blaugelb Triotherm+', uw: 'Pont thermique de pose réduit de plus de 90 %', chambers: 'XPS, 3 zones d\'isolation, certifié RAL', ideal: 'Maisons nZEB et passives : la fenêtre est fixée sur un précadre isolant, et non directement sur la maçonnerie.', link: '/systemes-nzeb/precadres-blaugelb-triotherm-plus' },
      { name: 'Bande butyle précomprimée', uw: 'Sd inférieur à 0,1 m — ouverte à la vapeur', chambers: 'Couche extérieure RAL, largeurs 10–60 mm', ideal: 'Étanchéité extérieure du joint : arrête l\'eau et le vent, laisse sortir la vapeur.', link: '/systemes-nzeb/bande-precomprimee-butyle' },
      { name: 'Bande d\'étanchéité pare-vapeur', uw: 'Sd supérieur à 10 m — pare-vapeur', chambers: 'Couche intérieure RAL, PE contrecollé aluminium', ideal: 'Empêche la vapeur intérieure d\'entrer dans le joint, où elle condenserait.', link: '/systemes-nzeb/ruban-etancheite-pare-vapeur-interieur' },
      { name: 'Intercalaire Warm Edge', uw: 'λ 0,035 W/mK (aluminium : 160 W/mK)', chambers: 'Intercalaire thermique, certifié Passive House', ideal: 'Le bord du vitrage reste 4 à 6 °C plus chaud, sans condensation près du cadre.', link: '/systemes-nzeb/espaceur-warm-edge-thermo-vitrage' },
      { name: 'Vitrage isolant Saint-Gobain SGG', uw: 'Ug à partir de 0,5 W/m²K (triple)', chambers: 'Planitherm, Planistar SUN, Stadip SILENCE', ideal: 'Isolation thermique, contrôle solaire ou isolation acoustique, selon la façade.', link: '/systemes-nzeb/vitrage-isolant-saint-gobain-sgg' },
      { name: 'Profilé Salamander BluEvolution 92 FLEX', uw: 'Uw à partir de 0,70 W/m²K', chambers: '6 chambres, profondeur 92 mm', ideal: 'Le profilé PVC que nous recommandons pour les maisons nZEB.', link: '/produits/profil-pvc-bluevolution-92-flex' },
    ],
    glass_h2: 'Vitrage et intercalaire — par où le verre perd de la chaleur',
    glass: 'Le vitrage occupe la plus grande partie de la surface de la fenêtre. Pour les maisons nZEB, nous recommandons le triple vitrage Saint-Gobain Planitherm, avec un Ug à partir de 0,5 W/m²K. Sur les façades ensoleillées, Planistar SUN limite les apports solaires (facteur g entre 0,27 et 0,60), et le long des rues passantes Stadip SILENCE offre une isolation acoustique Rw de 44 à 52 dB. Le bord du vitrage est la deuxième zone critique : un intercalaire classique en aluminium conduit la chaleur (λ = 160 W/mK), alors que l\'intercalaire Warm Edge a un λ de 0,035 W/mK et garde le bord du vitrage 4 à 6 °C plus chaud.',
    montaj_h2: 'La pose RAL en trois couches — le lien entre la fenêtre et le mur',
    montaj: 'Le joint entre le dormant et le mur est étanché selon le principe RAL : plus étanche à l\'intérieur qu\'à l\'extérieur. À l\'extérieur, la bande butyle précomprimée (Sd inférieur à 0,1 m) arrête l\'eau et le vent mais laisse sortir la vapeur. Au centre, la mousse PU isole thermiquement. À l\'intérieur, la bande pare-vapeur (Sd supérieur à 10 m) empêche la vapeur de la maison d\'entrer dans le joint, où elle condenserait. Pour les maisons nZEB et passives, la fenêtre est posée sur des précadres Blaugelb Triotherm+ en XPS à trois zones d\'isolation, qui réduisent le pont thermique de pose de plus de 90 %.',
    nzeb_h2: 'Comment choisir les fenêtres d\'une maison nZEB',
    nzeb: 'Partez de la valeur Uw exigée par le concepteur pour la zone climatique de la maison, puis choisissez le profilé : le BluEvolution 92, à 6 chambres et Uw à partir de 0,70 W/m²K, est le profilé PVC que nous recommandons en nZEB. Le triple vitrage, l\'intercalaire Warm Edge et la pose sur précadres font la différence entre la valeur catalogue et celle obtenue sur chantier. Neofort BIZ fournit le système complet et apporte un conseil technique aux projets nZEB à Bucarest et Ilfov.',
    faq_h2: 'Questions fréquentes — systèmes nZEB',
    faq: [
      { q: 'Qu\'est-ce qu\'un précadre et pourquoi les maisons nZEB l\'utilisent-elles ?', a: 'Le précadre est un cadre isolant fixé sur la maçonnerie, sur lequel on pose ensuite la fenêtre. Les précadres Blaugelb Triotherm+ sont en XPS, comportent trois zones d\'isolation et réduisent le pont thermique de pose de plus de 90 % par rapport à une fixation directe du dormant dans le mur.' },
      { q: 'Que signifie la pose RAL ?', a: 'C\'est une étanchéité du joint en trois couches : bande butyle précomprimée à l\'extérieur, mousse PU au centre et bande pare-vapeur à l\'intérieur. Le joint reste étanche à l\'eau et à l\'air, tandis que l\'humidité peut s\'évacuer vers l\'extérieur.' },
      { q: 'Le double vitrage suffit-il pour une maison nZEB ?', a: 'Cela dépend de la valeur Uw exigée pour la zone climatique et du profilé choisi. Pour les maisons nZEB, nous recommandons le triple vitrage Low-E Saint-Gobain, avec un Ug à partir de 0,5 W/m²K ; le double vitrage reste la solution standard en rénovation.' },
      { q: 'Qu\'est-ce que l\'intercalaire Warm Edge ?', a: 'C\'est la baguette qui sépare les verres d\'un vitrage isolant. La version Warm Edge a un λ de 0,035 W/mK, contre 160 W/mK pour l\'aluminium : le bord du vitrage reste 4 à 6 °C plus chaud et il ne se forme pas de condensation près du cadre.' },
    ],
    cta_h: 'Demander un devis personnalisé',
    cta_desc: 'L\'équipe Neofort BIZ vous prépare un devis pour le système nZEB complet — profilé, vitrage et pose — à Bucarest et Ilfov. La prise de mesures sur site intervient après la signature du contrat.',
    cta_btn: 'Demander un devis',
    prices_link: 'Demander un devis nZEB',
    related_h2: 'Articles utiles sur les systèmes nZEB',
  },
  es: {
    h1: 'Guía completa sistemas nZEB 2026 — Ventanas eficientes para edificios de consumo casi nulo',
    sub: 'Guía nZEB de ventanas: perfil BluEvolution 92, triple acristalamiento Saint-Gobain, separador Warm Edge, premarcos Blaugelb e instalación RAL en tres capas.',
    breadcrumb: 'Guía completa',
    parent_label: 'Sistemas nZEB',
    intro: 'Una casa nZEB pierde muy poca energía, y las ventanas suelen ser el punto más débil de la envolvente. Importan tres cosas a la vez: el perfil, el vidrio y la forma en que la ventana se une al muro. Neofort BIZ suministra en Bucarest e Ilfov el sistema completo, desde el perfil Salamander BluEvolution 92 hasta los premarcos Blaugelb y las cintas de sellado RAL.',
    section1_h2: 'Qué significa nZEB para las ventanas',
    section1: 'nZEB (Nearly Zero Energy Building) designa los edificios de consumo de energía casi nulo. Para las ventanas, la normativa rumana fija valores Uw máximos distintos según la zona climática; para una casa nZEB en Bucarest se busca un valor inferior a 1,0 W/m²K. Sin embargo, el valor de catálogo de la ventana no basta: si la junta entre el marco y el muro sigue siendo un puente térmico o deja pasar el aire, el rendimiento real de la casa baja. Por eso un sistema nZEB trata juntos la ventana y su instalación.',
    systems_h2: 'Los componentes del sistema nZEB de Neofort BIZ',
    systems: [
      { name: 'Premarcos Blaugelb Triotherm+', uw: 'Puente térmico de instalación reducido más de un 90 %', chambers: 'XPS, 3 zonas de aislamiento, certificado RAL', ideal: 'Casas nZEB y pasivas: la ventana se fija sobre un premarco aislante, no directamente sobre la obra.', link: '/sistemas-nzeb/premarcos-blaugelb-triotherm-plus' },
      { name: 'Cinta butílica precomprimida', uw: 'Sd inferior a 0,1 m — abierta al vapor', chambers: 'Capa exterior RAL, anchos de 10–60 mm', ideal: 'Sellado exterior de la junta: frena el agua y el viento y deja salir el vapor.', link: '/sistemas-nzeb/cinta-precomprimida-butilica' },
      { name: 'Cinta de barrera de vapor interior', uw: 'Sd superior a 10 m — barrera de vapor', chambers: 'Capa interior RAL, PE laminado con aluminio', ideal: 'Impide que el vapor de la vivienda entre en la junta, donde se condensaría.', link: '/sistemas-nzeb/banda-sellado-barrera-vapor-interior' },
      { name: 'Separador Warm Edge', uw: 'λ 0,035 W/mK (aluminio: 160 W/mK)', chambers: 'Separador térmico, certificado Passive House', ideal: 'El borde del vidrio se mantiene 4–6 °C más caliente, sin condensación junto al marco.', link: '/sistemas-nzeb/separador-warm-edge-thermo-vidrio-aislante' },
      { name: 'Vidrio aislante Saint-Gobain SGG', uw: 'Ug desde 0,5 W/m²K (triple)', chambers: 'Planitherm, Planistar SUN, Stadip SILENCE', ideal: 'Aislamiento térmico, control solar o aislamiento acústico, según la fachada.', link: '/sistemas-nzeb/vidrio-aislante-saint-gobain-sgg' },
      { name: 'Perfil Salamander BluEvolution 92 FLEX', uw: 'Uw desde 0,70 W/m²K', chambers: '6 cámaras, 92 mm de profundidad', ideal: 'El perfil de PVC que recomendamos para casas nZEB.', link: '/productos/perfil-pvc-bluevolution-92-flex' },
    ],
    glass_h2: 'Vidrio y separador: por dónde pierde calor el acristalamiento',
    glass: 'El vidrio ocupa la mayor parte de la superficie de la ventana. Para casas nZEB recomendamos el triple acristalamiento Saint-Gobain Planitherm, con un Ug desde 0,5 W/m²K. En fachadas soleadas, Planistar SUN limita la ganancia solar (factor g entre 0,27 y 0,60), y junto a calles con mucho tráfico Stadip SILENCE ofrece un aislamiento acústico Rw de 44–52 dB. El borde del vidrio es la segunda zona crítica: un separador convencional de aluminio conduce el calor (λ = 160 W/mK), mientras que el separador Warm Edge tiene λ = 0,035 W/mK y mantiene el borde del vidrio 4–6 °C más caliente.',
    montaj_h2: 'La instalación RAL en tres capas: la unión entre ventana y muro',
    montaj: 'La junta entre el marco y el muro se sella según el principio RAL: más estanca por dentro que por fuera. En el exterior, la cinta butílica precomprimida (Sd inferior a 0,1 m) frena el agua y el viento pero deja salir el vapor. En el centro, la espuma de PU aísla térmicamente. En el interior, la cinta de barrera de vapor (Sd superior a 10 m) impide que el vapor de la vivienda entre en la junta, donde se condensaría. En casas nZEB y pasivas, la ventana se instala sobre premarcos Blaugelb Triotherm+ de XPS con tres zonas de aislamiento, que reducen el puente térmico de instalación más de un 90 %.',
    nzeb_h2: 'Cómo elegir las ventanas de una casa nZEB',
    nzeb: 'Parta del valor Uw que exige el proyectista para la zona climática de la casa y elija después el perfil: BluEvolution 92, con 6 cámaras y Uw desde 0,70 W/m²K, es el perfil de PVC que recomendamos para nZEB. El triple acristalamiento, el separador Warm Edge y la instalación sobre premarcos marcan la diferencia entre el valor de catálogo y el que se obtiene en obra. Neofort BIZ suministra el sistema completo y ofrece asesoramiento técnico para proyectos nZEB en Bucarest e Ilfov.',
    faq_h2: 'Preguntas frecuentes: sistemas nZEB',
    faq: [
      { q: '¿Qué es un premarco y por qué lo usan las casas nZEB?', a: 'El premarco es un marco aislante fijado a la obra sobre el que luego se instala la ventana. Los premarcos Blaugelb Triotherm+ son de XPS, tienen tres zonas de aislamiento y reducen el puente térmico de instalación más de un 90 % frente a la fijación directa del marco al muro.' },
      { q: '¿Qué significa la instalación RAL?', a: 'Es un sellado de la junta en tres capas: cinta butílica precomprimida en el exterior, espuma de PU en el centro y cinta de barrera de vapor en el interior. La junta queda estanca al agua y al aire, mientras que la humedad puede salir hacia el exterior.' },
      { q: '¿Basta el doble acristalamiento para una casa nZEB?', a: 'Depende del valor Uw exigido para la zona climática y del perfil elegido. Para casas nZEB recomendamos triple acristalamiento Low-E Saint-Gobain, con un Ug desde 0,5 W/m²K; el doble acristalamiento sigue siendo la solución estándar en reformas.' },
      { q: '¿Qué es el separador Warm Edge?', a: 'Es el perfil que separa los vidrios de una unidad de vidrio aislante. La versión Warm Edge tiene λ = 0,035 W/mK, frente a 160 W/mK del aluminio, así que el borde del vidrio se mantiene 4–6 °C más caliente y no aparece condensación junto al marco.' },
    ],
    cta_h: 'Solicitar presupuesto personalizado',
    cta_desc: 'El equipo de Neofort BIZ le prepara un presupuesto para el sistema nZEB completo —perfil, vidrio e instalación— en Bucarest e Ilfov. La medición en obra se realiza tras la firma del contrato.',
    cta_btn: 'Solicitar presupuesto',
    prices_link: 'Solicitar presupuesto nZEB',
    related_h2: 'Artículos útiles sobre sistemas nZEB',
  },
  it: {
    h1: 'Guida completa sistemi nZEB 2026 — Infissi efficienti per edifici a energia quasi zero',
    sub: 'Guida nZEB per finestre: profilo BluEvolution 92, triplo vetro Saint-Gobain, distanziatore Warm Edge, precontrotelai Blaugelb e posa RAL a tre strati.',
    breadcrumb: 'Guida completa',
    parent_label: 'Sistemi nZEB',
    intro: 'Una casa nZEB disperde pochissima energia, e le finestre sono di solito il punto più debole dell\'involucro. Contano tre cose insieme: il profilo, il vetro e il modo in cui la finestra è collegata al muro. Neofort BIZ fornisce a Bucarest e Ilfov l\'intero sistema — dal profilo Salamander BluEvolution 92 ai precontrotelai Blaugelb e ai nastri di sigillatura RAL.',
    section1_h2: 'Cosa significa nZEB per le finestre',
    section1: 'nZEB (Nearly Zero Energy Building) indica gli edifici a energia quasi zero. Per le finestre, la normativa rumena fissa valori Uw massimi diversi a seconda della zona climatica; per una casa nZEB a Bucarest si punta a meno di 1,0 W/m²K. Il valore di catalogo della finestra però non basta: se il giunto tra telaio e muro resta un ponte termico o lascia passare l\'aria, la prestazione reale della casa cala. Per questo un sistema nZEB considera insieme la finestra e la sua posa.',
    systems_h2: 'I componenti del sistema nZEB di Neofort BIZ',
    systems: [
      { name: 'Precontrotelai Blaugelb Triotherm+', uw: 'Ponte termico di posa ridotto di oltre il 90%', chambers: 'XPS, 3 zone di isolamento, certificato RAL', ideal: 'Case nZEB e passive: la finestra si fissa su un precontrotelaio isolante, non direttamente sulla muratura.', link: '/sistemi-nzeb/pre-telai-blaugelb-triotherm-plus' },
      { name: 'Nastro butilico precompresso', uw: 'Sd inferiore a 0,1 m — aperto al vapore', chambers: 'Strato esterno RAL, larghezze 10–60 mm', ideal: 'Sigillatura esterna del giunto: ferma acqua e vento, lascia uscire il vapore.', link: '/sistemi-nzeb/nastro-precompresso-butilico' },
      { name: 'Nastro barriera al vapore interno', uw: 'Sd superiore a 10 m — barriera al vapore', chambers: 'Strato interno RAL, PE accoppiato ad alluminio', ideal: 'Impedisce al vapore della casa di entrare nel giunto, dove condenserebbe.', link: '/sistemi-nzeb/nastro-tenuta-barriera-vapore-interno' },
      { name: 'Distanziatore Warm Edge', uw: 'λ 0,035 W/mK (alluminio: 160 W/mK)', chambers: 'Distanziatore termico, certificato Passive House', ideal: 'Il bordo del vetro resta 4–6 °C più caldo, senza condensa vicino al telaio.', link: '/sistemi-nzeb/distanziale-warm-edge-thermo-vetro-isolante' },
      { name: 'Vetro termoisolante Saint-Gobain SGG', uw: 'Ug da 0,5 W/m²K (triplo)', chambers: 'Planitherm, Planistar SUN, Stadip SILENCE', ideal: 'Isolamento termico, controllo solare o isolamento acustico, secondo la facciata.', link: '/sistemi-nzeb/vetro-termoisolante-saint-gobain-sgg' },
      { name: 'Profilo Salamander BluEvolution 92 FLEX', uw: 'Uw da 0,70 W/m²K', chambers: '6 camere, profondità 92 mm', ideal: 'Il profilo in PVC che consigliamo per le case nZEB.', link: '/prodotti/profilo-pvc-bluevolution-92-flex' },
    ],
    glass_h2: 'Vetro e distanziatore — da dove la vetrata disperde calore',
    glass: 'Il vetro occupa la maggior parte della superficie della finestra. Per le case nZEB consigliamo il triplo vetro Saint-Gobain Planitherm, con Ug da 0,5 W/m²K. Sulle facciate soleggiate, Planistar SUN limita gli apporti solari (fattore g tra 0,27 e 0,60), mentre vicino a strade trafficate Stadip SILENCE offre un isolamento acustico Rw di 44–52 dB. Il bordo del vetro è la seconda zona critica: un distanziatore tradizionale in alluminio conduce il calore (λ = 160 W/mK), mentre il distanziatore Warm Edge ha λ = 0,035 W/mK e mantiene il bordo del vetro 4–6 °C più caldo.',
    montaj_h2: 'La posa RAL a tre strati — il collegamento tra finestra e muro',
    montaj: 'Il giunto tra telaio e muro si sigilla secondo il principio RAL: più ermetico all\'interno che all\'esterno. All\'esterno, il nastro butilico precompresso (Sd inferiore a 0,1 m) ferma acqua e vento ma lascia uscire il vapore. Al centro, la schiuma PU isola termicamente. All\'interno, il nastro barriera al vapore (Sd superiore a 10 m) impedisce al vapore della casa di entrare nel giunto, dove condenserebbe. Nelle case nZEB e passive, la finestra si posa su precontrotelai Blaugelb Triotherm+ in XPS a tre zone di isolamento, che riducono il ponte termico di posa di oltre il 90%.',
    nzeb_h2: 'Come scegliere le finestre per una casa nZEB',
    nzeb: 'Partite dal valore Uw richiesto dal progettista per la zona climatica della casa, poi scegliete il profilo: BluEvolution 92, con 6 camere e Uw da 0,70 W/m²K, è il profilo in PVC che consigliamo per l\'nZEB. Triplo vetro, distanziatore Warm Edge e posa su precontrotelai fanno la differenza tra il valore di catalogo e quello ottenuto in cantiere. Neofort BIZ fornisce il sistema completo e offre consulenza tecnica per i progetti nZEB a Bucarest e Ilfov.',
    faq_h2: 'Domande frequenti — sistemi nZEB',
    faq: [
      { q: 'Cos\'è un precontrotelaio e perché lo usano le case nZEB?', a: 'Il precontrotelaio è un telaio isolante fissato alla muratura, sul quale si posa poi la finestra. I precontrotelai Blaugelb Triotherm+ sono in XPS, hanno tre zone di isolamento e riducono il ponte termico di posa di oltre il 90% rispetto al fissaggio diretto del telaio nel muro.' },
      { q: 'Cosa significa posa RAL?', a: 'È una sigillatura del giunto a tre strati: nastro butilico precompresso all\'esterno, schiuma PU al centro e nastro barriera al vapore all\'interno. Il giunto resta ermetico all\'acqua e all\'aria, mentre l\'umidità può uscire verso l\'esterno.' },
      { q: 'Il doppio vetro basta per una casa nZEB?', a: 'Dipende dal valore Uw richiesto per la zona climatica e dal profilo scelto. Per le case nZEB consigliamo il triplo vetro Low-E Saint-Gobain, con Ug da 0,5 W/m²K; il doppio vetro resta la soluzione standard nelle ristrutturazioni.' },
      { q: 'Cos\'è il distanziatore Warm Edge?', a: 'È il profilo che separa le lastre di una vetrocamera. La versione Warm Edge ha λ = 0,035 W/mK, contro 160 W/mK dell\'alluminio, quindi il bordo del vetro resta 4–6 °C più caldo e non si forma condensa vicino al telaio.' },
    ],
    cta_h: 'Richiedi un preventivo personalizzato',
    cta_desc: 'Il team Neofort BIZ vi prepara un preventivo per il sistema nZEB completo — profilo, vetro e posa — a Bucarest e Ilfov. Il rilievo in loco avviene dopo la firma del contratto.',
    cta_btn: 'Richiedi preventivo',
    prices_link: 'Richiedi preventivo nZEB',
    related_h2: 'Articoli utili sui sistemi nZEB',
  },
};

const BLOG_LINKS = {
  ro: [
    { slug: 'montaj-precadre-blaugelb-nzeb', label: 'Montaj cu precadre Blaugelb Triotherm+ — de ce este obligatoriu pentru certificarea nZEB' },
    { slug: 'cum-aleg-ferestre-eficiente-energetic-bucuresti-ghid-nzeb-2026', label: 'Cum aleg ferestre eficiente energetic în București? Ghid complet nZEB 2026' },
    { slug: 'montaj-geamuri-agabaritice-robot-ventuze-sticla-mari-dimensiuni', label: 'Montaj geamuri agabaritice cu robot și ventuze — cum se instalează panouri de sticlă de sute de kilograme' },
    { slug: 'vitrine-sticla-geamuri-panoramice-mari-dimensiuni-securizate-bucuresti', label: 'Vitrine și geamuri panoramice de mari dimensiuni — securizate, antiefracție, termoizolante — furnizor București 2026' },
  ],
  en: [
    { slug: 'blaugelb-triotherm-precasing-installation-nzeb', label: 'Installation with Blaugelb Triotherm+ Precasings for nZEB' },
    { slug: 'how-to-choose-energy-efficient-windows-bucharest-nzeb-guide-2026', label: 'How to choose energy-efficient windows in Bucharest? Complete nZEB guide 2026' },
    { slug: 'oversized-glass-installation-robot-vacuum-cups-large-panels', label: 'Installing oversized glass with robot and vacuum cups — how glass panels of hundreds of kilograms are installed' },
    { slug: 'glass-shopfronts-panoramic-large-format-tempered-windows-bucharest', label: 'Large format glass shopfronts and panoramic windows — tempered, burglar-resistant, thermally insulated — supplier Bucharest 2026' },
  ],
  de: [
    { slug: 'blaugelb-triotherm-vorfenster-montage-nzeb', label: 'Montage mit Blaugelb Triotherm+ — Warum es für die nZEB-Zertifizierung obligatorisch ist' },
    { slug: 'energieeffiziente-fenster-bukarest-auswaehlen-nzeb-leitfaden-2026', label: 'Wie wähle ich energieeffiziente Fenster in Bukarest? Vollständiger nZEB-Leitfaden 2026' },
    { slug: 'montage-uebergrosseglaesscheiben-roboter-saugnaepfe-grossformat', label: 'Montage übergroßer Glasscheiben mit Roboter und Saugnäpfen — wie Glasscheiben von Hunderten Kilogramm installiert werden' },
    { slug: 'schaufenster-panoramascheiben-grosse-abmessungen-sicherheitsglas-bukarest', label: 'Großformat-Schaufenster und Panoramascheiben — gehärtet, einbruchhemmend, wärmedämmend — Händler Bukarest 2026' },
  ],
  fr: [
    { slug: 'precadres-blaugelb-triotherm-pose-nzeb', label: 'Pose avec précadres Blaugelb Triotherm+ — pourquoi c\'est obligatoire pour la certification nZEB' },
    { slug: 'comment-choisir-fenetres-efficaces-energetiquement-bucarest-nzeb-2026', label: 'Comment choisir des fenêtres efficaces énergétiquement à Bucarest ? Guide complet nZEB 2026' },
    { slug: 'pose-verre-surdimensionne-robot-ventouses-grands-panneaux', label: 'Pose de verre surdimensionné par robot et ventouses — comment installer des panneaux de verre de plusieurs centaines de kilogrammes' },
    { slug: 'vitrines-verre-fenetres-panoramiques-grandes-dimensions-securisees-bucarest', label: 'Vitrines et fenêtres panoramiques grand format — sécurisées, antieffraction, thermoïsolantes — fournisseur Bucarest 2026' },
  ],
  es: [
    { slug: 'instalacion-premarcos-blaugelb-triotherm-nzeb', label: 'Montaje con premarcos Blaugelb Triotherm+ — por qué es obligatorio para la certificación nZEB' },
    { slug: 'como-elegir-ventanas-eficientes-energeticamente-bucarest-nzeb-2026', label: '¿Cómo elegir ventanas eficientes energéticamente en Bucarest? Guía completa nZEB 2026' },
    { slug: 'instalacion-vidrio-sobredimensionado-robot-ventosas-grandes-paneles', label: 'Instalación de vidrio sobredimensionado con robot y ventosas — cómo se instalan paneles de vidrio de cientos de kilogramos' },
    { slug: 'vitrinas-cristal-ventanas-panoramicas-grandes-dimensiones-securizadas-bucarest', label: 'Vitrinas y ventanas panorámicas gran formato — securizadas, antiefracción, termoaislantes — proveedor Bucarest 2026' },
  ],
  it: [
    { slug: 'installazione-precontrotelaio-blaugelb-triotherm-nzeb', label: 'Montaggio con precontrotelaio Blaugelb Triotherm+ — perché è obbligatorio per la certificazione nZEB' },
    { slug: 'come-scegliere-finestre-efficienti-energeticamente-bucarest-nzeb-2026', label: 'Come scegliere finestre efficienti energeticamente a Bucarest? Guida completa nZEB 2026' },
    { slug: 'posa-vetro-sovradimensionato-robot-ventose-grandi-pannelli', label: 'Posa di vetro sovradimensionato con robot e ventose — come si installano pannelli di vetro di centinaia di chilogrammi' },
    { slug: 'vetrine-vetro-finestre-panoramiche-grandi-dimensioni-securizzate-bucarest', label: 'Vetrine e finestre panoramiche grande formato — securizzate, antieffrazione, termoisolanti — fornitore Bucarest 2026' },
  ],
};

const WA_URLS = {
  ro: 'https://wa.me/40752443435?text=Buna%20ziua%21%20Doresc%20o%20oferta%20pentru%20sisteme%20nZEB.',
  en: 'https://wa.me/40752443435?text=Hello%21%20Quote%20for%20nZEB%20systems.',
  de: 'https://wa.me/40752443435?text=Hallo%21%20Angebot%20fur%20nZEB-Systeme.',
  fr: 'https://wa.me/40752443435?text=Bonjour%21%20Devis%20systemes%20nZEB.',
  es: 'https://wa.me/40752443435?text=Hola%21%20Presupuesto%20sistemas%20nZEB.',
  it: 'https://wa.me/40752443435?text=Buongiorno%21%20Preventivo%20sistemi%20nZEB.',
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
    openGraph: { type: 'article', url: canonical, title: ui.h1, description: ui.sub, siteName: 'Neofort BIZ', images: [{ url: `${BASE}/og/Sisteme_NZEB.jpg`, width: 1200, height: 630, type:'image/jpeg' }] },
    twitter: { card: 'summary_large_image', site: '@NeofortBIZ', title: ui.h1, description: ui.sub, images: [`${BASE}/og/Sisteme_NZEB.jpg`] },
  };
}

export default async function NZEBGhidPage({ params }) {
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
      <section style={{ background: 'linear-gradient(135deg,#1a3a2a 0%,#2d6e4a 60%,#3a9e6a 100%)', padding: '72px 24px 56px', textAlign: 'center' }}>
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
        <p style={{ fontSize: '1.05rem', color: '#0d0d0d', lineHeight: 1.75, marginBottom: '48px', borderLeft: '3px solid #2d7a4e', paddingLeft: '20px' }}>
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
                <div style={{ fontSize: '.78rem', color: '#1a462d', fontWeight: 600, marginBottom: '4px' }}>{sys.uw}</div>
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
            <Link key={i} href={`/blog/${art.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '16px', border: '1px solid #e8e8e4', background: '#fafaf8', fontSize: '.8rem', fontFamily: 'Barlow Condensed,sans-serif', letterSpacing: '.05em', color: '#1a462d', lineHeight: 1.4 }}>
              {art.label} &rarr;
            </Link>
          ))}
        </div>

        {/* CTA FINAL */}
        <div style={{ background: '#1a3a2a', padding: '40px 32px', textAlign: 'center', borderRadius: '2px' }}>
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