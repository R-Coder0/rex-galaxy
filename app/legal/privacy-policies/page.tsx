
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Last updated: September 7, 2025
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-12 border border-white/10">
            <p className="text-lg text-center text-gray-300">
              At RexGalaxy, we take your privacy seriously. This policy explains how we collect, use,
              and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="md:col-span-1">
              <div className="sticky top-32 bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold mb-4 text-orange-400">Policy Sections</h3>
                <ul className="space-y-3">
                  {[
                    'Information We Collect',
                    'How We Use Information',
                    'Cookies & Tracking',
                    'Data Security',
                    'Data Retention',
                    'Your Rights',
                    'Policy Changes',
                    'Contact Us'
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block py-2 px-3 rounded-lg hover:bg-white/5 transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-3">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                {/* Information We Collect */}
                <div id="information-we-collect" className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-orange-400">Information We Collect</h2>
                  <div className="space-y-4">
                    <p>
                      We collect information you provide directly to us when you use our services,
                      including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>Contact information (name, email address, phone number)</li>
                      <li>Business information and project requirements</li>
                      <li>Communication preferences</li>
                      <li>Payment information for our services</li>
                      <li>Resumes and career information for job applicants</li>
                    </ul>
                    <p>
                      We also automatically collect certain information about your device and usage
                      of our services through cookies and similar technologies.
                    </p>
                  </div>
                </div>

                {/* How We Use Information */}
                <div id="how-we-use-information" className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-orange-400">How We Use Information</h2>
                  <div className="space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Send you technical notices, updates, and support messages</li>
                      <li>Communicate with you about products, services, and events</li>
                      <li>Monitor and analyze trends, usage, and activities</li>
                      <li>Detect, investigate, and prevent fraudulent transactions</li>
                    </ul>
                  </div>
                </div>

                {/* Cookies & Tracking */}
                <div id="cookies-&-tracking" className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-orange-400">Cookies & Tracking</h2>
                  <div className="space-y-4">
                    <p>
                      We use cookies and similar tracking technologies to track activity on our
                      services and hold certain information. Cookies are files with a small amount
                      of data which may include an anonymous unique identifier.
                    </p>
                    <p>Types of cookies we use:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>
                        <strong>Essential cookies:</strong> Required for the operation of our services
                      </li>
                      <li>
                        <strong>Analytical/performance cookies:</strong> Allow us to recognize and count
                        the number of visitors
                      </li>
                      <li>
                        <strong>Functionality cookies:</strong> Enable us to personalize content and
                        remember your preferences
                      </li>
                      <li>
                        <strong>Targeting cookies:</strong> Record your visit to our website, the pages
                        you visit, and the links you follow
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Data Security */}
                <div id="data-security" className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-orange-400">Data Security</h2>
                  <div className="space-y-4">
                    <p>
                      We implement appropriate technical and organizational measures to protect the
                      security of your personal information. However, please note that no method of
                      transmission over the Internet or electronic storage is 100% secure.
                    </p>
                    <p>
                      We maintain administrative, technical, and physical safeguards designed to
                      protect your personal information against accidental, unlawful, or unauthorized
                      destruction, loss, alteration, access, disclosure, or use.
                    </p>
                  </div>
                </div>

                {/* Data Retention */}
                <div id="data-retention" className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-orange-400">Data Retention</h2>
                  <div className="space-y-4">
                    <p>
                      We will only retain your personal information for as long as necessary to
                      fulfill the purposes we collected it for, including for the purposes of
                      satisfying any legal, accounting, or reporting requirements.
                    </p>
                    <p>
                      To determine the appropriate retention period, we consider the amount, nature,
                      and sensitivity of the personal data, the potential risk of harm from
                      unauthorized use or disclosure, the purposes for which we process it, and
                      whether we can achieve those purposes through other means.
                    </p>
                  </div>
                </div>

                {/* Your Rights */}
                <div id="your-rights" className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-orange-400">Your Rights</h2>
                  <div className="space-y-4">
                    <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>The right to access and receive a copy of your personal information</li>
                      <li>The right to rectify inaccurate or incomplete personal information</li>
                      <li>The right to request erasure of your personal information</li>
                      <li>The right to restrict or object to processing of your personal information</li>
                      <li>The right to data portability</li>
                      <li>The right to withdraw consent at any time</li>
                    </ul>
                    <p>
                      To exercise any of these rights, please contact us using the details provided
                      in the Contact Us section.
                    </p>
                  </div>
                </div>

                {/* Policy Changes */}
                <div id="policy-changes" className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-orange-400">Policy Changes</h2>
                  <div className="space-y-4">
                    <p>
                      We may update our Privacy Policy from time to time. We will notify you of any
                      changes by posting the new Privacy Policy on this page and updating the &quot;Last
                      updated&quot; date at the top of this Privacy Policy.
                    </p>
                    <p>
                      You are advised to review this Privacy Policy periodically for any changes.
                      Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </div>
                </div>

                {/* Contact Us */}
                <div id="contact-us">
                  <h2 className="text-2xl font-bold mb-6 text-orange-400">Contact Us</h2>
                  <div className="space-y-4">
                    <p>
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="bg-gray-700/50 p-6 rounded-lg">
                      <p className="font-medium">RexGalaxy</p>
                      <p>Email: rexgalaxytechnology@gmail.com</p>
                      <p>Address: Link 40, Ithum Tower Link, 6th Floor, 606
Noida, Uttar Pradesh 201301 India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}