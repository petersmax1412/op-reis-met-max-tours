const tours = [
  {
    id: "amsterdam",
    city: "Amsterdam",
    title: "Jordaan: verborgen details",
    price: "€3,99",
    duration: "90 min",
    distance: "2,8 km",
    paymentUrl: "",
    summary:
      "Een rustige route langs hofjes, gevelstenen en plekken waar je normaal te snel voorbij loopt.",
    stops: [
      {
        title: "Start bij de brug",
        place: "Brouwersgracht",
        assignment: "Zoek drie verschillende soorten gevels aan het water.",
        question: "Welke gevelvorm zie je het vaakst?",
        hint: "Let op de bovenkant van de panden.",
      },
      {
        title: "Gevelsteen speuren",
        place: "Binnen Oranjestraat",
        assignment: "Vind een gevelsteen en bedenk waarom die vroeger handig was.",
        question: "Welk symbool staat erop?",
        hint: "Kijk boven ooghoogte.",
      },
      {
        title: "Stilte in de stad",
        place: "Hofje",
        assignment: "Luister 30 seconden en noteer welke geluiden wegvallen.",
        question: "Wat hoor je hier minder dan op de hoofdstraat?",
        hint: "Vergelijk met de straat waar je net liep.",
      },
      {
        title: "Eindpunt met uitzicht",
        place: "Westerkerk",
        assignment: "Kies je favoriete detail van de route en maak er een korte notitie van.",
        question: "Welk detail onthoud je morgen nog?",
        hint: "Er is geen fout antwoord.",
      },
    ],
  },
  {
    id: "utrecht",
    city: "Utrecht",
    title: "Werfkelders en Domstad",
    price: "€4,49",
    duration: "110 min",
    distance: "3,4 km",
    paymentUrl: "",
    summary:
      "Volg de Oudegracht, ontdek waarom de werfkelders uniek zijn en eindig bij de Dom.",
    stops: [
      {
        title: "Aan de werf",
        place: "Oudegracht",
        assignment: "Tel hoeveel niveaus de straat hier eigenlijk heeft.",
        question: "Waarom is dit handig voor handel?",
        hint: "Denk aan laden en lossen.",
      },
      {
        title: "Steegjes lezen",
        place: "Zadelstraat",
        assignment: "Kies een steeg en beschrijf hoe het licht verandert.",
        question: "Wat maakt deze straat ouderwets of juist modern?",
        hint: "Kijk naar materiaal, breedte en gevels.",
      },
      {
        title: "Domplein",
        place: "Domplein",
        assignment: "Zoek de ruimte tussen toren en kerk en ontdek waarom die er is.",
        question: "Wat gebeurde hier in 1674?",
        hint: "Storm is het sleutelwoord.",
      },
    ],
  },
  {
    id: "antwerpen",
    city: "Antwerpen",
    title: "Havenstad in lagen",
    price: "€3,99",
    duration: "100 min",
    distance: "3,1 km",
    paymentUrl: "",
    summary:
      "Van station tot Schelde: architectuur, handel en kleine observatieopdrachten onderweg.",
    stops: [
      {
        title: "Binnenkomst",
        place: "Centraal Station",
        assignment: "Zoek een detail dat meer op een paleis dan op een station lijkt.",
        question: "Welk materiaal valt het meest op?",
        hint: "Kijk naar steen, glas en metaal.",
      },
      {
        title: "Mode en straten",
        place: "Nationalestraat",
        assignment: "Vergelijk twee etalages en let op wat ze over de stad zeggen.",
        question: "Wat is hier ingetogener dan in een winkelstraat thuis?",
        hint: "Let op kleur en typografie.",
      },
      {
        title: "Aan de Schelde",
        place: "Steenplein",
        assignment: "Kijk naar de rivier en benoem waarom dit een handelsstad werd.",
        question: "Welke richting voelt als vertrek?",
        hint: "Volg het water met je ogen.",
      },
    ],
  },
];

const storageKey = "opreis-met-max-progress";
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
          <div class="answer-row">
            <input type="text" ${locked ? "disabled" : ""} placeholder="${
              locked ? "Koop de tour om antwoorden op te slaan" : "Typ je antwoord"
            }" aria-label="Antwoord" />
            <button class="button primary" type="button" data-complete-stop="${selectedStopIndex}" ${
              locked ? "disabled" : ""
            }>
              Voltooi
            </button>
          </div>
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
  const completeButton = event.target.closest("[data-complete-stop]");
  const demoUnlock = event.target.closest("[data-demo-unlock]");
  const paymentMissing = event.target.closest("[data-payment-missing]");

  if (buyButton) openCheckout(buyButton.dataset.buyTour);
  if (openButton) openTour(openButton.dataset.openTour);

  if (stopButton) {
    selectedStopIndex = Number(stopButton.dataset.stopIndex);
    renderStops();
    renderAssignment();
  }

  if (completeButton && selectedTourId) {
    const progress = getProgress();
    const current = progress[selectedTourId] || { unlocked: true, completed: [] };
    const index = Number(completeButton.dataset.completeStop);
    current.completed = [...new Set([...current.completed, index])];
    progress[selectedTourId] = current;
    saveProgress(progress);
    renderStops();
    renderAssignment();
    showToast("Opdracht opgeslagen.");
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
