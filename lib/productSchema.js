// Nodul de pagina pentru paginile de produs. v327.
//
// Pana la v326 nodul Product purta `inLanguage` si `seller`. Niciuna nu e proprietate
// valida pe Product in schema.org (`inLanguage` tine de CreativeWork, `seller` de Offer),
// deci validatoarele le semnalau, iar motoarele le ignorau. Informatia insa conteaza:
// in ce limba e pagina si ca produsul e furnizat de Neofort BIZ (nodul unic
// ${BASE}/#localbusiness din app/[locale]/page.js). Ea sta acum pe un nod ItemPage,
// unde ambele proprietati sunt valide, legat de Product prin mainEntity.
//
// Un Offer cu `seller` nu e o varianta: fara pret, Google il raporteaza ca eroare.
export function itemPageSchema({ base, pageUrl, locale, name }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    inLanguage: locale,
    isPartOf: { '@id': `${base}/#website` },
    mainEntity: { '@id': `${pageUrl}#product` },
    publisher: { '@id': `${base}/#localbusiness` },
    provider: { '@id': `${base}/#localbusiness` },
  };
}

// Producatorul, cu tara pusa corect: `addressCountry` e proprietate de PostalAddress,
// nu de Organization.
export function manufacturerSchema(name, country) {
  return { '@type': 'Organization', name, address: { '@type': 'PostalAddress', addressCountry: country } };
}
