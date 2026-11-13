// === v319: versiunea Markdown a articolelor de blog =========================
//
// Adresa publica: /<limba>/blog/<slug>.md (convenția llmstxt.org: aceeași adresă
// cu „.md” la final). next.config.js o rescrie intern către această rută.
// Agenții AI citesc Markdown mai repede și mai ieftin decât HTML-ul paginii.
//
// Conținutul e exact cel din data/blog.js (care e deja Markdown); linkurile
// relative devin absolute. Pagina HTML rămâne cea canonică: răspunsul are
// „Link: rel=canonical” către ea și „X-Robots-Tag: noindex”, ca Google să nu
// indexeze duplicatul.

import { getArticle } from '../../../../../../data/blog.js';
import { BASE, LOCALES } from '../../../../../../lib/constants.js';

export const runtime = 'nodejs';

const LABELS = {
  ro: { pub: 'Publicat', cat: 'Categorie', read: 'Timp de citire', author: 'Autor', page: 'Pagina articolului', contact: 'Ofertă și contact' },
  en: { pub: 'Published', cat: 'Category', read: 'Reading time', author: 'Author', page: 'Article page', contact: 'Quote and contact' },
  de: { pub: 'Veröffentlicht', cat: 'Kategorie', read: 'Lesezeit', author: 'Autor', page: 'Artikelseite', contact: 'Angebot und Kontakt' },
  fr: { pub: 'Publié', cat: 'Catégorie', read: 'Temps de lecture', author: 'Auteur', page: 'Page de l’article', contact: 'Devis et contact' },
  es: { pub: 'Publicado', cat: 'Categoría', read: 'Tiempo de lectura', author: 'Autor', page: 'Página del artículo', contact: 'Presupuesto y contacto' },
  it: { pub: 'Pubblicato', cat: 'Categoria', read: 'Tempo di lettura', author: 'Autore', page: 'Pagina dell’articolo', contact: 'Preventivo e contatti' },
};
const CONTACT = { ro: '/ro/contact', en: '/en/contact', de: '/de/kontakt', fr: '/fr/contact', es: '/es/contacto', it: '/it/contatti' };

// [text](/ro/...) → [text](https://www.neofort-biz.ro/ro/...)
const absolute = (md) => md.replace(/\]\((\/[^)\s]*)\)/g, (_, p) => `](${BASE}${p})`);

const notFound = () => new Response('Not found\n', {
  status: 404,
  headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex', 'Cache-Control': 'public, max-age=300' },
});

export async function GET(_request, { params }) {
  const { locale, slug } = await params;
  if (!LOCALES.includes(locale) || typeof slug !== 'string') return notFound();
  const a = getArticle(slug);
  // Doar slugul canonic al limbii cerute — fara duplicate intre limbi.
  if (!a || (a.slugs[locale] || a.slugs.ro) !== slug) return notFound();

  const L = LABELS[locale];
  const pick = (f) => (a[f] && (a[f][locale] || a[f].ro)) || '';
  const url = `${BASE}/${locale}/blog/${slug}`;
  const meta = [
    `- ${L.page}: ${url}`,
    a.date ? `- ${L.pub}: ${pick('dateDisplay') || a.date} (${a.date})` : '',
    pick('category') ? `- ${L.cat}: ${pick('category')}` : '',
    pick('readTime') ? `- ${L.read}: ${pick('readTime')}` : '',
    a.author ? `- ${L.author}: ${a.author}, Neofort BIZ` : '',
  ].filter(Boolean).join('\n');

  const body = [
    `# ${pick('title')}`,
    pick('excerpt') ? `> ${pick('excerpt').replace(/\n+/g, ' ')}` : '',
    meta,
    '---',
    absolute(pick('content').trim()),
    '---',
    `${L.contact}: ${BASE}${CONTACT[locale]} · oferte@neofort-biz.ro · +40 752 443 435 · Neofort BIZ SRL, București`,
    '',
  ].filter((x) => x !== '').join('\n\n');

  return new Response(body + '\n', {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Link': `<${url}>; rel="canonical"`,
      'X-Robots-Tag': 'noindex',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
