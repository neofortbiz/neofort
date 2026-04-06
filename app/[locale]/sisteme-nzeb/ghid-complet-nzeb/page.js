import { Link } from '../../../../i18n/navigation';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

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
    sub: 'Ghid tehnic complet despre tamplaria PVC Salamander: profile, geamuri, feronerie, montaj nZEB si cum alegi sistemul potrivit pentru casa ta din Bucuresti si Ilfov.',
    breadcrumb: 'Ghid Complet',
    parent_label: 'Sisteme nZEB',
    intro: 'Tamplaria din PVC reprezinta cea mai populara solutie pentru ferestre si usi in Romania. Fabricata din profil PVC multicameral de calitate germana Salamander, aceasta ofera izolatie termica excelenta, durabilitate de peste 40 de ani si un raport calitate-pret de neegalat. In acest ghid complet gasesti tot ce ai nevoie pentru a face alegerea corecta.',
    section1_h2: 'Ce este tamplaria PVC Salamander?',
    section1: 'Salamander Industrie-Produkte GmbH este un producator german cu peste 40 de ani de experienta in fabricarea profilelor din PVC pentru ferestre si usi. Profilele Salamander sunt utilizate de producatori de tamplarie din toata Europa, inclusiv de Neofort BIZ in Bucuresti. Sistemele Salamander folosesc PVC de clasa A, fara plumb, cu o durabilitate garantata de minimum 40 de ani si rezistenta la decolorare UV certificata.',
    systems_h2: 'Sistemele de profile Salamander disponibile la Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 camere', uw: 'Uw pana la 0,8 W/m2K', ideal: 'Renovari, apartamente, buget echilibrat', link: '/produse/profil-pvc-greenevolution-76-md-flex' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 camere', uw: 'Uw pana la 0,8 W/m2K', ideal: 'Design modern cu muchii rotunjite', link: '/produse/profil-pvc-greenevolution-76-md-round' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 camere + 2 garnituri EPDM', uw: 'Uw pana la 0,75 W/m2K', ideal: 'Izolare fonica superioara, zone urbane', link: '/produse/profil-pvc-greenevolution-76-ad-flex' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 camere', uw: 'Uw pana la 0,71 W/m2K', ideal: 'Case nZEB, eficienta energetica maxima', link: '/produse/profil-pvc-bluevolution-92-flex' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 camere', uw: 'Uw pana la 0,71 W/m2K', ideal: 'Design modern + performanta nZEB', link: '/produse/profil-pvc-bluevolution-92-round' },
      { name: 'BluEvolution 92 ALU', chambers: '6 camere + invelis aluminiu', uw: 'Uw pana la 0,71 W/m2K', ideal: 'Aspect aluminiu, performanta PVC nZEB', link: '/produse/profil-pvc-bluevolution-92-alu' },
    ],
    glass_h2: 'Geamul termoizolator — alegerea care conteaza cel mai mult',
    glass: 'Geamul reprezinta 70-80% din suprafata ferestrei si are cel mai mare impact asupra izolarii termice. Neofort BIZ lucreaza exclusiv cu geam Saint-Gobain SGG. Geamul dublu Low-E (2 foi) este solutia standard pentru renovari, cu un coeficient Ug de 1,0-1,1 W/m2K. Geamul tripan Low-E cu argon (3 foi) este obligatoriu pentru certificarea nZEB, atingand valori Ug de 0,5-0,6 W/m2K. Diferenta de confort termic intre geamul dublu si tripan este resimtita in special in sezoanele reci — geamul tripan elimina complet senzatia de frig radiativ langa fereastra.',
    montaj_h2: 'Montajul profesional — diferenta dintre o fereastra buna si una excelenta',
    montaj: 'Cea mai buna tamplarie PVC montata gresit isi pierde 30-50% din performantele termice. Neofort BIZ aplica standardul RAL pentru montajul tamplariei: banda butilic precomprimata la exterior (impermeabila la apa, permeabila la vapori), folie antivapori la interior si spuma PU intre toc si zid. Pentru proiectele nZEB, montajul include obligatoriu precadre Blaugelb Triotherm+ care elimina puntea termica la glaf.',
    nzeb_h2: 'Tamplaria PVC si certificarea nZEB — ce trebuie sa stii',
    nzeb: 'Normativul nZEB (Nearly Zero Energy Building) in vigoare in Romania impune un coeficient global de transfer termic al ferestrei (Uw) de maximum 1,1 W/m2K pentru cladiri noi. Pentru a obtine valori Uw sub 1,0 W/m2K — necesare pentru case pasive sau pentru a maximiza scorul energetic — este recomandat sistemul BluEvolution 92 cu geam tripan Low-E Saint-Gobain si montaj cu precadre Blaugelb. Neofort BIZ ofera consultanta completa pentru proiectele nZEB si livreaza in toata Romania.',
    faq_h2: 'Intrebari frecvente — Tamplarie PVC',
    faq: [
      { q: 'Cat dureaza tamplaria PVC Salamander?', a: 'Profilele Salamander au o durata de viata garantata de minimum 40 de ani. Cu intretinere corecta (curatare anuala, ungere feronerie), functionalitatea se mentine impecabila.' },
      { q: 'Pot vopsi tamplaria PVC?', a: 'Tamplaria PVC Salamander este disponibila in 7 culori standard si peste 30 de folii decorative (inclusiv imitatii de lemn si nuante RAL). Revopsirea nu este necesara si nici recomandata.' },
      { q: 'Cand e mai buna tamplaria PVC fata de aluminiu?', a: 'PVC-ul are izolare termica superioara in comparatie cu aluminiul standard. Este solutia ideala pentru locuinte rezidentiale cu buget optimizat si cerinte nZEB. Aluminiul este preferat pentru goluri mari (peste 4m), design arhitectural slim si fatade comerciale.' },
      { q: 'Cat dureaza productia si montajul?', a: 'Productia dureaza 3-4 saptamani de la semnarea comenzii. Montajul se realizeaza in 1-3 zile in functie de volumul comenzii. Neofort BIZ asigura transport si montaj in Bucuresti, Ilfov si in toata Romania.' },
    ],
    cta_h: 'Solicitati oferta personalizata',
    cta_desc: 'Echipa Neofort BIZ va realizeaza o oferta completa cu preturi pentru tamplarie PVC Salamander, inclusiv masuratori gratuite in Bucuresti si Ilfov.',
    cta_btn: 'Cerere Oferta',
    prices_link: 'Solicita oferta nZEB',
    related_h2: 'Articole utile despre sistemele nZEB',
  },
  en: {
    h1: 'Complete nZEB Systems Guide 2026 — Energy Efficient Windows for Nearly Zero Energy Buildings',
    sub: 'Complete technical guide to Salamander PVC windows: profiles, glazing, hardware, nZEB installation and how to choose the right system for your home in Bucharest and Ilfov.',
    breadcrumb: 'Complete Guide',
    parent_label: 'nZEB Systems',
    intro: 'PVC joinery is the most popular solution for windows and doors in Romania. Made from German-quality Salamander multichamber PVC profile, it offers excellent thermal insulation, over 40 years of durability and an unbeatable quality-price ratio. This complete guide gives you everything you need to make the right choice.',
    section1_h2: 'What is Salamander PVC Joinery?',
    section1: 'Salamander Industrie-Produkte GmbH is a German manufacturer with over 40 years of experience producing PVC profiles for windows and doors. Salamander profiles are used by window manufacturers across Europe, including Neofort BIZ in Bucharest. Salamander systems use Class A PVC, lead-free, with a guaranteed durability of at least 40 years and certified UV colour resistance.',
    systems_h2: 'Salamander Profile Systems Available at Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 chambers', uw: 'Uw up to 0.8 W/m2K', ideal: 'Renovations, apartments, balanced budget', link: '/products/greenevolution-76-md-flex-pvc-profile' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 chambers', uw: 'Uw up to 0.8 W/m2K', ideal: 'Modern design with rounded edges', link: '/products/greenevolution-76-md-round-pvc-profile' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 chambers + 2 EPDM seals', uw: 'Uw up to 0.75 W/m2K', ideal: 'Superior sound insulation, urban areas', link: '/products/greenevolution-76-ad-flex-pvc-profile' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 chambers', uw: 'Uw up to 0.71 W/m2K', ideal: 'nZEB homes, maximum energy efficiency', link: '/products/bluevolution-92-flex-pvc-profile' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 chambers', uw: 'Uw up to 0.71 W/m2K', ideal: 'Modern design + nZEB performance', link: '/products/bluevolution-92-round-pvc-profile' },
      { name: 'BluEvolution 92 ALU', chambers: '6 chambers + aluminium cladding', uw: 'Uw up to 0.71 W/m2K', ideal: 'Aluminium look, nZEB PVC performance', link: '/products/bluevolution-92-alu-pvc-profile' },
    ],
    glass_h2: 'Insulating Glass — The Choice That Matters Most',
    glass: 'Glass represents 70-80% of the window surface and has the greatest impact on thermal insulation. Neofort BIZ works exclusively with Saint-Gobain SGG glass. Double Low-E glass (2 panes) is the standard solution for renovations with a Ug of 1.0-1.1 W/m2K. Triple Low-E glass with argon (3 panes) is mandatory for nZEB certification, achieving Ug values of 0.5-0.6 W/m2K.',
    montaj_h2: 'Professional Installation — The Difference Between Good and Excellent',
    montaj: 'The best PVC joinery incorrectly installed loses 30-50% of its thermal performance. Neofort BIZ applies the RAL standard for window installation: pre-compressed butyl tape on the exterior, vapour barrier film on the interior and PU foam between frame and wall. For nZEB projects, installation includes Blaugelb Triotherm+ sub-sill frames that eliminate thermal bridging.',
    nzeb_h2: 'PVC Windows and nZEB Certification — What You Need to Know',
    nzeb: 'The nZEB regulation in Romania requires a maximum overall heat transfer coefficient (Uw) of 1.1 W/m2K for new buildings. For Uw values below 1.0 W/m2K — required for passive houses — BluEvolution 92 with triple Low-E Saint-Gobain glass and Blaugelb installation is recommended. Neofort BIZ provides complete nZEB consultancy.',
    faq_h2: 'Frequently Asked Questions — PVC Windows',
    faq: [
      { q: 'How long do Salamander PVC windows last?', a: 'Salamander profiles have a guaranteed lifespan of at least 40 years. With correct maintenance (annual cleaning, hardware lubrication), functionality remains impeccable.' },
      { q: 'Can PVC windows be painted?', a: 'Salamander PVC windows come in 7 standard colours and over 30 decorative foils (including woodgrain and RAL shades). Repainting is neither necessary nor recommended.' },
      { q: 'When is PVC better than aluminium?', a: 'PVC has superior thermal insulation compared to standard aluminium. It is the ideal solution for residential homes with an optimised budget and nZEB requirements. Aluminium is preferred for large openings (over 4m), slim architectural design and commercial facades.' },
      { q: 'How long does production and installation take?', a: 'Production takes 3-4 weeks from order signing. Installation is completed in 1-3 days depending on order volume. Neofort BIZ provides transport and installation in Bucharest, Ilfov and throughout Romania.' },
    ],
    cta_h: 'Request a Personalised Quote',
    cta_desc: 'The Neofort BIZ team will prepare a complete quote with prices for Salamander PVC windows, including free measurements in Bucharest and Ilfov.',
    cta_btn: 'Request Quote',
    prices_link: 'Request nZEB Quote',
    related_h2: 'Useful Articles About nZEB Systems',
  },
  de: {
    h1: 'Kompletter nZEB-Ratgeber 2026 — Energieeffiziente Fenster fur Niedrigstenergiehauser',
    sub: 'Vollstandiger technischer Ratgeber zu Salamander PVC-Fenstern: Profile, Verglasung, Beschlage, nZEB-Montage und wie Sie das richtige System fur Ihr Haus in Bukarest und Ilfov wahlen.',
    breadcrumb: 'Kompletter Ratgeber',
    parent_label: 'nZEB-Systeme',
    intro: 'PVC-Tischlerei ist die beliebteste Losung fur Fenster und Turen in Rumanien. Aus deutschen Salamander-Mehrkammerprofilen gefertigt, bietet sie hervorragende Warmedammung, uber 40 Jahre Haltbarkeit und ein unschlagbares Preis-Leistungs-Verhaltnis.',
    section1_h2: 'Was ist Salamander PVC-Tischlerei?',
    section1: 'Salamander Industrie-Produkte GmbH ist ein deutscher Hersteller mit uber 40 Jahren Erfahrung in der Herstellung von PVC-Profilen fur Fenster und Turen. Salamander-Systeme verwenden bleifreies PVC der Klasse A mit einer garantierten Haltbarkeit von mindestens 40 Jahren und zertifizierter UV-Farbbestandigkeit.',
    systems_h2: 'Salamander-Profilsysteme bei Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 Kammern', uw: 'Uw bis 0,8 W/m2K', ideal: 'Renovierungen, Wohnungen, ausgewogenes Budget', link: '/produkte/greenevolution-76-md-flex-pvc-profil' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 Kammern', uw: 'Uw bis 0,8 W/m2K', ideal: 'Modernes Design mit gerundeten Kanten', link: '/produkte/greenevolution-76-md-round-pvc-profil' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 Kammern + 2 EPDM-Dichtungen', uw: 'Uw bis 0,75 W/m2K', ideal: 'Uberlegener Schallschutz, Stadtgebiete', link: '/produkte/greenevolution-76-ad-flex-pvc-profil' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 Kammern', uw: 'Uw bis 0,71 W/m2K', ideal: 'nZEB-Hauser, maximale Energieeffizienz', link: '/produkte/bluevolution-92-flex-pvc-profil' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 Kammern', uw: 'Uw bis 0,71 W/m2K', ideal: 'Modernes Design + nZEB-Leistung', link: '/produkte/bluevolution-92-round-pvc-profil' },
      { name: 'BluEvolution 92 ALU', chambers: '6 Kammern + Aluminiumbekleidung', uw: 'Uw bis 0,71 W/m2K', ideal: 'Aluminium-Optik, nZEB-PVC-Leistung', link: '/produkte/bluevolution-92-alu-pvc-profil' },
    ],
    glass_h2: 'Isolierverglasung — Die entscheidende Wahl',
    glass: 'Glas macht 70-80% der Fensterflache aus und hat den grossten Einfluss auf die Warmedammung. Neofort BIZ arbeitet ausschliesslich mit Saint-Gobain SGG Glas. Zweifach-Low-E-Verglasung ist die Standardlosung fur Renovierungen. Dreifach-Low-E-Verglasung mit Argon ist fur die nZEB-Zertifizierung erforderlich.',
    montaj_h2: 'Professionelle Montage — Der Unterschied zwischen gut und exzellent',
    montaj: 'Die beste PVC-Tischlerei verliert bei falscher Montage 30-50% ihrer Warmeleistung. Neofort BIZ wendet den RAL-Standard fur die Fenstermontage an: vorkomprimiertes Butylband aussen, Dampfsperrfolie innen und PU-Schaum zwischen Rahmen und Wand. Fur nZEB-Projekte umfasst die Montage Blaugelb Triotherm+ Vorfenster.',
    nzeb_h2: 'PVC-Fenster und nZEB-Zertifizierung',
    nzeb: 'Die nZEB-Vorschrift in Rumanien verlangt einen maximalen Warmeubergangskoeffizienten (Uw) von 1,1 W/m2K fur Neubauten. Fur Uw-Werte unter 1,0 W/m2K wird BluEvolution 92 mit Dreifach-Low-E Saint-Gobain-Glas und Blaugelb-Montage empfohlen.',
    faq_h2: 'Haufig gestellte Fragen — PVC-Fenster',
    faq: [
      { q: 'Wie lange halten Salamander PVC-Fenster?', a: 'Salamander-Profile haben eine garantierte Lebensdauer von mindestens 40 Jahren. Mit korrekter Wartung bleibt die Funktionalitat einwandfrei.' },
      { q: 'Konnen PVC-Fenster gestrichen werden?', a: 'Salamander PVC-Fenster sind in 7 Standardfarben und uber 30 Dekorfolien erhaltlich. Uberstreichen ist weder notwendig noch empfohlen.' },
      { q: 'Wann ist PVC besser als Aluminium?', a: 'PVC hat eine uberlegene Warmedammung im Vergleich zu Standard-Aluminium. Es ist die ideale Losung fur Wohngebaude mit optimiertem Budget und nZEB-Anforderungen.' },
      { q: 'Wie lange dauert Produktion und Montage?', a: 'Die Produktion dauert 3-4 Wochen. Die Montage wird in 1-3 Tagen abgeschlossen. Neofort BIZ liefert und montiert in Bukarest, Ilfov und ganz Rumanien.' },
    ],
    cta_h: 'Personalisiertes Angebot anfordern',
    cta_desc: 'Das Neofort BIZ-Team erstellt Ihnen ein vollstandiges Angebot fur Salamander PVC-Fenster, einschliesslich kostenloser Aufmasse in Bukarest und Ilfov.',
    cta_btn: 'Angebot anfordern',
    prices_link: 'nZEB-Angebot anfordern',
    related_h2: 'Nutzliche Artikel uber nZEB-Systeme',
  },
  fr: {
    h1: 'Guide complet systemes nZEB 2026 — Menuiseries pour batiments a energie quasi nulle',
    sub: 'Guide technique complet sur la menuiserie PVC Salamander : profiles, vitrage, ferrures, pose nZEB et comment choisir le bon systeme pour votre maison a Bucarest et Ilfov.',
    breadcrumb: 'Guide complet',
    parent_label: 'Systemes nZEB',
    intro: 'La menuiserie PVC est la solution la plus populaire pour les fenetres et portes en Roumanie. Fabriquee a partir de profiles PVC multicambre allemands Salamander, elle offre une excellente isolation thermique, une durabilite de plus de 40 ans et un rapport qualite-prix imbattable.',
    section1_h2: 'Qu\'est-ce que la menuiserie PVC Salamander ?',
    section1: 'Salamander Industrie-Produkte GmbH est un fabricant allemand avec plus de 40 ans d\'experience dans la fabrication de profiles PVC pour fenetres et portes. Les systemes Salamander utilisent du PVC de classe A, sans plomb, avec une durabilite garantie d\'au moins 40 ans et une resistance UV certifiee.',
    systems_h2: 'Systemes de profiles Salamander disponibles chez Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 chambres', uw: 'Uw jusqu\'a 0,8 W/m2K', ideal: 'Renovations, appartements, budget equilibre', link: '/produits/profil-pvc-greenevolution-76-md-flex' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 chambres', uw: 'Uw jusqu\'a 0,8 W/m2K', ideal: 'Design moderne avec bords arrondis', link: '/produits/profil-pvc-greenevolution-76-md-round' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 chambres + 2 joints EPDM', uw: 'Uw jusqu\'a 0,75 W/m2K', ideal: 'Isolation acoustique superieure, zones urbaines', link: '/produits/profil-pvc-greenevolution-76-ad-flex' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 chambres', uw: 'Uw jusqu\'a 0,71 W/m2K', ideal: 'Maisons nZEB, efficacite energetique maximale', link: '/produits/profil-pvc-bluevolution-92-flex' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 chambres', uw: 'Uw jusqu\'a 0,71 W/m2K', ideal: 'Design moderne + performance nZEB', link: '/produits/profil-pvc-bluevolution-92-round' },
      { name: 'BluEvolution 92 ALU', chambers: '6 chambres + habillage aluminium', uw: 'Uw jusqu\'a 0,71 W/m2K', ideal: 'Aspect aluminium, performance PVC nZEB', link: '/produits/profil-pvc-bluevolution-92-alu' },
    ],
    glass_h2: 'Le vitrage isolant — Le choix qui compte le plus',
    glass: 'Le vitrage represente 70-80% de la surface de la fenetre et a le plus grand impact sur l\'isolation thermique. Neofort BIZ travaille exclusivement avec le verre Saint-Gobain SGG. Le double vitrage Low-E est la solution standard pour les renovations. Le triple vitrage Low-E avec argon est obligatoire pour la certification nZEB.',
    montaj_h2: 'La pose professionnelle — La difference entre bon et excellent',
    montaj: 'La meilleure menuiserie PVC mal installee perd 30 a 50% de ses performances thermiques. Neofort BIZ applique la norme RAL pour la pose des fenetres : ruban butyle precomprime a l\'exterieur, film pare-vapeur a l\'interieur et mousse PU entre dormant et mur.',
    nzeb_h2: 'Menuiserie PVC et certification nZEB',
    nzeb: 'La reglementation nZEB en Roumanie exige un coefficient de transmission thermique maximal (Uw) de 1,1 W/m2K pour les batiments neufs. Pour des valeurs Uw inferieures a 1,0 W/m2K, le BluEvolution 92 avec triple vitrage Low-E Saint-Gobain est recommande.',
    faq_h2: 'Questions frequentes — Menuiserie PVC',
    faq: [
      { q: 'Combien de temps durent les fenetres PVC Salamander ?', a: 'Les profiles Salamander ont une duree de vie garantie d\'au moins 40 ans. Avec un entretien correct, la fonctionnalite reste impeccable.' },
      { q: 'Peut-on peindre les menuiseries PVC ?', a: 'Les menuiseries PVC Salamander sont disponibles en 7 couleurs standard et plus de 30 films decoratifs. La repeinture n\'est ni necessaire ni recommandee.' },
      { q: 'Quand le PVC est-il meilleur que l\'aluminium ?', a: 'Le PVC a une isolation thermique superieure a l\'aluminium standard. C\'est la solution ideale pour les habitations residentielles avec un budget optimise et des exigences nZEB.' },
      { q: 'Combien de temps durent la production et la pose ?', a: 'La production dure 3-4 semaines. La pose est realisee en 1-3 jours. Neofort BIZ assure le transport et la pose a Bucarest, Ilfov et dans toute la Roumanie.' },
    ],
    cta_h: 'Demander un devis personnalise',
    cta_desc: 'L\'equipe Neofort BIZ vous preparera un devis complet pour les menuiseries PVC Salamander, incluant les prises de cotes gratuites a Bucarest et Ilfov.',
    cta_btn: 'Demander un devis',
    prices_link: 'Demander un devis nZEB',
    related_h2: 'Articles utiles sur les systemes nZEB',
  },
  es: {
    h1: 'Guia completa sistemas nZEB 2026 — Ventanas eficientes para edificios de consumo casi nulo',
    sub: 'Guia tecnica completa sobre carpinteria PVC Salamander: perfiles, acristalamiento, herrajes, instalacion nZEB y como elegir el sistema adecuado para su hogar en Bucarest e Ilfov.',
    breadcrumb: 'Guia completa',
    parent_label: 'Sistemas nZEB',
    intro: 'La carpinteria de PVC es la solucion mas popular para ventanas y puertas en Rumania. Fabricada con perfiles multicamara alemanes Salamander, ofrece un excelente aislamiento termico, mas de 40 anos de durabilidad y una incomparable relacion calidad-precio.',
    section1_h2: 'Que es la carpinteria PVC Salamander?',
    section1: 'Salamander Industrie-Produkte GmbH es un fabricante aleman con mas de 40 anos de experiencia en la fabricacion de perfiles de PVC para ventanas y puertas. Los sistemas Salamander utilizan PVC de clase A, sin plomo, con una durabilidad garantizada de al menos 40 anos y resistencia UV certificada.',
    systems_h2: 'Sistemas de perfiles Salamander en Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 camaras', uw: 'Uw hasta 0,8 W/m2K', ideal: 'Reformas, apartamentos, presupuesto equilibrado', link: '/productos/perfil-pvc-greenevolution-76-md-flex' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 camaras', uw: 'Uw hasta 0,8 W/m2K', ideal: 'Diseno moderno con bordes redondeados', link: '/productos/perfil-pvc-greenevolution-76-md-round' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 camaras + 2 juntas EPDM', uw: 'Uw hasta 0,75 W/m2K', ideal: 'Aislamiento acustico superior, zonas urbanas', link: '/productos/perfil-pvc-greenevolution-76-ad-flex' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 camaras', uw: 'Uw hasta 0,71 W/m2K', ideal: 'Casas nZEB, maxima eficiencia energetica', link: '/productos/perfil-pvc-bluevolution-92-flex' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 camaras', uw: 'Uw hasta 0,71 W/m2K', ideal: 'Diseno moderno + rendimiento nZEB', link: '/productos/perfil-pvc-bluevolution-92-round' },
      { name: 'BluEvolution 92 ALU', chambers: '6 camaras + revestimiento aluminio', uw: 'Uw hasta 0,71 W/m2K', ideal: 'Aspecto aluminio, rendimiento PVC nZEB', link: '/productos/perfil-pvc-bluevolution-92-alu' },
    ],
    glass_h2: 'El vidrio aislante — La eleccion que mas importa',
    glass: 'El vidrio representa el 70-80% de la superficie de la ventana y tiene el mayor impacto en el aislamiento termico. Neofort BIZ trabaja exclusivamente con vidrio Saint-Gobain SGG. El doble acristalamiento Low-E es la solucion estandar para reformas. El triple acristalamiento Low-E con argon es obligatorio para la certificacion nZEB.',
    montaj_h2: 'Instalacion profesional — La diferencia entre bueno y excelente',
    montaj: 'La mejor carpinteria PVC mal instalada pierde el 30-50% de su rendimiento termico. Neofort BIZ aplica el estandar RAL para la instalacion de ventanas: cinta de butilo precomprimida en el exterior, lamina barrera de vapor en el interior y espuma de PU entre marco y pared.',
    nzeb_h2: 'Carpinteria PVC y certificacion nZEB',
    nzeb: 'La normativa nZEB en Rumania exige un coeficiente de transmitancia termica maximo (Uw) de 1,1 W/m2K para edificios nuevos. Para valores Uw inferiores a 1,0 W/m2K se recomienda BluEvolution 92 con triple acristalamiento Low-E Saint-Gobain.',
    faq_h2: 'Preguntas frecuentes — Carpinteria PVC',
    faq: [
      { q: 'Cuanto duran las ventanas PVC Salamander?', a: 'Los perfiles Salamander tienen una vida util garantizada de al menos 40 anos. Con el mantenimiento correcto, la funcionalidad se mantiene impecable.' },
      { q: 'Se puede pintar la carpinteria PVC?', a: 'La carpinteria PVC Salamander esta disponible en 7 colores estandar y mas de 30 laminas decorativas. No se necesita ni recomienda repintar.' },
      { q: 'Cuando es el PVC mejor que el aluminio?', a: 'El PVC tiene un aislamiento termico superior al aluminio estandar. Es la solucion ideal para viviendas residenciales con presupuesto optimizado y requisitos nZEB.' },
      { q: 'Cuanto duran la produccion y la instalacion?', a: 'La produccion tarda 3-4 semanas. La instalacion se completa en 1-3 dias. Neofort BIZ proporciona transporte e instalacion en Bucarest, Ilfov y en toda Rumania.' },
    ],
    cta_h: 'Solicitar presupuesto personalizado',
    cta_desc: 'El equipo de Neofort BIZ le preparara un presupuesto completo para carpinteria PVC Salamander, incluyendo mediciones gratuitas en Bucarest e Ilfov.',
    cta_btn: 'Solicitar presupuesto',
    prices_link: 'Solicitar presupuesto nZEB',
    related_h2: 'Articulos utiles sobre sistemas nZEB',
  },
  it: {
    h1: 'Guida completa sistemi nZEB 2026 — Infissi efficienti per edifici a energia quasi zero',
    sub: 'Guida tecnica completa sugli infissi PVC Salamander: profili, vetro, ferramenta, installazione nZEB e come scegliere il sistema giusto per la tua casa a Bucarest e Ilfov.',
    breadcrumb: 'Guida completa',
    parent_label: 'Sistemi nZEB',
    intro: 'La falegnameria in PVC e la soluzione piu popolare per finestre e porte in Romania. Realizzata con profili multicamera tedeschi Salamander, offre un eccellente isolamento termico, oltre 40 anni di durata e un rapporto qualita-prezzo imbattibile.',
    section1_h2: 'Cos\'e la falegnameria PVC Salamander?',
    section1: 'Salamander Industrie-Produkte GmbH e un produttore tedesco con oltre 40 anni di esperienza nella produzione di profili in PVC per finestre e porte. I sistemi Salamander utilizzano PVC di classe A, privo di piombo, con una durata garantita di almeno 40 anni e resistenza UV certificata.',
    systems_h2: 'Sistemi di profili Salamander disponibili da Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 camere', uw: 'Uw fino a 0,8 W/m2K', ideal: 'Ristrutturazioni, appartamenti, budget equilibrato', link: '/prodotti/profilo-pvc-greenevolution-76-md-flex' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 camere', uw: 'Uw fino a 0,8 W/m2K', ideal: 'Design moderno con bordi arrotondati', link: '/prodotti/profilo-pvc-greenevolution-76-md-round' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 camere + 2 guarnizioni EPDM', uw: 'Uw fino a 0,75 W/m2K', ideal: 'Isolamento acustico superiore, zone urbane', link: '/prodotti/profilo-pvc-greenevolution-76-ad-flex' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 camere', uw: 'Uw fino a 0,71 W/m2K', ideal: 'Case nZEB, massima efficienza energetica', link: '/prodotti/profilo-pvc-bluevolution-92-flex' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 camere', uw: 'Uw fino a 0,71 W/m2K', ideal: 'Design moderno + prestazioni nZEB', link: '/prodotti/profilo-pvc-bluevolution-92-round' },
      { name: 'BluEvolution 92 ALU', chambers: '6 camere + rivestimento alluminio', uw: 'Uw fino a 0,71 W/m2K', ideal: 'Aspetto alluminio, prestazioni PVC nZEB', link: '/prodotti/profilo-pvc-bluevolution-92-alu' },
    ],
    glass_h2: 'Il vetro isolante — La scelta che conta di piu',
    glass: 'Il vetro rappresenta il 70-80% della superficie della finestra e ha il maggiore impatto sull\'isolamento termico. Neofort BIZ lavora esclusivamente con vetro Saint-Gobain SGG. Il doppio vetro Low-E e la soluzione standard per le ristrutturazioni. Il triplo vetro Low-E con argon e obbligatorio per la certificazione nZEB.',
    montaj_h2: 'Installazione professionale — La differenza tra buono ed eccellente',
    montaj: 'Il miglior infisso in PVC installato male perde il 30-50% delle sue prestazioni termiche. Neofort BIZ applica lo standard RAL per l\'installazione dei serramenti: nastro in butile precompresso all\'esterno, film barriera vapore all\'interno e schiuma PU tra telaio e parete.',
    nzeb_h2: 'Infissi PVC e certificazione nZEB',
    nzeb: 'La normativa nZEB in Romania richiede un coefficiente di trasmittanza termica massimo (Uw) di 1,1 W/m2K per i nuovi edifici. Per valori Uw inferiori a 1,0 W/m2K si raccomanda BluEvolution 92 con triplo vetro Low-E Saint-Gobain.',
    faq_h2: 'Domande frequenti — Infissi PVC',
    faq: [
      { q: 'Quanto durano gli infissi PVC Salamander?', a: 'I profili Salamander hanno una durata garantita di almeno 40 anni. Con la manutenzione corretta, la funzionalita rimane impeccabile.' },
      { q: 'Si possono verniciare gli infissi PVC?', a: 'Gli infissi PVC Salamander sono disponibili in 7 colori standard e oltre 30 pellicole decorative. La rivernicatura non e ne necessaria ne consigliata.' },
      { q: 'Quando il PVC e meglio dell\'alluminio?', a: 'Il PVC ha un isolamento termico superiore rispetto all\'alluminio standard. E la soluzione ideale per le abitazioni residenziali con budget ottimizzato e requisiti nZEB.' },
      { q: 'Quanto durano produzione e installazione?', a: 'La produzione dura 3-4 settimane. L\'installazione viene completata in 1-3 giorni. Neofort BIZ fornisce trasporto e installazione a Bucarest, Ilfov e in tutta la Romania.' },
    ],
    cta_h: 'Richiedi un preventivo personalizzato',
    cta_desc: 'Il team Neofort BIZ preparera un preventivo completo per infissi PVC Salamander, incluse misurazioni gratuite a Bucarest e Ilfov.',
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
    { slug: 'precadres-blaugelb-triotherm-pose-nzeb', label: 'Pose avec précadres Blaugelb Triotherm+ — pourquoi c' },
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
  ro: 'Solicitati oferta gratuita — raspundem in 2 ore',
  en: 'Request your free quote — we reply within 2 hours',
  de: 'Kostenloses Angebot anfordern — Antwort in 2 Stunden',
  fr: 'Demandez votre devis gratuit — reponse en 2 heures',
  es: 'Solicite su presupuesto gratuito — respondemos en 2 horas',
  it: 'Richiedi il tuo preventivo gratuito — rispondiamo in 2 ore',
};
const MID_DESCS = {
  ro: 'Masuratori gratuite in Bucuresti si Ilfov. Oferta in 24h. 46 recenzii Google 4.9/5.',
  en: 'Free measurements in Bucharest and Ilfov. Quote in 24h. 46 Google reviews 4.9/5.',
  de: 'Kostenlose Aufmasse in Bukarest. Angebot in 24h. 46 Google-Bewertungen 4.9/5.',
  fr: 'Prises de cotes gratuites a Bucarest. Devis en 24h. 46 avis Google 4.9/5.',
  es: 'Mediciones gratuitas en Bucarest. Presupuesto en 24h. 46 resenas Google 4.9/5.',
  it: 'Misurazioni gratuite a Bucarest. Preventivo in 24h. 46 recensioni Google 4.9/5.',
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
        ...Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/${SLUGS[l]}/`])),
        'x-default': `${BASE}/ro/${SLUGS.ro}/`,
      },
    },
    openGraph: { type: 'article', url: canonical, title: ui.h1, description: ui.sub, siteName: 'Neofort BIZ', images: [{ url: `${BASE}/og/nZEB.jpg`, width: 1200, height: 630, type: 'image/avif' }] },
    twitter: { card: 'summary_large_image', site: '@NeofortBIZ', title: ui.h1, description: ui.sub, images: [`${BASE}/og/nZEB.jpg`] },
  };
}

export default async function NZEBGhidPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const waUrl = WA_URLS[locale] || WA_URLS.ro;
  const waLabel = WA_LABELS[locale] || WA_LABELS.ro;
  const midTitle = MID_TITLES[locale] || MID_TITLES.ro;
  const midDesc = MID_DESCS[locale] || MID_DESCS.ro;
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
            <Link href="/contact" style={{ display: 'inline-block', background: '#e8a020', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none' }}>
              {ui.cta_btn}
            </Link>
            <Link href={`/${pricesSlug}`} style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 500, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', border: '1px solid rgba(255,255,255,.4)' }}>
              {ui.prices_link}
            </Link>

            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25d366', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {waLabel}
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 24px' }}>

        {/* INTRO */}
        <p style={{ fontSize: '1.05rem', color: '#3a3a3a', lineHeight: 1.75, marginBottom: '48px', borderLeft: '3px solid #2d7a4e', paddingLeft: '20px' }}>
          {ui.intro}
        </p>

        {/* SECTIUNEA 1 */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#1a2a3a', marginBottom: '16px' }}>
          {ui.section1_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#4a4a4a', lineHeight: 1.75, marginBottom: '48px' }}>
          {ui.section1}
        </p>

        {/* SISTEME */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#1a2a3a', marginBottom: '24px' }}>
          {ui.systems_h2}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(270px,1fr))', gap: '16px', marginBottom: '48px' }}>
          {ui.systems.map((sys, i) => (
            <Link key={i} href={`/${sys.link}`} style={{ textDecoration: 'none' }}>
              <div style={{ border: '1px solid #e8e8e4', padding: '20px', background: '#fafaf8', transition: 'border-color .2s', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '.85rem', letterSpacing: '.08em', textTransform: 'uppercase', color: '#1a2a3a', marginBottom: '8px' }}>{sys.name}</div>
                <div style={{ fontSize: '.78rem', color: '#2d7a4e', fontWeight: 600, marginBottom: '4px' }}>{sys.uw}</div>
                <div style={{ fontSize: '.75rem', color: '#404040', marginBottom: '8px' }}>{sys.chambers}</div>
                <div style={{ fontSize: '.78rem', color: '#4a4a4a', lineHeight: 1.5 }}>{sys.ideal}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* GEAM */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#1a2a3a', marginBottom: '16px' }}>
          {ui.glass_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#4a4a4a', lineHeight: 1.75, marginBottom: '48px' }}>{ui.glass}</p>

        {/* MONTAJ */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#1a2a3a', marginBottom: '16px' }}>
          {ui.montaj_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#4a4a4a', lineHeight: 1.75, marginBottom: '48px' }}>{ui.montaj}</p>

        {/* nZEB */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#1a2a3a', marginBottom: '16px' }}>
          {ui.nzeb_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#4a4a4a', lineHeight: 1.75, marginBottom: '48px' }}>{ui.nzeb}</p>

{/* MID-PAGE WA CTA */}
        <div style={{background:'linear-gradient(135deg,#075e54 0%,#128c7e 100%)',padding:'28px 24px',borderRadius:'4px',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',gap:'10px',margin:'0 0 48px'}}>
          <div style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700,fontSize:'clamp(1rem,3vw,1.3rem)',letterSpacing:'.05em',textTransform:'uppercase',color:'#fff',lineHeight:1.2}}>
            {midTitle}
          </div>
          <div style={{fontSize:'.8rem',color:'rgba(255,255,255,.8)',lineHeight:1.5,maxWidth:'480px'}}>
            {midDesc}
          </div>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            style={{display:'inline-flex',alignItems:'center',gap:'10px',background:'#25d366',color:'#fff',fontFamily:'Barlow Condensed,sans-serif',fontWeight:700,fontSize:'.78rem',letterSpacing:'.15em',textTransform:'uppercase',padding:'12px 24px',textDecoration:'none',borderRadius:'0',marginTop:'4px'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {waLabel}
          </a>
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#1a2a3a', marginBottom: '24px' }}>
          {ui.faq_h2}
        </h2>
        <div style={{ marginBottom: '48px' }}>
          {ui.faq.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid #eee', padding: '20px 0' }}>
              <div style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.95rem', letterSpacing: '.05em', color: '#1a2a3a', marginBottom: '8px' }}>{item.q}</div>
              <div style={{ fontSize: '.88rem', color: '#404040', lineHeight: 1.65 }}>{item.a}</div>
            </div>
          ))}
        </div>

        {/* ARTICOLE CORELATE */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#1a2a3a', marginBottom: '20px' }}>
          {ui.related_h2}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '12px', marginBottom: '56px' }}>
          {blogLinks.map((art, i) => (
            <Link key={i} href={`/blog/${art.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '16px', border: '1px solid #e8e8e4', background: '#fafaf8', fontSize: '.8rem', fontFamily: 'Barlow Condensed,sans-serif', letterSpacing: '.05em', color: '#2d7a4e', lineHeight: 1.4 }}>
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
          <Link href="/contact" style={{ display: 'inline-block', background: '#e8a020', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '16px 40px', textDecoration: 'none' }}>
            {ui.cta_btn}
          </Link>
        </div>

      </main>

      {/* STICKY WA — MOBILE */}
      <a href={waUrl} target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999, display: 'flex', alignItems: 'center', gap: '8px', background: '#25d366', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '11px 18px', borderRadius: '0', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37,211,102,.45)' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        {waLabel}
      </a>

    </>
  );
}