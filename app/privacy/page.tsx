export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-8">
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

          {/* Additional sections would continue in the same format */}

          {/* For brevity, I'm not including all sections, but the pattern would continue */}
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

          {/* Additional sections would continue in the same format */}
        </section>

        <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t">
          <p>Last Updated: March 21, 2025</p>
          <p>© 2025 Financial Planner AI, LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

