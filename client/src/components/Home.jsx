import "./style/Home.css";

const Home = ({ onNavClick }) => {
  return (
    <div className="home-overlay">
      <div className="home-content">
        <h1 className="home-title">
          ⚡ Welcome to Roshan's 3D Universe
        </h1>

        <p className="home-subtitle">
          I create next-gen web experiences blending design, code, and 3D interactivity.  
          Let’s explore creativity beyond dimensions 🚀
        </p>

        <div className="home-buttons">
          <button
            className="home-btn"
            onClick={() => onNavClick("projects")}
          >
            Explore Projects
          </button>

          <button
            className="home-btn secondary"
            onClick={() => onNavClick("contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
