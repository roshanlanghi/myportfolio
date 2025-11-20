import React from "react";
import "./style/Navbar.css";

const Navbar = ({ onNavClick, activeSection }) => {
  const handleClick = (tab) => {
    onNavClick(tab);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        ⚡ Roshan'S <span style={{ color: "#00ffff" }}>Portfolio</span>
      </div>

      <ul className="nav-links">
        {["home", "projects", "about", "contact"].map((tab) => (
          <li key={tab}>
            <button
              onClick={() => handleClick(tab)}
              className={`nav-btn ${activeSection === tab ? "active" : ""}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
