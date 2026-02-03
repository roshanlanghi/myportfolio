import "./style/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "⚡ Smart Electricity Energy Meter",
      description:
        "IoT-based project using ESP32 and Firebase to monitor real-time power usage.",
      tech: ["ESP32", "Firebase", "React"],
    },
    {
      title: "💙 Mental Health Care App",
      description:
        "A Flutter app that promotes wellness and tracks mental health metrics.",
      tech: ["Flutter", "Firebase", "Python"],
    },
    {
      title: "📚 Library Management System",
      description:
        "Java Swing + MySQL application for managing library records and transactions.",
      tech: ["Java", "MySQL", "Swing"],
    },
    {
      title: "🌐 3D Portfolio Website",
      description:
        "A React Three Fiber-powered portfolio showcasing interactive 3D experiences.",
      tech: ["React", "Three.js", "Drei"],
    },
  ];

  return (
    <div className="projects-overlay">
      <div className="projects-content">
        <div className="about-strip"></div>
        <h1 className="projects-title">
          🚀 My <span>Featured Projects</span>
        </h1>

        <p className="projects-subtitle">
          A showcase of my futuristic projects combining code, creativity, and innovation 💡
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((item) => (
                  <span className="tech" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
