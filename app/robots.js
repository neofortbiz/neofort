import { BASE } from '../lib/constants.js';

export default function robots() {
  return {
    rules: [
      // Google — toate crawlerele
      { userAgent: 'Googlebot',        allow: '/', disallow: ['/api/'] },
      { userAgent: 'Googlebot-Image',  allow: '/', disallow: ['/api/'] },
      // Bing
      { userAgent: 'Bingbot',          allow: '/', disallow: ['/api/'] },
      // AI — permit indexarea pentru AI Overviews, SGE, Bing Copilot
      { userAgent: 'GPTBot',           allow: '/', disallow: ['/api/'] },
      { userAgent: 'ChatGPT-User',     allow: '/', disallow: ['/api/'] },
      { userAgent: 'CCBot',            allow: '/', disallow: ['/api/'] },
      { userAgent: 'anthropic-ai',     allow: '/', disallow: ['/api/'] },
      { userAgent: 'Claude-Web',       allow: '/', disallow: ['/api/'] },
      { userAgent: 'PerplexityBot',    allow: '/', disallow: ['/api/'] },
      { userAgent: 'Applebot',         allow: '/', disallow: ['/api/'] },
      // AI — extins pentru AI Overviews, Gemini, Perplexity, Meta, Cohere
      { userAgent: 'Google-Extended',       allow: '/', disallow: ['/api/'] },
      { userAgent: 'Gemini-Web',            allow: '/', disallow: ['/api/'] },
      { userAgent: 'meta-externalagent',    allow: '/', disallow: ['/api/'] },
      { userAgent: 'FacebookBot',           allow: '/', disallow: ['/api/'] },
      { userAgent: 'cohere-ai',             allow: '/', disallow: ['/api/'] },
      { userAgent: 'Amazonbot',             allow: '/', disallow: ['/api/'] },
      { userAgent: 'Bytespider',            allow: '/', disallow: ['/api/'] },
      { userAgent: 'Diffbot',               allow: '/', disallow: ['/api/'] },
      { userAgent: 'Omgilibot',             allow: '/', disallow: ['/api/'] },
      { userAgent: 'YouBot',                allow: '/', disallow: ['/api/'] },
      { userAgent: 'PetalBot',              allow: '/', disallow: ['/api/'] },
      // xAI Grok
      { userAgent: 'Grok',                  allow: '/', disallow: ['/api/'] },
      { userAgent: 'GrokBot',               allow: '/', disallow: ['/api/'] },
      // OpenAI Search
      { userAgent: 'OAI-SearchBot',         allow: '/', disallow: ['/api/'] },
      // Manus / StepFun AI
      { userAgent: 'StepFun-Spider',        allow: '/', disallow: ['/api/'] },
      // Apple Intelligence
      { userAgent: 'Applebot-Extended',     allow: '/', disallow: ['/api/'] },
      // Mistral / AI21
      { userAgent: 'Mistral-AI',            allow: '/', disallow: ['/api/'] },
      // Brave Search AI
      { userAgent: 'Brave-Search',          allow: '/', disallow: ['/api/'] },
      // DataForSEO
      { userAgent: 'DataForSeoBot',         allow: '/', disallow: ['/api/'] },
      // AI 2025 — xAI Grok, Manus, Mistral, Qwen, You.com, Kagi
      { userAgent: 'XAI-Bot',               allow: '/', disallow: ['/api/'] },
      { userAgent: 'MistralAI',             allow: '/', disallow: ['/api/'] },
      { userAgent: 'Qwen-Bot',              allow: '/', disallow: ['/api/'] },
      { userAgent: 'Manus-AI-Crawler',      allow: '/', disallow: ['/api/'] },
      { userAgent: 'Kangaroo',              allow: '/', disallow: ['/api/'] },
      // Default — toți ceilalți
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
