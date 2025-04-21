import { Metadata } from 'next'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms of Use | NeuralArc',
  description: 'Terms of Use for NeuralArc website',
}

export default function TermsPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="bg-[#F8F7F3] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2F2C28] mb-8">Terms of Use</h1>
          <div className="prose prose-lg lg:prose-xl text-[#2F2C28]">
            <p className="text-[#767676] mb-8 text-lg lg:text-xl">Effective Date: April, 2025<br />Website: https://neuralpaths.ai</p>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">1. Acceptance of Terms</h2>
              <p className="text-lg lg:text-xl">By accessing or using this website, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, please do not use this website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">2. About NeuralArc</h2>
              <p className="text-lg lg:text-xl">NeuralArc provides strategic legal operations consulting and solutions for investors and founders. The content provided on this website is for informational purposes only and does not constitute legal advice.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">3. Use of Website</h2>
              <p className="text-lg lg:text-xl">You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use and enjoyment of this site by any third party.</p>
              <p className="text-lg lg:text-xl">You agree not to:</p>
              <ul className="list-disc pl-6 text-lg lg:text-xl">
                <li>Attempt to gain unauthorized access to the site, its servers, or any connected database.</li>
                <li>Copy, duplicate, or reproduce any content from the website without prior written permission.</li>
                <li>Use the website for any commercial or competitive purpose without our consent.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">4. Intellectual Property</h2>
              <p className="text-lg lg:text-xl">All content, including text, graphics, logos, and images displayed on the website are the property of NeuralArc or its licensors. You may not use, reproduce, or distribute any such materials without written permission.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">5. Disclaimer</h2>
              <p className="text-lg lg:text-xl">The website and its content are provided &quot;as is&quot; and without warranties of any kind, either express or implied. We do not guarantee the accuracy, reliability, or completeness of any information on the website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">6. Limitation of Liability</h2>
              <p className="text-lg lg:text-xl">To the fullest extent permitted by law, NeuralArc shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use the website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">7. Links to Other Websites</h2>
              <p className="text-lg lg:text-xl">This website may contain links to third-party websites. We do not endorse or assume responsibility for the content or privacy practices of any linked site.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">8. Changes to These Terms</h2>
              <p className="text-lg lg:text-xl">We may update these Terms of Use at any time without prior notice. Continued use of the website constitutes acceptance of the updated terms.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">9. Governing Law</h2>
              <p className="text-lg lg:text-xl">These Terms of Use shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-4">10. Contact Us</h2>
              <p className="text-lg lg:text-xl">If you have any questions about these Terms of Use, please contact us at:<br />
              📧 support@neuralpaths.ai</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 