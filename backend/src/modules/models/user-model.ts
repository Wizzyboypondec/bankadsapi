import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  plan: { type: String, enum: ["basic", "pro", "enterprise"], default: "basic" },
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model("User", userSchema);
