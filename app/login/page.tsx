"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { authenticateUser, getCurrentUser } from "@/app/utils/auth-utils"

export default function LoginPage() {
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  
  // Check if already logged in
  if (typeof window !== "undefined") {
    const user = getCurrentUser()
    if (user) {
      router.push("/")
      return null // Return null while redirecting
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    
    const user = authenticateUser(userId, password)
    if (user) {
      // Successful login
      router.push("/")
    } else {
      setError("Invalid credentials")
    }
  }
  
  return (
    // Your login form JSX
  )
}
