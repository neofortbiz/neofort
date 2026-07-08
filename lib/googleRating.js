// === Google Rating dinamic — v189 ===
// Sursă unică de adevăr pentru rating + numărul de recenzii Google ale Neofort BIZ.
// Înlocuiește valorile hardcodate "5.0★ · 50 Recenzii" din 19+ fișiere.
//
// Funcționare:
// 1. Citește din cache Upstash Redis (TTL 12h) — evită cost API la fiecare request.
// 2. Dacă nu există în cache, interoghează Google Places API (Place Details).
// 3. Dacă API-ul Google nu e configurat sau dă eroare, FALLBACK sigur la valorile
//    curente (4.9 / 50) — site-ul nu se rupe niciodată din cauza acestei funcții.
//
// Variabile de mediu necesare (Vercel → Settings → Environment Variables):
//   GOOGLE_MAPS_API_KEY  — API key cu Places API activat
//   GOOGLE_PLACE_ID      — Place ID exact pentru "NEOFORT PVC & ALUMINUM JOINERY"
//
// Fără aceste 2 variabile, funcția returnează automat fallback-ul — zero risc de regres.

const FALLBACK = { rating: 5.0, count: 50 };
const CACHE_KEY = 'google:rating:v1';
const CACHE_TTL_SECONDS = 12 * 60 * 60; // 12 ore

async function redis(cmd, ...args) {
  const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
  const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return null;
  try {
    const res = await fetch(`${UPSTASH_URL}/${cmd}/${args.map(encodeURIComponent).join('/')}`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      cache: 'no-store',
    });
    const data = await res.json();
    return data.result;
  } catch {
    return null;
  }
}

function isValid(v) {
  return v && typeof v.rating === 'number' && typeof v.count === 'number' && v.rating > 0;
}

/**
 * Returnează { rating, count } — live din Google (cache 12h) sau fallback sigur.
 * Server-only — nu se importă în componente 'use client'.
 */
export async function getGoogleRating() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // Cache hit — evită orice apel API
  const cachedRaw = await redis('get', CACHE_KEY);
  if (cachedRaw) {
    try {
      const cached = JSON.parse(cachedRaw);
      if (isValid(cached)) return cached;
    } catch {}
  }

  // Fără credențiale configurate → fallback direct, fără apel API
  if (!apiKey || !placeId) return FALLBACK;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=rating,user_ratings_total&key=${apiKey}`;
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();
    if (data.status === 'OK' && data.result && typeof data.result.rating === 'number') {
      const value = {
        rating: data.result.rating,
        count: data.result.user_ratings_total || 0,
      };
      await redis('set', CACHE_KEY, JSON.stringify(value), 'EX', String(CACHE_TTL_SECONDS));
      return value;
    }
  } catch {
    // tăcut — fallback mai jos
  }

  return FALLBACK;
}

