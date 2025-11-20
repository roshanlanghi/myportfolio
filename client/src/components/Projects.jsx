import React from "react";
import "./style/Projects.css";

const Projects = () => {
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
          <div className="project-card">
            <h3>⚡ Smart Electricity Energy Meter</h3>
            <p>
              IoT-based project using ESP32 and Firebase to monitor real-time power usage.
            </p>
            <div className="tech-stack">
              <span className="tech">ESP32</span>
              <span className="tech">Firebase</span>
              <span className="tech">React</span>
            </div>
          </div>

          <div className="project-card">
            <h3>💙 Mental Health Care App</h3>
            <p>
              A Flutter app that promotes wellness and tracks mental health metrics.
            </p>
            <div className="tech-stack">
              <span className="tech">Flutter</span>
              <span className="tech">Firebase</span>
              <span className="tech">Python</span>
            </div>
          </div>

          <div className="project-card">
            <h3>📚 Library Management System</h3>
            <p>
              Java Swing + MySQL application for managing library records and transactions.
            </p>
            <div className="tech-stack">
              <span className="tech">Java</span>
              <span className="tech">MySQL</span>
              <span className="tech">Swing</span>
            </div>
          </div>

          <div className="project-card">
            <h3>🌐 3D Portfolio Website</h3>
            <p>
              A React Three Fiber-powered portfolio showcasing interactive 3D experiences.
            </p>
            <div className="tech-stack">
              <span className="tech">React</span>
              <span className="tech">Three.js</span>
              <span className="tech">Drei</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
