"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getCurrentUser } from "@/app/utils/auth-utils"

export default function CookiePolicyPage() {
  const [mounted, setMounted] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    setMounted(true)
    // Just get the user directly without using the useAuth hook
    const user = getCurrentUser()
    setCurrentUser(user)
  }, [])

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          {/* Static content only */}
          <div className="flex justify-between items-center">
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
            <p className="text-gray-500">Effective: March 21, 2025</p>
          </div>

          {/* Basic content without user-dependent parts */}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-8">
        {/* Navigation buttons */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          {!currentUser && (
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
          )}
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
          <p className="text-gray-500">Effective: March 21, 2025</p>
        </div>

        <section>
          <p className="mb-4">
            This Cookie Policy explains how Financial Planner AI, LLC doing business as PawSense AI ("PawSense AI,"
            "us," "we," or "our") uses cookies and similar technologies on our website at https://www.pawsense-ai.com
            ("Website").
          </p>
          <p className="mb-4">
            By using our Website, you consent to the use of cookies in accordance with this Cookie Policy. You can
            withdraw your consent at any time by following the instructions below.
          </p>
        </section>

        <section id="what-are-cookies">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">WHAT ARE COOKIES?</h2>
          <p className="mb-4">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit
            websites. They allow the website to recognize your device and remember certain information about your visit,
            such as your preferences and actions on the site.
          </p>
          <p className="mb-4">
            Cookies are widely used to make websites work more efficiently and provide valuable information to website
            owners about how their sites are being used.
          </p>
        </section>

        <section id="types-of-cookies">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">TYPES OF COOKIES WE USE</h2>
          <p className="mb-4">We use the following types of cookies on our Website:</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the Website to function properly. They enable core functionality such as
            security, network management, and account access. You cannot opt out of these cookies.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Performance and Analytics Cookies</h3>
          <p className="mb-4">
            These cookies collect information about how visitors use our Website, such as which pages visitors go to
            most often and if they receive error messages. This information helps us improve our Website and your
            browsing experience. The information collected is aggregated and anonymous.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Functionality Cookies</h3>
          <p className="mb-4">
            These cookies allow the Website to remember choices you make (such as your username, language, or region)
            and provide enhanced, personalized features. They may also be used to provide services you have requested,
            like watching a video.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Targeting and Advertising Cookies</h3>
          <p className="mb-4">
            These cookies are used to deliver advertisements that are more relevant to you and your interests. They are
            also used to limit the number of times you see an advertisement and to help measure the effectiveness of
            advertising campaigns.
          </p>
        </section>

        <section id="third-party-cookies">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">THIRD-PARTY COOKIES</h2>
          <p className="mb-4">Our Website may include cookies from third-party services such as:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <span className="font-medium">Analytics Services</span>: We use analytics services to understand how
              visitors interact with our Website. These services collect information such as how often users visit the
              site, what pages they visit, and what other sites they used prior to coming to our site.
            </li>
            <li>
              <span className="font-medium">Social Media Platforms</span>: If you use social media features on our
              Website, these services may collect information about your use of our Website.
            </li>
            <li>
              <span className="font-medium">Payment Processors</span>: Our payment processors may use cookies when you
              make payments on our Website.
            </li>
          </ul>
        </section>

        <section id="cookie-management">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">COOKIE MANAGEMENT</h2>
          <p className="mb-4">
            Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies or
            delete certain cookies. Generally, you can also set your browser to notify you when you receive a cookie,
            giving you the chance to decide whether to accept it.
          </p>
          <p className="mb-4">You can manage your cookies in your browser settings:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2980b9] hover:underline"
              >
                Cookie settings in Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2980b9] hover:underline"
              >
                Cookie settings in Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2980b9] hover:underline"
              >
                Cookie settings in Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2980b9] hover:underline"
              >
                Cookie settings in Edge
              </a>
            </li>
          </ul>
          <p className="mb-4">
            Please note that if you choose to block certain cookies, you may not be able to use all the features of our
            Website.
          </p>
        </section>

        <section id="do-not-track">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">DO NOT TRACK SIGNALS</h2>
          <p className="mb-4">
            Some browsers have a "Do Not Track" feature that signals to websites that you visit that you do not want to
            have your online activity tracked. Our Website does not currently respond to "Do Not Track" signals.
          </p>
        </section>

        <section id="changes">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">CHANGES TO THIS COOKIE POLICY</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our
            business practices. Any changes will become effective when we post the revised Cookie Policy on our Website.
            We encourage you to periodically review this page for the latest information on our cookie practices.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">CONTACT US</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
          </p>
          <p className="mb-4">Financial Planner AI, LLC dba PawSense AI</p>
          <p className="mb-4">Freehold, NJ 07728</p>
          <p className="mb-4">Email: rpc@financialplanner-ai.com</p>
        </section>

        <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t">
          <p>Last Updated: March 21, 2025</p>
          <p>© 2025 Financial Planner AI, LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

