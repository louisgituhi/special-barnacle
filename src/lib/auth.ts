import { betterAuth } from "better-auth";
import { db } from "@/database/db";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { passkey } from "better-auth/plugins/passkey";
import * as schema from "../database/schema"
import { nextCookies } from "better-auth/next-js";
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user: schema.user,
            session: schema.session,
            account: schema.account,
            verification: schema.verification,
            passkey: schema.passkey,
        },
        usePlural: false,
    }),
    emailAndPassword: {
        enabled: true
    },
    plugins: [
        passkey({
            // rpID: "localhost", // localhost
            rpID: "https://special-barnacle-8w2w6svql-louisgituhis-projects.vercel.app", // prod
            rpName: "myrental-auth",
            origin: "http://localhost:3000",
        }),
        nextCookies()
    ]
})