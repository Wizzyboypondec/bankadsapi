import { serve } from "@hono/node-server";
import buildServer from "./app-setup";
import { getOrThrowEnv } from "./config/config";

const startServer = async () => {
  try {
    const app = await buildServer();
    const port = Number(getOrThrowEnv.PORT);
    serve({
      fetch: app.fetch,
      port,
    });
    console.log(`Server is running on port ${port}`);
  } catch (error: any) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
