# Stadsopdracht webapp

Nieuwe conceptversie voor interactieve stadsrondleidingen op `stadsopdracht.nl`.

## Wat zit erin

- Mobiele webapp-layout voor Android en iOS
- PWA-bestanden: `manifest.webmanifest`, `service-worker.js` en app-icon
- Tourwinkel met prijzen
- Stedentabs voor Málaga, Düsseldorf, Keulen, Frankfurt, London en Copenhagen
- Ondersteuning voor een verschillend aantal stops per stad
- Aankoop en voortgang lokaal op hetzelfde apparaat
- Interactieve stops met opdrachten, hints en voortgang
- Rabobank-betaalverzoek met iDEAL/Wero-tekst
- Installatie-oproep voor de webapp

## Voortgang bewaren

De huidige versie gebruikt lokale browseropslag. Dat betekent:

- de route blijft open op hetzelfde apparaat en in dezelfde browser;
- de voortgang blijft bewaard zolang de gebruiker browserdata niet wist;
- de aankoop wordt niet automatisch meegenomen naar een ander toestel.

Daarom toont de checkout een duidelijke waarschuwing dat de aankoop alleen op dit apparaat werkt.
De beste korte-termijnoplossing is klanten de webapp op hun telefoon te laten installeren voordat
ze starten.

## Betalingen koppelen

In `script.js` staat per tour een veld `paymentUrl`. Daar staat nu het Rabobank betaalverzoek:

```js
paymentUrl: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=...",
```

Na het openen van de betaalpagina wordt de route na verwerking lokaal op dit apparaat vrijgegeven.
Later kan dit worden vervangen door accounts, toegangscodes of Mollie/Stripe met webhooks voor
volledige betaalcontrole en apparaat-overstijgende voortgang.

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
