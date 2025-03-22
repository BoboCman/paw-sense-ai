"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getCurrentUser } from "@/app/utils/auth-utils"

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
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
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-500">Effective: March 21, 2025</p>
        </div>

        <section>
          <p className="mb-4">
            This Privacy Policy ("Privacy Policy") describes how Financial Planner AI, LLC doing business as PawSense AI
            ("PawSense AI," "us," "we," or "our") collects, uses, and shares personal information in connection with our
            website at https://www.pawsense-ai.com/ and our AI-powered dog behavior analysis services (collectively, the
            "Services").
          </p>
          <p className="mb-4">
            Financial Planner AI, LLC is a New Jersey-based company that develops AI automation solutions for human and
            canine well-being. We are committed to protecting your privacy while providing innovative dog behavior
            analysis services through our PawSense AI brand.
          </p>
        </section>

        <section id="information-we-collect">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">INFORMATION WE COLLECT</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">Account Information</h3>
          <p className="mb-4">When you register for an account, we collect:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Contact information (name, email address)</li>
            <li>Account credentials</li>
            <li>Payment information (processed securely through our payment processors)</li>
            <li>Service usage information and preferences</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Video Data</h3>
          <p className="mb-4">When you upload dog behavior videos, we collect:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>The video content you upload</li>
            <li>Metadata associated with the video</li>
            <li>Information you provide about your dog (breed, age, behavior concerns)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Service Usage Information</h3>
          <p className="mb-4">We automatically collect:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Device information (operating system, browser type, IP address)</li>
            <li>Usage data (pages visited, features used, timestamps)</li>
            <li>Performance data and error logs</li>
          </ul>
        </section>

        <section id="video-processing">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">VIDEO PROCESSING AND DATA FLOW</h2>
          <p className="mb-4">When you upload dog behavior videos to our Service:</p>

          <ol className="list-decimal pl-6 space-y-4 mb-4">
            <li>
              <span className="font-medium">Video Upload:</span> Your video is securely transmitted to our specialized
              video analysis partner.
            </li>
            <li>
              <span className="font-medium">Initial Analysis:</span> Our video analysis partner processes your video to
              identify key behavioral patterns, body language, and movements of your dog.
            </li>
            <li>
              <span className="font-medium">Text Summary Generation:</span> The system creates a text-based summary of
              the behavioral patterns identified in your video.
            </li>
            <li>
              <span className="font-medium">Expert Analysis:</span> The text summary (not your original video) is
              processed by our AI interpretation partner for specialized behavioral interpretation and recommendations.
            </li>
            <li>
              <span className="font-medium">Report Generation:</span> PawSense AI combines these analyses to generate
              your comprehensive dog behavior report.
            </li>
            <li>
              <span className="font-medium">Data Retention:</span> Upon completion of analysis:
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  Your original video is deleted from our partners' systems according to their data retention policies
                </li>
                <li>The behavioral analysis data and recommendations are retained in our system</li>
                <li>We do not permanently store the binary video files on our servers</li>
              </ul>
            </li>
          </ol>
        </section>

        <section id="how-we-use">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">HOW WE USE YOUR INFORMATION</h2>
          <p className="mb-4">We use your information to:</p>

          <ol className="list-decimal pl-6 space-y-4 mb-4">
            <li>
              <span className="font-medium">Provide the Services:</span>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Process your videos for behavioral analysis</li>
                <li>Generate reports and recommendations</li>
                <li>Manage your account and process payments</li>
                <li>Respond to your requests and support needs</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Improve Our Services:</span>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Enhance the accuracy of our AI analysis</li>
                <li>Develop new features and capabilities</li>
                <li>Fix bugs and resolve technical issues</li>
                <li>Train and fine-tune our AI systems</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Communicate With You:</span>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Provide service updates and notifications</li>
                <li>Share dog training tips and resources</li>
                <li>Respond to your questions or concerns</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Ensure Security and Compliance:</span>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Prevent fraud and unauthorized access</li>
                <li>Protect our Services from misuse</li>
                <li>Comply with legal obligations</li>
                <li>Enforce our Terms of Service</li>
              </ul>
            </li>
          </ol>
        </section>

        <section id="how-we-share">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">HOW WE SHARE YOUR INFORMATION</h2>
          <p className="mb-4">We may share your information with:</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Service Providers</h3>
          <p className="mb-4">
            We share information with third-party service providers who help us deliver our Services:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Video analysis partners for processing uploaded videos</li>
            <li>AI interpretation partners for behavioral analysis</li>
            <li>Payment processors for handling transactions</li>
            <li>Cloud hosting providers for storing data</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Business Transfers</h3>
          <p className="mb-4">
            If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of
            that transaction.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Legal Requirements</h3>
          <p className="mb-4">
            We may disclose your information if required by law, regulation, legal process, or governmental request.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">With Your Consent</h3>
          <p className="mb-4">
            We may share your information with third parties when you have given us your consent to do so.
          </p>

          <p className="font-medium">We do NOT sell your personal information to third parties.</p>
        </section>

        <section id="data-security">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">DATA SECURITY</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your data, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Encrypted transmission of videos and data</li>
            <li>Secure storage of account information</li>
            <li>Regular security assessments</li>
            <li>Strict access controls for employee access to systems</li>
          </ul>
          <p className="mb-4">
            However, no method of electronic transmission or storage is 100% secure. While we strive to use commercially
            acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section id="data-retention">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">DATA RETENTION</h2>
          <p className="mb-4">
            We retain your information for as long as your account is active or as needed to provide you with our
            Services. We will retain and use your information as necessary to comply with our legal obligations, resolve
            disputes, and enforce our agreements.
          </p>
          <p className="mb-4">
            You may request deletion of your account and associated data at any time by contacting us.
          </p>
        </section>

        <section id="your-choices">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">YOUR CHOICES AND RIGHTS</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information:
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Access and Control</h3>
          <p className="mb-4">
            You can access, update, or delete your account information through your account settings or by contacting
            us.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Marketing Communications</h3>
          <p className="mb-4">You can opt out of marketing communications by:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Following the unsubscribe instructions in marketing emails</li>
            <li>Adjusting your communication preferences in your account</li>
            <li>Contacting us directly</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Cookies and Tracking</h3>
          <p className="mb-4">
            You can manage cookies through your browser settings. For more information, see our{" "}
            <Link href="/cookie-policy" className="text-[#2980b9] hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        <section id="california">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">CALIFORNIA PRIVACY RIGHTS</h2>
          <p className="mb-4">
            California residents have certain rights under the California Consumer Privacy Act (CCPA):
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <span className="font-medium">Right to Know</span>: You can request information about the personal
              information we've collected about you in the past 12 months.
            </li>
            <li>
              <span className="font-medium">Right to Delete</span>: You can request deletion of the personal information
              we've collected from you.
            </li>
            <li>
              <span className="font-medium">Right to Opt-Out</span>: We do not sell personal information, so there is no
              opt-out option required.
            </li>
            <li>
              <span className="font-medium">Right to Non-Discrimination</span>: We will not discriminate against you for
              exercising your privacy rights.
            </li>
          </ul>
          <p className="mb-4">To exercise these rights, please contact us using the information provided below.</p>
        </section>

        <section id="children">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">CHILDREN'S PRIVACY</h2>
          <p className="mb-4">
            Our Services are not directed to children under 18. We do not knowingly collect personal information from
            children under 18. If we learn we have collected personal information from a child under 18, we will delete
            this information and terminate the child's account.
          </p>
        </section>

        <section id="international">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">INTERNATIONAL DATA TRANSFERS</h2>
          <p className="mb-4">
            We are based in the United States and process information on servers located in the United States. If you
            are located outside the United States, your information will be transferred to the United States for
            processing and storage.
          </p>
        </section>

        <section id="changes">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">CHANGES TO THIS PRIVACY POLICY</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Effective" date. If we make material changes, we will provide
            additional notice, such as a prominent website notice or an email notification.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">CONTACT US</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

