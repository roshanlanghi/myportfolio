import "./style/Home.css";

const Home = ({ onNavClick }) => {
  return (
    <div className="hero">
      <div className="hero-marker" aria-hidden="true">
        <span className="hero-dot" />
        <span className="hero-line" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span>Roshan Langhi</span>
        </h1>
        <p className="hero-subtitle">
          I develop 3D visuals, user interfaces, and web applications.
        </p>
        <button className="hero-cta" onClick={() => onNavClick("about")}>
          Scroll to explore
        </button>
      </div>
    </div>
  );
};

export default Home;
