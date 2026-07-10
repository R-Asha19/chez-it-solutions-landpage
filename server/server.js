import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";


dotenv.config();

const app = express();

// Core middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  })
);

// Basic rate limiting on lead submission to stop spam/bot abuse
const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  message: { success: false, message: "Too many requests. Please try again later." },
});
app.use("/api/leads", leadLimiter);

app.use("/api/leads", leadRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "chez-it-solutions-api" });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});