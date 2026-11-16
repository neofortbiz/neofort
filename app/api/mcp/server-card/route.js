// === v327: cardul serverului MCP — GET /api/mcp/server-card =================
//
// SEP-2127 „MCP Server Cards”: cardul se serveste la <adresa serverului>/server-card.
// Raspuns static (acelasi la fiecare cerere), cu ETag si 304, CORS deschis —
// e un document public de descoperire, fara date personale.

import { createHash } from 'node:crypto';
import { serverCard } from '../../../../lib/serverCard.js';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const BODY = JSON.stringify(serverCard(), null, 2);
const ETAG = '"' + createHash('sha256').update(BODY).digest('hex').slice(0, 32) + '"';

const HEADERS = {
  'Content-Type': 'application/mcp-server-card+json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, If-None-Match',
  'Access-Control-Expose-Headers': 'ETag',
  'Cache-Control': 'public, max-age=3600',
  ETag: ETAG,
};

// If-None-Match poate contine mai multe etichete si forma slaba W/"…".
function matches(header) {
  if (!header) return false;
  if (header.trim() === '*') return true;
  return header.split(',').map((v) => v.trim().replace(/^W\//, '')).includes(ETAG);
}

export async function GET(request) {
  if (matches(request.headers.get('if-none-match'))) {
    return new Response(null, { status: 304, headers: HEADERS });
  }
  return new Response(BODY, { status: 200, headers: HEADERS });
}

export async function HEAD() {
  return new Response(null, { status: 200, headers: HEADERS });
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: HEADERS });
}
