import { Link } from '../../../../i18n/navigation';

import { BASE, LOCALES } from '../../../../lib/constants.js';
import { getGoogleRating } from '../../../../lib/googleRating.js';
const SLUGS = {
  ro: 'umbrire/preturi-sisteme-umbrire',
  en: 'shading-systems/shading-prices',
  de: 'beschattungssysteme/beschattung-preise',
  fr: 'systemes-occultation/prix-occultation',
  es: 'sistemas-sombreado/precios-sombreado',
  it: 'sistemi-oscuramento/prezzi-oscuramento',
};

const PARENT_SLUGS = {
  ro: 'umbrire', en: 'shading-systems',
  de: 'beschattungssysteme', fr: 'systemes-occultation',
  es: 'sistemas-sombreado', it: 'sistemi-oscuramento',
};

const UI = {
  "ro": {
    "h1": "Prețuri Sisteme Umbrire 2026 — Zipscreen, Raffstore, Rulouri Aluminiu",
    "sub": "Prețuri orientative 2026 pentru umbrire exterioară: Zipscreen, jaluzele Raffstore, rulouri din aluminiu și pergole Somfy. Ofertă în București și Ilfov.",
    "parent_label": "Sisteme Umbrire",
    "breadcrumb": "Prețuri 2026",
    "intro": "Prețul unui sistem de umbrire exterioară depinde de tipul produsului, dimensiuni, tipul de acționare și complexitatea montajului. Neofort BIZ furnizează și montează sisteme de umbrire premium în București și Ilfov. Toate prețurile de mai jos sunt orientative și nu includ TVA.",
    "h2_factors": "Factori care influențează prețul sistemelor de umbrire",
    "factors": [
      "Tipul sistemului — Zipscreen (rulou exterior cu ghidaje laterale) are un cost mai ridicat decât un rulou exterior standard datorită sistemului de ghidare care oferă rezistență la vânt.",
      "Dimensiunile golului — prețul crește proporțional cu lățimea și înălțimea golului. Sistemele mari necesită motorizare obligatorie.",
      "Tipul de acționare — manuală (manivelă sau curea) vs electrică (motor Somfy/Nice) vs Smart Home (KNX, io-homecontrol).",
      "Țesătura — screen (transparentă, filtrează 98% din radiația UV), blackout (opacă) sau perforată.",
      "Culoarea și finisajul — casetele și ghidajele din aluminiu pot fi vopsite în orice culoare RAL pentru a se armoniza cu tâmplăria.",
      "Montajul — ancoraj în zidărie, în toc de tâmplărie sau pe perete. Montajul pe tâmplărie existentă Salamander sau Alumil este posibil și recomandat."
    ],
    "h2_products": "Sisteme de umbrire disponibile la Neofort BIZ",
    "products": [
      {
        "name": "Zipscreen exterior",
        "desc": "Rulou textil exterior cu ghidaje laterale ZIP — rezistență la vânt clasa 6 (88 km/h). Ideal pentru terase și ferestre mari. Țesătură screen, blackout sau perforată.",
        "price": "225–300 €/mp manual · 350–450 €/mp cu motor · montaj inclus",
        "link": "/umbrire/zipscreen",
        "cta": "Detalii Zipscreen"
      },
      {
        "name": "Raffstore — jaluzele exterioare",
        "desc": "Jaluzele cu lamele din aluminiu orientabile 0°–90° — control fin al luminii, cu vederea spre exterior păstrată. Reduc aportul solar cu până la 85%.",
        "price": "150–200 €/mp cu motor · montaj inclus",
        "link": "/umbrire/jaluzele-venetiene-raffstore",
        "cta": "Detalii Raffstore"
      },
      {
        "name": "Rulouri exterioare aluminiu",
        "desc": "Rulouri cu lamele din aluminiu extrudat izolat, de 7,5–19,5 mm — izolare termică nocturnă și izolare fonică, antiefracție RC3 cu ghidaje securizate.",
        "price": "85–120 €/mp manual · 150–220 €/mp cu motor · montaj inclus",
        "link": "/umbrire/rulouri-exterioare-aluminiu",
        "cta": "Detalii Rulouri"
      },
      {
        "name": "Pergole automate Somfy",
        "desc": "Pergolă cu pânză retractabilă impermeabilă, structură din aluminiu și inox. Motor Somfy Pergola RGS io cu senzor de vânt Sunis — retragere automată peste 50 km/h.",
        "price": "6.000 € (4 × 3 m, motor Somfy) · montaj inclus",
        "link": "/umbrire/pergole-automate-somfy",
        "cta": "Detalii pergole Somfy"
      }
    ],
    "faq_h2": "Întrebări frecvente despre prețurile sistemelor de umbrire",
    "faq": [
      { "q": "Cât costă un sistem de umbrire exterioară în 2026?", "a": "Orientativ, rulourile exterioare din aluminiu costă 85–120 €/mp în varianta manuală și 150–220 €/mp cu motor, jaluzelele Raffstore cu motor 150–200 €/mp, iar Zipscreen-ul 225–300 €/mp manual și 350–450 €/mp cu motor, toate cu montaj inclus. O pergolă automată Somfy de 4 × 3 m costă 6.000 €, cu montaj inclus. Prețurile nu includ TVA." },
      { "q": "De ce sunt prețurile orientative și nu fixe?", "a": "Pentru că prețul final depinde de dimensiunea exactă a golului, de tipul de acționare, de țesătura aleasă și de felul montajului. De aceea oferta se face personalizat, iar măsurătorile la fața locului se efectuează după semnarea contractului." },
      { "q": "Ce sistem de umbrire rezistă cel mai bine la vânt?", "a": "Zipscreen-ul, datorită ghidajelor laterale ZIP care țin pânza fixată — are rezistență la vânt clasa 6 (88 km/h), deci este potrivit pentru terase și ferestre mari. Pergolele automate Somfy au senzor de vânt Sunis și se retrag singure peste 50 km/h." },
      { "q": "Pot monta sisteme de umbrire pe tâmplăria pe care o am deja?", "a": "Da. Montajul pe tâmplărie existentă Salamander sau Alumil este posibil și chiar recomandat. Ancorajul se face în zidărie, în tocul tâmplăriei sau pe perete, în funcție de situația de la fața locului." },
      { "q": "Când este obligatorie motorizarea?", "a": "La sistemele mari, unde acționarea manuală cu manivelă sau curea nu mai este practică. Variantele sunt motor Somfy sau Nice, iar dacă aveți instalație de casă inteligentă sistemul se poate integra prin KNX sau io-homecontrol. Un motor Somfy pentru rulou sau Zipscreen costă orientativ 110–150 € + TVA, iar unul pentru Raffstore 220–300 € + TVA, fără montaj." },
    ],
    "h2_cta": "Solicitați oferta personalizată",
    "cta_desc": "Echipa Neofort BIZ vă pregătește o ofertă detaliată pentru sistemul de umbrire potrivit. Măsurătorile la fața locului se fac după semnarea contractului. Montaj profesional în București și Ilfov.",
    "cta_btn": "Cerere ofertă umbrire",
    "guide_link": "Citește Ghidul Complet Sisteme Umbrire",
    "guide_slug": "umbrire/ghid-complet-sisteme-umbrire"
  },
  "en": {
    "h1": "Shading System Prices 2026 — Zipscreen, Raffstore, Aluminium Roller Shutters",
    "sub": "2026 indicative prices for exterior shading: Zipscreen, Raffstore venetian blinds, aluminium roller shutters and Somfy pergolas. Quote in Bucharest and Ilfov.",
    "parent_label": "Shading Systems",
    "breadcrumb": "Prices 2026",
    "intro": "The price of an exterior shading system depends on the product type, dimensions, actuation type and installation complexity. Neofort BIZ supplies and installs premium shading systems in Bucharest and Ilfov. All prices below are indicative and exclude VAT.",
    "h2_factors": "Factors Affecting Shading System Prices",
    "factors": [
      "System type — Zipscreen (exterior blind with side channels) costs more than a standard roller shutter due to its wind-resistant guide system.",
      "Opening dimensions — price increases proportionally with width and height. Large systems require motorisation.",
      "Actuation type — manual (crank or strap) vs electric (Somfy/Nice motor) vs Smart Home (KNX, io-homecontrol).",
      "Fabric — screen (transparent, filters 98% of UV radiation), blackout (opaque) or perforated.",
      "Colour and finish — aluminium casings and guides can be powder-coated in any RAL colour to match the joinery.",
      "Installation — anchored into masonry, into the window frame or on the wall. Installation on existing Salamander or Alumil joinery is possible and recommended."
    ],
    "h2_products": "Shading Systems Available at Neofort BIZ",
    "products": [
      {
        "name": "Zipscreen Exterior",
        "desc": "Exterior fabric blind with ZIP side guides — wind resistance class 6 (88 km/h). Ideal for terraces and large windows. Screen, blackout or perforated fabric.",
        "price": "€225–300/m² manual · €350–450/m² motorised · installation included",
        "link": "/shading-systems/zipscreen-exterior-blind",
        "cta": "Zipscreen Details"
      },
      {
        "name": "Raffstore — Exterior Venetian Blinds",
        "desc": "Aluminium slat blinds tilting 0°–90° — fine light control while keeping the view outside. They cut solar gain by up to 85%.",
        "price": "€150–200/m² motorised · installation included",
        "link": "/shading-systems/raffstore-venetian-blinds",
        "cta": "Raffstore Details"
      },
      {
        "name": "Aluminium Roller Shutters",
        "desc": "Shutters with insulated extruded aluminium slats, 7.5–19.5 mm — night-time thermal and sound insulation, RC3 burglar resistance with secured guides.",
        "price": "€85–120/m² manual · €150–220/m² motorised · installation included",
        "link": "/shading-systems/aluminium-external-roller-shutters",
        "cta": "Roller Shutter Details"
      },
      {
        "name": "Somfy Automatic Pergolas",
        "desc": "Pergola with retractable waterproof canvas, aluminium and stainless steel structure. Somfy Pergola RGS io motor with Sunis wind sensor — automatic retraction above 50 km/h.",
        "price": "€6,000 (4 × 3 m, Somfy motor) · installation included",
        "link": "/shading-systems/somfy-automatic-pergolas",
        "cta": "Somfy pergola details"
      }
    ],
    "faq_h2": "Frequently Asked Questions About Shading System Prices",
    "faq": [
      { "q": "How much does an exterior shading system cost in 2026?", "a": "As a guide, aluminium roller shutters cost €85–120/m² manual and €150–220/m² motorised, motorised Raffstore blinds €150–200/m², and Zipscreen €225–300/m² manual and €350–450/m² motorised, all with installation included. An automated Somfy pergola of 4 × 3 m costs €6,000, installation included. Prices exclude VAT." },
      { "q": "Why are the prices indicative rather than fixed?", "a": "Because the final price depends on the exact size of the opening, the drive type, the fabric chosen and how the system is mounted. The quote is therefore prepared individually, and on-site measurements are taken after the contract is signed." },
      { "q": "Which shading system stands up best to wind?", "a": "Zipscreen, because the ZIP side guides hold the fabric in place — it has class 6 wind resistance (88 km/h), which makes it suitable for terraces and large windows. Automated Somfy pergolas have a Sunis wind sensor and retract by themselves above 50 km/h." },
      { "q": "Can shading be fitted to windows I already have?", "a": "Yes. Fitting to existing Salamander or Alumil windows is possible and in fact recommended. The system is anchored into masonry, into the window frame or onto the wall, depending on the situation on site." },
      { "q": "When is motorisation required?", "a": "On large systems, where a crank or belt is no longer practical. The options are a Somfy or Nice motor, and if you have a smart home installation the system can be integrated via KNX or io-homecontrol. A Somfy motor for a roller shutter or Zipscreen costs roughly €110–150 + VAT, and one for a Raffstore blind €220–300 + VAT, excluding installation." },
    ],
    "h2_cta": "Request a Personalised Quote",
    "cta_desc": "The Neofort BIZ team will provide a detailed quote for the right shading system. On-site measurements are taken after the contract is signed. Professional installation in Bucharest and Ilfov.",
    "cta_btn": "Request Shading Quote",
    "guide_link": "Read the Complete Shading Systems Guide",
    "guide_slug": "shading-systems/complete-guide"
  },
  "de": {
    "h1": "Beschattungssysteme Preise 2026 — Zipscreen, Raffstore, Außenrollladen",
    "sub": "Richtpreise 2026 für Außenbeschattung: Zipscreen, Raffstore-Außenjalousien, Aluminium-Rollladen und Somfy-Pergolen. Angebot in Bukarest und Ilfov.",
    "parent_label": "Beschattungssysteme",
    "breadcrumb": "Preise 2026",
    "intro": "Der Preis eines Außenbeschattungssystems hängt vom Produkttyp, den Abmessungen, der Antriebsart und dem Montageaufwand ab. Alle Preise unten sind Richtwerte zzgl. MwSt.",
    "h2_factors": "Faktoren, die den Preis beeinflussen",
    "factors": [
      "Systemtyp — Zipscreen (Außenrollo mit Seitenführungen) kostet mehr als ein Standard-Außenrollladen.",
      "Öffnungsabmessungen — der Preis steigt proportional mit Breite und Höhe. Große Systeme erfordern Motorisierung.",
      "Antriebsart — manuell (Kurbel oder Gurt) vs elektrisch (Somfy/Nice Motor) vs Smart Home (KNX).",
      "Gewebe — Screen (durchsichtig, filtert 98 % der UV-Strahlung), Blackout (blickdicht) oder perforiert.",
      "Farbe und Finish — Aluminium-Kassetten und Führungen können in jeder RAL-Farbe beschichtet werden.",
      "Montage — Verankerung im Mauerwerk, im Fensterrahmen oder an der Wand."
    ],
    "h2_products": "Beschattungssysteme bei Neofort BIZ",
    "products": [
      {
        "name": "Zipscreen Außenrollo",
        "desc": "Textiles Außenrollo mit seitlichen ZIP-Führungen — Windwiderstand Klasse 6 (88 km/h). Ideal für Terrassen und große Fenster.",
        "price": "225–300 €/m² manuell · 350–450 €/m² mit Motor · Montage inklusive",
        "link": "/beschattungssysteme/zipscreen-aussenrollo",
        "cta": "Zipscreen Details"
      },
      {
        "name": "Raffstore Außenjalousien",
        "desc": "Aluminium-Lamellenjalousien, neigbar von 0° bis 90° — feine Lichtsteuerung bei erhaltener Sicht nach draußen. Senken den Solareintrag um bis zu 85 %.",
        "price": "150–200 €/m² mit Motor · Montage inklusive",
        "link": "/beschattungssysteme/raffstore-aussenjalousien",
        "cta": "Raffstore Details"
      },
      {
        "name": "Aluminium-Außenrollladen",
        "desc": "Rollladen mit Lamellen aus isoliertem stranggepresstem Aluminium, 7,5–19,5 mm — nächtliche Wärme- und Schalldämmung, Einbruchschutz RC3 mit gesicherten Führungen.",
        "price": "85–120 €/m² manuell · 150–220 €/m² mit Motor · Montage inklusive",
        "link": "/beschattungssysteme/aluminium-aussenrollladen",
        "cta": "Rollladen Details"
      },
      {
        "name": "Somfy automatische Pergolen",
        "desc": "Pergola mit wasserdichtem Rolltuch, Struktur aus Aluminium und Edelstahl. Somfy Pergola RGS io Motor mit Sunis-Windsensor — automatischer Einzug ab 50 km/h.",
        "price": "6.000 € (4 × 3 m, Somfy-Motor) · Montage inklusive",
        "link": "/beschattungssysteme/somfy-automatische-pergolen",
        "cta": "Details Somfy Pergolen"
      }
    ],
    "faq_h2": "Häufige Fragen zu den Preisen für Beschattungssysteme",
    "faq": [
      { "q": "Was kostet ein außenliegendes Beschattungssystem 2026?", "a": "Als Richtwert: Aluminium-Rollladen kosten 85–120 €/m² manuell und 150–220 €/m² mit Motor, Raffstore-Jalousien mit Motor 150–200 €/m², Zipscreen 225–300 €/m² manuell und 350–450 €/m² mit Motor, jeweils inklusive Montage. Eine automatisierte Somfy-Pergola von 4 × 3 m kostet 6.000 € inklusive Montage. Alle Preise zzgl. MwSt." },
      { "q": "Warum sind die Preise Richtwerte und keine Festpreise?", "a": "Weil der Endpreis von der genauen Öffnungsgröße, der Antriebsart, dem gewählten Gewebe und der Montageart abhängt. Das Angebot wird deshalb individuell erstellt; das Aufmaß vor Ort erfolgt nach Vertragsabschluss." },
      { "q": "Welches Beschattungssystem hält Wind am besten stand?", "a": "Der Zipscreen, da seitliche ZIP-Führungen das Gewebe fixieren — er hat Windwiderstandsklasse 6 (88 km/h) und eignet sich damit für Terrassen und große Fenster. Automatisierte Somfy-Pergolen haben einen Sunis-Windsensor und fahren ab 50 km/h selbsttätig ein." },
      { "q": "Kann Beschattung an vorhandenen Fenstern montiert werden?", "a": "Ja. Die Montage an bestehenden Salamander- oder Alumil-Fenstern ist möglich und sogar empfehlenswert. Verankert wird je nach Gegebenheit im Mauerwerk, im Fensterrahmen oder an der Wand." },
      { "q": "Wann ist eine Motorisierung erforderlich?", "a": "Bei großen Systemen, wo Kurbel oder Gurt nicht mehr praktikabel sind. Zur Wahl stehen Somfy- oder Nice-Motoren; bei vorhandener Smart-Home-Installation lässt sich das System über KNX oder io-homecontrol einbinden. Ein Somfy-Motor für Rollladen oder Zipscreen kostet etwa 110–150 € zzgl. MwSt., einer für Raffstore 220–300 € zzgl. MwSt., jeweils ohne Montage." },
    ],
    "h2_cta": "Personalisiertes Angebot anfordern",
    "cta_desc": "Das Neofort BIZ-Team erstellt ein detailliertes Angebot für das richtige Beschattungssystem. Das Aufmaß vor Ort erfolgt nach Vertragsabschluss.",
    "cta_btn": "Beschattungsangebot anfordern",
    "guide_link": "Kompletten Beschattungsratgeber lesen",
    "guide_slug": "beschattungssysteme/kompletter-ratgeber"
  },
  "fr": {
    "h1": "Prix des systèmes d'occultation 2026 — Zipscreen, Raffstore, Volets roulants",
    "sub": "Prix indicatifs 2026 de l'occultation extérieure : Zipscreen, brise-soleil Raffstore, volets roulants aluminium et pergolas Somfy. Devis à Bucarest et Ilfov.",
    "parent_label": "Systèmes d'occultation",
    "breadcrumb": "Prix 2026",
    "intro": "Le prix d'un système d'occultation extérieure dépend du type de produit, des dimensions, du type de commande et de la complexité de la pose. Tous les prix ci-dessous sont indicatifs et hors TVA.",
    "h2_factors": "Facteurs influençant le prix",
    "factors": [
      "Type de système — le Zipscreen (store toile à coulisses latérales ZIP) coûte plus qu'un volet roulant standard.",
      "Dimensions de l'ouverture — le prix augmente proportionnellement avec la largeur et la hauteur.",
      "Type de commande — manuel (manivelle) vs électrique (moteur Somfy/Nice) vs domotique (KNX).",
      "Toile — screen (transparente, filtre 98 % des UV), blackout (opaque) ou perforée.",
      "Couleur et finition — coffres et glissières aluminium laquables en toute couleur RAL.",
      "Pose — ancrage en maçonnerie, dans le dormant ou en appliqué sur mur."
    ],
    "h2_products": "Systèmes d'occultation chez Neofort BIZ",
    "products": [
      {
        "name": "Store Zipscreen extérieur",
        "desc": "Store toile extérieur à coulisses latérales ZIP — résistance au vent classe 6 (88 km/h). Idéal pour terrasses et grandes baies.",
        "price": "225–300 €/m² manuel · 350–450 €/m² motorisé · pose incluse",
        "link": "/systemes-occultation/zipscreen-store-exterieur",
        "cta": "Détails Zipscreen"
      },
      {
        "name": "Raffstore — Stores vénitiens",
        "desc": "Lames aluminium orientables de 0° à 90° — réglage fin de la lumière en gardant la vue sur l'extérieur. Réduisent les apports solaires jusqu'à 85 %.",
        "price": "150–200 €/m² motorisé · pose incluse",
        "link": "/systemes-occultation/stores-venitiens-raffstore",
        "cta": "Détails Raffstore"
      },
      {
        "name": "Volets roulants aluminium",
        "desc": "Volets à lames en aluminium extrudé isolé de 7,5 à 19,5 mm — isolation thermique nocturne et acoustique, anti-effraction RC3 avec guides sécurisés.",
        "price": "85–120 €/m² manuel · 150–220 €/m² motorisé · pose incluse",
        "link": "/systemes-occultation/volets-roulants-aluminium-exterieurs",
        "cta": "Détails Volets roulants"
      },
      {
        "name": "Pergolas automatiques Somfy",
        "desc": "Pergola à toile rétractable imperméable, structure aluminium et inox. Moteur Somfy Pergola RGS io avec capteur de vent Sunis — repli automatique au-delà de 50 km/h.",
        "price": "6 000 € (4 × 3 m, moteur Somfy) · pose incluse",
        "link": "/systemes-occultation/pergolas-automatiques-somfy",
        "cta": "Détails pergolas Somfy"
      }
    ],
    "faq_h2": "Questions fréquentes sur les prix des systèmes d'occultation",
    "faq": [
      { "q": "Combien coûte un système d'occultation extérieure en 2026 ?", "a": "À titre indicatif, les volets roulants en aluminium coûtent 85–120 €/m² en manuel et 150–220 €/m² motorisés, les brise-soleil Raffstore motorisés 150–200 €/m², et le Zipscreen 225–300 €/m² en manuel et 350–450 €/m² motorisé, pose incluse dans tous les cas. Une pergola automatisée Somfy de 4 × 3 m coûte 6 000 €, pose incluse. Les prix sont hors TVA." },
      { "q": "Pourquoi les prix sont-ils indicatifs et non fixes ?", "a": "Parce que le prix final dépend de la dimension exacte de la baie, du type de motorisation, de la toile choisie et du mode de pose. Le devis est donc établi au cas par cas, et la prise de mesures sur site intervient après la signature du contrat." },
      { "q": "Quel système d'occultation résiste le mieux au vent ?", "a": "Le Zipscreen, car ses coulisses latérales ZIP maintiennent la toile — il offre une résistance au vent de classe 6 (88 km/h), ce qui convient aux terrasses et aux grandes baies. Les pergolas automatisées Somfy disposent d'un capteur de vent Sunis et se rétractent d'elles-mêmes au-delà de 50 km/h." },
      { "q": "Peut-on poser une occultation sur des menuiseries déjà en place ?", "a": "Oui. La pose sur menuiseries Salamander ou Alumil existantes est possible et même recommandée. L'ancrage se fait dans la maçonnerie, dans le dormant ou sur le mur, selon la configuration." },
      { "q": "Quand la motorisation est-elle indispensable ?", "a": "Sur les grands systèmes, où la manivelle ou la sangle ne sont plus praticables. Les options sont un moteur Somfy ou Nice ; si vous disposez d'une installation domotique, le système s'intègre via KNX ou io-homecontrol. Un moteur Somfy pour volet roulant ou Zipscreen coûte environ 110–150 € HT, et un moteur pour Raffstore 220–300 € HT, hors pose." },
    ],
    "h2_cta": "Demander un devis personnalisé",
    "cta_desc": "L'équipe Neofort BIZ vous fournit un devis détaillé pour le système d'occultation adapté. La prise de mesures sur site intervient après la signature du contrat.",
    "cta_btn": "Demander un devis occultation",
    "guide_link": "Lire le guide complet des systèmes d'occultation",
    "guide_slug": "systemes-occultation/guide-complet"
  },
  "es": {
    "h1": "Precios sistemas de sombreado 2026 — Zipscreen, Raffstore, Persianas aluminio",
    "sub": "Precios orientativos 2026 de sombreado exterior: Zipscreen, venecianas Raffstore, persianas de aluminio y pérgolas Somfy. Presupuesto en Bucarest e Ilfov.",
    "parent_label": "Sistemas de sombreado",
    "breadcrumb": "Precios 2026",
    "intro": "El precio de un sistema de sombreado exterior depende del tipo de producto, las dimensiones, el tipo de accionamiento y la complejidad de la instalación. Todos los precios de abajo son orientativos y no incluyen IVA.",
    "h2_factors": "Factores que influyen en el precio",
    "factors": [
      "Tipo de sistema — el toldo Zipscreen (con guías laterales ZIP) cuesta más que una persiana enrollable estándar.",
      "Dimensiones del hueco — el precio aumenta proporcionalmente con el ancho y la altura.",
      "Tipo de accionamiento — manual (manivela) vs eléctrico (motor Somfy/Nice) vs domótica (KNX).",
      "Tejido — screen (transparente, filtra el 98 % de la radiación UV), blackout (opaco) o perforado.",
      "Color y acabado — cajones y guías de aluminio lacables en cualquier color RAL.",
      "Instalación — anclaje en mampostería, en el marco o en pared."
    ],
    "h2_products": "Sistemas de sombreado en Neofort BIZ",
    "products": [
      {
        "name": "Toldo Zipscreen exterior",
        "desc": "Toldo vertical exterior con guías laterales ZIP — resistencia al viento clase 6 (88 km/h). Ideal para terrazas y ventanales.",
        "price": "225–300 €/m² manual · 350–450 €/m² motorizado · instalación incluida",
        "link": "/sistemas-sombreado/zipscreen-toldo-exterior",
        "cta": "Detalles Zipscreen"
      },
      {
        "name": "Raffstore — Persianas venecianas",
        "desc": "Lamas de aluminio orientables de 0° a 90°: control preciso de la luz sin perder la vista al exterior. Reducen la ganancia solar hasta un 85 %.",
        "price": "150–200 €/m² motorizado · instalación incluida",
        "link": "/sistemas-sombreado/persianas-venecianas-raffstore",
        "cta": "Detalles Raffstore"
      },
      {
        "name": "Persianas de aluminio exteriores",
        "desc": "Persianas con lamas de aluminio extruido aislado de 7,5–19,5 mm: aislamiento térmico nocturno y acústico, antirrobo RC3 con guías seguras.",
        "price": "85–120 €/m² manual · 150–220 €/m² motorizado · instalación incluida",
        "link": "/sistemas-sombreado/persianas-exteriores-aluminio",
        "cta": "Detalles Persianas"
      },
      {
        "name": "Pérgolas automáticas Somfy",
        "desc": "Pérgola con lona retráctil impermeable, estructura de aluminio e inox. Motor Somfy Pergola RGS io con sensor de viento Sunis — recogida automática por encima de 50 km/h.",
        "price": "6.000 € (4 × 3 m, motor Somfy) · instalación incluida",
        "link": "/sistemas-sombreado/pergolas-automaticas-somfy",
        "cta": "Detalles pérgolas Somfy"
      }
    ],
    "faq_h2": "Preguntas frecuentes sobre los precios de los sistemas de sombreado",
    "faq": [
      { "q": "¿Cuánto cuesta un sistema de sombreado exterior en 2026?", "a": "De forma orientativa, las persianas de aluminio cuestan 85–120 €/m² en manual y 150–220 €/m² motorizadas, las venecianas Raffstore motorizadas 150–200 €/m², y el Zipscreen 225–300 €/m² en manual y 350–450 €/m² motorizado, siempre con instalación incluida. Una pérgola automatizada Somfy de 4 × 3 m cuesta 6.000 €, con instalación incluida. Los precios no incluyen IVA." },
      { "q": "¿Por qué los precios son orientativos y no cerrados?", "a": "Porque el precio final depende de la medida exacta del hueco, del tipo de accionamiento, del tejido elegido y de la forma de montaje. Por eso el presupuesto se elabora de forma personalizada, y la medición en obra se realiza tras la firma del contrato." },
      { "q": "¿Qué sistema de sombreado resiste mejor el viento?", "a": "El Zipscreen, porque las guías laterales ZIP mantienen el tejido sujeto: ofrece resistencia al viento de clase 6 (88 km/h), lo que lo hace adecuado para terrazas y ventanales. Las pérgolas automatizadas Somfy llevan sensor de viento Sunis y se repliegan solas por encima de 50 km/h." },
      { "q": "¿Se puede instalar sombreado sobre la carpintería que ya tengo?", "a": "Sí. El montaje sobre carpintería Salamander o Alumil existente es posible e incluso recomendable. El anclaje se realiza en la obra, en el marco de la ventana o en la pared, según la situación." },
      { "q": "¿Cuándo es obligatoria la motorización?", "a": "En sistemas grandes, donde la manivela o la cinta dejan de ser prácticas. Las opciones son motor Somfy o Nice; si dispone de instalación domótica, el sistema se integra mediante KNX o io-homecontrol. Un motor Somfy para persiana o Zipscreen cuesta unos 110–150 € + IVA, y uno para Raffstore 220–300 € + IVA, sin instalación." },
    ],
    "h2_cta": "Solicitar presupuesto personalizado",
    "cta_desc": "El equipo de Neofort BIZ le proporcionará un presupuesto detallado para el sistema de sombreado adecuado. Las mediciones en obra se realizan tras la firma del contrato.",
    "cta_btn": "Solicitar presupuesto sombreado",
    "guide_link": "Leer la guía completa de sistemas de sombreado",
    "guide_slug": "sistemas-sombreado/guia-completa"
  },
  "it": {
    "h1": "Prezzi sistemi di oscuramento 2026 — Zipscreen, Raffstore, Tapparelle alluminio",
    "sub": "Prezzi indicativi 2026 per l'oscuramento esterno: Zipscreen, frangisole Raffstore, tapparelle in alluminio e pergole Somfy. Preventivo a Bucarest e Ilfov.",
    "parent_label": "Sistemi di oscuramento",
    "breadcrumb": "Prezzi 2026",
    "intro": "Il prezzo di un sistema di oscuramento esterno dipende dal tipo di prodotto, dalle dimensioni, dal tipo di azionamento e dalla complessità dell'installazione. Tutti i prezzi qui sotto sono indicativi e IVA esclusa.",
    "h2_factors": "Fattori che influenzano il prezzo",
    "factors": [
      "Tipo di sistema — la tenda Zipscreen (con guide laterali ZIP) costa di più di una tapparella standard.",
      "Dimensioni dell'apertura — il prezzo aumenta proporzionalmente con larghezza e altezza.",
      "Tipo di azionamento — manuale (manovella) vs elettrico (motore Somfy/Nice) vs domotica (KNX).",
      "Tessuto — screen (trasparente, filtra il 98% dei raggi UV), blackout (oscurante) o perforato.",
      "Colore e finitura — cassonetti e guide in alluminio verniciabili in qualsiasi colore RAL.",
      "Installazione — ancoraggio in muratura, nel telaio o a parete."
    ],
    "h2_products": "Sistemi di oscuramento da Neofort BIZ",
    "products": [
      {
        "name": "Tenda Zipscreen esterna",
        "desc": "Tenda tecnica esterna con guide laterali ZIP — resistenza al vento classe 6 (88 km/h). Ideale per terrazze e grandi vetrate.",
        "price": "225–300 €/m² manuale · 350–450 €/m² motorizzato · posa inclusa",
        "link": "/sistemi-oscuramento/zipscreen-tenda-esterna",
        "cta": "Dettagli Zipscreen"
      },
      {
        "name": "Raffstore — Veneziane esterne",
        "desc": "Lamelle in alluminio orientabili da 0° a 90°: controllo fine della luce mantenendo la vista verso l'esterno. Riducono gli apporti solari fino all'85%.",
        "price": "150–200 €/m² motorizzato · posa inclusa",
        "link": "/sistemi-oscuramento/veneziane-raffstore",
        "cta": "Dettagli Raffstore"
      },
      {
        "name": "Tapparelle esterne in alluminio",
        "desc": "Tapparelle con lamelle in alluminio estruso isolato da 7,5 a 19,5 mm — isolamento termico notturno e acustico, antieffrazione RC3 con guide sicure.",
        "price": "85–120 €/m² manuale · 150–220 €/m² motorizzato · posa inclusa",
        "link": "/sistemi-oscuramento/tapparelle-esterne-alluminio",
        "cta": "Dettagli Tapparelle"
      },
      {
        "name": "Pergole automatiche Somfy",
        "desc": "Pergola con telo retrattile impermeabile, struttura in alluminio e inox. Motore Somfy Pergola RGS io con sensore vento Sunis — rientro automatico oltre 50 km/h.",
        "price": "6.000 € (4 × 3 m, motore Somfy) · posa inclusa",
        "link": "/sistemi-oscuramento/pergole-automatiche-somfy",
        "cta": "Dettagli pergole Somfy"
      }
    ],
    "faq_h2": "Domande frequenti sui prezzi dei sistemi di oscuramento",
    "faq": [
      { "q": "Quanto costa un sistema di oscuramento esterno nel 2026?", "a": "Indicativamente, le tapparelle in alluminio costano 85–120 €/m² manuali e 150–220 €/m² motorizzate, le veneziane Raffstore motorizzate 150–200 €/m², e lo Zipscreen 225–300 €/m² manuale e 350–450 €/m² motorizzato, sempre con posa inclusa. Una pergola automatizzata Somfy di 4 × 3 m costa 6.000 €, posa inclusa. I prezzi sono IVA esclusa." },
      { "q": "Perché i prezzi sono indicativi e non fissi?", "a": "Perché il prezzo finale dipende dalla misura esatta del vano, dal tipo di azionamento, dal tessuto scelto e dal tipo di posa. Il preventivo viene quindi redatto su misura e il rilievo in loco avviene dopo la firma del contratto." },
      { "q": "Quale sistema di oscuramento resiste meglio al vento?", "a": "Lo Zipscreen, perché le guide laterali ZIP trattengono il tessuto: ha una resistenza al vento di classe 6 (88 km/h) ed è quindi adatto a terrazze e grandi vetrate. Le pergole automatizzate Somfy hanno il sensore vento Sunis e si ritraggono da sole oltre i 50 km/h." },
      { "q": "È possibile installare l'oscuramento sugli infissi che ho già?", "a": "Sì. La posa su infissi Salamander o Alumil esistenti è possibile e anzi consigliata. L'ancoraggio avviene nella muratura, nel telaio della finestra o a parete, a seconda della situazione." },
      { "q": "Quando la motorizzazione è obbligatoria?", "a": "Sui sistemi di grandi dimensioni, dove manovella o cinghia non sono più pratiche. Le opzioni sono motore Somfy o Nice; con un impianto domotico il sistema si integra tramite KNX o io-homecontrol. Un motore Somfy per tapparella o Zipscreen costa circa 110–150 € + IVA, e uno per Raffstore 220–300 € + IVA, posa esclusa." },
    ],
    "h2_cta": "Richiedi un preventivo personalizzato",
    "cta_desc": "Il team Neofort BIZ fornirà un preventivo dettagliato per il sistema di oscuramento adeguato. Le misurazioni in loco avvengono dopo la firma del contratto.",
    "cta_btn": "Richiedi preventivo oscuramento",
    "guide_link": "Leggi la guida completa ai sistemi di oscuramento",
    "guide_slug": "sistemi-oscuramento/guida-completa"
  }
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
  // v288: "oferta personalizata" scos — regula din contextul proiectului interzice
  // "gratuit" in copy. Textul nu era vizibil pana acum (midTitle se calcula si
  // nu se randa); odata cu afisarea benzii ar fi devenit vizibil in 6 limbi.
  // ACELASI text exista si in celelalte patru pagini de ghid, unde banda ESTE
  // randata — acolo cuvantul e live de mult. De aliniat toate cinci.
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
    openGraph: { type: 'article', url: canonical, title: ui.h1, description: ui.sub, siteName: 'Neofort BIZ', images: [{ url: `${BASE}/og/Sisteme_de_umbrire__rulouri_exterioare__jaluzele_raffstore__jaluzele_venetiene.jpg`, width: 1200, height: 630, type:'image/jpeg' }] },
    twitter: { card: 'summary_large_image', site: '@NeofortBIZ', title: ui.h1, description: ui.sub, images: [`${BASE}/og/Sisteme_de_umbrire__rulouri_exterioare__jaluzele_raffstore__jaluzele_venetiene.jpg`] },
  };
}

export default async function UmbrirePreturiPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const waUrl = WA_URLS[locale] || WA_URLS.ro;
  const waLabel = WA_LABELS[locale] || WA_LABELS.ro;
  const midTitle = MID_TITLES[locale] || MID_TITLES.ro;
  const googleRating = await getGoogleRating();
  // v288: midTitle si midDesc sunt randate in banda de mijloc de mai jos,
  // identica cu cea din celelalte patru pagini de ghid. Pana acum se
  // calculau amandoua si nu se afisau niciodata.
  const midDesc = (MID_DESCS[locale] || MID_DESCS.ro)(googleRating);
  const parentSlug = PARENT_SLUGS[locale] || PARENT_SLUGS.ro;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    // v288: schema se construieste din FAQ-ul real de mai jos, randat vizibil
    // pe pagina. Pana acum se construia din ui.factors, cu intrebari generate
    // ca "Factor 1", "Factor 2" — adica eticheta unui element de lista trimisa
    // lui Google drept intrebare.
    mainEntity: ui.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };


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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>

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
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#9e6d16', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none' }}>
            {ui.cta_btn}
          </Link>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#188842', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {waLabel}
          </a>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 24px' }}>
        <p style={{ fontSize: '1.05rem', color: '#0d0d0d', lineHeight: 1.75, marginBottom: '48px', borderLeft: '3px solid #6a2d9e', paddingLeft: '20px' }}>
          {ui.intro}
        </p>

        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '20px' }}>
          {ui.h2_factors}
        </h2>
        <ul style={{ marginBottom: '48px', paddingLeft: '0', listStyle: 'none' }}>
          {ui.factors.map((f, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, width: '24px', height: '24px', background: '#6a2d9e', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px', marginTop: '2px' }}>{i+1}</span>
              <span style={{ fontSize: '.92rem', color: '#1e1e1e', lineHeight: 1.65 }}>{f}</span>
            </li>
          ))}
        </ul>

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

        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '24px' }}>
          {ui.h2_products}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: '20px', marginBottom: '56px' }}>
          {ui.products.map((prod, i) => (
            <div key={i} style={{ border: '1px solid #e8e8e4', padding: '24px', background: '#fafaf8' }}>
              <div style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '.9rem', letterSpacing: '.08em', textTransform: 'uppercase', color: '#15222e', marginBottom: '10px' }}>{prod.name}</div>
              <div style={{ fontSize: '.82rem', color: '#141414', lineHeight: 1.65, marginBottom: '16px' }}>{prod.desc}</div>
              {prod.price && (
                <div style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '.03em', color: '#0b1f3a', marginBottom: '16px' }}>{prod.price}</div>
              )}
              <Link href={prod.link} style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#2f1446', textDecoration: 'none', fontWeight: 600 }}>
                {prod.cta} &rarr;
              </Link>
            </div>
          ))}
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

        <div style={{ background: '#2d1a3a', padding: '40px 32px', textAlign: 'center', borderRadius: '2px' }}>
          <h3 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
            {ui.h2_cta}
          </h3>
          <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.6, marginBottom: '24px', maxWidth: '520px', margin: '0 auto 24px' }}>
            {ui.cta_desc}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', background: '#9e6d16', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '16px 32px', textDecoration: 'none' }}>
              {ui.cta_btn}
            </Link>
            <Link href={`/${ui.guide_slug}`} style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 500, fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '16px 32px', textDecoration: 'none', border: '1px solid rgba(255,255,255,.4)' }}>
              {ui.guide_link}
            </Link>
          </div>
        </div>
      </main>

    </>
  );
}