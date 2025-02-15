import { useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useToast } from "@/hooks/use-toast";
import { client } from "@/lib/auth-client";
import { Table, TableHeader, TableRow, TableHead, TableBody,TableCell } from "./ui/table";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Fingerprint, Loader2, Trash, Plus } from "lucide-react";

export default function AddPasskey() {

    const [ isOpen, setIsOPen ] = useState(false);
    const [ passkeyName, setPasskeyName ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    const { toast } = useToast()
    // const queryClient = useQueryClient();

    const handleAddPasskey = async () => {
        if(!passkeyName) {
            toast({
                title: "Passkey name is required",
                description: "Please enter a passkey name"
            });
            return;
        }
        setIsLoading(true);
        const res = await client.passkey.addPasskey({
            name: passkeyName,
        });
        if (res?.error) {
            toast({
                title: `${res.error.message}`,
                description: "Error registering passkey"
            });
        } else {
            setIsOPen(false);
            toast({
                title: "Success",
                description: "Passkey added successfully. You can use it to login"
            })
        }
        setIsLoading(false)
    }

    return (
        <Dialog open={ isOpen } onOpenChange={ setIsOPen }>
            <DialogTrigger asChild>
                <Button variant="outline" className="gap-2 text-xs md:text-sm">
                <Plus size={15} />
                    Add New Passkey
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] w-11/12">
                <DialogHeader>
                    <DialogTitle>Add new Passkey</DialogTitle>
                    <DialogDescription>
                        Create a new passkey to securely access your account without a
                        password.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2">
					<Label htmlFor="passkey-name">Passkey Name</Label>
					<Input
						id="passkey-name"
						value={passkeyName}
						onChange={(e) => setPasskeyName(e.target.value)}
					/>
				</div>
                <DialogFooter>
                <Button
						disabled={isLoading}
						type="submit"
						onClick={handleAddPasskey}
						className="w-full"
					>
						{isLoading ? (
							<Loader2 size={15} className="animate-spin" />
						) : (
							<>
								<Fingerprint className="mr-2 h-4 w-4" />
								Create Passkey
							</>
						)}
					</Button>
				</DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

// export function ListPasskeys() {
//     const { data, error } = client.useListPasskeys();
//     const [ isOpen, setIsOpen ] = useState(false)
//     const [passkeyName, setPasskeyName] = useState("");

//     const handleAddPasskey = async () => {
// 		if (!passkeyName) {
// 			toast.error("Passkey name is required");
// 			return;
// 		}
// 		setIsLoading(true);
// 		const res = await client.passkey.addPasskey({
// 			name: passkeyName,
// 		});
// 		setIsLoading(false);
// 		if (res?.error) {
// 			toast.error(res?.error.message);
// 		} else {
// 			toast.success("Passkey added successfully. You can now use it to login.");
// 		}
// 	};
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [isDeletePasskey, setIsDeletePasskey] = useState<boolean>(false);

//     return (
//         <Dialog open={isOpen} onOpenChange={setIsOpen}>
// 			<DialogTrigger asChild>
// 				<Button variant="outline" className="text-xs md:text-sm">
// 					<Fingerprint className="mr-2 h-4 w-4" />
// 					<span>Passkeys {data?.length ? `[${data?.length}]` : ""}</span>
// 				</Button>
// 			</DialogTrigger>
// 			<DialogContent className="sm:max-w-[425px] w-11/12">
// 				<DialogHeader>
// 					<DialogTitle>Passkeys</DialogTitle>
// 					<DialogDescription>List of passkeys</DialogDescription>
// 				</DialogHeader>
// 				{data?.length ? (
// 					<Table>
// 						<TableHeader>
// 							<TableRow>
// 								<TableHead>Name</TableHead>
// 							</TableRow>
// 						</TableHeader>
// 						<TableBody>
// 							{data.map((passkey) => (
// 								<TableRow
// 									key={passkey.id}
// 									className="flex  justify-between items-center"
// 								>
// 									<TableCell>{passkey.name || "My Passkey"}</TableCell>
// 									<TableCell className="text-right">
// 										<button
// 											onClick={async () => {
// 												const res = await client.passkey.deletePasskey({
// 													id: passkey.id,
// 													fetchOptions: {
// 														onRequest: () => {
// 															setIsDeletePasskey(true);
// 														},
// 														onSuccess: () => {
// 															toast("Passkey deleted successfully");
// 															setIsDeletePasskey(false);
// 														},
// 														onError: (error) => {
// 															toast.error(error.error.message);
// 															setIsDeletePasskey(false);
// 														},
// 													},
// 												});
// 											}}
// 										>
// 											{isDeletePasskey ? (
// 												<Loader2 size={15} className="animate-spin" />
// 											) : (
// 												<Trash
// 													size={15}
// 													className="cursor-pointer text-red-600"
// 												/>
// 											)}
// 										</button>
// 									</TableCell>
// 								</TableRow>
// 							))}
// 						</TableBody>
// 					</Table>
// 				) : (
// 					<p className="text-sm text-muted-foreground">No passkeys found</p>
// 				)}
// 				{!data?.length && (
// 					<div className="flex flex-col gap-2">
// 						<div className="flex flex-col gap-2">
// 							<Label htmlFor="passkey-name" className="text-sm">
// 								New Passkey
// 							</Label>
// 							<Input
// 								id="passkey-name"
// 								value={passkeyName}
// 								onChange={(e) => setPasskeyName(e.target.value)}
// 								placeholder="My Passkey"
// 							/>
// 						</div>
// 						<Button type="submit" onClick={handleAddPasskey} className="w-full">
// 							{isLoading ? (
// 								<Loader2 size={15} className="animate-spin" />
// 							) : (
// 								<>
// 									<Fingerprint className="mr-2 h-4 w-4" />
// 									Create Passkey
// 								</>
// 							)}
// 						</Button>
// 					</div>
// 				)}
// 				<DialogFooter>
// 					<Button onClick={() => setIsOpen(false)}>Close</Button>
// 				</DialogFooter>
// 			</DialogContent>
// 		</Dialog>
//     )
// }