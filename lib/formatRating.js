// Formatare pură "rating + numar recenzii" → text afișat, per limbă.
// Safe pentru 'use client' components (zero fetch, zero secrete) — separat de
// lib/googleRating.js (server-only) ca să nu ajungă API keys în bundle-ul client.

export function formatRatingLabel(rating, count, locale) {
  const stars = `${rating.toFixed(1)}★`;
  const labels = {
    ro: `${count} Recenzii Google`,
    en: `${count} Google Reviews`,
    de: `${count} Google-Bewertungen`,
    fr: `${count} Avis Google`,
    es: `${count} Reseñas Google`,
    it: `${count} Recensioni Google`,
  };
  return `${stars} · ${labels[locale] || labels.ro}`;
}

/** Returnează tuplul [stele, label] separat — pt. afișări tip stat-card (ex. homepage). */
export function formatRatingParts(rating, count, locale) {
  const stars = `${rating.toFixed(1)}★`;
  const labels = {
    ro: `${count} Recenzii Google`,
    en: `${count} Google Reviews`,
    de: `${count} Google-Bewertungen`,
    fr: `${count} Avis Google`,
    es: `${count} Reseñas Google`,
    it: `${count} Recensioni Google`,
  };
  return [stars, labels[locale] || labels.ro];
}
