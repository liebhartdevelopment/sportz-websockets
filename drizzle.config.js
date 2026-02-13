import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DATEBASE_URL) {
  throw new Error("DATABASE_URL is not set in.env file");
}

export default defineConfig({
  schema: "./src/db/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATEBASE_URL,
  },
});
