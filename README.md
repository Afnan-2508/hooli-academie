# Hooli Académie HFC — site web (HTML / CSS / JS)

hooli-academie-html/
├── index.html        structure of the page
├── css/style.css     all styling (design tokens, light + dark)
├── js/main.js        FR/EN switch, WhatsApp form, smooth scroll
├── img/              logo and photos
└── og-image.jpg      social share preview

## Run it
Open index.html in a browser. No build step, no dependencies.

## Deploy
Drag this whole folder onto netlify.com ("Add new site" -> "Deploy manually").

## Edit the text
Every translatable element carries data-fr and data-en attributes.
js/main.js swaps them when the FR / EN buttons are clicked.
Use a "|" inside the text to force a line break.

## Colours
All colours are CSS custom properties at the top of css/style.css,
declared three times: :root (light), prefers-color-scheme dark,
and [data-theme="dark"]. Change a token once and it applies everywhere.

## Contact form
By default the form opens WhatsApp with the message pre-filled.
To email it instead, set FORMSPREE_ID at the top of js/main.js
to a form id from formspree.io.
