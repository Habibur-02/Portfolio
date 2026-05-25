import { motion } from 'framer-motion';

/* =========================================================
   CONFIGURE YOUR PORTFOLIO HERE
   All content is in this object — edit values, save, done.
   ========================================================= */
const DATA = {
  name: 'Md Habibur Rahman',
  role: 'AI Engineer',
  location: 'Rajshahi, Bangladesh',
  status: 'Available Q3 2026',
  email: 'habibur.ruet10@gmail.com',
  github: 'https://github.com/Habibur-02',
  linkedin: 'https://www.linkedin.com/in/habibur02/',
  codeforces: 'https://codeforces.com/profile/Habibur-02',
  leetcode: 'https://leetcode.com/u/Habibur-02/',
  resumeUrl: '/resume.pdf', // Drop your PDF in /public folder

  tagline:
    'Building vision-language models that reason about charts, documents, and the visual structure of information.',

  stats: [
    { num: '484', label: 'Codeforces' },
    { num: '750+', label: 'Problems Solved' },
    { num: '90.6%', label: 'Model Accuracy' },
    { num: '$0.005', label: 'Cost / Inference' },
  ],

  featured: {
    company: 'Delineate',
    companyMeta: 'YC W25 · Massachusetts, USA · Remote',
    role: 'AI Engineer Intern',
    period: 'Feb 2026 — Present',
    title: 'Fine-tuned a 7B vision-language model to outperform commercial LLMs on chart reasoning.',
    highlights: [
      {
        bold: 'Complex chart reasoning.',
        rest: ' Fine-tuned Qwen2.5-VL-7B with LoRA adapters for chart-data consistency verification on synthetic pharmaceutical line charts — achieving',
        metric: ' 90.6% balanced accuracy and 100% precision',
        end: ' on error detection.',
      },
      {
        bold: 'Beat the Gemini 3.1 Preview Lite API.',
        rest: ' Built a DaViT-based classifier for line vs. spider plot detection. Outperformed Gemini by',
        metric: ' 0.31%',
        end: ' on a custom benchmark dataset.',
      },
      {
        bold: 'Production inference.',
        rest: ' Deployed as a Modal cloud function with a hybrid OCR + Levenshtein fuzzy-matching pipeline. Handles single and batch requests on A10G GPUs at',
        metric: ' ~$0.005 / request.',
        end: '',
      },
      {
        bold: 'End-to-end pipeline.',
        rest: ' Architected reproducible training runs on AWS SageMaker with AdamW-8bit, synthetic dataset filtering (22K samples), JSON-weighted custom loss for structured outputs, and stratified validation.',
        metric: '',
        end: '',
      },
    ],
  },

  projects: [
    {
      title: 'SmartNutriPlan',
      subtitle: 'AI-Powered Nutrition Recommendation System',
      desc:
        'End-to-end AI nutrition system trained on 8,789 food items × 77 attributes. Disease-specific scoring algorithms, KMeans clustering for similarity, integrated LLM chatbot for personalized meal plans.',
      tags: ['Python', 'KMeans', 'LLM', 'Streamlit'],
      link: 'https://github.com/Habibur-02',
    },
    {
      title: 'Civic Feedback & Governance',
      subtitle: 'HackTheAI 2025 — Finalist (Top 50 / 250)',
      desc:
        'AI-driven civic feedback platform analyzing citizen reports. Integrated Gemini 2.5 Flash for categorization, urgency scoring, spam detection, with local NLP fallback. Real-time analytics dashboards for issue trends.',
      tags: ['Streamlit', 'SQLite', 'Gemini 2.5', 'NLP'],
      link: 'https://github.com/Habibur-02',
    },
    {
      title: 'Bengali Speaker Diarization',
      subtitle: 'BUET CSE Fest 2026 — 6th Place',
      desc:
        'Deep learning model for speaker diarization on long-form conversational Bengali audio. Generates speaker-wise time segments. Team DeadNeuronSocity, ranked 6th in the speaker diarization challenge.',
      tags: ['PyTorch', 'Audio ML', 'Kaggle'],
      link: 'https://github.com/Habibur-02',
    },
    {
      title: 'Political Meme Classifier',
      subtitle: 'CUET CSE Fest 2025 Datathon — Top 20 / 150',
      desc:
        'Image-based classification system distinguishing political vs. non-political memes. Combined CNN architectures with vision-language models (VLMs) on a custom-labeled dataset.',
      tags: ['CNN', 'VLM', 'Computer Vision'],
      link: 'https://github.com/Habibur-02',
    },
  ],

  achievements: [
    { year: '2026', title: 'BUET CSE Fest — DL Sprint 4.0', sub: 'Bengali Speaker Diarization · Team DeadNeuronSocity', result: '6th Place' },
    { year: '2026', title: 'AI Engineer Intern @ Delineate', sub: 'YC W25 · Remote', result: 'Current' },
    { year: '2025', title: 'International Computer Science Competition (ICSC)', sub: 'Global qualifier round', result: 'Pre-final' },
    { year: '2025', title: 'HackTheAI 2025', sub: 'AI Civic Feedback Project · Team Backprop', result: 'Top 50 / 250' },
    { year: '2025', title: 'CUET CSE Fest Datathon', sub: 'Political Meme Classification', result: 'Top 20 / 150' },
    { year: '2025', title: 'AI Engineering Hackathon', sub: 'Intent-Based Search System', result: 'Top 50' },
    { year: '2022', title: 'ICPC Asia Regional Preliminary', sub: 'Solved 3 problems', result: '167th Nationally' },
  ],
};

/* =========================================================
   COMPONENTS
   ========================================================= */

function FadeIn({ children, delay = 0, y = 16 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-brand-symbol">◐</span>
          habibur.rahman
        </a>
        <div className="nav-links">
          <a href="#work" className="nav-link">work</a>
          <a href="#projects" className="nav-link">projects</a>
          <a href="#contact" className="nav-link">contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container">
        <FadeIn>
          <div className="hero-meta">
            <span>{DATA.role}</span>
            <span>{DATA.location}</span>
            <span>{DATA.status}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="hero-title">
            Md Habibur<br />
            <em>Rahman.</em>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="hero-tagline">{DATA.tagline}</p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              View work →
            </a>
            <a href={DATA.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn">
              Resume / CV
            </a>
            <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="btn">
              GitHub ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </header>
  );
}

function Stats() {
  return (
    <FadeIn>
      <div className="container">
        <div className="stats">
          {DATA.stats.map((s, i) => (
            <div key={i} className="stat">
              <div className="stat-num">
                <em>{s.num}</em>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function Work() {
  const f = DATA.featured;
  return (
    <section id="work">
      <div className="container">
        <FadeIn>
          <div className="section-label">Selected Work</div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="section-heading">
            Currently shipping AI <em>at a YC company.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <article className="feature-card">
            <div className="feature-meta">
              <span>{f.companyMeta}</span>
              <span className="feature-badge">{f.period}</span>
            </div>

            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-company">{f.role} · {f.company}</p>

            <ul className="feature-highlights">
              {f.highlights.map((h, i) => (
                <li key={i}>
                  <strong>{h.bold}</strong>
                  {h.rest}
                  {h.metric && <span className="metric">{h.metric}</span>}
                  {h.end}
                </li>
              ))}
            </ul>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <FadeIn>
          <div className="section-label">Projects</div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="section-heading">
            Things I&apos;ve built <em>and learned from.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="project-grid">
            {DATA.projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project"
              >
                <div className="project-num">
                  {String(i + 1).padStart(2, '0')} / {String(DATA.projects.length).padStart(2, '0')}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-dim)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                  {p.subtitle}
                </p>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <FadeIn>
          <div className="section-label">Track Record</div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="section-heading">
            Competitions, hackathons, <em>and milestones.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="achievement-list">
            {DATA.achievements.map((a, i) => (
              <div key={i} className="achievement">
                <div className="achievement-year">{a.year}</div>
                <div>
                  <div className="achievement-title">
                    {a.title}
                    <small>{a.sub}</small>
                  </div>
                </div>
                <div className="achievement-result">{a.result}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <FadeIn>
          <div className="section-label">Toolkit</div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="section-heading">
            What I work with, <em>day to day.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="skills">
            <div className="skill-block">
              <h4>Languages</h4>
              <p>
                C++, Python, <span>Golang, C.</span> Strong fundamentals from competitive programming —{' '}
                <span>484 problems on Codeforces, 100 on LeetCode, 170 on VirtualJudge.</span>
              </p>
            </div>

            <div className="skill-block">
              <h4>AI &amp; ML</h4>
              <p>
                PyTorch, scikit-learn, <span>Pandas, NumPy.</span> Building with Generative AI{' '}
                <span>(GANs, VAEs),</span> RAG pipelines, and the full neural network toolkit —{' '}
                <span>CNNs, RNNs, LSTMs.</span>
              </p>
            </div>

            <div className="skill-block">
              <h4>Backend &amp; Infra</h4>
              <p>
                FastAPI, RESTful API design, <span>API testing with Postman.</span> Cloud deployment via{' '}
                <span>Modal and AWS SageMaker.</span>
              </p>
            </div>

            <div className="skill-block">
              <h4>Data</h4>
              <p>
                MySQL, PostgreSQL, <span>SQLite.</span> Visualization with{' '}
                <span>Matplotlib and Seaborn.</span> Comfortable with both production schemas and{' '}
                <span>quick experimental notebooks.</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { label: 'Email', value: DATA.email, href: `mailto:${DATA.email}` },
    { label: 'GitHub', value: '@Habibur-02', href: DATA.github },
    { label: 'LinkedIn', value: 'habibur02', href: DATA.linkedin },
    { label: 'Codeforces', value: 'Habibur-02', href: DATA.codeforces },
    { label: 'LeetCode', value: 'Habibur-02', href: DATA.leetcode },
  ];

  return (
    <section id="contact" style={{ borderBottom: 'none' }}>
      <div className="container">
        <FadeIn>
          <div className="section-label">Get In Touch</div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="contact-title">
            Let&apos;s build<br />
            <em>something good.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="contact-links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-label">{l.label}</span>
                <span className="contact-link-value">{l.value}</span>
                <span className="contact-arrow">→</span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer">
        <span>© {new Date().getFullYear()} {DATA.name}</span>
        <span>Designed &amp; built with React + Framer Motion</span>
      </div>
    </footer>
  );
}

/* =========================================================
   APP
   ========================================================= */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Work />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
