import "./style/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals.",
      stack: ["React", "Tailwind", "Node.js"],
      accent: "accent-blue",
    },
    {
      title: "Job IT",
      description:
        "A job search platform to browse openings, view salary insights, and apply.",
      stack: ["Next.js", "MongoDB", "Framer"],
      accent: "accent-purple",
    },
    {
      title: "Trip Guide",
      description:
        "A travel booking experience for planning and booking seamless journeys.",
      stack: ["React", "Firebase", "Stripe"],
      accent: "accent-teal",
    },
  ];

  return (
    <div className="projects">
      <p className="section-label">MY WORK</p>
      <h2 className="section-title">Projects.</h2>
      <p className="section-description">
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.accent}`} key={project.title}>
            <div className="project-thumb">
              <div className="project-thumb__overlay" />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
