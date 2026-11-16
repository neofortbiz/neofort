// === v327: continutul robots.txt ======================================
//
// Inlocuieste app/robots.js (metadata Next.js), care nu stie decat User-Agent,
// Allow, Disallow, Crawl-delay, Host si Sitemap. Aici se adauga:
//
//  - Content-Signal (conventia Cloudflare): preferinta de folosire a continutului.
//    search=yes, ai-input=yes, ai-train=yes — decizia lui Dan (16.11.2026),
//    coerenta cu faptul ca robots permitea deja crawlerele de antrenare.
//    E pusa in FIECARE grup: un crawler citeste doar grupul care i se potriveste.
//  - grupul „__usage_ai-training” + Allow: semnalul comun (OpenAI, Google,
//    Microsoft, Anthropic) pentru antrenarea modelelor. Nu e o regula de acces,
//    ci o preferinta; un grup „*” nu o exprima.
//  - Allow: /api/mcp/server-card — cardul serverului MCP e document public de
//    descoperire. Regula cea mai lunga castiga (RFC 9309), restul /api/ ramane blocat.
//
// ATENTIE la Lighthouse (auditul „robots.txt is not valid”): accepta doar
//   user-agent, disallow, allow, sitemap, crawl-delay, clean-param, host,
//   request-rate, visit-time, noindex, content-signal.
// Orice alta directiva (de exemplu „Agentmap”) scade scorul SEO. Garda din
// scripts/validate-blog.js blocheaza directivele din afara listei.
//
// Lista de crawlere si ordinea sunt cele din vechiul app/robots.js.

import { BASE } from './constants.js';

const AGENTS = [
  'Googlebot', 'Googlebot-Image', 'Bingbot', 'GPTBot',
  'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Claude-Web',
  'PerplexityBot', 'Applebot', 'Google-Extended', 'Gemini-Web',
  'meta-externalagent', 'FacebookBot', 'cohere-ai', 'Amazonbot',
  'Bytespider', 'Diffbot', 'Omgilibot', 'YouBot',
  'PetalBot', 'Grok', 'GrokBot', 'OAI-SearchBot',
  'StepFun-Spider', 'Applebot-Extended', 'Mistral-AI', 'Brave-Search',
  'DataForSeoBot', 'XAI-Bot', 'MistralAI', 'Qwen-Bot',
  'Manus-AI-Crawler', 'Kangaroo',
  '*',
];

const SIGNAL = 'Content-Signal: search=yes, ai-input=yes, ai-train=yes';

export function robotsTxt() {
  const groups = AGENTS.map((ua) => [
    `User-Agent: ${ua}`,
    SIGNAL,
    'Allow: /',
    'Allow: /api/mcp/server-card',
    'Disallow: /api/',
  ].join('\n'));
  groups.push(['User-Agent: __usage_ai-training', 'Allow: /'].join('\n'));
  return groups.join('\n\n') + `\n\nSitemap: ${BASE}/sitemap.xml\n`;
}
