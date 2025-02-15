'use client'

import { useState } from "react"
import { Loader2, LogOut, Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"
import { 
    Card, 
    CardContent, 
    CardFooter, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"
import AddPasskey from "@/components/add-passkey"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "@/lib/auth-client"

function encodeSvg(svg: string) {
	return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
export default function UserCard() {
    const router = useRouter()
    const { data } = useSession()
    const session = data 
    const [isSignOut, setIsSignOut] = useState<boolean>(false);
    return (
        <Card>
            <CardHeader>
				<CardTitle>User</CardTitle>
			</CardHeader>
            <CardContent>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
					<Avatar className="hidden h-9 w-9 sm:flex">
            			{session?.user.image && (
                		<AvatarImage src={encodeSvg(session?.user.image)} alt="User Avatar" />
            				)}
            			<AvatarFallback>{session?.user.name?.charAt(0)}</AvatarFallback>
        			</Avatar>
                        <div className="grid gap-1">
							<p className="text-sm font-medium leading-none">
								{session?.user.name}
							</p>
							<p className="text-sm">{session?.user.email}</p>
						</div>
                    </div>
                </div>
				<div className="border-y py-4 flex items-center flex-wrap justify-between gap-2">
					<div className="flex flex-col gap-2">
						<p className="text-sm">Passkeys</p>
						<div className="flex gap-2 flex-wrap">
							<AddPasskey />
						</div>
					</div>
				</div>
            </CardContent>
            <CardFooter className="gap-2 justify-between items-center">
                <Button
					className="gap-2 z-10"
					variant="secondary"
					onClick={async () => {
						setIsSignOut(true);
						await signOut({
							fetchOptions: {
								onSuccess() {
									router.push("/");
								},
							},
						});
						setIsSignOut(false);
					}}
					disabled={isSignOut}
				    >
					<span className="text-sm">
						{isSignOut ? (
							<Loader2 size={15} className="animate-spin" />
						) : (
							<div className="flex items-center gap-2">
								<LogOut size={16} />
								Sign Out
							</div>
						)}
					</span>
				</Button>
            </CardFooter>
        </Card>
    )
}