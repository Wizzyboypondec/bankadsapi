import { Context } from "hono";
import { User } from "../models/user-model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_key_bankads";

export const register = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { name, email, password, plan } = body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return c.json({ error: "Email already exists" }, 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      plan: plan || "basic",
      role: email === "ikewisdom92@gmail.com" ? "admin" : "user",
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, JWT_SECRET, { expiresIn: "1d" });

    return c.json({
      message: "User created successfully",
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role, plan: newUser.plan }
    }, 201);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const login = async (c: Context) => {
  try {
    const { email, password } = await c.req.json();

    // Implicit admin seeder check
    if (email === "ikewisdom92@gmail.com" && password === "admin") {
      let adminUser = await User.findOne({ email: "ikewisdom92@gmail.com" });
      if (!adminUser) {
        const salt = await bcrypt.genSalt(10);
        adminUser = new User({
          name: "Ike Wisdom (Admin)",
          email: "ikewisdom92@gmail.com",
          password: await bcrypt.hash("admin", salt),
          role: "admin",
          plan: "enterprise"
        });
        await adminUser.save();
      }
    }

    const user = await User.findOne({ email });
    if (!user) {
      return c.json({ error: "Invalid credentials" }, 400);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return c.json({ error: "Invalid credentials" }, 400);
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });

    return c.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, plan: user.plan }
    });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const getMe = async (c: Context) => {
  try {
    const authHeader = c.req.header("Authorization");
    if (!authHeader) return c.json({ error: "No token provided" }, 401);
    
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string, role: string };
    
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return c.json({ error: "User not found" }, 404);

    return c.json(user);
  } catch (error: any) {
    return c.json({ error: "Invalid token" }, 401);
  }
};
