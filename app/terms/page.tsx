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
          <h2 className="text-lg font-semibold text-amber-800 mb-2">IMPORTANT NOTICE REGARDING YOUR LEGAL RIGHTS</h2>
          <p className="text-amber-700">
            PLEASE READ THESE TERMS OF SERVICE CAREFULLY. THEY CONTAIN AN ARBITRATION AGREEMENT AND CLASS ACTION WAIVER
            THAT AFFECT YOUR LEGAL RIGHTS.
          </p>
          <p className="text-amber-700 mt-2">
            By accessing or using the Services provided by Financial Planner AI, LLC, you acknowledge that you have
            read, understood, and agree to be bound by these Terms of Service, including the binding arbitration
            provision and class action waiver found in Section 12.
          </p>
        </div>

        <section id="introduction">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">1. INTRODUCTION AND ACCEPTANCE</h2>
          <p className="mb-4">
            Welcome to PawSense AI. These Terms of Service (the "Terms") constitute a legally binding agreement between
            you and Financial Planner AI, LLC, a limited liability company organized under the laws of New Jersey
            ("Financial Planner AI," "we," "our," or "us"). These Terms govern your access to and use of our website
            located at https://www.pawsense-ai.com (the "Website"), our proprietary web-based software application (the
            "Application"), our AI-powered analysis feature ("PawSense AI"), and all related services (collectively, the
            "Services").
          </p>
          <p className="mb-4">
            These Terms incorporate by reference our{" "}
            <Link href="/privacy" className="text-[#2980b9] hover:underline">
              Privacy Policy
            </Link>
            , available at https://www.pawsense-ai.com/privacy, our{" "}
            <Link href="/cookie-policy" className="text-[#2980b9] hover:underline">
              Cookie Policy
            </Link>{" "}
            https://www.pawsense-ai.com/cookie-policy and any additional terms, conditions, or policies we may provide
            to you from time to time.
          </p>
          <p>
            By accessing or using our Services, you represent and warrant that you have read, understood, and agree to
            be bound by these Terms. If you don't agree to these Terms in their entirety, you must not access or use our
            Services.
          </p>
        </section>

        <section id="definitions">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">2. DEFINITIONS AND INTERPRETATION</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            2.1 Throughout these Terms, the following definitions apply:
          </h3>
          <p className="mb-2">
            <span className="font-medium">"Affiliate"</span> means any entity that directly or indirectly controls, is
            controlled by, or is under common control with Financial Planner AI, where "control" means the ownership of,
            or the power to vote, at least fifty percent (50%) of the voting stock, shares or interests of such entity.
          </p>
          <p className="mb-2">
            <span className="font-medium">"AI Technology"</span> means our artificial intelligence and machine learning
            technologies, algorithms, models, and systems used to provide the Services.
          </p>
          <p className="mb-4">
            <span className="font-medium">"Analyses"</span> means the outputs, reports, summaries, and other materials
            generated by our AI Technology based on the information and documentation you provide.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">2.2 In these Terms:</h3>
          <p className="mb-1">
            (a) the words "include," "includes," and "including" are deemed to be followed by the words "without
            limitation";
          </p>
          <p className="mb-1">(b) the word "or" is not exclusive;</p>
          <p className="mb-1">
            (c) the words "herein," "hereof," "hereby," "hereto," and "hereunder" refer to these Terms as a whole; and
          </p>
          <p>(d) words denoting the singular have a comparable meaning when used in the plural, and vice-versa.</p>
        </section>

        <section id="eligibility">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">3. ELIGIBILITY AND REGISTRATION</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">3.1 Eligibility Requirements</h3>
          <p className="mb-4">
            To access and use our Services, you must be at least eighteen (18) years old and have the legal capacity to
            form a binding contract with Financial Planner AI under applicable law.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">3.2 Registration Process</h3>
          <p className="mb-4">
            To access certain features of our Services, you must register for an account. When registering, you agree to
            provide accurate, current, and complete information about yourself as prompted by our registration process.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">3.3 Account Security</h3>
          <p className="mb-4">
            You are responsible for maintaining the confidentiality of your account credentials, including your username
            and password. You agree to notify us immediately of any unauthorized use of your account or any other breach
            of security.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">3.4 Account Types</h3>
          <p>
            Our Services may offer different types of accounts with varying features and functionality. The specific
            features and functionality available to you will depend on the type of account you register for and
            maintain.
          </p>
        </section>

        <section id="service-description">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">4. SERVICE DESCRIPTION AND SCOPE</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">4.1 Core Services</h3>
          <p className="mb-4">
            PawSense AI provides a web-based software application that enables dog owners to conduct dog behavior
            analyses through our proprietary AI Technology, which processes videos of dog behavior to provide insights
            and recommendations.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">4.2 Service Delivery</h3>
          <p className="mb-4">
            We will make the Services available to you pursuant to these Terms and any applicable Documentation. We may
            modify, enhance, or otherwise change the Services at any time in our sole discretion.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">4.3 Service Access</h3>
          <p>
            Subject to your compliance with these Terms and payment of applicable fees, we grant you a limited,
            non-exclusive, non-transferable, non-sublicensable right to access and use the Services solely for your
            internal business or personal purposes during the term of these Terms.
          </p>
        </section>

        <section id="limitations">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">
            5. CRITICAL LIMITATIONS AND DISCLAIMERS
          </h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">5.1 No Professional Advice</h3>
          <p className="mb-4 font-semibold">
            YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT THE SERVICES DO NOT CONSTITUTE PROFESSIONAL ADVICE OF ANY KIND.
          </p>
          <p className="mb-4">
            The Services are informational tools only and are not intended to replace the advice or services of licensed
            professionals. Financial Planner AI does not provide veterinary, behavioral, training, or other professional
            dog-related advice. We do not recommend, endorse, or sell any dog training products, methods, or services.
          </p>
          <p className="mb-4">
            You must consult with qualified professional advisors (such as veterinarians, certified dog trainers, or
            animal behaviorists) before making any decisions about your dog's care or training or taking any actions
            based on information provided through our Services. The Analyses generated by our Services are intended
            solely as starting points for discussions with your professional advisors and should never be relied upon as
            the sole basis for any decision or action regarding your dog's behavior, training, or health.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">5.2 AI Technology Limitations</h3>
          <p className="mb-4">
            You expressly acknowledge and understand that our Services utilize automated artificial intelligence and
            machine learning technologies that have inherent limitations and potential for error. The accuracy and
            reliability of our Analyses depend entirely on the quality, completeness, and accuracy of the information
            and videos you provide.
          </p>
          <p className="mb-4">Our AI Technology:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>May contain errors, bugs, or inaccuracies;</li>
            <li>May not capture all relevant factors or considerations;</li>
            <li>May produce inconsistent or unexpected results;</li>
            <li>Requires human review and professional verification;</li>
            <li>Is subject to regular updates that may affect results;</li>
            <li>Cannot verify the completeness or accuracy of input data;</li>
            <li>May have biases or limitations we have not identified; and</li>
            <li>Should never be relied upon without independent verification.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">5.3 Video Processing Restrictions</h3>
          <p className="mb-4">
            The Services are designed to process only dog behavior videos. We do not analyze other types of videos or
            content. You acknowledge and agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>We cannot verify the completeness, accuracy, or authenticity of any video you submit;</li>
            <li>
              The accuracy of our Analyses depends entirely on the quality, clarity, and content of the video provided;
            </li>
            <li>We do not independently verify any behavior or context shown in videos;</li>
            <li>Certain video formats or types may not be compatible with our Services;</li>
            <li>
              Processing errors or failures may occur due to video quality, format, length, or content issues; and
            </li>
            <li>We are not responsible for any errors or omissions in the videos you provide.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">5.4 Video Storage and Transmission</h3>
          <p className="mb-4">You acknowledge and understand that:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              Videos you upload are transmitted securely to our AI analysis partners, including Twelve Labs, OpenAI, and
              Anthropic;
            </li>
            <li>We do not permanently store the binary video files on our servers;</li>
            <li>Video data is processed by our AI partners to extract behavioral analysis information;</li>
            <li>
              After analysis, the original video is deleted from our AI partners' systems according to their respective
              data retention policies;
            </li>
            <li>
              The analysis results derived from your videos are retained in our system to provide you with insights and
              recommendations.
            </li>
          </ul>
        </section>

        <section id="data-rights">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">6. DATA RIGHTS AND PRIVACY</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">6.1 Privacy Policy</h3>
          <p className="mb-4">
            Our Privacy Policy, available at https://www.pawsense-ai.com/privacy, describes how we collect, use, and
            share information about you when you use our Services. By using our Services, you agree to our collection,
            use, and sharing of information as described in our Privacy Policy.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">6.2 Your Data Rights</h3>
          <p className="mb-4">
            You retain all rights, title, and interest in and to any data, content, or materials that you upload,
            submit, or otherwise provide to us in connection with your use of the Services ("Your Data"). You grant us a
            non-exclusive, worldwide, royalty-free license to use, copy, transmit, store, and back-up Your Data for the
            purpose of enabling your use of the Services, and for any other purpose related to provision of the Services
            to you.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">6.3 Aggregated Data</h3>
          <p className="mb-4">
            You agree that we may collect and use technical data and related information—including but not limited to
            technical information about your device, system and application software, and peripherals—that is gathered
            periodically to facilitate the provision of software updates, product support, and other services to you
            related to the Services. We may use this information, as long as it is in a form that does not personally
            identify you, to improve our products or to provide services or technologies to you.
          </p>
        </section>

        <section id="payment">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">7. PAYMENT TERMS</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">7.1 Fees</h3>
          <p className="mb-4">
            You agree to pay all fees specified in the applicable order form or as otherwise specified when you register
            for certain Services. Except as otherwise specified herein or in an order form, payment obligations are
            non-cancelable and fees paid are non-refundable.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">7.2 Payment Methods</h3>
          <p className="mb-4">
            We accept payment via the payment methods specified on our Website. You agree to provide accurate and
            complete billing information, including valid payment method information. By providing your payment
            information, you authorize us to charge your payment method for all fees incurred.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">7.3 Taxes</h3>
          <p className="mb-4">
            Unless otherwise stated, our fees do not include any taxes, levies, duties, or similar governmental
            assessments, including value-added, sales, use, or withholding taxes, assessable by any local, state,
            provincial, federal, or foreign jurisdiction (collectively, "Taxes"). You are responsible for paying all
            Taxes associated with your purchases.
          </p>
        </section>

        <section id="usage-restrictions">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">8. USAGE RESTRICTIONS</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">8.1 General Restrictions</h3>
          <p className="mb-4">You agree not to, and will not permit any third party to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              License, sell, rent, lease, transfer, assign, distribute, display, disclose, or otherwise commercially
              exploit the Services or make the Services available to any third party;
            </li>
            <li>Use the Services to process data on behalf of any third party;</li>
            <li>
              Modify, make derivative works of, disassemble, reverse compile, or reverse engineer any part of the
              Services;
            </li>
            <li>Access the Services in order to build a similar or competitive product or service;</li>
            <li>
              Copy, reproduce, distribute, republish, download, display, post, or transmit the Services in any form or
              by any means, except as permitted in these Terms;
            </li>
            <li>Remove or obscure any proprietary notices from the Services;</li>
            <li>
              Use the Services in any way that violates any applicable federal, state, local, or international law or
              regulation;
            </li>
            <li>
              Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which may
              harm Financial Planner AI or users of the Services;
            </li>
            <li>
              Use the Services in any manner that could disable, overburden, damage, or impair the Services or interfere
              with any other party's use of the Services;
            </li>
            <li>
              Use any robot, spider, or other automatic device, process, or means to access the Services for any
              purpose, including monitoring or copying any of the material on the Services;
            </li>
            <li>
              Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or
              technologically harmful;
            </li>
            <li>
              Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services, the
              server on which the Services are stored, or any server, computer, or database connected to the Services;
            </li>
            <li>Attack the Services via a denial-of-service attack or a distributed denial-of-service attack; or</li>
            <li>Otherwise attempt to interfere with the proper working of the Services.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">8.2 Content Restrictions</h3>
          <p className="mb-4">You agree not to upload, transmit, or otherwise provide any content that:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              Is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous,
              invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable;
            </li>
            <li>
              You do not have a right to make available under any law or under contractual or fiduciary relationships;
            </li>
            <li>Infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party;</li>
            <li>
              Contains software viruses or any other computer code, files, or programs designed to interrupt, destroy,
              or limit the functionality of any computer software or hardware or telecommunications equipment;
            </li>
            <li>
              Contains any unsolicited or unauthorized advertising, promotional materials, "junk mail," "spam," "chain
              letters," "pyramid schemes," or any other form of solicitation; or
            </li>
            <li>
              Contains any material that could give rise to any civil or criminal liability under applicable laws or
              regulations or that otherwise may be in conflict with these Terms and our Privacy Policy.
            </li>
          </ul>
        </section>

        <section id="intellectual-property">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">9. INTELLECTUAL PROPERTY RIGHTS</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">9.1 Ownership of Services</h3>
          <p className="mb-4">
            The Services, including all content, features, and functionality thereof, are owned by Financial Planner AI,
            its licensors, or other providers of such material and are protected by United States and international
            copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">9.2 Limited License</h3>
          <p className="mb-4">
            Subject to your compliance with these Terms, Financial Planner AI grants you a limited, non-exclusive,
            non-transferable, revocable license to access and use the Services for your personal or internal business
            purposes.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">9.3 Feedback</h3>
          <p className="mb-4">
            If you provide Financial Planner AI with any feedback, suggestions, recommendations, requests, or any other
            comments regarding the Services ("Feedback"), you hereby assign to Financial Planner AI all rights, title,
            and interest in and to the Feedback. Financial Planner AI is free to use, reproduce, disclose, and otherwise
            exploit any and all Feedback without compensation or attribution to you.
          </p>
        </section>

        <section id="third-party-services">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">10. THIRD-PARTY SERVICES</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">10.1 Third-Party Services</h3>
          <p className="mb-4">
            The Services may contain links to third-party websites, services, or resources that are not owned or
            controlled by Financial Planner AI. Financial Planner AI has no control over, and assumes no responsibility
            for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge
            and agree that Financial Planner AI is not responsible or liable for: (i) the availability or accuracy of
            such websites or resources; or (ii) the content, products, or services on or available from such websites or
            resources.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">10.2 Third-Party Terms</h3>
          <p className="mb-4">
            You acknowledge and agree that your use of any third-party website, service, or resource may be subject to
            terms and conditions imposed by the third party that operates or controls such website, service, or
            resource. We encourage you to read the terms and conditions and privacy policy of each third-party website
            or service that you visit or utilize.
          </p>
        </section>

        <section id="warranties">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">11. WARRANTIES AND DISCLAIMERS</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">11.1 Disclaimer of Warranties</h3>
          <p className="mb-4 font-semibold">
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE
            FOREGOING, FINANCIAL PLANNER AI EXPLICITLY DISCLAIMS ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, QUIET ENJOYMENT, OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF
            DEALING OR USAGE OF TRADE.
          </p>
          <p className="mb-4">
            Financial Planner AI makes no warranty that the Services will meet your requirements or be available on an
            uninterrupted, secure, or error-free basis. Financial Planner AI makes no warranty regarding the quality,
            accuracy, timeliness, truthfulness, completeness, or reliability of any information or content on the
            Services.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">11.2 No Professional Advice</h3>
          <p className="mb-4">
            As stated in Section 5.1, the Services do not constitute professional advice of any kind. Financial Planner
            AI is not responsible for any decisions or actions taken by you based on the information provided through
            the Services.
          </p>
        </section>

        <section id="liability">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">12. LIMITATION OF LIABILITY</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">12.1 Limitation of Liability</h3>
          <p className="mb-4 font-semibold">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL FINANCIAL PLANNER AI, ITS AFFILIATES, OR THEIR
            LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND,
            UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES,
            INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
            LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS
            OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT
            (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
          </p>
          <p className="mb-4">
            THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">12.2 Cap on Liability</h3>
          <p className="mb-4">
            WITHOUT LIMITING THE FOREGOING, FINANCIAL PLANNER AI'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR
            RELATING TO THESE TERMS OR YOUR USE OF THE SERVICES IS LIMITED TO THE AMOUNT YOU HAVE PAID TO FINANCIAL
            PLANNER AI FOR THE SERVICES IN THE 12 MONTHS PRIOR TO THE CLAIM OR $100, WHICHEVER IS GREATER.
          </p>
        </section>

        <section id="dispute-resolution">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">13. DISPUTE RESOLUTION</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">13.1 Binding Arbitration</h3>
          <p className="mb-4">
            YOU AND FINANCIAL PLANNER AI AGREE THAT ANY DISPUTE, CLAIM, OR CONTROVERSY ARISING OUT OF OR RELATING TO
            THESE TERMS OR THE SERVICES SHALL BE DETERMINED BY BINDING ARBITRATION. ARBITRATION MEANS THAT THE DISPUTE
            WILL BE RESOLVED BY A NEUTRAL ARBITRATOR INSTEAD OF IN A COURT BY A JUDGE OR JURY.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">13.2 Class Action Waiver</h3>
          <p className="mb-4">
            YOU AND FINANCIAL PLANNER AI AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS
            INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE
            PROCEEDING. Further, unless both you and Financial Planner AI agree otherwise, the arbitrator may not
            consolidate more than one person's claims with your claims, and may not otherwise preside over any form of a
            representative or class proceeding.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">13.3 Arbitration Procedures</h3>
          <p className="mb-4">
            The arbitration will be conducted by the American Arbitration Association ("AAA") under its rules and
            procedures, including the AAA's Consumer Arbitration Rules (as applicable), as modified by these Terms. The
            AAA's rules are available at www.adr.org. A form for initiating arbitration proceedings is available on the
            AAA's website.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">13.4 Exceptions</h3>
          <p className="mb-4">
            Notwithstanding the foregoing, you and Financial Planner AI agree that nothing in this Section will waive,
            preclude, or otherwise limit either of our rights to (i) bring an individual action in small claims court,
            (ii) pursue enforcement actions through applicable federal, state, or local agencies where such actions are
            available, (iii) seek injunctive relief in a court of law, or (iv) file suit in a court of law to address
            intellectual property infringement claims.
          </p>
        </section>

        <section id="indemnification">
  <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">14. INDEMNIFICATION</h2>
  <p className="mb-4">
    You agree to defend, indemnify, and hold harmless Financial Planner AI, its affiliates, licensors, and
    service providers, and its and their respective officers, directors, employees, contractors, agents,
    licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments,
    awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating
    to your violation of these Terms or your use of the Services, including, but not limited to, your User
    Contributions, any use of the Services' content, services, and products other than as expressly authorized
    in these Terms, or your use of any information obtained from the Services.
  </p>
</section>

        <section id="term-termination">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">15. TERM AND TERMINATION</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">15.1 Term</h3>
          <p className="mb-4">These Terms will remain in full force and effect while you use the Services.</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">15.2 Termination by You</h3>
          <p className="mb-4">
            You may terminate these Terms at any time by ceasing all use of the Services and closing your account.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">15.3 Termination by Financial Planner AI</h3>
          <p className="mb-4">
            Financial Planner AI may terminate or suspend your access to all or any part of the Services, with or
            without notice, at any time and for any reason, including, without limitation, if Financial Planner AI
            believes that you have violated or acted inconsistently with the letter or spirit of these Terms.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">15.4 Effect of Termination</h3>
          <p className="mb-4">
            Upon termination of these Terms, your right to use the Services will immediately cease. The following
            provisions of these Terms survive any termination: Sections 5 (Critical Limitations and Disclaimers), 9
            (Intellectual Property Rights), 11 (Warranties and Disclaimers), 12 (Limitation of Liability), 13 (Dispute
            Resolution), 14 (Indemnification), 15.4 (Effect of Termination), and 16 (General Provisions).
          </p>
        </section>

        <section id="general">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">16. GENERAL PROVISIONS</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">16.1 Entire Agreement</h3>
          <p className="mb-4">
            These Terms, together with the Privacy Policy and any other agreements expressly incorporated by reference
            herein, constitute the entire agreement between you and Financial Planner AI concerning your use of the
            Services.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">16.2 Waiver</h3>
          <p className="mb-4">
            No waiver by Financial Planner AI of any term or condition set out in these Terms shall be deemed a further
            or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure
            of Financial Planner AI to assert a right or provision under these Terms shall not constitute a waiver of
            such right or provision.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">16.3 Severability</h3>
          <p className="mb-4">
            If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be
            invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the
            minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">16.4 Assignment</h3>
          <p className="mb-4">
            These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but
            may be assigned by Financial Planner AI without restriction. Any attempted transfer or assignment in
            violation hereof shall be null and void.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">16.5 Governing Law</h3>
          <p className="mb-4">
            These Terms and any action related thereto will be governed by the laws of the State of New Jersey without
            regard to its conflict of laws provisions. The exclusive jurisdiction and venue of any action with respect
            to the subject matter of these Terms will be the state and federal courts located in New Jersey, and you
            waive any objection to jurisdiction and venue in such courts.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">16.6 Force Majeure</h3>
          <p className="mb-4">
            Financial Planner AI shall not be liable for any delay or failure to perform resulting from causes outside
            its reasonable control, including, but not limited to, acts of God, war, terrorism, riots, embargos, acts of
            civil or military authorities, fire, floods, accidents, strikes or shortages of transportation facilities,
            fuel, energy, labor or materials.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">16.7 Notices</h3>
          <p className="mb-4">
            Any notices or other communications provided by Financial Planner AI under these Terms, including those
            regarding modifications to these Terms, will be given: (i) via email; or (ii) by posting to the Services.
            For notices made by e-mail, the date of receipt will be deemed the date on which such notice is transmitted.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">16.8 Headings</h3>
          <p className="mb-4">
            The section titles in these Terms are for convenience only and have no legal or contractual effect.
          </p>
        </section>

        <section id="contact" className="mt-12 border-t pt-8">
          <h2 className="text-xl font-bold mb-4 text-[#2980b9]">17. CONTACT INFORMATION</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">17.1 General Inquiries</h3>
          <p className="mb-4">For general inquiries about the Services or these Terms, please contact us at:</p>
          <p className="mb-1">Financial Planner AI, LLC</p>
          <p className="mb-4">rpc@financialplanner-ai.com</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">17.2 Legal Notices</h3>
          <p className="mb-4">For legal notices, please contact us at:</p>
          <p className="mb-1">Financial Planner AI, LLC</p>
          <p className="mb-1">Attn: Legal Matter</p>
          <p className="mb-1">155 Glendale Drive</p>
          <p className="mb-1">Freehold, NJ 07728</p>
          <p>rpc@financialplanner-ai.com</p>
        </section>

        <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t">
          <p>Last Updated: March 21, 2025</p>
          <p>© 2025 Financial Planner AI, LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
