// v277 — sursă unică pentru vechimea firmei.
//
// Motiv: "21 ani" era scris de mână în ~440 de locuri, în 9 fișiere și 6 limbi,
// fără nicio legătură cu anul curent. Pe 1 ianuarie 2027 toate devin greșite
// simultan și nimeni nu are de unde să știe unde sunt.
//
// Activitate din 2005 (SRL înființat în 2012, dar vechimea comunicată e din 2005).
// Valoarea se recalculează la fiecare build Vercel.
//
// Ce folosește deja acest fișier: data/blog.js (authorRole, 56 de articole × 6 limbi).
// Ce NU îl folosește încă: textele din paginile de categorie și din proza articolelor —
// acolo numărul e încastrat în fraze. Pentru ele, scripts/validate-blog.js dă EROARE
// dacă numărul scris nu mai corespunde anului curent, deci driftul nu poate trece tăcut.

export const FOUNDED_YEAR = 2005;

export const EXPERIENCE_YEARS = new Date().getFullYear() - FOUNDED_YEAR;

// Rolul autorului articolelor, construit din valoarea de mai sus.
export const AUTHOR_ROLE = {
  ro: `Consultant Tehnic Senior — ${EXPERIENCE_YEARS} ani experiență`,
  en: `Senior Technical Consultant — ${EXPERIENCE_YEARS} years experience`,
  de: `Leitender technischer Berater — ${EXPERIENCE_YEARS} Jahre Erfahrung`,
  fr: `Consultant technique senior — ${EXPERIENCE_YEARS} ans d’expérience`,
  es: `Asesor técnico senior — ${EXPERIENCE_YEARS} años de experiencia`,
  it: `Consulente tecnico senior — ${EXPERIENCE_YEARS} anni di esperienza`,
};
