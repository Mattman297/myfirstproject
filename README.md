# Aruba Wakeboard School (AWS) — website

A static, single-page site for Aruba Wakeboard School in Oranjestad. No build step, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and all copy |
| `styles.css` | Styling. Ocean color theme in `:root` at the top |
| `script.js` | Mobile nav, callback-form validation, scroll reveal |
| `aws-logo.png` | Logo in the header and footer — white AWS badge, cropped from the source PNG |
| `logo background-Photoroom.png` | Original full-bleed logo art (kept as the source) |
| `favicon.png` | Browser-tab / apple-touch icon: white logo on a teal square |
| `hero.jpg` | Background photo for the hero section (top of the page) |
| `images/` | Drop `ride-1.jpg` … `ride-6.jpg` here for the gallery (see `images/README.md`) |

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
- **Also offered:** waterski, wakeskate, kneeboard, barefoot, hydrofoil
- **Reviews:** 5.0 from ~118 reviews on Tripadvisor. The four quotes in the "Riders love it
  here" section are real, lightly trimmed reviews (kocoland, Cincyxile, Frog900, Anais M.),
  attributed by username + city as Tripadvisor shows them.

## Photos & social content

The Facebook page (`facebook.com/297AWS`) is behind a login wall and Tripadvisor's traveller
photos belong to the people who took them, so neither could be copied directly. Instead:

- **"See the latest from the water"** embeds the official Facebook Page plugin — it shows the
  page's real posts and photos live, and updates itself. It only renders on a real domain
  (not from `file://`), and needs the visitor to be able to reach facebook.com.
- **"On the water"** is a 6-tile gallery. Each tile shows a gradient until you add the
  matching `images/ride-N.jpg` — see `images/README.md`.
- The review quotes bring in the Tripadvisor social proof properly (short, attributed).
- **Hero photo:** `hero.jpg` (the aerial dock shot) sits behind the top of the page under a
  dark wash so the white text stays readable. The current file is only ~550px wide, so it
  looks soft on large screens — replace it with a ~2000px version when you have one.

## Still to verify / replace

- Confirm exact opening hours.
- The **"3-Session Pack" at $135** is an assumed bundle — adjust or remove it.
- The **callback form** only validates the email. Wire it to a real endpoint (e.g. Formspree)
  in `script.js`, or remove it and rely on the WhatsApp / email buttons.
- **Add gallery photos** to `images/` (your own, or from your Facebook page).
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

## Deploy

Drop the folder onto Netlify, Vercel, GitHub Pages, or Cloudflare Pages — it's fully static.
