const BASE = 'https://www.neofort-biz.ro';
const SLUGS_GDPR = {ro:'gdpr',en:'privacy-policy',de:'datenschutz',fr:'politique-confidentialite',es:'politica-privacidad',it:'informativa-privacy'};

const UI = {
  ro: {
    label: 'Neofort BIZ',
    h1: 'Politica de Confidențialitate (GDPR)',
    sub: 'Prelucrarea datelor cu caracter personal conform Regulamentului UE 2016/679 (GDPR). Ultima actualizare: Martie 2026.',
    title_meta: 'Politica GDPR & Confidențialitate · Neofort BIZ',
    desc_meta: 'Politica de confidențialitate Neofort BIZ SRL — date colectate, scopul prelucrării, drepturi GDPR, cookie-uri și procesatori terți.',
    sections: [
      { h: '1. Operatorul de date', p: 'NEOFORT BIZ SRL, Str. Theodor Aman Pictor nr.11, Sector 1, București 010776, România. CUI: RO30324211. E-mail: oferte@neofort-biz.ro · Telefon: +40 752 443 435.' },
      { h: '2. Date cu caracter personal colectate', p: 'Prin formularul de contact colectăm: (a) Nume și prenume; (b) Număr de telefon; (c) Adresă de e-mail; (d) Adresă de livrare; (e) Fișiere atașate (schițe, planuri, fotografii — maximum 7 fișiere); (f) Opțiunea de serviciu solicitată. Nu colectăm date sensibile (date medicale, etnice, biometrice etc.).' },
      { h: '3. Scopul și temeiul juridic al prelucrării', p: 'Datele sunt prelucrate în baza Art. 6(1)(b) GDPR — executarea unui contract sau măsuri precontractuale la cererea persoanei vizate. Scopuri: elaborarea ofertelor de preț solicitate, comunicarea comercială aferentă, executarea contractelor de furnizare și montaj tâmplărie.' },
      { h: '4. Procesatori terți autorizați', p: 'Resend Inc. (SUA) — serviciu de livrare e-mail, procesează datele din formular exclusiv pentru transmiterea mesajului la destinatarul intern oferte@neofort-biz.ro. Resend Inc. este certificat conform EU Standard Contractual Clauses (SCC). Google LLC (SUA) — Google Analytics 4 (ID: G-20PR5SV2XC), utilizat pentru analiza statistică anonimă a traficului (pagini vizitate, surse de trafic, durată sesiune). Google Analytics este activat DOAR după acceptarea bannerului de cookies. Implementăm Google Consent Mode v2 — înainte de acceptare, analytics_storage este setat pe \'denied\'. Nu folosim Meta Pixel sau alte instrumente de advertising terț.' },
      { h: '5. Transferuri internaționale de date', p: 'Datele din formularul de contact sunt procesate temporar de Resend Inc. (SUA) exclusiv în scopul livrării e-mailului, în baza EU Standard Contractual Clauses conform Art. 46 GDPR. Ulterior transmiterii, datele sunt stocate exclusiv pe serverele de e-mail ale Neofort BIZ SRL (UE).' },
      { h: '6. Perioada de retenție', p: 'Datele furnizate prin formular sunt păstrate pe durata necesară elaborării ofertei și, dacă se încheie un contract, pe durata contractului plus 5 ani conform obligațiilor legale contabile. Dacă nu se încheie contract, datele sunt șterse în maximum 12 luni de la ultima interacțiune.' },
      { h: '7. Drepturile persoanei vizate', p: 'Conform GDPR aveți dreptul la: Acces (Art. 15) — confirmarea prelucrării și o copie a datelor; Rectificare (Art. 16) — corectarea datelor inexacte; Ștergere (Art. 17) — ștergerea datelor când nu mai sunt necesare; Restricționare (Art. 18) — limitarea prelucrării; Portabilitate (Art. 20) — primirea datelor într-un format structurat; Opoziție (Art. 21) — opunerea prelucrării; Retragerea consimțământului (Art. 7(3)) — fără a afecta legalitatea prelucrării anterioare. Cereri la: oferte@neofort-biz.ro sau Str. Theodor Aman Pictor nr.11, Sector 1, București 010776. Răspuns în 30 de zile.' },
      { h: '8. Dreptul de a depune plângere', p: 'Dacă considerați că drepturile vă sunt încălcate, puteți depune plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP): www.dataprotection.ro · anspdcp@dataprotection.ro · Bd. G-ral. Gh. Magheru 28-30, Sector 1, București.' },
      { h: '9. Cookie-uri', p: 'Site-ul folosește: (1) cookie_ok — cookie tehnic în localStorage, reține confirmarea bannerului, fără date personale; (2) Cookie-uri Google Analytics 4 (_ga, _ga_20PR5SV2XC) — activate DOAR după acceptarea bannerului, stochează date anonime de sesiune, expiră în 2 ani. Nu folosim cookie-uri de publicitate, social media sau tracking de marketing. Puteți șterge cookies din setările browserului în orice moment.' },
      { h: '10. Securitatea datelor', p: 'Datele sunt transmise prin conexiune HTTPS (TLS 1.3). Formularul de contact nu stochează datele pe serverele site-ului — acestea sunt transmise direct prin e-mail la destinatarul intern. Fișierele atașate sunt transmise și șterse din sistemul de procesare după livrare.' },
    ],
  },
  en: {
    label: 'Neofort BIZ',
    h1: 'Privacy Policy (GDPR)',
    sub: 'Processing of personal data in accordance with EU Regulation 2016/679 (GDPR). Last updated: March 2026.',
    title_meta: 'Privacy Policy · Neofort BIZ',
    desc_meta: 'Neofort BIZ SRL Privacy Policy — data collected, purpose of processing, GDPR rights, cookies and third-party processors.',
    sections: [
      { h: '1. Data Controller', p: 'NEOFORT BIZ SRL, 11 Theodor Aman Pictor St., Sector 1, Bucharest 010776, Romania. VAT: RO30324211. E-mail: oferte@neofort-biz.ro · Phone: +40 752 443 435.' },
      { h: '2. Personal Data Collected', p: 'Through the contact form we collect: (a) Full name; (b) Phone number; (c) E-mail address; (d) Delivery address; (e) Attached files (sketches, plans, photos — maximum 7 files); (f) Requested service option. We do not collect sensitive data (medical, ethnic, biometric, etc.).' },
      { h: '3. Purpose and Legal Basis of Processing', p: 'Data is processed under Art. 6(1)(b) GDPR — performance of a contract or pre-contractual measures at the request of the data subject. Purposes: preparing requested price quotes, related commercial communication, execution of supply and installation contracts.' },
      { h: '4. Authorised Third-Party Processors', p: 'Resend Inc. (USA) — email delivery service, processes form data exclusively to transmit the message to the internal recipient oferte@neofort-biz.ro. Resend Inc. is certified under EU Standard Contractual Clauses (SCC). Google LLC (USA) — Google Analytics 4 (ID: G-20PR5SV2XC), used for anonymous statistical analysis of traffic (pages visited, traffic sources, session duration). Google Analytics is activated ONLY after accepting the cookie banner. We implement Google Consent Mode v2 — before acceptance, analytics_storage is set to \'denied\'. We do not use Meta Pixel or other advertising tools.' },
      { h: '5. International Data Transfers', p: 'Contact form data is temporarily processed by Resend Inc. (USA) solely for email delivery, under EU Standard Contractual Clauses pursuant to Art. 46 GDPR. After delivery, data is stored exclusively on Neofort BIZ SRL email servers (EU).' },
      { h: '6. Retention Period', p: 'Data provided through the form is retained for the duration necessary to prepare the quote and, if a contract is concluded, for the contract duration plus 5 years in accordance with legal accounting obligations. If no contract is concluded, data is deleted within 12 months of the last interaction.' },
      { h: '7. Rights of the Data Subject', p: 'Under GDPR you have the right to: Access (Art. 15); Rectification (Art. 16); Erasure (Art. 17); Restriction of processing (Art. 18); Data portability (Art. 20); Objection (Art. 21); Withdrawal of consent (Art. 7(3)) without affecting the lawfulness of prior processing. Submit requests to: oferte@neofort-biz.ro or 11 Theodor Aman Pictor St., Sector 1, Bucharest 010776. Response within 30 days.' },
      { h: '8. Right to Lodge a Complaint', p: 'If you believe your rights have been violated, you may lodge a complaint with the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP): www.dataprotection.ro · anspdcp@dataprotection.ro · 28-30 G-ral. Gh. Magheru Blvd., Sector 1, Bucharest.' },
      { h: '9. Cookies', p: 'This site uses: (1) cookie_ok — technical cookie in localStorage, remembers banner confirmation, no personal data; (2) Google Analytics 4 cookies (_ga, _ga_20PR5SV2XC) — activated ONLY after accepting the banner, store anonymous session data, expire in 2 years. We do not use advertising, social media or marketing tracking cookies. You can delete cookies from your browser settings at any time.' },
      { h: '10. Data Security', p: 'Data is transmitted via HTTPS connection (TLS 1.3). The contact form does not store data on site servers — it is transmitted directly by email to the internal recipient. Attached files are transmitted and deleted from the processing system after delivery.' },
    ],
  },
  de: {
    label: 'Neofort BIZ',
    h1: 'Datenschutzerklärung (DSGVO)',
    sub: 'Verarbeitung personenbezogener Daten gemäß EU-Verordnung 2016/679 (DSGVO). Letzte Aktualisierung: März 2026.',
    title_meta: 'Datenschutz · Neofort BIZ',
    desc_meta: 'Datenschutzerklärung Neofort BIZ SRL — erhobene Daten, Verarbeitungszweck, DSGVO-Rechte, Cookies und Drittanbieter.',
    sections: [
      { h: '1. Verantwortlicher', p: 'NEOFORT BIZ SRL, Str. Theodor Aman Pictor Nr. 11, Sektor 1, Bukarest 010776, Rumänien. USt-ID: RO30324211. E-Mail: oferte@neofort-biz.ro · Tel.: +40 752 443 435.' },
      { h: '2. Erhobene personenbezogene Daten', p: 'Über das Kontaktformular erheben wir: (a) Vor- und Nachname; (b) Telefonnummer; (c) E-Mail-Adresse; (d) Lieferadresse; (e) Angehängte Dateien (Skizzen, Pläne, Fotos — maximal 7 Dateien); (f) Gewünschte Serviceoption. Wir erheben keine sensiblen Daten.' },
      { h: '3. Zweck und Rechtsgrundlage der Verarbeitung', p: 'Daten werden gemäß Art. 6(1)(b) DSGVO verarbeitet — Vertragserfüllung oder vorvertragliche Maßnahmen auf Anfrage der betroffenen Person. Zwecke: Erstellung angeforderter Preisangebote, zugehörige kommerzielle Kommunikation, Ausführung von Liefer- und Montageverträgen.' },
      { h: '4. Autorisierte Drittanbieter', p: 'Resend Inc. (USA) — E-Mail-Zustelldienst, verarbeitet Formulardaten ausschließlich zur Übermittlung der Nachricht an den internen Empfänger oferte@neofort-biz.ro. Resend Inc. ist nach EU Standard Contractual Clauses (SCC) zertifiziert. Google LLC (USA) — Google Analytics 4 (ID: G-20PR5SV2XC), für anonyme statistische Verkehrsanalyse (besuchte Seiten, Verkehrsquellen, Sitzungsdauer). Google Analytics wird NUR nach Akzeptieren des Cookie-Banners aktiviert. Wir implementieren Google Consent Mode v2 — vor der Akzeptanz ist analytics_storage auf \'denied\' gesetzt. Wir verwenden kein Meta Pixel oder andere Werbe-Tools.' },
      { h: '5. Internationale Datenübertragungen', p: 'Kontaktformulardaten werden vorübergehend von Resend Inc. (USA) ausschließlich zur E-Mail-Zustellung verarbeitet, gemäß EU Standard Contractual Clauses nach Art. 46 DSGVO. Nach Zustellung werden Daten ausschließlich auf EU-Servern von Neofort BIZ SRL gespeichert.' },
      { h: '6. Speicherdauer', p: 'Formulardaten werden für die zur Angebotserstellung erforderliche Dauer aufbewahrt und bei Vertragsschluss für die Vertragslaufzeit plus 5 Jahre gemäß gesetzlicher Buchführungspflichten. Ohne Vertragsschluss werden Daten innerhalb von 12 Monaten nach der letzten Interaktion gelöscht.' },
      { h: '7. Rechte der betroffenen Person', p: 'Gemäß DSGVO haben Sie das Recht auf: Auskunft (Art. 15); Berichtigung (Art. 16); Löschung (Art. 17); Einschränkung der Verarbeitung (Art. 18); Datenübertragbarkeit (Art. 20); Widerspruch (Art. 21); Widerruf der Einwilligung (Art. 7(3)). Anfragen an: oferte@neofort-biz.ro. Antwort innerhalb von 30 Tagen.' },
      { h: '8. Beschwerderecht', p: 'Bei vermuteten Rechtsverletzungen können Sie eine Beschwerde bei der rumänischen Datenschutzbehörde (ANSPDCP) einreichen: www.dataprotection.ro · anspdcp@dataprotection.ro · Bd. G-ral. Gh. Magheru 28-30, Sektor 1, Bukarest.' },
      { h: '9. Cookies', p: 'Diese Website verwendet: (1) cookie_ok — technisches Cookie im localStorage, merkt die Banner-Bestätigung, keine persönlichen Daten; (2) Google Analytics 4 Cookies (_ga, _ga_20PR5SV2XC) — NUR nach Akzeptieren des Banners aktiviert, speichern anonyme Sitzungsdaten, laufen nach 2 Jahren ab. Wir verwenden keine Werbe-, Social-Media- oder Marketing-Tracking-Cookies. Sie können Cookies jederzeit in Ihren Browsereinstellungen löschen.' },
      { h: '10. Datensicherheit', p: 'Daten werden über HTTPS (TLS 1.3) übertragen. Das Kontaktformular speichert keine Daten auf Site-Servern — sie werden direkt per E-Mail an den internen Empfänger übermittelt. Angehängte Dateien werden nach Zustellung aus dem Verarbeitungssystem gelöscht.' },
    ],
  },
  fr: {
    label: 'Neofort BIZ',
    h1: 'Politique de Confidentialité (RGPD)',
    sub: 'Traitement des données personnelles conformément au Règlement UE 2016/679 (RGPD). Dernière mise à jour : Mars 2026.',
    title_meta: 'Politique de confidentialité · Neofort BIZ',
    desc_meta: 'Politique de confidentialité Neofort BIZ SRL — données collectées, finalité du traitement, droits RGPD, cookies et sous-traitants.',
    sections: [
      { h: '1. Responsable du traitement', p: 'NEOFORT BIZ SRL, 11 rue Theodor Aman Pictor, Secteur 1, Bucarest 010776, Roumanie. TVA : RO30324211. E-mail : oferte@neofort-biz.ro · Tél. : +40 752 443 435.' },
      { h: '2. Données personnelles collectées', p: 'Via le formulaire de contact nous collectons : (a) Nom et prénom ; (b) Numéro de téléphone ; (c) Adresse e-mail ; (d) Adresse de livraison ; (e) Fichiers joints (croquis, plans, photos — maximum 7 fichiers) ; (f) Option de service demandée. Nous ne collectons pas de données sensibles.' },
      { h: '3. Finalité et base juridique du traitement', p: 'Les données sont traitées en vertu de l\'Art. 6(1)(b) RGPD — exécution d\'un contrat ou mesures précontractuelles à la demande de la personne concernée. Finalités : élaboration des devis demandés, communication commerciale associée, exécution des contrats de fourniture et pose.' },
      { h: '4. Sous-traitants tiers autorisés', p: 'Resend Inc. (États-Unis) — service de distribution d\'e-mails, traite les données du formulaire exclusivement pour transmettre le message au destinataire interne oferte@neofort-biz.ro. Resend Inc. est certifié selon les Clauses Contractuelles Types (CCT) de l\'UE. Google LLC (États-Unis) — Google Analytics 4 (ID : G-20PR5SV2XC), utilisé pour l\'analyse statistique anonyme du trafic (pages visitées, sources de trafic, durée de session). Google Analytics est activé UNIQUEMENT après acceptation de la bannière cookies. Nous implémentons Google Consent Mode v2 — avant acceptation, analytics_storage est défini sur \'denied\'. Nous n\'utilisons pas Meta Pixel ou d\'autres outils publicitaires.' },
      { h: '5. Transferts internationaux de données', p: 'Les données du formulaire sont temporairement traitées par Resend Inc. (États-Unis) uniquement pour la livraison des e-mails, en vertu des Clauses Contractuelles Types selon l\'Art. 46 RGPD. Après livraison, les données sont stockées exclusivement sur les serveurs de messagerie UE de Neofort BIZ SRL.' },
      { h: '6. Durée de conservation', p: 'Les données sont conservées le temps nécessaire à l\'élaboration du devis et, en cas de contrat, pour la durée du contrat plus 5 ans conformément aux obligations comptables légales. Sans contrat, les données sont supprimées dans les 12 mois suivant la dernière interaction.' },
      { h: '7. Droits de la personne concernée', p: 'Conformément au RGPD vous avez le droit d\'accès (Art. 15), de rectification (Art. 16), d\'effacement (Art. 17), de limitation (Art. 18), de portabilité (Art. 20), d\'opposition (Art. 21) et de retrait du consentement (Art. 7(3)). Demandes à : oferte@neofort-biz.ro. Réponse sous 30 jours.' },
      { h: '8. Droit de réclamation', p: 'En cas de violation présumée de vos droits, vous pouvez déposer une plainte auprès de l\'ANSPDCP (Autorité nationale roumaine) : www.dataprotection.ro · anspdcp@dataprotection.ro.' },
      { h: '9. Cookies', p: 'Ce site utilise : (1) cookie_ok — cookie technique dans le localStorage, mémorise la confirmation de la bannière, sans données personnelles ; (2) Cookies Google Analytics 4 (_ga, _ga_20PR5SV2XC) — activés UNIQUEMENT après acceptation de la bannière, stockent des données de session anonymes, expirent après 2 ans. Nous n\'utilisons pas de cookies publicitaires, de réseaux sociaux ou de suivi marketing. Vous pouvez supprimer les cookies depuis les paramètres de votre navigateur.' },
      { h: '10. Sécurité des données', p: 'Les données sont transmises via HTTPS (TLS 1.3). Le formulaire ne stocke aucune donnée sur les serveurs du site — elles sont transmises directement par e-mail au destinataire interne. Les fichiers joints sont supprimés du système de traitement après livraison.' },
    ],
  },
  es: {
    label: 'Neofort BIZ',
    h1: 'Política de Privacidad (RGPD)',
    sub: 'Tratamiento de datos personales conforme al Reglamento UE 2016/679 (RGPD). Última actualización: Marzo 2026.',
    title_meta: 'Política de privacidad · Neofort BIZ',
    desc_meta: 'Política de privacidad Neofort BIZ SRL — datos recopilados, finalidad del tratamiento, derechos RGPD, cookies y subencargados.',
    sections: [
      { h: '1. Responsable del tratamiento', p: 'NEOFORT BIZ SRL, C/ Theodor Aman Pictor 11, Sector 1, Bucarest 010776, Rumanía. CIF: RO30324211. E-mail: oferte@neofort-biz.ro · Tel.: +40 752 443 435.' },
      { h: '2. Datos personales recopilados', p: 'A través del formulario de contacto recopilamos: (a) Nombre y apellidos; (b) Número de teléfono; (c) Dirección de e-mail; (d) Dirección de entrega; (e) Archivos adjuntos (bocetos, planos, fotos — máximo 7 archivos); (f) Opción de servicio solicitada. No recopilamos datos sensibles.' },
      { h: '3. Finalidad y base jurídica del tratamiento', p: 'Los datos se tratan conforme al Art. 6(1)(b) RGPD — ejecución de un contrato o medidas precontractuales a petición del interesado. Finalidades: elaboración de presupuestos solicitados, comunicación comercial asociada, ejecución de contratos de suministro e instalación.' },
      { h: '4. Subencargados autorizados', p: 'Resend Inc. (EE.UU.) — servicio de entrega de e-mail, trata los datos del formulario exclusivamente para transmitir el mensaje al destinatario interno oferte@neofort-biz.ro. Resend Inc. está certificado conforme a las Cláusulas Contractuales Tipo (CCT) de la UE. No utilizamos Google Analytics, Meta Pixel ni ninguna otra herramienta de seguimiento de terceros.' },
      { h: '5. Transferencias internacionales de datos', p: 'Los datos del formulario son procesados temporalmente por Resend Inc. (EE.UU.) exclusivamente para la entrega del e-mail, en virtud de las Cláusulas Contractuales Tipo conforme al Art. 46 RGPD. Tras la entrega, los datos se almacenan exclusivamente en servidores UE de Neofort BIZ SRL.' },
      { h: '6. Período de conservación', p: 'Los datos se conservan el tiempo necesario para elaborar el presupuesto y, si se celebra contrato, durante la vigencia del contrato más 5 años conforme a las obligaciones contables legales. Sin contrato, los datos se eliminan en 12 meses desde la última interacción.' },
      { h: '7. Derechos del interesado', p: 'Conforme al RGPD tiene derecho de acceso (Art. 15), rectificación (Art. 16), supresión (Art. 17), limitación (Art. 18), portabilidad (Art. 20), oposición (Art. 21) y retirada del consentimiento (Art. 7(3)). Solicitudes a: oferte@neofort-biz.ro. Respuesta en 30 días.' },
      { h: '8. Derecho a reclamar', p: 'Si considera que sus derechos han sido vulnerados, puede presentar una reclamación ante la ANSPDCP (Autoridad nacional rumana): www.dataprotection.ro · anspdcp@dataprotection.ro.' },
      { h: '9. Cookies', p: 'Este sitio utiliza: (1) cookie_ok — cookie técnica en localStorage, recuerda la confirmación del banner, sin datos personales; (2) Cookies de Google Analytics 4 (_ga, _ga_20PR5SV2XC) — activadas SOLO tras aceptar el banner, almacenan datos de sesión anónimos, expiran en 2 años. No utilizamos cookies de publicidad, redes sociales o seguimiento de marketing. Puede eliminar las cookies desde la configuración de su navegador.' },
      { h: '10. Seguridad de los datos', p: 'Los datos se transmiten mediante HTTPS (TLS 1.3). El formulario no almacena datos en los servidores del sitio — se transmiten directamente por e-mail al destinatario interno. Los archivos adjuntos se eliminan del sistema de procesamiento tras la entrega.' },
    ],
  },
  it: {
    label: 'Neofort BIZ',
    h1: 'Informativa sulla Privacy (GDPR)',
    sub: 'Trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR). Ultimo aggiornamento: Marzo 2026.',
    title_meta: 'Informativa privacy · Neofort BIZ',
    desc_meta: 'Informativa privacy Neofort BIZ SRL — dati raccolti, finalità del trattamento, diritti GDPR, cookie e responsabili esterni.',
    sections: [
      { h: '1. Titolare del trattamento', p: 'NEOFORT BIZ SRL, Via Theodor Aman Pictor 11, Settore 1, Bucarest 010776, Romania. P.IVA: RO30324211. E-mail: oferte@neofort-biz.ro · Tel.: +40 752 443 435.' },
      { h: '2. Dati personali raccolti', p: 'Tramite il modulo di contatto raccogliamo: (a) Nome e cognome; (b) Numero di telefono; (c) Indirizzo e-mail; (d) Indirizzo di consegna; (e) File allegati (schizzi, planimetrie, foto — massimo 7 file); (f) Opzione di servizio richiesta. Non raccogliamo dati sensibili.' },
      { h: '3. Finalità e base giuridica del trattamento', p: 'I dati sono trattati ai sensi dell\'Art. 6(1)(b) GDPR — esecuzione di un contratto o misure precontrattuali su richiesta dell\'interessato. Finalità: elaborazione dei preventivi richiesti, comunicazione commerciale correlata, esecuzione di contratti di fornitura e installazione.' },
      { h: '4. Responsabili esterni autorizzati', p: 'Resend Inc. (USA) — servizio di consegna e-mail, tratta i dati del modulo esclusivamente per trasmettere il messaggio al destinatario interno oferte@neofort-biz.ro. Resend Inc. è certificato ai sensi delle Clausole Contrattuali Standard (CCS) UE. Google LLC (USA) — Google Analytics 4 (ID: G-20PR5SV2XC), utilizzato per l\'analisi statistica anonima del traffico (pagine visitate, fonti di traffico, durata della sessione). Google Analytics viene attivato SOLO dopo l\'accettazione del banner cookie. Implementiamo Google Consent Mode v2 — prima dell\'accettazione, analytics_storage è impostato su \'denied\'. Non utilizziamo Meta Pixel o altri strumenti pubblicitari.' },
      { h: '5. Trasferimenti internazionali di dati', p: 'I dati del modulo vengono temporaneamente trattati da Resend Inc. (USA) esclusivamente per la consegna dell\'e-mail, in base alle Clausole Contrattuali Standard ai sensi dell\'Art. 46 GDPR. Dopo la consegna, i dati sono archiviati esclusivamente sui server UE di Neofort BIZ SRL.' },
      { h: '6. Periodo di conservazione', p: 'I dati vengono conservati per il tempo necessario all\'elaborazione del preventivo e, in caso di contratto, per la durata del contratto più 5 anni in conformità agli obblighi contabili legali. Senza contratto, i dati vengono cancellati entro 12 mesi dall\'ultima interazione.' },
      { h: '7. Diritti dell\'interessato', p: 'Ai sensi del GDPR ha diritto di accesso (Art. 15), rettifica (Art. 16), cancellazione (Art. 17), limitazione (Art. 18), portabilità (Art. 20), opposizione (Art. 21) e revoca del consenso (Art. 7(3)). Richieste a: oferte@neofort-biz.ro. Risposta entro 30 giorni.' },
      { h: '8. Diritto di reclamo', p: 'In caso di presunta violazione dei diritti, può presentare reclamo all\'ANSPDCP (Autorità nazionale rumena): www.dataprotection.ro · anspdcp@dataprotection.ro.' },
      { h: '9. Cookie', p: 'Questo sito utilizza: (1) cookie_ok — cookie tecnico nel localStorage, ricorda la conferma del banner, nessun dato personale; (2) Cookie di Google Analytics 4 (_ga, _ga_20PR5SV2XC) — attivati SOLO dopo l\'accettazione del banner, memorizzano dati di sessione anonimi, scadono dopo 2 anni. Non utilizziamo cookie pubblicitari, di social media o di tracciamento marketing. Può eliminare i cookie dalle impostazioni del browser in qualsiasi momento.' },
      { h: '10. Sicurezza dei dati', p: 'I dati vengono trasmessi tramite HTTPS (TLS 1.3). Il modulo non archivia dati sui server del sito — vengono trasmessi direttamente via e-mail al destinatario interno. I file allegati vengono eliminati dal sistema di elaborazione dopo la consegna.' },
    ],
  },
};


export async function generateMetadata({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const slug = SLUGS_GDPR[locale] || SLUGS_GDPR.ro;
  return {
    title: ui.title_meta,
    description: ui.desc_meta,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: Object.fromEntries(Object.entries(SLUGS_GDPR).map(([l,s])=>[l,`${BASE}/${l}/${s}`])),
    },
  };
}

export default async function GdprPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': ui.h1 + ' — Neofort BIZ',
    'url': `${BASE}/${locale}/${SLUGS_GDPR[locale] || 'gdpr'}`,
    'isPartOf': { '@id': `${BASE}/#website` },
    'inLanguage': locale,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted">{ui.sub}</p>
        </div>
      </div>
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-sm max-w-none space-y-8 text-[0.88rem] text-muted leading-relaxed">
            {ui.sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-condensed text-xl font-semibold text-primary mb-3">{s.h}</h2>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
