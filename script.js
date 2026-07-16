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
];

const storageKey = "stadsopdracht-progress";
const sessionStorageKey = "stadsopdracht-session";
const supabaseConfig = {
  url: "https://pkhyreudjcdkzhrjtdpi.supabase.co",
  anonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBraHlyZXVkamNka3pocmp0ZHBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxNDgyMzUsImV4cCI6MjA5OTcyNDIzNX0.S0R34ryoWYBMHU-8fYJsR73MLNK2gnANAgJPjZHqmBE",
};

const tourGrid = document.querySelector("[data-tour-grid]");
const stopList = document.querySelector("[data-stop-list]");
const assignmentPanel = document.querySelector("[data-assignment-panel]");
const tourStatus = document.querySelector("[data-tour-status]");
const accountActions = document.querySelector("[data-account-actions]");
const installCallout = document.querySelector("[data-install-callout]");
const checkoutDialog = document.querySelector("[data-checkout-dialog]");
const checkoutContent = document.querySelector("[data-checkout-content]");
const authDialog = document.querySelector("[data-auth-dialog]");
const authContent = document.querySelector("[data-auth-content]");

let selectedTourId = null;
let selectedStopIndex = 0;
let userLocation = null;
let locationMessage = "Locatie nog niet actief.";
let paymentTimer = null;
let authClient = null;
let session = null;
let remoteProgress = {};
let authMessage = "";
let deferredInstallPrompt = null;
let installHelpVisible = false;

const unlockRadiusMeters = 100;
const paymentProcessingMs = 40000;

const hasAccountStorage = () => Boolean(supabaseConfig.url && supabaseConfig.anonKey);

const authHeaders = (accessToken = null) => ({
  apikey: supabaseConfig.anonKey,
  Authorization: `Bearer ${accessToken || supabaseConfig.anonKey}`,
  "Content-Type": "application/json",
});

const readStoredSession = () => {
  try {
    return JSON.parse(localStorage.getItem(sessionStorageKey) || "null");
  } catch {
    return null;
  }
};

const storeSession = (nextSession) => {
  if (nextSession) {
    localStorage.setItem(sessionStorageKey, JSON.stringify(nextSession));
    return;
  }

  localStorage.removeItem(sessionStorageKey);
};

const createRestSupabaseClient = () => ({
  auth: {
    async signUp({ email, password }) {
      const response = await fetch(`${supabaseConfig.url}/auth/v1/signup`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({ email, password }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) return { data: {}, error: { message: payload.msg || payload.message || "Account maken mislukt." } };

      return {
        data: {
          session: payload.access_token
            ? {
                access_token: payload.access_token,
                refresh_token: payload.refresh_token,
                user: payload.user,
              }
            : null,
          user: payload.user,
        },
        error: null,
      };
    },
    async signInWithPassword({ email, password }) {
      const response = await fetch(`${supabaseConfig.url}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({ email, password }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) return { data: {}, error: { message: payload.msg || payload.message || "Inloggen mislukt." } };

      const nextSession = {
        access_token: payload.access_token,
        refresh_token: payload.refresh_token,
        user: payload.user,
      };
      storeSession(nextSession);
      return { data: { session: nextSession, user: payload.user }, error: null };
    },
    async getSession() {
      return { data: { session: readStoredSession() }, error: null };
    },
    async signOut() {
      storeSession(null);
      return { error: null };
    },
    onAuthStateChange() {
      return { data: { subscription: { unsubscribe() {} } } };
    },
  },
  from(tableName) {
    return {
      async upsert(rows, options = {}) {
        const query = options.onConflict ? `?on_conflict=${encodeURIComponent(options.onConflict)}` : "";
        const response = await fetch(`${supabaseConfig.url}/rest/v1/${tableName}${query}`, {
          method: "POST",
          headers: {
            ...authHeaders(session?.access_token),
            Prefer: "resolution=merge-duplicates,return=minimal",
          },
          body: JSON.stringify(rows),
        });

        if (!response.ok) {
          const payload = await response.json().catch(() => ({}));
          return { data: null, error: { message: payload.message || "Opslaan mislukt." } };
        }

        return { data: null, error: null };
      },
      select(columns) {
        return {
          async eq(field, value) {
            const response = await fetch(
              `${supabaseConfig.url}/rest/v1/${tableName}?select=${encodeURIComponent(columns)}&${field}=eq.${encodeURIComponent(value)}`,
              { headers: authHeaders(session?.access_token) },
            );
            const payload = await response.json().catch(() => []);
            if (!response.ok) return { data: null, error: { message: payload.message || "Laden mislukt." } };
            return { data: payload, error: null };
          },
        };
      },
    };
  },
});

const createAuthClient = () =>
  window.supabase?.createClient
    ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
    : createRestSupabaseClient();

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

const getProgress = () => {
  if (session) return remoteProgress;
  return {};
};

const saveProgress = (progress) => {
  if (!session || !authClient) {
    localStorage.setItem(storageKey, JSON.stringify(progress));
    return;
  }

  remoteProgress = progress;
  syncProgress(progress).catch(() => {
    showToast("Voortgang kon nu niet online worden opgeslagen.");
  });
};

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

const syncProgress = async (progress) => {
  if (!session || !authClient) return;

  const rows = Object.entries(progress).map(([tourId, state]) => ({
    user_id: session.user.id,
    tour_id: tourId,
    unlocked: Boolean(state.unlocked),
    completed: state.completed || [],
    purchased_at: state.unlocked ? new Date().toISOString() : null,
  }));

  if (!rows.length) return;

  const { error } = await authClient.from("user_tours").upsert(rows, {
    onConflict: "user_id,tour_id",
  });

  if (error) throw error;
};

const loadUserProgress = async () => {
  if (!session || !authClient) {
    remoteProgress = {};
    return;
  }

  const { data, error } = await authClient
    .from("user_tours")
    .select("tour_id, unlocked, completed")
    .eq("user_id", session.user.id);

  if (error) {
    remoteProgress = {};
    showToast("Je account is geladen, maar voortgang nog niet.");
    return;
  }

  remoteProgress = (data || []).reduce((progress, item) => {
    progress[item.tour_id] = {
      unlocked: Boolean(item.unlocked),
      completed: item.completed || [],
    };
    return progress;
  }, {});
};

const refreshApp = () => {
  renderAccount();
  renderInstallCallout();
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
  renderTours();
  openTour(tourId);
  showToast(session ? "Tour ontgrendeld voor je account." : "Tour ontgrendeld.");
};

const renderAccount = () => {
  if (!accountActions) return;

  if (!hasAccountStorage()) {
    accountActions.innerHTML = `
      <button class="button ghost small" type="button" data-open-auth="setup">
        Account koppelen
      </button>
    `;
    return;
  }

  if (session?.user) {
    accountActions.innerHTML = `
      <span class="account-email">${session.user.email}</span>
      <button class="button ghost small" type="button" data-sign-out>
        Uitloggen
      </button>
    `;
    return;
  }

  accountActions.innerHTML = `
    <button class="button ghost small" type="button" data-open-auth="login">
      Inloggen
    </button>
    <button class="button primary small" type="button" data-open-auth="signup">
      Account maken
    </button>
  `;
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

const renderAuthForm = (mode = "login") => {
  const isSignup = mode === "signup";
  const title = isSignup ? "Account maken" : "Inloggen";
  const actionLabel = isSignup ? "Account maken" : "Inloggen";
  const switchLabel = isSignup ? "Ik heb al een account" : "Nieuw account maken";
  const switchMode = isSignup ? "login" : "signup";

  authContent.innerHTML = `
    <span class="pill">Account</span>
    <h2>${title}</h2>
    <p>
      Log eerst in voordat je een route koopt. Zo bewaren we je aankoop en voortgang bij je account,
      ook als je later op een ander toestel verdergaat.
    </p>
    ${authMessage ? `<p class="auth-message">${authMessage}</p>` : ""}
    <form class="auth-form" data-auth-form="${mode}">
      <label>
        E-mailadres
        <input name="email" type="email" autocomplete="email" required />
      </label>
      <label>
        Wachtwoord
        <input name="password" type="password" autocomplete="${
          isSignup ? "new-password" : "current-password"
        }" minlength="6" required />
      </label>
      <button class="button primary" type="submit">${actionLabel}</button>
    </form>
    <button class="text-button" type="button" data-open-auth="${switchMode}">
      ${switchLabel}
    </button>
  `;
};

const openAuthDialog = (mode = "login", message = "") => {
  authMessage = message;

  if (!hasAccountStorage()) {
    authContent.innerHTML = `
      <span class="pill">Accountlaag</span>
      <h2>Accounts nog koppelen</h2>
      <p>
        De app is voorbereid op accounts, aankopen en online voortgang. Vul straks de Supabase URL
        en anon key in script.js in om inloggen en accountopslag live te zetten.
      </p>
      <p class="auth-message">Daarna moeten bezoekers eerst inloggen voordat ze kunnen betalen.</p>
    `;
    openDialog(authDialog);
    return;
  }

  renderAuthForm(mode);
  openDialog(authDialog);
};

const handleAuthSubmit = async (form) => {
  if (!authClient) return;

  const mode = form.dataset.authForm;
  const formData = new FormData(form);
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const submitButton = form.querySelector("button[type='submit']");

  submitButton.disabled = true;
  submitButton.textContent = "Even wachten...";

  const result =
    mode === "signup"
      ? await authClient.auth.signUp({ email, password })
      : await authClient.auth.signInWithPassword({ email, password });

  if (result.error) {
    authMessage = result.error.message;
    renderAuthForm(mode);
    return;
  }

  if (mode === "signup" && !result.data.session) {
    authMessage = "Account gemaakt. Controleer je e-mail en log daarna in.";
    renderAuthForm("login");
    return;
  }

  session = result.data.session || session;
  storeSession(session);
  await loadUserProgress();
  closeDialog(authDialog);
  refreshApp();
  showToast(mode === "signup" ? "Account gemaakt." : "Je bent ingelogd.");
};

const signOut = async () => {
  if (!authClient) return;
  await authClient.auth.signOut();
  session = null;
  remoteProgress = {};
  refreshApp();
  showToast("Je bent uitgelogd.");
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

  if (!isUnlocked(tour.id)) {
    stopList.innerHTML = `
      <div class="preview-stop-list">
        <span class="pill">Preview</span>
        <strong>${tour.city} Centro</strong>
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
          <span>Maak eerst een account. Daarna kun je betalen en wordt je voortgang online bewaard.</span>
        </div>
        <div class="hero-actions">
          <button class="button primary" type="button" data-buy-tour="${tour.id}">
            Koop en open route
          </button>
          <button class="button ghost" type="button" data-open-auth="signup">
            Account maken
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
  selectedStopIndex = stopIndex;
  renderStops();
  renderAssignment();
  document.querySelector("#mijn-tour").scrollIntoView({ behavior: "smooth", block: "start" });
};

const openCheckout = (tourId) => {
  const tour = tours.find((item) => item.id === tourId);
  if (!tour) return;

  if (!session?.user) {
    openAuthDialog("login", "Maak eerst een account of log in. Daarna kun je betalen en bewaren we je route.");
    return;
  }

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
    <div class="processing-card" role="status" aria-live="polite">
      <span class="processing-spinner" aria-hidden="true"></span>
      <strong>Even geduld</strong>
      <span>We zetten je Málaga-route klaar.</span>
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
  const openAuth = event.target.closest("[data-open-auth]");
  const signOutButton = event.target.closest("[data-sign-out]");
  const installButton = event.target.closest("[data-install-app]");
  const installHelpButton = event.target.closest("[data-show-install-help]");

  if (buyButton) openCheckout(buyButton.dataset.buyTour);
  if (openButton) openTour(openButton.dataset.openTour);
  if (openAuth) openAuthDialog(openAuth.dataset.openAuth);
  if (signOutButton) signOut();
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

document.addEventListener("submit", (event) => {
  const authForm = event.target.closest("[data-auth-form]");
  if (!authForm) return;

  event.preventDefault();
  handleAuthSubmit(authForm);
});

const initAuth = async () => {
  if (!hasAccountStorage()) {
    refreshApp();
    return;
  }

  authClient = createAuthClient();

  const { data } = await authClient.auth.getSession();
  session = data.session;
  await loadUserProgress();

  authClient.auth.onAuthStateChange(async (_event, nextSession) => {
    session = nextSession;
    await loadUserProgress();
    refreshApp();
  });

  refreshApp();
};

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

initAuth();

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
