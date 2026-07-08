import Lead from "../models/Lead.js";
import { sendLeadNotification } from "../services/whatsappService.js";

// POST /api/leads
export const createLead = async (req, res) => {
  try {
    const { name, email, phone, company, website, message, source } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required.",
      });
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      company,
      website,
      message,
      source,
    });

    // Respond to the user right away — don't make them wait on WhatsApp.
    res.status(201).json({
      success: true,
      message: "Thanks! Our team will reach out to you shortly.",
      data: lead,
    });

    // Fire the notification after responding; failures are logged only,
    // never surfaced to the person who submitted the form.
    sendLeadNotification(lead).catch((err) =>
      console.error("sendLeadNotification error:", err.message)
    );
  } catch (err) {
    if (err.name === "ValidationError") {
      const firstError = Object.values(err.errors)[0].message;
      return res.status(400).json({ success: false, message: firstError });
    }
    console.error("createLead error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

// GET /api/leads  (simple internal listing, no auth yet — see README)
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: leads.length, data: leads });
  } catch (err) {
    console.error("getLeads error:", err.message);
    return res.status(500).json({ success: false, message: "Could not fetch leads." });
  }
};