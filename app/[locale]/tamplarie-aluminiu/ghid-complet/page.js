import { Link } from '../../../../i18n/navigation';

import { BASE, LOCALES } from '../../../../lib/constants.js';
import { getGoogleRating } from '../../../../lib/googleRating.js';
const SLUGS = {
  ro: 'tamplarie-aluminiu/ghid-complet',
  en: 'aluminium-windows/complete-guide',
  de: 'aluminiumfenster/kompletter-ratgeber',
  fr: 'menuiserie-aluminium/guide-complet',
  es: 'carpinteria-aluminio/guia-completa',
  it: 'infissi-alluminio/guida-completa',
};

const PARENT_SLUGS = {
  ro: 'tamplarie-aluminiu', en: 'aluminium-windows',
  de: 'aluminiumfenster', fr: 'menuiserie-aluminium',
  es: 'carpinteria-aluminio', it: 'infissi-alluminio',
};

const PRICES_SLUGS = {
  ro: 'tamplarie-aluminiu/preturi', en: 'aluminium-windows/prices',
  de: 'aluminiumfenster/preise', fr: 'menuiserie-aluminium/prix',
  es: 'carpinteria-aluminio/precios', it: 'infissi-alluminio/prezzi',
};

const UI = {
  ro: {
    h1: 'Ghid Complet Tâmplărie Aluminiu 2026 — Tot ce trebuie să știi despre sistemele Alumil',
    sub: 'Ghid tehnic despre tâmplăria din aluminiu Alumil: sistemele Smartia și Supreme, bariera termică, uși liftant-glisante și armonice, alegerea pentru nZEB.',
    breadcrumb: 'Ghid complet',
    parent_label: 'Tâmplărie aluminiu',
    intro: 'Aluminiul este alegerea potrivită când vrei profile subțiri, suprafețe vitrate mari sau deschideri pe care PVC-ul nu le poate acoperi. Neofort BIZ livrează și montează în București și Ilfov sisteme Alumil din două clase — Smartia, cu un raport preț–performanță bun, și Supreme, cu performanță termică de vârf — pentru ferestre, uși, sisteme liftant-glisante și armonice.',
    section1_h2: 'Ce înseamnă bariera termică la tâmplăria din aluminiu',
    section1: 'Aluminiul conduce foarte bine căldura, așa că un profil din aluminiu neîntrerupt ar transmite frigul direct în casă. Bariera termică este o baretă izolantă — din poliamidă sau, la seriile de vârf, din Kooltherm — montată între partea exterioară și cea interioară a profilului. Cu cât este mai lată și mai bine izolată, cu atât coeficientul Uf al cadrului scade: de la 2,9 W/m²K la S 350 SMARTIA, cu barieră de 28 mm, până la 0,86 W/m²K la S 77 SUPREME, cu barieră din poliamidă de 40 mm.',
    systems_h2: 'Sistemele Alumil disponibile la Neofort BIZ',
    systems: [
      { name: 'Alumil S 67 SMARTIA', uw: 'Uf de la 1,5 W/m²K · până la 45 dB', chambers: 'Ferestre și uși, barieră de 30 mm', ideal: 'Apartamente și zone urbane zgomotoase: cea mai bună izolare fonică din gamă.', link: '/produse-aluminiu/sistem-aluminiu-alumil-s67-smartia' },
      { name: 'Alumil S 77 SUPREME', uw: 'Uf de la 0,86 W/m²K · RC3 standard', chambers: 'Ferestre și uși, barieră de 40 mm', ideal: 'Vile și proiecte nZEB, geam până la 72 mm, canate până la 4500 × 4000 mm.', link: '/produse-aluminiu/sistem-aluminiu-alumil-s77-supreme' },
      { name: 'Alumil S 700 SUPREME', uw: 'Uf de la 1,1 W/m²K · foi de 500 kg', chambers: 'Liftant-glisant, barieră Kooltherm', ideal: 'Ieșiri mari spre terasă, geam până la 50 mm.', link: '/produse-aluminiu/sistem-aluminiu-alumil-s700-supreme' },
      { name: 'Alumil S 350 SMARTIA', uw: 'Uf de la 2,9 W/m²K', chambers: 'Liftant-glisant, barieră de 28 mm', ideal: 'Terase, balcoane și spații secundare, la cost redus.', link: '/produse-aluminiu/sistem-aluminiu-alumil-s350-smartia' },
      { name: 'Alumil M 19800 SMARTIA', uw: 'Uf de la 1,9 W/m²K · PAS24', chambers: 'Armonic, 2–6 foi, până la 5000 mm', ideal: 'Terase și verande cu deschidere totală, fără cerințe nZEB.', link: '/produse-aluminiu/sistem-aluminiu-alumil-m19800-smartia' },
      { name: 'Alumil SF 85 SUPREME', uw: 'Uf de la 1,0 W/m²K · PAS24', chambers: 'Armonic, 2–8 foi, până la 7000 mm', ideal: 'Închideri folosite tot anul, cu deschidere totală.', link: '/produse-aluminiu/sistem-aluminiu-alumil-sf85-supreme' },
    ],
    glass_h2: 'Smartia sau Supreme — cum alegi clasa',
    glass: 'Seria Smartia acoperă majoritatea apartamentelor și caselor obișnuite: S 67 SMARTIA are Uf de la 1,5 W/m²K și cea mai bună izolare fonică din gama noastră, până la 45 dB. Seria Supreme este pentru performanță termică și deschideri mari: S 77 SUPREME are Uf de la 0,86 W/m²K, acceptă geam de până la 72 mm, inclusiv tripan, și pornește direct de la clasa antiefracție RC3. Regula practică: pentru un apartament la stradă, S 67; pentru o vilă nZEB sau ferestre foarte mari, S 77.',
    montaj_h2: 'Uși liftant-glisante și armonice — deschideri mari spre terasă',
    montaj: 'Pentru ieșirile spre terasă există două familii. Sistemele liftant-glisante ridică foaia de pe garnituri înainte să alunece, apoi o coboară și presează garniturile la închidere: S 700 SUPREME duce foi de până la 500 kg, cu geam de 50 mm, iar S 350 SMARTIA este varianta accesibilă, cu geam de până la 28 mm. Sistemele armonice se pliază complet într-o parte și eliberează toată deschiderea: M 19800 SMARTIA are 2–6 foi pe maximum 5000 mm, iar SF 85 SUPREME are 2–8 foi pe până la 7000 mm, cu barieră Kooltherm de 40 mm. Ambele armonice sunt certificate PAS24.',
    nzeb_h2: 'Tâmplăria din aluminiu în casele nZEB',
    nzeb: 'Aluminiul poate intra într-o casă nZEB dacă sistemul are bariera termică potrivită și un geam pe măsură. La ferestre și uși, alegerea pentru nZEB este S 77 SUPREME, cu Uw de la 1,0 W/m²K și geam de până la 72 mm. La ieșirile spre terasă, S 700 SUPREME și SF 85 SUPREME au cele mai bune valori din gamă, tot cu Uw de la 1,0 W/m²K, pe când S 350 SMARTIA și M 19800 SMARTIA sunt gândite pentru spații unde performanța termică nu este prioritară. Montajul RAL și precadrele izolante contează la aluminiu la fel de mult ca la PVC.',
    faq_h2: 'Întrebări frecvente — tâmplărie din aluminiu',
    faq: [
      { q: 'Ce diferență este între S 67 SMARTIA și S 77 SUPREME?', a: 'S 77 SUPREME are barieră termică de 40 mm și Uf de la 0,86 W/m²K, canate de până la 400 kg și clasa RC3 din standard. S 67 SMARTIA are barieră de 30 mm și Uf de la 1,5 W/m²K, dar izolează fonic mai bine (până la 45 dB, față de 42 dB) și costă mai puțin.' },
      { q: 'Liftant-glisant sau armonic pentru terasă?', a: 'Liftant-glisantul permite foi foarte mari — până la 500 kg la S 700 SUPREME —, dar foile glisează una peste alta, deci deschiderea nu este totală. Armonicul se pliază complet și eliberează toată deschiderea, cu foi mai ușoare: până la 120 kg la SF 85 SUPREME.' },
      { q: 'Când aleg aluminiu în locul PVC-ului?', a: 'Când ai nevoie de profile subțiri, foi mari sau deschideri largi spre terasă, ori când proiectul cere aspectul aluminiului. Pentru ferestre obișnuite, cu buget optimizat, tâmplăria PVC izolează termic mai bine la un cost mai mic.' },
      { q: 'În ce culori se poate face tâmplăria din aluminiu?', a: 'Profilele Alumil se vopsesc în orice culoare RAL sau se anodizează, așa că tâmplăria se poate potrivi cu fațada sau cu interiorul.' },
    ],
    cta_h: 'Solicitați oferta personalizată',
    cta_desc: 'Echipa Neofort BIZ vă pregătește o ofertă completă, cu prețuri, pentru tâmplăria din aluminiu Alumil, în București și Ilfov. Măsurătorile finale se fac după semnarea contractului.',
    cta_btn: 'Cerere ofertă',
    prices_link: 'Vezi prețurile orientative 2026',
    related_h2: 'Articole utile despre tâmplăria din aluminiu',
  },
  en: {
    h1: 'Complete Aluminium Window Guide 2026 — Everything About Alumil Systems',
    sub: 'Technical guide to Alumil aluminium windows: Smartia and Supreme systems, thermal breaks, lift-and-slide and folding doors, and choosing for nZEB.',
    breadcrumb: 'Complete Guide',
    parent_label: 'Aluminium Windows',
    intro: 'Aluminium is the right choice when you want slim profiles, large glazed areas or openings that PVC cannot span. Neofort BIZ supplies and installs Alumil systems in Bucharest and Ilfov in two classes — Smartia, with a good price–performance ratio, and Supreme, with top thermal performance — for windows, doors, lift-and-slide and folding systems.',
    section1_h2: 'What a thermal break means in aluminium joinery',
    section1: 'Aluminium conducts heat very well, so an uninterrupted aluminium profile would carry the cold straight into the house. The thermal break is an insulating strip — polyamide or, in the top series, Kooltherm — fitted between the outer and inner parts of the profile. The wider and better insulated it is, the lower the frame\'s Uf coefficient: from 2.9 W/m²K on S 350 SMARTIA, with a 28 mm break, down to 0.86 W/m²K on S 77 SUPREME, with a 40 mm polyamide break.',
    systems_h2: 'Alumil Systems Available at Neofort BIZ',
    systems: [
      { name: 'Alumil S 67 SMARTIA', uw: 'Uf from 1.5 W/m²K · up to 45 dB', chambers: 'Windows and doors, 30 mm break', ideal: 'Apartments and noisy urban areas: the best sound insulation in the range.', link: '/products-alu/alumil-s67-smartia-aluminium-system' },
      { name: 'Alumil S 77 SUPREME', uw: 'Uf from 0.86 W/m²K · RC3 as standard', chambers: 'Windows and doors, 40 mm break', ideal: 'Villas and nZEB projects, glazing up to 72 mm, sashes up to 4500 × 4000 mm.', link: '/products-alu/alumil-s77-supreme-aluminium-system' },
      { name: 'Alumil S 700 SUPREME', uw: 'Uf from 1.1 W/m²K · 500 kg panels', chambers: 'Lift-and-slide, Kooltherm break', ideal: 'Large terrace openings, glazing up to 50 mm.', link: '/products-alu/alumil-s700-supreme-lift-slide-system' },
      { name: 'Alumil S 350 SMARTIA', uw: 'Uf from 2.9 W/m²K', chambers: 'Lift-and-slide, 28 mm break', ideal: 'Terraces, balconies and secondary spaces, at low cost.', link: '/products-alu/alumil-s350-smartia-lift-slide-system' },
      { name: 'Alumil M 19800 SMARTIA', uw: 'Uf from 1.9 W/m²K · PAS24', chambers: 'Folding, 2–6 panels, up to 5000 mm', ideal: 'Terraces and verandas that open fully, without nZEB requirements.', link: '/products-alu/alumil-m19800-smartia-folding-system' },
      { name: 'Alumil SF 85 SUPREME', uw: 'Uf from 1.0 W/m²K · PAS24', chambers: 'Folding, 2–8 panels, up to 7000 mm', ideal: 'Year-round enclosures that open fully.', link: '/products-alu/alumil-sf85-supreme-folding-system' },
    ],
    glass_h2: 'Smartia or Supreme — how to choose the class',
    glass: 'The Smartia series covers most apartments and ordinary houses: S 67 SMARTIA has a Uf from 1.5 W/m²K and the best sound insulation in our range, up to 45 dB. The Supreme series is for thermal performance and large openings: S 77 SUPREME has a Uf from 0.86 W/m²K, takes glazing up to 72 mm, including triple glazing, and starts directly at burglar-resistance class RC3. The rule of thumb: for a street-facing apartment, S 67; for an nZEB villa or very large windows, S 77.',
    montaj_h2: 'Lift-and-slide and folding doors — large openings onto the terrace',
    montaj: 'For terrace openings there are two families. Lift-and-slide systems lift the panel off its seals before it slides, then lower it and press the seals when closing: S 700 SUPREME carries panels of up to 500 kg with 50 mm glazing, while S 350 SMARTIA is the affordable option, with glazing up to 28 mm. Folding systems fold completely to one side and free the whole opening: M 19800 SMARTIA has 2–6 panels over a maximum of 5000 mm, and SF 85 SUPREME has 2–8 panels over up to 7000 mm, with a 40 mm Kooltherm break. Both folding systems are PAS24 certified.',
    nzeb_h2: 'Aluminium windows in nZEB homes',
    nzeb: 'Aluminium can be used in an nZEB home if the system has the right thermal break and suitable glazing. For windows and doors, the nZEB choice is S 77 SUPREME, with a Uw from 1.0 W/m²K and glazing up to 72 mm. For terrace openings, S 700 SUPREME and SF 85 SUPREME have the best values in the range, also with a Uw from 1.0 W/m²K, whereas S 350 SMARTIA and M 19800 SMARTIA are designed for spaces where thermal performance is not the priority. RAL installation and insulating precasings matter as much with aluminium as with PVC.',
    faq_h2: 'Frequently Asked Questions — Aluminium Windows',
    faq: [
      { q: 'What is the difference between S 67 SMARTIA and S 77 SUPREME?', a: 'S 77 SUPREME has a 40 mm thermal break and a Uf from 0.86 W/m²K, sashes of up to 400 kg and RC3 as standard. S 67 SMARTIA has a 30 mm break and a Uf from 1.5 W/m²K, but insulates better against noise (up to 45 dB, against 42 dB) and costs less.' },
      { q: 'Lift-and-slide or folding for a terrace?', a: 'Lift-and-slide allows very large panels — up to 500 kg on S 700 SUPREME — but the panels slide over one another, so the opening is never fully clear. A folding system folds away completely and frees the whole opening, with lighter panels: up to 120 kg on SF 85 SUPREME.' },
      { q: 'When should I choose aluminium instead of PVC?', a: 'When you need slim profiles, large panels or wide terrace openings, or when the project calls for the look of aluminium. For ordinary windows on an optimised budget, PVC joinery insulates better at a lower cost.' },
      { q: 'What colours are available for aluminium joinery?', a: 'Alumil profiles are painted in any RAL colour or anodised, so the joinery can match the facade or the interior.' },
    ],
    cta_h: 'Request a Personalised Quote',
    cta_desc: 'The Neofort BIZ team will prepare a complete quote with prices for Alumil aluminium windows, in Bucharest and Ilfov. Final measurements are taken after the contract is signed.',
    cta_btn: 'Request Quote',
    prices_link: 'See 2026 Indicative Prices',
    related_h2: 'Useful Articles About Aluminium Windows',
  },
  de: {
    h1: 'Kompletter Aluminiumfenster-Ratgeber 2026 — Alles über Alumil-Systeme',
    sub: 'Technischer Ratgeber zu Alumil-Aluminiumfenstern: Smartia- und Supreme-Systeme, thermische Trennung, Hebeschiebe- und Falttüren, Auswahl für nZEB.',
    breadcrumb: 'Kompletter Ratgeber',
    parent_label: 'Aluminiumfenster',
    intro: 'Aluminium ist die richtige Wahl, wenn Sie schlanke Profile, große Glasflächen oder Öffnungen wünschen, die PVC nicht überspannen kann. Neofort BIZ liefert und montiert in Bukarest und Ilfov Alumil-Systeme in zwei Klassen — Smartia mit gutem Preis-Leistungs-Verhältnis und Supreme mit Spitzenwerten bei der Wärmedämmung — für Fenster, Türen, Hebeschiebe- und Faltsysteme.',
    section1_h2: 'Was die thermische Trennung bei Aluminiumfenstern bedeutet',
    section1: 'Aluminium leitet Wärme sehr gut, ein durchgehendes Aluminiumprofil würde die Kälte also direkt ins Haus leiten. Die thermische Trennung ist ein dämmender Steg — aus Polyamid oder, bei den Spitzenserien, aus Kooltherm —, der zwischen der äußeren und der inneren Profilhälfte sitzt. Je breiter und besser gedämmt er ist, desto niedriger ist der Uf-Wert des Rahmens: von 2,9 W/m²K bei S 350 SMARTIA mit 28-mm-Steg bis 0,86 W/m²K bei S 77 SUPREME mit 40-mm-Polyamidsteg.',
    systems_h2: 'Alumil-Systeme bei Neofort BIZ',
    systems: [
      { name: 'Alumil S 67 SMARTIA', uw: 'Uf ab 1,5 W/m²K · bis 45 dB', chambers: 'Fenster und Türen, 30-mm-Steg', ideal: 'Wohnungen und laute Stadtlagen: der beste Schallschutz im Sortiment.', link: '/produkte-alu/alumil-s67-smartia-aluminiumsystem' },
      { name: 'Alumil S 77 SUPREME', uw: 'Uf ab 0,86 W/m²K · RC3 serienmäßig', chambers: 'Fenster und Türen, 40-mm-Steg', ideal: 'Villen und nZEB-Projekte, Verglasung bis 72 mm, Flügel bis 4500 × 4000 mm.', link: '/produkte-alu/alumil-s77-supreme-aluminiumsystem' },
      { name: 'Alumil S 700 SUPREME', uw: 'Uf ab 1,1 W/m²K · Flügel bis 500 kg', chambers: 'Hebeschiebetür, Kooltherm-Trennung', ideal: 'Große Terrassenöffnungen, Verglasung bis 50 mm.', link: '/produkte-alu/alumil-s700-supreme-hebeschiebesystem' },
      { name: 'Alumil S 350 SMARTIA', uw: 'Uf ab 2,9 W/m²K', chambers: 'Hebeschiebetür, 28-mm-Steg', ideal: 'Terrassen, Balkone und Nebenräume, zu geringen Kosten.', link: '/produkte-alu/alumil-s350-smartia-hebeschiebesystem' },
      { name: 'Alumil M 19800 SMARTIA', uw: 'Uf ab 1,9 W/m²K · PAS24', chambers: 'Falttür, 2–6 Flügel, bis 5000 mm', ideal: 'Terrassen und Veranden mit vollständiger Öffnung, ohne nZEB-Anforderungen.', link: '/produkte-alu/alumil-m19800-smartia-faltsystem' },
      { name: 'Alumil SF 85 SUPREME', uw: 'Uf ab 1,0 W/m²K · PAS24', chambers: 'Falttür, 2–8 Flügel, bis 7000 mm', ideal: 'Ganzjährig genutzte Verglasungen mit vollständiger Öffnung.', link: '/produkte-alu/alumil-sf85-supreme-faltsystem' },
    ],
    glass_h2: 'Smartia oder Supreme — so wählen Sie die Klasse',
    glass: 'Die Serie Smartia deckt die meisten Wohnungen und üblichen Häuser ab: S 67 SMARTIA hat einen Uf ab 1,5 W/m²K und den besten Schallschutz in unserem Sortiment, bis 45 dB. Die Serie Supreme ist für Wärmedämmung und große Öffnungen gedacht: S 77 SUPREME hat einen Uf ab 0,86 W/m²K, nimmt Verglasungen bis 72 mm auf, auch Dreifachglas, und beginnt direkt mit der Einbruchschutzklasse RC3. Als Faustregel: für eine Wohnung an der Straße S 67, für eine nZEB-Villa oder sehr große Fenster S 77.',
    montaj_h2: 'Hebeschiebe- und Falttüren — große Öffnungen zur Terrasse',
    montaj: 'Für Terrassenausgänge gibt es zwei Familien. Hebeschiebesysteme heben den Flügel vor dem Schieben von den Dichtungen ab, senken ihn beim Schließen wieder und pressen die Dichtungen an: S 700 SUPREME trägt Flügel bis 500 kg mit 50-mm-Verglasung, S 350 SMARTIA ist die günstige Variante mit Verglasung bis 28 mm. Faltsysteme falten sich vollständig zur Seite und geben die ganze Öffnung frei: M 19800 SMARTIA hat 2–6 Flügel auf maximal 5000 mm, SF 85 SUPREME 2–8 Flügel auf bis zu 7000 mm, mit 40-mm-Kooltherm-Trennung. Beide Faltsysteme sind nach PAS24 zertifiziert.',
    nzeb_h2: 'Aluminiumfenster in nZEB-Häusern',
    nzeb: 'Aluminium kann in einem nZEB-Haus eingesetzt werden, wenn das System die passende thermische Trennung und eine geeignete Verglasung hat. Bei Fenstern und Türen ist S 77 SUPREME die Wahl für nZEB, mit einem Uw ab 1,0 W/m²K und Verglasung bis 72 mm. Bei Terrassenausgängen haben S 700 SUPREME und SF 85 SUPREME die besten Werte im Sortiment, ebenfalls mit einem Uw ab 1,0 W/m²K, während S 350 SMARTIA und M 19800 SMARTIA für Räume gedacht sind, in denen die Wärmedämmung nicht im Vordergrund steht. RAL-Montage und dämmende Montagerahmen sind bei Aluminium genauso wichtig wie bei PVC.',
    faq_h2: 'Häufige Fragen — Aluminiumfenster',
    faq: [
      { q: 'Was ist der Unterschied zwischen S 67 SMARTIA und S 77 SUPREME?', a: 'S 77 SUPREME hat eine 40-mm-Trennung und einen Uf ab 0,86 W/m²K, Flügel bis 400 kg und RC3 serienmäßig. S 67 SMARTIA hat eine 30-mm-Trennung und einen Uf ab 1,5 W/m²K, dämmt aber den Schall besser (bis 45 dB statt 42 dB) und kostet weniger.' },
      { q: 'Hebeschiebe- oder Falttür für die Terrasse?', a: 'Die Hebeschiebetür erlaubt sehr große Flügel — bis 500 kg bei S 700 SUPREME —, die Flügel schieben sich aber übereinander, die Öffnung wird also nie ganz frei. Die Falttür faltet sich vollständig zusammen und gibt die ganze Öffnung frei, mit leichteren Flügeln: bis 120 kg bei SF 85 SUPREME.' },
      { q: 'Wann wähle ich Aluminium statt PVC?', a: 'Wenn Sie schlanke Profile, große Flügel oder breite Terrassenöffnungen brauchen oder das Projekt die Optik von Aluminium verlangt. Für übliche Fenster mit optimiertem Budget dämmen Kunststofffenster besser und kosten weniger.' },
      { q: 'In welchen Farben gibt es Aluminiumfenster?', a: 'Alumil-Profile werden in jeder RAL-Farbe beschichtet oder eloxiert, sodass die Fenster zur Fassade oder zum Innenraum passen.' },
    ],
    cta_h: 'Personalisiertes Angebot anfordern',
    cta_desc: 'Das Team von Neofort BIZ erstellt Ihnen ein vollständiges Angebot mit Preisen für Alumil-Aluminiumfenster, in Bukarest und Ilfov. Das endgültige Aufmaß erfolgt nach Vertragsabschluss.',
    cta_btn: 'Angebot anfordern',
    prices_link: 'Orientierungspreise 2026 ansehen',
    related_h2: 'Nützliche Artikel über Aluminiumfenster',
  },
  fr: {
    h1: 'Guide complet menuiserie aluminium 2026 — Tout sur les systèmes Alumil',
    sub: 'Guide technique de la menuiserie aluminium Alumil : systèmes Smartia et Supreme, rupture thermique, portes levantes-coulissantes et pliantes, choix nZEB.',
    breadcrumb: 'Guide complet',
    parent_label: 'Menuiserie aluminium',
    intro: 'L\'aluminium est le bon choix lorsque vous voulez des profilés fins, de grandes surfaces vitrées ou des ouvertures que le PVC ne peut pas franchir. Neofort BIZ fournit et pose à Bucarest et Ilfov des systèmes Alumil de deux gammes — Smartia, au bon rapport prix-performance, et Supreme, aux performances thermiques de pointe — pour fenêtres, portes, systèmes levants-coulissants et pliants.',
    section1_h2: 'Ce que signifie la rupture thermique en menuiserie aluminium',
    section1: 'L\'aluminium conduit très bien la chaleur : un profilé en aluminium continu ferait entrer le froid directement dans la maison. La rupture thermique est une barrette isolante — en polyamide ou, sur les gammes haut de gamme, en Kooltherm — placée entre la partie extérieure et la partie intérieure du profilé. Plus elle est large et isolante, plus le coefficient Uf du cadre baisse : de 2,9 W/m²K pour le S 350 SMARTIA, à barrette de 28 mm, jusqu\'à 0,86 W/m²K pour le S 77 SUPREME, à barrette polyamide de 40 mm.',
    systems_h2: 'Les systèmes Alumil disponibles chez Neofort BIZ',
    systems: [
      { name: 'Alumil S 67 SMARTIA', uw: 'Uf à partir de 1,5 W/m²K · jusqu\'à 45 dB', chambers: 'Fenêtres et portes, barrette de 30 mm', ideal: 'Appartements et zones urbaines bruyantes : la meilleure isolation acoustique de la gamme.', link: '/produits-alu/systeme-aluminium-alumil-s67-smartia' },
      { name: 'Alumil S 77 SUPREME', uw: 'Uf à partir de 0,86 W/m²K · RC3 de série', chambers: 'Fenêtres et portes, barrette de 40 mm', ideal: 'Villas et projets nZEB, vitrage jusqu\'à 72 mm, ouvrants jusqu\'à 4500 × 4000 mm.', link: '/produits-alu/systeme-aluminium-alumil-s77-supreme' },
      { name: 'Alumil S 700 SUPREME', uw: 'Uf à partir de 1,1 W/m²K · vantaux de 500 kg', chambers: 'Levant-coulissant, rupture Kooltherm', ideal: 'Grandes ouvertures sur terrasse, vitrage jusqu\'à 50 mm.', link: '/produits-alu/systeme-coulissant-alumil-s700-supreme' },
      { name: 'Alumil S 350 SMARTIA', uw: 'Uf à partir de 2,9 W/m²K', chambers: 'Levant-coulissant, barrette de 28 mm', ideal: 'Terrasses, balcons et pièces secondaires, à coût réduit.', link: '/produits-alu/systeme-coulissant-alumil-s350-smartia' },
      { name: 'Alumil M 19800 SMARTIA', uw: 'Uf à partir de 1,9 W/m²K · PAS24', chambers: 'Pliant, 2 à 6 vantaux, jusqu\'à 5000 mm', ideal: 'Terrasses et vérandas à ouverture totale, sans exigence nZEB.', link: '/produits-alu/systeme-pliant-alumil-m19800-smartia' },
      { name: 'Alumil SF 85 SUPREME', uw: 'Uf à partir de 1,0 W/m²K · PAS24', chambers: 'Pliant, 2 à 8 vantaux, jusqu\'à 7000 mm', ideal: 'Fermetures utilisées toute l\'année, à ouverture totale.', link: '/produits-alu/systeme-pliant-alumil-sf85-supreme' },
    ],
    glass_h2: 'Smartia ou Supreme — comment choisir la gamme',
    glass: 'La gamme Smartia couvre la plupart des appartements et des maisons courantes : le S 67 SMARTIA a un Uf à partir de 1,5 W/m²K et la meilleure isolation acoustique de notre gamme, jusqu\'à 45 dB. La gamme Supreme vise la performance thermique et les grandes ouvertures : le S 77 SUPREME a un Uf à partir de 0,86 W/m²K, accepte un vitrage jusqu\'à 72 mm, y compris le triple vitrage, et part directement de la classe anti-effraction RC3. En pratique : pour un appartement sur rue, le S 67 ; pour une villa nZEB ou de très grandes fenêtres, le S 77.',
    montaj_h2: 'Portes levantes-coulissantes et pliantes — de grandes ouvertures sur la terrasse',
    montaj: 'Pour les accès à la terrasse, il existe deux familles. Les systèmes levants-coulissants soulèvent le vantail de ses joints avant de le faire coulisser, puis l\'abaissent et compriment les joints à la fermeture : le S 700 SUPREME porte des vantaux jusqu\'à 500 kg avec un vitrage de 50 mm, tandis que le S 350 SMARTIA est l\'option accessible, avec un vitrage jusqu\'à 28 mm. Les systèmes pliants se replient entièrement d\'un côté et libèrent toute l\'ouverture : le M 19800 SMARTIA compte 2 à 6 vantaux sur 5000 mm maximum, et le SF 85 SUPREME 2 à 8 vantaux sur jusqu\'à 7000 mm, avec une rupture Kooltherm de 40 mm. Les deux systèmes pliants sont certifiés PAS24.',
    nzeb_h2: 'La menuiserie aluminium dans les maisons nZEB',
    nzeb: 'L\'aluminium peut trouver sa place dans une maison nZEB si le système dispose de la bonne rupture thermique et d\'un vitrage adapté. Pour les fenêtres et les portes, le choix nZEB est le S 77 SUPREME, avec un Uw à partir de 1,0 W/m²K et un vitrage jusqu\'à 72 mm. Pour les accès à la terrasse, le S 700 SUPREME et le SF 85 SUPREME offrent les meilleures valeurs de la gamme, également avec un Uw à partir de 1,0 W/m²K, alors que le S 350 SMARTIA et le M 19800 SMARTIA sont conçus pour des espaces où la performance thermique n\'est pas prioritaire. La pose RAL et les précadres isolants comptent autant en aluminium qu\'en PVC.',
    faq_h2: 'Questions fréquentes — menuiserie aluminium',
    faq: [
      { q: 'Quelle différence entre le S 67 SMARTIA et le S 77 SUPREME ?', a: 'Le S 77 SUPREME a une rupture thermique de 40 mm et un Uf à partir de 0,86 W/m²K, des ouvrants jusqu\'à 400 kg et la classe RC3 de série. Le S 67 SMARTIA a une barrette de 30 mm et un Uf à partir de 1,5 W/m²K, mais isole mieux du bruit (jusqu\'à 45 dB contre 42 dB) et coûte moins cher.' },
      { q: 'Levant-coulissant ou pliant pour la terrasse ?', a: 'Le levant-coulissant permet des vantaux très grands — jusqu\'à 500 kg pour le S 700 SUPREME —, mais les vantaux coulissent les uns devant les autres : l\'ouverture n\'est jamais totale. Le pliant se replie entièrement et libère toute l\'ouverture, avec des vantaux plus légers : jusqu\'à 120 kg pour le SF 85 SUPREME.' },
      { q: 'Quand choisir l\'aluminium plutôt que le PVC ?', a: 'Lorsque vous avez besoin de profilés fins, de grands vantaux ou de larges ouvertures sur la terrasse, ou lorsque le projet demande l\'aspect de l\'aluminium. Pour des fenêtres courantes à budget optimisé, la menuiserie PVC isole mieux pour un coût plus faible.' },
      { q: 'En quelles couleurs existe la menuiserie aluminium ?', a: 'Les profilés Alumil sont laqués dans toutes les teintes RAL ou anodisés, de sorte que la menuiserie s\'accorde à la façade ou à l\'intérieur.' },
    ],
    cta_h: 'Demander un devis personnalisé',
    cta_desc: 'L\'équipe Neofort BIZ vous prépare un devis complet, avec prix, pour la menuiserie aluminium Alumil, à Bucarest et Ilfov. La prise de mesures définitive intervient après la signature du contrat.',
    cta_btn: 'Demander un devis',
    prices_link: 'Voir les prix indicatifs 2026',
    related_h2: 'Articles utiles sur la menuiserie aluminium',
  },
  es: {
    h1: 'Guía completa carpintería aluminio 2026 — Todo sobre los sistemas Alumil',
    sub: 'Guía técnica de la carpintería de aluminio Alumil: sistemas Smartia y Supreme, rotura de puente térmico, puertas elevables y plegables, elección nZEB.',
    breadcrumb: 'Guía completa',
    parent_label: 'Carpintería de aluminio',
    intro: 'El aluminio es la elección adecuada cuando quiere perfiles finos, grandes superficies acristaladas o huecos que el PVC no puede cubrir. Neofort BIZ suministra e instala en Bucarest e Ilfov sistemas Alumil de dos gamas —Smartia, con buena relación precio-rendimiento, y Supreme, con el máximo rendimiento térmico— para ventanas, puertas, sistemas elevables-correderos y plegables.',
    section1_h2: 'Qué significa la rotura de puente térmico en el aluminio',
    section1: 'El aluminio conduce muy bien el calor, así que un perfil de aluminio continuo llevaría el frío directamente al interior. La rotura de puente térmico es una varilla aislante —de poliamida o, en las series superiores, de Kooltherm— colocada entre la parte exterior y la interior del perfil. Cuanto más ancha y aislante es, más baja el coeficiente Uf del marco: de 2,9 W/m²K en el S 350 SMARTIA, con rotura de 28 mm, hasta 0,86 W/m²K en el S 77 SUPREME, con rotura de poliamida de 40 mm.',
    systems_h2: 'Sistemas Alumil disponibles en Neofort BIZ',
    systems: [
      { name: 'Alumil S 67 SMARTIA', uw: 'Uf desde 1,5 W/m²K · hasta 45 dB', chambers: 'Ventanas y puertas, rotura de 30 mm', ideal: 'Pisos y zonas urbanas ruidosas: el mejor aislamiento acústico de la gama.', link: '/productos-alu/sistema-aluminio-alumil-s67-smartia' },
      { name: 'Alumil S 77 SUPREME', uw: 'Uf desde 0,86 W/m²K · RC3 de serie', chambers: 'Ventanas y puertas, rotura de 40 mm', ideal: 'Villas y proyectos nZEB, vidrio hasta 72 mm, hojas hasta 4500 × 4000 mm.', link: '/productos-alu/sistema-aluminio-alumil-s77-supreme' },
      { name: 'Alumil S 700 SUPREME', uw: 'Uf desde 1,1 W/m²K · hojas de 500 kg', chambers: 'Elevable-corredera, rotura Kooltherm', ideal: 'Grandes salidas a terraza, vidrio hasta 50 mm.', link: '/productos-alu/sistema-corredera-alumil-s700-supreme' },
      { name: 'Alumil S 350 SMARTIA', uw: 'Uf desde 2,9 W/m²K', chambers: 'Elevable-corredera, rotura de 28 mm', ideal: 'Terrazas, balcones y espacios secundarios, con coste reducido.', link: '/productos-alu/sistema-corredera-alumil-s350-smartia' },
      { name: 'Alumil M 19800 SMARTIA', uw: 'Uf desde 1,9 W/m²K · PAS24', chambers: 'Plegable, 2–6 hojas, hasta 5000 mm', ideal: 'Terrazas y porches de apertura total, sin requisitos nZEB.', link: '/productos-alu/sistema-plegable-alumil-m19800-smartia' },
      { name: 'Alumil SF 85 SUPREME', uw: 'Uf desde 1,0 W/m²K · PAS24', chambers: 'Plegable, 2–8 hojas, hasta 7000 mm', ideal: 'Cerramientos de uso todo el año, con apertura total.', link: '/productos-alu/sistema-plegable-alumil-sf85-supreme' },
    ],
    glass_h2: 'Smartia o Supreme: cómo elegir la gama',
    glass: 'La serie Smartia cubre la mayoría de los pisos y casas habituales: el S 67 SMARTIA tiene un Uf desde 1,5 W/m²K y el mejor aislamiento acústico de nuestra gama, hasta 45 dB. La serie Supreme está pensada para el rendimiento térmico y los grandes huecos: el S 77 SUPREME tiene un Uf desde 0,86 W/m²K, admite vidrio de hasta 72 mm, incluido el triple, y parte directamente de la clase antirrobo RC3. Como regla práctica: para un piso que da a la calle, el S 67; para una villa nZEB o ventanas muy grandes, el S 77.',
    montaj_h2: 'Puertas elevables-correderas y plegables: grandes aperturas a la terraza',
    montaj: 'Para las salidas a la terraza hay dos familias. Los sistemas elevables-correderos levantan la hoja de las juntas antes de deslizarla y, al cerrar, la bajan y presionan las juntas: el S 700 SUPREME soporta hojas de hasta 500 kg con vidrio de 50 mm, mientras que el S 350 SMARTIA es la opción asequible, con vidrio de hasta 28 mm. Los sistemas plegables se recogen por completo hacia un lado y liberan todo el hueco: el M 19800 SMARTIA tiene de 2 a 6 hojas en un máximo de 5000 mm, y el SF 85 SUPREME de 2 a 8 hojas en hasta 7000 mm, con rotura Kooltherm de 40 mm. Ambos sistemas plegables están certificados PAS24.',
    nzeb_h2: 'La carpintería de aluminio en las casas nZEB',
    nzeb: 'El aluminio puede usarse en una casa nZEB si el sistema tiene la rotura de puente térmico adecuada y un vidrio a la altura. En ventanas y puertas, la elección nZEB es el S 77 SUPREME, con Uw desde 1,0 W/m²K y vidrio de hasta 72 mm. En las salidas a terraza, el S 700 SUPREME y el SF 85 SUPREME tienen los mejores valores de la gama, también con Uw desde 1,0 W/m²K, mientras que el S 350 SMARTIA y el M 19800 SMARTIA están pensados para espacios donde el rendimiento térmico no es prioritario. La instalación RAL y los premarcos aislantes importan en el aluminio tanto como en el PVC.',
    faq_h2: 'Preguntas frecuentes: carpintería de aluminio',
    faq: [
      { q: '¿Qué diferencia hay entre el S 67 SMARTIA y el S 77 SUPREME?', a: 'El S 77 SUPREME tiene una rotura de 40 mm y un Uf desde 0,86 W/m²K, hojas de hasta 400 kg y clase RC3 de serie. El S 67 SMARTIA tiene una rotura de 30 mm y un Uf desde 1,5 W/m²K, pero aísla mejor del ruido (hasta 45 dB frente a 42 dB) y cuesta menos.' },
      { q: '¿Elevable-corredera o plegable para la terraza?', a: 'La elevable-corredera permite hojas muy grandes —hasta 500 kg en el S 700 SUPREME—, pero las hojas se deslizan unas sobre otras, así que el hueco nunca queda totalmente libre. La plegable se recoge por completo y libera todo el hueco, con hojas más ligeras: hasta 120 kg en el SF 85 SUPREME.' },
      { q: '¿Cuándo elegir aluminio en lugar de PVC?', a: 'Cuando necesita perfiles finos, hojas grandes o salidas amplias a la terraza, o cuando el proyecto pide el aspecto del aluminio. Para ventanas habituales con presupuesto ajustado, la carpintería de PVC aísla mejor por menos dinero.' },
      { q: '¿En qué colores se fabrica la carpintería de aluminio?', a: 'Los perfiles Alumil se lacan en cualquier color RAL o se anodizan, de modo que la carpintería puede combinar con la fachada o con el interior.' },
    ],
    cta_h: 'Solicitar presupuesto personalizado',
    cta_desc: 'El equipo de Neofort BIZ le prepara un presupuesto completo, con precios, para carpintería de aluminio Alumil, en Bucarest e Ilfov. Las mediciones definitivas se realizan tras la firma del contrato.',
    cta_btn: 'Solicitar presupuesto',
    prices_link: 'Ver precios orientativos 2026',
    related_h2: 'Artículos útiles sobre carpintería de aluminio',
  },
  it: {
    h1: 'Guida completa infissi alluminio 2026 — Tutto sui sistemi Alumil',
    sub: 'Guida tecnica ai serramenti in alluminio Alumil: sistemi Smartia e Supreme, taglio termico, alzanti scorrevoli e porte a libro, scelta per l\'nZEB.',
    breadcrumb: 'Guida completa',
    parent_label: 'Infissi in alluminio',
    intro: 'L\'alluminio è la scelta giusta quando volete profili sottili, grandi superfici vetrate o aperture che il PVC non riesce a coprire. Neofort BIZ fornisce e installa a Bucarest e Ilfov sistemi Alumil di due gamme — Smartia, con un buon rapporto prezzo-prestazioni, e Supreme, con prestazioni termiche al vertice — per finestre, porte, alzanti scorrevoli e sistemi a libro.',
    section1_h2: 'Cosa significa taglio termico nei serramenti in alluminio',
    section1: 'L\'alluminio conduce molto bene il calore, quindi un profilo in alluminio continuo porterebbe il freddo direttamente in casa. Il taglio termico è una barretta isolante — in poliammide o, nelle serie di punta, in Kooltherm — inserita tra la parte esterna e quella interna del profilo. Più è larga e isolante, più scende il coefficiente Uf del telaio: da 2,9 W/m²K nell\'S 350 SMARTIA, con taglio da 28 mm, fino a 0,86 W/m²K nell\'S 77 SUPREME, con taglio in poliammide da 40 mm.',
    systems_h2: 'I sistemi Alumil disponibili da Neofort BIZ',
    systems: [
      { name: 'Alumil S 67 SMARTIA', uw: 'Uf da 1,5 W/m²K · fino a 45 dB', chambers: 'Finestre e porte, taglio da 30 mm', ideal: 'Appartamenti e zone urbane rumorose: il miglior isolamento acustico della gamma.', link: '/prodotti-alu/sistema-alluminio-alumil-s67-smartia' },
      { name: 'Alumil S 77 SUPREME', uw: 'Uf da 0,86 W/m²K · RC3 di serie', chambers: 'Finestre e porte, taglio da 40 mm', ideal: 'Ville e progetti nZEB, vetro fino a 72 mm, ante fino a 4500 × 4000 mm.', link: '/prodotti-alu/sistema-alluminio-alumil-s77-supreme' },
      { name: 'Alumil S 700 SUPREME', uw: 'Uf da 1,1 W/m²K · ante da 500 kg', chambers: 'Alzante scorrevole, taglio Kooltherm', ideal: 'Grandi aperture sulla terrazza, vetro fino a 50 mm.', link: '/prodotti-alu/sistema-scorrevole-alumil-s700-supreme' },
      { name: 'Alumil S 350 SMARTIA', uw: 'Uf da 2,9 W/m²K', chambers: 'Alzante scorrevole, taglio da 28 mm', ideal: 'Terrazze, balconi e locali secondari, a costo contenuto.', link: '/prodotti-alu/sistema-scorrevole-alumil-s350-smartia' },
      { name: 'Alumil M 19800 SMARTIA', uw: 'Uf da 1,9 W/m²K · PAS24', chambers: 'A libro, 2–6 ante, fino a 5000 mm', ideal: 'Terrazze e verande con apertura totale, senza requisiti nZEB.', link: '/prodotti-alu/sistema-pieghevole-alumil-m19800-smartia' },
      { name: 'Alumil SF 85 SUPREME', uw: 'Uf da 1,0 W/m²K · PAS24', chambers: 'A libro, 2–8 ante, fino a 7000 mm', ideal: 'Chiusure usate tutto l\'anno, con apertura totale.', link: '/prodotti-alu/sistema-pieghevole-alumil-sf85-supreme' },
    ],
    glass_h2: 'Smartia o Supreme — come scegliere la gamma',
    glass: 'La serie Smartia copre la maggior parte degli appartamenti e delle case comuni: l\'S 67 SMARTIA ha un Uf da 1,5 W/m²K e il miglior isolamento acustico della nostra gamma, fino a 45 dB. La serie Supreme è pensata per le prestazioni termiche e le grandi aperture: l\'S 77 SUPREME ha un Uf da 0,86 W/m²K, accetta vetri fino a 72 mm, anche tripli, e parte direttamente dalla classe antieffrazione RC3. In pratica: per un appartamento su strada, l\'S 67; per una villa nZEB o finestre molto grandi, l\'S 77.',
    montaj_h2: 'Alzanti scorrevoli e porte a libro — grandi aperture sulla terrazza',
    montaj: 'Per le uscite sulla terrazza esistono due famiglie. Gli alzanti scorrevoli sollevano l\'anta dalle guarnizioni prima di farla scorrere, poi la abbassano e comprimono le guarnizioni in chiusura: l\'S 700 SUPREME porta ante fino a 500 kg con vetro da 50 mm, mentre l\'S 350 SMARTIA è l\'opzione accessibile, con vetro fino a 28 mm. I sistemi a libro si ripiegano completamente da un lato e liberano tutta l\'apertura: l\'M 19800 SMARTIA ha 2–6 ante su un massimo di 5000 mm, l\'SF 85 SUPREME 2–8 ante fino a 7000 mm, con taglio Kooltherm da 40 mm. Entrambi i sistemi a libro sono certificati PAS24.',
    nzeb_h2: 'I serramenti in alluminio nelle case nZEB',
    nzeb: 'L\'alluminio può entrare in una casa nZEB se il sistema ha il taglio termico giusto e un vetro adeguato. Per finestre e porte, la scelta nZEB è l\'S 77 SUPREME, con Uw da 1,0 W/m²K e vetro fino a 72 mm. Per le uscite sulla terrazza, l\'S 700 SUPREME e l\'SF 85 SUPREME hanno i valori migliori della gamma, sempre con Uw da 1,0 W/m²K, mentre l\'S 350 SMARTIA e l\'M 19800 SMARTIA sono pensati per spazi in cui le prestazioni termiche non sono la priorità. La posa RAL e i precontrotelai isolanti contano nell\'alluminio quanto nel PVC.',
    faq_h2: 'Domande frequenti — serramenti in alluminio',
    faq: [
      { q: 'Che differenza c\'è tra S 67 SMARTIA e S 77 SUPREME?', a: 'L\'S 77 SUPREME ha un taglio termico da 40 mm e Uf da 0,86 W/m²K, ante fino a 400 kg e classe RC3 di serie. L\'S 67 SMARTIA ha un taglio da 30 mm e Uf da 1,5 W/m²K, ma isola meglio dal rumore (fino a 45 dB contro 42 dB) e costa meno.' },
      { q: 'Alzante scorrevole o porta a libro per la terrazza?', a: 'L\'alzante scorrevole consente ante molto grandi — fino a 500 kg con l\'S 700 SUPREME —, ma le ante scorrono una sull\'altra, quindi l\'apertura non è mai totale. La porta a libro si ripiega completamente e libera tutta l\'apertura, con ante più leggere: fino a 120 kg con l\'SF 85 SUPREME.' },
      { q: 'Quando scegliere l\'alluminio invece del PVC?', a: 'Quando servono profili sottili, ante grandi o ampie aperture sulla terrazza, oppure quando il progetto richiede l\'aspetto dell\'alluminio. Per finestre comuni con budget ottimizzato, gli infissi in PVC isolano meglio a un costo inferiore.' },
      { q: 'In quali colori sono disponibili i serramenti in alluminio?', a: 'I profili Alumil si verniciano in qualsiasi colore RAL o si anodizzano, così i serramenti possono abbinarsi alla facciata o agli interni.' },
    ],
    cta_h: 'Richiedi un preventivo personalizzato',
    cta_desc: 'Il team Neofort BIZ vi prepara un preventivo completo, con prezzi, per serramenti in alluminio Alumil, a Bucarest e Ilfov. Le misure definitive si rilevano dopo la firma del contratto.',
    cta_btn: 'Richiedi preventivo',
    prices_link: 'Vedi prezzi indicativi 2026',
    related_h2: 'Articoli utili sui serramenti in alluminio',
  },
};

const BLOG_LINKS = {
  ro: [
    { slug: 'tamplarie-aluminiu-bariera-termica-ghid-complet', label: 'Tâmplărie aluminiu cu barieră termică — ghid complet 2026: sisteme Alumil, prețuri și performanțe' },
    { slug: 'preturi-tamplarie-aluminiu-alumil-aluprof-cortizo-reynaers-bucuresti', label: 'Prețuri tâmplărie aluminiu 2026 — Alumil, Aluprof, Cortizo și Reynaers în București: comparație completă' },
    { slug: 'vitrine-sticla-geamuri-panoramice-mari-dimensiuni-securizate-bucuresti', label: 'Vitrine și geamuri panoramice de mari dimensiuni — securizate, antiefracție, termoizolante — furnizor București 2026' },
    { slug: 'montaj-tamplarie-salamander-evolutiondrive-plus-culisanta-alumil-m19800-armonice', label: 'Montaj Salamander evolutionDrive Plus Culisantă + Alumil M19800BT Armonică — Proiect complet Neofort BIZ' },
  ],
  en: [
    { slug: 'aluminium-windows-thermal-break-complete-guide', label: 'Aluminium windows with thermal break — complete guide 2026: Alumil systems, prices and performance' },
    { slug: 'aluminium-windows-prices-alumil-aluprof-cortizo-reynaers-bucharest', label: 'Aluminium window prices 2026 — Alumil, Aluprof, Cortizo and Reynaers in Bucharest: complete comparison' },
    { slug: 'glass-shopfronts-panoramic-large-format-tempered-windows-bucharest', label: 'Large format glass shopfronts and panoramic windows — tempered, burglar-resistant, thermally insulated — supplier Bucharest 2026' },
    { slug: 'installation-salamander-evolutiondrive-plus-sliding-alumil-m19800-folding-door', label: 'Installation: Salamander evolutionDrive Plus Sliding + Alumil M19800BT Folding Door — Complete Neofort BIZ Project' },
  ],
  de: [
    { slug: 'aluminiumfenster-waermedaemmung-komplett-leitfaden', label: 'Aluminiumfenster mit Wärmedämmung — Komplettleitfaden 2026: Alumil-Systeme, Preise und Leistungen' },
    { slug: 'aluminiumfenster-preise-alumil-aluprof-cortizo-reynaers-bukarest', label: 'Aluminiumfenster Preise 2026 — Alumil, Aluprof, Cortizo und Reynaers in Bukarest: Vollständiger Vergleich' },
    { slug: 'schaufenster-panoramascheiben-grosse-abmessungen-sicherheitsglas-bukarest', label: 'Großformat-Schaufenster und Panoramascheiben — gehärtet, einbruchhemmend, wärmedämmend — Händler Bukarest 2026' },
    { slug: 'montage-salamander-evolutiondrive-plus-schiebetuer-alumil-m19800-falttuer', label: 'Montage: Salamander evolutionDrive Plus Schiebetür + Alumil M19800BT Falttür — Komplett-Projekt Neofort BIZ' },
  ],
  fr: [
    { slug: 'menuiserie-aluminium-rupture-thermique-guide-complet', label: 'Menuiseries aluminium à rupture thermique — guide complet 2026 : systèmes Alumil, prix et performances' },
    { slug: 'prix-menuiserie-aluminium-alumil-aluprof-cortizo-reynaers-bucarest', label: 'Prix menuiserie aluminium 2026 — Alumil, Aluprof, Cortizo et Reynaers à Bucarest : comparaison complète' },
    { slug: 'vitrines-verre-fenetres-panoramiques-grandes-dimensions-securisees-bucarest', label: 'Vitrines et fenêtres panoramiques grand format — sécurisées, antieffraction, thermoïsolantes — fournisseur Bucarest 2026' },
    { slug: 'pose-menuiserie-salamander-evolutiondrive-plus-coulissant-alumil-m19800-accordeon', label: 'Pose : Salamander evolutionDrive Plus coulissant + Alumil M19800BT accordéon — Projet complet Neofort BIZ' },
  ],
  es: [
    { slug: 'carpinteria-aluminio-rotura-termica-guia-completa', label: 'Carpintería de aluminio con rotura de puente térmico — guía completa 2026: sistemas Alumil, precios y rendimientos' },
    { slug: 'precios-carpinteria-aluminio-alumil-aluprof-cortizo-reynaers-bucarest', label: 'Precios carpintería aluminio 2026 — Alumil, Aluprof, Cortizo y Reynaers en Bucarest: comparación completa' },
    { slug: 'vitrinas-cristal-ventanas-panoramicas-grandes-dimensiones-securizadas-bucarest', label: 'Vitrinas y ventanas panorámicas gran formato — securizadas, antiefracción, termoaislantes — proveedor Bucarest 2026' },
    { slug: 'instalacion-carpinteria-salamander-evolutiondrive-plus-corredera-alumil-m19800-plegable', label: 'Instalación: Salamander evolutionDrive Plus corredera + Alumil M19800BT plegable — Proyecto completo Neofort BIZ' },
  ],
  it: [
    { slug: 'infissi-alluminio-taglio-termico-guida-completa', label: 'Infissi in alluminio con taglio termico — guida completa 2026: sistemi Alumil, prezzi e prestazioni' },
    { slug: 'prezzi-infissi-alluminio-alumil-aluprof-cortizo-reynaers-bucarest', label: 'Prezzi infissi alluminio 2026 — Alumil, Aluprof, Cortizo e Reynaers a Bucarest: confronto completo' },
    { slug: 'vetrine-vetro-finestre-panoramiche-grandi-dimensioni-securizzate-bucarest', label: 'Vetrine e finestre panoramiche grande formato — securizzate, antieffrazione, termoisolanti — fornitore Bucarest 2026' },
    { slug: 'posa-serramenti-salamander-evolutiondrive-plus-scorrevole-alumil-m19800-pieghevole', label: 'Posa: Salamander evolutionDrive Plus scorrevole + Alumil M19800BT pieghevole — Progetto completo Neofort BIZ' },
  ],
};

const WA_URLS = {
  ro: 'https://wa.me/40752443435?text=Buna%20ziua%21%20Doresc%20o%20oferta%20pentru%20tamplarie%20aluminiu%20Alumil.',
  en: 'https://wa.me/40752443435?text=Hello%21%20Quote%20for%20Alumil%20aluminium%20windows.',
  de: 'https://wa.me/40752443435?text=Hallo%21%20Angebot%20fur%20Alumil%20Aluminiumfenster.',
  fr: 'https://wa.me/40752443435?text=Bonjour%21%20Devis%20menuiserie%20aluminium%20Alumil.',
  es: 'https://wa.me/40752443435?text=Hola%21%20Presupuesto%20carpinteria%20aluminio%20Alumil.',
  it: 'https://wa.me/40752443435?text=Buongiorno%21%20Preventivo%20infissi%20alluminio%20Alumil.',
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
    openGraph: { type: 'article', url: canonical, title: ui.h1, description: ui.sub, siteName: 'Neofort BIZ', images: [{ url: `${BASE}/og/Tamplarie_Aluminiu_Alumil.jpg`, width: 1200, height: 630, type:'image/jpeg' }] },
    twitter: { card: 'summary_large_image', site: '@NeofortBIZ', title: ui.h1, description: ui.sub, images: [`${BASE}/og/Tamplarie_Aluminiu_Alumil.jpg`] },
  };
}

export default async function AluGhidPage({ params }) {
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