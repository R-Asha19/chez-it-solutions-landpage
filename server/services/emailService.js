import { Resend } from "resend";

/**
 * Sends "new lead" email notifications using Resend's HTTP API.
 * Uses HTTPS, not SMTP — avoids port-blocking issues common on
 * cloud hosts like Render free tier.
 */

const getResend = () => new Resend(process.env.RESEND_API_KEY);

export const sendLeadNotification = async (lead) => {
  const recipient = process.env.ADMIN_EMAIL;

  if (!recipient) {
    console.warn("ADMIN_EMAIL not set — skipping email notification.");
    return;
  }
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping email notification.");
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
    const resend = getResend();
    await resend.emails.send({
      from: "Chez IT Solutions <notifications@chezitsolutions.com>",
      to: recipient,
      subject: `New Lead: ${lead.name}`,
      text: messageLines,
    });
    console.log("Lead notification email sent.");
  } catch (err) {
    console.error("Failed to send email notification:", err.message);
  }
};