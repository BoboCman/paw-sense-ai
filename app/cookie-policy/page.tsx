import LegalPagesWrapper from "../components/legal-pages-wrapper"

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

      <section id="analytics">
        <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">
          Information Collected by our Analytics Software
        </h2>
        <p className="mb-4">
          Some of the cookies we use are 'analytical' cookies. Our analytics software (Google Analytics, Facebook Pixel
          and LinkedIn) allows us to recognize and count the number of visitors and to see how visitors move around the
          Services when they are using the Services. This helps us to improve the way the Services work, e.g., by making
          sure that users are finding what they need easily.
        </p>
        <p className="mb-4">The following types of information are collected by our analytics software:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            User's demographic information, e.g., language preference and location (city, country/territory, continent,
            sub-continental region).
          </li>
          <li>
            User's behavior, e.g., whether the user is a new or returning visitor, the frequency of visits/date of last
            visit.
          </li>
          <li>User's technology, e.g., operating system, network/service provider (ISP and network host).</li>
          <li>
            Mobile information, e.g. whether the user accessed the Services via a mobile device and, if so, the type of
            device (brand, service provider, operating system and input selection method).
          </li>
          <li>
            Traffic source, e.g., direct (i.e., the user typed in the URL themselves) or referral (i.e., the user
            clicked on a link) and for referral traffic, the traffic source (search engine or link); also the Google
            search term (if applicable) that resulted in the link to the Website.
          </li>
          <li>
            Content viewed, e.g., pages, files, and directories clicked on, landing pages/exit pages and search words
            (if any) used on the Website.
          </li>
        </ul>
      </section>

      <section id="changing-settings">
        <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">Changing your cookie settings</h2>
        <p className="mb-4">
          Please note that internet browsers allow you to change your cookie settings. These settings are usually found
          in the 'options' or 'preferences' menu of your internet browser. In order to understand these settings, the
          following links may be helpful. Otherwise you should use the 'Help' option in your internet browser for more
          details.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cookie settings in Internet Explorer</li>
          <li>Cookie settings in Firefox</li>
          <li>Cookie settings in Chrome</li>
          <li>Cookie settings in Safari</li>
        </ul>
      </section>

      <section id="disabling">
        <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">Disabling cookies</h2>
        <p className="mb-4">
          If you do not want information collected through the use of cookies, please disable them by following the
          instructions for your browser. Information about the procedure you are required to follow in order to disable
          cookies can be found on https://www.allaboutcookies.org/manage-cookies/index.html.
        </p>
        <p className="mb-4">
          After your initial visit to this website we may change the cookies we use. This cookies policy will always
          allow you to know who is placing cookies, for what purpose and give you the means to disable them so you
          should check it from time to time.
        </p>
        <p>Please be aware that if cookies are disabled not all features of the Services may operate as intended.</p>
      </section>

      <section id="contact">
        <h2 className="text-xl font-bold mb-4 text-[#2980b9] border-b pb-2">Contact for More Information</h2>
        <p>
          If you have any questions about Financial Planner AI, LLC's cookies policies and practices, please send an
          email to: rpc@financialplanner-ai.com.
        </p>
      </section>

      <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t">
        <p>Last Updated: March 21, 2025</p>
        <p>© 2025 Financial Planner AI, LLC. All rights reserved.</p>
      </div>
    </LegalPagesWrapper>
  )
}

