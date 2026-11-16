// === v327: cardul serverului MCP (SEP-2127) — sursa unica ===================
//
// Cardul descrie serverul (nume, versiune, unde se conecteaza), NU uneltele:
// uneltele se afla prin tools/list. Acelasi obiect este servit la
// /api/mcp/server-card si copiat in /.well-known/ard.json (campul „data”);
// garda din scripts/validate-blog.js verifica faptul ca cele doua sunt egale.
//
// Schema: https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json
//   name        3–200 caractere, ^[a-zA-Z0-9.-]+/[a-zA-Z0-9._-]+$
//   description 1–100 caractere
//   title       1–100 caractere
//
// MCP_NAME este si numele din registrul oficial MCP (DNS inversat al domeniului
// verificat). Registrul nu urmeaza redirecturi, iar neofort-biz.ro face 301
// spre www, deci domeniul verificat este www.neofort-biz.ro.

import { BASE } from './constants.js';

export const MCP_NAME = 'ro.neofort-biz.www/neofort-biz';
export const MCP_TITLE = 'Neofort BIZ — windows, doors and shading (Bucharest)';
export const MCP_DESCRIPTION = 'Neofort BIZ, Bucharest: window, door and shading prices, technical data and contact (read-only).';
export const MCP_VERSION = '1.1.0';
export const MCP_ENDPOINT = `${BASE}/api/mcp`;

// Generatiile de protocol pe care le vorbeste serverul.
export const MCP_MODERN = ['2026-07-28'];
export const MCP_LEGACY = ['2025-11-25', '2025-06-18', '2025-03-26', '2024-11-05'];

export function serverCard() {
  return {
    $schema: 'https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json',
    name: MCP_NAME,
    title: MCP_TITLE,
    description: MCP_DESCRIPTION,
    version: MCP_VERSION,
    websiteUrl: BASE,
    remotes: [
      { type: 'streamable-http', url: MCP_ENDPOINT, supportedProtocolVersions: [...MCP_MODERN, ...MCP_LEGACY] },
    ],
  };
}
