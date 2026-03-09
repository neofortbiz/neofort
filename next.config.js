const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

// Slug-uri traduse per limbă → mapate la slug-ul intern RO
// Google vede URL-ul tradus, Next.js servește pagina internă
const SLUG_MAP = {
  en: {
    'pvc-windows':          'tamplarie-pvc',
    'aluminium-windows':    'tamplarie-aluminiu',
    'accessories':          'accesorii',
    'services':             'servicii',
    'about':                'despre',
    'contact':              'contact',
    'blog':                 'blog',
    'privacy-policy':       'gdpr',
  },
  de: {
    'kunststofffenster-pvc':    'tamplarie-pvc',
    'aluminiumfenster':         'tamplarie-aluminiu',
    'zubehoer':                 'accesorii',
    'dienstleistungen':         'servicii',
    'ueber-uns':                'despre',
    'kontakt':                  'contact',
    'blog':                     'blog',
    'datenschutz':              'gdpr',
  },
  fr: {
    'menuiserie-pvc':           'tamplarie-pvc',
    'menuiserie-aluminium':     'tamplarie-aluminiu',
    'accessoires':              'accesorii',
    'services':                 'servicii',
    'a-propos':                 'despre',
    'contact':                  'contact',
    'blog':                     'blog',
    'politique-confidentialite':'gdpr',
  },
  es: {
    'carpinteria-pvc':          'tamplarie-pvc',
    'carpinteria-aluminio':     'tamplarie-aluminiu',
    'accesorios':               'accesorii',
    'servicios':                'servicii',
    'sobre-nosotros':           'despre',
    'contacto':                 'contact',
    'blog':                     'blog',
    'politica-privacidad':      'gdpr',
  },
  it: {
    'infissi-pvc':              'tamplarie-pvc',
    'infissi-alluminio':        'tamplarie-aluminiu',
    'accessori':                'accesorii',
    'servizi':                  'servicii',
    'chi-siamo':                'despre',
    'contatti':                 'contact',
    'blog':                     'blog',
    'informativa-privacy':      'gdpr',
  },
};

// Generează și redirects inverse (slug RO → slug tradus) pentru link canonicalizare
function buildRedirects() {
  const redirects = [];
  for (const [lang, slugs] of Object.entries(SLUG_MAP)) {
    for (const [translated, internal] of Object.entries(slugs)) {
      if (translated === internal) continue; // blog rămâne blog
      // URL tradus → pagina internă (rewrite, nu redirect — păstrează URL-ul tradus)
      redirects.push({
        source: `/${lang}/${translated}`,
        destination: `/${lang}/${internal}`,
        permanent: false, // rewrite intern, nu 301
        locale: false,
      });
    }
  }
  return redirects;
}

const nextConfig = {
  experimental: {
    serverActions: { bodySizeLimit: '20mb' },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return buildRedirects();
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    }];
  },
};

module.exports = withNextIntl(nextConfig);
