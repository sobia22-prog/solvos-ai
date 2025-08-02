const express = require('express');
const router = express.Router();
const db = require('../db');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: "866767001@smtp-brevo.com",
    pass: "SdMpQzNfDxtBajPk",
  },
});

const sendConfirmationEmail = async (toEmail, name) => {
  try {
    await transporter.sendMail({
  from: '"Solvos AI" <sobiab1267@gmail.com>',
  to: toEmail,
  subject: "Welcome to Solvos AI ",
  html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #2b65ec;">Welcome to Solvos AI, ${name || 'there'}!</h2>
      <p>Thank you for reaching out to us. We’re excited to have you on board!</p>
      <p>We've successfully received your demo request. Our team is reviewing your details and will get in touch with you shortly.</p>
      <p>If you have any immediate questions, feel free to reply to this email.</p>
      <br/>
      <p>Warm regards,<br/>
      <strong>Team Solvos AI</strong></p>
      <hr/>
      <small style="color: #888;">This is an automated email. Please do not reply directly to it.</small>
    </div>
  `,
});
console.log(`Welcome email sent to ${toEmail}`);

  } catch (err) {
    console.error("Email error:", err);
  }
};

router.post('/', (req, res) => {
  const { full_name, email, phone, company, details } = req.body;

  const sql = `
    INSERT INTO users (full_name, email, phone, company, details)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [full_name, email, phone, company, details], async (err, result) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    await sendConfirmationEmail(email, full_name);

    res.status(200).json({ message: 'Demo request submitted successfully!' });
  });
});

module.exports = router;
