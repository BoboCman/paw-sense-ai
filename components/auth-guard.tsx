"use client"
import type React from "react"
import { useEffect, useState, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import { getCurrentUser, isPublicPath } from "@/app/utils/auth-utils"

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const redirectingRef = useRef(false)
  const router = useRouter()
  const pathname = usePathname()
  
  useEffect(() => {
    console.log("AuthGuard checking path:", pathname, "isPublic:", isPublicPath(pathname));
    
    // Skip auth check for public paths
    if (isPublicPath(pathname)) {
      console.log("Public path detected, continuing");
      setLoading(false);
      return;
    }
    
    // Skip if already redirecting
    if (redirectingRef.current) {
      console.log("Already redirecting, skipping check");
      return;
    }
    
    // Check if user is authenticated
    const user = getCurrentUser();
    console.log("User authenticated:", !!user);
    
    if (!user) {
      // Prevent multiple redirects
      redirectingRef.current = true;
      
      // Redirect to login if not authenticated
      console.log("AuthGuard redirecting to login");
      
      if (pathname !== "/login") {
        router.push("/login");
      } else {
        // We're already on the login page, don't redirect again
        setLoading(false);
      }
      
      // Reset redirect flag after delay
      setTimeout(() => {
        redirectingRef.current = false;
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }
  }, [pathname, router]);
  
  // Show loading state
  if (loading && !isPublicPath(pathname)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#2980b9] border-t-transparent" />
      </div>
    );
  }
  
  // Render children if authenticated or on public path
  return <>{children}</>;
}
