import React, { useState } from "react";
import "./style/Contact.css";

const Contact = () => {
  // form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // status
  const [status, setStatus] = useState("");

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending message...");

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Server error. Please try later.");
    }
  };

  return (
    <div className="contact-overlay">
      <div className="contact-content">
        <h1 className="contact-title">📬 Get in Touch</h1>
        <p className="contact-subtitle">
          I'd love to hear from you! Whether it's a project, idea, or
          collaboration — let’s connect and build something futuristic together ⚡
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
