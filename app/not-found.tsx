import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/">
        <Button className="bg-[#2980b9] hover:bg-[#3498db]">Return to Home</Button>
      </Link>
    </div>
  )
}

