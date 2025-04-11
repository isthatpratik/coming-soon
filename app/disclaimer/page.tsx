import { Metadata } from 'next'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'AI Content Disclaimer | Neural Paths',
  description: 'AI Content Disclaimer for Neural Paths website',
}

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="bg-[#F8F7F3] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2F2C28] mb-8">AI Enabled Content Notice</h1>
          <div className="prose prose-lg lg:prose-xl text-[#2F2C28]">
            <p className="text-lg lg:text-xl mb-8">
              This website features content, including text, images, and other media, created by humans (us!) with the assistance of advanced artificial intelligence (AI) technologies.
            </p>

            <p className="text-lg lg:text-xl mb-8">
              While we work hard to ensure the information is accurate, relevant, and high-quality, it&apos;s important to note that AI tools, while sophisticated, are not flawless and may occasionally generate content that is incorrect, incomplete, or imperfect—just like humans.
            </p>

            <p className="text-lg lg:text-xl mb-8">
              We encourage critical thinking and recommend independently verifying any information when needed. Though we strive to update and improve content as necessary, there may be instances where outdated or inaccurate information remains. If you come across any errors, we&apos;d love to hear from you!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 