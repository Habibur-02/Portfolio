# Md Habibur Rahman — Portfolio

Personal portfolio. Vite + React + Framer Motion. **Single font (Inter), recruiter-friendly format.**

## Sections (in order)

1. **Hero** — Name, role, location, summary, CTAs (Resume, Email, GitHub, LinkedIn)
2. **Work Experience** — Delineate (YC W25) with 4 metric-driven bullet points
3. **Education** — RUET + coursework
4. **Technical Skills** — 6 grouped cards (Languages, AI/ML, Frameworks, Backend, DB, Cloud)
5. **Projects** — Civic Feedback Platform + SmartNutriPlan
6. **Hackathons & Competitions** — 4 hackathons (BUET, CUET, HackTheAI, AI Engineering)
7. **Achievements** — ICSC, ICPC (table style)
8. **Competitive Programming** — Codeforces (484), LeetCode (100), VirtualJudge (170)
9. **Get In Touch** — Email, Phone, Location, LinkedIn

Clear separation. No mixing AI work with hackathons.

## Run locally

\`\`\`bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produces dist/
\`\`\`

## Edit content

Open \`src/App.jsx\` — top of file has \`DATA = { ... }\`. All names, links, projects, bullets, tags live there.

## Deploy

**Vercel (easiest):** push to GitHub → import on vercel.com → done.

**GitHub Pages:** Edit \`vite.config.js\` base to \`/REPO-NAME/\`, then \`npm run deploy\`.

## Add your resume

Drop \`resume.pdf\` in \`public/\` folder. "Download Resume" button auto-links to it.

## Customize

\`src/styles.css\` line 11 — change \`--accent: #4f8cf7;\` to any hex color.
Try: \`#10b981\` (green), \`#a855f7\` (purple), \`#f59e0b\` (amber).
