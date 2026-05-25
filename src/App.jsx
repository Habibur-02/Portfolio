import { motion } from 'framer-motion';

/* =========================================================
   ALL CONTENT — edit here
   ========================================================= */
const DATA = {
  name: 'Md Habibur Rahman',
  role: 'AI Engineer',
  location: 'Rajshahi, Bangladesh',
  email: 'habibur.ruet10@gmail.com',
  phone: '+8801748150901',
  github: 'https://github.com/Habibur-02',
  linkedin: 'https://www.linkedin.com/in/habibur02/',
  codeforcesUrl: 'https://codeforces.com/profile/Habibur-02',
  leetcodeUrl: 'https://leetcode.com/u/Habibur-02/',
  vjudgeUrl: 'https://vjudge.net/user/Habibur-02',
  resumeUrl: '/resume.pdf', // drop your PDF in /public

  summary:
    'BSc Computer Science & Engineering student at RUET (expected May 2026). Currently working as AI Engineer Intern at Delineate (Y Combinator W25), specializing in vision-language model fine-tuning, RAG, and end-to-end ML pipelines on AWS SageMaker and Modal.',

  education: {
    degree: 'BSc in Computer Science & Engineering',
    school: 'Rajshahi University of Engineering & Technology (RUET)',
    period: 'March 2022 — Expected May 2026',
    coursework: 'Data Structures, Algorithms, Database, OOP, Machine Learning, Operating Systems, Artificial Intelligence',
  },

  experience: [
    {
      title: 'AI Engineer Intern',
      company: 'Delineate (YC W25)',
      location: '                                Massachusetts, USA — Remote',
      period: 'Feb 2026 — Present',
      bullets: [
        {
          bold: 'Complex Chart Reasoning:',
          rest: ' Fine-tuned Qwen2.5-VL-7B with LoRA adapters for chart-data consistency verification on synthetic pharmaceutical line charts. Achieved',
          metric: ' 90.6% balanced binary accuracy and 100% precision',
          end: ' on error detection.',
        },
        {
          bold: 'Outperformed Commercial LLMs:',
          rest: ' Built a DaViT-based chart classifier for line vs. spider plot detection. Benchmarked against Gemini 3.1 Preview Lite API and outperformed it by',
          metric: ' 0.31% accuracy',
          end: '.',
        },
        {
          bold: 'Optimized Cloud Deployment:',
          rest: ' Deployed model as Modal cloud function with hybrid OCR + Levenshtein fuzzy matching pipeline. Handles single and batch inference on A10G GPUs at',
          metric: ' ~$0.005/request',
          end: '.',
        },
        {
          bold: 'End-to-End ML Pipeline:',
          rest: ' Architected reproducible training on AWS SageMaker with AdamW-8bit, synthetic dataset filtering (22K samples), JSON-weighted custom loss, and stratified validation.',
          metric: '',
          end: '',
        },
      ],
      tags: ['VLM', 'LoRA', 'PyTorch', 'AWS SageMaker', 'Modal', 'DaViT', 'RAG'],
    },
  ],

  projects: [
    {
      title: 'AI-Powered Civic Feedback & Governance Platform',
      subtitle: 'HackTheAI 2025 Project',
      description:
        'AI-driven civic feedback system to analyze, prioritize, and manage citizen reports for local government use.',
      bullets: [
        'Built with Streamlit and SQLite for analyzing and prioritizing citizen feedback.',
        'Integrated Google Gemini 2.5 Flash for categorization, urgency scoring, spam detection, and automated guidance with local NLP fallback.',
        'Developed real-time analytics dashboards showing issue trends, priority distribution, and resolution metrics.',
        'Designed a modular, production-ready AI pipeline suitable for local deployment.',
      ],
      tags: ['FastAPI', 'Streamlit', 'SQLite', 'ML', 'NLP', 'Python'],
      link: 'https://github.com/Habibur-02',
    },
    {
      title: 'SmartNutriPlan — AI Nutrition Recommendation System',
      subtitle: 'Personal Project, 2025',
      description:
        'End-to-end AI-driven nutrition recommendation system for personalized meal planning.',
      bullets: [
        'Trained on a real-world dataset of 8,789 food items with 77 nutritional attributes.',
        'Designed disease-specific nutrient scoring algorithms to generate personalized food and meal plans.',
        'Applied KMeans clustering to identify nutritionally similar foods.',
        'Integrated an LLM-powered nutrition chatbot for interactive guidance.',
      ],
      tags: ['Python', 'KMeans', 'LLM', 'Streamlit', 'scikit-learn'],
      link: 'https://github.com/Habibur-02',
    },
  ],

  hackathons: [
    {
      name: 'BUET CSE Fest 2026 — DL Sprint 4.0',
      role: 'Bengali Speaker Diarization · Team DeadNeuronSocity',
      description:
        'Developed a Bengali speaker diarization model on Kaggle to accurately identify and generate speaker-wise time segments for long-form conversational audio.',
      result: 'Result: 6th Place (Challenge 2)',
    },
    {
      name: 'CUET CSE Fest 2025 — Datathon',
      role: 'Political Meme Classification . Team RUET_TukTuk',
      description:
        'Built an image-based political meme detection system using CNN and vision-language models (VLMs) to classify political vs. non-political memes.',
      result: 'Result: Finalist of 150 teams',
    },
    {
      name: 'HackTheAI 2025',
      role: 'AI Civic Feedback Project · Team Backprop',
      description: 'Built AI Civic Feedback Project for solving social problems in Bangladesh.',
      result: 'Result: Top 20 of 250',
    },
    {
      name: 'AI Engineering Hackathon 2025',
      role: 'Intent-Based Search System ',
      description: 'Developed an Intent-Based Searching System using NLP techniques.',
      result: 'Result: Top 30',
    },
  ],

  achievements: [
    { year: '2025', title: 'International Computer Science Competition (ICSC)', result: 'Pre-final round' },
    { year: '2022', title: 'ICPC Asia Regional Preliminary — Solved 3 problems', result: '167th Nationally' },
  ],

  profiles: [
    { platform: 'Codeforces', handle: 'Habibur-02', count: '484', label: 'problems', url: 'https://codeforces.com/profile/Habibur-02' },
    { platform: 'LeetCode', handle: 'Habibur-02', count: '100', label: 'problems', url: 'https://leetcode.com/u/Habibur-02/' },
    { platform: 'VirtualJudge', handle: 'Habibur-02', count: '170', label: 'problems', url: 'https://vjudge.net/user/Habibur-02' },
  ],
};

/* =========================================================
   COMPONENTS
   ========================================================= */

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">Md Habibur Rahman</a>
        <div className="nav-links">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#hackathons" className="nav-link">Hackathons</a>
          <a href="#contact" className="nav-link">Contact</a>
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
          <h1 className="hero-name">{DATA.name}</h1>
          {/* <p className="hero-role">{DATA.role} · AI/ML Engineer Intern @ Delineate (YC W25)</p> */}
          <div className="hero-meta">
            <span className="hero-meta-item">
              <span className="hero-meta-icon">●</span> {DATA.location}
            </span>
            <span className="hero-meta-item">
              <span className="hero-meta-icon">●</span> BSc CSE @ RUET (2022 — 2026)
            </span>
            <span className="hero-meta-item">
              <span className="hero-meta-icon">●</span> Available for full-time roles
            </span>
          </div>
          <p className="hero-summary">{DATA.summary}</p>
          <div className="hero-cta">
            <a href={DATA.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              📄 Download Resume
            </a>
            <a href={`mailto:${DATA.email}`} className="btn">✉ Email</a>
            <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub ↗</a>
            <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn ↗</a>
          </div>
        </FadeIn>
      </div>
    </header>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Work Experience</h2>
        </FadeIn>
        {DATA.experience.map((e, i) => (
          <FadeIn key={i} delay={0.05 * i}>
            <article className="item">
              <div className="item-header">
                <div>
                  <div className="item-title">{e.title}</div>
                  <div className="item-subtitle">{e.company} · {e.location}</div>
                </div>
                <div className="item-meta">{e.period}</div>
              </div>
              <ul className="item-bullets">
                {e.bullets.map((b, j) => (
                  <li key={j}>
                    <strong>{b.bold}</strong>
                    {b.rest}
                    {b.metric && <span className="metric">{b.metric}</span>}
                    {b.end}
                  </li>
                ))}
              </ul>
              <div className="item-tags">
                {e.tags.map((t) => (<span key={t} className="tag">{t}</span>))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  const e = DATA.education;
  return (
    <section id="education">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Education</h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="edu-item">
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-school">{e.school}</div>
            <div className="edu-meta">
              <span>{e.period}</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
              <strong style={{ color: 'var(--text)' }}>Coursework:</strong> {e.coursework}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { title: 'Programming Languages', content: 'C++, Python, Golang, C' },
    { title: 'AI & Machine Learning', content: 'Generative AI (GANs, VAE), Retrieval-Augmented Generation (RAG), Neural Networks, CNN, RNN, LSTM' },
    { title: 'Frameworks & Libraries', content: 'PyTorch, Pandas, NumPy, Matplotlib, Seaborn, scikit-learn' },
    { title: 'Backend & APIs', content: 'FastAPI, RESTful API Design, API Testing (Postman)' },
    { title: 'Databases', content: 'MySQL, PostgreSQL' },
    { title: 'Cloud & Deployment', content: 'AWS SageMaker, Modal, MinerU' },
  ];
  return (
    <section id="skills">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Technical Skills</h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="skills-grid">
            {groups.map((g) => (
              <div key={g.title} className="skill-group">
                <div className="skill-group-title">{g.title}</div>
                <div className="skill-group-content">{g.content}</div>
              </div>
            ))}
          </div>
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
          <h2 className="section-title">Projects</h2>
        </FadeIn>
        {DATA.projects.map((p, i) => (
          <FadeIn key={i} delay={0.05 * i}>
            <article className="item">
              <div className="item-header">
                <div>
                  <div className="item-title">{p.title}</div>
                  <div className="item-subtitle">{p.subtitle}</div>
                </div>
              </div>
              <p className="item-description">{p.description}</p>
              <ul className="item-bullets">
                {p.bullets.map((b, j) => (<li key={j}>{b}</li>))}
              </ul>
              <div className="item-tags">
                {p.tags.map((t) => (<span key={t} className="tag">{t}</span>))}
              </div>
              {p.link && (
                <div className="item-links">
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="item-link">
                    View on GitHub →
                  </a>
                </div>
              )}
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Hackathons() {
  return (
    <section id="hackathons">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Hackathons & Competitions</h2>
        </FadeIn>
        {DATA.hackathons.map((h, i) => (
          <FadeIn key={i} delay={0.04 * i}>
            <article className="item">
              <div className="item-header">
                <div>
                  <div className="item-title">{h.name}</div>
                  <div className="item-subtitle">{h.role}</div>
                </div>
                <div className="item-meta" style={{ color: 'var(--success)', fontWeight: 600 }}>
                  {h.result}
                </div>
              </div>
              <p className="item-description" style={{ marginBottom: 0 }}>{h.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Achievements</h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="ach-list">
            {DATA.achievements.map((a, i) => (
              <div key={i} className="ach-row">
                <span className="ach-year">{a.year}</span>
                <span className="ach-title">{a.title}</span>
                <span className="ach-result">{a.result}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Profiles() {
  return (
    <section id="profiles">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Competitive Programming</h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="profile-grid">
            {DATA.profiles.map((p) => (
              <a key={p.platform} href={p.url} target="_blank" rel="noopener noreferrer" className="profile">
                <div className="profile-platform">{p.platform}</div>
                <div className="profile-handle">{p.handle}</div>
                <div className="profile-count">{p.count}</div>
                <div className="profile-count-label">{p.label}</div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Get In Touch</h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="item">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>Email</div>
                <a href={`mailto:${DATA.email}`} style={{ color: 'var(--accent)', fontSize: '0.9375rem' }}>{DATA.email}</a>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>Phone</div>
                <span style={{ fontSize: '0.9375rem' }}>{DATA.phone}</span>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>Location</div>
                <span style={{ fontSize: '0.9375rem' }}>{DATA.location}</span>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>LinkedIn</div>
                <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '0.9375rem' }}>habibur02</a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()} {DATA.name} · Built with React + Vite
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
      <Experience />
      <EducationSection />
      <Skills />
      <Projects />
      <Hackathons />
      <Achievements />
      <Profiles />
      <Contact />
      <Footer />
    </>
  );
}
