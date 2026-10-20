// === Loader pentru scripts/amprenta.js — v284 ==============================
//
// Paginile din app/ sunt JSX, deci Node nu le poate importa: se opreste la
// parsare. Validatorul existent ocoleste problema citind sursa cu regex, dar
// regula 2 din contextul proiectului spune explicit „executa, nu parsa", iar
// o amprenta construita din regexuri ar masura textul sursei, nu rezultatul.
//
// Loaderul rezolva asta in doua puncte:
//   1. RESOLVE — importurile catre next/*, next-intl* si react sunt redirectate
//      catre stuburi virtuale definite mai jos. Fara node_modules, acestea sunt
//      singura cale ca un modul de pagina sa se incarce.
//   2. LOAD    — orice fisier .js din proiect care contine JSX e transpilat cu
//      parserul TypeScript (jsx: react-jsx) inainte sa ajunga la Node.
//
// Stuburile NU sunt mock-uri goale: getTranslations citeste messages/<limba>.json
// reale, deci titlurile si descrierile calculate sunt cele adevarate. Un stub
// care ar inventa texte ar produce o amprenta falsa — mai rau decat niciuna.
//
// Se inregistreaza din amprenta.js prin module.register(); nu se ruleaza singur.

import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const require_ = createRequire(import.meta.url);

// TypeScript e instalat global in mediul de lucru, nu in proiect. Incercam intai
// rezolvarea normala, apoi caile cunoscute. Daca lipseste, oprim cu un mesaj
// clar — altfel esecul ar aparea mai tarziu, ca o eroare de sintaxa pe JSX.
function loadTypeScript() {
  const candidates = ['typescript', '/opt/npm-tools/node_modules/typescript/lib/typescript.js'];
  for (const c of candidates) {
    try { return require_(c); } catch { /* urmatorul */ }
  }
  throw new Error(
    'amprenta: nu gasesc pachetul "typescript", necesar pentru a transpila JSX.\n' +
    'Instaleaza-l (npm i -D typescript) sau ruleaza scriptul in mediul care il are global.'
  );
}
const ts = loadTypeScript();

const ROOT = process.env.AMPRENTA_ROOT
  ? path.resolve(process.env.AMPRENTA_ROOT)
  : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const PREFIX = 'amprenta-stub:';

// ───────────────────────────── STUBURI ─────────────────────────────────────
// Sursa fiecarui stub, ca text. Sunt module ESM obisnuite, evaluate de Node.

const STUB_REACT_JSX_RUNTIME = `
// Nodul de element: un obiect simplu, parcurs ulterior de amprenta.js.
export const Fragment = Symbol.for('amprenta.fragment');
function el(type, props, key) {
  return { __amprentaEl: true, type, props: props || {}, key };
}
export const jsx = el;
export const jsxs = el;
export const jsxDEV = el;
`;

const STUB_REACT = `
import { Fragment as F } from 'react/jsx-runtime';
export const Fragment = F;
export function createElement(type, props, ...children) {
  const p = Object.assign({}, props);
  if (children.length) p.children = children.length === 1 ? children[0] : children;
  return { __amprentaEl: true, type, props: p };
}
// Hook-urile se intalnesc in componentele client. Returneaza starea initiala,
// deci componenta se randeaza asa cum o vede un vizitator inainte de hidratare
// — exact ce vede si un crawler.
export function useState(initial) {
  const v = typeof initial === 'function' ? initial() : initial;
  return [v, () => {}];
}
export function useEffect() {}
export function useLayoutEffect() {}
export function useRef(initial) { return { current: initial === undefined ? null : initial }; }
export function useMemo(fn) { try { return fn(); } catch { return undefined; } }
export function useCallback(fn) { return fn; }
export function useContext() { return undefined; }
export function useId() { return 'amprenta-id'; }
export function useReducer(r, init) { return [init, () => {}]; }
export function useTransition() { return [false, (fn) => fn && fn()]; }
export function memo(c) { return c; }
export function forwardRef(c) { return c; }
export const Suspense = Symbol.for('amprenta.suspense');
export default { createElement, Fragment, useState, useEffect, useRef, useMemo, useCallback, memo, forwardRef };
`;

const STUB_NEXT_NAVIGATION = `
export function notFound() { const e = new Error('NEXT_NOT_FOUND'); e.__notFound = true; throw e; }
export function redirect(url) { const e = new Error('NEXT_REDIRECT'); e.__redirect = url; throw e; }
export function permanentRedirect(url) { return redirect(url); }
export function usePathname() { return '/'; }
export function useRouter() { return { push(){}, replace(){}, refresh(){}, back(){}, prefetch(){} }; }
export function useSearchParams() { return new URLSearchParams(); }
export function useParams() { return {}; }
`;

const STUB_NEXT_SCRIPT = `
export default function Script(props) { return { __amprentaEl: true, type: 'script', props: props || {} }; }
`;

const STUB_NEXT_FONT = `
// next/font returneaza un obiect cu className/variable; nimic din el nu intra
// in amprenta, dar modulul trebuie sa existe ca layout.js sa se incarce.
function font() { return { className: 'amprenta-font', variable: '--amprenta-font', style: { fontFamily: 'amprenta' } }; }
export const Barlow = font;
export const Barlow_Condensed = font;
export default font;
export function Inter() { return font(); }
`;

const STUB_NEXT_SERVER = `
export const NextResponse = {
  json: (obj, init) => ({ __json: obj, init }),
  redirect: (url, status) => ({ __redirect: String(url), status }),
  next: () => ({ __next: true }),
};
export class NextRequest {}
`;

// getTranslations citeste traducerile REALE din messages/<limba>.json.
const STUB_NEXT_INTL_SERVER = `
import fs from 'node:fs';
import path from 'node:path';
const ROOT = ${JSON.stringify(ROOT)};
const cache = new Map();
function messages(locale) {
  if (cache.has(locale)) return cache.get(locale);
  let m = {};
  try { m = JSON.parse(fs.readFileSync(path.join(ROOT, 'messages', locale + '.json'), 'utf8')); } catch {}
  cache.set(locale, m);
  return m;
}
function pick(obj, dotted) {
  return String(dotted).split('.').reduce((o, k) => (o && typeof o === 'object' ? o[k] : undefined), obj);
}
function make(locale, namespace) {
  const all = messages(locale);
  const base = namespace ? pick(all, namespace) : all;
  // Cheia lipsa se intoarce ca nume de cheie, nu arunca: o traducere absenta
  // trebuie sa apara ca diferenta in amprenta, nu sa opreasca masuratoarea.
  const t = (key, vals) => {
    const v = pick(base, key);
    if (typeof v === 'string') {
      return vals ? v.replace(/\\{(\\w+)\\}/g, (_, k) => (k in vals ? String(vals[k]) : '{' + k + '}')) : v;
    }
    return namespace ? namespace + '.' + key : String(key);
  };
  t.rich = (key, vals) => t(key, vals);
  t.raw = (key) => pick(base, key);
  t.markup = (key, vals) => t(key, vals);
  t.has = (key) => pick(base, key) !== undefined;
  return t;
}
export async function getTranslations(arg) {
  if (typeof arg === 'string') return make('ro', arg);
  return make((arg && arg.locale) || 'ro', arg && arg.namespace);
}
export async function getMessages(arg) { return messages((arg && arg.locale) || 'ro'); }
export async function getLocale() { return 'ro'; }
export async function getNow() { return new Date(0); }
export async function getTimeZone() { return 'Europe/Bucharest'; }
export function setRequestLocale() {}
export function unstable_setRequestLocale() {}
`;

const STUB_NEXT_INTL = `
import { getTranslations } from 'next-intl/server';
export function NextIntlClientProvider(props) {
  return { __amprentaEl: true, type: 'NextIntlClientProvider', props: props || {} };
}
// Varianta sincrona, pentru componentele client.
import fs from 'node:fs';
import path from 'node:path';
const ROOT = ${JSON.stringify(ROOT)};
const cache = new Map();
function messages(locale) {
  if (cache.has(locale)) return cache.get(locale);
  let m = {};
  try { m = JSON.parse(fs.readFileSync(path.join(ROOT, 'messages', locale + '.json'), 'utf8')); } catch {}
  cache.set(locale, m);
  return m;
}
function pick(obj, dotted) {
  return String(dotted).split('.').reduce((o, k) => (o && typeof o === 'object' ? o[k] : undefined), obj);
}
export function useTranslations(namespace) {
  const all = messages(globalThis.__AMPRENTA_LOCALE || 'ro');
  const base = namespace ? pick(all, namespace) : all;
  const t = (key, vals) => {
    const v = pick(base, key);
    if (typeof v === 'string') {
      return vals ? v.replace(/\\{(\\w+)\\}/g, (_, k) => (k in vals ? String(vals[k]) : '{' + k + '}')) : v;
    }
    return namespace ? namespace + '.' + key : String(key);
  };
  t.rich = (key, vals) => t(key, vals);
  t.raw = (key) => pick(base, key);
  t.has = (key) => pick(base, key) !== undefined;
  return t;
}
export function useLocale() { return globalThis.__AMPRENTA_LOCALE || 'ro'; }
export function useMessages() { return messages(globalThis.__AMPRENTA_LOCALE || 'ro'); }
export function useFormatter() {
  return { dateTime: (d) => String(d), number: (n) => String(n), relativeTime: () => '', list: (l) => Array.from(l).join(', ') };
}
export { getTranslations };
`;

const STUBS = {
  'react': STUB_REACT,
  'react/jsx-runtime': STUB_REACT_JSX_RUNTIME,
  'react/jsx-dev-runtime': STUB_REACT_JSX_RUNTIME,
  'react-dom': 'export default {}; export function createPortal(c) { return c; }',
  'next/navigation': STUB_NEXT_NAVIGATION,
  'next/script': STUB_NEXT_SCRIPT,
  'next/font/google': STUB_NEXT_FONT,
  'next/font/local': STUB_NEXT_FONT,
  'next/server': STUB_NEXT_SERVER,
  'next/link': 'export default function Link(props) { return { __amprentaEl: true, type: "a", props: props || {} }; }',
  'next/image': 'export default function Image(props) { return { __amprentaEl: true, type: "img", props: props || {} }; }',
  'next/headers': 'export function headers() { return new Map(); } export function cookies() { return new Map(); }',
  'next-intl': STUB_NEXT_INTL,
  'next-intl/server': STUB_NEXT_INTL_SERVER,
  'next-intl/navigation': `
    export function createNavigation() { return navObj(); }
    export function createSharedPathnamesNavigation() { return navObj(); }
    export function createLocalizedPathnamesNavigation() { return navObj(); }
    function navObj() {
      return {
        Link: (props) => ({ __amprentaEl: true, type: 'a', props: props || {} }),
        redirect: () => {},
        usePathname: () => '/',
        useRouter: () => ({ push(){}, replace(){} }),
        getPathname: ({ href }) => (typeof href === 'string' ? href : (href && href.pathname) || '/'),
      };
    }`,
  'next-intl/routing': `
    export function defineRouting(cfg) { return cfg; }`,
  'next-intl/plugin': 'export default () => (cfg) => cfg;',
};

// ───────────────────────────── HOOK-URI ────────────────────────────────────

export async function resolve(specifier, context, nextResolve) {
  if (Object.prototype.hasOwnProperty.call(STUBS, specifier)) {
    return { url: PREFIX + specifier, shortCircuit: true, format: 'module' };
  }

  try {
    return await nextResolve(specifier, context);
  } catch (e) {
    // Proiectul importa fara extensie ('../../components/FaqAccordion'), ceea ce
    // webpack rezolva si Node ESM nu. Incercam sufixele uzuale, in ordinea in
    // care le-ar incerca si bundlerul.
    const relativ = specifier.startsWith('.') || specifier.startsWith('/');
    if (!relativ || !context.parentURL) throw e;
    const baza = new URL(specifier, context.parentURL);
    for (const sufix of ['.js', '.jsx', '/index.js', '/index.jsx']) {
      const incercare = new URL(baza.href + sufix);
      try {
        if (fs.existsSync(fileURLToPath(incercare))) {
          return { url: incercare.href, shortCircuit: true, format: 'module' };
        }
      } catch { /* urmatorul sufix */ }
    }
    throw e;
  }
}

const areJSX = (src) =>
  /<[A-Za-z][\w.]*[\s/>]/.test(src) || /<>/.test(src) || /<\/[A-Za-z][\w.]*>/.test(src);

export async function load(url, context, nextLoad) {
  if (url.startsWith(PREFIX)) {
    return { format: 'module', shortCircuit: true, source: STUBS[url.slice(PREFIX.length)] };
  }

  if (url.startsWith('file:') && url.endsWith('.js')) {
    const file = fileURLToPath(url);
    if (file.startsWith(ROOT) && !file.includes(`${path.sep}node_modules${path.sep}`)) {
      const src = fs.readFileSync(file, 'utf8');
      if (areJSX(src)) {
        const out = ts.transpileModule(src, {
          fileName: file,
          compilerOptions: {
            jsx: ts.JsxEmit.ReactJSX,
            module: ts.ModuleKind.ESNext,
            target: ts.ScriptTarget.ESNext,
            isolatedModules: true,
            esModuleInterop: true,
          },
        });
        return { format: 'module', shortCircuit: true, source: out.outputText };
      }
    }
  }

  return nextLoad(url, context);
}

export const AMPRENTA_ROOT = ROOT;
export const toFileUrl = pathToFileURL;
