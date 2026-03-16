import { useState } from "react";
import "./style/Contact.css";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");

  const apiUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/send"
      : "https://myportfolio-3qml.onrender.com/send";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending your message...");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("Message sent successfully. I will get back to you soon.");
        setFormData(initialFormData);
        return;
      }

      setStatus("Message could not be sent right now. Please try again.");
    } catch (error) {
      console.error(error);
      setStatus("Service is temporarily unavailable. Please try again later.");
    }
  };

  return (
    <section className="contact-overlay">
      <div className="contact-content">
        <p className="contact-kicker">Contact</p>
        <h2 className="contact-title">Let&apos;s build your next full-stack product.</h2>
        <p className="contact-subtitle">
          Share your project scope, timeline, and goals. I&apos;ll respond with a practical plan.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Tell me about your project"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contact-btn">
            Send Inquiry
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
