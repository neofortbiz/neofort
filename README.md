# Neofort — Site Next.js Multilingv

## Structura proiectului
```
neofort/
├── app/
│   └── [locale]/          ← paginile site-ului (ro/en/de/fr/es/it)
│       ├── page.js        ← Acasă
│       ├── tamplarie-aluminiu/page.js
│       ├── tamplarie-pvc/page.js
│       ├── accesorii/page.js
│       ├── servicii/page.js
│       ├── despre/page.js
│       ├── contact/page.js
│       └── blog/page.js
├── components/
│   ├── Header.js          ← navigare + schimbator limbi
│   └── Footer.js
├── messages/              ← traducerile
│   ├── ro.json
│   ├── en.json
│   ├── de.json
│   ├── fr.json
│   ├── es.json
│   └── it.json
├── i18n/
│   ├── routing.js
│   └── request.js
├── middleware.js
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Cum încarci pe GitHub
1. Mergi pe github.com
2. Click "New repository" → numește-l "neofort"
3. Încarcă toate fișierele (drag & drop sau "uploading an existing file")
4. Conectează repo-ul la Vercel → site-ul e live!

## Cum modifici textele
Editează fișierele din `/messages/` — câte unul per limbă.
