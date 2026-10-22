import { notFound } from 'next/navigation';
import { Link } from '../../../../i18n/navigation';
import FaqAccordion from '../../../../components/FaqAccordion';

import { BASE, LOCALES } from '../../../../lib/constants.js';
import { PRODUCT_META, PRODUCT_BRAND } from '../../../../data/productMeta.js';
import { PRODUCT_FAQ } from '../../../../data/productFaq.js';
const ACC_SEG = {ro:'accesorii',en:'accessories',de:'zubehoer',fr:'accessoires',es:'accesorios',it:'accessori'};

const SLUG_MAP = {
  'toc-de-renovare': {
    ro:'toc-de-renovare-pvc',                    en:'pvc-renovation-frame',
    de:'pvc-renovierungsrahmen',                  fr:'cadre-renovation-pvc',
    es:'marco-renovacion-pvc',                    it:'telaio-ristrutturazione-pvc',
  },
  'pervazuri-interior-pvc-exterior-al': {
    ro:'pervazuri-interior-pvc-glafuri-exterior-aluminiu', en:'interior-pvc-windowsills-exterior-aluminium-sills',
    de:'innenfensterbaenke-pvc-aussenfensterbaenke-aluminium', fr:'appuis-fenetre-interieurs-pvc-exterieurs-aluminium',
    es:'alfeizares-interiores-pvc-exteriores-aluminio', it:'davanzali-interni-pvc-esterni-alluminio',
  },
  'grila-higroreglabila-aereco': {
    ro:'grila-higroreglabila-aereco-ventilatie',  en:'aereco-hygro-adjustable-ventilation-grille',
    de:'aereco-hygroregelbare-lueftungsgitter',    fr:'grille-hygroreglable-aereco-ventilation',
    es:'rejilla-higrorreglable-aereco-ventilacion', it:'griglia-igroregolab-aereco-ventilazione',
  },
  'automatizari-somfy': {
    ro:'automatizari-somfy-rulouri-pergole',          en:'somfy-automation-shutters-pergolas',
    de:'somfy-automatisierung-rolllaeden-pergolen',    fr:'automatisation-somfy-volets-pergolas',
    es:'automatizacion-somfy-persianas-pergolas',      it:'automazione-somfy-tapparelle-pergole',
  },
};

const REVERSE = {};
for (const [c, slugs] of Object.entries(SLUG_MAP))
  for (const s of Object.values(slugs)) REVERSE[s] = c;

const PRODUCTS = {

  'toc-de-renovare': {
    img: '/accessories/toc-renovare.avif',
    color: '#162d47',
    category: { ro:'Montaj & Renovare', en:'Installation & Renovation', de:'Montage & Renovierung', fr:'Pose & Rénovation', es:'Montaje & Renovación', it:'Posa & Ristrutturazione' },
    serie: { ro:'Toc Renovare', en:'Renovation Frame', de:'Renovierungsrahmen', fr:'Cadre Rénovation', es:'Marco Renovación', it:'Telaio Ristrutturazione' },
    breadcrumb_parent_href: '/accesorii',
    breadcrumb_parent: { ro:'Accesorii', en:'Accessories', de:'Zubehör', fr:'Accessoires', es:'Accesorios', it:'Accessori' },
    name: {
      ro:'Toc de Renovare PVC – Înlocuire Fereastră fără Reparații la Interior',
      en:'PVC Renovation Frame – Window Replacement Without Interior Repairs',
      de:'PVC-Renovierungsrahmen – Fenstertausch ohne Nacharbeiten innen',
      fr:'Cadre de Rénovation PVC – Remplacement de Fenêtre sans Reprise Intérieure',
      es:'Marco de Renovación PVC – Sustitución de Ventana sin Reparaciones Interiores',
      it:'Telaio di Ristrutturazione PVC – Sostituzione Finestra senza Ripristini Interni',
    },
    tagline: {
      ro:'Fereastra veche se scoate complet, cu toc cu tot. Tocul nou se montează la fața interioară a peretelui, iar aripa lui acoperă îmbinarea cu zidul — fără tencuială și zugrăveală de refăcut în casă. Spuma și glaful se fac din exterior.',
      en:'The old window comes out completely, frame included. The new frame is fixed flush with the inner face of the wall and its flange covers the joint — no plaster or paintwork to redo indoors. Foam and the window reveal are done from outside.',
      de:'Das alte Fenster wird samt Rahmen vollständig ausgebaut. Der neue Rahmen sitzt bündig an der Innenseite der Wand, sein Flügel deckt die Fuge ab — innen muss weder verputzt noch gestrichen werden. Schaum und Laibung werden von außen ausgeführt.',
      fr:'L’ancienne fenêtre est entièrement déposée, dormant compris. Le nouveau dormant est posé au nu intérieur du mur et son aile recouvre le joint — ni enduit ni peinture à reprendre à l’intérieur. La mousse et le tableau se font par l’extérieur.',
      es:'La ventana antigua se retira por completo, marco incluido. El marco nuevo se fija a haces con la cara interior del muro y su ala cubre la junta: no hay revoque ni pintura que rehacer dentro. La espuma y la mocheta se hacen desde fuera.',
      it:'La vecchia finestra si rimuove completamente, telaio compreso. Il nuovo telaio si posa a filo della parete interna e la sua aletta copre il giunto: niente intonaco né tinteggiatura da rifare in casa. Schiuma e spalletta si eseguono dall’esterno.',
    },
    specs: {
      ro:[['Material','PVC Clasa A'],['Aripă renovare','35 mm / 60 mm'],['Adâncime profil','76 mm'],['Transfer termic Uw','0,73 W/m²K'],['Geam compatibil','până la 48 mm'],['Izolare fonică','până la 47 dB'],['Antiefracție','până la RC3'],['Culori','Alb, gri antracit, bicolor'],['Tocul vechi','Se demontează complet'],['Montaj','În golul zidăriei, la fața interioară a peretelui'],],
      en:[['Material','Class A PVC'],['Renovation flange','35 mm / 60 mm'],['Profile depth','76 mm'],['Thermal transfer Uw','0.73 W/m²K'],['Compatible glass','up to 48 mm'],['Sound insulation','up to 47 dB'],['Anti-burglary','up to RC3'],['Colours','White, anthracite grey, bicolour'],['Old frame','Removed completely'],['Installation','In the masonry opening, flush with the inner wall face'],],
      de:[['Material','PVC Klasse A'],['Renovierungsflügel','35 mm / 60 mm'],['Profiltiefe','76 mm'],['Wärmedurchgang Uw','0,73 W/m²K'],['Verglasung','bis 48 mm'],['Schalldämmung','bis 47 dB'],['Einbruchschutz','bis RC3'],['Farben','Weiß, Anthrazitgrau, zweifarbig'],['Alter Rahmen','Wird vollständig ausgebaut'],['Montage','In der Maueröffnung, bündig mit der Wandinnenseite'],],
      fr:[['Matériau','PVC Classe A'],['Aile de rénovation','35 mm / 60 mm'],['Profondeur profil','76 mm'],['Transfert thermique Uw','0,73 W/m²K'],['Vitrage','jusqu’à 48 mm'],['Isolation phonique','jusqu’à 47 dB'],['Anti-effraction','jusqu’à RC3'],['Couleurs','Blanc, anthracite, bicolore'],['Ancien dormant','Entièrement déposé'],['Pose','Dans la baie maçonnée, au nu intérieur du mur'],],
      es:[['Material','PVC Clase A'],['Ala de renovación','35 mm / 60 mm'],['Prof. perfil','76 mm'],['Transf. térmica Uw','0,73 W/m²K'],['Vidrio','hasta 48 mm'],['Aislamiento acústico','hasta 47 dB'],['Antirrobo','hasta RC3'],['Colores','Blanco, antracita, bicolor'],['Marco antiguo','Se retira por completo'],['Instalación','En el hueco de obra, a haces con la cara interior'],],
      it:[['Materiale','PVC Classe A'],['Aletta di ristrutturazione','35 mm / 60 mm'],['Profondità profilo','76 mm'],['Trasmittanza Uw','0,73 W/m²K'],['Vetro','fino a 48 mm'],['Isolamento acustico','fino a 47 dB'],['Antieffrazione','fino a RC3'],['Colori','Bianco, antracite, bicolore'],['Vecchio telaio','Rimosso completamente'],['Posa','Nel vano murario, a filo della parete interna'],],
    },
    perf: {
      ro:[['Reparații la interior','Nu sunt necesare'],['Lucrări la exterior','Spumă din exterior + refacerea glafului'],['Transfer termic Uw','0,73 W/m²K (profil 76 mm)'],['Izolare fonică','până la 47 dB'],['Antiefracție','RC3 opțional'],['Potrivit pentru','Apartamente locuite, blocuri, renovări'],],
      en:[['Interior repairs','Not needed'],['Exterior work','Foam from outside + reveal repair'],['Thermal transfer Uw','0.73 W/m²K (76 mm profile)'],['Sound insulation','up to 47 dB'],['Anti-burglary','RC3 optional'],['Suitable for','Occupied homes, apartment blocks, renovations'],],
      de:[['Nacharbeiten innen','Nicht nötig'],['Arbeiten außen','Schaum von außen + Laibung'],['Wärmedurchgang Uw','0,73 W/m²K (76 mm Profil)'],['Schalldämmung','bis 47 dB'],['Einbruchschutz','RC3 optional'],['Geeignet für','Bewohnte Wohnungen, Wohnblöcke, Sanierungen'],],
      fr:[['Reprises intérieures','Aucune'],['Travaux extérieurs','Mousse par l’extérieur + tableau'],['Transfert thermique Uw','0,73 W/m²K (profil 76 mm)'],['Isolation phonique','jusqu’à 47 dB'],['Anti-effraction','RC3 optionnel'],['Adapté à','Logements occupés, immeubles, rénovations'],],
      es:[['Reparaciones interiores','No son necesarias'],['Trabajos exteriores','Espuma desde fuera + mocheta'],['Transf. térmica Uw','0,73 W/m²K (perfil 76 mm)'],['Aislamiento acústico','hasta 47 dB'],['Antirrobo','RC3 opcional'],['Indicado para','Viviendas habitadas, bloques, reformas'],],
      it:[['Ripristini interni','Non necessari'],['Lavori esterni','Schiuma dall’esterno + spalletta'],['Trasmittanza Uw','0,73 W/m²K (profilo 76 mm)'],['Isolamento acustico','fino a 47 dB'],['Antieffrazione','RC3 opzionale'],['Indicato per','Case abitate, condomini, ristrutturazioni'],],
    },
    advantages: {
      ro:['Fără reparații la interior — aripa tocului de renovare acoperă spațiul dintre perete și fereastra nouă, iar tencuiala, glafurile interioare și zugrăveala rămân neatinse','Tocul vechi se scoate complet — nu rămâne nicio punte termică sau zonă de umezeală între două tocuri, iar fereastra nouă se ancorează direct în zidărie','Lucrările de etanșare se fac din exterior — spuma se injectează în rostul de montaj dinspre exterior, iar glaful se reface tot de afară','Suprafața vitrată rămâne a unui montaj clasic — fereastra ocupă golul eliberat de tocul vechi, nu se suprapune peste el','Aripă de 35 sau 60 mm — se alege după lățimea rostului de acoperit și după starea muchiei tencuielii după demontare','La exterior rămân izolarea perimetrală și refacerea glafului — le stabilim de la început, în ofertă, ca să știi exact ce cuprinde lucrarea'],
      en:['No interior repairs — the renovation flange covers the gap between the wall and the new window, so plaster, interior sills and paintwork stay untouched','The old frame comes out completely — no thermal bridge or damp pocket between two frames, and the new window is anchored straight into the masonry','Sealing is done from outside — foam is injected into the installation joint from the exterior and the reveal is repaired from outside too','Glazed area stays that of a standard installation — the window fills the opening freed by the old frame instead of sitting over it','35 or 60 mm flange — chosen according to the width of the joint to cover and the state of the plaster edge after removal','Perimeter insulation and reveal repair remain on the outside — we agree them up front in the quote, so you know exactly what the job includes'],
      de:['Keine Nacharbeiten innen — der Renovierungsflügel deckt den Spalt zwischen Wand und neuem Fenster ab; Putz, Innenfensterbänke und Anstrich bleiben unberührt','Der alte Rahmen wird vollständig ausgebaut — keine Wärmebrücke und keine Feuchtezone zwischen zwei Rahmen, das neue Fenster wird direkt im Mauerwerk verankert','Abgedichtet wird von außen — der Schaum wird von außen in die Montagefuge eingebracht, auch die Laibung wird von außen instand gesetzt','Die Glasfläche entspricht einer Standardmontage — das Fenster füllt die vom alten Rahmen freigegebene Öffnung, statt darüber zu sitzen','Flügel mit 35 oder 60 mm — gewählt nach der Breite der abzudeckenden Fuge und dem Zustand der Putzkante nach dem Ausbau','Außen bleiben Perimeterdämmung und Laibung — wir legen sie von Anfang an im Angebot fest, damit klar ist, was die Arbeit umfasst'],
      fr:['Aucune reprise intérieure — l’aile du cadre de rénovation recouvre l’espace entre le mur et la nouvelle fenêtre ; enduit, appuis intérieurs et peinture restent intacts','L’ancien dormant est entièrement déposé — aucun pont thermique ni poche d’humidité entre deux dormants, et la nouvelle fenêtre est ancrée directement dans la maçonnerie','L’étanchéité se fait par l’extérieur — la mousse est injectée dans le joint de pose côté extérieur et le tableau est repris de l’extérieur','La surface vitrée reste celle d’une pose classique — la fenêtre occupe la baie libérée par l’ancien dormant au lieu de se superposer à lui','Aile de 35 ou 60 mm — choisie selon la largeur du joint à couvrir et l’état de l’arête d’enduit après dépose','À l’extérieur restent l’isolation périmétrale et la reprise du tableau — nous les fixons dès le devis, pour que vous sachiez exactement ce que comprend le chantier'],
      es:['Sin reparaciones interiores — el ala del marco de renovación cubre el espacio entre el muro y la ventana nueva; revoque, alféizares interiores y pintura quedan intactos','El marco antiguo se retira por completo — no queda puente térmico ni bolsa de humedad entre dos marcos, y la ventana nueva se ancla directamente a la obra','El sellado se hace desde fuera — la espuma se inyecta en la junta de montaje desde el exterior y la mocheta también se repara desde fuera','La superficie acristalada es la de un montaje clásico — la ventana ocupa el hueco que deja el marco antiguo en lugar de superponerse a él','Ala de 35 o 60 mm — se elige según el ancho de la junta a cubrir y el estado del canto del revoque tras el desmontaje','En el exterior quedan el aislamiento perimetral y la reparación de la mocheta — los fijamos desde el presupuesto, para que sepa exactamente qué incluye el trabajo'],
      it:['Nessun ripristino interno — l’aletta del telaio di ristrutturazione copre lo spazio tra muro e nuova finestra; intonaco, davanzali interni e tinteggiatura restano intatti','Il vecchio telaio si rimuove completamente — nessun ponte termico né sacca di umidità tra due telai, e la nuova finestra si ancora direttamente alla muratura','La sigillatura si fa dall’esterno — la schiuma si inietta nel giunto di posa dal lato esterno e anche la spalletta si ripristina da fuori','La superficie vetrata resta quella di una posa tradizionale — la finestra occupa il vano liberato dal vecchio telaio invece di sovrapporsi','Aletta da 35 o 60 mm — si sceglie in base alla larghezza del giunto da coprire e allo stato dello spigolo d’intonaco dopo la rimozione','All’esterno restano isolamento perimetrale e ripristino della spalletta — li definiamo fin dal preventivo, così sapete esattamente cosa comprende il lavoro'],
    },
    seo_text: {
      ro:'Tocul de renovare PVC este un toc de fereastră prevăzut cu o aripă lată, de 35 sau 60 mm, gândit pentru înlocuirea tâmplăriei vechi fără reparații la interior. Fereastra veche — din lemn, PVC sau aluminiu — se demontează complet, cu toc cu tot, astfel încât în gol nu rămâne nimic din vechea tâmplărie. Fereastra nouă se montează în golul zidăriei, aliniată la fața interioară a peretelui, iar aripa tocului de renovare se așază pe perete și maschează spațiul dintre zidărie și tâmplăria nouă, inclusiv muchiile de tencuială deteriorate la demontare. Spuma poliuretanică se injectează în rostul de montaj dinspre exterior, iar glaful se reface tot din exterior. Rezultatul: în casă nu se sparge, nu se tencuiește și nu se zugrăvește. La exterior rămân însă de făcut izolarea perimetrală și refacerea glafului, lucrări pe care le stabilim de la început în ofertă. Metoda este foarte răspândită în Italia, unde profilele cu aripă de 28–65 mm sunt montate frecvent „a filo parete interna”, iar norma UNI 11673-1 pentru proiectarea montajului recomandă îndepărtarea tocului vechi. Diferența față de montajul peste tocul vechi este esențială: acolo tocul vechi rămâne în zid, se pierd 4–6 cm de lumină pe fiecare latură, iar între cele două tocuri pot apărea punți termice și condens. Cu tocul de renovare, tocul vechi dispare, ancorarea se face în zidărie, iar suprafața vitrată rămâne a unui montaj clasic. Profilul de 76 mm asigură Uw = 0,73 W/m²K, geam de până la 48 mm, izolare fonică de până la 47 dB și antiefracție până la RC3. Neofort BIZ montează tocul de renovare în București și Ilfov și te ajută să alegi aripa potrivită după golul tău.',
      en:'The PVC renovation frame is a window frame with a wide 35 or 60 mm flange, designed to replace old windows without any interior repairs. The old window — timber, PVC or aluminium — is removed completely, frame included, so nothing of the old joinery is left in the opening. The new window is fixed in the masonry opening, flush with the inner face of the wall, and the renovation flange rests on the wall and masks the gap between the masonry and the new frame, including plaster edges damaged during removal. Polyurethane foam is injected into the installation joint from the outside, and the window reveal is also repaired from outside. The result: nothing is broken, plastered or repainted indoors. On the outside, however, perimeter insulation and reveal repair still have to be done, and we agree them in the quote from the start. The method is widespread in Italy, where flanged profiles of 28–65 mm are often installed “a filo parete interna” (flush with the inner wall) and the UNI 11673-1 standard on installation design recommends removing the old frame. The difference from fitting over the old frame is fundamental: there the old frame stays in the wall, 4–6 cm of daylight is lost on every side, and thermal bridges and condensation can form between the two frames. With the renovation frame the old frame is gone, the window is anchored into the masonry and the glazed area stays that of a standard installation. The 76 mm profile delivers Uw = 0.73 W/m²K, glazing up to 48 mm, sound insulation up to 47 dB and burglar resistance up to RC3. Neofort BIZ installs renovation frames in Bucharest and Ilfov and helps you choose the right flange for your opening.',
      de:'Der PVC-Renovierungsrahmen ist ein Fensterrahmen mit breitem Flügel von 35 oder 60 mm, gedacht für den Austausch alter Fenster ohne Nacharbeiten im Innenraum. Das alte Fenster — aus Holz, Kunststoff oder Aluminium — wird samt Rahmen vollständig ausgebaut, sodass von der alten Tischlerarbeit nichts in der Öffnung bleibt. Das neue Fenster wird in der Maueröffnung montiert, bündig mit der Wandinnenseite, und der Renovierungsflügel liegt auf der Wand auf und verdeckt den Spalt zwischen Mauerwerk und neuem Rahmen, einschließlich der beim Ausbau beschädigten Putzkanten. Der PU-Schaum wird von außen in die Montagefuge eingebracht, auch die Laibung wird von außen instand gesetzt. Das Ergebnis: Innen wird weder gestemmt noch verputzt oder gestrichen. Außen bleiben jedoch Perimeterdämmung und Laibungsreparatur, die wir von Anfang an im Angebot festlegen. Die Methode ist in Italien weit verbreitet, wo Profile mit 28–65 mm breitem Flügel häufig „a filo parete interna“ (bündig mit der Innenwand) montiert werden und die Norm UNI 11673-1 zur Montageplanung den Ausbau des alten Rahmens empfiehlt. Der Unterschied zur Montage über dem alten Rahmen ist grundlegend: Dort bleibt der alte Rahmen in der Wand, auf jeder Seite gehen 4–6 cm Licht verloren, und zwischen den beiden Rahmen können Wärmebrücken und Kondensat entstehen. Mit dem Renovierungsrahmen verschwindet der alte Rahmen, das Fenster wird im Mauerwerk verankert und die Glasfläche entspricht einer Standardmontage. Das 76-mm-Profil erreicht Uw = 0,73 W/m²K, Verglasung bis 48 mm, Schalldämmung bis 47 dB und Einbruchschutz bis RC3. Neofort BIZ montiert Renovierungsrahmen in Bukarest und Ilfov und hilft bei der Wahl des passenden Flügels für Ihre Öffnung.',
      fr:'Le cadre de rénovation PVC est un dormant doté d’une aile large de 35 ou 60 mm, conçu pour remplacer d’anciennes fenêtres sans aucune reprise intérieure. L’ancienne fenêtre — bois, PVC ou aluminium — est entièrement déposée, dormant compris, si bien qu’il ne reste rien de l’ancienne menuiserie dans la baie. La nouvelle fenêtre est posée dans la baie maçonnée, au nu intérieur du mur, et l’aile du cadre de rénovation s’appuie sur le mur pour masquer l’espace entre la maçonnerie et le nouveau dormant, y compris les arêtes d’enduit abîmées à la dépose. La mousse polyuréthane est injectée dans le joint de pose par l’extérieur, et le tableau est lui aussi repris de l’extérieur. Résultat : à l’intérieur, on ne casse rien, on ne réenduit rien et on ne repeint rien. À l’extérieur, il reste toutefois l’isolation périmétrale et la reprise du tableau, que nous fixons dès le devis. La méthode est très répandue en Italie, où les profils à aile de 28 à 65 mm sont souvent posés « a filo parete interna » (au nu du mur intérieur) et où la norme UNI 11673-1 sur la conception de la pose recommande de retirer l’ancien dormant. La différence avec la pose sur l’ancien dormant est essentielle : dans ce cas, l’ancien dormant reste dans le mur, on perd 4 à 6 cm de lumière sur chaque côté, et des ponts thermiques et de la condensation peuvent apparaître entre les deux dormants. Avec le cadre de rénovation, l’ancien dormant disparaît, la fenêtre est ancrée dans la maçonnerie et la surface vitrée reste celle d’une pose classique. Le profil de 76 mm offre Uw = 0,73 W/m²K, un vitrage jusqu’à 48 mm, une isolation phonique jusqu’à 47 dB et une résistance anti-effraction jusqu’à RC3. Neofort BIZ pose des cadres de rénovation à Bucarest et dans l’Ilfov et vous aide à choisir l’aile adaptée à votre baie.',
      es:'El marco de renovación PVC es un marco de ventana con un ala ancha de 35 o 60 mm, pensado para sustituir ventanas antiguas sin reparaciones interiores. La ventana antigua — de madera, PVC o aluminio — se retira por completo, marco incluido, de modo que en el hueco no queda nada de la carpintería anterior. La ventana nueva se monta en el hueco de obra, a haces con la cara interior del muro, y el ala del marco de renovación se apoya sobre la pared y oculta el espacio entre la obra y la carpintería nueva, incluidas las aristas del revoque dañadas al desmontar. La espuma de poliuretano se inyecta en la junta de montaje desde el exterior, y la mocheta también se repara desde fuera. Resultado: dentro de casa no se rompe, no se enluce y no se pinta. En el exterior quedan, sin embargo, el aislamiento perimetral y la reparación de la mocheta, que fijamos desde el principio en el presupuesto. El método está muy extendido en Italia, donde los perfiles con ala de 28 a 65 mm se montan a menudo «a filo parete interna» (a haces con el muro interior) y la norma UNI 11673-1 sobre el diseño del montaje recomienda retirar el marco antiguo. La diferencia con el montaje sobre el marco antiguo es fundamental: allí el marco antiguo se queda en el muro, se pierden 4–6 cm de luz por cada lado y entre los dos marcos pueden aparecer puentes térmicos y condensación. Con el marco de renovación, el marco antiguo desaparece, la ventana se ancla a la obra y la superficie acristalada es la de un montaje clásico. El perfil de 76 mm ofrece Uw = 0,73 W/m²K, vidrio de hasta 48 mm, aislamiento acústico de hasta 47 dB y antirrobo hasta RC3. Neofort BIZ instala marcos de renovación en Bucarest e Ilfov y le ayuda a elegir el ala adecuada para su hueco.',
      it:'Il telaio di ristrutturazione PVC è un telaio dotato di un’aletta larga 35 o 60 mm, pensato per sostituire i vecchi serramenti senza ripristini interni. La vecchia finestra — in legno, PVC o alluminio — si rimuove completamente, telaio compreso, così nel vano non resta nulla del vecchio infisso. La nuova finestra si posa nel vano murario, a filo della parete interna, e l’aletta del telaio di ristrutturazione appoggia sul muro e maschera lo spazio tra muratura e nuovo telaio, compresi gli spigoli d’intonaco danneggiati durante la rimozione. La schiuma poliuretanica si inietta nel giunto di posa dall’esterno, e anche la spalletta si ripristina da fuori. Il risultato: in casa non si rompe, non si intonaca e non si tinteggia. All’esterno restano però da fare l’isolamento perimetrale e il ripristino della spalletta, che definiamo fin dall’inizio nel preventivo. Il metodo è molto diffuso in Italia, dove i profili con aletta da 28 a 65 mm vengono spesso posati a filo parete interna e la norma UNI 11673-1 sulla progettazione della posa raccomanda la rimozione del vecchio telaio. La differenza rispetto alla posa sul vecchio telaio è sostanziale: lì il vecchio telaio resta nel muro, si perdono 4–6 cm di luce per lato e tra i due telai possono formarsi ponti termici e condensa. Con il telaio di ristrutturazione il vecchio telaio sparisce, la finestra si ancora alla muratura e la superficie vetrata resta quella di una posa tradizionale. Il profilo da 76 mm garantisce Uw = 0,73 W/m²K, vetro fino a 48 mm, isolamento acustico fino a 47 dB e antieffrazione fino a RC3. Neofort BIZ posa telai di ristrutturazione a Bucarest e in provincia di Ilfov e vi aiuta a scegliere l’aletta adatta al vostro vano.',
    },
  },

  'pervazuri-interior-pvc-exterior-al': {
    img: '/accessories/pervazuri-glafuri.avif',
    color: '#162d47',
    category: { ro:'Finisare Tâmplărie', en:'Window Finishing', de:'Fensterveredelung', fr:'Finition Menuiserie', es:'Acabado Carpintería', it:'Finitura Infissi' },
    serie: { ro:'Pervazuri & Glafuri', en:'Windowsills & Sills', de:'Fensterbänke', fr:'Appuis de Fenêtre', es:'Alféizares', it:'Davanzali' },
    breadcrumb_parent_href: '/accesorii',
    breadcrumb_parent: { ro:'Accesorii', en:'Accessories', de:'Zubehör', fr:'Accessoires', es:'Accesorios', it:'Accessori' },
    name: {
      ro:'Pervazuri Interior PVC și Glafuri Exterior Aluminiu – Finisare Completă Fereastră',
      en:'Interior PVC Windowsills and Exterior Aluminium Sills – Complete Window Finishing',
      de:'Innenfensterbänke PVC und Außenfensterbänke Aluminium – Vollständige Fensterveredelung',
      fr:'Appuis de Fenêtre Intérieurs PVC et Extérieurs Aluminium – Finition Complète Fenêtre',
      es:'Alféizares Interiores PVC y Exteriores Aluminio – Acabado Completo de Ventana',
      it:'Davanzali Interni PVC e Esterni Alluminio – Finitura Completa della Finestra',
    },
    tagline: {
      ro:'Pervazuri interioare PVC în gama completă de culori RAL și glafuri exterioare din aluminiu anodizat — rezistente la intemperii, etanșate cu garnitură EPDM, cuplare 90°–180°.',
      en:'Interior PVC windowsills in full RAL colour range and exterior anodised aluminium sills — weather-resistant, sealed with EPDM gasket, coupling 90°–180°.',
      de:'Innenfensterbänke PVC in kompletter RAL-Farbpalette und Außenfensterbänke aus Eloxal-Aluminium — witterungsbeständig, EPDM-gedichtet, Kupplung 90°–180°.',
      fr:'Appuis intérieurs PVC en gamme complète de couleurs RAL et appuis extérieurs en aluminium anodisé — résistants aux intempéries, joints EPDM, raccordement 90°–180°.',
      es:'Alféizares interiores PVC en gama completa de colores RAL y exteriores de aluminio anodizado — resistentes a intemperie, sellados con EPDM, acoplamiento 90°–180°.',
      it:'Davanzali interni PVC in gamma completa di colori RAL e davanzali esterni in alluminio anodizzato — resistenti alle intemperie, sigillati con EPDM, accoppiamento 90°–180°.',
    },
    specs: {
      ro:[['Pervaz interior','PVC Clasa A'],['Culori RAL interior','9016 (alb), 8019, 8003, 7016'],['Adâncime interior','20 – 400 mm (pe comandă)'],['Glaf exterior','Aluminiu anodizat'],['Finisaj exterior','E6/EV1 (argintiu), E6/C32 (bronz), E6/C33 (auriu)'],['Capace aluminiu','Clips-on, la colțuri și capete'],['Etanșare','Garnitură EPDM integrată'],['Cuplare colț','90° · 135° · 180°'],['Rezistență','Intemperii, UV, impact'],['Compatibil','Orice profil PVC sau aluminiu'],],
      en:[['Interior sill','Class A PVC'],['RAL colours interior','9016 (white), 8019, 8003, 7016'],['Interior depth','20 – 400 mm (custom)'],['Exterior sill','Anodised aluminium'],['Exterior finish','E6/EV1 (silver), E6/C32 (bronze), E6/C33 (gold)'],['Aluminium caps','Clip-on, at corners and ends'],['Sealing','Integrated EPDM gasket'],['Corner coupling','90° · 135° · 180°'],['Resistance','Weatherproof, UV, impact'],['Compatible','Any PVC or aluminium profile'],],
      de:[['Innenbank','PVC Klasse A'],['RAL-Farben innen','9016 (weiß), 8019, 8003, 7016'],['Innenbreite','20 – 400 mm (nach Maß)'],['Außenbank','Eloxiertes Aluminium'],['Außenoberfläche','E6/EV1 (silber), E6/C32 (bronze), E6/C33 (gold)'],['Alu-Kappen','Clips, an Ecken und Enden'],['Abdichtung','Integrierte EPDM-Dichtung'],['Eckkupplung','90° · 135° · 180°'],['Beständigkeit','Witterung, UV, Stoß'],['Kompatibel','Jedes PVC- oder Aluminiumprofil'],],
      fr:[['Appui intérieur','PVC Classe A'],['Couleurs RAL int.','9016 (blanc), 8019, 8003, 7016'],['Profondeur int.','20 – 400 mm (sur mesure)'],['Appui extérieur','Aluminium anodisé'],['Finition ext.','E6/EV1 (argent), E6/C32 (bronze), E6/C33 (or)'],['Embouts aluminium','Clips, aux angles et extrémités'],['Étanchéité','Joint EPDM intégré'],['Raccordement','90° · 135° · 180°'],['Résistance','Intempéries, UV, impact'],['Compatible','Tout profil PVC ou aluminium'],],
      es:[['Alféizar interior','PVC Clase A'],['Colores RAL int.','9016 (blanco), 8019, 8003, 7016'],['Prof. interior','20 – 400 mm (a medida)'],['Alféizar exterior','Aluminio anodizado'],['Acabado ext.','E6/EV1 (plata), E6/C32 (bronce), E6/C33 (oro)'],['Tapas aluminio','Clip, en esquinas y extremos'],['Sellado','Junta EPDM integrada'],['Acoplamiento','90° · 135° · 180°'],['Resistencia','Intemperie, UV, impacto'],['Compatible','Cualquier perfil PVC o aluminio'],],
      it:[['Davanzale interno','PVC Classe A'],['Colori RAL int.','9016 (bianco), 8019, 8003, 7016'],['Profondità int.','20 – 400 mm (su misura)'],['Davanzale esterno','Alluminio anodizzato'],['Finitura est.','E6/EV1 (argento), E6/C32 (bronzo), E6/C33 (oro)'],['Tappi alluminio','Clip, agli angoli e estremità'],['Tenuta','Guarnizione EPDM integrata'],['Accoppiamento','90° · 135° · 180°'],['Resistenza','Intemperie, UV, impatto'],['Compatibile','Qualsiasi profilo PVC o alluminio'],],
    },
    perf: {
      ro:[['Rezistență UV','Da — nu îngălbenește, nu se fisurează'],['Etanșeitate','Garnitură EPDM perimetrală'],['Durabilitate','≥ 25 ani'],['Rezistență termică','–30°C … +80°C'],['Finisaje disponibile','RAL + anodizat argintiu, bronz, auriu, negru'],['Compatibil nZEB','Da — finisaj standard recomandat'],],
      en:[['UV resistance','Yes — does not yellow, does not crack'],['Sealing','Perimeter EPDM gasket'],['Durability','≥ 25 years'],['Thermal resistance','–30°C … +80°C'],['Available finishes','RAL + anodised silver, bronze, gold, black'],['nZEB compatible','Yes — recommended standard finish'],],
      de:[['UV-Beständigkeit','Ja — vergilbt nicht, reißt nicht'],['Abdichtung','Perimetrische EPDM-Dichtung'],['Haltbarkeit','≥ 25 Jahre'],['Wärmebeständigkeit','–30°C … +80°C'],['Verfügbare Oberflächen','RAL + eloxiert silber, bronze, gold, schwarz'],['nZEB-kompatibel','Ja — empfohlener Standardabschluss'],],
      fr:[['Résistance UV','Oui — ne jaunit pas, ne se fissure pas'],['Étanchéité','Joint EPDM périmétrique'],['Durabilité','≥ 25 ans'],['Résistance thermique','–30°C … +80°C'],['Finitions disponibles','RAL + anodisé argent, bronze, or, noir'],['Compatible nZEB','Oui — finition standard recommandée'],],
      es:[['Resistencia UV','Sí — no amarillea, no se fisura'],['Sellado','Junta EPDM perimetral'],['Durabilidad','≥ 25 años'],['Resistencia térmica','–30°C … +80°C'],['Acabados disponibles','RAL + anodizado plata, bronce, oro, negro'],['Compatible nZEB','Sí — acabado estándar recomendado'],],
      it:[['Resistenza UV','Sì — non ingiallisce, non si fessura'],['Tenuta','Guarnizione EPDM perimetrale'],['Durata','≥ 25 anni'],['Resistenza termica','–30°C … +80°C'],['Finiture disponibili','RAL + anodizzato argento, bronzo, oro, nero'],['Compatible nZEB','Sì — finitura standard raccomandata'],],
    },
    advantages: {
      ro:['Pervaz interior PVC — rezistent la umiditate, căldură și impact, nu se deformează, disponibil în adâncimi de la 20 mm la 400 mm pentru orice grosime de perete','Glaf exterior aluminiu anodizat — rezistență la coroziune, UV și intemperii superioară PVC-ului exterior, durabilitate ≥ 25 ani fără vopsire suplimentară','Garnitură EPDM integrată — etanșare perfectă la baza glafului exterior, eliminare infiltrații apă la averse oblice','Cuplare universală 90°–180° — pentru ferestre de colț, trapezoidale sau la unghi, fără vizibilitate a îmbinărilor','Capace aluminiu clips-on — capete și colțuri curate, montaj rapid, aspectul unui profil continuu','Gamă completă cromatică — 4 culori RAL standard + 3 finisaje anodizate, asortate cu profilele PVC și aluminiu Neofort BIZ'],
      en:['Interior PVC sill — resistant to moisture, heat and impact, does not deform, available in depths from 20 mm to 400 mm for any wall thickness','Exterior anodised aluminium sill — corrosion, UV and weather resistance superior to exterior PVC, durability ≥ 25 years without additional painting','Integrated EPDM gasket — perfect sealing at base of exterior sill, eliminates water infiltration at oblique rain','Universal coupling 90°–180° — for corner windows, trapezoidal or angled, without visible joints','Aluminium clip-on caps — clean ends and corners, fast installation, appearance of a continuous profile','Full colour range — 4 standard RAL colours + 3 anodised finishes, matched with Neofort BIZ PVC and aluminium profiles'],
      de:['Innen-PVC-Fensterbank — beständig gegen Feuchtigkeit, Wärme und Stöße, verformt sich nicht, in Breiten von 20 mm bis 400 mm für jede Wandstärke erhältlich','Außen-Eloxal-Fensterbank — Korrosions-, UV- und Witterungsbeständigkeit überlegen gegenüber Außen-PVC, Haltbarkeit ≥ 25 Jahre ohne Nachlackierung','Integrierte EPDM-Dichtung — perfekte Abdichtung am Fuß der Außenbank, eliminiert Wasserinfiltration bei schrägem Regen','Universalkupplung 90°–180° — für Eckfenster, trapezförmige oder abgewinkelte, ohne sichtbare Verbindungen','Aluminium-Clip-Kappen — saubere Enden und Ecken, schnelle Montage, Aussehen eines durchgehenden Profils','Komplette Farbpalette — 4 Standard-RAL-Farben + 3 Eloxal-Oberflächen, abgestimmt auf Neofort BIZ PVC- und Aluminiumprofile'],
      fr:['Appui intérieur PVC — résistant à l\'humidité, la chaleur et les chocs, ne se déforme pas, disponible en profondeurs de 20 mm à 400 mm pour toute épaisseur de mur','Appui extérieur aluminium anodisé — résistance à la corrosion, UV et intempéries supérieure au PVC extérieur, durabilité ≥ 25 ans sans peinture supplémentaire','Joint EPDM intégré — étanchéité parfaite à la base de l\'appui extérieur, élimine les infiltrations d\'eau par pluie oblique','Raccordement universel 90°–180° — pour fenêtres d\'angle, trapézoïdales ou en biais, sans jonctions visibles','Embouts aluminium clips — extrémités et angles propres, pose rapide, apparence d\'un profil continu','Gamme chromatique complète — 4 couleurs RAL standard + 3 finitions anodisées, assorties aux profils PVC et aluminium Neofort BIZ'],
      es:['Alféizar interior PVC — resistente a la humedad, el calor y los impactos, no se deforma, disponible en profundidades de 20 mm a 400 mm para cualquier grosor de pared','Alféizar exterior de aluminio anodizado — resistencia a la corrosión, UV e intemperie superior al PVC exterior, durabilidad ≥ 25 años sin pintura adicional','Junta EPDM integrada — sellado perfecto en la base del alféizar exterior, elimina infiltraciones de agua en lluvia oblicua','Acoplamiento universal 90°–180° — para ventanas de esquina, trapezoidales o en ángulo, sin juntas visibles','Tapas de aluminio clip — extremos y esquinas limpios, instalación rápida, aspecto de perfil continuo','Gama cromática completa — 4 colores RAL estándar + 3 acabados anodizados, combinados con los perfiles PVC y aluminio de Neofort BIZ'],
      it:['Davanzale interno PVC — resistente all\'umidità, al calore e agli impatti, non si deforma, disponibile in profondità da 20 mm a 400 mm per qualsiasi spessore di parete','Davanzale esterno in alluminio anodizzato — resistenza alla corrosione, UV e intemperie superiore al PVC esterno, durata ≥ 25 anni senza verniciatura aggiuntiva','Guarnizione EPDM integrata — tenuta perfetta alla base del davanzale esterno, elimina infiltrazioni d\'acqua per pioggia obliqua','Accoppiamento universale 90°–180° — per finestre angolari, trapezoidali o inclinate, senza giunzioni visibili','Tappi alluminio clip — estremità e angoli puliti, installazione rapida, aspetto di profilo continuo','Gamma cromatica completa — 4 colori RAL standard + 3 finiture anodizzate, abbinate ai profili PVC e alluminio Neofort BIZ'],
    },
    seo_text: {
      ro:'Pervazurile interioare din PVC și glafurile exterioare din aluminiu anodizat reprezintă finisajul standard pentru orice fereastră montată profesional, asigurând atât protecția termică și impermeabilă a zonei de sub fereastră, cât și un aspect estetic îngrijit și durabil. Pervazul interior PVC Clasa A este disponibil în adâncimi de la 20 mm la 400 mm pe comandă, acoperind orice grosime de perete de la pereții subțiri ai apartamentelor la pereții groși ai caselor cu izolație exterioară sau ai clădirilor istorice cu zidărie masivă. Rezistența la umiditate, căldură și impact face din PVC-ul de Clasa A soluția superioară față de marmorile sau MDF-ul laminat, fără riscul de umflare sau fisurare. Glafurile exterioare din aluminiu anodizat sunt superioare celor din PVC exterior prin rezistența la UV (nu devin fragile după 5–10 ani) și la coroziune cauzată de apă de ploaie cu poluanți. Sistemul de cuplare universală 90°–135°–180° permite montarea în orice configurație arhitecturală — ferestre drepte, de colț sau trapezoidale — fără îmbinări vizibile. Neofort BIZ furnizează pervazuri și glafuri în toate combinațiile de culori RAL și finisaje anodizate, livrare garantată în București.',
      en:'Interior PVC windowsills and exterior anodised aluminium sills represent the standard finish for any professionally installed window, providing both thermal and waterproof protection of the area below the window and a clean, durable aesthetic appearance. Class A PVC interior sill is available in depths from 20 mm to 400 mm on request, covering any wall thickness from thin apartment walls to the thick walls of externally insulated houses or historic buildings with massive masonry. Resistance to moisture, heat and impact makes Class A PVC the superior solution over marble or laminated MDF, without the risk of swelling or cracking. Exterior anodised aluminium sills are superior to exterior PVC ones in UV resistance (do not become brittle after 5–10 years) and corrosion resistance caused by rainwater with pollutants. The universal coupling system 90°–135°–180° allows installation in any architectural configuration — straight, corner or trapezoidal windows — without visible joints. Neofort BIZ supplies sills in all RAL colour and anodised finish combinations, guaranteed delivery in Bucharest.',
      de:'Innenfensterbänke aus PVC und Außenfensterbänke aus eloxiertem Aluminium stellen den Standardabschluss für jedes professionell montierte Fenster dar und bieten sowohl Wärme- und Wasserschutz für den Bereich unter dem Fenster als auch ein sauberes, langlebiges ästhetisches Erscheinungsbild. Die Innenbank aus PVC Klasse A ist in Breiten von 20 mm bis 400 mm auf Bestellung erhältlich und deckt jede Wandstärke ab, von dünnen Wohnungswänden bis zu den dicken Wänden außengedämmter Häuser oder historischer Gebäude mit massivem Mauerwerk. Beständigkeit gegen Feuchtigkeit, Wärme und Stöße macht PVC der Klasse A zur überlegenen Lösung gegenüber Marmor oder laminiertem MDF, ohne Quell- oder Rissrisiko. Außeneloxal-Fensterbänke sind Außen-PVC-Bänken in UV-Beständigkeit (werden nach 5–10 Jahren nicht spröde) und Korrosionsbeständigkeit durch Regenwasser mit Schadstoffen überlegen. Das universelle Kupplungssystem 90°–135°–180° ermöglicht die Montage in jeder Architekturkonfiguration — gerade, Eck- oder trapezförmige Fenster — ohne sichtbare Verbindungen. Neofort BIZ liefert Fensterbänke in allen RAL-Farb- und Eloxal-Oberflächenkombinationen, garantierte Lieferung in Bukarest.',
      fr:'Les appuis de fenêtre intérieurs en PVC et les appuis extérieurs en aluminium anodisé représentent la finition standard pour toute fenêtre posée professionnellement, assurant à la fois la protection thermique et imperméable de la zone sous la fenêtre et un aspect esthétique soigné et durable. L\'appui intérieur PVC Classe A est disponible en profondeurs de 20 mm à 400 mm sur commande, couvrant toute épaisseur de mur, des murs minces d\'appartements aux murs épais des maisons à isolation extérieure ou des bâtiments historiques à maçonnerie massive. La résistance à l\'humidité, la chaleur et les chocs fait du PVC Classe A la solution supérieure au marbre ou au MDF laminé, sans risque de gonflement ou de fissuration. Les appuis extérieurs en aluminium anodisé sont supérieurs aux appuis extérieurs en PVC en résistance UV (ne deviennent pas fragiles après 5–10 ans) et en résistance à la corrosion causée par l\'eau de pluie polluée. Le système de raccordement universel 90°–135°–180° permet la pose dans toute configuration architecturale — fenêtres droites, d\'angle ou trapézoïdales — sans jonctions visibles. Neofort BIZ fournit des appuis dans toutes les combinaisons de couleurs RAL et de finitions anodisées, livraison garantie à Bucarest.',
      es:'Los alféizares interiores de PVC y los exteriores de aluminio anodizado representan el acabado estándar para cualquier ventana instalada profesionalmente, proporcionando tanto la protección térmica e impermeable de la zona bajo la ventana como un aspecto estético cuidado y duradero. El alféizar interior de PVC Clase A está disponible en profundidades de 20 mm a 400 mm por encargo, cubriendo cualquier grosor de pared, desde las paredes delgadas de los apartamentos hasta las paredes gruesas de las casas con aislamiento exterior o los edificios históricos con mampostería maciza. La resistencia a la humedad, el calor y los impactos hace del PVC Clase A la solución superior al mármol o al MDF laminado, sin riesgo de hinchamiento o fisuración. Los alféizares exteriores de aluminio anodizado son superiores a los exteriores de PVC en resistencia UV (no se vuelven frágiles después de 5–10 años) y resistencia a la corrosión causada por el agua de lluvia con contaminantes. El sistema de acoplamiento universal 90°–135°–180° permite la instalación en cualquier configuración arquitectónica — ventanas rectas, de esquina o trapezoidales — sin juntas visibles. Neofort BIZ suministra alféizares en todas las combinaciones de colores RAL y acabados anodizados, entrega garantizada en Bucarest.',
      it:'I davanzali interni in PVC e i davanzali esterni in alluminio anodizzato rappresentano la finitura standard per qualsiasi finestra installata professionalmente, garantendo sia la protezione termica e impermeabile della zona sotto la finestra che un aspetto estetico curato e durevole. Il davanzale interno in PVC Classe A è disponibile in profondità da 20 mm a 400 mm su ordinazione, coprendo qualsiasi spessore di parete, dalle pareti sottili degli appartamenti alle pareti spesse delle case con isolamento esterno o degli edifici storici con muratura massiccia. La resistenza all\'umidità, al calore e agli impatti rende il PVC Classe A la soluzione superiore rispetto al marmo o all\'MDF laminato, senza rischio di rigonfiamento o fessurazione. I davanzali esterni in alluminio anodizzato sono superiori ai davanzali esterni in PVC nella resistenza UV (non diventano fragili dopo 5–10 anni) e nella resistenza alla corrosione causata dall\'acqua piovana con inquinanti. Il sistema di accoppiamento universale 90°–135°–180° consente l\'installazione in qualsiasi configurazione architettonica — finestre dritte, angolari o trapezoidali — senza giunzioni visibili. Neofort BIZ fornisce davanzali in tutte le combinazioni di colori RAL e finiture anodizzate, consegna garantita a Bucarest.',
    },
  },

  'grila-higroreglabila-aereco': {
    img: '/accessories/grila-aereco.avif',
    color: '#2a2a2a',
    category: { ro:'Ventilație Controlată', en:'Controlled Ventilation', de:'Kontrollierte Lüftung', fr:'Ventilation Contrôlée', es:'Ventilación Controlada', it:'Ventilazione Controllata' },
    serie: { ro:'Aereco', en:'Aereco', de:'Aereco', fr:'Aereco', es:'Aereco', it:'Aereco' },
    breadcrumb_parent_href: '/accesorii',
    breadcrumb_parent: { ro:'Accesorii', en:'Accessories', de:'Zubehör', fr:'Accessoires', es:'Accesorios', it:'Accessori' },
    name: {
      ro:'Grilă Higroreglabilă Aereco – Ventilație Naturală Controlată prin Umiditate',
      en:'Aereco Hygro-adjustable Ventilation Grille – Natural Ventilation Controlled by Humidity',
      de:'Aereco Hygroregelbare Lüftungsgitter – Natürliche Lüftung durch Feuchtigkeitssteuerung',
      fr:'Grille Hygroréglable Aereco – Ventilation Naturelle Contrôlée par l\'Humidité',
      es:'Rejilla Higrorreglable Aereco – Ventilación Natural Controlada por Humedad',
      it:'Griglia Igroregolab. Aereco – Ventilazione Naturale Controllata dall\'Umidità',
    },
    tagline: {
      ro:'Grilă de ventilație integrată în tâmplărie care reglează automat debitul de aer în funcție de umiditatea din cameră — 5–35 m³/h, atenuare acustică 33 dB, fără curent de aer, fără pierderi termice semnificative.',
      en:'Ventilation grille integrated in window joinery that automatically adjusts airflow based on room humidity — 5–35 m³/h, 33 dB sound attenuation, no draught, no significant heat loss.',
      de:'In den Fensterrahmen integriertes Lüftungsgitter, das den Luftstrom automatisch nach Raumfeuchte reguliert — 5–35 m³/h, 33 dB Schalldämpfung, kein Zug, kein wesentlicher Wärmeverlust.',
      fr:'Grille de ventilation intégrée dans la menuiserie qui régule automatiquement le débit d\'air en fonction de l\'humidité de la pièce — 5–35 m³/h, atténuation acoustique 33 dB, sans courant d\'air, sans pertes thermiques significatives.',
      es:'Rejilla de ventilación integrada en la carpintería que regula automáticamente el caudal de aire según la humedad de la habitación — 5–35 m³/h, atenuación acústica 33 dB, sin corriente de aire, sin pérdidas térmicas significativas.',
      it:'Griglia di ventilazione integrata negli infissi che regola automaticamente la portata d\'aria in base all\'umidità della stanza — 5–35 m³/h, attenuazione acustica 33 dB, senza corrente d\'aria, senza perdite termiche significative.',
    },
    specs: {
      ro:[['Debit aer reglabil','5 – 35 m³/h'],['Mod reglare','Higroreglabil — automat după umiditate'],['Atenuare acustică','33 dB'],['Protecție externă antiinsecte','Da'],['Tip protecție externă','Plată / Autolimitantă'],['Culori disponibile','Alb, brun, stejar auriu'],['Montaj','Integrat în profil PVC sau aluminiu'],['Dimensiuni','Variable — se decupează în profil'],['Funcționare','Pasivă — fără motor, fără curent'],],
      en:[['Adjustable airflow','5 – 35 m³/h'],['Adjustment mode','Hygro-adjustable — auto by humidity'],['Sound attenuation','33 dB'],['External insect protection','Yes'],['External protection type','Flat / Self-limiting'],['Available colours','White, brown, golden oak'],['Installation','Integrated in PVC or aluminium profile'],['Dimensions','Variable — cut into profile'],['Operation','Passive — no motor, no electricity'],],
      de:[['Regelbarer Luftstrom','5 – 35 m³/h'],['Regelungsart','Hygroregelbar — automatisch nach Feuchte'],['Schalldämpfung','33 dB'],['Außen-Insektenschutz','Ja'],['Außenschutztyp','Flach / Selbstbegrenzend'],['Verfügbare Farben','Weiß, braun, goldene Eiche'],['Montage','Integriert in PVC- oder Aluprofil'],['Abmessungen','Variabel — ins Profil einschneiden'],['Betrieb','Passiv — kein Motor, kein Strom'],],
      fr:[['Débit d\'air réglable','5 – 35 m³/h'],['Mode réglage','Hygroréglable — auto par humidité'],['Atténuation acoustique','33 dB'],['Protection ext. anti-insectes','Oui'],['Type protection ext.','Plate / Autolimitante'],['Couleurs disponibles','Blanc, brun, chêne doré'],['Pose','Intégré dans profil PVC ou aluminium'],['Dimensions','Variables — découpe dans profil'],['Fonctionnement','Passif — sans moteur, sans courant'],],
      es:[['Caudal aire regulable','5 – 35 m³/h'],['Modo regulación','Higrorreglable — auto por humedad'],['Atenuación acústica','33 dB'],['Protección ext. antiinsectos','Sí'],['Tipo protección ext.','Plana / Autolimitante'],['Colores disponibles','Blanco, marrón, roble dorado'],['Instalación','Integrado en perfil PVC o aluminio'],['Dimensiones','Variables — corte en perfil'],['Funcionamiento','Pasivo — sin motor, sin corriente'],],
      it:[['Portata aria regolabile','5 – 35 m³/h'],['Modalità regolazione','Igroregolab. — auto per umidità'],['Attenuazione acustica','33 dB'],['Protezione est. anti-insetti','Sì'],['Tipo protezione est.','Piatta / Autolimitante'],['Colori disponibili','Bianco, marrone, rovere dorato'],['Installazione','Integrato nel profilo PVC o alluminio'],['Dimensioni','Variabili — intaglio nel profilo'],['Funzionamento','Passivo — senza motore, senza corrente'],],
    },
    perf: {
      ro:[['Debit minim','5 m³/h (umiditate scăzută)'],['Debit maxim','35 m³/h (umiditate ridicată)'],['Atenuare acustică','33 dB'],['Consum electric','0 W — ventilație complet pasivă'],['Pierdere termică','Neglijabilă față de fereastră etanșă'],['Durabilitate','> 15 ani — fără piese mobile active'],],
      en:[['Minimum airflow','5 m³/h (low humidity)'],['Maximum airflow','35 m³/h (high humidity)'],['Sound attenuation','33 dB'],['Electricity consumption','0 W — completely passive ventilation'],['Heat loss','Negligible vs. airtight window'],['Durability','> 15 years — no active moving parts'],],
      de:[['Minimaler Luftstrom','5 m³/h (niedrige Feuchte)'],['Maximaler Luftstrom','35 m³/h (hohe Feuchte)'],['Schalldämpfung','33 dB'],['Stromverbrauch','0 W — vollständig passive Lüftung'],['Wärmeverlust','Vernachlässigbar ggü. dichtem Fenster'],['Haltbarkeit','> 15 Jahre — keine aktiven Bewegteile'],],
      fr:[['Débit minimal','5 m³/h (faible humidité)'],['Débit maximal','35 m³/h (humidité élevée)'],['Atténuation acoustique','33 dB'],['Consommation électrique','0 W — ventilation entièrement passive'],['Perte thermique','Négligeable vs. fenêtre étanche'],['Durabilité','> 15 ans — sans pièces mobiles actives'],],
      es:[['Caudal mínimo','5 m³/h (humedad baja)'],['Caudal máximo','35 m³/h (humedad alta)'],['Atenuación acústica','33 dB'],['Consumo eléctrico','0 W — ventilación totalmente pasiva'],['Pérdida térmica','Insignificante vs. ventana hermética'],['Durabilidad','> 15 años — sin piezas móviles activas'],],
      it:[['Portata minima','5 m³/h (umidità bassa)'],['Portata massima','35 m³/h (umidità alta)'],['Attenuazione acustica','33 dB'],['Consumo elettrico','0 W — ventilazione completamente passiva'],['Perdita termica','Trascurabile vs. finestra ermetica'],['Durata','> 15 anni — senza parti mobili attive'],],
    },
    advantages: {
      ro:['Reglare automată după umiditate — când umiditatea din cameră crește (gătit, duș, persoane), grila se deschide mai mult; când scade, se închide, fără intervenție manuală','0 wați — ventilație complet pasivă fără motor, fără consum electric, fără zgomot mecanic, fără întreținere pe toată durata de viață','Atenuare fonică 33 dB — grila filtrează zgomotul exterior, performanță similară cu a unui geam standard','Fără curent de aer — deschiderea maximă de 35 m³/h este distribuită pe toată lungimea grilei, fără jet concentrat care să deranjeze','Compatibil cu reglementările nZEB — ventilația naturală controlată higroreglabil este acceptată ca soluție de ventilație în clădirile cu consum de energie aproape zero','Integrat în profil — montajul se face prin decupare în profilul PVC sau aluminiu, fără modificare a ferestrei sau a tâmplăriei'],
      en:['Automatic humidity regulation — when room humidity rises (cooking, shower, people), the grille opens more; when it falls, it closes, without manual intervention','0 watts — completely passive ventilation without motor, no electricity consumption, no mechanical noise, no maintenance throughout lifetime','33 dB sound attenuation — the grille filters exterior noise, performance similar to a standard glass','No draught — maximum opening of 35 m³/h is distributed along the entire grille length, without concentrated jet that could disturb','Compatible with nZEB regulations — hygro-adjustable natural ventilation is accepted as a ventilation solution in nearly zero energy buildings','Integrated in profile — installation is done by cutting in the PVC or aluminium profile, without modification of the window or joinery'],
      de:['Automatische Feuchtigkeitsregelung — wenn die Raumfeuchtigkeit steigt (Kochen, Duschen, Personen), öffnet sich das Gitter mehr; wenn sie sinkt, schließt es sich, ohne manuellen Eingriff','0 Watt — vollständig passive Belüftung ohne Motor, kein Stromverbrauch, kein mechanisches Geräusch, keine Wartung während der gesamten Lebensdauer','33 dB Schalldämpfung — das Gitter filtert Außenlärm, ähnliche Leistung wie eine Standard-Glasscheibe','Kein Zug — maximale Öffnung von 35 m³/h ist über die gesamte Gitterlänge verteilt, ohne konzentrierten Luftstrahl','nZEB-konform — hygroregelbare natürliche Belüftung ist als Belüftungslösung in Niedrigstenergiegebäuden akzeptiert','In Profil integriert — Montage durch Einschnitt in das PVC- oder Aluminiumprofil, ohne Änderung des Fensters'],
      fr:['Régulation automatique par humidité — quand l\'humidité de la pièce monte (cuisine, douche, personnes), la grille s\'ouvre davantage ; quand elle baisse, elle se ferme, sans intervention manuelle','0 watt — ventilation entièrement passive sans moteur, pas de consommation électrique, pas de bruit mécanique, pas d\'entretien sur toute la durée de vie','Atténuation phonique 33 dB — la grille filtre le bruit extérieur, performance similaire à un vitrage standard','Pas de courant d\'air — ouverture maximale de 35 m³/h répartie sur toute la longueur de la grille, sans jet concentré','Compatible réglementation nZEB — la ventilation naturelle hygroréglable est acceptée comme solution de ventilation dans les bâtiments à énergie quasi nulle','Intégrée dans le profil — pose par découpe dans le profil PVC ou aluminium, sans modification de la fenêtre'],
      es:['Regulación automática por humedad — cuando la humedad de la habitación sube (cocinar, ducha, personas), la rejilla se abre más; cuando baja, se cierra, sin intervención manual','0 vatios — ventilación totalmente pasiva sin motor, sin consumo eléctrico, sin ruido mecánico, sin mantenimiento durante toda la vida útil','Atenuación acústica 33 dB — la rejilla filtra el ruido exterior, rendimiento similar al de un vidrio estándar','Sin corriente de aire — la apertura máxima de 35 m³/h se distribuye a lo largo de toda la rejilla, sin chorro concentrado','Compatible con normativa nZEB — la ventilación natural higrorreglable es aceptada como solución de ventilación en edificios de consumo casi nulo','Integrada en el perfil — la instalación se realiza mediante corte en el perfil PVC o aluminio, sin modificación de la ventana'],
      it:['Regolazione automatica per umidità — quando l\'umidità della stanza aumenta (cottura, doccia, persone), la griglia si apre di più; quando scende, si chiude, senza intervento manuale','0 watt — ventilazione completamente passiva senza motore, nessun consumo elettrico, nessun rumore meccanico, nessuna manutenzione per tutta la durata','Attenuazione acustica 33 dB — la griglia filtra il rumore esterno, prestazioni simili a un vetro standard','Nessuna corrente d\'aria — l\'apertura massima di 35 m³/h è distribuita lungo tutta la lunghezza della griglia, senza getto concentrato','Compatibile con normativa nZEB — la ventilazione naturale igroregolab. è accettata come soluzione di ventilazione negli edifici a energia quasi zero','Integrata nel profilo — l\'installazione avviene mediante intaglio nel profilo PVC o alluminio, senza modifiche alla finestra'],
    },
    seo_text: {
      ro:'Grila higroreglabilă Aereco este soluția de ventilație naturală controlată recomandată pentru tâmplăria modernă etanșă, rezolvând paradoxul clădirilor bine izolate: ferestrele din PVC sau aluminiu cu garnituri triple elimină curenții de aer nedoriți dar blochează și reînnoirea naturală a aerului, ducând la acumulare de CO₂ și umiditate excesivă. Spre deosebire de grilele de ventilație cu debit fix sau de sistemele VMC cu motor care consumă energie, Aereco funcționează complet pasiv — o lamă higroscopică din poliamidă care se deformează proporțional cu umiditatea relativă din cameră, deschizând sau închizând secțiunea de trecere fără nicio intervenție. Debitul reglabil automat de 5–35 m³/h asigură că aerul se reînnoiește exact atunci când este nevoie — mai mult când gătești sau faci duș, mai puțin când camera este goală și uscată — reducând pierderile de căldură la minimum. Atenuarea acustică de 33 dB face ca grila să nu afecteze performanța fonică a ferestrei. Montajul se realizează prin decupare simplă în profilul PVC sau aluminiu, fără modificarea ferestrei, cu protecție antiinsecte inclusă. Neofort BIZ montează grile Aereco la comandă în orice fereastră livrată, cu sau fără comandă prealabilă.',
      en:'The Aereco hygro-adjustable grille is the recommended controlled natural ventilation solution for modern airtight joinery, solving the paradox of well-insulated buildings: PVC or aluminium windows with triple gaskets eliminate unwanted draughts but also block natural air renewal, leading to CO₂ accumulation and excessive humidity. Unlike fixed-flow ventilation grilles or motor-driven VMC systems that consume energy, Aereco works completely passively — a hygroscopic polyamide blade that deforms proportionally to the relative humidity in the room, opening or closing the passage section without any intervention. The automatically adjustable airflow of 5–35 m³/h ensures that air is renewed exactly when needed — more when cooking or showering, less when the room is empty and dry — minimising heat losses. The 33 dB sound attenuation means the grille does not affect the window\'s acoustic performance. Installation is carried out by simple cutting in the PVC or aluminium profile, without modification of the window, with insect protection included. Neofort BIZ installs Aereco grilles on request in any delivered window, with or without prior order.',
      de:'Das Aereco hygroregelbare Lüftungsgitter ist die empfohlene kontrollierte natürliche Lüftungslösung für moderne dichte Fenster und löst das Paradoxon gut gedämmter Gebäude: PVC- oder Aluminiumfenster mit Dreifachdichtungen eliminieren unerwünschte Zugluft, blockieren aber auch die natürliche Lufterneuerung, was zu CO₂-Akkumulation und übermäßiger Feuchte führt. Anders als Lüftungsgitter mit festem Durchfluss oder motorgetriebene VMC-Systeme, die Energie verbrauchen, arbeitet Aereco vollständig passiv — eine hygroskopische Polyamid-Lamelle, die sich proportional zur relativen Raumfeuchte verformt, ohne jeglichen Eingriff. Der automatisch einstellbare Luftstrom von 5–35 m³/h sorgt dafür, dass die Luft genau dann erneuert wird, wenn es nötig ist — mehr beim Kochen oder Duschen, weniger wenn der Raum leer und trocken ist — und minimiert Wärmeverluste. Die 33 dB Schalldämpfung bedeutet, dass das Gitter die akustische Leistung des Fensters nicht beeinträchtigt. Die Montage erfolgt durch einfaches Einschneiden in das PVC- oder Aluminiumprofil, ohne Modifikation des Fensters, mit Insektenschutz inklusive. Neofort BIZ montiert Aereco-Gitter auf Anfrage in jedem gelieferten Fenster, mit oder ohne Vorbestellung.',
      fr:'La grille hygroréglable Aereco est la solution de ventilation naturelle contrôlée recommandée pour la menuiserie moderne étanche, résolvant le paradoxe des bâtiments bien isolés : les fenêtres PVC ou aluminium à triple joints éliminent les courants d\'air indésirables mais bloquent aussi le renouvellement naturel de l\'air, conduisant à une accumulation de CO₂ et à une humidité excessive. Contrairement aux grilles de ventilation à débit fixe ou aux systèmes VMC à moteur qui consomment de l\'énergie, Aereco fonctionne entièrement passivement — une lame hygroscopique en polyamide qui se déforme proportionnellement à l\'humidité relative de la pièce, ouvrant ou fermant la section de passage sans aucune intervention. Le débit automatiquement réglable de 5–35 m³/h garantit que l\'air est renouvelé exactement quand nécessaire — plus lors de la cuisson ou de la douche, moins quand la pièce est vide et sèche — minimisant les pertes de chaleur. L\'atténuation acoustique de 33 dB signifie que la grille n\'affecte pas les performances acoustiques de la fenêtre. La pose s\'effectue par simple découpe dans le profil PVC ou aluminium, sans modification de la fenêtre, avec protection anti-insectes incluse. Neofort BIZ monte des grilles Aereco sur demande dans toute fenêtre livrée, avec ou sans commande préalable.',
      es:'La rejilla higrorreglable Aereco es la solución de ventilación natural controlada recomendada para la carpintería moderna hermética, resolviendo la paradoja de los edificios bien aislados: las ventanas de PVC o aluminio con triple junta eliminan las corrientes de aire no deseadas pero también bloquean la renovación natural del aire, llevando a la acumulación de CO₂ y exceso de humedad. A diferencia de las rejillas de ventilación de caudal fijo o los sistemas VMC con motor que consumen energía, Aereco funciona de forma completamente pasiva — una lámina higroscópica de poliamida que se deforma proporcionalmente a la humedad relativa de la habitación, abriendo o cerrando la sección de paso sin ninguna intervención. El caudal de aire automáticamente ajustable de 5–35 m³/h garantiza que el aire se renueve exactamente cuando es necesario — más al cocinar o ducharse, menos cuando la habitación está vacía y seca — minimizando las pérdidas de calor. La atenuación acústica de 33 dB significa que la rejilla no afecta al rendimiento acústico de la ventana. La instalación se realiza mediante corte simple en el perfil PVC o aluminio, sin modificación de la ventana, con protección antiinsectos incluida. Neofort BIZ instala rejillas Aereco a pedido en cualquier ventana entregada, con o sin pedido previo.',
      it:'La griglia igroregolab. Aereco è la soluzione di ventilazione naturale controllata raccomandata per gli infissi moderni ermetici, risolvendo il paradosso degli edifici ben isolati: le finestre PVC o alluminio con guarnizioni triple eliminano le correnti d\'aria indesiderate ma bloccano anche il rinnovo naturale dell\'aria, portando ad accumulo di CO₂ e umidità eccessiva. A differenza delle griglie di ventilazione a portata fissa o dei sistemi VMC a motore che consumano energia, Aereco funziona completamente in modo passivo — una lamella igroscopica in poliammide che si deforma proporzionalmente all\'umidità relativa della stanza, aprendo o chiudendo la sezione di passaggio senza alcun intervento. La portata d\'aria automaticamente regolabile di 5–35 m³/h garantisce che l\'aria venga rinnovata esattamente quando necessario — di più durante la cottura o la doccia, di meno quando la stanza è vuota e asciutta — minimizzando le perdite di calore. L\'attenuazione acustica di 33 dB significa che la griglia non influisce sulle prestazioni acustiche della finestra. L\'installazione avviene mediante semplice intaglio nel profilo PVC o alluminio, senza modifica della finestra, con protezione anti-insetti inclusa. Neofort BIZ monta griglie Aereco su richiesta in qualsiasi finestra consegnata, con o senza ordine preventivo.',
    },
  },

  'automatizari-somfy': {
    img: '/accessories/automatizari-somfy.avif',
    color: '#7b000f',
    category: { ro:'Automatizare & Smart Home', en:'Automation & Smart Home', de:'Automatisierung & Smart Home', fr:'Automatisation & Maison Connectée', es:'Automatización & Smart Home', it:'Automazione & Casa Intelligente' },
    serie: { ro:'Somfy', en:'Somfy', de:'Somfy', fr:'Somfy', es:'Somfy', it:'Somfy' },
    breadcrumb_parent_href: '/accesorii',
    breadcrumb_parent: { ro:'Accesorii', en:'Accessories', de:'Zubehör', fr:'Accessoires', es:'Accesorios', it:'Accessori' },
    name: {
      ro:'Automatizări Somfy — Motoare și Telecomenzi pentru Rulouri, Pergole și Smart Home',
      en:'Somfy Automation — Motors and Remote Controls for Shutters, Pergolas and Smart Home',
      de:'Somfy Automatisierung — Motoren und Fernbedienungen für Rollläden, Pergolen und Smart Home',
      fr:'Automatisation Somfy — Moteurs et Télécommandes pour Volets, Pergolas et Maison Connectée',
      es:'Automatización Somfy — Motores y Mandos para Persianas, Pérgolas y Smart Home',
      it:'Automazione Somfy — Motori e Telecomandi per Tapparelle, Pergole e Casa Intelligente',
    },
    tagline: {
      ro:'Motor Somfy Oximo io pentru rulouri exterioare — silențios, cu autoreglare și compatibil TaHoma. Telecomandă radio, programare automată și control vocal prin Alexa / Google. Montaj profesional în București și Ilfov.',
      en:'Somfy Oximo io motor for exterior shutters — silent, self-adjusting and TaHoma compatible. Radio remote, automatic scheduling and voice control via Alexa / Google. Professional installation in Bucharest and Ilfov.',
      de:'Somfy Oximo io Motor für Außenrollläden — leise, selbstjustierend und TaHoma-kompatibel. Funkfernbedienung, automatische Programmierung und Sprachsteuerung via Alexa / Google. Professionelle Montage in Bukarest und Ilfov.',
      fr:'Moteur Somfy Oximo io pour volets roulants extérieurs — silencieux, auto-ajustable et compatible TaHoma. Télécommande radio, programmation automatique et contrôle vocal via Alexa / Google. Pose professionnelle à Bucarest et Ilfov.',
      es:'Motor Somfy Oximo io para persianas exteriores — silencioso, autoajustable y compatible TaHoma. Mando radio, programación automática y control por voz Alexa / Google. Instalación profesional en Bucarest e Ilfov.',
      it:'Motore Somfy Oximo io per tapparelle esterne — silenzioso, autoregolante e compatibile TaHoma. Telecomando radio, programmazione automatica e controllo vocale Alexa / Google. Installazione professionale a Bucarest e Ilfov.',
    },
    specs: {
      ro:[['Motor rulouri','Somfy Oximo io / RS100 io — 230V'],['Compatibil TaHoma','Da — control smartphone oriunde'],['Telecomandă','Situo 5 io / Telis 4 RTS — 4-16 canale'],['Motoare pergole','Somfy Pergola 50 RGS io / 60 RGS io'],['Motoare copertine','Somfy Sunea 40 io / Sunea 50 io'],['Variantă solar','RS100 io Solar — fără cablu electric'],['Smart Home','Alexa, Google, Apple HomeKit, IFTTT'],['Senzori','Sunis io — lumină / vânt / temperatură'],['Garanție','5 ani motor Somfy'],['Montaj','București, Ilfov și toată Romania'],],
      en:[['Shutter motor','Somfy Oximo io / RS100 io — 230V'],['TaHoma compatible','Yes — smartphone control anywhere'],['Remote control','Situo 5 io / Telis 4 RTS — 4–16 channels'],['Pergola motors','Somfy Pergola 50 RGS io / 60 RGS io'],['Awning motors','Somfy Sunea 40 io / Sunea 50 io'],['Solar variant','RS100 io Solar — no electrical cable'],['Smart Home','Alexa, Google, Apple HomeKit, IFTTT'],['Sensors','Sunis io — light / wind / temperature'],['Warranty','5 years Somfy motor'],['Installation','Bucharest, Ilfov and all Romania'],],
      de:[['Rollladen-Motor','Somfy Oximo io / RS100 io — 230V'],['TaHoma-kompatibel','Ja — Smartphone-Steuerung überall'],['Fernbedienung','Situo 5 io / Telis 4 RTS — 4–16 Kanäle'],['Pergola-Motoren','Somfy Pergola 50 RGS io / 60 RGS io'],['Markisen-Motoren','Somfy Sunea 40 io / Sunea 50 io'],['Solar-Variante','RS100 io Solar — ohne Elektrokabel'],['Smart Home','Alexa, Google, Apple HomeKit, IFTTT'],['Sensoren','Sunis io — Licht / Wind / Temperatur'],['Garantie','5 Jahre Somfy-Motor'],['Montage','Bukarest, Ilfov und ganz Rumänien'],],
      fr:[['Moteur volet','Somfy Oximo io / RS100 io — 230V'],['Compatible TaHoma','Oui — contrôle smartphone partout'],['Télécommande','Situo 5 io / Telis 4 RTS — 4–16 canaux'],['Moteurs pergola','Somfy Pergola 50 RGS io / 60 RGS io'],['Moteurs store','Somfy Sunea 40 io / Sunea 50 io'],['Version solaire','RS100 io Solar — sans câble électrique'],['Smart Home','Alexa, Google, Apple HomeKit, IFTTT'],['Capteurs','Sunis io — lumière / vent / température'],['Garantie','5 ans moteur Somfy'],['Pose','Bucarest, Ilfov et toute la Roumanie'],],
      es:[['Motor persiana','Somfy Oximo io / RS100 io — 230V'],['Compatible TaHoma','Sí — control smartphone en cualquier lugar'],['Mando a distancia','Situo 5 io / Telis 4 RTS — 4–16 canales'],['Motores pérgola','Somfy Pergola 50 RGS io / 60 RGS io'],['Motores toldo','Somfy Sunea 40 io / Sunea 50 io'],['Variante solar','RS100 io Solar — sin cable eléctrico'],['Smart Home','Alexa, Google, Apple HomeKit, IFTTT'],['Sensores','Sunis io — luz / viento / temperatura'],['Garantía','5 años motor Somfy'],['Instalación','Bucarest, Ilfov y toda Rumanía'],],
      it:[['Motore tapparella','Somfy Oximo io / RS100 io — 230V'],['Compatibile TaHoma','Sì — controllo smartphone ovunque'],['Telecomando','Situo 5 io / Telis 4 RTS — 4–16 canali'],['Motori pergola','Somfy Pergola 50 RGS io / 60 RGS io'],['Motori tenda','Somfy Sunea 40 io / Sunea 50 io'],['Variante solare','RS100 io Solar — senza cavo elettrico'],['Smart Home','Alexa, Google, Apple HomeKit, IFTTT'],['Sensori','Sunis io — luce / vento / temperatura'],['Garanzia','5 anni motore Somfy'],['Installazione','Bucarest, Ilfov e tutta la Romania'],],
    },
    perf: {
      ro:[['Preț motor Somfy rulouri','de la 250 EUR / motor montat'],['Telecomandă Somfy','de la 60 EUR'],['Kit TaHoma Switch','de la 180 EUR'],['Motor Somfy pergolă','de la 350 EUR / motor montat'],['Senzor vânt / lumină','de la 80 EUR'],['Garanție','5 ani — cea mai lungă din categorie'],],
      en:[['Somfy shutter motor price','from 250 EUR / installed motor'],['Somfy remote control','from 60 EUR'],['TaHoma Switch kit','from 180 EUR'],['Somfy pergola motor','from 350 EUR / installed motor'],['Wind / light sensor','from 80 EUR'],['Warranty','5 years — longest in category'],],
      de:[['Somfy Rollladen-Motor Preis','ab 250 EUR / montierter Motor'],['Somfy Fernbedienung','ab 60 EUR'],['TaHoma Switch Kit','ab 180 EUR'],['Somfy Pergola-Motor','ab 350 EUR / montierter Motor'],['Wind- / Lichtsensor','ab 80 EUR'],['Garantie','5 Jahre — längste in der Kategorie'],],
      fr:[['Prix moteur Somfy volet','à partir de 250 EUR / moteur posé'],['Télécommande Somfy','à partir de 60 EUR'],['Kit TaHoma Switch','à partir de 180 EUR'],['Moteur Somfy pergola','à partir de 350 EUR / moteur posé'],['Capteur vent / lumière','à partir de 80 EUR'],['Garantie','5 ans — la plus longue de la catégorie'],],
      es:[['Precio motor Somfy persiana','desde 250 EUR / motor instalado'],['Mando Somfy','desde 60 EUR'],['Kit TaHoma Switch','desde 180 EUR'],['Motor Somfy pérgola','desde 350 EUR / motor instalado'],['Sensor viento / luz','desde 80 EUR'],['Garantía','5 años — la más larga de la categoría'],],
      it:[['Prezzo motore Somfy tapparella','da 250 EUR / motore installato'],['Telecomando Somfy','da 60 EUR'],['Kit TaHoma Switch','da 180 EUR'],['Motore Somfy pergola','da 350 EUR / motore installato'],['Sensore vento / luce','da 80 EUR'],['Garanzia','5 anni — la più lunga della categoria'],],
    },
    advantages: {
      ro:['Motor silențios Somfy Oximo io — 2 viteze de funcționare pentru coborâre lentă/rapidă, testare 17.500 cicluri, autoreglare automată a lungimii cortinei de-a lungul anilor','Compatibilitate TaHoma completă — controlezi toate rulourile, pergoalele și copertinele din același smartphone, cu scenarii automate: la apus se închid singure','Telecomandă radio criptată pe 128 biți — frecvență 868 MHz, raza 30 m, nicio interferență cu alte sisteme, 16 milioane de coduri posibile','Motor solar RS100 io — funcționează cu panou fotovoltaic și baterie 12V, zero cabluri electrice de tras, ideal pentru renovări și ferestre cu acces dificil','Senzori Sunis io pentru automatizare completă — rulourile reacționează automat la intensitatea luminii, vânt și temperatură exterioară, fără intervenție umană','Cel mai lung termen de garanție din piața românească — 5 ani garanție motor Somfy, față de 2 ani la motoarele generice din import'],
      en:['Silent Somfy Oximo io motor — 2 operating speeds for slow/fast lowering, 17,500-cycle testing, automatic curtain length self-adjustment over the years','Full TaHoma compatibility — control all shutters, pergolas and awnings from the same smartphone, with automatic scenarios: they close automatically at sunset','128-bit encrypted radio remote — 868 MHz frequency, 30 m range, no interference with other systems, 16 million possible codes','Solar RS100 io motor — works with photovoltaic panel and 12V battery, zero electrical cables to run, ideal for renovations and hard-to-access windows','Sunis io sensors for full automation — shutters react automatically to light intensity, wind and outside temperature, no human intervention','Longest warranty in the Romanian market — 5-year Somfy motor warranty, vs. 2 years for generic imported motors'],
      de:['Leiser Somfy Oximo io Motor — 2 Betriebsgeschwindigkeiten für langsames/schnelles Absenken, 17.500-Zyklen-Testung, automatische Selbstjustierung der Vorhanglänge über die Jahre','Vollständige TaHoma-Kompatibilität — alle Rollläden, Pergolen und Markisen vom gleichen Smartphone steuern, mit automatischen Szenarien: sie schließen bei Sonnenuntergang automatisch','Funkfernbedienung mit 128-Bit-Verschlüsselung — 868-MHz-Frequenz, 30 m Reichweite, keine Interferenz mit anderen Systemen, 16 Millionen mögliche Codes','Solar RS100 io Motor — läuft mit Photovoltaik-Panel und 12V-Akku, null Elektrokabel nötig, ideal für Renovierungen und schwer zugängliche Fenster','Sunis io Sensoren für vollständige Automatisierung — Rollläden reagieren automatisch auf Lichtintensität, Wind und Außentemperatur, kein menschliches Eingreifen','Längste Garantie auf dem rumänischen Markt — 5 Jahre Somfy-Motorgarantie, gegenüber 2 Jahren für generische Importmotoren'],
      fr:['Moteur silencieux Somfy Oximo io — 2 vitesses pour descente lente/rapide, test 17 500 cycles, autoréglage automatique de la longueur du tablier au fil des ans','Compatibilité TaHoma complète — contrôlez tous les volets, pergolas et stores depuis le même smartphone, avec des scénarios automatiques : ils se ferment seuls au coucher du soleil','Télécommande radio cryptée 128 bits — fréquence 868 MHz, portée 30 m, aucune interférence avec d\'autres systèmes, 16 millions de codes possibles','Moteur solaire RS100 io — fonctionne avec panneau photovoltaïque et batterie 12V, zéro câble électrique à tirer, idéal pour rénovations et fenêtres difficiles d\'accès','Capteurs Sunis io pour automatisation complète — les volets réagissent automatiquement à l\'intensité lumineuse, au vent et à la température extérieure, sans intervention humaine','La garantie la plus longue du marché roumain — 5 ans garantie moteur Somfy, contre 2 ans pour les moteurs génériques importés'],
      es:['Motor silencioso Somfy Oximo io — 2 velocidades para bajada lenta/rápida, pruebas de 17.500 ciclos, autoajuste automático de la longitud de la cortina a lo largo de los años','Compatibilidad TaHoma completa — controla todas las persianas, pérgolas y toldos desde el mismo smartphone, con escenarios automáticos: se cierran solos al atardecer','Mando radio cifrado de 128 bits — frecuencia 868 MHz, alcance 30 m, sin interferencias con otros sistemas, 16 millones de códigos posibles','Motor solar RS100 io — funciona con panel fotovoltaico y batería de 12V, cero cables eléctricos, ideal para reformas y ventanas de difícil acceso','Sensores Sunis io para automatización completa — las persianas reaccionan automáticamente a la intensidad de luz, viento y temperatura exterior, sin intervención humana','La garantía más larga del mercado rumano — 5 años de garantía motor Somfy, frente a 2 años para los motores genéricos importados'],
      it:['Motore silenzioso Somfy Oximo io — 2 velocità operative per discesa lenta/rapida, test di 17.500 cicli, autoregolazione automatica della lunghezza del tendone nel tempo','Compatibilità TaHoma completa — controlla tutte le tapparelle, pergole e tende da sole dallo stesso smartphone, con scenari automatici: si chiudono da soli al tramonto','Telecomando radio crittografato a 128 bit — frequenza 868 MHz, portata 30 m, nessuna interferenza con altri sistemi, 16 milioni di codici possibili','Motore solare RS100 io — funziona con pannello fotovoltaico e batteria 12V, zero cavi elettrici, ideale per ristrutturazioni e finestre di difficile accesso','Sensori Sunis io per automazione completa — le tapparelle reagiscono automaticamente all\'intensità luminosa, vento e temperatura esterna, senza intervento umano','La garanzia più lunga nel mercato romeno — 5 anni garanzia motore Somfy, contro i 2 anni dei motori generici importati'],
    },
    seo_text: {
      ro:`Automatizările Somfy pentru rulouri exterioare, pergole și copertine reprezintă standardul de fiabilitate în România, cu o prezență locală de peste 20 de ani și cel mai extins ecosistem smart home din categorie. Motorul Somfy Oximo io este soluția de referință pentru motorizarea rulourilor exterioare din aluminiu sau PVC: funcționează la 230V, dispune de 2 viteze (coborâre rapidă + oprire lentă pentru minimizarea impactului), detectare automată a obstacolelor și autoreglare a lungimii cortinei pe toată durata de viață. Testarea la 17.500 de cicluri și garanția de 5 ani sunt superioare oricărui motor generic. Integrarea cu TaHoma Switch transformă orice set de rulouri într-un sistem smart home complet: rulourile se programează să reacționeze la apus de soare, temperatura interioară, intensitatea luminii sau vânt — prin senzorul Sunis io. Compatibilitatea cu Alexa, Google Home, Apple HomeKit și IFTTT asigură controlul vocal și automatizările avansate. Pentru pergole și copertine, Somfy oferă seria Pergola RGS io și Sunea io, motoare dedicate cu protecție automată la vânt. Neofort BIZ montează motoare Somfy în București, Ilfov și în toată România, cu configurare completă a telecomenzilor și a aplicației TaHoma.`,
      en:`Somfy automation systems for exterior shutters, pergolas and awnings represent the reliability standard in Romania, with a local presence of over 20 years and the most extensive smart home ecosystem in the category. The Somfy Oximo io motor is the reference solution for motorising aluminium or PVC exterior shutters: operates at 230V, features 2 speeds (fast lowering + slow stop to minimise impact), automatic obstacle detection and curtain length self-adjustment throughout its lifetime. Testing at 17,500 cycles and 5-year warranty are superior to any generic motor. Integration with TaHoma Switch transforms any set of shutters into a complete smart home system: shutters can be programmed to react to sunset, indoor temperature, light intensity or wind — via the Sunis io sensor. Compatibility with Alexa, Google Home, Apple HomeKit and IFTTT ensures voice control and advanced automations. For pergolas and awnings, Somfy offers the Pergola RGS io and Sunea io range, dedicated motors with automatic wind protection. Neofort BIZ installs Somfy motors in Bucharest, Ilfov and throughout Romania, with full remote control and TaHoma app configuration.`,
      de:`Somfy-Automatisierungssysteme für Außenrollläden, Pergolen und Markisen stellen den Zuverlässigkeitsstandard in Rumänien dar, mit einer lokalen Präsenz von über 20 Jahren und dem umfangreichsten Smart-Home-Ökosystem in der Kategorie. Der Somfy Oximo io Motor ist die Referenzlösung für die Motorisierung von Aluminium- oder PVC-Außenrollläden: funktioniert mit 230V, verfügt über 2 Geschwindigkeiten (schnelles Absenken + langsamer Stopp zur Minimierung des Aufpralls), automatische Hinderniserkennung und Selbstjustierung der Vorhanglänge über die gesamte Lebensdauer. Tests mit 17.500 Zyklen und 5 Jahre Garantie übertreffen jeden Generikmotor. Die Integration mit TaHoma Switch verwandelt jeden Rollladensatz in ein vollständiges Smart-Home-System: Rollläden können programmiert werden, auf Sonnenuntergang, Innentemperatur, Lichtintensität oder Wind zu reagieren — über den Sunis io Sensor. Neofort BIZ montiert Somfy-Motoren in Bukarest, Ilfov und ganz Rumänien.`,
      fr:`Les systèmes d'automatisation Somfy pour volets roulants extérieurs, pergolas et stores représentent le standard de fiabilité en Roumanie, avec une présence locale de plus de 20 ans et l'écosystème maison connectée le plus étendu de la catégorie. Le moteur Somfy Oximo io est la solution de référence pour motoriser les volets roulants extérieurs en aluminium ou PVC : fonctionne à 230V, dispose de 2 vitesses (descente rapide + arrêt lent pour minimiser l'impact), détection automatique des obstacles et autoréglage de la longueur du tablier pendant toute sa durée de vie. Les tests à 17 500 cycles et la garantie de 5 ans sont supérieurs à tout moteur générique. L'intégration avec TaHoma Switch transforme tout ensemble de volets en un système maison connectée complet. Neofort BIZ installe les moteurs Somfy à Bucarest, Ilfov et dans toute la Roumanie.`,
      es:`Los sistemas de automatización Somfy para persianas exteriores, pérgolas y toldos representan el estándar de fiabilidad en Rumanía, con una presencia local de más de 20 años y el ecosistema de hogar inteligente más extenso de la categoría. El motor Somfy Oximo io es la solución de referencia para motorizar persianas exteriores de aluminio o PVC: funciona a 230V, dispone de 2 velocidades (bajada rápida + parada lenta para minimizar el impacto), detección automática de obstáculos y autoajuste de la longitud de la cortina durante toda su vida útil. Las pruebas a 17.500 ciclos y la garantía de 5 años son superiores a cualquier motor genérico. La integración con TaHoma Switch transforma cualquier conjunto de persianas en un sistema smart home completo. Neofort BIZ instala motores Somfy en Bucarest, Ilfov y en toda Rumanía.`,
      it:`I sistemi di automazione Somfy per tapparelle esterne, pergole e tende da sole rappresentano lo standard di affidabilità in Romania, con una presenza locale di oltre 20 anni e il più esteso ecosistema di casa intelligente della categoria. Il motore Somfy Oximo io è la soluzione di riferimento per motorizzare tapparelle esterne in alluminio o PVC: funziona a 230V, dispone di 2 velocità (discesa rapida + fermata lenta per minimizzare l'impatto), rilevamento automatico degli ostacoli e autoregolazione della lunghezza del tendone per tutta la sua durata. I test a 17.500 cicli e la garanzia di 5 anni sono superiori a qualsiasi motore generico. L'integrazione con TaHoma Switch trasforma qualsiasi set di tapparelle in un sistema di casa intelligente completo. Neofort BIZ installa motori Somfy a Bucarest, Ilfov e in tutta la Romania.`,
    },
  },
};

const UI = {
  ro: { specs_title:'Specificații tehnice', perf_title:'Performanțe certificate', adv_title:'Avantaje principale', faq_title:'Întrebări frecvente', cta_h:'Solicitați ofertă pentru', cta_sub:'Consultanți disponibili Luni–Vineri, 10:00–18:00', cta_btn:'Cerere ofertă', cta_call:'Sună acum' },
  en: { specs_title:'Technical specifications', perf_title:'Certified performance', adv_title:'Key advantages', faq_title:'Frequently asked questions', cta_h:'Request quote for', cta_sub:'Consultants available Mon–Fri, 10:00–18:00', cta_btn:'Request quote', cta_call:'Call now' },
  de: { specs_title:'Technische Daten', perf_title:'Zertifizierte Leistungen', adv_title:'Hauptvorteile', faq_title:'Häufig gestellte Fragen', cta_h:'Angebot anfordern für', cta_sub:'Berater verfügbar Mo–Fr, 10:00–18:00', cta_btn:'Angebot anfordern', cta_call:'Anrufen' },
  fr: { specs_title:'Caractéristiques techniques', perf_title:'Performances certifiées', adv_title:'Avantages clés', faq_title:'Questions fréquentes', cta_h:'Demander un devis pour', cta_sub:'Conseillers disponibles Lun–Ven, 10h–18h', cta_btn:'Demander un devis', cta_call:'Appeler' },
  es: { specs_title:'Especificaciones técnicas', perf_title:'Rendimiento certificado', adv_title:'Ventajas clave', faq_title:'Preguntas frecuentes', cta_h:'Solicitar presupuesto para', cta_sub:'Consultores disponibles Lun–Vie, 10:00–18:00', cta_btn:'Pedir presupuesto', cta_call:'Llamar' },
  it: { specs_title:'Specifiche tecniche', perf_title:'Prestazioni certificate', adv_title:'Vantaggi principali', faq_title:'Domande frequenti', cta_h:'Richiedi preventivo per', cta_sub:'Consulenti disponibili Lun–Ven, 10:00–18:00', cta_btn:'Richiedi preventivo', cta_call:'Chiama ora' },
};

export async function generateStaticParams() {
  const params = [];
  for (const locale of LOCALES)
    for (const [canonical, slugs] of Object.entries(SLUG_MAP))
      params.push({ locale, slug: slugs[locale] || canonical });
  return params;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const canonical = REVERSE[slug] || slug;
  const product   = PRODUCTS[canonical];
  if (!product) return { title: 'Produs · Neofort BIZ' };
  const name      = product.name[locale] || product.name.ro;
  // v270: titlu <= 60 car. si descriere <= 150 car., fraza completa, din data/productMeta.js.
  const meta      = PRODUCT_META[canonical];
  const title     = meta?.title?.[locale] || `${name} · Neofort BIZ`;
  const desc      = meta?.desc?.[locale]  || (product.seo_text[locale] || product.seo_text.ro).slice(0, 160);
  const localSlug = SLUG_MAP[canonical]?.[locale] || slug;
  const altSlug   = (l) => SLUG_MAP[canonical]?.[l] || canonical;
  return {
    title,
    description: desc,
    keywords: `${name} · Neofort BIZ · tâmplărie PVC Salamander · aluminiu Alumil · București`,
    robots: { index:true, follow:true, googleBot:{ index:true, follow:true, 'max-image-preview':'large', 'max-snippet':-1 } },
    alternates: {
      canonical: `${BASE}/${locale}/${(ACC_SEG[locale]||'accesorii')}/${localSlug}`,
      languages: Object.fromEntries([
        ...LOCALES.map(l => [l, `${BASE}/${l}/${(ACC_SEG[l]||'accesorii')}/${altSlug(l)}`]),
        ['x-default', `${BASE}/ro/${(ACC_SEG['ro']||'accesorii')}/${altSlug('ro')}`],
      ]),
    },
    openGraph: {
      type:'website', url:`${BASE}/${locale}/${(ACC_SEG[locale]||'accesorii')}/${localSlug}`,
      siteName:'Neofort BIZ', title, description: desc,
      images:[{ url:`${BASE}${product.img.replace('.avif','.jpg')}`, width:800, height:600, alt:name, type:'image/jpeg' }],
    },
    twitter: { card:'summary_large_image', site:'@NeofortBIZ', title, description: desc, images:[{ url:`${BASE}${product.img.replace('.avif','.jpg')}`, width:800, height:600 }] },
  }
}

export default async function AccesorieProductPage({ params }) {
  const { locale, slug } = await params;
  const canonical = REVERSE[slug] || slug;
  const product   = PRODUCTS[canonical];
  if (!product) notFound();

  const ui      = UI[locale]    || UI.ro;
  const name    = product.name[locale]       || product.name.ro;
  const tagline = product.tagline[locale]    || product.tagline.ro;
  const cat     = product.category[locale]   || product.category.ro;
  const serie   = product.serie[locale]      || product.serie.ro;
  const specs   = product.specs[locale]      || product.specs.ro;
  const perf    = product.perf[locale]       || product.perf.ro;
  const adv     = product.advantages[locale] || product.advantages.ro;
  const seotxt  = product.seo_text[locale]   || product.seo_text.ro;
  const bpLabel = product.breadcrumb_parent[locale] || product.breadcrumb_parent.ro;
  const c       = product.color;

  // v273 — punctul 7 din audit: tabelul de performanta (perf) era vizibil pe pagina
  // dar nu intra deloc in structured data. Acum intra, dedus dupa nume: ce exista
  // deja in specs nu se repeta, iar la nume comun cu valoare diferita castiga specs.
  const perfExtra = perf.filter(([pn]) => !specs.some(([sn]) => sn === pn));
  // v272 — identitate de entitate pentru Product (punctul 4 din audit).
  // Pana acum Product nu avea @id, url, category sau inLanguage, iar `seller` era
  // un nod Organization duplicat, fara @id — deci nu se lega de nodul LocalBusiness
  // definit in app/[locale]/page.js la ${BASE}/#localbusiness, unde stau vatID, geo,
  // areaServed, aggregateRating si knowsAbout. Un crawler LLM vedea doua firme fara
  // legatura. Acum seller e o REFERINTA prin @id catre acel nod unic.
  const pageUrl = `${BASE}/${locale}/${(ACC_SEG[locale]||'accesorii')}/${SLUG_MAP[canonical]?.[locale] || slug}`;
  // isSimilarTo: celelalte produse din aceeasi familie — ancoreaza comparatiile LLM
  const siblings = Object.keys(PRODUCTS).filter(k => k !== canonical).map(k => ({
    '@type':'Product',
    name: PRODUCTS[k].name[locale] || PRODUCTS[k].name.ro,
    url: `${BASE}/${locale}/${(ACC_SEG[locale]||'accesorii')}/${SLUG_MAP[k]?.[locale] || k}`,
  }));
  // v274b — FAQ pe paginile de produs (punctul 3 din audit).
  const faqItems = PRODUCT_FAQ[canonical]?.[locale] || PRODUCT_FAQ[canonical]?.ro || [];
  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    'mainEntity': faqItems.map(([q, a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a },
    })),
  } : null;
  const schema = {
    '@context':'https://schema.org', '@type':'Product',
    '@id': `${pageUrl}#product`,
    url: pageUrl,
    category: cat,
    inLanguage: locale,
    name, description: seotxt, image: `${BASE}${product.img}`,
    brand: { '@type':'Brand', name: (PRODUCT_BRAND[canonical]?.brand || 'Neofort BIZ') },
    ...(PRODUCT_BRAND[canonical] ? { manufacturer: { '@type':'Organization', name: PRODUCT_BRAND[canonical].manufacturer, addressCountry: PRODUCT_BRAND[canonical].country } } : {}),
    seller: { '@id': `${BASE}/#localbusiness` },

    additionalProperty: [...specs, ...perfExtra].map(([n,v]) => ({ '@type':'PropertyValue', name:n, value:v })),
    isSimilarTo: siblings,
  };

  // ── BreadcrumbList ──
  const parentSeg_accesorii = {'ro': 'accesorii', 'en': 'accessories', 'de': 'zubehoer', 'fr': 'accessoires', 'es': 'accesorios', 'it': 'accessori'};
  const parentLabel_accesorii = {'ro': 'Accesorii', 'en': 'Accessories', 'de': 'Zubehör', 'fr': 'Accessoires', 'es': 'Accesorios', 'it': 'Accessori'};
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    'itemListElement': [
      { '@type':'ListItem', 'position':1, 'name':'Neofort BIZ', 'item': BASE },
      { '@type':'ListItem', 'position':2, 'name': parentLabel_accesorii[locale]||'Neofort BIZ', 'item': `${BASE}/${locale}/${parentSeg_accesorii[locale]}` },
      { '@type':'ListItem', 'position':3, 'name': name, 'item': `${BASE}/${locale}/${(ACC_SEG[locale]||'accesorii')}/${SLUG_MAP[canonical]?.[locale]||slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>}
      <style>{`
        .prd-bc{font-size:.76rem;letter-spacing:.12em;text-transform:uppercase;color:#141414;display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:24px}
        .prd-bc a{color:#141414;text-decoration:none}.prd-bc a:hover{color:#151515}.prd-bc span{color:#141414}
        .prd-hero{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
        .prd-img-wrap{position:relative;background:#f8f8f6;border:1px solid #e8e8e4;display:flex;align-items:center;justify-content:center;padding:32px;min-height:320px}
        .prd-img{max-width:100%;max-height:340px;width:auto;height:auto;object-fit:contain;display:block}
        .prd-badge{position:absolute;top:12px;left:12px;font-family:'Barlow Condensed',sans-serif;font-size:.52rem;letter-spacing:.2em;text-transform:uppercase;font-weight:700;padding:4px 10px}
        .prd-cat{font-family:'Barlow Condensed',sans-serif;font-size:.57rem;letter-spacing:.2em;text-transform:uppercase;font-weight:600;margin-bottom:10px}
        .prd-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:clamp(1.4rem,3vw,2rem);color:#151515;line-height:1.15;margin:0 0 14px}
        .prd-tagline{font-size:.88rem;color:#2a2a2a;line-height:1.6;margin:0 0 28px;border-left:3px solid;padding-left:14px}
        .prd-sec{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.74rem;letter-spacing:.22em;text-transform:uppercase;color:#151515;margin:0 0 14px}
        .prd-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#e8e8e4;border:1px solid #e8e8e4;margin-bottom:28px}
        .prd-row{background:#fff;display:flex;justify-content:space-between;gap:8px;padding:7px 10px;font-size:.73rem}
        .prd-row strong{color:#151515;font-weight:600;flex-shrink:0}.prd-row span{color:#2a2a2a;text-align:right}
        .prd-perf{width:100%;border-collapse:collapse;margin-bottom:28px;font-size:.73rem}
        .prd-perf tr{border-bottom:1px solid #f0f0ee}.prd-perf td{padding:7px 8px;font-size:.82rem}
        .prd-perf td:first-child{color:#151515;width:55%;font-weight:400}.prd-perf td:last-child{font-weight:700;color:#151515;text-align:right}
        .prd-adv{list-style:none;padding:0;margin:0 0 28px}
        .prd-adv li{font-size:.8rem;color:#181818;padding:8px 0 8px 20px;border-bottom:1px solid #f5f5f3;position:relative;line-height:1.5}
        .prd-adv li:last-child{border-bottom:none}
        .prd-cta-box{background:#111;padding:24px;position:sticky;top:100px}
        .prd-cta-hl{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.74rem;letter-spacing:.2em;text-transform:uppercase;color:#151515;margin-bottom:8px}
        .prd-cta-nm{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.05rem;color:#fff;margin-bottom:16px;line-height:1.2}
        .prd-cta-sub{font-size:.84rem;color:#151515;margin-bottom:20px}
        .prd-cta-a{display:block;width:100%;padding:12px;text-align:center;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;margin-bottom:10px;transition:all .18s}
        .prd-cta-pri{color:#0e0e0e;background:#fff}.prd-cta-pri:hover{background:#f0f0f0}
        .prd-cta-sec{color:#fff;border:1px solid #333}.prd-cta-sec:hover{border-color:#404040}
        .prd-seo{font-size:.82rem;color:#1e1e1e;line-height:1.8;padding:32px 0;border-top:1px solid #e8e8e4;margin-top:8px}
        .prd-lower{display:grid;grid-template-columns:1fr 260px;gap:48px;align-items:start;margin-top:48px}
        .prd-mob{display:none;position:fixed;bottom:0;left:0;right:0;background:#111;padding:12px 16px;z-index:100;gap:10px;border-top:1px solid #222}
        .prd-mob a{flex:1;padding:11px 8px;text-align:center;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;transition:all .18s}
        .prd-mob-pri{background:#fff;color:#0e0e0e}.prd-mob-sec{border:1px solid #333;color:#fff}
        @media(max-width:900px){.prd-hero{grid-template-columns:1fr;gap:24px}.prd-lower{grid-template-columns:1fr}.prd-cta-box{display:none}.prd-grid{grid-template-columns:1fr}.prd-mob{display:flex}body{padding-bottom:70px}}
        @media(max-width:600px){.prd-title{font-size:1.4rem}.prd-img-wrap{min-height:220px;padding:16px}}
      `}</style>

      <div className="prd-mob">
        <Link href="/contact" className="prd-mob-pri">{ui.cta_btn}</Link>
        <a href="tel:+40752443435" className="prd-mob-sec">{ui.cta_call}</a>
      </div>

      <div className="container mx-auto px-6" style={{paddingTop:'40px',paddingBottom:'80px'}}>
        <nav className="prd-bc" aria-label="breadcrumb">
          <Link href="/">Neofort BIZ</Link>
          <span>·</span>
          <Link href={product.breadcrumb_parent_href}>{bpLabel}</Link>
          <span>·</span>
          <span style={{color:'#151515'}}>{serie}</span>
        </nav>

        <div className="prd-hero">
          <div className="prd-img-wrap">
            <img src={product.img} alt={name} className="prd-img" loading="eager"/>
            <span className="prd-badge" style={{color:c,background:`${c}18`,border:`1px solid ${c}30`}}>{serie}</span>
          </div>
          <div>
            <p className="prd-cat" style={{color:c}}>{cat}</p>
            <h1 className="prd-title">{name}</h1>
            <p className="prd-tagline" style={{borderColor:c}}>{tagline}</p>
            <p className="prd-sec">{ui.specs_title}</p>
            <div className="prd-grid">
              {specs.map(([k,v]) => (
                <div key={k} className="prd-row"><strong>{k}</strong><span>{v}</span></div>
              ))}
            </div>
          </div>
        </div>

        <div className="prd-lower">
          <div>
            <p className="prd-sec" style={{marginTop:0}}>{ui.perf_title}</p>
            <table className="prd-perf">
              <tbody>
                {perf.map(([k,v]) => (
                  <tr key={k}><td>{k}</td><td style={{color:c}}>{v}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="prd-sec">{ui.adv_title}</p>
            <ul className="prd-adv">
              {adv.map((a,i) => (
                <li key={i}>
                  <span style={{position:'absolute',left:0,top:'14px',width:'8px',height:'2px',background:c,display:'block'}}/>
                  {a}
                </li>
              ))}
            </ul>
            <div className="prd-seo"><p>{seotxt}</p></div>
            <FaqAccordion items={faqItems} title={ui.faq_title} />
          </div>
          <div className="prd-cta-box">
            <p className="prd-cta-hl">{ui.cta_h}</p>
            <p className="prd-cta-nm">{name}</p>
            <p className="prd-cta-sub">{ui.cta_sub}</p>
            <Link href="/contact" className="prd-cta-a prd-cta-pri">{ui.cta_btn}</Link>
            <a href="tel:+40752443435" className="prd-cta-a prd-cta-sec" style={{fontSize:'.6rem',whiteSpace:'nowrap'}}>{ui.cta_call} +40 752 443 435</a>
          </div>
        </div>
      </div>

      {/* BLOG LINKS — doar pentru Somfy */}
      {canonical === 'automatizari-somfy' && (() => {
        const BLOG_SLUGS = {
          ro: ['somfy-rulouri-motoare-exterioare','somfy-automatizare-pergole-copertine','somfy-tahoma-smart-home-romania'],
          en: ['somfy-shutter-motors','somfy-pergola-awning-automation','somfy-tahoma-smart-home-bucharest'],
          de: ['somfy-rolllaeden-motoren','somfy-pergola-markisen-automatisierung','somfy-tahoma-smart-home-bukarest'],
          fr: ['somfy-moteurs-volets','somfy-automatisation-pergola-store','somfy-tahoma-maison-connectee-bucarest'],
          es: ['somfy-motores-persianas','somfy-automatizacion-pergola-toldo','somfy-tahoma-hogar-inteligente-bucarest'],
          it: ['somfy-motori-tapparelle','somfy-automazione-pergola-tenda','somfy-tahoma-casa-intelligente-bucarest'],
        };
        const BLOG_TITLES = {
          ro: ['Motoare Somfy pentru rulouri — Ghid 2026','Automatizare Somfy pergole și copertine — Ghid 2026','Somfy TaHoma Smart Home în România 2026'],
          en: ['Somfy motors for shutters — Guide 2026','Somfy automation for pergolas & awnings — Guide 2026','Somfy TaHoma Smart Home in Romania 2026'],
          de: ['Somfy Motoren für Rollläden — Ratgeber 2026','Somfy Automatisierung Pergolen & Markisen — Ratgeber 2026','Somfy TaHoma Smart Home in Rumänien 2026'],
          fr: ['Moteurs Somfy pour volets — Guide 2026','Automatisation Somfy pergolas & stores — Guide 2026','Somfy TaHoma Maison connectée en Roumanie 2026'],
          es: ['Motores Somfy para persianas — Guía 2026','Automatización Somfy pérgolas y toldos — Guía 2026','Somfy TaHoma Hogar inteligente en Rumanía 2026'],
          it: ['Motori Somfy per tapparelle — Guida 2026','Automazione Somfy pergole e tende — Guida 2026','Somfy TaHoma Casa intelligente in Romania 2026'],
        };
        const BLOG_SECTION_LABEL = { ro:'Ghiduri & Articole', en:'Guides & Articles', de:'Ratgeber & Artikel', fr:'Guides & Articles', es:'Guías & Artículos', it:'Guide & Articoli' };
        const BLOG_READ = { ro:'Citește ghidul →', en:'Read the guide →', de:'Ratgeber lesen →', fr:'Lire le guide →', es:'Leer la guía →', it:'Leggi la guida →' };
        const slugs  = BLOG_SLUGS[locale]  || BLOG_SLUGS.ro;
        const titles = BLOG_TITLES[locale] || BLOG_TITLES.ro;
        const label  = BLOG_SECTION_LABEL[locale] || BLOG_SECTION_LABEL.ro;
        const read   = BLOG_READ[locale] || BLOG_READ.ro;
        return (
          <div className="container mx-auto px-6" style={{paddingBottom:'64px'}}>
            <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'.58rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#141414',marginBottom:'20px'}}>{label}</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'16px'}}>
              {slugs.map((slug, i) => (
                <Link key={slug} href={`/blog/${slug}`}
                  style={{display:'block',padding:'20px',border:'1px solid #e8e8e4',borderTop:`2px solid #d4001a`,textDecoration:'none',background:'#fff'}}>
                  <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,fontSize:'.88rem',color:'#151515',lineHeight:1.3,margin:'0 0 12px'}}>{titles[i]}</p>
                  <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'.58rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#7b000f'}}>{read}</span>
                </Link>
              ))}
            </div>
          </div>
        );
      })()}
    </>
  );
}
