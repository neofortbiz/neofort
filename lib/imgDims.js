// Dimensiunile reale (latime, inaltime, in pixeli) ale imaginilor folosite ca og:image
// si ale fotografiilor de produs. v327.
//
// De ce exista: pana la v326 toate paginile declarau og:image 1200x630 (produsele
// 800x600), desi fisierele au alte dimensiuni, iar fotografia de produs nu avea
// width/height, deci pagina sarea cand se incarca (CLS). Next nu poate citi fisierele
// din public/ la randare fara sa le traga in functia serverless, asa ca dimensiunile
// stau aici, ca date.
//
// Garda 30 din scripts/validate-blog.js citeste fisierele reale si opreste livrarea
// daca o intrare de aici nu se potriveste sau daca o imagine folosita lipseste.
// La o imagine noua: se adauga aici randul ei (garda spune exact ce lipseste).
export const IMG_DIMS = {
  '/accessories/automatizari-somfy.avif': [1200, 800],
  '/accessories/automatizari-somfy.jpg': [1200, 800],
  '/accessories/bagheta-warm-edge.avif': [344, 322],
  '/accessories/bagheta-warm-edge.jpg': [344, 322],
  '/accessories/banda-antivapori.avif': [344, 322],
  '/accessories/banda-antivapori.jpg': [344, 322],
  '/accessories/banda-butilic.avif': [344, 322],
  '/accessories/banda-butilic.jpg': [344, 322],
  '/accessories/geam-termopan-saint-gobain.avif': [344, 322],
  '/accessories/geam-termopan-saint-gobain.jpg': [344, 322],
  '/accessories/grila-aereco.avif': [344, 322],
  '/accessories/grila-aereco.jpg': [344, 322],
  '/accessories/jaluzele-raffstore.avif': [344, 322],
  '/accessories/jaluzele-raffstore.jpg': [344, 322],
  '/accessories/pergole-automate-somfy.avif': [836, 826],
  '/accessories/pergole-automate-somfy.jpg': [836, 826],
  '/accessories/pervazuri-glafuri.avif': [344, 322],
  '/accessories/pervazuri-glafuri.jpg': [344, 322],
  '/accessories/precadre-blaugelb.avif': [344, 322],
  '/accessories/precadre-blaugelb.jpg': [344, 322],
  '/accessories/rulouri-exterioare.avif': [344, 322],
  '/accessories/rulouri-exterioare.jpg': [344, 322],
  '/accessories/toc-renovare.avif': [344, 322],
  '/accessories/toc-renovare.jpg': [344, 322],
  '/accessories/zipscreen.avif': [736, 564],
  '/accessories/zipscreen.jpg': [736, 564],
  '/blog/autorizatie-construire-schimbare-ferestre-2026-og.jpg': [1200, 675],
  '/blog/de-ce-un-pret-instant-la-ferestre-nu-este-o-oferta-og.jpg': [1200, 675],
  '/blog/bluevolution-92-vs-greenevolution-76-og.jpg': [1200, 630],
  '/blog/cat-dureaza-fereastra-pvc-cand-trebuie-inlocuita-og.jpg': [1200, 675],
  '/blog/ce-coeficient-termic-trebuie-ferestre-2026-og.jpg': [1200, 675],
  '/blog/cele-mai-bune-usi-aluminiu-sector-1-bucuresti-og.jpg': [1200, 630],
  '/blog/certificat-energetic-cladire-ferestre-og.jpg': [1200, 675],
  '/blog/cum-aleg-ferestre-eficiente-energetic-bucuresti-ghid-nzeb-2026-og.jpg': [1200, 630],
  '/blog/cum-imbunatatesc-izolatie-termica-ferestre-bucuresti-og.jpg': [1200, 630],
  '/blog/cum-se-monteaza-corect-termopanele-salamander-bucuresti-og.jpg': [1200, 630],
  '/blog/de-ce-suiera-termopanele-vant-og.jpg': [1200, 675],
  '/blog/export-tamplarie-germania-og.jpg': [1200, 630],
  '/blog/ferestre-casa-nzeb-romania-ghid-complet-2026-og.jpg': [1200, 675],
  '/blog/garnituri-uzate-cand-inlocuiesti-og.jpg': [1200, 675],
  '/blog/inlocuire-ferestre-vechi-renovare-apartament-bucuresti-og.jpg': [1200, 630],
  '/blog/jaluzele-raffstore-vs-rulouri-aluminiu-og.jpg': [1200, 630],
  '/blog/legislatie-2026-produse-constructii-cpd-regulament-og.jpg': [1200, 675],
  '/blog/mitul-pvc-toxic-siguranta-compozitie-evolutie-ferestre-og.jpg': [1200, 630],
  '/blog/montaj-geamuri-agabaritice-robot-ventuze-sticla-mari-dimensiuni-og.jpg': [1200, 630],
  '/blog/montaj-precadre-blaugelb-nzeb-og.jpg': [1200, 630],
  '/blog/montaj-tamplarie-salamander-evolutiondrive-plus-culisanta-alumil-m19800-armonice-og.jpg': [1200, 630],
  '/blog/nzeb-zeb-epbd-ferestre-og.jpg': [1200, 675],
  '/blog/optiuni-izolatie-perimetrala-ferestre-romania-2026-og.jpg': [1200, 630],
  '/blog/pereti-cortina-birouri-bucuresti-ghid-complet-2026-og.jpg': [1200, 630],
  '/blog/pereti-cortina-fatade-sticla-ghid-complet-og.jpg': [1200, 630],
  '/blog/pergola-bioclimatica-vs-clasica-ghid-alegere-og.jpg': [1200, 630],
  '/blog/pompa-caldura-ferestre-eficiente-og.jpg': [1200, 675],
  '/blog/preturi-ferestre-salamander-bucuresti-2026-og.jpg': [1200, 630],
  '/blog/preturi-tamplarie-aluminiu-alumil-aluprof-cortizo-reynaers-bucuresti-og.jpg': [1200, 630],
  '/blog/preturi-termopane-salamander-bucuresti-og.jpg': [1200, 630],
  '/blog/pvc-vs-aluminiu-case-nzeb-2026-ghid-alegere-og.jpg': [1200, 675],
  '/blog/reglaj-feronerie-roto-iarna-vara-og.jpg': [1200, 675],
  '/blog/rulouri-zipscreen-blackout-sau-transparent-cum-alegi-og.jpg': [1200, 630],
  '/blog/salamander-bluevolution-92-alu-placat-aluminiu-export-franta-casa-munte-og.jpg': [1200, 630],
  '/blog/salamander-bluevolution-92-casa-noua-smart-home-bucuresti-og.jpg': [1200, 630],
  '/blog/schimbare-ferestre-bloc-acord-asociatie-og.jpg': [1200, 675],
  '/blog/sistem-complet-nzeb-salamander-bluevolution-precadre-blaugelb-geam-triplu-og.jpg': [1200, 630],
  '/blog/somfy-automatizare-pergole-copertine-og.jpg': [1200, 630],
  '/blog/somfy-rulouri-motoare-exterioare-og.jpg': [1200, 630],
  '/blog/somfy-tahoma-smart-home-romania-og.jpg': [1200, 630],
  '/blog/subventii-programe-ferestre-2026-og.jpg': [1200, 675],
  '/blog/tamplarie-aluminiu-bariera-termica-ghid-complet-og.jpg': [1200, 630],
  '/blog/tamplarie-aluminiu-pereti-cortina-fatade-sticla-lucrari-bucuresti-og.jpg': [1200, 630],
  '/blog/tamplarie-aluminiu-reynaers-bloc-nou-construit-bucuresti-og.jpg': [1200, 630],
  '/blog/tamplarie-aluminiu-smart-home-ferestre-usi-inteligente-og.jpg': [1200, 630],
  '/blog/tamplarie-pvc-osciloculisanta-dubla-salamander-og.jpg': [1200, 630],
  '/blog/tamplarie-salamander-case-individuale-vile-export-europa-og.jpg': [1200, 630],
  '/blog/test-coala-hartie-termopan-og.jpg': [1200, 675],
  '/blog/tripan-vs-termopan-economii-reale-incalzire-pret-og.jpg': [1200, 675],
  '/blog/unde-comand-termopane-izolatie-avansata-bucuresti-og.jpg': [1200, 630],
  '/blog/unde-comand-usi-aluminiu-sector-1-bucuresti-og.jpg': [1200, 630],
  '/blog/unde-cumpar-jaluzele-exterioare-bucuresti-og.jpg': [1200, 630],
  '/blog/unde-gasesc-ferestre-salamander-cu-livrare-internationala-og.jpg': [1200, 630],
  '/blog/usa-culisanta-pvc-salamander-evolutiondrive-plus-plasa-plisse-og.jpg': [1200, 630],
  '/blog/usi-intrare-antiefractie-comanda-tactica-amprenta-digitala-aluminiu-og.jpg': [1200, 630],
  '/blog/vitrine-sticla-geamuri-panoramice-mari-dimensiuni-securizate-bucuresti-og.jpg': [1200, 630],
  '/blog/zipscreen-umbrire-terasa-ghid-complet-og.jpg': [1200, 630],
  '/og/Accesorii_Neofort.jpg': [584, 439],
  '/og/BLOG.jpg': [2048, 1335],
  '/og/Contact_Neofort.jpg': [583, 500],
  '/og/Despre_noi.jpg': [584, 500],
  '/og/Fabrica_Neofort.jpg': [1014, 564],
  '/og/Servicii_Neofort.jpg': [584, 500],
  '/og/Sisteme_NZEB.jpg': [1200, 630],
  '/og/Sisteme_Umbrire.jpg': [1200, 630],
  '/og/Sisteme_de_umbrire__rulouri_exterioare__jaluzele_raffstore__jaluzele_venetiene.jpg': [1014, 564],
  '/og/Tamplarie_Aluminiu_Alumil.jpg': [584, 540],
  '/og/Tamplarie_PVC_Salamander.jpg': [836, 826],
  '/og/nZEB.jpg': [1088, 564],
  '/products/alumil-m19800-smartia.avif': [344, 344],
  '/products/alumil-m19800-smartia.jpg': [344, 344],
  '/products/alumil-s350-smartia.avif': [344, 344],
  '/products/alumil-s350-smartia.jpg': [344, 344],
  '/products/alumil-s67-smartia.avif': [344, 344],
  '/products/alumil-s67-smartia.jpg': [344, 344],
  '/products/alumil-s700-supreme.avif': [344, 344],
  '/products/alumil-s700-supreme.jpg': [344, 344],
  '/products/alumil-s77-supreme.avif': [344, 344],
  '/products/alumil-s77-supreme.jpg': [344, 344],
  '/products/alumil-sf85-supreme.avif': [344, 344],
  '/products/alumil-sf85-supreme.jpg': [344, 344],
  '/products/bluevolution-92-alu.avif': [344, 344],
  '/products/bluevolution-92-alu.jpg': [344, 344],
  '/products/bluevolution-92-flex.avif': [344, 344],
  '/products/bluevolution-92-flex.jpg': [344, 344],
  '/products/bluevolution-92-round.avif': [344, 344],
  '/products/bluevolution-92-round.jpg': [344, 344],
  '/products/greenevolution-76-ad-flex.avif': [344, 344],
  '/products/greenevolution-76-ad-flex.jpg': [344, 344],
  '/products/greenevolution-76-md-flex.avif': [344, 344],
  '/products/greenevolution-76-md-flex.jpg': [344, 344],
  '/products/greenevolution-76-md-round.avif': [344, 344],
  '/products/greenevolution-76-md-round.jpg': [344, 344],
};

// { width, height } pentru og:image / ImageObject; obiect gol daca imaginea nu e in tabel
// (mai bine fara dimensiuni decat cu unele gresite).
export function ogDims(path) {
  const d = IMG_DIMS[path];
  return d ? { width: d[0], height: d[1] } : {};
}

// Atribute pentru <img> la fotografia de produs: rezerva locul inainte de incarcare.
// maxH = inaltimea maxima din CSS (.prd-img). Latimea nu depaseste latimea reala.
export function imgBox(path, maxH = 340) {
  const d = IMG_DIMS[path];
  if (!d) return {};
  const [w, h] = d;
  const maxW = Math.min(w, Math.round((maxH * w) / h));
  return { width: w, height: h, style: { aspectRatio: `${w} / ${h}`, width: `min(100%, ${maxW}px)`, height: 'auto' } };
}
