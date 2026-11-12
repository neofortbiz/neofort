// === v318: server MCP public, doar citire — /api/mcp ========================
//
// Model Context Protocol, transport „Streamable HTTP”, fără stare (stateless):
// fiecare POST conține un mesaj JSON-RPC 2.0 și primește răspunsul ca JSON.
// Nu deschide fluxuri SSE (GET → 405), nu folosește sesiuni.
//
// Două „ere” ale protocolului, ambele suportate:
//  - 2026-07-28 (modern): fără initialize; versiunea vine în fiecare cerere, în
//    params._meta["io.modelcontextprotocol/protocolVersion"] + antetul
//    MCP-Protocol-Version; server/discover obligatoriu; rezultate cu resultType;
//    anteturile Mcp-Method / Mcp-Name validate față de corp (-32020 la nepotrivire).
//  - 2024-11-05 … 2025-11-25 (vechi): initialize → tools/list → tools/call.
//
// Unelte (toate DOAR CITIRE, fără efecte): get_prices, get_product_specs,
// get_contact_info. Cererea de ofertă NU se poate trimite de aici — un server
// public care trimite mailuri ar fi o poartă de spam. Agentul primește linkul
// formularului și datele de contact; trimiterea rămâne la om.
//
// Datele vin din /llms.txt (sursa unică, actualizată la fiecare corectură),
// citit prin fetch cu cache de o oră. Fără pachete npm noi.

import { BASE } from '../../../lib/constants.js';
import { rateLimit, clientIp } from '../../../lib/rateLimit.js';
import { section, productBlocks, searchProducts, norm } from '../../../lib/llmsData.js';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const SERVER = { name: 'neofort-biz', title: 'Neofort BIZ — windows, doors and shading (Bucharest)', version: '1.0.0' };
const MODERN = ['2026-07-28'];
const LEGACY = ['2025-11-25', '2025-06-18', '2025-03-26', '2024-11-05'];
const META_VER = 'io.modelcontextprotocol/protocolVersion';
const META_SRV = 'io.modelcontextprotocol/serverInfo';
const MAX_BODY = 64 * 1024;
const LLMS = `${BASE}/llms.txt`;
const CONTACT = { ro: '/ro/contact', en: '/en/contact', de: '/de/kontakt', fr: '/fr/contact', es: '/es/contacto', it: '/it/contatti' };

const INSTRUCTIONS =
  'Neofort BIZ (Bucharest, Romania) supplies and installs Salamander PVC windows, Alumil aluminium systems, ' +
  'shading and nZEB installation systems; installation in Bucharest and Ilfov, delivery across the EU. ' +
  'All prices are indicative, in EUR, without VAT (Romanian VAT 21% is added on the invoice), with standard installation. ' +
  'The data text is in Romanian. A binding price comes only as a written offer after measurement: ' +
  'use get_contact_info to send the user to the quote form or to the sales team. Never invent prices.';

const TOOLS = [
  {
    name: 'get_prices',
    title: 'Indicative prices 2026',
    description:
      'Indicative 2026 prices of Neofort BIZ: Salamander PVC windows, Alumil aluminium systems, sliding and folding doors, ' +
      'curtain walls, entrance doors, nZEB installation, shutters, Raffstore, Zipscreen, pergolas. ' +
      'EUR, without VAT, with standard installation in Bucharest and Ilfov. Text in Romanian.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: 'get_product_specs',
    title: 'Product technical data',
    description:
      'Technical data of the products Neofort BIZ supplies: Salamander BluEvolution 92 and GreenEvolution 76 profiles, ' +
      'Alumil S77, S67, S700, S350, SF85, M19800, accessories, nZEB systems, shading, insulating glass, curtain walls. ' +
      'Depth, chambers, Uw/Uf, glazing thickness, sound insulation, burglar resistance and the product page link. ' +
      'Optional "query" filters by name or keyword (e.g. "S77", "BluEvolution 92", "raffstore"). Text in Romanian.',
    inputSchema: {
      type: 'object',
      properties: { query: { type: 'string', maxLength: 80, description: 'Product name or keyword. Empty for the full list.' } },
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: 'get_contact_info',
    title: 'Contact and quote request',
    description:
      'Address, phone numbers, e-mail, opening hours of Neofort BIZ and the link to the quote request form ' +
      '(in the requested language). The quote itself must be sent by the user through the form, by e-mail or by phone.',
    inputSchema: {
      type: 'object',
      properties: { language: { type: 'string', enum: ['ro', 'en', 'de', 'fr', 'es', 'it'], description: 'Language of the contact page link. Default: en.' } },
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
];

// ── utilitare ────────────────────────────────────────────────────────────

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, MCP-Protocol-Version, Mcp-Method, Mcp-Name, Mcp-Session-Id, Last-Event-ID',
  'Access-Control-Max-Age': '86400',
};

const json = (body, status = 200, extra = {}) =>
  new Response(body === null ? null : JSON.stringify(body), {
    status,
    headers: { ...CORS, ...(body === null ? {} : { 'Content-Type': 'application/json; charset=utf-8' }), 'Cache-Control': 'no-store', ...extra },
  });

const rpcError = (id, code, message) => ({ jsonrpc: '2.0', id: id ?? null, error: { code, message } });
const rpcResult = (id, result) => ({ jsonrpc: '2.0', id, result });
const text = (obj, isError = false) => ({ content: [{ type: 'text', text: JSON.stringify(obj) }], ...(isError ? { isError: true } : {}) });

async function loadLlms() {
  const r = await fetch(LLMS, { next: { revalidate: 3600 } });
  if (!r.ok) throw new Error('llms.txt HTTP ' + r.status);
  return r.text();
}

// ── unelte ───────────────────────────────────────────────────────────────

async function callTool(name, args) {
  const a = args && typeof args === 'object' ? args : {};
  if (name === 'get_contact_info') {
    const lang = CONTACT[a.language] ? a.language : 'en';
    let contact = '';
    try { contact = section(await loadLlms(), 'Contact și Locație'); } catch (e) { /* datele de baza raman mai jos */ }
    return text({
      company: 'Neofort BIZ SRL', vat: 'RO30324211',
      address: 'Str. Theodor Aman Pictor nr. 11, Sector 1, București 010776, Romania',
      quotes: { email: 'oferte@neofort-biz.ro', phone: '+40 752 443 435', whatsapp: 'https://wa.me/40752443435' },
      export: { phone: '+40 752 443 439' }, office: { phone: '+40 21 528 06 61' },
      orders: { email: 'comenzi@neofort-biz.ro' }, service: { email: 'service@neofort-biz.ro' },
      opening_hours: 'Monday–Friday 10:00–18:00 (Romania time)',
      quote_form: `${BASE}${CONTACT[lang]}`,
      quote_needs: 'Name, phone, e-mail, delivery/installation address, what the order includes (measurement, transport, installation or pickup), the products and ideally sizes or sketches (up to 7 files, JPG/PNG/PDF/DWG, max 5 MB each).',
      note: 'The user sends the request and gives the privacy consent; an agent must not do it on their behalf.',
      details_ro: contact || undefined,
    });
  }
  let txt;
  try { txt = await loadLlms(); } catch (e) { return text({ error: 'Data temporarily unavailable. Read ' + LLMS }, true); }
  if (name === 'get_prices') {
    const p = section(txt, 'Prețuri orientative');
    if (!p) return text({ error: 'Price section not found. Read ' + LLMS }, true);
    return text({ currency: 'EUR', vat: 'excluded (21% VAT added on invoice)', language: 'ro', prices: p,
      note: 'Indicative only; the binding price is the written offer after measurement (see get_contact_info).', source: LLMS });
  }
  if (name === 'get_product_specs') {
    const blocks = productBlocks(txt);
    const q = typeof a.query === 'string' ? a.query.slice(0, 80) : '';
    const hit = searchProducts(blocks, q);
    if (!hit.length) return text({ matches: [], note: `No product matched "${norm(q)}".`, available: blocks.map((b) => `${b.category}: ${b.name}`), source: LLMS });
    return text({ language: 'ro', count: hit.length, products: hit.slice(0, 12).map((b) => ({ category: b.category, specs: b.text })),
      ...(hit.length > 12 ? { note: 'Only the first 12 matches are shown; refine the query.' } : {}), source: LLMS });
  }
  return null;
}

// ── JSON-RPC ─────────────────────────────────────────────────────────────

// Valoare de antet Mcp-Name / Mcp-Param: poate fi codata „=?base64?…?=”.
function headerValue(v) {
  if (v == null) return null;
  const m = /^=\?base64\?(.*)\?=$/.exec(v);
  if (!m) return v;
  try { return Buffer.from(m[1], 'base64').toString('utf8'); } catch { return null; }
}

// Intoarce { status, body } — body null = fara corp (notificare acceptata).
async function handle(msg, headers) {
  if (!msg || typeof msg !== 'object' || msg.jsonrpc !== '2.0' || typeof msg.method !== 'string') {
    return { status: 400, body: rpcError(msg && msg.id, -32600, 'Invalid Request') };
  }
  const { id, method } = msg;
  const params = msg.params && typeof msg.params === 'object' ? msg.params : {};
  if (!('id' in msg)) return { status: 202, body: null }; // notificari: acceptate, fara corp

  const metaVer = params._meta && params._meta[META_VER];
  const hdrVer = headers.get('mcp-protocol-version');
  const modern = typeof metaVer === 'string' || MODERN.includes(hdrVer);

  if (modern) {
    // Versiune ceruta: din _meta (sursa autoritara), altfel din antet.
    const ver = typeof metaVer === 'string' ? metaVer : hdrVer;
    if (!MODERN.includes(ver)) {
      return { status: 400, body: { jsonrpc: '2.0', id, error: { code: -32022, message: 'Unsupported protocol version', data: { supported: [...MODERN, ...LEGACY], requested: String(ver) } } } };
    }
    const mismatch = (m) => ({ status: 400, body: rpcError(id, -32020, 'Header mismatch: ' + m) });
    if (hdrVer !== ver) return mismatch(`MCP-Protocol-Version header '${hdrVer}' does not match _meta '${ver}'`);
    if (headers.get('mcp-method') !== method) return mismatch(`Mcp-Method header does not match body method '${method}'`);
    if (method === 'tools/call' && headerValue(headers.get('mcp-name')) !== params.name) return mismatch('Mcp-Name header does not match params.name');

    const done = (result) => ({ status: 200, body: rpcResult(id, { resultType: 'complete', ...result, _meta: { [META_SRV]: { name: SERVER.name, version: SERVER.version } } }) });
    switch (method) {
      case 'server/discover':
        return done({ supportedVersions: [...MODERN, ...LEGACY], capabilities: { tools: {} }, instructions: INSTRUCTIONS, ttlMs: 3600000, cacheScope: 'public' });
      case 'tools/list':
        return done({ tools: TOOLS, ttlMs: 3600000, cacheScope: 'public' });
      case 'tools/call': {
        if (!TOOLS.some((t) => t.name === params.name)) return { status: 200, body: rpcError(id, -32602, `Unknown tool: ${String(params.name).slice(0, 60)}`) };
        return done(await callTool(params.name, params.arguments));
      }
      default:
        return { status: 404, body: rpcError(id, -32601, `Method not found: ${method.slice(0, 60)}`) };
    }
  }

  // Era veche (initialize).
  switch (method) {
    case 'initialize': {
      const asked = params.protocolVersion;
      return { status: 200, body: rpcResult(id, {
        protocolVersion: LEGACY.includes(asked) ? asked : LEGACY[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER,
        instructions: INSTRUCTIONS,
      }) };
    }
    case 'ping':
      return { status: 200, body: rpcResult(id, {}) };
    case 'server/discover':
      return { status: 200, body: rpcResult(id, { resultType: 'complete', supportedVersions: [...MODERN, ...LEGACY], capabilities: { tools: {} }, instructions: INSTRUCTIONS, _meta: { [META_SRV]: { name: SERVER.name, version: SERVER.version } } }) };
    case 'tools/list':
      return { status: 200, body: rpcResult(id, { tools: TOOLS }) };
    case 'tools/call': {
      if (!TOOLS.some((t) => t.name === params.name)) return { status: 200, body: rpcError(id, -32602, `Unknown tool: ${String(params.name).slice(0, 60)}`) };
      return { status: 200, body: rpcResult(id, await callTool(params.name, params.arguments)) };
    }
    default:
      return { status: 200, body: rpcError(id, -32601, `Method not found: ${method.slice(0, 60)}`) };
  }
}

export async function POST(request) {
  const rl = await rateLimit(`mcp:${clientIp(request)}`, 120, 600);
  if (!rl.ok) return json(rpcError(null, -32000, 'Too many requests, try again in a few minutes.'), 429, { 'Retry-After': '600' });

  const len = Number(request.headers.get('content-length') || 0);
  if (len > MAX_BODY) return json(rpcError(null, -32600, 'Request too large'), 413);

  let msg;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) return json(rpcError(null, -32600, 'Request too large'), 413);
    msg = JSON.parse(raw);
  } catch {
    return json(rpcError(null, -32700, 'Parse error'), 400);
  }
  if (Array.isArray(msg)) return json(rpcError(null, -32600, 'Batch requests are not supported'), 400);

  try {
    const out = await handle(msg, request.headers);
    return json(out.body, out.status);
  } catch (e) {
    return json(rpcError(msg && msg.id, -32603, 'Internal error'), 500);
  }
}

// Fara flux SSE: serverul raspunde doar la POST (permis de specificatie).
export async function GET() {
  return json({ name: SERVER.name, transport: 'streamable-http', endpoint: `${BASE}/api/mcp`, info: 'POST JSON-RPC 2.0 MCP messages to this URL.' }, 405, { Allow: 'POST, OPTIONS' });
}

export async function DELETE() {
  return json(null, 405, { Allow: 'POST, OPTIONS' });
}

export async function OPTIONS() {
  return json(null, 204);
}
