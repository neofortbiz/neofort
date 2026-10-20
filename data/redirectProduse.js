// === Redirecturi pentru rutele de produs mutate — v285 =====================
//
// Cele 16 produse de mai jos au fost mutate candva din /produse/ pe rutele lor
// proprii (/produse-aluminiu/, /umbrire/, /sisteme-nzeb/, /accesorii/), dar au
// ramas in SLUG_MAP din app/[locale]/produse/[slug]/page.js. Efectul: Next
// pre-genera 96 de rute (16 produse x 6 limbi) care toate apelau notFound().
// Gasite de scripts/amprenta.js la prima rulare; cele 17 garzi din
// validate-blog.js nu le semnalasera niciodata.
//
// Toate 16 au pagina vie, deci raspunsul corect e 301, nu 404.
//
// Tabelul e GENERAT, nu scris de mana: sursele vin din SLUG_MAP, destinatiile
// din hreflang-ul paginilor vii, asa cum le-a masurat amprenta. Fiecare
// destinatie a fost verificata ca este un canonical existent si ca nu creeaza
// bucla.
//
// CommonJS, pentru ca next.config.js il cere prin require().

const MUTATE = {
  'alumil-s77-supreme': {
    ro: ['/ro/produse/profil-aluminiu-alumil-s77-supreme', '/ro/produse-aluminiu/sistem-aluminiu-alumil-s77-supreme'],
    en: ['/en/products/alumil-s77-supreme-aluminium-profile', '/en/products-alu/alumil-s77-supreme-aluminium-system'],
    de: ['/de/produkte/alumil-s77-supreme-aluminiumprofil', '/de/produkte-alu/alumil-s77-supreme-aluminiumsystem'],
    fr: ['/fr/produits/profil-aluminium-alumil-s77-supreme', '/fr/produits-alu/systeme-aluminium-alumil-s77-supreme'],
    es: ['/es/productos/perfil-aluminio-alumil-s77-supreme', '/es/productos-alu/sistema-aluminio-alumil-s77-supreme'],
    it: ['/it/prodotti/profilo-alluminio-alumil-s77-supreme', '/it/prodotti-alu/sistema-alluminio-alumil-s77-supreme'],
  },
  'alumil-sf85-supreme': {
    ro: ['/ro/produse/profil-aluminiu-alumil-sf85-supreme', '/ro/produse-aluminiu/sistem-aluminiu-alumil-sf85-supreme'],
    en: ['/en/products/alumil-sf85-supreme-aluminium-profile', '/en/products-alu/alumil-sf85-supreme-folding-system'],
    de: ['/de/produkte/alumil-sf85-supreme-aluminiumprofil', '/de/produkte-alu/alumil-sf85-supreme-faltsystem'],
    fr: ['/fr/produits/profil-aluminium-alumil-sf85-supreme', '/fr/produits-alu/systeme-pliant-alumil-sf85-supreme'],
    es: ['/es/productos/perfil-aluminio-alumil-sf85-supreme', '/es/productos-alu/sistema-plegable-alumil-sf85-supreme'],
    it: ['/it/prodotti/profilo-alluminio-alumil-sf85-supreme', '/it/prodotti-alu/sistema-pieghevole-alumil-sf85-supreme'],
  },
  'alumil-s700-supreme': {
    ro: ['/ro/produse/profil-aluminiu-alumil-s700-supreme', '/ro/produse-aluminiu/sistem-aluminiu-alumil-s700-supreme'],
    en: ['/en/products/alumil-s700-supreme-lift-slide', '/en/products-alu/alumil-s700-supreme-lift-slide-system'],
    de: ['/de/produkte/alumil-s700-supreme-hebeschiebe', '/de/produkte-alu/alumil-s700-supreme-hebeschiebesystem'],
    fr: ['/fr/produits/profil-aluminium-alumil-s700-supreme', '/fr/produits-alu/systeme-coulissant-alumil-s700-supreme'],
    es: ['/es/productos/perfil-aluminio-alumil-s700-supreme', '/es/productos-alu/sistema-corredera-alumil-s700-supreme'],
    it: ['/it/prodotti/profilo-alluminio-alumil-s700-supreme', '/it/prodotti-alu/sistema-scorrevole-alumil-s700-supreme'],
  },
  'alumil-s67-smartia': {
    ro: ['/ro/produse/profil-aluminiu-alumil-s67-smartia', '/ro/produse-aluminiu/sistem-aluminiu-alumil-s67-smartia'],
    en: ['/en/products/alumil-s67-smartia-aluminium-profile', '/en/products-alu/alumil-s67-smartia-aluminium-system'],
    de: ['/de/produkte/alumil-s67-smartia-aluminiumprofil', '/de/produkte-alu/alumil-s67-smartia-aluminiumsystem'],
    fr: ['/fr/produits/profil-aluminium-alumil-s67-smartia', '/fr/produits-alu/systeme-aluminium-alumil-s67-smartia'],
    es: ['/es/productos/perfil-aluminio-alumil-s67-smartia', '/es/productos-alu/sistema-aluminio-alumil-s67-smartia'],
    it: ['/it/prodotti/profilo-alluminio-alumil-s67-smartia', '/it/prodotti-alu/sistema-alluminio-alumil-s67-smartia'],
  },
  'alumil-s350-smartia': {
    ro: ['/ro/produse/profil-aluminiu-alumil-s350-smartia', '/ro/produse-aluminiu/sistem-aluminiu-alumil-s350-smartia'],
    en: ['/en/products/alumil-s350-smartia-lift-slide', '/en/products-alu/alumil-s350-smartia-lift-slide-system'],
    de: ['/de/produkte/alumil-s350-smartia-hebeschiebe', '/de/produkte-alu/alumil-s350-smartia-hebeschiebesystem'],
    fr: ['/fr/produits/profil-aluminium-alumil-s350-smartia', '/fr/produits-alu/systeme-coulissant-alumil-s350-smartia'],
    es: ['/es/productos/perfil-aluminio-alumil-s350-smartia', '/es/productos-alu/sistema-corredera-alumil-s350-smartia'],
    it: ['/it/prodotti/profilo-alluminio-alumil-s350-smartia', '/it/prodotti-alu/sistema-scorrevole-alumil-s350-smartia'],
  },
  'alumil-m19800-smartia': {
    ro: ['/ro/produse/profil-aluminiu-alumil-m19800-smartia', '/ro/produse-aluminiu/sistem-aluminiu-alumil-m19800-smartia'],
    en: ['/en/products/alumil-m19800-smartia-curtain-wall', '/en/products-alu/alumil-m19800-smartia-folding-system'],
    de: ['/de/produkte/alumil-m19800-smartia-vorhangfassade', '/de/produkte-alu/alumil-m19800-smartia-faltsystem'],
    fr: ['/fr/produits/profil-aluminium-alumil-m19800-smartia', '/fr/produits-alu/systeme-pliant-alumil-m19800-smartia'],
    es: ['/es/productos/perfil-aluminio-alumil-m19800-smartia', '/es/productos-alu/sistema-plegable-alumil-m19800-smartia'],
    it: ['/it/prodotti/profilo-alluminio-alumil-m19800-smartia', '/it/prodotti-alu/sistema-pieghevole-alumil-m19800-smartia'],
  },
  'accesoriu-rulouri-exterioare': {
    ro: ['/ro/produse/accesoriu-rulouri-exterioare-aluminiu', '/ro/umbrire/rulouri-exterioare-aluminiu'],
    en: ['/en/products/aluminium-external-roller-shutters', '/en/shading-systems/aluminium-external-roller-shutters'],
    de: ['/de/produkte/aluminium-aussenrolllaeden', '/de/beschattungssysteme/aluminium-aussenrollladen'],
    fr: ['/fr/produits/volets-roulants-aluminium-exterieurs', '/fr/systemes-occultation/volets-roulants-aluminium-exterieurs'],
    es: ['/es/productos/persianas-exteriores-aluminio', '/es/sistemas-sombreado/persianas-exteriores-aluminio'],
    it: ['/it/prodotti/tapparelle-esterne-alluminio', '/it/sistemi-oscuramento/tapparelle-esterne-alluminio'],
  },
  'accesoriu-jaluzele-raffstore': {
    ro: ['/ro/produse/accesoriu-jaluzele-venetiene-raffstore', '/ro/umbrire/jaluzele-venetiene-raffstore'],
    en: ['/en/products/venetian-raffstore-blinds', '/en/shading-systems/raffstore-venetian-blinds'],
    de: ['/de/produkte/raffstore-jalousien', '/de/beschattungssysteme/raffstore-aussenjalousien'],
    fr: ['/fr/produits/persiennes-venitiennes-raffstore', '/fr/systemes-occultation/stores-venitiens-raffstore'],
    es: ['/es/productos/persianas-venecianas-raffstore', '/es/sistemas-sombreado/persianas-venecianas-raffstore'],
    it: ['/it/prodotti/veneziane-raffstore', '/it/sistemi-oscuramento/veneziane-raffstore'],
  },
  'accesoriu-precadre-blaugelb': {
    ro: ['/ro/produse/accesoriu-precadre-blaugelb-triotherm', '/ro/sisteme-nzeb/precadre-blaugelb-triotherm-plus'],
    en: ['/en/products/blaugelb-triotherm-plus-precasings', '/en/nzeb-systems/blaugelb-triotherm-plus-precasings'],
    de: ['/de/produkte/blaugelb-triotherm-plus-vorfenster', '/de/nzeb-systeme/blaugelb-triotherm-plus-vorfenster'],
    fr: ['/fr/produits/precadres-blaugelb-triotherm-plus', '/fr/systemes-nzeb/precadres-blaugelb-triotherm-plus'],
    es: ['/es/productos/premarcos-blaugelb-triotherm-plus', '/es/sistemas-nzeb/premarcos-blaugelb-triotherm-plus'],
    it: ['/it/prodotti/precontrotelaio-blaugelb-triotherm-plus', '/it/sistemi-nzeb/pre-telai-blaugelb-triotherm-plus'],
  },
  'accesoriu-banda-butilic': {
    ro: ['/ro/produse/accesoriu-banda-precomprimata-butil', '/ro/sisteme-nzeb/banda-precomprimata-butilic'],
    en: ['/en/products/butyl-pre-compressed-sealing-tape', '/en/nzeb-systems/pre-compressed-butyl-sealing-tape'],
    de: ['/de/produkte/butyl-vorkomprimiertes-dichtband', '/de/nzeb-systeme/vorkomprimiertes-butyl-dichtband'],
    fr: ['/fr/produits/bande-butyle-precomprimee', '/fr/systemes-nzeb/bande-precomprimee-butyle'],
    es: ['/es/productos/cinta-butilica-precomprimida', '/es/sistemas-nzeb/cinta-precomprimida-butilica'],
    it: ['/it/prodotti/nastro-butile-precompresso', '/it/sistemi-nzeb/nastro-precompresso-butilico'],
  },
  'accesoriu-banda-antivapori': {
    ro: ['/ro/produse/accesoriu-banda-etansare-antivapori', '/ro/sisteme-nzeb/banda-etansare-antivapori-interior'],
    en: ['/en/products/vapour-barrier-sealing-tape', '/en/nzeb-systems/interior-vapour-barrier-sealing-tape'],
    de: ['/de/produkte/dampfsperrband-fenster', '/de/nzeb-systeme/innen-dampfsperrband'],
    fr: ['/fr/produits/bande-etancheite-vapeur', '/fr/systemes-nzeb/ruban-etancheite-pare-vapeur-interieur'],
    es: ['/es/productos/cinta-barrera-vapor', '/es/sistemas-nzeb/banda-sellado-barrera-vapor-interior'],
    it: ['/it/prodotti/nastro-barriera-vapore', '/it/sistemi-nzeb/nastro-tenuta-barriera-vapore-interno'],
  },
  'accesoriu-bagheta-warm-edge': {
    ro: ['/ro/produse/accesoriu-bagheta-warm-edge-thermo', '/ro/sisteme-nzeb/bagheta-warm-edge-distantier-termic'],
    en: ['/en/products/warm-edge-thermoplastic-spacer', '/en/nzeb-systems/warm-edge-thermo-spacer-insulating-glass'],
    de: ['/de/produkte/warm-edge-thermoplastischer-abstandhalter', '/de/nzeb-systeme/warm-edge-thermo-abstandhalter-isolierglas'],
    fr: ['/fr/produits/baguette-warm-edge-espaceur', '/fr/systemes-nzeb/espaceur-warm-edge-thermo-vitrage'],
    es: ['/es/productos/intercalario-warm-edge-termoplastico', '/es/sistemas-nzeb/separador-warm-edge-thermo-vidrio-aislante'],
    it: ['/it/prodotti/distanziatore-warm-edge-termoplastico', '/it/sistemi-nzeb/distanziale-warm-edge-thermo-vetro-isolante'],
  },
  'accesoriu-geam-termopan': {
    ro: ['/ro/produse/accesoriu-geamuri-termopan-saint-gobain', '/ro/sisteme-nzeb/geamuri-termopan-saint-gobain-sgg'],
    en: ['/en/products/saint-gobain-thermal-insulating-glass', '/en/nzeb-systems/saint-gobain-sgg-thermal-insulating-glass'],
    de: ['/de/produkte/saint-gobain-waermeschutzisolierglas', '/de/nzeb-systeme/saint-gobain-sgg-waermeschutzisolierglas'],
    fr: ['/fr/produits/verre-isolant-saint-gobain', '/fr/systemes-nzeb/vitrage-isolant-saint-gobain-sgg'],
    es: ['/es/productos/vidrio-aislante-saint-gobain', '/es/sistemas-nzeb/vidrio-aislante-saint-gobain-sgg'],
    it: ['/it/prodotti/vetro-termoisolante-saint-gobain', '/it/sistemi-nzeb/vetro-termoisolante-saint-gobain-sgg'],
  },
  'accesoriu-toc-renovare': {
    ro: ['/ro/produse/accesoriu-toc-de-renovare', '/ro/accesorii/toc-de-renovare-pvc'],
    en: ['/en/products/window-renovation-profile', '/en/accessories/pvc-renovation-frame'],
    de: ['/de/produkte/renovierungsprofil-fenster', '/de/zubehoer/pvc-renovierungsrahmen'],
    fr: ['/fr/produits/profil-renovation-fenetre', '/fr/accessoires/cadre-renovation-pvc'],
    es: ['/es/productos/perfil-renovacion-ventana', '/es/accesorios/marco-renovacion-pvc'],
    it: ['/it/prodotti/telaio-ristrutturazione-finestra', '/it/accessori/telaio-ristrutturazione-pvc'],
  },
  'accesoriu-pervazuri-glafuri': {
    ro: ['/ro/produse/accesoriu-pervazuri-glafuri-pvc-aluminiu', '/ro/accesorii/pervazuri-interior-pvc-glafuri-exterior-aluminiu'],
    en: ['/en/products/windowsills-pvc-aluminium', '/en/accessories/interior-pvc-windowsills-exterior-aluminium-sills'],
    de: ['/de/produkte/fensterbaenke-pvc-aluminium', '/de/zubehoer/innenfensterbaenke-pvc-aussenfensterbaenke-aluminium'],
    fr: ['/fr/produits/appuis-fenetre-pvc-aluminium', '/fr/accessoires/appuis-fenetre-interieurs-pvc-exterieurs-aluminium'],
    es: ['/es/productos/alfeizares-pvc-aluminio', '/es/accesorios/alfeizares-interiores-pvc-exteriores-aluminio'],
    it: ['/it/prodotti/davanzali-pvc-alluminio', '/it/accessori/davanzali-interni-pvc-esterni-alluminio'],
  },
  'accesoriu-grila-aereco': {
    ro: ['/ro/produse/accesoriu-grila-higroreglabila-aereco', '/ro/accesorii/grila-higroreglabila-aereco-ventilatie'],
    en: ['/en/products/aereco-hygro-adjustable-ventilation-grille', '/en/accessories/aereco-hygro-adjustable-ventilation-grille'],
    de: ['/de/produkte/aereco-hygroregelbare-lueftungsgitter', '/de/zubehoer/aereco-hygroregelbare-lueftungsgitter'],
    fr: ['/fr/produits/grille-hygroreglable-aereco', '/fr/accessoires/grille-hygroreglable-aereco-ventilation'],
    es: ['/es/productos/rejilla-higrorreglable-aereco', '/es/accesorios/rejilla-higrorreglable-aereco-ventilacion'],
    it: ['/it/prodotti/griglia-igroregolab-aereco', '/it/accessori/griglia-igroregolab-aereco-ventilazione'],
  },
};

/** Cele 16 intrari de mai sus, desfasurate in 96 de reguli de redirect. */
function redirectProduse() {
  const reguli = [];
  for (const perLimba of Object.values(MUTATE)) {
    for (const [sursa, destinatie] of Object.values(perLimba)) {
      reguli.push({ source: sursa, destination: destinatie, permanent: true });
    }
  }
  return reguli;
}

module.exports = { MUTATE, redirectProduse };
