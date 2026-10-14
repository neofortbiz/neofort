// v270: Titluri si meta descrieri dedicate pentru paginile de produs.
// Motiv: pana in v269 titlul era `${name} · Neofort BIZ` (medie 93 caractere, toate
// cele 150 peste limita SERP de ~60) iar descrierea era seo_text.slice(0,160), care
// taia in mijlocul cuvantului pe 115 din 150 de pagini.
//
// Reguli respectate aici:
//   title <= 60 caractere · desc <= 150 caractere · fraza completa, niciodata taiata
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

  // ───────────────────────── PVC Salamander ─────────────────────────
  'bluevolution-92-alu': {
    title: {
      ro: 'Profil PVC Salamander BluEvolution 92 ALU – 6 camere',
      en: 'Salamander BluEvolution 92 ALU – 6-Chamber PVC Profile',
      de: 'Salamander BluEvolution 92 ALU – 6-Kammer-PVC-Profil',
      fr: 'Salamander BluEvolution 92 ALU – Profil PVC 6 chambres',
      es: 'Salamander BluEvolution 92 ALU – Perfil PVC 6 cámaras',
      it: 'Salamander BluEvolution 92 ALU – Profilo PVC 6 camere',
    },
    desc: {
      ro: 'Profil PVC cu 6 camere și placare aluminiu 12 mm, adâncime 92 mm. Uw de la 0,70 W/m²K, 47 dB, RC2. Montaj în București și Ilfov.',
      en: 'Six-chamber PVC profile with 12 mm aluminium cladding and 92 mm depth. Uw from 0.70 W/m²K, 47 dB, RC2. Supplied and fitted in Bucharest.',
      de: 'PVC-Profil mit 6 Kammern, 12 mm Aluminiumschale und 92 mm Bautiefe. Uw ab 0,70 W/m²K, 47 dB, RC2. Lieferung und Montage in Bukarest.',
      fr: 'Profil PVC à 6 chambres avec parement aluminium 12 mm, profondeur 92 mm. Uw dès 0,70 W/m²K, 47 dB, RC2. Fourniture et pose à Bucarest.',
      es: 'Perfil PVC de 6 cámaras con revestimiento de aluminio 12 mm y 92 mm de profundidad. Uw desde 0,70 W/m²K, 47 dB, RC2. Montaje en Bucarest.',
      it: 'Profilo PVC a 6 camere con rivestimento in alluminio 12 mm e profondità 92 mm. Uw da 0,70 W/m²K, 47 dB, RC2. Fornitura e posa a Bucarest.',
    },
  },

  'bluevolution-92-flex': {
    title: {
      ro: 'Profil PVC Salamander BluEvolution 92 FLEX – 6 camere',
      en: 'Salamander BluEvolution 92 FLEX – 6-Chamber PVC Profile',
      de: 'Salamander BluEvolution 92 FLEX – 6-Kammer-PVC-Profil',
      fr: 'Salamander BluEvolution 92 FLEX – Profil PVC 6 chambres',
      es: 'Salamander BluEvolution 92 FLEX – Perfil PVC 6 cámaras',
      it: 'Salamander BluEvolution 92 FLEX – Profilo PVC 6 camere',
    },
    desc: {
      ro: 'Profil drept cu 6 camere, adâncime 92 mm și 3 garnituri EPDM. Uw de la 0,70 W/m²K, 47 dB, RC2. Montat de Neofort BIZ în București și Ilfov.',
      en: 'Straight six-chamber profile, 92 mm deep, with three EPDM seals. Uw from 0.70 W/m²K, 47 dB, RC2. Fitted by Neofort BIZ in Bucharest.',
      de: 'Gerades 6-Kammer-Profil, 92 mm Bautiefe, drei EPDM-Dichtungen. Uw ab 0,70 W/m²K, 47 dB, RC2. Montiert von Neofort BIZ in Bukarest.',
      fr: 'Profil droit à 6 chambres, 92 mm de profondeur, trois joints EPDM. Uw dès 0,70 W/m²K, 47 dB, RC2. Posé par Neofort BIZ à Bucarest.',
      es: 'Perfil recto de 6 cámaras, 92 mm de profundidad y tres juntas EPDM. Uw desde 0,70 W/m²K, 47 dB, RC2. Montado por Neofort BIZ en Bucarest.',
      it: 'Profilo dritto a 6 camere, 92 mm di profondità e tre guarnizioni EPDM. Uw da 0,70 W/m²K, 47 dB, RC2. Posato da Neofort BIZ a Bucarest.',
    },
  },

  'bluevolution-92-round': {
    title: {
      ro: 'Profil PVC Salamander BluEvolution 92 ROUND – 6 camere',
      en: 'Salamander BluEvolution 92 ROUND – 6-Chamber PVC Profile',
      de: 'Salamander BluEvolution 92 ROUND – 6-Kammer-PVC-Profil',
      fr: 'Salamander BluEvolution 92 ROUND – Profil PVC 6 chambres',
      es: 'Salamander BluEvolution 92 ROUND – Perfil PVC 6 cámaras',
      it: 'Salamander BluEvolution 92 ROUND – Profilo PVC 6 camere',
    },
    desc: {
      ro: 'Profil rotunjit cu 6 camere și adâncime 92 mm, geam 24–60 mm. Uw de la 0,70 W/m²K, 47 dB, RC2. Montaj în București și Ilfov.',
      en: 'Rounded six-chamber profile, 92 mm deep, glazing 24–60 mm. Uw from 0.70 W/m²K, 47 dB, RC2. Supplied and fitted in Bucharest.',
      de: 'Rundes 6-Kammer-Profil, 92 mm Bautiefe, Verglasung 24–60 mm. Uw ab 0,70 W/m²K, 47 dB, RC2. Lieferung und Montage in Bukarest.',
      fr: 'Profil arrondi à 6 chambres, 92 mm de profondeur, vitrage 24–60 mm. Uw dès 0,70 W/m²K, 47 dB, RC2. Fourniture et pose à Bucarest.',
      es: 'Perfil redondeado de 6 cámaras, 92 mm de profundidad, vidrio 24–60 mm. Uw desde 0,70 W/m²K, 47 dB, RC2. Montaje en Bucarest.',
      it: 'Profilo arrotondato a 6 camere, 92 mm di profondità, vetro 24–60 mm. Uw da 0,70 W/m²K, 47 dB, RC2. Fornitura e posa a Bucarest.',
    },
  },

  'greenevolution-76-md-round': {
    title: {
      ro: 'Profil PVC Salamander GreenEvolution 76 MD ROUND',
      en: 'Salamander GreenEvolution 76 MD ROUND PVC Profile',
      de: 'Salamander GreenEvolution 76 MD ROUND PVC-Profil',
      fr: 'Salamander GreenEvolution 76 MD ROUND – Profil PVC',
      es: 'Salamander GreenEvolution 76 MD ROUND – Perfil PVC',
      it: 'Salamander GreenEvolution 76 MD ROUND – Profilo PVC',
    },
    desc: {
      ro: 'Profil rotunjit cu 5 camere, adâncime 76 mm și geam până la 48 mm. Uw de la 0,73 W/m²K, 47 dB, RC2. Montaj în București și Ilfov.',
      en: 'Rounded five-chamber profile, 76 mm deep, glazing up to 48 mm. Uw from 0.73 W/m²K, 47 dB, RC2. Supplied and fitted in Bucharest.',
      de: 'Rundes 5-Kammer-Profil, 76 mm Bautiefe, Verglasung bis 48 mm. Uw ab 0,73 W/m²K, 47 dB, RC2. Lieferung und Montage in Bukarest.',
      fr: 'Profil arrondi à 5 chambres, 76 mm de profondeur, vitrage jusqu’à 48 mm. Uw dès 0,73 W/m²K, 47 dB, RC2. Pose à Bucarest.',
      es: 'Perfil redondeado de 5 cámaras, 76 mm de profundidad, vidrio hasta 48 mm. Uw desde 0,73 W/m²K, 47 dB, RC2. Montaje en Bucarest.',
      it: 'Profilo arrotondato a 5 camere, 76 mm di profondità, vetro fino a 48 mm. Uw da 0,73 W/m²K, 47 dB, RC2. Fornitura e posa a Bucarest.',
    },
  },

  'greenevolution-76-md-flex': {
    title: {
      ro: 'Profil PVC Salamander GreenEvolution 76 MD FLEX',
      en: 'Salamander GreenEvolution 76 MD FLEX PVC Profile',
      de: 'Salamander GreenEvolution 76 MD FLEX PVC-Profil',
      fr: 'Salamander GreenEvolution 76 MD FLEX – Profil PVC',
      es: 'Salamander GreenEvolution 76 MD FLEX – Perfil PVC',
      it: 'Salamander GreenEvolution 76 MD FLEX – Profilo PVC',
    },
    desc: {
      ro: 'Profil drept de 76 mm cu 3 garnituri EPDM și garnitură mediană. Uw de la 0,73 W/m²K, 47 dB, RC2. Montat de Neofort BIZ în București.',
      en: 'Straight 76 mm profile with three EPDM seals plus a middle gasket. Uw from 0.73 W/m²K, 47 dB, RC2. Fitted by Neofort BIZ in Bucharest.',
      de: 'Gerades 76-mm-Profil mit drei EPDM-Dichtungen und Mitteldichtung. Uw ab 0,73 W/m²K, 47 dB, RC2. Montiert von Neofort BIZ in Bukarest.',
      fr: 'Profil droit de 76 mm, trois joints EPDM et joint médian. Uw dès 0,73 W/m²K, 47 dB, RC2. Posé par Neofort BIZ à Bucarest.',
      es: 'Perfil recto de 76 mm con tres juntas EPDM y junta central. Uw desde 0,73 W/m²K, 47 dB, RC2. Montado por Neofort BIZ en Bucarest.',
      it: 'Profilo dritto da 76 mm con tre guarnizioni EPDM e guarnizione mediana. Uw da 0,73 W/m²K, 47 dB, RC2. Posato a Bucarest da Neofort BIZ.',
    },
  },

  'greenevolution-76-ad-flex': {
    title: {
      ro: 'Profil PVC Salamander GreenEvolution 76 AD FLEX',
      en: 'Salamander GreenEvolution 76 AD FLEX PVC Profile',
      de: 'Salamander GreenEvolution 76 AD FLEX PVC-Profil',
      fr: 'Salamander GreenEvolution 76 AD FLEX – Profil PVC',
      es: 'Salamander GreenEvolution 76 AD FLEX – Perfil PVC',
      it: 'Salamander GreenEvolution 76 AD FLEX – Profilo PVC',
    },
    desc: {
      ro: 'Profil drept cu 5 camere și adâncime 76 mm, geam până la 48 mm. Uw de la 0,73 W/m²K, 47 dB, RC2. Montaj în București și Ilfov.',
      en: 'Straight five-chamber profile, 76 mm deep, glazing up to 48 mm. Uw from 0.73 W/m²K, 47 dB, RC2. Supplied and fitted in Bucharest.',
      de: 'Gerades 5-Kammer-Profil, 76 mm Bautiefe, Verglasung bis 48 mm. Uw ab 0,73 W/m²K, 47 dB, RC2. Lieferung und Montage in Bukarest.',
      fr: 'Profil droit à 5 chambres, 76 mm de profondeur, vitrage jusqu’à 48 mm. Uw dès 0,73 W/m²K, 47 dB, RC2. Pose à Bucarest.',
      es: 'Perfil recto de 5 cámaras, 76 mm de profundidad, vidrio hasta 48 mm. Uw desde 0,73 W/m²K, 47 dB, RC2. Montaje en Bucarest.',
      it: 'Profilo dritto a 5 camere, 76 mm di profondità, vetro fino a 48 mm. Uw da 0,73 W/m²K, 47 dB, RC2. Fornitura e posa a Bucarest.',
    },
  },

  // ───────────────────────── Aluminiu Alumil ─────────────────────────
  'alumil-s77-supreme': {
    title: {
      ro: 'Sistem Aluminiu Alumil S 77 SUPREME – Uf 0,86 W/m²K',
      en: 'Alumil S 77 SUPREME Aluminium System – Uf 0.86 W/m²K',
      de: 'Alumil S 77 SUPREME Aluminiumsystem – Uf 0,86 W/m²K',
      fr: 'Alumil S 77 SUPREME – Système aluminium Uf 0,86 W/m²K',
      es: 'Alumil S 77 SUPREME – Sistema aluminio Uf 0,86 W/m²K',
      it: 'Alumil S 77 SUPREME – Sistema alluminio Uf 0,86 W/m²K',
    },
    desc: {
      ro: 'Ferestre și uși din aluminiu cu barieră termică poliamidă 40 mm. Uf de la 0,86 W/m²K, 42 dB, RC3 standard. Montaj în București și Ilfov.',
      en: 'Aluminium windows and doors with a 40 mm polyamide thermal break. Uf from 0.86 W/m²K, 42 dB, RC3 as standard. Fitted in Bucharest.',
      de: 'Aluminiumfenster und -türen mit 40 mm Polyamid-Wärmedämmung. Uf ab 0,86 W/m²K, 42 dB, serienmäßig RC3. Montage in Bukarest und Ilfov.',
      fr: 'Fenêtres et portes aluminium à rupture thermique polyamide 40 mm. Uf dès 0,86 W/m²K, 42 dB, RC3 de série. Pose à Bucarest et Ilfov.',
      es: 'Ventanas y puertas de aluminio con rotura de puente térmico de 40 mm. Uf desde 0,86 W/m²K, 42 dB, RC3 de serie. Montaje en Bucarest.',
      it: 'Finestre e porte in alluminio con taglio termico in poliammide 40 mm. Uf da 0,86 W/m²K, 42 dB, RC3 di serie. Posa a Bucarest e Ilfov.',
    },
  },

  'alumil-s67-smartia': {
    title: {
      ro: 'Sistem Aluminiu Alumil S 67 SMARTIA – 45 dB, RC3',
      en: 'Alumil S 67 SMARTIA Aluminium System – 45 dB, RC3',
      de: 'Alumil S 67 SMARTIA Aluminiumsystem – 45 dB, RC3',
      fr: 'Alumil S 67 SMARTIA – Système aluminium 45 dB, RC3',
      es: 'Alumil S 67 SMARTIA – Sistema aluminio 45 dB, RC3',
      it: 'Alumil S 67 SMARTIA – Sistema alluminio 45 dB, RC3',
    },
    desc: {
      ro: 'Aluminiu cu barieră termică 30 mm și izolare fonică până la 45 dB. Uf de la 1,5 W/m²K, RC3 opțional. Montaj în București și Ilfov.',
      en: 'Aluminium with a 30 mm thermal break and sound insulation up to 45 dB. Uf from 1.5 W/m²K, optional RC3. Fitted in Bucharest and Ilfov.',
      de: 'Aluminium mit 30 mm Wärmedämmung und Schalldämmung bis 45 dB. Uf ab 1,5 W/m²K, RC3 optional. Montage in Bukarest und Ilfov.',
      fr: 'Aluminium à rupture thermique 30 mm, isolation phonique jusqu’à 45 dB. Uf dès 1,5 W/m²K, RC3 en option. Pose à Bucarest et Ilfov.',
      es: 'Aluminio con rotura térmica de 30 mm y aislamiento acústico hasta 45 dB. Uf desde 1,5 W/m²K, RC3 opcional. Montaje en Bucarest.',
      it: 'Alluminio con taglio termico 30 mm e isolamento acustico fino a 45 dB. Uf da 1,5 W/m²K, RC3 opzionale. Posa a Bucarest e Ilfov.',
    },
  },

  'alumil-s700-supreme': {
    title: {
      ro: 'Liftant Glisant Alumil S 700 SUPREME – foi 500 kg',
      en: 'Alumil S 700 SUPREME Lift & Slide – Panels up to 500 kg',
      de: 'Alumil S 700 SUPREME Hebeschiebetür – Flügel bis 500 kg',
      fr: 'Alumil S 700 SUPREME – Coulissant levant 500 kg',
      es: 'Alumil S 700 SUPREME – Corredera elevable 500 kg',
      it: 'Alumil S 700 SUPREME – Scorrevole alzante 500 kg',
    },
    desc: {
      ro: 'Sistem liftant glisant cu barieră Kooltherm, foi până la 500 kg și geam de 50 mm. Uf de la 1,1 W/m²K, 41 dB, RC2. Montaj în București.',
      en: 'Lift-and-slide system with a Kooltherm break, panels up to 500 kg and 50 mm glazing. Uf from 1.1 W/m²K, 41 dB, RC2. Fitted in Bucharest.',
      de: 'Hebeschiebesystem mit Kooltherm-Dämmung, Flügel bis 500 kg, 50 mm Verglasung. Uf ab 1,1 W/m²K, 41 dB, RC2. Montage in Bukarest.',
      fr: 'Coulissant levant à barrière Kooltherm, panneaux jusqu’à 500 kg, vitrage 50 mm. Uf dès 1,1 W/m²K, 41 dB, RC2. Pose à Bucarest.',
      es: 'Corredera elevable con barrera Kooltherm, hojas hasta 500 kg y vidrio de 50 mm. Uf desde 1,1 W/m²K, 41 dB, RC2. Montaje en Bucarest.',
      it: 'Scorrevole alzante con barriera Kooltherm, ante fino a 500 kg e vetro da 50 mm. Uf da 1,1 W/m²K, 41 dB, RC2. Posa a Bucarest.',
    },
  },

  'alumil-s350-smartia': {
    title: {
      ro: 'Liftant Glisant Alumil S 350 SMARTIA – ușă glisantă',
      en: 'Alumil S 350 SMARTIA Lift & Slide Sliding Door',
      de: 'Alumil S 350 SMARTIA Hebeschiebetür – Schiebetür',
      fr: 'Alumil S 350 SMARTIA – Coulissant levant accessible',
      es: 'Alumil S 350 SMARTIA – Corredera elevable accesible',
      it: 'Alumil S 350 SMARTIA – Scorrevole alzante accessibile',
    },
    desc: {
      ro: 'Ușă glisantă din aluminiu cu barieră termică 28 mm și perii tri-fin. Uf de la 2,9 W/m²K, 38 dB, RC2. Montaj în București și Ilfov.',
      en: 'Aluminium sliding door with a 28 mm thermal break and tri-fin brushes. Uf from 2.9 W/m²K, 38 dB, RC2. Fitted in Bucharest and Ilfov.',
      de: 'Aluminium-Schiebetür mit 28 mm Wärmedämmung und Tri-Fin-Bürsten. Uf ab 2,9 W/m²K, 38 dB, RC2. Montage in Bukarest und Ilfov.',
      fr: 'Porte coulissante aluminium à rupture thermique 28 mm et brosses tri-fin. Uf dès 2,9 W/m²K, 38 dB, RC2. Pose à Bucarest et Ilfov.',
      es: 'Puerta corredera de aluminio con rotura térmica de 28 mm y cepillos tri-fin. Uf desde 2,9 W/m²K, 38 dB, RC2. Montaje en Bucarest.',
      it: 'Porta scorrevole in alluminio con taglio termico 28 mm e spazzole tri-fin. Uf da 2,9 W/m²K, 38 dB, RC2. Posa a Bucarest e Ilfov.',
    },
  },

  'alumil-sf85-supreme': {
    title: {
      ro: 'Sistem Armonic Alumil SF 85 SUPREME – uși pliante',
      en: 'Alumil SF 85 SUPREME Folding Doors – Uf 1.0 W/m²K',
      de: 'Alumil SF 85 SUPREME Falttüren – Uf 1,0 W/m²K',
      fr: 'Alumil SF 85 SUPREME – Portes pliantes Uf 1,0 W/m²K',
      es: 'Alumil SF 85 SUPREME – Puertas plegables Uf 1,0',
      it: 'Alumil SF 85 SUPREME – Porte pieghevoli Uf 1,0',
    },
    desc: {
      ro: 'Uși pliante din aluminiu, 2–8 foi, lățime până la 7000 mm, barieră Kooltherm 40 mm. Uf de la 1,0 W/m²K, PAS24. Montaj în București.',
      en: 'Aluminium folding doors, 2–8 panels, up to 7000 mm wide, 40 mm Kooltherm break. Uf from 1.0 W/m²K, PAS24. Fitted in Bucharest.',
      de: 'Aluminium-Falttüren, 2–8 Flügel, bis 7000 mm Breite, 40 mm Kooltherm-Dämmung. Uf ab 1,0 W/m²K, PAS24. Montage in Bukarest.',
      fr: 'Portes pliantes aluminium, 2 à 8 vantaux, jusqu’à 7000 mm, barrière Kooltherm 40 mm. Uf dès 1,0 W/m²K, PAS24. Pose à Bucarest.',
      es: 'Puertas plegables de aluminio, 2–8 hojas, hasta 7000 mm, barrera Kooltherm 40 mm. Uf desde 1,0 W/m²K, PAS24. Montaje en Bucarest.',
      it: 'Porte pieghevoli in alluminio, 2–8 ante, fino a 7000 mm, barriera Kooltherm 40 mm. Uf da 1,0 W/m²K, PAS24. Posa a Bucarest.',
    },
  },

  'alumil-m19800-smartia': {
    title: {
      ro: 'Sistem Armonic Alumil M 19800 SMARTIA – uși pliante',
      en: 'Alumil M 19800 SMARTIA Folding Doors for Terraces',
      de: 'Alumil M 19800 SMARTIA Falttüren für Terrassen',
      fr: 'Alumil M 19800 SMARTIA – Portes pliantes terrasse',
      es: 'Alumil M 19800 SMARTIA – Puertas plegables terraza',
      it: 'Alumil M 19800 SMARTIA – Porte pieghevoli terrazza',
    },
    desc: {
      ro: 'Uși pliante pentru terase, 2–6 foi, lățime până la 5000 mm, barieră termică 18 mm. Uf de la 1,9 W/m²K, PAS24. Montaj în București.',
      en: 'Folding doors for terraces, 2–6 panels, up to 5000 mm wide, 18 mm thermal break. Uf from 1.9 W/m²K, PAS24. Fitted in Bucharest.',
      de: 'Falttüren für Terrassen, 2–6 Flügel, bis 5000 mm Breite, 18 mm Wärmedämmung. Uf ab 1,9 W/m²K, PAS24. Montage in Bukarest.',
      fr: 'Portes pliantes pour terrasses, 2 à 6 vantaux, jusqu’à 5000 mm, rupture 18 mm. Uf dès 1,9 W/m²K, PAS24. Pose à Bucarest.',
      es: 'Puertas plegables para terrazas, 2–6 hojas, hasta 5000 mm, rotura térmica 18 mm. Uf desde 1,9 W/m²K, PAS24. Montaje en Bucarest.',
      it: 'Porte pieghevoli per terrazze, 2–6 ante, fino a 5000 mm, taglio termico 18 mm. Uf da 1,9 W/m²K, PAS24. Posa a Bucarest.',
    },
  },

  // ───────────────────────── Accesorii ─────────────────────────
  'toc-de-renovare': {
    title: {
      ro: 'Toc de Renovare PVC – înlocuire fără demolare',
      en: 'PVC Renovation Frame – Replace Windows, No Demolition',
      de: 'PVC Renovierungsrahmen – Fenstertausch ohne Abriss',
      fr: 'Cadre de rénovation PVC – pose sans démolition',
      es: 'Marco de renovación PVC – sin obra ni demolición',
      it: 'Telaio di ristrutturazione PVC – senza demolizione',
    },
    desc: {
      ro: 'Se montează peste tocul vechi, fără spargerea tencuielii, și scurtează montajul cu 50%. Profil 76 mm, Uw 0,73 W/m²K, până la 47 dB.',
      en: 'Fits over the existing frame with no plaster damage and cuts installation time by 50%. 76 mm profile, Uw 0.73 W/m²K, up to 47 dB.',
      de: 'Wird über den alten Rahmen montiert, ohne Putzschäden, und halbiert die Montagezeit. 76-mm-Profil, Uw 0,73 W/m²K, bis 47 dB.',
      fr: 'Se pose sur le cadre existant sans casser l’enduit et réduit la pose de 50%. Profil 76 mm, Uw 0,73 W/m²K, jusqu’à 47 dB.',
      es: 'Se monta sobre el marco antiguo sin romper el revoque y reduce la instalación un 50%. Perfil 76 mm, Uw 0,73 W/m²K, hasta 47 dB.',
      it: 'Si monta sul telaio esistente senza rompere l’intonaco e dimezza i tempi di posa. Profilo 76 mm, Uw 0,73 W/m²K, fino a 47 dB.',
    },
  },

  'pervazuri-interior-pvc-exterior-al': {
    title: {
      ro: 'Pervazuri PVC Interior și Glafuri Aluminiu Exterior',
      en: 'Interior PVC Windowsills & Exterior Aluminium Sills',
      de: 'PVC-Innenfensterbänke & Aluminium-Außenfensterbänke',
      fr: 'Appuis PVC intérieurs et aluminium extérieurs',
      es: 'Alféizares PVC interiores y aluminio exteriores',
      it: 'Davanzali PVC interni e alluminio esterni',
    },
    desc: {
      ro: 'Pervaz PVC Clasa A de 20–400 mm și glaf aluminiu anodizat cu garnitură EPDM. Rezistent UV, durabilitate peste 25 ani, cuplare 90°–180°.',
      en: 'Class A PVC sill from 20 to 400 mm plus anodised aluminium sill with EPDM seal. UV resistant, over 25 years of service, 90°–180° joints.',
      de: 'PVC-Fensterbank Klasse A von 20–400 mm und eloxierte Aluminiumbank mit EPDM-Dichtung. UV-beständig, über 25 Jahre, Eckverbindung 90°–180°.',
      fr: 'Appui PVC classe A de 20 à 400 mm et appui aluminium anodisé avec joint EPDM. Résistant aux UV, plus de 25 ans, raccords 90°–180°.',
      es: 'Alféizar PVC clase A de 20 a 400 mm y vierteaguas de aluminio anodizado con junta EPDM. Resistente a UV, más de 25 años, uniones 90°–180°.',
      it: 'Davanzale PVC classe A da 20 a 400 mm e soglia in alluminio anodizzato con guarnizione EPDM. Resistente ai UV, oltre 25 anni, giunti 90°–180°.',
    },
  },

  'grila-higroreglabila-aereco': {
    title: {
      ro: 'Grilă Higroreglabilă Aereco – 5–35 m³/h, 33 dB',
      en: 'Aereco Hygro-adjustable Grille – 5–35 m³/h, 33 dB',
      de: 'Aereco Hygro-Lüftungsgitter – 5–35 m³/h, 33 dB',
      fr: 'Grille hygroréglable Aereco – 5–35 m³/h, 33 dB',
      es: 'Rejilla higrorregulable Aereco – 5–35 m³/h, 33 dB',
      it: 'Griglia igroregolabile Aereco – 5–35 m³/h, 33 dB',
    },
    desc: {
      ro: 'Ventilație pasivă care reglează automat debitul după umiditate, 5–35 m³/h, consum 0 W și atenuare 33 dB. Se integrează în profil PVC sau aluminiu.',
      en: 'Passive ventilation that adjusts airflow to humidity on its own, 5–35 m³/h, zero power draw, 33 dB attenuation. Integrates into PVC or aluminium.',
      de: 'Passive Lüftung, die den Luftstrom selbsttätig nach Feuchte regelt: 5–35 m³/h, 0 W Verbrauch, 33 dB Dämmung. Integriert in PVC oder Aluminium.',
      fr: 'Ventilation passive qui règle seule le débit selon l’humidité : 5–35 m³/h, 0 W, atténuation 33 dB. S’intègre au profil PVC ou aluminium.',
      es: 'Ventilación pasiva que regula sola el caudal según la humedad: 5–35 m³/h, 0 W de consumo, 33 dB. Se integra en perfil de PVC o aluminio.',
      it: 'Ventilazione passiva che regola da sola la portata in base all’umidità: 5–35 m³/h, 0 W, 33 dB. Si integra nel profilo in PVC o alluminio.',
    },
  },

  'automatizari-somfy': {
    title: {
      ro: 'Automatizări Somfy – motoare rulouri și pergole',
      en: 'Somfy Automation – Shutter and Pergola Motors',
      de: 'Somfy Automatisierung – Rollladen- und Pergolamotoren',
      fr: 'Automatisation Somfy – moteurs volets et pergolas',
      es: 'Automatización Somfy – motores persianas y pérgolas',
      it: 'Automazione Somfy – motori tapparelle e pergole',
    },
    desc: {
      ro: 'Motoare Oximo io și RS100 io, telecomenzi Situo și hub TaHoma, compatibile Alexa, Google și HomeKit. Garanție 5 ani, montaj în București și Ilfov.',
      en: 'Oximo io and RS100 io motors, Situo remotes and the TaHoma hub, working with Alexa, Google and HomeKit. Five-year warranty, fitted in Bucharest.',
      de: 'Motoren Oximo io und RS100 io, Situo-Fernbedienungen und TaHoma-Hub für Alexa, Google und HomeKit. 5 Jahre Garantie, Montage in Bukarest.',
      fr: 'Moteurs Oximo io et RS100 io, télécommandes Situo et box TaHoma, compatibles Alexa, Google et HomeKit. Garantie 5 ans, pose à Bucarest.',
      es: 'Motores Oximo io y RS100 io, mandos Situo y hub TaHoma, compatibles con Alexa, Google y HomeKit. Garantía de 5 años, montaje en Bucarest.',
      it: 'Motori Oximo io e RS100 io, telecomandi Situo e hub TaHoma, compatibili con Alexa, Google e HomeKit. Garanzia 5 anni, posa a Bucarest.',
    },
  },

  // ───────────────────────── Sisteme nZEB ─────────────────────────
  'precadre-blaugelb-triotherm': {
    title: {
      ro: 'Precadre Blaugelb Triotherm+ – montaj RAL certificat',
      en: 'Blaugelb Triotherm+ Precasings – RAL Certified Fitting',
      de: 'Blaugelb Triotherm+ Vorfenster – RAL-zertifiziert',
      fr: 'Précadres Blaugelb Triotherm+ – pose certifiée RAL',
      es: 'Premarcos Blaugelb Triotherm+ – montaje RAL',
      it: 'Pre-telai Blaugelb Triotherm+ – montaggio RAL',
    },
    desc: {
      ro: 'Precadru din XPS cu 3 zone de izolare, λ 0,040 W/m²K, care reduce puntea termică de montaj cu peste 90%. Obligatoriu pentru nZEB și Passive House.',
      en: 'XPS precasing with three insulation zones, λ 0.040 W/m²K, cutting the installation thermal bridge by over 90%. Required for nZEB and Passive House.',
      de: 'XPS-Vorfenster mit drei Dämmzonen, λ 0,040 W/m²K, senkt die Montage-Wärmebrücke um über 90%. Pflicht für nZEB und Passivhaus.',
      fr: 'Précadre XPS à trois zones d’isolation, λ 0,040 W/m²K, réduisant le pont thermique de pose de plus de 90%. Requis en nZEB et maison passive.',
      es: 'Premarco de XPS con tres zonas de aislamiento, λ 0,040 W/m²K, reduce el puente térmico de montaje más del 90%. Obligatorio para nZEB y Passivhaus.',
      it: 'Pre-telaio in XPS con tre zone di isolamento, λ 0,040 W/m²K, riduce il ponte termico di posa di oltre il 90%. Richiesto per nZEB e Passive House.',
    },
  },

  'banda-precomprimata-butil': {
    title: {
      ro: 'Bandă Precomprimată Butilică – etanșare exterioară',
      en: 'Pre-compressed Butyl Tape – Exterior RAL Sealing',
      de: 'Vorkomprimiertes Butylband – Außenabdichtung RAL',
      fr: 'Ruban précomprimé butylique – étanchéité extérieure',
      es: 'Cinta precomprimida butílica – sellado exterior',
      it: 'Nastro precompresso butilico – tenuta esterna',
    },
    desc: {
      ro: 'Stratul exterior al sistemului RAL: respinge apa (clasa W2–W3) dar lasă vaporii să iasă, Sd sub 0,1 m. Lățimi 10–60 mm, durabilitate peste 25 ani.',
      en: 'The outer layer of the RAL system: sheds water at class W2–W3 yet lets vapour escape, Sd below 0.1 m. Widths 10–60 mm, over 25 years of service.',
      de: 'Die Außenschicht des RAL-Systems: wasserabweisend in Klasse W2–W3, dampfdurchlässig mit Sd unter 0,1 m. Breiten 10–60 mm, über 25 Jahre haltbar.',
      fr: 'Couche extérieure du système RAL : repousse l’eau en classe W2–W3 tout en laissant sortir la vapeur, Sd sous 0,1 m. Largeurs 10–60 mm, 25 ans.',
      es: 'Capa exterior del sistema RAL: repele el agua en clase W2–W3 y deja salir el vapor, Sd por debajo de 0,1 m. Anchos 10–60 mm, más de 25 años.',
      it: 'Strato esterno del sistema RAL: respinge l’acqua in classe W2–W3 lasciando uscire il vapore, Sd sotto 0,1 m. Larghezze 10–60 mm, oltre 25 anni.',
    },
  },

  'banda-etansare-antivapori': {
    title: {
      ro: 'Bandă Antivapori Interior – barieră Sd > 10 m',
      en: 'Interior Vapour Barrier Tape – Sd > 10 m',
      de: 'Innen-Dampfsperrband – Dampfsperre Sd > 10 m',
      fr: 'Ruban pare-vapeur intérieur – Sd > 10 m',
      es: 'Cinta barrera de vapor interior – Sd > 10 m',
      it: 'Nastro barriera al vapore interno – Sd > 10 m',
    },
    desc: {
      ro: 'Stratul interior al sistemului RAL, din PE laminat cu aluminiu: barieră reală de vapori, Sd peste 10 m. Autoadeziv, lățimi 50, 75 și 100 mm.',
      en: 'The inner layer of the RAL system, PE laminated with aluminium: a true vapour barrier at Sd over 10 m. Self-adhesive, widths 50, 75 and 100 mm.',
      de: 'Die Innenschicht des RAL-Systems aus PE mit Aluminium: echte Dampfsperre mit Sd über 10 m. Selbstklebend, Breiten 50, 75 und 100 mm.',
      fr: 'Couche intérieure du système RAL, PE laminé aluminium : véritable pare-vapeur, Sd supérieur à 10 m. Autoadhésif, largeurs 50, 75 et 100 mm.',
      es: 'Capa interior del sistema RAL, PE laminado con aluminio: barrera de vapor real, Sd superior a 10 m. Autoadhesiva, anchos 50, 75 y 100 mm.',
      it: 'Strato interno del sistema RAL, PE laminato con alluminio: vera barriera al vapore, Sd oltre 10 m. Autoadesivo, larghezze 50, 75 e 100 mm.',
    },
  },

  'bagheta-warm-edge-thermo': {
    title: {
      ro: 'Baghetă Warm Edge Thermo – λ 0,035 W/mK',
      en: 'Warm Edge Thermo Spacer – λ 0.035 W/mK',
      de: 'Warm Edge Thermo Abstandhalter – λ 0,035 W/mK',
      fr: 'Espaceur Warm Edge Thermo – λ 0,035 W/mK',
      es: 'Separador Warm Edge Thermo – λ 0,035 W/mK',
      it: 'Distanziale Warm Edge Thermo – λ 0,035 W/mK',
    },
    desc: {
      ro: 'Distanțier termic de geam cu λ 0,035 W/mK față de 160 la aluminiu: marginea geamului stă cu 4–6°C mai cald. Certificat Passive House, EN 1279.',
      en: 'Glass spacer at λ 0.035 W/mK against 160 for aluminium, keeping the glass edge 4–6°C warmer. Passive House certified, made to EN 1279.',
      de: 'Glas-Abstandhalter mit λ 0,035 W/mK statt 160 bei Aluminium: Glasrand bleibt 4–6°C wärmer. Passivhaus-zertifiziert, nach EN 1279.',
      fr: 'Espaceur de vitrage à λ 0,035 W/mK contre 160 pour l’aluminium : bord du vitrage 4 à 6°C plus chaud. Certifié maison passive, EN 1279.',
      es: 'Separador de vidrio con λ 0,035 W/mK frente a 160 del aluminio: el borde queda 4–6°C más cálido. Certificado Passivhaus, según EN 1279.',
      it: 'Distanziale per vetro con λ 0,035 W/mK contro 160 dell’alluminio: il bordo resta 4–6°C più caldo. Certificato Passive House, EN 1279.',
    },
  },

  'geamuri-termopan-saint-gobain': {
    title: {
      ro: 'Geam Termopan Saint-Gobain SGG – Ug de la 0,5 W/m²K',
      en: 'Saint-Gobain SGG Thermal Glass – Ug from 0.5 W/m²K',
      de: 'Saint-Gobain SGG Isolierglas – Ug ab 0,5 W/m²K',
      fr: 'Vitrage Saint-Gobain SGG – Ug dès 0,5 W/m²K',
      es: 'Vidrio Saint-Gobain SGG – Ug desde 0,5 W/m²K',
      it: 'Vetro Saint-Gobain SGG – Ug da 0,5 W/m²K',
    },
    desc: {
      ro: 'Planitherm, Planistar SUN și Stadip SILENCE: Ug de la 0,5 W/m²K în triplu, control solar g 0,27–0,60 și fonoizolare Rw 44–52 dB.',
      en: 'Planitherm, Planistar SUN and Stadip SILENCE: Ug from 0.5 W/m²K in triple glazing, solar control g 0.27–0.60 and Rw 44–52 dB acoustics.',
      de: 'Planitherm, Planistar SUN und Stadip SILENCE: Ug ab 0,5 W/m²K in Dreifachverglasung, Sonnenschutz g 0,27–0,60, Schalldämmung Rw 44–52 dB.',
      fr: 'Planitherm, Planistar SUN et Stadip SILENCE : Ug dès 0,5 W/m²K en triple, contrôle solaire g 0,27–0,60 et acoustique Rw 44–52 dB.',
      es: 'Planitherm, Planistar SUN y Stadip SILENCE: Ug desde 0,5 W/m²K en triple, control solar g 0,27–0,60 y acústica Rw 44–52 dB.',
      it: 'Planitherm, Planistar SUN e Stadip SILENCE: Ug da 0,5 W/m²K nel triplo, controllo solare g 0,27–0,60 e acustica Rw 44–52 dB.',
    },
  },

  // ───────────────────────── Umbrire ─────────────────────────
  'rulouri-exterioare-aluminiu': {
    title: {
      ro: 'Rulouri Exterioare Aluminiu – 70% aport solar redus',
      en: 'Aluminium Roller Shutters – Cut Solar Gain by 70%',
      de: 'Aluminium-Außenrollläden – bis 70% weniger Hitze',
      fr: 'Volets roulants aluminium – jusqu’à 70% de solaire',
      es: 'Persianas exteriores aluminio – 70% menos calor',
      it: 'Tapparelle esterne alluminio – 70% calore in meno',
    },
    desc: {
      ro: 'Lamele de aluminiu izolat, până la 4500 mm lățime, acționare Somfy sau manuală. Reduc aportul solar cu 70% și ating RC3. Montaj în București.',
      en: 'Insulated aluminium slats up to 4500 mm wide, Somfy or manual operation. They cut solar gain by 70% and reach RC3. Fitted in Bucharest and Ilfov.',
      de: 'Gedämmte Aluminiumlamellen bis 4500 mm Breite, Somfy-Antrieb oder manuell. Senken den Solareintrag um 70% und erreichen RC3. Montage in Bukarest.',
      fr: 'Lames aluminium isolées jusqu’à 4500 mm, motorisation Somfy ou manuelle. Réduisent l’apport solaire de 70% et atteignent RC3. Pose à Bucarest.',
      es: 'Lamas de aluminio aislado de hasta 4500 mm, accionamiento Somfy o manual. Reducen el aporte solar un 70% y alcanzan RC3. Montaje en Bucarest.',
      it: 'Lamelle in alluminio coibentato fino a 4500 mm, motore Somfy o manuale. Riducono l’apporto solare del 70% e raggiungono RC3. Posa a Bucarest.',
    },
  },

  'jaluzele-venetiene-raffstore': {
    title: {
      ro: 'Jaluzele Raffstore Exterioare – control solar 0°–90°',
      en: 'Raffstore Exterior Venetian Blinds – 0°–90° Control',
      de: 'Raffstore Außenjalousien – Sonnenschutz 0°–90°',
      fr: 'Stores vénitiens Raffstore – contrôle 0°–90°',
      es: 'Persianas venecianas Raffstore – control 0°–90°',
      it: 'Veneziane esterne Raffstore – controllo 0°–90°',
    },
    desc: {
      ro: 'Lamele de 80 mm orientabile 0°–90°, până la 5000 mm lățime, peste 200 culori RAL. Reduc aportul solar cu 85%, clasa de vânt 5, KNX și Somfy.',
      en: 'Eighty-millimetre slats tilting 0°–90°, up to 5000 mm wide, over 200 RAL colours. They cut solar gain by 85%, wind class 5, KNX and Somfy ready.',
      de: 'Achtzig-Millimeter-Lamellen, 0°–90° schwenkbar, bis 5000 mm breit, über 200 RAL-Farben. 85% weniger Solareintrag, Windklasse 5, KNX und Somfy.',
      fr: 'Lames de 80 mm orientables de 0° à 90°, jusqu’à 5000 mm, plus de 200 teintes RAL. Apport solaire réduit de 85%, classe de vent 5, KNX et Somfy.',
      es: 'Lamas de 80 mm orientables de 0° a 90°, hasta 5000 mm, más de 200 colores RAL. Reducen el aporte solar un 85%, clase de viento 5, KNX y Somfy.',
      it: 'Lamelle da 80 mm orientabili 0°–90°, fino a 5000 mm, oltre 200 colori RAL. Riducono l’apporto solare dell’85%, classe vento 5, KNX e Somfy.',
    },
  },

  'zipscreen': {
    title: {
      ro: 'Zipscreen – rulou textil exterior, blochează 98% UV',
      en: 'Zipscreen Exterior ZIP Blind – Blocks 98% of UV',
      de: 'Zipscreen Außenrollo mit ZIP – blockt 98% UV',
      fr: 'Zipscreen – store extérieur ZIP, 98% des UV filtrés',
      es: 'Zipscreen – toldo exterior ZIP, bloquea 98% UV',
      it: 'Zipscreen – tenda esterna ZIP, blocca il 98% UV',
    },
    desc: {
      ro: 'Ghidaj cu fermoar ZIP, până la 16 m² pe unitate, rezistent la vânt clasa 6 (88 km/h). Blochează 98% din UV și scade temperatura cu 15–20°C.',
      en: 'ZIP track guidance, up to 16 m² per unit, wind class 6 at 88 km/h. It blocks 98% of UV and brings the temperature down by 15–20°C.',
      de: 'ZIP-Führung, bis 16 m² je Einheit, Windklasse 6 bei 88 km/h. Blockt 98% der UV-Strahlung und senkt die Temperatur um 15–20°C.',
      fr: 'Guidage à glissière ZIP, jusqu’à 16 m² par unité, classe de vent 6 à 88 km/h. Filtre 98% des UV et abaisse la température de 15 à 20°C.',
      es: 'Guía con cremallera ZIP, hasta 16 m² por unidad, clase de viento 6 a 88 km/h. Bloquea el 98% de los UV y baja la temperatura 15–20°C.',
      it: 'Guida con cerniera ZIP, fino a 16 m² per unità, classe vento 6 a 88 km/h. Blocca il 98% degli UV e abbassa la temperatura di 15–20°C.',
    },
  },

  'pergole-automate-somfy': {
    title: {
      ro: 'Pergole Automate Somfy – motor RGS io, senzor vânt',
      en: 'Somfy Automatic Pergolas – RGS io Motor, Wind Sensor',
      de: 'Somfy Pergolen automatisch – RGS io Motor, Windsensor',
      fr: 'Pergolas automatiques Somfy – moteur RGS io',
      es: 'Pérgolas automáticas Somfy – motor RGS io',
      it: 'Pergole automatiche Somfy – motore RGS io',
    },
    desc: {
      ro: 'Motor Pergola RGS io, deschidere până la 5 m și retragere automată peste 50 km/h. Pânză UPF 50+, sub pergolă e cu 6–10°C mai răcoare vara.',
      en: 'Pergola RGS io motor, up to 5 m of opening and automatic retraction above 50 km/h. UPF 50+ fabric keeps it 6–10°C cooler underneath in summer.',
      de: 'Pergola-RGS-io-Motor, bis 5 m Öffnung und automatischer Einzug ab 50 km/h. UPF-50+-Tuch, darunter im Sommer 6–10°C kühler.',
      fr: 'Moteur Pergola RGS io, ouverture jusqu’à 5 m et repli automatique au-delà de 50 km/h. Toile UPF 50+, 6 à 10°C de moins dessous en été.',
      es: 'Motor Pergola RGS io, apertura de hasta 5 m y repliegue automático por encima de 50 km/h. Lona UPF 50+, 6–10°C menos debajo en verano.',
      it: 'Motore Pergola RGS io, apertura fino a 5 m e rientro automatico oltre i 50 km/h. Telo UPF 50+, sotto si sta 6–10°C più freschi d’estate.',
    },
  },

};
