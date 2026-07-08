import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Enter a valid email address"],
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 20,
    },
    company: {
      type: String,
      trim: true,
      maxlength: 150,
    },
    website: {
      type: String,
      trim: true,
      maxlength: 200,
    },
    message: {
      type: String,
      trim: true,
      maxlength: 2000,
    },
    source: {
      // which CTA the lead came from
      type: String,
      enum: ["growth_audit", "strategy_call", "contact_page", "get_started"],
      default: "contact_page",
    },
    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
