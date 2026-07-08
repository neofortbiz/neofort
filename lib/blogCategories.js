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
