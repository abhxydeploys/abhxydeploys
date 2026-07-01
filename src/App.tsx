import { type CSSProperties, useMemo, useState } from "react";

type Project = {
  id: string;
  label: string;
  status: string;
  title: string;
  summary: string;
  details: string[];
};

type SkillGroup = {
  id: string;
  title: string;
  summary: string;
  skills: Array<{ name: string; level: number }>;
};

type ContactMethod = {
  id: string;
  label: string;
  value: string;
  href: string;
};

const navItems = ["Work", "Skills", "Timeline", "Contact"];
const profileImage = `${import.meta.env.BASE_URL}ppic.png`;

const projects: Project[] = [
  {
    id: "portfolio",
    label: "Portfolio",
    status: "React + TS",
    title: "Interactive personal portfolio",
    summary:
      "A component-driven portfolio with responsive navigation, live project selection, and GitHub Pages deployment.",
    details: ["Typed content model", "Responsive layout", "Stateful UI controls"],
  },
  {
    id: "frontend",
    label: "Frontend",
    status: "In progress",
    title: "React interface practice",
    summary:
      "Reusable interface patterns focused on accessible layouts, clean interaction states, and TypeScript confidence.",
    details: ["React components", "TypeScript props", "UI behavior polish"],
  },
  {
    id: "backend",
    label: "Backend",
    status: "Learning",
    title: "Spring Boot and GraphQL",
    summary:
      "Full-stack foundations through API design, typed data flows, and service-backed product features.",
    details: ["API structure", "GraphQL concepts", "Backend integration"],
  },
];

const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    summary: "Building clear web interfaces with reusable components.",
    skills: [
      { name: "HTML", level: 88 },
      { name: "CSS", level: 84 },
      { name: "JavaScript", level: 76 },
      { name: "React", level: 70 },
      { name: "TypeScript", level: 64 },
    ],
  },
  {
    id: "backend",
    title: "Backend and APIs",
    summary: "Learning service design and typed application data.",
    skills: [
      { name: "Spring Boot", level: 58 },
      { name: "GraphQL", level: 52 },
      { name: "REST concepts", level: 65 },
      { name: "Project structure", level: 72 },
    ],
  },
  {
    id: "product",
    title: "Product",
    summary: "Connecting design, project planning, and community work.",
    skills: [
      { name: "UX/UI design", level: 82 },
      { name: "Community management", level: 78 },
      { name: "Project management", level: 70 },
      { name: "Open source collaboration", level: 62 },
    ],
  },
];

const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    value: "hey.itzabhay@gmail.com",
    href: "mailto:hey.itzabhay@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "itzabhay",
    href: "https://www.linkedin.com/in/itzabhay",
  },
  {
    id: "github",
    label: "GitHub",
    value: "abhxydeploys",
    href: "https://github.com/abhxydeploys",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "itxabh",
    href: "https://www.instagram.com/itxabh",
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const [activeSkillId, setActiveSkillId] = useState(skillGroups[0].id);
  const [activeContactId, setActiveContactId] = useState(contactMethods[0].id);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? projects[0],
    [activeProjectId],
  );

  const activeSkillGroup = useMemo(
    () => skillGroups.find((group) => group.id === activeSkillId) ?? skillGroups[0],
    [activeSkillId],
  );

  const activeContact = useMemo(
    () => contactMethods.find((method) => method.id === activeContactId) ?? contactMethods[0],
    [activeContactId],
  );

  return (
    <div className={isDark ? "app theme-dark" : "app"}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <div className={isMenuOpen ? "nav-menu is-open" : "nav-menu"} id="nav-menu">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" type="button" onClick={() => setIsDark((value) => !value)}>
              {isDark ? "Light" : "Dark"}
            </button>
            <button
              className="nav-toggle"
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="nav-menu"
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">UI Developer at HCLTech</p>
            <h1>Design-minded developer building clean, useful web experiences.</h1>
            <p className="hero-text">
              I am Abhay, a BCA student at Amity University Online with a strong interest in UX,
              UI, web development, and projects that create practical value for communities.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="mailto:hey.itzabhay@gmail.com">
                Email me
              </a>
              <a className="button secondary" href="https://github.com/abhxydeploys" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <aside
            className="profile-panel"
            aria-label="Profile summary"
            style={{ "--profile-photo": `url(${profileImage})` } as CSSProperties}
          >
            <img className="avatar" src={profileImage} alt="Abhay profile" />
            <div>
              <p className="panel-label">Current focus</p>
              <p>React, TypeScript, Spring Boot, and GraphQL.</p>
            </div>
            <dl className="quick-stats">
              <div>
                <dt>Role</dt>
                <dd>UI Developer</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>BCA</dd>
              </div>
              <div>
                <dt>Chess blitz</dt>
                <dd>1127+ Elo</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="section intro-band" aria-label="Portfolio summary">
          <p>
            I like working where product thinking, interface craft, and engineering meet. My goal is
            to turn ideas into screens that are clear, responsive, and easy to use.
          </p>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Projects and focus areas</h2>
            </div>
            <p className="section-note">Choose a card to inspect the project details.</p>
          </div>

          <div className="interactive-work">
            <div className="work-list" role="tablist" aria-label="Projects">
              {projects.map((project) => (
                <button
                  key={project.id}
                  className={project.id === activeProject.id ? "work-card active" : "work-card"}
                  type="button"
                  role="tab"
                  aria-selected={project.id === activeProject.id}
                  onClick={() => setActiveProjectId(project.id)}
                >
                  <span className="card-topline">
                    <span>{project.label}</span>
                    <span>{project.status}</span>
                  </span>
                  <strong>{project.title}</strong>
                  <span>{project.summary}</span>
                </button>
              ))}
            </div>

            <article className="project-detail" aria-live="polite">
              <p className="panel-label">Now viewing</p>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.summary}</p>
              <ul>
                {activeProject.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section split-section" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Skills</p>
              <h2>Tools I use to build</h2>
            </div>
          </div>

          <div className="skill-tabs" role="tablist" aria-label="Skill groups">
            {skillGroups.map((group) => (
              <button
                key={group.id}
                className={group.id === activeSkillId ? "chip active" : "chip"}
                type="button"
                role="tab"
                aria-selected={group.id === activeSkillId}
                onClick={() => setActiveSkillId(group.id)}
              >
                {group.title}
              </button>
            ))}
          </div>

          <div className="skill-panel">
            <div>
              <p className="panel-label">{activeSkillGroup.title}</p>
              <h3>{activeSkillGroup.summary}</h3>
            </div>
            <div className="skill-bars">
              {activeSkillGroup.skills.map((skill) => (
                <div className="skill-meter" key={skill.name}>
                  <span>
                    <strong>{skill.name}</strong>
                    <em>{skill.level}%</em>
                  </span>
                  <div className="meter-track" aria-hidden="true">
                    <div className="meter-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section timeline-section" id="timeline">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Path</p>
              <h2>What I am building toward</h2>
            </div>
          </div>
          <ol className="timeline">
            <li>
              <span>Now</span>
              <div>
                <h3>UI Developer at HCLTech</h3>
                <p>Working on interface development while continuing to improve frontend craft.</p>
              </div>
            </li>
            <li>
              <span>Learning</span>
              <div>
                <h3>React, TypeScript, Spring Boot, GraphQL</h3>
                <p>Strengthening full-stack skills through focused practice and project work.</p>
              </div>
            </li>
            <li>
              <span>Next</span>
              <div>
                <h3>Open source and community projects</h3>
                <p>Looking to collaborate on useful software with people who care about impact.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let us build something practical.</h2>
          </div>
          <div className="contact-panel">
            <div className="contact-options" role="tablist" aria-label="Contact methods">
              {contactMethods.map((method) => (
                <button
                  key={method.id}
                  className={method.id === activeContactId ? "chip active" : "chip"}
                  type="button"
                  role="tab"
                  aria-selected={method.id === activeContactId}
                  onClick={() => setActiveContactId(method.id)}
                >
                  {method.label}
                </button>
              ))}
            </div>
            <a className="contact-link" href={activeContact.href} target={activeContact.id === "email" ? undefined : "_blank"} rel="noreferrer">
              <span>{activeContact.label}</span>
              <strong>{activeContact.value}</strong>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Abhay. Built with React, TypeScript, and Vite.</p>
        <a href="#home">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
