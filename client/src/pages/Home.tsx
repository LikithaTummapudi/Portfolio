/* Style reminder: Structured Warm Technical — consistent cards, strong Manrope headings, DM Serif accents, cream/brown rhythm. */
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Github, Linkedin, Mail, Menu, X } from "lucide-react";

const github = "https://github.com/LikithaTummapudi";
const linkedin = "https://www.linkedin.com/in/likithatummapudi/";
const email = "mailto:likitha.tummapudi1@gmail.com";
const resume = "/images/resume.pdf";
const heroGirl = "/images/hero-girl-developer_0791961e.png";

const featuredProjects = [
  { title: "AI Study Buddy", type: "Edunet internship project", description: "An AI-powered study companion for explaining topics, summarizing notes, generating quizzes, and creating flashcards.", tags: ["Python", "Flask", "Gemini API"], path: "assets/images/projects/ai-study-buddy.jpg", code: "https://github.com/LikithaTummapudi/ai-study-buddy", live: null },
  { title: "Car Price Prediction", type: "Machine learning · Regression", description: "A pre-owned car price prediction workflow covering analysis, feature engineering, model comparison, and evaluation.", tags: ["Python", "Pandas", "Scikit-learn"], path: "assets/images/projects/car-price.jpg", code: "https://github.com/LikithaTummapudi/Predicting-price-of-pre-owned-cars", live: null, note: "Approx. R² = 0.85" },
  { title: "Explore India", type: "Tourism website", description: "A tourism website project designed to explore destinations and travel information.", tags: ["HTML", "CSS", "JavaScript"], path: "assets/images/projects/explore-india.jpg", code: null, live: null },
  { title: "Vendor Reliability Platform", type: "Infosys Springboard · Team project", description: "A shared platform for vendor, procurement, approvals, reliability scores, compliance, dashboards, and reports.", tags: ["Angular", "FastAPI", "TypeScript"], path: "assets/images/projects/vendor-platform.jpg", code: null, live: null },
  { title: "Personal Income Classification", type: "Machine learning · Classification", description: "A classification project predicting personal income categories from demographic and socioeconomic attributes.", tags: ["Python", "Pandas", "NumPy"], path: "assets/images/projects/income-classification.jpg", code: "https://github.com/LikithaTummapudi/Classification-Of-Personal-Income", live: null },
  { title: "Quantum Teleportation Simulator", type: "Quantum computing", description: "An implementation and simulation of the quantum teleportation protocol.", tags: ["Python", "Qiskit"], path: "assets/images/projects/quantum-teleportation.jpg", code: "https://github.com/LikithaTummapudi/Quantum-Teleportation-Simulator", live: null },
];
const moreProjects = [
  { title: "Task Manager", type: "Flask CRUD application", description: "A task-management application built around create, read, update, and delete flows.", tags: ["Python", "Flask", "CRUD"], path: "assets/images/projects/task-manager.jpg" },
  { title: "Data Analysis Project", type: "Data exploration", description: "A GitHub data-analysis project focused on inspecting, preparing, and interpreting data.", tags: ["Python", "Pandas", "Data Analysis"], path: "assets/images/projects/data-analysis.jpg" },
  { title: "Flappy Bird", type: "Game project", description: "A compact implementation of the Flappy Bird game concept.", tags: ["Python", "Game Development"], path: "assets/images/projects/flappy-bird.jpg" },
];
const skills = [
  ["Programming", ["Python", "Java", "C", "C++", "JavaScript", "R", "SQL", "PL/SQL"]],
  ["AI / ML", ["Machine Learning", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Generative AI", "Gemini API"]],
  ["Web", ["HTML", "CSS", "JavaScript", "Bootstrap", "Flask", "Angular", "React", "Node.js"]],
  ["Tools & Cloud", ["Git", "GitHub", "Streamlit", "Docker", "AWS", "Azure", "GCP", "Firebase", "Vercel"]],
];
const certificates = [
  {
    org: "NPTEL",
    title: "Python for Data Science",
    detail: "Elite + Silver · 82% · Top 5%",
    path: "/images/certificates/Python for Data Science nptel certificate.pdf"
  },

  {
    org: "Oracle Cloud Infrastructure",
    title: "AI Foundations Associate",
    detail: "Certificate of learning",
    path: "/images/certificates/OCI AI foundations associate certificate.pdf"
  },

  {
    org: "IBM",
    title: "Fundamentals of AI",
    detail: "Certificate of learning",
    path: "/images/certificates/IBM ai fundamentals certificate.pdf"
  },

  {
    org: "IBM",
    title: "DevOps, Agile and Design Thinking",
    detail: "Certificate of learning",
    path: "/images/certificates/IBM Devops Certificate.png"
  },

  {
    org: "WISER",
    title: "Quantum Fundamentals",
    detail: "Certificate of learning",
    path: "/images/certificates/amaravati quantum certificate.png"
  },

  {
    org: "Amaravati Quantum Valley",
    title: "Selected for Phase 2",
    detail: "Program selection",
    path: "/images/certificates/AQV_Phase2_exam_certificate_VJW-A-D7C201AB-1899 (1).pdf"
  },
];

function SectionTitle({ number, label, title, accent, copy }: { number: string; label: string; title: string; accent?: string; copy?: string }) { return <div className="section-title"><div><span className="section-number">{number}</span><p>{label}</p></div><h2>{title}</h2>{accent && <p className="section-tagline">{accent}</p>}{copy && <p className="section-copy">{copy}</p>}</div>; }
function Tag({ children }: { children: React.ReactNode }) { return <span className="tag">{children}</span>; }
function AssetPlaceholder({ path, project }: { path: string; project: string }) { return <div className="asset-placeholder" role="img" aria-label={`${project} image placeholder`}><div className="asset-lines"><i></i><i></i><i></i></div><span>PROJECT IMAGE</span><b>{project}</b><small>{path}</small></div>; }
function ProjectCard({ project }: { project: (typeof featuredProjects)[number] | (typeof moreProjects)[number] }) { return <article className={project.title === "AI Study Buddy" ? "project-card primary-project" : "project-card"}><AssetPlaceholder path={project.path} project={project.title} /><div className="project-card-body"><p className="card-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p>{"note" in project && project.note && <span className="project-note">{project.note}</span>}<div className="tag-row">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div><div className="card-actions">{"code" in project && project.code ? <a href={project.code} target="_blank" rel="noreferrer">View Code <ArrowUpRight size={14} /></a> : <a href={github} target="_blank" rel="noreferrer">View Code <ArrowUpRight size={14} /></a>}{"live" in project && project.live && <a href={project.live} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={14} /></a>}</div></div></article>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [certificate, setCertificate] = useState<(typeof certificates)[number] | null>(null);
  const [active, setActive] = useState("about");
  const nav = useMemo(() => ["about", "work", "projects", "contact"], []);
  const chapters = [
  "about",
  "education",
  "experience",
  "projects",
  "opensource",
  "teamwork",
  "leadership",
  "certificates",
  "skills",
  "contact"
];
  useEffect(() => { const sections = chapters.map((item) => document.getElementById(item)).filter(Boolean) as HTMLElement[]; const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-25% 0px -65% 0px" }); sections.forEach((section) => observer.observe(section)); const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .12 }); document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element)); return () => { observer.disconnect(); reveal.disconnect(); }; }, [chapters]);

  return <div className="site-shell structured-shell">
    <header className="site-header"><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><i></i><i></i><b></b></span><span>Likitha Tummapudi</span></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X /> : <Menu />}</button><nav className={menuOpen ? "main-nav open" : "main-nav"}>{nav.map((item) => <a key={item} onClick={() => setMenuOpen(false)} className={active === item ? "active" : ""} href={`#${item}`}>{item[0].toUpperCase() + item.slice(1)}</a>)}</nav></header>
    <aside className="field-index" aria-label="Portfolio chapter index">
  <span>FIELD INDEX</span>

  {chapters.map((item, index) => (
    <a
      href={`#${item}`}
      className={active === item ? "active" : ""}
      key={item}
    >
      <b>{String(index + 1).padStart(2, "0")}</b>
      <i>{item.replace("-", " ")}</i>
    </a>
  ))}
</aside>
    <main id="top">
      <section className="hero-section"><div className="container hero-grid"><div className="hero-content reveal"><p className="eyebrow">AI / ML-FOCUSED COMPUTER SCIENCE UNDERGRADUATE</p><h1>Likitha <em>Tummapudi</em></h1><p className="hero-copy">Exploring Machine Learning, Artificial Intelligence, and software development by building practical, intelligent systems.</p><div className="hero-actions"><a className="button primary" href="#projects">View Projects <ArrowRight size={16} /></a><a className="button secondary" href={resume} target="_blank" rel="noreferrer">Download Resume <ArrowDown size={16} /></a></div><div className="hero-links"><a href={github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href={email}><Mail size={16} /> Email</a></div></div><div className="hero-character reveal"><div className="character-halo"></div><img src={heroGirl} alt="Illustrated computer science student working at a laptop" /><span className="orbit orbit-a">ML</span><span className="orbit orbit-b">AI</span><span className="orbit orbit-c">01</span><div className="character-card"><i></i><div><b>BUILD MODE</b><span>Learning by doing</span></div></div></div></div></section>
      <section className="stats-bar"><div className="container stats-grid"><div><strong>9.14</strong><span>CGPA</span></div><div><strong>Top 5%</strong><span>NPTEL Python for Data Science</span></div><div><strong>4</strong><span>Merged Open Source PRs</span></div><div><strong>3</strong><span>Virtual Internships</span></div></div></section>

      <section id="about" className="section cream-section"><div className="container reveal"><SectionTitle number="01" label="ABOUT" title="About" accent="I learn by building." /><div className="about-grid"><div className="about-narrative"><p>I enjoy building software and solving problems. I started with Java and DSA and gradually became more interested in building complete applications.</p><p>Through machine learning projects, internships, and open-source contributions, I’ve been exploring how technology can be applied to practical problems.</p><p>Learning by building is what keeps me curious: I enjoy exploring new technologies and applying them through projects.</p></div><aside className="explore-card"><p>Currently exploring</p><div>{["Machine Learning", "Generative AI", "Data Science", "Intelligent Applications", "Quantum Computing"].map((item) => <Tag key={item}>{item}</Tag>)}</div></aside></div></div></section>

      <section id="education" className="section beige-section"><div className="container reveal"><SectionTitle number="02" label="EDUCATION" title="Education" accent="Academic foundation." /><div className="education-card"><div><p className="card-type">2024 — 2028</p><h3>VIT-AP University</h3><p>B.Tech in Computer Science and Engineering</p></div><div className="education-score"><strong>9.14</strong><span>Current CGPA</span></div><div className="education-list"><p><b>97.7%</b> Intermediate (MPC)</p><p><b>94%</b> School final year</p><p>Ranked among the top students and Top 10 in school.</p></div></div></div></section>

      <section id="experience" className="section cream-section"><div className="container reveal"><SectionTitle number="03" label="INTERNSHIPS" title="Internships" accent="Practical AI and software experience." /><div className="internship-list"><article><header><span>01</span><div><h3>EDUNET</h3><p className="internship-role">Virtual Internship</p><h4 className="internship-project">AI Study Buddy</h4></div></header><div className="internship-content"><div><h4>Description</h4><p>AI-powered educational web application that helps students learn concepts and revise material through topic explanation, note summarization, quiz generation, and flashcard creation.</p></div><div><h4>Technologies</h4><div className="tag-row">{["Python", "Flask", "Gemini API", "HTML5", "CSS3", "Bootstrap 5", "JavaScript"].map((item) => <Tag key={item}>{item}</Tag>)}</div></div><div><h4>Key contributions</h4><ul><li>Integrated Google Gemini API into a Flask backend.</li><li>Built REST-style functionality for AI requests and a responsive frontend.</li><li>Structured the app for future extensions and deployed it for public testing.</li></ul></div></div><a className="inline-link" href="https://github.com/LikithaTummapudi/ai-study-buddy" target="_blank" rel="noreferrer">View Code <ArrowUpRight size={14} /></a></article><article><header><span>02</span><div><h3>1M1B</h3><p className="internship-role">Machine Learning / AI for Sustainability Internship</p><h4 className="internship-project">AI-Based Air & Noise Pollution Monitoring System</h4></div></header><div className="internship-content"><div><h4>Description</h4><p>Machine-learning-based environmental monitoring system that simulates environmental sensor data and predicts pollution levels.</p></div><div><h4>Architecture</h4><p className="architecture">Sensor Simulator <ArrowRight size={13} /> Flask REST API <ArrowRight size={13} /> ML Model <ArrowRight size={13} /> Streamlit Dashboard</p><h4>Technologies</h4><div className="tag-row">{["Python", "Scikit-learn", "NumPy", "Joblib", "Flask", "REST APIs", "Streamlit"].map((item) => <Tag key={item}>{item}</Tag>)}</div></div><div><h4>Key contributions</h4><ul><li>Built a simulator for PM2.5, CO₂, VOC, and noise data.</li><li>Trained, serialized, and served a pollution-level classification model.</li><li>Designed the API and dashboard for a future IoT connection.</li></ul></div></div><a className="inline-link" href="https://github.com/LikithaTummapudi/Air-Noice-Pollution-Monitoring-System" target="_blank" rel="noreferrer">View Code <ArrowUpRight size={14} /></a></article><article><header><span>03</span><div><h3>INFOSYS SPRINGBOARD</h3><p className="internship-role">Virtual Internship</p><h4 className="internship-project">Vendor Reliability Intelligence & Procurement Risk Management Platform</h4></div></header><div className="internship-content"><div><h4>Description</h4><p>Internship/team platform for vendor management, procurement, purchase orders, approval workflows, reliability scoring, compliance monitoring, communication, dashboards, notifications, and reports.</p></div><div><h4>Technologies</h4><div className="tag-row">{["Angular", "FastAPI", "TypeScript", "REST APIs", "Material Design"].map((item) => <Tag key={item}>{item}</Tag>)}</div></div><div><h4>Team / internship context</h4><p>Developed as a shared Infosys Springboard internship project, with team collaboration and shared responsibility across the platform workflow.</p></div></div></article></div></div></section>

      <section id="projects" className="section beige-section"><div className="container reveal"><SectionTitle number="04" label="PROJECTS" title="Projects" accent="Selected work, built with purpose." /><div className="project-grid">{featuredProjects.map((project) => <ProjectCard project={project} key={project.title} />)}</div>{showMore && <div className="project-grid more-project-grid">{moreProjects.map((project) => <ProjectCard project={project} key={project.title} />)}</div>}{!showMore && <button className="view-more" onClick={() => setShowMore(true)}>View More Projects <ArrowDown size={16} /></button>}</div></section>

      <section id="opensource" className="section dark-section"><div className="container reveal"><SectionTitle number="05" label="OPEN SOURCE" title="Open Source" accent="Contributing in public." copy="GirlScript Summer of Code 2026 · Open Source Contributor" /><div className="open-source-card"><div className="oss-head"><Github size={22} /><div><b>EaseMotion CSS</b><span>4 merged pull requests</span></div><a href="https://github.com/SAPTARSHI-coder/EaseMotion-css/pull/42036" target="_blank" rel="noreferrer">View contribution <ArrowUpRight size={14} /></a></div><div className="oss-grid">{["Flip Calendar Animation", "Cursor Glow Countdown Timer", "Spotlight Dark Mode Toggle", "Additional reusable CSS animation/component"].map((item, index) => <div key={item}><span>PR · 0{index + 1}</span><Check size={17} /><b>{item}</b><em>Merged</em></div>)}</div><p>HTML5 · CSS3 · CSS Animations · Responsive Web Design · Git · GitHub</p></div></div></section>

      <section id="teamwork" className="section cream-section"><div className="container reveal"><SectionTitle number="06" label="TEAMWORK" title="Teamwork" accent="Building works better together." /><div className="simple-grid">{[{ title: "Smart India Hackathon", label: "Team-based participation", text: "Contributed to problem analysis, technical development, and solution building." }, { title: "IIT D3 Hackathon", label: "Collaborative development", text: "Worked with a team on problem solving and building and presenting a technology solution." }, { title: "Infosys Springboard", label: "Shared internship project", text: "Collaborated on a shared platform through communication, development workflow, and shared responsibility." }, { title: "First-Year Blog Website", label: "Early team project", text: "Built a complete blog website while dividing responsibilities and solving problems together." }].map((item) => <article className="simple-card" key={item.title}><p>{item.label}</p><h3>{item.title}</h3><span>{item.text}</span></article>)}</div></div></section>

      <section id="leadership" className="section beige-section"><div className="container reveal"><SectionTitle number="07" label="LEADERSHIP" title="Leadership" accent="Coordinating, contributing, and supporting." /><div className="leadership-grid"><article><div className="org-icon">PC</div><p className="leadership-context">VIT-AP UNIVERSITY</p><h3>PHOTON CLUB</h3><strong>Co-Lead — Outreach Team</strong><ul><li>Coordinating outreach activities</li><li>Planning promotional initiatives</li><li>Working with team members</li><li>Supporting student engagement</li><li>Contributing to club initiatives</li></ul></article><article><div className="org-icon">CC</div><p className="leadership-context">TECHNICAL COMMUNITY</p><h3>CODECRUX</h3><strong>Tech Development Team Lead</strong><ul><li>Leading technical development activities</li><li>Coordinating developers and technical tasks</li><li>Guiding team members</li><li>Supporting project development</li><li>Helping technical work move forward</li></ul></article></div></div></section>

      <section id="certificates" className="section cream-section"><div className="container reveal"><SectionTitle number="08" label="CERTIFICATIONS & LEARNING" title="Certifications" accent="Continuous learning." /><div className="certificate-grid">{certificates.map((item, index) => <article key={item.title}><span>0{index + 1}</span><p>{item.org}</p><h3>{item.title}</h3><small>{item.detail}</small><button onClick={() => setCertificate(item)}>View Certificate <ArrowUpRight size={14} /></button></article>)}</div></div></section>

      <section id="skills" className="section beige-section"><div className="container reveal"><SectionTitle number="09" label="TECHNICAL SKILLS" title="Technical Skills" accent="A practical toolkit." /><div className="skills-grid">{skills.map(([group, items]) => <article key={group as string}><h3>{group}</h3><div>{(items as string[]).map((item) => <Tag key={item}>{item}</Tag>)}</div></article>)}</div></div></section>

      <section id="contact" className="contact-section compact-contact"><div className="container reveal"><div className="contact-panel"><div className="contact-intro"><span className="contact-label">10 · CONTACT</span><h2>Let's Connect</h2><p>Have an interesting idea, opportunity, or project you'd like to discuss? I'd be happy to connect.</p><small>AI/ML · Software Development · Open Source · Collaboration</small></div><div className="contact-card"><p>GET IN TOUCH</p><a className="contact-row" href={email}><span className="contact-row-icon"><Mail size={18} /></span><span><b>Email</b><small>likitha.tummapudi1@gmail.com</small></span><ArrowRight size={19} /></a><a className="contact-row" href={linkedin} target="_blank" rel="noreferrer"><span className="contact-row-icon"><Linkedin size={18} /></span><span><b>LinkedIn</b><small>likithatummapudi</small></span><ArrowRight size={19} /></a><a className="contact-row" href={github} target="_blank" rel="noreferrer"><span className="contact-row-icon"><Github size={18} /></span><span><b>GitHub</b><small>LikithaTummapudi</small></span><ArrowRight size={19} /></a></div></div></div></section>
    
    </main><footer className="contact-footer"><div className="container"><span>© 2026 Likitha Tummapudi</span><span></span><a href="#top">Back to top ↑</a></div></footer>
    
    {certificate && <div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-title" onClick={() => setCertificate(null)}><div className="certificate-dialog" onClick={(event) => event.stopPropagation()}><button onClick={() => setCertificate(null)} aria-label="Close certificate viewer"><X /></button>
      <div className="certificate-image">
  {certificate.path.toLowerCase().endsWith(".pdf") ? (
    <iframe
      src={`${certificate.path}#toolbar=0&navpanes=0&scrollbar=0`}
      title={certificate.title}
      className="certificate-pdf"
    />
  ) : (
    <img
      src={certificate.path}
      alt={certificate.title}
      className="certificate-img"
    />
  )}
</div>   
    <div><p>{certificate.org}</p><h3 id="certificate-title">{certificate.title}</h3><span>{certificate.detail}</span></div></div></div>}
  
  </div>;

}
