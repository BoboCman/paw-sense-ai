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
    if (loading) return

    // If on a protected page and not authenticated, redirect to login
    if (!user && !isPublicPath(pathname)) {
      router.push("/login")
    }

    // If authenticated and on login page, redirect to home
    if (user && pathname === "/login") {
      router.push("/")
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
    logoutUser()
    setUser(null)
    router.push("/login")
  }

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  }
}

