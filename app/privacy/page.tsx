import { Metadata } from 'next'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Neural Paths',
  description: 'Privacy Policy for Neural Paths website',
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="bg-[#F8F7F3] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2F2C28] mb-8">Privacy Policy</h1>
          <div className="prose prose-lg lg:prose-xl text-[#2F2C28]">
            <p className="text-[#767676] mb-8 text-lg lg:text-xl">Effective Date: April, 2025<br />Website: https://neuralpaths.ai</p>

            <p className="text-lg lg:text-xl mb-8">Neural Paths (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you provide to us. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website.</p>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">1. Information We Collect</h2>
              <p className="text-lg lg:text-xl mb-4">We may collect the following types of information:</p>
              
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#2F2C28] mb-2">a. Personal Information</h3>
              <p className="text-lg lg:text-xl mb-4">You may voluntarily provide us with personal information, such as:</p>
              <ul className="list-disc pl-6 text-lg lg:text-xl mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Company/Organization</li>
                <li>Phone number</li>
              </ul>

              <h3 className="text-2xl lg:text-3xl font-semibold text-[#2F2C28] mb-2">b. Non-Personal Information</h3>
              <p className="text-lg lg:text-xl mb-4">We may automatically collect non-identifiable information, including:</p>
              <ul className="list-disc pl-6 text-lg lg:text-xl mb-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device type</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Referring website</li>
              </ul>
              <p className="text-lg lg:text-xl">We use cookies and similar tracking technologies to collect this data. You can manage your cookie preferences via your browser settings.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">2. How We Use Your Information</h2>
              <p className="text-lg lg:text-xl mb-4">We may use your information to:</p>
              <ul className="list-disc pl-6 text-lg lg:text-xl">
                <li>Respond to your inquiries or requests</li>
                <li>Improve our website and user experience</li>
                <li>Send newsletters or updates (with your consent)</li>
                <li>Analyze website performance and usage trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">3. Sharing Your Information</h2>
              <p className="text-lg lg:text-xl mb-4">We do not sell, rent, or trade your personal information. We may share your information with third-party service providers who assist us with website functionality or analytics, under strict confidentiality agreements.</p>
              <p className="text-lg lg:text-xl">We may also disclose your information if required by law or to protect our legal rights.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">4. Data Security</h2>
              <p className="text-lg lg:text-xl">We implement appropriate technical and organizational measures to protect your information. However, no transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">5. Your Rights</h2>
              <p className="text-lg lg:text-xl mb-4">Depending on your location, you may have rights to:</p>
              <ul className="list-disc pl-6 text-lg lg:text-xl mb-4">
                <li>Access the personal data we hold about you</li>
                <li>Correct or update your information</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent (where applicable)</li>
              </ul>
              <p className="text-lg lg:text-xl">To exercise any of these rights, please contact us at support@neuralpaths.ai.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">6. Third-Party Links</h2>
              <p className="text-lg lg:text-xl">Our website may contain links to other websites. We are not responsible for the privacy practices or content of those third-party sites.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">7. Children&apos;s Privacy</h2>
              <p className="text-lg lg:text-xl">Our website is not intended for children under the age of 13. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-lg lg:text-xl">We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Continued use of the site after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">9. Contact Us</h2>
              <p className="text-lg lg:text-xl">If you have any questions or concerns about this Privacy Policy, please contact us at:<br />
              📧 support@neuralpaths.ai</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 