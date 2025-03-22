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
            This Privacy Policy ("Privacy Policy") describes how Financial Planner AI, LLC and its subsidiaries and
            affiliates ("Financial Planner AI," "us," "we," or "our") may collect, use, and share your personal
            information in connection with our website at https://www.pawsense-ai.com/ and any other websites we own and
            operate that link to this Privacy Policy (collectively, the "Site") together with our products, services,
            social media pages, events, emails, and other electronic communications (collectively, the "Services"), and
            the choices you have with respect to your personal information. Financial Planner AI is based in the United
            States.
          </p>
          <p className="mb-4">
            This Privacy Policy does not apply to personal information that we may store, maintain, or process as a data
            processor/service provider on behalf of Financial Planner AI customers. For more information about the
            privacy practices of Financial Planner AI customers, please contact the relevant customer.
          </p>
          <p>
            Financial Planner AI reserves the right, at any time, to modify this Privacy Policy. If we modify how we
            collect, use, or share personal information, we will notify you by revising the "Last Updated" date at the
            top of this Privacy Policy and, in some cases, we may provide you with additional notice (such as sending
            you an email notification). In all cases, your continued use of the Service following posting or other
            notification of changes constitutes your acknowledgement of such changes. Please review this Privacy Policy
            periodically to keep up to date on our most current policies and practices.
          </p>
        </section>

        <section id="collection">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">COLLECTION OF PERSONAL INFORMATION</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">Personal Information You Provide</h3>
          <p className="mb-4">
            We collect personal information when you provide it to us, which may include the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <span className="font-medium">Contact information</span>, such as first and last name and company email
              address, phone number, and mailing address.
            </li>
            <li>
              <span className="font-medium">Professional information</span>, such as company name, job title, company
              location, and other details we may collect about your business or profession.
            </li>
            <li>
              <span className="font-medium">Account information</span>, such as information you provide during
              registration or agreement submission, records of products and services you have purchased from us, and
              other details about your use of the Service.
            </li>
            <li>
              <span className="font-medium">Personal Information Contained in Videos</span>, such as dog videos may
              include visible individuals, spoken names, locations, and other identifiable information. This information
              is redacted/removed from the video before video data is passed to our AI analysis partners for processing.
            </li>
            <li>
              <span className="font-medium">Payment information</span>, such as bank account number, credit or debit
              card number, or financial account details used for payments. All payment processing services connected
              with your use of the Service are provided to you by third-party payment processors. We accept payment from
              Clients in the form of credit cards, debit cards, and e-checks. Financial Planner AI does not store any
              credit card or banking information. We are not responsible nor have any liability if you suffer any
              damages of any kind from your use of the products and services offered by Stripe, Twelve Labs, OpenAI,
              Anthropic, or other AI service providers. You agree that you are subject to the terms and conditions and
              privacy policies of these companies:
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>https://www.twelvelabs.io/terms</li>
                <li>https://www.twelvelabs.io/privacy</li>
                <li>https://openai.com/policies/terms-of-use/</li>
                <li>https://openai.com/policies/privacy-policy</li>
                <li>https://www.anthropic.com/legal/terms</li>
                <li>https://www.anthropic.com/legal/privacy</li>
                <li>https://stripe.com/legal/consumer</li>
                <li>https://stripe.com/privacy</li>
              </ul>
            </li>
          </ul>
          <p className="mb-4">
            We may also store your billing address to calculate any sales tax due in the United States, to maintain
            records that may be used for investigations of potentially fraudulent credit card transactions, and to print
            on your invoices. We may collect commercial information such as your purchase history, including records of
            products or services you have purchased, provided, returned, or are considering purchasing from us.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium">Preferences</span>, such as any marketing or communications preferences.
            </li>
            <li>
              <span className="font-medium">Survey responses</span>, such as the information you provide in response to
              our surveys or questionnaires.
            </li>
            <li>
              <span className="font-medium">Communications</span>, such as the information associated with your requests
              or inquiries, including for support, assistance, or order information, and any feedback you provide when
              you communicate with us. We and our service providers may also record or monitor any call or chat you have
              with us for quality control or training purposes, or to enforce our rights.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Personal Information from Third Parties</h3>
          <p className="mb-4">
            We may obtain personal information about you from third parties, such as social media platforms and other
            public sources, third parties that help us advertise our services and find new customers, joint marketing
            partners, event co-sponsors, and other third parties.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Personal Information Collected Automatically</h3>
          <p className="mb-4">
            We, our service providers, and our advertising partners may automatically log information about you, your
            computer or mobile device, and your activity over time on our Service and other sites and online services,
            such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <span className="font-medium">Device data</span>, such as your computer or mobile device operating system
              type and version number, manufacturer and model, browser type, screen resolution, IP address, unique
              identifiers, the website you visited before browsing to our website, and general location information such
              as city, state, or geographic area.
            </li>
            <li>
              <span className="font-medium">Online activity data</span>, such as pages or screens you viewed, how long
              you spent on a page or screen, navigation paths between pages or screens, information about your activity
              on a page or screen, access times, and duration of access.
            </li>
          </ul>
          <p className="mb-4">
            Like many online services, we use the following technologies to facilitate some of our automatic data
            collection:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <span className="font-medium">Cookies</span>, which are text files that websites store on a visitor's
              device to uniquely identify the visitor's browser or to store information or settings in the browser for
              the purpose of helping you navigate between pages efficiently, remembering your preferences, enabling
              functionality, helping us understand user activity and patterns, and facilitating online advertising.
            </li>
            <li>
              <span className="font-medium">Web beacons</span>, also known as pixel tags or clear GIFs, which are
              typically used to demonstrate that a webpage or email was accessed or opened, or that certain content was
              viewed or clicked, typically to compile statistics about usage of websites and the success of marketing
              campaigns.
            </li>
            <li>
              <span className="font-medium">Local storage</span>, which is used to save data on a visitor's device. We
              may use data from local storage to, for example, turn on web navigation, store multimedia preferences,
              customize what we show you based on your past interactions with our Service, and remember your
              preferences.
            </li>
            <li>
              <span className="font-medium">Session-replay technologies</span>, which are third-party software programs
              that we may use on the Site to record a video replay of user's interactions with the Site. The video
              replay may include users' clicks, mouse movements, scrolls, mobile app touches, typing, and other activity
              taken during the session. We use these replays for research and development purposes, such as to help us
              troubleshoot problems with the Site, understand how users interact with and use the Site, and identify
              areas for improvement.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Referrals</h3>
          <p className="mb-4">
            Customers and other users of the Service may have the opportunity to refer friends, colleagues, or other
            contacts to us and share their contact information with us. Please do not refer someone to us or share their
            contact information with us unless you have their permission to do so.
          </p>
        </section>

        <section id="video-processing">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">VIDEO PROCESSING AND ANALYSIS</h2>
          <p className="mb-4">
            Our Service allows users to upload dog behavior videos for AI-powered analysis. This section describes how
            we handle and process these videos.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Video Upload and Processing</h3>
          <p className="mb-4">When you upload a video to our Service:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              The video is transmitted securely to our AI analysis partners, including Twelve Labs, OpenAI, and
              Anthropic
            </li>
            <li>We do not permanently store the binary video files on our servers</li>
            <li>Our AI partners process the video to extract behavioral analysis data</li>
            <li>The behavioral analysis data is then used to generate insights about your dog's behavior</li>
            <li>
              Upon completion of analysis, the original video is deleted from our AI partners' systems according to
              their respective data retention policies
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Video Data Security</h3>
          <p className="mb-4">
            We implement appropriate security measures to protect your videos during transmission, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Secure encrypted transmission of videos to our AI analysis partners</li>
            <li>Strict access controls limiting who can view your uploaded content</li>
            <li>Contractual requirements with our partners to maintain appropriate security measures</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Video Analysis Results</h3>
          <p className="mb-4">
            The results of the video analysis, including behavioral patterns, timestamps, and behavioral
            interpretations, are stored in our system to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Generate analysis reports for you</li>
            <li>Improve our AI analysis capabilities</li>
            <li>Provide historical context for future analyses of your dog's behavior</li>
          </ul>
          <p>You may request deletion of these analysis results at any time by contacting us.</p>
        </section>

        <section id="use">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">USE OF PERSONAL INFORMATION</h2>
          <p className="mb-4">
            Financial Planner AI uses personal information for the purposes set forth below and as otherwise described
            in this Privacy Policy or at the time of collection.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">To Provide the Service</h3>
          <p className="mb-4">
            We may use personal information to provide our Service and to operate our business. For example, we use
            personal information to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>process your transactions, including granting access to our online products and technology;</li>
            <li>establish, manage, monitor, and maintain your account;</li>
            <li>improve and personalize your experience on or with the Service;</li>
            <li>verify your identity or determine your eligibility for offers or promotions;</li>
            <li>
              communicate with you, including providing notices about your account or transaction (e.g., confirmations,
              technical notices, updates, and security alerts) and responding to any of your requests, feedback, or
              questions;
            </li>
            <li>contact you by phone, email, or other form of communication;</li>
            <li>provide any contests, surveys, sweepstakes, or other promotions you participate in;</li>
            <li>provide maintenance and support;</li>
            <li>facilitate automated dog behavior analysis; and</li>
            <li>fulfill any other purpose for which you provide personal information.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Research and Development</h3>
          <p className="mb-4">
            We may use your personal information for research and development purposes, including to study and improve
            the Service and our business, understand and analyze the usage trends and preferences of our users, and
            develop new features, functionality, products, and services. As part of these activities, we may create
            aggregated, de-identified, or other anonymous data from personal information we collect. We make personal
            information into anonymous data by removing information that makes the data personally identifiable to you.
            We may use this anonymous data and share it with third parties for our lawful business purposes.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Direct Marketing</h3>
          <p className="mb-4">
            We may send you Financial Planner AI-related or other direct marketing communications as permitted by law,
            including materials, updates, information, special offers, and promotional material from us and our business
            partners. You may opt-out of our marketing communications as described in the "YOUR CHOICES" section below.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Interest-Based Advertising</h3>
          <p className="mb-4">
            We work with third-party advertising companies and social media companies to help us advertise our business
            and to display ads for our Service. These companies may use cookies and similar technologies to collect
            information about you (including the online activity information and device information described above in
            the section called "Personal Information Automatically Collected") over time across our Site and other
            websites and services or your interaction with our emails, and use that information to serve ads that they
            think will interest you. In addition, some of these companies may use hashed customer lists that we share
            with them to deliver ads to you and to similar users on their platforms. You can learn more about your
            choices for limiting interest-based advertising in the "YOUR CHOICES" section below.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Customer Testimonials</h3>
          <p className="mb-4">
            We may display personal testimonials of satisfied customers on our Site in addition to other endorsements.
            With your consent, we may post your testimonial along with your name.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">For Compliance, Fraud Prevention, and Safety</h3>
          <p className="mb-4">
            We may use personal information and disclose it to law enforcement, government authorities, and private
            parties as we believe necessary or appropriate to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              maintain the safety, security, and integrity of the Service, business, databases, and other technology
              assets;
            </li>
            <li>
              protect our, your, or others' rights, privacy, safety or property (including by making and defending legal
              claims);
            </li>
            <li>
              audit our internal processes for compliance with legal and contractual requirements and internal policies;
            </li>
            <li>enforce the terms and conditions that govern the Service; and</li>
            <li>
              prevent, identify, investigate, and deter fraudulent, harmful, unauthorized, unethical or illegal
              activity, including cyberattacks and identity theft.
            </li>
          </ul>
          <p className="mb-4">
            We will also use personal information as we believe necessary or appropriate to comply with applicable laws,
            lawful requests, and legal process, such as to respond to subpoenas or requests from government authorities.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">With Your Consent</h3>
          <p className="mb-4">
            We will disclose your personal information in accordance with your prior direction or, in some cases, we may
            specifically ask you for your consent to collect, use, or share your personal information, such as when
            required by law.
          </p>
        </section>

        <section id="sharing">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">SHARING OF PERSONAL INFORMATION</h2>
          <p className="mb-4">
            We may share your personal information with the following parties and as otherwise described in this Privacy
            Policy or at the time of collection.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Affiliates</h3>
          <p className="mb-4">
            We may share personal information with our corporate parent, subsidiaries, and affiliates, for purposes
            consistent with this Privacy Policy.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Service Providers</h3>
          <p className="mb-4">
            We may share personal information with third-party vendors and service providers who perform services for us
            or on our behalf, such as software and data hosting, payment processing, customer relationship management,
            email delivery, marketing and advertising, and analytics.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Professional Advisors</h3>
          <p className="mb-4">
            We may disclose personal information to our professional advisors, such as lawyers, auditors, bankers, and
            insurers, where necessary in the course of the professional services that they render to us.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Authorities and Others</h3>
          <p className="mb-4">
            We may disclose personal information to law enforcement, government authorities, and private parties, as we
            believe in good faith to be necessary or appropriate for the compliance, fraud prevention and safety
            purposes described above.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Business Transferees</h3>
          <p className="mb-4">
            We may sell, transfer, or otherwise share some or all of our business or assets, including your personal
            information, in connection with a business transaction (or potential business transaction) such as a
            corporate divestiture, merger, consolidation, acquisition, reorganization or sale of assets, or in the event
            of bankruptcy or dissolution.
          </p>
        </section>

        <section id="your-choices">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">YOUR CHOICES</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">Access or Update Your Information</h3>
          <p className="mb-4">
            If you have registered for an account with us, you may review and update certain personal information in
            your account profile by logging into the account.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Opt-out of Marketing Communications</h3>
          <p className="mb-4">
            You may opt out of marketing-related emails by following the opt-out or unsubscribe instructions at the
            bottom of the email, or by contacting us. You may continue to receive service-related and other
            non-marketing emails.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Cookies</h3>
          <p className="mb-4">
            Most browser settings let you delete and reject cookies placed by websites. Many browsers accept cookies by
            default until you change your settings. If you do not accept cookies, you may not be able to use all
            functionality of the Service and it may not work properly. For more information about cookies, including how
            to see what cookies have been set on your browser and how to manage and delete them, visit
            www.allaboutcookies.org.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Do Not Track</h3>
          <p className="mb-4">
            Some Internet browsers may be configured to send "Do Not Track" signals to the online services that you
            visit. We currently do not respond to "Do Not Track" or similar signals. To find out more about "Do Not
            Track," please visit http://www.allaboutdnt.com.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Declining to Share Personal Information</h3>
          <p className="mb-4">
            We need to collect personal information to provide certain services. If you do not provide the information
            requested, we may not be able to provide those services.
          </p>
        </section>

        <section id="children">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">CHILDREN'S PRIVACY</h2>
          <p className="mb-4">
            The Service is not directed to, and we do not knowingly collect personal information from, anyone under the
            age of 18. If we learn that we have collected personal information from a child under 18 without the consent
            of the child's parent or guardian as required by law, we will delete it. If you believe that we might have
            any personal information from a child under 18, please contact us.
          </p>
        </section>

        <section id="security">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">SECURITY OF PERSONAL INFORMATION</h2>
          <p className="mb-4">
            We employ a number of technical, organizational and physical safeguards designed to protect the personal
            information we collect. However, security risk is inherent in all internet and information technologies and
            we cannot guarantee the security of your personal information.
          </p>
        </section>

        <section id="third-party">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">THIRD PARTY WEBSITES AND SERVICES</h2>
          <p className="mb-4">
            The Service may contain links to other websites, mobile applications, and other online services operated by
            third parties. These links are not an endorsement of, or representation that we are affiliated with, any
            third party. In addition, our content may be included on web pages or in mobile applications or online
            services that are not associated with us. We do not control third party websites, mobile applications or
            online services, and we are not responsible for their actions. Other websites, mobile applications and
            services follow different rules regarding the collection, use and sharing of your personal information. We
            encourage you to read the privacy policies of the other websites, mobile applications and online services
            you use.
          </p>
        </section>

        <section id="california">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">NOTICE TO CALIFORNIA RESIDENTS</h2>
          <p className="mb-4">
            We are required by the California Consumer Privacy Act of 2018 ("CCPA") to provide to California residents
            an explanation of how we collect, use and share their personal information, and of the rights and choices we
            offer California residents regarding our handling of their personal information.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">CCPA-Defined Personal Information</h3>
          <p className="mb-4">
            We do not sell personal information. As we explain in this Privacy Policy, we use cookies and other tracking
            technologies to analyze website traffic and facilitate advertising. If you would like to opt out of our (and
            our third-party advertising partners') use of cookies and other tracking technologies, please review the
            instructions provided in the Online Tracking Opt-out Guide section below.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Your California Privacy Rights</h3>
          <p className="mb-4">
            The CCPA grants California residents the following rights. However, these rights are not absolute, and in
            certain cases we may decline your request as permitted by law.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <span className="font-medium">Information.</span> You can request information about how we have collected,
              used and shared your personal information during the past 12 months.
            </li>
            <li>
              <span className="font-medium">Access.</span> You can request a copy of the personal information that we
              maintain about you.
            </li>
            <li>
              <span className="font-medium">Deletion.</span> You can ask us to delete the personal information that we
              collected or maintain about you.
            </li>
          </ul>
        </section>

        <section id="nevada">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">NOTICE TO NEVADA RESIDENTS</h2>
          <p className="mb-4">
            Nevada law (NRS 603A.340) requires each business to establish a designated request address where Nevada
            consumers may submit requests directing the business not to sell certain kinds of personal information that
            the business has collected or will collect about the consumer. A sale under Nevada law is the exchange of
            personal information for monetary consideration by the business to a third party for the third party to
            license or sell the personal information to other third parties. If you are a Nevada consumer and wish to
            submit a request relating to our compliance with Nevada law, please contact us at
            rpc@financialplanner-ai.com.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">Contact Information</h2>
          <p className="mb-4">Financial Planner AI, LLC</p>
          <p className="mb-4">155 Glendale Drive</p>
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
