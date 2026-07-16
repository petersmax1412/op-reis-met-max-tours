const tours = [
  {
    id: "malaga",
    city: "Málaga",
    title: "Málaga Centro: sporen van zon, steen en zee",
    price: "€4,49",
    duration: "140 min",
    distance: "3,9 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een interactieve wandeling door het historische centrum, langs de kathedraal, Alcazaba, Picasso-sporen, haven en strand.",
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
        title: "Bekijk de haven",
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
      {
        title: "Eindig bij La Malagueta",
        place: "Playa de la Malagueta",
        coordinates: { lat: 36.7191, lng: -4.4099 },
        assignment:
          "Loop door richting het strand en kijk hoe de stad overgaat van havenpromenade naar dagelijkse kustplek.",
        question: "Waarom is La Malagueta een logisch extra eindpunt voor Málaga?",
        hint: "Let op de overgang van historische stad naar haven, promenade en strand.",
        choices: [
          {
            text: "Omdat Málaga hier duidelijk laat zien dat stad, haven en strand dicht op elkaar liggen",
            correct: true,
            feedback:
              "Precies. La Malagueta maakt Málaga als kuststad concreet: na pleinen, vesting en haven eindig je bij het strand waar de stad letterlijk aan zee raakt.",
          },
          {
            text: "Omdat dit het hoogste bergpunt van Málaga is",
            correct: false,
            feedback: "Nee, deze stop draait juist om de lage kustlijn en de overgang naar strand.",
          },
          {
            text: "Omdat hier geen enkele relatie met de haven of stad is",
            correct: false,
            feedback: "Niet goed. Je ziet hier juist hoe dichtbij haven, centrum en strand bij elkaar liggen.",
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
    duration: "150 min",
    distance: "3,8 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een stadswandeling van het Rathaus en de Rijn naar Königsallee, de langste Theke, Rheinturm en MedienHafen.",
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
        title: "Kijk naar kunst aan de Grabbeplatz",
        place: "Kunstsammlung K20",
        coordinates: { lat: 51.2276, lng: 6.7758 },
        assignment:
          "Bekijk het museumgebouw en het plein eromheen. Zoek hoe moderne kunst hier vlak naast Altstadt en uitgaansleven staat.",
        question: "Waarom is Kunstsammlung K20 een sterke extra laag in Düsseldorf?",
        hint: "Denk aan kunst, centrumligging en contrast met de cafés van de Altstadt.",
        choices: [
          {
            text: "Omdat moderne kunst hier direct naast bestuur, Altstadt en uitgaanscultuur ligt",
            correct: true,
            feedback:
              "Klopt. K20 laat zien dat Düsseldorf niet alleen Rijn, winkels en Altbier is, maar ook een serieuze kunststad midden in het centrum.",
          },
          {
            text: "Omdat het museum ver buiten de stad in een bos ligt",
            correct: false,
            feedback: "Nee, juist de centrale ligging maakt deze stop logisch.",
          },
          {
            text: "Omdat Düsseldorf geen band met moderne kunst heeft",
            correct: false,
            feedback: "Niet goed. De kunstcollecties zijn juist een belangrijk deel van het culturele profiel van de stad.",
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
      {
        title: "Eindig tussen havenarchitectuur",
        place: "MedienHafen",
        coordinates: { lat: 51.2161, lng: 6.7585 },
        assignment:
          "Loop vanaf de Rheinturm richting de moderne havengebouwen en zoek hoe oude havenruimte is veranderd in architectuur, horeca en kantoren.",
        question: "Wat maakt MedienHafen een logisch eindpunt na de Altstadt en Rheinturm?",
        hint: "Vergelijk oude Rijnstad, moderne toren en hergebruik van havengebied.",
        choices: [
          {
            text: "Het laat zien hoe Düsseldorf oude havenruimte gebruikt voor moderne architectuur en stadsleven",
            correct: true,
            feedback:
              "Precies. MedienHafen maakt de route compleet: je begint bij bestuur en Altstadt, volgt de Rijn en eindigt waar Düsseldorf zichzelf modern en creatief presenteert.",
          },
          {
            text: "Omdat hier alleen middeleeuwse stadsmuren zonder moderne gebouwen staan",
            correct: false,
            feedback: "Nee, juist de moderne architectuur en hergebruikte havenruimte vallen hier op.",
          },
          {
            text: "Omdat de Rijn vanaf hier volledig onzichtbaar is",
            correct: false,
            feedback: "Niet goed. De Rijn en havencontext zijn juist de basis van dit gebied.",
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
    duration: "160 min",
    distance: "4,0 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Ontdek Keulen via de Dom, de Rijnbrug, oude pleinen, Groß St. Martin, het Schokoladenmuseum en de moderne havenrand.",
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
        title: "Bekijk kunst naast de Dom",
        place: "Museum Ludwig",
        coordinates: { lat: 50.9407, lng: 6.9606 },
        assignment:
          "Kijk naar de ligging van het museum tussen Dom, station en Rijn. Zoek waarom moderne kunst hier niet losstaat van de stad.",
        question: "Waarom past Museum Ludwig goed direct na de Dom?",
        hint: "Let op de korte afstand tussen religieus icoon, station, museum en rivier.",
        choices: [
          {
            text: "Omdat Keulen hier oude religieuze identiteit en moderne kunst heel dicht bij elkaar zet",
            correct: true,
            feedback:
              "Precies. Museum Ludwig maakt de eerste stop rijker: naast de middeleeuwse Dom zie je Keulen als moderne museumstad aan de Rijn.",
          },
          {
            text: "Omdat het museum vooral een parkeerplaats zonder collectie is",
            correct: false,
            feedback: "Nee, dit is juist een belangrijk museum voor moderne kunst.",
          },
          {
            text: "Omdat het ver weg ligt van Dom, station en Rijn",
            correct: false,
            feedback: "Niet goed. De kracht zit juist in de extreem centrale ligging.",
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
        title: "Volg de Rijn naar chocolade",
        place: "Schokoladenmuseum Köln",
        coordinates: { lat: 50.9317, lng: 6.9642 },
        assignment:
          "Kijk naar de ligging op het schiereiland aan de Rijn en zoek waarom juist zo’n museum goed past bij handel, haven en toerisme.",
        question: "Waarom past het Schokoladenmuseum goed op deze route langs de Rijn?",
        hint: "Denk aan handel, koloniale goederen, havenruimte en een publieksvriendelijke museumfunctie.",
        choices: [
          {
            text: "Omdat chocoladegeschiedenis, handel en hergebruikte Rijnruimte hier samenkomen",
            correct: true,
            feedback:
              "Klopt. Het museum voelt luchtig, maar past serieus bij de Rijnstad: goederen, handel, havenruimte en toerisme komen hier op een toegankelijke manier samen.",
          },
          {
            text: "Omdat het museum midden in een bergdal zonder rivier ligt",
            correct: false,
            feedback: "Nee, de ligging aan de Rijn is juist belangrijk voor het verhaal van handel en stad.",
          },
          {
            text: "Omdat chocolade niets met handel of wereldroutes te maken heeft",
            correct: false,
            feedback: "Niet goed. Chocolade is juist verbonden met handelsstromen, verwerking en consumptiecultuur.",
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
    duration: "145 min",
    distance: "4,6 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een compacte route langs Römerberg, Paulskirche, Dom, bruggen, Goethe en de skyline van Frankfurt.",
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
        title: "Sta bij de Paulskirche",
        place: "Paulskirche Frankfurt",
        coordinates: { lat: 50.1113, lng: 8.6809 },
        assignment:
          "Kijk naar de ronde vorm en de sobere uitstraling. Zoek waarom dit gebouw meer politiek dan kerkelijk voelt.",
        question: "Waarom is de Paulskirche belangrijk voor Frankfurt en Duitsland?",
        hint: "Denk aan vergadering, democratie en nationale herinnering.",
        choices: [
          {
            text: "Omdat de plek verbonden is met vroege parlementaire en democratische geschiedenis",
            correct: true,
            feedback:
              "Precies. De Paulskirche is niet alleen een kerkgebouw: ze is een herinneringsplek voor democratie, debat en politieke modernisering in Duitsland.",
          },
          {
            text: "Omdat het gebouw vooral bekend is als wolkenkrabber",
            correct: false,
            feedback: "Nee, de kracht zit niet in hoogte, maar in politieke betekenis.",
          },
          {
            text: "Omdat hier nooit publieke bijeenkomsten of politiek plaatsvonden",
            correct: false,
            feedback: "Juist wel. De plek is belangrijk door vergaderen, debat en democratische herinnering.",
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
        title: "Kijk naar de Museumsufer",
        place: "Städel Museum",
        coordinates: { lat: 50.1031, lng: 8.6742 },
        assignment:
          "Loop aan de zuidoever richting het museum en kijk hoe Frankfurt cultuur aan de rivier heeft georganiseerd.",
        question: "Waarom is de Museumsufer een belangrijke tegenhanger van de skyline?",
        hint: "Denk aan kunst, rivier, wandelen en publieke cultuur.",
        choices: [
          {
            text: "Omdat de zuidoever laat zien dat Frankfurt ook een sterke museum- en cultuurstad is",
            correct: true,
            feedback:
              "Ja. De Museumsufer maakt Frankfurt breder dan banken alleen: aan de Main wordt cultuur een route, met musea, uitzicht en publieke ruimte.",
          },
          {
            text: "Omdat hier alleen snelwegen zonder musea liggen",
            correct: false,
            feedback: "Nee, juist de reeks musea aan de oever is hier bepalend.",
          },
          {
            text: "Omdat de Main niets met de cultuurroute te maken heeft",
            correct: false,
            feedback: "Niet goed. De rivier organiseert de hele ervaring van deze museumzone.",
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
    duration: "210 min",
    distance: "7,0 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een grote route door centraal London langs West End, rechtspraak, St Paul’s, Tate Modern, Shakespeare’s Globe, Borough Market en de Thames.",
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
        title: "Voel de theaterdrukte",
        place: "Leicester Square",
        coordinates: { lat: 51.5106, lng: -0.1301 },
        assignment:
          "Kijk naar bioscopen, theaters, drukte en de routes eromheen. Zoek waarom dit plein voelt als entertainmentknooppunt.",
        question: "Waarom past Leicester Square goed tussen Trafalgar Square en Covent Garden?",
        hint: "Denk aan theater, film, drukte en korte looproutes door West End.",
        choices: [
          {
            text: "Omdat het plein de entertainmentlaag van West End heel direct zichtbaar maakt",
            correct: true,
            feedback:
              "Klopt. Leicester Square is geen rustig ceremonieel plein, maar een plek van premières, theaters, bioscopen en publieksdrukte.",
          },
          {
            text: "Omdat het vooral een stille kloostertuin is",
            correct: false,
            feedback: "Nee, de plek draait juist om entertainment en druk stedelijk gebruik.",
          },
          {
            text: "Omdat West End hier volledig ophoudt",
            correct: false,
            feedback: "Niet goed. Je staat juist midden in de entertainmentzone van West End.",
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
        title: "Loop langs recht en macht",
        place: "Royal Courts of Justice",
        coordinates: { lat: 51.5136, lng: -0.1133 },
        assignment:
          "Bekijk de gotische gevel aan Strand en zoek hoe rechtspraak hier bijna als kathedraal van de wet wordt neergezet.",
        question: "Waarom zijn de Royal Courts of Justice een sterke stop op weg naar de City?",
        hint: "Let op architectuur, gezag en de ligging tussen West End en City.",
        choices: [
          {
            text: "Omdat rechtspraak hier zichtbaar gezag krijgt op een belangrijke stadsroute",
            correct: true,
            feedback:
              "Precies. De gevel gebruikt bijna kerkelijke monumentaliteit om recht en gezag zichtbaar te maken aan een drukke route richting de City.",
          },
          {
            text: "Omdat het gebouw vooral een pretparkattractie is",
            correct: false,
            feedback: "Nee, de functie en uitstraling draaien om rechtspraak en institutioneel gezag.",
          },
          {
            text: "Omdat het gebouw bewust niet zichtbaar is vanaf de straat",
            correct: false,
            feedback: "Niet goed. De gevel is juist nadrukkelijk aanwezig aan Strand.",
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
        title: "Sta bij Tate Modern",
        place: "Tate Modern",
        coordinates: { lat: 51.5076, lng: -0.0994 },
        assignment:
          "Bekijk de oude elektriciteitscentrale van buiten en zoek hoe industrie hier kunst en publieke ruimte is geworden.",
        question: "Waarom past Tate Modern zo sterk bij de Millennium Bridge?",
        hint: "Kijk naar hergebruik, moderne kunst en de zichtlijn naar St Paul’s.",
        choices: [
          {
            text: "Omdat een oud industrieel gebouw hier een moderne kunstbestemming aan de Thames werd",
            correct: true,
            feedback:
              "Precies. Tate Modern laat London goed zien: oude infrastructuur krijgt een nieuwe culturele rol, direct verbonden met St Paul’s via de voetgangersbrug.",
          },
          {
            text: "Omdat Tate Modern vooral een middeleeuws kasteel is",
            correct: false,
            feedback: "Nee, het gebouw komt uit industriële geschiedenis en is hergebruikt als kunstmuseum.",
          },
          {
            text: "Omdat het museum bewust geen relatie met de rivier heeft",
            correct: false,
            feedback: "Niet goed. De ligging aan de Thames en de brug is juist bepalend.",
          },
        ],
      },
      {
        title: "Kijk naar Shakespeare’s Globe",
        place: "Shakespeare’s Globe",
        coordinates: { lat: 51.5081, lng: -0.0972 },
        assignment:
          "Blijf buiten en vergelijk het ronde theater met Tate Modern en de rivier ernaast. Zoek waarom Bankside zo’n culturele laag heeft.",
        question: "Waarom past Shakespeare’s Globe goed op de route langs Bankside?",
        hint: "Denk aan theatergeschiedenis, rivierkant en herbouw van cultuurplekken.",
        choices: [
          {
            text: "Omdat het theater de historische entertainmentkant van de zuidoever zichtbaar maakt",
            correct: true,
            feedback:
              "Precies. Bankside was lang een plek voor drukte, theater en vermaak buiten de formele City. The Globe maakt die culturele laag zichtbaar tussen brug, Tate Modern en markt.",
          },
          {
            text: "Omdat dit vooral een modern vliegveld naast de Thames is",
            correct: false,
            feedback: "Nee, dit draait om theatergeschiedenis en de culturele zuidoever.",
          },
          {
            text: "Omdat Shakespeare geen relatie met theater had",
            correct: false,
            feedback: "Niet goed. Juist Shakespeare en theater maken deze plek herkenbaar.",
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
    duration: "180 min",
    distance: "5,7 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een wandelroute langs Rådhuspladsen, Tivoli, Rundetaarn, Christiansborg, Rosenborg, Nyhavn, Amalienborg, Marmorkirken en de waterkant.",
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
        title: "Zoek uitzicht bij Rundetaarn",
        place: "Rundetaarn",
        coordinates: { lat: 55.6814, lng: 12.5758 },
        assignment:
          "Kijk naar de ronde toren en de drukke straten eromheen. Zoek waarom wetenschap, uitzicht en centrumleven hier samenkomen.",
        question: "Waarom is Rundetaarn een slimme extra stop in Copenhagen?",
        hint: "Denk aan observatie, universiteit, uitzicht en ligging in het oude centrum.",
        choices: [
          {
            text: "Omdat de toren wetenschap, oriëntatie en stadsuitzicht midden in het centrum bundelt",
            correct: true,
            feedback:
              "Klopt. Rundetaarn is meer dan een uitzichtpunt: de toren hoort bij Copenhagen als kennisstad en laat tegelijk de compacte binnenstad van boven begrijpen.",
          },
          {
            text: "Omdat de toren diep onder de grond ligt",
            correct: false,
            feedback: "Nee, juist hoogte en uitzicht maken deze stop logisch.",
          },
          {
            text: "Omdat Copenhagen geen oude binnenstad heeft",
            correct: false,
            feedback: "Niet goed. De toren staat juist midden in een historische stadslaag.",
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
        title: "Loop naar koninklijk groen",
        place: "Rosenborg Slot",
        coordinates: { lat: 55.6859, lng: 12.5777 },
        assignment:
          "Bekijk het kasteel en de tuinen van buiten. Zoek hoe koninklijke macht hier kleiner en parkachtiger voelt dan bij Amalienborg.",
        question: "Wat voegt Rosenborg toe aan het koninklijke verhaal van Copenhagen?",
        hint: "Vergelijk kasteel, tuin, kroonjuwelen en de latere formele ruimte van Amalienborg.",
        choices: [
          {
            text: "Rosenborg laat een oudere, tuinachtige en verzamelende kant van koninklijke macht zien",
            correct: true,
            feedback:
              "Precies. Rosenborg voelt intiemer dan Amalienborg: kasteel, tuin en koninklijke collecties maken macht hier bijna museaal en parkachtig.",
          },
          {
            text: "Omdat Rosenborg vooral een modern vliegveld is",
            correct: false,
            feedback: "Nee, dit is een historisch kasteel met tuinen in de stad.",
          },
          {
            text: "Omdat er geen relatie is met koninklijke geschiedenis",
            correct: false,
            feedback: "Niet goed. Juist die koninklijke geschiedenis maakt de plek sterk.",
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
    duration: "135 min",
    distance: "3,0 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een compacte route door de Altstadt langs het Gouden Dak, Hofburg, Hofkirche, Dom, Innbrug, Maria-Theresien-Straße en Triumphpforte.",
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
        title: "Loop over de grote stadsas",
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
      {
        title: "Eindig bij de Triumphpforte",
        place: "Triumphpforte",
        coordinates: { lat: 47.2628, lng: 11.3947 },
        assignment:
          "Bekijk de poort aan het einde van de straat en zoek hoe feest, macht en herinnering in één stadsmonument passen.",
        question: "Waarom is de Triumphpforte een sterk eindpunt voor Innsbruck?",
        hint: "Let op de ligging aan de stadsas en op het idee van een poort als ceremonieel stadsbeeld.",
        choices: [
          {
            text: "Omdat de poort de representatieve straat afsluit met ceremonie, macht en herinnering",
            correct: true,
            feedback:
              "Klopt. De Triumphpforte werkt als eindteken van de stadsas: je loopt van compacte Altstadt naar een ceremonieel monument dat Innsbruck als hof- en herinneringsstad laat zien.",
          },
          {
            text: "Omdat de poort midden op een afgelegen bergtop staat",
            correct: false,
            feedback: "Nee, de kracht zit juist in de stedelijke ligging aan het einde van de straat.",
          },
          {
            text: "Omdat het monument niets met representatie te maken heeft",
            correct: false,
            feedback: "Niet goed. Een triomfpoort is bijna per definitie een representatief en ceremonieel stadsbeeld.",
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
    duration: "220 min",
    distance: "8,2 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een rijke route door Wenen langs Stephansdom, Hofburg, Heldenplatz, Staatsoper, Musikverein, Naschmarkt, Karlskirche, Hundertwasserhaus en Prater.",
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
        title: "Luister naar de muziekstad",
        place: "Musikverein",
        coordinates: { lat: 48.2005, lng: 16.3726 },
        assignment:
          "Bekijk de buitenkant en de ligging vlak bij de Ringstraße. Zoek hoe concertcultuur hier dezelfde status krijgt als paleizen en opera.",
        question: "Waarom past de Musikverein zo goed bij het verhaal van Wenen?",
        hint: "Denk aan concertcultuur, prestige en de stad als muziekhoofdstad.",
        choices: [
          {
            text: "Omdat Wenen hier zijn muziekcultuur als stedelijke prestigeplek zichtbaar maakt",
            correct: true,
            feedback:
              "Precies. De Musikverein laat zien dat muziek in Wenen niet alleen entertainment is, maar identiteit, status en internationale uitstraling.",
          },
          {
            text: "Omdat Wenen nauwelijks bekendstaat om muziek",
            correct: false,
            feedback: "Nee, muziek is juist een van de sterkste lagen van de stad.",
          },
          {
            text: "Omdat het gebouw vooral een goederenloods is",
            correct: false,
            feedback: "Niet goed. De functie en uitstraling draaien om concertcultuur.",
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
        title: "Zoek kleur buiten de rechte lijn",
        place: "Hundertwasserhaus",
        coordinates: { lat: 48.2072, lng: 16.394 },
        assignment:
          "Bekijk de gevel van buiten en zoek hoe kleur, onregelmatigheid en planten afwijken van de formele Ringstraße-stad.",
        question: "Wat voegt Hundertwasserhaus toe aan de Weense route?",
        hint: "Vergelijk deze gevel met de paleizen, opera en rechte stadsboulevards eerder in de route.",
        choices: [
          {
            text: "Het laat een speelsere, ecologische en anti-formele kant van Wenen zien",
            correct: true,
            feedback:
              "Klopt. Hundertwasserhaus breekt bewust met rechte monumentaliteit: kleur, groen en onregelmatigheid maken hier een heel andere stadslaag zichtbaar.",
          },
          {
            text: "Omdat het exact hetzelfde is als de Hofburg",
            correct: false,
            feedback: "Nee, juist het contrast met de formele keizerlijke stad maakt deze stop interessant.",
          },
          {
            text: "Omdat de gevel volledig kleurloos en symmetrisch is",
            correct: false,
            feedback: "Niet goed. Kleur en onregelmatigheid zijn juist de kern.",
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
  {
    id: "madrid",
    city: "Madrid",
    title: "Madrid: park, stationsoase en koninklijke assen",
    price: "€4,49",
    duration: "220 min",
    distance: "8,1 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een grote route van Retiro Park via Atocha, Prado, Sol, Plaza Mayor, Gran Vía, Debod en Palacio Real naar Plaza de España.",
    stops: [
      {
        title: "Begin bij het Retiro-meer",
        place: "Estanque Grande del Retiro",
        coordinates: { lat: 40.41696, lng: -3.68432 },
        assignment:
          "Kijk naar het water, de bootjes, de randen en het monument van Alfonso XII. Zoek waarom dit meer tegelijk recreatie en stadsdecor is.",
        question: "Waarom is het Estanque Grande zo’n sterk startpunt voor Madrid?",
        hint: "Let op water, zichtlijnen, rust en de monumentale rand.",
        choices: [
          {
            text: "Omdat natuur, ontspanning en koninklijke stadsdecoratie hier samenkomen",
            correct: true,
            feedback:
              "Precies. Retiro voelt ontspannen, maar is niet zomaar natuur: het park komt uit een koninklijke context en gebruikt water, zichtlijnen en monumenten om de stad rust én grandeur te geven.",
          },
          {
            text: "Omdat dit vooral een modern zakendistrict zonder parkfunctie is",
            correct: false,
            feedback: "Nee, juist de parkfunctie en het historische decor maken deze plek sterk.",
          },
          {
            text: "Omdat Madrid hier direct aan zee ligt",
            correct: false,
            feedback: "Niet goed. Madrid ligt landinwaarts; het water werkt hier juist als ontworpen stadsrust.",
          },
        ],
      },
      {
        title: "Zoek glas tussen de bomen",
        place: "Palacio de Cristal",
        coordinates: { lat: 40.41356, lng: -3.68206 },
        assignment:
          "Bekijk het gebouw van buiten en zoek hoe glas, ijzer, water en bomen samen een bijna lichte tentoonstellingsplek maken.",
        question: "Wat maakt het Palacio de Cristal typisch voor een stad die cultuur en parklandschap wil verbinden?",
        hint: "Kijk naar materiaal, licht, water en de ligging midden in Retiro.",
        choices: [
          {
            text: "Het gebouw gebruikt glas, ijzer en water om natuur en tentoonstelling in elkaar te schuiven",
            correct: true,
            feedback:
              "Ja. Het Palacio de Cristal was gebouwd als glazen tentoonstellingsarchitectuur, maar werkt nu vooral als poëtisch punt in het park: techniek, licht, kunst en landschap versterken elkaar.",
          },
          {
            text: "Omdat het gebouw expres helemaal ondergronds is gemaakt",
            correct: false,
            feedback: "Nee, de kracht zit juist in zichtbaarheid, transparantie en reflectie.",
          },
          {
            text: "Omdat het alleen als gewoon treinstation is ontworpen",
            correct: false,
            feedback: "Niet goed. Het is een parkpaviljoen en tentoonstellingsplek, geen station.",
          },
        ],
      },
      {
        title: "Vind de oase van Atocha",
        place: "Puerta de Atocha tropentuin",
        coordinates: { lat: 40.40663, lng: -3.69076 },
        assignment:
          "Zoek de tropische tuin in of bij de oude stationshal. Vergelijk de drukte van reizen met de rust van planten en glas.",
        question: "Waarom voelt Puerta de Atocha als meer dan alleen een station?",
        hint: "Let op oud stationsglas, reizigersstromen, wachtruimte en de tropische tuin.",
        choices: [
          {
            text: "Omdat de oude hal reizen, architectuur en een onverwachte binnentuin combineert",
            correct: true,
            feedback:
              "Klopt. Atocha is een mobiliteitsknooppunt, maar de oude hal maakt wachten bijna stedelijk theater: treinen, glasarchitectuur en tropisch groen geven Madrid hier een onverwachte oase.",
          },
          {
            text: "Omdat er geen treinverbindingen meer zijn",
            correct: false,
            feedback: "Nee, Atocha is juist een belangrijk station. De verrassing zit in de combinatie met de tuin.",
          },
          {
            text: "Omdat de tuin midden op een snelweg ligt",
            correct: false,
            feedback: "Niet goed. De tuin hoort bij de stationsruimte en verzacht juist de drukte van reizen.",
          },
        ],
      },
      {
        title: "Kijk naar de museumas",
        place: "Museo del Prado",
        coordinates: { lat: 40.4138, lng: -3.6921 },
        assignment:
          "Bekijk de omgeving van het Prado en de brede Paseo del Prado. Zoek hoe kunst, wetenschap en prestige hier een stadsas vormen.",
        question: "Waarom is het Prado logisch op de route tussen Atocha en Sol?",
        hint: "Denk aan kunstcollecties, Paseo del Prado en de culturele as van Madrid.",
        choices: [
          {
            text: "Omdat Madrid hier zijn grote museum- en cultuuras zichtbaar maakt",
            correct: true,
            feedback:
              "Precies. Het Prado is meer dan één museum: samen met de Paseo del Prado laat het zien hoe Madrid cultuur als stedelijke hoofdroute inzet.",
          },
          {
            text: "Omdat het Prado vooral een voetbalstadion is",
            correct: false,
            feedback: "Nee, het Prado hoort bij de belangrijkste kunstmusea van Madrid.",
          },
          {
            text: "Omdat deze plek ver weg ligt van alle culturele routes",
            correct: false,
            feedback: "Niet goed. Juist de ligging aan de museumas maakt deze stop logisch.",
          },
        ],
      },
      {
        title: "Sta midden op Puerta del Sol",
        place: "Puerta del Sol",
        coordinates: { lat: 40.41694, lng: -3.70353 },
        assignment:
          "Zoek het Casa de Correos, de klok, Kilometer Zero en de beer met de aardbeiboom. Noteer waarom dit plein zo’n stadsicoon is.",
        question: "Waarom werkt Puerta del Sol als symbolisch middelpunt van Madrid?",
        hint: "Let op routes, klok, nationale afstandsmeting en herkenbare stadsbeelden.",
        choices: [
          {
            text: "Omdat routes, tijd, nationale oriëntatie en stadsidentiteit hier samenkomen",
            correct: true,
            feedback:
              "Precies. Sol is niet alleen druk: de klok, Kilometer Zero en de omliggende straten maken het plein tot een plek waar Madrid zichzelf als centrum laat voelen.",
          },
          {
            text: "Omdat Sol vooral een stille buitenwijk zonder verkeer is",
            correct: false,
            feedback: "Nee, juist de drukte en centrale routes maken Sol belangrijk.",
          },
          {
            text: "Omdat het plein alleen bekend is door een haven",
            correct: false,
            feedback: "Niet goed. Madrid heeft geen zeehaven; Sol draait om centrumfunctie, tijd en oriëntatie.",
          },
        ],
      },
      {
        title: "Zoek het oude plein bij Plaza Mayor",
        place: "Plaza Mayor Madrid",
        coordinates: { lat: 40.4154, lng: -3.7074 },
        assignment:
          "Loop het plein op en kijk naar de gesloten vorm, arcades en gevelritme. Zoek hoe dit plein anders werkt dan Sol.",
        question: "Wat maakt Plaza Mayor anders dan Puerta del Sol?",
        hint: "Vergelijk open verkeersdrukte met een meer gesloten ceremonieel plein.",
        choices: [
          {
            text: "Plaza Mayor voelt meer als een omkaderd historisch plein voor markt, ceremonie en verblijf",
            correct: true,
            feedback:
              "Klopt. Waar Sol een knooppunt is, voelt Plaza Mayor meer als een stedelijke kamer: gesloten randen, arcades en geschiedenis maken het plein formeler.",
          },
          {
            text: "Omdat Plaza Mayor vooral een snelweg zonder pleinruimte is",
            correct: false,
            feedback: "Nee, juist de duidelijke pleinruimte is hier belangrijk.",
          },
          {
            text: "Omdat er geen historische laag zichtbaar is",
            correct: false,
            feedback: "Niet goed. Het plein is juist een van de duidelijkste historische stadsruimtes van Madrid.",
          },
        ],
      },
      {
        title: "Loop de Gran Vía op",
        place: "Gran Vía bij Telefónica",
        coordinates: { lat: 40.42027, lng: -3.70162 },
        assignment:
          "Kijk omhoog naar gevels, torens, theaters en reclames. Zoek hoe Madrid hier zichzelf modern en stedelijk presenteert.",
        question: "Waarom werd Gran Vía zo’n moderne visitekaartstraat van Madrid?",
        hint: "Let op schaal, theaters, verkeer, gevels en de vroege hoogbouw.",
        choices: [
          {
            text: "Omdat de straat brede stadsdoorbraak, entertainment en moderne architectuur samenbrengt",
            correct: true,
            feedback:
              "Goed gezien. Gran Vía is Madrid als grootstedelijk gebaar: brede straat, winkels, theaters, gevels en vroege torens maken hier van beweging een show.",
          },
          {
            text: "Omdat alle gebouwen bewust laag en onzichtbaar zijn gehouden",
            correct: false,
            feedback: "Nee, juist de hoogte, gevels en zichtbaarheid maken Gran Vía opvallend.",
          },
          {
            text: "Omdat de straat vooral door weilanden loopt",
            correct: false,
            feedback: "Niet echt. Dit is een van de meest stedelijke stukken van Madrid.",
          },
        ],
      },
      {
        title: "Kijk naar het westen bij Debod",
        place: "Templo de Debod",
        coordinates: { lat: 40.42401, lng: -3.71778 },
        assignment:
          "Bekijk de tempel van buiten en draai daarna richting uitzichtpunt. Zoek waarom deze plek totaal anders voelt dan Gran Vía.",
        question: "Waarom is Templo de Debod zo’n opvallende stop in Madrid?",
        hint: "Denk aan herplaatsing, open ruimte, zonsondergang en uitzicht richting het westen.",
        choices: [
          {
            text: "Omdat een Egyptische tempel hier als herplaatst monument én uitkijkpunt werkt",
            correct: true,
            feedback:
              "Precies. Debod is bijzonder omdat het niet uit Madrid zelf komt, maar door zijn plek wel een Madrileens ritueel is geworden: wandelen, kijken, zonsondergang en uitzicht.",
          },
          {
            text: "Omdat de tempel een metrostation onder de grond is",
            correct: false,
            feedback: "Nee, dit gaat om een zichtbaar historisch monument in open parkruimte.",
          },
          {
            text: "Omdat er vanaf hier geen enkel uitzicht is",
            correct: false,
            feedback: "Niet goed. Juist het uitzicht richting westen maakt deze stop sterk.",
          },
        ],
      },
      {
        title: "Sta bij het Palacio Real",
        place: "Palacio Real de Madrid",
        coordinates: { lat: 40.4179, lng: -3.7143 },
        assignment:
          "Bekijk het paleis en de open ruimte eromheen van buiten. Zoek hoe monarchie hier aan de westkant van het centrum zichtbaar wordt.",
        question: "Waarom past het Palacio Real goed vlak voor Plaza de España?",
        hint: "Denk aan macht, westelijke centrumrand, tuinen en monumentale schaal.",
        choices: [
          {
            text: "Omdat het paleis de koninklijke laag van Madrid toevoegt aan de route naar het westen",
            correct: true,
            feedback:
              "Precies. Na park, station, Sol en Gran Vía laat het Palacio Real Madrid als hofstad zien, met schaal, tuinen en ceremonieel stadsbeeld.",
          },
          {
            text: "Omdat het paleis een klein modern winkelcentrum is",
            correct: false,
            feedback: "Nee, de monumentale schaal en koninklijke betekenis zijn juist bepalend.",
          },
          {
            text: "Omdat het paleis ver buiten Madrid ligt",
            correct: false,
            feedback: "Niet goed. Het ligt juist aan de westelijke rand van het historische centrum.",
          },
        ],
      },
      {
        title: "Eindig op Plaza de España",
        place: "Plaza de España Madrid",
        coordinates: { lat: 40.42331, lng: -3.71224 },
        assignment:
          "Kijk naar het plein, de torens, de groene inrichting en het monument voor Cervantes. Zoek hoe oud verhaal en moderne stad hier samenkomen.",
        question: "Waarom is Plaza de España een logisch eindpunt voor deze route?",
        hint: "Vergelijk park, centrumdrukte, hoogbouw, literatuur en de ligging aan het westelijke centrum.",
        choices: [
          {
            text: "Omdat het plein Madrid als moderne stad en literaire herinneringsplek tegelijk laat zien",
            correct: true,
            feedback:
              "Ja. Na Retiro, Atocha, Sol en Gran Vía eindig je hier bij een plein dat stedelijke schaal, groen, hoogbouw en Cervantes bij elkaar brengt: Madrid als verhalenstad én moderne hoofdstad.",
          },
          {
            text: "Omdat het plein ver buiten Madrid in een ander land ligt",
            correct: false,
            feedback: "Nee, dit is juist een belangrijk plein aan de westkant van het centrum.",
          },
          {
            text: "Omdat er geen monumenten of herkenningspunten staan",
            correct: false,
            feedback: "Niet goed. Het Cervantes-monument en de omliggende gebouwen maken het plein herkenbaar.",
          },
        ],
      },
    ],
  },
  {
    id: "valencia",
    city: "Valencia",
    title: "Valencia: zijde, waterrecht en de omgebouwde rivier",
    price: "€4,49",
    duration: "210 min",
    distance: "7,1 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een route van modernistische aankomst en Fallas-plein via zijdehandel, waterrecht en de Turia-tuinen naar Calatrava’s futuristische Valencia.",
    stops: [
      {
        title: "Start tussen sinaasappels en mozaïek",
        place: "Estació del Nord Valencia",
        coordinates: { lat: 39.46613, lng: -0.37739 },
        assignment:
          "Bekijk de gevel en de entreezone. Zoek sinaasappels, keramiek, mozaïek en andere details die Valencia al bij aankomst als mediterrane stad presenteren.",
        question: "Wat maakt Estació del Nord specifiek Valenciaans, en niet zomaar een mooi station?",
        hint: "Let op lokale decoratie: keramiek, fruitmotieven, kleur en modernistische details.",
        choices: [
          {
            text: "Het station gebruikt modernistische decoratie met lokale motieven zoals keramiek en sinaasappels",
            correct: true,
            feedback:
              "Precies. De Estació del Nord is aankomst als visitekaartje: reisfunctie, ambacht en lokale symbolen worden één Valenciaanse eerste indruk.",
          },
          {
            text: "Het gebouw is juist beroemd omdat het volledig kaal en industrieel is gehouden",
            correct: false,
            feedback: "Nee, de kracht zit juist in de decoratie. Kijk naar de kleur, keramiek en florale details.",
          },
          {
            text: "Het station verwijst vooral naar Alpenarchitectuur en wintersport",
            correct: false,
            feedback: "Niet goed. De verwijzingen zijn juist mediterraner en lokaler: Valencia wil zich hier herkenbaar maken.",
          },
        ],
      },
      {
        title: "Sta op het Fallas-podium",
        place: "Plaça de l'Ajuntament",
        coordinates: { lat: 39.46975, lng: -0.37634 },
        assignment:
          "Kijk naar het stadhuis, het postgebouw, het open midden en de bloemenkiosken. Stel je voor waar de mascletà tijdens Fallas de ruimte vult.",
        question: "Waarom is Plaça de l'Ajuntament meer dan alleen een bestuursplein?",
        hint: "Denk aan het stadhuis, het postgebouw, bloemen, dagelijkse drukte en Fallas.",
        choices: [
          {
            text: "Omdat bestuur, bloemenhandel, dagelijkse routes en Fallas-ceremonie hier samenkomen",
            correct: true,
            feedback:
              "Klopt. Dit plein is Valencia als podium: officieel door de gebouwen, dagelijks door de drukte en explosief tijdens Fallas.",
          },
          {
            text: "Omdat het plein vooral een rustige binnentuin zonder publieke functie is",
            correct: false,
            feedback: "Nee, dit is juist een zichtbaar, druk en ceremonieel centrumplein.",
          },
          {
            text: "Omdat Fallas hier niets mee te maken heeft en alleen buiten de stad plaatsvindt",
            correct: false,
            feedback: "Niet goed. Fallas is juist sterk verbonden met de openbare ruimtes van Valencia, waaronder dit plein.",
          },
        ],
      },
      {
        title: "Lees eten als architectuur",
        place: "Mercat Central Valencia",
        coordinates: { lat: 39.47351, lng: -0.37875 },
        assignment:
          "Loop rond de markt of ga naar binnen als het open is. Zoek ijzer, glas, keramiek, koepels en producten uit de huerta en de zee.",
        question: "Wat maakt de Mercat Central zo’n sterke Valencia-stop?",
        hint: "Kijk naar het gebouw én naar wat er verkocht wordt: stad, tuinbouwgebied en kust komen hier samen.",
        choices: [
          {
            text: "Omdat modernistische markthal, dagelijkse voedselcultuur en Valencia’s huerta hier samenkomen",
            correct: true,
            feedback:
              "Goed gezien. De markt is een stad in miniatuur: architectuur, eten, handel, zee en irrigatieland rond Valencia worden hier tastbaar.",
          },
          {
            text: "Omdat de markt vooral een stille museumzaal zonder dagelijkse handel is",
            correct: false,
            feedback: "Nee. Juist het dagelijkse gebruik maakt dit gebouw krachtig.",
          },
          {
            text: "Omdat het gebouw is ontworpen om daglicht en versproducten zoveel mogelijk te verbergen",
            correct: false,
            feedback: "Niet goed. De hal gebruikt juist licht, ruimte en decoratie om handel aantrekkelijk te maken.",
          },
        ],
      },
      {
        title: "Lees zijde en geld in steen",
        place: "La Lonja de la Seda",
        coordinates: { lat: 39.47432, lng: -0.37844 },
        assignment:
          "Bekijk de gotische buitenkant en, als je binnen kunt, de zuilen van de Sala de Contratación. Zoek waarom handel hier bijna als machtstheater voelt.",
        question: "Waarom is La Lonja de la Seda zo belangrijk voor Valencia’s identiteit?",
        hint: "UNESCO koppelt deze plek aan de macht en rijkdom van Valencia als mediterrane handelsstad.",
        choices: [
          {
            text: "Omdat de zijdehandel hier een monumentaal gebouw kreeg dat koopmansmacht zichtbaar maakte",
            correct: true,
            feedback:
              "Precies. De Lonja is geen gewone handelsplek: het is Valencia’s koopmansmacht in gotische steen, gebouwd om rijkdom en betrouwbaarheid uit te stralen.",
          },
          {
            text: "Omdat het gebouw vooral bewijst dat Valencia nooit internationale handel kende",
            correct: false,
            feedback: "Nee, de Lonja bewijst juist het tegenovergestelde: handel en zijde waren essentieel.",
          },
          {
            text: "Omdat de Lonja een puur religieus klooster zonder handelsfunctie was",
            correct: false,
            feedback: "Niet goed. De naam en de handelszaal wijzen duidelijk op koopmanschap en contracten.",
          },
        ],
      },
      {
        title: "Zoek waterrecht bij de kathedraal",
        place: "Catedral de Valencia en Puerta de los Apóstoles",
        coordinates: { lat: 39.47604, lng: -0.37518 },
        assignment:
          "Ga naar de Puerta de los Apóstoles bij de kathedraal. Zoek waarom juist een kerkpoort de plek werd voor een openbaar watertribunaal.",
        question: "Wat maakt het Tribunal de las Aguas bij deze kathedraalpoort zo typisch Valenciaans?",
        hint: "Het tribunaal behandelt irrigatieconflicten uit de huerta en komt traditioneel openbaar bijeen.",
        choices: [
          {
            text: "Het verbindt de stad met irrigatie, landbouw rond Valencia en publiek recht op een zichtbare plek",
            correct: true,
            feedback:
              "Ja. Dit is heel Valenciaans: water uit de omgeving, boerenbelang, eeuwenoude regels en openbare rechtspraak komen samen bij de kathedraal.",
          },
          {
            text: "Het gaat vooral over zeevisserij en heeft niets met irrigatie te maken",
            correct: false,
            feedback: "Nee. Het tribunaal draait juist om irrigatiewater voor de huerta rond Valencia.",
          },
          {
            text: "Het is een moderne toeristische show zonder historische rechtsfunctie",
            correct: false,
            feedback: "Niet goed. De kracht zit juist in de lange traditie en publieke functie.",
          },
        ],
      },
      {
        title: "Ga naar de stadspoort aan de rivier",
        place: "Torres de Serranos",
        coordinates: { lat: 39.47921, lng: -0.3755 },
        assignment:
          "Bekijk de torens vanaf de brugzijde. Zoek hoe de poort werkt als entree vanuit de oude rivierkant naar de stad.",
        question: "Waarom zijn de Torres de Serranos meer dan alleen twee mooie torens?",
        hint: "Denk aan stadsmuren, toegang, controle en de oude rand bij de Turia.",
        choices: [
          {
            text: "Ze markeerden een gecontroleerde toegang tot de ommuurde stad aan de kant van de Turia",
            correct: true,
            feedback:
              "Klopt. Je staat hier op de oude overgang tussen buiten en binnen: verdediging, ontvangst en stadsidentiteit in één poort.",
          },
          {
            text: "Ze zijn gebouwd als decor voor de moderne metro en hadden geen stadsfunctie",
            correct: false,
            feedback: "Nee, de torens horen bij de historische ommuring en toegang tot de stad.",
          },
          {
            text: "Ze tonen vooral dat Valencia altijd volledig open en zonder poorten was",
            correct: false,
            feedback: "Niet goed. Juist deze poort laat zien dat toegang vroeger gereguleerd werd.",
          },
        ],
      },
      {
        title: "Daal af in de verdwenen rivier",
        place: "Jardín del Turia bij Puente del Real",
        coordinates: { lat: 39.47576, lng: -0.36754 },
        assignment:
          "Kijk naar het hoogteverschil, de bruggen boven je en de langgerekte parkvorm. Zoek bewijs dat je in een voormalige rivierbedding loopt.",
        question: "Wat is de grote stadszet achter de Jardín del Turia?",
        hint: "Na zware overstromingen werd de rivier omgeleid; de oude bedding werd een park.",
        choices: [
          {
            text: "Valencia veranderde de oude Turia-bedding in een lang park dat de stad van west naar oost verbindt",
            correct: true,
            feedback:
              "Precies. De Turia is Valencia’s grote transformatie: een vroegere rivier en risicoruimte werd een groene route door de stad.",
          },
          {
            text: "De oude rivierbedding werd volledig volgebouwd met gesloten winkelcentra",
            correct: false,
            feedback: "Nee. De keuze voor een openbaar park maakt Valencia hier juist bijzonder.",
          },
          {
            text: "De Turia-tuin is een klein binnenhof zonder relatie met bruggen of stadsroute",
            correct: false,
            feedback: "Niet goed. De langgerekte vorm en bruggen verraden juist de oude rivierstructuur.",
          },
        ],
      },
      {
        title: "Zoek Gulliver in de rivier",
        place: "Parque Gulliver",
        coordinates: { lat: 39.46237, lng: -0.35824 },
        assignment:
          "Bekijk de reusachtige Gulliverfiguur en hoe kinderen hem als speeltoestel gebruiken. Zoek waarom dit alleen logisch voelt in een park dat al zo ongewone ruimte heeft.",
        question: "Waarom past Parque Gulliver zo goed in de oude Turia-bedding?",
        hint: "Denk aan schaal, speelruimte en een park dat lang en laag door de stad loopt.",
        choices: [
          {
            text: "Omdat de brede voormalige rivierbedding ruimte geeft aan een speels, bijna absurd stadsobject",
            correct: true,
            feedback:
              "Ja. Gulliver werkt omdat de Turia geen normaal buurtpark is: de oude rivierbedding geeft ruimte aan iets groots, speels en typisch herkenbaars.",
          },
          {
            text: "Omdat Gulliver eigenlijk een middeleeuwse stadspoort is",
            correct: false,
            feedback: "Nee, dit is juist de speelse moderne parklaag van Valencia.",
          },
          {
            text: "Omdat de plek bewust ontoegankelijk is voor kinderen en wandelaars",
            correct: false,
            feedback: "Niet goed. De functie is juist publiek spel en verblijf in de Turia.",
          },
        ],
      },
      {
        title: "Bekijk Calatrava’s witte stad",
        place: "Ciudad de las Artes y las Ciencias",
        coordinates: { lat: 39.45528, lng: -0.35083 },
        assignment:
          "Loop langs het water en zoek hoe witte constructies, reflecties en enorme vormen een nieuw stadsbeeld maken.",
        question: "Waarom is de Ciudad de las Artes y las Ciencias een logisch vervolg op de Turia-route?",
        hint: "Het complex ligt aan de oostelijke kant van de voormalige rivierbedding.",
        choices: [
          {
            text: "Omdat de oude rivierbedding hier overgaat in een futuristisch cultuur- en wetenschapsdecor",
            correct: true,
            feedback:
              "Precies. Na zijde, waterrecht en parkruimte toont Valencia hier zijn spectaculaire moderne laag: wit, groot, reflecterend en bewust iconisch.",
          },
          {
            text: "Omdat dit complex vooral een reconstructie van middeleeuwse stadsmuren is",
            correct: false,
            feedback: "Nee. Hier draait het juist om moderne architectuur en nieuw stadsimago.",
          },
          {
            text: "Omdat het complex ver buiten de route ligt en niets met de Turia te maken heeft",
            correct: false,
            feedback: "Niet goed. De ligging aan de voormalige rivierbedding is juist de reden dat deze stop logisch is.",
          },
        ],
      },
      {
        title: "Eindig in de waterwereld",
        place: "Oceanogràfic Valencia",
        coordinates: { lat: 39.45262, lng: -0.34742 },
        assignment:
          "Kijk naar de waterlelie-achtige gebouwen en de ligging aan het einde van het complex. Zoek hoe water hier verandert van irrigatieverhaal naar zee- en aquariumwereld.",
        question: "Waarom rondt Oceanogràfic deze Valencia-route goed af?",
        hint: "Vergelijk water bij het Tribunal de las Aguas, de Turia en dit aquariumcomplex.",
        choices: [
          {
            text: "Omdat het watermotief van irrigatie en rivier hier eindigt als zee, educatie en publieksattractie",
            correct: true,
            feedback:
              "Klopt. De route begint met stad en handel, maar eindigt met Valencia als waterstad: irrigatie, oude rivier, moderne architectuur en zeeleven komen samen.",
          },
          {
            text: "Omdat Oceanogràfic vooral een droog bergfort zonder relatie met water is",
            correct: false,
            feedback: "Nee, deze stop draait juist om water en publiekscultuur.",
          },
          {
            text: "Omdat dit exact dezelfde functie heeft als de middeleeuwse zijdebeurs",
            correct: false,
            feedback: "Niet goed. Hier zit je in de moderne oostelijke stadslaag, niet in de handelsstad van de Lonja.",
          },
        ],
      },
    ],
  },
  {
    id: "douglas",
    city: "Douglas",
    title: "Douglas: ferryhaven, Victoriaanse promenade en Manx identiteit",
    price: "€4,49",
    duration: "170 min",
    distance: "5,4 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een scherpe route door de hoofdstad van Isle of Man, langs haven, Jubilee Clock, Tower of Refuge, promenade-erfgoed, Gaiety Theatre, paardentram, Manx Museum en Douglas Head.",
    stops: [
      {
        title: "Begin bij de eilandpoort",
        place: "Douglas Sea Terminal en havenbrug",
        coordinates: { lat: 54.14799, lng: -4.47472 },
        assignment:
          "Kijk naar de ferryterminal, de haven en de beweegbare bruggen. Zoek hoe Douglas aankomst, goederen en eilandverbinding in één compacte havenruimte verzamelt.",
        question: "Waarom vertelt deze plek meteen iets typisch over Douglas?",
        hint: "Denk aan eilandlogistiek: wie of wat komt hier binnen voordat het verder het eiland op gaat?",
        choices: [
          {
            text: "Omdat de stad hier zichtbaar functioneert als toegangspoort voor reizigers, vracht en eilandverbindingen",
            correct: true,
            feedback:
              "Precies. Douglas is geen willekeurige kustplaats: de ferry en haven maken de hoofdstad tot een praktische poort van het eiland.",
          },
          {
            text: "Omdat deze plek vooral bedoeld is als uitzichtpunt zonder verkeersfunctie",
            correct: false,
            feedback: "Niet helemaal. Er is uitzicht, maar de kern is dat hier aankomst en doorstroming van het eiland beginnen.",
          },
          {
            text: "Omdat Isle of Man vroeger geen verbindingen over zee nodig had",
            correct: false,
            feedback: "Nee. Juist de zee en de ferryverbindingen zijn bepalend voor Douglas als hoofdstad.",
          },
        ],
      },
      {
        title: "Zoek Victoria's klok",
        place: "Jubilee Clock Douglas",
        coordinates: { lat: 54.15054, lng: -4.47835 },
        assignment:
          "Ga bij de klok staan en kijk naar Victoria Street, Loch Promenade en de richting van de haven. Zoek waarom een klok op deze plek werkt als stadsanker.",
        question: "Waarom past de Jubilee Clock juist op deze plek in Douglas?",
        hint: "De klok verwijst naar Queen Victoria's Golden Jubilee van 1887 en staat bij een druk stedelijk kruispunt.",
        choices: [
          {
            text: "Omdat hij Victoriaans stadsvertoon koppelt aan een kruispunt tussen winkelstraat, promenade en haven",
            correct: true,
            feedback:
              "Klopt. De klok is geen los ornament: hij markeert een Victoriaans centrumstuk op een plek waar promenade, stad en haven elkaar raken.",
          },
          {
            text: "Omdat hij een moderne digitale verkeersmeter uit de jaren 2000 is",
            correct: false,
            feedback: "Nee. De betekenis zit juist in de late 19e-eeuwse herdenkingscultuur en het stadsbeeld.",
          },
          {
            text: "Omdat hij verborgen staat op een plek waar bijna niemand langskomt",
            correct: false,
            feedback: "Niet goed. Hij staat juist zichtbaar bij een logische doorgang tussen centrum en promenade.",
          },
        ],
      },
      {
        title: "Kijk naar de reddingstoren",
        place: "Tower of Refuge zichtpunt",
        coordinates: { lat: 54.15018, lng: -4.47542 },
        assignment:
          "Kijk vanaf de promenade naar Conister Rock en de kleine toren in de baai. Zoek waarom een mooi uitzicht hier tegelijk een waarschuwingsverhaal is.",
        question: "Waarom staat de Tower of Refuge midden in Douglas Bay?",
        hint: "Denk aan Conister Rock, schipbreuken en Sir William Hillary, mede-oprichter van de RNLI.",
        choices: [
          {
            text: "Als toevlucht voor schipbreukelingen die op de rots in de baai terechtkwamen",
            correct: true,
            feedback:
              "Precies. De toren maakt de baai dubbel: prachtig voor bezoekers, maar historisch gevaarlijk genoeg om een reddingsplek nodig te maken.",
          },
          {
            text: "Als decoratieve vuurtoren voor vliegtuigen boven Douglas",
            correct: false,
            feedback: "Nee. De functie gaat over scheepvaart en veiligheid op de rots, niet over vliegverkeer.",
          },
          {
            text: "Als wachttoren van een middeleeuws kasteel aan de winkelstraat",
            correct: false,
            feedback: "Niet goed. De ligging in zee vertelt dat het om redding in de baai gaat.",
          },
        ],
      },
      {
        title: "Lees de promenade als vakantie-machine",
        place: "Loch Promenade en Marine Gardens",
        coordinates: { lat: 54.15472, lng: -4.48076 },
        assignment:
          "Kijk naar de lange gevelwand, tuinen, schuilplekken en zichtlijnen over de baai. Zoek hoe de promenade bezoekers moest laten wandelen, kijken en blijven.",
        question: "Wat maakt Loch Promenade meer dan alleen een stoep langs zee?",
        hint: "Denk aan Victoriaans toerisme, hotels, wandelen, tuinen en uitzicht over de baai.",
        choices: [
          {
            text: "Hij is ontworpen als verblijfsruimte waar toerisme, uitzicht, hotels en wandelen samenkomen",
            correct: true,
            feedback:
              "Ja. De promenade maakt van Douglas Bay een soort lang openbaar balkon: je loopt niet alleen ergens heen, je verblijft in het stadsdecor.",
          },
          {
            text: "Hij is vooral gebouwd om bezoekers zo snel mogelijk van de zee weg te leiden",
            correct: false,
            feedback: "Nee. Alles aan deze plek trekt je juist naar het uitzicht, de gevels en het wandelen langs de baai.",
          },
          {
            text: "Hij heeft weinig met toerisme te maken omdat er geen zicht op de baai is",
            correct: false,
            feedback: "Niet goed. Juist het open zicht op de baai is de kern van de promenade.",
          },
        ],
      },
      {
        title: "Zoek het theater van Frank Matcham",
        place: "Gaiety Theatre Douglas",
        coordinates: { lat: 54.15671, lng: -4.48236 },
        assignment:
          "Bekijk de theatergevel en de ligging aan de promenade. Zoek waarom een serieus theater hier logisch is naast zeezicht en vakantievermaak.",
        question: "Wat maakt het Gaiety Theatre bijzonder binnen het verhaal van Douglas?",
        hint: "Het theater opende in 1900 en wordt gekoppeld aan theaterarchitect Frank Matcham.",
        choices: [
          {
            text: "Het laat zien dat Douglas als badplaats ook avondcultuur, theatertechniek en prestige wilde bieden",
            correct: true,
            feedback:
              "Klopt. Het Gaiety Theatre maakt de promenade rijker: bezoekers kwamen niet alleen voor lucht en uitzicht, maar ook voor voorstellingen en avondleven.",
          },
          {
            text: "Omdat het theater vooral als veerbootterminal is gebouwd",
            correct: false,
            feedback: "Nee. De functie is juist cultuur en publiek vermaak, niet havenlogistiek.",
          },
          {
            text: "Omdat Douglas geen Victoriaanse toeristische cultuur kende",
            correct: false,
            feedback: "Niet goed. De promenade, theaters en hotels vertellen juist veel over die cultuur.",
          },
        ],
      },
      {
        title: "Vind het langzaamste erfgoed",
        place: "Douglas Bay Horse Tramway halte",
        coordinates: { lat: 54.15812, lng: -4.48232 },
        assignment:
          "Zoek rails, haltes of verwijzingen naar de paardentram. Bedenk waarom juist langzaam vervoer hier waarde heeft.",
        question: "Waarom is de Douglas Bay Horse Tramway geen gewone OV-lijn?",
        hint: "Let op de route langs de promenade en op het verschil tussen transport en attractie.",
        choices: [
          {
            text: "Omdat de paardentram vervoer, toeristische beleving en levend promenade-erfgoed tegelijk is",
            correct: true,
            feedback:
              "Precies. De tram is niet sterk omdat hij snel is, maar omdat hij het tempo van de oude badplaats zichtbaar maakt.",
          },
          {
            text: "Omdat hij bedoeld is als ondergrondse verbinding naar het vliegveld",
            correct: false,
            feedback: "Nee. Alles aan de paardentram is bovengronds, zichtbaar en verbonden met de promenade.",
          },
          {
            text: "Omdat hij vooral door zware industriegebieden rijdt",
            correct: false,
            feedback: "Niet goed. De logica zit juist in de toeristische route langs de baai.",
          },
        ],
      },
      {
        title: "Duik de Manx laag in",
        place: "Manx Museum",
        coordinates: { lat: 54.15179, lng: -4.48217 },
        assignment:
          "Bekijk de entree en denk aan het verschil tussen Douglas als badplaats en Isle of Man als eiland met eigen taal, parlement en geschiedenis.",
        question: "Waarom hoort het Manx Museum in deze route, ook al ligt het niet direct aan zee?",
        hint: "Manx gaat over de eigen cultuur van Isle of Man: taal, bestuur, Vikinglagen, internment en eilandidentiteit.",
        choices: [
          {
            text: "Omdat het de promenade-stad koppelt aan de diepere Manx identiteit van het eiland",
            correct: true,
            feedback:
              "Ja. Zonder het Manx Museum blijft Douglas vooral haven en promenade. Hier komt het verhaal van het eiland zelf erbij.",
          },
          {
            text: "Omdat het museum vooral over Spaanse zijdehandel gaat",
            correct: false,
            feedback: "Nee, dat past eerder bij Valencia. Hier draait het om Isle of Man en Manx cultuur.",
          },
          {
            text: "Omdat Douglas geen eigen eilandcontext nodig heeft",
            correct: false,
            feedback: "Niet goed. Juist die eilandcontext maakt Douglas anders dan een gewone Britse badplaats.",
          },
        ],
      },
      {
        title: "Eindig bij de 11 uitzichten",
        place: "Great Union Camera Obscura Douglas Head",
        coordinates: { lat: 54.14458, lng: -4.46703 },
        assignment:
          "Klim naar Douglas Head en kijk terug over haven, Tower of Refuge, promenade en open zee. Zoek waarom dit punt de hele route samenvat.",
        question: "Waarom is de Camera Obscura op Douglas Head een sterker eindpunt dan zomaar nog een uitzichtbank?",
        hint: "De Great Union Camera Obscura staat bekend om meerdere kijkrichtingen; het punt zelf geeft overzicht over baai, stad en zee.",
        choices: [
          {
            text: "Omdat je hier Douglas als reeks beelden leest: haven, baai, promenade, zee en eilandrand",
            correct: true,
            feedback:
              "Precies. Boven Douglas Head wordt de route één kaart in je hoofd: de havenpoort, reddingstoren, promenade en kustlijn vallen samen.",
          },
          {
            text: "Omdat je hier juist volledig afgesloten bent van elk uitzicht",
            correct: false,
            feedback: "Nee, het uitzicht is juist de reden om hier te eindigen.",
          },
          {
            text: "Omdat de Camera Obscura vooral een winkelcentrum onder de promenade is",
            correct: false,
            feedback: "Niet goed. Je staat boven de haven op een historisch uitzichtpunt.",
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
const minTourPrice = 2.99;
const maxTourPrice = 5.99;
const baseTourPrice = 4.49;
const baseTourStops = 6;
const pricePerExtraStop = 0.5;

const formatEuroPrice = (price) => `€${price.toFixed(2).replace(".", ",")}`;
const getTourPriceValue = (tour) =>
  Math.min(
    maxTourPrice,
    Math.max(minTourPrice, baseTourPrice + (tour.stops.length - baseTourStops) * pricePerExtraStop),
  );
const getTourPrice = (tour) => formatEuroPrice(getTourPriceValue(tour));
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
    alt: "Keulen gefotografeerd door Max Peters",
    credit: "Max Peters, eigen werk",
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
  madrid: {
    src: "assets/cities/madrid.jpg",
    alt: "Palacio de Cristal in het Retiro Park in Madrid",
    credit: "vpogarcia, CC BY-SA 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Palacio_de_Cristal,_Retiro,_Madrid.jpg",
  },
  valencia: {
    src: "assets/cities/valencia.jpg",
    alt: "Ciudad de las Artes y las Ciencias in Valencia met water en moderne architectuur",
    credit: "ChiralJon, CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:City_of_Arts_and_Sciences,_Valencia_(52395812264).jpg",
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
        ${
          photo.source
            ? `<a href="${photo.source}" target="_blank" rel="noopener noreferrer">${photo.credit}</a>`
            : `<span>${photo.credit}</span>`
        }
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
  "Playa de la Malagueta": 130,
  "Marktplatz en Rathaus": 60,
  "Burgplatz en Schlossturm": 70,
  Bolkerstraße: 60,
  "Kunstsammlung K20": 80,
  Königsallee: 80,
  "Rheinuferpromenade bij KIT": 90,
  Rheinturm: 90,
  MedienHafen: 100,
  "Kölner Dom": 90,
  "Museum Ludwig": 80,
  Hohenzollernbrücke: 120,
  "Alter Markt": 60,
  "Historisches Rathaus": 60,
  "Groß St. Martin": 70,
  "Schokoladenmuseum Köln": 90,
  Rheinauhafen: 100,
  Römerberg: 60,
  "Paulskirche Frankfurt": 70,
  "Kaiserdom St. Bartholomäus": 70,
  "Eiserner Steg": 100,
  "Städel Museum": 100,
  "Goethe-Haus": 60,
  "Main Tower": 70,
  "Alte Oper": 80,
  "Trafalgar Square": 90,
  "Leicester Square": 80,
  "Covent Garden": 80,
  "Royal Courts of Justice": 90,
  "St Paul’s Cathedral": 100,
  "Millennium Bridge": 110,
  "Tate Modern": 100,
  "Shakespeare’s Globe": 90,
  "Borough Market": 80,
  "Tower Bridge": 120,
  Rådhuspladsen: 70,
  "Tivoli Gardens": 80,
  Rundetaarn: 80,
  "Christiansborg Slot": 90,
  "Rosenborg Slot": 100,
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
  Triumphpforte: 80,
  Stephansdom: 90,
  Hofburg: 110,
  Heldenplatz: 110,
  "Wiener Staatsoper": 80,
  Musikverein: 80,
  Naschmarkt: 110,
  Karlskirche: 90,
  Stadtpark: 120,
  Hundertwasserhaus: 110,
  "Prater Riesenrad": 130,
  "Estanque Grande del Retiro": 100,
  "Palacio de Cristal": 90,
  "Puerta de Atocha tropentuin": 120,
  "Museo del Prado": 100,
  "Puerta del Sol": 100,
  "Plaza Mayor Madrid": 100,
  "Gran Vía bij Telefónica": 90,
  "Templo de Debod": 120,
  "Palacio Real de Madrid": 120,
  "Plaza de España Madrid": 110,
  "Estació del Nord Valencia": 90,
  "Plaça de l'Ajuntament": 90,
  "Mercat Central Valencia": 80,
  "La Lonja de la Seda": 70,
  "Catedral de Valencia en Puerta de los Apóstoles": 90,
  "Torres de Serranos": 90,
  "Jardín del Turia bij Puente del Real": 120,
  "Parque Gulliver": 120,
  "Ciudad de las Artes y las Ciencias": 130,
  "Oceanogràfic Valencia": 130,
  "Douglas Sea Terminal en havenbrug": 90,
  "Jubilee Clock Douglas": 70,
  "Tower of Refuge zichtpunt": 110,
  "Loch Promenade en Marine Gardens": 110,
  "Gaiety Theatre Douglas": 80,
  "Douglas Bay Horse Tramway halte": 100,
  "Manx Museum": 90,
  "Great Union Camera Obscura Douglas Head": 130,
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
  const replayOnReload = !isMobileDevice();

  if (isStandaloneApp()) {
    promoIntro.hidden = true;
    return;
  }

  if (!replayOnReload && sessionStorage.getItem(promoStorageKey) === "true") {
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
  "Playa de la Malagueta":
    "La Malagueta maakt de kustidentiteit van Málaga tastbaar. Na de historische stad en haven zie je hier hoe strand, promenade en dagelijks stadsleven direct tegen het centrum aan liggen.",
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
  "Kunstsammlung K20":
    "K20 voegt Düsseldorfs kunstprofiel toe aan de route. Midden bij de Altstadt laat het museum zien dat de stad ook een belangrijke plek voor moderne en hedendaagse kunst is.",
  Rheinturm:
    "De Lichtzeitpegel maakt techniek speels zichtbaar: de toren is observatiepunt, landmark en klok tegelijk. Dat past goed bij de moderne Rijnzone.",
  MedienHafen:
    "MedienHafen laat Düsseldorf als moderne Rijnstad zien. Oude havenruimte is hier niet verdwenen, maar opnieuw geladen met architectuur, horeca, kantoren en uitzicht.",
  "Kölner Dom":
    "De Dom is in Keulen meer dan een kerk. Door zijn torens van ongeveer 157 meter en zijn ligging naast het station is hij vaak het eerste en sterkste beeld van de stad.",
  "Museum Ludwig":
    "Museum Ludwig maakt de Domomgeving verrassend modern. Naast station, kerk en Rijn krijgt Keulen hier een uitgesproken kunstlaag met internationale uitstraling.",
  Hohenzollernbrücke:
    "Deze brug combineert treinverkeer, voetgangersroutes en liefdessloten. Daardoor wordt infrastructuur tegelijk een ritueel en uitzichtpunt.",
  "Alter Markt":
    "Alter Markt laat het oude stedelijke ritme zien: handel, horeca, doorgangen naar de Altstadt en de nabijheid van de Rijn maken samen een plein dat blijft functioneren als ontmoetingsplek.",
  "Historisches Rathaus":
    "Het Rathaus toont de stedelijke zelfstandigheid van Keulen. De toren, beelden en decoratie laten zien dat bestuur niet verstopt werd, maar als stedelijke macht zichtbaar moest zijn.",
  "Groß St. Martin":
    "Groß St. Martin is een sterke buitenstop omdat de toren boven de Altstadt uitsteekt. Je ziet zonder naar binnen te gaan hoe kerk, plein, smalle straten en Rijn dicht bij elkaar liggen.",
  "Schokoladenmuseum Köln":
    "Het Schokoladenmuseum koppelt een publieksvriendelijke attractie aan Keulens handelsverhaal. Aan de Rijn wordt consumptiegeschiedenis ineens onderdeel van haven, routes en toerisme.",
  Rheinauhafen:
    "Rheinauhafen laat zien hoe een oud havengebied nieuwe stedelijke waarde krijgt. De Rijn blijft de drager, maar de functies verschuiven naar wonen, werken en recreatie.",
  Römerberg:
    "Römerberg is belangrijk omdat Frankfurt hier zijn historische gezicht laat zien, naast een stad die veel moderner en financieeler bekendstaat.",
  "Paulskirche Frankfurt":
    "De Paulskirche geeft Frankfurt een politieke laag. Naast handel en skyline staat hier een herinneringsplek voor parlementaire geschiedenis, debat en democratische symboliek.",
  "Kaiserdom St. Bartholomäus":
    "De Dom herinnert aan Frankfurt als kroningsstad. Daardoor gaat deze plek niet alleen over religie, maar ook over keizerlijke macht en ceremonie.",
  "Eiserner Steg":
    "Vanaf de Eiserner Steg zie je Frankfurt in één beeld: oude stad, Main, musea en skyline. De brug maakt die lagen letterlijk oversteekbaar.",
  "Städel Museum":
    "Het Städel en de Museumsufer laten Frankfurt als cultuurstad zien. De zuidoever is een bewuste tegenhanger van de commerciële skyline aan de noordkant.",
  "Goethe-Haus":
    "Goethes geboortehuis geeft Frankfurt een cultureel anker naast banken en beurs. Een individuele schrijver wordt zo onderdeel van het collectieve stadsverhaal.",
  "Main Tower":
    "De Main Tower maakt de financiële stad tastbaar. Frankfurt gebruikt hoogbouw sterker dan veel andere Duitse steden om internationale economie zichtbaar te maken; vanaf boven zie je pas echt hoe compact oude stad, Main en bankencluster bij elkaar liggen.",
  "Alte Oper":
    "De Alte Oper toont hoe cultuur en prestige samenkomen. Het gebouw zegt: Frankfurt is niet alleen handel en banken, maar ook podium, pleinruimte en publiek leven.",
  "Trafalgar Square":
    "Trafalgar Square is ontworpen als nationaal podium. Monumenten, zichtlijnen en musea maken het plein politiek, ceremonieel en toeristisch tegelijk.",
  "Leicester Square":
    "Leicester Square maakt West End als entertainmentmachine zichtbaar. Theaters, bioscopen, premières en drukte geven London hier een heel andere energie dan Trafalgar Square.",
  "Covent Garden":
    "Covent Garden veranderde van marktgebied naar cultuur- en winkelplek. De levendigheid komt uit die mix van handel, optreden en verblijf.",
  "Royal Courts of Justice":
    "De Royal Courts of Justice tonen rechtspraak als zichtbare stedelijke macht. De gevel maakt gezag bijna net zo monumentaal als kerken en paleizen.",
  "Borough Market":
    "Borough Market laat London als handelsstad proeven. Bij London Bridge komen oude marktcultuur, spoorbogen, toerisme en internationale foodcultuur bij elkaar.",
  "St Paul’s Cathedral":
    "St Paul’s is een spiritueel en nationaal symbool. De herbouw na de Grote Brand van 1666 en de koepel van Wren maken het gebouw belangrijker dan alleen een herkenbaar silhouet.",
  "Millennium Bridge":
    "De Millennium Bridge is krachtig door zijn zichtlijn: St Paul’s, de Thames en Tate Modern worden door een voetgangersas in één verhaal gezet.",
  "Tate Modern":
    "Tate Modern laat hergebruik op grote schaal zien. Een industrieel gebouw aan de Thames werd een kunstmuseum dat de zuidoever cultureel opnieuw definieert.",
  "Shakespeare’s Globe":
    "Shakespeare’s Globe maakt Bankside als theater- en vermaakszone zichtbaar. De herbouw laat zien hoe London historische cultuur opnieuw inzet aan een moderne wandelroute.",
  "Tower Bridge":
    "Tower Bridge is herkenbaar omdat moderne bascule-techniek een historisch kostuum kreeg. Hij moest werken als beweegbare brug, maar ook passen bij de Tower of London ernaast.",
  Rådhuspladsen:
    "Rådhuspladsen laat Copenhagen als functionerende hoofdstad zien: bestuur, verkeer, metro, winkels en toerisme zitten hier niet apart, maar vormen samen de entree tot de binnenstad.",
  "Tivoli Gardens":
    "Tivoli is bijzonder omdat vermaak niet aan de rand van de stad ligt, maar midden in het centrum. De gevel werkt als belofte: achter de stedelijke drukte begint een afgesloten wereld van licht, tuinen en attracties.",
  Rundetaarn:
    "Rundetaarn laat Copenhagen als kennis- en uitzichtstad zien. De toren koppelt wetenschap, oriëntatie en compacte binnenstad aan elkaar.",
  "Christiansborg Slot":
    "Christiansborg maakt staatsmacht ruimtelijk zichtbaar. Op Slotsholmen zitten parlement, regering en hoogste rechtspraak dicht bij elkaar, waardoor het eiland voelt als een bestuurlijk hart.",
  "Rosenborg Slot":
    "Rosenborg Slot voegt een oudere en groenere koninklijke laag toe. Het kasteel en de tuinen voelen intiemer dan Amalienborg, maar zijn historisch net zo belangrijk.",
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
  Triumphpforte:
    "De Triumphpforte sluit de representatieve stadsas af als ceremonieel monument. In Innsbruck komen hofcultuur, stedelijke vorm en herinnering hier compact samen.",
  Stephansdom:
    "De Stephansdom is het verticale hart van Wenen. De toren, het plein en de straten eromheen maken de kerk tot oriëntatiepunt, religieus symbool en stedelijk anker.",
  Hofburg:
    "De Hofburg is Wenen als machtscomplex: eeuwen van uitbreiding, hofleven, bestuur en representatie zijn hier niet in één gebouw, maar in een heel stedelijk gebied verzameld.",
  Heldenplatz:
    "Heldenplatz toont hoe publieke ruimte beladen kan worden. Keizerlijke monumentaliteit, militaire symboliek en latere politieke herinneringen zitten hier in dezelfde open ruimte.",
  "Wiener Staatsoper":
    "De Staatsoper gebruikt cultuur als stedelijke status. Aan de Ringstraße werd muziek niet verstopt, maar prominent ingezet om Wenen als wereldstad te presenteren.",
  Musikverein:
    "De Musikverein maakt Wenen als muziekhoofdstad concreet. Het gebouw geeft concertcultuur dezelfde stedelijke waardigheid als opera, paleizen en musea.",
  Naschmarkt:
    "De Naschmarkt geeft Wenen een dagelijks en internationaal gezicht. Tussen kramen, eetplekken en talen zie je een stad die niet alleen keizerlijk, maar ook levendig en gemengd is.",
  Karlskirche:
    "De Karlskirche is barokke stadsregie: koepel, zuilen, plein en water versterken elkaar. Het gebouw is niet alleen kerk, maar ook zorgvuldig geënsceneerde ruimte.",
  Stadtpark:
    "Stadtpark laat Wenen ontspannen na alle monumentaliteit. Muziekcultuur, groen en openbare ruimte komen samen in een plek die minder formeel is, maar nog steeds typisch Weens.",
  Hundertwasserhaus:
    "Hundertwasserhaus breekt met de formele monumentaliteit van Wenen. Kleur, groen en onregelmatigheid voegen een speelse, eigenwijze stadslaag toe.",
  "Prater Riesenrad":
    "De Prater laat Wenen van zijn publieke en speelse kant zien. Het Riesenrad is niet keizerlijk of kerkelijk, maar juist populair, herkenbaar en verbonden met vrije tijd.",
  "Estanque Grande del Retiro":
    "Het Estanque Grande laat Retiro meteen goed begrijpen: dit is geen wild natuurgebied, maar een ontworpen stadspark waar water, monumenten en ontspanning samen een koninklijk decor vormen.",
  "Palacio de Cristal":
    "Het Palacio de Cristal verbindt Madrid met 19e-eeuwse tentoonstellingscultuur. Glas en ijzer waren modern, maar door de ligging aan water en bomen voelt het gebouw tegelijk licht en landschappelijk.",
  "Puerta de Atocha tropentuin":
    "Atocha is interessant omdat infrastructuur hier meer is dan doorstromen. De tropische tuin verandert de oude hal in een verblijfsplek, waardoor reizen, wachten en stadsarchitectuur zachter aanvoelen.",
  "Museo del Prado":
    "Het Prado maakt Madrid als kunsthoofdstad tastbaar. Aan de Paseo del Prado wordt cultuur niet een losse attractie, maar een hele stadsas.",
  "Puerta del Sol":
    "Puerta del Sol is Madrid als middelpunt: klok, Kilometer Zero, herkenbare symbolen en winkelstraten maken het plein tot een plek waar lokale identiteit en nationale oriëntatie samenkomen.",
  "Plaza Mayor Madrid":
    "Plaza Mayor is Madrid als historische stadskamer. De gesloten vorm, arcades en gevels maken het plein ceremoniëler en rustiger leesbaar dan Sol.",
  "Gran Vía bij Telefónica":
    "Gran Vía is de grote moderne stadsdoorbraak van Madrid. De straat gebruikt breedte, gevels, theaters en vroege hoogbouw om de hoofdstad grootstedelijker en spectaculairder te laten voelen.",
  "Templo de Debod":
    "Templo de Debod is een verplaatst monument dat door zijn Madrileense plek nieuwe betekenis krijgt. Het westelijke uitzicht, de open ruimte en de zonsondergang maken het een geliefde stadsritueelplek.",
  "Palacio Real de Madrid":
    "Het Palacio Real voegt Madrid als hofstad toe aan de route. De westelijke centrumrand krijgt hier monumentale schaal, tuinen en koninklijke representatie.",
  "Plaza de España Madrid":
    "Plaza de España brengt meerdere Madrid-lagen samen: Cervantes en Don Quichot als verhaal, hoogbouw als moderniteit, en een vernieuwd plein als groene schakel aan de rand van Gran Vía.",
  "Estació del Nord Valencia":
    "Estació del Nord laat Valencia zichzelf meteen presenteren. De modernistische decoratie maakt aankomst niet neutraal, maar typisch Valenciaans door keramiek, kleur, sinaasappels en ambacht.",
  "Plaça de l'Ajuntament":
    "Plaça de l'Ajuntament is een bestuurlijk podium en dagelijks knooppunt tegelijk. Juist die mix maakt het plein belangrijk: stadhuis, postgebouw, bloemen, verkeer en Fallas delen dezelfde ruimte.",
  "Mercat Central Valencia":
    "De Mercat Central toont Valencia via eten, architectuur en omgeving. De markt koppelt modernistisch licht en keramiek aan producten uit de huerta, de zee en het dagelijkse stadsleven.",
  "La Lonja de la Seda":
    "La Lonja de la Seda is een van de sterkste tekens van Valencia als handelsstad. De zijdehandel werd hier niet verborgen, maar kreeg monumentale, gotische waardigheid.",
  "Catedral de Valencia en Puerta de los Apóstoles":
    "Bij de Puerta de los Apóstoles wordt Valencia's watercultuur zichtbaar. De kathedraalpoort is niet alleen religieus decor, maar ook podium voor openbaar irrigatierecht.",
  "Torres de Serranos":
    "De Torres de Serranos tonen hoe de oude stad zich afbakende. Door de ligging aan de rand richting Turia voel je de overgang tussen ommuurde stad, brug en buitengebied.",
  "Jardín del Turia bij Puente del Real":
    "De Turia-tuin is Valencia's grote stedelijke ingreep. Een voormalige rivierbedding werd een lang park dat wijken verbindt en de stad een heel eigen wandelstructuur geeft.",
  "Parque Gulliver":
    "Parque Gulliver maakt de Turia speels en bijna surrealistisch. De brede oude rivierbedding biedt ruimte aan een groot object dat tegelijk sculptuur, speeltuin en stadsicoon is.",
  "Ciudad de las Artes y las Ciencias":
    "De Ciudad de las Artes y las Ciencias is Valencia als toekomstbeeld. Aan het einde van de oude rivierbedding zet de stad een spectaculair contrast naast haar handels- en watergeschiedenis.",
  "Oceanogràfic Valencia":
    "Oceanogràfic rondt de moderne oostelijke as af met water, educatie en attractiewaarde. Het laat het watermotief van huerta en Turia verschuiven naar zee en publiekscultuur.",
  "Douglas Sea Terminal en havenbrug":
    "De Sea Terminal en havenbrug maken Douglas meteen praktisch en maritiem. Hier zie je hoe een eilandhoofdstad afhankelijk is van aankomst, vracht, reizigers en gecontroleerde doorgangen.",
  "Jubilee Clock Douglas":
    "De Jubilee Clock zet Victoriaans Douglas letterlijk op een kruispunt. Het monument maakt van tijd, koninklijke herdenking en stadsoriëntatie één herkenbaar punt.",
  "Tower of Refuge zichtpunt":
    "De Tower of Refuge maakt de baai dubbel: mooi en gevaarlijk tegelijk. Het kleine gebouw op Conister Rock herinnert aan scheepvaart, redding en de kracht van het water.",
  "Loch Promenade en Marine Gardens":
    "Loch Promenade en de Marine Gardens tonen Douglas als geconstrueerde badplaats. De baai werd niet alleen bekeken, maar ingericht als lange verblijfsruimte.",
  "Gaiety Theatre Douglas":
    "Het Gaiety Theatre voegt Frank Matcham, theatertechniek en avondcultuur toe aan de promenade. Douglas profileerde zich daarmee als bestemming, niet alleen als haven.",
  "Douglas Bay Horse Tramway halte":
    "De paardentram is levend erfgoed langs de baai. Hij laat zien dat toeristisch vervoer niet altijd snel hoeft te zijn; juist het ritme en de zichtbaarheid zijn de attractie.",
  "Manx Museum":
    "Het Manx Museum trekt de route van Douglas naar Isle of Man als geheel. Hier komen taal, eilandgeschiedenis, politiek en identiteit achter de kuststad naar voren.",
  "Great Union Camera Obscura Douglas Head":
    "Douglas Head geeft overzicht. Vanaf de hoogte begrijp je de route als één baai-landschap met ferry, promenade, reddingstoren, stad en open zee.",
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
    {
      route: "Loop vanaf Muelle Uno langs de havenrand richting La Malagueta en blijf aan de kant van de promenade.",
      watch: "Let op hoe de stad van moderne havenruimte naar strand, zee en dagelijks kustleven verschuift.",
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
      route: "Loop vanaf Bolkerstraße naar Kunstsammlung K20 aan de rand van de Altstadt.",
      watch: "Vergelijk de uitgaanssfeer van de Altstadt met de rustigere museum- en pleinruimte rond K20.",
    },
    {
      route: "Loop vanaf K20 via de winkelstraten richting Königsallee.",
      watch: "Let op hoe cultuur, winkels en representatieve luxe steeds dichter bij elkaar komen.",
    },
    {
      route: "Loop vanaf de Kö richting de Rijn en kies het stuk promenade bij KIT als tussenpunt naar de Rheinturm.",
      watch: "Let op hoe winkelstad, parkachtige randen en rivierzicht in elkaar overlopen.",
    },
    {
      route: "Volg vanaf de promenade de Rijn zuidwaarts richting Rheinturm.",
      watch: "Je blijft aan dezelfde oever: let op hoe de kade steeds moderner wordt richting MedienHafen.",
    },
    {
      route: "Loop vanaf de Rheinturm nog een kort stuk door richting MedienHafen en de opvallende moderne havengebouwen.",
      watch: "Vergelijk de technische hoogte van de toren met de expressieve architectuur en terrassen van de haven.",
    },
  ],
  keulen: [
    {
      route: "Loop vanaf de Dom een kort stuk naar Museum Ludwig aan de kant van station en Rijn.",
      watch: "Let op hoe middeleeuwse religie en moderne kunst hier bijna deur aan deur staan.",
    },
    {
      route: "Loop vanaf Museum Ludwig naar de Hohenzollernbrücke en neem de route richting de voetgangerszijde.",
      watch: "Kijk hoe station, museum, Dom en brug samen één druk aankomstgebied vormen.",
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
      route: "Loop vanaf Groß St. Martin richting de Rijn en volg de oever zuidwaarts naar het Schokoladenmuseum.",
      watch: "Let op hoe de oude Altstadt langzaam plaatsmaakt voor musea, kades en hergebruikte Rijnruimte.",
    },
    {
      route: "Loop vanaf het Schokoladenmuseum verder langs het water naar Rheinauhafen.",
      watch: "Kijk hoe de route steeds moderner wordt: van publieksmuseum naar havenarchitectuur en Kranhäuser.",
    },
  ],
  frankfurt: [
    {
      route: "Loop vanaf Römerberg een kort stuk naar de Paulskirche.",
      watch: "Let op hoe snel marktplein, bestuur en politieke herinnering elkaar in de oude kern raken.",
    },
    {
      route: "Loop vanaf de Paulskirche richting de Kaiserdom via de oude stadskern.",
      watch: "Let op hoe politieke herinnering, reconstructie en religieuze geschiedenis dicht bij elkaar liggen.",
    },
    {
      route: "Loop vanaf de Dom terug richting de Main en steek de Eiserner Steg op.",
      watch: "Kijk onderweg hoe snel de stad van kerk en plein naar rivierfront verandert.",
    },
    {
      route: "Steek door naar de zuidoever en loop richting Städel Museum aan de Museumsufer.",
      watch: "Vergelijk de skyline aan de overkant met de culturele rust van de museumoever.",
    },
    {
      route: "Steek terug naar de noordkant en loop via de binnenstad richting Goethe-Haus.",
      watch: "Let op hoe de schaal kleiner en persoonlijker wordt dan bij rivier, museumoever en skyline.",
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
      route: "Loop vanaf Trafalgar Square naar Leicester Square via de rand van West End.",
      watch: "Let op hoe nationale monumentaliteit snel verandert in theater- en bioscoopdrukte.",
    },
    {
      route: "Loop vanaf Leicester Square door naar Covent Garden.",
      watch: "Kijk hoe entertainment, voetgangersstraten, winkels en straatoptredens elkaar opvolgen.",
    },
    {
      route: "Loop vanaf Covent Garden via Strand richting de Royal Courts of Justice.",
      watch: "Let op hoe winkel- en theaterstad verandert in institutionele gevels en drukke stadsroutes.",
    },
    {
      route: "Loop vanaf de Royal Courts via Fleet Street en Ludgate Hill naar St Paul’s Cathedral.",
      watch: "Kijk onderweg naar de overgang van rechtspraak en persgeschiedenis naar de City.",
    },
    {
      route: "Loop vanaf St Paul’s recht richting de Millennium Bridge.",
      watch: "Let op hoe de zichtlijn naar de Thames steeds sterker wordt.",
    },
    {
      route: "Steek de Millennium Bridge over en loop naar Tate Modern.",
      watch: "Vergelijk de koepel van St Paul’s achter je met de industriële gevel van Tate Modern voor je.",
    },
    {
      route: "Loop vanaf Tate Modern langs Bankside naar Shakespeare’s Globe.",
      watch: "Let op hoe moderne kunst en theatergeschiedenis direct naast elkaar aan de rivier liggen.",
    },
    {
      route: "Loop vanaf Shakespeare’s Globe verder langs Bankside richting Borough Market.",
      watch: "Let op hoe theatergeschiedenis, pakhuizen, spoorbogen en foodcultuur elkaar opvolgen.",
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
      route: "Loop vanaf Tivoli terug richting het centrum en volg de winkelstraten naar Rundetaarn.",
      watch: "Kijk hoe Copenhagen wisselt van vermaak naar compacte winkelstad en historische kennisplek.",
    },
    {
      route: "Loop vanaf Rundetaarn richting Slotsholmen en Christiansborg Slot.",
      watch: "Let op hoe smalle centrumstraten overgaan in bruggen, water en bestuurlijke gevels.",
    },
    {
      route: "Loop vanaf Christiansborg via de binnenstad naar Rosenborg Slot en de tuinen.",
      watch: "Vergelijk het formele machtseiland met het oudere, groenere kasteelkarakter van Rosenborg.",
    },
    {
      route: "Loop vanaf Rosenborg richting Kongens Nytorv en door naar Nyhavn.",
      watch: "Let op de overgang van koninklijk groen naar kleurrijke havengevels en terrassen.",
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
      route: "Loop vanaf de Innbrug terug richting het centrum en ga naar Maria-Theresien-Straße.",
      watch: "Let op hoe de stad van rivierovergang en Altstadt verandert in een brede winkel- en flaneeras.",
    },
    {
      route: "Volg Maria-Theresien-Straße zuidwaarts naar de Triumphpforte.",
      watch: "Kijk hoe de brede stadsas eindigt in een ceremonieel monument met de bergen nog steeds op de achtergrond.",
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
      route: "Loop vanaf de Staatsoper richting Musikverein aan de rand van Karlsplatz.",
      watch: "Vergelijk opera als theaterinstituut met concertcultuur als Weense identiteit.",
    },
    {
      route: "Loop vanaf Musikverein richting de Naschmarkt via de omgeving van Karlsplatz.",
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
      route: "Loop vanaf Stadtpark richting Hundertwasserhaus.",
      watch: "Let op hoe de stad minder formeel wordt: kleur, onregelmatigheid en groen breken met de monumentale stijl.",
    },
    {
      route: "Loop vanaf Hundertwasserhaus richting Wien Mitte en verder naar de Prater-ingang bij het Riesenrad.",
      watch: "Let op hoe de stad verandert van kleurrijk woonexperiment naar een grotere ontspanningszone met attracties en parkruimte.",
    },
  ],
  madrid: [
    {
      route: "Start aan de rand van het Estanque Grande en loop rustig zuidwaarts door Retiro richting Palacio de Cristal.",
      watch: "Let op hoe drukke stadsranden verdwijnen zodra water, bomen en parkpaden de route overnemen.",
    },
    {
      route: "Loop vanaf Palacio de Cristal via de westelijke parkpaden richting de uitgang bij Alfonso XII en daal af naar Puerta de Atocha.",
      watch: "Kijk hoe Madrid verandert van parklandschap naar musea, verkeer en grote stationsruimte.",
    },
    {
      route: "Loop vanaf Atocha via Paseo del Prado naar Museo del Prado.",
      watch: "Let op hoe station, bomenlaan, museumgevels en culturele prestige-as elkaar opvolgen.",
    },
    {
      route:
        "Loop vanaf het Prado via Barrio de las Letras richting Puerta del Sol. Is dit stuk te lang of wil je tijd winnen, neem dan metro lijn 1 vanaf Atocha of Estación del Arte richting Sol en loop later kort terug naar het Prado als losse museumstop.",
      watch: "Onderweg zie je de overgang van museumas en literair kwartier naar het drukke hart van Madrid.",
      transit: "Metro-optie: neem lijn 1 vanaf Atocha of Estación del Arte naar Sol en pak de route daar weer op.",
    },
    {
      route: "Loop vanaf Puerta del Sol via Calle Mayor naar Plaza Mayor.",
      watch: "Vergelijk de open knooppuntdrukte van Sol met de gesloten historische pleinruimte van Plaza Mayor.",
    },
    {
      route: "Loop vanaf Plaza Mayor terug richting Sol en daarna via Calle de la Montera of Preciados naar Gran Vía.",
      watch: "Let op hoe historisch pleinleven overgaat in winkelstraten en daarna in een brede stadsboulevard.",
    },
    {
      route: "Volg Gran Vía westwaarts richting Plaza de España, maar buig eerst door naar Templo de Debod via het parkgebied erachter.",
      watch: "Kijk hoe de stad van drukke winkel- en theaterstraat langzaam opener wordt richting uitzichtpunt en park.",
    },
    {
      route: "Loop vanaf Templo de Debod richting het Palacio Real en de tuinen aan de westkant van het centrum.",
      watch: "Vergelijk het informele uitzichtpunt met de formele schaal van paleis, tuinen en hofstad.",
    },
    {
      route: "Loop vanaf het Palacio Real via de westelijke centrumrand naar Plaza de España.",
      watch: "Let op hoe koninklijke monumentaliteit overgaat in een moderner plein met hoogbouw, groen en Cervantes.",
    },
  ],
  valencia: [
    {
      route: "Loop vanaf Estació del Nord naar Plaça de l'Ajuntament via de brede centrumstraten.",
      watch: "Let op hoe modernistische aankomst overgaat in een plein dat tegelijk bestuur, bloemen en Fallas-podium is.",
    },
    {
      route: "Loop vanaf Plaça de l'Ajuntament noordwestwaarts naar de Mercat Central.",
      watch: "Kijk hoe officiële gevels en winkelstraten langzaam plaatsmaken voor voedselhandel en oude stadsdichtheid.",
    },
    {
      route: "Steek vanaf de Mercat Central kort over naar La Lonja de la Seda.",
      watch: "Vergelijk voedselhandel van nu met de monumentale zijde- en contracthandel van vroeger.",
    },
    {
      route: "Loop vanaf La Lonja via de oude straten naar de Puerta de los Apóstoles bij de kathedraal.",
      watch: "Let op hoe handel, kerk en openbaar waterrecht in een paar minuten lopen bij elkaar komen.",
    },
    {
      route: "Loop vanaf de kathedraal noordwaarts naar de Torres de Serranos.",
      watch: "Kijk hoe het centrum richting oude stadsrand, poort en Turia-overgang beweegt.",
    },
    {
      route: "Daal vanaf Torres de Serranos af naar de Turia-tuinen bij Puente del Real.",
      watch: "Let op het hoogteverschil: je voelt dat je een oude rivierbedding in loopt.",
    },
    {
      route: "Volg de Turia-tuinen oostwaarts richting Parque Gulliver.",
      watch: "Kijk hoe sport, groen, bruggen en speelruimte elkaar in één lang stadspark opvolgen.",
    },
    {
      route:
        "Volg de Turia verder oostwaarts naar de Ciudad de las Artes y las Ciencias. Dit is het langste wandelstuk; blijf in de parkbedding voor de meest logische route.",
      watch: "Let op hoe het park steeds opener, groter en moderner wordt voordat de witte gebouwen verschijnen.",
    },
    {
      route: "Loop door het complex langs het water naar Oceanogràfic.",
      watch: "Vergelijk de theatrale cultuurarchitectuur met het meer attractieachtige waterlandschap aan het einde.",
    },
  ],
  douglas: [
    {
      route: "Loop vanaf de Sea Terminal langs de haven richting Victoria Street en de Jubilee Clock.",
      watch: "Let op de overgang van ferrylogistiek naar een Victoriaans stadscentrum met klok en winkelstraten.",
    },
    {
      route: "Loop vanaf de Jubilee Clock naar de promenade en zoek zicht op de Tower of Refuge in Douglas Bay.",
      watch: "Kijk hoe een stadsmonument aan land wordt gekoppeld aan een reddingsverhaal midden in de baai.",
    },
    {
      route: "Volg de promenade noordwaarts langs Loch Promenade en de Marine Gardens.",
      watch: "Let op gevelrijen, tuinen en schuilplekken: de promenade is ontworpen om te verblijven.",
    },
    {
      route: "Loop verder langs de baai naar het Gaiety Theatre bij Villa Marina.",
      watch: "Kijk hoe ontspanning overdag overgaat in avondcultuur en theater aan dezelfde promenade.",
    },
    {
      route: "Blijf in de buurt van de promenade en zoek rails, halte of verwijzingen naar de Douglas Bay Horse Tramway.",
      watch: "Let op hoe de tram bij de promenade hoort als langzaam erfgoed, niet als haastige verbinding.",
    },
    {
      route: "Loop vanaf de promenade landinwaarts omhoog naar het Manx Museum.",
      watch: "Let op de overgang van kustfront naar stadsstraten en culturele eilandcontext.",
    },
    {
      route:
        "Loop vanaf het Manx Museum terug richting haven en klim daarna naar Douglas Head en de Camera Obscura. Dit laatste stuk is steiler; neem rustig de tijd.",
      watch: "Kijk onderweg terug: hoe hoger je komt, hoe duidelijker de boog van de baai wordt.",
    },
  ],
};

const buildDeeperContext = (tour, stop) =>
  deeperContextByPlace[stop.place] ||
  `Deze plek zegt iets typisch over ${tour.city}: niet alleen het losse gebouw of plein is belangrijk, maar vooral hoe ${stop.place} verbonden is met de geschiedenis, routes en identiteit van de stad. Door ter plekke naar details te kijken, zie je beter waarom juist deze stop in de route zit.`;

const activityTipsByPlace = {
  "Plaza de la Constitución": "Pak na de route nog een drankje rond Plaza del Obispo of loop kort naar Museo Carmen Thyssen voor Málaga’s schilderkunst.",
  "Catedral de Málaga": "Wil je meer context, bezoek dan het kathedraalmuseum of kies een dakrondleiding voor uitzicht over het oude centrum.",
  "Teatro Romano": "Loop even binnen bij het Centro de Interpretación del Teatro Romano; klein, snel en precies passend bij deze stop.",
  "Alcazaba ingang": "Als je tijd hebt, bezoek de Alcazaba zelf en loop door naar Gibralfaro voor het beste overzicht over stad en haven.",
  "Plaza de la Merced": "Voor kunstliefhebbers ligt het Picasso Museum dichtbij; leuker nog als je eerst zijn geboorteplein hebt gezien.",
  "Muelle Uno": "Sluit af met Centre Pompidou Málaga of wandel door naar de vuurtoren La Farola voor havengevoel en avondlicht.",
  "Playa de la Malagueta": "Neem na afloop iets aan de chiringuitos of wandel over de boulevard richting Pedregalejo als je nog kustsfeer wilt.",
  "Marktplatz en Rathaus": "Bezoek het SchifffahrtMuseum in de Schlossturm als je de band tussen Düsseldorf en de Rijn verder wilt snappen.",
  "Burgplatz en Schlossturm": "Blijf nog even aan de Rheintreppe zitten; dit is een van de beste plekken om de stad zonder haast te lezen.",
  Bolkerstraße: "Proef een Altbier in een traditioneel brouwhuis zoals Uerige of Füchschen, liefst staand aan de toog.",
  "Kunstsammlung K20": "Ga naar binnen bij K20 als je moderne kunst wilt toevoegen aan je Altstadt-dag; het museum ligt ideaal op de route.",
  Königsallee: "Loop langzaam langs beide kanten van de gracht en kijk bij de etalages hoe luxe hier bijna als straatdecor werkt.",
  "Rheinuferpromenade bij KIT": "KIT - Kunst im Tunnel ligt letterlijk onder de promenade en is een leuke korte kunststop onderweg.",
  Rheinturm: "Ga bij helder weer omhoog in de Rheinturm; vanaf boven begrijp je Rijn, Altstadt en MedienHafen in één blik.",
  MedienHafen: "Loop langs de Gehry-gebouwen en drink iets aan het water; dit is Düsseldorf op z’n meest modern.",
  "Kölner Dom": "Bezoek de Domschatzkammer of beklim de toren als je energie hebt; de hoogte maakt de stad ineens heel concreet.",
  "Museum Ludwig": "Loop Museum Ludwig binnen voor moderne kunst, vooral als je het contrast met de Dom extra sterk wilt maken.",
  Hohenzollernbrücke: "Loop tot halverwege de brug voor het klassieke Domzicht en kijk hoe treinverkeer en voetgangers elkaar kruisen.",
  "Alter Markt": "Neem hier pauze op een terras en kijk naar de gevels rond het plein; dat is bijna een gratis stadsmuseum.",
  "Historisches Rathaus": "Kijk extra naar de beelden op de toren of bezoek in de buurt het Wallraf-Richartz-Museum voor Keulse kunstgeschiedenis.",
  "Groß St. Martin": "Loop om de kerk heen via de smalle straten richting Rijn; buiten zie je de ligging eigenlijk het best.",
  "Schokoladenmuseum Köln": "Ga het Schokoladenmuseum in als je tijd hebt; het is toegankelijk, leuk en past goed bij Keulen als handelsstad.",
  Rheinauhafen: "Wandel door tot de Kranhäuser en vergelijk oude havenfunctie met moderne architectuur aan het water.",
  Römerberg: "Bezoek het Historisches Museum Frankfurt aan de rand van het plein als je de stadslagen verder wilt uitpakken.",
  "Paulskirche Frankfurt": "Loop binnen als de Paulskirche open is; de sobere ruimte maakt de democratische herinnering veel tastbaarder.",
  "Kaiserdom St. Bartholomäus": "Beklim de Domtoren als die open is; het uitzicht maakt het verschil tussen oude stad en skyline duidelijk.",
  "Eiserner Steg": "Steek door naar de Museumsufer; vooral het Städel Museum is een sterke vervolgstop voor kunst.",
  "Städel Museum": "Neem minstens de museumtuin of entreeomgeving mee; voor kunstliefhebbers is het Städel de moeite waard om langer te blijven.",
  "Goethe-Haus": "Bezoek het Goethe-Haus als je tijd hebt; het maakt de schrijver minder abstract en veel menselijker.",
  "Main Tower": "Neem echt eens een kijkje vanaf het uitkijkplatform; Frankfurt is van boven misschien wel het meest logisch.",
  "Alte Oper": "Check of er ’s avonds een concert is of drink iets op Opernplatz terwijl de gevel langzaam oplicht.",
  "Trafalgar Square": "Loop gratis de National Gallery binnen; zelfs een kwartier geeft deze plek meteen meer culturele diepte.",
  "Leicester Square": "Kijk of er een theater- of filmpremière-sfeer hangt en loop daarna via de kleine straten richting Covent Garden.",
  "Covent Garden": "Blijf even voor straatmuziek of loop naar het London Transport Museum als je stad en mobiliteit leuk vindt.",
  "Royal Courts of Justice": "Loop eventueel door naar Temple Church of kijk naar de details in de gevel; dit stuk London zit vol juridische geschiedenis.",
  "St Paul’s Cathedral": "Beklim de koepel of loop naar binnen voor de Whispering Gallery; de schaal voel je pas echt van dichtbij.",
  "Millennium Bridge": "Ga Tate Modern in, al is het maar kort; vanaf de bovenste verdiepingen zie je de brug en St Paul’s als één as.",
  "Tate Modern": "Ga gratis even naar binnen of pak een uitzichtpunt in het gebouw; de relatie met St Paul’s blijft daar sterk zichtbaar.",
  "Shakespeare’s Globe": "Check of er een voorstelling of rondleiding is; anders is de buitenkant al een mooie korte theaterstop.",
  "Borough Market": "Proef iets kleins bij een kraam en loop daarna naar Southwark Cathedral voor een rustige tegenhanger naast de markt.",
  "Tower Bridge": "Bezoek de Tower Bridge Exhibition als je wilt zien hoe de brug technisch opent en sluit.",
  Rådhuspladsen: "Loop even het stadhuis binnen als het open is, of gebruik het plein als start voor Strøget.",
  "Tivoli Gardens": "Ga ’s avonds terug naar Tivoli voor de verlichting; dan begrijp je pas waarom het midden in de stad werkt.",
  Rundetaarn: "Beklim Rundetaarn als je tijd hebt; het is een van de vriendelijkste uitzichtpunten van Copenhagen.",
  "Christiansborg Slot": "De toren van Christiansborg is een sterke gratis uitzichtplek als je Copenhagen van boven wilt zien.",
  "Rosenborg Slot": "Bezoek Rosenborg Slot of wandel door Kongens Have; beide geven een rustige koninklijke pauze midden in de stad.",
  Nyhavn: "Stap op een korte havenrondvaart vanaf Nyhavn; vanaf het water wordt de stad ineens veel begrijpelijker.",
  "Amalienborg Slotsplads": "Probeer de wisseling van de wacht mee te pakken of bezoek Amalienborg Museum voor het hofverhaal.",
  "Frederik’s Church": "Loop binnen bij Marmorkirken voor de koepelruimte; buiten is de as mooi, binnen voel je de schaal.",
  "Den Lille Havfrue": "Combineer deze stop met Kastellet; de vestingwallen maken de wandeling naar het beeld veel rijker.",
  "Goldenes Dachl": "Bezoek het museum bij het Goldenes Dachl als je meer wilt weten over Maximiliaan en de stad als machtsdecor.",
  "Hofburg Innsbruck": "De Hofburg is ook van binnen te bezoeken en geeft veel context over Innsbruck als Habsburgse residentiestad.",
  Hofkirche: "Ga naar binnen voor de zwarte bronzen figuren rond het grafmonument; dat is een van Innsbrucks sterkste museumachtige ervaringen.",
  "Dom zu St. Jakob": "Loop kort naar binnen voor het barokke interieur, vooral als je net de compacte buitenruimte hebt bekeken.",
  Innbrücke: "Neem tijd voor de gekleurde huizen aan de Inn; dit is de fotostop die de stad bijna vanzelf uitlegt.",
  "Maria-Theresien-Straße": "Ga zitten met zicht op de Annasäule en de bergen; dit is een goede plek om stad en Alpen tegelijk te voelen.",
  Triumphpforte: "Loop nog een stukje door richting Wiltener Platzl voor een rustiger lokaal einde na de drukke stadsas.",
  Stephansdom: "Beklim de toren of bezoek de catacomben als je Wenen onder en boven straatniveau wilt ervaren.",
  Hofburg: "Bezoek de Kaiserappartements of de Schatzkammer als je de keizerlijke machtslaag concreter wilt maken.",
  Heldenplatz: "Loop naar het Weltmuseum Wien of de Neue Burg; rond dit plein zit enorm veel collectie en wereldgeschiedenis.",
  "Wiener Staatsoper": "Kijk of er een rondleiding of last-minute staanplaats is; opera is hier geen decor maar levend gebruik.",
  Musikverein: "Check of er een concert is, of kijk alleen al naar de buitenkant rond Karlsplatz als muziekstop tussen opera en markt.",
  Naschmarkt: "Proef iets kleins bij een kraam en loop daarna langs de Secession voor een sterke kunststop vlakbij.",
  Karlskirche: "Ga naar binnen als er toegang is; de hoogte en fresco’s maken de theatrale buitenkant nog duidelijker.",
  Stadtpark: "Zoek het Strauss-monument en combineer dit met een korte wandeling langs de Wienfluss.",
  Hundertwasserhaus: "Loop ook even naar Kunst Haus Wien in de buurt als je Hundertwasser beter wilt begrijpen.",
  "Prater Riesenrad": "Maak een ritje in het Riesenrad als je tijd hebt; het uitzicht maakt de speelse kant van Wenen compleet.",
  "Estanque Grande del Retiro": "Huur een roeibootje of loop naar het monument van Alfonso XII voor een mooi overzicht over het meer.",
  "Palacio de Cristal": "Check of er een gratis Reina Sofía-tentoonstelling in het Palacio de Cristal loopt; de plek is vaak al de helft van de ervaring.",
  "Puerta de Atocha tropentuin": "Combineer Atocha met Museo Reina Sofía vlakbij, vooral als je moderne Spaanse kunst wilt zien.",
  "Museo del Prado": "Plan later minstens een korte Prado-sessie; zelfs één zaal maakt Madrid als kunststad veel sterker.",
  "Puerta del Sol": "Loop kort naar Chocolatería San Ginés of naar Plaza Mayor; allebei laten een andere laag van het centrum zien.",
  "Plaza Mayor Madrid": "Neem een korte pauze onder de arcades of loop naar Mercado de San Miguel voor een snelle eetstop.",
  "Gran Vía bij Telefónica": "Bezoek de Espacio Fundación Telefónica of kijk of er een musical draait aan Gran Vía.",
  "Templo de Debod": "Kom hier rond zonsondergang terug; het uitzicht richting Casa de Campo is dan het sterkst.",
  "Palacio Real de Madrid": "Bezoek de Sabatini-tuinen of het paleis zelf als je meer tijd hebt; dit is de hofstadlaag van Madrid.",
  "Plaza de España Madrid": "Sluit af op het dakterras van RIU Plaza España voor een drankje en uitzicht over Gran Vía, het paleisgebied en de stad.",
  "Estació del Nord Valencia": "Loop ook kort de stationshal in als die open is; binnen zie je de modernistische details vaak nog sterker.",
  "Plaça de l'Ajuntament": "Kom later terug als er markt, licht of Fallas-activiteit is; dit plein verandert sterk per moment van de dag.",
  "Mercat Central Valencia": "Proef iets simpels uit de markt, bijvoorbeeld fruit, horchata of een kleine lokale snack, als de markt open is.",
  "La Lonja de la Seda": "Bezoek de binnenzaal als je tijd hebt; de zuilen maken de rijkdom van de zijdehandel veel tastbaarder.",
  "Catedral de Valencia en Puerta de los Apóstoles": "Ben je er op donderdag rond 12 uur, kijk dan of je iets van het Tribunal de las Aguas kunt meemaken.",
  "Torres de Serranos": "Loop over of rond de torens als toegang mogelijk is; van boven zie je de oude stadsrand en Turia veel beter.",
  "Jardín del Turia bij Puente del Real": "Huur later een fiets voor de Turia-route als je sneller naar strand of haven wilt doorsteken.",
  "Parque Gulliver": "Neem hier even pauze als je met kinderen reist; dit is een van de meest speelse plekken in de Turia.",
  "Ciudad de las Artes y las Ciencias": "Neem de tijd voor foto's rond het water; vroeg of laat licht maakt de reflecties veel sterker.",
  "Oceanogràfic Valencia": "Plan Oceanogràfic als aparte activiteit als je met kinderen reist of meer over zeeleven wilt toevoegen.",
  "Douglas Sea Terminal en havenbrug": "Kijk later bij aankomst of vertrek van een ferry; dan voel je de rol van Douglas als eilandpoort het best.",
  "Jubilee Clock Douglas": "Loop even Victoria Street in; dan zie je hoe de klok winkelstad, haven en promenade aan elkaar knoopt.",
  "Tower of Refuge zichtpunt": "Loop bij laag of hoog tij nog eens terug naar het uitzichtpunt; de baai verandert dan zichtbaar.",
  "Loch Promenade en Marine Gardens": "Neem rustig een koffie langs de promenade en kijk hoe weer, licht en water het stadsbeeld veranderen.",
  "Gaiety Theatre Douglas": "Check het avondprogramma of een rondleiding; het theater is sterker als je ook iets van de binnenwereld ziet.",
  "Douglas Bay Horse Tramway halte": "Rijd een stukje met de paardentram als hij rijdt; langzaam reizen past perfect bij deze promenade.",
  "Manx Museum": "Ga naar binnen als je tijd hebt; het museum is een van de beste plekken om Isle of Man echt te begrijpen.",
  "Great Union Camera Obscura Douglas Head": "Blijf boven even zitten voor het uitzicht over de baai, vooral als het licht aan het einde van de dag zachter wordt.",
};

const buildActivityTip = (tour, stop) =>
  activityTipsByPlace[stop.place] ||
  `Blijf na deze opdracht nog een paar minuten rond ${stop.place}. Zoek een museum, uitzichtpunt of café in de buurt en vergelijk wat je daar ziet met het verhaal van ${tour.city}.`;

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

const getFullTourRouteUrl = (tour) => {
  const stops = tour.stops;
  const origin = stops[0].coordinates;
  const destination = stops[stops.length - 1].coordinates;
  const waypoints = stops
    .slice(1, -1)
    .map((stop) => `${stop.coordinates.lat},${stop.coordinates.lng}`)
    .join("|");

  return `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&travelmode=walking${
    waypoints ? `&waypoints=${encodeURIComponent(waypoints)}` : ""
  }`;
};

const renderAdminRouteAudit = (tour) => {
  if (!isAdminMode()) return "";

  return `
    <div class="admin-route-audit">
      <span class="pill">Admin routecheck</span>
      <h3>Hele route in Google Maps</h3>
      <p>Open alle stops achter elkaar om te controleren of de wandelvolgorde logisch loopt.</p>
      <a class="button primary small" href="${getFullTourRouteUrl(tour)}" target="_blank" rel="noopener">
        Open volledige route
      </a>
      <ol>
        ${tour.stops
          .map(
            (stop, index) => `
              <li>
                <strong>${index + 1}. ${stop.title}</strong>
                <span>${stop.place} · unlock binnen ${getUnlockRadius(stop)} m</span>
              </li>
            `,
          )
          .join("")}
      </ol>
    </div>
  `;
};

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
      ${
        guide?.transit
          ? `<div class="transit-option"><strong>Metro-optie</strong><span>${guide.transit}</span></div>`
          : ""
      }
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
    <div class="activity-tip">
      <h3>Tip voor daarna</h3>
      <p>${buildActivityTip(tour, stop)}</p>
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
            ${
              guide?.transit
                ? `<div class="transit-option"><strong>Metro-optie</strong><span>${guide.transit}</span></div>`
                : ""
            }
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
  installCallout.innerHTML = "";

  if (!isStandaloneApp()) {
    renderWebInstallOnly();
  }
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
          <strong class="tour-price">${getTourPrice(tour)}</strong>
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
  const adminMode = isAdminMode();
  stopList.innerHTML = tour.stops
    .map(
      (stop, index) => `
        <button class="stop-button ${index === selectedStopIndex ? "active" : ""} ${
          done.includes(index) ? "done" : ""
        }" type="button" data-stop-index="${index}">
          <span>Stop ${index + 1}</span>
          <strong>${stop.title}</strong>
          <span>${stop.place}</span>
          ${adminMode ? `<em>Unlockafstand: binnen ${getUnlockRadius(stop)} m</em>` : ""}
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
            ${
              adminMode
                ? `<small>Normaal opent deze opdracht pas binnen ${unlockRadiusMeters} meter van deze locatie.</small>`
                : ""
            }
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
        }. Unlockgrens: ${unlockRadiusMeters} m.</p>
        ${renderAdminRouteAudit(tour)}
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
    <p><strong>Prijs: ${getTourPrice(tour)}</strong></p>
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
