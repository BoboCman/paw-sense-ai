"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { getCurrentUser, isPublicPath } from "@/utils/auth-utils"

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Skip auth check for public paths
    if (isPublicPath(pathname)) {
      setLoading(false)
      return
    }

    // Check if user is authenticated
    const user = getCurrentUser()

    if (!user) {
      // Redirect to login if not authenticated
      router.push("/login")
    } else {
      setLoading(false)
    }
  }, [pathname, router])

  // Show loading state
  if (loading && !isPublicPath(pathname)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#2980b9] border-t-transparent" />
      </div>
    )
  }

  // Render children if authenticated or on public path
  return <>{children}</>
}

