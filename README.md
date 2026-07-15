# Stadsopdracht webapp

Nieuwe conceptversie voor interactieve stadsrondleidingen op `stadsopdracht.nl`.

## Wat zit erin

- Mobiele webapp-layout voor Android en iOS
- PWA-bestanden: `manifest.webmanifest`, `service-worker.js` en app-icon
- Tourwinkel met prijzen
- Accountflow voor inloggen en registreren
- Aankoop en voortgang per account via Supabase
- Interactieve stops met opdrachten, hints en voortgang
- Rabobank-betaalverzoek met iDEAL/Wero-tekst

## Accounts koppelen

De app is voorbereid op Supabase Auth en een `user_tours` tabel. Maak een Supabase-project aan,
voer `SUPABASE_SETUP.sql` uit in de SQL editor en vul daarna bovenin `script.js` deze waarden in:

```js
const supabaseConfig = {
  url: "https://jouw-project.supabase.co",
  anonKey: "jouw-public-anon-key",
};
```

Zolang deze waarden leeg zijn, toont de app dat accounts nog gekoppeld moeten worden en kunnen
bezoekers niet betalen.

## Betalingen koppelen

In `script.js` staat per tour een veld `paymentUrl`. Daar staat nu het Rabobank betaalverzoek:

```js
paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=...",
```

De app vraagt eerst om inloggen. Daarna opent de betaalpagina en wordt de route na verwerking aan
het account gekoppeld. Later kan dit worden vervangen door Mollie of Stripe met webhooks voor
volledige betaalcontrole.

## Online zetten met Cloudflare Pages

Deze map is geschikt voor Cloudflare Pages via GitHub. Gebruik in Cloudflare:

```text
Framework preset: None
Build command: leeg laten
Build output directory: /
Production branch: main
```

Laat de build/deploy command leeg. Gebruik hier geen `npx wrangler deploy`.

Zie `CLOUDFLARE_DEPLOY.md` voor de volledige stap-voor-stap uitleg.
