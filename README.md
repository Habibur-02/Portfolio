# Md Habibur Rahman — Portfolio

Personal portfolio site. Built with Vite + React + Framer Motion.

## Design

**Aesthetic:** Editorial × Terminal. Serif display (Instrument Serif), monospace data labels (JetBrains Mono), warm dark background, single amber accent. Generous whitespace. Big numbers for impact. Asymmetric grid breaks the cookie-cutter "dark blue + yellow CS portfolio" look.

**Sections:**
1. **Hero** — Name, role, status line, CTA buttons
2. **Stats strip** — 484 CF, 750+ problems, 90.6% model accuracy, $0.005/inference
3. **Selected Work** — Featured: Delineate (YC W25) Qwen2.5-VL fine-tuning
4. **Projects** — 4 project cards (SmartNutriPlan, Civic Feedback, Bengali Diarization, Meme Classifier)
5. **Track Record** — Achievements timeline (ICSC, hackathons, ICPC)
6. **Toolkit** — Editorial paragraph-style skills (not boring chips)
7. **Contact** — Email, GitHub, LinkedIn, Codeforces, LeetCode

## Run locally

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → dist/ folder
npm run preview  # preview the production build
```

## Edit content

**One file, one object.** Open `src/App.jsx` — everything is in the `DATA` constant at the top. Change names, links, projects, stats. Save. Hot reloads.

## Deploy

### Option 1: Vercel (easiest, recommended)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → import repo → deploy. Done.
3. Free, custom domain, auto-deploy on push.

### Option 2: GitHub Pages
1. Install: `npm install --save-dev gh-pages` (already in package.json)
2. Edit `vite.config.js`: change `base: '/'` → `base: '/your-repo-name/'`
3. Edit `package.json`: add `"homepage": "https://USERNAME.github.io/REPO-NAME"`
4. Run: `npm run deploy`
5. In GitHub repo settings → Pages → source: `gh-pages` branch

### Option 3: Netlify
1. Push to GitHub
2. Connect on [netlify.com](https://netlify.com), build command `npm run build`, publish dir `dist`

## Add your resume

Drop `resume.pdf` in the `public/` folder. The "Resume / CV" button in the hero already links to `/resume.pdf`.

## Customize the accent color

In `src/styles.css`, line 9:
```css
--accent: #ffae3b;  /* warm amber */
```
Try `#4ade80` (terminal green), `#ff6b6b` (coral), `#a78bfa` (purple), `#60a5fa` (electric blue).

## Customize fonts

In `index.html`, line 11 — swap the Google Fonts URL. Try:
- `Fraunces` instead of Instrument Serif (more characterful)
- `Geist Mono` instead of JetBrains Mono
- `Newsreader` for serif with optical sizing

Then update `src/styles.css` font-family variables.

## File structure

```
habib-portfolio/
├── index.html              # Fonts + meta
├── vite.config.js
├── package.json
├── public/
│   └── (drop resume.pdf here)
└── src/
    ├── main.jsx            # Entry
    ├── App.jsx             # ALL CONTENT + COMPONENTS (one file)
    └── styles.css          # ALL STYLES (one file)
```

Two files to edit. That's it.

## What's different vs the previous portfolio?

- Replaced generic dark-blue + yellow theme with editorial warm-dark + amber
- Big Instrument Serif headlines instead of bland sans-serif
- Asymmetric layout, generous whitespace
- Featured Delineate work prominently (it's CV-gold, deserves more space)
- Removed cliché emojis as section icons
- Stats strip front-loads achievement numbers
- Single-file content editing (no hunting through components)
