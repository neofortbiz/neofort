import { Link } from '../../../../i18n/navigation';
import FaqAccordion from '../../../../components/FaqAccordion';

const BASE = 'https://www.neofort-biz.ro';

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

const LOCALES = ['ro','en','de','fr','es','it'];

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
      ['Alumil Supreme SF85', 'Premium', '350–500 EUR/mp', 'Proiecte arhitecturale exigente'],
      ['Alumil S350 Smartia (glisant)', 'Glisant', '400–550 EUR/mp', 'Terase, living cu deschidere mare'],
      ['Alumil S700 Supreme (liftant-glisant)', 'Premium glisant', '550–750 EUR/mp', 'Terase panoramice, vile'],
      ['Pereți cortină Alumil CW50', 'Fațadă', '450–700 EUR/mp', 'Clădiri comerciale, fațade sticlă'],
      ['Uși de intrare aluminiu', 'Uși', '800–2.500 EUR/buc', 'Intrări rezidențiale și comerciale'],
    ],
    note: '* Prețurile includ profilul din aluminiu, geamul termopan și montajul profesional. Nu includ transport pentru distanțe peste 100 km.',
    factors_title: 'Ce influențează prețul final',
    factors: [
      ['Sistemul de profil', 'Smartia (comercial) vs Supreme (premium) — diferență de 30–50% în prețul profilului'],
      ['Geamul termopan', 'Geam dublu standard vs tripan Low-E nZEB — diferență de 40–80 EUR/mp de vitrare'],
      ['Tipul de deschidere', 'Ferestre batante < culisante < liftant-glisante < armonice — complexitate crescătoare'],
      ['Culoarea RAL', 'Vopsire standard (7 culori) inclusă; culori RAL speciale adaugă 8–15% la prețul profilului'],
      ['Feroneria', 'Feronerire standard vs antiefracție RC2/RC3 — diferență de 50–150 EUR per fereastră'],
      ['Montajul', 'Montaj standard vs montaj nZEB cu precadre Blaugelb Triotherm+ și benzi etanșare — diferență de 30–60 EUR/ml'],
    ],
    cta_h: 'Solicitați ofertă personalizată',
    cta_sub: 'Prețul exact se stabilește după măsurători gratuite la fața locului.',
    cta_btn: 'Cerere ofertă gratuită',
    cta_call: 'Sună acum',
    faq_title: 'Întrebări frecvente despre prețuri',
    faq: [
      ['Cât costă o fereastră din aluminiu?', 'O fereastră standard batantă din aluminiu Alumil Smartia (100×120 cm) costă între 350–500 EUR inclusiv geam termopan și montaj. O fereastră premium Supreme SF85 de aceleași dimensiuni costă 450–650 EUR. Prețul crește proporțional cu dimensiunile și complexitatea (două canaturi, culori speciale RAL).'],
      ['Care este prețul minim pentru tâmplărie aluminiu?', 'Prețul minim realist pentru tâmplărie aluminiu cu barieră termică și montaj profesional este de 250 EUR/mp. Ofertele sub acest prag folosesc de regulă profile fără barieră termică sau montaj neconform, care compromit performanța termică și garanția.'],
      ['Cât costă o ușă glisantă din aluminiu?', 'O ușă culisantă Alumil S350 Smartia (2×2,1 m, un canat) costă 900–1.400 EUR. Un sistem liftant-glisant Alumil S700 Supreme (3×2,4 m, două canaturi) costă 2.500–4.000 EUR, incluzând motor și automatizare.'],
      ['Prețul include TVA?', 'Prețurile orientative de pe această pagină sunt fără TVA (prețuri nete). TVA-ul de 19% se adaugă la facturare. Neofort BIZ emite factură fiscală pentru toate lucrările.'],
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
      ['Alumil Supreme SF85', 'Premium', '350–500 EUR/m²', 'Demanding architectural projects'],
      ['Alumil S350 Smartia (sliding)', 'Sliding', '400–550 EUR/m²', 'Terraces, large living openings'],
      ['Alumil S700 Supreme (lift-slide)', 'Premium sliding', '550–750 EUR/m²', 'Panoramic terraces, villas'],
      ['Curtain wall Alumil CW50', 'Facade', '450–700 EUR/m²', 'Commercial buildings, glass facades'],
      ['Aluminium entrance doors', 'Doors', '800–2,500 EUR/unit', 'Residential and commercial entrances'],
    ],
    note: '* Prices include aluminium profile, thermal glass and professional installation. Transport over 100 km not included.',
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
    cta_sub: 'Exact price determined after free on-site measurements.',
    cta_btn: 'Request free quote',
    cta_call: 'Call now',
    faq_title: 'Frequently asked questions about prices',
    faq: [
      ['How much does an aluminium window cost?', 'A standard casement aluminium window Alumil Smartia (100×120 cm) costs 350–500 EUR including thermal glass and installation. A premium Supreme SF85 of the same size costs 450–650 EUR.'],
      ['What is the minimum price for aluminium windows?', 'The realistic minimum price for thermal break aluminium windows with professional installation is 250 EUR/m². Offers below this level typically use profiles without thermal break or non-compliant installation.'],
      ['How much does an aluminium sliding door cost?', 'An Alumil S350 Smartia sliding door (2×2.1 m, one leaf) costs 900–1,400 EUR. An Alumil S700 Supreme lift-and-slide system (3×2.4 m, two leaves) costs 2,500–4,000 EUR including motor and automation.'],
      ['Do prices include VAT?', 'Indicative prices on this page are VAT-exclusive (net prices). 19% VAT is added at invoicing. Neofort BIZ issues a fiscal invoice for all works.'],
    ],
    see_also: 'See also',
    link_main: 'Alumil Aluminium Windows — all systems',
    link_buc: 'Aluminium window installation in Bucharest',
  },
  de: {
    label: 'Aluminiumfenster · Neofort BIZ',
    parent: 'Aluminiumfenster',
    h1: 'Aluminiumfenster Preise 2026 — Vollständiger Leitfaden nach Alumil-System',
    sub: 'Aktualisierte Preise 2026 für Aluminiumfenster mit Wärmedämmbrücke — von Standardfenstern bis Hebeschiebetüren und Vorhangfassaden.',
    intro: 'Aluminiumfensterpreise variieren je nach gewähltem System, Fensterabmessungen und Endkonfiguration erheblich. Diese Seite fasst die Richtwerte für alle von Neofort BIZ vertriebenen Alumil-Systeme zusammen, aktualisiert für 2026.',
    table_title: 'Richtwerte nach System — 2026',
    th: ['System', 'Kategorie', 'Geschätzter Preis / m²', 'Ideal für'],
    rows: [
      ['Alumil Smartia S67', 'Kommerziell', '250–350 EUR/m²', 'Wohnungen, Standardbüros'],
      ['Alumil Supreme SF85', 'Premium', '350–500 EUR/m²', 'Anspruchsvolle Architekturprojekte'],
      ['Alumil S350 Smartia (Schiebe)', 'Schiebe', '400–550 EUR/m²', 'Terrassen, große Wohnöffnungen'],
      ['Alumil S700 Supreme (Hebe-Schiebe)', 'Premium-Schiebe', '550–750 EUR/m²', 'Panoramaterrassen, Villen'],
      ['Vorhangfassade Alumil CW50', 'Fassade', '450–700 EUR/m²', 'Gewerbegebäude, Glasfassaden'],
      ['Aluminium-Eingangstüren', 'Türen', '800–2.500 EUR/Stk.', 'Wohn- und Gewerbeeingänge'],
    ],
    note: '* Preise inkl. Aluminiumprofil, Isolierglas und professionellem Einbau. Transport über 100 km nicht inbegriffen.',
    factors_title: 'Was den Endpreis beeinflusst',
    factors: [
      ['Profilsystem', 'Smartia (kommerziell) vs Supreme (premium) — 30–50% Unterschied im Profilpreis'],
      ['Isolierglas', 'Standard-Zweifachverglasung vs Dreifach-Low-E-nZEB — 40–80 EUR/m² Unterschied'],
      ['Öffnungstyp', 'Dreh-Kipp < Schiebe < Hebe-Schiebe < Falttür — zunehmende Komplexität'],
      ['RAL-Farbe', 'Standardlackierung (7 Farben) enthalten; spezielle RAL-Farben +8–15% auf Profilpreis'],
      ['Beschläge', 'Standard vs Einbruchschutz RC2/RC3 — 50–150 EUR Unterschied pro Fenster'],
      ['Einbau', 'Standard vs nZEB mit Blaugelb Triotherm+ Vorfenstern — 30–60 EUR/lm Unterschied'],
    ],
    cta_h: 'Persönliches Angebot anfordern',
    cta_sub: 'Genaupreis nach kostenloser Vor-Ort-Aufnahme.',
    cta_btn: 'Kostenloses Angebot',
    cta_call: 'Jetzt anrufen',
    faq_title: 'Häufige Fragen zu Preisen',
    faq: [
      ['Was kostet ein Aluminiumfenster?', 'Ein Standard-Dreh-Kipp-Aluminiumfenster Alumil Smartia (100×120 cm) kostet 350–500 EUR inkl. Isolierglas und Montage. Ein Premium-Supreme-SF85 gleicher Größe kostet 450–650 EUR.'],
      ['Was ist der Mindestpreis für Aluminiumfenster?', 'Der realistische Mindestpreis für Aluminiumfenster mit Wärmedämmbrücke und professionellem Einbau beträgt 250 EUR/m². Angebote darunter verwenden meist Profile ohne Wärmedämmbrücke.'],
      ['Was kostet eine Aluminium-Schiebetür?', 'Eine Alumil S350 Smartia Schiebetür (2×2,1 m, ein Flügel) kostet 900–1.400 EUR. Ein Alumil S700 Supreme Hebe-Schiebe-System (3×2,4 m, zwei Flügel) kostet 2.500–4.000 EUR.'],
      ['Sind die Preise inkl. MwSt.?', 'Richtwerte auf dieser Seite sind netto (ohne MwSt.). Die MwSt. von 19% wird bei der Rechnungsstellung hinzugefügt.'],
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
      ['Alumil Supreme SF85', 'Premium', '350–500 EUR/m²', 'Projets architecturaux exigeants'],
      ['Alumil S350 Smartia (coulissant)', 'Coulissant', '400–550 EUR/m²', 'Terrasses, grandes ouvertures séjour'],
      ['Alumil S700 Supreme (coulissant levant)', 'Premium coulissant', '550–750 EUR/m²', 'Terrasses panoramiques, villas'],
      ['Mur-rideau Alumil CW50', 'Façade', '450–700 EUR/m²', 'Bâtiments commerciaux, façades vitrées'],
      ["Portes d'entrée aluminium", 'Portes', '800–2.500 EUR/unité', 'Entrées résidentielles et commerciales'],
    ],
    note: '* Prix incluant profilé aluminium, vitrage isolant et pose professionnelle. Transport au-delà de 100 km non inclus.',
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
    cta_sub: 'Prix exact déterminé après métrés gratuits sur site.',
    cta_btn: 'Devis gratuit',
    cta_call: 'Appeler maintenant',
    faq_title: 'Questions fréquentes sur les prix',
    faq: [
      ["Combien coûte une fenêtre en aluminium ?", "Une fenêtre battante standard Alumil Smartia (100×120 cm) coûte 350–500 EUR vitrage et pose inclus. Une Supreme SF85 de même taille coûte 450–650 EUR."],
      ["Quel est le prix minimum pour la menuiserie aluminium ?", "Le prix minimum réaliste pour des fenêtres aluminium à rupture de pont thermique avec pose professionnelle est de 250 EUR/m². Les offres en dessous utilisent généralement des profilés sans rupture de pont thermique."],
      ["Combien coûte une porte coulissante aluminium ?", "Une porte coulissante Alumil S350 Smartia (2×2,1 m, un vantail) coûte 900–1.400 EUR. Un système coulissant levant S700 Supreme (3×2,4 m, deux vantaux) coûte 2.500–4.000 EUR."],
      ["Les prix incluent-ils la TVA ?", "Les prix indicatifs sont hors TVA. La TVA de 19% s'ajoute à la facturation."],
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
      ['Alumil Supreme SF85', 'Premium', '350–500 EUR/m²', 'Proyectos arquitectónicos exigentes'],
      ['Alumil S350 Smartia (corredera)', 'Corredera', '400–550 EUR/m²', 'Terrazas, grandes aperturas salón'],
      ['Alumil S700 Supreme (elev. corredera)', 'Premium corredera', '550–750 EUR/m²', 'Terrazas panorámicas, villas'],
      ['Muro cortina Alumil CW50', 'Fachada', '450–700 EUR/m²', 'Edificios comerciales, fachadas vidriadas'],
      ['Puertas de entrada aluminio', 'Puertas', '800–2.500 EUR/ud.', 'Entradas residenciales y comerciales'],
    ],
    note: '* Precios incluyen perfil de aluminio, vidrio aislante e instalación profesional. Transporte a más de 100 km no incluido.',
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
    cta_sub: 'Precio exacto determinado tras medición gratuita en obra.',
    cta_btn: 'Presupuesto gratuito',
    cta_call: 'Llamar ahora',
    faq_title: 'Preguntas frecuentes sobre precios',
    faq: [
      ['¿Cuánto cuesta una ventana de aluminio?', 'Una ventana oscilobatiente estándar Alumil Smartia (100×120 cm) cuesta 350–500 EUR incluyendo vidrio aislante e instalación. Una Supreme SF85 del mismo tamaño cuesta 450–650 EUR.'],
      ['¿Cuál es el precio mínimo para carpintería de aluminio?', 'El precio mínimo realista para carpintería de aluminio con rotura de puente térmico e instalación profesional es de 250 EUR/m². Ofertas por debajo suelen usar perfiles sin rotura de puente térmico.'],
      ['¿Cuánto cuesta una puerta corredera de aluminio?', 'Una puerta corredera Alumil S350 Smartia (2×2,1 m, una hoja) cuesta 900–1.400 EUR. Un sistema elevador Alumil S700 Supreme (3×2,4 m, dos hojas) cuesta 2.500–4.000 EUR.'],
      ['¿Los precios incluyen IVA?', 'Los precios orientativos son sin IVA. El IVA del 19% se añade en la facturación.'],
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
      ['Alumil Supreme SF85', 'Premium', '350–500 EUR/m²', 'Progetti architettonici esigenti'],
      ['Alumil S350 Smartia (scorrevole)', 'Scorrevole', '400–550 EUR/m²', 'Terrazze, grandi aperture soggiorno'],
      ['Alumil S700 Supreme (alz. scorrevole)', 'Premium scorrevole', '550–750 EUR/m²', 'Terrazze panoramiche, ville'],
      ['Facciata continua Alumil CW50', 'Facciata', '450–700 EUR/m²', 'Edifici commerciali, facciate vetrate'],
      ["Porte d'ingresso alluminio", 'Porte', '800–2.500 EUR/cad.', 'Ingressi residenziali e commerciali'],
    ],
    note: '* Prezzi includono profilato in alluminio, vetro isolante e posa professionale. Trasporto oltre 100 km non incluso.',
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
    cta_sub: 'Prezzo esatto determinato dopo rilievi gratuiti in loco.',
    cta_btn: 'Preventivo gratuito',
    cta_call: 'Chiama ora',
    faq_title: 'Domande frequenti sui prezzi',
    faq: [
      ['Quanto costa una finestra in alluminio?', 'Una finestra battente standard Alumil Smartia (100×120 cm) costa 350–500 EUR inclusi vetro isolante e posa. Una Supreme SF85 delle stesse dimensioni costa 450–650 EUR.'],
      ['Qual è il prezzo minimo per infissi in alluminio?', 'Il prezzo minimo realistico per infissi in alluminio con taglio termico e posa professionale è di 250 EUR/m². Le offerte al di sotto utilizzano solitamente profilati senza taglio termico.'],
      ['Quanto costa una porta scorrevole in alluminio?', 'Una porta scorrevole Alumil S350 Smartia (2×2,1 m, un'anta) costa 900–1.400 EUR. Un sistema alzante scorrevole S700 Supreme (3×2,4 m, due ante) costa 2.500–4.000 EUR.'],
      ['I prezzi includono IVA?', 'I prezzi indicativi sono al netto IVA. L\'IVA del 19% viene aggiunta in fattura.'],
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
    title: locale === 'ro' ? 'Prețuri Tâmplărie Aluminiu 2026 — Sisteme Alumil Supreme și Smartia | Neofort BIZ'
         : locale === 'en' ? 'Aluminium Window Prices 2026 — Alumil Supreme and Smartia Systems | Neofort BIZ'
         : locale === 'de' ? 'Aluminiumfenster Preise 2026 — Alumil Supreme und Smartia | Neofort BIZ'
         : locale === 'fr' ? 'Prix Menuiserie Aluminium 2026 — Systèmes Alumil Supreme et Smartia | Neofort BIZ'
         : locale === 'es' ? 'Precios Carpintería Aluminio 2026 — Sistemas Alumil Supreme y Smartia | Neofort BIZ'
         : 'Prezzi Infissi Alluminio 2026 — Sistemi Alumil Supreme e Smartia | Neofort BIZ',
    description: locale === 'ro' ? 'Prețuri actualizate 2026 tâmplărie aluminiu: Alumil Smartia 250–350 EUR/mp, Supreme SF85 350–500 EUR/mp, sisteme glisante și pereți cortină. Montaj nZEB București.'
               : locale === 'en' ? 'Updated 2026 aluminium window prices: Alumil Smartia 250–350 EUR/m², Supreme SF85 350–500 EUR/m², sliding systems and curtain walls. nZEB installation Bucharest.'
               : locale === 'de' ? 'Aktualisierte Preise 2026 Aluminiumfenster: Alumil Smartia 250–350 EUR/m², Supreme SF85 350–500 EUR/m², Schiebesysteme und Vorhangfassaden. nZEB-Montage Bukarest.'
               : locale === 'fr' ? 'Prix actualisés 2026 menuiserie aluminium: Alumil Smartia 250–350 EUR/m², Supreme SF85 350–500 EUR/m², coulissants et murs-rideaux. Pose nZEB Bucarest.'
               : locale === 'es' ? 'Precios actualizados 2026 carpintería aluminio: Alumil Smartia 250–350 EUR/m², Supreme SF85 350–500 EUR/m², correderas y muros cortina. Instalación nZEB Bucarest.'
               : 'Prezzi aggiornati 2026 infissi alluminio: Alumil Smartia 250–350 EUR/m², Supreme SF85 350–500 EUR/m², scorrevoli e facciate continue. Posa nZEB Bucarest.',
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
      images: [{ url: `${BASE}/og/Tamplarie_Aluminiu_Alumil.avif`, width: 1200, height: 630, alt: ui.h1, type: 'image/avif' }],
    },
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
          <nav style={{ fontSize: '.65rem', letterSpacing: '.12em', textTransform: 'uppercase', color: '#999', display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#999', textDecoration: 'none' }}>Neofort BIZ</Link>
            <span style={{ color: '#ccc' }}>›</span>
            <Link href={`/${parentSlug}`} style={{ color: '#999', textDecoration: 'none' }}>{ui.parent}</Link>
            <span style={{ color: '#ccc' }}>›</span>
            <span style={{ color: '#1a1a1a' }}>{locale === 'ro' ? 'Prețuri 2026' : locale === 'en' ? 'Prices 2026' : locale === 'de' ? 'Preise 2026' : locale === 'fr' ? 'Prix 2026' : locale === 'es' ? 'Precios 2026' : 'Prezzi 2026'}</span>
          </nav>
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-2xl">{ui.sub}</p>
        </div>
      </div>

      {/* INTRO */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <p style={{ fontSize: '.92rem', color: '#767676', lineHeight: 1.8, marginBottom: '48px' }}>{ui.intro}</p>

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
          <p style={{ fontSize: '.8rem', color: '#999', marginBottom: '48px', fontStyle: 'italic' }}>{ui.note}</p>

          {/* FACTORI */}
          <h2 className="font-condensed text-2xl font-semibold text-primary mb-6">{ui.factors_title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px', marginBottom: '48px' }}>
            {ui.factors.map(([title, desc], i) => (
              <div key={i} style={{ padding: '20px', border: '1px solid #e8e8e4', borderRadius: '6px', borderTop: '3px solid #2d5a8e' }}>
                <p style={{ fontSize: '.88rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '6px' }}>{title}</p>
                <p style={{ fontSize: '.84rem', color: '#767676', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <FaqAccordion items={ui.faq} title={ui.faq_title} />

          {/* SEE ALSO */}
          <div style={{ marginTop: '48px', padding: '24px', background: '#f8f8f6', borderRadius: '6px' }}>
            <p style={{ fontSize: '.84rem', color: '#999', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '.08em' }}>{ui.see_also}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link href={`/${parentSlug}`} style={{ fontSize: '.88rem', color: '#2d5a8e', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{ui.link_main}</Link>
              <span style={{ color: '#ccc' }}>·</span>
              <Link href={`/${parentSlug}/bucuresti`} style={{ fontSize: '.88rem', color: '#2d5a8e', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{ui.link_buc}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f4f4f1', padding: '64px 0' }}>
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-condensed text-3xl font-semibold text-primary mb-4">{ui.cta_h}</h2>
          <p style={{ fontSize: '.9rem', color: '#767676', marginBottom: '32px' }}>{ui.cta_sub}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', background: '#1a1a1a', color: '#fff', borderRadius: '6px', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}>{ui.cta_btn}</Link>
            <a href="tel:+40752443435" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', border: '2px solid #1a1a1a', color: '#1a1a1a', borderRadius: '6px', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}>{ui.cta_call} +40 752 443 435</a>
          </div>
        </div>
      </section>
    </>
  );
}
