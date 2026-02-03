import "./style/Navbar.css";

const Navbar = ({ onNavClick, activeSection }) => {
  const navItems = ["home", "projects", "about", "contact"];

  return (
    <nav className="navbar">
      <div className="nav-logo">
        ⚡ Roshan'S <span className="nav-logo__accent">Portfolio</span>
      </div>

      <ul className="nav-links">
        {navItems.map((tab) => (
          <li key={tab}>
            <button
              onClick={() => onNavClick(tab)}
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
