import { Context } from "hono";
import { ApiKey } from "../models/apikey-model";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_key_bankads";

export const generateApiKey = async (c: Context) => {
  try {
    const authHeader = c.req.header("Authorization");
    if (!authHeader) return c.json({ error: "Unauthorized" }, 401);
    const decoded = jwt.verify(authHeader.split(" ")[1], JWT_SECRET) as any;

    const { bankName, contactEmail } = await c.req.json();
    
    // Generate a random 32-char key
    const rawKey = "pk_live_" + Array.from({length: 24}, () => Math.floor(Math.random()*36).toString(36)).join('');

    const newKey = new ApiKey({
      bankName: bankName || "My Bank",
      apiKey: rawKey,
      contactEmail: contactEmail || "admin@bank.com",
      status: "active",
      plan: "pro", // Default to pro for now
      userId: decoded.id // Implicitly bind to the user who requested it if we added userId to schema
    });

    await newKey.save();

    return c.json({ message: "API Key Generated", key: newKey }, 201);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const getApiKeys = async (c: Context) => {
  try {
    const authHeader = c.req.header("Authorization");
    if (!authHeader) return c.json({ error: "Unauthorized" }, 401);
    const decoded = jwt.verify(authHeader.split(" ")[1], JWT_SECRET) as any;

    // Filter by user if schema supported it, or just return all for admin
    const keys = await ApiKey.find({});
    return c.json(keys);
  } catch (error) {
    return c.json({ error: "Internal Error" }, 500);
  }
};
