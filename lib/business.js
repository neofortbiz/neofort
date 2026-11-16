// Datele firmei pentru JSON-LD: o singura sursa. v327.
//
// Auditul din v327 a gasit aceeasi firma descrisa in patru feluri pe pagini diferite:
// trei nume („Neofort BIZ”, „Neofort BIZ SRL”, „NEOFORT BIZ SRL”), patru scrieri ale
// strazii, trei liste de telefoane si trei dimensiuni declarate pentru sigla. Toate
// nodurile poarta acelasi @id (#localbusiness), deci un motor le citea ca pe o singura
// entitate cu date care se contrazic.
//
// Nodul de referinta e cel din app/[locale]/page.js; valorile de aici sunt ale lui.
// Garda 29 din scripts/validate-blog.js opreste livrarea daca vreo pagina scrie din nou
// de mana o adresa, o sigla sau un nume diferit.
import { BASE } from './constants.js';

export const BIZ_NAME = 'Neofort BIZ SRL';
export const BIZ_LEGAL_NAME = 'NEOFORT BIZ SRL';
export const BIZ_PHONES = ['+40215280661', '+40752443435', '+40752443439', '+40758990048'];
export const BIZ_EMAIL = 'oferte@neofort-biz.ro';
export const BIZ_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Str. Theodor Aman Pictor 11',
  addressLocality: 'București',
  addressRegion: 'Sector 1',
  postalCode: '010776',
  addressCountry: 'RO',
};
export const BIZ_GEO = { '@type': 'GeoCoordinates', latitude: 44.4430930263596, longitude: 26.088545186506916 };
export const BIZ_HOURS = [{
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '10:00',
  closes: '18:00',
}];
// Sigla: dimensiunile reale ale fisierului public/Neofort.avif.
export const BIZ_LOGO = { '@type': 'ImageObject', url: `${BASE}/Neofort.avif`, width: 204, height: 148 };

// Nodul LocalBusiness pentru paginile care il repeta (contact, servicii, paginile locale).
// `extra` adauga proprietatile specifice paginii (areaServed, description, contactPoint).
export function localBusinessNode(extra = {}) {
  return {
    '@type': 'LocalBusiness',
    '@id': `${BASE}/#localbusiness`,
    name: BIZ_NAME,
    url: BASE,
    telephone: BIZ_PHONES,
    email: BIZ_EMAIL,
    address: BIZ_ADDRESS,
    geo: BIZ_GEO,
    openingHoursSpecification: BIZ_HOURS,
    ...extra,
  };
}
