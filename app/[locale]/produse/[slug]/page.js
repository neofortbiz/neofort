import { notFound } from 'next/navigation';
import { Link } from '../../../../i18n/navigation';
import { getTranslations } from 'next-intl/server';

const BASE   = 'https://www.neofort-biz.ro';
const PROD_SEG = {ro:'produse',en:'products',de:'produkte',fr:'produits',es:'productos',it:'prodotti'};
const LOCALES = ['ro','en','de','fr','es','it'];

// ─── SLUG MAP — slug canonical → { ro, en, de, fr, es, it } ─────────────────
const SLUG_MAP = {
  'bluevolution-92-alu': {
    ro:'profil-pvc-bluevolution-92-alu', en:'bluevolution-92-alu-pvc-profile',
    de:'bluevolution-92-alu-pvc-profil', fr:'profil-pvc-bluevolution-92-alu',
    es:'perfil-pvc-bluevolution-92-alu', it:'profilo-pvc-bluevolution-92-alu',
  },
  'bluevolution-92-flex': {
    ro:'profil-pvc-bluevolution-92-flex', en:'bluevolution-92-flex-pvc-profile',
    de:'bluevolution-92-flex-pvc-profil', fr:'profil-pvc-bluevolution-92-flex',
    es:'perfil-pvc-bluevolution-92-flex', it:'profilo-pvc-bluevolution-92-flex',
  },
  'bluevolution-92-round': {
    ro:'profil-pvc-bluevolution-92-round', en:'bluevolution-92-round-pvc-profile',
    de:'bluevolution-92-round-pvc-profil', fr:'profil-pvc-bluevolution-92-round',
    es:'perfil-pvc-bluevolution-92-round', it:'profilo-pvc-bluevolution-92-round',
  },
  'greenevolution-76-md-round': {
    ro:'profil-pvc-greenevolution-76-md-round', en:'greenevolution-76-md-round-pvc-profile',
    de:'greenevolution-76-md-round-pvc-profil', fr:'profil-pvc-greenevolution-76-md-round',
    es:'perfil-pvc-greenevolution-76-md-round', it:'profilo-pvc-greenevolution-76-md-round',
  },
  'greenevolution-76-md-flex': {
    ro:'profil-pvc-greenevolution-76-md-flex', en:'greenevolution-76-md-flex-pvc-profile',
    de:'greenevolution-76-md-flex-pvc-profil', fr:'profil-pvc-greenevolution-76-md-flex',
    es:'perfil-pvc-greenevolution-76-md-flex', it:'profilo-pvc-greenevolution-76-md-flex',
  },
  'greenevolution-76-ad-flex': {
    ro:'profil-pvc-greenevolution-76-ad-flex', en:'greenevolution-76-ad-flex-pvc-profile',
    de:'greenevolution-76-ad-flex-pvc-profil', fr:'profil-pvc-greenevolution-76-ad-flex',
    es:'perfil-pvc-greenevolution-76-ad-flex', it:'profilo-pvc-greenevolution-76-ad-flex',
  },
  // ── ALUMIL ──
  'alumil-s77-supreme': {
    ro:'profil-aluminiu-alumil-s77-supreme', en:'alumil-s77-supreme-aluminium-profile',
    de:'alumil-s77-supreme-aluminiumprofil', fr:'profil-aluminium-alumil-s77-supreme',
    es:'perfil-aluminio-alumil-s77-supreme', it:'profilo-alluminio-alumil-s77-supreme',
  },
  'alumil-sf85-supreme': {
    ro:'profil-aluminiu-alumil-sf85-supreme', en:'alumil-sf85-supreme-aluminium-profile',
    de:'alumil-sf85-supreme-aluminiumprofil', fr:'profil-aluminium-alumil-sf85-supreme',
    es:'perfil-aluminio-alumil-sf85-supreme', it:'profilo-alluminio-alumil-sf85-supreme',
  },
  'alumil-s700-supreme': {
    ro:'profil-aluminiu-alumil-s700-supreme', en:'alumil-s700-supreme-lift-slide',
    de:'alumil-s700-supreme-hebeschiebe', fr:'profil-aluminium-alumil-s700-supreme',
    es:'perfil-aluminio-alumil-s700-supreme', it:'profilo-alluminio-alumil-s700-supreme',
  },
  'alumil-s67-smartia': {
    ro:'profil-aluminiu-alumil-s67-smartia', en:'alumil-s67-smartia-aluminium-profile',
    de:'alumil-s67-smartia-aluminiumprofil', fr:'profil-aluminium-alumil-s67-smartia',
    es:'perfil-aluminio-alumil-s67-smartia', it:'profilo-alluminio-alumil-s67-smartia',
  },
  'alumil-s350-smartia': {
    ro:'profil-aluminiu-alumil-s350-smartia', en:'alumil-s350-smartia-lift-slide',
    de:'alumil-s350-smartia-hebeschiebe', fr:'profil-aluminium-alumil-s350-smartia',
    es:'perfil-aluminio-alumil-s350-smartia', it:'profilo-alluminio-alumil-s350-smartia',
  },
  'alumil-m19800-smartia': {
    ro:'profil-aluminiu-alumil-m19800-smartia', en:'alumil-m19800-smartia-curtain-wall',
    de:'alumil-m19800-smartia-vorhangfassade', fr:'profil-aluminium-alumil-m19800-smartia',
    es:'perfil-aluminio-alumil-m19800-smartia', it:'profilo-alluminio-alumil-m19800-smartia',
  },
  // ── ACCESORII ──
  'accesoriu-rulouri-exterioare': {
    ro:'accesoriu-rulouri-exterioare-aluminiu', en:'aluminium-external-roller-shutters',
    de:'aluminium-aussenrolllaeden', fr:'volets-roulants-aluminium-exterieurs',
    es:'persianas-exteriores-aluminio', it:'tapparelle-esterne-alluminio',
  },
  'accesoriu-jaluzele-raffstore': {
    ro:'accesoriu-jaluzele-venetiene-raffstore', en:'venetian-raffstore-blinds',
    de:'raffstore-jalousien', fr:'persiennes-venitiennes-raffstore',
    es:'persianas-venecianas-raffstore', it:'veneziane-raffstore',
  },
  'accesoriu-precadre-blaugelb': {
    ro:'accesoriu-precadre-blaugelb-triotherm', en:'blaugelb-triotherm-plus-precasings',
    de:'blaugelb-triotherm-plus-vorfenster', fr:'precadres-blaugelb-triotherm-plus',
    es:'premarcos-blaugelb-triotherm-plus', it:'precontrotelaio-blaugelb-triotherm-plus',
  },
  'accesoriu-banda-butilic': {
    ro:'accesoriu-banda-precomprimata-butil', en:'butyl-pre-compressed-sealing-tape',
    de:'butyl-vorkomprimiertes-dichtband', fr:'bande-butyle-precomprimee',
    es:'cinta-butilica-precomprimida', it:'nastro-butile-precompresso',
  },
  'accesoriu-banda-antivapori': {
    ro:'accesoriu-banda-etansare-antivapori', en:'vapour-barrier-sealing-tape',
    de:'dampfsperrband-fenster', fr:'bande-etancheite-vapeur',
    es:'cinta-barrera-vapor', it:'nastro-barriera-vapore',
  },
  'accesoriu-bagheta-warm-edge': {
    ro:'accesoriu-bagheta-warm-edge-thermo', en:'warm-edge-thermoplastic-spacer',
    de:'warm-edge-thermoplastischer-abstandhalter', fr:'baguette-warm-edge-espaceur',
    es:'intercalario-warm-edge-termoplastico', it:'distanziatore-warm-edge-termoplastico',
  },
  'accesoriu-toc-renovare': {
    ro:'accesoriu-toc-de-renovare', en:'window-renovation-profile',
    de:'renovierungsprofil-fenster', fr:'profil-renovation-fenetre',
    es:'perfil-renovacion-ventana', it:'telaio-ristrutturazione-finestra',
  },
  'accesoriu-pervazuri-glafuri': {
    ro:'accesoriu-pervazuri-glafuri-pvc-aluminiu', en:'windowsills-pvc-aluminium',
    de:'fensterbaenke-pvc-aluminium', fr:'appuis-fenetre-pvc-aluminium',
    es:'alfeizares-pvc-aluminio', it:'davanzali-pvc-alluminio',
  },
  'accesoriu-grila-aereco': {
    ro:'accesoriu-grila-higroreglabila-aereco', en:'aereco-hygro-adjustable-ventilation-grille',
    de:'aereco-hygroregelbare-lueftungsgitter', fr:'grille-hygroreglable-aereco',
    es:'rejilla-higrorreglable-aereco', it:'griglia-igroregolab-aereco',
  },
  'accesoriu-geam-termopan': {
    ro:'accesoriu-geamuri-termopan-saint-gobain', en:'saint-gobain-thermal-insulating-glass',
    de:'saint-gobain-waermeschutzisolierglas', fr:'verre-isolant-saint-gobain',
    es:'vidrio-aislante-saint-gobain', it:'vetro-termoisolante-saint-gobain',
  },
};

// Build reverse map: any locale slug → canonical
const REVERSE_MAP = {};
for (const [canonical, slugs] of Object.entries(SLUG_MAP)) {
  for (const slug of Object.values(slugs)) {
    REVERSE_MAP[slug] = canonical;
  }
}

// ─── PRODUSE DATA ─────────────────────────────────────────────────────────────
const PRODUCTS = {

  'bluevolution-92-alu': {
    img: '/products/bluevolution-92-alu.avif',
    color: '#2d5a8e',
    category: { ro:'Tâmplărie PVC Salamander', en:'Salamander PVC Joinery', de:'Salamander Kunststofffenster', fr:'Menuiserie PVC Salamander', es:'Carpintería PVC Salamander', it:'Infissi PVC Salamander' },
    serie: { ro:'BluEvolution 92', en:'BluEvolution 92', de:'BluEvolution 92', fr:'BluEvolution 92', es:'BluEvolution 92', it:'BluEvolution 92' },
    breadcrumb_parent: { ro:'Tâmplărie PVC', en:'PVC Windows', de:'Kunststofffenster', fr:'Menuiserie PVC', es:'Carpintería PVC', it:'Infissi PVC' },
    breadcrumb_parent_href: '/tamplarie-pvc',
    name: {
      ro:'Profil PVC Salamander BluEvolution 92 ALU – 6 camere, placat aluminiu',
      en:'Salamander BluEvolution 92 ALU PVC Profile – 6 Chambers, Aluminium Cladding',
      de:'Salamander BluEvolution 92 ALU Kunststoffprofil – 6 Kammern, Aluminiumverkleidung',
      fr:'Profil PVC Salamander BluEvolution 92 ALU – 6 Chambres, Revêtement Aluminium',
      es:'Perfil PVC Salamander BluEvolution 92 ALU – 6 Cámaras, Revestimiento Aluminio',
      it:'Profilo PVC Salamander BluEvolution 92 ALU – 6 Camere, Rivestimento Alluminio',
    },
    tagline: {
      ro:'Sistemul hexacameral de vârf — combinație unică PVC + Aluminiu, certificat Passive House și nZEB.',
      en:'The top hexachamber system — unique PVC + Aluminium combination, Passive House and nZEB certified.',
      de:'Das führende Sechskammersystem — einzigartige PVC + Aluminium Kombination, Passive House und nZEB zertifiziert.',
      fr:'Le système hexacaméral de pointe — combinaison unique PVC + Aluminium, certifié Passive House et nZEB.',
      es:'El sistema hexacameral líder — combinación única PVC + Aluminio, certificado Passive House y nZEB.',
      it:'Il sistema esacamerale di punta — combinazione unica PVC + Alluminio, certificato Passive House e nZEB.',
    },
    specs: {
      ro:[
        ['Adâncime constructivă','92 mm + 12 mm placare aluminiu'],
        ['Număr camere izolare','6 camere'],
        ['Înălțime vizibilă','118 mm (toc + canat)'],
        ['Tip profil','Drept — design modern'],
        ['Garnituri EPDM','3 nivele perimetrale'],
        ['Armătură','Oțel zincat 1,5 mm / 2,0 mm'],
        ['Geam compatibil','24 – 60 mm (dublu / triplu)'],
        ['Feronerie','Roto NT / NX argintie'],
        ['Prag minim','13 mm'],
        ['Greutate cercevea','Max. 180 kg'],
        ['Clasă profil','A (Clasa A performanță)'],
        ['Reciclabilitate','100% reciclabil'],
      ],
      en:[
        ['Construction depth','92 mm + 12 mm aluminium cladding'],
        ['Insulation chambers','6 chambers'],
        ['Visible height','118 mm (frame + sash)'],
        ['Profile type','Straight — modern design'],
        ['EPDM gaskets','3 perimeter levels'],
        ['Reinforcement','Galvanized steel 1.5 mm / 2.0 mm'],
        ['Compatible glass','24 – 60 mm (double / triple)'],
        ['Hardware','Roto NT / NX silver'],
        ['Min. threshold','13 mm'],
        ['Sash weight','Max. 180 kg'],
        ['Profile class','A (Class A performance)'],
        ['Recyclability','100% recyclable'],
      ],
      de:[
        ['Bautiefe','92 mm + 12 mm Aluminiumverkleidung'],
        ['Dämmkammern','6 Kammern'],
        ['Sichtbreite','118 mm (Rahmen + Flügel)'],
        ['Profiltyp','Gerade — modernes Design'],
        ['EPDM-Dichtungen','3 Perimeter-Ebenen'],
        ['Verstärkung','Verzinkter Stahl 1,5 mm / 2,0 mm'],
        ['Kompatibles Glas','24 – 60 mm (zwei-/dreifach)'],
        ['Beschläge','Roto NT / NX silber'],
        ['Min. Schwelle','13 mm'],
        ['Flügelgewicht','Max. 180 kg'],
        ['Profilklasse','A (Klasse A Leistung)'],
        ['Recycelbarkeit','100% recycelbar'],
      ],
      fr:[
        ['Profondeur de construction','92 mm + 12 mm revêtement aluminium'],
        ['Chambres d\'isolation','6 chambres'],
        ['Hauteur visible','118 mm (cadre + vantail)'],
        ['Type de profil','Droit — design moderne'],
        ['Joints EPDM','3 niveaux périmètre'],
        ['Armature','Acier galvanisé 1,5 mm / 2,0 mm'],
        ['Vitrage compatible','24 – 60 mm (double / triple)'],
        ['Ferrures','Roto NT / NX argenté'],
        ['Seuil minimum','13 mm'],
        ['Poids du vantail','Max. 180 kg'],
        ['Classe du profil','A (performance classe A)'],
        ['Recyclabilité','100% recyclable'],
      ],
      es:[
        ['Profundidad constructiva','92 mm + 12 mm revestimiento aluminio'],
        ['Cámaras de aislamiento','6 cámaras'],
        ['Altura visible','118 mm (marco + hoja)'],
        ['Tipo de perfil','Recto — diseño moderno'],
        ['Juntas EPDM','3 niveles perimetrales'],
        ['Refuerzo','Acero galvanizado 1,5 mm / 2,0 mm'],
        ['Vidrio compatible','24 – 60 mm (doble / triple)'],
        ['Herraje','Roto NT / NX plateado'],
        ['Umbral mínimo','13 mm'],
        ['Peso hoja','Máx. 180 kg'],
        ['Clase perfil','A (rendimiento clase A)'],
        ['Reciclabilidad','100% reciclable'],
      ],
      it:[
        ['Profondità di costruzione','92 mm + 12 mm rivestimento alluminio'],
        ['Camere di isolamento','6 camere'],
        ['Altezza visibile','118 mm (telaio + anta)'],
        ['Tipo di profilo','Dritto — design moderno'],
        ['Guarnizioni EPDM','3 livelli perimetrali'],
        ['Armatura','Acciaio zincato 1,5 mm / 2,0 mm'],
        ['Vetro compatibile','24 – 60 mm (doppio / triplo)'],
        ['Ferramenta','Roto NT / NX argento'],
        ['Soglia minima','13 mm'],
        ['Peso anta','Max. 180 kg'],
        ['Classe profilo','A (prestazione classe A)'],
        ['Riciclabilità','100% riciclabile'],
      ],
    },
    perf: {
      ro:[['Coeficient termic Uw','0,70 – 1,4 W/m²K'],['Coeficient cadru Uf','1,0 W/m²K'],['Etanșeitate la apă','E 1350'],['Permeabilitate aer','Clasa 4'],['Rezistență vânt','C3 · max. 1200 Pa · deflecție s=1/300'],['Izolare fonică','Până la 47 dB'],['Antiefracție standard','RC2'],['Antiefracție opțional','RC3'],],
      en:[['Thermal coefficient Uw','0.70 – 1.4 W/m²K'],['Frame coefficient Uf','1.0 W/m²K'],['Water tightness','E 1350'],['Air permeability','Class 4'],['Wind resistance','C3 · max. 1200 Pa · deflection s=1/300'],['Sound insulation','Up to 47 dB'],['Standard anti-burglary','RC2'],['Optional anti-burglary','RC3'],],
      de:[['Wärmedurchgangskoeff. Uw','0,70 – 1,4 W/m²K'],['Rahmen-Uf','1,0 W/m²K'],['Schlagregendichtheit','E 1350'],['Luftdurchlässigkeit','Klasse 4'],['Windlastwiderstand','C3 · max. 1200 Pa · Durchbiegung s=1/300'],['Schalldämmung','Bis 47 dB'],['Standard Einbruchschutz','RC2'],['Optionaler Einbruchschutz','RC3'],],
      fr:[['Coefficient thermique Uw','0,70 – 1,4 W/m²K'],['Coefficient cadre Uf','1,0 W/m²K'],['Étanchéité à l\'eau','E 1350'],['Perméabilité à l\'air','Classe 4'],['Résistance au vent','C3 · max. 1200 Pa · flèche s=1/300'],['Isolation phonique','Jusqu\'à 47 dB'],['Anti-effraction standard','RC2'],['Anti-effraction optionnel','RC3'],],
      es:[['Coeficiente térmico Uw','0,70 – 1,4 W/m²K'],['Coeficiente marco Uf','1,0 W/m²K'],['Estanqueidad al agua','E 1350'],['Permeabilidad al aire','Clase 4'],['Resistencia al viento','C3 · máx. 1200 Pa · deflexión s=1/300'],['Aislamiento acústico','Hasta 47 dB'],['Antirrobo estándar','RC2'],['Antirrobo opcional','RC3'],],
      it:[['Coefficiente termico Uw','0,70 – 1,4 W/m²K'],['Coefficiente telaio Uf','1,0 W/m²K'],['Tenuta all\'acqua','E 1350'],['Permeabilità all\'aria','Classe 4'],['Resistenza al vento','C3 · max. 1200 Pa · freccia s=1/300'],['Isolamento acustico','Fino a 47 dB'],['Antieffrazione standard','RC2'],['Antieffrazione opzionale','RC3'],],
    },
    advantages: {
      ro:['Soluție unică PVC + Aluminiu — rezistența și estetica metalului cu izolarea superioară a PVC-ului','Certificat Passive House și nZEB — cel mai exigent standard de eficiență energetică din Europa','6 camere de izolare + 3 garnituri EPDM — barieră termică și fonică de excepție','Adâncime constructivă 104 mm total — permite geam triplu până la 60 mm grosime','Anti-efracție RC2 standard, upgradabil la RC3 — securitate bancară la fereastră','Clasa A de performanță — cel mai lat și mai greu profil hexacameral din piață'],
      en:['Unique PVC + Aluminium solution — metal strength and aesthetics with superior PVC insulation','Passive House and nZEB certified — the most demanding energy efficiency standard in Europe','6 insulation chambers + 3 EPDM gaskets — exceptional thermal and acoustic barrier','Total construction depth 104 mm — allows triple glazing up to 60 mm thickness','Standard RC2 anti-burglary, upgradable to RC3 — bank-level window security','Class A performance — the widest and heaviest hexachamber profile on the market'],
      de:['Einzigartige PVC + Aluminium Lösung — Metallstärke und -ästhetik mit überlegener PVC-Dämmung','Passive House und nZEB zertifiziert — der anspruchsvollste Energieeffizienzstandard in Europa','6 Dämmkammern + 3 EPDM-Dichtungen — außergewöhnliche Wärme- und Schallschutzbarriere','Gesamtbautiefe 104 mm — ermöglicht Dreifachverglasung bis 60 mm Dicke','Standard Einbruchschutz RC2, aufrüstbar auf RC3 — banktaugliche Fenstersicherheit','Klasse A Leistung — das breiteste und schwerste Sechskammerprofil auf dem Markt'],
      fr:['Solution unique PVC + Aluminium — résistance et esthétique du métal avec isolation supérieure du PVC','Certifié Passive House et nZEB — la norme d\'efficacité énergétique la plus exigeante d\'Europe','6 chambres d\'isolation + 3 joints EPDM — barrière thermique et acoustique exceptionnelle','Profondeur totale 104 mm — permet le triple vitrage jusqu\'à 60 mm d\'épaisseur','Anti-effraction RC2 standard, améliorable à RC3 — sécurité bancaire pour fenêtre','Classe A de performance — le profil hexacaméral le plus large et le plus lourd du marché'],
      es:['Solución única PVC + Aluminio — resistencia y estética del metal con aislamiento superior del PVC','Certificado Passive House y nZEB — el estándar de eficiencia energética más exigente de Europa','6 cámaras de aislamiento + 3 juntas EPDM — barrera térmica y acústica excepcional','Profundidad total 104 mm — permite triple vidrio hasta 60 mm de espesor','Antirrobo RC2 estándar, ampliable a RC3 — seguridad bancaria en ventana','Clase A de rendimiento — el perfil hexacameral más ancho y más pesado del mercado'],
      it:['Soluzione unica PVC + Alluminio — resistenza ed estetica del metallo con isolamento superiore del PVC','Certificato Passive House e nZEB — lo standard di efficienza energetica più esigente d\'Europa','6 camere di isolamento + 3 guarnizioni EPDM — barriera termica e acustica eccezionale','Profondità totale 104 mm — consente triplo vetro fino a 60 mm di spessore','Antieffrazione RC2 standard, aggiornabile a RC3 — sicurezza bancaria per finestra','Classe A di prestazione — il profilo esacamerale più largo e più pesante del mercato'],
    },
    seo_text: {
      ro:`Profilul PVC Salamander BluEvolution 92 ALU reprezintă vârful tehnologiei germane de tâmplărie, combinând avantajele inegalabile ale PVC-ului cu rezistența și elegantul aluminiu în exterior. Sistemul hexacameral cu adâncime constructivă de 92 mm și placare suplimentară de 12 mm aluminiu rezultă într-o structură totală de 104 mm, capabilă să susțină geam termoizolator triplu de până la 60 mm grosime. Cele trei garnituri perimetrale EPDM, dispuse strategic pe toc, canat și etanșarea mediană, elimină practic orice punte termică și asigură o impermeabilitate perfectă la vânt, apă și zgomot urban. Coeficientul termic Uw scade la valori de 0,70 W/m²K — depășind standardele Passive House — datorită combinației unice profil + armătură cu rupere termică + geam triplu cu Warm Edge. Neofort BIZ furnizează și montează BluEvolution 92 ALU cu feronerie Roto NT/NX, certificat RC2 standard cu opțiune de upgrade la RC3 pentru proiecte rezidențiale și comerciale de înaltă securitate.`,
      en:`The Salamander BluEvolution 92 ALU PVC profile represents the pinnacle of German joinery technology, combining the unmatched advantages of PVC with the strength and elegance of exterior aluminium cladding. The hexachamber system with a 92 mm construction depth and additional 12 mm aluminium cladding results in a total structure of 104 mm, capable of supporting triple-glazed thermal insulation glass up to 60 mm thick. The three perimeter EPDM gaskets, strategically positioned on the frame, sash and central seal, virtually eliminate all thermal bridges and ensure perfect impermeability to wind, water and urban noise. The thermal coefficient Uw drops to values of 0.70 W/m²K — surpassing Passive House standards — thanks to the unique combination of profile + thermal break reinforcement + triple glazing with Warm Edge. Neofort BIZ supplies and installs BluEvolution 92 ALU with Roto NT/NX hardware, RC2 certified as standard with RC3 upgrade option for high-security residential and commercial projects.`,
      de:`Das Salamander BluEvolution 92 ALU Kunststoffprofil repräsentiert den Höhepunkt der deutschen Fenstertechnologie und vereint die unübertroffenen Vorteile von Kunststoff mit der Stärke und Eleganz einer Aluminiumverkleidung außen. Das Sechskammersystem mit einer Bautiefe von 92 mm und einer zusätzlichen Aluminiumverkleidung von 12 mm ergibt eine Gesamtstruktur von 104 mm, die Dreifach-Wärmeschutzverglasung bis zu 60 mm Dicke tragen kann. Die drei perimetralen EPDM-Dichtungen, strategisch am Rahmen, Flügel und der mittleren Abdichtung positioniert, eliminieren praktisch alle Wärmebrücken und gewährleisten perfekte Dichtheit gegen Wind, Wasser und Stadtlärm. Der Wärmedurchgangskoeffizient Uw sinkt auf Werte von 0,70 W/m²K — er übertrifft damit Passivhaus-Standards — dank der einzigartigen Kombination aus Profil + thermischer Verstärkung + Dreifachverglasung mit Warm Edge. Neofort BIZ liefert und montiert BluEvolution 92 ALU mit Roto NT/NX Beschlägen, RC2-zertifiziert als Standard mit RC3-Upgrade-Option für hochsichere Wohn- und Gewerbeprojekte.`,
      fr:`Le profil PVC Salamander BluEvolution 92 ALU représente le sommet de la technologie allemande de menuiserie, combinant les avantages incomparables du PVC avec la résistance et l'élégance d'un revêtement aluminium extérieur. Le système hexacaméral avec une profondeur de construction de 92 mm et un revêtement aluminium supplémentaire de 12 mm donne une structure totale de 104 mm, capable de supporter un triple vitrage isolant jusqu'à 60 mm d'épaisseur. Les trois joints EPDM périmètriques, positionnés stratégiquement sur le cadre, le vantail et le joint central, éliminent pratiquement tous les ponts thermiques et assurent une imperméabilité parfaite au vent, à l'eau et au bruit urbain. Le coefficient thermique Uw descend à des valeurs de 0,70 W/m²K — dépassant les normes Maison Passive — grâce à la combinaison unique profil + armature à rupture thermique + triple vitrage avec Warm Edge. Neofort BIZ fournit et installe BluEvolution 92 ALU avec ferrures Roto NT/NX, certifié RC2 en standard avec option upgrade RC3 pour les projets résidentiels et commerciaux haute sécurité.`,
      es:`El perfil PVC Salamander BluEvolution 92 ALU representa la cima de la tecnología alemana de carpintería, combinando las incomparables ventajas del PVC con la resistencia y elegancia de un revestimiento de aluminio exterior. El sistema hexacameral con una profundidad constructiva de 92 mm y revestimiento adicional de 12 mm de aluminio resulta en una estructura total de 104 mm, capaz de soportar triple vidrio aislante de hasta 60 mm de grosor. Las tres juntas perimetrales EPDM, posicionadas estratégicamente en el marco, la hoja y el sello central, eliminan prácticamente todos los puentes térmicos y garantizan una impermeabilidad perfecta al viento, el agua y el ruido urbano. El coeficiente térmico Uw desciende a valores de 0,70 W/m²K — superando los estándares de Casa Pasiva — gracias a la combinación única de perfil + armadura con rotura de puente térmico + triple vidrio con Warm Edge. Neofort BIZ suministra e instala BluEvolution 92 ALU con herraje Roto NT/NX, certificado RC2 estándar con opción de actualización a RC3 para proyectos residenciales y comerciales de alta seguridad.`,
      it:`Il profilo PVC Salamander BluEvolution 92 ALU rappresenta il vertice della tecnologia tedesca di infissi, combinando i vantaggi ineguagliabili del PVC con la resistenza e l'eleganza di un rivestimento in alluminio esterno. Il sistema esacamerale con profondità di costruzione di 92 mm e rivestimento aggiuntivo di 12 mm in alluminio dà una struttura totale di 104 mm, in grado di sostenere triplo vetro termoisolante fino a 60 mm di spessore. Le tre guarnizioni perimetrali EPDM, posizionate strategicamente sul telaio, l'anta e la tenuta centrale, eliminano praticamente tutti i ponti termici e garantiscono una perfetta impermeabilità al vento, all'acqua e al rumore urbano. Il coefficiente termico Uw scende a valori di 0,70 W/m²K — superando gli standard Passive House — grazie alla combinazione unica profilo + armatura con taglio termico + triplo vetro con Warm Edge. Neofort BIZ fornisce e installa BluEvolution 92 ALU con ferramenta Roto NT/NX, certificato RC2 di serie con opzione di upgrade a RC3 per progetti residenziali e commerciali ad alta sicurezza.`,
    },
  },

  'bluevolution-92-flex': {
    img: '/products/bluevolution-92-flex.avif',
    color: '#2d5a8e',
    category: { ro:'Tâmplărie PVC Salamander', en:'Salamander PVC Joinery', de:'Salamander Kunststofffenster', fr:'Menuiserie PVC Salamander', es:'Carpintería PVC Salamander', it:'Infissi PVC Salamander' },
    serie: { ro:'BluEvolution 92', en:'BluEvolution 92', de:'BluEvolution 92', fr:'BluEvolution 92', es:'BluEvolution 92', it:'BluEvolution 92' },
    breadcrumb_parent: { ro:'Tâmplărie PVC', en:'PVC Windows', de:'Kunststofffenster', fr:'Menuiserie PVC', es:'Carpintería PVC', it:'Infissi PVC' },
    breadcrumb_parent_href: '/tamplarie-pvc',
    name: {
      ro:'Profil PVC Salamander BluEvolution 92 FLEX – 6 camere, profil drept',
      en:'Salamander BluEvolution 92 FLEX PVC Profile – 6 Chambers, Straight Profile',
      de:'Salamander BluEvolution 92 FLEX Kunststoffprofil – 6 Kammern, Gerades Profil',
      fr:'Profil PVC Salamander BluEvolution 92 FLEX – 6 Chambres, Profil Droit',
      es:'Perfil PVC Salamander BluEvolution 92 FLEX – 6 Cámaras, Perfil Recto',
      it:'Profilo PVC Salamander BluEvolution 92 FLEX – 6 Camere, Profilo Dritto',
    },
    tagline: {
      ro:'Sistemul PVC de elită cu 6 camere și 92 mm adâncime — performanță Passive House în design minimalist drept.',
      en:'The elite 6-chamber PVC system at 92 mm depth — Passive House performance in minimalist straight design.',
      de:'Das Elite-PVC-Sechskammersystem mit 92 mm Bautiefe — Passivhaus-Leistung im minimalistischen geraden Design.',
      fr:'Le système PVC d\'élite à 6 chambres et 92 mm de profondeur — performance Maison Passive en design droit minimaliste.',
      es:'El sistema PVC de élite de 6 cámaras a 92 mm de profundidad — rendimiento Casa Pasiva en diseño recto minimalista.',
      it:'Il sistema PVC d\'élite a 6 camere a 92 mm di profondità — prestazioni Passive House nel design dritto minimalista.',
    },
    specs: {
      ro:[['Adâncime constructivă','92 mm'],['Număr camere izolare','6 camere'],['Înălțime vizibilă','118 mm'],['Tip profil','Drept (FLEX)'],['Garnituri EPDM','3 nivele perimetrale'],['Armătură','Oțel zincat 1,5 mm / 2,0 mm'],['Geam compatibil','24 – 60 mm'],['Feronerie','Roto NT / NX argintie'],['Prag minim','13 mm'],['Greutate cercevea','Max. 180 kg'],['Clasă profil','A'],['Reciclabilitate','100% reciclabil'],],
      en:[['Construction depth','92 mm'],['Insulation chambers','6 chambers'],['Visible height','118 mm'],['Profile type','Straight (FLEX)'],['EPDM gaskets','3 perimeter levels'],['Reinforcement','Galvanized steel 1.5 mm / 2.0 mm'],['Compatible glass','24 – 60 mm'],['Hardware','Roto NT / NX silver'],['Min. threshold','13 mm'],['Sash weight','Max. 180 kg'],['Profile class','A'],['Recyclability','100% recyclable'],],
      de:[['Bautiefe','92 mm'],['Dämmkammern','6 Kammern'],['Sichtbreite','118 mm'],['Profiltyp','Gerade (FLEX)'],['EPDM-Dichtungen','3 Perimeter-Ebenen'],['Verstärkung','Verzinkter Stahl 1,5 mm / 2,0 mm'],['Kompatibles Glas','24 – 60 mm'],['Beschläge','Roto NT / NX silber'],['Min. Schwelle','13 mm'],['Flügelgewicht','Max. 180 kg'],['Profilklasse','A'],['Recycelbarkeit','100% recycelbar'],],
      fr:[['Profondeur','92 mm'],['Chambres d\'isolation','6 chambres'],['Hauteur visible','118 mm'],['Type profil','Droit (FLEX)'],['Joints EPDM','3 niveaux'],['Armature','Acier galvanisé 1,5 mm / 2,0 mm'],['Vitrage','24 – 60 mm'],['Ferrures','Roto NT / NX'],['Seuil min.','13 mm'],['Poids vantail','Max. 180 kg'],['Classe','A'],['Recyclabilité','100%'],],
      es:[['Profundidad','92 mm'],['Cámaras','6 cámaras'],['Altura visible','118 mm'],['Tipo perfil','Recto (FLEX)'],['Juntas EPDM','3 niveles'],['Refuerzo','Acero galv. 1,5 / 2,0 mm'],['Vidrio','24 – 60 mm'],['Herraje','Roto NT / NX'],['Umbral mín.','13 mm'],['Peso hoja','Máx. 180 kg'],['Clase','A'],['Reciclabilidad','100%'],],
      it:[['Profondità','92 mm'],['Camere','6 camere'],['Altezza visibile','118 mm'],['Tipo profilo','Dritto (FLEX)'],['Guarnizioni EPDM','3 livelli'],['Armatura','Acciaio zincato 1,5 / 2,0 mm'],['Vetro','24 – 60 mm'],['Ferramenta','Roto NT / NX'],['Soglia min.','13 mm'],['Peso anta','Max. 180 kg'],['Classe','A'],['Riciclabilità','100%'],],
    },
    perf: {
      ro:[['Coeficient termic Uw','0,70 – 1,4 W/m²K'],['Coeficient cadru Uf','1,0 W/m²K'],['Etanșeitate la apă','E 1350'],['Permeabilitate aer','Clasa 4'],['Rezistență vânt','C3 · 1200 Pa · s=1/300'],['Izolare fonică','Până la 47 dB'],['Antiefracție std.','RC2 → RC3'],],
      en:[['Thermal coefficient Uw','0.70 – 1.4 W/m²K'],['Frame Uf','1.0 W/m²K'],['Water tightness','E 1350'],['Air permeability','Class 4'],['Wind resistance','C3 · 1200 Pa · s=1/300'],['Sound insulation','Up to 47 dB'],['Anti-burglary','RC2 → RC3'],],
      de:[['Wärmedurchgang Uw','0,70 – 1,4 W/m²K'],['Rahmen Uf','1,0 W/m²K'],['Schlagregen','E 1350'],['Luftdurchlass','Klasse 4'],['Windlast','C3 · 1200 Pa · s=1/300'],['Schalldämmung','Bis 47 dB'],['Einbruchschutz','RC2 → RC3'],],
      fr:[['Uw','0,70 – 1,4 W/m²K'],['Uf cadre','1,0 W/m²K'],['Eau','E 1350'],['Air','Classe 4'],['Vent','C3 · 1200 Pa'],['Phonique','≤ 47 dB'],['Anti-effraction','RC2 → RC3'],],
      es:[['Uw','0,70 – 1,4 W/m²K'],['Uf marco','1,0 W/m²K'],['Agua','E 1350'],['Aire','Clase 4'],['Viento','C3 · 1200 Pa'],['Acústico','≤ 47 dB'],['Antirrobo','RC2 → RC3'],],
      it:[['Uw','0,70 – 1,4 W/m²K'],['Uf telaio','1,0 W/m²K'],['Acqua','E 1350'],['Aria','Classe 4'],['Vento','C3 · 1200 Pa'],['Acustico','≤ 47 dB'],['Antieffrazione','RC2 → RC3'],],
    },
    advantages: {
      ro:['92 mm adâncime constructivă — cel mai performant sistem PVC pur din gama Salamander','3 garnituri EPDM perimetrale — etanșare completă la toc, canat și garnitură mediană','Certificat Passive House — Uw 0,70 W/m²K cu geam triplu și armătură termică','Profil FLEX — design drept modern, ideal pentru arhitectură contemporană minimalistă','Compatibil cu geam până la 60 mm — maximizează izolarea fonică și termică','Clasa A de performanță — cel mai greu profil PVC pur hexacameral din piață'],
      en:['92 mm construction depth — the most powerful pure PVC system in the Salamander range','3 perimeter EPDM gaskets — complete sealing at frame, sash and central gasket','Passive House certified — Uw 0.70 W/m²K with triple glazing and thermal reinforcement','FLEX profile — modern straight design, ideal for contemporary minimalist architecture','Compatible with glass up to 60 mm — maximizes sound and thermal insulation','Class A performance — the heaviest pure hexachamber PVC profile on the market'],
      de:['92 mm Bautiefe — das leistungsstärkste reine Kunststoffsystem der Salamander-Reihe','3 perimetrische EPDM-Dichtungen — vollständige Abdichtung an Rahmen, Flügel und Mitteldichtung','Passivhaus-zertifiziert — Uw 0,70 W/m²K mit Dreifachverglasung und thermischer Verstärkung','FLEX-Profil — modernes gerades Design, ideal für zeitgenössische minimalistische Architektur','Kompatibel mit Glas bis 60 mm — maximiert Schall- und Wärmedämmung','Klasse A Leistung — das schwerste reine Sechskammer-Kunststoffprofil auf dem Markt'],
      fr:['92 mm de profondeur — le système PVC pur le plus performant de la gamme Salamander','3 joints EPDM périmètriques — étanchéité complète au cadre, vantail et joint central','Certifié Maison Passive — Uw 0,70 W/m²K avec triple vitrage et armature thermique','Profil FLEX — design droit moderne, idéal pour l\'architecture contemporaine minimaliste','Compatible avec du vitrage jusqu\'à 60 mm — maximise l\'isolation phonique et thermique','Classe A de performance — le profil PVC hexacaméral pur le plus lourd du marché'],
      es:['92 mm de profundidad — el sistema PVC puro más potente de la gama Salamander','3 juntas EPDM perimetrales — sellado completo en marco, hoja y junta central','Certificado Casa Pasiva — Uw 0,70 W/m²K con triple vidrio y armadura térmica','Perfil FLEX — diseño recto moderno, ideal para arquitectura contemporánea minimalista','Compatible con vidrio hasta 60 mm — maximiza el aislamiento acústico y térmico','Clase A de rendimiento — el perfil PVC hexacameral puro más pesado del mercado'],
      it:['92 mm di profondità — il sistema PVC puro più performante della gamma Salamander','3 guarnizioni EPDM perimetrali — tenuta completa a telaio, anta e guarnizione centrale','Certificato Passive House — Uw 0,70 W/m²K con triplo vetro e armatura termica','Profilo FLEX — design dritto moderno, ideale per architettura contemporanea minimalista','Compatibile con vetro fino a 60 mm — massimizza l\'isolamento acustico e termico','Classe A di prestazione — il profilo PVC esacamerale puro più pesante del mercato'],
    },
    seo_text: {
      ro:`Profilul PVC Salamander BluEvolution 92 FLEX este sistemul hexacameral pur de referință în industria europeană a tâmplăriei, cu o adâncime constructivă de 92 mm și un design drept minimalist perfect adaptat arhitecturii contemporane. Cele 6 camere de izolare, dispuse optim pe lățimea profilului, combinate cu cele 3 garnituri perimetrale EPDM sudate în procesul de producție, asigură o barieră termică și fonică fără precedent la această clasă de preț. Coeficientul termic al cadrului Uf = 1,0 W/m²K, combinat cu armatură din oțel zincat cu rupere termică și geam triplu SGG Planitherm, permite atingerea Uw = 0,70 W/m²K — valoare care certifică sistemul pentru clădiri Passive House și nZEB. Înălțimea vizibilă redusă de 118 mm maximizează suprafața vitrate și luminozitatea interioară. Neofort BIZ montează BluEvolution 92 FLEX cu feronerie Roto NX perimetrală, închidere multi-punct RC2 standard, upgrade RC3 opțional pentru ușile de intrare din PVC.`,
      en:`The Salamander BluEvolution 92 FLEX PVC profile is the reference pure hexachamber system in the European joinery industry, with a 92 mm construction depth and a minimalist straight design perfectly adapted to contemporary architecture. The 6 insulation chambers, optimally arranged across the profile width, combined with the 3 perimeter EPDM gaskets welded during production, provide an unprecedented thermal and acoustic barrier at this price point. The frame thermal coefficient Uf = 1.0 W/m²K, combined with thermally-broken steel reinforcement and SGG Planitherm triple glazing, allows achieving Uw = 0.70 W/m²K — a value that certifies the system for Passive House and nZEB buildings. The reduced visible height of 118 mm maximises the glazed area and interior brightness. Neofort BIZ installs BluEvolution 92 FLEX with perimeter Roto NX hardware, standard RC2 multi-point locking, optional RC3 upgrade for PVC entrance doors.`,
      de:`Das Salamander BluEvolution 92 FLEX Kunststoffprofil ist das Referenz-Reinkammerprofil in der europäischen Fensterbaubranche, mit einer Bautiefe von 92 mm und einem minimalistischen geraden Design, das perfekt an zeitgenössische Architektur angepasst ist. Die 6 Dämmkammern, optimal über die Profilbreite verteilt, kombiniert mit den 3 im Herstellungsprozess angeschweißten perimetrischen EPDM-Dichtungen, bieten eine beispiellose Wärme- und Schallschutzbarriere in dieser Preisklasse. Der Rahmen-Wärmedurchgangskoeffizient Uf = 1,0 W/m²K, kombiniert mit wärmebrückenfreier Stahlverstärkung und SGG Planitherm-Dreifachverglasung, ermöglicht das Erreichen von Uw = 0,70 W/m²K — ein Wert, der das System für Passivhaus- und nZEB-Gebäude zertifiziert. Die reduzierte Sichtbreite von 118 mm maximiert die Glasfläche und die Helligkeit im Innenraum. Neofort BIZ montiert BluEvolution 92 FLEX mit perimetrischem Roto NX-Beschlag, standardmäßigem RC2-Mehrpunktverriegelung, optionalem RC3-Upgrade für Kunststoff-Eingangstüren.`,
      fr:`Le profil PVC Salamander BluEvolution 92 FLEX est le système hexacaméral pur de référence dans l'industrie européenne de la menuiserie, avec une profondeur de construction de 92 mm et un design droit minimaliste parfaitement adapté à l'architecture contemporaine. Les 6 chambres d'isolation, disposées de manière optimale sur la largeur du profil, combinées aux 3 joints EPDM périmètriques soudés lors de la production, offrent une barrière thermique et acoustique sans précédent à ce niveau de prix. Le coefficient thermique du cadre Uf = 1,0 W/m²K, combiné à une armature en acier à rupture thermique et au triple vitrage SGG Planitherm, permet d'atteindre Uw = 0,70 W/m²K — une valeur qui certifie le système pour les bâtiments Maison Passive et nZEB. La hauteur visible réduite de 118 mm maximise la surface vitrée et la luminosité intérieure. Neofort BIZ installe BluEvolution 92 FLEX avec ferrures Roto NX périmètriques, verrouillage multi-points RC2 standard, mise à niveau RC3 optionnelle pour les portes d'entrée en PVC.`,
      es:`El perfil PVC Salamander BluEvolution 92 FLEX es el sistema hexacameral puro de referencia en la industria europea de carpintería, con una profundidad constructiva de 92 mm y un diseño recto minimalista perfectamente adaptado a la arquitectura contemporánea. Las 6 cámaras de aislamiento, dispuestas de manera óptima a lo largo del perfil, combinadas con las 3 juntas EPDM perimetrales soldadas durante la producción, proporcionan una barrera térmica y acústica sin precedentes a este nivel de precio. El coeficiente térmico del marco Uf = 1,0 W/m²K, combinado con refuerzo de acero con rotura de puente térmico y triple vidrio SGG Planitherm, permite alcanzar Uw = 0,70 W/m²K — un valor que certifica el sistema para edificios Casa Pasiva y nZEB. La altura visible reducida de 118 mm maximiza la superficie acristalada y la luminosidad interior. Neofort BIZ instala BluEvolution 92 FLEX con herraje perimetral Roto NX, cerradura multi-punto RC2 estándar, actualización RC3 opcional para puertas de entrada de PVC.`,
      it:`Il profilo PVC Salamander BluEvolution 92 FLEX è il sistema esacamerale puro di riferimento nell'industria europea degli infissi, con una profondità di costruzione di 92 mm e un design dritto minimalista perfettamente adattato all'architettura contemporanea. Le 6 camere di isolamento, disposte in modo ottimale lungo il profilo, combinate con le 3 guarnizioni EPDM perimetrali saldate durante la produzione, forniscono una barriera termica e acustica senza precedenti a questo livello di prezzo. Il coefficiente termico del telaio Uf = 1,0 W/m²K, combinato con armatura in acciaio a taglio termico e triplo vetro SGG Planitherm, permette di raggiungere Uw = 0,70 W/m²K — un valore che certifica il sistema per edifici Passive House e nZEB. L'altezza visibile ridotta di 118 mm massimizza la superficie vetrata e la luminosità interna. Neofort BIZ installa BluEvolution 92 FLEX con ferramenta perimetrale Roto NX, chiusura multi-punto RC2 standard, upgrade RC3 opzionale per le porte d'ingresso in PVC.`,
    },
  },

  'bluevolution-92-round': {
    img: '/products/bluevolution-92-round.avif',
    color: '#2d5a8e',
    category: { ro:'Tâmplărie PVC Salamander', en:'Salamander PVC Joinery', de:'Salamander Kunststofffenster', fr:'Menuiserie PVC Salamander', es:'Carpintería PVC Salamander', it:'Infissi PVC Salamander' },
    serie: { ro:'BluEvolution 92', en:'BluEvolution 92', de:'BluEvolution 92', fr:'BluEvolution 92', es:'BluEvolution 92', it:'BluEvolution 92' },
    breadcrumb_parent: { ro:'Tâmplărie PVC', en:'PVC Windows', de:'Kunststofffenster', fr:'Menuiserie PVC', es:'Carpintería PVC', it:'Infissi PVC' },
    breadcrumb_parent_href: '/tamplarie-pvc',
    name: {
      ro:'Profil PVC Salamander BluEvolution 92 ROUND – 6 camere, profil rotunjit',
      en:'Salamander BluEvolution 92 ROUND PVC Profile – 6 Chambers, Rounded Profile',
      de:'Salamander BluEvolution 92 ROUND Kunststoffprofil – 6 Kammern, Rundes Profil',
      fr:'Profil PVC Salamander BluEvolution 92 ROUND – 6 Chambres, Profil Arrondi',
      es:'Perfil PVC Salamander BluEvolution 92 ROUND – 6 Cámaras, Perfil Redondeado',
      it:'Profilo PVC Salamander BluEvolution 92 ROUND – 6 Camere, Profilo Arrotondato',
    },
    tagline: {
      ro:'Performanța de vârf BluEvolution 92 cu design curbat clasic — 6 camere, 3 garnituri, Passive House.',
      en:'BluEvolution 92 top performance with classic rounded design — 6 chambers, 3 gaskets, Passive House.',
      de:'BluEvolution 92 Spitzenleistung mit klassisch gerundetem Design — 6 Kammern, 3 Dichtungen, Passivhaus.',
      fr:'Performances BluEvolution 92 avec design arrondi classique — 6 chambres, 3 joints, Maison Passive.',
      es:'Rendimiento BluEvolution 92 con diseño redondeado clásico — 6 cámaras, 3 juntas, Casa Pasiva.',
      it:'Prestazioni BluEvolution 92 con design arrotondato classico — 6 camere, 3 guarnizioni, Passive House.',
    },
    specs: {
      ro:[['Adâncime constructivă','92 mm'],['Număr camere','6 camere'],['Înălțime vizibilă','118 mm'],['Tip profil','Rotunjit (ROUND)'],['Garnituri EPDM','3 nivele perimetrale'],['Armătură','Oțel zincat 1,5 / 2,0 mm'],['Geam compatibil','24 – 60 mm'],['Feronerie','Roto NT / NX argintie'],['Prag minim','13 mm'],['Greutate cercevea','Max. 180 kg'],['Clasă profil','A'],['Reciclabilitate','100%'],],
      en:[['Construction depth','92 mm'],['Chambers','6 chambers'],['Visible height','118 mm'],['Profile type','Rounded (ROUND)'],['EPDM gaskets','3 levels'],['Reinforcement','Galv. steel 1.5 / 2.0 mm'],['Compatible glass','24 – 60 mm'],['Hardware','Roto NT / NX silver'],['Min. threshold','13 mm'],['Sash weight','Max. 180 kg'],['Profile class','A'],['Recyclability','100%'],],
      de:[['Bautiefe','92 mm'],['Kammern','6 Kammern'],['Sichtbreite','118 mm'],['Profiltyp','Gerundet (ROUND)'],['EPDM-Dichtungen','3 Ebenen'],['Verstärkung','Verz. Stahl 1,5 / 2,0 mm'],['Verglasung','24 – 60 mm'],['Beschläge','Roto NT / NX'],['Schwelle min.','13 mm'],['Flügelgewicht','Max. 180 kg'],['Klasse','A'],['Recycelbar','100%'],],
      fr:[['Profondeur','92 mm'],['Chambres','6 chambres'],['Hauteur visible','118 mm'],['Profil','Arrondi (ROUND)'],['Joints EPDM','3 niveaux'],['Armature','Acier galv.'],['Vitrage','24 – 60 mm'],['Ferrures','Roto NT / NX'],['Seuil','13 mm'],['Poids vantail','180 kg'],['Classe','A'],['Recyclable','100%'],],
      es:[['Profundidad','92 mm'],['Cámaras','6'],['Altura visible','118 mm'],['Perfil','Redondeado'],['Juntas EPDM','3 niveles'],['Refuerzo','Acero galv.'],['Vidrio','24 – 60 mm'],['Herraje','Roto NT / NX'],['Umbral','13 mm'],['Peso hoja','180 kg'],['Clase','A'],['Reciclable','100%'],],
      it:[['Profondità','92 mm'],['Camere','6'],['Altezza visibile','118 mm'],['Profilo','Arrotondato'],['Guarnizioni','3 livelli'],['Armatura','Acciaio zincato'],['Vetro','24 – 60 mm'],['Ferramenta','Roto NT / NX'],['Soglia','13 mm'],['Peso anta','180 kg'],['Classe','A'],['Riciclabile','100%'],],
    },
    perf: {
      ro:[['Uw','0,70 – 1,4 W/m²K'],['Uf cadru','1,0 W/m²K'],['Etanșeitate apă','E 1350'],['Permeabilitate aer','Clasa 4'],['Vânt','C3 · 1200 Pa'],['Fonică','≤ 47 dB'],['Antiefracție','RC2 → RC3'],],
      en:[['Uw','0.70 – 1.4 W/m²K'],['Frame Uf','1.0 W/m²K'],['Water','E 1350'],['Air','Class 4'],['Wind','C3 · 1200 Pa'],['Sound','≤ 47 dB'],['Security','RC2 → RC3'],],
      de:[['Uw','0,70 – 1,4 W/m²K'],['Uf','1,0 W/m²K'],['Wasser','E 1350'],['Luft','Klasse 4'],['Wind','C3 · 1200 Pa'],['Schall','≤ 47 dB'],['Einbruch','RC2 → RC3'],],
      fr:[['Uw','0,70 – 1,4 W/m²K'],['Uf','1,0 W/m²K'],['Eau','E 1350'],['Air','Classe 4'],['Vent','C3 · 1200 Pa'],['Son','≤ 47 dB'],['Effraction','RC2 → RC3'],],
      es:[['Uw','0,70 – 1,4 W/m²K'],['Uf','1,0 W/m²K'],['Agua','E 1350'],['Aire','Clase 4'],['Viento','C3 · 1200 Pa'],['Sonido','≤ 47 dB'],['Robo','RC2 → RC3'],],
      it:[['Uw','0,70 – 1,4 W/m²K'],['Uf','1,0 W/m²K'],['Acqua','E 1350'],['Aria','Classe 4'],['Vento','C3 · 1200 Pa'],['Suono','≤ 47 dB'],['Effrazione','RC2 → RC3'],],
    },
    advantages: {
      ro:['Design ROUND — profil curbat clasic, elegant, ideal pentru renovarea locuințelor tradiționale','Aceleași performanțe ca FLEX — 6 camere, 3 garnituri EPDM, Uw 0,70 W/m²K','Compatibil cu toate tipologiile — oscilo-batant, fixe, arcuiți, trapez, triunghi','Geam până la 60 mm — suportă triplu vitrat fonoizolant Stadip Silence','Clasa A de performanță Salamander — calitate germană, producție certificată ISO','Armătură oțel zincat — stabilitate superioară la suprafețe mari vitrate'],
      en:['ROUND design — classic curved profile, elegant, ideal for renovating traditional homes','Same performance as FLEX — 6 chambers, 3 EPDM gaskets, Uw 0.70 W/m²K','Compatible with all typologies — tilt-and-turn, fixed, arched, trapezoidal, triangular','Glazing up to 60 mm — supports triple soundproofing Stadip Silence glass','Salamander Class A performance — German quality, ISO certified production','Galvanized steel reinforcement — superior stability for large glazed areas'],
      de:['ROUND-Design — klassisches geschwungenes Profil, elegant, ideal für die Renovierung traditioneller Häuser','Gleiche Leistung wie FLEX — 6 Kammern, 3 EPDM-Dichtungen, Uw 0,70 W/m²K','Kompatibel mit allen Typologien — Dreh-Kipp, fest, gewölbt, trapezförmig, dreieckig','Verglasung bis 60 mm — trägt Dreifach-Schallschutzglas Stadip Silence','Salamander Klasse A Leistung — deutsche Qualität, ISO-zertifizierte Produktion','Galvanisierte Stahlverstärkung — überragende Stabilität bei großen Glasflächen'],
      fr:['Design ROUND — profil courbe classique, élégant, idéal pour la rénovation de maisons traditionnelles','Mêmes performances que FLEX — 6 chambres, 3 joints EPDM, Uw 0,70 W/m²K','Compatible avec toutes les typologies — oscillo-battant, fixe, arqué, trapèze, triangle','Vitrage jusqu\'à 60 mm — supporte le triple vitrage phonique Stadip Silence','Performance classe A Salamander — qualité allemande, production certifiée ISO','Armature acier galvanisé — stabilité supérieure pour les grandes surfaces vitrées'],
      es:['Diseño ROUND — perfil curvo clásico, elegante, ideal para renovar viviendas tradicionales','Mismo rendimiento que FLEX — 6 cámaras, 3 juntas EPDM, Uw 0,70 W/m²K','Compatible con todas las tipologías — oscilobatiente, fijo, arqueado, trapezoidal, triangular','Vidrio hasta 60 mm — soporta triple vidrio fonoaislante Stadip Silence','Rendimiento clase A Salamander — calidad alemana, producción certificada ISO','Refuerzo de acero galvanizado — estabilidad superior en grandes superficies acristaladas'],
      it:['Design ROUND — profilo curvato classico, elegante, ideale per ristrutturare abitazioni tradizionali','Stesse prestazioni del FLEX — 6 camere, 3 guarnizioni EPDM, Uw 0,70 W/m²K','Compatibile con tutte le tipologie — vasistas, fisso, arcuato, trapezoidale, triangolare','Vetro fino a 60 mm — supporta triplo vetro fonoisolante Stadip Silence','Prestazione classe A Salamander — qualità tedesca, produzione certificata ISO','Armatura in acciaio zincato — stabilità superiore per grandi superfici vetrate'],
    },
    seo_text: {
      ro:`Profilul PVC Salamander BluEvolution 92 ROUND oferă performanțele tehnice de excepție ale seriei BluEvolution 92 — cea mai avansată tehnologie hexacamerală din gama Salamander — în varianta cu design curbat clasic, preferată pentru proiecte rezidențiale tradiționale și renovări de case cu arhitectură clasică. Cu aceeași adâncime constructivă de 92 mm, 6 camere de izolare, 3 garnituri EPDM perimetrale și armătură din oțel zincat, ROUND atinge coeficientul termic Uw = 0,70 W/m²K în configurație optimă — valoare certificată pentru Passive House și nZEB. Sistemul suportă geam termoizolator dublu și triplu de la 24 mm la 60 mm grosime, inclusiv pachete de sticlă fonoizolantă SGG Stadip Silence pentru locații urbane cu trafic intens. Feroneria Roto NT/NX cu toate punctele de închidere antiefracție asigură certificare RC2 standard, cu posibilitate de upgrade la RC3 prin adăugarea hardware MPower ascuns. Neofort BIZ livrează și montează BluEvolution 92 ROUND în toată România și Europa, cu garanție de producție și asistență tehnică specializată.`,
      en:`The Salamander BluEvolution 92 ROUND PVC profile offers the exceptional technical performance of the BluEvolution 92 series — the most advanced hexachamber technology in the Salamander range — in the classic curved design variant, preferred for traditional residential projects and renovations of homes with classic architecture. With the same 92 mm construction depth, 6 insulation chambers, 3 perimeter EPDM gaskets and galvanized steel reinforcement, ROUND achieves a thermal coefficient Uw = 0.70 W/m²K in optimal configuration — a value certified for Passive House and nZEB. The system supports double and triple thermal glazing from 24 mm to 60 mm thickness, including SGG Stadip Silence sound-insulating glass packages for urban locations with heavy traffic. Roto NT/NX hardware with all anti-burglary locking points provides standard RC2 certification, with the possibility of upgrading to RC3 by adding hidden MPower hardware. Neofort BIZ delivers and installs BluEvolution 92 ROUND throughout Romania and Europe, with production warranty and specialised technical assistance.`,
      de:`Das Salamander BluEvolution 92 ROUND Kunststoffprofil bietet die außergewöhnlichen technischen Leistungen der BluEvolution 92-Serie — der fortschrittlichsten Sechskammertechnologie der Salamander-Reihe — in der Variante mit klassisch gerundetem Design, die für traditionelle Wohnprojekte und Renovierungen von Häusern mit klassischer Architektur bevorzugt wird. Mit der gleichen Bautiefe von 92 mm, 6 Dämmkammern, 3 perimetrischen EPDM-Dichtungen und galvanisierter Stahlverstärkung erreicht ROUND einen Wärmedurchgangskoeffizienten Uw = 0,70 W/m²K in optimaler Konfiguration — ein Wert, der für Passivhaus und nZEB zertifiziert ist. Das System unterstützt Zweifach- und Dreifach-Wärmeschutzverglasung von 24 mm bis 60 mm Dicke, einschließlich SGG Stadip Silence Schallschutzglaspakete für städtische Standorte mit starkem Verkehr. Roto NT/NX-Beschläge mit allen Einbruchsicherungspunkten bieten RC2-Standardzertifizierung mit der Möglichkeit, durch Hinzufügen von verdecktem MPower-Beschlag auf RC3 aufzurüsten. Neofort BIZ liefert und montiert BluEvolution 92 ROUND in ganz Rumänien und Europa mit Produktionsgarantie und spezialisierter technischer Unterstützung.`,
      fr:`Le profil PVC Salamander BluEvolution 92 ROUND offre les performances techniques exceptionnelles de la série BluEvolution 92 — la technologie hexacamérale la plus avancée de la gamme Salamander — dans la variante design arrondi classique, préférée pour les projets résidentiels traditionnels et les rénovations de maisons à architecture classique. Avec la même profondeur de construction de 92 mm, 6 chambres d'isolation, 3 joints EPDM périmètriques et armature en acier galvanisé, ROUND atteint un coefficient thermique Uw = 0,70 W/m²K en configuration optimale — une valeur certifiée Maison Passive et nZEB. Le système supporte un double et triple vitrage thermique de 24 mm à 60 mm d'épaisseur, y compris les ensembles de verre phonique SGG Stadip Silence pour les emplacements urbains à fort trafic. Les ferrures Roto NT/NX avec tous les points de verrouillage anti-effraction offrent une certification RC2 standard, avec possibilité de mise à niveau RC3 en ajoutant des ferrures cachées MPower. Neofort BIZ livre et installe BluEvolution 92 ROUND dans toute la Roumanie et l'Europe, avec garantie de production et assistance technique spécialisée.`,
      es:`El perfil PVC Salamander BluEvolution 92 ROUND ofrece el rendimiento técnico excepcional de la serie BluEvolution 92 — la tecnología hexacameral más avanzada de la gama Salamander — en la variante de diseño redondeado clásico, preferida para proyectos residenciales tradicionales y renovaciones de viviendas con arquitectura clásica. Con la misma profundidad constructiva de 92 mm, 6 cámaras de aislamiento, 3 juntas EPDM perimetrales y refuerzo de acero galvanizado, ROUND alcanza un coeficiente térmico Uw = 0,70 W/m²K en configuración óptima — un valor certificado para Casa Pasiva y nZEB. El sistema soporta doble y triple vidrio aislante de 24 mm a 60 mm de espesor, incluidos los paquetes de vidrio fonoisolante SGG Stadip Silence para ubicaciones urbanas con tráfico intenso. El herraje Roto NT/NX con todos los puntos de cierre antirrobo proporciona certificación RC2 estándar, con posibilidad de actualización a RC3 añadiendo herraje oculto MPower. Neofort BIZ entrega e instala BluEvolution 92 ROUND en toda Rumanía y Europa, con garantía de producción y asistencia técnica especializada.`,
      it:`Il profilo PVC Salamander BluEvolution 92 ROUND offre le eccezionali prestazioni tecniche della serie BluEvolution 92 — la tecnologia esacamerale più avanzata della gamma Salamander — nella variante con design arrotondato classico, preferita per i progetti residenziali tradizionali e le ristrutturazioni di abitazioni con architettura classica. Con la stessa profondità di costruzione di 92 mm, 6 camere di isolamento, 3 guarnizioni EPDM perimetrali e armatura in acciaio zincato, ROUND raggiunge un coefficiente termico Uw = 0,70 W/m²K nella configurazione ottimale — un valore certificato per Passive House e nZEB. Il sistema supporta doppio e triplo vetro termoisolante da 24 mm a 60 mm di spessore, compresi i pacchetti di vetro fonoisolante SGG Stadip Silence per le location urbane con traffico intenso. La ferramenta Roto NT/NX con tutti i punti di chiusura antieffrazione fornisce la certificazione RC2 standard, con possibilità di upgrade a RC3 aggiungendo ferramenta nascosta MPower. Neofort BIZ consegna e installa BluEvolution 92 ROUND in tutta la Romania e l'Europa, con garanzia di produzione e assistenza tecnica specializzata.`,
    },
  },

  'greenevolution-76-md-round': {
    img: '/products/greenevolution-76-md-round.avif',
    color: '#4a7c59',
    category: { ro:'Tâmplărie PVC Salamander', en:'Salamander PVC Joinery', de:'Salamander Kunststofffenster', fr:'Menuiserie PVC Salamander', es:'Carpintería PVC Salamander', it:'Infissi PVC Salamander' },
    serie: { ro:'GreenEvolution 76', en:'GreenEvolution 76', de:'GreenEvolution 76', fr:'GreenEvolution 76', es:'GreenEvolution 76', it:'GreenEvolution 76' },
    breadcrumb_parent: { ro:'Tâmplărie PVC', en:'PVC Windows', de:'Kunststofffenster', fr:'Menuiserie PVC', es:'Carpintería PVC', it:'Infissi PVC' },
    breadcrumb_parent_href: '/tamplarie-pvc',
    name: {
      ro:'Profil PVC Salamander GreenEvolution 76 MD ROUND – 5 camere, design rotunjit',
      en:'Salamander GreenEvolution 76 MD ROUND PVC Profile – 6 Chambers, Rounded Design',
      de:'Salamander GreenEvolution 76 MD ROUND Kunststoffprofil – 5 Kammern, Rundes Design',
      fr:'Profil PVC Salamander GreenEvolution 76 MD ROUND – 5 Chambres, Design Arrondi',
      es:'Perfil PVC Salamander GreenEvolution 76 MD ROUND – 5 Cámaras, Diseño Redondeado',
      it:'Profilo PVC Salamander GreenEvolution 76 MD ROUND – 5 Camere, Design Arrotondato',
    },
    tagline: {
      ro:'Sistem PVC pentacameral de înaltă performanță la 76 mm — 3 garnituri mediane, certificat nZEB, raport calitate-preț optim.',
      en:'High-performance 76 mm five-chamber PVC system — 3 middle gaskets, nZEB certified, optimal value for money.',
      de:'76 mm Hochleistungs-Fünfkammer-Kunststoffsystem — 3 Mitteldichtungen, nZEB-zertifiziert, optimales Preis-Leistungs-Verhältnis.',
      fr:'Système PVC pentacaméral haute performance à 76 mm — 3 joints médians, certifié nZEB, rapport qualité-prix optimal.',
      es:'Sistema PVC pentacameral de alto rendimiento a 76 mm — 3 juntas medianas, certificado nZEB, óptima relación calidad-precio.',
      it:'Sistema PVC pentacamerale ad alte prestazioni a 76 mm — 3 guarnizioni mediane, certificato nZEB, ottimo rapporto qualità-prezzo.',
    },
    specs: {
      ro:[['Adâncime constructivă','76 mm'],['Număr camere','5 camere'],['Înălțime vizibilă','118 mm'],['Tip profil','Rotunjit (MD ROUND)'],['Garnituri EPDM','2 garnituri EPDM'],['Armătură','Oțel zincat 1,5 / 2,0 mm'],['Geam compatibil','24 – 48 mm'],['Feronerie','Roto NT / NX argintie'],['Prag minim','13 mm'],['Greutate cercevea','Max. 180 kg'],['Clasă profil','A'],['Reciclabilitate','100%'],],
      en:[['Construction depth','76 mm'],['Chambers','5 chambers'],['Visible height','118 mm'],['Profile type','Rounded (MD ROUND)'],['EPDM gaskets','2 EPDM gaskets'],['Reinforcement','Galv. steel 1.5 / 2.0 mm'],['Compatible glass','24 – 48 mm'],['Hardware','Roto NT / NX silver'],['Min. threshold','13 mm'],['Sash weight','Max. 180 kg'],['Profile class','A'],['Recyclability','100%'],],
      de:[['Bautiefe','76 mm'],['Kammern','5 Kammern'],['Sichtbreite','118 mm'],['Profiltyp','Gerundet (MD ROUND)'],['EPDM-Dichtungen','2 EPDM-Dichtungen'],['Verstärkung','Verz. Stahl 1,5 / 2,0 mm'],['Verglasung','24 – 48 mm'],['Beschläge','Roto NT / NX'],['Schwelle','13 mm'],['Gewicht','Max. 180 kg'],['Klasse','A'],['Recycelbar','100%'],],
      fr:[['Profondeur','76 mm'],['Chambres','5 chambres'],['Hauteur visible','118 mm'],['Profil','Arrondi (MD ROUND)'],['Joints EPDM','2 joints EPDM'],['Armature','Acier galv.'],['Vitrage','24 – 48 mm'],['Ferrures','Roto NT / NX'],['Seuil','13 mm'],['Poids','Max. 180 kg'],['Classe','A'],['Recyclable','100%'],],
      es:[['Profundidad','76 mm'],['Cámaras','6'],['Altura visible','118 mm'],['Perfil','Redondeado'],['Juntas EPDM','2 juntas EPDM'],['Refuerzo','Acero galv.'],['Vidrio','24 – 48 mm'],['Herraje','Roto NT / NX'],['Umbral','13 mm'],['Peso','Max. 180 kg'],['Clase','A'],['Reciclable','100%'],],
      it:[['Profondità','76 mm'],['Camere','6'],['Altezza visibile','118 mm'],['Profilo','Arrotondato'],['Guarnizioni','3 (con guarn. mediana)'],['Armatura','Acciaio zincato'],['Vetro','24 – 48 mm'],['Ferramenta','Roto NT / NX'],['Soglia','13 mm'],['Peso','Max. 180 kg'],['Classe','A'],['Riciclabile','100%'],],
    },
    perf: {
      ro:[['Uw','0,73 – 1,4 W/m²K'],['Uf cadru','1,2 W/m²K'],['Etanșeitate apă','E 1350'],['Permeabilitate aer','Clasa 4'],['Vânt','C3 · 1200 Pa'],['Fonică','≤ 47 dB'],['Antiefracție','RC2 → RC3'],],
      en:[['Uw','0.73 – 1.4 W/m²K'],['Frame Uf','1.2 W/m²K'],['Water','E 1350'],['Air','Class 4'],['Wind','C3 · 1200 Pa'],['Sound','≤ 47 dB'],['Security','RC2 → RC3'],],
      de:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Wasser','E 1350'],['Luft','Klasse 4'],['Wind','C3 · 1200 Pa'],['Schall','≤ 47 dB'],['Einbruch','RC2 → RC3'],],
      fr:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Eau','E 1350'],['Air','Classe 4'],['Vent','C3 · 1200 Pa'],['Son','≤ 47 dB'],['Effraction','RC2 → RC3'],],
      es:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Agua','E 1350'],['Aire','Clase 4'],['Viento','C3 · 1200 Pa'],['Sonido','≤ 47 dB'],['Robo','RC2 → RC3'],],
      it:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Acqua','E 1350'],['Aria','Classe 4'],['Vento','C3 · 1200 Pa'],['Suono','≤ 47 dB'],['Effrazione','RC2 → RC3'],],
    },
    advantages: {
      ro:['5 camere de izolare la 76 mm — performanță comparabilă cu sisteme de 82 mm din alte mărci','Garnitură mediană inclusă — etanșare în 3 puncte, eliminare condensare la rost','Certificat nZEB — Uw 0,73 W/m²K, compatibil cu cerințele clădirilor cu consum aproape zero','Raport calitate-preț optim — clasa A la preț de producție mediu, ideal pentru proiecte rezidențiale','Design MD ROUND clasic — profil curbat, compatibil cu arhitectura tradițională românească','Armătură oțel zincat — susține suprafețe vitrate mari fără deformare'],
      en:['5 insulation chambers at 76 mm — performance comparable to 82 mm systems from other brands','Included middle gasket — 3-point sealing, eliminating joint condensation','nZEB certified — Uw 0.73 W/m²K, compatible with nearly zero-energy building requirements','Optimal value for money — Class A at medium production price, ideal for residential projects','Classic MD ROUND design — curved profile, compatible with traditional Romanian architecture','Galvanized steel reinforcement — supports large glazed areas without deformation'],
      de:['5 Dämmkammern bei 76 mm — Leistung vergleichbar mit 82-mm-Systemen anderer Marken','Mitteldichtung inklusive — 3-Punkt-Abdichtung, Kondensatbildung an der Fuge beseitigt','nZEB-zertifiziert — Uw 0,73 W/m²K, kompatibel mit Niedrigstenergiegebäudeanforderungen','Optimales Preis-Leistungs-Verhältnis — Klasse A zum mittleren Produktionspreis, ideal für Wohnprojekte','Klassisches MD ROUND-Design — geschwungenes Profil, kompatibel mit traditioneller rumänischer Architektur','Galvanisierte Stahlverstärkung — trägt große Glasflächen ohne Verformung'],
      fr:['5 chambres d\'isolation à 76 mm — performance comparable aux systèmes 82 mm d\'autres marques','Joint médian inclus — étanchéité en 3 points, élimination de la condensation au joint','Certifié nZEB — Uw 0,73 W/m²K, compatible avec les exigences des bâtiments à énergie quasi nulle','Rapport qualité-prix optimal — classe A à prix de production moyen, idéal pour les projets résidentiels','Design MD ROUND classique — profil arrondi, compatible avec l\'architecture traditionnelle roumaine','Armature acier galvanisé — supporte de grandes surfaces vitrées sans déformation'],
      es:['5 cámaras de aislamiento a 76 mm — rendimiento comparable a sistemas de 82 mm de otras marcas','Junta mediana incluida — sellado en 3 puntos, eliminación de condensación en la junta','Certificado nZEB — Uw 0,73 W/m²K, compatible con los requisitos de edificios de consumo casi nulo','Óptima relación calidad-precio — clase A a precio de producción medio, ideal para proyectos residenciales','Diseño MD ROUND clásico — perfil curvado, compatible con la arquitectura tradicional rumana','Refuerzo de acero galvanizado — soporta grandes superficies acristaladas sin deformación'],
      it:['5 camere di isolamento a 76 mm — prestazioni paragonabili ai sistemi da 82 mm di altri marchi','Guarnizione mediana inclusa — tenuta in 3 punti, eliminazione della condensazione al giunto','Certificato nZEB — Uw 0,73 W/m²K, compatibile con i requisiti degli edifici a energia quasi zero','Ottimo rapporto qualità-prezzo — classe A a prezzo di produzione medio, ideale per progetti residenziali','Design MD ROUND classico — profilo curvato, compatibile con l\'architettura tradizionale rumena','Armatura in acciaio zincato — supporta grandi superfici vetrate senza deformazione'],
    },
    seo_text: {
      ro:`Profilul PVC Salamander GreenEvolution 76 MD ROUND este alegerea optimă pentru proiectele rezidențiale care necesită performanță energetică certificată nZEB la un raport calitate-preț competitiv. Sistemul pentacameral cu adâncime constructivă de 76 mm și garnitură mediană (MD) asigură 3 puncte de etanșare perimetrală — toc, canat și etanșare mediană — eliminând complet condensul la rost și punțile termice la îmbinare. Coeficientul termic Uw de 0,73 W/m²K în configurație standard face din GreenEvolution 76 MD ROUND un sistem compatibil cu cerințele minime pentru clădirile cu consum de energie aproape zero (nZEB) impuse de legislația română și europeană. Profilul curbat clasic (ROUND) îl face preferat în renovarea locuințelor cu arhitectură tradițională, unde estetica profilului rotunjit se integrează mai armonios decât variantele drepte. Neofort BIZ livrează și montează GreenEvolution 76 MD ROUND cu geam termopan dublu sau triplu SGG Planitherm, feronerie Roto NT anti-efracție RC2, precadre Blaugelb Triotherm+ și benzi de etanșare pentru o instalare certificată RAL.`,
      en:`The Salamander GreenEvolution 76 MD ROUND PVC profile is the optimal choice for residential projects that require nZEB-certified energy performance at a competitive value for money. The five-chamber system with a 76 mm construction depth and middle gasket (MD) ensures 3 perimeter sealing points — frame, sash and central seal — completely eliminating joint condensation and thermal bridges at the joint. The thermal coefficient Uw of 0.73 W/m²K in standard configuration makes the GreenEvolution 76 MD ROUND compatible with the minimum requirements for nearly zero energy buildings (nZEB) required by Romanian and European legislation. The classic curved profile (ROUND) makes it preferred in the renovation of homes with traditional architecture, where the aesthetics of the rounded profile integrates more harmoniously than straight variants. Neofort BIZ delivers and installs GreenEvolution 76 MD ROUND with SGG Planitherm double or triple thermal glazing, Roto NT anti-burglary RC2 hardware, Blaugelb Triotherm+ precasings and sealing tapes for RAL-certified installation.`,
      de:`Das Salamander GreenEvolution 76 MD ROUND Kunststoffprofil ist die optimale Wahl für Wohnprojekte, die eine nZEB-zertifizierte Energieleistung bei einem wettbewerbsfähigen Preis-Leistungs-Verhältnis erfordern. Das Fünfkammersystem mit einer Bautiefe von 76 mm und Mitteldichtung (MD) gewährleistet 3 perimetrische Abdichtungspunkte — Rahmen, Flügel und Mitteldichtung — und eliminiert vollständig Fugenkondensat und Wärmebrücken an der Fuge. Der Wärmedurchgangskoeffizient Uw von 0,73 W/m²K in Standardkonfiguration macht das GreenEvolution 76 MD ROUND kompatibel mit den Mindestanforderungen für Niedrigstenergiegebäude (nZEB), die von der rumänischen und europäischen Gesetzgebung gefordert werden. Das klassische geschwungene Profil (ROUND) macht es bei der Renovierung von Häusern mit traditioneller Architektur bevorzugt, wo die Ästhetik des gerundeten Profils harmonischer integriert als gerade Varianten. Neofort BIZ liefert und montiert GreenEvolution 76 MD ROUND mit SGG Planitherm Zweifach- oder Dreifachverglasung, Roto NT Einbruchschutz RC2, Blaugelb Triotherm+ Vorfenster und Dichtbänder für eine RAL-zertifizierte Montage.`,
      fr:`Le profil PVC Salamander GreenEvolution 76 MD ROUND est le choix optimal pour les projets résidentiels qui nécessitent des performances énergétiques certifiées nZEB à un rapport qualité-prix compétitif. Le système pentacaméral avec une profondeur de construction de 76 mm et joint médian (MD) assure 3 points d'étanchéité périmètriques — cadre, vantail et joint central — en éliminant complètement la condensation au joint et les ponts thermiques à la jonction. Le coefficient thermique Uw de 0,73 W/m²K en configuration standard rend le GreenEvolution 76 MD ROUND compatible avec les exigences minimales pour les bâtiments à consommation d'énergie quasi nulle (nZEB) imposées par la législation roumaine et européenne. Le profil courbe classique (ROUND) le rend préféré dans la rénovation de maisons à architecture traditionnelle, où l'esthétique du profil arrondi s'intègre plus harmonieusement que les variantes droites. Neofort BIZ livre et installe GreenEvolution 76 MD ROUND avec double ou triple vitrage SGG Planitherm, ferrures Roto NT anti-effraction RC2, précadres Blaugelb Triotherm+ et bandes d'étanchéité pour une installation certifiée RAL.`,
      es:`El perfil PVC Salamander GreenEvolution 76 MD ROUND es la elección óptima para proyectos residenciales que requieren un rendimiento energético certificado nZEB a una competitiva relación calidad-precio. El sistema pentacameral con una profundidad constructiva de 76 mm y junta mediana (MD) garantiza 3 puntos de sellado perimetral — marco, hoja y sello central — eliminando completamente la condensación en las juntas y los puentes térmicos en la unión. El coeficiente térmico Uw de 0,73 W/m²K en configuración estándar hace que el GreenEvolution 76 MD ROUND sea compatible con los requisitos mínimos para edificios de consumo de energía casi nulo (nZEB) exigidos por la legislación rumana y europea. El perfil curvo clásico (ROUND) lo hace preferido en la renovación de viviendas con arquitectura tradicional, donde la estética del perfil redondeado se integra más armoniosamente que las variantes rectas. Neofort BIZ entrega e instala GreenEvolution 76 MD ROUND con doble o triple vidrio SGG Planitherm, herraje Roto NT antirrobo RC2, premarcos Blaugelb Triotherm+ y cintas de sellado para una instalación certificada RAL.`,
      it:`Il profilo PVC Salamander GreenEvolution 76 MD ROUND è la scelta ottimale per i progetti residenziali che richiedono prestazioni energetiche certificate nZEB a un competitivo rapporto qualità-prezzo. Il sistema pentacamerale con profondità di costruzione di 76 mm e guarnizione mediana (MD) garantisce 3 punti di tenuta perimetrale — telaio, anta e tenuta centrale — eliminando completamente la condensazione ai giunti e i ponti termici all'unione. Il coefficiente termico Uw di 0,73 W/m²K nella configurazione standard rende il GreenEvolution 76 MD ROUND compatibile con i requisiti minimi per gli edifici a energia quasi zero (nZEB) richiesti dalla legislazione rumena ed europea. Il profilo curvato classico (ROUND) lo rende preferito nella ristrutturazione di abitazioni con architettura tradizionale, dove l'estetica del profilo arrotondato si integra più armoniosamente delle varianti dritte. Neofort BIZ consegna e installa GreenEvolution 76 MD ROUND con vetro SGG Planitherm doppio o triplo, ferramenta Roto NT antieffrazione RC2, precontrotelaio Blaugelb Triotherm+ e nastri di tenuta per un'installazione certificata RAL.`,
    },
  },

  'greenevolution-76-md-flex': {
    img: '/products/greenevolution-76-md-flex.avif',
    color: '#4a7c59',
    category: { ro:'Tâmplărie PVC Salamander', en:'Salamander PVC Joinery', de:'Salamander Kunststofffenster', fr:'Menuiserie PVC Salamander', es:'Carpintería PVC Salamander', it:'Infissi PVC Salamander' },
    serie: { ro:'GreenEvolution 76', en:'GreenEvolution 76', de:'GreenEvolution 76', fr:'GreenEvolution 76', es:'GreenEvolution 76', it:'GreenEvolution 76' },
    breadcrumb_parent: { ro:'Tâmplărie PVC', en:'PVC Windows', de:'Kunststofffenster', fr:'Menuiserie PVC', es:'Carpintería PVC', it:'Infissi PVC' },
    breadcrumb_parent_href: '/tamplarie-pvc',
    name: {
      ro:'Profil PVC Salamander GreenEvolution 76 MD FLEX – 5 camere, design drept',
      en:'Salamander GreenEvolution 76 MD FLEX PVC Profile – 6 Chambers, Straight Design',
      de:'Salamander GreenEvolution 76 MD FLEX Kunststoffprofil – 5 Kammern, Gerades Design',
      fr:'Profil PVC Salamander GreenEvolution 76 MD FLEX – 5 Chambres, Design Droit',
      es:'Perfil PVC Salamander GreenEvolution 76 MD FLEX – 5 Cámaras, Diseño Recto',
      it:'Profilo PVC Salamander GreenEvolution 76 MD FLEX – 5 Camere, Design Dritto',
    },
    tagline: {
      ro:'GreenEvolution 76 MD FLEX cu design drept, 5 camere + garnitură mediană — performanță nZEB la cost accesibil.',
      en:'GreenEvolution 76 MD FLEX with straight design, 5 chambers + middle gasket — nZEB performance at accessible cost.',
      de:'GreenEvolution 76 MD FLEX mit geradem Design, 5 Kammern + Mitteldichtung — nZEB-Leistung zu erschwinglichen Kosten.',
      fr:'GreenEvolution 76 MD FLEX avec design droit, 5 chambres + joint médian — performance nZEB à coût accessible.',
      es:'GreenEvolution 76 MD FLEX con diseño recto, 5 cámaras + junta mediana — rendimiento nZEB a coste accesible.',
      it:'GreenEvolution 76 MD FLEX con design dritto, 5 camere + guarnizione mediana — prestazioni nZEB a costo accessibile.',
    },
    specs: {
      ro:[['Adâncime','76 mm'],['Camere','6'],['Vizibil','118 mm'],['Design','Drept (MD FLEX)'],['Garnituri','3 EPDM + mediană'],['Armătură','Oțel zincat'],['Geam','24–48 mm'],['Feronerie','Roto NT/NX'],['Prag','13 mm'],['Greutate','180 kg max.'],['Clasă','A'],['Reciclabil','100%'],],
      en:[['Depth','76 mm'],['Chambers','5'],['Visible','118 mm'],['Design','Straight (MD FLEX)'],['Gaskets','3 EPDM + middle'],['Reinforcement','Galv. steel'],['Glass','24–48 mm'],['Hardware','Roto NT/NX'],['Threshold','13 mm'],['Weight','180 kg max.'],['Class','A'],['Recyclable','100%'],],
      de:[['Tiefe','76 mm'],['Kammern','5'],['Sicht','118 mm'],['Design','Gerade (MD FLEX)'],['Dichtungen','3 EPDM + Mitte'],['Verstärkung','Verz. Stahl'],['Glas','24–48 mm'],['Beschläge','Roto NT/NX'],['Schwelle','13 mm'],['Gewicht','180 kg max.'],['Klasse','A'],['Recycelbar','100%'],],
      fr:[['Profondeur','76 mm'],['Chambres','5'],['Visible','118 mm'],['Design','Droit (MD FLEX)'],['Joints','3 EPDM + médian'],['Armature','Acier galv.'],['Verre','24–48 mm'],['Ferrures','Roto NT/NX'],['Seuil','13 mm'],['Poids','180 kg max.'],['Classe','A'],['Recyclable','100%'],],
      es:[['Profundidad','76 mm'],['Cámaras','5'],['Visible','118 mm'],['Diseño','Recto (MD FLEX)'],['Juntas','3 EPDM + media'],['Refuerzo','Acero galv.'],['Vidrio','24–48 mm'],['Herraje','Roto NT/NX'],['Umbral','13 mm'],['Peso','180 kg máx.'],['Clase','A'],['Reciclable','100%'],],
      it:[['Profondità','76 mm'],['Camere','5'],['Visibile','118 mm'],['Design','Dritto (MD FLEX)'],['Guarnizioni','3 EPDM + mediana'],['Armatura','Acciaio galv.'],['Vetro','24–48 mm'],['Ferramenta','Roto NT/NX'],['Soglia','13 mm'],['Peso','180 kg max.'],['Classe','A'],['Riciclabile','100%'],],
    },
    perf: {
      ro:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Apă','E 1350'],['Aer','Clasa 4'],['Vânt','C3 · 1200 Pa'],['Fonică','≤ 47 dB'],['Antiefracție','RC2 → RC3'],],
      en:[['Uw','0.73 – 1.4 W/m²K'],['Uf','1.2 W/m²K'],['Water','E 1350'],['Air','Class 4'],['Wind','C3 · 1200 Pa'],['Sound','≤ 47 dB'],['Security','RC2 → RC3'],],
      de:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Wasser','E 1350'],['Luft','Kl. 4'],['Wind','C3 · 1200 Pa'],['Schall','≤ 47 dB'],['Einbruch','RC2 → RC3'],],
      fr:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Eau','E 1350'],['Air','Cl. 4'],['Vent','C3 · 1200 Pa'],['Son','≤ 47 dB'],['Effraction','RC2 → RC3'],],
      es:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Agua','E 1350'],['Aire','Cl. 4'],['Viento','C3 · 1200 Pa'],['Sonido','≤ 47 dB'],['Robo','RC2 → RC3'],],
      it:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Acqua','E 1350'],['Aria','Cl. 4'],['Vento','C3 · 1200 Pa'],['Suono','≤ 47 dB'],['Effrazione','RC2 → RC3'],],
    },
    advantages: {
      ro:['Design drept FLEX modern — linii curate, perfect pentru arhitectura contemporană și proiecte noi','Garnitură mediană MD — etanșare în 3 puncte la 76 mm adâncime, performanță superioară gamei standard 5 camere','5 camere de izolare — Uw 0,73 W/m²K standard, compatibil cu normele nZEB','Cel mai bun raport calitate-preț din gama Salamander — clasa A certificată la cost mediu de producție','Compatibil geam 24–48 mm — dublu și triplu termoizolant, inclusiv soluții fonoizolante','Recomandat pentru ansambluri rezidențiale noi, blocuri și clădiri de birouri low-rise'],
      en:['Modern FLEX straight design — clean lines, perfect for contemporary architecture and new projects','MD middle gasket — 3-point sealing at 76 mm depth, superior performance to standard 5-chamber range','6 insulation chambers — standard Uw 0.73 W/m²K, compliant with nZEB regulations','Best value for money in Salamander range — certified Class A at medium production cost','Compatible glass 24–48 mm — double and triple thermal insulation, incl. sound insulation solutions','Recommended for new residential complexes, apartment buildings and low-rise office buildings'],
      de:['Modernes FLEX-Geradliniges Design — klare Linien, perfekt für zeitgenössische Architektur und Neubauprojekte','MD-Mitteldichtung — 3-Punkt-Abdichtung bei 76 mm Bautiefe, überlegene Leistung gegenüber Standard-5-Kammer-Sortiment','6 Dämmkammern — Standard Uw 0,73 W/m²K, konform mit nZEB-Vorschriften','Bestes Preis-Leistungs-Verhältnis der Salamander-Serie — zertifizierte Klasse A zu mittleren Produktionskosten','Kompatibles Glas 24–48 mm — Zweifach- und Dreifachwärmedämmung, inkl. Schallschutzlösungen','Empfohlen für neue Wohnanlagen, Mehrfamilienhäuser und niedrige Bürogebäude'],
      fr:['Design droit FLEX moderne — lignes épurées, parfait pour l\'architecture contemporaine et les nouveaux projets','Joint médian MD — étanchéité en 3 points à 76 mm de profondeur, performance supérieure à la gamme standard 5 chambres','5 chambres d\'isolation — Uw 0,73 W/m²K standard, conforme aux réglementations nZEB','Meilleur rapport qualité-prix de la gamme Salamander — classe A certifiée à coût de production moyen','Vitrage compatible 24–48 mm — isolation thermique double et triple, incl. solutions phoniques','Recommandé pour les nouveaux ensembles résidentiels, immeubles d\'appartements et immeubles de bureaux bas'],
      es:['Diseño recto FLEX moderno — líneas limpias, perfecto para arquitectura contemporánea y proyectos nuevos','Junta mediana MD — sellado en 3 puntos a 76 mm de profundidad, rendimiento superior a la gama estándar de 5 cámaras','5 cámaras de aislamiento — Uw 0,73 W/m²K estándar, compatible con normativa nZEB','Mejor relación calidad-precio de la gama Salamander — clase A certificada a coste medio de producción','Vidrio compatible 24–48 mm — aislamiento térmico doble y triple, incl. soluciones fonoaislantes','Recomendado para nuevos complejos residenciales, edificios de apartamentos y edificios de oficinas de baja altura'],
      it:['Design dritto FLEX moderno — linee pulite, perfetto per architettura contemporanea e nuovi progetti','Guarnizione mediana MD — tenuta in 3 punti a 76 mm di profondità, prestazioni superiori alla gamma standard a 5 camere','5 camere di isolamento — Uw 0,73 W/m²K standard, conforme alle normative nZEB','Miglior rapporto qualità-prezzo nella gamma Salamander — classe A certificata a costo di produzione medio','Vetro compatibile 24–48 mm — isolamento termico doppio e triplo, incl. soluzioni fonoisolanti','Consigliato per nuovi complessi residenziali, condomini ed edifici per uffici di bassa altezza'],
    },
    seo_text: {
      ro:`Profilul PVC Salamander GreenEvolution 76 MD FLEX este sistemul pentacameral (5 camere) cu design drept minimalist și performanță energetică certificată nZEB, devenind alegerea preferată pentru ansambluri rezidențiale noi, renovări de blocuri și proiecte comerciale de dimensiuni medii. Sistemul cu 5 camere de izolare la 76 mm adâncime constructivă, completat cu garnitura mediană MD — etanșare suplimentară față de versiunile fără MD — atinge Uw = 0,73 W/m²K în configurație standard cu geam dublu Low-e, și Uw < 0,70 W/m²K cu triplu vitrat și armătură cu rupere termică. Designul FLEX cu profile drepte este perfect integrat în arhitectura contemporană, maximizând suprafața vitrate și luminozitatea interioară. Armătura din oțel zincat 1,5 mm / 2,0 mm asigură stabilitate dimensională la cercevele de mari dimensiuni. Neofort BIZ furnizează GreenEvolution 76 MD FLEX în toată gama de culori standard și folii, inclusiv efect lemn, negru mat antrakit și bicolor (alb interior / culoare exterior), cu termene de livrare garantate în București și toată Europa.`,
      en:`The Salamander GreenEvolution 76 MD FLEX PVC profile combines nZEB-certified energy performance with minimalist straight design and accessible production cost, becoming the preferred choice for new residential complexes, apartment block renovations and medium-sized commercial projects. The system with 6 insulation chambers at 76 mm construction depth, complemented by the MD middle gasket — additional sealing compared to versions without MD — achieves Uw = 0.73 W/m²K in standard configuration with Low-e double glazing, and Uw < 0.70 W/m²K with triple glazing and thermal break reinforcement. The FLEX design with straight profiles is perfectly integrated into contemporary architecture, maximising the glazed area and interior brightness. The 1.5 mm / 2.0 mm galvanized steel reinforcement ensures dimensional stability for large sashes. Neofort BIZ supplies GreenEvolution 76 MD FLEX in the full range of standard colours and foils, including wood effect, matt black anthracite and bicolour (white interior / colour exterior), with guaranteed delivery times in Bucharest and throughout Europe.`,
      de:`Das Salamander GreenEvolution 76 MD FLEX Kunststoffprofil verbindet nZEB-zertifizierte Energieleistung mit minimalistischem geradem Design und zugänglichen Produktionskosten und wird zur bevorzugten Wahl für neue Wohnanlagen, Sanierungen von Mehrfamilienhäusern und mittelgroße Gewerbeprojekte. Das System mit 6 Dämmkammern bei 76 mm Bautiefe, ergänzt durch die MD-Mitteldichtung — zusätzliche Abdichtung im Vergleich zu Versionen ohne MD — erreicht Uw = 0,73 W/m²K in Standardkonfiguration mit Low-e-Zweifachverglasung und Uw < 0,70 W/m²K mit Dreifachverglasung und wärmebrückenfreier Verstärkung. Das FLEX-Design mit geraden Profilen ist perfekt in zeitgenössische Architektur integriert und maximiert die Glasfläche und die Helligkeit im Innenraum. Die 1,5 mm / 2,0 mm galvanisierte Stahlverstärkung gewährleistet Maßstabilität bei großen Flügeln. Neofort BIZ liefert GreenEvolution 76 MD FLEX in der vollständigen Auswahl an Standardfarben und Folien, einschließlich Holzeffekt, mattschwarzem Anthrazit und zweifarbig (weiß innen / farbig außen), mit garantierten Lieferzeiten in Bukarest und ganz Europa.`,
      fr:`Le profil PVC Salamander GreenEvolution 76 MD FLEX combine des performances énergétiques certifiées nZEB avec un design droit minimaliste et un coût de production accessible, devenant le choix préféré pour les nouveaux ensembles résidentiels, les rénovations d'immeubles d'appartements et les projets commerciaux de taille moyenne. Le système à 5 chambres d'isolation à 76 mm de profondeur de construction, complété par le joint médian MD — étanchéité supplémentaire par rapport aux versions sans MD — atteint Uw = 0,73 W/m²K en configuration standard avec double vitrage Low-e, et Uw < 0,70 W/m²K avec triple vitrage et armature à rupture thermique. Le design FLEX avec des profils droits est parfaitement intégré à l'architecture contemporaine, maximisant la surface vitrée et la luminosité intérieure. Le renfort en acier galvanisé 1,5 mm / 2,0 mm assure la stabilité dimensionnelle des grandes fenêtres. Neofort BIZ fournit GreenEvolution 76 MD FLEX dans toute la gamme de couleurs standard et de films, y compris l'effet bois, le noir mat anthracite et la bicoloration (blanc intérieur / couleur extérieur), avec des délais de livraison garantis à Bucarest et dans toute l'Europe.`,
      es:`El perfil PVC Salamander GreenEvolution 76 MD FLEX combina un rendimiento energético certificado nZEB con un diseño recto minimalista y un coste de producción accesible, convirtiéndose en la elección preferida para nuevos complejos residenciales, renovaciones de bloques de pisos y proyectos comerciales de tamaño medio. El sistema con 5 cámaras de aislamiento a 76 mm de profundidad constructiva, complementado por la junta mediana MD — sellado adicional en comparación con las versiones sin MD — alcanza Uw = 0,73 W/m²K en configuración estándar con doble vidrio Low-e, y Uw < 0,70 W/m²K con triple vidrio y armadura con rotura de puente térmico. El diseño FLEX con perfiles rectos está perfectamente integrado en la arquitectura contemporánea, maximizando la superficie acristalada y la luminosidad interior. El refuerzo de acero galvanizado de 1,5 mm / 2,0 mm garantiza la estabilidad dimensional de los elementos grandes. Neofort BIZ suministra GreenEvolution 76 MD FLEX en toda la gama de colores estándar y láminas, incluido efecto madera, negro mate antracita y bicolor (blanco interior / color exterior), con plazos de entrega garantizados en Bucarest y en toda Europa.`,
      it:`Il profilo PVC Salamander GreenEvolution 76 MD FLEX è il sistema pentacamerale (5 camere) con design dritto minimalista e prestazioni certificate nZEB e un costo di produzione accessibile, diventando la scelta preferita per i nuovi complessi residenziali, le ristrutturazioni di condomini e i progetti commerciali di medie dimensioni. Il sistema con 5 camere di isolamento a 76 mm di profondità di costruzione, completato dalla guarnizione mediana MD — tenuta aggiuntiva rispetto alle versioni senza MD — raggiunge Uw = 0,73 W/m²K nella configurazione standard con doppio vetro Low-e, e Uw < 0,70 W/m²K con triplo vetro e armatura a taglio termico. Il design FLEX con profili dritti è perfettamente integrato nell'architettura contemporanea, massimizzando la superficie vetrata e la luminosità interna. L'armatura in acciaio zincato 1,5 mm / 2,0 mm garantisce la stabilità dimensionale per i grandi elementi. Neofort BIZ fornisce GreenEvolution 76 MD FLEX nell'intera gamma di colori standard e pellicole, tra cui effetto legno, nero opaco antracite e bicolore (bianco interno / colore esterno), con tempi di consegna garantiti a Bucarest e in tutta Europa.`,
    },
  },

  'greenevolution-76-ad-flex': {
    img: '/products/greenevolution-76-ad-flex.avif',
    color: '#4a7c59',
    category: { ro:'Tâmplărie PVC Salamander', en:'Salamander PVC Joinery', de:'Salamander Kunststofffenster', fr:'Menuiserie PVC Salamander', es:'Carpintería PVC Salamander', it:'Infissi PVC Salamander' },
    serie: { ro:'GreenEvolution 76', en:'GreenEvolution 76', de:'GreenEvolution 76', fr:'GreenEvolution 76', es:'GreenEvolution 76', it:'GreenEvolution 76' },
    breadcrumb_parent: { ro:'Tâmplărie PVC', en:'PVC Windows', de:'Kunststofffenster', fr:'Menuiserie PVC', es:'Carpintería PVC', it:'Infissi PVC' },
    breadcrumb_parent_href: '/tamplarie-pvc',
    name: {
      ro:'Profil PVC Salamander GreenEvolution 76 AD FLEX – 5 camere, design drept avansat',
      en:'Salamander GreenEvolution 76 AD FLEX PVC Profile – 6 Chambers, Advanced Straight Design',
      de:'Salamander GreenEvolution 76 AD FLEX Kunststoffprofil – 5 Kammern, Fortgeschrittenes gerades Design',
      fr:'Profil PVC Salamander GreenEvolution 76 AD FLEX – 5 Chambres, Design Droit Avancé',
      es:'Perfil PVC Salamander GreenEvolution 76 AD FLEX – 5 Cámaras, Diseño Recto Avanzado',
      it:'Profilo PVC Salamander GreenEvolution 76 AD FLEX – 5 Camere, Design Dritto Avanzato',
    },
    tagline: {
      ro:'Varianta avansată GreenEvolution 76 AD FLEX cu design drept — 5 camere, 2 garnituri EPDM, Uw optim.',
      en:'GreenEvolution 76 AD FLEX with straight design — 5 chambers, 2 EPDM gaskets, optimal Uw.',
      de:'GreenEvolution 76 AD FLEX mit geradem Design — 5 Kammern, 2 EPDM-Dichtungen, optimaler Uw.',
      fr:'GreenEvolution 76 AD FLEX avec design droit — 5 chambres, 2 joints EPDM, Uw optimal.',
      es:'GreenEvolution 76 AD FLEX con diseño recto — 5 cámaras, 2 juntas EPDM, Uw óptimo.',
      it:'GreenEvolution 76 AD FLEX con design dritto — 5 camere, 2 guarnizioni EPDM, Uw ottimale.',
    },
    specs: {
      ro:[['Adâncime','76 mm'],['Camere','5 camere'],['Vizibil','118 mm'],['Design','Drept AD FLEX'],['Garnituri','2 garnituri EPDM'],['Armătură','Oțel zincat'],['Geam','24–48 mm'],['Feronerie','Roto NT/NX'],['Prag','13 mm'],['Greutate','180 kg max.'],['Clasă','A'],['Reciclabil','100%'],],
      en:[['Depth','76 mm'],['Chambers','6'],['Visible','118 mm'],['Design','Straight AD FLEX'],['Gaskets','2 EPDM middle'],['Reinforcement','Galv. steel'],['Glass','24–48 mm'],['Hardware','Roto NT/NX'],['Threshold','13 mm'],['Weight','180 kg max.'],['Class','A'],['Recyclable','100%'],],
      de:[['Tiefe','76 mm'],['Kammern','6'],['Sicht','118 mm'],['Design','Gerade AD FLEX'],['Dichtungen','2 EPDM Mitte'],['Verstärkung','Verz. Stahl'],['Glas','24–48 mm'],['Beschläge','Roto NT/NX'],['Schwelle','13 mm'],['Gewicht','180 kg max.'],['Klasse','A'],['Recycelbar','100%'],],
      fr:[['Profondeur','76 mm'],['Chambres','6'],['Visible','118 mm'],['Design','Droit AD FLEX'],['Joints','2 EPDM médians'],['Armature','Acier galv.'],['Verre','24–48 mm'],['Ferrures','Roto NT/NX'],['Seuil','13 mm'],['Poids','180 kg max.'],['Classe','A'],['Recyclable','100%'],],
      es:[['Profundidad','76 mm'],['Cámaras','6'],['Visible','118 mm'],['Diseño','Recto AD FLEX'],['Juntas','2 EPDM medianas'],['Refuerzo','Acero galv.'],['Vidrio','24–48 mm'],['Herraje','Roto NT/NX'],['Umbral','13 mm'],['Peso','180 kg máx.'],['Clase','A'],['Reciclable','100%'],],
      it:[['Profondità','76 mm'],['Camere','6'],['Visibile','118 mm'],['Design','Dritto AD FLEX'],['Guarnizioni','2 EPDM mediane'],['Armatura','Acciaio galv.'],['Vetro','24–48 mm'],['Ferramenta','Roto NT/NX'],['Soglia','13 mm'],['Peso','180 kg max.'],['Classe','A'],['Riciclabile','100%'],],
    },
    perf: {
      ro:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Apă','E 1350'],['Aer','Clasa 4'],['Vânt','C3 · 1200 Pa'],['Fonică','≤ 47 dB'],['Antiefracție','RC2 → RC3'],],
      en:[['Uw','0.73 – 1.4 W/m²K'],['Uf','1.2 W/m²K'],['Water','E 1350'],['Air','Class 4'],['Wind','C3 · 1200 Pa'],['Sound','≤ 47 dB'],['Security','RC2 → RC3'],],
      de:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Wasser','E 1350'],['Luft','Kl. 4'],['Wind','C3 · 1200 Pa'],['Schall','≤ 47 dB'],['Einbruch','RC2 → RC3'],],
      fr:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Eau','E 1350'],['Air','Cl. 4'],['Vent','C3 · 1200 Pa'],['Son','≤ 47 dB'],['Effraction','RC2 → RC3'],],
      es:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Agua','E 1350'],['Aire','Cl. 4'],['Viento','C3 · 1200 Pa'],['Sonido','≤ 47 dB'],['Robo','RC2 → RC3'],],
      it:[['Uw','0,73 – 1,4 W/m²K'],['Uf','1,2 W/m²K'],['Acqua','E 1350'],['Aria','Cl. 4'],['Vento','C3 · 1200 Pa'],['Suono','≤ 47 dB'],['Effrazione','RC2 → RC3'],],
    },
    advantages: {
      ro:['AD = Advanced Design — profil optimizat pentru eficiență termică maximă la 76 mm','2 garnituri mediane EPDM — barieră termică superioară față de versiunile standard','5 camere la 76 mm — performanță nZEB certificată, Uw 0,73 W/m²K standard','Design drept FLEX — linii moderne, ideal pentru construcții noi și renovări rezidențiale','Compatibil geam dublu și triplu — de la 24 mm la 48 mm grosime','Clasa A certificată Salamander — producție germană, standarde de calitate ISO'],
      en:['AD = Advanced Design — optimised profile for maximum thermal efficiency at 76 mm','2 EPDM middle gaskets — superior thermal barrier compared to standard versions','5 chambers at 76 mm — nZEB certified performance, standard Uw 0.73 W/m²K','Straight FLEX design — modern lines, ideal for new construction and residential renovations','Compatible double and triple glazing — from 24 mm to 48 mm thickness','Salamander certified Class A — German production, ISO quality standards'],
      de:['AD = Advanced Design — optimiertes Profil für maximale Wärmeeffizienz bei 76 mm','2 EPDM-Mitteldichtungen — überlegene Wärmebarriere gegenüber Standardversionen','5 Kammern bei 76 mm — nZEB-zertifizierte Leistung, Standard Uw 0,73 W/m²K','Gerades FLEX-Design — moderne Linien, ideal für Neubauten und Wohnrenovierungen','Kompatible Zweifach- und Dreifachverglasung — von 24 mm bis 48 mm Dicke','Salamander zertifizierte Klasse A — deutsche Produktion, ISO-Qualitätsstandards'],
      fr:['AD = Advanced Design — profil optimisé pour une efficacité thermique maximale à 76 mm','2 joints EPDM médians — barrière thermique supérieure par rapport aux versions standard','5 chambres à 76 mm — performance nZEB certifiée, Uw 0,73 W/m²K standard','Design FLEX droit — lignes modernes, idéal pour les nouvelles constructions et rénovations résidentielles','Vitrage double et triple compatible — de 24 mm à 48 mm d\'épaisseur','Classe A certifiée Salamander — production allemande, normes de qualité ISO'],
      es:['AD = Advanced Design — perfil optimizado para la máxima eficiencia térmica a 76 mm','2 juntas medianas EPDM — barrera térmica superior a las versiones estándar','5 cámaras a 76 mm — rendimiento nZEB certificado, Uw 0,73 W/m²K estándar','Diseño FLEX recto — líneas modernas, ideal para nuevas construcciones y renovaciones residenciales','Vidrio doble y triple compatible — de 24 mm a 48 mm de espesor','Clase A certificada Salamander — producción alemana, estándares de calidad ISO'],
      it:['AD = Advanced Design — profilo ottimizzato per la massima efficienza termica a 76 mm','2 guarnizioni mediane EPDM — barriera termica superiore rispetto alle versioni standard','5 camere a 76 mm — prestazioni certificate nZEB, Uw 0,73 W/m²K standard','Design FLEX dritto — linee moderne, ideale per nuove costruzioni e ristrutturazioni residenziali','Vetro doppio e triplo compatibile — da 24 mm a 48 mm di spessore','Classe A certificata Salamander — produzione tedesca, standard di qualità ISO'],
    },
    seo_text: {
      ro:`Profilul PVC Salamander GreenEvolution 76 AD FLEX reprezintă sistemul pentacameral avansat (AD — Advanced Design) al gamei GreenEvolution 76, cu 5 camere de izolare și 2 garnituri mediane EPDM care îmbunătățesc semnificativ performanța termică față de versiunile standard cu o singură garnitură mediană. Sistemul cu 5 camere la 76 mm adâncime și designul drept minimalist FLEX este destinat proiectelor rezidențiale noi și renovărilor care impun certificare energetică nZEB cu buget optimizat. Coeficientul termic Uw = 0,73 W/m²K în configurație standard cu geam dublu Low-e poate fi redus sub 0,70 W/m²K prin utilizarea geamului triplu SGG Planitherm 4S Evolution și armăturii cu rupere termică — atingând astfel performanța clădirilor Passive House la un cost de producție mediu. Feroneria Roto NX perimetrală cu micro-ventilație integrată și opritor de deschidere asigură confort și securitate sporită. Neofort BIZ oferă GreenEvolution 76 AD FLEX în toate culorile standard RAL, folii efect lemn, finisaje bicolor interior/exterior și variante cu geam AGS încorporat, cu livrare în toată Europa.`,
      en:`The Salamander GreenEvolution 76 AD FLEX PVC profile represents the advanced variant (AD — Advanced Design) of the GreenEvolution 76 range, with 2 EPDM middle gaskets that significantly improve thermal performance compared to standard versions with a single middle gasket. The hexachamber system with 76 mm depth and minimalist FLEX straight design is intended for new residential projects and renovations that require nZEB energy certification with an optimised budget. The thermal coefficient Uw = 0.73 W/m²K in standard configuration with Low-e double glazing can be reduced below 0.70 W/m²K by using SGG Planitherm 4S Evolution triple glazing and thermal break reinforcement — thus achieving Passive House building performance at a medium production cost. The perimeter Roto NX hardware with integrated micro-ventilation and opening limiter ensures increased comfort and security. Neofort BIZ offers GreenEvolution 76 AD FLEX in all standard RAL colours, wood-effect foils, interior/exterior bicolour finishes and variants with integrated AGS glass, with delivery throughout Europe.`,
      de:`Das Salamander GreenEvolution 76 AD FLEX ist das fortschrittliche Fünfkammer-Profil (AD — Advanced Design) der GreenEvolution 76-Reihe mit 2 EPDM-Mitteldichtungen, die die Wärmeleistung im Vergleich zu Standardversionen mit einer einzigen Mitteldichtung erheblich verbessern. Das Sechskammersystem mit 76 mm Bautiefe und minimalistischem FLEX-Geradedesign ist für neue Wohnprojekte und Sanierungen bestimmt, die eine nZEB-Energiezertifizierung mit optimiertem Budget erfordern. Der Wärmedurchgangskoeffizient Uw = 0,73 W/m²K in Standardkonfiguration mit Low-e-Zweifachverglasung kann durch Verwendung von SGG Planitherm 4S Evolution-Dreifachverglasung und wärmebrückenfreier Verstärkung unter 0,70 W/m²K gesenkt werden — wodurch Passivhausgebäudeleistung zu mittleren Produktionskosten erreicht wird. Die perimetrische Roto NX-Beschläge mit integrierter Mikrobelüftung und Öffnungsbegrenzer sorgen für erhöhten Komfort und Sicherheit. Neofort BIZ bietet GreenEvolution 76 AD FLEX in allen Standard-RAL-Farben, Holzeffektfolien, Innen-/Außenbicolor-Ausführungen und Varianten mit integriertem AGS-Glas, mit Lieferung in ganz Europa.`,
      fr:`Le profil PVC Salamander GreenEvolution 76 AD FLEX représente la variante avancée (AD — Advanced Design) de la gamme GreenEvolution 76, avec 2 joints EPDM médians qui améliorent significativement les performances thermiques par rapport aux versions standard avec un seul joint médian. Le système hexacaméral à 76 mm de profondeur et design FLEX droit minimaliste est destiné aux nouveaux projets résidentiels et aux rénovations qui exigent une certification énergétique nZEB avec un budget optimisé. Le coefficient thermique Uw = 0,73 W/m²K en configuration standard avec double vitrage Low-e peut être réduit à moins de 0,70 W/m²K en utilisant du triple vitrage SGG Planitherm 4S Evolution et une armature à rupture thermique — atteignant ainsi les performances des bâtiments Maison Passive à un coût de production moyen. Les ferrures périmètriques Roto NX avec micro-ventilation intégrée et limiteur d'ouverture assurent un confort et une sécurité accrus. Neofort BIZ propose GreenEvolution 76 AD FLEX dans toutes les couleurs RAL standard, les films effet bois, les finitions bicolores intérieur/extérieur et les variantes avec vitrage AGS intégré, avec livraison dans toute l'Europe.`,
      es:`El perfil PVC Salamander GreenEvolution 76 AD FLEX representa el sistema pentacameral avanzado (AD — Advanced Design) de la gama GreenEvolution 76, con 5 cámaras de aislamiento y 2 juntas medianas EPDM que mejoran significativamente el rendimiento térmico en comparación con las versiones estándar. El sistema pentacameral con 76 mm de profundidad y diseño FLEX recto minimalista está destinado a nuevos proyectos residenciales y renovaciones que requieren certificación energética nZEB con un presupuesto optimizado. El coeficiente térmico Uw = 0,73 W/m²K en configuración estándar con doble vidrio Low-e puede reducirse por debajo de 0,70 W/m²K utilizando triple vidrio SGG Planitherm 4S Evolution y armadura con rotura de puente térmico — alcanzando así el rendimiento de los edificios Casa Pasiva a un coste de producción medio. El herraje perimetral Roto NX con microventilación integrada y limitador de apertura garantiza mayor comodidad y seguridad. Neofort BIZ ofrece GreenEvolution 76 AD FLEX en todos los colores RAL estándar, láminas efecto madera, acabados bicolor interior/exterior y variantes con vidrio AGS integrado, con entrega en toda Europa.`,
      it:`Il profilo PVC Salamander GreenEvolution 76 AD FLEX è il sistema pentacamerale avanzato (AD — Advanced Design) della gamma GreenEvolution 76, con 2 guarnizioni mediane EPDM che migliorano significativamente le prestazioni termiche rispetto alle versioni standard con una sola guarnizione mediana. Il sistema pentacamerale con 76 mm di profondità e design FLEX dritto minimalista è destinato ai nuovi progetti residenziali e alle ristrutturazioni che richiedono la certificazione energetica nZEB con un budget ottimizzato. Il coefficiente termico Uw = 0,73 W/m²K nella configurazione standard con doppio vetro Low-e può essere ridotto al di sotto di 0,70 W/m²K utilizzando il triplo vetro SGG Planitherm 4S Evolution e l'armatura a taglio termico — raggiungendo così le prestazioni degli edifici Passive House a un costo di produzione medio. La ferramenta perimetrale Roto NX con microventilazione integrata e limitatore di apertura garantisce maggiore comfort e sicurezza. Neofort BIZ offre GreenEvolution 76 AD FLEX in tutti i colori RAL standard, pellicole effetto legno, finiture bicolore interno/esterno e varianti con vetro AGS integrato, con consegna in tutta Europa.`,
    },
  },
};

// ─── UI STRINGS ──────────────────────────────────────────────────────────────
const UI = {
  ro: { back:'← Înapoi', all_products:'Toate produsele', specs_title:'Specificații tehnice', perf_title:'Performanțe certificate', adv_title:'Avantaje principale', cta_h:'Solicitați ofertă pentru', cta_sub:'Consultanți disponibili Luni–Vineri, 10:00–18:00', cta_btn:'Cerere ofertă', cta_call:'Sună acum', related:'Produse conexe' },
  en: { back:'← Back', all_products:'All products', specs_title:'Technical specifications', perf_title:'Certified performance', adv_title:'Key advantages', cta_h:'Request quote for', cta_sub:'Consultants available Mon–Fri, 10:00–18:00', cta_btn:'Request quote', cta_call:'Call now', related:'Related products' },
  de: { back:'← Zurück', all_products:'Alle Produkte', specs_title:'Technische Daten', perf_title:'Zertifizierte Leistungen', adv_title:'Hauptvorteile', cta_h:'Angebot anfordern für', cta_sub:'Berater verfügbar Mo–Fr, 10:00–18:00', cta_btn:'Angebot anfordern', cta_call:'Anrufen', related:'Ähnliche Produkte' },
  fr: { back:'← Retour', all_products:'Tous les produits', specs_title:'Caractéristiques techniques', perf_title:'Performances certifiées', adv_title:'Avantages clés', cta_h:'Demander un devis pour', cta_sub:'Conseillers disponibles Lun–Ven, 10h–18h', cta_btn:'Demander un devis', cta_call:'Appeler', related:'Produits connexes' },
  es: { back:'← Volver', all_products:'Todos los productos', specs_title:'Especificaciones técnicas', perf_title:'Rendimiento certificado', adv_title:'Ventajas clave', cta_h:'Solicitar presupuesto para', cta_sub:'Consultores disponibles Lun–Vie, 10:00–18:00', cta_btn:'Pedir presupuesto', cta_call:'Llamar', related:'Productos relacionados' },
  it: { back:'← Indietro', all_products:'Tutti i prodotti', specs_title:'Specifiche tecniche', perf_title:'Prestazioni certificate', adv_title:'Vantaggi principali', cta_h:'Richiedi preventivo per', cta_sub:'Consulenti disponibili Lun–Ven, 10:00–18:00', cta_btn:'Richiedi preventivo', cta_call:'Chiama ora', related:'Prodotti correlati' },
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
  const canonical = REVERSE_MAP[slug] || slug;
  const product   = PRODUCTS[canonical];
  if (!product) return { title: 'Produs · Neofort BIZ' };

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
      canonical: `${BASE}/${locale}/${(PROD_SEG[locale]||'produse')}/${localSlug}`,
      languages: Object.fromEntries([
        ...LOCALES.map(l => [l, `${BASE}/${l}/${(PROD_SEG[l]||'produse')}/${altSlug(l)}`]),
        ['x-default', `${BASE}/ro/${(PROD_SEG['ro']||'produse')}/${altSlug('ro')}`],
      ]),
    },
    openGraph: {
      type:'website', url:`${BASE}/${locale}/${(PROD_SEG[locale]||'produse')}/${localSlug}`,
      siteName:'Neofort BIZ', title:`${name} · Neofort BIZ`,
      description: desc,
      images:[{ url:`${BASE}${product.img.replace('.avif','.jpg')}`, width:800, height:600, alt:name, type:'image/jpeg' }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title:`${name} · Neofort BIZ`, description: desc, images:[{ url:`${BASE}${product.img.replace('.avif','.jpg')}`, width:800, height:600 }] }, };
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default async function ProductPage({ params }) {
  const { locale, slug } = await params;
  const canonical = REVERSE_MAP[slug] || slug;
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
  const bpLabel = product.breadcrumb_parent[locale] || product.breadcrumb_parent.ro;
  const c       = product.color;

  // Schema.org Product
  const schema = {
    '@context':'https://schema.org', '@type':'Product',
    'name': name, 'description': seotxt,
    'image': `${BASE}${product.img}`,
    'brand': { '@type':'Brand', 'name':'Salamander' },
    'manufacturer': { '@type':'Organization', 'name':'Salamander GmbH & Co. KG', 'addressCountry':'DE' },
    'seller': { '@type':'Organization', 'name':'Neofort BIZ SRL', 'url':BASE },
    'offers': { '@type':'Offer', 'price':'0', 'priceCurrency':'RON', 'priceValidUntil':'2026-12-31', 'availability':'https://schema.org/InStock', 'url':`${BASE}/ro/contact`, 'priceSpecification':{'@type':'PriceSpecification','price':'0','priceCurrency':'RON','description':'Preț la cerere — ofertă personalizată'}, 'seller':{'@type':'Organization','name':'Neofort BIZ SRL','url':BASE} },
    'aggregateRating': { '@type':'AggregateRating', 'ratingValue':'5', 'bestRating':'5', 'worstRating':'1', 'ratingCount':'47' },
    'additionalProperty': specs.map(([n,v]) => ({ '@type':'PropertyValue', 'name':n, 'value':v })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <style>{`
        /* ── BREADCRUMB ── */
        .prd-bc { font-size:.65rem; letter-spacing:.12em; text-transform:uppercase; color:#999; display:flex; flex-wrap:wrap; gap:6px; align-items:center; margin-bottom:24px; }
        .prd-bc a { color:#999; text-decoration:none; }
        .prd-bc a:hover { color:#1a1a1a; }
        .prd-bc span { color:#ccc; }

        /* ── HERO GRID ── */
        .prd-hero { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:start; }
        .prd-img-wrap { position:relative; background:#f8f8f6; border:1px solid #e8e8e4; display:flex; align-items:center; justify-content:center; padding:32px; min-height:320px; }
        .prd-img { max-width:100%; max-height:340px; width:auto; height:auto; object-fit:contain; display:block; }
        .prd-badge-serie { position:absolute; top:12px; left:12px; font-family:'Barlow Condensed',sans-serif; font-size:.52rem; letter-spacing:.2em; text-transform:uppercase; font-weight:700; padding:4px 10px; }
        .prd-info { display:flex; flex-direction:column; }
        .prd-cat-label { font-family:'Barlow Condensed',sans-serif; font-size:.57rem; letter-spacing:.2em; text-transform:uppercase; font-weight:600; margin-bottom:10px; }
        .prd-title { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:clamp(1.4rem,3vw,2rem); color:#1a1a1a; line-height:1.15; margin:0 0 14px; }
        .prd-tagline { font-size:.88rem; color:#555; line-height:1.6; margin:0 0 28px; border-left:3px solid; padding-left:14px; }

        /* ── SPECS TABLES ── */
        .prd-section-title { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:.6rem; letter-spacing:.22em; text-transform:uppercase; color:#999; margin:0 0 12px; }
        .prd-specs-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:#e8e8e4; border:1px solid #e8e8e4; margin-bottom:28px; }
        .prd-spec-row { background:#fff; display:flex; justify-content:space-between; gap:8px; padding:7px 10px; font-size:.73rem; }
        .prd-spec-row strong { color:#1a1a1a; font-weight:600; flex-shrink:0; }
        .prd-spec-row span { color:#555; text-align:right; }

        /* ── PERF TABLE ── */
        .prd-perf-table { width:100%; border-collapse:collapse; margin-bottom:28px; font-size:.73rem; }
        .prd-perf-table tr { border-bottom:1px solid #f0f0ee; }
        .prd-perf-table td { padding:6px 8px; }
        .prd-perf-table td:first-child { color:#767676; width:55%; }
        .prd-perf-table td:last-child { font-weight:700; color:#1a1a1a; text-align:right; }

        /* ── ADVANTAGES ── */
        .prd-adv-list { list-style:none; padding:0; margin:0 0 28px; }
        .prd-adv-list li { font-size:.8rem; color:#444; padding:8px 0 8px 20px; border-bottom:1px solid #f5f5f3; position:relative; line-height:1.5; }
        .prd-adv-list li:last-child { border-bottom:none; }
        .prd-adv-list li::before { content:''; position:absolute; left:0; top:14px; width:8px; height:2px; }

        /* ── CTA SIDEBAR ── */
        .prd-cta-box { background:#111; padding:24px; position:sticky; top:100px; }
        .prd-cta-h { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:.6rem; letter-spacing:.2em; text-transform:uppercase; color:#666; margin-bottom:8px; }
        .prd-cta-name { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:1.05rem; color:#fff; margin-bottom:16px; line-height:1.2; }
        .prd-cta-sub { font-size:.68rem; color:#555; margin-bottom:20px; }
        .prd-cta-btn { display:block; width:100%; padding:12px; text-align:center; font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; text-decoration:none; margin-bottom:10px; transition:all .18s; }
        .prd-cta-btn-primary { color:#111; background:#fff; }
        .prd-cta-btn-primary:hover { background:#f0f0f0; }
        .prd-cta-btn-secondary { color:#fff; border:1px solid #333; }
        .prd-cta-btn-secondary:hover { border-color:#666; }

        /* ── SEO TEXT ── */
        .prd-seo { font-size:.82rem; color:#767676; line-height:1.8; padding:32px 0; border-top:1px solid #e8e8e4; margin-top:8px; }
        .prd-seo p { margin:0; }

        /* ── LAYOUT LOWER ── */
        .prd-lower { display:grid; grid-template-columns:1fr 260px; gap:48px; align-items:start; margin-top:48px; }

        /* ── CTA MOBILE (sticky bottom) ── */
        .prd-cta-mobile { display:none; position:fixed; bottom:0; left:0; right:0; background:#111; padding:12px 16px; z-index:100; display:flex; gap:10px; border-top:1px solid #222; }
        .prd-cta-mobile a { flex:1; padding:11px 8px; text-align:center; font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:.65rem; letter-spacing:.14em; text-transform:uppercase; text-decoration:none; transition:all .18s; }
        .prd-cta-mobile-pri { background:#fff; color:#111; }
        .prd-cta-mobile-sec { border:1px solid #333; color:#fff; }

        /* ── RESPONSIVE ── */
        @media(max-width:900px){
          .prd-hero { grid-template-columns:1fr; gap:24px; }
          .prd-lower { grid-template-columns:1fr; }
          .prd-cta-box { display:none; }
          .prd-specs-grid { grid-template-columns:1fr; }
          .prd-cta-mobile { display:flex; }
          body { padding-bottom:70px; }
        }
        @media(max-width:600px){
          .prd-title { font-size:1.4rem; }
          .prd-img-wrap { min-height:220px; padding:16px; }
        }
      `}</style>

      {/* MOBILE CTA — sticky bottom */}
      <div className="prd-cta-mobile">
        <Link href="/contact" className="prd-cta-mobile-pri">{ui.cta_btn}</Link>
        <a href="tel:+40752443435" className="prd-cta-mobile-sec">{ui.cta_call}</a>
      </div>

      <div className="container mx-auto px-6" style={{paddingTop:'40px', paddingBottom:'80px'}}>

        {/* BREADCRUMB */}
        <nav className="prd-bc" aria-label="breadcrumb">
          <Link href="/">Neofort BIZ</Link>
          <span>·</span>
          <Link href={product.breadcrumb_parent_href}>{bpLabel}</Link>
          <span>·</span>
          <span style={{color:'#1a1a1a'}}>{serie}</span>
        </nav>

        {/* HERO: imagine + info + specs inline */}
        <div className="prd-hero">

          {/* Imagine */}
          <div className="prd-img-wrap">
            <img src={product.img} alt={name} className="prd-img" loading="eager"/>
            <span className="prd-badge-serie" style={{color: c, background:`${c}18`, border:`1px solid ${c}30`}}>
              {serie}
            </span>
          </div>

          {/* Info */}
          <div className="prd-info">
            <p className="prd-cat-label" style={{color: c}}>{cat}</p>
            <h1 className="prd-title">{name}</h1>
            <p className="prd-tagline" style={{borderColor: c}}>{tagline}</p>

            {/* Specs inline (mobile-first: văzute fără scroll) */}
            <p className="prd-section-title">{ui.specs_title}</p>
            <div className="prd-specs-grid">
              {specs.map(([k, v]) => (
                <div key={k} className="prd-spec-row">
                  <strong>{k}</strong>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LOWER: content + sidebar */}
        <div className="prd-lower">
          <div>
            {/* Performanțe */}
            <p className="prd-section-title" style={{marginTop:'0'}}>{ui.perf_title}</p>
            <table className="prd-perf-table">
              <tbody>
                {perf.map(([k, v]) => (
                  <tr key={k}>
                    <td>{k}</td>
                    <td style={{color: c}}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Avantaje */}
            <p className="prd-section-title">{ui.adv_title}</p>
            <ul className="prd-adv-list">
              {adv.map((a, i) => (
                <li key={i} style={{'--dot-color': c}}>
                  <span style={{position:'absolute',left:0,top:'14px',width:'8px',height:'2px',background:c,display:'block'}}/>
                  {a}
                </li>
              ))}
            </ul>

            {/* Text SEO */}
            <div className="prd-seo">
              <p>{seotxt}</p>
            </div>
          </div>

          {/* SIDEBAR CTA */}
          <div className="prd-cta-box">
            <p className="prd-cta-h">{ui.cta_h}</p>
            <p className="prd-cta-name">{name}</p>
            <p className="prd-cta-sub">{ui.cta_sub}</p>
            <Link href="/contact" className="prd-cta-btn prd-cta-btn-primary">{ui.cta_btn}</Link>
            <a href="tel:+40752443435" className="prd-cta-btn prd-cta-btn-secondary" style={{fontSize:'.6rem',whiteSpace:'nowrap'}}>{ui.cta_call} +40 752 443 435</a>
          </div>
        </div>

      </div>
    </>
  );
}

