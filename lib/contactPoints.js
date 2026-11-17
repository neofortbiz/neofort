// v335 — liniile de contact ale Neofort BIZ (sursă unică pentru Footer, schema și llms).
//
// Decizia lui Dan (17.11.2026): cele două linii de oferte sunt „Oferte 1” (principală)
// și „Oferte 2” (rezervă). Ce face fiecare linie trebuie să fie evident peste tot:
// eticheta vizibilă, aria-label (citit de cititoare de ecran și de agenții AI) și
// ContactPoint în JSON-LD, pe toate paginile (layout).

const LANGS = ['Romanian', 'English', 'German', 'French', 'Spanish', 'Italian'];
const HOURS = { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '18:00' };

export const CONTACT_LINES = [
  {
    key: 'office', tel: '+40215280661', show: '+40 21 528 06 61', type: 'customer service',
    label: { ro: 'Office', en: 'Office', de: 'Office', fr: 'Office', es: 'Office', it: 'Office' },
    desc: { ro: 'Biroul Neofort BIZ — centrală', en: 'Neofort BIZ office — switchboard', de: 'Büro Neofort BIZ — Zentrale', fr: 'Bureau Neofort BIZ — standard', es: 'Oficina de Neofort BIZ — centralita', it: 'Ufficio Neofort BIZ — centralino' },
  },
  {
    key: 'quotes1', tel: '+40752443435', show: '+40 752 443 435', type: 'sales', email: 'oferte@neofort-biz.ro',
    label: { ro: 'Oferte 1', en: 'Quotes 1', de: 'Angebote 1', fr: 'Devis 1', es: 'Presupuestos 1', it: 'Preventivi 1' },
    desc: { ro: 'Oferte — linia principală pentru cereri de ofertă', en: 'Quotes — main line for quote requests', de: 'Angebote — Hauptleitung für Angebotsanfragen', fr: 'Devis — ligne principale pour les demandes de devis', es: 'Presupuestos — línea principal para solicitudes de presupuesto', it: 'Preventivi — linea principale per le richieste di preventivo' },
  },
  {
    key: 'quotes2', tel: '+40752443439', show: '+40 752 443 439', type: 'sales', email: 'oferte@neofort-biz.ro',
    label: { ro: 'Oferte 2', en: 'Quotes 2', de: 'Angebote 2', fr: 'Devis 2', es: 'Presupuestos 2', it: 'Preventivi 2' },
    desc: { ro: 'Oferte — linia de rezervă, când linia principală e ocupată', en: 'Quotes — backup line when the main line is busy', de: 'Angebote — Ersatzleitung, wenn die Hauptleitung besetzt ist', fr: 'Devis — ligne de secours quand la ligne principale est occupée', es: 'Presupuestos — línea de reserva cuando la principal está ocupada', it: 'Preventivi — linea di riserva quando la principale è occupata' },
  },
  {
    key: 'technical', tel: '+40752443431', show: '+40 752 443 431', type: 'technical support',
    label: { ro: 'Tehnic', en: 'Technical', de: 'Technik', fr: 'Technique', es: 'Técnico', it: 'Tecnico' },
    desc: { ro: 'Departamentul tehnic — întrebări despre produse și montaj', en: 'Technical department — questions about products and installation', de: 'Technische Abteilung — Fragen zu Produkten und Montage', fr: 'Service technique — questions sur les produits et la pose', es: 'Departamento técnico — preguntas sobre productos e instalación', it: 'Ufficio tecnico — domande su prodotti e posa' },
  },
  {
    key: 'service', tel: '+40752443432', show: '+40 752 443 432', type: 'customer service', email: 'service@neofort-biz.ro',
    label: { ro: 'Service', en: 'Service', de: 'Service', fr: 'Service', es: 'Service', it: 'Service' },
    desc: { ro: 'Service și reparații după montaj', en: 'Service and repairs after installation', de: 'Service und Reparaturen nach der Montage', fr: 'Service et réparations après la pose', es: 'Servicio y reparaciones después de la instalación', it: 'Assistenza e riparazioni dopo la posa' },
  },
  {
    key: 'export', tel: '+40758990048', show: '+40 758 990 048', type: 'sales', email: 'export@neofort-biz.ro',
    label: { ro: 'Export', en: 'Export', de: 'Export', fr: 'Export', es: 'Export', it: 'Export' },
    desc: { ro: 'Export — livrări în afara României', en: 'Export — deliveries outside Romania', de: 'Export — Lieferungen außerhalb Rumäniens', fr: 'Export — livraisons hors de Roumanie', es: 'Exportación — entregas fuera de Rumanía', it: 'Export — consegne fuori dalla Romania' },
  },
];

// ContactPoint pentru JSON-LD (în engleză; numele include eticheta vizibilă în română).
export function contactPointSchema() {
  return CONTACT_LINES.map((c) => ({
    '@type': 'ContactPoint',
    name: `${c.label.ro} — ${c.desc.en}`,
    description: c.desc.ro,
    telephone: c.tel,
    contactType: c.type,
    ...(c.email ? { email: c.email } : {}),
    areaServed: c.key === 'export' ? 'EU' : ['RO', 'EU'],
    availableLanguage: LANGS,
    hoursAvailable: HOURS,
  }));
}
