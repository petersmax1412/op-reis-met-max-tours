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
        question: "Welke aanwijzing rond Plaza de la Constitución vertelt het best dat dit plein al lang het hart van Málaga is?",
        hint: "Let op de randen van het plein, niet alleen op het midden.",
        choices: [
          {
            text: "De historische gevels en het straatpatroon rond het plein",
            correct: true,
            feedback: "Precies. Je begrijpt het plein vooral aan de randen: gevels, doorgangen en hoe straten erop uitkomen.",
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
        title: "Bekijk de kathedraal",
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
        question: "Welke combinatie maakt het Teatro Romano typisch voor Málaga als stad met meerdere tijdlagen?",
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
        question: "Waarom was juist deze plek bij de Alcazaba strategisch voor Málaga?",
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
        question: "Hoe gebruikt Málaga Picasso rond Plaza de la Merced vooral in het stadsverhaal?",
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
        question: "Welk contrast zie je bij Muelle Uno tussen het nieuwe Málaga en de historische stad?",
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
    title: "Düsseldorf Altstadt: Rijn, Altbier en lichtklok",
    price: "€4,49",
    duration: "120 min",
    distance: "3,0 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een stadswandeling van het Rathaus en de Rijn naar Königsallee, de langste Theke en de lichtklok van de Rheinturm.",
    stops: [
      {
        title: "Start op de Marktplatz",
        place: "Marktplatz en Rathaus",
        coordinates: { lat: 51.2256, lng: 6.7712 },
        assignment: "Kijk naar het stadhuis en het ruiterstandbeeld. Zoek twee details die macht of bestuur uitstralen.",
        question: "Wat vertellen het Rathaus en het Jan Wellem-beeld samen over de bestuurlijke rol van Düsseldorf?",
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
        title: "Vind de langste Theke",
        place: "Bolkerstraße",
        coordinates: { lat: 51.2267, lng: 6.775 },
        assignment:
          "Loop door de Altstadt en zoek hoe cafés, brouwhuizen en terrassen bijna als één lange bar aanvoelen.",
        question: "Waarom noemt Düsseldorf de Altstadt de längste Theke der Welt?",
        hint: "Theke betekent bar of toog. Kijk hoeveel plekken om te drinken en te blijven hangen dicht op elkaar zitten.",
        choices: [
          {
            text: "Omdat er in een klein oud stadsdeel heel veel cafés, bars en brouwhuizen bij elkaar zitten",
            correct: true,
            feedback: "Precies. Het gaat niet om één letterlijke bar, maar om een aaneenschakeling van uitgaansplekken.",
          },
          {
            text: "Omdat er één houten bar door de hele stad loopt",
            correct: false,
            feedback: "Leuke gedachte, maar de bijnaam is figuurlijk bedoeld: veel horeca op een klein oppervlak.",
          },
          {
            text: "Omdat de Altstadt vooral bekendstaat om kantoren zonder horeca",
            correct: false,
            feedback: "Niet helemaal. Juist de concentratie van cafés, bars en Altbier-brouwhuizen maakt deze plek bekend.",
          },
        ],
      },
      {
        title: "Bekijk de Königsallee",
        place: "Königsallee",
        coordinates: { lat: 51.2245, lng: 6.7782 },
        assignment:
          "Kijk naar de gracht, bomen, brede stoepen en etalages van de dure merken. Zoek hoe straatbeeld en luxe elkaar versterken.",
        question: "Waarom zitten juist aan de Königsallee zoveel luxe winkels en dure merken?",
        hint: "Let op bereikbaarheid, uitstraling, ruimte en het rustige water in het midden.",
        choices: [
          {
            text: "Omdat de Kö prestige, zichtbaarheid en een chique verblijfsruimte combineert",
            correct: true,
            feedback:
              "Ja. Dure merken zitten graag waar het adres zelf al waarde heeft: de gracht, bomen, brede stoepen en rustige luxe-uitstraling maken de Kö een podium voor premium winkels.",
          },
          {
            text: "Omdat luxe merken juist graag in smalle, onzichtbare zijstraten zitten",
            correct: false,
            feedback: "Dat kan soms, maar de Kö draait juist om zichtbaarheid, etalages en het prestige van het adres.",
          },
          {
            text: "Omdat de straat vooral goedkoop en functioneel is ingericht",
            correct: false,
            feedback: "Kijk nog eens naar water, bomen en gevels. De hele inrichting ondersteunt juist een exclusieve sfeer.",
          },
        ],
      },
      {
        title: "Loop langs het water",
        place: "Rheinuferpromenade bij KIT",
        coordinates: { lat: 51.2208, lng: 6.7694 },
        assignment:
          "Kijk richting Rijn, Altstadt en Rheinturm. Zoek hoe de promenade de stad direct met het water verbindt.",
        question: "Waarom is dit stuk Rheinuferpromenade logisch op weg naar de Rheinturm?",
        hint: "Denk aan de oude verkeersdruk aan de oever en aan wat je hier nu als voetganger kunt doen.",
        choices: [
          {
            text: "De oever wordt hier een verblijfsroute tussen Altstadt, Rijn en moderne skyline",
            correct: true,
            feedback:
              "Goed gezien. Dit stuk promenade maakt de Rijn onderdeel van de wandeling: je loopt niet om, maar ziet onderweg de overgang naar Rheinturm en MedienHafen.",
          },
          {
            text: "Omdat je hier door de Rijn moet oversteken om de toren te bereiken",
            correct: false,
            feedback: "Nee, je blijft juist aan dezelfde oever. Zo vermijden we onnodige omwegen over bruggen of water.",
          },
          {
            text: "Omdat de promenade vooral achter gebouwen verstopt ligt",
            correct: false,
            feedback: "Juist niet. De open oever en zichtlijnen maken dit stuk sterk.",
          },
        ],
      },
      {
        title: "Bekijk de lichtklok",
        place: "Rheinturm",
        coordinates: { lat: 51.2179, lng: 6.7616 },
        assignment:
          "Kijk naar de verticale rij lampjes op de toren. Zoek de groepen die samen uren, minuten en seconden vormen.",
        question: "Wat geven de lampjes op de Rheinturm aan?",
        hint: "De lichtstroken zijn geen versiering alleen: ze werken als een klok langs de toren.",
        choices: [
          {
            text: "Ze vormen een lichtklok die de actuele tijd aangeeft",
            correct: true,
            feedback:
              "Klopt. De Lichtzeitpegel toont de tijd met groepen lampjes voor uren, minuten en seconden.",
          },
          {
            text: "Ze tellen hoeveel schepen er over de Rijn varen",
            correct: false,
            feedback: "Nee, de lampjes zijn gekoppeld aan tijd, niet aan scheepvaart.",
          },
          {
            text: "Ze geven alleen reclamekleuren aan",
            correct: false,
            feedback: "Niet echt. De toren kan opvallen door licht, maar deze rij lampjes heeft een klokfunctie.",
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
    distance: "3,2 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Ontdek Keulen via de Dom, de Rijnbrug, oude pleinen, Groß St. Martin en de moderne havenrand.",
    stops: [
      {
        title: "Begin bij de Dom",
        place: "Kölner Dom",
        coordinates: { lat: 50.9413, lng: 6.9583 },
        assignment: "Loop een stukje achteruit en kijk hoe de Dom de ruimte om zich heen domineert.",
        question: "Waarom is de Kölner Dom zo’n sterk eerste beeld van Keulen zodra je bij het station aankomt?",
        hint: "Let op hoogte, vorm en zichtbaarheid vanuit meerdere richtingen.",
        choices: [
          {
            text: "Door de hoogte, donkere steen en duidelijke torens",
            correct: true,
            feedback:
              "Precies. Met torens van ongeveer 157 meter hoog is de Dom niet alleen een kerk, maar ook het dominante oriëntatiepunt van Keulen.",
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
        question: "Waarom is de Hohenzollernbrücke meer dan alleen de spoorbrug naast de Dom?",
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
        assignment:
          "Kijk naar de smalle gevels, terrassen en doorgangen rond het plein. Zoek hoe het plein nog steeds als huiskamer van de Altstadt werkt.",
        question: "Wat maakt Alter Markt zo’n logisch centrum voor Keuls pleinleven?",
        hint: "Let op de combinatie van oude handelsruimte, horeca en routes naar de Rijn.",
        choices: [
          {
            text: "Het plein koppelt historische handelsruimte aan cafés, terrassen en looproutes door de Altstadt",
            correct: true,
            feedback:
              "Ja. Alter Markt voelt niet toevallig levendig: de randen zijn actief, de Rijn ligt dichtbij en de routes door de oude stad komen hier vanzelf samen.",
          },
          {
            text: "Dat het plein vooral leeg en los van de Altstadt ligt",
            correct: false,
            feedback: "Nee, juist de aansluiting op de Altstadt en de actieve gevels houden het plein levendig.",
          },
          {
            text: "Dat het plein vooral bedoeld is om verkeer zo snel mogelijk door te laten rijden",
            correct: false,
            feedback: "Niet echt. Alter Markt werkt juist als verblijfsplek, niet als snelle verkeersruimte.",
          },
        ],
      },
      {
        title: "Kijk naar bestuur in detail",
        place: "Historisches Rathaus",
        coordinates: { lat: 50.9389, lng: 6.9594 },
        assignment:
          "Zoek de toren, beelden en details. Bedenk waarom een stad haar bestuur zo opvallend zichtbaar wilde maken.",
        question: "Wat wil het Historisches Rathaus van Keulen vooral laten zien?",
        hint: "Denk aan een stad die eeuwenlang rijk, zelfstandig en politiek belangrijk wilde overkomen.",
        choices: [
          {
            text: "Dat Keulen zichzelf zag als machtige handelsstad met een trots stadsbestuur",
            correct: true,
            feedback:
              "Klopt. Het Rathaus is bestuurlijke architectuur als visitekaartje: de stad liet met toren, beelden en versiering zien dat ze macht, geld en zelfbewustzijn had.",
          },
          {
            text: "Dat het bestuur juist onzichtbaar en onbelangrijk wilde blijven",
            correct: false,
            feedback: "Nee, de herkenbaarheid en rijkdom van het gebouw zijn juist onderdeel van de boodschap.",
          },
          {
            text: "Dat Keulen geen handelsstad was en weinig stedelijke macht had",
            correct: false,
            feedback: "Juist niet. Keulen was eeuwenlang een belangrijke handels- en bestuursstad aan de Rijn.",
          },
        ],
      },
      {
        title: "Bekijk Groß St. Martin van buiten",
        place: "Groß St. Martin",
        coordinates: { lat: 50.9383, lng: 6.9621 },
        assignment:
          "Blijf buiten op het plein en kijk hoe de toren boven de smalle Altstadt-straten uitsteekt.",
        question: "Waarom is Groß St. Martin een goede buitenstop tussen Rathaus en Rijn?",
        hint: "Je hoeft het gebouw niet in. Kijk naar de toren, de schaal van de straten en de ligging bij de oude handelsstad.",
        choices: [
          {
            text: "De kerk markeert de oude Altstadt en leidt je logisch richting Rijn zonder een grote omweg",
            correct: true,
            feedback:
              "Precies. Groß St. Martin werkt goed vanaf buiten: de toren helpt je oriënteren en de ligging houdt de route compact richting Rijn.",
          },
          {
            text: "Omdat je alleen binnen iets van de plek kunt begrijpen",
            correct: false,
            feedback: "Nee, de buitenkant en ligging vertellen juist al veel over schaal, oriëntatie en oude stad.",
          },
          {
            text: "Omdat de kerk ver buiten de historische binnenstad ligt",
            correct: false,
            feedback: "Niet goed. Groß St. Martin staat juist midden in de oude stad, dicht bij Alter Markt en de Rijn.",
          },
        ],
      },
      {
        title: "Eindig bij de havenrand",
        place: "Rheinauhafen",
        coordinates: { lat: 50.9259, lng: 6.9659 },
        assignment: "Vergelijk de moderne gebouwen met de rivier en de oude stad achter je.",
        question: "Wat laat Rheinauhafen zien over hoe Keulen zijn Rijn-oever opnieuw gebruikt?",
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
        question: "Waarom is Römerberg belangrijk voor Frankfurt, juist naast het moderne financiële imago van de stad?",
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
        question: "Waarom blijft de Kaiserdom belangrijk in Frankfurt, ook tussen de moderne hoogbouw?",
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
        question: "Waarom geeft de Eiserner Steg zo’n compleet beeld van Frankfurt aan de Main?",
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
        assignment:
          "Kijk naar de schaal van het huis en de straat. Bedenk waarom Frankfurt juist dit persoonlijke verhaal bewaart.",
        question: "Waarom is het Goethe-Haus belangrijk voor het verhaal dat Frankfurt over zichzelf vertelt?",
        hint: "Denk aan Goethe als schrijver, geboorteplek en cultureel tegenwicht bij de financiële skyline.",
        choices: [
          {
            text: "Het geeft Frankfurt een cultureel gezicht naast banken, beurs en hoogbouw",
            correct: true,
            feedback:
              "Mooi. Goethe maakt Frankfurt menselijker en cultureler: niet alleen kapitaal en skyline, maar ook literatuur, jeugd en herinnering.",
          },
          {
            text: "Omdat Goethe vooral bekend werd als bankier van Frankfurt",
            correct: false,
            feedback: "Nee, Goethe is juist belangrijk als schrijver en denker. De plek werkt door zijn culturele verhaal.",
          },
          {
            text: "Omdat geboortehuizen alleen belangrijk zijn als ze hoger zijn dan wolkenkrabbers",
            correct: false,
            feedback: "Niet de hoogte, maar het verhaal maakt deze plek waardevol voor Frankfurt.",
          },
        ],
      },
      {
        title: "Voel de financiële skyline",
        place: "Main Tower",
        coordinates: { lat: 50.1123, lng: 8.6721 },
        assignment: "Kijk omhoog en zoek verschillen tussen de schaal van de straat en de schaal van de torens.",
        question: "Wat vertelt de omgeving van de Main Tower over Frankfurt als financiële stad?",
        hint: "Denk aan banken, internationale uitstraling en hoogte.",
        choices: [
          {
            text: "Frankfurt profileert zich als financieel en internationaal centrum",
            correct: true,
            feedback:
              "Klopt. De skyline is een zichtbaar teken van Frankfurts economische rol. Als je tijd hebt, moet je echt eens vanaf de Main Tower naar boven kijken: dan zie je de oude stad, de Main en het bankencluster in één beeld.",
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
        assignment:
          "Bekijk de monumentale gevel en het plein ervoor. Zoek hoe het gebouw meer doet dan alleen concerten aankondigen.",
        question: "Wat vertelt de Alte Oper over Frankfurt naast de financiële skyline?",
        hint: "Let op de monumentale gevel, het plein en de manier waarop mensen hier samenkomen.",
        choices: [
          {
            text: "Dat Frankfurt zich ook als cultuurstad en representatieve ontmoetingsplek wil tonen",
            correct: true,
            feedback:
              "Precies. De Alte Oper geeft Frankfurt prestige zonder banklogo’s: cultuur, architectuur en pleinruimte maken hier samen een ander soort stedelijke status.",
          },
          {
            text: "Dat cultuur in Frankfurt bewust uit het centrum is weggestopt",
            correct: false,
            feedback: "Nee, de zichtbare ligging en monumentale gevel maken het gebouw juist nadrukkelijk aanwezig.",
          },
          {
            text: "Dat het gebouw vooral een onopvallend kantoorpand is",
            correct: false,
            feedback: "Kijk naar de gevel en het plein. Dit gebouw is juist gemaakt om publiek en prestige aan te trekken.",
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
    distance: "6,3 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een route door centraal London langs Trafalgar Square, Covent Garden, St Paul’s, Borough Market en de Thames.",
    stops: [
      {
        title: "Start op Trafalgar Square",
        place: "Trafalgar Square",
        coordinates: { lat: 51.508, lng: -0.1281 },
        assignment: "Kijk naar de kolom, beelden en zichtlijnen. Zoek hoe nationale geschiedenis hier zichtbaar wordt.",
        question: "Waarom werkt Trafalgar Square in London als nationaal podium in plaats van alleen als plein?",
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
        question: "Wat maakt Covent Garden typisch Londens als mix van marktgeschiedenis en straatcultuur?",
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
        title: "Kijk naar St Paul’s",
        place: "St Paul’s Cathedral",
        coordinates: { lat: 51.5138, lng: -0.0984 },
        assignment: "Zoek een plek waar de koepel goed zichtbaar is en vergelijk hem met moderne gebouwen.",
        question: "Waarom kreeg St Paul’s zo’n sterke symbolische lading in het moderne London?",
        hint: "Denk aan de Grote Brand, Wren, nationale ceremonies en het beeld van de koepel in de skyline.",
        choices: [
          {
            text: "De kathedraal werd na de Grote Brand herbouwd en groeide uit tot nationaal ceremonieel symbool",
            correct: true,
            feedback:
              "Klopt. St Paul’s is niet alleen herkenbaar door de koepel; de herbouw na 1666 en de nationale ceremonies geven het gebouw extra historische lading.",
          },
          {
            text: "Omdat de kathedraal vooral gebouwd is als koninklijk woonpaleis",
            correct: false,
            feedback: "Nee, St Paul’s is een kathedraal. De koninklijke en nationale betekenis zit vooral in ceremonies en herinnering.",
          },
          {
            text: "Omdat de koepel bewust lager bleef dan alle omliggende huizen",
            correct: false,
            feedback: "Niet echt. De koepel is juist bedoeld als krachtige verticale markering in het stadsbeeld.",
          },
        ],
      },
      {
        title: "Steek de Thames over",
        place: "Millennium Bridge",
        coordinates: { lat: 51.5096, lng: -0.0984 },
        assignment: "Stop op de brug en kijk naar St Paul’s aan de ene kant en Tate Modern aan de andere.",
        question: "Wat maakt de Millennium Bridge stedenbouwkundig interessant?",
        hint: "Kijk hoe de brug een as maakt tussen St Paul’s, de Thames en Tate Modern.",
        choices: [
          {
            text: "De brug maakt een directe voetgangersas tussen Wren’s kathedraal en de moderne kunst aan Bankside",
            correct: true,
            feedback:
              "Mooi gezien. De Millennium Bridge is niet alleen een oversteek; hij regisseert een wandeling van religieuze historie naar industriële herbestemming en moderne kunst.",
          },
          {
            text: "De brug is vooral ontworpen om autoverkeer sneller naar de City te brengen",
            correct: false,
            feedback: "Nee, dit is juist een voetgangersbrug. De ervaring van lopen en kijken is essentieel.",
          },
          {
            text: "De brug volgt vooral een middeleeuwse stadsmuur en negeert St Paul’s",
            correct: false,
            feedback: "Niet goed. De zichtlijn naar St Paul’s is juist een van de sterkste ruimtelijke effecten.",
          },
        ],
      },
      {
        title: "Proef Borough Market",
        place: "Borough Market",
        coordinates: { lat: 51.5055, lng: -0.091 },
        assignment:
          "Kijk naar de markthal, de spoorbogen en de foodstalls. Zoek hoe oud marktgebruik en moderne foodcultuur door elkaar lopen.",
        question: "Waarom past Borough Market zo goed bij London als oude handelsstad én moderne foodstad?",
        hint: "Let op de ligging bij London Bridge, de spoorbogen en de mix van lokale en internationale producten.",
        choices: [
          {
            text: "Omdat handel, stationsroutes en internationale eetcultuur hier op één plek samenkomen",
            correct: true,
            feedback:
              "Precies. Borough Market voelt modern door de foodcultuur, maar de plek past in een veel ouder Londens patroon van handel rond bruggen, routes en de Thames.",
          },
          {
            text: "Omdat het vooral een stille woonstraat zonder marktkramen is",
            correct: false,
            feedback: "Nee, juist de drukte, kramen en eetplekken maken duidelijk dat dit een marktomgeving is.",
          },
          {
            text: "Omdat de markt losstaat van treinroutes, bruggen en de rivier",
            correct: false,
            feedback: "Kijk naar de ligging bij London Bridge en de spoorbogen. Routes zijn juist deel van het verhaal.",
          },
        ],
      },
      {
        title: "Eindig bij Tower Bridge",
        place: "Tower Bridge",
        coordinates: { lat: 51.5055, lng: -0.0754 },
        assignment: "Kijk naar torens, brugdek en rivierverkeer. Zoek wat praktisch is en wat decoratief voelt.",
        question: "Waarom ziet Tower Bridge er historisch uit, terwijl hij technisch juist heel modern was voor zijn tijd?",
        hint: "Let op de basculebrug, het scheepvaartverkeer en de relatie met de Tower of London.",
        choices: [
          {
            text: "De moderne beweegbare brug kreeg een neogotisch uiterlijk zodat hij bij de Tower of London paste",
            correct: true,
            feedback:
              "Precies. Tower Bridge is slimme techniek in historische kleding: de brug kon open voor schepen, maar moest visueel passen bij de middeleeuwse Tower ernaast.",
          },
          {
            text: "Omdat het dezelfde brug is als London Bridge en nooit open kan",
            correct: false,
            feedback: "Nee, Tower Bridge is niet London Bridge en is juist beroemd als beweegbare basculebrug.",
          },
          {
            text: "Omdat de torens alleen later als reclamezuilen zijn toegevoegd",
            correct: false,
            feedback: "Niet klopt. De torens horen bij het ontwerp en dragen de herkenbare historische uitstraling.",
          },
        ],
      },
    ],
  },
  {
    id: "copenhagen",
    city: "Copenhagen",
    title: "Copenhagen Centrum: haven, hof en waterstad",
    price: "€4,49",
    duration: "145 min",
    distance: "4,6 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een wandelroute langs Rådhuspladsen, Tivoli, Christiansborg, Nyhavn, Amalienborg, Marmorkirken en de waterkant.",
    stops: [
      {
        title: "Start op Rådhuspladsen",
        place: "Rådhuspladsen",
        coordinates: { lat: 55.6758, lng: 12.5683 },
        assignment:
          "Kijk naar het stadhuis, de brede ruimte en de stromen fietsers, voetgangers en verkeer. Zoek hoe dit plein als poort naar de binnenstad werkt.",
        question: "Waarom is Rådhuspladsen een goed startpunt om Copenhagen als stad te begrijpen?",
        hint: "Let op bestuur, aankomst, verkeersstromen en de overgang naar winkelstraten.",
        choices: [
          {
            text: "Het plein koppelt bestuur, aankomst, verkeer en binnenstad aan elkaar",
            correct: true,
            feedback:
              "Precies. Rådhuspladsen is geen rustig decorplein, maar een stedelijk scharnierpunt: stadhuis, routes, winkels en dagelijks stadsleven komen hier samen.",
          },
          {
            text: "Omdat het plein vooral ver buiten de stad ligt",
            correct: false,
            feedback: "Nee, het ligt juist op een drukke overgang tussen centrum, Tivoli en winkelgebied.",
          },
          {
            text: "Omdat er bijna geen verkeer of stedelijke functies zichtbaar zijn",
            correct: false,
            feedback: "Kijk nog eens naar fietsers, auto’s, voetgangers en het stadhuis. Juist die mix maakt de plek interessant.",
          },
        ],
      },
      {
        title: "Bekijk Tivoli van buiten",
        place: "Tivoli Gardens",
        coordinates: { lat: 55.6736, lng: 12.5681 },
        assignment:
          "Blijf buiten bij de ingang en kijk naar gevel, verlichting, hekken en sfeer. Zoek hoe de attractie al vanaf de straat onderdeel van de stad wordt.",
        question: "Wat maakt Tivoli bijzonder in het stadsbeeld, ook als je niet naar binnen gaat?",
        hint: "Let op de ligging direct naast station, stadhuisplein en drukke wegen.",
        choices: [
          {
            text: "Een pretparkachtige wereld ligt hier midden in de compacte stad",
            correct: true,
            feedback:
              "Klopt. Tivoli werkt juist door het contrast: achter een stedelijke rand begint een wereld van licht, tuinen en vermaak, pal naast station en centrum.",
          },
          {
            text: "Het ligt zo ver buiten Copenhagen dat je het niet als stadsplek kunt lezen",
            correct: false,
            feedback: "Nee, Tivoli ligt opvallend centraal. De kracht zit juist in die binnenstedelijke ligging.",
          },
          {
            text: "Het gebouw is vooral een onzichtbare kantoorwand",
            correct: false,
            feedback: "Niet echt. De gevel en entree zijn gemaakt om nieuwsgierigheid en verblijfssfeer op te roepen.",
          },
        ],
      },
      {
        title: "Sta op het machtseiland",
        place: "Christiansborg Slot",
        coordinates: { lat: 55.6763, lng: 12.5806 },
        assignment:
          "Kijk naar de bruggen, binnenplaatsen en grote gevels. Zoek waarom dit complex meer is dan alleen een paleis.",
        question: "Waarom is Christiansborg Slot politiek zo belangrijk voor Denemarken?",
        hint: "Denk aan parlement, regering en rechtspraak op één historisch eiland.",
        choices: [
          {
            text: "Hier komen parlement, regering en hoogste rechtspraak rond hetzelfde paleiscomplex samen",
            correct: true,
            feedback:
              "Ja. Christiansborg is uitzonderlijk omdat meerdere staatsmachten hier ruimtelijk dicht bij elkaar zitten. De plek maakt macht letterlijk zichtbaar op Slotsholmen.",
          },
          {
            text: "Omdat het alleen een winkelcentrum zonder politieke functie is",
            correct: false,
            feedback: "Nee, dit is juist een van de belangrijkste bestuurlijke plekken van Denemarken.",
          },
          {
            text: "Omdat de plek ver van de historische binnenstad is weggehaald",
            correct: false,
            feedback: "Niet goed. Slotsholmen ligt juist midden tussen centrum, kanalen en oude handelsroutes.",
          },
        ],
      },
      {
        title: "Kijk naar Nyhavn als oude werkhaven",
        place: "Nyhavn",
        coordinates: { lat: 55.6798, lng: 12.591 },
        assignment:
          "Kijk voorbij de kleuren en terrassen. Zoek sporen dat dit ooit een functionele haven- en handelsplek was.",
        question: "Waarom is Nyhavn meer dan alleen een kleurrijke fotoplek?",
        hint: "Let op water, kades, pakhuizen, schepen en horeca.",
        choices: [
          {
            text: "De oude havenfunctie is veranderd in een toeristische verblijfsplek",
            correct: true,
            feedback:
              "Precies. Nyhavn werkt omdat je de oude handelslaag nog voelt, terwijl de huidige functie vooral eten, kijken, wandelen en fotograferen is.",
          },
          {
            text: "Omdat het kanaal nooit met handel of schepen te maken had",
            correct: false,
            feedback: "Nee, het water en de kades vertellen juist dat scheepvaart en handel hier belangrijk waren.",
          },
          {
            text: "Omdat alle gevels vooral moderne glazen kantoren zijn",
            correct: false,
            feedback: "Kijk naar de smalle historische gevels. Die dragen juist sterk bij aan het karakter van Nyhavn.",
          },
        ],
      },
      {
        title: "Bekijk de koninklijke ruimte",
        place: "Amalienborg Slotsplads",
        coordinates: { lat: 55.684, lng: 12.593 },
        assignment:
          "Ga op het plein staan en kijk naar de vier paleisgevels. Zoek hoe symmetrie, openheid en bewaking samen werken.",
        question: "Wat maakt Amalienborg Slotsplads anders dan een gewoon stadsplein?",
        hint: "Let op de vier gebouwen rondom het plein en de zichtlijn richting kerk en water.",
        choices: [
          {
            text: "Het plein is tegelijk koninklijke woonplek, ceremonieel decor en publieke ruimte",
            correct: true,
            feedback:
              "Klopt. Amalienborg voelt formeel door de vier bijna gelijke paleizen, maar blijft toegankelijk genoeg om de monarchie heel direct in de stad te plaatsen.",
          },
          {
            text: "Omdat het plein volledig losstaat van de koninklijke familie",
            correct: false,
            feedback: "Nee, dit is juist een centrale plek in het Deense koninklijke verhaal.",
          },
          {
            text: "Omdat het plein geen duidelijke vorm of zichtlijnen heeft",
            correct: false,
            feedback: "Kijk naar de symmetrie en de as richting Marmorkirken. De ruimtelijke ordening is juist heel sterk.",
          },
        ],
      },
      {
        title: "Vergelijk koepel en paleis-as",
        place: "Frederik’s Church",
        coordinates: { lat: 55.6849, lng: 12.5899 },
        assignment:
          "Blijf buiten en kijk hoe de koepel in de as van Amalienborg staat. Zoek waarom de kerk groter voelt dan de straat eromheen.",
        question: "Waarom past Frederik’s Church zo goed bij de route vanaf Amalienborg?",
        hint: "Kijk naar de grote koepel en de korte zichtlijn vanaf het paleisplein.",
        choices: [
          {
            text: "De kerk maakt de koninklijke as monumentaler en geeft de buurt een herkenbaar eindpunt",
            correct: true,
            feedback:
              "Goed gezien. De Marmorkirken werkt als ruimtelijk anker: de koepel geeft gewicht aan de paleisomgeving en helpt je oriënteren in de wijk Frederiksstaden.",
          },
          {
            text: "Omdat de kerk alleen zichtbaar is vanuit een afgesloten binnenplaats",
            correct: false,
            feedback: "Nee, juist vanaf de straat en de as bij Amalienborg is de koepel duidelijk te lezen.",
          },
          {
            text: "Omdat de kerk vooral laag en onopvallend tussen winkels verstopt zit",
            correct: false,
            feedback: "Niet echt. De koepel is juist een van de opvallendste vormen in dit deel van Copenhagen.",
          },
        ],
      },
      {
        title: "Eindig aan de waterkant",
        place: "Den Lille Havfrue",
        coordinates: { lat: 55.6929, lng: 12.5993 },
        assignment:
          "Kijk naar de schaal van het beeld, de havenrand en de route die je net hebt gelopen. Zoek waarom zo’n klein beeld toch zo groot kan worden in stadsmarketing.",
        question: "Waarom is Den Lille Havfrue zo’n sterk symbool van Copenhagen, ondanks haar kleine formaat?",
        hint: "Denk aan sprookje, havenstad, waterkant en herkenbaarheid.",
        choices: [
          {
            text: "Het beeld koppelt Andersen, sprookjescultuur en de havenrand aan één herkenbaar icoon",
            correct: true,
            feedback:
              "Precies. De kracht zit niet in grootte, maar in verhaal en ligging: een klein beeld aan het water kan een hele stad herkenbaar maken.",
          },
          {
            text: "Omdat het beeld vooral beroemd is doordat het enorm hoog boven de stad uitsteekt",
            correct: false,
            feedback: "Juist niet. Veel bezoekers zijn verrast door de bescheiden schaal.",
          },
          {
            text: "Omdat het beeld niets met water, verhalen of Copenhagen te maken heeft",
            correct: false,
            feedback: "Nee, juist de combinatie van verhaal, havenrand en stad maakt het beeld zo bekend.",
          },
        ],
      },
    ],
  },
  {
    id: "innsbruck",
    city: "Innsbruck",
    title: "Innsbruck Altstadt: keizerstad tussen bergen",
    price: "€4,49",
    duration: "120 min",
    distance: "2,6 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een compacte route door de Altstadt langs het Gouden Dak, Hofburg, Hofkirche, Dom, Innbrug en Maria-Theresien-Straße.",
    stops: [
      {
        title: "Start bij het Gouden Dak",
        place: "Goldenes Dachl",
        coordinates: { lat: 47.2687, lng: 11.3933 },
        assignment:
          "Kijk naar de erker, de kleine schaal van het plein en de bergwand op de achtergrond. Zoek hoe macht hier heel zichtbaar werd gemaakt.",
        question: "Waarom is het Goldenes Dachl zo’n sterk symbool van Innsbruck?",
        hint: "Let op de erker als podium en op de ligging midden in de oude stad.",
        choices: [
          {
            text: "Het maakte keizerlijke aanwezigheid zichtbaar op een druk punt in de Altstadt",
            correct: true,
            feedback:
              "Precies. Het Gouden Dak is klein vergeleken met een paleis, maar werkt als een machtig balkon: wie hier verscheen, stond letterlijk boven het stadsleven.",
          },
          {
            text: "Omdat het vooral een moderne winkelgalerij zonder historische betekenis is",
            correct: false,
            feedback: "Nee, juist de historische erker en de keizerlijke uitstraling maken dit punt zo herkenbaar.",
          },
          {
            text: "Omdat het gebouw ver buiten de oude stad staat",
            correct: false,
            feedback: "Niet goed. Het staat juist midden in de Altstadt, waar veel routes samenkomen.",
          },
        ],
      },
      {
        title: "Bekijk de Hofburg van buiten",
        place: "Hofburg Innsbruck",
        coordinates: { lat: 47.2693, lng: 11.3946 },
        assignment:
          "Bekijk de gevel en de hofachtige ruimte eromheen. Zoek hoe Innsbruck niet alleen bergstad, maar ook machtscentrum werd.",
        question: "Wat vertelt de Hofburg over de rol van Innsbruck in de Habsburgse wereld?",
        hint: "Denk aan residentie, hofcultuur en bestuur in een stad tussen Alpenpassen.",
        choices: [
          {
            text: "Innsbruck was ook een residentie- en bestuursstad, niet alleen een bergplaats",
            correct: true,
            feedback:
              "Klopt. De Hofburg laat zien dat Innsbruck strategisch en politiek belangrijk was: een plek waar macht, reizen door de Alpen en hofcultuur elkaar raakten.",
          },
          {
            text: "Dat Innsbruck nooit een band had met vorstelijke macht",
            correct: false,
            feedback: "Juist wel. De Hofburg is een heel duidelijke herinnering aan dynastieke macht.",
          },
          {
            text: "Dat de stad vooral pas in de 21e eeuw belangrijk werd",
            correct: false,
            feedback: "Nee, Innsbruck had al veel eerder een strategische rol door ligging en hofgeschiedenis.",
          },
        ],
      },
      {
        title: "Zoek de hofherinnering",
        place: "Hofkirche",
        coordinates: { lat: 47.2691, lng: 11.3952 },
        assignment:
          "Blijf buiten bij de kerk en kijk naar de ligging naast Hofburg en museumgebied. Bedenk waarom herinnering aan macht juist hier past.",
        question: "Waarom past de Hofkirche logisch naast de Hofburg in deze route?",
        hint: "Denk aan hof, herdenking en politieke herinnering.",
        choices: [
          {
            text: "De plek koppelt vorstelijke macht aan herinnering en ceremonie",
            correct: true,
            feedback:
              "Ja. De Hofkirche hoort bij het bredere hoflandschap: niet alleen wonen en besturen, maar ook herdenken en macht symbolisch doorgeven.",
          },
          {
            text: "Omdat de kerk vooral losstaat van elke hofgeschiedenis",
            correct: false,
            feedback: "Nee, de naam en ligging wijzen juist op de relatie met hof en dynastie.",
          },
          {
            text: "Omdat dit de beste plek is om alleen moderne kantoren te bekijken",
            correct: false,
            feedback: "Niet echt. Deze stop draait juist om historische macht en herinneringscultuur.",
          },
        ],
      },
      {
        title: "Kijk naar de Dom en de bergen",
        place: "Dom zu St. Jakob",
        coordinates: { lat: 47.2697, lng: 11.3942 },
        assignment:
          "Ga buiten op het plein staan en vergelijk de barokke gevel met de smalle straten eromheen en de bergen achter de stad.",
        question: "Wat maakt de Dom zu St. Jakob typisch voor Innsbruck als compacte Alpenstad?",
        hint: "Let op schaal, pleinvorm en de nabijheid van berg en Altstadt.",
        choices: [
          {
            text: "Een monumentale kerk staat hier heel dicht op smalle straten en bergdecor",
            correct: true,
            feedback:
              "Mooi gezien. In Innsbruck zitten monumentaliteit en compactheid dicht op elkaar: een barokke kerk, kleine pleinen en de Alpen blijven tegelijk voelbaar.",
          },
          {
            text: "Omdat de Dom midden in een vlakke havenstad staat",
            correct: false,
            feedback: "Nee, het Alpenlandschap is juist een belangrijk deel van de ervaring hier.",
          },
          {
            text: "Omdat de kerk nauwelijks zichtbaar is vanaf de oude stad",
            correct: false,
            feedback: "Kijk naar de gevel en het plein: de Dom is juist een duidelijke stedelijke markering.",
          },
        ],
      },
      {
        title: "Sta op de brug over de Inn",
        place: "Innbrücke",
        coordinates: { lat: 47.2698, lng: 11.3903 },
        assignment:
          "Stop op of bij de brug en kijk naar de rivier, gekleurde huizen en bergen. Zoek waarom juist deze rivierovergang belangrijk werd.",
        question: "Waarom is de Innbrug belangrijk voor het verhaal van Innsbruck?",
        hint: "De naam Innsbruck betekent letterlijk brug over de Inn.",
        choices: [
          {
            text: "De brug en rivierovergang zitten zelfs in de naam en oorsprong van de stad",
            correct: true,
            feedback:
              "Precies. Innsbruck is letterlijk een stad rond een oversteek: rivier, handel, reisroutes en bergpassen komen hier samen.",
          },
          {
            text: "Omdat de Inn niets met de stad te maken heeft",
            correct: false,
            feedback: "Juist wel. De rivier en brug zijn zo belangrijk dat ze in de stadsnaam terugkomen.",
          },
          {
            text: "Omdat de stad vooral aan zee is ontstaan",
            correct: false,
            feedback: "Nee, dit is geen zeestad. De ligging aan de Inn en tussen Alpenroutes is bepalend.",
          },
        ],
      },
      {
        title: "Eindig op de grote stadsas",
        place: "Maria-Theresien-Straße",
        coordinates: { lat: 47.2659, lng: 11.3948 },
        assignment:
          "Loop de straat in en kijk naar gevels, winkels, zichtlijnen en de bergachtergrond. Zoek het contrast met de smalle Altstadt.",
        question: "Wat laat Maria-Theresien-Straße zien dat de smalle Altstadt minder sterk laat zien?",
        hint: "Let op breedte, representatie, winkels en zicht richting bergen.",
        choices: [
          {
            text: "Een bredere representatieve stadsruimte waar handel, flaneren en bergzicht samenkomen",
            correct: true,
            feedback:
              "Klopt. Hier voelt Innsbruck ruimer en representatiever: de stad toont zich als winkel- en wandelstad, terwijl de bergen op de achtergrond blijven meespelen.",
          },
          {
            text: "Dat Innsbruck alleen uit smalle middeleeuwse steegjes bestaat",
            correct: false,
            feedback: "Nee, juist deze straat laat een bredere en formelere stadslaag zien.",
          },
          {
            text: "Dat winkels en openbaar stadsleven hier volledig ontbreken",
            correct: false,
            feedback: "Niet echt. De straat leeft juist door winkels, terrassen, voetgangers en zichtlijnen.",
          },
        ],
      },
    ],
  },
  {
    id: "vienna",
    city: "Wenen",
    title: "Wenen Centrum: keizerlijke macht, muziek en Ringstraße",
    price: "€4,49",
    duration: "180 min",
    distance: "6,7 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een rijke route door Wenen langs Stephansdom, Hofburg, Heldenplatz, Staatsoper, Naschmarkt, Karlskirche, Stadtpark en Prater.",
    stops: [
      {
        title: "Start bij de Stephansdom",
        place: "Stephansdom",
        coordinates: { lat: 48.2085, lng: 16.3731 },
        assignment:
          "Kijk naar de toren, het dakpatroon en de drukte op het plein. Zoek waarom dit punt nog steeds voelt als hart van de stad.",
        question: "Waarom is de Stephansdom zo’n sterk oriëntatiepunt in Wenen?",
        hint: "Let op hoogte, pleinwerking, symboliek en de routes eromheen.",
        choices: [
          {
            text: "De Dom combineert religieus symbool, skylinepunt en centrum van stedelijke routes",
            correct: true,
            feedback:
              "Precies. De Stephansdom is niet alleen een kerk: de toren, het plein en de omliggende straten maken hem tot een kompas voor de binnenstad.",
          },
          {
            text: "Omdat de Dom bewust buiten alle belangrijke routes is gebouwd",
            correct: false,
            feedback: "Nee, juist de centrale ligging en zichtbaarheid maken de Dom zo sterk.",
          },
          {
            text: "Omdat de kerk vooral bekend is als moderne woontoren",
            correct: false,
            feedback: "Niet goed. De betekenis zit in religie, historie, skyline en stadsidentiteit.",
          },
        ],
      },
      {
        title: "Bekijk macht in de Hofburg",
        place: "Hofburg",
        coordinates: { lat: 48.2066, lng: 16.3656 },
        assignment:
          "Blijf buiten en kijk naar poorten, binnenplaatsen en gevels. Zoek hoe een paleiscomplex groter voelt dan één gebouw.",
        question: "Waarom is de Hofburg meer dan alleen een paleis aan de route?",
        hint: "Denk aan eeuwenlange uitbreiding, bestuur, hofleven en symbolische macht.",
        choices: [
          {
            text: "Het complex groeide mee met dynastieke macht en vormt een bestuurlijk hoflandschap",
            correct: true,
            feedback:
              "Klopt. De Hofburg is geen los monument, maar een verzameling machtslagen: wonen, besturen, ceremonie en representatie zijn hier aan elkaar gebouwd.",
          },
          {
            text: "Omdat het complex vooral een kleine winkelpassage zonder geschiedenis is",
            correct: false,
            feedback: "Nee, juist de schaal en geschiedenis maken de Hofburg zo belangrijk.",
          },
          {
            text: "Omdat Wenen nooit een keizerlijke hofstad is geweest",
            correct: false,
            feedback: "Juist wel. De Hofburg is een van de duidelijkste plekken waar je dat ziet.",
          },
        ],
      },
      {
        title: "Sta op Heldenplatz",
        place: "Heldenplatz",
        coordinates: { lat: 48.2064, lng: 16.3634 },
        assignment:
          "Kijk naar de open ruimte, de ruiterbeelden en de monumentale gevels. Zoek waarom dit plein zowel indrukwekkend als beladen kan voelen.",
        question: "Wat maakt Heldenplatz historisch krachtig maar ook gevoelig?",
        hint: "Denk aan keizerlijke representatie én politieke massabijeenkomsten.",
        choices: [
          {
            text: "Het plein werd gemaakt voor macht en ceremonie, maar draagt ook latere politieke herinneringen",
            correct: true,
            feedback:
              "Ja. Heldenplatz is ruimtelijke macht in steen en open ruimte, maar juist zulke pleinen kunnen later ook beladen herinneringsplekken worden.",
          },
          {
            text: "Omdat het plein geen enkele politieke betekenis heeft gehad",
            correct: false,
            feedback: "Nee, de schaal en geschiedenis maken dit plein juist politiek geladen.",
          },
          {
            text: "Omdat het plein alleen als rustige binnentuin is ontworpen",
            correct: false,
            feedback: "Niet echt. De openheid en monumentale randen wijzen juist op publieke representatie.",
          },
        ],
      },
      {
        title: "Kijk naar de Staatsoper",
        place: "Wiener Staatsoper",
        coordinates: { lat: 48.2028, lng: 16.3692 },
        assignment:
          "Bekijk de gevel en de ligging aan de Ringstraße. Zoek waarom cultuur hier bijna dezelfde status krijgt als bestuur.",
        question: "Waarom staat de Wiener Staatsoper zo logisch aan de Ringstraße?",
        hint: "Let op representatie, prestige en de 19e-eeuwse stadsuitbreiding.",
        choices: [
          {
            text: "De Ringstraße gebruikte cultuurgebouwen om Wenen als moderne prestigieuze hoofdstad te tonen",
            correct: true,
            feedback:
              "Precies. De Staatsoper is cultuur als visitekaartje: muziek, architectuur en stedelijke grandeur worden samen onderdeel van de hoofdstad.",
          },
          {
            text: "Omdat opera in Wenen bewust onzichtbaar moest blijven",
            correct: false,
            feedback: "Nee, de ligging en gevel zijn juist heel representatief.",
          },
          {
            text: "Omdat de Ringstraße alleen voor fabrieksterreinen werd aangelegd",
            correct: false,
            feedback: "Niet goed. De Ringstraße werd juist een podium voor musea, parlement, opera en andere representatieve gebouwen.",
          },
        ],
      },
      {
        title: "Proef de Naschmarkt",
        place: "Naschmarkt",
        coordinates: { lat: 48.1987, lng: 16.3646 },
        assignment:
          "Kijk naar kramen, geuren, internationale producten en de lange lineaire vorm. Zoek hoe marktleven een andere kant van Wenen laat zien.",
        question: "Wat vertelt de Naschmarkt over Wenen naast paleizen en concertzalen?",
        hint: "Let op dagelijks gebruik, migratie, eten en handel.",
        choices: [
          {
            text: "De markt laat Wenen zien als dagelijkse, internationale handels- en eetstad",
            correct: true,
            feedback:
              "Mooi. De Naschmarkt haalt Wenen van het keizerlijke podium naar straatniveau: eten, handel, talen en geuren maken de stad levend en gemengd.",
          },
          {
            text: "Dat Wenen geen markt- of eetcultuur heeft",
            correct: false,
            feedback: "Juist deze plek laat zien hoe belangrijk eten, handel en ontmoeting zijn.",
          },
          {
            text: "Dat alle interessante plekken alleen binnen paleizen liggen",
            correct: false,
            feedback: "Nee, de Naschmarkt bewijst dat openbare straatcultuur net zo veel over de stad kan vertellen.",
          },
        ],
      },
      {
        title: "Bekijk de Karlskirche",
        place: "Karlskirche",
        coordinates: { lat: 48.1981, lng: 16.3713 },
        assignment:
          "Kijk naar de koepel, de twee zuilen en de vijver ervoor. Zoek waarom het gebouw zo theatraal in de ruimte staat.",
        question: "Waarom voelt de Karlskirche zo scenografisch, bijna als een decorstuk?",
        hint: "Let op symmetrie, water, koepel en de zuilen voor de gevel.",
        choices: [
          {
            text: "Door de combinatie van koepel, zuilen, voorplein en spiegeling in het water",
            correct: true,
            feedback:
              "Klopt. De Karlskirche is barokke regie: het gebouw gebruikt ruimte, symmetrie en reflectie om veel dramatischer te werken dan alleen de gevel.",
          },
          {
            text: "Omdat de kerk bewust zonder zichtbare gevel is gebouwd",
            correct: false,
            feedback: "Nee, juist de gevel, koepel en zuilen zijn heel nadrukkelijk zichtbaar.",
          },
          {
            text: "Omdat het gebouw vooral opgaat in een smalle steeg",
            correct: false,
            feedback: "Niet echt. De kerk werkt juist door de open ruimte ervoor.",
          },
        ],
      },
      {
        title: "Eindig in het Stadtpark",
        place: "Stadtpark",
        coordinates: { lat: 48.2046, lng: 16.3796 },
        assignment:
          "Zoek het Strauss-monument en kijk hoe park, muziekcultuur en stadsrust samenkomen na de drukte van de binnenstad.",
        question: "Waarom is Stadtpark een passend einde voor een Weense stadsopdracht?",
        hint: "Denk aan muziek, publieke ontspanning en de overgang van monumenten naar groen.",
        choices: [
          {
            text: "Het park verbindt Weense muziekcultuur met een toegankelijke publieke rustplek",
            correct: true,
            feedback:
              "Precies. Na paleizen, markten en kerken laat Stadtpark een zachtere kant van Wenen zien: muziek als stadsidentiteit, maar dan in een groene openbare ruimte.",
          },
          {
            text: "Omdat het park niets met cultuur of stadsleven te maken heeft",
            correct: false,
            feedback: "Nee, het park zit vol stedelijk gebruik en culturele verwijzingen.",
          },
          {
            text: "Omdat Wenen bijna geen publieke parken kent",
            correct: false,
            feedback: "Niet goed. Juist zulke parken maken de monumentale stad leefbaarder.",
          },
        ],
      },
      {
        title: "Eindig bij het reuzenrad",
        place: "Prater Riesenrad",
        coordinates: { lat: 48.2167, lng: 16.3959 },
        assignment:
          "Kijk naar het reuzenrad, de brede toegang tot het park en de sfeer van attracties. Zoek hoe Wenen hier veel speelser en volkser wordt.",
        question: "Waarom hoort de Prater bij het verhaal van Wenen, naast paleizen, kerken en opera?",
        hint: "Denk aan volksvermaak, publieke ontspanning en het iconische reuzenrad.",
        choices: [
          {
            text: "De Prater laat Wenen zien als stad van publiek vermaak, ontspanning en populaire cultuur",
            correct: true,
            feedback:
              "Precies. De Prater is de andere kant van keizerlijk Wenen: minder formeel, meer volks en speels. Het Riesenrad maakt die ontspanningscultuur meteen herkenbaar.",
          },
          {
            text: "Omdat de Prater vooral een afgesloten paleistuin zonder bezoekers is",
            correct: false,
            feedback: "Nee, de Prater is juist sterk door publieke toegankelijkheid, attracties en vermaak.",
          },
          {
            text: "Omdat het reuzenrad niets met de identiteit van Wenen te maken heeft",
            correct: false,
            feedback: "Niet goed. Het Riesenrad is een van de bekendste beelden van Wenen buiten de keizerlijke binnenstad.",
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
const webInstallOnly = document.querySelector("[data-web-install-only]");
const checkoutDialog = document.querySelector("[data-checkout-dialog]");
const checkoutContent = document.querySelector("[data-checkout-content]");
const answerDialog = document.querySelector("[data-answer-dialog]");
const answerContent = document.querySelector("[data-answer-content]");
const adminPanel = document.querySelector("[data-admin-panel]");
const promoIntro = document.querySelector("[data-promo-intro]");
const promoProgress = document.querySelector("[data-promo-progress]");
const promoToggleButton = document.querySelector("[data-promo-toggle]");

let selectedTourId = null;
let selectedCityId = "all";
let selectedStopIndex = 0;
let userLocation = null;
let locationMessage = "Locatie nog niet actief.";
let paymentTimer = null;
let deferredInstallPrompt = null;
let installHelpVisible = false;
let promoTimer = null;
let promoPaused = false;
let promoSceneIndex = 0;

const defaultUnlockRadiusMeters = 70;
const paymentProcessingMs = 40000;
const adminStorageKey = "stadsopdracht-admin";
const adminAccessCode = "max2026";
const promoStorageKey = "stadsopdracht-promo-seen";
const promoDurations = [3200, 3200, 3800, 5600, 3800, 3400, 4600];
const cityPhotos = {
  malaga: {
    src: "assets/cities/malaga.jpg",
    alt: "Uitzicht over Málaga vanaf de Alcazaba",
    credit: "Jooonas07, CC0",
    source: "https://commons.wikimedia.org/wiki/File:Alcazaba_Malaga_View_on_the_City.jpg",
  },
  dusseldorf: {
    src: "assets/cities/dusseldorf.jpg",
    alt: "Skyline van Düsseldorf vanaf de Oberkasseler Brücke",
    credit: "Anil Öztas, CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:D%C3%BCsseldorf_(DE),_Skyline_von_Oberkasseler_Br%C3%BCcke_--_2023_--_0023.jpg",
  },
  cologne: {
    src: "assets/cities/cologne.jpg",
    alt: "Keulen overdag met de Rijn en de Dom",
    credit: "Dietmar Rabich, CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:K%C3%B6ln,_Stadtpanorama_--_2014_--_1857.jpg",
  },
  frankfurt: {
    src: "assets/cities/frankfurt.jpg",
    alt: "Skyline van Frankfurt aan de Main",
    credit: "Norbert Nagel, CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Frankfurt_Skyline_with_river_Main_2014.jpg",
  },
  london: {
    src: "assets/cities/london.jpg",
    alt: "Londense skyline met The Shard",
    credit: "Bex Walton, CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:The_Shard_and_the_London_skyline_(50151577742).jpg",
  },
  copenhagen: {
    src: "assets/cities/copenhagen.jpg",
    alt: "Nyhavn in Copenhagen met gekleurde gevels en water",
    credit: "Dietmar Rabich, CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Kopenhagen_(DK),_Nyhavn_--_2017_--_1447.jpg",
  },
  innsbruck: {
    src: "assets/cities/innsbruck.jpg",
    alt: "Gekleurde huizen aan de Inn in Innsbruck met de Nordkette erachter",
    credit: "Stephan Mosel, CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Innsbruck_and_River.jpg",
  },
  vienna: {
    src: "assets/cities/vienna.jpg",
    alt: "Panorama van Wenen vanaf Belvedere",
    credit: "MrPanyGoff, CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Panorama_from_Belvedere_-_Vienna.jpg",
  },
};

const isStandaloneApp = () =>
  window.matchMedia?.("(display-mode: standalone)").matches || window.navigator.standalone === true;

const isIosDevice = () => /iphone|ipad|ipod/i.test(window.navigator.userAgent);
const isMobileDevice = () => /android|iphone|ipad|ipod/i.test(window.navigator.userAgent);

const renderCityPhoto = (tour, modifier = "") => {
  const photo = cityPhotos[tour.id];
  if (!photo) return "";

  return `
    <figure class="city-photo ${modifier}">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
      <figcaption>
        Foto:
        <a href="${photo.source}" target="_blank" rel="noopener noreferrer">${photo.credit}</a>
      </figcaption>
    </figure>
  `;
};

const applyRuntimeMode = () => {
  const standalone = isStandaloneApp();
  document.body.classList.toggle("standalone-mode", standalone);
  document.body.classList.toggle("browser-mode", !standalone);
};

const stopUnlockRadii = {
  "Plaza de la Constitución": 60,
  "Catedral de Málaga": 80,
  "Teatro Romano": 60,
  "Alcazaba ingang": 70,
  "Plaza de la Merced": 60,
  "Muelle Uno": 90,
  "Marktplatz en Rathaus": 60,
  "Burgplatz en Schlossturm": 70,
  Bolkerstraße: 60,
  Königsallee: 80,
  "Rheinuferpromenade bij KIT": 90,
  Rheinturm: 90,
  "Kölner Dom": 90,
  Hohenzollernbrücke: 120,
  "Alter Markt": 60,
  "Historisches Rathaus": 60,
  "Groß St. Martin": 70,
  Rheinauhafen: 100,
  Römerberg: 60,
  "Kaiserdom St. Bartholomäus": 70,
  "Eiserner Steg": 100,
  "Goethe-Haus": 60,
  "Main Tower": 70,
  "Alte Oper": 80,
  "Trafalgar Square": 90,
  "Covent Garden": 80,
  "St Paul’s Cathedral": 100,
  "Millennium Bridge": 110,
  "Borough Market": 80,
  "Tower Bridge": 120,
  Rådhuspladsen: 70,
  "Tivoli Gardens": 80,
  "Christiansborg Slot": 90,
  Nyhavn: 90,
  "Amalienborg Slotsplads": 90,
  "Frederik’s Church": 70,
  "Den Lille Havfrue": 120,
  "Goldenes Dachl": 60,
  "Hofburg Innsbruck": 80,
  Hofkirche: 70,
  "Dom zu St. Jakob": 70,
  Innbrücke: 100,
  "Maria-Theresien-Straße": 90,
  Stephansdom: 90,
  Hofburg: 110,
  Heldenplatz: 110,
  "Wiener Staatsoper": 80,
  Naschmarkt: 110,
  Karlskirche: 90,
  Stadtpark: 120,
  "Prater Riesenrad": 130,
};

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

const finishPromoIntro = () => {
  if (!promoIntro) return;
  window.clearTimeout(promoTimer);
  sessionStorage.setItem(promoStorageKey, "true");
  document.body.classList.remove("promo-active");
  document.body.classList.remove("promo-paused");
  promoIntro.classList.add("is-hidden");
  promoIntro.setAttribute("aria-hidden", "true");

  window.setTimeout(() => {
    promoIntro.hidden = true;
  }, 380);
};

const showPromoScene = (sceneIndex) => {
  if (!promoIntro || !promoProgress) return;
  const scenes = [...promoIntro.querySelectorAll("[data-promo-scene]")];
  const pins = [...promoIntro.querySelectorAll("[data-promo-pin]")];
  const progressItems = [...promoProgress.children];
  const duration = promoDurations[sceneIndex] || 3200;
  promoSceneIndex = sceneIndex;

  scenes.forEach((scene, index) => {
    scene.classList.toggle("active", index === sceneIndex);
  });

  pins.forEach((pin, index) => {
    pin.classList.toggle("active", index <= sceneIndex);
    pin.classList.toggle("now", index === sceneIndex);
  });

  progressItems.forEach((item, index) => {
    item.classList.toggle("done", index < sceneIndex);
    item.classList.toggle("active", index === sceneIndex);
    item.style.setProperty("--promo-duration", `${duration}ms`);
  });

  window.clearTimeout(promoTimer);
  if (!promoPaused && sceneIndex < scenes.length - 1) {
    promoTimer = window.setTimeout(() => showPromoScene(sceneIndex + 1), duration);
  }
};

const initPromoIntro = () => {
  if (!promoIntro || !promoProgress) return;

  if (isStandaloneApp()) {
    promoIntro.hidden = true;
    return;
  }

  if (sessionStorage.getItem(promoStorageKey) === "true") {
    promoIntro.hidden = true;
    return;
  }

  document.body.classList.add("promo-active");
  promoProgress.innerHTML = promoDurations.map(() => "<span></span>").join("");
  showPromoScene(0);
};

const getProgress = () => JSON.parse(localStorage.getItem(storageKey) || "{}");
const saveProgress = (progress) => localStorage.setItem(storageKey, JSON.stringify(progress));

const isAdminMode = () => localStorage.getItem(adminStorageKey) === "active";
const isUnlocked = (tourId) => isAdminMode() || Boolean(getProgress()[tourId]?.unlocked);
const completedStops = (tourId) => getProgress()[tourId]?.completed || [];
const getUnlockRadius = (stop) => stopUnlockRadii[stop.place] || defaultUnlockRadiusMeters;

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

const getChoiceOrder = (tourId, stopIndex, choices) => {
  const indexes = choices.map((_, index) => index);
  const seed = [...tourId].reduce((total, char) => total + char.charCodeAt(0), stopIndex * 2 + 1);
  const offset = (seed + 1) % indexes.length;
  return [...indexes.slice(offset), ...indexes.slice(0, offset)];
};

const deeperContextByPlace = {
  "Plaza de la Constitución":
    "Dit plein was eeuwenlang een stedelijk knooppunt. In Málaga zie je hier hoe religie, handel en dagelijks leven via smalle straten naar één centrale ruimte trekken.",
  "Catedral de Málaga":
    "La Manquita is niet alleen een bijnaam, maar ook een geheugensteun: de onafgemaakte toren laat zien dat grote stadsprojecten vaak afhankelijk waren van geld, politiek en tijd.",
  "Teatro Romano":
    "Málaga is hier bijna als een stapel geschiedenis te lezen: Romeinse resten liggen onder de blik van de Moorse Alcazaba, midden in een moderne toeristische stad.",
  "Alcazaba ingang":
    "De Alcazaba controleerde zichtlijnen naar stad, heuvel en haven. Dat maakt de plek strategischer dan alleen een mooie oude muur.",
  "Plaza de la Merced":
    "Picasso wordt hier niet alleen als kunstenaar herinnerd, maar ook als stadsidentiteit. Málaga gebruikt zijn geboorteplek om cultuur en toerisme aan elkaar te koppelen.",
  "Muelle Uno":
    "Muelle Uno laat zien hoe een havenstad zichzelf vernieuwt: de oude stad blijft zichtbaar, maar de waterkant krijgt moderne functies voor wandelen, winkels en horeca.",
  "Marktplatz en Rathaus":
    "De Marktplatz koppelt bestuur aan openbare ruimte. Het ruiterstandbeeld van Jan Wellem en het Rathaus vertellen samen hoe Düsseldorf zichzelf als residentiestad presenteerde.",
  "Burgplatz en Schlossturm":
    "Burgplatz is een scharnier tussen de Rijn en de Altstadt. De Schlossturm herinnert aan de tijd waarin macht, rivierhandel en stadsontwikkeling op dezelfde plek samenkwamen.",
  "Rheinuferpromenade bij KIT":
    "De Rheinuferpromenade is sterk omdat Düsseldorf de Rijn weer als verblijfsruimte gebruikt. De oever is niet alleen rand van de stad, maar een plek waar Altstadt, skyline en rivier samen zichtbaar worden.",
  Königsallee:
    "De Kö gebruikt water, bomen en brede profielen om luxe ruimtelijk te maken. Dure merken zitten hier omdat het adres zelf status geeft: zien, gezien worden en rustig flaneren horen bij de winkelervaring.",
  Bolkerstraße:
    "De 'langste Theke' is een bijnaam voor de dichtheid aan cafés, brouwhuizen en Altbiercultuur. Dat uitgaansnetwerk is een belangrijk deel van Düsseldorfs identiteit.",
  Rheinturm:
    "De Lichtzeitpegel maakt techniek speels zichtbaar: de toren is observatiepunt, landmark en klok tegelijk. Dat past goed bij de moderne Rijnzone.",
  "Kölner Dom":
    "De Dom is in Keulen meer dan een kerk. Door zijn torens van ongeveer 157 meter en zijn ligging naast het station is hij vaak het eerste en sterkste beeld van de stad.",
  Hohenzollernbrücke:
    "Deze brug combineert treinverkeer, voetgangersroutes en liefdessloten. Daardoor wordt infrastructuur tegelijk een ritueel en uitzichtpunt.",
  "Alter Markt":
    "Alter Markt laat het oude stedelijke ritme zien: handel, horeca, doorgangen naar de Altstadt en de nabijheid van de Rijn maken samen een plein dat blijft functioneren als ontmoetingsplek.",
  "Historisches Rathaus":
    "Het Rathaus toont de stedelijke zelfstandigheid van Keulen. De toren, beelden en decoratie laten zien dat bestuur niet verstopt werd, maar als stedelijke macht zichtbaar moest zijn.",
  "Groß St. Martin":
    "Groß St. Martin is een sterke buitenstop omdat de toren boven de Altstadt uitsteekt. Je ziet zonder naar binnen te gaan hoe kerk, plein, smalle straten en Rijn dicht bij elkaar liggen.",
  Rheinauhafen:
    "Rheinauhafen laat zien hoe een oud havengebied nieuwe stedelijke waarde krijgt. De Rijn blijft de drager, maar de functies verschuiven naar wonen, werken en recreatie.",
  Römerberg:
    "Römerberg is belangrijk omdat Frankfurt hier zijn historische gezicht laat zien, naast een stad die veel moderner en financieeler bekendstaat.",
  "Kaiserdom St. Bartholomäus":
    "De Dom herinnert aan Frankfurt als kroningsstad. Daardoor gaat deze plek niet alleen over religie, maar ook over keizerlijke macht en ceremonie.",
  "Eiserner Steg":
    "Vanaf de Eiserner Steg zie je Frankfurt in één beeld: oude stad, Main, musea en skyline. De brug maakt die lagen letterlijk oversteekbaar.",
  "Goethe-Haus":
    "Goethes geboortehuis geeft Frankfurt een cultureel anker naast banken en beurs. Een individuele schrijver wordt zo onderdeel van het collectieve stadsverhaal.",
  "Main Tower":
    "De Main Tower maakt de financiële stad tastbaar. Frankfurt gebruikt hoogbouw sterker dan veel andere Duitse steden om internationale economie zichtbaar te maken; vanaf boven zie je pas echt hoe compact oude stad, Main en bankencluster bij elkaar liggen.",
  "Alte Oper":
    "De Alte Oper toont hoe cultuur en prestige samenkomen. Het gebouw zegt: Frankfurt is niet alleen handel en banken, maar ook podium, pleinruimte en publiek leven.",
  "Trafalgar Square":
    "Trafalgar Square is ontworpen als nationaal podium. Monumenten, zichtlijnen en musea maken het plein politiek, ceremonieel en toeristisch tegelijk.",
  "Covent Garden":
    "Covent Garden veranderde van marktgebied naar cultuur- en winkelplek. De levendigheid komt uit die mix van handel, optreden en verblijf.",
  "Borough Market":
    "Borough Market laat London als handelsstad proeven. Bij London Bridge komen oude marktcultuur, spoorbogen, toerisme en internationale foodcultuur bij elkaar.",
  "St Paul’s Cathedral":
    "St Paul’s is een spiritueel en nationaal symbool. De herbouw na de Grote Brand van 1666 en de koepel van Wren maken het gebouw belangrijker dan alleen een herkenbaar silhouet.",
  "Millennium Bridge":
    "De Millennium Bridge is krachtig door zijn zichtlijn: St Paul’s, de Thames en Tate Modern worden door een voetgangersas in één verhaal gezet.",
  "Tower Bridge":
    "Tower Bridge is herkenbaar omdat moderne bascule-techniek een historisch kostuum kreeg. Hij moest werken als beweegbare brug, maar ook passen bij de Tower of London ernaast.",
  Rådhuspladsen:
    "Rådhuspladsen laat Copenhagen als functionerende hoofdstad zien: bestuur, verkeer, metro, winkels en toerisme zitten hier niet apart, maar vormen samen de entree tot de binnenstad.",
  "Tivoli Gardens":
    "Tivoli is bijzonder omdat vermaak niet aan de rand van de stad ligt, maar midden in het centrum. De gevel werkt als belofte: achter de stedelijke drukte begint een afgesloten wereld van licht, tuinen en attracties.",
  "Christiansborg Slot":
    "Christiansborg maakt staatsmacht ruimtelijk zichtbaar. Op Slotsholmen zitten parlement, regering en hoogste rechtspraak dicht bij elkaar, waardoor het eiland voelt als een bestuurlijk hart.",
  Nyhavn:
    "Nyhavn is een goed voorbeeld van hergebruik van havenruimte. Wat ooit praktisch en handelsgericht was, is nu een toeristische plek waar kleur, water, terrassen en schepen het stadsbeeld dragen.",
  "Amalienborg Slotsplads":
    "Amalienborg werkt door beheersing: vier paleizen, een open achthoekige ruimte en zichtlijnen richting kerk en haven. Daardoor voelt monarchie hier tegelijk formeel en dichtbij.",
  "Frederik’s Church":
    "Frederik’s Church, vaak Marmorkirken genoemd, versterkt de as van Frederiksstaden. De koepel geeft de wijk een herkenbaar middelpunt en maakt de route vanaf Amalienborg direct begrijpelijk.",
  "Den Lille Havfrue":
    "Den Lille Havfrue bewijst dat een icoon niet groot hoeft te zijn. Het beeld verbindt H.C. Andersen, sprookjescultuur en de havenrand tot een herkenbaar eindbeeld van Copenhagen.",
  "Goldenes Dachl":
    "Het Goldenes Dachl werkt als een klein maar krachtig machtsdecor. De erker maakte vorstelijke aanwezigheid zichtbaar midden in de Altstadt, precies waar stadsleven en prestige elkaar raakten.",
  "Hofburg Innsbruck":
    "De Hofburg laat zien dat Innsbruck meer was dan een doorgang door de Alpen. De stad werd ook residentieplek, bestuurlijk punt en onderdeel van Habsburgse macht.",
  Hofkirche:
    "De Hofkirche koppelt Innsbruck aan dynastieke herinnering. Naast Hofburg en oude stad wordt macht hier niet alleen bestuurd, maar ook herdacht en verbeeld.",
  "Dom zu St. Jakob":
    "De Dom zu St. Jakob laat de compacte kracht van Innsbruck zien: barokke monumentaliteit, kleine stedelijke ruimte en de nabijheid van de bergen vallen bijna over elkaar heen.",
  Innbrücke:
    "De Innbrug is fundamenteel voor Innsbruck. De naam van de stad verwijst naar de brug over de Inn, en daarmee naar routes, handel en de ligging tussen Alpenpassen.",
  "Maria-Theresien-Straße":
    "Maria-Theresien-Straße toont Innsbruck als representatieve wandel- en winkelstad. De straat geeft meer ruimte dan de Altstadt en laat de bergen als decor in het stadsbeeld staan.",
  Stephansdom:
    "De Stephansdom is het verticale hart van Wenen. De toren, het plein en de straten eromheen maken de kerk tot oriëntatiepunt, religieus symbool en stedelijk anker.",
  Hofburg:
    "De Hofburg is Wenen als machtscomplex: eeuwen van uitbreiding, hofleven, bestuur en representatie zijn hier niet in één gebouw, maar in een heel stedelijk gebied verzameld.",
  Heldenplatz:
    "Heldenplatz toont hoe publieke ruimte beladen kan worden. Keizerlijke monumentaliteit, militaire symboliek en latere politieke herinneringen zitten hier in dezelfde open ruimte.",
  "Wiener Staatsoper":
    "De Staatsoper gebruikt cultuur als stedelijke status. Aan de Ringstraße werd muziek niet verstopt, maar prominent ingezet om Wenen als wereldstad te presenteren.",
  Naschmarkt:
    "De Naschmarkt geeft Wenen een dagelijks en internationaal gezicht. Tussen kramen, eetplekken en talen zie je een stad die niet alleen keizerlijk, maar ook levendig en gemengd is.",
  Karlskirche:
    "De Karlskirche is barokke stadsregie: koepel, zuilen, plein en water versterken elkaar. Het gebouw is niet alleen kerk, maar ook zorgvuldig geënsceneerde ruimte.",
  Stadtpark:
    "Stadtpark laat Wenen ontspannen na alle monumentaliteit. Muziekcultuur, groen en openbare ruimte komen samen in een plek die minder formeel is, maar nog steeds typisch Weens.",
  "Prater Riesenrad":
    "De Prater laat Wenen van zijn publieke en speelse kant zien. Het Riesenrad is niet keizerlijk of kerkelijk, maar juist populair, herkenbaar en verbonden met vrije tijd.",
};

const routeGuides = {
  malaga: [
    {
      route: "Loop via Calle Santa María richting de kathedraal en kijk onderweg naar de smalle winkelstraten die op het plein uitkomen.",
      watch: "Let op hoe het straatprofiel plots opent zodra de kathedraal verschijnt.",
    },
    {
      route: "Loop langs de zuidkant van de kathedraal richting Calle Císter en daarna naar het Teatro Romano.",
      watch: "Zoek onderweg het verschil tussen kerkelijke monumentaliteit en de kleinere oude stadsstraten.",
    },
    {
      route: "Blijf bij de voet van de heuvel en loop van het Teatro Romano naar de ingang van de Alcazaba.",
      watch: "Let op hoe dicht Romeinse resten, Moorse vesting en moderne terrassen op elkaar liggen.",
    },
    {
      route: "Loop via Calle Alcazabilla naar Plaza de la Merced.",
      watch: "Kijk hoe de route van vesting en archeologie langzaam overgaat naar een levendig stadsplein.",
    },
    {
      route: "Daal af richting Paseo del Parque en loop daarna door naar Muelle Uno aan het water.",
      watch: "Let op de overgang van oude stad naar havenpromenade, palmen, verkeer en zeezicht.",
    },
  ],
  dusseldorf: [
    {
      route: "Loop vanaf de Marktplatz richting Burgplatz en houd de Schlossturm als herkenningspunt aan.",
      watch: "Let op hoe snel bestuur, Altstadt en Rijn elkaar hier raken.",
    },
    {
      route: "Loop vanaf Burgplatz de Altstadt in richting Bolkerstraße.",
      watch: "Let op hoe de open ruimte aan de Rijn meteen overgaat in smalle straten vol cafés en brouwhuizen.",
    },
    {
      route: "Loop vanaf Bolkerstraße via de winkelstraten richting Königsallee.",
      watch: "Vergelijk onderweg de drukke Altstadt-sfeer met de rustigere, luxere uitstraling van de Kö.",
    },
    {
      route: "Loop vanaf de Kö richting de Rijn en kies het stuk promenade bij KIT als tussenpunt naar de Rheinturm.",
      watch: "Let op hoe winkelstad, parkachtige randen en rivierzicht in elkaar overlopen.",
    },
    {
      route: "Volg vanaf de promenade de Rijn zuidwaarts richting Rheinturm.",
      watch: "Je blijft aan dezelfde oever: let op hoe de kade steeds moderner wordt richting MedienHafen.",
    },
  ],
  keulen: [
    {
      route: "Loop vanaf de Dom naar de Hohenzollernbrücke en neem de trappen of route richting de voetgangerszijde.",
      watch: "Kijk hoe station, Dom en brug samen één druk aankomstgebied vormen.",
    },
    {
      route: "Keer terug richting de Altstadt en loop via de Rijnkant naar Alter Markt.",
      watch: "Let op hoe de rivierpromenade overgaat in smalle straatjes en pleinen.",
    },
    {
      route: "Loop vanaf Alter Markt een kort stuk richting het Historisches Rathaus.",
      watch: "Zoek onderweg naar geveldetails die laten zien hoe dicht handel, horeca en bestuur bij elkaar lagen.",
    },
    {
      route: "Loop vanaf het Rathaus richting Groß St. Martin en blijf buiten rond de kerk en het plein.",
      watch: "Let op de toren als oriëntatiepunt en op hoe smal de oude straten richting Rijn worden.",
    },
    {
      route: "Loop vanaf Groß St. Martin richting de Rijn en volg de oever zuidwaarts naar Rheinauhafen.",
      watch: "Je hoeft geen gebouwen in: kijk buiten naar de overgang van oude Altstadt naar moderne havenrand.",
    },
  ],
  frankfurt: [
    {
      route: "Loop vanaf Römerberg richting de Kaiserdom via de oude stadskern.",
      watch: "Let op hoe reconstructie, oude vormen en moderne functies door elkaar lopen.",
    },
    {
      route: "Loop vanaf de Dom terug richting de Main en steek de Eiserner Steg op.",
      watch: "Kijk onderweg hoe snel de stad van kerk en plein naar rivierfront verandert.",
    },
    {
      route: "Steek terug naar de noordkant en loop via de binnenstad richting Goethe-Haus.",
      watch: "Let op hoe de schaal kleiner en persoonlijker wordt dan bij rivier en skyline.",
    },
    {
      route: "Loop vanaf Goethe-Haus richting het bankencluster en Main Tower.",
      watch: "Kijk omhoog: de gevels, entrees en straatbreedtes worden zakelijker en verticaler.",
    },
    {
      route: "Loop vanaf Main Tower richting Opernplatz en de Alte Oper.",
      watch: "Let op de overgang van financiële torens naar cultuurplein en monumentale gevel.",
    },
  ],
  london: [
    {
      route: "Loop vanaf Trafalgar Square via Strand richting Covent Garden.",
      watch: "Let op theaters, smalle passages en hoe druk verkeer verandert in voetgangersgebied.",
    },
    {
      route: "Loop vanaf Covent Garden richting Fleet Street en Ludgate Hill naar St Paul’s Cathedral.",
      watch: "Kijk onderweg naar de overgang van theater- en winkelstad naar de City.",
    },
    {
      route: "Loop vanaf St Paul’s recht richting de Millennium Bridge.",
      watch: "Let op hoe de zichtlijn naar de Thames steeds sterker wordt.",
    },
    {
      route: "Steek de Millennium Bridge over en loop via Bankside richting Borough Market.",
      watch: "Kijk naar Tate Modern, spoorbogen, pakhuizen en foodstalls: dit is de zuidoever als werk- en cultuurgebied.",
    },
    {
      route: "Loop vanaf Borough Market via London Bridge of de zuidelijke Thames-route richting Tower Bridge.",
      watch: "Let op hoe marktdrukte, rivierzicht en iconische bruggen elkaar opvolgen.",
    },
  ],
  copenhagen: [
    {
      route: "Loop vanaf Rådhuspladsen richting de hoofdingang van Tivoli aan de rand van het plein.",
      watch: "Let op hoe het stadhuisplein, verkeer en de speelse gevel van Tivoli bijna tegen elkaar aan liggen.",
    },
    {
      route: "Loop vanaf Tivoli terug richting het centrum en volg de route via de binnenstad naar Slotsholmen en Christiansborg Slot.",
      watch: "Kijk onderweg hoe Copenhagen wisselt van vermaak en winkelstraten naar bestuur, bruggen en paleisachtige gevels.",
    },
    {
      route: "Loop vanaf Christiansborg via Holmens Kanal richting Kongens Nytorv en door naar Nyhavn.",
      watch: "Let op de overgang van machtseiland en kanalen naar de kleurrijke havengevels van Nyhavn.",
    },
    {
      route: "Volg vanaf Nyhavn de route richting Amaliehaven en Amalienborg Slotsplads.",
      watch: "Kijk hoe de drukke havenrand langzaam overgaat in een veel formelere koninklijke ruimte.",
    },
    {
      route: "Loop vanaf Amalienborg een kort stuk via Frederiksgade naar Frederik’s Church.",
      watch: "Let op de zichtlijn: de koepel lijkt bijna als eindpunt van het paleisplein te werken.",
    },
    {
      route: "Loop vanaf Frederik’s Church via Esplanaden en langs de rand van Kastellet richting Den Lille Havfrue.",
      watch: "Let op hoe de stad opener wordt: vestinggroen, havenwater en wandelpaden nemen het over van paleisstraten.",
    },
  ],
  innsbruck: [
    {
      route: "Loop vanaf het Goldenes Dachl een kort stuk richting de Hofburg via de smalle straten van de Altstadt.",
      watch: "Let op hoe snel het intieme plein rond het Gouden Dak overgaat in een formelere hofomgeving.",
    },
    {
      route: "Loop vanaf de Hofburg richting de Hofkirche en blijf buiten rond de kerk en het museumgebied.",
      watch: "Kijk hoe residentie, herinnering en cultuur hier bijna tegen elkaar aan liggen.",
    },
    {
      route: "Loop vanaf de Hofkirche terug richting de Dom zu St. Jakob.",
      watch: "Let op hoe compact de route is: in Innsbruck liggen hof, kerk en Altstadt verrassend dicht bij elkaar.",
    },
    {
      route: "Loop vanaf de Dom door de Altstadt richting de Innbrug.",
      watch: "Kijk onderweg naar de overgang van smalle historische straten naar rivier, licht en bergzicht.",
    },
    {
      route: "Loop vanaf de Innbrug terug richting het centrum en eindig op Maria-Theresien-Straße.",
      watch: "Let op hoe de stad van rivierovergang en Altstadt verandert in een brede winkel- en flaneeras.",
    },
  ],
  vienna: [
    {
      route: "Loop vanaf de Stephansdom via de binnenstad richting de Hofburg.",
      watch: "Let op hoe winkelstraten en historische gevels langzaam overgaan in poorten en paleisruimtes.",
    },
    {
      route: "Loop door of langs de Hofburg richting Heldenplatz.",
      watch: "Kijk hoe binnenplaatsen en doorgangen uitkomen op een grote, bijna theatrale open ruimte.",
    },
    {
      route: "Loop vanaf Heldenplatz richting de Ringstraße en de Wiener Staatsoper.",
      watch: "Let op de overgang van keizerlijke pleinen naar de 19e-eeuwse stadsboulevard.",
    },
    {
      route: "Loop vanaf de Staatsoper richting de Naschmarkt via de omgeving van Karlsplatz.",
      watch: "Vergelijk de formele cultuurgebouwen met het dagelijkse marktleven dat steeds sterker wordt.",
    },
    {
      route: "Loop vanaf de Naschmarkt naar Karlskirche en gebruik de open ruimte rond Karlsplatz als oriëntatiepunt.",
      watch: "Let op hoe markt, verkeer, plein en barokke kerk hier naast elkaar bestaan.",
    },
    {
      route: "Loop vanaf Karlskirche richting Stadtpark via de oostelijke centrumrand.",
      watch: "Kijk hoe de route van barokke monumentaliteit naar groen, water en muziekherinnering beweegt.",
    },
    {
      route: "Loop vanaf Stadtpark richting Wien Mitte en verder naar de Prater-ingang bij het Riesenrad.",
      watch: "Let op hoe de stad verandert van nette centrumrand naar een grotere ontspanningszone met attracties en parkruimte.",
    },
  ],
};

const buildDeeperContext = (tour, stop) =>
  deeperContextByPlace[stop.place] ||
  `Deze plek zegt iets typisch over ${tour.city}: niet alleen het losse gebouw of plein is belangrijk, maar vooral hoe ${stop.place} verbonden is met de geschiedenis, routes en identiteit van de stad. Door ter plekke naar details te kijken, zie je beter waarom juist deze stop in de route zit.`;

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

const getWalkingRouteUrl = (from, to) =>
  `https://www.google.com/maps/dir/?api=1&origin=${from.coordinates.lat},${from.coordinates.lng}&destination=${to.coordinates.lat},${to.coordinates.lng}&travelmode=walking`;

const renderRouteGuide = (tour, stopIndex) => {
  const nextStop = tour.stops[stopIndex + 1];
  if (!nextStop) {
    return `
      <div class="route-guide complete">
        <span class="pill">Route klaar</span>
        <h3>Je hebt de laatste stop bereikt</h3>
        <p>Kijk nog één keer terug op de route en vergelijk waar je begon met waar je nu staat.</p>
      </div>
    `;
  }

  const guide = routeGuides[tour.id]?.[stopIndex];
  const currentStop = tour.stops[stopIndex];

  return `
    <div class="route-guide">
      <span class="pill">Onderweg</span>
      <h3>Naar stop ${stopIndex + 2}: ${nextStop.title}</h3>
      <p>${guide?.route || `Loop rustig door naar ${nextStop.place} en let onderweg op hoe de stad verandert.`}</p>
      <div class="walk-watch">
        <strong>Let onderweg op</strong>
        <span>${guide?.watch || "Kijk naar gevels, straatprofiel, drukte en zichtlijnen tussen de twee stops."}</span>
      </div>
      <a class="button ghost small" href="${getWalkingRouteUrl(currentStop, nextStop)}" target="_blank" rel="noopener">
        Open looproute
      </a>
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

const checkArrivalAtStop = (targetStopIndex) => {
  const tour = tours.find((item) => item.id === selectedTourId);
  const targetStop = tour?.stops[targetStopIndex];
  const status = document.querySelector("[data-arrival-status]");
  if (!tour || !targetStop) return;

  if (isAdminMode()) {
    selectedStopIndex = targetStopIndex;
    closeDialog(answerDialog);
    renderStops();
    renderAssignment();
    showToast("Adminmodus: volgende vraag geopend.");
    return;
  }

  if (!("geolocation" in navigator)) {
    if (status) status.textContent = "Je browser ondersteunt geen locatiebepaling.";
    return;
  }

  if (status) status.textContent = "We controleren of je bij de volgende stop bent...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: Math.round(position.coords.accuracy),
      };

      const distance = distanceInMeters(userLocation, targetStop.coordinates);
      const unlockRadiusMeters = getUnlockRadius(targetStop);
      locationMessage = `Locatie actief, nauwkeurigheid ongeveer ${userLocation.accuracy} m.`;

      if (distance !== null && distance <= unlockRadiusMeters) {
        selectedStopIndex = targetStopIndex;
        closeDialog(answerDialog);
        renderStops();
        renderAssignment();
        showToast("Je bent er. De volgende vraag is geopend.");
        return;
      }

      if (status) {
        status.textContent = `Je bent nog ${formatDistance(distance)} van ${targetStop.place}. Binnen ${unlockRadiusMeters} meter opent de vraag.`;
      }
    },
    () => {
      locationMessage = "Locatie niet beschikbaar. Geef toestemming om de volgende vraag te openen.";
      if (status) status.textContent = locationMessage;
    },
    { enableHighAccuracy: true, maximumAge: 10000, timeout: 12000 },
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

  const cityOptions = [
    {
      id: "all",
      label: "Alle steden",
      meta: `${tours.length} routes`,
    },
    ...tours.map((tour) => ({
      id: tour.id,
      label: tour.city,
      meta: `${tour.stops.length} stops`,
    })),
  ];

  cityTabs.innerHTML = cityOptions
    .map(
      (city) => `
        <button class="city-tab ${city.id === selectedCityId ? "active" : ""}" type="button" data-city-tab="${
          city.id
        }">
          ${city.label}
          <span>${city.meta}</span>
        </button>
      `,
    )
    .join("");
};

const renderAdminPanel = () => {
  if (!adminPanel) return;

  if (isAdminMode()) {
    adminPanel.innerHTML = `
      <div class="admin-card active">
        <div>
          <span class="pill">Admin actief</span>
          <h2>Testmodus staat aan</h2>
          <p>Aankoop en locatiecontrole worden overgeslagen op dit apparaat.</p>
        </div>
        <button class="button ghost" type="button" data-admin-logout>
          Uitloggen
        </button>
      </div>
    `;
    return;
  }

  adminPanel.innerHTML = `
    <div class="admin-card">
      <div>
        <span class="pill">Admin</span>
        <h2>Beheer toegang</h2>
        <p>Log in om routes te testen zonder aankoop of locatieblokkade.</p>
      </div>
      <div class="admin-login">
        <input type="password" data-admin-code placeholder="Admin code" aria-label="Admin code" />
        <button class="button primary" type="button" data-admin-login>
          Inloggen
        </button>
      </div>
    </div>
  `;
};

const refreshApp = () => {
  renderInstallCallout();
  renderAdminPanel();
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

const showCorrectAnswerDialog = (tour, stop, choice) => {
  if (!answerContent) return;

  const hasNextStop = selectedStopIndex < tour.stops.length - 1;
  const nextStop = hasNextStop ? tour.stops[selectedStopIndex + 1] : null;
  const guide = hasNextStop ? routeGuides[tour.id]?.[selectedStopIndex] : null;
  answerContent.innerHTML = `
    <span class="pill">Goed antwoord</span>
    <h2>${stop.title}</h2>
    <p class="correct-answer-line">
      <strong>Het goede antwoord:</strong> ${choice.text}
    </p>
    <p>${choice.feedback}</p>
    <div class="deep-answer">
      <h3>Waarom dit ertoe doet</h3>
      <p>${buildDeeperContext(tour, stop)}</p>
    </div>
    ${
      hasNextStop
        ? `
          <div class="next-route-card">
            <span class="pill">Volgende locatie</span>
            <h3>Loop naar stop ${selectedStopIndex + 2}: ${nextStop.title}</h3>
            <p><strong>${nextStop.place}</strong></p>
            ${renderStopMap(nextStop)}
            <p>${guide?.route || `Loop rustig door naar ${nextStop.place}.`}</p>
            <div class="walk-watch">
              <strong>Let onderweg op</strong>
              <span>${guide?.watch || "Kijk naar gevels, straatprofiel, drukte en zichtlijnen tussen de twee stops."}</span>
            </div>
            <p class="arrival-status" data-arrival-status>
              Open de looproute, wandel naar de plek en druk daar op “Ik ben er”.
            </p>
            <div class="hero-actions">
              <a class="button ghost" href="${getWalkingRouteUrl(stop, nextStop)}" target="_blank" rel="noopener">
                Open looproute
              </a>
              <button class="button primary" type="button" data-arrive-stop="${selectedStopIndex + 1}">
                Ik ben er
              </button>
            </div>
          </div>
        `
        : `
          <div class="hero-actions">
            <button class="button primary" type="button" data-close-answer-dialog>Tour bekijken</button>
            <button class="button ghost" type="button" data-close-answer-dialog>Sluiten</button>
          </div>
        `
    }
  `;
  openDialog(answerDialog);
};

const renderWebInstallOnly = () => {
  if (!webInstallOnly) return;

  const canInstall = Boolean(deferredInstallPrompt);
  const ios = isIosDevice();
  const mobile = isMobileDevice();
  webInstallOnly.classList.toggle("ios-install-mode", ios);

  if (ios) {
    webInstallOnly.innerHTML = `
      <div class="ios-install-card">
        <div class="ios-install-top">
          <img class="ios-install-logo" src="assets/app-icon-512.png" alt="Stadsopdracht" />
          <span class="promo-eyebrow">Installeer de webapp</span>
          <h1>Installeren om te ontdekken</h1>
          <p>
            Voeg Stadsopdracht toe aan je beginscherm. Daarna open je de routes als een echte app,
            met locatiechecks, opdrachten en je voortgang op dit apparaat.
          </p>
        </div>
        <div class="ios-install-steps" aria-label="Installatiestappen voor iPhone">
          <div class="ios-install-step">
            <span class="ios-install-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M12 15V3m0 0 4 4m-4-4-4 4" />
                <path d="M6 10v9h12v-9" />
              </svg>
            </span>
            <p><strong>Stap 1:</strong> Tik onderin Safari op de knop <strong>Delen</strong>.</p>
          </div>
          <div class="ios-install-step">
            <span class="ios-install-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
            <p><strong>Stap 2:</strong> Kies <strong>Zet op beginscherm</strong>. Staat die optie lager? Veeg dan eerst omhoog in het deelmenu.</p>
          </div>
          <div class="ios-install-step">
            <span class="ios-install-icon app" aria-hidden="true">
              <img src="assets/app-icon-192.png" alt="" />
            </span>
            <p><strong>Stap 3:</strong> Open <strong>Stadsopdracht</strong> vanaf je beginscherm.</p>
          </div>
        </div>
        <div class="ios-safari-hint" aria-hidden="true">
          <span></span>
          <strong>stadsopdracht.nl</strong>
          <span></span>
        </div>
      </div>
    `;
    return;
  }

  const helpText = ios
    ? "Op iPhone: open stadsopdracht.nl in Safari, tik op Delen en kies Zet op beginscherm."
    : mobile
      ? "Op Android: open stadsopdracht.nl in Chrome en kies Installeren of Toevoegen aan startscherm."
      : "Pak je telefoon, open stadsopdracht.nl en installeer de webapp via Safari of Chrome.";
  const helpSteps = `
    <div class="web-install-steps">
      <strong>Zo installeer je Stadsopdracht op je telefoon</strong>
      <ol>
        <li>Open <span>stadsopdracht.nl</span> op je telefoon.</li>
        <li>iPhone: gebruik Safari, tik op Delen en kies Zet op beginscherm.</li>
        <li>Android: gebruik Chrome, tik op het menu en kies Installeren of Toevoegen aan startscherm.</li>
        <li>Open daarna Stadsopdracht vanaf je beginscherm.</li>
      </ol>
    </div>
  `;
  webInstallOnly.innerHTML = `
    <div class="web-install-card">
      <img src="assets/app-icon-512.png" alt="Stadsopdracht" />
      <span class="promo-eyebrow">${mobile ? "Installeer de webapp" : "Gebruik je telefoon"}</span>
      <h1>${mobile ? "Open Stadsopdracht vanaf je beginscherm" : "Installeer op je mobiel"}</h1>
      <p>
        De routes, locatiechecks en voortgang zijn bedoeld voor onderweg. Op desktop tonen we alleen
        de introductie; wandelen doe je straks in de webapp op je telefoon.
      </p>
      ${mobile ? "" : `<p class="web-install-kicker">Open deze site op je telefoon om de app te installeren.</p>`}
      ${
        installHelpVisible || ios || !canInstall || !mobile
          ? `<p class="web-install-help">${helpText}</p>${installHelpVisible || !mobile ? helpSteps : ""}`
          : ""
      }
      <div class="web-install-actions">
        ${
          mobile
            ? `<button class="button primary" type="button" data-install-app>Installeer webapp</button>`
            : ""
        }
        ${mobile ? `<button class="button ghost" type="button" data-show-install-help>Installatiehulp</button>` : ""}
      </div>
    </div>
  `;
};

const renderInstallCallout = () => {
  if (!installCallout) return;

  if (!isStandaloneApp()) {
    installCallout.innerHTML = "";
    renderWebInstallOnly();
    return;
  }

  installCallout.innerHTML = `
    <div>
      <span class="pill">Webapp actief</span>
      <h2>Stadsopdracht staat klaar als app</h2>
      <p>Open hem vanaf je beginscherm wanneer je in de stad loopt.</p>
    </div>
  `;
};

const renderTours = () => {
  tourGrid.innerHTML = tours
    .filter((tour) => selectedCityId === "all" || tour.id === selectedCityId)
    .map((tour) => {
      const unlocked = isUnlocked(tour.id);
      return `
        <article class="tour-card">
          ${renderCityPhoto(tour, "card-photo")}
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
        ${renderCityPhoto(tour, "preview-photo")}
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
  const unlockRadiusMeters = getUnlockRadius(stop);
  const isNearby = distance !== null && distance <= unlockRadiusMeters;
  const adminMode = isAdminMode();
  const locationLocked = !adminMode && !locked && !done.includes(selectedStopIndex) && !isNearby;
  const answerLocked = locked || locationLocked;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${stop.coordinates.lat},${stop.coordinates.lng}`;
  const locationHelp = locked
    ? "Koop of ontgrendel de tour om locatiecontrole te gebruiken."
    : adminMode
      ? "Adminmodus actief: locatiecontrole wordt overgeslagen."
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
          <div class="location-gate ${adminMode || isNearby || done.includes(selectedStopIndex) ? "open" : ""}">
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
            ${getChoiceOrder(tour.id, selectedStopIndex, stop.choices)
              .map((choiceIndex) => {
                const choice = stop.choices[choiceIndex];
                return `
                  <button class="answer-option" type="button" data-answer-choice="${choiceIndex}" ${
                    answerLocked ? "disabled" : ""
                  }>
                    ${choice.text}
                  </button>
                `;
              })
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
        <p class="map-caption">Actieve stop: ${selectedStopIndex + 1}. Afstand: ${
          adminMode ? "adminmodus" : formatDistance(distance)
        }.</p>
        ${renderRouteGuide(tour, selectedStopIndex)}
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
  const adminLogin = event.target.closest("[data-admin-login]");
  const adminLogout = event.target.closest("[data-admin-logout]");
  const closeAnswerDialog = event.target.closest("[data-close-answer-dialog]");
  const arriveStop = event.target.closest("[data-arrive-stop]");
  const promoFinish = event.target.closest("[data-promo-finish]");
  const promoToggle = event.target.closest("[data-promo-toggle]");

  if (promoFinish) {
    finishPromoIntro();
    return;
  }

  if (promoToggle) {
    promoPaused = !promoPaused;
    document.body.classList.toggle("promo-paused", promoPaused);
    promoToggle.textContent = promoPaused ? "►" : "❚❚";
    promoToggle.setAttribute("aria-label", promoPaused ? "Speel intro af" : "Pauzeer intro");
    window.clearTimeout(promoTimer);

    if (!promoPaused) {
      showPromoScene(Math.min(promoSceneIndex + 1, promoDurations.length - 1));
    }

    return;
  }

  if (buyButton) openCheckout(buyButton.dataset.buyTour);
  if (openButton) openTour(openButton.dataset.openTour);
  if (cityTab) {
    selectedCityId = cityTab.dataset.cityTab;
    resetWorkspace();
    renderCityTabs();
    renderTours();
  }

  if (adminLogin) {
    const input = document.querySelector("[data-admin-code]");
    if (input?.value.trim() !== adminAccessCode) {
      showToast("Admin code klopt niet.");
      return;
    }

    localStorage.setItem(adminStorageKey, "active");
    renderAdminPanel();
    renderTours();
    if (selectedTourId) {
      renderStops();
      renderAssignment();
    }
    showToast("Adminmodus actief.");
  }

  if (adminLogout) {
    localStorage.removeItem(adminStorageKey);
    renderAdminPanel();
    renderTours();
    if (selectedTourId) {
      renderStops();
      renderAssignment();
    }
    showToast("Adminmodus uitgeschakeld.");
  }

  if (closeAnswerDialog) {
    closeDialog(answerDialog);
  }

  if (arriveStop) {
    checkArrivalAtStop(Number(arriveStop.dataset.arriveStop));
  }

  if (installHelpButton) {
    installHelpVisible = true;
    renderInstallCallout();
    renderWebInstallOnly();
  }

  if (installButton) {
    if (!deferredInstallPrompt) {
      installHelpVisible = true;
      renderInstallCallout();
      renderWebInstallOnly();
      return;
    }

    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.finally(() => {
      deferredInstallPrompt = null;
      renderInstallCallout();
      renderWebInstallOnly();
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
    renderAssignment();
    showCorrectAnswerDialog(tour, tour.stops[selectedStopIndex], choice);
  }

  if (startPayment) {
    startPaymentProcessing(startPayment.dataset.startPayment);
  }

  if (closeCheckout) {
    closeDialog(checkoutDialog);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  if (!event.target.closest("[data-admin-code]")) return;
  document.querySelector("[data-admin-login]")?.click();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  renderInstallCallout();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  applyRuntimeMode();
  renderInstallCallout();
  showToast("Webapp geïnstalleerd.");
});

applyRuntimeMode();
refreshApp();
initPromoIntro();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}
