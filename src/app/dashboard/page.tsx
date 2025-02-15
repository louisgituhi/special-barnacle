import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UserCard from "./user-card";
import { useSession, signOut, client } from "@/lib/auth-client";

export default async function DashboardPage() {
	const [ session, activeSessions ] = await Promise.all([
		auth.api.getSession({
			headers: await headers()
		}),
		auth.api.listSessions({
			headers: await headers()
		})
	]).catch((e) => {
		redirect('/sign-in')
	})
	return (
		<div className="w-full">
			<div className="flex gap-4 flex-col">
				<UserCard />
			</div>
		</div>
	);
}