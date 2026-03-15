const BASE = 'https://www.neofort-biz.ro';
const SLUGS_GDPR = {ro:'gdpr',en:'privacy-policy',de:'datenschutz',fr:'politique-confidentialite',es:'politica-privacidad',it:'informativa-privacy'};

const UI = {
  ro: {
    label: 'Neofort BIZ',
    h1: 'Politica GDPR',
    sub: 'Prelucrarea datelor cu caracter personal conform Regulamentului UE 2016/679.',
    title_meta: 'GDPR — Politica de Confidențialitate · Neofort BIZ',
    desc_meta: 'Politica de confidențialitate și prelucrarea datelor cu caracter personal Neofort BIZ.',
    sections: [
      { h: '1. Operator de date', p: 'Neofort BIZ SRL, Str. Theodor Aman Pictor 11, Sector 1, București 010776, România. E-mail: office@neofort-biz.ro' },
      { h: '2. Date colectate', p: 'Colectăm datele furnizate voluntar prin formularul de contact: nume, telefon, adresă de e-mail, detalii cerere. Nu colectăm date sensibile.' },
      { h: '3. Scopul prelucrării', p: 'Datele sunt utilizate exclusiv pentru elaborarea ofertelor solicitate, comunicarea comercială aferentă și executarea contractelor.' },
      { h: '4. Drepturile persoanei vizate', p: 'Aveți dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție. Cererea se transmite la office@neofort-biz.ro.' },
      { h: '5. Stocare și securitate', p: 'Datele sunt stocate pe servere securizate în UE și nu sunt transferate către terți în afara UE fără consimțământul explicit al persoanei vizate.' },
      { h: '6. Cookie-uri', p: 'Site-ul folosește exclusiv cookie-uri tehnice necesare funcționării. Nu folosim cookie-uri de tracking, publicitate sau analiză.' },
    ],
  },
  en: {
    label: 'Neofort BIZ',
    h1: 'Privacy Policy',
    sub: 'Processing of personal data in accordance with EU Regulation 2016/679 (GDPR).',
    title_meta: 'Privacy Policy · Neofort BIZ',
    desc_meta: 'Privacy policy and personal data processing at Neofort BIZ.',
    sections: [
      { h: '1. Data Controller', p: 'Neofort BIZ SRL, Str. Theodor Aman Pictor 11, Sector 1, Bucharest 010776, Romania. E-mail: office@neofort-biz.ro' },
      { h: '2. Data Collected', p: 'We collect data provided voluntarily through the contact form: name, phone, e-mail address, request details. We do not collect sensitive data.' },
      { h: '3. Purpose of Processing', p: 'Data is used exclusively for preparing requested quotes, related commercial communication and contract execution.' },
      { h: '4. Your Rights', p: 'You have the right to access, rectification, erasure, restriction, portability and objection. Requests should be sent to office@neofort-biz.ro.' },
      { h: '5. Storage and Security', p: 'Data is stored on secure servers in the EU and is not transferred to third parties outside the EU without explicit consent.' },
      { h: '6. Cookies', p: 'This site uses only technically necessary cookies. We do not use tracking, advertising or analytics cookies.' },
    ],
  },
  de: {
    label: 'Neofort BIZ',
    h1: 'Datenschutzerklärung',
    sub: 'Verarbeitung personenbezogener Daten gemäß EU-Verordnung 2016/679 (DSGVO).',
    title_meta: 'Datenschutz · Neofort BIZ',
    desc_meta: 'Datenschutzerklärung und Verarbeitung personenbezogener Daten bei Neofort BIZ.',
    sections: [
      { h: '1. Verantwortlicher', p: 'Neofort BIZ SRL, Str. Theodor Aman Pictor 11, Sektor 1, Bukarest 010776, Rumänien. E-Mail: office@neofort-biz.ro' },
      { h: '2. Erhobene Daten', p: 'Wir erheben freiwillig übermittelte Daten über das Kontaktformular: Name, Telefon, E-Mail-Adresse, Anforderungsdetails. Wir erheben keine sensiblen Daten.' },
      { h: '3. Zweck der Verarbeitung', p: 'Die Daten werden ausschließlich zur Erstellung angeforderter Angebote, zugehöriger kommerzieller Kommunikation und Vertragserfüllung verwendet.' },
      { h: '4. Ihre Rechte', p: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit und Widerspruch. Anfragen an office@neofort-biz.ro.' },
      { h: '5. Speicherung und Sicherheit', p: 'Daten werden auf sicheren Servern in der EU gespeichert und ohne ausdrückliche Einwilligung nicht an Dritte außerhalb der EU übertragen.' },
      { h: '6. Cookies', p: 'Diese Website verwendet ausschließlich technisch notwendige Cookies. Wir verwenden keine Tracking-, Werbe- oder Analyse-Cookies.' },
    ],
  },
  fr: {
    label: 'Neofort BIZ',
    h1: 'Politique de confidentialité',
    sub: 'Traitement des données personnelles conformément au Règlement UE 2016/679 (RGPD).',
    title_meta: 'Politique de confidentialité · Neofort BIZ',
    desc_meta: 'Politique de confidentialité et traitement des données personnelles chez Neofort BIZ.',
    sections: [
      { h: '1. Responsable du traitement', p: 'Neofort BIZ SRL, Str. Theodor Aman Pictor 11, Secteur 1, Bucarest 010776, Roumanie. E-mail : office@neofort-biz.ro' },
      { h: '2. Données collectées', p: 'Nous collectons les données fournies volontairement via le formulaire de contact : nom, téléphone, adresse e-mail, détails de la demande. Nous ne collectons pas de données sensibles.' },
      { h: '3. Finalité du traitement', p: 'Les données sont utilisées exclusivement pour l\'élaboration des devis demandés, la communication commerciale associée et l\'exécution des contrats.' },
      { h: '4. Vos droits', p: 'Vous disposez du droit d\'accès, de rectification, d\'effacement, de limitation, de portabilité et d\'opposition. Les demandes sont à envoyer à office@neofort-biz.ro.' },
      { h: '5. Stockage et sécurité', p: 'Les données sont stockées sur des serveurs sécurisés dans l\'UE et ne sont pas transférées à des tiers hors UE sans consentement explicite.' },
      { h: '6. Cookies', p: 'Ce site utilise uniquement des cookies techniques nécessaires. Nous n\'utilisons pas de cookies de suivi, publicitaires ou analytiques.' },
    ],
  },
  es: {
    label: 'Neofort BIZ',
    h1: 'Política de privacidad',
    sub: 'Tratamiento de datos personales conforme al Reglamento UE 2016/679 (RGPD).',
    title_meta: 'Política de privacidad · Neofort BIZ',
    desc_meta: 'Política de privacidad y tratamiento de datos personales en Neofort BIZ.',
    sections: [
      { h: '1. Responsable del tratamiento', p: 'Neofort BIZ SRL, Str. Theodor Aman Pictor 11, Sector 1, Bucarest 010776, Rumanía. E-mail: office@neofort-biz.ro' },
      { h: '2. Datos recopilados', p: 'Recopilamos los datos proporcionados voluntariamente a través del formulario de contacto: nombre, teléfono, dirección de correo electrónico, detalles de la solicitud. No recopilamos datos sensibles.' },
      { h: '3. Finalidad del tratamiento', p: 'Los datos se utilizan exclusivamente para la elaboración de presupuestos solicitados, la comunicación comercial asociada y la ejecución de contratos.' },
      { h: '4. Sus derechos', p: 'Tiene derecho de acceso, rectificación, supresión, limitación, portabilidad y oposición. Las solicitudes deben enviarse a office@neofort-biz.ro.' },
      { h: '5. Almacenamiento y seguridad', p: 'Los datos se almacenan en servidores seguros en la UE y no se transfieren a terceros fuera de la UE sin consentimiento explícito.' },
      { h: '6. Cookies', p: 'Este sitio utiliza únicamente cookies técnicas necesarias. No utilizamos cookies de seguimiento, publicidad ni analítica.' },
    ],
  },
  it: {
    label: 'Neofort BIZ',
    h1: 'Informativa sulla privacy',
    sub: 'Trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).',
    title_meta: 'Informativa sulla privacy · Neofort BIZ',
    desc_meta: 'Informativa sulla privacy e trattamento dei dati personali di Neofort BIZ.',
    sections: [
      { h: '1. Titolare del trattamento', p: 'Neofort BIZ SRL, Str. Theodor Aman Pictor 11, Settore 1, Bucarest 010776, Romania. E-mail: office@neofort-biz.ro' },
      { h: '2. Dati raccolti', p: 'Raccogliamo i dati forniti volontariamente tramite il modulo di contatto: nome, telefono, indirizzo e-mail, dettagli della richiesta. Non raccogliamo dati sensibili.' },
      { h: '3. Finalità del trattamento', p: 'I dati sono utilizzati esclusivamente per la preparazione dei preventivi richiesti, la comunicazione commerciale correlata e l\'esecuzione dei contratti.' },
      { h: '4. I vostri diritti', p: 'Avete il diritto di accesso, rettifica, cancellazione, limitazione, portabilità e opposizione. Le richieste vanno inviate a office@neofort-biz.ro.' },
      { h: '5. Conservazione e sicurezza', p: 'I dati sono conservati su server sicuri nell\'UE e non vengono trasferiti a terzi al di fuori dell\'UE senza consenso esplicito.' },
      { h: '6. Cookie', p: 'Questo sito utilizza esclusivamente cookie tecnici necessari. Non utilizziamo cookie di tracciamento, pubblicitari o analitici.' },
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
