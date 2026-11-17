// v334 — termene, garanție, disponibilitate și documente (sursă unică).
// Confirmate de Dan: garanția (5–10 ani profil PVC, 10+ ani aluminiu, 2 ani montaj),
// fabricare și livrare în 2–4 săptămâni, producție la comandă, iar pentru ferestre și
// uși exterioare se predă Declarația de performanță (DoP) a fabricantului conform
// EN 14351-1 (17.11.2026). Folosit de app/api/mcp/route.js (get_contact_info) și copiat
// textual în public/llms.txt (ro + en); garda 35 din validate-blog verifică copiile.
export const SERVICE_TERMS = {
  ro: {
    availability: 'Tâmplăria se fabrică la comandă, pe măsură; nu există stoc de ferestre sau uși.',
    lead_time: 'Fabricare și livrare în 2–4 săptămâni, după măsurători și confirmarea comenzii.',
    warranty: 'Garanție scrisă: 5–10 ani pe profilul PVC Salamander, peste 10 ani pe aluminiul Alumil, 2 ani pe montaj.',
    documents: 'Pentru ferestre și uși exterioare se predă clientului Declarația de performanță (DoP) a fabricantului, conform EN 14351-1, cu marcaj CE, împreună cu certificatul de garanție.',
    quote: 'Oferta scrisă vine în 48 de ore; cererea se trimite prin formularul de pe site, pe e-mail sau la telefon.',
  },
  en: {
    availability: 'Windows and doors are made to order, to measure; there is no stock of windows or doors.',
    lead_time: 'Production and delivery in 2–4 weeks, after measurement and order confirmation.',
    warranty: 'Written warranty: 5–10 years on the Salamander PVC profile, more than 10 years on Alumil aluminium, 2 years on installation.',
    documents: 'For windows and external doors the customer receives the manufacturer’s Declaration of Performance (DoP) under EN 14351-1, with CE marking, together with the warranty certificate.',
    quote: 'The written quote arrives within 48 hours; the request is sent through the website form, by e-mail or by phone.',
  },
};
