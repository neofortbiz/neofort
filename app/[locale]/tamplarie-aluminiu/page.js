import { Link } from '../../../i18n/navigation';
import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_TAMPLARIE_ALUMINIU = {'ro':'tamplarie-aluminiu', 'en':'aluminium-windows', 'de':'aluminiumfenster', 'fr':'menuiserie-aluminium', 'es':'carpinteria-aluminio', 'it':'infissi-alluminio'};

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil', btn:'Cerere Ofertă' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows', btn:'Request Quote' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an', btn:'Angebot anfragen' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil', btn:'Demander un devis' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil', btn:'Pedir presupuesto' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil', btn:'Richiedi preventivo' },
};

const PAGE_UI = {
  ro: { label:'Tâmplărie Aluminiu · Alumil', h1:'Tâmplărie Aluminiu Alumil — Ferestre, Uși și Pereți Cortină București', sub:'Tâmplărie aluminiu cu barieră termică Alumil Supreme și Smartia. Prețuri competitive, montaj certificat nZEB, livrare în toată Europa.', exp_label:'Expertiza Neofort BIZ în Aluminiu', exp1:'Furnizăm <strong>tâmplărie aluminiu Alumil</strong> din gamele premium, executată pe linii de producție automatizate. Fie că optați pentru sistemele <strong>Alumil Supreme</strong> sau pentru versatilitatea Smartia, asigurăm consultanță tehnică și montaj profesional.', exp2:'Profilele de aluminiu Alumil cu barieră termică sunt certificate pentru standardele <strong>nZEB</strong>. Suprafețe vitrate mari, durabilitate extremă și design contemporan pentru orice tip de proiect — rezidențial, comercial sau industrial.', btn_detail:'Detalii', cross_pvc:'Tâmplărie PVC Salamander', cross_acc:'Accesorii & Izolare Perimetrală', cat_ferestre:'FERESTRE și UȘI - ALUMINIU', cat_liftante:'LIFTANT GLISANTE - ALUMINIU', cat_armonice:'FERESTRE și UȘI ARMONICE' },
  en: { label:'Aluminium Windows · Alumil', h1:'Alumil Aluminium Windows — Frames, Doors and Curtain Walls Bucharest', sub:'Aluminium windows with thermal break — Alumil Supreme and Smartia. Competitive prices, nZEB certified installation, delivery throughout Europe.', exp_label:'Neofort BIZ Aluminium Expertise', exp1:'We supply <strong>Alumil aluminium windows</strong> from premium ranges, manufactured on automated production lines. Whether you choose <strong>Alumil Supreme</strong> systems or the versatile Smartia range, we provide technical advice and professional installation.', exp2:'Alumil aluminium profiles with thermal barrier are <strong>nZEB</strong> certified. Large glazed surfaces, extreme durability and contemporary design for any project type — residential, commercial or industrial.', btn_detail:'Details', cross_pvc:'Salamander PVC Windows', cross_acc:'Accessories & Perimeter Insulation', cat_ferestre:'WINDOWS AND DOORS - ALUMINIUM', cat_liftante:'LIFT AND SLIDE - ALUMINIUM', cat_armonice:'FOLDING WINDOWS AND DOORS' },
  de: { label:'Aluminiumfenster · Alumil', h1:'Aluminiumfenster Alumil — Fenster, Türen und Vorhangfassaden Bukarest', sub:'Aluminiumfenster mit Wärmedämmbrücke — Alumil Supreme und Smartia. Wettbewerbsfähige Preise, nZEB-zertifizierter Einbau, Lieferung in ganz Europa.', exp_label:'Neofort BIZ Aluminium-Expertise', exp1:'Wir liefern <strong>Alumil Aluminiumfenster</strong> aus Premium-Sortimenten, gefertigt auf automatisierten Produktionslinien. Ob <strong>Alumil Supreme</strong>-Systeme oder die vielseitige Smartia-Reihe — wir bieten Fachberatung und professionellen Einbau.', exp2:'Alumil-Aluminiumprofile mit Wärmedämmbrücke sind <strong>nZEB</strong>-zertifiziert. Große Glasflächen, extreme Langlebigkeit und zeitgemäßes Design für jede Projektart.', btn_detail:'Details', cross_pvc:'Salamander PVC-Fenster', cross_acc:'Zubehör & Perimeterdämmung', cat_ferestre:'FENSTER UND TÜREN - ALUMINIUM', cat_liftante:'HEBESCHIEBETÜREN - ALUMINIUM', cat_armonice:'FALT-FENSTER UND -TÜREN' },
  fr: { label:'Menuiserie Aluminium · Alumil', h1:'Menuiserie Aluminium Alumil — Fenêtres, Portes et Murs-Rideaux Bucarest', sub:'Menuiserie aluminium à rupture de pont thermique — Alumil Supreme et Smartia. Prix compétitifs, pose certifiée nZEB, livraison dans toute l\'Europe.', exp_label:'Expertise Neofort BIZ en Aluminium', exp1:'Nous fournissons des <strong>menuiseries aluminium Alumil</strong> des gammes premium, fabriquées sur lignes de production automatisées. Systèmes <strong>Alumil Supreme</strong> ou gamme Smartia — conseil technique et pose professionnelle assurés.', exp2:'Les profils aluminium Alumil à rupture de pont thermique sont certifiés <strong>nZEB</strong>. Grandes surfaces vitrées, durabilité extrême et design contemporain pour tout type de projet.', btn_detail:'Détails', cross_pvc:'Menuiserie PVC Salamander', cross_acc:'Accessoires & Isolation', cat_ferestre:'FENÊTRES ET PORTES - ALUMINIUM', cat_liftante:'COULISSANTS LEVANTS - ALUMINIUM', cat_armonice:'FENÊTRES ET PORTES PLIANTES' },
  es: { label:'Carpintería Aluminio · Alumil', h1:'Carpintería Aluminio Alumil — Ventanas, Puertas y Muros Cortina Bucarest', sub:'Carpintería aluminio con rotura de puente térmico — Alumil Supreme y Smartia. Precios competitivos, instalación certificada nZEB, entrega en toda Europa.', exp_label:'Experiencia Neofort BIZ en Aluminio', exp1:'Suministramos <strong>carpintería aluminio Alumil</strong> de gamas premium, fabricada en líneas de producción automatizadas. Sistemas <strong>Alumil Supreme</strong> o gama Smartia — asesoría técnica e instalación profesional garantizadas.', exp2:'Los perfiles de aluminio Alumil con rotura de puente térmico están certificados <strong>nZEB</strong>. Grandes superficies acristaladas, durabilidad extrema y diseño contemporáneo para todo tipo de proyecto.', btn_detail:'Detalles', cross_pvc:'Ventanas PVC Salamander', cross_acc:'Accesorios & Aislamiento Perimetral', cat_ferestre:'VENTANAS Y PUERTAS - ALUMINIO', cat_liftante:'CORREDERA ELEVABLE - ALUMINIO', cat_armonice:'VENTANAS Y PUERTAS PLEGABLES' },
  it: { label:'Infissi Alluminio · Alumil', h1:'Infissi Alluminio Alumil — Finestre, Porte e Facciate Continue Bucarest', sub:'Infissi alluminio con taglio termico — Alumil Supreme e Smartia. Prezzi competitivi, posa certificata nZEB, consegna in tutta Europa.', exp_label:'Competenza Neofort BIZ in Alluminio', exp1:'Forniamo <strong>infissi alluminio Alumil</strong> delle gamme premium, prodotti su linee di produzione automatizzate. Sistemi <strong>Alumil Supreme</strong> o gamma Smartia — consulenza tecnica e posa professionale garantite.', exp2:'I profili in alluminio Alumil con taglio termico sono certificati <strong>nZEB</strong>. Grandi superfici vetrate, estrema durabilità e design contemporaneo per ogni tipo di progetto.', btn_detail:'Dettagli', cross_pvc:'Finestre PVC Salamander', cross_acc:'Accessori & Isolamento Perimetrale', cat_ferestre:'FINESTRE E PORTE - ALLUMINIO', cat_liftante:'SCORREVOLI ALZANTI - ALLUMINIO', cat_armonice:'FINESTRE E PORTE PIEGHEVOLI' },
};

// ─── DATE PRODUSE — identic cu screenshot, toate specificațiile, 6 limbi ─────
const SPECS = {
  s77: {
    ro:[['Bariera termică','40mm'],['Etanșare','3 garnituri'],['Adâncime','77-93 mm'],['Transfer termic Uf','de la 0.86 W/m²K'],['Vitraj','până la 72mm'],['Protecție fonică','până la 42 dB'],['Anti-efracție','până la RC 3']],
    en:[['Thermal barrier','40mm'],['Sealing','3 gaskets'],['Depth','77-93 mm'],['Thermal transfer Uf','from 0.86 W/m²K'],['Glazing','up to 72mm'],['Sound insulation','up to 42 dB'],['Burglar resistance','up to RC 3']],
    de:[['Wärmedämmbrücke','40mm'],['Dichtung','3 Dichtungen'],['Bautiefe','77-93 mm'],['Wärmedurchgang Uf','ab 0,86 W/m²K'],['Verglasung','bis 72mm'],['Schallschutz','bis 42 dB'],['Einbruchschutz','bis RC 3']],
    fr:[['Rupture pont thermique','40mm'],['Étanchéité','3 joints'],['Profondeur','77-93 mm'],['Transfert thermique Uf','dès 0,86 W/m²K'],['Vitrage','jusqu\'à 72mm'],['Protection phonique','jusqu\'à 42 dB'],['Anti-effraction','jusqu\'à RC 3']],
    es:[['Rotura puente térmico','40mm'],['Estanqueidad','3 juntas'],['Profundidad','77-93 mm'],['Transferencia Uf','desde 0,86 W/m²K'],['Acristalamiento','hasta 72mm'],['Aislamiento acústico','hasta 42 dB'],['Antirrobo','hasta RC 3']],
    it:[['Taglio termico','40mm'],['Tenuta','3 guarnizioni'],['Profondità','77-93 mm'],['Trasmittanza Uf','da 0,86 W/m²K'],['Vetro','fino a 72mm'],['Isolamento acustico','fino a 42 dB'],['Antieffrazione','fino a RC 3']],
  },
  s67: {
    ro:[['Bariera termică','30mm'],['Etanșare','3 garnituri'],['Adâncime','67-75 mm'],['Transfer termic Uf','de la 1.5 W/m²K'],['Vitraj','până la 58mm'],['Protecție fonică','până la 45 dB'],['Anti-efracție','până la RC 3']],
    en:[['Thermal barrier','30mm'],['Sealing','3 gaskets'],['Depth','67-75 mm'],['Thermal transfer Uf','from 1.5 W/m²K'],['Glazing','up to 58mm'],['Sound insulation','up to 45 dB'],['Burglar resistance','up to RC 3']],
    de:[['Wärmedämmbrücke','30mm'],['Dichtung','3 Dichtungen'],['Bautiefe','67-75 mm'],['Wärmedurchgang Uf','ab 1,5 W/m²K'],['Verglasung','bis 58mm'],['Schallschutz','bis 45 dB'],['Einbruchschutz','bis RC 3']],
    fr:[['Rupture pont thermique','30mm'],['Étanchéité','3 joints'],['Profondeur','67-75 mm'],['Transfert thermique Uf','dès 1,5 W/m²K'],['Vitrage','jusqu\'à 58mm'],['Protection phonique','jusqu\'à 45 dB'],['Anti-effraction','jusqu\'à RC 3']],
    es:[['Rotura puente térmico','30mm'],['Estanqueidad','3 juntas'],['Profundidad','67-75 mm'],['Transferencia Uf','desde 1,5 W/m²K'],['Acristalamiento','hasta 58mm'],['Aislamiento acústico','hasta 45 dB'],['Antirrobo','hasta RC 3']],
    it:[['Taglio termico','30mm'],['Tenuta','3 guarnizioni'],['Profondità','67-75 mm'],['Trasmittanza Uf','da 1,5 W/m²K'],['Vetro','fino a 58mm'],['Isolamento acustico','fino a 45 dB'],['Antieffrazione','fino a RC 3']],
  },
  s700: {
    ro:[['Bariera termică','Kooltherm'],['Etanșare perimetrală','perii tri-fin'],['Adâncime','70-70 mm'],['Transfer termic Uf','de la 1.1 W/m²K'],['Vitraj','până la 50mm'],['Protecție fonică','până la 41 dB'],['Anti-efracție','până la RC 2']],
    en:[['Thermal barrier','Kooltherm'],['Perimeter sealing','tri-fin brushes'],['Depth','70-70 mm'],['Thermal transfer Uf','from 1.1 W/m²K'],['Glazing','up to 50mm'],['Sound insulation','up to 41 dB'],['Burglar resistance','up to RC 2']],
    de:[['Wärmedämmbrücke','Kooltherm'],['Perimeterdichtung','Tri-Fin-Bürsten'],['Bautiefe','70-70 mm'],['Wärmedurchgang Uf','ab 1,1 W/m²K'],['Verglasung','bis 50mm'],['Schallschutz','bis 41 dB'],['Einbruchschutz','bis RC 2']],
    fr:[['Rupture pont thermique','Kooltherm'],['Étanchéité périmétrique','brosses tri-fin'],['Profondeur','70-70 mm'],['Transfert thermique Uf','dès 1,1 W/m²K'],['Vitrage','jusqu\'à 50mm'],['Protection phonique','jusqu\'à 41 dB'],['Anti-effraction','jusqu\'à RC 2']],
    es:[['Rotura puente térmico','Kooltherm'],['Estanqueidad perimetral','cepillos tri-fin'],['Profundidad','70-70 mm'],['Transferencia Uf','desde 1,1 W/m²K'],['Acristalamiento','hasta 50mm'],['Aislamiento acústico','hasta 41 dB'],['Antirrobo','hasta RC 2']],
    it:[['Taglio termico','Kooltherm'],['Tenuta perimetrale','spazzole tri-fin'],['Profondità','70-70 mm'],['Trasmittanza Uf','da 1,1 W/m²K'],['Vetro','fino a 50mm'],['Isolamento acustico','fino a 41 dB'],['Antieffrazione','fino a RC 2']],
  },
  s350: {
    ro:[['Bariera termică','28 mm'],['Etanșare perimetrală','perii tri-fin'],['Adâncime','35-35 mm'],['Transfer termic Uf','de la 2.9 W/m²K'],['Vitraj','până la 28mm'],['Protecție fonică','până la 38 dB'],['Anti-efracție','până la RC 2']],
    en:[['Thermal barrier','28 mm'],['Perimeter sealing','tri-fin brushes'],['Depth','35-35 mm'],['Thermal transfer Uf','from 2.9 W/m²K'],['Glazing','up to 28mm'],['Sound insulation','up to 38 dB'],['Burglar resistance','up to RC 2']],
    de:[['Wärmedämmbrücke','28 mm'],['Perimeterdichtung','Tri-Fin-Bürsten'],['Bautiefe','35-35 mm'],['Wärmedurchgang Uf','ab 2,9 W/m²K'],['Verglasung','bis 28mm'],['Schallschutz','bis 38 dB'],['Einbruchschutz','bis RC 2']],
    fr:[['Rupture pont thermique','28 mm'],['Étanchéité périmétrique','brosses tri-fin'],['Profondeur','35-35 mm'],['Transfert thermique Uf','dès 2,9 W/m²K'],['Vitrage','jusqu\'à 28mm'],['Protection phonique','jusqu\'à 38 dB'],['Anti-effraction','jusqu\'à RC 2']],
    es:[['Rotura puente térmico','28 mm'],['Estanqueidad perimetral','cepillos tri-fin'],['Profundidad','35-35 mm'],['Transferencia Uf','desde 2,9 W/m²K'],['Acristalamiento','hasta 28mm'],['Aislamiento acústico','hasta 38 dB'],['Antirrobo','hasta RC 2']],
    it:[['Taglio termico','28 mm'],['Tenuta perimetrale','spazzole tri-fin'],['Profondità','35-35 mm'],['Trasmittanza Uf','da 2,9 W/m²K'],['Vetro','fino a 28mm'],['Isolamento acustico','fino a 38 dB'],['Antieffrazione','fino a RC 2']],
  },
  sf85: {
    ro:[['Bariera termică','40 mm'],['Izolare','Kooltherm si 2 garnituri'],['Adâncime','85 mm'],['Transfer termic Uf','de la 1.0 W/m²K'],['Vitraj','până la 58mm'],['Protecție fonică','până la 38 dB'],['Anti-efracție','PAS24']],
    en:[['Thermal barrier','40 mm'],['Insulation','Kooltherm and 2 gaskets'],['Depth','85 mm'],['Thermal transfer Uf','from 1.0 W/m²K'],['Glazing','up to 58mm'],['Sound insulation','up to 38 dB'],['Burglar resistance','PAS24']],
    de:[['Wärmedämmbrücke','40 mm'],['Dämmung','Kooltherm und 2 Dichtungen'],['Bautiefe','85 mm'],['Wärmedurchgang Uf','ab 1,0 W/m²K'],['Verglasung','bis 58mm'],['Schallschutz','bis 38 dB'],['Einbruchschutz','PAS24']],
    fr:[['Rupture pont thermique','40 mm'],['Isolation','Kooltherm et 2 joints'],['Profondeur','85 mm'],['Transfert thermique Uf','dès 1,0 W/m²K'],['Vitrage','jusqu\'à 58mm'],['Protection phonique','jusqu\'à 38 dB'],['Anti-effraction','PAS24']],
    es:[['Rotura puente térmico','40 mm'],['Aislamiento','Kooltherm y 2 juntas'],['Profundidad','85 mm'],['Transferencia Uf','desde 1,0 W/m²K'],['Acristalamiento','hasta 58mm'],['Aislamiento acústico','hasta 38 dB'],['Antirrobo','PAS24']],
    it:[['Taglio termico','40 mm'],['Isolamento','Kooltherm e 2 guarnizioni'],['Profondità','85 mm'],['Trasmittanza Uf','da 1,0 W/m²K'],['Vetro','fino a 58mm'],['Isolamento acustico','fino a 38 dB'],['Antieffrazione','PAS24']],
  },
  m19800: {
    ro:[['Bariera termică','18 mm'],['Etanșare','2 garnituri'],['Adâncime','50 mm'],['Transfer termic Uf','de la 1.9 W/m²K'],['Vitraj','până la 32mm'],['Protecție fonică','până la 36 dB'],['Anti-efracție','PAS24']],
    en:[['Thermal barrier','18 mm'],['Sealing','2 gaskets'],['Depth','50 mm'],['Thermal transfer Uf','from 1.9 W/m²K'],['Glazing','up to 32mm'],['Sound insulation','up to 36 dB'],['Burglar resistance','PAS24']],
    de:[['Wärmedämmbrücke','18 mm'],['Dichtung','2 Dichtungen'],['Bautiefe','50 mm'],['Wärmedurchgang Uf','ab 1,9 W/m²K'],['Verglasung','bis 32mm'],['Schallschutz','bis 36 dB'],['Einbruchschutz','PAS24']],
    fr:[['Rupture pont thermique','18 mm'],['Étanchéité','2 joints'],['Profondeur','50 mm'],['Transfert thermique Uf','dès 1,9 W/m²K'],['Vitrage','jusqu\'à 32mm'],['Protection phonique','jusqu\'à 36 dB'],['Anti-effraction','PAS24']],
    es:[['Rotura puente térmico','18 mm'],['Estanqueidad','2 juntas'],['Profundidad','50 mm'],['Transferencia Uf','desde 1,9 W/m²K'],['Acristalamiento','hasta 32mm'],['Aislamiento acústico','hasta 36 dB'],['Antirrobo','PAS24']],
    it:[['Taglio termico','18 mm'],['Tenuta','2 guarnizioni'],['Profondità','50 mm'],['Trasmittanza Uf','da 1,9 W/m²K'],['Vetro','fino a 32mm'],['Isolamento acustico','fino a 36 dB'],['Antieffrazione','PAS24']],
  },
};

const DESCS = {
  s77: {
    ro:'Cel mai performant sistem de ferestre și uși din aluminiu din gama Supreme. Barieră termică 40mm, triple garnituri și geam până la 72mm pentru performanțe nZEB.',
    en:'The highest-performance aluminium window and door system in the Supreme range. 40mm thermal barrier, triple gaskets and glazing up to 72mm for nZEB performance.',
    de:'Das leistungsstärkste Aluminium-Fenster- und Türsystem der Supreme-Reihe. 40mm Wärmedämmbrücke, dreifache Dichtung und Verglasung bis 72mm für nZEB.',
    fr:'Le système de fenêtres et portes aluminium le plus performant de la gamme Supreme. Rupture thermique 40mm, triple joint et vitrage jusqu\'à 72mm pour les normes nZEB.',
    es:'El sistema de ventanas y puertas de aluminio más eficiente de la gama Supreme. Rotura térmica 40mm, triple junta y acristalamiento hasta 72mm para estándares nZEB.',
    it:'Il sistema di finestre e porte in alluminio più performante della gamma Supreme. Taglio termico 40mm, tripla guarnizione e vetro fino a 72mm per standard nZEB.',
  },
  s67: {
    ro:'Sistem versatil și economic din gama Smartia. Izolare fonică superioară până la 45 dB — ideal pentru medii urbane. Barieră termică 30mm, geam până la 58mm.',
    en:'Versatile and economical system from the Smartia range. Superior sound insulation up to 45 dB — ideal for urban environments. 30mm thermal barrier, glazing up to 58mm.',
    de:'Vielseitiges und wirtschaftliches System aus der Smartia-Reihe. Überlegender Schallschutz bis 45 dB — ideal für städtische Umgebungen. 30mm Wärmedämmbrücke.',
    fr:'Système polyvalent et économique de la gamme Smartia. Isolation phonique jusqu\'à 45 dB — idéal pour les environnements urbains. Rupture thermique 30mm.',
    es:'Sistema versátil y económico de la gama Smartia. Aislamiento acústico hasta 45 dB — ideal para entornos urbanos. Rotura térmica 30mm, acristalamiento hasta 58mm.',
    it:'Sistema versatile ed economico della gamma Smartia. Isolamento acustico fino a 45 dB — ideale per ambienti urbani. Taglio termico 30mm, vetro fino a 58mm.',
  },
  s700: {
    ro:'Sistem de glisare liftantă cu foi mari de sticlă și barieră termică Kooltherm. Etanșare perimetrală tri-fin și transfer termic de la 1.1 W/m²K. Acces facil la terase și grădini.',
    en:'Lift-and-slide system with large glass panels and Kooltherm thermal barrier. Tri-fin perimeter sealing and thermal transfer from 1.1 W/m²K. Easy access to terraces and gardens.',
    de:'Hebeschiebe-System mit großen Glasscheiben und Kooltherm-Wärmedämmbrücke. Tri-Fin-Perimeterdichtung und Wärmedurchgang ab 1,1 W/m²K.',
    fr:'Système coulissant levant à grands vitrages et rupture thermique Kooltherm. Étanchéité périmétrique tri-fin et transfert thermique dès 1,1 W/m²K.',
    es:'Sistema corredera elevable con grandes hojas de vidrio y barrera térmica Kooltherm. Sellado perimetral tri-fin y transferencia térmica desde 1,1 W/m²K.',
    it:'Sistema scorrevole alzante con grandi lastre di vetro e taglio termico Kooltherm. Tenuta perimetrale tri-fin e trasmittanza da 1,1 W/m²K.',
  },
  s350: {
    ro:'Sistem de glisare liftantă din gama Smartia. Etanșare perimetrală tri-fin, barieră termică 28mm. Soluție economică pentru acces la terase și spații largi.',
    en:'Lift-and-slide system from the Smartia range. Tri-fin perimeter sealing, 28mm thermal barrier. Economical solution for terrace access and large openings.',
    de:'Hebeschiebe-System aus der Smartia-Reihe. Tri-Fin-Perimeterdichtung, 28mm Wärmedämmbrücke. Wirtschaftliche Lösung für Terrassenzugang und große Öffnungen.',
    fr:'Système coulissant levant de la gamme Smartia. Étanchéité périmétrique tri-fin, rupture thermique 28mm. Solution économique pour l\'accès aux terrasses.',
    es:'Sistema corredera elevable de la gama Smartia. Sellado perimetral tri-fin, barrera térmica 28mm. Solución económica para acceso a terrazas y grandes aperturas.',
    it:'Sistema scorrevole alzante della gamma Smartia. Tenuta perimetrale tri-fin, taglio termico 28mm. Soluzione economica per l\'accesso a terrazze e grandi aperture.',
  },
  sf85: {
    ro:'Sistem armonic premium pentru deschideri mari. Barieră termică 40mm cu izolare Kooltherm și 2 garnituri, adâncime 85mm. Certificare anti-efracție PAS24.',
    en:'Premium folding system for large openings. 40mm thermal barrier with Kooltherm insulation and 2 gaskets, 85mm depth. PAS24 burglar-resistance certification.',
    de:'Premium-Faltsystem für große Öffnungen. 40mm Wärmedämmbrücke mit Kooltherm-Dämmung und 2 Dichtungen, 85mm Bautiefe. PAS24-Einbruchschutz.',
    fr:'Système pliant premium pour grandes baies. Rupture thermique 40mm avec isolation Kooltherm et 2 joints, profondeur 85mm. Certification anti-effraction PAS24.',
    es:'Sistema plegable premium para grandes aperturas. Rotura térmica 40mm con aislamiento Kooltherm y 2 juntas, profundidad 85mm. Certificación antirrobo PAS24.',
    it:'Sistema pieghevole premium per grandi aperture. Taglio termico 40mm con isolamento Kooltherm e 2 guarnizioni, profondità 85mm. Certificazione antieffrazione PAS24.',
  },
  m19800: {
    ro:'Sistem armonic din gama Smartia. Barieră termică 18mm, 2 garnituri de etanșare, adâncime 50mm. Certificare anti-efracție PAS24. Ideal pentru deschideri mari rezidențiale.',
    en:'Folding system from the Smartia range. 18mm thermal barrier, 2 sealing gaskets, 50mm depth. PAS24 burglar-resistance certification. Ideal for large residential openings.',
    de:'Faltsystem aus der Smartia-Reihe. 18mm Wärmedämmbrücke, 2 Dichtungen, 50mm Bautiefe. PAS24-Einbruchschutz. Ideal für große Wohnöffnungen.',
    fr:'Système pliant de la gamme Smartia. Rupture thermique 18mm, 2 joints, profondeur 50mm. Certification anti-effraction PAS24. Idéal pour les grandes baies résidentielles.',
    es:'Sistema plegable de la gama Smartia. Rotura térmica 18mm, 2 juntas, profundidad 50mm. Certificación antirrobo PAS24. Ideal para grandes aperturas residenciales.',
    it:'Sistema pieghevole della gamma Smartia. Taglio termico 18mm, 2 guarnizioni, profondità 50mm. Certificazione PAS24. Ideale per grandi aperture residenziali.',
  },
};

const PROD_SLUG_MAP = {
  's77':    'alumil-s77-supreme',
  's67':    'alumil-s67-smartia',
  's700':   'alumil-s700-supreme',
  's350':   'alumil-s350-smartia',
  'sf85':   'alumil-sf85-supreme',
  'm19800': 'alumil-m19800-smartia',
};

const ALU_PRODUCTS = [
  { slug:'s77',    img:'/products/alumil-s77-supreme.avif',   name:'Alumil S 77 SUPREME',   gama:'SUPREME', cat:'ferestre' },
  { slug:'s67',    img:'/products/alumil-s67-smartia.avif',   name:'Alumil S 67 SMARTIA',   gama:'SMARTIA', cat:'ferestre' },
  { slug:'s700',   img:'/products/alumil-s700-supreme.avif',  name:'Alumil S 700 SUPREME',  gama:'SUPREME', cat:'liftante' },
  { slug:'s350',   img:'/products/alumil-s350-smartia.avif',  name:'Alumil S 350 SMARTIA',  gama:'SMARTIA', cat:'liftante' },
  { slug:'sf85',   img:'/products/alumil-sf85-supreme.avif',  name:'Alumil SF 85 SUPREME',  gama:'SUPREME', cat:'armonice' },
  { slug:'m19800', img:'/products/alumil-m19800-smartia.avif',name:'Alumil M 19800 SMARTIA',gama:'SMARTIA', cat:'armonice' },
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aluminiu' });
  const slug = SLUGS_TAMPLARIE_ALUMINIU[locale] || SLUGS_TAMPLARIE_ALUMINIU.ro;
  return {
    title: locale === 'ro' ? 'Tâmplărie Aluminiu Alumil București — Ferestre, Uși, Sisteme Supreme și Smartia | Neofort BIZ'
           : locale === 'en' ? 'Aluminium Windows Alumil Bucharest — Frames, Doors, Supreme and Smartia Systems | Neofort BIZ'
           : locale === 'de' ? 'Aluminiumfenster Alumil Bukarest — Fenster, Türen, Supreme und Smartia | Neofort BIZ'
           : locale === 'fr' ? 'Menuiserie Aluminium Alumil Bucarest — Fenêtres, Portes, Supreme et Smartia | Neofort BIZ'
           : locale === 'es' ? 'Carpintería Aluminio Alumil Bucarest — Ventanas, Puertas, Supreme y Smartia | Neofort BIZ'
           : 'Infissi Alluminio Alumil Bucarest — Finestre, Porte, Supreme e Smartia | Neofort BIZ',
    description: locale === 'ro' ? 'Tâmplărie aluminiu Alumil cu barieră termică — ferestre, uși, glisante și pereți cortină. Sisteme Supreme SF85, Smartia S67. Montaj certificat nZEB în București și toată Europa. Solicită ofertă gratuită.'
               : locale === 'en' ? 'Alumil thermal break aluminium windows — frames, doors, sliding and curtain walls. Supreme SF85, Smartia S67 systems. nZEB certified installation in Bucharest and across Europe. Request free quote.'
               : locale === 'de' ? 'Alumil Aluminiumfenster mit Wärmedämmbrücke — Fenster, Türen, Schiebe- und Vorhangfassaden. Supreme SF85, Smartia S67. nZEB-Montage in Bukarest und ganz Europa.'
               : locale === 'fr' ? 'Menuiserie aluminium Alumil à rupture de pont thermique — fenêtres, portes, coulissants et murs-rideaux. Supreme SF85, Smartia S67. Pose nZEB à Bucarest et en Europe.'
               : locale === 'es' ? 'Carpintería aluminio Alumil con rotura de puente térmico — ventanas, puertas, correderas y muros cortina. Supreme SF85, Smartia S67. Instalación nZEB en Bucarest y toda Europa.'
               : 'Infissi alluminio Alumil con taglio termico — finestre, porte, scorrevoli e facciate continue. Supreme SF85, Smartia S67. Posa nZEB a Bucarest e in tutta Europa.',
    keywords: locale === 'ro' ? 'tamplarie aluminiu, tamplarie aluminiu bucuresti, tamplarie aluminiu pret, tamplarie alumil, termopane aluminiu, ferestre aluminiu bucuresti, tamplarie aluminiu bariera termica, alumil supreme sf85, alumil smartia s67, ferestre aluminiu pret 2026' : locale === 'en' ? 'aluminium windows, aluminium windows Bucharest, Alumil windows, aluminium windows price, thermal break aluminium windows, Alumil Supreme SF85, Alumil Smartia S67' : locale === 'de' ? 'Aluminiumfenster Bukarest, Alumil Fenster, Aluminiumfenster Preis, Wärmedämmbrücke Aluminium, Alumil Supreme, Alumil Smartia' : locale === 'fr' ? 'menuiserie aluminium Bucarest, prix menuiserie aluminium, Alumil Supreme, Alumil Smartia, fenêtres aluminium rupture pont thermique' : locale === 'es' ? 'carpintería aluminio Bucarest, precio ventanas aluminio, Alumil Supreme, Alumil Smartia, ventanas aluminio rotura puente térmico' : 'infissi alluminio Bucarest, prezzo infissi alluminio, Alumil Supreme, Alumil Smartia, finestre alluminio taglio termico',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: {
        'ro': `${BASE}/ro/${SLUGS_TAMPLARIE_ALUMINIU.ro}`,
        'en': `${BASE}/en/${SLUGS_TAMPLARIE_ALUMINIU.en}`,
        'de': `${BASE}/de/${SLUGS_TAMPLARIE_ALUMINIU.de}`,
        'fr': `${BASE}/fr/${SLUGS_TAMPLARIE_ALUMINIU.fr}`,
        'es': `${BASE}/es/${SLUGS_TAMPLARIE_ALUMINIU.es}`,
        'it': `${BASE}/it/${SLUGS_TAMPLARIE_ALUMINIU.it}`,
        'x-default': `${BASE}/ro/${SLUGS_TAMPLARIE_ALUMINIU.ro}`,
      },
    },
    openGraph: {
      type: 'website', url: `${BASE}/${locale}/${slug}`, siteName: 'Neofort BIZ',
      title: t('title'), description: t('description'),
      images: [{ url:`${BASE}/og/Tamplarie_Aluminiu_Alumil.avif`, width:1200, height:630, alt: locale==='ro' ? 'Tâmplărie aluminiu Alumil Supreme și Smartia — Neofort BIZ București' : locale==='en' ? 'Alumil Supreme and Smartia aluminium windows — Neofort BIZ Bucharest' : locale==='de' ? 'Alumil Supreme und Smartia Aluminiumfenster — Neofort BIZ Bukarest' : locale==='fr' ? 'Menuiseries aluminium Alumil Supreme et Smartia — Neofort BIZ Bucarest' : locale==='es' ? 'Carpintería aluminio Alumil Supreme y Smartia — Neofort BIZ Bucarest' : 'Infissi alluminio Alumil Supreme e Smartia — Neofort BIZ Bucarest', type:'image/avif' }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', creator:'@NeofortBIZ', title: t('title'), description: t('description'), images:[`${BASE}/og/Tamplarie_Aluminiu_Alumil.avif`] },
  };
}

export default async function TamplaieAluminiuPage({ params }) {
  const { locale } = await params;
  const ui = PAGE_UI[locale] || PAGE_UI.ro;


  const schemaALU = {
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    'name': PAGE_UI[locale]?.h1 || PAGE_UI.ro.h1,
    'url': `${BASE}/${locale}/${SLUGS_TAMPLARIE_ALUMINIU[locale] || SLUGS_TAMPLARIE_ALUMINIU.ro}`,
    'provider': { '@type': 'Organization', 'name': 'Neofort BIZ', 'url': BASE },
    'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Neofort BIZ', 'item': `${BASE}/${locale}` },
      { '@type': 'ListItem', 'position': 2, 'name': PAGE_UI[locale]?.h1 || 'Sisteme Aluminiu Alumil', 'item': `${BASE}/${locale}/${SLUGS_TAMPLARIE_ALUMINIU[locale] || SLUGS_TAMPLARIE_ALUMINIU.ro}` },
    ]},
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': ({'ro': [['Care este diferența dintre Alumil Supreme și Smartia?', 'Supreme este gama profesională pentru proiecte arhitecturale exigente — barieră termică avansată, design minimalist, certificare Passive House. Smartia este gama comercială cu un raport calitate-preț mai bun, potrivită pentru proiecte rezidențiale și comerciale standard.'], ['Cât costă tâmplăria din aluminiu în 2026?', 'Prețul tâmplăriei aluminiu cu barieră termică pornește de la 250–350 EUR/mp pentru ferestre standard Alumil Smartia și ajunge la 450–700 EUR/mp pentru sisteme premium Supreme SF85 sau liftant-glisante. Prețul include profilul, geamul termopan și montajul profesional.'], ['Care e diferența dintre tâmplăria aluminiu și termopanele clasice?', 'Tâmplăria aluminiu cu barieră termică (poliamidă) are aceleași performanțe termice ca PVC-ul premium, dar cu secțiuni mult mai subțiri (lățime profil 60–85 mm față de 70–92 mm la PVC), rigiditate structurală superioară pentru suprafețe mari și durabilitate practic nelimitată — aluminiul nu se deformează, nu îngălbenește și nu necesită vopsire.'], ['Sistemele glisante Alumil S700/S350 pot fi montate pe terase?', 'Da, sistemele liftant-glisante Alumil S700 Supreme și S350 Smartia sunt proiectate special pentru deschideri mari de terasă și living. Suportă canaturi de până la 300 kg, profil orizontal maxim 6 m, cu etanșare conformă nZEB.'], ['Aluminiu sau PVC pentru ferestre mari?', 'Pentru suprafețe vitrate mari (>2m²), ferestre panoramice sau pereți cortină, aluminiu este recomandat — rigiditate structurală superioară, toleranță termică mai bună la dilatații mari, și aspect arhitectural mai subțire. PVC este preferat pentru ferestre standard și renovări.']], 'en': [['What is the difference between Alumil Supreme and Smartia?', 'Supreme is the professional range for demanding architectural projects — advanced thermal break, minimalist design, Passive House certification. Smartia is the commercial range with better value, suitable for standard residential and commercial projects.'], ['Can Alumil S700/S350 sliding systems be installed on terraces?', 'Yes, Alumil S700 Supreme and S350 Smartia lift-and-slide systems are specifically designed for large terrace and living room openings. They support leaves up to 300 kg, maximum 6m horizontal profile, with nZEB-compliant sealing.'], ['Aluminium or PVC for large windows?', 'For large glazed areas (>2m²), panoramic windows or curtain walls, aluminium is recommended — superior structural rigidity, better thermal tolerance for large expansions, and architecturally thinner appearance. PVC is preferred for standard windows and renovations.']]})[locale]?.map(([q,a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    })) || {'ro': [['Care este diferența dintre Alumil Supreme și Smartia?', 'Supreme este gama profesională pentru proiecte arhitecturale exigente — barieră termică avansată, design minimalist, certificare Passive House. Smartia este gama comercială cu un raport calitate-preț mai bun, potrivită pentru proiecte rezidențiale și comerciale standard.'], ['Cât costă tâmplăria din aluminiu în 2026?', 'Prețul tâmplăriei aluminiu cu barieră termică pornește de la 250–350 EUR/mp pentru ferestre standard Alumil Smartia și ajunge la 450–700 EUR/mp pentru sisteme premium Supreme SF85 sau liftant-glisante. Prețul include profilul, geamul termopan și montajul profesional.'], ['Care e diferența dintre tâmplăria aluminiu și termopanele clasice?', 'Tâmplăria aluminiu cu barieră termică (poliamidă) are aceleași performanțe termice ca PVC-ul premium, dar cu secțiuni mult mai subțiri (lățime profil 60–85 mm față de 70–92 mm la PVC), rigiditate structurală superioară pentru suprafețe mari și durabilitate practic nelimitată — aluminiul nu se deformează, nu îngălbenește și nu necesită vopsire.'], ['Sistemele glisante Alumil S700/S350 pot fi montate pe terase?', 'Da, sistemele liftant-glisante Alumil S700 Supreme și S350 Smartia sunt proiectate special pentru deschideri mari de terasă și living. Suportă canaturi de până la 300 kg, profil orizontal maxim 6 m, cu etanșare conformă nZEB.'], ['Aluminiu sau PVC pentru ferestre mari?', 'Pentru suprafețe vitrate mari (>2m²), ferestre panoramice sau pereți cortină, aluminiu este recomandat — rigiditate structurală superioară, toleranță termică mai bună la dilatații mari, și aspect arhitectural mai subțire. PVC este preferat pentru ferestre standard și renovări.']], 'en': [['What is the difference between Alumil Supreme and Smartia?', 'Supreme is the professional range for demanding architectural projects — advanced thermal break, minimalist design, Passive House certification. Smartia is the commercial range with better value, suitable for standard residential and commercial projects.'], ['Can Alumil S700/S350 sliding systems be installed on terraces?', 'Yes, Alumil S700 Supreme and S350 Smartia lift-and-slide systems are specifically designed for large terrace and living room openings. They support leaves up to 300 kg, maximum 6m horizontal profile, with nZEB-compliant sealing.'], ['Aluminium or PVC for large windows?', 'For large glazed areas (>2m²), panoramic windows or curtain walls, aluminium is recommended — superior structural rigidity, better thermal tolerance for large expansions, and architecturally thinner appearance. PVC is preferred for standard windows and renovations.']]}['ro'].map(([q,a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    }))
  };

  const faqItems = ({'ro': [
    ['Care este diferența dintre Alumil Supreme și Smartia?', 'Supreme este gama profesională pentru proiecte arhitecturale exigente — barieră termică avansată, design minimalist, certificare Passive House. Smartia este gama comercială cu un raport calitate-preț mai bun, potrivită pentru proiecte rezidențiale și comerciale standard.'],
    ['Cât costă tâmplăria din aluminiu în 2026?', 'Prețul tâmplăriei aluminiu cu barieră termică pornește de la 250–350 EUR/mp pentru ferestre standard Alumil Smartia și ajunge la 450–700 EUR/mp pentru sisteme premium Supreme SF85 sau liftant-glisante. Prețul include profilul, geamul termopan și montajul profesional.'],
    ['Care e diferența dintre tâmplăria aluminiu și termopanele clasice?', 'Tâmplăria aluminiu cu barieră termică are aceleași performanțe termice ca PVC-ul premium, dar cu secțiuni mult mai subțiri, rigiditate structurală superioară pentru suprafețe mari și durabilitate practic nelimitată — aluminiul nu se deformează, nu îngălbenește și nu necesită vopsire.'],
    ['Sistemele glisante Alumil S700/S350 pot fi montate pe terase?', 'Da, sistemele liftant-glisante Alumil S700 Supreme și S350 Smartia sunt proiectate special pentru deschideri mari de terasă și living. Suportă canaturi de până la 300 kg, profil orizontal maxim 6 m, cu etanșare conformă nZEB.'],
    ['Aluminiu sau PVC pentru ferestre mari?', 'Pentru suprafețe vitrate mari (>2m²), ferestre panoramice sau pereți cortină, aluminiu este recomandat — rigiditate structurală superioară, toleranță termică mai bună la dilatații mari, și aspect arhitectural mai subțire. PVC este preferat pentru ferestre standard și renovări.'],
  ], 'en': [
    ['What is the difference between Alumil Supreme and Smartia?', 'Supreme is the professional range for demanding architectural projects — advanced thermal break, minimalist design, Passive House certification. Smartia is the commercial range with better value, suitable for standard residential and commercial projects.'],
    ['How much do aluminium windows cost in 2026?', 'Aluminium window prices start from 250–350 EUR/m² for standard Alumil Smartia frames and reach 450–700 EUR/m² for premium Supreme SF85 or lift-and-slide systems. Price includes profile, thermal glass and professional installation.'],
    ['What is the difference between aluminium windows and classic double glazing?', 'Thermal break aluminium has the same thermal performance as premium PVC, but with much thinner sections, superior structural rigidity for large areas and virtually unlimited durability — aluminium does not deform, yellow or require painting.'],
    ['Can Alumil S700/S350 sliding systems be installed on terraces?', 'Yes, Alumil S700 Supreme and S350 Smartia lift-and-slide systems are specifically designed for large terrace and living room openings. They support leaves up to 300 kg, maximum 6m horizontal profile, nZEB-compliant sealing.'],
    ['Aluminium or PVC for large windows?', 'For large glazed areas (>2m²), panoramic windows or curtain walls, aluminium is recommended — superior structural rigidity, better thermal tolerance and architecturally thinner appearance. PVC is preferred for standard windows and renovations.'],
  ]})[locale] || [['Care este diferența dintre Alumil Supreme și Smartia?', 'Supreme este gama profesională pentru proiecte arhitecturale exigente. Smartia este gama comercială cu un raport calitate-preț mai bun.']];

  const faqLabel = {'ro':'Întrebări frecvente','en':'Frequently asked questions','de':'Häufig gestellte Fragen','fr':'Questions fréquentes','es':'Preguntas frecuentes','it':'Domande frequenti'}[locale] || 'Întrebări frecvente';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaALU) }}/>
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
            {ALU_PRODUCTS.map(p => {
              const specs    = SPECS[p.slug][locale]   || SPECS[p.slug].ro;
              const desc     = DESCS[p.slug][locale]   || DESCS[p.slug].ro;
              const catLabel = p.cat==='ferestre' ? ui.cat_ferestre
                             : p.cat==='liftante' ? ui.cat_liftante
                             : ui.cat_armonice;
              const accentColor = p.gama==='SUPREME' ? '#2d5a8e' : '#4a7c59';
              const accentBg    = p.gama==='SUPREME' ? 'rgba(45,90,142,0.07)' : 'rgba(74,124,89,0.07)';
              const accentBorder= p.gama==='SUPREME' ? 'rgba(45,90,142,0.18)' : 'rgba(74,124,89,0.18)';
              return (
                <div key={p.slug} style={{display:'flex',flexDirection:'column',border:'1px solid #e8e8e4',background:'#fff',overflow:'hidden'}}>

                  {/* Imagine */}
                  <div style={{position:'relative',background:'#fff',height:'200px',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',padding:'16px'}}>
                    <img
                      src={p.img} alt={p.name}
                      style={{maxHeight:'168px',maxWidth:'100%',width:'auto',height:'auto',objectFit:'contain',display:'block'}}
                      loading="lazy"
                    />
                    <span style={{position:'absolute',top:'10px',right:'10px',fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.55rem',letterSpacing:'0.18em',textTransform:'uppercase',fontWeight:600,color:accentColor,background:accentBg,border:`1px solid ${accentBorder}`,padding:'3px 8px'}}>
                      {p.gama}
                    </span>
                  </div>

                  {/* Body */}
                  <div style={{display:'flex',flexDirection:'column',flex:1,padding:'18px 20px 20px'}}>

                    {/* Categorie */}
                    <p style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.57rem',letterSpacing:'0.18em',textTransform:'uppercase',fontWeight:600,color:accentColor,marginBottom:'5px'}}>
                      {catLabel}
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
                    <Link href={`/produse-aluminiu/${PROD_SLUG_MAP[p.slug] || p.slug}`} style={{display:'block',textAlign:'center',fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.63rem',letterSpacing:'0.18em',textTransform:'uppercase',fontWeight:600,color:accentColor,border:`1px solid ${accentColor}`,padding:'9px 16px',textDecoration:'none',transition:'background 0.15s,color 0.15s'}}>
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
            <Link href="/tamplarie-pvc" className="flex items-center justify-between border border-border bg-white px-5 py-4 hover:border-primary transition-colors duration-200 group">
              <div>
                <span className="font-condensed text-[0.58rem] tracking-[0.2em] uppercase font-semibold text-pvc block mb-1">Neofort BIZ</span>
                <span className="font-condensed text-[0.9rem] font-semibold text-primary group-hover:text-pvc transition-colors">{ui.cross_pvc}</span>
              </div>
              <span className="text-muted group-hover:text-pvc transition-colors">→</span>
            </Link>
            <Link href="/accesorii" className="flex items-center justify-between border border-border bg-white px-5 py-4 hover:border-primary transition-colors duration-200 group">
              <div>
                <span className="font-condensed text-[0.58rem] tracking-[0.2em] uppercase font-semibold text-accesorii block mb-1">Neofort BIZ</span>
                <span className="font-condensed text-[0.9rem] font-semibold text-primary group-hover:text-accesorii transition-colors">{ui.cross_acc}</span>
              </div>
              <span className="text-muted group-hover:text-accesorii transition-colors">→</span>
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
          <h2 style={{fontSize:'1.25rem',fontWeight:600,color:'#1a1a1a',marginBottom:'24px',fontFamily:"var(--font-condensed,'Arial Narrow',sans-serif)"}}>{faqLabel}</h2>
          <div>
            {faqItems.map(([q, a], i) => (
              <div key={i} style={{borderBottom:'1px solid #e8e8e4'}}>
                <button
                  style={{width:'100%',textAlign:'left',background:'none',border:'none',padding:'18px 0',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'16px'}}
                  onClick={e => {
                    const ans = e.currentTarget.nextElementSibling;
                    const icon = e.currentTarget.querySelector('[data-icon]');
                    const isOpen = ans.style.maxHeight && ans.style.maxHeight !== '0px';
                    ans.style.maxHeight = isOpen ? '0px' : '300px';
                    ans.style.overflow = 'hidden';
                    icon.textContent = isOpen ? '+' : '×';
                  }}
                >
                  <span style={{fontSize:'.92rem',fontWeight:600,color:'#1a1a1a',lineHeight:1.4}}>{q}</span>
                  <span data-icon style={{flexShrink:0,width:'22px',height:'22px',borderRadius:'50%',background:'#f0f0ec',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.8rem',color:'#666',transition:'transform .2s'}}>+</span>
                </button>
                <div style={{overflow:'hidden',maxHeight:'0px',transition:'max-height .3s ease'}}>
                  <p style={{padding:'0 0 18px',fontSize:'.88rem',color:'#767676',lineHeight:1.7}}>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
