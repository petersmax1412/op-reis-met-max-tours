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

const getProgress = () => JSON.parse(localStorage.getItem(storageKey) || "{}");
const saveProgress = (progress) => localStorage.setItem(storageKey, JSON.stringify(progress));

const isUnlocked = (tourId) => Boolean(getProgress()[tourId]?.unlocked);
const completedStops = (tourId) => getProgress()[tourId]?.completed || [];

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
          <h3>Vraag</h3>
          <p>${stop.question}</p>
          <div class="answer-options" role="group" aria-label="Antwoordopties">
            ${stop.choices
              .map(
                (choice, choiceIndex) => `
                  <button class="answer-option" type="button" data-answer-choice="${choiceIndex}" ${
                    locked ? "disabled" : ""
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
                : "Kies het antwoord dat volgens jou het best past."
          }</p>
        </div>
      </div>
      <aside class="assignment-box">
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
  const demoUnlock = event.target.closest("[data-demo-unlock]");
  const paymentMissing = event.target.closest("[data-payment-missing]");

  if (buyButton) openCheckout(buyButton.dataset.buyTour);
  if (openButton) openTour(openButton.dataset.openTour);

  if (stopButton) {
    selectedStopIndex = Number(stopButton.dataset.stopIndex);
    renderStops();
    renderAssignment();
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
