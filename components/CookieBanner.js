'use client';
import { useState, useEffect } from 'react';

const TEXTS = {
  ro: {
    text: 'Acest site folosește exclusiv cookies tehnice necesare funcționării. Nu colectăm date de tracking sau analiză.',
    btn: 'Am înțeles',
    link: 'Politica de Cookies',
  },
  en: {
    text: 'This site uses only technically necessary cookies required for operation. We do not collect tracking or analytics data.',
    btn: 'Got it',
    link: 'Cookie Policy',
  },
  de: {
    text: 'Diese Website verwendet ausschließlich technisch notwendige Cookies. Wir erheben keine Tracking- oder Analysedaten.',
    btn: 'Verstanden',
    link: 'Cookie-Richtlinie',
  },
  fr: {
    text: 'Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement. Nous ne collectons pas de données de suivi ou d\'analyse.',
    btn: 'Compris',
    link: 'Politique cookies',
  },
  es: {
    text: 'Este sitio utiliza únicamente cookies técnicas necesarias para el funcionamiento. No recopilamos datos de seguimiento ni analítica.',
    btn: 'Entendido',
    link: 'Política de cookies',
  },
  it: {
    text: 'Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non raccogliamo dati di tracciamento o analisi.',
    btn: 'Capito',
    link: 'Politica cookie',
  },
};

export default function CookieBanner({ locale }) {
  const [visible, setVisible] = useState(false);
  const t = TEXTS[locale] || TEXTS.ro;

  useEffect(() => {
    try {
      if (!localStorage.getItem('cookie_ok')) setVisible(true);
    } catch { setVisible(true); }
  }, []);

  const accept = () => {
    try { localStorage.setItem('cookie_ok', '1'); } catch {}
    // GA4 Consent Mode v2 — actualizam la acceptare
    try {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('consent', 'update', { analytics_storage: 'granted' });
      }
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.btn}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#111',
        borderTop: '1px solid #2a2a2a',
        padding: '14px 24px',
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
        color: '#bbb',
        margin: 0,
        flex: 1,
        minWidth: '200px',
        lineHeight: 1.5,
      }}>
        {t.text}{' '}
        <a
          href={`/${locale}/${
            locale === 'ro' ? 'gdpr' :
            locale === 'en' ? 'privacy-policy' :
            locale === 'de' ? 'datenschutz' :
            locale === 'fr' ? 'politique-confidentialite' :
            locale === 'es' ? 'politica-privacidad' :
            'informativa-privacy'
          }`}
          style={{ color: '#fff', textDecoration: 'underline', whiteSpace: 'nowrap' }}
        >
          {t.link}
        </a>
      </p>
      <button
        onClick={accept}
        style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 500,
          fontSize: '.65rem',
          letterSpacing: '.18em',
          textTransform: 'uppercase',
          color: '#111',
          background: '#fff',
          border: 'none',
          padding: '9px 22px',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        {t.btn}
      </button>
    </div>
  );
}
