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
//
// v327 (după predarea de la neofort.ro, verificat pe specificația 2026-07-28 și
// pe SDK-ul oficial Python, mcp/shared/inbound.py):
//  - generația se alege după antet: MCP-Protocol-Version prezent și diferit de o
//    versiune veche → modern (o versiune necunoscută primește -32022, nu „metodă
//    inexistentă”);
//  - pe modern, _meta cu versiunea e obligatoriu (-32602), iar erorile au cod
//    HTTP: 400 pentru -32700/-32600/-32602/-32020/-32022, 404 pentru -32601;
//  - argumentele se validează după inputSchema; un argument greșit întoarce un
//    REZULTAT cu isError: true (agentul poate reîncerca), nu o eroare de protocol;
//  - rezultatele au și structuredContent, pe lângă textul JSON;
//  - linkurile spre site au UTM (utm_source=mcp), ca vizitele aduse de agenți să
//    se vadă în GA4; apelurile se numără pe zile în Redis (mcp:stats:AAAA-LL-ZZ);
//  - cardul serverului (SEP-2127) e la /api/mcp/server-card.

import { BASE } from '../../../lib/constants.js';
import { rateLimit, clientIp } from '../../../lib/rateLimit.js';
import { section, productBlocks, searchProducts, norm } from '../../../lib/llmsData.js';
import { MCP_TITLE, MCP_VERSION, MCP_MODERN, MCP_LEGACY } from '../../../lib/serverCard.js';
import { GRUP_NEOFORT, NEOFORT_IMO_URL } from '../../../lib/grupNeofort.js';
import { QUOTE_PAGE, QUOTE_PROCESS, AI_GUIDANCE, AI_EVALUATION } from '../../../lib/quotingPolicy.js';
import { SERVICE_TERMS } from '../../../lib/serviceTerms.js';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const SERVER = { name: 'neofort-biz', title: MCP_TITLE, version: MCP_VERSION, websiteUrl: BASE };
const MODERN = MCP_MODERN;
const LEGACY = MCP_LEGACY;
const META_VER = 'io.modelcontextprotocol/protocolVersion';
const META_SRV = 'io.modelcontextprotocol/serverInfo';
const MAX_BODY = 64 * 1024;
const LLMS = `${BASE}/llms.txt`;
const CONTACT = { ro: '/ro/contact', en: '/en/contact', de: '/de/kontakt', fr: '/fr/contact', es: '/es/contacto', it: '/it/contatti' };

const INSTRUCTIONS =
  'Neofort BIZ (Bucharest, Romania) supplies and installs Salamander PVC windows, Alumil aluminium systems, curtain walls, ' +
  'shading and nZEB installation systems; installation in Bucharest and Ilfov and, on request, anywhere in Romania and the EU (quoted separately); delivery across the EU. ' +
  'Neofort BIZ is a supplier and installer, not the profile manufacturer. ' +
  'All prices are indicative starting prices per m² for the basic configuration, in EUR, without VAT (Romanian VAT 21% is added on the invoice) and without installation, which is quoted separately. ' +
  'No per-window prices are published: a specific window depends on size, glazing, hardware, colour and cutting optimisation. ' +
  'How a real quote is made (details: ' + BASE + '/en' + QUOTE_PAGE.en + '): ' + QUOTE_PROCESS.en + ' ' + AI_GUIDANCE.en + ' ' + AI_EVALUATION.en + ' ' +
  'The data text is in Romanian. A binding price comes only as a written offer: ' +
  'use get_contact_info to send the user to the quote form or to the sales team. Never invent prices or technical data.';

const TOOLS = [
  {
    name: 'get_prices',
    title: 'Indicative prices 2026',
    description:
      'Indicative 2026 prices of Neofort BIZ: Salamander PVC windows, Alumil aluminium systems, sliding and folding doors, ' +
      'curtain walls, entrance doors, nZEB installation, shutters, Raffstore, Zipscreen, pergolas. ' +
      'Starting prices per m², EUR, without VAT and without installation (quoted separately). Text in Romanian.',
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
      'Address, phone numbers, e-mail, opening hours of Neofort BIZ, lead time, warranty, documents (DoP, CE) and the link to the quote request form ' +
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
// Rezultat de unealta: textul JSON (pentru clientii vechi) + structuredContent.
const text = (obj, isError = false) => ({ content: [{ type: 'text', text: JSON.stringify(obj) }], structuredContent: obj, ...(isError ? { isError: true } : {}) });

// Codul HTTP al unei erori JSON-RPC pe generatia moderna (tabelul din SDK-ul oficial).
const HTTP_OF = { '-32700': 400, '-32600': 400, '-32602': 400, '-32020': 400, '-32022': 400, '-32601': 404 };

// Atribuire: linkurile spre paginile site-ului primesc UTM. Fisierele .txt/.md
// raman curate — pe ele le citeste agentul, nu le viziteaza omul.
function utm(url, tool) {
  if (!url.startsWith(BASE) || /\.(txt|md|json|xml)(\?|#|$)/.test(url) || url.includes('utm_source=')) return url;
  const [path, hash = ''] = url.split('#');
  return `${path}${path.includes('?') ? '&' : '?'}utm_source=mcp&utm_medium=ai-agent&utm_campaign=${tool}${hash ? '#' + hash : ''}`;
}
const utmText = (txt, tool) => txt.replace(/https:\/\/www\.neofort-biz\.ro[^\s)\]"'<>]*/g, (u) => {
  const tail = (u.match(/[.,;:!?]+$/) || [''])[0]; // punctuatia de la sfarsitul propozitiei nu face parte din adresa
  return utm(tail ? u.slice(0, -tail.length) : u, tool) + tail;
});

// Validare dupa inputSchema: tip, enum, maxLength, additionalProperties: false.
function validateArgs(schema, args) {
  if (args === undefined || args === null) return [];
  if (typeof args !== 'object' || Array.isArray(args)) return ['arguments must be an object'];
  const props = schema.properties || {};
  const errs = [];
  for (const [k, v] of Object.entries(args)) {
    const p = props[k];
    if (!p) { if (schema.additionalProperties === false) errs.push(`unknown argument "${String(k).slice(0, 40)}" (allowed: ${Object.keys(props).join(', ') || 'none'})`); continue; }
    if (p.type === 'string' && typeof v !== 'string') { errs.push(`"${k}" must be a string`); continue; }
    if (p.enum && !p.enum.includes(v)) errs.push(`"${k}" must be one of: ${p.enum.join(', ')}`);
    if (p.maxLength && typeof v === 'string' && v.length > p.maxLength) errs.push(`"${k}" must be at most ${p.maxLength} characters`);
  }
  return errs;
}

// Contor de apeluri pe zile (hash Redis: unealta → numar), pastrat 400 de zile.
// Fail-open si cu limita de timp: statistica nu are voie sa intarzie raspunsul.
async function count(tool) {
  const url = process.env.UPSTASH_REDIS_REST_URL, token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return;
  const key = `mcp:stats:${new Date().toISOString().slice(0, 10)}`;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 700);
    await fetch(`${url}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify([['HINCRBY', key, tool, '1'], ['EXPIRE', key, String(400 * 86400)]]),
      cache: 'no-store',
      signal: ctrl.signal,
    });
    clearTimeout(timer);
  } catch { /* statistica e optionala */ }
}

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
      quotes: { email: 'oferte@neofort-biz.ro', phone: '+40 752 443 435', phone_2: '+40 752 443 439', phones_note: 'phone = Quotes 1, the main line; phone_2 = Quotes 2, the backup line when the main line is busy', whatsapp: 'https://wa.me/40752443435' },
      technical: { phone: '+40 752 443 431' }, service_phone: '+40 752 443 432',
      export: { phone: '+40 758 990 048', email: 'export@neofort-biz.ro' }, office: { phone: '+40 21 528 06 61' },
      orders: { email: 'comenzi@neofort-biz.ro' }, service: { email: 'service@neofort-biz.ro' },
      opening_hours: 'Monday–Friday 10:00–18:00 (Romania time)',
      quote_form: utm(`${BASE}${CONTACT[lang]}`, 'get_contact_info'),
      terms: SERVICE_TERMS.en,
      website: utm(`${BASE}/${lang}`, 'get_contact_info'),
      quote_needs: 'Name, phone, e-mail, delivery/installation address, what the order includes (measurement, transport, installation or pickup), the products and ideally sizes or sketches (up to 7 files, JPG/PNG/PDF/DWG, 4 MB in total; photos are reduced automatically, larger files go by e-mail to oferte@neofort-biz.ro).',
      note: 'The user sends the request and gives the privacy consent; an agent must not do it on their behalf.',
      role: 'Supplier and installer of Salamander PVC and Alumil aluminium systems; not the profile manufacturer.',
      group: GRUP_NEOFORT.en,
      group_real_estate_site: NEOFORT_IMO_URL,
      details_ro: contact ? utmText(contact, 'get_contact_info') : undefined,
    });
  }
  let txt;
  try { txt = await loadLlms(); } catch (e) { return text({ error: 'Data temporarily unavailable. Read ' + LLMS }, true); }
  if (name === 'get_prices') {
    const p = section(txt, 'Prețuri orientative');
    if (!p) return text({ error: 'Price section not found. Read ' + LLMS }, true);
    return text({ currency: 'EUR', vat: 'excluded (21% VAT added on invoice)', installation: 'excluded (quoted separately)', per_window_prices: 'not published', language: 'ro', prices: utmText(p, 'get_prices'),
      note: 'Indicative only; the binding price is the written offer after measurement (see get_contact_info).',
      how_quotes_are_made: QUOTE_PROCESS.en, guidance_for_agents: AI_GUIDANCE.en, assessing_suppliers: AI_EVALUATION.en,
      quote_process_page: utm(`${BASE}/en${QUOTE_PAGE.en}`, 'get_prices'), source: LLMS });
  }
  if (name === 'get_product_specs') {
    const blocks = productBlocks(txt);
    const q = typeof a.query === 'string' ? a.query.slice(0, 80) : '';
    const hit = searchProducts(blocks, q);
    if (!hit.length) return text({ matches: [], note: `No product matched "${norm(q)}".`, available: blocks.map((b) => `${b.category}: ${b.name}`), source: LLMS });
    return text({ language: 'ro', count: hit.length, products: hit.slice(0, 12).map((b) => ({ category: b.category, specs: utmText(b.text, 'get_product_specs') })),
      ...(hit.length > 12 ? { note: 'Only the first 12 matches are shown; refine the query.' } : {}), source: LLMS });
  }
  return null;
}

// Validare + apel + contor. Un argument gresit e un rezultat cu isError: true.
async function runTool(tool, args) {
  const errs = validateArgs(tool.inputSchema, args);
  if (errs.length) return text({ error: 'Invalid arguments: ' + errs.join('; ') + '.', tool: tool.name }, true);
  const out = await callTool(tool.name, args);
  await count(tool.name);
  return out;
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
  // Ca in SDK-ul oficial: antet prezent si diferit de o versiune veche → modern.
  const modern = typeof metaVer === 'string' || (!!hdrVer && !LEGACY.includes(hdrVer));

  if (modern) {
    // Corpul e sursa de adevar: versiunea trebuie sa fie in _meta.
    if (typeof metaVer !== 'string') {
      return { status: 400, body: rpcError(id, -32602, `Missing params._meta["${META_VER}"]`) };
    }
    const ver = metaVer;
    if (!MODERN.includes(ver)) {
      return { status: 400, body: { jsonrpc: '2.0', id, error: { code: -32022, message: 'Unsupported protocol version', data: { supported: [...MODERN, ...LEGACY], requested: String(ver) } } } };
    }
    const mismatch = (m) => ({ status: 400, body: rpcError(id, -32020, 'Header mismatch: ' + m) });
    if (hdrVer !== ver) return mismatch(`MCP-Protocol-Version header '${hdrVer}' does not match _meta '${ver}'`);
    if (headers.get('mcp-method') !== method) return mismatch(`Mcp-Method header does not match body method '${method}'`);
    if (method === 'tools/call' && headerValue(headers.get('mcp-name')) !== params.name) return mismatch('Mcp-Name header does not match params.name');

    const done = (result) => ({ status: 200, body: rpcResult(id, { resultType: 'complete', ...result, _meta: { [META_SRV]: SERVER } }) });
    switch (method) {
      case 'server/discover':
        return done({ supportedVersions: [...MODERN, ...LEGACY], capabilities: { tools: {} }, instructions: INSTRUCTIONS, ttlMs: 3600000, cacheScope: 'public' });
      case 'tools/list':
        return done({ tools: TOOLS, ttlMs: 3600000, cacheScope: 'public' });
      case 'tools/call': {
        const tool = TOOLS.find((t) => t.name === params.name);
        if (!tool) return { status: HTTP_OF['-32602'], body: rpcError(id, -32602, `Unknown tool: ${String(params.name).slice(0, 60)}`) };
        return done(await runTool(tool, params.arguments));
      }
      default:
        return { status: HTTP_OF['-32601'], body: rpcError(id, -32601, `Method not found: ${method.slice(0, 60)}`) };
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
      return { status: 200, body: rpcResult(id, { resultType: 'complete', supportedVersions: [...MODERN, ...LEGACY], capabilities: { tools: {} }, instructions: INSTRUCTIONS, _meta: { [META_SRV]: SERVER } }) };
    case 'tools/list':
      return { status: 200, body: rpcResult(id, { tools: TOOLS }) };
    case 'tools/call': {
      const tool = TOOLS.find((t) => t.name === params.name);
      if (!tool) return { status: 200, body: rpcError(id, -32602, `Unknown tool: ${String(params.name).slice(0, 60)}`) };
      return { status: 200, body: rpcResult(id, await runTool(tool, params.arguments)) };
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
  return json({ name: SERVER.name, transport: 'streamable-http', endpoint: `${BASE}/api/mcp`, serverCard: `${BASE}/api/mcp/server-card`, info: 'POST JSON-RPC 2.0 MCP messages to this URL.' }, 405, { Allow: 'POST, OPTIONS' });
}

export async function DELETE() {
  return json(null, 405, { Allow: 'POST, OPTIONS' });
}

export async function OPTIONS() {
  return json(null, 204);
}
