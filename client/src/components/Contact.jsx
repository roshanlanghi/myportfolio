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
    <div className="contact-overlay">
      <div className="contact-content">
        <h1 className="contact-title">📬 Get in Touch</h1>
        <p className="contact-subtitle">
          I'd love to hear from you! Whether it's a project or collaboration —
          let’s build something futuristic ⚡
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message 🚀
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
