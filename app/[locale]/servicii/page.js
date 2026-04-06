import { getTranslations } from 'next-intl/server';
import { Link } from '../../../i18n/navigation';

const BASE = 'https://www.neofort-biz.ro';
const SLUGS_SERVICII = {'ro':'servicii', 'en':'services', 'de':'dienstleistungen', 'fr':'services', 'es':'servicios', 'it':'servizi'};

const CTA_LABELS = {
  ro: { tag:'Neofort BIZ — București & Europa', h2a:'Solicitați o', h2b:'ofertă de preț', h2c:'pentru Tâmplărie PVC Salamander sau Tâmplărie Aluminiu Alumil', btn:'Cerere Ofertă' },
  en: { tag:'Neofort BIZ — Bucharest & Europe', h2a:'Request a', h2b:'price quote', h2c:'for PVC Salamander or Alumil Aluminium Windows', btn:'Request Quote' },
  de: { tag:'Neofort BIZ — Bukarest & Europa', h2a:'Fordern Sie ein', h2b:'Preisangebot', h2c:'für Salamander Kunststoff- oder Alumil Aluminiumfenster an', btn:'Angebot anfragen' },
  fr: { tag:'Neofort BIZ — Bucarest & Europe', h2a:'Demandez un', h2b:'devis', h2c:'pour menuiserie PVC Salamander ou Aluminium Alumil', btn:'Demander un devis' },
  es: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Solicite un', h2b:'presupuesto', h2c:'para carpintería PVC Salamander o Aluminio Alumil', btn:'Pedir presupuesto' },
  it: { tag:'Neofort BIZ — Bucarest & Europa', h2a:'Richiedete un', h2b:'preventivo', h2c:'per infissi PVC Salamander o Alluminio Alumil', btn:'Richiedi preventivo' },
};

const PAGE_UI = {
  ro: { label:'Neofort BIZ', h1:'Servicii', sub:'Consultanță. Măsurători. Transport. Montaj. Service. — Un serviciu complet, de la primul contact până la garanție.', why_label:'De ce să alegi Neofort?', why_h2:'Suntem pe piață de 21 ani cu activitate neîntreruptă', why_desc:'Peste 50% din comenzi vin din recomandări sau de la clienți care revin constant. Implementăm cele mai noi și performante soluții tehnice. Executăm lucrări cu grad mare de complexitate și îmbunătățim permanent raportul calitate–utilitate–preț.', incl_label:'Ce includem', proc_label:'Procedura de lucru', proc_h2:'Pași clari de la contact la livrare',
    icons:[['EXPERTIZĂ','Consultanță'],['PRECIZIE','Măsurători'],['RAPIDITATE','Transport'],['CALITATE','Montaj'],['PROMPTITUDINE','Service'],['GARANȚIE','Completă']],
    services:[
      { id:'01', title:'Consultanță tehnică', short:'Analiză personalizată a nevoilor și recomandare soluție optimă.', desc:'Specialiștii noștri analizează cerințele specifice ale fiecărui proiect și recomandă cea mai potrivită soluție de tâmplărie — profil, geam, accesorii, culori, sisteme de deschidere. Consultanța este inclusă în procesul de ofertare.', specs:[['Disponibilitate','Luni – Vineri, 08:00 – 18:00'],['Canal','Telefon · E-mail · WhatsApp'],['Limbă','RO · EN · DE · FR · ES · IT'],['Durată','30 – 60 min per proiect']] },
      { id:'02', title:'Măsurători', short:'Măsurători la față de tencuială sau la față de glaf, cu protocol scris.', desc:'Echipa noastră realizează măsurătorile necesare pentru fabricarea exactă a tâmplăriei. Protocoalele de măsurătoare sunt transmise în scris și includ detalii despre sistemul de montaj, izolarea perimetrală și accesorii.', specs:[['Tip','La față de tencuială / glaf'],['Documentație','Protocol scris inclus'],['Zonă','București, Ilfov + împrejurimi'],['Programare','Telefon +40 758 990 048']] },
      { id:'03', title:'Transport', short:'Livrare internă și internațională în toată Comunitatea Europeană.', desc:'Livrăm produsele noastre în toată Comunitatea Europeană rapid și în siguranță. Asigurăm ambalarea și paletizarea profesională. Toate transporturile beneficiază de asigurare internațională pe durata tranzitului.', specs:[['Acoperire','România + toată UE'],['Ambalare','Profesională, antișoc'],['Asigurare','Internațională inclus'],['Termen','2–4 săptămâni de la contract']] },
      { id:'04', title:'Montaj profesional', short:'Echipe specializate cu experiență de peste 21 ani. Garanție completă.', desc:'Executăm montaje cu profesioniști cu vastă experiență în domeniu. Garantăm calitatea montajelor de tâmplărie la orice nivel de complexitate. Montajul include izolarea perimetrală cu bandă precomprimată, precadre și folii antivapori.', specs:[['Experiență','20+ ani echipe specializate'],['Izolare','Bandă precomprimată · Precadre · Folii'],['Garanție','Completă pe produs și manoperă'],['Zona','București · Ilfov · național']] },
      { id:'05', title:'Service post-vânzare', short:'Intervenții rapide, reglaje și remedieri. Suport tehnic continuu.', desc:'Asigurăm service post-vânzare rapid și eficient. Echipa de service intervine pentru reglaje de feronerie, remedieri și înlocuiri de componente. Contactul se face direct la numărul de service dedicat.', specs:[['Contact service','+40 752 443 432'],['Reglaje','Feronerie, etanșeizare'],['Intervenție','În limita zonei de acoperire'],['Garanție','Confirmată prin certificat']] },
    ],
    steps:[
      { n:'1', title:'Contact inițial', desc:'Examinați detaliile produselor noastre sau trimiteți o solicitare prin formularul de contact, e-mail sau telefon & WhatsApp.' },
      { n:'2', title:'Consultare personalizată', desc:'Un reprezentant vă contactează pentru a stabili, telefonic sau prin e-mail, cea mai potrivită soluție de tâmplărie în funcție de nevoile dvs.' },
      { n:'3', title:'Cerere de ofertă', desc:'Transmiteți cererea cu schița tabloului de tâmplărie: tip profil, culoare, tip geam termoizolator, accesorii.' },
      { n:'4', title:'Elaborare ofertă', desc:'Pe baza informațiilor complete, elaborăm oferta și vă comunicăm prețul total pentru marfă și serviciile comandate.' },
      { n:'5', title:'Contract & avans', desc:'Contractul se semnează la sediul nostru sau online. Se emite factura de avans (fără TVA pentru exporturi EUID intracomunitar).' },
      { n:'6', title:'Fabricare & livrare', desc:'Comanda este fabricată și livrată în 2–4 săptămâni. Toate transporturile beneficiază de asigurare internațională.' },
      { n:'7', title:'Finalizare', desc:'Se emit: factura pentru rest de plată, certificatul de garanție și certificările pentru tâmplărie cu geam termoizolator.' },
    ],
  },
  en: { label:'Neofort BIZ', h1:'Services', sub:'Consulting. Measurements. Transport. Installation. After-sales. — A complete service, from first contact to warranty.', why_label:'Why choose Neofort?', why_h2:'21 years of uninterrupted activity on the market', why_desc:'Over 50% of orders come from recommendations or returning clients. We implement the latest and most performant technical solutions, executing complex projects while continuously improving the quality-utility-price ratio.', incl_label:'What we include', proc_label:'Work procedure', proc_h2:'Clear steps from contact to delivery',
    icons:[['EXPERTISE','Consulting'],['PRECISION','Measurements'],['SPEED','Transport'],['QUALITY','Installation'],['PROMPTNESS','After-sales'],['WARRANTY','Complete']],
    services:[
      { id:'01', title:'Technical consulting', short:'Personalised analysis of needs and recommendation of the optimal solution.', desc:'Our specialists analyse the specific requirements of each project and recommend the most suitable joinery solution — profile, glass, accessories, colours, opening systems. Consulting is included in the quoting process.', specs:[['Availability','Monday – Friday, 08:00 – 18:00'],['Channel','Phone · E-mail · WhatsApp'],['Language','RO · EN · DE · FR · ES · IT'],['Duration','30 – 60 min per project']] },
      { id:'02', title:'Measurements', short:'Measurements at plaster face or sill face, with written protocol.', desc:'Our team carries out the measurements required for the exact manufacturing of the joinery. Measurement protocols are transmitted in writing and include details about the installation system, perimeter insulation and accessories.', specs:[['Type','Plaster face / sill face'],['Documentation','Written protocol included'],['Area','Bucharest, Ilfov + surroundings'],['Booking','Phone +40 758 990 048']] },
      { id:'03', title:'Transport', short:'Domestic and international delivery throughout the European Community.', desc:'We deliver our products throughout the European Community quickly and safely. We ensure professional packaging and palletising. All shipments benefit from international insurance during transit.', specs:[['Coverage','Romania + all EU'],['Packaging','Professional, shock-resistant'],['Insurance','International included'],['Lead time','2–4 weeks from contract']] },
      { id:'04', title:'Professional installation', short:'Specialised teams with over 21 years of experience. Full warranty.', desc:'We carry out installations with professionals with extensive experience in the field. We guarantee the quality of joinery installations at any level of complexity. Installation includes perimeter insulation with pre-compressed tape, subframes and anti-vapour membranes.', specs:[['Experience','20+ years specialist teams'],['Insulation','Pre-compressed tape · Subframes · Membranes'],['Warranty','Full on product and labour'],['Area','Bucharest · Ilfov · nationwide']] },
      { id:'05', title:'After-sales service', short:'Fast interventions, adjustments and repairs. Continuous technical support.', desc:'We provide fast and efficient after-sales service. The service team intervenes for hardware adjustments, repairs and component replacements. Contact is made directly at the dedicated service number.', specs:[['Service contact','+40 752 443 432'],['Adjustments','Hardware, sealing'],['Intervention','Within coverage area'],['Warranty','Confirmed by certificate']] },
    ],
    steps:[
      { n:'1', title:'Initial contact', desc:'Browse our product details or send a request via the contact form, e-mail or phone & WhatsApp.' },
      { n:'2', title:'Personalised consultation', desc:'A representative contacts you to establish, by phone or e-mail, the most suitable joinery solution based on your needs.' },
      { n:'3', title:'Quote request', desc:'Send your request with the joinery schedule sketch: profile type, colour, thermal insulation glass type, accessories.' },
      { n:'4', title:'Quote preparation', desc:'Based on complete information, we prepare the quote and communicate the total price for goods and ordered services.' },
      { n:'5', title:'Contract & advance payment', desc:'The contract is signed at our premises or online. An advance invoice is issued (VAT-free for intra-community EUID exports).' },
      { n:'6', title:'Manufacturing & delivery', desc:'The order is manufactured and delivered within 2–4 weeks. All shipments benefit from international insurance.' },
      { n:'7', title:'Completion', desc:'Issued: invoice for remaining payment, warranty certificate and certifications for joinery with thermal insulation glass.' },
    ],
  },
  de: { label:'Neofort BIZ', h1:'Leistungen', sub:'Beratung. Aufmaß. Transport. Einbau. Service. — Komplettleistung vom ersten Kontakt bis zur Garantie.', why_label:'Warum Neofort wählen?', why_h2:'21 Jahre ununterbrochene Marktpräsenz', why_desc:'Über 50% der Aufträge kommen von Empfehlungen oder Stammkunden. Wir setzen die neuesten technischen Lösungen ein und verbessern kontinuierlich das Qualitäts-Nutzen-Preis-Verhältnis.', incl_label:'Unser Leistungsumfang', proc_label:'Arbeitsablauf', proc_h2:'Klare Schritte vom Kontakt bis zur Lieferung',
    icons:[['EXPERTISE','Beratung'],['PRÄZISION','Aufmaß'],['SCHNELLIGKEIT','Transport'],['QUALITÄT','Einbau'],['PROMPTHEIT','Service'],['GARANTIE','Vollständig']],
    services:[
      { id:'01', title:'Technische Beratung', short:'Individuelle Bedarfsanalyse und Empfehlung der optimalen Lösung.', desc:'Unsere Spezialisten analysieren die spezifischen Anforderungen jedes Projekts und empfehlen die am besten geeignete Fensterlösung — Profil, Glas, Zubehör, Farben, Öffnungssysteme. Die Beratung ist im Angebotsprozess enthalten.', specs:[['Verfügbarkeit','Montag – Freitag, 08:00 – 18:00'],['Kanal','Telefon · E-Mail · WhatsApp'],['Sprache','RO · EN · DE · FR · ES · IT'],['Dauer','30 – 60 Min. pro Projekt']] },
      { id:'02', title:'Aufmaß', short:'Aufmaß an Putz- oder Laibungsmaß, mit schriftlichem Protokoll.', desc:'Unser Team führt die für die exakte Fertigung der Fenster erforderlichen Aufmaße durch. Aufmaßprotokolle werden schriftlich übermittelt und enthalten Details zum Einbausystem, zur Perimeterabdichtung und zum Zubehör.', specs:[['Typ','Putzmaß / Laibungsmaß'],['Dokumentation','Schriftliches Protokoll inklusive'],['Bereich','Bukarest, Ilfov + Umgebung'],['Terminvereinbarung','Telefon +40 758 990 048']] },
      { id:'03', title:'Transport', short:'Inlands- und internationale Lieferung in der gesamten Europäischen Gemeinschaft.', desc:'Wir liefern unsere Produkte in der gesamten Europäischen Gemeinschaft schnell und sicher. Wir gewährleisten professionelle Verpackung und Palettierung. Alle Transporte sind während des Transits international versichert.', specs:[['Abdeckung','Rumänien + gesamte EU'],['Verpackung','Professionell, stoßfest'],['Versicherung','International inklusive'],['Lieferzeit','2–4 Wochen ab Vertrag']] },
      { id:'04', title:'Professioneller Einbau', short:'Spezialisierte Teams mit über 21 Jahren Erfahrung. Vollständige Garantie.', desc:'Wir führen Einbauten mit erfahrenen Fachleuten durch. Wir garantieren die Qualität der Fenstereinbauten bei jeder Komplexitätsstufe. Der Einbau umfasst die Perimeterabdichtung mit vorkomprimiertem Band, Vorbaurahmen und Dampfsperren.', specs:[['Erfahrung','20+ Jahre Spezialteams'],['Abdichtung','Vorkomprimiertes Band · Vorbaurahmen · Folien'],['Garantie','Vollständig auf Produkt und Arbeit'],['Bereich','Bukarest · Ilfov · landesweit']] },
      { id:'05', title:'Kundendienst', short:'Schnelle Eingriffe, Einstellungen und Reparaturen. Kontinuierlicher technischer Support.', desc:'Wir bieten schnellen und effizienten Kundendienst. Das Service-Team greift für Beschlageinstellungen, Reparaturen und Komponentenaustausch ein. Der Kontakt erfolgt direkt über die dedizierte Service-Nummer.', specs:[['Service-Kontakt','+40 752 443 432'],['Einstellungen','Beschlag, Abdichtung'],['Einsatz','Im Abdeckungsbereich'],['Garantie','Durch Zertifikat bestätigt']] },
    ],
    steps:[
      { n:'1', title:'Erstkontakt', desc:'Sehen Sie sich unsere Produktdetails an oder senden Sie eine Anfrage über das Kontaktformular, E-Mail oder Telefon & WhatsApp.' },
      { n:'2', title:'Individuelle Beratung', desc:'Ein Vertreter kontaktiert Sie, um telefonisch oder per E-Mail die am besten geeignete Fensterlösung entsprechend Ihren Bedürfnissen zu ermitteln.' },
      { n:'3', title:'Angebotsanfrage', desc:'Senden Sie Ihre Anfrage mit der Fensterskizze: Profiltyp, Farbe, Wärmeschutzglastyp, Zubehör.' },
      { n:'4', title:'Angebotserstellung', desc:'Auf Basis vollständiger Informationen erstellen wir das Angebot und teilen Ihnen den Gesamtpreis für Waren und bestellte Leistungen mit.' },
      { n:'5', title:'Vertrag & Anzahlung', desc:'Der Vertrag wird in unseren Räumlichkeiten oder online unterzeichnet. Eine Anzahlungsrechnung wird ausgestellt (MwSt.-frei für innergemeinschaftliche EUID-Exporte).' },
      { n:'6', title:'Fertigung & Lieferung', desc:'Die Bestellung wird innerhalb von 2–4 Wochen gefertigt und geliefert. Alle Transporte sind international versichert.' },
      { n:'7', title:'Abschluss', desc:'Ausgestellt werden: Restbetragsrechnung, Garantiezertifikat und Zertifizierungen für Fenster mit Wärmeschutzglas.' },
    ],
  },
  fr: { label:'Neofort BIZ', h1:'Services', sub:'Conseil. Métrés. Transport. Pose. SAV. — Un service complet du premier contact jusqu\'à la garantie.', why_label:'Pourquoi choisir Neofort ?', why_h2:'21 ans de présence continue sur le marché', why_desc:'Plus de 50 % des commandes proviennent de recommandations ou de clients fidèles. Nous mettons en œuvre les solutions techniques les plus récentes et améliorons en permanence le rapport qualité-utilité-prix.', incl_label:'Ce que nous incluons', proc_label:'Procédure de travail', proc_h2:'Étapes claires du contact à la livraison',
    icons:[['EXPERTISE','Conseil'],['PRÉCISION','Métrés'],['RAPIDITÉ','Transport'],['QUALITÉ','Pose'],['RÉACTIVITÉ','SAV'],['GARANTIE','Complète']],
    services:[
      { id:'01', title:'Conseil technique', short:'Analyse personnalisée des besoins et recommandation de la solution optimale.', desc:'Nos spécialistes analysent les exigences spécifiques de chaque projet et recommandent la solution de menuiserie la plus adaptée — profil, vitrage, accessoires, couleurs, systèmes d\'ouverture. Le conseil est inclus dans le processus de devis.', specs:[['Disponibilité','Lundi – Vendredi, 08:00 – 18:00'],['Canal','Téléphone · E-mail · WhatsApp'],['Langue','RO · EN · DE · FR · ES · IT'],['Durée','30 – 60 min par projet']] },
      { id:'02', title:'Métrés', short:'Métrés en tableau ou en feuillure, avec procès-verbal écrit.', desc:'Notre équipe effectue les métrés nécessaires à la fabrication exacte de la menuiserie. Les procès-verbaux de métré sont transmis par écrit et comprennent les détails sur le système de pose, l\'isolation périphérique et les accessoires.', specs:[['Type','Tableau / feuillure'],['Documentation','Procès-verbal écrit inclus'],['Zone','Bucarest, Ilfov + environs'],['Rendez-vous','Téléphone +40 758 990 048']] },
      { id:'03', title:'Transport', short:'Livraison nationale et internationale dans toute la Communauté Européenne.', desc:'Nous livrons nos produits dans toute la Communauté Européenne rapidement et en toute sécurité. Nous assurons un emballage et une palettisation professionnels. Tous les transports bénéficient d\'une assurance internationale pendant le transit.', specs:[['Couverture','Roumanie + toute l\'UE'],['Emballage','Professionnel, antichoc'],['Assurance','Internationale incluse'],['Délai','2–4 semaines à partir du contrat']] },
      { id:'04', title:'Pose professionnelle', short:'Équipes spécialisées avec plus de 21 ans d\'expérience. Garantie complète.', desc:'Nous réalisons les poses avec des professionnels expérimentés. Nous garantissons la qualité des poses de menuiseries à tout niveau de complexité. La pose comprend l\'isolation périphérique avec ruban précomprimé, précadres et membranes pare-vapeur.', specs:[['Expérience','20+ ans équipes spécialisées'],['Isolation','Ruban précomprimé · Précadres · Membranes'],['Garantie','Complète sur produit et main-d\'œuvre'],['Zone','Bucarest · Ilfov · national']] },
      { id:'05', title:'SAV', short:'Interventions rapides, réglages et réparations. Support technique continu.', desc:'Nous assurons un SAV rapide et efficace. L\'équipe de service intervient pour les réglages de quincaillerie, réparations et remplacements de composants. Le contact se fait directement au numéro de service dédié.', specs:[['Contact SAV','+40 752 443 432'],['Réglages','Quincaillerie, étanchéité'],['Intervention','Dans la zone de couverture'],['Garantie','Confirmée par certificat']] },
    ],
    steps:[
      { n:'1', title:'Contact initial', desc:'Consultez les détails de nos produits ou envoyez une demande via le formulaire de contact, e-mail ou téléphone & WhatsApp.' },
      { n:'2', title:'Consultation personnalisée', desc:'Un représentant vous contacte pour établir, par téléphone ou e-mail, la solution de menuiserie la plus adaptée à vos besoins.' },
      { n:'3', title:'Demande de devis', desc:'Transmettez votre demande avec le schéma du tableau de menuiseries : type de profil, couleur, type de vitrage, accessoires.' },
      { n:'4', title:'Élaboration du devis', desc:'Sur la base d\'informations complètes, nous élaborons le devis et vous communiquons le prix total pour les marchandises et services commandés.' },
      { n:'5', title:'Contrat & acompte', desc:'Le contrat est signé dans nos locaux ou en ligne. Une facture d\'acompte est émise (hors TVA pour les exportations intracommunautaires EUID).' },
      { n:'6', title:'Fabrication & livraison', desc:'La commande est fabriquée et livrée en 2–4 semaines. Tous les transports bénéficient d\'une assurance internationale.' },
      { n:'7', title:'Finalisation', desc:'Émis : facture du solde, certificat de garantie et certifications pour menuiseries avec vitrage isolant.' },
    ],
  },
  es: { label:'Neofort BIZ', h1:'Servicios', sub:'Asesoría. Mediciones. Transporte. Instalación. Servicio post-venta. — Un servicio completo desde el primer contacto hasta la garantía.', why_label:'¿Por qué elegir Neofort?', why_h2:'21 años de actividad ininterrumpida en el mercado', why_desc:'Más del 50% de los pedidos provienen de recomendaciones o clientes recurrentes. Implementamos las soluciones técnicas más nuevas y mejoramos continuamente la relación calidad-utilidad-precio.', incl_label:'Qué incluimos', proc_label:'Procedimiento de trabajo', proc_h2:'Pasos claros desde el contacto hasta la entrega',
    icons:[['EXPERIENCIA','Consultoría'],['PRECISIÓN','Mediciones'],['RAPIDEZ','Transporte'],['CALIDAD','Instalación'],['PRONTITUD','Servicio'],['GARANTÍA','Completa']],
    services:[
      { id:'01', title:'Consultoría técnica', short:'Análisis personalizado de necesidades y recomendación de la solución óptima.', desc:'Nuestros especialistas analizan los requisitos específicos de cada proyecto y recomiendan la solución de carpintería más adecuada — perfil, vidrio, accesorios, colores, sistemas de apertura. La consultoría está incluida en el proceso de presupuesto.', specs:[['Disponibilidad','Lunes – Viernes, 08:00 – 18:00'],['Canal','Teléfono · E-mail · WhatsApp'],['Idioma','RO · EN · DE · FR · ES · IT'],['Duración','30 – 60 min por proyecto']] },
      { id:'02', title:'Mediciones', short:'Mediciones a cara de enfoscado o a cara de vierteaguas, con protocolo escrito.', desc:'Nuestro equipo realiza las mediciones necesarias para la fabricación exacta de la carpintería. Los protocolos de medición se transmiten por escrito e incluyen detalles sobre el sistema de instalación, el aislamiento perimetral y los accesorios.', specs:[['Tipo','Cara de enfoscado / vierteaguas'],['Documentación','Protocolo escrito incluido'],['Zona','Bucarest, Ilfov + alrededores'],['Reserva','Teléfono +40 758 990 048']] },
      { id:'03', title:'Transporte', short:'Entrega nacional e internacional en toda la Comunidad Europea.', desc:'Entregamos nuestros productos en toda la Comunidad Europea de forma rápida y segura. Garantizamos un embalaje y paletización profesionales. Todos los transportes cuentan con seguro internacional durante el tránsito.', specs:[['Cobertura','Rumanía + toda la UE'],['Embalaje','Profesional, antiimpacto'],['Seguro','Internacional incluido'],['Plazo','2–4 semanas desde el contrato']] },
      { id:'04', title:'Instalación profesional', short:'Equipos especializados con más de 21 años de experiencia. Garantía completa.', desc:'Realizamos instalaciones con profesionales con amplia experiencia. Garantizamos la calidad de las instalaciones de carpintería a cualquier nivel de complejidad. La instalación incluye el aislamiento perimetral con cinta precomprimida, premarcos y membranas antivapor.', specs:[['Experiencia','20+ años equipos especializados'],['Aislamiento','Cinta precomprimida · Premarcos · Membranas'],['Garantía','Completa en producto y mano de obra'],['Zona','Bucarest · Ilfov · nacional']] },
      { id:'05', title:'Servicio post-venta', short:'Intervenciones rápidas, ajustes y reparaciones. Soporte técnico continuo.', desc:'Proporcionamos un servicio post-venta rápido y eficiente. El equipo de servicio interviene para ajustes de herrajes, reparaciones y sustitución de componentes. El contacto se realiza directamente en el número de servicio dedicado.', specs:[['Contacto servicio','+40 752 443 432'],['Ajustes','Herrajes, sellado'],['Intervención','Dentro del área de cobertura'],['Garantía','Confirmada por certificado']] },
    ],
    steps:[
      { n:'1', title:'Contacto inicial', desc:'Consulte los detalles de nuestros productos o envíe una solicitud a través del formulario de contacto, e-mail o teléfono & WhatsApp.' },
      { n:'2', title:'Consulta personalizada', desc:'Un representante le contacta para establecer, por teléfono o e-mail, la solución de carpintería más adecuada según sus necesidades.' },
      { n:'3', title:'Solicitud de presupuesto', desc:'Transmita su solicitud con el esquema del cuadro de carpintería: tipo de perfil, color, tipo de vidrio, accesorios.' },
      { n:'4', title:'Elaboración del presupuesto', desc:'Con información completa, elaboramos el presupuesto y le comunicamos el precio total de mercancías y servicios solicitados.' },
      { n:'5', title:'Contrato & anticipo', desc:'El contrato se firma en nuestras instalaciones o en línea. Se emite factura de anticipo (sin IVA para exportaciones intracomunitarias EUID).' },
      { n:'6', title:'Fabricación & entrega', desc:'El pedido se fabrica y entrega en 2–4 semanas. Todos los transportes cuentan con seguro internacional.' },
      { n:'7', title:'Finalización', desc:'Se emiten: factura del saldo, certificado de garantía y certificaciones para carpintería con vidrio aislante térmico.' },
    ],
  },
  it: { label:'Neofort BIZ', h1:'Servizi', sub:'Consulenza. Rilievi. Trasporto. Posa. Post-vendita. — Un servizio completo dal primo contatto alla garanzia.', why_label:'Perché scegliere Neofort?', why_h2:'21 anni di attività ininterrotta sul mercato', why_desc:'Oltre il 50% degli ordini proviene da raccomandazioni o clienti abituali. Implementiamo le soluzioni tecniche più recenti e miglioriamo continuamente il rapporto qualità-utilità-prezzo.', incl_label:'Cosa includiamo', proc_label:'Procedura di lavoro', proc_h2:'Passi chiari dal contatto alla consegna',
    icons:[['COMPETENZA','Consulenza'],['PRECISIONE','Rilievi'],['RAPIDITÀ','Trasporto'],['QUALITÀ','Posa'],['PRONTEZZA','Assistenza'],['GARANZIA','Completa']],
    services:[
      { id:'01', title:'Consulenza tecnica', short:'Analisi personalizzata delle esigenze e raccomandazione della soluzione ottimale.', desc:'I nostri specialisti analizzano i requisiti specifici di ogni progetto e raccomandano la soluzione di infissi più adatta — profilo, vetro, accessori, colori, sistemi di apertura. La consulenza è inclusa nel processo di preventivo.', specs:[['Disponibilità','Lunedì – Venerdì, 08:00 – 18:00'],['Canale','Telefono · E-mail · WhatsApp'],['Lingua','RO · EN · DE · FR · ES · IT'],['Durata','30 – 60 min per progetto']] },
      { id:'02', title:'Rilievi', short:'Rilievi a filo intonaco o a filo davanzale, con protocollo scritto.', desc:'Il nostro team esegue i rilievi necessari per la fabbricazione esatta degli infissi. I protocolli di rilievo vengono trasmessi per iscritto e includono dettagli sul sistema di installazione, l\'isolamento perimetrale e gli accessori.', specs:[['Tipo','Filo intonaco / davanzale'],['Documentazione','Protocollo scritto incluso'],['Zona','Bucarest, Ilfov + dintorni'],['Prenotazione','Telefono +40 758 990 048']] },
      { id:'03', title:'Trasporto', short:'Consegna nazionale e internazionale in tutta la Comunità Europea.', desc:'Consegniamo i nostri prodotti in tutta la Comunità Europea rapidamente e in sicurezza. Garantiamo imballaggio e palettizzazione professionali. Tutte le spedizioni beneficiano di assicurazione internazionale durante il transito.', specs:[['Copertura','Romania + tutta l\'UE'],['Imballaggio','Professionale, antiurto'],['Assicurazione','Internazionale inclusa'],['Tempi','2–4 settimane dal contratto']] },
      { id:'04', title:'Posa professionale', short:'Squadre specializzate con oltre 21 anni di esperienza. Garanzia completa.', desc:'Eseguiamo le pose con professionisti con vasta esperienza nel settore. Garantiamo la qualità delle pose di infissi a qualsiasi livello di complessità. La posa include l\'isolamento perimetrale con nastro precompresso, controtelai e membrane vapore.', specs:[['Esperienza','20+ anni squadre specializzate'],['Isolamento','Nastro precompresso · Controtelai · Membrane'],['Garanzia','Completa su prodotto e manodopera'],['Zona','Bucarest · Ilfov · nazionale']] },
      { id:'05', title:'Post-vendita', short:'Interventi rapidi, regolazioni e riparazioni. Supporto tecnico continuo.', desc:'Forniamo assistenza post-vendita rapida ed efficiente. Il team di assistenza interviene per regolazioni della ferramenta, riparazioni e sostituzioni di componenti. Il contatto avviene direttamente al numero di assistenza dedicato.', specs:[['Contatto assistenza','+40 752 443 432'],['Regolazioni','Ferramenta, sigillatura'],['Intervento','Nell\'area di copertura'],['Garanzia','Confermata da certificato']] },
    ],
    steps:[
      { n:'1', title:'Contatto iniziale', desc:'Consultate i dettagli dei nostri prodotti o inviate una richiesta tramite il modulo di contatto, e-mail o telefono & WhatsApp.' },
      { n:'2', title:'Consulenza personalizzata', desc:'Un rappresentante vi contatta per stabilire, per telefono o e-mail, la soluzione di infissi più adatta alle vostre esigenze.' },
      { n:'3', title:'Richiesta di preventivo', desc:'Trasmettete la richiesta con lo schema del quadro degli infissi: tipo di profilo, colore, tipo di vetro isolante, accessori.' },
      { n:'4', title:'Elaborazione preventivo', desc:'Sulla base di informazioni complete, elaboriamo il preventivo e comunichiamo il prezzo totale per merce e servizi ordinati.' },
      { n:'5', title:'Contratto & acconto', desc:'Il contratto viene firmato presso la nostra sede o online. Viene emessa la fattura di acconto (senza IVA per esportazioni intracomunitarie EUID).' },
      { n:'6', title:'Fabbricazione & consegna', desc:'L\'ordine viene fabbricato e consegnato in 2–4 settimane. Tutte le spedizioni beneficiano di assicurazione internazionale.' },
      { n:'7', title:'Finalizzazione', desc:'Emessi: fattura del saldo, certificato di garanzia e certificazioni per infissi con vetro isolante termico.' },
    ],
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'servicii' });
  const slug = SLUGS_SERVICII[locale] || SLUGS_SERVICII.ro;
  return {
    title: t('title'),
    description: t('description'),
    keywords: locale === 'ro' ? 'servicii montaj tamplarie PVC aluminiu, masuratori ferestre Bucuresti, transport Europa' : locale === 'en' ? 'PVC aluminium window installation services, window measurement Bucharest, EU transport' : locale === 'de' ? 'PVC Aluminiumfenster Montage, Fensteraufmaß Bukarest, Transport Europa' : locale === 'fr' ? 'services pose fenêtres PVC aluminium, métrage Bucarest, transport Europe' : locale === 'es' ? 'servicios instalación carpintería PVC aluminio, medición Bucarest, transporte Europa' : 'servizi installazione infissi PVC alluminio, rilievo Bucarest, trasporto Europa',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: {
        'ro': `${BASE}/ro/${SLUGS_SERVICII.ro}`,
        'en': `${BASE}/en/${SLUGS_SERVICII.en}`,
        'de': `${BASE}/de/${SLUGS_SERVICII.de}`,
        'fr': `${BASE}/fr/${SLUGS_SERVICII.fr}`,
        'es': `${BASE}/es/${SLUGS_SERVICII.es}`,
        'it': `${BASE}/it/${SLUGS_SERVICII.it}`,
        'x-default': `${BASE}/ro/${SLUGS_SERVICII.ro}`,
      },
    },
    openGraph: {
      type: 'website',
      url: `${BASE}/${locale}/${slug}`,
      siteName: 'Neofort BIZ',
      title: t('title'),
      description: t('description'),
      images: [{ url:`${BASE}/og/Servicii_Neofort.jpg`, width:1200, height:630, alt: locale==='ro' ? 'Servicii Neofort BIZ: consultanță, producție și montaj tâmplărie PVC și aluminiu' : locale==='en' ? 'Neofort BIZ services: consultancy, production, PVC and aluminium window installation' : locale==='de' ? 'Neofort BIZ Dienstleistungen: Beratung, Produktion, PVC- und Aluminiumfenstermontage' : locale==='fr' ? 'Services Neofort BIZ: conseil, production, pose menuiseries PVC et aluminium' : locale==='es' ? 'Servicios Neofort BIZ: consultoría, producción, instalación carpintería PVC y aluminio' : 'Servizi Neofort BIZ: consulenza, produzione, posa infissi PVC e alluminio', type:'image/jpeg' }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title: t('title'), description: t('description'), images:[`${BASE}/og/Servicii_Neofort.jpg`] },
  };
}

// services now in PAGE_UI.services

export default async function ServiciiPage({ params }) {
  const { locale } = await params;
  const ui = PAGE_UI[locale] || PAGE_UI.ro;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': locale === 'ro' ? 'Servicii Montaj Tâmplărie PVC și Aluminiu' : locale === 'en' ? 'PVC and Aluminium Window Installation Services' : locale === 'de' ? 'PVC und Aluminium Fenstermontageservice' : locale === 'fr' ? 'Services de pose de menuiseries PVC et aluminium' : locale === 'es' ? 'Servicios de instalación de carpintería PVC y aluminio' : 'Servizi di installazione infissi PVC e alluminio',
    'provider': {
      '@type': 'LocalBusiness',
      '@id': 'https://www.neofort-biz.ro/#localbusiness',
      'name': 'Neofort BIZ',
      'url': 'https://www.neofort-biz.ro',
      'telephone': '+40752443435',
      'address': { '@type': 'PostalAddress', 'addressLocality': 'București', 'addressCountry': 'RO' }
    },
    'areaServed': { '@type': 'Place', 'name': 'Europe' },
    'serviceType': locale === 'ro' ? 'Montaj tâmplărie PVC și aluminiu' : 'PVC and aluminium window installation',
  };

  const howtoSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': locale === 'ro' ? 'Cum comandați tâmplărie PVC sau aluminiu de la Neofort BIZ'
          : locale === 'en' ? 'How to order PVC or aluminium windows from Neofort BIZ'
          : locale === 'de' ? 'Wie bestellen Sie Fenster bei Neofort BIZ'
          : locale === 'fr' ? 'Comment commander des fenêtres chez Neofort BIZ'
          : locale === 'es' ? 'Cómo encargar ventanas a Neofort BIZ'
          : 'Come ordinare infissi da Neofort BIZ',
    'totalTime': 'P28D',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': locale === 'ro' ? 'Elaborare ofertă' : locale === 'en' ? 'Quote preparation' : locale === 'de' ? 'Angebotserstellung' : locale === 'fr' ? 'Élaboration devis' : locale === 'es' ? 'Elaboración presupuesto' : 'Elaborazione preventivo',
        'text': locale === 'ro' ? 'Transmiteți cererea prin formularul de contact, e-mail sau WhatsApp +40752443435. Răspundem în maxim 2 zile lucrătoare.'
              : 'Send your request via contact form, email or WhatsApp +40752443435. We respond within 2 business days.',
        'url': 'https://www.neofort-biz.ro/' + locale + '/contact',
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': locale === 'ro' ? 'Consultare & Măsurătoare' : locale === 'en' ? 'Consultation & Measurement' : locale === 'de' ? 'Beratung & Aufmaß' : locale === 'fr' ? 'Conseil & Métrage' : locale === 'es' ? 'Consulta & Medición' : 'Consulenza & Rilievo',
        'text': locale === 'ro' ? 'Stabilim configurația, tipul de profil, culoare, geam și accesorii. Programăm măsurătorile și elaborăm oferta finală.'
              : 'We define configuration, profile type, colour, glass and accessories. We schedule measurements and finalise the offer.',
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': locale === 'ro' ? 'Transport & Montaj' : locale === 'en' ? 'Transport & Installation' : locale === 'de' ? 'Transport & Montage' : locale === 'fr' ? 'Transport & Pose' : locale === 'es' ? 'Transporte & Instalación' : 'Trasporto & Posa',
        'text': locale === 'ro' ? 'Fabricare 2–4 săptămâni, transport asigurat în toată UE, montaj profesional cu izolare perimetrală și certificat de garanție.'
              : 'Manufacturing 2–4 weeks, guaranteed EU transport, professional installation with perimeter insulation and warranty certificate.',
      },
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }}/>
      {/* Page header */}
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted max-w-xl">{ui.sub}</p>
        </div>
      </div>

      {/* De ce Neofort — band */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="sec-label">{ui.why_label}</span>
              <h2 className="font-condensed text-3xl font-semibold text-primary mb-4">{ui.why_h2}</h2>
              <p className="text-[0.88rem] text-muted leading-relaxed">{ui.why_desc}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 border border-border">
              {(ui.icons||[]).map(([top,bot],i)=>(
                <div key={i} className={`p-5 text-center ${i%3!==2?'border-r border-border':''} ${i<3?'border-b border-border':''}`}>
                  <div className="font-condensed text-[0.65rem] tracking-[0.18em] font-semibold text-primary mb-1">{top}</div>
                  <div className="text-[0.72rem] text-muted">{bot}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cards servicii */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.incl_label}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {(ui.services||[]).map(s=>(
              <div key={s.id} className="prod-card group">
                {/* color bar top */}
                <div className="h-1 w-full" style={{background: s.color}}/>
                <div className="card-body">
                  <div className="text-[0.62rem] tracking-[0.2em] uppercase font-semibold font-condensed mb-3" style={{color: s.color}}>
                    {s.id}
                  </div>
                  <h3 className="font-condensed text-[1.3rem] font-semibold text-primary mb-2">{s.title}</h3>
                  <p className="text-[0.8rem] text-muted mb-4 leading-relaxed">{s.short}</p>
                  <ul className="card-specs">
                    {s.specs.map(([k,v])=>(
                      <li key={k}><strong>{k}:</strong> {v}</li>
                    ))}
                  </ul>
                  <p className="text-[0.8rem] text-muted leading-relaxed mb-5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedura de lucru */}
      <section className="py-20 bg-light border-b border-border">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.proc_label}</span>
          <h2 className="font-condensed text-3xl font-semibold text-primary mb-12">{ui.proc_h2}</h2>
          <div className="space-y-0 border border-border">
            {(ui.steps||[]).map((step,i)=>(
              <div key={i} className={`flex gap-6 p-6 bg-white items-start ${i<6?'border-b border-border':''}`}>
                <div className="font-condensed text-[0.65rem] tracking-[0.15em] font-semibold text-muted shrink-0 w-5 pt-0.5">{step.n}.</div>
                <div>
                  <h3 className="font-condensed text-[1rem] font-semibold text-primary mb-1">{step.title}</h3>
                  <p className="text-[0.82rem] text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
    </>
  );
}
