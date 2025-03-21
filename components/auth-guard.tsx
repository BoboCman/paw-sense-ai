"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, isLoading, isPublicPath } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Skip auth check for public paths (login and legal pages)
    if (isPublicPath(pathname)) {
      return
    }

    // If auth check is complete and user is not logged in, redirect to login
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router, pathname, isPublicPath])

  // Show nothing while loading or if no user and not on a public path
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#2980b9] border-t-transparent" />
      </div>
    )
  }

  if (!user && !isPublicPath(pathname)) {
    return null
  }

  // If user is logged in or on a public path, show children
  return <>{children}</>
}

