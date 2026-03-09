import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ro', 'en', 'de', 'fr', 'es', 'it'],
  defaultLocale: 'ro',
  pathnames: {
    '/': '/',
    '/tamplarie-pvc': {
      ro: '/tamplarie-pvc',
      en: '/pvc-windows',
      de: '/kunststofffenster-pvc',
      fr: '/menuiserie-pvc',
      es: '/carpinteria-pvc',
      it: '/infissi-pvc',
    },
    '/tamplarie-aluminiu': {
      ro: '/tamplarie-aluminiu',
      en: '/aluminium-windows',
      de: '/aluminiumfenster',
      fr: '/menuiserie-aluminium',
      es: '/carpinteria-aluminio',
      it: '/infissi-alluminio',
    },
    '/accesorii': {
      ro: '/accesorii',
      en: '/accessories',
      de: '/zubehoer',
      fr: '/accessoires',
      es: '/accesorios',
      it: '/accessori',
    },
    '/servicii': {
      ro: '/servicii',
      en: '/services',
      de: '/dienstleistungen',
      fr: '/services',
      es: '/servicios',
      it: '/servizi',
    },
    '/despre': {
      ro: '/despre',
      en: '/about',
      de: '/ueber-uns',
      fr: '/a-propos',
      es: '/sobre-nosotros',
      it: '/chi-siamo',
    },
    '/contact': {
      ro: '/contact',
      en: '/contact',
      de: '/kontakt',
      fr: '/contact',
      es: '/contacto',
      it: '/contatti',
    },
    '/blog': '/blog',
    '/gdpr': {
      ro: '/gdpr',
      en: '/privacy-policy',
      de: '/datenschutz',
      fr: '/politique-confidentialite',
      es: '/politica-privacidad',
      it: '/informativa-privacy',
    },
  }
});
