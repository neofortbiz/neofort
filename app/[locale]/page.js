import { Link } from '../../i18n/navigation';

const BASE = 'https://www.neofort-biz.ro';

// ─── CONȚINUT MULTILINGV COMPLET ────────────────────────────────────────────
const CONTENT = {
  ro: {
    title: 'Tâmplărie PVC & Aluminiu nZEB | Neofort BIZ București',
    desc: 'Furnizor tâmplărie PVC Salamander și aluminiu Alumil în București. Geam termoizolator nZEB, montaj profesional, livrare în toată Europa. 21 ani experiență.',
    h1: 'Tâmplărie PVC Salamander și Aluminiu Alumil — Neofort BIZ București',
    hero_pvc_label: 'Profile PVC Salamander',
    hero_pvc_tag: 'Tehnologie Germană',
    hero_pvc_title: 'Tâmplărie PVC Salamander',
    hero_pvc_desc: 'Eficiență energetică nZEB, design german atemporal pentru proiecte rezidențiale premium. BluEvolution 92 placat Aluminiu (6 camere) · GreenEvolution 76 (5 camere) · montaj Blaugelb.',
    hero_pvc_btn: 'PROFILE PVC',
    hero_al_label: 'Profile Aluminiu Alumil',
    hero_al_tag: 'Arhitectură Modernă',
    hero_al_title: 'Tâmplărie Aluminiu Alumil',
    hero_al_desc: 'Suprafețe vitrate mari și durabilitate extremă pentru arhitectura contemporană. Alumil Supreme · Smartia · SF85 · sisteme liftant-glisante · pereți cortină · nZEB certificat.',
    hero_al_btn: 'PROFILE ALUMINIU',
    sec_label_intro: 'Excelență în Tâmplărie Termoizolantă',
    intro_h2: 'Tâmplărie PVC Salamander\nși Aluminiu Alumil',
    intro_p1: 'Neofort BIZ SRL este furnizor specializat de tâmplărie PVC Salamander și tâmplărie aluminiu Alumil în București, cu 21 de ani de experiență și livrare în toată Uniunea Europeană. Profilele BluEvolution 92 (6 camere, Uw = 0,70 W/m²K) și GreenEvolution 76 (5 camere, Uw = 0,73 W/m²K) sunt certificate nZEB, asigurând 40–60% economie la încălzire față de tâmplăria standard. Fiecare instalare include precadre Blaugelb Triotherm+, bandă butilică, benzi etanșare vapori și baghete Warm Edge — sistem complet conform EN 14351.',
    intro_p1_bold: ['tâmplărie PVC Salamander','tâmplărie aluminiu Alumil','nZEB (Nearly Zero Energy Building)','precadre Blaugelb Triotherm+','bandă butilică etanșare','benzi etanșare vapori','baghete warm-edge'],
    intro_p2_pre: 'Fie că optați pentru robustețea sistemelor de',
    intro_p2_b1: 'aluminiu Alumil cu barieră termică',
    intro_p2_mid: 'sau pentru izolarea fonică superioară a',
    intro_p2_b2: 'ferestrelor PVC Salamander',
    intro_p2_link1: 'montaj profesional',
    intro_p2_b3: 'geam termoizolator 2 foi',
    intro_p2_and: 'și',
    intro_p2_b4: 'geam termoizolator 3 foi',
    intro_p2_link2: 'profile de renovare, pervazuri, jaluzele Raffstore și rulouri exterioare aluminiu',
    intro_p2_end: '— tot ce aveți nevoie pentru o locuință modernă, eficientă energetic și conformă cu cele mai exigente standarde de confort termic și fonic.',
    stats: [['21+','Ani activitate neîntreruptă'],['nZEB','Certificate conformitate'],['50%+','Clienți recurenți'],['4.9★','50 Recenzii Google']],
    sec_products: 'Produse & Servicii',
    products: [
      { href:'/tamplarie-pvc', topColor:'#4a7c59', tag:'Tâmplărie PVC Salamander', title:'Profile PVC Salamander', desc:'Furnizăm tâmplărie PVC Salamander BluEvolution 92 și GreenEvolution 76 din gamele premium, executată pe linii automatizate și compatibilă nZEB.', btn:'card-btn card-btn-pvc' },
      { href:'/tamplarie-aluminiu', topColor:'#2d5a8e', tag:'Tâmplărie Aluminiu Alumil', title:'Sisteme Aluminiu Alumil', desc:'Furnizăm aluminiu Alumil Supreme și Smartia — sisteme cu barieră termică pentru ferestre, uși, liftant glisante, culisante și pereți cortină, certificate nZEB.', btn:'card-btn card-btn-aluminiu' },
      { href:'/sisteme-nzeb', topColor:'#2e86c1', tag:'Sisteme nZEB', title:'Soluții Nearly Zero Energy', desc:'Precadre Blaugelb Triotherm+, benzi etanșare, baghete Warm Edge, geam tripan Low-E, soluții complete pentru certificarea nZEB și casa pasivă.', btn:'card-btn card-btn-aluminiu' },
    ],
    sec_label_steps: 'Cum lucrăm',
    steps_h2: 'Etapele colaborării',
    steps_sub: 'Claritate în 3 pași. Specialiștii noștri vă însoțesc în fiecare etapă.',
    steps: [
      { n:'01', title:'Elaborare ofertă', desc:'Transmiteți cererea prin formularul de contact, e-mail sau telefon & WhatsApp. Răspundem în maxim 2 zile lucrătoare.' },
      { n:'02', title:'Consultare & Măsurătoare', desc:'Stabilim configurația, tipul de profil, culoare, geam și accesorii. Programăm măsurătorile și elaborăm oferta finală.' },
      { n:'03', title:'Transport & Montaj', desc:'Fabricare 2–4 săptămâni, transport asigurat în toată UE, montaj profesional cu izolare perimetrală și certificat de garanție.' },
    ],
    sec_label_why: 'De ce Neofort BIZ',
    why_h2: 'Calitate și angajamente\nfără compromisuri',
    why_cards: [
      { title:'Prețuri accesibile', desc:'Lucrăm permanent la raportul calitate–preț–utilitate și venim cu oferte câștigătoare.' },
      { title:'Soluții inovatoare', desc:'Profile Salamander, sisteme Alumil, soluții nZEB și izolare hidro, termică și fonică avansată.' },
      { title:'Calitate garantată', desc:'Peste 50% din comenzi vin din recomandări sau de la clienți care revin constant.' },
      { title:'21 ani experiență', desc:'De peste două decenii activi în piața tâmplăriei PVC Salamander și aluminiu Alumil.' },
    ],
    sec_label_faq: 'Întrebări frecvente',
    faq_h2: 'Tot ce trebuie să știți despre tâmplăria noastră',
    faqs: [
      { q:'Ce tipuri de tâmplărie PVC Salamander furnizați?', a:'Furnizăm tâmplărie PVC Salamander din gamele BluEvolution 92 (6 camere, Uw 0.70 W/m²K, certificat nZEB) și GreenEvolution 76. Disponibile în variante placat aluminiu, flex și round, cu geam termoizolator 2 sau 3 foi Saint-Gobain warm-edge.' },
      { q:'Furnizați și tâmplărie din aluminiu Alumil?', a:'Da, furnizăm sisteme complete de tâmplărie aluminiu Alumil: S77 Supreme, S67 Smartia, S700/S350 liftant glisant, SF85 M19800 faltant și pereți cortină. Toate cu barieră termică avansată, certificate nZEB.' },
      { q:'Livrați și montați tâmplărie în afara României?', a:'Da, Neofort BIZ livrează și montează în toată Europa — Germania, Austria, Italia, Franța, Spania, Belgia și alte țări UE. Disponibil și export coletare din depozit.' },
      { q:'Ce sunt precadrele Blaugelb Triotherm+ și de ce sunt importante?', a:'Precadrele Blaugelb Triotherm+ sunt sisteme de montaj care elimină punțile termice dintre tâmplărie și perete. Utilizarea lor este obligatorie pentru certificarea nZEB și asigură o izolație termică și fonică superioară față de montajul clasic.' },
      { q:'Care este programul de lucru Neofort BIZ?', a:'Programul de lucru este Luni–Vineri 10:00–18:00. Sâmbătă și Duminică suntem închiși. Ne puteți contacta și pe WhatsApp la +40 752 443 435.' },
    ],
    seo_bridge: 'Solicitați o ofertă de preț pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil — București & Europa',
    seo_link: 'ofertă de preț',
  },

  en: {
    title: 'PVC & Aluminium Windows nZEB | Neofort BIZ Bucharest',
    desc: 'PVC Salamander & Alumil window supplier in Bucharest. nZEB glazing, professional installation, EU delivery. 21 years experience.',
    h1: 'PVC Salamander & Aluminium Alumil Windows — Neofort BIZ Bucharest',
    hero_pvc_label: 'Salamander PVC Profiles',
    hero_pvc_tag: 'German Technology',
    hero_pvc_title: 'PVC Salamander Windows',
    hero_pvc_desc: 'nZEB energy efficiency and timeless German design for premium residential projects. BluEvolution 92 aluminium-clad (6 chambers) · GreenEvolution 76 (5 chambers) · Blaugelb installation.',
    hero_pvc_btn: 'PVC PROFILES',
    hero_al_label: 'Alumil Aluminium Profiles',
    hero_al_tag: 'Modern Architecture',
    hero_al_title: 'Aluminium Alumil Windows',
    hero_al_desc: 'Large glazed surfaces and extreme durability for contemporary architecture. Alumil Supreme · Smartia · SF85 · lift-and-slide systems · curtain walls · nZEB certified.',
    hero_al_btn: 'ALUMINIUM PROFILES',
    sec_label_intro: 'Excellence in Thermal Insulation Windows',
    intro_h2: 'PVC Salamander Windows\n& Aluminium Alumil',
    intro_p1: 'Neofort BIZ SRL is a specialised supplier of Salamander PVC windows and Alumil aluminium systems in Bucharest, Romania, with 21 years of experience and EU-wide delivery. BluEvolution 92 (6 chambers, Uw = 0.70 W/m²K) and GreenEvolution 76 (5 chambers, Uw = 0.73 W/m²K) profiles are nZEB certified, delivering 40–60% energy savings versus standard windows. Every installation includes Blaugelb Triotherm+ precasings, butyl tape, vapour barriers and Warm Edge spacers — a complete thermal system compliant with EN 14351.',
    intro_p2_pre: 'Whether you opt for the robustness of',
    intro_p2_b1: 'Alumil aluminium with thermal barrier',
    intro_p2_mid: 'or the superior acoustic insulation of',
    intro_p2_b2: 'Salamander PVC windows',
    intro_p2_link1: 'professional installation',
    intro_p2_b3: 'double-pane thermal glass',
    intro_p2_and: 'and',
    intro_p2_b4: 'triple-pane thermal glass',
    intro_p2_link2: 'renovation profiles, windowsills, Raffstore blinds and aluminium external shutters',
    intro_p2_end: '— everything you need for a modern, energy-efficient home that meets the most demanding standards of thermal and acoustic comfort.',
    stats: [['21+','Years of activity'],['nZEB','Compliance certificates'],['50%+','Returning clients'],['4.9★','50 Google Reviews']],
    sec_products: 'Products & Services',
    products: [
      { href:'/tamplarie-pvc', topColor:'#4a7c59', tag:'PVC Salamander Windows', title:'Salamander PVC Profiles', desc:'We supply PVC Salamander BluEvolution 92 and GreenEvolution 76 windows from premium ranges, manufactured on automated lines and nZEB compatible.', btn:'card-btn card-btn-pvc' },
      { href:'/tamplarie-aluminiu', topColor:'#2d5a8e', tag:'Aluminium Alumil Windows', title:'Alumil Aluminium Systems', desc:'We supply Alumil Supreme and Smartia aluminium — thermal barrier systems for windows, doors, lift-and-slide, sliding and curtain walls, nZEB certified.', btn:'card-btn card-btn-aluminiu' },
      { href:'/sisteme-nzeb', topColor:'#2e86c1', tag:'nZEB Systems', title:'Nearly Zero Energy Solutions', desc:'Blaugelb Triotherm+ precasings, sealing tapes, Warm Edge spacers, triple Low-E glass, complete solutions for nZEB certification and passive house.', btn:'card-btn card-btn-aluminiu' },
    ],
    sec_label_steps: 'How we work',
    steps_h2: 'Steps of our collaboration',
    steps_sub: 'Clarity in 3 steps. Our specialists accompany you at every stage.',
    steps: [
      { n:'01', title:'Quote preparation', desc:'Send your request via the contact form, email or phone & WhatsApp. We respond within 2 business days.' },
      { n:'02', title:'Consultation & Measurement', desc:'We define configuration, profile type, colour, glass and accessories. We schedule measurements and finalise the offer.' },
      { n:'03', title:'Transport & Installation', desc:'Manufacturing 2–4 weeks, transport guaranteed throughout the EU, professional installation with perimeter insulation and warranty certificate.' },
    ],
    sec_label_why: 'Why Neofort BIZ',
    why_h2: 'Quality and commitment\nwithout compromise',
    why_cards: [
      { title:'Competitive prices', desc:'We continuously work on the quality–price–utility ratio and consistently deliver winning offers.' },
      { title:'Innovative solutions', desc:'Salamander profiles, Alumil systems, nZEB solutions and advanced hydro, thermal and acoustic insulation.' },
      { title:'Guaranteed quality', desc:'Over 50% of orders come from referrals or clients who return consistently.' },
      { title:'21 years experience', desc:'For over two decades active in the PVC Salamander and Alumil aluminium window market.' },
    ],
    sec_label_faq: 'Frequently Asked Questions',
    faq_h2: 'Everything you need to know about our windows',
    faqs: [
      { q:'What types of PVC Salamander windows do you supply?', a:'We supply PVC Salamander windows from the BluEvolution 92 (6 chambers, Uw 0.70 W/m²K, nZEB certified) and GreenEvolution 76 ranges. Available in aluminium-clad, flex and round versions, with 2 or 3-pane Saint-Gobain warm-edge thermal glass.' },
      { q:'Do you also supply Alumil aluminium windows?', a:'Yes, we supply complete Alumil aluminium window systems: S77 Supreme, S67 Smartia, S700/S350 lift-and-slide, SF85 M19800 folding and curtain walls. All with advanced thermal barrier, nZEB certified.' },
      { q:'Do you deliver and install windows outside Romania?', a:'Yes, Neofort BIZ delivers and installs throughout Europe — Germany, Austria, Italy, France, Spain, Belgium and other EU countries. Export warehouse collection also available.' },
      { q:'What are Blaugelb Triotherm+ precasings and why are they important?', a:'Blaugelb Triotherm+ precasings are installation systems that eliminate thermal bridges between the window and the wall. Their use is mandatory for nZEB certification and ensures superior thermal and acoustic insulation compared to conventional installation.' },
      { q:'What are the opening hours of Neofort BIZ?', a:'Opening hours are Monday–Friday 10:00–18:00. Saturday and Sunday we are closed. You can also contact us on WhatsApp at +40 752 443 435.' },
    ],
    seo_bridge: 'Request a price quote for PVC Salamander or Aluminium Alumil Windows — Bucharest & Europe',
    seo_link: 'price quote',
  },

  de: {
    title: 'PVC & Aluminiumfenster nZEB | Neofort BIZ Bukarest',
    desc: 'Lieferant für PVC Salamander und Alumil Aluminiumfenster in Bukarest. nZEB-Verglasung, professioneller Einbau, Lieferung europaweit. 21 Jahre Erfahrung.',
    h1: 'Kunststoff- & Aluminiumfenster Alumil — Neofort BIZ Bukarest',
    hero_pvc_label: 'Salamander Kunststoffprofile',
    hero_pvc_tag: 'Deutsche Technologie',
    hero_pvc_title: 'Kunststofffenster Salamander',
    hero_pvc_desc: 'nZEB-Energieeffizienz und zeitloses deutsches Design für Premium-Wohnprojekte. BluEvolution 92 Aluminiumverkleidet (6 Kammern) · GreenEvolution 76 (5 Kammern) · Blaugelb-Montage.',
    hero_pvc_btn: 'PVC-PROFILE',
    hero_al_label: 'Alumil Aluminiumprofile',
    hero_al_tag: 'Moderne Architektur',
    hero_al_title: 'Aluminiumfenster Alumil',
    hero_al_desc: 'Große Glasflächen und extreme Langlebigkeit für zeitgenössische Architektur. Alumil Supreme · Smartia · SF85 · Hebeschiebe-Systeme · Vorhangfassaden · nZEB-zertifiziert.',
    hero_al_btn: 'ALUMINIUMPROFILE',
    sec_label_intro: 'Exzellenz in Wärmeschutzfenstern',
    intro_h2: 'Kunststofffenster Salamander\n& Aluminiumfenster Alumil',
    intro_p1: 'Neofort BIZ SRL ist ein spezialisierter Lieferant von Salamander PVC-Fenstern und Alumil Aluminiumsystemen in Bukarest, Rumänien, mit 21 Jahren Erfahrung und EU-weiter Lieferung. BluEvolution 92 (6 Kammern, Uw = 0,70 W/m²K) und GreenEvolution 76 (5 Kammern, Uw = 0,73 W/m²K) sind nZEB-zertifiziert und sparen 40–60% Heizkosten gegenüber Standardfenstern. Jede Installation umfasst Blaugelb Triotherm+ Vorfenster, Butyl-Dichtband, Dampfsperrbänder und Warm Edge Abstandhalter — vollständiges System nach EN 14351.',
    intro_p2_pre: 'Ob Sie sich für die Robustheit von',
    intro_p2_b1: 'Alumil Aluminium mit Wärmedämmung',
    intro_p2_mid: 'oder für die überlegene Schalldämmung von',
    intro_p2_b2: 'Salamander Kunststofffenstern',
    intro_p2_link1: 'professioneller Montage',
    intro_p2_b3: 'Zweischeiben-Isolierglas',
    intro_p2_and: 'und',
    intro_p2_b4: 'Dreischeiben-Isolierglas',
    intro_p2_link2: 'Renovierungsprofile, Fensterbänke, Raffstore Jalousien und Aluminiumrollläden',
    intro_p2_end: '— alles, was Sie für ein modernes, energieeffizientes Zuhause benötigen, das den anspruchsvollsten Wärme- und Schallschutzstandards entspricht.',
    stats: [['21+','Jahre Erfahrung'],['nZEB','Zertifizierte Konformität'],['50%+','Stammkunden'],['4.9★','50 Google-Bewertungen']],
    sec_products: 'Produkte & Dienstleistungen',
    products: [
      { href:'/tamplarie-pvc', topColor:'#4a7c59', tag:'Kunststofffenster Salamander', title:'Salamander PVC-Profile', desc:'Wir liefern PVC Salamander BluEvolution 92 und GreenEvolution 76 Fenster aus den Premiumsortimenten, auf automatisierten Linien gefertigt und nZEB-kompatibel.', btn:'card-btn card-btn-pvc' },
      { href:'/tamplarie-aluminiu', topColor:'#2d5a8e', tag:'Aluminiumfenster Alumil', title:'Alumil Aluminiumsysteme', desc:'Wir liefern Alumil Supreme und Smartia Aluminium — Wärmedämmsysteme für Fenster, Türen, Hebeschiebe, Schiebeanlagen und Vorhangfassaden, nZEB-zertifiziert.', btn:'card-btn card-btn-aluminiu' },
      { href:'/sisteme-nzeb', topColor:'#2e86c1', tag:'nZEB-Systeme', title:'Niedrigstenergielösungen', desc:'Blaugelb Triotherm+ Vorfenster, Dichtbänder, Warm Edge Abstandhalter, Dreifach-Low-E-Glas, Komplettlösungen für nZEB-Zertifizierung und Passivhaus.', btn:'card-btn card-btn-aluminiu' },
    ],
    sec_label_steps: 'Unsere Arbeitsweise',
    steps_h2: 'Ablauf der Zusammenarbeit',
    steps_sub: 'Klarheit in 3 Schritten. Unsere Spezialisten begleiten Sie in jeder Phase.',
    steps: [
      { n:'01', title:'Angebotserstellung', desc:'Senden Sie Ihre Anfrage über das Kontaktformular, E-Mail oder Telefon & WhatsApp. Wir antworten innerhalb von 2 Werktagen.' },
      { n:'02', title:'Beratung & Aufmaß', desc:'Wir legen Konfiguration, Profiltyp, Farbe, Verglasung und Zubehör fest. Wir planen das Aufmaß und erstellen das Endangebot.' },
      { n:'03', title:'Transport & Montage', desc:'Fertigung 2–4 Wochen, Transport in der gesamten EU gewährleistet, professionelle Montage mit Perimeterdämmung und Garantiezertifikat.' },
    ],
    sec_label_why: 'Warum Neofort BIZ',
    why_h2: 'Qualität und Verlässlichkeit\nohne Kompromisse',
    why_cards: [
      { title:'Günstige Preise', desc:'Wir arbeiten kontinuierlich am Qualitäts-Preis-Nutzungs-Verhältnis und bieten stets attraktive Angebote.' },
      { title:'Innovative Lösungen', desc:'Salamander-Profile, Alumil-Systeme, nZEB-Lösungen und fortschrittliche Hydro-, Wärme- und Schalldämmung.' },
      { title:'Garantierte Qualität', desc:'Über 50% der Bestellungen kommen von Empfehlungen oder Stammkunden.' },
      { title:'21 Jahre Erfahrung', desc:'Seit über zwei Jahrzehnten aktiv auf dem Markt für Salamander-Kunststoff- und Alumil-Aluminiumfenster.' },
    ],
    sec_label_faq: 'Häufig gestellte Fragen',
    faq_h2: 'Alles, was Sie über unsere Fenster wissen müssen',
    faqs: [
      { q:'Welche PVC Salamander Fenster liefern Sie?', a:'Wir liefern PVC Salamander Fenster aus den Sortimenten BluEvolution 92 (6 Kammern, Uw 0,70 W/m²K, nZEB-zertifiziert) und GreenEvolution 76. Erhältlich in aluminiumverkleideter, Flex- und Round-Ausführung, mit 2- oder 3-Scheiben Saint-Gobain Warm-Edge Isolierglas.' },
      { q:'Liefern Sie auch Alumil Aluminiumfenster?', a:'Ja, wir liefern komplette Alumil Aluminiumfenstersysteme: S77 Supreme, S67 Smartia, S700/S350 Hebeschiebe, SF85 M19800 Faltsystem und Vorhangfassaden. Alle mit fortschrittlicher Wärmedämmung, nZEB-zertifiziert.' },
      { q:'Liefern und montieren Sie Fenster auch außerhalb Rumäniens?', a:'Ja, Neofort BIZ liefert und montiert in ganz Europa — Deutschland, Österreich, Italien, Frankreich, Spanien, Belgien und anderen EU-Ländern. Auch Export-Abholung aus dem Lager verfügbar.' },
      { q:'Was sind Blaugelb Triotherm+ Vorfenster und warum sind sie wichtig?', a:'Blaugelb Triotherm+ Vorfenster sind Montagesysteme, die Wärmebrücken zwischen Fenster und Wand eliminieren. Ihre Verwendung ist für die nZEB-Zertifizierung obligatorisch und gewährleistet eine überlegene Wärme- und Schalldämmung gegenüber der konventionellen Montage.' },
      { q:'Was sind die Öffnungszeiten von Neofort BIZ?', a:'Öffnungszeiten: Montag–Freitag 10:00–18:00 Uhr. Samstag und Sonntag geschlossen. Sie erreichen uns auch per WhatsApp unter +40 752 443 435.' },
    ],
    seo_bridge: 'Fordern Sie ein Preisangebot für Salamander Kunststoff- oder Alumil Aluminiumfenster an — Bukarest & Europa',
    seo_link: 'Preisangebot',
  },

  fr: {
    title: 'Menuiserie PVC & Aluminium nZEB | Neofort BIZ Bucarest',
    desc: 'Fournisseur menuiserie PVC Salamander et aluminium Alumil à Bucarest. Vitrage isolant nZEB, pose professionnelle, livraison en Europe. 21 ans d\'expérience.',
    h1: 'Menuiseries PVC Salamander & Aluminium Alumil — Neofort BIZ Bucarest',
    hero_pvc_label: 'Profilés PVC Salamander',
    hero_pvc_tag: 'Technologie Allemande',
    hero_pvc_title: 'Menuiserie PVC Salamander',
    hero_pvc_desc: 'Efficacité nZEB et design allemand intemporel pour projets résidentiels premium. BluEvolution 92 bardé aluminium (6 chambres) · GreenEvolution 76 (5 chambres) · pose Blaugelb.',
    hero_pvc_btn: 'PROFILÉS PVC',
    hero_al_label: 'Profilés Aluminium Alumil',
    hero_al_tag: 'Architecture Moderne',
    hero_al_title: 'Menuiserie Aluminium Alumil',
    hero_al_desc: 'Grandes surfaces vitrées et durabilité extrême pour l\'architecture contemporaine. Alumil Supreme · Smartia S67 · SF85 Supreme · levant-coulissant · murs-rideaux aluminium · certifiés nZEB.',
    hero_al_btn: 'PROFILÉS ALUMINIUM',
    sec_label_intro: 'Excellence en menuiserie thermique isolante',
    intro_h2: 'Menuiserie PVC Salamander\n& Aluminium Alumil',
    intro_p1: 'Neofort BIZ SRL est un fournisseur spécialisé de menuiseries PVC Salamander et aluminium Alumil à Bucarest, Roumanie, avec 21 ans d\'expérience et livraison dans toute l\'Union Européenne. Les profils BluEvolution 92 (6 chambres, Uw = 0,70 W/m²K) et GreenEvolution 76 (5 chambres, Uw = 0,73 W/m²K) sont certifiés nZEB, économisant 40–60% sur le chauffage par rapport aux menuiseries standard. Chaque installation inclut précadres Blaugelb Triotherm+, bande butyle, bandes pare-vapeur et Warm Edge — système complet conforme EN 14351.',
    intro_p2_pre: 'Que vous optiez pour la robustesse des systèmes en',
    intro_p2_b1: 'aluminium Alumil avec rupture thermique',
    intro_p2_mid: 'ou pour l\'isolation acoustique supérieure des',
    intro_p2_b2: 'menuiseries PVC Salamander',
    intro_p2_link1: 'pose professionnelle',
    intro_p2_b3: 'vitrage isolant double vitrage',
    intro_p2_and: 'et',
    intro_p2_b4: 'vitrage isolant triple vitrage',
    intro_p2_link2: 'profils de rénovation, appuis de fenêtre, stores Raffstore et volets roulants aluminium',
    intro_p2_end: '— tout ce dont vous avez besoin pour un logement moderne, efficace sur le plan énergétique et conforme aux normes de confort thermique et acoustique les plus exigeantes.',
    stats: [['21+','Ans d\'activité'],['nZEB','Certifiés conformes'],['50%+','Clients fidèles'],['4.9★','50 Avis Google']],
    sec_products: 'Produits & Services',
    products: [
      { href:'/tamplarie-pvc', topColor:'#4a7c59', tag:'Menuiserie PVC Salamander', title:'Profilés PVC Salamander', desc:'Nous fournissons des menuiseries PVC Salamander BluEvolution 92 et GreenEvolution 76 des gammes premium, fabriquées sur lignes automatisées et compatibles nZEB.', btn:'card-btn card-btn-pvc' },
      { href:'/tamplarie-aluminiu', topColor:'#2d5a8e', tag:'Menuiserie Aluminium Alumil', title:'Systèmes Aluminium Alumil', desc:'Nous fournissons aluminium Alumil Supreme et Smartia — systèmes à rupture thermique pour fenêtres, portes, levant-coulissant, coulissants et façades rideau, certifiés nZEB.', btn:'card-btn card-btn-aluminiu' },
      { href:'/sisteme-nzeb', topColor:'#2e86c1', tag:'Systèmes nZEB', title:'Solutions Énergie Quasi Nulle', desc:'Précadres Blaugelb Triotherm+, rubans d\'étanchéité, espaceurs Warm Edge, triple vitrage Low-E, solutions complètes pour certification nZEB et maison passive.', btn:'card-btn card-btn-aluminiu' },
    ],
    sec_label_steps: 'Notre méthode de travail',
    steps_h2: 'Étapes de notre collaboration',
    steps_sub: 'Clarté en 3 étapes. Nos spécialistes vous accompagnent à chaque étape.',
    steps: [
      { n:'01', title:'Établissement du devis', desc:'Envoyez votre demande via le formulaire de contact, e-mail ou téléphone & WhatsApp. Nous répondons sous 2 jours ouvrables.' },
      { n:'02', title:'Consultation & Métrage', desc:'Nous définissons la configuration, le type de profilé, la couleur, le vitrage et les accessoires. Nous planifions les métrés et finalisons le devis.' },
      { n:'03', title:'Transport & Pose', desc:'Fabrication 2–4 semaines, transport assuré dans toute l\'UE, pose professionnelle avec isolation périphérique et certificat de garantie.' },
    ],
    sec_label_why: 'Pourquoi Neofort BIZ',
    why_h2: 'Qualité et engagement\nsans compromis',
    why_cards: [
      { title:'Prix compétitifs', desc:'Nous travaillons en permanence sur le rapport qualité-prix-utilité et proposons des offres attractives.' },
      { title:'Solutions innovantes', desc:'Profilés Salamander, systèmes Alumil, solutions nZEB et isolation hydro, thermique et acoustique avancée.' },
      { title:'Qualité garantie', desc:'Plus de 50% des commandes proviennent de recommandations ou de clients fidèles.' },
      { title:'21 ans d\'expérience', desc:'Depuis plus de deux décennies actifs sur le marché des menuiseries PVC Salamander et aluminium Alumil.' },
    ],
    sec_label_faq: 'Questions fréquentes',
    faq_h2: 'Tout ce que vous devez savoir sur nos menuiseries',
    faqs: [
      { q:'Quels types de menuiseries PVC Salamander fournissez-vous ?', a:'Nous fournissons des menuiseries PVC Salamander des gammes BluEvolution 92 (6 chambres, Uw 0,70 W/m²K, certifié nZEB) et GreenEvolution 76. Disponibles en versions bardées aluminium, flex et round, avec vitrage isolant 2 ou 3 feuilles Saint-Gobain warm-edge.' },
      { q:'Fournissez-vous également des menuiseries aluminium Alumil ?', a:'Oui, nous fournissons des systèmes complets de menuiseries aluminium Alumil : S77 Supreme, S67 Smartia, S700/S350 levant-coulissant, SF85 M19800 pliant et façades rideau. Tous avec rupture thermique avancée, certifiés nZEB.' },
      { q:'Livrez-vous et posez-vous des menuiseries hors de Roumanie ?', a:'Oui, Neofort BIZ livre et pose dans toute l\'Europe — Allemagne, Autriche, Italie, France, Espagne, Belgique et autres pays UE. Export avec enlèvement en dépôt également disponible.' },
      { q:'Que sont les précadres Blaugelb Triotherm+ et pourquoi sont-ils importants ?', a:'Les précadres Blaugelb Triotherm+ sont des systèmes de pose qui éliminent les ponts thermiques entre la menuiserie et le mur. Leur utilisation est obligatoire pour la certification nZEB et garantit une isolation thermique et acoustique supérieure à la pose classique.' },
      { q:'Quels sont les horaires d\'ouverture de Neofort BIZ ?', a:'Horaires : Lundi–Vendredi 10h00–18h00. Samedi et Dimanche fermé. Vous pouvez également nous contacter sur WhatsApp au +40 752 443 435.' },
    ],
    seo_bridge: 'Demandez un devis pour menuiserie PVC Salamander ou Aluminium Alumil — Bucarest & Europe',
    seo_link: 'devis',
  },

  es: {
    title: 'Carpintería PVC & Aluminio nZEB | Neofort BIZ Bucarest',
    desc: 'Proveedor PVC Salamander y aluminio Alumil en Bucarest. Vidrio nZEB, instalación profesional, entrega en Europa. 21 años de experiencia.',
    h1: 'Carpintería PVC Salamander & Aluminio Alumil — Neofort BIZ Bucarest',
    hero_pvc_label: 'Perfiles PVC Salamander',
    hero_pvc_tag: 'Tecnología Alemana',
    hero_pvc_title: 'Carpintería PVC Salamander',
    hero_pvc_desc: 'Eficiencia nZEB y diseño alemán atemporal para proyectos residenciales premium. BluEvolution 92 revestido aluminio (6 cámaras) · GreenEvolution 76 (5 cámaras) · instalación Blaugelb.',
    hero_pvc_btn: 'PERFILES PVC',
    hero_al_label: 'Perfiles Aluminio Alumil',
    hero_al_tag: 'Arquitectura Moderna',
    hero_al_title: 'Carpintería Aluminio Alumil',
    hero_al_desc: 'Grandes superficies acristaladas y durabilidad extrema para arquitectura contemporánea. Alumil Supreme · Smartia · SF85 · sistemas elevadores · muros cortina · certificados nZEB.',
    hero_al_btn: 'PERFILES ALUMINIO',
    sec_label_intro: 'Excelencia en carpintería de aislamiento térmico',
    intro_h2: 'Carpintería PVC Salamander\n& Aluminio Alumil',
    intro_p1: 'Neofort BIZ SRL es un proveedor especializado de carpintería PVC Salamander y aluminio Alumil en Bucarest, Rumanía, con 21 años de experiencia y entrega en toda la Unión Europea. Los perfiles BluEvolution 92 (6 cámaras, Uw = 0,70 W/m²K) y GreenEvolution 76 (5 cámaras, Uw = 0,73 W/m²K) están certificados nZEB, ahorrando 40–60% en calefacción frente a la carpintería estándar. Cada instalación incluye premarcos Blaugelb Triotherm+, cinta butilo, barreras de vapor y Warm Edge — sistema completo conforme EN 14351.',
    intro_p2_pre: 'Ya sea que opte por la robustez de los sistemas de',
    intro_p2_b1: 'aluminio Alumil con rotura de puente térmico',
    intro_p2_mid: 'o por el aislamiento acústico superior de la',
    intro_p2_b2: 'carpintería PVC Salamander',
    intro_p2_link1: 'instalación profesional',
    intro_p2_b3: 'vidrio aislante doble hoja',
    intro_p2_and: 'y',
    intro_p2_b4: 'vidrio aislante triple hoja',
    intro_p2_link2: 'marcos de renovación, alféizares, persianas Raffstore y cierres enrollables de aluminio',
    intro_p2_end: '— todo lo que necesita para una vivienda moderna, eficiente energéticamente y conforme a los estándares más exigentes de confort térmico y acústico.',
    stats: [['21+','Años de actividad'],['nZEB','Certificados conformes'],['50%+','Clientes recurrentes'],['4.9★','50 Reseñas Google']],
    sec_products: 'Productos & Servicios',
    products: [
      { href:'/tamplarie-pvc', topColor:'#4a7c59', tag:'Carpintería PVC Salamander', title:'Perfiles PVC Salamander', desc:'Suministramos carpintería PVC Salamander BluEvolution 92 y GreenEvolution 76 de las gamas premium, fabricada en líneas automatizadas y compatible con nZEB.', btn:'card-btn card-btn-pvc' },
      { href:'/tamplarie-aluminiu', topColor:'#2d5a8e', tag:'Carpintería Aluminio Alumil', title:'Sistemas Aluminio Alumil', desc:'Suministramos aluminio Alumil Supreme y Smartia — sistemas con rotura de puente térmico para ventanas, puertas, elevable-corredera, correderas y fachadas cortina, certificados nZEB.', btn:'card-btn card-btn-aluminiu' },
      { href:'/sisteme-nzeb', topColor:'#2e86c1', tag:'Sistemas nZEB', title:'Soluciones Energía Casi Nula', desc:'Premarcos Blaugelb Triotherm+, cintas de sellado, espaciadores Warm Edge, triple vidrio Low-E, soluciones completas para certificación nZEB y casa pasiva.', btn:'card-btn card-btn-aluminiu' },
    ],
    sec_label_steps: 'Cómo trabajamos',
    steps_h2: 'Etapas de nuestra colaboración',
    steps_sub: 'Claridad en 3 pasos. Nuestros especialistas le acompañan en cada etapa.',
    steps: [
      { n:'01', title:'Elaboración del presupuesto', desc:'Envíe su solicitud a través del formulario de contacto, correo electrónico o teléfono & WhatsApp. Respondemos en un plazo de 2 días hábiles.' },
      { n:'02', title:'Consulta & Medición', desc:'Definimos la configuración, tipo de perfil, color, vidrio y accesorios. Programamos las mediciones y elaboramos el presupuesto final.' },
      { n:'03', title:'Transporte & Instalación', desc:'Fabricación 2–4 semanas, transporte garantizado en toda la UE, instalación profesional con aislamiento perimetral y certificado de garantía.' },
    ],
    sec_label_why: 'Por qué Neofort BIZ',
    why_h2: 'Calidad y compromiso\nsin concesiones',
    why_cards: [
      { title:'Precios competitivos', desc:'Trabajamos continuamente en la relación calidad-precio-utilidad y presentamos ofertas ganadoras.' },
      { title:'Soluciones innovadoras', desc:'Perfiles Salamander, sistemas Alumil, soluciones nZEB y aislamiento hidro, térmico y acústico avanzado.' },
      { title:'Calidad garantizada', desc:'Más del 50% de los pedidos provienen de recomendaciones o clientes que regresan constantemente.' },
      { title:'21 años de experiencia', desc:'Durante más de dos décadas activos en el mercado de carpintería PVC Salamander y aluminio Alumil.' },
    ],
    sec_label_faq: 'Preguntas frecuentes',
    faq_h2: 'Todo lo que necesita saber sobre nuestra carpintería',
    faqs: [
      { q:'¿Qué tipos de carpintería PVC Salamander suministran?', a:'Suministramos carpintería PVC Salamander de las gamas BluEvolution 92 (6 cámaras, Uw 0,70 W/m²K, certificado nZEB) y GreenEvolution 76. Disponibles en versiones con revestimiento de aluminio, flex y round, con vidrio aislante de 2 o 3 hojas Saint-Gobain warm-edge.' },
      { q:'¿Suministran también carpintería de aluminio Alumil?', a:'Sí, suministramos sistemas completos de carpintería de aluminio Alumil: S77 Supreme, S67 Smartia, S700/S350 elevable-corredera, SF85 M19800 plegable y fachadas cortina. Todos con rotura de puente térmico avanzada, certificados nZEB.' },
      { q:'¿Entregan e instalan carpintería fuera de Rumanía?', a:'Sí, Neofort BIZ entrega e instala en toda Europa — Alemania, Austria, Italia, Francia, España, Bélgica y otros países de la UE. También disponible exportación con recogida en almacén.' },
      { q:'¿Qué son los premarcos Blaugelb Triotherm+ y por qué son importantes?', a:'Los premarcos Blaugelb Triotherm+ son sistemas de instalación que eliminan los puentes térmicos entre la carpintería y el muro. Su uso es obligatorio para la certificación nZEB y garantiza un aislamiento térmico y acústico superior al de la instalación convencional.' },
      { q:'¿Cuál es el horario de atención de Neofort BIZ?', a:'Horario: Lunes–Viernes 10:00–18:00. Sábado y Domingo cerrado. También puede contactarnos por WhatsApp en el +40 752 443 435.' },
    ],
    seo_bridge: 'Solicite un presupuesto para carpintería PVC Salamander o Aluminio Alumil — Bucarest & Europa',
    seo_link: 'presupuesto',
  },

  it: {
    title: 'Infissi PVC & Alluminio nZEB | Neofort BIZ Bucarest',
    desc: 'Fornitore infissi PVC Salamander e alluminio Alumil a Bucarest. Vetro isolante nZEB, posa professionale, consegna in tutta Europa. 21 anni di esperienza.',
    h1: 'Infissi PVC Salamander & Alluminio Alumil — Neofort BIZ Bucarest',
    hero_pvc_label: 'Profili PVC Salamander',
    hero_pvc_tag: 'Tecnologia Tedesca',
    hero_pvc_title: 'Infissi in PVC Salamander',
    hero_pvc_desc: 'Efficienza nZEB e design tedesco senza tempo per progetti residenziali premium. BluEvolution 92 rivestito alluminio (6 camere) · GreenEvolution 76 (5 camere) · posa Blaugelb.',
    hero_pvc_btn: 'PROFILI PVC',
    hero_al_label: 'Profili Alluminio Alumil',
    hero_al_tag: 'Architettura Moderna',
    hero_al_title: 'Infissi in Alluminio Alumil',
    hero_al_desc: 'Grandi superfici vetrate ed estrema durabilità per l\'architettura contemporanea. Alumil Supreme · Smartia S67 · SF85 Supreme · sistemi liftant-scorrevoli · pareti cortina · certificati nZEB.',
    hero_al_btn: 'PROFILI ALLUMINIO',
    sec_label_intro: 'Eccellenza negli infissi termoisolanti',
    intro_h2: 'Infissi in PVC Salamander\n& Alluminio Alumil',
    intro_p1: 'Neofort BIZ SRL è un fornitore specializzato di infissi PVC Salamander e alluminio Alumil a Bucarest, Romania, con 21 anni di esperienza e consegna in tutta l\'Unione Europea. I profili BluEvolution 92 (6 camere, Uw = 0,70 W/m²K) e GreenEvolution 76 (5 camere, Uw = 0,73 W/m²K) sono certificati nZEB, garantendo 40–60% di risparmio energetico rispetto agli infissi standard. Ogni installazione include precontrotelaio Blaugelb Triotherm+, nastro butile, barriere al vapore e Warm Edge — sistema completo conforme EN 14351.',
    intro_p2_pre: 'Che scegliate la robustezza dei sistemi in',
    intro_p2_b1: 'alluminio Alumil con taglio termico',
    intro_p2_mid: 'o l\'isolamento acustico superiore degli',
    intro_p2_b2: 'infissi in PVC Salamander',
    intro_p2_link1: 'installazione professionale',
    intro_p2_b3: 'vetro isolante a doppia lastra',
    intro_p2_and: 'e',
    intro_p2_b4: 'vetro isolante a tripla lastra',
    intro_p2_link2: 'telai di ristrutturazione, davanzali, veneziane Raffstore e tapparelle esterne in alluminio',
    intro_p2_end: '— tutto ciò di cui avete bisogno per un\'abitazione moderna, efficiente dal punto di vista energetico e conforme ai più esigenti standard di comfort termico e acustico.',
    stats: [['21+','Anni di attività'],['nZEB','Certificati conformi'],['50%+','Clienti fedeli'],['4.9★','50 Recensioni Google']],
    sec_products: 'Prodotti & Servizi',
    products: [
      { href:'/tamplarie-pvc', topColor:'#4a7c59', tag:'Infissi in PVC Salamander', title:'Profili PVC Salamander', desc:'Forniamo infissi in PVC Salamander BluEvolution 92 e GreenEvolution 76 delle gamme premium, prodotti su linee automatizzate e compatibili nZEB.', btn:'card-btn card-btn-pvc' },
      { href:'/tamplarie-aluminiu', topColor:'#2d5a8e', tag:'Infissi in Alluminio Alumil', title:'Sistemi Alluminio Alumil', desc:'Forniamo alluminio Alumil Supreme e Smartia — sistemi con taglio termico per finestre, porte, alzante-scorrevole, sistemi scorrevoli e facciate continue, certificati nZEB.', btn:'card-btn card-btn-aluminiu' },
      { href:'/sisteme-nzeb', topColor:'#2e86c1', tag:'Sistemi nZEB', title:'Soluzioni Energia Quasi Zero', desc:'Precontrotelaio Blaugelb Triotherm+, nastri di tenuta, distanziatori Warm Edge, triplo vetro Low-E, soluzioni complete per certificazione nZEB e casa passiva.', btn:'card-btn card-btn-aluminiu' },
    ],
    sec_label_steps: 'Come lavoriamo',
    steps_h2: 'Fasi della nostra collaborazione',
    steps_sub: 'Chiarezza in 3 passi. I nostri specialisti vi accompagnano in ogni fase.',
    steps: [
      { n:'01', title:'Preparazione del preventivo', desc:'Inviate la vostra richiesta tramite il modulo di contatto, e-mail o telefono & WhatsApp. Rispondiamo entro 2 giorni lavorativi.' },
      { n:'02', title:'Consulenza & Rilievo', desc:'Definiamo la configurazione, il tipo di profilo, il colore, il vetro e gli accessori. Pianifichiamo i rilievi ed elaboriamo il preventivo finale.' },
      { n:'03', title:'Trasporto & Installazione', desc:'Produzione 2–4 settimane, trasporto garantito in tutta l\'UE, installazione professionale con isolamento perimetrale e certificato di garanzia.' },
    ],
    sec_label_why: 'Perché Neofort BIZ',
    why_h2: 'Qualità e impegno\nsenza compromessi',
    why_cards: [
      { title:'Prezzi competitivi', desc:'Lavoriamo costantemente sul rapporto qualità-prezzo-utilità e proponiamo sempre offerte vincenti.' },
      { title:'Soluzioni innovative', desc:'Profili Salamander, sistemi Alumil, soluzioni nZEB e isolamento idro, termico e acustico avanzato.' },
      { title:'Qualità garantita', desc:'Oltre il 50% degli ordini proviene da referenze o clienti che tornano costantemente.' },
      { title:'21 anni di esperienza', desc:'Da oltre due decenni attivi nel mercato degli infissi PVC Salamander e alluminio Alumil.' },
    ],
    sec_label_faq: 'Domande frequenti',
    faq_h2: 'Tutto quello che dovete sapere sui nostri infissi',
    faqs: [
      { q:'Che tipi di infissi in PVC Salamander fornite?', a:'Forniamo infissi in PVC Salamander delle gamme BluEvolution 92 (6 camere, Uw 0,70 W/m²K, certificato nZEB) e GreenEvolution 76. Disponibili nelle versioni con rivestimento in alluminio, flex e round, con vetro isolante a 2 o 3 lastre Saint-Gobain warm-edge.' },
      { q:'Fornite anche infissi in alluminio Alumil?', a:'Sì, forniamo sistemi completi di infissi in alluminio Alumil: S77 Supreme, S67 Smartia, S700/S350 alzante-scorrevole, SF85 M19800 pieghevole e facciate continue. Tutti con taglio termico avanzato, certificati nZEB.' },
      { q:'Consegnate e installate infissi al di fuori della Romania?', a:'Sì, Neofort BIZ consegna e installa in tutta Europa — Germania, Austria, Italia, Francia, Spagna, Belgio e altri paesi UE. Disponibile anche ritiro in magazzino per l\'export.' },
      { q:'Cosa sono le precontrotelaio Blaugelb Triotherm+ e perché sono importanti?', a:'Le precontrotelaio Blaugelb Triotherm+ sono sistemi di montaggio che eliminano i ponti termici tra l\'infisso e la parete. Il loro utilizzo è obbligatorio per la certificazione nZEB e garantisce un isolamento termico e acustico superiore rispetto alla posa convenzionale.' },
      { q:'Quali sono gli orari di apertura di Neofort BIZ?', a:'Orari: Lunedì–Venerdì 10:00–18:00. Sabato e Domenica chiuso. Potete contattarci anche su WhatsApp al +40 752 443 435.' },
    ],
    seo_bridge: 'Richiedete un preventivo per infissi PVC Salamander o Alluminio Alumil — Bucarest & Europa',
    seo_link: 'preventivo',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const c = CONTENT[locale] || CONTENT.ro;
  return {
    title: c.title,
    description: c.desc,
    keywords: locale === 'ro'
      ? 'tamplarie PVC Salamander, tamplarie aluminiu Alumil, geam termopan, ferestre PVC Bucuresti, ferestre aluminiu, geam termoizolator 3 foi, nZEB, BluEvolution 92, precadre Blaugelb Triotherm, jaluzele Raffstore, rulouri aluminiu, usi intrare premium, montaj tamplarie Bucuresti, Neofort BIZ'
      : undefined,
    authors: [{ name: 'Neofort BIZ', url: BASE }],
    creator: 'Neofort BIZ',
    publisher: 'Neofort BIZ',
    robots: { index:true, follow:true, googleBot:{ index:true, follow:true, 'max-image-preview':'large', 'max-snippet':-1, 'max-video-preview':-1 } },
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: { ro:`${BASE}/ro`, en:`${BASE}/en`, de:`${BASE}/de`, fr:`${BASE}/fr`, es:`${BASE}/es`, it:`${BASE}/it`, 'x-default':`${BASE}/ro` },
    },
    openGraph: {
      type:'website', locale: { ro:'ro_RO', en:'en_US', de:'de_DE', fr:'fr_FR', es:'es_ES', it:'it_IT' }[locale] || 'ro_RO',
      url:`${BASE}/${locale}`, siteName:'Neofort BIZ',
      title: c.title, description: c.desc,
      images:[{ url:`${BASE}/og/Fabrica_Neofort.avif`, width:1200, height:630, alt: locale==='ro' ? 'Tâmplărie PVC Salamander și aluminiu Alumil — Neofort BIZ furnizor' : locale==='en' ? 'PVC Salamander and aluminium Alumil windows — Neofort BIZ supplier' : locale==='de' ? 'Salamander PVC- und Alumil Aluminiumfenster — Neofort BIZ Händler' : locale==='fr' ? 'Menuiserie PVC Salamander et aluminium Alumil — Neofort BIZ fournisseur' : locale==='es' ? 'Carpintería PVC Salamander y aluminio Alumil — Neofort BIZ proveedor' : 'Infissi PVC Salamander e alluminio Alumil — Neofort BIZ fornitore', type:'image/avif' }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', creator:'@NeofortBIZ', title:c.title, description:c.desc, images:[`${BASE}/og/Fabrica_Neofort.avif`] },
  };
}

// ── SCHEMA ──────────────────────────────────────────────────────────────────
const buildSchema = (locale, c) => ({
  "@context":"https://schema.org","@graph":[
    { "@type":"WebSite","@id":`${BASE}/#website`,"url":BASE,"name":"Neofort BIZ","inLanguage":locale,"potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":`${BASE}/ro/blog?q={search_term_string}`},"query-input":"required name=search_term_string"} },
    { "@type":"Organization","@id":`${BASE}/#organization`,"name":"Neofort BIZ","alternateName":["NEOFORT PVC & ALUMINUM JOINERY","Neofort BIZ SRL"],"url":BASE,"logo":{"@type":"ImageObject","url":`${BASE}/Neofort.avif`,"width":512,"height":512},"foundingDate":"2003","email":"oferte@neofort-biz.ro","telephone":["+40215280661","+40752443435"],"sameAs":["https://www.facebook.com/neofortconstructii","https://www.linkedin.com/company/neofort-biz","https://x.com/NeofortBIZ","https://maps.app.goo.gl/dvbPRmMwAroCPfSC8"],"address":{"@type":"PostalAddress","streetAddress":"Str. Theodor Aman Pictor 11","addressLocality":"București","addressRegion":"Sector 1","postalCode":"010776","addressCountry":"RO"} },
    { "@type":["LocalBusiness","HomeAndConstructionBusiness","ConstructionBusiness","ProfessionalService"],"@id":`${BASE}/#localbusiness`,"name":"Neofort BIZ SRL","legalName":"NEOFORT BIZ SRL","alternateName":["Neofort BIZ","Neofort BIZ Tâmplărie PVC Aluminiu"],"slogan":"Tâmplărie PVC Salamander & Aluminiu Alumil — nZEB, București","vatID":"RO30324211","taxID":"RO30324211","leiCode":"J40/6928/2012","identifier":{"@type":"PropertyValue","name":"EUID","value":"ROONRC.J40/6928/2012"},"url":BASE,"telephone":["+40215280661","+40752443435","+40752443439"],"email":"oferte@neofort-biz.ro","priceRange":"$$","currenciesAccepted":"RON, EUR","paymentAccepted":"Cash, Bank Transfer, Card","address":{"@type":"PostalAddress","streetAddress":"Str. Theodor Aman Pictor 11","addressLocality":"București","addressRegion":"Sector 1","postalCode":"010776","addressCountry":"RO"},"geo":{"@type":"GeoCoordinates","latitude":44.4429398,"longitude":26.0859381},"hasMap":"https://maps.app.goo.gl/dvbPRmMwAroCPfSC8","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"50","bestRating":"5","worstRating":"1"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"10:00","closes":"18:00"}],"areaServed":[{"@type":"City","name":"București"},{"@type":"AdministrativeArea","name":"Ilfov"},{"@type":"AdministrativeArea","name":"Sector 1, București"},{"@type":"AdministrativeArea","name":"Sector 2, București"},{"@type":"AdministrativeArea","name":"Sector 3, București"},{"@type":"Country","name":"Romania"},{"@type":"Continent","name":"Europe"}],"knowsLanguage":["ro","en","de","fr","es","it"],"hasOfferCatalog":{"@type":"OfferCatalog","name":"Tâmplărie PVC Salamander & Aluminiu Alumil","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Profile PVC Salamander BluEvolution 92"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Sisteme Aluminiu Alumil S77 Supreme"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Geam Termoizolator Saint-Gobain SGG"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Rulouri Exterioare Aluminiu"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Jaluzele Venețiene Raffstore"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Zipscreen Terase"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Tâmplărie Aluminiu Alumil Supreme SF85"}}]},"description":"Neofort BIZ SRL este furnizor specializat exclusiv în tâmplărie PVC Salamander, tâmplărie aluminiu Alumil, sisteme de umbrire (rulouri exterioare, jaluzele raffstore, zipscreen) și sisteme nZEB pentru construcții rezidențiale și comerciale. Nu activăm în domeniul imobiliar sau al tranzacțiilor de proprietăți.","disambiguatingDescription":"Neofort BIZ (neofort-biz.ro) este distinct de entitatea Neofort din domeniul imobiliar. Neofort BIZ SRL activează exclusiv în producția și montajul de tâmplărie PVC, aluminiu și sisteme de umbrire.","knowsAbout":["Tâmplărie PVC Salamander","Profile PVC BluEvolution 92","Profile PVC GreenEvolution 76","Tâmplărie Aluminiu Alumil","Sisteme umbrire exterioare","Rulouri exterioare aluminiu","Jaluzele raffstore","Zipscreen","Sisteme nZEB","Geam termoizolator Saint-Gobain","Montaj tâmplărie București","nZEB Nearly Zero Energy Building","Passive House","Warm Edge distanțier termic","Ventilație higroreglabilă Aereco"],"isNotRelatedTo":"Servicii imobiliare, tranzacții proprietăți, Real Estate","parentOrganization":{"@id":`${BASE}/#organization`} },
    { "@type":"Service","@id":`${BASE}/#service-tamplarie`,"name":"Montaj Tâmplărie PVC și Aluminiu","serviceType":"Window and Door Installation","provider":{"@id":`${BASE}/#localbusiness`},"areaServed":{"@type":"City","name":"București"},"description":"Furnizare și montaj profesional de tâmplărie PVC Salamander (BluEvolution 92, GreenEvolution 76) și aluminiu Alumil (S77 Supreme, S67 Smartia, SF85), sisteme de umbrire exterioare și soluții nZEB. Activitate exclusiv în construcții și renovări. Nu activăm în imobiliare.","category":["Tâmplărie PVC","Tâmplărie Aluminiu","Sisteme Umbrire","nZEB","Construcții Rezidențiale"],"hasOfferCatalog":{"@type":"OfferCatalog","name":"Servicii Tâmplărie","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Montaj Profile PVC Salamander BluEvolution 92 — nZEB"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Montaj Profile PVC Salamander GreenEvolution 76"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Montaj Tâmplărie Aluminiu Alumil S77 Supreme"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Rulouri Exterioare Aluminiu Motoricizate"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Jaluzele Raffstore și Zipscreen"}}]} },
    { "@type":"WebPage","@id":`${BASE}/${locale}/#webpage`,"url":`${BASE}/${locale}`,"name":c.title,"isPartOf":{"@id":`${BASE}/#website`},"inLanguage":locale,"dateModified":new Date().toISOString().split('T')[0],"speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".speakable-intro",".speakable-stats",".speakable-faq",".speakable-about"]} },
    { "@type":"FAQPage","@id":`${BASE}/${locale}/#faq`,"mainEntity":c.faqs.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} })) },
    { "@type":"ItemList","@id":`${BASE}/${locale}/#products`,"name":c.sec_products,"numberOfItems":3,"itemListElement":c.products.map((p,i)=>({ "@type":"ListItem","position":i+1,"url":`${BASE}/${locale}/${p.href}`,"name":p.title })) },
  ]
});

// Slug-uri traduse — identice cu SLUGS din Header/Footer
export default async function HomePage({ params }) {
  const { locale } = await params;
  const c = CONTENT[locale] || CONTENT.ro;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(locale, c)) }}/>

      {/* H1 semantic */}
      <section className="speakable-about" style={{padding:'40px 0 48px', borderBottom:'1px solid #e8e8e8'}}>
        <div className="container">
          <h1 style={{position:'absolute',width:'1px',height:'1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap'}}>
            {c.h1}
          </h1>
          <div className="hero-grid">
            <Link href="/tamplarie-pvc" className="hero-card">
              <img
                src="/hero-pvc.avif"
                alt={locale==='ro' ? 'Tâmplărie PVC Salamander BluEvolution 92 — ferestre și uși PVC nZEB, Neofort BIZ București' : locale==='en' ? 'Salamander PVC windows BluEvolution 92 — nZEB certified PVC windows and doors, Neofort BIZ Bucharest' : locale==='de' ? 'Salamander Kunststofffenster BluEvolution 92 — nZEB zertifizierte PVC Fenster, Neofort BIZ Bukarest' : locale==='fr' ? 'Menuiserie PVC Salamander BluEvolution 92 — fenêtres et portes PVC nZEB, Neofort BIZ Bucarest' : locale==='es' ? 'Carpintería PVC Salamander BluEvolution 92 — ventanas y puertas PVC nZEB, Neofort BIZ Bucarest' : 'Infissi PVC Salamander BluEvolution 92 — finestre e porte PVC nZEB, Neofort BIZ Bucarest'}
                width="420"
                height="160"
                fetchpriority="high"
                decoding="async"
                style={{width:'100%',height:'160px',objectFit:'cover',display:'block'}}
              />
              <div style={{padding:'28px 36px 36px',display:'flex',flexDirection:'column',flex:1}}>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:300,fontSize:'0.6825rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#767676',marginBottom:'14px',display:'block'}}>{c.hero_pvc_tag}</span>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'0.6825rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#4a7c59',display:'block',marginBottom:'14px'}}>{c.hero_pvc_label}</span>
                <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'1.35rem',color:'#1a1a1a',lineHeight:1.2,marginBottom:'18px'}}>{c.hero_pvc_title}</h2>
                <p style={{fontSize:'0.8625rem',fontWeight:300,color:'#767676',lineHeight:1.75,marginBottom:'32px',textAlign:'justify'}}>{c.hero_pvc_desc}</p>
                <span className="btn btn-pvc" style={{display:'block',textAlign:'center'}}>{c.hero_pvc_btn}</span>
              </div>
            </Link>
            <Link href="/tamplarie-aluminiu" className="hero-card">
              <img
                src="/hero-aluminiu.avif"
                alt={locale==='ro' ? 'Tâmplărie aluminiu Alumil Supreme — sisteme aluminiu cu barieră termică nZEB, Neofort BIZ București' : locale==='en' ? 'Alumil Supreme aluminium windows — thermal break aluminium systems nZEB certified, Neofort BIZ Bucharest' : locale==='de' ? 'Alumil Supreme Aluminiumfenster — Aluminiumsysteme mit Wärmedämmbrücke nZEB, Neofort BIZ Bukarest' : locale==='fr' ? 'Menuiserie aluminium Alumil Supreme — systèmes aluminium à rupture de pont thermique nZEB, Neofort BIZ Bucarest' : locale==='es' ? 'Carpintería aluminio Alumil Supreme — sistemas aluminio con rotura de puente térmico nZEB, Neofort BIZ Bucarest' : 'Infissi alluminio Alumil Supreme — sistemi alluminio con taglio termico nZEB, Neofort BIZ Bucarest'}
                width="648"
                height="340"
                fetchpriority="low"
                loading="lazy"
                decoding="async"
                style={{width:'100%',height:'160px',objectFit:'cover',display:'block'}}
              />
              <div style={{padding:'28px 36px 36px',display:'flex',flexDirection:'column',flex:1}}>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:300,fontSize:'0.6825rem',letterSpacing:'.22em',textTransform:'uppercase',color:'#767676',marginBottom:'14px',display:'block'}}>{c.hero_al_tag}</span>
                <span style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'0.6825rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#2d5a8e',display:'block',marginBottom:'14px'}}>{c.hero_al_label}</span>
                <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'1.35rem',color:'#1a1a1a',lineHeight:1.2,marginBottom:'18px'}}>{c.hero_al_title}</h2>
                <p style={{fontSize:'0.8625rem',fontWeight:300,color:'#767676',lineHeight:1.75,marginBottom:'32px',textAlign:'justify'}}>{c.hero_al_desc}</p>
                <span className="btn btn-aluminiu" style={{display:'block',textAlign:'center'}}>{c.hero_al_btn}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{padding:'72px 0',borderBottom:'1px solid #e8e8e8',contentVisibility:'auto',containIntrinsicSize:'0 600px'}}>
        <div className="container">
          <div className="intro-grid-title">
            <div>
              <span className="sec-label">{c.sec_label_intro}</span>
              <h2 className="home-h2-intro" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.2625rem, 4vw, 1.9625rem)',color:'#1a1a1a',lineHeight:1.2,marginBottom:'0',letterSpacing:'.01em'}}>
                {c.intro_h2.split('\n')[0]}<br/>{c.intro_h2.split('\n')[1]}
              </h2>
            </div>
            <div/>
          </div>
          <div className="intro-grid-texts speakable-intro">
            <p style={{fontSize:'0.8825rem',fontWeight:300,color:'#767676',lineHeight:1.75,textAlign:'justify'}}>{c.intro_p1}</p>
            <p style={{fontSize:'0.8825rem',fontWeight:300,color:'#767676',lineHeight:1.75,textAlign:'justify'}}>
              {c.intro_p2_pre}{' '}
              <strong style={{color:'#1a1a1a',fontWeight:500}}>{c.intro_p2_b1}</strong>{' '}
              {c.intro_p2_mid}{' '}
              <strong style={{color:'#1a1a1a',fontWeight:500}}>{c.intro_p2_b2}</strong>,{' '}
              {locale === 'ro' ? 'echipa noastră oferă consultanță tehnică dedicată și ' : locale === 'en' ? 'our team offers dedicated technical consultancy and ' : locale === 'de' ? 'unser Team bietet fachkundige Beratung und ' : locale === 'fr' ? 'notre équipe offre une expertise technique et ' : locale === 'es' ? 'nuestro equipo ofrece asesoramiento técnico y ' : 'il nostro team offre consulenza tecnica dedicata e '}
              <Link href="/servicii" style={{color:'#1a1a1a',fontWeight:500,textDecoration:'underline',textUnderlineOffset:'3px'}}>{c.intro_p2_link1}</Link>.{' '}
              {locale === 'ro' ? 'Gama noastră include ' : locale === 'en' ? 'Our range includes ' : locale === 'de' ? 'Unser Sortiment umfasst ' : locale === 'fr' ? 'Notre gamme comprend ' : locale === 'es' ? 'Nuestra gama incluye ' : 'La nostra gamma include '}
              <strong style={{color:'#1a1a1a',fontWeight:500}}>{c.intro_p2_b3}</strong>{' '}{c.intro_p2_and}{' '}
              <strong style={{color:'#1a1a1a',fontWeight:500}}>{c.intro_p2_b4}</strong>,{' '}
              <Link href="/accesorii" style={{color:'#1a1a1a',fontWeight:500,textDecoration:'underline',textUnderlineOffset:'3px'}}>{c.intro_p2_link2}</Link>{' '}
              {c.intro_p2_end}
            </p>
          </div>
          <div className="stats-grid speakable-stats">
            {c.stats.map(([n,l],i)=>(
              i === 3 ? (
                <a key={l} href="https://maps.app.goo.gl/dvbPRmMwAroCPfSC8" target="_blank" rel="noopener noreferrer"
                  style={{padding:'24px 20px',textAlign:'center',borderRight:'none',textDecoration:'none',display:'block'}}>
                  <div style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.6625rem',color:'#f5a623',lineHeight:1}}>{n}</div>
                  <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.6425rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#767676',marginTop:'5px',lineHeight:1.3}}>{l}</div>
                </a>
              ) : (
                <div key={l} style={{padding:'24px 20px',textAlign:'center',borderRight:i<3?'1px solid #e8e8e8':'none'}}>
                  <div style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.6625rem',color:'#1a1a1a',lineHeight:1}}>{n}</div>
                  <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.6425rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#767676',marginTop:'5px',lineHeight:1.3}}>{l}</div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUSE ── */}
      <section style={{padding:'72px 0',background:'#f7f7f5',borderBottom:'1px solid #e8e8e8',contentVisibility:'auto',containIntrinsicSize:'0 400px'}}>
        <div className="container">
          <span className="sec-label">{c.sec_products}</span>
          <div className="cards-home-grid">
            {c.products.map(p=>(
              <Link key={p.href} href={p.href} className="prod-card" style={{borderTop:`3px solid ${p.topColor}`,textDecoration:'none'}}>
                <div style={{padding:'22px 22px 24px',display:'flex',flexDirection:'column',flex:1}}>
                  <span aria-hidden="true" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:400,fontSize:'0.6625rem',letterSpacing:'.2em',textTransform:'uppercase',color:p.topColor,display:'block',marginBottom:'9px'}}>{p.tag}</span>
                  <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.0125rem',color:'#1a1a1a',marginBottom:'9px',letterSpacing:'.02em'}}>{p.title}</h3>
                  <p style={{fontSize:'0.8225rem',fontWeight:300,color:'#767676',lineHeight:1.7,flex:1,textAlign:'justify',marginBottom:'18px'}}>{p.desc}</p>
                  <span className={p.btn}>
                    {locale === 'ro' ? 'DETALII →' : locale === 'en' ? 'DETAILS →' : locale === 'de' ? 'DETAILS →' : locale === 'fr' ? 'DÉTAILS →' : locale === 'es' ? 'DETALLES →' : 'DETTAGLI →'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ETAPE ── */}
      <section style={{padding:'72px 0',borderBottom:'1px solid #e8e8e8',contentVisibility:'auto',containIntrinsicSize:'0 600px'}}>
        <div className="container">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'36px',flexWrap:'wrap',gap:'16px'}}>
            <div>
              <span className="sec-label">{c.sec_label_steps}</span>
              <h2 className="home-h2-steps" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.2625rem, 4vw, 2.0625rem)',color:'#1a1a1a'}}>{c.steps_h2}</h2>
            </div>
            <p style={{fontSize:'0.8425rem',fontWeight:300,color:'#767676',maxWidth:'220px',textAlign:'right',lineHeight:1.6}}>{c.steps_sub}</p>
          </div>
          <div className="steps-grid-home">
            {c.steps.map((s,i)=>(
              <div key={s.n} className="step-item" style={{padding:'36px 32px',borderRight:i<2?'1px solid #e8e8e8':'none'}}>
                <div aria-hidden="true" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:300,fontSize:'clamp(1.6625rem, 4vw, 2.4625rem)',color:'#ebebeb',lineHeight:1,marginBottom:'20px'}}>{s.n}</div>
                <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'1.0125rem',color:'#1a1a1a',marginBottom:'10px'}}>{s.title}</h3>
                <p style={{fontSize:'0.8425rem',fontWeight:300,color:'#767676',lineHeight:1.7,textAlign:'justify'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DE CE NOI ── */}
      <section style={{padding:'72px 0',borderBottom:'1px solid #e8e8e8',contentVisibility:'auto',containIntrinsicSize:'0 600px'}}>
        <div className="container">
          <div className="why-grid-home">
            <div>
              <span className="sec-label">{c.sec_label_why}</span>
              <h2 className="home-h2-why" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.2625rem, 4vw, 2.2625rem)',color:'#1a1a1a',lineHeight:1.2}}>
                {c.why_h2.split('\n')[0]}<br/>{c.why_h2.split('\n')[1]}
              </h2>
            </div>
            <div className="why-cards-grid">
              {c.why_cards.map((item,i)=>(
                <div key={i} className="why-card-item" style={{padding:'20px 18px',borderTop:'1px solid #e8e8e8',borderRight:i%2===0?'1px solid #e8e8e8':'none'}}>
                  <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'0.8625rem',letterSpacing:'.06em',textTransform:'uppercase',color:'#1a1a1a',marginBottom:'7px'}}>{item.title}</h3>
                  <p style={{fontSize:'0.8225rem',fontWeight:300,color:'#767676',lineHeight:1.7,textAlign:'justify'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{padding:'72px 0',borderBottom:'1px solid #e8e8e8',background:'#f7f7f5'}}>
        <div className="container">
          <div style={{maxWidth:'780px',margin:'0 auto'}}>
            <span className="sec-label">{c.sec_label_faq}</span>
            <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'clamp(1.2rem, 4vw, 1.8rem)',color:'#1a1a1a',marginBottom:'36px'}}>
              {c.faq_h2}
            </h2>
            {c.faqs.map((item,i)=>(
              <details key={i} style={{borderBottom:'1px solid #e8e8e8',padding:'18px 0'}}>
                <summary style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:500,fontSize:'0.92rem',color:'#1a1a1a',cursor:'pointer',letterSpacing:'.02em',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  {item.q}
                  <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'1.1rem',color:'#999',marginLeft:'16px',flexShrink:0}}>+</span>
                </summary>
                <p style={{fontSize:'0.8425rem',fontWeight:300,color:'#767676',lineHeight:1.75,marginTop:'12px',textAlign:'justify'}}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO BRIDGE ── */}
      <section aria-label={c.seo_bridge} style={{background:'#111',padding:'0',contentVisibility:'auto',containIntrinsicSize:'0 300px'}}>
        <div className="container" style={{paddingTop:'32px',paddingBottom:'0',borderTop:'1px solid #1e1e1e'}}>
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#444',marginBottom:'0',textAlign:'center'}}>
            {c.seo_bridge.split(c.seo_link)[0]}
            <span style={{textDecoration:'underline'}}>{c.seo_link}</span>
            {c.seo_bridge.split(c.seo_link)[1]}
          </p>
        </div>
      </section>
    </>
  );
}
