"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from "./ui/form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { Key, Fingerprint } from "lucide-react"
import Link from "next/link"
import { signIn } from "@/lib/auth-client"


const formSchema = z.object({
    email: z
      .string()
      .email({
        message: "This is not a valid email address"
    }),
    password: z
      .string()
      .min(8, { message: 'Be at least 8 characters long' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, { message: 'Contain at least one special character.',})
      .trim(),
})
export default function LoginForm() {

    const [ loading, setLoading ] = useState(false)
	  const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), 
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function signInHandler(values: z.infer<typeof formSchema>) {

              await signIn.email({
                  email: values.email,
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
                          title: "Failed to login",
                          description: `${ ctx.error.message }`
                        })
                      },
                      onSuccess(ctx) {
                        toast({
                          title: "Success",
                          description: "Login successful"
                        })
                      },
                  }
              })
         }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">Choose your preferred login method</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(signInHandler)} className="space-y-4">

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                      <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                      <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="********" {...field} />
                          </FormControl>
                          <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-right">
                <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full">
                  {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : null}
                  Sign In
              </Button>

              <div className="space-y-2">

                <Button variant="outline" className="w-full">
                  <Fingerprint className="mr-2" />
                  Sign in with Google
                </Button>

                <Button
                  onClick={ async () => {
                    await signIn.passkey({
                      callbackURL: "/dashboard"
                    });
                  }}
                  variant="outline" className="w-full">
                    <Key className="mr-2" />
                    {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : null}
                    Sign in with Passkey
                </Button>

              </div>

              <CardFooter className="flex justify-center">
                <p className="text-sm text-gray-500">
                  Don't have an account?{" "}
                  <Link href="/sign-up" className="text-blue-500 hover:underline">
                    Sign up
                  </Link>
                </p>
              </CardFooter>

            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}