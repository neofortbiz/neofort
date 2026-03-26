const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  compress: true,
  experimental: {
    serverActions: { bodySizeLimit: '20mb' },
    optimizePackageImports: ['next-intl'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      { source: '/despre',         destination: '/ro/despre',         permanent: true },
      { source: '/about',          destination: '/en/about',          permanent: true },
      { source: '/ueber-uns',      destination: '/de/ueber-uns',      permanent: true },
      { source: '/a-propos',       destination: '/fr/a-propos',       permanent: true },
      { source: '/sobre-nosotros', destination: '/es/sobre-nosotros', permanent: true },
      { source: '/chi-siamo',      destination: '/it/chi-siamo',      permanent: true },
      { source: '/gdpr',             destination: '/ro/gdpr',           permanent: true },
      { source: '/privacy-policy',   destination: '/en/privacy-policy', permanent: true },
      { source: '/datenschutz',      destination: '/de/datenschutz',    permanent: true },
      { source: '/contact',          destination: '/ro/contact',        permanent: true },
      { source: '/blog',             destination: '/ro/blog',           permanent: true },
      { source: '/servicii',         destination: '/ro/servicii',       permanent: true },
      { source: '/accesorii',        destination: '/ro/accesorii',      permanent: true },
      // ── Redirecturi sluguri blog corectate ──
      { source: '/ro/blog/usi-intrare-antiefractie-comanda-tactica-amprenta-digitala-aluminiu', destination: '/ro/blog/usi-intrare-antiefractie-comanda-tactila-amprenta-digitala-aluminiu', permanent: true },
      { source: '/de/blog/vorhangfassade-buerogeb%C3%A4ude-bukarest-komplett-leitfaden-2026', destination: '/de/blog/vorhangfassade-buerogebaeude-bukarest-komplett-leitfaden-2026', permanent: true },
      { source: '/de/blog/montage-uebergrosseglaesscheiben-roboter-saugn%C3%A4pfe-grossformat', destination: '/de/blog/montage-uebergrosseglaesscheiben-roboter-saugnaepfe-grossformat', permanent: true },
      // ── Redirecturi produse-aluminiu sluguri semantice corectate ──
      { source: '/en/products-alu/alumil-sf85-supreme-folding-system', destination: '/en/products-alu/alumil-sf85-supreme-casement-window-system', permanent: true },
      { source: '/de/produkte-alu/alumil-sf85-supreme-faltsystem', destination: '/de/produkte-alu/alumil-sf85-supreme-fenster-system', permanent: true },
      { source: '/fr/produits-alu/systeme-pliant-alumil-sf85-supreme', destination: '/fr/produits-alu/systeme-fenetres-alumil-sf85-supreme', permanent: true },
      { source: '/es/productos-alu/sistema-plegable-alumil-sf85-supreme', destination: '/es/productos-alu/sistema-ventanas-alumil-sf85-supreme', permanent: true },
      { source: '/it/prodotti-alu/sistema-pieghevole-alumil-sf85-supreme', destination: '/it/prodotti-alu/sistema-finestre-alumil-sf85-supreme', permanent: true },
      { source: '/en/products-alu/alumil-s350-smartia-lift-slide-system', destination: '/en/products-alu/alumil-s350-smartia-sliding-door-system', permanent: true },
      { source: '/de/produkte-alu/alumil-s350-smartia-hebeschiebesystem', destination: '/de/produkte-alu/alumil-s350-smartia-schiebesystem', permanent: true },
      { source: '/fr/produits-alu/systeme-coulissant-alumil-s700-supreme', destination: '/fr/produits-alu/systeme-levant-coulissant-alumil-s700-supreme', permanent: true },
      { source: '/es/productos-alu/sistema-corredera-alumil-s700-supreme', destination: '/es/productos-alu/sistema-elevador-corredera-alumil-s700-supreme', permanent: true },
      { source: '/it/prodotti-alu/sistema-scorrevole-alumil-s700-supreme', destination: '/it/prodotti-alu/sistema-alzante-scorrevole-alumil-s700-supreme', permanent: true },
      { source: '/it/accessori/griglia-igroregolab-aereco-ventilazione', destination: '/it/accessori/griglia-igroregolabile-aereco-ventilazione', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Cache agresiv pe assets statice
        source: '/(.*)\\.(avif|webp|jpg|jpeg|png|ico|svg|woff2|woff)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
