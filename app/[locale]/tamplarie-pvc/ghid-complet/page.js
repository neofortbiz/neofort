import { Link } from '../../../../i18n/navigation';

import { BASE, LOCALES } from '../../../../lib/constants.js';
import { getGoogleRating } from '../../../../lib/googleRating.js';
const SLUGS = {
  ro: 'tamplarie-pvc/ghid-complet',
  en: 'pvc-windows/complete-guide',
  de: 'kunststofffenster-pvc/kompletter-ratgeber',
  fr: 'menuiserie-pvc/guide-complet',
  es: 'carpinteria-pvc/guia-completa',
  it: 'infissi-pvc/guida-completa',
};

const PARENT_SLUGS = {
  ro: 'tamplarie-pvc', en: 'pvc-windows',
  de: 'kunststofffenster-pvc', fr: 'menuiserie-pvc',
  es: 'carpinteria-pvc', it: 'infissi-pvc',
};

const PRICES_SLUGS = {
  ro: 'tamplarie-pvc/preturi', en: 'pvc-windows/prices',
  de: 'kunststofffenster-pvc/preise', fr: 'menuiserie-pvc/prix',
  es: 'carpinteria-pvc/precios', it: 'infissi-pvc/prezzi',
};

const UI = {
  ro: {
    h1: 'Ghid Complet Tâmplărie PVC 2026 — Tot ce trebuie să știi despre ferestrele Salamander',
    seo_title: 'Ghid Complet Tâmplărie PVC 2026 — Salamander',
    sub: 'Ghid tehnic despre tâmplăria PVC Salamander: profile, geamuri, feronerie, montaj nZEB și cum alegi sistemul potrivit pentru casa ta din București și Ilfov.',
    breadcrumb: 'Ghid complet',
    parent_label: 'Tâmplărie PVC',
    intro: 'Tâmplăria din PVC este cea mai răspândită soluție pentru ferestre și uși în România. Realizată din profile PVC multicamerale Salamander, de calitate germană, oferă izolare termică foarte bună, o durată de viață estimată de 40–50 de ani și un raport calitate–preț greu de egalat. În acest ghid găsești tot ce îți trebuie pentru o alegere corectă.',
    section1_h2: 'Ce este tâmplăria PVC Salamander?',
    section1: 'Salamander Industrie-Produkte GmbH este un producător german de profile PVC pentru ferestre și uși, folosite de producători de tâmplărie din toată Europa, inclusiv de Neofort BIZ în București. Sistemele Salamander folosesc PVC de clasa A, fără plumb, cu o durată de viață estimată de 40–50 de ani și rezistență certificată la decolorarea UV.',
    systems_h2: 'Sistemele de profile Salamander disponibile la Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 camere', uw: 'Uw de la 0,73 W/m²K', ideal: 'Renovări și apartamente, design drept', link: '/produse/profil-pvc-greenevolution-76-md-flex' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 camere', uw: 'Uw de la 0,73 W/m²K', ideal: 'Design cu muchii rotunjite', link: '/produse/profil-pvc-greenevolution-76-md-round' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 camere + 2 garnituri EPDM', uw: 'Uw de la 0,73 W/m²K', ideal: 'Design drept, buget echilibrat', link: '/produse/profil-pvc-greenevolution-76-ad-flex' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 camere', uw: 'Uw de la 0,70 W/m²K', ideal: 'Case nZEB, eficiență energetică maximă', link: '/produse/profil-pvc-bluevolution-92-flex' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 camere', uw: 'Uw de la 0,70 W/m²K', ideal: 'Case nZEB, design cu muchii rotunjite', link: '/produse/profil-pvc-bluevolution-92-round' },
      { name: 'BluEvolution 92 ALU', chambers: '6 camere + placare din aluminiu', uw: 'Uw de la 0,70 W/m²K', ideal: 'Aspect de aluminiu, performanță PVC', link: '/produse/profil-pvc-bluevolution-92-alu' },
    ],
    glass_h2: 'Geamul termoizolant — alegerea care contează cel mai mult',
    glass: 'Geamul reprezintă 70–80% din suprafața ferestrei și are cel mai mare impact asupra izolării termice. Neofort BIZ lucrează exclusiv cu geam Saint-Gobain SGG. Geamul dublu Low-E (2 foi) este soluția standard pentru renovări, cu un coeficient Ug de 1,0–1,1 W/m²K. Geamul tripan Low-E cu argon (3 foi) este soluția recomandată pentru casele nZEB, cu valori Ug de 0,5–0,6 W/m²K. Diferența de confort se simte mai ales iarna: tripanul elimină senzația de frig radiant din apropierea ferestrei.',
    montaj_h2: 'Montajul profesional — diferența dintre o fereastră bună și una excelentă',
    montaj: 'Cea mai bună tâmplărie PVC montată greșit pierde o parte importantă din performanța termică. Neofort BIZ aplică standardul RAL de montaj: bandă butilică precomprimată la exterior (impermeabilă la apă, permeabilă la vapori), folie antivapori la interior și spumă PU între toc și zid. Pentru proiectele nZEB recomandăm precadrele Blaugelb Triotherm+, care elimină puntea termică la conturul ferestrei — disponibile ca opțiune separată, la cerere.',
    nzeb_h2: 'Tâmplăria PVC și certificarea nZEB — ce trebuie să știi',
    nzeb: 'Normativul nZEB (Nearly Zero Energy Building) din România stabilește valori maxime pentru coeficientul de transfer termic al ferestrei (Uw), diferențiate pe zone climatice. Pentru o casă nZEB în București se urmăresc valori Uw sub 1,0 W/m²K, iar pentru o casă pasivă sub 0,8 W/m²K. Pentru aceste valori recomandăm sistemul BluEvolution 92 cu geam tripan Low-E Saint-Gobain și montaj pe precadre Blaugelb. Neofort BIZ oferă consultanță completă pentru proiectele nZEB și livrează în toată România.',
    faq_h2: 'Întrebări frecvente — tâmplărie PVC',
    faq: [
      { q: 'Cât durează tâmplăria PVC Salamander?', a: 'Profilele Salamander au o durată de viață estimată de 40–50 de ani. Cu întreținere corectă (curățare anuală, ungerea feroneriei), funcționarea rămâne impecabilă.' },
      { q: 'Pot vopsi tâmplăria PVC?', a: 'Tâmplăria PVC Salamander este disponibilă în 7 culori standard și într-o gamă largă de folii decorative, inclusiv imitație de lemn și nuanțe RAL. Revopsirea nu este necesară și nici recomandată.' },
      { q: 'Când este tâmplăria PVC mai bună decât aluminiul?', a: 'PVC-ul izolează termic mai bine decât aluminiul standard. Este soluția ideală pentru locuințe cu buget optimizat și cerințe nZEB. Aluminiul este preferat pentru goluri mari (peste 4 m), design arhitectural subțire și fațade comerciale.' },
      { q: 'Cât durează producția și montajul?', a: 'Producția durează 2–4 săptămâni de la semnarea comenzii. Montajul se face în 1–3 zile, în funcție de volumul comenzii. Neofort BIZ asigură transportul și montajul în București, Ilfov și în toată România.' },
    ],
    cta_h: 'Solicitați oferta personalizată',
    cta_desc: 'Echipa Neofort BIZ vă pregătește o ofertă completă, cu prețuri, pentru tâmplăria PVC Salamander, în București și Ilfov. Măsurătorile finale se fac după semnarea contractului.',
    cta_btn: 'Cerere ofertă',
    prices_link: 'Vezi prețurile orientative 2026',
    related_h2: 'Articole utile despre tâmplăria PVC',
  },
  en: {
    h1: 'Complete PVC Window Guide 2026 — Everything About Salamander Windows',
    seo_title: 'Complete PVC Window Guide 2026 — Salamander',
    sub: 'Technical guide to Salamander PVC windows: profiles, glazing, hardware, nZEB installation and choosing the right system for your home in Bucharest and Ilfov.',
    breadcrumb: 'Complete Guide',
    parent_label: 'PVC Windows',
    intro: 'PVC joinery is the most widespread solution for windows and doors in Romania. Made from German-quality Salamander multi-chamber PVC profiles, it offers very good thermal insulation, an estimated service life of 40–50 years and a quality–price ratio that is hard to beat. This guide gives you everything you need to make the right choice.',
    section1_h2: 'What is Salamander PVC Joinery?',
    section1: 'Salamander Industrie-Produkte GmbH is a German manufacturer of PVC profiles for windows and doors, used by window makers across Europe, including Neofort BIZ in Bucharest. Salamander systems use lead-free Class A PVC, with an estimated service life of 40–50 years and certified UV colour resistance.',
    systems_h2: 'Salamander Profile Systems Available at Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 chambers', uw: 'Uw from 0.73 W/m²K', ideal: 'Renovations and apartments, straight design', link: '/products/greenevolution-76-md-flex-pvc-profile' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 chambers', uw: 'Uw from 0.73 W/m²K', ideal: 'Design with rounded edges', link: '/products/greenevolution-76-md-round-pvc-profile' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 chambers + 2 EPDM seals', uw: 'Uw from 0.73 W/m²K', ideal: 'Straight design, balanced budget', link: '/products/greenevolution-76-ad-flex-pvc-profile' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 chambers', uw: 'Uw from 0.70 W/m²K', ideal: 'nZEB homes, maximum energy efficiency', link: '/products/bluevolution-92-flex-pvc-profile' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 chambers', uw: 'Uw from 0.70 W/m²K', ideal: 'nZEB homes, rounded-edge design', link: '/products/bluevolution-92-round-pvc-profile' },
      { name: 'BluEvolution 92 ALU', chambers: '6 chambers + aluminium cladding', uw: 'Uw from 0.70 W/m²K', ideal: 'Aluminium look, PVC performance', link: '/products/bluevolution-92-alu-pvc-profile' },
    ],
    glass_h2: 'Insulating Glass — The Choice That Matters Most',
    glass: 'Glass makes up 70–80% of the window surface and has the greatest impact on thermal insulation. Neofort BIZ works exclusively with Saint-Gobain SGG glass. Double Low-E glazing (2 panes) is the standard solution for renovations, with a Ug of 1.0–1.1 W/m²K. Triple Low-E glazing with argon (3 panes) is the recommended solution for nZEB homes, reaching Ug values of 0.5–0.6 W/m²K.',
    montaj_h2: 'Professional Installation — The Difference Between Good and Excellent',
    montaj: 'Even the best PVC joinery loses a significant part of its thermal performance if it is installed incorrectly. Neofort BIZ applies the RAL installation standard: pre-compressed butyl tape on the outside, vapour barrier film on the inside and PU foam between frame and wall. For nZEB projects we recommend Blaugelb Triotherm+ precasings, which eliminate the thermal bridge around the window — available as a separate option on request.',
    nzeb_h2: 'PVC Windows and nZEB Certification — What You Need to Know',
    nzeb: 'Romania\'s nZEB regulation sets maximum values for the window heat transfer coefficient (Uw), which differ by climate zone. For an nZEB home in Bucharest the target is a Uw below 1.0 W/m²K, and for a passive house below 0.8 W/m²K. To reach these values we recommend BluEvolution 92 with Saint-Gobain triple Low-E glazing and installation on Blaugelb precasings. Neofort BIZ provides complete nZEB consultancy.',
    faq_h2: 'Frequently Asked Questions — PVC Windows',
    faq: [
      { q: 'How long do Salamander PVC windows last?', a: 'Salamander profiles have an estimated service life of 40–50 years. With correct maintenance (annual cleaning, hardware lubrication), they keep working perfectly.' },
      { q: 'Can PVC windows be painted?', a: 'Salamander PVC windows come in 7 standard colours and a wide range of decorative foils, including woodgrain and RAL shades. Repainting is neither necessary nor recommended.' },
      { q: 'When is PVC better than aluminium?', a: 'PVC insulates better than standard aluminium. It is the ideal solution for homes with an optimised budget and nZEB requirements. Aluminium is preferred for large openings (over 4 m), slim architectural design and commercial facades.' },
      { q: 'How long do production and installation take?', a: 'Production takes 2–4 weeks from order signing. Installation takes 1–3 days depending on the size of the order. Neofort BIZ provides transport and installation in Bucharest, Ilfov and throughout Romania.' },
    ],
    cta_h: 'Request a Personalised Quote',
    cta_desc: 'The Neofort BIZ team will prepare a complete quote with prices for Salamander PVC windows, in Bucharest and Ilfov. Final measurements are taken after the contract is signed.',
    cta_btn: 'Request Quote',
    prices_link: 'See 2026 Indicative Prices',
    related_h2: 'Useful Articles About PVC Windows',
  },
  de: {
    h1: 'Kompletter PVC-Fenster-Ratgeber 2026 — Alles über Salamander-Fenster',
    seo_title: 'PVC-Fenster-Ratgeber 2026 — Salamander-Fenster',
    sub: 'Technischer Ratgeber zu Salamander-Kunststofffenstern: Profile, Verglasung, Beschläge, nZEB-Montage und die Wahl des richtigen Systems in Bukarest und Ilfov.',
    breadcrumb: 'Kompletter Ratgeber',
    parent_label: 'Kunststofffenster',
    intro: 'Kunststofffenster sind in Rumänien die am weitesten verbreitete Lösung für Fenster und Türen. Aus Salamander-Mehrkammerprofilen in deutscher Qualität gefertigt, bieten sie sehr gute Wärmedämmung, eine geschätzte Lebensdauer von 40–50 Jahren und ein kaum zu übertreffendes Preis-Leistungs-Verhältnis.',
    section1_h2: 'Was sind Salamander-Kunststofffenster?',
    section1: 'Salamander Industrie-Produkte GmbH ist ein deutscher Hersteller von PVC-Profilen für Fenster und Türen, die von Fensterbauern in ganz Europa verarbeitet werden, darunter Neofort BIZ in Bukarest. Salamander-Systeme verwenden bleifreies PVC der Klasse A mit einer geschätzten Lebensdauer von 40–50 Jahren und zertifizierter UV-Farbbeständigkeit.',
    systems_h2: 'Salamander-Profilsysteme bei Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 Kammern', uw: 'Uw ab 0,73 W/m²K', ideal: 'Renovierungen und Wohnungen, gerades Design', link: '/produkte/greenevolution-76-md-flex-pvc-profil' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 Kammern', uw: 'Uw ab 0,73 W/m²K', ideal: 'Design mit gerundeten Kanten', link: '/produkte/greenevolution-76-md-round-pvc-profil' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 Kammern + 2 EPDM-Dichtungen', uw: 'Uw ab 0,73 W/m²K', ideal: 'Gerades Design, ausgewogenes Budget', link: '/produkte/greenevolution-76-ad-flex-pvc-profil' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 Kammern', uw: 'Uw ab 0,70 W/m²K', ideal: 'nZEB-Häuser, maximale Energieeffizienz', link: '/produkte/bluevolution-92-flex-pvc-profil' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 Kammern', uw: 'Uw ab 0,70 W/m²K', ideal: 'nZEB-Häuser, Design mit gerundeten Kanten', link: '/produkte/bluevolution-92-round-pvc-profil' },
      { name: 'BluEvolution 92 ALU', chambers: '6 Kammern + Aluminiumverkleidung', uw: 'Uw ab 0,70 W/m²K', ideal: 'Aluminium-Optik, PVC-Leistung', link: '/produkte/bluevolution-92-alu-pvc-profil' },
    ],
    glass_h2: 'Isolierverglasung — Die entscheidende Wahl',
    glass: 'Glas macht 70–80 % der Fensterfläche aus und hat den größten Einfluss auf die Wärmedämmung. Neofort BIZ arbeitet ausschließlich mit Saint-Gobain SGG Glas. Zweifach-Low-E-Verglasung ist die Standardlösung für Renovierungen, mit einem Ug von 1,0–1,1 W/m²K. Dreifach-Low-E-Verglasung mit Argon ist die empfohlene Lösung für nZEB-Häuser, mit Ug-Werten von 0,5–0,6 W/m²K.',
    montaj_h2: 'Professionelle Montage — Der Unterschied zwischen gut und exzellent',
    montaj: 'Selbst das beste Kunststofffenster verliert bei falscher Montage einen erheblichen Teil seiner Wärmedämmleistung. Neofort BIZ montiert nach RAL-Standard: vorkomprimiertes Butylband außen, Dampfsperrfolie innen und PU-Schaum zwischen Rahmen und Wand. Für nZEB-Projekte empfehlen wir Blaugelb Triotherm+ Montagerahmen, die die Wärmebrücke am Fensteranschluss beseitigen — als separate Option auf Anfrage erhältlich.',
    nzeb_h2: 'PVC-Fenster und nZEB-Zertifizierung',
    nzeb: 'Die nZEB-Vorschrift in Rumänien legt Höchstwerte für den Wärmedurchgangskoeffizienten des Fensters (Uw) fest, die je nach Klimazone unterschiedlich sind. Für ein nZEB-Haus in Bukarest wird ein Uw unter 1,0 W/m²K angestrebt, für ein Passivhaus unter 0,8 W/m²K. Dafür empfehlen wir BluEvolution 92 mit Saint-Gobain Dreifach-Low-E-Verglasung und Montage auf Blaugelb-Montagerahmen.',
    faq_h2: 'Häufig gestellte Fragen — Kunststofffenster',
    faq: [
      { q: 'Wie lange halten Salamander-Kunststofffenster?', a: 'Salamander-Profile haben eine geschätzte Lebensdauer von 40–50 Jahren. Mit korrekter Wartung (jährliche Reinigung, Schmierung der Beschläge) bleibt die Funktion einwandfrei.' },
      { q: 'Können Kunststofffenster gestrichen werden?', a: 'Salamander-Kunststofffenster sind in 7 Standardfarben und mit einer großen Auswahl an Dekorfolien erhältlich, einschließlich Holzoptik und RAL-Tönen. Überstreichen ist weder notwendig noch empfehlenswert.' },
      { q: 'Wann ist PVC besser als Aluminium?', a: 'PVC dämmt besser als Standard-Aluminium. Es ist die ideale Lösung für Wohngebäude mit optimiertem Budget und nZEB-Anforderungen. Aluminium wird für große Öffnungen (über 4 m), schlankes architektonisches Design und Gewerbefassaden bevorzugt.' },
      { q: 'Wie lange dauern Produktion und Montage?', a: 'Die Produktion dauert 2–4 Wochen ab Auftragserteilung. Die Montage ist je nach Auftragsumfang in 1–3 Tagen abgeschlossen. Neofort BIZ liefert und montiert in Bukarest, Ilfov und ganz Rumänien.' },
    ],
    cta_h: 'Personalisiertes Angebot anfordern',
    cta_desc: 'Das Team von Neofort BIZ erstellt Ihnen ein vollständiges Angebot für Salamander-Kunststofffenster, in Bukarest und Ilfov. Das endgültige Aufmaß erfolgt nach Vertragsabschluss.',
    cta_btn: 'Angebot anfordern',
    prices_link: 'Orientierungspreise 2026 ansehen',
    related_h2: 'Nützliche Artikel über Kunststofffenster',
  },
  fr: {
    h1: 'Guide complet menuiserie PVC 2026 — Tout sur les fenêtres Salamander',
    seo_title: 'Guide complet menuiserie PVC 2026 — Salamander',
    sub: 'Guide technique de la menuiserie PVC Salamander : profilés, vitrage, quincaillerie, pose nZEB et choix du bon système pour votre maison à Bucarest et Ilfov.',
    breadcrumb: 'Guide complet',
    parent_label: 'Menuiserie PVC',
    intro: 'La menuiserie PVC est la solution la plus répandue pour les fenêtres et les portes en Roumanie. Fabriquée à partir de profilés PVC multichambres Salamander de qualité allemande, elle offre une très bonne isolation thermique, une durée de vie estimée de 40 à 50 ans et un rapport qualité-prix difficile à égaler.',
    section1_h2: 'Qu\'est-ce que la menuiserie PVC Salamander ?',
    section1: 'Salamander Industrie-Produkte GmbH est un fabricant allemand de profilés PVC pour fenêtres et portes, utilisés par des menuisiers dans toute l\'Europe, dont Neofort BIZ à Bucarest. Les systèmes Salamander utilisent un PVC de classe A, sans plomb, avec une durée de vie estimée de 40 à 50 ans et une résistance certifiée à la décoloration UV.',
    systems_h2: 'Systèmes de profilés Salamander disponibles chez Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 chambres', uw: 'Uw à partir de 0,73 W/m²K', ideal: 'Rénovations et appartements, design droit', link: '/produits/profil-pvc-greenevolution-76-md-flex' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 chambres', uw: 'Uw à partir de 0,73 W/m²K', ideal: 'Design aux bords arrondis', link: '/produits/profil-pvc-greenevolution-76-md-round' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 chambres + 2 joints EPDM', uw: 'Uw à partir de 0,73 W/m²K', ideal: 'Design droit, budget équilibré', link: '/produits/profil-pvc-greenevolution-76-ad-flex' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 chambres', uw: 'Uw à partir de 0,70 W/m²K', ideal: 'Maisons nZEB, efficacité énergétique maximale', link: '/produits/profil-pvc-bluevolution-92-flex' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 chambres', uw: 'Uw à partir de 0,70 W/m²K', ideal: 'Maisons nZEB, design aux bords arrondis', link: '/produits/profil-pvc-bluevolution-92-round' },
      { name: 'BluEvolution 92 ALU', chambers: '6 chambres + habillage aluminium', uw: 'Uw à partir de 0,70 W/m²K', ideal: 'Aspect aluminium, performance PVC', link: '/produits/profil-pvc-bluevolution-92-alu' },
    ],
    glass_h2: 'Le vitrage isolant — Le choix qui compte le plus',
    glass: 'Le vitrage représente 70 à 80 % de la surface de la fenêtre et a le plus grand impact sur l\'isolation thermique. Neofort BIZ travaille exclusivement avec le verre Saint-Gobain SGG. Le double vitrage Low-E (2 verres) est la solution standard en rénovation, avec un Ug de 1,0 à 1,1 W/m²K. Le triple vitrage Low-E à l\'argon (3 verres) est la solution recommandée pour les maisons nZEB, avec des valeurs Ug de 0,5 à 0,6 W/m²K.',
    montaj_h2: 'La pose professionnelle — La difference entre bon et excellent',
    montaj: 'Même la meilleure menuiserie PVC perd une part importante de ses performances thermiques si elle est mal posée. Neofort BIZ applique la norme de pose RAL : bande butyle précomprimée à l\'extérieur, film pare-vapeur à l\'intérieur et mousse PU entre le dormant et le mur. Pour les projets nZEB, nous recommandons les précadres Blaugelb Triotherm+, qui suppriment le pont thermique au pourtour de la fenêtre — disponibles en option séparée, sur demande.',
    nzeb_h2: 'Menuiserie PVC et certification nZEB',
    nzeb: 'La réglementation nZEB en Roumanie fixe des valeurs maximales pour le coefficient de transmission thermique de la fenêtre (Uw), différentes selon la zone climatique. Pour une maison nZEB à Bucarest, on vise un Uw inférieur à 1,0 W/m²K, et pour une maison passive inférieur à 0,8 W/m²K. Pour ces valeurs, nous recommandons le BluEvolution 92 avec triple vitrage Low-E Saint-Gobain et pose sur précadres Blaugelb.',
    faq_h2: 'Questions fréquentes — menuiserie PVC',
    faq: [
      { q: 'Combien de temps durent les fenêtres PVC Salamander ?', a: 'Les profilés Salamander ont une durée de vie estimée de 40 à 50 ans. Avec un entretien correct (nettoyage annuel, graissage de la quincaillerie), le fonctionnement reste impeccable.' },
      { q: 'Peut-on peindre les menuiseries PVC ?', a: 'Les menuiseries PVC Salamander sont disponibles en 7 couleurs standard et dans un large choix de films décoratifs, y compris aspect bois et teintes RAL. La remise en peinture n\'est ni nécessaire ni recommandée.' },
      { q: 'Quand le PVC est-il préférable à l\'aluminium ?', a: 'Le PVC isole mieux que l\'aluminium standard. C\'est la solution idéale pour les logements au budget optimisé et aux exigences nZEB. L\'aluminium est préféré pour les grandes baies (plus de 4 m), les designs architecturaux fins et les façades commerciales.' },
      { q: 'Combien de temps durent la fabrication et la pose ?', a: 'La fabrication prend 2 à 4 semaines après la signature de la commande. La pose est réalisée en 1 à 3 jours selon le volume de la commande. Neofort BIZ assure le transport et la pose à Bucarest, dans l\'Ilfov et dans toute la Roumanie.' },
    ],
    cta_h: 'Demander un devis personnalisé',
    cta_desc: 'L\'équipe Neofort BIZ vous prépare un devis complet pour les menuiseries PVC Salamander, à Bucarest et Ilfov. La prise de mesures définitive intervient après la signature du contrat.',
    cta_btn: 'Demander un devis',
    prices_link: 'Voir les prix indicatifs 2026',
    related_h2: 'Articles utiles sur la menuiserie PVC',
  },
  es: {
    h1: 'Guía completa carpintería PVC 2026 — Todo sobre las ventanas Salamander',
    seo_title: 'Guía completa carpintería PVC Salamander 2026',
    sub: 'Guía técnica de la carpintería PVC Salamander: perfiles, acristalamiento, herrajes, instalación nZEB y cómo elegir el sistema adecuado en Bucarest e Ilfov.',
    breadcrumb: 'Guía completa',
    parent_label: 'Carpintería PVC',
    intro: 'La carpintería de PVC es la solución más extendida para ventanas y puertas en Rumanía. Fabricada con perfiles multicámara Salamander de calidad alemana, ofrece un aislamiento térmico muy bueno, una vida útil estimada de 40 a 50 años y una relación calidad-precio difícil de igualar.',
    section1_h2: '¿Qué es la carpintería PVC Salamander?',
    section1: 'Salamander Industrie-Produkte GmbH es un fabricante alemán de perfiles de PVC para ventanas y puertas, utilizados por fabricantes de carpintería de toda Europa, entre ellos Neofort BIZ en Bucarest. Los sistemas Salamander utilizan PVC de clase A, sin plomo, con una vida útil estimada de 40 a 50 años y resistencia certificada a la decoloración UV.',
    systems_h2: 'Sistemas de perfiles Salamander en Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 cámaras', uw: 'Uw desde 0,73 W/m²K', ideal: 'Reformas y pisos, diseño recto', link: '/productos/perfil-pvc-greenevolution-76-md-flex' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 cámaras', uw: 'Uw desde 0,73 W/m²K', ideal: 'Diseño con cantos redondeados', link: '/productos/perfil-pvc-greenevolution-76-md-round' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 cámaras + 2 juntas EPDM', uw: 'Uw desde 0,73 W/m²K', ideal: 'Diseño recto, presupuesto equilibrado', link: '/productos/perfil-pvc-greenevolution-76-ad-flex' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 cámaras', uw: 'Uw desde 0,70 W/m²K', ideal: 'Casas nZEB, máxima eficiencia energética', link: '/productos/perfil-pvc-bluevolution-92-flex' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 cámaras', uw: 'Uw desde 0,70 W/m²K', ideal: 'Casas nZEB, diseño con cantos redondeados', link: '/productos/perfil-pvc-bluevolution-92-round' },
      { name: 'BluEvolution 92 ALU', chambers: '6 cámaras + revestimiento de aluminio', uw: 'Uw desde 0,70 W/m²K', ideal: 'Aspecto de aluminio, rendimiento del PVC', link: '/productos/perfil-pvc-bluevolution-92-alu' },
    ],
    glass_h2: 'El vidrio aislante: la elección que más importa',
    glass: 'El vidrio representa el 70–80 % de la superficie de la ventana y es lo que más influye en el aislamiento térmico. Neofort BIZ trabaja exclusivamente con vidrio Saint-Gobain SGG. El doble acristalamiento Low-E (2 vidrios) es la solución estándar en reformas, con un Ug de 1,0–1,1 W/m²K. El triple acristalamiento Low-E con argón (3 vidrios) es la solución recomendada para casas nZEB, con valores Ug de 0,5–0,6 W/m²K.',
    montaj_h2: 'La instalación profesional: la diferencia entre bueno y excelente',
    montaj: 'Incluso la mejor carpintería de PVC pierde una parte importante de su rendimiento térmico si se instala mal. Neofort BIZ aplica el estándar de instalación RAL: cinta de butilo precomprimida en el exterior, lámina barrera de vapor en el interior y espuma de PU entre el marco y la pared. Para proyectos nZEB recomendamos los premarcos Blaugelb Triotherm+, que eliminan el puente térmico en el contorno de la ventana; disponibles como opción aparte, bajo petición.',
    nzeb_h2: 'Carpintería PVC y certificación nZEB',
    nzeb: 'La normativa nZEB de Rumanía fija valores máximos para el coeficiente de transmitancia térmica de la ventana (Uw), distintos según la zona climática. Para una casa nZEB en Bucarest se busca un Uw inferior a 1,0 W/m²K, y para una casa pasiva, inferior a 0,8 W/m²K. Para estos valores recomendamos BluEvolution 92 con triple acristalamiento Low-E Saint-Gobain e instalación sobre premarcos Blaugelb.',
    faq_h2: 'Preguntas frecuentes: carpintería PVC',
    faq: [
      { q: '¿Cuánto duran las ventanas de PVC Salamander?', a: 'Los perfiles Salamander tienen una vida útil estimada de 40 a 50 años. Con el mantenimiento correcto (limpieza anual, engrase de los herrajes), el funcionamiento sigue siendo impecable.' },
      { q: '¿Se puede pintar la carpintería de PVC?', a: 'La carpintería PVC Salamander está disponible en 7 colores estándar y en una amplia gama de láminas decorativas, incluidas imitaciones de madera y tonos RAL. Repintar no es necesario ni recomendable.' },
      { q: '¿Cuándo es mejor el PVC que el aluminio?', a: 'El PVC aísla mejor que el aluminio estándar. Es la solución ideal para viviendas con presupuesto ajustado y requisitos nZEB. El aluminio se prefiere para huecos grandes (más de 4 m), diseños arquitectónicos esbeltos y fachadas comerciales.' },
      { q: '¿Cuánto duran la fabricación y la instalación?', a: 'La fabricación tarda de 2 a 4 semanas desde la firma del pedido. La instalación se completa en 1 a 3 días, según el volumen del pedido. Neofort BIZ se encarga del transporte y la instalación en Bucarest, Ilfov y toda Rumanía.' },
    ],
    cta_h: 'Solicitar presupuesto personalizado',
    cta_desc: 'El equipo de Neofort BIZ le prepara un presupuesto completo para carpintería PVC Salamander, en Bucarest e Ilfov. Las mediciones definitivas se realizan tras la firma del contrato.',
    cta_btn: 'Solicitar presupuesto',
    prices_link: 'Ver precios orientativos 2026',
    related_h2: 'Artículos útiles sobre carpintería PVC',
  },
  it: {
    h1: 'Guida completa infissi PVC 2026 — Tutto sulle finestre Salamander',
    seo_title: 'Guida completa infissi PVC 2026 — Salamander',
    sub: 'Guida tecnica agli infissi in PVC Salamander: profili, vetro, ferramenta, posa nZEB e come scegliere il sistema giusto per la casa a Bucarest e Ilfov.',
    breadcrumb: 'Guida completa',
    parent_label: 'Infissi PVC',
    intro: 'Gli infissi in PVC sono la soluzione più diffusa per finestre e porte in Romania. Realizzati con profili multicamera Salamander di qualità tedesca, offrono un ottimo isolamento termico, una durata stimata di 40–50 anni e un rapporto qualità-prezzo difficile da battere.',
    section1_h2: 'Cosa sono gli infissi in PVC Salamander?',
    section1: 'Salamander Industrie-Produkte GmbH è un produttore tedesco di profili in PVC per finestre e porte, utilizzati da serramentisti in tutta Europa, tra cui Neofort BIZ a Bucarest. I sistemi Salamander utilizzano PVC di classe A, senza piombo, con una durata stimata di 40–50 anni e resistenza certificata allo scolorimento UV.',
    systems_h2: 'Sistemi di profili Salamander disponibili da Neofort BIZ',
    systems: [
      { name: 'GreenEvolution 76 MD FLEX', chambers: '5 camere', uw: 'Uw da 0,73 W/m²K', ideal: 'Ristrutturazioni e appartamenti, design squadrato', link: '/prodotti/profilo-pvc-greenevolution-76-md-flex' },
      { name: 'GreenEvolution 76 MD ROUND', chambers: '5 camere', uw: 'Uw da 0,73 W/m²K', ideal: 'Design con spigoli arrotondati', link: '/prodotti/profilo-pvc-greenevolution-76-md-round' },
      { name: 'GreenEvolution 76 AD FLEX', chambers: '5 camere + 2 guarnizioni EPDM', uw: 'Uw da 0,73 W/m²K', ideal: 'Design squadrato, budget equilibrato', link: '/prodotti/profilo-pvc-greenevolution-76-ad-flex' },
      { name: 'BluEvolution 92 FLEX', chambers: '6 camere', uw: 'Uw da 0,70 W/m²K', ideal: 'Case nZEB, massima efficienza energetica', link: '/prodotti/profilo-pvc-bluevolution-92-flex' },
      { name: 'BluEvolution 92 ROUND', chambers: '6 camere', uw: 'Uw da 0,70 W/m²K', ideal: 'Case nZEB, design con spigoli arrotondati', link: '/prodotti/profilo-pvc-bluevolution-92-round' },
      { name: 'BluEvolution 92 ALU', chambers: '6 camere + rivestimento in alluminio', uw: 'Uw da 0,70 W/m²K', ideal: 'Aspetto alluminio, prestazioni del PVC', link: '/prodotti/profilo-pvc-bluevolution-92-alu' },
    ],
    glass_h2: 'Il vetro isolante — la scelta che conta di più',
    glass: 'Il vetro rappresenta il 70–80% della superficie della finestra ed è ciò che incide di più sull\'isolamento termico. Neofort BIZ lavora esclusivamente con vetro Saint-Gobain SGG. Il doppio vetro Low-E (2 lastre) è la soluzione standard nelle ristrutturazioni, con un Ug di 1,0–1,1 W/m²K. Il triplo vetro Low-E con argon (3 lastre) è la soluzione consigliata per le case nZEB, con valori Ug di 0,5–0,6 W/m²K.',
    montaj_h2: 'Installazione professionale — La differenza tra buono ed eccellente',
    montaj: 'Anche il miglior infisso in PVC perde una parte importante delle sue prestazioni termiche se viene installato male. Neofort BIZ applica lo standard di posa RAL: nastro butilico precompresso all\'esterno, pellicola barriera al vapore all\'interno e schiuma PU tra telaio e muro. Per i progetti nZEB consigliamo i precontrotelai Blaugelb Triotherm+, che eliminano il ponte termico lungo il perimetro della finestra — disponibili come opzione separata, su richiesta.',
    nzeb_h2: 'Infissi PVC e certificazione nZEB',
    nzeb: 'La normativa nZEB in Romania fissa valori massimi per la trasmittanza termica della finestra (Uw), diversi a seconda della zona climatica. Per una casa nZEB a Bucarest si punta a un Uw inferiore a 1,0 W/m²K, e per una casa passiva inferiore a 0,8 W/m²K. Per questi valori consigliamo BluEvolution 92 con triplo vetro Low-E Saint-Gobain e posa su precontrotelai Blaugelb.',
    faq_h2: 'Domande frequenti — Infissi PVC',
    faq: [
      { q: 'Quanto durano gli infissi in PVC Salamander?', a: 'I profili Salamander hanno una durata stimata di 40–50 anni. Con la manutenzione corretta (pulizia annuale, lubrificazione della ferramenta), il funzionamento resta impeccabile.' },
      { q: 'Si possono verniciare gli infissi in PVC?', a: 'Gli infissi in PVC Salamander sono disponibili in 7 colori standard e in un\'ampia gamma di pellicole decorative, compresi effetto legno e tinte RAL. Riverniciarli non è né necessario né consigliato.' },
      { q: 'Quando il PVC è meglio dell\'alluminio?', a: 'Il PVC isola meglio dell\'alluminio standard. È la soluzione ideale per le abitazioni con budget ottimizzato e requisiti nZEB. L\'alluminio è preferito per grandi aperture (oltre 4 m), design architettonici sottili e facciate commerciali.' },
      { q: 'Quanto durano produzione e posa?', a: 'La produzione richiede 2–4 settimane dalla firma dell\'ordine. La posa si completa in 1–3 giorni, a seconda del volume dell\'ordine. Neofort BIZ si occupa di trasporto e posa a Bucarest, nell\'Ilfov e in tutta la Romania.' },
    ],
    cta_h: 'Richiedi un preventivo personalizzato',
    cta_desc: 'Il team Neofort BIZ vi prepara un preventivo completo per infissi in PVC Salamander, a Bucarest e Ilfov. Le misure definitive si rilevano dopo la firma del contratto.',
    cta_btn: 'Richiedi preventivo',
    prices_link: 'Vedi prezzi indicativi 2026',
    related_h2: 'Articoli utili sugli infissi PVC',
  },
};

const BLOG_LINKS = {
  ro: [
    { slug: 'bluevolution-92-vs-greenevolution-76', label: 'Ghid complet: BluEvolution 92 vs GreenEvolution 76 — care profil PVC Salamander este potrivit pentru tine?' },
    { slug: 'tamplarie-pvc-osciloculisanta-dubla-salamander', label: 'Tâmplărie PVC Osciloculisantă Dublă Salamander — Ghid complet: avantaje, izolare, durată de viață' },
    { slug: 'montaj-precadre-blaugelb-nzeb', label: 'Montaj cu precadre Blaugelb Triotherm+ — de ce este obligatoriu pentru certificarea nZEB' },
    { slug: 'usa-culisanta-pvc-salamander-evolutiondrive-plus-plasa-plisse', label: 'Ușă Culisantă PVC Salamander evolutionDrive Plus+ cu Plasă Plissé Culisantă — Ghid complet' },
  ],
  en: [
    { slug: 'bluevolution-92-vs-greenevolution-76-guide', label: 'Complete Guide: BluEvolution 92 vs GreenEvolution 76 — Which Salamander PVC Profile Is Right for You?' },
    { slug: 'tilt-turn-double-pvc-windows-salamander', label: 'Double Tilt-and-Turn PVC Windows Salamander — Complete Guide: Benefits, Insulation, Lifespan' },
    { slug: 'blaugelb-triotherm-precasing-installation-nzeb', label: 'Installation with Blaugelb Triotherm+ Precasings for nZEB' },
    { slug: 'salamander-evolutiondrive-plus-sliding-door-plisse-screen', label: 'Salamander evolutionDrive Plus+ Sliding PVC Door with Plissé Screen — Complete Guide' },
  ],
  de: [
    { slug: 'bluevolution-92-vs-greenevolution-76-leitfaden', label: 'Leitfaden: BluEvolution 92 vs GreenEvolution 76 — Welches Salamander PVC-Profil ist das richtige?' },
    { slug: 'pvc-fenster-dreh-kipp-salamander', label: 'Salamander Dreh-Kipp PVC-Fenster mit Doppelflügel — Vollständiger Leitfaden: Vorteile, Dämmung, Lebensdauer' },
    { slug: 'blaugelb-triotherm-vorfenster-montage-nzeb', label: 'Montage mit Blaugelb Triotherm+ — Warum es für die nZEB-Zertifizierung obligatorisch ist' },
    { slug: 'salamander-evolutiondrive-plus-schiebetuer-plissee', label: 'Salamander evolutionDrive Plus+ Schiebetür PVC mit Plissee-Insektenschutz — Vollständiger Leitfaden' },
  ],
  fr: [
    { slug: 'bluevolution-92-vs-greenevolution-76-guide', label: 'Guide : BluEvolution 92 vs GreenEvolution 76 — Quel profil PVC Salamander choisir ?' },
    { slug: 'fenetre-pvc-oscillo-battant-double-salamander', label: 'Fenêtre PVC oscillo-battante double Salamander — Guide complet : avantages, isolation, durée de vie' },
    { slug: 'precadres-blaugelb-triotherm-pose-nzeb', label: 'Pose avec précadres Blaugelb Triotherm+ — pourquoi c\'est obligatoire pour la certification nZEB' },
    { slug: 'porte-coulissante-pvc-salamander-evolutiondrive-plus-moustiquaire-plisse', label: 'Porte coulissante PVC Salamander evolutionDrive Plus+ avec moustiquaire plissée — Guide complet' },
  ],
  es: [
    { slug: 'bluevolution-92-vs-greenevolution-76-guia', label: 'Guía: BluEvolution 92 vs GreenEvolution 76 — ¿Qué perfil PVC Salamander elegir?' },
    { slug: 'ventana-pvc-oscilobatiente-doble-salamander', label: 'Ventana PVC oscilobatiente doble Salamander — Guía completa: ventajas, aislamiento, vida útil' },
    { slug: 'instalacion-premarcos-blaugelb-triotherm-nzeb', label: 'Montaje con premarcos Blaugelb Triotherm+ — por qué es obligatorio para la certificación nZEB' },
    { slug: 'puerta-corredera-pvc-salamander-evolutiondrive-plus-mosquitera-plise', label: 'Puerta corredera PVC Salamander evolutionDrive Plus+ con mosquitera plisada — Guía completa' },
  ],
  it: [
    { slug: 'bluevolution-92-vs-greenevolution-76-guida', label: 'Guida: BluEvolution 92 vs GreenEvolution 76 — Quale profilo PVC Salamander scegliere?' },
    { slug: 'finestra-pvc-anta-ribalta-doppia-salamander', label: 'Finestra PVC anta e ribalta doppia Salamander — Guida completa: vantaggi, isolamento, durata' },
    { slug: 'installazione-precontrotelaio-blaugelb-triotherm-nzeb', label: 'Montaggio con precontrotelaio Blaugelb Triotherm+ — perché è obbligatorio per la certificazione nZEB' },
    { slug: 'porta-scorrevole-pvc-salamander-evolutiondrive-plus-zanzariera-plisse', label: 'Porta scorrevole PVC Salamander evolutionDrive Plus+ con zanzariera plissé — Guida completa' },
  ],
};

const WA_URLS = {
  ro: 'https://wa.me/40752443435?text=' + encodeURIComponent('Bună ziua! Doresc o ofertă pentru tâmplărie PVC Salamander.'),
  en: 'https://wa.me/40752443435?text=' + encodeURIComponent('Hello! I would like a quote for Salamander PVC windows.'),
  de: 'https://wa.me/40752443435?text=' + encodeURIComponent('Guten Tag! Ich hätte gern ein Angebot für Salamander-Kunststofffenster.'),
  fr: 'https://wa.me/40752443435?text=' + encodeURIComponent('Bonjour ! Je souhaite un devis pour une menuiserie PVC Salamander.'),
  es: 'https://wa.me/40752443435?text=' + encodeURIComponent('¡Hola! Quisiera un presupuesto de carpintería PVC Salamander.'),
  it: 'https://wa.me/40752443435?text=' + encodeURIComponent('Buongiorno! Vorrei un preventivo per infissi in PVC Salamander.'),
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
    title: `${ui.seo_title || ui.h1} | Neofort BIZ`,
    description: ui.sub,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/${SLUGS[l]}`])),
        'x-default': `${BASE}/ro/${SLUGS.ro}`,
      },
    },
    openGraph: { type: 'article', url: canonical, title: ui.h1, description: ui.sub, siteName: 'Neofort BIZ', images: [{ url: `${BASE}/og/Tamplarie_PVC_Salamander.jpg`, width: 1200, height: 630, type:'image/jpeg' }] },
    twitter: { card: 'summary_large_image', site: '@NeofortBIZ', title: ui.h1, description: ui.sub, images: [`${BASE}/og/Tamplarie_PVC_Salamander.jpg`] },
  };
}

export default async function PVCGhidPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const parentSlug = PARENT_SLUGS[locale] || PARENT_SLUGS.ro;
  const pricesSlug = PRICES_SLUGS[locale] || PRICES_SLUGS.ro;
  const blogLinks = BLOG_LINKS[locale] || BLOG_LINKS.ro;
  const waUrl = WA_URLS[locale] || WA_URLS.ro;
  const waLabel = WA_LABELS[locale] || WA_LABELS.ro;
  const midTitle = MID_TITLES[locale] || MID_TITLES.ro;
  const googleRating = await getGoogleRating();
  const midDesc = (MID_DESCS[locale] || MID_DESCS.ro)(googleRating);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: ui.h1,
    description: ui.sub,
    author: { '@type': 'Organization', name: 'Neofort BIZ', url: BASE },
    publisher: { '@type': 'Organization', name: 'Neofort BIZ', url: BASE },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/${locale}/${SLUGS[locale] || SLUGS.ro}` },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ui.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const iBase = { width: '100%', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '.04em' };


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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#1a2a3a 0%,#2d4a6e 60%,#3a6a9e 100%)', padding: '72px 24px 56px', textAlign: 'center' }}>
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
            <Link href="/contact" style={{ display: 'inline-block', background: '#9e6d16', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none' }}>
              {ui.cta_btn}
            </Link>
            <Link href={`/${pricesSlug}`} style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 500, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', border: '1px solid rgba(255,255,255,.4)' }}>
              {ui.prices_link}
            </Link>

            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#188842', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {waLabel}
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 24px' }}>

        {/* INTRO */}
        <p style={{ fontSize: '1.05rem', color: '#0d0d0d', lineHeight: 1.75, marginBottom: '48px', borderLeft: '3px solid #2d5a8e', paddingLeft: '20px' }}>
          {ui.intro}
        </p>

        {/* SECTIUNEA 1 */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '16px' }}>
          {ui.section1_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#1e1e1e', lineHeight: 1.75, marginBottom: '48px' }}>
          {ui.section1}
        </p>

        {/* SISTEME */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '24px' }}>
          {ui.systems_h2}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(270px,1fr))', gap: '16px', marginBottom: '48px' }}>
          {ui.systems.map((sys, i) => (
            <Link key={i} href={sys.link} style={{ textDecoration: 'none' }}>
              <div style={{ border: '1px solid #e8e8e4', padding: '20px', background: '#fafaf8', transition: 'border-color .2s', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '.85rem', letterSpacing: '.08em', textTransform: 'uppercase', color: '#15222e', marginBottom: '8px' }}>{sys.name}</div>
                <div style={{ fontSize: '.78rem', color: '#162d47', fontWeight: 600, marginBottom: '4px' }}>{sys.uw}</div>
                <div style={{ fontSize: '.75rem', color: '#555555', marginBottom: '8px' }}>{sys.chambers}</div>
                <div style={{ fontSize: '.78rem', color: '#1e1e1e', lineHeight: 1.5 }}>{sys.ideal}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* GEAM */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '16px' }}>
          {ui.glass_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#1e1e1e', lineHeight: 1.75, marginBottom: '48px' }}>{ui.glass}</p>

        {/* MONTAJ */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '16px' }}>
          {ui.montaj_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#1e1e1e', lineHeight: 1.75, marginBottom: '48px' }}>{ui.montaj}</p>

        {/* nZEB */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '16px' }}>
          {ui.nzeb_h2}
        </h2>
        <p style={{ fontSize: '.95rem', color: '#1e1e1e', lineHeight: 1.75, marginBottom: '48px' }}>{ui.nzeb}</p>

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

        {/* ARTICOLE CORELATE */}
        <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem,3vw,1.8rem)', letterSpacing: '.05em', textTransform: 'uppercase', color: '#15222e', marginBottom: '20px' }}>
          {ui.related_h2}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '12px', marginBottom: '56px' }}>
          {blogLinks.map((art, i) => (
            <Link key={i} href={`/blog/${art.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '16px', border: '1px solid #e8e8e4', background: '#fafaf8', fontSize: '.8rem', fontFamily: 'Barlow Condensed,sans-serif', letterSpacing: '.05em', color: '#162d47', lineHeight: 1.4 }}>
              {art.label} &rarr;
            </Link>
          ))}
        </div>

        {/* CTA FINAL */}
        <div style={{ background: '#1a2a3a', padding: '40px 32px', textAlign: 'center', borderRadius: '2px' }}>
          <h3 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
            {ui.cta_h}
          </h3>
          <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.6, marginBottom: '24px', maxWidth: '520px', margin: '0 auto 24px' }}>
            {ui.cta_desc}
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#9e6d16', color: '#fff', fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', padding: '16px 40px', textDecoration: 'none' }}>
            {ui.cta_btn}
          </Link>
        </div>

      </main>

    </>
  );
}