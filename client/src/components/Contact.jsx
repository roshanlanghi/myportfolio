import { useState } from "react";
import "./style/Contact.css";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");

  const apiUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/send"
      : "https://myportfolio-3qml.onrender.com/send";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending message...");

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData(initialFormData);
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Server error. Try later.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-card">
        <p className="section-label">GET IN TOUCH</p>
        <h2 className="section-title">Contact.</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span>Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span>Your Message</span>
            <textarea
              name="message"
              placeholder="What do you want to say?"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
      <div className="contact-visual" aria-hidden="true">
        <div className="globe">
          <span className="globe-ring ring-1" />
          <span className="globe-ring ring-2" />
          <span className="globe-ring ring-3" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
