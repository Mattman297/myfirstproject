# Aruba Wakeboard School (AWS) — website

A static, single-page site for Aruba Wakeboard School in Oranjestad. No build step, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and all copy (English source text, with `data-i18n` keys) |
| `styles.css` | Styling. Ocean color theme in `:root` at the top |
| `script.js` | Mobile nav, back-to-top logo, hide-on-scroll header, form validation |
| `i18n.js` | English / Dutch / Spanish translations + the language switcher logic |
| `aws-logo.png` | Logo in the header and footer — white AWS badge on transparent |
| `favicon.png` | Browser-tab / apple-touch icon: white AWS logo on a black square (180×180) |
| `hero.jpg` | Background photo for the hero section (top of the page) |

The original full-size design files (logo art, hi-res hero photo) are not kept in the working
tree, but they're still in git history — e.g. `git checkout 83ab98d -- image1.1.png` restores
the uncompressed hero source. Anything under `sources/` is git-ignored if you re-add it.

The logo art is white with a transparent background; `.brand-logo` in `styles.css` applies
`filter: brightness(0)` to render it solid black in the header and footer. Drop that filter
(or change it) if you swap in already-coloured artwork. `favicon.png` is the white logo on a
teal square — regenerate it the same way if you replace the logo.

## Run it

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Where the content came from

Business details were pulled from public listings (the AWS Facebook page, Tripadvisor,
and web search) and the client:

- **Founded 2008**, Oranjestad — head instructor **Edirik**.
- **Phone / WhatsApp:** +297 731 3297
- **Email:** arubawakeboardschool@gmail.com
- **Location:** Bucutiweg, Oranjestad — listed on Google Maps as "Pure Diving Aruba"
- **Hours:** Saturday & Sunday (sources disagree on 9–6 vs 10–6; page says ~9am–6pm)
- **Sessions:** 30 minutes, $50 per person
- **Boat:** MasterCraft X-Star
- **Wakeboarding only** — the school is specialised in wakeboarding and does not offer other water sports.
- **Reviews:** 5.0 from ~118 reviews on Tripadvisor. The four quotes in the "Riders love it
  here" section are real, lightly trimmed reviews (kocoland, Cincyxile, Frog900, Anais M.),
  attributed by username + city as Tripadvisor shows them.

## Photos & social content

AWS does **not** offer photos or videos of your session as a service — the site is written
so it never implies otherwise. There is no photo gallery section.

- **"See the latest from the water"** embeds the official Facebook Page plugin — it shows the
  page's real posts live and updates itself. It only renders on a real domain (not from
  `file://`) and needs the visitor to be able to reach facebook.com.
- The review quotes bring in the Tripadvisor social proof properly (short, attributed).
- **Hero photo:** `hero.jpg` (the aerial dock shot) sits behind the top of the page under a
  dark wash so the white text stays readable. It's 1400px wide, JPG-compressed to ~415 KB
  from a hi-res original. To swap it, drop a new `hero.jpg` in (or re-export from a new
  source: `sips -s format jpeg -s formatOptions 55 -Z 1400 SOURCE --out hero.jpg`).

## Still to verify / replace

- Confirm exact opening hours.
- The **"3-Session Pack" at $135** is an assumed bundle — adjust or remove it.
- The **callback form** only validates the email. Wire it to a real endpoint (e.g. Formspree)
  in `script.js`, or remove it and rely on the WhatsApp / email buttons.
- Add a proper embedded Google Map.

## Customize

- Colors: edit `--brand`, `--brand-dark`, `--brand-soft` in `styles.css`. Buttons use their
  own `--btn` / `--btn-hover` tokens (currently near-black) — change those to recolour every
  call-to-action at once.
- Copy: all plain text in `index.html`.
- Light theme only — the page renders the same regardless of the visitor's device setting.
- Responsive: single-column below 820px, with the nav collapsing to a top-right dropdown
  panel (the `.nav-drawer` wrapper). Tap anywhere outside it, press Escape, or pick a link
  to close it. Checked for horizontal overflow down to 360px wide.
- The header hides when you scroll down and slides back when you scroll up; it's always
  shown at the very top of the page (`.site-header.hide` toggled from `script.js`).

## Languages

The site ships in **English (default), Dutch and Spanish**. The switcher (EN / NL / ES) lives
in the top-right menu — the header bar on desktop, the dropdown panel on mobile.

- First-time visitors always get English; there's no browser-language auto-detect.
- A visitor's choice is remembered in `localStorage` (`aws-lang`) for their next visit.
- All copy lives in `i18n.js` as three dictionaries keyed by the same string ids. To edit
  wording, change the English string in `i18n.js` (not `index.html`) and the matching NL/ES
  strings. To add a translatable element in `index.html`, give it `data-i18n="some_key"`
  (or `data-i18n-ph` / `data-i18n-al` for a placeholder / aria-label) and add `some_key` to
  all three dictionaries.
- The review quotes are translated too — they were already trimmed paraphrases, not verbatim.

## Deploy

Drop the folder onto Netlify, Vercel, GitHub Pages, or Cloudflare Pages — it's fully static.
