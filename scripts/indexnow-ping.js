// v200: IndexNow ping — anunta Bing/Yandex/Seznam instant despre URL-uri noi/modificate.
// Utilizare (dupa deploy):
//   node scripts/indexnow-ping.js https://www.neofort-biz.ro/ro/blog/slug-articol-nou [alte URL-uri...]
// Fara argumente: trimite homepage + blog listing (refresh general).
const KEY = '863f9dbc69864de7b6600600f8010465';
const HOST = 'www.neofort-biz.ro';

const urls = process.argv.slice(2);
const urlList = urls.length ? urls : ['https://' + HOST + '/ro', 'https://' + HOST + '/ro/blog'];

fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: 'https://' + HOST + '/' + KEY + '.txt',
    urlList,
  }),
}).then(r => {
  console.log('IndexNow status:', r.status, r.status === 200 || r.status === 202 ? 'OK — URL-uri acceptate' : 'verifica raspunsul');
  console.log('URL-uri trimise:', urlList.length);
  urlList.forEach(u => console.log('  ' + u));
}).catch(e => console.error('Eroare IndexNow:', e.message));
