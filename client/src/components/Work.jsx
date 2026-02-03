import "./style/Work.css";

const Work = () => {
  const experiences = [
    {
      role: "React.js Developer",
      company: "Starbucks",
      date: "March 2020 - April 2021",
      bullets: [
        "Developing and maintaining web applications using React.js and related technologies.",
        "Collaborating with cross-functional teams including designers and product managers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback.",
      ],
    },
    {
      role: "React Native Developer",
      company: "Tesla",
      date: "Jan 2021 - Feb 2022",
      bullets: [
        "Building mobile experiences with React Native and modern tooling.",
        "Coordinating with UI teams to deliver pixel-perfect interfaces.",
        "Optimizing app performance and ensuring consistent UX.",
        "Mentoring peers and sharing reusable component libraries.",
      ],
    },
    {
      role: "Web Developer",
      company: "Shopify",
      date: "Jan 2022 - Jan 2023",
      bullets: [
        "Delivering feature-rich storefronts with reusable front-end components.",
        "Improving site performance and accessibility across devices.",
        "Partnering with stakeholders to ship iterative improvements.",
        "Maintaining documentation and onboarding resources.",
      ],
    },
  ];

  return (
    <div className="work">
      <p className="section-label">WHAT I HAVE DONE SO FAR</p>
      <h2 className="section-title">Work Experience.</h2>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <div
            key={experience.role}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-card">
              <h3>{experience.role}</h3>
              <p className="timeline-company">{experience.company}</p>
              <ul>
                {experience.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="timeline-dot">
              <span>{experience.company.slice(0, 1)}</span>
            </div>
            <p className="timeline-date">{experience.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
