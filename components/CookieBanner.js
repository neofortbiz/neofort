'use client';
import { useState, useEffect } from 'react';

const TEXTS = {
  ro: {
    text: 'Folosim cookies tehnice necesare funcționării site-ului și, cu acordul dvs., Google Analytics 4 pentru statistici anonime de trafic. Puteți accepta sau refuza cookies de analiză.',
    accept: 'Accept',
    decline: 'Refuz',
    link: 'Politica de Cookies',
  },
  en: {
    text: 'We use technically necessary cookies for site operation and, with your consent, Google Analytics 4 for anonymous traffic statistics. You can accept or decline analytics cookies.',
    accept: 'Accept',
    decline: 'Decline',
    link: 'Cookie Policy',
  },
  de: {
    text: 'Wir verwenden technisch notwendige Cookies und, mit Ihrer Zustimmung, Google Analytics 4 für anonyme Statistiken. Sie können Analyse-Cookies akzeptieren oder ablehnen.',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
    link: 'Cookie-Richtlinie',
  },
  fr: {
    text: "Nous utilisons des cookies techniques nécessaires et, avec votre consentement, Google Analytics 4 pour des statistiques anonymes. Vous pouvez accepter ou refuser les cookies analytiques.",
    accept: 'Accepter',
    decline: 'Refuser',
    link: 'Politique cookies',
  },
  es: {
    text: 'Usamos cookies técnicas necesarias y, con su consentimiento, Google Analytics 4 para estadísticas anónimas. Puede aceptar o rechazar las cookies analíticas.',
    accept: 'Aceptar',
    decline: 'Rechazar',
    link: 'Política de cookies',
  },
  it: {
    text: `Utilizziamo cookie tecnici necessari e, con il vostro consenso, Google Analytics 4 per statistiche anonime. Potete accettare o rifiutare i cookie analitici.`,
    accept: 'Accetta',
    decline: 'Rifiuta',
    link: 'Politica cookie',
  },
};

const COOKIE_SLUGS = {
  ro: 'cookies',
  en: 'cookie-policy',
  de: 'cookie-richtlinie',
  fr: 'politique-cookies',
  es: 'politica-cookies',
  it: 'politica-cookie',
};

function grantGA4() {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  } catch {}
}

export default function CookieBanner({ locale }) {
  const [visible, setVisible] = useState(false);
  const t = TEXTS[locale] || TEXTS.ro;

  useEffect(() => {
    try {
      const val = localStorage.getItem('cookie_ok');
      if (!val) {
        // Prima vizita — afiseaza bannerul
        setVisible(true);
      } else if (val === '1') {
        // A acceptat anterior — activeaza GA4
        // Incearca imediat si dupa delay pentru race condition cu lazyOnload
        grantGA4();
        setTimeout(grantGA4, 800);
        setTimeout(grantGA4, 2000);
      }
    } catch { setVisible(true); }
  }, []);

  const accept = () => {
    try { localStorage.setItem('cookie_ok', '1'); } catch {}
    grantGA4();
    setTimeout(grantGA4, 500);
    setVisible(false);
  };

  const decline = () => {
    try { localStorage.setItem('cookie_ok', '0'); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        zIndex: 9999,
        background: '#111',
        borderTop: '1px solid #2a2a2a',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      <p style={{
        fontFamily: 'Barlow, sans-serif',
        fontSize: '.78rem',
        fontWeight: 300,
        color: '#e0e0e0',
        margin: 0,
        flex: 1,
        minWidth: '220px',
        lineHeight: 1.55,
      }}>
        {t.text}{' '}
        <a
          href={`/${locale}/${COOKIE_SLUGS[locale] || 'cookies'}`}
          style={{ color: '#fff', textDecoration: 'underline', whiteSpace: 'nowrap' }}
        >
          {t.link}
        </a>
      </p>
      <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 500,
            fontSize: '.62rem',
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: '#aaa',
            background: 'transparent',
            border: '1px solid #555',
            padding: '9px 18px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {t.decline}
        </button>
        <button
          onClick={accept}
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 500,
            fontSize: '.62rem',
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: '#111',
            background: '#fff',
            border: '1px solid #fff',
            padding: '9px 22px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}
