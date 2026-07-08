// v200: RSS 2.0 feed — generat automat din data/blog.js la build.
// Utilizat de Google Discover/Follow, agregatoare si pipeline-uri de ingestie LLM.
import { ARTICLES } from '../../data/blog.js';
import { BASE } from '../../lib/constants.js';

export const dynamic = 'force-static';

const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export async function GET() {
  const sorted = [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 30);

  const items = sorted.map(a => {
    const url = `${BASE}/ro/blog/${a.slugs.ro}`;
    const pub = new Date(a.dateModified || a.date).toUTCString();
    const img = a.imageOg ? `${BASE}${a.imageOg}` : `${BASE}/og/BLOG.jpg`;
    return `    <item>
      <title>${esc(a.title.ro)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pub}</pubDate>
      <description>${esc(a.excerpt?.ro || a.metaDesc?.ro || '')}</description>
      <enclosure url="${img}" type="image/jpeg" length="0"/>
      <author>oferte@neofort-biz.ro (${esc(a.author)})</author>
      <category>${esc(a.category?.ro || 'Blog')}</category>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Neofort BIZ — Blog Tâmplărie PVC &amp; Aluminiu</title>
    <link>${BASE}/ro/blog</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Ghiduri tehnice, comparații și noutăți despre tâmplărie PVC Salamander, aluminiu Alumil, sisteme nZEB și umbrire — Neofort BIZ București.</description>
    <language>ro</language>
    <lastBuildDate>${new Date(sorted[0]?.dateModified || sorted[0]?.date || Date.now()).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
