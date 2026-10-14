// v270: Titluri si meta descrieri dedicate pentru paginile de produs.
// Motiv: pana in v269 titlul era `${name} · Neofort BIZ` (medie 93 caractere, toate
// cele 150 peste limita SERP de ~60) iar descrierea era seo_text.slice(0,160), care
// taia in mijlocul cuvantului pe 115 din 150 de pagini.
//
// Reguli respectate aici:
//   title <= 60 caractere · desc <= 150 caractere · fraza completa, niciodata taiata
//   REGULA v270b: fiecare substantiv din numele original al produsului trebuie sa
//   apara in titlu SAU in descriere. Prima varianta comprimase prea mult si
//   pierduse termeni cautati (Kunststoffprofil pe toate cele 6 titluri germane,
//   "ferestre si usi" pe Alumil S 67/S 77, "terase/fatade" pe Zipscreen,
//   "antiefractie" pe rulouri, "geam termoizolant" pe Saint-Gobain).
//   fara sufixul " · Neofort BIZ" pe paginile de produs — cele 14 caractere au fost
//   redirectionate catre cuvinte cheie; numele firmei ramane in og:site_name si in
//   schema Organization, iar Google il afiseaza separat in linia de breadcrumb
//   fiecare descriere contine cel putin o cifra reala din specs/perf (fapt citabil
//   pentru LLM) si, unde incape, zona de montaj
//
// Cheile sunt slug-urile canonice din SLUG_MAP, unice intre cele 5 familii.
// generateMetadata face fallback la comportamentul vechi daca o cheie lipseste.

// v270 — punctul 5 din audit: pana acum accesorii, sisteme-nzeb si umbrire declarau
// toate `brand: 'Neofort BIZ'` si nu aveau deloc `manufacturer`, desi o parte din
// produse sunt fabricate de terti. Aici sunt trecute DOAR produsele unde
// producatorul e cert din denumirea si specificatiile produsului. Pentru restul
// (pervazuri, benzi de etansare, bagheta warm edge cu 3 furnizori posibili,
// rulouri, raffstore, zipscreen, toc de renovare) nu se declara producator —
// raman pe brand Neofort BIZ, pentru ca o atribuire gresita in schema e mai
// daunatoare decat lipsa ei.
export const PRODUCT_BRAND = {
  'grila-higroreglabila-aereco':   { brand:'Aereco',       manufacturer:'Aereco S.A.',        country:'FR' },
  'automatizari-somfy':            { brand:'Somfy',        manufacturer:'Somfy',              country:'FR' },
  'pergole-automate-somfy':        { brand:'Somfy',        manufacturer:'Somfy',              country:'FR' },
  'precadre-blaugelb-triotherm':   { brand:'Blaugelb',     manufacturer:'Blaugelb',           country:'DE' },
  'geamuri-termopan-saint-gobain': { brand:'Saint-Gobain', manufacturer:'Saint-Gobain Glass', country:'FR' },
};

export const PRODUCT_META = {

  'bluevolution-92-alu': {
    title: {
      ro: 'Profil PVC Salamander BluEvolution 92 ALU – 6 camere',
      en: 'Salamander BluEvolution 92 ALU – 6-Chamber PVC Profile',
      de: 'Salamander BluEvolution 92 ALU – 6-Kammer-Kunststoffprofil',
      fr: 'Salamander BluEvolution 92 ALU – Profil PVC 6 chambres',
      es: 'Salamander BluEvolution 92 ALU – Perfil PVC 6 cámaras',
      it: 'Salamander BluEvolution 92 ALU – Profilo PVC 6 camere',
    },
    desc: {
      ro: 'Profil cu 6 camere, placat cu aluminiu 12 mm, adâncime 92 mm. Uw de la 0,70 W/m²K, 47 dB, RC2. Ferestre PVC montate în București și Ilfov.',
      en: 'Six-chamber profile with 12 mm aluminium cladding and 92 mm depth. Uw from 0.70 W/m²K, 47 dB, RC2. PVC windows fitted in Bucharest and Ilfov.',
      de: 'Kunststofffenster-Profil mit 6 Kammern, 12 mm Aluminiumverkleidung, 92 mm Bautiefe. Uw ab 0,70 W/m²K, 47 dB, RC2. Montage in Bukarest.',
      fr: 'Profil à 6 chambres avec revêtement aluminium 12 mm, profondeur 92 mm. Uw dès 0,70 W/m²K, 47 dB, RC2. Fenêtres PVC posées à Bucarest.',
      es: 'Perfil de 6 cámaras con revestimiento de aluminio 12 mm y 92 mm de profundidad. Uw desde 0,70 W/m²K, 47 dB, RC2. Ventanas PVC en Bucarest.',
      it: 'Profilo a 6 camere con rivestimento in alluminio 12 mm e profondità 92 mm. Uw da 0,70 W/m²K, 47 dB, RC2. Finestre PVC posate a Bucarest.',
    },
  },

  'bluevolution-92-flex': {
    title: {
      ro: 'Profil PVC Salamander BluEvolution 92 FLEX – 6 camere',
      en: 'Salamander BluEvolution 92 FLEX – 6-Chamber PVC Profile',
      de: 'Salamander BluEvolution 92 FLEX – 6-Kammer-Kunststoffprofil',
      fr: 'Salamander BluEvolution 92 FLEX – Profil PVC 6 chambres',
      es: 'Salamander BluEvolution 92 FLEX – Perfil PVC 6 cámaras',
      it: 'Salamander BluEvolution 92 FLEX – Profilo PVC 6 camere',
    },
    desc: {
      ro: 'Profil drept cu 6 camere, adâncime 92 mm, 3 garnituri EPDM. Uw de la 0,70 W/m²K, 47 dB, RC2. Ferestre PVC montate în București și Ilfov.',
      en: 'Straight six-chamber profile, 92 mm deep, three EPDM seals. Uw from 0.70 W/m²K, 47 dB, RC2. PVC windows fitted in Bucharest and Ilfov.',
      de: 'Gerades Kunststoffprofil mit 6 Kammern, 92 mm Bautiefe, drei EPDM-Dichtungen. Uw ab 0,70 W/m²K, 47 dB, RC2. Montage in Bukarest.',
      fr: 'Profil droit à 6 chambres, 92 mm de profondeur, trois joints EPDM. Uw dès 0,70 W/m²K, 47 dB, RC2. Fenêtres PVC posées à Bucarest.',
      es: 'Perfil recto de 6 cámaras, 92 mm de profundidad y tres juntas EPDM. Uw desde 0,70 W/m²K, 47 dB, RC2. Ventanas PVC montadas en Bucarest.',
      it: 'Profilo dritto a 6 camere, 92 mm di profondità e tre guarnizioni EPDM. Uw da 0,70 W/m²K, 47 dB, RC2. Finestre PVC posate a Bucarest.',
    },
  },

  'bluevolution-92-round': {
    title: {
      ro: 'Profil PVC Salamander BluEvolution 92 ROUND – 6 camere',
      en: 'Salamander BluEvolution 92 ROUND – 6-Chamber PVC Profile',
      de: 'Salamander BluEvolution 92 ROUND – 6-Kammer-Kunststoffprofil',
      fr: 'Salamander BluEvolution 92 ROUND – Profil PVC 6 chambres',
      es: 'Salamander BluEvolution 92 ROUND – Perfil PVC 6 cámaras',
      it: 'Salamander BluEvolution 92 ROUND – Profilo PVC 6 camere',
    },
    desc: {
      ro: 'Profil rotunjit cu 6 camere, adâncime 92 mm, geam 24–60 mm. Uw de la 0,70 W/m²K, 47 dB, RC2. Ferestre PVC montate în București și Ilfov.',
      en: 'Rounded six-chamber profile, 92 mm deep, glazing 24–60 mm. Uw from 0.70 W/m²K, 47 dB, RC2. PVC windows fitted in Bucharest and Ilfov.',
      de: 'Rundes Kunststoffprofil mit 6 Kammern, 92 mm Bautiefe, Verglasung 24–60 mm. Uw ab 0,70 W/m²K, 47 dB, RC2. Montage in Bukarest.',
      fr: 'Profil arrondi à 6 chambres, 92 mm de profondeur, vitrage 24–60 mm. Uw dès 0,70 W/m²K, 47 dB, RC2. Fenêtres PVC posées à Bucarest.',
      es: 'Perfil redondeado de 6 cámaras, 92 mm de profundidad, vidrio 24–60 mm. Uw desde 0,70 W/m²K, 47 dB, RC2. Ventanas PVC en Bucarest.',
      it: 'Profilo arrotondato a 6 camere, 92 mm di profondità, vetro 24–60 mm. Uw da 0,70 W/m²K, 47 dB, RC2. Finestre PVC posate a Bucarest.',
    },
  },

  'greenevolution-76-md-round': {
    title: {
      ro: 'Profil PVC Salamander GreenEvolution 76 MD ROUND',
      en: 'Salamander GreenEvolution 76 MD ROUND PVC Profile',
      de: 'Salamander GreenEvolution 76 MD ROUND Kunststoffprofil',
      fr: 'Salamander GreenEvolution 76 MD ROUND – Profil PVC',
      es: 'Salamander GreenEvolution 76 MD ROUND – Perfil PVC',
      it: 'Salamander GreenEvolution 76 MD ROUND – Profilo PVC',
    },
    desc: {
      ro: 'Design rotunjit, 5 camere, adâncime 76 mm, geam până la 48 mm. Uw de la 0,73 W/m²K, 47 dB, RC2. Ferestre PVC montate în București și Ilfov.',
      en: 'Rounded design, five chambers, 76 mm depth, glazing up to 48 mm. Uw from 0.73 W/m²K, 47 dB, RC2. PVC windows fitted in Bucharest and Ilfov.',
      de: 'Rundes Design, 5 Kammern, 76 mm Bautiefe, Verglasung bis 48 mm. Uw ab 0,73 W/m²K, 47 dB, RC2. Kunststofffenster-Montage in Bukarest.',
      fr: 'Design arrondi, 5 chambres, 76 mm de profondeur, vitrage jusqu’à 48 mm. Uw dès 0,73 W/m²K, 47 dB, RC2. Fenêtres PVC posées à Bucarest.',
      es: 'Diseño redondeado, 5 cámaras, 76 mm de profundidad, vidrio hasta 48 mm. Uw desde 0,73 W/m²K, 47 dB, RC2. Ventanas PVC en Bucarest.',
      it: 'Design arrotondato, 5 camere, 76 mm di profondità, vetro fino a 48 mm. Uw da 0,73 W/m²K, 47 dB, RC2. Finestre PVC posate a Bucarest.',
    },
  },

  'greenevolution-76-md-flex': {
    title: {
      ro: 'Profil PVC Salamander GreenEvolution 76 MD FLEX',
      en: 'Salamander GreenEvolution 76 MD FLEX PVC Profile',
      de: 'Salamander GreenEvolution 76 MD FLEX Kunststoffprofil',
      fr: 'Salamander GreenEvolution 76 MD FLEX – Profil PVC',
      es: 'Salamander GreenEvolution 76 MD FLEX – Perfil PVC',
      it: 'Salamander GreenEvolution 76 MD FLEX – Profilo PVC',
    },
    desc: {
      ro: 'Design drept, 5 camere, adâncime 76 mm, 3 garnituri EPDM plus mediană. Uw de la 0,73 W/m²K, 47 dB. Ferestre PVC montate în București.',
      en: 'Straight design, five chambers, 76 mm depth, three EPDM seals plus a middle gasket. Uw from 0.73 W/m²K, 47 dB. PVC windows fitted in Bucharest.',
      de: 'Gerades Design, 5 Kammern, 76 mm Bautiefe, drei EPDM-Dichtungen und Mitteldichtung. Uw ab 0,73 W/m²K, 47 dB. Kunststofffenster in Bukarest.',
      fr: 'Design droit, 5 chambres, 76 mm de profondeur, trois joints EPDM et joint médian. Uw dès 0,73 W/m²K, 47 dB. Fenêtres PVC posées à Bucarest.',
      es: 'Diseño recto, 5 cámaras, 76 mm de profundidad, tres juntas EPDM y junta central. Uw desde 0,73 W/m²K, 47 dB. Ventanas PVC en Bucarest.',
      it: 'Design dritto, 5 camere, 76 mm di profondità, tre guarnizioni EPDM e mediana. Uw da 0,73 W/m²K, 47 dB. Finestre PVC posate a Bucarest.',
    },
  },

  'greenevolution-76-ad-flex': {
    title: {
      ro: 'Profil PVC Salamander GreenEvolution 76 AD FLEX',
      en: 'Salamander GreenEvolution 76 AD FLEX PVC Profile',
      de: 'Salamander GreenEvolution 76 AD FLEX Kunststoffprofil',
      fr: 'Salamander GreenEvolution 76 AD FLEX – Profil PVC',
      es: 'Salamander GreenEvolution 76 AD FLEX – Perfil PVC',
      it: 'Salamander GreenEvolution 76 AD FLEX – Profilo PVC',
    },
    desc: {
      ro: 'Design drept avansat, 5 camere, adâncime 76 mm, geam până la 48 mm. Uw de la 0,73 W/m²K, 47 dB, RC2. Ferestre PVC montate în București.',
      en: 'Advanced straight design, five chambers, 76 mm depth, glazing up to 48 mm. Uw from 0.73 W/m²K, 47 dB, RC2. PVC windows fitted in Bucharest.',
      de: 'Fortgeschrittenes gerades Design, 5 Kammern, 76 mm Bautiefe, Verglasung bis 48 mm. Uw ab 0,73 W/m²K, 47 dB. Kunststofffenster in Bukarest.',
      fr: 'Design droit avancé, 5 chambres, 76 mm de profondeur, vitrage jusqu’à 48 mm. Uw dès 0,73 W/m²K, 47 dB. Fenêtres PVC posées à Bucarest.',
      es: 'Diseño recto avanzado, 5 cámaras, 76 mm de profundidad, vidrio hasta 48 mm. Uw desde 0,73 W/m²K, 47 dB. Ventanas PVC en Bucarest.',
      it: 'Design dritto avanzato, 5 camere, 76 mm di profondità, vetro fino a 48 mm. Uw da 0,73 W/m²K, 47 dB. Finestre PVC posate a Bucarest.',
    },
  },

  'alumil-s77-supreme': {
    title: {
      ro: 'Ferestre și Uși Aluminiu Alumil S 77 SUPREME – Uf 0,86',
      en: 'Alumil S 77 SUPREME – Aluminium Windows & Doors, Uf 0.86',
      de: 'Alumil S 77 SUPREME – Aluminiumfenster & -türen, Uf 0,86',
      fr: 'Alumil S 77 SUPREME – Fenêtres & portes aluminium, Uf 0,86',
      es: 'Alumil S 77 SUPREME – Ventanas y puertas aluminio, Uf 0,86',
      it: 'Alumil S 77 SUPREME – Finestre e porte alluminio, Uf 0,86',
    },
    desc: {
      ro: 'Sistem cu barieră termică poliamidă 40 mm. Uf de la 0,86 W/m²K, 42 dB, RC3 standard. Tâmplărie aluminiu montată în București și Ilfov.',
      en: 'System with a 40 mm polyamide thermal barrier. Uf from 0.86 W/m²K, 42 dB, RC3 as standard. Aluminium joinery fitted in Bucharest and Ilfov.',
      de: 'Aluminiumsystem mit 40 mm Polyamid-Wärmedämmbrücke. Uf ab 0,86 W/m²K, 42 dB, serienmäßig RC3. Montage in Bukarest und Ilfov.',
      fr: 'Système à rupture thermique polyamide 40 mm. Uf dès 0,86 W/m²K, 42 dB, RC3 de série. Menuiserie aluminium posée à Bucarest et Ilfov.',
      es: 'Sistema con barrera térmica de poliamida de 40 mm. Uf desde 0,86 W/m²K, 42 dB, RC3 de serie. Carpintería de aluminio en Bucarest.',
      it: 'Sistema con taglio termico in poliammide 40 mm. Uf da 0,86 W/m²K, 42 dB, RC3 di serie. Infissi in alluminio posati a Bucarest e Ilfov.',
    },
  },

  'alumil-s67-smartia': {
    title: {
      ro: 'Ferestre și Uși Aluminiu Alumil S 67 SMARTIA – 45 dB',
      en: 'Alumil S 67 SMARTIA – Aluminium Windows & Doors, 45 dB',
      de: 'Alumil S 67 SMARTIA – Aluminiumfenster & -türen, 45 dB',
      fr: 'Alumil S 67 SMARTIA – Fenêtres & portes aluminium, 45 dB',
      es: 'Alumil S 67 SMARTIA – Ventanas y puertas aluminio, 45 dB',
      it: 'Alumil S 67 SMARTIA – Finestre e porte alluminio, 45 dB',
    },
    desc: {
      ro: 'Sistem cu barieră termică 30 mm și izolare fonică până la 45 dB. Uf de la 1,5 W/m²K, RC3 opțional. Tâmplărie aluminiu în București.',
      en: 'System with a 30 mm thermal break and sound insulation up to 45 dB. Uf from 1.5 W/m²K, optional RC3. Aluminium joinery fitted in Bucharest.',
      de: 'Aluminiumsystem mit 30 mm Wärmedämmung und Schalldämmung bis 45 dB. Uf ab 1,5 W/m²K, RC3 optional. Montage in Bukarest und Ilfov.',
      fr: 'Système à rupture thermique 30 mm et isolation phonique jusqu’à 45 dB. Uf dès 1,5 W/m²K, RC3 en option. Menuiserie aluminium à Bucarest.',
      es: 'Sistema con rotura térmica de 30 mm y aislamiento acústico hasta 45 dB. Uf desde 1,5 W/m²K, RC3 opcional. Carpintería aluminio en Bucarest.',
      it: 'Sistema con taglio termico 30 mm e isolamento acustico fino a 45 dB. Uf da 1,5 W/m²K, RC3 opzionale. Infissi in alluminio a Bucarest.',
    },
  },

  'alumil-s700-supreme': {
    title: {
      ro: 'Liftant Glisant Alumil S 700 SUPREME – foi până la 500 kg',
      en: 'Alumil S 700 SUPREME Lift & Slide – Panels up to 500 kg',
      de: 'Alumil S 700 SUPREME Hebeschiebetür – Flügel bis 500 kg',
      fr: 'Alumil S 700 SUPREME – Coulissant levant 500 kg',
      es: 'Alumil S 700 SUPREME – Corredera elevable 500 kg',
      it: 'Alumil S 700 SUPREME – Scorrevole alzante 500 kg',
    },
    desc: {
      ro: 'Sistem cu barieră Kooltherm și geam de 50 mm. Uf de la 1,1 W/m²K, 41 dB, RC2. Uși glisante aluminiu montate în București și Ilfov.',
      en: 'Kooltherm thermal break and 50 mm glazing. Uf from 1.1 W/m²K, 41 dB, RC2. Aluminium sliding doors fitted in Bucharest and Ilfov.',
      de: 'Hebeschiebe-System mit Kooltherm-Dämmung und 50 mm Verglasung. Uf ab 1,1 W/m²K, 41 dB, RC2. Aluminium-Schiebetüren in Bukarest.',
      fr: 'Barrière Kooltherm, panneaux jusqu’à 500 kg, vitrage 50 mm. Uf dès 1,1 W/m²K, 41 dB, RC2. Baies coulissantes aluminium posées à Bucarest.',
      es: 'Barrera Kooltherm, hojas hasta 500 kg y vidrio de 50 mm. Uf desde 1,1 W/m²K, 41 dB, RC2. Puertas correderas de aluminio en Bucarest.',
      it: 'Barriera Kooltherm, ante fino a 500 kg e vetro da 50 mm. Uf da 1,1 W/m²K, 41 dB, RC2. Porte scorrevoli in alluminio posate a Bucarest.',
    },
  },

  'alumil-s350-smartia': {
    title: {
      ro: 'Liftant Glisant Alumil S 350 SMARTIA – ușă glisantă',
      en: 'Alumil S 350 SMARTIA Lift & Slide – Sliding Door',
      de: 'Alumil S 350 SMARTIA Hebeschiebetür – Schiebetür',
      fr: 'Alumil S 350 SMARTIA – Coulissant levant accessible',
      es: 'Alumil S 350 SMARTIA – Corredera elevable accesible',
      it: 'Alumil S 350 SMARTIA – Scorrevole alzante accessibile',
    },
    desc: {
      ro: 'Sistem accesibil cu barieră termică 28 mm și perii tri-fin. Uf de la 2,9 W/m²K, 38 dB, RC2. Uși glisante aluminiu montate în București.',
      en: 'Accessible system with a 28 mm thermal barrier and tri-fin brushes. Uf from 2.9 W/m²K, 38 dB, RC2. Aluminium sliding doors fitted in Bucharest.',
      de: 'Zugängliches Hebeschiebe-System mit 28 mm Wärmedämmbrücke und Tri-Fin-Bürsten. Uf ab 2,9 W/m²K, 38 dB, RC2. Montage in Bukarest.',
      fr: 'Porte coulissante à rupture thermique 28 mm et brosses tri-fin. Uf dès 2,9 W/m²K, 38 dB, RC2. Menuiserie aluminium posée à Bucarest.',
      es: 'Puerta corredera con barrera térmica de 28 mm y cepillos tri-fin. Uf desde 2,9 W/m²K, 38 dB, RC2. Carpintería de aluminio en Bucarest.',
      it: 'Porta scorrevole con taglio termico 28 mm e spazzole tri-fin. Uf da 2,9 W/m²K, 38 dB, RC2. Infissi in alluminio posati a Bucarest.',
    },
  },

  'alumil-sf85-supreme': {
    title: {
      ro: 'Sistem Armonic Alumil SF 85 SUPREME – uși pliante',
      en: 'Alumil SF 85 SUPREME Folding System – Uf 1.0 W/m²K',
      de: 'Alumil SF 85 SUPREME Faltsystem – Uf 1,0 W/m²K',
      fr: 'Alumil SF 85 SUPREME Système pliant – Uf 1,0 W/m²K',
      es: 'Alumil SF 85 SUPREME Sistema plegable – Uf 1,0 W/m²K',
      it: 'Alumil SF 85 SUPREME Sistema pieghevole – Uf 1,0 W/m²K',
    },
    desc: {
      ro: 'Uși pliante premium, 2–8 foi, până la 7000 mm, barieră Kooltherm 40 mm. Uf de la 1,0 W/m²K, PAS24. Tâmplărie aluminiu în București.',
      en: 'Premium folding doors, 2–8 panels, up to 7000 mm, with a 40 mm Kooltherm barrier. Uf from 1.0 W/m²K, PAS24. Aluminium joinery in Bucharest.',
      de: 'Premium-Falttüren, 2–8 Flügel, bis 7000 mm, 40 mm Kooltherm-Barriere. Uf ab 1,0 W/m²K, PAS24. Aluminium-Montage in Bukarest und Ilfov.',
      fr: 'Portes pliantes premium, 2 à 8 vantaux, jusqu’à 7000 mm, barrière Kooltherm 40 mm. Uf dès 1,0 W/m²K, PAS24. Pose à Bucarest et Ilfov.',
      es: 'Puertas plegables premium, 2–8 hojas, hasta 7000 mm, barrera Kooltherm de 40 mm. Uf desde 1,0 W/m²K, PAS24. Montaje en Bucarest.',
      it: 'Porte pieghevoli premium, 2–8 ante, fino a 7000 mm, barriera Kooltherm 40 mm. Uf da 1,0 W/m²K, PAS24. Posa a Bucarest e Ilfov.',
    },
  },

  'alumil-m19800-smartia': {
    title: {
      ro: 'Sistem Armonic Alumil M 19800 SMARTIA – uși pliante',
      en: 'Alumil M 19800 SMARTIA Folding System for Terraces',
      de: 'Alumil M 19800 SMARTIA Faltsystem für Terrassen',
      fr: 'Alumil M 19800 SMARTIA Système pliant pour terrasses',
      es: 'Alumil M 19800 SMARTIA Sistema plegable para terrazas',
      it: 'Alumil M 19800 SMARTIA Sistema pieghevole per terrazze',
    },
    desc: {
      ro: 'Uși pliante accesibile pentru terase, 2–6 foi, până la 5000 mm, barieră 18 mm. Uf de la 1,9 W/m²K, PAS24. Montaj în București și Ilfov.',
      en: 'Accessible folding doors for terraces, 2–6 panels, up to 5000 mm, 18 mm thermal break. Uf from 1.9 W/m²K, PAS24. Fitted in Bucharest.',
      de: 'Zugängliche Falttüren für Terrassen, 2–6 Flügel, bis 5000 mm, 18 mm Wärmedämmung. Uf ab 1,9 W/m²K, PAS24. Montage in Bukarest.',
      fr: 'Portes pliantes accessibles pour terrasses, 2 à 6 vantaux, jusqu’à 5000 mm, rupture 18 mm. Uf dès 1,9 W/m²K, PAS24. Pose à Bucarest.',
      es: 'Puertas plegables accesibles para terrazas, 2–6 hojas, hasta 5000 mm, rotura térmica 18 mm. Uf desde 1,9 W/m²K, PAS24. En Bucarest.',
      it: 'Porte pieghevoli accessibili per terrazze, 2–6 ante, fino a 5000 mm, taglio termico 18 mm. Uf da 1,9 W/m²K, PAS24. Posa a Bucarest.',
    },
  },

  'toc-de-renovare': {
    title: {
      ro: 'Toc de Renovare PVC – înlocuire fereastră fără demolare',
      en: 'PVC Renovation Frame – Window Replacement, No Demolition',
      de: 'PVC Renovierungsrahmen – Fensterwechsel ohne Abriss',
      fr: 'Cadre de rénovation PVC – remplacement de fenêtre',
      es: 'Marco de renovación PVC – sustitución de ventana',
      it: 'Telaio di ristrutturazione PVC – sostituzione finestra',
    },
    desc: {
      ro: 'Se montează peste tocul vechi, fără demontarea lui și fără spargerea tencuielii. Profil 76 mm, Uw 0,73 W/m²K, 47 dB. Montaj în București.',
      en: 'Fits over the old frame without removing it or breaking the plaster. 76 mm profile, Uw 0.73 W/m²K, up to 47 dB. Installed in Bucharest.',
      de: 'Montage über dem alten Rahmen, ohne dessen Entfernung und ohne Putzschäden. 76-mm-Profil, Uw 0,73 W/m²K, bis 47 dB. Montage in Bukarest.',
      fr: 'Posé sur le cadre ancien sans démontage ni casse de l’enduit. Profil 76 mm, Uw 0,73 W/m²K, jusqu’à 47 dB. Pose à Bucarest et Ilfov.',
      es: 'Se monta sobre el marco antiguo sin desmontarlo ni romper el revoque. Perfil 76 mm, Uw 0,73 W/m²K, hasta 47 dB. Montaje en Bucarest.',
      it: 'Si monta sul vecchio telaio senza rimozione né rottura dell’intonaco. Profilo 76 mm, Uw 0,73 W/m²K, fino a 47 dB. Posa a Bucarest.',
    },
  },

  'pervazuri-interior-pvc-exterior-al': {
    title: {
      ro: 'Pervazuri PVC Interior și Glafuri Aluminiu Exterior',
      en: 'Interior PVC Windowsills & Exterior Aluminium Sills',
      de: 'PVC-Innenfensterbänke & Aluminium-Außenfensterbänke',
      fr: 'Appuis de fenêtre PVC intérieurs et aluminium extérieurs',
      es: 'Alféizares PVC interiores y de aluminio exteriores',
      it: 'Davanzali PVC interni e soglie alluminio esterni',
    },
    desc: {
      ro: 'Finisare completă a ferestrei: pervaz PVC 20–400 mm și glaf aluminiu anodizat cu garnitură EPDM. Rezistent UV, peste 25 ani. București.',
      en: 'Complete window finishing: Class A PVC sill 20–400 mm and anodised aluminium sill with EPDM seal. UV resistant, over 25 years. Bucharest.',
      de: 'Vollständige Fensterveredelung: PVC-Bank 20–400 mm und eloxierte Aluminiumbank mit EPDM-Dichtung. UV-beständig, über 25 Jahre. Bukarest.',
      fr: 'Finition complète de la fenêtre : appui PVC 20–400 mm et appui aluminium anodisé avec joint EPDM. Résistant aux UV, plus de 25 ans.',
      es: 'Acabado completo de la ventana: alféizar PVC de 20–400 mm y vierteaguas de aluminio anodizado con junta EPDM. Resistente a UV, 25 años.',
      it: 'Finitura completa della finestra: davanzale PVC 20–400 mm e soglia in alluminio anodizzato con guarnizione EPDM. Resistente ai UV.',
    },
  },

  'grila-higroreglabila-aereco': {
    title: {
      ro: 'Grilă Higroreglabilă Aereco – ventilație naturală',
      en: 'Aereco Hygro-adjustable Grille – Natural Ventilation',
      de: 'Aereco Lüftungsgitter – natürliche Lüftung, 5–35 m³/h',
      fr: 'Grille hygroréglable Aereco – ventilation naturelle',
      es: 'Rejilla higrorregulable Aereco – ventilación natural',
      it: 'Griglia igroregolabile Aereco – ventilazione naturale',
    },
    desc: {
      ro: 'Ventilație controlată automat după umiditate, 5–35 m³/h, consum 0 W, atenuare 33 dB. Se integrează în profil PVC sau aluminiu. București.',
      en: 'Airflow controlled by humidity, 5–35 m³/h, zero power draw, 33 dB attenuation. Integrates into PVC or aluminium profiles. Fitted in Bucharest.',
      de: 'Hygroregelbar: Luftstrom über Feuchtigkeitssteuerung, 0 W Verbrauch, 33 dB Dämmung. Integriert in PVC- oder Aluminiumprofile. Bukarest.',
      fr: 'Débit contrôlé par l’humidité, 5–35 m³/h, 0 W, atténuation 33 dB. S’intègre au profil PVC ou aluminium. Pose à Bucarest et Ilfov.',
      es: 'Caudal controlado por la humedad, 5–35 m³/h, 0 W de consumo, 33 dB. Se integra en perfil de PVC o aluminio. Montaje en Bucarest.',
      it: 'Portata controllata dall’umidità, 5–35 m³/h, 0 W, attenuazione 33 dB. Si integra nel profilo in PVC o alluminio. Posa a Bucarest.',
    },
  },

  'automatizari-somfy': {
    title: {
      ro: 'Automatizări Somfy – motoare rulouri, pergole, smart home',
      en: 'Somfy Automation – Shutter, Pergola & Smart Home Motors',
      de: 'Somfy Automatisierung – Rollladen, Pergola, Smart Home',
      fr: 'Automatisation Somfy – volets, pergolas, maison connectée',
      es: 'Automatización Somfy – persianas, pérgolas, smart home',
      it: 'Automazione Somfy – tapparelle, pergole, casa intelligente',
    },
    desc: {
      ro: 'Motoare Oximo io și RS100 io, telecomenzi Situo, hub TaHoma pentru Alexa, Google și HomeKit. Garanție 5 ani, montaj în București și Ilfov.',
      en: 'Oximo io and RS100 io motors, Situo remote controls and TaHoma hub for Alexa, Google and HomeKit. Five-year warranty, fitted in Bucharest.',
      de: 'Motoren Oximo io und RS100 io, Situo-Fernbedienungen und TaHoma-Hub für Alexa, Google und HomeKit. 5 Jahre Garantie, Montage in Bukarest.',
      fr: 'Moteurs Oximo io et RS100 io, télécommandes Situo, box TaHoma pour Alexa, Google et HomeKit. Garantie 5 ans, pose à Bucarest et Ilfov.',
      es: 'Motores Oximo io y RS100 io, mandos Situo y hub TaHoma para Alexa, Google y HomeKit. Garantía de 5 años, montaje en Bucarest e Ilfov.',
      it: 'Motori Oximo io e RS100 io, telecomandi Situo e hub TaHoma per Alexa, Google e HomeKit. Garanzia 5 anni, posa a Bucarest e Ilfov.',
    },
  },

  'precadre-blaugelb-triotherm': {
    title: {
      ro: 'Precadre Blaugelb Triotherm+ – sistem montaj certificat RAL',
      en: 'Blaugelb Triotherm+ Precasings – RAL Certified System',
      de: 'Blaugelb Triotherm+ Vorfenster – RAL-Montagesystem',
      fr: 'Précadres Blaugelb Triotherm+ – système certifié RAL',
      es: 'Premarcos Blaugelb Triotherm+ – sistema certificado RAL',
      it: 'Pre-telai Blaugelb Triotherm+ – sistema certificato RAL',
    },
    desc: {
      ro: 'Precadru XPS cu 3 zone de izolare termică, λ 0,040 W/m²K, reduce puntea termică de montaj cu peste 90%. Necesar nZEB și Passive House.',
      en: 'XPS precasing with three thermal insulation zones, λ 0.040 W/m²K, cutting the installation thermal bridge by 90%. For nZEB and Passive House.',
      de: 'XPS-Vorfenster mit 3 Dämmzonen, λ 0,040 W/m²K, zertifiziertes thermisches System: 90% weniger Montage-Wärmebrücke. Für nZEB und Passivhaus.',
      fr: 'Précadre XPS à 3 zones d’isolation, λ 0,040 W/m²K : le pont thermique de montage chute de plus de 90%. Requis en nZEB et maison passive.',
      es: 'Premarco XPS con 3 zonas de aislamiento térmico, λ 0,040 W/m²K, reduce el puente térmico de montaje un 90%. Para nZEB y Passivhaus.',
      it: 'Pre-telaio XPS con 3 zone di isolamento termico, λ 0,040 W/m²K, riduce il ponte termico di montaggio del 90%. Per nZEB e Passive House.',
    },
  },

  'banda-precomprimata-butil': {
    title: {
      ro: 'Bandă Precomprimată Butilică – etanșare exterioară RAL',
      en: 'Pre-compressed Butyl Tape – Waterproof Exterior Sealing',
      de: 'Vorkomprimiertes Butylband – RAL-Außenabdichtung',
      fr: 'Ruban précomprimé butylique – étanchéité extérieure RAL',
      es: 'Cinta precomprimida butílica – sellado exterior RAL',
      it: 'Nastro precompresso butilico – tenuta esterna RAL',
    },
    desc: {
      ro: 'Stratul exterior al sistemului RAL: impermeabilă la apă (clasa W2–W3), permeabilă la vapori, Sd sub 0,1 m. Lățimi 10–60 mm, peste 25 ani.',
      en: 'Outer layer of the RAL system: sheds water at class W2–W3 yet stays vapour-open, Sd below 0.1 m. Widths 10–60 mm, over 25 years of service.',
      de: 'Außenschicht des RAL-Systems: wasserabweisend in Klasse W2–W3, dampfoffen mit Sd unter 0,1 m. Breiten 10–60 mm, über 25 Jahre haltbar.',
      fr: 'Couche extérieure du système RAL : imperméable en classe W2–W3 mais perméable à la vapeur, Sd sous 0,1 m. Largeurs 10–60 mm, 25 ans.',
      es: 'Capa exterior del sistema RAL: impermeable en clase W2–W3 y permeable al vapor, Sd por debajo de 0,1 m. Anchos 10–60 mm, más de 25 años.',
      it: 'Strato esterno del sistema RAL: impermeabile in classe W2–W3 ma traspirante, Sd sotto 0,1 m. Larghezze 10–60 mm, oltre 25 anni di durata.',
    },
  },

  'banda-etansare-antivapori': {
    title: {
      ro: 'Bandă Etanșare Antivapori Interior – Sd > 10 m',
      en: 'Interior Vapour Barrier Sealing Tape – Sd > 10 m',
      de: 'Innen-Dampfsperrband – Dampfsperre Sd > 10 m, RAL',
      fr: 'Ruban d’étanchéité pare-vapeur intérieur – Sd > 10 m',
      es: 'Cinta de sellado barrera de vapor interior – Sd > 10 m',
      it: 'Nastro di tenuta barriera al vapore interno – Sd > 10 m',
    },
    desc: {
      ro: 'Stratul interior al sistemului RAL, PE laminat cu aluminiu: barieră reală de vapori, Sd peste 10 m. Autoadeziv, lățimi 50, 75 și 100 mm.',
      en: 'Inner layer of the RAL system, PE laminated with aluminium: a true vapour barrier at Sd over 10 m. Self-adhesive, widths 50, 75 and 100 mm.',
      de: 'Innenschicht des RAL-Systems aus PE mit Aluminium: echte Dampfsperre mit Sd über 10 m. Selbstklebend, Breiten 50, 75 und 100 mm.',
      fr: 'Couche intérieure du système RAL, PE laminé aluminium : véritable barrière vapeur, Sd supérieur à 10 m. Autoadhésif, 50, 75 et 100 mm.',
      es: 'Capa interior del sistema RAL, PE laminado con aluminio: barrera de vapor real, Sd superior a 10 m. Autoadhesiva, anchos 50, 75 y 100 mm.',
      it: 'Strato interno del sistema RAL, PE laminato con alluminio: vera barriera al vapore, Sd oltre 10 m. Autoadesivo, 50, 75 e 100 mm.',
    },
  },

  'bagheta-warm-edge-thermo': {
    title: {
      ro: 'Baghetă Warm Edge Thermo – distanțier termic geam',
      en: 'Warm Edge Thermo Spacer – Glass Thermal Spacer, EN 1279',
      de: 'Warm Edge Thermo Abstandhalter – Glas, λ 0,035 W/mK',
      fr: 'Espaceur Warm Edge Thermo – thermique vitrage, EN 1279',
      es: 'Separador Warm Edge Thermo – térmico vidrio, EN 1279',
      it: 'Distanziale Warm Edge Thermo – termico vetro, EN 1279',
    },
    desc: {
      ro: 'λ 0,035 W/mK față de 160 la aluminiu: marginea geamului stă cu 4–6°C mai cald. Certificat Passive House, fabricat după EN 1279.',
      en: 'λ 0.035 W/mK against 160 for aluminium, keeping the glass edge 4–6°C warmer. Passive House certified, made to EN 1279 and EN 673.',
      de: 'λ 0,035 W/mK statt 160 bei Aluminium: der Glasrand bleibt 4–6°C wärmer. Passivhaus-zertifiziert, gefertigt nach EN 1279.',
      fr: 'λ 0,035 W/mK contre 160 pour l’aluminium : le bord du vitrage reste 4 à 6°C plus chaud. Certifié maison passive, selon EN 1279.',
      es: 'λ 0,035 W/mK frente a 160 del aluminio: el borde del vidrio queda 4–6°C más cálido. Certificado casa pasiva, según EN 1279.',
      it: 'λ 0,035 W/mK contro 160 dell’alluminio: il bordo del vetro resta 4–6°C più caldo. Certificato Passive House, secondo EN 1279.',
    },
  },

  'geamuri-termopan-saint-gobain': {
    title: {
      ro: 'Geamuri Termopan Saint-Gobain SGG – Ug de la 0,5 W/m²K',
      en: 'Saint-Gobain SGG Thermal Glass – Ug from 0.5 W/m²K',
      de: 'Saint-Gobain SGG Wärmeschutzisolierglas – Ug ab 0,5',
      fr: 'Vitrage isolant Saint-Gobain SGG – Ug dès 0,5 W/m²K',
      es: 'Vidrio aislante Saint-Gobain SGG – Ug desde 0,5 W/m²K',
      it: 'Vetro termoisolante Saint-Gobain SGG – Ug da 0,5 W/m²K',
    },
    desc: {
      ro: 'Planitherm, Planistar SUN și Stadip SILENCE: Ug de la 0,5 W/m²K în triplu, control solar g 0,27–0,60, fonoizolare Rw 44–52 dB.',
      en: 'Planitherm, Planistar SUN and Stadip SILENCE: Ug from 0.5 W/m²K in triple glazing, solar control g 0.27–0.60, Rw 44–52 dB acoustics.',
      de: 'Planitherm, Planistar SUN und Stadip SILENCE: Ug ab 0,5 W/m²K im Dreifachglas, Sonnenschutz g 0,27–0,60, Schalldämmung Rw 44–52 dB.',
      fr: 'Planitherm, Planistar SUN et Stadip SILENCE : Ug dès 0,5 W/m²K en triple vitrage, contrôle solaire g 0,27–0,60, Rw 44–52 dB.',
      es: 'Planitherm, Planistar SUN y Stadip SILENCE: Ug desde 0,5 W/m²K en triple, control solar g 0,27–0,60, acústica Rw 44–52 dB.',
      it: 'Planitherm, Planistar SUN e Stadip SILENCE: Ug da 0,5 W/m²K nel triplo, controllo solare g 0,27–0,60, acustica Rw 44–52 dB.',
    },
  },

  'rulouri-exterioare-aluminiu': {
    title: {
      ro: 'Rulouri Exterioare Aluminiu – protecție solară și RC3',
      en: 'Aluminium Exterior Roller Shutters – Solar & RC3 Protection',
      de: 'Außenrollladen Aluminium – Sonnen- und Einbruchschutz',
      fr: 'Volets roulants aluminium extérieurs – protection solaire',
      es: 'Persianas exteriores de aluminio – protección solar RC3',
      it: 'Tapparelle esterne alluminio – protezione solare e RC3',
    },
    desc: {
      ro: 'Lamele de aluminiu izolat până la 4500 mm, motor Somfy sau manual. Reduc aportul solar cu 70%, izolare termică nocturnă, antiefracție RC3.',
      en: 'Insulated aluminium slats up to 4500 mm, Somfy or manual drive. They cut solar gain by 70%, add night thermal insulation and RC3 burglar protection.',
      de: 'Gedämmte Aluminiumlamellen bis 4500 mm, Somfy-Antrieb oder manuell. 70% weniger Solareintrag, nächtlicher Wärmeschutz, RC3. Bukarest.',
      fr: 'Lames aluminium isolées jusqu’à 4500 mm, motorisation Somfy ou manuelle. Apport solaire réduit de 70%, isolation thermique, anti-effraction RC3.',
      es: 'Lamas de aluminio aislado hasta 4500 mm, accionamiento Somfy o manual. Aporte solar reducido un 70%, aislamiento térmico y antirrobo RC3.',
      it: 'Lamelle in alluminio coibentato fino a 4500 mm, motore Somfy o manuale. Apporto solare ridotto del 70%, isolamento termico, antieffrazione RC3.',
    },
  },

  'jaluzele-venetiene-raffstore': {
    title: {
      ro: 'Jaluzele Venețiene Exterioare Raffstore – 0°–90°',
      en: 'Raffstore Exterior Venetian Blinds – 0°–90° Tilt',
      de: 'Raffstore Außenjalousien – präziser Sonnenschutz 0°–90°',
      fr: 'Stores vénitiens extérieurs Raffstore – contrôle 0°–90°',
      es: 'Persianas venecianas exteriores Raffstore – 0°–90°',
      it: 'Veneziane esterne Raffstore – controllo solare 0°–90°',
    },
    desc: {
      ro: 'Control solar de precizie cu lamele de 80 mm orientabile 0°–90°, până la 5000 mm, peste 200 culori RAL. Aport solar redus 85%, clasa vânt 5.',
      en: 'Precision solar control with 80 mm slats tilting 0°–90°, up to 5000 mm, over 200 RAL colours. Solar gain cut 85%, wind class 5, KNX and Somfy.',
      de: '80-mm-Lamellen, 0°–90° schwenkbar, bis 5000 mm breit, über 200 RAL-Farben. 85% weniger Solareintrag, Windklasse 5, KNX und Somfy.',
      fr: 'Contrôle solaire de précision, lames de 80 mm orientables 0°–90°, jusqu’à 5000 mm, 200 teintes RAL. Apport solaire −85%, vent classe 5.',
      es: 'Control solar de precisión con lamas de 80 mm orientables 0°–90°, hasta 5000 mm y más de 200 colores RAL. Aporte solar −85%, viento clase 5.',
      it: 'Controllo solare di precisione con lamelle da 80 mm orientabili 0°–90°, fino a 5000 mm, oltre 200 colori RAL. Apporto solare −85%, vento 5.',
    },
  },

  'zipscreen': {
    title: {
      ro: 'Zipscreen – rulou textil exterior cu fermoar ZIP',
      en: 'Zipscreen – Exterior ZIP Blind for Terraces & Facades',
      de: 'Zipscreen – Außenrollo für Terrassen und Fassaden',
      fr: 'Zipscreen – store extérieur ZIP, terrasses et façades',
      es: 'Zipscreen – toldo exterior ZIP para terrazas y fachadas',
      it: 'Zipscreen – tenda esterna ZIP per terrazze e facciate',
    },
    desc: {
      ro: 'Pentru terase și fațade: până la 16 m² pe unitate, rezistent la vânt clasa 6 (88 km/h). Blochează 98% din UV, scade temperatura cu 15–20°C.',
      en: 'ZIP track guidance, up to 16 m² per unit, wind class 6 at 88 km/h. Blocks 98% of UV and brings the temperature down by 15–20°C. Bucharest.',
      de: 'ZIP-Führung, bis 16 m² je Einheit, Windklasse 6 bei 88 km/h. Blockt 98% der UV-Strahlung und senkt die Temperatur um 15–20°C. Bukarest.',
      fr: 'Guidage à glissière ZIP, jusqu’à 16 m² par unité, classe de vent 6 à 88 km/h. Filtre 98% des UV et abaisse la température de 15 à 20°C.',
      es: 'Guía con cremallera ZIP, hasta 16 m² por unidad, clase de viento 6 a 88 km/h. Bloquea el 98% de los UV y baja la temperatura 15–20°C.',
      it: 'Guida con cerniera ZIP, fino a 16 m² per unità, classe vento 6 a 88 km/h. Blocca il 98% degli UV e abbassa la temperatura di 15–20°C.',
    },
  },

  'pergole-automate-somfy': {
    title: {
      ro: 'Pergole Automate Somfy – protecție vânt și ploaie',
      en: 'Somfy Automatic Pergolas – Wind and Rain Protection',
      de: 'Somfy Pergolen – Pergola RGS io Motor, Windschutz',
      fr: 'Pergolas automatiques Somfy – protection vent et pluie',
      es: 'Pérgolas automáticas Somfy – protección viento y lluvia',
      it: 'Pergole automatiche Somfy – protezione vento e pioggia',
    },
    desc: {
      ro: 'Motor Pergola RGS io, deschidere până la 5 m, retragere automată peste 50 km/h. Pânză UPF 50+, cu 6–10°C mai răcoare dedesubt vara.',
      en: 'Pergola RGS io motor, up to 5 m of opening, automatic retraction above 50 km/h. UPF 50+ fabric keeps it 6–10°C cooler underneath in summer.',
      de: 'Automatische Pergola mit RGS io Motor, bis 5 m Öffnung, Einzug ab 50 km/h. Regenschutz, UPF-50+-Tuch, darunter 6–10°C kühler.',
      fr: 'Moteur Pergola RGS io, ouverture jusqu’à 5 m, repli automatique au-delà de 50 km/h. Toile UPF 50+, 6 à 10°C de moins dessous en été.',
      es: 'Motor Pergola RGS io, apertura de hasta 5 m, repliegue automático por encima de 50 km/h. Lona UPF 50+, 6–10°C menos debajo en verano.',
      it: 'Motore Pergola RGS io, apertura fino a 5 m, rientro automatico oltre i 50 km/h. Telo UPF 50+, sotto 6–10°C più freschi d’estate.',
    },
  },

};
