# Stadsopdracht webapp

Nieuwe conceptversie voor interactieve stadsrondleidingen op `stadsopdracht.nl`.

## Wat zit erin

- Mobiele webapp-layout voor Android en iOS
- PWA-bestanden: `manifest.webmanifest`, `service-worker.js` en app-icon
- Tourwinkel met prijzen
- Demo-aankoop om tours lokaal te ontgrendelen
- Interactieve stops met opdrachten, hints en voortgang
- Lokale voortgang via browseropslag

## Betalingen koppelen

In `script.js` staat per tour een veld `paymentUrl`.

Vul daar een echte checkout-link in, bijvoorbeeld van Mollie Payment Links, Stripe Payment Links of een eigen backend-checkout:

```js
paymentUrl: "https://jouw-betaalprovider.nl/checkout/...",
```

Voor productie is de beste volgende stap:

1. Maak per tour een betaalproduct aan bij Mollie of Stripe.
2. Laat de knop naar de checkout gaan.
3. Laat je betaalprovider na betaling terugsturen naar een succespagina.
4. Ontgrendel de tour met een unieke toegangscode of account-login.

De huidige demo-ontgrendeling is bedoeld voor testen en presentatie, niet als definitieve betaalbeveiliging.

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
