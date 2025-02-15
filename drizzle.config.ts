import dotenv from "dotenv"
import { defineConfig } from "drizzle-kit"

dotenv.config();

export default defineConfig({
    schema: "src/database/schema.ts",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgres://postgres.wbhhtrkfzagvxbrupuxx:HeXFsRqKXkQvNf7L@aws-0-us-west-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x'
    }
})