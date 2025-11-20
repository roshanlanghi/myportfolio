import React from "react";
import "./style/About.css";

const About = () => {
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
                <li>React / React Three Fiber</li>
                <li>Three.js / GLSL Basics</li>
                <li>JavaScript (ES6+) / HTML / CSS</li>
                <li>Node.js / Express / REST APIs</li>
                <li>IoT (ESP32 + Firebase Real-Time DB)</li>
                <li>C++ (DSA) / Python Basics</li>
                <li>Database: MySQL, SQLite</li>
                <li>Git / GitHub / Render Deployment</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>⚙️ Experience</h3>
              <ul>
                <li>Interactive 3D Web Porfolios (Three.js + R3F)</li>
                <li>Smart Electricity Energy Meter (ESP32 + Firebase)</li>
                <li>Java Swing Library Management System (SQL Backend)</li>
                <li>Frontend Development (React + Animations)</li>
                <li>WebDev Camp @ TechSanjivani 2K25</li>
                <li>Open-Source Projects on GitHub</li>
              </ul>
            </div>
          </div>
    </div>
  );
};

export default About;
