import LegalPagesWrapper from "@/components/legal-pages-wrapper"

export default function PrivacyPage() {
  return (
    <LegalPagesWrapper>
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
          processor/service provider on behalf of Financial Planner AI customers. For more information about the privacy
          practices of Financial Planner AI customers, please contact the relevant customer.
        </p>
        <p>
          Financial Planner AI reserves the right, at any time, to modify this Privacy Policy. If we modify how we
          collect, use, or share personal information, we will notify you by revising the "Last Updated" date at the top
          of this Privacy Policy and, in some cases, we may provide you with additional notice (such as sending you an
          email notification). In all cases, your continued use of the Service following posting or other notification
          of changes constitutes your acknowledgement of such changes. Please review this Privacy Policy periodically to
          keep up to date on our most current policies and practices.
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
            registration or agreement submission, records of products and services you have purchased from us, and other
            details about your use of the Service.
          </li>
          <li>
            <span className="font-medium">Personal Information Contained in Videos</span>, such as dog videos may
            include visible individuals, spoken names, locations, and other identifiable information. This information
            is redacted/removed from the video before video data is passed to our AI analysis partners for processing.
          </li>
          {/* Additional list items would continue */}
        </ul>
      </section>

      {/* Additional sections would continue in the same format */}

      <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t">
        <p>Last Updated: March 21, 2025</p>
        <p>© 2025 Financial Planner AI, LLC. All rights reserved.</p>
      </div>
    </LegalPagesWrapper>
  )
}

