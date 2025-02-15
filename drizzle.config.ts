import dotenv from "dotenv"
import { defineConfig } from "drizzle-kit"

dotenv.config();

export default defineConfig({
    schema: "src/database/schema.ts",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL as string
    }
})