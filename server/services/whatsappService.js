import pkg from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const { Client, LocalAuth } = pkg;

/**
 * Sends "new lead" notifications to your own WhatsApp using whatsapp-web.js.
 *
 * This is an UNOFFICIAL integration — it drives your real WhatsApp account
 * through WhatsApp Web (the same way linking a new device works). The first
 * time the server starts, a QR code prints in this terminal; scan it with
 * WhatsApp on your phone (Settings > Linked Devices > Link a Device).
 *
 * The session is cached in `server/.wwebjs_auth/` so you only need to scan
 * once — as long as that folder isn't deleted and you don't unlink the
 * device from your phone.
 *
 * Because this isn't Meta's official API, keep usage light (a handful of
 * notifications, not bulk messaging) to avoid WhatsApp flagging the number.
 */

let client = null;
let isReady = false;

export const initWhatsApp = () => {
  if (process.env.WHATSAPP_ENABLED === "false") {
    console.log("WhatsApp notifications disabled (WHATSAPP_ENABLED=false).");
    return;
  }

  client = new Client({
    authStrategy: new LocalAuth({ clientId: "chez-it-solutions" }),
    puppeteer: {
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  });

  client.on("qr", (qr) => {
    console.log("\nScan this QR code with WhatsApp (Linked Devices > Link a Device):\n");
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", () => {
    isReady = true;
    console.log("WhatsApp client is ready — lead notifications will be sent.");
  });

  client.on("auth_failure", (msg) => {
    console.error("WhatsApp authentication failed:", msg);
  });

  client.on("disconnected", (reason) => {
    isReady = false;
    console.warn("WhatsApp client disconnected:", reason);
  });

  client.initialize().catch((err) => {
    console.error("WhatsApp client failed to initialize:", err.message);
  });
};

/**
 * Sends a plain-text WhatsApp message to the configured admin number.
 * Fails silently (logs only) so a WhatsApp outage never blocks lead saving.
 */
export const sendLeadNotification = async (lead) => {
  const adminNumber = process.env.ADMIN_WHATSAPP_NUMBER;

  if (!adminNumber) {
    console.warn("ADMIN_WHATSAPP_NUMBER not set — skipping WhatsApp notification.");
    return;
  }
  if (!client || !isReady) {
    console.warn("WhatsApp client not ready — skipping notification for this lead.");
    return;
  }

  // whatsapp-web.js expects "<countrycode><number>@c.us", e.g. 917094640322@c.us
  const chatId = `${adminNumber.replace(/\D/g, "")}@c.us`;

  const message = [
    "🔔 *New lead — Chez IT Solutions*",
    "",
    `*Name:* ${lead.name}`,
    `*Email:* ${lead.email}`,
    lead.phone ? `*Phone:* ${lead.phone}` : null,
    lead.company ? `*Company:* ${lead.company}` : null,
    `*Source:* ${lead.source}`,
    lead.message ? `*Message:* ${lead.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await client.sendMessage(chatId, message);
  } catch (err) {
    console.error("Failed to send WhatsApp notification:", err.message);
  }
};