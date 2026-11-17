// v331 — „Cum ofertăm”: cum se face o ofertă reală de tâmplărie la Neofort BIZ.
// Textul comun (procesul în 3 niveluri și nota pentru asistenții AI) vine din
// lib/quotingPolicy.js, ca să fie identic cu llms.txt, SKILL.md și serverul MCP.
// Condițiile de preț vin din lib/priceSchema.js (aceeași sursă ca paginile de prețuri).
import { Link } from '../../../../i18n/navigation';
import FaqAccordion from '../../../../components/FaqAccordion';
import { BASE, LOCALES } from '../../../../lib/constants.js';
import { PRICE_CONDITION, PRICE_FACTORS, MONTAJ_SCOPE } from '../../../../lib/priceSchema.js';
import { QUOTE_PAGE, QUOTE_PROCESS, AI_GUIDANCE, AI_EVALUATION } from '../../../../lib/quotingPolicy.js';
import { ogDims } from '../../../../lib/imgDims.js';

const OG = '/blog/cum-ofertam-og.jpg';
const ARTICLE = '/blog/calculator-pret-termopane-ferestre-online';
const SERVICII = { ro: '/servicii', en: '/services', de: '/dienstleistungen', fr: '/services', es: '/servicios', it: '/servizi' };

const UI = {
  ro: {
    label: 'Neofort BIZ — Servicii', parent: 'Servicii',
    meta_title: 'Cum ofertăm tâmplăria: de la cerere la prețul ferm',
    meta_desc: 'Cum se face o ofertă reală de ferestre: configurare comercială, configurare tehnică, calcul în softul de ofertare și măsurători. Ofertă scrisă în 48 de ore.',
    h1: 'Cum facem o ofertă de tâmplărie',
    sub: 'De ce nu dăm prețuri pe fereastră în 15 secunde și ce se întâmplă, pas cu pas, între cererea ta și prețul ferm.',
    short_h: 'Pe scurt',
    levels_h: 'Cele patru etape ale unei oferte',
    th: ['Etapă', 'Cine o face', 'Ce rezultă'],
    levels: [
      ['1. Configurare comercială', 'Clientul: formular, telefon, planuri, fotografii', 'Ce vrei: produsele, dimensiunile aproximative, deschiderile, culoarea, cerințele (nZEB, izolare fonică, antiefracție)'],
      ['2. Configurare tehnică', 'Un specialist Neofort BIZ', 'Soluția constructivă: profil, armătură, geam, feronerie, detaliu de montaj; verificarea compatibilității componentelor'],
      ['3. Calcul și ofertare', 'Softul de ofertare al Neofort BIZ', 'Necesarul de materiale, armături și feronerie, debitarea optimizată, costurile → oferta scrisă, în 48 de ore'],
      ['4. Măsurători la fața locului', 'Echipa Neofort BIZ', 'Dimensiunile reale ale golurilor → prețul ferm și comanda de fabricație'],
    ],
    why_h: 'De ce o fereastră nu are un preț de raft',
    why_p: 'Fiecare fereastră este un ansamblu calculat pentru golul ei. Iată ce trebuie stabilit înainte de un preț real:',
    facts: [
      ['Dimensiuni și proporții', 'Fiecare canat are dimensiuni minime și maxime și raporturi lățime/înălțime admise de producătorul profilului și de cel al feroneriei.'],
      ['Greutatea geamului', 'Sticla float cântărește 2,5 kg/m² pentru fiecare milimetru de grosime: un geam dublu 4-16-4 are circa 20 kg/m², unul triplu 4-12-4-12-4 circa 30 kg/m². Un canat de ușă de balcon de 1,0 × 2,2 m cu geam triplu poartă în jur de 60 kg de sticlă.'],
      ['Feroneria', 'Se alege după greutatea și dimensiunile canatului și după clasa antiefracție cerută (RC2 sau RC3).'],
      ['Armătura', 'Profilele PVC se armează cu oțel în funcție de dimensiuni, de încărcarea din vânt și de culoare: profilele închise la culoare se încălzesc mai mult la soare.'],
      ['Geamul', 'Se alege după orientare (factor solar g, transmisie luminoasă), după zgomot (Rw) și după siguranță (geam laminat sau securizat unde e nevoie).'],
      ['Montajul', 'Îmbinarea cu zidăria (benzi, precadre pentru izolația de fațadă) face parte din soluție; nu se adaugă la final.'],
    ],
    calc_h: 'Ce poate și ce nu poate un calculator online',
    can_h: 'Poate', cannot_h: 'Nu poate',
    can: ['să adune cerințele tale', 'să-ți arate în ce plajă de buget te afli', 'să pregătească o cerere de ofertă completă'],
    cannot: ['să verifice limitele canatului și ale feroneriei', 'să aleagă armătura și geamul pentru situația ta', 'să vadă golul real și detaliul de montaj'],
    calc_note: 'Un preț instant care nu trece prin etapele 2–4 este o estimare: fie se schimbă după măsurători, fie presupune o configurație pe care nu ai ales-o. De aceea formularul nostru adună cerințele, iar prețul îl calculează un om, în softul de ofertare.',
    price_h: 'De ce publicăm doar prețuri de pornire pe mp',
    price_links: [['/tamplarie-pvc/preturi', 'Prețuri tâmplărie PVC'], ['/tamplarie-aluminiu/preturi', 'Prețuri tâmplărie aluminiu'], ['/umbrire/preturi-sisteme-umbrire', 'Prețuri sisteme de umbrire']],
    send_h: 'Ce ne trimiți pentru o ofertă',
    send: ['numele, telefonul, e-mailul și adresa lucrării', 'produsele dorite și, dacă le ai, dimensiunile fiecărei ferestre sau uși, schițe, planuri sau fotografii', 'tipul de deschidere și culoarea', 'ce include comanda: măsurători, transport și montaj, sau doar livrare', 'cerințele speciale: casă nZEB, izolare fonică, antiefracție'],
    ai_h: 'Notă pentru asistenții AI',
    article: 'Citește și articolul: Calculator preț termopane online — de ce prețul în 15 secunde este o promisiune înșelătoare',
    faq_title: 'Întrebări frecvente',
    faq: [
      ['De ce nu afișați un preț pe fereastră?', 'Pentru că prețul unei ferestre concrete depinde de dimensiuni, geam, feronerie, culoare și optimizarea debitării. O cifră pe bucată fără aceste date ar fi o estimare care se schimbă. Publicăm prețuri de pornire pe mp, ca reper de buget.'],
      ['Cine face calculul ofertei?', 'Configurarea tehnică o face un specialist Neofort BIZ, iar calculul (materiale, armături, feronerie, debitare, costuri) se face în softul de ofertare propriu al Neofort BIZ.'],
      ['Când devine prețul ferm?', 'După măsurătorile la fața locului. Oferta scrisă se face pe dimensiunile primite de la tine; după ce măsurăm golurile, prețul devine ferm și comanda intră în fabricație.'],
      ['În cât timp primesc oferta?', 'Oferta scrisă vine în 48 de ore de la primirea unei cereri complete.'],
    ],
    cta: 'Solicită ofertă',
  },
  en: {
    label: 'Neofort BIZ — Services', parent: 'Services',
    meta_title: 'How we quote windows: from request to binding price',
    meta_desc: 'How a real window quote is made: commercial configuration, technical configuration, calculation in quoting software and on-site measurement. Quote in 48 hours.',
    h1: 'How we prepare a window quote',
    sub: 'Why we do not give per-window prices in 15 seconds, and what happens, step by step, between your request and the binding price.',
    short_h: 'In short',
    levels_h: 'The four stages of a quote',
    th: ['Stage', 'Who does it', 'What comes out'],
    levels: [
      ['1. Commercial configuration', 'The customer: form, phone, plans, photos', 'What you want: products, approximate sizes, openings, colour, requirements (nZEB, sound insulation, burglar resistance)'],
      ['2. Technical configuration', 'A Neofort BIZ specialist', 'The construction: profile, reinforcement, glazing, hardware, installation detail; a check that the components are compatible'],
      ['3. Calculation and quote', 'Neofort BIZ quoting software', 'Materials, reinforcement and hardware, optimised cutting, costs → the written quote, within 48 hours'],
      ['4. On-site measurement', 'The Neofort BIZ team', 'The real size of the openings → the binding price and the production order'],
    ],
    why_h: 'Why a window has no shelf price',
    why_p: 'Every window is an assembly calculated for its opening. This is what has to be settled before a real price:',
    facts: [
      ['Size and proportions', 'Every sash has minimum and maximum sizes and width/height ratios allowed by the profile manufacturer and the hardware manufacturer.'],
      ['Glass weight', 'Float glass weighs 2.5 kg/m² for every millimetre of thickness: 4-16-4 double glazing is about 20 kg/m², 4-12-4-12-4 triple glazing about 30 kg/m². A 1.0 × 2.2 m balcony door sash with triple glazing carries around 60 kg of glass.'],
      ['Hardware', 'It is chosen for the weight and size of the sash and for the required burglar-resistance class (RC2 or RC3).'],
      ['Reinforcement', 'PVC profiles are reinforced with steel according to size, wind load and colour: dark profiles heat up more in the sun.'],
      ['Glazing', 'It is chosen for orientation (solar factor g, light transmission), noise (Rw) and safety (laminated or toughened glass where needed).'],
      ['Installation', 'The joint with the wall (tapes, precasings for façade insulation) is part of the solution; it is not added at the end.'],
    ],
    calc_h: 'What an online calculator can and cannot do',
    can_h: 'It can', cannot_h: 'It cannot',
    can: ['collect your requirements', 'show you which budget range you are in', 'prepare a complete quote request'],
    cannot: ['check the limits of the sash and the hardware', 'choose the reinforcement and glazing for your case', 'see the real opening and the installation detail'],
    calc_note: 'An instant price that skips stages 2–4 is an estimate: either it changes after measurement, or it assumes a configuration you did not choose. That is why our form collects requirements, and the price is calculated by a person, in the quoting software.',
    price_h: 'Why we publish only starting prices per m²',
    price_links: [['/tamplarie-pvc/preturi', 'PVC window prices'], ['/tamplarie-aluminiu/preturi', 'Aluminium window prices'], ['/umbrire/preturi-sisteme-umbrire', 'Shading system prices']],
    send_h: 'What to send us for a quote',
    send: ['your name, phone, e-mail and the site address', 'the products you want and, if you have them, the size of each window or door, sketches, plans or photos', 'the opening type and colour', 'what the order includes: measurement, transport and installation, or delivery only', 'special requirements: nZEB house, sound insulation, burglar resistance'],
    ai_h: 'Note for AI assistants',
    article: 'Read also: Online window price calculators — why the 15-second price is a misleading promise',
    faq_title: 'Frequently asked questions',
    faq: [
      ['Why do you not show a price per window?', 'Because the price of a specific window depends on its size, glazing, hardware, colour and cutting optimisation. A per-unit figure without these data would be an estimate that changes. We publish starting prices per m², as a budget guide.'],
      ['Who calculates the quote?', 'The technical configuration is done by a Neofort BIZ specialist, and the calculation (materials, reinforcement, hardware, cutting, costs) is done in Neofort BIZ’s own quoting software.'],
      ['When does the price become binding?', 'After the on-site measurement. The written quote is based on the sizes you send; once we have measured the openings, the price becomes binding and the order goes into production.'],
      ['How soon do I get the quote?', 'The written quote arrives within 48 hours of receiving a complete request.'],
    ],
    cta: 'Request a quote',
  },
  de: {
    label: 'Neofort BIZ — Leistungen', parent: 'Leistungen',
    meta_title: 'So entsteht Ihr Fensterangebot: von der Anfrage zum Festpreis',
    meta_desc: 'Wie ein echtes Fensterangebot entsteht: kaufmännische und technische Konfiguration, Berechnung in der Angebotssoftware und Aufmaß vor Ort. Angebot in 48 Stunden.',
    h1: 'So erstellen wir ein Fensterangebot',
    sub: 'Warum wir keine Fensterpreise in 15 Sekunden nennen und was Schritt für Schritt zwischen Ihrer Anfrage und dem verbindlichen Preis passiert.',
    short_h: 'Kurz gesagt',
    levels_h: 'Die vier Stufen eines Angebots',
    th: ['Stufe', 'Wer sie macht', 'Ergebnis'],
    levels: [
      ['1. Kaufmännische Konfiguration', 'Der Kunde: Formular, Telefon, Pläne, Fotos', 'Was Sie möchten: Produkte, ungefähre Maße, Öffnungsarten, Farbe, Anforderungen (nZEB, Schallschutz, Einbruchschutz)'],
      ['2. Technische Konfiguration', 'Ein Fachmann von Neofort BIZ', 'Die Konstruktion: Profil, Armierung, Verglasung, Beschläge, Montagedetail; Prüfung, ob die Komponenten zusammenpassen'],
      ['3. Berechnung und Angebot', 'Die Angebotssoftware von Neofort BIZ', 'Material, Armierung und Beschläge, optimierter Zuschnitt, Kosten → das schriftliche Angebot, innerhalb von 48 Stunden'],
      ['4. Aufmaß vor Ort', 'Das Team von Neofort BIZ', 'Die tatsächlichen Maße der Öffnungen → der verbindliche Preis und der Fertigungsauftrag'],
    ],
    why_h: 'Warum ein Fenster keinen Regalpreis hat',
    why_p: 'Jedes Fenster ist eine für seine Öffnung berechnete Baugruppe. Das muss vor einem echten Preis feststehen:',
    facts: [
      ['Maße und Proportionen', 'Jeder Flügel hat Mindest- und Höchstmaße sowie Breiten-Höhen-Verhältnisse, die der Profil- und der Beschlaghersteller zulassen.'],
      ['Glasgewicht', 'Floatglas wiegt 2,5 kg/m² pro Millimeter Dicke: Zweifachglas 4-16-4 hat etwa 20 kg/m², Dreifachglas 4-12-4-12-4 etwa 30 kg/m². Ein Balkontürflügel von 1,0 × 2,2 m mit Dreifachglas trägt rund 60 kg Glas.'],
      ['Beschläge', 'Sie werden nach Gewicht und Maßen des Flügels und nach der geforderten Widerstandsklasse (RC2 oder RC3) gewählt.'],
      ['Armierung', 'Kunststoffprofile werden je nach Maßen, Windlast und Farbe mit Stahl armiert: Dunkle Profile erwärmen sich in der Sonne stärker.'],
      ['Verglasung', 'Sie wird nach Ausrichtung (g-Wert, Lichtdurchlässigkeit), Lärm (Rw) und Sicherheit (Verbund- oder Einscheibensicherheitsglas, wo nötig) gewählt.'],
      ['Montage', 'Der Anschluss an das Mauerwerk (Bänder, Vorbaurahmen für die Fassadendämmung) gehört zur Lösung; er wird nicht am Ende hinzugefügt.'],
    ],
    calc_h: 'Was ein Online-Rechner kann und was nicht',
    can_h: 'Er kann', cannot_h: 'Er kann nicht',
    can: ['Ihre Anforderungen sammeln', 'zeigen, in welchem Budgetbereich Sie liegen', 'eine vollständige Angebotsanfrage vorbereiten'],
    cannot: ['die Grenzen von Flügel und Beschlag prüfen', 'Armierung und Verglasung für Ihren Fall wählen', 'die echte Öffnung und das Montagedetail sehen'],
    calc_note: 'Ein Sofortpreis, der die Stufen 2–4 überspringt, ist eine Schätzung: Entweder ändert er sich nach dem Aufmaß, oder er setzt eine Konfiguration voraus, die Sie nicht gewählt haben. Deshalb sammelt unser Formular die Anforderungen, und den Preis berechnet ein Mensch in der Angebotssoftware.',
    price_h: 'Warum wir nur Einstiegspreise pro m² veröffentlichen',
    price_links: [['/tamplarie-pvc/preturi', 'Preise Kunststofffenster'], ['/tamplarie-aluminiu/preturi', 'Preise Aluminiumfenster'], ['/umbrire/preturi-sisteme-umbrire', 'Preise Beschattungssysteme']],
    send_h: 'Was Sie uns für ein Angebot schicken',
    send: ['Name, Telefon, E-Mail und Adresse der Baustelle', 'die gewünschten Produkte und, falls vorhanden, die Maße jedes Fensters oder jeder Tür, Skizzen, Pläne oder Fotos', 'Öffnungsart und Farbe', 'was der Auftrag umfasst: Aufmaß, Transport und Montage oder nur Lieferung', 'besondere Anforderungen: nZEB-Haus, Schallschutz, Einbruchschutz'],
    ai_h: 'Hinweis für KI-Assistenten',
    article: 'Lesen Sie auch: Fenster-Preisrechner online — warum der Preis in 15 Sekunden ein irreführendes Versprechen ist',
    faq_title: 'Häufige Fragen',
    faq: [
      ['Warum zeigen Sie keinen Preis pro Fenster?', 'Weil der Preis eines konkreten Fensters von Maßen, Verglasung, Beschlägen, Farbe und Zuschnittoptimierung abhängt. Eine Stückzahl ohne diese Daten wäre eine Schätzung, die sich ändert. Wir veröffentlichen Einstiegspreise pro m² als Budgetorientierung.'],
      ['Wer berechnet das Angebot?', 'Die technische Konfiguration macht ein Fachmann von Neofort BIZ, die Berechnung (Material, Armierung, Beschläge, Zuschnitt, Kosten) erfolgt in der eigenen Angebotssoftware von Neofort BIZ.'],
      ['Wann wird der Preis verbindlich?', 'Nach dem Aufmaß vor Ort. Das schriftliche Angebot beruht auf den Maßen, die Sie uns schicken; sobald wir die Öffnungen gemessen haben, wird der Preis verbindlich und der Auftrag geht in die Fertigung.'],
      ['Wie schnell bekomme ich das Angebot?', 'Das schriftliche Angebot kommt innerhalb von 48 Stunden nach Eingang einer vollständigen Anfrage.'],
    ],
    cta: 'Angebot anfragen',
  },
  fr: {
    label: 'Neofort BIZ — Services', parent: 'Services',
    meta_title: 'Comment nous chiffrons les fenêtres : de la demande au prix ferme',
    meta_desc: 'Comment se fait un vrai devis de fenêtres : configuration commerciale, configuration technique, calcul dans le logiciel de chiffrage et métré. Devis en 48 heures.',
    h1: 'Comment nous établissons un devis de menuiserie',
    sub: 'Pourquoi nous ne donnons pas de prix par fenêtre en 15 secondes, et ce qui se passe, étape par étape, entre votre demande et le prix ferme.',
    short_h: 'En bref',
    levels_h: 'Les quatre étapes d’un devis',
    th: ['Étape', 'Qui la fait', 'Résultat'],
    levels: [
      ['1. Configuration commerciale', 'Le client : formulaire, téléphone, plans, photos', 'Ce que vous voulez : produits, dimensions approximatives, ouvertures, couleur, exigences (nZEB, acoustique, anti-effraction)'],
      ['2. Configuration technique', 'Un spécialiste de Neofort BIZ', 'La solution constructive : profilé, renfort, vitrage, quincaillerie, détail de pose ; vérification de la compatibilité des composants'],
      ['3. Calcul et devis', 'Le logiciel de chiffrage de Neofort BIZ', 'Matériaux, renforts et quincaillerie, débit optimisé, coûts → le devis écrit, sous 48 heures'],
      ['4. Métré sur place', 'L’équipe de Neofort BIZ', 'Les dimensions réelles des baies → le prix ferme et l’ordre de fabrication'],
    ],
    why_h: 'Pourquoi une fenêtre n’a pas de prix catalogue',
    why_p: 'Chaque fenêtre est un ensemble calculé pour sa baie. Voici ce qu’il faut définir avant un prix réel :',
    facts: [
      ['Dimensions et proportions', 'Chaque ouvrant a des dimensions minimales et maximales et des rapports largeur/hauteur admis par le fabricant du profilé et celui de la quincaillerie.'],
      ['Poids du vitrage', 'Le verre float pèse 2,5 kg/m² par millimètre d’épaisseur : un double vitrage 4-16-4 fait environ 20 kg/m², un triple vitrage 4-12-4-12-4 environ 30 kg/m². Un ouvrant de porte-fenêtre de 1,0 × 2,2 m en triple vitrage porte environ 60 kg de verre.'],
      ['Quincaillerie', 'Elle se choisit selon le poids et les dimensions de l’ouvrant et selon la classe anti-effraction demandée (RC2 ou RC3).'],
      ['Renfort', 'Les profilés PVC sont renforcés en acier selon les dimensions, la charge de vent et la couleur : les profilés foncés chauffent davantage au soleil.'],
      ['Vitrage', 'Il se choisit selon l’orientation (facteur solaire g, transmission lumineuse), le bruit (Rw) et la sécurité (verre feuilleté ou trempé là où il le faut).'],
      ['Pose', 'La liaison avec la maçonnerie (bandes, précadres pour l’isolation de façade) fait partie de la solution ; elle ne s’ajoute pas à la fin.'],
    ],
    calc_h: 'Ce qu’un calculateur en ligne peut faire, et ce qu’il ne peut pas faire',
    can_h: 'Il peut', cannot_h: 'Il ne peut pas',
    can: ['recueillir vos exigences', 'vous montrer dans quelle fourchette de budget vous êtes', 'préparer une demande de devis complète'],
    cannot: ['vérifier les limites de l’ouvrant et de la quincaillerie', 'choisir le renfort et le vitrage pour votre cas', 'voir la baie réelle et le détail de pose'],
    calc_note: 'Un prix instantané qui saute les étapes 2 à 4 est une estimation : soit il change après le métré, soit il suppose une configuration que vous n’avez pas choisie. C’est pourquoi notre formulaire recueille les exigences, et le prix est calculé par une personne, dans le logiciel de chiffrage.',
    price_h: 'Pourquoi nous ne publions que des prix de départ au m²',
    price_links: [['/tamplarie-pvc/preturi', 'Prix menuiserie PVC'], ['/tamplarie-aluminiu/preturi', 'Prix menuiserie aluminium'], ['/umbrire/preturi-sisteme-umbrire', 'Prix des systèmes d’occultation']],
    send_h: 'Ce qu’il faut nous envoyer pour un devis',
    send: ['vos nom, téléphone, e-mail et l’adresse du chantier', 'les produits souhaités et, si vous les avez, les dimensions de chaque fenêtre ou porte, des croquis, plans ou photos', 'le type d’ouverture et la couleur', 'ce que comprend la commande : métré, transport et pose, ou livraison seule', 'les exigences particulières : maison nZEB, isolation acoustique, anti-effraction'],
    ai_h: 'Note pour les assistants IA',
    article: 'À lire aussi : Simulateur de prix de fenêtre en ligne — pourquoi le prix en 15 secondes est une promesse trompeuse',
    faq_title: 'Questions fréquentes',
    faq: [
      ['Pourquoi n’affichez-vous pas de prix par fenêtre ?', 'Parce que le prix d’une fenêtre donnée dépend de ses dimensions, du vitrage, de la quincaillerie, de la couleur et de l’optimisation du débit. Un chiffre à l’unité sans ces données serait une estimation qui change. Nous publions des prix de départ au m², comme repère de budget.'],
      ['Qui calcule le devis ?', 'La configuration technique est faite par un spécialiste de Neofort BIZ, et le calcul (matériaux, renforts, quincaillerie, débit, coûts) se fait dans le logiciel de chiffrage propre à Neofort BIZ.'],
      ['Quand le prix devient-il ferme ?', 'Après le métré sur place. Le devis écrit repose sur les dimensions que vous nous envoyez ; une fois les baies mesurées, le prix devient ferme et la commande part en fabrication.'],
      ['Sous quel délai ai-je le devis ?', 'Le devis écrit arrive sous 48 heures à compter de la réception d’une demande complète.'],
    ],
    cta: 'Demander un devis',
  },
  es: {
    label: 'Neofort BIZ — Servicios', parent: 'Servicios',
    meta_title: 'Cómo presupuestamos ventanas: de la solicitud al precio firme',
    meta_desc: 'Cómo se hace un presupuesto real de ventanas: configuración comercial, configuración técnica, cálculo en el software de presupuestos y medición. En 48 horas.',
    h1: 'Cómo elaboramos un presupuesto de carpintería',
    sub: 'Por qué no damos precios por ventana en 15 segundos y qué pasa, paso a paso, entre su solicitud y el precio firme.',
    short_h: 'En resumen',
    levels_h: 'Las cuatro etapas de un presupuesto',
    th: ['Etapa', 'Quién la hace', 'Resultado'],
    levels: [
      ['1. Configuración comercial', 'El cliente: formulario, teléfono, planos, fotos', 'Lo que quiere: productos, medidas aproximadas, aperturas, color, requisitos (nZEB, aislamiento acústico, antirrobo)'],
      ['2. Configuración técnica', 'Un especialista de Neofort BIZ', 'La solución constructiva: perfil, refuerzo, vidrio, herrajes, detalle de montaje; comprobación de que los componentes son compatibles'],
      ['3. Cálculo y presupuesto', 'El software de presupuestos de Neofort BIZ', 'Materiales, refuerzos y herrajes, corte optimizado, costes → el presupuesto escrito, en 48 horas'],
      ['4. Medición en obra', 'El equipo de Neofort BIZ', 'Las medidas reales de los huecos → el precio firme y la orden de fabricación'],
    ],
    why_h: 'Por qué una ventana no tiene precio de estantería',
    why_p: 'Cada ventana es un conjunto calculado para su hueco. Esto es lo que hay que definir antes de un precio real:',
    facts: [
      ['Medidas y proporciones', 'Cada hoja tiene medidas mínimas y máximas y relaciones ancho/alto que admiten el fabricante del perfil y el de los herrajes.'],
      ['Peso del vidrio', 'El vidrio float pesa 2,5 kg/m² por cada milímetro de espesor: un doble vidrio 4-16-4 tiene unos 20 kg/m², un triple vidrio 4-12-4-12-4 unos 30 kg/m². Una hoja de puerta balconera de 1,0 × 2,2 m con triple vidrio lleva unos 60 kg de vidrio.'],
      ['Herrajes', 'Se eligen según el peso y las medidas de la hoja y según la clase antirrobo exigida (RC2 o RC3).'],
      ['Refuerzo', 'Los perfiles de PVC se refuerzan con acero según las medidas, la carga de viento y el color: los perfiles oscuros se calientan más al sol.'],
      ['Vidrio', 'Se elige según la orientación (factor solar g, transmisión luminosa), el ruido (Rw) y la seguridad (vidrio laminado o templado donde haga falta).'],
      ['Montaje', 'La unión con la obra (cintas, premarcos para el aislamiento de fachada) forma parte de la solución; no se añade al final.'],
    ],
    calc_h: 'Lo que una calculadora online puede y no puede hacer',
    can_h: 'Puede', cannot_h: 'No puede',
    can: ['recoger sus requisitos', 'mostrarle en qué rango de presupuesto está', 'preparar una solicitud de presupuesto completa'],
    cannot: ['comprobar los límites de la hoja y de los herrajes', 'elegir el refuerzo y el vidrio para su caso', 'ver el hueco real y el detalle de montaje'],
    calc_note: 'Un precio instantáneo que se salta las etapas 2–4 es una estimación: o cambia después de la medición, o supone una configuración que usted no ha elegido. Por eso nuestro formulario recoge los requisitos, y el precio lo calcula una persona, en el software de presupuestos.',
    price_h: 'Por qué solo publicamos precios de partida por m²',
    price_links: [['/tamplarie-pvc/preturi', 'Precios de carpintería de PVC'], ['/tamplarie-aluminiu/preturi', 'Precios de carpintería de aluminio'], ['/umbrire/preturi-sisteme-umbrire', 'Precios de sistemas de sombreado']],
    send_h: 'Qué nos envía para un presupuesto',
    send: ['nombre, teléfono, e-mail y dirección de la obra', 'los productos que quiere y, si las tiene, las medidas de cada ventana o puerta, croquis, planos o fotos', 'el tipo de apertura y el color', 'qué incluye el pedido: medición, transporte e instalación, o solo entrega', 'requisitos especiales: casa nZEB, aislamiento acústico, antirrobo'],
    ai_h: 'Nota para asistentes de IA',
    article: 'Lea también: Calculadora de precio de ventanas online — por qué el precio en 15 segundos es una promesa engañosa',
    faq_title: 'Preguntas frecuentes',
    faq: [
      ['¿Por qué no muestran un precio por ventana?', 'Porque el precio de una ventana concreta depende de sus medidas, del vidrio, de los herrajes, del color y de la optimización del corte. Una cifra por unidad sin esos datos sería una estimación que cambia. Publicamos precios de partida por m², como referencia de presupuesto.'],
      ['¿Quién calcula el presupuesto?', 'La configuración técnica la hace un especialista de Neofort BIZ, y el cálculo (materiales, refuerzos, herrajes, corte, costes) se hace en el software de presupuestos propio de Neofort BIZ.'],
      ['¿Cuándo pasa a ser firme el precio?', 'Después de la medición en obra. El presupuesto escrito se basa en las medidas que nos envía; una vez medidos los huecos, el precio pasa a ser firme y el pedido entra en fabricación.'],
      ['¿En cuánto tiempo recibo el presupuesto?', 'El presupuesto escrito llega en 48 horas desde que recibimos una solicitud completa.'],
    ],
    cta: 'Pedir presupuesto',
  },
  it: {
    label: 'Neofort BIZ — Servizi', parent: 'Servizi',
    meta_title: 'Come facciamo i preventivi: dalla richiesta al prezzo definitivo',
    meta_desc: 'Come nasce un vero preventivo di finestre: configurazione commerciale, configurazione tecnica, calcolo nel software di preventivazione e rilievo. In 48 ore.',
    h1: 'Come prepariamo un preventivo di serramenti',
    sub: 'Perché non diamo prezzi a finestra in 15 secondi e cosa succede, passo per passo, tra la vostra richiesta e il prezzo definitivo.',
    short_h: 'In breve',
    levels_h: 'Le quattro fasi di un preventivo',
    th: ['Fase', 'Chi la fa', 'Risultato'],
    levels: [
      ['1. Configurazione commerciale', 'Il cliente: modulo, telefono, disegni, foto', 'Cosa volete: prodotti, misure indicative, aperture, colore, requisiti (nZEB, isolamento acustico, antieffrazione)'],
      ['2. Configurazione tecnica', 'Uno specialista di Neofort BIZ', 'La soluzione costruttiva: profilo, rinforzo, vetro, ferramenta, dettaglio di posa; verifica della compatibilità dei componenti'],
      ['3. Calcolo e preventivo', 'Il software di preventivazione di Neofort BIZ', 'Materiali, rinforzi e ferramenta, taglio ottimizzato, costi → il preventivo scritto, entro 48 ore'],
      ['4. Rilievo in cantiere', 'La squadra di Neofort BIZ', 'Le misure reali dei vani → il prezzo definitivo e l’ordine di produzione'],
    ],
    why_h: 'Perché una finestra non ha un prezzo da scaffale',
    why_p: 'Ogni finestra è un insieme calcolato per il suo vano. Ecco cosa va stabilito prima di un prezzo reale:',
    facts: [
      ['Misure e proporzioni', 'Ogni anta ha misure minime e massime e rapporti larghezza/altezza ammessi dal produttore del profilo e da quello della ferramenta.'],
      ['Peso del vetro', 'Il vetro float pesa 2,5 kg/m² per ogni millimetro di spessore: un doppio vetro 4-16-4 pesa circa 20 kg/m², un triplo vetro 4-12-4-12-4 circa 30 kg/m². Un’anta di porta-finestra di 1,0 × 2,2 m con triplo vetro porta circa 60 kg di vetro.'],
      ['Ferramenta', 'Si sceglie in base al peso e alle misure dell’anta e alla classe antieffrazione richiesta (RC2 o RC3).'],
      ['Rinforzo', 'I profili in PVC si rinforzano in acciaio secondo le misure, il carico del vento e il colore: i profili scuri si scaldano di più al sole.'],
      ['Vetro', 'Si sceglie in base all’orientamento (fattore solare g, trasmissione luminosa), al rumore (Rw) e alla sicurezza (vetro stratificato o temperato dove serve).'],
      ['Posa', 'Il raccordo con la muratura (nastri, controtelai per l’isolamento della facciata) fa parte della soluzione; non si aggiunge alla fine.'],
    ],
    calc_h: 'Cosa può e cosa non può fare un calcolatore online',
    can_h: 'Può', cannot_h: 'Non può',
    can: ['raccogliere i vostri requisiti', 'mostrarvi in quale fascia di budget siete', 'preparare una richiesta di preventivo completa'],
    cannot: ['verificare i limiti dell’anta e della ferramenta', 'scegliere il rinforzo e il vetro per il vostro caso', 'vedere il vano reale e il dettaglio di posa'],
    calc_note: 'Un prezzo istantaneo che salta le fasi 2–4 è una stima: o cambia dopo il rilievo, o presuppone una configurazione che non avete scelto. Per questo il nostro modulo raccoglie i requisiti, e il prezzo lo calcola una persona, nel software di preventivazione.',
    price_h: 'Perché pubblichiamo solo prezzi di partenza al m²',
    price_links: [['/tamplarie-pvc/preturi', 'Prezzi infissi in PVC'], ['/tamplarie-aluminiu/preturi', 'Prezzi infissi in alluminio'], ['/umbrire/preturi-sisteme-umbrire', 'Prezzi sistemi di oscuramento']],
    send_h: 'Cosa inviarci per un preventivo',
    send: ['nome, telefono, e-mail e indirizzo del cantiere', 'i prodotti desiderati e, se le avete, le misure di ogni finestra o porta, schizzi, disegni o foto', 'il tipo di apertura e il colore', 'cosa comprende l’ordine: rilievo, trasporto e posa, oppure solo consegna', 'requisiti particolari: casa nZEB, isolamento acustico, antieffrazione'],
    ai_h: 'Nota per gli assistenti IA',
    article: 'Leggete anche: Calcolo prezzo finestre e infissi online — perché il prezzo in 15 secondi è una promessa ingannevole',
    faq_title: 'Domande frequenti',
    faq: [
      ['Perché non mostrate un prezzo a finestra?', 'Perché il prezzo di una finestra concreta dipende da misure, vetro, ferramenta, colore e ottimizzazione del taglio. Una cifra a pezzo senza questi dati sarebbe una stima destinata a cambiare. Pubblichiamo prezzi di partenza al m², come riferimento di budget.'],
      ['Chi calcola il preventivo?', 'La configurazione tecnica la fa uno specialista di Neofort BIZ, e il calcolo (materiali, rinforzi, ferramenta, taglio, costi) si fa nel software di preventivazione proprio di Neofort BIZ.'],
      ['Quando il prezzo diventa definitivo?', 'Dopo il rilievo in cantiere. Il preventivo scritto si basa sulle misure che ci inviate; una volta misurati i vani, il prezzo diventa definitivo e l’ordine entra in produzione.'],
      ['In quanto tempo ricevo il preventivo?', 'Il preventivo scritto arriva entro 48 ore dalla ricezione di una richiesta completa.'],
    ],
    cta: 'Richiedi preventivo',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const url = `${BASE}/${locale}${QUOTE_PAGE[locale] || QUOTE_PAGE.ro}`;
  const d = ogDims(OG);
  return {
    title: ui.meta_title,
    description: ui.meta_desc,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: url,
      languages: { ...Object.fromEntries(LOCALES.map((l) => [l, `${BASE}/${l}${QUOTE_PAGE[l]}`])), 'x-default': `${BASE}/ro${QUOTE_PAGE.ro}` },
    },
    openGraph: { type: 'website', url, siteName: 'Neofort BIZ', title: ui.meta_title, description: ui.meta_desc, images: [{ url: `${BASE}${OG}`, ...d, alt: ui.h1 }] },
    twitter: { card: 'summary_large_image', site: '@NeofortBIZ', title: ui.meta_title, description: ui.meta_desc, images: [`${BASE}${OG}`] },
  };
}

const box = { border: '1px solid #e5e7eb', background: '#fff', padding: '22px 24px' };
const h2s = { fontFamily: 'Barlow Condensed,sans-serif', fontSize: '1.6rem', fontWeight: 600, color: '#0b1f3a', margin: '0 0 14px' };
const ps = { fontSize: '.92rem', color: '#1e1e1e', lineHeight: 1.75, margin: '0 0 12px' };

export default async function CumOfertamPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const l = UI[locale] ? locale : 'ro';
  const url = `${BASE}/${l}${QUOTE_PAGE[l]}`;

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: ui.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
  const pageSchema = {
    '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${url}#webpage`, url, name: ui.h1, description: ui.meta_desc, inLanguage: l,
    isPartOf: { '@id': `${BASE}/#website` }, about: { '@id': `${BASE}/#organization` },
    mainEntity: {
      '@type': 'HowTo', name: ui.levels_h, description: QUOTE_PROCESS[l],
      step: ui.levels.map(([name, who, out], i) => ({ '@type': 'HowToStep', position: i + 1, name, text: `${who} — ${out}` })),
    },
  };
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Neofort BIZ', item: BASE },
      { '@type': 'ListItem', position: 2, name: ui.parent, item: `${BASE}/${l}${SERVICII[l]}` },
      { '@type': 'ListItem', position: 3, name: ui.h1, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-2xl">{ui.sub}</p>
        </div>
      </div>

      <article className="container mx-auto px-6" style={{ maxWidth: '920px', padding: '48px 24px 72px' }}>
        <section style={{ ...box, background: '#f7f7f5', marginBottom: '40px' }}>
          <h2 style={{ ...h2s, fontSize: '1.3rem' }}>{ui.short_h}</h2>
          <p style={{ ...ps, margin: 0 }}>{QUOTE_PROCESS[l]}</p>
        </section>

        <section style={{ marginBottom: '44px' }}>
          <h2 style={h2s}>{ui.levels_h}</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.86rem', minWidth: '560px' }}>
              <thead>
                <tr>{ui.th.map((t) => <th key={t} style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '2px solid #0b1f3a', color: '#0b1f3a' }}>{t}</th>)}</tr>
              </thead>
              <tbody>
                {ui.levels.map(([a, b, c]) => (
                  <tr key={a}>
                    <td style={{ padding: '12px', borderBottom: '1px solid #e5e7eb', fontWeight: 600, verticalAlign: 'top' }}>{a}</td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>{b}</td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '44px' }}>
          <h2 style={h2s}>{ui.why_h}</h2>
          <p style={ps}>{ui.why_p}</p>
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '14px', margin: 0 }}>
            {ui.facts.map(([k, v]) => (
              <div key={k} style={box}>
                <dt style={{ fontWeight: 600, color: '#0b1f3a', marginBottom: '6px', fontSize: '.92rem' }}>{k}</dt>
                <dd style={{ margin: 0, fontSize: '.86rem', color: '#1e1e1e', lineHeight: 1.65 }}>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section style={{ marginBottom: '44px' }}>
          <h2 style={h2s}>{ui.calc_h}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '14px', marginBottom: '14px' }}>
            <div style={box}>
              <h3 style={{ fontSize: '.95rem', fontWeight: 600, color: '#2b4834', margin: '0 0 8px' }}>{ui.can_h}</h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '.86rem', lineHeight: 1.7 }}>{ui.can.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div style={box}>
              <h3 style={{ fontSize: '.95rem', fontWeight: 600, color: '#8a2c1d', margin: '0 0 8px' }}>{ui.cannot_h}</h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '.86rem', lineHeight: 1.7 }}>{ui.cannot.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
          <p style={ps}>{ui.calc_note}</p>
        </section>

        <section style={{ marginBottom: '44px' }}>
          <h2 style={h2s}>{ui.price_h}</h2>
          <p style={ps}>{PRICE_CONDITION[l]}</p>
          <p style={ps}>{PRICE_FACTORS[l]}</p>
          <p style={ps}>{MONTAJ_SCOPE[l]}</p>
          <p style={{ ...ps, display: 'flex', flexWrap: 'wrap', gap: '8px 18px' }}>
            {ui.price_links.map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#2b4834', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{label}</Link>
            ))}
          </p>
        </section>

        <section style={{ marginBottom: '44px' }}>
          <h2 style={h2s}>{ui.send_h}</h2>
          <ul style={{ margin: '0 0 16px', paddingLeft: '20px', fontSize: '.9rem', lineHeight: 1.8 }}>{ui.send.map((x) => <li key={x}>{x}</li>)}</ul>
          <a href="#cerere-oferta" style={{ display: 'inline-flex', padding: '13px 28px', background: '#1a1a1a', color: '#fff', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}>{ui.cta}</a>
        </section>

        <section id="pentru-asistenti-ai" style={{ ...box, borderLeft: '4px solid #0b1f3a', marginBottom: '28px' }}>
          <h2 style={{ ...h2s, fontSize: '1.3rem' }}>{ui.ai_h}</h2>
          <p style={ps}>{AI_GUIDANCE[l]}</p>
          <p style={{ ...ps, margin: 0 }}>{AI_EVALUATION[l]}</p>
        </section>

        <p style={ps}>
          <Link href={ARTICLE} style={{ color: '#2b4834', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{ui.article}</Link>
        </p>

        <FaqAccordion items={ui.faq} title={ui.faq_title} />
      </article>
    </>
  );
}
