// === Rate limiting pe IP — v281 ============================================
//
// Motiv: /api/contact si /api/views erau complet nelimitate. Pe contact,
// singura bariera era honeypot-ul plus capcana de 3 secunde din v259 — care
// opresc botii simpli, nu un om sau un script care asteapta 3 secunde. Pe
// views, oricine putea incrementa la infinit si consuma cota Upstash.
//
// Implementare: fereastra fixa, cu cheie derivata din fereastra de timp.
//   rl:<cheie>:<nr. ferestrei>
// Fiecare fereastra are propria cheie, deci nu exista scenariul in care un
// INCR reuseste si EXPIRE esueaza, lasand o cheie blocata permanent. Nu
// foloseste optiunea NX la EXPIRE (Redis >= 7), deci merge pe orice backend.
//
// FAIL-OPEN, deliberat: daca Upstash lipseste, raspunde cu eroare sau nu
// raspunde in 2 secunde, cererea TRECE. Un formular de contact care refuza
// clienti reali pentru ca a cazut Redis e mai scump decat spamul pe care
// l-ar opri.
//
// Nu adauga nicio dependenta — foloseste aceleasi variabile Upstash deja
// configurate pentru contorul de vizualizari.

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

/**
 * IP-ul clientului, din antetele puse de proxy-ul Vercel.
 * Primul element din x-forwarded-for e clientul; restul sunt proxy-uri.
 */
export function clientIp(request) {
  try {
    const h = request?.headers;
    if (!h || typeof h.get !== 'function') return 'necunoscut';
    const xff = h.get('x-forwarded-for');
    if (xff) {
      const first = String(xff).split(',')[0].trim();
      if (first) return first.slice(0, 64);
    }
    const real = h.get('x-real-ip');
    if (real) return String(real).trim().slice(0, 64);
    return 'necunoscut';
  } catch {
    return 'necunoscut';
  }
}

function timeoutSignal(ms) {
  try {
    if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') {
      return AbortSignal.timeout(ms);
    }
  } catch {
    /* runtime fara AbortSignal.timeout — mergem fara timeout */
  }
  return undefined;
}

/**
 * @param {string} key        identificator logic (ex. `contact:1.2.3.4`)
 * @param {number} limit      cate cereri sunt permise in fereastra
 * @param {number} windowSec  lungimea ferestrei, in secunde
 * @returns {Promise<{ok:boolean, count:number, degraded:boolean}>}
 *          ok=false inseamna ca limita a fost depasita.
 *          degraded=true inseamna ca nu s-a putut masura si am lasat sa treaca.
 */
export async function rateLimit(key, limit, windowSec) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return { ok: true, count: 0, degraded: true };
  }

  const window = Math.floor(Date.now() / 1000 / windowSec);
  const bucket = `rl:${key}:${window}`;

  try {
    const res = await fetch(`${UPSTASH_URL}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      // EXPIRE la dublul ferestrei: cheia dispare singura, oricum nu mai e
      // folosita dupa ce fereastra s-a inchis.
      body: JSON.stringify([
        ['INCR', bucket],
        ['EXPIRE', bucket, String(windowSec * 2)],
      ]),
      cache: 'no-store',
      signal: timeoutSignal(2000),
    });

    if (!res.ok) return { ok: true, count: 0, degraded: true };

    const data = await res.json();
    const count = Number(data?.[0]?.result);
    if (!Number.isFinite(count) || count <= 0) {
      return { ok: true, count: 0, degraded: true };
    }

    return { ok: count <= limit, count, degraded: false };
  } catch {
    return { ok: true, count: 0, degraded: true };
  }
}
