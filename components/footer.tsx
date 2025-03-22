import Link from "next/link"
import { PawPrint } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <PawPrint className="h-5 w-5 text-[#2980b9]" />
              <span className="font-bold text-lg">PawSense AI</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">Intelligent analysis for balanced dog training</p>
            <p className="mt-1 text-xs text-gray-500 italic">
              A helpful tool to complement professional dog training advice
            </p>
            <p className="mt-2 text-xs text-gray-500 flex items-center">
              <span className="inline-block w-2 h-2 bg-[#27ae60] rounded-full mr-1"></span>
              Video quality affects results. Happy training!
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#2980b9]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#2980b9]">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/upload" className="text-gray-600 hover:text-[#2980b9]">
                  Upload Video
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#2980b9]">
                  Dog Training Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#2980b9]">
                  Behavior Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#2980b9]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-[#2980b9]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-[#2980b9]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-600 hover:text-[#2980b9]">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Financial Planner AI, LLC dba PawSense AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

