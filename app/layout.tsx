// app/layout.tsx

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import AuthGuard from "@/components/auth-guard"

// Remove this line since you're not using an AuthProvider
// import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PawSense AI - Intelligent Dog Behavior Analysis",
  description: "Upload videos of your dog and receive AI-powered behavior analysis and training recommendations.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Remove the AuthProvider wrapper */}
          <AuthGuard>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </AuthGuard>
        </ThemeProvider>
      </body>
    </html>
  )
}
