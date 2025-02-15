import dotenv from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

dotenv.config();

const connectionString = process.env.SUPABASE_URL!

const client = postgres(connectionString, { prepare: false })
export const db = drizzle({ client });