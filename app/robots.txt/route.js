// === v327: /robots.txt — route handler (continutul e in lib/robotsTxt.js) ===
//
// app/robots.js (metadata Next.js) nu poate scrie directive noi precum
// Content-Signal, de aceea robots.txt e servit de aici. Cele doua nu pot
// coexista: app/robots.js a fost sters.

import { robotsTxt } from '../../lib/robotsTxt.js';

export const dynamic = 'force-static';

export function GET() {
  return new Response(robotsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
