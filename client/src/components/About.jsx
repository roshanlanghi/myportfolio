import "./style/About.css";

const skills = [
  "React, Vite, and component architecture",
  "Node.js, Express, API design, and auth",
  "MySQL / SQLite schema design and optimization",
  "Three.js and interactive 3D web experiences",
  "Testing, debugging, and performance tuning",
  "Deployment workflows on Render and GitHub",
];

const experience = [
  "Built portfolio-grade 3D interfaces with React Three Fiber",
  "Developed IoT integrations with ESP32 + Firebase",
  "Created Java + SQL management software for desktop workflows",
  "Delivered responsive web apps with animation and clean UX",
];

const About = () => {
  return (
    <section className="about-overlay">
      <div className="about-content">
        <p className="about-kicker">About</p>
        <h2 className="about-title">Full-stack developer focused on quality engineering.</h2>

        <p className="about-subtitle">
          I&apos;m Roshan Langhi. I build complete solutions across frontend, backend, and data layers.
          My workflow emphasizes clean architecture, consistent design systems, and reliable deployments.
        </p>

        <div className="about-image-wrapper">
          <img src="/images/Roshan.jpg" alt="Roshan Langhi" className="about-image" />
        </div>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <h3>Technical Skills</h3>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>

        <article className="about-card">
          <h3>Project Experience</h3>
          <ul>
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default About;
