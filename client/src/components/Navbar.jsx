import "./style/Navbar.css";

const Navbar = ({ onNavClick, activeSection }) => {
  const navItems = ["about", "work", "contact"];

  return (
    <nav className="navbar">
      <button className="nav-logo" onClick={() => onNavClick("home")}>
        <span className="nav-logo__icon" aria-hidden="true">
          :)
        </span>
        <span className="nav-logo__text">Roshan Langhi — 3D Portfolio</span>
      </button>

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
