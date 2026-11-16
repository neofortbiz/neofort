// === v327: identitatea grupului Neofort — sursa unica =======================
//
// Formularea lui Dan (15.11.2026), aceeasi ca pe neofort.ro, scrisa din
// perspectiva Neofort BIZ. Textul apare pe „Despre noi”, in JSON-LD (pagina
// principala), in raspunsul get_contact_info al serverului MCP, in llms.txt si
// in SKILL.md. Garda din scripts/validate-blog.js verifica faptul ca fisierele
// statice (llms.txt, SKILL.md) contin exact textul de aici si ca vechea
// formulare („nicio legatura cu firme imobiliare”) nu mai apare nicaieri.

export const NEOFORT_IMO_URL = 'https://www.neofort.ro';

export const GRUP_NEOFORT = {
  ro: 'Neofort BIZ SRL este o firmă separată de Neofort IMO, cu activitate distinctă. Ambele fac parte din grupul de firme Neofort: Neofort BIZ (furnizare și montaj pereți cortină, tâmplărie PVC și aluminiu), Neofort IMO (consultanță, promovare și vânzări imobiliare) și Neofort New Homes (dezvoltare imobiliară). Toate firmele grupului folosesc adrese de e-mail @neofort-biz.ro, moștenite de la prima firmă a grupului.',
  en: 'Neofort BIZ SRL is a separate company from Neofort IMO, with a distinct activity. Both belong to the Neofort group of companies: Neofort BIZ (supply and installation of curtain walls, PVC and aluminium joinery), Neofort IMO (real estate consultancy, marketing and sales) and Neofort New Homes (real estate development). All companies in the group use e-mail addresses on @neofort-biz.ro, inherited from the group\'s first company.',
  de: 'Neofort BIZ SRL ist ein von Neofort IMO getrenntes Unternehmen mit eigener Tätigkeit. Beide gehören zur Unternehmensgruppe Neofort: Neofort BIZ (Lieferung und Montage von Vorhangfassaden, Kunststoff- und Aluminiumfenstern), Neofort IMO (Immobilienberatung, -vermarktung und -verkauf) und Neofort New Homes (Immobilienentwicklung). Alle Unternehmen der Gruppe nutzen E-Mail-Adressen unter @neofort-biz.ro, übernommen vom ersten Unternehmen der Gruppe.',
  fr: 'Neofort BIZ SRL est une société distincte de Neofort IMO, avec une activité différente. Les deux font partie du groupe de sociétés Neofort : Neofort BIZ (fourniture et pose de murs-rideaux, menuiseries PVC et aluminium), Neofort IMO (conseil, promotion et vente immobilière) et Neofort New Homes (promotion immobilière). Toutes les sociétés du groupe utilisent des adresses e-mail @neofort-biz.ro, héritées de la première société du groupe.',
  es: 'Neofort BIZ SRL es una empresa independiente de Neofort IMO, con una actividad distinta. Ambas forman parte del grupo de empresas Neofort: Neofort BIZ (suministro e instalación de muros cortina, carpintería de PVC y aluminio), Neofort IMO (consultoría, promoción y venta inmobiliaria) y Neofort New Homes (promoción inmobiliaria). Todas las empresas del grupo usan direcciones de correo @neofort-biz.ro, heredadas de la primera empresa del grupo.',
  it: 'Neofort BIZ SRL è una società separata da Neofort IMO, con un\'attività distinta. Entrambe fanno parte del gruppo di società Neofort: Neofort BIZ (fornitura e posa di facciate continue, infissi in PVC e alluminio), Neofort IMO (consulenza, promozione e vendita immobiliare) e Neofort New Homes (sviluppo immobiliare). Tutte le società del gruppo usano indirizzi e-mail @neofort-biz.ro, ereditati dalla prima società del gruppo.',
};

// Cardurile sectiunii „Grupul Neofort” de pe pagina Despre noi.
export const GRUP_UI = {
  ro: { h2: 'Grupul Neofort', biz: 'Furnizare și montaj pereți cortină, tâmplărie PVC și aluminiu', imo: 'Consultanță, promovare și vânzări imobiliare', nh: 'Dezvoltare imobiliară', aici: 'Sunteți aici', link: 'neofort.ro' },
  en: { h2: 'The Neofort group', biz: 'Supply and installation of curtain walls, PVC and aluminium joinery', imo: 'Real estate consultancy, marketing and sales', nh: 'Real estate development', aici: 'You are here', link: 'neofort.ro' },
  de: { h2: 'Die Neofort-Gruppe', biz: 'Lieferung und Montage von Vorhangfassaden, Kunststoff- und Aluminiumfenstern', imo: 'Immobilienberatung, -vermarktung und -verkauf', nh: 'Immobilienentwicklung', aici: 'Sie sind hier', link: 'neofort.ro' },
  fr: { h2: 'Le groupe Neofort', biz: 'Fourniture et pose de murs-rideaux, menuiseries PVC et aluminium', imo: 'Conseil, promotion et vente immobilière', nh: 'Promotion immobilière', aici: 'Vous êtes ici', link: 'neofort.ro' },
  es: { h2: 'El grupo Neofort', biz: 'Suministro e instalación de muros cortina, carpintería de PVC y aluminio', imo: 'Consultoría, promoción y venta inmobiliaria', nh: 'Promoción inmobiliaria', aici: 'Usted está aquí', link: 'neofort.ro' },
  it: { h2: 'Il gruppo Neofort', biz: 'Fornitura e posa di facciate continue, infissi in PVC e alluminio', imo: 'Consulenza, promozione e vendita immobiliare', nh: 'Sviluppo immobiliare', aici: 'Siete qui', link: 'neofort.ro' },
};
