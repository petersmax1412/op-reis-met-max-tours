# Cloudflare Pages deploy

Deze map is klaar om als statische website via GitHub naar Cloudflare Pages te deployen.

## Aanbevolen GitHub-structuur

Maak een nieuwe GitHub-repository, bijvoorbeeld:

```text
op-reis-met-max-tours
```

Upload of push de inhoud van deze map als root van die repository:

```text
index.html
styles.css
script.js
manifest.webmanifest
service-worker.js
robots.txt
sitemap.xml
_headers
_redirects
assets/
```

## Cloudflare Pages instellingen

Kies in Cloudflare:

```text
Workers & Pages → Create application → Pages → Connect to Git
```

Gebruik daarna deze instellingen:

```text
Framework preset: None
Build command: leeg laten
Build output directory: /
Root directory: leeg laten
Production branch: main
```

Cloudflare geeft daarna automatisch een `*.pages.dev` URL.

## Eigen domein koppelen

Na de eerste deploy:

```text
Pages project → Custom domains → Set up a domain
```

Voor een hoofddomein zoals `voorbeeld.nl` moet het domein als Cloudflare zone in je account staan.
Voor een subdomein zoals `tours.voorbeeld.nl` kun je een CNAME naar je `*.pages.dev` domein gebruiken.

## Na domeinkeuze aanpassen

Pas deze bestanden aan naar je echte domein:

- `sitemap.xml`
- `robots.txt`
- eventueel teksten in `index.html`

Bronnen:

- Cloudflare Pages Git integration: https://developers.cloudflare.com/pages/get-started/git-integration/
- Cloudflare Pages custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
