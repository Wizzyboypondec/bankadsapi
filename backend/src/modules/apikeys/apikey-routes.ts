import { Hono } from "hono";
import { generateApiKey, getApiKeys } from "./apikey-controllers";

const apiKeyRoutes = new Hono();

apiKeyRoutes.post("/generate", generateApiKey);
apiKeyRoutes.get("/", getApiKeys);

export default apiKeyRoutes;
