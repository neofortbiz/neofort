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
      { source: '/despre',         destination: '/ro/despre',         permanent: false },
      { source: '/about',          destination: '/en/about',          permanent: false },
      { source: '/ueber-uns',      destination: '/de/ueber-uns',      permanent: false },
      { source: '/a-propos',       destination: '/fr/a-propos',       permanent: false },
      { source: '/sobre-nosotros', destination: '/es/sobre-nosotros', permanent: false },
      { source: '/chi-siamo',      destination: '/it/chi-siamo',      permanent: false },
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
