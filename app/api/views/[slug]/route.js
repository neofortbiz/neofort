import { NextResponse } from 'next/server';
import { rateLimit, clientIp } from '../../../../lib/rateLimit.js';

const UPSTASH_URL   = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

// ── v281: validare slug si limita pe IP ─────────────────────────────────────
//
// Pana acum POST era complet nelimitat si accepta orice slug. Doua probleme:
//   1. oricine putea incrementa la infinit contorul oricarui articol;
//   2. fiecare slug inventat crea o cheie noua in Redis, deci cota Upstash
//      putea fi umpluta cu chei-gunoi, la nesfarsit.
//
// Reparatia: slug-ul trebuie sa arate ca un slug real (singurele apelante sunt
// BlogGrid si ViewCounter, care trimit slug-uri generate din data/blog.js), iar
// un IP poate incrementa de cel mult MAX_INCR_PER_HOUR ori pe ora.
//
// GET nu e limitat intentionat: nu creeaza chei, iar BlogGrid il apeleaza o
// data pentru fiecare card la incarcarea paginii de blog. O limita acolo ar
// dubla consumul de comenzi Upstash fix pe calea care nu prezinta risc.

const SLUG_RE = /^[a-z0-9](?:[a-z0-9-]{1,118}[a-z0-9])?$/;
const MAX_INCR_PER_HOUR = 60;

async function redis(cmd, ...args) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return null;
  const res = await fetch(`${UPSTASH_URL}/${cmd}/${args.map(encodeURIComponent).join('/')}`, {
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    cache: 'no-store',
  });
  const data = await res.json();
  return data.result;
}

// GET /api/views/[slug] — returnează numărul de views
export async function GET(_request, { params }) {
  const { slug } = await params;
  if (!SLUG_RE.test(String(slug || ''))) {
    return NextResponse.json({ views: 0 });
  }
  const views = await redis('get', `views:${slug}`);
  return NextResponse.json({ views: parseInt(views) || 0 });
}

// POST /api/views/[slug] — incrementează și returnează
export async function POST(request, { params }) {
  const { slug } = await params;
  if (!SLUG_RE.test(String(slug || ''))) {
    return NextResponse.json({ views: 0 });
  }

  // Fail-open, ca peste tot: daca limitatorul nu poate masura, lasam sa treaca.
  const limit = await rateLimit(`views:${clientIp(request)}`, MAX_INCR_PER_HOUR, 3600);
  if (!limit.ok) {
    const views = await redis('get', `views:${slug}`);
    return NextResponse.json({ views: parseInt(views) || 0 });
  }

  const views = await redis('incr', `views:${slug}`);
  return NextResponse.json({ views: parseInt(views) || 0 });
}
