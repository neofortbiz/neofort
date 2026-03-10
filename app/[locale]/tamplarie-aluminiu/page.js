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
  ro: { label:'Tâmplărie Aluminiu · Alumil', h1:'Profile Aluminiu Alumil', sub:'Arhitectură modernă. 6 sisteme — de la ferestre și uși premium până la pereți cortină pentru fațade mari.', exp_label:'Expertiza Neofort BIZ în Aluminiu', exp1:'Furnizăm <strong>tâmplărie aluminiu Alumil</strong> din gamele premium, executată pe linii de producție automatizate. Fie că optați pentru sistemele <strong>Alumil Supreme</strong> sau pentru versatilitatea Smartia, asigurăm consultanță tehnică și montaj profesional.', exp2:'Profilele de aluminiu Alumil cu barieră termică sunt certificate pentru standardele <strong>nZEB</strong>. Suprafețe vitrate mari, durabilitate extremă și design contemporan pentru orice tip de proiect — rezidențial, comercial sau industrial.', btn_detail:'Detalii', cross_pvc:'Tâmplărie PVC Salamander', cross_acc:'Accesorii & Izolare Perimetrală', cat_ferestre:'FERESTRE și UȘI - ALUMINIU', cat_liftante:'LIFTANT GLISANTE - ALUMINIU', cat_armonice:'FERESTRE și UȘI ARMONICE' },
  en: { label:'Aluminium Windows · Alumil', h1:'Alumil Aluminium Profiles', sub:'Modern architecture. 6 systems — from premium windows and doors to curtain walls for large facades.', exp_label:'Neofort BIZ Aluminium Expertise', exp1:'We supply <strong>Alumil aluminium windows</strong> from premium ranges, manufactured on automated production lines. Whether you choose <strong>Alumil Supreme</strong> systems or the versatile Smartia range, we provide technical advice and professional installation.', exp2:'Alumil aluminium profiles with thermal barrier are <strong>nZEB</strong> certified. Large glazed surfaces, extreme durability and contemporary design for any project type — residential, commercial or industrial.', btn_detail:'Details', cross_pvc:'Salamander PVC Windows', cross_acc:'Accessories & Perimeter Insulation', cat_ferestre:'WINDOWS AND DOORS - ALUMINIUM', cat_liftante:'LIFT AND SLIDE - ALUMINIUM', cat_armonice:'FOLDING WINDOWS AND DOORS' },
  de: { label:'Aluminiumfenster · Alumil', h1:'Alumil Aluminium-Profile', sub:'Moderne Architektur. 6 Systeme — von Premium-Fenstern und -Türen bis hin zu Vorhangfassaden für große Fassaden.', exp_label:'Neofort BIZ Aluminium-Expertise', exp1:'Wir liefern <strong>Alumil Aluminiumfenster</strong> aus Premium-Sortimenten, gefertigt auf automatisierten Produktionslinien. Ob <strong>Alumil Supreme</strong>-Systeme oder die vielseitige Smartia-Reihe — wir bieten Fachberatung und professionellen Einbau.', exp2:'Alumil-Aluminiumprofile mit Wärmedämmbrücke sind <strong>nZEB</strong>-zertifiziert. Große Glasflächen, extreme Langlebigkeit und zeitgemäßes Design für jede Projektart.', btn_detail:'Details', cross_pvc:'Salamander PVC-Fenster', cross_acc:'Zubehör & Perimeterdämmung', cat_ferestre:'FENSTER UND TÜREN - ALUMINIUM', cat_liftante:'HEBESCHIEBETÜREN - ALUMINIUM', cat_armonice:'FALT-FENSTER UND -TÜREN' },
  fr: { label:'Menuiserie Aluminium · Alumil', h1:'Profils Aluminium Alumil', sub:'Architecture moderne. 6 systèmes — des fenêtres et portes premium aux murs-rideaux pour grandes façades.', exp_label:'Expertise Neofort BIZ en Aluminium', exp1:'Nous fournissons des <strong>menuiseries aluminium Alumil</strong> des gammes premium, fabriquées sur lignes de production automatisées. Systèmes <strong>Alumil Supreme</strong> ou gamme Smartia — conseil technique et pose professionnelle assurés.', exp2:'Les profils aluminium Alumil à rupture de pont thermique sont certifiés <strong>nZEB</strong>. Grandes surfaces vitrées, durabilité extrême et design contemporain pour tout type de projet.', btn_detail:'Détails', cross_pvc:'Menuiserie PVC Salamander', cross_acc:'Accessoires & Isolation', cat_ferestre:'FENÊTRES ET PORTES - ALUMINIUM', cat_liftante:'COULISSANTS LEVANTS - ALUMINIUM', cat_armonice:'FENÊTRES ET PORTES PLIANTES' },
  es: { label:'Carpintería Aluminio · Alumil', h1:'Perfiles Aluminio Alumil', sub:'Arquitectura moderna. 6 sistemas — desde ventanas y puertas premium hasta muros cortina para grandes fachadas.', exp_label:'Experiencia Neofort BIZ en Aluminio', exp1:'Suministramos <strong>carpintería aluminio Alumil</strong> de gamas premium, fabricada en líneas de producción automatizadas. Sistemas <strong>Alumil Supreme</strong> o gama Smartia — asesoría técnica e instalación profesional garantizadas.', exp2:'Los perfiles de aluminio Alumil con rotura de puente térmico están certificados <strong>nZEB</strong>. Grandes superficies acristaladas, durabilidad extrema y diseño contemporáneo para todo tipo de proyecto.', btn_detail:'Detalles', cross_pvc:'Ventanas PVC Salamander', cross_acc:'Accesorios & Aislamiento Perimetral', cat_ferestre:'VENTANAS Y PUERTAS - ALUMINIO', cat_liftante:'CORREDERA ELEVABLE - ALUMINIO', cat_armonice:'VENTANAS Y PUERTAS PLEGABLES' },
  it: { label:'Infissi Alluminio · Alumil', h1:'Profili Alluminio Alumil', sub:'Architettura moderna. 6 sistemi — da finestre e porte premium a facciate continue per grandi edifici.', exp_label:'Competenza Neofort BIZ in Alluminio', exp1:'Forniamo <strong>infissi alluminio Alumil</strong> delle gamme premium, prodotti su linee di produzione automatizzate. Sistemi <strong>Alumil Supreme</strong> o gamma Smartia — consulenza tecnica e posa professionale garantite.', exp2:'I profili in alluminio Alumil con taglio termico sono certificati <strong>nZEB</strong>. Grandi superfici vetrate, estrema durabilità e design contemporaneo per ogni tipo di progetto.', btn_detail:'Dettagli', cross_pvc:'Finestre PVC Salamander', cross_acc:'Accessori & Isolamento Perimetrale', cat_ferestre:'FINESTRE E PORTE - ALLUMINIO', cat_liftante:'SCORREVOLI ALZANTI - ALLUMINIO', cat_armonice:'FINESTRE E PORTE PIEGHEVOLI' },
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
    title: t('title'),
    description: t('description'),
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
      images: [{ url: `${BASE}/og-neofort.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function TamplaieAluminiuPage({ params }) {
  const { locale } = await params;
  const ui = PAGE_UI[locale] || PAGE_UI.ro;

  return (
    <>
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
                    <Link href="/contact" style={{display:'block',textAlign:'center',fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.63rem',letterSpacing:'0.18em',textTransform:'uppercase',fontWeight:600,color:accentColor,border:`1px solid ${accentColor}`,padding:'9px 16px',textDecoration:'none',transition:'background 0.15s,color 0.15s'}}>
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
    </>
  );
}
