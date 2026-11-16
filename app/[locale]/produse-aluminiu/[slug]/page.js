import { notFound } from 'next/navigation';
import { Link } from '../../../../i18n/navigation';
import FaqAccordion from '../../../../components/FaqAccordion';

import { BASE, LOCALES } from '../../../../lib/constants.js';
import { ogDims, imgBox } from '../../../../lib/imgDims.js';
import { itemPageSchema, manufacturerSchema } from '../../../../lib/productSchema.js';
import { PRODUCT_META } from '../../../../data/productMeta.js';
import { PRODUCT_FAQ } from '../../../../data/productFaq.js';
const PALU_SEG = {ro:'produse-aluminiu',en:'products-alu',de:'produkte-alu',fr:'produits-alu',es:'productos-alu',it:'prodotti-alu'};

// ─── SLUG MAP — canonical → { ro, en, de, fr, es, it } ──────────────────────
const SLUG_MAP = {
  'alumil-s77-supreme':    { ro:'sistem-aluminiu-alumil-s77-supreme',    en:'alumil-s77-supreme-aluminium-system',    de:'alumil-s77-supreme-aluminiumsystem',    fr:'systeme-aluminium-alumil-s77-supreme',    es:'sistema-aluminio-alumil-s77-supreme',    it:'sistema-alluminio-alumil-s77-supreme'    },
  'alumil-s67-smartia':    { ro:'sistem-aluminiu-alumil-s67-smartia',    en:'alumil-s67-smartia-aluminium-system',    de:'alumil-s67-smartia-aluminiumsystem',    fr:'systeme-aluminium-alumil-s67-smartia',    es:'sistema-aluminio-alumil-s67-smartia',    it:'sistema-alluminio-alumil-s67-smartia'    },
  'alumil-s700-supreme':   { ro:'sistem-aluminiu-alumil-s700-supreme',   en:'alumil-s700-supreme-lift-slide-system',  de:'alumil-s700-supreme-hebeschiebesystem',  fr:'systeme-coulissant-alumil-s700-supreme',  es:'sistema-corredera-alumil-s700-supreme',  it:'sistema-scorrevole-alumil-s700-supreme'  },
  'alumil-s350-smartia':   { ro:'sistem-aluminiu-alumil-s350-smartia',   en:'alumil-s350-smartia-sliding-system',  de:'alumil-s350-smartia-schiebesystem',  fr:'systeme-coulissant-alumil-s350-smartia',  es:'sistema-corredera-alumil-s350-smartia',  it:'sistema-scorrevole-alumil-s350-smartia'  },
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
    color: '#162d47',
    serie: { ro:'Supreme S 77', en:'Supreme S 77', de:'Supreme S 77', fr:'Supreme S 77', es:'Supreme S 77', it:'Supreme S 77' },
    category: { ro:'Tâmplărie Aluminiu Alumil', en:'Alumil Aluminium Joinery', de:'Alumil Aluminiumfenster', fr:'Menuiserie Aluminium Alumil', es:'Carpintería Aluminio Alumil', it:'Infissi Alluminio Alumil' },
    name: {
      ro:'Sistem Aluminiu Alumil S 77 SUPREME – Ferestre și Uși cu Barieră Termică 40 mm',
      en:'Alumil S 77 SUPREME Aluminium System – Windows & Doors with 40 mm Thermal Barrier',
      de:'Alumil S 77 SUPREME Aluminiumsystem – Fenster & Türen mit 40 mm thermischer Trennung',
      fr:'Système Aluminium Alumil S 77 SUPREME – Fenêtres & Portes à Rupture Thermique 40 mm',
      es:'Sistema Aluminio Alumil S 77 SUPREME – Ventanas y Puertas con Barrera Térmica 40 mm',
      it:'Sistema Alluminio Alumil S 77 SUPREME – Finestre e Porte con Taglio Termico 40 mm',
    },
    tagline: {
      ro:'Top de gamă Supreme — toc 77 mm, poliamidă 40 mm cu Energy bar, geam 24–72 mm, Uw de la 0,85 W/m²K, RC2/RC3.',
      en:'Top of the Supreme range — 77 mm frame, 40 mm polyamide with Energy bar, glazing 24–72 mm, Uw from 0.85 W/m²K, RC2/RC3.',
      de:'Spitze der Supreme-Reihe — 77 mm Rahmen, 40 mm Polyamid mit Energy bar, Verglasung 24–72 mm, Uw ab 0,85 W/m²K, RC2/RC3.',
      fr:'Haut de gamme Supreme — dormant 77 mm, polyamide 40 mm avec Energy bar, vitrage 24–72 mm, Uw dès 0,85 W/m²K, RC2/RC3.',
      es:'Gama alta Supreme — marco 77 mm, poliamida 40 mm con Energy bar, vidrio 24–72 mm, Uw desde 0,85 W/m²K, RC2/RC3.',
      it:'Top gamma Supreme — telaio 77 mm, poliammide 40 mm con Energy bar, vetro 24–72 mm, Uw da 0,85 W/m²K, RC2/RC3.',
    },

    specs: {
      ro:[['Adâncime toc','77 mm'],['Izolație termică','Poliamidă 40 mm + Energy bar + spumă'],['Geam compatibil','24 – 72 mm (dublu / triplu)'],['Transfer termic Uf','0,85 – 2,42 W/m²K'],['Transfer termic Uw','0,85 – 1,4 W/m²K'],['Izolare fonică','până la 42 dB'],['Antiefracție','RC2 / RC3'],['Feronerie','Roto / Maco perimetrală'],['Finisaj','Vopsit RAL / Anodizat'],['Greutate max. canat','180 kg'],['Clasă','Supreme — top de gamă'],],
      en:[['Frame depth','77 mm'],['Thermal insulation','Polyamide 40 mm + Energy bar + foam'],['Compatible glass','24 – 72 mm (double / triple)'],['Thermal transfer Uf','0.85 – 2.42 W/m²K'],['Thermal transfer Uw','0.85 – 1.4 W/m²K'],['Sound insulation','up to 42 dB'],['Anti-burglary','RC2 / RC3'],['Hardware','Roto / Maco perimeter'],['Finish','RAL powder coat / Anodised'],['Max. sash weight','180 kg'],['Class','Supreme — top of range'],],
      de:[['Rahmentiefe','77 mm'],['Wärmedämmung','Polyamid 40 mm + Energy bar + Schaum'],['Verglasung','24 – 72 mm (zwei-/dreifach)'],['Wärmedurchgang Uf','0,85 – 2,42 W/m²K'],['Wärmedurchgang Uw','0,85 – 1,4 W/m²K'],['Schalldämmung','bis 42 dB'],['Einbruchschutz','RC2 / RC3'],['Beschläge','Roto / Maco perimetrisch'],['Oberfläche','RAL Pulver / Eloxiert'],['Max. Flügelgewicht','180 kg'],['Klasse','Supreme — Spitze'],],
      fr:[['Profondeur dormant','77 mm'],['Isolation thermique','Polyamide 40 mm + Energy bar + mousse'],['Vitrage','24 – 72 mm (double / triple)'],['Uf','0,85 – 2,42 W/m²K'],['Uw','0,85 – 1,4 W/m²K'],['Phonique','jusqu\'à 42 dB'],['Anti-effraction','RC2 / RC3'],['Ferrures','Roto / Maco périmétrique'],['Finition','Thermolaqué / Anodisé'],['Poids max.','180 kg'],['Classe','Supreme — haut de gamme'],],
      es:[['Profundidad marco','77 mm'],['Aislamiento térmico','Poliamida 40 mm + Energy bar + espuma'],['Vidrio','24 – 72 mm (doble / triple)'],['Uf','0,85 – 2,42 W/m²K'],['Uw','0,85 – 1,4 W/m²K'],['Acústico','hasta 42 dB'],['Antirrobo','RC2 / RC3'],['Herraje','Roto / Maco perimetral'],['Acabado','RAL / Anodizado'],['Peso máx.','180 kg'],['Clase','Supreme — gama alta'],],
      it:[['Profondità telaio','77 mm'],['Isolamento termico','Poliammide 40 mm + Energy bar + schiuma'],['Vetro','24 – 72 mm (doppio / triplo)'],['Uf','0,85 – 2,42 W/m²K'],['Uw','0,85 – 1,4 W/m²K'],['Acustico','fino a 42 dB'],['Antieffrazione','RC2 / RC3'],['Ferramenta','Roto / Maco perimetrale'],['Finitura','RAL / Anodizzato'],['Peso max.','180 kg'],['Classe','Supreme — top gamma'],],
    },

    perf: {
      ro:[['Coeficient Uf cadru','de la 0,85 W/m²K'],['Coeficient Uw fereastră','de la 0,85 W/m²K'],['Etanșeitate apă','E1350'],['Permeabilitate aer','Clasa 4'],['Rezistență vânt','C5 / B5'],['Izolare fonică','până la 42 dB'],['Antiefracție','RC2 / RC3'],],
      en:[['Frame Uf','from 0.85 W/m²K'],['Window Uw','from 0.85 W/m²K'],['Water tightness','E1350'],['Air permeability','Class 4'],['Wind resistance','C5 / B5'],['Sound insulation','up to 42 dB'],['Anti-burglary','RC2 / RC3'],],
      de:[['Rahmen Uf','ab 0,85 W/m²K'],['Fenster Uw','ab 0,85 W/m²K'],['Schlagregen','E1350'],['Luftdurchlass','Klasse 4'],['Windlast','C5 / B5'],['Schalldämmung','bis 42 dB'],['Einbruchschutz','RC2 / RC3'],],
      fr:[['Uf cadre','dès 0,85 W/m²K'],['Uw fenêtre','dès 0,85 W/m²K'],['Eau','E1350'],['Air','Classe 4'],['Vent','C5 / B5'],['Son','jusqu\'à 42 dB'],['Anti-effraction','RC2 / RC3'],],
      es:[['Uf marco','desde 0,85 W/m²K'],['Uw ventana','desde 0,85 W/m²K'],['Agua','E1350'],['Aire','Clase 4'],['Viento','C5 / B5'],['Sonido','hasta 42 dB'],['Antirrobo','RC2 / RC3'],],
      it:[['Uf telaio','da 0,85 W/m²K'],['Uw finestra','da 0,85 W/m²K'],['Acqua','E1350'],['Aria','Classe 4'],['Vento','C5 / B5'],['Suono','fino a 42 dB'],['Antieffrazione','RC2 / RC3'],],
    },

    advantages: {
      ro:['Poliamidă 40 mm, Energy bar și spumă izolantă — Uf de la 0,85 W/m²K și Uw de la 0,85 W/m²K, după datele Alumil','Geam până la 72 mm — acceptă geam triplu cu distanțier Warm Edge','Antiefracție RC2 sau RC3 — clasa se atinge cu feronerie și geam dedicate, stabilite în ofertă','Canate de până la 180 kg — suficient pentru ferestre și uși cu geam triplu','Etanșeitate la apă E1350, aer clasa 4, vânt C5/B5 — clase testate de Alumil','Finisaj RAL complet sau anodizat — culori standard și personalizate, bicolor interior/exterior'],
      en:['40 mm polyamide, Energy bar and insulating foam — Uf from 0.85 W/m²K and Uw from 0.85 W/m²K, per Alumil data','Glazing up to 72 mm — takes triple glazing with a Warm Edge spacer','RC2 or RC3 burglar resistance — reached with dedicated hardware and glazing, set out in the quote','Sashes up to 180 kg — enough for triple-glazed windows and doors','Water tightness E1350, air class 4, wind C5/B5 — classes tested by Alumil','Full RAL or anodised finish — standard and custom colours, interior/exterior bicolour'],
      de:['40 mm Polyamid, Energy bar und Dämmschaum — Uf ab 0,85 W/m²K und Uw ab 0,85 W/m²K laut Alumil','Verglasung bis 72 mm — nimmt Dreifachglas mit Warm-Edge-Abstandhalter auf','Einbruchschutz RC2 oder RC3 — erreicht mit passendem Beschlag und Glas, festgelegt im Angebot','Flügel bis 180 kg — ausreichend für Fenster und Türen mit Dreifachglas','Schlagregendichtheit E1350, Luft Klasse 4, Wind C5/B5 — von Alumil geprüfte Klassen','Vollständige RAL- oder Eloxal-Oberfläche — Standard- und Sonderfarben, innen/außen zweifarbig'],
      fr:['Polyamide 40 mm, Energy bar et mousse isolante — Uf dès 0,85 W/m²K et Uw dès 0,85 W/m²K selon Alumil','Vitrage jusqu\'à 72 mm — accepte le triple vitrage avec intercalaire Warm Edge','Anti-effraction RC2 ou RC3 — obtenue avec ferrures et vitrage dédiés, précisés dans le devis','Vantaux jusqu\'à 180 kg — suffisant pour fenêtres et portes en triple vitrage','Étanchéité à l\'eau E1350, air classe 4, vent C5/B5 — classes testées par Alumil','Finition RAL complète ou anodisée — couleurs standard et personnalisées, bicolore intérieur/extérieur'],
      es:['Poliamida 40 mm, Energy bar y espuma aislante — Uf desde 0,85 W/m²K y Uw desde 0,85 W/m²K, según Alumil','Vidrio hasta 72 mm — admite triple vidrio con separador Warm Edge','Antirrobo RC2 o RC3 — se alcanza con herrajes y vidrio específicos, fijados en el presupuesto','Hojas de hasta 180 kg — suficiente para ventanas y puertas con triple vidrio','Estanqueidad al agua E1350, aire clase 4, viento C5/B5 — clases ensayadas por Alumil','Acabado RAL completo o anodizado — colores estándar y personalizados, bicolor interior/exterior'],
      it:['Poliammide 40 mm, Energy bar e schiuma isolante — Uf da 0,85 W/m²K e Uw da 0,85 W/m²K secondo Alumil','Vetro fino a 72 mm — accetta il triplo vetro con distanziale Warm Edge','Antieffrazione RC2 o RC3 — si ottiene con ferramenta e vetro dedicati, indicati nel preventivo','Ante fino a 180 kg — sufficienti per finestre e porte con triplo vetro','Tenuta all\'acqua E1350, aria classe 4, vento C5/B5 — classi provate da Alumil','Finitura RAL completa o anodizzata — colori standard e personalizzati, bicolore interno/esterno'],
    },

    seo_text: {
      ro:'Sistemul de tâmplărie aluminiu Alumil S 77 SUPREME este soluția de vârf a gamei Supreme Alumil pentru ferestre și uși cu deschidere oscilo-batantă, proiectat să satisfacă cerințele celor mai exigente standarde energetice și de securitate. Izolația termică — poliamidă de 40 mm, Energy bar și spumă — dă un Uf între 0,85 și 2,42 W/m²K, după profil; fereastra completă are, după Alumil, Uw între 0,85 și 1,4 W/m²K, în funcție de geam și dimensiuni. Tocul are 77 mm, geamul poate avea 24–72 mm, iar un canat poate cântări până la 180 kg, suficient pentru ferestre și uși cu geam triplu. Etanșeitatea la apă este E1350, permeabilitatea la aer clasa 4, iar rezistența la vânt C5/B5. Sistemul poate atinge clasele antiefracție RC2 sau RC3, cu feronerie și geam dedicate, stabilite în ofertă pentru ușile de intrare și terase. Neofort BIZ furnizează și montează S 77 SUPREME în gama completă de culori RAL, finisaje anodizate și variante bicolor interior/exterior, cu asistență tehnică specializată și garanție de producție Alumil.',
      en:'The Alumil S 77 SUPREME aluminium joinery system is the top solution of the Alumil Supreme range for tilt-and-turn windows and doors, designed to meet the requirements of the most demanding energy and security standards. The thermal insulation — 40 mm polyamide, Energy bar and foam — gives a Uf between 0.85 and 2.42 W/m²K, depending on the profile; according to Alumil, the complete window reaches Uw between 0.85 and 1.4 W/m²K, depending on glazing and size. The frame is 77 mm deep, glazing can be 24–72 mm thick and a sash can weigh up to 180 kg, enough for triple-glazed windows and doors. Water tightness is E1350, air permeability class 4 and wind resistance C5/B5. The system can reach burglar resistance classes RC2 or RC3 with dedicated hardware and glazing, set out in the quote for entrance doors and terraces. Neofort BIZ supplies and installs S 77 SUPREME in the full range of RAL colours, anodised finishes and interior/exterior bicolour variants, with specialised technical support and Alumil production warranty.',
      de:'Das Alumil S 77 SUPREME Aluminiumfenstersystem ist die Spitzenlösung der Alumil Supreme-Reihe für Dreh-Kipp-Fenster und -Türen, konzipiert um die Anforderungen der anspruchsvollsten Energie- und Sicherheitsstandards zu erfüllen. Die Wärmedämmung — 40 mm Polyamid, Energy bar und Schaum — ergibt je nach Profil Uf zwischen 0,85 und 2,42 W/m²K; laut Alumil erreicht das komplette Fenster je nach Glas und Größe Uw zwischen 0,85 und 1,4 W/m²K. Der Rahmen ist 77 mm tief, die Verglasung kann 24–72 mm dick sein und ein Flügel bis zu 180 kg wiegen, genug für Fenster und Türen mit Dreifachglas. Die Schlagregendichtheit ist E1350, die Luftdurchlässigkeit Klasse 4 und die Windlast C5/B5. Das System kann die Widerstandsklassen RC2 oder RC3 erreichen, mit passendem Beschlag und Glas, die im Angebot für Eingangstüren und Terrassen festgelegt werden. Neofort BIZ liefert und montiert S 77 SUPREME in der gesamten Palette der RAL-Farben, Eloxal-Oberflächen und Innen-/Außen-Zweifarbvarianten, mit spezialisiertem technischem Support und Alumil-Produktionsgarantie.',
      fr:'Le système de menuiserie aluminium Alumil S 77 SUPREME est la solution de pointe de la gamme Alumil Supreme pour les fenêtres et portes oscillo-battantes, conçu pour répondre aux exigences des normes énergétiques et de sécurité les plus exigeantes. L\'isolation thermique — polyamide de 40 mm, Energy bar et mousse — donne un Uf entre 0,85 et 2,42 W/m²K selon le profil ; selon Alumil, la fenêtre complète atteint un Uw entre 0,85 et 1,4 W/m²K selon le vitrage et les dimensions. Le dormant fait 77 mm, le vitrage peut avoir 24 à 72 mm et un vantail peut peser jusqu\'à 180 kg, assez pour des fenêtres et portes en triple vitrage. L\'étanchéité à l\'eau est E1350, la perméabilité à l\'air classe 4 et la résistance au vent C5/B5. Le système peut atteindre les classes anti-effraction RC2 ou RC3, avec ferrures et vitrage dédiés, précisés dans le devis pour les portes d\'entrée et les terrasses. Neofort BIZ fournit et installe le S 77 SUPREME dans la gamme complète de couleurs RAL, finitions anodisées et variantes bicolores intérieur/extérieur, avec support technique spécialisé et garantie de production Alumil.',
      es:'El sistema de carpintería de aluminio Alumil S 77 SUPREME es la solución de vanguardia de la gama Alumil Supreme para ventanas y puertas oscilobatientes, diseñado para cumplir los requisitos de los estándares energéticos y de seguridad más exigentes. El aislamiento térmico — poliamida de 40 mm, Energy bar y espuma — da un Uf entre 0,85 y 2,42 W/m²K según el perfil; según Alumil, la ventana completa alcanza un Uw entre 0,85 y 1,4 W/m²K según el vidrio y las dimensiones. El marco tiene 77 mm, el vidrio puede tener 24–72 mm y una hoja puede pesar hasta 180 kg, suficiente para ventanas y puertas con triple vidrio. La estanqueidad al agua es E1350, la permeabilidad al aire clase 4 y la resistencia al viento C5/B5. El sistema puede alcanzar las clases antirrobo RC2 o RC3, con herrajes y vidrio específicos, fijados en el presupuesto para puertas de entrada y terrazas. Neofort BIZ suministra e instala el S 77 SUPREME en la gama completa de colores RAL, acabados anodizados y variantes bicolor interior/exterior, con soporte técnico especializado y garantía de producción Alumil.',
      it:'Il sistema di infissi in alluminio Alumil S 77 SUPREME è la soluzione di punta della gamma Alumil Supreme per finestre e porte vasistas, progettato per soddisfare i requisiti degli standard energetici e di sicurezza più esigenti. L\'isolamento termico — poliammide da 40 mm, Energy bar e schiuma — dà un Uf tra 0,85 e 2,42 W/m²K secondo il profilo; secondo Alumil, la finestra completa raggiunge un Uw tra 0,85 e 1,4 W/m²K secondo vetro e dimensioni. Il telaio è profondo 77 mm, il vetro può avere 24–72 mm e un\'anta può pesare fino a 180 kg, abbastanza per finestre e porte con triplo vetro. La tenuta all\'acqua è E1350, la permeabilità all\'aria classe 4 e la resistenza al vento C5/B5. Il sistema può raggiungere le classi antieffrazione RC2 o RC3, con ferramenta e vetro dedicati, indicati nel preventivo per porte d\'ingresso e terrazze. Neofort BIZ fornisce e installa S 77 SUPREME nella gamma completa di colori RAL, finiture anodizzate e varianti bicolore interno/esterno, con supporto tecnico specializzato e garanzia di produzione Alumil.',
    },
  },

  'alumil-s67-smartia': {
    img: '/products/alumil-s67-smartia.avif',
    color: '#162d47',
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
      de:'Vielseitiges Smartia Aluminiumsystem — 67–75 mm Bautiefe, 30 mm thermische Trennung, überlegene 45 dB Schalldämmung, optimales Preis-Leistungs-Verhältnis.',
      fr:'Système aluminium Smartia polyvalent — profondeur 67–75 mm, rupture thermique 30 mm, isolation phonique supérieure 45 dB, rapport qualité-prix optimal.',
      es:'Sistema aluminio Smartia versátil — profundidad 67–75 mm, barrera térmica 30 mm, aislamiento acústico superior 45 dB, óptima relación calidad-precio.',
      it:'Sistema alluminio Smartia versatile — profondità 67–75 mm, taglio termico 30 mm, isolamento acustico superiore 45 dB, ottimo rapporto qualità-prezzo.',
    },
    specs: {
      ro:[['Adâncime toc / canat','67 / 75 mm'],['Izolație termică','Poliamidă 30 mm + spumă PE'],['Geam compatibil','până la 58 mm (dublu / triplu)'],['Transfer termic Uf','1,1 – 2,6 W/m²K'],['Izolare fonică','până la 45 dB'],['Antiefracție','RC2 / RC3'],['Feronerie','Roto / Maco perimetrală'],['Finisaj','Vopsit RAL / Anodizat'],['Greutate max. canat','180 kg'],['Clasă','Smartia — raport optim'],],
      en:[['Frame / sash depth','67 / 75 mm'],['Thermal insulation','Polyamide 30 mm + PE foam'],['Compatible glass','up to 58 mm (double / triple)'],['Thermal transfer Uf','1.1 – 2.6 W/m²K'],['Sound insulation','up to 45 dB'],['Anti-burglary','RC2 / RC3'],['Hardware','Roto / Maco perimeter'],['Finish','RAL powder coat / Anodised'],['Max. sash weight','180 kg'],['Class','Smartia — optimal value'],],
      de:[['Rahmen-/Flügeltiefe','67 / 75 mm'],['Wärmedämmung','Polyamid 30 mm + PE-Schaum'],['Verglasung','bis 58 mm (zwei-/dreifach)'],['Wärmedurchgang Uf','1,1 – 2,6 W/m²K'],['Schalldämmung','bis 45 dB'],['Einbruchschutz','RC2 / RC3'],['Beschläge','Roto / Maco perimetrisch'],['Oberfläche','RAL Pulver / Eloxiert'],['Max. Flügelgewicht','180 kg'],['Klasse','Smartia — optimales Verhältnis'],],
      fr:[['Profondeur dormant / ouvrant','67 / 75 mm'],['Isolation thermique','Polyamide 30 mm + mousse PE'],['Vitrage','jusqu\'à 58 mm (double / triple)'],['Uf','1,1 – 2,6 W/m²K'],['Phonique','jusqu\'à 45 dB'],['Anti-effraction','RC2 / RC3'],['Ferrures','Roto / Maco périmétrique'],['Finition','RAL / Anodisé'],['Poids max.','180 kg'],['Classe','Smartia — valeur optimale'],],
      es:[['Profundidad marco / hoja','67 / 75 mm'],['Aislamiento térmico','Poliamida 30 mm + espuma PE'],['Vidrio','hasta 58 mm (doble / triple)'],['Uf','1,1 – 2,6 W/m²K'],['Acústico','hasta 45 dB'],['Antirrobo','RC2 / RC3'],['Herraje','Roto / Maco perimetral'],['Acabado','RAL / Anodizado'],['Peso máx.','180 kg'],['Clase','Smartia — valor óptimo'],],
      it:[['Profondità telaio / anta','67 / 75 mm'],['Isolamento termico','Poliammide 30 mm + schiuma PE'],['Vetro','fino a 58 mm (doppio / triplo)'],['Uf','1,1 – 2,6 W/m²K'],['Acustico','fino a 45 dB'],['Antieffrazione','RC2 / RC3'],['Ferramenta','Roto / Maco perimetrale'],['Finitura','RAL / Anodizzato'],['Peso max.','180 kg'],['Classe','Smartia — valore ottimale'],],
    },

    perf: {
      ro:[['Coeficient Uf cadru','de la 1,1 W/m²K'],['Etanșeitate apă','E1200'],['Permeabilitate aer','Clasa 4'],['Rezistență vânt','C5'],['Izolare fonică','până la 45 dB'],['Antiefracție','RC2 / RC3'],],
      en:[['Frame Uf','from 1.1 W/m²K'],['Water tightness','E1200'],['Air permeability','Class 4'],['Wind resistance','C5'],['Sound insulation','up to 45 dB'],['Anti-burglary','RC2 / RC3'],],
      de:[['Rahmen Uf','ab 1,1 W/m²K'],['Schlagregen','E1200'],['Luftdurchlass','Klasse 4'],['Windlast','C5'],['Schalldämmung','bis 45 dB'],['Einbruchschutz','RC2 / RC3'],],
      fr:[['Uf cadre','dès 1,1 W/m²K'],['Eau','E1200'],['Air','Classe 4'],['Vent','C5'],['Son','jusqu\'à 45 dB'],['Anti-effraction','RC2 / RC3'],],
      es:[['Uf marco','desde 1,1 W/m²K'],['Agua','E1200'],['Aire','Clase 4'],['Viento','C5'],['Sonido','hasta 45 dB'],['Antirrobo','RC2 / RC3'],],
      it:[['Uf telaio','da 1,1 W/m²K'],['Acqua','E1200'],['Aria','Classe 4'],['Vento','C5'],['Suono','fino a 45 dB'],['Antieffrazione','RC2 / RC3'],],
    },

    advantages: {
      ro:['Izolare fonică 45 dB — cea mai bună din clasa Smartia, superioară multor sisteme Supreme medii, ideal pentru zone urbane aglomerate','Barieră termică 30 mm — Uf de la 1,1 W/m²K, performanță termică satisfăcătoare pentru clădiri rezidențiale standard','Raport calitate-preț optim — clasa Smartia Alumil la preț mediu, produs în Grecia cu standarde europene','Compatibil geam 24–58 mm — dublu și triplu termoizolant pentru diverse cerințe termice și fonice','Design versatil — feronerie Roto/Maco, disponibil în toate culorile RAL și finisaje anodizate','Recomandat pentru blocuri, clădiri de birouri, spații comerciale și renovări rezidențiale'],
      en:['45 dB sound insulation — best in Smartia class, superior to many mid-range Supreme systems, ideal for busy urban areas','30 mm thermal barrier — Uf from 1.1 W/m²K, satisfactory thermal performance for standard residential buildings','Optimal value for money — Alumil Smartia class at medium price, produced in Greece to European standards','Compatible glass 24–58 mm — double and triple thermal insulation for various thermal and acoustic requirements','Versatile design — Roto/Maco hardware, available in all RAL colours and anodised finishes','Recommended for apartment blocks, office buildings, commercial spaces and residential renovations'],
      de:['45 dB Schalldämmung — beste der Smartia-Klasse, überlegen gegenüber vielen mittleren Supreme-Systemen, ideal für belebte Stadtgebiete','30 mm thermische Trennung — Uf ab 1,1 W/m²K, zufriedenstellende Wärmeleistung für Standard-Wohngebäude','Optimales Preis-Leistungs-Verhältnis — Alumil Smartia-Klasse zum mittleren Preis, in Griechenland nach europäischen Standards hergestellt','Kompatibles Glas 24–58 mm — Zweifach- und Dreifachwärmeschutz für verschiedene Wärme- und Schallanforderungen','Vielseitiges Design — Roto/Maco-Beschläge, erhältlich in allen RAL-Farben und Eloxal-Oberflächen','Empfohlen für Mehrfamilienhäuser, Bürogebäude, Gewerberäume und Wohnrenovierungen'],
      fr:['Isolation phonique 45 dB — la meilleure de la classe Smartia, supérieure à de nombreux systèmes Supreme de gamme moyenne, idéale pour les zones urbaines animées','Rupture thermique 30 mm — Uf dès 1,1 W/m²K, performance thermique satisfaisante pour les bâtiments résidentiels standard','Rapport qualité-prix optimal — classe Alumil Smartia à prix moyen, produit en Grèce selon les normes européennes','Vitrage compatible 24–58 mm — isolation thermique double et triple pour diverses exigences thermiques et acoustiques','Design polyvalent — ferrures Roto/Maco, disponible dans toutes les couleurs RAL et finitions anodisées','Recommandé pour les immeubles d\'appartements, les bureaux, les espaces commerciaux et les rénovations résidentielles'],
      es:['Aislamiento acústico 45 dB — el mejor de la clase Smartia, superior a muchos sistemas Supreme de gama media, ideal para zonas urbanas concurridas','Barrera térmica 30 mm — Uf desde 1,1 W/m²K, rendimiento térmico satisfactorio para edificios residenciales estándar','Óptima relación calidad-precio — clase Alumil Smartia a precio medio, fabricado en Grecia con estándares europeos','Vidrio compatible 24–58 mm — aislamiento térmico doble y triple para diversos requisitos térmicos y acústicos','Diseño versátil — herraje Roto/Maco, disponible en todos los colores RAL y acabados anodizados','Recomendado para bloques de apartamentos, edificios de oficinas, espacios comerciales y renovaciones residenciales'],
      it:['Isolamento acustico 45 dB — il migliore della classe Smartia, superiore a molti sistemi Supreme di fascia media, ideale per zone urbane affollate','Taglio termico 30 mm — Uf da 1,1 W/m²K, prestazioni termiche soddisfacenti per edifici residenziali standard','Ottimo rapporto qualità-prezzo — classe Alumil Smartia a prezzo medio, prodotto in Grecia secondo standard europei','Vetro compatibile 24–58 mm — isolamento termico doppio e triplo per vari requisiti termici e acustici','Design versatile — ferramenta Roto/Maco, disponibile in tutti i colori RAL e finiture anodizzate','Consigliato per condomini, edifici per uffici, spazi commerciali e ristrutturazioni residenziali'],
    },
    seo_text: {
      ro:'Sistemul de aluminiu Alumil S 67 SMARTIA se distinge în gama sa de preț printr-o izolare fonică de până la 45 dB — performanță superioară multor sisteme de gamă medie și premium de la alte mărci — datorită adâncimii constructive de 67–75 mm și compatibilității cu geam triplu de până la 58 mm grosime. Aceasta îl face soluția preferată pentru fațadele expuse la trafic urban intens, căi ferate sau zone industriale, unde reducerea nivelului de zgomot este o prioritate. Bariera termică din poliamidă de 30 mm asigură Uf de la 1,1 W/m²K (Alumil: 1,1–2,6 W/m²K, după configurație) — performanță adecvată pentru clădirile rezidențiale și comerciale obișnuite; pentru performanță termică mai mare recomandăm S 77 SUPREME. Feroneria Roto/Maco perimetrală cu toate punctele de blocare permite RC2 sau RC3. Neofort BIZ furnizează S 67 SMARTIA în toate culorile RAL standard și personalizate, finisaje anodizate, bicolor interior/exterior și variante speciale cu profil vizibil redus pentru maximizarea suprafeței vitrate.',
      en:'The Alumil S 67 SMARTIA aluminium system stands out in its price range with sound insulation of up to 45 dB — performance superior to many mid-range and premium systems from other brands — thanks to its 67–75 mm construction depth and compatibility with triple glazing up to 58 mm thickness. This makes it the preferred solution for facades exposed to heavy urban traffic, railways or industrial areas, where noise reduction is a priority. The 30 mm polyamide thermal barrier ensures Uf from 1.1 W/m²K (Alumil: 1.1–2.6 W/m²K depending on configuration) — adequate performance for ordinary residential and commercial buildings; for higher thermal performance we recommend the S 77 SUPREME. The perimeter Roto/Maco hardware with all locking points allows RC2 or RC3. Neofort BIZ supplies S 67 SMARTIA in all standard and custom RAL colours, anodised finishes, interior/exterior bicolour and special variants with reduced visible profile for maximum glazed area.',
      de:'Das Alumil S 67 SMARTIA Aluminiumsystem zeichnet sich in seiner Preisklasse durch eine Schalldämmung von bis zu 45 dB aus — überlegene Leistung gegenüber vielen mittleren und Premium-Systemen anderer Marken — dank 67–75 mm Bautiefe und Kompatibilität mit Dreifachverglasung bis zu 58 mm Dicke. Dies macht es zur bevorzugten Lösung für Fassaden, die starkem Stadtverkehr, Eisenbahnen oder Industriegebieten ausgesetzt sind, wo Lärmminderung Priorität hat. Die thermische Trennung aus 30 mm Polyamid gewährleistet Uf ab 1,1 W/m²K (Alumil: 1,1–2,6 W/m²K je nach Konfiguration) — ausreichende Leistung für übliche Wohn- und Gewerbegebäude; für höhere Wärmedämmung empfehlen wir S 77 SUPREME. Die perimetrische Roto/Maco-Ausstattung mit allen Verriegelungspunkten ermöglicht RC2 oder RC3. Neofort BIZ liefert S 67 SMARTIA in allen Standard- und Sonder-RAL-Farben, Eloxal-Oberflächen, Innen-/Außen-Zweifarbig und Spezialvarianten mit reduzierter sichtbarer Profilbreite für maximale Glasfläche.',
      fr:'Le système aluminium Alumil S 67 SMARTIA se distingue dans sa gamme de prix par une isolation phonique jusqu\'à 45 dB — performance supérieure à de nombreux systèmes de gamme moyenne et premium d\'autres marques — grâce à une profondeur de construction de 67–75 mm et à la compatibilité avec le triple vitrage jusqu\'à 58 mm d\'épaisseur. Cela en fait la solution préférée pour les façades exposées à un trafic urbain intense, des voies ferrées ou des zones industrielles, où la réduction du bruit est une priorité. La rupture thermique en polyamide de 30 mm assure un Uf dès 1,1 W/m²K (Alumil : 1,1–2,6 W/m²K selon la configuration) — performance adéquate pour les bâtiments résidentiels et commerciaux courants ; pour une performance thermique supérieure, nous recommandons le S 77 SUPREME. Les ferrures périmètriques Roto/Maco avec tous les points de verrouillage permettent RC2 ou RC3. Neofort BIZ fournit S 67 SMARTIA dans toutes les couleurs RAL standard et personnalisées, finitions anodisées, bicolore intérieur/extérieur et variantes spéciales avec profil visible réduit pour maximiser la surface vitrée.',
      es:'El sistema de aluminio Alumil S 67 SMARTIA destaca en su rango de precios con un aislamiento acústico de hasta 45 dB — rendimiento superior a muchos sistemas de gama media y premium de otras marcas — gracias a su profundidad constructiva de 67–75 mm y a la compatibilidad con triple vidrio de hasta 58 mm de espesor. Esto lo convierte en la solución preferida para fachadas expuestas a tráfico urbano intenso, vías ferroviarias o zonas industriales, donde la reducción del ruido es una prioridad. La barrera térmica de poliamida de 30 mm asegura Uf desde 1,1 W/m²K (Alumil: 1,1–2,6 W/m²K según la configuración) — rendimiento adecuado para edificios residenciales y comerciales habituales; para un mayor rendimiento térmico recomendamos el S 77 SUPREME. El herraje perimetral Roto/Maco con todos los puntos de cierre permite RC2 o RC3. Neofort BIZ suministra S 67 SMARTIA en todos los colores RAL estándar y personalizados, acabados anodizados, bicolor interior/exterior y variantes especiales con perfil visible reducido para maximizar la superficie acristalada.',
      it:'Il sistema alluminio Alumil S 67 SMARTIA si distingue nella sua fascia di prezzo con un isolamento acustico fino a 45 dB — prestazioni superiori a molti sistemi di fascia media e premium di altri marchi — grazie alla profondità di costruzione di 67–75 mm e alla compatibilità con triplo vetro fino a 58 mm di spessore. Questo lo rende la soluzione preferita per le facciate esposte a intenso traffico urbano, ferrovie o aree industriali, dove la riduzione del rumore è una priorità. Il taglio termico in poliammide da 30 mm assicura Uf da 1,1 W/m²K (Alumil: 1,1–2,6 W/m²K secondo la configurazione) — prestazioni adeguate per edifici residenziali e commerciali comuni; per prestazioni termiche superiori consigliamo l\'S 77 SUPREME. La ferramenta perimetrale Roto/Maco con tutti i punti di chiusura consente RC2 o RC3. Neofort BIZ fornisce S 67 SMARTIA in tutti i colori RAL standard e personalizzati, finiture anodizzate, bicolore interno/esterno e varianti speciali con profilo visibile ridotto per massimizzare la superficie vetrata.',
    },
  },

  'alumil-s700-supreme': {
    img: '/products/alumil-s700-supreme.avif',
    color: '#162d47',
    serie: { ro:'Supreme S 700', en:'Supreme S 700', de:'Supreme S 700', fr:'Supreme S 700', es:'Supreme S 700', it:'Supreme S 700' },
    category: { ro:'Tâmplărie Aluminiu Alumil', en:'Alumil Aluminium Joinery', de:'Alumil Aluminiumfenster', fr:'Menuiserie Aluminium Alumil', es:'Carpintería Aluminio Alumil', it:'Infissi Alluminio Alumil' },
    name: {
      ro:'Sistem Liftant Glisant Alumil S 700 SUPREME – Foi până la 600 kg, Geam 50 mm',
      en:'Alumil S 700 SUPREME Lift & Slide – Panels up to 600 kg, 50 mm Glazing',
      de:'Alumil S 700 SUPREME Hebeschiebe – Flügel bis 600 kg, 50 mm Verglasung',
      fr:'Coulissant Levant Alumil S 700 SUPREME – Panneaux jusqu\'à 600 kg, Vitrage 50 mm',
      es:'Corredera Elevable Alumil S 700 SUPREME – Hojas hasta 600 kg, Vidrio 50 mm',
      it:'Scorrevole Alzante Alumil S 700 SUPREME – Ante fino a 600 kg, Vetro 50 mm',
    },
    tagline: {
      ro:'Liftant glisant premium cu izolație din poliamidă și Energy bar, garnituri EPDM și perii tri-fin — foi de 600 kg, prag de numai 24 mm, Uw 1,1 W/m²K.',
      en:'Premium lift and slide with polyamide and Energy bar insulation, EPDM gaskets and tri-fin brushes — 600 kg panels, threshold of only 24 mm, Uw 1.1 W/m²K.',
      de:'Premium-Hebeschiebe mit Dämmung aus Polyamid und Energy Bar, EPDM-Dichtungen und Tri-Fin-Bürsten — 600 kg Flügel, Schwelle von nur 24 mm, Uw 1,1 W/m²K.',
      fr:'Coulissant levant premium à isolation polyamide et Energy bar, joints EPDM et brosses tri-fin — panneaux de 600 kg, seuil de 24 mm seulement, Uw 1,1 W/m²K.',
      es:'Corredera elevable premium con aislamiento de poliamida y Energy bar, juntas EPDM y cepillos tri-fin — hojas de 600 kg, umbral de solo 24 mm, Uw 1,1 W/m²K.',
      it:'Scorrevole alzante premium con isolamento in poliammide ed Energy bar, guarnizioni EPDM e spazzole tri-fin — ante da 600 kg, soglia di soli 24 mm, Uw 1,1 W/m²K.',
    },
    specs: {
      ro:[['Tip sistem','Liftant Glisant (HS)'],['Barieră termică','Poliamidă + Energy bar'],['Etanșare perimetrală','EPDM + perii tri-fin'],['Adâncime toc','70 mm'],['Geam compatibil','până la 50 mm'],['Transfer termic Uw','1,1 W/m²K'],['Izolare fonică','până la 41 dB'],['Antiefracție','RC2'],['Greutate max. foaie','600 kg'],['Șine','Inox / Aluminiu'],['Deschidere','Orizontală'],['Clasă','Supreme — premium'],],
      en:[['System type','Lift & Slide (HS)'],['Thermal barrier','Polyamide + Energy bar'],['Perimeter sealing','EPDM + tri-fin brushes'],['Frame depth','70 mm'],['Compatible glass','up to 50 mm'],['Thermal transfer Uw','1.1 W/m²K'],['Sound insulation','up to 41 dB'],['Anti-burglary','RC2'],['Max. panel weight','600 kg'],['Rails','Stainless / Aluminium'],['Opening','Horizontal'],['Class','Supreme — premium'],],
      de:[['Systemtyp','Hebeschiebe (HS)'],['Thermische Trennung','Polyamid + Energy Bar'],['Perimeterdichtung','EPDM + Tri-Fin-Bürsten'],['Rahmenbreite','70 mm'],['Verglasung','bis 50 mm'],['Wärmedurchgang Uw','1,1 W/m²K'],['Schalldämmung','bis 41 dB'],['Einbruchschutz','RC2'],['Max. Flügelgewicht','600 kg'],['Schienen','Edelstahl / Alu'],['Öffnung','Horizontal'],['Klasse','Supreme — premium'],],
      fr:[['Type système','Coulissant levant'],['Rupture thermique','Polyamide + Energy bar'],['Étanchéité','EPDM + brosses tri-fin'],['Prof. cadre','70 mm'],['Vitrage','jusqu\'à 50 mm'],['Uw','1,1 W/m²K'],['Phonique','jusqu\'à 41 dB'],['Anti-effraction','RC2'],['Poids max.','600 kg'],['Rails','Inox / Alu'],['Ouverture','Horizontale'],['Classe','Supreme — premium'],],
      es:[['Tipo sistema','Corredera elevable'],['Barrera térmica','Poliamida + Energy bar'],['Hermeticidad','EPDM + cepillos tri-fin'],['Prof. marco','70 mm'],['Vidrio','hasta 50 mm'],['Uw','1,1 W/m²K'],['Acústico','hasta 41 dB'],['Antirrobo','RC2'],['Peso máx.','600 kg'],['Raíles','Inox / Alu'],['Apertura','Horizontal'],['Clase','Supreme — premium'],],
      it:[['Tipo sistema','Scorrevole alzante'],['Taglio termico','Poliammide + Energy bar'],['Tenuta','EPDM + spazzole tri-fin'],['Profondità','70 mm'],['Vetro','fino a 50 mm'],['Uw','1,1 W/m²K'],['Acustico','fino a 41 dB'],['Antieffrazione','RC2'],['Peso max.','600 kg'],['Guide','Inox / Alu'],['Apertura','Orizzontale'],['Classe','Supreme — premium'],],
    },
    perf: {
      ro:[['Uw sistem','1,1 W/m²K'],['Prag minim','24 mm'],['Etanșeitate apă','E900'],['Permeabilitate aer','Clasa 4'],['Rezistență vânt','C4/B4'],['Izolare fonică','până la 41 dB'],['Antiefracție','RC2'],],
      en:[['System Uw','1.1 W/m²K'],['Minimum threshold','24 mm'],['Water tightness','E900'],['Air permeability','Class 4'],['Wind resistance','C4/B4'],['Sound insulation','up to 41 dB'],['Anti-burglary','RC2'],],
      de:[['Uw','1,1 W/m²K'],['Mindestschwelle','24 mm'],['Schlagregen','E900'],['Luftdurchlass','Klasse 4'],['Windlast','C4/B4'],['Schalldämmung','bis 41 dB'],['Einbruchschutz','RC2'],],
      fr:[['Uw','1,1 W/m²K'],['Seuil min.','24 mm'],['Eau','E900'],['Air','Cl. 4'],['Vent','C4/B4'],['Son','jusqu\'à 41 dB'],['Anti-effraction','RC2'],],
      es:[['Uw','1,1 W/m²K'],['Umbral mín.','24 mm'],['Agua','E900'],['Aire','Cl. 4'],['Viento','C4/B4'],['Sonido','hasta 41 dB'],['Antirrobo','RC2'],],
      it:[['Uw','1,1 W/m²K'],['Soglia min.','24 mm'],['Acqua','E900'],['Aria','Cl. 4'],['Vento','C4/B4'],['Suono','fino a 41 dB'],['Antieffrazione','RC2'],],
    },
    advantages: {
      ro:['Foi de 600 kg — conexiune vizuală totală interior-exterior cu sticlă de dimensiuni excepționale','Izolație din poliamidă cu Energy bar și spumă izolantă — Uw 1,1 W/m²K','Garnituri EPDM și perii tri-fin perimetrale — etanșare silențioasă și durabilă','Mecanism liftant — ridică foaia la deschidere, deplasare ușoară indiferent de greutate','Geam până la 50 mm — triplu vitrat cu Warm Edge, confort termic și fonic maxim','Ideal pentru terase premium, living deschis și proiecte arhitecturale de autor'],
      en:['600 kg panels — total visual connection between interior and exterior with exceptionally large glass','Polyamide insulation with Energy bar and insulating foam — Uw 1.1 W/m²K','EPDM gaskets and perimeter tri-fin brushes — quiet, durable sealing','Lift mechanism — raises panel on opening, easy movement regardless of weight','Glazing up to 50 mm — triple glazed with Warm Edge, maximum thermal and acoustic comfort','Ideal for premium terraces, open-plan living and signature architectural projects'],
      de:['600 kg Flügel — totale visuelle Verbindung zwischen Innen und Außen mit außergewöhnlich großen Glasscheiben','Dämmung aus Polyamid mit Energy Bar und Dämmschaum — Uw 1,1 W/m²K','EPDM-Dichtungen und umlaufende Tri-Fin-Bürsten — leise und dauerhafte Abdichtung','Hebemechanismus — hebt Flügel beim Öffnen an, leichte Bewegung unabhängig vom Gewicht','Verglasung bis 50 mm — Dreifachverglasung mit Warm Edge, maximaler Wärme- und Schallkomfort','Ideal für Premium-Terrassen, offene Wohnbereiche und signierte Architekturprojekte'],
      fr:['Panneaux 600 kg — connexion visuelle totale intérieur-extérieur avec du verre de dimensions exceptionnelles','Isolation en polyamide avec Energy bar et mousse isolante — Uw 1,1 W/m²K','Joints EPDM et brosses tri-fin périmétriques — étanchéité silencieuse et durable','Mécanisme levant — soulève le panneau à l\'ouverture, mouvement facile quelle que soit la charge','Vitrage jusqu\'à 50 mm — triple vitrage avec Warm Edge, confort thermique et acoustique maximum','Idéal pour terrasses premium, espaces de vie ouverts et projets architecturaux signature'],
      es:['Hojas 600 kg — conexión visual total interior-exterior con vidrio de dimensiones excepcionales','Aislamiento de poliamida con Energy bar y espuma aislante — Uw 1,1 W/m²K','Juntas EPDM y cepillos tri-fin perimetrales — sellado silencioso y duradero','Mecanismo elevable — levanta la hoja al abrir, movimiento fácil independientemente del peso','Vidrio hasta 50 mm — triple acristalamiento con Warm Edge, máximo confort térmico y acústico','Ideal para terrazas premium, espacios de vida abiertos y proyectos arquitectónicos de autor'],
      it:['Ante 600 kg — connessione visiva totale interno-esterno con vetro di dimensioni eccezionali','Isolamento in poliammide con Energy bar e schiuma isolante — Uw 1,1 W/m²K','Guarnizioni EPDM e spazzole tri-fin perimetrali — tenuta silenziosa e durevole','Meccanismo alzante — solleva l\'anta all\'apertura, movimento facile indipendentemente dal peso','Vetro fino a 50 mm — triplo vetro con Warm Edge, massimo comfort termico e acustico','Ideale per terrazze premium, spazi living aperti e progetti architettonici di autore'],
    },
    seo_text: {
      ro:'Sistemul liftant glisant Alumil S 700 SUPREME are izolația termică realizată din bare de poliamidă, completate cu Energy bar Alumil și spumă izolantă, ceea ce îi permite să atingă Uw = 1,1 W/m²K la un sistem de glisare cu foi de dimensiuni excepționale. Etanșarea perimetrală combină garnituri EPDM cu perii tri-fin, care rezistă bine la ciclurile repetate de deschidere și asigură o funcționare silențioasă. Foile de până la 600 kg cu mecanism liftant permit crearea de suprafețe vitrate panoramice fără precedent, specifice vilelor premium, clădirilor de birouri cu design de autor și proiectelor hoteliere. S 700 SUPREME este disponibil cu geam termoizolator până la 50 mm grosime, inclusiv geam triplu SGG Planitherm 4S Evolution cu Warm Edge, în toate culorile RAL și finisaje anodizate. Neofort BIZ asigură proiectarea, furnizarea și montajul sistemelor S 700 SUPREME, cu calcul structural și garanție scrisă.',
      en:'The Alumil S 700 SUPREME lift and slide system is insulated with polyamide bars, complemented by the Alumil Energy bar and insulating foam, which allows it to reach Uw = 1.1 W/m²K on a sliding system with exceptionally large panels. Perimeter sealing combines EPDM gaskets with tri-fin brushes, which stand up well to repeated opening cycles and keep operation quiet. Panels of up to 600 kg with lift mechanism allow the creation of unprecedented panoramic glazed surfaces, typical of premium villas, designer office buildings and hotel projects. S 700 SUPREME is available with thermal insulating glass up to 50 mm thick, including SGG Planitherm 4S Evolution triple glazing with Warm Edge, in all RAL colours and anodised finishes. Neofort BIZ provides the design, supply and installation of S 700 SUPREME systems, with structural calculation and a written warranty.',
      de:'Das Alumil S 700 SUPREME Hebeschiebe-System ist mit Polyamidstegen gedämmt, ergänzt durch die Alumil Energy Bar und Dämmschaum; so erreicht es Uw = 1,1 W/m²K bei einem Schiebesystem mit außergewöhnlich großen Flügeln. Die umlaufende Abdichtung kombiniert EPDM-Dichtungen mit Tri-Fin-Bürsten, die häufigen Öffnungszyklen gut standhalten und einen leisen Lauf sichern. Flügel von bis zu 600 kg mit Hebemechanismus ermöglichen die Schaffung beispielloser Panorama-Glasflächen, typisch für Premium-Villen, Designer-Bürogebäude und Hotelprojekte. S 700 SUPREME ist mit Wärmeschutzglas bis zu 50 mm Dicke erhältlich, einschließlich SGG Planitherm 4S Evolution Dreifachverglasung mit Warm Edge, in allen RAL-Farben und Eloxal-Oberflächen. Neofort BIZ übernimmt Planung, Lieferung und Montage von S 700 SUPREME Systemen, mit Statikberechnung und schriftlicher Garantie.',
      fr:'Le système coulissant levant Alumil S 700 SUPREME est isolé par des barrettes en polyamide, complétées par l\'Energy bar Alumil et une mousse isolante, ce qui lui permet d\'atteindre Uw = 1,1 W/m²K sur un système coulissant aux panneaux de dimensions exceptionnelles. L\'étanchéité périmétrique associe des joints EPDM et des brosses tri-fin, qui résistent bien aux ouvertures répétées et assurent un fonctionnement silencieux. Des panneaux allant jusqu\'à 600 kg avec mécanisme levant permettent la création de surfaces vitrées panoramiques sans précédent, typiques des villas premium, des immeubles de bureaux de design et des projets hôteliers. S 700 SUPREME est disponible avec un vitrage thermoisolant jusqu\'à 50 mm d\'épaisseur, y compris le triple vitrage SGG Planitherm 4S Evolution avec Warm Edge, dans toutes les couleurs RAL et finitions anodisées. Neofort BIZ assure la conception, la fourniture et la pose des systèmes S 700 SUPREME, avec calcul structurel et garantie écrite.',
      es:'El sistema corredera elevable Alumil S 700 SUPREME se aísla con varillas de poliamida, completadas con la Energy bar de Alumil y espuma aislante, lo que le permite alcanzar Uw = 1,1 W/m²K en un sistema deslizante con hojas de dimensiones excepcionales. El sellado perimetral combina juntas EPDM con cepillos tri-fin, que resisten bien los ciclos repetidos de apertura y garantizan un funcionamiento silencioso. Hojas de hasta 600 kg con mecanismo elevable permiten la creación de superficies acristaladas panorámicas sin precedentes, típicas de villas premium, edificios de oficinas de diseño y proyectos hoteleros. S 700 SUPREME está disponible con vidrio termoisolante de hasta 50 mm de espesor, incluido el triple vidrio SGG Planitherm 4S Evolution con Warm Edge, en todos los colores RAL y acabados anodizados. Neofort BIZ se encarga del diseño, el suministro y la instalación de los sistemas S 700 SUPREME, con cálculo estructural y garantía por escrito.',
      it:'Il sistema scorrevole alzante Alumil S 700 SUPREME è isolato con listelli in poliammide, completati dall\'Energy bar Alumil e da schiuma isolante, e raggiunge così Uw = 1,1 W/m²K su un sistema scorrevole con ante di dimensioni eccezionali. La tenuta perimetrale combina guarnizioni EPDM e spazzole tri-fin, che resistono bene alle aperture ripetute e garantiscono un funzionamento silenzioso. Ante fino a 600 kg con meccanismo alzante consentono la creazione di superfici vetrate panoramiche senza precedenti, tipiche di ville premium, edifici per uffici di design e progetti alberghieri. S 700 SUPREME è disponibile con vetro termoisolante fino a 50 mm di spessore, incluso il triplo vetro SGG Planitherm 4S Evolution con Warm Edge, in tutti i colori RAL e finiture anodizzate. Neofort BIZ garantisce progettazione, fornitura e posa dei sistemi S 700 SUPREME, con calcolo strutturale e garanzia scritta.',
    },
  },

  'alumil-s350-smartia': {
    img: '/products/alumil-s350-smartia.avif',
    color: '#162d47',
    serie: { ro:'Smartia S 350', en:'Smartia S 350', de:'Smartia S 350', fr:'Smartia S 350', es:'Smartia S 350', it:'Smartia S 350' },
    category: { ro:'Tâmplărie Aluminiu Alumil', en:'Alumil Aluminium Joinery', de:'Alumil Aluminiumfenster', fr:'Menuiserie Aluminium Alumil', es:'Carpintería Aluminio Alumil', it:'Infissi Alluminio Alumil' },
    name: {
      ro:'Sistem Glisant Alumil S 350 SMARTIA – Ușă Glisantă cu Barieră Termică Accesibilă',
      en:'Alumil S 350 SMARTIA Sliding System – Sliding Door with Accessible Thermal Barrier',
      de:'Alumil S 350 SMARTIA Schiebesystem – preisgünstige Schiebetür mit thermischer Trennung',
      fr:'Coulissant Alumil S 350 SMARTIA – Porte Coulissante à Rupture Thermique Accessible',
      es:'Corredera Alumil S 350 SMARTIA – Puerta Corredera con Barrera Térmica Accesible',
      it:'Scorrevole Alumil S 350 SMARTIA – Porta Scorrevole con Taglio Termico Accessibile',
    },

    tagline: {
      ro:'Glisant Smartia cu poliamidă de 24 mm și perii tri-fin — soluție accesibilă pentru terase și balcoane, Uf de la 2,4 W/m²K.',
      en:'Smartia sliding system with 24 mm polyamide and tri-fin brushes — affordable solution for terraces and balconies, Uf from 2.4 W/m²K.',
      de:'Smartia Schiebesystem mit 24 mm Polyamid und Tri-Fin-Bürsten — günstige Lösung für Terrassen und Balkone, Uf ab 2,4 W/m²K.',
      fr:'Coulissant Smartia avec polyamide 24 mm et brosses tri-fin — solution accessible pour terrasses et balcons, Uf dès 2,4 W/m²K.',
      es:'Corredera Smartia con poliamida de 24 mm y cepillos tri-fin — solución accesible para terrazas y balcones, Uf desde 2,4 W/m²K.',
      it:'Scorrevole Smartia con poliammide da 24 mm e spazzole tri-fin — soluzione accessibile per terrazze e balconi, Uf da 2,4 W/m²K.',
    },

    specs: {
      ro:[['Tip sistem','Glisant'],['Izolație termică','Poliamidă 24 mm + thermoplastic'],['Etanșare','Perii tri-fin perimetrale, pe două niveluri'],['Adâncime canat','35 mm'],['Geam compatibil','dublu, până la 28 mm'],['Transfer termic Uf','2,4 – 4,7 W/m²K'],['Izolare fonică','până la 38 dB'],['Greutate max. canat','180 kg'],['Montant de îmbinare','25 mm vizibil'],['Deschidere','Orizontală, inclusiv în buzunar'],['Clasă','Smartia — economic'],],
      en:[['System type','Sliding'],['Thermal insulation','Polyamide 24 mm + thermoplastic'],['Sealing','Perimeter tri-fin brushes, two levels'],['Sash depth','35 mm'],['Compatible glass','double, up to 28 mm'],['Thermal transfer Uf','2.4 – 4.7 W/m²K'],['Sound insulation','up to 38 dB'],['Max. sash weight','180 kg'],['Interlocking profile','25 mm visible'],['Opening','Horizontal, pocket included'],['Class','Smartia — economic'],],
      de:[['Systemtyp','Schiebesystem'],['Wärmedämmung','Polyamid 24 mm + Thermoplast'],['Dichtung','Umlaufende Tri-Fin-Bürsten, zwei Ebenen'],['Flügeltiefe','35 mm'],['Verglasung','zweifach, bis 28 mm'],['Wärmedurchgang Uf','2,4 – 4,7 W/m²K'],['Schalldämmung','bis 38 dB'],['Max. Flügelgewicht','180 kg'],['Mittelstoß','25 mm sichtbar'],['Öffnung','Horizontal, auch als Wandtasche'],['Klasse','Smartia — wirtschaftlich'],],
      fr:[['Type','Coulissant'],['Isolation thermique','Polyamide 24 mm + thermoplastique'],['Étanchéité','Brosses tri-fin sur deux niveaux'],['Prof. ouvrant','35 mm'],['Vitrage','double, jusqu\'à 28 mm'],['Uf','2,4 – 4,7 W/m²K'],['Phonique','jusqu\'à 38 dB'],['Poids max.','180 kg'],['Chicane','25 mm visible'],['Ouverture','Horizontale, galandage compris'],['Classe','Smartia — économique'],],
      es:[['Tipo','Corredera'],['Aislamiento térmico','Poliamida 24 mm + termoplástico'],['Hermeticidad','Cepillos tri-fin en dos niveles'],['Prof. hoja','35 mm'],['Vidrio','doble, hasta 28 mm'],['Uf','2,4 – 4,7 W/m²K'],['Acústico','hasta 38 dB'],['Peso máx.','180 kg'],['Perfil central','25 mm visto'],['Apertura','Horizontal, también en cajón'],['Clase','Smartia — económico'],],
      it:[['Tipo','Scorrevole'],['Isolamento termico','Poliammide 24 mm + termoplastico'],['Tenuta','Spazzole tri-fin su due livelli'],['Profondità anta','35 mm'],['Vetro','doppio, fino a 28 mm'],['Uf','2,4 – 4,7 W/m²K'],['Acustico','fino a 38 dB'],['Peso max.','180 kg'],['Montante centrale','25 mm a vista'],['Apertura','Orizzontale, anche a scomparsa'],['Classe','Smartia — economico'],],
    },

    perf: {
      ro:[['Coeficient Uf','de la 2,4 W/m²K'],['Etanșeitate apă','Clasa 7A'],['Permeabilitate aer','Clasa 4'],['Rezistență vânt','C2 / B3'],['Izolare fonică','până la 38 dB'],],
      en:[['Frame Uf','from 2.4 W/m²K'],['Water tightness','Class 7A'],['Air permeability','Class 4'],['Wind resistance','C2 / B3'],['Sound insulation','up to 38 dB'],],
      de:[['Uf','ab 2,4 W/m²K'],['Schlagregen','Klasse 7A'],['Luftdurchlass','Klasse 4'],['Windlast','C2 / B3'],['Schalldämmung','bis 38 dB'],],
      fr:[['Uf','dès 2,4 W/m²K'],['Eau','Cl. 7A'],['Air','Cl. 4'],['Vent','C2 / B3'],['Son','jusqu\'à 38 dB'],],
      es:[['Uf','desde 2,4 W/m²K'],['Agua','Cl. 7A'],['Aire','Cl. 4'],['Viento','C2 / B3'],['Sonido','hasta 38 dB'],],
      it:[['Uf','da 2,4 W/m²K'],['Acqua','Cl. 7A'],['Aria','Cl. 4'],['Vento','C2 / B3'],['Suono','fino a 38 dB'],],
    },

    advantages: {
      ro:['Cel mai accesibil sistem glisant Alumil cu barieră termică — superior glisantelor fără barieră','Perii tri-fin perimetrale pe două niveluri — etanșare silențioasă și durabilă','Montant de îmbinare de doar 25 mm vizibil — mai multă lumină și vedere','Varianta S 350 LT are prag jos — potrivită la renovări și pentru acces fără trepte','Finisaj RAL complet — toate culorile standard și anodizate','Geam dublu termoizolant de până la 28 mm — optim pentru proiecte cu buget limitat'],
      en:['Most affordable Alumil sliding system with a thermal break — better than sliding doors without one','Perimeter tri-fin brushes on two levels — quiet, durable sealing','Interlocking profile only 25 mm wide in view — more light and view','The S 350 LT version has a low threshold — suited to renovations and step-free access','Full RAL finish — all standard and anodised colours','Double insulating glass up to 28 mm — ideal for budget-conscious projects'],
      de:['Günstigstes Alumil-Schiebesystem mit thermischer Trennung — besser als Schiebetüren ohne Trennung','Umlaufende Tri-Fin-Bürsten auf zwei Ebenen — leise, dauerhafte Abdichtung','Mittelstoß nur 25 mm sichtbar — mehr Licht und Ausblick','Die Variante S 350 LT hat eine niedrige Schwelle — passend für Sanierungen und stufenlosen Zugang','Vollständige RAL-Oberfläche — alle Standard- und Eloxalfarben','Zweifach-Isolierglas bis 28 mm — ideal für Projekte mit begrenztem Budget'],
      fr:['Le coulissant Alumil à rupture thermique le plus accessible — supérieur aux coulissants sans rupture','Brosses tri-fin périmétriques sur deux niveaux — étanchéité silencieuse et durable','Chicane de seulement 25 mm visible — plus de lumière et de vue','La version S 350 LT a un seuil bas — adaptée à la rénovation et à l\'accès de plain-pied','Finition RAL complète — toutes les couleurs standard et anodisées','Double vitrage isolant jusqu\'à 28 mm — idéal pour les projets à budget limité'],
      es:['La corredera Alumil con rotura térmica más accesible — mejor que las correderas sin rotura','Cepillos tri-fin perimetrales en dos niveles — sellado silencioso y duradero','Perfil central de solo 25 mm visto — más luz y vistas','La versión S 350 LT tiene umbral bajo — adecuada para reformas y acceso sin escalón','Acabado RAL completo — todos los colores estándar y anodizados','Doble vidrio aislante de hasta 28 mm — óptimo para proyectos con presupuesto limitado'],
      it:['Lo scorrevole Alumil a taglio termico più accessibile — migliore degli scorrevoli senza taglio','Spazzole tri-fin perimetrali su due livelli — tenuta silenziosa e durevole','Montante centrale di soli 25 mm a vista — più luce e più vista','La versione S 350 LT ha la soglia bassa — adatta alle ristrutturazioni e all\'accesso senza gradino','Finitura RAL completa — tutti i colori standard e anodizzati','Doppio vetro isolante fino a 28 mm — ottimale per progetti con budget limitato'],
    },

    seo_text: {
      ro:'Sistemul glisant Alumil S 350 SMARTIA este soluția pentru proiectele rezidențiale care vor o ușă glisantă cu barieră termică la cel mai competitiv cost din gama Alumil. Izolația din poliamidă de 24 mm și thermoplastic dă un Uf între 2,4 și 4,7 W/m²K, după profil — mult mai bine decât la glisantele metalice fără barieră termică, care fac condens pe prag iarna. Etanșarea perimetrală cu perii tri-fin pe două niveluri asigură o glisare silențioasă, iar după datele Alumil sistemul are etanșeitate la apă clasa 7A, permeabilitate la aer clasa 4 și rezistență la vânt C2/B3. Un canat poate cântări până la 180 kg, iar geamul dublu poate avea până la 28 mm. S 350 se poate monta și cu canat care intră în perete, iar varianta S 350 LT are prag jos, potrivit la renovări. Neofort BIZ furnizează și montează S 350 SMARTIA în toate culorile RAL, cu consultanță privind dimensionarea și compatibilitatea cu structura existentă.',
      en:'The Alumil S 350 SMARTIA sliding system is the solution for residential projects that want a thermally broken sliding door at the most competitive cost in the Alumil range. Its 24 mm polyamide and thermoplastic insulation gives a Uf between 2.4 and 4.7 W/m²K depending on the profile — far better than metal sliding doors without a thermal break, which form condensation on the threshold in winter. Perimeter sealing with tri-fin brushes on two levels keeps the sliding quiet, and according to Alumil the system reaches water tightness class 7A, air permeability class 4 and wind resistance C2/B3. A sash can weigh up to 180 kg and the double glazing can be up to 28 mm thick. The S 350 can also be fitted as a pocket door that slides into the wall, and the S 350 LT version has a low threshold, suited to renovations. Neofort BIZ supplies and installs the S 350 SMARTIA in all RAL colours, with advice on sizing and compatibility with the existing structure.',
      de:'Das Schiebesystem Alumil S 350 SMARTIA ist die Lösung für Wohnprojekte, die eine Schiebetür mit thermischer Trennung zum günstigsten Preis der Alumil-Reihe wünschen. Die Dämmung aus 24 mm Polyamid und Thermoplast ergibt je nach Profil einen Uf zwischen 2,4 und 4,7 W/m²K — deutlich besser als metallische Schiebetüren ohne thermische Trennung, an deren Schwelle sich im Winter Kondensat bildet. Die umlaufende Abdichtung mit Tri-Fin-Bürsten auf zwei Ebenen sorgt für leises Gleiten, und laut Alumil erreicht das System Schlagregendichtheit Klasse 7A, Luftdurchlässigkeit Klasse 4 und Windwiderstand C2/B3. Ein Flügel darf bis zu 180 kg wiegen, das Zweifachglas bis 28 mm dick sein. S 350 lässt sich auch als Wandtaschen-Schiebetür einbauen, und die Variante S 350 LT hat eine niedrige Schwelle, passend für Sanierungen. Neofort BIZ liefert und montiert S 350 SMARTIA in allen RAL-Farben, mit Beratung zur Dimensionierung und zur Kompatibilität mit der vorhandenen Struktur.',
      fr:'Le coulissant Alumil S 350 SMARTIA est la solution pour les projets résidentiels qui veulent une porte coulissante à rupture thermique au coût le plus compétitif de la gamme Alumil. Son isolation en polyamide de 24 mm et thermoplastique donne un Uf entre 2,4 et 4,7 W/m²K selon le profilé — bien mieux que les coulissants métalliques sans rupture thermique, qui font de la condensation sur le seuil en hiver. L\'étanchéité périmétrique par brosses tri-fin sur deux niveaux assure un coulissement silencieux et, selon Alumil, le système atteint une étanchéité à l\'eau de classe 7A, une perméabilité à l\'air de classe 4 et une résistance au vent C2/B3. Un vantail peut peser jusqu\'à 180 kg et le double vitrage atteindre 28 mm. Le S 350 se pose aussi en galandage, et la version S 350 LT a un seuil bas, adapté à la rénovation. Neofort BIZ fournit et pose le S 350 SMARTIA dans toutes les couleurs RAL, avec conseil sur le dimensionnement et la compatibilité avec la structure existante.',
      es:'La corredera Alumil S 350 SMARTIA es la solución para proyectos residenciales que quieren una puerta corredera con rotura de puente térmico al coste más competitivo de la gama Alumil. Su aislamiento de poliamida de 24 mm y termoplástico da un Uf entre 2,4 y 4,7 W/m²K según el perfil — mucho mejor que las correderas metálicas sin rotura térmica, que forman condensación en el umbral en invierno. El sellado perimetral con cepillos tri-fin en dos niveles mantiene el deslizamiento silencioso y, según Alumil, el sistema alcanza estanqueidad al agua clase 7A, permeabilidad al aire clase 4 y resistencia al viento C2/B3. Una hoja puede pesar hasta 180 kg y el doble vidrio tener hasta 28 mm. La S 350 se puede instalar también como corredera en cajón, dentro del muro, y la versión S 350 LT tiene umbral bajo, adecuada para reformas. Neofort BIZ suministra e instala la S 350 SMARTIA en todos los colores RAL, con asesoramiento sobre dimensionado y compatibilidad con la estructura existente.',
      it:'Lo scorrevole Alumil S 350 SMARTIA è la soluzione per i progetti residenziali che vogliono una porta scorrevole a taglio termico al costo più competitivo della gamma Alumil. L\'isolamento in poliammide da 24 mm e termoplastico dà un Uf tra 2,4 e 4,7 W/m²K secondo il profilo — molto meglio degli scorrevoli metallici senza taglio termico, che fanno condensa sulla soglia d\'inverno. La tenuta perimetrale con spazzole tri-fin su due livelli rende lo scorrimento silenzioso e, secondo Alumil, il sistema raggiunge tenuta all\'acqua classe 7A, permeabilità all\'aria classe 4 e resistenza al vento C2/B3. Un\'anta può pesare fino a 180 kg e il doppio vetro arrivare a 28 mm. L\'S 350 si può posare anche a scomparsa nel muro, e la versione S 350 LT ha la soglia bassa, adatta alle ristrutturazioni. Neofort BIZ fornisce e posa l\'S 350 SMARTIA in tutti i colori RAL, con consulenza su dimensionamento e compatibilità con la struttura esistente.',
    },

  },

  'alumil-sf85-supreme': {
    img: '/products/alumil-sf85-supreme.avif',
    color: '#162d47',
    serie: { ro:'Supreme SF 85', en:'Supreme SF 85', de:'Supreme SF 85', fr:'Supreme SF 85', es:'Supreme SF 85', it:'Supreme SF 85' },
    category: { ro:'Tâmplărie Aluminiu Alumil', en:'Alumil Aluminium Joinery', de:'Alumil Aluminiumfenster', fr:'Menuiserie Aluminium Alumil', es:'Carpintería Aluminio Alumil', it:'Infissi Alluminio Alumil' },
    name: {
      ro:'Sistem Armonic Alumil SF 85 SUPREME – Uși Pliante Premium cu Barieră Termică 40 mm',
      en:'Alumil SF 85 SUPREME Folding System – Premium Folding Doors with 40 mm Thermal Break',
      de:'Alumil SF 85 SUPREME Faltsystem – Premium Falttüren mit 40-mm-Wärmedämmung',
      fr:'Système Pliant Alumil SF 85 SUPREME – Portes Pliantes Premium avec Rupture Thermique 40 mm',
      es:'Sistema Plegable Alumil SF 85 SUPREME – Puertas Plegables Premium con Rotura Térmica 40 mm',
      it:'Sistema Pieghevole Alumil SF 85 SUPREME – Porte Pieghevoli Premium con Taglio Termico 40 mm',
    },
    tagline: {
      ro:'Armonic premium cu foaie de 85 mm, poliamidă dublă de 40 mm și Energy bar — deschidere 100%, foi până la 200 kg, RC2 și PAS24, Uf de la 1,0 W/m²K.',
      en:'Premium folding system with 85 mm sashes, double 40 mm polyamide and Energy bar — 100% opening, sashes up to 200 kg, RC2 and PAS24, Uf from 1.0 W/m²K.',
      de:'Premium-Faltsystem mit 85-mm-Flügeln, doppeltem 40-mm-Polyamid und Energy Bar — 100% Öffnung, Flügel bis 200 kg, RC2 und PAS24, Uf ab 1,0 W/m²K.',
      fr:'Pliant premium à vantaux de 85 mm, double polyamide de 40 mm et Energy bar — ouverture 100%, vantaux jusqu\'à 200 kg, RC2 et PAS24, Uf dès 1,0 W/m²K.',
      es:'Plegable premium con hojas de 85 mm, doble poliamida de 40 mm y Energy bar — apertura 100%, hojas de hasta 200 kg, RC2 y PAS24, Uf desde 1,0 W/m²K.',
      it:'Pieghevole premium con ante da 85 mm, doppia poliammide da 40 mm ed Energy bar — apertura 100%, ante fino a 200 kg, RC2 e PAS24, Uf da 1,0 W/m²K.',
    },
    specs: {
      ro:[['Tip sistem','Armonic (pliant)'],['Lățime foaie (profil)','85 mm'],['Barieră termică','Poliamidă dublă 40 mm + Energy bar'],['Garnitură principală','EPDM coextrudat cu spumă'],['Configurații','Număr par sau impar de foi, cu ușă'],['Deschidere','Stânga / dreapta / colț'],['Geam compatibil','20–53 mm (structural 34–75 mm)'],['Transfer termic Uf','de la 1,0 W/m²K'],['Permeabilitate aer','Clasa 4'],['Antiefracție','RC2 și PAS24'],['Dimensiuni max. foaie','1,5 × 4,0 m'],['Greutate max. foaie','200 kg'],],
      en:[['System type','Folding (harmonic)'],['Sash width (profile)','85 mm'],['Thermal barrier','Double 40 mm polyamide + Energy bar'],['Main gasket','Co-extruded EPDM with foam'],['Configurations','Odd or even number of sashes, with door'],['Opening','Left / right / corner'],['Compatible glass','20–53 mm (structural 34–75 mm)'],['Thermal transfer Uf','from 1.0 W/m²K'],['Air permeability','Class 4'],['Anti-burglary','RC2 and PAS24'],['Max. sash size','1.5 × 4.0 m'],['Max. panel weight','200 kg'],],
      de:[['Systemtyp','Faltsystem'],['Flügelbreite (Profil)','85 mm'],['Thermische Trennung','Doppeltes 40-mm-Polyamid + Energy Bar'],['Hauptdichtung','Koextrudiertes EPDM mit Schaum'],['Konfigurationen','Gerade oder ungerade Flügelzahl, mit Tür'],['Öffnung','Links / rechts / Ecke'],['Verglasung','20–53 mm (Structural 34–75 mm)'],['Wärmedurchgang Uf','ab 1,0 W/m²K'],['Luftdurchlässigkeit','Klasse 4'],['Einbruchschutz','RC2 und PAS24'],['Max. Flügelmaß','1,5 × 4,0 m'],['Max. Flügelgewicht','200 kg'],],
      fr:[['Type','Pliant (harmonique)'],['Largeur vantail (profil)','85 mm'],['Rupture thermique','Double polyamide 40 mm + Energy bar'],['Joint principal','EPDM coextrudé avec mousse'],['Configurations','Nombre pair ou impair de vantaux, avec porte'],['Ouverture','G / D / angle'],['Vitrage','20–53 mm (structurel 34–75 mm)'],['Uf','dès 1,0 W/m²K'],['Air','Classe 4'],['Anti-effraction','RC2 et PAS24'],['Vantail max.','1,5 × 4,0 m'],['Poids max.','200 kg'],],
      es:[['Tipo','Plegable (armónico)'],['Ancho de hoja (perfil)','85 mm'],['Barrera térmica','Doble poliamida 40 mm + Energy bar'],['Junta principal','EPDM coextruido con espuma'],['Configuraciones','Número par o impar de hojas, con puerta'],['Apertura','Izq / Der / esquina'],['Vidrio','20–53 mm (estructural 34–75 mm)'],['Uf','desde 1,0 W/m²K'],['Aire','Clase 4'],['Antirrobo','RC2 y PAS24'],['Hoja máx.','1,5 × 4,0 m'],['Peso máx.','200 kg'],],
      it:[['Tipo','Pieghevole'],['Larghezza anta (profilo)','85 mm'],['Taglio termico','Doppia poliammide 40 mm + Energy bar'],['Guarnizione principale','EPDM coestruso con schiuma'],['Configurazioni','Numero pari o dispari di ante, con porta'],['Apertura','Sin / Des / angolo'],['Vetro','20–53 mm (strutturale 34–75 mm)'],['Uf','da 1,0 W/m²K'],['Aria','Classe 4'],['Antieffrazione','RC2 e PAS24'],['Anta max.','1,5 × 4,0 m'],['Peso max.','200 kg'],],
    },
    perf: {
      ro:[['Coeficient Uf','de la 1,0 W/m²K'],['Uw sistem','de la 1,0 W/m²K'],['Etanșeitate apă','7A (9A cu glaf)'],['Rezistență vânt','C3/B3'],['Permeabilitate aer','Clasa 4'],['Antiefracție','RC2 / PAS24'],],
      en:[['Frame Uf','from 1.0 W/m²K'],['System Uw','from 1.0 W/m²K'],['Water tightness','7A (9A with subsill)'],['Wind resistance','C3/B3'],['Air permeability','Class 4'],['Anti-burglary','RC2 / PAS24'],],
      de:[['Uf','ab 1,0 W/m²K'],['Uw','ab 1,0 W/m²K'],['Schlagregen','7A (9A mit Bank)'],['Windlast','C3/B3'],['Luftdurchlässigkeit','Klasse 4'],['Einbruchschutz','RC2 / PAS24'],],
      fr:[['Uf','dès 1,0 W/m²K'],['Uw','dès 1,0 W/m²K'],['Eau','7A (9A avec appui)'],['Vent','C3/B3'],['Air','Cl. 4'],['Anti-effraction','RC2 / PAS24'],],
      es:[['Uf','desde 1,0 W/m²K'],['Uw','desde 1,0 W/m²K'],['Agua','7A (9A con vierteaguas)'],['Viento','C3/B3'],['Aire','Cl. 4'],['Antirrobo','RC2 / PAS24'],],
      it:[['Uf','da 1,0 W/m²K'],['Uw','da 1,0 W/m²K'],['Acqua','7A (9A con davanzale)'],['Vento','C3/B3'],['Aria','Cl. 4'],['Antieffrazione','RC2 / PAS24'],],
    },
    advantages: {
      ro:['Deschidere 100% — foi pliante de până la 1,5 × 4,0 m și 200 kg, conexiune completă interior-exterior','Poliamidă dublă de 40 mm cu Energy bar și spumă izolantă — Uf de la 1,0 W/m²K pentru un sistem pliant','RC2 și PAS24 — clasă antiefracție europeană și certificare britanică, închidere în 5 puncte la ușă','Geam de 20–53 mm (structural până la 75 mm) — acceptă geam triplu și fonoizolant','Disponibil cu pivot de colț 90° — sisteme de colț pentru deschidere completă a două fațade perpendiculare','Ideal pentru HoReCa, birouri, terase premium, showroom-uri și proiecte arhitecturale'],
      en:['100% opening — folding sashes up to 1.5 × 4.0 m and 200 kg, complete interior-exterior connection','Double 40 mm polyamide with Energy bar and insulating foam — Uf from 1.0 W/m²K for a folding system','RC2 and PAS24 — European burglar-resistance class and British certification, 5-point locking on the door','Glazing 20–53 mm (structural up to 75 mm) — takes triple and acoustic glass','Available with 90° corner pivot — corner systems for full opening of two perpendicular facades','Ideal for HoReCa, offices, premium terraces, showrooms and architectural projects'],
      de:['100% Öffnung — Faltflügel bis 1,5 × 4,0 m und 200 kg, vollständige Innen-Außen-Verbindung','Doppeltes 40-mm-Polyamid mit Energy Bar und Dämmschaum — Uf ab 1,0 W/m²K für ein Faltsystem','RC2 und PAS24 — europäische Widerstandsklasse und britische Zertifizierung, 5-Punkt-Verriegelung an der Tür','Verglasung 20–53 mm (Structural bis 75 mm) — nimmt Dreifach- und Schallschutzglas auf','Erhältlich mit 90° Eckdrehpunkt — Ecksysteme für vollständige Öffnung zweier senkrechter Fassaden','Ideal für HoReCa, Büros, Premium-Terrassen, Showrooms und Architekturprojekte'],
      fr:['Ouverture 100% — vantaux pliants jusqu\'à 1,5 × 4,0 m et 200 kg, connexion intérieur-extérieur complète','Double polyamide de 40 mm avec Energy bar et mousse isolante — Uf dès 1,0 W/m²K pour un système pliant','RC2 et PAS24 — classe anti-effraction européenne et certification britannique, fermeture 5 points sur la porte','Vitrage de 20 à 53 mm (structurel jusqu\'à 75 mm) — accepte le triple vitrage et le vitrage acoustique','Disponible avec pivot d\'angle 90° — systèmes d\'angle pour ouverture totale de deux façades perpendiculaires','Idéal pour HoReCa, bureaux, terrasses premium, showrooms et projets architecturaux'],
      es:['Apertura 100% — hojas plegables de hasta 1,5 × 4,0 m y 200 kg, conexión completa interior-exterior','Doble poliamida de 40 mm con Energy bar y espuma aislante — Uf desde 1,0 W/m²K para un sistema plegable','RC2 y PAS24 — clase antirrobo europea y certificación británica, cierre de 5 puntos en la puerta','Vidrio de 20–53 mm (estructural hasta 75 mm) — admite triple vidrio y vidrio acústico','Disponible con pivote de esquina 90° — sistemas de esquina para apertura total de dos fachadas perpendiculares','Ideal para HoReCa, oficinas, terrazas premium, showrooms y proyectos arquitectónicos'],
      it:['Apertura 100% — ante pieghevoli fino a 1,5 × 4,0 m e 200 kg, connessione completa interno-esterno','Doppia poliammide da 40 mm con Energy bar e schiuma isolante — Uf da 1,0 W/m²K per un sistema pieghevole','RC2 e PAS24 — classe antieffrazione europea e certificazione britannica, chiusura a 5 punti sulla porta','Vetro da 20–53 mm (strutturale fino a 75 mm) — accetta triplo vetro e vetro acustico','Disponibile con perno angolare 90° — sistemi angolari per apertura completa di due facciate perpendicolari','Ideale per HoReCa, uffici, terrazze premium, showroom e progetti architettonici'],
    },
    seo_text: {
      ro:'Sistemul armonic Alumil SF 85 SUPREME este varianta premium a sistemelor pliante Alumil: foaie de 85 mm și barieră termică din poliamidă dublă de 40 mm, completată cu Energy bar Alumil și spumă izolantă din polietilenă. Combinația asigură Uf de la 1,0 W/m²K pentru un sistem pliant, o performanță apropiată de a multor sisteme de ferestre. Etanșeitatea la apă este clasa 7A (9A cu glaf), permeabilitatea la aer clasa 4, iar rezistența la vânt C3/B3, toate testate la ift Rosenheim. La antiefracție, sistemul are clasa RC2 și certificare PAS24 (Marea Britanie), cu închidere în 5 puncte la ușă și în 4 puncte la foile intermediare. Foile ajung la 1,5 m lățime, 4,0 m înălțime și 200 kg, în configurații cu număr par sau impar de foi, cu deschidere la stânga, la dreapta sau în colț, ceea ce permite deschiderea simultană a două fațade perpendiculare — o soluție potrivită pentru baruri, restaurante, hoteluri, showroom-uri și vile. Neofort BIZ furnizează și montează SF 85 SUPREME, cu calcul structural și garanție scrisă.',
      en:'The Alumil SF 85 SUPREME folding system is the premium option among Alumil folding systems: 85 mm sashes and a thermal break of double 40 mm polyamide, complemented by the Alumil Energy bar and polyethylene insulating foam. This gives Uf from 1.0 W/m²K for a folding system, close to the performance of many window systems. Water tightness is class 7A (9A with a subsill), air permeability class 4 and wind resistance C3/B3, all tested at ift Rosenheim. For burglar resistance the system has class RC2 and PAS24 certification (UK), with 5-point locking on the door and 4-point locking on the intermediate sashes. Sashes reach 1.5 m in width, 4.0 m in height and 200 kg, in configurations with an odd or even number of sashes, opening to the left, to the right or around a corner, so two perpendicular facades can be opened at the same time — a good fit for bars, restaurants, hotels, showrooms and villas. Neofort BIZ supplies and installs SF 85 SUPREME, with structural calculation and a written warranty.',
      de:'Das Alumil SF 85 SUPREME Faltsystem ist die Premiumvariante unter den Alumil-Faltsystemen: 85-mm-Flügel und eine thermische Trennung aus doppeltem 40-mm-Polyamid, ergänzt durch die Alumil Energy Bar und Dämmschaum aus Polyethylen. Damit erreicht es Uf ab 1,0 W/m²K für ein Faltsystem, nahe an vielen Fenstersystemen. Die Schlagregendichtheit liegt bei Klasse 7A (9A mit Fensterbank), die Luftdurchlässigkeit bei Klasse 4 und die Windlast bei C3/B3, alle geprüft beim ift Rosenheim. Beim Einbruchschutz hat das System die Klasse RC2 und eine PAS24-Zertifizierung (Großbritannien), mit 5-Punkt-Verriegelung an der Tür und 4-Punkt-Verriegelung an den Zwischenflügeln. Die Flügel erreichen 1,5 m Breite, 4,0 m Höhe und 200 kg, in Konfigurationen mit gerader oder ungerader Flügelzahl, öffnend nach links, rechts oder über Eck, sodass sich zwei senkrecht zueinander stehende Fassaden gleichzeitig öffnen lassen — passend für Bars, Restaurants, Hotels, Showrooms und Villen. Neofort BIZ liefert und montiert SF 85 SUPREME, mit Statikberechnung und schriftlicher Garantie.',
      fr:'Le système pliant Alumil SF 85 SUPREME est la version haut de gamme des systèmes pliants Alumil : vantaux de 85 mm et rupture thermique en double polyamide de 40 mm, complétée par l\'Energy bar Alumil et une mousse isolante en polyéthylène. Il atteint ainsi un Uf dès 1,0 W/m²K pour un système pliant, proche de nombreux systèmes de fenêtres. L\'étanchéité à l\'eau est de classe 7A (9A avec appui), la perméabilité à l\'air de classe 4 et la résistance au vent C3/B3, toutes testées à l\'ift Rosenheim. Côté anti-effraction, le système est classé RC2 et certifié PAS24 (Royaume-Uni), avec fermeture 5 points sur la porte et 4 points sur les vantaux intermédiaires. Les vantaux atteignent 1,5 m de large, 4,0 m de haut et 200 kg, dans des configurations à nombre pair ou impair de vantaux, ouvrant à gauche, à droite ou en angle, ce qui permet d\'ouvrir en même temps deux façades perpendiculaires — une solution adaptée aux bars, restaurants, hôtels, showrooms et villas. Neofort BIZ fournit et pose le SF 85 SUPREME, avec calcul structurel et garantie écrite.',
      es:'El sistema plegable Alumil SF 85 SUPREME es la opción premium de los sistemas plegables de Alumil: hojas de 85 mm y rotura de puente térmico de doble poliamida de 40 mm, completada con la Energy bar de Alumil y espuma aislante de polietileno. Así alcanza un Uf desde 1,0 W/m²K para un sistema plegable, cerca de muchos sistemas de ventanas. La estanqueidad al agua es de clase 7A (9A con vierteaguas), la permeabilidad al aire de clase 4 y la resistencia al viento C3/B3, todas ensayadas en ift Rosenheim. En seguridad, el sistema tiene clase RC2 y certificación PAS24 (Reino Unido), con cierre de 5 puntos en la puerta y de 4 puntos en las hojas intermedias. Las hojas llegan a 1,5 m de ancho, 4,0 m de alto y 200 kg, en configuraciones con número par o impar de hojas, con apertura a la izquierda, a la derecha o en esquina, lo que permite abrir a la vez dos fachadas perpendiculares — una solución adecuada para bares, restaurantes, hoteles, showrooms y villas. Neofort BIZ suministra e instala el SF 85 SUPREME, con cálculo estructural y garantía por escrito.',
      it:'Il sistema pieghevole Alumil SF 85 SUPREME è la versione premium dei sistemi pieghevoli Alumil: ante da 85 mm e taglio termico in doppia poliammide da 40 mm, completato dall\'Energy bar Alumil e da schiuma isolante in polietilene. Raggiunge così un Uf da 1,0 W/m²K per un sistema pieghevole, vicino a molti sistemi di finestre. La tenuta all\'acqua è di classe 7A (9A con davanzale), la permeabilità all\'aria di classe 4 e la resistenza al vento C3/B3, tutte provate presso l\'ift Rosenheim. Per l\'antieffrazione il sistema ha classe RC2 e certificazione PAS24 (Regno Unito), con chiusura a 5 punti sulla porta e a 4 punti sulle ante intermedie. Le ante arrivano a 1,5 m di larghezza, 4,0 m di altezza e 200 kg, in configurazioni con numero pari o dispari di ante, con apertura a sinistra, a destra o ad angolo, così da aprire contemporaneamente due facciate perpendicolari — una soluzione adatta a bar, ristoranti, hotel, showroom e ville. Neofort BIZ fornisce e posa l\'SF 85 SUPREME, con calcolo strutturale e garanzia scritta.',
    },
  },

  'alumil-m19800-smartia': {
    img: '/products/alumil-m19800-smartia.avif',
    color: '#162d47',
    serie: { ro:'Smartia M 19800', en:'Smartia M 19800', de:'Smartia M 19800', fr:'Smartia M 19800', es:'Smartia M 19800', it:'Smartia M 19800' },
    category: { ro:'Tâmplărie Aluminiu Alumil', en:'Alumil Aluminium Joinery', de:'Alumil Aluminiumfenster', fr:'Menuiserie Aluminium Alumil', es:'Carpintería Aluminio Alumil', it:'Infissi Alluminio Alumil' },
    name: {
      ro:'Sistem Armonic Alumil M 19800 SMARTIA – Uși Pliante Accesibile pentru Terase',
      en:'Alumil M 19800 SMARTIA Folding System – Accessible Folding Doors for Terraces',
      de:'Alumil M 19800 SMARTIA Faltsystem – Preisgünstige Falttüren für Terrassen',
      fr:'Système Pliant Alumil M 19800 SMARTIA – Portes Pliantes Accessibles pour Terrasses',
      es:'Sistema Plegable Alumil M 19800 SMARTIA – Puertas Plegables Accesibles para Terrazas',
      it:'Sistema Pieghevole Alumil M 19800 SMARTIA – Porte Pieghevoli Accessibili per Terrazze',
    },
    tagline: {
      ro:'Cel mai accesibil sistem armonic Alumil cu barieră termică dublă de 18 mm — foi de până la 1,0 × 2,5 m și 80 kg, Uf 1,9 W/m²K, apă 4A, vânt C1/B1.',
      en:'The most affordable Alumil folding system with a double 18 mm thermal break — panels up to 1.0 × 2.5 m and 80 kg, Uf 1.9 W/m²K, water 4A, wind C1/B1.',
      de:'Das preisgünstigste Alumil-Faltsystem mit doppelter 18-mm-Wärmedämmung — Flügel bis 1,0 × 2,5 m und 80 kg, Uf 1,9 W/m²K, Wasser 4A, Wind C1/B1.',
      fr:'Le système pliant Alumil le plus accessible, avec double rupture thermique de 18 mm — vantaux jusqu’à 1,0 × 2,5 m et 80 kg, Uf 1,9 W/m²K, eau 4A, vent C1/B1.',
      es:'El sistema plegable Alumil más asequible, con doble rotura térmica de 18 mm — hojas de hasta 1,0 × 2,5 m y 80 kg, Uf 1,9 W/m²K, agua 4A, viento C1/B1.',
      it:'Il sistema pieghevole Alumil più accessibile, con doppio taglio termico da 18 mm — ante fino a 1,0 × 2,5 m e 80 kg, Uf 1,9 W/m²K, acqua 4A, vento C1/B1.',
    },
    specs: {
      ro:[['Tip sistem','Armonic (pliant), foi suspendate pe sus'],['Barieră termică','dublă, poliamidă 18 mm'],['Garnituri','garnitură principală dublă EPDM'],['Lățime profil foaie','50 mm'],['Geam compatibil','24–32 mm'],['Transfer termic Uf','1,9 W/m²K'],['Înălțime max. foaie','2,5 m'],['Lățime max. foaie','1,0 m'],['Greutate max. foaie','80 kg'],['Închidere','zăvoare duble'],['Tipologii','7 configurații de deschidere'],['Clasă','Smartia — economic']],
      en:[['System type','Folding (bi-fold), top-hung panels'],['Thermal break','double, 18 mm polyamide'],['Gaskets','double EPDM main gasket'],['Panel profile width','50 mm'],['Compatible glazing','24–32 mm'],['Thermal transmittance Uf','1.9 W/m²K'],['Max. panel height','2.5 m'],['Max. panel width','1.0 m'],['Max. panel weight','80 kg'],['Locking','double latches'],['Typologies','7 opening configurations'],['Class','Smartia — economy']],
      de:[['Systemtyp','Faltsystem, oben hängende Flügel'],['Wärmedämmung','doppelt, 18 mm Polyamid'],['Dichtungen','doppelte EPDM-Mitteldichtung'],['Profilbreite Flügel','50 mm'],['Verglasung','24–32 mm'],['Wärmedurchgang Uf','1,9 W/m²K'],['Max. Flügelhöhe','2,5 m'],['Max. Flügelbreite','1,0 m'],['Max. Flügelgewicht','80 kg'],['Verriegelung','Doppelriegel'],['Typologien','7 Öffnungsvarianten'],['Klasse','Smartia — Economy']],
      fr:[['Type de système','Pliant (accordéon), vantaux suspendus en haut'],['Rupture thermique','double, polyamide 18 mm'],['Joints','joint central double EPDM'],['Largeur du profilé de vantail','50 mm'],['Vitrage compatible','24–32 mm'],['Transmission thermique Uf','1,9 W/m²K'],['Hauteur max. du vantail','2,5 m'],['Largeur max. du vantail','1,0 m'],['Poids max. du vantail','80 kg'],['Fermeture','loquets doubles'],['Typologies','7 configurations d’ouverture'],['Gamme','Smartia — économique']],
      es:[['Tipo de sistema','Plegable, hojas colgadas por arriba'],['Rotura térmica','doble, poliamida de 18 mm'],['Juntas','junta central doble de EPDM'],['Ancho del perfil de hoja','50 mm'],['Vidrio compatible','24–32 mm'],['Transmitancia térmica Uf','1,9 W/m²K'],['Altura máx. de hoja','2,5 m'],['Ancho máx. de hoja','1,0 m'],['Peso máx. de hoja','80 kg'],['Cierre','pestillos dobles'],['Tipologías','7 configuraciones de apertura'],['Gama','Smartia — económica']],
      it:[['Tipo di sistema','Pieghevole (a libro), ante appese in alto'],['Taglio termico','doppio, poliammide 18 mm'],['Guarnizioni','guarnizione centrale doppia in EPDM'],['Larghezza profilo anta','50 mm'],['Vetro compatibile','24–32 mm'],['Trasmittanza termica Uf','1,9 W/m²K'],['Altezza max. anta','2,5 m'],['Larghezza max. anta','1,0 m'],['Peso max. anta','80 kg'],['Chiusura','chiavistelli doppi'],['Tipologie','7 configurazioni di apertura'],['Gamma','Smartia — economica']],
    },
    perf: {
      ro:[['Coeficient Uf','1,9 W/m²K'],['Etanșeitate la apă','clasa 4A (ift)'],['Permeabilitate la aer','clasa 3 (ift)'],['Rezistență la vânt','C1/B1 (ift)'],['Geam','24–32 mm'],['Aluminiu','certificat TÜV Austria OK Recycled']],
      en:[['Uf coefficient','1.9 W/m²K'],['Water tightness','class 4A (ift)'],['Air permeability','class 3 (ift)'],['Wind resistance','C1/B1 (ift)'],['Glazing','24–32 mm'],['Aluminium','TÜV Austria OK Recycled certificate']],
      de:[['Uf-Wert','1,9 W/m²K'],['Schlagregendichtheit','Klasse 4A (ift)'],['Luftdurchlässigkeit','Klasse 3 (ift)'],['Windlastwiderstand','C1/B1 (ift)'],['Verglasung','24–32 mm'],['Aluminium','Zertifikat TÜV Austria OK Recycled']],
      fr:[['Coefficient Uf','1,9 W/m²K'],['Étanchéité à l’eau','classe 4A (ift)'],['Perméabilité à l’air','classe 3 (ift)'],['Résistance au vent','C1/B1 (ift)'],['Vitrage','24–32 mm'],['Aluminium','certificat TÜV Austria OK Recycled']],
      es:[['Coeficiente Uf','1,9 W/m²K'],['Estanqueidad al agua','clase 4A (ift)'],['Permeabilidad al aire','clase 3 (ift)'],['Resistencia al viento','C1/B1 (ift)'],['Vidrio','24–32 mm'],['Aluminio','certificado TÜV Austria OK Recycled']],
      it:[['Coefficiente Uf','1,9 W/m²K'],['Tenuta all’acqua','classe 4A (ift)'],['Permeabilità all’aria','classe 3 (ift)'],['Resistenza al vento','C1/B1 (ift)'],['Vetro','24–32 mm'],['Alluminio','certificato TÜV Austria OK Recycled']],
    },
    advantages: {
      ro:['Cel mai accesibil armonic cu barieră termică din gama Alumil — bariera dublă de 18 mm duce Uf la 1,9 W/m²K, mult peste armonicele fără barieră termică','Deschide aproape complet peretele spre terasă — foi de până la 1,0 m lățime și 2,5 m înălțime, în 7 tipologii de deschidere','Foi suspendate pe sus, de până la 80 kg fiecare — mișcare ușoară și durabilă','Etanșeitate la apă clasa 4A, permeabilitate la aer clasa 3 și rezistență la vânt C1/B1, testate de ift','Compatibil cu geam dublu de 24–32 mm — cost total optimizat pentru proiecte cu buget mediu','Disponibil în culori RAL — integrare estetică în orice tip de arhitectură'],
      en:['The most affordable thermally broken folding system in the Alumil range — the double 18 mm thermal break brings Uf to 1.9 W/m²K, well ahead of folding systems without a thermal break','Opens the wall to the terrace almost completely — panels up to 1.0 m wide and 2.5 m high, in 7 opening typologies','Top-hung panels of up to 80 kg each — smooth, long-lasting operation','Water tightness class 4A, air permeability class 3 and wind resistance C1/B1, tested by ift','Compatible with 24–32 mm double glazing — optimised total cost for mid-budget projects','Available in RAL colours — fits visually into any type of architecture'],
      de:['Das preisgünstigste Faltsystem mit thermischer Trennung im Alumil-Sortiment — die doppelte 18-mm-Wärmedämmung bringt Uf auf 1,9 W/m²K, deutlich besser als Faltsysteme ohne thermische Trennung','Öffnet die Wand zur Terrasse fast vollständig — Flügel bis 1,0 m breit und 2,5 m hoch, in 7 Öffnungsvarianten','Oben hängende Flügel mit bis zu 80 kg — leichter, langlebiger Lauf','Schlagregendichtheit Klasse 4A, Luftdurchlässigkeit Klasse 3 und Windlastwiderstand C1/B1, geprüft vom ift','Für Zweifachverglasung von 24–32 mm — optimierte Gesamtkosten für Projekte mit mittlerem Budget','In RAL-Farben erhältlich — fügt sich in jede Architektur ein'],
      fr:['Le système pliant à rupture thermique le plus accessible de la gamme Alumil — la double rupture de 18 mm porte l’Uf à 1,9 W/m²K, bien mieux que les pliants sans rupture thermique','Ouvre le mur sur la terrasse presque entièrement — vantaux jusqu’à 1,0 m de large et 2,5 m de haut, en 7 typologies d’ouverture','Vantaux suspendus en haut, jusqu’à 80 kg chacun — manœuvre souple et durable','Étanchéité à l’eau classe 4A, perméabilité à l’air classe 3 et résistance au vent C1/B1, testées par l’ift','Compatible avec un double vitrage de 24–32 mm — coût total optimisé pour les projets à budget moyen','Disponible en couleurs RAL — s’intègre à tout type d’architecture'],
      es:['El sistema plegable con rotura térmica más asequible de la gama Alumil — la doble rotura de 18 mm lleva el Uf a 1,9 W/m²K, muy por encima de los plegables sin rotura térmica','Abre casi por completo la pared hacia la terraza — hojas de hasta 1,0 m de ancho y 2,5 m de alto, en 7 tipologías de apertura','Hojas colgadas por arriba de hasta 80 kg cada una — movimiento suave y duradero','Estanqueidad al agua clase 4A, permeabilidad al aire clase 3 y resistencia al viento C1/B1, ensayadas por ift','Compatible con doble vidrio de 24–32 mm — coste total optimizado para proyectos de presupuesto medio','Disponible en colores RAL — se integra en cualquier tipo de arquitectura'],
      it:['Il sistema pieghevole a taglio termico più accessibile della gamma Alumil — il doppio taglio da 18 mm porta l’Uf a 1,9 W/m²K, molto meglio dei pieghevoli senza taglio termico','Apre quasi completamente la parete verso la terrazza — ante fino a 1,0 m di larghezza e 2,5 m di altezza, in 7 tipologie di apertura','Ante appese in alto fino a 80 kg ciascuna — movimento fluido e duraturo','Tenuta all’acqua classe 4A, permeabilità all’aria classe 3 e resistenza al vento C1/B1, testate da ift','Compatibile con doppio vetro da 24–32 mm — costo totale ottimizzato per progetti a budget medio','Disponibile nei colori RAL — si integra in qualsiasi tipo di architettura'],
    },
    seo_text: {
      ro:'Sistemul armonic Alumil M 19800 SMARTIA este cel mai accesibil sistem pliant cu barieră termică din gama Alumil, destinat teraselor rezidențiale, balcoanelor și spațiilor de zi unde se dorește deschiderea aproape completă a peretelui, cu un buget optimizat. Bariera termică dublă din poliamidă de 18 mm asigură Uf de 1,9 W/m²K, mult peste sistemele armonice fără barieră termică, care fac punte termică la rost și favorizează condensul. Foile sunt suspendate pe sus, au până la 1,0 m lățime, 2,5 m înălțime și 80 kg, iar Alumil oferă 7 tipologii de deschidere, cu sau fără ușă de serviciu. Testele ift dau etanșeitate la apă clasa 4A, permeabilitate la aer clasa 3 și rezistență la vânt C1/B1, iar geamul poate avea între 24 și 32 mm. Pentru performanță termică superioară și deschideri mai mari se alege SF 85 SUPREME. Neofort BIZ furnizează și montează M 19800 SMARTIA cu consultanță și calculul dimensionării înainte de comandă.',
      en:'The Alumil M 19800 SMARTIA folding system is the most affordable thermally broken folding system in the Alumil range, designed for residential terraces, balconies and living areas where the wall should open almost completely on an optimised budget. The double 18 mm polyamide thermal break gives a Uf of 1.9 W/m²K, well ahead of folding systems without a thermal break, which create a thermal bridge at the joint and encourage condensation. The panels are top-hung, up to 1.0 m wide, 2.5 m high and 80 kg, and Alumil offers 7 opening typologies, with or without a service door. ift tests give water tightness class 4A, air permeability class 3 and wind resistance C1/B1, and the glazing can be 24 to 32 mm thick. For higher thermal performance and larger openings, SF 85 SUPREME is the choice. Neofort BIZ supplies and installs M 19800 SMARTIA with advice and dimensioning before ordering.',
      de:'Das Faltsystem Alumil M 19800 SMARTIA ist das preisgünstigste Faltsystem mit thermischer Trennung im Alumil-Sortiment, gedacht für Terrassen, Balkone und Wohnbereiche, in denen sich die Wand mit optimiertem Budget fast vollständig öffnen soll. Die doppelte 18-mm-Polyamid-Wärmedämmung ergibt einen Uf-Wert von 1,9 W/m²K, deutlich besser als Faltsysteme ohne thermische Trennung, die an der Fuge eine Wärmebrücke bilden und Kondensat begünstigen. Die Flügel hängen oben, sind bis 1,0 m breit, 2,5 m hoch und 80 kg schwer, und Alumil bietet 7 Öffnungsvarianten, mit oder ohne Gehflügel. Die ift-Prüfungen ergeben Schlagregendichtheit Klasse 4A, Luftdurchlässigkeit Klasse 3 und Windlastwiderstand C1/B1, die Verglasung kann 24 bis 32 mm dick sein. Für höhere Wärmedämmung und größere Öffnungen wählt man SF 85 SUPREME. Neofort BIZ liefert und montiert M 19800 SMARTIA mit Beratung und Dimensionierung vor der Bestellung.',
      fr:'Le système pliant Alumil M 19800 SMARTIA est le pliant à rupture thermique le plus accessible de la gamme Alumil, conçu pour les terrasses, balcons et pièces à vivre où l’on veut ouvrir le mur presque entièrement avec un budget maîtrisé. La double rupture thermique en polyamide de 18 mm donne un Uf de 1,9 W/m²K, bien mieux que les pliants sans rupture thermique, qui créent un pont thermique au joint et favorisent la condensation. Les vantaux sont suspendus en haut, mesurent jusqu’à 1,0 m de large, 2,5 m de haut et 80 kg, et Alumil propose 7 typologies d’ouverture, avec ou sans porte de service. Les essais ift donnent une étanchéité à l’eau classe 4A, une perméabilité à l’air classe 3 et une résistance au vent C1/B1, avec un vitrage de 24 à 32 mm. Pour une meilleure performance thermique et de plus grandes ouvertures, on choisit le SF 85 SUPREME. Neofort BIZ fournit et pose le M 19800 SMARTIA avec conseil et dimensionnement avant commande.',
      es:'El sistema plegable Alumil M 19800 SMARTIA es el plegable con rotura térmica más asequible de la gama Alumil, pensado para terrazas, balcones y zonas de estar donde se quiere abrir casi por completo la pared con un presupuesto ajustado. La doble rotura térmica de poliamida de 18 mm da un Uf de 1,9 W/m²K, muy por encima de los plegables sin rotura térmica, que crean puente térmico en la junta y favorecen la condensación. Las hojas van colgadas por arriba, miden hasta 1,0 m de ancho, 2,5 m de alto y 80 kg, y Alumil ofrece 7 tipologías de apertura, con o sin puerta de servicio. Los ensayos de ift dan estanqueidad al agua clase 4A, permeabilidad al aire clase 3 y resistencia al viento C1/B1, con vidrio de 24 a 32 mm. Para un mejor rendimiento térmico y aperturas mayores se elige el SF 85 SUPREME. Neofort BIZ suministra e instala el M 19800 SMARTIA con asesoramiento y dimensionado antes del pedido.',
      it:'Il sistema pieghevole Alumil M 19800 SMARTIA è il pieghevole a taglio termico più accessibile della gamma Alumil, pensato per terrazze, balconi e zone giorno dove si vuole aprire quasi completamente la parete con un budget contenuto. Il doppio taglio termico in poliammide da 18 mm dà un Uf di 1,9 W/m²K, molto meglio dei pieghevoli senza taglio termico, che creano un ponte termico al giunto e favoriscono la condensa. Le ante sono appese in alto, misurano fino a 1,0 m di larghezza, 2,5 m di altezza e 80 kg, e Alumil offre 7 tipologie di apertura, con o senza porta di servizio. Le prove ift danno tenuta all’acqua classe 4A, permeabilità all’aria classe 3 e resistenza al vento C1/B1, con vetro da 24 a 32 mm. Per prestazioni termiche superiori e aperture più grandi si sceglie l’SF 85 SUPREME. Neofort BIZ fornisce e posa M 19800 SMARTIA con consulenza e dimensionamento prima dell’ordine.',
    },
  },
};

// ─── UI STRINGS ──────────────────────────────────────────────────────────────
const UI = {
  ro: { specs_title:'Specificații tehnice', perf_title:'Performanțe certificate', adv_title:'Avantaje principale', faq_title:'Întrebări frecvente', cta_h:'Solicitați ofertă pentru', cta_sub:'Consultanți disponibili Luni–Vineri, 10:00–18:00', cta_btn:'Cerere ofertă', cta_call:'Sună acum' },
  en: { specs_title:'Technical specifications', perf_title:'Certified performance', adv_title:'Key advantages', faq_title:'Frequently asked questions', cta_h:'Request quote for', cta_sub:'Consultants available Mon–Fri, 10:00–18:00', cta_btn:'Request quote', cta_call:'Call now' },
  de: { specs_title:'Technische Daten', perf_title:'Zertifizierte Leistungen', adv_title:'Hauptvorteile', faq_title:'Häufig gestellte Fragen', cta_h:'Angebot anfordern für', cta_sub:'Berater verfügbar Mo–Fr, 10:00–18:00', cta_btn:'Angebot anfordern', cta_call:'Anrufen' },
  fr: { specs_title:'Caractéristiques techniques', perf_title:'Performances certifiées', adv_title:'Avantages clés', faq_title:'Questions fréquentes', cta_h:'Demander un devis pour', cta_sub:'Conseillers disponibles Lun–Ven, 10h–18h', cta_btn:'Demander un devis', cta_call:'Appeler' },
  es: { specs_title:'Especificaciones técnicas', perf_title:'Rendimiento certificado', adv_title:'Ventajas clave', faq_title:'Preguntas frecuentes', cta_h:'Solicitar presupuesto para', cta_sub:'Consultores disponibles Lun–Vie, 10:00–18:00', cta_btn:'Pedir presupuesto', cta_call:'Llamar' },
  it: { specs_title:'Specifiche tecniche', perf_title:'Prestazioni certificate', adv_title:'Vantaggi principali', faq_title:'Domande frequenti', cta_h:'Richiedi preventivo per', cta_sub:'Consulenti disponibili Lun–Ven, 10:00–18:00', cta_btn:'Richiedi preventivo', cta_call:'Chiama ora' },
};

// ─── generateStaticParams ─────────────────────────────────────────────────────
export async function generateStaticParams() {
  // v308: pe langa slug-ul tradus, se pregatesc la build si cheia interna
  // (canonical) si slug-ul RO pentru fiecare limba. next-intl rescrie adresa
  // tradusa catre cheia din i18n/routing.js, deci aceea e pagina ceruta efectiv.
  // Accesul direct la aceste forme ramane redirectionat 301 de middleware.
  const params = [];
  const seen = new Set();
  for (const locale of LOCALES)
    for (const [canonical, slugs] of Object.entries(SLUG_MAP))
      for (const slug of [slugs[locale] || canonical, canonical, slugs.ro || canonical]) {
        const k = locale + '|' + slug;
        if (!seen.has(k)) { seen.add(k); params.push({ locale, slug }); }
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
  // v270: titlu <= 60 car. si descriere <= 150 car., fraza completa, din data/productMeta.js.
  const meta  = PRODUCT_META[canonical];
  const title = meta?.title?.[locale] || `${name} · Neofort BIZ`;
  const desc  = meta?.desc?.[locale]  || (product.seo_text[locale] || product.seo_text.ro).slice(0, 160);
  const localSlug = SLUG_MAP[canonical]?.[locale] || slug;
  const altSlug   = (l) => SLUG_MAP[canonical]?.[l] || canonical;

  return {
    title,
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
      siteName:'Neofort BIZ', title, description: desc,
      images:[{ url:`${BASE}${product.img.replace('.avif','.jpg')}`, ...ogDims(product.img.replace('.avif','.jpg')), alt:name, type:'image/jpeg' }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title, description: desc, images:[{ url:`${BASE}${product.img.replace('.avif','.jpg')}`, ...ogDims(product.img.replace('.avif','.jpg')) }] }, };
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

  // v273 — punctul 7 din audit: tabelul de performanta (perf) era vizibil pe pagina
  // dar nu intra deloc in structured data. Acum intra, dedus dupa nume: ce exista
  // deja in specs nu se repeta, iar la nume comun cu valoare diferita castiga specs.
  const perfExtra = perf.filter(([pn]) => !specs.some(([sn]) => sn === pn));
  // v272 — identitate de entitate pentru Product (punctul 4 din audit).
  // Pana acum Product nu avea @id, url, category sau inLanguage, iar `seller` era
  // un nod Organization duplicat, fara @id — deci nu se lega de nodul LocalBusiness
  // definit in app/[locale]/page.js la ${BASE}/#localbusiness, unde stau vatID, geo,
  // areaServed, aggregateRating si knowsAbout. Un crawler LLM vedea doua firme fara
  // legatura. Acum seller e o REFERINTA prin @id catre acel nod unic.
  // v327: `seller` si `inLanguage` nu sunt valide pe Product; legatura cu firma si limba
  // stau pe nodul ItemPage (lib/productSchema.js), legat de Product prin mainEntity.
  const pageUrl = `${BASE}/${locale}/${(PALU_SEG[locale]||'produse-aluminiu')}/${SLUG_MAP[canonical]?.[locale] || slug}`;
  // isSimilarTo: celelalte produse din aceeasi familie — ancoreaza comparatiile LLM
  const siblings = Object.keys(PRODUCTS).filter(k => k !== canonical).map(k => ({
    '@type':'Product',
    name: PRODUCTS[k].name[locale] || PRODUCTS[k].name.ro,
    url: `${BASE}/${locale}/${(PALU_SEG[locale]||'produse-aluminiu')}/${SLUG_MAP[k]?.[locale] || k}`,
  }));
  // v274 — FAQ pe paginile de produs (punctul 3 din audit). Pana acum doar
  // familia /umbrire/ avea FAQ vizibil si schema FAQPage.
  const faqItems = PRODUCT_FAQ[canonical]?.[locale] || PRODUCT_FAQ[canonical]?.ro || [];
  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    'mainEntity': faqItems.map(([q, a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a },
    })),
  } : null;
  const schema = {
    '@context':'https://schema.org', '@type':'Product',
    '@id': `${pageUrl}#product`,
    url: pageUrl,
    category: cat,
    'name': name, 'description': seotxt,
    'image': `${BASE}${product.img}`,
    'brand': { '@type':'Brand', 'name':'Alumil' },
    'manufacturer': manufacturerSchema('Alumil S.A.', 'GR'),
    'additionalProperty': [...specs, ...perfExtra].map(([n,v]) => ({ '@type':'PropertyValue', 'name':n, 'value':v })),
    isSimilarTo: siblings,
  };

  // ── BreadcrumbList ──
  const aluParentSeg = {ro:'tamplarie-aluminiu',en:'aluminium-windows',de:'aluminiumfenster',fr:'menuiserie-aluminium',es:'carpinteria-aluminio',it:'infissi-alluminio'};
  const aluParentLabel = {ro:'Tâmplărie Aluminiu',en:'Aluminium Windows',de:'Aluminiumfenster',fr:'Menuiserie Aluminium',es:'Carpintería Aluminio',it:'Infissi Alluminio'};
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    'itemListElement': [
      { '@type':'ListItem', 'position':1, 'name':'Neofort BIZ', 'item': BASE },
      { '@type':'ListItem', 'position':2, 'name': aluParentLabel[locale]||'Tâmplărie Aluminiu', 'item': `${BASE}/${locale}/${aluParentSeg[locale]||'tamplarie-aluminiu'}` },
      { '@type':'ListItem', 'position':3, 'name': name, 'item': `${BASE}/${locale}/${PALU_SEG[locale]||'produse-aluminiu'}/${SLUG_MAP[canonical]?.[locale]||slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemPageSchema({ base: BASE, pageUrl, locale, name })) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>}
      <style>{`
        .prd-bc{font-size:.76rem;letter-spacing:.12em;text-transform:uppercase;color:#141414;display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:24px}
        .prd-bc a{color:#141414;text-decoration:none}.prd-bc a:hover{color:#151515}.prd-bc span{color:#141414}
        .prd-hero{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
        .prd-img-wrap{position:relative;background:#f8f8f6;border:1px solid #e8e8e4;display:flex;align-items:center;justify-content:center;padding:32px;min-height:320px}
        .prd-img{max-width:100%;max-height:340px;width:auto;height:auto;object-fit:contain;display:block}
        .prd-badge{position:absolute;top:12px;left:12px;font-family:'Barlow Condensed',sans-serif;font-size:.52rem;letter-spacing:.2em;text-transform:uppercase;font-weight:700;padding:4px 10px}
        .prd-cat{font-family:'Barlow Condensed',sans-serif;font-size:.57rem;letter-spacing:.2em;text-transform:uppercase;font-weight:600;margin-bottom:10px}
        .prd-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:clamp(1.4rem,3vw,2rem);color:#151515;line-height:1.15;margin:0 0 14px}
        .prd-tagline{font-size:.88rem;color:#2a2a2a;line-height:1.6;margin:0 0 28px;border-left:3px solid;padding-left:14px}
        .prd-sec{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.74rem;letter-spacing:.22em;text-transform:uppercase;color:#151515;margin:0 0 14px}
        .prd-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#e8e8e4;border:1px solid #e8e8e4;margin-bottom:28px}
        .prd-row{background:#fff;display:flex;justify-content:space-between;gap:8px;padding:7px 10px;font-size:.73rem}
        .prd-row strong{color:#151515;font-weight:600;flex-shrink:0}.prd-row span{color:#2a2a2a;text-align:right}
        .prd-perf{width:100%;border-collapse:collapse;margin-bottom:28px;font-size:.73rem}
        .prd-perf tr{border-bottom:1px solid #f0f0ee}.prd-perf td{padding:7px 8px;font-size:.82rem}
        .prd-perf td:first-child{color:#151515;width:55%;font-weight:400}.prd-perf td:last-child{font-weight:700;color:#151515;text-align:right}
        .prd-adv{list-style:none;padding:0;margin:0 0 28px}
        .prd-adv li{font-size:.8rem;color:#181818;padding:8px 0 8px 20px;border-bottom:1px solid #f5f5f3;position:relative;line-height:1.5}
        .prd-adv li:last-child{border-bottom:none}
        .prd-cta-box{background:#111;padding:24px;position:sticky;top:100px}
        .prd-cta-hl{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.74rem;letter-spacing:.2em;text-transform:uppercase;color:#151515;margin-bottom:8px}
        .prd-cta-nm{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.05rem;color:#fff;margin-bottom:16px;line-height:1.2}
        .prd-cta-sub{font-size:.84rem;color:#151515;margin-bottom:20px}
        .prd-cta-a{display:block;width:100%;padding:12px;text-align:center;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;margin-bottom:10px;transition:all .18s}
        .prd-cta-pri{color:#0e0e0e;background:#fff}.prd-cta-pri:hover{background:#f0f0f0}
        .prd-cta-sec{color:#fff;border:1px solid #333}.prd-cta-sec:hover{border-color:#404040}
        .prd-seo{font-size:.82rem;color:#1e1e1e;line-height:1.8;padding:32px 0;border-top:1px solid #e8e8e4;margin-top:8px}
        .prd-lower{display:grid;grid-template-columns:1fr 260px;gap:48px;align-items:start;margin-top:48px}
        .prd-mob{display:none;position:fixed;bottom:0;left:0;right:0;background:#111;padding:12px 16px;z-index:100;gap:10px;border-top:1px solid #222}
        .prd-mob a{flex:1;padding:11px 8px;text-align:center;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;transition:all .18s}
        .prd-mob-pri{background:#fff;color:#0e0e0e}.prd-mob-sec{border:1px solid #333;color:#fff}
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
          <span style={{color:'#151515'}}>{serie}</span>
        </nav>

        {/* HERO */}
        <div className="prd-hero">
          <div className="prd-img-wrap">
            <img src={product.img} alt={name} className="prd-img" loading="eager" fetchpriority="high" decoding="async" {...imgBox(product.img)}/>
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
            <FaqAccordion items={faqItems} title={ui.faq_title} />
          </div>

          {/* SIDEBAR */}
          <div className="prd-cta-box">
            <p className="prd-cta-hl">{ui.cta_h}</p>
            <p className="prd-cta-nm">{name}</p>
            <p className="prd-cta-sub">{ui.cta_sub}</p>
            <Link href="/contact" className="prd-cta-a prd-cta-pri">{ui.cta_btn}</Link>
            <a href="tel:+40752443435" className="prd-cta-a prd-cta-sec" style={{fontSize:'.6rem',whiteSpace:'nowrap'}}>{ui.cta_call} +40 752 443 435</a>
          </div>
        </div>

      </div>
    </>
  );
}
