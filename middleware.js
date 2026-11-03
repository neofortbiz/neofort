import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import {routing} from './i18n/routing';
import {buildIndex, canonicalPathFor} from './lib/canonicalPath.js';

const intlMiddleware = createMiddleware(routing);

// v307: indexul sabloanelor din routing.pathnames, construit o singura data.
const PATH_INDEX = buildIndex(routing.pathnames, routing.locales);

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

  // ── v307: adresa pe segmentul gresit → 301 spre adresa corecta ─────────
  // Ex.: /en/produse/bluevolution-92-alu-pvc-profile → /en/products/...
  // Detaliile si testele sunt in lib/canonicalPath.js.
  const fixed = canonicalPathFor(request.nextUrl.pathname, routing.pathnames, routing.locales, PATH_INDEX);
  if (fixed) {
    const url = request.nextUrl.clone();
    url.pathname = fixed;
    return NextResponse.redirect(url, 301);
  }

  const response = intlMiddleware(request);

  // ── v307: 307 → 301 pe adresele care au deja prefix de limba ───────────
  // Cand adresa are prefix de limba, next-intl face redirect doar ca sa
  // traduca segmentele (ex. /en/tamplarie-pvc → /en/pvc-windows). Mutarea e
  // definitiva, dar next-intl trimite 307 (temporar), iar Google pastreaza
  // adresa veche. O trimitem ca 301, cu aceleasi antete (Location, cookie).
  // Adresele FARA prefix raman 307: acolo limba se alege dupa browser.
  const first = request.nextUrl.pathname.split('/')[1];
  if (response.status === 307 && routing.locales.includes(first) && response.headers.get('location')) {
    return new NextResponse(null, {status: 301, headers: response.headers});
  }
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
