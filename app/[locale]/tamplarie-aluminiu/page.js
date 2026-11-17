import { Link } from '../../../i18n/navigation';
import FaqAccordion from '../../../components/FaqAccordion';
import { getTranslations } from 'next-intl/server';

import { BASE } from '../../../lib/constants.js';
import { getGoogleRating } from '../../../lib/googleRating.js';
import { hubFaq, HUB_FAQ_LABEL } from '../../../data/hubFaq.js';
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
  ro: { label:'Tâmplărie Aluminiu · Alumil', h1:'Tâmplărie Aluminiu Alumil — Ferestre, Uși și Pereți Cortină București', sub:'Tâmplărie aluminiu cu barieră termică Alumil Supreme și Smartia. Prețuri competitive, montaj pentru clădiri nZEB, livrare în toată Europa.', exp_label:'Expertiza Neofort BIZ în Aluminiu', exp1:'Furnizăm <strong>tâmplărie aluminiu Alumil</strong> din gamele premium, executată pe linii de producție automatizate. Fie că optați pentru sistemele <strong>Alumil Supreme</strong> sau pentru versatilitatea Smartia, asigurăm consultanță tehnică și montaj profesional.', exp2:'Profilele de aluminiu Alumil cu barieră termică sunt potrivite pentru clădirile <strong>nZEB</strong>. Suprafețe vitrate mari, durabilitate extremă și design contemporan pentru orice tip de proiect — rezidențial, comercial sau industrial.', btn_detail:'Detalii', cross_pvc:'Tâmplărie PVC Salamander', cross_acc:'Accesorii & Izolare Perimetrală',cross_nzeb:'Sisteme Izolare nZEB',cross_blog:'Blog Tehnic Tâmplărie', cat_ferestre:'FERESTRE și UȘI - ALUMINIU', cat_liftante:'GLISANTE - ALUMINIU', cat_armonice:'FERESTRE și UȘI ARMONICE' },
  en: { label:'Aluminium Windows · Alumil', h1:'Alumil Aluminium Windows — Frames, Doors and Curtain Walls Bucharest', sub:'Aluminium windows with thermal break — Alumil Supreme and Smartia. Competitive prices, installation for nZEB buildings, delivery throughout Europe.', exp_label:'Neofort BIZ Aluminium Expertise', exp1:'We supply <strong>Alumil aluminium windows</strong> from premium ranges, manufactured on automated production lines. Whether you choose <strong>Alumil Supreme</strong> systems or the versatile Smartia range, we provide technical advice and professional installation.', exp2:'Alumil aluminium profiles with thermal barrier are suitable for <strong>nZEB</strong> buildings. Large glazed surfaces, extreme durability and contemporary design for any project type — residential, commercial or industrial.', btn_detail:'Details', cross_pvc:'Salamander PVC Windows', cross_acc:'Accessories & Perimeter Insulation',cross_nzeb:'nZEB Insulation Systems',cross_blog:'Technical Window Blog', cat_ferestre:'WINDOWS AND DOORS - ALUMINIUM', cat_liftante:'SLIDING - ALUMINIUM', cat_armonice:'FOLDING WINDOWS AND DOORS' },
  de: { label:'Aluminiumfenster · Alumil', h1:'Aluminiumfenster Alumil — Fenster, Türen und Vorhangfassaden Bukarest', sub:'Aluminiumfenster mit thermischer Trennung — Alumil Supreme und Smartia. Wettbewerbsfähige Preise, Einbau für nZEB-Gebäude, Lieferung in ganz Europa.', exp_label:'Neofort BIZ Aluminium-Expertise', exp1:'Wir liefern <strong>Alumil Aluminiumfenster</strong> aus Premium-Sortimenten, gefertigt auf automatisierten Produktionslinien. Ob <strong>Alumil Supreme</strong>-Systeme oder die vielseitige Smartia-Reihe — wir bieten Fachberatung und professionellen Einbau.', exp2:'Alumil-Aluminiumprofile mit thermischer Trennung eignen sich für <strong>nZEB</strong>-Gebäude. Große Glasflächen, extreme Langlebigkeit und zeitgemäßes Design für jede Projektart.', btn_detail:'Details', cross_pvc:'Salamander PVC-Fenster', cross_acc:'Zubehör & Perimeterdämmung',cross_nzeb:'nZEB-Dämmsysteme',cross_blog:'Technischer Fensterblog', cat_ferestre:'FENSTER UND TÜREN - ALUMINIUM', cat_liftante:'SCHIEBETÜREN - ALUMINIUM', cat_armonice:'FALT-FENSTER UND -TÜREN' },
  fr: { label:'Menuiserie Aluminium · Alumil', h1:'Menuiserie Aluminium Alumil — Fenêtres, Portes et Murs-Rideaux Bucarest', sub:'Menuiserie aluminium à rupture de pont thermique — Alumil Supreme et Smartia. Prix compétitifs, pose pour bâtiments nZEB, livraison dans toute l\'Europe.', exp_label:'Expertise Neofort BIZ en Aluminium', exp1:'Nous fournissons des <strong>menuiseries aluminium Alumil</strong> des gammes premium, fabriquées sur lignes de production automatisées. Systèmes <strong>Alumil Supreme</strong> ou gamme Smartia — conseil technique et pose professionnelle assurés.', exp2:'Les profils aluminium Alumil à rupture de pont thermique conviennent aux bâtiments <strong>nZEB</strong>. Grandes surfaces vitrées, durabilité extrême et design contemporain pour tout type de projet.', btn_detail:'Détails', cross_pvc:'Menuiserie PVC Salamander', cross_acc:'Accessoires & Isolation',cross_nzeb:'Systèmes isolation nZEB',cross_blog:'Blog technique menuiserie', cat_ferestre:'FENÊTRES ET PORTES - ALUMINIUM', cat_liftante:'COULISSANTS - ALUMINIUM', cat_armonice:'FENÊTRES ET PORTES PLIANTES' },
  es: { label:'Carpintería Aluminio · Alumil', h1:'Carpintería Aluminio Alumil — Ventanas, Puertas y Muros Cortina Bucarest', sub:'Carpintería aluminio con rotura de puente térmico — Alumil Supreme y Smartia. Precios competitivos, instalación para edificios nZEB, entrega en toda Europa.', exp_label:'Experiencia Neofort BIZ en Aluminio', exp1:'Suministramos <strong>carpintería aluminio Alumil</strong> de gamas premium, fabricada en líneas de producción automatizadas. Sistemas <strong>Alumil Supreme</strong> o gama Smartia — asesoría técnica e instalación profesional garantizadas.', exp2:'Los perfiles de aluminio Alumil con rotura de puente térmico son aptos para edificios <strong>nZEB</strong>. Grandes superficies acristaladas, durabilidad extrema y diseño contemporáneo para todo tipo de proyecto.', btn_detail:'Detalles', cross_pvc:'Ventanas PVC Salamander', cross_acc:'Accesorios & Aislamiento Perimetral',cross_nzeb:'Sistemas aislamiento nZEB',cross_blog:'Blog técnico carpintería', cat_ferestre:'VENTANAS Y PUERTAS - ALUMINIO', cat_liftante:'CORREDERAS - ALUMINIO', cat_armonice:'VENTANAS Y PUERTAS PLEGABLES' },
  it: { label:'Infissi Alluminio · Alumil', h1:'Infissi Alluminio Alumil — Finestre, Porte e Facciate Continue Bucarest', sub:'Infissi alluminio con taglio termico — Alumil Supreme e Smartia. Prezzi competitivi, posa per edifici nZEB, consegna in tutta Europa.', exp_label:'Competenza Neofort BIZ in Alluminio', exp1:'Forniamo <strong>infissi alluminio Alumil</strong> delle gamme premium, prodotti su linee di produzione automatizzate. Sistemi <strong>Alumil Supreme</strong> o gamma Smartia — consulenza tecnica e posa professionale garantite.', exp2:'I profili in alluminio Alumil con taglio termico sono adatti agli edifici <strong>nZEB</strong>. Grandi superfici vetrate, estrema durabilità e design contemporaneo per ogni tipo di progetto.', btn_detail:'Dettagli', cross_pvc:'Finestre PVC Salamander', cross_acc:'Accessori & Isolamento Perimetrale',cross_nzeb:'Sistemi isolamento nZEB',cross_blog:'Blog tecnico infissi', cat_ferestre:'FINESTRE E PORTE - ALLUMINIO', cat_liftante:'SCORREVOLI - ALLUMINIO', cat_armonice:'FINESTRE E PORTE PIEGHEVOLI' },
};

// ─── DATE PRODUSE — identic cu screenshot, toate specificațiile, 6 limbi ─────
const SPECS = {
  s77: {
    ro:[['Bariera termică','40mm'],['Greutate canat','până la 180 kg'],['Adâncime','77 mm'],['Transfer termic Uf','de la 0,85 W/m²K'],['Vitraj','până la 72mm'],['Protecție fonică','până la 42 dB'],['Anti-efracție','până la RC 3']],
    en:[['Thermal barrier','40mm'],['Sash weight','up to 180 kg'],['Depth','77 mm'],['Thermal transfer Uf','from 0.85 W/m²K'],['Glazing','up to 72mm'],['Sound insulation','up to 42 dB'],['Burglar resistance','up to RC 3']],
    de:[['Thermische Trennung','40mm'],['Flügelgewicht','bis 180 kg'],['Bautiefe','77 mm'],['Wärmedurchgang Uf','ab 0,85 W/m²K'],['Verglasung','bis 72mm'],['Schallschutz','bis 42 dB'],['Einbruchschutz','bis RC 3']],
    fr:[['Rupture pont thermique','40mm'],['Poids vantail','jusqu\'à 180 kg'],['Profondeur','77 mm'],['Transfert thermique Uf','dès 0,85 W/m²K'],['Vitrage','jusqu\'à 72mm'],['Protection phonique','jusqu\'à 42 dB'],['Anti-effraction','jusqu\'à RC 3']],
    es:[['Rotura puente térmico','40mm'],['Peso hoja','hasta 180 kg'],['Profundidad','77 mm'],['Transferencia Uf','desde 0,85 W/m²K'],['Acristalamiento','hasta 72mm'],['Aislamiento acústico','hasta 42 dB'],['Antirrobo','hasta RC 3']],
    it:[['Taglio termico','40mm'],['Peso anta','fino a 180 kg'],['Profondità','77 mm'],['Trasmittanza Uf','da 0,85 W/m²K'],['Vetro','fino a 72mm'],['Isolamento acustico','fino a 42 dB'],['Antieffrazione','fino a RC 3']],
  },
  s67: {
    ro:[['Bariera termică','30mm'],['Greutate canat','până la 180 kg'],['Adâncime','67-75 mm'],['Transfer termic Uf','de la 1,1 W/m²K'],['Vitraj','până la 58mm'],['Protecție fonică','până la 45 dB'],['Anti-efracție','până la RC 3']],
    en:[['Thermal barrier','30mm'],['Sash weight','up to 180 kg'],['Depth','67-75 mm'],['Thermal transfer Uf','from 1.1 W/m²K'],['Glazing','up to 58mm'],['Sound insulation','up to 45 dB'],['Burglar resistance','up to RC 3']],
    de:[['Thermische Trennung','30mm'],['Flügelgewicht','bis 180 kg'],['Bautiefe','67-75 mm'],['Wärmedurchgang Uf','ab 1,1 W/m²K'],['Verglasung','bis 58mm'],['Schallschutz','bis 45 dB'],['Einbruchschutz','bis RC 3']],
    fr:[['Rupture pont thermique','30mm'],['Poids vantail','jusqu\'à 180 kg'],['Profondeur','67-75 mm'],['Transfert thermique Uf','dès 1,1 W/m²K'],['Vitrage','jusqu\'à 58mm'],['Protection phonique','jusqu\'à 45 dB'],['Anti-effraction','jusqu\'à RC 3']],
    es:[['Rotura puente térmico','30mm'],['Peso hoja','hasta 180 kg'],['Profundidad','67-75 mm'],['Transferencia Uf','desde 1,1 W/m²K'],['Acristalamiento','hasta 58mm'],['Aislamiento acústico','hasta 45 dB'],['Antirrobo','hasta RC 3']],
    it:[['Taglio termico','30mm'],['Peso anta','fino a 180 kg'],['Profondità','67-75 mm'],['Trasmittanza Uf','da 1,1 W/m²K'],['Vetro','fino a 58mm'],['Isolamento acustico','fino a 45 dB'],['Antieffrazione','fino a RC 3']],
  },
  s700: {
    ro:[['Bariera termică','Poliamidă + Energy bar'],['Etanșare perimetrală','perii tri-fin'],['Adâncime cercevea','70 mm'],['Transfer termic Uw','1,1 W/m²K'],['Vitraj','până la 50mm'],['Protecție fonică','până la 41 dB'],['Anti-efracție','până la RC 2']],
    en:[['Thermal barrier','Polyamide + Energy bar'],['Perimeter sealing','tri-fin brushes'],['Sash depth','70 mm'],['Thermal transfer Uw','1.1 W/m²K'],['Glazing','up to 50mm'],['Sound insulation','up to 41 dB'],['Burglar resistance','up to RC 2']],
    de:[['Thermische Trennung','Polyamid + Energy Bar'],['Perimeterdichtung','Tri-Fin-Bürsten'],['Flügelbautiefe','70 mm'],['Wärmedurchgang Uw','1,1 W/m²K'],['Verglasung','bis 50mm'],['Schallschutz','bis 41 dB'],['Einbruchschutz','bis RC 2']],
    fr:[['Rupture pont thermique','Polyamide + Energy bar'],['Étanchéité périmétrique','brosses tri-fin'],['Profondeur ouvrant','70 mm'],['Transfert thermique Uw','1,1 W/m²K'],['Vitrage','jusqu\'à 50mm'],['Protection phonique','jusqu\'à 41 dB'],['Anti-effraction','jusqu\'à RC 2']],
    es:[['Rotura puente térmico','Poliamida + Energy bar'],['Estanqueidad perimetral','cepillos tri-fin'],['Profundidad de hoja','70 mm'],['Transferencia Uw','1,1 W/m²K'],['Acristalamiento','hasta 50mm'],['Aislamiento acústico','hasta 41 dB'],['Antirrobo','hasta RC 2']],
    it:[['Taglio termico','Poliammide + Energy bar'],['Tenuta perimetrale','spazzole tri-fin'],['Profondità anta','70 mm'],['Trasmittanza Uw','1,1 W/m²K'],['Vetro','fino a 50mm'],['Isolamento acustico','fino a 41 dB'],['Antieffrazione','fino a RC 2']],
  },
  s350: {
    ro:[['Bariera termică','poliamidă 24 mm'],['Etanșare perimetrală','perii tri-fin'],['Adâncime canat','35 mm'],['Transfer termic Uf','de la 2,4 W/m²K'],['Vitraj','până la 28mm'],['Protecție fonică','până la 38 dB'],['Greutate canat','până la 180 kg']],
    en:[['Thermal barrier','24 mm polyamide'],['Perimeter sealing','tri-fin brushes'],['Sash depth','35 mm'],['Thermal transfer Uf','from 2.4 W/m²K'],['Glazing','up to 28mm'],['Sound insulation','up to 38 dB'],['Sash weight','up to 180 kg']],
    de:[['Thermische Trennung','Polyamid 24 mm'],['Perimeterdichtung','Tri-Fin-Bürsten'],['Flügeltiefe','35 mm'],['Wärmedurchgang Uf','ab 2,4 W/m²K'],['Verglasung','bis 28mm'],['Schallschutz','bis 38 dB'],['Flügelgewicht','bis 180 kg']],
    fr:[['Rupture pont thermique','polyamide 24 mm'],['Étanchéité périmétrique','brosses tri-fin'],['Profondeur ouvrant','35 mm'],['Transfert thermique Uf','dès 2,4 W/m²K'],['Vitrage','jusqu\'à 28mm'],['Protection phonique','jusqu\'à 38 dB'],['Poids vantail','jusqu\'à 180 kg']],
    es:[['Rotura puente térmico','poliamida 24 mm'],['Estanqueidad perimetral','cepillos tri-fin'],['Profundidad hoja','35 mm'],['Transferencia Uf','desde 2,4 W/m²K'],['Acristalamiento','hasta 28mm'],['Aislamiento acústico','hasta 38 dB'],['Peso hoja','hasta 180 kg']],
    it:[['Taglio termico','poliammide 24 mm'],['Tenuta perimetrale','spazzole tri-fin'],['Profondità anta','35 mm'],['Trasmittanza Uf','da 2,4 W/m²K'],['Vetro','fino a 28mm'],['Isolamento acustico','fino a 38 dB'],['Peso anta','fino a 180 kg']],
  },
  sf85: {
    ro:[['Bariera termică','40 mm'],['Izolare','Poliamidă dublă + Energy bar'],['Adâncime','85 mm'],['Transfer termic Uf','de la 1.0 W/m²K'],['Vitraj','20–53 mm'],['Permeabilitate aer','Clasa 4'],['Anti-efracție','RC2 / PAS24']],
    en:[['Thermal barrier','40 mm'],['Insulation','Double polyamide + Energy bar'],['Depth','85 mm'],['Thermal transfer Uf','from 1.0 W/m²K'],['Glazing','20–53 mm'],['Air permeability','Class 4'],['Burglar resistance','RC2 / PAS24']],
    de:[['Thermische Trennung','40 mm'],['Dämmung','Doppeltes Polyamid + Energy Bar'],['Bautiefe','85 mm'],['Wärmedurchgang Uf','ab 1,0 W/m²K'],['Verglasung','20–53 mm'],['Luftdurchlässigkeit','Klasse 4'],['Einbruchschutz','RC2 / PAS24']],
    fr:[['Rupture pont thermique','40 mm'],['Isolation','Double polyamide + Energy bar'],['Profondeur','85 mm'],['Transfert thermique Uf','dès 1,0 W/m²K'],['Vitrage','20–53 mm'],['Perméabilité à l\'air','Classe 4'],['Anti-effraction','RC2 / PAS24']],
    es:[['Rotura puente térmico','40 mm'],['Aislamiento','Doble poliamida + Energy bar'],['Profundidad','85 mm'],['Transferencia Uf','desde 1,0 W/m²K'],['Acristalamiento','20–53 mm'],['Permeabilidad al aire','Clase 4'],['Antirrobo','RC2 / PAS24']],
    it:[['Taglio termico','40 mm'],['Isolamento','Doppia poliammide + Energy bar'],['Profondità','85 mm'],['Trasmittanza Uf','da 1,0 W/m²K'],['Vetro','20–53 mm'],['Permeabilità all\'aria','Classe 4'],['Antieffrazione','RC2 / PAS24']],
  },
  m19800: {
    ro:[['Bariera termică','2 × 18 mm poliamidă'],['Etanșare','2 garnituri'],['Profil foaie','50 mm'],['Transfer termic Uf','1,9 W/m²K'],['Vitraj','24–32 mm'],['Etanșeitate apă','clasa 4A'],['Rezistență vânt','C1/B1']],
    en:[['Thermal barrier','2 × 18 mm polyamide'],['Sealing','2 gaskets'],['Panel profile','50 mm'],['Thermal transfer Uf','1.9 W/m²K'],['Glazing','24–32 mm'],['Water tightness','class 4A'],['Wind resistance','C1/B1']],
    de:[['Thermische Trennung','2 × 18 mm Polyamid'],['Dichtung','2 Dichtungen'],['Flügelprofil','50 mm'],['Wärmedurchgang Uf','1,9 W/m²K'],['Verglasung','24–32 mm'],['Schlagregendichtheit','Klasse 4A'],['Windlast','C1/B1']],
    fr:[['Rupture pont thermique','2 × 18 mm polyamide'],['Étanchéité','2 joints'],['Profilé de vantail','50 mm'],['Transfert thermique Uf','1,9 W/m²K'],['Vitrage','24–32 mm'],['Étanchéité à l\'eau','classe 4A'],['Résistance au vent','C1/B1']],
    es:[['Rotura puente térmico','2 × 18 mm poliamida'],['Estanqueidad','2 juntas'],['Perfil de hoja','50 mm'],['Transferencia Uf','1,9 W/m²K'],['Acristalamiento','24–32 mm'],['Estanqueidad al agua','clase 4A'],['Resistencia al viento','C1/B1']],
    it:[['Taglio termico','2 × 18 mm poliammide'],['Tenuta','2 guarnizioni'],['Profilo anta','50 mm'],['Trasmittanza Uf','1,9 W/m²K'],['Vetro','24–32 mm'],['Tenuta all\'acqua','classe 4A'],['Resistenza al vento','C1/B1']],
  },
};

const DESCS = {
  s77: {
    ro:'Sistem de ferestre și uși din aluminiu din gama Supreme. Poliamidă de 40 mm cu Energy bar, Uf (profil) și Uw (fereastră) de la 0,85 W/m²K și geam până la 72 mm, inclusiv triplu.',
    en:'Aluminium window and door system from the Supreme range. 40 mm polyamide with Energy bar, Uf (profile) and Uw (window) from 0.85 W/m²K and glazing up to 72 mm, triple included.',
    de:'Aluminium-Fenster- und Türsystem der Supreme-Reihe. 40 mm Polyamid mit Energy bar, Uf (Profil) und Uw (Fenster) ab 0,85 W/m²K und Verglasung bis 72 mm, auch dreifach.',
    fr:'Système de fenêtres et portes aluminium de la gamme Supreme. Polyamide 40 mm avec Energy bar, Uf (profilé) et Uw (fenêtre) dès 0,85 W/m²K et vitrage jusqu\'à 72 mm, triple compris.',
    es:'Sistema de ventanas y puertas de aluminio de la gama Supreme. Poliamida de 40 mm con Energy bar, Uf (perfil) y Uw (ventana) desde 0,85 W/m²K y vidrio hasta 72 mm, también triple.',
    it:'Sistema di finestre e porte in alluminio della gamma Supreme. Poliammide da 40 mm con Energy bar, Uf (profilo) e Uw (finestra) da 0,85 W/m²K e vetro fino a 72 mm, anche triplo.',
  },
  s67: {
    ro:'Sistem versatil și economic din gama Smartia. Izolare fonică superioară până la 45 dB — ideal pentru medii urbane. Barieră termică 30mm, geam până la 58mm.',
    en:'Versatile and economical system from the Smartia range. Superior sound insulation up to 45 dB — ideal for urban environments. 30mm thermal barrier, glazing up to 58mm.',
    de:'Vielseitiges und wirtschaftliches System aus der Smartia-Reihe. Überlegener Schallschutz bis 45 dB — ideal für städtische Umgebungen. 30mm thermische Trennung.',
    fr:'Système polyvalent et économique de la gamme Smartia. Isolation phonique jusqu\'à 45 dB — idéal pour les environnements urbains. Rupture thermique 30mm.',
    es:'Sistema versátil y económico de la gama Smartia. Aislamiento acústico hasta 45 dB — ideal para entornos urbanos. Rotura térmica 30mm, acristalamiento hasta 58mm.',
    it:'Sistema versatile ed economico della gamma Smartia. Isolamento acustico fino a 45 dB — ideale per ambienti urbani. Taglio termico 30mm, vetro fino a 58mm.',
  },
  s700: {
    ro:'Sistem de glisare liftantă cu foi mari de sticlă și izolație din poliamidă cu Energy bar. Garnituri EPDM și perii tri-fin și Uw 1,1 W/m²K. Acces facil la terase și grădini.',
    en:'Lift-and-slide system with large glass panels and polyamide insulation with Energy bar. EPDM gaskets and tri-fin brushes and Uw 1.1 W/m²K. Easy access to terraces and gardens.',
    de:'Hebeschiebe-System mit großen Glasscheiben und Dämmung aus Polyamid mit Energy Bar. EPDM-Dichtungen und Tri-Fin-Bürsten und Uw 1,1 W/m²K.',
    fr:'Système coulissant levant à grands vitrages et isolation en polyamide avec Energy bar. Joints EPDM et brosses tri-fin et Uw 1,1 W/m²K.',
    es:'Sistema corredera elevable con grandes hojas de vidrio y aislamiento de poliamida con Energy bar. Juntas EPDM y cepillos tri-fin y Uw 1,1 W/m²K.',
    it:'Sistema scorrevole alzante con grandi lastre di vetro e isolamento in poliammide con Energy bar. Guarnizioni EPDM e spazzole tri-fin e Uw 1,1 W/m²K.',
  },
  s350: {
    ro:'Sistem glisant din gama Smartia. Etanșare perimetrală tri-fin, poliamidă de 24 mm. Soluție economică pentru acces la terase și balcoane.',
    en:'Sliding system from the Smartia range. Tri-fin perimeter sealing, 24 mm polyamide. Economical solution for terrace and balcony access.',
    de:'Schiebesystem aus der Smartia-Reihe. Tri-Fin-Perimeterdichtung, 24 mm Polyamid. Wirtschaftliche Lösung für Terrassen- und Balkonzugang.',
    fr:'Système coulissant de la gamme Smartia. Étanchéité périmétrique tri-fin, polyamide de 24 mm. Solution économique pour l\'accès aux terrasses et balcons.',
    es:'Sistema corredera de la gama Smartia. Sellado perimetral tri-fin, poliamida de 24 mm. Solución económica para acceso a terrazas y balcones.',
    it:'Sistema scorrevole della gamma Smartia. Tenuta perimetrale tri-fin, poliammide da 24 mm. Soluzione economica per l\'accesso a terrazze e balconi.',
  },
  sf85: {
    ro:'Sistem armonic premium pentru deschideri mari. Barieră termică din poliamidă dublă de 40 mm cu Energy bar, foaie de 85 mm. Clasa RC2 și certificare PAS24.',
    en:'Premium folding system for large openings. Double 40 mm polyamide thermal break with Energy bar, 85 mm sash. Class RC2 and PAS24 certification.',
    de:'Premium-Faltsystem für große Öffnungen. Thermische Trennung aus doppeltem 40-mm-Polyamid mit Energy Bar, 85-mm-Flügel. RC2 und PAS24.',
    fr:'Système pliant premium pour grandes baies. Rupture thermique en double polyamide de 40 mm avec Energy bar, vantail de 85 mm. Classe RC2 et certification PAS24.',
    es:'Sistema plegable premium para grandes aperturas. Rotura térmica de doble poliamida de 40 mm con Energy bar, hoja de 85 mm. Clase RC2 y certificación PAS24.',
    it:'Sistema pieghevole premium per grandi aperture. Taglio termico in doppia poliammide da 40 mm con Energy bar, anta da 85 mm. Classe RC2 e certificazione PAS24.',
  },
  m19800: {
    ro:'Sistem armonic din gama Smartia. Barieră termică din două benzi de poliamidă de 18 mm, foi de până la 1,0 × 2,5 m, Uf 1,9 W/m²K, etanșeitate la apă clasa 4A. Ideal pentru terase și balcoane.',
    en:'Folding system from the Smartia range. Thermal break of two 18 mm polyamide strips, panels up to 1.0 × 2.5 m, Uf 1.9 W/m²K, water tightness class 4A. Ideal for terraces and balconies.',
    de:'Faltsystem aus der Smartia-Reihe. Thermische Trennung aus zwei 18-mm-Polyamidstegen, Flügel bis 1,0 × 2,5 m, Uf 1,9 W/m²K, Schlagregendichtheit Klasse 4A. Ideal für Terrassen und Balkone.',
    fr:'Système pliant de la gamme Smartia. Rupture thermique en deux barrettes de polyamide de 18 mm, vantaux jusqu’à 1,0 × 2,5 m, Uf 1,9 W/m²K, étanchéité à l’eau classe 4A. Idéal pour terrasses et balcons.',
    es:'Sistema plegable de la gama Smartia. Rotura térmica de dos pletinas de poliamida de 18 mm, hojas de hasta 1,0 × 2,5 m, Uf 1,9 W/m²K, estanqueidad al agua clase 4A. Ideal para terrazas y balcones.',
    it:'Sistema pieghevole della gamma Smartia. Taglio termico con due listelli in poliammide da 18 mm, ante fino a 1,0 × 2,5 m, Uf 1,9 W/m²K, tenuta all’acqua classe 4A. Ideale per terrazze e balconi.',
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
  // v286: numarul de recenzii venea hardcodat in descrierile de mai jos.
  const googleRating = await getGoogleRating();
  const t = await getTranslations({ locale, namespace: 'aluminiu' });
  const slug = SLUGS_TAMPLARIE_ALUMINIU[locale] || SLUGS_TAMPLARIE_ALUMINIU.ro;
  return {
    title: locale === 'ro' ? 'Tâmplărie Aluminiu Alumil București și Ilfov | Neofort BIZ'
         : locale === 'en' ? 'Alumil Aluminium Windows — Bucharest & Ilfov | Neofort BIZ'
         : locale === 'de' ? 'Alumil Aluminiumfenster — Bukarest und Ilfov | Neofort BIZ'
         : locale === 'fr' ? 'Menuiserie Aluminium Alumil — Bucarest, Ilfov | Neofort BIZ'
         : locale === 'es' ? 'Carpintería Aluminio Alumil — Bucarest e Ilfov | Neofort BIZ'
         : 'Infissi Alluminio Alumil — Bucarest e Ilfov | Neofort BIZ',
    description: locale === 'ro' ? `Ferestre și uși din aluminiu Alumil cu geam termopan în București și Ilfov: 250–480 EUR/mp cu montaj, ofertă în 48h. Glisante, armonice. ${googleRating.rating.toFixed(1)}★ din ${googleRating.count} recenzii.`
               : locale === 'en' ? `Alumil aluminium windows and doors with insulating glass in Bucharest and Ilfov: 250–480 EUR/m² installed, quote in 48h. Sliding, folding. ${googleRating.rating.toFixed(1)}★ from ${googleRating.count} reviews.`
               : locale === 'de' ? `Alumil Aluminiumfenster und -türen mit Isolierglas in Bukarest und Ilfov: 250–480 EUR/m² montiert, Angebot in 48h. Schiebe-, Falttüren. ${googleRating.rating.toFixed(1)}★ aus ${googleRating.count} Bewertungen.`
               : locale === 'fr' ? `Fenêtres et portes aluminium Alumil, double vitrage, à Bucarest et Ilfov : 250–480 EUR/m² posé, devis en 48h. Coulissants, accordéon. ${googleRating.rating.toFixed(1)}★ sur ${googleRating.count} avis.`
               : locale === 'es' ? `Ventanas y puertas de aluminio Alumil con vidrio aislante en Bucarest e Ilfov: 250–480 EUR/m² instalado, presupuesto en 48h. Correderas. ${googleRating.rating.toFixed(1)}★ de ${googleRating.count} reseñas.`
               : `Finestre e porte in alluminio Alumil con vetrocamera a Bucarest e Ilfov: 250–480 EUR/m² posato, preventivo in 48h. Scorrevoli, a libro. ${googleRating.rating.toFixed(1)}★ su ${googleRating.count} recensioni.`,
    keywords: locale === 'ro' ? 'tamplarie aluminiu, tamplarie aluminiu bucuresti, tamplarie aluminiu pret, tamplarie alumil, termopane aluminiu, ferestre aluminiu bucuresti, tamplarie aluminiu bariera termica, alumil supreme sf85, alumil smartia s67, ferestre aluminiu pret 2026' : locale === 'en' ? 'aluminium windows, aluminium windows Bucharest, Alumil windows, aluminium windows price, thermal break aluminium windows, Alumil Supreme SF85, Alumil Smartia S67' : locale === 'de' ? 'Aluminiumfenster Bukarest, Alumil Fenster, Aluminiumfenster Preis, thermisch getrennte Aluminiumprofile, Alumil Supreme, Alumil Smartia' : locale === 'fr' ? 'menuiserie aluminium Bucarest, prix menuiserie aluminium, Alumil Supreme, Alumil Smartia, fenêtres aluminium rupture pont thermique' : locale === 'es' ? 'carpintería aluminio Bucarest, precio ventanas aluminio, Alumil Supreme, Alumil Smartia, ventanas aluminio rotura puente térmico' : 'infissi alluminio Bucarest, prezzo infissi alluminio, Alumil Supreme, Alumil Smartia, finestre alluminio taglio termico',
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
      images: [{ url:`${BASE}/og/Tamplarie_Aluminiu_Alumil.jpg`, width:584, height:540, alt: locale==='ro' ? 'Tâmplărie aluminiu Alumil Supreme și Smartia — Neofort BIZ București' : locale==='en' ? 'Alumil Supreme and Smartia aluminium windows — Neofort BIZ Bucharest' : locale==='de' ? 'Alumil Supreme und Smartia Aluminiumfenster — Neofort BIZ Bukarest' : locale==='fr' ? 'Menuiseries aluminium Alumil Supreme et Smartia — Neofort BIZ Bucarest' : locale==='es' ? 'Carpintería aluminio Alumil Supreme y Smartia — Neofort BIZ Bucarest' : 'Infissi alluminio Alumil Supreme e Smartia — Neofort BIZ Bucarest', type:'image/jpeg' }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', creator:'@NeofortBIZ', title: t('title'), description: t('description'), images:[`${BASE}/og/Tamplarie_Aluminiu_Alumil.jpg`] },
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

  // v277: intrebarile traiesc in data/hubFaq.js, impreuna cu ale celorlalte 4 hub-uri.
  const faqItems = hubFaq('tamplarie-aluminiu', locale);

  const faqLabel = HUB_FAQ_LABEL[locale] || HUB_FAQ_LABEL.ro;

  // FAQPage generat din faqItems — sursa unica, localizata pe toate cele 6 limbi.
  // Anterior: obiect inline separat cu doar 'ro'/'en', care servea intrebari in
  // romana pe paginile de/fr/es/it si avea 3 intrebari pe EN fata de 5 vizibile.
  const faqSchema = faqItems.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map(([q, a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a },
    })),
  } : null;

  const pillarSectionLabel = {"ro":"Ghid & Resurse","en":"Guide & Resources","de":"Ratgeber & Ressourcen","fr":"Guide & Ressources","es":"Guía y Recursos","it":"Guida e Risorse"}[locale] || "Ghid & Resurse";
  const PILLAR_SLUGS = {
    ro: 'tamplarie-aluminiu/ghid-complet',
    en: 'aluminium-windows/complete-guide',
    de: 'aluminiumfenster/kompletter-ratgeber',
    fr: 'menuiserie-aluminium/guide-complet',
    es: 'carpinteria-aluminio/guia-completa',
    it: 'infissi-alluminio/guida-completa',
  };
  const PILLAR_LABELS = {
    ro: 'Ghid Complet Tâmplărie Aluminiu 2026 — sistemele Alumil S77, S67, M19800',
    en: 'Complete Aluminium Guide 2026 — Alumil S77, S67, M19800 systems',
    de: 'Aluminiumfenster-Ratgeber 2026 — Alumil-Systeme S77, S67, M19800',
    fr: 'Guide complet aluminium 2026 — Systèmes Alumil S77, S67, M19800',
    es: 'Guía completa aluminio 2026 — Sistemas Alumil S77, S67, M19800',
    it: 'Guida completa alluminio 2026 — Sistemi Alumil S77, S67, M19800',
  };
  const PILLAR_CTA = {
    ro: 'Citește ghidul complet',
    en: 'Read the Complete Guide',
    de: 'Kompletten Ratgeber lesen',
    fr: 'Lire le guide complet',
    es: 'Leer la guía completa',
    it: 'Leggi la guida completa',
  };
  const pillarSlug = PILLAR_SLUGS[locale] || PILLAR_SLUGS.ro;
  const pillarLabel = PILLAR_LABELS[locale] || PILLAR_LABELS.ro;
  const pillarCta = PILLAR_CTA[locale] || PILLAR_CTA.ro;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaALU) }}/>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>}
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
            {ALU_PRODUCTS.map((p, idx) => {
              const specs    = SPECS[p.slug][locale]   || SPECS[p.slug].ro;
              const desc     = DESCS[p.slug][locale]   || DESCS[p.slug].ro;
              const catLabel = p.cat==='ferestre' ? ui.cat_ferestre
                             : p.cat==='liftante' ? ui.cat_liftante
                             : ui.cat_armonice;
              const accentColor = p.gama==='SUPREME' ? '#2d5a8e' : '#4a7c59';
              const accentBg    = p.gama==='SUPREME' ? 'rgba(45,90,142,0.07)' : 'rgba(74,124,89,0.07)';
              const accentBorder= p.gama==='SUPREME' ? 'rgba(45,90,142,0.18)' : 'rgba(74,124,89,0.18)';
              // v267: cardul intreg e link, ca la cardurile de blog.
              // Butonul "Detalii" a devenit <span>: HTML-ul nu permite link in link.
              return (
                <Link key={p.slug} href={`/produse-aluminiu/${PROD_SLUG_MAP[p.slug] || p.slug}`} aria-label={p.name}
                  className="card-link"
                  style={{display:'flex',flexDirection:'column',border:'1px solid #e8e8e4',background:'#fff',overflow:'hidden',textDecoration:'none',color:'inherit'}}>

                  {/* Imagine */}
                  <div style={{position:'relative',background:'#fff',height:'200px',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',padding:'16px'}}>
                    <img
                      src={p.img} alt={p.name}
                      style={{maxHeight:'168px',maxWidth:'100%',width:'auto',height:'auto',objectFit:'contain',display:'block'}}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      fetchpriority={idx === 0 ? 'high' : 'auto'}
                      decoding="async"
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
                    <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'1.1rem',fontWeight:600,color:'#151515',marginBottom:'12px',lineHeight:1.2}}>
                      {p.name}
                    </h2>

                    {/* Specs — layout cheie:valoare identic cu screenshot */}
                    <ul style={{listStyle:'none',padding:0,margin:'0 0 12px 0',borderTop:'1px solid #efefed',paddingTop:'8px'}}>
                      {specs.map(([k,v],i) => (
                        <li key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:'6px',padding:'2.5px 0',borderBottom:'1px solid #f8f8f6',fontSize:'0.7rem',lineHeight:1.4}}>
                          <span style={{fontWeight:600,color:'#181818',whiteSpace:'nowrap',flexShrink:0}}>– {k}:</span>
                          <span style={{color:'#454545',textAlign:'right'}}>{v}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Descriere */}
                    <p style={{fontSize:'0.77rem',color:'#454545',lineHeight:1.65,flex:1,marginBottom:'16px'}}>{desc}</p>

                    {/* Buton Detalii */}
                    <span className="card-cta" style={{display:'block',textAlign:'center',fontFamily:'Barlow Condensed,sans-serif',fontSize:'0.63rem',letterSpacing:'0.18em',textTransform:'uppercase',fontWeight:600,color:accentColor,border:`1px solid ${accentColor}`,padding:'9px 16px',transition:'background 0.15s,color 0.15s'}}>
                      {ui.btn_detail}<span style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',border:0}}> — {p.name}</span>
                    </span>
                  </div>
                </Link>
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
              <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.65rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#2d2d2d',marginBottom:'4px'}}>{pillarSectionLabel}</div>
              <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.92rem',fontWeight:600,letterSpacing:'.04em',color:'#15222e'}}>{pillarLabel}</div>
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
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#a8a8a8',marginBottom:'0',textAlign:'center'}}>
            {CTA_LABELS[locale]?.h2a || CTA_LABELS.ro.h2a}{' '}
            <a href="#cerere-oferta" style={{textDecoration:'underline',color:'#fff'}}>{CTA_LABELS[locale]?.h2b || CTA_LABELS.ro.h2b}</a>
            {' '}{CTA_LABELS[locale]?.h2c || CTA_LABELS.ro.h2c}
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-base" style={{paddingTop:0}}>
        <div className="container mx-auto px-6 max-w-3xl">
          <FaqAccordion items={faqItems} title={faqLabel} />

          {/* ── LINKURI SEO INTERNE ── */}
          <div style={{marginTop:'32px',padding:'20px',background:'#f8f8f6',borderRadius:'6px',display:'flex',flexWrap:'wrap',gap:'8px',alignItems:'center'}}>
            <span style={{fontSize:'.8rem',color:'#3d3d3d',textTransform:'uppercase',letterSpacing:'.08em',marginRight:'8px'}}>
              {{'ro':'Vezi și','en':'See also','de':'Siehe auch','fr':'Voir aussi','es':'Ver también','it':'Vedi anche'}[locale]}:
            </span>
            <Link href={`/${{'ro':'tamplarie-aluminiu/preturi','en':'aluminium-windows/prices','de':'aluminiumfenster/preise','fr':'menuiserie-aluminium/prix','es':'carpinteria-aluminio/precios','it':'infissi-alluminio/prezzi'}[locale]}`}
              style={{fontSize:'.88rem',color:'#162d47',textDecoration:'underline',textUnderlineOffset:'3px'}}>
              {{'ro':'Prețuri tâmplărie aluminiu 2026','en':'Aluminium window prices 2026','de':'Aluminiumfenster Preise 2026','fr':'Prix menuiserie aluminium 2026','es':'Precios carpintería aluminio 2026','it':'Prezzi infissi alluminio 2026'}[locale]}
            </Link>
            <span style={{color:'#2d2d2d'}}>·</span>
            <Link href={`/${{'ro':'tamplarie-aluminiu/bucuresti','en':'aluminium-windows/bucharest','de':'aluminiumfenster/bukarest','fr':'menuiserie-aluminium/bucarest','es':'carpinteria-aluminio/bucarest','it':'infissi-alluminio/bucarest'}[locale]}`}
              style={{fontSize:'.88rem',color:'#162d47',textDecoration:'underline',textUnderlineOffset:'3px'}}>
              {{'ro':'Montaj București și Ilfov','en':'Installation Bucharest & Ilfov','de':'Montage Bukarest & Ilfov','fr':'Pose Bucarest & Ilfov','es':'Instalación Bucarest & Ilfov','it':'Posa Bucarest & Ilfov'}[locale]}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
