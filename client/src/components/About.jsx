import React from "react";
import "./style/About.css";

const About = () => {
  return (
    <div className="about-overlay">
      <div className="about-content">
        {/* Glowing strip at top */}
        <div className="about-strip"></div>

        {/* Section Title */}
        <h1 className="about-title">
          👨‍💻 <span>About Me</span>
        </h1>

        {/* Subtitle */}
        <p className="about-subtitle">
          I'm <strong>Roshan</strong> — a passionate web developer and 3D enthusiast.  
          I love blending creativity with interactivity using modern tools like React and Three.js 🚀
        </p>

        {/* Image Section */}
        <div className="about-3d">
          <img src="/images/image.png" alt="Roshan" />
        </div>

        {/* Main Content Section */}
        <div className="about-description">
          <p>
            My goal is to build immersive web experiences that not only look good
            but also tell a story. I focus on clean UI, smooth animations, and
            practical performance.
          </p>

          {/* Info Grid similar to projects */}
          <div className="about-grid">
            <div className="about-card">
              <h3>💡 Skills</h3>
              <ul>
                <li>React / React Three Fiber</li>
                <li>Three.js / GLSL Basics</li>
                <li>HTML, CSS, JavaScript</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>⚙️ Experience</h3>
              <ul>
                <li>3D Portfolios & Interactive Demos</li>
                <li>Web UI & Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
