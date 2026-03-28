import mongoose, { Schema } from "mongoose";

const campaignSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  status: { type: String, enum: ["active", "paused", "completed"], default: "active" },
  impressions: { type: Number, default: 0 },
  clicks: { type: Number, default: 0 },
  budget: { type: Number, default: 0 },
  spent: { type: Number, default: 0 },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  segments: [{ type: String }],
  channels: [{ type: String }],
  imageUrl: { type: String },
  videoUrl: { type: String },
  cta: { type: String }
});

export const Campaign = mongoose.model("Campaign", campaignSchema);
