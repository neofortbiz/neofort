export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    sitemap: 'https://www.neofort-biz.ro/sitemap.xml',
    host: 'https://www.neofort-biz.ro',
  };
}
