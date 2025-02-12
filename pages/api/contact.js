import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const { name, email, subject, message } = req.body;

  // Create a Nodemailer transporter using Gmail
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail App Password
    },
  });

  try {
    // Send email with a fixed "from" and dynamic "replyTo"
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Gmail will override the from address
      replyTo: email, // The user's email so that replies go to them
      to: "rafaelfelic@gmail.com", // Receiving email address
      subject: subject || "New Contact Form Submission",
      text: `From: ${name} <${email}>\n\n${message}`, // Include sender details in the email content
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Error sending email",
      error: error.message,
    });
  }
}
