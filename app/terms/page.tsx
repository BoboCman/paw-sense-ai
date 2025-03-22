"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getCurrentUser } from "@/app/utils/auth-utils"

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
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
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-500">Effective: March 21, 2025</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <p className="text-amber-800 font-semibold">
            IMPORTANT NOTICE: THESE TERMS CONTAIN AN ARBITRATION AGREEMENT AND CLASS ACTION WAIVER THAT AFFECT YOUR
            LEGAL RIGHTS.
          </p>
        </div>

        <section id="introduction">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">1. INTRODUCTION</h2>
          <p className="mb-4">
            These Terms of Service ("Terms") constitute a legally binding agreement between you and Financial Planner
            AI, LLC doing business as PawSense AI ("PawSense AI," "we," "our," or "us"), a company based in New Jersey
            that develops AI automation solutions for human and canine well-being.
          </p>
          <p className="mb-4">
            These Terms govern your access to and use of our website at https://www.pawsense-ai.com, our AI-powered dog
            behavior analysis service, and all related services (collectively, the "Services").
          </p>
          <p className="mb-4">
            By accessing or using our Services, you represent that you have read, understood, and agree to be bound by
            these Terms. If you don't agree to these Terms, you must not access or use our Services.
          </p>
        </section>

        <section id="service-description">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">2. SERVICE DESCRIPTION</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">2.1 Core Service</h3>
          <p className="mb-4">
            PawSense AI provides an AI-powered service that analyzes dog behavior videos to deliver insights and
            training recommendations. Our service works through the following process:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>
              <span className="font-medium">Video Upload</span>: You upload videos of your dog's behavior.
            </li>
            <li>
              <span className="font-medium">AI Analysis</span>: Our AI technology analyzes the videos for behavioral
              patterns.
            </li>
            <li>
              <span className="font-medium">Report Generation</span>: You receive a detailed behavioral analysis and
              training recommendations.
            </li>
          </ol>

          <h3 className="text-lg font-semibold mt-4 mb-2">2.2 Video Processing Flow</h3>
          <p className="mb-4">When you upload dog behavior videos:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Videos are transmitted securely to our video analysis partners</li>
            <li>The system processes your videos to identify behavioral patterns</li>
            <li>Upon completion, the original video is deleted according to our partners' retention policies</li>
            <li>Analysis results are retained to provide you with insights and recommendations</li>
          </ul>
        </section>

        <section id="video-data-license">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">3. VIDEO DATA LICENSE</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">3.1 License Grant</h3>
          <p className="mb-4">
            By uploading videos to PawSense AI, you grant us a non-exclusive, worldwide, royalty-free, sublicensable,
            and fully paid-up right and license to:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Process your videos and data to provide the Services</li>
            <li>Create and store analysis data derived from your videos</li>
            <li>Use anonymized and aggregated data to maintain, enhance, and improve our Services</li>
            <li>Train and fine-tune our AI systems to better understand canine behavior</li>
            <li>Ensure compliance with these Terms and applicable law</li>
          </ol>

          <h3 className="text-lg font-semibold mt-4 mb-2">3.2 Ownership</h3>
          <p className="mb-4">
            As between you and PawSense AI, you own and retain all right, title, and interest in and to your videos.
            However, you acknowledge that multiple users may receive similar or identical analysis results when
            submitting videos showing similar canine behaviors.
          </p>
        </section>

        <section id="ai-output-disclaimers">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">4. AI OUTPUT DISCLAIMERS</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">4.1 Nature of AI-Generated Analyses</h3>
          <p className="mb-4">
            PawSense AI utilizes artificial intelligence and machine learning technologies. You acknowledge that:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Our AI technology is continuously evolving and experimental in nature</li>
            <li>Analysis results may contain errors, inconsistencies, or misinterpretations</li>
            <li>Not all relevant behavioral factors may be captured or considered</li>
            <li>The technology requires human review and professional verification</li>
          </ol>

          <h3 className="text-lg font-semibold mt-4 mb-2">4.2 Consistency Considerations</h3>
          <p className="mb-4">Our AI systems may:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              Generate similar or identical analyses for different users when presented with similar canine behaviors
            </li>
            <li>Produce different analyses from the same video data as our AI models evolve</li>
            <li>Create analyses that vary based on video quality, angle, lighting, or other factors</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">4.3 Input Quality Impact</h3>
          <p className="mb-4">
            The quality of your uploaded videos directly impacts the quality of the analysis results:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              If videos are blurry, poorly lit, too short, or don't clearly show behavior, the analysis will be limited
            </li>
            <li>We cannot verify the completeness or accuracy of videos you upload</li>
            <li>Certain video formats may not be compatible with our Services</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">4.4 No Professional Advice</h3>
          <p className="mb-4 font-semibold">THE SERVICES DO NOT CONSTITUTE PROFESSIONAL ADVICE OF ANY KIND.</p>
          <p className="mb-4">
            PawSense AI does not provide veterinary, behavioral, training, or other professional dog-related advice. You
            must consult with qualified professionals (veterinarians, certified trainers, animal behaviorists) before
            making decisions about your dog's care or training.
          </p>
        </section>

        <section id="account-registration">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">5. ACCOUNT REGISTRATION AND SECURITY</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">5.1 Account Creation</h3>
          <p className="mb-4">To use certain features, you must create an account. You agree to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and update your information as needed</li>
            <li>Accept responsibility for all activities under your account</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">5.2 Account Security</h3>
          <p className="mb-4">You are responsible for:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Keeping your account credentials secure</li>
            <li>Not sharing your password or account access with others</li>
            <li>Promptly notifying us of any unauthorized use or security breaches</li>
          </ul>
        </section>

        <section id="subscription-terms">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">6. SUBSCRIPTION TERMS</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">6.1 Subscription Plans</h3>
          <p className="mb-4">
            We offer various subscription plans for access to PawSense AI. Details of available plans, including
            features and pricing, are available on our website.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">6.2 Billing and Auto-Renewal</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Your subscription will automatically renew until canceled</li>
            <li>Cancellation must be made at least 48 hours before renewal</li>
            <li>We do not provide refunds for partial subscription periods</li>
            <li>Price changes will take effect at your next billing cycle after notification</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">6.3 Free Trials</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Free trials automatically convert to paid subscriptions unless canceled</li>
            <li>You will not be charged during the trial period</li>
            <li>You may cancel during the trial period at any time without charge</li>
          </ul>
        </section>

        <section id="user-responsibilities">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">7. USER RESPONSIBILITIES</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">7.1 Content Restrictions</h3>
          <p className="mb-4">You agree not to upload videos or content that:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Contains illegal, harmful, threatening, abusive, or otherwise objectionable material</li>
            <li>Infringes on any intellectual property or privacy rights</li>
            <li>Is not related to dog behavior analysis</li>
            <li>Contains malicious code or attempts to interfere with our systems</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">7.2 Service Usage Restrictions</h3>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Use the Services for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to the Services</li>
            <li>Copy, modify, distribute, sell, or lease any part of the Services</li>
            <li>Reverse engineer or attempt to extract our source code</li>
            <li>Use the Services in a manner that could damage or overburden our systems</li>
          </ul>
        </section>

        <section id="intellectual-property">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">8. INTELLECTUAL PROPERTY</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">8.1 Ownership of Services</h3>
          <p className="mb-4">
            PawSense AI owns and retains all rights to the Services, including our website, software, AI technology,
            algorithms, and underlying systems. Nothing in these Terms grants you any right, title, or interest in the
            Services except for the limited license to use them.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">8.2 Feedback</h3>
          <p className="mb-4">
            If you provide feedback about the Services, you grant us an irrevocable, non-exclusive, royalty-free license
            to use that feedback for any purpose without compensation to you.
          </p>
        </section>

        <section id="legal-terms">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">9. LEGAL TERMS</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">9.1 Disclaimer of Warranties</h3>
          <p className="mb-4 font-semibold">
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND. WE EXPLICITLY DISCLAIM
            ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">9.2 Limitation of Liability</h3>
          <p className="mb-4 font-semibold">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, PAWSENSE AI AND ITS AFFILIATES WILL NOT BE LIABLE FOR ANY DAMAGES
            ARISING FROM YOUR USE OF THE SERVICES, INCLUDING DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES.
          </p>
          <p className="mb-4 font-semibold">
            OUR TOTAL LIABILITY FOR ALL CLAIMS IS LIMITED TO THE AMOUNT YOU PAID FOR THE SERVICES IN THE PAST 12 MONTHS
            OR $100, WHICHEVER IS GREATER.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">9.3 Indemnification</h3>
          <p className="mb-4">
            You agree to defend, indemnify, and hold harmless PawSense AI and its affiliates from claims arising from
            your violation of these Terms or use of the Services.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">9.4 Dispute Resolution</h3>
          <p className="mb-4 font-semibold">
            YOU AGREE THAT ANY DISPUTE RELATING TO THESE TERMS WILL BE RESOLVED BY BINDING ARBITRATION RATHER THAN IN
            COURT.
          </p>
          <p className="mb-4 font-semibold">
            YOU WAIVE THE RIGHT TO BRING CLASS ACTIONS OR REPRESENTATIVE PROCEEDINGS, AND MAY ONLY BRING CLAIMS IN YOUR
            INDIVIDUAL CAPACITY.
          </p>
          <p className="mb-4">
            Arbitration will be conducted by the American Arbitration Association under its Consumer Arbitration Rules.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">9.5 Governing Law</h3>
          <p className="mb-4">
            These Terms are governed by the laws of the State of New Jersey without regard to its conflict of laws
            provisions.
          </p>
        </section>

        <section id="general-provisions">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">10. GENERAL PROVISIONS</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">10.1 Changes to These Terms</h3>
          <p className="mb-4">
            We may update these Terms at any time by posting a new version on our website. Your continued use of the
            Services after any changes indicates your acceptance of the updated Terms.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">10.2 Termination</h3>
          <p className="mb-4">
            We may terminate or suspend your access to the Services at any time, with or without cause, without prior
            notice or liability.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">10.3 Entire Agreement</h3>
          <p className="mb-4">
            These Terms, together with the Privacy Policy and any other agreements expressly incorporated by reference,
            constitute the entire agreement between you and PawSense AI concerning the Services.
          </p>
        </section>

        <section id="contact-information">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">11. CONTACT INFORMATION</h2>
          <p className="mb-4">For general inquiries or legal notices, please contact us at:</p>
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

