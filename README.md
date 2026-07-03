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

## Deploy (GitHub Pages) — follow exactly

GitHub still reports Pages as **not enabled** on this repo. Do this once:

### Step 1 — Open Pages settings
[github.com/Machaudhary2024/Portfolio1.0/settings/pages](https://github.com/Machaudhary2024/Portfolio1.0/settings/pages)

### Step 2 — Configure source
Under **Build and deployment**:

| Setting | Value |
|---------|-------|
| **Source** | Deploy from a branch |
| **Branch** | `gh-pages` |
| **Folder** | `/ (root)` |

Click **Save**.

> **Do not** choose “GitHub Actions” unless you switch the workflow — use **Deploy from a branch** with `gh-pages`.

### Step 3 — Wait & visit
Wait 2–5 minutes, then open:

- **https://machaudhary2024.github.io/Portfolio1.0/**
- or **https://machaudhary2024.github.io/Portfolio1.0/index.html**

### If still 404 — try `main` branch instead
| Branch | Folder |
|--------|--------|
| `main` | `/ (root)` |

Site files are at the repo root **and** in `/docs` (either folder works).

### After it works
You should see a green banner on the Pages settings page:
`Your site is live at https://machaudhary2024.github.io/Portfolio1.0/`

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Inter + JetBrains Mono)
- No build step required

## Contact

- **Email:** machaudhary87@gmail.com
- **LinkedIn:** [linkedin.com/in/meher21](https://www.linkedin.com/in/meher21/)
- **GitHub:** [github.com/Machaudhary2024](https://github.com/Machaudhary2024)
