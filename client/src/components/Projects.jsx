import "./style/Projects.css";

const projects = [
  {
    title: "Smart Energy Monitoring System",
    description:
      "Real-time energy analytics platform with IoT ingestion, usage dashboards, and threshold alerts.",
    impact: "Improved visibility into device-level power consumption.",
    tech: ["React", "Node.js", "Firebase", "ESP32"],
  },
  {
    title: "Mental Wellness Companion",
    description:
      "Cross-platform application for mood tracking, guided activities, and habit reminders.",
    impact: "Delivered a consistent mobile UX backed by structured cloud data.",
    tech: ["Flutter", "Firebase", "Python"],
  },
  {
    title: "Library Operations Dashboard",
    description:
      "Role-based management software for book inventory, lending workflows, and reporting.",
    impact: "Reduced manual operations by automating key circulation tasks.",
    tech: ["Java", "MySQL", "Swing"],
  },
  {
    title: "Interactive 3D Developer Portfolio",
    description:
      "Performance-oriented portfolio experience featuring animated sections and immersive visuals.",
    impact: "Showcases engineering depth and design execution in a single platform.",
    tech: ["React", "Three.js", "Framer Motion"],
  },
];

const Projects = () => {
  return (
    <section className="projects-overlay">
      <div className="projects-content">
        <p className="projects-kicker">Selected Work</p>
        <h2 className="projects-title">Production-minded projects across web, data, and IoT.</h2>

        <p className="projects-subtitle">
          Each project reflects practical problem solving, maintainable architecture, and user-focused design.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-impact">{project.impact}</p>
              <div className="tech-stack">
                {project.tech.map((item) => (
                  <span className="tech" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
