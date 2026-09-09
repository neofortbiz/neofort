'use client';

// Pagina 404 localizata (v249).
// CONTEXT: pana acum nu exista niciun not-found.js in proiect, iar app/layout.js
// returneaza doar `return children;` fara html/body. Rezultatul: URL-urile inexistente
// returnau corect status 404, dar afisau o pagina complet alba, fara meniu si fara linkuri.
//
// Acest fisier se randeaza IN INTERIORUL app/[locale]/layout.js, deci primeste automat
// html, body, Header, Footer si NextIntlClientProvider. Nu trebuie sa le redeclare.
//
// Locale-ul se citeste din pathname, nu din params (not-found.js nu primeste params) si
// nu din useLocale() — ca sa functioneze si daca, din orice motiv, contextul next-intl
// nu e disponibil. Fallback: 'ro'.

import { usePathname } from 'next/navigation';

const LOCALES = ['ro', 'en', 'de', 'fr', 'es', 'it'];

// Texte per limba. Fara dependenta de fisierele de traduceri — pagina 404 trebuie sa
// functioneze chiar daca incarcarea mesajelor esueaza.
const UI = {
  ro: {
    code: 'Eroare 404',
    h1: 'Pagina nu a fost găsită',
    sub: 'Adresa pe care ai accesat-o nu există sau a fost mutată. Mai jos sunt câteva pagini care te pot ajuta.',
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
    code: 'Error 404',
    h1: 'Page not found',
    sub: 'The address you tried does not exist or has been moved. Below are a few pages that may help.',
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
    code: 'Fehler 404',
    h1: 'Seite nicht gefunden',
    sub: 'Die aufgerufene Adresse existiert nicht oder wurde verschoben. Nachfolgend einige Seiten, die weiterhelfen können.',
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
    code: 'Erreur 404',
    h1: 'Page introuvable',
    sub: 'L’adresse demandée n’existe pas ou a été déplacée. Voici quelques pages qui peuvent vous aider.',
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
    code: 'Error 404',
    h1: 'Página no encontrada',
    sub: 'La dirección a la que ha accedido no existe o ha sido movida. Abajo tiene algunas páginas que pueden ayudarle.',
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
    code: 'Errore 404',
    h1: 'Pagina non trovata',
    sub: 'L’indirizzo richiesto non esiste o è stato spostato. Di seguito alcune pagine che possono aiutarvi.',
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

export default function NotFound() {
  const pathname = usePathname();
  // Primul segment din path e limba, daca e una valida. Altfel, romana.
  const seg = (pathname || '').split('/')[1];
  const locale = LOCALES.includes(seg) ? seg : 'ro';
  const ui = UI[locale] || UI.ro;

  return (
    <>
      <div className="page-header">
        <div className="container mx-auto px-6">
          <span className="sec-label">{ui.code}</span>
          <h1 className="font-condensed text-4xl font-semibold text-primary mb-3">{ui.h1}</h1>
          <p className="text-[0.9rem] text-muted">{ui.sub}</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0' }}>
            {ui.links.map((l) => (
              <li key={l.href} style={{ borderBottom: '1px solid #e5e5e5' }}>
                <a
                  href={`/${locale}${l.href === '/' ? '' : l.href}`}
                  style={{
                    display: 'block',
                    padding: '0.9rem 0',
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

          <a href={`/${locale}${ui.ctaHref}`} className="btn btn-green">
            {ui.ctaLabel}
          </a>
        </div>
      </section>
    </>
  );
}
