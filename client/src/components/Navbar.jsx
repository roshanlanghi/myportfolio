import "./style/Navbar.css";

const navItems = ["home", "projects", "about", "contact"];

const Navbar = ({ onNavClick, activeSection }) => {
  return (
    <header className="navbar" role="banner">
      <button className="nav-logo" onClick={() => onNavClick("home")}>
        Roshan Langhi <span className="nav-logo__accent">Full-Stack Developer</span>
      </button>

      <nav aria-label="Primary navigation">
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
    </header>
  );
};

export default Navbar;
