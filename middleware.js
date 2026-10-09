import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// ── v263: rădăcina goală „/" → 301 permanent spre „/ro" ─────────────────────
//
// Starea de până acum: next-intl emitea 307 Temporary Redirect pe „/".
// Google tratează 307 ca „mutare temporară, păstrează URL-ul original", deci
// ținea „/" indexat ca URL separat — fără title, fără meta descriere, fără
// canonical și fără hreflang, pentru că un redirect nu are HTML.
//
// Măsurat în GSC pe 209 zile (12 mar – 6 oct 2026), „/" avea:
//   14.366 expuneri · 112 clicuri · CTR 0,78% · poziție medie 7,2
// iar pe el stăteau aproape integral termenii comerciali principali:
//   tamplarie pvc    92,3% din expuneri, poziția 4,03
//   pvc              99,6%, poziția 6,23
//   ferestre pvc    100,0%, poziția 5,05
//   termopane         92,0%, poziția 2,08
// Șapte interogări cu 2.246 de expuneri cumulate au produs ZERO clicuri.
// Comparate cu interogări echivalente servite de pagini reale, la poziție
// medie mai proastă (7,64 vs 6,88), paginile reale converteau de 3,6x mai bine.
//
// De ce aici și nu în next.config.js: middleware-ul next-intl prinde „/"
// și emite el redirectul, deci o regulă din `redirects()` ar putea să nu
// ajungă niciodată să se execute. Tratăm „/" înaintea delegării, deci
// rezultatul nu depinde de ordinea de rutare a Next.js.
//
// 301 și nu 308: ambele sunt permanente și Google le tratează identic, dar
// 301 e codul documentat de Google pentru consolidare și e înțeles de orice
// crawler sau instrument vechi. Homepage-ul e GET-only, deci păstrarea
// metodei (singurul avantaj al 308) nu aduce nimic.
export default function middleware(request) {
  if (request.nextUrl.pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}`;
    return NextResponse.redirect(url, 301);
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
