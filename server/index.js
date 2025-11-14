const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// ---------------------------------------------
// CONTACT FORM API (POST /send)
// ---------------------------------------------
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.json({ success: false, error: "Missing fields" });
  }

  try {
    // Transport setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.MAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true });
  } catch (err) {
    console.error("Mail Error:", err);
    return res.json({ success: false });
  }
});

// ---------------------------------------------
// SERVE FRONTEND (React build)
// ---------------------------------------------
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// ---------------------------------------------
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
