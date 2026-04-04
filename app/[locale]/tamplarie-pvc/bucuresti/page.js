import { Link } from '../../../../i18n/navigation';
import FaqAccordion from '../../../../components/FaqAccordion';

const BASE = 'https://www.neofort-biz.ro';

const SLUGS = {
  ro: 'tamplarie-pvc/bucuresti',
  en: 'pvc-windows/bucharest',
  de: 'kunststofffenster-pvc/bukarest',
  fr: 'menuiserie-pvc/bucarest',
  es: 'carpinteria-pvc/bucarest',
  it: 'infissi-pvc/bucarest',
};

const PARENT_SLUGS = {
  ro: 'tamplarie-pvc', en: 'pvc-windows',
  de: 'kunststofffenster-pvc', fr: 'menuiserie-pvc',
  es: 'carpinteria-pvc', it: 'infissi-pvc',
};

const LOCALES = ['ro','en','de','fr','es','it'];

const UI = {
  ro: {
    label: 'Tâmplărie PVC · București',
    parent: 'Tâmplărie PVC',
    h1: 'Tâmplărie PVC București — Furnizare și Montaj Salamander în Sectoarele 1–6',
    sub: 'Neofort BIZ furnizează și montează tâmplărie PVC Salamander în București și Ilfov. Consultanță gratuită, măsurători la domiciliu, montaj certificat nZEB.',
    intro: 'Neofort BIZ este prezent în București din 2005, cu sediul în Sectorul 1 (Str. Theodor Aman Pictor 11). Furnizăm și montăm tâmplărie PVC Salamander în toate cele 6 sectoare ale Capitalei și în zona metropolitană Ilfov — cu echipe proprii de montaj, consultanți tehnici și servicii complete de la măsurători până la garanție post-montaj.',
    zones_title: 'Zone de acoperire în București și Ilfov',
    zones: [
      ['Sector 1', 'Domenii, Floreasca, Aviatorilor, Dorobanți, Băneasa, Herăstrău'],
      ['Sector 2', 'Colentina, Pantelimon, Iancului, Obor, Floreasca'],
      ['Sector 3', 'Vitan, Titan, Balta Albă, Dudești, Dristor'],
      ['Sector 4', 'Berceni, Olteniței, Giurgiului, Văcărești'],
      ['Sector 5', 'Rahova, Ferentari, 13 Septembrie, Cotroceni'],
      ['Sector 6', 'Drumul Taberei, Militari, Giulești, Crângași'],
      ['Ilfov', 'Voluntari, Pipera, Otopeni, Snagov, Balotești, Bragadiru, Măgurele, Jilava'],
    ],
    why_title: 'Tâmplărie PVC în București | Neofort BIZ',
    why: [
      ['21 ani experiență', 'Prezență continuă în piața bucureșteană din 2005, cu sute de proiecte rezidențiale și comerciale finalizate în Capitală.'],
      ['Echipe proprii de montaj', 'Nu subcontractăm montajul — echipele noastre sunt instruite și certificate pentru sistemele Salamander BluEvolution și GreenEvolution.'],
      ['Consultanță tehnică gratuită', 'Specialist tehnic disponibil pentru consultanță privind alegerea profilului, dimensionarea și calculul performanțelor termice și fonice.'],
      ['Măsurători la domiciliu gratuite', 'Deplasare gratuită în tot Bucureștiul și Ilfovul pentru măsurători, evaluare lucrare și elaborare ofertă detaliată.'],
      ['Montaj certificat nZEB', 'Folosim precadre Blaugelb Triotherm+ și benzi de etanșare pe 3 straturi — condiție necesară pentru autorizații noi și certificate energetice.'],
      ['Garanție 5 ani', 'Garanție completă pe profilul PVC, geam și montaj. Intervenție în 48 ore pentru orice solicitare post-montaj în București.'],
    ],
    process_title: 'Cum funcționează procesul în București',
    process: [
      ['Zi 1', 'Contact inițial', 'Suni sau trimiți cerere online. Specialist tehnic te contactează în maxim 2 ore (L–V, 10–18).'],
      ['Zi 2–3', 'Măsurători gratuite', 'Echipa vine la adresa ta pentru măsurători precise și consultanță privind profilul recomandat.'],
      ['Zi 3–5', 'Ofertă detaliată', 'Primești oferta cu specificații complete, prețuri finale și termen de livrare.'],
      ['Zi 14–21', 'Producție', 'Tâmplăria PVC este produsă pe linii automate cu profile Salamander originale.'],
      ['Zi 21–25', 'Montaj', 'Echipa noastră realizează montajul conform RAL și nZEB, cu toate benzile și precadrele Blaugelb.'],
      ['Post-montaj', 'Garanție și service', 'Control final, documentație tehnică, certificat de garanție și contact dedicat pentru orice solicitare.'],
    ],
    faq_title: 'Întrebări frecvente — tâmplărie PVC București',
    faq: [
      ['Cât durează montajul tâmplăriei PVC în București?', 'Un apartament standard (5–8 ferestre) se montează în 1–2 zile. O casă sau proiect mai mare necesită 2–4 zile. Programăm montajul la o dată convenabilă pentru dvs., fără a perturba activitățile zilnice.'],
      ['Faceți montaj PVC și în afara Bucureștiului?', 'Da — montăm în toată România și livrăm în toată Europa. Pentru lucrări în afara zonei București–Ilfov, se adaugă costul de transport și cazare echipă, evaluat individual per proiect.'],
      ['Pot să comand tâmplărie PVC fără a fi prezent în București?', 'Da — pentru clienți din diaspora sau care nu pot fi prezenți, organizăm măsurătorile cu un reprezentant al clientului sau cu arhitectul de proiect. Comunicăm integral prin email și WhatsApp.'],
      ['Care profil PVC Salamander este recomandat pentru un apartament din București?', 'Pentru apartamente standard, recomandăm GreenEvolution 76 MD — 5 camere, Uw 0,73 W/(m²K), excelent raport calitate-preț. Pentru case noi sau renovări cu cerințe nZEB, BluEvolution 92 cu 6 camere și Uw 0,70 W/(m²K) este alegerea optimă.'],
    ],
    cta_h: 'Solicitați măsurători gratuite în București',
    cta_sub: 'Echipa noastră ajunge la adresa dvs. în 24–48 ore.',
    cta_btn: 'Cerere ofertă gratuită',
    cta_call: 'Sună acum',
    see_also: 'Vezi și',
    link_main: 'Tâmplărie PVC Salamander — toate profilele',
    link_prices: 'Prețuri tâmplărie PVC 2026',
  },
  en: {
    label: 'PVC Windows · Bucharest',
    parent: 'PVC Windows',
    h1: 'PVC Windows Bucharest — Salamander Supply and Installation in all Districts',
    sub: 'Neofort BIZ supplies and installs Salamander PVC windows in Bucharest and Ilfov. Free consultation, home measurements, nZEB certified installation.',
    intro: 'Neofort BIZ has been present in Bucharest since 2005, headquartered in District 1 (Str. Theodor Aman Pictor 11). We supply and install Salamander PVC windows across all 6 districts of the capital and the Ilfov metropolitan area — with our own installation teams, technical consultants and complete services from measurements to post-installation warranty.',
    zones_title: 'Coverage areas in Bucharest and Ilfov',
    zones: [
      ['District 1', 'Domenii, Floreasca, Aviatorilor, Dorobanți, Băneasa, Herăstrău'],
      ['District 2', 'Colentina, Pantelimon, Iancului, Obor, Floreasca'],
      ['District 3', 'Vitan, Titan, Balta Albă, Dudești, Dristor'],
      ['District 4', 'Berceni, Olteniței, Giurgiului, Văcărești'],
      ['District 5', 'Rahova, Ferentari, 13 Septembrie, Cotroceni'],
      ['District 6', 'Drumul Taberei, Militari, Giulești, Crângași'],
      ['Ilfov', 'Voluntari, Pipera, Otopeni, Snagov, Balotești, Bragadiru, Măgurele, Jilava'],
    ],
    why_title: 'Why choose Neofort BIZ for PVC windows in Bucharest',
    why: [
      ['21 years experience', 'Continuous presence in the Bucharest market since 2005, with hundreds of residential and commercial projects completed in the capital.'],
      ['Own installation teams', 'We do not subcontract installation — our teams are trained and certified for Salamander BluEvolution and GreenEvolution systems.'],
      ['Free technical consultation', 'Technical specialist available for consultation on profile selection, sizing and thermal and acoustic performance calculation.'],
      ['Free home measurements', 'Free visit throughout Bucharest and Ilfov for measurements, project assessment and detailed quote.'],
      ['nZEB certified installation', 'We use Blaugelb Triotherm+ precasings and 3-layer sealing tapes — required for new building permits and energy certificates.'],
      ['5 year warranty', 'Full warranty on PVC profile, glass and installation. 48-hour response for any post-installation request in Bucharest.'],
    ],
    process_title: 'How the process works in Bucharest',
    process: [
      ['Day 1', 'Initial contact', 'Call or send an online request. Technical specialist contacts you within 2 hours (Mon–Fri, 10–18).'],
      ['Day 2–3', 'Free measurements', 'Our team visits your address for precise measurements and profile recommendation.'],
      ['Day 3–5', 'Detailed quote', 'You receive the quote with full specifications, final prices and delivery timeline.'],
      ['Day 14–21', 'Production', 'PVC windows are produced on automated lines with original Salamander profiles.'],
      ['Day 21–25', 'Installation', 'Our team carries out installation per RAL and nZEB standards, with all tapes and Blaugelb precasings.'],
      ['Post-installation', 'Warranty & service', 'Final inspection, technical documentation, warranty certificate and dedicated contact for any request.'],
    ],
    faq_title: 'Frequently asked questions — PVC windows Bucharest',
    faq: [
      ['How long does PVC window installation take in Bucharest?', 'A standard apartment (5–8 windows) is installed in 1–2 days. A house or larger project requires 2–4 days. We schedule installation at a convenient date without disrupting your daily activities.'],
      ['Do you install PVC windows outside Bucharest?', 'Yes — we install throughout Romania and deliver across Europe. For projects outside the Bucharest–Ilfov area, transport and team accommodation costs are added, evaluated individually per project.'],
      ['Can I order PVC windows without being present in Bucharest?', 'Yes — for clients in the diaspora or who cannot be present, we organise measurements with the client\'s representative or the project architect. We communicate entirely via email and WhatsApp.'],
      ['Which Salamander PVC profile is recommended for a Bucharest apartment?', 'For standard apartments, we recommend GreenEvolution 76 MD — 5 chambers, Uw 0.73 W/(m²K), excellent value for money. For new builds or nZEB renovations, BluEvolution 92 with 6 chambers and Uw 0.70 W/(m²K) is the optimal choice.'],
    ],
    cta_h: 'Request free measurements in Bucharest',
    cta_sub: 'Our team reaches your address within 24–48 hours.',
    cta_btn: 'Request free quote',
    cta_call: 'Call now',
    see_also: 'See also',
    link_main: 'Salamander PVC Windows — all profiles',
    link_prices: 'PVC window prices 2026',
  },
  de: {
    label: 'Kunststofffenster PVC · Bukarest',
    parent: 'Kunststofffenster PVC',
    h1: 'Kunststofffenster Bukarest — Salamander Lieferung und Montage in allen Bezirken',
    sub: 'Neofort BIZ liefert und montiert Salamander PVC-Fenster in Bukarest und Ilfov. Kostenlose Beratung, Aufmaß vor Ort, nZEB-zertifizierter Einbau.',
    intro: 'Neofort BIZ ist seit 2005 in Bukarest präsent, mit Sitz im 1. Bezirk (Str. Theodor Aman Pictor 11). Wir liefern und montieren Salamander PVC-Fenster in allen 6 Bezirken der Hauptstadt und der Metropolregion Ilfov — mit eigenen Montageteams, technischen Beratern und Komplettservice von Aufmaß bis zur Montagegarantie.',
    zones_title: 'Einsatzgebiete in Bukarest und Ilfov',
    zones: [
      ['Bezirk 1', 'Domenii, Floreasca, Aviatorilor, Dorobanți, Băneasa, Herăstrău'],
      ['Bezirk 2', 'Colentina, Pantelimon, Iancului, Obor, Floreasca'],
      ['Bezirk 3', 'Vitan, Titan, Balta Albă, Dudești, Dristor'],
      ['Bezirk 4', 'Berceni, Olteniței, Giurgiului, Văcărești'],
      ['Bezirk 5', 'Rahova, Ferentari, 13 Septembrie, Cotroceni'],
      ['Bezirk 6', 'Drumul Taberei, Militari, Giulești, Crângași'],
      ['Ilfov', 'Voluntari, Pipera, Otopeni, Snagov, Balotești, Bragadiru, Măgurele, Jilava'],
    ],
    why_title: 'Warum Neofort BIZ für PVC-Fenster in Bukarest wählen',
    why: [
      ['21 Jahre Erfahrung', 'Kontinuierliche Präsenz auf dem Bukarester Markt seit 2005, mit Hunderten von Wohn- und Gewerbeprojekten in der Hauptstadt.'],
      ['Eigene Montageteams', 'Wir vergeben keine Montageaufträge — unsere Teams sind für Salamander BluEvolution und GreenEvolution Systeme geschult und zertifiziert.'],
      ['Kostenlose Fachberatung', 'Technischer Spezialist für Beratung zu Profilauswahl, Dimensionierung und Berechnung der Wärme- und Schalldämmeigenschaften.'],
      ['Kostenloser Aufmaßservice', 'Kostenloser Hausbesuch in ganz Bukarest und Ilfov für Aufmaß, Projektbewertung und detailliertes Angebot.'],
      ['nZEB-zertifizierter Einbau', 'Wir verwenden Blaugelb Triotherm+ Vorfenster und 3-lagige Dichtungsbänder — Voraussetzung für neue Baugenehmigungen und Energieausweise.'],
      ['5 Jahre Garantie', 'Vollständige Garantie auf PVC-Profil, Glas und Montage. 48-Stunden-Reaktionszeit für Nachmontageanfragen in Bukarest.'],
    ],
    process_title: 'So läuft der Prozess in Bukarest ab',
    process: [
      ['Tag 1', 'Erstkontakt', 'Anruf oder Online-Anfrage. Fachberater meldet sich innerhalb von 2 Stunden (Mo–Fr, 10–18 Uhr).'],
      ['Tag 2–3', 'Kostenloser Aufmaß', 'Unser Team kommt zu Ihrer Adresse für präzise Aufmaße und Profilempfehlung.'],
      ['Tag 3–5', 'Detailliertes Angebot', 'Sie erhalten das Angebot mit vollständigen Spezifikationen, Endpreisen und Liefertermin.'],
      ['Tag 14–21', 'Produktion', 'PVC-Fenster werden auf automatisierten Linien mit originalen Salamander-Profilen gefertigt.'],
      ['Tag 21–25', 'Montage', 'Unser Team führt die Montage nach RAL und nZEB durch, mit allen Bändern und Blaugelb-Vorfenstern.'],
      ['Nach Montage', 'Garantie & Service', 'Abschlussinspektion, technische Dokumentation, Garantieschein und Ansprechpartner für alle Anfragen.'],
    ],
    faq_title: 'Häufige Fragen — PVC-Fenster Bukarest',
    faq: [
      ['Wie lange dauert die PVC-Fenstermontage in Bukarest?', 'Eine Standardwohnung (5–8 Fenster) wird in 1–2 Tagen montiert. Ein Haus oder größeres Projekt benötigt 2–4 Tage. Wir terminieren die Montage auf einen für Sie günstigen Termin.'],
      ['Montieren Sie PVC-Fenster auch außerhalb Bukarests?', 'Ja — wir montieren in ganz Rumänien und liefern europaweit. Für Projekte außerhalb der Region Bukarest–Ilfov werden Transport- und Teamunterkunftskosten individuell pro Projekt berechnet.'],
      ['Kann ich PVC-Fenster bestellen ohne in Bukarest zu sein?', 'Ja — für Kunden aus der Diaspora oder die nicht vor Ort sein können, organisieren wir das Aufmaß mit dem Vertreter des Kunden oder dem Projektarchitekten. Wir kommunizieren vollständig per E-Mail und WhatsApp.'],
      ['Welches Salamander PVC-Profil wird für eine Bukarester Wohnung empfohlen?', 'Für Standardwohnungen empfehlen wir GreenEvolution 76 MD — 5 Kammern, Uw 0,73 W/(m²K), ausgezeichnetes Preis-Leistungs-Verhältnis. Für Neubauten oder nZEB-Renovierungen ist BluEvolution 92 mit 6 Kammern und Uw 0,70 W/(m²K) die optimale Wahl.'],
    ],
    cta_h: 'Kostenloses Aufmaß in Bukarest anfragen',
    cta_sub: 'Unser Team ist in 24–48 Stunden bei Ihnen.',
    cta_btn: 'Kostenloses Angebot',
    cta_call: 'Jetzt anrufen',
    see_also: 'Siehe auch',
    link_main: 'Salamander PVC-Fenster — alle Profile',
    link_prices: 'PVC-Fenster Preise 2026',
  },
  fr: {
    label: 'Menuiserie PVC · Bucarest',
    parent: 'Menuiserie PVC',
    h1: 'Menuiserie PVC Bucarest — Fourniture et Pose Salamander dans tous les Arrondissements',
    sub: 'Neofort BIZ fournit et pose la menuiserie PVC Salamander à Bucarest et Ilfov. Conseil gratuit, métrés à domicile, pose certifiée nZEB.',
    intro: "Neofort BIZ est présent à Bucarest depuis 2005, avec son siège dans le 1er arrondissement (Str. Theodor Aman Pictor 11). Nous fournissons et posons la menuiserie PVC Salamander dans les 6 arrondissements de la capitale et la zone métropolitaine d'Ilfov — avec nos propres équipes de pose, conseillers techniques et services complets du métrage à la garantie post-pose.",
    zones_title: "Zones d'intervention à Bucarest et Ilfov",
    zones: [
      ['Arrondissement 1', 'Domenii, Floreasca, Aviatorilor, Dorobanți, Băneasa, Herăstrău'],
      ['Arrondissement 2', 'Colentina, Pantelimon, Iancului, Obor, Floreasca'],
      ['Arrondissement 3', 'Vitan, Titan, Balta Albă, Dudești, Dristor'],
      ['Arrondissement 4', 'Berceni, Olteniței, Giurgiului, Văcărești'],
      ['Arrondissement 5', 'Rahova, Ferentari, 13 Septembrie, Cotroceni'],
      ['Arrondissement 6', 'Drumul Taberei, Militari, Giulești, Crângași'],
      ['Ilfov', 'Voluntari, Pipera, Otopeni, Snagov, Balotești, Bragadiru, Măgurele, Jilava'],
    ],
    why_title: 'Pourquoi choisir Neofort BIZ pour la menuiserie PVC à Bucarest',
    why: [
      ['21 ans d\'expérience', 'Présence continue sur le marché bucarestois depuis 2005, avec des centaines de projets résidentiels et commerciaux réalisés dans la capitale.'],
      ['Équipes de pose propres', "Nous ne sous-traitons pas la pose — nos équipes sont formées et certifiées pour les systèmes Salamander BluEvolution et GreenEvolution."],
      ['Conseil technique gratuit', "Spécialiste technique disponible pour conseiller sur le choix du profilé, le dimensionnement et le calcul des performances thermiques et acoustiques."],
      ['Métrés à domicile gratuits', "Déplacement gratuit dans tout Bucarest et Ilfov pour métrés, évaluation du chantier et devis détaillé."],
      ['Pose certifiée nZEB', "Nous utilisons des précadres Blaugelb Triotherm+ et des bandes d'étanchéité en 3 couches — exigés pour les permis de construire neufs et les certificats énergétiques."],
      ['Garantie 5 ans', "Garantie complète sur le profilé PVC, le vitrage et la pose. Intervention sous 48 heures pour toute demande post-pose à Bucarest."],
    ],
    process_title: 'Comment fonctionne le processus à Bucarest',
    process: [
      ["Jour 1", "Contact initial", "Appelez ou envoyez une demande en ligne. Un spécialiste technique vous contacte sous 2 heures (Lun–Ven, 10–18h)."],
      ["Jour 2–3", "Métrés gratuits", "Notre équipe se rend à votre adresse pour des métrés précis et des conseils sur le profilé recommandé."],
      ["Jour 3–5", "Devis détaillé", "Vous recevez le devis avec spécifications complètes, prix définitifs et délai de livraison."],
      ["Jour 14–21", "Production", "Les fenêtres PVC sont produites sur lignes automatisées avec des profilés Salamander d'origine."],
      ["Jour 21–25", "Pose", "Notre équipe réalise la pose selon les normes RAL et nZEB, avec toutes les bandes et précadres Blaugelb."],
      ["Post-pose", "Garantie & SAV", "Contrôle final, documentation technique, certificat de garantie et contact dédié pour toute demande."],
    ],
    faq_title: 'Questions fréquentes — menuiserie PVC Bucarest',
    faq: [
      ["Combien de temps dure la pose de menuiserie PVC à Bucarest ?", "Un appartement standard (5–8 fenêtres) est posé en 1–2 jours. Une maison ou un projet plus grand nécessite 2–4 jours. Nous programmons la pose à une date qui vous convient."],
      ["Intervenez-vous en dehors de Bucarest ?", "Oui — nous posons dans toute la Roumanie et livrons dans toute l'Europe. Pour les chantiers hors zone Bucarest–Ilfov, les frais de transport et d'hébergement de l'équipe s'ajoutent, évalués individuellement."],
      ["Puis-je commander sans être présent à Bucarest ?", "Oui — pour les clients de la diaspora ou ne pouvant être présents, nous organisons les métrés avec le représentant du client ou l'architecte. Toute la communication se fait par e-mail et WhatsApp."],
      ["Quel profilé PVC Salamander recommandez-vous pour un appartement à Bucarest ?", "Pour les appartements standard, nous recommandons GreenEvolution 76 MD — 5 chambres, Uw 0,73 W/(m²K), excellent rapport qualité-prix. Pour les constructions neuves ou rénovations nZEB, BluEvolution 92 avec 6 chambres et Uw 0,70 W/(m²K) est le choix optimal."],
    ],
    cta_h: 'Demandez des métrés gratuits à Bucarest',
    cta_sub: 'Notre équipe se déplace chez vous sous 24–48 heures.',
    cta_btn: 'Devis gratuit',
    cta_call: 'Appeler maintenant',
    see_also: 'Voir aussi',
    link_main: 'Menuiserie PVC Salamander — tous les profilés',
    link_prices: 'Prix menuiserie PVC 2026',
  },
  es: {
    label: 'Carpintería PVC · Bucarest',
    parent: 'Carpintería PVC',
    h1: 'Carpintería PVC Bucarest — Suministro e Instalación Salamander en todos los Distritos',
    sub: 'Neofort BIZ suministra e instala carpintería PVC Salamander en Bucarest e Ilfov. Asesoramiento gratuito, mediciones a domicilio, instalación certificada nZEB.',
    intro: 'Neofort BIZ está presente en Bucarest desde 2005, con sede en el Distrito 1 (Str. Theodor Aman Pictor 11). Suministramos e instalamos carpintería PVC Salamander en los 6 distritos de la capital y la zona metropolitana de Ilfov — con nuestros propios equipos de instalación, consultores técnicos y servicios completos desde las mediciones hasta la garantía post-instalación.',
    zones_title: 'Zonas de cobertura en Bucarest e Ilfov',
    zones: [
      ['Distrito 1', 'Domenii, Floreasca, Aviatorilor, Dorobanți, Băneasa, Herăstrău'],
      ['Distrito 2', 'Colentina, Pantelimon, Iancului, Obor, Floreasca'],
      ['Distrito 3', 'Vitan, Titan, Balta Albă, Dudești, Dristor'],
      ['Distrito 4', 'Berceni, Olteniței, Giurgiului, Văcărești'],
      ['Distrito 5', 'Rahova, Ferentari, 13 Septembrie, Cotroceni'],
      ['Distrito 6', 'Drumul Taberei, Militari, Giulești, Crângași'],
      ['Ilfov', 'Voluntari, Pipera, Otopeni, Snagov, Balotești, Bragadiru, Măgurele, Jilava'],
    ],
    why_title: 'Por qué elegir Neofort BIZ para carpintería PVC en Bucarest',
    why: [
      ['21 años de experiencia', 'Presencia continua en el mercado de Bucarest desde 2005, con cientos de proyectos residenciales y comerciales finalizados en la capital.'],
      ['Equipos propios de instalación', 'No subcontratamos la instalación — nuestros equipos están formados y certificados para los sistemas Salamander BluEvolution y GreenEvolution.'],
      ['Asesoramiento técnico gratuito', 'Especialista técnico disponible para asesorar sobre la elección del perfil, dimensionamiento y cálculo de rendimiento térmico y acústico.'],
      ['Mediciones gratuitas a domicilio', 'Desplazamiento gratuito por todo Bucarest e Ilfov para mediciones, evaluación de obra y presupuesto detallado.'],
      ['Instalación certificada nZEB', 'Usamos premarcos Blaugelb Triotherm+ y cintas de sellado de 3 capas — requisito para nuevos permisos de obra y certificados energéticos.'],
      ['Garantía 5 años', 'Garantía completa sobre el perfil PVC, vidrio e instalación. Intervención en 48 horas para cualquier solicitud post-instalación en Bucarest.'],
    ],
    process_title: 'Cómo funciona el proceso en Bucarest',
    process: [
      ['Día 1', 'Contacto inicial', 'Llama o envía una solicitud online. Un especialista técnico te contacta en máximo 2 horas (Lun–Vie, 10–18h).'],
      ['Día 2–3', 'Mediciones gratuitas', 'Nuestro equipo visita tu dirección para mediciones precisas y recomendación de perfil.'],
      ['Día 3–5', 'Presupuesto detallado', 'Recibes el presupuesto con especificaciones completas, precios finales y plazo de entrega.'],
      ['Día 14–21', 'Producción', 'Las ventanas PVC se producen en líneas automatizadas con perfiles Salamander originales.'],
      ['Día 21–25', 'Instalación', 'Nuestro equipo realiza la instalación según normas RAL y nZEB, con todas las cintas y premarcos Blaugelb.'],
      ['Post-instalación', 'Garantía y servicio', 'Inspección final, documentación técnica, certificado de garantía y contacto dedicado para cualquier solicitud.'],
    ],
    faq_title: 'Preguntas frecuentes — carpintería PVC Bucarest',
    faq: [
      ['¿Cuánto dura la instalación de carpintería PVC en Bucarest?', 'Un apartamento estándar (5–8 ventanas) se instala en 1–2 días. Una casa o proyecto mayor requiere 2–4 días. Programamos la instalación en una fecha conveniente para usted.'],
      ['¿Instaláis carpintería PVC fuera de Bucarest?', 'Sí — instalamos en toda Rumanía y entregamos en toda Europa. Para obras fuera del área Bucarest–Ilfov, se añaden costes de transporte y alojamiento del equipo, evaluados individualmente por proyecto.'],
      ['¿Puedo pedir carpintería PVC sin estar presente en Bucarest?', 'Sí — para clientes de la diáspora o que no pueden estar presentes, organizamos las mediciones con el representante del cliente o el arquitecto del proyecto. Comunicamos íntegramente por email y WhatsApp.'],
      ['¿Qué perfil PVC Salamander recomendáis para un apartamento en Bucarest?', 'Para apartamentos estándar, recomendamos GreenEvolution 76 MD — 5 cámaras, Uw 0,73 W/(m²K), excelente relación calidad-precio. Para obra nueva o renovaciones nZEB, BluEvolution 92 con 6 cámaras y Uw 0,70 W/(m²K) es la elección óptima.'],
    ],
    cta_h: 'Solicite mediciones gratuitas en Bucarest',
    cta_sub: 'Nuestro equipo llega a su dirección en 24–48 horas.',
    cta_btn: 'Presupuesto gratuito',
    cta_call: 'Llamar ahora',
    see_also: 'Ver también',
    link_main: 'Carpintería PVC Salamander — todos los perfiles',
    link_prices: 'Precios carpintería PVC 2026',
  },
  it: {
    label: 'Infissi PVC · Bucarest',
    parent: 'Infissi PVC',
    h1: 'Infissi PVC Bucarest — Fornitura e Posa Salamander in tutti i Quartieri',
    sub: 'Neofort BIZ fornisce e posa infissi PVC Salamander a Bucarest e Ilfov. Consulenza gratuita, rilievi a domicilio, posa certificata nZEB.',
    intro: "Neofort BIZ è presente a Bucarest dal 2005, con sede nel Distretto 1 (Str. Theodor Aman Pictor 11). Forniamo e posiamo infissi PVC Salamander in tutti e 6 i quartieri della capitale e nella zona metropolitana di Ilfov — con squadre di posa proprie, consulenti tecnici e servizi completi dal rilievo alla garanzia post-posa.",
    zones_title: 'Zone di copertura a Bucarest e Ilfov',
    zones: [
      ['Distretto 1', 'Domenii, Floreasca, Aviatorilor, Dorobanți, Băneasa, Herăstrău'],
      ['Distretto 2', 'Colentina, Pantelimon, Iancului, Obor, Floreasca'],
      ['Distretto 3', 'Vitan, Titan, Balta Albă, Dudești, Dristor'],
      ['Distretto 4', 'Berceni, Olteniței, Giurgiului, Văcărești'],
      ['Distretto 5', 'Rahova, Ferentari, 13 Septembrie, Cotroceni'],
      ['Distretto 6', 'Drumul Taberei, Militari, Giulești, Crângași'],
      ['Ilfov', 'Voluntari, Pipera, Otopeni, Snagov, Balotești, Bragadiru, Măgurele, Jilava'],
    ],
    why_title: 'Perché scegliere Neofort BIZ per infissi PVC a Bucarest',
    why: [
      ['21 anni di esperienza', 'Presenza continua nel mercato di Bucarest dal 2005, con centinaia di progetti residenziali e commerciali completati nella capitale.'],
      ['Squadre di posa proprie', "Non subappaltiamo la posa — le nostre squadre sono formate e certificate per i sistemi Salamander BluEvolution e GreenEvolution."],
      ['Consulenza tecnica gratuita', "Specialista tecnico disponibile per consulenze sulla scelta del profilato, dimensionamento e calcolo delle prestazioni termiche e acustiche."],
      ['Rilievi gratuiti a domicilio', "Sopralluogo gratuito in tutta Bucarest e Ilfov per rilievi, valutazione lavori e preventivo dettagliato."],
      ['Posa certificata nZEB', "Utilizziamo precontrotelaio Blaugelb Triotherm+ e nastri di tenuta a 3 strati — requisito per nuove autorizzazioni edilizie e certificati energetici."],
      ['Garanzia 5 anni', "Garanzia completa su profilato PVC, vetro e posa. Intervento entro 48 ore per qualsiasi richiesta post-posa a Bucarest."],
    ],
    process_title: 'Come funziona il processo a Bucarest',
    process: [
      ["Giorno 1", "Contatto iniziale", "Chiama o invia una richiesta online. Uno specialista tecnico ti contatta entro 2 ore (Lun–Ven, 10–18)."],
      ["Giorno 2–3", "Rilievi gratuiti", "Il nostro team si reca al tuo indirizzo per rilievi precisi e consulenza sul profilato consigliato."],
      ["Giorno 3–5", "Preventivo dettagliato", "Ricevi il preventivo con specifiche complete, prezzi definitivi e tempi di consegna."],
      ["Giorno 14–21", "Produzione", "Gli infissi PVC vengono prodotti su linee automatizzate con profilati Salamander originali."],
      ["Giorno 21–25", "Posa", "Il nostro team esegue la posa secondo gli standard RAL e nZEB, con tutti i nastri e precontrotelaio Blaugelb."],
      ["Post-posa", "Garanzia e assistenza", "Ispezione finale, documentazione tecnica, certificato di garanzia e contatto dedicato per qualsiasi richiesta."],
    ],
    faq_title: 'Domande frequenti — infissi PVC Bucarest',
    faq: [
      ["Quanto dura la posa di infissi PVC a Bucarest?", "Un appartamento standard (5–8 finestre) viene posato in 1–2 giorni. Una casa o un progetto più grande richiede 2–4 giorni. Programmiamo la posa in una data conveniente per lei."],
      ["Posate infissi PVC anche fuori Bucarest?", "Sì — installiamo in tutta la Romania e consegniamo in tutta Europa. Per cantieri fuori dalla zona Bucarest–Ilfov, si aggiungono i costi di trasporto e alloggio della squadra, valutati individualmente per progetto."],
      ["Posso ordinare infissi PVC senza essere presente a Bucarest?", "Sì — per i clienti della diaspora o che non possono essere presenti, organizziamo i rilievi con il rappresentante del cliente o l'architetto di progetto. Comunichiamo interamente via email e WhatsApp."],
      ["Quale profilato PVC Salamander consigliate per un appartamento a Bucarest?", "Per appartamenti standard, consigliamo GreenEvolution 76 MD — 5 camere, Uw 0,73 W/(m²K), eccellente rapporto qualità-prezzo. Per nuove costruzioni o ristrutturazioni nZEB, BluEvolution 92 con 6 camere e Uw 0,70 W/(m²K) è la scelta ottimale."],
    ],
    cta_h: 'Richiedete rilievi gratuiti a Bucarest',
    cta_sub: 'Il nostro team raggiunge il vostro indirizzo entro 24–48 ore.',
    cta_btn: 'Preventivo gratuito',
    cta_call: 'Chiama ora',
    see_also: 'Vedi anche',
    link_main: 'Infissi PVC Salamander — tutti i profilati',
    link_prices: 'Prezzi infissi PVC 2026',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const slug = SLUGS[locale] || SLUGS.ro;
  const parentSlug = PARENT_SLUGS[locale] || PARENT_SLUGS.ro;
  return {
    title: locale === 'ro' ? 'Tâmplărie PVC București — Montaj Salamander BluEvolution & GreenEvolution | Neofort BIZ'
         : locale === 'en' ? 'PVC Windows Bucharest — Salamander BluEvolution & GreenEvolution Installation | Neofort BIZ'
         : locale === 'de' ? 'Kunststofffenster Bukarest — Salamander BluEvolution & GreenEvolution Montage | Neofort BIZ'
         : locale === 'fr' ? 'Menuiserie PVC Bucarest — Pose Salamander BluEvolution & GreenEvolution | Neofort BIZ'
         : locale === 'es' ? 'Carpintería PVC Bucarest — Instalación Salamander BluEvolution & GreenEvolution | Neofort BIZ'
         : 'Infissi PVC Bucarest — Posa Salamander BluEvolution & GreenEvolution | Neofort BIZ',
    description: locale === 'ro' ? 'Furnizare și montaj tâmplărie PVC Salamander în București — toate sectoarele și Ilfov. Măsurători gratuite, montaj nZEB cu precadre Blaugelb, garanție 5 ani.'
               : locale === 'en' ? 'PVC Salamander window supply and installation in Bucharest — all districts and Ilfov. Free measurements, nZEB installation with Blaugelb precasings, 5-year warranty.'
               : locale === 'de' ? 'Lieferung und Montage Salamander PVC-Fenster in Bukarest — alle Bezirke und Ilfov. Kostenloser Aufmaß, nZEB-Montage mit Blaugelb-Vorfenstern, 5 Jahre Garantie.'
               : locale === 'fr' ? 'Fourniture et pose menuiserie PVC Salamander à Bucarest — tous arrondissements et Ilfov. Métrés gratuits, pose nZEB avec précadres Blaugelb, garantie 5 ans.'
               : locale === 'es' ? 'Suministro e instalación carpintería PVC Salamander en Bucarest — todos los distritos e Ilfov. Mediciones gratuitas, instalación nZEB con premarcos Blaugelb, garantía 5 años.'
               : 'Fornitura e posa infissi PVC Salamander a Bucarest — tutti i quartieri e Ilfov. Rilievi gratuiti, posa nZEB con precontrotelaio Blaugelb, garanzia 5 anni.',
    keywords: locale === 'ro' ? 'tamplarie pvc bucuresti, ferestre pvc bucuresti, montaj pvc bucuresti, salamander bucuresti, bluevolution 92 bucuresti, greenevolution 76 bucuresti, termopane pvc bucuresti, inlocuit ferestre bucuresti'
            : 'PVC windows Bucharest, Salamander windows Bucharest installation, BluEvolution 92 Bucharest',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: Object.fromEntries([
        ...LOCALES.map(l => [l, `${BASE}/${l}/${SLUGS[l]}`]),
        ['x-default', `${BASE}/ro/${SLUGS.ro}`],
      ]),
    },
    openGraph: {
      type: 'website', url: `${BASE}/${locale}/${slug}`, siteName: 'Neofort BIZ',
      title: ui.h1, description: ui.sub,
      images: [{ url: `${BASE}/og/Tamplarie_PVC_Salamander.jpg`, width: 1200, height: 630, alt: ui.h1, type: 'image/avif' }],
    },
  };
}

export default async function BucurestiPvcPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const parentSlug = PARENT_SLUGS[locale] || PARENT_SLUGS.ro;
  const slug = SLUGS[locale] || SLUGS.ro;

  const schema = {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: ui.h1, description: ui.sub,
    url: `${BASE}/${locale}/${slug}`,
    isPartOf: { '@id': `${BASE}/#website` },
    inLanguage: locale,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Neofort BIZ', item: `${BASE}/${locale}` },
        { '@type': 'ListItem', position: 2, name: ui.parent, item: `${BASE}/${locale}/${parentSlug}` },
        { '@type': 'ListItem', position: 3, name: ui.h1, item: `${BASE}/${locale}/${slug}` },
      ],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title:ui.h1, description:ui.sub, images:[`${BASE}/og/Tamplarie_PVC_Salamander.jpg`] },
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: ui.faq.map(([q, a]) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container mx-auto px-6">
          <nav style={{ fontSize: '.65rem', letterSpacing: '.12em', textTransform: 'uppercase', color: '#404040', display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#404040', textDecoration: 'none' }}>Neofort BIZ</Link>
            <span style={{ color: '#4a4a4a' }}>›</span>
            <Link href={`/${parentSlug}`} style={{ color: '#404040', textDecoration: 'none' }}>{ui.parent}</Link>
            <span style={{ color: '#4a4a4a' }}>›</span>
            <span style={{ color: '#1a1a1a' }}>București</span>
          </nav>
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-2xl">{ui.sub}</p>
        </div>
      </div>

      {/* INTRO + ZONE */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <p style={{ fontSize: '.92rem', color: '#4a4a4a', lineHeight: 1.8, marginBottom: '48px' }}>{ui.intro}</p>

          <h2 className="font-condensed text-2xl font-semibold text-primary mb-6">{ui.zones_title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '12px', marginBottom: '48px' }}>
            {ui.zones.map(([sector, cartiere], i) => (
              <div key={i} style={{ padding: '16px 20px', border: '1px solid #e8e8e4', borderRadius: '6px', borderLeft: '3px solid #4a7c59' }}>
                <p style={{ fontSize: '.85rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '4px' }}>{sector}</p>
                <p style={{ fontSize: '.8rem', color: '#4a4a4a', lineHeight: 1.5 }}>{cartiere}</p>
              </div>
            ))}
          </div>

          {/* DE CE NEOFORT */}
          <h2 className="font-condensed text-2xl font-semibold text-primary mb-6">{ui.why_title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px', marginBottom: '48px' }}>
            {ui.why.map(([title, desc], i) => (
              <div key={i} style={{ padding: '20px', border: '1px solid #e8e8e4', borderRadius: '6px', borderTop: '3px solid #4a7c59' }}>
                <p style={{ fontSize: '.88rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '6px' }}>{title}</p>
                <p style={{ fontSize: '.84rem', color: '#4a4a4a', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* PROCES */}
          <h2 className="font-condensed text-2xl font-semibold text-primary mb-6">{ui.process_title}</h2>
          <div style={{ border: '1px solid #e8e8e4', borderRadius: '6px', overflow: 'hidden', marginBottom: '48px' }}>
            {ui.process.map(([when, title, desc], i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', padding: '18px 20px', background: i % 2 === 0 ? '#fff' : '#f8f8f6', borderBottom: i < ui.process.length - 1 ? '1px solid #e8e8e4' : 'none', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '64px', fontSize: '.7rem', fontWeight: 700, color: '#4a7c59', textTransform: 'uppercase', letterSpacing: '.06em', paddingTop: '2px' }}>{when}</div>
                <div>
                  <p style={{ fontSize: '.88rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '3px' }}>{title}</p>
                  <p style={{ fontSize: '.83rem', color: '#4a4a4a', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <FaqAccordion items={ui.faq} title={ui.faq_title} />

          {/* SEE ALSO */}
          <div style={{ marginTop: '48px', padding: '24px', background: '#f8f8f6', borderRadius: '6px' }}>
            <p style={{ fontSize: '.84rem', color: '#404040', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '.08em' }}>{ui.see_also}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link href={`/${parentSlug}`} style={{ fontSize: '.88rem', color: '#4a7c59', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{ui.link_main}</Link>
              <span style={{ color: '#4a4a4a' }}>·</span>
              <Link href={`/${parentSlug}/preturi`} style={{ fontSize: '.88rem', color: '#4a7c59', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{ui.link_prices}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f4f4f1', padding: '64px 0' }}>
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-condensed text-3xl font-semibold text-primary mb-4">{ui.cta_h}</h2>
          <p style={{ fontSize: '.9rem', color: '#4a4a4a', marginBottom: '32px' }}>{ui.cta_sub}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', background: '#1a1a1a', color: '#fff', borderRadius: '6px', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}>{ui.cta_btn}</Link>
            <a href="tel:+40752443435" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', border: '2px solid #1a1a1a', color: '#1a1a1a', borderRadius: '6px', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}>{ui.cta_call} +40 752 443 435</a>
          </div>
        </div>
      </section>
    </>
  );
}
