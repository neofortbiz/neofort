import { NextResponse } from 'next/server';

const UPSTASH_URL   = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(cmd, ...args) {
  const res = await fetch(`${UPSTASH_URL}/${cmd}/${args.map(encodeURIComponent).join('/')}`, {
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    cache: 'no-store',
  });
  const data = await res.json();
  return data.result;
}

// GET /api/views/[slug] — returnează numărul de views
export async function GET(_, { params }) {
  const { slug } = await params;
  const views = await redis('get', `views:${slug}`);
  return NextResponse.json({ views: parseInt(views) || 0 });
}

// POST /api/views/[slug] — incrementează și returnează
export async function POST(_, { params }) {
  const { slug } = await params;
  const views = await redis('incr', `views:${slug}`);
  return NextResponse.json({ views: parseInt(views) || 0 });
}
