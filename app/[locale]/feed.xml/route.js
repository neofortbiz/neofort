// v279: feed RSS per limba — /ro/feed.xml, /en/feed.xml, /de/feed.xml, /fr/feed.xml,
// /es/feed.xml, /it/feed.xml.
//
// Motiv: pana acum exista un singur feed, /feed.xml, cu articolele in romana. Agregatoarele
// si pipeline-urile de ingestie LLM din Germania, Franta sau Italia primeau titluri si
// descrieri romanesti pentru URL-uri romanesti, desi exista traducere completa pentru
// fiecare articol. /feed.xml ramane neschimbat (e deja referit in exterior) si serveste
// in continuare romana.
//
// Continut generat la build din data/blog.js — zero mentenanta manuala.
import { ARTICLES } from '../../../data/blog.js';
import { BASE, LOCALES } from '../../../lib/constants.js';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

// Titlul si descrierea canalului, pe limbi. Nu traduceri mecanice — formulari
// folosite de vorbitori nativi cand cauta continut tehnic de tamplarie.
const CHANNEL = {
  ro: {
    title: 'Neofort BIZ — Blog Tâmplărie PVC & Aluminiu',
    desc: 'Ghiduri tehnice, comparații și noutăți despre tâmplărie PVC Salamander, aluminiu Alumil, sisteme nZEB și umbrire — Neofort BIZ București.',
  },
  en: {
    title: 'Neofort BIZ — PVC & Aluminium Windows Blog',
    desc: 'Technical guides, comparisons and news on Salamander PVC windows, Alumil aluminium systems, nZEB installation and exterior shading — Neofort BIZ, Bucharest.',
  },
  de: {
    title: 'Neofort BIZ — Blog für Kunststoff- und Aluminiumfenster',
    desc: 'Technische Ratgeber, Vergleiche und Neuigkeiten zu Salamander Kunststofffenstern, Alumil Aluminiumsystemen, nZEB-Montage und Außenbeschattung — Neofort BIZ, Bukarest.',
  },
  fr: {
    title: 'Neofort BIZ — Blog menuiserie PVC et aluminium',
    desc: 'Guides techniques, comparatifs et actualités sur les fenêtres PVC Salamander, les systèmes aluminium Alumil, la pose nZEB et l’occultation extérieure — Neofort BIZ, Bucarest.',
  },
  es: {
    title: 'Neofort BIZ — Blog de carpintería PVC y aluminio',
    desc: 'Guías técnicas, comparativas y novedades sobre ventanas de PVC Salamander, sistemas de aluminio Alumil, instalación nZEB y sombreado exterior — Neofort BIZ, Bucarest.',
  },
  it: {
    title: 'Neofort BIZ — Blog infissi in PVC e alluminio',
    desc: 'Guide tecniche, confronti e novità su finestre in PVC Salamander, sistemi in alluminio Alumil, posa nZEB e schermature esterne — Neofort BIZ, Bucarest.',
  },
};

// Codul de limba pentru <language>, conform RFC 5646.
const LANG_TAG = { ro: 'ro-RO', en: 'en-GB', de: 'de-DE', fr: 'fr-FR', es: 'es-ES', it: 'it-IT' };

export async function GET(_request, { params }) {
  const { locale } = await params;
  const loc = LOCALES.includes(locale) ? locale : 'ro';
  const ch = CHANNEL[loc] || CHANNEL.ro;

  const sorted = [...ARTICLES]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 30);

  const items = sorted.map((a) => {
    // Slug-ul tradus; daca lipseste, cade pe romana — la fel ca paginile de articol.
    const slug = a.slugs?.[loc] || a.slugs?.ro;
    const url = `${BASE}/${loc}/blog/${slug}`;
    const pub = new Date(a.dateModified || a.date).toUTCString();
    const img = a.imageOg ? `${BASE}${a.imageOg}` : `${BASE}/og/BLOG.jpg`;
    const title = a.title?.[loc] || a.title?.ro || '';
    const desc = a.excerpt?.[loc] || a.metaDesc?.[loc] || a.excerpt?.ro || '';
    const cat = a.category?.[loc] || a.category?.ro || 'Blog';
    return `    <item>
      <title>${esc(title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pub}</pubDate>
      <description>${esc(desc)}</description>
      <enclosure url="${img}" type="image/jpeg" length="0"/>
      <author>oferte@neofort-biz.ro (${esc(a.author)})</author>
      <category>${esc(cat)}</category>
    </item>`;
  }).join('\n');

  const lastBuild = new Date(
    sorted[0]?.dateModified || sorted[0]?.date || Date.now()
  ).toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(ch.title)}</title>
    <link>${BASE}/${loc}/blog</link>
    <atom:link href="${BASE}/${loc}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>${esc(ch.desc)}</description>
    <language>${LANG_TAG[loc] || 'ro-RO'}</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
