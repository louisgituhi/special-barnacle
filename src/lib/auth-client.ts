import { passkeyClient, organizationClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react";
import { toast } from "sonner"
export const client = createAuthClient({
    plugins: [
        organizationClient(),
        passkeyClient()
    ],
    fetchOptions: {
        onError(e) {
            if (e.error.status === 429) {
                toast.error("Too many requests, please try again later")
            }
        }
    }
});

export const { 
    signIn, 
    signUp, 
    signOut, 
    useSession, 
    // user, 
    organization, 
    useListOrganizations, 
    useActiveOrganization,
} = client;

export const data = await client.passkey.addPasskey();