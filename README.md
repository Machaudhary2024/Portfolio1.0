# Mehar Akbar — Portfolio

A modern, recruiter-focused developer portfolio showcasing projects, skills, and credentials.

**Live site:** [machaudhary2024.github.io/Portfolio1.0](https://machaudhary2024.github.io/Portfolio1.0/)

## Features

- Responsive single-page design with smooth animations
- Featured projects pulled from [GitHub](https://github.com/Machaudhary2024)
- Certifications & awards from professional profile
- Contact form via [Formspree](https://formspree.io) (replace placeholder URL)

## Setup Formspree

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your form endpoint
3. In `index.html`, replace `YOUR_FORM_ID` in the form action:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

## Local Development

Open `index.html` in a browser, or use a local server:

```bash
npx serve .
```

## Deploy (GitHub Pages) — IMPORTANT

The `gh-pages` branch deploy was failing. Use **`main`** branch instead:

### Fix in 30 seconds

1. Open **[Settings → Pages](https://github.com/Machaudhary2024/Portfolio1.0/settings/pages)**
2. Under **Build and deployment → Source**, select **Deploy from a branch**
3. Set **Branch: `main`** and **Folder: `/ (root)`**
4. Click **Save**
5. Wait 2–5 minutes, then visit:

   **https://machaudhary2024.github.io/Portfolio1.0/**

### If you still see 404

Try these URLs (the dot in the repo name can cause caching delays):

- https://machaudhary2024.github.io/Portfolio1.0/index.html
- https://machaudhary2024.github.io/Portfolio1.0/?v=1

Or switch folder to **`/docs`** (site files are duplicated there too).

### Confirm it worked

On the Pages settings page you should see a green box:
`Your site is live at https://machaudhary2024.github.io/Portfolio1.0/`

Check **[Actions](https://github.com/Machaudhary2024/Portfolio1.0/actions)** — the latest **"pages build and deployment"** run should show ✅ success (not ❌ deploy failure).

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Inter + JetBrains Mono)
- No build step required

## Contact

- **Email:** machaudhary87@gmail.com
- **LinkedIn:** [linkedin.com/in/meher21](https://www.linkedin.com/in/meher21/)
- **GitHub:** [github.com/Machaudhary2024](https://github.com/Machaudhary2024)
