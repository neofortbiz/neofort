export default function robots() {
  return {
    rules: [
      // Google — toate crawlerele
      { userAgent: 'Googlebot',        allow: '/', disallow: ['/api/'] },
      { userAgent: 'Googlebot-Image',  allow: '/' },
      // Bing
      { userAgent: 'Bingbot',          allow: '/', disallow: ['/api/'] },
      // AI — permit indexarea pentru AI Overviews, SGE, Bing Copilot
      { userAgent: 'GPTBot',           allow: '/' },
      { userAgent: 'ChatGPT-User',     allow: '/' },
      { userAgent: 'CCBot',            allow: '/' },
      { userAgent: 'anthropic-ai',     allow: '/' },
      { userAgent: 'Claude-Web',       allow: '/' },
      { userAgent: 'PerplexityBot',    allow: '/' },
      { userAgent: 'Applebot',         allow: '/' },
      // Default — toți ceilalți
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: 'https://www.neofort-biz.ro/sitemap.xml',
    host: 'https://www.neofort-biz.ro',
  };
}
