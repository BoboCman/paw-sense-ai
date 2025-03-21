"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  username: string
  fullName: string
  role: string
}

type Credentials = {
  username: string
  password: string
  fullName: string
  role: string
}

// Predefined list of valid credentials - not displayed to users
const VALID_CREDENTIALS: Credentials[] = [
  { username: "trainer1", password: "pawsense123", fullName: "Alex Johnson", role: "Dog Trainer" },
  { username: "owner2", password: "doggy456", fullName: "Sarah Williams", role: "Dog Owner" },
  { username: "vet3", password: "petcare789", fullName: "Dr. Michael Chen", role: "Veterinarian" },
  { username: "behaviorist4", password: "canine2023", fullName: "Emma Rodriguez", role: "Animal Behaviorist" },
  { username: "trainer5", password: "training567", fullName: "James Wilson", role: "Dog Trainer" },
  { username: "owner6", password: "fluffy890", fullName: "Olivia Garcia", role: "Dog Owner" },
  { username: "admin7", password: "admin1234", fullName: "Daniel Taylor", role: "Administrator" },
  { username: "vet8", password: "animal567", fullName: "Dr. Sophia Martinez", role: "Veterinarian" },
  { username: "trainer9", password: "pawsitive", fullName: "Noah Brown", role: "Dog Trainer" },
  { username: "demo10", password: "demo2023", fullName: "Guest User", role: "Demo Account" },
]

type AuthContextType = {
  user: User | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
  isPublicPath: (path: string) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user is already logged in on mount
  useEffect(() => {
    // Make sure we're in the browser environment before accessing localStorage
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("pawsense_user")
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
        } catch (e) {
          // Handle potential JSON parse error
          console.error("Failed to parse stored user data", e)
          localStorage.removeItem("pawsense_user")
        }
      }
      setIsLoading(false)
    }
  }, [])

  // Login function that checks against predefined credentials
  const login = async (username: string, password: string) => {
    const matchedUser = VALID_CREDENTIALS.find(
      (cred) => cred.username === username && cred.password === password
    )
    
    if (!matchedUser) {
      return false
    }
    
    const userInfo: User = {
      username: matchedUser.username,
      fullName: matchedUser.fullName,
      role: matchedUser.role,
    }
    
    setUser(userInfo)
    if (typeof window !== "undefined") {
      localStorage.setItem("pawsense_user", JSON.stringify(userInfo))
    }
    return true
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== "undefined") {
      localStorage.removeItem("pawsense_user")
    }
  }

  const isPublicPath = (path: string): boolean => {
    const publicPaths = ["/login", "/terms", "/privacy", "/cookie-policy"]
    return publicPaths.includes(path)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, isPublicPath }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
