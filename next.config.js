const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  compress: true,
  // SWC minify e default in Next 14 - asigura productia compacta
  swcMinify: true,
  experimental: {
    serverActions: { bodySizeLimit: '20mb' },
    // Optimizeaza import-urile pentru bundle size mai mic
    optimizePackageImports: ['next-intl'],
    // CSS optimizat - reduce render-blocking
    optimizeCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Dimensiuni mai fine pentru responsive - evita download de imagini prea mari
    deviceSizes: [390, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
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
      // Fix dublu slash URLs (crawled de Google dar neindexate)
      { source: '/en//tamplarie-pvc',  destination: '/en/pvc-windows',            permanent: true },
      { source: '/en//pvc-windows',    destination: '/en/pvc-windows',            permanent: true },
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
