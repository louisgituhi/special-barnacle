"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card"
import { Label } from "./ui/label"
import { Loader2 } from "lucide-react"
import { signUp } from "@/lib/auth-client"
import { Form, FormField, FormControl, FormItem, FormLabel } from "./ui/form"
import { createAvatar } from "@dicebear/core"
import { glass } from "@dicebear/collection"


const avatar = createAvatar(glass, {
    seed: "Aneka",
    flip: true,
    rotate: 90,
    scale: 100,
    radius: 0,
    size: 48,
    backgroundColor: [ "b6e3f4","c0aede","d1d4f9","ffd5dc","ffdfbf" ],
    backgroundType: [ "gradientLinear","solid" ],
    translateX: -50
})

const svg = avatar.toString()

const signupFormSchema = z.object({
        firstname: z
            .string()
            .min(2, { message: 'Name must be at least 2 characters long.' })
            .trim(),
        lastname: z
            .string()
            .min(2, { message: 'Name must be at least 2 characters long.' })
            .trim(),
        email: z
            .string()
            .email({ message: 'Please enter a valid email.' })
            .trim(),
        password: z
            .string()
            .min(8, { message: 'Be at least 8 characters long' })
            .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
            .regex(/[0-9]/, { message: 'Contain at least one number.' })
            .regex(/[^a-zA-Z0-9]/, { message: 'Contain at least one special character.',})
            .trim(),
        confirmPassword: z
            .string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

export default function SignupForm() {

    const [ loading, setLoading ] = useState(false)
    const { toast } = useToast()

    const form = useForm<z.infer<typeof signupFormSchema>>({
        resolver: zodResolver(signupFormSchema), 
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const router = useRouter();

    async function signUpHandler(values: z.infer<typeof signupFormSchema>) {

        const res = await signUp.email({
            name: `${values.firstname} ${values.lastname}`,
            email: values.email,
            image: svg,
            password: values.password,
            callbackURL: "/dashboard",
            fetchOptions: {
                onResponse: () => {
                    setLoading(false)
                },
                onRequest: () => {
                    setLoading(true)
                },
                onError: (ctx) => {
                    toast({
                        title: "Signup failed",
                        description: `${ ctx.error.message }`
                    })
                },
                onSuccess: (ctx) => {
                    toast({
						title: "Success",
						description: "Account created successfully"
					})
                    router.push("/dashboard")
                }
            }
        })

    }

  return (
    <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Create your account to get started.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={ form.handleSubmit(signUpHandler)} className="space-y-4">
                        <FormField
                            control={ form.control }
                            name="firstname"
                            render={ ({ field }) => (
                            <FormItem>
                                <FormLabel>Firstname</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John" {...field}/>
                                    </FormControl>
                            </FormItem>
                            )}
                        />

                        <FormField
                            control={ form.control }
                            name="lastname"
                            render={ ({ field }) => (
                            <FormItem>
                                <FormLabel>Lastname</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Doe" {...field}/>
                                    </FormControl>
                            </FormItem>
                            )}
                        />

                        <FormField
                            control={ form.control }
                            name="email"
                            render={ ({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="johndoe@mail.com" {...field}/>
                                    </FormControl>
                            </FormItem>
                            )}
                        />

                        <FormField
                            control={ form.control }
                            name="password"
                            render={ ({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field}/>
                                    </FormControl>
                            </FormItem>
                            )}
                        />

                        <FormField
                            control={ form.control }
                            name="confirmPassword"
                            render={ ({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field}/>
                                    </FormControl>
                            </FormItem>
                            )}
                        />

                        <Button type="submit">
                        {loading ? (
                            <Loader2 size={16} className="animate-spin" />
                                ) : (
                                    "Create an account"
                                )}
                        </Button>

                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
  )
}