"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { PawPrint, Shield } from "lucide-react"

export default function LoginPage() {
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate inputs
    if (!userId.trim() || !password.trim()) {
      setError("Please enter both username and password")
      return
    }

    setIsLoading(true)

    try {
      const success = await login(userId, password)
      if (success) {
        router.push("/")
      } else {
        setError("Invalid username or password. Please try again.")
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.")
      console.error("Login error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#2980b9] to-[#3498db] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="bg-[#2980b9] p-3 rounded-full">
              <PawPrint className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">PawSense AI</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access the platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userId">Username</Label>
              <Input
                id="userId"
                placeholder="Enter your username"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-[#27ae60]" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  Logging in...
                </span>
              ) : (
                "Log in"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          {/* Security Notice */}
          <div className="w-full mt-4 p-3 bg-gray-50 rounded-md border border-gray-200">
            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-gray-600">
                <p className="font-medium mb-1">Secure Access</p>
                <p>
                  This is a protected platform for authorized users only. Please contact your administrator if you need
                  access credentials.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="w-full mt-4 text-center text-xs text-gray-500">
            <p className="mb-2">By logging in, you agree to our:</p>
            <div className="flex justify-center space-x-4">
              <Link href="/terms" className="text-[#2980b9] hover:underline">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-[#2980b9] hover:underline">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-[#2980b9] hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

