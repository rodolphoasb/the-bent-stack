import { type Config } from "drizzle-kit";

import * as dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export default {
  out: "./migrations",
  schema: "./src/schema.ts",
  breakpoints: true,
  driver: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    authToken: process.env.DATABASE_AUTH_TOKEN || "",
  },
} satisfies Config;
