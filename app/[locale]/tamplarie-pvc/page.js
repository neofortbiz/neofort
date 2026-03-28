import { getTranslations } from 'next-intl/server';
import FaqAccordion from '../../../components/FaqAccordion';
import { Link } from '../../../i18n/navigation';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_TAMPLARIE_PVC = {'ro':'tamplarie-pvc', 'en':'pvc-windows', 'de':'kunststofffenster-pvc', 'fr':'menuiserie-pvc', 'es':'carpinteria-pvc', 'it':'infissi-pvc'};

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil', btn:'Cerere Ofertă' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows', btn:'Request Quote' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an', btn:'Angebot anfragen' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil', btn:'Demander un devis' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil', btn:'Pedir presupuesto' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil', btn:'Richiedi preventivo' },
};

const PAGE_UI = {
  ro: { label:'Tâmplărie PVC · Salamander', h1:'Tâmplărie PVC Salamander București — Ferestre și Uși BluEvolution 92', sub:'Tehnologie germană. 6 sisteme — de la eficiența maximă BluEvolution 92 la soluții economice GreenEvolution 76.', exp_label:'Expertiza Neofort BIZ în PVC', exp1:'Integrăm tehnologia de vârf cu designul minimalist pentru a oferi <strong>tâmplărie PVC Salamander</strong> cu bariere termice de neegalat. Profilele noastre sunt certificate <strong>nZEB</strong>, asigurând economii reale la costurile de încălzire.', exp2:'Fie că optați pentru robustețea sistemului <strong>BluEvolution 92</strong> sau pentru versatilitatea gamei GreenEvolution, echipa Neofort BIZ asigură consultanță tehnică și montaj profesional în toată zona București–Ilfov.', btn:'Cerere ofertă', btn_detail:'Detalii', cross_alu:'Tâmplărie Aluminiu Alumil', cross_acc:'Accesorii & Izolare Perimetrală',cross_nzeb:'Sisteme Izolare nZEB',cross_blog:'Blog Tehnic Tâmplărie', ser_blu:'BluEvolution 92', ser_gre:'GreenEvolution 76' },
  en: { label:'PVC Windows · Salamander', h1:'Salamander PVC Windows Bucharest — BluEvolution 92 & GreenEvolution', sub:'German technology. 6 systems — from maximum efficiency BluEvolution 92 to economical GreenEvolution 76.', exp_label:'Neofort BIZ PVC Expertise', exp1:'We integrate cutting-edge technology with minimalist design to deliver <strong>Salamander PVC windows</strong> with unmatched thermal barriers. Our profiles are <strong>nZEB</strong> certified, ensuring real savings on heating costs.', exp2:'Whether you choose the robustness of <strong>BluEvolution 92</strong> or the versatility of GreenEvolution, Neofort BIZ provides dedicated technical consulting and professional installation across Bucharest.', btn:'Request quote', btn_detail:'Details', cross_alu:'Aluminium Alumil Windows', cross_acc:'Accessories & Perimeter Insulation',cross_nzeb:'nZEB Insulation Systems',cross_blog:'Technical Window Blog', ser_blu:'BluEvolution 92', ser_gre:'GreenEvolution 76' },
  de: { label:'PVC-Fenster · Salamander', h1:'Salamander PVC-Fenster Bukarest — BluEvolution 92 & GreenEvolution', sub:'Deutsche Technologie. 6 Systeme — von maximaler Effizienz BluEvolution 92 bis wirtschaftlichem GreenEvolution 76.', exp_label:'Neofort BIZ PVC-Expertise', exp1:'Wir verbinden modernste Technologie mit minimalistischem Design für <strong>Salamander PVC-Fenster</strong> mit unübertroffenen Wärmedämmwerten. Unsere Profile sind <strong>nZEB</strong>-zertifiziert.', exp2:'Ob Sie die Robustheit von <strong>BluEvolution 92</strong> oder die Vielseitigkeit der GreenEvolution-Reihe bevorzugen — Neofort BIZ bietet technische Beratung und Facheinbau in ganz Bukarest.', btn:'Angebot anfragen', btn_detail:'Details', cross_alu:'Alumil Aluminiumfenster', cross_acc:'Zubehör & Perimeterdämmung',cross_nzeb:'nZEB-Dämmsysteme',cross_blog:'Technischer Fensterblog', ser_blu:'BluEvolution 92', ser_gre:'GreenEvolution 76' },
  fr: { label:'Fenêtres PVC · Salamander', h1:'Menuiserie PVC Salamander Bucarest — BluEvolution 92 & GreenEvolution', sub:'Technologie allemande. 6 systèmes — de l\'efficacité maximale BluEvolution 92 aux solutions économiques GreenEvolution 76.', exp_label:'Expertise Neofort BIZ en PVC', exp1:'Nous intégrons la technologie de pointe au design minimaliste pour offrir des <strong>fenêtres PVC Salamander</strong> aux performances thermiques inégalées. Nos profils sont certifiés <strong>nZEB</strong>.', exp2:'Que vous optiez pour la robustesse du <strong>BluEvolution 92</strong> ou la polyvalence de la gamme GreenEvolution, Neofort BIZ assure conseil technique et pose professionnelle.', btn:'Demander un devis', btn_detail:'Détails', cross_alu:'Menuiserie Aluminium Alumil', cross_acc:'Accessoires & Isolation Périphérique',cross_nzeb:'Systèmes isolation nZEB',cross_blog:'Blog technique menuiserie', ser_blu:'BluEvolution 92', ser_gre:'GreenEvolution 76' },
  es: { label:'Ventanas PVC · Salamander', h1:'Carpintería PVC Salamander Bucarest — BluEvolution 92 & GreenEvolution', sub:'Tecnología alemana. 6 sistemas — desde la máxima eficiencia BluEvolution 92 hasta soluciones económicas GreenEvolution 76.', exp_label:'Experiencia Neofort BIZ en PVC', exp1:'Integramos tecnología punta con diseño minimalista para ofrecer <strong>ventanas PVC Salamander</strong> con barreras térmicas insuperables. Nuestros perfiles están certificados <strong>nZEB</strong>.', exp2:'Ya sea que opte por la robustez del <strong>BluEvolution 92</strong> o la versatilidad de la gama GreenEvolution, Neofort BIZ garantiza asesoría técnica e instalación profesional.', btn:'Pedir presupuesto', btn_detail:'Detalles', cross_alu:'Ventanas Aluminio Alumil', cross_acc:'Accesorios & Aislamiento Perimetral',cross_nzeb:'Sistemas aislamiento nZEB',cross_blog:'Blog técnico carpintería', ser_blu:'BluEvolution 92', ser_gre:'GreenEvolution 76' },
  it: { label:'Infissi PVC · Salamander', h1:'Infissi PVC Salamander Bucarest — BluEvolution 92 & GreenEvolution', sub:'Tecnologia tedesca. 6 sistemi — dalla massima efficienza BluEvolution 92 alle soluzioni economiche GreenEvolution 76.', exp_label:'Competenza Neofort BIZ in PVC', exp1:'Integriamo tecnologia all\'avanguardia con design minimalista per offrire <strong>infissi PVC Salamander</strong> con barriere termiche insuperabili. I nostri profili sono certificati <strong>nZEB</strong>.', exp2:'Che scegliate la robustezza del <strong>BluEvolution 92</strong> o la versatilità della gamma GreenEvolution, Neofort BIZ garantisce consulenza tecnica e posa professionale.', btn:'Richiedi preventivo', btn_detail:'Dettagli', cross_alu:'Finestre Alluminio Alumil', cross_acc:'Accessori & Isolamento Perimetrale',cross_nzeb:'Sistemi isolamento nZEB',cross_blog:'Blog tecnico infissi', ser_blu:'BluEvolution 92', ser_gre:'GreenEvolution 76' },
};

// ─── SPECIFICAȚII — identic cu screenshot, toate câmpurile, 6 limbi ──────────
const SPECS = {
  blu92alu: {
    ro:[['Profil PVC cu','6 camere'],['Etanșare','3 garnituri'],['Adâncime','104 mm'],['Transfer','Uw = 0,70 W/(m²K)'],['Vitraj','până la 60 mm'],['Protecție fonică','până la 47 dB'],['Anti-efracție','până la RC 3']],
    en:[['PVC profile with','6 chambers'],['Sealing','3 gaskets'],['Depth','104 mm'],['Transfer','Uw = 0.70 W/(m²K)'],['Glazing','up to 60 mm'],['Sound insulation','up to 47 dB'],['Burglar resistance','up to RC 3']],
    de:[['PVC-Profil mit','6 Kammern'],['Dichtung','3 Dichtungen'],['Bautiefe','104 mm'],['Transfer','Uw = 0,70 W/(m²K)'],['Verglasung','bis 60 mm'],['Schallschutz','bis 47 dB'],['Einbruchschutz','bis RC 3']],
    fr:[['Profil PVC avec','6 chambres'],['Étanchéité','3 joints'],['Profondeur','104 mm'],['Transfert','Uw = 0,70 W/(m²K)'],['Vitrage','jusqu\'à 60 mm'],['Protection phonique','jusqu\'à 47 dB'],['Anti-effraction','jusqu\'à RC 3']],
    es:[['Perfil PVC con','6 cámaras'],['Estanqueidad','3 juntas'],['Profundidad','104 mm'],['Transferencia','Uw = 0,70 W/(m²K)'],['Acristalamiento','hasta 60 mm'],['Aislamiento acústico','hasta 47 dB'],['Antirrobo','hasta RC 3']],
    it:[['Profilo PVC con','6 camere'],['Tenuta','3 guarnizioni'],['Profondità','104 mm'],['Trasmittanza','Uw = 0,70 W/(m²K)'],['Vetro','fino a 60 mm'],['Isolamento acustico','fino a 47 dB'],['Antieffrazione','fino a RC 3']],
  },
  blu92flex: {
    ro:[['Profil PVC cu','6 camere'],['Etanșare','3 garnituri'],['Adâncime','92 mm'],['Transfer','Uw = 0,70 W/(m²K)'],['Vitraj','până la 60 mm'],['Protecție fonică','până la 47 dB'],['Anti-efracție','până la RC 3']],
    en:[['PVC profile with','6 chambers'],['Sealing','3 gaskets'],['Depth','92 mm'],['Transfer','Uw = 0.70 W/(m²K)'],['Glazing','up to 60 mm'],['Sound insulation','up to 47 dB'],['Burglar resistance','up to RC 3']],
    de:[['PVC-Profil mit','6 Kammern'],['Dichtung','3 Dichtungen'],['Bautiefe','92 mm'],['Transfer','Uw = 0,70 W/(m²K)'],['Verglasung','bis 60 mm'],['Schallschutz','bis 47 dB'],['Einbruchschutz','bis RC 3']],
    fr:[['Profil PVC avec','6 chambres'],['Étanchéité','3 joints'],['Profondeur','92 mm'],['Transfert','Uw = 0,70 W/(m²K)'],['Vitrage','jusqu\'à 60 mm'],['Protection phonique','jusqu\'à 47 dB'],['Anti-effraction','jusqu\'à RC 3']],
    es:[['Perfil PVC con','6 cámaras'],['Estanqueidad','3 juntas'],['Profundidad','92 mm'],['Transferencia','Uw = 0,70 W/(m²K)'],['Acristalamiento','hasta 60 mm'],['Aislamiento acústico','hasta 47 dB'],['Antirrobo','hasta RC 3']],
    it:[['Profilo PVC con','6 camere'],['Tenuta','3 guarnizioni'],['Profondità','92 mm'],['Trasmittanza','Uw = 0,70 W/(m²K)'],['Vetro','fino a 60 mm'],['Isolamento acustico','fino a 47 dB'],['Antieffrazione','fino a RC 3']],
  },
  blu92round: {
    ro:[['Profil PVC cu','6 camere'],['Etanșare','3 garnituri'],['Adâncime','92 mm'],['Transfer','Uw = 0,70 W/(m²K)'],['Vitraj','până la 60 mm'],['Protecție fonică','până la 47 dB'],['Anti-efracție','până la RC 3']],
    en:[['PVC profile with','6 chambers'],['Sealing','3 gaskets'],['Depth','92 mm'],['Transfer','Uw = 0.70 W/(m²K)'],['Glazing','up to 60 mm'],['Sound insulation','up to 47 dB'],['Burglar resistance','up to RC 3']],
    de:[['PVC-Profil mit','6 Kammern'],['Dichtung','3 Dichtungen'],['Bautiefe','92 mm'],['Transfer','Uw = 0,70 W/(m²K)'],['Verglasung','bis 60 mm'],['Schallschutz','bis 47 dB'],['Einbruchschutz','bis RC 3']],
    fr:[['Profil PVC avec','6 chambres'],['Étanchéité','3 joints'],['Profondeur','92 mm'],['Transfert','Uw = 0,70 W/(m²K)'],['Vitrage','jusqu\'à 60 mm'],['Protection phonique','jusqu\'à 47 dB'],['Anti-effraction','jusqu\'à RC 3']],
    es:[['Perfil PVC con','6 cámaras'],['Estanqueidad','3 juntas'],['Profundidad','92 mm'],['Transferencia','Uw = 0,70 W/(m²K)'],['Acristalamiento','hasta 60 mm'],['Aislamiento acústico','hasta 47 dB'],['Antirrobo','hasta RC 3']],
    it:[['Profilo PVC con','6 camere'],['Tenuta','3 guarnizioni'],['Profondità','92 mm'],['Trasmittanza','Uw = 0,70 W/(m²K)'],['Vetro','fino a 60 mm'],['Isolamento acustico','fino a 47 dB'],['Antieffrazione','fino a RC 3']],
  },
  gre76mdround: {
    ro:[['Profil PVC cu','5 camere'],['Etanșare','2 garnituri + 1 mediană'],['Adâncime','76 mm'],['Transfer','Uw = 0,73 W/(m²K)'],['Vitraj','până la 48 mm'],['Protecție fonică','până la 47 dB'],['Anti-efracție','până la RC 3']],
    en:[['PVC profile with','5 chambers'],['Sealing','3 gaskets'],['Depth','76 mm'],['Transfer','Uw = 0.73 W/(m²K)'],['Glazing','up to 48 mm'],['Sound insulation','up to 47 dB'],['Burglar resistance','up to RC 3']],
    de:[['PVC-Profil mit','5 Kammern'],['Dichtung','3 Dichtungen'],['Bautiefe','76 mm'],['Transfer','Uw = 0,73 W/(m²K)'],['Verglasung','bis 48 mm'],['Schallschutz','bis 47 dB'],['Einbruchschutz','bis RC 3']],
    fr:[['Profil PVC avec','5 chambres'],['Étanchéité','3 joints'],['Profondeur','76 mm'],['Transfert','Uw = 0,73 W/(m²K)'],['Vitrage','jusqu\'à 48 mm'],['Protection phonique','jusqu\'à 47 dB'],['Anti-effraction','jusqu\'à RC 3']],
    es:[['Perfil PVC con','5 cámaras'],['Estanqueidad','3 juntas'],['Profundidad','76 mm'],['Transferencia','Uw = 0,73 W/(m²K)'],['Acristalamiento','hasta 48 mm'],['Aislamiento acústico','hasta 47 dB'],['Antirrobo','hasta RC 3']],
    it:[['Profilo PVC con','5 camere'],['Tenuta','3 guarnizioni'],['Profondità','76 mm'],['Trasmittanza','Uw = 0,73 W/(m²K)'],['Vetro','fino a 48 mm'],['Isolamento acustico','fino a 47 dB'],['Antieffrazione','fino a RC 3']],
  },
  gre76mdflex: {
    ro:[['Profil PVC cu','5 camere'],['Etanșare','3 garnituri'],['Adâncime','76 mm'],['Transfer','Uw = 0,73 W/(m²K)'],['Vitraj','până la 48 mm'],['Protecție fonică','până la 47 dB'],['Anti-efracție','până la RC 3']],
    en:[['PVC profile with','5 chambers'],['Sealing','3 gaskets'],['Depth','76 mm'],['Transfer','Uw = 0.73 W/(m²K)'],['Glazing','up to 48 mm'],['Sound insulation','up to 47 dB'],['Burglar resistance','up to RC 3']],
    de:[['PVC-Profil mit','5 Kammern'],['Dichtung','3 Dichtungen'],['Bautiefe','76 mm'],['Transfer','Uw = 0,73 W/(m²K)'],['Verglasung','bis 48 mm'],['Schallschutz','bis 47 dB'],['Einbruchschutz','bis RC 3']],
    fr:[['Profil PVC avec','5 chambres'],['Étanchéité','3 joints'],['Profondeur','76 mm'],['Transfert','Uw = 0,73 W/(m²K)'],['Vitrage','jusqu\'à 48 mm'],['Protection phonique','jusqu\'à 47 dB'],['Anti-effraction','jusqu\'à RC 3']],
    es:[['Perfil PVC con','5 cámaras'],['Estanqueidad','3 juntas'],['Profundidad','76 mm'],['Transferencia','Uw = 0,73 W/(m²K)'],['Acristalamiento','hasta 48 mm'],['Aislamiento acústico','hasta 47 dB'],['Antirrobo','hasta RC 3']],
    it:[['Profilo PVC con','5 camere'],['Tenuta','3 guarnizioni'],['Profondità','76 mm'],['Trasmittanza','Uw = 0,73 W/(m²K)'],['Vetro','fino a 48 mm'],['Isolamento acustico','fino a 47 dB'],['Antieffrazione','fino a RC 3']],
  },
  gre76adflex: {
    ro:[['Profil PVC cu','5 camere'],['Etanșare','2 garnituri'],['Adâncime','76 mm'],['Transfer','Uw = 0,73 W/(m²K)'],['Vitraj','până la 48 mm'],['Protecție fonică','până la 47 dB'],['Anti-efracție','până la RC 3']],
    en:[['PVC profile with','5 chambers'],['Sealing','2 gaskets'],['Depth','76 mm'],['Transfer','Uw = 0.73 W/(m²K)'],['Glazing','up to 48 mm'],['Sound insulation','up to 47 dB'],['Burglar resistance','up to RC 3']],
    de:[['PVC-Profil mit','5 Kammern'],['Dichtung','2 Dichtungen'],['Bautiefe','76 mm'],['Transfer','Uw = 0,73 W/(m²K)'],['Verglasung','bis 48 mm'],['Schallschutz','bis 47 dB'],['Einbruchschutz','bis RC 3']],
    fr:[['Profil PVC avec','5 chambres'],['Étanchéité','2 joints'],['Profondeur','76 mm'],['Transfert','Uw = 0,73 W/(m²K)'],['Vitrage','jusqu\'à 48 mm'],['Protection phonique','jusqu\'à 47 dB'],['Anti-effraction','jusqu\'à RC 3']],
    es:[['Perfil PVC con','5 cámaras'],['Estanqueidad','2 juntas'],['Profundidad','76 mm'],['Transferencia','Uw = 0,73 W/(m²K)'],['Acristalamiento','hasta 48 mm'],['Aislamiento acústico','hasta 47 dB'],['Antirrobo','hasta RC 3']],
    it:[['Profilo PVC con','5 camere'],['Tenuta','2 guarnizioni'],['Profondità','76 mm'],['Trasmittanza','Uw = 0,73 W/(m²K)'],['Vetro','fino a 48 mm'],['Isolamento acustico','fino a 47 dB'],['Antieffrazione','fino a RC 3']],
  },
};

const DESCS = {
  blu92alu: {
    ro:'Profil PVC placat cu 6 camere și adâncime de 104mm. Transfer termic excepțional Uw = 0,70 W/(m²K), geam până la 60mm, izolare fonică până la 47 dB și protecție anti-efracție RC 3.',
    en:'Aluminium-clad PVC profile with 6 chambers and 104mm depth. Exceptional thermal transfer Uw = 0.70 W/(m²K), glazing up to 60mm, sound insulation up to 47 dB and RC 3 burglar resistance.',
    de:'Aluminiumverkleidetes PVC-Profil mit 6 Kammern und 104mm Bautiefe. Außergewöhnlicher Wärmedurchgang Uw = 0,70 W/(m²K), Verglasung bis 60mm, Schallschutz bis 47 dB und Einbruchschutz RC 3.',
    fr:'Profil PVC plaqué aluminium avec 6 chambres et profondeur de 104mm. Transfert thermique exceptionnel Uw = 0,70 W/(m²K), vitrage jusqu\'à 60mm, isolation phonique jusqu\'à 47 dB et anti-effraction RC 3.',
    es:'Perfil PVC chapado en aluminio con 6 cámaras y profundidad de 104mm. Transferencia térmica excepcional Uw = 0,70 W/(m²K), acristalamiento hasta 60mm, aislamiento acústico hasta 47 dB y antirrobo RC 3.',
    it:'Profilo PVC placcato in alluminio con 6 camere e profondità di 104mm. Trasmittanza eccezionale Uw = 0,70 W/(m²K), vetro fino a 60mm, isolamento acustico fino a 47 dB e antieffrazione RC 3.',
  },
  blu92flex: {
    ro:'Profil PVC cu 6 camere și adâncime de 92mm, profil drept (FLEX). Transfer termic Uw = 0,70 W/(m²K), geam până la 60mm, izolare fonică până la 47 dB și protecție anti-efracție RC 3.',
    en:'Flexible PVC profile with 6 chambers and 92mm depth. Thermal transfer Uw = 0.70 W/(m²K), glazing up to 60mm, sound insulation up to 47 dB and RC 3 burglar resistance. Ideal for complex shapes.',
    de:'Flexibles PVC-Profil mit 6 Kammern und 92mm Bautiefe. Wärmedurchgang Uw = 0,70 W/(m²K), Verglasung bis 60mm, Schallschutz bis 47 dB und Einbruchschutz RC 3. Ideal für komplexe Formen.',
    fr:'Profil PVC BluEvolution 92 FLEX avec 6 chambres et profondeur de 92mm, design droit. Transfert thermique Uw = 0,70 W/(m²K), vitrage jusqu\'à 60mm, isolation phonique jusqu\'à 47 dB et anti-effraction RC 3.',
    es:'Perfil PVC BluEvolution 92 FLEX con 6 cámaras y profundidad de 92mm, diseño recto. Transferencia térmica Uw = 0,70 W/(m²K), acristalamiento hasta 60mm, aislamiento acústico hasta 47 dB y antirrobo RC 3.',
    it:'Profilo PVC flessibile con 6 camere e profondità di 92mm. Trasmittanza Uw = 0,70 W/(m²K), vetro fino a 60mm, isolamento acustico fino a 47 dB e antieffrazione RC 3. Ideale per forme complesse.',
  },
  blu92round: {
    ro:'Profil PVC cu muchii rotunjite, 6 camere și adâncime de 92mm. Transfer termic Uw = 0,70 W/(m²K), geam până la 60mm, izolare fonică până la 47 dB și protecție anti-efracție RC 3. Design contemporan.',
    en:'PVC profile with rounded edges, 6 chambers and 92mm depth. Thermal transfer Uw = 0.70 W/(m²K), glazing up to 60mm, sound insulation up to 47 dB and RC 3 burglar resistance. Contemporary design.',
    de:'PVC-Profil mit abgerundeten Kanten, 6 Kammern und 92mm Bautiefe. Wärmedurchgang Uw = 0,70 W/(m²K), Verglasung bis 60mm, Schallschutz bis 47 dB und Einbruchschutz RC 3. Zeitgemäßes Design.',
    fr:'Profil PVC à angles arrondis avec 6 chambres et profondeur de 92mm. Transfert thermique Uw = 0,70 W/(m²K), vitrage jusqu\'à 60mm, isolation phonique jusqu\'à 47 dB et anti-effraction RC 3. Design contemporain.',
    es:'Perfil PVC con cantos redondeados, 6 cámaras y profundidad de 92mm. Transferencia térmica Uw = 0,70 W/(m²K), acristalamiento hasta 60mm, aislamiento acústico hasta 47 dB y antirrobo RC 3. Diseño contemporáneo.',
    it:'Profilo PVC con bordi arrotondati, 6 camere e profondità di 92mm. Trasmittanza Uw = 0,70 W/(m²K), vetro fino a 60mm, isolamento acustico fino a 47 dB e antieffrazione RC 3. Design contemporaneo.',
  },
  gre76mdround: {
    ro:'Profil PVC GreenEvolution cu muchii rotunjite, 5 camere și adâncime de 76mm. Transfer termic Uw = 0,73 W/(m²K), geam până la 48mm, izolare fonică până la 47 dB și protecție anti-efracție RC 3.',
    en:'GreenEvolution PVC profile with rounded edges, 5 chambers and 76mm depth. Thermal transfer Uw = 0.73 W/(m²K), glazing up to 48mm, sound insulation up to 47 dB and RC 3 burglar resistance.',
    de:'GreenEvolution PVC-Profil mit abgerundeten Kanten, 5 Kammern und 76mm Bautiefe. Wärmedurchgang Uw = 0,73 W/(m²K), Verglasung bis 48mm, Schallschutz bis 47 dB und Einbruchschutz RC 3.',
    fr:'Profil PVC GreenEvolution à angles arrondis, 5 chambres et profondeur de 76mm. Transfert thermique Uw = 0,73 W/(m²K), vitrage jusqu\'à 48mm, isolation phonique jusqu\'à 47 dB et anti-effraction RC 3.',
    es:'Perfil PVC GreenEvolution con cantos redondeados, 5 cámaras y profundidad de 76mm. Transferencia Uw = 0,73 W/(m²K), acristalamiento hasta 48mm, aislamiento acústico hasta 47 dB y antirrobo RC 3.',
    it:'Profilo PVC GreenEvolution con bordi arrotondati, 5 camere e profondità di 76mm. Trasmittanza Uw = 0,73 W/(m²K), vetro fino a 48mm, isolamento acustico fino a 47 dB e antieffrazione RC 3.',
  },
  gre76mdflex: {
    ro:'Profil PVC GreenEvolution 76 MD FLEX cu 5 camere și adâncime de 76mm, profil drept. Transfer termic Uw = 0,73 W/(m²K), geam până la 48mm, izolare fonică până la 47 dB și protecție anti-efracție RC 3.',
    en:'GreenEvolution 76 MD FLEX PVC profile with 5 chambers and 76mm depth, straight design. Thermal transfer Uw = 0.73 W/(m²K), glazing up to 48mm, sound insulation up to 47 dB and RC 3 burglar resistance.',
    de:'GreenEvolution 76 MD FLEX PVC-Profil mit 5 Kammern und 76mm Bautiefe, gerades Design. Wärmedurchgang Uw = 0,73 W/(m²K), Verglasung bis 48mm, Schallschutz bis 47 dB und Einbruchschutz RC 3.',
    fr:'Profil PVC GreenEvolution 76 MD FLEX, 5 chambres et profondeur de 76mm, design droit. Transfert thermique Uw = 0,73 W/(m²K), vitrage jusqu\'à 48mm, isolation phonique jusqu\'à 47 dB et anti-effraction RC 3.',
    es:'Perfil PVC GreenEvolution 76 MD FLEX con 5 cámaras y profundidad de 76mm, diseño recto. Transferencia Uw = 0,73 W/(m²K), acristalamiento hasta 48mm, aislamiento acústico hasta 47 dB y antirrobo RC 3.',
    it:'Profilo PVC GreenEvolution 76 MD FLEX, 5 camere e profondità di 76mm, design dritto. Trasmittanza Uw = 0,73 W/(m²K), vetro fino a 48mm, isolamento acustico fino a 47 dB e antieffrazione RC 3.',
  },
  gre76adflex: {
    ro:'Profil PVC GreenEvolution economic cu 5 camere, 2 garnituri și adâncime de 76mm. Transfer termic Uw = 0,73 W/(m²K), geam până la 48mm, izolare fonică până la 47 dB și protecție anti-efracție RC 3.',
    en:'Economic GreenEvolution PVC profile with 5 chambers, 2 gaskets and 76mm depth. Thermal transfer Uw = 0.73 W/(m²K), glazing up to 48mm, sound insulation up to 47 dB and RC 3 burglar resistance.',
    de:'Wirtschaftliches GreenEvolution PVC-Profil mit 5 Kammern, 2 Dichtungen und 76mm Bautiefe. Wärmedurchgang Uw = 0,73 W/(m²K), Verglasung bis 48mm, Schallschutz bis 47 dB und Einbruchschutz RC 3.',
    fr:'Profil PVC GreenEvolution économique, 5 chambres, 2 joints et profondeur de 76mm. Transfert thermique Uw = 0,73 W/(m²K), vitrage jusqu\'à 48mm, isolation phonique jusqu\'à 47 dB et anti-effraction RC 3.',
    es:'Perfil PVC GreenEvolution económico con 5 cámaras, 2 juntas y profundidad de 76mm. Transferencia Uw = 0,73 W/(m²K), acristalamiento hasta 48mm, aislamiento acústico hasta 47 dB y antirrobo RC 3.',
    it:'Profilo PVC GreenEvolution economico, 5 camere, 2 guarnizioni e profondità di 76mm. Trasmittanza Uw = 0,73 W/(m²K), vetro fino a 48mm, isolamento acustico fino a 47 dB e antieffrazione RC 3.',
  },
};

// Ordinea exactă ca în screenshot: BluEvolution prima linie, GreenEvolution a doua
const PROD_SLUG_MAP = {
  'blu92alu':     'bluevolution-92-alu',
  'blu92flex':    'bluevolution-92-flex',
  'blu92round':   'bluevolution-92-round',
  'gre76mdround': 'greenevolution-76-md-round',
  'gre76mdflex':  'greenevolution-76-md-flex',
  'gre76adflex':  'greenevolution-76-ad-flex',
};

const PVC_PRODUCTS = [
  { slug:'blu92alu',     img:'/products/bluevolution-92-alu.avif',        name:'BluEvolution 92 ALU (alu-clad)', serie:'blu' },
  { slug:'blu92flex',    img:'/products/bluevolution-92-flex.avif',        name:'BluEvolution 92 FLEX',         serie:'blu' },
  { slug:'blu92round',   img:'/products/bluevolution-92-round.avif',       name:'BluEvolution 92 ROUND',        serie:'blu' },
  { slug:'gre76mdround', img:'/products/greenevolution-76-md-round.avif',  name:'GreenEvolution 76 MD ROUND',   serie:'gre' },
  { slug:'gre76mdflex',  img:'/products/greenevolution-76-md-flex.avif',   name:'GreenEvolution 76 MD FLEX',    serie:'gre' },
  { slug:'gre76adflex',  img:'/products/greenevolution-76-ad-flex.avif',   name:'GreenEvolution 76 AD FLEX',    serie:'gre' },
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pvc' });
  const slug = SLUGS_TAMPLARIE_PVC[locale] || SLUGS_TAMPLARIE_PVC.ro;
  return {
    title: locale === 'ro' ? 'Tâmplărie PVC Salamander București — BluEvolution 92, GreenEvolution 76, Montaj nZEB | Neofort BIZ'
           : locale === 'en' ? 'Salamander PVC Windows Bucharest — BluEvolution 92, GreenEvolution 76, nZEB Installation | Neofort BIZ'
           : locale === 'de' ? 'Salamander PVC-Fenster Bukarest — BluEvolution 92, GreenEvolution 76, nZEB-Montage | Neofort BIZ'
           : locale === 'fr' ? 'Menuiserie PVC Salamander Bucarest — BluEvolution 92, GreenEvolution 76, Pose nZEB | Neofort BIZ'
           : locale === 'es' ? 'Carpintería PVC Salamander Bucarest — BluEvolution 92, GreenEvolution 76, Instalación nZEB | Neofort BIZ'
           : 'Infissi PVC Salamander Bucarest — BluEvolution 92, GreenEvolution 76, Posa nZEB | Neofort BIZ',
    description: locale === 'ro' ? 'Tâmplărie PVC Salamander cu geam termopan — sisteme BluEvolution 92 (6 camere) și GreenEvolution 76. Montaj certificat nZEB, precadre Blaugelb Triotherm+, livrare în toată Europa. Solicită ofertă gratuită.'
               : locale === 'en' ? 'Salamander PVC windows with thermal glass — BluEvolution 92 (6-chamber) and GreenEvolution 76 systems. nZEB certified installation, Blaugelb Triotherm+ precasings, delivery across Europe.'
               : locale === 'de' ? 'Salamander PVC-Fenster mit Isolierglas — BluEvolution 92 (6-Kammer) und GreenEvolution 76. nZEB-Montage, Blaugelb Triotherm+ Vorfenster, Lieferung in ganz Europa.'
               : locale === 'fr' ? 'Menuiserie PVC Salamander avec vitrage isolant — BluEvolution 92 (6 chambres) et GreenEvolution 76. Pose nZEB, précadres Blaugelb Triotherm+, livraison en Europe.'
               : locale === 'es' ? 'Carpintería PVC Salamander con vidrio aislante — BluEvolution 92 (6 cámaras) y GreenEvolution 76. Instalación nZEB, premarcos Blaugelb Triotherm+, entrega en Europa.'
               : 'Infissi PVC Salamander con vetro isolante — BluEvolution 92 (6 camere) e GreenEvolution 76. Posa nZEB, precontrotelaio Blaugelb Triotherm+, consegna in Europa.',
    keywords: locale === 'ro' ? 'tamplarie PVC Salamander, tamplarie salamander bucuresti, ferestre PVC Bucuresti, BluEvolution 92, GreenEvolution 76, termopane pvc bucuresti, ferestre pvc pret 2026, montaj ferestre pvc nZEB, sisteme salamander 6 camere' : locale === 'en' ? 'PVC Salamander windows, BluEvolution 92, GreenEvolution 76, nZEB windows Bucharest' : locale === 'de' ? 'PVC Salamander Fenster, BluEvolution 92, GreenEvolution 76, nZEB Fenster Bukarest' : locale === 'fr' ? 'menuiserie PVC Salamander, BluEvolution 92, GreenEvolution 76, fenêtres nZEB Bucarest' : locale === 'es' ? 'carpintería PVC Salamander, BluEvolution 92, GreenEvolution 76, ventanas nZEB Bucarest' : 'infissi PVC Salamander, BluEvolution 92, GreenEvolution 76, finestre nZEB Bucarest',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: {
        'ro': `${BASE}/ro/${SLUGS_TAMPLARIE_PVC.ro}`,
        'en': `${BASE}/en/${SLUGS_TAMPLARIE_PVC.en}`,
        'de': `${BASE}/de/${SLUGS_TAMPLARIE_PVC.de}`,
        'fr': `${BASE}/fr/${SLUGS_TAMPLARIE_PVC.fr}`,
        'es': `${BASE}/es/${SLUGS_TAMPLARIE_PVC.es}`,
        'it': `${BASE}/it/${SLUGS_TAMPLARIE_PVC.it}`,
        'x-default': `${BASE}/ro/${SLUGS_TAMPLARIE_PVC.ro}`,
      },
    },
    openGraph: {
      type: 'website', url: `${BASE}/${locale}/${slug}`, siteName: 'Neofort BIZ',
      title: t('title'), description: t('description'),
      images: [{ url:`${BASE}/og/Tamplarie_PVC_Salamander.avif`, width:1200, height:630, alt: locale==='ro' ? 'Tâmplărie PVC Salamander BluEvolution 92 și GreenEvolution 76 — Neofort BIZ' : locale==='en' ? 'Salamander PVC windows BluEvolution 92 and GreenEvolution 76 — Neofort BIZ' : locale==='de' ? 'Salamander PVC-Fenster BluEvolution 92 und GreenEvolution 76 — Neofort BIZ' : locale==='fr' ? 'Fenêtres PVC Salamander BluEvolution 92 et GreenEvolution 76 — Neofort BIZ' : locale==='es' ? 'Ventanas PVC Salamander BluEvolution 92 y GreenEvolution 76 — Neofort BIZ' : 'Finestre PVC Salamander BluEvolution 92 e GreenEvolution 76 — Neofort BIZ', type:'image/avif' }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', creator:'@NeofortBIZ',
      title: t('title'), description: t('description'),
      images:[`${BASE}/og/Tamplarie_PVC_Salamander.avif`] },
  };
}

export default async function TamplariePVCPage({ params }) {
  const { locale } = await params;
  const ui = PAGE_UI[locale] || PAGE_UI.ro;


  const schemaPVC = {
    '@context': 'https://schema.org', '@type': ['CollectionPage', 'Product'],
    'name': PAGE_UI[locale]?.h1 || PAGE_UI.ro.h1,
    'description': PAGE_UI[locale]?.sub || PAGE_UI.ro.sub,
    'url': `${BASE}/${locale}/${SLUGS_TAMPLARIE_PVC[locale] || SLUGS_TAMPLARIE_PVC.ro}`,
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount':'46',
      'bestRating': '5',
      'worstRating': '1',
      'ratingCount':'46',
    },
    'provider': { '@type': 'Organization', 'name': 'Neofort BIZ', 'url': BASE },
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Neofort BIZ', 'item': `${BASE}/${locale}` },
        { '@type': 'ListItem', 'position': 2, 'name': PAGE_UI[locale]?.h1 || 'Profile PVC Salamander', 'item': `${BASE}/${locale}/${SLUGS_TAMPLARIE_PVC[locale] || SLUGS_TAMPLARIE_PVC.ro}` },
      ],
    },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': ({'ro': [['Cât costă tâmplăria PVC Salamander în 2026?', 'Prețul tâmplăriei PVC Salamander pornește de la 180–250 EUR/mp pentru GreenEvolution 76 și ajunge la 250–380 EUR/mp pentru BluEvolution 92, inclusiv geam termopan și montaj profesional. Prețul final depinde de dimensiuni, configurație (fixe, batante, culisante) și opțiuni (culoare RAL, geam tripan).'], ['Care este diferența dintre tâmplărie PVC Salamander și termopanele obișnuite?', 'Termopan este termenul popular pentru geamul termoizolator, nu pentru tâmplărie. Tâmplăria PVC Salamander este profilele (ramele) ferestrei. BluEvolution 92 și GreenEvolution 76 sunt profile certificate nZEB cu 5–6 camere de aer, Uw ≤ 0,70–0,73 W/m²K — semnificativ mai performante decât profilele generice ieftine de 3–4 camere.'], ['Care este diferența dintre BluEvolution 92 și GreenEvolution 76?', 'BluEvolution 92 are 6 camere, adâncime 92mm și Uw = 0,70 W/m²K — standard Passive House. GreenEvolution 76 are 5 camere, adâncime 76mm și Uw = 0,73 W/m²K — standard nZEB. BluEvolution 92 este recomandat pentru proiecte premium; GreenEvolution 76 pentru proiecte rezidențiale cu raport calitate-preț optim.'], ['Ce înseamnă nZEB și de ce contează la tâmplăria PVC?', 'nZEB (Nearly Zero Energy Building) este standardul european pentru clădiri cu consum de energie aproape zero, obligatoriu în România din 2021 pentru construcții noi. Profilele PVC Salamander GreenEvolution 76 și BluEvolution 92 sunt certificate nZEB, cu Uw ≤ 0,73 W/m²K.'], ['Ce este profilul MD față de AD în gama GreenEvolution 76?', 'MD (Middle Density) înseamnă că profilul are o garnitură mediană suplimentară — 3 puncte de etanșare total. AD (Advanced Design) are 2 garnituri EPDM fără garnitură mediană. Ambele au 5 camere. MD ROUND are design curbat, MD FLEX și AD FLEX au design drept.']], 'en': [['What is the difference between BluEvolution 92 and GreenEvolution 76?', 'BluEvolution 92 has 6 chambers, 92mm depth and Uw = 0.70 W/m²K — Passive House standard. GreenEvolution 76 has 5 chambers, 76mm depth and Uw = 0.73 W/m²K — nZEB standard. BluEvolution 92 is recommended for premium projects; GreenEvolution 76 for residential projects with optimal value.'], ['What does nZEB mean and why does it matter for PVC windows?', 'nZEB (Nearly Zero Energy Building) is the European standard for nearly zero energy buildings, mandatory in Romania from 2021 for new constructions. Salamander GreenEvolution 76 and BluEvolution 92 PVC profiles are nZEB certified with Uw ≤ 0.73 W/m²K.'], ['What is MD vs AD profile in GreenEvolution 76?', 'MD (Middle Density) means the profile has an additional middle gasket — 3 sealing points total. AD (Advanced Design) has 2 EPDM gaskets without middle gasket. Both have 5 chambers. MD ROUND has rounded design, MD FLEX and AD FLEX have straight design.']]})[locale]?.map(([q,a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    })) || {'ro': [['Cât costă tâmplăria PVC Salamander în 2026?', 'Prețul tâmplăriei PVC Salamander pornește de la 180–250 EUR/mp pentru GreenEvolution 76 și ajunge la 250–380 EUR/mp pentru BluEvolution 92, inclusiv geam termopan și montaj profesional. Prețul final depinde de dimensiuni, configurație (fixe, batante, culisante) și opțiuni (culoare RAL, geam tripan).'], ['Care este diferența dintre tâmplărie PVC Salamander și termopanele obișnuite?', 'Termopan este termenul popular pentru geamul termoizolator, nu pentru tâmplărie. Tâmplăria PVC Salamander este profilele (ramele) ferestrei. BluEvolution 92 și GreenEvolution 76 sunt profile certificate nZEB cu 5–6 camere de aer, Uw ≤ 0,70–0,73 W/m²K — semnificativ mai performante decât profilele generice ieftine de 3–4 camere.'], ['Care este diferența dintre BluEvolution 92 și GreenEvolution 76?', 'BluEvolution 92 are 6 camere, adâncime 92mm și Uw = 0,70 W/m²K — standard Passive House. GreenEvolution 76 are 5 camere, adâncime 76mm și Uw = 0,73 W/m²K — standard nZEB. BluEvolution 92 este recomandat pentru proiecte premium; GreenEvolution 76 pentru proiecte rezidențiale cu raport calitate-preț optim.'], ['Ce înseamnă nZEB și de ce contează la tâmplăria PVC?', 'nZEB (Nearly Zero Energy Building) este standardul european pentru clădiri cu consum de energie aproape zero, obligatoriu în România din 2021 pentru construcții noi. Profilele PVC Salamander GreenEvolution 76 și BluEvolution 92 sunt certificate nZEB, cu Uw ≤ 0,73 W/m²K.'], ['Ce este profilul MD față de AD în gama GreenEvolution 76?', 'MD (Middle Density) înseamnă că profilul are o garnitură mediană suplimentară — 3 puncte de etanșare total. AD (Advanced Design) are 2 garnituri EPDM fără garnitură mediană. Ambele au 5 camere. MD ROUND are design curbat, MD FLEX și AD FLEX au design drept.']], 'en': [['What is the difference between BluEvolution 92 and GreenEvolution 76?', 'BluEvolution 92 has 6 chambers, 92mm depth and Uw = 0.70 W/m²K — Passive House standard. GreenEvolution 76 has 5 chambers, 76mm depth and Uw = 0.73 W/m²K — nZEB standard. BluEvolution 92 is recommended for premium projects; GreenEvolution 76 for residential projects with optimal value.'], ['What does nZEB mean and why does it matter for PVC windows?', 'nZEB (Nearly Zero Energy Building) is the European standard for nearly zero energy buildings, mandatory in Romania from 2021 for new constructions. Salamander GreenEvolution 76 and BluEvolution 92 PVC profiles are nZEB certified with Uw ≤ 0.73 W/m²K.'], ['What is MD vs AD profile in GreenEvolution 76?', 'MD (Middle Density) means the profile has an additional middle gasket — 3 sealing points total. AD (Advanced Design) has 2 EPDM gaskets without middle gasket. Both have 5 chambers. MD ROUND has rounded design, MD FLEX and AD FLEX have straight design.']]}['ro'].map(([q,a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    }))
  };

  const faqItemsPVC = ({
    ro:[
      ['Cât costă tâmplăria PVC Salamander în 2026?','Prețul pornește de la 180–250 EUR/mp pentru GreenEvolution 76 și ajunge la 250–380 EUR/mp pentru BluEvolution 92, inclusiv geam termopan și montaj profesional.'],
      ['Care este diferența față de termopanele obișnuite?','Profilele Salamander sunt certificate nZEB cu 5–6 camere de aer și Uw ≤ 0,70–0,73 W/m²K — semnificativ mai performante decât profilele generice ieftine de 3–4 camere.'],
      ['Care este diferența dintre BluEvolution 92 și GreenEvolution 76?','BluEvolution 92 are 6 camere, adâncime 92mm și Uw = 0,70 W/m²K — standard Passive House. GreenEvolution 76 are 5 camere, adâncime 76mm și Uw = 0,73 W/m²K — standard nZEB.'],
      ['Ce înseamnă nZEB și de ce contează la tâmplărie?','nZEB este standardul european obligatoriu în România din 2021 pentru construcții noi. Profilele Salamander sunt certificate nZEB cu Uw ≤ 0,73 W/m²K.'],
      ['Ce este profilul MD față de AD în gama GreenEvolution 76?','MD are o garnitură mediană suplimentară — 3 puncte de etanșare total. AD are 2 garnituri EPDM fără garnitură mediană. Ambele au 5 camere.'],
    ],
    en:[
      ['How much do Salamander PVC windows cost in 2026?','Prices start from 180–250 EUR/m² for GreenEvolution 76 and 250–380 EUR/m² for BluEvolution 92, including thermal glass and professional installation.'],
      ['What is the difference from standard double glazing?','Salamander profiles are nZEB certified with 5–6 air chambers and Uw ≤ 0.70–0.73 W/m²K — significantly better than cheap generic 3–4 chamber profiles.'],
      ['What is the difference between BluEvolution 92 and GreenEvolution 76?','BluEvolution 92 has 6 chambers, 92mm depth and Uw = 0.70 W/m²K — Passive House standard. GreenEvolution 76 has 5 chambers, 76mm and Uw = 0.73 W/m²K — nZEB standard.'],
      ['What does nZEB mean for PVC windows?','nZEB is mandatory in Romania from 2021 for new constructions. Salamander profiles are nZEB certified with Uw ≤ 0.73 W/m²K.'],
      ['What is MD vs AD in GreenEvolution 76?','MD has an additional middle gasket — 3 sealing points total. AD has 2 EPDM gaskets without middle gasket. Both have 5 chambers.'],
    ],
    de:[
      ['Was kosten Salamander PVC-Fenster im Jahr 2026?','Preise ab 180–250 EUR/m² für GreenEvolution 76 bis 250–380 EUR/m² für BluEvolution 92, einschließlich Isolierglas und professionellem Einbau.'],
      ['Was ist der Unterschied zu herkömmlichen Thermopane?','Salamander-Profile sind nZEB-zertifiziert mit 5–6 Luftkammern und Uw ≤ 0,70–0,73 W/m²K — deutlich besser als günstige generische Profile mit 3–4 Kammern.'],
      ['Was ist der Unterschied zwischen BluEvolution 92 und GreenEvolution 76?','BluEvolution 92 hat 6 Kammern, 92mm Tiefe und Uw = 0,70 W/m²K — Passivhaus-Standard. GreenEvolution 76 hat 5 Kammern, 76mm und Uw = 0,73 W/m²K — nZEB-Standard.'],
      ['Was bedeutet nZEB für PVC-Fenster?','nZEB ist in Rumänien seit 2021 für Neubauten obligatorisch. Salamander-Profile sind nZEB-zertifiziert mit Uw ≤ 0,73 W/m²K.'],
      ['Was ist MD vs AD bei GreenEvolution 76?','MD hat eine zusätzliche mittlere Dichtung — 3 Dichtungspunkte gesamt. AD hat 2 EPDM-Dichtungen ohne mittlere Dichtung. Beide haben 5 Kammern.'],
    ],
    fr:[
      ["Combien coûtent les fenêtres PVC Salamander en 2026 ?","Prix à partir de 180–250 EUR/m² pour GreenEvolution 76 et 250–380 EUR/m² pour BluEvolution 92, vitrage isolant et pose inclus."],
      ["Quelle est la différence avec les vitrages standard ?","Les profils Salamander sont certifiés nZEB avec 5–6 chambres d'air et Uw ≤ 0,70–0,73 W/m²K — bien supérieurs aux profils génériques bon marché à 3–4 chambres."],
      ["Quelle est la différence entre BluEvolution 92 et GreenEvolution 76 ?","BluEvolution 92 a 6 chambres, 92mm de profondeur et Uw = 0,70 W/m²K — standard Maison Passive. GreenEvolution 76 a 5 chambres, 76mm et Uw = 0,73 W/m²K — standard nZEB."],
      ["Qu'est-ce que nZEB pour les fenêtres PVC ?","nZEB est obligatoire en Roumanie depuis 2021 pour les nouvelles constructions. Les profils Salamander sont certifiés nZEB avec Uw ≤ 0,73 W/m²K."],
      ["Qu'est-ce que MD vs AD dans GreenEvolution 76 ?","MD a un joint médian supplémentaire — 3 points d'étanchéité au total. AD a 2 joints EPDM sans joint médian. Les deux ont 5 chambres."],
    ],
    es:[
      ['¿Cuánto cuestan las ventanas PVC Salamander en 2026?','Precios desde 180–250 EUR/m² para GreenEvolution 76 hasta 250–380 EUR/m² para BluEvolution 92, incluyendo vidrio aislante e instalación profesional.'],
      ['¿Cuál es la diferencia con el doble acristalamiento estándar?','Los perfiles Salamander están certificados nZEB con 5–6 cámaras de aire y Uw ≤ 0,70–0,73 W/m²K — mejores que los perfiles genéricos de 3–4 cámaras.'],
      ['¿Cuál es la diferencia entre BluEvolution 92 y GreenEvolution 76?','BluEvolution 92 tiene 6 cámaras, 92mm y Uw = 0,70 W/m²K — estándar Casa Pasiva. GreenEvolution 76 tiene 5 cámaras, 76mm y Uw = 0,73 W/m²K — estándar nZEB.'],
      ['¿Qué significa nZEB para ventanas PVC?','nZEB es obligatorio en Rumanía desde 2021. Los perfiles Salamander están certificados nZEB con Uw ≤ 0,73 W/m²K.'],
      ['¿Qué es MD vs AD en GreenEvolution 76?','MD tiene una junta central adicional — 3 puntos de sellado. AD tiene 2 juntas EPDM sin junta central. Ambos tienen 5 cámaras.'],
    ],
    it:[
      ["Quanto costano le finestre PVC Salamander nel 2026?","Prezzi da 180–250 EUR/m² per GreenEvolution 76 a 250–380 EUR/m² per BluEvolution 92, inclusi vetro isolante e posa professionale."],
      ["Qual è la differenza con i classici termopane?","I profili Salamander sono certificati nZEB con 5–6 camere d'aria e Uw ≤ 0,70–0,73 W/m²K — migliori dei profili generici economici a 3–4 camere."],
      ["Qual è la differenza tra BluEvolution 92 e GreenEvolution 76?","BluEvolution 92 ha 6 camere, 92mm e Uw = 0,70 W/m²K — standard Casa Passiva. GreenEvolution 76 ha 5 camere, 76mm e Uw = 0,73 W/m²K — standard nZEB."],
      ["Cosa significa nZEB per gli infissi PVC?","nZEB è obbligatorio in Romania dal 2021. I profili Salamander sono certificati nZEB con Uw ≤ 0,73 W/m²K."],
      ["Cosa significa MD vs AD in GreenEvolution 76?","MD ha una guarnizione mediana aggiuntiva — 3 punti di tenuta totali. AD ha 2 guarnizioni EPDM senza guarnizione mediana. Entrambi hanno 5 camere."],
    ],
  })[locale] || [];

  const faqLabelPVC = {ro:'Întrebări frecvente',en:'Frequently asked questions',de:'Häufig gestellte Fragen',fr:'Questions fréquentes',es:'Preguntas frecuentes',it:'Domande frequenti'}[locale] || 'Întrebări frecvente';


  const PILLAR_SLUGS = {
    ro: 'tamplarie-pvc/ghid-complet',
    en: 'pvc-windows/complete-guide',
    de: 'kunststofffenster-pvc/kompletter-ratgeber',
    fr: 'menuiserie-pvc/guide-complet',
    es: 'carpinteria-pvc/guia-completa',
    it: 'infissi-pvc/guida-completa',
  };
  const PILLAR_LABELS = {
    ro: 'Ghid Complet Tamplarie PVC 2026 — Profile, geamuri, montaj, preturi',
    en: 'Complete PVC Windows Guide 2026 — Profiles, glazing, installation',
    de: 'PVC-Fenster Ratgeber 2026 — Profile, Verglasung, Montage',
    fr: 'Guide complet menuiserie PVC 2026 — Profils, vitrage, pose',
    es: 'Guia completa carpinteria PVC 2026 — Perfiles, acristalamiento, instalacion',
    it: 'Guida completa infissi PVC 2026 — Profili, vetro, installazione',
  };
  const PILLAR_CTA = {
    ro: 'Citeste Ghidul Complet',
    en: 'Read the Complete Guide',
    de: 'Kompletten Ratgeber lesen',
    fr: 'Lire le guide complet',
    es: 'Leer la guia completa',
    it: 'Leggi la guida completa',
  };
  const pillarSlug = PILLAR_SLUGS[locale] || PILLAR_SLUGS.ro;
  const pillarLabel = PILLAR_LABELS[locale] || PILLAR_LABELS.ro;
  const pillarCta = PILLAR_CTA[locale] || PILLAR_CTA.ro;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPVC) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">{ui.sub}</p>
        </div>
      </div>

      {/* ── GRID PRODUSE ── */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,320px),1fr))',gap:'20px'}}>
            {PVC_PRODUCTS.map(p => {
              const specs      = SPECS[p.slug][locale]  || SPECS[p.slug].ro;
              const desc       = DESCS[p.slug][locale]  || DESCS[p.slug].ro;
              const isBlu      = p.serie === 'blu';
              const accentColor= isBlu ? '#2d5a8e' : '#4a7c59';
              const accentBg   = isBlu ? 'rgba(45,90,142,0.07)' : 'rgba(74,124,89,0.07)';
              const accentBdr  = isBlu ? 'rgba(45,90,142,0.18)' : 'rgba(74,124,89,0.18)';
              const serieLabel = isBlu ? ui.ser_blu : ui.ser_gre;
              return (
                <div key={p.slug} style={{display:'flex',flexDirection:'column',border:'1px solid #e8e8e4',background:'#fff',overflow:'hidden'}}>

                  {/* Imagine */}
                  <div style={{position:'relative',background:'#fff',height:'200px',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',padding:'16px'}}>
                    <img
                      src={p.img} alt={p.name}
                      style={{maxHeight:'168px',maxWidth:'100%',width:'auto',height:'auto',objectFit:'contain',display:'block'}}
                      loading="lazy"
                    />
                    {/* Badge serie */}
                    <span style={{position:'absolute',top:'10px',right:'10px',fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.55rem',letterSpacing:'0.18em',textTransform:'uppercase',fontWeight:600,color:accentColor,background:accentBg,border:`1px solid ${accentBdr}`,padding:'3px 8px'}}>
                      Salamander
                    </span>
                  </div>

                  {/* Body */}
                  <div style={{display:'flex',flexDirection:'column',flex:1,padding:'18px 20px 20px'}}>

                    {/* Serie */}
                    <p style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.57rem',letterSpacing:'0.18em',textTransform:'uppercase',fontWeight:600,color:accentColor,marginBottom:'5px'}}>
                      {serieLabel}
                    </p>

                    {/* Titlu */}
                    <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'1.1rem',fontWeight:600,color:'#1a1a1a',marginBottom:'12px',lineHeight:1.2}}>
                      {p.name}
                    </h3>

                    {/* Specs — layout cheie:valoare identic cu screenshot */}
                    <ul style={{listStyle:'none',padding:0,margin:'0 0 12px 0',borderTop:'1px solid #efefed',paddingTop:'8px'}}>
                      {specs.map(([k,v],i) => (
                        <li key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:'6px',padding:'2.5px 0',borderBottom:'1px solid #f8f8f6',fontSize:'0.7rem',lineHeight:1.4}}>
                          <span style={{fontWeight:600,color:'#444',whiteSpace:'nowrap',flexShrink:0}}>– {k}:</span>
                          <span style={{color:'#767676',textAlign:'right'}}>{v}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Descriere */}
                    <p style={{fontSize:'0.77rem',color:'#767676',lineHeight:1.65,flex:1,marginBottom:'16px'}}>{desc}</p>

                    {/* Buton Detalii */}
                    <Link href={`/produse/${PROD_SLUG_MAP[p.slug] || p.slug}`} style={{display:'block',textAlign:'center',fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.63rem',letterSpacing:'0.18em',textTransform:'uppercase',fontWeight:600,color:accentColor,border:`1px solid ${accentColor}`,padding:'9px 16px',textDecoration:'none',transition:'background 0.15s,color 0.15s'}}>
                      {ui.btn_detail}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EXPERTIZA ── */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.exp_label}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{alignItems:'start'}}>
            <p className="text-[0.88rem] text-muted leading-relaxed" dangerouslySetInnerHTML={{__html: ui.exp1}}/>
            <p className="text-[0.88rem] text-muted leading-relaxed" dangerouslySetInnerHTML={{__html: ui.exp2}}/>
          </div>
        </div>
      </section>

      {/* ── CROSS-LINKS ── */}
      <section className="py-10 border-b border-border bg-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/tamplarie-aluminiu" className="flex items-center justify-between border border-border bg-white px-5 py-4 hover:border-primary transition-colors duration-200 group">
              <div>
                <span className="font-condensed text-[0.58rem] tracking-[0.2em] uppercase font-semibold text-aluminiu block mb-1">Neofort BIZ</span>
                <span className="font-condensed text-[0.9rem] font-semibold text-primary group-hover:text-aluminiu transition-colors">{ui.cross_alu}</span>
              </div>
              <span className="text-muted group-hover:text-aluminiu transition-colors">→</span>
            </Link>
            <Link href="/accesorii" className="flex items-center justify-between border border-border bg-white px-5 py-4 hover:border-primary transition-colors duration-200 group">
              <div>
                <span className="font-condensed text-[0.58rem] tracking-[0.2em] uppercase font-semibold text-accesorii block mb-1">Neofort BIZ</span>
                <span className="font-condensed text-[0.9rem] font-semibold text-primary group-hover:text-accesorii transition-colors">{ui.cross_acc}</span>
              </div>
              <span className="text-muted group-hover:text-accesorii transition-colors">→</span>
            </Link>
            <Link href="/sisteme-nzeb" className="flex items-center justify-between border border-border bg-white px-5 py-4 hover:border-primary transition-colors duration-200 group">
              <div>
                <span className="font-condensed text-[0.58rem] tracking-[0.2em] uppercase font-semibold text-primary block mb-1">Neofort BIZ</span>
                <span className="font-condensed text-[0.9rem] font-semibold text-primary group-hover:text-aluminiu transition-colors">{ui.cross_nzeb}</span>
              </div>
              <span className="text-muted group-hover:text-aluminiu transition-colors">→</span>
            </Link>
            <Link href="/blog" className="flex items-center justify-between border border-border bg-white px-5 py-4 hover:border-primary transition-colors duration-200 group">
              <div>
                <span className="font-condensed text-[0.58rem] tracking-[0.2em] uppercase font-semibold text-primary block mb-1">Neofort BIZ</span>
                <span className="font-condensed text-[0.9rem] font-semibold text-primary group-hover:text-aluminiu transition-colors">{ui.cross_blog}</span>
              </div>
              <span className="text-muted group-hover:text-aluminiu transition-colors">→</span>
            </Link>
          </div>
        </div>
      </section>

            {/* ── PILLAR GUIDE LINK ── */}
      <section style={{background:'#f7f7f5',padding:'0'}}>
        <div className="container" style={{paddingTop:'24px',paddingBottom:'24px',borderTop:'1px solid #e8e8e4'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'12px'}}>
            <div>
              <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.65rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#888',marginBottom:'4px'}}>Ghid & Resurse</div>
              <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.92rem',fontWeight:600,letterSpacing:'.04em',color:'#1a2a3a'}}>{pillarLabel}</div>
            </div>
            <Link href={`/${pillarSlug}`} style={{display:'inline-block',background:'#1a2a3a',color:'#fff',fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'.72rem',letterSpacing:'.18em',textTransform:'uppercase',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>
              {pillarCta} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SEO BRIDGE ── */}
      <section aria-label={CTA_LABELS[locale]?.tag || CTA_LABELS.ro.tag} style={{background:'#111',padding:'0'}}>
        <div className="container" style={{paddingTop:'32px',paddingBottom:'32px',borderTop:'1px solid #1e1e1e'}}>
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#444',marginBottom:'0',textAlign:'center'}}>
            {CTA_LABELS[locale]?.h2a || CTA_LABELS.ro.h2a}{' '}
            <span style={{textDecoration:'underline'}}>{CTA_LABELS[locale]?.h2b || CTA_LABELS.ro.h2b}</span>
            {' '}{CTA_LABELS[locale]?.h2c || CTA_LABELS.ro.h2c}
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-base" style={{paddingTop:0}}>
        <div className="container mx-auto px-6 max-w-3xl">
          <FaqAccordion items={faqItemsPVC} title={faqLabelPVC} />
        </div>
      </section>
    </>
  );
}
