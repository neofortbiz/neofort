const baseUrl = 'https://www.neofort-biz.ro';
const locales = ['ro', 'en', 'de', 'fr', 'es', 'it'];
const pages = [
  { path: '', priority: 1.0 },
  { path: '/tamplarie-aluminiu', priority: 0.9 },
  { path: '/tamplarie-pvc', priority: 0.9 },
  { path: '/accesorii', priority: 0.7 },
  { path: '/servicii', priority: 0.7 },
  { path: '/despre', priority: 0.5 },
  { path: '/contact', priority: 0.8 },
  { path: '/blog', priority: 0.6 },
];
const products = [
  '/tamplarie-pvc-bluevolution92-placat','/tamplarie-pvc-bluevolution92-flex','/tamplarie-pvc-bluevolution92-round',
  '/tamplarie-pvc-greenevolution76-mdround','/tamplarie-pvc-greenevolution76-mdflex','/tamplarie-pvc-greenevolution76-adflex',
  '/tamplarie-aluminiu-alumil-s77','/tamplarie-aluminiu-alumil-s67','/tamplarie-aluminiu-alumil-s700',
  '/tamplarie-aluminiu-alumil-s350','/tamplarie-aluminiu-alumil-sf85','/tamplarie-aluminiu-alumil-m19800',
  '/rulouri-exterioare-aluminiu','/jaluzele-venetiene-raffstore','/blaugelb-triotherm',
  '/banda-butilica-precomprimata','/banda-antivapori','/bagheta-warm-edge',
  '/toc-renovare','/pervazuri-glafuri','/grila-aerisire','/geam-termopan-saint-gobain',
];
export default function sitemap() {
  const now = new Date().toISOString();
  const urls = [];
  locales.forEach(locale => {
    pages.forEach(p => urls.push({ url: `${baseUrl}/${locale}${p.path}`, lastModified: now, priority: p.priority }));
    products.forEach(slug => urls.push({ url: `${baseUrl}/${locale}${slug}`, lastModified: now, priority: 0.8 }));
  });
  return urls;
}
