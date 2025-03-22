"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { authenticateUser, getCurrentUser } from "@/app/utils/auth-utils"

export default function LoginPage() {
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const router = useRouter()
  
  // Check if already logged in
  useEffect(() => {
    const user = getCurrentUser()
    if (user) {
      router.push("/")
    }
  }, [router])
  
  // Handle redirect after successful login
  useEffect(() => {
    if (loginSuccess) {
      console.log("Login successful, redirecting to home...")
      router.push("/")
    }
  }, [loginSuccess, router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isLoggingIn) return
    
    setIsLoggingIn(true)
    setError("")
    
    try {
      console.log("Attempting login with:", userId)
      const user = authenticateUser(userId, password)
      
      if (user) {
        console.log("Authentication successful:", user)
        setLoginSuccess(true)
      } else {
        console.log("Authentication failed")
        setError("Invalid credentials")
        setIsLoggingIn(false)
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("An error occurred during login")
      setIsLoggingIn(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {loginSuccess ? (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
            Login successful! Redirecting...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="userId">
                Username
              </label>
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full p-2 border rounded"
                required
                autoComplete="username"
                disabled={isLoggingIn}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
                autoComplete="current-password"
                disabled={isLoggingIn}
              />
            </div>
            
            <button
              type="submit"
              className={`w-full ${isLoggingIn ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'} text-white py-2 rounded`}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        )}
        
        <div className="mt-4 text-center text-sm text-gray-500">
          By logging in, you agree to our{" "}
          <Link href="/terms" className="text-blue-500 hover:underline">Terms of Service</Link>,{" "}
          <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>, and{" "}
          <Link href="/cookie-policy" className="text-blue-500 hover:underline">Cookie Policy</Link>.
        </div>
      </div>
    </div>
  )
}
