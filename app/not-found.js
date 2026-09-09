'use client';

// Pagina 404 GLOBALA (v250).
//
// DE CE E NEVOIE DE EA, pe langa app/[locale]/not-found.js:
// Next.js foloseste doua mecanisme diferite de 404:
//   1. notFound() apelat explicit dintr-o pagina (ex: slug de articol inexistent)
//      → se randeaza app/[locale]/not-found.js, INAUNTRUL layout-ului de limba,
//        deci primeste automat html, body, Header si Footer.
//   2. URL care nu se potriveste cu NICIO ruta (ex: /ro/pagina-inexistenta)
//      → se randeaza ACEST fisier, cu app/layout.js, care returneaza doar `children`
//        fara html si body. De aceea fisierul isi declara singur documentul.
//
// Modelul e acelasi cu cel al lui global-error.js din documentatia Next.js: client
// component care randeaza documentul complet. globals.css e importat de app/layout.js,
// deci clasele si fonturile sunt disponibile.

import { usePathname } from 'next/navigation';

const LOCALES = ['ro', 'en', 'de', 'fr', 'es', 'it'];

const UI = {
  ro: {
    lang: 'ro',
    code: 'Eroare 404',
    h1: 'Pagina nu a fost găsită',
    sub: 'Adresa pe care ai accesat-o nu există sau a fost mutată.',
    links: [
      { href: '/', label: 'Prima pagină' },
      { href: '/tamplarie-pvc', label: 'Tâmplărie PVC' },
      { href: '/tamplarie-aluminiu', label: 'Tâmplărie aluminiu' },
      { href: '/umbrire', label: 'Sisteme de umbrire' },
      { href: '/blog', label: 'Blog' },
    ],
    ctaLabel: 'Contactează-ne',
    ctaHref: '/contact',
  },
  en: {
    lang: 'en',
    code: 'Error 404',
    h1: 'Page not found',
    sub: 'The address you tried does not exist or has been moved.',
    links: [
      { href: '/', label: 'Home' },
      { href: '/pvc-windows', label: 'PVC windows' },
      { href: '/aluminium-windows', label: 'Aluminium windows' },
      { href: '/shading-systems', label: 'Shading systems' },
      { href: '/blog', label: 'Blog' },
    ],
    ctaLabel: 'Contact us',
    ctaHref: '/contact',
  },
  de: {
    lang: 'de',
    code: 'Fehler 404',
    h1: 'Seite nicht gefunden',
    sub: 'Die aufgerufene Adresse existiert nicht oder wurde verschoben.',
    links: [
      { href: '/', label: 'Startseite' },
      { href: '/kunststofffenster-pvc', label: 'Kunststofffenster' },
      { href: '/aluminiumfenster', label: 'Aluminiumfenster' },
      { href: '/beschattungssysteme', label: 'Beschattungssysteme' },
      { href: '/blog', label: 'Blog' },
    ],
    ctaLabel: 'Kontakt aufnehmen',
    ctaHref: '/kontakt',
  },
  fr: {
    lang: 'fr',
    code: 'Erreur 404',
    h1: 'Page introuvable',
    sub: 'L’adresse demandée n’existe pas ou a été déplacée.',
    links: [
      { href: '/', label: 'Accueil' },
      { href: '/menuiserie-pvc', label: 'Menuiserie PVC' },
      { href: '/menuiserie-aluminium', label: 'Menuiserie aluminium' },
      { href: '/systemes-occultation', label: 'Systèmes d’occultation' },
      { href: '/blog', label: 'Blog' },
    ],
    ctaLabel: 'Nous contacter',
    ctaHref: '/contact',
  },
  es: {
    lang: 'es',
    code: 'Error 404',
    h1: 'Página no encontrada',
    sub: 'La dirección a la que ha accedido no existe o ha sido movida.',
    links: [
      { href: '/', label: 'Inicio' },
      { href: '/carpinteria-pvc', label: 'Carpintería PVC' },
      { href: '/carpinteria-aluminio', label: 'Carpintería de aluminio' },
      { href: '/sistemas-sombreado', label: 'Sistemas de sombreado' },
      { href: '/blog', label: 'Blog' },
    ],
    ctaLabel: 'Contáctenos',
    ctaHref: '/contacto',
  },
  it: {
    lang: 'it',
    code: 'Errore 404',
    h1: 'Pagina non trovata',
    sub: 'L’indirizzo richiesto non esiste o è stato spostato.',
    links: [
      { href: '/', label: 'Home' },
      { href: '/infissi-pvc', label: 'Infissi in PVC' },
      { href: '/infissi-alluminio', label: 'Infissi in alluminio' },
      { href: '/sistemi-oscuramento', label: 'Sistemi di oscuramento' },
      { href: '/blog', label: 'Blog' },
    ],
    ctaLabel: 'Contattaci',
    ctaHref: '/contatti',
  },
};

export default function GlobalNotFound() {
  const pathname = usePathname();
  const seg = (pathname || '').split('/')[1];
  const locale = LOCALES.includes(seg) ? seg : 'ro';
  const ui = UI[locale] || UI.ro;

  return (
    <html lang={ui.lang}>
      <body style={{ margin: 0, fontFamily: 'Barlow, system-ui, -apple-system, sans-serif', background: '#ffffff', color: '#111111' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '4rem 1.5rem' }}>

          <a
            href={`/${locale}`}
            style={{
              display: 'inline-block',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '1.35rem',
              fontWeight: 600,
              letterSpacing: '.02em',
              color: '#111111',
              textDecoration: 'none',
              marginBottom: '3rem',
            }}
          >
            NEOFORT BIZ
          </a>

          <div
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.7rem',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#8a8a8a',
              marginBottom: '.75rem',
            }}
          >
            {ui.code}
          </div>

          <h1
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '2.25rem',
              fontWeight: 600,
              margin: '0 0 .75rem 0',
              lineHeight: 1.15,
            }}
          >
            {ui.h1}
          </h1>

          <p style={{ fontSize: '.95rem', color: '#595959', margin: '0 0 2.5rem 0' }}>{ui.sub}</p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0' }}>
            {ui.links.map((l) => (
              <li key={l.href} style={{ borderTop: '1px solid #e5e5e5' }}>
                <a
                  href={`/${locale}${l.href === '/' ? '' : l.href}`}
                  style={{
                    display: 'block',
                    padding: '.95rem 0',
                    color: '#111111',
                    textDecoration: 'none',
                    fontSize: '1rem',
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`/${locale}${ui.ctaHref}`}
            style={{
              display: 'inline-block',
              background: '#1a7f4b',
              color: '#ffffff',
              padding: '.85rem 1.75rem',
              textDecoration: 'none',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.85rem',
              letterSpacing: '.1em',
              textTransform: 'uppercase',
            }}
          >
            {ui.ctaLabel}
          </a>

        </div>
      </body>
    </html>
  );
}
