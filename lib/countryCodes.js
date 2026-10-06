// ─────────────────────────────────────────────────────────────────────────────
// PREFIXE TELEFONICE — v260
//
// Domeniu: SUA, Canada, Marea Britanie si toate tarile europene, inclusiv cele
// din afara UE (Rusia, Ucraina, Turcia, Belarus, Caucaz).
//
// Prefixele au fost verificate pe lista ITU reprodusa de Wikipedia
// (List of country calling codes), nu scrise din memorie.
//
// Vaticanul e exclus intentionat: are +379 alocat oficial, dar in practica se
// apeleaza pe +39 06 698, deci un selector ar induce in eroare.
// Rusia si Kazahstanul impart +7 — raman doua intrari distincte, cu acelasi dial.
// ─────────────────────────────────────────────────────────────────────────────

export const COUNTRIES = [
  { iso:'AL', dial:'+355', flag:'🇦🇱', name:{ ro:'Albania',               en:'Albania',                de:'Albanien',               fr:'Albanie',            es:'Albania',           it:'Albania' } },
  { iso:'AD', dial:'+376', flag:'🇦🇩', name:{ ro:'Andorra',               en:'Andorra',                de:'Andorra',                fr:'Andorre',            es:'Andorra',           it:'Andorra' } },
  { iso:'AM', dial:'+374', flag:'🇦🇲', name:{ ro:'Armenia',               en:'Armenia',                de:'Armenien',               fr:'Arménie',            es:'Armenia',           it:'Armenia' } },
  { iso:'AT', dial:'+43',  flag:'🇦🇹', name:{ ro:'Austria',               en:'Austria',                de:'Österreich',             fr:'Autriche',           es:'Austria',           it:'Austria' } },
  { iso:'AZ', dial:'+994', flag:'🇦🇿', name:{ ro:'Azerbaidjan',           en:'Azerbaijan',             de:'Aserbaidschan',          fr:'Azerbaïdjan',        es:'Azerbaiyán',        it:'Azerbaigian' } },
  { iso:'BY', dial:'+375', flag:'🇧🇾', name:{ ro:'Belarus',               en:'Belarus',                de:'Belarus',                fr:'Biélorussie',        es:'Bielorrusia',       it:'Bielorussia' } },
  { iso:'BE', dial:'+32',  flag:'🇧🇪', name:{ ro:'Belgia',                en:'Belgium',                de:'Belgien',                fr:'Belgique',           es:'Bélgica',           it:'Belgio' } },
  { iso:'BA', dial:'+387', flag:'🇧🇦', name:{ ro:'Bosnia și Herțegovina', en:'Bosnia and Herzegovina', de:'Bosnien und Herzegowina',fr:'Bosnie-Herzégovine', es:'Bosnia y Herzegovina', it:'Bosnia ed Erzegovina' } },
  { iso:'BG', dial:'+359', flag:'🇧🇬', name:{ ro:'Bulgaria',              en:'Bulgaria',               de:'Bulgarien',              fr:'Bulgarie',           es:'Bulgaria',          it:'Bulgaria' } },
  { iso:'CA', dial:'+1',   flag:'🇨🇦', name:{ ro:'Canada',                en:'Canada',                 de:'Kanada',                 fr:'Canada',             es:'Canadá',            it:'Canada' } },
  { iso:'CZ', dial:'+420', flag:'🇨🇿', name:{ ro:'Cehia',                 en:'Czechia',                de:'Tschechien',             fr:'Tchéquie',           es:'Chequia',           it:'Cechia' } },
  { iso:'CY', dial:'+357', flag:'🇨🇾', name:{ ro:'Cipru',                 en:'Cyprus',                 de:'Zypern',                 fr:'Chypre',             es:'Chipre',            it:'Cipro' } },
  { iso:'HR', dial:'+385', flag:'🇭🇷', name:{ ro:'Croația',               en:'Croatia',                de:'Kroatien',               fr:'Croatie',            es:'Croacia',           it:'Croazia' } },
  { iso:'DK', dial:'+45',  flag:'🇩🇰', name:{ ro:'Danemarca',             en:'Denmark',                de:'Dänemark',               fr:'Danemark',           es:'Dinamarca',         it:'Danimarca' } },
  { iso:'CH', dial:'+41',  flag:'🇨🇭', name:{ ro:'Elveția',               en:'Switzerland',            de:'Schweiz',                fr:'Suisse',             es:'Suiza',             it:'Svizzera' } },
  { iso:'EE', dial:'+372', flag:'🇪🇪', name:{ ro:'Estonia',               en:'Estonia',                de:'Estland',                fr:'Estonie',            es:'Estonia',           it:'Estonia' } },
  { iso:'FI', dial:'+358', flag:'🇫🇮', name:{ ro:'Finlanda',              en:'Finland',                de:'Finnland',               fr:'Finlande',           es:'Finlandia',         it:'Finlandia' } },
  { iso:'FR', dial:'+33',  flag:'🇫🇷', name:{ ro:'Franța',                en:'France',                 de:'Frankreich',             fr:'France',             es:'Francia',           it:'Francia' } },
  { iso:'GE', dial:'+995', flag:'🇬🇪', name:{ ro:'Georgia',               en:'Georgia',                de:'Georgien',               fr:'Géorgie',            es:'Georgia',           it:'Georgia' } },
  { iso:'DE', dial:'+49',  flag:'🇩🇪', name:{ ro:'Germania',              en:'Germany',                de:'Deutschland',            fr:'Allemagne',          es:'Alemania',          it:'Germania' } },
  { iso:'GI', dial:'+350', flag:'🇬🇮', name:{ ro:'Gibraltar',             en:'Gibraltar',              de:'Gibraltar',              fr:'Gibraltar',          es:'Gibraltar',         it:'Gibilterra' } },
  { iso:'GR', dial:'+30',  flag:'🇬🇷', name:{ ro:'Grecia',                en:'Greece',                 de:'Griechenland',           fr:'Grèce',              es:'Grecia',            it:'Grecia' } },
  { iso:'IE', dial:'+353', flag:'🇮🇪', name:{ ro:'Irlanda',               en:'Ireland',                de:'Irland',                 fr:'Irlande',            es:'Irlanda',           it:'Irlanda' } },
  { iso:'IS', dial:'+354', flag:'🇮🇸', name:{ ro:'Islanda',               en:'Iceland',                de:'Island',                 fr:'Islande',            es:'Islandia',          it:'Islanda' } },
  { iso:'IT', dial:'+39',  flag:'🇮🇹', name:{ ro:'Italia',                en:'Italy',                  de:'Italien',                fr:'Italie',             es:'Italia',            it:'Italia' } },
  { iso:'KZ', dial:'+7',   flag:'🇰🇿', name:{ ro:'Kazahstan',             en:'Kazakhstan',             de:'Kasachstan',             fr:'Kazakhstan',         es:'Kazajistán',        it:'Kazakistan' } },
  { iso:'XK', dial:'+383', flag:'🇽🇰', name:{ ro:'Kosovo',                en:'Kosovo',                 de:'Kosovo',                 fr:'Kosovo',             es:'Kosovo',            it:'Kosovo' } },
  { iso:'LV', dial:'+371', flag:'🇱🇻', name:{ ro:'Letonia',               en:'Latvia',                 de:'Lettland',               fr:'Lettonie',           es:'Letonia',           it:'Lettonia' } },
  { iso:'LI', dial:'+423', flag:'🇱🇮', name:{ ro:'Liechtenstein',         en:'Liechtenstein',          de:'Liechtenstein',          fr:'Liechtenstein',      es:'Liechtenstein',     it:'Liechtenstein' } },
  { iso:'LT', dial:'+370', flag:'🇱🇹', name:{ ro:'Lituania',              en:'Lithuania',              de:'Litauen',                fr:'Lituanie',           es:'Lituania',          it:'Lituania' } },
  { iso:'LU', dial:'+352', flag:'🇱🇺', name:{ ro:'Luxemburg',             en:'Luxembourg',             de:'Luxemburg',              fr:'Luxembourg',         es:'Luxemburgo',        it:'Lussemburgo' } },
  { iso:'MK', dial:'+389', flag:'🇲🇰', name:{ ro:'Macedonia de Nord',     en:'North Macedonia',        de:'Nordmazedonien',         fr:'Macédoine du Nord',  es:'Macedonia del Norte', it:'Macedonia del Nord' } },
  { iso:'MT', dial:'+356', flag:'🇲🇹', name:{ ro:'Malta',                 en:'Malta',                  de:'Malta',                  fr:'Malte',              es:'Malta',             it:'Malta' } },
  { iso:'GB', dial:'+44',  flag:'🇬🇧', name:{ ro:'Marea Britanie',        en:'United Kingdom',         de:'Vereinigtes Königreich', fr:'Royaume-Uni',        es:'Reino Unido',       it:'Regno Unito' } },
  { iso:'MD', dial:'+373', flag:'🇲🇩', name:{ ro:'Moldova',               en:'Moldova',                de:'Moldau',                 fr:'Moldavie',           es:'Moldavia',          it:'Moldavia' } },
  { iso:'MC', dial:'+377', flag:'🇲🇨', name:{ ro:'Monaco',                en:'Monaco',                 de:'Monaco',                 fr:'Monaco',             es:'Mónaco',            it:'Monaco' } },
  { iso:'ME', dial:'+382', flag:'🇲🇪', name:{ ro:'Muntenegru',            en:'Montenegro',             de:'Montenegro',             fr:'Monténégro',         es:'Montenegro',        it:'Montenegro' } },
  { iso:'NO', dial:'+47',  flag:'🇳🇴', name:{ ro:'Norvegia',              en:'Norway',                 de:'Norwegen',               fr:'Norvège',            es:'Noruega',           it:'Norvegia' } },
  { iso:'PL', dial:'+48',  flag:'🇵🇱', name:{ ro:'Polonia',               en:'Poland',                 de:'Polen',                  fr:'Pologne',            es:'Polonia',           it:'Polonia' } },
  { iso:'PT', dial:'+351', flag:'🇵🇹', name:{ ro:'Portugalia',            en:'Portugal',               de:'Portugal',               fr:'Portugal',           es:'Portugal',          it:'Portogallo' } },
  { iso:'RO', dial:'+40',  flag:'🇷🇴', name:{ ro:'România',               en:'Romania',                de:'Rumänien',               fr:'Roumanie',           es:'Rumanía',           it:'Romania' } },
  { iso:'RU', dial:'+7',   flag:'🇷🇺', name:{ ro:'Rusia',                 en:'Russia',                 de:'Russland',               fr:'Russie',             es:'Rusia',             it:'Russia' } },
  { iso:'SM', dial:'+378', flag:'🇸🇲', name:{ ro:'San Marino',            en:'San Marino',             de:'San Marino',             fr:'Saint-Marin',        es:'San Marino',        it:'San Marino' } },
  { iso:'RS', dial:'+381', flag:'🇷🇸', name:{ ro:'Serbia',                en:'Serbia',                 de:'Serbien',                fr:'Serbie',             es:'Serbia',            it:'Serbia' } },
  { iso:'SK', dial:'+421', flag:'🇸🇰', name:{ ro:'Slovacia',              en:'Slovakia',               de:'Slowakei',               fr:'Slovaquie',          es:'Eslovaquia',        it:'Slovacchia' } },
  { iso:'SI', dial:'+386', flag:'🇸🇮', name:{ ro:'Slovenia',              en:'Slovenia',               de:'Slowenien',              fr:'Slovénie',           es:'Eslovenia',         it:'Slovenia' } },
  { iso:'ES', dial:'+34',  flag:'🇪🇸', name:{ ro:'Spania',                en:'Spain',                  de:'Spanien',                fr:'Espagne',            es:'España',            it:'Spagna' } },
  { iso:'US', dial:'+1',   flag:'🇺🇸', name:{ ro:'SUA',                   en:'United States',          de:'Vereinigte Staaten',     fr:'États-Unis',         es:'Estados Unidos',    it:'Stati Uniti' } },
  { iso:'SE', dial:'+46',  flag:'🇸🇪', name:{ ro:'Suedia',                en:'Sweden',                 de:'Schweden',               fr:'Suède',              es:'Suecia',            it:'Svezia' } },
  { iso:'TR', dial:'+90',  flag:'🇹🇷', name:{ ro:'Turcia',                en:'Turkey',                 de:'Türkei',                 fr:'Turquie',            es:'Turquía',           it:'Turchia' } },
  { iso:'UA', dial:'+380', flag:'🇺🇦', name:{ ro:'Ucraina',               en:'Ukraine',                de:'Ukraine',                fr:'Ukraine',            es:'Ucrania',           it:'Ucraina' } },
  { iso:'HU', dial:'+36',  flag:'🇭🇺', name:{ ro:'Ungaria',               en:'Hungary',                de:'Ungarn',                 fr:'Hongrie',            es:'Hungría',           it:'Ungheria' } },
  { iso:'NL', dial:'+31',  flag:'🇳🇱', name:{ ro:'Țările de Jos',         en:'Netherlands',            de:'Niederlande',            fr:'Pays-Bas',           es:'Países Bajos',      it:'Paesi Bassi' } },
];

// Capul listei, scos din regula alfabetica. Ordinea de aici e ordinea afisata.
// Logica ceruta de Dan: prima e tara limbii curente, apoi arealul lingvistic,
// iar Romania incheie intotdeauna lista scurta cand nu e prima — exista romani
// stabiliti in tarile respective care pot cauta firma.
export const HEAD_BY_LOCALE = {
  ro: ['RO','IT','DE','FR','ES','GB'],                 // cele 6 limbi ale site-ului
  it: ['IT','FR','ES','PT','SM','RO'],                 // areal latin
  de: ['DE','AT','CH','LI','LU','BE','RO'],            // areal germanofon
  fr: ['FR','BE','CH','LU','MC','RO'],                 // areal francofon
  es: ['ES','PT','FR','IT','AD','RO'],                 // areal latin, pornind din Peninsula Iberica
  en: ['GB','IE','MT','US','CA','RO'],                 // areal anglofon + America de Nord
};

// Lista completa pentru o limba: capul fix, apoi restul alfabetic DUPA NUMELE
// DIN ACEA LIMBA. localeCompare aseaza corect diacriticele fiecarei limbi.
export function getOrderedCountries(locale) {
  const loc  = HEAD_BY_LOCALE[locale] ? locale : 'ro';
  const head = HEAD_BY_LOCALE[loc];
  const byIso = Object.fromEntries(COUNTRIES.map(c => [c.iso, c]));
  const pinned = head.map(iso => byIso[iso]).filter(Boolean);
  const rest = COUNTRIES
    .filter(c => !head.includes(c.iso))
    .sort((a, b) => a.name[loc].localeCompare(b.name[loc], loc));
  return { pinned, rest };
}

// Eticheta afisata intr-un <option>. Emoji-ul de steag se randeaza pe Android,
// iOS si macOS; pe Windows fontul nu are glife de steag si afiseaza perechea de
// litere ISO (RO, DE...), ceea ce ramane perfect lizibil.
export function countryLabel(c, locale) {
  return `${c.flag} ${c.name[locale] || c.name.ro} ${c.dial}`;
}

export const DIALS = [...new Set(COUNTRIES.map(c => c.dial))];

// ─────────────────────────────────────────────────────────────────────────────
// VALIDARE NUMAR — o singura implementare, folosita SI in browser SI pe server.
// Fara libphonenumber: ar fi o dependenta npm noua, pe care nu o pot instala si
// testa in sandbox. Validarea e structurala, nu per-tara, cu o singura exceptie
// (Romania), unde regula e cunoscuta cu certitudine.
// ─────────────────────────────────────────────────────────────────────────────

// Italia pastreaza zeroul initial in format international pentru fix (+39 06 ...),
// spre deosebire de restul Europei, unde zeroul national se elimina.
const KEEP_LEADING_ZERO = new Set(['+39']);

function isSequential(n) {
  if (n.length < 6) return false;
  let asc = true, desc = true;
  for (let i = 1; i < n.length; i++) {
    if (+n[i] !== (+n[i - 1] + 1) % 10) asc = false;
    if (+n[i] !== (+n[i - 1] + 9) % 10) desc = false;
  }
  return asc || desc;
}

export function validatePhone(dial, raw) {
  if (!DIALS.includes(dial)) return { ok: false, reason: 'prefix' };
  let n = String(raw || '').replace(/\D/g, '');
  if (!n) return { ok: false, reason: 'gol' };

  // Clientul a retastat prefixul in campul national (0040..., 40..., 0033...).
  const dd = dial.slice(1);
  if (n.startsWith('00' + dd) && n.length > dd.length + 7) n = n.slice(2 + dd.length);
  else if (n.startsWith(dd) && n.length > dd.length + 7)   n = n.slice(dd.length);

  if (!KEEP_LEADING_ZERO.has(dial)) n = n.replace(/^0+/, '');
  if (!n) return { ok: false, reason: 'gol' };

  if (n.length < 6 || n.length > 13)   return { ok: false, reason: 'lungime' };
  if (/^(\d)\1+$/.test(n))             return { ok: false, reason: 'identice' };
  if (isSequential(n))                 return { ok: false, reason: 'secvential' };

  // Romania: 9 cifre dupa zeroul national. Mobil 7x, fix 2x sau 3x.
  if (dial === '+40' && !/^[237]\d{8}$/.test(n)) return { ok: false, reason: 'ro' };

  const e164 = dial + n;
  if (e164.replace(/\D/g, '').length > 15) return { ok: false, reason: 'e164' };
  return { ok: true, e164 };
}
