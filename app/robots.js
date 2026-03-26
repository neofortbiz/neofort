export default function robots() {
  return {
    rules: [
      // Google — toate crawlerele
      { userAgent: 'Googlebot',        allow: '/', disallow: ['/api/', '/llms.txt'] },
      { userAgent: 'Googlebot-Image',  allow: '/' },
      // Bing
      { userAgent: 'Bingbot',          allow: '/', disallow: ['/api/', '/llms.txt'] },
      // AI — permit indexarea pentru AI Overviews, SGE, Bing Copilot
      { userAgent: 'GPTBot',           allow: '/' },
      { userAgent: 'ChatGPT-User',     allow: '/' },
      { userAgent: 'CCBot',            allow: '/' },
      { userAgent: 'anthropic-ai',     allow: '/' },
      { userAgent: 'Claude-Web',       allow: '/' },
      { userAgent: 'PerplexityBot',    allow: '/' },
      { userAgent: 'Applebot',         allow: '/' },
      // AI — extins pentru AI Overviews, Gemini, Perplexity, Meta, Cohere
      { userAgent: 'Google-Extended',       allow: '/' },
      { userAgent: 'Gemini-Web',            allow: '/' },
      { userAgent: 'meta-externalagent',    allow: '/' },
      { userAgent: 'FacebookBot',           allow: '/' },
      { userAgent: 'cohere-ai',             allow: '/' },
      { userAgent: 'Amazonbot',             allow: '/' },
      { userAgent: 'Bytespider',            allow: '/' },
      { userAgent: 'Diffbot',               allow: '/' },
      { userAgent: 'Omgilibot',             allow: '/' },
      { userAgent: 'YouBot',                allow: '/' },
      { userAgent: 'PetalBot',              allow: '/' },
      // xAI Grok
      { userAgent: 'Grok',                  allow: '/' },
      { userAgent: 'GrokBot',               allow: '/' },
      // OpenAI Search
      { userAgent: 'OAI-SearchBot',         allow: '/' },
      // Manus / StepFun AI
      { userAgent: 'StepFun-Spider',        allow: '/' },
      // Apple Intelligence
      { userAgent: 'Applebot-Extended',     allow: '/' },
      // Mistral / AI21
      { userAgent: 'Mistral-AI',            allow: '/' },
      // Brave Search AI
      { userAgent: 'Brave-Search',          allow: '/' },
      // DataForSEO
      { userAgent: 'DataForSeoBot',         allow: '/' },
      // AI 2025 — xAI Grok, Manus, Mistral, Qwen, You.com, Kagi
      { userAgent: 'XAI-Bot',               allow: '/' },
      { userAgent: 'MistralAI',             allow: '/' },
      { userAgent: 'Qwen-Bot',              allow: '/' },
      { userAgent: 'Manus-AI-Crawler',      allow: '/' },
      { userAgent: 'Kangaroo',              allow: '/' },
      // Default — toți ceilalți
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: 'https://www.neofort-biz.ro/sitemap.xml',
  };
}
