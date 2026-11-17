import { Link } from '../../../../i18n/navigation';
import FaqAccordion from '../../../../components/FaqAccordion';

import { BASE, LOCALES } from '../../../../lib/constants.js';
// v331: legatura spre pagina „Cum ofertăm” (lib/quotingPolicy.js)
const QUOTE_LINK = { ro:'Cum ofertăm: de la cerere la prețul ferm', en:'How we quote: from request to binding price', de:'So entsteht Ihr Angebot', fr:'Comment nous établissons un devis', es:'Cómo elaboramos el presupuesto', it:'Come prepariamo il preventivo' };
import { offerCatalogSchema } from '../../../../lib/priceSchema.js';
const SLUGS = {
  ro: 'tamplarie-aluminiu/preturi',
  en: 'aluminium-windows/prices',
  de: 'aluminiumfenster/preise',
  fr: 'menuiserie-aluminium/prix',
  es: 'carpinteria-aluminio/precios',
  it: 'infissi-alluminio/prezzi',
};

const PARENT_SLUGS = {
  ro: 'tamplarie-aluminiu', en: 'aluminium-windows',
  de: 'aluminiumfenster',   fr: 'menuiserie-aluminium',
  es: 'carpinteria-aluminio', it: 'infissi-alluminio',
};

const UI = {
  ro: {
    label: 'Tâmplărie Aluminiu · Neofort BIZ',
    parent: 'Tâmplărie Aluminiu',
    h1: 'Prețuri Tâmplărie Aluminiu 2026 — Ghid Complet pe Sisteme Alumil',
    sub: 'Prețuri actualizate 2026 pentru tâmplărie aluminiu cu barieră termică — de la ferestre standard la sisteme liftant-glisante și pereți cortină.',
    intro: 'Prețul tâmplăriei din aluminiu variază semnificativ în funcție de sistemul ales, dimensiunile ferestrelor și configurația finală. Această pagină centralizează prețurile orientative pentru toate sistemele Alumil comercializate de Neofort BIZ, actualizate pentru 2026.',
    table_title: 'Prețuri orientative pe sistem — 2026',
    th: ['Sistem', 'Categorie', 'Preț estimat / mp', 'Ideal pentru'],
    rows: [
      ['Alumil Smartia S67', 'Comercial', '250–350 EUR/mp', 'Locuințe, birouri standard'],
      ['Alumil Supreme S77', 'Premium', '350–480 EUR/mp', 'Locuințe nZEB, vile, antiefracție RC2/RC3'],
      ['Alumil Supreme SF85 (armonic)', 'Armonic premium', '350–500 EUR/mp', 'Terase folosite tot anul, deschidere totală'],
      ['Alumil M19800 Smartia (armonic)', 'Armonic', '280–400 EUR/mp', 'Terase și balcoane, deschidere totală'],
      ['Alumil S350 Smartia (glisant)', 'Glisant', '400–550 EUR/mp', 'Terase, living cu deschidere mare'],
      ['Alumil S700 Supreme (liftant-glisant)', 'Premium glisant', '550–750 EUR/mp', 'Terase panoramice, vile'],
      ['Pereți cortină Reynaers CW 50 / Alumil SMARTIA M50', 'Fațadă', '200–500 EUR/mp', 'Clădiri comerciale, fațade sticlă'],
      ['Uși de intrare aluminiu', 'Uși', '800–2.500 EUR/buc', 'Intrări rezidențiale și comerciale'],
    ],
    note: '* Prețurile includ profilul din aluminiu și geamul termopan. Montajul se ofertează separat. Transportul e inclus în București și Ilfov; în afara lor se taxează separat.',
    factors_title: 'Ce influențează prețul final',
    factors: [
      ['Sistemul de profil', 'Smartia (comercial) vs Supreme (premium) — diferență de 30–50% în prețul profilului'],
      ['Geamul termopan', 'Geam dublu standard vs tripan Low-E nZEB — diferență de 40–80 EUR/mp de vitrare'],
      ['Tipul de deschidere', 'Ferestre batante < culisante < liftant-glisante < armonice — complexitate crescătoare'],
      ['Culoarea RAL', 'Vopsire standard (7 culori) inclusă; culori RAL speciale adaugă 8–15% la prețul profilului'],
      ['Feroneria', 'Feronerie standard vs antiefracție RC2/RC3 — diferență de 50–150 EUR per fereastră'],
      ['Montajul', 'Montaj standard vs montaj nZEB cu precadre Blaugelb Triotherm+ și benzi etanșare — diferență de 30–60 EUR/ml'],
    ],
    cta_h: 'Solicitați ofertă personalizată',
    cta_sub: 'Prețul exact se stabilește după măsurătorile la fața locului, efectuate după semnarea contractului.',
    cta_btn: 'Cerere ofertă personalizată',
    cta_call: 'Sună acum',
    faq_title: 'Întrebări frecvente despre prețuri',
    faq: [
      ['Cât costă o fereastră din aluminiu?', 'Nu publicăm prețuri pe bucată, pentru că prețul unei ferestre concrete depinde de dimensiuni, de configurația geamului, de feronerie, de culoarea RAL și de optimizarea debitării. Ca reper, prețul de pornire este de 250–350 EUR/mp pentru Alumil SMARTIA S67 și 350–480 EUR/mp pentru SUPREME S77, fără TVA și fără montaj. Prețul exact îl primiți în oferta scrisă, în 48h.'],
      ['Care este prețul minim pentru tâmplărie aluminiu?', 'Prețul minim realist pentru tâmplărie aluminiu cu barieră termică este de 250 EUR/mp, fără TVA și fără montaj. Ofertele sub acest prag folosesc de regulă profile fără barieră termică, care compromit performanța termică și garanția.'],
      ['Cât costă o ușă glisantă din aluminiu?', 'Prețul de pornire este de 400–550 EUR/mp pentru ușile glisante Alumil S350 SMARTIA și de 550–750 EUR/mp pentru sistemul liftant-glisant S700 SUPREME, fără TVA și fără montaj. Motorizarea și montajul se ofertează separat.'],
      ['Prețul include TVA?', 'Nu. Prețurile orientative de pe această pagină sunt fără TVA (prețuri nete) și fără montaj. TVA-ul de 21% se adaugă la facturare, iar montajul se ofertează separat. Neofort BIZ emite factură fiscală pentru toate lucrările.'],
    ],
    see_also: 'Vezi și',
    link_main: 'Tâmplărie Aluminiu Alumil — toate sistemele',
    link_buc: 'Montaj tâmplărie aluminiu în București',
  },
  en: {
    label: 'Aluminium Windows · Neofort BIZ',
    parent: 'Aluminium Windows',
    h1: 'Aluminium Window Prices 2026 — Complete Guide by Alumil System',
    sub: 'Updated 2026 prices for thermal break aluminium windows — from standard frames to lift-and-slide systems and curtain walls.',
    intro: 'Aluminium window prices vary significantly depending on the system chosen, window dimensions and final configuration. This page consolidates indicative prices for all Alumil systems supplied by Neofort BIZ, updated for 2026.',
    table_title: 'Indicative prices by system — 2026',
    th: ['System', 'Category', 'Estimated price / m²', 'Ideal for'],
    rows: [
      ['Alumil Smartia S67', 'Commercial', '250–350 EUR/m²', 'Homes, standard offices'],
      ['Alumil Supreme S77', 'Premium', '350–480 EUR/m²', 'nZEB homes, villas, RC2/RC3 burglar resistance'],
      ['Alumil Supreme SF85 (folding)', 'Premium folding', '350–500 EUR/m²', 'Year-round terraces, full opening'],
      ['Alumil M19800 Smartia (folding)', 'Folding', '280–400 EUR/m²', 'Terraces and balconies, full opening'],
      ['Alumil S350 Smartia (sliding)', 'Sliding', '400–550 EUR/m²', 'Terraces, large living openings'],
      ['Alumil S700 Supreme (lift-slide)', 'Premium sliding', '550–750 EUR/m²', 'Panoramic terraces, villas'],
      ['Curtain wall Reynaers CW 50 / Alumil SMARTIA M50', 'Facade', '200–500 EUR/m²', 'Commercial buildings, glass facades'],
      ['Aluminium entrance doors', 'Doors', '800–2,500 EUR/unit', 'Residential and commercial entrances'],
    ],
    note: '* Prices include the aluminium profile and insulating glass. Installation is quoted separately. Transport is included in Bucharest and Ilfov; outside these areas it is charged separately.',
    factors_title: 'What influences the final price',
    factors: [
      ['Profile system', 'Smartia (commercial) vs Supreme (premium) — 30–50% difference in profile price'],
      ['Thermal glass', 'Standard double glazing vs triple Low-E nZEB — 40–80 EUR/m² glazing difference'],
      ['Opening type', 'Casement < sliding < lift-and-slide < folding — increasing complexity'],
      ['RAL colour', 'Standard coating (7 colours) included; special RAL colours add 8–15% to profile price'],
      ['Hardware', 'Standard vs anti-burglary RC2/RC3 — 50–150 EUR difference per window'],
      ['Installation', 'Standard vs nZEB with Blaugelb Triotherm+ precasings and sealing tapes — 30–60 EUR/ml difference'],
    ],
    cta_h: 'Request personalised quote',
    cta_sub: 'Exact price is set after the on-site measurements, taken once the contract is signed.',
    cta_btn: 'Request a quote',
    cta_call: 'Call now',
    faq_title: 'Frequently asked questions about prices',
    faq: [
      ['How much does an aluminium window cost?', 'We do not publish per-unit prices, because the price of a specific window depends on its size, the glazing, the hardware, the RAL colour and cutting optimisation. As a reference, the starting price is 250–350 EUR/m² for Alumil SMARTIA S67 and 350–480 EUR/m² for SUPREME S77, without VAT and without installation. You get the exact price in the written quote, within 48h.'],
      ['What is the minimum price for aluminium windows?', 'The realistic minimum price for thermal break aluminium windows is 250 EUR/m², without VAT and without installation. Offers below this level typically use profiles without a thermal break, which compromise thermal performance and warranty.'],
      ['How much does an aluminium sliding door cost?', 'The starting price is 400–550 EUR/m² for Alumil S350 SMARTIA sliding doors and 550–750 EUR/m² for the S700 SUPREME lift-and-slide system, without VAT and without installation. Motorisation and installation are quoted separately.'],
      ['Do prices include VAT?', 'No. Indicative prices on this page are without VAT (net prices) and without installation. 21% VAT is added on the invoice, and installation is quoted separately. Neofort BIZ issues a fiscal invoice for all work.'],
    ],
    see_also: 'See also',
    link_main: 'Alumil Aluminium Windows — all systems',
    link_buc: 'Aluminium window installation in Bucharest',
  },
  de: {
    label: 'Aluminiumfenster · Neofort BIZ',
    parent: 'Aluminiumfenster',
    h1: 'Aluminiumfenster Preise 2026 — Vollständiger Leitfaden nach Alumil-System',
    sub: 'Aktualisierte Preise 2026 für Aluminiumfenster mit thermischer Trennung — von Standardfenstern bis Hebeschiebetüren und Vorhangfassaden.',
    intro: 'Aluminiumfensterpreise variieren je nach gewähltem System, Fensterabmessungen und Endkonfiguration erheblich. Diese Seite fasst die Richtwerte für alle von Neofort BIZ vertriebenen Alumil-Systeme zusammen, aktualisiert für 2026.',
    table_title: 'Richtwerte nach System — 2026',
    th: ['System', 'Kategorie', 'Geschätzter Preis / m²', 'Ideal für'],
    rows: [
      ['Alumil Smartia S67', 'Kommerziell', '250–350 EUR/m²', 'Wohnungen, Standardbüros'],
      ['Alumil Supreme S77', 'Premium', '350–480 EUR/m²', 'nZEB-Wohnhäuser, Villen, Einbruchschutz RC2/RC3'],
      ['Alumil Supreme SF85 (Falttür)', 'Premium-Falttür', '350–500 EUR/m²', 'Ganzjährig genutzte Terrassen, volle Öffnung'],
      ['Alumil M19800 Smartia (Falt)', 'Falt', '280–400 EUR/m²', 'Terrassen und Balkone, volle Öffnung'],
      ['Alumil S350 Smartia (Schiebe)', 'Schiebe', '400–550 EUR/m²', 'Terrassen, große Wohnöffnungen'],
      ['Alumil S700 Supreme (Hebe-Schiebe)', 'Premium-Schiebe', '550–750 EUR/m²', 'Panoramaterrassen, Villen'],
      ['Vorhangfassade Reynaers CW 50 / Alumil SMARTIA M50', 'Fassade', '200–500 EUR/m²', 'Gewerbegebäude, Glasfassaden'],
      ['Aluminium-Eingangstüren', 'Türen', '800–2.500 EUR/Stk.', 'Wohn- und Gewerbeeingänge'],
    ],
    note: '* Preise inkl. Aluminiumprofil und Isolierglas. Die Montage wird separat angeboten. Transport in Bukarest und Ilfov inbegriffen, außerhalb wird er separat berechnet.',
    factors_title: 'Was den Endpreis beeinflusst',
    factors: [
      ['Profilsystem', 'Smartia (kommerziell) vs Supreme (premium) — 30–50% Unterschied im Profilpreis'],
      ['Isolierglas', 'Standard-Zweifachverglasung vs Dreifach-Low-E-nZEB — 40–80 EUR/m² Unterschied'],
      ['Öffnungstyp', 'Dreh-Kipp < Schiebe < Hebe-Schiebe < Falttür — zunehmende Komplexität'],
      ['RAL-Farbe', 'Standardlackierung (7 Farben) enthalten; spezielle RAL-Farben +8–15% auf Profilpreis'],
      ['Beschläge', 'Standard vs Einbruchschutz RC2/RC3 — 50–150 EUR Unterschied pro Fenster'],
      ['Einbau', 'Standard vs nZEB mit Blaugelb Triotherm+ Vorblendrahmen — 30–60 EUR/lm Unterschied'],
    ],
    cta_h: 'Persönliches Angebot anfordern',
    cta_sub: 'Genauer Preis nach dem Aufmaß vor Ort.',
    cta_btn: 'Persönliches Angebot',
    cta_call: 'Jetzt anrufen',
    faq_title: 'Häufige Fragen zu Preisen',
    faq: [
      ['Was kostet ein Aluminiumfenster?', 'Wir veröffentlichen keine Stückpreise, denn der Preis eines konkreten Fensters hängt von den Maßen, der Verglasung, den Beschlägen, der RAL-Farbe und der Zuschnittoptimierung ab. Als Richtwert liegt der Preis ab 250–350 EUR/m² für Alumil SMARTIA S67 und ab 350–480 EUR/m² für SUPREME S77, ohne MwSt. und ohne Montage. Den genauen Preis erhalten Sie im schriftlichen Angebot innerhalb von 48h.'],
      ['Was ist der Mindestpreis für Aluminiumfenster?', 'Der realistische Mindestpreis für Aluminiumfenster mit thermischer Trennung beträgt 250 EUR/m², ohne MwSt. und ohne Montage. Angebote darunter verwenden meist Profile ohne thermische Trennung, was Wärmedämmung und Garantie beeinträchtigt.'],
      ['Was kostet eine Aluminium-Schiebetür?', 'Der Preis beginnt bei 400–550 EUR/m² für Alumil S350 SMARTIA Schiebetüren und bei 550–750 EUR/m² für das Hebe-Schiebe-System S700 SUPREME, ohne MwSt. und ohne Montage. Motorisierung und Montage werden separat angeboten.'],
      ['Sind die Preise inkl. MwSt.?', 'Nein. Die Richtpreise auf dieser Seite sind netto (ohne MwSt.) und ohne Montage. Die MwSt. von 21% kommt auf der Rechnung hinzu, die Montage wird separat angeboten.'],
    ],
    see_also: 'Siehe auch',
    link_main: 'Alumil Aluminiumfenster — alle Systeme',
    link_buc: 'Aluminiumfenster Montage in Bukarest',
  },
  fr: {
    label: 'Menuiserie Aluminium · Neofort BIZ',
    parent: 'Menuiserie Aluminium',
    h1: 'Prix Menuiserie Aluminium 2026 — Guide Complet par Système Alumil',
    sub: 'Prix actualisés 2026 pour menuiserie aluminium à rupture de pont thermique — des fenêtres standard aux coulissants levants et murs-rideaux.',
    intro: "Les prix de la menuiserie aluminium varient considérablement selon le système choisi, les dimensions et la configuration finale. Cette page centralise les prix indicatifs pour tous les systèmes Alumil commercialisés par Neofort BIZ, mis à jour pour 2026.",
    table_title: 'Prix indicatifs par système — 2026',
    th: ['Système', 'Catégorie', 'Prix estimé / m²', 'Idéal pour'],
    rows: [
      ['Alumil Smartia S67', 'Commercial', '250–350 EUR/m²', 'Logements, bureaux standard'],
      ['Alumil Supreme S77', 'Premium', '350–480 EUR/m²', 'Logements nZEB, villas, anti-effraction RC2/RC3'],
      ['Alumil Supreme SF85 (pliant)', 'Pliant premium', '350–500 EUR/m²', 'Terrasses utilisées toute l’année, ouverture totale'],
      ['Alumil M19800 Smartia (pliant)', 'Pliant', '280–400 EUR/m²', 'Terrasses et balcons, ouverture totale'],
      ['Alumil S350 Smartia (coulissant)', 'Coulissant', '400–550 EUR/m²', 'Terrasses, grandes ouvertures séjour'],
      ['Alumil S700 Supreme (coulissant levant)', 'Premium coulissant', '550–750 EUR/m²', 'Terrasses panoramiques, villas'],
      ['Mur-rideau Reynaers CW 50 / Alumil SMARTIA M50', 'Façade', '200–500 EUR/m²', 'Bâtiments commerciaux, façades vitrées'],
      ["Portes d'entrée aluminium", 'Portes', '800–2.500 EUR/unité', 'Entrées résidentielles et commerciales'],
    ],
    note: '* Prix incluant le profilé aluminium et le vitrage isolant. La pose fait l\'objet d\'un devis séparé. Transport inclus à Bucarest et dans l\'Ilfov ; au-delà, facturé séparément.',
    factors_title: 'Ce qui influence le prix final',
    factors: [
      ['Système de profilé', 'Smartia (commercial) vs Supreme (premium) — 30–50% de différence sur le profilé'],
      ['Vitrage isolant', 'Double vitrage standard vs triple Low-E nZEB — 40–80 EUR/m² de différence'],
      ["Type d'ouverture", 'Battant < coulissant < coulissant levant < pliant — complexité croissante'],
      ['Couleur RAL', 'Laquage standard (7 couleurs) inclus ; RAL spéciaux +8–15% sur le profilé'],
      ['Quincaillerie', 'Standard vs antieffraction RC2/RC3 — 50–150 EUR de différence par fenêtre'],
      ['Pose', 'Standard vs nZEB avec précadres Blaugelb Triotherm+ — 30–60 EUR/ml de différence'],
    ],
    cta_h: 'Demandez un devis personnalisé',
    cta_sub: 'Prix exact déterminé après les métrés sur site, réalisés une fois le contrat signé.',
    cta_btn: 'Devis personnalisé',
    cta_call: 'Appeler maintenant',
    faq_title: 'Questions fréquentes sur les prix',
    faq: [
      ["Combien coûte une fenêtre en aluminium ?", 'Nous ne publions pas de prix à l\'unité, car le prix d\'une fenêtre donnée dépend de ses dimensions, du vitrage, de la quincaillerie, de la couleur RAL et de l\'optimisation de la découpe. À titre de repère, le prix de départ est de 250–350 EUR/m² pour Alumil SMARTIA S67 et de 350–480 EUR/m² pour SUPREME S77, hors TVA et hors pose. Le prix exact figure dans le devis écrit, sous 48h.'],
      ["Quel est le prix minimum pour la menuiserie aluminium ?", 'Le prix minimum réaliste pour des fenêtres aluminium à rupture de pont thermique est de 250 EUR/m², hors TVA et hors pose. Les offres en dessous utilisent en général des profilés sans rupture de pont thermique, ce qui compromet la performance thermique et la garantie.'],
      ["Combien coûte une porte coulissante aluminium ?", 'Le prix de départ est de 400–550 EUR/m² pour les portes coulissantes Alumil S350 SMARTIA et de 550–750 EUR/m² pour le système coulissant levant S700 SUPREME, hors TVA et hors pose. La motorisation et la pose font l\'objet d\'un devis séparé.'],
      ["Les prix incluent-ils la TVA ?", 'Non. Les prix indicatifs sont hors TVA et hors pose. La TVA de 21% s\'ajoute à la facturation et la pose fait l\'objet d\'un devis séparé.'],
    ],
    see_also: 'Voir aussi',
    link_main: 'Menuiserie Aluminium Alumil — tous les systèmes',
    link_buc: 'Pose menuiserie aluminium à Bucarest',
  },
  es: {
    label: 'Carpintería Aluminio · Neofort BIZ',
    parent: 'Carpintería Aluminio',
    h1: 'Precios Carpintería Aluminio 2026 — Guía Completa por Sistema Alumil',
    sub: 'Precios actualizados 2026 para carpintería de aluminio con rotura de puente térmico — desde ventanas estándar hasta correderas elevables y muros cortina.',
    intro: 'Los precios de la carpintería de aluminio varían considerablemente según el sistema elegido, las dimensiones y la configuración final. Esta página centraliza los precios orientativos para todos los sistemas Alumil comercializados por Neofort BIZ, actualizados para 2026.',
    table_title: 'Precios orientativos por sistema — 2026',
    th: ['Sistema', 'Categoría', 'Precio estimado / m²', 'Ideal para'],
    rows: [
      ['Alumil Smartia S67', 'Comercial', '250–350 EUR/m²', 'Viviendas, oficinas estándar'],
      ['Alumil Supreme S77', 'Premium', '350–480 EUR/m²', 'Viviendas nZEB, chalets, antirrobo RC2/RC3'],
      ['Alumil Supreme SF85 (plegable)', 'Plegable premium', '350–500 EUR/m²', 'Terrazas de uso todo el año, apertura total'],
      ['Alumil M19800 Smartia (plegable)', 'Plegable', '280–400 EUR/m²', 'Terrazas y balcones, apertura total'],
      ['Alumil S350 Smartia (corredera)', 'Corredera', '400–550 EUR/m²', 'Terrazas, grandes aperturas salón'],
      ['Alumil S700 Supreme (elev. corredera)', 'Premium corredera', '550–750 EUR/m²', 'Terrazas panorámicas, villas'],
      ['Muro cortina Reynaers CW 50 / Alumil SMARTIA M50', 'Fachada', '200–500 EUR/m²', 'Edificios comerciales, fachadas vidriadas'],
      ['Puertas de entrada aluminio', 'Puertas', '800–2.500 EUR/ud.', 'Entradas residenciales y comerciales'],
    ],
    note: '* Los precios incluyen el perfil de aluminio y el vidrio aislante. La instalación se presupuesta aparte. Transporte incluido en Bucarest e Ilfov; fuera de estas zonas se cobra aparte.',
    factors_title: 'Qué influye en el precio final',
    factors: [
      ['Sistema de perfil', 'Smartia (comercial) vs Supreme (premium) — diferencia del 30–50% en el perfil'],
      ['Vidrio aislante', 'Doble acristalamiento estándar vs triple Low-E nZEB — diferencia de 40–80 EUR/m²'],
      ['Tipo de apertura', 'Oscilobatiente < corredera < elevadora < plegable — complejidad creciente'],
      ['Color RAL', 'Lacado estándar (7 colores) incluido; RAL especiales +8–15% sobre el perfil'],
      ['Herrajes', 'Estándar vs antieffracción RC2/RC3 — diferencia de 50–150 EUR por ventana'],
      ['Instalación', 'Estándar vs nZEB con premarcos Blaugelb Triotherm+ — diferencia de 30–60 EUR/ml'],
    ],
    cta_h: 'Solicite presupuesto personalizado',
    cta_sub: 'Precio exacto determinado tras las mediciones en obra, realizadas después de firmar el contrato.',
    cta_btn: 'Presupuesto personalizado',
    cta_call: 'Llamar ahora',
    faq_title: 'Preguntas frecuentes sobre precios',
    faq: [
      ['¿Cuánto cuesta una ventana de aluminio?', 'No publicamos precios por unidad, porque el precio de una ventana concreta depende de sus medidas, del vidrio, de los herrajes, del color RAL y de la optimización del corte. Como referencia, el precio de partida es de 250–350 EUR/m² para Alumil SMARTIA S67 y de 350–480 EUR/m² para SUPREME S77, sin IVA y sin instalación. El precio exacto lo recibe en la oferta escrita, en 48h.'],
      ['¿Cuál es el precio mínimo para carpintería de aluminio?', 'El precio mínimo realista para carpintería de aluminio con rotura de puente térmico es de 250 EUR/m², sin IVA y sin instalación. Las ofertas por debajo suelen usar perfiles sin rotura de puente térmico, lo que compromete el rendimiento térmico y la garantía.'],
      ['¿Cuánto cuesta una puerta corredera de aluminio?', 'El precio de partida es de 400–550 EUR/m² para las puertas correderas Alumil S350 SMARTIA y de 550–750 EUR/m² para el sistema elevable-corredero S700 SUPREME, sin IVA y sin instalación. La motorización y la instalación se presupuestan aparte.'],
      ['¿Los precios incluyen IVA?', 'No. Los precios orientativos son sin IVA y sin instalación. El IVA del 21% se añade en la factura y la instalación se presupuesta aparte.'],
    ],
    see_also: 'Ver también',
    link_main: 'Carpintería Aluminio Alumil — todos los sistemas',
    link_buc: 'Instalación carpintería aluminio en Bucarest',
  },
  it: {
    label: 'Infissi Alluminio · Neofort BIZ',
    parent: 'Infissi Alluminio',
    h1: 'Prezzi Infissi Alluminio 2026 — Guida Completa per Sistema Alumil',
    sub: 'Prezzi aggiornati 2026 per infissi in alluminio con taglio termico — dalle finestre standard agli scorrevoli alzanti e alle facciate continue.',
    intro: "I prezzi degli infissi in alluminio variano considerevolmente in base al sistema scelto, alle dimensioni e alla configurazione finale. Questa pagina centralizza i prezzi indicativi per tutti i sistemi Alumil commercializzati da Neofort BIZ, aggiornati per il 2026.",
    table_title: 'Prezzi indicativi per sistema — 2026',
    th: ['Sistema', 'Categoria', 'Prezzo stimato / m²', 'Ideale per'],
    rows: [
      ['Alumil Smartia S67', 'Commerciale', '250–350 EUR/m²', 'Abitazioni, uffici standard'],
      ['Alumil Supreme S77', 'Premium', '350–480 EUR/m²', 'Abitazioni nZEB, ville, antieffrazione RC2/RC3'],
      ['Alumil Supreme SF85 (a libro)', 'A libro premium', '350–500 EUR/m²', 'Terrazze usate tutto l’anno, apertura totale'],
      ['Alumil M19800 Smartia (a libro)', 'A libro', '280–400 EUR/m²', 'Terrazze e balconi, apertura totale'],
      ['Alumil S350 Smartia (scorrevole)', 'Scorrevole', '400–550 EUR/m²', 'Terrazze, grandi aperture soggiorno'],
      ['Alumil S700 Supreme (alz. scorrevole)', 'Premium scorrevole', '550–750 EUR/m²', 'Terrazze panoramiche, ville'],
      ['Facciata continua Reynaers CW 50 / Alumil SMARTIA M50', 'Facciata', '200–500 EUR/m²', 'Edifici commerciali, facciate vetrate'],
      ["Porte d'ingresso alluminio", 'Porte', '800–2.500 EUR/cad.', 'Ingressi residenziali e commerciali'],
    ],
    note: '* I prezzi includono il profilo in alluminio e il vetro isolante. La posa si quota a parte. Trasporto incluso a Bucarest e Ilfov; fuori da queste zone si paga a parte.',
    factors_title: 'Cosa influenza il prezzo finale',
    factors: [
      ['Sistema di profilato', 'Smartia (commerciale) vs Supreme (premium) — differenza del 30–50% sul profilato'],
      ['Vetro isolante', 'Doppio vetro standard vs triplo Low-E nZEB — differenza di 40–80 EUR/m²'],
      ["Tipo di apertura", 'Battente < scorrevole < alzante scorrevole < pieghevole — complessità crescente'],
      ['Colore RAL', 'Verniciatura standard (7 colori) inclusa; RAL speciali +8–15% sul profilato'],
      ['Ferramenta', 'Standard vs antieffrazione RC2/RC3 — differenza di 50–150 EUR per finestra'],
      ['Posa', 'Standard vs nZEB con precontrotelaio Blaugelb Triotherm+ — differenza di 30–60 EUR/ml'],
    ],
    cta_h: 'Richiedete un preventivo personalizzato',
    cta_sub: 'Prezzo esatto determinato dopo il rilievo in loco.',
    cta_btn: 'Preventivo personalizzato',
    cta_call: 'Chiama ora',
    faq_title: 'Domande frequenti sui prezzi',
    faq: [
      ['Quanto costa una finestra in alluminio?', 'Non pubblichiamo prezzi a pezzo, perché il prezzo di una finestra concreta dipende dalle dimensioni, dal vetro, dalla ferramenta, dal colore RAL e dall\'ottimizzazione del taglio. Come riferimento, il prezzo di partenza è di 250–350 EUR/m² per Alumil SMARTIA S67 e di 350–480 EUR/m² per SUPREME S77, IVA e posa escluse. Il prezzo esatto lo ricevete nell\'offerta scritta, entro 48h.'],
      ['Qual è il prezzo minimo per infissi in alluminio?', 'Il prezzo minimo realistico per infissi in alluminio con taglio termico è di 250 EUR/m², IVA e posa escluse. Le offerte al di sotto utilizzano di solito profili senza taglio termico, a scapito di prestazioni termiche e garanzia.'],
      ['Quanto costa una porta scorrevole in alluminio?', 'Il prezzo di partenza è di 400–550 EUR/m² per le porte scorrevoli Alumil S350 SMARTIA e di 550–750 EUR/m² per il sistema alzante scorrevole S700 SUPREME, IVA e posa escluse. Motorizzazione e posa si quotano a parte.'],
      ['I prezzi includono IVA?', 'No. I prezzi indicativi sono al netto di IVA e posa. L\'IVA del 21% viene aggiunta in fattura e la posa si quota a parte.'],
    ],
    see_also: 'Vedi anche',
    link_main: 'Infissi Alluminio Alumil — tutti i sistemi',
    link_buc: 'Installazione infissi alluminio a Bucarest',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const slug = SLUGS[locale] || SLUGS.ro;
  const parentSlug = PARENT_SLUGS[locale] || PARENT_SLUGS.ro;
  return {
    title: locale === 'ro' ? 'Prețuri Tâmplărie Aluminiu 2026: 250–500 €/mp | Neofort BIZ'
         : locale === 'en' ? 'Aluminium Window Prices 2026: 250–500 €/m² | Neofort BIZ'
         : locale === 'de' ? 'Aluminiumfenster Preise 2026: 250–500 €/m² | Neofort BIZ'
         : locale === 'fr' ? 'Prix Menuiserie Aluminium 2026 : 250–500 €/m² | Neofort BIZ'
         : locale === 'es' ? 'Precios Aluminio 2026: 250–500 €/m² | Neofort BIZ'
         : 'Prezzi Infissi Alluminio 2026: 250–500 €/m² | Neofort BIZ',
    description: locale === 'ro' ? 'Prețuri de pornire tâmplărie aluminiu 2026, fără montaj: Alumil Smartia S67 250–350 EUR/mp, Supreme S77 350–480 EUR/mp, glisante, armonice și pereți cortină.'
               : locale === 'en' ? '2026 aluminium window starting prices, without installation: Alumil Smartia S67 250–350 EUR/m², Supreme S77 350–480 EUR/m², sliding, folding and curtain walls.'
               : locale === 'de' ? 'Richtpreise 2026 für Aluminiumfenster, ohne Montage: Alumil Smartia S67 250–350 EUR/m², Supreme S77 350–480 EUR/m², Schiebe-, Falttüren und Vorhangfassaden.'
               : locale === 'fr' ? 'Prix de départ 2026 menuiserie aluminium, hors pose : Alumil Smartia S67 250–350 EUR/m², Supreme S77 350–480 EUR/m², coulissants, pliants et murs-rideaux.'
               : locale === 'es' ? 'Precios desde 2026, aluminio sin instalación: Alumil Smartia S67 250–350 EUR/m², Supreme S77 350–480 EUR/m², correderas, plegables y muros cortina.'
               : 'Prezzi di partenza 2026 infissi in alluminio, posa esclusa: Alumil Smartia S67 250–350 EUR/m², Supreme S77 350–480 EUR/m², scorrevoli, a libro e facciate continue.',
    keywords: locale === 'ro' ? 'preturi tamplarie aluminiu, tamplarie aluminiu pret 2026, cat costa tamplarie aluminiu, tamplarie aluminiu mp pret, alumil pret, alumil supreme pret, alumil smartia pret, fereastra aluminiu pret, usa glisanta aluminiu pret'
            : 'aluminium window prices 2026, aluminium windows cost, Alumil price, aluminium window price per m2',
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
      images: [{ url: `${BASE}/og/Tamplarie_Aluminiu_Alumil.jpg`, width: 584, height: 540, alt: ui.h1, type: 'image/avif' }],
    },
    // v277: blocul twitter era lipit in schema JSON-LD de mai jos, nu aici.
    // Next.js nu emitea niciun meta twitter, iar schema continea o proprietate
    // care nu exista in vocabularul schema.org.
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: ui.h1, description: ui.sub, images:[{ url:`${BASE}/og/Tamplarie_Aluminiu_Alumil.jpg`, width:584, height:540 }] },
  };
}

export default async function PreturiPage({ params }) {
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
  };

  // v317: prețurile din tabel, ca date structurate (OfferCatalog, EUR, fără TVA).
  const priceSchema = offerCatalogSchema({
    base: BASE, url: `${BASE}/${locale}/${slug}`, name: ui.table_title, locale,
    items: ui.rows.map(([name, , price, ideal]) => ({ name, description: ideal, prices: [price] })),
  });

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}/>

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container mx-auto px-6">
          <nav style={{ fontSize: '.65rem', letterSpacing: '.12em', textTransform: 'uppercase', color: '#141414', display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#141414', textDecoration: 'none' }}>Neofort BIZ</Link>
            <span style={{ color: '#1e1e1e' }}>›</span>
            <Link href={`/${parentSlug}`} style={{ color: '#141414', textDecoration: 'none' }}>{ui.parent}</Link>
            <span style={{ color: '#1e1e1e' }}>›</span>
            <span style={{ color: '#151515' }}>{locale === 'ro' ? 'Prețuri 2026' : locale === 'en' ? 'Prices 2026' : locale === 'de' ? 'Preise 2026' : locale === 'fr' ? 'Prix 2026' : locale === 'es' ? 'Precios 2026' : 'Prezzi 2026'}</span>
          </nav>
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-2xl">{ui.sub}</p>
        </div>
      </div>

      {/* INTRO */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <p style={{ fontSize: '.92rem', color: '#1e1e1e', lineHeight: 1.8, marginBottom: '48px' }}>{ui.intro}</p>

          {/* TABEL PREȚURI */}
          <h2 className="font-condensed text-2xl font-semibold text-primary mb-6">{ui.table_title}</h2>
          <div style={{ overflowX: 'auto', marginBottom: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.88rem' }}>
              <thead>
                <tr style={{ background: '#1a1a1a', color: '#fff' }}>
                  {ui.th.map((h, i) => (
                    <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, letterSpacing: '.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ui.rows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f8f8f6', borderBottom: '1px solid #e8e8e4' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '12px 16px', color: j === 2 ? '#2d5a8e' : '#1a1a1a', fontWeight: j === 2 ? 600 : j === 0 ? 500 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '.8rem', color: '#141414', marginBottom: '48px', fontStyle: 'italic' }}>{ui.note}</p>

          {/* FACTORI */}
          <h2 className="font-condensed text-2xl font-semibold text-primary mb-6">{ui.factors_title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px', marginBottom: '48px' }}>
            {ui.factors.map(([title, desc], i) => (
              <div key={i} style={{ padding: '20px', border: '1px solid #e8e8e4', borderRadius: '6px', borderTop: '3px solid #2d5a8e' }}>
                <p style={{ fontSize: '.88rem', fontWeight: 600, color: '#151515', marginBottom: '6px' }}>{title}</p>
                <p style={{ fontSize: '.84rem', color: '#1e1e1e', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <FaqAccordion items={ui.faq} title={ui.faq_title} />

          {/* SEE ALSO */}
          <div style={{ marginTop: '48px', padding: '24px', background: '#f8f8f6', borderRadius: '6px' }}>
            <p style={{ fontSize: '.84rem', color: '#141414', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '.08em' }}>{ui.see_also}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link href={`/${parentSlug}`} style={{ fontSize: '.88rem', color: '#162d47', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{ui.link_main}</Link>
              <span style={{ color: '#1e1e1e' }}>·</span>
              <Link href="/tamplarie-aluminiu/bucuresti" style={{ fontSize: '.88rem', color: '#162d47', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{ui.link_buc}</Link>
              <span style={{ color: '#1e1e1e' }}>·</span>
              <Link href="/servicii/cum-ofertam" style={{ fontSize: '.88rem', color: '#2b4834', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{QUOTE_LINK[locale] || QUOTE_LINK.ro}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f4f4f1', padding: '64px 0' }}>
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-condensed text-3xl font-semibold text-primary mb-4">{ui.cta_h}</h2>
          <p style={{ fontSize: '.9rem', color: '#1e1e1e', marginBottom: '32px' }}>{ui.cta_sub}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', background: '#1a1a1a', color: '#fff', borderRadius: '6px', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}>{ui.cta_btn}</Link>
            <a href="tel:+40752443435" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', border: '2px solid #1a1a1a', color: '#151515', borderRadius: '6px', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}>{ui.cta_call} +40 752 443 435</a>
          </div>
        </div>
      </section>
    </>
  );
}
