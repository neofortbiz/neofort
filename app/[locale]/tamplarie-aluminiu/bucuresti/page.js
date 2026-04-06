import { Link } from '../../../../i18n/navigation';
import FaqAccordion from '../../../../components/FaqAccordion';

const BASE = 'https://www.neofort-biz.ro';

const SLUGS = {
  ro: 'tamplarie-aluminiu/bucuresti',
  en: 'aluminium-windows/bucharest',
  de: 'aluminiumfenster/bukarest',
  fr: 'menuiserie-aluminium/bucarest',
  es: 'carpinteria-aluminio/bucarest',
  it: 'infissi-alluminio/bucarest',
};

const PARENT_SLUGS = {
  ro: 'tamplarie-aluminiu', en: 'aluminium-windows',
  de: 'aluminiumfenster',   fr: 'menuiserie-aluminium',
  es: 'carpinteria-aluminio', it: 'infissi-alluminio',
};

const LOCALES = ['ro','en','de','fr','es','it'];

const UI = {
  ro: {
    label: 'Tâmplărie Aluminiu · București',
    parent: 'Tâmplărie Aluminiu',
    h1: 'Tâmplărie Aluminiu București — Furnizare și Montaj Alumil în Sectoarele 1–6',
    sub: 'Neofort BIZ furnizează și montează tâmplărie aluminiu Alumil în București și Ilfov. Consultanță gratuită, măsurători la domiciliu, montaj certificat nZEB.',
    intro: 'Neofort BIZ este prezent în București din 2005, cu sediul în Sectorul 1 (Str. Theodor Aman Pictor 11). Furnizăm și montăm tâmplărie aluminiu Alumil în toate cele 6 sectoare ale Capitalei și în zona metropolitană Ilfov — cu echipe proprii de montaj, consultanți tehnici și servicii complete de la măsurători până la garanție post-montaj.',
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
    why_title: 'Tâmplărie Aluminiu în București | Neofort BIZ',
    why: [
      ['21 ani experiență', 'Prezență continuă în piața bucureșteană din 2005, cu sute de proiecte rezidențiale și comerciale finalizate în Capitală.'],
      ['Echipe proprii de montaj', 'Nu subcontractăm montajul — echipele noastre sunt instruite și certificate direct de Alumil pentru sisteme Supreme și Smartia.'],
      ['Consultanță tehnică gratuită', 'Inginer tehnic disponibil pentru consultanță privind alegerea sistemului, dimensionarea și calculul performanțelor termice.'],
      ['Măsurători la domiciliu gratuite', 'Deplasare gratuită în tot Bucureștiul și Ilfovul pentru măsurători, evaluare lucrare și elaborare ofertă detaliată.'],
      ['Montaj certificat nZEB', 'Folosim precadre Blaugelb Triotherm+ și benzi de etanșare pe 3 straturi — condiție necesară pentru autorizații noi și certificate energetice.'],
      ['Garanție 5 ani', 'Garanție completă pe profilul aluminiu, geam și montaj. Intervenție în 48 ore pentru orice solicitare post-montaj în București.'],
    ],
    process_title: 'Cum funcționează procesul în București',
    process: [
      ['Zi 1', 'Contact inițial', 'Suni sau trimiți cerere online. Specialist tehnic te contactează în maxim 2 ore (L–V, 10–18).'],
      ['Zi 2–3', 'Măsurători gratuite', 'Echipa vine la adresa ta pentru măsurători precise și consultanță privind sistemul recomandat.'],
      ['Zi 3–5', 'Ofertă detaliată', 'Primești oferta cu specificații complete, prețuri finale și termen de livrare.'],
      ['Zi 14–21', 'Producție', 'Tâmplăria este produsă în fabrica Alumil partenera pe baza măsurătorilor exacte.'],
      ['Zi 21–25', 'Montaj', 'Echipa noastră realizează montajul conform RAL și nZEB, cu toate benzile și precontrolatelaio.'],
      ['Post-montaj', 'Garanție și service', 'Control final, documentație tehnică, certificat de garanție și contact dedicat pentru orice solicitare.'],
    ],
    faq_title: 'Întrebări frecvente — tâmplărie aluminiu București',
    faq: [
      ['Cât durează montajul tâmplăriei aluminiu în București?', 'Un apartament standard (5–8 ferestre) se montează în 1–2 zile. O casă sau proiect mai mare necesită 3–5 zile. Programăm montajul la o dată convenabilă, fără a perturba activitățile zilnice.'],
      ['Faceți montaj și în afara Bucureștiului?', 'Da — montăm în toată România și livrăm în toată Europa. Pentru lucrări în afara zonei București–Ilfov, se adaugă costul de transport și cazare echipă, evaluat individual per proiect.'],
      ['Pot să comand tâmplărie aluminiu fără a fi prezent în București?', 'Da — pentru clienți din diaspora sau care nu pot fi prezenți, organizăm măsurătorile cu un reprezentant al clientului sau cu arhitectul de proiect. Comunicăm integral prin email și WhatsApp.'],
      ['Oferiți factură fiscală cu TVA?', 'Da, toate lucrările sunt facturate cu TVA 19%. Emitem factură fiscală și documentație completă pentru dosarul de autorizație sau certificat energetic.'],
    ],
    cta_h: 'Solicitați măsurători gratuite în București',
    cta_sub: 'Echipa noastră ajunge la adresa dvs. în 24–48 ore.',
    cta_btn: 'Cerere ofertă gratuită',
    cta_call: 'Sună acum',
    see_also: 'Vezi și',
    link_main: 'Tâmplărie Aluminiu Alumil — toate sistemele',
    link_prices: 'Prețuri tâmplărie aluminiu 2026',
  },
  en: {
    label: 'Aluminium Windows · Bucharest',
    parent: 'Aluminium Windows',
    h1: 'Aluminium Windows Bucharest — Alumil Supply and Installation in all Districts',
    sub: 'Neofort BIZ supplies and installs Alumil aluminium windows in Bucharest and Ilfov. Free consultation, home measurements, nZEB certified installation.',
    intro: 'Neofort BIZ has been present in Bucharest since 2005, headquartered in District 1 (Str. Theodor Aman Pictor 11). We supply and install Alumil aluminium windows across all 6 districts of the capital and the Ilfov metropolitan area — with our own installation teams, technical consultants and complete services from measurements to post-installation warranty.',
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
    why_title: 'Why choose Neofort BIZ for aluminium windows in Bucharest',
    why: [
      ['21 years experience', 'Continuous presence in the Bucharest market since 2005, with hundreds of residential and commercial projects completed in the capital.'],
      ['Own installation teams', 'We do not subcontract installation — our teams are trained and certified directly by Alumil for Supreme and Smartia systems.'],
      ['Free technical consultation', 'Technical engineer available for consultation on system selection, sizing and thermal performance calculation.'],
      ['Free home measurements', 'Free visit throughout Bucharest and Ilfov for measurements, project assessment and detailed quote.'],
      ['nZEB certified installation', 'We use Blaugelb Triotherm+ precasings and 3-layer sealing tapes — required for new building permits and energy certificates.'],
      ['5 year warranty', 'Full warranty on aluminium profile, glass and installation. 48-hour response for any post-installation request in Bucharest.'],
    ],
    process_title: 'How the process works in Bucharest',
    process: [
      ['Day 1', 'Initial contact', 'Call or send an online request. Technical specialist contacts you within 2 hours (Mon–Fri, 10–18).'],
      ['Day 2–3', 'Free measurements', 'Our team visits your address for precise measurements and consultation on the recommended system.'],
      ['Day 3–5', 'Detailed quote', 'You receive the quote with complete specifications, final prices and delivery schedule.'],
      ['Day 14–21', 'Production', 'Windows are manufactured at the partner Alumil factory based on exact measurements.'],
      ['Day 21–25', 'Installation', 'Our team carries out installation per RAL and nZEB standards, with all tapes and precasings.'],
      ['Post-install', 'Warranty & service', 'Final inspection, technical documentation, warranty certificate and dedicated contact for any request.'],
    ],
    faq_title: 'Frequently asked questions — aluminium windows Bucharest',
    faq: [
      ['How long does aluminium window installation take in Bucharest?', 'A standard apartment (5–8 windows) is installed in 1–2 days. A house or larger project requires 3–5 days. We schedule installation at a convenient date without disrupting daily activities.'],
      ['Do you install outside Bucharest?', 'Yes — we install throughout Romania and deliver across Europe. For projects outside the Bucharest–Ilfov area, transport and team accommodation costs are added, evaluated individually per project.'],
      ['Can I order without being present in Bucharest?', 'Yes — for diaspora clients or those who cannot be present, we organise measurements with a client representative or project architect. We communicate entirely by email and WhatsApp.'],
      ['Do you issue a VAT invoice?', 'Yes, all works are invoiced with 19% VAT. We issue fiscal invoice and complete documentation for permit or energy certificate files.'],
    ],
    cta_h: 'Request free measurements in Bucharest',
    cta_sub: 'Our team arrives at your address within 24–48 hours.',
    cta_btn: 'Request free quote',
    cta_call: 'Call now',
    see_also: 'See also',
    link_main: 'Alumil Aluminium Windows — all systems',
    link_prices: 'Aluminium window prices 2026',
  },
  de: {
    label: 'Aluminiumfenster · Bukarest',
    parent: 'Aluminiumfenster',
    h1: 'Aluminiumfenster Bukarest — Alumil Lieferung und Montage in allen Bezirken',
    sub: 'Neofort BIZ liefert und montiert Alumil-Aluminiumfenster in Bukarest und Ilfov. Kostenlose Beratung, Hausbesuche, nZEB-zertifizierter Einbau.',
    intro: 'Neofort BIZ ist seit 2005 in Bukarest präsent, mit Hauptsitz in Bezirk 1 (Str. Theodor Aman Pictor 11). Wir liefern und montieren Alumil-Aluminiumfenster in allen 6 Bezirken der Hauptstadt und im Ballungsraum Ilfov — mit eigenen Montageteams, technischen Beratern und kompletten Dienstleistungen von der Aufmaß bis zur Nachgarantie.',
    zones_title: 'Abdeckungsgebiete in Bukarest und Ilfov',
    zones: [
      ['Bezirk 1', 'Domenii, Floreasca, Aviatorilor, Dorobanți, Băneasa, Herăstrău'],
      ['Bezirk 2', 'Colentina, Pantelimon, Iancului, Obor, Floreasca'],
      ['Bezirk 3', 'Vitan, Titan, Balta Albă, Dudești, Dristor'],
      ['Bezirk 4', 'Berceni, Olteniței, Giurgiului, Văcărești'],
      ['Bezirk 5', 'Rahova, Ferentari, 13 Septembrie, Cotroceni'],
      ['Bezirk 6', 'Drumul Taberei, Militari, Giulești, Crângași'],
      ['Ilfov', 'Voluntari, Pipera, Otopeni, Snagov, Balotești, Bragadiru, Măgurele, Jilava'],
    ],
    why_title: 'Warum Neofort BIZ für Aluminiumfenster in Bukarest wählen',
    why: [
      ['21 Jahre Erfahrung', 'Kontinuierliche Präsenz auf dem Bukarester Markt seit 2005, mit Hunderten von abgeschlossenen Wohn- und Gewerbeprojekten.'],
      ['Eigene Montageteams', 'Wir vergeben keine Montageaufträge — unsere Teams sind direkt von Alumil für Supreme- und Smartia-Systeme zertifiziert.'],
      ['Kostenlose Fachberatung', 'Technischer Ingenieur für Systemauswahl, Dimensionierung und Berechnung der Wärmeleistung verfügbar.'],
      ['Kostenlose Hausaufnahmen', 'Kostenloser Besuch in ganz Bukarest und Ilfov für Aufmaße, Projektevaluierung und detailliertes Angebot.'],
      ['nZEB-zertifizierter Einbau', 'Wir verwenden Blaugelb Triotherm+ Vorfenster und 3-lagige Dichtbänder — erforderlich für neue Baugenehmigungen und Energieausweise.'],
      ['5 Jahre Garantie', 'Vollgarantie auf Aluminiumprofil, Glas und Einbau. 48-Stunden-Reaktion für alle Nachgarantieanfragen in Bukarest.'],
    ],
    process_title: 'Wie der Prozess in Bukarest funktioniert',
    process: [
      ['Tag 1', 'Erstkontakt', 'Anrufen oder Online-Anfrage senden. Fachspezialist meldet sich innerhalb von 2 Stunden (Mo–Fr, 10–18).'],
      ['Tag 2–3', 'Kostenlose Aufmaße', 'Unser Team besucht Ihre Adresse für präzise Aufmaße und Beratung zum empfohlenen System.'],
      ['Tag 3–5', 'Detailliertes Angebot', 'Sie erhalten das Angebot mit vollständigen Spezifikationen, Endpreisen und Lieferplan.'],
      ['Tag 14–21', 'Produktion', 'Fenster werden im Alumil-Partnerwerk nach exakten Aufmaßen gefertigt.'],
      ['Tag 21–25', 'Montage', 'Unser Team führt den Einbau nach RAL- und nZEB-Normen durch, mit allen Bändern und Vorfenstern.'],
      ['Nach Montage', 'Garantie & Service', 'Abnahme, technische Dokumentation, Garantieschein und fester Ansprechpartner für alle Anfragen.'],
    ],
    faq_title: 'Häufige Fragen — Aluminiumfenster Bukarest',
    faq: [
      ['Wie lange dauert die Aluminiumfenstermontage in Bukarest?', 'Eine Standardwohnung (5–8 Fenster) wird in 1–2 Tagen montiert. Ein Haus oder größeres Projekt benötigt 3–5 Tage. Wir planen die Montage auf einen günstigen Termin ohne Störung des Tagesablaufs.'],
      ['Montieren Sie auch außerhalb von Bukarest?', 'Ja — wir montieren in ganz Rumänien und liefern in ganz Europa. Für Projekte außerhalb des Gebiets Bukarest–Ilfov werden Transport- und Übernachtungskosten hinzugefügt, individuell pro Projekt bewertet.'],
      ['Kann ich bestellen ohne in Bukarest anwesend zu sein?', 'Ja — für Diaspora-Kunden organisieren wir Aufmaße mit einem Vertreter oder Projektarchitekten. Kommunikation vollständig per E-Mail und WhatsApp.'],
      ['Stellen Sie eine MwSt.-Rechnung aus?', 'Ja, alle Arbeiten werden mit 19% MwSt. fakturiert. Wir stellen Steuerrechnung und vollständige Dokumentation aus.'],
    ],
    cta_h: 'Kostenlose Aufnahme in Bukarest anfordern',
    cta_sub: 'Unser Team kommt innerhalb von 24–48 Stunden zu Ihnen.',
    cta_btn: 'Kostenloses Angebot',
    cta_call: 'Jetzt anrufen',
    see_also: 'Siehe auch',
    link_main: 'Alumil Aluminiumfenster — alle Systeme',
    link_prices: 'Aluminiumfenster Preise 2026',
  },
  fr: {
    label: 'Menuiserie Aluminium · Bucarest',
    parent: 'Menuiserie Aluminium',
    h1: 'Menuiserie Aluminium Bucarest — Fourniture et Pose Alumil dans tous les Arrondissements',
    sub: 'Neofort BIZ fournit et pose la menuiserie aluminium Alumil à Bucarest et Ilfov. Conseil gratuit, métrés à domicile, pose certifiée nZEB.',
    intro: "Neofort BIZ est présent à Bucarest depuis 2005, avec siège dans l'Arrondissement 1 (Str. Theodor Aman Pictor 11). Nous fournissons et posons la menuiserie aluminium Alumil dans les 6 arrondissements de la capitale et dans la zone métropolitaine d'Ilfov — avec nos propres équipes de pose, conseillers techniques et services complets des métrés à la garantie post-pose.",
    zones_title: 'Zones de couverture à Bucarest et Ilfov',
    zones: [
      ['Arrondissement 1', 'Domenii, Floreasca, Aviatorilor, Dorobanți, Băneasa, Herăstrău'],
      ['Arrondissement 2', 'Colentina, Pantelimon, Iancului, Obor, Floreasca'],
      ['Arrondissement 3', 'Vitan, Titan, Balta Albă, Dudești, Dristor'],
      ['Arrondissement 4', 'Berceni, Olteniței, Giurgiului, Văcărești'],
      ['Arrondissement 5', 'Rahova, Ferentari, 13 Septembre, Cotroceni'],
      ['Arrondissement 6', 'Drumul Taberei, Militari, Giulești, Crângași'],
      ['Ilfov', 'Voluntari, Pipera, Otopeni, Snagov, Balotești, Bragadiru, Măgurele, Jilava'],
    ],
    why_title: 'Pourquoi choisir Neofort BIZ pour la menuiserie aluminium à Bucarest',
    why: [
      ["21 ans d'expérience", 'Présence continue sur le marché bucarestois depuis 2005, avec des centaines de projets résidentiels et commerciaux réalisés dans la capitale.'],
      ['Équipes de pose propres', 'Nous ne sous-traitons pas la pose — nos équipes sont formées et certifiées directement par Alumil pour les systèmes Supreme et Smartia.'],
      ['Conseil technique gratuit', 'Ingénieur technique disponible pour le choix du système, le dimensionnement et le calcul des performances thermiques.'],
      ['Métrés gratuits à domicile', 'Déplacement gratuit dans tout Bucarest et Ilfov pour métrés, évaluation du chantier et devis détaillé.'],
      ['Pose certifiée nZEB', "Nous utilisons des précadres Blaugelb Triotherm+ et des bandes d'étanchéité 3 couches — requis pour les permis de construire et certificats énergétiques."],
      ['Garantie 5 ans', 'Garantie complète sur profilé aluminium, vitrage et pose. Intervention sous 48h pour toute demande post-pose à Bucarest.'],
    ],
    process_title: 'Comment fonctionne le processus à Bucarest',
    process: [
      ['Jour 1', 'Premier contact', 'Appelez ou envoyez une demande en ligne. Un spécialiste technique vous contacte sous 2 heures (Lun–Ven, 10–18).'],
      ['Jour 2–3', 'Métrés gratuits', 'Notre équipe se déplace à votre adresse pour des métrés précis et un conseil sur le système recommandé.'],
      ['Jour 3–5', 'Devis détaillé', 'Vous recevez le devis avec spécifications complètes, prix définitifs et calendrier de livraison.'],
      ['Jour 14–21', 'Production', "La menuiserie est fabriquée dans l'usine partenaire Alumil sur la base des métrés exacts."],
      ['Jour 21–25', 'Pose', 'Notre équipe réalise la pose selon les normes RAL et nZEB, avec toutes les bandes et précadres.'],
      ['Après pose', 'Garantie & service', 'Réception finale, documentation technique, certificat de garantie et contact dédié pour toute demande.'],
    ],
    faq_title: 'Questions fréquentes — menuiserie aluminium Bucarest',
    faq: [
      ['Combien de temps dure la pose de menuiserie aluminium à Bucarest ?', 'Un appartement standard (5–8 fenêtres) est posé en 1–2 jours. Une maison ou un projet plus grand nécessite 3–5 jours. Nous programmons la pose à une date convenant sans perturber les activités quotidiennes.'],
      ['Intervenez-vous hors de Bucarest ?', "Oui — nous posons dans toute la Roumanie et livrons dans toute l'Europe. Pour les chantiers hors zone Bucarest–Ilfov, les frais de transport et d'hébergement de l'équipe s'ajoutent, évalués individuellement."],
      ['Puis-je commander sans être présent à Bucarest ?', "Oui — pour les clients de la diaspora, nous organisons les métrés avec un représentant ou l'architecte du projet. Communication intégrale par e-mail et WhatsApp."],
      ['Émettez-vous une facture avec TVA ?', 'Oui, tous les travaux sont facturés avec 19% de TVA. Nous émettons une facture fiscale et une documentation complète.'],
    ],
    cta_h: 'Demandez des métrés gratuits à Bucarest',
    cta_sub: 'Notre équipe se déplace à votre adresse sous 24–48 heures.',
    cta_btn: 'Devis gratuit',
    cta_call: 'Appeler maintenant',
    see_also: 'Voir aussi',
    link_main: 'Menuiserie Aluminium Alumil — tous les systèmes',
    link_prices: 'Prix menuiserie aluminium 2026',
  },
  es: {
    label: 'Carpintería Aluminio · Bucarest',
    parent: 'Carpintería Aluminio',
    h1: 'Carpintería Aluminio Bucarest — Suministro e Instalación Alumil en todos los Distritos',
    sub: 'Neofort BIZ suministra e instala carpintería de aluminio Alumil en Bucarest e Ilfov. Consulta gratuita, mediciones a domicilio, instalación certificada nZEB.',
    intro: 'Neofort BIZ lleva presente en Bucarest desde 2005, con sede en el Distrito 1 (Str. Theodor Aman Pictor 11). Suministramos e instalamos carpintería de aluminio Alumil en los 6 distritos de la capital y en el área metropolitana de Ilfov — con nuestros propios equipos de instalación, consultores técnicos y servicios completos desde la medición hasta la garantía postventa.',
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
    why_title: 'Por qué elegir Neofort BIZ para carpintería de aluminio en Bucarest',
    why: [
      ['21 años de experiencia', 'Presencia continua en el mercado de Bucarest desde 2005, con cientos de proyectos residenciales y comerciales completados en la capital.'],
      ['Equipos de instalación propios', 'No subcontratamos la instalación — nuestros equipos están formados y certificados directamente por Alumil para sistemas Supreme y Smartia.'],
      ['Consulta técnica gratuita', 'Ingeniero técnico disponible para selección de sistema, dimensionamiento y cálculo de rendimiento térmico.'],
      ['Mediciones gratuitas a domicilio', 'Visita gratuita en todo Bucarest e Ilfov para mediciones, evaluación del proyecto y presupuesto detallado.'],
      ['Instalación certificada nZEB', 'Usamos premarcos Blaugelb Triotherm+ y cintas de sellado de 3 capas — necesarios para permisos de obra nuevos y certificados energéticos.'],
      ['Garantía 5 años', 'Garantía completa en perfil de aluminio, vidrio e instalación. Respuesta en 48 horas para cualquier solicitud postventa en Bucarest.'],
    ],
    process_title: 'Cómo funciona el proceso en Bucarest',
    process: [
      ['Día 1', 'Contacto inicial', 'Llame o envíe una solicitud online. Un especialista técnico le contacta en un máximo de 2 horas (Lun–Vie, 10–18).'],
      ['Día 2–3', 'Mediciones gratuitas', 'Nuestro equipo visita su dirección para mediciones precisas y asesoramiento sobre el sistema recomendado.'],
      ['Día 3–5', 'Presupuesto detallado', 'Recibe el presupuesto con especificaciones completas, precios finales y calendario de entrega.'],
      ['Día 14–21', 'Producción', 'La carpintería se fabrica en la fábrica partner de Alumil basándose en las mediciones exactas.'],
      ['Día 21–25', 'Instalación', 'Nuestro equipo realiza la instalación según normas RAL y nZEB, con todas las cintas y premarcos.'],
      ['Post-instalación', 'Garantía y servicio', 'Inspección final, documentación técnica, certificado de garantía y contacto dedicado para cualquier solicitud.'],
    ],
    faq_title: 'Preguntas frecuentes — carpintería aluminio Bucarest',
    faq: [
      ['¿Cuánto dura la instalación de carpintería de aluminio en Bucarest?', 'Un apartamento estándar (5–8 ventanas) se instala en 1–2 días. Una casa o proyecto más grande requiere 3–5 días. Programamos la instalación en una fecha conveniente sin interrumpir las actividades diarias.'],
      ['¿Instalan fuera de Bucarest?', 'Sí — instalamos en toda Rumanía y entregamos en toda Europa. Para proyectos fuera del área Bucarest–Ilfov, se añaden costes de transporte y alojamiento del equipo, evaluados individualmente.'],
      ['¿Puedo pedir sin estar presente en Bucarest?', 'Sí — para clientes de la diáspora, organizamos las mediciones con un representante del cliente o el arquitecto del proyecto. Comunicación íntegra por email y WhatsApp.'],
      ['¿Emiten factura con IVA?', 'Sí, todos los trabajos se facturan con 19% de IVA. Emitimos factura fiscal y documentación completa.'],
    ],
    cta_h: 'Solicite mediciones gratuitas en Bucarest',
    cta_sub: 'Nuestro equipo llega a su dirección en 24–48 horas.',
    cta_btn: 'Presupuesto gratuito',
    cta_call: 'Llamar ahora',
    see_also: 'Ver también',
    link_main: 'Carpintería Aluminio Alumil — todos los sistemas',
    link_prices: 'Precios carpintería aluminio 2026',
  },
  it: {
    label: 'Infissi Alluminio · Bucarest',
    parent: 'Infissi Alluminio',
    h1: 'Infissi Alluminio Bucarest — Fornitura e Posa Alumil in tutti i Settori',
    sub: 'Neofort BIZ fornisce e installa infissi in alluminio Alumil a Bucarest e Ilfov. Consulenza gratuita, rilievi a domicilio, posa certificata nZEB.',
    intro: "Neofort BIZ è presente a Bucarest dal 2005, con sede nel Settore 1 (Str. Theodor Aman Pictor 11). Forniamo e installiamo infissi in alluminio Alumil in tutti i 6 settori della capitale e nell'area metropolitana di Ilfov — con propri team di posa, consulenti tecnici e servizi completi dai rilievi alla garanzia post-posa.",
    zones_title: 'Zone di copertura a Bucarest e Ilfov',
    zones: [
      ['Settore 1', 'Domenii, Floreasca, Aviatorilor, Dorobanți, Băneasa, Herăstrău'],
      ['Settore 2', 'Colentina, Pantelimon, Iancului, Obor, Floreasca'],
      ['Settore 3', 'Vitan, Titan, Balta Albă, Dudești, Dristor'],
      ['Settore 4', 'Berceni, Olteniței, Giurgiului, Văcărești'],
      ['Settore 5', 'Rahova, Ferentari, 13 Septembrie, Cotroceni'],
      ['Settore 6', 'Drumul Taberei, Militari, Giulești, Crângași'],
      ['Ilfov', 'Voluntari, Pipera, Otopeni, Snagov, Balotești, Bragadiru, Măgurele, Jilava'],
    ],
    why_title: 'Perché scegliere Neofort BIZ per infissi in alluminio a Bucarest',
    why: [
      ['21 anni di esperienza', 'Presenza continua nel mercato di Bucarest dal 2005, con centinaia di progetti residenziali e commerciali completati nella capitale.'],
      ['Team di posa propri', 'Non subappaltiamo la posa — i nostri team sono formati e certificati direttamente da Alumil per i sistemi Supreme e Smartia.'],
      ['Consulenza tecnica gratuita', 'Ingegnere tecnico disponibile per la scelta del sistema, il dimensionamento e il calcolo delle prestazioni termiche.'],
      ['Rilievi gratuiti a domicilio', 'Sopralluogo gratuito in tutta Bucarest e Ilfov per rilievi, valutazione del lavoro e preventivo dettagliato.'],
      ['Posa certificata nZEB', "Utilizziamo precontrotelaio Blaugelb Triotherm+ e nastri di tenuta a 3 strati — necessari per nuovi permessi edilizi e certificati energetici."],
      ['Garanzia 5 anni', 'Garanzia completa su profilato in alluminio, vetro e posa. Intervento in 48 ore per qualsiasi richiesta post-posa a Bucarest.'],
    ],
    process_title: 'Come funziona il processo a Bucarest',
    process: [
      ['Giorno 1', 'Primo contatto', 'Chiamate o inviate una richiesta online. Uno specialista tecnico vi contatta entro 2 ore (Lun–Ven, 10–18).'],
      ['Giorno 2–3', 'Rilievi gratuiti', 'Il nostro team si reca al vostro indirizzo per rilievi precisi e consulenza sul sistema consigliato.'],
      ['Giorno 3–5', 'Preventivo dettagliato', 'Ricevete il preventivo con specifiche complete, prezzi definitivi e calendario di consegna.'],
      ['Giorno 14–21', 'Produzione', 'Gli infissi vengono prodotti nello stabilimento partner Alumil sulla base dei rilievi esatti.'],
      ['Giorno 21–25', 'Posa', 'Il nostro team esegue la posa secondo le norme RAL e nZEB, con tutti i nastri e precontrotelaio.'],
      ['Post-posa', 'Garanzia e servizio', 'Collaudo finale, documentazione tecnica, certificato di garanzia e contatto dedicato per qualsiasi richiesta.'],
    ],
    faq_title: 'Domande frequenti — infissi alluminio Bucarest',
    faq: [
      ['Quanto dura la posa di infissi in alluminio a Bucarest?', 'Un appartamento standard (5–8 finestre) viene installato in 1–2 giorni. Una casa o un progetto più grande richiede 3–5 giorni. Programmiamo la posa in una data conveniente senza disturbare le attività quotidiane.'],
      ['Installate anche fuori Bucarest?', "Sì — installiamo in tutta la Romania e consegniamo in tutta Europa. Per cantieri fuori dall'area Bucarest–Ilfov si aggiungono costi di trasporto e alloggio del team, valutati individualmente."],
      ['Posso ordinare senza essere presente a Bucarest?', "Sì — per clienti della diaspora, organizziamo i rilievi con un rappresentante del cliente o l'architetto del progetto. Comunicazione integrale via email e WhatsApp."],
      ['Emettete fattura con IVA?', 'Sì, tutti i lavori sono fatturati con IVA al 19%. Emettiamo fattura fiscale e documentazione completa.'],
    ],
    cta_h: 'Richiedete rilievi gratuiti a Bucarest',
    cta_sub: 'Il nostro team arriva al vostro indirizzo entro 24–48 ore.',
    cta_btn: 'Preventivo gratuito',
    cta_call: 'Chiama ora',
    see_also: 'Vedi anche',
    link_main: 'Infissi Alluminio Alumil — tutti i sistemi',
    link_prices: 'Prezzi infissi alluminio 2026',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const slug = SLUGS[locale] || SLUGS.ro;
  const parentSlug = PARENT_SLUGS[locale] || PARENT_SLUGS.ro;
  return {
    title: locale === 'ro' ? 'Tâmplărie Aluminiu București — Montaj Alumil Sectoarele 1–6, Ilfov | Neofort BIZ'
         : locale === 'en' ? 'Aluminium Windows Bucharest — Alumil Installation Districts 1–6, Ilfov | Neofort BIZ'
         : locale === 'de' ? 'Aluminiumfenster Bukarest — Alumil Montage Bezirke 1–6, Ilfov | Neofort BIZ'
         : locale === 'fr' ? 'Menuiserie Aluminium Bucarest — Pose Alumil Arrondissements 1–6, Ilfov | Neofort BIZ'
         : locale === 'es' ? 'Carpintería Aluminio Bucarest — Instalación Alumil Distritos 1–6, Ilfov | Neofort BIZ'
         : 'Infissi Alluminio Bucarest — Posa Alumil Settori 1–6, Ilfov | Neofort BIZ',
    description: locale === 'ro' ? 'Tâmplărie aluminiu Alumil în București — montaj toate sectoarele și Ilfov. Echipe certificate nZEB, măsurătoare gratuită, livrare rapidă.'
               : locale === 'en' ? 'Alumil aluminium windows in Bucharest — installation in all districts and Ilfov. Own nZEB-certified teams, free measurements, 5-year warranty. District 1, Voluntari, Pipera, Otopeni.'
               : locale === 'de' ? 'Alumil Aluminiumfenster in Bukarest — Montage in allen Bezirken und Ilfov. Eigene nZEB-zertifizierte Teams, kostenlose Aufmaße, 5 Jahre Garantie.'
               : locale === 'fr' ? 'Menuiserie aluminium Alumil à Bucarest — pose dans tous les arrondissements et Ilfov. Équipes propres certifiées nZEB, métrés gratuits, garantie 5 ans.'
               : locale === 'es' ? 'Carpintería aluminio Alumil en Bucarest — instalación en todos los distritos e Ilfov. Equipos propios certificados nZEB, mediciones gratuitas, garantía 5 años.'
               : 'Infissi alluminio Alumil a Bucarest — posa in tutti i settori e Ilfov. Team propri certificati nZEB, rilievi gratuiti, garanzia 5 anni.',
    keywords: locale === 'ro' ? 'tamplarie aluminiu bucuresti, montaj tamplarie aluminiu bucuresti, tamplarie aluminiu sector 1 bucuresti, alumil bucuresti, ferestre aluminiu bucuresti, montaj ferestre aluminiu bucuresti, tamplarie aluminiu ilfov, ferestre aluminiu voluntari pipera otopeni'
            : 'aluminium windows Bucharest, aluminium window installation Bucharest, Alumil Bucharest',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: Object.fromEntries([
        ...LOCALES.map(l => [l, `${BASE}/${l}/${SLUGS[l]}`]),
        ['x-default', `${BASE}/ro/${SLUGS.ro}`],
      ]),
    },
    openGraph: {
      type: 'article', url: `${BASE}/${locale}/${slug}`, siteName: 'Neofort BIZ',
      title: ui.h1, description: ui.sub,
      images: [{ url: `${BASE}/og/Tamplarie_Aluminiu_Alumil.jpg`, width: 1200, height: 630, alt: ui.h1, type: 'image/avif' }],
    },
  };
}

export default async function BucurestiPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const parentSlug = PARENT_SLUGS[locale] || PARENT_SLUGS.ro;
  const slug = SLUGS[locale] || SLUGS.ro;
  const pricesSlug = locale === 'ro' ? 'tamplarie-aluminiu/preturi'
                   : locale === 'en' ? 'aluminium-windows/prices'
                   : locale === 'de' ? 'aluminiumfenster/preise'
                   : locale === 'fr' ? 'menuiserie-aluminium/prix'
                   : locale === 'es' ? 'carpinteria-aluminio/precios'
                   : 'infissi-alluminio/prezzi';

  const schema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'Neofort BIZ', url: BASE,
    telephone: ['+40215280661', '+40752443435'],
    email: 'office@neofort-biz.ro',
    address: { '@type': 'PostalAddress', streetAddress: 'Str. Theodor Aman Pictor 11', addressLocality: 'București', addressRegion: 'Sector 1', postalCode: '010776', addressCountry: 'RO' },
    geo: { '@type': 'GeoCoordinates', latitude: 44.4429398, longitude: 26.0859381 },
    areaServed: [
      { '@type': 'City', name: 'București' },
      { '@type': 'AdministrativeArea', name: 'Ilfov' },
    ],
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '10:00', closes: '18:00' }],
    description: ui.sub,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Neofort BIZ', item: `${BASE}/${locale}` },
        { '@type': 'ListItem', position: 2, name: ui.parent, item: `${BASE}/${locale}/${parentSlug}` },
        { '@type': 'ListItem', position: 3, name: ui.h1, item: `${BASE}/${locale}/${slug}` },
      ],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title:ui.h1, description:ui.sub, images:[`${BASE}/og/Tamplarie_Aluminiu_Alumil.jpg`] },
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

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <p style={{ fontSize: '.92rem', color: '#4a4a4a', lineHeight: 1.8, marginBottom: '48px' }}>{ui.intro}</p>

          {/* ZONE */}
          <h2 className="font-condensed text-2xl font-semibold text-primary mb-6">{ui.zones_title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '12px', marginBottom: '48px' }}>
            {ui.zones.map(([zone, areas], i) => (
              <div key={i} style={{ padding: '16px', border: '1px solid #e8e8e4', borderRadius: '6px', borderLeft: '3px solid #2d5a8e' }}>
                <p style={{ fontSize: '.88rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '4px' }}>{zone}</p>
                <p style={{ fontSize: '.8rem', color: '#4a4a4a', lineHeight: 1.5 }}>{areas}</p>
              </div>
            ))}
          </div>

          {/* DE CE NOI */}
          <h2 className="font-condensed text-2xl font-semibold text-primary mb-6">{ui.why_title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px', marginBottom: '48px' }}>
            {ui.why.map(([title, desc], i) => (
              <div key={i} style={{ padding: '20px', border: '1px solid #e8e8e4', borderRadius: '6px', borderTop: '3px solid #2d5a8e' }}>
                <p style={{ fontSize: '.88rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '6px' }}>{title}</p>
                <p style={{ fontSize: '.84rem', color: '#4a4a4a', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* PROCES */}
          <h2 className="font-condensed text-2xl font-semibold text-primary mb-6">{ui.process_title}</h2>
          <div style={{ marginBottom: '48px' }}>
            {ui.process.map(([day, title, desc], i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', padding: '16px 0', borderBottom: i < ui.process.length - 1 ? '1px solid #e8e8e4' : 'none', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '80px', textAlign: 'right' }}>
                  <span style={{ fontSize: '.75rem', color: '#2d5a8e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em' }}>{day}</span>
                </div>
                <div>
                  <p style={{ fontSize: '.9rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '4px' }}>{title}</p>
                  <p style={{ fontSize: '.85rem', color: '#4a4a4a', lineHeight: 1.6 }}>{desc}</p>
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
              <Link href={`/${parentSlug}`} style={{ fontSize: '.88rem', color: '#2d5a8e', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{ui.link_main}</Link>
              <span style={{ color: '#4a4a4a' }}>·</span>
              <Link href={`/${pricesSlug}`} style={{ fontSize: '.88rem', color: '#2d5a8e', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{ui.link_prices}</Link>
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
