import "./style/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "I thought it was impossible to make a website as beautiful as our product, but Roshan proved me wrong.",
      name: "Sara Lee",
      title: "CFO of Acme Co",
    },
    {
      quote:
        "I've never met a web developer who truly cares about their clients' success like Roshan does.",
      name: "Chris Brown",
      title: "COO of DEF Corp",
    },
    {
      quote:
        "After Roshan optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      title: "CTO of 456 Enterprises",
    },
  ];

  return (
    <div className="testimonials">
      <p className="section-label">WHAT OTHERS SAY</p>
      <h2 className="section-title">Testimonials.</h2>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="quote-mark">“</div>
            <p className="quote-text">{testimonial.quote}</p>
            <div className="testimonial-footer">
              <div>
                <p className="testimonial-name">@ {testimonial.name}</p>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
              <div className="testimonial-avatar" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
