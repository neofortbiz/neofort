import { Link } from '../../../../i18n/navigation';
import FaqAccordion from '../../../../components/FaqAccordion';

const BASE = 'https://www.neofort-biz.ro';

const SLUGS = {
  ro: 'tamplarie-pvc/preturi',
  en: 'pvc-windows/prices',
  de: 'kunststofffenster-pvc/preise',
  fr: 'menuiserie-pvc/prix',
  es: 'carpinteria-pvc/precios',
  it: 'infissi-pvc/prezzi',
};

const PARENT_SLUGS = {
  ro: 'tamplarie-pvc', en: 'pvc-windows',
  de: 'kunststofffenster-pvc', fr: 'menuiserie-pvc',
  es: 'carpinteria-pvc', it: 'infissi-pvc',
};

const LOCALES = ['ro','en','de','fr','es','it'];

const UI = {
  ro: {
    label: 'Tâmplărie PVC · Neofort BIZ',
    parent: 'Tâmplărie PVC',
    h1: 'Prețuri Tâmplărie PVC 2026 — Ghid Complet pe Profile Salamander',
    sub: 'Prețuri actualizate 2026 pentru tâmplărie PVC Salamander — de la profilele economicoase GreenEvolution 76 la sistemele premium nZEB BluEvolution 92.',
    intro: 'Prețul tâmplăriei din PVC variază în funcție de sistemul de profil ales, tipul de geam termoizolator și complexitatea configurației. Această pagină centralizează prețurile orientative pentru toate profilele Salamander comercializate de Neofort BIZ, actualizate pentru 2026.',
    table_title: 'Prețuri orientative pe sistem — 2026',
    th: ['Sistem', 'Categorie', 'Preț estimat / mp', 'Ideal pentru'],
    rows: [
      ['GreenEvolution 76 MD FLEX', 'Standard', '150–220 EUR/mp', 'Renovări apartamente, buget echilibrat'],
      ['GreenEvolution 76 MD ROUND', 'Standard', '155–225 EUR/mp', 'Design contemporan, muchii rotunjite'],
      ['GreenEvolution 76 AD FLEX', 'Performant', '165–235 EUR/mp', 'Izolare fonică superioară, 2 garnituri EPDM'],
      ['BluEvolution 92 FLEX', 'Premium', '200–280 EUR/mp', 'Case nZEB, eficiență energetică maximă'],
      ['BluEvolution 92 ROUND', 'Premium', '205–285 EUR/mp', 'Design modern + performanță nZEB'],
      ['BluEvolution 92 ALU (alu-clad)', 'Premium+', '250–350 EUR/mp', 'Aspect aluminiu, performanță PVC nZEB'],
    ],
    note: '* Prețurile includ profilul PVC, feroneria standard și geamul termopan 2 foi. Montajul profesional se adaugă separat la cerere.',
    factors_title: 'Ce influențează prețul final',
    factors: [
      ['Sistemul de profil', 'GreenEvolution 76 (5 camere) vs BluEvolution 92 (6 camere) — diferență de 30–50% în prețul profilului'],
      ['Geamul termopan', 'Geam dublu standard vs tripan Low-E nZEB — diferență de 40–80 EUR/mp de vitrare'],
      ['Tipul de deschidere', 'Ferestre batante < oscilo-batante < culisante — complexitate și preț crescătoare'],
      ['Culoarea profilului', '7 culori standard incluse; folii speciale RAL sau texturate adaugă 8–15% la prețul profilului'],
      ['Feroneria', 'Feronerire standard vs antiefracție RC2/RC3 — diferență de 40–120 EUR per fereastră'],
      ['Montajul', 'Montaj standard vs montaj nZEB cu precadre Blaugelb Triotherm+ și benzi etanșare — diferență de 25–50 EUR/ml'],
    ],
    cta_h: 'Solicitați ofertă personalizată',
    cta_sub: 'Prețul exact se stabilește după măsurători gratuite la fața locului.',
    cta_btn: 'Cerere ofertă gratuită',
    cta_call: 'Sună acum',
    faq_title: 'Întrebări frecvente despre prețuri',
    faq: [
      ['Cât costă o fereastră din PVC Salamander?', 'O fereastră standard oscilo-batantă din PVC Salamander GreenEvolution 76 (100×120 cm) costă între 250–380 EUR inclusiv geam termopan 2 foi și montaj. O fereastră premium BluEvolution 92 de aceleași dimensiuni costă 320–480 EUR. Prețul crește proporțional cu dimensiunile, numărul de canaturi și complexitatea configurației.'],
      ['Care este prețul minim pentru tâmplărie PVC Salamander?', 'Prețul minim realist pentru tâmplărie PVC Salamander cu geam termopan și montaj profesional este de 150 EUR/mp. Ofertele sub acest prag folosesc de regulă profile no-name fără certificare nZEB sau montaj neconform, care compromit performanța termică și garanția.'],
      ['Care este diferența de preț între GreenEvolution 76 și BluEvolution 92?', 'BluEvolution 92 costă cu 25–40% mai mult decât GreenEvolution 76 pentru aceeași configurație. Diferența se justifică prin cele 6 camere față de 5, adâncimea de 92–104 mm față de 76 mm și transferul termic Uw = 0,70 vs 0,73 W/(m²K). Pentru proiecte nZEB, BluEvolution 92 este obligatoriu.'],
      ['Prețul include TVA?', 'Prețurile orientative de pe această pagină sunt fără TVA (prețuri nete). TVA-ul de 19% se adaugă la facturare. Neofort BIZ emite factură fiscală pentru toate lucrările.'],
    ],
    see_also: 'Vezi și',
    link_main: 'Tâmplărie PVC Salamander — toate profilele',
    link_buc: 'Montaj tâmplărie PVC în București',
  },
  en: {
    label: 'PVC Windows · Neofort BIZ',
    parent: 'PVC Windows',
    h1: 'PVC Window Prices 2026 — Complete Guide by Salamander Profile',
    sub: 'Updated 2026 prices for Salamander PVC windows — from economical GreenEvolution 76 profiles to premium nZEB BluEvolution 92 systems.',
    intro: 'PVC window prices vary depending on the profile system chosen, the type of thermal glass and the complexity of the configuration. This page consolidates indicative prices for all Salamander profiles supplied by Neofort BIZ, updated for 2026.',
    table_title: 'Indicative prices by system — 2026',
    th: ['System', 'Category', 'Estimated price / m²', 'Ideal for'],
    rows: [
      ['GreenEvolution 76 MD FLEX', 'Standard', '150–220 EUR/m²', 'Apartment renovations, balanced budget'],
      ['GreenEvolution 76 MD ROUND', 'Standard', '155–225 EUR/m²', 'Contemporary design, rounded edges'],
      ['GreenEvolution 76 AD FLEX', 'Performance', '165–235 EUR/m²', 'Superior sound insulation, 2 EPDM seals'],
      ['BluEvolution 92 FLEX', 'Premium', '200–280 EUR/m²', 'nZEB homes, maximum energy efficiency'],
      ['BluEvolution 92 ROUND', 'Premium', '205–285 EUR/m²', 'Modern design + nZEB performance'],
      ['BluEvolution 92 ALU (clad)', 'Premium+', '250–350 EUR/m²', 'Aluminium look, nZEB PVC performance'],
    ],
    note: '* Prices include PVC profile, standard hardware and double-glazed thermal glass. Professional installation is quoted separately on request.',
    factors_title: 'What influences the final price',
    factors: [
      ['Profile system', 'GreenEvolution 76 (5 chambers) vs BluEvolution 92 (6 chambers) — 30–50% difference in profile price'],
      ['Thermal glass', 'Standard double glazing vs triple Low-E nZEB — 40–80 EUR/m² glazing difference'],
      ['Opening type', 'Casement < tilt-and-turn < sliding — increasing complexity and price'],
      ['Profile colour', '7 standard colours included; special RAL or textured foils add 8–15% to profile price'],
      ['Hardware', 'Standard vs anti-burglary RC2/RC3 — 40–120 EUR difference per window'],
      ['Installation', 'Standard vs nZEB with Blaugelb Triotherm+ precasings and sealing tapes — 25–50 EUR/ml difference'],
    ],
    cta_h: 'Request personalised quote',
    cta_sub: 'Exact price determined after free on-site measurements.',
    cta_btn: 'Request free quote',
    cta_call: 'Call now',
    faq_title: 'Frequently asked questions about prices',
    faq: [
      ['How much does a Salamander PVC window cost?', 'A standard tilt-and-turn Salamander GreenEvolution 76 window (100×120 cm) costs 250–380 EUR including double-glazed thermal glass and installation. A premium BluEvolution 92 of the same size costs 320–480 EUR.'],
      ['What is the minimum price for Salamander PVC windows?', 'The realistic minimum price for Salamander PVC windows with thermal glass and professional installation is 150 EUR/m². Offers below this level typically use non-certified profiles or non-compliant installation.'],
      ['What is the price difference between GreenEvolution 76 and BluEvolution 92?', 'BluEvolution 92 costs 25–40% more than GreenEvolution 76 for the same configuration. The difference is justified by 6 chambers vs 5, depth of 92–104 mm vs 76 mm and thermal transfer Uw = 0.70 vs 0.73 W/(m²K). For nZEB projects, BluEvolution 92 is mandatory.'],
      ['Do prices include VAT?', 'Indicative prices on this page are VAT-exclusive (net prices). 19% VAT is added at invoicing. Neofort BIZ issues a fiscal invoice for all works.'],
    ],
    see_also: 'See also',
    link_main: 'Salamander PVC Windows — all profiles',
    link_buc: 'PVC window installation in Bucharest',
  },
  de: {
    label: 'Kunststofffenster PVC · Neofort BIZ',
    parent: 'Kunststofffenster PVC',
    h1: 'Kunststofffenster Preise 2026 — Vollständiger Leitfaden nach Salamander-Profil',
    sub: 'Aktualisierte Preise 2026 für Salamander PVC-Fenster — von wirtschaftlichen GreenEvolution 76 Profilen bis zu Premium-nZEB-Systemen BluEvolution 92.',
    intro: 'PVC-Fensterpreise variieren je nach gewähltem Profilsystem, Glastyp und Konfigurationskomplexität. Diese Seite fasst die Richtwerte für alle Salamander-Profile zusammen, die von Neofort BIZ vertrieben werden, aktualisiert für 2026.',
    table_title: 'Richtwerte nach System — 2026',
    th: ['System', 'Kategorie', 'Geschätzter Preis / m²', 'Ideal für'],
    rows: [
      ['GreenEvolution 76 MD FLEX', 'Standard', '150–220 EUR/m²', 'Wohnungsrenovierungen, ausgewogenes Budget'],
      ['GreenEvolution 76 MD ROUND', 'Standard', '155–225 EUR/m²', 'Zeitgenössisches Design, abgerundete Kanten'],
      ['GreenEvolution 76 AD FLEX', 'Performance', '165–235 EUR/m²', 'Besserer Schallschutz, 2 EPDM-Dichtungen'],
      ['BluEvolution 92 FLEX', 'Premium', '200–280 EUR/m²', 'nZEB-Häuser, maximale Energieeffizienz'],
      ['BluEvolution 92 ROUND', 'Premium', '205–285 EUR/m²', 'Modernes Design + nZEB-Performance'],
      ['BluEvolution 92 ALU (beschichtet)', 'Premium+', '250–350 EUR/m²', 'Aluminiumoptik, nZEB PVC-Performance'],
    ],
    note: '* Preise inkl. PVC-Profil, Standardbeschläge und Doppel-Isolierglas. Professioneller Einbau wird auf Anfrage separat kalkuliert.',
    factors_title: 'Was den Endpreis beeinflusst',
    factors: [
      ['Profilsystem', 'GreenEvolution 76 (5 Kammern) vs BluEvolution 92 (6 Kammern) — 30–50% Unterschied im Profilpreis'],
      ['Isolierglas', 'Standard-Zweifachverglasung vs Dreifach-Low-E-nZEB — 40–80 EUR/m² Unterschied'],
      ['Öffnungstyp', 'Dreh < Dreh-Kipp < Schiebe — zunehmende Komplexität und Preis'],
      ['Profilfarbe', 'Standard (7 Farben) enthalten; Spezial-RAL oder Dekorfolien +8–15% auf Profilpreis'],
      ['Beschläge', 'Standard vs Einbruchschutz RC2/RC3 — 40–120 EUR Unterschied pro Fenster'],
      ['Einbau', 'Standard vs nZEB mit Blaugelb Triotherm+ Vorfenstern — 25–50 EUR/lm Unterschied'],
    ],
    cta_h: 'Persönliches Angebot anfordern',
    cta_sub: 'Genaupreis nach kostenloser Vor-Ort-Aufnahme.',
    cta_btn: 'Kostenloses Angebot',
    cta_call: 'Jetzt anrufen',
    faq_title: 'Häufige Fragen zu Preisen',
    faq: [
      ['Was kostet ein Salamander PVC-Fenster?', 'Ein Standard-Dreh-Kipp-Salamander-GreenEvolution-76-Fenster (100×120 cm) kostet 250–380 EUR inkl. Zweifach-Isolierglas und Montage. Ein Premium-BluEvolution-92 gleicher Größe kostet 320–480 EUR.'],
      ['Was ist der Mindestpreis für Salamander PVC-Fenster?', 'Der realistische Mindestpreis für Salamander PVC-Fenster mit Isolierglas und professionellem Einbau beträgt 150 EUR/m². Günstigere Angebote nutzen meist Profile ohne nZEB-Zertifizierung.'],
      ['Was ist der Preisunterschied zwischen GreenEvolution 76 und BluEvolution 92?', 'BluEvolution 92 kostet 25–40% mehr als GreenEvolution 76 bei gleicher Konfiguration. Der Unterschied liegt in 6 vs 5 Kammern, Tiefe 92–104 mm vs 76 mm und Wärmedurchgang Uw = 0,70 vs 0,73 W/(m²K).'],
      ['Sind die Preise inkl. MwSt.?', 'Richtwerte auf dieser Seite sind netto (ohne MwSt.). Die MwSt. von 19% wird bei der Rechnungsstellung hinzugefügt.'],
    ],
    see_also: 'Siehe auch',
    link_main: 'Salamander PVC-Fenster — alle Profile',
    link_buc: 'PVC-Fenster Montage in Bukarest',
  },
  fr: {
    label: 'Menuiserie PVC · Neofort BIZ',
    parent: 'Menuiserie PVC',
    h1: 'Prix Menuiserie PVC 2026 — Guide Complet par Profil Salamander',
    sub: "Prix actualisés 2026 pour menuiserie PVC Salamander — des profilés économiques GreenEvolution 76 aux systèmes premium nZEB BluEvolution 92.",
    intro: "Les prix de la menuiserie PVC varient selon le système de profilé choisi, le type de vitrage isolant et la complexité de la configuration. Cette page centralise les prix indicatifs pour tous les profilés Salamander commercialisés par Neofort BIZ, mis à jour pour 2026.",
    table_title: 'Prix indicatifs par système — 2026',
    th: ['Système', 'Catégorie', 'Prix estimé / m²', 'Idéal pour'],
    rows: [
      ['GreenEvolution 76 MD FLEX', 'Standard', '150–220 EUR/m²', 'Rénovations appartements, budget équilibré'],
      ['GreenEvolution 76 MD ROUND', 'Standard', '155–225 EUR/m²', 'Design contemporain, bords arrondis'],
      ['GreenEvolution 76 AD FLEX', 'Performance', '165–235 EUR/m²', 'Isolation phonique supérieure, 2 joints EPDM'],
      ['BluEvolution 92 FLEX', 'Premium', '200–280 EUR/m²', 'Maisons nZEB, efficacité énergétique maximale'],
      ['BluEvolution 92 ROUND', 'Premium', '205–285 EUR/m²', 'Design moderne + performance nZEB'],
      ['BluEvolution 92 ALU (habillé)', 'Premium+', '250–350 EUR/m²', "Aspect aluminium, performance PVC nZEB"],
    ],
    note: "* Prix incluant profilé PVC, quincaillerie standard et double vitrage isolant. La pose professionnelle est devisée séparément sur demande.",
    factors_title: 'Ce qui influence le prix final',
    factors: [
      ['Système de profilé', 'GreenEvolution 76 (5 chambres) vs BluEvolution 92 (6 chambres) — différence de 30–50% sur le profilé'],
      ['Vitrage isolant', 'Double vitrage standard vs triple Low-E nZEB — différence de 40–80 EUR/m²'],
      ["Type d'ouverture", 'Battant < oscillo-battant < coulissant — complexité et prix croissants'],
      ['Couleur profilé', 'Standard (7 couleurs) inclus ; RAL spéciaux ou folies décoratives +8–15% sur le profilé'],
      ['Quincaillerie', 'Standard vs antieffraction RC2/RC3 — différence de 40–120 EUR par fenêtre'],
      ['Pose', 'Standard vs nZEB avec précadres Blaugelb Triotherm+ — différence de 25–50 EUR/ml'],
    ],
    cta_h: 'Demandez un devis personnalisé',
    cta_sub: 'Prix exact déterminé après métrés gratuits sur site.',
    cta_btn: 'Devis gratuit',
    cta_call: 'Appeler maintenant',
    faq_title: 'Questions fréquentes sur les prix',
    faq: [
      ["Combien coûte une fenêtre PVC Salamander ?", "Une fenêtre oscillo-battante standard Salamander GreenEvolution 76 (100×120 cm) coûte 250–380 EUR vitrage double et pose inclus. Une BluEvolution 92 de même taille coûte 320–480 EUR."],
      ["Quel est le prix minimum pour la menuiserie PVC Salamander ?", "Le prix minimum réaliste pour des fenêtres PVC Salamander avec vitrage et pose professionnelle est de 150 EUR/m². Les offres inférieures utilisent généralement des profilés non certifiés nZEB."],
      ["Quelle est la différence de prix entre GreenEvolution 76 et BluEvolution 92 ?", "BluEvolution 92 coûte 25–40% de plus que GreenEvolution 76 pour la même configuration. La différence tient aux 6 chambres vs 5, à la profondeur 92–104 mm vs 76 mm et au Uw = 0,70 vs 0,73 W/(m²K)."],
      ["Les prix incluent-ils la TVA ?", "Les prix indicatifs sont hors TVA. La TVA de 19% s'ajoute à la facturation."],
    ],
    see_also: 'Voir aussi',
    link_main: 'Menuiserie PVC Salamander — tous les profilés',
    link_buc: 'Pose menuiserie PVC à Bucarest',
  },
  es: {
    label: 'Carpintería PVC · Neofort BIZ',
    parent: 'Carpintería PVC',
    h1: 'Precios Carpintería PVC 2026 — Guía Completa por Perfil Salamander',
    sub: 'Precios actualizados 2026 para carpintería PVC Salamander — desde perfiles económicos GreenEvolution 76 hasta sistemas premium nZEB BluEvolution 92.',
    intro: 'Los precios de la carpintería PVC varían según el sistema de perfil elegido, el tipo de vidrio aislante y la complejidad de la configuración. Esta página centraliza los precios orientativos para todos los perfiles Salamander comercializados por Neofort BIZ, actualizados para 2026.',
    table_title: 'Precios orientativos por sistema — 2026',
    th: ['Sistema', 'Categoría', 'Precio estimado / m²', 'Ideal para'],
    rows: [
      ['GreenEvolution 76 MD FLEX', 'Estándar', '150–220 EUR/m²', 'Renovaciones apartamentos, presupuesto equilibrado'],
      ['GreenEvolution 76 MD ROUND', 'Estándar', '155–225 EUR/m²', 'Diseño contemporáneo, bordes redondeados'],
      ['GreenEvolution 76 AD FLEX', 'Performance', '165–235 EUR/m²', 'Mayor aislamiento acústico, 2 juntas EPDM'],
      ['BluEvolution 92 FLEX', 'Premium', '200–280 EUR/m²', 'Casas nZEB, máxima eficiencia energética'],
      ['BluEvolution 92 ROUND', 'Premium', '205–285 EUR/m²', 'Diseño moderno + rendimiento nZEB'],
      ['BluEvolution 92 ALU (chapado)', 'Premium+', '250–350 EUR/m²', 'Aspecto aluminio, rendimiento PVC nZEB'],
    ],
    note: '* Precios incluyen perfil PVC, herrajes estándar y doble acristalamiento aislante. La instalación profesional se presupuesta por separado a solicitud.',
    factors_title: 'Qué influye en el precio final',
    factors: [
      ['Sistema de perfil', 'GreenEvolution 76 (5 cámaras) vs BluEvolution 92 (6 cámaras) — diferencia del 30–50% en el perfil'],
      ['Vidrio aislante', 'Doble acristalamiento estándar vs triple Low-E nZEB — diferencia de 40–80 EUR/m²'],
      ['Tipo de apertura', 'Batiente < oscilobatiente < corredera — complejidad y precio crecientes'],
      ['Color del perfil', 'Estándar (7 colores) incluido; RAL especiales o laminados +8–15% sobre el perfil'],
      ['Herrajes', 'Estándar vs antieffracción RC2/RC3 — diferencia de 40–120 EUR por ventana'],
      ['Instalación', 'Estándar vs nZEB con premarcos Blaugelb Triotherm+ — diferencia de 25–50 EUR/ml'],
    ],
    cta_h: 'Solicite presupuesto personalizado',
    cta_sub: 'Precio exacto determinado tras medición gratuita en obra.',
    cta_btn: 'Presupuesto gratuito',
    cta_call: 'Llamar ahora',
    faq_title: 'Preguntas frecuentes sobre precios',
    faq: [
      ['¿Cuánto cuesta una ventana PVC Salamander?', 'Una ventana oscilobatiente estándar Salamander GreenEvolution 76 (100×120 cm) cuesta 250–380 EUR incluyendo doble acristalamiento y instalación. Una BluEvolution 92 del mismo tamaño cuesta 320–480 EUR.'],
      ['¿Cuál es el precio mínimo para carpintería PVC Salamander?', 'El precio mínimo realista para carpintería PVC Salamander con vidrio y instalación profesional es de 150 EUR/m². Las ofertas por debajo suelen usar perfiles no certificados nZEB.'],
      ['¿Cuál es la diferencia de precio entre GreenEvolution 76 y BluEvolution 92?', 'BluEvolution 92 cuesta un 25–40% más que GreenEvolution 76 para la misma configuración. La diferencia se debe a las 6 cámaras vs 5, profundidad 92–104 mm vs 76 mm y Uw = 0,70 vs 0,73 W/(m²K).'],
      ['¿Los precios incluyen IVA?', 'Los precios orientativos son sin IVA. El IVA del 19% se añade en la facturación.'],
    ],
    see_also: 'Ver también',
    link_main: 'Carpintería PVC Salamander — todos los perfiles',
    link_buc: 'Instalación carpintería PVC en Bucarest',
  },
  it: {
    label: 'Infissi PVC · Neofort BIZ',
    parent: 'Infissi PVC',
    h1: 'Prezzi Infissi PVC 2026 — Guida Completa per Profilo Salamander',
    sub: 'Prezzi aggiornati 2026 per infissi PVC Salamander — dai profilati economici GreenEvolution 76 ai sistemi premium nZEB BluEvolution 92.',
    intro: "I prezzi degli infissi in PVC variano in base al sistema di profilato scelto, al tipo di vetro isolante e alla complessità della configurazione. Questa pagina centralizza i prezzi indicativi per tutti i profilati Salamander commercializzati da Neofort BIZ, aggiornati per il 2026.",
    table_title: 'Prezzi indicativi per sistema — 2026',
    th: ['Sistema', 'Categoria', 'Prezzo stimato / m²', 'Ideale per'],
    rows: [
      ['GreenEvolution 76 MD FLEX', 'Standard', '150–220 EUR/m²', 'Ristrutturazioni appartamenti, budget equilibrato'],
      ['GreenEvolution 76 MD ROUND', 'Standard', '155–225 EUR/m²', 'Design contemporaneo, bordi arrotondati'],
      ['GreenEvolution 76 AD FLEX', 'Performance', '165–235 EUR/m²', 'Isolamento acustico superiore, 2 guarnizioni EPDM'],
      ['BluEvolution 92 FLEX', 'Premium', '200–280 EUR/m²', 'Case nZEB, massima efficienza energetica'],
      ['BluEvolution 92 ROUND', 'Premium', '205–285 EUR/m²', 'Design moderno + performance nZEB'],
      ["BluEvolution 92 ALU (rivestito)", 'Premium+', '250–350 EUR/m²', "Aspetto alluminio, performance PVC nZEB"],
    ],
    note: "* Prezzi includono profilato PVC, ferramenta standard e doppio vetro isolante. La posa professionale viene preventivata separatamente su richiesta.",
    factors_title: 'Cosa influenza il prezzo finale',
    factors: [
      ['Sistema di profilato', 'GreenEvolution 76 (5 camere) vs BluEvolution 92 (6 camere) — differenza del 30–50% sul profilato'],
      ['Vetro isolante', 'Doppio vetro standard vs triplo Low-E nZEB — differenza di 40–80 EUR/m²'],
      ["Tipo di apertura", "Battente < ribaltabile < scorrevole — complessità e prezzo crescenti"],
      ['Colore profilato', 'Standard (7 colori) incluso; RAL speciali o pellicole decorative +8–15% sul profilato'],
      ['Ferramenta', 'Standard vs antieffrazione RC2/RC3 — differenza di 40–120 EUR per finestra'],
      ['Posa', "Standard vs nZEB con precontrotelaio Blaugelb Triotherm+ — differenza di 25–50 EUR/ml"],
    ],
    cta_h: 'Richiedete un preventivo personalizzato',
    cta_sub: 'Prezzo esatto determinato dopo rilievi gratuiti in loco.',
    cta_btn: 'Preventivo gratuito',
    cta_call: 'Chiama ora',
    faq_title: 'Domande frequenti sui prezzi',
    faq: [
      ["Quanto costa una finestra PVC Salamander?", "Una finestra ribaltabile standard Salamander GreenEvolution 76 (100×120 cm) costa 250–380 EUR inclusi doppio vetro isolante e posa. Una BluEvolution 92 delle stesse dimensioni costa 320–480 EUR."],
      ["Qual è il prezzo minimo per infissi PVC Salamander?", "Il prezzo minimo realistico per infissi PVC Salamander con vetro e posa professionale è di 150 EUR/m². Le offerte al di sotto utilizzano solitamente profilati non certificati nZEB."],
      ["Qual è la differenza di prezzo tra GreenEvolution 76 e BluEvolution 92?", "BluEvolution 92 costa il 25–40% in più rispetto a GreenEvolution 76 per la stessa configurazione. La differenza è dovuta alle 6 camere vs 5, alla profondità 92–104 mm vs 76 mm e a Uw = 0,70 vs 0,73 W/(m²K)."],
      ["I prezzi includono IVA?", "I prezzi indicativi sono al netto IVA. L'IVA del 19% viene aggiunta in fattura."],
    ],
    see_also: 'Vedi anche',
    link_main: 'Infissi PVC Salamander — tutti i profilati',
    link_buc: 'Installazione infissi PVC a Bucarest',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const slug = SLUGS[locale] || SLUGS.ro;
  const parentSlug = PARENT_SLUGS[locale] || PARENT_SLUGS.ro;
  return {
    title: locale === 'ro' ? 'Prețuri Tâmplărie PVC 2026 — Profile Salamander BluEvolution & GreenEvolution | Neofort BIZ'
         : locale === 'en' ? 'PVC Window Prices 2026 — Salamander BluEvolution & GreenEvolution Profiles | Neofort BIZ'
         : locale === 'de' ? 'Kunststofffenster Preise 2026 — Salamander BluEvolution & GreenEvolution | Neofort BIZ'
         : locale === 'fr' ? 'Prix Menuiserie PVC 2026 — Profilés Salamander BluEvolution & GreenEvolution | Neofort BIZ'
         : locale === 'es' ? 'Precios Carpintería PVC 2026 — Perfiles Salamander BluEvolution & GreenEvolution | Neofort BIZ'
         : 'Prezzi Infissi PVC 2026 — Profilati Salamander BluEvolution & GreenEvolution | Neofort BIZ',
    description: locale === 'ro' ? 'Prețuri actualizate 2026 tâmplărie PVC: GreenEvolution 76 de la 150 EUR/mp, BluEvolution 92 de la 200 EUR/mp. Geam termopan, montaj nZEB București.'
               : locale === 'en' ? 'Updated 2026 PVC window prices: GreenEvolution 76 from 150 EUR/m², BluEvolution 92 from 200 EUR/m². Thermal glass, nZEB installation Bucharest.'
               : locale === 'de' ? 'Aktualisierte Preise 2026 PVC-Fenster: GreenEvolution 76 ab 150 EUR/m², BluEvolution 92 ab 200 EUR/m². Isolierglas, nZEB-Montage Bukarest.'
               : locale === 'fr' ? 'Prix actualisés 2026 menuiserie PVC: GreenEvolution 76 à partir de 150 EUR/m², BluEvolution 92 à partir de 200 EUR/m². Vitrage isolant, pose nZEB Bucarest.'
               : locale === 'es' ? 'Precios actualizados 2026 carpintería PVC: GreenEvolution 76 desde 150 EUR/m², BluEvolution 92 desde 200 EUR/m². Vidrio aislante, instalación nZEB Bucarest.'
               : 'Prezzi aggiornati 2026 infissi PVC: GreenEvolution 76 da 150 EUR/m², BluEvolution 92 da 200 EUR/m². Vetro isolante, posa nZEB Bucarest.',
    keywords: locale === 'ro' ? 'preturi tamplarie pvc, tamplarie pvc pret 2026, cat costa tamplarie pvc, pvc salamander pret, bluevolution 92 pret, greenevolution 76 pret, fereastra pvc pret, termopane pvc pret bucuresti'
            : 'PVC window prices 2026, Salamander PVC windows cost, BluEvolution 92 price, GreenEvolution 76 price',
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
      images: [{ url: `${BASE}/og/Tamplarie_PVC_Salamander.jpg`, width: 1200, height: 630, alt: ui.h1, type: 'image/avif' }],
    },
  };
}

export default async function PreturiPvcPage({ params }) {
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
          <p style={{ fontSize: '.92rem', color: '#4a4a4a', lineHeight: 1.8, marginBottom: '48px' }}>{ui.intro}</p>

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
                      <td key={j} style={{ padding: '12px 16px', color: j === 2 ? '#4a7c59' : '#1a1a1a', fontWeight: j === 2 ? 600 : j === 0 ? 500 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '.8rem', color: '#404040', marginBottom: '48px', fontStyle: 'italic' }}>{ui.note}</p>

          {/* FACTORI */}
          <h2 className="font-condensed text-2xl font-semibold text-primary mb-6">{ui.factors_title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px', marginBottom: '48px' }}>
            {ui.factors.map(([title, desc], i) => (
              <div key={i} style={{ padding: '20px', border: '1px solid #e8e8e4', borderRadius: '6px', borderTop: '3px solid #4a7c59' }}>
                <p style={{ fontSize: '.88rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '6px' }}>{title}</p>
                <p style={{ fontSize: '.84rem', color: '#4a4a4a', lineHeight: 1.6 }}>{desc}</p>
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
              <Link href={`/${parentSlug}/bucuresti`} style={{ fontSize: '.88rem', color: '#4a7c59', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{ui.link_buc}</Link>
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
