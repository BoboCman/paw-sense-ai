import LegalPagesWrapper from "@/components/legal-pages-wrapper"

export default function CookiePolicyPage() {
  return (
    <LegalPagesWrapper>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-gray-500">Effective: March 21, 2025</p>
      </div>

      <section>
        <p className="mb-4">
          By using our website https://www.pawsense-ai.com/, you consent to the use of cookies in accordance with this
          Cookies Policy.
        </p>
        <p className="mb-4">
          You will have seen a pop-up to this effect on your first visit to this website. It may not appear on
          subsequent visits, but you may withdraw your consent at any time by following the instructions below.
        </p>
      </section>

      <section id="what-are-cookies">
        <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">What are Cookies?</h2>
        <p>
          A cookie is a text-only string of information that the Services transfer to the "cookie" file of the browser
          you are using so that the Services can recognize your computer when you re-visit and remember certain
          information about you, such as which pages you visit, choices you make from menus, and the time and date of
          your visit.
        </p>
      </section>

      <section id="types-of-cookies">
        <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">Types of Cookies</h2>
        <p className="mb-4">Our website uses three types of cookies:</p>
        <p className="mb-4">
          <span className="font-medium">(i) Session cookies:</span> these are temporary cookies that expire when you
          close your browser. Session cookies allow the Services to recognize your computer as you navigate between
          pages during a single browser session, allowing you to use the Services most efficiently.
        </p>
        <p className="mb-4">
          <span className="font-medium">(ii) Persistent cookies:</span> these are stored on your computer between
          browsing sessions until they expire or are deleted. They allow the Services to remember your preferences and
          tailor services to you.
        </p>
        <p>
          <span className="font-medium">(iii) Web beacons:</span> Pages of our website and our emails may contain small
          electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that
          permit us, for example, to count users who have visited those pages and for other related website statistics
          (for example, recording the popularity of certain website content and verifying system and server integrity).
        </p>
      </section>

      {/* Additional sections would continue in the same format */}

      <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t">
        <p>Last Updated: March 21, 2025</p>
        <p>© 2025 Financial Planner AI, LLC. All rights reserved.</p>
      </div>
    </LegalPagesWrapper>
  )
}

