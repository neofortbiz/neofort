const BASE = 'https://www.neofort-biz.ro';
const SLUGS = {
  ro: 'cookies',
  en: 'cookie-policy',
  de: 'cookie-richtlinie',
  fr: 'politique-cookies',
  es: 'politica-cookies',
  it: 'politica-cookie',
};

const UI = {
  ro: {
    label: 'Neofort BIZ',
    h1: 'Politica de Cookies',
    sub: 'Informații despre cookie-urile utilizate pe neofort-biz.ro. Ultima actualizare: Martie 2026.',
    title_meta: 'Politica de Cookies · Neofort BIZ',
    desc_meta: 'Politica de cookies Neofort BIZ — ce cookie-uri folosim, cum funcționează și cum le puteți gestiona.',
    gdpr_link_label: 'Politica GDPR completă',
    sections: [
      { h: '1. Ce este un cookie?', p: 'Un cookie este un fișier text de mici dimensiuni stocat de browser pe dispozitivul dumneavoastră atunci când vizitați un site web. Cookie-urile permit site-ului să vă recunoască la vizite ulterioare și să rețină anumite preferințe sau acțiuni.' },
      { h: '2. Ce cookie-uri folosim', p: 'Neofort BIZ folosește un singur cookie tehnic, strict necesar funcționării site-ului: cookie_ok (tip: localStorage) — reține dacă ați confirmat bannerul de cookies. Valabilitate: persistent până la ștergerea manuală. Scop: funcțional, nu analitic. Nu există date personale stocate în acest cookie.' },
      { h: '3. Cookie-uri de la terți', p: 'Nu folosim cookie-uri de la terți. Nu este integrat Google Analytics, Google Tag Manager, Meta Pixel, Hotjar, Clarity sau niciun alt serviciu de tracking sau publicitate. Nicio companie terță nu plasează cookie-uri prin intermediul site-ului nostru.' },
      { h: '4. Cookie-uri de sesiune vs. persistente', p: 'Cookie-ul cookie_ok este de tip persistent (stocat în localStorage) și rămâne pe dispozitivul dumneavoastră până când îl ștergeți manual din browser. Nu folosim cookie-uri de sesiune care expiră la închiderea browserului.' },
      { h: '5. Cum puteți gestiona cookie-urile', p: 'Puteți șterge sau bloca cookie-urile în orice moment din setările browserului: Chrome: Setări → Confidențialitate → Cookie-uri; Firefox: Opțiuni → Confidențialitate → Cookie-uri; Safari: Preferințe → Confidențialitate; Edge: Setări → Cookie-uri. Ștergerea cookie-ului cookie_ok va face ca bannerul de cookies să apară din nou la următoarea vizită.' },
      { h: '6. Consimțământ', p: 'La prima vizită pe site, vă este afișat un banner de cookies. Apăsând "Accept", confirmați utilizarea cookie-ului tehnic descris mai sus. Deoarece folosim exclusiv un cookie tehnic strict necesar, site-ul funcționează normal și fără acceptarea bannerului.' },
      { h: '7. Contact', p: 'Pentru orice întrebare despre politica noastră de cookies: oferte@neofort-biz.ro · NEOFORT BIZ SRL, Str. Theodor Aman Pictor nr.11, Sector 1, București 010776.' },
    ],
  },
  en: {
    label: 'Neofort BIZ',
    h1: 'Cookie Policy',
    sub: 'Information about cookies used on neofort-biz.ro. Last updated: March 2026.',
    title_meta: 'Cookie Policy · Neofort BIZ',
    desc_meta: 'Neofort BIZ Cookie Policy — what cookies we use, how they work and how you can manage them.',
    gdpr_link_label: 'Full Privacy Policy (GDPR)',
    sections: [
      { h: '1. What is a cookie?', p: 'A cookie is a small text file stored by your browser on your device when you visit a website. Cookies allow the site to recognise you on subsequent visits and remember certain preferences or actions.' },
      { h: '2. Cookies we use', p: 'Neofort BIZ uses a single technically necessary cookie: cookie_ok (type: localStorage) — remembers whether you have confirmed the cookie banner. Validity: persistent until manually deleted. Purpose: functional, not analytical. No personal data is stored in this cookie.' },
      { h: '3. Third-party cookies', p: 'We do not use third-party cookies. Google Analytics, Google Tag Manager, Meta Pixel, Hotjar, Clarity and any other tracking or advertising services are not integrated. No third party places cookies through our website.' },
      { h: '4. Session vs. persistent cookies', p: 'The cookie_ok cookie is persistent (stored in localStorage) and remains on your device until you manually delete it from your browser. We do not use session cookies that expire when the browser is closed.' },
      { h: '5. How to manage cookies', p: 'You can delete or block cookies at any time from your browser settings: Chrome: Settings → Privacy → Cookies; Firefox: Options → Privacy → Cookies; Safari: Preferences → Privacy; Edge: Settings → Cookies. Deleting the cookie_ok cookie will cause the cookie banner to reappear on your next visit.' },
      { h: '6. Consent', p: 'On your first visit to the site, a cookie banner is displayed. By clicking "Accept", you confirm the use of the technical cookie described above. Since we use exclusively a strictly necessary technical cookie, the site functions normally even without accepting the banner.' },
      { h: '7. Contact', p: 'For any questions about our cookie policy: oferte@neofort-biz.ro · NEOFORT BIZ SRL, 11 Theodor Aman Pictor St., Sector 1, Bucharest 010776, Romania.' },
    ],
  },
  de: {
    label: 'Neofort BIZ',
    h1: 'Cookie-Richtlinie',
    sub: 'Informationen über Cookies auf neofort-biz.ro. Letzte Aktualisierung: März 2026.',
    title_meta: 'Cookie-Richtlinie · Neofort BIZ',
    desc_meta: 'Neofort BIZ Cookie-Richtlinie — welche Cookies wir verwenden, wie sie funktionieren und wie Sie sie verwalten können.',
    gdpr_link_label: 'Vollständige Datenschutzerklärung (DSGVO)',
    sections: [
      { h: '1. Was ist ein Cookie?', p: 'Ein Cookie ist eine kleine Textdatei, die Ihr Browser auf Ihrem Gerät speichert, wenn Sie eine Website besuchen. Cookies ermöglichen es der Website, Sie bei späteren Besuchen wiederzuerkennen und bestimmte Einstellungen zu speichern.' },
      { h: '2. Von uns verwendete Cookies', p: 'Neofort BIZ verwendet ein einziges technisch notwendiges Cookie: cookie_ok (Typ: localStorage) — speichert, ob Sie das Cookie-Banner bestätigt haben. Gültigkeit: dauerhaft bis zur manuellen Löschung. Zweck: funktional, nicht analytisch. In diesem Cookie werden keine personenbezogenen Daten gespeichert.' },
      { h: '3. Drittanbieter-Cookies', p: 'Wir verwenden keine Drittanbieter-Cookies. Google Analytics, Google Tag Manager, Meta Pixel, Hotjar, Clarity und andere Tracking- oder Werbedienste sind nicht integriert. Kein Drittanbieter platziert Cookies über unsere Website.' },
      { h: '4. Sitzungs- vs. dauerhafte Cookies', p: 'Das Cookie cookie_ok ist dauerhaft (im localStorage gespeichert) und bleibt auf Ihrem Gerät, bis Sie es manuell in Ihrem Browser löschen. Wir verwenden keine Sitzungscookies, die beim Schließen des Browsers ablaufen.' },
      { h: '5. Cookie-Verwaltung', p: 'Sie können Cookies jederzeit in Ihren Browsereinstellungen löschen oder blockieren: Chrome: Einstellungen → Datenschutz → Cookies; Firefox: Optionen → Datenschutz → Cookies; Safari: Einstellungen → Datenschutz; Edge: Einstellungen → Cookies. Das Löschen des Cookies cookie_ok führt dazu, dass das Cookie-Banner beim nächsten Besuch erneut erscheint.' },
      { h: '6. Einwilligung', p: 'Bei Ihrem ersten Besuch auf der Website wird ein Cookie-Banner angezeigt. Durch Klicken auf "Akzeptieren" bestätigen Sie die Verwendung des oben beschriebenen technischen Cookies. Da wir ausschließlich ein technisch notwendiges Cookie verwenden, funktioniert die Website auch ohne Annahme des Banners normal.' },
      { h: '7. Kontakt', p: 'Bei Fragen zu unserer Cookie-Richtlinie: oferte@neofort-biz.ro · NEOFORT BIZ SRL, Str. Theodor Aman Pictor Nr. 11, Sektor 1, Bukarest 010776, Rumänien.' },
    ],
  },
  fr: {
    label: 'Neofort BIZ',
    h1: 'Politique de Cookies',
    sub: 'Informations sur les cookies utilisés sur neofort-biz.ro. Dernière mise à jour : Mars 2026.',
    title_meta: 'Politique de cookies · Neofort BIZ',
    desc_meta: 'Politique de cookies Neofort BIZ — quels cookies nous utilisons, comment ils fonctionnent et comment les gérer.',
    gdpr_link_label: 'Politique de confidentialité complète (RGPD)',
    sections: [
      { h: '1. Qu\'est-ce qu\'un cookie ?', p: 'Un cookie est un petit fichier texte stocké par votre navigateur sur votre appareil lors de la visite d\'un site web. Les cookies permettent au site de vous reconnaître lors de visites ultérieures et de mémoriser certaines préférences ou actions.' },
      { h: '2. Cookies utilisés', p: 'Neofort BIZ utilise un seul cookie techniquement nécessaire : cookie_ok (type : localStorage) — mémorise si vous avez confirmé la bannière de cookies. Validité : persistant jusqu\'à suppression manuelle. Finalité : fonctionnelle, non analytique. Aucune donnée personnelle n\'est stockée dans ce cookie.' },
      { h: '3. Cookies tiers', p: 'Nous n\'utilisons pas de cookies tiers. Google Analytics, Google Tag Manager, Meta Pixel, Hotjar, Clarity et tout autre service de suivi ou de publicité ne sont pas intégrés. Aucun tiers ne place de cookies via notre site.' },
      { h: '4. Cookies de session vs. persistants', p: 'Le cookie cookie_ok est persistant (stocké dans le localStorage) et reste sur votre appareil jusqu\'à ce que vous le supprimiez manuellement. Nous n\'utilisons pas de cookies de session qui expirent à la fermeture du navigateur.' },
      { h: '5. Gestion des cookies', p: 'Vous pouvez supprimer ou bloquer les cookies à tout moment depuis les paramètres de votre navigateur : Chrome : Paramètres → Confidentialité → Cookies ; Firefox : Options → Vie privée → Cookies ; Safari : Préférences → Confidentialité ; Edge : Paramètres → Cookies. La suppression du cookie cookie_ok fera réapparaître la bannière lors de votre prochaine visite.' },
      { h: '6. Consentement', p: 'Lors de votre première visite, une bannière de cookies s\'affiche. En cliquant sur "Accepter", vous confirmez l\'utilisation du cookie technique décrit ci-dessus. Notre site fonctionnant avec un seul cookie techniquement nécessaire, il fonctionne normalement même sans accepter la bannière.' },
      { h: '7. Contact', p: 'Pour toute question sur notre politique de cookies : oferte@neofort-biz.ro · NEOFORT BIZ SRL, 11 rue Theodor Aman Pictor, Secteur 1, Bucarest 010776, Roumanie.' },
    ],
  },
  es: {
    label: 'Neofort BIZ',
    h1: 'Política de Cookies',
    sub: 'Información sobre las cookies utilizadas en neofort-biz.ro. Última actualización: Marzo 2026.',
    title_meta: 'Política de cookies · Neofort BIZ',
    desc_meta: 'Política de cookies Neofort BIZ — qué cookies utilizamos, cómo funcionan y cómo gestionarlas.',
    gdpr_link_label: 'Política de privacidad completa (RGPD)',
    sections: [
      { h: '1. ¿Qué es una cookie?', p: 'Una cookie es un pequeño archivo de texto almacenado por su navegador en su dispositivo cuando visita un sitio web. Las cookies permiten al sitio reconocerle en visitas posteriores y recordar ciertas preferencias o acciones.' },
      { h: '2. Cookies que utilizamos', p: 'Neofort BIZ utiliza una única cookie técnicamente necesaria: cookie_ok (tipo: localStorage) — recuerda si ha confirmado el banner de cookies. Validez: persistente hasta eliminación manual. Finalidad: funcional, no analítica. No se almacenan datos personales en esta cookie.' },
      { h: '3. Cookies de terceros', p: 'No utilizamos cookies de terceros. Google Analytics, Google Tag Manager, Meta Pixel, Hotjar, Clarity y cualquier otro servicio de seguimiento o publicidad no están integrados. Ningún tercero coloca cookies a través de nuestro sitio.' },
      { h: '4. Cookies de sesión vs. persistentes', p: 'La cookie cookie_ok es persistente (almacenada en localStorage) y permanece en su dispositivo hasta que la elimine manualmente. No utilizamos cookies de sesión que expiran al cerrar el navegador.' },
      { h: '5. Gestión de cookies', p: 'Puede eliminar o bloquear las cookies en cualquier momento desde la configuración de su navegador: Chrome: Configuración → Privacidad → Cookies; Firefox: Opciones → Privacidad → Cookies; Safari: Preferencias → Privacidad; Edge: Configuración → Cookies. Eliminar la cookie cookie_ok hará que el banner reaparezca en su próxima visita.' },
      { h: '6. Consentimiento', p: 'En su primera visita se muestra un banner de cookies. Al hacer clic en "Aceptar", confirma el uso de la cookie técnica descrita. Como solo utilizamos una cookie técnicamente necesaria, el sitio funciona con normalidad aunque no acepte el banner.' },
      { h: '7. Contacto', p: 'Para cualquier pregunta sobre nuestra política de cookies: oferte@neofort-biz.ro · NEOFORT BIZ SRL, C/ Theodor Aman Pictor 11, Sector 1, Bucarest 010776, Rumanía.' },
    ],
  },
  it: {
    label: 'Neofort BIZ',
    h1: 'Politica sui Cookie',
    sub: 'Informazioni sui cookie utilizzati su neofort-biz.ro. Ultimo aggiornamento: Marzo 2026.',
    title_meta: 'Politica sui cookie · Neofort BIZ',
    desc_meta: 'Politica sui cookie Neofort BIZ — quali cookie utilizziamo, come funzionano e come gestirli.',
    gdpr_link_label: 'Informativa sulla privacy completa (GDPR)',
    sections: [
      { h: '1. Cos\'è un cookie?', p: 'Un cookie è un piccolo file di testo memorizzato dal browser sul dispositivo dell\'utente durante la visita di un sito web. I cookie consentono al sito di riconoscere l\'utente nelle visite successive e di ricordare determinate preferenze o azioni.' },
      { h: '2. Cookie utilizzati', p: 'Neofort BIZ utilizza un unico cookie tecnicamente necessario: cookie_ok (tipo: localStorage) — ricorda se l\'utente ha confermato il banner dei cookie. Validità: persistente fino alla cancellazione manuale. Finalità: funzionale, non analitica. Nessun dato personale è memorizzato in questo cookie.' },
      { h: '3. Cookie di terze parti', p: 'Non utilizziamo cookie di terze parti. Google Analytics, Google Tag Manager, Meta Pixel, Hotjar, Clarity e qualsiasi altro servizio di tracciamento o pubblicità non sono integrati. Nessuna terza parte installa cookie tramite il nostro sito.' },
      { h: '4. Cookie di sessione vs. persistenti', p: 'Il cookie cookie_ok è persistente (memorizzato nel localStorage) e rimane sul dispositivo fino alla cancellazione manuale. Non utilizziamo cookie di sessione che scadono alla chiusura del browser.' },
      { h: '5. Gestione dei cookie', p: 'È possibile eliminare o bloccare i cookie in qualsiasi momento dalle impostazioni del browser: Chrome: Impostazioni → Privacy → Cookie; Firefox: Opzioni → Privacy → Cookie; Safari: Preferenze → Privacy; Edge: Impostazioni → Cookie. La cancellazione del cookie cookie_ok farà riapparire il banner alla visita successiva.' },
      { h: '6. Consenso', p: 'Alla prima visita viene visualizzato un banner dei cookie. Facendo clic su "Accetta", si conferma l\'utilizzo del cookie tecnico descritto. Poiché utilizziamo esclusivamente un cookie tecnicamente necessario, il sito funziona normalmente anche senza accettare il banner.' },
      { h: '7. Contatto', p: 'Per qualsiasi domanda sulla nostra politica dei cookie: oferte@neofort-biz.ro · NEOFORT BIZ SRL, Via Theodor Aman Pictor 11, Settore 1, Bucarest 010776, Romania.' },
    ],
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const slug = SLUGS[locale] || SLUGS.ro;
  return {
    title: ui.title_meta,
    description: ui.desc_meta,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE}/${locale}/${slug}`,
      languages: Object.fromEntries(Object.entries(SLUGS).map(([l,s])=>[l,`${BASE}/${l}/${s}`])),
    },
    openGraph: {
      type: 'website',
      url: `${BASE}/${locale}/${slug}`,
      siteName: 'Neofort BIZ',
      title: ui.title_meta,
      description: ui.desc_meta,
    },
  };
}

export default async function CookiesPage({ params }) {
  const { locale } = await params;
  const ui = UI[locale] || UI.ro;
  const gdprSlug = { ro:'gdpr', en:'privacy-policy', de:'datenschutz', fr:'politique-confidentialite', es:'politica-privacidad', it:'informativa-privacy' }[locale] || 'gdpr';

  return (
    <>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.label}</span>
          <h1 className="font-condensed text-4xl md:text-5xl font-semibold text-primary mb-3">{ui.h1}</h1>
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
          <div style={{marginTop:'48px',paddingTop:'24px',borderTop:'1px solid #e8e8e8'}}>
            <a href={`/${locale}/${gdprSlug}`}
              style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.72rem',letterSpacing:'.12em',textTransform:'uppercase',color:'#2d5a8e',textDecoration:'none'}}>
              → {ui.gdpr_link_label}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
