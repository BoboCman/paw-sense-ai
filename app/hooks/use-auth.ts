// app/hooks/use-auth.ts
"use client"
import { useState, useEffect, useRef } from "react"
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
  const redirectingRef = useRef(false)
  const lastPathRef = useRef<string | null>(null)
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
    // Skip if loading
    if (loading) return
    
    // Skip if already redirecting
    if (redirectingRef.current) return
    
    // Skip if path hasn't changed since last redirect
    if (lastPathRef.current === pathname) return
    
    // Debug logging
    console.log("Auth state check:", { 
      user: user?.userId, 
      pathname, 
      isAuthenticated: !!user,
      isPublic: isPublicPath(pathname),
      redirecting: redirectingRef.current
    })
    
    // Handle redirection based on auth state
    const shouldRedirectToLogin = !user && !isPublicPath(pathname)
    const shouldRedirectToHome = user && pathname === "/login"
    
    if (shouldRedirectToLogin) {
      // Prevent further redirects
      redirectingRef.current = true
      lastPathRef.current = pathname
      
      console.log("Redirecting to login...")
      
      // Navigate to login
      router.push("/login")
      
      // Reset redirect flag after a delay (longer than previous attempt)
      setTimeout(() => {
        redirectingRef.current = false
      }, 1000)
    } 
    else if (shouldRedirectToHome) {
      // Prevent further redirects
      redirectingRef.current = true
      lastPathRef.current = pathname
      
      console.log("Redirecting to home...")
      
      // Navigate to home
      router.push("/")
      
      // Reset redirect flag after a delay
      setTimeout(() => {
        redirectingRef.current = false
      }, 1000)
    }
  }, [user, loading, pathname, router])
  
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
    if (redirectingRef.current) return
    
    logoutUser()
    setUser(null)
    
    // Prevent redirects during logout
    redirectingRef.current = true
    router.push("/login")
    
    // Reset redirect flag after navigation
    setTimeout(() => {
      redirectingRef.current = false
    }, 1000)
  }
  
  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  }
}
