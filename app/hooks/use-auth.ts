// app/hooks/use-auth.ts
"use client"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import {
  authenticateUser,
  getCurrentUser,
  logoutUser,
  isPublicPath,
  type AuthenticatedUser,
} from "@/app/utils/auth-utils"

export function useAuth() {
  const [user, setUser] = useState<AuthenticatedUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  
  // Load user on initial mount
  useEffect(() => {
    const currentUser = getCurrentUser()
    setUser(currentUser)
    setLoading(false)
  }, [])
  
  // Check authentication status and redirect if needed
  useEffect(() => {
    // Skip if loading or already in the process of redirecting
    if (loading || isRedirecting) return
    
    // Debug logging - you can remove this later
    console.log("Auth state:", { 
      user: user?.userId, 
      pathname, 
      isAuthenticated: !!user,
      isPublic: isPublicPath(pathname)
    })
    
    // Handle redirection based on auth state
    if (!user && !isPublicPath(pathname)) {
      // Not authenticated and on protected page
      setIsRedirecting(true)
      router.push("/login").then(() => {
        // Reset the redirecting flag after navigation completes
        setTimeout(() => setIsRedirecting(false), 100)
      })
    } else if (user && pathname === "/login") {
      // Authenticated but on login page
      setIsRedirecting(true)
      router.push("/").then(() => {
        // Reset the redirecting flag after navigation completes
        setTimeout(() => setIsRedirecting(false), 100)
      })
    }
  }, [user, loading, pathname, router, isRedirecting])
  
  // Login function
  const login = async (userId: string, password: string): Promise<boolean> => {
    const authenticatedUser = authenticateUser(userId, password)
    if (authenticatedUser) {
      setUser(authenticatedUser)
      return true
    }
    return false
  }
  
  // Logout function
  const logout = () => {
    logoutUser()
    setUser(null)
    // Use the same redirection pattern as in the effect
    setIsRedirecting(true)
    router.push("/login").then(() => {
      setTimeout(() => setIsRedirecting(false), 100)
    })
  }
  
  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  }
}
