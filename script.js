const tours = [
  {
    id: "malaga",
    city: "Málaga",
    title: "Málaga Centro: sporen van zon, steen en zee",
    price: "€4,49",
    duration: "120 min",
    distance: "3,2 km",
    paymentUrl: "",
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
];

const storageKey = "stadsopdracht-progress";
const tourGrid = document.querySelector("[data-tour-grid]");
const stopList = document.querySelector("[data-stop-list]");
const assignmentPanel = document.querySelector("[data-assignment-panel]");
const tourStatus = document.querySelector("[data-tour-status]");
const checkoutDialog = document.querySelector("[data-checkout-dialog]");
const checkoutContent = document.querySelector("[data-checkout-content]");

let selectedTourId = null;
let selectedStopIndex = 0;
let userLocation = null;
let locationMessage = "Locatie nog niet actief.";

const unlockRadiusMeters = 100;

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

const getRoutePoints = (tour) => {
  const coords = tour.stops.map((stop) => stop.coordinates);
  const minLat = Math.min(...coords.map((coord) => coord.lat));
  const maxLat = Math.max(...coords.map((coord) => coord.lat));
  const minLng = Math.min(...coords.map((coord) => coord.lng));
  const maxLng = Math.max(...coords.map((coord) => coord.lng));
  const latRange = maxLat - minLat || 1;
  const lngRange = maxLng - minLng || 1;

  return coords.map((coord) => ({
    x: 18 + ((coord.lng - minLng) / lngRange) * 64,
    y: 82 - ((coord.lat - minLat) / latRange) * 64,
  }));
};

const renderMiniMap = (tour, activeIndex) => {
  const points = getRoutePoints(tour);
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const pins = points
    .map(
      (point, index) => `
        <g class="route-pin ${index === activeIndex ? "active" : ""} ${completedStops(tour.id).includes(index) ? "done" : ""}">
          <circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="5.5"></circle>
          <text x="${point.x.toFixed(1)}" y="${(point.y + 1.8).toFixed(1)}">${index + 1}</text>
        </g>
      `,
    )
    .join("");

  return `
    <svg class="mini-map" viewBox="0 0 100 100" role="img" aria-label="Routekaart Málaga met actieve stop">
      <rect x="2" y="2" width="96" height="96" rx="8"></rect>
      <path d="${path}"></path>
      ${pins}
    </svg>
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

const unlockTour = (tourId) => {
  const progress = getProgress();
  progress[tourId] = {
    unlocked: true,
    completed: progress[tourId]?.completed || [],
  };
  saveProgress(progress);
  renderTours();
  openTour(tourId);
  showToast("Tour ontgrendeld op dit toestel.");
};

const renderTours = () => {
  tourGrid.innerHTML = tours
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
        ${renderMiniMap(tour, selectedStopIndex)}
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
  selectedStopIndex = stopIndex;
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
    <div class="hero-actions">
      <button class="button primary" type="button" data-demo-unlock="${tour.id}">
        Demo-aankoop afronden
      </button>
      ${
        tour.paymentUrl
          ? `<a class="button ghost" href="${tour.paymentUrl}" rel="noopener">Naar betaalpagina</a>`
          : `<button class="button ghost" type="button" data-payment-missing>Betaallink ontbreekt</button>`
      }
    </div>
    <p>
      Productieversie: vul per tour een Mollie- of Stripe-checkoutlink in, of koppel een backend
      die na betaling een unieke toegangscode terugstuurt.
    </p>
  `;

  checkoutDialog.showModal();
};

document.addEventListener("click", (event) => {
  const buyButton = event.target.closest("[data-buy-tour]");
  const openButton = event.target.closest("[data-open-tour]");
  const stopButton = event.target.closest("[data-stop-index]");
  const answerButton = event.target.closest("[data-answer-choice]");
  const locationButton = event.target.closest("[data-use-location]");
  const demoUnlock = event.target.closest("[data-demo-unlock]");
  const paymentMissing = event.target.closest("[data-payment-missing]");

  if (buyButton) openCheckout(buyButton.dataset.buyTour);
  if (openButton) openTour(openButton.dataset.openTour);

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

  if (demoUnlock) {
    checkoutDialog.close();
    unlockTour(demoUnlock.dataset.demoUnlock);
  }

  if (paymentMissing) {
    showToast("Vul straks je echte Mollie- of Stripe-betaallink in.");
  }
});

renderTours();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}
