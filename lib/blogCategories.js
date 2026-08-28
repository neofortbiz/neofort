// v202: Sursa unică de adevăr pentru categoriile/temele blogului.
// Folosit de: BlogGrid.js (filtre client), blog/categorie/[cat]/page.js (pagini crawlabile),
// blog/page.js (nav categorii), sitemap.js (URL-uri categorii).
// ATENȚIE: căile din CAT_PATHS trebuie să corespundă 1:1 cu intrările din i18n/routing.js.

// Maparea categorie editorială (category.ro din blog.js) -> temă.
// v202: completată cu cele 6 categorii nemapate anterior (12 articole erau invizibile în filtre)
// + tema nouă 'ghiduri' pentru conținutul informațional (legislație, finanțare, eficiență).
export const CATEGORY_THEME = {
  // PVC
  'Ghid tehnic': 'pvc',
  'Comparație produse': 'pvc',
  'Prețuri & Comparație': 'pvc',
  'Ghiduri & Sfaturi': 'pvc',
  'Tâmplărie PVC': 'pvc',
  // Aluminiu
  'Tâmplărie Aluminiu': 'aluminiu',
  'Pereți Cortină': 'aluminiu',
  'Pereți Cortină & Birouri': 'aluminiu',
  'Vitrine & Geamuri Mari': 'aluminiu',
  // Umbrire
  'Sisteme Umbrire': 'umbrire',
  'Sisteme de Umbrire': 'umbrire',
  // nZEB
  'Montaj & Izolare': 'nzeb',
  'Prețuri & Ghid': 'nzeb',
  'Renovare & Ghid': 'nzeb',
  'Sisteme nZEB': 'nzeb',
  // Automatizare
  'Automatizare & Smart Home': 'automatizare',
  'Smart Home & Automatizare': 'automatizare',
  // Proiecte
  'Case Individuale & Export': 'proiecte',
  'Case Noi & Smart Home': 'proiecte',
  'Export & Europa': 'proiecte',
  'Export & Case Munte': 'proiecte',
  'Export & Livrare': 'proiecte',
  'Lucrări București': 'proiecte',
  'Construcții Noi & Blocuri': 'proiecte',
  'Montaj Specializat': 'proiecte',
  'Proiecte realizate': 'proiecte',
  // Ghiduri & Legislație (temă nouă v202)
  'Legislație': 'ghiduri',
  'Ghid practic': 'ghiduri',
  'Finanțare & Subvenții': 'ghiduri',
  'Eficiență energetică': 'ghiduri',
};

export const THEMES = ['pvc', 'aluminiu', 'umbrire', 'nzeb', 'automatizare', 'proiecte', 'ghiduri'];

export const THEME_LABELS = {
  ro: { all:'Toate', pvc:'Tâmplărie PVC', aluminiu:'Aluminiu', umbrire:'Umbrire', nzeb:'nZEB', automatizare:'Automatizare', proiecte:'Proiecte', ghiduri:'Ghiduri & Legislație' },
  en: { all:'All', pvc:'PVC Windows', aluminiu:'Aluminium', umbrire:'Shading', nzeb:'nZEB', automatizare:'Automation', proiecte:'Projects', ghiduri:'Guides & Legislation' },
  de: { all:'Alle', pvc:'PVC-Fenster', aluminiu:'Aluminium', umbrire:'Beschattung', nzeb:'nZEB', automatizare:'Automation', proiecte:'Projekte', ghiduri:'Ratgeber & Recht' },
  fr: { all:'Tous', pvc:'Menuiserie PVC', aluminiu:'Aluminium', umbrire:'Occultation', nzeb:'nZEB', automatizare:'Automatisation', proiecte:'Projets', ghiduri:'Guides & Législation' },
  es: { all:'Todos', pvc:'Carpintería PVC', aluminiu:'Aluminio', umbrire:'Sombreado', nzeb:'nZEB', automatizare:'Automatización', proiecte:'Proyectos', ghiduri:'Guías & Legislación' },
  it: { all:'Tutti', pvc:'Infissi PVC', aluminiu:'Alluminio', umbrire:'Oscuramento', nzeb:'nZEB', automatizare:'Automazione', proiecte:'Progetti', ghiduri:'Guide & Normativa' },
};

// Meta descriptions pentru paginile de categorie (SEO)
export const THEME_DESC = {
  ro: {
    pvc:'Ghiduri tehnice, comparații și prețuri pentru tâmplăria PVC Salamander: profile, geamuri, montaj corect și alegerea sistemului potrivit.',
    aluminiu:'Articole despre tâmplăria din aluminiu Alumil: sisteme cu barieră termică, pereți cortină, vitrine și uși pentru case și clădiri comerciale.',
    umbrire:'Sisteme de umbrire exterioară: jaluzele Raffstore, rulouri din aluminiu, Zipscreen și pergole — comparații, prețuri și ghiduri de alegere.',
    nzeb:'Soluții nZEB pentru ferestre: montaj termoizolant, precadre Blaugelb, izolație perimetrală și renovare energetică eficientă.',
    automatizare:'Automatizare și smart home pentru tâmplărie: motoare Somfy, TaHoma, KNX și integrarea ferestrelor și umbririi în casa inteligentă.',
    proiecte:'Lucrări realizate de Neofort BIZ în București și Europa: montaje Salamander și Alumil, exporturi, case noi și proiecte comerciale.',
    ghiduri:'Ghiduri practice și legislație pentru ferestre: autorizații, acordul asociației, certificat energetic, subvenții și programe de finanțare.',
  },
  en: {
    pvc:'Technical guides, comparisons and prices for Salamander PVC windows: profiles, glazing, correct installation and choosing the right system.',
    aluminiu:'Articles about Alumil aluminium windows: thermal-break systems, curtain walls, storefronts and doors for homes and commercial buildings.',
    umbrire:'Exterior shading systems: Raffstore blinds, aluminium shutters, Zipscreen and pergolas — comparisons, prices and buying guides.',
    nzeb:'nZEB window solutions: thermally insulated installation, Blaugelb precasings, perimeter insulation and efficient energy renovation.',
    automatizare:'Automation and smart home for windows: Somfy motors, TaHoma, KNX and integrating windows and shading into the smart home.',
    proiecte:'Projects completed by Neofort BIZ in Bucharest and Europe: Salamander and Alumil installations, exports, new homes and commercial work.',
    ghiduri:'Practical guides and legislation for windows: permits, owners association approval, energy certificate, subsidies and funding programmes.',
  },
  de: {
    pvc:'Technische Ratgeber, Vergleiche und Preise für Salamander PVC-Fenster: Profile, Verglasung, korrekte Montage und Systemwahl.',
    aluminiu:'Artikel über Alumil Aluminiumfenster: Systeme mit thermischer Trennung, Vorhangfassaden, Schaufenster und Türen.',
    umbrire:'Außenbeschattung: Raffstore-Jalousien, Aluminiumrollläden, Zipscreen und Pergolen — Vergleiche, Preise und Kaufratgeber.',
    nzeb:'nZEB-Fensterlösungen: wärmegedämmte Montage, Blaugelb-Vorfenster, Perimeterdämmung und effiziente energetische Sanierung.',
    automatizare:'Automatisierung und Smart Home für Fenster: Somfy-Motoren, TaHoma, KNX und die Integration in das intelligente Zuhause.',
    proiecte:'Von Neofort BIZ realisierte Projekte in Bukarest und Europa: Salamander- und Alumil-Montagen, Exporte, Neubauten.',
    ghiduri:'Praktische Ratgeber und Recht rund um Fenster: Genehmigungen, Zustimmung der Eigentümergemeinschaft, Energieausweis, Förderungen.',
  },
  fr: {
    pvc:'Guides techniques, comparaisons et prix pour la menuiserie PVC Salamander : profils, vitrages, pose correcte et choix du système.',
    aluminiu:'Articles sur la menuiserie aluminium Alumil : systèmes à rupture de pont thermique, murs-rideaux, vitrines et portes.',
    umbrire:'Systèmes d\u2019occultation extérieure : stores Raffstore, volets aluminium, Zipscreen et pergolas — comparaisons, prix et guides.',
    nzeb:'Solutions nZEB pour fenêtres : pose thermo-isolante, précadres Blaugelb, isolation périmétrale et rénovation énergétique.',
    automatizare:'Automatisation et maison connectée : moteurs Somfy, TaHoma, KNX et intégration des fenêtres et de l\u2019occultation.',
    proiecte:'Projets réalisés par Neofort BIZ à Bucarest et en Europe : poses Salamander et Alumil, exports, maisons neuves.',
    ghiduri:'Guides pratiques et législation pour les fenêtres : permis, accord de la copropriété, certificat énergétique, subventions.',
  },
  es: {
    pvc:'Guías técnicas, comparaciones y precios para la carpintería PVC Salamander: perfiles, vidrios, montaje correcto y elección del sistema.',
    aluminiu:'Artículos sobre la carpintería de aluminio Alumil: sistemas con rotura de puente térmico, muros cortina, escaparates y puertas.',
    umbrire:'Sistemas de sombreado exterior: persianas Raffstore, persianas de aluminio, Zipscreen y pérgolas — comparaciones, precios y guías.',
    nzeb:'Soluciones nZEB para ventanas: montaje termoaislante, premarcos Blaugelb, aislamiento perimetral y renovación energética.',
    automatizare:'Automatización y hogar inteligente: motores Somfy, TaHoma, KNX e integración de ventanas y sombreado.',
    proiecte:'Proyectos realizados por Neofort BIZ en Bucarest y Europa: montajes Salamander y Alumil, exportaciones, casas nuevas.',
    ghiduri:'Guías prácticas y legislación para ventanas: permisos, acuerdo de la comunidad, certificado energético, subvenciones.',
  },
  it: {
    pvc:'Guide tecniche, confronti e prezzi per i serramenti in PVC Salamander: profili, vetri, posa corretta e scelta del sistema.',
    aluminiu:'Articoli sui serramenti in alluminio Alumil: sistemi a taglio termico, facciate continue, vetrine e porte.',
    umbrire:'Sistemi di oscuramento esterno: frangisole Raffstore, tapparelle in alluminio, Zipscreen e pergole — confronti, prezzi e guide.',
    nzeb:'Soluzioni nZEB per finestre: posa termoisolante, pre-telai Blaugelb, isolamento perimetrale e ristrutturazione energetica.',
    automatizare:'Automazione e smart home: motori Somfy, TaHoma, KNX e integrazione di finestre e oscuramento nella casa intelligente.',
    proiecte:'Progetti realizzati da Neofort BIZ a Bucarest e in Europa: installazioni Salamander e Alumil, esportazioni, case nuove.',
    ghiduri:'Guide pratiche e normativa per le finestre: permessi, consenso del condominio, certificato energetico, incentivi.',
  },
};

// Căile localizate ale paginilor de categorie (fără prefixul de limbă).
// TREBUIE să corespundă 1:1 cu intrările '/blog/categorie/*' din i18n/routing.js.
export const CAT_PATHS = {
  pvc:          { ro:'/blog/categorie/pvc',          en:'/blog/category/pvc',          de:'/blog/kategorie/pvc',           fr:'/blog/categorie/pvc',           es:'/blog/categoria/pvc',           it:'/blog/categoria/pvc' },
  aluminiu:     { ro:'/blog/categorie/aluminiu',     en:'/blog/category/aluminium',    de:'/blog/kategorie/aluminium',     fr:'/blog/categorie/aluminium',     es:'/blog/categoria/aluminio',      it:'/blog/categoria/alluminio' },
  umbrire:      { ro:'/blog/categorie/umbrire',      en:'/blog/category/shading',      de:'/blog/kategorie/beschattung',   fr:'/blog/categorie/occultation',   es:'/blog/categoria/sombreado',     it:'/blog/categoria/oscuramento' },
  nzeb:         { ro:'/blog/categorie/nzeb',         en:'/blog/category/nzeb',         de:'/blog/kategorie/nzeb',          fr:'/blog/categorie/nzeb',          es:'/blog/categoria/nzeb',          it:'/blog/categoria/nzeb' },
  automatizare: { ro:'/blog/categorie/automatizare', en:'/blog/category/automation',   de:'/blog/kategorie/automation',    fr:'/blog/categorie/automatisation',es:'/blog/categoria/automatizacion',it:'/blog/categoria/automazione' },
  proiecte:     { ro:'/blog/categorie/proiecte',     en:'/blog/category/projects',     de:'/blog/kategorie/projekte',      fr:'/blog/categorie/projets',       es:'/blog/categoria/proyectos',     it:'/blog/categoria/progetti' },
  ghiduri:      { ro:'/blog/categorie/ghiduri',      en:'/blog/category/guides',       de:'/blog/kategorie/ratgeber',      fr:'/blog/categorie/guides',        es:'/blog/categoria/guias',         it:'/blog/categoria/guide' },
};

// Helper: articolele unei teme, sortate desc după dată
export function getThemeArticles(articles, theme) {
  return articles
    .filter(a => CATEGORY_THEME[a.category?.ro] === theme)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
// ── Text introductiv propriu pentru paginile de categorie — v218 ────────────
// Anterior paginile de categorie afișau doar H1 + meta description (~150 car.),
// fiind practic listări duplicate ale /blog. Google le-a lăsat la
// „Descoperită — nu este indexată": 32 din 42 (inclusiv 6 din 7 în română).
// Fiecare text conține un fapt citabil pentru LLM (cine, ce, unde).
export const THEME_INTRO = {
  ro: {
    pvc:'Diferența dintre un profil de trei camere și unul certificat nZEB se vede direct în factura de încălzire, nu în broșură. Articolele din această secțiune acoperă profilele Salamander BluEvolution 92 și GreenEvolution 76, tipurile de geam termoizolant, reglajul feroneriei Roto și greșelile de montaj care anulează performanța declarată a ferestrei. Neofort BIZ furnizează și montează tâmplărie PVC Salamander în București și Ilfov.',
    aluminiu:'Aluminiul cu barieră termică susține deschideri mari și rame înguste pe care PVC-ul nu le poate prelua structural. Aici găsești comparații între sistemele Alumil Supreme și Smartia, ghiduri despre pereți cortină și fațade de sticlă, uși de intrare antiefracție și soluții pentru vitrine comerciale. Neofort BIZ execută tâmplărie din aluminiu Alumil pentru case, blocuri și clădiri de birouri în București și Ilfov.',
    umbrire:'Un sistem de umbrire exterioară oprește căldura înainte să treacă prin geam, spre deosebire de jaluzelele interioare, care acționează după ce radiația a intrat deja în cameră. Secțiunea compară jaluzelele Raffstore, rulourile din aluminiu, Zipscreen-ul și pergolele bioclimatice, cu detalii despre rezistența la vânt, controlul luminii și automatizarea Somfy. Neofort BIZ montează sisteme de umbrire în București și Ilfov.',
    nzeb:'Un profil performant montat greșit pierde o parte importantă din eficiența termică pentru care ai plătit. Articolele de aici tratează montajul în trei planuri de etanșare, precadrele Blaugelb Triotherm+, baghetele warm edge, benzile precomprimate și certificatul energetic al clădirii. Neofort BIZ execută montaj nZEB cu izolare perimetrală completă în București și Ilfov.',
    automatizare:'Automatizarea nu înseamnă doar confort: un rulou care coboară singur la ora de vârf a radiației solare reduce măsurabil sarcina de răcire a casei. Secțiunea acoperă motoarele Somfy Oximo și Sunea io, hub-ul TaHoma, senzorii de vânt și de soare și integrarea ferestrelor și a umbririi într-un sistem smart home. Neofort BIZ instalează automatizări Somfy în București și Ilfov.',
    proiecte:'Lucrările reale arată mai mult decât fișele tehnice: cum se comportă un sistem pe o fațadă expusă, cum se ridică un geam agabaritic la etaj sau ce presupune un export către Germania. Aici sunt documentate montaje Salamander și Alumil pe case individuale, blocuri noi și spații comerciale, inclusiv livrări în afara României. Neofort BIZ livrează și montează în București, Ilfov și în Uniunea Europeană.',
    ghiduri:'Înainte de comanda propriu-zisă sunt câteva lucruri administrative care pot bloca un proiect: autorizația de construire, acordul asociației de proprietari sau condițiile unui program de finanțare. Secțiunea explică legislația aplicabilă în 2026, certificatul energetic al clădirii, regulamentul european pentru produse pentru construcții și programele de sprijin disponibile. Neofort BIZ oferă consultanță tehnică pentru proiecte în București și Ilfov.',
  },
  en: {
    pvc:'The gap between a three-chamber profile and an nZEB-certified one shows up on the heating bill, not in the brochure. This section covers the Salamander BluEvolution 92 and GreenEvolution 76 profiles, the different types of insulating glass, adjusting Roto hardware, and the installation mistakes that quietly cancel out a window rated performance. Neofort BIZ supplies and installs Salamander PVC windows in Bucharest and Ilfov.',
    aluminiu:'Thermally broken aluminium carries the large openings and slim frames that PVC cannot support structurally. Here you will find comparisons between the Alumil Supreme and Smartia systems, guides to curtain walls and glass facades, anti-burglary entrance doors and solutions for commercial storefronts. Neofort BIZ builds Alumil aluminium windows for houses, apartment blocks and office buildings in Bucharest and Ilfov.',
    umbrire:'External shading stops heat before it passes through the glass, unlike interior blinds, which only act once the radiation is already inside the room. This section compares Raffstore blinds, aluminium roller shutters, Zipscreen and bioclimatic pergolas, with detail on wind resistance, light control and Somfy automation. Neofort BIZ installs shading systems in Bucharest and Ilfov.',
    nzeb:'A high-performance profile installed badly loses a good part of the thermal efficiency you paid for. The articles here deal with three-plane sealed installation, Blaugelb Triotherm+ precasings, warm edge spacers, pre-compressed tapes and the building energy certificate. Neofort BIZ carries out nZEB installation with full perimeter insulation in Bucharest and Ilfov.',
    automatizare:'Automation is not only about comfort: a shutter that lowers itself at peak solar radiation measurably reduces the cooling load of the house. This section covers Somfy Oximo and Sunea io motors, the TaHoma hub, wind and sun sensors, and integrating windows and shading into a smart home system. Neofort BIZ installs Somfy automation in Bucharest and Ilfov.',
    proiecte:'Real projects show more than a datasheet: how a system behaves on an exposed facade, how an oversized pane is lifted to an upper floor, or what an export to Germany actually involves. Documented here are Salamander and Alumil installations on private houses, new apartment blocks and commercial spaces, including deliveries outside Romania. Neofort BIZ delivers and installs in Bucharest, Ilfov and across the European Union.',
    ghiduri:'Before the order itself, a few administrative matters can hold up a project: the building permit, the approval of the owners association, or the conditions attached to a funding programme. This section explains the legislation in force in 2026, the building energy certificate, the European construction products regulation and the support schemes available. Neofort BIZ provides technical consultancy for projects in Bucharest and Ilfov.',
  },
  de: {
    pvc:'Der Unterschied zwischen einem Dreikammerprofil und einem nZEB-zertifizierten Profil zeigt sich auf der Heizkostenabrechnung, nicht im Prospekt. Dieser Bereich behandelt die Profile Salamander BluEvolution 92 und GreenEvolution 76, die verschiedenen Isolierglasarten, die Einstellung der Roto-Beschläge sowie die Montagefehler, die die angegebene Fensterleistung zunichtemachen. Neofort BIZ liefert und montiert Salamander Kunststofffenster in Bukarest und Ilfov.',
    aluminiu:'Aluminium mit thermischer Trennung trägt große Öffnungen und schmale Rahmen, die PVC statisch nicht aufnehmen kann. Hier finden Sie Vergleiche der Systeme Alumil Supreme und Smartia, Ratgeber zu Vorhangfassaden und Glasfassaden, einbruchhemmende Eingangstüren und Lösungen für Schaufensteranlagen. Neofort BIZ fertigt Alumil Aluminiumfenster für Einfamilienhäuser, Wohnblocks und Bürogebäude in Bukarest und Ilfov.',
    umbrire:'Außenliegender Sonnenschutz hält die Wärme auf, bevor sie durch die Scheibe dringt, im Gegensatz zu Innenjalousien, die erst wirken, wenn die Strahlung bereits im Raum ist. Der Bereich vergleicht Raffstore-Jalousien, Aluminiumrollläden, Zipscreen und bioklimatische Pergolen, mit Angaben zu Windwiderstand, Lichtsteuerung und Somfy-Automatisierung. Neofort BIZ montiert Beschattungssysteme in Bukarest und Ilfov.',
    nzeb:'Ein leistungsfähiges Profil, das falsch eingebaut wird, verliert einen erheblichen Teil der Wärmedämmung, für die Sie bezahlt haben. Die Beiträge hier behandeln die Montage in drei Dichtebenen, Blaugelb Triotherm+ Vorblendrahmen, Warm-Edge-Abstandhalter, vorkomprimierte Dichtbänder und den Gebäudeenergieausweis. Neofort BIZ führt nZEB-Montagen mit vollständiger Perimeterdämmung in Bukarest und Ilfov aus.',
    automatizare:'Automatisierung bedeutet nicht nur Komfort: Ein Rollladen, der bei maximaler Sonneneinstrahlung selbsttätig herunterfährt, senkt die Kühllast des Hauses messbar. Der Bereich behandelt die Motoren Somfy Oximo und Sunea io, den TaHoma-Hub, Wind- und Sonnensensoren sowie die Einbindung von Fenstern und Beschattung in ein Smart-Home-System. Neofort BIZ installiert Somfy-Automatisierungen in Bukarest und Ilfov.',
    proiecte:'Ausgeführte Projekte sagen mehr aus als ein Datenblatt: wie sich ein System an einer exponierten Fassade verhält, wie eine übergroße Scheibe in ein Obergeschoss gehoben wird oder was ein Export nach Deutschland tatsächlich bedeutet. Dokumentiert sind hier Montagen von Salamander und Alumil an Einfamilienhäusern, Neubauten und Gewerbeflächen, einschließlich Lieferungen außerhalb Rumäniens. Neofort BIZ liefert und montiert in Bukarest, Ilfov und in der Europäischen Union.',
    ghiduri:'Vor der eigentlichen Bestellung können einige behördliche Punkte ein Projekt aufhalten: die Baugenehmigung, die Zustimmung der Eigentümergemeinschaft oder die Bedingungen eines Förderprogramms. Der Bereich erläutert die 2026 geltenden Vorschriften, den Gebäudeenergieausweis, die europäische Bauproduktenverordnung und die verfügbaren Förderungen. Neofort BIZ bietet technische Beratung für Projekte in Bukarest und Ilfov.',
  },
  fr: {
    pvc:`L'écart entre un profilé trois chambres et un profilé certifié nZEB se lit sur la facture de chauffage, pas dans la brochure. Cette rubrique couvre les profilés Salamander BluEvolution 92 et GreenEvolution 76, les types de vitrage isolant, le réglage de la quincaillerie Roto et les erreurs de pose qui annulent la performance annoncée de la fenêtre. Neofort BIZ fournit et pose des menuiseries PVC Salamander à Bucarest et dans le département d'Ilfov.`,
    aluminiu:`L'aluminium à rupture de pont thermique permet de grandes ouvertures et des montants fins que le PVC ne peut pas reprendre structurellement. Vous trouverez ici des comparatifs entre les systèmes Alumil Supreme et Smartia, des guides sur les murs-rideaux et les façades vitrées, des portes d'entrée anti-effraction et des solutions pour vitrines commerciales. Neofort BIZ réalise des menuiseries en aluminium Alumil pour maisons, immeubles et bureaux à Bucarest et dans l'Ilfov.`,
    umbrire:`Une protection solaire extérieure arrête la chaleur avant qu'elle ne traverse le vitrage, contrairement aux stores intérieurs, qui n'agissent qu'une fois le rayonnement entré dans la pièce. La rubrique compare les stores Raffstore, les volets roulants en aluminium, le Zipscreen et les pergolas bioclimatiques, avec le détail de la résistance au vent, de la gestion de la lumière et de l'automatisation Somfy. Neofort BIZ pose des systèmes d'occultation à Bucarest et dans l'Ilfov.`,
    nzeb:`Un profilé performant mal posé perd une part importante de l'efficacité thermique payée. Les articles réunis ici traitent de la pose en trois plans d'étanchéité, des précadres Blaugelb Triotherm+, des intercalaires warm edge, des bandes précomprimées et du certificat énergétique du bâtiment. Neofort BIZ réalise des poses nZEB avec isolation périphérique complète à Bucarest et dans l'Ilfov.`,
    automatizare:`L'automatisation ne relève pas seulement du confort : un volet qui descend seul au pic de rayonnement solaire réduit sensiblement la charge de climatisation de la maison. La rubrique couvre les moteurs Somfy Oximo et Sunea io, le hub TaHoma, les capteurs de vent et de soleil, ainsi que l'intégration des fenêtres et de l'occultation dans une installation domotique. Neofort BIZ installe des automatismes Somfy à Bucarest et dans l'Ilfov.`,
    proiecte:`Les chantiers réalisés en disent plus qu'une fiche technique : comment un système se comporte sur une façade exposée, comment un vitrage hors normes est monté à l'étage, ou ce qu'implique réellement un export vers l'Allemagne. Sont documentées ici des poses Salamander et Alumil sur maisons individuelles, immeubles neufs et locaux commerciaux, y compris des livraisons hors de Roumanie. Neofort BIZ livre et pose à Bucarest, dans l'Ilfov et dans toute l'Union européenne.`,
    ghiduri:`Avant la commande elle-même, quelques démarches administratives peuvent bloquer un projet : le permis de construire, l'accord de la copropriété ou les conditions d'un programme de financement. La rubrique explique la réglementation applicable en 2026, le certificat énergétique du bâtiment, le règlement européen sur les produits de construction et les aides disponibles. Neofort BIZ assure un conseil technique pour les projets à Bucarest et dans l'Ilfov.`,
  },
  es: {
    pvc:'La diferencia entre un perfil de tres cámaras y uno certificado nZEB se nota en la factura de calefacción, no en el catálogo. Esta sección cubre los perfiles Salamander BluEvolution 92 y GreenEvolution 76, los tipos de vidrio aislante, el ajuste de la herrajería Roto y los errores de instalación que anulan el rendimiento declarado de la ventana. Neofort BIZ suministra e instala carpintería PVC Salamander en Bucarest e Ilfov.',
    aluminiu:'El aluminio con rotura de puente térmico admite grandes aberturas y perfiles estrechos que el PVC no puede asumir estructuralmente. Aquí encontrará comparativas entre los sistemas Alumil Supreme y Smartia, guías sobre muros cortina y fachadas de vidrio, puertas de entrada antirrobo y soluciones para escaparates comerciales. Neofort BIZ fabrica carpintería de aluminio Alumil para viviendas, bloques y edificios de oficinas en Bucarest e Ilfov.',
    umbrire:'Un sistema de sombreado exterior detiene el calor antes de que atraviese el vidrio, a diferencia de las persianas interiores, que actúan cuando la radiación ya ha entrado en la habitación. La sección compara las persianas Raffstore, las persianas enrollables de aluminio, el Zipscreen y las pérgolas bioclimáticas, con detalle sobre resistencia al viento, control de la luz y automatización Somfy. Neofort BIZ instala sistemas de sombreado en Bucarest e Ilfov.',
    nzeb:'Un perfil de altas prestaciones mal instalado pierde buena parte de la eficiencia térmica que se ha pagado. Los artículos reunidos aquí tratan la instalación en tres planos de sellado, los premarcos Blaugelb Triotherm+, los separadores warm edge, las cintas precomprimidas y el certificado energético del edificio. Neofort BIZ realiza instalaciones nZEB con aislamiento perimetral completo en Bucarest e Ilfov.',
    automatizare:'La automatización no es solo cuestión de comodidad: una persiana que baja sola en el pico de radiación solar reduce de forma medible la carga de refrigeración de la vivienda. La sección cubre los motores Somfy Oximo y Sunea io, el hub TaHoma, los sensores de viento y sol, y la integración de ventanas y sombreado en un sistema domótico. Neofort BIZ instala automatizaciones Somfy en Bucarest e Ilfov.',
    proiecte:'Las obras ejecutadas dicen más que una ficha técnica: cómo se comporta un sistema en una fachada expuesta, cómo se sube un vidrio de gran formato a una planta alta o qué implica realmente una exportación a Alemania. Aquí se documentan instalaciones Salamander y Alumil en viviendas unifamiliares, bloques de obra nueva y locales comerciales, incluidas entregas fuera de Rumanía. Neofort BIZ entrega e instala en Bucarest, Ilfov y en toda la Unión Europea.',
    ghiduri:'Antes del pedido en sí, algunos trámites pueden bloquear un proyecto: la licencia de obra, el acuerdo de la comunidad de propietarios o las condiciones de un programa de financiación. La sección explica la normativa vigente en 2026, el certificado energético del edificio, el reglamento europeo de productos de construcción y las ayudas disponibles. Neofort BIZ ofrece asesoramiento técnico para proyectos en Bucarest e Ilfov.',
  },
  it: {
    pvc:`La differenza tra un profilo a tre camere e uno certificato nZEB si legge sulla bolletta del riscaldamento, non sul catalogo. Questa sezione tratta i profili Salamander BluEvolution 92 e GreenEvolution 76, i tipi di vetro isolante, la regolazione della ferramenta Roto e gli errori di posa che vanificano le prestazioni dichiarate della finestra. Neofort BIZ fornisce e posa infissi in PVC Salamander a Bucarest e nel distretto di Ilfov.`,
    aluminiu:`L'alluminio a taglio termico regge grandi aperture e telai sottili che il PVC non può sostenere strutturalmente. Qui trovate confronti tra i sistemi Alumil Supreme e Smartia, guide su pareti continue e facciate in vetro, porte d'ingresso antieffrazione e soluzioni per vetrine commerciali. Neofort BIZ realizza serramenti in alluminio Alumil per case, condomini ed edifici per uffici a Bucarest e nell'Ilfov.`,
    umbrire:`Un sistema di oscuramento esterno ferma il calore prima che attraversi il vetro, a differenza delle veneziane interne, che agiscono quando la radiazione è già entrata nella stanza. La sezione mette a confronto le veneziane Raffstore, le tapparelle in alluminio, lo Zipscreen e le pergole bioclimatiche, con dettagli su resistenza al vento, controllo della luce e automazione Somfy. Neofort BIZ installa sistemi di oscuramento a Bucarest e nell'Ilfov.`,
    nzeb:`Un profilo performante posato male perde buona parte dell'efficienza termica pagata. Gli articoli raccolti qui trattano la posa su tre piani di tenuta, i controtelai Blaugelb Triotherm+, i distanziali warm edge, i nastri precompressi e il certificato energetico dell'edificio. Neofort BIZ esegue pose nZEB con isolamento perimetrale completo a Bucarest e nell'Ilfov.`,
    automatizare:`L'automazione non riguarda solo il comfort: una tapparella che si abbassa da sola nel picco di radiazione solare riduce in modo misurabile il carico di raffrescamento della casa. La sezione tratta i motori Somfy Oximo e Sunea io, l'hub TaHoma, i sensori di vento e di sole e l'integrazione di finestre e oscuramento in un sistema smart home. Neofort BIZ installa automazioni Somfy a Bucarest e nell'Ilfov.`,
    proiecte:`I lavori realizzati dicono più di una scheda tecnica: come si comporta un sistema su una facciata esposta, come si solleva una lastra fuori misura a un piano alto o che cosa comporta davvero un export verso la Germania. Qui sono documentate pose Salamander e Alumil su case unifamiliari, nuovi condomini e spazi commerciali, comprese le consegne fuori dalla Romania. Neofort BIZ consegna e posa a Bucarest, nell'Ilfov e in tutta l'Unione Europea.`,
    ghiduri:`Prima dell'ordine vero e proprio alcuni passaggi amministrativi possono bloccare un progetto: il permesso di costruire, il consenso dell'assemblea condominiale o le condizioni di un programma di finanziamento. La sezione spiega la normativa in vigore nel 2026, il certificato energetico dell'edificio, il regolamento europeo sui prodotti da costruzione e le agevolazioni disponibili. Neofort BIZ offre consulenza tecnica per progetti a Bucarest e nell'Ilfov.`,
  },
};

// Pagina pilon corespunzătoare fiecărei teme — cheie din i18n/routing.js.
// Link intern bidirecțional: hub categorie → pagina comercială.
export const THEME_PILLAR = {
  pvc:          '/tamplarie-pvc',
  aluminiu:     '/tamplarie-aluminiu',
  umbrire:      '/umbrire',
  nzeb:         '/sisteme-nzeb',
  automatizare: '/accesorii',
  proiecte:     '/servicii',
  ghiduri:      '/tamplarie-pvc/ghid-complet',
};

export const THEME_PILLAR_CTA = {
  ro: 'Vezi produsele și serviciile',
  en: 'See products and services',
  de: 'Produkte und Leistungen ansehen',
  fr: 'Voir les produits et services',
  es: 'Ver productos y servicios',
  it: 'Vedi prodotti e servizi',
};
