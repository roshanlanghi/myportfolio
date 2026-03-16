import "./style/Home.css";

const highlights = [
  { label: "Experience", value: "2+ Years" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Core Stack", value: "MERN + SQL" },
];

const Home = ({ onNavClick }) => {
  return (
    <section className="home-overlay">
      <div className="home-content">
        <p className="home-kicker">Professional Portfolio</p>
        <h1 className="home-title">Building robust full-stack products from idea to deployment.</h1>

        <p className="home-subtitle">
          I design scalable backends, polished frontend interfaces, and production-ready deployments.
          My focus is shipping maintainable, user-centered software with measurable impact.
        </p>

        <div className="home-buttons">
          <button className="home-btn" onClick={() => onNavClick("projects")}>
            View Projects
          </button>
          <button className="home-btn secondary" onClick={() => onNavClick("contact")}>
            Book a Call
          </button>
        </div>

        <div className="home-highlights">
          {highlights.map((item) => (
            <article className="home-highlight-card" key={item.label}>
              <p className="home-highlight-value">{item.value}</p>
              <p className="home-highlight-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
