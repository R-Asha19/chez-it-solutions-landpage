import nodemailer from "nodemailer";

/**
 * Sends "new lead" email notifications using Gmail + an App Password.
 * Much simpler than WhatsApp-web.js — no browser, no session files,
 * no Chrome/Puppeteer, works reliably on any host including Render free tier.
 */

let transporter = null;

const getTransporter = () => {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    family: 4, // Force IPv4 — Render has IPv6 connectivity issues with Gmail SMTP
  });

  return transporter;
};

/**
 * Sends a plain-text email to the configured admin address.
 * Fails silently (logs only) so an email outage never blocks lead saving.
 */
export const sendLeadNotification = async (lead) => {
  const recipient = process.env.ADMIN_EMAIL;

  if (!recipient) {
    console.warn("ADMIN_EMAIL not set — skipping email notification.");
    return;
  }
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn("GMAIL_USER or GMAIL_APP_PASSWORD not set — skipping email notification.");
    return;
  }

  const messageLines = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.phone ? `Phone: ${lead.phone}` : null,
    lead.company ? `Company: ${lead.company}` : null,
    `Source: ${lead.source}`,
    lead.message ? `Message: ${lead.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await getTransporter().sendMail({
      from: `"Chez IT Solutions Website" <${process.env.GMAIL_USER}>`,
      to: recipient,
      subject: `New Lead: ${lead.name}`,
      text: messageLines,
    });
    console.log("Lead notification email sent.");
  } catch (err) {
    console.error("Failed to send email notification:", err.message);
  }
};