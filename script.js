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
    id: "palma",
    city: "Palma de Mallorca",
    title: "Palma: zeezicht, gotiek en Moorse stadslagen",
    price: "€5,99",
    duration: "190 min",
    distance: "4,8 km",
    paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    summary:
      "Een mediterrane stadsroute langs Parc de la Mar, La Seu, Almudaina, Arabische resten, pleinen, modernisme, marktleven en de oude havenwijk.",
    stops: [
      {
        title: "Start bij het water van de stad",
        place: "Parc de la Mar Palma",
        coordinates: { lat: 39.56642, lng: 2.64923 },
        assignment:
          "Ga bij het water staan en kijk naar de kathedraal, de stadsmuur en de baai. Zoek hoe Palma zichzelf hier als zeestad en monumentale hoofdstad tegelijk laat zien.",
        question: "Waarom is Parc de la Mar een sterke startplek voor Palma?",
        hint: "Vergelijk water, stadsmuur, kathedraal en de open ruimte aan zee.",
        choices: [
          {
            text: "Omdat je hier meteen ziet hoe zee, stadsmuren en La Seu samen Palma’s silhouet vormen",
            correct: true,
            feedback:
              "Precies. Parc de la Mar is geen gewoon park: het werkt als spiegel voor La Seu en als overgang tussen baai, oude muren en historische stad.",
          },
          {
            text: "Omdat Palma hier vooral laat zien dat de zee geen rol speelt in de stad",
            correct: false,
            feedback: "Nee. Juist de ligging aan de baai maakt deze plek zo krachtig.",
          },
          {
            text: "Omdat dit punt volledig losstaat van de kathedraal en de oude stad",
            correct: false,
            feedback: "Niet goed. De kathedraal, muren en oude stad zijn vanaf hier juist in één beeld te lezen.",
          },
        ],
      },
      {
        title: "Kijk omhoog naar La Seu",
        place: "La Seu Catedral de Mallorca",
        coordinates: { lat: 39.56798, lng: 2.64833 },
        assignment:
          "Loop naar de kathedraal en bekijk de gevel, roosvensters en ligging boven de oude muren. Zoek waarom dit gebouw vanaf zee zo dominant werkt.",
        question: "Wat maakt La Seu zo specifiek voor Palma?",
        hint: "Let op de combinatie van gotische hoogte, licht, zeezicht en skyline.",
        choices: [
          {
            text: "De kathedraal staat als gotisch herkenningspunt boven de baai en bepaalt het stadsbeeld",
            correct: true,
            feedback:
              "Klopt. La Seu is niet alleen een kerk, maar het grote visuele anker van Palma: vanaf water, park en oude stad blijft de kathedraal de richting bepalen.",
          },
          {
            text: "De kathedraal is vooral bekend omdat ze volledig ondergronds ligt",
            correct: false,
            feedback: "Nee, de kracht zit juist in hoogte, licht en zichtbaarheid.",
          },
          {
            text: "La Seu is vooral een moderne winkelpassage zonder religieuze betekenis",
            correct: false,
            feedback: "Niet goed. Het gebouw is een religieus en stedelijk symbool van Mallorca.",
          },
        ],
      },
      {
        title: "Zoek macht naast de kathedraal",
        place: "Palau de l'Almudaina",
        coordinates: { lat: 39.56854, lng: 2.64729 },
        assignment:
          "Bekijk het paleis van buiten en vergelijk de strakke vestingachtige vormen met de kathedraal ernaast. Zoek sporen van Arabische, middeleeuwse en koninklijke macht.",
        question: "Waarom hoort de Almudaina direct naast La Seu in het verhaal van Palma?",
        hint: "Denk aan macht, hof, oude citadel en de plek boven de baai.",
        choices: [
          {
            text: "Omdat religieuze en wereldlijke macht hier letterlijk naast elkaar boven de baai staan",
            correct: true,
            feedback:
              "Ja. De Almudaina maakt duidelijk dat deze plek niet alleen mooi is, maar ook bestuurlijk en strategisch belangrijk was.",
          },
          {
            text: "Omdat het paleis vooral een moderne parkeergarage aan de rand van de stad is",
            correct: false,
            feedback: "Nee. De Almudaina is juist een historische machtsplek in het hart van Palma.",
          },
          {
            text: "Omdat het paleis geen enkele relatie heeft met de oude stad of de zee",
            correct: false,
            feedback: "Niet goed. De ligging boven de baai is juist essentieel.",
          },
        ],
      },
      {
        title: "Vind de stille Moorse laag",
        place: "Banys Àrabs Palma",
        coordinates: { lat: 39.56721, lng: 2.65196 },
        assignment:
          "Loop naar de Arabische baden en kijk naar de kleine schaal, tuin en overgebleven ruimte. Zoek waarom juist deze rustige plek belangrijk is in een stad vol grote monumenten.",
        question: "Wat vertellen de Banys Àrabs dat La Seu en Almudaina minder direct laten zien?",
        hint: "Denk aan Madina Mayurqa, watercultuur en alledaagser stedelijk leven.",
        choices: [
          {
            text: "Ze maken de islamitische laag van Palma concreet op een kleine, tastbare plek",
            correct: true,
            feedback:
              "Precies. Hier voel je Palma voor de christelijke stad veel directer: niet als groot skyline-monument, maar als overgebleven ruimte van water, badcultuur en stadslagen.",
          },
          {
            text: "Ze bewijzen vooral dat Palma nooit Moorse invloed heeft gehad",
            correct: false,
            feedback: "Nee, deze plek is juist een van de duidelijkste resten van die laag.",
          },
          {
            text: "Ze zijn gebouwd als modern stadion voor strandtoerisme",
            correct: false,
            feedback: "Niet goed. Kijk naar de schaal, vorm en historische functie.",
          },
        ],
      },
      {
        title: "Sta op het bestuurlijke plein",
        place: "Plaça de Cort",
        coordinates: { lat: 39.56988, lng: 2.65048 },
        assignment:
          "Kijk naar het stadhuis, de gevel en de oude olijfboom op het plein. Zoek hoe Palma hier bestuur, symboliek en dagelijks stadsleven mengt.",
        question: "Waarom is Plaça de Cort meer dan alleen een doorgangsplein?",
        hint: "Let op het stadhuis, de olijfboom en de smalle straten die hier samenkomen.",
        choices: [
          {
            text: "Omdat stedelijk bestuur, eiland-symboliek en oude binnenstad hier compact samenkomen",
            correct: true,
            feedback:
              "Klopt. Plaça de Cort voelt klein, maar is bestuurlijk sterk: het stadhuis, de oude olijfboom en de straten maken het plein tot een civic hart.",
          },
          {
            text: "Omdat hier vooral de luchthaven van Palma zichtbaar wordt",
            correct: false,
            feedback: "Nee, dit plein gaat juist over de historische binnenstad.",
          },
          {
            text: "Omdat het plein bewust zonder gebouwen of herkenningspunten is ingericht",
            correct: false,
            feedback: "Niet goed. De herkenningspunten zijn juist de reden dat deze stop werkt.",
          },
        ],
      },
      {
        title: "Kijk naar modernistisch Palma",
        place: "Can Forteza Rey",
        coordinates: { lat: 39.57023, lng: 2.65003 },
        assignment:
          "Bekijk de gevels rond Can Forteza Rey en zoek mozaïek, kleur, rondingen en decoratieve details. Vergelijk dit met de gotiek van La Seu.",
        question: "Wat voegt Can Forteza Rey toe aan de route?",
        hint: "Denk aan Palma rond 1900, stedelijke mode en decoratieve gevels.",
        choices: [
          {
            text: "Het laat zien dat Palma naast middeleeuwse monumenten ook een sterke modernistische laag heeft",
            correct: true,
            feedback:
              "Goed gezien. Palma is niet alleen kathedraal en paleis; rond 1900 kreeg de stad ook uitgesproken decoratieve gevels die Europese modernistische smaak vertalen naar de binnenstad.",
          },
          {
            text: "Het gebouw laat vooral zien dat Palma nooit geveldecoratie gebruikte",
            correct: false,
            feedback: "Nee, kijk juist naar kleur, ritme en ornament.",
          },
          {
            text: "Het is vooral een middeleeuwse stadspoort aan zee",
            correct: false,
            feedback: "Niet goed. Deze stop draait om modernisme in de stad.",
          },
        ],
      },
      {
        title: "Proef de stad in de markt",
        place: "Mercat de l'Olivar",
        coordinates: { lat: 39.57328, lng: 2.65214 },
        assignment:
          "Loop rond de markt als die open is, of bekijk de entrees en omgeving. Zoek vis, vlees, groente, lokale producten en hoe bewoners de stad dagelijks gebruiken.",
        question: "Waarom is Mercat de l'Olivar een goede tegenhanger van de monumenten?",
        hint: "Let op dagelijks gebruik, eten en lokale producten in plaats van alleen gevels.",
        choices: [
          {
            text: "Omdat je hier Palma als dagelijkse eet- en handelsstad ziet, niet alleen als monumentenstad",
            correct: true,
            feedback:
              "Precies. De markt maakt de route menselijker: na macht, kerk en gevels zie je hier producten, ritme en lokaal gebruik.",
          },
          {
            text: "Omdat de markt vooral een verlaten paleis zonder handel is",
            correct: false,
            feedback: "Nee. Juist het marktgebruik is de kern van deze stop.",
          },
          {
            text: "Omdat eten en eilandcultuur in Palma geen relatie met elkaar hebben",
            correct: false,
            feedback: "Niet goed. Producten, vis en lokale keuken zijn juist een directe manier om Mallorca te begrijpen.",
          },
        ],
      },
      {
        title: "Loop naar de oude handelswijk",
        place: "La Llotja de Palma",
        coordinates: { lat: 39.56802, lng: 2.64452 },
        assignment:
          "Bekijk La Llotja van buiten en kijk naar de straten eromheen. Zoek waarom een handelsgebouw zo dicht bij haven en oude stad logisch is.",
        question: "Waarom past La Llotja zo goed bij Palma’s zeeverhaal?",
        hint: "Llotja betekent handelsbeurs. Denk aan koopmanschap, haven en mediterrane routes.",
        choices: [
          {
            text: "Omdat handel, haven en gotische representatie hier bij elkaar komen",
            correct: true,
            feedback:
              "Ja. La Llotja laat zien dat Palma niet alleen naar zee keek voor uitzicht, maar ook voor handel, geld en verbindingen over de Middellandse Zee.",
          },
          {
            text: "Omdat dit gebouw vooral een bergboerderij ver van de stad was",
            correct: false,
            feedback: "Nee, de ligging bij de oude havenzone is juist betekenisvol.",
          },
          {
            text: "Omdat Palma historisch nooit met scheepvaart of handel te maken had",
            correct: false,
            feedback: "Niet goed. De Llotja wijst juist naar maritieme handel.",
          },
        ],
      },
      {
        title: "Bekijk kunst in de vestingrand",
        place: "Es Baluard",
        coordinates: { lat: 39.57066, lng: 2.64172 },
        assignment:
          "Bekijk de vestingmuren en het museumgebied. Zoek hoe oude verdediging hier is veranderd in cultuur, uitzicht en publieke ruimte.",
        question: "Wat maakt Es Baluard een slimme stop richting het einde?",
        hint: "Let op muren, hoogte, uitzicht en hedendaagse kunst.",
        choices: [
          {
            text: "De oude verdedigingsrand is hier hergebruikt als museum- en uitzichtplek",
            correct: true,
            feedback:
              "Klopt. Es Baluard laat Palma’s oude militaire rand veranderen in een plek voor kunst en stadskijken. Dat is precies het soort hergebruik dat een route interessant maakt.",
          },
          {
            text: "Omdat hier geen uitzicht, muren of cultuur te vinden zijn",
            correct: false,
            feedback: "Nee. De combinatie van vestingrand en museum maakt deze plek sterk.",
          },
          {
            text: "Omdat Es Baluard midden in een ondergronds winkelcentrum ligt",
            correct: false,
            feedback: "Niet goed. Dit is juist een zichtbare plek op de rand van de oude stad.",
          },
        ],
      },
      {
        title: "Eindig aan de havenpromenade",
        place: "Passeig Marítim Palma",
        coordinates: { lat: 39.56662, lng: 2.63779 },
        assignment:
          "Loop naar de havenpromenade en kijk terug richting La Seu, masten, water en stadsrand. Zoek hoe Palma als historische stad en jachthaven tegelijk werkt.",
        question: "Waarom is de havenpromenade een logisch eindpunt voor deze Palma-route?",
        hint: "Vergelijk je startbeeld bij Parc de la Mar met dit bredere havenbeeld.",
        choices: [
          {
            text: "Omdat je hier de historische skyline terugziet, maar nu met havenleven, boten en avondlicht erbij",
            correct: true,
            feedback:
              "Precies. De route begon met de stad aan het water en eindigt met hetzelfde thema groter en levendiger: La Seu, masten, boulevard en baai vallen samen.",
          },
          {
            text: "Omdat je hier zo ver van zee staat dat de haven niet meer zichtbaar is",
            correct: false,
            feedback: "Nee, juist de haven en het water maken deze afsluiting logisch.",
          },
          {
            text: "Omdat Palma hier verandert in een bergdorp zonder kustrelatie",
            correct: false,
            feedback: "Niet goed. De kustrelatie is hier juist maximaal zichtbaar.",
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
{
    "id": "paris",
    "city": "Parijs",
    "title": "Parijs: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "200 min",
    "distance": "14,0 km",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Parijs met 10 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Montmartre",
        "place": "Montmartre",
        "coordinates": {
          "lat": 48.8872,
          "lng": 2.3394
        },
        "assignment": "Kijk rustig rond bij Montmartre en zoek het detail dat deze plek typisch maakt voor Parijs.",
        "question": "Wat groeit er halverwege de heuvel, vlak bij de Sacré-Cœur?",
        "hint": "Rue des Saules.",
        "choices": [
          {
            "text": "De enige nog bestaande wijngaard van Parijs",
            "correct": true,
            "feedback": "Goed gezien. De Clos Montmartre produceert nog steeds jaarlijks een kleine oogst wijn."
          },
          {
            "text": "Een historische moestuin van de monniken",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een boomgaard die ooit bij het paleis hoorde",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Palais Garnier (Opera)",
        "place": "Palais Garnier (Opera)",
        "coordinates": {
          "lat": 48.87197,
          "lng": 2.3316
        },
        "assignment": "Kijk rustig rond bij Palais Garnier (Opera) en zoek het detail dat deze plek typisch maakt voor Parijs.",
        "question": "Wat ligt er verstopt onder dit operagebouw?",
        "hint": "Dit hoor je pas als je het navraagt of het verhaal kent van \"Phantom of the Opera\".",
        "choices": [
          {
            "text": "Een echt ondergronds waterreservoir/\"meer\"",
            "correct": true,
            "feedback": "Goed gezien. De Parijse brandweer gebruikt dit bassin nog steeds om te oefenen met duiken."
          },
          {
            "text": "Een tweede, kleinere geheime operazaal",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een verzegelde crypte van de architect",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Place de la Concorde",
        "place": "Place de la Concorde",
        "coordinates": {
          "lat": 48.86563,
          "lng": 2.32124
        },
        "assignment": "Kijk rustig rond bij Place de la Concorde en zoek het detail dat deze plek typisch maakt voor Parijs.",
        "question": "Wat staat er in het midden van het plein, en hoe oud is het echt?",
        "hint": "Kijk naar de obelisk en de tekst op de sokkel.",
        "choices": [
          {
            "text": "De Luxor-obelisk, ruim 3.000 jaar oud",
            "correct": true,
            "feedback": "Goed gezien. Het origineel komt echt uit de Luxor-tempel in Egypte en werd in 1836 aan Frankrijk geschonken."
          },
          {
            "text": "Een replica van een Egyptische obelisk, gemaakt in de 19e eeuw",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een obelisk uit het oude Rome, veroverd door Napoleon",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Arc de Triomphe",
        "place": "Arc de Triomphe",
        "coordinates": {
          "lat": 48.87379,
          "lng": 2.29503
        },
        "assignment": "Kijk rustig rond bij Arc de Triomphe en zoek het detail dat deze plek typisch maakt voor Parijs.",
        "question": "Wat brandt er eeuwig onder de boog?",
        "hint": "Kijk op de grond in het midden.",
        "choices": [
          {
            "text": "Een gaslamp uit de bouwtijd van de boog",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De vlam bij het Graf van de Onbekende Soldaat",
            "correct": true,
            "feedback": "Goed gezien. De vlam wordt elke avond om 18:30 opnieuw aangestoken, al sinds 1923."
          },
          {
            "text": "Een ceremoniële olielamp voor gesneuvelde generaals",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Eiffeltoren",
        "place": "Eiffeltoren",
        "coordinates": {
          "lat": 48.85826,
          "lng": 2.2945
        },
        "assignment": "Kijk rustig rond bij Eiffeltoren en zoek het detail dat deze plek typisch maakt voor Parijs.",
        "question": "Wat vind je helemaal bovenin de toren, verstopt achter glas?",
        "hint": "Kijk op de derde verdieping.",
        "choices": [
          {
            "text": "Een verborgen weerstation",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Het geheime appartement van Gustave Eiffel, met wassen beelden van hem en Thomas Edison",
            "correct": true,
            "feedback": "Goed gezien. Eiffel liet hier een klein privévertrek inrichten om VIP's te ontvangen."
          },
          {
            "text": "Een oude telegraafkamer uit WOI",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Musée d'Orsay",
        "place": "Musée d'Orsay",
        "coordinates": {
          "lat": 48.85996,
          "lng": 2.32656
        },
        "assignment": "Kijk rustig rond bij Musée d'Orsay en zoek het detail dat deze plek typisch maakt voor Parijs.",
        "question": "Wat is het bekende fotomoment binnenin dit voormalige treinstation?",
        "hint": "Loop naar het bovenste niveau, aan de achterkant.",
        "choices": [
          {
            "text": "Je kunt door de reusachtige stationsklok heen naar buiten kijken",
            "correct": true,
            "feedback": "Goed gezien. Het museum zit in het oude Gare d'Orsay, en de enorme klok is bewaard gebleven."
          },
          {
            "text": "Er hangt een originele stoomlocomotief aan het plafond",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Er ligt een spoor met echte rails midden door het museum",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Louvre (glazen piramide)",
        "place": "Louvre (glazen piramide)",
        "coordinates": {
          "lat": 48.86061,
          "lng": 2.33764
        },
        "assignment": "Zoek bij Louvre (glazen piramide) naar sporen van de oorspronkelijke functie en let op hoe bezoekers zich door de ruimte bewegen.",
        "question": "Er is nog een tweede, omgekeerde piramide. Waar?",
        "hint": "Ga het winkelcentrum onder het plein in (Carrousel du Louvre).",
        "choices": [
          {
            "text": "Ondersteboven van het plafond, met de punt bijna tot de vloer",
            "correct": true,
            "feedback": "Goed gezien. De Pyramide Inversée is een van de bekendste \"verborgen\" fotomomenten van het museum."
          },
          {
            "text": "Onder het water van de fontein op het plein",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Verborgen achter een muur in de Egyptische vleugel",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Pont Neuf",
        "place": "Pont Neuf",
        "coordinates": {
          "lat": 48.85731,
          "lng": 2.34138
        },
        "assignment": "Loop een stukje over of langs Pont Neuf en kijk hoe water, stad en verkeer hier samenkomen.",
        "question": "Wat klopt er niet aan de naam van deze brug?",
        "hint": "\"Neuf\" betekent \"nieuw\".",
        "choices": [
          {
            "text": "Het is juist de oudste nog bestaande brug van Parijs",
            "correct": true,
            "feedback": "Goed gezien. Ondanks de naam is dit al sinds 1607 de oudste overgebleven brug van de stad."
          },
          {
            "text": "De brug is nooit echt afgebouwd",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Hij ligt niet over de Seine maar over een zijkanaal",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Notre-Dame",
        "place": "Notre-Dame",
        "coordinates": {
          "lat": 48.85297,
          "lng": 2.3499
        },
        "assignment": "Kijk naar de gevel, de hoogte en de details rond Notre-Dame voordat je antwoord geeft.",
        "question": "Wat ligt er in de bestrating precies vóór de hoofdingang?",
        "hint": "Kijk naar beneden, niet naar de gevel.",
        "choices": [
          {
            "text": "Point Zéro, het punt van waaruit alle afstanden in Frankrijk gemeten worden",
            "correct": true,
            "feedback": "Goed gezien. Alle wegwijzers \"X km van Parijs\" in Frankrijk verwijzen naar dit exacte punt."
          },
          {
            "text": "Een middeleeuwse zonnewijzer",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De grafsteen van de architect",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Panthéon",
        "place": "Panthéon",
        "coordinates": {
          "lat": 48.84622,
          "lng": 2.34641
        },
        "assignment": "Kijk rustig rond bij Panthéon en zoek het detail dat deze plek typisch maakt voor Parijs.",
        "question": "Wat hangt er in het midden van de koepelzaal te zwaaien?",
        "hint": "Kijk omhoog, naar het middenpunt van de ruimte.",
        "choices": [
          {
            "text": "Foucaults slinger, die de rotatie van de aarde aantoont",
            "correct": true,
            "feedback": "Goed gezien. Léon Foucault installeerde hier in 1851 zijn beroemde experiment."
          },
          {
            "text": "Een historische luchtballon uit de Franse Revolutie",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een gouden kroonluchter uit de tijd van Napoleon",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "rome",
    "city": "Rome",
    "title": "Rome: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "200 min",
    "distance": "7,4 km",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Rome met 10 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Colosseum",
        "place": "Colosseum",
        "coordinates": {
          "lat": 41.89021,
          "lng": 12.49223
        },
        "assignment": "Kijk rustig rond bij Colosseum en zoek het detail dat deze plek typisch maakt voor Rome.",
        "question": "Waar verschenen de wilde dieren ineens midden in de arena?",
        "hint": "Kijk naar het blootliggende ondergrondse deel.",
        "choices": [
          {
            "text": "Via een netwerk van hijsplatforms in de hypogeum",
            "correct": true,
            "feedback": "Goed gezien. Onder de arenavloer zat een complex systeem van liften en luiken."
          },
          {
            "text": "Via een tunnel die rechtstreeks naar de rivier de Tiber liep",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Ze werden losgelaten vanaf de bovenste tribune",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Circus Maximus",
        "place": "Circus Maximus",
        "coordinates": {
          "lat": 41.88605,
          "lng": 12.48528
        },
        "assignment": "Kijk rustig rond bij Circus Maximus en zoek het detail dat deze plek typisch maakt voor Rome.",
        "question": "Wat kun je hier nog steeds herkennen van de oude functie?",
        "hint": "Kijk naar de vorm van het hele grasveld.",
        "choices": [
          {
            "text": "De langgerekte ovale vorm van het antieke racecircuit",
            "correct": true,
            "feedback": "Goed gezien. Van de tribunes zelf is weinig over, maar de vorm van de renbaan is nog duidelijk zichtbaar."
          },
          {
            "text": "De originele stenen tribunes, deels bewaard",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Restanten van de keizerlijke loge, nog rechtop",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Bocca della Verità",
        "place": "Bocca della Verità",
        "coordinates": {
          "lat": 41.88816,
          "lng": 12.48178
        },
        "assignment": "Kijk rustig rond bij Bocca della Verità en zoek het detail dat deze plek typisch maakt voor Rome.",
        "question": "Wat gebeurt er volgens de legende als een leugenaar zijn hand in de mond van dit marmeren masker steekt?",
        "hint": "Zoek het masker in de portiek van Santa Maria in Cosmedin.",
        "choices": [
          {
            "text": "Zijn hand wordt eraf gebeten",
            "correct": true,
            "feedback": "Goed gezien. Een populaire middeleeuwse legende, ooit gebruikt om verdachten te \"testen\"."
          },
          {
            "text": "Zijn hand verandert in steen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Hij moet een boetedoening aan de kerk betalen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Campo de' Fiori",
        "place": "Campo de' Fiori",
        "coordinates": {
          "lat": 41.89556,
          "lng": 12.47219
        },
        "assignment": "Kijk rustig rond bij Campo de' Fiori en zoek het detail dat deze plek typisch maakt voor Rome.",
        "question": "Wiens standbeeld staat hier midden op het plein, en waarom?",
        "hint": "Kijk naar het beeld met de kap over het hoofd.",
        "choices": [
          {
            "text": "Giordano Bruno, hier levend verbrand voor ketterij in 1600",
            "correct": true,
            "feedback": "Goed gezien. Het beeld kijkt bewust in de richting van het Vaticaan."
          },
          {
            "text": "Julius Caesar, op de plek waar hij ooit sprak",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een onbekende monnik, symbool van de marktzegen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Piazza Navona",
        "place": "Piazza Navona",
        "coordinates": {
          "lat": 41.89916,
          "lng": 12.47308
        },
        "assignment": "Neem even de tijd om de randen van Piazza Navona te bekijken: gevels, namen, beelden en dagelijks leven.",
        "question": "Bij de Vierstromenfontein: welke figuur houdt zijn hand voor zijn gezicht, en volgens de legende waarom?",
        "hint": "Kijk naar het standbeeld gericht richting de kerk.",
        "choices": [
          {
            "text": "De Nijl, omdat zijn bron toen nog onbekend was",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De Rio de la Plata, uit angst voor instortende bouwsteigers",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De Rio de la Plata, omdat hij niet naar Borromini's kerkgevel wilde kijken",
            "correct": true,
            "feedback": "Goed gezien. Leuk verhaal, al klopt de tijdlijn niet helemaal - de fontein was er eerder dan de gevel."
          }
        ]
      },
      {
        "title": "Ga naar Pantheon",
        "place": "Pantheon",
        "coordinates": {
          "lat": 41.89861,
          "lng": 12.47687
        },
        "assignment": "Kijk rustig rond bij Pantheon en zoek het detail dat deze plek typisch maakt voor Rome.",
        "question": "Waarom is de vloer een beetje bol en heeft die kleine gaatjes?",
        "hint": "Kijk omhoog naar het gat in de koepel (oculus).",
        "choices": [
          {
            "text": "Voor de afwatering, want als het regent, regent het naar binnen",
            "correct": true,
            "feedback": "Goed gezien. De oculus is de enige lichtbron en heeft geen glas, dus regen komt gewoon naar binnen."
          },
          {
            "text": "Om de akoestiek van de ruimte te verbeteren",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Vanwege verzakking van het gebouw door de eeuwen heen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Trevifontein",
        "place": "Trevifontein",
        "coordinates": {
          "lat": 41.90093,
          "lng": 12.48331
        },
        "assignment": "Kijk rustig rond bij Trevifontein en zoek het detail dat deze plek typisch maakt voor Rome.",
        "question": "Hoe moet je je muntje precies gooien voor geluk?",
        "hint": "Let op hoe andere toeristen het doen.",
        "choices": [
          {
            "text": "Met beide handen tegelijk, oog in oog met het beeld",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Met je rechterhand over je linkerschouder, met je rug naar de fontein",
            "correct": true,
            "feedback": "Goed gezien. Zo gooi je volgens de traditie een munt om ooit terug te keren naar Rome."
          },
          {
            "text": "Met je linkerhand, terwijl je een wens hardop uitspreekt",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Spaanse Trappen",
        "place": "Spaanse Trappen",
        "coordinates": {
          "lat": 41.90599,
          "lng": 12.48278
        },
        "assignment": "Kijk rustig rond bij Spaanse Trappen en zoek het detail dat deze plek typisch maakt voor Rome.",
        "question": "Hoeveel treden moet je op naar de kerk boven?",
        "hint": "Gewoon tellen tijdens het beklimmen.",
        "choices": [
          {
            "text": "100",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "135",
            "correct": true,
            "feedback": "Goed gezien. 135 treden naar de Trinità dei Monti-kerk."
          },
          {
            "text": "150",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Castel Sant'Angelo",
        "place": "Castel Sant'Angelo",
        "coordinates": {
          "lat": 41.90306,
          "lng": 12.46628
        },
        "assignment": "Kijk rustig rond bij Castel Sant'Angelo en zoek het detail dat deze plek typisch maakt voor Rome.",
        "question": "Welke geheime verbinding loopt hiervandaan naar het Vaticaan?",
        "hint": "Kijk naar de verhoogde, overdekte gang bovenop de muur.",
        "choices": [
          {
            "text": "De Passetto di Borgo, een vluchtroute voor de paus",
            "correct": true,
            "feedback": "Goed gezien. Meerdere pausen zijn via deze verhoogde gang gevlucht tijdens belegeringen."
          },
          {
            "text": "Een ondergrondse catacombe die rechtstreeks naar de Sixtijnse Kapel leidt",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een tunnel onder de Tiber door",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Sint-Pietersplein",
        "place": "Sint-Pietersplein",
        "coordinates": {
          "lat": 41.90217,
          "lng": 12.45731
        },
        "assignment": "Neem even de tijd om de randen van Sint-Pietersplein te bekijken: gevels, namen, beelden en dagelijks leven.",
        "question": "Vanaf welke plek lijkt de zuilengalerij plotseling nog maar één rij zuilen?",
        "hint": "Zoek de ronde stenen schijf in het plaveisel tussen de fontein en het obelisk.",
        "choices": [
          {
            "text": "Vanaf de ronde stenen schijf tussen fontein en obelisk",
            "correct": true,
            "feedback": "Goed gezien. Bernini's colonnade is zo ontworpen dat vanaf dat exacte punt vier rijen zuilen optisch samenvallen tot één."
          },
          {
            "text": "Vanaf de trappen van de basiliek zelf",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Vanaf het balkon waar de paus verschijnt",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "amsterdam",
    "city": "Amsterdam",
    "title": "Amsterdam: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "128 min",
    "distance": "3,8 km",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Amsterdam met 6 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Anne Frank Huis",
        "place": "Anne Frank Huis",
        "coordinates": {
          "lat": 52.37522,
          "lng": 4.88398
        },
        "assignment": "Kijk rustig rond bij Anne Frank Huis en zoek het detail dat deze plek typisch maakt voor Amsterdam.",
        "question": "Wat verbergt de toegang tot het Achterhuis?",
        "hint": "Kijk in de kantoorruimte op de eerste verdieping.",
        "choices": [
          {
            "text": "Een draaibare boekenkast",
            "correct": true,
            "feedback": "Goed gezien. De boekenkast draait om de deur naar de schuilplek aan het zicht te onttrekken."
          },
          {
            "text": "Een losse vloerplank met trapgat",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een dubbele wand achter een schilderij",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Westerkerk",
        "place": "Westerkerk",
        "coordinates": {
          "lat": 52.37447,
          "lng": 4.88398
        },
        "assignment": "Kijk naar de gevel, de hoogte en de details rond Westerkerk voordat je antwoord geeft.",
        "question": "Wat staat er bovenop de Westertoren, en waar verwijst het naar?",
        "hint": "Kijk helemaal boven in de spits.",
        "choices": [
          {
            "text": "De blauw-rood-gouden Keizerskroon van Maximiliaan van Oostenrijk",
            "correct": true,
            "feedback": "Goed gezien. Maximiliaan schonk de stad het recht zijn kroon als symbool te gebruiken."
          },
          {
            "text": "Een gouden haan als symbool van waakzaamheid",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Het stadswapen van Amsterdam in verguld brons",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Dam / Koninklijk Paleis",
        "place": "Dam / Koninklijk Paleis",
        "coordinates": {
          "lat": 52.37316,
          "lng": 4.89133
        },
        "assignment": "Loop langs de buitenkant van Dam / Koninklijk Paleis en zoek details die macht, rijkdom of verdediging laten zien.",
        "question": "Waarop staat dit hele gebouw eigenlijk, gezien de drassige grond?",
        "hint": "Dit kun je navragen bij een gids of op het infobord ter plekke.",
        "choices": [
          {
            "text": "Op een fundering van massief graniet, aangevoerd uit Scandinavië",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Op 13.659 houten heipalen",
            "correct": true,
            "feedback": "Goed gezien. Een bekend Amsterdams gezegde luidt zelfs dat de halve stad \"op palen\" staat."
          },
          {
            "text": "Op een betonnen plaat die pas in de 20e eeuw is aangelegd",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Bloemenmarkt",
        "place": "Bloemenmarkt",
        "coordinates": {
          "lat": 52.36695,
          "lng": 4.89374
        },
        "assignment": "Neem even de tijd om de randen van Bloemenmarkt te bekijken: gevels, namen, beelden en dagelijks leven.",
        "question": "Wat is hier uniek vergeleken met andere bloemenmarkten?",
        "hint": "Kijk naar hoe de kraampjes zijn opgesteld boven het water.",
        "choices": [
          {
            "text": "Het is 's werelds enige drijvende bloemenmarkt",
            "correct": true,
            "feedback": "Goed gezien. De kraampjes staan letterlijk op woonboten in de gracht."
          },
          {
            "text": "Het is de grootste bloemenmarkt van Europa",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Alle kramen zijn hier verplicht familiebedrijven",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Magere Brug",
        "place": "Magere Brug",
        "coordinates": {
          "lat": 52.36355,
          "lng": 4.90219
        },
        "assignment": "Loop een stukje over of langs Magere Brug en kijk hoe water, stad en verkeer hier samenkomen.",
        "question": "Wat gebeurt er 's avonds met deze brug?",
        "hint": "Kom terug na zonsondergang.",
        "choices": [
          {
            "text": "Duizenden kleine lampjes langs de contouren gaan aan",
            "correct": true,
            "feedback": "Goed gezien. De verlichting maakt de Magere Brug 's avonds een van de meest gefotografeerde plekken van de stad."
          },
          {
            "text": "De brug draait automatisch open voor het scheepvaartverkeer",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Er klinkt een carillon vanaf de brugwachtershuisjes",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Rijksmuseum",
        "place": "Rijksmuseum",
        "coordinates": {
          "lat": 52.35999,
          "lng": 4.88522
        },
        "assignment": "Zoek bij Rijksmuseum naar sporen van de oorspronkelijke functie en let op hoe bezoekers zich door de ruimte bewegen.",
        "question": "Hoe kun je dwars door het museum heen fietsen zonder entree te betalen?",
        "hint": "Zoek de doorgang aan de voorkant.",
        "choices": [
          {
            "text": "Via de Rijksmuseumpassage, een openbare tunnel dwars door het gebouw",
            "correct": true,
            "feedback": "Goed gezien. De passage is een openbare doorgang, ooit zelfs bedreigd met sluiting vanwege verkeersdrukte."
          },
          {
            "text": "Via de ondergrondse fietsenstalling die uitkomt bij het Museumplein",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Via een poort die alleen 's nachts open is",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "berlin",
    "city": "Berlijn",
    "title": "Berlijn: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "200 min",
    "distance": "11,0 km",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Berlijn met 10 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Siegessäule (Tiergarten)",
        "place": "Siegessäule (Tiergarten)",
        "coordinates": {
          "lat": 52.51449,
          "lng": 13.35012
        },
        "assignment": "Kijk rustig rond bij Siegessäule (Tiergarten) en zoek het detail dat deze plek typisch maakt voor Berlijn.",
        "question": "Wat staat er bovenop deze zuil, en welke bijnaam heeft het beeld?",
        "hint": "Kijk helemaal omhoog, het beeld is verguld.",
        "choices": [
          {
            "text": "Een vergulde engel, bekend als \"Goldelse\"",
            "correct": true,
            "feedback": "Goed gezien. De vergulde overwinningsengel is al sinds 1873 een herkenningspunt van de stad."
          },
          {
            "text": "Een Pruisische adelaar, bekend als \"Der Alte Fritz\"",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Keizer Wilhelm I te paard",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Reichstag",
        "place": "Reichstag",
        "coordinates": {
          "lat": 52.51862,
          "lng": 13.37619
        },
        "assignment": "Kijk rustig rond bij Reichstag en zoek het detail dat deze plek typisch maakt voor Berlijn.",
        "question": "Waarom kun je door de glazen koepel recht naar beneden kijken, de vergaderzaal in?",
        "hint": "Loop de spiraalvormige oprit in de koepel omhoog.",
        "choices": [
          {
            "text": "Puur voor het uitzicht over de stad",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Symbool van transparantie: het volk staat boven de politiek",
            "correct": true,
            "feedback": "Goed gezien. De koepel is een bewust ontworpen statement over open bestuur na de Duitse hereniging."
          },
          {
            "text": "Om natuurlijke ventilatie in de zaal te garanderen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Brandenburger Tor",
        "place": "Brandenburger Tor",
        "coordinates": {
          "lat": 52.51627,
          "lng": 13.3777
        },
        "assignment": "Kijk rustig rond bij Brandenburger Tor en zoek het detail dat deze plek typisch maakt voor Berlijn.",
        "question": "Wie ontvoerde het beeld bovenop de poort ooit naar Parijs?",
        "hint": "Kijk naar de Quadriga (godin in wagen met vier paarden) bovenop.",
        "choices": [
          {
            "text": "Napoleon, in 1806",
            "correct": true,
            "feedback": "Goed gezien. Pas na Napoleons nederlaag keerde het beeld terug naar Berlijn."
          },
          {
            "text": "Keizer Wilhelm II, als geschenk aan Frankrijk",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De nazi's, tijdens de bezetting van Parijs",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Holocaust-Mahnmal",
        "place": "Holocaust-Mahnmal",
        "coordinates": {
          "lat": 52.51395,
          "lng": 13.37869
        },
        "assignment": "Kijk rustig rond bij Holocaust-Mahnmal en zoek het detail dat deze plek typisch maakt voor Berlijn.",
        "question": "Hoeveel betonnen zuilen (stelae) telt dit monument, en wat valt op aan de grond?",
        "hint": "Loop tussen de zuilen door, richting het midden.",
        "choices": [
          {
            "text": "2.711 zuilen, en de grond golft omhoog en omlaag",
            "correct": true,
            "feedback": "Goed gezien. Hoe verder je het veld in loopt, hoe hoger de zuilen worden en hoe dieper de grond zakt."
          },
          {
            "text": "1.933 zuilen, verwijzend naar het jaar 1933",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "6.000.000 losse stenen, verspreid over het hele veld",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Gendarmenmarkt",
        "place": "Gendarmenmarkt",
        "coordinates": {
          "lat": 52.5138,
          "lng": 13.39267
        },
        "assignment": "Neem even de tijd om de randen van Gendarmenmarkt te bekijken: gevels, namen, beelden en dagelijks leven.",
        "question": "De twee koepeltorens lijken identiek. Wat is het verschil?",
        "hint": "Vergelijk de Deutscher Dom en de Französischer Dom.",
        "choices": [
          {
            "text": "Ze zijn in werkelijkheid wel exact identiek gebouwd",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Ondanks het gespiegelde uiterlijk verschillen bouwjaar, functie en details",
            "correct": true,
            "feedback": "Goed gezien. Ze zijn bewust als \"tweeling\" ontworpen, maar zeker geen exacte kopie van elkaar."
          },
          {
            "text": "Eén toren is een naoorlogse betonnen kopie",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Checkpoint Charlie",
        "place": "Checkpoint Charlie",
        "coordinates": {
          "lat": 52.50744,
          "lng": 13.39037
        },
        "assignment": "Kijk rustig rond bij Checkpoint Charlie en zoek het detail dat deze plek typisch maakt voor Berlijn.",
        "question": "Wat staat er op het bekende bordje, en in hoeveel talen?",
        "hint": "Kijk bij de replica-grenspost.",
        "choices": [
          {
            "text": "\"You are leaving the American sector\", in vier talen",
            "correct": true,
            "feedback": "Goed gezien. Het bordje staat in het Engels, Russisch, Frans en Duits."
          },
          {
            "text": "\"Halt! Grenzgebiet\", alleen in het Duits",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "\"Welcome to West Berlin\", in twee talen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Pergamonmuseum (Museumsinsel)",
        "place": "Pergamonmuseum (Museumsinsel)",
        "coordinates": {
          "lat": 52.52118,
          "lng": 13.3969
        },
        "assignment": "Zoek bij Pergamonmuseum (Museumsinsel) naar sporen van de oorspronkelijke functie en let op hoe bezoekers zich door de ruimte bewegen.",
        "question": "Welke complete antieke poort staat hier binnen levensgroot opgebouwd?",
        "hint": "Loop de hoofdzaal in.",
        "choices": [
          {
            "text": "De Ishtarpoort van Babylon",
            "correct": true,
            "feedback": "Goed gezien. De poort is stukje bij beetje gereconstrueerd uit originele Babylonische tegels."
          },
          {
            "text": "De Poort van Damascus",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De Triomfboog van Palmyra",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Berliner Dom",
        "place": "Berliner Dom",
        "coordinates": {
          "lat": 52.51917,
          "lng": 13.401
        },
        "assignment": "Kijk naar de gevel, de hoogte en de details rond Berliner Dom voordat je antwoord geeft.",
        "question": "Wat vind je in de crypte onder de kathedraal?",
        "hint": "Ga de trap af onder de hoofdzaal.",
        "choices": [
          {
            "text": "Tientallen sarcofagen van de Hohenzollern-familie",
            "correct": true,
            "feedback": "Goed gezien. Dit is een van de grootste vorstelijke grafkelders van Europa."
          },
          {
            "text": "De restanten van een Romeins fort",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een verzameling middeleeuwse reliekschrijnen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Fernsehturm",
        "place": "Fernsehturm",
        "coordinates": {
          "lat": 52.52082,
          "lng": 13.40942
        },
        "assignment": "Kijk rustig rond bij Fernsehturm en zoek het detail dat deze plek typisch maakt voor Berlijn.",
        "question": "Wanneer verschijnt er een kruisvorm op de metalen bol, en welke bijnaam kreeg dat?",
        "hint": "Kijk bij zonnig weer naar de bol.",
        "choices": [
          {
            "text": "'s Nachts door de verlichting, bekend als \"de Sterrenbol\"",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Bij zonnig weer door reflectie, bekend als \"de Wraak van de Paus\"",
            "correct": true,
            "feedback": "Goed gezien. Tot ergernis van het atheïstische DDR-regime vormde het zonlicht een kruis op de bol."
          },
          {
            "text": "Alleen met kerst, bekend als \"het Kerstkruis\"",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar East Side Gallery",
        "place": "East Side Gallery",
        "coordinates": {
          "lat": 52.505,
          "lng": 13.4397
        },
        "assignment": "Kijk rustig rond bij East Side Gallery en zoek het detail dat deze plek typisch maakt voor Berlijn.",
        "question": "Welk beroemd tafereel toont twee staatsmannen die elkaar zoenen?",
        "hint": "Zoek het langste overgebleven stuk Berlijnse Muur.",
        "choices": [
          {
            "text": "De \"Bruderkuss\" tussen Brezjnev en Honecker",
            "correct": true,
            "feedback": "Goed gezien. Dit muurschilderij is een van de meest gefotografeerde plekken van Berlijn."
          },
          {
            "text": "Een fictieve ontmoeting tussen Kennedy en Chroesjtsjov",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een zoen tussen Oost- en West-Duitse grenswachten in 1989",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "lisbon",
    "city": "Lissabon",
    "title": "Lissabon: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "128 min",
    "distance": "4,2 km wandelen + tram/trein",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Lissabon met 6 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Torre de Belém",
        "place": "Torre de Belém",
        "coordinates": {
          "lat": 38.69158,
          "lng": -9.216
        },
        "assignment": "Kijk rustig rond bij Torre de Belém en zoek het detail dat deze plek typisch maakt voor Lissabon.",
        "question": "Welk ongewoon dier staat er in steen uitgehouwen op de toren?",
        "hint": "Kijk aan de buitenkant, onderaan.",
        "choices": [
          {
            "text": "Een olifant",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een neushoorn",
            "correct": true,
            "feedback": "Goed gezien. Een van de vroegste afbeeldingen van een neushoorn in de Europese kunst."
          },
          {
            "text": "Een krokodil",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Mosteiro dos Jerónimos",
        "place": "Mosteiro dos Jerónimos",
        "coordinates": {
          "lat": 38.6979,
          "lng": -9.2068
        },
        "assignment": "Kijk rustig rond bij Mosteiro dos Jerónimos en zoek het detail dat deze plek typisch maakt voor Lissabon.",
        "question": "Wiens graf staat vlak bij de ingang van de kerk?",
        "hint": "Kijk direct na binnenkomst, links of rechts.",
        "choices": [
          {
            "text": "Het graf van koning Manuel I",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Het graf van ontdekkingsreiziger Vasco da Gama",
            "correct": true,
            "feedback": "Goed gezien. Het klooster werd mede gefinancierd met belasting op de specerijenhandel die zijn reis opleverde."
          },
          {
            "text": "Het graf van de architect van het klooster",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Praça do Comércio",
        "place": "Praça do Comércio",
        "coordinates": {
          "lat": 38.7075,
          "lng": -9.1364
        },
        "assignment": "Kijk rustig rond bij Praça do Comércio en zoek het detail dat deze plek typisch maakt voor Lissabon.",
        "question": "Waarom staat hier een standbeeld van een koning te paard?",
        "hint": "Kijk naar het beeld met zijn rug naar de rivier.",
        "choices": [
          {
            "text": "Koning José I; hier stond het koninklijk paleis tot de aardbeving van 1755",
            "correct": true,
            "feedback": "Goed gezien. Het plein heette vroeger zelfs Terreiro do Paço, \"paleisplein\"."
          },
          {
            "text": "Koning Manuel I, ter ere van de ontdekkingsreizen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Het is geen koning maar een veldheer uit de onafhankelijkheidsoorlog",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Elevador de Santa Justa",
        "place": "Elevador de Santa Justa",
        "coordinates": {
          "lat": 38.71214,
          "lng": -9.13939
        },
        "assignment": "Kijk rustig rond bij Elevador de Santa Justa en zoek het detail dat deze plek typisch maakt voor Lissabon.",
        "question": "Wie ontwierp deze ijzeren lift, en van wie leerde hij het vak?",
        "hint": "Kijk naar de stijl - lijkt die je bekend voor?",
        "choices": [
          {
            "text": "Raoul Mesnier du Ponsard, een leerling van Gustave Eiffel",
            "correct": true,
            "feedback": "Goed gezien. De ijzerconstructie doet niet toevallig aan de Eiffeltoren denken."
          },
          {
            "text": "Gustave Eiffel zelf, als bijbaantje in Portugal",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een lokale Portugese ingenieur zonder buitenlandse invloed",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Tram 28",
        "place": "Tram 28",
        "coordinates": {
          "lat": 38.7169,
          "lng": -9.1367
        },
        "assignment": "Kijk rustig rond bij Tram 28 en zoek het detail dat deze plek typisch maakt voor Lissabon.",
        "question": "Wat zie je vaak aan de zijkanten van de tram in de smalle straatjes?",
        "hint": "Kijk naar de tram terwijl die een bocht neemt.",
        "choices": [
          {
            "text": "Schuurplekken/krassen van het rakelings langsschrapen",
            "correct": true,
            "feedback": "Goed gezien. De straten zijn zo smal dat de tram soms letterlijk de gevels raakt."
          },
          {
            "text": "Reclame-stickers van lokale winkels",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Kleine spiegels om fietsers te zien aankomen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Castelo de São Jorge",
        "place": "Castelo de São Jorge",
        "coordinates": {
          "lat": 38.7139,
          "lng": -9.1335
        },
        "assignment": "Kijk rustig rond bij Castelo de São Jorge en zoek het detail dat deze plek typisch maakt voor Lissabon.",
        "question": "Welk dier loopt er vrij rond op het kasteelterrein?",
        "hint": "Kijk op de binnenplaatsen.",
        "choices": [
          {
            "text": "Pauwen",
            "correct": true,
            "feedback": "Goed gezien. De pauwen lopen hier al decennia vrij rond tussen de bezoekers."
          },
          {
            "text": "Wilde geiten",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Ganzen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "budapest",
    "city": "Boedapest",
    "title": "Boedapest: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "200 min",
    "distance": "7,6 km wandelen + metro/tram",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Boedapest met 10 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Heldenplein",
        "place": "Heldenplein",
        "coordinates": {
          "lat": 47.5149,
          "lng": 19.0778
        },
        "assignment": "Neem even de tijd om de randen van Heldenplein te bekijken: gevels, namen, beelden en dagelijks leven.",
        "question": "Wie staat er boven op de hoge zuil in het midden?",
        "hint": "Kijk helemaal omhoog.",
        "choices": [
          {
            "text": "Aartsengel Gabriël",
            "correct": true,
            "feedback": "Goed gezien. Onderaan de zuil staan de zeven stamhoofden, met Gabriël erboven."
          },
          {
            "text": "Koning Stefanus I",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De Hongaarse vrijheidsgodin",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Széchenyi-bad",
        "place": "Széchenyi-bad",
        "coordinates": {
          "lat": 47.5189,
          "lng": 19.0827
        },
        "assignment": "Kijk rustig rond bij Széchenyi-bad en zoek het detail dat deze plek typisch maakt voor Boedapest.",
        "question": "Wat doen veel bezoekers hier opvallend, terwijl ze in het buitenbad hangen?",
        "hint": "Kijk naar de kleine drijvende tafeltjes.",
        "choices": [
          {
            "text": "Schaken, midden in het warme buitenwater",
            "correct": true,
            "feedback": "Goed gezien. Het schaken in het buitenbad is een van de bekendste beelden van dit thermaalbad."
          },
          {
            "text": "Kaarten, op drijvende speeltafels",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Lezen, met waterdichte boeken",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Grote Synagoge (Dohány utca)",
        "place": "Grote Synagoge (Dohány utca)",
        "coordinates": {
          "lat": 47.4959,
          "lng": 19.0606
        },
        "assignment": "Kijk rustig rond bij Grote Synagoge (Dohány utca) en zoek het detail dat deze plek typisch maakt voor Boedapest.",
        "question": "Wat hangt er in de tuin achter de synagoge, met namen erop?",
        "hint": "Zoek de metalen \"boom\" in de tuin.",
        "choices": [
          {
            "text": "De Boom des Levens, met namen van slachtoffers op de blaadjes",
            "correct": true,
            "feedback": "Goed gezien. Dit is de grootste synagoge van Europa, met een indrukwekkend herdenkingsmonument in de tuin."
          },
          {
            "text": "Een gedenkmuur met alleen Hebreeuwse tekst, zonder namen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een verzameling grafstenen uit de 18e eeuw",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Grote Markthal",
        "place": "Grote Markthal",
        "coordinates": {
          "lat": 47.487,
          "lng": 19.0583
        },
        "assignment": "Neem even de tijd om de randen van Grote Markthal te bekijken: gevels, namen, beelden en dagelijks leven.",
        "question": "Wat valt op aan het dak van dit gebouw?",
        "hint": "Kijk omhoog voor je naar binnen gaat.",
        "choices": [
          {
            "text": "Het kleurrijke, glanzende Zsolnay-tegeldak",
            "correct": true,
            "feedback": "Goed gezien. De felgekleurde Zsolnay-tegels zijn typisch Hongaarse art nouveau."
          },
          {
            "text": "Een volledig glazen koepeldak",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een plat dak met een verborgen daktuin",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Gellértberg / Citadella",
        "place": "Gellértberg / Citadella",
        "coordinates": {
          "lat": 47.4867,
          "lng": 19.045
        },
        "assignment": "Kijk rustig rond bij Gellértberg / Citadella en zoek het detail dat deze plek typisch maakt voor Boedapest.",
        "question": "Welk groot beeld is al van ver in de stad te zien, boven op de heuvel?",
        "hint": "Kijk omhoog vanaf de Donau-oevers.",
        "choices": [
          {
            "text": "Het Vrijheidsbeeld (Liberty Statue), met de palmtak",
            "correct": true,
            "feedback": "Goed gezien. Het beeld stond oorspronkelijk symbool voor de Sovjet-bevrijding, later herduid als algemeen vrijheidssymbool."
          },
          {
            "text": "Een reusachtig standbeeld van Sint Stefanus",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een kopie van het Vrijheidsbeeld van New York",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Burcht van Buda",
        "place": "Burcht van Buda",
        "coordinates": {
          "lat": 47.4962,
          "lng": 19.0396
        },
        "assignment": "Loop langs de buitenkant van Burcht van Buda en zoek details die macht, rijkdom of verdediging laten zien.",
        "question": "Waarmee kun je de heuvel op naar het kasteel, als alternatief voor de trap?",
        "hint": "Zoek de kleine, oude kabelbaan bij de Kettingbrug.",
        "choices": [
          {
            "text": "De Budavári Sikló, een van de oudste kabelspoorbanen van Europa",
            "correct": true,
            "feedback": "Goed gezien. Deze funicular dateert al uit 1870."
          },
          {
            "text": "Een openbare buitenlift uit de jaren '70",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een tandradbaan die alleen 's zomers rijdt",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Vissersbastion",
        "place": "Vissersbastion",
        "coordinates": {
          "lat": 47.502,
          "lng": 19.0348
        },
        "assignment": "Kijk rustig rond bij Vissersbastion en zoek het detail dat deze plek typisch maakt voor Boedapest.",
        "question": "Hoeveel torentjes telt dit bouwwerk, en waar staan ze symbool voor?",
        "hint": "Tel de torens vanaf het plein.",
        "choices": [
          {
            "text": "Zeven, voor de zeven Hongaarse stichtende stammen",
            "correct": true,
            "feedback": "Goed gezien. De torens verwijzen naar de zeven Magyaarse stammen die Hongarije stichtten."
          },
          {
            "text": "Tien, voor de tien Hongaarse koningen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Vier, voor de vier windrichtingen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Kettingbrug",
        "place": "Kettingbrug",
        "coordinates": {
          "lat": 47.4989,
          "lng": 19.0437
        },
        "assignment": "Loop een stukje over of langs Kettingbrug en kijk hoe water, stad en verkeer hier samenkomen.",
        "question": "Wat missen de stenen leeuwen bij de brug volgens de stadslegende?",
        "hint": "Kijk goed in hun bek.",
        "choices": [
          {
            "text": "Een tong",
            "correct": true,
            "feedback": "Goed gezien. Een fabeltje trouwens - ze hebben wel degelijk een tong, je ziet die van beneden af alleen niet goed."
          },
          {
            "text": "Een oog",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een klauw",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Schoenen aan de Donau",
        "place": "Schoenen aan de Donau",
        "coordinates": {
          "lat": 47.5038,
          "lng": 19.0449
        },
        "assignment": "Kijk rustig rond bij Schoenen aan de Donau en zoek het detail dat deze plek typisch maakt voor Boedapest.",
        "question": "Waarom staan hier tientallen ijzeren schoentjes langs de rivieroever?",
        "hint": "Kijk naar de oever zelf, niet naar een gebouw.",
        "choices": [
          {
            "text": "Ter nagedachtenis aan Joden die hier tijdens WOII werden doodgeschoten",
            "correct": true,
            "feedback": "Goed gezien. Slachtoffers moesten hun schoenen uittrekken voor ze in de Donau werden geschoten; dit sobere monument herdenkt hen."
          },
          {
            "text": "Ter ere van vissers die in de rivier zijn verdronken",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een kunstinstallatie over de schoenindustrie van Boedapest",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Parlementsgebouw",
        "place": "Parlementsgebouw",
        "coordinates": {
          "lat": 47.507,
          "lng": 19.0452
        },
        "assignment": "Kijk rustig rond bij Parlementsgebouw en zoek het detail dat deze plek typisch maakt voor Boedapest.",
        "question": "Waarom is dit gebouw precies 96 meter hoog?",
        "hint": "Kijk op een informatiebord bij het gebouw.",
        "choices": [
          {
            "text": "Verwijzing naar het jaar 896, de stichting van Hongarije",
            "correct": true,
            "feedback": "Goed gezien. Ook de Sint-Stefansbasiliek is precies even hoog, met dezelfde symboliek."
          },
          {
            "text": "Zodat het exact even hoog is als de Vissersbastion-torens",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Toeval, de architect wilde gewoon een rond getal",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "venice",
    "city": "Venetië",
    "title": "Venetië: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "128 min",
    "distance": "1,2 km wandelen + vaporetto",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Venetië met 6 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij San Marcoplein",
        "place": "San Marcoplein",
        "coordinates": {
          "lat": 45.43417,
          "lng": 12.33847
        },
        "assignment": "Neem even de tijd om de randen van San Marcoplein te bekijken: gevels, namen, beelden en dagelijks leven.",
        "question": "Wat is er bijzonder aan de campanile (klokkentoren) hier?",
        "hint": "Let op hoe \"oud\" hij er precies uitziet.",
        "choices": [
          {
            "text": "Hij is volledig van hout, verborgen achter een stenen gevel",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De originele toren stortte in 1902 in; dit is een reconstructie",
            "correct": true,
            "feedback": "Goed gezien. Wat je nu ziet is dus geen middeleeuws origineel, maar een vroeg 20e-eeuwse herbouw."
          },
          {
            "text": "Hij staat expres een halve meter scheef, net als in Pisa",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Basiliek San Marco",
        "place": "Basiliek San Marco",
        "coordinates": {
          "lat": 45.43456,
          "lng": 12.33971
        },
        "assignment": "Kijk naar de gevel, de hoogte en de details rond Basiliek San Marco voordat je antwoord geeft.",
        "question": "De vier bronzen paarden op het balkon - zijn dat de originelen?",
        "hint": "Kijk goed, dit zijn kopieën.",
        "choices": [
          {
            "text": "Ja, ze staan er al sinds de 13e eeuw onveranderd",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Nee, de echte staan binnen in het museum, uit de wind",
            "correct": true,
            "feedback": "Goed gezien. De originelen (geroofd uit Constantinopel) zijn te kwetsbaar voor buiten."
          },
          {
            "text": "Nee, de echte zijn verloren gegaan tijdens Napoleons plundering",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Dogenpaleis",
        "place": "Dogenpaleis",
        "coordinates": {
          "lat": 45.4337,
          "lng": 12.34039
        },
        "assignment": "Loop langs de buitenkant van Dogenpaleis en zoek details die macht, rijkdom of verdediging laten zien.",
        "question": "Waarom heet de kleine brug ernaast de \"Brug der Zuchten\"?",
        "hint": "Kijk door de kleine getraliede raampjes van de brug.",
        "choices": [
          {
            "text": "Gevangenen zagen hier voor het laatst Venetië, vandaar hun zucht",
            "correct": true,
            "feedback": "Goed gezien. De brug verbond het paleis met de gevangenis erachter."
          },
          {
            "text": "Verliefde stelletjes zouden hier hun liefde verzuchten",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De brug kraakt en \"zucht\" bij hoogwater",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Rialtobrug",
        "place": "Rialtobrug",
        "coordinates": {
          "lat": 45.43804,
          "lng": 12.33592
        },
        "assignment": "Loop een stukje over of langs Rialtobrug en kijk hoe water, stad en verkeer hier samenkomen.",
        "question": "Wat zit er verstopt in de brug zelf?",
        "hint": "Loop over de brug, niet er alleen onderdoor.",
        "choices": [
          {
            "text": "Winkeltjes aan weerszijden van het middenpad",
            "correct": true,
            "feedback": "Goed gezien. De brug is zo breed dat er een hele winkelstraat op past."
          },
          {
            "text": "Een kleine kapel in het midden",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een oude waterput voor scheepslieden",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Canal Grande",
        "place": "Canal Grande",
        "coordinates": {
          "lat": 45.4375,
          "lng": 12.3355
        },
        "assignment": "Kijk rustig rond bij Canal Grande en zoek het detail dat deze plek typisch maakt voor Venetië.",
        "question": "Waarom zwaaien gondeliers vaak met één hand tijdens het varen?",
        "hint": "Kijk hoe ze bochten nemen bij kruisingen.",
        "choices": [
          {
            "text": "Als groet naar toeristen voor de fooi",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Als waarschuwing naar ander verkeer bij blinde hoeken",
            "correct": true,
            "feedback": "Goed gezien. Er hangen geen verkeerslichten boven het water, dus dit is hun manier van communiceren."
          },
          {
            "text": "Om het evenwicht op de gondel te bewaren",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Burano",
        "place": "Burano",
        "coordinates": {
          "lat": 45.4855,
          "lng": 12.4169
        },
        "assignment": "Kijk rustig rond bij Burano en zoek het detail dat deze plek typisch maakt voor Venetië.",
        "question": "Waarom zijn de huisjes hier zo fel gekleurd?",
        "hint": "Kijk naar het uitzicht vanaf het water.",
        "choices": [
          {
            "text": "Zodat vissers hun eigen huis makkelijk herkenden door de mist",
            "correct": true,
            "feedback": "Goed gezien. Elke kleurencombinatie was oorspronkelijk aan één familie/huis gekoppeld."
          },
          {
            "text": "Verplicht door de doge om armoede te verbergen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Om toeristen te trekken sinds de jaren '60",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "barcelona",
    "city": "Barcelona",
    "title": "Barcelona: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "200 min",
    "distance": "9,5 km",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Barcelona met 10 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Park Güell",
        "place": "Park Güell",
        "coordinates": {
          "lat": 41.4145,
          "lng": 2.1527
        },
        "assignment": "Kijk rustig rond bij Park Güell en zoek het detail dat deze plek typisch maakt voor Barcelona.",
        "question": "Welk dier ligt er in mozaïek op de trap bij de ingang?",
        "hint": "Kijk naar het gekleurde beeldje halverwege de trap.",
        "choices": [
          {
            "text": "Een salamander/draak (\"El Drac\")",
            "correct": true,
            "feedback": "Goed gezien. Dit mozaïekdier is een van de meest gefotografeerde plekken van Barcelona."
          },
          {
            "text": "Een slang",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een kikker",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Sagrada Familia",
        "place": "Sagrada Familia",
        "coordinates": {
          "lat": 41.40363,
          "lng": 2.17436
        },
        "assignment": "Kijk naar de gevel, de hoogte en de details rond Sagrada Familia voordat je antwoord geeft.",
        "question": "De twee hoofdgevels zien er totaal anders uit. Welke is somber en hoekig, en waarom?",
        "hint": "Vergelijk de oostkant met de westkant.",
        "choices": [
          {
            "text": "De Passiegevel, opzettelijk kaal en hard om het lijden van Christus te tonen",
            "correct": true,
            "feedback": "Goed gezien. De Geboortegevel is juist rijk versierd door Gaudí zelf; de Passiegevel kwam later, in een compleet andere stijl."
          },
          {
            "text": "De Geboortegevel, sober gehouden uit geldgebrek tijdens de bouw",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De Gloriegevel, nog onvoltooid en daarom kaal",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Sagrada Familia (Passiegevel, extra)",
        "place": "Sagrada Familia (Passiegevel, extra)",
        "coordinates": {
          "lat": 41.4032,
          "lng": 2.1752
        },
        "assignment": "Kijk naar de gevel, de hoogte en de details rond Sagrada Familia (Passiegevel, extra) voordat je antwoord geeft.",
        "question": "Wat is bijzonder aan het getallenvierkant op de gevel?",
        "hint": "Zoek het vierkant met cijfers naast de ingang van de Passiegevel.",
        "choices": [
          {
            "text": "Elke rij, kolom en diagonaal telt op tot 33, de leeftijd van Christus bij zijn dood",
            "correct": true,
            "feedback": "Goed gezien. Het is een \"magisch vierkant\", ontworpen door beeldhouwer Subirachs."
          },
          {
            "text": "De cijfers vormen samen het bouwjaar van de kerk",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Het is een kalender die de kerkelijke feestdagen aangeeft",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Casa Milà (La Pedrera)",
        "place": "Casa Milà (La Pedrera)",
        "coordinates": {
          "lat": 41.39539,
          "lng": 2.16196
        },
        "assignment": "Kijk rustig rond bij Casa Milà (La Pedrera) en zoek het detail dat deze plek typisch maakt voor Barcelona.",
        "question": "Wat valt op aan de gevel als je goed kijkt naar de lijnen?",
        "hint": "Sta op straatniveau en kijk langs de hele gevel.",
        "choices": [
          {
            "text": "Er zit geen enkele rechte lijn in",
            "correct": true,
            "feedback": "Goed gezien. Gaudí ontwierp de golvende, natuurlijke steengevel met opzet zonder rechte hoeken."
          },
          {
            "text": "Alle ramen hebben exact dezelfde vorm",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De gevel is symmetrisch in twee identieke helften",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Casa Batlló",
        "place": "Casa Batlló",
        "coordinates": {
          "lat": 41.39164,
          "lng": 2.16499
        },
        "assignment": "Kijk rustig rond bij Casa Batlló en zoek het detail dat deze plek typisch maakt voor Barcelona.",
        "question": "Waar verwijst de vorm van het dak en de schoorsteen naar?",
        "hint": "Kijk omhoog vanaf de straat.",
        "choices": [
          {
            "text": "De legende van Sint-Joris en de draak",
            "correct": true,
            "feedback": "Goed gezien. Het dak lijkt op de rug van een draak, de schoorsteen op een zwaard."
          },
          {
            "text": "Een golf in zee, ter ere van Gaudí's liefde voor de kust",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De vorm van een slapende reus",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Palau de la Música Catalana",
        "place": "Palau de la Música Catalana",
        "coordinates": {
          "lat": 41.3875,
          "lng": 2.1753
        },
        "assignment": "Kijk rustig rond bij Palau de la Música Catalana en zoek het detail dat deze plek typisch maakt voor Barcelona.",
        "question": "Wat zie je als je in de concertzaal omhoog kijkt?",
        "hint": "Kijk recht boven het podium.",
        "choices": [
          {
            "text": "Een omgekeerde koepel van glas-in-lood die de zon voorstelt",
            "correct": true,
            "feedback": "Goed gezien. Het glazen \"zonlicht\" is het beroemdste element van deze modernistische concertzaal."
          },
          {
            "text": "Een plafond volledig beschilderd met wolken",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een open dak dat bij mooi weer opengaat",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Plaça Nova (Barri Gòtic)",
        "place": "Plaça Nova (Barri Gòtic)",
        "coordinates": {
          "lat": 41.384,
          "lng": 2.1761
        },
        "assignment": "Kijk rustig rond bij Plaça Nova (Barri Gòtic) en zoek het detail dat deze plek typisch maakt voor Barcelona.",
        "question": "Wat staat hier nog overeind van de oorspronkelijke stadsmuur?",
        "hint": "Kijk naar de twee ronde torens naast de kathedraal.",
        "choices": [
          {
            "text": "Romeinse torens/muurresten van de oude stadspoort",
            "correct": true,
            "feedback": "Goed gezien. Barcelona (Barcino) was ooit een Romeinse stad, en deze torens horen bij de oude stadspoort."
          },
          {
            "text": "Een middeleeuwse waterput",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een fragment van het Moorse fort",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Barri Gòtic (brug in Carrer del Bisbe)",
        "place": "Barri Gòtic (brug in Carrer del Bisbe)",
        "coordinates": {
          "lat": 41.38379,
          "lng": 2.17664
        },
        "assignment": "Loop een stukje over of langs Barri Gòtic (brug in Carrer del Bisbe) en kijk hoe water, stad en verkeer hier samenkomen.",
        "question": "De brug oogt middeleeuws. Hoe oud is hij echt?",
        "hint": "Zoek een jaartal of inscriptie in de buurt.",
        "choices": [
          {
            "text": "Gebouwd in 1928, dus veel jonger dan hij lijkt",
            "correct": true,
            "feedback": "Goed gezien. De neogotische brug is een vroeg 20e-eeuwse toevoeging, ontworpen om oud te lijken."
          },
          {
            "text": "Echt middeleeuws, 14e eeuw",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Gebouwd door de Romeinen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar La Boqueria (markt aan La Rambla)",
        "place": "La Boqueria (markt aan La Rambla)",
        "coordinates": {
          "lat": 41.38174,
          "lng": 2.17162
        },
        "assignment": "Neem even de tijd om de randen van La Boqueria (markt aan La Rambla) te bekijken: gevels, namen, beelden en dagelijks leven.",
        "question": "Wat zie je in de vloer direct bij de hoofdingang?",
        "hint": "Kijk naar beneden voor je verder de markt in loopt.",
        "choices": [
          {
            "text": "Een groot rond mozaïek",
            "correct": true,
            "feedback": "Goed gezien. Het mozaïek markeert de hoofdentree van deze beroemde markthal."
          },
          {
            "text": "Een gedenkplaat voor de oprichter",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Restanten van een Romeinse vloer",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Montjuïc (Font Màgica)",
        "place": "Montjuïc (Font Màgica)",
        "coordinates": {
          "lat": 41.3712,
          "lng": 2.1517
        },
        "assignment": "Kijk rustig rond bij Montjuïc (Font Màgica) en zoek het detail dat deze plek typisch maakt voor Barcelona.",
        "question": "Wat gebeurt er 's avonds met deze fontein?",
        "hint": "Kom terug na zonsondergang, in het weekend.",
        "choices": [
          {
            "text": "Een licht- en muziekshow met dansende waterstralen",
            "correct": true,
            "feedback": "Goed gezien. De Font Màgica draait sinds de Wereldtentoonstelling van 1929 shows op muziek."
          },
          {
            "text": "De fontein wordt dan uitgezet voor onderhoud",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Ze verandert dan van kleur naar puur rood, als eerbetoon aan Catalonië",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "prague",
    "city": "Praag",
    "title": "Praag: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "200 min",
    "distance": "7,3 km",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Praag met 10 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Petřín-toren",
        "place": "Petřín-toren",
        "coordinates": {
          "lat": 50.0835,
          "lng": 14.3951
        },
        "assignment": "Kijk rustig rond bij Petřín-toren en zoek het detail dat deze plek typisch maakt voor Praag.",
        "question": "Waar lijkt deze toren sterk op, en waarom?",
        "hint": "Kijk naar de vorm, hoogte en het bouwjaar.",
        "choices": [
          {
            "text": "Een schaalmodel (1:5) van de Eiffeltoren, gebouwd in hetzelfde jaar als de Wereldtentoonstelling van Parijs",
            "correct": true,
            "feedback": "Goed gezien. De toren werd in 1891 gebouwd, na een bezoek van Tsjechische toeristen aan de Parijse Wereldtentoonstelling."
          },
          {
            "text": "De Big Ben, als eerbetoon aan Engelse toeristen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De Sint-Vitustoren, als kleinere kopie",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Praagse Burcht",
        "place": "Praagse Burcht",
        "coordinates": {
          "lat": 50.0911,
          "lng": 14.4016
        },
        "assignment": "Loop langs de buitenkant van Praagse Burcht en zoek details die macht, rijkdom of verdediging laten zien.",
        "question": "Wie ontwierp de uniformen van de kasteelwacht die je hier ziet?",
        "hint": "Let op tijdens de wisseling van de wacht om 12 uur 's middags.",
        "choices": [
          {
            "text": "Theodor Pištěk, een Oscarwinnaar voor kostuumontwerp",
            "correct": true,
            "feedback": "Goed gezien. Pištěk won een Oscar voor de kostuums in de film Amadeus."
          },
          {
            "text": "Karel Gott, de bekende Tsjechische zanger",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Alfons Mucha",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Sint-Vituskathedraal",
        "place": "Sint-Vituskathedraal",
        "coordinates": {
          "lat": 50.09088,
          "lng": 14.40055
        },
        "assignment": "Kijk naar de gevel, de hoogte en de details rond Sint-Vituskathedraal voordat je antwoord geeft.",
        "question": "Welk glas-in-loodraam is duidelijk anders van stijl dan de rest?",
        "hint": "Het is het derde raam vanaf de ingang.",
        "choices": [
          {
            "text": "Het raam ontworpen door Alfons Mucha, in Art Nouveau-stijl",
            "correct": true,
            "feedback": "Goed gezien. Mucha's felle kleuren en vloeiende figuren steken sterk af tegen de rest van de gotische ramen."
          },
          {
            "text": "Het raam met de Boheemse kroon",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Het raam met het wapen van Praag",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Gouden Straatje (Zlatá ulička)",
        "place": "Gouden Straatje (Zlatá ulička)",
        "coordinates": {
          "lat": 50.0918,
          "lng": 14.4046
        },
        "assignment": "Kijk rustig rond bij Gouden Straatje (Zlatá ulička) en zoek het detail dat deze plek typisch maakt voor Praag.",
        "question": "Welke beroemde schrijver woonde hier ooit?",
        "hint": "Kijk naar de huisnummers van de kleine gekleurde huisjes.",
        "choices": [
          {
            "text": "Franz Kafka",
            "correct": true,
            "feedback": "Goed gezien. Kafka woonde en werkte hier korte tijd op nummer 22."
          },
          {
            "text": "Milan Kundera",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Karel Čapek",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Karelsbrug",
        "place": "Karelsbrug",
        "coordinates": {
          "lat": 50.08648,
          "lng": 14.41143
        },
        "assignment": "Loop een stukje over of langs Karelsbrug en kijk hoe water, stad en verkeer hier samenkomen.",
        "question": "Welk van de 30 beelden is duidelijk lichter/glanzender dan de rest, en waarom?",
        "hint": "Het is het 8e beeld vanaf de Oude Stad-kant.",
        "choices": [
          {
            "text": "Johannes van Nepomuk, doordat mensen hem al eeuwen aanraken voor geluk",
            "correct": true,
            "feedback": "Goed gezien. De sokkel is op die plek gepolijst door talloze handen."
          },
          {
            "text": "De Kruisiging, door dagelijkse reiniging vanwege religieuze diensten",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De Wrede Turk, door zonlicht dat er direct op valt",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Oudestadsplein - Jan Hus-monument",
        "place": "Oudestadsplein - Jan Hus-monument",
        "coordinates": {
          "lat": 50.08745,
          "lng": 14.42116
        },
        "assignment": "Neem even de tijd om de randen van Oudestadsplein - Jan Hus-monument te bekijken: gevels, namen, beelden en dagelijks leven.",
        "question": "Op welke exacte symbolische datum werd dit standbeeld onthuld?",
        "hint": "Zoek een jaartal/datum op de sokkel.",
        "choices": [
          {
            "text": "Precies 500 jaar na de verbranding van Jan Hus, op 6 juli 1915",
            "correct": true,
            "feedback": "Goed gezien. Hus werd in 1415 als ketter verbrand; het monument werd exact een halve eeuw eerder gepland dan onthuld."
          },
          {
            "text": "Op de honderdste verjaardag van de Tsjechische onafhankelijkheid",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Op de dag dat de astronomische klok 500 jaar bestond",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Astronomische Klok",
        "place": "Astronomische Klok",
        "coordinates": {
          "lat": 50.08702,
          "lng": 14.42068
        },
        "assignment": "Kijk rustig rond bij Astronomische Klok en zoek het detail dat deze plek typisch maakt voor Praag.",
        "question": "Welke figuur luidt elk heel uur de klok?",
        "hint": "Kijk naar de figuren direct naast de wijzerplaat.",
        "choices": [
          {
            "text": "Het skelet dat de Dood voorstelt",
            "correct": true,
            "feedback": "Goed gezien. De Dood trekt aan een koord voordat de apostelenparade begint."
          },
          {
            "text": "De Turk",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een van de twaalf apostelen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Joodse Wijk (Josefov) - Oude Joodse Begraafplaats",
        "place": "Joodse Wijk (Josefov) - Oude Joodse Begraafplaats",
        "coordinates": {
          "lat": 50.0899,
          "lng": 14.417
        },
        "assignment": "Kijk rustig rond bij Joodse Wijk (Josefov) - Oude Joodse Begraafplaats en zoek het detail dat deze plek typisch maakt voor Praag.",
        "question": "Waarom liggen de grafstenen hier zo dicht op elkaar en scheef?",
        "hint": "Kijk naar hoeveel stenen er op een klein oppervlak staan.",
        "choices": [
          {
            "text": "Omdat er tot wel 12 lagen graven boven elkaar liggen, door ruimtegebrek",
            "correct": true,
            "feedback": "Goed gezien. Joden mochten eeuwenlang niet buiten dit kleine gebied begraven worden, dus stapelden de lagen zich op."
          },
          {
            "text": "Omdat de grond hier verzakt is door de eeuwen heen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Om esthetische redenen, als kunstzinnige opstelling",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Dansend Huis (Tančící dům)",
        "place": "Dansend Huis (Tančící dům)",
        "coordinates": {
          "lat": 50.07554,
          "lng": 14.4142
        },
        "assignment": "Kijk rustig rond bij Dansend Huis (Tančící dům) en zoek het detail dat deze plek typisch maakt voor Praag.",
        "question": "Welke bijnaam kreeg dit gebouw, en waarom?",
        "hint": "Kijk naar de vorm van de twee torens.",
        "choices": [
          {
            "text": "\"Fred en Ginger\", omdat het twee dansende figuren lijkt te tonen",
            "correct": true,
            "feedback": "Goed gezien. De vloeiende glazen toren en de stevige stenen toren samen doen denken aan een dansend paar."
          },
          {
            "text": "\"De Fles\", vanwege de ronde vorm",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "\"De Golf\", naar de rivier ernaast",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Vyšehrad",
        "place": "Vyšehrad",
        "coordinates": {
          "lat": 50.0644,
          "lng": 14.4177
        },
        "assignment": "Kijk rustig rond bij Vyšehrad en zoek het detail dat deze plek typisch maakt voor Praag.",
        "question": "Welke twee beroemde Tsjechen liggen hier begraven, op de nationale begraafplaats?",
        "hint": "Zoek de graven bij de Sint-Petrus-en-Pauluskerk.",
        "choices": [
          {
            "text": "Componist Antonín Dvořák en schilder Alfons Mucha",
            "correct": true,
            "feedback": "Goed gezien. Vyšehrad geldt als de legendarische bakermat van Praag en herbergt het \"Slavín\", het ereperk van de natie."
          },
          {
            "text": "Karel IV en Jan Hus",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Franz Kafka en Milan Kundera",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "munich",
    "city": "München",
    "title": "München: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "200 min",
    "distance": "7,8 km wandelen + U-Bahn/tram",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door München met 10 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Allianz Arena",
        "place": "Allianz Arena",
        "coordinates": {
          "lat": 48.2188,
          "lng": 11.6247
        },
        "assignment": "Kijk rustig rond bij Allianz Arena en zoek het detail dat deze plek typisch maakt voor München.",
        "question": "Wat gebeurt er met de buitenkant van het stadion, afhankelijk van de wedstrijd?",
        "hint": "Kijk naar de gevel op wedstrijddagen.",
        "choices": [
          {
            "text": "De gevel verandert van kleur, bijvoorbeeld rood voor Bayern of blauw voor 1860 München",
            "correct": true,
            "feedback": "Goed gezien. De duizenden opblaasbare panelen kunnen per wedstrijd van kleur wisselen."
          },
          {
            "text": "De gevel opent volledig als een dak",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Er verschijnen lichtprojecties van spelersnamen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar BMW Welt / BMW Museum",
        "place": "BMW Welt / BMW Museum",
        "coordinates": {
          "lat": 48.1769,
          "lng": 11.5563
        },
        "assignment": "Zoek bij BMW Welt / BMW Museum naar sporen van de oorspronkelijke functie en let op hoe bezoekers zich door de ruimte bewegen.",
        "question": "Waar verwijst de vorm van de \"vier-cilinder\" toren naar?",
        "hint": "Kijk naar de vorm van het hoofdkantoor ernaast.",
        "choices": [
          {
            "text": "Vier motorcilinders, het hart van een verbrandingsmotor",
            "correct": true,
            "feedback": "Goed gezien. De vier ronde torens stellen letterlijk vier cilinders voor."
          },
          {
            "text": "De vier ringen van een ander automerk, als eerbetoon",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Vier windrichtingen, symbool voor wereldwijde export",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Olympiapark",
        "place": "Olympiapark",
        "coordinates": {
          "lat": 48.1733,
          "lng": 11.5464
        },
        "assignment": "Kijk rustig rond bij Olympiapark en zoek het detail dat deze plek typisch maakt voor München.",
        "question": "Waar is het opvallende tentvormige dak op geïnspireerd?",
        "hint": "Kijk naar de vorm van het dak boven het stadion.",
        "choices": [
          {
            "text": "Spinnenwebben/zeilstructuren, ontworpen door architect Frei Otto",
            "correct": true,
            "feedback": "Goed gezien. Het dak werd gebouwd voor de Olympische Spelen van 1972 en is nog steeds baanbrekend qua constructie."
          },
          {
            "text": "De Alpentoppen rondom München",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Traditionele Beierse berghutten",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Englischer Garten (Eisbach)",
        "place": "Englischer Garten (Eisbach)",
        "coordinates": {
          "lat": 48.1435,
          "lng": 11.5878
        },
        "assignment": "Kijk rustig rond bij Englischer Garten (Eisbach) en zoek het detail dat deze plek typisch maakt voor München.",
        "question": "Wat doen mensen hier al decennialang, midden in de stad?",
        "hint": "Zoek de brug over het riviertje vlak bij Haus der Kunst.",
        "choices": [
          {
            "text": "Surfen op een permanente staande golf",
            "correct": true,
            "feedback": "Goed gezien. De Eisbach-golf is wereldberoemd onder stadssurfers."
          },
          {
            "text": "Vissen op forel, een oude traditie",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Zwemmen met een officiële zwemvergunning",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Frauenkirche",
        "place": "Frauenkirche",
        "coordinates": {
          "lat": 48.1386,
          "lng": 11.5736
        },
        "assignment": "Kijk naar de gevel, de hoogte en de details rond Frauenkirche voordat je antwoord geeft.",
        "question": "Wat is de \"Teufelstritt\", en waar vind je hem?",
        "hint": "Kijk naar de vloertegels net na de hoofdingang.",
        "choices": [
          {
            "text": "Een zwarte voetafdruk in de vloer, volgens de legende van de duivel zelf",
            "correct": true,
            "feedback": "Goed gezien. De legende zegt dat de duivel hier stampte toen hij zag dat de kerk toch ramen had."
          },
          {
            "text": "Een gescheurde tegel door een aardbeving",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een brandplek van een kaars uit de middeleeuwen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Neues Rathaus (Marienplatz)",
        "place": "Neues Rathaus (Marienplatz)",
        "coordinates": {
          "lat": 48.1374,
          "lng": 11.5755
        },
        "assignment": "Kijk rustig rond bij Neues Rathaus (Marienplatz) en zoek het detail dat deze plek typisch maakt voor München.",
        "question": "Wat gebeurt er dagelijks om 11 uur met het Glockenspiel?",
        "hint": "Kijk omhoog naar de toren.",
        "choices": [
          {
            "text": "Bewegende figuren spelen een ridderstoernooi en een dansscène na",
            "correct": true,
            "feedback": "Goed gezien. De figuren beelden een 16e-eeuws ridderfeest en de \"Schäfflertanz\" (kuipersdans) uit."
          },
          {
            "text": "Een levensgrote haan kraait drie keer",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Er komt een miniatuur Oktoberfeststoet voorbij",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Viktualienmarkt",
        "place": "Viktualienmarkt",
        "coordinates": {
          "lat": 48.1351,
          "lng": 11.5765
        },
        "assignment": "Neem even de tijd om de randen van Viktualienmarkt te bekijken: gevels, namen, beelden en dagelijks leven.",
        "question": "Wat vertellen de symbolen op de meiboom (Maibaum)?",
        "hint": "Kijk omhoog naar de beschilderde paal.",
        "choices": [
          {
            "text": "De verschillende ambachten en gilden van München",
            "correct": true,
            "feedback": "Goed gezien. Elk beschilderd paneel toont een ander traditioneel beroep uit de stad."
          },
          {
            "text": "De geschiedenis van het Oktoberfest",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De adellijke families van Beieren",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Hofbräuhaus",
        "place": "Hofbräuhaus",
        "coordinates": {
          "lat": 48.1376,
          "lng": 11.5799
        },
        "assignment": "Kijk rustig rond bij Hofbräuhaus en zoek het detail dat deze plek typisch maakt voor München.",
        "question": "Sinds welk jaar bestaat dit beroemde bierhuis al?",
        "hint": "Zoek een jaartal op de gevel of het plafond.",
        "choices": [
          {
            "text": "1589",
            "correct": true,
            "feedback": "Goed gezien. Het Hofbräuhaus werd opgericht als hofbrouwerij van de Beierse hertogen."
          },
          {
            "text": "1810",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "1900",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Asamkirche",
        "place": "Asamkirche",
        "coordinates": {
          "lat": 48.135,
          "lng": 11.5698
        },
        "assignment": "Kijk rustig rond bij Asamkirche en zoek het detail dat deze plek typisch maakt voor München.",
        "question": "Wat is bijzonder aan de locatie van deze kerk?",
        "hint": "Kijk goed naar de gevel tussen de huizen.",
        "choices": [
          {
            "text": "Het is een piepklein, extreem versierd privékerkje, geklemd tussen woonhuizen",
            "correct": true,
            "feedback": "Goed gezien. De gebroeders Asam bouwden de kerk letterlijk als privékapel naast hun eigen huis."
          },
          {
            "text": "Het is de enige kerk van München zonder toren",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De kerk staat helemaal ondergronds",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Schloss Nymphenburg (Schönheitengalerie)",
        "place": "Schloss Nymphenburg (Schönheitengalerie)",
        "coordinates": {
          "lat": 48.1583,
          "lng": 11.5033
        },
        "assignment": "Loop langs de buitenkant van Schloss Nymphenburg (Schönheitengalerie) en zoek details die macht, rijkdom of verdediging laten zien.",
        "question": "Wat hangt er in deze speciale zaal, en wie liet het maken?",
        "hint": "Zoek de zaal met 36 vrouwenportretten.",
        "choices": [
          {
            "text": "Portretten van de mooiste vrouwen van München, verzameld door koning Ludwig I",
            "correct": true,
            "feedback": "Goed gezien. Ludwig I liet uit heel Beieren vrouwen schilderen die hij mooi vond, ongeacht hun afkomst."
          },
          {
            "text": "Portretten van alle Beierse koninginnen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Zelfportretten van hofschilders",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "milan",
    "city": "Milaan",
    "title": "Milaan: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "200 min",
    "distance": "7,4 km wandelen + metro",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Milaan met 10 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Stadio San Siro (Giuseppe Meazza)",
        "place": "Stadio San Siro (Giuseppe Meazza)",
        "coordinates": {
          "lat": 45.4781,
          "lng": 9.124
        },
        "assignment": "Kijk rustig rond bij Stadio San Siro (Giuseppe Meazza) en zoek het detail dat deze plek typisch maakt voor Milaan.",
        "question": "Wat is opvallend aan de elf cilindrische torens rondom dit stadion?",
        "hint": "Kijk naar de buitenkant van het stadion, bij het beklimmen naar de tribunes.",
        "choices": [
          {
            "text": "Ze hebben spiraalvormige (helicoïdale) opritten die naar de bovenste ring leiden",
            "correct": true,
            "feedback": "Goed gezien. Het stadion wordt gedeeld door aartsrivalen AC Milan en Inter, en is vernoemd naar Giuseppe Meazza, die voor beide clubs speelde."
          },
          {
            "text": "Elke toren is vernoemd naar een andere wereldkampioen voetbal",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Ze zijn allemaal van glas, als enige stadion van Italië",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Santa Maria delle Grazie",
        "place": "Santa Maria delle Grazie",
        "coordinates": {
          "lat": 45.4659,
          "lng": 9.171
        },
        "assignment": "Kijk rustig rond bij Santa Maria delle Grazie en zoek het detail dat deze plek typisch maakt voor Milaan.",
        "question": "Waarom moet je hier altijd van tevoren reserveren?",
        "hint": "Zoek het schilderij op de eetzaalmuur van het klooster.",
        "choices": [
          {
            "text": "Voor een tijdslot om Het Laatste Avondmaal van Da Vinci te zien",
            "correct": true,
            "feedback": "Goed gezien. Het muurschilderij is zo kwetsbaar dat bezoekersaantallen strikt beperkt worden."
          },
          {
            "text": "Voor toegang tot de kloostertuin",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Voor een plek in de dagelijkse mis",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Basilica di Sant'Ambrogio",
        "place": "Basilica di Sant'Ambrogio",
        "coordinates": {
          "lat": 45.4624,
          "lng": 9.1759
        },
        "assignment": "Kijk rustig rond bij Basilica di Sant'Ambrogio en zoek het detail dat deze plek typisch maakt voor Milaan.",
        "question": "Wat ligt er volgens de legende te wachten op het Laatste Oordeel, hoog op een zuil in de kerk?",
        "hint": "Kijk in het middenschip, links, bij de derde pilaar.",
        "choices": [
          {
            "text": "Een bronzen slang, die dan tot leven zou komen en terugkeert naar Jeruzalem",
            "correct": true,
            "feedback": "Goed gezien. De slang zou volgens de legende teruggaan naar het Dal van Josafat, waar Mozes hem ooit zou hebben gemaakt."
          },
          {
            "text": "Een verguld kruis dat dan zou gaan stralen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een marmeren duif die dan zou gaan vliegen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Navigli",
        "place": "Navigli",
        "coordinates": {
          "lat": 45.4525,
          "lng": 9.1743
        },
        "assignment": "Kijk rustig rond bij Navigli en zoek het detail dat deze plek typisch maakt voor Milaan.",
        "question": "Wat is bijzonder aan dit kanalenstelsel, afgezien van de sfeer?",
        "hint": "Kijk naar hoe recht/kunstmatig de waterwegen lopen.",
        "choices": [
          {
            "text": "Leonardo da Vinci hielp mee aan het ontwerp van sluizen voor dit kanalensysteem",
            "correct": true,
            "feedback": "Goed gezien. Da Vinci werkte lange tijd in Milaan en droeg bij aan het sluizenontwerp."
          },
          {
            "text": "Het is het enige kanalensysteem van Italië",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De kanalen werden pas na WOII aangelegd",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Castello Sforzesco",
        "place": "Castello Sforzesco",
        "coordinates": {
          "lat": 45.4705,
          "lng": 9.1795
        },
        "assignment": "Kijk rustig rond bij Castello Sforzesco en zoek het detail dat deze plek typisch maakt voor Milaan.",
        "question": "Welk onvoltooid meesterwerk van Michelangelo staat hier?",
        "hint": "Zoek de speciale zaal met dit beeld.",
        "choices": [
          {
            "text": "De Rondanini Pietà, zijn allerlaatste, onafgemaakte werk",
            "correct": true,
            "feedback": "Goed gezien. Michelangelo werkte tot vlak voor zijn dood aan dit beeld."
          },
          {
            "text": "Een onvoltooide David",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een onvoltooid fresco van het Laatste Oordeel",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Cimitero Monumentale",
        "place": "Cimitero Monumentale",
        "coordinates": {
          "lat": 45.4842,
          "lng": 9.1797
        },
        "assignment": "Kijk rustig rond bij Cimitero Monumentale en zoek het detail dat deze plek typisch maakt voor Milaan.",
        "question": "Wiens praalgraf staat centraal in het Famedio, de imposante ingang van deze begraafplaats?",
        "hint": "Loop de grote trap op naar het neogotische gebouw bij de ingang.",
        "choices": [
          {
            "text": "Schrijver Alessandro Manzoni, als eerste die hier werd bijgezet",
            "correct": true,
            "feedback": "Goed gezien. Het Famedio geldt als het \"pantheon\" van beroemde Milanezen, met Manzoni op de ereplek."
          },
          {
            "text": "Componist Giuseppe Verdi",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Alleen onbekende, anonieme weldoeners van de stad",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Bosco Verticale",
        "place": "Bosco Verticale",
        "coordinates": {
          "lat": 45.4853,
          "lng": 9.1907
        },
        "assignment": "Kijk rustig rond bij Bosco Verticale en zoek het detail dat deze plek typisch maakt voor Milaan.",
        "question": "Wie onderhoudt de honderden bomen en duizenden planten op de gevels van deze twee woontorens?",
        "hint": "Kijk omhoog - je ziet ze soms letterlijk aan touwen langs de gevel hangen.",
        "choices": [
          {
            "text": "Gespecialiseerde \"flying gardeners\" die de torens beklimmen met klimtuig",
            "correct": true,
            "feedback": "Goed gezien. Deze \"vliegende tuinlieden\" abseilen langs de gevel om de duizenden planten te snoeien en verzorgen."
          },
          {
            "text": "Een volledig geautomatiseerd robotsysteem, zonder mensen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De bewoners zelf, om beurten volgens een rooster",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Teatro alla Scala",
        "place": "Teatro alla Scala",
        "coordinates": {
          "lat": 45.4676,
          "lng": 9.1895
        },
        "assignment": "Kijk rustig rond bij Teatro alla Scala en zoek het detail dat deze plek typisch maakt voor Milaan.",
        "question": "Waar kun je, zonder een voorstelling te zien, toch een indruk krijgen van dit operahuis?",
        "hint": "Zoek het aangrenzende museum.",
        "choices": [
          {
            "text": "In het La Scala-museum, met kostuums, instrumenten en een blik in de zaal",
            "correct": true,
            "feedback": "Goed gezien. Het museum grenst direct aan de theaterzaal en biedt vaak ook zicht op het podium."
          },
          {
            "text": "Via een openbare rondleiding die elk uur start",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Vanaf het dakterras van de Galleria ernaast",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Galleria Vittorio Emanuele II",
        "place": "Galleria Vittorio Emanuele II",
        "coordinates": {
          "lat": 45.4659,
          "lng": 9.19
        },
        "assignment": "Kijk rustig rond bij Galleria Vittorio Emanuele II en zoek het detail dat deze plek typisch maakt voor Milaan.",
        "question": "Wat doen mensen op het mozaïek van de stier in de vloer?",
        "hint": "Zoek het mozaïek van een gehoornd dier op de kruising.",
        "choices": [
          {
            "text": "Ronddraaien op hun hak op de \"edele delen\" van de stier, voor geluk",
            "correct": true,
            "feedback": "Goed gezien. Het is een bekend, wat ondeugend Milanees ritueel voor geluk."
          },
          {
            "text": "Er een muntje op gooien",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Het mozaïek aanraken met hun linkerhand",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Duomo di Milano",
        "place": "Duomo di Milano",
        "coordinates": {
          "lat": 45.4642,
          "lng": 9.1916
        },
        "assignment": "Kijk naar de gevel, de hoogte en de details rond Duomo di Milano voordat je antwoord geeft.",
        "question": "Wat kun je doen als je helemaal boven op het dak komt?",
        "hint": "Koop een ticket voor het dakterras, niet alleen de kerk zelf.",
        "choices": [
          {
            "text": "Tussen duizenden torentjes en beelden lopen, met de gouden Madonnina in zicht",
            "correct": true,
            "feedback": "Goed gezien. Het dakterras is een van de weinige plekken waar je zo dicht tussen de gotische spitsen kunt lopen."
          },
          {
            "text": "Een klok bekijken die groter is dan die van Praag",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De originele glas-in-loodramen van dichtbij zien liggen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "athens",
    "city": "Athene",
    "title": "Athene: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "200 min",
    "distance": "5,8 km",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Athene met 10 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Lycabettusheuvel",
        "place": "Lycabettusheuvel",
        "coordinates": {
          "lat": 37.9818,
          "lng": 23.7436
        },
        "assignment": "Kijk rustig rond bij Lycabettusheuvel en zoek het detail dat deze plek typisch maakt voor Athene.",
        "question": "Wat vind je helemaal boven op deze heuvel?",
        "hint": "Neem de kabelbaan of beklim de heuvel.",
        "choices": [
          {
            "text": "Een kapel gewijd aan Sint-Joris",
            "correct": true,
            "feedback": "Goed gezien. Dit is het hoogste punt van Athene, met een adembenemend uitzicht over de stad."
          },
          {
            "text": "De ruïne van een oude tempel voor Athena",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een oud Byzantijns fort",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Syntagma-plein (Evzones-wachters)",
        "place": "Syntagma-plein (Evzones-wachters)",
        "coordinates": {
          "lat": 37.9755,
          "lng": 23.7348
        },
        "assignment": "Neem even de tijd om de randen van Syntagma-plein (Evzones-wachters) te bekijken: gevels, namen, beelden en dagelijks leven.",
        "question": "Wat is opvallend aan de manier van lopen van deze ceremoniële wachters?",
        "hint": "Kijk naar de wisseling van de wacht bij het parlement.",
        "choices": [
          {
            "text": "Een langzame, hoge, overdreven stap",
            "correct": true,
            "feedback": "Goed gezien. De kenmerkende trage, hoge pas is uniek voor de Griekse ceremoniële wacht."
          },
          {
            "text": "Ze lopen achterwaarts het gebouw in",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Ze marcheren volledig synchroon met muziek uit een verborgen speaker",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Panathenaic Stadium (Kallimarmaro)",
        "place": "Panathenaic Stadium (Kallimarmaro)",
        "coordinates": {
          "lat": 37.9683,
          "lng": 23.7411
        },
        "assignment": "Kijk rustig rond bij Panathenaic Stadium (Kallimarmaro) en zoek het detail dat deze plek typisch maakt voor Athene.",
        "question": "Waarvan is dit stadion volledig gebouwd?",
        "hint": "Kijk naar het materiaal van de tribunes.",
        "choices": [
          {
            "text": "Volledig van marmer",
            "correct": true,
            "feedback": "Goed gezien. Het is het enige stadion ter wereld dat volledig uit marmer is opgetrokken, en gastheer van de eerste moderne Olympische Spelen in 1896."
          },
          {
            "text": "Van baksteen met een marmeren laag eroverheen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Van beton, later bekleed met marmer look-alike tegels",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Tempel van Olympische Zeus",
        "place": "Tempel van Olympische Zeus",
        "coordinates": {
          "lat": 37.9693,
          "lng": 23.7331
        },
        "assignment": "Kijk rustig rond bij Tempel van Olympische Zeus en zoek het detail dat deze plek typisch maakt voor Athene.",
        "question": "Hoeveel van de oorspronkelijke zuilen staan er nog overeind?",
        "hint": "Tel de staande zuilen.",
        "choices": [
          {
            "text": "15 van de oorspronkelijke 104",
            "correct": true,
            "feedback": "Goed gezien. Het was ooit de grootste tempel van Griekenland, nu grotendeels in ruïne."
          },
          {
            "text": "Alle 104, volledig gerestaureerd",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Slechts 4",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Hadrianusboog",
        "place": "Hadrianusboog",
        "coordinates": {
          "lat": 37.9703,
          "lng": 23.7318
        },
        "assignment": "Kijk rustig rond bij Hadrianusboog en zoek het detail dat deze plek typisch maakt voor Athene.",
        "question": "Wat staat er op de twee kanten van de boog, en waarom is dat opmerkelijk?",
        "hint": "Lees de Griekse inscripties aan beide zijden.",
        "choices": [
          {
            "text": "De ene kant noemt het \"de stad van Theseus\", de andere \"de stad van Hadrianus\"",
            "correct": true,
            "feedback": "Goed gezien. De boog markeerde letterlijk de grens tussen het oude Athene en het nieuwe, Romeinse Athene van Hadrianus."
          },
          {
            "text": "Beide kanten bevatten exact dezelfde tekst, als eerbetoon",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een kant is in het Grieks, de andere in het Latijn, met dezelfde boodschap",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Akropolismuseum",
        "place": "Akropolismuseum",
        "coordinates": {
          "lat": 37.9684,
          "lng": 23.7285
        },
        "assignment": "Zoek bij Akropolismuseum naar sporen van de oorspronkelijke functie en let op hoe bezoekers zich door de ruimte bewegen.",
        "question": "Wat loop je letterlijk overheen bij binnenkomst?",
        "hint": "Kijk naar de vloer bij de ingang.",
        "choices": [
          {
            "text": "Een glazen vloer boven opgegraven oude ruïnes",
            "correct": true,
            "feedback": "Goed gezien. Onder het museum liggen archeologische opgravingen die zichtbaar bleven door een glazen vloer."
          },
          {
            "text": "Een mozaïekvloer uit de Byzantijnse tijd",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Marmeren tegels uit de Akropolis zelf, hier herplaatst",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Akropolis / Parthenon",
        "place": "Akropolis / Parthenon",
        "coordinates": {
          "lat": 37.9715,
          "lng": 23.7267
        },
        "assignment": "Kijk rustig rond bij Akropolis / Parthenon en zoek het detail dat deze plek typisch maakt voor Athene.",
        "question": "Wat klopt er \"niet\" aan de zuilen als je goed kijkt?",
        "hint": "Kijk van een afstand langs de hele rij zuilen.",
        "choices": [
          {
            "text": "Ze buigen licht naar buiten, om optisch juist rechter te lijken",
            "correct": true,
            "feedback": "Goed gezien. Dit heet \"entasis\" - een bewuste architectonische illusie van de oude Grieken."
          },
          {
            "text": "Ze staan expres een beetje scheef door de aardbeving van 1999",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Om de andere zuil is dikker, voor extra stabiliteit",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Erechtheion",
        "place": "Erechtheion",
        "coordinates": {
          "lat": 37.9721,
          "lng": 23.7265
        },
        "assignment": "Kijk rustig rond bij Erechtheion en zoek het detail dat deze plek typisch maakt voor Athene.",
        "question": "Wat zie je op de beroemde veranda van dit tempeltje?",
        "hint": "Zoek de zuilen in vrouwvorm.",
        "choices": [
          {
            "text": "Zes Karyatiden, vrouwfiguren die als zuilen dienen (kopieën)",
            "correct": true,
            "feedback": "Goed gezien. De originele beelden staan veilig in het Akropolismuseum."
          },
          {
            "text": "Vier bronzen paarden",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een rij leeuwenbeelden",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Plaka",
        "place": "Plaka",
        "coordinates": {
          "lat": 37.9737,
          "lng": 23.7306
        },
        "assignment": "Kijk rustig rond bij Plaka en zoek het detail dat deze plek typisch maakt voor Athene.",
        "question": "Wat is bijzonder aan deze wijk aan de voet van de Akropolis?",
        "hint": "Kijk naar de bouwstijl en straatjes vergeleken met de rest van Athene.",
        "choices": [
          {
            "text": "Het is de oudste, nog bewoonde wijk van de stad",
            "correct": true,
            "feedback": "Goed gezien. De smalle steegjes en lage huizen dateren van lang voor de moderne stad eromheen."
          },
          {
            "text": "Het is volledig herbouwd na de Grieks-Turkse oorlog",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Het is de enige wijk met uitsluitend neoclassicistische gebouwen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Ancient Agora - Hephaestus-tempel",
        "place": "Ancient Agora - Hephaestus-tempel",
        "coordinates": {
          "lat": 37.9756,
          "lng": 23.7214
        },
        "assignment": "Kijk rustig rond bij Ancient Agora - Hephaestus-tempel en zoek het detail dat deze plek typisch maakt voor Athene.",
        "question": "Wat is bijzonder aan de bewaringsstaat van deze tempel?",
        "hint": "Vergelijk met andere tempels op de Akropolis.",
        "choices": [
          {
            "text": "Het is een van de best bewaarde antieke Griekse tempels ter wereld",
            "correct": true,
            "feedback": "Goed gezien. Doordat de tempel later als kerk werd gebruikt, bleef hij ongewoon goed intact."
          },
          {
            "text": "Het is volledig gereconstrueerd in de 20e eeuw",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Alleen de fundering is nog origineel",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  },
{
    "id": "edinburgh",
    "city": "Edinburgh",
    "title": "Edinburgh: stadsopdracht langs iconen en verborgen details",
    "price": "€4,49",
    "duration": "128 min",
    "distance": "5,7 km",
    "paymentUrl": "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Fawy7NnASP6JXF6az-_OUQ",
    "summary": "Een interactieve wandeling door Edinburgh met 6 opdrachten, lokale verhalen en locatie-unlocks.",
    "stops": [
      {
        "title": "Begin bij Edinburgh Castle",
        "place": "Edinburgh Castle",
        "coordinates": {
          "lat": 55.9486,
          "lng": -3.1999
        },
        "assignment": "Loop langs de buitenkant van Edinburgh Castle en zoek details die macht, rijkdom of verdediging laten zien.",
        "question": "Wat hoor je hier elke dag (behalve zondag) stipt om 13:00 uur?",
        "hint": "Luister goed als je rond het middaguur op het kasteelterrein bent.",
        "choices": [
          {
            "text": "Het afvuren van het One O'Clock Gun-kanonschot",
            "correct": true,
            "feedback": "Goed gezien. Deze traditie diende ooit om schepen in de haven de tijd te geven."
          },
          {
            "text": "Het luiden van de kasteelklok, 13 keer",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Doedelzakmuziek van de kasteelwacht",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Greyfriars Bobby (standbeeld)",
        "place": "Greyfriars Bobby (standbeeld)",
        "coordinates": {
          "lat": 55.9469,
          "lng": -3.1919
        },
        "assignment": "Kijk rustig rond bij Greyfriars Bobby (standbeeld) en zoek het detail dat deze plek typisch maakt voor Edinburgh.",
        "question": "Wat is er opvallend aan zijn neus vergeleken met de rest van het beeld?",
        "hint": "Kijk goed naar de kleur van het brons.",
        "choices": [
          {
            "text": "Zijn neus is goudkleurig glimmend door het aanraken voor geluk",
            "correct": true,
            "feedback": "Goed gezien. Duizenden handen hebben de patina van zijn neus weggewreven."
          },
          {
            "text": "Zijn neus ontbreekt volledig door vandalisme",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Zijn neus is van een ander materiaal dan de rest",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Royal Mile",
        "place": "Royal Mile",
        "coordinates": {
          "lat": 55.9505,
          "lng": -3.1857
        },
        "assignment": "Kijk rustig rond bij Royal Mile en zoek het detail dat deze plek typisch maakt voor Edinburgh.",
        "question": "Wat kun je onder de straat vinden, verborgen voor het zicht?",
        "hint": "Zoek een ingang naar een ondergrondse rondleiding.",
        "choices": [
          {
            "text": "Mary King's Close, een compleet verborgen straatje uit de 17e eeuw",
            "correct": true,
            "feedback": "Goed gezien. Dit oude steegje werd letterlijk overbouwd toen er nieuwe gebouwen bovenop kwamen."
          },
          {
            "text": "Een Romeins riool",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een middeleeuwse muntenschat, nog steeds ter plekke te zien",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Holyrood Palace",
        "place": "Holyrood Palace",
        "coordinates": {
          "lat": 55.9527,
          "lng": -3.1722
        },
        "assignment": "Loop langs de buitenkant van Holyrood Palace en zoek details die macht, rijkdom of verdediging laten zien.",
        "question": "Wat staat er direct naast het paleis, in duidelijk vervallen staat?",
        "hint": "Loop om het paleis heen, aan de kant van de heuvel.",
        "choices": [
          {
            "text": "De ruïne van Holyrood Abbey",
            "correct": true,
            "feedback": "Goed gezien. De abdij raakte na de Reformatie in verval en ligt nu als open ruïne naast het paleis."
          },
          {
            "text": "Een ingestorte middeleeuwse toren",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "De restanten van een Romeins fort",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Arthur's Seat",
        "place": "Arthur's Seat",
        "coordinates": {
          "lat": 55.9444,
          "lng": -3.1618
        },
        "assignment": "Kijk rustig rond bij Arthur's Seat en zoek het detail dat deze plek typisch maakt voor Edinburgh.",
        "question": "Wat is de oorsprong van deze heuvel middenin de stad?",
        "hint": "Kijk naar de rotsvorm vanaf de top.",
        "choices": [
          {
            "text": "Een uitgedoofde vulkaan",
            "correct": true,
            "feedback": "Goed gezien. De rotsformaties zijn duidelijk vulkanisch van oorsprong."
          },
          {
            "text": "Een kunstmatige heuvel, aangelegd door de Romeinen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Resten van een ingestort kasteel",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      },
      {
        "title": "Ga naar Calton Hill",
        "place": "Calton Hill",
        "coordinates": {
          "lat": 55.955,
          "lng": -3.1828
        },
        "assignment": "Kijk rustig rond bij Calton Hill en zoek het detail dat deze plek typisch maakt voor Edinburgh.",
        "question": "Waarom is het \"National Monument\" hier nooit afgebouwd?",
        "hint": "Kijk naar de zuilen - er ontbreekt duidelijk iets.",
        "choices": [
          {
            "text": "Het geld raakte op, waardoor alleen een deel van de zuilen overeind staat",
            "correct": true,
            "feedback": "Goed gezien. Het monument staat lokaal bekend als \"Edinburgh's Disgrace\" (de schande van Edinburgh)."
          },
          {
            "text": "Het werd met opzet als ruïne ontworpen",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          },
          {
            "text": "Een storm blies de rest van het monument omver",
            "correct": false,
            "feedback": "Niet helemaal. Kijk nog eens goed naar de details op deze plek en vergelijk ze met de vraag."
          }
        ]
      }
    ]
  }
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
  palma: {
    src: "assets/cities/palma.jpg",
    alt: "Haven en skyline van Palma de Mallorca bij zonsondergang",
    credit: "Max Peters, eigen werk",
  },
  paris: {
    "src": "assets/cities/paris.jpg",
    "alt": "Stadsbeeld van Parijs",
    "credit": "Benh LIEU SONG, CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Arc_Triomphe.jpg"
  },
  rome: {
    "src": "assets/cities/rome.jpg",
    "alt": "Stadsbeeld van Rome",
    "credit": "Masterpieceandmonuments, CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:City_of_Rome_skyline_with_clouds_and_a_blue_sky.jpg"
  },
  amsterdam: {
    "src": "assets/cities/amsterdam.jpg",
    "alt": "Stadsbeeld van Amsterdam",
    "credit": "Diliff, CC BY 2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Amsterdam_Canals_-_July_2006.jpg"
  },
  berlin: {
    "src": "assets/cities/berlin.jpg",
    "alt": "Stadsbeeld van Berlijn",
    "credit": "J. Miesler, Berlin, Public domain",
    "source": "https://commons.wikimedia.org/wiki/File:Berlin,_Tiergarten,_Berlin_-_Justizpalast;_Landesausstellungspalast_am_Lehrter_Bahnhof;_Moltkebr%C3%BCcke_und_Panorama_(Zeno_Ansichtskarten).jpg"
  },
  lisbon: {
    "src": "assets/cities/lisbon.jpg",
    "alt": "Stadsbeeld van Lissabon",
    "credit": "Jules Verne Times Two, CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Closed_shop_with_graffiti_on_the_wall,_Guerra_Junqueiro_Avenue,_Lisbon,_Portugal_julesvernex2.jpg"
  },
  budapest: {
    "src": "assets/cities/budapest.jpg",
    "alt": "Stadsbeeld van Boedapest",
    "credit": "Dirk Beyer, CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Budapest_Parliament_4604.JPG"
  },
  venice: {
    "src": "assets/cities/venice.jpg",
    "alt": "Stadsbeeld van Venetië",
    "credit": "Didier Descouens, CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:(Venice)_Hotel_Principe_-_Facade_on_Grand_Canal.jpg"
  },
  barcelona: {
    "src": "assets/cities/barcelona.jpg",
    "alt": "Stadsbeeld van Barcelona",
    "credit": "Jcca76, CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Barcelona_desde_El_Carmelo.JPG"
  },
  prague: {
    "src": "assets/cities/prague.jpg",
    "alt": "Stadsbeeld van Praag",
    "credit": "Christian Ezdorf, Public domain",
    "source": "https://commons.wikimedia.org/wiki/File:Christian_Ezdorf_-_Panorama_of_Prague.jpg"
  },
  munich: {
    "src": "assets/cities/munich.jpg",
    "alt": "Stadsbeeld van München",
    "credit": "Flocci Nivis, CC BY 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:20220829_Skyline_Tower.jpg"
  },
  milan: {
    "src": "assets/cities/milan.jpg",
    "alt": "Stadsbeeld van Milaan",
    "credit": "Christopher John SSF, CC BY 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:20110511_Milan_Duomo_030.jpg"
  },
  athens: {
    "src": "assets/cities/athens.jpg",
    "alt": "Stadsbeeld van Athene",
    "credit": "Ggia, CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:20101024_Acropolis_panoramic_view_from_Areopagus_hill_Athens_Greece.jpg"
  },
  edinburgh: {
    "src": "assets/cities/edinburgh.jpg",
    "alt": "Stadsbeeld van Edinburgh",
    "credit": "David Hillas, CC BY-SA 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Edinburgh%27s_Skyline_from_Castle_Hill_(1)_-_geograph.org.uk_-_4836425.jpg"
  }
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

const renderExpertCelebration = (tour) => {
  const photo = cityPhotos[tour.id];

  return `
    <section class="expert-celebration" aria-label="Tour voltooid">
      <div class="expert-photo">
        ${photo ? `<img src="${photo.src}" alt="${photo.alt}" />` : ""}
        <span class="expert-shine"></span>
        <div class="expert-brand">
          <img src="assets/favicon.png" alt="" />
          <span>Stadsopdracht</span>
        </div>
        <span class="expert-badge">Voltooid</span>
        <div class="expert-overlay-copy">
          <span>City badge</span>
          <strong>Ik ben een expert in ${tour.city}</strong>
        </div>
      </div>
      <div class="expert-copy">
        <span class="pill">Laatste opdracht goed</span>
        <h2>Je bent een expert in ${tour.city}</h2>
        <p>
          Je hebt alle stops afgerond, de stad stap voor stap bekeken en onderweg de belangrijkste
          verhalen, details en plekken vrijgespeeld.
        </p>
        <div class="expert-share-footer">
          <strong>Stadsopdracht</strong>
          <span>stadsopdracht.nl</span>
        </div>
      </div>
      <div class="expert-sparkles" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  `;
};

const loadShareImage = (src) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });

let appIconImagePromise = null;
const loadAppIconImage = () => {
  appIconImagePromise ||= loadShareImage("assets/app-icon-512.png");
  return appIconImagePromise;
};

const drawCoverImage = (context, image, x, y, width, height) => {
  const sourceRatio = image.naturalWidth / image.naturalHeight;
  const targetRatio = width / height;
  const sourceWidth = sourceRatio > targetRatio ? image.naturalHeight * targetRatio : image.naturalWidth;
  const sourceHeight = sourceRatio > targetRatio ? image.naturalHeight : image.naturalWidth / targetRatio;
  const sourceX = (image.naturalWidth - sourceWidth) / 2;
  const sourceY = (image.naturalHeight - sourceHeight) / 2;

  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
};

const fillRoundedRect = (context, x, y, width, height, radius) => {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.fill();
};

const wrapCanvasText = (context, text, x, y, maxWidth, lineHeight, maxLines = 3) => {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (context.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
      return;
    }
    line = testLine;
  });

  if (line) lines.push(line);

  lines.slice(0, maxLines).forEach((lineText, index) => {
    context.fillText(lineText, x, y + index * lineHeight);
  });
};

const createCompletionShareFile = async (tour) => {
  const photo = cityPhotos[tour.id];
  const canvas = document.createElement("canvas");
  const width = 1080;
  const height = 1350;
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  const image = photo ? await loadShareImage(photo.src) : null;

  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#10aeca");
  gradient.addColorStop(1, "#09232a");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  if (image) {
    drawCoverImage(context, image, 0, 0, width, height);
    const overlay = context.createLinearGradient(0, 0, 0, height);
    overlay.addColorStop(0, "rgba(9, 35, 42, 0.18)");
    overlay.addColorStop(0.52, "rgba(9, 35, 42, 0.2)");
    overlay.addColorStop(1, "rgba(9, 35, 42, 0.82)");
    context.fillStyle = overlay;
    context.fillRect(0, 0, width, height);
  }

  context.fillStyle = "rgba(255, 255, 255, 0.94)";
  fillRoundedRect(context, 72, 72, 382, 86, 43);
  context.fillStyle = "#087f91";
  context.font = "900 34px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  context.fillText("Stadsopdracht", 142, 127);
  context.fillStyle = "#10aeca";
  fillRoundedRect(context, 92, 92, 46, 46, 12);
  context.fillStyle = "#ffffff";
  context.font = "900 28px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  context.fillText("S", 107, 126);

  context.fillStyle = "rgba(255, 255, 255, 0.95)";
  fillRoundedRect(context, 780, 82, 220, 64, 32);
  context.fillStyle = "#087f91";
  context.font = "900 30px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  context.fillText("Voltooid", 820, 124);

  context.fillStyle = "rgba(255, 255, 255, 0.78)";
  context.font = "900 30px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  context.fillText("CITY BADGE", 72, 874);
  context.fillStyle = "#ffffff";
  context.font = "900 82px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  wrapCanvasText(context, `Ik ben een expert in ${tour.city}`, 72, 970, 900, 88, 3);

  context.fillStyle = "rgba(255, 255, 255, 0.92)";
  fillRoundedRect(context, 72, 1196, 936, 88, 24);
  context.fillStyle = "#09232a";
  context.font = "900 32px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  context.fillText("Stadsopdracht", 112, 1252);
  context.fillStyle = "#5c6f72";
  context.font = "700 28px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  context.fillText("stadsopdracht.nl", 708, 1252);

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
  if (!blob) throw new Error("Kan deelafbeelding niet maken.");
  return new File([blob], `stadsopdracht-${tour.id}-expert.jpg`, { type: "image/jpeg" });
};

const shareCompletionCard = async (tourId) => {
  const tour = tours.find((item) => item.id === tourId);
  if (!tour) return;

  const button = document.querySelector(`[data-share-expert-card="${tourId}"]`);
  if (button) {
    button.disabled = true;
    button.textContent = "Deelkaart maken...";
  }

  try {
    const file = await createCompletionShareFile(tour);
    const shareData = {
      files: [file],
      title: `Ik ben een expert in ${tour.city}`,
      text: `Ik heb de Stadsopdracht route in ${tour.city} voltooid.`,
    };

    if (navigator.canShare?.(shareData) && navigator.share) {
      await navigator.share(shareData);
      showToast("Deelvenster geopend.");
    } else {
      downloadGeneratedFile(file);
      showToast("Afbeelding gedownload.");
    }
  } catch {
    showToast("Delen lukte niet. Probeer het nog een keer vanaf je telefoon.");
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = "Deel resultaat";
    }
  }
};

const getSupportedVideoType = () => {
  const types = [
    "video/mp4;codecs=h264",
    "video/mp4",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
  ];
  return types.find((type) => window.MediaRecorder?.isTypeSupported(type)) || "";
};

const drawPromoBackground = (context, width, height, progress) => {
  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#10aeca");
  gradient.addColorStop(0.52, "#087f91");
  gradient.addColorStop(1, "#09232a");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "rgba(255, 255, 255, 0.14)";
  context.lineWidth = 2;
  for (let x = -120; x < width + 140; x += 150) {
    context.beginPath();
    context.moveTo(x + progress * 60, 0);
    context.lineTo(x - 260 + progress * 60, height);
    context.stroke();
  }
};

const downloadGeneratedFile = (file) => {
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = file.name;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 120000);
};

const drawPromoBrand = (context, appIcon) => {
  context.fillStyle = "rgba(255, 255, 255, 0.94)";
  fillRoundedRect(context, 70, 70, 390, 92, 46);
  if (appIcon) {
    context.drawImage(appIcon, 94, 93, 46, 46);
  }
  context.fillStyle = "#087f91";
  context.font = "900 35px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  context.fillText("Stadsopdracht", 154, 129);
};

const drawPromoFooter = (context, width) => {
  context.fillStyle = "rgba(255, 255, 255, 0.92)";
  fillRoundedRect(context, 70, 1748, width - 140, 104, 28);
  context.fillStyle = "#09232a";
  context.font = "900 34px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  context.fillText("Ontdek steden via opdrachten", 106, 1814);
  context.fillStyle = "#5c6f72";
  context.font = "800 28px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  context.fillText("stadsopdracht.nl", 742, 1814);
};

const drawPromoRoute = (context, progress) => {
  const points = [
    [130, 1320],
    [130, 1120],
    [410, 1120],
    [410, 910],
    [650, 910],
    [650, 1180],
    [885, 1180],
    [885, 760],
  ];
  context.strokeStyle = "rgba(255, 255, 255, 0.2)";
  context.lineWidth = 5;
  context.setLineDash([18, 18]);
  context.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  });
  context.stroke();
  context.setLineDash([]);

  const lastPoint = Math.min(points.length - 1, Math.floor(progress * points.length));
  points.forEach(([x, y], index) => {
    context.fillStyle = index <= lastPoint ? "#ffb03b" : "rgba(255, 255, 255, 0.55)";
    context.beginPath();
    context.arc(x, y, index === lastPoint ? 18 : 12, 0, Math.PI * 2);
    context.fill();
  });
};

const drawPromoVideoFrame = (context, variant, progress, width, height, appIcon) => {
  drawPromoBackground(context, width, height, progress);
  drawPromoBrand(context, appIcon);
  drawPromoFooter(context, width);

  context.fillStyle = "#fff";
  context.textBaseline = "alphabetic";

  if (variant === "question") {
    context.font = "900 70px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
    wrapCanvasText(context, "Los korte vragen op in de stad", 78, 330, 880, 78, 2);

    context.fillStyle = "rgba(255, 255, 255, 0.95)";
    fillRoundedRect(context, 78, 520, 924, 780, 34);
    context.fillStyle = "#087f91";
    context.font = "900 30px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
    context.fillText("Opdracht 3", 126, 590);
    context.fillStyle = "#09232a";
    context.font = "900 43px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
    wrapCanvasText(
      context,
      "Waarom noemt Düsseldorf de Altstadt de längste Theke der Welt?",
      126,
      680,
      800,
      52,
      4,
    );

    const answerProgress = progress > 0.48;
    context.fillStyle = answerProgress ? "#dff6e8" : "#f3f7f8";
    fillRoundedRect(context, 126, 900, 828, 142, 24);
    context.fillStyle = answerProgress ? "#1f8f5b" : "#09232a";
    context.font = "800 31px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
    wrapCanvasText(context, "Omdat er veel cafés, bars en brouwhuizen bij elkaar zitten", 156, 955, 700, 38, 2);
    if (answerProgress) {
      context.fillStyle = "#1f8f5b";
      context.font = "900 50px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
      context.fillText("✓", 890, 988);
    }

    context.fillStyle = "#f3f7f8";
    fillRoundedRect(context, 126, 1070, 828, 80, 22);
    fillRoundedRect(context, 126, 1172, 828, 80, 22);
    return;
  }

  if (variant === "unlock") {
    context.font = "900 72px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
    wrapCanvasText(context, "Vragen openen pas op locatie", 78, 330, 880, 82, 2);
    drawPromoRoute(context, progress);

    const mapX = 175 + progress * 560;
    context.fillStyle = "rgba(255, 255, 255, 0.92)";
    fillRoundedRect(context, mapX, 820, 190, 150, 28);
    context.fillStyle = "#10aeca";
    context.beginPath();
    context.arc(mapX + 95, 895, 30, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = progress > 0.72 ? "#1f8f5b" : "#fff";
    fillRoundedRect(context, 705, 975, 210, 190, 28);
    context.strokeStyle = progress > 0.72 ? "#1f8f5b" : "#fff";
    context.lineWidth = 18;
    context.beginPath();
    context.arc(810, 982, 58, Math.PI, 0);
    context.stroke();
    context.fillStyle = progress > 0.72 ? "#fff" : "#087f91";
    context.font = "900 32px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
    context.fillText(progress > 0.72 ? "Ontgrendeld" : "120 m", 724, 1220);
    return;
  }

  if (variant === "install") {
    context.fillStyle = "rgba(255, 255, 255, 0.96)";
    fillRoundedRect(context, 316, 355, 448, 448, 92);
    if (appIcon) {
      context.drawImage(appIcon, 356, 395, 368, 368);
    }

    context.fillStyle = "#fff";
    context.font = "900 84px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
    wrapCanvasText(context, "Installeer nu", 92, 980, 880, 96, 2);
    context.fillStyle = "rgba(255, 255, 255, 0.86)";
    context.font = "800 44px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
    wrapCanvasText(context, "Open stadsopdracht.nl en voeg de webapp toe aan je beginscherm.", 96, 1160, 850, 56, 3);

    const pulse = 1 + Math.sin(progress * Math.PI * 6) * 0.035;
    context.save();
    context.translate(540, 1450);
    context.scale(pulse, pulse);
    context.fillStyle = "#ffb03b";
    fillRoundedRect(context, -360, -62, 720, 124, 62);
    context.fillStyle = "#09232a";
    context.font = "900 44px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
    context.fillText("stadsopdracht.nl", -190, 16);
    context.restore();
    return;
  }

  context.font = "900 86px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  wrapCanvasText(context, "Jouw stad wordt het spel", 78, 420, 860, 94, 3);
  context.fillStyle = "rgba(255, 255, 255, 0.82)";
  context.font = "800 38px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  wrapCanvasText(context, "Koop een route, loop naar echte plekken en speel opdrachten vrij.", 82, 710, 830, 48, 3);
  drawPromoRoute(context, progress);
};

const createPromoVideoFile = async (variant) => {
  if (!window.MediaRecorder) throw new Error("Video opnemen wordt niet ondersteund.");
  const mimeType = getSupportedVideoType();
  if (!mimeType) throw new Error("Geen ondersteund videoformaat gevonden.");

  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const context = canvas.getContext("2d");
  const appIcon = await loadAppIconImage();
  const stream = canvas.captureStream(30);
  const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 6500000 });
  const chunks = [];
  const duration = 7200;
  const extension = mimeType.includes("mp4") ? "mp4" : "webm";

  recorder.ondataavailable = (event) => {
    if (event.data.size) chunks.push(event.data);
  };

  const finished = new Promise((resolve) => {
    recorder.onstop = resolve;
  });

  recorder.start();
  const startedAt = performance.now();

  await new Promise((resolve) => {
    const draw = (now) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      drawPromoVideoFrame(context, variant, progress, canvas.width, canvas.height, appIcon);
      if (progress < 1) {
        requestAnimationFrame(draw);
        return;
      }
      resolve();
    };
    requestAnimationFrame(draw);
  });

  recorder.stop();
  await finished;
  stream.getTracks().forEach((track) => track.stop());
  return new File(chunks, `stadsopdracht-promo-${variant}.${extension}`, { type: mimeType.split(";")[0] });
};

const sharePromoVideo = async (variant) => {
  if (!isAdminMode()) return;
  const button = document.querySelector(`[data-admin-promo="${variant}"]`);
  if (button) {
    button.disabled = true;
    button.textContent = "Filmpje maken...";
  }

  try {
    const file = await createPromoVideoFile(variant);
    const shareData = {
      files: [file],
      title: "Stadsopdracht promo",
      text: "Promo voor Stadsopdracht.",
    };

    if (navigator.canShare?.(shareData) && navigator.share) {
      await navigator.share(shareData);
      showToast("Deelvenster geopend.");
    } else {
      downloadGeneratedFile(file);
      showToast("Filmpje gedownload.");
    }
  } catch {
    showToast("Filmpje maken lukte niet in deze browser.");
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = button.dataset.promoLabel || "Promo";
    }
  }
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
  "Parc de la Mar Palma": 120,
  "La Seu Catedral de Mallorca": 100,
  "Palau de l'Almudaina": 90,
  "Banys Àrabs Palma": 80,
  "Plaça de Cort": 70,
  "Can Forteza Rey": 70,
  "Mercat de l'Olivar": 90,
  "La Llotja de Palma": 80,
  "Es Baluard": 110,
  "Passeig Marítim Palma": 130,
  "Douglas Sea Terminal en havenbrug": 90,
  "Jubilee Clock Douglas": 70,
  "Tower of Refuge zichtpunt": 110,
  "Loch Promenade en Marine Gardens": 110,
  "Gaiety Theatre Douglas": 80,
  "Douglas Bay Horse Tramway halte": 100,
  "Manx Museum": 90,
  "Great Union Camera Obscura Douglas Head": 130,
  "Eiffeltoren": 100,
  "Notre-Dame": 100,
  "Louvre (glazen piramide)": 100,
  "Montmartre": 100,
  "Arc de Triomphe": 100,
  "Pont Neuf": 100,
  "Musée d'Orsay": 100,
  "Panthéon": 100,
  "Palais Garnier (Opera)": 100,
  "Place de la Concorde": 100,
  "Colosseum": 100,
  "Trevifontein": 100,
  "Pantheon": 100,
  "Spaanse Trappen": 100,
  "Sint-Pietersplein": 100,
  "Piazza Navona": 100,
  "Bocca della Verità": 100,
  "Circus Maximus": 100,
  "Castel Sant'Angelo": 100,
  "Campo de' Fiori": 100,
  "Anne Frank Huis": 90,
  "Rijksmuseum": 90,
  "Westerkerk": 90,
  "Bloemenmarkt": 90,
  "Magere Brug": 90,
  "Dam / Koninklijk Paleis": 90,
  "Brandenburger Tor": 100,
  "Reichstag": 100,
  "East Side Gallery": 100,
  "Checkpoint Charlie": 100,
  "Fernsehturm": 100,
  "Gendarmenmarkt": 100,
  "Pergamonmuseum (Museumsinsel)": 100,
  "Berliner Dom": 100,
  "Holocaust-Mahnmal": 100,
  "Siegessäule (Tiergarten)": 100,
  "Torre de Belém": 90,
  "Mosteiro dos Jerónimos": 90,
  "Tram 28": 90,
  "Castelo de São Jorge": 90,
  "Praça do Comércio": 90,
  "Elevador de Santa Justa": 90,
  "Parlementsgebouw": 100,
  "Kettingbrug": 100,
  "Vissersbastion": 100,
  "Heldenplein": 100,
  "Széchenyi-bad": 100,
  "Grote Markthal": 100,
  "Burcht van Buda": 100,
  "Grote Synagoge (Dohány utca)": 100,
  "Schoenen aan de Donau": 100,
  "Gellértberg / Citadella": 100,
  "San Marcoplein": 90,
  "Basiliek San Marco": 90,
  "Dogenpaleis": 90,
  "Rialtobrug": 90,
  "Canal Grande": 90,
  "Burano": 90,
  "Sagrada Familia": 100,
  "Park Güell": 100,
  "Casa Batlló": 100,
  "La Boqueria (markt aan La Rambla)": 100,
  "Barri Gòtic (brug in Carrer del Bisbe)": 100,
  "Montjuïc (Font Màgica)": 100,
  "Sagrada Familia (Passiegevel, extra)": 100,
  "Casa Milà (La Pedrera)": 100,
  "Plaça Nova (Barri Gòtic)": 100,
  "Palau de la Música Catalana": 100,
  "Karelsbrug": 100,
  "Astronomische Klok": 100,
  "Praagse Burcht": 100,
  "Gouden Straatje (Zlatá ulička)": 100,
  "Sint-Vituskathedraal": 100,
  "Joodse Wijk (Josefov) - Oude Joodse Begraafplaats": 100,
  "Vyšehrad": 100,
  "Petřín-toren": 100,
  "Dansend Huis (Tančící dům)": 100,
  "Oudestadsplein - Jan Hus-monument": 100,
  "Neues Rathaus (Marienplatz)": 100,
  "Frauenkirche": 100,
  "Englischer Garten (Eisbach)": 100,
  "Schloss Nymphenburg (Schönheitengalerie)": 100,
  "Viktualienmarkt": 100,
  "Hofbräuhaus": 100,
  "Olympiapark": 100,
  "BMW Welt / BMW Museum": 100,
  "Asamkirche": 100,
  "Allianz Arena": 100,
  "Duomo di Milano": 100,
  "Galleria Vittorio Emanuele II": 100,
  "Teatro alla Scala": 100,
  "Santa Maria delle Grazie": 100,
  "Castello Sforzesco": 100,
  "Navigli": 100,
  "Basilica di Sant'Ambrogio": 100,
  "Cimitero Monumentale": 100,
  "Bosco Verticale": 100,
  "Stadio San Siro (Giuseppe Meazza)": 100,
  "Akropolis / Parthenon": 100,
  "Erechtheion": 100,
  "Ancient Agora - Hephaestus-tempel": 100,
  "Panathenaic Stadium (Kallimarmaro)": 100,
  "Syntagma-plein (Evzones-wachters)": 100,
  "Akropolismuseum": 100,
  "Tempel van Olympische Zeus": 100,
  "Lycabettusheuvel": 100,
  "Hadrianusboog": 100,
  "Plaka": 100,
  "Greyfriars Bobby (standbeeld)": 90,
  "Edinburgh Castle": 90,
  "Royal Mile": 90,
  "Arthur's Seat": 90,
  "Calton Hill": 90,
  "Holyrood Palace": 90
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
  "Parc de la Mar Palma":
    "Parc de la Mar is een slimme start omdat Palma hier meteen als stad aan zee verschijnt. Water, muren, La Seu en de baai vormen samen een openlucht-introductie tot de hele route.",
  "La Seu Catedral de Mallorca":
    "La Seu is Palma's sterkste skylinepunt. De gotische schaal, de ligging boven de baai en het licht in en rond het gebouw maken de kathedraal tot meer dan een losse bezienswaardigheid.",
  "Palau de l'Almudaina":
    "De Almudaina laat zien dat deze hoek van Palma eeuwenlang machtsruimte was. In de vorm van het paleis voel je nog de overgang van islamitische citadel naar koninklijke residentie.",
  "Banys Àrabs Palma":
    "De Banys Àrabs maken de Moorse laag van Palma tastbaar. Juist de kleine schaal is sterk: tussen grote monumenten krijg je hier een intiemer beeld van water, rust en dagelijks stedelijk gebruik.",
  "Plaça de Cort":
    "Plaça de Cort werkt als civiel hart van Palma. Het stadhuis, de oude olijfboom en de smalle straten eromheen maken bestuur, symboliek en dagelijkse looproutes tegelijk zichtbaar.",
  "Can Forteza Rey":
    "Can Forteza Rey voegt een kleurrijke modernistische laag toe aan de route. De decoratieve gevel laat zien dat Palma ook rond 1900 bewust aan een herkenbaar stedelijk gezicht bouwde.",
  "Mercat de l'Olivar":
    "Mercat de l'Olivar haalt Palma terug naar dagelijks gebruik. Tussen vis, groente, lokale producten en eetplekken wordt de eilandhoofdstad minder monumentaal en juist heel levend.",
  "La Llotja de Palma":
    "La Llotja maakt Palma als handelsstad zichtbaar. De gotische vorm en ligging bij de oude havenwijk laten zien hoe koopmanschap en mediterrane routes status kregen in steen.",
  "Es Baluard":
    "Es Baluard is sterk door hergebruik. Een oude vestingrand wordt hier museum, uitzichtpunt en publieke route, waardoor verdediging verandert in cultuur en stadskijken.",
  "Passeig Marítim Palma":
    "De havenpromenade rondt Palma af als stad van water en skyline. Vanaf hier zie je de route terug als één beeld: kathedraal, masten, boulevard, baai en avondlicht.",
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
  "Eiffeltoren": "Eiffel liet hier een klein privévertrek inrichten om VIP's te ontvangen.",
  "Notre-Dame": "Alle wegwijzers \"X km van Parijs\" in Frankrijk verwijzen naar dit exacte punt.",
  "Louvre (glazen piramide)": "De Pyramide Inversée is een van de bekendste \"verborgen\" fotomomenten van het museum.",
  "Montmartre": "De Clos Montmartre produceert nog steeds jaarlijks een kleine oogst wijn.",
  "Arc de Triomphe": "De vlam wordt elke avond om 18:30 opnieuw aangestoken, al sinds 1923.",
  "Pont Neuf": "Ondanks de naam is dit al sinds 1607 de oudste overgebleven brug van de stad.",
  "Musée d'Orsay": "Het museum zit in het oude Gare d'Orsay, en de enorme klok is bewaard gebleven.",
  "Panthéon": "Léon Foucault installeerde hier in 1851 zijn beroemde experiment.",
  "Palais Garnier (Opera)": "De Parijse brandweer gebruikt dit bassin nog steeds om te oefenen met duiken.",
  "Place de la Concorde": "Het origineel komt echt uit de Luxor-tempel in Egypte en werd in 1836 aan Frankrijk geschonken.",
  "Colosseum": "Onder de arenavloer zat een complex systeem van liften en luiken.",
  "Trevifontein": "Zo gooi je volgens de traditie een munt om ooit terug te keren naar Rome.",
  "Pantheon": "De oculus is de enige lichtbron en heeft geen glas, dus regen komt gewoon naar binnen.",
  "Spaanse Trappen": "135 treden naar de Trinità dei Monti-kerk.",
  "Sint-Pietersplein": "Bernini's colonnade is zo ontworpen dat vanaf dat exacte punt vier rijen zuilen optisch samenvallen tot één.",
  "Piazza Navona": "Leuk verhaal, al klopt de tijdlijn niet helemaal - de fontein was er eerder dan de gevel.",
  "Bocca della Verità": "Een populaire middeleeuwse legende, ooit gebruikt om verdachten te \"testen\".",
  "Circus Maximus": "Van de tribunes zelf is weinig over, maar de vorm van de renbaan is nog duidelijk zichtbaar.",
  "Castel Sant'Angelo": "Meerdere pausen zijn via deze verhoogde gang gevlucht tijdens belegeringen.",
  "Campo de' Fiori": "Het beeld kijkt bewust in de richting van het Vaticaan.",
  "Anne Frank Huis": "De boekenkast draait om de deur naar de schuilplek aan het zicht te onttrekken.",
  "Rijksmuseum": "De passage is een openbare doorgang, ooit zelfs bedreigd met sluiting vanwege verkeersdrukte.",
  "Westerkerk": "Maximiliaan schonk de stad het recht zijn kroon als symbool te gebruiken.",
  "Bloemenmarkt": "De kraampjes staan letterlijk op woonboten in de gracht.",
  "Magere Brug": "De verlichting maakt de Magere Brug 's avonds een van de meest gefotografeerde plekken van de stad.",
  "Dam / Koninklijk Paleis": "Een bekend Amsterdams gezegde luidt zelfs dat de halve stad \"op palen\" staat.",
  "Brandenburger Tor": "Pas na Napoleons nederlaag keerde het beeld terug naar Berlijn.",
  "Reichstag": "De koepel is een bewust ontworpen statement over open bestuur na de Duitse hereniging.",
  "East Side Gallery": "Dit muurschilderij is een van de meest gefotografeerde plekken van Berlijn.",
  "Checkpoint Charlie": "Het bordje staat in het Engels, Russisch, Frans en Duits.",
  "Fernsehturm": "Tot ergernis van het atheïstische DDR-regime vormde het zonlicht een kruis op de bol.",
  "Gendarmenmarkt": "Ze zijn bewust als \"tweeling\" ontworpen, maar zeker geen exacte kopie van elkaar.",
  "Pergamonmuseum (Museumsinsel)": "De poort is stukje bij beetje gereconstrueerd uit originele Babylonische tegels.",
  "Berliner Dom": "Dit is een van de grootste vorstelijke grafkelders van Europa.",
  "Holocaust-Mahnmal": "Hoe verder je het veld in loopt, hoe hoger de zuilen worden en hoe dieper de grond zakt.",
  "Siegessäule (Tiergarten)": "De vergulde overwinningsengel is al sinds 1873 een herkenningspunt van de stad.",
  "Torre de Belém": "Een van de vroegste afbeeldingen van een neushoorn in de Europese kunst.",
  "Mosteiro dos Jerónimos": "Het klooster werd mede gefinancierd met belasting op de specerijenhandel die zijn reis opleverde.",
  "Tram 28": "De straten zijn zo smal dat de tram soms letterlijk de gevels raakt.",
  "Castelo de São Jorge": "De pauwen lopen hier al decennia vrij rond tussen de bezoekers.",
  "Praça do Comércio": "Het plein heette vroeger zelfs Terreiro do Paço, \"paleisplein\".",
  "Elevador de Santa Justa": "De ijzerconstructie doet niet toevallig aan de Eiffeltoren denken.",
  "Parlementsgebouw": "Ook de Sint-Stefansbasiliek is precies even hoog, met dezelfde symboliek.",
  "Kettingbrug": "Een fabeltje trouwens - ze hebben wel degelijk een tong, je ziet die van beneden af alleen niet goed.",
  "Vissersbastion": "De torens verwijzen naar de zeven Magyaarse stammen die Hongarije stichtten.",
  "Heldenplein": "Onderaan de zuil staan de zeven stamhoofden, met Gabriël erboven.",
  "Széchenyi-bad": "Het schaken in het buitenbad is een van de bekendste beelden van dit thermaalbad.",
  "Grote Markthal": "De felgekleurde Zsolnay-tegels zijn typisch Hongaarse art nouveau.",
  "Burcht van Buda": "Deze funicular dateert al uit 1870.",
  "Grote Synagoge (Dohány utca)": "Dit is de grootste synagoge van Europa, met een indrukwekkend herdenkingsmonument in de tuin.",
  "Schoenen aan de Donau": "Slachtoffers moesten hun schoenen uittrekken voor ze in de Donau werden geschoten; dit sobere monument herdenkt hen.",
  "Gellértberg / Citadella": "Het beeld stond oorspronkelijk symbool voor de Sovjet-bevrijding, later herduid als algemeen vrijheidssymbool.",
  "San Marcoplein": "Wat je nu ziet is dus geen middeleeuws origineel, maar een vroeg 20e-eeuwse herbouw.",
  "Basiliek San Marco": "De originelen (geroofd uit Constantinopel) zijn te kwetsbaar voor buiten.",
  "Dogenpaleis": "De brug verbond het paleis met de gevangenis erachter.",
  "Rialtobrug": "De brug is zo breed dat er een hele winkelstraat op past.",
  "Canal Grande": "Er hangen geen verkeerslichten boven het water, dus dit is hun manier van communiceren.",
  "Burano": "Elke kleurencombinatie was oorspronkelijk aan één familie/huis gekoppeld.",
  "Sagrada Familia": "De Geboortegevel is juist rijk versierd door Gaudí zelf; de Passiegevel kwam later, in een compleet andere stijl.",
  "Park Güell": "Dit mozaïekdier is een van de meest gefotografeerde plekken van Barcelona.",
  "Casa Batlló": "Het dak lijkt op de rug van een draak, de schoorsteen op een zwaard.",
  "La Boqueria (markt aan La Rambla)": "Het mozaïek markeert de hoofdentree van deze beroemde markthal.",
  "Barri Gòtic (brug in Carrer del Bisbe)": "De neogotische brug is een vroeg 20e-eeuwse toevoeging, ontworpen om oud te lijken.",
  "Montjuïc (Font Màgica)": "De Font Màgica draait sinds de Wereldtentoonstelling van 1929 shows op muziek.",
  "Sagrada Familia (Passiegevel, extra)": "Het is een \"magisch vierkant\", ontworpen door beeldhouwer Subirachs.",
  "Casa Milà (La Pedrera)": "Gaudí ontwierp de golvende, natuurlijke steengevel met opzet zonder rechte hoeken.",
  "Plaça Nova (Barri Gòtic)": "Barcelona (Barcino) was ooit een Romeinse stad, en deze torens horen bij de oude stadspoort.",
  "Palau de la Música Catalana": "Het glazen \"zonlicht\" is het beroemdste element van deze modernistische concertzaal.",
  "Karelsbrug": "De sokkel is op die plek gepolijst door talloze handen.",
  "Astronomische Klok": "De Dood trekt aan een koord voordat de apostelenparade begint.",
  "Praagse Burcht": "Pištěk won een Oscar voor de kostuums in de film Amadeus.",
  "Gouden Straatje (Zlatá ulička)": "Kafka woonde en werkte hier korte tijd op nummer 22.",
  "Sint-Vituskathedraal": "Mucha's felle kleuren en vloeiende figuren steken sterk af tegen de rest van de gotische ramen.",
  "Joodse Wijk (Josefov) - Oude Joodse Begraafplaats": "Joden mochten eeuwenlang niet buiten dit kleine gebied begraven worden, dus stapelden de lagen zich op.",
  "Vyšehrad": "Vyšehrad geldt als de legendarische bakermat van Praag en herbergt het \"Slavín\", het ereperk van de natie.",
  "Petřín-toren": "De toren werd in 1891 gebouwd, na een bezoek van Tsjechische toeristen aan de Parijse Wereldtentoonstelling.",
  "Dansend Huis (Tančící dům)": "De vloeiende glazen toren en de stevige stenen toren samen doen denken aan een dansend paar.",
  "Oudestadsplein - Jan Hus-monument": "Hus werd in 1415 als ketter verbrand; het monument werd exact een halve eeuw eerder gepland dan onthuld.",
  "Neues Rathaus (Marienplatz)": "De figuren beelden een 16e-eeuws ridderfeest en de \"Schäfflertanz\" (kuipersdans) uit.",
  "Frauenkirche": "De legende zegt dat de duivel hier stampte toen hij zag dat de kerk toch ramen had.",
  "Englischer Garten (Eisbach)": "De Eisbach-golf is wereldberoemd onder stadssurfers.",
  "Schloss Nymphenburg (Schönheitengalerie)": "Ludwig I liet uit heel Beieren vrouwen schilderen die hij mooi vond, ongeacht hun afkomst.",
  "Viktualienmarkt": "Elk beschilderd paneel toont een ander traditioneel beroep uit de stad.",
  "Hofbräuhaus": "Het Hofbräuhaus werd opgericht als hofbrouwerij van de Beierse hertogen.",
  "Olympiapark": "Het dak werd gebouwd voor de Olympische Spelen van 1972 en is nog steeds baanbrekend qua constructie.",
  "BMW Welt / BMW Museum": "De vier ronde torens stellen letterlijk vier cilinders voor.",
  "Asamkirche": "De gebroeders Asam bouwden de kerk letterlijk als privékapel naast hun eigen huis.",
  "Allianz Arena": "De duizenden opblaasbare panelen kunnen per wedstrijd van kleur wisselen.",
  "Duomo di Milano": "Het dakterras is een van de weinige plekken waar je zo dicht tussen de gotische spitsen kunt lopen.",
  "Galleria Vittorio Emanuele II": "Het is een bekend, wat ondeugend Milanees ritueel voor geluk.",
  "Teatro alla Scala": "Het museum grenst direct aan de theaterzaal en biedt vaak ook zicht op het podium.",
  "Santa Maria delle Grazie": "Het muurschilderij is zo kwetsbaar dat bezoekersaantallen strikt beperkt worden.",
  "Castello Sforzesco": "Michelangelo werkte tot vlak voor zijn dood aan dit beeld.",
  "Navigli": "Da Vinci werkte lange tijd in Milaan en droeg bij aan het sluizenontwerp.",
  "Basilica di Sant'Ambrogio": "De slang zou volgens de legende teruggaan naar het Dal van Josafat, waar Mozes hem ooit zou hebben gemaakt.",
  "Cimitero Monumentale": "Het Famedio geldt als het \"pantheon\" van beroemde Milanezen, met Manzoni op de ereplek.",
  "Bosco Verticale": "Deze \"vliegende tuinlieden\" abseilen langs de gevel om de duizenden planten te snoeien en verzorgen.",
  "Stadio San Siro (Giuseppe Meazza)": "Het stadion wordt gedeeld door aartsrivalen AC Milan en Inter, en is vernoemd naar Giuseppe Meazza, die voor beide clubs speelde.",
  "Akropolis / Parthenon": "Dit heet \"entasis\" - een bewuste architectonische illusie van de oude Grieken.",
  "Erechtheion": "De originele beelden staan veilig in het Akropolismuseum.",
  "Ancient Agora - Hephaestus-tempel": "Doordat de tempel later als kerk werd gebruikt, bleef hij ongewoon goed intact.",
  "Panathenaic Stadium (Kallimarmaro)": "Het is het enige stadion ter wereld dat volledig uit marmer is opgetrokken, en gastheer van de eerste moderne Olympische Spelen in 1896.",
  "Syntagma-plein (Evzones-wachters)": "De kenmerkende trage, hoge pas is uniek voor de Griekse ceremoniële wacht.",
  "Akropolismuseum": "Onder het museum liggen archeologische opgravingen die zichtbaar bleven door een glazen vloer.",
  "Tempel van Olympische Zeus": "Het was ooit de grootste tempel van Griekenland, nu grotendeels in ruïne.",
  "Lycabettusheuvel": "Dit is het hoogste punt van Athene, met een adembenemend uitzicht over de stad.",
  "Hadrianusboog": "De boog markeerde letterlijk de grens tussen het oude Athene en het nieuwe, Romeinse Athene van Hadrianus.",
  "Plaka": "De smalle steegjes en lage huizen dateren van lang voor de moderne stad eromheen.",
  "Greyfriars Bobby (standbeeld)": "Duizenden handen hebben de patina van zijn neus weggewreven.",
  "Edinburgh Castle": "Deze traditie diende ooit om schepen in de haven de tijd te geven.",
  "Royal Mile": "Dit oude steegje werd letterlijk overbouwd toen er nieuwe gebouwen bovenop kwamen.",
  "Arthur's Seat": "De rotsformaties zijn duidelijk vulkanisch van oorsprong.",
  "Calton Hill": "Het monument staat lokaal bekend als \"Edinburgh's Disgrace\" (de schande van Edinburgh).",
  "Holyrood Palace": "De abdij raakte na de Reformatie in verval en ligt nu als open ruïne naast het paleis."
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
  palma: [
    {
      route: "Loop vanaf Parc de la Mar omhoog richting La Seu en kies de trappen of paden langs de oude muren.",
      watch: "Let op hoe de kathedraal groter wordt terwijl het water achter je juist als spiegel en open ruimte blijft werken.",
    },
    {
      route: "Loop vanaf La Seu langs de westkant naar het Palau de l'Almudaina.",
      watch: "Vergelijk de gotische hoogte van de kathedraal met het compactere, vestingachtige paleis ernaast.",
    },
    {
      route: "Loop vanaf de Almudaina terug langs de kathedraal en ga de oude stad in richting de Banys Àrabs.",
      watch: "Kijk hoe de grote monumentale ruimte snel verandert in smalle, stille straten met oudere stadslagen.",
    },
    {
      route: "Loop vanaf de Banys Àrabs via de oude binnenstad naar Plaça de Cort.",
      watch: "Let op patios, bochten en smalle straatprofielen; Palma voelt hier meer als doolhof dan als boulevardstad.",
    },
    {
      route: "Loop vanaf Plaça de Cort een kort stuk naar Can Forteza Rey en kijk onderweg naar de gevels rond het plein.",
      watch: "Zoek hoe bestuur en stedelijke sierlijkheid bijna direct naast elkaar zitten.",
    },
    {
      route: "Loop vanaf Can Forteza Rey noordwaarts naar Mercat de l'Olivar.",
      watch: "Let op hoe winkelstraten, lokale drukte en dagelijkse boodschappen de monumentale route aardser maken.",
    },
    {
      route: "Loop vanaf Mercat de l'Olivar terug richting het zuiden en westen naar La Llotja.",
      watch: "Kijk hoe de stad weer richting oude havenwijk beweegt: straten worden smaller en horeca en koopmansgeschiedenis komen dichterbij.",
    },
    {
      route: "Loop vanaf La Llotja via de oude havenwijk naar Es Baluard.",
      watch: "Let op hoe gotische handel, restaurants en vestingmuren elkaar in korte afstand opvolgen.",
    },
    {
      route: "Daal vanaf Es Baluard rustig af richting Passeig Marítim en de jachthaven.",
      watch: "Kijk onderweg terug naar de stad: de muren, masten en kathedraal komen langzaam weer in één zichtlijn.",
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
  paris: [
    {
      "route": "Start bij Montmartre. Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Montmartre naar Palais Garnier (Opera). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Palais Garnier (Opera) naar Place de la Concorde. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van Place de la Concorde naar Arc de Triomphe. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Arc de Triomphe naar Eiffeltoren. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Eiffeltoren naar Musée d'Orsay. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Musée d'Orsay naar Louvre (glazen piramide). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Louvre (glazen piramide) naar Pont Neuf. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op zichtlijnen over het water en hoe de stad aan beide kanten anders aanvoelt."
    },
    {
      "route": "Loop van Pont Neuf naar Notre-Dame. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Notre-Dame naar Panthéon. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    }
  ],
  rome: [
    {
      "route": "Start bij Colosseum. Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Colosseum naar Circus Maximus. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Circus Maximus naar Bocca della Verità. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Bocca della Verità naar Campo de' Fiori. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Campo de' Fiori naar Piazza Navona. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van Piazza Navona naar Pantheon. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Pantheon naar Trevifontein. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Trevifontein naar Spaanse Trappen. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Spaanse Trappen naar Castel Sant'Angelo. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Castel Sant'Angelo naar Sint-Pietersplein. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    }
  ],
  amsterdam: [
    {
      "route": "Start bij Anne Frank Huis. Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Anne Frank Huis naar Westerkerk. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Westerkerk naar Dam / Koninklijk Paleis. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Dam / Koninklijk Paleis naar Bloemenmarkt. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van Bloemenmarkt naar Magere Brug. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op zichtlijnen over het water en hoe de stad aan beide kanten anders aanvoelt."
    },
    {
      "route": "Loop van Magere Brug naar Rijksmuseum. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    }
  ],
  berlin: [
    {
      "route": "Start bij Siegessäule (Tiergarten). Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Siegessäule (Tiergarten) naar Reichstag. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Reichstag naar Brandenburger Tor. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Brandenburger Tor naar Holocaust-Mahnmal. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Holocaust-Mahnmal naar Gendarmenmarkt. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van Gendarmenmarkt naar Checkpoint Charlie. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Checkpoint Charlie naar Pergamonmuseum (Museumsinsel). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Pergamonmuseum (Museumsinsel) naar Berliner Dom. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Berliner Dom naar Fernsehturm. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Fernsehturm naar East Side Gallery. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    }
  ],
  lisbon: [
    {
      "route": "Start bij Torre de Belém. Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Torre de Belém naar Mosteiro dos Jerónimos. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Neem vanaf Belém de tram, trein of bus terug richting Baixa en wandel daarna naar Praça do Comércio.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Praça do Comércio naar Elevador de Santa Justa. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Elevador de Santa Justa naar Tram 28. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Tram 28 naar Castelo de São Jorge. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    }
  ],
  budapest: [
    {
      "route": "Start bij Heldenplein. Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van Heldenplein naar Széchenyi-bad. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Neem voor deze overgang de metro of tram richting het centrum; vanaf daar pak je de wandeling weer op bij Grote Synagoge (Dohány utca).",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Grote Synagoge (Dohány utca) naar Grote Markthal. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van Grote Markthal naar Gellértberg / Citadella. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Gellértberg / Citadella naar Burcht van Buda. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Burcht van Buda naar Vissersbastion. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Vissersbastion naar Kettingbrug. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op zichtlijnen over het water en hoe de stad aan beide kanten anders aanvoelt."
    },
    {
      "route": "Loop van Kettingbrug naar Schoenen aan de Donau. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op zichtlijnen over het water en hoe de stad aan beide kanten anders aanvoelt."
    },
    {
      "route": "Loop van Schoenen aan de Donau naar Parlementsgebouw. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    }
  ],
  venice: [
    {
      "route": "Start bij San Marcoplein. Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van San Marcoplein naar Basiliek San Marco. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Basiliek San Marco naar Dogenpaleis. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Dogenpaleis naar Rialtobrug. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op zichtlijnen over het water en hoe de stad aan beide kanten anders aanvoelt."
    },
    {
      "route": "Loop van Rialtobrug naar Canal Grande. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op zichtlijnen over het water en hoe de stad aan beide kanten anders aanvoelt."
    },
    {
      "route": "Neem vanaf de omgeving van de Canal Grande de vaporetto richting Burano. Dit is bewust een bootstuk: start de volgende opdracht pas op het eiland zelf.",
      "watch": "Let op hoe anders het tempo, de kleuren en de schaal van Burano voelen vergeleken met Venetië zelf."
    }
  ],
  barcelona: [
    {
      "route": "Start bij Park Güell. Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Park Güell naar Sagrada Familia. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Sagrada Familia naar Sagrada Familia (Passiegevel, extra). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Sagrada Familia (Passiegevel, extra) naar Casa Milà (La Pedrera). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Casa Milà (La Pedrera) naar Casa Batlló. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Casa Batlló naar Palau de la Música Catalana. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Palau de la Música Catalana naar Plaça Nova (Barri Gòtic). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Plaça Nova (Barri Gòtic) naar Barri Gòtic (brug in Carrer del Bisbe). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op zichtlijnen over het water en hoe de stad aan beide kanten anders aanvoelt."
    },
    {
      "route": "Loop van Barri Gòtic (brug in Carrer del Bisbe) naar La Boqueria (markt aan La Rambla). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van La Boqueria (markt aan La Rambla) naar Montjuïc (Font Màgica). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    }
  ],
  prague: [
    {
      "route": "Start bij Petřín-toren. Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Petřín-toren naar Praagse Burcht. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Praagse Burcht naar Sint-Vituskathedraal. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Sint-Vituskathedraal naar Gouden Straatje (Zlatá ulička). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Gouden Straatje (Zlatá ulička) naar Karelsbrug. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op zichtlijnen over het water en hoe de stad aan beide kanten anders aanvoelt."
    },
    {
      "route": "Loop van Karelsbrug naar Oudestadsplein - Jan Hus-monument. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van Oudestadsplein - Jan Hus-monument naar Astronomische Klok. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Astronomische Klok naar Joodse Wijk (Josefov) - Oude Joodse Begraafplaats. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Joodse Wijk (Josefov) - Oude Joodse Begraafplaats naar Dansend Huis (Tančící dům). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Dansend Huis (Tančící dům) naar Vyšehrad. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    }
  ],
  munich: [
    {
      "route": "Start bij Allianz Arena. Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Dit is een grotere verplaatsing; kijk juist naar de overgang tussen centrum en buitenwijk."
    },
    {
      "route": "Neem voor dit stuk de U-Bahn of tram in plaats van te lopen. Stap pas weer over op de wandelroute zodra je bij BMW Welt / BMW Museum bent.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van BMW Welt / BMW Museum naar Olympiapark. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Olympiapark naar Englischer Garten (Eisbach). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Englischer Garten (Eisbach) naar Frauenkirche. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Frauenkirche naar Neues Rathaus (Marienplatz). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van Neues Rathaus (Marienplatz) naar Viktualienmarkt. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van Viktualienmarkt naar Hofbräuhaus. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Hofbräuhaus naar Asamkirche. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Neem voor dit stuk de U-Bahn of tram in plaats van te lopen. Stap pas weer over op de wandelroute zodra je bij Schloss Nymphenburg (Schönheitengalerie) bent.",
      "watch": "Dit is een grotere verplaatsing; kijk juist naar de overgang tussen centrum en buitenwijk."
    }
  ],
  milan: [
    {
      "route": "Start bij Stadio San Siro (Giuseppe Meazza). Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Dit is een grotere verplaatsing; kijk juist naar de overgang tussen centrum en buitenwijk."
    },
    {
      "route": "Neem voor dit lange stuk de metro richting het centrum en wandel vanaf de dichtstbijzijnde halte naar Santa Maria delle Grazie.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Santa Maria delle Grazie naar Basilica di Sant'Ambrogio. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Basilica di Sant'Ambrogio naar Navigli. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Navigli naar Castello Sforzesco. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Castello Sforzesco naar Cimitero Monumentale. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Cimitero Monumentale naar Bosco Verticale. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Bosco Verticale naar Teatro alla Scala. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Teatro alla Scala naar Galleria Vittorio Emanuele II. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Galleria Vittorio Emanuele II naar Duomo di Milano. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    }
  ],
  athens: [
    {
      "route": "Start bij Lycabettusheuvel. Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Lycabettusheuvel naar Syntagma-plein (Evzones-wachters). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let op hoe straten naar deze open ruimte toe trekken en waar mensen vanzelf blijven staan."
    },
    {
      "route": "Loop van Syntagma-plein (Evzones-wachters) naar Panathenaic Stadium (Kallimarmaro). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Panathenaic Stadium (Kallimarmaro) naar Tempel van Olympische Zeus. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Tempel van Olympische Zeus naar Hadrianusboog. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Hadrianusboog naar Akropolismuseum. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Akropolismuseum naar Akropolis / Parthenon. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Akropolis / Parthenon naar Erechtheion. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Erechtheion naar Plaka. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Plaka naar Ancient Agora - Hephaestus-tempel. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    }
  ],
  edinburgh: [
    {
      "route": "Start bij Edinburgh Castle. Neem eerst even de tijd om je op de kaart te oriënteren voordat je de eerste opdracht opent.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Edinburgh Castle naar Greyfriars Bobby (standbeeld). Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Greyfriars Bobby (standbeeld) naar Royal Mile. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Royal Mile naar Holyrood Palace. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Holyrood Palace naar Arthur's Seat. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    },
    {
      "route": "Loop van Arthur's Seat naar Calton Hill. Kies waar mogelijk de route via pleinen, kades of winkelstraten zodat de wandeling zelf ook iets laat zien.",
      "watch": "Let onderweg op gevels, straatnamen, hoogteverschillen en drukte; die verraden vaak de geschiedenis van de buurt."
    }
  ]
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
  "Parc de la Mar Palma": "Kom hier rond zonsondergang terug voor het mooiste zicht op La Seu en de weerspiegeling in het water.",
  "La Seu Catedral de Mallorca": "Bezoek La Seu van binnen als je tijd hebt; het licht, het grote roosvenster en de ingrepen van Gaudí maken de buitenkant nog interessanter.",
  "Palau de l'Almudaina": "Loop door Hort del Rei naast het paleis of bezoek de Almudaina zelf als je de koninklijke laag van Palma beter wilt zien.",
  "Banys Àrabs Palma": "Ga naar binnen als het open is; de tuin en de kleine ruimte maken de Moorse laag veel tastbaarder dan alleen van buiten.",
  "Plaça de Cort": "Neem hier kort pauze bij een café en kijk naar de oude olijfboom; het plein is klein, maar blijft een goed observatiepunt.",
  "Can Forteza Rey": "Loop ook even naar Gran Hotel CaixaForum in de buurt als je meer modernisme in Palma wilt zien.",
  "Mercat de l'Olivar": "Proef iets kleins in of rond de markt, bijvoorbeeld ensaïmada, sobrasada of verse vis als je wat langer wilt blijven.",
  "La Llotja de Palma": "Blijf in de wijk rond La Llotja voor tapas of een drankje; dit is een van de fijnste avonddelen van de oude stad.",
  "Es Baluard": "Bezoek Es Baluard Museu of pak alleen het uitzicht vanaf de vestingrand; beide passen mooi bij deze stop.",
  "Passeig Marítim Palma": "Sluit af met een drankje aan de haven of neem later een taxi/bus naar Castell de Bellver voor een hoger uitzicht over de baai.",
  "Douglas Sea Terminal en havenbrug": "Kijk later bij aankomst of vertrek van een ferry; dan voel je de rol van Douglas als eilandpoort het best.",
  "Jubilee Clock Douglas": "Loop even Victoria Street in; dan zie je hoe de klok winkelstad, haven en promenade aan elkaar knoopt.",
  "Tower of Refuge zichtpunt": "Loop bij laag of hoog tij nog eens terug naar het uitzichtpunt; de baai verandert dan zichtbaar.",
  "Loch Promenade en Marine Gardens": "Neem rustig een koffie langs de promenade en kijk hoe weer, licht en water het stadsbeeld veranderen.",
  "Gaiety Theatre Douglas": "Check het avondprogramma of een rondleiding; het theater is sterker als je ook iets van de binnenwereld ziet.",
  "Douglas Bay Horse Tramway halte": "Rijd een stukje met de paardentram als hij rijdt; langzaam reizen past perfect bij deze promenade.",
  "Manx Museum": "Ga naar binnen als je tijd hebt; het museum is een van de beste plekken om Isle of Man echt te begrijpen.",
  "Great Union Camera Obscura Douglas Head": "Blijf boven even zitten voor het uitzicht over de baai, vooral als het licht aan het einde van de dag zachter wordt.",
  "Eiffeltoren": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Notre-Dame": "Tip: ga naar binnen als dat kan, of loop helemaal rond het gebouw; aan de zijkanten zie je vaak de mooiste details.",
  "Louvre (glazen piramide)": "Tip: plan hier later extra tijd om ook echt naar binnen te gaan; Louvre (glazen piramide) werkt het best als je niet hoeft te haasten.",
  "Montmartre": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Arc de Triomphe": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Pont Neuf": "Tip: loop na de opdracht nog even naar het midden van de brug voor het beste zicht op de stad en het water.",
  "Musée d'Orsay": "Tip: plan hier later extra tijd om ook echt naar binnen te gaan; Musée d'Orsay werkt het best als je niet hoeft te haasten.",
  "Panthéon": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Palais Garnier (Opera)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Place de la Concorde": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Colosseum": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Trevifontein": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Pantheon": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Spaanse Trappen": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Sint-Pietersplein": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Piazza Navona": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Bocca della Verità": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Circus Maximus": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Castel Sant'Angelo": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Campo de' Fiori": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Anne Frank Huis": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Rijksmuseum": "Tip: plan hier later extra tijd om ook echt naar binnen te gaan; Rijksmuseum werkt het best als je niet hoeft te haasten.",
  "Westerkerk": "Tip: ga naar binnen als dat kan, of loop helemaal rond het gebouw; aan de zijkanten zie je vaak de mooiste details.",
  "Bloemenmarkt": "Tip: proef of koop iets kleins in de buurt van Bloemenmarkt; zo voelt deze stop meteen minder als kijken en meer als meedoen.",
  "Magere Brug": "Tip: loop na de opdracht nog even naar het midden van de brug voor het beste zicht op de stad en het water.",
  "Dam / Koninklijk Paleis": "Tip: kijk of er tuinen, binnenplaatsen of uitzichtpunten bij Dam / Koninklijk Paleis liggen; die vertellen vaak net zo veel als het hoofdgebouw.",
  "Brandenburger Tor": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Reichstag": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "East Side Gallery": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Checkpoint Charlie": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Fernsehturm": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Gendarmenmarkt": "Tip: proef of koop iets kleins in de buurt van Gendarmenmarkt; zo voelt deze stop meteen minder als kijken en meer als meedoen.",
  "Pergamonmuseum (Museumsinsel)": "Tip: plan hier later extra tijd om ook echt naar binnen te gaan; Pergamonmuseum (Museumsinsel) werkt het best als je niet hoeft te haasten.",
  "Berliner Dom": "Tip: ga naar binnen als dat kan, of loop helemaal rond het gebouw; aan de zijkanten zie je vaak de mooiste details.",
  "Holocaust-Mahnmal": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Siegessäule (Tiergarten)": "Tip: neem hier juist even pauze. Een korte wandeling door het groen maakt de volgende stadsetappe veel fijner.",
  "Torre de Belém": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Mosteiro dos Jerónimos": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Tram 28": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Castelo de São Jorge": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Praça do Comércio": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Elevador de Santa Justa": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Parlementsgebouw": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Kettingbrug": "Tip: loop na de opdracht nog even naar het midden van de brug voor het beste zicht op de stad en het water.",
  "Vissersbastion": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Heldenplein": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Széchenyi-bad": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Grote Markthal": "Tip: proef of koop iets kleins in de buurt van Grote Markthal; zo voelt deze stop meteen minder als kijken en meer als meedoen.",
  "Burcht van Buda": "Tip: kijk of er tuinen, binnenplaatsen of uitzichtpunten bij Burcht van Buda liggen; die vertellen vaak net zo veel als het hoofdgebouw.",
  "Grote Synagoge (Dohány utca)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Schoenen aan de Donau": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Gellértberg / Citadella": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "San Marcoplein": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Basiliek San Marco": "Tip: ga naar binnen als dat kan, of loop helemaal rond het gebouw; aan de zijkanten zie je vaak de mooiste details.",
  "Dogenpaleis": "Tip: kijk of er tuinen, binnenplaatsen of uitzichtpunten bij Dogenpaleis liggen; die vertellen vaak net zo veel als het hoofdgebouw.",
  "Rialtobrug": "Tip: loop na de opdracht nog even naar het midden van de brug voor het beste zicht op de stad en het water.",
  "Canal Grande": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Burano": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Sagrada Familia": "Tip: ga naar binnen als dat kan, of loop helemaal rond het gebouw; aan de zijkanten zie je vaak de mooiste details.",
  "Park Güell": "Tip: neem hier juist even pauze. Een korte wandeling door het groen maakt de volgende stadsetappe veel fijner.",
  "Casa Batlló": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "La Boqueria (markt aan La Rambla)": "Tip: proef of koop iets kleins in de buurt van La Boqueria (markt aan La Rambla); zo voelt deze stop meteen minder als kijken en meer als meedoen.",
  "Barri Gòtic (brug in Carrer del Bisbe)": "Tip: loop na de opdracht nog even naar het midden van de brug voor het beste zicht op de stad en het water.",
  "Montjuïc (Font Màgica)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Sagrada Familia (Passiegevel, extra)": "Tip: ga naar binnen als dat kan, of loop helemaal rond het gebouw; aan de zijkanten zie je vaak de mooiste details.",
  "Casa Milà (La Pedrera)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Plaça Nova (Barri Gòtic)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Palau de la Música Catalana": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Karelsbrug": "Tip: loop na de opdracht nog even naar het midden van de brug voor het beste zicht op de stad en het water.",
  "Astronomische Klok": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Praagse Burcht": "Tip: kijk of er tuinen, binnenplaatsen of uitzichtpunten bij Praagse Burcht liggen; die vertellen vaak net zo veel als het hoofdgebouw.",
  "Gouden Straatje (Zlatá ulička)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Sint-Vituskathedraal": "Tip: ga naar binnen als dat kan, of loop helemaal rond het gebouw; aan de zijkanten zie je vaak de mooiste details.",
  "Joodse Wijk (Josefov) - Oude Joodse Begraafplaats": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Vyšehrad": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Petřín-toren": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Dansend Huis (Tančící dům)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Oudestadsplein - Jan Hus-monument": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Neues Rathaus (Marienplatz)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Frauenkirche": "Tip: ga naar binnen als dat kan, of loop helemaal rond het gebouw; aan de zijkanten zie je vaak de mooiste details.",
  "Englischer Garten (Eisbach)": "Tip: neem hier juist even pauze. Een korte wandeling door het groen maakt de volgende stadsetappe veel fijner.",
  "Schloss Nymphenburg (Schönheitengalerie)": "Tip: kijk of er tuinen, binnenplaatsen of uitzichtpunten bij Schloss Nymphenburg (Schönheitengalerie) liggen; die vertellen vaak net zo veel als het hoofdgebouw.",
  "Viktualienmarkt": "Tip: proef of koop iets kleins in de buurt van Viktualienmarkt; zo voelt deze stop meteen minder als kijken en meer als meedoen.",
  "Hofbräuhaus": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Olympiapark": "Tip: neem hier juist even pauze. Een korte wandeling door het groen maakt de volgende stadsetappe veel fijner.",
  "BMW Welt / BMW Museum": "Tip: plan hier later extra tijd om ook echt naar binnen te gaan; BMW Welt / BMW Museum werkt het best als je niet hoeft te haasten.",
  "Asamkirche": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Allianz Arena": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Duomo di Milano": "Tip: ga naar binnen als dat kan, of loop helemaal rond het gebouw; aan de zijkanten zie je vaak de mooiste details.",
  "Galleria Vittorio Emanuele II": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Teatro alla Scala": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Santa Maria delle Grazie": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Castello Sforzesco": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Navigli": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Basilica di Sant'Ambrogio": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Cimitero Monumentale": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Bosco Verticale": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Stadio San Siro (Giuseppe Meazza)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Akropolis / Parthenon": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Erechtheion": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Ancient Agora - Hephaestus-tempel": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Panathenaic Stadium (Kallimarmaro)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Syntagma-plein (Evzones-wachters)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Akropolismuseum": "Tip: plan hier later extra tijd om ook echt naar binnen te gaan; Akropolismuseum werkt het best als je niet hoeft te haasten.",
  "Tempel van Olympische Zeus": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Lycabettusheuvel": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Hadrianusboog": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Plaka": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Greyfriars Bobby (standbeeld)": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Edinburgh Castle": "Tip: kijk of er tuinen, binnenplaatsen of uitzichtpunten bij Edinburgh Castle liggen; die vertellen vaak net zo veel als het hoofdgebouw.",
  "Royal Mile": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Arthur's Seat": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Calton Hill": "Tip: zoek na deze stop een café, museum of klein uitzichtpunt in de directe omgeving en blijf nog tien minuten in deze buurt hangen.",
  "Holyrood Palace": "Tip: kijk of er tuinen, binnenplaatsen of uitzichtpunten bij Holyrood Palace liggen; die vertellen vaak net zo veel als het hoofdgebouw."
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
      <div class="admin-card promo-admin-card">
        <div>
          <span class="pill">Promo</span>
          <h2>Deelbare promotiefilmpjes</h2>
          <p>Maak verticale video’s voor Instagram, TikTok of stories. Op mobiel opent direct het deelvenster.</p>
        </div>
        <div class="admin-promo-actions">
          <button class="button primary" type="button" data-admin-promo="install" data-promo-label="Installeer nu">
            Installeer nu
          </button>
          <button class="button ghost" type="button" data-admin-promo="intro" data-promo-label="App intro">
            App intro
          </button>
          <button class="button ghost" type="button" data-admin-promo="question" data-promo-label="Voorbeeldvraag">
            Voorbeeldvraag
          </button>
          <button class="button ghost" type="button" data-admin-promo="unlock" data-promo-label="Locatie unlock">
            Locatie unlock
          </button>
        </div>
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
          <div class="next-route-card complete-route-card">
            <span class="pill">Route afgerond</span>
            <h3>Alle opdrachten zijn goed beantwoord</h3>
            <p>
              Bekijk nu je eindbadge als los deelbaar scherm. Ideaal voor een screenshot of story.
            </p>
          </div>
          <div class="hero-actions">
            <button class="button primary" type="button" data-show-expert-card="${tour.id}">
              Voltooi de route
            </button>
            <button class="button ghost" type="button" data-close-answer-dialog>Sluiten</button>
          </div>
        `
    }
  `;
  openDialog(answerDialog);
};

const showExpertCompletionCard = (tourId) => {
  if (!answerContent) return;
  const tour = tours.find((item) => item.id === tourId);
  if (!tour) return;

  answerContent.innerHTML = `
    ${renderExpertCelebration(tour)}
    <div class="hero-actions">
      <button class="button primary" type="button" data-share-expert-card="${tour.id}">Deel resultaat</button>
      <button class="button ghost" type="button" data-close-answer-dialog>Tour bekijken</button>
      <button class="button ghost" type="button" data-close-answer-dialog>Sluiten</button>
    </div>
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
  const showExpertCard = event.target.closest("[data-show-expert-card]");
  const shareExpertCard = event.target.closest("[data-share-expert-card]");
  const adminPromo = event.target.closest("[data-admin-promo]");
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

  if (showExpertCard) {
    showExpertCompletionCard(showExpertCard.dataset.showExpertCard);
  }

  if (shareExpertCard) {
    shareCompletionCard(shareExpertCard.dataset.shareExpertCard);
  }

  if (adminPromo) {
    sharePromoVideo(adminPromo.dataset.adminPromo);
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
