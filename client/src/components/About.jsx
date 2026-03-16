import "./style/About.css";

const About = () => {
  const services = [
    { title: "Web Developer" },
    { title: "React Native Developer" },
    { title: "Backend Developer" },
    { title: "Content Creator" },
  ];

  return (
    <div className="about">
      <p className="section-label">INTRODUCTION</p>
      <h2 className="section-title">Overview.</h2>
      <p className="section-description">
        I'm a computer engineering student with experience in JavaScript,
        TypeScript, React, Node.js, and Three.js. I learn quickly and collaborate
        closely to build scalable, user-friendly solutions that solve real-world
        problems.
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon" aria-hidden="true" />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
