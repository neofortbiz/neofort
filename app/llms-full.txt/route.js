// v200: llms-full.txt — standard llmstxt.org (companion la /llms.txt)
// v275: pe langa continutul complet al articolelor de blog, fisierul contine acum
// si catalogul de produse — nume, URL, descriere si intrebarile frecvente, in RO si EN.
// Pana acum cele 25 de pagini de produs erau invizibile aici, desi sunt partea
// comerciala a site-ului.
// Generat automat la build din data/blog.js, data/productMeta.js si data/productFaq.js
// — mereu sincronizat, zero mentenanta manuala.
import { ARTICLES } from '../../data/blog.js';
import { PRODUCT_META, PRODUCT_URL, PRODUCT_BRAND } from '../../data/productMeta.js';
import { PRODUCT_FAQ } from '../../data/productFaq.js';
import { HUB_FAQ, HUB_SLUG, HUB_NAME } from '../../data/hubFaq.js';
import { BASE } from '../../lib/constants.js';

export const dynamic = 'force-static';

// Familiile, in ordinea in care apar si in /llms.txt
const FAMILIES = [
  { title: 'Tâmplărie PVC Salamander', titleEn: 'Salamander PVC Windows', keys: [
    'bluevolution-92-alu', 'bluevolution-92-flex', 'bluevolution-92-round',
    'greenevolution-76-md-round', 'greenevolution-76-md-flex', 'greenevolution-76-ad-flex' ] },
  { title: 'Tâmplărie Aluminiu Alumil', titleEn: 'Alumil Aluminium Systems', keys: [
    'alumil-s77-supreme', 'alumil-s67-smartia', 'alumil-s700-supreme',
    'alumil-s350-smartia', 'alumil-sf85-supreme', 'alumil-m19800-smartia' ] },
  { title: 'Accesorii', titleEn: 'Accessories', keys: [
    'toc-de-renovare', 'pervazuri-interior-pvc-exterior-al',
    'grila-higroreglabila-aereco', 'automatizari-somfy' ] },
  { title: 'Sisteme nZEB', titleEn: 'nZEB Systems', keys: [
    'precadre-blaugelb-triotherm', 'banda-precomprimata-butil', 'banda-etansare-antivapori',
    'bagheta-warm-edge-thermo', 'geamuri-termopan-saint-gobain' ] },
  { title: 'Sisteme de Umbrire', titleEn: 'Shading Systems', keys: [
    'rulouri-exterioare-aluminiu', 'jaluzele-venetiene-raffstore', 'zipscreen', 'pergole-automate-somfy' ] },
];

function productBlock(key) {
  const meta = PRODUCT_META[key];
  const urls = PRODUCT_URL[key];
  if (!meta || !urls) return null;
  const faq = PRODUCT_FAQ[key];
  const brand = PRODUCT_BRAND[key];
  const parts = [];

  parts.push(`#### ${meta.title.ro}`);
  parts.push(`URL: ${urls.ro}`);
  if (brand) parts.push(`Producător: ${brand.manufacturer}${brand.country ? ` (${brand.country})` : ''}`);
  parts.push('');
  parts.push(meta.desc.ro);

  if (faq?.ro?.length) {
    parts.push('');
    parts.push('Întrebări frecvente:');
    faq.ro.forEach(([q, a]) => { parts.push(`- ${q}`); parts.push(`  ${a}`); });
  }

  parts.push('');
  parts.push(`##### [English] ${meta.title.en}`);
  parts.push(`URL: ${urls.en}`);
  parts.push('');
  parts.push(meta.desc.en);

  if (faq?.en?.length) {
    parts.push('');
    parts.push('Frequently asked questions:');
    faq.en.forEach(([q, a]) => { parts.push(`- ${q}`); parts.push(`  ${a}`); });
  }

  parts.push('');
  parts.push(`Alte limbi: DE ${urls.de} · FR ${urls.fr} · ES ${urls.es} · IT ${urls.it}`);
  return parts.join('\n');
}

// v280: intrebarile frecvente ale celor 5 pagini de categorie.
// Pana acum fisierul avea doar FAQ-ul de produs; cele 150 de perechi de categorie
// (ce aleg, prin ce difera, cat costa) existau doar ca FAQPage in pagina, deci
// erau invizibile pentru pipeline-urile care citesc acest fisier.
function hubBlock(key) {
  const name = HUB_NAME[key];
  const slug = HUB_SLUG[key];
  const faq = HUB_FAQ[key];
  if (!name || !slug || !faq) return null;
  const parts = [];

  parts.push(`#### ${name.ro}`);
  parts.push(`URL: ${BASE}/ro/${slug.ro}`);
  if (faq.ro?.length) {
    parts.push('');
    parts.push('Întrebări frecvente despre categorie:');
    faq.ro.forEach(([q, a]) => { parts.push(`- ${q}`); parts.push(`  ${a}`); });
  }

  parts.push('');
  parts.push(`##### [English] ${name.en}`);
  parts.push(`URL: ${BASE}/en/${slug.en}`);
  if (faq.en?.length) {
    parts.push('');
    parts.push('Category FAQ:');
    faq.en.forEach(([q, a]) => { parts.push(`- ${q}`); parts.push(`  ${a}`); });
  }

  parts.push('');
  parts.push(`Alte limbi: DE ${BASE}/de/${slug.de} · FR ${BASE}/fr/${slug.fr} · ES ${BASE}/es/${slug.es} · IT ${BASE}/it/${slug.it}`);
  return parts.join('\n');
}

export async function GET() {
  const sorted = [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));

  const header = `# Neofort BIZ — Full Content (llms-full.txt)

> Supplier & installer of Salamander PVC windows, Alumil aluminium windows, shading systems (Raffstore, ZipScreen) and nZEB solutions — Bucharest, Romania. EU-wide delivery. Site: ${BASE} · Index: ${BASE}/llms.txt
> This file contains the full product catalogue (names, URLs, descriptions and FAQ) followed by the full text of all technical blog articles, in Romanian (primary) and English. Other languages (DE/FR/ES/IT) are available on-site via hreflang; each product block lists its localized URLs.

---
`;

  // ─── Catalogul de produse ───
  const productSections = FAMILIES.map(fam => {
    const blocks = fam.keys.map(productBlock).filter(Boolean);
    if (!blocks.length) return null;
    return [`## ${fam.title} / ${fam.titleEn}`, '', blocks.join('\n\n')].join('\n');
  }).filter(Boolean);

  const productPart = ['# Catalog produse / Product catalogue', '', productSections.join('\n\n---\n\n')].join('\n');

  // ─── Intrebarile de categorie ───
  const hubBlocks = Object.keys(HUB_FAQ).map(hubBlock).filter(Boolean);
  const hubPart = hubBlocks.length
    ? ['# Întrebări pe categorii / Category FAQ', '', hubBlocks.join('\n\n---\n\n')].join('\n')
    : '';

  // ─── Articolele de blog ───
  const blocks = sorted.map(a => {
    const parts = [];
    parts.push(`## ${a.title.ro}`);
    parts.push(`URL: ${BASE}/ro/blog/${a.slugs.ro}`);
    parts.push(`Published: ${a.date}${a.dateModified ? ` · Modified: ${a.dateModified}` : ''} · Author: ${a.author}`);
    parts.push('');
    parts.push(a.content.ro || '');
    if (a.content.en) {
      parts.push('');
      parts.push(`### [English] ${a.title.en || a.title.ro}`);
      parts.push(`URL: ${BASE}/en/blog/${a.slugs.en || a.slugs.ro}`);
      parts.push('');
      parts.push(a.content.en);
    }
    return parts.join('\n');
  });

  const blogPart = ['# Articole tehnice / Technical articles', '', blocks.join('\n\n---\n\n')].join('\n');

  const body = header + productPart + '\n\n---\n\n'
    + (hubPart ? hubPart + '\n\n---\n\n' : '')
    + blogPart + '\n';

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
