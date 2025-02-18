import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

async function sendTestEmail() {
  console.log("Starting the email test...");

  try {
    console.log("Creating transporter...");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Transporter created successfully.");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email",
      text: "This is a test email.",
    };

    console.log("Sending test email...");
    await transporter.sendMail(mailOptions);
    console.log("Test email sent successfully");
  } catch (error) {
    console.error("Failed to send test email:", error);
  }
}

sendTestEmail();
