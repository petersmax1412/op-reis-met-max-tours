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
    distance: "4,1 km",
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
        title: "Loop langs het water",
        place: "Rheinuferpromenade",
        coordinates: { lat: 51.226, lng: 6.769 },
        assignment:
          "Kijk richting Altstadt en Rijn. Zoek hoe de promenade de stad weer direct met het water verbindt.",
        question: "Waarom is de Rheinuferpromenade belangrijk voor hoe Düsseldorf de Rijn nu gebruikt?",
        hint: "Denk aan de oude verkeersdruk aan de oever en aan wat je hier nu als voetganger kunt doen.",
        choices: [
          {
            text: "De oever werd een verblijfsplek waar je de Altstadt, Rijn en skyline tegelijk ervaart",
            correct: true,
            feedback:
              "Goed gezien. De promenade maakte de Rijn weer onderdeel van het dagelijkse stadsleven: wandelen, zitten, kijken en oversteken horen hier bij elkaar.",
          },
          {
            text: "Omdat de Rijn hier vooral achter gebouwen verstopt blijft",
            correct: false,
            feedback: "Juist niet. De kracht van deze plek is dat je rivier, Altstadt en overkant open kunt lezen.",
          },
          {
            text: "Omdat de promenade alleen bedoeld is als snelle fietsroute zonder verblijf",
            correct: false,
            feedback: "Niet helemaal. Je ziet hier juist banken, trappen, terrassen en zichtpunten die langzaam gebruik uitnodigen.",
          },
        ],
      },
      {
        title: "Lees de Königsallee",
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
        title: "Lees de lichtklok",
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
        title: "Vind de stadspoort",
        place: "Eigelsteintorburg",
        coordinates: { lat: 50.9492, lng: 6.9574 },
        assignment: "Loop om de poort heen en stel je voor waar de oude stadsgrens liep.",
        question: "Wat vertelt de Eigelsteintorburg over de oude grenzen en toegangen van Keulen?",
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
      "Een route door centraal London langs Trafalgar Square, Covent Garden, Borough Market, St Paul’s en de Thames.",
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
const answerDialog = document.querySelector("[data-answer-dialog]");
const answerContent = document.querySelector("[data-answer-content]");
const adminPanel = document.querySelector("[data-admin-panel]");

let selectedTourId = null;
let selectedCityId = "all";
let selectedStopIndex = 0;
let userLocation = null;
let locationMessage = "Locatie nog niet actief.";
let paymentTimer = null;
let deferredInstallPrompt = null;
let installHelpVisible = false;

const unlockRadiusMeters = 100;
const paymentProcessingMs = 40000;
const adminStorageKey = "stadsopdracht-admin";
const adminAccessCode = "max2026";

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

const isAdminMode = () => localStorage.getItem(adminStorageKey) === "active";
const isUnlocked = (tourId) => isAdminMode() || Boolean(getProgress()[tourId]?.unlocked);
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
  Rheinuferpromenade:
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
  Eigelsteintorburg:
    "Een stadspoort was letterlijk een grens. Hier kun je voelen hoe middeleeuws Keulen toegang, handel en veiligheid controleerde.",
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
    <div class="hero-actions">
      ${
        hasNextStop
          ? `<button class="button primary" type="button" data-next-stop>Volgende stop</button>`
          : `<button class="button primary" type="button" data-close-answer-dialog>Tour bekijken</button>`
      }
      <button class="button ghost" type="button" data-close-answer-dialog>Sluiten</button>
    </div>
  `;
  openDialog(answerDialog);
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
    .filter((tour) => selectedCityId === "all" || tour.id === selectedCityId)
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
  const nextStop = event.target.closest("[data-next-stop]");

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

  if (nextStop && selectedTourId) {
    const tour = tours.find((item) => item.id === selectedTourId);
    if (tour && selectedStopIndex < tour.stops.length - 1) {
      selectedStopIndex += 1;
      closeDialog(answerDialog);
      renderStops();
      renderAssignment();
    }
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
