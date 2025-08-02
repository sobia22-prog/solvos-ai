const nodemailer = require("nodemailer");

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
      from: '"Solvos AI" <no-reply@solvos.ai>',
      to: toEmail,
      subject: "Your Request has been Received",
      html: `
        <p>Dear ${name || 'User'},</p>
        <p>Thank you for contacting Solvos AI! We’ve received your request and our team will reach out to you shortly.</p>
        <p>Best regards,<br/>Solvos AI Team</p>
      `,
    });
    console.log("Email sent to:", toEmail);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendConfirmationEmail };
