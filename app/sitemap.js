export const dynamic = 'force-static';

const BASE = 'https://www.neofort-biz.ro';
const LOCALES = ['ro','en','de','fr','es','it'];

const PAGE_SLUGS = {
  ro: { pvc:'tamplarie-pvc', aluminiu:'tamplarie-aluminiu', accesorii:'accesorii', servicii:'servicii', contact:'contact', despre:'despre', gdpr:'gdpr', cookies:'cookies', umbrire:'umbrire', nzeb:'sisteme-nzeb' },
  en: { pvc:'pvc-windows', aluminiu:'aluminium-windows', accesorii:'accessories', servicii:'services', contact:'contact', despre:'about', gdpr:'privacy-policy', cookies:'cookie-policy', umbrire:'shading-systems', nzeb:'nzeb-systems' },
  de: { pvc:'kunststofffenster-pvc', aluminiu:'aluminiumfenster', accesorii:'zubehoer', servicii:'dienstleistungen', contact:'kontakt', despre:'ueber-uns', gdpr:'datenschutz', cookies:'cookie-richtlinie', umbrire:'beschattungssysteme', nzeb:'nzeb-systeme' },
  fr: { pvc:'menuiserie-pvc', aluminiu:'menuiserie-aluminium', accesorii:'accessoires', servicii:'services', contact:'contact', despre:'a-propos', gdpr:'politique-confidentialite', cookies:'politique-cookies', umbrire:'systemes-occultation', nzeb:'systemes-nzeb' },
  es: { pvc:'carpinteria-pvc', aluminiu:'carpinteria-aluminio', accesorii:'accesorios', servicii:'servicios', contact:'contacto', despre:'sobre-nosotros', gdpr:'politica-privacidad', cookies:'politica-cookies', umbrire:'sistemas-sombreado', nzeb:'sistemas-nzeb' },
  it: { pvc:'infissi-pvc', aluminiu:'infissi-alluminio', accesorii:'accessori', servicii:'servizi', contact:'contatti', despre:'chi-siamo', gdpr:'informativa-privacy', cookies:'politica-cookie', umbrire:'sistemi-oscuramento', nzeb:'sistemi-nzeb' },
};

const BLOG_SLUGS = [
  {
    ro: 'bluevolution-92-vs-greenevolution-76',
    en: 'bluevolution-92-vs-greenevolution-76-guide',
    de: 'bluevolution-92-vs-greenevolution-76-leitfaden',
    fr: 'bluevolution-92-vs-greenevolution-76-guide',
    es: 'bluevolution-92-vs-greenevolution-76-guia',
    it: 'bluevolution-92-vs-greenevolution-76-guida',
  },
  {
    ro: 'montaj-precadre-blaugelb-nzeb',
    en: 'blaugelb-triotherm-precasing-installation-nzeb',
    de: 'blaugelb-triotherm-vorfenster-montage-nzeb',
    fr: 'precadres-blaugelb-triotherm-pose-nzeb',
    es: 'instalacion-premarcos-blaugelb-triotherm-nzeb',
    it: 'installazione-precontrotelaio-blaugelb-triotherm-nzeb',
  },
  {
    ro: 'vitrine-sticla-geamuri-panoramice-mari-dimensiuni-securizate-bucuresti',
    en: 'glass-shopfronts-panoramic-large-format-tempered-windows-bucharest',
    de: 'schaufenster-panoramascheiben-grosse-abmessungen-sicherheitsglas-bukarest',
    fr: 'vitrines-verre-fenetres-panoramiques-grandes-dimensions-securisees-bucarest',
    es: 'vitrinas-cristal-ventanas-panoramicas-grandes-dimensiones-securizadas-bucarest',
    it: 'vetrine-vetro-finestre-panoramiche-grandi-dimensioni-securizzate-bucarest',
  },
  {
    ro: 'montaj-geamuri-agabaritice-robot-ventuze-sticla-mari-dimensiuni',
    en: 'oversized-glass-installation-robot-vacuum-cups-large-panels',
    de: 'montage-uebergrosseglaesscheiben-roboter-saugnaepfe-grossformat',
    fr: 'pose-verre-surdimensionne-robot-ventouses-grands-panneaux',
    es: 'instalacion-vidrio-sobredimensionado-robot-ventosas-grandes-paneles',
    it: 'posa-vetro-sovradimensionato-robot-ventose-grandi-pannelli',
  },
  {
    ro: 'tamplarie-aluminiu-pereti-cortina-fatade-sticla-lucrari-bucuresti',
    en: 'aluminium-joinery-curtain-walls-glass-facades-projects-bucharest',
    de: 'aluminiumtischlerarbeiten-vorhangfassaden-glasfassaden-projekte-bukarest',
    fr: 'menuiserie-aluminium-murs-rideaux-facades-verre-projets-bucarest',
    es: 'carpinteria-aluminio-muros-cortina-fachadas-vidrio-proyectos-bucarest',
    it: 'infissi-alluminio-pareti-cortina-facciate-vetro-progetti-bucarest',
  },
  {
    ro: 'tamplarie-aluminiu-reynaers-bloc-nou-construit-bucuresti',
    en: 'reynaers-aluminium-windows-new-residential-block-bucharest',
    de: 'reynaers-aluminiumfenster-neubau-wohnblock-bukarest',
    fr: 'menuiserie-aluminium-reynaers-immeuble-neuf-bucarest',
    es: 'carpinteria-aluminio-reynaers-bloque-nueva-construccion-bucarest',
    it: 'infissi-alluminio-reynaers-condominio-nuova-costruzione-bucarest',
  },
  {
    ro: 'salamander-bluevolution-92-casa-noua-smart-home-bucuresti',
    en: 'salamander-bluevolution-92-new-house-smart-home-bucharest',
    de: 'salamander-bluevolution-92-neubau-smart-home-bukarest',
    fr: 'salamander-bluevolution-92-maison-neuve-maison-intelligente-bucarest',
    es: 'salamander-bluevolution-92-casa-nueva-smart-home-bucarest',
    it: 'salamander-bluevolution-92-casa-nuova-smart-home-bucarest',
  },
  {
    ro: 'salamander-bluevolution-92-alu-placat-aluminiu-export-franta-casa-munte',
    en: 'salamander-bluevolution-92-alu-aluminium-clad-export-france-mountain-house',
    de: 'salamander-bluevolution-92-alu-aluminiumverkleidung-export-frankreich-berghaus',
    fr: 'salamander-bluevolution-92-alu-revetu-aluminium-export-france-maison-montagne',
    es: 'salamander-bluevolution-92-alu-revestido-aluminio-exportacion-francia-casa-montana',
    it: 'salamander-bluevolution-92-alu-rivestito-alluminio-esportazione-francia-casa-montagna',
  },
  {
    ro: 'inlocuire-ferestre-vechi-renovare-apartament-bucuresti',
    en: 'replacing-old-windows-apartment-renovation-bucharest',
    de: 'alte-fenster-ersetzen-wohnungsrenovierung-bukarest',
    fr: 'remplacement-fenetres-renovation-appartement-bucarest',
    es: 'sustitucion-ventanas-renovacion-apartamento-bucarest',
    it: 'sostituzione-finestre-ristrutturazione-appartamento-bucarest',
  },
  {
    ro: 'vitrine-sticla-geamuri-panoramice-mari-dimensiuni-securizate-bucuresti',
    en: 'glass-shopfronts-panoramic-large-format-tempered-windows-bucharest',
    de: 'schaufenster-panoramascheiben-grosse-abmessungen-sicherheitsglas-bukarest',
    fr: 'vitrines-verre-fenetres-panoramiques-grandes-dimensions-securisees-bucarest',
    es: 'vitrinas-cristal-ventanas-panoramicas-grandes-dimensiones-securizadas-bucarest',
    it: 'vetrine-vetro-finestre-panoramiche-grandi-dimensioni-securizzate-bucarest',
  },
  {
    ro: 'montaj-geamuri-agabaritice-robot-ventuze-sticla-mari-dimensiuni',
    en: 'oversized-glass-installation-robot-vacuum-cups-large-panels',
    de: 'montage-uebergrosseglaesscheiben-roboter-saugnaepfe-grossformat',
    fr: 'pose-verre-surdimensionne-robot-ventouses-grands-panneaux',
    es: 'instalacion-vidrio-sobredimensionado-robot-ventosas-grandes-paneles',
    it: 'posa-vetro-sovradimensionato-robot-ventose-grandi-pannelli',
  },
  {
    ro: 'tamplarie-aluminiu-pereti-cortina-fatade-sticla-lucrari-bucuresti',
    en: 'aluminium-joinery-curtain-walls-glass-facades-projects-bucharest',
    de: 'aluminiumtischlerarbeiten-vorhangfassaden-glasfassaden-projekte-bukarest',
    fr: 'menuiserie-aluminium-murs-rideaux-facades-verre-projets-bucarest',
    es: 'carpinteria-aluminio-muros-cortina-fachadas-vidrio-proyectos-bucarest',
    it: 'infissi-alluminio-pareti-cortina-facciate-vetro-progetti-bucarest',
  },
  {
    ro: 'tamplarie-aluminiu-reynaers-bloc-nou-construit-bucuresti',
    en: 'reynaers-aluminium-windows-new-residential-block-bucharest',
    de: 'reynaers-aluminiumfenster-neubau-wohnblock-bukarest',
    fr: 'menuiserie-aluminium-reynaers-immeuble-neuf-bucarest',
    es: 'carpinteria-aluminio-reynaers-bloque-nueva-construccion-bucarest',
    it: 'infissi-alluminio-reynaers-condominio-nuova-costruzione-bucarest',
  },
  {
    ro: 'salamander-bluevolution-92-casa-noua-smart-home-bucuresti',
    en: 'salamander-bluevolution-92-new-house-smart-home-bucharest',
    de: 'salamander-bluevolution-92-neubau-smart-home-bukarest',
    fr: 'salamander-bluevolution-92-maison-neuve-maison-intelligente-bucarest',
    es: 'salamander-bluevolution-92-casa-nueva-smart-home-bucarest',
    it: 'salamander-bluevolution-92-casa-nuova-smart-home-bucarest',
  },
  {
    ro: 'salamander-bluevolution-92-alu-placat-aluminiu-export-franta-casa-munte',
    en: 'salamander-bluevolution-92-alu-aluminium-clad-export-france-mountain-house',
    de: 'salamander-bluevolution-92-alu-aluminiumverkleidung-export-frankreich-berghaus',
    fr: 'salamander-bluevolution-92-alu-revetu-aluminium-export-france-maison-montagne',
    es: 'salamander-bluevolution-92-alu-revestido-aluminio-exportacion-francia-casa-montana',
    it: 'salamander-bluevolution-92-alu-rivestito-alluminio-esportazione-francia-casa-montagna',
  },
  {
    ro: 'inlocuire-ferestre-vechi-renovare-apartament-bucuresti',
    en: 'replacing-old-windows-apartment-renovation-bucharest',
    de: 'alte-fenster-ersetzen-wohnungsrenovierung-bukarest',
    fr: 'remplacement-fenetres-renovation-appartement-bucarest',
    es: 'sustitucion-ventanas-renovacion-apartamento-bucarest',
    it: 'sostituzione-finestre-ristrutturazione-appartamento-bucarest',
  },
    {
    ro: 'tamplarie-salamander-case-individuale-vile-export-europa',
    en: 'salamander-windows-individual-houses-villas-europe-export',
    de: 'salamander-fenster-einfamilienhaeuser-villen-europa-export',
    fr: 'menuiserie-salamander-maisons-individuelles-villas-export-europe',
    es: 'carpinteria-salamander-casas-individuales-villas-exportacion-europa',
    it: 'infissi-salamander-case-individuali-ville-esportazione-europa',
  },
  {
    ro: 'tamplarie-aluminiu-smart-home-ferestre-usi-inteligente',
    en: 'aluminium-windows-smart-home-automated-windows-doors',
    de: 'aluminiumfenster-smart-home-automatisierte-fenster-tueren',
    fr: 'menuiserie-aluminium-maison-intelligente-fenetres-portes-automatisees',
    es: 'carpinteria-aluminio-smart-home-ventanas-puertas-automatizadas',
    it: 'infissi-alluminio-smart-home-finestre-porte-automatizzate',
  },
  {
    ro: 'pereti-cortina-birouri-bucuresti-ghid-complet-2026',
    en: 'curtain-wall-office-buildings-bucharest-complete-guide-2026',
    de: 'vorhangfassade-buerogebaeude-bukarest-komplett-leitfaden-2026',
    fr: 'mur-rideau-immeubles-bureaux-bucarest-guide-complet-2026',
    es: 'muro-cortina-edificios-oficinas-bucarest-guia-completa-2026',
    it: 'parete-cortina-edifici-uffici-bucarest-guida-completa-2026',
  },
  {
    ro: 'preturi-termopane-salamander-bucuresti',
    en: 'salamander-double-glazing-prices-bucharest',
    de: 'salamander-isolierglas-preise-bukarest',
    fr: 'prix-double-vitrage-salamander-bucarest',
    es: 'precios-doble-acristalamiento-salamander-bucarest',
    it: 'prezzi-doppio-vetro-salamander-bucarest',
  },
  {
    ro: 'preturi-tamplarie-aluminiu-alumil-aluprof-cortizo-reynaers-bucuresti',
    en: 'aluminium-windows-prices-alumil-aluprof-cortizo-reynaers-bucharest',
    de: 'aluminiumfenster-preise-alumil-aluprof-cortizo-reynaers-bukarest',
    fr: 'prix-menuiserie-aluminium-alumil-aluprof-cortizo-reynaers-bucarest',
    es: 'precios-carpinteria-aluminio-alumil-aluprof-cortizo-reynaers-bucarest',
    it: 'prezzi-infissi-alluminio-alumil-aluprof-cortizo-reynaers-bucarest',
  },
  {
    ro: 'jaluzele-raffstore-vs-rulouri-aluminiu',
    en: 'raffstore-blinds-vs-aluminium-shutters',
    de: 'raffstore-jalousien-vs-aluminiumrolllaeden',
    fr: 'stores-raffstore-vs-volets-roulants-aluminium',
    es: 'persianas-raffstore-vs-cierres-enrollables-aluminio',
    it: 'veneziane-raffstore-vs-tapparelle-alluminio',
  },
  {
    ro: 'export-tamplarie-germania',
    en: 'export-windows-germany-romania',
    de: 'fensterexport-rumaenien-deutschland',
    fr: 'export-menuiseries-roumanie-allemagne',
    es: 'exportacion-carpinteria-rumania-alemania',
    it: 'esportazione-serramenti-romania-germania',
  },
  // ── Articole adăugate v115–v126 ──
  {
    ro: 'sistem-complet-nzeb-salamander-bluevolution-precadre-blaugelb-geam-triplu',
    en: 'complete-nzeb-system-salamander-bluevolution-blaugelb-preframes-triple-glazing',
    de: 'komplettes-nzeb-system-salamander-bluevolution-blaugelb-vorblendrahmen-dreifachverglasung',
    fr: 'systeme-complet-nzeb-salamander-bluevolution-precadres-blaugelb-triple-vitrage',
    es: 'sistema-completo-nzeb-salamander-bluevolution-precuadros-blaugelb-triple-acristalamiento',
    it: 'sistema-completo-nzeb-salamander-bluevolution-precornici-blaugelb-triplo-vetro',
  },
  {
    ro: 'pergola-bioclimatica-vs-clasica-ghid-alegere',
    en: 'bioclimatic-vs-classic-pergola-guide',
    de: 'bioklimatische-vs-klassische-pergola-ratgeber',
    fr: 'pergola-bioclimatique-vs-classique-guide',
    es: 'pergola-bioclimatica-vs-clasica-guia',
    it: 'pergola-bioclimatica-vs-classica-guida',
  },
  {
    ro: 'tamplarie-aluminiu-bariera-termica-ghid-complet',
    en: 'aluminium-windows-thermal-break-complete-guide',
    de: 'aluminiumfenster-waermedaemmung-komplett-leitfaden',
    fr: 'menuiserie-aluminium-rupture-thermique-guide-complet',
    es: 'carpinteria-aluminio-rotura-termica-guia-completa',
    it: 'infissi-alluminio-taglio-termico-guida-completa',
  },
  {
    ro: 'pereti-cortina-fatade-sticla-ghid-complet',
    en: 'curtain-wall-glass-facades-complete-guide',
    de: 'vorhangfassade-glasfassade-komplett-leitfaden',
    fr: 'mur-rideau-facade-verre-guide-complet',
    es: 'muro-cortina-fachada-vidrio-guia-completa',
    it: 'parete-cortina-facciata-vetro-guida-completa',
  },
  {
    ro: 'zipscreen-umbrire-terasa-ghid-complet',
    en: 'zipscreen-terrace-shading-complete-guide',
    de: 'zipscreen-terrassenbeschattung-komplettleitfaden',
    fr: 'zipscreen-ombriere-terrasse-guide-complet',
    es: 'zipscreen-sombreado-terraza-guia-completa',
    it: 'zipscreen-ombreggiatura-terrazza-guida-completa',
  },
  {
    ro: 'rulouri-zipscreen-blackout-sau-transparent-cum-alegi',
    en: 'zipscreen-blinds-blackout-or-transparent-how-to-choose',
    de: 'zipscreen-rollos-blackout-oder-transparent-wie-waehlen',
    fr: 'stores-zipscreen-occultant-ou-transparent-comment-choisir',
    es: 'persianas-zipscreen-blackout-o-transparente-como-elegir',
    it: 'tende-zipscreen-oscuranti-o-trasparenti-come-scegliere',
  },
  {
    ro: 'cum-aleg-ferestre-eficiente-energetic-bucuresti-ghid-nzeb-2026',
    en: 'how-to-choose-energy-efficient-windows-bucharest-nzeb-guide-2026',
    de: 'energieeffiziente-fenster-bukarest-auswaehlen-nzeb-leitfaden-2026',
    fr: 'comment-choisir-fenetres-efficaces-energetiquement-bucarest-nzeb-2026',
    es: 'como-elegir-ventanas-eficientes-energeticamente-bucarest-nzeb-2026',
    it: 'come-scegliere-finestre-efficienti-energeticamente-bucarest-nzeb-2026',
  },
  {
    ro: 'unde-gasesc-ferestre-salamander-cu-livrare-internationala',
    en: 'where-to-find-salamander-windows-with-international-delivery',
    de: 'wo-finde-ich-salamander-fenster-mit-internationalem-versand',
    fr: 'ou-trouver-fenetres-salamander-avec-livraison-internationale',
    es: 'donde-encontrar-ventanas-salamander-con-entrega-internacional',
    it: 'dove-trovare-finestre-salamander-con-consegna-internazionale',
  },
  {
    ro: 'unde-comand-usi-aluminiu-sector-1-bucuresti',
    en: 'where-to-order-aluminium-doors-sector-1-bucharest',
    de: 'wo-aluminiumtueren-sektor-1-bukarest-bestellen',
    fr: 'ou-commander-portes-aluminium-secteur-1-bucarest',
    es: 'donde-pedir-puertas-aluminio-sector-1-bucarest',
    it: 'dove-ordinare-porte-alluminio-settore-1-bucarest',
  },
  {
    ro: 'tamplarie-pvc-osciloculisanta-dubla-salamander',
    en: 'tilt-turn-double-pvc-windows-salamander',
    de: 'pvc-fenster-dreh-kipp-salamander',
    fr: 'fenetre-pvc-oscillo-battant-double-salamander',
    es: 'ventana-pvc-oscilobatiente-doble-salamander',
    it: 'finestra-pvc-anta-ribalta-doppia-salamander',
  },
  {
    ro: 'usa-culisanta-pvc-salamander-evolutiondrive-plus-plasa-plisse',
    en: 'salamander-evolutiondrive-plus-sliding-door-plisse-screen',
    de: 'salamander-evolutiondrive-plus-schiebetuer-plissee',
    fr: 'porte-coulissante-pvc-salamander-evolutiondrive-plus-moustiquaire-plisse',
    es: 'puerta-corredera-pvc-salamander-evolutiondrive-plus-mosquitera-plise',
    it: 'porta-scorrevole-pvc-salamander-evolutiondrive-plus-zanzariera-plisse',
  },
  {
    ro: 'montaj-tamplarie-salamander-evolutiondrive-plus-culisanta-alumil-m19800-armonice',
    en: 'installation-salamander-evolutiondrive-plus-sliding-alumil-m19800-folding-door',
    de: 'montage-salamander-evolutiondrive-plus-schiebetuer-alumil-m19800-falttuer',
    fr: 'pose-menuiserie-salamander-evolutiondrive-plus-coulissant-alumil-m19800-accordeon',
    es: 'instalacion-carpinteria-salamander-evolutiondrive-plus-corredera-alumil-m19800-plegable',
    it: 'posa-serramenti-salamander-evolutiondrive-plus-scorrevole-alumil-m19800-pieghevole',
  },
  {
    ro: 'usi-intrare-antiefractie-comanda-tactica-amprenta-digitala-aluminiu',
    en: 'anti-burglary-entry-doors-fingerprint-touch-aluminium',
    de: 'einbruchsichere-eingangstuer-fingerabdruck-touchbedienung-aluminium',
    fr: 'porte-entree-anti-effraction-commande-tactile-empreinte-aluminium',
    es: 'puerta-entrada-antirrobo-control-tactil-huella-dactilar-aluminio',
    it: 'porta-ingresso-antieffrazione-comando-tattile-impronta-digitale-alluminio',
  },
  {
    ro: 'somfy-rulouri-motoare-exterioare',
    en: 'somfy-shutter-motors',
    de: 'somfy-rolllaeden-motoren',
    fr: 'somfy-moteurs-volets',
    es: 'somfy-motores-persianas',
    it: 'somfy-motori-tapparelle',
  },
  {
    ro: 'somfy-automatizare-pergole-copertine',
    en: 'somfy-pergola-awning-automation',
    de: 'somfy-pergola-markisen-automatisierung',
    fr: 'somfy-automatisation-pergola-store',
    es: 'somfy-automatizacion-pergola-toldo',
    it: 'somfy-automazione-pergola-tenda',
  },
  {
    ro: 'somfy-tahoma-smart-home-romania',
    en: 'somfy-tahoma-smart-home-bucharest',
    de: 'somfy-tahoma-smart-home-bukarest',
    fr: 'somfy-tahoma-maison-connectee-bucarest',
    es: 'somfy-tahoma-hogar-inteligente-bucarest',
    it: 'somfy-tahoma-casa-intelligente-bucarest',
  },
];

const pages = [
  { key:'',          priority:1.0, freq:'weekly'  },
  { key:'pvc',       priority:0.9, freq:'monthly' },
  { key:'aluminiu',  priority:0.9, freq:'monthly' },
  { key:'accesorii', priority:0.8, freq:'monthly' },
  { key:'servicii',  priority:0.8, freq:'monthly' },
  { key:'contact',   priority:0.8, freq:'monthly' },
  { key:'blog',      priority:0.7, freq:'weekly'  },
  { key:'despre',    priority:0.5, freq:'yearly'  },
  { key:'gdpr',      priority:0.2, freq:'yearly'  },
    { key:'cookies',    priority:0.2, freq:'yearly'  },
  { key:'umbrire',    priority:0.8, freq:'monthly' },
  { key:'nzeb',       priority:0.8, freq:'monthly' },
];

function pageSlug(locale, key) {
  if (!key) return '';
  if (key === 'blog') return '/blog';
  return '/' + (PAGE_SLUGS[locale]?.[key] || PAGE_SLUGS.ro[key]);
}

export default function sitemap() {
  const now = new Date().toISOString();
  const urls = [];

  LOCALES.forEach(locale => {
    // Pagini principale
    pages.forEach(p => {
      const path = pageSlug(locale, p.key);
      urls.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: now,
        priority: p.priority,
        changeFrequency: p.freq,
        alternates: {
          languages: Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}${pageSlug(l, p.key)}`])),
        },
      });
    });

    // Articole blog — slug tradus per limbă
    BLOG_SLUGS.forEach(slugs => {
      const mySlug = slugs[locale] || slugs.ro;
      urls.push({
        url: `${BASE}/${locale}/blog/${mySlug}`,
        lastModified: now,
        priority: 0.8,
        changeFrequency: 'monthly',
        alternates: {
          languages: Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}/blog/${slugs[l] || slugs.ro}`])),
        },
      });
    });
  });


  // ── Pagini SEO PVC (preturi + bucuresti) — NOUT v74
  const PVC_SEO = {
    preturi:   { ro:'tamplarie-pvc/preturi', en:'pvc-windows/prices', de:'kunststofffenster-pvc/preise', fr:'menuiserie-pvc/prix', es:'carpinteria-pvc/precios', it:'infissi-pvc/prezzi' },
    bucuresti: { ro:'tamplarie-pvc/bucuresti', en:'pvc-windows/bucharest', de:'kunststofffenster-pvc/bukarest', fr:'menuiserie-pvc/bucarest', es:'carpinteria-pvc/bucarest', it:'infissi-pvc/bucarest' },
    ghid:      { ro:'tamplarie-pvc/ghid-complet', en:'pvc-windows/complete-guide', de:'kunststofffenster-pvc/kompletter-ratgeber', fr:'menuiserie-pvc/guide-complet', es:'carpinteria-pvc/guia-completa', it:'infissi-pvc/guida-completa' },
  };
  const ALU_SEO = {
    ghid:      { ro:'tamplarie-aluminiu/ghid-complet', en:'aluminium-windows/complete-guide', de:'aluminiumfenster/kompletter-ratgeber', fr:'menuiserie-aluminium/guide-complet', es:'carpinteria-aluminio/guia-completa', it:'infissi-alluminio/guida-completa' },
    bucuresti: { ro:'tamplarie-aluminiu/bucuresti', en:'aluminium-windows/bucharest', de:'aluminiumfenster/bukarest', fr:'menuiserie-aluminium/bucarest', es:'carpinteria-aluminio/bucarest', it:'infissi-alluminio/bucarest' },
    preturi:   { ro:'tamplarie-aluminiu/preturi', en:'aluminium-windows/prices', de:'aluminiumfenster/preise', fr:'menuiserie-aluminium/prix', es:'carpinteria-aluminio/precios', it:'infissi-alluminio/prezzi' },
  };
  const UMBRIRE_SEO = {
    ghid:      { ro:'umbrire/ghid-complet-sisteme-umbrire', en:'shading-systems/complete-guide', de:'beschattungssysteme/kompletter-ratgeber', fr:'systemes-occultation/guide-complet', es:'sistemas-sombreado/guia-completa', it:'sistemi-oscuramento/guida-completa' },
    preturi:   { ro:'umbrire/preturi-sisteme-umbrire', en:'shading-systems/shading-prices', de:'beschattungssysteme/beschattung-preise', fr:'systemes-occultation/prix-occultation', es:'sistemas-sombreado/precios-sombreado', it:'sistemi-oscuramento/prezzi-oscuramento' },
  };
  const NZEB_SEO = {
    ghid:      { ro:'sisteme-nzeb/ghid-complet-nzeb', en:'nzeb-systems/complete-guide', de:'nzeb-systeme/kompletter-ratgeber', fr:'systemes-nzeb/guide-complet', es:'sistemas-nzeb/guia-completa', it:'sistemi-nzeb/guida-completa' },
  };
  [...Object.values(PVC_SEO), ...Object.values(ALU_SEO), ...Object.values(UMBRIRE_SEO), ...Object.values(NZEB_SEO)].forEach(slugs => {
    LOCALES.forEach(locale => {
      urls.push({ url:`${BASE}/${locale}/${slugs[locale]||slugs.ro}`, lastModified:now, priority:0.88, changeFrequency:'monthly',
        alternates:{ languages: Object.fromEntries(LOCALES.map(l=>[l,`${BASE}/${l}/${slugs[l]||slugs.ro}`])) } });
    });
  });

  // ── Produse PVC individuale
  const PVC_SLUGS = {
    'bluevolution-92-alu':           { ro:'profil-pvc-bluevolution-92-alu',          en:'bluevolution-92-alu-pvc-profile',          de:'bluevolution-92-alu-pvc-profil',          fr:'profil-pvc-bluevolution-92-alu',          es:'perfil-pvc-bluevolution-92-alu',          it:'profilo-pvc-bluevolution-92-alu' },
    'bluevolution-92-flex':          { ro:'profil-pvc-bluevolution-92-flex',          en:'bluevolution-92-flex-pvc-profile',         de:'bluevolution-92-flex-pvc-profil',         fr:'profil-pvc-bluevolution-92-flex',         es:'perfil-pvc-bluevolution-92-flex',         it:'profilo-pvc-bluevolution-92-flex' },
    'bluevolution-92-round':         { ro:'profil-pvc-bluevolution-92-round',         en:'bluevolution-92-round-pvc-profile',        de:'bluevolution-92-round-pvc-profil',        fr:'profil-pvc-bluevolution-92-round',        es:'perfil-pvc-bluevolution-92-round',        it:'profilo-pvc-bluevolution-92-round' },
    'greenevolution-76-md-round':    { ro:'profil-pvc-greenevolution-76-md-round',    en:'greenevolution-76-md-round-pvc-profile',   de:'greenevolution-76-md-round-pvc-profil',   fr:'profil-pvc-greenevolution-76-md-round',   es:'perfil-pvc-greenevolution-76-md-round',   it:'profilo-pvc-greenevolution-76-md-round' },
    'greenevolution-76-md-flex':     { ro:'profil-pvc-greenevolution-76-md-flex',     en:'greenevolution-76-md-flex-pvc-profile',    de:'greenevolution-76-md-flex-pvc-profil',    fr:'profil-pvc-greenevolution-76-md-flex',    es:'perfil-pvc-greenevolution-76-md-flex',    it:'profilo-pvc-greenevolution-76-md-flex' },
    'greenevolution-76-ad-flex':     { ro:'profil-pvc-greenevolution-76-ad-flex',     en:'greenevolution-76-ad-flex-pvc-profile',    de:'greenevolution-76-ad-flex-pvc-profil',    fr:'profil-pvc-greenevolution-76-ad-flex',    es:'perfil-pvc-greenevolution-76-ad-flex',    it:'profilo-pvc-greenevolution-76-ad-flex' },
  };
  LOCALES.forEach(locale => {
    Object.entries(PVC_SLUGS).forEach(([canonical, slugs]) => {
      const mySlug = slugs[locale] || canonical;
      urls.push({ url:`${BASE}/${locale}/produse/${mySlug}`, lastModified:now, priority:0.85, changeFrequency:'monthly',
        alternates:{ languages: Object.fromEntries(LOCALES.map(l=>[l,`${BASE}/${l}/produse/${slugs[l]||canonical}`])) } });
    });
  });

  // ── Produse Aluminiu individuale
  const ALU_SLUGS = {
    'alumil-s77-supreme':    { ro:'sistem-aluminiu-alumil-s77-supreme',    en:'alumil-s77-supreme-aluminium-system',    de:'alumil-s77-supreme-aluminiumsystem',    fr:'systeme-aluminium-alumil-s77-supreme',    es:'sistema-aluminio-alumil-s77-supreme',    it:'sistema-alluminio-alumil-s77-supreme' },
    'alumil-s67-smartia':    { ro:'sistem-aluminiu-alumil-s67-smartia',    en:'alumil-s67-smartia-aluminium-system',    de:'alumil-s67-smartia-aluminiumsystem',    fr:'systeme-aluminium-alumil-s67-smartia',    es:'sistema-aluminio-alumil-s67-smartia',    it:'sistema-alluminio-alumil-s67-smartia' },
    'alumil-s700-supreme':   { ro:'sistem-aluminiu-alumil-s700-supreme',   en:'alumil-s700-supreme-aluminium-system',   de:'alumil-s700-supreme-aluminiumsystem',   fr:'systeme-aluminium-alumil-s700-supreme',   es:'sistema-aluminio-alumil-s700-supreme',   it:'sistema-alluminio-alumil-s700-supreme' },
    'alumil-s350-smartia':   { ro:'sistem-aluminiu-alumil-s350-smartia',   en:'alumil-s350-smartia-aluminium-system',   de:'alumil-s350-smartia-aluminiumsystem',   fr:'systeme-aluminium-alumil-s350-smartia',   es:'sistema-aluminio-alumil-s350-smartia',   it:'sistema-alluminio-alumil-s350-smartia' },
    'alumil-sf85-supreme':   { ro:'sistem-aluminiu-alumil-sf85-supreme',   en:'alumil-sf85-supreme-aluminium-system',   de:'alumil-sf85-supreme-aluminiumsystem',   fr:'systeme-aluminium-alumil-sf85-supreme',   es:'sistema-aluminio-alumil-sf85-supreme',   it:'sistema-alluminio-alumil-sf85-supreme' },
    'alumil-m19800-smartia': { ro:'sistem-aluminiu-alumil-m19800-smartia', en:'alumil-m19800-smartia-aluminium-system', de:'alumil-m19800-smartia-aluminiumsystem', fr:'systeme-aluminium-alumil-m19800-smartia', es:'sistema-aluminio-alumil-m19800-smartia', it:'sistema-alluminio-alumil-m19800-smartia' },
  };
  LOCALES.forEach(locale => {
    Object.entries(ALU_SLUGS).forEach(([canonical, slugs]) => {
      const mySlug = slugs[locale] || canonical;
      urls.push({ url:`${BASE}/${locale}/produse-aluminiu/${mySlug}`, lastModified:now, priority:0.85, changeFrequency:'monthly',
        alternates:{ languages: Object.fromEntries(LOCALES.map(l=>[l,`${BASE}/${l}/produse-aluminiu/${slugs[l]||canonical}`])) } });
    });
  });

  // ── Sisteme Umbrire individuale
  const UMBRIRE_SLUGS = {
    'rulouri-exterioare-aluminiu':    { ro:'rulouri-exterioare-aluminiu',      en:'aluminium-external-roller-shutters',    de:'aluminium-aussenrollladen',    fr:'volets-roulants-aluminium-exterieurs',    es:'persianas-exteriores-aluminio',    it:'tapparelle-esterne-alluminio' },
    'jaluzele-venetiene-raffstore':   { ro:'jaluzele-venetiene-raffstore',      en:'raffstore-venetian-blinds',            de:'raffstore-aussenjalousien',    fr:'stores-venitiens-raffstore',              es:'persianas-venecianas-raffstore',   it:'veneziane-raffstore' },
    'zipscreen':                      { ro:'zipscreen',                         en:'zipscreen-exterior-blind',             de:'zipscreen-aussenrollo',        fr:'zipscreen-store-exterieur',               es:'zipscreen-toldo-exterior',         it:'zipscreen-tenda-esterna' },
    'pergole-automate-somfy':         { ro:'pergole-automate-somfy',           en:'somfy-automatic-pergolas',             de:'somfy-automatische-pergolen',  fr:'pergolas-automatiques-somfy',             es:'pergolas-automaticas-somfy',       it:'pergole-automatiche-somfy' },
  };
  LOCALES.forEach(locale => {
    Object.entries(UMBRIRE_SLUGS).forEach(([canonical, slugs]) => {
      const mySlug = slugs[locale] || canonical;
      urls.push({ url:`${BASE}/${locale}/umbrire/${mySlug}`, lastModified:now, priority:0.82, changeFrequency:'monthly',
        alternates:{ languages: Object.fromEntries(LOCALES.map(l=>[l,`${BASE}/${l}/umbrire/${slugs[l]||canonical}`])) } });
    });
  });

  // ── Sisteme nZEB individuale
  const NZEB_SLUGS = {
    'precadre-blaugelb-triotherm':   { ro:'precadre-blaugelb-triotherm-plus',      en:'blaugelb-triotherm-plus-precasings',         de:'blaugelb-triotherm-plus-vorfenster',         fr:'precadres-blaugelb-triotherm-plus',      es:'premarcos-blaugelb-triotherm-plus',      it:'pre-telai-blaugelb-triotherm-plus' },
    'banda-precomprimata-butil':     { ro:'banda-precomprimata-butilic',            en:'pre-compressed-butyl-sealing-tape',          de:'vorkomprimiertes-butyl-dichtband',           fr:'bande-precomprimee-butyle',              es:'cinta-precomprimida-butilica',           it:'nastro-precompresso-butilico' },
    'banda-etansare-antivapori':     { ro:'banda-etansare-antivapori-interior',     en:'interior-vapour-barrier-sealing-tape',       de:'innen-dampfsperrband',                       fr:'ruban-etancheite-pare-vapeur-interieur', es:'banda-sellado-barrera-vapor-interior',   it:'nastro-tenuta-barriera-vapore-interno' },
    'bagheta-warm-edge-thermo':      { ro:'bagheta-warm-edge-distantier-termic',    en:'warm-edge-thermo-spacer-insulating-glass',  de:'warm-edge-thermo-abstandhalter-isolierglas', fr:'espaceur-warm-edge-thermo-vitrage',      es:'separador-warm-edge-thermo-vidrio-aislante', it:'distanziale-warm-edge-thermo-vetro-isolante' },
    'geamuri-termopan-saint-gobain': { ro:'geamuri-termopan-saint-gobain-sgg',      en:'saint-gobain-sgg-thermal-insulating-glass', de:'saint-gobain-sgg-waermeschutzisolierglas',   fr:'vitrage-isolant-saint-gobain-sgg',       es:'vidrio-aislante-saint-gobain-sgg',       it:'vetro-termoisolante-saint-gobain-sgg' },
  };
  LOCALES.forEach(locale => {
    Object.entries(NZEB_SLUGS).forEach(([canonical, slugs]) => {
      const mySlug = slugs[locale] || canonical;
      urls.push({ url:`${BASE}/${locale}/sisteme-nzeb/${mySlug}`, lastModified:now, priority:0.82, changeFrequency:'monthly',
        alternates:{ languages: Object.fromEntries(LOCALES.map(l=>[l,`${BASE}/${l}/sisteme-nzeb/${slugs[l]||canonical}`])) } });
    });
  });

  // ── Accesorii individuale
  const ACC_SLUGS = {
    'toc-de-renovare':                   { ro:'toc-de-renovare-pvc',                                    en:'pvc-renovation-frame',                              de:'pvc-renovierungsrahmen',                              fr:'cadre-renovation-pvc',                    es:'marco-renovacion-pvc',                    it:'telaio-ristrutturazione-pvc' },
    'pervazuri-interior-pvc-exterior-al':{ ro:'pervazuri-interior-pvc-glafuri-exterior-aluminiu',        en:'interior-pvc-windowsills-exterior-aluminium-sills',  de:'innenfensterbaenke-pvc-aussenfensterbaenke-aluminium', fr:'appuis-fenetre-interieurs-pvc-exterieurs-aluminium', es:'alfeizares-interiores-pvc-exteriores-aluminio', it:'davanzali-interni-pvc-esterni-alluminio' },
    'grila-higroreglabila-aereco':        { ro:'grila-higroreglabila-aereco-ventilatie',                 en:'aereco-hygro-adjustable-ventilation-grille',         de:'aereco-hygroregelbare-lueftungsgitter',               fr:'grille-hygroreglable-aereco-ventilation',  es:'rejilla-higrorreglable-aereco-ventilacion', it:'griglia-igroregolab-aereco-ventilazione' },
    'automatizari-somfy':                { ro:'automatizari-somfy-rulouri-pergole',                      en:'somfy-automation-shutters-pergolas',                 de:'somfy-automatisierung-rolllaeden-pergolen',           fr:'automatisation-somfy-volets-pergolas',     es:'automatizacion-somfy-persianas-pergolas',   it:'automazione-somfy-tapparelle-pergole' },
  };
  LOCALES.forEach(locale => {
    Object.entries(ACC_SLUGS).forEach(([canonical, slugs]) => {
      const mySlug = slugs[locale] || canonical;
      urls.push({ url:`${BASE}/${locale}/accesorii/${mySlug}`, lastModified:now, priority:0.80, changeFrequency:'monthly',
        alternates:{ languages: Object.fromEntries(LOCALES.map(l=>[l,`${BASE}/${l}/accesorii/${slugs[l]||canonical}`])) } });
    });
  });
  return urls;
}
