import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-[#2980b9]">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.7" />
                  <circle cx="24" cy="12" r="4" fill="currentColor" opacity="0.9" />
                  <circle cx="12" cy="24" r="4" fill="currentColor" opacity="0.9" />
                  <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.7" />
                </svg>
              </div>
              <span className="font-bold text-xl">PawSense AI</span>
            </Link>
            <div className="mt-3 space-y-2">
              <p className="text-gray-600"></p>
              <p className="text-gray-600 italic"></p>
              <p className="flex items-center text-gray-600">
        
              </p>
            </div>
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

