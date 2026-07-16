const tours = [
  {
    id: "malaga",
    city: "Málaga",
    title: "Málaga Centro: sporen van zon, steen en zee",
    price: "€4,49",
    duration: "120 min",
    distance: "3,2 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een interactieve wandeling door het historische centrum, langs de kathedraal, Alcazaba, Picasso-sporen en de haven.",
    stops: [
      {
        title: "Begin op Plaza de la Constitución",
        place: "Plaza de la Constitución",
        coordinates: { lat: 36.72121, lng: -4.42154 },
        assignment: "Kijk rond en zoek drie details die laten zien dat dit plein al eeuwen een ontmoetingsplek is.",
        question: "Welk detail voelt het oudst: steen, gevel, straatpatroon of iets anders?",
        hint: "Let op de randen van het plein, niet alleen op het midden.",
        choices: [
          {
            text: "De historische gevels en het straatpatroon rond het plein",
            correct: true,
            feedback: "Precies. Het plein lees je vooral aan de randen: gevels, doorgangen en hoe straten erop uitkomen.",
          },
          {
            text: "De moderne winkelpuien",
            correct: false,
            feedback: "Die vallen op, maar vertellen minder over de oudste laag van het plein.",
          },
          {
            text: "Alleen de terrassen in het midden",
            correct: false,
            feedback: "Terrassen laten zien hoe het plein nu gebruikt wordt, maar kijk ook naar de vaste stadsstructuur.",
          },
        ],
      },
      {
        title: "Lees de kathedraal",
        place: "Catedral de Málaga",
        coordinates: { lat: 36.72027, lng: -4.41906 },
        assignment: "Loop langzaam langs de buitenkant en zoek het verschil tussen de twee torens.",
        question: "Waarom denk je dat de kathedraal de bijnaam La Manquita kreeg?",
        hint: "La Manquita betekent ongeveer: de eenarmige vrouw.",
        choices: [
          {
            text: "Omdat één toren onafgebouwd bleef",
            correct: true,
            feedback: "Klopt. De bijnaam verwijst naar de ontbrekende of onafgemaakte tweede toren.",
          },
          {
            text: "Omdat de kathedraal maar één ingang heeft",
            correct: false,
            feedback: "Logische gok, maar de bijnaam gaat niet over de ingang. Kijk omhoog naar de torens.",
          },
          {
            text: "Omdat het gebouw vroeger een ziekenhuis was",
            correct: false,
            feedback: "Nee, de bijnaam komt uit de vorm van het gebouw zelf, niet uit een vroegere functie.",
          },
        ],
      },
      {
        title: "Romeins spoor zoeken",
        place: "Teatro Romano",
        coordinates: { lat: 36.72116, lng: -4.41666 },
        assignment: "Zoek een plek waar je tegelijk Romeinse resten en Moorse muren kunt zien.",
        question: "Welke laag van de stad valt jou het meest op?",
        hint: "Draai je rug niet te snel naar de heuvel achter het theater.",
        choices: [
          {
            text: "Romeinse en Moorse lagen liggen hier letterlijk naast elkaar",
            correct: true,
            feedback: "Ja. Dit punt werkt zo goed omdat je meerdere tijdlagen tegelijk kunt zien.",
          },
          {
            text: "Hier zie je vooral moderne hoogbouw",
            correct: false,
            feedback: "Moderne stad is dichtbij, maar deze stop draait juist om oudere lagen.",
          },
          {
            text: "Dit is vooral een winkelstraat uit de 20e eeuw",
            correct: false,
            feedback: "Niet helemaal. Kijk naar het theater en de vesting erboven.",
          },
        ],
      },
      {
        title: "Kijk als een verdediger",
        place: "Alcazaba ingang",
        coordinates: { lat: 36.72137, lng: -4.41617 },
        assignment: "Stel je voor dat je de stad moest beschermen. Zoek drie redenen waarom deze plek slim gekozen is.",
        question: "Wat helpt hier meer: hoogte, zicht, muren of routecontrole?",
        hint: "Kijk naar de verbinding tussen heuvel, stad en haven.",
        choices: [
          {
            text: "De combinatie van hoogte, zicht en controle over routes",
            correct: true,
            feedback: "Goed gezien. De kracht van deze plek zit juist in de combinatie, niet in één los element.",
          },
          {
            text: "Alleen de drukte van de stad",
            correct: false,
            feedback: "Drukte zegt iets over nu, maar verdediging ging vooral over zicht en controle.",
          },
          {
            text: "Omdat de muren laag en open zijn",
            correct: false,
            feedback: "Kijk nog eens naar de positie en opbouw: afsluiten en vertragen waren juist belangrijk.",
          },
        ],
      },
      {
        title: "Picasso zonder museumkaart",
        place: "Plaza de la Merced",
        coordinates: { lat: 36.72309, lng: -4.41705 },
        assignment: "Zoek op het plein naar verwijzingen naar Picasso en noteer wat de stad met hem wil uitstralen.",
        question: "Wordt Picasso hier vooral als kunstenaar, inwoner of symbool gebruikt?",
        hint: "Kijk naar beelden, gevels en toeristische routes rondom het plein.",
        choices: [
          {
            text: "Als kunstenaar én als herkenbaar symbool van Málaga",
            correct: true,
            feedback: "Mooi. De stad gebruikt Picasso zowel historisch als herkenbaar merkpunt.",
          },
          {
            text: "Alleen als voetballer van de stad",
            correct: false,
            feedback: "Nee, deze verwijzingen gaan duidelijk over kunst, geboorteplaats en stadsidentiteit.",
          },
          {
            text: "Vooral als onbekende reiziger",
            correct: false,
            feedback: "Niet echt. Picasso is hier juist een van de bekendste namen die Málaga kan claimen.",
          },
        ],
      },
      {
        title: "Eindig aan de haven",
        place: "Muelle Uno",
        coordinates: { lat: 36.71664, lng: -4.41464 },
        assignment: "Kijk terug richting stad en zoek hoe oud Málaga en nieuw Málaga elkaar hier raken.",
        question: "Wat voelt hier het meest modern, en wat blijft duidelijk historisch?",
        hint: "Vergelijk de looproute, het water, de skyline en de vestingmuur.",
        choices: [
          {
            text: "De havenpromenade voelt modern, terwijl de stad en vesting historisch blijven",
            correct: true,
            feedback: "Precies. Dit eindpunt laat de overgang tussen oude stad en nieuwe waterfront goed zien.",
          },
          {
            text: "Alles voelt hier middeleeuws",
            correct: false,
            feedback: "Er zijn historische zichtlijnen, maar de havenzone zelf is juist sterk vernieuwd.",
          },
          {
            text: "Er is geen verschil tussen oud en nieuw",
            correct: false,
            feedback: "Kijk nog eens naar materiaal, functies en skyline. Het contrast is juist de les van deze stop.",
          },
        ],
      },
    ],
  },
  {
    id: "dusseldorf",
    city: "Düsseldorf",
    title: "Düsseldorf Altstadt: Rijn, macht en moderne lijnen",
    price: "€4,49",
    duration: "120 min",
    distance: "4,1 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een stadswandeling van het Rathaus en de Rijn naar Königsallee, Hofgarten en de Rheinturm.",
    stops: [
      {
        title: "Start op de Marktplatz",
        place: "Marktplatz en Rathaus",
        coordinates: { lat: 51.2256, lng: 6.7712 },
        assignment: "Kijk naar het stadhuis en het ruiterstandbeeld. Zoek twee details die macht of bestuur uitstralen.",
        question: "Waarom ligt een stadhuis vaak aan een centraal plein?",
        hint: "Denk aan zichtbaarheid, bijeenkomsten en handel.",
        choices: [
          {
            text: "Omdat bestuur zichtbaar moest zijn op een plek waar mensen samenkwamen",
            correct: true,
            feedback: "Klopt. Het plein werkte als podium voor bestuur, handel en publieke gebeurtenissen.",
          },
          {
            text: "Omdat een plein altijd de stilste plek van de stad is",
            correct: false,
            feedback: "Juist niet. Centrale pleinen waren vaak druk, en dat maakte ze belangrijk.",
          },
          {
            text: "Omdat stadsbestuur vroeger vooral buiten de stad zat",
            correct: false,
            feedback: "Nee, het stadhuis hoorde juist midden in het stedelijke leven.",
          },
        ],
      },
      {
        title: "Zoek de oude stad aan de Rijn",
        place: "Burgplatz en Schlossturm",
        coordinates: { lat: 51.2277, lng: 6.771 },
        assignment: "Vergelijk de open ruimte aan de Rijn met de smalle straten achter je.",
        question: "Wat vertelt Burgplatz vooral over Düsseldorf?",
        hint: "Let op de overgang tussen rivier, plein en oude stad.",
        choices: [
          {
            text: "De stad groeide rond rivierhandel, verdediging en ontmoeting",
            correct: true,
            feedback: "Precies. Je ziet hier tegelijk rivier, oude stad en bestuurlijke geschiedenis.",
          },
          {
            text: "De stad is pas rond moderne kantoren ontstaan",
            correct: false,
            feedback: "Düsseldorf heeft moderne delen, maar deze plek laat oudere lagen zien.",
          },
          {
            text: "De Rijn speelde hier nauwelijks een rol",
            correct: false,
            feedback: "Kijk naar de ligging: de Rijn is juist een hoofdreden dat deze plek belangrijk werd.",
          },
        ],
      },
      {
        title: "Loop langs het water",
        place: "Rheinuferpromenade",
        coordinates: { lat: 51.226, lng: 6.769 },
        assignment: "Zoek hoe de promenade de stad losmaakt van autoverkeer en dichter bij de rivier brengt.",
        question: "Waarom voelt een brede rivierpromenade vaak als een nieuw stadsplein?",
        hint: "Let op lopen, kijken, zitten en langzaam bewegen.",
        choices: [
          {
            text: "Omdat mensen er kunnen wandelen, pauzeren en de stad vanaf afstand zien",
            correct: true,
            feedback: "Goed gezien. De promenade is tegelijk route, rustplek en uitzichtpunt.",
          },
          {
            text: "Omdat er geen zicht op de stad is",
            correct: false,
            feedback: "Juist het zicht op stad en rivier maakt de promenade sterk.",
          },
          {
            text: "Omdat rivieren alleen voor scheepvaart bestaan",
            correct: false,
            feedback: "Scheepvaart is belangrijk, maar moderne waterfronts worden ook publieke ruimtes.",
          },
        ],
      },
      {
        title: "Lees de Königsallee",
        place: "Königsallee",
        coordinates: { lat: 51.2245, lng: 6.7782 },
        assignment: "Kijk naar de gracht, bomen en winkels. Zoek wat hier luxe en rust tegelijk maakt.",
        question: "Welk element maakt deze winkelstraat opvallend anders dan een gewone winkelstraat?",
        hint: "Kijk niet alleen naar de etalages.",
        choices: [
          {
            text: "De combinatie van gracht, bomenrijen en brede wandelruimte",
            correct: true,
            feedback: "Ja. De straat verkoopt niet alleen winkels, maar ook sfeer en ruimte.",
          },
          {
            text: "Dat er helemaal geen winkels zijn",
            correct: false,
            feedback: "Er zijn juist veel winkels, maar de ruimtelijke opzet maakt het bijzonder.",
          },
          {
            text: "Dat de straat geen groen gebruikt",
            correct: false,
            feedback: "Kijk naar de bomen en de gracht. Groen is hier onderdeel van de uitstraling.",
          },
        ],
      },
      {
        title: "Rust in de Hofgarten",
        place: "Hofgarten",
        coordinates: { lat: 51.229, lng: 6.7801 },
        assignment: "Zoek een zichtlijn waar park en stad elkaar raken.",
        question: "Waarom zijn stadsparken belangrijk in drukke centra?",
        hint: "Denk aan tempo, geluid en oriëntatie.",
        choices: [
          {
            text: "Ze geven rust, koelte en ruimte midden in de stad",
            correct: true,
            feedback: "Precies. Een park verandert hoe je een stad ervaart, niet alleen hoe hij eruitziet.",
          },
          {
            text: "Ze maken een centrum altijd minder toegankelijk",
            correct: false,
            feedback: "Meestal juist toegankelijker en prettiger, zeker voor wandelaars.",
          },
          {
            text: "Ze zijn alleen bedoeld als versiering",
            correct: false,
            feedback: "Een park is mooi, maar heeft ook sociale, klimatologische en ruimtelijke functies.",
          },
        ],
      },
      {
        title: "Eindig bij de skyline",
        place: "Rheinturm",
        coordinates: { lat: 51.2179, lng: 6.7616 },
        assignment: "Kijk naar de toren en de MedienHafen. Zoek hoe Düsseldorf hier moderner wordt.",
        question: "Wat laat de Rheinturm vooral zien?",
        hint: "Vergelijk deze plek met de Altstadt aan het begin.",
        choices: [
          {
            text: "De stad gebruikt architectuur en hoogte om een moderne identiteit te tonen",
            correct: true,
            feedback: "Klopt. Dit eindpunt laat een heel andere laag van Düsseldorf zien.",
          },
          {
            text: "Dat de oude stad hier volledig verdwenen is",
            correct: false,
            feedback: "Niet helemaal. De moderne laag staat naast de oude, niet in plaats van alles.",
          },
          {
            text: "Dat rivieren steden nooit veranderen",
            correct: false,
            feedback: "Juist aan de Rijn zie je hoe stad, haven en skyline blijven veranderen.",
          },
        ],
      },
    ],
  },
  {
    id: "keulen",
    city: "Keulen",
    title: "Keulen Centrum: dom, Rijn en verborgen stadslagen",
    price: "€4,49",
    duration: "130 min",
    distance: "4,4 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Ontdek Keulen via de Dom, de Rijnbrug, oude pleinen, stadspoorten en de moderne havenrand.",
    stops: [
      {
        title: "Begin bij de Dom",
        place: "Kölner Dom",
        coordinates: { lat: 50.9413, lng: 6.9583 },
        assignment: "Loop een stukje achteruit en kijk hoe de Dom de ruimte om zich heen domineert.",
        question: "Waarom werkt de Dom zo sterk als herkenningspunt?",
        hint: "Let op hoogte, vorm en zichtbaarheid vanuit meerdere richtingen.",
        choices: [
          {
            text: "Door de hoogte, donkere steen en duidelijke torens",
            correct: true,
            feedback: "Precies. De Dom is niet alleen een gebouw, maar ook een oriëntatiepunt.",
          },
          {
            text: "Omdat hij bijna onzichtbaar is vanaf het plein",
            correct: false,
            feedback: "Juist niet. Hij vult het blikveld zodra je dichtbij bent.",
          },
          {
            text: "Omdat hij vooral laag en breed is",
            correct: false,
            feedback: "De verticale kracht van de torens is juist wat je meteen merkt.",
          },
        ],
      },
      {
        title: "Tel de slotjes",
        place: "Hohenzollernbrücke",
        coordinates: { lat: 50.9419, lng: 6.9656 },
        assignment: "Zoek hoe reizigers, treinen en liefdessloten dezelfde brug op heel verschillende manieren gebruiken.",
        question: "Wat maakt deze brug meer dan alleen infrastructuur?",
        hint: "Kijk naar gebruik, ritueel en uitzicht.",
        choices: [
          {
            text: "Hij is tegelijk spoorverbinding, uitzichtpunt en plek voor persoonlijke rituelen",
            correct: true,
            feedback: "Mooi. De brug is praktisch, maar ook emotioneel en toeristisch geladen.",
          },
          {
            text: "Hij wordt alleen door auto’s gebruikt",
            correct: false,
            feedback: "Nee, let op treinen, voetgangers en de slotjes.",
          },
          {
            text: "Hij heeft geen relatie met de stad",
            correct: false,
            feedback: "Vanaf de brug zie je juist hoe sterk de stad aan de Rijn hangt.",
          },
        ],
      },
      {
        title: "Zoek het oude pleinleven",
        place: "Alter Markt",
        coordinates: { lat: 50.9386, lng: 6.9603 },
        assignment: "Kijk naar gevels, terrassen en doorgangen. Zoek waar handel en ontmoeting zichtbaar blijven.",
        question: "Wat verraadt dat dit plein lang een ontmoetingsplek is geweest?",
        hint: "Let op schaal, randen en routes naar het plein.",
        choices: [
          {
            text: "De omsloten ruimte met veel toegangen en actieve gevels",
            correct: true,
            feedback: "Ja. Zo’n plein werkt doordat mensen er makkelijk aankomen, blijven hangen en weer doorlopen.",
          },
          {
            text: "Dat er geen gebouwen omheen staan",
            correct: false,
            feedback: "De randen zijn juist belangrijk voor het pleinleven.",
          },
          {
            text: "Dat het volledig losstaat van de oude stad",
            correct: false,
            feedback: "Nee, het plein ligt juist verweven met de historische binnenstad.",
          },
        ],
      },
      {
        title: "Kijk naar bestuur in detail",
        place: "Historisches Rathaus",
        coordinates: { lat: 50.9389, lng: 6.9594 },
        assignment: "Zoek beelden, torens of versieringen die iets vertellen over status.",
        question: "Waarom versierden steden hun raadhuizen zo rijk?",
        hint: "Denk aan trots, macht en zelfstandigheid.",
        choices: [
          {
            text: "Om stedelijke rijkdom en politieke betekenis zichtbaar te maken",
            correct: true,
            feedback: "Klopt. Architectuur was ook communicatie: kijk wat wij als stad kunnen.",
          },
          {
            text: "Omdat niemand het gebouw mocht herkennen",
            correct: false,
            feedback: "Het moest juist herkenbaar en indrukwekkend zijn.",
          },
          {
            text: "Omdat bestuur vroeger niets met steden te maken had",
            correct: false,
            feedback: "Steden bestuurden juist veel zelf, en dat wilden ze tonen.",
          },
        ],
      },
      {
        title: "Vind de stadspoort",
        place: "Eigelsteintorburg",
        coordinates: { lat: 50.9492, lng: 6.9574 },
        assignment: "Loop om de poort heen en stel je voor waar de oude stadsgrens liep.",
        question: "Wat vertelt een stadspoort over middeleeuwse steden?",
        hint: "Denk aan bescherming, toegang en controle.",
        choices: [
          {
            text: "Wie naar binnen wilde, kwam langs controle en verdediging",
            correct: true,
            feedback: "Precies. Een poort was tegelijk toegang, grens en machtsmiddel.",
          },
          {
            text: "Dat steden vroeger geen grenzen hadden",
            correct: false,
            feedback: "Veel middeleeuwse steden hadden juist muren, poorten en duidelijke toegangen.",
          },
          {
            text: "Dat poorten alleen decoratie waren",
            correct: false,
            feedback: "Ze konden mooi zijn, maar hun oorspronkelijke functie was praktisch en defensief.",
          },
        ],
      },
      {
        title: "Eindig bij de havenrand",
        place: "Rheinauhafen",
        coordinates: { lat: 50.9259, lng: 6.9659 },
        assignment: "Vergelijk de moderne gebouwen met de rivier en de oude stad achter je.",
        question: "Wat laat Rheinauhafen zien over Keulen?",
        hint: "Kijk naar hoe oude havenruimte een nieuw stadsdeel wordt.",
        choices: [
          {
            text: "De stad hergebruikt de rivierzone voor wonen, werken en wandelen",
            correct: true,
            feedback: "Goed gezien. De Rijn blijft belangrijk, maar de functie van de oever verandert.",
          },
          {
            text: "Dat de rivier geen rol meer speelt",
            correct: false,
            feedback: "Juist hier zie je hoe belangrijk de rivier blijft voor de stad.",
          },
          {
            text: "Dat moderne architectuur nooit naast historie kan bestaan",
            correct: false,
            feedback: "Deze plek laat juist zien dat oude en nieuwe lagen naast elkaar kunnen bestaan.",
          },
        ],
      },
    ],
  },
  {
    id: "frankfurt",
    city: "Frankfurt",
    title: "Frankfurt Altstadt: handel, skyline en de Main",
    price: "€4,49",
    duration: "110 min",
    distance: "3,5 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een compacte route langs Römerberg, Dom, bruggen, Goethe en de skyline van Frankfurt.",
    stops: [
      {
        title: "Start op Römerberg",
        place: "Römerberg",
        coordinates: { lat: 50.1106, lng: 8.6821 },
        assignment: "Kijk naar de gevels en het plein. Zoek wat historisch voelt en wat later gereconstrueerd kan zijn.",
        question: "Waarom is Römerberg zo belangrijk voor het beeld van Frankfurt?",
        hint: "Denk aan markt, bestuur en stadsidentiteit.",
        choices: [
          {
            text: "Het plein bundelt handel, bestuur en historische uitstraling",
            correct: true,
            feedback: "Precies. Römerberg is een soort visitekaartje van de oude stad.",
          },
          {
            text: "Omdat het ver buiten het centrum ligt",
            correct: false,
            feedback: "Nee, het ligt juist centraal in de historische kern.",
          },
          {
            text: "Omdat er geen publieke ruimte is",
            correct: false,
            feedback: "Het plein is juist publieke ruimte: open, herkenbaar en goed bruikbaar.",
          },
        ],
      },
      {
        title: "Kijk omhoog bij de Dom",
        place: "Kaiserdom St. Bartholomäus",
        coordinates: { lat: 50.1103, lng: 8.6853 },
        assignment: "Zoek hoe de Dom zich onderscheidt van de moderne gebouwen verderop.",
        question: "Wat maakt een kerktoren in een stad met wolkenkrabbers nog steeds belangrijk?",
        hint: "Vergelijk ouderdom, symboolwaarde en herkenbaarheid.",
        choices: [
          {
            text: "Hij vertelt een oudere machts- en geloofslaag van de stad",
            correct: true,
            feedback: "Ja. Hoogte betekent hier iets anders dan bij kantoren: geschiedenis en ritueel.",
          },
          {
            text: "Hij verdwijnt volledig uit het stadsbeeld",
            correct: false,
            feedback: "Ondanks de skyline blijft de Dom een duidelijk historisch herkenningspunt.",
          },
          {
            text: "Hij is alleen gebouwd als winkelcentrum",
            correct: false,
            feedback: "Nee, de functie en symboliek zijn religieus en historisch.",
          },
        ],
      },
      {
        title: "Steek de Main over",
        place: "Eiserner Steg",
        coordinates: { lat: 50.1081, lng: 8.6822 },
        assignment: "Stop halverwege de brug en kijk naar beide oevers.",
        question: "Waarom is dit een goed punt om Frankfurt te begrijpen?",
        hint: "Je ziet oude stad, rivier en skyline tegelijk.",
        choices: [
          {
            text: "Omdat je de relatie tussen oude kern, Main en skyline tegelijk ziet",
            correct: true,
            feedback: "Precies. De brug geeft overzicht zonder dat je de stad verlaat.",
          },
          {
            text: "Omdat je vanaf hier niets van de stad ziet",
            correct: false,
            feedback: "Dit is juist een van de beste zichtpunten.",
          },
          {
            text: "Omdat de Main geen invloed heeft gehad",
            correct: false,
            feedback: "De rivier is juist belangrijk voor handel, routes en stadsbeeld.",
          },
        ],
      },
      {
        title: "Zoek Goethe in de stad",
        place: "Goethe-Haus",
        coordinates: { lat: 50.1114, lng: 8.6777 },
        assignment: "Kijk naar de schaal van de straat en bedenk hoe een bekend persoon een plek verandert.",
        question: "Waarom kan een geboortehuis toeristisch belangrijk worden?",
        hint: "Denk aan verhaal, herkenning en stadsmarketing.",
        choices: [
          {
            text: "Omdat een persoonlijk verhaal de stad concreter maakt",
            correct: true,
            feedback: "Mooi. Een stad wordt beter te onthouden via mensen en verhalen.",
          },
          {
            text: "Omdat zulke huizen altijd groter zijn dan kerken",
            correct: false,
            feedback: "Niet de grootte, maar het verhaal maakt de plek belangrijk.",
          },
          {
            text: "Omdat literatuur niets met steden te maken heeft",
            correct: false,
            feedback: "Juist wel. Schrijvers kunnen sterk onderdeel worden van een stadsidentiteit.",
          },
        ],
      },
      {
        title: "Voel de financiële skyline",
        place: "Main Tower",
        coordinates: { lat: 50.1123, lng: 8.6721 },
        assignment: "Kijk omhoog en zoek verschillen tussen de schaal van de straat en de schaal van de torens.",
        question: "Wat vertelt de skyline van Frankfurt vooral?",
        hint: "Denk aan banken, internationale uitstraling en hoogte.",
        choices: [
          {
            text: "Frankfurt profileert zich als financieel en internationaal centrum",
            correct: true,
            feedback: "Klopt. De skyline is een zichtbaar teken van economische rol.",
          },
          {
            text: "Dat de stad geen economie heeft",
            correct: false,
            feedback: "De hoge kantoortorens wijzen juist op sterke economische functies.",
          },
          {
            text: "Dat alle gebouwen even oud zijn",
            correct: false,
            feedback: "Je ziet hier juist contrast tussen moderne torens en oudere stadsdelen.",
          },
        ],
      },
      {
        title: "Eindig bij cultuur en status",
        place: "Alte Oper",
        coordinates: { lat: 50.1157, lng: 8.671 },
        assignment: "Bekijk de gevel en het plein. Zoek hoe cultuur ook status kan uitstralen.",
        question: "Waarom staat een operagebouw vaak zo prominent in een stad?",
        hint: "Denk aan publieke cultuur, prestige en samenkomen.",
        choices: [
          {
            text: "Omdat cultuurgebouwen laten zien wat een stad belangrijk en waardevol vindt",
            correct: true,
            feedback: "Precies. Cultuur is ook stadsidentiteit en prestige.",
          },
          {
            text: "Omdat niemand het gebouw hoeft te kunnen vinden",
            correct: false,
            feedback: "Het gebouw is juist zichtbaar en makkelijk te herkennen.",
          },
          {
            text: "Omdat opera alleen buiten steden plaatsvindt",
            correct: false,
            feedback: "Operahuizen staan vaak midden in stedelijke culturele zones.",
          },
        ],
      },
    ],
  },
  {
    id: "london",
    city: "London",
    title: "London Central: pleinen, bruggen en macht",
    price: "€4,49",
    duration: "150 min",
    distance: "5,8 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een route door centraal London langs Trafalgar Square, Covent Garden, St Paul’s en de Thames.",
    stops: [
      {
        title: "Start op Trafalgar Square",
        place: "Trafalgar Square",
        coordinates: { lat: 51.508, lng: -0.1281 },
        assignment: "Kijk naar de kolom, beelden en zichtlijnen. Zoek hoe nationale geschiedenis hier zichtbaar wordt.",
        question: "Waarom is Trafalgar Square meer dan alleen een plein?",
        hint: "Let op monumenten, musea en demonstratieruimte.",
        choices: [
          {
            text: "Het is tegelijk monument, ontmoetingsplek en publiek podium",
            correct: true,
            feedback: "Klopt. Het plein werkt voor herdenken, kijken en samenkomen.",
          },
          {
            text: "Omdat er geen symbolen staan",
            correct: false,
            feedback: "Het plein staat juist vol symbolen en zichtlijnen.",
          },
          {
            text: "Omdat het volledig afgesloten is voor bezoekers",
            correct: false,
            feedback: "Het is juist een van de bekendste publieke plekken van London.",
          },
        ],
      },
      {
        title: "Zoek straatleven in Covent Garden",
        place: "Covent Garden",
        coordinates: { lat: 51.5117, lng: -0.124 },
        assignment: "Kijk hoe markt, winkels en straatoptredens samen sfeer maken.",
        question: "Wat maakt Covent Garden levendig?",
        hint: "Let op gebruik: kopen, kijken, blijven staan en doorlopen.",
        choices: [
          {
            text: "De mix van marktgeschiedenis, winkels, horeca en publiek optreden",
            correct: true,
            feedback: "Precies. De plek voelt levend door verschillende soorten gebruik tegelijk.",
          },
          {
            text: "Dat er niets te doen is",
            correct: false,
            feedback: "Het plein is juist druk door allerlei activiteiten.",
          },
          {
            text: "Dat het alleen een snelwegknooppunt is",
            correct: false,
            feedback: "Nee, dit is vooral een voetgangersplek met veel verblijfskwaliteit.",
          },
        ],
      },
      {
        title: "Lees een statig gebouw",
        place: "Somerset House",
        coordinates: { lat: 51.5111, lng: -0.1171 },
        assignment: "Kijk naar de gevel en binnenplaats. Zoek wat symmetrie en schaal met je doen.",
        question: "Wat straalt Somerset House vooral uit?",
        hint: "Denk aan orde, instituties en representatie.",
        choices: [
          {
            text: "Orde, status en publieke cultuur",
            correct: true,
            feedback: "Ja. De architectuur stuurt je gevoel: rustig, formeel en indrukwekkend.",
          },
          {
            text: "Alleen tijdelijke rommel",
            correct: false,
            feedback: "Kijk naar de vaste opzet van gevel en binnenplaats.",
          },
          {
            text: "Dat architectuur nooit iets communiceert",
            correct: false,
            feedback: "Architectuur communiceert hier juist heel duidelijk status en orde.",
          },
        ],
      },
      {
        title: "Kijk naar St Paul’s",
        place: "St Paul’s Cathedral",
        coordinates: { lat: 51.5138, lng: -0.0984 },
        assignment: "Zoek een plek waar de koepel goed zichtbaar is en vergelijk hem met moderne gebouwen.",
        question: "Waarom is de koepel van St Paul’s zo belangrijk in het stadsbeeld?",
        hint: "Denk aan herkenbaarheid, ceremonie en skyline.",
        choices: [
          {
            text: "Hij is een historisch herkenningspunt met sterke symbolische waarde",
            correct: true,
            feedback: "Klopt. De koepel geeft London een historische verticale markering.",
          },
          {
            text: "Omdat hij ondergronds ligt",
            correct: false,
            feedback: "Juist de zichtbaarheid boven de stad maakt hem belangrijk.",
          },
          {
            text: "Omdat hij alleen als winkelcentrum bedoeld is",
            correct: false,
            feedback: "Nee, de plek is religieus, ceremonieel en historisch geladen.",
          },
        ],
      },
      {
        title: "Steek de Thames over",
        place: "Millennium Bridge",
        coordinates: { lat: 51.5096, lng: -0.0984 },
        assignment: "Stop op de brug en kijk naar St Paul’s aan de ene kant en Tate Modern aan de andere.",
        question: "Wat maakt deze brug ruimtelijk slim?",
        hint: "Let op de rechte zichtlijn tussen twee belangrijke gebouwen.",
        choices: [
          {
            text: "Hij verbindt religieuze historie met moderne cultuur in één zichtlijn",
            correct: true,
            feedback: "Mooi gezien. De brug maakt van lopen bijna een stadsles.",
          },
          {
            text: "Hij blokkeert alle zicht op de stad",
            correct: false,
            feedback: "De brug is juist gemaakt voor sterke zichtlijnen.",
          },
          {
            text: "Hij heeft niets met de rivier te maken",
            correct: false,
            feedback: "Zonder de Thames en de oversteek werkt deze plek niet.",
          },
        ],
      },
      {
        title: "Eindig bij Tower Bridge",
        place: "Tower Bridge",
        coordinates: { lat: 51.5055, lng: -0.0754 },
        assignment: "Kijk naar torens, brugdek en rivierverkeer. Zoek wat praktisch is en wat decoratief voelt.",
        question: "Waarom is Tower Bridge zo herkenbaar?",
        hint: "Denk aan techniek én theater.",
        choices: [
          {
            text: "De brug combineert techniek, torens en een sterk historisch uiterlijk",
            correct: true,
            feedback: "Precies. Hij is functioneel, maar ziet eruit als een icoon.",
          },
          {
            text: "Omdat hij helemaal geen torens heeft",
            correct: false,
            feedback: "De torens zijn juist het meest herkenbare onderdeel.",
          },
          {
            text: "Omdat hij ver van de Thames ligt",
            correct: false,
            feedback: "Tower Bridge is onlosmakelijk verbonden met de Thames.",
          },
        ],
      },
    ],
  },
];

const storageKey = "stadsopdracht-progress";
const cityTabs = document.querySelector("[data-city-tabs]");
const tourGrid = document.querySelector("[data-tour-grid]");
const stopList = document.querySelector("[data-stop-list]");
const assignmentPanel = document.querySelector("[data-assignment-panel]");
const tourStatus = document.querySelector("[data-tour-status]");
const installCallout = document.querySelector("[data-install-callout]");
const checkoutDialog = document.querySelector("[data-checkout-dialog]");
const checkoutContent = document.querySelector("[data-checkout-content]");

let selectedTourId = null;
let selectedCityId = "malaga";
let selectedStopIndex = 0;
let userLocation = null;
let locationMessage = "Locatie nog niet actief.";
let paymentTimer = null;
let deferredInstallPrompt = null;
let installHelpVisible = false;

const unlockRadiusMeters = 100;
const paymentProcessingMs = 40000;

const openDialog = (dialog) => {
  if (!dialog) return;
  if (dialog.open) return;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    return;
  }

  dialog.setAttribute("open", "");
};

const closeDialog = (dialog) => {
  if (!dialog) return;
  if (typeof dialog.close === "function") {
    dialog.close();
    return;
  }

  dialog.removeAttribute("open");
};

const getProgress = () => JSON.parse(localStorage.getItem(storageKey) || "{}");
const saveProgress = (progress) => localStorage.setItem(storageKey, JSON.stringify(progress));

const isUnlocked = (tourId) => Boolean(getProgress()[tourId]?.unlocked);
const completedStops = (tourId) => getProgress()[tourId]?.completed || [];

const toRad = (value) => (value * Math.PI) / 180;

const distanceInMeters = (from, to) => {
  if (!from || !to) return null;
  const earthRadius = 6371000;
  const dLat = toRad(to.lat - from.lat);
  const dLng = toRad(to.lng - from.lng);
  const lat1 = toRad(from.lat);
  const lat2 = toRad(to.lat);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return Math.round(earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

const formatDistance = (distance) => {
  if (distance === null) return "Onbekend";
  if (distance < 1000) return `${distance} m`;
  return `${(distance / 1000).toFixed(1).replace(".", ",")} km`;
};

const renderStopMap = (stop) => {
  const { lat, lng } = stop.coordinates;
  const latDelta = 0.0016;
  const lngDelta = 0.0022;
  const bounds = [lng - lngDelta, lat - latDelta, lng + lngDelta, lat + latDelta]
    .map((value) => value.toFixed(5))
    .join("%2C");
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bounds}&layer=mapnik&marker=${lat.toFixed(5)}%2C${lng.toFixed(5)}`;

  return `
    <div class="stop-map">
      <iframe
        title="Kaart van ${stop.place}"
        src="${mapUrl}"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  `;
};

const getCurrentLocation = () => {
  if (!("geolocation" in navigator)) {
    locationMessage = "Je browser ondersteunt geen locatiebepaling.";
    renderAssignment();
    return;
  }

  locationMessage = "Locatie wordt opgehaald...";
  renderAssignment();

  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: Math.round(position.coords.accuracy),
      };
      locationMessage = `Locatie actief, nauwkeurigheid ongeveer ${userLocation.accuracy} m.`;
      renderAssignment();
    },
    () => {
      locationMessage = "Locatie niet beschikbaar. Geef toestemming om opdrachten vrij te spelen.";
      renderAssignment();
    },
    { enableHighAccuracy: true, maximumAge: 15000, timeout: 12000 },
  );
};

const showToast = (message) => {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 2600);
};

const resetWorkspace = () => {
  selectedTourId = null;
  selectedStopIndex = 0;
  stopList.innerHTML = "";
  tourStatus.textContent = "Kies een tour om de interactieve opdrachten te bekijken.";
  assignmentPanel.innerHTML = `<p class="empty-state">Nog geen tour geselecteerd.</p>`;
};

const renderCityTabs = () => {
  if (!cityTabs) return;

  cityTabs.innerHTML = tours
    .map(
      (tour) => `
        <button class="city-tab ${tour.id === selectedCityId ? "active" : ""}" type="button" data-city-tab="${
          tour.id
        }">
          ${tour.city}
          <span>${tour.stops.length} stops</span>
        </button>
      `,
    )
    .join("");
};

const refreshApp = () => {
  renderInstallCallout();
  renderCityTabs();
  renderTours();
  if (selectedTourId) {
    renderStops();
    renderAssignment();
  }
};

const unlockTour = async (tourId) => {
  const progress = getProgress();
  progress[tourId] = {
    unlocked: true,
    completed: progress[tourId]?.completed || [],
  };
  saveProgress(progress);
  selectedCityId = tourId;
  renderCityTabs();
  renderTours();
  openTour(tourId);
  showToast("Tour ontgrendeld op dit apparaat.");
};

const isStandaloneApp = () =>
  window.matchMedia?.("(display-mode: standalone)").matches || window.navigator.standalone === true;

const isIosDevice = () => /iphone|ipad|ipod/i.test(window.navigator.userAgent);

const renderInstallCallout = () => {
  if (!installCallout) return;

  if (isStandaloneApp()) {
    installCallout.innerHTML = `
      <div>
        <span class="pill">Webapp actief</span>
        <h2>Stadsopdracht staat klaar als app</h2>
        <p>Open hem vanaf je beginscherm wanneer je in de stad loopt.</p>
      </div>
    `;
    return;
  }

  const canInstall = Boolean(deferredInstallPrompt);
  const ios = isIosDevice();
  installCallout.innerHTML = `
    <div>
      <span class="pill">Aanbevolen</span>
      <h2>Installeer Stadsopdracht als webapp</h2>
      <p>
        Zet de route op je beginscherm voordat je vertrekt. Dan voelt hij als een gewone app en
        kun je onderweg sneller verder met je opdrachten.
      </p>
      ${
        installHelpVisible || ios
          ? `<p class="install-help">${
              ios
                ? "Op iPhone: tik in Safari op Delen en kies daarna Zet op beginscherm."
                : "Gebruik de install-knop van je browser of kies in het browsermenu Installeren."
            }</p>`
          : ""
      }
    </div>
    <div class="install-actions">
      <button class="button primary" type="button" data-install-app>
        Installeer webapp
      </button>
      <button class="button ghost" type="button" data-show-install-help>
        Hoe installeer ik?
      </button>
    </div>
  `;
};

const renderTours = () => {
  tourGrid.innerHTML = tours
    .filter((tour) => tour.id === selectedCityId)
    .map((tour) => {
      const unlocked = isUnlocked(tour.id);
      return `
        <article class="tour-card">
          <header>
            <span class="pill">${tour.city}</span>
            <h3>${tour.title}</h3>
            <p>${tour.summary}</p>
          </header>
          <div class="tour-meta">
            <span>${tour.duration}</span>
            <span>${tour.distance}</span>
            <span>${tour.stops.length} opdrachten</span>
          </div>
          <strong class="tour-price">${tour.price}</strong>
          <div class="tour-actions">
            <button class="button primary" type="button" data-buy-tour="${tour.id}">
              ${unlocked ? "Open tour" : "Koop tour"}
            </button>
            <button class="button ghost" type="button" data-open-tour="${tour.id}">
              Bekijk preview
            </button>
          </div>
        </article>
      `;
    })
    .join("");
};

const renderStops = () => {
  const tour = tours.find((item) => item.id === selectedTourId);
  if (!tour) return;

  if (!isUnlocked(tour.id)) {
    stopList.innerHTML = `
      <div class="preview-stop-list">
        <span class="pill">Preview</span>
        <strong>${tour.city} route</strong>
        <p>${tour.stops.length} opdrachten blijven verborgen tot na aankoop.</p>
      </div>
    `;
    return;
  }

  const done = completedStops(tour.id);
  stopList.innerHTML = tour.stops
    .map(
      (stop, index) => `
        <button class="stop-button ${index === selectedStopIndex ? "active" : ""} ${
          done.includes(index) ? "done" : ""
        }" type="button" data-stop-index="${index}">
          <span>Stop ${index + 1}</span>
          <strong>${stop.title}</strong>
          <span>${stop.place}</span>
        </button>
      `,
    )
    .join("");
};

const renderAssignment = () => {
  const tour = tours.find((item) => item.id === selectedTourId);
  if (!tour) return;

  const stop = tour.stops[selectedStopIndex];
  const done = completedStops(tour.id);
  const progress = Math.round((done.length / tour.stops.length) * 100);
  const locked = !isUnlocked(tour.id);

  if (locked) {
    tourStatus.textContent = `${tour.title}: preview. Koop de route om stops, vragen en kaartjes te openen.`;
    assignmentPanel.innerHTML = `
      <div class="preview-panel">
        <span class="pill">${tour.city}</span>
        <h2>${tour.title}</h2>
        <p>${tour.summary}</p>
        <div class="tour-meta preview-meta">
          <span>${tour.duration}</span>
          <span>${tour.distance}</span>
          <span>${tour.stops.length} opdrachten</span>
        </div>
        <div class="preview-locked">
          <strong>De opdrachten blijven verborgen tot na aankoop.</strong>
          <span>Na aankoop worden de route en voortgang op dit apparaat bewaard.</span>
        </div>
        <div class="hero-actions">
          <button class="button primary" type="button" data-buy-tour="${tour.id}">
            Koop en open route
          </button>
        </div>
      </div>
    `;
    return;
  }

  const distance = distanceInMeters(userLocation, stop.coordinates);
  const isNearby = distance !== null && distance <= unlockRadiusMeters;
  const locationLocked = !locked && !done.includes(selectedStopIndex) && !isNearby;
  const answerLocked = locked || locationLocked;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${stop.coordinates.lat},${stop.coordinates.lng}`;
  const locationHelp = locked
    ? "Koop of ontgrendel de tour om locatiecontrole te gebruiken."
    : isNearby
      ? `Je bent binnen ${unlockRadiusMeters} meter. De vraag is vrijgegeven.`
      : distance === null
        ? "Zet je locatie aan om deze vraag vrij te spelen."
        : `Je bent nog ${formatDistance(distance)} van deze stop. Binnen ${unlockRadiusMeters} meter gaat de vraag open.`;

  tourStatus.textContent = locked
    ? `${tour.title} is nog niet gekocht. Je ziet nu een preview.`
    : `${tour.title}: ${progress}% voltooid.`;

  assignmentPanel.innerHTML = `
    <div class="assignment-layout">
      <div>
        <span class="pill">${tour.city} · stop ${selectedStopIndex + 1} van ${tour.stops.length}</span>
        <h2>${stop.title}</h2>
        <p>${stop.place}</p>
        <div class="progress-track" aria-label="Voortgang">
          <div class="progress-bar" style="width: ${progress}%"></div>
        </div>
        <div class="assignment-box">
          <h3>Opdracht</h3>
          <p>${locked ? "Preview: " : ""}${stop.assignment}</p>
          <div class="location-gate ${isNearby || done.includes(selectedStopIndex) ? "open" : ""}">
            <strong>${done.includes(selectedStopIndex) ? "Deze stop is al voltooid." : locationHelp}</strong>
            <span>${locationMessage}</span>
            <div class="location-actions">
              <button class="button small ${isNearby ? "ghost" : "primary"}" type="button" data-use-location>
                Gebruik mijn locatie
              </button>
              <a class="button ghost small" href="${mapsUrl}" target="_blank" rel="noopener">
                Open kaart
              </a>
            </div>
          </div>
          <h3>Vraag</h3>
          <p>${locationLocked && !done.includes(selectedStopIndex) ? "Deze vraag wordt zichtbaar zodra je bij de stop bent." : stop.question}</p>
          <div class="answer-options" role="group" aria-label="Antwoordopties">
            ${stop.choices
              .map(
                (choice, choiceIndex) => `
                  <button class="answer-option" type="button" data-answer-choice="${choiceIndex}" ${
                    answerLocked ? "disabled" : ""
                  }>
                    ${choice.text}
                  </button>
                `,
              )
              .join("")}
          </div>
          <p class="answer-feedback" data-answer-feedback>${
            done.includes(selectedStopIndex)
              ? "Deze opdracht is voltooid. Je kunt nog steeds andere antwoorden bekijken, maar je voortgang blijft bewaard."
              : locked
                ? "Koop de tour om antwoorden te kiezen en voortgang op te slaan."
                : locationLocked
                  ? "Ga naar de stop en zet locatie aan om de vraag te beantwoorden."
                  : "Kies het antwoord dat volgens jou het best past."
          }</p>
        </div>
      </div>
      <aside class="assignment-box">
        <h3>Routekaart</h3>
        ${renderStopMap(stop)}
        <p class="map-caption">Actieve stop: ${selectedStopIndex + 1}. Afstand: ${formatDistance(distance)}.</p>
        <h3>Hint</h3>
        <p>${stop.hint}</p>
        <h3>Waarom dit werkt</h3>
        <p>Door zelf te zoeken, luisteren of vergelijken onthoud je de plek beter dan wanneer je alleen tekst leest.</p>
      </aside>
    </div>
  `;
};

const openTour = (tourId, stopIndex = 0) => {
  selectedTourId = tourId;
  selectedCityId = tourId;
  selectedStopIndex = stopIndex;
  renderCityTabs();
  renderTours();
  renderStops();
  renderAssignment();
  document.querySelector("#mijn-tour").scrollIntoView({ behavior: "smooth", block: "start" });
};

const openCheckout = (tourId) => {
  const tour = tours.find((item) => item.id === tourId);
  if (!tour) return;

  if (isUnlocked(tour.id)) {
    openTour(tour.id);
    return;
  }

  checkoutContent.innerHTML = `
    <span class="pill">Checkout</span>
    <h2>${tour.title}</h2>
    <p>${tour.summary}</p>
    <p><strong>Prijs: ${tour.price}</strong></p>
    <p class="device-warning">
      Let op: je aankoop en voortgang worden alleen op dit apparaat en in deze browser bewaard.
      Gebruik bij voorkeur de geïnstalleerde webapp op je telefoon.
    </p>
    <div class="hero-actions">
      <a class="button primary" href="${tour.paymentUrl}" target="_blank" rel="noopener" data-start-payment="${
        tour.id
      }">
        Betaal met iDEAL of Wero
      </a>
      <button class="button ghost" type="button" data-close-checkout>
        Later betalen
      </button>
    </div>
    <p>
      Open de betaalpagina in een nieuw tabblad. Zodra je terugkomt, wordt de route automatisch
      voor je klaargezet.
    </p>
  `;

  openDialog(checkoutDialog);
};

const startPaymentProcessing = (tourId) => {
  if (paymentTimer) window.clearTimeout(paymentTimer);

  checkoutContent.innerHTML = `
    <span class="pill">Betaling geopend</span>
    <h2>Betaling wordt verwerkt</h2>
    <p>
      Rond je betaling af in het geopende tabblad. Deze webapp geeft je route automatisch vrij
      zodra de verwerking klaar is.
    </p>
    <p class="device-warning">
      Bewaar deze webapp op hetzelfde apparaat. Daar blijft je route en voortgang beschikbaar.
    </p>
    <div class="processing-card" role="status" aria-live="polite">
      <span class="processing-spinner" aria-hidden="true"></span>
      <strong>Even geduld</strong>
      <span>We zetten je stadsroute klaar.</span>
    </div>
  `;

  paymentTimer = window.setTimeout(() => {
    paymentTimer = null;
    closeDialog(checkoutDialog);
    unlockTour(tourId);
  }, paymentProcessingMs);
};

document.addEventListener("click", (event) => {
  const buyButton = event.target.closest("[data-buy-tour]");
  const openButton = event.target.closest("[data-open-tour]");
  const stopButton = event.target.closest("[data-stop-index]");
  const answerButton = event.target.closest("[data-answer-choice]");
  const locationButton = event.target.closest("[data-use-location]");
  const startPayment = event.target.closest("[data-start-payment]");
  const closeCheckout = event.target.closest("[data-close-checkout]");
  const installButton = event.target.closest("[data-install-app]");
  const installHelpButton = event.target.closest("[data-show-install-help]");
  const cityTab = event.target.closest("[data-city-tab]");

  if (buyButton) openCheckout(buyButton.dataset.buyTour);
  if (openButton) openTour(openButton.dataset.openTour);
  if (cityTab) {
    selectedCityId = cityTab.dataset.cityTab;
    resetWorkspace();
    renderCityTabs();
    renderTours();
  }
  if (installHelpButton) {
    installHelpVisible = true;
    renderInstallCallout();
  }

  if (installButton) {
    if (!deferredInstallPrompt) {
      installHelpVisible = true;
      renderInstallCallout();
      return;
    }

    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.finally(() => {
      deferredInstallPrompt = null;
      renderInstallCallout();
    });
  }

  if (stopButton) {
    selectedStopIndex = Number(stopButton.dataset.stopIndex);
    renderStops();
    renderAssignment();
  }

  if (locationButton) {
    getCurrentLocation();
  }

  if (answerButton && selectedTourId) {
    const tour = tours.find((item) => item.id === selectedTourId);
    const choice = tour?.stops[selectedStopIndex]?.choices[Number(answerButton.dataset.answerChoice)];
    const feedback = document.querySelector("[data-answer-feedback]");
    if (!choice || !feedback) return;

    document
      .querySelectorAll("[data-answer-choice]")
      .forEach((button) => button.classList.remove("correct", "incorrect"));
    answerButton.classList.add(choice.correct ? "correct" : "incorrect");
    feedback.textContent = choice.feedback;

    if (!choice.correct) {
      showToast("Bijna. Lees de hint en probeer opnieuw.");
      return;
    }

    const progress = getProgress();
    const current = progress[selectedTourId] || { unlocked: true, completed: [] };
    current.completed = [...new Set([...current.completed, selectedStopIndex])];
    progress[selectedTourId] = current;
    saveProgress(progress);
    renderStops();
    window.setTimeout(renderAssignment, 900);
    showToast("Goed antwoord. Opdracht opgeslagen.");
  }

  if (startPayment) {
    startPaymentProcessing(startPayment.dataset.startPayment);
  }

  if (closeCheckout) {
    closeDialog(checkoutDialog);
  }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  renderInstallCallout();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  renderInstallCallout();
  showToast("Webapp geïnstalleerd.");
});

refreshApp();

if ("serviceWorker" in navigator) {
  let refreshing = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  navigator.serviceWorker
    .register("service-worker.js")
    .then((registration) => registration.update())
    .catch(() => {});
}
