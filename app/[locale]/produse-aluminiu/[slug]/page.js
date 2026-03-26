import { notFound } from 'next/navigation';
import { Link } from '../../../../i18n/navigation';

const BASE    = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

// ─── SLUG MAP — canonical → { ro, en, de, fr, es, it } ──────────────────────
const SLUG_MAP = {
  'alumil-s77-supreme':    { ro:'sistem-aluminiu-alumil-s77-supreme',    en:'alumil-s77-supreme-aluminium-system',    de:'alumil-s77-supreme-aluminiumsystem',    fr:'systeme-aluminium-alumil-s77-supreme',    es:'sistema-aluminio-alumil-s77-supreme',    it:'sistema-alluminio-alumil-s77-supreme'    },
  'alumil-s67-smartia':    { ro:'sistem-aluminiu-alumil-s67-smartia',    en:'alumil-s67-smartia-aluminium-system',    de:'alumil-s67-smartia-aluminiumsystem',    fr:'systeme-aluminium-alumil-s67-smartia',    es:'sistema-aluminio-alumil-s67-smartia',    it:'sistema-alluminio-alumil-s67-smartia'    },
  'alumil-s700-supreme':   { ro:'sistem-aluminiu-alumil-s700-supreme',   en:'alumil-s700-supreme-lift-slide-system',  de:'alumil-s700-supreme-hebeschiebesystem',  fr:'systeme-coulissant-alumil-s700-supreme',  es:'sistema-corredera-alumil-s700-supreme',  it:'sistema-scorrevole-alumil-s700-supreme'  },
  'alumil-s350-smartia':   { ro:'sistem-aluminiu-alumil-s350-smartia',   en:'alumil-s350-smartia-lift-slide-system',  de:'alumil-s350-smartia-hebeschiebesystem',  fr:'systeme-coulissant-alumil-s350-smartia',  es:'sistema-corredera-alumil-s350-smartia',  it:'sistema-scorrevole-alumil-s350-smartia'  },
  'alumil-sf85-supreme':   { ro:'sistem-aluminiu-alumil-sf85-supreme',   en:'alumil-sf85-supreme-folding-system',     de:'alumil-sf85-supreme-faltsystem',         fr:'systeme-pliant-alumil-sf85-supreme',      es:'sistema-plegable-alumil-sf85-supreme',   it:'sistema-pieghevole-alumil-sf85-supreme'  },
  'alumil-m19800-smartia': { ro:'sistem-aluminiu-alumil-m19800-smartia', en:'alumil-m19800-smartia-folding-system',   de:'alumil-m19800-smartia-faltsystem',       fr:'systeme-pliant-alumil-m19800-smartia',    es:'sistema-plegable-alumil-m19800-smartia', it:'sistema-pieghevole-alumil-m19800-smartia'},
};

const REVERSE = {};
for (const [canonical, slugs] of Object.entries(SLUG_MAP)) {
  for (const s of Object.values(slugs)) REVERSE[s] = canonical;
}

// ─── PRODUSE DATA ─────────────────────────────────────────────────────────────
const PRODUCTS = {

  'alumil-s77-supreme': {
    img: '/products/alumil-s77-supreme.avif',
    color: '#2d5a8e',
    serie: { ro:'Supreme S 77', en:'Supreme S 77', de:'Supreme S 77', fr:'Supreme S 77', es:'Supreme S 77', it:'Supreme S 77' },
    category: { ro:'Tâmplărie Aluminiu Alumil', en:'Alumil Aluminium Joinery', de:'Alumil Aluminiumfenster', fr:'Menuiserie Aluminium Alumil', es:'Carpintería Aluminio Alumil', it:'Infissi Alluminio Alumil' },
    name: {
      ro:'Sistem Aluminiu Alumil S 77 SUPREME – Ferestre și Uși cu Barieră Termică 40 mm',
      en:'Alumil S 77 SUPREME Aluminium System – Windows & Doors with 40 mm Thermal Barrier',
      de:'Alumil S 77 SUPREME Aluminiumsystem – Fenster & Türen mit 40 mm Wärmedämmbrücke',
      fr:'Système Aluminium Alumil S 77 SUPREME – Fenêtres & Portes à Rupture Thermique 40 mm',
      es:'Sistema Aluminio Alumil S 77 SUPREME – Ventanas y Puertas con Barrera Térmica 40 mm',
      it:'Sistema Alluminio Alumil S 77 SUPREME – Finestre e Porte con Taglio Termico 40 mm',
    },
    tagline: {
      ro:'Top de gamă Supreme — adâncime 77–93 mm, barieră termică 40 mm, geam până la 72 mm, RC3, certificat nZEB.',
      en:'Top of the Supreme range — depth 77–93 mm, 40 mm thermal barrier, glazing up to 72 mm, RC3, nZEB certified.',
      de:'Spitze der Supreme-Reihe — Bautiefe 77–93 mm, 40 mm Wärmedämmbrücke, Verglasung bis 72 mm, RC3, nZEB-zertifiziert.',
      fr:'Haut de gamme Supreme — profondeur 77–93 mm, rupture thermique 40 mm, vitrage jusqu\'à 72 mm, RC3, certifié nZEB.',
      es:'Gama alta Supreme — profundidad 77–93 mm, barrera térmica 40 mm, vidrio hasta 72 mm, RC3, certificado nZEB.',
      it:'Top gamma Supreme — profondità 77–93 mm, taglio termico 40 mm, vetro fino a 72 mm, RC3, certificato nZEB.',
    },
    specs: {
      ro:[['Adâncime constructivă','77 – 93 mm'],['Barieră termică','Poliamidă 40 mm'],['Garnituri etanșare','3 garnituri EPDM perimetrale'],['Geam compatibil','24 – 72 mm (dublu / triplu)'],['Transfer termic Uf','de la 0,86 W/m²K'],['Izolare fonică','până la 42 dB'],['Antiefracție','RC3'],['Feronerie','Roto / Maco perimetrală'],['Finisaj','Vopsit RAL / Anodizat'],['Greutate max. canat','400 kg'],['Dimensiuni max. canat','4500 × 4000 mm'],['Clasă','Supreme — top de gamă'],],
      en:[['Construction depth','77 – 93 mm'],['Thermal barrier','Polyamide 40 mm'],['Sealing gaskets','3 perimeter EPDM gaskets'],['Compatible glass','24 – 72 mm (double / triple)'],['Thermal transfer Uf','from 0.86 W/m²K'],['Sound insulation','up to 42 dB'],['Anti-burglary','RC3'],['Hardware','Roto / Maco perimeter'],['Finish','RAL powder coat / Anodised'],['Max. sash weight','400 kg'],['Max. sash size','4500 × 4000 mm'],['Class','Supreme — top of range'],],
      de:[['Bautiefe','77 – 93 mm'],['Wärmedämmbrücke','Polyamid 40 mm'],['Dichtungen','3 perimetrische EPDM-Dichtungen'],['Verglasung','24 – 72 mm (zwei-/dreifach)'],['Wärmedurchgang Uf','ab 0,86 W/m²K'],['Schalldämmung','bis 42 dB'],['Einbruchschutz','RC3'],['Beschläge','Roto / Maco perimetrisch'],['Oberfläche','RAL Pulver / Eloxiert'],['Max. Flügelgewicht','400 kg'],['Max. Flügelmaß','4500 × 4000 mm'],['Klasse','Supreme — Spitze'],],
      fr:[['Profondeur','77 – 93 mm'],['Rupture thermique','Polyamide 40 mm'],['Joints','3 joints EPDM périmètriques'],['Vitrage','24 – 72 mm (double / triple)'],['Uf','dès 0,86 W/m²K'],['Phonique','jusqu\'à 42 dB'],['Anti-effraction','RC3'],['Ferrures','Roto / Maco périmétrique'],['Finition','Thermolaqué / Anodisé'],['Poids max.','400 kg'],['Dim. max.','4500 × 4000 mm'],['Classe','Supreme — haut de gamme'],],
      es:[['Profundidad','77 – 93 mm'],['Barrera térmica','Poliamida 40 mm'],['Juntas','3 EPDM perimetrales'],['Vidrio','24 – 72 mm (doble / triple)'],['Uf','desde 0,86 W/m²K'],['Acústico','hasta 42 dB'],['Antirrobo','RC3'],['Herraje','Roto / Maco perimetral'],['Acabado','RAL / Anodizado'],['Peso máx.','400 kg'],['Dim. máx.','4500 × 4000 mm'],['Clase','Supreme — gama alta'],],
      it:[['Profondità','77 – 93 mm'],['Taglio termico','Poliammide 40 mm'],['Guarnizioni','3 EPDM perimetrali'],['Vetro','24 – 72 mm (doppio / triplo)'],['Uf','da 0,86 W/m²K'],['Acustico','fino a 42 dB'],['Antieffrazione','RC3'],['Ferramenta','Roto / Maco perimetrale'],['Finitura','RAL / Anodizzato'],['Peso max.','400 kg'],['Dim. max.','4500 × 4000 mm'],['Classe','Supreme — top gamma'],],
    },
    perf: {
      ro:[['Coeficient Uf cadru','de la 0,86 W/m²K'],['Coeficient Uw fereastră','de la 1,0 W/m²K'],['Etanșeitate apă','E1050'],['Permeabilitate aer','Clasa 4'],['Rezistență vânt','C5 · 2000 Pa'],['Izolare fonică','până la 42 dB'],['Antiefracție','RC3 (standard)'],],
      en:[['Frame Uf','from 0.86 W/m²K'],['Window Uw','from 1.0 W/m²K'],['Water tightness','E1050'],['Air permeability','Class 4'],['Wind resistance','C5 · 2000 Pa'],['Sound insulation','up to 42 dB'],['Anti-burglary','RC3 (standard)'],],
      de:[['Rahmen Uf','ab 0,86 W/m²K'],['Fenster Uw','ab 1,0 W/m²K'],['Schlagregen','E1050'],['Luftdurchlass','Klasse 4'],['Windlast','C5 · 2000 Pa'],['Schalldämmung','bis 42 dB'],['Einbruchschutz','RC3 (Standard)'],],
      fr:[['Uf cadre','dès 0,86 W/m²K'],['Uw fenêtre','dès 1,0 W/m²K'],['Eau','E1050'],['Air','Classe 4'],['Vent','C5 · 2000 Pa'],['Son','jusqu\'à 42 dB'],['Anti-effraction','RC3 (standard)'],],
      es:[['Uf marco','desde 0,86 W/m²K'],['Uw ventana','desde 1,0 W/m²K'],['Agua','E1050'],['Aire','Clase 4'],['Viento','C5 · 2000 Pa'],['Sonido','hasta 42 dB'],['Antirrobo','RC3 (estándar)'],],
      it:[['Uf telaio','da 0,86 W/m²K'],['Uw finestra','da 1,0 W/m²K'],['Acqua','E1050'],['Aria','Classe 4'],['Vento','C5 · 2000 Pa'],['Suono','fino a 42 dB'],['Antieffrazione','RC3 (standard)'],],
    },
    advantages: {
      ro:['Barieră termică poliamidă 40 mm — cea mai groasă din gama Alumil, Uf de la 0,86 W/m²K, compatibil Passive House','Geam până la 72 mm — suportă triple vitrat premium cu Warm Edge pentru performanță nZEB maximă','RC3 standard — certificare antiefracție inclusă, fără costuri suplimentare de feronerie','Suprafețe vitrate excepționale — foi până la 4500 × 4000 mm, 400 kg, pentru vile și clădiri premium','3 garnituri EPDM perimetrale — etanșeitate C5 · 2000 Pa, rezistentă la cele mai severe condiții meteo','Finisaj RAL complet sau anodizat — culori standard și personalizate, durabilitate ≥ 25 ani'],
      en:['40 mm polyamide thermal barrier — thickest in Alumil range, Uf from 0.86 W/m²K, Passive House compatible','Glazing up to 72 mm — supports premium triple glazing with Warm Edge for maximum nZEB performance','RC3 standard — anti-burglary certification included, no additional hardware costs','Exceptional glazed areas — panels up to 4500 × 4000 mm, 400 kg, for villas and premium buildings','3 perimeter EPDM gaskets — C5 · 2000 Pa water tightness, resistant to the most severe weather conditions','Full RAL or anodised finish — standard and custom colours, durability ≥ 25 years'],
      de:['40 mm Polyamid-Wärmedämmbrücke — dickste der Alumil-Reihe, Uf ab 0,86 W/m²K, Passivhaus-kompatibel','Verglasung bis 72 mm — unterstützt Premium-Dreifachverglasung mit Warm Edge für maximale nZEB-Leistung','RC3 Standard — Einbruchschutz-Zertifizierung inklusive, keine zusätzlichen Beschlagskosten','Außergewöhnliche Glasflächen — Flügel bis 4500 × 4000 mm, 400 kg, für Villen und Premium-Gebäude','3 perimetrische EPDM-Dichtungen — Schlagregen C5 · 2000 Pa, beständig gegen schwerste Wetterbedingungen','Vollständige RAL- oder Eloxal-Oberfläche — Standard- und Sonderfarben, Haltbarkeit ≥ 25 Jahre'],
      fr:['Rupture thermique polyamide 40 mm — la plus épaisse de la gamme Alumil, Uf dès 0,86 W/m²K, compatible Maison Passive','Vitrage jusqu\'à 72 mm — supporte le triple vitrage premium avec Warm Edge pour performances nZEB maximales','RC3 standard — certification anti-effraction incluse, sans coûts supplémentaires de ferrures','Surfaces vitrées exceptionnelles — panneaux jusqu\'à 4500 × 4000 mm, 400 kg, pour villas et bâtiments premium','3 joints EPDM périmètriques — étanchéité C5 · 2000 Pa, résistant aux conditions météo les plus sévères','Finition RAL complète ou anodisée — couleurs standard et personnalisées, durabilité ≥ 25 ans'],
      es:['Barrera térmica poliamida 40 mm — la más gruesa de la gama Alumil, Uf desde 0,86 W/m²K, compatible Casa Pasiva','Vidrio hasta 72 mm — soporta triple vidrio premium con Warm Edge para máximo rendimiento nZEB','RC3 estándar — certificación antirrobo incluida, sin costes adicionales de herraje','Superficies acristaladas excepcionales — hojas hasta 4500 × 4000 mm, 400 kg, para villas y edificios premium','3 juntas EPDM perimetrales — estanqueidad C5 · 2000 Pa, resistente a las condiciones meteorológicas más severas','Acabado RAL completo o anodizado — colores estándar y personalizados, durabilidad ≥ 25 años'],
      it:['Taglio termico in poliammide 40 mm — il più spesso della gamma Alumil, Uf da 0,86 W/m²K, compatibile Passive House','Vetro fino a 72 mm — supporta triplo vetro premium con Warm Edge per massime prestazioni nZEB','RC3 standard — certificazione antieffrazione inclusa, senza costi aggiuntivi di ferramenta','Superfici vetrate eccezionali — ante fino a 4500 × 4000 mm, 400 kg, per ville ed edifici premium','3 guarnizioni EPDM perimetrali — tenuta C5 · 2000 Pa, resistente alle condizioni meteorologiche più severe','Finitura RAL completa o anodizzata — colori standard e personalizzati, durata ≥ 25 anni'],
    },
    seo_text: {
      ro:'Sistemul de tâmplărie aluminiu Alumil S 77 SUPREME este soluția de vârf a gamei Supreme Alumil pentru ferestre și uși cu deschidere oscilo-batantă, proiectat să satisfacă cerințele celor mai exigente standarde energetice și de securitate. Bariera termică din poliamidă de 40 mm — cea mai groasă din întreaga gamă Alumil — asigură Uf de la 0,86 W/m²K la cadru, iar în combinație cu geam triplu SGG Planitherm Ultra N și distanțier Warm Edge permite atingerea Uw = 1,0 W/m²K, compatibil cu cerințele nZEB și cu standardele clădirilor low-energy. Adâncimea constructivă variabilă de 77–93 mm permite adaptarea la orice cerință arhitecturală, inclusiv foi de sticlă de dimensiuni excepționale — până la 4500 × 4000 mm și 400 kg — pentru fațade rezidențiale premium, vile și proiecte cu vitraj continuu. Certificarea antiefracție RC3 este standard în sistem, fără costuri suplimentare de feronerie, asigurând protecția optimă pentru ușile de intrare și terase. Neofort BIZ furnizează și montează S 77 SUPREME în gama completă de culori RAL, finisaje anodizate și variante bicolor interior/exterior, cu asistență tehnică specializată și garanție de producție Alumil.',
      en:'The Alumil S 77 SUPREME aluminium joinery system is the top solution of the Alumil Supreme range for tilt-and-turn windows and doors, designed to meet the requirements of the most demanding energy and security standards. The 40 mm polyamide thermal barrier — the thickest in the entire Alumil range — ensures Uf from 0.86 W/m²K at the frame, and in combination with SGG Planitherm Ultra N triple glazing and Warm Edge spacer, allows achieving Uw = 1.0 W/m²K, compatible with nZEB requirements and low-energy building standards. The variable construction depth of 77–93 mm allows adaptation to any architectural requirement, including exceptionally large glass panels — up to 4500 × 4000 mm and 400 kg — for premium residential facades, villas and continuous glazing projects. RC3 anti-burglary certification is standard in the system, without additional hardware costs, providing optimal protection for entrance doors and terraces. Neofort BIZ supplies and installs S 77 SUPREME in the full range of RAL colours, anodised finishes and interior/exterior bicolour variants, with specialised technical support and Alumil production warranty.',
      de:'Das Alumil S 77 SUPREME Aluminiumfenstersystem ist die Spitzenlösung der Alumil Supreme-Reihe für Dreh-Kipp-Fenster und -Türen, konzipiert um die Anforderungen der anspruchsvollsten Energie- und Sicherheitsstandards zu erfüllen. Die 40 mm Polyamid-Wärmedämmbrücke — die dickste der gesamten Alumil-Reihe — gewährleistet Uf ab 0,86 W/m²K am Rahmen, und in Kombination mit SGG Planitherm Ultra N Dreifachverglasung und Warm Edge Abstandhalter ermöglicht das Erreichen von Uw = 1,0 W/m²K, kompatibel mit nZEB-Anforderungen und Niedrigstenergiegebäudestandards. Die variable Bautiefe von 77–93 mm ermöglicht die Anpassung an jede Architekturanforderung, einschließlich außergewöhnlich großer Glasscheiben — bis zu 4500 × 4000 mm und 400 kg — für Premium-Wohnfassaden, Villen und Projekte mit Durchgangsverglasung. RC3-Einbruchschutz-Zertifizierung ist im System Standard, ohne zusätzliche Beschlagskosten, und bietet optimalen Schutz für Eingangstüren und Terrassen. Neofort BIZ liefert und montiert S 77 SUPREME in der gesamten Palette der RAL-Farben, Eloxal-Oberflächen und Innen-/Außen-Zweifarbvarianten, mit spezialisiertem technischem Support und Alumil-Produktionsgarantie.',
      fr:'Le système de menuiserie aluminium Alumil S 77 SUPREME est la solution de pointe de la gamme Alumil Supreme pour les fenêtres et portes oscillo-battantes, conçu pour répondre aux exigences des normes énergétiques et de sécurité les plus exigeantes. La rupture thermique en polyamide de 40 mm — la plus épaisse de toute la gamme Alumil — assure un Uf dès 0,86 W/m²K au cadre, et en combinaison avec le triple vitrage SGG Planitherm Ultra N et l\'espaceur Warm Edge, permet d\'atteindre Uw = 1,0 W/m²K, compatible avec les exigences nZEB et les normes des bâtiments basse énergie. La profondeur de construction variable de 77–93 mm permet l\'adaptation à toute exigence architecturale, y compris des panneaux de verre de dimensions exceptionnelles — jusqu\'à 4500 × 4000 mm et 400 kg — pour les façades résidentielles premium, les villas et les projets à vitrage continu. La certification anti-effraction RC3 est standard dans le système, sans coûts de ferrures supplémentaires, assurant une protection optimale pour les portes d\'entrée et les terrasses. Neofort BIZ fournit et installe le S 77 SUPREME dans la gamme complète de couleurs RAL, finitions anodisées et variantes bicolores intérieur/extérieur, avec support technique spécialisé et garantie de production Alumil.',
      es:'El sistema de carpintería de aluminio Alumil S 77 SUPREME es la solución de vanguardia de la gama Alumil Supreme para ventanas y puertas oscilobatientes, diseñado para cumplir los requisitos de los estándares energéticos y de seguridad más exigentes. La barrera térmica de poliamida de 40 mm — la más gruesa de toda la gama Alumil — asegura Uf desde 0,86 W/m²K en el marco, y en combinación con el triple vidrio SGG Planitherm Ultra N y el separador Warm Edge, permite alcanzar Uw = 1,0 W/m²K, compatible con los requisitos nZEB y los estándares de edificios de baja energía. La profundidad constructiva variable de 77–93 mm permite la adaptación a cualquier requisito arquitectónico, incluidos paneles de vidrio de dimensiones excepcionales — hasta 4500 × 4000 mm y 400 kg — para fachadas residenciales premium, villas y proyectos con acristalamiento continuo. La certificación antirrobo RC3 es estándar en el sistema, sin costes adicionales de herraje, proporcionando protección óptima para puertas de entrada y terrazas. Neofort BIZ suministra e instala el S 77 SUPREME en la gama completa de colores RAL, acabados anodizados y variantes bicolor interior/exterior, con soporte técnico especializado y garantía de producción Alumil.',
      it:'Il sistema di infissi in alluminio Alumil S 77 SUPREME è la soluzione di punta della gamma Alumil Supreme per finestre e porte vasistas, progettato per soddisfare i requisiti degli standard energetici e di sicurezza più esigenti. Il taglio termico in poliammide da 40 mm — il più spesso dell\'intera gamma Alumil — assicura Uf da 0,86 W/m²K al telaio, e in combinazione con il triplo vetro SGG Planitherm Ultra N e il distanziale Warm Edge, consente di raggiungere Uw = 1,0 W/m²K, compatibile con i requisiti nZEB e gli standard degli edifici a basso consumo energetico. La profondità di costruzione variabile di 77–93 mm consente l\'adattamento a qualsiasi requisito architettonico, inclusi pannelli di vetro di dimensioni eccezionali — fino a 4500 × 4000 mm e 400 kg — per facciate residenziali premium, ville e progetti con vetrazione continua. La certificazione antieffrazione RC3 è standard nel sistema, senza costi aggiuntivi di ferramenta, fornendo protezione ottimale per le porte d\'ingresso e le terrazze. Neofort BIZ fornisce e installa S 77 SUPREME nella gamma completa di colori RAL, finiture anodizzate e varianti bicolore interno/esterno, con supporto tecnico specializzato e garanzia di produzione Alumil.',
    },
  },

  'alumil-s67-smartia': {
    img: '/products/alumil-s67-smartia.avif',
    color: '#2d5a8e',
    serie: { ro:'Smartia S 67', en:'Smartia S 67', de:'Smartia S 67', fr:'Smartia S 67', es:'Smartia S 67', it:'Smartia S 67' },
    category: { ro:'Tâmplărie Aluminiu Alumil', en:'Alumil Aluminium Joinery', de:'Alumil Aluminiumfenster', fr:'Menuiserie Aluminium Alumil', es:'Carpintería Aluminio Alumil', it:'Infissi Alluminio Alumil' },
    name: {
      ro:'Sistem Aluminiu Alumil S 67 SMARTIA – Ferestre și Uși cu Izolare Fonică 45 dB',
      en:'Alumil S 67 SMARTIA Aluminium System – Windows & Doors with 45 dB Sound Insulation',
      de:'Alumil S 67 SMARTIA Aluminiumsystem – Fenster & Türen mit 45 dB Schalldämmung',
      fr:'Système Aluminium Alumil S 67 SMARTIA – Fenêtres & Portes avec Isolation Phonique 45 dB',
      es:'Sistema Aluminio Alumil S 67 SMARTIA – Ventanas y Puertas con Aislamiento Acústico 45 dB',
      it:'Sistema Alluminio Alumil S 67 SMARTIA – Finestre e Porte con Isolamento Acustico 45 dB',
    },
    tagline: {
      ro:'Sistem aluminiu versatil Smartia — 67–75 mm adâncime, barieră termică 30 mm, izolare fonică superioară 45 dB, raport calitate-preț optim.',
      en:'Versatile Smartia aluminium system — 67–75 mm depth, 30 mm thermal barrier, superior 45 dB sound insulation, optimal value for money.',
      de:'Vielseitiges Smartia Aluminiumsystem — 67–75 mm Bautiefe, 30 mm Wärmedämmbrücke, überlegene 45 dB Schalldämmung, optimales Preis-Leistungs-Verhältnis.',
      fr:'Système aluminium Smartia polyvalent — profondeur 67–75 mm, rupture thermique 30 mm, isolation phonique supérieure 45 dB, rapport qualité-prix optimal.',
      es:'Sistema aluminio Smartia versátil — profundidad 67–75 mm, barrera térmica 30 mm, aislamiento acústico superior 45 dB, óptima relación calidad-precio.',
      it:'Sistema alluminio Smartia versatile — profondità 67–75 mm, taglio termico 30 mm, isolamento acustico superiore 45 dB, ottimo rapporto qualità-prezzo.',
    },
    specs: {
      ro:[['Adâncime constructivă','67 – 75 mm'],['Barieră termică','Poliamidă 30 mm'],['Garnituri etanșare','3 garnituri EPDM perimetrale'],['Geam compatibil','24 – 58 mm (dublu / triplu)'],['Transfer termic Uf','de la 1,5 W/m²K'],['Izolare fonică','până la 45 dB'],['Antiefracție','RC3 opțional'],['Feronerie','Roto / Maco perimetrală'],['Finisaj','Vopsit RAL / Anodizat'],['Greutate max. canat','200 kg'],['Clasă','Smartia — raport optim'],],
      en:[['Construction depth','67 – 75 mm'],['Thermal barrier','Polyamide 30 mm'],['Sealing gaskets','3 perimeter EPDM gaskets'],['Compatible glass','24 – 58 mm (double / triple)'],['Thermal transfer Uf','from 1.5 W/m²K'],['Sound insulation','up to 45 dB'],['Anti-burglary','RC3 optional'],['Hardware','Roto / Maco perimeter'],['Finish','RAL powder coat / Anodised'],['Max. sash weight','200 kg'],['Class','Smartia — optimal value'],],
      de:[['Bautiefe','67 – 75 mm'],['Wärmedämmbrücke','Polyamid 30 mm'],['Dichtungen','3 perimetrische EPDM-Dichtungen'],['Verglasung','24 – 58 mm (zwei-/dreifach)'],['Wärmedurchgang Uf','ab 1,5 W/m²K'],['Schalldämmung','bis 45 dB'],['Einbruchschutz','RC3 optional'],['Beschläge','Roto / Maco perimetrisch'],['Oberfläche','RAL Pulver / Eloxiert'],['Max. Flügelgewicht','200 kg'],['Klasse','Smartia — optimales Verhältnis'],],
      fr:[['Profondeur','67 – 75 mm'],['Rupture thermique','Polyamide 30 mm'],['Joints','3 joints EPDM périmètriques'],['Vitrage','24 – 58 mm (double / triple)'],['Uf','dès 1,5 W/m²K'],['Phonique','jusqu\'à 45 dB'],['Anti-effraction','RC3 optionnel'],['Ferrures','Roto / Maco périmétrique'],['Finition','RAL / Anodisé'],['Poids max.','200 kg'],['Classe','Smartia — valeur optimale'],],
      es:[['Profundidad','67 – 75 mm'],['Barrera térmica','Poliamida 30 mm'],['Juntas','3 EPDM perimetrales'],['Vidrio','24 – 58 mm (doble / triple)'],['Uf','desde 1,5 W/m²K'],['Acústico','hasta 45 dB'],['Antirrobo','RC3 opcional'],['Herraje','Roto / Maco perimetral'],['Acabado','RAL / Anodizado'],['Peso máx.','200 kg'],['Clase','Smartia — valor óptimo'],],
      it:[['Profondità','67 – 75 mm'],['Taglio termico','Poliammide 30 mm'],['Guarnizioni','3 EPDM perimetrali'],['Vetro','24 – 58 mm (doppio / triplo)'],['Uf','da 1,5 W/m²K'],['Acustico','fino a 45 dB'],['Antieffrazione','RC3 opzionale'],['Ferramenta','Roto / Maco perimetrale'],['Finitura','RAL / Anodizzato'],['Peso max.','200 kg'],['Classe','Smartia — valore ottimale'],],
    },
    perf: {
      ro:[['Coeficient Uf cadru','de la 1,5 W/m²K'],['Coeficient Uw','de la 1,3 W/m²K'],['Etanșeitate apă','E750'],['Permeabilitate aer','Clasa 3'],['Rezistență vânt','C4 · 1600 Pa'],['Izolare fonică','până la 45 dB'],['Antiefracție','RC2 standard / RC3 opțional'],],
      en:[['Frame Uf','from 1.5 W/m²K'],['Window Uw','from 1.3 W/m²K'],['Water tightness','E750'],['Air permeability','Class 3'],['Wind resistance','C4 · 1600 Pa'],['Sound insulation','up to 45 dB'],['Anti-burglary','RC2 standard / RC3 optional'],],
      de:[['Rahmen Uf','ab 1,5 W/m²K'],['Fenster Uw','ab 1,3 W/m²K'],['Schlagregen','E750'],['Luftdurchlass','Klasse 3'],['Windlast','C4 · 1600 Pa'],['Schalldämmung','bis 45 dB'],['Einbruchschutz','RC2 Standard / RC3 optional'],],
      fr:[['Uf cadre','dès 1,5 W/m²K'],['Uw fenêtre','dès 1,3 W/m²K'],['Eau','E750'],['Air','Classe 3'],['Vent','C4 · 1600 Pa'],['Son','jusqu\'à 45 dB'],['Anti-effraction','RC2 standard / RC3 opt.'],],
      es:[['Uf marco','desde 1,5 W/m²K'],['Uw ventana','desde 1,3 W/m²K'],['Agua','E750'],['Aire','Clase 3'],['Viento','C4 · 1600 Pa'],['Sonido','hasta 45 dB'],['Antirrobo','RC2 estándar / RC3 opt.'],],
      it:[['Uf telaio','da 1,5 W/m²K'],['Uw finestra','da 1,3 W/m²K'],['Acqua','E750'],['Aria','Classe 3'],['Vento','C4 · 1600 Pa'],['Suono','fino a 45 dB'],['Antieffrazione','RC2 standard / RC3 opt.'],],
    },
    advantages: {
      ro:['Izolare fonică 45 dB — cea mai bună din clasa Smartia, superioară multor sisteme Supreme medii, ideal pentru zone urbane aglomerate','Barieră termică 30 mm — Uf de la 1,5 W/m²K, performanță termică satisfăcătoare pentru clădiri rezidențiale standard','Raport calitate-preț optim — clasa Smartia Alumil la preț mediu, produs în Grecia cu standarde europene','Compatibil geam 24–58 mm — dublu și triplu termoizolant pentru diverse cerințe termice și fonice','Design versatil — feronerie Roto/Maco, disponibil în toate culorile RAL și finisaje anodizate','Recomandat pentru blocuri, clădiri de birouri, spații comerciale și renovări rezidențiale'],
      en:['45 dB sound insulation — best in Smartia class, superior to many mid-range Supreme systems, ideal for busy urban areas','30 mm thermal barrier — Uf from 1.5 W/m²K, satisfactory thermal performance for standard residential buildings','Optimal value for money — Alumil Smartia class at medium price, produced in Greece to European standards','Compatible glass 24–58 mm — double and triple thermal insulation for various thermal and acoustic requirements','Versatile design — Roto/Maco hardware, available in all RAL colours and anodised finishes','Recommended for apartment blocks, office buildings, commercial spaces and residential renovations'],
      de:['45 dB Schalldämmung — beste der Smartia-Klasse, überlegen gegenüber vielen mittleren Supreme-Systemen, ideal für belebte Stadtgebiete','30 mm Wärmedämmbrücke — Uf ab 1,5 W/m²K, zufriedenstellende Wärmeleistung für Standard-Wohngebäude','Optimales Preis-Leistungs-Verhältnis — Alumil Smartia-Klasse zum mittleren Preis, in Griechenland nach europäischen Standards hergestellt','Kompatibles Glas 24–58 mm — Zweifach- und Dreifachwärmeschutz für verschiedene Wärme- und Schallanforderungen','Vielseitiges Design — Roto/Maco-Beschläge, erhältlich in allen RAL-Farben und Eloxal-Oberflächen','Empfohlen für Mehrfamilienhäuser, Bürogebäude, Gewerberäume und Wohnrenovierungen'],
      fr:['Isolation phonique 45 dB — la meilleure de la classe Smartia, supérieure à de nombreux systèmes Supreme de gamme moyenne, idéale pour les zones urbaines animées','Rupture thermique 30 mm — Uf dès 1,5 W/m²K, performance thermique satisfaisante pour les bâtiments résidentiels standard','Rapport qualité-prix optimal — classe Alumil Smartia à prix moyen, produit en Grèce selon les normes européennes','Vitrage compatible 24–58 mm — isolation thermique double et triple pour diverses exigences thermiques et acoustiques','Design polyvalent — ferrures Roto/Maco, disponible dans toutes les couleurs RAL et finitions anodisées','Recommandé pour les immeubles d\'appartements, les bureaux, les espaces commerciaux et les rénovations résidentielles'],
      es:['Aislamiento acústico 45 dB — el mejor de la clase Smartia, superior a muchos sistemas Supreme de gama media, ideal para zonas urbanas concurridas','Barrera térmica 30 mm — Uf desde 1,5 W/m²K, rendimiento térmico satisfactorio para edificios residenciales estándar','Óptima relación calidad-precio — clase Alumil Smartia a precio medio, fabricado en Grecia con estándares europeos','Vidrio compatible 24–58 mm — aislamiento térmico doble y triple para diversos requisitos térmicos y acústicos','Diseño versátil — herraje Roto/Maco, disponible en todos los colores RAL y acabados anodizados','Recomendado para bloques de apartamentos, edificios de oficinas, espacios comerciales y renovaciones residenciales'],
      it:['Isolamento acustico 45 dB — il migliore della classe Smartia, superiore a molti sistemi Supreme di fascia media, ideale per zone urbane affollate','Taglio termico 30 mm — Uf da 1,5 W/m²K, prestazioni termiche soddisfacenti per edifici residenziali standard','Ottimo rapporto qualità-prezzo — classe Alumil Smartia a prezzo medio, prodotto in Grecia secondo standard europei','Vetro compatibile 24–58 mm — isolamento termico doppio e triplo per vari requisiti termici e acustici','Design versatile — ferramenta Roto/Maco, disponibile in tutti i colori RAL e finiture anodizzate','Consigliato per condomini, edifici per uffici, spazi commerciali e ristrutturazioni residenziali'],
    },
    seo_text: {
      ro:'Sistemul de aluminiu Alumil S 67 SMARTIA se distinge în gama sa de preț printr-o izolare fonică de până la 45 dB — performanță superioară multor sisteme de gamă medie și premium de la alte mărci — datorită combinației de adâncime constructivă 67–75 mm, 3 garnituri EPDM perimetrale și compatibilității cu geam triplu de până la 58 mm grosime. Aceasta îl face soluția preferată pentru fațadele expuse la trafic urban intens, căi ferate sau zone industriale, unde reducerea nivelului de zgomot este o prioritate. Bariera termică din poliamidă de 30 mm asigură Uf de la 1,5 W/m²K — performanță adecvată pentru clădirile rezidențiale standard și comerciale care nu necesită certificare nZEB sau Passive House. Feroneria Roto/Maco perimetrală cu toate punctele de blocare asigură RC2 standard, cu upgrade la RC3 opțional. Neofort BIZ furnizează S 67 SMARTIA în toate culorile RAL standard și personalizate, finisaje anodizate, bicolor interior/exterior și variante speciale cu profil vizibil redus pentru maximizarea suprafeței vitrate.',
      en:'The Alumil S 67 SMARTIA aluminium system stands out in its price range with sound insulation of up to 45 dB — performance superior to many mid-range and premium systems from other brands — thanks to the combination of 67–75 mm construction depth, 3 perimeter EPDM gaskets and compatibility with triple glazing up to 58 mm thickness. This makes it the preferred solution for facades exposed to heavy urban traffic, railways or industrial areas, where noise reduction is a priority. The 30 mm polyamide thermal barrier ensures Uf from 1.5 W/m²K — adequate performance for standard residential and commercial buildings that do not require nZEB or Passive House certification. The perimeter Roto/Maco hardware with all locking points provides standard RC2, with optional RC3 upgrade. Neofort BIZ supplies S 67 SMARTIA in all standard and custom RAL colours, anodised finishes, interior/exterior bicolour and special variants with reduced visible profile for maximum glazed area.',
      de:'Das Alumil S 67 SMARTIA Aluminiumsystem zeichnet sich in seiner Preisklasse durch eine Schalldämmung von bis zu 45 dB aus — überlegene Leistung gegenüber vielen mittleren und Premium-Systemen anderer Marken — dank der Kombination aus 67–75 mm Bautiefe, 3 perimetrischen EPDM-Dichtungen und Kompatibilität mit Dreifachverglasung bis zu 58 mm Dicke. Dies macht es zur bevorzugten Lösung für Fassaden, die starkem Stadtverkehr, Eisenbahnen oder Industriegebieten ausgesetzt sind, wo Lärmminderung Priorität hat. Die 30 mm Polyamid-Wärmedämmbrücke gewährleistet Uf ab 1,5 W/m²K — ausreichende Leistung für Standard-Wohn- und Gewerbegebäude, die keine nZEB- oder Passivhauszertifizierung benötigen. Die perimetrische Roto/Maco-Ausstattung mit allen Verriegelungspunkten bietet Standard-RC2, mit optionalem RC3-Upgrade. Neofort BIZ liefert S 67 SMARTIA in allen Standard- und Sonder-RAL-Farben, Eloxal-Oberflächen, Innen-/Außen-Zweifarbig und Spezialvarianten mit reduzierter sichtbarer Profilbreite für maximale Glasfläche.',
      fr:'Le système aluminium Alumil S 67 SMARTIA se distingue dans sa gamme de prix par une isolation phonique jusqu\'à 45 dB — performance supérieure à de nombreux systèmes de gamme moyenne et premium d\'autres marques — grâce à la combinaison d\'une profondeur de construction de 67–75 mm, de 3 joints EPDM périmètriques et d\'une compatibilité avec le triple vitrage jusqu\'à 58 mm d\'épaisseur. Cela en fait la solution préférée pour les façades exposées à un trafic urbain intense, des voies ferrées ou des zones industrielles, où la réduction du bruit est une priorité. La rupture thermique en polyamide de 30 mm assure un Uf dès 1,5 W/m²K — performance adéquate pour les bâtiments résidentiels et commerciaux standard qui ne nécessitent pas de certification nZEB ou Maison Passive. Les ferrures périmètriques Roto/Maco avec tous les points de verrouillage fournissent RC2 standard, avec mise à niveau RC3 optionnelle. Neofort BIZ fournit S 67 SMARTIA dans toutes les couleurs RAL standard et personnalisées, finitions anodisées, bicolore intérieur/extérieur et variantes spéciales avec profil visible réduit pour maximiser la surface vitrée.',
      es:'El sistema de aluminio Alumil S 67 SMARTIA destaca en su rango de precios con un aislamiento acústico de hasta 45 dB — rendimiento superior a muchos sistemas de gama media y premium de otras marcas — gracias a la combinación de profundidad constructiva de 67–75 mm, 3 juntas EPDM perimetrales y compatibilidad con triple vidrio de hasta 58 mm de espesor. Esto lo convierte en la solución preferida para fachadas expuestas a tráfico urbano intenso, vías ferroviarias o zonas industriales, donde la reducción del ruido es una prioridad. La barrera térmica de poliamida de 30 mm asegura Uf desde 1,5 W/m²K — rendimiento adecuado para edificios residenciales y comerciales estándar que no requieren certificación nZEB o Casa Pasiva. El herraje perimetral Roto/Maco con todos los puntos de cierre proporciona RC2 estándar, con actualización a RC3 opcional. Neofort BIZ suministra S 67 SMARTIA en todos los colores RAL estándar y personalizados, acabados anodizados, bicolor interior/exterior y variantes especiales con perfil visible reducido para maximizar la superficie acristalada.',
      it:'Il sistema alluminio Alumil S 67 SMARTIA si distingue nella sua fascia di prezzo con un isolamento acustico fino a 45 dB — prestazioni superiori a molti sistemi di fascia media e premium di altri marchi — grazie alla combinazione di profondità di costruzione 67–75 mm, 3 guarnizioni EPDM perimetrali e compatibilità con triplo vetro fino a 58 mm di spessore. Questo lo rende la soluzione preferita per le facciate esposte a intenso traffico urbano, ferrovie o aree industriali, dove la riduzione del rumore è una priorità. Il taglio termico in poliammide da 30 mm assicura Uf da 1,5 W/m²K — prestazioni adeguate per edifici residenziali e commerciali standard che non richiedono la certificazione nZEB o Passive House. La ferramenta perimetrale Roto/Maco con tutti i punti di chiusura fornisce RC2 standard, con upgrade a RC3 opzionale. Neofort BIZ fornisce S 67 SMARTIA in tutti i colori RAL standard e personalizzati, finiture anodizzate, bicolore interno/esterno e varianti speciali con profilo visibile ridotto per massimizzare la superficie vetrata.',
    },
  },

  'alumil-s700-supreme': {
    img: '/products/alumil-s700-supreme.avif',
    color: '#2d5a8e',
    serie: { ro:'Supreme S 700', en:'Supreme S 700', de:'Supreme S 700', fr:'Supreme S 700', es:'Supreme S 700', it:'Supreme S 700' },
    category: { ro:'Tâmplărie Aluminiu Alumil', en:'Alumil Aluminium Joinery', de:'Alumil Aluminiumfenster', fr:'Menuiserie Aluminium Alumil', es:'Carpintería Aluminio Alumil', it:'Infissi Alluminio Alumil' },
    name: {
      ro:'Sistem Liftant Glisant Alumil S 700 SUPREME – Foi până la 500 kg, Geam 50 mm',
      en:'Alumil S 700 SUPREME Lift & Slide – Panels up to 500 kg, 50 mm Glazing',
      de:'Alumil S 700 SUPREME Hebeschiebe – Flügel bis 500 kg, 50 mm Verglasung',
      fr:'Coulissant Levant Alumil S 700 SUPREME – Panneaux jusqu\'à 500 kg, Vitrage 50 mm',
      es:'Corredera Elevable Alumil S 700 SUPREME – Hojas hasta 500 kg, Vidrio 50 mm',
      it:'Scorrevole Alzante Alumil S 700 SUPREME – Ante fino a 500 kg, Vetro 50 mm',
    },
    tagline: {
      ro:'Liftant glisant premium cu izolare Kooltherm și perii tri-fin — foi 500 kg, deschidere totală fără prag vizibil, Uf de la 1,1 W/m²K.',
      en:'Premium lift and slide with Kooltherm insulation and tri-fin brushes — 500 kg panels, full opening without visible threshold, Uf from 1.1 W/m²K.',
      de:'Premium-Hebeschiebe mit Kooltherm-Dämmung und Tri-Fin-Bürsten — 500 kg Flügel, vollständige Öffnung ohne sichtbare Schwelle, Uf ab 1,1 W/m²K.',
      fr:'Coulissant levant premium avec isolation Kooltherm et brosses tri-fin — panneaux 500 kg, ouverture totale sans seuil visible, Uf dès 1,1 W/m²K.',
      es:'Corredera elevable premium con aislamiento Kooltherm y cepillos tri-fin — hojas 500 kg, apertura total sin umbral visible, Uf desde 1,1 W/m²K.',
      it:'Scorrevole alzante premium con isolamento Kooltherm e spazzole tri-fin — ante 500 kg, apertura totale senza soglia visibile, Uf da 1,1 W/m²K.',
    },
    specs: {
      ro:[['Tip sistem','Liftant Glisant (HS)'],['Barieră termică','Kooltherm'],['Etanșare perimetrală','Perii tri-fin'],['Adâncime toc','70 mm'],['Geam compatibil','până la 50 mm'],['Transfer termic Uf','de la 1,1 W/m²K'],['Izolare fonică','până la 41 dB'],['Antiefracție','RC2'],['Greutate max. foaie','500 kg'],['Șine','Inox / Aluminiu'],['Deschidere','Orizontală'],['Clasă','Supreme — premium'],],
      en:[['System type','Lift & Slide (HS)'],['Thermal barrier','Kooltherm'],['Perimeter sealing','Tri-fin brushes'],['Frame depth','70 mm'],['Compatible glass','up to 50 mm'],['Thermal transfer Uf','from 1.1 W/m²K'],['Sound insulation','up to 41 dB'],['Anti-burglary','RC2'],['Max. panel weight','500 kg'],['Rails','Stainless / Aluminium'],['Opening','Horizontal'],['Class','Supreme — premium'],],
      de:[['Systemtyp','Hebeschiebe (HS)'],['Wärmedämmbrücke','Kooltherm'],['Perimeterdichtung','Tri-Fin-Bürsten'],['Rahmenbreite','70 mm'],['Verglasung','bis 50 mm'],['Wärmedurchgang Uf','ab 1,1 W/m²K'],['Schalldämmung','bis 41 dB'],['Einbruchschutz','RC2'],['Max. Flügelgewicht','500 kg'],['Schienen','Edelstahl / Alu'],['Öffnung','Horizontal'],['Klasse','Supreme — premium'],],
      fr:[['Type système','Coulissant levant'],['Rupture thermique','Kooltherm'],['Étanchéité','Brosses tri-fin'],['Prof. cadre','70 mm'],['Vitrage','jusqu\'à 50 mm'],['Uf','dès 1,1 W/m²K'],['Phonique','jusqu\'à 41 dB'],['Anti-effraction','RC2'],['Poids max.','500 kg'],['Rails','Inox / Alu'],['Ouverture','Horizontale'],['Classe','Supreme — premium'],],
      es:[['Tipo sistema','Corredera elevable'],['Barrera térmica','Kooltherm'],['Hermeticidad','Cepillos tri-fin'],['Prof. marco','70 mm'],['Vidrio','hasta 50 mm'],['Uf','desde 1,1 W/m²K'],['Acústico','hasta 41 dB'],['Antirrobo','RC2'],['Peso máx.','500 kg'],['Raíles','Inox / Alu'],['Apertura','Horizontal'],['Clase','Supreme — premium'],],
      it:[['Tipo sistema','Scorrevole alzante'],['Taglio termico','Kooltherm'],['Tenuta','Spazzole tri-fin'],['Profondità','70 mm'],['Vetro','fino a 50 mm'],['Uf','da 1,1 W/m²K'],['Acustico','fino a 41 dB'],['Antieffrazione','RC2'],['Peso max.','500 kg'],['Guide','Inox / Alu'],['Apertura','Orizzontale'],['Classe','Supreme — premium'],],
    },
    perf: {
      ro:[['Coeficient Uf','de la 1,1 W/m²K'],['Uw sistem','de la 1,0 W/m²K'],['Etanșeitate apă','E750'],['Permeabilitate aer','Clasa 3'],['Rezistență vânt','C4'],['Izolare fonică','până la 41 dB'],['Antiefracție','RC2'],],
      en:[['Frame Uf','from 1.1 W/m²K'],['System Uw','from 1.0 W/m²K'],['Water tightness','E750'],['Air permeability','Class 3'],['Wind resistance','C4'],['Sound insulation','up to 41 dB'],['Anti-burglary','RC2'],],
      de:[['Uf','ab 1,1 W/m²K'],['Uw','ab 1,0 W/m²K'],['Schlagregen','E750'],['Luftdurchlass','Klasse 3'],['Windlast','C4'],['Schalldämmung','bis 41 dB'],['Einbruchschutz','RC2'],],
      fr:[['Uf','dès 1,1 W/m²K'],['Uw','dès 1,0 W/m²K'],['Eau','E750'],['Air','Cl. 3'],['Vent','C4'],['Son','jusqu\'à 41 dB'],['Anti-effraction','RC2'],],
      es:[['Uf','desde 1,1 W/m²K'],['Uw','desde 1,0 W/m²K'],['Agua','E750'],['Aire','Cl. 3'],['Viento','C4'],['Sonido','hasta 41 dB'],['Antirrobo','RC2'],],
      it:[['Uf','da 1,1 W/m²K'],['Uw','da 1,0 W/m²K'],['Acqua','E750'],['Aria','Cl. 3'],['Vento','C4'],['Suono','fino a 41 dB'],['Antieffrazione','RC2'],],
    },
    advantages: {
      ro:['Foi de 500 kg — conexiune vizuală totală interior-exterior cu sticlă de dimensiuni excepționale','Barieră termică Kooltherm — material izolant superior poliamidei, Uf de la 1,1 W/m²K','Perii tri-fin perimetrale — etanșeitate silențioasă și durabilă, fără garnituri care se uzează','Mecanism liftant — ridică foaia la deschidere, deplasare ușoară indiferent de greutate','Geam până la 50 mm — triplu vitrat cu Warm Edge, confort termic și fonic maxim','Ideal pentru terase premium, living deschis și proiecte arhitecturale de autor'],
      en:['500 kg panels — total visual connection between interior and exterior with exceptionally large glass','Kooltherm thermal barrier — insulating material superior to polyamide, Uf from 1.1 W/m²K','Perimeter tri-fin brushes — silent and durable sealing, without gaskets that wear out','Lift mechanism — raises panel on opening, easy movement regardless of weight','Glazing up to 50 mm — triple glazed with Warm Edge, maximum thermal and acoustic comfort','Ideal for premium terraces, open-plan living and signature architectural projects'],
      de:['500 kg Flügel — totale visuelle Verbindung zwischen Innen und Außen mit außergewöhnlich großen Glasscheiben','Kooltherm Wärmedämmbrücke — Dämmstoff überlegen gegenüber Polyamid, Uf ab 1,1 W/m²K','Perimetrische Tri-Fin-Bürsten — lautlose und dauerhafte Abdichtung, ohne sich abnutzende Dichtungen','Hebemechanismus — hebt Flügel beim Öffnen an, leichte Bewegung unabhängig vom Gewicht','Verglasung bis 50 mm — Dreifachverglasung mit Warm Edge, maximaler Wärme- und Schallkomfort','Ideal für Premium-Terrassen, offene Wohnbereiche und signierte Architekturprojekte'],
      fr:['Panneaux 500 kg — connexion visuelle totale intérieur-extérieur avec du verre de dimensions exceptionnelles','Rupture thermique Kooltherm — matériau isolant supérieur au polyamide, Uf dès 1,1 W/m²K','Brosses tri-fin périmètriques — étanchéité silencieuse et durable, sans joints qui s\'usent','Mécanisme levant — soulève le panneau à l\'ouverture, mouvement facile quelle que soit la charge','Vitrage jusqu\'à 50 mm — triple vitrage avec Warm Edge, confort thermique et acoustique maximum','Idéal pour terrasses premium, espaces de vie ouverts et projets architecturaux signature'],
      es:['Hojas 500 kg — conexión visual total interior-exterior con vidrio de dimensiones excepcionales','Barrera térmica Kooltherm — material aislante superior a la poliamida, Uf desde 1,1 W/m²K','Cepillos tri-fin perimetrales — sellado silencioso y duradero, sin juntas que se desgastan','Mecanismo elevable — levanta la hoja al abrir, movimiento fácil independientemente del peso','Vidrio hasta 50 mm — triple acristalamiento con Warm Edge, máximo confort térmico y acústico','Ideal para terrazas premium, espacios de vida abiertos y proyectos arquitectónicos de autor'],
      it:['Ante 500 kg — connessione visiva totale interno-esterno con vetro di dimensioni eccezionali','Taglio termico Kooltherm — materiale isolante superiore alla poliammide, Uf da 1,1 W/m²K','Spazzole tri-fin perimetrali — tenuta silenziosa e durevole, senza guarnizioni che si consumano','Meccanismo alzante — solleva l\'anta all\'apertura, movimento facile indipendentemente dal peso','Vetro fino a 50 mm — triplo vetro con Warm Edge, massimo comfort termico e acustico','Ideale per terrazze premium, spazi living aperti e progetti architettonici di autore'],
    },
    seo_text: {
      ro:'Sistemul liftant glisant Alumil S 700 SUPREME se distinge de toate sistemele glisante concurente prin utilizarea materialului izolant Kooltherm în locul poliamidei standard — un material de înaltă performanță cu conductivitate termică de circa 3 ori mai mică decât poliamida, care permite atingerea Uf = 1,1 W/m²K la un sistem de glisare cu foi de dimensiuni excepționale. Etanșarea perimetrală prin perii tri-fin, spre deosebire de garniturile EPDM clasice, elimină riscul de uzură a garniturilor pe durata ciclurilor repetate de deschidere și asigură o silențiozitate superioară în operare. Foile de până la 500 kg cu mecanism liftant permit crearea de suprafețe vitrate panoramice fără precedent, specifice vilelor premium, clădirilor de birouri cu design de autor și proiectelor hoteliere. S 700 SUPREME este disponibil cu geam termoizolator până la 50 mm grosime, inclusiv geam triplu SGG Planitherm 4S Evolution cu Warm Edge, în toate culorile RAL și finisaje anodizate. Neofort BIZ asigură proiectarea, fabricarea și montajul sistemelor S 700 SUPREME cu calcul structural și garanție completă de producție.',
      en:'The Alumil S 700 SUPREME lift and slide system stands out from all competing sliding systems by using Kooltherm insulating material instead of standard polyamide — a high-performance material with thermal conductivity approximately 3 times lower than polyamide, which allows achieving Uf = 1.1 W/m²K on a sliding system with exceptionally large panels. Perimeter sealing through tri-fin brushes, unlike classic EPDM gaskets, eliminates the risk of gasket wear during repeated opening cycles and ensures superior operating silence. Panels of up to 500 kg with lift mechanism allow the creation of unprecedented panoramic glazed surfaces, typical of premium villas, designer office buildings and hotel projects. S 700 SUPREME is available with thermal insulating glass up to 50 mm thick, including SGG Planitherm 4S Evolution triple glazing with Warm Edge, in all RAL colours and anodised finishes. Neofort BIZ ensures design, manufacturing and installation of S 700 SUPREME systems with structural calculation and complete production warranty.',
      de:'Das Alumil S 700 SUPREME Hebeschiebe-System zeichnet sich von allen konkurrierenden Schiebesystemen durch den Einsatz von Kooltherm-Dämmstoff anstelle von Standard-Polyamid aus — einem Hochleistungsmaterial mit einer Wärmeleitfähigkeit, die etwa 3-mal geringer ist als Polyamid, was das Erreichen von Uf = 1,1 W/m²K bei einem Schiebesystem mit außergewöhnlich großen Flügeln ermöglicht. Die perimetrische Abdichtung durch Tri-Fin-Bürsten, im Gegensatz zu klassischen EPDM-Dichtungen, eliminiert das Risiko des Dichtungsverschleißes während wiederholter Öffnungszyklen und gewährleistet überlegene Betriebsstille. Flügel von bis zu 500 kg mit Hebemechanismus ermöglichen die Schaffung beispielloser Panorama-Glasflächen, typisch für Premium-Villen, Designer-Bürogebäude und Hotelprojekte. S 700 SUPREME ist mit Wärmeschutzglas bis zu 50 mm Dicke erhältlich, einschließlich SGG Planitherm 4S Evolution Dreifachverglasung mit Warm Edge, in allen RAL-Farben und Eloxal-Oberflächen. Neofort BIZ gewährleistet Planung, Fertigung und Montage von S 700 SUPREME Systemen mit Strukturberechnung und vollständiger Produktionsgarantie.',
      fr:'Le système coulissant levant Alumil S 700 SUPREME se distingue de tous les systèmes coulissants concurrents par l\'utilisation du matériau isolant Kooltherm à la place du polyamide standard — un matériau haute performance avec une conductivité thermique environ 3 fois inférieure au polyamide, qui permet d\'atteindre Uf = 1,1 W/m²K sur un système coulissant avec des panneaux de dimensions exceptionnelles. L\'étanchéité périmétrique par brosses tri-fin, contrairement aux joints EPDM classiques, élimine le risque d\'usure des joints lors des cycles d\'ouverture répétés et assure une silenciosité d\'exploitation supérieure. Des panneaux allant jusqu\'à 500 kg avec mécanisme levant permettent la création de surfaces vitrées panoramiques sans précédent, typiques des villas premium, des immeubles de bureaux de design et des projets hôteliers. S 700 SUPREME est disponible avec un vitrage thermoisolant jusqu\'à 50 mm d\'épaisseur, y compris le triple vitrage SGG Planitherm 4S Evolution avec Warm Edge, dans toutes les couleurs RAL et finitions anodisées. Neofort BIZ assure la conception, la fabrication et l\'installation de systèmes S 700 SUPREME avec calcul structurel et garantie complète de production.',
      es:'El sistema corredera elevable Alumil S 700 SUPREME se distingue de todos los sistemas deslizantes de la competencia por el uso de material aislante Kooltherm en lugar de poliamida estándar — un material de alto rendimiento con conductividad térmica aproximadamente 3 veces menor que la poliamida, que permite alcanzar Uf = 1,1 W/m²K en un sistema deslizante con hojas de dimensiones excepcionales. El sellado perimetral mediante cepillos tri-fin, a diferencia de las juntas EPDM clásicas, elimina el riesgo de desgaste de las juntas durante los ciclos de apertura repetidos y garantiza una silenciosidad superior en operación. Hojas de hasta 500 kg con mecanismo elevable permiten la creación de superficies acristaladas panorámicas sin precedentes, típicas de villas premium, edificios de oficinas de diseño y proyectos hoteleros. S 700 SUPREME está disponible con vidrio termoisolante de hasta 50 mm de espesor, incluido el triple vidrio SGG Planitherm 4S Evolution con Warm Edge, en todos los colores RAL y acabados anodizados. Neofort BIZ garantiza el diseño, la fabricación y la instalación de sistemas S 700 SUPREME con cálculo estructural y garantía completa de producción.',
      it:'Il sistema scorrevole alzante Alumil S 700 SUPREME si distingue da tutti i sistemi scorrevoli concorrenti per l\'utilizzo del materiale isolante Kooltherm al posto della poliammide standard — un materiale ad alte prestazioni con conducibilità termica circa 3 volte inferiore alla poliammide, che consente di raggiungere Uf = 1,1 W/m²K su un sistema scorrevole con ante di dimensioni eccezionali. La tenuta perimetrale attraverso spazzole tri-fin, a differenza delle guarnizioni EPDM classiche, elimina il rischio di usura delle guarnizioni durante i cicli di apertura ripetuti e garantisce una silenziosità operativa superiore. Ante fino a 500 kg con meccanismo alzante consentono la creazione di superfici vetrate panoramiche senza precedenti, tipiche di ville premium, edifici per uffici di design e progetti alberghieri. S 700 SUPREME è disponibile con vetro termoisolante fino a 50 mm di spessore, incluso il triplo vetro SGG Planitherm 4S Evolution con Warm Edge, in tutti i colori RAL e finiture anodizzate. Neofort BIZ garantisce progettazione, produzione e installazione di sistemi S 700 SUPREME con calcolo strutturale e garanzia completa di produzione.',
    },
  },

  'alumil-s350-smartia': {
    img: '/products/alumil-s350-smartia.avif',
    color: '#2d5a8e',
    serie: { ro:'Smartia S 350', en:'Smartia S 350', de:'Smartia S 350', fr:'Smartia S 350', es:'Smartia S 350', it:'Smartia S 350' },
    category: { ro:'Tâmplărie Aluminiu Alumil', en:'Alumil Aluminium Joinery', de:'Alumil Aluminiumfenster', fr:'Menuiserie Aluminium Alumil', es:'Carpintería Aluminio Alumil', it:'Infissi Alluminio Alumil' },
    name: {
      ro:'Sistem Liftant Glisant Alumil S 350 SMARTIA – Ușa Glisantă cu Barieră Termică Accesibilă',
      en:'Alumil S 350 SMARTIA Lift & Slide – Sliding Door with Accessible Thermal Barrier',
      de:'Alumil S 350 SMARTIA Hebeschiebe – Schiebetür mit zugänglicher Wärmedämmbrücke',
      fr:'Coulissant Levant Alumil S 350 SMARTIA – Porte Coulissante à Rupture Thermique Accessible',
      es:'Corredera Elevable Alumil S 350 SMARTIA – Puerta Corredera con Barrera Térmica Accesible',
      it:'Scorrevole Alzante Alumil S 350 SMARTIA – Porta Scorrevole con Taglio Termico Accessibile',
    },
    tagline: {
      ro:'Liftant glisant Smartia cu barieră termică 28 mm și perii tri-fin — soluție accesibilă pentru terase rezidențiale, Uf de la 2,9 W/m²K.',
      en:'Smartia lift and slide with 28 mm thermal barrier and tri-fin brushes — accessible solution for residential terraces, Uf from 2.9 W/m²K.',
      de:'Smartia Hebeschiebe mit 28 mm Wärmedämmbrücke und Tri-Fin-Bürsten — günstige Lösung für Wohnterrassen, Uf ab 2,9 W/m²K.',
      fr:'Coulissant levant Smartia avec rupture thermique 28 mm et brosses tri-fin — solution accessible pour terrasses résidentielles, Uf dès 2,9 W/m²K.',
      es:'Corredera elevable Smartia con barrera térmica 28 mm y cepillos tri-fin — solución accesible para terrazas residenciales, Uf desde 2,9 W/m²K.',
      it:'Scorrevole alzante Smartia con taglio termico 28 mm e spazzole tri-fin — soluzione accessibile per terrazze residenziali, Uf da 2,9 W/m²K.',
    },
    specs: {
      ro:[['Tip sistem','Liftant Glisant'],['Barieră termică','28 mm'],['Etanșare','Perii tri-fin perimetrale'],['Adâncime toc','35 mm'],['Geam compatibil','până la 28 mm'],['Transfer termic Uf','de la 2,9 W/m²K'],['Izolare fonică','până la 38 dB'],['Antiefracție','RC2'],['Șine','Aluminiu'],['Deschidere','Orizontală'],['Clasă','Smartia — economic'],],
      en:[['System type','Lift & Slide'],['Thermal barrier','28 mm'],['Sealing','Perimeter tri-fin brushes'],['Frame depth','35 mm'],['Compatible glass','up to 28 mm'],['Thermal transfer Uf','from 2.9 W/m²K'],['Sound insulation','up to 38 dB'],['Anti-burglary','RC2'],['Rails','Aluminium'],['Opening','Horizontal'],['Class','Smartia — economic'],],
      de:[['Systemtyp','Hebeschiebe'],['Wärmedämmbrücke','28 mm'],['Dichtung','Perimetrische Tri-Fin-Bürsten'],['Rahmenbreite','35 mm'],['Verglasung','bis 28 mm'],['Wärmedurchgang Uf','ab 2,9 W/m²K'],['Schalldämmung','bis 38 dB'],['Einbruchschutz','RC2'],['Schienen','Aluminium'],['Öffnung','Horizontal'],['Klasse','Smartia — wirtschaftlich'],],
      fr:[['Type','Coulissant levant'],['Rupture thermique','28 mm'],['Étanchéité','Brosses tri-fin'],['Prof. cadre','35 mm'],['Vitrage','jusqu\'à 28 mm'],['Uf','dès 2,9 W/m²K'],['Phonique','jusqu\'à 38 dB'],['Anti-effraction','RC2'],['Rails','Aluminium'],['Ouverture','Horizontale'],['Classe','Smartia — économique'],],
      es:[['Tipo','Corredera elevable'],['Barrera térmica','28 mm'],['Hermeticidad','Cepillos tri-fin'],['Prof. marco','35 mm'],['Vidrio','hasta 28 mm'],['Uf','desde 2,9 W/m²K'],['Acústico','hasta 38 dB'],['Antirrobo','RC2'],['Raíles','Aluminio'],['Apertura','Horizontal'],['Clase','Smartia — económico'],],
      it:[['Tipo','Scorrevole alzante'],['Taglio termico','28 mm'],['Tenuta','Spazzole tri-fin'],['Profondità','35 mm'],['Vetro','fino a 28 mm'],['Uf','da 2,9 W/m²K'],['Acustico','fino a 38 dB'],['Antieffrazione','RC2'],['Guide','Alluminio'],['Apertura','Orizzontale'],['Classe','Smartia — economico'],],
    },
    perf: {
      ro:[['Coeficient Uf','de la 2,9 W/m²K'],['Uw sistem','de la 2,5 W/m²K'],['Etanșeitate apă','E600'],['Permeabilitate aer','Clasa 3'],['Rezistență vânt','C3'],['Izolare fonică','până la 38 dB'],],
      en:[['Frame Uf','from 2.9 W/m²K'],['System Uw','from 2.5 W/m²K'],['Water tightness','E600'],['Air permeability','Class 3'],['Wind resistance','C3'],['Sound insulation','up to 38 dB'],],
      de:[['Uf','ab 2,9 W/m²K'],['Uw','ab 2,5 W/m²K'],['Schlagregen','E600'],['Luftdurchlass','Klasse 3'],['Windlast','C3'],['Schalldämmung','bis 38 dB'],],
      fr:[['Uf','dès 2,9 W/m²K'],['Uw','dès 2,5 W/m²K'],['Eau','E600'],['Air','Cl. 3'],['Vent','C3'],['Son','jusqu\'à 38 dB'],],
      es:[['Uf','desde 2,9 W/m²K'],['Uw','desde 2,5 W/m²K'],['Agua','E600'],['Aire','Cl. 3'],['Viento','C3'],['Sonido','hasta 38 dB'],],
      it:[['Uf','da 2,9 W/m²K'],['Uw','da 2,5 W/m²K'],['Acqua','E600'],['Aria','Cl. 3'],['Vento','C3'],['Suono','fino a 38 dB'],],
    },
    advantages: {
      ro:['Cel mai accesibil sistem liftant Alumil cu barieră termică — superior față de glisantele fără barieră','Perii tri-fin perimetrale — etanșeitate silențioasă, durabilă, fără risc de uzură prematură','Mecanism liftant — foaie ridicată la deschidere, alunecare ușoară și silențioasă','Ideal pentru terase și living-uri rezidențiale standard — foi dimensiune medie, cost optim','Finisaj RAL complet — toate culorile standard și anodizate, integrare estetică perfectă','Compatibil cu geam dublu termoizolant — optim pentru proiecte cu buget limitat'],
      en:['Most accessible Alumil lift system with thermal barrier — superior to sliding systems without barrier','Perimeter tri-fin brushes — silent, durable sealing, no risk of premature wear','Lift mechanism — panel raised on opening, easy and silent gliding','Ideal for standard residential terraces and living rooms — medium panel size, optimal cost','Full RAL finish — all standard and anodised colours, perfect aesthetic integration','Compatible with double thermal glazing — optimal for budget-constrained projects'],
      de:['Günstigstes Alumil Hebeschiebe-System mit Wärmedämmbrücke — überlegen gegenüber Schiebesystemen ohne Brücke','Perimetrische Tri-Fin-Bürsten — lautlose, dauerhafte Abdichtung, kein Risiko vorzeitigen Verschleißes','Hebemechanismus — Flügel beim Öffnen angehoben, leichtes und geräuschloses Gleiten','Ideal für Standard-Wohnterrassen und Wohnzimmer — mittlere Flügelgröße, optimale Kosten','Vollständige RAL-Oberfläche — alle Standard- und Eloxal-Farben, perfekte ästhetische Integration','Kompatibel mit Zweifach-Wärmeschutzverglasung — optimal für budgetbeschränkte Projekte'],
      fr:['Système levant Alumil le plus accessible avec rupture thermique — supérieur aux coulissants sans rupture','Brosses tri-fin périmètriques — étanchéité silencieuse, durable, sans risque d\'usure prématurée','Mécanisme levant — panneau soulevé à l\'ouverture, glissement facile et silencieux','Idéal pour terrasses et salons résidentiels standard — taille de panneau moyenne, coût optimal','Finition RAL complète — toutes couleurs standard et anodisées, intégration esthétique parfaite','Compatible avec double vitrage thermique — optimal pour les projets à budget limité'],
      es:['Sistema elevable Alumil más accesible con barrera térmica — superior a los deslizantes sin barrera','Cepillos tri-fin perimetrales — sellado silencioso, duradero, sin riesgo de desgaste prematuro','Mecanismo elevable — hoja elevada al abrir, deslizamiento fácil y silencioso','Ideal para terrazas y salones residenciales estándar — tamaño de hoja media, coste óptimo','Acabado RAL completo — todos los colores estándar y anodizados, integración estética perfecta','Compatible con doble vidrio térmico — óptimo para proyectos con presupuesto limitado'],
      it:['Sistema alzante Alumil più accessibile con taglio termico — superiore ai scorrevoli senza taglio','Spazzole tri-fin perimetrali — tenuta silenziosa, durevole, senza rischio di usura prematura','Meccanismo alzante — anta sollevata all\'apertura, scorrimento facile e silenzioso','Ideale per terrazze e soggiorni residenziali standard — dimensione anta media, costo ottimale','Finitura RAL completa — tutti i colori standard e anodizzati, perfetta integrazione estetica','Compatibile con doppio vetro termoisolante — ottimale per progetti con budget limitato'],
    },
    seo_text: {
      ro:'Sistemul liftant glisant Alumil S 350 SMARTIA este soluția optimă pentru proiectele rezidențiale care doresc tehnologia liftant-glisant cu barieră termică la cel mai competitiv cost din gama Alumil. Bariera termică de 28 mm, deși mai redusă față de sistemele Supreme, asigură Uf de la 2,9 W/m²K — semnificativ superior față de sistemele glisante complet metalice fără barieră termică, care ating Uf de 6–8 W/m²K și generează condens masiv pe prag iarna. Etanșarea perimetrală prin perii tri-fin garantează o silențiozitate superioară față de garniturile EPDM clasice și o durabilitate ridicată la cicluri repetate de deschidere. Geamul compatibil până la 28 mm permite utilizarea de geam dublu termoizolant standard, cu un cost total al sistemului optimizat pentru proiectele rezidențiale cu buget mediu. Neofort BIZ furnizează și montează S 350 SMARTIA în toate culorile RAL cu consultanță gratuită privind dimensionarea și compatibilitatea cu structura existentă.',
      en:'The Alumil S 350 SMARTIA lift and slide system is the optimal solution for residential projects that want lift-and-slide technology with thermal barrier at the most competitive cost in the Alumil range. The 28 mm thermal barrier, although smaller than Supreme systems, ensures Uf from 2.9 W/m²K — significantly superior to fully metallic sliding systems without thermal barrier, which achieve Uf of 6–8 W/m²K and generate massive condensation on the threshold in winter. Perimeter sealing through tri-fin brushes guarantees superior silence compared to classic EPDM gaskets and high durability in repeated opening cycles. Compatible glass up to 28 mm allows the use of standard double thermal insulating glass, with an optimised total system cost for residential projects with a medium budget. Neofort BIZ supplies and installs S 350 SMARTIA in all RAL colours with free consultancy on sizing and compatibility with the existing structure.',
      de:'Das Alumil S 350 SMARTIA Hebeschiebe-System ist die optimale Lösung für Wohnprojekte, die Hebeschiebe-Technologie mit Wärmedämmbrücke zum wettbewerbsfähigsten Preis der Alumil-Reihe wünschen. Die 28 mm Wärmedämmbrücke, obwohl kleiner als Supreme-Systeme, gewährleistet Uf ab 2,9 W/m²K — deutlich überlegen gegenüber vollständig metallischen Schiebesystemen ohne Wärmedämmbrücke, die Uf von 6–8 W/m²K erreichen und im Winter massives Kondensat an der Schwelle erzeugen. Die perimetrische Abdichtung durch Tri-Fin-Bürsten garantiert überlegene Stille gegenüber klassischen EPDM-Dichtungen und hohe Haltbarkeit bei wiederholten Öffnungszyklen. Kompatibles Glas bis 28 mm ermöglicht die Verwendung von Standard-Zweifach-Wärmeschutzverglasung, mit optimierten Gesamtsystemkosten für Wohnprojekte mit mittlerem Budget. Neofort BIZ liefert und montiert S 350 SMARTIA in allen RAL-Farben mit kostenloser Beratung zur Dimensionierung und Kompatibilität mit der vorhandenen Struktur.',
      fr:'Le système coulissant levant Alumil S 350 SMARTIA est la solution optimale pour les projets résidentiels qui souhaitent la technologie coulissante levante avec rupture thermique au coût le plus compétitif de la gamme Alumil. La rupture thermique de 28 mm, bien que plus petite que les systèmes Supreme, assure un Uf dès 2,9 W/m²K — nettement supérieur aux systèmes coulissants entièrement métalliques sans rupture thermique, qui atteignent des Uf de 6–8 W/m²K et génèrent une condensation massive sur le seuil en hiver. L\'étanchéité périmétrique par brosses tri-fin garantit une silenciosité supérieure aux joints EPDM classiques et une haute durabilité lors de cycles d\'ouverture répétés. Le vitrage compatible jusqu\'à 28 mm permet l\'utilisation de double vitrage thermique standard, avec un coût total du système optimisé pour les projets résidentiels à budget moyen. Neofort BIZ fournit et installe S 350 SMARTIA dans toutes les couleurs RAL avec conseil gratuit sur le dimensionnement et la compatibilité avec la structure existante.',
      es:'El sistema corredera elevable Alumil S 350 SMARTIA es la solución óptima para proyectos residenciales que desean tecnología corredera elevable con barrera térmica al coste más competitivo de la gama Alumil. La barrera térmica de 28 mm, aunque menor que los sistemas Supreme, asegura Uf desde 2,9 W/m²K — significativamente superior a los sistemas deslizantes totalmente metálicos sin barrera térmica, que alcanzan Uf de 6–8 W/m²K y generan condensación masiva en el umbral en invierno. El sellado perimetral mediante cepillos tri-fin garantiza una silenciosidad superior a las juntas EPDM clásicas y alta durabilidad en ciclos de apertura repetidos. El vidrio compatible hasta 28 mm permite el uso de doble vidrio térmico estándar, con un coste total del sistema optimizado para proyectos residenciales con presupuesto medio. Neofort BIZ suministra e instala S 350 SMARTIA en todos los colores RAL con asesoría gratuita sobre dimensionamiento y compatibilidad con la estructura existente.',
      it:'Il sistema scorrevole alzante Alumil S 350 SMARTIA è la soluzione ottimale per i progetti residenziali che desiderano la tecnologia scorrevole alzante con taglio termico al costo più competitivo della gamma Alumil. Il taglio termico da 28 mm, sebbene più piccolo dei sistemi Supreme, assicura Uf da 2,9 W/m²K — significativamente superiore ai sistemi scorrevoli completamente metallici senza taglio termico, che raggiungono Uf di 6–8 W/m²K e generano condensa massiva sulla soglia in inverno. La tenuta perimetrale attraverso spazzole tri-fin garantisce una silenziosità superiore rispetto alle guarnizioni EPDM classiche e un\'alta durata nei cicli di apertura ripetuti. Il vetro compatibile fino a 28 mm consente l\'utilizzo di doppio vetro termoisolante standard, con un costo totale del sistema ottimizzato per i progetti residenziali con budget medio. Neofort BIZ fornisce e installa S 350 SMARTIA in tutti i colori RAL con consulenza gratuita sul dimensionamento e la compatibilità con la struttura esistente.',
    },
  },

  'alumil-sf85-supreme': {
    img: '/products/alumil-sf85-supreme.avif',
    color: '#2d5a8e',
    serie: { ro:'Supreme SF 85', en:'Supreme SF 85', de:'Supreme SF 85', fr:'Supreme SF 85', es:'Supreme SF 85', it:'Supreme SF 85' },
    category: { ro:'Tâmplărie Aluminiu Alumil', en:'Alumil Aluminium Joinery', de:'Alumil Aluminiumfenster', fr:'Menuiserie Aluminium Alumil', es:'Carpintería Aluminio Alumil', it:'Infissi Alluminio Alumil' },
    name: {
      ro:'Sistem Armonic Alumil SF 85 SUPREME – Uși Pliante Premium cu Barieră Kooltherm',
      en:'Alumil SF 85 SUPREME Folding System – Premium Folding Doors with Kooltherm Barrier',
      de:'Alumil SF 85 SUPREME Faltsystem – Premium Falttüren mit Kooltherm-Barriere',
      fr:'Système Pliant Alumil SF 85 SUPREME – Portes Pliantes Premium avec Barrière Kooltherm',
      es:'Sistema Plegable Alumil SF 85 SUPREME – Puertas Plegables Premium con Barrera Kooltherm',
      it:'Sistema Pieghevole Alumil SF 85 SUPREME – Porte Pieghevoli Premium con Barriera Kooltherm',
    },
    tagline: {
      ro:'Armonic premium 85 mm cu Kooltherm și 2 garnituri — deschidere 100%, 2–8 foi, certificat PAS24, Uf de la 1,0 W/m²K.',
      en:'Premium 85 mm folding with Kooltherm and 2 gaskets — 100% opening, 2–8 panels, PAS24 certified, Uf from 1.0 W/m²K.',
      de:'Premium 85 mm Faltsystem mit Kooltherm und 2 Dichtungen — 100% Öffnung, 2–8 Flügel, PAS24 zertifiziert, Uf ab 1,0 W/m²K.',
      fr:'Pliant premium 85 mm avec Kooltherm et 2 joints — ouverture 100%, 2–8 panneaux, certifié PAS24, Uf dès 1,0 W/m²K.',
      es:'Plegable premium 85 mm con Kooltherm y 2 juntas — apertura 100%, 2–8 hojas, certificado PAS24, Uf desde 1,0 W/m²K.',
      it:'Pieghevole premium 85 mm con Kooltherm e 2 guarnizioni — apertura 100%, 2–8 ante, certificato PAS24, Uf da 1,0 W/m²K.',
    },
    specs: {
      ro:[['Tip sistem','Armonic (pliant)'],['Adâncime constructivă','85 mm'],['Barieră termică','Kooltherm 40 mm'],['Garnituri','2 garnituri EPDM'],['Foi per sistem','2 – 8 foi'],['Deschidere','Stânga / dreapta / colț'],['Geam compatibil','până la 58 mm'],['Transfer termic Uf','de la 1,0 W/m²K'],['Izolare fonică','până la 38 dB'],['Antiefracție','PAS24'],['Lățime max. totală','7000 mm'],['Greutate max. foaie','120 kg'],],
      en:[['System type','Folding (harmonic)'],['Construction depth','85 mm'],['Thermal barrier','Kooltherm 40 mm'],['Gaskets','2 EPDM gaskets'],['Panels per system','2 – 8 panels'],['Opening','Left / right / corner'],['Compatible glass','up to 58 mm'],['Thermal transfer Uf','from 1.0 W/m²K'],['Sound insulation','up to 38 dB'],['Anti-burglary','PAS24'],['Max. total width','7000 mm'],['Max. panel weight','120 kg'],],
      de:[['Systemtyp','Faltsystem'],['Bautiefe','85 mm'],['Wärmedämmbrücke','Kooltherm 40 mm'],['Dichtungen','2 EPDM-Dichtungen'],['Flügel/System','2 – 8 Flügel'],['Öffnung','Links / rechts / Ecke'],['Verglasung','bis 58 mm'],['Wärmedurchgang Uf','ab 1,0 W/m²K'],['Schalldämmung','bis 38 dB'],['Einbruchschutz','PAS24'],['Max. Gesamtbreite','7000 mm'],['Max. Flügelgewicht','120 kg'],],
      fr:[['Type','Pliant (harmonique)'],['Profondeur','85 mm'],['Rupture thermique','Kooltherm 40 mm'],['Joints','2 joints EPDM'],['Panneaux','2 – 8'],['Ouverture','G / D / angle'],['Vitrage','jusqu\'à 58 mm'],['Uf','dès 1,0 W/m²K'],['Phonique','jusqu\'à 38 dB'],['Anti-effraction','PAS24'],['Larg. max.','7000 mm'],['Poids max.','120 kg'],],
      es:[['Tipo','Plegable (armónico)'],['Profundidad','85 mm'],['Barrera térmica','Kooltherm 40 mm'],['Juntas','2 EPDM'],['Hojas','2 – 8'],['Apertura','Izq / Der / esquina'],['Vidrio','hasta 58 mm'],['Uf','desde 1,0 W/m²K'],['Acústico','hasta 38 dB'],['Antirrobo','PAS24'],['Ancho máx.','7000 mm'],['Peso máx.','120 kg'],],
      it:[['Tipo','Pieghevole'],['Profondità','85 mm'],['Taglio termico','Kooltherm 40 mm'],['Guarnizioni','2 EPDM'],['Ante','2 – 8'],['Apertura','Sin / Des / angolo'],['Vetro','fino a 58 mm'],['Uf','da 1,0 W/m²K'],['Acustico','fino a 38 dB'],['Antieffrazione','PAS24'],['Largh. max.','7000 mm'],['Peso max.','120 kg'],],
    },
    perf: {
      ro:[['Coeficient Uf','de la 1,0 W/m²K'],['Uw sistem','de la 1,0 W/m²K'],['Etanșeitate apă','E600'],['Rezistență vânt','C3'],['Izolare fonică','până la 38 dB'],['Antiefracție','PAS24'],],
      en:[['Frame Uf','from 1.0 W/m²K'],['System Uw','from 1.0 W/m²K'],['Water tightness','E600'],['Wind resistance','C3'],['Sound insulation','up to 38 dB'],['Anti-burglary','PAS24'],],
      de:[['Uf','ab 1,0 W/m²K'],['Uw','ab 1,0 W/m²K'],['Schlagregen','E600'],['Windlast','C3'],['Schalldämmung','bis 38 dB'],['Einbruchschutz','PAS24'],],
      fr:[['Uf','dès 1,0 W/m²K'],['Uw','dès 1,0 W/m²K'],['Eau','E600'],['Vent','C3'],['Son','jusqu\'à 38 dB'],['Anti-effraction','PAS24'],],
      es:[['Uf','desde 1,0 W/m²K'],['Uw','desde 1,0 W/m²K'],['Agua','E600'],['Viento','C3'],['Sonido','hasta 38 dB'],['Antirrobo','PAS24'],],
      it:[['Uf','da 1,0 W/m²K'],['Uw','da 1,0 W/m²K'],['Acqua','E600'],['Vento','C3'],['Suono','fino a 38 dB'],['Antieffrazione','PAS24'],],
    },
    advantages: {
      ro:['Deschidere 100% — 2–8 foi pliante, lățime totală până la 7000 mm, conexiune completă interior-exterior','Kooltherm 40 mm — barieră termică superioară poliamidei, Uf de la 1,0 W/m²K pentru sisteme pliante','Certificat PAS24 — standard antiefracție britanic, cel mai exigent pentru sisteme pliante','Geam până la 58 mm — suportă geam triplu fonoizolant pentru comfort superior','Disponibil cu pivot de colț 90° — sisteme de colț pentru deschidere completă a două fațade perpendiculare','Ideal pentru HoReCa, birouri, terase premium, showroom-uri și proiecte arhitecturale'],
      en:['100% opening — 2–8 folding panels, total width up to 7000 mm, complete interior-exterior connection','Kooltherm 40 mm — thermal barrier superior to polyamide, Uf from 1.0 W/m²K for folding systems','PAS24 certified — British anti-burglary standard, most demanding for folding systems','Glazing up to 58 mm — supports triple soundproof glass for superior comfort','Available with 90° corner pivot — corner systems for full opening of two perpendicular facades','Ideal for HoReCa, offices, premium terraces, showrooms and architectural projects'],
      de:['100% Öffnung — 2–8 Faltflügel, Gesamtbreite bis 7000 mm, vollständige Innen-Außen-Verbindung','Kooltherm 40 mm — Wärmedämmbrücke überlegen gegenüber Polyamid, Uf ab 1,0 W/m²K für Faltsysteme','PAS24 zertifiziert — britischer Einbruchschutzstandard, anspruchsvollster für Faltsysteme','Verglasung bis 58 mm — trägt Dreifach-Schallschutzglas für überlegenen Komfort','Erhältlich mit 90° Eckdrehpunkt — Ecksysteme für vollständige Öffnung zweier senkrechter Fassaden','Ideal für HoReCa, Büros, Premium-Terrassen, Showrooms und Architekturprojekte'],
      fr:['Ouverture 100% — 2–8 panneaux pliants, largeur totale jusqu\'à 7000 mm, connexion intérieur-extérieur complète','Kooltherm 40 mm — rupture thermique supérieure au polyamide, Uf dès 1,0 W/m²K pour systèmes pliants','Certifié PAS24 — norme anti-effraction britannique, la plus exigeante pour systèmes pliants','Vitrage jusqu\'à 58 mm — supporte triple vitrage phonique pour confort supérieur','Disponible avec pivot d\'angle 90° — systèmes d\'angle pour ouverture totale de deux façades perpendiculaires','Idéal pour HoReCa, bureaux, terrasses premium, showrooms et projets architecturaux'],
      es:['Apertura 100% — 2–8 hojas plegables, ancho total hasta 7000 mm, conexión completa interior-exterior','Kooltherm 40 mm — barrera térmica superior a la poliamida, Uf desde 1,0 W/m²K para sistemas plegables','Certificado PAS24 — norma antirrobo británica, la más exigente para sistemas plegables','Vidrio hasta 58 mm — soporta triple vidrio fonoaislante para confort superior','Disponible con pivote de esquina 90° — sistemas de esquina para apertura total de dos fachadas perpendiculares','Ideal para HoReCa, oficinas, terrazas premium, showrooms y proyectos arquitectónicos'],
      it:['Apertura 100% — 2–8 ante pieghevoli, larghezza totale fino a 7000 mm, connessione completa interno-esterno','Kooltherm 40 mm — taglio termico superiore alla poliammide, Uf da 1,0 W/m²K per sistemi pieghevoli','Certificato PAS24 — standard antieffrazione britannico, il più esigente per sistemi pieghevoli','Vetro fino a 58 mm — supporta triplo vetro fonoisolante per comfort superiore','Disponibile con perno angolare 90° — sistemi angolari per apertura completa di due facciate perpendicolari','Ideale per HoReCa, uffici, terrazze premium, showroom e progetti architettonici'],
    },
    seo_text: {
      ro:'Sistemul armonic Alumil SF 85 SUPREME este referința în segmentul sistemelor pliante din aluminiu, combinând adâncimea constructivă de 85 mm cu bariera termică Kooltherm de 40 mm — un material de izolare cu conductivitate λ ≈ 0,022 W/mK, semnificativ superior poliamidei standard (λ ≈ 0,25 W/mK). Această combinație asigură Uf de la 1,0 W/m²K pentru un sistem pliant, performanță la nivelul multor sisteme de ferestre fixe. Certificarea antiefracție PAS24 — standardul britanic cel mai exigent pentru sisteme oscilante și pliante — garantează protecția chiar și în varianta cu 8 foi, unde fiecare îmbinare reprezintă un potențial punct vulnerabil. Sistemul se adaptează la deschideri de la 1 m la 7 m lățime, cu 2 până la 8 foi configurabile la stânga, dreapta sau cu pivot de colț la 90°, permițând deschiderea simultană a două fațade perpendiculare — soluția arhitecturală definitorie pentru baruri, restaurante, hoteluri, showroom-uri auto și vile de lux. Neofort BIZ proiectează și montează SF 85 SUPREME cu calcul structural complet și garanție de producție.',
      en:'The Alumil SF 85 SUPREME folding system is the reference in the aluminium folding systems segment, combining the 85 mm construction depth with the 40 mm Kooltherm thermal barrier — an insulating material with conductivity λ ≈ 0.022 W/mK, significantly superior to standard polyamide (λ ≈ 0.25 W/mK). This combination ensures Uf from 1.0 W/m²K for a folding system, performance at the level of many fixed window systems. PAS24 anti-burglary certification — the most demanding British standard for oscillating and folding systems — guarantees protection even in the 8-panel variant, where each joint represents a potential vulnerable point. The system adapts to openings from 1 m to 7 m width, with 2 to 8 panels configurable to the left, right or with 90° corner pivot, allowing simultaneous opening of two perpendicular facades — the defining architectural solution for bars, restaurants, hotels, car showrooms and luxury villas. Neofort BIZ designs and installs SF 85 SUPREME with complete structural calculation and production warranty.',
      de:'Das Alumil SF 85 SUPREME Faltsystem ist die Referenz im Segment der Aluminium-Faltsysteme und kombiniert die 85 mm Bautiefe mit der 40 mm Kooltherm-Wärmedämmbrücke — einem Dämmstoff mit Wärmeleitfähigkeit λ ≈ 0,022 W/mK, deutlich überlegen gegenüber Standard-Polyamid (λ ≈ 0,25 W/mK). Diese Kombination gewährleistet Uf ab 1,0 W/m²K für ein Faltsystem, Leistung auf dem Niveau vieler Festfenster-Systeme. PAS24-Einbruchschutz-Zertifizierung — der anspruchsvollste britische Standard für schwingende und faltende Systeme — garantiert Schutz auch in der 8-Flügel-Variante, wo jede Verbindung einen potenziell verwundbaren Punkt darstellt. Das System passt sich Öffnungen von 1 m bis 7 m Breite an, mit 2 bis 8 Flügeln konfigurierbar links, rechts oder mit 90° Eckdrehpunkt, was die gleichzeitige Öffnung zweier senkrechter Fassaden ermöglicht — die definierende Architekturlösung für Bars, Restaurants, Hotels, Autoausstellungsräume und Luxusvillen. Neofort BIZ plant und montiert SF 85 SUPREME mit vollständiger Strukturberechnung und Produktionsgarantie.',
      fr:'Le système pliant Alumil SF 85 SUPREME est la référence dans le segment des systèmes pliants en aluminium, combinant la profondeur de construction de 85 mm avec la rupture thermique Kooltherm de 40 mm — un matériau isolant de conductivité λ ≈ 0,022 W/mK, nettement supérieur au polyamide standard (λ ≈ 0,25 W/mK). Cette combinaison assure un Uf dès 1,0 W/m²K pour un système pliant, performance au niveau de nombreux systèmes de fenêtres fixes. La certification anti-effraction PAS24 — la norme britannique la plus exigeante pour les systèmes oscillants et pliants — garantit la protection même dans la variante à 8 panneaux, où chaque jonction représente un point potentiellement vulnérable. Le système s\'adapte à des ouvertures de 1 m à 7 m de largeur, avec 2 à 8 panneaux configurables à gauche, à droite ou avec pivot d\'angle à 90°, permettant l\'ouverture simultanée de deux façades perpendiculaires — la solution architecturale de référence pour les bars, restaurants, hôtels, showrooms automobiles et villas de luxe. Neofort BIZ conçoit et installe SF 85 SUPREME avec calcul structurel complet et garantie de production.',
      es:'El sistema plegable Alumil SF 85 SUPREME es la referencia en el segmento de los sistemas plegables de aluminio, combinando la profundidad constructiva de 85 mm con la barrera térmica Kooltherm de 40 mm — un material aislante con conductividad λ ≈ 0,022 W/mK, significativamente superior a la poliamida estándar (λ ≈ 0,25 W/mK). Esta combinación asegura Uf desde 1,0 W/m²K para un sistema plegable, rendimiento al nivel de muchos sistemas de ventanas fijas. La certificación antirrobo PAS24 — el estándar británico más exigente para sistemas oscilantes y plegables — garantiza la protección incluso en la variante de 8 hojas, donde cada unión representa un punto potencialmente vulnerable. El sistema se adapta a aperturas de 1 m a 7 m de ancho, con 2 a 8 hojas configurables a izquierda, derecha o con pivote de esquina a 90°, permitiendo la apertura simultánea de dos fachadas perpendiculares — la solución arquitectónica definitoria para bares, restaurantes, hoteles, showrooms de automóviles y villas de lujo. Neofort BIZ diseña e instala SF 85 SUPREME con cálculo estructural completo y garantía de producción.',
      it:'Il sistema pieghevole Alumil SF 85 SUPREME è il riferimento nel segmento dei sistemi pieghevoli in alluminio, combinando la profondità di costruzione di 85 mm con la barriera termica Kooltherm da 40 mm — un materiale isolante con conducibilità λ ≈ 0,022 W/mK, significativamente superiore alla poliammide standard (λ ≈ 0,25 W/mK). Questa combinazione assicura Uf da 1,0 W/m²K per un sistema pieghevole, prestazioni al livello di molti sistemi di finestre fisse. La certificazione antieffrazione PAS24 — lo standard britannico più esigente per sistemi oscillanti e pieghevoli — garantisce la protezione anche nella variante a 8 ante, dove ogni giunzione rappresenta un potenziale punto vulnerabile. Il sistema si adatta ad aperture da 1 m a 7 m di larghezza, con 2 fino a 8 ante configurabili a sinistra, destra o con perno angolare a 90°, consentendo l\'apertura simultanea di due facciate perpendicolari — la soluzione architettonica definitoria per bar, ristoranti, hotel, showroom auto e ville di lusso. Neofort BIZ progetta e installa SF 85 SUPREME con calcolo strutturale completo e garanzia di produzione.',
    },
  },

  'alumil-m19800-smartia': {
    img: '/products/alumil-m19800-smartia.avif',
    color: '#2d5a8e',
    serie: { ro:'Smartia M 19800', en:'Smartia M 19800', de:'Smartia M 19800', fr:'Smartia M 19800', es:'Smartia M 19800', it:'Smartia M 19800' },
    category: { ro:'Tâmplărie Aluminiu Alumil', en:'Alumil Aluminium Joinery', de:'Alumil Aluminiumfenster', fr:'Menuiserie Aluminium Alumil', es:'Carpintería Aluminio Alumil', it:'Infissi Alluminio Alumil' },
    name: {
      ro:'Sistem Armonic Alumil M 19800 SMARTIA – Uși Pliante Accesibile pentru Terase',
      en:'Alumil M 19800 SMARTIA Folding System – Accessible Folding Doors for Terraces',
      de:'Alumil M 19800 SMARTIA Faltsystem – Zugängliche Falttüren für Terrassen',
      fr:'Système Pliant Alumil M 19800 SMARTIA – Portes Pliantes Accessibles pour Terrasses',
      es:'Sistema Plegable Alumil M 19800 SMARTIA – Puertas Plegables Accesibles para Terrazas',
      it:'Sistema Pieghevole Alumil M 19800 SMARTIA – Porte Pieghevoli Accessibili per Terrazze',
    },
    tagline: {
      ro:'Cel mai accesibil sistem armonic Alumil cu barieră termică 18 mm — 2–6 foi, lățime 5000 mm, certificat PAS24, Uf de la 1,9 W/m²K.',
      en:'Most accessible Alumil folding system with 18 mm thermal barrier — 2–6 panels, 5000 mm width, PAS24 certified, Uf from 1.9 W/m²K.',
      de:'Günstigstes Alumil Faltsystem mit 18 mm Wärmedämmbrücke — 2–6 Flügel, 5000 mm Breite, PAS24 zertifiziert, Uf ab 1,9 W/m²K.',
      fr:'Système pliant Alumil le plus accessible avec rupture thermique 18 mm — 2–6 panneaux, largeur 5000 mm, certifié PAS24, Uf dès 1,9 W/m²K.',
      es:'Sistema plegable Alumil más accesible con barrera térmica 18 mm — 2–6 hojas, ancho 5000 mm, certificado PAS24, Uf desde 1,9 W/m²K.',
      it:'Sistema pieghevole Alumil più accessibile con taglio termico 18 mm — 2–6 ante, larghezza 5000 mm, certificato PAS24, Uf da 1,9 W/m²K.',
    },
    specs: {
      ro:[['Tip sistem','Armonic (pliant)'],['Barieră termică','18 mm'],['Garnituri','2 garnituri EPDM'],['Adâncime constructivă','50 mm'],['Foi per sistem','2 – 6 foi'],['Geam compatibil','până la 32 mm'],['Transfer termic Uf','de la 1,9 W/m²K'],['Izolare fonică','până la 36 dB'],['Antiefracție','PAS24'],['Lățime max. totală','5000 mm'],['Greutate max. foaie','80 kg'],['Clasă','Smartia — economic'],],
      en:[['System type','Folding'],['Thermal barrier','18 mm'],['Gaskets','2 EPDM gaskets'],['Construction depth','50 mm'],['Panels per system','2 – 6 panels'],['Compatible glass','up to 32 mm'],['Thermal transfer Uf','from 1.9 W/m²K'],['Sound insulation','up to 36 dB'],['Anti-burglary','PAS24'],['Max. total width','5000 mm'],['Max. panel weight','80 kg'],['Class','Smartia — economic'],],
      de:[['Systemtyp','Faltsystem'],['Wärmedämmbrücke','18 mm'],['Dichtungen','2 EPDM-Dichtungen'],['Bautiefe','50 mm'],['Flügel/System','2 – 6 Flügel'],['Verglasung','bis 32 mm'],['Wärmedurchgang Uf','ab 1,9 W/m²K'],['Schalldämmung','bis 36 dB'],['Einbruchschutz','PAS24'],['Max. Gesamtbreite','5000 mm'],['Max. Flügelgewicht','80 kg'],['Klasse','Smartia — wirtschaftlich'],],
      fr:[['Type','Pliant'],['Rupture thermique','18 mm'],['Joints','2 EPDM'],['Profondeur','50 mm'],['Panneaux','2 – 6'],['Vitrage','jusqu\'à 32 mm'],['Uf','dès 1,9 W/m²K'],['Phonique','jusqu\'à 36 dB'],['Anti-effraction','PAS24'],['Larg. max.','5000 mm'],['Poids max.','80 kg'],['Classe','Smartia — économique'],],
      es:[['Tipo','Plegable'],['Barrera térmica','18 mm'],['Juntas','2 EPDM'],['Profundidad','50 mm'],['Hojas','2 – 6'],['Vidrio','hasta 32 mm'],['Uf','desde 1,9 W/m²K'],['Acústico','hasta 36 dB'],['Antirrobo','PAS24'],['Ancho máx.','5000 mm'],['Peso máx.','80 kg'],['Clase','Smartia — económico'],],
      it:[['Tipo','Pieghevole'],['Taglio termico','18 mm'],['Guarnizioni','2 EPDM'],['Profondità','50 mm'],['Ante','2 – 6'],['Vetro','fino a 32 mm'],['Uf','da 1,9 W/m²K'],['Acustico','fino a 36 dB'],['Antieffrazione','PAS24'],['Largh. max.','5000 mm'],['Peso max.','80 kg'],['Classe','Smartia — economico'],],
    },
    perf: {
      ro:[['Coeficient Uf','de la 1,9 W/m²K'],['Uw sistem','de la 1,7 W/m²K'],['Etanșeitate apă','E450'],['Rezistență vânt','C2'],['Izolare fonică','până la 36 dB'],['Antiefracție','PAS24'],],
      en:[['Frame Uf','from 1.9 W/m²K'],['System Uw','from 1.7 W/m²K'],['Water tightness','E450'],['Wind resistance','C2'],['Sound insulation','up to 36 dB'],['Anti-burglary','PAS24'],],
      de:[['Uf','ab 1,9 W/m²K'],['Uw','ab 1,7 W/m²K'],['Schlagregen','E450'],['Windlast','C2'],['Schalldämmung','bis 36 dB'],['Einbruchschutz','PAS24'],],
      fr:[['Uf','dès 1,9 W/m²K'],['Uw','dès 1,7 W/m²K'],['Eau','E450'],['Vent','C2'],['Son','jusqu\'à 36 dB'],['Anti-effraction','PAS24'],],
      es:[['Uf','desde 1,9 W/m²K'],['Uw','desde 1,7 W/m²K'],['Agua','E450'],['Viento','C2'],['Sonido','hasta 36 dB'],['Antirrobo','PAS24'],],
      it:[['Uf','da 1,9 W/m²K'],['Uw','da 1,7 W/m²K'],['Acqua','E450'],['Vento','C2'],['Suono','fino a 36 dB'],['Antieffrazione','PAS24'],],
    },
    advantages: {
      ro:['Cel mai accesibil armonic cu barieră termică din gama Alumil — Uf 1,9 W/m²K superior față de armonicele fără barieră','Certificat PAS24 — standard antiefracție de înaltă exigență chiar și pentru varianta economic','Deschidere 100% — 2–6 foi, lățime până la 5000 mm, ideal pentru terase și balcoane rezidențiale','Montaj rapid modular — adaptabil la orice deschidere fără modificări structurale','Compatibil cu geam dublu 24–32 mm — cost total optimizat pentru proiecte cu buget mediu','Disponibil în toate culorile RAL — integrare estetică perfectă în orice tip de arhitectură'],
      en:['Most accessible folding system with thermal barrier in Alumil range — Uf 1.9 W/m²K superior to folding systems without barrier','PAS24 certified — high-demand anti-burglary standard even for the economic variant','100% opening — 2–6 panels, width up to 5000 mm, ideal for residential terraces and balconies','Fast modular installation — adaptable to any opening without structural modifications','Compatible with 24–32 mm double glazing — optimised total cost for medium-budget projects','Available in all RAL colours — perfect aesthetic integration in any type of architecture'],
      de:['Günstigstes Faltsystem mit Wärmedämmbrücke der Alumil-Reihe — Uf 1,9 W/m²K überlegen gegenüber Faltsystemen ohne Brücke','PAS24 zertifiziert — anspruchsvoller Einbruchschutzstandard sogar für die wirtschaftliche Variante','100% Öffnung — 2–6 Flügel, Breite bis 5000 mm, ideal für Wohnterrassen und Balkone','Schnelle modulare Montage — anpassbar an jede Öffnung ohne Strukturänderungen','Kompatibel mit 24–32 mm Zweifachverglasung — optimierte Gesamtkosten für Projekte mit mittlerem Budget','In allen RAL-Farben erhältlich — perfekte ästhetische Integration in jeden Architekturtyp'],
      fr:['Système pliant le plus accessible avec rupture thermique de la gamme Alumil — Uf 1,9 W/m²K supérieur aux pliants sans rupture','Certifié PAS24 — norme anti-effraction exigeante même pour la variante économique','Ouverture 100% — 2–6 panneaux, largeur jusqu\'à 5000 mm, idéal pour terrasses et balcons résidentiels','Pose modulaire rapide — adaptable à toute ouverture sans modifications structurelles','Compatible vitrage double 24–32 mm — coût total optimisé pour projets à budget moyen','Disponible dans toutes les couleurs RAL — intégration esthétique parfaite dans tout type d\'architecture'],
      es:['Sistema plegable más accesible con barrera térmica de la gama Alumil — Uf 1,9 W/m²K superior a los plegables sin barrera','Certificado PAS24 — norma antirrobo exigente incluso para la variante económica','Apertura 100% — 2–6 hojas, ancho hasta 5000 mm, ideal para terrazas y balcones residenciales','Instalación modular rápida — adaptable a cualquier apertura sin modificaciones estructurales','Compatible con doble vidrio 24–32 mm — coste total optimizado para proyectos con presupuesto medio','Disponible en todos los colores RAL — integración estética perfecta en cualquier tipo de arquitectura'],
      it:['Sistema pieghevole più accessibile con taglio termico nella gamma Alumil — Uf 1,9 W/m²K superiore ai pieghevoli senza taglio','Certificato PAS24 — standard antieffrazione esigente anche per la variante economica','Apertura 100% — 2–6 ante, larghezza fino a 5000 mm, ideale per terrazze e balconi residenziali','Installazione modulare rapida — adattabile a qualsiasi apertura senza modifiche strutturali','Compatibile con doppio vetro 24–32 mm — costo totale ottimizzato per progetti con budget medio','Disponibile in tutti i colori RAL — perfetta integrazione estetica in qualsiasi tipo di architettura'],
    },
    seo_text: {
      ro:'Sistemul armonic Alumil M 19800 SMARTIA este cel mai accesibil sistem pliant cu barieră termică din întreaga gamă Alumil, destinat teraselor rezidențiale, balcoanelor și spațiilor de zi unde deschiderea completă a peretelui frontal este o cerință esențială cu buget optimizat. Bariera termică de 18 mm asigură Uf de la 1,9 W/m²K — performanță semnificativ superioară față de sistemele armonice fără barieră termică, care generează punte termică importantă la rost și favorizează apariția condensului. Certificarea PAS24 este inclusă în sistem ca standard — o performanță remarcabilă pentru clasa de preț Smartia, care garantează protecția la efracție și conferă sistemului un nivel de calitate superior majorității soluțiilor pliante accesibile de pe piață. Cu 2 până la 6 foi și lățime totală de până la 5000 mm, M 19800 SMARTIA acoperă necesarul majorității teraselor și balcoanelor din clădiri rezidențiale și apartamente. Neofort BIZ furnizează și montează M 19800 SMARTIA cu consultanță gratuită și calcul al dimensionării înainte de comandă.',
      en:'The Alumil M 19800 SMARTIA folding system is the most accessible folding system with thermal barrier in the entire Alumil range, intended for residential terraces, balconies and living spaces where full opening of the front wall is an essential requirement with an optimised budget. The 18 mm thermal barrier ensures Uf from 1.9 W/m²K — performance significantly superior to folding systems without thermal barrier, which generate significant thermal bridging at the joint and favour condensation. PAS24 certification is included in the system as standard — a remarkable performance for the Smartia price class, which guarantees burglary protection and confers the system a quality level superior to the majority of accessible folding solutions on the market. With 2 to 6 panels and total width up to 5000 mm, M 19800 SMARTIA covers the needs of most terraces and balconies in residential buildings and apartments. Neofort BIZ supplies and installs M 19800 SMARTIA with free consultancy and sizing calculation before order.',
      de:'Das Alumil M 19800 SMARTIA Faltsystem ist das günstigste Faltsystem mit Wärmedämmbrücke der gesamten Alumil-Reihe, das für Wohnterrassen, Balkone und Wohnräume bestimmt ist, wo die vollständige Öffnung der Frontwand eine wesentliche Anforderung mit optimiertem Budget ist. Die 18 mm Wärmedämmbrücke gewährleistet Uf ab 1,9 W/m²K — deutlich überlegene Leistung gegenüber Faltsystemen ohne Wärmedämmbrücke, die signifikante Wärmebrücken an der Fuge erzeugen und Kondensatbildung fördern. PAS24-Zertifizierung ist im System als Standard enthalten — eine bemerkenswerte Leistung für die Smartia-Preisklasse, die Einbruchschutz garantiert und dem System ein Qualitätsniveau verleiht, das der Mehrheit der zugänglichen Faltsysteme auf dem Markt überlegen ist. Mit 2 bis 6 Flügeln und einer Gesamtbreite von bis zu 5000 mm deckt M 19800 SMARTIA den Bedarf der meisten Terrassen und Balkone in Wohngebäuden und Wohnungen ab. Neofort BIZ liefert und montiert M 19800 SMARTIA mit kostenloser Beratung und Dimensionierungsberechnung vor der Bestellung.',
      fr:'Le système pliant Alumil M 19800 SMARTIA est le système pliant le plus accessible avec rupture thermique de toute la gamme Alumil, destiné aux terrasses résidentielles, aux balcons et aux espaces de vie où l\'ouverture totale de la paroi frontale est une exigence essentielle avec un budget optimisé. La rupture thermique de 18 mm assure un Uf dès 1,9 W/m²K — performance nettement supérieure aux systèmes pliants sans rupture thermique, qui génèrent des ponts thermiques significatifs au joint et favorisent la formation de condensation. La certification PAS24 est incluse dans le système en standard — une performance remarquable pour la classe de prix Smartia, qui garantit la protection contre l\'effraction et confère au système un niveau de qualité supérieur à la majorité des solutions pliantes accessibles sur le marché. Avec 2 à 6 panneaux et une largeur totale jusqu\'à 5000 mm, M 19800 SMARTIA couvre les besoins de la plupart des terrasses et balcons des bâtiments résidentiels et des appartements. Neofort BIZ fournit et installe M 19800 SMARTIA avec conseil gratuit et calcul de dimensionnement avant commande.',
      es:'El sistema plegable Alumil M 19800 SMARTIA es el sistema plegable más accesible con barrera térmica de toda la gama Alumil, destinado a terrazas residenciales, balcones y espacios de estar donde la apertura completa de la pared frontal es un requisito esencial con presupuesto optimizado. La barrera térmica de 18 mm asegura Uf desde 1,9 W/m²K — rendimiento significativamente superior a los sistemas plegables sin barrera térmica, que generan importantes puentes térmicos en la junta y favorecen la formación de condensación. La certificación PAS24 está incluida en el sistema como estándar — un rendimiento notable para la clase de precio Smartia, que garantiza la protección contra el robo y confiere al sistema un nivel de calidad superior a la mayoría de las soluciones plegables accesibles del mercado. Con 2 a 6 hojas y ancho total de hasta 5000 mm, M 19800 SMARTIA cubre las necesidades de la mayoría de terrazas y balcones en edificios residenciales y apartamentos. Neofort BIZ suministra e instala M 19800 SMARTIA con asesoría gratuita y cálculo del dimensionamiento antes del pedido.',
      it:'Il sistema pieghevole Alumil M 19800 SMARTIA è il sistema pieghevole più accessibile con taglio termico dell\'intera gamma Alumil, destinato a terrazze residenziali, balconi e spazi giorno dove l\'apertura completa della parete frontale è un requisito essenziale con budget ottimizzato. Il taglio termico da 18 mm assicura Uf da 1,9 W/m²K — prestazioni significativamente superiori rispetto ai sistemi pieghevoli senza taglio termico, che generano ponti termici significativi al giunto e favoriscono la formazione di condensa. La certificazione PAS24 è inclusa nel sistema come standard — una prestazione notevole per la classe di prezzo Smartia, che garantisce la protezione contro l\'effrazione e conferisce al sistema un livello di qualità superiore alla maggioranza delle soluzioni pieghevoli accessibili sul mercato. Con 2 fino a 6 ante e larghezza totale fino a 5000 mm, M 19800 SMARTIA copre le esigenze della maggior parte delle terrazze e dei balconi negli edifici residenziali e negli appartamenti. Neofort BIZ fornisce e installa M 19800 SMARTIA con consulenza gratuita e calcolo del dimensionamento prima dell\'ordine.',
    },
  },
};

// ─── UI STRINGS ──────────────────────────────────────────────────────────────
const UI = {
  ro: { specs_title:'Specificații tehnice', perf_title:'Performanțe certificate', adv_title:'Avantaje principale', cta_h:'Solicitați ofertă pentru', cta_sub:'Consultanți disponibili Luni–Vineri, 10:00–18:00', cta_btn:'Cerere ofertă', cta_call:'Sună acum' },
  en: { specs_title:'Technical specifications', perf_title:'Certified performance', adv_title:'Key advantages', cta_h:'Request quote for', cta_sub:'Consultants available Mon–Fri, 10:00–18:00', cta_btn:'Request quote', cta_call:'Call now' },
  de: { specs_title:'Technische Daten', perf_title:'Zertifizierte Leistungen', adv_title:'Hauptvorteile', cta_h:'Angebot anfordern für', cta_sub:'Berater verfügbar Mo–Fr, 10:00–18:00', cta_btn:'Angebot anfordern', cta_call:'Jetzt anrufen' },
  fr: { specs_title:'Caractéristiques techniques', perf_title:'Performances certifiées', adv_title:'Avantages clés', cta_h:'Demander un devis pour', cta_sub:'Conseillers disponibles Lun–Ven, 10h–18h', cta_btn:'Demander un devis', cta_call:'Appeler maintenant' },
  es: { specs_title:'Especificaciones técnicas', perf_title:'Rendimiento certificado', adv_title:'Ventajas clave', cta_h:'Solicitar presupuesto para', cta_sub:'Consultores disponibles Lun–Vie, 10:00–18:00', cta_btn:'Pedir presupuesto', cta_call:'Llamar ahora' },
  it: { specs_title:'Specifiche tecniche', perf_title:'Prestazioni certificate', adv_title:'Vantaggi principali', cta_h:'Richiedi preventivo per', cta_sub:'Consulenti disponibili Lun–Ven, 10:00–18:00', cta_btn:'Richiedi preventivo', cta_call:'Chiama ora' },
};

// ─── generateStaticParams ─────────────────────────────────────────────────────
export async function generateStaticParams() {
  const params = [];
  for (const locale of LOCALES) {
    for (const [canonical, slugs] of Object.entries(SLUG_MAP)) {
      params.push({ locale, slug: slugs[locale] || canonical });
    }
  }
  return params;
}

// ─── generateMetadata ─────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const canonical = REVERSE[slug] || slug;
  const product   = PRODUCTS[canonical];
  if (!product) return { title: 'Produs Aluminiu · Neofort BIZ' };

  const name = product.name[locale] || product.name.ro;
  const desc = (product.seo_text[locale] || product.seo_text.ro).slice(0, 160);
  const localSlug = SLUG_MAP[canonical]?.[locale] || slug;
  const altSlug   = (l) => SLUG_MAP[canonical]?.[l] || canonical;

  return {
    title: `${name} · Neofort BIZ`,
    description: desc,
    keywords: `${name} · Neofort BIZ · tâmplărie PVC Salamander · aluminiu Alumil · București`,
    robots: { index:true, follow:true, googleBot:{ index:true, follow:true, 'max-image-preview':'large', 'max-snippet':-1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${(PALU_SEG[locale]||'produse-aluminiu')}/${localSlug}`,
      languages: Object.fromEntries([
        ...LOCALES.map(l => [l, `${BASE}/${l}/${(PALU_SEG[l]||'produse-aluminiu')}/${altSlug(l)}`]),
        ['x-default', `${BASE}/ro/${(PALU_SEG['ro']||'produse-aluminiu')}/${altSlug('ro')}`],
      ]),
    },
    openGraph: {
      type:'website', url:`${BASE}/${locale}/${(PALU_SEG[locale]||'produse-aluminiu')}/${localSlug}`,
      siteName:'Neofort BIZ', title:`${name} · Neofort BIZ`, description: desc,
      images:[{ url:`${BASE}${product.img}`, width:800, height:600, alt:name }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title:`${name} · Neofort BIZ`, description: desc, images:[{ url:`${BASE}${product.img}`, width:800, height:600 }] }, };
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default async function ProductAluPage({ params }) {
  const { locale, slug } = await params;
  const canonical = REVERSE[slug] || slug;
  const product   = PRODUCTS[canonical];
  if (!product) notFound();

  const ui      = UI[locale]     || UI.ro;
  const name    = product.name[locale]     || product.name.ro;
  const tagline = product.tagline[locale]  || product.tagline.ro;
  const cat     = product.category[locale] || product.category.ro;
  const serie   = product.serie[locale]    || product.serie.ro;
  const specs   = product.specs[locale]    || product.specs.ro;
  const perf    = product.perf[locale]     || product.perf.ro;
  const adv     = product.advantages[locale] || product.advantages.ro;
  const seotxt  = product.seo_text[locale] || product.seo_text.ro;
  const c       = product.color;

  const schema = {
    '@context':'https://schema.org', '@type':'Product',
    'name': name, 'description': seotxt,
    'image': `${BASE}${product.img}`,
    'brand': { '@type':'Brand', 'name':'Alumil' },
    'manufacturer': { '@type':'Organization', 'name':'Alumil S.A.', 'addressCountry':'GR' },
    'seller': { '@type':'Organization', 'name':'Neofort BIZ SRL', 'url':BASE },
    'offers': { '@type':'Offer', 'price':'0', 'priceCurrency':'RON', 'priceValidUntil':'2026-12-31', 'availability':'https://schema.org/InStock', 'url':`${BASE}/ro/contact`, 'priceSpecification':{'@type':'PriceSpecification','price':'0','priceCurrency':'RON','description':'Preț la cerere — ofertă personalizată'}, 'seller':{'@type':'Organization','name':'Neofort BIZ SRL','url':BASE} },
    'aggregateRating': { '@type':'AggregateRating', 'ratingValue':'5', 'bestRating':'5', 'worstRating':'1', 'ratingCount':'47' },
    'additionalProperty': specs.map(([n,v]) => ({ '@type':'PropertyValue', 'name':n, 'value':v })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <style>{`
        .prd-bc{font-size:.65rem;letter-spacing:.12em;text-transform:uppercase;color:#999;display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:24px}
        .prd-bc a{color:#999;text-decoration:none}.prd-bc a:hover{color:#1a1a1a}.prd-bc span{color:#ccc}
        .prd-hero{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
        .prd-img-wrap{position:relative;background:#f8f8f6;border:1px solid #e8e8e4;display:flex;align-items:center;justify-content:center;padding:32px;min-height:320px}
        .prd-img{max-width:100%;max-height:340px;width:auto;height:auto;object-fit:contain;display:block}
        .prd-badge{position:absolute;top:12px;left:12px;font-family:'Barlow Condensed',sans-serif;font-size:.52rem;letter-spacing:.2em;text-transform:uppercase;font-weight:700;padding:4px 10px}
        .prd-cat{font-family:'Barlow Condensed',sans-serif;font-size:.57rem;letter-spacing:.2em;text-transform:uppercase;font-weight:600;margin-bottom:10px}
        .prd-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:clamp(1.4rem,3vw,2rem);color:#1a1a1a;line-height:1.15;margin:0 0 14px}
        .prd-tagline{font-size:.88rem;color:#555;line-height:1.6;margin:0 0 28px;border-left:3px solid;padding-left:14px}
        .prd-sec{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.6rem;letter-spacing:.22em;text-transform:uppercase;color:#999;margin:0 0 12px}
        .prd-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#e8e8e4;border:1px solid #e8e8e4;margin-bottom:28px}
        .prd-row{background:#fff;display:flex;justify-content:space-between;gap:8px;padding:7px 10px;font-size:.73rem}
        .prd-row strong{color:#1a1a1a;font-weight:600;flex-shrink:0}.prd-row span{color:#555;text-align:right}
        .prd-perf{width:100%;border-collapse:collapse;margin-bottom:28px;font-size:.73rem}
        .prd-perf tr{border-bottom:1px solid #f0f0ee}.prd-perf td{padding:6px 8px}
        .prd-perf td:first-child{color:#767676;width:55%}.prd-perf td:last-child{font-weight:700;color:#1a1a1a;text-align:right}
        .prd-adv{list-style:none;padding:0;margin:0 0 28px}
        .prd-adv li{font-size:.8rem;color:#444;padding:8px 0 8px 20px;border-bottom:1px solid #f5f5f3;position:relative;line-height:1.5}
        .prd-adv li:last-child{border-bottom:none}
        .prd-cta-box{background:#111;padding:24px;position:sticky;top:100px}
        .prd-cta-hl{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:#666;margin-bottom:8px}
        .prd-cta-nm{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.05rem;color:#fff;margin-bottom:16px;line-height:1.2}
        .prd-cta-sub{font-size:.68rem;color:#555;margin-bottom:20px}
        .prd-cta-a{display:block;width:100%;padding:12px;text-align:center;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;margin-bottom:10px;transition:all .18s}
        .prd-cta-pri{color:#111;background:#fff}.prd-cta-pri:hover{background:#f0f0f0}
        .prd-cta-sec{color:#fff;border:1px solid #333}.prd-cta-sec:hover{border-color:#666}
        .prd-seo{font-size:.82rem;color:#767676;line-height:1.8;padding:32px 0;border-top:1px solid #e8e8e4;margin-top:8px}
        .prd-lower{display:grid;grid-template-columns:1fr 260px;gap:48px;align-items:start;margin-top:48px}
        .prd-mob{display:none;position:fixed;bottom:0;left:0;right:0;background:#111;padding:12px 16px;z-index:100;gap:10px;border-top:1px solid #222}
        .prd-mob a{flex:1;padding:11px 8px;text-align:center;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;transition:all .18s}
        .prd-mob-pri{background:#fff;color:#111}.prd-mob-sec{border:1px solid #333;color:#fff}
        @media(max-width:900px){.prd-hero{grid-template-columns:1fr;gap:24px}.prd-lower{grid-template-columns:1fr}.prd-cta-box{display:none}.prd-grid{grid-template-columns:1fr}.prd-mob{display:flex}body{padding-bottom:70px}}
        @media(max-width:600px){.prd-title{font-size:1.4rem}.prd-img-wrap{min-height:220px;padding:16px}}
      `}</style>

      {/* CTA sticky mobil */}
      <div className="prd-mob">
        <Link href="/contact" className="prd-mob-pri">{ui.cta_btn}</Link>
        <a href="tel:+40752443435" className="prd-mob-sec">{ui.cta_call}</a>
      </div>

      <div className="container mx-auto px-6" style={{paddingTop:'40px',paddingBottom:'80px'}}>

        {/* BREADCRUMB */}
        <nav className="prd-bc" aria-label="breadcrumb">
          <Link href="/">Neofort BIZ</Link>
          <span>·</span>
          <Link href="/tamplarie-aluminiu">{cat}</Link>
          <span>·</span>
          <span style={{color:'#1a1a1a'}}>{serie}</span>
        </nav>

        {/* HERO */}
        <div className="prd-hero">
          <div className="prd-img-wrap">
            <img src={product.img} alt={name} className="prd-img" loading="eager"/>
            <span className="prd-badge" style={{color:c,background:`${c}18`,border:`1px solid ${c}30`}}>{serie}</span>
          </div>
          <div>
            <p className="prd-cat" style={{color:c}}>{cat}</p>
            <h1 className="prd-title">{name}</h1>
            <p className="prd-tagline" style={{borderColor:c}}>{tagline}</p>
            <p className="prd-sec">{ui.specs_title}</p>
            <div className="prd-grid">
              {specs.map(([k,v]) => (
                <div key={k} className="prd-row"><strong>{k}</strong><span>{v}</span></div>
              ))}
            </div>
          </div>
        </div>

        {/* LOWER */}
        <div className="prd-lower">
          <div>
            <p className="prd-sec" style={{marginTop:0}}>{ui.perf_title}</p>
            <table className="prd-perf">
              <tbody>
                {perf.map(([k,v]) => (
                  <tr key={k}><td>{k}</td><td style={{color:c}}>{v}</td></tr>
                ))}
              </tbody>
            </table>

            <p className="prd-sec">{ui.adv_title}</p>
            <ul className="prd-adv">
              {adv.map((a,i) => (
                <li key={i}>
                  <span style={{position:'absolute',left:0,top:'14px',width:'8px',height:'2px',background:c,display:'block'}}/>
                  {a}
                </li>
              ))}
            </ul>

            <div className="prd-seo"><p>{seotxt}</p></div>
          </div>

          {/* SIDEBAR */}
          <div className="prd-cta-box">
            <p className="prd-cta-hl">{ui.cta_h}</p>
            <p className="prd-cta-nm">{name}</p>
            <p className="prd-cta-sub">{ui.cta_sub}</p>
            <Link href="/contact" className="prd-cta-a prd-cta-pri">{ui.cta_btn}</Link>
            <a href="tel:+40752443435" className="prd-cta-a prd-cta-sec">{ui.cta_call} +40 752 443 435</a>
          </div>
        </div>

      </div>
    </>
  );
}
