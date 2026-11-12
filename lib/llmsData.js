// v318: citirea datelor din public/llms.txt pentru serverul MCP (/api/mcp).
//
// llms.txt e sursa unică pentru prețuri și date tehnice destinate agenților AI
// (același principiu ca uneltele WebMCP din components/Footer.js). Funcțiile de
// aici sunt pure: primesc textul, întorc secțiuni / blocuri. Fără importuri.

export const norm = (s) => String(s || '')
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/\s+/g, ' ').trim();

// Secțiunea „## <titlu…>” până la următorul „## ”.
export function section(txt, title) {
  const L = String(txt || '').split('\n');
  const i = L.findIndex((l) => l.startsWith('## ' + title));
  if (i < 0) return '';
  let j = i + 1;
  while (j < L.length && !L[j].startsWith('## ')) j++;
  return L.slice(i, j).join('\n').trim();
}

// Blocurile de produs din „## Produse și Sisteme”: { category, name, text }.
export function productBlocks(txt) {
  const sec = section(txt, 'Produse și Sisteme');
  const blocks = [];
  let cat = '';
  sec.split('\n').forEach((l) => {
    if (l.startsWith('### ')) cat = l.slice(4).trim();
    else if (l.startsWith('- **[')) {
      const name = (l.match(/^- \*\*\[([^\]]+)\]/) || [])[1] || '';
      blocks.push({ category: cat, name, text: l });
    } else if (/^\s+- /.test(l) && blocks.length) blocks[blocks.length - 1].text += '\n' + l;
  });
  return blocks;
}

// Căutare fără diacritice, cu și fără spații („s77” găsește „S 77”).
export function searchProducts(blocks, query) {
  const q = norm(query);
  if (!q) return blocks;
  const flat = (x) => norm(x).replace(/\s+/g, '');
  const toks = q.split(' ').filter(Boolean);
  return blocks.filter((b) => {
    const h = norm(b.category + ' ' + b.text), hf = flat(b.category + b.text);
    return toks.every((t) => h.includes(t) || hf.includes(t)) || hf.includes(flat(q));
  });
}
