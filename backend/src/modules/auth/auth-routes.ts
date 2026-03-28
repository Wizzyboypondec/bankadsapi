import { Hono } from "hono";
import { register, login, getMe } from "./auth-controllers";

const authRoutes = new Hono();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.get("/me", getMe);

export default authRoutes;
