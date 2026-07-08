// v200: llms-full.txt — standard llmstxt.org (companion la /llms.txt)
// Contine CONTINUTUL COMPLET al articolelor blog (RO + EN), generat automat
// la build din data/blog.js — mereu sincronizat, zero mentenanta manuala.
import { ARTICLES } from '../../data/blog.js';
import { BASE } from '../../lib/constants.js';

export const dynamic = 'force-static';

export async function GET() {
  const sorted = [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));

  const header = `# Neofort BIZ — Full Content (llms-full.txt)

> Supplier & installer of Salamander PVC windows, Alumil aluminium windows, shading systems (Raffstore, ZipScreen) and nZEB solutions — Bucharest, Romania. EU-wide delivery. Site: ${BASE} · Index: ${BASE}/llms.txt
> This file contains the full text of all technical blog articles in Romanian (primary) and English. Other languages (DE/FR/ES/IT) are available on-site via hreflang.

---
`;

  const blocks = sorted.map(a => {
    const parts = [];
    parts.push(`## ${a.title.ro}`);
    parts.push(`URL: ${BASE}/ro/blog/${a.slugs.ro}`);
    parts.push(`Published: ${a.date}${a.dateModified ? ` · Modified: ${a.dateModified}` : ''} · Author: ${a.author}`);
    parts.push('');
    parts.push(a.content.ro || '');
    if (a.content.en) {
      parts.push('');
      parts.push(`### [English] ${a.title.en || a.title.ro}`);
      parts.push(`URL: ${BASE}/en/blog/${a.slugs.en || a.slugs.ro}`);
      parts.push('');
      parts.push(a.content.en);
    }
    return parts.join('\n');
  });

  const body = header + blocks.join('\n\n---\n\n') + '\n';

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
