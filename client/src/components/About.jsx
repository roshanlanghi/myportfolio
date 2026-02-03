import "./style/About.css";

const About = () => {
  const skills = [
    "React / React Three Fiber",
    "Three.js / GLSL Basics",
    "JavaScript (ES6+) / HTML / CSS",
    "Node.js / Express / REST APIs",
    "IoT (ESP32 + Firebase Real-Time DB)",
    "C++ (DSA) / Python Basics",
    "Database: MySQL, SQLite",
    "Git / GitHub / Render Deployment",
  ];

  const experience = [
    "Interactive 3D Web Porfolios (Three.js + R3F)",
    "Smart Electricity Energy Meter (ESP32 + Firebase)",
    "Java Swing Library Management System (SQL Backend)",
    "Frontend Development (React + Animations)",
    "WebDev Camp @ TechSanjivani 2K25",
    "Open-Source Projects on GitHub",
  ];

  return (
    <div className="about-overlay">
      <div className="about-content">
        <div className="about-strip"></div>

        <h1 className="about-title fade-up">
          👨‍💻 <span>About Me</span>
        </h1>

        <p className="about-subtitle fade-up delay-1">
          I'm <strong>Roshan Langhi</strong> — a passionate Web Developer, 
          3D Graphics Enthusiast, and Technology Learner.  
          I build immersive and futuristic web experiences using 
          React, JavaScript, and Three.js 🚀
        </p>

        <div className="about-image-wrapper fade-up delay-2">
          <img src="/images/Roshan.jpg" alt="Roshan" className="about-image" />
        </div>

        <div className="about-description fade-up delay-3">
          <p>
            With a strong background in full-stack development, 3D frontend design, 
            IoT systems, and Java-based applications, my goal is to merge 
            <strong>functionality, interactivity, and aesthetic visuals</strong>
            into every project I create.
          </p>
        </div>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <h3>💡 Skills</h3>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="about-card">
          <h3>⚙️ Experience</h3>
          <ul>
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
