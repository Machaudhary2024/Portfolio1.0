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

## Deploy (GitHub Pages)

**Important:** Use **GitHub Actions** as the Pages source (not “Deploy from a branch”).

1. Open [Settings → Pages](https://github.com/Machaudhary2024/Portfolio1.0/settings/pages)
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Save, then go to [Actions](https://github.com/Machaudhary2024/Portfolio1.0/actions) and run **Deploy to GitHub Pages** (or push to `main` to trigger it)
4. Wait 1–3 minutes. Your site will be at:

   **https://machaudhary2024.github.io/Portfolio1.0/**

If you still see 404, try opening:

**https://machaudhary2024.github.io/Portfolio1.0/index.html**

### Alternative (no Actions)

Set Source to **Deploy from a branch** → Branch: **main** → Folder: **/ (root)** → Save.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Inter + JetBrains Mono)
- No build step required

## Contact

- **Email:** machaudhary87@gmail.com
- **LinkedIn:** [linkedin.com/in/meher21](https://www.linkedin.com/in/meher21/)
- **GitHub:** [github.com/Machaudhary2024](https://github.com/Machaudhary2024)
